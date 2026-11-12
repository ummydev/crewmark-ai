package main

import (
	"context"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/coder/websocket"
)

// fakeCrewmark is a Crewmark server with a push channel: the agent API the daemon calls, and a socket like the
// realtime Worker's. It counts the API calls, and push sends a push down the open sockets.
type fakeCrewmark struct {
	*httptest.Server
	mu       sync.Mutex
	calls    map[string]int
	sockets  []*websocket.Conn
	noPushes bool
}

func newFakeCrewmark(t *testing.T) *fakeCrewmark {
	f := &fakeCrewmark{calls: map[string]int{}}
	f.Server = httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		f.mu.Lock()
		f.calls[r.URL.Path]++
		f.mu.Unlock()
		switch r.URL.Path {
		case "/api/agent/realtime":
			if f.noPushes {
				w.Write([]byte(`{"realtime":null}`))
				return
			}
			w.Write([]byte(`{"realtime":{"url":"ws` + strings.TrimPrefix(f.URL, "http") + `/connect","token":"t"}}`))
		case "/connect":
			if r.URL.Query().Get("token") != "t" {
				http.Error(w, "no token", http.StatusUnauthorized)
				return
			}
			conn, err := websocket.Accept(w, r, nil)
			if err != nil {
				return
			}
			f.mu.Lock()
			f.sockets = append(f.sockets, conn)
			f.mu.Unlock()
			for {
				_, data, err := conn.Read(context.Background())
				if err != nil {
					return
				}
				if string(data) == "ping" {
					conn.Write(context.Background(), websocket.MessageText, []byte("pong"))
				}
			}
		case "/api/agent/events":
			w.Write([]byte(`{"events":[],"cursor":7}`))
		case "/api/agent/heartbeat":
			w.Write([]byte(`{"heartbeat":{"enabled":true,"start":"10:00","end":"18:00","timeZone":"UTC","intervalMinutes":60}}`))
		default:
			http.NotFound(w, r)
		}
	}))
	t.Cleanup(f.Close)
	return f
}

func (f *fakeCrewmark) count(path string) int {
	f.mu.Lock()
	defer f.mu.Unlock()
	return f.calls[path]
}

func (f *fakeCrewmark) push(kind string) {
	f.mu.Lock()
	defer f.mu.Unlock()
	for _, conn := range f.sockets {
		conn.Write(context.Background(), websocket.MessageText, []byte(`{"type":"`+kind+`"}`))
	}
}

func (f *fakeCrewmark) dropSockets() {
	f.mu.Lock()
	defer f.mu.Unlock()
	for _, conn := range f.sockets {
		conn.CloseNow()
	}
	f.sockets = nil
}

func nextPush(t *testing.T, r *realtime) push {
	t.Helper()
	select {
	case p := <-r.pushes:
		return p
	case <-time.After(5 * time.Second):
		t.Fatal("no push within 5 seconds")
		return push{}
	}
}

func TestRealtimeListener(t *testing.T) {
	crewmark := newFakeCrewmark(t)
	r := newRealtime()
	profiles := map[string]employeeProfile{"emp": {Name: "Test", URL: crewmark.URL, APIKey: "cmk_test"}}
	r.sync(profiles)
	defer r.sync(nil)

	if p := nextPush(t, r); p != (push{"emp", "connected"}) || !r.isOpen("emp") {
		t.Fatalf("on connecting: got %+v, open %v; want a connected push and an open channel", p, r.isOpen("emp"))
	}
	crewmark.push("events")
	if p := nextPush(t, r); p != (push{"emp", "events"}) {
		t.Fatalf("got %+v; want the events push", p)
	}

	// A dropped socket is open again a second later, and says so, so the daemon catches up.
	crewmark.dropSockets()
	if p := nextPush(t, r); p != (push{"emp", "connected"}) {
		t.Fatalf("after a drop: got %+v; want connected again", p)
	}

	// An employee that's gone is stopped.
	r.sync(nil)
	if r.isOpen("emp") {
		t.Fatal("the channel of a removed employee is still open")
	}
}

func TestRealtimeNone(t *testing.T) {
	crewmark := newFakeCrewmark(t)
	crewmark.noPushes = true
	r := newRealtime()
	r.sync(map[string]employeeProfile{"emp": {Name: "Test", URL: crewmark.URL, APIKey: "cmk_test"}})
	defer r.sync(nil)
	deadline := time.Now().Add(5 * time.Second)
	for crewmark.count("/api/agent/realtime") == 0 && time.Now().Before(deadline) {
		time.Sleep(10 * time.Millisecond)
	}
	time.Sleep(50 * time.Millisecond)
	if r.isOpen("emp") || crewmark.count("/api/agent/realtime") != 1 {
		t.Fatalf("without a push channel: open %v after %d asks; want closed, asking once an hour",
			r.isOpen("emp"), crewmark.count("/api/agent/realtime"))
	}
}

func TestDaemonRoundFetches(t *testing.T) {
	saved := home
	home = t.TempDir()
	defer func() { home = saved }()
	deliverMessage = func(string, employeeProfile, string, bool) error { return nil }
	defer func() { deliverMessage = deliver }()

	crewmark := newFakeCrewmark(t)
	profile := employeeProfile{Name: "Test", URL: crewmark.URL, APIKey: "cmk_test"}
	at := func(hour, minute int) time.Time { return time.Date(2026, 11, 6, hour, minute, 0, 0, time.UTC) }
	fetched := func() (int, int) { return crewmark.count("/api/agent/events"), crewmark.count("/api/agent/heartbeat") }

	rounds := []struct {
		name             string
		now              time.Time
		pushed           string
		events, settings int // what the round fetches
	}{
		{"first round without a push channel: everything", at(10, 0), "", 1, 1},
		{"the next one: events only, settings every 5 minutes", at(10, 1), "", 1, 0},
		{"socket opens: catch up", at(10, 2), "connected", 1, 1},
		{"a round on the clock with the channel open: nothing", at(10, 3), "open", 0, 0},
		{"pushed events", at(10, 4), "events", 1, 0},
		{"pushed heartbeat settings", at(10, 5), "heartbeat", 0, 1},
		{"still nothing on the clock", at(10, 40), "open", 0, 0},
		{"the first round after 11:00: the hourly check", at(11, 0), "open", 1, 1},
		{"and only once", at(11, 1), "open", 0, 0},
	}
	for _, round := range rounds {
		events, settings := fetched()
		daemonRound("emp", profile, round.now, round.pushed)
		gotEvents, gotSettings := fetched()
		if gotEvents-events != round.events || gotSettings-settings != round.settings {
			t.Errorf("%s: fetched events %d times and settings %d; want %d and %d", round.name,
				gotEvents-events, gotSettings-settings, round.events, round.settings)
		}
	}
	if crewmark.count("/api/agent/me") != 0 {
		t.Error("the daemon read /api/agent/me, which reads the whole organization")
	}
}
