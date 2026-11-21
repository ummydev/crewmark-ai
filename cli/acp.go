package main

import (
	"archive/tar"
	"archive/zip"
	"bufio"
	"bytes"
	"compress/gzip"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
	"sync"
	"time"
)

// Employees in other coding agents, through acpx (MC-417). acpx (github.com/openclaw/acpx) is a command-line client
// for the Agent Client Protocol: `acpx <agent> -s <name> <prompt>` sends a prompt to a named, persistent session of
// any of the agents it knows (OpenCode, DeepSeek Harness, Gemini CLI, Cursor, Kimi, Qwen Code, Goose…), started in a
// folder, and queues it when a turn is already running. An employee in one of them is such a session, named after the
// employee, in its folder; the daemon delivers its messages and heartbeats as prompts to it. Claude Code and Codex
// keep their own ways (deliver.go).
//
// acpx runs on Node.js 22.13 or newer. The daemon uses the computer's own when it has one, and otherwise downloads
// Node's official build into ~/.crewmark/node, checked against nodejs.org's SHA-256 list; acpx itself is installed
// into ~/.crewmark/acpx, at the version below. The agent's own command line, and its login or API key, are the
// person's to set up: Crewmark doesn't install agents.

// acpAgent is an agent acpx can drive: its id there (also the employee's runtime), its name, and the command whose
// presence says it's installed here.
type acpAgent struct {
	id, name, command string
}

// acpAgents are acpx's built-in agents, but Claude Code and Codex, which Crewmark talks to directly. Kept in step with
// ACP_AGENTS in src/lib/types.ts.
var acpAgents = []acpAgent{
	{"opencode", "OpenCode", "opencode"},
	{"deepseek-harness", "DeepSeek Harness", "dsh"},
	{"gemini", "Gemini CLI", "gemini"},
	{"cursor", "Cursor", "cursor-agent"},
	{"copilot", "GitHub Copilot", "copilot"},
	{"kimi", "Kimi Code", "kimi"},
	{"qwen", "Qwen Code", "qwen"},
	{"goose", "Goose", "goose"},
	{"kilocode", "Kilo Code", "kilo"},
	{"droid", "Factory Droid", "droid"},
	{"devin", "Devin", "devin"},
	{"grok-build", "Grok Build", "grok"},
	{"iflow", "iFlow", "iflow"},
	{"junie", "Junie", "junie"},
	{"kiro", "Kiro", "kiro-cli-chat"},
	{"qoder", "Qoder", "qodercli"},
	{"trae", "Trae", "traecli"},
	{"openclaw", "OpenClaw", "openclaw"},
	{"pi", "Pi", "pi"},
	{"ante", "Ante", "ante"},
	{"antigravity", "Google Antigravity", "agy_acp_server.par"},
	{"fast-agent", "fast-agent", "fast-agent"},
	{"fx", "fx", "fx"},
	{"mcode", "MCode", "mcode"},
	{"mux", "Mux", "mux"},
	{"octomind", "Octomind", "octomind"},
	{"pool", "Poolside", "pool"},
	{"zeroclaw", "ZeroClaw", "zeroclaw"},
}

const (
	acpxVersion = "0.22.0"
	// The Node.js the daemon downloads when the computer has none new enough for acpx.
	nodeVersion = "22.23.4"
)

func acpAgentByID(id string) (acpAgent, bool) {
	for _, a := range acpAgents {
		if a.id == id {
			return a, true
		}
	}
	return acpAgent{}, false
}

// isACP says whether a runtime is one of the agents Crewmark reaches through acpx.
func isACP(runtimeID string) bool {
	_, ok := acpAgentByID(runtimeID)
	return ok
}

// acpSessionName is the name of the acpx session that is an employee, from a random id.
func acpSessionName(id string) string {
	short := id
	if len(short) > 8 {
		short = short[:8]
	}
	return "crewmark-" + short
}

