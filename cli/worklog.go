package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"unicode/utf8"
)

// The employee's work as Crewmark's web shows it (MC-186): its Claude Code conversation turn by turn, each with what
// started it, the steps in between folded away, and the reply it ended with. The daemon reads it from the
// conversation's transcript on this computer only while someone has it open in the web, and sends it through the
// push channel; nothing of it is kept on Crewmark's side.
//
// Claude Code writes the transcript as JSON lines in ~/.claude/projects/<folder>/<session id>.jsonl, a line per
// event: what started a turn (a person's message, another session's, a background task's notice), each block the
// model wrote (thinking, text, a tool call), each tool's result, and bookkeeping. Newer versions number the turns
// (turnPosition.turnIndex) on the line that starts one; older ones don't, and a person's message starts one.

const (
	// What the web is sent of a turn, so a page stays well under the push channel's 1 MiB a message.
	maxPromptChars = 4000
	maxReplyChars  = 20000
	maxStepChars   = 160
	maxResultChars = 300
	maxTurnSteps   = 200
)

// workTurn is one turn of the employee's conversation.
type workTurn struct {
	// Its place in the conversation, from 0. (Claude Code's own turn numbers can repeat, e.g. after a summary.)
	Index int    `json:"index"`
	At    string `json:"at"`
	// What started it: "human" (a person in the conversation), "peer" (another session, Crewmark's notices among
	// them), "heartbeat" (Crewmark waking it up), "task" (a background task finishing), "compact" (Claude Code
	// summarising the conversation to go on) or "other".
	Origin string      `json:"origin"`
	Prompt string      `json:"prompt"`
	Asides []workAside `json:"asides,omitempty"`
	// The last maxTurnSteps of what happened in between; StepCount counts them all.
	Steps     []workStep `json:"steps"`
	StepCount int        `json:"stepCount"`
	// The last thing it wrote, and when; empty until it has written something after its last tool call.
	Reply     string `json:"reply"`
	RepliedAt string `json:"repliedAt,omitempty"`
	// Whether the model ended the turn (rather than still being at it, or having been stopped).
	Done bool `json:"done"`
	// The pictures and videos it sent the person (worklog_files.go).
	Files []workFile `json:"files,omitempty"`
}

// workAside is a message that came in while the turn was under way: a person's, or another session's.
type workAside struct {
	Origin string `json:"origin"`
	Text   string `json:"text"`
	At     string `json:"at"`
}

// workStep is one step of a turn: something the model wrote along the way, or a tool it used.
type workStep struct {
	Kind    string `json:"kind"`
	Tool    string `json:"tool,omitempty"`
	Summary string `json:"summary"`
	Result  string `json:"result,omitempty"`
	Error   bool   `json:"error,omitempty"`
}

// transcript reads a conversation's transcript as it grows, keeping its turns.
type transcript struct {
	path    string
	offset  int64
	partial []byte
	turns   []*workTurn
	// Where each tool call's step is, to put its result there: the turn's place in turns, the step's in its steps.
	tools map[string][2]int
	// Whether the transcript numbers its turns: then only those lines start one.
	numbered bool
	// Claude Code's number of the turn under way, to tell a new turn from more of the same prompt.
	turnIndex int
	// The model and effort its latest request to the model was made with, as Claude Code notes each one.
	lastRun appRun
}

func newTranscript(path string) *transcript {
	return &transcript{path: path, tools: map[string][2]int{}}
}

// claudeTranscript is where Claude Code keeps the conversation's transcript on this computer.
func claudeTranscript(sessionID string) (string, error) {
	files, _ := filepath.Glob(filepath.Join(claudeConfigDir(), "projects", "*", sessionID+".jsonl"))
	if len(files) == 0 {
		return "", errors.New("this computer has no transcript of the conversation")
	}
	// The newest, should a conversation have moved folders.
	newest, newestTime := files[0], int64(0)
	for _, file := range files {
		if info, err := os.Stat(file); err == nil && info.ModTime().UnixNano() > newestTime {
			newest, newestTime = file, info.ModTime().UnixNano()
		}
	}
	return newest, nil
}

