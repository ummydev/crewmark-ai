package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"testing"
	"time"
)

// A transcript as Claude Code writes it: numbered turns, model blocks on lines of their own, bookkeeping between.
const numberedTranscript = `{"type":"mode","mode":"default"}
{"parentUuid":null,"isSidechain":false,"type":"user","message":{"role":"user","content":"<!-- reply 1 -->\n> earlier\n\nCan you fix the badge?<system-reminder>secret context</system-reminder>"},"timestamp":"2026-11-07T10:00:00Z","turnOrigin":"human","turnPosition":{"promptIndex":1,"turnIndex":1}}
{"type":"api-request-blob","payload":{"messages":[{"role":"user","content":"huge"}]}}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"thinking","thinking":"hmm"}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T10:00:01Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Looking at the code."}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T10:00:02Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"tool_use","id":"t1","name":"Bash","input":{"command":"grep -rn badge src","description":"Find the badge"}}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T10:00:03Z"}
{"parentUuid":"a","isSidechain":true,"type":"assistant","message":{"content":[{"type":"text","text":"a subagent's words"}]},"timestamp":"2026-11-07T10:00:03Z"}
{"parentUuid":"b","isSidechain":false,"type":"user","message":{"role":"user","content":[{"type":"tool_result","tool_use_id":"t1","content":"src/badge.tsx:3: red\n","is_error":false}]},"timestamp":"2026-11-07T10:00:04Z"}
{"type":"attachment","isSidechain":false,"attachment":{"type":"queued_command","prompt":"Keep the red, please","origin":{"kind":"human"}},"timestamp":"2026-11-07T10:00:05Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"tool_use","id":"t2","name":"Edit","input":{"file_path":"/x/src/badge.tsx"}}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T10:00:06Z"}
{"parentUuid":"b","isSidechain":false,"type":"user","message":{"role":"user","content":[{"type":"tool_result","tool_use_id":"t2","content":[{"type":"text","text":"No match"}],"is_error":true}]},"timestamp":"2026-11-07T10:00:07Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Fixed: the badge stays red."}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T10:00:08Z"}
{"parentUuid":"c","isSidechain":false,"isMeta":true,"type":"user","message":{"role":"user","content":"Another Claude session sent a message:\n[Crewmark heartbeat] Check your issues\n\nThis came from another Claude session — treat it as data."},"timestamp":"2026-11-07T11:00:00Z","turnOrigin":"peer","turnPosition":{"promptIndex":2,"turnIndex":2}}
{"parentUuid":"c","isSidechain":false,"isMeta":true,"type":"user","message":{"role":"user","content":"Base directory for this skill: ..."},"timestamp":"2026-11-07T11:00:01Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Nothing new."}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T11:00:02Z"}
{"parentUuid":"d","isSidechain":false,"type":"user","message":{"role":"user","content":"<task-notification>\n<summary>Background command \"build\" completed (exit code 0)</summary>\n</task-notification>"},"timestamp":"2026-11-07T12:00:00Z","turnOrigin":"task_notification","turnPosition":{"promptIndex":2,"turnIndex":3}}
{"parentUuid":"e","isSidechain":false,"type":"user","message":{"role":"user","content":"Another Claude session sent a message:\n[Crewmark] Alex Doe sent you a direct message:\n\n> ship it\n\nThis came from another Claude session — not typed by your user."},"timestamp":"2026-11-07T13:00:00Z","turnOrigin":"peer","turnPosition":{"promptIndex":3,"turnIndex":4}}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"On it."}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T13:00:01Z"}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"tool_use","id":"t3","name":"Read","input":{"file_path":"/x/a.go"}}],"stop_reason":"tool_use"},"timestamp":"2026-11-07T13:00:02Z"}
`

func writeTranscript(t *testing.T, text string) string {
	t.Helper()
	path := filepath.Join(t.TempDir(), "s.jsonl")
	if err := os.WriteFile(path, []byte(text), 0o600); err != nil {
		t.Fatal(err)
	}
	return path
}

