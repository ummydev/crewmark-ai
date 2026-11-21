package main

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
)

// Pictures and videos the employee sends the person (MC-287). In Claude Code the agent puts a file in front of the
// person with SendUserFile, naming files on this computer. The turn lists them for the Work tab, which shows them from
// here, through the realtime Worker, without Crewmark keeping them: the browser asks the Worker for a file (with the
// byte range a video player asks for), the Worker asks this daemon down the employee's socket ("file.read"), and the
// daemon sends that part of the file back in pieces, which the Worker passes on as they come. So a file shows while
// this computer is on. Only the files the agent sent can be read, and only pictures and videos.

const (
	// Each piece goes up the socket as a message of its own, well under the Worker's 1 MiB a message.
	fileChunk = 256 << 10
	// How many pieces can be on their way before the Worker says it passed one on, so a paused video doesn't pile
	// the file up in the Worker.
	fileWindow = 4
	// How many files can be read at once for one employee's work: a video player asks for a few ranges at a time,
	// and one that has what it needs for now stops taking more.
	maxFileReads = 16
	// How long a read waits for the browser to take more before giving up: a paused video stops taking it.
	fileAckWait = 10 * time.Minute
)

// What shows in the Work tab, by the file's extension; what's in the file is checked before it's sent.
var (
	imageExtensions    = map[string]bool{".png": true, ".jpg": true, ".jpeg": true, ".gif": true, ".webp": true}
	videoExtensions    = map[string]string{".mp4": "video/mp4", ".m4v": "video/mp4", ".mov": "video/quicktime", ".webm": "video/webm"}
	markdownExtensions = map[string]bool{".md": true, ".markdown": true}
)

// workFile is a file the agent sent the person in a turn.
type workFile struct {
	// What the Work tab asks for it by: the call that sent it and its place in the call.
	ID   string `json:"id"`
	Name string `json:"name"`
	// "image" or "video", which the Work tab shows, "markdown", which it opens as a page (MC-359), or "file" for any
	// other kind, which only its name stands for.
	Kind    string `json:"kind"`
	Caption string `json:"caption,omitempty"`
	At      string `json:"at"`
	Size    int64  `json:"size,omitempty"`
	// Why it can't show: "missing" (not on this computer any more) or "unsupported" (not a picture or a video, or
	// not one a browser can show). Said when the turn is sent.
	Problem string `json:"problem,omitempty"`
	// On Pro, the attachment it was uploaded as, which the Work tab opens from Crewmark's storage (cloud_files.go).
	Stored string `json:"stored,omitempty"`
	// Where it is on this computer.
	path string
}

// sendUserFile reads a SendUserFile call's files, with paths relative to the folder the agent worked in.
func sendUserFile(input []byte, cwd, call, at string) []workFile {
	var in struct {
		Files   []string `json:"files"`
		Caption string   `json:"caption"`
	}
	if json.Unmarshal(input, &in) != nil {
		return nil
	}
	home, _ := os.UserHomeDir()
	var files []workFile
	for _, path := range in.Files {
		path = strings.TrimSpace(path)
		if path == "" {
			continue
		}
		if path == "~" || strings.HasPrefix(path, "~/") {
			path = filepath.Join(home, path[1:])
		} else if !filepath.IsAbs(path) && cwd != "" {
			path = filepath.Join(cwd, path)
		}
		files = append(files, workFile{
			ID: call + "." + strconv.Itoa(len(files)), Name: filepath.Base(path), Kind: fileKind(path), At: at, path: path,
		})
	}
	// The caption goes under the last of them.
	if len(files) > 0 {
		files[len(files)-1].Caption = clip(strings.TrimSpace(in.Caption), maxPromptChars)
	}
	return files
}

func fileKind(path string) string {
	ext := strings.ToLower(filepath.Ext(path))
	switch {
	case imageExtensions[ext]:
		return "image"
	case videoExtensions[ext] != "":
		return "video"
	case markdownExtensions[ext]:
		return "markdown"
	}
	return "file"
}

// describe says how big the file is now, or why it can't show.
func (f *workFile) describe() {
	f.Size, f.Problem = 0, ""
	info, err := os.Stat(f.path)
	switch {
	case err != nil:
		f.Problem = "missing"
	case info.IsDir() || f.Kind == "file":
		f.Problem = "unsupported"
	case f.Kind == "markdown" && info.Size() > maxCloudText:
		f.Problem = "unsupported"
	default:
		if _, ok := contentType(f.path, f.Kind); ok {
			f.Size = info.Size()
		} else {
			f.Problem = "unsupported"
		}
	}
}

