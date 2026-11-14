package main

import (
	"errors"
	"net/http"
	"net/http/httptest"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"testing"
	"time"
)

func TestHeartbeatDue(t *testing.T) {
	shanghai, _ := time.LoadLocation("Asia/Shanghai")
	at := func(day, hour, minute int) time.Time {
		// 2026-11-02 is a Monday.
		return time.Date(2026, 11, day, hour, minute, 0, 0, shanghai)
	}
	office := &heartbeat{Enabled: true, Start: "09:00", End: "18:00", TimeZone: "Asia/Shanghai", WeekdaysOnly: true,
		IntervalMinutes: 60}
	night := &heartbeat{Enabled: true, Start: "22:00", End: "06:00", TimeZone: "Asia/Shanghai", IntervalMinutes: 30}
	// The programmer's on 2026-11-02: every 2 hours from 10:01.
	twoHourly := &heartbeat{Enabled: true, Start: "10:01", End: "23:59", TimeZone: "Asia/Shanghai", IntervalMinutes: 120}
	seconds := func(t time.Time, s int) time.Time { return t.Add(time.Duration(s) * time.Second) }
	off := *office
	off.Enabled = false

	cases := []struct {
		name string
		hb   *heartbeat
		last time.Time
		now  time.Time
		want bool
	}{
		{"working hours, never sent", office, time.Time{}, at(2, 10, 0), true},
		{"before work", office, time.Time{}, at(2, 8, 59), false},
		{"end of work is excluded", office, time.Time{}, at(2, 18, 0), false},
		{"last one under half an interval ago", office, at(2, 9, 45), at(2, 10, 0), false},
		{"interval passed", office, at(2, 9, 0), at(2, 10, 0), true},
		{"already sent at this time", office, seconds(at(2, 10, 0), 29), at(2, 10, 30), false},
		// A heartbeat sent 29 seconds late doesn't push the next one later.
		{"on the clock, not after the last", office, seconds(at(2, 10, 0), 29), seconds(at(2, 11, 0), 5), true},
		{"times count from the start", twoHourly, seconds(at(2, 10, 1), 29), at(2, 12, 1), true},
		{"between times", twoHourly, at(2, 12, 1), at(2, 13, 30), false},
		// 2026-11-02: the 10:01 heartbeat waited until 17:54 for the conversation to open.
		{"no second one minutes after a late one", twoHourly, at(2, 17, 54), at(2, 18, 1), false},
		{"the time after that", twoHourly, at(2, 17, 54), at(2, 20, 1), true},
		{"overnight times count from the evening before", night, at(8, 5, 0), at(8, 5, 30), true},
		{"overnight, between times", night, at(8, 5, 0), at(8, 5, 29), false},
		{"Saturday on weekdays only", office, time.Time{}, at(7, 10, 0), false},
		{"overnight, before midnight", night, time.Time{}, at(7, 23, 0), true},
		{"overnight, after midnight", night, time.Time{}, at(8, 5, 59), true},
		{"overnight, daytime", night, time.Time{}, at(8, 12, 0), false},
		{"turned off", &off, time.Time{}, at(2, 10, 0), false},
		{"never set up", nil, time.Time{}, at(2, 10, 0), false},
		{"same instant in another zone", office, time.Time{}, time.Date(2026, 11, 2, 2, 0, 0, 0, time.UTC), true},
	}
	for _, c := range cases {
		if got := heartbeatDue(c.hb, c.last, c.now); got != c.want {
			t.Errorf("%s: heartbeatDue = %v, want %v", c.name, got, c.want)
		}
	}
}

func TestDescribeHeartbeat(t *testing.T) {
	hb := &heartbeat{Enabled: true, Start: "09:00", End: "18:00", TimeZone: "Asia/Shanghai", WeekdaysOnly: true,
		IntervalMinutes: 120}
	if got, want := describeHeartbeat(hb), "every 2 hours, 09:00–18:00 Asia/Shanghai, weekdays"; got != want {
		t.Errorf("got %q, want %q", got, want)
	}
	hb.IntervalMinutes, hb.WeekdaysOnly = 45, false
	if got, want := describeHeartbeat(hb), "every 45 minutes, 09:00–18:00 Asia/Shanghai, every day"; got != want {
		t.Errorf("got %q, want %q", got, want)
	}
	if got := describeHeartbeat(nil); got != "off" {
		t.Errorf("nil heartbeat: got %q", got)
	}
}

