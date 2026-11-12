// crewmark: the command an AI agent (Claude Code, Codex) uses to work on Crewmark as one of its employees. It talks
// to the agent API described in src/lib/agent-api.ts and is built into small static binaries by cli/build.ts.
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/url"
	"os"
	"runtime"
	"strings"
	"time"
)

// version is bumped for every release of the binaries.
var version = "0.5.1"

const defaultURL = "https://crewmark.ai"

func help() string {
	return `crewmark ` + version + `: work on Crewmark as an AI employee

Usage: crewmark <command> [options]

Getting started
  setup <token> [--url <server>]  Connect to an employee with the token from a Crewmark setup link. It
                                  tries to tell which conversation it runs in and links it to the
                                  employee; if it can't, run link-session
  me                              Your role, responsibilities, KPIs, projects and open issues
  link-session --runtime <claude-code|codex|other> --session <this conversation's session id>
                                  Link this conversation to the employee by hand, when setup couldn't

Issues
  issues [--all] [--status <s,...>] [--project <id>] [--assignee me|none|<who>]
                                  List issues; without options, your open ones
  issues show <KEY>               One issue in full with its comments and changes, e.g. issues show MC-7
  issues comment <KEY> <text>     Comment on an issue: report progress, ask or answer a question. Markdown
                                  works; pass - instead of the text to read it from stdin
  issues create --title <text> [--description <text>] [--status <s>] [--priority <p>]
                [--project <id>] [--assignee me|<who>]
                                  Filed as you, the employee; from a conversation that isn't an
                                  employee, as the person logged in with crewmark login
  issues update <KEY> [--title <text>] [--description <text>] [--status <s>] [--priority <p>]
                [--project <id>|none] [--assignee me|<who>|none]
                                  <who> is an employee or a person (a member): id, name or email.
                                  A first name does when it's unique, e.g. --assignee Alex

Your organization
  projects                        Projects and their ids
  employees                       Employees (your colleagues) and their ids

Acting for the person (after crewmark login)
  login                           Let this computer act for the person on Crewmark: shows a link where
                                  they click Allow. In an agent, run login --wait after showing it
  login --wait | --status         Wait for the Allow and save the login | who the CLI acts for
  logout                          Revoke this computer's login (employees set up here keep working)
  projects show|create|update     projects create --name <name> [--emoji <emoji>];
                                  projects show|update <id or name> [--name <name>] [--emoji <emoji>]
  employees create --name <name> [--role <role>] [--description <text>] [--kpi <text>]
                [--projects <id or name,...>] [--connect]
                                  --connect makes this conversation the new employee
  employees show|update <id or name> [--name] [--role] [--description] [--kpi] [--status]
                [--projects <id or name,...>]   (--projects replaces the list)
  employees connect <id or name>  Make this conversation an existing employee, like a setup link

Background
  daemon [status]                 Whether the daemon runs, and each employee's heartbeat and waiting messages.
                                  The daemon passes Crewmark messages (e.g. an issue assigned to you) and
                                  heartbeats on to your conversation
  daemon install|uninstall        Start it (and on every login), or stop it for good. Only with the
                                  person's agreement: it keeps running in the background
  daemon run                      Run it in the foreground instead

Options for every command
  --json                          Print Crewmark's answer as JSON
  --employee <id>                 Which employee to act as, if several are set up on this computer

Statuses:   ` + strings.Join(values(issueStatuses), ", ") + `
Priorities: ` + strings.Join(values(issuePriorities), ", ") + `
The CLI keeps its keys and the employees' notes in ~/.crewmark.`
}

func main() {
	if err := run(os.Args[1:]); err != nil {
		fmt.Fprintf(os.Stderr, "crewmark: %v\n", err)
		os.Exit(1)
	}
}

func run(args []string) error {
	command, rest := "", []string{}
	if len(args) > 0 {
		command, rest = args[0], args[1:]
	}
	for _, arg := range rest {
		if arg == "--help" || arg == "-h" {
			fmt.Println(help())
			return nil
		}
	}
	switch command {
	case "", "help", "--help", "-h":
		fmt.Println(help())
		return nil
	case "version", "--version", "-v":
		fmt.Println(version)
		return nil
	case "setup":
		return setup(rest)
	case "login":
		return login(rest)
	case "logout":
		return logout(rest)
	case "link-session":
		return linkSession(rest)
	case "me":
		return me(rest)
	case "issues":
		return issues(rest)
	case "projects":
		return projects(rest)
	case "employees":
		return employees(rest)
	case "daemon":
		return daemon(rest)
	default:
		return fail("Unknown command %q. Run `crewmark help` for usage.", command)
	}
}

