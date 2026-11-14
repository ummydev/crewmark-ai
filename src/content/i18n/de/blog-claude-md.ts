import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Befehle
- Installieren: pnpm install
- Eine einzelne Testdatei: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Konventionen
- Wirf Fehler mit den Helpern aus src/lib/errors.ts, nie mit rohen Strings.
- src/legacy/ ist weiterhin im Einsatz, aber übernimm seine Muster nicht.

# Stolperfallen
- Integrationstests brauchen DATABASE_URL (siehe .env.example).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- Jeder Handler validiert seine Eingabe mit dem Schema aus src/api/schemas/.`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md: Speicherorte, Best Practices und Vorlage",
    description:
      "So funktioniert CLAUDE.md in Claude Code: wo die Dateien liegen und in welcher Reihenfolge sie laden, Imports, Regeln, was hineingehört, eine Vorlage und das Verhältnis zu AGENTS.md.",
  },
  breadcrumb: "CLAUDE.md-Anleitung",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "CLAUDE.md: wohin damit, was hineingehört und wie es mit AGENTS.md zusammenspielt",
    lead: "CLAUDE.md ist eine Markdown-Datei mit Anweisungen, die Claude Code zu Beginn jeder Session liest: die auszuführenden Befehle, die einzuhaltenden Konventionen und die Stolperfallen in deinem Projekt. Diese Anleitung behandelt alle Orte, an denen eine CLAUDE.md liegen kann, und die Reihenfolge, in der sie laden, Imports und Regeldateien, was hineingehört und was nicht, eine kurze Vorlage und das Verhältnis zu AGENTS.md.",
    cta: "Loslegen",
    secondary: "Direkt zur Vorlage",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was CLAUDE.md ist",
      text: [
        "Claude Code startet jede Session ohne Erinnerung an die letzte. Mit CLAUDE.md gibst du ihm den Kontext, den ein neuer Kollege bräuchte: Die Datei wird beim Start gelesen und nach dem System-Prompt als Nachricht an Claude gesendet. Sie ist damit Kontext, keine erzwungene Konfiguration. Claude hält sich meistens daran, doch was immer oder nie passieren muss, gehört in Hooks oder Berechtigungsregeln.",
      ],
      points: [
        "Reines Markdown, keine Pflichtfelder: Überschriften und kurze Stichpunkte funktionieren am besten.",
        "Dateien werden kombiniert, nicht überschrieben: Jede zutreffende CLAUDE.md wird geladen, bei widersprüchlichen Zeilen wählt Claude eine aus.",
        "Prüfe mit `/context all` unter Memory files, was geladen wurde.",
      ],
    },
    {
      kind: "table",
      title: "Wo CLAUDE.md-Dateien liegen und in welcher Reihenfolge sie laden",
      text: [
        "Claude Code lädt sie vom Allgemeinsten zum Spezifischsten, sodass die Datei, die dem Startort am nächsten liegt, zuletzt gelesen wird. Außerdem geht es von deinem Arbeitsverzeichnis aus nach oben und lädt die CLAUDE.md jedes übergeordneten Verzeichnisses.",
      ],
      headers: ["Geltungsbereich", "Speicherort", "Wofür"],
      rows: [
        ["Verwaltete Richtlinie", "`/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS), `/etc/claude-code/CLAUDE.md` (Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md` (Windows)", "Regeln, die eine Organisation für alle Entwickler festlegt"],
        ["Benutzer", "`~/.claude/CLAUDE.md`", "Deine eigenen Vorlieben in jedem Projekt"],
        ["Projekt", "`./CLAUDE.md` oder `./.claude/CLAUDE.md`", "Die Anweisungen des Teams, in git eingecheckt"],
        ["Lokal", "`./CLAUDE.local.md`", "Deine Notizen zu einem Projekt; in die .gitignore eintragen"],
        ["Unterverzeichnis", "`some/dir/CLAUDE.md`", "Wird nur geladen, wenn Claude eine Datei in diesem Verzeichnis liest oder bearbeitet"],
        ["Regeln", "`.claude/rules/*.md` und `~/.claude/rules/`", "Themendateien; mit einem `paths`-Glob laden sie nur für passende Dateien"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So schreibst du eine CLAUDE.md, die funktioniert",
      steps: [
        {
          title: "Starte mit /init",
          text: "Führe `/init` in deinem Projekt aus. Claude Code liest die Codebasis und schreibt eine erste CLAUDE.md; gibt es schon eine, schlägt es Verbesserungen vor, statt sie zu überschreiben. Auch `.cursorrules` und Copilot-Anweisungen übernimmt es.",
        },
        {
          title: "Beschränke dich auf das, was Claude nicht selbst findet",
          text: "Behalte die exakten Build-, Test- und Lint-Befehle (auch, wie man einen einzelnen Test ausführt), die Stellen, an denen der Code in die Irre führt, Entscheidungen, die nirgends aufgeschrieben sind, und alles, was du zweimal korrigieren musstest. Entferne Dateibäume und Architektur, die Claude aus dem Repository lesen kann. Anthropic empfiehlt, unter 200 Zeilen zu bleiben.",
          code: example,
        },
        {
          title: "Sei konkret, ohne zu schreien",
          text: "Schreibe \"Nutze 2 Leerzeichen Einrückung\", nicht \"Formatiere den Code ordentlich\". Laut aktueller Dokumentation sind IMPORTANT und GROSSBUCHSTABEN überholte Ratschläge: Sie lassen Claude eine Regel übertrieben anwenden. Wird eine Zeile immer wieder übersehen, kürze die Datei oder mache aus der Regel einen Hook.",
        },
        {
          title: "Teile sie mit Imports und Regeln auf",
          text: "`@path/to/file` importiert eine andere Datei (relativ zur importierenden Datei, bis zu vier Ebenen tief); ein `@` in Backticks bleibt wörtlich. Regeln, die nur für einen Teil der Codebasis gelten, kommen mit einem `paths`-Glob nach `.claude/rules/` und laden nur, wenn Claude passende Dateien anfasst.",
          code: rule,
        },
        {
          title: "Verlagere Abläufe in Skills",
          text: "Mehrstufige Abläufe, etwa wie man ein Release schneidet, gehören in einen Skill (`.claude/skills/<name>/SKILL.md`), der nur lädt, wenn er relevant ist. CLAUDE.md wird bei jeder Aufgabe gelesen, jede Zeile kostet also Aufmerksamkeit.",
        },
        {
          title: "Halte sie aktuell",
          text: "Ergänze eine Zeile, wenn Claude einen Fehler wiederholt oder ein Review etwas findet, und bearbeite die Datei mit `/memory` oder lass Claude sie aktualisieren. `/doctor` schlägt Kürzungen vor, wenn die Datei zu lang wird.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md vs. AGENTS.md",
      text: [
        "AGENTS.md ist ein offenes Format für Anweisungen an Coding-Agenten, das Codex, Cursor, Gemini CLI, der Coding-Agent von GitHub Copilot, opencode und viele andere nutzen. Claude Code liest es inzwischen auch, standardmäßig aber nur, wenn das Projekt keine CLAUDE.md hat.",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["Gelesen von", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode und weitere; Claude Code als Fallback"],
        ["Wann Claude Code es liest", "Immer", "Standardmäßig nur, wenn im Baum weder CLAUDE.md noch `.claude/CLAUDE.md` noch CLAUDE.local.md liegt; `/config` kann beide lesen"],
        ["Persönliche Datei", "`CLAUDE.local.md`", "Wird von Claude Code nicht gelesen (`AGENTS.override.md` gehört zu Codex)"],
        ["Imports", "`@path`, bis zu vier Ebenen", "Im Format nicht vorgesehen"],
        ["Pfadbezogene Regeln", "`.claude/rules/` mit `paths`", "Verschachtelte AGENTS.md-Dateien pro Verzeichnis"],
      ],
    },
    {
      kind: "text",
      title: "Eine Datei für Claude Code und Codex",
      text: [
        "Wenn dein Team beide Agenten nutzt, lege die gemeinsamen Anweisungen in AGENTS.md ab und lass CLAUDE.md sie importieren, mit den Claude-spezifischen Notizen darunter. Sie lädt nie doppelt. Ein Symlink (`ln -s AGENTS.md CLAUDE.md`) funktioniert auch, aber nicht für Kollegen unter Windows, und eine CLAUDE.md, die nur in Worten \"lies AGENTS.md\" sagt, ist nicht zuverlässig.",
      ],
      points: [
        "Das Repository dieser Website macht genau das: Seine CLAUDE.md besteht aus der einen Zeile `@AGENTS.md`.",
        "Codex liest AGENTS.md-Dateien vom Repository-Root bis zu deinem Arbeitsverzeichnis und begrenzt ihre Gesamtgröße standardmäßig auf 32 KiB.",
      ],
    },
    {
      kind: "text",
      title: "Grenzen und Stolperfallen",
      points: [
        "Eine CLAUDE.md, die beim Start lädt, wird bis 4 MiB komplett gelesen; eine größere Datei wird übersprungen.",
        "Dateien, die bei Bedarf laden, etwa CLAUDE.md-Dateien in Unterverzeichnissen und pfadbezogene Regeln, werden ab einem Limit pro Datei abgeschnitten (40.000 Zeichen bei einem Kontextfenster von 200K).",
        "Imports ordnen eine Datei, sparen aber keinen Kontext: Der importierte Text wird trotzdem geladen.",
        "Imports von außerhalb des Projekts fragen einmal nach Freigabe; HTML-Kommentare `<!-- -->` werden entfernt und kosten nichts.",
        "Die CLAUDE.md im Projekt-Root wird nach `/compact` erneut gelesen.",
        "\"Merk dir das\" landet im Auto Memory (`~/.claude/projects/<project>/memory/`), nicht in CLAUDE.md.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "CLAUDE.md sagt, wie gearbeitet wird. Crewmark sagt, woran und wann.",
      text: [
        "Eine gute CLAUDE.md lässt jede Claude-Code-Session informiert starten, aber die Session wartet trotzdem auf deine nächste Nachricht. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt.",
      ],
      steps: [
        {
          title: "Mach aus einer Session einen Mitarbeiter",
          text: "Wähle eine Rolle wie Softwareentwickler oder SEO-Spezialist, schreibe sein Ziel als Zahl und führe den Setup-Befehl in deinem Projekt aus, wo deine CLAUDE.md schon liegt.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Konversation auf; siehe [Claude Code proaktiv machen](/proactive-claude-code). Mehrere können sich ein Repository teilen, wie bei [mehreren Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Weise Issues zu und beantworte seine Nachrichten",
          text: "Lege Arbeit auf das Board; der Mitarbeiter übernimmt sie, kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Eine CLAUDE.md-Datei für Claude Code schreiben" },
  mid: {
    title: "Deine CLAUDE.md steht. Wer startet die nächste Aufgabe?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu CLAUDE.md",
    items: [
      {
        q: "Was ist CLAUDE.md?",
        a: "Eine Markdown-Datei mit Projektanweisungen, die Claude Code zu Beginn jeder Session liest, etwa Build- und Testbefehle, Konventionen und bekannte Stolperfallen. Sie ist Kontext für Claude, keine erzwungene Konfiguration.",
      },
      {
        q: "Wohin gehört CLAUDE.md?",
        a: "Für ein Team in den Projekt-Root als `./CLAUDE.md` oder `./.claude/CLAUDE.md`, in git eingecheckt. Für dich selbst gilt `~/.claude/CLAUDE.md` in jedem Projekt und `./CLAUDE.local.md` in einem. Unterverzeichnisse können eigene haben, die geladen werden, wenn Claude darin arbeitet.",
      },
      {
        q: "Wie lang sollte CLAUDE.md sein?",
        a: "Kurz. Anthropic empfiehlt unter 200 Zeilen pro Datei, weil jede Zeile bei jeder Aufgabe gelesen wird. Verlagere Abläufe in Skills und Regeln für einen Teil der Codebasis nach `.claude/rules/`.",
      },
      {
        q: "Liest Claude Code AGENTS.md?",
        a: "Ja, standardmäßig aber nur, wenn das Projekt keine CLAUDE.md hat. Um eine Datei zu teilen, setze `@AGENTS.md` an den Anfang von CLAUDE.md oder stelle die Option Project instructions in `/config` so ein, dass beide gelesen werden.",
      },
      {
        q: "CLAUDE.md oder AGENTS.md: was soll ich nehmen?",
        a: "Wenn nur Claude Code dein Repository liest, CLAUDE.md. Wenn Kollegen auch Codex, Cursor oder einen anderen Agenten nutzen, schreibe AGENTS.md und importiere sie aus einer CLAUDE.md, die die Claude-spezifischen Notizen ergänzt.",
      },
      {
        q: "Wie erstelle ich eine CLAUDE.md-Datei?",
        a: "Führe `/init` in Claude Code aus, um eine aus deiner Codebasis zu erzeugen, und kürze sie dann. Später bearbeitest du sie mit `/memory` oder indem du Claude bittest, eine Zeile zu ergänzen.",
      },
      {
        q: "Warum ignoriert Claude meine CLAUDE.md?",
        a: "Prüfe mit `/context all`, ob sie geladen wurde, suche nach Widersprüchen zwischen Dateien und kürze sie: Lange Dateien verwässern jede Regel. Was nie übersprungen werden darf, gehört in einen Hook oder eine Berechtigungsregel, nicht in CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Gib deinem gut informierten Claude Code eine Aufgabe.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 5. November 2026 mit der Claude-Code-Dokumentation, agents.md und der Codex-Dokumentation von OpenAI abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude und Claude Code sind Marken von Anthropic, Codex von OpenAI.",
};