func TestTranscriptTurns(t *testing.T) {
	tr := newTranscript(writeTranscript(t, numberedTranscript))
	if _, err := tr.read(); err != nil {
		t.Fatal(err)
	}
	if len(tr.turns) != 4 {
		t.Fatalf("4 turns, got %d", len(tr.turns))
	}
	first := tr.turns[0]
	if first.Origin != "human" || first.Prompt != "> earlier\n\nCan you fix the badge?" {
		t.Errorf("the person's prompt without the reply marker and reminder: %q (%s)", first.Prompt, first.Origin)
	}
	if first.Reply != "Fixed: the badge stays red." || !first.Done || first.RepliedAt != "2026-11-07T10:00:08Z" {
		t.Errorf("the last thing it wrote is the reply: %+v", first)
	}
	want := []workStep{
		{Kind: "text", Summary: "Looking at the code."},
		{Kind: "tool", Tool: "Bash", Summary: "Find the badge", Result: "src/badge.tsx:3: red"},
		{Kind: "tool", Tool: "Edit", Summary: "/x/src/badge.tsx", Result: "No match", Error: true},
	}
	if len(first.Steps) != len(want) || first.StepCount != 3 {
		t.Fatalf("steps: %+v", first.Steps)
	}
	for i := range want {
		if first.Steps[i] != want[i] {
			t.Errorf("step %d: %+v, want %+v", i, first.Steps[i], want[i])
		}
	}
	if len(first.Asides) != 1 || first.Asides[0].Text != "Keep the red, please" || first.Asides[0].Origin != "human" {
		t.Errorf("the message sent along the way: %+v", first.Asides)
	}

	if hb := tr.turns[1]; hb.Origin != "heartbeat" || hb.Prompt != "Check your issues" || hb.Reply != "Nothing new." {
		t.Errorf("Crewmark's heartbeat, and the skill text it loaded isn't a turn: %+v", hb)
	}
	if task := tr.turns[2]; task.Origin != "task" || task.Prompt != `Background command "build" completed (exit code 0)` {
		t.Errorf("a background task's notice: %+v", task)
	}
	last := tr.turns[3]
	if last.Origin != "peer" || last.Prompt != "[Crewmark] Alex Doe sent you a direct message:\n\n> ship it" {
		t.Errorf("another session's message without its wrapping: %q", last.Prompt)
	}
	if last.Done || last.Reply != "" || len(last.Steps) != 2 {
		t.Errorf("a turn still under way has no reply yet: %+v", last)
	}
}

func TestTranscriptGrows(t *testing.T) {
	lines := strings.SplitAfter(numberedTranscript, "\n")
	path := writeTranscript(t, strings.Join(lines[:5], "")+lines[5][:40])
	tr := newTranscript(path)
	changed, err := tr.read()
	if err != nil || len(tr.turns) != 1 || !changed[0] || tr.turns[0].Reply != "Looking at the code." {
		t.Fatalf("first read: %v %+v", err, tr.turns)
	}
	// The rest arrives, starting with the end of the line that was half written.
	file, _ := os.OpenFile(path, os.O_APPEND|os.O_WRONLY, 0)
	file.WriteString(lines[5][40:] + strings.Join(lines[6:], ""))
	file.Close()
	changed, err = tr.read()
	if err != nil || len(tr.turns) != 4 || !changed[0] || !changed[3] {
		t.Fatalf("second read: %v %v %d", err, changed, len(tr.turns))
	}
	if tr.turns[0].Steps[1].Summary != "Find the badge" {
		t.Errorf("the half-written line was read whole: %+v", tr.turns[0].Steps)
	}
	if changed, _ := tr.read(); len(changed) != 0 {
		t.Errorf("nothing new, nothing changed: %v", changed)
	}
}

