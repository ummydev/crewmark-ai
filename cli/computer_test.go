package main

import (
	"os"
	"path/filepath"
	"testing"
)

func TestOfferedFolders(t *testing.T) {
	userHome := t.TempDir()
	t.Setenv("HOME", userHome)
	saved := home
	home = filepath.Join(userHome, ".crewmark")
	t.Cleanup(func() { home = saved })
	for _, dir := range []string{"workspace/app/.git", "workspace/notes", "code/tool/.git", "workspace/.hidden/.git"} {
		if err := os.MkdirAll(filepath.Join(userHome, dir), 0o700); err != nil {
			t.Fatal(err)
		}
	}
	got := map[string]bool{}
	for _, dir := range offeredFolders() {
		got[dir] = true
	}
	want := []string{filepath.Join(userHome, "workspace", "app"), filepath.Join(userHome, "code", "tool")}
	if len(got) != len(want) {
		t.Fatalf("offered %v, want %v", got, want)
	}
	for _, dir := range want {
		if !got[dir] || !knownWorkdir(dir) {
			t.Errorf("%s isn't offered", dir)
		}
	}
	if knownWorkdir(filepath.Join(userHome, "workspace", "notes")) {
		t.Error("a folder without .git is offered")
	}
}
