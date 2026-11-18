package main

import (
	"context"
	"encoding/json"
	"log"
	"regexp"
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

const (
	worklogPage  = 10
	worklogEvery = 2 * time.Second
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
}

type workWatch struct {
	name     string
	profile  employeeProfile
	send     func(worklogMessage) error
	mu       sync.Mutex
	watching bool
	// The transcript, once found; read under trMu. lookedAt is when it was last looked for, in vain.
	trMu     sync.Mutex
	tr       *transcript
	lookedAt time.Time
	// When the reply last told to Crewmark was written.
	reported string
}

// lookAgain is how long the daemon waits before looking again for a conversation it didn't find.
const lookAgain = 30 * time.Second

func newWorkWatch(name string, profile employeeProfile, send func(worklogMessage) error) *workWatch {
	return &workWatch{name: name, profile: profile, send: send}
}

// watch starts sending, or stops. Started again, it sends the latest page anew, for whoever just opened it; follow
// sends the turns that change from then on.
func (w *workWatch) watch(on bool) {
	w.mu.Lock()
	w.watching = on
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
	w.watch(false)
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
	w.trMu.Lock()
	_, err := tr.read()
	page, more := tr.page(0, worklogPage)
	w.trMu.Unlock()
	if err != nil {
		log.Printf("%s: couldn't read the conversation for the web: %v", w.name, err)
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: "no-transcript"})
		return
	}
	w.post(worklogMessage{Type: "worklog", Turns: page, Page: "latest", More: more})
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
	changed, err := tr.read()
	var turns []*workTurn
	places := make([]int, 0, len(changed))
	for i := range changed {
		places = append(places, i)
	}
	sort.Ints(places)
	for _, i := range places {
		turns = append(turns, tr.turns[i])
	}
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
	if lastReply != "" && lastReply != w.reported {
		w.reported = lastReply
		replied(lastReply)
		w.latest()
	}
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
func (w *workWatch) more(before int) {
	tr, reason := w.transcript()
	if reason != "" {
		w.post(worklogMessage{Type: "worklog.unavailable", Reason: reason})
		return
	}
	w.trMu.Lock()
	if tr.offset == 0 {
		_, _ = tr.read()
	}
	page, more := tr.page(before, worklogPage)
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
	_, err := tr.read()
	page, _ := tr.page(0, worklogPage)
	short := make([]*workTurn, 0, len(page))
	for _, turn := range page {
		copied := *turn
		copied.Steps = []workStep{}
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
	w.post(worklogMessage{Type: "worklog.latest", Turns: short})
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