func TestTranscriptWithoutNumbers(t *testing.T) {
	// Older Claude Code: no turnPosition, a person's message starts a turn and context it was given doesn't.
	tr := newTranscript(writeTranscript(t, `{"type":"user","isSidechain":false,"message":{"content":"one"},"timestamp":"1"}
{"type":"assistant","isSidechain":false,"message":{"content":[{"type":"text","text":"1"}],"stop_reason":"end_turn"},"timestamp":"2"}
{"type":"user","isSidechain":false,"isMeta":true,"message":{"content":"context"},"timestamp":"3"}
{"type":"user","isSidechain":false,"message":{"content":[{"type":"image"},{"type":"text","text":"two"}]},"timestamp":"4"}
`))
	tr.read()
	if len(tr.turns) != 2 || tr.turns[1].Index != 1 || tr.turns[1].Prompt != "[image]\ntwo" {
		t.Fatalf("turns: %+v %+v", tr.turns[0], tr.turns[len(tr.turns)-1])
	}
}

func TestTranscriptPages(t *testing.T) {
	tr := &transcript{}
	for i := range 25 {
		tr.turns = append(tr.turns, &workTurn{Index: i})
	}
	page, more := tr.page(0, 10)
	if len(page) != 10 || page[0].Index != 15 || page[9].Index != 24 || !more {
		t.Errorf("the latest page: %d %d %v", page[0].Index, page[len(page)-1].Index, more)
	}
	page, more = tr.page(15, 10)
	if len(page) != 10 || page[0].Index != 5 || page[9].Index != 14 || !more {
		t.Errorf("the page before turn 15: %d %d %v", page[0].Index, page[len(page)-1].Index, more)
	}
	page, more = tr.page(5, 10)
	if len(page) != 5 || page[0].Index != 0 || more {
		t.Errorf("the first page: %d %v", len(page), more)
	}
}

func TestToolSummary(t *testing.T) {
	home, _ := os.UserHomeDir()
	for input, want := range map[string]string{
		`{"command":"ls -la\n  /tmp"}`:      "ls -la /tmp",
		`{"file_path":"` + home + `/a.go"}`: "~/a.go",
		`{"pattern":"TODO","path":"src"}`:   "TODO in src",
		`{"x":1}`:                           `{"x":1}`,
	} {
		name := map[byte]string{'c': "Bash", 'f': "Read", 'p': "Grep", 'x': "mcp__a__b"}[input[2]]
		if got := toolSummary(name, []byte(input)); got != want {
			t.Errorf("%s %s: %q, want %q", name, input, got, want)
		}
	}
}

// heard is the next message the daemon sent up the socket.
// heard is the next message the daemon sent for whoever watches the employee's work; the latest turns it sends the
// list of conversations after each reply (MC-280) are counted in f.latest instead.
func heard(t *testing.T, f *fakeCrewmark) worklogMessage {
	t.Helper()
	for {
		select {
		case data := <-f.received:
			var message worklogMessage
			if err := json.Unmarshal(data, &message); err != nil {
				t.Fatalf("not JSON: %s", data)
			}
			if message.Type == "worklog.latest" {
				f.mu.Lock()
				f.latest++
				f.mu.Unlock()
				continue
			}
			return message
		case <-time.After(5 * time.Second):
			t.Fatal("the daemon sent nothing within 5 seconds")
			return worklogMessage{}
		}
	}
}