// read takes in what was written since the last read, and says which turns (their places in turns) changed.
func (t *transcript) read() (map[int]bool, error) {
	file, err := os.Open(t.path)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	info, err := file.Stat()
	if err != nil {
		return nil, err
	}
	if info.Size() < t.offset {
		// Rewritten from scratch: start over.
		*t = *newTranscript(t.path)
	}
	if _, err := file.Seek(t.offset, io.SeekStart); err != nil {
		return nil, err
	}
	data, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}
	t.offset += int64(len(data))
	data = append(t.partial, data...)
	changed := map[int]bool{}
	for {
		end := bytes.IndexByte(data, '\n')
		if end < 0 {
			break
		}
		t.line(data[:end], changed)
		data = data[end+1:]
	}
	// A line still being written waits for its end.
	t.partial = append([]byte(nil), data...)
	return changed, nil
}

type claudeEntry struct {
	Type             string `json:"type"`
	IsSidechain      bool   `json:"isSidechain"`
	IsMeta           bool   `json:"isMeta"`
	IsCompactSummary bool   `json:"isCompactSummary"`
	Timestamp        string `json:"timestamp"`
	Cwd              string `json:"cwd"`
	TurnOrigin       string `json:"turnOrigin"`
	TurnPosition     *struct {
		TurnIndex int `json:"turnIndex"`
	} `json:"turnPosition"`
	Message struct {
		Content    json.RawMessage `json:"content"`
		StopReason string          `json:"stop_reason"`
	} `json:"message"`
	Attachment *struct {
		Type   string          `json:"type"`
		Prompt json.RawMessage `json:"prompt"`
		Origin struct {
			Kind string `json:"kind"`
		} `json:"origin"`
	} `json:"attachment"`
}

type contentBlock struct {
	Type      string          `json:"type"`
	Text      string          `json:"text"`
	Name      string          `json:"name"`
	ID        string          `json:"id"`
	Input     json.RawMessage `json:"input"`
	ToolUseID string          `json:"tool_use_id"`
	Content   json.RawMessage `json:"content"`
	IsError   bool            `json:"is_error"`
}

// The transcript's bookkeeping lines start with their type, so they're skipped without reading them (some are large).
var wantedLine = regexp.MustCompile(`^\{"type":"(user|assistant|attachment)"`)

var apiRequestLine = []byte(`{"type":"api-request",`)

func (t *transcript) line(data []byte, changed map[int]bool) {
	if bytes.HasPrefix(data, apiRequestLine) {
		t.request(data)
		return
	}
	if bytes.HasPrefix(data, []byte(`{"type":"`)) && !wantedLine.Match(data) {
		return
	}
	var entry claudeEntry
	if json.Unmarshal(data, &entry) != nil || entry.IsSidechain {
		return
	}
	switch entry.Type {
	case "user":
		t.user(entry, changed)
	case "assistant":
		t.assistant(entry, changed)
	case "attachment":
		t.aside(entry, changed)
	}
}

// request notes the model and effort a request to the model was made with: how the conversation runs, shown where
// the Claude app doesn't say (a conversation the daemon runs in the background, MC-353).
func (t *transcript) request(data []byte) {
	var line struct {
		Params struct {
			Model        string `json:"model"`
			OutputConfig struct {
				Effort string `json:"effort"`
			} `json:"output_config"`
		} `json:"params"`
	}
	if json.Unmarshal(data, &line) != nil || line.Params.Model == "" {
		return
	}
	t.lastRun = appRun{Model: line.Params.Model, Effort: line.Params.OutputConfig.Effort}
}

func (t *transcript) current() (*workTurn, int) {
	if len(t.turns) == 0 {
		return nil, -1
	}
	return t.turns[len(t.turns)-1], len(t.turns) - 1
}

