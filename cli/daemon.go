package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"
	_ "time/tzdata" // heartbeat time zones work even where the system has no zone database (Windows)
)

// The daemon: a background process the operating system keeps running (see service.go), which passes things on to
// the employees' agent conversations on this computer:
//   - Crewmark events, e.g. an issue assigned to the employee, polled from /api/agent/events;
//   - heartbeats: the employee's prompt every so often during its working hours, when someone turned that on.
// It delivers each message into the conversation the employee is linked to (see deliver.go) and keeps what it can't
// deliver yet, e.g. while the conversation isn't open, for the next round.

const (
	daemonTick       = 30 * time.Second
	heartbeatRefresh = 5 * time.Minute
	// Undelivered messages older than this are dropped: the agent has moved on, or Crewmark has newer ones.
	pendingMaxAge = 24 * time.Hour
	pendingMax    = 50
)

// pendingMessage waits in the employee's state until it reaches the agent's conversation. Urgent messages (a person
// writing to the employee) go right away, and an agent that's busy reads them between its steps; the rest (heartbeats,
// news about issues) wait until the agent is idle, then arrive together as one message.
type pendingMessage struct {
	Text      string    `json:"text"`
	Heartbeat bool      `json:"heartbeat,omitempty"`
	Urgent    bool      `json:"urgent,omitempty"`
	Queued    time.Time `json:"queued"`
}

// urgentEvents are the Crewmark events that shouldn't wait for the agent to be idle.
var urgentEvents = map[string]bool{"direct_message": true}

// deliverMessage is deliver, swapped out in tests.
var deliverMessage = deliver

// daemonState is what the daemon remembers about one employee, in ~/.crewmark/employees/<id>/daemon.json.
type daemonState struct {
	// The last event id seen; nil until the first poll, which only learns where to start.
	EventsCursor  *int64           `json:"eventsCursor"`
	LastHeartbeat time.Time        `json:"lastHeartbeat"`
	Heartbeat     *heartbeat       `json:"heartbeat"`
	CheckedAt     time.Time        `json:"checkedAt"`
	Pending       []pendingMessage `json:"pending"`
	LastDelivery  time.Time        `json:"lastDelivery"`
	LastProblem   string           `json:"lastProblem,omitempty"`
}

func statePath(employeeID string) string {
	return filepath.Join(home, "employees", employeeID, "daemon.json")
}

func readState(employeeID string) daemonState {
	var state daemonState
	_ = readJSON(statePath(employeeID), &state)
	return state
}

func writeState(employeeID string, state daemonState) error {
	if err := os.MkdirAll(filepath.Dir(statePath(employeeID)), 0o700); err != nil {
		return err
	}
	return writePrivate(statePath(employeeID), state)
}

func daemon(args []string) error {
	sub := ""
	if len(args) > 0 {
		sub = args[0]
	}
	switch sub {
	case "run":
		return daemonRun()
	case "once":
		// One round, then exit: for trying things out.
		for id, profile := range mustProfiles() {
			daemonRound(id, profile, time.Now())
		}
		return nil
	case "install":
		return installService(true)
	case "uninstall":
		return uninstallService()
	case "status", "":
		return daemonStatus()
	default:
		return fail("Unknown daemon command %q: use run, install, uninstall or status.", sub)
	}
}

func mustProfiles() map[string]employeeProfile {
	profiles, err := readProfiles()
	if err != nil {
		log.Printf("%v", err)
		return nil
	}
	return profiles
}

// daemonRun loops until the process is stopped. Only one runs at a time, so nothing is delivered twice.
func daemonRun() error {
	unlock, err := lockDaemon()
	if err != nil {
		return err
	}
	defer unlock()
	log.SetFlags(log.LstdFlags)
	log.Printf("crewmark %s daemon started", version)
	for {
		// Profiles are read every round, so employees set up later are picked up without a restart.
		for id, profile := range mustProfiles() {
			daemonRound(id, profile, time.Now())
		}
		time.Sleep(daemonTick)
	}
}

