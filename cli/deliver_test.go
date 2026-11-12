package main

import (
	"os"
	"path/filepath"
	"testing"
)

func TestClaudeAppLink(t *testing.T) {
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
	write("local_aaa.json", `{"sessionId":"local_aaa","cliSessionId":"cli-1","isArchived":false}`)
	write("local_bbb.json", `{"sessionId":"local_bbb","cliSessionId":"cli-2","isArchived":true}`)
	write("local_ccc.json", `not json`)

	if link, err := claudeAppLink("cli-1"); err != nil || link != "claude://claude.ai/epitaxy/local_aaa" {
		t.Errorf("an app conversation: got %q, %v", link, err)
	}
	if _, err := claudeAppLink("cli-2"); err == nil {
		t.Error("an archived conversation should say so")
	}
	if link, err := claudeAppLink("cli-3"); err != nil || link != "" {
		t.Errorf("a conversation the app doesn't have: got %q, %v", link, err)
	}
}
