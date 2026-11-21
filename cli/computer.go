package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"runtime"
	"sort"
	"strings"
	"sync"
	"time"

	"github.com/coder/websocket"
)

// The computer's own push channel (MC-421). With the person logged in here (`crewmark login`, or the install command
// Crewmark shows them, which logs in and starts the daemon), the daemon keeps one socket open for the computer itself,
// before any employee works here. Through it Crewmark starts employees here: the person picks a folder, an agent and
// Start on Crewmark, and the daemon connects the employee and starts its conversation (device.go). The daemon tells
// Crewmark which agents it found and which project folders it offers; it only ever starts employees in those.

// maxFolders is how many folders the daemon offers: the ones employees work in, then the latest code folders.
const maxFolders = 60

// codeRoots are where people usually keep their projects, under the home folder.
var codeRoots = []string{
	"workspace", "Workspace", "code", "Code", "projects", "Projects", "src", "dev", "Developer", "github", "GitHub",
	"repos", "git", "work", "Documents/GitHub", "Documents/code", "Documents/Projects",
}

// offeredFolders are the folders Crewmark may start employees in here: those employees already work in, then each
// project (a folder with .git) directly in a code root, latest changed first.
func offeredFolders() []string {
	seen := map[string]bool{}
	var folders []string
	add := func(dir string) {
		if dir != "" && !seen[dir] && len(folders) < maxFolders {
			seen[dir] = true
			folders = append(folders, dir)
		}
	}
	if profiles, err := readProfiles(); err == nil {
		var known []string
		for _, p := range profiles {
			if p.Workdir != "" && filepath.IsAbs(p.Workdir) {
				known = append(known, filepath.Clean(p.Workdir))
			}
		}
		sort.Strings(known)
		for _, dir := range known {
			add(dir)
		}
	}
	userHome, err := os.UserHomeDir()
	if err != nil {
		return folders
	}
	type project struct {
		dir     string
		changed time.Time
	}
	var projects []project
	// On a case-insensitive disk ~/workspace and ~/Workspace are the same folder: read each once.
	var read []os.FileInfo
	for _, root := range codeRoots {
		rootDir := filepath.Join(userHome, filepath.FromSlash(root))
		info, err := os.Stat(rootDir)
		if err != nil || !info.IsDir() || sameAsAny(info, read) {
			continue
		}
		read = append(read, info)
		entries, err := os.ReadDir(rootDir)
		if err != nil {
			continue
		}
		for _, entry := range entries {
			if !entry.IsDir() || strings.HasPrefix(entry.Name(), ".") {
				continue
			}
			dir := filepath.Join(rootDir, entry.Name())
			git, err := os.Stat(filepath.Join(dir, ".git"))
			if err != nil {
				continue
			}
			changed := git.ModTime()
			if info, err := os.Stat(dir); err == nil && info.ModTime().After(changed) {
				changed = info.ModTime()
			}
			projects = append(projects, project{dir, changed})
		}
	}
	sort.SliceStable(projects, func(i, j int) bool { return projects[i].changed.After(projects[j].changed) })
	for _, p := range projects {
		add(p.dir)
	}
	return folders
}

func sameAsAny(info os.FileInfo, others []os.FileInfo) bool {
	for _, other := range others {
		if os.SameFile(info, other) {
			return true
		}
	}
	return false
}

// computerListener keeps the computer's socket open with the person's login, while there is one.
type computerListener struct {
	mu      sync.Mutex
	stop    context.CancelFunc
	account accountProfile
}

// sync runs the socket for this login, or stops it when there's none (or a new one, which starts afresh).
func (c *computerListener) sync(account *accountProfile) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.stop != nil && (account == nil || *account != c.account) {
		c.stop()
		c.stop = nil
	}
	if account == nil || c.stop != nil || account.APIKey == "" {
		return
	}
	ctx, stop := context.WithCancel(context.Background())
	c.stop, c.account = stop, *account
	go listenComputer(ctx, *account)
}

// listenComputer keeps the computer's socket open until ctx ends, trying again after a pause that grows while it fails.
func listenComputer(ctx context.Context, account accountProfile) {
	retry, problem := time.Second, ""
	for ctx.Err() == nil {
		started := time.Now()
		err := connectComputer(ctx, account, func() {
			log.Printf("this computer: open to Crewmark for %s", account.User.Email)
			problem = ""
		})
		if ctx.Err() != nil {
			return
		}
		wait := retry
		switch {
		case errors.Is(err, errNoRealtime):
			wait = realtimeNone
		case time.Since(started) > time.Minute:
			retry, wait = time.Second, time.Second
		default:
			retry = min(retry*2, realtimeRetry)
		}
		if err.Error() != problem {
			log.Printf("this computer: Crewmark can't start employees here for now: %v", err)
			problem = err.Error()
		}
		select {
		case <-ctx.Done():
			return
		case <-time.After(wait):
		}
	}
}

// connectComputer opens the computer's socket and starts the employees Crewmark asks for until it closes.
func connectComputer(ctx context.Context, account accountProfile, opened func()) error {
	folders, err := json.Marshal(offeredFolders())
	if err != nil {
		return err
	}
	hostname, _ := os.Hostname()
	query := url.Values{
		"agents":   {strings.Join(localAgents(), ",")},
		"folders":  {string(folders)},
		"hostname": {hostname},
		"platform": {runtime.GOOS + "-" + runtime.GOARCH},
	}
	var res realtimeResponse
	if err := request(account.URL, "/api/cli/realtime?"+query.Encode(), account.APIKey, "GET", nil, &res); err != nil {
		return err
	}
	if res.Realtime == nil {
		return errNoRealtime
	}
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()
	conn, _, err := websocket.Dial(ctx, res.Realtime.URL+"?token="+url.QueryEscape(res.Realtime.Token),
		&websocket.DialOptions{HTTPClient: httpClient})
	if err != nil {
		return fmt.Errorf("couldn't connect: %s", strings.ReplaceAll(err.Error(), url.QueryEscape(res.Realtime.Token), "…"))
	}
	defer conn.CloseNow()
	opened()

	var writeMu sync.Mutex
	write := func(data []byte) error {
		writeMu.Lock()
		defer writeMu.Unlock()
		writeCtx, done := context.WithTimeout(ctx, 10*time.Second)
		defer done()
		return conn.Write(writeCtx, websocket.MessageText, data)
	}
	go func() {
		ticker := time.NewTicker(realtimePing)
		defer ticker.Stop()
		for {
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
				if write([]byte("ping")) != nil {
					return
				}
			}
		}
	}()
	for {
		readCtx, done := context.WithTimeout(ctx, realtimeSilence)
		_, data, err := conn.Read(readCtx)
		done()
		if err != nil {
			return fmt.Errorf("the connection closed: %w", err)
		}
		var message struct {
			Type  string         `json:"type"`
			ID    string         `json:"id"`
			Start *employeeStart `json:"start"`
		}
		if json.Unmarshal(data, &message) != nil || message.Type != "employee.start" || message.Start == nil {
			continue
		}
		if !firstStart(message.ID) {
			continue
		}
		go func(id string, start employeeStart) {
			answer := map[string]any{"type": "employee.started", "id": id, "ok": true}
			if err := startEmployee(account.URL, start); err != nil {
				log.Printf("couldn't start an employee here for Crewmark: %v", err)
				answer["ok"], answer["error"] = false, err.Error()
			}
			if data, err := json.Marshal(answer); err == nil {
				_ = write(data)
			}
		}(message.ID, *message.Start)
	}
}