// --- Which employee ---------------------------------------------------------------------------------------------

// currentEmployee is the employee to act as: --employee (id or name), else CREWMARK_EMPLOYEE, else the one whose
// conversation this is (which tells apart employees working in the same folder), else the one set up in this
// directory, else the only one set up on this computer.
func currentEmployee(flag string) (string, employeeProfile, error) {
	profiles, err := readProfiles()
	if err != nil {
		return "", employeeProfile{}, err
	}
	if len(profiles) == 0 {
		return "", employeeProfile{}, fail("No employee is set up on this computer yet. Run `crewmark setup <token>` " +
			"with the token from a Crewmark setup link (on the employee's page in Crewmark).")
	}
	var list []string
	for id, p := range profiles {
		list = append(list, fmt.Sprintf("%s (%s)", p.Name, id))
	}
	wanted := flag
	if wanted == "" {
		wanted = os.Getenv("CREWMARK_EMPLOYEE")
	}
	if wanted != "" {
		for id, p := range profiles {
			if id == wanted || strings.EqualFold(p.Name, wanted) {
				return id, p, nil
			}
		}
		return "", employeeProfile{}, fail("No employee %q is set up on this computer. Set up here: %s.",
			wanted, strings.Join(list, ", "))
	}
	if session := sessionFromEnvironment(); session != nil {
		for id, p := range profiles {
			if p.SessionID != nil && *p.SessionID == session.SessionID {
				return id, p, nil
			}
		}
	}
	if cwd, err := os.Getwd(); err == nil {
		var matches []string
		for id, p := range profiles {
			if p.Workdir != "" && (cwd == p.Workdir || strings.HasPrefix(cwd, p.Workdir+string(os.PathSeparator))) {
				matches = append(matches, id)
			}
		}
		if len(matches) == 1 {
			return matches[0], profiles[matches[0]], nil
		}
	}
	if len(profiles) == 1 {
		for id, p := range profiles {
			return id, p, nil
		}
	}
	return "", employeeProfile{}, fail("Several employees are set up on this computer: %s. Pass --employee <id>.",
		strings.Join(list, ", "))
}

// issueAuthor is who files a new issue: the employee this conversation is, or the one --employee or
// CREWMARK_EMPLOYEE names; from any other conversation, the person logged in with `crewmark login`, so the issue
// isn't put down to an employee that had nothing to do with it. When the runtime doesn't say which conversation this
// is, it guesses the employee like every other command, and only falls back to the person when it can't.
func issueAuthor(flag string) (*employeeProfile, *accountProfile, error) {
	if flag != "" || os.Getenv("CREWMARK_EMPLOYEE") != "" {
		_, profile, err := currentEmployee(flag)
		return &profile, nil, err
	}
	profiles, err := readProfiles()
	if err != nil {
		return nil, nil, err
	}
	if session := sessionFromEnvironment(); session != nil {
		for _, profile := range profiles {
			if profile.SessionID != nil && *profile.SessionID == session.SessionID {
				return &profile, nil, nil
			}
		}
	} else if _, profile, err := currentEmployee(""); err == nil {
		return &profile, nil, nil
	}

	stored, err := readCredentials()
	if err != nil {
		return nil, nil, err
	}
	if stored.Account == nil {
		hint := ""
		if len(profiles) > 0 {
			hint = " To file it as one of the employees set up here instead, add --employee <id>."
		}
		return nil, nil, fail("Not filed: this conversation isn't an employee, and no one is logged in to Crewmark on "+
			"this computer, so the issue would have no author. Ask the user to log in: run `crewmark login`, show them "+
			"the link it prints so they can click Allow, then run `crewmark login --wait` and this command again.%s", hint)
	}
	return nil, stored.Account, nil
}

func api(profile employeeProfile, method, path string, body, out any) error {
	return request(profile.URL, path, profile.APIKey, method, body, out)
}

