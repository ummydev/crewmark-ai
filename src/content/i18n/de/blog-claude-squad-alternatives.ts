import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Squad Alternativen (und Claude Squad vs. Conductor)",
    description:
      "Was Claude Squad kann, wo es an Grenzen stößt (nur tmux, kein Windows, du startest jede Aufgabe) und die Alternativen, um mehrere Claude-Code- oder Codex-Agenten zu betreiben: Claude Codes eigene Worktrees, Paradev, Kanban Code, Conductor und Crewmark.",
  },
  breadcrumb: "Claude Squad Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Coding-Agenten",
    title: "Claude Squad Alternativen: andere Wege, mehrere Coding-Agenten gleichzeitig laufen zu lassen",
    lead: "Claude Squad ist eine Open-Source-Terminal-App (AGPL-3.0), mit der mehrere Coding-Agenten nebeneinander laufen: Jede Aufgabe bekommt ihre eigene tmux-Session und ihren eigenen Git-Worktree, und du prüfst die Änderungen, bevor du pushst. Das funktioniert gut, wenn du unter macOS oder Linux im Terminal lebst. Nach einer Alternative suchen Leute, wenn sie eine grafische App wollen, Windows brauchen oder möchten, dass die Agenten Arbeit übernehmen, ohne dass man sie einzeln startet. Dieser Leitfaden vergleicht die Optionen, auch Claude Squad vs. Conductor.",
    cta: "Loslegen",
    secondary: "Alternativen vergleichen",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Squad gut macht und wo es aufhört",
      text: [
        "Das neueste Release von Claude Squad ist v1.0.20 vom 20. August 2026, und das Projekt wird weiter gepflegt. Es startet standardmäßig Claude Code und mit `-p` andere Terminal-Agenten wie Codex oder Aider.",
      ],
      points: [
        "Gut: eine tmux-Session und ein Git-Worktree pro Aufgabe, sodass Agenten nie dieselben Dateien bearbeiten.",
        "Gut: Du prüfst den Diff jeder Instanz und checkst ihren Branch aus, bevor du pushst.",
        "Gut: Ein experimenteller `-y`-Modus (Auto-Yes) bestätigt Prompts, damit Aufgaben im Hintergrund fertig werden.",
        "Grenze: Es braucht tmux und die GitHub CLI; das README erwähnt Windows nicht, wo tmux den Umweg über WSL bedeutet.",
        "Grenze: Es ist eine Terminal-Oberfläche. Es gibt kein Board, keine gemeinsame Ansicht für ein Team, und du startest jede Aufgabe selbst.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So lässt du mehrere Agenten parallel laufen, mit oder ohne Claude Squad",
      steps: [
        {
          title: "Gib jeder Aufgabe ihren eigenen Worktree",
          text: "Das ist der Kern von Claude Squad, und Claude Code erledigt das inzwischen selbst: `claude --worktree <name>` startet eine Session auf eigenem Branch und eigenem Checkout. Siehe den [Leitfaden zu Claude Code Worktrees](/blog/claude-code-worktree).",
          code: usage,
        },
        {
          title: "Wähle, wie du sie im Blick behältst",
          text: "Eine Liste im Terminal (Claude Squad), eine Desktop-App (Paradev, oder Conductor, solange es noch läuft) oder ein Kanban-Board mit Sessions (Kanban Code). Siehe [Kanban-Boards für Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Entscheide, wer die nächste Aufgabe startet",
          text: "Bei all diesen Tools startest du jede Session selbst. Wenn die Agenten das nächste Issue selbst übernehmen sollen, gib ihnen einen Zeitplan oder einen Heartbeat; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Prüfe vor dem Merge",
          text: "Egal, was die Agenten ausführt: Lass einen Menschen mergen. Lies jeden Diff, führe die Checks aus und merge dann.",
        },
      ],
      source: { label: "Quelle: Claude Squad README", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Claude Squad Alternativen im Vergleich",
      text: ["Angaben von der Website oder dem Repository jedes Projekts, geprüft im November 2026."],
      headers: ["", "Oberfläche", "Agenten", "Plattformen", "Wer startet Aufgaben", "Lizenz"],
      rows: [
        ["Claude Squad", "Terminal-Oberfläche (tmux)", "Claude Code, Codex, Gemini, Aider", "Braucht tmux und gh; Windows über WSL", "Du", "AGPL-3.0"],
        ["Claude Code allein", "`claude --worktree`, parallele Sessions in der Desktop-App", "Claude Code", "macOS, Windows, Linux", "Du (oder ein Zeitplan)", "Kommerziell (Anthropic)"],
        ["Paradev (früher Superset)", "Desktop-App, ein Worktree pro Aufgabe; Automationen", "Claude, Codex, Cursor Agent, OpenCode und jeder CLI-Agent", "macOS; Linux experimentell; noch kein Windows", "Du oder eine Automation", "MIT"],
        ["Kanban Code", "Kanban-Board mit Claude-Code-Sessions", "Claude Code", "App für macOS 26, App für Windows", "Du", "Apache 2.0"],
        ["Conductor", "Mac-App für parallele Agenten; geht zu Meta, die Cloud endet am 20. November 2026", "Claude Code, Codex, Cursor, OpenCode", "macOS", "Du", "Kommerziell"],
        ["Crewmark", "Gehostetes Board mit KI-Mitarbeitern, die per Heartbeat aufwachen", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Web-Board; Daemon auf macOS, Windows, Linux", "Der Mitarbeiter übernimmt das nächste Issue", "Kommerziell"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad vs. Conductor",
      text: [
        "Beide lassen mehrere Agenten in parallelen Worktrees laufen. Claude Squad ist eine kostenlose Open-Source-Terminal-App; Conductor war eine ausgefeilte Mac-App mit Review-Ablauf und Cloud-Workspaces. Conductor [geht zu Meta](/blog/conductor-alternatives): Neue Anmeldungen sind geschlossen, die Cloud wird am 20. November 2026 abgeschaltet, und die lokale App bekommt nur noch bis Anfang 2027 Updates. Wenn du heute zwischen beiden wählen müsstest, ist Claude Squad dasjenige, das noch weiterentwickelt wird.",
      ],
    },
    {
      kind: "text",
      title: "Welche Claude Squad Alternative zu dir passt",
      points: [
        "Du nutzt nur Claude Code: Probier das eingebaute `--worktree`-Flag und die parallelen Sessions der Desktop-App aus, bevor du ein weiteres Tool hinzufügst.",
        "Du willst auf dem Mac eine Desktop-App für viele Agenten: Paradev.",
        "Du willst Sessions als Karten sehen: Kanban Code, oder lies [Kanban-Boards für Claude Code](/blog/claude-code-kanban).",
        "Du arbeitest unter Windows: Die CLI und die Desktop-App von Claude Code laufen nativ; Claude Squad braucht WSL.",
        "Du willst, dass Agenten weiterarbeiten, ohne dass du jede Aufgabe startest, mit einem Board, das dein Team teilt: Crewmark (unten). Siehe auch [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Von einem Squad, den du steuerst, zu einer Crew, die selbst arbeitet",
      text: [
        "Claude Squad macht parallele Agenten leicht zu betreiben, aber jeder wartet darauf, dass du ihn startest. Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten. Er wacht per Heartbeat auf, übernimmt das nächste Issue von einem gemeinsamen Board, arbeitet in seinem eigenen Checkout und schreibt dir, wenn er eine Entscheidung braucht, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Verbinde dein Repository und deinen Agenten",
          text: "Führe den Einrichtungsbefehl im Projekt aus. Mehrere Mitarbeiter können sich ein Repository teilen, jeder in seinem eigenen Checkout.",
        },
        {
          title: "Gib jedem eine Rolle",
          text: "Ein Engineer, ein Reviewer, ein SEO-Texter, jeder mit einem Ziel. Siehe [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Füll das Board und prüfe",
          text: "Alle 15, 30 oder 60 Minuten während der Arbeitszeiten übernimmt jeder Mitarbeiter das nächste Issue; du prüfst Pull Requests und beantwortest Fragen.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mehrere Coding-Agenten parallel laufen lassen" },
  mid: {
    title: "Keine Lust mehr, jeden Agenten selbst zu starten?",
    text: "Die KI-Mitarbeiter von Crewmark übernehmen per Heartbeat das nächste Issue, mit dem Claude-Code- oder Codex-Plan, für den du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "Claude Squad FAQ",
    items: [
      {
        q: "Was ist Claude Squad?",
        a: "Eine Open-Source-Terminal-App (AGPL-3.0) von smtg-ai, die mehrere Coding-Agenten gleichzeitig ausführt, jeden in seiner eigenen tmux-Session und seinem eigenen Git-Worktree, damit du jede Änderung vor dem Push prüfen kannst.",
      },
      {
        q: "Funktioniert Claude Squad mit Codex?",
        a: "Ja. Starte es mit `cs -p \"codex\"`, nachdem du deinen OpenAI-API-Schlüssel gesetzt hast. Es startet auch Gemini und Aider, und standardmäßig Claude Code.",
      },
      {
        q: "Funktioniert Claude Squad unter Windows?",
        a: "Das README erwähnt Windows nicht, und es braucht tmux, unter Windows würdest du es also in WSL ausführen. Claude Codes eigenes `--worktree`-Flag und seine Desktop-App laufen unter Windows nativ.",
      },
      {
        q: "Wird Claude Squad noch gepflegt?",
        a: "Ja. Das neueste Release ist v1.0.20 vom 20. August 2026.",
      },
      {
        q: "Claude Squad oder Conductor?",
        a: "Conductor geht zu Meta und wird eingestellt; die Cloud endet am 20. November 2026. Claude Squad ist Open Source und wird weiterentwickelt.",
      },
      {
        q: "Brauche ich Claude Squad noch, jetzt wo Claude Code Worktrees hat?",
        a: "Nicht allein für die Isolation: `claude --worktree` gibt jeder Session ihren eigenen Branch. Claude Squad hilft weiterhin, wenn du eine einzige Terminal-Ansicht willst, um viele Sessions und andere Agenten als Claude Code zu verwalten.",
      },
    ],
  },
  cta: {
    title: "Führe eine Crew, nicht nur einen Squad.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit dem README und den Releases von Claude Squad sowie der Website oder dem Repository jeder Alternative abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic oder OpenAI und wird von diesen nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