func TestLaunchAgentPlist(t *testing.T) {
	if runtime.GOOS != "darwin" {
		t.Skip("plutil is macOS only")
	}
	plist := launchAgentPlist("/Users/someone/.crewmark/bin/crewmark", map[string]string{
		"PATH":        "/opt/homebrew/bin:/usr/bin",
		"HTTPS_PROXY": "http://127.0.0.1:7897?a=1&b=<2>",
	})
	path := filepath.Join(t.TempDir(), "agent.plist")
	if err := os.WriteFile(path, []byte(plist), 0o644); err != nil {
		t.Fatal(err)
	}
	if out, err := exec.Command("plutil", "-lint", path).CombinedOutput(); err != nil {
		t.Fatalf("plutil: %v: %s", err, out)
	}
	out, err := exec.Command("plutil", "-extract", "EnvironmentVariables.HTTPS_PROXY", "raw", path).Output()
	if err != nil || string(out) != "http://127.0.0.1:7897?a=1&b=<2>\n" {
		t.Errorf("proxy came back as %q (%v)", out, err)
	}
}

func TestDeliverPending(t *testing.T) {
	now := time.Date(2026, 11, 2, 10, 0, 0, 0, time.UTC)
	busy := true
	var calls []string
	deliverMessage = func(_ string, _ employeeProfile, text string, whenIdle bool) error {
		if whenIdle && busy {
			return errors.New("busy")
		}
		calls = append(calls, text)
		return nil
	}
	defer func() { deliverMessage = deliver }()

	pending := []pendingMessage{
		{Text: "[Crewmark] assigned MC-1", Queued: now},
		{Text: "[Crewmark] a direct message", Urgent: true, Queued: now},
		{Text: "[Crewmark heartbeat] check in", Heartbeat: true, Queued: now},
		{Text: "[Crewmark] too old", Queued: now.Add(-25 * time.Hour)},
	}
	queued := now.Add(-8 * time.Hour)
	state := daemonState{LastHeartbeat: queued}
	kept := deliverPending("emp", employeeProfile{Name: "Test"}, pending, &state, now)
	if len(calls) != 1 || calls[0] != "[Crewmark] a direct message" {
		t.Fatalf("while busy, delivered %q; want only the direct message", calls)
	}
	if len(kept) != 2 {
		t.Fatalf("while busy, kept %d messages; want the issue news and the heartbeat", len(kept))
	}
	if !state.LastHeartbeat.Equal(queued) {
		t.Fatalf("the heartbeat waits, but LastHeartbeat moved to %v", state.LastHeartbeat)
	}

	busy, calls = false, nil
	kept = deliverPending("emp", employeeProfile{Name: "Test"}, kept, &state, now)
	want := "[Crewmark] assigned MC-1\n\n[Crewmark heartbeat] check in"
	if len(calls) != 1 || calls[0] != want || len(kept) != 0 {
		t.Fatalf("once idle, delivered %q and kept %d; want one message %q", calls, len(kept), want)
	}
	if !state.LastHeartbeat.Equal(now) {
		t.Fatalf("after delivering the heartbeat, LastHeartbeat = %v; want the delivery time %v", state.LastHeartbeat, now)
	}

	deliverMessage = func(string, employeeProfile, string, bool) error { return undeliverable{"no inbox"} }
	if kept := deliverPending("emp", employeeProfile{Name: "Test"}, []pendingMessage{{Text: "x", Queued: now}}, &state, now); len(kept) != 0 {
		t.Fatalf("kept %d undeliverable messages", len(kept))
	}
}

// TestPollEventsUrgent: what the server marks urgent (a person's comment) is queued to go in even while the agent works.
func TestPollEventsUrgent(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"events":[` +
			`{"id":5,"type":"person_comment","message":"Alex commented","createdAt":"","urgent":true},` +
			`{"id":6,"type":"issue_comment","message":"DevOps commented","createdAt":"","urgent":false},` +
			`{"id":7,"type":"direct_message","message":"from an older server","createdAt":""}` +
			`],"cursor":7}`))
	}))
	defer server.Close()
	cursor := int64(4)
	state := daemonState{EventsCursor: &cursor}
	pollEvents(employeeProfile{URL: server.URL, APIKey: "cmk_test"}, "Test", &state, time.Now())
	if len(state.Pending) != 3 || !state.Pending[0].Urgent || state.Pending[1].Urgent || !state.Pending[2].Urgent {
		t.Fatalf("pending %+v; want the person's comment and the direct message urgent, the employee's comment not", state.Pending)
	}
	if *state.EventsCursor != 7 {
		t.Fatalf("cursor %d, want 7", *state.EventsCursor)
	}
}
