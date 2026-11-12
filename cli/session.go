package main

import "os"

// Working out which agent conversation the CLI runs in, so that conversation can become the employee.

type detectedSession struct {
	Runtime   string `json:"runtime"`
	SessionID string `json:"sessionId"`
}

// sessionFromEnvironment is the conversation, when the agent puts it in the environment of the commands it runs:
// Claude Code sets CLAUDE_CODE_SESSION_ID and Codex CODEX_THREAD_ID (in the agent's commands, not in the Codex app's
// own terminal). It also tells employees apart when several work in one folder. Without it, the agent passes its
// conversation's id to `crewmark link-session --session <id>` itself.
func sessionFromEnvironment() *detectedSession {
	if id := os.Getenv("CLAUDE_CODE_SESSION_ID"); id != "" {
		return &detectedSession{"claude-code", id}
	}
	if id := os.Getenv("CODEX_THREAD_ID"); id != "" {
		return &detectedSession{"codex", id}
	}
	return nil
}
