package main

import (
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"time"
)

// Acting for the person rather than as an employee: `crewmark login` lets this computer act for them in one
// organization (they allow it on a page the CLI links to), so an agent can make projects and employees, turn its own
// conversation into an employee, and file issues as the person, without anyone opening Crewmark. The key is kept in
// credentials.json as "account".

// pendingLogin is a login waiting to be allowed, kept between `crewmark login` and `crewmark login --wait`.
type pendingLogin struct {
	URL       string `json:"url"`
	Code      string `json:"code"`
	Page      string `json:"page"`
	Secret    string `json:"secret"`
	ExpiresAt string `json:"expiresAt"`
	Interval  int    `json:"interval"`
}

func pendingLoginPath() string { return filepath.Join(home, "login.json") }

// interactive is true when a person runs the CLI in a terminal; an agent's commands have no terminal, and an agent
// only sees the output once the command ends, so it must get the link before anything waits.
func interactive() bool {
	info, err := os.Stdout.Stat()
	return err == nil && info.Mode()&os.ModeCharDevice != 0
}

func login(args []string) error {
	p, err := parseArgs(args, []string{"url"}, []string{"wait", "status"})
	if err != nil {
		return err
	}
	if p.bools["status"] {
		return loginStatus(p.bools["json"])
	}
	if p.bools["wait"] {
		return waitForLogin()
	}

	baseURL := p.strings["url"]
	if baseURL == "" {
		baseURL = os.Getenv("CREWMARK_URL")
	}
	if baseURL == "" {
		baseURL = defaultURL
	}
	baseURL = strings.TrimRight(baseURL, "/")
	hostname, _ := os.Hostname()
	var start cliLoginStart
	err = request(baseURL, "/api/cli/login", "", "POST",
		map[string]string{"hostname": hostname, "platform": runtime.GOOS + "-" + runtime.GOARCH}, &start)
	if err != nil {
		return err
	}
	pending := pendingLogin{baseURL, start.Code, start.URL, start.Secret, start.ExpiresAt, start.IntervalSeconds}
	if err := writePrivate(pendingLoginPath(), pending); err != nil {
		return err
	}
	fmt.Printf("To let this computer act for you on Crewmark, open this link, check that it shows the code %s, "+
		"and click Allow:\n\n  %s\n\n", start.Code, start.URL)
	if !interactive() {
		fmt.Println("Then run `crewmark login --wait`, which waits until it's allowed (up to ten minutes).")
		return nil
	}
	return waitForLogin()
}

// waitForLogin polls until the person allows or denies the login, then saves the key.
func waitForLogin() error {
	var pending pendingLogin
	if err := readJSON(pendingLoginPath(), &pending); err != nil || pending.Secret == "" {
		return fail("No login is waiting. Run `crewmark login` first.")
	}
	interval := time.Duration(max(pending.Interval, 1)) * time.Second
	deadline, err := time.Parse(time.RFC3339, pending.ExpiresAt)
	if err != nil {
		deadline = time.Now().Add(10 * time.Minute)
	}
	for {
		var res cliLoginPoll
		if err := request(pending.URL, "/api/cli/login/poll", "", "POST", map[string]string{"secret": pending.Secret}, &res); err != nil {
			return err
		}
		switch res.State {
		case "approved":
			_ = os.Remove(pendingLoginPath())
			account := &accountProfile{pending.URL, res.APIKey, res.User, res.Organization}
			if err := saveAccount(account); err != nil {
				return fail("Couldn't save the login in %s: %v", shortPath(home), err)
			}
			fmt.Printf("Logged in as %s for %s. Now you can, for example:\n"+
				"  crewmark projects create --name <name>\n"+
				"  crewmark employees create --name <name> --role <role> --projects <project> --connect\n"+
				"  crewmark employees connect <employee>   (make this conversation an existing employee)\n",
				res.User.Email, res.Organization.Name)
			return nil
		case "denied":
			_ = os.Remove(pendingLoginPath())
			return fail("The login was turned down.")
		case "expired":
			_ = os.Remove(pendingLoginPath())
			return fail("The login expired before it was allowed. Run `crewmark login` again.")
		}
		if time.Now().After(deadline) {
			_ = os.Remove(pendingLoginPath())
			return fail("The login expired before it was allowed. Run `crewmark login` again.")
		}
		time.Sleep(interval)
	}
}

func loginStatus(asJSON bool) error {
	account, err := currentAccount()
	if err != nil {
		return err
	}
	var who cliWhoAmI
	if err := request(account.URL, "/api/cli/me", account.APIKey, "GET", nil, &who); err != nil {
		return err
	}
	if asJSON {
		return printJSON(who)
	}
	fmt.Printf("Logged in as %s for %s (%s).\n", who.User.Email, who.Organization.Name, who.URL)
	return nil
}