// daemonRound does one round for one employee: new events, the heartbeat if one is due, then delivery.
func daemonRound(employeeID string, profile employeeProfile, now time.Time) {
	state := readState(employeeID)
	name := logName(employeeID, profile)

	pollEvents(profile, name, &state, now)

	if now.Sub(state.CheckedAt) >= heartbeatRefresh {
		var data meResponse
		if err := api(profile, "GET", "/api/agent/me", nil, &data); err == nil {
			state.Heartbeat, state.CheckedAt = data.Employee.Heartbeat, now
		} else {
			log.Printf("%s: couldn't read the heartbeat settings: %v", name, err)
		}
	}
	if heartbeatDue(state.Heartbeat, state.LastHeartbeat, now) && !hasHeartbeat(state.Pending) {
		state.Pending = append(state.Pending, pendingMessage{
			Text: "[Crewmark heartbeat] " + state.Heartbeat.Prompt, Heartbeat: true, Queued: now,
		})
		state.LastHeartbeat = now
	}

	state.Pending = deliverPending(employeeID, profile, state.Pending, &state, now)
	if err := writeState(employeeID, state); err != nil {
		log.Printf("%s: couldn't save the daemon state: %v", name, err)
	}
}

// logName tells employees with the same name apart in the daemon's log, e.g. "程序员 (9cf44e99)".
func logName(employeeID string, profile employeeProfile) string {
	return fmt.Sprintf("%s (%.8s)", profile.Name, employeeID)
}

func pollEvents(profile employeeProfile, name string, state *daemonState, now time.Time) {
	path := "/api/agent/events"
	if state.EventsCursor != nil {
		path += "?after=" + strconv.FormatInt(*state.EventsCursor, 10)
	}
	var res eventsResponse
	if err := api(profile, "GET", path, nil, &res); err != nil {
		log.Printf("%s: couldn't check for Crewmark events: %v", name, err)
		return
	}
	for _, event := range res.Events {
		state.Pending = append(state.Pending, pendingMessage{
			Text: "[Crewmark] " + event.Message, Urgent: urgentEvents[event.Type], Queued: now,
		})
	}
	cursor := res.Cursor
	state.EventsCursor = &cursor
}

// deliverPending hands the waiting messages to the agent's conversation and returns those still waiting: the urgent
// ones one by one in order, then the others, once the agent is idle, together as one message.
func deliverPending(employeeID string, profile employeeProfile, pending []pendingMessage, state *daemonState,
	now time.Time) []pendingMessage {
	name := logName(employeeID, profile)
	var urgent, later, kept []pendingMessage
	for _, message := range pending {
		switch {
		case now.Sub(message.Queued) > pendingMaxAge:
			log.Printf("%s: dropped a message nobody could take for a day: %.60q", name, message.Text)
		case message.Urgent:
			urgent = append(urgent, message)
		default:
			later = append(later, message)
		}
	}
	// try delivers one text and says whether it's done with (delivered, or never deliverable).
	try := func(text string, whenIdle bool) bool {
		err := deliverMessage(employeeID, profile, text, whenIdle)
		if _, never := err.(undeliverable); never {
			log.Printf("%s: dropped a message: %v", name, err)
			return true
		}
		if err != nil {
			if err.Error() != state.LastProblem {
				log.Printf("%s: not delivered yet: %v", name, err)
			}
			state.LastProblem = err.Error()
			return false
		}
		log.Printf("%s: delivered %.60q", name, text)
		state.LastDelivery, state.LastProblem = now, ""
		return true
	}
	for i, message := range urgent {
		if !try(message.Text, false) {
			// Keep order: later ones wait behind this one.
			kept = append(kept, urgent[i:]...)
			break
		}
	}
	if len(later) > 0 {
		texts := make([]string, len(later))
		for i, message := range later {
			texts[i] = message.Text
		}
		if !try(strings.Join(texts, "\n\n"), true) {
			kept = append(kept, later...)
		} else if hasHeartbeat(later) {
			// The next heartbeat counts from here: one that waited hours for the conversation to open isn't
			// followed by another a minute later.
			state.LastHeartbeat = now
		}
	}
	if len(kept) > pendingMax {
		kept = kept[len(kept)-pendingMax:]
	}
	return kept
}

func hasHeartbeat(pending []pendingMessage) bool {
	for _, m := range pending {
		if m.Heartbeat {
			return true
		}
	}
	return false
}

