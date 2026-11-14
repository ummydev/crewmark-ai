import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-agent-teams; the English master is
// src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Agent Teams vs. Subagents: Einrichtung",
    description:
      "Claude Code Agent Teams erklärt nach der Doku: Unterschied zu Subagents, aktivieren und starten, Split-Panes in tmux und iTerm2, Teamgröße, Token-Kosten und Grenzen, mit Beispiel-Prompts.",
  },
  breadcrumb: "Claude Code Agent Teams",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Agent Teams vs. Subagents: wann du was nutzt und wie du ein Team aufsetzt",
    lead: "Mit Agent Teams wird eine Claude-Code-Session zum Team-Lead, der Teammates startet: separate Claude-Code-Instanzen mit jeweils eigenem Kontextfenster, die sich eine Aufgabenliste teilen und sich direkt Nachrichten schicken. Subagents sind leichter: Helfer innerhalb einer Session, die eine gezielte Aufgabe erledigen und eine Zusammenfassung zurückgeben. Agent Teams sind experimentell und standardmäßig aus. Dieser Guide vergleicht beides anhand der Anthropic-Doku und zeigt dann, wie du Teams einschaltest, eins startest, Teammates in tmux- oder iTerm2-Panes siehst und die typischen Probleme vermeidest.",
    cta: "Loslegen",
    secondary: "Team aufsetzen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent Teams vs. Subagents",
      text: [
        "Beide erledigen Arbeit parallel in getrennten Kontextfenstern. Der Unterschied liegt darin, wer koordiniert: Bei Subagents steuert der Hauptagent alles; in einem Team übernehmen Teammates Aufgaben aus einer gemeinsamen Liste und sprechen miteinander.",
      ],
      headers: ["", "Subagents", "Agent Teams"],
      rows: [
        ["Was sie sind", "Helfer innerhalb einer Session, definiert in `.claude/agents/` oder eingebaut (Explore, Plan, general-purpose)", "Eine leitende Session plus separate Claude-Code-Instanzen als Teammates"],
        ["Kontext", "Eigenes Kontextfenster; nur eine Zusammenfassung geht an den Aufrufer zurück", "Eigenes Kontextfenster; völlig unabhängig"],
        ["Kommunikation", "Geben ein Ergebnis an den Aufrufer zurück (benannte Subagents können sich Nachrichten schicken)", "Teammates schreiben sich direkt; du kannst jedem Teammate schreiben"],
        ["Koordination", "Der Hauptagent steuert die gesamte Arbeit", "Gemeinsame Aufgabenliste mit Übernahme, Abhängigkeiten und Nachrichten"],
        ["Ideal für", "Gezielte Aufgaben, bei denen nur das Ergebnis zählt", "Arbeit mit Abstimmungsbedarf: Reviews, Diskussionen, Features nach Schichten aufgeteilt"],
        ["Token-Kosten", "Niedriger", "Höher: Jeder Teammate ist eine eigene Claude-Instanz"],
        ["Status", "Allgemein verfügbar", "Experimentell, standardmäßig aus"],
      ],
    },
    {
      kind: "text",
      title: "Wann sich Agent Teams lohnen (und wann nicht)",
      points: [
        "Recherche und Review: Teammates betrachten ein Problem aus verschiedenen Blickwinkeln und hinterfragen dann gegenseitig ihre Ergebnisse.",
        "Neue Module oder Features: Jeder Teammate verantwortet ein eigenes Stück, etwa Frontend, Backend und Tests.",
        "Debugging mit konkurrierenden Hypothesen: Mehrere Teammates versuchen jeweils, ihre Theorie zu beweisen und die der anderen zu widerlegen.",
        "Nicht für sequenzielle Arbeit, Änderungen an denselben Dateien oder Aufgaben mit vielen Abhängigkeiten: Nimm dafür eine einzelne Session oder Subagents.",
        "Nicht für Routinearbeit: Der Token-Verbrauch wächst mit jedem aktiven Teammate.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So setzt du ein Claude Code Agent Team auf",
      steps: [
        {
          title: "Schalte Agent Teams ein",
          text: "Setz `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` in deiner Umgebung oder im `env`-Block der settings.json auf `1`. Teams brauchen eine interaktive Session; mit `-p` (und im Agent SDK) startet Claude keine Teammates.",
          code: enable,
        },
        {
          title: "Beschreib das Team in normaler Sprache",
          text: "Sag, wie viele Teammates du willst und was jeder tun soll. Claude legt die gemeinsame Aufgabenliste an, startet sie und fasst ihre Ergebnisse zusammen, wenn sie fertig sind.",
          code: prompt,
        },
        {
          title: "Wähl einen Anzeigemodus",
          text: "In-Process ist der Standard und läuft in jedem Terminal: Teammates erscheinen in einem Bereich unter dem Prompt; mit den Pfeiltasten und Enter öffnest du einen und schreibst ihm, mit `Ctrl+T` die Aufgabenliste. Split-Panes geben jedem Teammate einen eigenen Bereich und brauchen tmux oder iTerm2 mit der `it2`-CLI; setz `teammateMode` auf `auto` oder `tmux`, oder starte mit `claude --teammate-mode auto`.",
        },
        {
          title: "Nutz Rollen, die du schon definiert hast",
          text: "Bitte um einen Teammate „mit dem Agententyp security-reviewer“, um eine Subagent-Definition aus `.claude/agents/` samt Tools, Modell und Anweisungen wiederzuverwenden.",
        },
        {
          title: "Steuern, dann beenden",
          text: "Schau bei den Teammates vorbei, lenk sie um und sag „warte auf deine Teammates“, wenn der Lead anfängt, ihre Arbeit selbst zu machen. Zum Abschluss bittest du den Lead, einen Teammate namentlich zu beenden; die Verzeichnisse des Teams werden aufgeräumt, wenn die Session endet.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Doku, Agent teams", href: docs },
    },
    {
      kind: "text",
      title: "Best Practices und Grenzen",
      points: [
        "Starte mit 3–5 Teammates und etwa 5–6 Aufgaben pro Teammate; drei fokussierte Teammates schlagen oft fünf verstreute.",
        "Gib jedem Teammate andere Dateien: Zwei Teammates, die dieselbe Datei bearbeiten, überschreiben sich gegenseitig.",
        "Pack die Aufgabendetails in den Spawn-Prompt: Teammates laden CLAUDE.md, MCP-Server und Skills, aber nicht die Unterhaltung des Leads.",
        "Nutz Hooks als Qualitätsschranken: `TeammateIdle`, `TaskCreated` und `TaskCompleted` können Arbeit mit Exit-Code 2 zurückschicken.",
        "Grenzen: ein Team pro Session, keine verschachtelten Teams, der Lead lässt sich nicht wechseln, `/resume` holt In-Process-Teammates nicht zurück, und der Aufgabenstatus kann hinterherhinken.",
        "Split-Panes funktionieren nicht im integrierten Terminal von VS Code, in Windows Terminal oder Ghostty; der In-Process-Modus funktioniert überall.",
        "Mit aktivierten Agent Teams kann ein Subagent, den Claude benennt, als Teammate starten; setz die Variable auf `0`, wenn du normale Subagents zurückwillst.",
      ],
    },
    {
      kind: "text",
      title: "Agent Teams vs. andere Wege, Claude Code parallel laufen zu lassen",
      text: [
        "Agent Teams teilen eine Aufgabe auf, die du beobachtest, innerhalb einer Session. Für unabhängige Aufgaben startest du getrennte Sessions in [Git-Worktrees](/blog/claude-code-worktree) oder als [Hintergrund-Agenten](/blog/claude-code-background-agents); einen vollständigen Vergleich findest du unter [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents). Um die Kosten zu senken, lies, [wie du den Token-Verbrauch von Claude Code reduzierst](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Team, das nach dem Ende der Session weiterarbeitet",
      text: [
        "Ein Agent Team lebt in einer Session und stoppt, wenn du sie schließt. Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness oder OpenCode KI-Mitarbeiter mit dauerhaften Rollen, Zielen und Arbeitszeiten: Jeder wacht per Heartbeat auf, übernimmt das nächste Issue von einem gemeinsamen Board und schreibt dir, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Gib jedem Mitarbeiter eine Rolle",
          text: "Ein [Softwareentwickler](/ai-employees/software-engineer), ein Reviewer, ein [SEO-Spezialist](/ai-employees/seo-specialist): die Rollen, die du als Teammates starten würdest, nur dauerhaft.",
        },
        {
          title: "Arbeite von einem Board aus",
          text: "Issues ersetzen die Aufgabenliste der Session und überstehen Neustarts, Tage und Wochen.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Alle 15, 30 oder 60 Minuten während der Arbeitszeiten; lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ein Claude Code Agent Team aufsetzen" },
  mid: {
    title: "Du willst ein Team, das nicht mit der Session endet?",
    text: "Crewmark lässt Claude-Code-Mitarbeiter per Heartbeat von einem gemeinsamen Board aus arbeiten, mit dem Abo, für das du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code Agent Teams",
    items: [
      {
        q: "Was sind Claude Code Agent Teams?",
        a: "Eine experimentelle Funktion, bei der eine Claude-Code-Session ein Team aus separaten Claude-Code-Instanzen leitet. Teammates haben eigene Kontextfenster, teilen sich eine Aufgabenliste und schreiben sich und dem Lead direkt.",
      },
      {
        q: "Was ist der Unterschied zwischen Agent Teams und Subagents?",
        a: "Subagents arbeiten innerhalb einer Session und geben eine Zusammenfassung an den Hauptagenten zurück, der alles koordiniert. Agent Teams sind separate Instanzen, die sich über eine gemeinsame Aufgabenliste und direkte Nachrichten selbst koordinieren, bei höheren Token-Kosten.",
      },
      {
        q: "Wie aktiviere ich Agent Teams in Claude Code?",
        a: "Setz CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS in deiner Umgebung oder im env-Block der settings.json auf 1 und bitte Claude dann in einer interaktiven Session, Teammates für eine Aufgabe zu starten.",
      },
      {
        q: "Brauchen Agent Teams tmux?",
        a: "Nein. Der Standardmodus In-Process läuft in jedem Terminal. tmux oder iTerm2 mit der it2-CLI brauchst du nur, wenn jeder Teammate einen eigenen Split-Pane bekommen soll.",
      },
      {
        q: "Wie viele Teammates sollte ich nutzen?",
        a: "Anthropic empfiehlt, mit 3 bis 5 Teammates und etwa 5 bis 6 Aufgaben pro Teammate zu starten. Die Kosten steigen mit jedem Teammate, und mehr Teammates bedeuten mehr Koordinationsaufwand.",
      },
      {
        q: "Laufen Agent Teams in VS Code?",
        a: "Der In-Process-Modus läuft in jedem Terminal, auch im integrierten Terminal von VS Code. Der Split-Pane-Modus wird dort nicht unterstützt.",
      },
      {
        q: "Warum startet Claude Teammates, obwohl ich Subagents wollte?",
        a: "Mit aktivierten Agent Teams startet ein Subagent, den Claude benennt, als Teammate. Setz CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS auf 0, um normale Subagents zurückzubekommen.",
      },
    ],
  },
  cta: {
    title: "Mach aus deinem Agent Team eine feste Crew.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der Claude-Code-Doku (Agent teams und Subagents) am 7. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden oder von Anthropic unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
