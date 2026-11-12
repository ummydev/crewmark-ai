package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/url"
	"strings"
	"sync"
	"time"

	"github.com/coder/websocket"
)

// The daemon's push channel. For each employee it keeps a WebSocket open to Crewmark's realtime Worker (realtime/ in
// the web app's repo), which says when there's something new: events for the agent, or new heartbeat settings. The
// daemon then fetches it, so it doesn't ask Crewmark every round and Crewmark's database can sleep in between. While
// an employee's socket is open, its events are fetched when told, when the socket opens, and once an hour in case a
// push went missing; while it isn't (Crewmark has no Worker, or it can't be reached), the daemon polls as it used to.

const (
	// The Worker answers "ping" with "pong"; a socket that hears nothing for realtimeSilence is taken for dead.
	realtimePing    = 30 * time.Second
	realtimeSilence = 75 * time.Second
	realtimeRetry   = 5 * time.Minute
	// How long to wait before asking again when the Crewmark server has no push channel.
	realtimeNone = time.Hour
)

// push is news for one employee: "events", "heartbeat", or "connected" when its socket opens (time to catch up).
type push struct {
	employeeID string
	kind       string
}

type realtimeResponse struct {
	Realtime *struct {
		URL   string `json:"url"`
		Token string `json:"token"`
	} `json:"realtime"`
}

var errNoRealtime = errors.New("this Crewmark server has no push channel")

// realtime runs a listener per employee and knows whose socket is open.
type realtime struct {
	pushes    chan push
	mu        sync.Mutex
	open      map[string]bool
	listeners map[string]listener
}

type listener struct {
	stop    context.CancelFunc
	profile employeeProfile
}

func newRealtime() *realtime {
	return &realtime{pushes: make(chan push, 64), open: map[string]bool{}, listeners: map[string]listener{}}
}

// sync listens for each of these employees: it starts listeners for new ones, and stops those of employees that are
// gone or now connect with another key or server (and starts them afresh).
func (r *realtime) sync(profiles map[string]employeeProfile) {
	for id, l := range r.listeners {
		if p, ok := profiles[id]; !ok || p.URL != l.profile.URL || p.APIKey != l.profile.APIKey {
			l.stop()
			delete(r.listeners, id)
			r.setOpen(id, false)
		}
	}
	for id, p := range profiles {
		if _, ok := r.listeners[id]; ok {
			continue
		}
		ctx, stop := context.WithCancel(context.Background())
		r.listeners[id] = listener{stop, p}
		go r.listen(ctx, id, p)
	}
}

func (r *realtime) isOpen(employeeID string) bool {
	r.mu.Lock()
	defer r.mu.Unlock()
	return r.open[employeeID]
}

func (r *realtime) setOpen(employeeID string, open bool) {
	r.mu.Lock()
	defer r.mu.Unlock()
	r.open[employeeID] = open
}

// listen keeps the employee's socket open until ctx ends, trying again after a pause that grows while it keeps failing.
func (r *realtime) listen(ctx context.Context, employeeID string, profile employeeProfile) {
	name := logName(employeeID, profile)
	retry, problem := time.Second, ""
	for ctx.Err() == nil {
		started := time.Now()
		err := r.connect(ctx, employeeID, profile, func() {
			log.Printf("%s: push channel open", name)
			problem = ""
		})
		r.setOpen(employeeID, false)
		if ctx.Err() != nil {
			return
		}
		wait := retry
		switch {
		case errors.Is(err, errNoRealtime):
			wait = realtimeNone
		case time.Since(started) > time.Minute:
			// It was up a while: a dropped connection, worth retrying right away.
			retry, wait = time.Second, time.Second
		default:
			retry = min(retry*2, realtimeRetry)
		}
		if err.Error() != problem {
			log.Printf("%s: no push channel, checking Crewmark every round instead: %v", name, err)
			problem = err.Error()
		}
		select {
		case <-ctx.Done():
			return
		case <-time.After(wait):
		}
	}
}

// connect opens the employee's socket and passes on what comes down it until it closes.
func (r *realtime) connect(ctx context.Context, employeeID string, profile employeeProfile, opened func()) error {
	var res realtimeResponse
	if err := api(profile, "GET", "/api/agent/realtime", nil, &res); err != nil {
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
		// Without the token, which is new each time: the log says the same problem once.
		return fmt.Errorf("couldn't connect: %s", strings.ReplaceAll(err.Error(), url.QueryEscape(res.Realtime.Token), "…"))
	}
	defer conn.CloseNow()
	r.setOpen(employeeID, true)
	opened()
	r.send(ctx, push{employeeID, "connected"})

	go func() {
		ticker := time.NewTicker(realtimePing)
		defer ticker.Stop()
		for {
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
				writeCtx, done := context.WithTimeout(ctx, 10*time.Second)
				err := conn.Write(writeCtx, websocket.MessageText, []byte("ping"))
				done()
				if err != nil {
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
		// Pushes are JSON; "pong" only shows the socket's alive.
		var message struct {
			Type string `json:"type"`
		}
		if json.Unmarshal(data, &message) == nil && message.Type != "" {
			r.send(ctx, push{employeeID, message.Type})
		}
	}
}

func (r *realtime) send(ctx context.Context, p push) {
	select {
	case r.pushes <- p:
	case <-ctx.Done():
	}
}
