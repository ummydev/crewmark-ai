package main

import (
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"
)

func TestClaudeAppSession(t *testing.T) {
	config := t.TempDir()
	t.Setenv("HOME", config)
	t.Setenv("XDG_CONFIG_HOME", config)
	t.Setenv("AppData", config)
	org := filepath.Join(claudeAppSessions(), "account", "organization")
	if err := os.MkdirAll(org, 0o700); err != nil {
		t.Fatal(err)
	}
	write := func(name, content string) {
		if err := os.WriteFile(filepath.Join(org, name), []byte(content), 0o600); err != nil {
			t.Fatal(err)
		}
	}
	write("local_aaa.json", `{"sessionId":"local_aaa","cliSessionId":"cli-1","model":"claude-opus-5-5","effort":"high"}`)
	write("local_bbb.json", `{"sessionId":"local_bbb","cliSessionId":"cli-2","isArchived":true}`)
	write("local_ccc.json", `not json`)
	write("local_ddd.json", `{"sessionId":"local_ddd","cliSessionId":"cli-4","effort":"medium","effortInherited":true}`)

	want := claudeAppConversation{link: "claude://claude.ai/epitaxy/local_aaa", model: "claude-opus-5-5", effort: "high"}
	if app, err := claudeAppSession("cli-1"); err != nil || app == nil || *app != want {
		t.Errorf("an app conversation: got %+v, %v", app, err)
	}
	if _, err := claudeAppSession("cli-2"); err == nil {
		t.Error("an archived conversation should say so")
	}
	if app, err := claudeAppSession("cli-3"); err != nil || app != nil {
		t.Errorf("a conversation the app doesn't have: got %+v, %v", app, err)
	}
	if app, _ := claudeAppSession("cli-4"); app == nil || app.effort != "" {
		t.Errorf("an inherited effort isn't passed on: got %+v", app)
	}
}

func TestConsoleLocked(t *testing.T) {
	unlocked := `  "IOConsoleUsers" = ({"kCGSSessionOnConsoleKey"=Yes,"kCGSSessionUserNameKey"="alex","kCGSSessionUserIDKey"=501})`
	locked := `  "IOConsoleUsers" = ({"kCGSSessionOnConsoleKey"=Yes,"CGSSessionScreenIsLocked"=Yes,"kCGSSessionUserIDKey"=501})`
	other := `  "IOConsoleUsers" = ({"CGSSessionScreenIsLocked"=Yes,"kCGSSessionUserIDKey"=502},{"kCGSSessionUserIDKey"=501})`
	for _, c := range []struct {
		name, ioreg string
		want        bool
	}{
		{"unlocked", unlocked, false},
		{"locked", locked, true},
		{"someone else's screen is locked", other, false},
		{"no console user", `"IOConsoleUsers" = ()`, false},
	} {
		if got := consoleLocked(c.ioreg, 501); got != c.want {
			t.Errorf("%s: consoleLocked = %v, want %v", c.name, got, c.want)
		}
	}
}

// TestWakeClaude: a closed app conversation is opened in the app on an unlocked screen, and run in the background
// with the claude command when the screen is locked or the app hasn't opened it within claudeAppWait; while that run
// lasts, messages wait.
func TestWakeClaude(t *testing.T) {
	if runtime.GOOS != "darwin" {
		t.Skip("the Claude app's conversations are opened on macOS only")
	}
	dir := t.TempDir()
	t.Setenv("HOME", dir)
	t.Setenv("CLAUDE_CONFIG_DIR", filepath.Join(dir, ".claude"))
	saved := home
	home = dir
	defer func() { home = saved }()
	org := filepath.Join(claudeAppSessions(), "account", "organization")
	os.MkdirAll(org, 0o700)
	os.WriteFile(filepath.Join(org, "local_x.json"), []byte(`{"sessionId":"local_x","cliSessionId":"cli-x","model":"claude-opus-5-5"}`), 0o600)
	os.MkdirAll(filepath.Join(dir, "employees", "emp"), 0o700)

	// A claude command that's logged in and notes how it was run.
	calls := filepath.Join(dir, "calls")
	fake := filepath.Join(dir, "claude")
	os.WriteFile(fake, []byte("#!/bin/sh\nif [ \"$1\" = auth ]; then echo '{\"loggedIn\":true}'; exit; fi\n"+
		"echo \"$@\" >> "+calls+"\nsleep 1\n"), 0o700)
	t.Setenv("CREWMARK_CLAUDE", fake)

	var opened []string
	savedOpen, savedLocked := openURL, screenLocked
	openURL = func(link string) ([]byte, error) { opened = append(opened, link); return nil, nil }
	locked := false
	screenLocked = func() bool { return locked }
	defer func() {
		openURL, screenLocked = savedOpen, savedLocked
		clear(claudeAppAsked)
		clear(claudeAppOpened)
	}()
	id := "cli-x"
	profile := employeeProfile{Name: "Test", Runtime: ptr("claude-code"), SessionID: &id, Workdir: dir}
	ran := func() string { data, _ := os.ReadFile(calls); return string(data) }

	if err := deliverClaude("emp", profile, "hello", true); err != errOpening || len(opened) != 1 || ran() != "" {
		t.Fatalf("unlocked: got %v, opened %v, ran %q; want the app to open it", err, opened, ran())
	}
	if err := deliverClaude("emp", profile, "hello", true); err != errOpening || len(opened) != 1 {
		t.Fatalf("a round later: got %v, opened %d times; want to wait without opening again", err, len(opened))
	}
	claudeAppAsked["emp"] = time.Now().Add(-3 * time.Minute)
	if err := deliverClaude("emp", profile, "hello", true); err != nil {
		t.Fatalf("the app didn't open it in time: got %v; want a background run", err)
	}
	if err := deliverClaude("emp", profile, "next", true); err == nil || !strings.Contains(err.Error(), "background") {
		t.Fatalf("during the run: got %v; want the message to wait", err)
	}
	for backgroundRuns.has("emp") {
		time.Sleep(50 * time.Millisecond)
	}
	if got := ran(); got != "-p --resume cli-x --permission-mode auto --model claude-opus-5-5 hello\n" {
		t.Fatalf("ran claude with %q", got)
	}

	// Locked: straight to the background, without the app.
	locked, opened = true, nil
	clear(claudeAppAsked)
	clear(claudeAppOpened)
	if err := deliverClaude("emp", profile, "locked", true); err != nil || len(opened) != 0 {
		t.Fatalf("locked: got %v, opened %v; want a background run and no app", err, opened)
	}
	for backgroundRuns.has("emp") {
		time.Sleep(50 * time.Millisecond)
	}
	if !strings.HasSuffix(ran(), "locked\n") {
		t.Fatalf("locked: ran %q", ran())
	}
}

func ptr(s string) *string { return &s }
