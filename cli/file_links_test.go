package main

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// MC-315: a file the agent named is read only when it named it, it's in the conversation's folders, it holds no
// secrets and it's small enough; CREWMARK_FILE_LINKS=off turns it all off.
func TestLinkedFile(t *testing.T) {
	config := t.TempDir()
	t.Setenv("CLAUDE_CONFIG_DIR", config)
	t.Setenv("CREWMARK_FILE_LINKS", "")
	work := t.TempDir()
	outside := t.TempDir()
	write := func(path, content string) {
		if err := os.MkdirAll(filepath.Dir(path), 0o700); err != nil {
			t.Fatal(err)
		}
		if err := os.WriteFile(path, []byte(content), 0o600); err != nil {
			t.Fatal(err)
		}
	}
	write(filepath.Join(work, "docs", "plan.md"), "# Plan\n")
	write(filepath.Join(work, ".env"), "KEY=secret\n")
	write(filepath.Join(work, "deploy", "id_rsa"), "key")
	write(filepath.Join(work, "notes", ".ssh", "config"), "host")
	write(filepath.Join(work, "big.txt"), strings.Repeat("a", maxLinkedText+1))
	write(filepath.Join(work, "blob.bin"), "a\x00b")
	write(filepath.Join(outside, "away.md"), "away")
	if err := os.Symlink(filepath.Join(outside, "away.md"), filepath.Join(work, "link.md")); err != nil {
		t.Fatal(err)
	}
	named := []string{"docs/plan.md", ".env", "deploy/id_rsa", "notes/.ssh/config", "big.txt", "blob.bin", "link.md",
		"../" + filepath.Base(outside) + "/away.md", filepath.Join(outside, "away.md")}
	transcript := `{"parentUuid":null,"isSidechain":false,"type":"user","message":{"role":"user","content":"Plan it"},"timestamp":"2026-11-12T10:00:00Z","turnOrigin":"human","turnPosition":{"promptIndex":1,"turnIndex":1}}` + "\n" +
		`{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Wrote ` + strings.Join(named, ", ") + `."}],"stop_reason":"end_turn"},"timestamp":"2026-11-12T10:00:09Z"}` + "\n"
	write(filepath.Join(config, "projects", "x", "sid.jsonl"), transcript)

	runtime, session := "claude-code", "sid"
	w := newWorkWatch("Muse", employeeProfile{Runtime: &runtime, SessionID: &session, Workdir: work}, func(worklogMessage) error { return nil })
	for path, want := range map[string]string{
		"docs/plan.md":                    "",
		"docs/other.md":                   "not named",
		".env":                            "secrets",
		"deploy/id_rsa":                   "secrets",
		"notes/.ssh/config":               "secrets",
		"big.txt":                         "too big",
		"link.md":                         "outside",
		filepath.Join(outside, "away.md"): "outside",
		"../" + filepath.Base(outside) + "/away.md": "outside",
	} {
		file, err := w.linkedFile(path)
		got := ""
		if err != nil {
			got = err.Error()
		}
		if (want == "") != (err == nil) || (want != "" && !strings.Contains(got, want)) {
			t.Errorf("%s: got %v %q, want %q", path, file, got, want)
		}
	}
	// Binary isn't text: its read is refused by the type check.
	if file, err := w.linkedFile("blob.bin"); err != nil {
		t.Errorf("blob.bin is named and in the folder: %v", err)
	} else if _, ok := contentType(file.path, file.Kind); ok {
		t.Error("a binary file isn't served as text")
	}
	if file, _ := w.linkedFile("docs/plan.md"); file == nil || file.Kind != "text" {
		t.Errorf("plan.md is text: %+v", file)
	} else if kind, ok := contentType(file.path, file.Kind); !ok || kind != "text/plain; charset=utf-8" {
		t.Errorf("plan.md's type: %q %v", kind, ok)
	}
	t.Setenv("CREWMARK_FILE_LINKS", "off")
	if _, err := w.linkedFile("docs/plan.md"); err == nil || !strings.Contains(err.Error(), "off") {
		t.Errorf("turned off: %v", err)
	}
}
