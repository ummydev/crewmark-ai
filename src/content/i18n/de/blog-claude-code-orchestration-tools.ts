import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "Die besten Orchestrierungs-Tools für Claude Code 2026 | Crewmark",
    description:
      "Mehrere Claude-Code-Agenten gleichzeitig laufen lassen: die eingebauten Optionen (Subagents, Agent view, Agent teams, Workflows) und 10 Orchestrierungs-Tools im Vergleich, von Claude Squad und Orca bis Paperclip, Multica und Crewmark.",
  },
  breadcrumb: "Orchestrierungs-Tools für Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Die besten Orchestrierungs-Tools für Claude Code 2026",
    lead: "Claude Code orchestrieren heißt, mehrere Claude-Code-Agenten gleichzeitig laufen zu lassen und sie zu koordinieren: Jeder bekommt seine eigene Kopie des Codes, eine Aufgabe und einen Weg, Bericht zu erstatten. Vieles davon erledigt Claude Code inzwischen selbst, und eine Welle von Open-Source- und kommerziellen Tools setzt Oberflächen, Boards und Zeitpläne obendrauf. Dieser Guide zeigt zuerst die eingebauten Optionen und vergleicht dann zehn Tools nach Oberfläche, Isolation, unterstützten Agenten und der wichtigsten Frage: Fängt der Agent von selbst an zu arbeiten, oder wartet er auf dich?",
    cta: "Early Access anfragen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "In Claude Code eingebaut: fünf Wege, Agenten parallel laufen zu lassen",
      text: [
        "Bevor du irgendetwas installierst, prüfe, ob Claude Code deinen Fall schon abdeckt. Bei allen eingebauten Optionen sind die Worker Claude-Sessions; Worktrees geben jeder ihren eigenen Checkout (siehe den [Worktree-Guide](/blog/claude-code-worktree)).",
      ],
      headers: ["Option", "Was sie dir bringt", "Status"],
      rows: [
        ["Subagents", "Worker innerhalb einer Session, die eine Nebenaufgabe in ihrem eigenen Kontext erledigen und eine Zusammenfassung zurückgeben", "Verfügbar"],
        ["Agent view (`claude agents`)", "Ein Bildschirm, um Hintergrund-Sessions zu starten und zu überwachen und einzugreifen, wenn eine dich braucht", "Research Preview"],
        ["Agent teams (Agenten-Teams)", "Mehrere Sessions mit gemeinsamer Aufgabenliste und Nachrichten, gesteuert von einer Lead-Session", "Experimentell, standardmäßig aus"],
        ["Dynamic workflows (dynamische Workflows)", "Ein Skript, das viele Subagents startet und ihre Ergebnisse gegeneinander prüft", "Verfügbar"],
        ["Projects (Projekte)", "Eine fortlaufende Unterhaltung, die parallele Threads in der Cloud oder auf deinem Rechner startet", "Öffentliche Beta in Pro, Max und Ultra"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Orchestrierungs-Tools für Claude Code im Vergleich",
      text: [
        "Sterne und Lizenzen stammen von GitHub, Stand 6. November 2026. \"Startet von selbst\" heißt, dass das Tool einem Agenten seine nächste Aufgabe geben kann, ohne dass du einen Prompt tippst, über ein Board, einen Zeitplan oder einen Heartbeat.",
      ],
      headers: ["Tool", "Oberfläche", "Isolation", "Agenten", "Startet von selbst", "Lizenz, Sterne"],
      rows: [
        ["Claude Squad", "Terminal-UI (`cs`)", "tmux-Session und Git Worktree pro Agent", "Claude Code, Codex, Gemini, Aider und andere", "Nein", "AGPL-3.0, ~9k"],
        ["Orca", "Desktop, CLI, Mobil, Remote-Runtime", "Ein Worktree pro Agent", "Claude Code, Codex und andere, über deine Abos", "Nein; ein Orchestrator-Agent kann Arbeit aufteilen", "MIT, ~117k"],
        ["Ruflo (früher Claude Flow)", "Claude-Code-Plugins, CLI und MCP-Server", "Nicht angegeben", "Claude Code, Codex, MCP-Clients", "Nein; Schwärme, gestartet per Prompt oder Mission", "MIT, ~81k"],
        ["oh-my-claudecode", "Claude-Code-Plugin (`/autopilot`)", "Nicht angegeben", "Claude Code", "Nein; der Autopilot läuft, nachdem du ihn gestartet hast", "MIT, ~41k"],
        ["Vibe Kanban", "Web-UI mit Kanban-Board", "Ein Workspace und ein Branch pro Aufgabe", "Über 10, darunter Claude Code, Codex, Gemini CLI", "Nein; du startest einen Workspace pro Issue. Wird eingestellt, von der Community gepflegt", "Apache-2.0, ~29k"],
        ["opcode (früher Claudia)", "Desktop-GUI", "Getrennte Prozesse für Hintergrund-Agenten", "Claude Code", "Nein", "AGPL-3.0, ~22k"],
        ["CloudCLI (Claude Code UI)", "Web- und Mobil-UI", "Optionale Docker-Sandbox", "Claude Code, Codex, Cursor CLI, OpenCode", "Nein", "AGPL-3.0, ~15k"],
        ["Conductor", "Mac-App", "Ein Workspace und ein Branch pro Aufgabe", "Claude Code, Codex, Cursor, OpenCode", "Nein. Wechselt zu Meta; die Cloud wird am 20. November 2026 abgeschaltet", "Closed Source"],
        ["Paperclip", "Web-UI: eine \"KI-Firma\" mit Organigramm, Zielen und Budgets", "Optionale Worktrees und Sandboxes", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode und mehr", "Ja: geplante Heartbeats, dazu Zuweisungen und @-Erwähnungen", "MIT, ~111k"],
        ["Multica", "Web, Desktop, CLI und API", "Ein Daemon auf deinem Rechner", "Claude Code, Codex, Cursor, Copilot, OpenCode und mehr", "Ja: Agenten übernehmen zugewiesene Issues; Autopilots per Cron", "Multica License (Source-available), ~55k"],
        ["Crewmark", "Web-Board, CLI und ein Daemon auf deinem Rechner", "Jeder Mitarbeiter in eigener Session und eigenem Checkout", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Ja: Ein Heartbeat während der Arbeitszeiten nimmt das nächste Issue", "Early Access"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du ein Orchestrierungs-Tool für Claude Code aus",
      steps: [
        {
          title: "Probiere zuerst die eingebauten Optionen",
          text: "Für ein paar parallele Aufgaben, die du selbst startest, reichen `claude --worktree` und Agent view vielleicht schon. Eine große Änderung verteilt `/batch` oder ein Workflow auf Subagents.",
        },
        {
          title: "Wähle die Oberfläche, auf die du wirklich schaust",
          text: "Wer im Terminal lebt, greift meist zu Claude Squad; andere wollen eine Desktop-App (Orca, opcode) oder ein Web-Board (Vibe Kanban, Paperclip, Multica, Crewmark), das auch vom Handy aus funktioniert.",
        },
        {
          title: "Entscheide, wer die nächste Aufgabe startet",
          text: "Die meisten Tools beschleunigen Agenten, die du steuerst. Wenn die Agenten zwischen deinen Prompts weiterarbeiten sollen, such nach einem Board mit Zeitplan oder Heartbeat: Das können Paperclip, Multica und Crewmark.",
        },
        {
          title: "Prüfe Isolation und unterstützte Agenten",
          text: "Parallele Agenten brauchen getrennte Checkouts, meist Git Worktrees. Wenn dein Team Claude Code mit Codex oder OpenCode mischt, achte darauf, dass das Tool alle über eure bestehenden Abos betreibt.",
        },
        {
          title: "Prüfe, wie gesund das Projekt ist",
          text: "Schau dir Lizenz, letzte Commits und Status an: Die Firma hinter Vibe Kanban stellt es ein, Conductor wechselt zu Meta, und Crystal wurde durch eine neue App ersetzt.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "Anmerkungen zu jedem Tool",
      points: [
        "Claude Squad ([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)): eine Terminal-App, die jedem Agenten eine eigene tmux-Session und einen eigenen Git Worktree gibt; `--autoyes` bestätigt Prompts automatisch (experimentell).",
        "Orca ([stablyai/orca](https://github.com/stablyai/orca)): betreibt eine Flotte von Coding-Agenten mit deinen eigenen Abos auf dem Desktop, mobil oder auf einem entfernten Rechner.",
        "Ruflo ([ruvnet/ruflo](https://github.com/ruvnet/ruflo)): ein Agenten-Meta-Harness für Claude Code und Codex mit Schwärmen und Gedächtnis über Sessions hinweg; `ruvnet/claude-flow` leitet jetzt hierher weiter.",
        "oh-my-claudecode ([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)): ein Plugin mit gestuften Workflows für Planung, Umsetzung und QA innerhalb von Claude Code.",
        "Vibe Kanban ([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)): Plane Issues auf einem Board und starte für jedes einen Agenten-Workspace; laut README wird das Projekt eingestellt.",
        "opcode ([winfunc/opcode](https://github.com/winfunc/opcode)): eine Desktop-GUI für Claude Code mit eigenen Agenten, Session-Verlauf, Nutzungsstatistiken und Checkpoints.",
        "CloudCLI ([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)): eine Web- und Mobil-UI für deine Sessions mit Shell, Dateien und Git; eine kostenpflichtige Cloud-Version bietet gehostete Container.",
        "Conductor ([conductor.build](https://www.conductor.build)): Die Abschalttermine und wie du deine Arbeit umziehst, findest du unter [Conductor-Alternativen](/blog/conductor-alternatives).",
        "Paperclip ([paperclipai/paperclip](https://github.com/paperclipai/paperclip)) und Multica ([multica-ai/multica](https://github.com/multica-ai/multica)): am nächsten an KI-Mitarbeitern; siehe unsere Vergleiche mit [Paperclip](/alternatives/paperclip) und [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Orchestrierung, die weiterläuft, wenn du aufhörst zu tippen",
      text: [
        "Crewmark macht aus jeder Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem gemeinsamen Board nimmt.",
      ],
      steps: [
        {
          title: "Ein Mitarbeiter pro Job",
          text: "Ein Programmierer, ein Reviewer, ein SEO-Autor: Jeder hat seine eigene Session, seinen eigenen Checkout und ein Ziel, das als Zahl formuliert ist. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Ein Board statt eines Terminal-Rasters",
          text: "Weise Issues zu; jeder Mitarbeiter kommentiert, während er arbeitet, und schreibt dir, wenn er eine Entscheidung braucht.",
        },
        {
          title: "Ein Heartbeat statt deines nächsten Prompts",
          text: "Während seiner Arbeitszeiten wacht jeder Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ein Orchestrierungs-Tool für Claude Code auswählen" },
  mid: {
    title: "Fünf Agenten laufen, und du tippst immer noch jeden Prompt?",
    text: "Crewmark gibt jeder Claude-Code-Session eine Rolle, ein Ziel und einen Heartbeat, damit sie das nächste Issue ohne dich übernimmt.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zur Orchestrierung von Claude Code",
    items: [
      {
        q: "Was ist Claude-Code-Orchestrierung?",
        a: "Mehrere Claude-Code-Agenten gleichzeitig laufen lassen und koordinieren: getrennte Checkouts, getrennte Aufgaben und ein Weg zu sehen, was jeder tut, und die Ergebnisse zusammenzuführen.",
      },
      {
        q: "Kann Claude Code Agenten selbst orchestrieren?",
        a: "Ja. Subagents, Agent view, Agent teams (experimentell), Dynamic workflows und Projects sind eingebaut, und `--worktree` isoliert Sessions, die du selbst startest.",
      },
      {
        q: "Was ist das beste Orchestrierungs-Tool für Claude Code?",
        a: "Für einen Terminal-Workflow Claude Squad; für eine Flotte auf dem Desktop Orca; für Schwärme innerhalb von Claude Code Ruflo; für Agenten, die nach Zeitplan von einem Board aus weiterarbeiten, Paperclip, Multica oder Crewmark.",
      },
      {
        q: "Gibt es eine GUI, um Claude-Code-Agenten zu verwalten?",
        a: "Ja: Orca und opcode sind Desktop-Apps, Vibe Kanban, CloudCLI, Paperclip und Multica haben Web-Oberflächen, und die Desktop-App von Claude Code selbst führt parallele Sessions mit einem Worktree-Schalter aus.",
      },
      {
        q: "Bei welchen Tools fangen Agenten ohne Prompt an zu arbeiten?",
        a: "Von den hier verglichenen bei Paperclip (geplante Heartbeats), Multica (zugewiesene Issues und Autopilots per Cron) und Crewmark (ein Heartbeat während der Arbeitszeiten). Die übrigen betreiben Agenten, die du startest.",
      },
      {
        q: "Sind diese Tools kostenlos?",
        a: "Die meisten sind Open Source und kostenlos selbst zu hosten: MIT bei Orca, Ruflo, oh-my-claudecode und Paperclip, AGPL-3.0 bei Claude Squad, opcode und CloudCLI, Apache-2.0 bei Vibe Kanban. Multica nutzt eine eigene Source-available-Lizenz; Conductor ist Closed Source.",
      },
      {
        q: "Was nehme ich statt Conductor?",
        a: "Siehe [Conductor-Alternativen](/blog/conductor-alternatives): Das eingebaute `--worktree` von Claude Code und die Desktop-App decken das Wesentliche ab, und die Tools oben ergänzen Boards, Flotten oder Zeitpläne.",
      },
    ],
  },
  cta: {
    title: "Lass deine Claude-Code-Agenten ihre nächste Aufgabe selbst nehmen.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation, dem README oder der Website jedes Projekts und der GitHub-API abgeglichen.",
  disclaimer:
    "Crewmark ist eines der verglichenen Tools. Produktnamen sind Marken ihrer Inhaber; kein Projekt hat diese Seite geprüft oder unterstützt.",
};