func (t *transcript) user(entry claudeEntry, changed map[int]bool) {
	var blocks []contentBlock
	text, isString := "", false
	if json.Unmarshal(entry.Message.Content, &text) == nil {
		isString = true
	} else if json.Unmarshal(entry.Message.Content, &blocks) != nil {
		return
	}
	// A tool's result goes to the step that called it.
	for _, block := range blocks {
		if block.Type != "tool_result" {
			continue
		}
		if at, ok := t.tools[block.ToolUseID]; ok && at[0] < len(t.turns) {
			turn := t.turns[at[0]]
			if step := at[1] - (turn.StepCount - len(turn.Steps)); step >= 0 && step < len(turn.Steps) {
				turn.Steps[step].Result = oneLine(blockText(block.Content), maxResultChars)
				turn.Steps[step].Error = block.IsError
				changed[at[0]] = true
			}
			delete(t.tools, block.ToolUseID)
		}
	}
	if !isString {
		for _, block := range blocks {
			switch block.Type {
			case "text":
				text += block.Text + "\n"
			case "image":
				text += "[image]\n"
			}
		}
		if text == "" {
			return
		}
	}

	if entry.TurnPosition != nil {
		t.numbered = true
	}
	starts := false
	switch {
	case entry.TurnPosition != nil:
		starts = len(t.turns) == 0 || t.turnIndex != entry.TurnPosition.TurnIndex
		t.turnIndex = entry.TurnPosition.TurnIndex
	case entry.IsCompactSummary:
		starts = true
	case t.numbered || entry.IsMeta:
		// Context the conversation was given, not a new turn.
		return
	default:
		starts = true
	}
	origin, prompt := promptOf(entry, text)
	if !starts {
		// More of the same prompt, e.g. the text after a picture.
		turn, i := t.current()
		turn.Prompt = clip(strings.TrimSpace(turn.Prompt+"\n\n"+prompt), maxPromptChars)
		changed[i] = true
		return
	}
	t.turns = append(t.turns, &workTurn{Index: len(t.turns), At: entry.Timestamp, Origin: origin, Prompt: prompt, Steps: []workStep{}})
	changed[len(t.turns)-1] = true
}

func (t *transcript) assistant(entry claudeEntry, changed map[int]bool) {
	turn, i := t.current()
	if turn == nil {
		return
	}
	var blocks []contentBlock
	if json.Unmarshal(entry.Message.Content, &blocks) != nil {
		return
	}
	for _, block := range blocks {
		switch block.Type {
		case "text":
			if strings.TrimSpace(block.Text) == "" {
				continue
			}
			// What it wrote before is a step along the way; the newest is the reply until something follows it.
			if turn.Reply != "" {
				t.step(turn, i, workStep{Kind: "text", Summary: oneLine(turn.Reply, maxStepChars)})
			}
			turn.Reply, turn.RepliedAt = clip(strings.TrimSpace(block.Text), maxReplyChars), entry.Timestamp
		case "tool_use":
			if turn.Reply != "" {
				t.step(turn, i, workStep{Kind: "text", Summary: oneLine(turn.Reply, maxStepChars)})
				turn.Reply, turn.RepliedAt = "", ""
			}
			t.tools[block.ID] = [2]int{i, turn.StepCount}
			t.step(turn, i, workStep{Kind: "tool", Tool: block.Name, Summary: toolSummary(block.Name, block.Input)})
			if block.Name == "SendUserFile" {
				turn.Files = append(turn.Files, sendUserFile(block.Input, entry.Cwd, block.ID, entry.Timestamp)...)
			}
		default:
			continue
		}
		turn.Done = false
		changed[i] = true
	}
	if entry.Message.StopReason == "end_turn" {
		turn.Done = true
		changed[i] = true
	}
}

func (t *transcript) step(turn *workTurn, i int, step workStep) {
	turn.Steps = append(turn.Steps, step)
	turn.StepCount++
	if len(turn.Steps) > maxTurnSteps {
		turn.Steps = turn.Steps[len(turn.Steps)-maxTurnSteps:]
	}
}

// aside keeps a message a person or another session sent while the turn was under way.
func (t *transcript) aside(entry claudeEntry, changed map[int]bool) {
	a := entry.Attachment
	if a == nil || a.Type != "queued_command" || (a.Origin.Kind != "human" && a.Origin.Kind != "peer") {
		return
	}
	turn, i := t.current()
	if turn == nil {
		return
	}
	text := blockText(a.Prompt)
	origin := a.Origin.Kind
	if origin == "peer" {
		origin, text = peerPrompt(text)
	}
	turn.Asides = append(turn.Asides, workAside{Origin: origin, Text: clip(cleanPrompt(text), maxPromptChars), At: entry.Timestamp})
	changed[i] = true
}

var (
	systemReminder = regexp.MustCompile(`(?s)<system-reminder>.*?</system-reminder>`)
	htmlComment    = regexp.MustCompile(`(?s)<!--.*?-->`)
	imageSource    = regexp.MustCompile(`\[Image: source: [^\]]*\]`)
	taskSummary    = regexp.MustCompile(`(?s)<summary>(.*?)</summary>`)
)