// contentType is the type the file is sent as: what's in it must be the picture or video its name says.
func contentType(path, kind string) (string, bool) {
	file, err := os.Open(path)
	if err != nil {
		return "", false
	}
	head := make([]byte, 512)
	n, _ := io.ReadFull(file, head)
	file.Close()
	head = head[:n]
	switch kind {
	case "text":
		return textType(path)
	case "markdown":
		if _, ok := textType(path); ok {
			return "text/markdown; charset=utf-8", true
		}
		return "", false
	case "image":
		t := http.DetectContentType(head)
		return t, imageTypes[t]
	case "video":
		t := videoExtensions[strings.ToLower(filepath.Ext(path))]
		if t == "video/webm" {
			return t, bytes.HasPrefix(head, []byte{0x1a, 0x45, 0xdf, 0xa3})
		}
		// MP4 and QuickTime files are a series of boxes, each its size and then its type.
		if len(head) >= 8 {
			switch string(head[4:8]) {
			case "ftyp", "moov", "mdat", "wide", "free", "skip", "pnot":
				return t, true
			}
		}
	}
	return "", false
}

// fileHead is the daemon's answer to a read, before the file's bytes: an HTTP status, and for 200 and 206 the type,
// the whole size and the bytes that follow (start to end, inclusive).
type fileHead struct {
	Type        string `json:"type"`
	ID          string `json:"id"`
	Status      int    `json:"status"`
	ContentType string `json:"contentType,omitempty"`
	Name        string `json:"name,omitempty"`
	Size        int64  `json:"size"`
	Start       int64  `json:"start"`
	End         int64  `json:"end"`
}

// byteRange reads an HTTP Range header ("bytes=0-", "bytes=100-199", "bytes=-500") for a file of this size: the
// first and last byte, whether it was a range at all, and whether it can be met. Several ranges get the first.
func byteRange(header string, size int64) (start, end int64, partial, ok bool) {
	spec, found := strings.CutPrefix(strings.TrimSpace(header), "bytes=")
	if !found {
		return 0, size - 1, false, true
	}
	spec, _, _ = strings.Cut(spec, ",")
	first, last, found := strings.Cut(strings.TrimSpace(spec), "-")
	if !found {
		return 0, size - 1, false, true
	}
	if first == "" {
		n, err := strconv.ParseInt(last, 10, 64)
		if err != nil || n <= 0 || size == 0 {
			return 0, 0, true, false
		}
		return max(0, size-n), size - 1, true, true
	}
	start, err := strconv.ParseInt(first, 10, 64)
	if err != nil || start < 0 || start >= size {
		return 0, 0, true, false
	}
	end = size - 1
	if last != "" {
		if end, err = strconv.ParseInt(last, 10, 64); err != nil || end < start {
			return 0, 0, true, false
		}
		end = min(end, size-1)
	}
	return start, end, true, true
}

// fileRead is a read under way: the Worker's word that it passed a piece on, or that the browser stopped wanting it.
type fileRead struct {
	acks   chan struct{}
	cancel chan struct{}
	once   bool
}

// readFile answers the Worker's "file.read": the head, then the bytes in pieces, then "file.end".
func (w *workWatch) readFile(id, fileID, path, rangeHeader string) {
	answer := func(status int) {
		w.sendJSON(fileHead{Type: "file.head", ID: id, Status: status})
	}
	var file *workFile
	if path != "" {
		// A file the agent named (MC-315), by its path: read only within the rules of file_links.go.
		linked, err := w.linkedFile(path)
		if err != nil {
			logLinkedRead(w.name, path, err.Error())
			answer(http.StatusForbidden)
			return
		}
		logLinkedRead(w.name, linked.path, "")
		file = linked
	} else {
		file = w.findFile(fileID)
	}
	if file == nil {
		answer(http.StatusNotFound)
		return
	}
	kind, ok := contentType(file.path, file.Kind)
	info, err := os.Stat(file.path)
	if err != nil || !ok {
		answer(http.StatusNotFound)
		return
	}
	size := info.Size()
	start, end, partial, satisfiable := byteRange(rangeHeader, size)
	if !satisfiable {
		w.sendJSON(fileHead{Type: "file.head", ID: id, Status: http.StatusRequestedRangeNotSatisfiable, Size: size})
		return
	}
	read := &fileRead{acks: make(chan struct{}, fileWindow+1), cancel: make(chan struct{})}
	w.mu.Lock()
	if w.reads == nil {
		w.reads = map[string]*fileRead{}
	}
	busy := len(w.reads) >= maxFileReads
	if !busy {
		w.reads[id] = read
	}
	w.mu.Unlock()
	if busy {
		answer(http.StatusServiceUnavailable)
		return
	}
	defer func() {
		w.mu.Lock()
		delete(w.reads, id)
		w.mu.Unlock()
	}()
	status := http.StatusOK
	if partial {
		status = http.StatusPartialContent
	}
	w.sendJSON(fileHead{Type: "file.head", ID: id, Status: status, ContentType: kind, Name: file.Name, Size: size, Start: start, End: end})
	if size == 0 {
		w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": true})
		return
	}
	f, err := os.Open(file.path)
	if err != nil {
		w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": false})
		return
	}
	defer f.Close()
	if _, err := f.Seek(start, io.SeekStart); err != nil {
		w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": false})
		return
	}
	left := end - start + 1
	inFlight := 0
	piece := make([]byte, fileChunk)
	for left > 0 {
		for inFlight >= fileWindow {
			select {
			case <-read.acks:
				inFlight--
			case <-read.cancel:
				return
			case <-time.After(fileAckWait):
				w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": false})
				return
			}
		}
		n, err := io.ReadFull(f, piece[:min(int64(fileChunk), left)])
		if n > 0 {
			// A piece is the read's id (its length in the first byte), then the bytes.
			message := make([]byte, 0, 1+len(id)+n)
			message = append(append(append(message, byte(len(id))), id...), piece[:n]...)
			if w.raw(message, true) != nil {
				return
			}
			left -= int64(n)
			inFlight++
		}
		if err != nil && left > 0 {
			w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": false})
			return
		}
	}
	w.sendJSON(map[string]any{"type": "file.end", "id": id, "ok": true})
}

