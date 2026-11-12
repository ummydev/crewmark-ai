import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Mehrere Claude-Code-Agenten: Subagents, Worktrees | Crewmark",
    description:
      "Mehrere Claude-Code-Agenten gleichzeitig: Subagents, parallele Sessions in git worktrees, --bg-Sessions und experimentelle agent teams, ohne Konflikte.",
  },
  breadcrumb: "Mehrere Claude-Code-Agenten",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "So lässt du mehrere Claude-Code-Agenten gleichzeitig laufen",
    lead: "Claude Code kann auf vier verschiedene Arten an mehreren Dingen gleichzeitig arbeiten: Subagents innerhalb einer Unterhaltung, getrennte Sessions in eigenen git worktrees, Hintergrund-Sessions, die du mit --bg startest, und experimentelle agent teams, die sich gegenseitig Nachrichten schicken. Diese Anleitung zeigt, wie du jede davon einrichtest, welche du wählen solltest und wie du verhinderst, dass parallele Agenten gegenseitig ihre Arbeit überschreiben.",
    cta: "Early Access anfragen",
    secondary: "Direkt zu den Worktrees",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Vier Wege, Claude-Code-Agenten parallel laufen zu lassen",
      headers: ["", "Was parallel läuft", "Getrennte Dateien?", "Am besten für"],
      rows: [
        ["Subagents", "Helfer innerhalb einer Unterhaltung, jeder mit eigenem Kontext", "Nein, außer mit `isolation: worktree`", "Recherche, Reviews und Nebenaufgaben, die zurückberichten"],
        ["Worktree-Sessions", "Vollständige Sessions, jede in ihrem eigenen git worktree", "Ja, je ein Branch", "Mehrere Features oder Fixes gleichzeitig"],
        ["Hintergrund-Sessions", "Mit `claude --bg` gestartete Sessions, verwaltet in der Agent View", "Ja, standardmäßig je ein Worktree", "Aufgaben jetzt losschicken, später nachsehen"],
        ["Agent teams", "Eine leitende Session plus Teammates mit gemeinsamer Aufgabenliste", "Nein: Dateien unter den Teammates aufteilen", "Arbeit, bei der Agenten miteinander sprechen müssen"],
      ],
    },
    {
      kind: "steps",
      title: "Subagents: parallele Helfer in einer Session",
      text: [
        "Ein Subagent hat sein eigenes Kontextfenster, seinen eigenen System-Prompt und seine eigenen Tools. Er sieht deine Unterhaltung nicht, und nur seine Zusammenfassung kommt zurück, was den Kontext der Haupt-Session klein hält. Claude Code bringt eingebaute mit, etwa Explore (nur lesend) und Plan, und du kannst eigene hinzufügen.",
      ],
      steps: [
        {
          title: "Einen Subagent definieren",
          text: "Leg eine Markdown-Datei in `.claude/agents/` (mit dem Projekt geteilt) oder `~/.claude/agents/` (nur für dich) an. Nur `name` und `description` sind Pflicht; `tools` begrenzt, was er nutzen darf, und `model` wählt das Modell.",
          code: `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`,
        },
        {
          title: "Lass Claude mehrere gleichzeitig ausführen",
          text: "Bitte darum, die Arbeit parallel zu erledigen, z. B. „prüf die Module auth, billing und search parallel“. Subagents, die Claude startet, laufen standardmäßig im Hintergrund, bis zu 20 gleichzeitig, und berichten zurück, wenn sie fertig sind. Tippe `/tasks`, um sie zu sehen.",
        },
        {
          title: "Gib Subagents, die Dateien bearbeiten, einen eigenen Worktree",
          text: "Füge `isolation: worktree` zum Frontmatter des Subagents hinzu oder bitte Claude, für seine Agenten Worktrees zu nutzen. Jeder bearbeitet dann eine temporäre Kopie des Repos, die entfernt wird, wenn er nichts geändert hat.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Parallele Claude-Code-Sessions in git worktrees ausführen",
      steps: [
        {
          title: "Den Worktree-Ordner ignorieren",
          text: "Claude Code legt Worktrees in `.claude/worktrees/` im Root des Repos an. Das Repo braucht mindestens einen Commit.",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "Eine Session pro Aufgabe starten",
          text: "Führe in jedem Terminal `claude --worktree` (oder `-w`) mit einem anderen Namen aus. Jede Session bekommt ihren eigenen Ordner und einen Branch namens `worktree-<name>`, basierend auf dem Standard-Branch.",
          code: "# Terminal 1\nclaude --worktree feature-auth\n\n# Terminal 2\nclaude --worktree bugfix-login",
        },
        {
          title: "Benötigte ungetrackte Dateien kopieren",
          text: "Ein neuer Worktree enthält nur getrackte Dateien. Liste Dateien wie `.env` in einer `.worktreeinclude`-Datei auf (gitignore-Syntax), und Claude Code kopiert sie hinein.",
          code: ".env\n.env.local",
        },
        {
          title: "Mergen und aufräumen",
          text: "Wenn eine Session endet, wird ein Worktree ohne Änderungen samt Branch entfernt; bei einem mit Änderungen wirst du gefragt, ob du ihn behalten willst. Merge die Branches wie jeden anderen. Headless-Läufe mit `-p` fragen nicht nach, die entfernst du also mit `git worktree remove`.",
        },
        {
          title: "Oder nutze die Desktop-App",
          text: "Drück Cmd+N (unter Windows Ctrl+N) für eine neue Session und schalte vor dem Start Worktree ein; standardmäßig ist es aus. Sessions können in der geteilten Ansicht nebeneinander liegen.",
        },
      ],
      source: {
        label: "Quelle: Dokumentation von Anthropic zu Worktrees (Englisch)",
        href: "https://code.claude.com/docs/en/worktrees",
      },
    },
    {
      kind: "text",
      title: "Hintergrund-Sessions mit --bg und Agent View",
      text: [
        "`claude --bg \"<prompt>\"` startet eine Session im Hintergrund und kehrt sofort zurück, du kannst also mehrere hintereinander starten. Jede wechselt in ihren eigenen Worktree, bevor sie etwas bearbeitet. `claude agents` listet sie auf; mit `claude logs <id>`, `claude attach <id>` und `claude stop <id>` verwaltest du eine einzelne.",
        "Sie laufen weiter, nachdem du das Terminal geschlossen hast, aber nicht, nachdem der Computer heruntergefahren ist. Agent View ist eine Research Preview. Mehr zu unbeaufsichtigten Läufen findest du unter [Claude Code als Hintergrund-Agent ausführen](/blog/claude-code-background-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent teams: Agenten, die miteinander sprechen",
      text: [
        "Agent teams sind experimentell und standardmäßig aus. Schalte sie mit `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in deiner Shell oder im `env`-Block der settings.json ein und bitte Claude dann, für eine Aufgabe „drei Teammates zu starten“. Teammates teilen sich eine Aufgabenliste und schicken sich gegenseitig Nachrichten; sie erscheinen im Terminal oder, mit tmux oder iTerm2, in geteilten Bereichen.",
      ],
      points: [
        "Nur interaktive Sessions: `-p` und das Agent SDK starten keine Teammates.",
        "Ein Team pro Session, keine verschachtelten Teams, und In-Process-Teammates werden von `/resume` nicht wiederhergestellt.",
        "Teammates teilen sich einen Checkout, gib also jedem andere Dateien.",
        "Sie kosten deutlich mehr: Laut der Dokumentation von Anthropic verbraucht ein Team etwa 7-mal so viele Tokens wie eine einzelne Session, wenn die Teammates im Plan-Modus laufen.",
      ],
    },
    {
      kind: "text",
      title: "So verhinderst du, dass parallele Agenten sich gegenseitig überschreiben",
      points: [
        "Wenn zwei Agenten dieselben Dateien anfassen könnten, gib jedem einen eigenen Worktree. Eine Session in einem Worktree kann den Haupt-Checkout nicht bearbeiten, und ihre Subagents auch nicht.",
        "Teil die Arbeit in einem agent team nach Dateien auf: Zwei Teammates, die dieselbe Datei bearbeiten, überschreiben sich gegenseitig.",
        "Jeder Subagent und jede Session zehrt von denselben Nutzungslimits, mehrere gleichzeitig vervielfachen also den Verbrauch. Nutze `model: haiku` für einfache Subagents.",
        "Agenten, die dieselben Tests oder denselben Dev-Server ausführen, können sich bei Ports in die Quere kommen; gib jedem einen eigenen Port.",
      ],
    },
    {
      kind: "steps",
      kicker: "Mit Crewmark",
      title: "Mach aus parallelen Agenten ein Team mit festen Aufgaben",
      text: [
        "Worktrees und agent teams teilen eine Aufgabe auf, die du beobachtest. Crewmark betreibt mehrere Claude-Code- oder Codex-Sessions als Mitarbeiter mit eigenen Rollen, Zielen und Arbeitszeiten und gibt ihnen Arbeit auf einem Board.",
      ],
      steps: [
        {
          title: "Ein Mitarbeiter pro Rolle",
          text: "Ein SEO-Spezialist, ein Softwareentwickler und ein UI-Designer leben jeweils in ihrer eigenen Unterhaltung, mit eigenen Anweisungen und eigenem Ziel.",
        },
        {
          title: "Ein Board für alle",
          text: "Weise Issues dem Mitarbeiter zu, der passt. Jeder wacht im Takt seines Heartbeats auf, nimmt sein nächstes Issue und kommentiert unterwegs, sodass du siehst, wer gerade was tut.",
        },
        {
          title: "Sie fragen dich, nicht einander",
          text: "Braucht ein Mitarbeiter ein Review oder eine Berechtigung, schreibt er dir und macht weiter. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Parallele Claude-Code-Sessions in git worktrees ausführen" },
  mid: {
    title: "Du lässt jeden Tag mehrere Agenten laufen?",
    text: "Crewmark gibt jeder Claude-Code-Session eine Rolle, ein Ziel und Arbeitszeiten und bringt ihre gesamte Arbeit auf ein Board.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu mehreren Claude-Code-Agenten",
    items: [
      {
        q: "Kann ich mehrere Claude-Code-Agenten gleichzeitig laufen lassen?",
        a: "Ja. Claude kann innerhalb einer Session Subagents parallel ausführen, du kannst mit `claude --worktree` mehrere Sessions in getrennten git worktrees betreiben, mit `claude --bg` Hintergrund-Sessions starten oder die experimentellen agent teams ausprobieren.",
      },
      {
        q: "Was ist der Unterschied zwischen Subagents und agent teams?",
        a: "Subagents erledigen eine Aufgabe und schicken eine Zusammenfassung an die Session zurück, die sie gestartet hat. Agent teams sind getrennte Claude-Code-Instanzen, die sich eine Aufgabenliste teilen und einander direkt Nachrichten schicken; sie sind experimentell und verbrauchen mehr Tokens.",
      },
      {
        q: "Wie viele Subagents können gleichzeitig laufen?",
        a: "Standardmäßig bis zu 20 gleichzeitig. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` ändert das Limit. Subagents können auch eigene starten, standardmäßig bis zu drei Ebenen tief.",
      },
      {
        q: "Wie verhindere ich, dass parallele Agenten dieselben Dateien bearbeiten?",
        a: "Gib jedem einen eigenen git worktree: `claude --worktree <name>` für Sessions, `isolation: worktree` für Subagents. Mit `--bg` gestartete Hintergrund-Sessions bekommen automatisch einen. Agent teams teilen sich einen Checkout, weise also jedem Teammate Dateien zu.",
      },
      {
        q: "Kostet es mehr, mehrere Agenten laufen zu lassen?",
        a: "Ja. Jeder Subagent und jede Session schickt eigene Anfragen, die auf dieselben Nutzungslimits angerechnet werden, mehrere gleichzeitig vervielfachen also den Verbrauch.",
      },
      {
        q: "Wo speichert Claude Code Worktrees?",
        a: "In `.claude/worktrees/<name>/` im Root des Repos, auf einem Branch namens `worktree-<name>`. Füge diesen Ordner zur `.gitignore` hinzu.",
      },
    ],
  },
  cta: {
    title: "Betreibe ein Team aus Claude-Code-Agenten mit festen Aufgaben.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sessions KI-Mitarbeiter mit Rollen, Zielen und Arbeitszeiten, auf einem Board.",
    button: "Early Access anfragen",
  },
  checked: "Am 2. November 2026 mit der Claude-Code-Dokumentation von Anthropic abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
