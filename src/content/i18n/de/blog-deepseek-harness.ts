import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Web-Oberfläche mit Node.js starten
npx @deepseek-ai/dsh web
# dann http://127.0.0.1:3080 öffnen

# Oder aus dem Quellcode bauen
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# Eine Aufgabe, ohne UI, mit einem Berechtigungsmodus
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# Events als JSON streamen, z. B. für Skripte
dsh headless "Summarize open TODOs" --json

# Ein Plugin zu einem Profil hinzufügen
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness: Installation, Preise und vs Claude Code",
    description:
      "DeepSeek Harness (dsh) erklärt: DeepSeeks Open-Source-Agent-Harness, Desktop-App und CLI, Installation, Preise der DeepSeek-API, Plugins und Super-Agent sowie der Vergleich mit Claude Code, Codex und OpenCode.",
  },
  breadcrumb: "Anleitung zu DeepSeek Harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Harness: was es ist, wie du es installierst und wie es sich schlägt",
    lead: "DeepSeek Harness (`dsh`) ist DeepSeeks quelloffenes Agent-Harness: eine App, die KI-Agenten für Alltagsaufgaben, Coding, Recherche und Hintergrundarbeit ausführt und so gebaut ist, dass fast alles, von den Tools bis zur Oberfläche, ein Plugin ist. Es steht unter der MIT-Lizenz, ist in der Developer Preview und gehört zu den Repositories mit den meisten Sternen auf GitHub; die Suchanfragen danach sind gestiegen, seit DeepSeeks Super-agent-Prototyp am 31. Oktober 2026 erschienen ist. Diese Anleitung erklärt, was es ist, die Desktop-App und die CLI, die Installation, die Kosten, die wichtigsten Funktionen und wie es sich mit Claude Code, Codex und OpenCode vergleicht.",
    cta: "Loslegen",
    secondary: "Direkt zur Installation",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness auf einen Blick",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["Entwickelt von", "DeepSeek AI"],
        ["Was es ist", "Ein quelloffenes Agent-Harness mit einer „Alles ist ein Plugin“-Architektur, gebaut auf dem Framework Cordis"],
        ["Lizenz", "MIT; rund 275.000 GitHub-Sterne am 6. November 2026"],
        ["Status", "Developer Preview; DeepSeek warnt vor Änderungen, die die Kompatibilität brechen, und alle Releases sind als Prerelease markiert (zuletzt v0.2.2-rc.1 vom 4. November 2026)"],
        ["Nutzungsarten", "Desktop-App (macOS mit Apple silicon, Windows x64), Web-Oberfläche (`dsh web`), Headless-CLI, ACP- und SDK-Modus"],
        ["Standardmodelle", "`deepseek-flash` (DeepSeek-V4.1-Flash) und `deepseek-v4-pro`, jeweils mit einem Kontext von 1.048.576 Tokens"],
        ["Weitere Anbieter", "Anthropic, OpenAI, Kimi, GLM oder jeder OpenAI- oder Anthropic-kompatible Endpoint, auch ein selbst gehosteter Server"],
        ["Preis", "Kostenlose Software; du bezahlst die Nutzung der DeepSeek-API (oder eines anderen Anbieters)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So installierst und nutzt du DeepSeek Harness",
      steps: [
        {
          title: "Desktop oder Web wählen",
          text: "Lade die Desktop-App von deepseek.com/en/harness für macOS (Apple silicon) oder Windows (64 Bit) herunter; unter macOS kann sie auch einen `dsh`-Befehl installieren. Auf jedem Rechner mit Node.js startest du die Web-Oberfläche mit npx oder baust aus dem Quellcode.",
          code: install,
        },
        {
          title: "Anmelden oder einen API-Key hinzufügen",
          text: "Melde dich beim ersten Start entweder im Browser mit deinem DeepSeek-Konto an oder füge unter Settings → Models (Einstellungen → Modelle) einen API-Key von platform.deepseek.com ein. Keys werden in `~/.dsh/.credentials.yaml` (`$DSH_HOME`) gespeichert.",
        },
        {
          title: "Projektanweisungen mitgeben",
          text: "DeepSeek Harness liest `AGENTS.md` oder `CLAUDE.md` in deinem Projekt (dazu die `.local.md`-Varianten) sowie eine globale `~/.dsh/AGENTS.md`. Anweisungen, die du schon für Claude Code oder Codex geschrieben hast, funktionieren weiter; siehe die [CLAUDE.md-Anleitung](/blog/claude-md) und die [Anleitung zu Codex AGENTS.md](/blog/codex-agents-md).",
        },
        {
          title: "Festlegen, wie viel es darf",
          text: "Wähle einen Sandbox-Modus (`read-only`, `workspace-write` oder `danger-full-access`) und eine Freigaberichtlinie (`ask` oder `never`). Laut DeepSeeks Sicherheitshinweisen ist das Harness experimentell, wurde keinem Sicherheitsaudit unterzogen und die Sandbox garantiert keine Isolation; starte bei Code, der dir wichtig ist, also mit read-only.",
        },
        {
          title: "Aufgaben headless ausführen und Plugins hinzufügen",
          text: "Nutze `dsh headless` für einmalige Aufgaben in Skripten, `--resume` oder `--session-id`, um eine Session fortzusetzen, und `dsh plugin`, um Plugins wie geplante Aufgaben, Subagenten oder Agent-Teams hinzuzufügen.",
          code: headless,
        },
      ],
      source: { label: "Quelle: Repository und Dokumentation von DeepSeek Harness", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek Harness Preise: was der Betrieb kostet",
      text: [
        "Das Harness ist kostenlos und quelloffen. Die Nutzung rechnet die DeepSeek-API zu diesen Preisen ab, in US-Dollar pro Million Tokens (api-docs.deepseek.com, 6. November 2026). Die Nebenzeit-Preise sind halb so hoch wie die Spitzenzeit-Preise; Spitzenzeiten sind werktags 01:00–04:00 und 06:00–10:00 UTC, ausgenommen chinesische Feiertage. DeepSeek dokumentiert kein Gratiskontingent, „kostenlos nutzen“ heißt in der Praxis also: kostenlose Software plus das API-Guthaben, das du hast.",
      ],
      headers: ["Pro 1 Mio. Tokens", "deepseek-flash, Spitzenzeit", "deepseek-flash, Nebenzeit", "deepseek-v4-pro, Spitzenzeit", "deepseek-v4-pro, Nebenzeit"],
      rows: [
        ["Input, Cache-Treffer", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Input, Cache-Fehlschlag", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Output", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Die wichtigsten Funktionen",
      points: [
        "Plugins für alles: Tools, Modelle, Oberflächen und Verhalten sind Plugins; du installierst sie pro Profil oder lässt dir eines im Chat bauen („Creator mode“, der Erstellermodus). Community-Plugins nutzen das GitHub-Topic `dsh-plugin`.",
        "Zu den offiziellen und experimentellen Plugins, die DeepSeek auflistet, gehören Agent-Teams, ein Review für automatische Freigaben, geplante Aufgaben, Spracheingabe, ein Terminal, eine Agent-Schleife und Subagenten.",
        "Skills (`SKILL.md`-Ordner), MCP-Server und Hooks, darunter eine experimentelle Brücke, die bestehende Claude-Code-Hooks ausführt.",
        "Subagenten im selben Prozess oder gestützt auf ACP, Codex, Claude Code oder ein weiteres Harness.",
        "Fortsetzbare Sessions, Compaction, ein Headless-Modus mit JSON-Events und ein SDK, um darauf aufzubauen.",
        "Der Super-agent: Ein separates MIT-Bundle, dsh-superagent, lässt das Harness proaktiv in einem GitHub-Repository arbeiten; DeepSeek nennt es einen Forschungsprototyp. Siehe [DeepSeek Super-Agent erklärt](/blog/deepseek-super-agent).",
        "Das oft damit verlinkte Paper \"A Programming Paradigm for Spatiotemporal Composability\" (arXiv, August 2026) beschreibt Cordis, das zugrunde liegende Framework, nicht das Harness selbst.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "DeepSeek veröffentlicht keinen Vergleich; dies ist unsere Lesart der jeweiligen Dokumentation, Stand 6. November 2026. DeepSeek dokumentiert außerdem, wie du seine Modelle in Claude Code, Codex und OpenCode nutzt, du kannst also kombinieren.",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["Entwickelt von", "DeepSeek", "Anthropic", "OpenAI", "Anomaly (Open Source)"],
        ["Lizenz", "MIT", "Proprietär", "CLI Apache-2.0", "MIT"],
        ["Bezahlung", "Nutzung der DeepSeek-API (oder anderer Anbieter)", "Claude-Plan ab $20/Monat oder API", "ChatGPT-Plan (ab Free) oder API", "Deine API-Keys oder Anmeldung mit Copilot oder ChatGPT"],
        ["Oberflächen", "Desktop (macOS, Windows), Web-Oberfläche, Headless-CLI", "Terminal, IDEs, Desktop, Web, Mobil", "CLI, IDE, Desktop, Web, Mobil", "Terminal, Desktop, IDE, Web"],
        ["Anweisungsdatei", "AGENTS.md oder CLAUDE.md", "CLAUDE.md (AGENTS.md als Fallback)", "AGENTS.md", "AGENTS.md"],
        ["Erweiterbarkeit", "Plugins für alles, Skills, MCP, Hooks", "Skills, Plugins, MCP, Hooks", "Skills, Plugins, MCP, Hooks", "Plugins, MCP"],
        ["Reifegrad", "Developer Preview, Breaking Changes zu erwarten", "Allgemein verfügbar", "Allgemein verfügbar", "Aktives Open-Source-Projekt"],
      ],
    },
    {
      kind: "text",
      title: "Häufig gesuchte Fragen",
      points: [
        "Linux: Einen Linux-Desktop-Download gibt es noch nicht; unter Linux startest du die Web-Oberfläche mit `npx @deepseek-ai/dsh web` oder baust aus dem Quellcode.",
        "VS Code: DeepSeek liefert keine VS-Code-Erweiterung; nutze die Desktop- oder Web-Oberfläche neben deinem Editor oder DeepSeek-Modelle in einem Editor-Agenten, den DeepSeek dokumentiert, etwa Claude Code oder Codex.",
        "Ollama und lokale Modelle: nicht dokumentiert. Das Harness akzeptiert einen eigenen OpenAI- oder Anthropic-kompatiblen Endpoint für einen selbst gehosteten Server; das ist der dokumentierte Weg zu eigenen Modellen.",
        "TUI: Standardmäßig ist keine Terminal-Oberfläche dabei; ein eigenes Profil oder das experimentelle Terminal-Plugin sind die dokumentierten Optionen.",
        "Paper: siehe das Cordis-Paper oben; DeepSeek bittet, das Harness selbst als \"DeepSeek Harness: Everything is a Plugin\" zu zitieren.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib DeepSeek Harness einen Job, nicht nur eine Aufgabe",
      text: [
        "Crewmark unterstützt DeepSeek Harness neben Claude Code, Codex und OpenCode. Es macht aus einer Session einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem gemeinsamen Board nimmt.",
      ],
      steps: [
        {
          title: "DeepSeek Harness als Agenten wählen",
          text: "Führe den Einrichtungsbefehl in deinem Projekt aus; der Mitarbeiter läuft in einer DeepSeek-Harness-Session auf deinem Rechner, abgerechnet über dein DeepSeek-API-Konto.",
        },
        {
          title: "Rolle und Ziel vergeben",
          text: "Ein Softwareentwickler, ein SEO-Spezialist, ein Growth Marketer: jeder mit einer Zahl, die er bewegen soll. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "Während der Arbeitszeit wacht er alle 15, 30 oder 60 Minuten auf, nimmt das nächste Issue und schreibt dir, wenn er eine Entscheidung braucht. Vergleiche die Ansätze unter [Was ist ein Superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek Harness installieren und nutzen" },
  mid: {
    title: "Du nutzt DeepSeek Harness? Bring es aufs Board.",
    text: "Crewmark weckt DeepSeek Harness, Claude Code oder Codex per Heartbeat, mit einer Rolle, einem Ziel und einem Board voller Issues.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu DeepSeek Harness",
    items: [
      {
        q: "Was ist DeepSeek Harness?",
        a: "Ein quelloffenes Agent-Harness von DeepSeek AI (`dsh`, MIT-Lizenz) für Alltagsaufgaben, Coding, Recherche und Hintergrundarbeit, aufgebaut rund um Plugins. Es ist in der Developer Preview.",
      },
      {
        q: "Ist DeepSeek Harness kostenlos?",
        a: "Die Software ist kostenlos und quelloffen. Im Betrieb nutzt sie eine Modell-API, standardmäßig die von DeepSeek, abgerechnet pro Token; DeepSeek dokumentiert kein Gratiskontingent.",
      },
      {
        q: "Wie installiere ich DeepSeek Harness?",
        a: "Lade die Desktop-App für macOS (Apple silicon) oder Windows von deepseek.com/en/harness herunter, oder führe mit Node.js `npx @deepseek-ai/dsh web` aus und öffne http://127.0.0.1:3080.",
      },
      {
        q: "Läuft DeepSeek Harness unter Linux?",
        a: "Einen Linux-Desktop-Download gibt es nicht, aber Web-Oberfläche und CLI laufen unter Linux über npx oder einen Build aus dem Quellcode.",
      },
      {
        q: "DeepSeek Harness vs Claude Code: Was ist besser?",
        a: "Sie passen zu unterschiedlichen Bedürfnissen. DeepSeek Harness ist quelloffen, mit DeepSeeks Modellen günstig pro Token und über Plugins erweiterbar, aber in der Developer Preview. Claude Code ist ein ausgereiftes Produkt, das in den Claude-Plänen enthalten ist. DeepSeeks Modelle laufen auch in Claude Code.",
      },
      {
        q: "Kann DeepSeek Harness Claude- oder GPT-Modelle nutzen?",
        a: "Ja. Es hat eingebaute Anbieter für Anthropic, OpenAI, Kimi und GLM und akzeptiert jeden OpenAI- oder Anthropic-kompatiblen Endpoint.",
      },
      {
        q: "Was ist der DeepSeek Super Agent?",
        a: "dsh-superagent, ein Forschungsprototyp-Bundle für DeepSeek Harness, veröffentlicht am 31. Oktober 2026, das es proaktiv in einem GitHub-Repository arbeiten lässt. Siehe [DeepSeek Super-Agent erklärt](/blog/deepseek-super-agent).",
      },
    ],
  },
  cta: {
    title: "Mach DeepSeek Harness zu einem KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions in DeepSeek Harness, Claude Code, Codex und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit deepseek.com, dem Repository deepseek-ai/deepseek-harness, DeepSeeks API-Dokumentation und arXiv abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu DeepSeek, Anthropic oder OpenAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
