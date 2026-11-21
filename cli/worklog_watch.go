package main

import (
	"context"
	"encoding/json"
	"log"
	"regexp"
	"runtime"
	"sort"
	"strings"
	"sync"
	"time"
)

// Sending the employee's work to the web while someone looks at it (MC-186). The realtime Worker tells the daemon,
// down the employee's socket, when the first person opens the employee's work and when the last one leaves
// ("worklog.watch"), and when someone asks for earlier turns ("worklog.more"). While watched, the daemon sends the
// latest page, then every turn that changes, as the conversation goes on. The list of conversations asks every
// daemon for a short copy of its latest turns ("worklog.latest", MC-277), to show what each employee said last.
//
// The daemon follows the conversation all the time, watched or not (MC-280): each time the agent ends a turn with a
// reply the Work tab shows, it tells Crewmark when (never what), which counts it as unread in Messages, and sends
// the list of conversations the latest turns.

// latestChars is how much of a prompt or reply the list of conversations gets: it shows one line of it.
const latestChars = 300

// pageSize is how many turns a page has: as many as the web asks for, within reason, or worklogPage when it doesn't
// say (a web from before MC-302). The web decides it, so changing it needs no new CLI.
func pageSize(asked int) int {
	switch {
	case asked <= 0:
		return worklogPage
	case asked > worklogMaxPage:
		return worklogMaxPage
	}
	return asked
}

const (
	worklogPage    = 10
	worklogMaxPage = 50
	worklogEvery   = 2 * time.Second
	// The push channel takes messages up to 1 MiB.
	worklogMaxBytes = 900_000
)

// worklogMessage is what the daemon sends up the socket for the web.
type worklogMessage struct {
	Type string `json:"type"`
	// For "worklog": the turns, oldest first; "latest" (a fresh page), "earlier" (before the oldest shown) or "live"
	// (turns that changed); whether there are earlier ones.
	Turns []*workTurn `json:"turns,omitempty"`
	Page  string      `json:"page,omitempty"`
	More  bool        `json:"more,omitempty"`
	// For "worklog.unavailable": "no-session", "unsupported" (not a Claude Code conversation) or "no-transcript".
	Reason string `json:"reason,omitempty"`
	// For "worklog.files": every file the agent sent in the conversation, newest first (MC-318).
	Files []listedFile `json:"files,omitempty"`
	// With a fresh page: the model and effort the conversation runs with, for Messages to show (MC-319, MC-380).
	App *appRun `json:"app,omitempty"`
	// For "worklog.latest": whether the agent is at work now, for the list of conversations to show (MC-354).
	Working bool `json:"working,omitempty"`
}

type appRun struct {
	Model  string `json:"model,omitempty"`
	Effort string `json:"effort,omitempty"`
	// Read from the conversation's latest request: what it ran with last, not what it's set to.
	Last bool `json:"last,omitempty"`
	// It's one of the Claude app's (on a Mac): messages go into the app, which runs it as it has it, so what's picked
	// in Messages applies only when Crewmark resumes it in the background (MC-380).
	InApp bool `json:"inApp,omitempty"`
}

// appRunOf is how the conversation runs, for Messages to show (MC-380): the model and effort of its latest request to
// the model (tr's, read under trMu), else as the Claude app has it when it's one of the app's, or nil when neither
// says.
func appRunOf(profile employeeProfile, tr *transcript) *appRun {
	var app *claudeAppConversation
	if runtime.GOOS == "darwin" && profile.SessionID != nil && *profile.SessionID != "" {
		app, _ = claudeAppSession(*profile.SessionID)
	}
	if tr != nil && tr.lastRun.Model != "" {
		last := tr.lastRun
		last.Last = true
		last.InApp = app != nil
		return &last
	}
	if app != nil && (app.model != "" || app.effort != "") {
		return &appRun{Model: app.model, Effort: app.effort, InApp: true}
	}
	return nil
}

type workWatch struct {
	name string
	// The employee, for the extra folders it may use (file_links.go).
	employeeID string
	profile    employeeProfile
	send       func(worklogMessage) error
	mu         sync.Mutex
	watching   bool
	// pageTurns is the page size the web asked for when it started watching (pageSize).
	pageTurns int
	// The transcript, once found; read under trMu. lookedAt is when it was last looked for, in vain.
	trMu     sync.Mutex
	tr       *transcript
	lookedAt time.Time
	// When the reply last told to Crewmark was written.
	reported string
	// raw sends a message of the daemon's own up the socket: JSON, or a piece of a file (binary).
	raw func(data []byte, binary bool) error
	// The files being read for the web (worklog_files.go), under mu.
	reads map[string]*fileRead
	// The turns that changed since followOnce last sent them, whichever read found the change; under trMu.
	unsent map[int]bool
	// Whether the agent was at work when followOnce last looked, told to the list of conversations when it changes.
	wasWorking bool
}

// lookAgain is how long the daemon waits before looking again for a conversation it didn't find.
const lookAgain = 30 * time.Second

