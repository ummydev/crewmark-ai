package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

// Delivering a message into the employee's agent conversation, so the agent reads it as a new message and acts:
//   - Claude Code (the app, a terminal or VS Code): every open conversation has an inbox socket, listed with the
//     session in ~/.claude/sessions/<pid>.json. A message there starts a turn when the conversation is idle and is read
//     between tool calls when it's busy. Claude Code shows it as a message from another session. A conversation that
//     isn't open is resumed with `claude -p --resume` in auto mode, when the claude command here is logged in; an open
//     one can't be, or two processes would write the conversation and split it in two.
//   - Codex (the CLI or the app): `codex queue --resume` puts the message in the conversation's queue on Codex's local
//     app-server daemon and starts it.

// undeliverable is a message that can never be delivered to this employee, so it isn't kept for later.
type undeliverable struct{ reason string }

func (u undeliverable) Error() string { return u.reason }

// deliver hands text to the employee's conversation; with whenIdle, only once the agent isn't in the middle of work.
func deliver(employeeID string, profile employeeProfile, text string, whenIdle bool) error {
	if profile.Runtime == nil || profile.SessionID == nil || *profile.SessionID == "" {
		return errors.New("no conversation is linked to the employee yet (crewmark link-session)")
	}
	switch *profile.Runtime {
	case "claude-code":
		return deliverClaude(employeeID, profile, text, whenIdle)
	case "codex":
		return deliverCodex(profile, text)
	default:
		return undeliverable{fmt.Sprintf("Crewmark can't send messages to %s conversations", labelOf(runtimes, *profile.Runtime))}
	}
}

// claudeSession is a running Claude Code session as it lists itself in ~/.claude/sessions.
type claudeSession struct {
	PID                 int    `json:"pid"`
	SessionID           string `json:"sessionId"`
	Status              string `json:"status"`
	MessagingSocketPath string `json:"messagingSocketPath"`
}

func claudeConfigDir() string {
	if dir := os.Getenv("CLAUDE_CONFIG_DIR"); dir != "" {
		return dir
	}
	userHome, _ := os.UserHomeDir()
	return filepath.Join(userHome, ".claude")
}

// openClaudeSession finds the conversation among the Claude Code sessions running on this computer.
func openClaudeSession(sessionID string) (*claudeSession, error) {
	files, _ := filepath.Glob(filepath.Join(claudeConfigDir(), "sessions", "*.json"))
	for _, file := range files {
		var session claudeSession
		if readJSON(file, &session) != nil || session.SessionID != sessionID || !processAlive(session.PID) {
			continue
		}
		return &session, nil
	}
	return nil, errors.New("the conversation isn't open; it gets the message once it's open in Claude Code again")
}

func deliverClaude(employeeID string, profile employeeProfile, text string, whenIdle bool) error {
	session, err := openClaudeSession(*profile.SessionID)
	if err != nil {
		return resumeClaude(employeeID, profile, text, err)
	}
	// Heartbeats and news wait for an idle agent; one that's working (or waiting on a permission prompt) is left alone.
	if whenIdle && session.Status != "" && session.Status != "idle" {
		return fmt.Errorf("the conversation is %s; messages wait until it's idle", session.Status)
	}
	if session.MessagingSocketPath == "" {
		return errors.New("this Claude Code can't receive messages; update Claude Code")
	}
	return postToInbox(strings.TrimPrefix(session.MessagingSocketPath, "uds:"), text)
}

// claudePath is the claude command a person signed in to: CREWMARK_CLAUDE, claude on PATH, or where the Claude Code
// installer puts it. Not the copy inside the Claude app, which has no login of its own.
func claudePath() (string, error) {
	if path := os.Getenv("CREWMARK_CLAUDE"); path != "" {
		return path, nil
	}
	if path, err := exec.LookPath("claude"); err == nil {
		return path, nil
	}
	userHome, _ := os.UserHomeDir()
	for _, path := range []string{
		filepath.Join(userHome, ".local", "bin", "claude"),
		filepath.Join(userHome, ".claude", "local", "claude"),
	} {
		if _, err := os.Stat(path); err == nil {
			return path, nil
		}
	}
	return "", errors.New("no claude command here")
}

// resumeClaude wakes a conversation that isn't open by running it headless: `claude -p --resume` in its folder, in
// auto mode since nobody is there to answer permission prompts. It returns once the run has started; the run's output
// goes to the employee's claude.log. Without a signed-in claude command the message waits for the conversation to
// open (notOpen says why).
func resumeClaude(employeeID string, profile employeeProfile, text string, notOpen error) error {
	claude, err := claudePath()
	if err != nil {
		return notOpen
	}
	var auth struct {
		LoggedIn bool `json:"loggedIn"`
	}
	status, err := exec.Command(claude, "auth", "status").Output()
	if err != nil || json.Unmarshal(status, &auth) != nil || !auth.LoggedIn {
		return fmt.Errorf("%v (the claude command here isn't logged in, so it can't be resumed in the background)", notOpen)
	}
	logFile, err := os.OpenFile(filepath.Join(home, "employees", employeeID, "claude.log"),
		os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o600)
	if err != nil {
		return err
	}
	run := exec.Command(claude, "-p", "--resume", *profile.SessionID, "--permission-mode", "auto", text)
	run.Dir, run.Stdout, run.Stderr = profile.Workdir, logFile, logFile
	if err := run.Start(); err != nil {
		logFile.Close()
		return fmt.Errorf("couldn't resume the conversation: %v", err)
	}
	// While it runs, the conversation counts as open, so later messages go to its inbox.
	go func() {
		_ = run.Wait()
		logFile.Close()
	}()
	return nil
}

// codexPath is the codex command: CREWMARK_CODEX, codex on PATH, or the one inside the Codex (ChatGPT) app.
func codexPath() (string, error) {
	if path := os.Getenv("CREWMARK_CODEX"); path != "" {
		return path, nil
	}
	if path, err := exec.LookPath("codex"); err == nil {
		return path, nil
	}
	userHome, _ := os.UserHomeDir()
	for _, app := range []string{"/Applications", filepath.Join(userHome, "Applications")} {
		for _, name := range []string{"ChatGPT.app", "Codex.app"} {
			path := filepath.Join(app, name, "Contents", "Resources", "codex-cli", "bin", "codex")
			if _, err := os.Stat(path); err == nil {
				return path, nil
			}
		}
	}
	return "", errors.New("can't find the codex command: install Codex, or set CREWMARK_CODEX to it")
}

func deliverCodex(profile employeeProfile, text string) error {
	codex, err := codexPath()
	if err != nil {
		return err
	}
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()
	// Queued messages run on Codex's shared local daemon; starting it does nothing when it's already up.
	_ = exec.CommandContext(ctx, codex, "app-server", "daemon", "start").Run()
	queue := exec.CommandContext(ctx, codex, "queue", "--thread", *profile.SessionID, "--message", text, "--resume")
	if profile.Workdir != "" {
		queue.Dir = profile.Workdir
	}
	if out, err := queue.CombinedOutput(); err != nil {
		return fmt.Errorf("codex queue failed: %v: %s", err, strings.TrimSpace(string(out)))
	}
	return nil
}