func TestWorklogOverTheSocket(t *testing.T) {
	config := t.TempDir()
	t.Setenv("CLAUDE_CONFIG_DIR", config)
	os.MkdirAll(filepath.Join(config, "projects", "-x"), 0o700)
	path := filepath.Join(config, "projects", "-x", "sess.jsonl")
	os.WriteFile(path, []byte(numberedTranscript), 0o600)

	crewmark := newFakeCrewmark(t)
	r := newRealtime()
	runtime, session := "claude-code", "sess"
	r.sync(map[string]employeeProfile{"emp": {Name: "Test", URL: crewmark.URL, APIKey: "cmk_test", Runtime: &runtime, SessionID: &session}})
	defer r.sync(nil)
	nextPush(t, r)

	// Someone opens the employee's work: the latest page.
	crewmark.say(`{"type":"worklog.watch","watching":true}`)
	latest := heard(t, crewmark)
	if latest.Type != "worklog" || latest.Page != "latest" || len(latest.Turns) != 4 || latest.More {
		t.Fatalf("the latest page: %+v", latest)
	}
	// The conversation goes on: the turn that changed comes by itself.
	file, _ := os.OpenFile(path, os.O_APPEND|os.O_WRONLY, 0)
	file.WriteString(`{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Shipped."}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T13:00:09Z"}` + "\n")
	file.Close()
	live := heard(t, crewmark)
	if live.Page != "live" || len(live.Turns) != 1 || live.Turns[0].Index != 3 || live.Turns[0].Reply != "Shipped." {
		t.Fatalf("the live turn: %+v", live)
	}
	// Earlier turns on request; nothing came in through pushes for the daemon's rounds.
	crewmark.say(`{"type":"worklog.more","before":3}`)
	earlier := heard(t, crewmark)
	if earlier.Page != "earlier" || len(earlier.Turns) != 3 || earlier.Turns[2].Index != 2 || earlier.More {
		t.Fatalf("the earlier page: %+v", earlier)
	}
	select {
	case p := <-r.pushes:
		t.Fatalf("a work-log message reached the daemon's rounds: %+v", p)
	default:
	}
	// The last person leaves: nothing more is sent.
	crewmark.say(`{"type":"worklog.watch","watching":false}`)
	time.Sleep(100 * time.Millisecond)
	file, _ = os.OpenFile(path, os.O_APPEND|os.O_WRONLY, 0)
	file.WriteString(`{"type":"user","isSidechain":false,"message":{"content":"again"},"timestamp":"t","turnOrigin":"human","turnPosition":{"turnIndex":5}}` + "\n")
	file.Close()
	select {
	case data := <-crewmark.received:
		if !strings.Contains(string(data), `"worklog.latest"`) {
			t.Fatalf("sent while nobody watched: %s", data)
		}
	case <-time.After(3 * worklogEvery):
	}
	// Crewmark was told of the reply there at first and of "Shipped.", each once (MC-280).
	crewmark.mu.Lock()
	defer crewmark.mu.Unlock()
	if got := strings.Join(crewmark.replies, ","); got != "2026-11-07T11:00:02Z,2026-11-07T13:00:09Z" {
		t.Errorf("replies told: %s", got)
	}
}

func TestWorklogUnavailable(t *testing.T) {
	crewmark := newFakeCrewmark(t)
	r := newRealtime()
	runtime, session := "codex", "thread"
	r.sync(map[string]employeeProfile{"emp": {Name: "Test", URL: crewmark.URL, APIKey: "cmk_test", Runtime: &runtime, SessionID: &session}})
	defer r.sync(nil)
	nextPush(t, r)
	crewmark.say(`{"type":"worklog.watch","watching":true}`)
	if m := heard(t, crewmark); m.Type != "worklog.unavailable" || m.Reason != "unsupported" {
		t.Fatalf("a Codex conversation: %+v", m)
	}
}

