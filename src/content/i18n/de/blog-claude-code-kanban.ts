import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Kanban-Board: Aufgaben und Tools | Crewmark AI",
    description:
      "Claude Code hat eine Aufgabenliste (Ctrl+T), aber kein Kanban-Board. Wie die Aufgabenliste funktioniert, wie du sie auf ein Board bringst und die Kanban-Tools für Claude-Code-Sessions: claude-code-kanban, Kanban Code, Claudine, Vibe Kanban und Crewmark.",
  },
  breadcrumb: "Claude Code Kanban-Board",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Kanban-Board: von der Aufgabenliste zum echten Board",
    lead: "Claude Code bringt kein Kanban-Board mit. Es hat eine Aufgabenliste: eine Checkliste, die Claude für mehrstufige Arbeit schreibt, mit offenen, laufenden und erledigten Aufgaben, ein- und ausgeblendet mit Ctrl+T. Ein „Claude Code Kanban-Board“ ist eins von zwei Dingen, die darauf aufbauen: ein Board, das diese Aufgabenliste in deinem Browser zeigt, oder ein Board, auf dem jede Karte eine ganze Claude-Code-Session oder ein ganzes Issue ist. Dieser Guide behandelt die eingebaute Aufgabenliste, die Einrichtung eines Boards und die Tools für beide Arten.",
    cta: "Loslegen",
    secondary: "Board einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Code mitbringt: die Aufgabenliste",
      text: [
        "Die Aufgabenliste ist Claudes eigene Checkliste für die anstehende Arbeit. Sie ist nicht die Ansicht der Hintergrundaufgaben: `/tasks` zeigt stattdessen laufende Shells und Subagenten.",
      ],
      points: [
        "Drück `Ctrl+T`, um sie ein- oder auszublenden. Sie zeigt bis zu fünf Aufgaben gleichzeitig.",
        "Aufgaben überstehen die Kontextkomprimierung, sodass Claude bei langen Jobs seinen Plan behält.",
        "Bitte Claude um \"show me all tasks\" oder \"clear all tasks\".",
        "Setz `CLAUDE_CODE_TASK_LIST_ID`, um eine Liste über mehrere Sessions zu teilen; sie liegt in einem benannten Verzeichnis unter `~/.claude/tasks/`.",
        "Die Aufgaben-Tools sind bei Opus 4.7, Sonnet 4.6, Haiku 4.5 und älteren Modellen standardmäßig aktiv. Bei anderen Modellen bleibt die Liste leer, außer du setzt `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So bringst du die Aufgaben von Claude Code auf ein Kanban-Board",
      text: [
        "Wir nutzen claude-code-kanban, ein Open-Source-Board, das die Aufgabendateien von Claude Code beobachtet und in deinem Browser anzeigt.",
      ],
      steps: [
        {
          title: "Prüf, ob die Aufgaben-Tools aktiv sind",
          text: "Wenn Claude mit `Ctrl+T` nie eine Checkliste zeigt, hat dein Modell die Aufgaben-Tools nicht standardmäßig. Füg die Umgebungsvariable zu deinen Einstellungen hinzu und starte Claude Code neu.",
          code: setup,
        },
        {
          title: "Installier das Board und seine Hooks",
          text: "`claude-code-kanban --install` fügt ein Claude-Code-Plugin mit Hooks hinzu. Ohne die Hooks zeigt das Board nur Aufgaben, ohne Live-Aktivität und ohne wartende Rückfragen.",
        },
        {
          title: "Öffne es und arbeite weiter",
          text: "Die Karten wandern durch Pending, In Progress und Completed, während Claude arbeitet, und du kannst Claudes Rückfragen direkt auf dem Board beantworten. Es lauscht nur auf 127.0.0.1, ohne Login, also lass es auf deinem eigenen Rechner.",
        },
        {
          title: "Teil ein Board über mehrere Sessions",
          text: "Starte jede Session mit derselben Aufgabenlisten-ID, damit mehrere Claude-Code-Sessions eine einzige Liste lesen und aktualisieren.",
          code: shared,
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Interactive mode (Task list)", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Kanban-Tools für Claude Code im Vergleich",
      text: ["Angaben aus dem README oder Eintrag jedes Projekts vom 7. November 2026."],
      headers: ["Tool", "Was eine Karte ist", "Wo es läuft", "Agenten", "Lizenz"],
      rows: [
        ["claude-code-kanban", "Eine Aufgabe aus Claudes Aufgabenliste", "Browser, auf deinem Rechner", "Claude Code", "MIT"],
        ["Kanban Code", "Eine Claude-Code-Session mit eigenem Worktree; Spalten Backlog, In Progress, Waiting, In Review, Done", "App für macOS 26; Windows-App", "Claude Code", "Apache 2.0"],
        ["Claudine", "Eine Claude-Code- oder Codex-Unterhaltung, mit erkanntem Status, Branch und Fehlern", "VS-Code-Erweiterung", "Claude Code, Codex", "MIT"],
        ["Vibe Kanban", "Ein Issue, für das du einen Workspace startest; die Firma hat dichtgemacht, die App läuft lokal", "`npx vibe-kanban`", "Claude Code, Codex und viele mehr", "Apache 2.0"],
        ["Crewmark", "Ein Issue, das ein KI-Mitarbeiter per Heartbeat selbst übernimmt", "Gehostetes Web-Board, mit einem Team geteilt", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Kommerziell"],
      ],
    },
    {
      kind: "text",
      title: "Welche Art Board du brauchst",
      points: [
        "Du willst den Plan einer Session verfolgen: Claude Codes eigene Aufgabenliste (`Ctrl+T`) reicht vielleicht schon; nimm claude-code-kanban dazu, um sie größer im Browser zu sehen.",
        "Du lässt mehrere Sessions parallel laufen und verlierst den Überblick, welche dich braucht: Ein Session-Board wie Kanban Code oder Claudine zeigt, welche arbeiten, warten oder bereit zum Review sind. Siehe [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents) und den [Worktree-Guide](/blog/claude-code-worktree).",
        "Du warst bei Vibe Kanban: siehe [Vibe-Kanban-Alternativen](/blog/vibe-kanban-alternatives).",
        "Du willst, dass das Board die Arbeit steuert, sodass Agenten ohne dich die nächste Karte übernehmen: Genau dafür ist Crewmark da (unten).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Kanban-Board, auf dem Claude Code die nächste Karte selbst übernimmt",
      text: [
        "Alle Tools oben zeigen dir, was Claude gerade tut; du startest trotzdem jede Session und verschiebst jede Karte. Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten. Er wacht per Heartbeat auf, übernimmt das nächste Issue von einem gemeinsamen Board, kommentiert laufend und schreibt dir, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Verbinde dein Projekt und deinen Agenten",
          text: "Führ den Einrichtungsbefehl im Repository aus; der Mitarbeiter arbeitet in seiner eigenen Session und seinem eigenen Checkout, mit dem Abo, für das du schon zahlst.",
        },
        {
          title: "Füll das Board",
          text: "Schreib Issues so, wie du es für eine Teamkollegin oder einen Teamkollegen tun würdest, und weise sie zu oder lass sie offen für den, der gerade frei ist.",
        },
        {
          title: "Review statt Starten",
          text: "Alle 15, 30 oder 60 Minuten während der Arbeitszeiten übernimmt der Mitarbeiter die nächste Karte. Lies, [wie du Claude Code proaktiv machst](/proactive-claude-code) und [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Die Aufgaben von Claude Code auf ein Kanban-Board bringen" },
  mid: {
    title: "Hör auf, die Karten selbst zu verschieben.",
    text: "Das Board von Crewmark weist Issues Claude-Code- und Codex-Mitarbeitern zu, die per Heartbeat aufwachen und das nächste übernehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Kanban in Claude Code",
    items: [
      {
        q: "Hat Claude Code ein Kanban-Board?",
        a: "Nein. Es hat eine Aufgabenliste, eine Checkliste mit offenen, laufenden und erledigten Einträgen, die du mit Ctrl+T ein- und ausblendest. Kanban-Boards für Claude Code sind Tools von Drittanbietern, die auf seinen Aufgaben- oder Session-Dateien aufbauen.",
      },
      {
        q: "Wie sehe ich die Aufgabenliste von Claude Code?",
        a: "Drück Ctrl+T in einer Session. Sie zeigt bis zu fünf Aufgaben; bitte Claude um \"show me all tasks\" für die vollständige Liste. Für laufende Shells und Subagenten nimm stattdessen /tasks.",
      },
      {
        q: "Warum ist meine Aufgabenliste in Claude Code leer?",
        a: "Entweder hat Claude noch keine mehrstufige Arbeit geplant, oder dein Modell hat die Aufgaben-Tools nicht standardmäßig. Setz CLAUDE_CODE_ENABLE_TODO_TOOLS=1 in deiner Umgebung oder deinen Einstellungen und starte neu.",
      },
      {
        q: "Können mehrere Claude-Code-Sessions eine Aufgabenliste teilen?",
        a: "Ja. Starte jede mit derselben CLAUDE_CODE_TASK_LIST_ID, zum Beispiel CLAUDE_CODE_TASK_LIST_ID=my-project claude; die Liste liegt unter ~/.claude/tasks/.",
      },
      {
        q: "Gibt es ein Kanban-Plugin für Claude Code?",
        a: "claude-code-kanban installiert ein Claude-Code-Plugin mit Hooks, die sein Browser-Board speisen. Claudine ist eine VS-Code-Erweiterung, und Kanban Code ist eine Desktop-App.",
      },
      {
        q: "Gibt es ein Kanban-Board für Claude Code und Codex zusammen?",
        a: "Claudine liest sowohl Claude-Code- als auch Codex-Unterhaltungen. Vibe Kanban unterstützt viele Agenten, aber die Firma dahinter hat dichtgemacht. Das Board von Crewmark weist Issues Mitarbeitern in Claude Code, Codex, DeepSeek Harness und OpenCode zu.",
      },
    ],
  },
  cta: {
    title: "Mach aus deinem Claude-Code-Board ein Team, das es abarbeitet.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit der Claude-Code-Dokumentation (Interactive mode) und dem README oder Eintrag jedes Tools abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder den hier genannten Projekten und wird von ihnen nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
