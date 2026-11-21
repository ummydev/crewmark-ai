package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"runtime"
	"strings"
	"sync"
	"time"
)

// Delivering a message into the employee's agent conversation, so the agent reads it as a new message and acts:
//   - Claude Code (the app, a terminal or VS Code): every open conversation has an inbox socket, listed with the
//     session in ~/.claude/sessions/<pid>.json. A message there starts a turn when the conversation is idle and is read
//     between tool calls when it's busy. Claude Code shows it as a message from another session. The Claude app closes
//     a Code tab conversation that's been idle for a few hours; the daemon opens it there again with its claude://
//     link, as clicking it in the sidebar would, and delivers once it's open. The app only starts it on an unlocked
//     screen, though, so while the Mac is locked, or when the app hasn't started it within claudeAppWait, the daemon
//     resumes it in the background instead, as it does any other conversation that isn't open: `claude -p --resume`
//     in auto mode, when the claude command here is logged in. That run writes to the same conversation, so it goes
//     on in the app afterwards. An open conversation is never resumed, nor one already running in the background, or
//     two processes would write it and split it in two.
//   - Codex (the CLI or the app): `codex queue --resume` puts the message in the conversation's queue on Codex's local
//     app-server daemon and starts it.
//   - Any other agent acpx knows (OpenCode, DeepSeek Harness, Gemini CLI…, MC-417): a prompt to the employee's acpx
//     session (acp.go).

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
		if isACP(*profile.Runtime) {
			return deliverACP(employeeID, profile, text)
		}
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
	return nil, errors.New("the conversation isn't open")
}

// wakeClaude gets a conversation that isn't open ready for the message: the Claude app opens one of its own and the
// message goes in on a later round, unless the screen is locked or the app hasn't opened it in time; then, as any
// other conversation, it's resumed in the background with the message.
func wakeClaude(employeeID string, profile employeeProfile, text string) error {
	if runtime.GOOS != "darwin" {
		return resumeClaude(employeeID, profile, text, claudeAppConversation{})
	}
	app, err := claudeAppSession(*profile.SessionID)
	if err != nil {
		return err
	}
	if app == nil {
		return resumeClaude(employeeID, profile, text, claudeAppConversation{})
	}
	locked := screenLocked()
	asked, ok := claudeAppAsked[employeeID]
	if !locked && (!ok || time.Since(asked) < claudeAppWait) {
		return openInClaudeApp(employeeID, app.link)
	}
	if err := resumeClaude(employeeID, profile, text, *app); err != nil {
		// Nothing to resume it with: the app opens it, once the screen's unlocked if it isn't.
		opened := openInClaudeApp(employeeID, app.link)
		if locked {
			return fmt.Errorf("the screen is locked, so the Claude app won't open the conversation, and %v", err)
		}
		if !errors.Is(opened, errOpening) {
			return opened
		}
		return fmt.Errorf("the Claude app hasn't opened the conversation, and %v", err)
	}
	delete(claudeAppAsked, employeeID)
	return nil
}

// screenLocked says whether this Mac's screen is locked for the person the daemon runs as: macOS then lists
// CGSSessionScreenIsLocked=Yes on their console session in the I/O Registry. Swapped out in tests.
var screenLocked = func() bool {
	out, err := exec.Command("ioreg", "-n", "Root", "-d1").Output()
	return err == nil && consoleLocked(string(out), os.Getuid())
}

var consoleSession = regexp.MustCompile(`\{[^{}]*\}`)

func consoleLocked(ioreg string, uid int) bool {
	for _, session := range consoleSession.FindAllString(ioreg, -1) {
		if strings.Contains(session, fmt.Sprintf(`"kCGSSessionUserIDKey"=%d`, uid)) {
			return strings.Contains(session, `"CGSSessionScreenIsLocked"=Yes`)
		}
	}
	return false
}

