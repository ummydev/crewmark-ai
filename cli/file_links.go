package main

import (
	"bytes"
	"errors"
	"log"
	"os"
	"path/filepath"
	"strings"
	"unicode/utf8"
)

// Files the agent names in its replies, opened from Messages (MC-315): "see docs/plan.md" becomes a link that shows the
// file, read from this computer when it's clicked, as the files it sends are (MC-287). Only the person whose computer
// this is gets a link that reads them (Crewmark checks before it signs one), and the daemon reads a file only when
// - the agent named it in this conversation, exactly as it's asked for;
// - it's in the conversation's folder or one of its extra folders (MC-313), after following links;
// - it isn't one that holds secrets (.env, keys, credentials), wherever it is;
// - it's text up to 2 MB or a picture up to 20 MB.
// Each read is logged. CREWMARK_FILE_LINKS=off turns it off on this computer.

const (
	maxLinkedText  = 2 << 20
	maxLinkedImage = 20 << 20
)

// secretNames are files never read, by name or by a folder they're in, whatever the agent said.
var secretNames = []string{
	".env", ".env.*", "*.pem", "*.key", "*.p12", "*.pfx", "id_rsa*", "id_ed25519*", "id_ecdsa*", "id_dsa*",
	"credentials*", ".npmrc", ".netrc", ".pypirc", ".git-credentials", "*.keystore", "secrets.*", ".dev.vars",
}
var secretFolders = []string{".ssh", ".aws", ".gnupg", ".kube", ".docker", ".config/gcloud", ".crewmark"}

func fileLinksOff() bool {
	switch strings.ToLower(os.Getenv("CREWMARK_FILE_LINKS")) {
	case "off", "0", "false", "no":
		return true
	}
	return false
}

// isSecret says whether the file holds secrets, by its name or a folder it's in.
func isSecret(path string) bool {
	name := strings.ToLower(filepath.Base(path))
	for _, pattern := range secretNames {
		if ok, _ := filepath.Match(pattern, name); ok {
			return true
		}
	}
	slashed := "/" + filepath.ToSlash(strings.ToLower(path)) + "/"
	for _, folder := range secretFolders {
		if strings.Contains(slashed, "/"+folder+"/") {
			return true
		}
	}
	return false
}

// within says whether path is dir or inside it.
func within(path, dir string) bool {
	rel, err := filepath.Rel(dir, path)
	return err == nil && rel != ".." && !strings.HasPrefix(rel, ".."+string(filepath.Separator)) && !filepath.IsAbs(rel)
}

// linkedFile is the file the agent named as `asked`, when it may be read: else why not, for the log.
func (w *workWatch) linkedFile(asked string) (*workFile, error) {
	if fileLinksOff() {
		return nil, errors.New("file links are off on this computer (CREWMARK_FILE_LINKS)")
	}
	asked = strings.TrimSpace(asked)
	if asked == "" || strings.ContainsRune(asked, 0) {
		return nil, errors.New("no path")
	}
	if !w.mentioned(asked) {
		return nil, errors.New("not named in the conversation")
	}
	workdir := w.profile.Workdir
	if workdir == "" {
		return nil, errors.New("the conversation has no folder")
	}
	path := asked
	if strings.HasPrefix(path, "~/") {
		home, _ := os.UserHomeDir()
		path = filepath.Join(home, path[2:])
	} else if !filepath.IsAbs(path) {
		path = filepath.Join(workdir, path)
	}
	real, err := filepath.EvalSymlinks(filepath.Clean(path))
	if err != nil {
		return nil, errors.New("no such file")
	}
	allowed := false
	for _, dir := range append([]string{workdir}, w.addDirs()...) {
		if realDir, err := filepath.EvalSymlinks(dir); err == nil && within(real, realDir) {
			allowed = true
			break
		}
	}
	if !allowed {
		return nil, errors.New("outside the conversation's folders")
	}
	if isSecret(real) || isSecret(path) {
		return nil, errors.New("a file that holds secrets")
	}
	info, err := os.Stat(real)
	if err != nil || !info.Mode().IsRegular() {
		return nil, errors.New("not a file")
	}
	kind := "text"
	if imageExtensions[strings.ToLower(filepath.Ext(real))] {
		kind = "image"
	}
	if (kind == "text" && info.Size() > maxLinkedText) || (kind == "image" && info.Size() > maxLinkedImage) {
		return nil, errors.New("too big to show")
	}
	return &workFile{Name: filepath.Base(real), Kind: kind, Size: info.Size(), path: real}, nil
}

// mentioned says whether the agent named the path in this conversation: in a reply, or in what it wrote along the way.
func (w *workWatch) mentioned(path string) bool {
	tr, reason := w.transcript()
	if reason != "" {
		return false
	}
	w.trMu.Lock()
	defer w.trMu.Unlock()
	if tr.offset == 0 {
		_, _ = w.read(tr)
	}
	for _, turn := range tr.turns {
		if strings.Contains(turn.Reply, path) {
			return true
		}
		for _, step := range turn.Steps {
			if step.Kind == "text" && strings.Contains(step.Summary, path) {
				return true
			}
		}
	}
	return false
}

// addDirs are the extra folders the person let the conversation use (MC-313), as the daemon last read them.
func (w *workWatch) addDirs() []string {
	if w.employeeID == "" {
		return nil
	}
	if settings := readState(w.employeeID).Settings; settings != nil {
		return settings.AddDirs
	}
	return nil
}

// textType is the type a text file is served as, or false when it isn't text (it's binary, or not UTF-8).
func textType(path string) (string, bool) {
	file, err := os.Open(path)
	if err != nil {
		return "", false
	}
	defer file.Close()
	head := make([]byte, 8192)
	n, _ := file.Read(head)
	head = head[:n]
	if bytes.IndexByte(head, 0) >= 0 {
		return "", false
	}
	// A multibyte character may be cut at the end of what was read.
	for i := 0; i < 3 && len(head) > 0 && !utf8.Valid(head); i++ {
		head = head[:len(head)-1]
	}
	if !utf8.Valid(head) {
		return "", false
	}
	return "text/plain; charset=utf-8", true
}

func logLinkedRead(name, path, why string) {
	if why == "" {
		log.Printf("%s: the web read %s (a file named in the conversation)", name, path)
	} else {
		log.Printf("%s: the web asked for %q, not read: %s", name, path, why)
	}
}
