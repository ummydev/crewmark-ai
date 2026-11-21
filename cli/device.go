package main

import (
	"crypto/rand"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"sync"
	"time"
)

// This computer, to Crewmark (MC-292). The CLI keeps a random id for it in ~/.crewmark/device-id and sends it with
// every request, so Crewmark knows which employees and logins are on the same computer. While the daemon's sockets are
// open, the person whose computer it is can start a new employee here from Crewmark: the Worker sends the daemon
// "employee.start" with a setup token, the folder and the conversation's first message, and the daemon connects the
// employee and starts its conversation in the background, as `claude -p` in that folder. The conversation is the
// employee from then on, and Crewmark's messages reach it as they reach any other.

var (
	machineOnce sync.Once
	machine     string
)

// machineID is this computer's id, made the first time it's asked for; "" if it can't be kept.
func machineID() string {
	machineOnce.Do(func() {
		path := filepath.Join(home, "device-id")
		if data, err := os.ReadFile(path); err == nil && len(strings.TrimSpace(string(data))) >= 8 {
			machine = strings.TrimSpace(string(data))
			return
		}
		id := newUUID()
		if os.MkdirAll(home, 0o700) != nil || os.WriteFile(path, []byte(id+"\n"), 0o600) != nil {
			return
		}
		machine = id
	})
	return machine
}

// newUUID is a random (version 4) UUID, as Claude Code takes for a session id.
func newUUID() string {
	b := make([]byte, 16)
	_, _ = rand.Read(b)
	b[6] = b[6]&0x0f | 0x40
	b[8] = b[8]&0x3f | 0x80
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:])
}

// localAgents are the agents on this computer that Crewmark can start employees in, for the daemon to tell it.
func localAgents() []string {
	var agents []string
	if _, err := claudePath(); err == nil {
		agents = append(agents, "claude-code")
	}
	if _, err := codexPath(); err == nil {
		agents = append(agents, "codex")
	}
	return append(agents, localACPAgents()...)
}

// employeeStart is what Crewmark sends to start an employee here.
type employeeStart struct {
	// A setup token for the employee, which the daemon connects it with.
	Token   string `json:"token"`
	Workdir string `json:"workdir"`
	Agent   string `json:"agent"`
	// The conversation's first message.
	Prompt string `json:"prompt"`
}

// knownWorkdir says whether Crewmark may start an employee in the folder: one this computer offers it (computer.go),
// which employees already work in or a project in the usual code folders. Crewmark only offers those, and the daemon
// checks, so nothing that reaches the socket can start an agent anywhere else on this computer.
func knownWorkdir(dir string) bool {
	for _, folder := range offeredFolders() {
		if folder == dir {
			return true
		}
	}
	return false
}

// startEmployee connects the employee with the start's token, on the Crewmark server at baseURL, and starts its
// conversation in the background; it returns once the conversation runs, or why it can't.
func startEmployee(baseURL string, start employeeStart) error {
	acp := isACP(start.Agent)
	if start.Agent != "claude-code" && !acp {
		return fmt.Errorf("this computer can't start %q employees", start.Agent)
	}
	dir := filepath.Clean(start.Workdir)
	if !filepath.IsAbs(dir) || !knownWorkdir(dir) {
		return errors.New("that folder isn't one this computer offers Crewmark")
	}
	if info, err := os.Stat(dir); err != nil || !info.IsDir() {
		return fmt.Errorf("the folder %s isn't on this computer any more", dir)
	}
	if strings.TrimSpace(start.Token) == "" || strings.TrimSpace(start.Prompt) == "" {
		return errors.New("Crewmark sent an incomplete start")
	}
	var claude string
	var err error
	if acp {
		// An agent reached through acpx (MC-417): its command line must be here; Node.js and acpx are set up now,
		// before the employee is connected, so a computer that can't run them says so.
		if a, _ := acpAgentByID(start.Agent); findTool(a.command) == "" {
			return fmt.Errorf("%s's command line (%s) isn't on this computer", a.name, a.command)
		}
		if _, _, err := acpxCommand(); err != nil {
			return err
		}
	} else if claude, err = signedInClaude(); err != nil {
		return err
	}

	sessionID, agent := newUUID(), start.Agent
	if acp {
		sessionID = acpSessionName(sessionID)
	}
	hostname, _ := os.Hostname()
	body := setupRequest{
		Token: start.Token, Runtime: &agent, SessionID: &sessionID,
		Hostname: hostname, Platform: runtime.GOOS + "-" + runtime.GOARCH, Workdir: dir,
	}
	var res setupResponse
	if err := request(baseURL, "/api/agent/setup", "", "POST", body, &res); err != nil {
		return err
	}
	err = saveProfile(res.Employee.ID, employeeProfile{
		Name: res.Employee.Name, Organization: res.Organization, URL: baseURL, APIKey: res.APIKey,
		Runtime: &agent, SessionID: &sessionID, Workdir: dir, ConnectedAt: time.Now().UTC().Format(time.RFC3339),
	})
	if err != nil {
		return fmt.Errorf("couldn't save the employee's API key here: %v", err)
	}
	if acp {
		profile := employeeProfile{Runtime: &agent, SessionID: &sessionID, Workdir: dir}
		if err := runACP(res.Employee.ID, profile, start.Prompt); err != nil {
			return err
		}
		log.Printf("%s: started as %s session %s in %s", res.Employee.Name, labelOf(runtimes, agent), sessionID, dir)
		return nil
	}
	args := append([]string{"-p", "--session-id", sessionID, "--permission-mode", "auto"}, chromeArgs()...)
	args = append(args, "--", start.Prompt)
	if err := runClaudeInBackground(res.Employee.ID, dir, claude, args); err != nil {
		return err
	}
	log.Printf("%s: started as Claude Code conversation %s in %s", res.Employee.Name, sessionID, dir)
	return nil
}

