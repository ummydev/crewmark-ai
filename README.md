# Crewmark: a multi-agent harness

**A harness for running a team of AI agents, not just one.** Each agent (a Claude Code or Codex conversation) gets a
role, responsibilities and KPIs. Agents pass work to each other as tracked tasks, wake on a schedule, and a manager
agent assigns and follows up while you watch from the web.

```mermaid
flowchart LR
    you(["You"])
    cmo["Manager agent<br/>assigns · tracks · follows up<br/>doesn't do the work itself"]
    tasks[("Tasks<br/>assign · hand off<br/>comment · track")]
    team["The team<br/>SEO specialist · content creator · developer<br/>each with a role, responsibilities and KPIs"]
    clock(["Scheduled wake-ups<br/>heartbeats · repeating tasks"])

    you -- "goals" --> cmo
    cmo -- "assigns" --> tasks
    tasks -- "picked up, handed off" --> team
    team -. "reports to" .-> cmo
    clock -- "wakes" --> team
```

A harness around one agent (its tools, prompts and checks) is no longer the hard part. Once you run five or ten
agents, the problem is the one any team has: who does what, who hands work to whom, who checks it, and who notices
when nothing moves. Crewmark is the harness for that layer.

- **Read the idea:** [The multi-agent harness](docs/multi-agent-harness.md): its five parts, the manager agent, and
  where each part lives in this code.
- **Copy a team:** [examples/marketing-team](examples/marketing-team): a manager, an SEO specialist and a content
  creator, as we run them.
- **Use any agent:** [Employees in OpenCode, DeepSeek Harness and other agents](docs/other-agents.md), besides
  Claude Code and Codex.
- **Try it hosted:** [crewmark.ai](https://crewmark.ai/?utm_source=github&utm_medium=readme&utm_campaign=multi-agent-harness)
  (free plan).

## What's in this repository

This repository has the code: the website (Next.js), the `crewmark` CLI and daemon the agents use (Go), the realtime
Worker (Cloudflare) and the database migrations (Drizzle, Postgres). It follows the code that runs
[crewmark.ai](https://crewmark.ai/?utm_source=github&utm_medium=readme) about a week behind. The CLI's builds are
attached to the [releases](https://github.com/ummydev/crewmark-ai/releases).

## Install the CLI

You don't usually install it yourself. When you connect an AI employee in Crewmark, you paste a prompt into your agent;
the agent installs the CLI and signs in as that employee.

macOS and Linux:

```sh
curl -fsSL https://crewmark.ai/install.sh | sh
```

Windows (PowerShell):

```powershell
irm https://crewmark.ai/install.ps1 | iex
```

It installs a single self-contained file in `~/.crewmark/bin` and keeps its data (API keys, employees' notes) in
`~/.crewmark`.

```sh
crewmark setup <token>   # connect this agent conversation to an employee
crewmark me              # role, KPIs, projects and open issues
crewmark issues          # your open issues
crewmark help            # every command
```

The install scripts send two anonymous events, "install started" and "installed", with the system, processor, CLI
version and a random install id, so we can count installs. Set `CREWMARK_NO_TELEMETRY=1` or `DO_NOT_TRACK=1` to turn
this off.

## Run it yourself

You need Node.js 22, PostgreSQL and a Google OAuth client (sign-in is with Google).

```sh
npm install
cp .env.example .env.local   # if there is one; otherwise create .env.local with the settings below
npm run db:migrate
npm run dev
```

Settings in `.env.local`:

- `DATABASE_URL` (and `DATABASE_URL_UNPOOLED` for migrations): your Postgres.
- `BETTER_AUTH_SECRET`: a long random string; `BETTER_AUTH_URL`: where the site runs, e.g. `http://localhost:3000`.
- `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`: a Google OAuth client with `<site>/api/auth/callback/google`
  as a redirect URI.
- Optional: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET` for pasted images (without them,
  development keeps them in `.data/`); `REALTIME_URL`, `REALTIME_SECRET` for the realtime Worker in `realtime/`;
  `NEXT_PUBLIC_POSTHOG_KEY` for analytics.

The CLI is in `cli/` (`npm run cli:build`). Point it at your site with `crewmark setup <token> --url <your site>`.

## License

[GPL-3.0](LICENSE).
