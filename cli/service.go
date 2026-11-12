package main

import (
	"bytes"
	"encoding/xml"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
	"time"
)

// Keeping the daemon running: the operating system starts it when the user logs in and restarts it if it stops.
//   - macOS: a LaunchAgent, ~/Library/LaunchAgents/ai.crewmark.daemon.plist
//   - Linux: a systemd user service, ~/.config/systemd/user/crewmark.service
//   - Windows: a scheduled task that runs at logon, "Crewmark"
// `crewmark daemon install` sets it up, once the person agrees; installing again restarts it on the current binary,
// which the install scripts do when they upgrade a computer that has it.

const serviceLabel = "ai.crewmark.daemon"

// daemonExecutable is the installed CLI when there is one, so updating it updates the daemon.
func daemonExecutable() (string, error) {
	name := "crewmark"
	if runtime.GOOS == "windows" {
		name += ".exe"
	}
	installed := filepath.Join(home, "bin", name)
	if _, err := os.Stat(installed); err == nil {
		return installed, nil
	}
	return os.Executable()
}

// serviceEnvironment is what the daemon needs from the environment setup ran in: a service starts with almost
// nothing, so without PATH it can't find codex, and without the proxy settings it may not reach Crewmark or Codex.
func serviceEnvironment() map[string]string {
	env := map[string]string{}
	for _, key := range []string{
		"PATH", "HOME", "LANG", "CREWMARK_HOME", "CREWMARK_CODEX", "CLAUDE_CONFIG_DIR", "CODEX_HOME",
		"HTTPS_PROXY", "HTTP_PROXY", "ALL_PROXY", "NO_PROXY", "https_proxy", "http_proxy", "all_proxy", "no_proxy",
	} {
		if value := os.Getenv(key); value != "" {
			env[key] = value
		}
	}
	return env
}

func logPath() string { return filepath.Join(home, "daemon.log") }

// installService registers the daemon with the operating system and (re)starts it.
func installService(verbose bool) error {
	exe, err := daemonExecutable()
	if err != nil {
		return err
	}
	if err := os.MkdirAll(home, 0o700); err != nil {
		return err
	}
	switch runtime.GOOS {
	case "darwin":
		err = installLaunchAgent(exe)
	case "linux":
		err = installSystemdUnit(exe)
	case "windows":
		err = installScheduledTask(exe)
	default:
		err = fail("Running the daemon in the background isn't supported on %s: keep `crewmark daemon run` running.", runtime.GOOS)
	}
	if err == nil && verbose {
		fmt.Printf("The crewmark daemon is running and starts when you log in. Its log: %s\n", shortPath(logPath()))
	}
	return err
}

func launchAgentPath() string {
	userHome, _ := os.UserHomeDir()
	return filepath.Join(userHome, "Library", "LaunchAgents", serviceLabel+".plist")
}

func launchdTarget() string { return "gui/" + strconv.Itoa(os.Getuid()) }

func xmlText(s string) string {
	var b bytes.Buffer
	_ = xml.EscapeText(&b, []byte(s))
	return b.String()
}

