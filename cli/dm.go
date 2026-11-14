package main

import (
	"fmt"
	"io"
	"net/url"
	"os"
	"strings"
	"time"
)

// Direct messages (MC-169): one conversation between a person and an employee, for what the person needs to see. An
// employee messages people (`crewmark dm send "…"`), and their replies come to its conversation as [Crewmark]
// messages; a person logged in with `crewmark login` messages employees the same way, with --to.

type directMessage struct {
	From      creator `json:"from"`
	Body      string  `json:"body"`
	CreatedAt string  `json:"createdAt"`
}

type directThread struct {
	With          assignee       `json:"with"`
	Unread        int            `json:"unread"`
	Last          *directMessage `json:"last"`
	LastMessageAt string         `json:"lastMessageAt"`
}

type directThreadResponse struct {
	With     assignee        `json:"with"`
	Messages []directMessage `json:"messages"`
	HasMore  bool            `json:"hasMore"`
}

// dmAPI calls the direct messages API as the employee this conversation is, or as the logged-in person.
func dmAPI(flag, method, path string, body, out any) error {
	profile, account, err := issueAuthor(flag)
	if err != nil {
		return err
	}
	if account != nil {
		return accountAPI(account, method, "/api/cli"+path, body, out)
	}
	return api(*profile, method, "/api/agent"+path, body, out)
}

func dm(args []string) error {
	sub := ""
	if len(args) > 0 && !strings.HasPrefix(args[0], "-") {
		sub = args[0]
	}
	switch sub {
	case "send":
		p, err := parseArgs(args[1:], []string{"to"}, nil)
		if err != nil {
			return err
		}
		text := strings.Join(p.positionals, " ")
		if text == "-" {
			read, err := io.ReadAll(os.Stdin)
			if err != nil {
				return err
			}
			text = string(read)
		}
		if strings.TrimSpace(text) == "" {
			return fail("Usage: crewmark dm send [--to <who>] \"<message>\", or - instead of the message to read it from stdin")
		}
		body := map[string]any{"body": text}
		if p.has("to") {
			body["to"] = p.strings["to"]
		}
		var res struct {
			Message directMessage `json:"message"`
			To      assignee      `json:"to"`
		}
		if err := dmAPI(p.strings["employee"], "POST", "/dm", body, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res)
		}
		fmt.Printf("Sent to %s.\n", res.To.Name)
		return nil

	case "show":
		p, err := parseArgs(args[1:], nil, nil)
		if err != nil {
			return err
		}
		who := p.positional(0)
		if who == "" {
			who = "-"
		}
		var res directThreadResponse
		if err := dmAPI(p.strings["employee"], "GET", "/dm/"+url.PathEscape(who), nil, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res)
		}
		fmt.Printf("Direct messages with %s\n", res.With.Name)
		if res.HasMore {
			fmt.Println("  (earlier messages not shown)")
		}
		for _, m := range res.Messages {
			fmt.Printf("\n  %s  %s:\n    %s\n", localTime(m.CreatedAt), m.From.Name,
				strings.ReplaceAll(strings.TrimSpace(m.Body), "\n", "\n    "))
		}
		if len(res.Messages) == 0 {
			fmt.Println("  No messages yet.")
		}
		fmt.Printf("\nReply with: crewmark dm send --to %q \"<message>\"\n", res.With.Name)
		return nil

	case "", "list":
		if sub == "list" {
			args = args[1:]
		}
		p, err := parseArgs(args, nil, nil)
		if err != nil {
			return err
		}
		if len(p.positionals) > 0 {
			return fail("Unknown dm command %q. Run `crewmark help` for usage.", p.positionals[0])
		}
		var res struct {
			Threads []directThread `json:"threads"`
		}
		if err := dmAPI(p.strings["employee"], "GET", "/dm", nil, &res); err != nil {
			return err
		}
		if p.bools["json"] {
			return printJSON(res.Threads)
		}
		if len(res.Threads) == 0 {
			fmt.Println("No direct messages yet. Send one with: crewmark dm send [--to <who>] \"<message>\"")
			return nil
		}
		for _, t := range res.Threads {
			unread := ""
			if t.Unread > 0 {
				unread = fmt.Sprintf("  (%d unread)", t.Unread)
			}
			last := ""
			if t.Last != nil {
				last = fmt.Sprintf("  %s %s: %s", localTime(t.Last.CreatedAt), t.Last.From.Name, oneLine(t.Last.Body, 70))
			}
			fmt.Printf("%s%s\n%s\n", t.With.Name, unread, last)
		}
		fmt.Println("\nRead one with: crewmark dm show <who>")
		return nil
	}
	return fail("Unknown dm command %q. Run `crewmark help` for usage.", sub)
}

// localTime is an RFC 3339 time in this computer's zone, e.g. "2026-11-07 18:05".
func localTime(value string) string {
	if t, err := time.Parse(time.RFC3339Nano, value); err == nil {
		return t.Local().Format("2006-01-02 15:04")
	}
	return value
}

// oneLine is text on one line, cut to max runes.
func oneLine(text string, max int) string {
	line := strings.Join(strings.Fields(text), " ")
	if runes := []rune(line); len(runes) > max {
		return string(runes[:max]) + "…"
	}
	return line
}