func printJSON(data any) error {
	encoded, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return err
	}
	fmt.Println(string(encoded))
	return nil
}

// --- Formatting ------------------------------------------------------------------------------------------------

func issueLine(issue agentIssue) string {
	extras := []string{"unassigned"}
	if issue.Assignee != nil {
		extras[0] = issue.Assignee.Name
	}
	if issue.Project != nil {
		extras = append(extras, issue.Project.Name)
	}
	return fmt.Sprintf("%-7s %-12s %-12s %s  (%s)", issue.Key, labelOf(issueStatuses, issue.Status),
		labelOf(issuePriorities, issue.Priority), issue.Title, strings.Join(extras, " · "))
}

func printIssues(issues []agentIssue, empty, indent string) {
	if len(issues) == 0 {
		fmt.Println(indent + empty)
		return
	}
	for _, issue := range issues {
		fmt.Println(indent + issueLine(issue))
	}
}

func printIssue(issue agentIssue) {
	by := "unknown"
	if issue.CreatedBy != nil {
		by = fmt.Sprintf("%s (%s)", issue.CreatedBy.Name, issue.CreatedBy.Kind)
	}
	assignee, project := "none", "none"
	if issue.Assignee != nil {
		assignee = issue.Assignee.Name
	}
	if issue.Project != nil {
		project = issue.Project.Name
	}
	fmt.Printf("%s  %s\n", issue.Key, issue.Title)
	fmt.Printf("Status: %s · Priority: %s · Assignee: %s · Project: %s\n", labelOf(issueStatuses, issue.Status),
		labelOf(issuePriorities, issue.Priority), assignee, project)
	day := issue.CreatedAt
	if len(day) > 10 {
		day = day[:10]
	}
	fmt.Printf("Filed by %s on %s · %s\n", by, day, issue.URL)
	if description := strings.TrimSpace(issue.Description); description != "" {
		fmt.Printf("\n%s\n", description)
	}
}

// printActivity prints an issue's comments and changes, oldest first, in local time.
func printActivity(key string, entries []activity) {
	fmt.Println("\nActivity")
	for _, entry := range entries {
		who := "Someone"
		if entry.By != nil {
			who = entry.By.Name
		}
		when := entry.CreatedAt
		if t, err := time.Parse(time.RFC3339Nano, entry.CreatedAt); err == nil {
			when = t.Local().Format("2006-01-02 15:04")
		}
		if entry.Kind == "comment" {
			fmt.Printf("\n  %s  %s:\n    %s\n", when, who, strings.ReplaceAll(strings.TrimSpace(entry.Body), "\n", "\n    "))
		} else {
			fmt.Printf("\n  %s  %s changed %s: %s → %s\n", when, who, entry.Kind, orNone(entry.From), orNone(entry.To))
		}
	}
	if len(entries) == 0 {
		fmt.Println("  No comments yet.")
	}
	fmt.Printf("\nComment with: crewmark issues comment %s \"<text>\"\n", key)
}

func orNone(value *string) string {
	if value == nil {
		return "none"
	}
	return *value
}

func section(title, body string) {
	body = strings.TrimSpace(body)
	if body == "" {
		body = "(not set yet)"
	}
	fmt.Printf("\n%s\n  %s\n", title, strings.ReplaceAll(body, "\n", "\n  "))
}

// --- Commands --------------------------------------------------------------------------------------------------

func setup(args []string) error {
	p, err := parseArgs(args, []string{"url"}, nil)
	if err != nil {
		return err
	}
	token := p.positional(0)
	if token == "" {
		return fail("Usage: crewmark setup <token>. The token is in the Crewmark setup link.")
	}
	baseURL := p.strings["url"]
	if baseURL == "" {
		baseURL = os.Getenv("CREWMARK_URL")
	}
	if baseURL == "" {
		baseURL = defaultURL
	}
	baseURL = strings.TrimRight(baseURL, "/")
	body, session := connectRequest()
	body.Token = token
	var res setupResponse
	if err := request(baseURL, "/api/agent/setup", "", "POST", body, &res); err != nil {
		return err
	}
	return connected(baseURL, res, body, session, p.bools["json"])
}

