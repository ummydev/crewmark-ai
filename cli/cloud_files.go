package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"
)

// Files the agent sends kept in Crewmark's storage, on Pro (MC-359). Reading a file from this computer through the
// realtime Worker (worklog_files.go) is slow for a big video, and works only while this computer is on. So when the
// employee's organization is on Pro, the daemon uploads each picture, video and Markdown file the agent sends, once,
// as the turn that sent it is first shown: it asks Crewmark (POST /api/agent/work-files), which says whether the
// organization keeps it (its plan, and its allowance for the month), and puts it where Crewmark says. The turn then
// names the file's attachment (workFile.Stored) and the Work tab opens it from there. Until it's up, or when it isn't
// kept, the Work tab reads it from here as before.
//
// Only the files the agent sent are uploaded, never ones that hold secrets (file_links.go), one at a time. What was
// uploaded is remembered in cloud-files.json, by the file's path, size and when it last changed, so a file that
// changes is uploaded anew. CREWMARK_CLOUD_FILES=off turns it off on this computer.

const (
	// How long the daemon waits before asking again for an organization that doesn't keep files (on Free), and after
	// an upload that failed.
	cloudAskAgain   = 10 * time.Minute
	cloudRetryAfter = 5 * time.Minute
	// A big video on a slow connection takes a while.
	cloudUploadTimeout = 2 * time.Hour
	// Markdown files are uploaded up to this; pictures and videos whatever their size, up to Crewmark's limit.
	maxCloudText = 10 << 20
)

func cloudFilesOff() bool {
	switch strings.ToLower(os.Getenv("CREWMARK_CLOUD_FILES")) {
	case "off", "0", "false", "no":
		return true
	}
	return false
}

// cloudEntry is a file uploaded, or on its way: the attachment it is, and the file as it was then.
type cloudEntry struct {
	ID      string `json:"id"`
	Size    int64  `json:"size"`
	ModTime int64  `json:"modTime"`
	// The upload finished: the attachment opens.
	Done bool `json:"done"`
}

type cloudJob struct {
	w    *workWatch
	file workFile
}

type cloudFiles struct {
	mu      sync.Mutex
	loaded  bool
	entries map[string]cloudEntry
	// Files waiting to be uploaded, and those whose upload failed lately (when), by key.
	queued map[string]bool
	failed map[string]time.Time
	// Until when not to ask for an employee's organization, which doesn't keep files now; by employee.
	until map[string]time.Time
	jobs  chan cloudJob
	start sync.Once
}

var cloud = &cloudFiles{
	entries: map[string]cloudEntry{},
	queued:  map[string]bool{},
	failed:  map[string]time.Time{},
	until:   map[string]time.Time{},
	jobs:    make(chan cloudJob, 256),
}

func cloudKey(employeeID, path string) string { return employeeID + "\n" + path }

func cloudFilesPath() string { return filepath.Join(home, "cloud-files.json") }

// load reads what was uploaded before, once. Under mu.
func (c *cloudFiles) load() {
	if c.loaded {
		return
	}
	c.loaded = true
	data, err := os.ReadFile(cloudFilesPath())
	if err == nil {
		_ = json.Unmarshal(data, &c.entries)
	}
	if c.entries == nil {
		c.entries = map[string]cloudEntry{}
	}
}

// save writes what was uploaded. Under mu.
func (c *cloudFiles) save() {
	data, err := json.Marshal(c.entries)
	if err != nil {
		return
	}
	tmp := cloudFilesPath() + ".tmp"
	if os.WriteFile(tmp, data, 0o600) == nil {
		_ = os.Rename(tmp, cloudFilesPath())
	}
}

// cloudable says whether a file the agent sent is one Pro keeps, as it is now (described).
func cloudable(f *workFile) bool {
	if f.Problem != "" || f.path == "" || isSecret(f.path) {
		return false
	}
	switch f.Kind {
	case "image", "video":
		return true
	case "markdown":
		return f.Size <= maxCloudText
	}
	return false
}

// stored is the attachment the file was uploaded as, when it's up and still the same file; else "", and when ask is
// set, the file is put in line to be uploaded (if this computer may and the organization might keep it).
func (c *cloudFiles) stored(w *workWatch, f *workFile, ask bool) string {
	if cloudFilesOff() || w.employeeID == "" || !cloudable(f) {
		return ""
	}
	info, err := os.Stat(f.path)
	if err != nil {
		return ""
	}
	key := cloudKey(w.employeeID, f.path)
	c.mu.Lock()
	defer c.mu.Unlock()
	c.load()
	entry, known := c.entries[key]
	if known && entry.Done && entry.Size == info.Size() && entry.ModTime == info.ModTime().UnixNano() {
		return entry.ID
	}
	if !ask || c.queued[key] || time.Now().Before(c.until[w.employeeID]) || time.Since(c.failed[key]) < cloudRetryAfter {
		return ""
	}
	select {
	case c.jobs <- cloudJob{w: w, file: *f}:
		c.queued[key] = true
		c.start.Do(func() { go c.work() })
	default: // The line is full: it's asked for again when the turn is next sent.
	}
	return ""
}