// minutesOfDay parses "HH:MM".
func minutesOfDay(clock string) (int, bool) {
	t, err := time.Parse("15:04", clock)
	if err != nil {
		return 0, false
	}
	return t.Hour()*60 + t.Minute(), true
}

// heartbeatDue says whether it's time to wake the agent: it's one of the heartbeat's times (see heartbeatSlot) that
// came after the last heartbeat, and that one is at least half an interval back. Counting from the set times keeps
// heartbeats on the clock instead of drifting later with each round; the half interval keeps a heartbeat that waited
// for its conversation to open from being followed by the next one minutes later.
func heartbeatDue(hb *heartbeat, last, now time.Time) bool {
	slot, ok := heartbeatSlot(hb, now)
	return ok && slot.After(last) && now.Sub(last) >= time.Duration(hb.IntervalMinutes)*time.Minute/2
}

// heartbeatSlot is the latest of the heartbeat's set times at or before now: its start, then every interval, during
// its working hours in its time zone (an end before the start runs past midnight). False outside working hours, or
// when the heartbeat is off.
func heartbeatSlot(hb *heartbeat, now time.Time) (time.Time, bool) {
	if hb == nil || !hb.Enabled || hb.IntervalMinutes <= 0 {
		return time.Time{}, false
	}
	zone, err := time.LoadLocation(hb.TimeZone)
	if err != nil {
		return time.Time{}, false
	}
	local := now.In(zone)
	if hb.WeekdaysOnly && (local.Weekday() == time.Saturday || local.Weekday() == time.Sunday) {
		return time.Time{}, false
	}
	start, ok1 := minutesOfDay(hb.Start)
	end, ok2 := minutesOfDay(hb.End)
	if !ok1 || !ok2 {
		return time.Time{}, false
	}
	minute := local.Hour()*60 + local.Minute()
	working := minute >= start && minute < end
	if end < start {
		working = minute >= start || minute < end
	}
	if !working {
		return time.Time{}, false
	}
	// These working hours began today at the start, or yesterday for hours past midnight.
	began := time.Date(local.Year(), local.Month(), local.Day(), start/60, start%60, 0, 0, zone)
	if minute < start {
		began = began.AddDate(0, 0, -1)
	}
	interval := time.Duration(hb.IntervalMinutes) * time.Minute
	return began.Add(now.Sub(began) / interval * interval), true
}

// describeHeartbeat is e.g. "every hour, 09:00–18:00 Asia/Shanghai, weekdays", or "off".
func describeHeartbeat(hb *heartbeat) string {
	if hb == nil || !hb.Enabled {
		return "off"
	}
	every := fmt.Sprintf("every %d minutes", hb.IntervalMinutes)
	if hb.IntervalMinutes%60 == 0 {
		every = "every hour"
		if hb.IntervalMinutes > 60 {
			every = fmt.Sprintf("every %d hours", hb.IntervalMinutes/60)
		}
	}
	days := "every day"
	if hb.WeekdaysOnly {
		days = "weekdays"
	}
	return fmt.Sprintf("%s, %s–%s %s, %s", every, hb.Start, hb.End, hb.TimeZone, days)
}

func daemonStatus() error {
	running, where := serviceStatus()
	fmt.Printf("Daemon: %s\n", where)
	if !running {
		fmt.Println("Run `crewmark daemon install` to start it.")
	}
	profiles, err := readProfiles()
	if err != nil {
		return err
	}
	for id, profile := range profiles {
		state := readState(id)
		line := fmt.Sprintf("\n%s (%s)\n  Heartbeat: %s", profile.Name, id, describeHeartbeat(state.Heartbeat))
		if !state.LastDelivery.IsZero() {
			line += "\n  Last delivered: " + state.LastDelivery.Local().Format("2006-01-02 15:04")
		}
		if n := len(state.Pending); n > 0 {
			line += fmt.Sprintf("\n  Waiting: %d message(s)", n)
			if state.LastProblem != "" {
				line += ": " + strings.TrimSpace(state.LastProblem)
			}
		}
		fmt.Println(line)
	}
	return nil
}