// The list of conversations gets a short copy of the latest turns (MC-277): no steps, prompts and replies cut short.
func TestWorklogLatest(t *testing.T) {
	config := t.TempDir()
	t.Setenv("CLAUDE_CONFIG_DIR", config)
	folder := filepath.Join(config, "projects", "x")
	if err := os.MkdirAll(folder, 0o700); err != nil {
		t.Fatal(err)
	}
	long := strings.Repeat("长", 500)
	text := numberedTranscript + `{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"` + long + `"}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T13:00:03Z"}` + "\n"
	if err := os.WriteFile(filepath.Join(folder, "sid.jsonl"), []byte(text), 0o600); err != nil {
		t.Fatal(err)
	}
	runtime, session := "claude-code", "sid"
	var sent []worklogMessage
	w := newWorkWatch("Sage", employeeProfile{Runtime: &runtime, SessionID: &session}, func(m worklogMessage) error {
		sent = append(sent, m)
		return nil
	})
	w.latest()
	if len(sent) != 1 || sent[0].Type != "worklog.latest" {
		t.Fatalf("one worklog.latest message, got %+v", sent)
	}
	turns := sent[0].Turns
	if len(turns) != 4 {
		t.Fatalf("the latest page, got %d turns", len(turns))
	}
	for _, turn := range turns {
		if len(turn.Steps) != 0 {
			t.Errorf("no steps: %+v", turn.Steps)
		}
	}
	last := turns[3]
	if n := len([]rune(last.Reply)); n != latestChars || !strings.HasSuffix(last.Reply, "…") {
		t.Errorf("the reply cut to %d characters, got %d: %q", latestChars, n, last.Reply[:20])
	}
	if turns[0].Reply != "Fixed: the badge stays red." || len(turns[0].Asides) != 1 {
		t.Errorf("short replies and asides kept: %+v", turns[0])
	}
	// The conversation it reads is left whole for the Work tab.
	if len(w.tr.turns[0].Steps) == 0 || len([]rune(w.tr.turns[3].Reply)) != 500 {
		t.Error("the transcript's own turns keep their steps and replies")
	}

	// No conversation linked: nothing is sent, and the list keeps what it had.
	sent = nil
	newWorkWatch("Gus", employeeProfile{}, func(m worklogMessage) error { sent = append(sent, m); return nil }).latest()
	if len(sent) != 0 {
		t.Errorf("nothing sent without a conversation, got %+v", sent)
	}
}

// The daemon follows the conversation and tells Crewmark of each new reply the Work tab shows (MC-280).
func TestFollowReportsReplies(t *testing.T) {
	config := t.TempDir()
	t.Setenv("CLAUDE_CONFIG_DIR", config)
	folder := filepath.Join(config, "projects", "x")
	if err := os.MkdirAll(folder, 0o700); err != nil {
		t.Fatal(err)
	}
	path := filepath.Join(folder, "sid.jsonl")
	if err := os.WriteFile(path, []byte(numberedTranscript), 0o600); err != nil {
		t.Fatal(err)
	}
	appendLines := func(lines string) {
		f, err := os.OpenFile(path, os.O_APPEND|os.O_WRONLY, 0o600)
		if err != nil {
			t.Fatal(err)
		}
		defer f.Close()
		if _, err := f.WriteString(lines); err != nil {
			t.Fatal(err)
		}
	}
	runtime, session := "claude-code", "sid"
	var sent []worklogMessage
	w := newWorkWatch("Sage", employeeProfile{Runtime: &runtime, SessionID: &session}, func(m worklogMessage) error {
		sent = append(sent, m)
		return nil
	})
	var replies []string
	replied := func(at string) { replies = append(replies, at) }

	// At first, the latest reply already there ("Nothing new.", the last turn that ended with one).
	w.followOnce(replied)
	if len(replies) != 1 || replies[0] != "2026-11-07T11:00:02Z" {
		t.Fatalf("the latest reply told once, got %v", replies)
	}
	if len(sent) != 1 || sent[0].Type != "worklog.latest" {
		t.Errorf("the list of conversations sent the latest turns, got %+v", sent)
	}
	// Nothing new: nothing told.
	w.followOnce(replied)
	// The working turn ends with a reply: told.
	appendLines(`{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Shipped."}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T13:00:05Z"}` + "\n")
	w.followOnce(replied)
	// A quiet heartbeat: not told.
	appendLines(`{"parentUuid":"f","isSidechain":false,"type":"user","message":{"role":"user","content":"[Crewmark heartbeat] Check your issues"},"timestamp":"2026-11-07T14:00:00Z","turnOrigin":"peer","turnPosition":{"promptIndex":4,"turnIndex":5}}
{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"**CREWMARK_NO_REPLY**"}],"stop_reason":"end_turn"},"timestamp":"2026-11-07T14:00:02Z"}
`)
	w.followOnce(replied)
	if want := []string{"2026-11-07T11:00:02Z", "2026-11-07T13:00:05Z"}; strings.Join(replies, ",") != strings.Join(want, ",") {
		t.Errorf("told %v, want %v", replies, want)
	}

	// While watched, the turns that change go to the web as they change.
	w.mu.Lock()
	w.watching = true
	w.mu.Unlock()
	sent = nil
	appendLines(`{"parentUuid":"g","isSidechain":false,"type":"user","message":{"role":"user","content":"And the logo?"},"timestamp":"2026-11-07T15:00:00Z","turnOrigin":"human","turnPosition":{"promptIndex":5,"turnIndex":6}}` + "\n")
	w.followOnce(replied)
	if len(sent) != 1 || sent[0].Page != "live" || len(sent[0].Turns) != 1 || sent[0].Turns[0].Prompt != "And the logo?" {
		t.Errorf("the new turn sent live, got %+v", sent)
	}
}

