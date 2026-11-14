// Writes the public GitHub repository ummydev/ai-employee-roles from the English role pages (content/roles/en.ts):
// a README per role with its goals, routine and brief, the brief as CLAUDE.md and AGENTS.md, and an index README that
// links back to each role page. Run it into a clone of that repository after the role copy changes:
//
//   npx tsx scripts/role-repo.ts ../ai-employee-roles
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { roles as data } from "../src/content/roles/en";
import { roles } from "../src/i18n/roles";

const out = process.argv[2];
if (!out) throw new Error("Usage: npx tsx scripts/role-repo.ts <repository folder>");
const site = "https://crewmark.ai";
const md = (t: string) => t.replace(/\]\((\/[^)]*)\)/g, (_, p) => `](${site}${p})`);
const utm = (slug: string) => `${site}/ai-employees/${slug}?utm_source=github&utm_medium=readme&utm_campaign=ai-employee-roles`;

const rows: string[] = [];
for (const { slug } of roles) {
  const r = data[slug];
  const dir = join(out, "roles", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "CLAUDE.md"), r.brief + "\n");
  writeFileSync(join(dir, "AGENTS.md"), r.brief + "\n");
  writeFileSync(
    join(dir, "README.md"),
    `# ${r.name}

${md(r.lead)}

Full guide: [${r.name} on crewmark.ai](${utm(slug)})

## What it does

${r.does.points.map((p) => `- ${md(p)}`).join("\n")}

## Goals to give it

| Goal | How it's measured | A good first target |
| --- | --- | --- |
${r.goals.map((g) => `| ${g.join(" | ")} |`).join("\n")}

## Daily routine

${r.routine.map((p, i) => `${i + 1}. ${md(p)}`).join("\n")}

## Role brief

Copy [CLAUDE.md](CLAUDE.md) (Claude Code) or [AGENTS.md](AGENTS.md) (Codex) into the repository the agent works in.

\`\`\`markdown
${r.brief}
\`\`\`

## Tools it needs

${md(r.tools)}

## What needs your yes

${md(r.approvals)}
`,
  );
  rows.push(`| [${r.name}](roles/${slug}) | ${r.goals[0][0]}: ${r.goals[0][2].replace(/^[A-Z]/, (c) => c.toLowerCase())} | [Guide](${utm(slug)}) |`);
}

writeFileSync(
  join(out, "README.md"),
  `# AI employee roles for Claude Code and Codex

Role briefs that turn a coding agent into an AI employee: a job, a goal measured in numbers, a daily routine and the rules for what needs a person's yes. Drop a role's \`CLAUDE.md\` (Claude Code) or \`AGENTS.md\` (Codex) into the repository the agent works in, give it the tools listed, and put it on a schedule.

| Role | Starting goal | Guide |
| --- | --- | --- |
${rows.join("\n")}

## How to use a role

1. Copy \`roles/<role>/CLAUDE.md\` (or \`AGENTS.md\` for Codex) into your project and change the goal to your own number.
2. Give the agent the tools in the role's README, and keep everything on its "needs your yes" list behind a person.
3. Run it on a rhythm instead of a single prompt: \`/loop\` or scheduled tasks for one recurring prompt, or working hours, a heartbeat and a board of issues. See [how to make Claude Code proactive](${site}/proactive-claude-code?utm_source=github&utm_medium=readme&utm_campaign=ai-employee-roles).

## Hire them instead of scripting them

[Crewmark](${site}/?utm_source=github&utm_medium=readme&utm_campaign=ai-employee-roles) runs these roles as AI employees on the Claude Code, Codex, DeepSeek Harness or OpenCode subscription you already pay for: each wakes on a heartbeat during working hours, takes the next issue from a shared board and messages you when it needs a decision. Read [what an AI employee is](${site}/ai-employees?utm_source=github&utm_medium=readme&utm_campaign=ai-employee-roles).

## Contributing

New roles and better briefs are welcome: open a pull request with \`roles/<role>/CLAUDE.md\`, \`AGENTS.md\` and a README in the same shape as the others.

## License

MIT
`,
);

writeFileSync(
  join(out, "LICENSE"),
  `MIT License

Copyright (c) 2026 Crewmark

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
);