// toolDirs are the folders, besides PATH, where agents' command lines and Node.js usually are: the daemon starts from
// launchd or systemd, with a PATH that has none of what a terminal's profile adds.
func toolDirs() []string {
	userHome, _ := os.UserHomeDir()
	dirs := filepath.SplitList(os.Getenv("PATH"))
	dirs = append(dirs,
		filepath.Join(home, "node", "bin"),
		filepath.Join(userHome, ".local", "bin"),
		filepath.Join(userHome, ".npm-global", "bin"),
		filepath.Join(userHome, ".opencode", "bin"),
		filepath.Join(userHome, ".bun", "bin"),
		filepath.Join(userHome, ".cargo", "bin"),
		filepath.Join(userHome, "go", "bin"),
		"/opt/homebrew/bin", "/usr/local/bin", "/usr/bin",
	)
	if runtime.GOOS == "windows" {
		dirs = append(dirs, filepath.Join(home, "node"), filepath.Join(os.Getenv("AppData"), "npm"))
	}
	// nvm's Node versions, newest last so the newest wins below.
	if found, _ := filepath.Glob(filepath.Join(userHome, ".nvm", "versions", "node", "*", "bin")); len(found) > 0 {
		dirs = append(dirs, found...)
	}
	seen := map[string]bool{}
	var out []string
	for _, dir := range dirs {
		if dir != "" && !seen[dir] {
			seen[dir] = true
			out = append(out, dir)
		}
	}
	return out
}

// findTool is the command in PATH or one of toolDirs, or "".
func findTool(name string) string {
	if path, err := exec.LookPath(name); err == nil {
		return path
	}
	for _, dir := range toolDirs() {
		for _, candidate := range executableNames(filepath.Join(dir, name)) {
			if info, err := os.Stat(candidate); err == nil && !info.IsDir() {
				return candidate
			}
		}
	}
	return ""
}

func executableNames(path string) []string {
	if runtime.GOOS == "windows" {
		return []string{path + ".exe", path + ".cmd", path}
	}
	return []string{path}
}

// localACPAgents are the acpx agents whose command line is on this computer.
func localACPAgents() []string {
	var found []string
	for _, a := range acpAgents {
		if findTool(a.command) != "" {
			found = append(found, a.id)
		}
	}
	return found
}

// nodeVersionOK says whether `node --version` output is 22.13 or newer.
func nodeVersionOK(version string) bool {
	parts := strings.SplitN(strings.TrimPrefix(strings.TrimSpace(version), "v"), ".", 3)
	if len(parts) < 2 {
		return false
	}
	major, err1 := strconv.Atoi(parts[0])
	minor, err2 := strconv.Atoi(parts[1])
	if err1 != nil || err2 != nil {
		return false
	}
	return major > 22 || (major == 22 && minor >= 13)
}

var acpxMu sync.Mutex

// acpxCommand is the node and acpx script to run acpx with, setting them up the first time: Node.js when there's none
// new enough here, then acpx.
func acpxCommand() (node, script string, err error) {
	acpxMu.Lock()
	defer acpxMu.Unlock()
	node, err = usableNode()
	if err != nil {
		return "", "", err
	}
	prefix := filepath.Join(home, "acpx")
	script = filepath.Join(prefix, "node_modules", "acpx", "dist", "cli.js")
	if installedACPX(prefix) == acpxVersion {
		return node, script, nil
	}
	npm := npmFor(node)
	if npm == "" {
		return "", "", errors.New("found Node.js but not npm next to it, so acpx can't be installed")
	}
	if err := os.MkdirAll(prefix, 0o700); err != nil {
		return "", "", err
	}
	install := exec.Command(node, npm, "install", "--prefix", prefix, "--no-audit", "--no-fund", "--loglevel=error",
		"acpx@"+acpxVersion)
	install.Env = toolEnv(node)
	if out, err := install.CombinedOutput(); err != nil {
		return "", "", fmt.Errorf("couldn't install acpx: %v: %s", err, lastLines(string(out), 3))
	}
	if installedACPX(prefix) != acpxVersion {
		return "", "", errors.New("acpx didn't install")
	}
	return node, script, nil
}