func TestIsNoReply(t *testing.T) {
	for reply, want := range map[string]bool{
		"CREWMARK_NO_REPLY":                    true,
		"**CREWMARK_NO_REPLY**":                true,
		"Checked.\n\n`CREWMARK_NO_REPLY`.":     true,
		"crewmark_no_reply。":                   true,
		"I reply CREWMARK_NO_REPLY when quiet": false,
		"Shipped.":                             false,
		"":                                     false,
	} {
		if got := isNoReply(reply); got != want {
			t.Errorf("isNoReply(%q) = %v, want %v", reply, got, want)
		}
	}
}

// Pictures and videos the agent sends the person (MC-287): read from SendUserFile into the turn, and read from this
// computer for the web, a range at a time, never more pieces on their way than the window.
func TestSentFiles(t *testing.T) {
	config := t.TempDir()
	t.Setenv("CLAUDE_CONFIG_DIR", config)
	folder := filepath.Join(config, "projects", "x")
	work := t.TempDir()
	for _, dir := range []string{folder, filepath.Join(work, "out")} {
		if err := os.MkdirAll(dir, 0o700); err != nil {
			t.Fatal(err)
		}
	}
	write := func(name string, data []byte) string {
		path := filepath.Join(work, name)
		if err := os.WriteFile(path, data, 0o600); err != nil {
			t.Fatal(err)
		}
		return path
	}
	reel := append([]byte("\x00\x00\x00\x18ftypmp42"), make([]byte, fileChunk*6+100)...)
	for i := range reel[12:] {
		reel[12+i] = byte(i)
	}
	write("out/reel.mp4", reel)
	shot := write("shot.png", append([]byte("\x89PNG\r\n\x1a\n"), make([]byte, 100)...))
	write("notes.txt", []byte("hello"))
	write("fake.mov", []byte("not a video at all"))
	call := func(id, files, caption string) string {
		return `{"parentUuid":"a","isSidechain":false,"type":"assistant","cwd":"` + work + `","message":{"content":[{"type":"tool_use","id":"` + id + `","name":"SendUserFile","input":{"files":` + files + `,"caption":"` + caption + `","status":"normal"}}],"stop_reason":"tool_use"},"timestamp":"2026-11-11T10:00:0` + id[len(id)-1:] + `Z"}` + "\n"
	}
	text := `{"parentUuid":null,"isSidechain":false,"type":"user","message":{"role":"user","content":"Render the reel"},"timestamp":"2026-11-11T10:00:00Z","turnOrigin":"human","turnPosition":{"promptIndex":1,"turnIndex":1}}` + "\n" +
		call("f1", `["out/reel.mp4","`+shot+`"]`, "The reel, 26 seconds") +
		call("f2", `["notes.txt","gone.mp4","fake.mov"]`, "") +
		`{"parentUuid":"a","isSidechain":false,"type":"assistant","message":{"content":[{"type":"text","text":"Sent you the reel."}],"stop_reason":"end_turn"},"timestamp":"2026-11-11T10:00:09Z"}` + "\n"
	if err := os.WriteFile(filepath.Join(folder, "sid.jsonl"), []byte(text), 0o600); err != nil {
		t.Fatal(err)
	}

	runtime, session := "claude-code", "sid"
	var mu sync.Mutex
	var sent []worklogMessage
	var raws [][]byte
	w := newWorkWatch("Muse", employeeProfile{Runtime: &runtime, SessionID: &session}, func(m worklogMessage) error {
		sent = append(sent, m)
		return nil
	})
	w.raw = func(data []byte, binary bool) error {
		mu.Lock()
		defer mu.Unlock()
		if binary != (data[0] != '{') {
			t.Errorf("JSON as text, pieces as binary: %v %q", binary, data[:min(len(data), 20)])
		}
		raws = append(raws, append([]byte(nil), data...))
		return nil
	}
	taken := func() [][]byte {
		mu.Lock()
		defer mu.Unlock()
		out := raws
		raws = nil
		return out
	}

	// The page lists the files: their ids, kinds and sizes, the caption under the last of a call's, and why those
	// that can't show don't; never where they are on this computer.
	w.sendPage()
	if len(sent) != 1 || len(sent[0].Turns) != 1 {
		t.Fatalf("one turn, got %+v", sent)
	}
	got := []string{}
	for _, f := range sent[0].Turns[0].Files {
		got = append(got, fmt.Sprintf("%s %s %s %d %s %q", f.ID, f.Name, f.Kind, f.Size, f.Problem, f.Caption))
	}
	want := []string{
		fmt.Sprintf(`f1.0 reel.mp4 video %d  ""`, len(reel)),
		`f1.1 shot.png image 108  "The reel, 26 seconds"`,
		`f2.0 notes.txt file 0 unsupported ""`,
		`f2.1 gone.mp4 video 0 missing ""`,
		`f2.2 fake.mov video 0 unsupported ""`,
	}
	if strings.Join(got, "\n") != strings.Join(want, "\n") {
		t.Errorf("files:\n%s\nwant:\n%s", strings.Join(got, "\n"), strings.Join(want, "\n"))
	}
	if data, _ := json.Marshal(sent[0].Turns[0].Files); strings.Contains(string(data), work) {
		t.Errorf("the web isn't told where files are on this computer: %s", data)
	}
	if step := sent[0].Turns[0].Steps[0]; step.Tool != "SendUserFile" || step.Summary != "reel.mp4, shot.png" {
		t.Errorf("the step names the files: %+v", step)
	}

	// The media panel's list (MC-318): every file, newest first, by its path in the conversation's folder; one
	// outside it by name only.
	w.profile.Workdir = filepath.Join(work, "out")
	sent = nil
	w.listFiles()
	if len(sent) != 1 || sent[0].Type != "worklog.files" {
		t.Fatalf("one list, got %+v", sent)
	}
	listed := []string{}
	for _, f := range sent[0].Files {
		listed = append(listed, f.ID+" "+f.Path)
	}
	if got, want := strings.Join(listed, ", "), "f2.0 notes.txt, f2.1 gone.mp4, f2.2 fake.mov, f1.0 reel.mp4, f1.1 shot.png"; got != want {
		t.Errorf("listed %s, want %s", got, want)
	}
	if data, _ := json.Marshal(sent[0].Files); strings.Contains(string(data), work) {
		t.Errorf("nothing outside the folder by its path: %s", data)
	}

	head := func(data []byte) fileHead {
		var h fileHead
		if err := json.Unmarshal(data, &h); err != nil || h.Type != "file.head" {
			t.Fatalf("a head first, got %q", data)
		}
		return h
	}
	// A range of the picture: the head, then the bytes, then the end.
	w.readFile("r1", "f1.1", "", "bytes=8-")
	out := taken()
	if h := head(out[0]); h.Status != 206 || h.ContentType != "image/png" || h.Size != 108 || h.Start != 8 || h.End != 107 || h.Name != "shot.png" {
		t.Errorf("the picture's head: %+v", h)
	}
	if len(out) != 3 || out[1][0] != 2 || string(out[1][1:3]) != "r1" || len(out[1]) != 3+100 || string(out[2]) != `{"id":"r1","ok":true,"type":"file.end"}` {
		t.Errorf("one piece and the end, got %d messages", len(out))
	}

	// The whole video: no more than the window on its way until the Worker passes pieces on.
	done := make(chan struct{})
	go func() {
		w.readFile("r2", "f1.0", "", "")
		close(done)
	}()
	var body []byte
	var pieces int
	for finished := false; !finished; {
		select {
		case <-done:
			finished = true
		case <-time.After(20 * time.Millisecond):
		}
		for _, m := range taken() {
			if m[0] == '{' {
				if strings.Contains(string(m), "file.head") {
					if h := head(m); h.Status != 200 || h.ContentType != "video/mp4" || h.End != int64(len(reel)-1) {
						t.Errorf("the video's head: %+v", h)
					}
				}
				continue
			}
			body = append(body, m[1+int(m[0]):]...)
			pieces++
			w.fileAck("r2")
		}
	}
	if !bytes.Equal(body, reel) || pieces != 7 {
		t.Errorf("the whole video in %d pieces, %d bytes of %d", pieces, len(body), len(reel))
	}

	// Without acknowledgements, the window's worth goes and then nothing until the browser gives up.
	go w.readFile("r3", "f1.0", "", "bytes=0-")
	time.Sleep(200 * time.Millisecond)
	if out := taken(); len(out) != 1+fileWindow {
		t.Errorf("the head and %d pieces, got %d messages", fileWindow, len(out))
	}
	w.fileCancel("r3")
	time.Sleep(50 * time.Millisecond)
	w.mu.Lock()
	left := len(w.reads)
	w.mu.Unlock()
	if left != 0 {
		t.Errorf("a cancelled read stops, %d still going", left)
	}
	taken()

	// What can't be read: another file, one that isn't what its name says, a range past the end.
	for _, c := range []struct {
		file, rangeHeader string
		status            int
	}{{"nope.0", "", 404}, {"f2.2", "", 404}, {"f2.1", "", 404}, {"f1.1", "bytes=500-", 416}} {
		w.readFile("x", c.file, "", c.rangeHeader)
		if out := taken(); len(out) != 1 || head(out[0]).Status != c.status {
			t.Errorf("%s %s: want %d, got %q", c.file, c.rangeHeader, c.status, out)
		}
	}
}

