import type { GuideCopy } from "@/components/landing/guide-article";

// /skills/website-design (MC-197): "best claude skills for website design", "claude code skills for ui design",
// "claude skills for web design", "claude design skills", "frontend design skill" (Google autocomplete, 2026-11-08:
// website and UI design is the top suggestion after "claude skills for", "best claude skills for" and "codex skills
// for"). Facts come from each skill's GitHub README or SKILL.md and the GitHub API on 2026-11-08; stars are rounded
// and dated, and for repositories that hold many skills (anthropics/skills, shadcn/ui, vercel-labs) they belong to the
// whole repository. Crewmark's team has used Taste Skill (product screens, Oct 2026) and unslop (a UGC reel); it has
// not used Impeccable, so the copy doesn't say it has. ummydev/pretty-ui is a sister project and is labelled as ours.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const websiteDesign: GuideCopy = {
  meta: {
    title: "Best Claude Skills for Website & UI Design (2026)",
    description:
      "The best Claude Code skills for website and UI design, compared from their own repos: Anthropic's frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop, Emil Kowalski's skills, shadcn and more, with install commands.",
  },
  breadcrumb: "Website & UI design skills",
  parent: { name: "Claude skills", href: "/skills" },
  hero: {
    kicker: "Claude skills · Design",
    title: "Best Claude skills for website and UI design",
    lead: "A design skill is a SKILL.md file that teaches Claude Code (or Codex, Cursor and other agents) how to design: which colors and type to pick, which AI-looking defaults to avoid, and how to check the result before calling it done. Without one, agents tend to ship the same gradient-and-cards page. These are the skills worth installing in 2026, what each is best at, and how to install it, from each project's own repository.",
    cta: "Get started",
    secondary: "Compare the skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Quick picks",
      points: [
        "New landing page or company site: Taste Skill. It picks a direction, uses real photos and checks the page in a browser at four widths before handing over.",
        "Polishing UI that already exists: Impeccable (commands like polish, critique and audit, plus a rule-based slop detector) or unslop (fixes spacing, color, icons, copy and type in order).",
        "A safe default from Anthropic: frontend-design, the official skill, steers away from generic AI design.",
        "Picking styles, palettes and fonts for any platform: UI UX Pro Max, a searchable design database for web, mobile and desktop.",
        "Motion and the small details: Emil Kowalski's skills.",
        "Reviewing code against accessibility and UX rules: Vercel's web-design-guidelines.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Website and UI design skills compared",
      text: [
        "Stars and licenses from the GitHub API on November 8, 2026, rounded. For repositories with many skills, stars are for the whole repository.",
      ],
      headers: ["Skill", "Best for", "Works with", "Stars", "License"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "Distinctive design for any new UI; plans a token system first", "Claude Code, Claude.ai", "~189k (repo)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Styles, palettes, font pairs and UX rules for web, mobile and desktop", "Claude Code, Cursor, Codex and ~20 more", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "Company and marketing sites, checked in a real browser", "Claude Code, Codex, skills CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "Critiquing and polishing existing interfaces; slop detector", "Claude Code, Codex, Cursor and more", "~105k", "Apache 2.0"],
        ["[Emil Kowalski's skills](https://github.com/emilkowalski/skills)", "Animation, polish and component details", "Any agent via skills CLI", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "Auditing UI code against 100+ accessibility and UX rules", "Any agent via skills CLI", "~34k (repo)", "MIT (per README)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "Using shadcn/ui components correctly in React apps", "Any agent via skills CLI", "~128k (repo)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "Pages, app prototypes, decks and motion from one prompt; written in Chinese", "Claude Code, Cursor, Codex and more", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "Turning AI-looking UI into a designed interface, pass by pass", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Stitch skills](https://github.com/google-labs-code/stitch-skills) (Google)", "Designing in Stitch, then building React or React Native", "Claude Code, Cursor, Codex; needs Stitch MCP", "~9k", "Apache 2.0"],
        ["[Figma skills](https://github.com/figma/mcp-server-guide)", "Figma designs to code, and design systems in Figma (beta)", "Claude Code, Cursor; needs Figma MCP", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to install and use a design skill",
      steps: [
        {
          title: "Install one or two, not all of them",
          text: "Skills that each want to set the direction will fight. Pick one that designs (frontend-design, Taste Skill or UI UX Pro Max) and, if you like, one that reviews (Impeccable, unslop or web-design-guidelines).",
          code: install,
        },
        {
          title: "Give it the brief",
          text: "Say what the page is for, who it's for and one or two sites you like. Most of these skills ask for a direction first, and the result is only as specific as the brief.",
        },
        {
          title: "Let it check its own work",
          text: "Taste Skill renders the page at four widths and runs a finish gate; Impeccable's detector runs 62 rules with `npx impeccable detect src/`. Keep those checks on, and look at the screenshots yourself.",
        },
        {
          title: "Save the result as a design system",
          text: "Several skills write a DESIGN.md (Impeccable, Taste Skill, Stitch). Keep it in the repository so later sessions, and other agents, follow the same colors, type and spacing. See the [CLAUDE.md guide](/blog/claude-md).",
        },
      ],
      source: { label: "Source: Anthropic's frontend-design skill", href: anthropic },
    },
    {
      kind: "text",
      title: "Things to know before installing",
      points: [
        "Some skills add hooks or download an engine: Impeccable installs command hooks and has telemetry on by default (opt out with `DO_NOT_TRACK=1`); Taste Skill runs a finish gate as a Stop hook and needs Node 22+ and Chrome.",
        "A full Taste Skill build can take 30–45 minutes and a few hundred thousand tokens, per its README.",
        "UI UX Pro Max needs Python 3 and sells a premium tier; the open skill is MIT.",
        "unslop is CC BY 4.0: credit the author if you reuse its text. Don't confuse it with text-focused repos of the same name.",
        "Stitch and Figma skills need their MCP servers and accounts; Figma's canvas writes are beta and limited on free seats.",
        "From our team: we used Taste Skill on Crewmark's own product screens and made a short video about unslop. Our sister project [pretty-ui](https://github.com/ummydev/pretty-ui) is a newer, smaller skill for the same job.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Give the skills a designer that works every day",
      text: [
        "A skill makes one session design better. Crewmark turns Claude Code or Codex into an AI UI designer with a goal, such as three polished screens a week, working hours and a board of screens to fix; it wakes on a heartbeat and opens pull requests with before-and-after screenshots.",
      ],
      steps: [
        {
          title: "Hire the UI designer role",
          text: "Its brief, goal and routine come set up; see the [AI UI designer](/ai-employees/ui-designer) and the [AI app designer](/ai-employees/app-designer).",
        },
        {
          title: "Install your design skills in the repository",
          text: "The employee uses the skills in `.claude/skills` like any session does.",
        },
        {
          title: "Review pull requests, not prompts",
          text: "Approve the screens you like; ask for changes on the board. Read [what an AI employee is](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Install and use a Claude design skill" },
  mid: {
    title: "Want a designer that runs these skills every day?",
    text: "Crewmark's AI UI designer works in your code on a heartbeat and opens pull requests with screenshots.",
    button: "Get started",
  },
  faq: {
    title: "Claude design skills FAQ",
    items: [
      {
        q: "What is the best Claude skill for website design?",
        a: "For a new site, Taste Skill or Anthropic's frontend-design; for polishing an existing UI, Impeccable or unslop; for picking styles and palettes across platforms, UI UX Pro Max. Most people install one that designs and one that reviews.",
      },
      {
        q: "Is there an official Claude design skill?",
        a: "Yes. Anthropic publishes frontend-design in anthropics/skills and as a plugin in claude-plugins-official. It's Apache 2.0 and focuses on avoiding generic AI design defaults.",
      },
      {
        q: "How do I install a skill in Claude Code?",
        a: "Use the plugin marketplace (`/plugin marketplace add owner/repo`, then `/plugin install`), the skills CLI (`npx skills add owner/repo`), or copy the skill's folder into `.claude/skills/`.",
      },
      {
        q: "Do these skills work with Codex and Cursor?",
        a: "Most do: UI UX Pro Max, Impeccable, Taste Skill and Huashu Design document Codex, and the skills CLI installs SKILL.md skills into Cursor, Codex and about 75 other agents.",
      },
      {
        q: "Are Claude design skills free?",
        a: "The skills here are open source (MIT, Apache 2.0 or CC BY 4.0). Some products around them are paid: UI UX Pro Max's premium tier, and Stitch and Figma need their own accounts.",
      },
      {
        q: "What's the difference between Impeccable and Taste Skill?",
        a: "Taste Skill builds new company and marketing sites with a real-browser check; Impeccable is strongest on interfaces that already exist, with commands to critique, audit and polish, and a rule-based slop detector.",
      },
    ],
  },
  cta: {
    title: "Put a designer on your board, with the skills you trust.",
    text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked: "Checked against each skill's GitHub repository and the GitHub API on November 8, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic or the authors of the skills listed. Product names are trademarks of their owners.",
};
