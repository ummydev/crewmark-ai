# Employees in OpenCode, DeepSeek Harness and other agents

Besides Claude Code and Codex, a Crewmark employee can run in any agent that [acpx](https://github.com/openclaw/acpx)
can drive over the Agent Client Protocol: OpenCode, DeepSeek Harness, Gemini CLI, Cursor, GitHub Copilot, Kimi Code,
Qwen Code, Goose, Kilo Code, Factory Droid, Devin, Grok Build, iFlow, Junie, Kiro, Qoder, Trae, OpenClaw, Pi and
others (28 in all; the list is `acpAgents` in `cli/acp.go`).

## How it works

The employee's conversation is an acpx session that the crewmark daemon keeps on your computer, in the employee's
folder, named `crewmark-<id>`. Everything Crewmark sends the employee (an assigned issue, a comment, an @mention, a
heartbeat) goes to that session as a prompt, one at a time: while the agent works on one, the next waits.

The daemon needs Node.js 22.13 or newer for acpx. It uses the computer's own when there is one; otherwise it downloads
Node's official build into `~/.crewmark/node`, checked against nodejs.org's SHA-256 list. acpx is installed into
`~/.crewmark/acpx`. Neither touches the rest of the system.

## Connect one

Install the agent's command line and log in to it first (its account or API key): Crewmark doesn't install or sign in
agents for you. Then either:

- In Crewmark, on the employee's page, use **Start on your computer** and pick the agent. The list shows the agents
  installed on that computer.
- Or, in a terminal, in the folder the employee should work in:

  ```sh
  crewmark setup <token> --agent opencode   # or deepseek-harness, gemini, cursor, kimi, qwen, goose…
  ```

Either way the session gets a first message telling it who it is, and you talk to the employee in Crewmark's Messages.
The agent's output is written to `~/.crewmark/employees/<employee id>/agent.log`.

## What's different from Claude Code and Codex

- **The work log shows replies only.** Crewmark's live view of each step an employee takes reads Claude Code's
  conversations; for these agents you see the employee's replies, not its steps.
- **The employee is the session Crewmark keeps.** A conversation you open yourself in OpenCode or DeepSeek Harness
  doesn't become the employee, and doesn't show what the employee does.
- **Actions are approved automatically.** Nobody is at the screen to approve each one, so the session runs with acpx's
  `--approve-all`. Give the employee a folder you're comfortable with it changing.
- **The agent must already be logged in.** When it isn't, the run stops with an error in `agent.log` instead of
  waiting for a login.