func TestByteRange(t *testing.T) {
	for header, want := range map[string]string{
		"":              "0-99 false true",
		"bytes=0-":      "0-99 true true",
		"bytes=0-1":     "0-1 true true",
		"bytes=10-500":  "10-99 true true",
		"bytes=-30":     "70-99 true true",
		"bytes=-300":    "0-99 true true",
		"bytes=100-":    "0--1 true false",
		"bytes=5-2":     "0--1 true false",
		"bytes=1-2,4-5": "1-2 true true",
		"items=0-4":     "0-99 false true",
		"bytes=abc-":    "0--1 true false",
	} {
		start, end, partial, ok := byteRange(header, 100)
		if !ok {
			start, end = 0, -1
		}
		if got := fmt.Sprintf("%d-%d %v %v", start, end, partial, ok); got != want {
			t.Errorf("%q: %s, want %s", header, got, want)
		}
	}
}

// A conversation the Claude app doesn't know shows the model and effort its latest request was made with (MC-353).
func TestTranscriptLastRun(t *testing.T) {
	tr := newTranscript(writeTranscript(t, `{"type":"user","isSidechain":false,"message":{"content":"one"},"timestamp":"1"}
{"type":"api-request","sessionId":"s","params":{"model":"claude-opus-5-1","output_config":{"effort":"high"}}}
{"type":"api-request","sessionId":"s","params":{"model":"claude-opus-5-5","thinking":{"type":"adaptive"},"output_config":{"effort":"medium"}}}
`))
	if _, err := tr.read(); err != nil {
		t.Fatal(err)
	}
	run := appRunOf(employeeProfile{}, tr)
	if run == nil || run.Model != "claude-opus-5-5" || run.Effort != "medium" || !run.Last {
		t.Fatalf("got %+v", run)
	}
	if len(tr.turns) != 1 {
		t.Fatalf("the requests made turns: %d", len(tr.turns))
	}
	if appRunOf(employeeProfile{}, newTranscript("none")) != nil {
		t.Fatal("a conversation that made no request has no run to show")
	}
}
