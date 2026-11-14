import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Vibe-Kanban-Alternativen nach dem Aus (2026) | Crewmark AI",
    description:
      "Die Firma hinter Vibe Kanban hat dichtgemacht, das Cloud-Board ist weg. Was noch funktioniert, wie du deine Issues behältst und die Alternativen, um Claude Code und Codex von einem Board aus zu steuern: Paradev, Nimbalyst, Claude Squad, Kanban Code und Crewmark.",
  },
  breadcrumb: "Vibe-Kanban-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Coding-Agenten",
    title: "Vibe-Kanban-Alternativen: wo du deine Agenten jetzt von einem Board aus steuerst",
    lead: "Mit Vibe Kanban hast du die Arbeit von Coding-Agenten als Kanban-Issues geplant, für jedes einen Workspace gestartet, den Diff gereviewt und einen Pull Request geöffnet, mit Claude Code, Codex und acht weiteren Agenten. Am 10. April 2026 kündigte bloop, die Firma dahinter, ihre Schließung an. Die Open-Source-App läuft lokal weiter, aber die gehosteten Issues, Kommentare, Projekte und Organisationen sind weg, und das letzte Release erschien am 24. April 2026. Dieser Guide zeigt, was noch funktioniert, wie du deine Arbeit behältst und welche Alternativen es gibt.",
    cta: "Loslegen",
    secondary: "Alternativen vergleichen",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Was mit Vibe Kanban passiert ist",
      text: [
        "Laut bloop nutzten die meisten Anwender kostenlose Pläne, und die Firma fand kein Geschäftsmodell, das sie verfolgen wollte. Die Remote-Dienste liefen nach der Ankündigung noch 30 Tage weiter, danach stellte Vibe Kanban auf eine vollständig lokale Architektur um; Projektseiten führen jetzt zu einem Datenexport. Rechnungen, die in den 30 Tagen davor bezahlt wurden, wurden erstattet.",
      ],
      points: [
        "Funktioniert noch: `npx vibe-kanban` startet die lokale App, und lokale Workspaces laufen weiter. Der Code bleibt Open Source unter Apache 2.0 und wird von der Community gepflegt.",
        "Weg: die gehosteten Kanban-Issues, Kommentare, Projekte und Organisationen, die Teams geteilt haben.",
        "Stillstand: Seit v0.1.44 vom 24. April 2026 gab es kein Release mehr, neue Agenten-Versionen werden also nicht unterstützt.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So behältst du deine Arbeit",
      steps: [
        {
          title: "Exportiere deine Daten",
          text: "Öffne die neueste Version der App und nutze den Datenexport. Projektseiten führen jetzt direkt dorthin.",
        },
        {
          title: "Pushe jeden Branch, der dir wichtig ist",
          text: "Jeder Workspace war ein Git Worktree auf einem eigenen Branch. Committe und pushe die, die du behalten willst, damit der Code in deinem Repository liegt und nicht in der App.",
          code: keep,
        },
        {
          title: "Zieh offene Issues an einen gemeinsamen Ort um",
          text: "Wenn dein Team das gehostete Board genutzt hat, leg die offenen Issues in GitHub Issues oder im Board des Tools deiner Wahl neu an, bevor jemand vergisst, worum es ging.",
        },
        {
          title: "Teste eine echte Aufgabe im Ersatz",
          text: "Vergleiche die Optionen unten und bring ein Issue vom Start bis zum Pull Request, bevor du alles umziehst.",
        },
      ],
      source: { label: "Quelle: Vibe Kanbans Ankündigung zur Schließung", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Vibe-Kanban-Alternativen im Vergleich",
      text: ["Angaben von der Website oder dem GitHub-Repository des jeweiligen Projekts, Stand 7. November 2026."],
      headers: ["", "Was es ist", "Agenten", "Plattformen", "Board", "Lizenz"],
      rows: [
        ["Vibe Kanban (Community)", "Lokale App: Kanban-Issues, ein Workspace pro Issue, Diff-Review, PRs", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode und mehr", "Läuft mit `npx`; remote per Docker", "Ja, jetzt nur lokal", "Apache 2.0"],
        ["Paradev (früher Superset)", "Desktop-Workspace, der viele Agenten parallel laufen lässt, jeden in einem eigenen Worktree; Automationen und Cloud-Sandboxes", "Claude, Codex, Cursor Agent, OpenCode und jeder CLI-Agent", "macOS; Linux experimentell; noch kein Windows", "Kein Board beschrieben", "MIT"],
        ["Nimbalyst", "Visueller Workspace für Agenten, Aufgaben, Docs, Wiki, Diagramme und Code", "Claude Code, Codex", "macOS, Windows, Linux", "Aufgaben neben Docs und Code", "Open Source; kostenlos für Einzelpersonen"],
        ["Claude Squad", "Terminal-App: eine tmux-Session plus ein Git Worktree pro Agent", "Claude Code, Codex, Gemini, Aider", "Braucht tmux und gh", "Nein (TUI-Liste)", "AGPL-3.0"],
        ["Kanban Code", "Kanban-Board für Claude-Code-Sessions mit einem Worktree pro Karte", "Claude Code", "App für macOS 26, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
        ["Crewmark", "KI-Mitarbeiter: Agenten-Sessions mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat, der das nächste Issue übernimmt", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Web-Board; Daemon auf macOS, Windows, Linux", "Ja, gehostet und mit deinem Team geteilt", "Kommerziell"],
      ],
    },
    {
      kind: "text",
      title: "Welche Vibe-Kanban-Alternative zu dir passt",
      points: [
        "Du willst dieselbe App, so wie sie ist: Nutze die Community-Version lokal weiter und behalte das Repository im Blick, falls ein gepflegter Fork entsteht.",
        "Du hast vor allem parallele Agenten laufen lassen und Diffs gereviewt: Paradev ist die ähnlichste gepflegte Desktop-App, auf Mac und Linux. Auch das Flag `--worktree` von Claude Code deckt isolierte, parallele Sessions ab; siehe den [Guide zu Claude-Code-Worktrees](/blog/claude-code-worktree).",
        "Du lebst im Terminal: Claude Squad gibt jedem Agenten eine tmux-Session und einen Worktree.",
        "Du willst das Board selbst, nur für Claude Code: Kanban Code verschiebt Karten zwischen Spalten, wenn Sessions starten, warten und PRs öffnen.",
        "Du hast das gehostete Board im Team genutzt oder willst, dass Agenten Issues ohne dich übernehmen: Das ist Crewmark (unten). Conductor war eine weitere Option, [geht aber zu Meta und wird eingestellt](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Vibe Kanban wartete, bis du jede Karte startest. Crewmark nicht.",
      text: [
        "In Vibe Kanban hast du das Issue geschrieben und dann den Agenten gestartet. Crewmark behält das Board, gehostet und geteilt, und macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter, der während seiner Arbeitszeiten per Heartbeat aufwacht und das nächste Issue selbst übernimmt, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Bring dein Repository und deinen Agenten mit",
          text: "Führe den Einrichtungsbefehl im Projekt aus. Jeder Mitarbeiter arbeitet in seiner eigenen Session und seinem eigenen Checkout, ganz ähnlich wie ein Vibe-Kanban-Workspace.",
        },
        {
          title: "Bau dein Board neu auf",
          text: "Füge deine offenen Issues hinzu und weise sie einem Mitarbeiter zu, oder lass sie offen für den, der gerade frei ist.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Alle 15, 30 oder 60 Minuten übernimmt der Mitarbeiter das nächste Issue, kommentiert laufend und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Deine Arbeit nach der Schließung von Vibe Kanban behalten" },
  mid: {
    title: "Gehostetes Board verloren? Behalte das Board, hol dir Mitarbeiter dazu.",
    text: "Crewmark gibt deinem Team ein gemeinsames Board, auf dem Claude-Code- und Codex-Mitarbeiter per Heartbeat das nächste Issue übernehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zur Schließung von Vibe Kanban",
    items: [
      {
        q: "Wird Vibe Kanban eingestellt?",
        a: "Die Firma dahinter schon. bloop hat am 10. April 2026 seine Schließung angekündigt. Die Open-Source-App läuft als von der Community gepflegtes Projekt lokal weiter; die gehosteten Issues, Kommentare, Projekte und Organisationen wurden nach 30 Tagen entfernt.",
      },
      {
        q: "Funktioniert Vibe Kanban noch?",
        a: "Lokal ja: `npx vibe-kanban` startet es weiterhin, und lokale Workspaces laufen weiter. Das neueste Release ist v0.1.44 vom 24. April 2026, neuere Agenten-Versionen werden daher womöglich nicht unterstützt.",
      },
      {
        q: "Wie exportiere ich meine Vibe-Kanban-Daten?",
        a: "Nutze den Datenexport in der neuesten Version der App; Projektseiten führen jetzt dorthin. Pushe außerdem die Branches deiner Workspaces auf dein Git-Remote.",
      },
      {
        q: "Was ist die beste Vibe-Kanban-Alternative?",
        a: "Für parallele Agenten mit Diff-Review Paradev (früher Superset). Für ein Kanban aus Claude-Code-Sessions Kanban Code. Für einen Workflow im Terminal Claude Squad. Für ein gemeinsames Board, auf dem Agenten Issues selbst übernehmen, Crewmark.",
      },
      {
        q: "Gibt es eine Open-Source-Alternative zu Vibe Kanban?",
        a: "Ja: Paradev (MIT), Claude Squad (AGPL-3.0) und Kanban Code (Apache 2.0) sind Open Source, und Vibe Kanban selbst bleibt Open Source unter Apache 2.0.",
      },
      {
        q: "Gibt es eine Vibe-Kanban-Alternative für Windows?",
        a: "Nimbalyst bietet einen Windows-Download, und Kanban Code hat eine Windows-App. Das Board von Crewmark läuft im Browser, sein Daemon läuft unter Windows. Paradev unterstützt Windows noch nicht.",
      },
    ],
  },
  cta: {
    title: "Deine Agenten brauchen ein neues Board. Gib ihnen auch einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit Vibe Kanbans README, Releases und Ankündigung zur Schließung sowie der Website oder dem Repository jeder Alternative abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic oder OpenAI und wird von ihnen nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