func newWorkWatch(name string, profile employeeProfile, send func(worklogMessage) error) *workWatch {
	return &workWatch{name: name, profile: profile, send: send, unsent: map[int]bool{}}
}

// watch starts sending, or stops. Started again, it sends the latest page anew, for whoever just opened it; follow
// sends the turns that change from then on.
func (w *workWatch) watch(on bool, pageTurns int) {
	w.mu.Lock()
	w.watching = on
	if on {
		w.pageTurns = pageSize(pageTurns)
	}
	w.mu.Unlock()
	if on {
		go w.sendPage()
	}
}

func (w *workWatch) isWatching() bool {
	w.mu.Lock()
	defer w.mu.Unlock()
	return w.watching
}

func (w *workWatch) close() {
	w.watch(false, 0)
}

// transcript finds and reads the conversation's transcript, or says why it can't.
func (w *workWatch) transcript() (*transcript, string) {
	w.trMu.Lock()
	defer w.trMu.Unlock()
	if w.tr != nil {
		return w.tr, ""
	}
	p := w.profile
	if p.SessionID == nil || *p.SessionID == "" || p.Runtime == nil {
		return nil, "no-session"
	}
	if *p.Runtime != "claude-code" {
		return nil, "unsupported"
	}
	path, err := claudeTranscript(*p.SessionID)
	if err != nil {
		w.lookedAt = time.Now()
		return nil, "no-transcript"
	}
	w.tr = newTranscript(path)
	return w.tr, ""
}

// sendPage sends the latest page to whoever is watching.
func (w *workWatch) sendPage() {
	tr, reason := w.transcript()
	if reason != "" {
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: reason})
		return
	}
	w.mu.Lock()
	size := w.pageTurns
	w.mu.Unlock()
	w.trMu.Lock()
	_, err := w.read(tr)
	page, more := tr.page(0, pageSize(size))
	page = w.snapshot(page)
	run := appRunOf(w.profile, tr)
	w.trMu.Unlock()
	if err != nil {
		log.Printf("%s: couldn't read the conversation for the web: %v", w.name, err)
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: "no-transcript"})
		return
	}
	w.post(worklogMessage{Type: "worklog", Turns: page, Page: "latest", More: more, App: run})
}

// follow reads the conversation as it goes on, until ctx ends: while someone watches, it sends them the turns that
// change, and each time the agent ends a turn with a new reply, it calls replied with when it was written and sends
// the list of conversations the latest turns.
func (w *workWatch) follow(ctx context.Context, replied func(at string)) {
	ticker := time.NewTicker(worklogEvery)
	defer ticker.Stop()
	for {
		w.followOnce(replied)
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
		}
	}
}

func (w *workWatch) followOnce(replied func(at string)) {
	w.trMu.Lock()
	notYet := w.tr == nil && time.Since(w.lookedAt) < lookAgain
	w.trMu.Unlock()
	if notYet {
		return
	}
	tr, reason := w.transcript()
	if reason != "" {
		return
	}
	w.trMu.Lock()
	first := tr.offset == 0
	_, err := w.read(tr)
	places := make([]int, 0, len(w.unsent))
	for i := range w.unsent {
		places = append(places, i)
	}
	sort.Ints(places)
	var turns []*workTurn
	for _, i := range places {
		turns = append(turns, tr.turns[i])
	}
	w.unsent = map[int]bool{}
	turns = w.snapshot(turns)
	lastReply := ""
	for i := len(tr.turns) - 1; i >= 0; i-- {
		if turn := tr.turns[i]; turn.Done && strings.TrimSpace(turn.Reply) != "" && !isNoReply(turn.Reply) {
			lastReply = turn.RepliedAt
			break
		}
	}
	w.trMu.Unlock()
	if err != nil {
		return
	}
	// The first read takes in the whole conversation: whoever watches has it from the page they were sent.
	if !first && len(turns) > 0 && w.isWatching() {
		w.post(worklogMessage{Type: "worklog", Turns: turns, Page: "live"})
	}
	// The first time, the reply already there is told too: Crewmark counts only replies newer than it knew of.
	working := w.working()
	if lastReply != "" && lastReply != w.reported {
		w.reported = lastReply
		w.wasWorking = working
		replied(lastReply)
		w.latest()
	} else if working != w.wasWorking {
		// It started or stopped working: the list shows it (MC-354).
		w.wasWorking = working
		w.latest()
	}
}

// working is whether the agent is at work now: its conversation, open in Claude Code (the app, a terminal), says it's
// busy, or the daemon is running it in the background.
func (w *workWatch) working() bool {
	if w.employeeID != "" && backgroundRuns.has(w.employeeID) {
		return true
	}
	if w.profile.Runtime != nil && *w.profile.Runtime != "claude-code" {
		return false
	}
	if w.profile.SessionID == nil || *w.profile.SessionID == "" {
		return false
	}
	session, err := openClaudeSession(*w.profile.SessionID)
	return err == nil && session.Status != "" && session.Status != "idle"
}