// claudeAppSessions is where the Claude app keeps its Code tab conversations, a file each, under account and organization.
func claudeAppSessions() string {
	dir, _ := os.UserConfigDir()
	return filepath.Join(dir, "Claude", "claude-code-sessions")
}

// claudeAppConversation is a conversation the Claude app has: the claude:// link that opens it there, and the model
// and effort it runs with, which a background run keeps.
type claudeAppConversation struct {
	link, model, effort string
}

// claudeAppSession is the conversation as the Claude app has it, or nil when it isn't one of the app's. The app knows
// a conversation by an id of its own (local_…) and keeps Claude Code's next to it.
//
// Its "effort" is what it runs with, also when it follows the app's default (effortInherited): its requests to the
// model carry it, not the default (MC-380, which undid MC-343's reading of the default for the effort). The default's
// model still fills in where the conversation names none.
func claudeAppSession(sessionID string) (*claudeAppConversation, error) {
	files, _ := filepath.Glob(filepath.Join(claudeAppSessions(), "*", "*", "local_*.json"))
	for _, file := range files {
		var session struct {
			SessionID    string `json:"sessionId"`
			CLISessionID string `json:"cliSessionId"`
			IsArchived   bool   `json:"isArchived"`
			Model        string `json:"model"`
			Effort       string `json:"effort"`
		}
		if readJSON(file, &session) != nil || session.CLISessionID != sessionID || session.SessionID == "" {
			continue
		}
		if session.IsArchived {
			return nil, errors.New("the conversation is archived in the Claude app; unarchive it there to wake it")
		}
		app := &claudeAppConversation{
			link: "claude://claude.ai/epitaxy/" + session.SessionID, model: session.Model, effort: session.Effort,
		}
		if app.model == "" {
			app.model, _ = claudeAppDefaults(file)
		}
		return app, nil
	}
	return nil, nil
}

// claudeAppDefaults are the model and effort the Claude app gives a new conversation, for the
// account the conversation's file is under (claude-code-sessions/<account>/<organization>/local_….json): the app keeps
// them in ccd-session-presets.json. Empty when it can't tell.
func claudeAppDefaults(sessionFile string) (model, effort string) {
	account := filepath.Base(filepath.Dir(filepath.Dir(sessionFile)))
	var presets struct {
		ByAccount map[string]struct {
			BuiltIns struct {
				Local struct {
					Settings struct {
						ModelID string `json:"modelId"`
						Effort  string `json:"effort"`
					} `json:"settings"`
				} `json:"local"`
			} `json:"builtIns"`
		} `json:"byAccount"`
	}
	if readJSON(filepath.Join(filepath.Dir(claudeAppSessions()), "ccd-session-presets.json"), &presets) != nil {
		return "", ""
	}
	settings := presets.ByAccount[account].BuiltIns.Local.Settings
	return settings.ModelID, settings.Effort
}

var (
	// claudeAppAsked is when the daemon first asked the Claude app to open each employee's conversation, until it
	// opens or runs in the background; after claudeAppWait without it opening, it's run in the background instead.
	claudeAppAsked = map[string]time.Time{}
	// claudeAppOpened is when the daemon last asked; it asks again only after claudeAppRetry, so a conversation that
	// doesn't come up doesn't pull the app's window to it every round.
	claudeAppOpened = map[string]time.Time{}
)

const (
	claudeAppWait  = 2 * time.Minute
	claudeAppRetry = 5 * time.Minute
)

var errOpening = errors.New("opening the conversation in the Claude app; the message goes in once it's open")

func openInClaudeApp(employeeID, link string) error {
	if _, ok := claudeAppAsked[employeeID]; !ok {
		claudeAppAsked[employeeID] = time.Now()
	}
	if time.Since(claudeAppOpened[employeeID]) < claudeAppRetry {
		return errOpening
	}
	claudeAppOpened[employeeID] = time.Now()
	if out, err := openURL(link); err != nil {
		return fmt.Errorf("couldn't open the conversation in the Claude app: %v: %s", err, strings.TrimSpace(string(out)))
	}
	return errOpening
}