func installedACPX(prefix string) string {
	var pkg struct {
		Version string `json:"version"`
	}
	if readJSON(filepath.Join(prefix, "node_modules", "acpx", "package.json"), &pkg) != nil {
		return ""
	}
	return pkg.Version
}

// usableNode is a node command new enough for acpx: the computer's, else the one Crewmark downloaded, else one it
// downloads now.
func usableNode() (string, error) {
	candidates := []string{}
	if path, err := exec.LookPath("node"); err == nil {
		candidates = append(candidates, path)
	}
	dirs := toolDirs()
	for i := len(dirs) - 1; i >= 0; i-- {
		for _, c := range executableNames(filepath.Join(dirs[i], "node")) {
			if info, err := os.Stat(c); err == nil && !info.IsDir() {
				candidates = append(candidates, c)
			}
		}
	}
	for _, node := range candidates {
		out, err := exec.Command(node, "--version").Output()
		if err == nil && nodeVersionOK(string(out)) {
			return node, nil
		}
	}
	return downloadNode()
}

// npmFor is npm's script next to a node command, following the links Homebrew and nvm make.
func npmFor(node string) string {
	real, err := filepath.EvalSymlinks(node)
	if err != nil {
		real = node
	}
	bin := filepath.Dir(real)
	for _, candidate := range []string{
		filepath.Join(bin, "..", "lib", "node_modules", "npm", "bin", "npm-cli.js"),
		filepath.Join(bin, "node_modules", "npm", "bin", "npm-cli.js"), // Windows
		filepath.Join(bin, "..", "libexec", "lib", "node_modules", "npm", "bin", "npm-cli.js"),
	} {
		if _, err := os.Stat(candidate); err == nil {
			return filepath.Clean(candidate)
		}
	}
	return ""
}

// nodeDist is the name of Node's official build for this computer, without its extension, and the extension.
func nodeDist() (name, ext string, err error) {
	arch := map[string]string{"amd64": "x64", "arm64": "arm64"}[runtime.GOARCH]
	osName := map[string]string{"darwin": "darwin", "linux": "linux", "windows": "win"}[runtime.GOOS]
	if arch == "" || osName == "" {
		return "", "", fmt.Errorf("no Node.js build for %s-%s", runtime.GOOS, runtime.GOARCH)
	}
	ext = ".tar.gz"
	if osName == "win" {
		ext = ".zip"
	}
	return fmt.Sprintf("node-v%s-%s-%s", nodeVersion, osName, arch), ext, nil
}

// nodeBaseURL is where Node's builds come from; tests point it elsewhere.
var nodeBaseURL = "https://nodejs.org/dist"

// downloadNode puts Node's official build in ~/.crewmark/node, checked against its SHA-256 list, and returns its node.
func downloadNode() (string, error) {
	name, ext, err := nodeDist()
	if err != nil {
		return "", err
	}
	dest := filepath.Join(home, "node")
	node := filepath.Join(dest, "bin", "node")
	if runtime.GOOS == "windows" {
		node = filepath.Join(dest, "node.exe")
	}
	if out, err := exec.Command(node, "--version").Output(); err == nil && nodeVersionOK(string(out)) {
		return node, nil
	}
	base := fmt.Sprintf("%s/v%s/", nodeBaseURL, nodeVersion)
	sums, err := fetch(base + "SHASUMS256.txt")
	if err != nil {
		return "", fmt.Errorf("couldn't get Node.js's checksums: %v", err)
	}
	want := ""
	scanner := bufio.NewScanner(bytes.NewReader(sums))
	for scanner.Scan() {
		fields := strings.Fields(scanner.Text())
		if len(fields) == 2 && fields[1] == name+ext {
			want = fields[0]
		}
	}
	if want == "" {
		return "", fmt.Errorf("Node.js lists no %s", name+ext)
	}
	archive, err := fetch(base + name + ext)
	if err != nil {
		return "", fmt.Errorf("couldn't download Node.js: %v", err)
	}
	sum := sha256.Sum256(archive)
	if hex.EncodeToString(sum[:]) != want {
		return "", errors.New("the Node.js download doesn't match its checksum")
	}
	tmp := dest + ".partial"
	_ = os.RemoveAll(tmp)
	if ext == ".zip" {
		err = unzipStripped(archive, tmp)
	} else {
		err = untarStripped(archive, tmp)
	}
	if err != nil {
		_ = os.RemoveAll(tmp)
		return "", fmt.Errorf("couldn't unpack Node.js: %v", err)
	}
	_ = os.RemoveAll(dest)
	if err := os.Rename(tmp, dest); err != nil {
		return "", err
	}
	return node, nil
}

