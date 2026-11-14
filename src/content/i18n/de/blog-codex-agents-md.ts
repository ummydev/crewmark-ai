import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex AGENTS.md: Speicherort, Ladereihenfolge, Beispiele",
    description:
      "So liest Codex AGENTS.md: die globale Datei in ~/.codex, Projekt- und Ordnerdateien, AGENTS.override.md, die Ladereihenfolge, das 32-KiB-Limit, Code-Review-Regeln und Beispiele.",
  },
  breadcrumb: "Anleitung zu Codex AGENTS.md",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex AGENTS.md: wohin damit, in welcher Reihenfolge sie lädt und was hineingehört",
    lead: "AGENTS.md ist die Anweisungsdatei, die Codex von OpenAI liest, bevor es irgendetwas tut: deine Build- und Testbefehle, Konventionen und Regeln, in einfachem Markdown. Codex kombiniert eine globale Datei in `~/.codex` mit Dateien aus deinem Repository, vom Root bis zu dem Ordner, in dem du arbeitest. Diese Anleitung behandelt alle Speicherorte, die genaue Ladereihenfolge und das Größenlimit, Overrides, Ausweich-Dateinamen, Code-Review-Regeln und Beispiele zum Kopieren.",
    cta: "Loslegen",
    secondary: "Zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Wo Codex nach AGENTS.md sucht, in Ladereihenfolge",
      text: [
        "Codex baut die Anweisungskette einmal beim Start auf (in der Terminal-Oberfläche einmal pro Session). Die Dateien werden von oben nach unten in dieser Tabelle zusammengefügt, sodass Anweisungen näher an deinem Arbeitsverzeichnis später kommen und gewinnen.",
      ],
      headers: ["Reihenfolge", "Speicherort", "Was Codex liest"],
      rows: [
        ["1. Global", "`~/.codex/` (oder `$CODEX_HOME`)", "`AGENTS.override.md`, falls vorhanden, sonst `AGENTS.md`; nur die erste nicht leere"],
        ["2. Projekt-Root", "Meist der Git-Root", "`AGENTS.override.md`, sonst `AGENTS.md`, sonst ein Ausweich-Dateiname; höchstens eine Datei"],
        ["3. Jeder Ordner darunter", "Jedes Verzeichnis vom Root bis dorthin, wo du Codex gestartet hast", "Dieselbe Prüfung in jedem Verzeichnis, je eine Datei"],
        ["Ende", "Dein aktuelles Verzeichnis", "Ordner darunter werden nicht gelesen"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du AGENTS.md für Codex ein",
      steps: [
        {
          title: "Leg globale Standards an",
          text: "Führe `mkdir -p ~/.codex` aus und schreibe in `~/.codex/AGENTS.md` die Vorlieben, die in jedem Repository gelten sollen. Ob sie geladen wurde, prüfst du, indem du Codex bittest, seine Anweisungen zusammenzufassen.",
          code: global,
        },
        {
          title: "Füge eine Projektdatei hinzu und Overrides, wo Teams abweichen",
          text: "Leg eine `AGENTS.md` in den Repository-Root für das gemeinsame Setup. In einem Ordner mit anderen Regeln fügst du `AGENTS.override.md` hinzu: Sie ersetzt die `AGENTS.md` dieses Ordners, die Codex dann ignoriert.",
          code: project,
        },
        {
          title: "Prüfe, was geladen wurde",
          text: "Starte Codex in dem Ordner, um den es geht, zum Beispiel mit `codex --cd services/payments`, und bitte es, die geladenen Anweisungsquellen aufzulisten. Es sollte die globale Datei nennen, dann die Root-Datei, dann die Datei des Ordners.",
        },
        {
          title: "Nutze einen vorhandenen Dateinamen oder heb das Limit an",
          text: "Wenn dein Repository Anweisungen schon in einer anderen Datei hält, trag sie in `project_doc_fallback_filenames` in `~/.codex/config.toml` ein. Codex fügt keine weiteren Dateien hinzu, sobald die Gesamtgröße `project_doc_max_bytes` erreicht, standardmäßig 32 KiB.",
          code: config,
        },
        {
          title: "Füge Regeln für das Code Review von Codex hinzu",
          text: "Für `@codex review` auf GitHub fügst du der AGENTS.md, die dem betreffenden Code am nächsten liegt, einen Abschnitt `## Code Review Rules` hinzu. Schreib, was markiert werden soll und was die sichere Alternative ist; Formatierung und Lint überlässt du der CI.",
          code: review,
        },
      ],
      source: { label: "Quelle: Codex-Dokumentation, Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "Best Practices für AGENTS.md",
      points: [
        "Beschränke dich auf das, was Codex nicht selbst herausfindet: exakte Build-, Test- und Lint-Befehle (auch, wie man einen einzelnen Test ausführt), Stolperfallen im Code und Entscheidungen, die nirgends aufgeschrieben sind.",
        "Leg die spezifischsten Regeln nah an den Code: Eine verschachtelte AGENTS.md in `services/payments/` ist besser als eine lange Root-Datei mit einem Payments-Abschnitt.",
        "Behalte das 32-KiB-Budget im Blick: Dateien werden vom Root abwärts hinzugefügt und der Rest abgeschnitten, also teile lange Dateien in verschachtelte auf oder heb `project_doc_max_bytes` an.",
        "Nutze `AGENTS.override.md` für vorübergehende Änderungen, global oder in einem Ordner, und lösche sie, um zurückzukehren.",
        "Eine leere AGENTS.md wird übersprungen, und die Suche in diesem Verzeichnis geht zum nächsten Dateinamen weiter.",
        "Nutze für Automatisierungs-Benutzer ein eigenes `CODEX_HOME`, damit sich ihre globalen Anweisungen nicht mit deinen vermischen.",
      ],
    },
    {
      kind: "table",
      title: "AGENTS.md in Codex vs Claude Code und andere",
      text: [
        "AGENTS.md ist ein offenes Format, das viele Agenten lesen, und damit der beste Ort für Anweisungen, die du teilen willst. Claude Code hat eine eigene Datei, CLAUDE.md; Details findest du in der [CLAUDE.md-Anleitung](/blog/claude-md).",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["Hauptdatei", "`AGENTS.md`", "`CLAUDE.md`; liest `AGENTS.md` nur, wenn es keine CLAUDE.md gibt"],
        ["Persönliche oder temporäre Datei", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["Globale Datei", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["Verschachtelte Ordner", "Vom Root bis zum aktuellen Verzeichnis", "Übergeordnete beim Start; Unterordner, wenn Claude darin arbeitet"],
        ["Größenlimit", "Standardmäßig zusammen 32 KiB", "Limits pro Datei; am besten unter 200 Zeilen"],
        ["Eine Datei teilen", "Nativ", "Setze `@AGENTS.md` an den Anfang von CLAUDE.md"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "AGENTS.md sagt Codex, wie. Crewmark sagt, was als Nächstes kommt.",
      text: [
        "Eine gute AGENTS.md lässt jede Codex-Session informiert starten, aber die Session wartet trotzdem auf deinen Prompt. Crewmark macht aus einer Session von Codex, Claude Code, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt.",
      ],
      steps: [
        {
          title: "Lass AGENTS.md im Repository",
          text: "Die Codex-Session des Mitarbeiters liest sie genau wie deine, also kommen Konventionen und Testbefehle mit.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Konversation auf; siehe [Codex proaktiv machen](/proactive-codex).",
        },
        {
          title: "Misch Agenten auf einem Board",
          text: "Eine AGENTS.md kann Codex- und Claude-Code-Mitarbeiter nebeneinander bedienen; vergleiche beide in [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "AGENTS.md für Codex einrichten" },
  mid: {
    title: "Codex kennt deine Regeln. Wer gibt ihm die nächste Aufgabe?",
    text: "Crewmark weckt Codex per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem ChatGPT-Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Codex AGENTS.md",
    items: [
      {
        q: "Was ist AGENTS.md in Codex?",
        a: "Eine Markdown-Datei mit Anweisungen, die Codex vor jeder Arbeit liest: Befehle, Konventionen und Regeln für dein Projekt. Codex kombiniert eine globale Datei mit Dateien aus deinem Repository.",
      },
      {
        q: "Wo sucht Codex nach AGENTS.md?",
        a: "Zuerst in `~/.codex` (oder `$CODEX_HOME`), dann in jedem Verzeichnis vom Projekt-Root bis zu dem Ordner, in dem du Codex gestartet hast, wobei es pro Verzeichnis höchstens eine Datei liest.",
      },
      {
        q: "In welcher Reihenfolge werden AGENTS.md-Dateien geladen?",
        a: "Zuerst die globale, dann die im Projekt-Root, dann jeder verschachtelte Ordner bis zum aktuellen Verzeichnis. Sie werden in dieser Reihenfolge zusammengefügt, sodass die nächstgelegene Datei zuletzt kommt und Vorrang hat.",
      },
      {
        q: "Was ist AGENTS.override.md?",
        a: "Eine Datei, die Codex im selben Verzeichnis statt AGENTS.md liest, global oder in einem Ordner. Nutze sie für vorübergehende oder teamspezifische Regeln, ohne die gemeinsame Datei zu ändern.",
      },
      {
        q: "Gibt es ein Größenlimit für AGENTS.md?",
        a: "Ja: Codex fügt keine weiteren Dateien hinzu, sobald die Gesamtgröße `project_doc_max_bytes` erreicht, standardmäßig 32 KiB. Heb den Wert in `~/.codex/config.toml` an oder verteile die Anweisungen auf verschachtelte Dateien.",
      },
      {
        q: "Kann ich eine Datei für Codex und Claude Code nutzen?",
        a: "Ja. Halte gemeinsame Anweisungen in AGENTS.md und setze `@AGENTS.md` an den Anfang von CLAUDE.md, mit Notizen nur für Claude darunter.",
      },
      {
        q: "Liest das Code Review von Codex AGENTS.md?",
        a: "Ja. Füge der AGENTS.md, die dem Code am nächsten liegt, einen Abschnitt `## Code Review Rules` hinzu, und `@codex review` auf GitHub wendet ihn an.",
      },
    ],
  },
  cta: {
    title: "Gib deinem gut informierten Codex eine Aufgabe.",
    text: "Crewmark macht aus Sessions von Codex, Claude Code und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Codex-Dokumentation von OpenAI (Custom instructions with AGENTS.md) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu OpenAI oder Anthropic, die es auch nicht unterstützen. Codex ist eine Marke von OpenAI, Claude und Claude Code sind Marken von Anthropic.",
};