// connectRequest describes this conversation and computer, for making it an employee (setup, employees connect).
func connectRequest() (setupRequest, *detectedSession) {
	session := sessionFromEnvironment()
	hostname, _ := os.Hostname()
	workdir, _ := os.Getwd()
	body := setupRequest{Hostname: hostname, Platform: runtime.GOOS + "-" + runtime.GOARCH, Workdir: workdir}
	if session != nil {
		body.Runtime, body.SessionID = &session.Runtime, &session.SessionID
	}
	return body, session
}

// connected saves the employee's API key once this conversation became the employee, starts the daemon and tells the
// agent whether the conversation is linked.
func connected(baseURL string, res setupResponse, body setupRequest, session *detectedSession, asJSON bool) error {
	err := saveProfile(res.Employee.ID, employeeProfile{
		Name:         res.Employee.Name,
		Organization: res.Organization,
		URL:          baseURL,
		APIKey:       res.APIKey,
		Runtime:      body.Runtime,
		SessionID:    body.SessionID,
		Workdir:      body.Workdir,
		ConnectedAt:  time.Now().UTC().Format(time.RFC3339),
	})
	if err != nil {
		return fail("Couldn't save the API key in %s: %v", shortPath(home), err)
	}
	notes := employeeNotes(res.Employee.ID, res.Employee.Name)
	if asJSON {
		return printJSON(map[string]any{
			"employee": res.Employee, "organization": res.Organization, "session": session, "notes": notes,
		})
	}

	role := ""
	if res.Employee.Role != "" {
		role = ", " + res.Employee.Role
	}
	fmt.Printf("Connected as %s%s at %s. The API key is saved in %s.\n", res.Employee.Name, role,
		res.Organization.Name, shortPath(home))
	fmt.Printf("Your employee id is %s. If crewmark ever asks which employee you are, add --employee %s.\n",
		res.Employee.ID, res.Employee.ID)
	fmt.Printf("Notes that outlast this conversation go in %s.\n\n", shortPath(notes))
	daemonNote()
	if session == nil {
		notLinked(res.Employee.ID, res.Employee.Name)
		return nil
	}
	printLinked(session, res.Employee.Name)
	fmt.Println("Nothing else to do for this step. Next, run `crewmark me` to see your role, KPIs and issues.")
	return nil
}

// daemonNote says whether the daemon, which brings Crewmark's messages and heartbeats to the conversation, runs here.
// Setup never installs it: that's the person's call (the setup instructions have the agent ask them).
func daemonNote() {
	if running, _ := serviceStatus(); running {
		fmt.Print("The crewmark daemon runs on this computer and passes Crewmark's messages and heartbeats on to " +
			"this conversation.\n\n")
		return
	}
	if serviceInstalled() {
		fmt.Print("The crewmark daemon is set up on this computer but isn't running, so Crewmark's messages and " +
			"heartbeats can't reach this conversation. Tell the user, and once they agree, run `crewmark daemon install` " +
			"to start it again.\n\n")
		return
	}
	fmt.Print("The crewmark daemon isn't set up on this computer, so Crewmark's messages and heartbeats can't reach " +
		"this conversation yet. Ask the user before running `crewmark daemon install` (see the setup instructions).\n\n")
}

func printLinked(session *detectedSession, name string) {
	fmt.Printf("Linked: this conversation (%s %s) is now %s's. Resume it later to talk to %s.\n",
		labelOf(runtimes, session.Runtime), session.SessionID, name, name)
}

// notLinked tells the agent how to link its conversation when the CLI couldn't tell which one it runs in.
func notLinked(employeeID, name string) {
	fmt.Printf("Not linked yet: the CLI couldn't tell which conversation it runs in. Link this conversation to %s "+
		"with:\n\n"+
		"  crewmark link-session --employee %s --runtime <claude-code|codex|other> --session <this conversation's session id>\n",
		name, employeeID)
}