func fetch(url string) ([]byte, error) {
	client := &http.Client{Timeout: 10 * time.Minute}
	res, err := client.Get(url)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("%s: %s", url, res.Status)
	}
	return io.ReadAll(io.LimitReader(res.Body, 200<<20))
}

// inside is the path under dest an archive entry goes to, its first folder left out; "" for one that'd land outside.
func inside(dest, entry string) string {
	parts := strings.SplitN(filepath.ToSlash(entry), "/", 2)
	if len(parts) < 2 || parts[1] == "" {
		return ""
	}
	target := filepath.Join(dest, filepath.FromSlash(parts[1]))
	if !insideDir(dest, target) {
		return ""
	}
	return target
}

func insideDir(dest, path string) bool {
	rel, err := filepath.Rel(dest, path)
	return err == nil && rel != ".." && !strings.HasPrefix(rel, ".."+string(filepath.Separator))
}

func untarStripped(data []byte, dest string) error {
	gz, err := gzip.NewReader(bytes.NewReader(data))
	if err != nil {
		return err
	}
	tr := tar.NewReader(gz)
	for {
		h, err := tr.Next()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}
		target := inside(dest, h.Name)
		if target == "" {
			continue
		}
		switch h.Typeflag {
		case tar.TypeDir:
			if err := os.MkdirAll(target, 0o755); err != nil {
				return err
			}
		case tar.TypeReg:
			if err := writeFile(target, tr, os.FileMode(h.Mode)&0o755|0o600); err != nil {
				return err
			}
		case tar.TypeSymlink:
			// Links stay inside the folder: npm's and npx's in bin point into lib.
			if filepath.IsAbs(h.Linkname) || !insideDir(dest, filepath.Join(filepath.Dir(target), h.Linkname)) {
				continue
			}
			if err := os.MkdirAll(filepath.Dir(target), 0o755); err != nil {
				return err
			}
			_ = os.Remove(target)
			if err := os.Symlink(h.Linkname, target); err != nil {
				return err
			}
		}
	}
}

func unzipStripped(data []byte, dest string) error {
	zr, err := zip.NewReader(bytes.NewReader(data), int64(len(data)))
	if err != nil {
		return err
	}
	for _, f := range zr.File {
		target := inside(dest, f.Name)
		if target == "" {
			continue
		}
		if f.FileInfo().IsDir() {
			if err := os.MkdirAll(target, 0o755); err != nil {
				return err
			}
			continue
		}
		rc, err := f.Open()
		if err != nil {
			return err
		}
		err = writeFile(target, rc, 0o755)
		rc.Close()
		if err != nil {
			return err
		}
	}
	return nil
}

func writeFile(path string, r io.Reader, mode os.FileMode) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	f, err := os.OpenFile(path, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, mode)
	if err != nil {
		return err
	}
	if _, err := io.Copy(f, r); err != nil {
		f.Close()
		return err
	}
	return f.Close()
}

func lastLines(s string, n int) string {
	lines := strings.Split(strings.TrimSpace(s), "\n")
	if len(lines) > n {
		lines = lines[len(lines)-n:]
	}
	return strings.Join(lines, " / ")
}

