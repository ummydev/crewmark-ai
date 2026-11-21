import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `Lies zweimal täglich neue und wieder aufgetretene Sentry-Fehler in Produktion,
leg für die, die noch nicht auf dem Board sind, Issues mit Auswirkung und
wahrscheinlicher Ursache an und öffne für jeden Einzeiler-Fix einen Pull Request.

Prüf jeden Pull Request, der als bereit fürs Review markiert ist, anhand der Regeln
in der AGENTS.md. Nur kommentieren; nie freigeben oder mergen.

Schreib jeden Freitag Release Notes aus den in dieser Woche gemergten Pull
Requests: was sich für Nutzer geändert hat, nach Bereich gruppiert, mit Links.

Nimm das nächste Issue mit dem Label "good first issue", arbeite in deinem eigenen
Git-Worktree und öffne einen Pull Request mit Tests.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code für Engineering-Teams: KI-Mitarbeiter, die liefern",
    description:
      "Wie Engineering-Teams Claude Code und Codex als KI-Mitarbeiter einsetzen: Fehler-Triage, Code-Review, von Issues zu Pull Requests, Release Notes und Nachtschichten, nach Zeitplan. Rollen, Anwendungsfälle, Prompts zum Kopieren und die Regeln, mit denen Merges in Menschenhand bleiben.",
  },
  breadcrumb: "Claude Code für Engineering",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Für Engineering-Teams",
    title: "Claude Code für Engineering-Teams: KI-Mitarbeiter, die das nächste Issue nehmen",
    lead: "Die meisten Teams nutzen Claude Code oder Codex, wenn sich jemand hinsetzt und einen Prompt schreibt. Der größere Gewinn sind feste Aufgaben: jeden Morgen neue Fehler sichten, jeden fertigen Pull Request reviewen, das nächste Issue vom Board nehmen und einen Pull Request öffnen, freitags die Release Notes schreiben. Diese Seite zeigt, welche Engineering-Aufgaben du abgeben kannst, wie mehrere Agenten laufen, ohne sich in die Quere zu kommen, Prompts zum Kopieren und die Regeln, mit denen das Mergen bei Menschen bleibt.",
    cta: "Loslegen",
    secondary: "Aufgaben ansehen",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Was Engineering-Teams einem KI-Mitarbeiter übergeben",
      headers: ["Aufgabe", "Wie oft", "Guide"],
      rows: [
        ["Neue Sentry-Fehler sichten, die kleinen beheben", "Zweimal täglich", "[Sentry-Fehler-Triage](/use-cases/sentry-error-triage)"],
        ["Fertige Pull Requests reviewen", "Bei jedem PR", "[KI-Code-Review bei jedem PR](/use-cases/pr-review)"],
        ["Das nächste Issue nehmen und einen Pull Request öffnen", "Durchgehend", "[KI-Softwareentwickler](/ai-employees/software-engineer)"],
        ["Über Nacht einen Backlog abarbeiten", "Jede Nacht", "[Claude Code rund um die Uhr](/blog/run-claude-code-24-7), [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks)"],
        ["Release Notes aus gemergten Pull Requests schreiben", "Wöchentlich", "Prompt unten"],
        ["Das Board aktuell halten: Status, Kommentare, Links", "Bei jedem Issue", "[Claude-Code-Kanban](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts zum Kopieren",
      text: ["Jeder funktioniert als wiederkehrendes Issue für einen KI-Mitarbeiter oder als einmaliger Prompt in Claude Code oder Codex."],
      steps: [
        {
          title: "Vier Aufgaben, je ein Satz",
          text: "Ersetze Namen und Zeitpläne durch deine. Zu den ersten beiden gibt es ausführliche Guides mit der Einrichtung: [Sentry-Fehler-Triage](/use-cases/sentry-error-triage) und [KI-Code-Review](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du KI-Entwickler mit Claude Code oder Codex ein",
      steps: [
        {
          title: "Schreib die Regeln einmal auf",
          text: "Leg Build- und Testbefehle, Konventionen und Review-Regeln in die CLAUDE.md oder AGENTS.md, damit jede Session vom selben Stand aus startet. Siehe [CLAUDE.md](/blog/claude-md) und [AGENTS.md für Codex](/blog/codex-agents-md).",
        },
        {
          title: "Gib jedem Agenten einen eigenen Worktree",
          text: "Zwei Agenten, die einen Checkout bearbeiten, überschreiben sich gegenseitig. Nutze einen Git-Worktree pro Agent; siehe [Worktrees in Claude Code](/blog/claude-code-worktree) und [mehrere Claude-Code-Agenten parallel](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Verbinde die Tools, die die Aufgaben brauchen",
          text: "GitHub über seine CLI, Sentry über seinen gehosteten MCP-Server, deinen Tracker über seinen MCP-Server oder seine CLI. Nimm CLIs, wo es beides gibt; sie verbrauchen weniger Tokens.",
        },
        {
          title: "Lass das Mergen bei Menschen",
          text: "Agenten öffnen Pull Requests und kommentieren; Menschen geben frei und mergen. Braucht ein Mitarbeiter eine Entscheidung, markiert er das Issue mit „Handlungsbedarf“ und fragt.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "Was du erwarten kannst",
      points: [
        "Kleine, gut beschriebene Issues klappen am besten: ein Bug mit Stacktrace, ein fehlender Test, eine Textänderung über viele Dateien.",
        "Große Features brauchen weiterhin einen Menschen, der sie in Issues zerlegt; Agenten sind gut in den Einzelteilen, weniger im Plan.",
        "Die Nutzung geht von deinem eigenen Claude- oder ChatGPT-Plan ab; leg die aufwendigen Aufgaben in die Arbeitszeiten oder innerhalb deiner Limits in die Nacht.",
        "Der Review-Aufwand verschiebt sich, er verschwindet nicht: Mehr Pull Requests heißt mehr zu reviewen, und genau deshalb steht KI-Review auf dieser Liste.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Entwickler mit Board, Arbeitszeiten und Heartbeat",
      text: [
        "Crewmark macht aus deinem eigenen Claude Code oder Codex KI-Mitarbeiter: Jeder hat eine Rolle, ein Ziel in Zahlen, Arbeitszeiten und einen Heartbeat, nimmt das nächste Issue von einem gemeinsamen Board, kommentiert beim Arbeiten und öffnet Pull Requests zum Review.",
      ],
      steps: [
        {
          title: "Stell die Rolle ein",
          text: "Fang mit dem [KI-Softwareentwickler](/ai-employees/software-engineer) an.",
        },
        {
          title: "Leg feste Aufgaben als wiederkehrende Issues an",
          text: "Triage, Review und Release Notes kommen nach ihrem eigenen Zeitplan wieder.",
        },
        {
          title: "Sieh dir andere Teams an",
          text: "Marketingteams nutzen dasselbe Setup: [Claude Code für Marketing](/for/marketing). Alle Aufgaben findest du unter [Anwendungsfälle](/use-cases).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "KI-Entwickler mit Claude Code oder Codex einrichten" },
  mid: {
    title: "Du willst Entwickler, die sich das nächste Issue selbst nehmen?",
    text: "Crewmark-Mitarbeiter laufen auf deinem Claude Code oder Codex, wachen per Heartbeat auf und öffnen Pull Requests zum Review.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was sind die besten Anwendungsfälle für Claude Code in Engineering-Teams?",
        a: "Aufgaben, die sich wiederholen und ein klares Ende haben: Fehler-Triage, Review von Pull Requests, kleine Bugs mit Stacktrace, Tests, Release Notes und das Board aktuell halten. Größere Features braucht weiterhin ein Mensch, der sie plant.",
      },
      {
        q: "Können mehrere Claude-Code-Agenten an einem Repository arbeiten?",
        a: "Ja, wenn jeder einen eigenen Git-Worktree und eigene Issues hat. Siehe [mehrere Claude-Code-Agenten parallel](/blog/multiple-claude-code-agents) und [Agent Teams](/blog/claude-code-agent-teams).",
      },
      {
        q: "Funktioniert das mit Codex?",
        a: "Ja. Dieselben Aufgaben und Regeln funktionieren mit Codex; leg die Regeln in die AGENTS.md.",
      },
      {
        q: "Sollte ein KI-Agent seine eigenen Pull Requests mergen?",
        a: "Nein. Lass ihn Pull Requests öffnen und kommentieren; Freigabe und Merge bleiben bei Menschen.",
      },
      {
        q: "Was ist der Unterschied zu Devin oder anderen Cloud-Agenten?",
        a: "Cloud-Agenten führen jede Aufgabe in der Cloud des Anbieters aus, wenn du sie zuweist. Crewmark lässt dein eigenes Claude Code oder Codex mit deinem Plan laufen, mit festen Aufgaben nach Zeitplan. Siehe [Devin-Alternativen](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Gib deinem Engineering-Team KI-Mitarbeiter, die das nächste Issue nehmen.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geschrieben am 10. November 2026; Angaben zu den Tools am selben Tag mit der Doku von Sentry, Anthropic und OpenAI abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI, GitHub oder Sentry, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