func logout(args []string) error {
	if _, err := parseArgs(args, nil, nil); err != nil {
		return err
	}
	stored, err := readCredentials()
	if err != nil {
		return err
	}
	if stored.Account == nil {
		fmt.Println("Not logged in.")
		return nil
	}
	// Revoke the key on Crewmark too; forget it here even if Crewmark can't be reached.
	revokeErr := request(stored.Account.URL, "/api/cli/session", stored.Account.APIKey, "DELETE", nil, nil)
	if err := saveAccount(nil); err != nil {
		return err
	}
	if revokeErr != nil {
		fmt.Printf("Logged out here. Crewmark couldn't be told (%v); revoke the login on Crewmark if it matters.\n", revokeErr)
		return nil
	}
	fmt.Println("Logged out: this computer no longer acts for you on Crewmark. Employees set up here keep working.")
	return nil
}

// currentAccount is the person's login, for commands that need it.
func currentAccount() (*accountProfile, error) {
	stored, err := readCredentials()
	if err != nil {
		return nil, err
	}
	if stored.Account == nil {
		return nil, fail("This needs you logged in to Crewmark: run `crewmark login`, open the link it shows and " +
			"click Allow.")
	}
	return stored.Account, nil
}

func accountAPI(account *accountProfile, method, path string, body, out any) error {
	return request(account.URL, path, account.APIKey, method, body, out)
}

// splitList turns "a, b,c" into its items.
func splitList(value string) []string {
	var items []string
	for _, item := range strings.Split(value, ",") {
		if item = strings.TrimSpace(item); item != "" {
			items = append(items, item)
		}
	}
	return items
}

// --- Projects ---------------------------------------------------------------------------------------------------

func projects(args []string) error {
	sub := ""
	if len(args) > 0 && !strings.HasPrefix(args[0], "-") {
		sub, args = args[0], args[1:]
	}
	switch sub {
	case "", "list":
		return listProjects(args)
	case "show", "create", "update":
		return changeProject(sub, args)
	default:
		return fail("Unknown projects command %q: use show, create or update.", sub)
	}
}

func listProjects(args []string) error {
	p, err := parseArgs(args, nil, nil)
	if err != nil {
		return err
	}
	if stored, err := readCredentials(); err == nil && stored.Account != nil && p.strings["employee"] == "" {
		var res struct{ Projects []cliProject }
		if err := accountAPI(stored.Account, "GET", "/api/cli/projects", nil, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res.Projects)
		}
		if len(res.Projects) == 0 {
			fmt.Println("No projects yet. Make one with `crewmark projects create --name <name>`.")
		}
		for _, project := range res.Projects {
			fmt.Println(projectLine(project))
		}
		return nil
	}
	_, profile, err := currentEmployee(p.strings["employee"])
	if err != nil {
		return err
	}
	var res struct{ Projects []named }
	if err := api(profile, "GET", "/api/agent/projects", nil, &res); err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(res.Projects)
	}
	if len(res.Projects) == 0 {
		fmt.Println("No projects yet.")
	}
	for _, project := range res.Projects {
		fmt.Printf("%-38s %s\n", project.ID, project.Name)
	}
	return nil
}

func projectLine(project cliProject) string {
	return fmt.Sprintf("%-38s %s %s · %d employee(s) · %d open issue(s)", project.ID, project.Emoji, project.Name,
		len(project.Employees), project.OpenIssues)
}

func changeProject(sub string, args []string) error {
	p, err := parseArgs(args, []string{"name", "emoji"}, nil)
	if err != nil {
		return err
	}
	account, err := currentAccount()
	if err != nil {
		return err
	}
	body := map[string]any{}
	for _, field := range []string{"name", "emoji"} {
		if p.has(field) {
			body[field] = p.strings[field]
		}
	}
	var res struct{ Project cliProject }
	switch sub {
	case "create":
		if !p.has("name") {
			return fail("Usage: crewmark projects create --name <name> [--emoji <emoji>]")
		}
		err = accountAPI(account, "POST", "/api/cli/projects", body, &res)
	default:
		ref := p.positional(0)
		if ref == "" {
			return fail("Usage: crewmark projects %s <id or name>", sub)
		}
		method := "GET"
		if sub == "update" {
			method = "PATCH"
		} else {
			body = nil
		}
		err = accountAPI(account, method, "/api/cli/projects/"+url.PathEscape(ref), body, &res)
	}
	if err != nil {
		return err
	}
	if p.bools["json"] {
		return printJSON(res.Project)
	}
	verb := map[string]string{"create": "Created", "update": "Updated", "show": ""}[sub]
	if verb != "" {
		fmt.Printf("%s project %s %s (%s)\n", verb, res.Project.Emoji, res.Project.Name, res.Project.ID)
	} else {
		fmt.Printf("%s %s (%s)\n", res.Project.Emoji, res.Project.Name, res.Project.ID)
	}
	var people []string
	for _, e := range res.Project.Employees {
		people = append(people, e.Name)
	}
	if len(people) == 0 {
		people = []string{"none"}
	}
	fmt.Printf("Employees: %s · Open issues: %d\n%s\n", strings.Join(people, ", "), res.Project.OpenIssues, res.Project.URL)
	return nil
}

// --- Employees --------------------------------------------------------------------------------------------------

var employeeFields = []string{"name", "role", "description", "kpi", "status"}

