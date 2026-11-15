package main

import (
	"context"
	"encoding/json"
	"log"
	"sort"
	"sync"
	"time"
)

// Sending the employee's work to the web while someone looks at it (MC-186). The realtime Worker tells the daemon,
// down the employee's socket, when the first person opens the employee's work and when the last one leaves
// ("worklog.watch"), and when someone asks for earlier turns ("worklog.more"). While watched, the daemon sends the
// latest page, then every turn that changes, as the conversation goes on.

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
	name    string
	profile employeeProfile
	send    func(worklogMessage) error
	mu      sync.Mutex
	stop    context.CancelFunc
	// The transcript, once the watch has found it; read under trMu.
	trMu sync.Mutex
	tr   *transcript
}

func newWorkWatch(name string, profile employeeProfile, send func(worklogMessage) error) *workWatch {
	return &workWatch{name: name, profile: profile, send: send}
}

// watch starts sending, or stops. Started again, it sends the latest page anew, for whoever just opened it.
func (w *workWatch) watch(ctx context.Context, on bool) {
	w.mu.Lock()
	defer w.mu.Unlock()
	if w.stop != nil {
		w.stop()
		w.stop = nil
	}
	if !on {
		return
	}
	ctx, w.stop = context.WithCancel(ctx)
	go w.run(ctx)
}

func (w *workWatch) close() {
	w.watch(context.Background(), false)
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
		return nil, "no-transcript"
	}
	w.tr = newTranscript(path)
	return w.tr, ""
}

func (w *workWatch) run(ctx context.Context) {
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
	ticker := time.NewTicker(worklogEvery)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
		}
		w.trMu.Lock()
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
		w.trMu.Unlock()
		if err == nil && len(turns) > 0 {
			w.post(worklogMessage{Type: "worklog", Turns: turns, Page: "live"})
		}
	}
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
