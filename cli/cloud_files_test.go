package main

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"sync"
	"testing"
	"time"
)

// A fake Crewmark: keeps files for "pro", not for "free"; the upload goes to its own /put.
func fakeStorage(t *testing.T, plan string) (*httptest.Server, *[]map[string]any, *[][]byte) {
	var mu sync.Mutex
	asked := &[]map[string]any{}
	put := &[][]byte{}
	var server *httptest.Server
	server = httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		mu.Lock()
		defer mu.Unlock()
		switch r.URL.Path {
		case "/api/agent/work-files":
			var body map[string]any
			_ = json.NewDecoder(r.Body).Decode(&body)
			*asked = append(*asked, body)
			if plan == "free" {
				_ = json.NewEncoder(w).Encode(map[string]any{"kept": false, "reason": "free"})
				return
			}
			_ = json.NewEncoder(w).Encode(map[string]any{
				"kept": true, "id": "att-1",
				"upload": map[string]any{"url": server.URL + "/put", "headers": map[string]string{"content-type": body["type"].(string)}},
			})
		case "/put":
			data, _ := io.ReadAll(r.Body)
			*put = append(*put, data)
			w.WriteHeader(http.StatusNoContent)
		default:
			http.NotFound(w, r)
		}
	}))
	t.Cleanup(server.Close)
	return server, asked, put
}

func freshCloud(t *testing.T) {
	// The test home (TestMain) stays: swapping it would leave the machine id read from another (device.go).
	savedCloud := cloud
	_ = os.Remove(cloudFilesPath())
	cloud = &cloudFiles{entries: map[string]cloudEntry{}, queued: map[string]bool{}, failed: map[string]time.Time{},
		until: map[string]time.Time{}, jobs: make(chan cloudJob, 256)}
	t.Cleanup(func() {
		cloud = savedCloud
		_ = os.Remove(cloudFilesPath())
	})
}

func TestCloudFilesUploadsOnPro(t *testing.T) {
	freshCloud(t)
	server, asked, put := fakeStorage(t, "pro")
	dir := t.TempDir()
	path := filepath.Join(dir, "plan.md")
	if err := os.WriteFile(path, []byte("# Plan\n"), 0o644); err != nil {
		t.Fatal(err)
	}
	w := newWorkWatch("test", employeeProfile{URL: server.URL, APIKey: "key"}, func(worklogMessage) error { return nil })
	w.employeeID = "emp"
	file := workFile{ID: "c.0", Name: "plan.md", Kind: fileKind(path), path: path}
	file.describe()
	if file.Kind != "markdown" || file.Problem != "" {
		t.Fatalf("a Markdown file: kind %q, problem %q", file.Kind, file.Problem)
	}
	if id := cloud.stored(w, &file, false); id != "" {
		t.Fatalf("not uploaded yet, but stored is %q", id)
	}
	if err := cloud.upload(cloudJob{w: w, file: file}); err != nil {
		t.Fatal(err)
	}
	if len(*asked) != 1 || (*asked)[0]["type"] != "text/markdown" || (*asked)[0]["size"] != float64(7) {
		t.Fatalf("asked Crewmark %v", *asked)
	}
	if len(*put) != 1 || string((*put)[0]) != "# Plan\n" {
		t.Fatalf("uploaded %q", *put)
	}
	if id := cloud.stored(w, &file, false); id != "att-1" {
		t.Fatalf("stored is %q, want att-1", id)
	}
	// Remembered across restarts.
	cloud.loaded, cloud.entries = false, nil
	if id := cloud.stored(w, &file, false); id != "att-1" {
		t.Fatalf("after reloading, stored is %q", id)
	}
	// A file that changed is uploaded anew.
	later := time.Now().Add(time.Minute)
	if err := os.Chtimes(path, later, later); err != nil {
		t.Fatal(err)
	}
	if id := cloud.stored(w, &file, false); id != "" {
		t.Fatalf("changed since, but stored is %q", id)
	}
}

func TestCloudFilesNotOnFree(t *testing.T) {
	freshCloud(t)
	server, asked, put := fakeStorage(t, "free")
	path := filepath.Join(t.TempDir(), "shot.png")
	png := []byte("\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR")
	if err := os.WriteFile(path, png, 0o644); err != nil {
		t.Fatal(err)
	}
	w := newWorkWatch("test", employeeProfile{URL: server.URL, APIKey: "key"}, func(worklogMessage) error { return nil })
	w.employeeID = "emp"
	file := workFile{ID: "c.0", Name: "shot.png", Kind: "image", path: path}
	file.describe()
	if err := cloud.upload(cloudJob{w: w, file: file}); err != nil {
		t.Fatal(err)
	}
	if len(*asked) != 1 || len(*put) != 0 {
		t.Fatalf("asked %d times, uploaded %d", len(*asked), len(*put))
	}
	// Not asked again for a while.
	if cloud.stored(w, &file, true) != "" || len(cloud.jobs) != 0 {
		t.Fatal("put in line again right after Crewmark said the organization doesn't keep files")
	}
}

func TestCloudableSkipsSecretsAndOtherKinds(t *testing.T) {
	for _, f := range []workFile{
		{Kind: "image", path: "/x/.env.png"},
		{Kind: "file", path: "/x/notes.txt"},
		{Kind: "image", path: "/x/a.png", Problem: "missing"},
	} {
		if cloudable(&f) {
			t.Errorf("%+v shouldn't be uploaded", f)
		}
	}
	if !cloudable(&workFile{Kind: "video", path: "/x/a.mp4"}) {
		t.Error("a video should be")
	}
}
