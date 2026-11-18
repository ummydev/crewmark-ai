package main

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"io/fs"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// Images an employee attaches to an issue's description or a comment (MC-267): uploaded to Crewmark like one pasted
// in the dashboard, then put in the Markdown as ![name](/api/attachments/<id>), which the team sees as the picture.

const maxImageBytes = 10 << 20

var imageTypes = map[string]bool{"image/png": true, "image/jpeg": true, "image/gif": true, "image/webp": true}

// uploadedImage is an image on Crewmark and the Markdown that shows it.
type uploadedImage struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	URL      string `json:"url"`
	Markdown string `json:"markdown"`
}

type attachmentResponse struct {
	Attachment uploadedImage `json:"attachment"`
	Upload     struct {
		URL     string            `json:"url"`
		Headers map[string]string `json:"headers"`
	} `json:"upload"`
}

// uploader uploads as an employee (its API key) or as the person logged in with `crewmark login`.
type uploader struct{ baseURL, apiKey, path string }

func employeeUploader(profile employeeProfile) uploader {
	return uploader{profile.URL, profile.APIKey, "/api/agent/attachments"}
}

func accountUploader(account *accountProfile) uploader {
	return uploader{account.URL, account.APIKey, "/api/cli/attachments"}
}

// A big image on a slow connection takes longer than an API call.
var uploadClient = &http.Client{Timeout: 3 * time.Minute}

// readImage reads an image file and says what kind it is, or why it can't be attached.
func readImage(path string) ([]byte, string, error) {
	info, err := os.Stat(path)
	if errors.Is(err, fs.ErrNotExist) {
		return nil, "", fail("There's no file at %s", path)
	} else if err != nil {
		return nil, "", fail("Can't read %s: %v", path, err)
	}
	if info.IsDir() {
		return nil, "", fail("%s is a folder, not an image", path)
	}
	if info.Size() > maxImageBytes {
		return nil, "", fail("%s is over 10 MB, the most an image can be", path)
	}
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, "", fail("Can't read %s: %v", path, err)
	}
	if len(data) == 0 {
		return nil, "", fail("%s is empty", path)
	}
	kind := http.DetectContentType(data)
	if !imageTypes[kind] {
		return nil, "", fail("%s isn't a PNG, JPEG, GIF or WebP image (it looks like %s)", path, kind)
	}
	return data, kind, nil
}

// upload sends one image to Crewmark: it asks where to put the file, then puts it there.
func (u uploader) upload(path string) (uploadedImage, error) {
	data, kind, err := readImage(path)
	if err != nil {
		return uploadedImage{}, err
	}
	var res attachmentResponse
	start := map[string]any{"name": filepath.Base(path), "type": kind, "size": len(data)}
	if err := request(u.baseURL, u.path, u.apiKey, "POST", start, &res); err != nil {
		return uploadedImage{}, err
	}
	req, err := http.NewRequest("PUT", res.Upload.URL, bytes.NewReader(data))
	if err != nil {
		return uploadedImage{}, fail("Crewmark gave an upload address the CLI can't use: %v", err)
	}
	for name, value := range res.Upload.Headers {
		req.Header.Set(name, value)
	}
	req.Header.Set("User-Agent", "crewmark-cli/"+version)
	// Only Crewmark itself gets the key (in development it keeps the file); a storage address is signed already.
	if sameServer(res.Upload.URL, u.baseURL) {
		req.Header.Set("Authorization", "Bearer "+u.apiKey)
	}
	resp, err := uploadClient.Do(req)
	if err != nil {
		return uploadedImage{}, fail("Couldn't upload %s: %v", path, err)
	}
	defer resp.Body.Close()
	if resp.StatusCode < 200 || resp.StatusCode > 299 {
		detail, _ := io.ReadAll(io.LimitReader(resp.Body, 300))
		return uploadedImage{}, fail("Couldn't upload %s: the upload answered %d %s", path, resp.StatusCode,
			strings.TrimSpace(string(detail)))
	}
	return res.Attachment, nil
}

// uploadAll uploads the images in order, stopping at the first that fails.
func (u uploader) uploadAll(paths []string) ([]uploadedImage, error) {
	images := make([]uploadedImage, 0, len(paths))
	for _, path := range paths {
		image, err := u.upload(path)
		if err != nil {
			return nil, err
		}
		images = append(images, image)
	}
	return images, nil
}

func sameServer(a, b string) bool {
	x, errX := url.Parse(a)
	y, errY := url.Parse(b)
	return errX == nil && errY == nil && x.Scheme == y.Scheme && strings.EqualFold(x.Host, y.Host)
}

// withImages is the text with the images after it, each in a paragraph of its own.
func withImages(text string, images []uploadedImage) string {
	var parts []string
	if trimmed := strings.TrimSpace(text); trimmed != "" {
		parts = append(parts, trimmed)
	}
	for _, image := range images {
		parts = append(parts, image.Markdown)
	}
	return strings.Join(parts, "\n\n")
}

func imagesNote(images []uploadedImage) string {
	if len(images) == 1 {
		return " with an image"
	}
	if len(images) > 1 {
		return fmt.Sprintf(" with %d images", len(images))
	}
	return ""
}

// uploadCommand is `crewmark upload <image>...`: it uploads the images and prints the Markdown for each, to put in
// a description or comment wherever it belongs.
func uploadCommand(args []string) error {
	p, err := parseArgs(args, nil, nil)
	if err != nil {
		return err
	}
	if len(p.positionals) == 0 {
		return fail("Usage: crewmark upload <image>... (PNG, JPEG, GIF or WebP, up to 10 MB each)")
	}
	profile, account, err := issueAuthor(p.strings["employee"])
	if err != nil {
		return err
	}
	u := uploader{}
	if account != nil {
		u = accountUploader(account)
	} else {
		u = employeeUploader(*profile)
	}
	images, err := u.uploadAll(p.positionals)
	if err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(images)
	}
	for _, image := range images {
		fmt.Println(image.Markdown)
	}
	return nil
}
