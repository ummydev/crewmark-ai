package main

import (
	"archive/tar"
	"bytes"
	"compress/gzip"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestNodeVersionOK(t *testing.T) {
	for version, want := range map[string]bool{
		"v22.13.0\n": true, "v22.23.4": true, "v24.1.0": true, "v22.12.9": false, "v20.18.0": false, "": false, "nope": false,
	} {
		if got := nodeVersionOK(version); got != want {
			t.Errorf("%q: got %v", version, got)
		}
	}
}

func TestACPAgents(t *testing.T) {
	for _, id := range []string{"opencode", "deepseek-harness", "gemini"} {
		if !isACP(id) || labelOf(runtimes, id) == id {
			t.Errorf("%s should be an agent Crewmark reaches through acpx, with a name", id)
		}
	}
	for _, id := range []string{"claude-code", "codex", "other", ""} {
		if isACP(id) {
			t.Errorf("%s isn't reached through acpx", id)
		}
	}
	if name := acpSessionName("3b7b116d-e313-4679"); name != "crewmark-3b7b116d" {
		t.Errorf("session name %q", name)
	}
	args := strings.Join(acpxArgs("cli.js", "opencode", "/w", "crewmark-1", "/p.txt"), " ")
	if args != "cli.js --cwd /w --approve-all --auth-policy fail --format quiet opencode -s crewmark-1 -f /p.txt" {
		t.Errorf("acpx args: %s", args)
	}
}

// Node's archive is unpacked without its top folder, and nothing in it lands outside the folder.
func TestUntarStripped(t *testing.T) {
	var buf bytes.Buffer
	gz := gzip.NewWriter(&buf)
	tw := tar.NewWriter(gz)
	add := func(h *tar.Header, body string) {
		h.Size = int64(len(body))
		if err := tw.WriteHeader(h); err != nil {
			t.Fatal(err)
		}
		_, _ = tw.Write([]byte(body))
	}
	add(&tar.Header{Name: "node-v1/bin/", Typeflag: tar.TypeDir, Mode: 0o755}, "")
	add(&tar.Header{Name: "node-v1/bin/node", Typeflag: tar.TypeReg, Mode: 0o755}, "#!node")
	add(&tar.Header{Name: "node-v1/lib/npm-cli.js", Typeflag: tar.TypeReg, Mode: 0o644}, "npm")
	add(&tar.Header{Name: "node-v1/bin/npm", Typeflag: tar.TypeSymlink, Linkname: "../lib/npm-cli.js"}, "")
	add(&tar.Header{Name: "node-v1/../../evil", Typeflag: tar.TypeReg, Mode: 0o644}, "x")
	add(&tar.Header{Name: "node-v1/bin/out", Typeflag: tar.TypeSymlink, Linkname: "../../../etc/passwd"}, "")
	tw.Close()
	gz.Close()

	dest := filepath.Join(t.TempDir(), "node")
	if err := untarStripped(buf.Bytes(), dest); err != nil {
		t.Fatal(err)
	}
	if data, err := os.ReadFile(filepath.Join(dest, "bin", "node")); err != nil || string(data) != "#!node" {
		t.Fatalf("bin/node: %q %v", data, err)
	}
	if data, err := os.ReadFile(filepath.Join(dest, "bin", "npm")); err != nil || string(data) != "npm" {
		t.Fatalf("bin/npm through its link: %q %v", data, err)
	}
	if _, err := os.Lstat(filepath.Join(dest, "bin", "out")); err == nil {
		t.Fatal("a link out of the folder was made")
	}
	if _, err := os.Stat(filepath.Join(filepath.Dir(filepath.Dir(dest)), "evil")); err == nil {
		t.Fatal("a file landed outside the folder")
	}
}