// work uploads the files in line, one at a time.
func (c *cloudFiles) work() {
	for job := range c.jobs {
		key := cloudKey(job.w.employeeID, job.file.path)
		err := c.upload(job)
		c.mu.Lock()
		delete(c.queued, key)
		if err != nil {
			c.failed[key] = time.Now()
		} else {
			delete(c.failed, key)
		}
		c.mu.Unlock()
		if err != nil {
			log.Printf("%s: couldn't keep %s in Crewmark's storage: %v", job.w.name, job.file.path, err)
		}
	}
}

// workFileUpload is Crewmark's answer: where to put the file, or why it isn't kept.
type workFileUpload struct {
	Kept     bool   `json:"kept"`
	ID       string `json:"id"`
	Reason   string `json:"reason"`
	ResetsAt string `json:"resetsAt"`
	Upload   struct {
		URL     string            `json:"url"`
		Headers map[string]string `json:"headers"`
	} `json:"upload"`
}

var cloudClient = &http.Client{Timeout: cloudUploadTimeout}

// upload asks Crewmark whether it keeps the file and, when it does, puts it there.
func (c *cloudFiles) upload(job cloudJob) error {
	w, f := job.w, job.file
	info, err := os.Stat(f.path)
	if err != nil {
		return nil // Gone since: nothing to keep.
	}
	kind, ok := contentType(f.path, f.Kind)
	if !ok {
		return nil
	}
	kind, _, _ = strings.Cut(kind, ";")
	key := cloudKey(w.employeeID, f.path)
	modTime := info.ModTime().UnixNano()

	body := map[string]any{"name": f.Name, "type": kind, "size": info.Size()}
	c.mu.Lock()
	// An upload of the same file that didn't finish: Crewmark sends it to the same attachment, not counting it again.
	if entry, known := c.entries[key]; known && !entry.Done && entry.Size == info.Size() {
		body["id"] = entry.ID
	}
	c.mu.Unlock()

	var answer workFileUpload
	if err := request(w.profile.URL, "/api/agent/work-files", w.profile.APIKey, "POST", body, &answer); err != nil {
		// Most likely a Crewmark from before MC-359; ask again later rather than for every file.
		c.wait(w.employeeID, time.Now().Add(cloudAskAgain))
		return err
	}
	if !answer.Kept {
		switch answer.Reason {
		case "free":
			c.wait(w.employeeID, time.Now().Add(cloudAskAgain))
		case "quota":
			until := time.Now().Add(time.Hour)
			if resets, err := time.Parse(time.RFC3339, answer.ResetsAt); err == nil && resets.After(until) {
				until = resets
			}
			log.Printf("%s: the organization used this month's room for files in Crewmark's storage; they show from this computer till %s",
				w.name, until.Local().Format("Jan 2"))
			c.wait(w.employeeID, until)
		}
		// "unsupported" or "too-big": this file stays here, the next one is asked about.
		return nil
	}

	c.mu.Lock()
	c.entries[key] = cloudEntry{ID: answer.ID, Size: info.Size(), ModTime: modTime}
	c.save()
	c.mu.Unlock()

	file, err := os.Open(f.path)
	if err != nil {
		return err
	}
	defer file.Close()
	req, err := http.NewRequest("PUT", answer.Upload.URL, io.LimitReader(file, info.Size()))
	if err != nil {
		return err
	}
	req.ContentLength = info.Size()
	for name, value := range answer.Upload.Headers {
		req.Header.Set(name, value)
	}
	req.Header.Set("User-Agent", "crewmark-cli/"+version)
	// Only Crewmark itself gets the key (in development it keeps the file); a storage address is signed already.
	if sameServer(answer.Upload.URL, w.profile.URL) {
		req.Header.Set("Authorization", "Bearer "+w.profile.APIKey)
	}
	started := time.Now()
	resp, err := cloudClient.Do(req)
	if err != nil {
		return err
	}
	detail, _ := io.ReadAll(io.LimitReader(resp.Body, 300))
	resp.Body.Close()
	// 409: in development, it was there already from an upload whose answer was lost.
	if (resp.StatusCode < 200 || resp.StatusCode > 299) && resp.StatusCode != http.StatusConflict {
		return fmt.Errorf("the upload answered %d %s", resp.StatusCode, strings.TrimSpace(string(detail)))
	}

	c.mu.Lock()
	c.entries[key] = cloudEntry{ID: answer.ID, Size: info.Size(), ModTime: modTime, Done: true}
	c.save()
	c.mu.Unlock()
	log.Printf("%s: kept %s (%s) in Crewmark's storage in %s", w.name, f.path, sizeLabel(info.Size()),
		time.Since(started).Round(time.Second))
	// Whoever is looking gets the turn anew, now naming where the file opens from.
	if w.isWatching() {
		go w.sendPage()
	}
	return nil
}

func (c *cloudFiles) wait(employeeID string, until time.Time) {
	c.mu.Lock()
	c.until[employeeID] = until
	c.mu.Unlock()
}

func sizeLabel(n int64) string {
	switch {
	case n >= 1<<30:
		return fmt.Sprintf("%.1f GB", float64(n)/(1<<30))
	case n >= 1<<20:
		return fmt.Sprintf("%.1f MB", float64(n)/(1<<20))
	}
	return fmt.Sprintf("%d KB", (n+1023)/1024)
}