// signedInClaude is the claude command, once it's known to be logged in: background runs have nobody to log them in.
func signedInClaude() (string, error) {
	claude, err := claudePath()
	if err != nil {
		return "", errors.New("there's no claude command on this computer: install Claude Code's command line and log in")
	}
	var auth struct {
		LoggedIn bool `json:"loggedIn"`
	}
	status, err := exec.Command(claude, "auth", "status").Output()
	if err != nil || json.Unmarshal(status, &auth) != nil || !auth.LoggedIn {
		return "", errors.New("the claude command on this computer isn't logged in: run `claude` once and log in")
	}
	return claude, nil
}

// runClaudeInBackground runs claude with args in the folder, headless, its output going to the employee's claude.log.
// It returns once the run has started; until it's done, the employee's messages wait rather than start another run
// on the same conversation. The crewmark command is on its PATH, so the agent finds it by name.
func runClaudeInBackground(employeeID, dir, claude string, args []string) error {
	logDir := filepath.Join(home, "employees", employeeID)
	if err := os.MkdirAll(logDir, 0o700); err != nil {
		return err
	}
	logFile, err := os.OpenFile(filepath.Join(logDir, "claude.log"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o600)
	if err != nil {
		return err
	}
	run := exec.Command(claude, args...)
	run.Dir, run.Stdout, run.Stderr = dir, logFile, logFile
	if self, err := os.Executable(); err == nil {
		run.Env = append(os.Environ(), "PATH="+filepath.Dir(self)+string(os.PathListSeparator)+os.Getenv("PATH"))
	}
	if run.Env == nil {
		run.Env = os.Environ()
	}
	run.Env = append(run.Env, systemProxy()...)
	if err := run.Start(); err != nil {
		logFile.Close()
		return fmt.Errorf("couldn't start Claude Code: %v", err)
	}
	backgroundRuns.set(employeeID, true)
	go func() {
		_ = run.Wait()
		logFile.Close()
		backgroundRuns.set(employeeID, false)
	}()
	return nil
}

// The proxy the Mac is set to use (System Settings > Network > Proxies), as HTTPS_PROXY and HTTP_PROXY for Claude Code.
// The daemon starts from launchd, without the proxy a terminal or the Claude app has, and Claude Code doesn't read the
// system's: where Anthropic is only reached through a proxy, a conversation started in the background got nothing but
// "Connection dropped (ECONNRESET)". Nothing when a proxy is already in the environment, or none is set.
func systemProxy() []string {
	for _, name := range []string{"HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"} {
		if os.Getenv(name) != "" {
			return nil
		}
	}
	if runtime.GOOS != "darwin" {
		return nil
	}
	out, err := exec.Command("scutil", "--proxy").Output()
	if err != nil {
		return nil
	}
	return proxyFromScutil(string(out))
}

func proxyFromScutil(out string) []string {
	fields := map[string]string{}
	var exceptions []string
	inExceptions := false
	for _, line := range strings.Split(out, "\n") {
		line = strings.TrimSpace(line)
		if inExceptions {
			if line == "}" {
				inExceptions = false
			} else if _, host, ok := strings.Cut(line, " : "); ok {
				exceptions = append(exceptions, strings.TrimSpace(host))
			}
			continue
		}
		key, value, ok := strings.Cut(line, " : ")
		if !ok {
			continue
		}
		key, value = strings.TrimSpace(key), strings.TrimSpace(value)
		if key == "ExceptionsList" {
			inExceptions = true
			continue
		}
		fields[key] = value
	}
	address := func(kind string) string {
		if fields[kind+"Enable"] != "1" || fields[kind+"Proxy"] == "" {
			return ""
		}
		host := fields[kind+"Proxy"]
		if port := fields[kind+"Port"]; port != "" {
			host += ":" + port
		}
		return "http://" + host
	}
	https, http := address("HTTPS"), address("HTTP")
	if https == "" {
		https = http
	}
	if https == "" {
		return nil
	}
	env := []string{"HTTPS_PROXY=" + https}
	if http != "" {
		env = append(env, "HTTP_PROXY="+http)
	}
	if len(exceptions) > 0 && os.Getenv("NO_PROXY") == "" && os.Getenv("no_proxy") == "" {
		env = append(env, "NO_PROXY="+strings.Join(exceptions, ","))
	}
	return env
}