// openURL opens a link with macOS's open; swapped out in tests.
var openURL = func(link string) ([]byte, error) { return exec.Command("open", link).CombinedOutput() }

// backgroundRuns are the employees whose conversations run in the background (claude -p) right now. Their runs end
// on goroutines of their own, hence the lock.
var backgroundRuns = &runningSet{running: map[string]bool{}}

type runningSet struct {
	mu      sync.Mutex
	running map[string]bool
}

func (r *runningSet) has(id string) bool {
	r.mu.Lock()
	defer r.mu.Unlock()
	return r.running[id]
}

func (r *runningSet) set(id string, running bool) {
	r.mu.Lock()
	defer r.mu.Unlock()
	if running {
		r.running[id] = true
	} else {
		delete(r.running, id)
	}
}

func deliverClaude(employeeID string, profile employeeProfile, text string, whenIdle bool) error {
	if backgroundRuns.has(employeeID) {
		return errors.New("the conversation is running in the background (claude -p); messages wait until it's done")
	}
	session, err := openClaudeSession(*profile.SessionID)
	if err != nil {
		return wakeClaude(employeeID, profile, text)
	}
	delete(claudeAppAsked, employeeID)
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
// auto mode since nobody is there to answer permission prompts, with the model and effort the Claude app runs it with
// (if it's one of the app's). It returns once the run has started; the run's output goes to the employee's
// claude.log. Without a signed-in claude command the message waits for the conversation to be opened.
func resumeClaude(employeeID string, profile employeeProfile, text string, app claudeAppConversation) error {
	claude, err := signedInClaude()
	if err != nil {
		return fmt.Errorf("%v, so the conversation can't be resumed in the background: open it in Claude Code instead", err)
	}
	args := resumeArgs(*profile.SessionID, app, readState(employeeID).Settings)
	if err := runClaudeInBackground(employeeID, profile.Workdir, claude, append(args, "--", text)); err != nil {
		return fmt.Errorf("couldn't resume the conversation: %v", err)
	}
	return nil
}

// resumeArgs are claude's flags to resume the conversation headless: the person's choices in Messages (MC-313) first,
// else the model and effort the Claude app runs it with, else Claude Code's own; auto mode unless they chose another
// that needs nobody to answer (a background run can't ask for permission). Extra folders that aren't on this computer
// are left out.
func resumeArgs(sessionID string, app claudeAppConversation, settings *agentSettings) []string {
	if settings == nil {
		settings = &agentSettings{}
	}
	pick := func(chosen, fallback string) string {
		if chosen != "" {
			return chosen
		}
		return fallback
	}
	mode := "auto"
	switch settings.PermissionMode {
	case "acceptEdits", "plan":
		mode = settings.PermissionMode
	}
	args := []string{"-p", "--resume", sessionID, "--permission-mode", mode}
	args = append(args, chromeArgs()...)
	if model := pick(settings.Model, app.model); model != "" {
		args = append(args, "--model", model)
	}
	if effort := pick(settings.Effort, app.effort); effort != "" {
		args = append(args, "--effort", effort)
	}
	for _, dir := range settings.AddDirs {
		if info, err := os.Stat(dir); err == nil && info.IsDir() {
			args = append(args, "--add-dir", dir)
		}
	}
	return args
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

// chromeArgs turn on Claude in Chrome (MC-364) for the conversations the daemon runs with the claude command: the app
// and an interactive claude have it from the person's settings, but `claude -p` leaves it off unless asked. Without
// the extension the tools just say Chrome isn't connected. CREWMARK_CHROME=off leaves it off on this computer.
func chromeArgs() []string {
	switch strings.ToLower(os.Getenv("CREWMARK_CHROME")) {
	case "off", "0", "false", "no":
		return nil
	}
	return []string{"--chrome"}
}