// toolEnv is the environment for acpx and the agents it starts: node's folder, the crewmark command's and the usual
// tool folders on PATH, and the Mac's proxy.
func toolEnv(node string) []string {
	dirs := []string{filepath.Dir(node)}
	if self, err := os.Executable(); err == nil {
		dirs = append(dirs, filepath.Dir(self))
	}
	dirs = append(dirs, toolDirs()...)
	env := []string{}
	for _, kv := range os.Environ() {
		if !strings.HasPrefix(kv, "PATH=") {
			env = append(env, kv)
		}
	}
	env = append(env, "PATH="+strings.Join(dirs, string(os.PathListSeparator)))
	return append(env, systemProxy()...)
}

// acpxArgs are acpx's arguments for a prompt to the employee's session in its folder, read from a file: permissions
// approved, since nobody is there to answer them, and a login the agent asks for fails rather than waits.
func acpxArgs(script, agent, dir, session, promptFile string) []string {
	return []string{script, "--cwd", dir, "--approve-all", "--auth-policy", "fail", "--format", "quiet",
		agent, "-s", session, "-f", promptFile}
}

// runACP sends text to the employee's acpx session, making the session first if it isn't there yet, in the background;
// it returns once that's started. Until the turn ends, the employee's other messages wait.
func runACP(employeeID string, profile employeeProfile, text string) error {
	agent := *profile.Runtime
	if _, ok := acpAgentByID(agent); !ok {
		return undeliverable{fmt.Sprintf("Crewmark doesn't know the agent %q", agent)}
	}
	if profile.Workdir == "" {
		return undeliverable{"the employee has no folder to work in on this computer"}
	}
	if info, err := os.Stat(profile.Workdir); err != nil || !info.IsDir() {
		return undeliverable{fmt.Sprintf("the folder %s isn't on this computer any more", profile.Workdir)}
	}
	node, script, err := acpxCommand()
	if err != nil {
		return err
	}
	logDir := filepath.Join(home, "employees", employeeID)
	if err := os.MkdirAll(logDir, 0o700); err != nil {
		return err
	}
	promptFile := filepath.Join(logDir, "prompt.txt")
	if err := os.WriteFile(promptFile, []byte(text), 0o600); err != nil {
		return err
	}
	logFile, err := os.OpenFile(filepath.Join(logDir, "agent.log"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o600)
	if err != nil {
		return err
	}
	env := toolEnv(node)
	session := *profile.SessionID
	ensure := exec.Command(node, script, "--cwd", profile.Workdir, "--auth-policy", "fail", agent, "sessions", "ensure",
		"--name", session)
	ensure.Dir, ensure.Env, ensure.Stdout, ensure.Stderr = profile.Workdir, env, logFile, logFile
	prompt := exec.Command(node, acpxArgs(script, agent, profile.Workdir, session, promptFile)...)
	prompt.Dir, prompt.Env, prompt.Stdout, prompt.Stderr = profile.Workdir, env, logFile, logFile
	fmt.Fprintf(logFile, "\n--- %s: %d characters to %s session %s\n", time.Now().Format(time.RFC3339), len(text), agent, session)
	backgroundRuns.set(employeeID, true)
	go func() {
		defer func() {
			logFile.Close()
			backgroundRuns.set(employeeID, false)
		}()
		if err := ensure.Run(); err != nil {
			fmt.Fprintf(logFile, "--- couldn't make the session: %v\n", err)
			return
		}
		if err := prompt.Run(); err != nil {
			fmt.Fprintf(logFile, "--- the turn ended with %v\n", err)
		}
	}()
	return nil
}

// deliverACP hands text to an employee in an acpx agent. While its last message is still being worked on, the next
// waits, as for a Claude Code conversation running in the background.
func deliverACP(employeeID string, profile employeeProfile, text string) error {
	if backgroundRuns.has(employeeID) {
		return errors.New("the agent is working on its last message; messages wait until it's done")
	}
	return runACP(employeeID, profile, text)
}
