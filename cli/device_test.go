package main

import (
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"testing"
)

// Tests never touch the real ~/.crewmark: every one starts with a home of its own, and those that need another set it.
func TestMain(m *testing.M) {
	dir, err := os.MkdirTemp("", "crewmark-test-")
	if err != nil {
		panic(err)
	}
	home = dir
	code := m.Run()
	os.RemoveAll(dir)
	os.Exit(code)
}

func TestMachineID(t *testing.T) {
	id := machineID()
	if !regexp.MustCompile(`^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`).MatchString(id) {
		t.Fatalf("machine id %q isn't a UUID", id)
	}
	data, err := os.ReadFile(filepath.Join(home, "device-id"))
	if err != nil || string(data) != id+"\n" {
		t.Fatalf("device-id holds %q, %v", data, err)
	}
	if machineID() != id {
		t.Fatal("the machine id changed")
	}
}

func TestStartEmployeeChecks(t *testing.T) {
	saved := home
	home = t.TempDir()
	defer func() { home = saved }()
	work := t.TempDir()
	if err := saveProfile("emp-1", employeeProfile{Name: "Sage", APIKey: "cmk_x", Workdir: work}); err != nil {
		t.Fatal(err)
	}
	start := employeeStart{Token: "cms_x", Workdir: work, Agent: "claude-code", Prompt: "hi"}
	cases := map[string]employeeStart{
		"codex isn't started":     {Token: "cms_x", Workdir: work, Agent: "codex", Prompt: "hi"},
		"an unknown folder":       {Token: "cms_x", Workdir: t.TempDir(), Agent: "claude-code", Prompt: "hi"},
		"a relative folder":       {Token: "cms_x", Workdir: "work", Agent: "claude-code", Prompt: "hi"},
		"a folder inside another": {Token: "cms_x", Workdir: filepath.Join(work, ".."), Agent: "claude-code", Prompt: "hi"},
		"no token":                {Workdir: work, Agent: "claude-code", Prompt: "hi"},
	}
	for name, c := range cases {
		if err := startEmployee("http://127.0.0.1:1", c); err == nil {
			t.Errorf("%s: started", name)
		}
	}
	// A known folder gets as far as the claude command, which isn't logged in here.
	t.Setenv("CREWMARK_CLAUDE", filepath.Join(t.TempDir(), "no-claude"))
	if err := startEmployee("http://127.0.0.1:1", start); err == nil || !regexp.MustCompile(`logged in|claude`).MatchString(err.Error()) {
		t.Errorf("a known folder: %v", err)
	}
}

func TestProxyFromScutil(t *testing.T) {
	t.Setenv("NO_PROXY", "")
	t.Setenv("no_proxy", "")
	out := `<dictionary> {
  ExceptionsList : <array> {
    0 : 127.0.0.1
    1 : localhost
  }
  HTTPEnable : 1
  HTTPPort : 7897
  HTTPProxy : 127.0.0.1
  HTTPSEnable : 1
  HTTPSPort : 7897
  HTTPSProxy : 127.0.0.1
}`
	got := strings.Join(proxyFromScutil(out), " ")
	want := "HTTPS_PROXY=http://127.0.0.1:7897 HTTP_PROXY=http://127.0.0.1:7897 NO_PROXY=127.0.0.1,localhost"
	if got != want {
		t.Fatalf("got %q, want %q", got, want)
	}
	if env := proxyFromScutil("<dictionary> {\n  HTTPEnable : 0\n}"); env != nil {
		t.Fatalf("no proxy set, got %v", env)
	}
}