func employees(args []string) error {
	sub := ""
	if len(args) > 0 && !strings.HasPrefix(args[0], "-") {
		sub, args = args[0], args[1:]
	}
	switch sub {
	case "", "list":
		return listEmployees(args)
	case "show", "create", "update":
		return changeEmployee(sub, args)
	case "connect":
		return connectEmployee(args)
	default:
		return fail("Unknown employees command %q: use show, create, update or connect.", sub)
	}
}

func listEmployees(args []string) error {
	p, err := parseArgs(args, nil, nil)
	if err != nil {
		return err
	}
	var list []agentEmployee
	if stored, err := readCredentials(); err == nil && stored.Account != nil && p.strings["employee"] == "" {
		var res struct{ Employees []cliEmployee }
		if err := accountAPI(stored.Account, "GET", "/api/cli/employees", nil, &res); err != nil {
			return err
		}
		for _, e := range res.Employees {
			list = append(list, e.agentEmployee)
		}
	} else {
		_, profile, err := currentEmployee(p.strings["employee"])
		if err != nil {
			return err
		}
		var res struct{ Employees []agentEmployee }
		if err := api(profile, "GET", "/api/agent/employees", nil, &res); err != nil {
			return err
		}
		list = res.Employees
	}
	if p.bools["json"] {
		return printJSON(list)
	}
	if len(list) == 0 {
		fmt.Println("No employees yet. Make one with `crewmark employees create --name <name>`.")
	}
	for _, e := range list {
		fmt.Println(employeeLine(e))
	}
	return nil
}

func employeeLine(e agentEmployee) string {
	role := ""
	if e.Role != "" {
		role = " · " + e.Role
	}
	agent := "not connected"
	if e.Runtime != nil {
		agent = labelOf(runtimes, *e.Runtime)
	}
	return fmt.Sprintf("%-38s %s%s · %s · %s", e.ID, e.Name, role, labelOf(employeeStatuses, e.Status), agent)
}

func changeEmployee(sub string, args []string) error {
	p, err := parseArgs(args, append([]string{"projects"}, employeeFields...), []string{"connect"})
	if err != nil {
		return err
	}
	account, err := currentAccount()
	if err != nil {
		return err
	}
	body := map[string]any{}
	for _, field := range employeeFields {
		if p.has(field) {
			body[field] = p.strings[field]
		}
	}
	if p.has("projects") {
		body["projects"] = splitList(p.strings["projects"])
	}
	var res struct{ Employee cliEmployee }
	switch sub {
	case "create":
		if !p.has("name") {
			return fail("Usage: crewmark employees create --name <name> [--role <role>] [--description <text>] " +
				"[--kpi <text>] [--projects <id or name,...>] [--connect]")
		}
		err = accountAPI(account, "POST", "/api/cli/employees", body, &res)
	default:
		ref := p.positional(0)
		if ref == "" {
			return fail("Usage: crewmark employees %s <id or name>", sub)
		}
		method := "GET"
		if sub == "update" {
			method = "PATCH"
		} else {
			body = nil
		}
		err = accountAPI(account, method, "/api/cli/employees/"+url.PathEscape(ref), body, &res)
	}
	if err != nil {
		return err
	}
	if p.bools["json"] && !p.bools["connect"] {
		return printJSON(res.Employee)
	}
	if verb := map[string]string{"create": "Created", "update": "Updated"}[sub]; verb != "" {
		fmt.Printf("%s employee %s (%s).\n", verb, res.Employee.Name, res.Employee.ID)
	}
	printEmployee(res.Employee)
	if sub == "create" && p.bools["connect"] {
		fmt.Println()
		return connectAs(account, res.Employee.ID, false)
	}
	return nil
}

func printEmployee(e cliEmployee) {
	fmt.Println(employeeLine(e.agentEmployee))
	var projects []string
	for _, project := range e.Projects {
		projects = append(projects, project.Name)
	}
	if len(projects) == 0 {
		projects = []string{"none"}
	}
	fmt.Printf("Projects: %s · Heartbeat: %s\n%s\n", strings.Join(projects, ", "), describeHeartbeat(e.Heartbeat), e.URL)
	if strings.TrimSpace(e.Description) != "" {
		section("Responsibilities", e.Description)
	}
	if strings.TrimSpace(e.KPI) != "" {
		section("KPIs", e.KPI)
	}
}

func connectEmployee(args []string) error {
	p, err := parseArgs(args, nil, nil)
	if err != nil {
		return err
	}
	ref := p.positional(0)
	if ref == "" {
		return fail("Usage: crewmark employees connect <id or name>. It makes this conversation that employee.")
	}
	account, err := currentAccount()
	if err != nil {
		return err
	}
	return connectAs(account, ref, p.bools["json"])
}

// connectAs makes this conversation the employee, as a setup link would.
func connectAs(account *accountProfile, ref string, asJSON bool) error {
	body, session := connectRequest()
	var res setupResponse
	if err := accountAPI(account, "POST", "/api/cli/employees/"+url.PathEscape(ref)+"/connect", body, &res); err != nil {
		return err
	}
	return connected(account.URL, res, body, session, asJSON)
}