// promptOf says what started a turn, and the prompt as a person would want to read it.
func promptOf(entry claudeEntry, text string) (string, string) {
	switch {
	case entry.IsCompactSummary:
		return "compact", "The conversation was summarised to go on."
	case entry.TurnOrigin == "task_notification" || strings.HasPrefix(strings.TrimSpace(text), "<task-notification>"):
		summary := "A background task finished."
		if m := taskSummary.FindStringSubmatch(text); m != nil {
			summary = strings.TrimSpace(m[1])
		}
		return "task", clip(summary, maxPromptChars)
	case entry.TurnOrigin == "peer":
		origin, prompt := peerPrompt(text)
		return origin, clip(cleanPrompt(prompt), maxPromptChars)
	case entry.TurnOrigin == "human" || entry.TurnOrigin == "":
		return "human", clip(cleanPrompt(text), maxPromptChars)
	}
	return "other", clip(cleanPrompt(text), maxPromptChars)
}

// peerPrompt is another session's message without the wrapping Claude Code puts around it; Crewmark's heartbeat is
// told apart.
func peerPrompt(text string) (string, string) {
	text = strings.TrimSpace(text)
	text = strings.TrimPrefix(text, "Another Claude session sent a message:")
	if cut := strings.Index(text, "\n\nThis came from another Claude session"); cut >= 0 {
		text = text[:cut]
	}
	text = strings.TrimSpace(text)
	if strings.HasPrefix(text, "[Crewmark heartbeat]") {
		return "heartbeat", strings.TrimSpace(strings.TrimPrefix(text, "[Crewmark heartbeat]"))
	}
	return "peer", text
}

func cleanPrompt(text string) string {
	text = systemReminder.ReplaceAllString(text, "")
	text = htmlComment.ReplaceAllString(text, "")
	text = imageSource.ReplaceAllString(text, "[image]")
	return strings.TrimSpace(text)
}

// blockText is a tool result's or a queued message's text: a string, or blocks with text in them.
func blockText(raw json.RawMessage) string {
	var text string
	if json.Unmarshal(raw, &text) == nil {
		return text
	}
	var blocks []contentBlock
	if json.Unmarshal(raw, &blocks) != nil {
		return ""
	}
	var parts []string
	for _, block := range blocks {
		switch block.Type {
		case "text":
			parts = append(parts, block.Text)
		case "image":
			parts = append(parts, "[image]")
		}
	}
	return strings.Join(parts, "\n")
}

// toolSummary says in a line what a tool call did: the command's description, the file, the search.
func toolSummary(name string, input json.RawMessage) string {
	var in map[string]any
	_ = json.Unmarshal(input, &in)
	str := func(key string) string {
		s, _ := in[key].(string)
		return s
	}
	home, _ := os.UserHomeDir()
	path := func(key string) string {
		p := str(key)
		if home != "" && strings.HasPrefix(p, home+"/") {
			p = "~" + p[len(home):]
		}
		return p
	}
	var summary string
	switch name {
	case "Bash":
		summary = str("description")
		if summary == "" {
			summary = str("command")
		}
	case "Read", "Write", "Edit", "MultiEdit", "NotebookEdit":
		summary = path("file_path")
		if summary == "" {
			summary = path("notebook_path")
		}
	case "Grep", "Glob":
		summary = str("pattern")
		if p := path("path"); p != "" {
			summary += " in " + p
		}
	case "WebFetch":
		summary = str("url")
	case "WebSearch", "ToolSearch":
		summary = str("query")
	case "Agent", "Task":
		summary = str("description")
	case "Skill":
		summary = str("skill")
	case "SendUserFile":
		var names []string
		files, _ := in["files"].([]any)
		for _, f := range files {
			if s, ok := f.(string); ok {
				names = append(names, filepath.Base(s))
			}
		}
		summary = strings.Join(names, ", ")
	}
	if summary == "" && len(in) > 0 {
		compact, _ := json.Marshal(in)
		summary = string(compact)
	}
	return oneLine(summary, maxStepChars)
}

// clip shortens text to at most n characters, ending with an ellipsis when it cut.
func clip(text string, n int) string {
	if utf8.RuneCountInString(text) <= n {
		return text
	}
	runes := []rune(text)
	return string(runes[:n-1]) + "…"
}

// page is the turns the web is sent: the last n, or with before > 0 the last n before that turn. more says whether
// there are earlier ones.
func (t *transcript) page(before, n int) (page []*workTurn, more bool) {
	end := len(t.turns)
	if before > 0 {
		end = min(end, before)
	}
	start := max(0, end-n)
	return t.turns[start:end], start > 0
}

func (t *transcript) String() string {
	return fmt.Sprintf("%s (%d turns)", t.path, len(t.turns))
}
