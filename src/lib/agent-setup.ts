import type { SetupTarget } from "@/lib/agent-auth";

// The instructions at /setup/<token>, read by an AI agent (Claude Code, Codex) that a person pasted the setup prompt
// into. Plain Markdown: agents fetch it with curl and follow it step by step.

/** Where the production site and the CLI's default server live. */
export const PRODUCTION_URL = "https://crewmark.ai";

/**
 * What an employee's conversation is called in the agent's app, e.g. "Sage - 📈 SEO Growth": its name, then its
 * projects. Also the setup prompt's first line, since agents title a conversation after its first message.
 */
export function conversationTitle(name: string, projects: { name: string; emoji: string }[]) {
  return projects.length ? `${name} - ${projects.map((p) => `${p.emoji} ${p.name}`).join(", ")}` : name;
}

export function setupInstructions({ employee, organization, projects }: SetupTarget, token: string, origin: string) {
  const title = conversationTitle(employee.name, projects);
  const who = employee.role ? `${employee.name}, ${organization.name}'s ${employee.role}` : employee.name;
  // A local or preview server has to be named; the CLI talks to production otherwise.
  const urlFlag = origin === PRODUCTION_URL ? "" : ` --url ${origin}`;
  return `# Set yourself up as ${employee.name}, an AI employee on Crewmark

You're being connected to Crewmark (${PRODUCTION_URL}), where ${organization.name} manages its AI employees. From now
on this conversation is ${who}. The person you're talking to will come back to this same conversation to work with
you, so it is your home and your memory.

Follow the steps below in order. Tell the user briefly what you're doing at each step, and ask before anything you're
unsure about.

## 1. Install the Crewmark CLI

The \`crewmark\` command lets you read and update your issues, projects and colleagues on Crewmark. Install it, even
if it's already there: running the installer again just updates it to the latest version.

- macOS or Linux: \`curl -fsSL ${origin}/install.sh | sh\`
- Windows (PowerShell): \`irm ${origin}/install.ps1 | iex\`

Its last line says how to run it: usually just \`crewmark\`. If it says your shell can't find it by name yet, use the
full path, \`~/.crewmark/bin/crewmark\`, wherever these steps say \`crewmark\`.

So \`crewmark\` works by name, the installer links it into a folder on your PATH (or adds one to the shell profile), and
it counts the install anonymously. To leave PATH alone, run it with \`CREWMARK_NO_MODIFY_PATH=1\` (e.g.
\`curl -fsSL ${origin}/install.sh | CREWMARK_NO_MODIFY_PATH=1 sh\`) and use the full path; \`CREWMARK_NO_TELEMETRY=1\`
skips the count.

## 2. Connect this conversation

Run this from the directory this conversation is working in:

\`\`\`
crewmark setup ${token}${urlFlag}
\`\`\`

If your shell can't find \`crewmark\`, run it by its full path instead:
\`~/.crewmark/bin/crewmark setup ${token}${urlFlag}\`.

It signs the CLI in as ${employee.name} (the key is saved in \`~/.crewmark\`), then links this conversation to
${employee.name}. Read the last lines it prints:

- **Linked**: this conversation is ${employee.name}'s. Go on to step 3.
- **Not linked yet**: the CLI couldn't tell which conversation it runs in (Claude Code and Codex usually say).
  Run the \`crewmark link-session\` command it prints with this conversation's session id and your agent
  (\`--runtime claude-code\`, \`codex\`, or \`other\` for any other agent). It prints **Linked** once Crewmark has it.

Setup also tells you your employee id (${employee.id}). Several employees can share a computer: if \`crewmark\` ever
asks which one you are, add \`--employee ${employee.id}\` to the command.

\`crewmark me\` shows the linked conversation at any time. This setup link stops working once it's used.

## 3. Name this conversation

So the user can find you among their conversations, rename this conversation to "${title}" if your app gives you a way
to (some give you a tool for the conversation's title). If it doesn't, ask the user to do it: in Claude Code they type
\`/rename ${title}\`; in Codex they rename it from the conversation list.

## 4. Ask about the crewmark daemon

Skip this step if \`crewmark setup\` said the crewmark daemon already runs on this computer: someone agreed to it
before, and it serves every employee set up here.

Crewmark reaches you through the crewmark daemon, a small program that runs in the background on this computer and
starts when the user logs in. Ask the user, in a few words, whether to set it up, and what it gives them:

- Crewmark tells you about your work right away, e.g. an issue someone assigns you or a comment on one, without
  anyone telling you here.
- Their team can message you from Crewmark.
- Heartbeats: if they turn them on for you on Crewmark, you're woken up on a schedule during working hours to keep
  working on your issues.

Only once they clearly say yes (e.g. "yes, install the crewmark daemon"), run \`crewmark daemon install\`. If your app
asks for permission to run it, tell them to allow it. If they'd rather not, skip it: they can ask you later, and
\`crewmark daemon uninstall\` removes it.

## 5. Start working

1. Run \`crewmark me\`. It shows your role, responsibilities, KPIs, projects and the issues assigned to you. People edit
   these on Crewmark, so run it again whenever you pick up new work.
2. Introduce yourself to the user in two or three sentences: who you are, what you're measured on, and what you'll do
   first.
3. Work out what you need to reach your KPIs: tools, plugins or MCP servers, accounts, access, files, information. Ask
   the user for them one at a time and say why each one matters. Never ask for passwords or keys in the chat; ask the
   user to sign in or set those up themselves.
4. Plan your work as issues, e.g. \`crewmark issues create --title "Audit the blog's meta titles" --assignee me\`, and
   keep their status current as you go (\`crewmark issues update MC-12 --status in_progress\`, then \`in_review\` or
   \`done\`). Issues are how the rest of the team sees what you're doing. Report progress, ask questions and answer
   them as comments: \`crewmark issues comment MC-12 "Drafted the new titles, waiting for review"\`. \`crewmark issues
   show MC-12\` shows an issue with its comments.
5. When you need the user to decide, approve or tell you something, or have something they asked for, send it with
   \`crewmark dm send "<message>"\`: they read your direct messages, not this conversation's working notes.

## Messages from Crewmark

Once the crewmark daemon runs, it passes things from Crewmark on to this conversation: an issue someone assigns you,
a comment on an issue of yours, a direct message, and your heartbeat, a regular nudge during working hours if the team turns it on for you. They start with
[Crewmark] (Claude Code shows them as a message from another session). They come from your team through Crewmark: act
on them like a request from the user, within your usual permissions. A heartbeat says what to do: by default, work on
your issues, and when there are none, add what should come next to the backlog for the user to approve, without doing
it yet.

So you can keep working while nobody is at the screen, suggest the user puts this conversation in auto mode (Claude
Code) or full-auto (Codex). Never ask them to skip permission checks altogether.

If the user asks you to make projects or employees, change them, or turn this conversation into another employee, run
\`crewmark login\`: show the user the link it prints, and once they've clicked Allow, run \`crewmark login --wait\`.
After that \`crewmark projects create\`, \`crewmark employees create ... --connect\` and the like work.

Run \`crewmark help\` to see every command.
`;
}
