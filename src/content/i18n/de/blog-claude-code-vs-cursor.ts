import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor (2026): Preise, Modelle, Limits und was du wählen solltest | Crewmark",
    description:
      "Claude Code vs Cursor im November 2026: Cursors neue Grok-zentrierte Pläne nach dem Wechsel zu SpaceX, was Claude-Modelle jeweils kosten, Agenten, CLI, Regeln, MCP, Hooks und wie du dich entscheidest.",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code vs Cursor 2026: Was sich geändert hat und was du wählen solltest",
    lead: "Claude Code ist Anthropics Coding-Agent: Er läuft in deinem Terminal, deiner IDE, der Desktop-App oder im Browser mit einem Claude-Abo. Cursor ist ein KI-Code-Editor mit eigenem Agenten, einer CLI und Cloud-Agenten. Der Vergleich hat sich dieses Jahr verschoben: Cursor gehört seit August 2026 zu SpaceX, seine Pläne sind jetzt um Grok-Modelle herum gebaut, und Claude-Modelle in Cursor werden separat zum API-Listenpreis abgerechnet. Dieser Leitfaden vergleicht Preise, Modelle, Limits und Funktionen, Stand 6. November 2026, und zeigt, wie du dich entscheidest oder beide nutzt.",
    cta: "Early Access anfragen",
    secondary: "Direkt zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Cursor auf einen Blick",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["Hersteller", "Anthropic", "Cursor, seit August 2026 Teil von SpaceX"],
        ["Was es ist", "Ein Coding-Agent für Terminal, IDEs, Desktop, Web und Mobil", "Ein KI-Code-Editor, dazu eine CLI (`agent`), Cloud-Agenten und Code-Review"],
        ["Wichtigste Modelle", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5 bis 4.7 und Composer 2.5; Claude, GPT, Gemini und andere zum API-Listenpreis"],
        ["Günstigster bezahlter Plan", "Claude Pro, $20/Monat", "Plus, $8/Monat, nur Grok-Modelle"],
        ["Kosten für Claude-Modelle", "In den Limits deines Claude-Plans enthalten", "Separat nach Nutzung zum API-Listenpreis abgerechnet (ab Premium)"],
        ["Projektanweisungen", "`CLAUDE.md`, `.claude/rules/`; liest AGENTS.md, wenn es keine CLAUDE.md gibt", "`.cursor/rules/*.mdc`, `AGENTS.md`, Nutzer- und Team-Regeln"],
        ["Plattformen", "macOS, Windows, Linux", "macOS, Windows, Linux"],
      ],
    },
    {
      kind: "table",
      title: "Preise: Claude-Pläne vs Cursor-Pläne",
      text: [
        "Monatspreise in US-Dollar laut claude.com/pricing und cursor.com/pricing. Cursors Pläne enthalten jetzt auch X-Funktionen, etwa weniger Werbung in der Timeline, und teilen sich mit Grok ein KI-Nutzungskontingent, das sich wöchentlich erneuert.",
      ],
      headers: ["Claude-Plan", "Preis", "Cursor-Plan", "Preis"],
      rows: [
        ["Free", "Kein Claude Code", "Free", "$0, begrenzte Agent-Anfragen"],
        ["Pro", "$20 ($17 bei jährlicher Zahlung)", "Plus", "$8, nur Grok-Modelle"],
        ["Max", "$100", "Premium", "$30: 4-fache Plus-Nutzung, Cloud-Agenten, Automationen, Code-Review, Drittanbieter-Modelle zum API-Preis"],
        ["Ultra", "$200", "Super", "$100: 15-fache Plus-Nutzung"],
        ["Team", "$25 pro Platz (Standard), $125 (Premium)", "Ultra", "$200: 50-fache Plus-Nutzung"],
        ["Enterprise", "$20 pro Platz bei jährlicher Zahlung, plus Nutzung zu API-Preisen", "Teams, Enterprise", "Ab $30 pro Nutzer; Enterprise individuell"],
      ],
    },
    {
      kind: "table",
      title: "Funktionen im direkten Vergleich",
      headers: ["Funktion", "Claude Code", "Cursor"],
      rows: [
        ["Agent im Terminal", "`claude`, mit Headless-Modus `-p`", "`agent`-CLI, mit Print-Modus `-p`"],
        ["Plan-Modus", "Ja (Shift+Tab, `/plan`)", "Ja (Shift+Tab, `/plan`)"],
        ["Cloud-Agenten", "Claude Code im Web, Cloud-Sessions", "Cloud-Agenten in VMs (ab Premium), gestartet aus Web, iOS, GitHub, Slack, Linear oder per API"],
        ["Paralleles Arbeiten", "`--worktree`, Subagenten, Agentenansicht", "`/worktree`, `/best-of-n` über mehrere Modelle"],
        ["Automationen", "`/loop`, geplante Aufgaben auf dem Desktop und in der Cloud", "Automationen über Cron, Git, Slack, Linear, Webhooks, Sentry, PagerDuty (ab Premium)"],
        ["MCP", "Ja: `claude mcp add`, `.mcp.json`", "Ja: `.cursor/mcp.json`"],
        ["Hooks", "Ja, über 30 Events in `settings.json`", "Ja, rund 20 Events in `hooks.json`; kann Claude-Code-Hooks laden"],
        ["Code-Review", "`/code-review` lokal; `@claude review` bei Team und Enterprise", "Bugbot auf GitHub, GitLab, Bitbucket und Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du zwischen Claude Code und Cursor",
      text: [
        "Keiner ist in allem besser, und veröffentlichte Benchmarks bevorzugen den, der sie veröffentlicht. Entscheide nach dem, was deinen Alltag verändert.",
      ],
      steps: [
        {
          title: "Entscheide, für welche Modelle du zahlen willst",
          text: "Wenn du jeden Tag Claude-Modelle nutzen willst, enthält ein Claude-Plan sie innerhalb seiner Limits; in Cursor kommen sie zum API-Listenpreis zusätzlich zum Plan. Reichen dir Grok und Composer, sind Cursors Pläne für $8 und $30 günstiger als die von Claude.",
        },
        {
          title: "Entscheide, wo du arbeiten willst",
          text: "Cursor ist zuerst ein Editor: Inline-Bearbeitung, Tab-Vervollständigung und der Agent in einem Fenster. Claude Code ist zuerst ein Agent: Er läuft in jedem Terminal und bindet sich in VS Code, JetBrains, die Desktop-App, das Web und Slack ein.",
        },
        {
          title: "Prüfe, wie viel ohne dich laufen soll",
          text: "Beide laufen in der Cloud und nach Zeitplan. Cursors Cloud-Agenten und Automationen setzen Premium oder höher voraus; die geplanten Aufgaben und Cloud-Sessions von Claude Code sind in den Claude-Plänen enthalten. Siehe [so machst du Claude Code proaktiv](/proactive-claude-code).",
        },
        {
          title: "Halte dein Setup portabel",
          text: "Schreib gemeinsame Regeln in AGENTS.md (beide lesen sie) und importiere sie in CLAUDE.md; Cursor kann außerdem Claude-Code-Hooks laden. Wechseln oder Kombinieren kostet dann wenig. Siehe die [CLAUDE.md-Anleitung](/blog/claude-md).",
        },
        {
          title: "Oder nutze beide",
          text: "Anthropics VS-Code-Dokumentation enthält einen Installationslink für Cursor, sodass die Claude-Code-Erweiterung im Cursor-Editor läuft, mit deinem Claude-Plan.",
        },
      ],
      source: { label: "Quellen: Claude-Code-Dokumentation und Cursor-Preise", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Wenn du die Claude-Code-Erweiterung in Cursor nutzt",
      text: [
        "Am 29. Oktober 2026 meldete Cursor, dass die bösartigen Versionen 2.1.312 und 2.1.313 der Erweiterung Anthropic.claude-code, die nicht von Anthropic stammten, rund 11 Stunden lang im Erweiterungs-Marketplace von Cursor verfügbar waren, für Windows und macOS. Cursor entfernte sie, baute den Marketplace neu auf und veröffentlichte eine Prüfung: Ein SSH-Schlüssel mit dem Label `svc-telemetry` in deiner `authorized_keys` bedeutet, dass der Rechner betroffen war. Wenn du die Erweiterung an diesem Tag installiert oder aktualisiert hast, folge Cursors Sicherheitshinweis.",
      ],
    },
    {
      kind: "text",
      title: "Und Codex?",
      text: [
        "OpenAIs Codex ist die dritte gängige Wahl, ab dem kostenlosen Tarif in den ChatGPT-Plänen enthalten, und läuft ebenfalls in Cursor. Vergleiche ihn in [Claude Code vs Codex](/blog/claude-code-vs-codex), und sieh dir die [Orchestrierungs-Tools für Claude Code](/blog/claude-code-orchestration-tools) an, um mehrere Agenten gleichzeitig laufen zu lassen.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Egal, wofür du dich entscheidest: Gib ihm einen Job",
      text: [
        "Editoren und Agenten warten immer noch auf deinen nächsten Prompt. Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board nimmt, mit dem Abo, das du schon bezahlst.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle und ein Ziel",
          text: "Software-Entwickler, Reviewer, SEO-Texter: Jede Rolle hat ein Ziel, das als Zahl formuliert ist. Lies [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "In seinen Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Konversation auf und nimmt das nächste Issue.",
        },
        {
          title: "Prüfe auf dem Board",
          text: "Er kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Zwischen Claude Code und Cursor wählen" },
  mid: {
    title: "Agent gewählt? Jetzt lass ihn arbeiten, ohne auf dich zu warten.",
    text: "Crewmark weckt Claude Code oder Codex per Heartbeat, mit einer Rolle, einem Ziel und einem Board mit Issues.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Code vs Cursor",
    items: [
      {
        q: "Ist Claude Code besser als Cursor?",
        a: "Das hängt davon ab, wie du arbeitest. Claude Code passt zu dir, wenn du Claude-Modelle im Abo enthalten haben willst und einen Agenten, der in jedem Terminal und jeder IDE läuft. Cursor passt zu dir, wenn du einen KI-Editor mit Inline-Bearbeitung willst und mit Grok-Modellen oder API-Preisen für andere Modelle gut leben kannst.",
      },
      {
        q: "Kann ich Claude-Modelle in Cursor nutzen?",
        a: "Ja, ab Premium ($30), aber Drittanbieter-Modelle wie Claude werden separat nach Nutzung zum API-Listenpreis abgerechnet. Der Plus-Plan für $8 bietet nur Grok-Modelle.",
      },
      {
        q: "Was ist günstiger, Claude Code oder Cursor?",
        a: "Cursors Einstiegspläne sind günstiger ($8 und $30 im Monat), aber Claude-Nutzung in Cursor kostet extra. Wenn du hauptsächlich Claude-Modelle nutzt, kommt ein Claude-Pro- ($20) oder Max-Plan ($100) meist günstiger, als API-Preise zu zahlen.",
      },
      {
        q: "Gehört Cursor jetzt zu SpaceX?",
        a: "Ja. Cursor gab am 14. August 2026 bekannt, dass es von SpaceX übernommen wurde, und schloss damit einen Prozess ab, der im April begonnen hatte. Seine Pläne enthalten jetzt X-Funktionen und Grok-Modelle.",
      },
      {
        q: "Kann ich Claude Code in Cursor ausführen?",
        a: "Ja. Die Claude-Code-Erweiterung lässt sich über Anthropics Installationslink in Cursor installieren, und die `claude`-CLI läuft im Terminal von Cursor. Nutze die offizielle Erweiterung und prüfe ihre Version nach Cursors Sicherheitshinweis vom 29. Oktober.",
      },
      {
        q: "Teilen sich Claude Code und Cursor die Konfiguration?",
        a: "Teilweise. Beide lesen AGENTS.md, beide unterstützen MCP (jeweils mit eigener Config-Datei), und Cursor kann Claude-Code-Hooks laden. Regel- und Einstellungsdateien sind ansonsten getrennt.",
      },
      {
        q: "Und die Nutzungslimits?",
        a: "Claude-Pläne nutzen ein 5-Stunden-Fenster plus Wochenlimits, die sie sich mit dem Claude-Chat teilen. Cursor-Pläne teilen sich mit Grok ein wöchentlich erneuertes Kontingent, bemessen als Vielfaches des Plus-Plans, mit Aufladungen oder API-Abrechnung darüber hinaus.",
      },
    ],
  },
  cta: {
    title: "Mach deinen Coding-Agenten zu einem Teamkollegen, der dranbleibt.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation, claude.com/pricing und cursor.com (Preise, Dokumentation, Changelog und Blog) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, Cursor oder SpaceX, die es auch nicht unterstützen. Claude und Claude Code sind Marken von Anthropic; Cursor ist eine Marke seines Inhabers.",
};