// noReplyLine is a line that is the employee's way of saying a turn had nothing for the person (src/lib/no-reply.ts).
var noReplyLine = regexp.MustCompile("(?i)^[\\s`*_\"'“”‘’]*crewmark_no_reply[\\s`*_\"'“”‘’.。!！]*$")

// isNoReply says whether a reply opts out of being shown: its first or last line is CREWMARK_NO_REPLY.
func isNoReply(reply string) bool {
	var lines []string
	for _, line := range strings.Split(reply, "\n") {
		if line = strings.TrimSpace(line); line != "" {
			lines = append(lines, line)
		}
	}
	return len(lines) > 0 && (noReplyLine.MatchString(lines[0]) || noReplyLine.MatchString(lines[len(lines)-1]))
}

// more sends the page before the turn numbered before.
func (w *workWatch) more(before, pageTurns int) {
	tr, reason := w.transcript()
	if reason != "" {
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: reason})
		return
	}
	w.trMu.Lock()
	if tr.offset == 0 {
		_, _ = w.read(tr)
	}
	page, more := tr.page(before, pageSize(pageTurns))
	page = w.snapshot(page)
	w.trMu.Unlock()
	w.post(worklogMessage{Type: "worklog", Turns: page, Page: "earlier", More: more})
}

// latest sends a short copy of the latest page, without steps and with prompts and replies cut short, for the list
// of conversations (MC-277). The web picks the last turn its Work tab would show. Nothing is sent when there's no
// conversation to read: the list keeps what it last saw.
func (w *workWatch) latest() {
	tr, reason := w.transcript()
	if reason != "" {
		return
	}
	w.trMu.Lock()
	_, err := w.read(tr)
	page, _ := tr.page(0, worklogPage)
	short := make([]*workTurn, 0, len(page))
	for _, turn := range page {
		copied := *turn
		copied.Steps = []workStep{}
		copied.Files = nil
		copied.Prompt = clip(turn.Prompt, latestChars)
		copied.Reply = clip(turn.Reply, latestChars)
		copied.Asides = make([]workAside, len(turn.Asides))
		for i, aside := range turn.Asides {
			copied.Asides[i] = workAside{Origin: aside.Origin, Text: clip(aside.Text, latestChars), At: aside.At}
		}
		short = append(short, &copied)
	}
	w.trMu.Unlock()
	if err != nil {
		log.Printf("%s: couldn't read the conversation for the list of conversations: %v", w.name, err)
		return
	}
	w.post(worklogMessage{Type: "worklog.latest", Turns: short, Working: w.working()})
}

// read takes in what was written since the last read, whoever reads, and keeps the turns that changed for
// followOnce to send whoever watches; the first read, of the whole conversation, keeps none: those who watch get it
// as a page. Under trMu.
func (w *workWatch) read(tr *transcript) (map[int]bool, error) {
	whole := tr.offset == 0
	changed, err := tr.read()
	if !whole {
		for i := range changed {
			w.unsent[i] = true
		}
	}
	return changed, err
}

// snapshot copies the turns to send, so they can be sent while the conversation goes on being read, with what's
// known of their files now: on Pro, where each opens from in Crewmark's storage, and those not up there yet are put
// in line (cloud_files.go). Under trMu.
func (w *workWatch) snapshot(turns []*workTurn) []*workTurn {
	copies := make([]*workTurn, len(turns))
	for i, turn := range turns {
		copied := *turn
		copied.Steps = append([]workStep{}, turn.Steps...)
		copied.Asides = append([]workAside(nil), turn.Asides...)
		copied.Files = append([]workFile(nil), turn.Files...)
		for j := range copied.Files {
			copied.Files[j].describe()
			copied.Files[j].Stored = cloud.stored(w, &copied.Files[j], true)
		}
		copies[i] = &copied
	}
	return copies
}

// post sends the message, fewer turns at a time while it's too big for the push channel.
func (w *workWatch) post(message worklogMessage) {
	for {
		data, _ := json.Marshal(message)
		if len(data) <= worklogMaxBytes || len(message.Turns) <= 1 {
			if len(data) > worklogMaxBytes {
				// One turn too big on its own: send it without its steps.
				turn := *message.Turns[0]
				turn.Steps = []workStep{}
				message.Turns = []*workTurn{&turn}
			}
			if err := w.send(message); err != nil {
				log.Printf("%s: couldn't send the conversation to the web: %v", w.name, err)
			}
			return
		}
		// Send the newer half now, the older half next; for a fresh page, the older half is left for "earlier".
		half := len(message.Turns) / 2
		older, newer := message.Turns[:half], message.Turns[half:]
		if message.Page == "live" {
			w.post(worklogMessage{Type: message.Type, Turns: older, Page: "live"})
			message.Turns = newer
			continue
		}
		message.Turns, message.More = newer, true
	}
}