// TODO: check a --session id before linking it. The marker search from commit 52b662a could do it: link-session
// prints a random marker, then looks for the transcript that contains it; only the conversation that ran the command
// has it, so a mismatch with --session means the agent gave the wrong id.
func linkSession(args []string) error {
	p, err := parseArgs(args, []string{"session", "runtime"}, nil)
	if err != nil {
		return err
	}
	employeeID, profile, err := currentEmployee(p.strings["employee"])
	if err != nil {
		return err
	}

	session := sessionFromEnvironment()
	if p.has("session") {
		runtimeName := p.strings["runtime"]
		if labelOf(runtimes, runtimeName) == runtimeName {
			return fail("Not linked: pass --runtime %s along with --session.", strings.Join(values(runtimes), " or --runtime "))
		}
		session = &detectedSession{runtimeName, strings.TrimSpace(p.strings["session"])}
	}
	if session == nil || session.SessionID == "" {
		notLinked(employeeID, profile.Name)
		return fail("Not linked: no conversation id given.")
	}

	workdir, _ := os.Getwd()
	err = api(profile, "POST", "/api/agent/session",
		sessionRequest{Runtime: session.Runtime, SessionID: session.SessionID, Workdir: workdir}, nil)
	if err != nil {
		return fail("Not linked: %v", err)
	}
	profile.Runtime, profile.SessionID, profile.Workdir = &session.Runtime, &session.SessionID, workdir
	if err := saveProfile(employeeID, profile); err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(map[string]any{
			"linked": true, "employeeId": employeeID, "runtime": session.Runtime, "sessionId": session.SessionID,
		})
	}
	printLinked(session, profile.Name)
	return nil
}

func me(args []string) error {
	p, err := parseArgs(args, nil, nil)
	if err != nil {
		return err
	}
	employeeID, profile, err := currentEmployee(p.strings["employee"])
	if err != nil {
		return err
	}
	var data meResponse
	if err := api(profile, "GET", "/api/agent/me", nil, &data); err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(data)
	}

	employee := data.Employee
	role := ""
	if employee.Role != "" {
		role = ", " + employee.Role
	}
	fmt.Printf("You are %s%s at %s, on Crewmark. Employee id: %s.\n", employee.Name, role, data.Organization.Name,
		employee.ID)
	fmt.Printf("Status: %s · %s\n", labelOf(employeeStatuses, employee.Status), data.URL)
	fmt.Printf("Heartbeat: %s\n", describeHeartbeat(employee.Heartbeat))
	if data.Session != nil {
		fmt.Printf("Conversation: %s %s (linked: resume it to talk to %s)\n", labelOf(runtimes, data.Session.Runtime),
			data.Session.SessionID, employee.Name)
	} else {
		fmt.Println("Conversation: not linked yet. Run `crewmark link-session --runtime <claude-code|codex|other> " +
			"--session <conversation id>` in the conversation that is you.")
	}
	section("Responsibilities", employee.Description)
	section("KPIs", employee.KPI)
	var projects []string
	for _, project := range employee.Projects {
		projects = append(projects, fmt.Sprintf("%s (%s)", project.Name, project.ID))
	}
	section("Projects", strings.Join(projects, "\n"))
	var people []string
	for _, p := range data.People {
		people = append(people, fmt.Sprintf("%s <%s>", p.Name, p.Email))
	}
	section("People (you can assign them issues, e.g. --assignee \"<name>\")", strings.Join(people, "\n"))
	fmt.Printf("\nOpen issues assigned to you (%d)\n", len(data.Issues))
	printIssues(data.Issues, "None. Plan your next piece of work with `crewmark issues create`.", "  ")
	fmt.Printf("\nYour notes: %s\n", shortPath(employeeNotes(employeeID, employee.Name)))
	return nil
}

var issueOptions = []string{"title", "description", "status", "priority", "project", "assignee"}

// issueBody is the fields given on the command line; "none" clears a project or assignee.
func issueBody(p *parsed) map[string]any {
	body := map[string]any{}
	for _, field := range []string{"title", "description", "status", "priority"} {
		if p.has(field) {
			body[field] = p.strings[field]
		}
	}
	for option, field := range map[string]string{"project": "projectId", "assignee": "assigneeId"} {
		if p.has(option) {
			if p.strings[option] == "none" {
				body[field] = nil
			} else {
				body[field] = p.strings[option]
			}
		}
	}
	return body
}