// fileAck and fileCancel pass on the Worker's word about a read.
func (w *workWatch) fileAck(id string) {
	w.mu.Lock()
	read := w.reads[id]
	w.mu.Unlock()
	if read != nil {
		select {
		case read.acks <- struct{}{}:
		default:
		}
	}
}

func (w *workWatch) fileCancel(id string) {
	w.mu.Lock()
	defer w.mu.Unlock()
	if read := w.reads[id]; read != nil && !read.once {
		read.once = true
		close(read.cancel)
	}
}

// findFile is the file the agent sent with this id, in the conversation as last read.
func (w *workWatch) findFile(id string) *workFile {
	tr, reason := w.transcript()
	if reason != "" {
		return nil
	}
	w.trMu.Lock()
	defer w.trMu.Unlock()
	if tr.offset == 0 {
		_, _ = w.read(tr)
	}
	for i := len(tr.turns) - 1; i >= 0; i-- {
		for _, file := range tr.turns[i].Files {
			if file.ID == id {
				return &file
			}
		}
	}
	return nil
}

func (w *workWatch) sendJSON(message any) {
	data, err := json.Marshal(message)
	if err == nil {
		err = w.raw(data, false)
	}
	if err != nil {
		log.Printf("%s: couldn't answer the web about a file: %v", w.name, err)
	}
}

// listedFile is a file the agent sent, for the conversation's media panel (MC-318), with how a message about it can
// name it for the agent: its path in the conversation's folder, or just its name when it's elsewhere, so where things
// are on this computer outside the folder isn't told the web.
type listedFile struct {
	workFile
	Path string `json:"path"`
}

func shownPath(path, workdir string) string {
	if workdir != "" {
		if rel, err := filepath.Rel(workdir, path); err == nil && rel != ".." && !strings.HasPrefix(rel, ".."+string(filepath.Separator)) {
			return filepath.ToSlash(rel)
		}
	}
	return filepath.Base(path)
}

// maxListedFiles keeps the list within one message up the socket.
const maxListedFiles = 1000

// listFiles sends the web every file the agent sent in the whole conversation, newest first, not just the turns
// shown: the media panel lists them all (MC-318). Nothing is sent when there's no conversation to read.
func (w *workWatch) listFiles() {
	tr, reason := w.transcript()
	if reason != "" {
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: reason})
		return
	}
	w.trMu.Lock()
	_, _ = w.read(tr)
	files := []listedFile{}
	// Newest first: the turns, and the calls in a turn, last first; a call's files in the order the agent sent them.
	for i := len(tr.turns) - 1; i >= 0 && len(files) < maxListedFiles; i-- {
		turn := tr.turns[i].Files
		for end := len(turn); end > 0 && len(files) < maxListedFiles; {
			call, _, _ := strings.Cut(turn[end-1].ID, ".")
			start := end - 1
			for start > 0 && strings.HasPrefix(turn[start-1].ID, call+".") {
				start--
			}
			for _, file := range turn[start:end] {
				// The panel opens it from Crewmark's storage when it's up there already; it doesn't put it in line.
				file.Stored = cloud.stored(w, &file, false)
				files = append(files, listedFile{workFile: file, Path: shownPath(file.path, w.profile.Workdir)})
			}
			end = start
		}
	}
	w.trMu.Unlock()
	w.post(worklogMessage{Type: "worklog.files", Files: files})
}