func launchAgentPlist(exe string, env map[string]string) string {
	var vars strings.Builder
	for key, value := range env {
		fmt.Fprintf(&vars, "\t\t<key>%s</key>\n\t\t<string>%s</string>\n", xmlText(key), xmlText(value))
	}
	return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>` + serviceLabel + `</string>
	<key>ProgramArguments</key>
	<array>
		<string>` + xmlText(exe) + `</string>
		<string>daemon</string>
		<string>run</string>
	</array>
	<key>EnvironmentVariables</key>
	<dict>
` + vars.String() + `	</dict>
	<key>RunAtLoad</key>
	<true/>
	<key>KeepAlive</key>
	<true/>
	<key>ProcessType</key>
	<string>Background</string>
	<key>StandardOutPath</key>
	<string>` + xmlText(logPath()) + `</string>
	<key>StandardErrorPath</key>
	<string>` + xmlText(logPath()) + `</string>
</dict>
</plist>
`
}

func installLaunchAgent(exe string) error {
	path := launchAgentPath()
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	if err := os.WriteFile(path, []byte(launchAgentPlist(exe, serviceEnvironment())), 0o644); err != nil {
		return err
	}
	// Unload a running copy first, so the new binary and settings take effect. bootout returns before launchd has let
	// go of it, and bootstrapping in that window fails ("Bootstrap failed: 5: Input/output error") with the old copy
	// stopped and no new one: so wait until it's gone, and try a few times anyway.
	_ = exec.Command("launchctl", "bootout", launchdTarget()+"/"+serviceLabel).Run()
	waitFor(func() bool { return !launchdLoaded() }, 10*time.Second)
	for attempt := 1; ; attempt++ {
		out, err := exec.Command("launchctl", "bootstrap", launchdTarget(), path).CombinedOutput()
		if err == nil {
			break
		}
		if attempt == 5 {
			return fail("launchctl couldn't start the daemon: %s", strings.TrimSpace(string(out)))
		}
		time.Sleep(time.Second)
	}
	if !waitFor(func() bool { running, _ := serviceStatus(); return running }, 10*time.Second) {
		return fail("macOS loaded the daemon, but it isn't running. Its log may say why: %s", shortPath(logPath()))
	}
	return nil
}

// launchdLoaded says whether launchd has the daemon's LaunchAgent loaded, running or not.
func launchdLoaded() bool {
	return exec.Command("launchctl", "print", launchdTarget()+"/"+serviceLabel).Run() == nil
}

// waitFor checks done four times a second until it's true or the time is up, and says whether it came true.
func waitFor(done func() bool, limit time.Duration) bool {
	deadline := time.Now().Add(limit)
	for !done() {
		if time.Now().After(deadline) {
			return false
		}
		time.Sleep(250 * time.Millisecond)
	}
	return true
}

func systemdUnitPath() string {
	config := os.Getenv("XDG_CONFIG_HOME")
	if config == "" {
		userHome, _ := os.UserHomeDir()
		config = filepath.Join(userHome, ".config")
	}
	return filepath.Join(config, "systemd", "user", "crewmark.service")
}

func installSystemdUnit(exe string) error {
	if _, err := exec.LookPath("systemctl"); err != nil {
		return fail("This system has no systemd: keep `crewmark daemon run` running some other way.")
	}
	var unit strings.Builder
	unit.WriteString("[Unit]\nDescription=Crewmark daemon: heartbeats and messages for AI employees\n\n[Service]\n")
	fmt.Fprintf(&unit, "ExecStart=%s daemon run\nRestart=always\nRestartSec=10\n", strconv.Quote(exe))
	for key, value := range serviceEnvironment() {
		fmt.Fprintf(&unit, "Environment=%s\n", strconv.Quote(key+"="+value))
	}
	fmt.Fprintf(&unit, "StandardOutput=append:%s\nStandardError=append:%s\n\n[Install]\nWantedBy=default.target\n",
		logPath(), logPath())
	path := systemdUnitPath()
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	if err := os.WriteFile(path, []byte(unit.String()), 0o644); err != nil {
		return err
	}
	for _, args := range [][]string{
		{"--user", "daemon-reload"},
		{"--user", "enable", "crewmark.service"},
		{"--user", "restart", "crewmark.service"},
	} {
		if out, err := exec.Command("systemctl", args...).CombinedOutput(); err != nil {
			return fail("systemctl %s failed: %s", strings.Join(args, " "), strings.TrimSpace(string(out)))
		}
	}
	return nil
}

func installScheduledTask(exe string) error {
	run := strconv.Quote(exe) + " daemon run"
	if out, err := exec.Command("schtasks", "/Create", "/F", "/SC", "ONLOGON", "/RL", "LIMITED", "/TN", "Crewmark",
		"/TR", run).CombinedOutput(); err != nil {
		return fail("schtasks couldn't add the daemon: %s", strings.TrimSpace(string(out)))
	}
	_ = exec.Command("schtasks", "/End", "/TN", "Crewmark").Run()
	if out, err := exec.Command("schtasks", "/Run", "/TN", "Crewmark").CombinedOutput(); err != nil {
		return fail("schtasks couldn't start the daemon: %s", strings.TrimSpace(string(out)))
	}
	return nil
}

func uninstallService() error {
	switch runtime.GOOS {
	case "darwin":
		_ = exec.Command("launchctl", "bootout", launchdTarget()+"/"+serviceLabel).Run()
		_ = os.Remove(launchAgentPath())
	case "linux":
		_ = exec.Command("systemctl", "--user", "disable", "--now", "crewmark.service").Run()
		_ = os.Remove(systemdUnitPath())
		_ = exec.Command("systemctl", "--user", "daemon-reload").Run()
	case "windows":
		_ = exec.Command("schtasks", "/End", "/TN", "Crewmark").Run()
		_ = exec.Command("schtasks", "/Delete", "/F", "/TN", "Crewmark").Run()
	}
	fmt.Println("The crewmark daemon is stopped and won't start again until `crewmark daemon install`.")
	return nil
}

// serviceInstalled says whether the daemon is set up on this computer, running or not. Whether it runs is
// serviceStatus's to say: on macOS its file can be there without launchd having it loaded.
func serviceInstalled() bool {
	switch runtime.GOOS {
	case "darwin":
		_, err := os.Stat(launchAgentPath())
		return err == nil
	case "linux":
		_, err := os.Stat(systemdUnitPath())
		return err == nil
	case "windows":
		return exec.Command("schtasks", "/Query", "/TN", "Crewmark").Run() == nil
	}
	return false
}

// serviceStatus says whether the daemon is running, in words for `crewmark daemon status`.
func serviceStatus() (bool, string) {
	switch runtime.GOOS {
	case "darwin":
		out, err := exec.Command("launchctl", "print", launchdTarget()+"/"+serviceLabel).CombinedOutput()
		if err != nil {
			if serviceInstalled() {
				return false, "installed but not running: macOS hasn't loaded the LaunchAgent " + serviceLabel
			}
			return false, "not installed"
		}
		if strings.Contains(string(out), "state = running") {
			return true, "running (LaunchAgent " + serviceLabel + ")"
		}
		return false, "installed but not running (LaunchAgent " + serviceLabel + ")"
	case "linux":
		out, _ := exec.Command("systemctl", "--user", "is-active", "crewmark.service").Output()
		state := strings.TrimSpace(string(out))
		return state == "active", "systemd user service crewmark.service: " + state
	case "windows":
		out, err := exec.Command("schtasks", "/Query", "/TN", "Crewmark", "/FO", "LIST").CombinedOutput()
		if err != nil {
			return false, "not installed"
		}
		return strings.Contains(string(out), "Running"), "scheduled task Crewmark"
	}
	return false, "not supported on " + runtime.GOOS
}