func issues(args []string) error {
	sub, rest := "", args
	if len(args) > 0 {
		sub = args[0]
	}
	switch sub {
	case "show":
		p, err := parseArgs(args[1:], nil, nil)
		if err != nil {
			return err
		}
		if p.positional(0) == "" {
			return fail("Usage: crewmark issues show <KEY>, e.g. MC-7")
		}
		_, profile, err := currentEmployee(p.strings["employee"])
		if err != nil {
			return err
		}
		var res issueResponse
		if err := api(profile, "GET", "/api/agent/issues/"+url.PathEscape(p.positional(0)), nil, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			// The issue's fields as before, plus its Activity.
			return printJSON(struct {
				agentIssue
				Activity []activity `json:"activity"`
			}{res.Issue, res.Activity})
		}
		printIssue(res.Issue)
		printActivity(res.Issue.Key, res.Activity)
		return nil

	case "comment":
		p, err := parseArgs(args[1:], nil, nil)
		if err != nil {
			return err
		}
		key, text := p.positional(0), ""
		if len(p.positionals) > 1 {
			text = strings.Join(p.positionals[1:], " ")
		}
		if text == "-" {
			read, err := io.ReadAll(os.Stdin)
			if err != nil {
				return err
			}
			text = string(read)
		}
		if key == "" || strings.TrimSpace(text) == "" {
			return fail("Usage: crewmark issues comment <KEY> \"<text>\", or - instead of the text to read it from stdin")
		}
		_, profile, err := currentEmployee(p.strings["employee"])
		if err != nil {
			return err
		}
		var res struct{ Comment activity }
		path := "/api/agent/issues/" + url.PathEscape(key) + "/comments"
		if err := api(profile, "POST", path, map[string]any{"body": text}, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res.Comment)
		}
		fmt.Printf("Commented on %s.\n", strings.ToUpper(key))
		return nil

	case "create":
		p, err := parseArgs(args[1:], issueOptions, nil)
		if err != nil {
			return err
		}
		if !p.has("title") {
			return fail("Usage: crewmark issues create --title <text> [options]")
		}
		profile, account, err := issueAuthor(p.strings["employee"])
		if err != nil {
			return err
		}
		var res struct{ Issue agentIssue }
		if account != nil {
			err = accountAPI(account, "POST", "/api/cli/issues", issueBody(p), &res)
		} else {
			err = api(*profile, "POST", "/api/agent/issues", issueBody(p), &res)
		}
		if err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res.Issue)
		}
		fmt.Printf("Created %s: %s\n%s\n", res.Issue.Key, res.Issue.Title, res.Issue.URL)
		if account != nil {
			fmt.Printf("Filed as %s, who is logged in here: this conversation isn't one of the employees set up on "+
				"this computer.\n", account.User.Name)
		}
		return nil

	case "update":
		p, err := parseArgs(args[1:], issueOptions, nil)
		if err != nil {
			return err
		}
		body := issueBody(p)
		if p.positional(0) == "" || len(body) == 0 {
			return fail("Usage: crewmark issues update <KEY> --status <s> (or --title, --priority, …)")
		}
		_, profile, err := currentEmployee(p.strings["employee"])
		if err != nil {
			return err
		}
		var res struct{ Issue agentIssue }
		if err := api(profile, "PATCH", "/api/agent/issues/"+url.PathEscape(p.positional(0)), body, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res.Issue)
		}
		fmt.Println("Updated " + issueLine(res.Issue))
		return nil

	case "list":
		rest = args[1:]
	}

	p, err := parseArgs(rest, []string{"status", "project", "assignee"}, []string{"all"})
	if err != nil {
		return err
	}
	if len(p.positionals) > 0 {
		return fail("Unknown issues command %q. Run `crewmark help` for usage.", p.positionals[0])
	}
	_, profile, err := currentEmployee(p.strings["employee"])
	if err != nil {
		return err
	}
	filtered := p.bools["all"] || p.has("status") || p.has("project") || p.has("assignee")
	query := url.Values{}
	if !filtered {
		query.Set("assignee", "me")
		query.Set("open", "true")
	}
	for _, option := range []string{"assignee", "status", "project"} {
		if p.has(option) {
			query.Set(option, p.strings[option])
		}
	}
	var res struct{ Issues []agentIssue }
	if err := api(profile, "GET", "/api/agent/issues?"+query.Encode(), nil, &res); err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(res.Issues)
	}
	empty := "No open issues are assigned to you."
	if filtered {
		empty = "No issues match."
	}
	printIssues(res.Issues, empty, "")
	return nil
}
