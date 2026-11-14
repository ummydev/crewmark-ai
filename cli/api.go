package main

// The agent API (/api/agent/*) the CLI talks to. These types mirror src/lib/agent-api.ts in the web app, and the
// labels below mirror src/lib/types.ts: change them together.

type named struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type organization struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}

type agentEmployee struct {
	ID          string     `json:"id"`
	Name        string     `json:"name"`
	Role        string     `json:"role"`
	Description string     `json:"description"`
	KPI         string     `json:"kpi"`
	Status      string     `json:"status"`
	Runtime     *string    `json:"runtime"`
	Projects    []named    `json:"projects"`
	Heartbeat   *heartbeat `json:"heartbeat"`
}

// heartbeat is when the daemon wakes the employee's agent up: every IntervalMinutes between Start and End ("HH:MM")
// in TimeZone, with Prompt (the server fills in the default).
type heartbeat struct {
	Enabled         bool   `json:"enabled"`
	Start           string `json:"start"`
	End             string `json:"end"`
	TimeZone        string `json:"timeZone"`
	WeekdaysOnly    bool   `json:"weekdaysOnly"`
	IntervalMinutes int    `json:"intervalMinutes"`
	Prompt          string `json:"prompt"`
	// The language of whoever set it up, which picked the default prompt.
	Language string `json:"language,omitempty"`
}

type agentEvent struct {
	ID        int64  `json:"id"`
	Type      string `json:"type"`
	Message   string `json:"message"`
	CreatedAt string `json:"createdAt"`
	// A person is waiting on it: it goes to the agent even while it's working.
	Urgent bool `json:"urgent"`
}

type heartbeatResponse struct {
	Heartbeat *heartbeat `json:"heartbeat"`
}

type eventsResponse struct {
	Events []agentEvent `json:"events"`
	Cursor int64        `json:"cursor"`
}

type creator struct {
	Kind string `json:"kind"`
	Name string `json:"name"`
}

// assignee is who works on an issue: a digital employee ("employee") or a person ("user").
type assignee struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Kind string `json:"kind"`
}

type agentIssue struct {
	ID          string    `json:"id"`
	Key         string    `json:"key"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Status      string    `json:"status"`
	Priority    string    `json:"priority"`
	Assignee    *assignee `json:"assignee"`
	Project     *named    `json:"project"`
	CreatedBy   *creator  `json:"createdBy"`
	CreatedAt   string    `json:"createdAt"`
	URL         string    `json:"url"`
	// When the issue repeats; nil if it doesn't.
	Repeat *issueRepeat `json:"repeat"`
}

// issueRepeat is an issue's schedule: in words, e.g. "every 2 days at 10:00", its time zone, and when it next comes
// round (RFC 3339). Then Crewmark moves the issue back to Todo if it's done and tells its employee.
type issueRepeat struct {
	Schedule string  `json:"schedule"`
	TimeZone string  `json:"timeZone"`
	Next     *string `json:"next"`
}

// activity is one entry in an issue's Activity: a comment, a change to its status, priority, assignee, project or
// repeat, with the values before and after as the dashboard shows them, or Crewmark's own entry ("recurred") when
// the issue's schedule came round.
type activity struct {
	Kind      string   `json:"kind"`
	By        *creator `json:"by"`
	Body      string   `json:"body"`
	From      *string  `json:"from"`
	To        *string  `json:"to"`
	CreatedAt string   `json:"createdAt"`
}

type issueResponse struct {
	Issue    agentIssue `json:"issue"`
	Activity []activity `json:"activity"`
}

type setupRequest struct {
	Token     string  `json:"token"`
	Runtime   *string `json:"runtime"`
	SessionID *string `json:"sessionId"`
	Hostname  string  `json:"hostname"`
	Platform  string  `json:"platform"`
	Workdir   string  `json:"workdir"`
}

type setupResponse struct {
	APIKey       string        `json:"apiKey"`
	Employee     agentEmployee `json:"employee"`
	Organization organization  `json:"organization"`
}

type meResponse struct {
	Employee     agentEmployee `json:"employee"`
	Organization organization  `json:"organization"`
	// The conversation Crewmark has on record as the employee, or nil until one is linked.
	Session *detectedSession `json:"session"`
	Issues  []agentIssue     `json:"issues"`
	// The organization's members, who issues can be assigned to as well.
	People []member `json:"people"`
	URL    string   `json:"url"`
}

// member is a person in the organization.
type member struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type sessionRequest struct {
	Runtime   string `json:"runtime"`
	SessionID string `json:"sessionId"`
	Workdir   string `json:"workdir,omitempty"`
}

type label struct{ value, text string }

var issueStatuses = []label{
	{"backlog", "Backlog"},
	{"todo", "Todo"},
	{"in_progress", "In Progress"},
	{"in_review", "In Review"},
	{"done", "Done"},
}

var issuePriorities = []label{
	{"urgent", "Urgent"},
	{"high", "High"},
	{"medium", "Medium"},
	{"low", "Low"},
	{"none", "No priority"},
}

var employeeStatuses = []label{{"working", "Working"}, {"idle", "Idle"}, {"paused", "Paused"}}

var runtimes = []label{{"claude-code", "Claude Code"}, {"codex", "Codex"}, {"other", "Other"}}

// labelOf is the label for a value, or the value itself when it isn't in the list.
func labelOf(labels []label, value string) string {
	for _, l := range labels {
		if l.value == value {
			return l.text
		}
	}
	return value
}

func values(labels []label) []string {
	out := make([]string, len(labels))
	for i, l := range labels {
		out[i] = l.value
	}
	return out
}

// The CLI API (/api/cli/*), used with the person's key after `crewmark login`. Mirrors src/lib/cli-api.ts.

type cliLoginStart struct {
	Code            string `json:"code"`
	URL             string `json:"url"`
	Secret          string `json:"secret"`
	ExpiresAt       string `json:"expiresAt"`
	IntervalSeconds int    `json:"intervalSeconds"`
}

type cliLoginPoll struct {
	State        string       `json:"state"`
	APIKey       string       `json:"apiKey"`
	User         person       `json:"user"`
	Organization organization `json:"organization"`
}

type cliWhoAmI struct {
	User         person       `json:"user"`
	Organization organization `json:"organization"`
	URL          string       `json:"url"`
}

type cliProject struct {
	ID         string  `json:"id"`
	Name       string  `json:"name"`
	Emoji      string  `json:"emoji"`
	Employees  []named `json:"employees"`
	OpenIssues int     `json:"openIssues"`
	URL        string  `json:"url"`
}

type cliEmployee struct {
	agentEmployee
	URL string `json:"url"`
}
