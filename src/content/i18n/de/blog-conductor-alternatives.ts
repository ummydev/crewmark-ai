import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# Die Worktrees finden, die Conductor für dieses Repository angelegt hat
git worktree list

# In jedem Workspace, den du behalten willst: seinen Branch committen und pushen
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor geht zu Meta: Abschaltdaten und Alternativen",
    description:
      "Conductor, die Mac-App für parallele Claude-Code- und Codex-Agenten, geht zu Meta. Die Abschaltdaten, wie du deine Workspaces sicherst, und die besten Conductor-Alternativen für Mac, Windows und Linux.",
  },
  breadcrumb: "Conductor-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · KI-Coding-Agenten",
    title: "Conductor geht zu Meta: was jetzt passiert und wo deine Agenten künftig laufen",
    lead: "Conductor, die Mac-App, die Agenten von Claude Code, Codex, Cursor und OpenCode parallel in eigenen Workspaces laufen lässt, hat am 4. November 2026 angekündigt, dass es zu Meta geht. Neue Registrierungen sind geschlossen, Conductor Cloud wird am 13. November schreibgeschützt und am 20. November abgeschaltet, und die lokale App bekommt nur noch bis Anfang 2027 Updates. Diese Anleitung zeigt die Termine, wie du deine Arbeit behältst, und die Alternativen, die dasselbe leisten.",
    cta: "Loslegen",
    secondary: "Workspaces sichern",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Conductor war und was sich ändert",
      text: [
        "Conductor gab jeder Coding-Aufgabe einen eigenen Workspace: einen Git Worktree mit eigenem Branch, eigenen Dateien, eigenem Terminal, Diff und Review-Ablauf, sodass mehrere Agenten gleichzeitig an einem Repository arbeiten konnten. Es lief nur auf macOS, mit Claude Code, Codex, Cursor und OpenCode, und bot zusätzlich Conductor Cloud für Workspaces, die auch ohne deinen Mac weiterliefen.",
        "Gründer Charlie Holtz hat angekündigt, dass das Team zu Meta wechselt und dort „das nächste Interface“ baut; etwas Neues ist für Anfang nächsten Jahres versprochen. Meta hat den Deal gegenüber TechCrunch bestätigt, aber keine Konditionen genannt.",
      ],
    },
    {
      kind: "table",
      title: "Der Zeitplan für die Abschaltung von Conductor",
      headers: ["Datum", "Was passiert"],
      rows: [
        ["4. November 2026", "Keine neuen Registrierungen oder Downloads mehr. Free-Nutzer können nicht mehr upgraden; Pro-Nutzer behalten die Pro-Funktionen kostenlos. Aktive Abonnenten bekommen eine Rückerstattung."],
        ["13. November 2026", "Cloud-Workspaces werden schreibgeschützt: Du kannst alte Chats lesen und Daten exportieren, aber keine Nachrichten mehr senden."],
        ["20. November 2026", "Conductor Cloud wird abgeschaltet, und die Löschung der Cloud-Nutzerdaten beginnt."],
        ["Bis Anfang 2027", "Die lokale Mac-App bekommt weiter neue Modelle und kritische Bugfixes und wird dann eingestellt; bei der Abschaltung werden alle Nutzerdaten gelöscht."],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So behältst du deine Arbeit vor den Fristen",
      steps: [
        {
          title: "Hol Cloud-Workspaces vor dem 13. November auf deinen Mac",
          text: "Klicke in Conductor mit der rechten Maustaste auf jeden Cloud-Workspace und wähle Transfer to local (lokal übertragen). Der Workspace und seine Chats wandern auf deinen Computer.",
        },
        {
          title: "Exportiere deine Daten vor dem 20. November",
          text: "Geh in Conductor zu Settings → Account → Export data (Daten exportieren) und lade alles herunter, auch Chats, die du vielleicht als Notizen oder Prompts behalten willst.",
        },
        {
          title: "Pushe jeden Branch, der dir wichtig ist",
          text: "Lokale Workspaces sind ganz normale Git Worktrees, meist unter `~/conductor/workspaces/<repo>/<workspace>`, die sich die History deines Repositorys teilen. Committe und pushe ihre Branches, damit die Arbeit die App überlebt.",
          code: rescue,
        },
        {
          title: "Nimm deine Setup-Skripte mit",
          text: "Conductor speichert Setup-, Run- und Archive-Skripte pro Projekt in `.conductor/settings.toml` oder `.conductor/settings.local.toml`. Kopiere die Befehle in deine README oder ins Setup deines nächsten Tools, und trage Dateien wie `.env` in eine `.worktreeinclude` ein, wenn du zu Claude Code Worktrees wechselst.",
        },
        {
          title: "Wähle einen Ersatz und teste ihn an einer Aufgabe",
          text: "Vergleiche die Optionen unten und erledige dann eine echte Aufgabe im neuen Tool, bevor dein Zugang zu Conductor Pro endet.",
        },
      ],
      source: { label: "Quelle: Conductors Ankündigung", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Conductor-Alternativen im Vergleich",
      headers: ["", "Conductor", "Claude Code allein", "Codex-App", "Crewmark"],
      rows: [
        ["Was es ist", "Mac-App für parallele Agenten in Worktrees", "`claude --worktree`, parallele Sessions in der Desktop-App, Background Agents", "OpenAIs Desktop-App mit Worktrees und Cloud-Aufgaben", "KI-Mitarbeiter: Agenten-Sessions mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat"],
        ["Agenten", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["Plattformen", "macOS", "macOS, Windows, Linux", "Desktop-App und Web", "macOS, Windows, Linux"],
        ["Isolation", "Ein Git Worktree pro Workspace", "Ein Git Worktree pro Session oder Subagent", "Worktrees", "Jeder Mitarbeiter in eigener Session und eigenem Checkout"],
        ["Wer die nächste Aufgabe startet", "Du", "Du (oder ein Zeitplan)", "Du (oder ein Zeitplan)", "Der Heartbeat: Jeder Mitarbeiter wacht auf und übernimmt das nächste Issue"],
        ["Aufgaben-Board", "Liste der Workspaces", "Nein", "Nein", "Ja, mit Issues, Kommentaren und Nachrichten an dich"],
        ["Status", "Cloud endet am 20. November; lokal bis Anfang 2027", "Aktiv", "Aktiv", "Aktiv"],
      ],
    },
    {
      kind: "text",
      title: "Welche Conductor-Alternative zu dir passt",
      points: [
        "Du hast Conductor vor allem mit Claude Code genutzt: Claude Code erledigt den Kern davon inzwischen selbst. `claude --worktree <name>` gibt jeder Session einen eigenen Worktree und Branch, `.worktreeinclude` kopiert deine `.env`, und die Desktop-App führt parallele Sessions mit einem Worktree-Schalter aus. Siehe die [Anleitung zu Claude Code Worktrees](/blog/claude-code-worktree).",
        "Du hast vor allem Codex genutzt: Die Codex-Desktop-App hat Worktrees und Cloud-Aufgaben eingebaut; vergleiche die beiden Agenten in [Claude Code vs. Codex](/blog/claude-code-vs-codex).",
        "Du brauchst Windows oder Linux: Dort gab es Conductor nie; die CLI von Claude Code und Crewmark laufen beide auf allen drei Systemen.",
        "Du hast Agenten gemischt oder willst, dass sie ohne dich weiterarbeiten: Genau dafür ist Crewmark da (siehe unten). Wie du mehrere Agenten von Hand laufen lässt, steht unter [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Conductor ließ deine Agenten nebeneinander laufen. Crewmark gibt ihnen einen Job.",
      text: [
        "Mit Conductor waren parallele Agenten leicht zu starten und zu reviewen, aber jeder Workspace wartete trotzdem darauf, dass du den nächsten Prompt tippst. Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Bring deine Repositorys und deine Agenten mit",
          text: "Führe den Einrichtungsbefehl in jedem Projekt aus. Mehrere Mitarbeiter können sich ein Repository teilen, jeder in seinem eigenen Checkout, ganz ähnlich wie deine Conductor-Workspaces.",
        },
        {
          title: "Gib jedem eine Rolle und ein Ziel",
          text: "Ein Programmierer, ein Reviewer, ein SEO-Texter: Jeder hat ein als Zahl formuliertes Ziel und feste Arbeitszeiten. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Alle 15, 30 oder 60 Minuten wacht der Mitarbeiter in derselben Konversation auf, übernimmt das nächste Issue und schreibt dir, wenn er eine Entscheidung braucht; siehe [so machst du Claude Code proaktiv](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Deine Arbeit sichern, bevor Conductor abgeschaltet wird" },
  mid: {
    title: "Du verlässt Conductor? Ersetz es nicht nur, sondern steig auf.",
    text: "Crewmark lässt Claude Code, Codex und OpenCode als KI-Mitarbeiter laufen, die per Heartbeat aufwachen und das nächste Issue selbst übernehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zur Abschaltung von Conductor",
    items: [
      {
        q: "Wird Conductor eingestellt?",
        a: "Teilweise. Conductor geht zu Meta. Conductor Cloud wird am 13. November 2026 schreibgeschützt und am 20. November abgeschaltet. Die lokale Mac-App bekommt bis Anfang 2027 weiter neue Modelle und kritische Fixes und wird dann eingestellt.",
      },
      {
        q: "Hat Meta Conductor übernommen?",
        a: "Ja. Conductor hat am 4. November 2026 angekündigt, zu Meta zu gehen, und Meta hat die Übernahme gegenüber TechCrunch bestätigt. Preis und Konditionen wurden nicht genannt.",
      },
      {
        q: "Kann ich Conductor noch herunterladen oder mich registrieren?",
        a: "Nein. Neue Registrierungen und Downloads wurden am 4. November 2026 gestoppt, und Free-Nutzer können nicht mehr auf Pro upgraden.",
      },
      {
        q: "Was passiert mit meinen Daten und meinem Abo?",
        a: "Ab dem 20. November werden Cloud-Nutzerdaten gelöscht, und bei der Abschaltung der App werden alle Nutzerdaten gelöscht. Exportiere sie über Settings → Account → Export data. Aktive Abonnenten bekommen eine Rückerstattung, und Pro-Nutzer behalten die Pro-Funktionen bis dahin kostenlos.",
      },
      {
        q: "Was ist die beste Conductor-Alternative für Claude Code?",
        a: "Das Flag `--worktree` von Claude Code und die parallelen Sessions der Desktop-App decken isolierte, parallele Arbeit ab. Wenn die Sessions sich die Arbeit selbst holen sollen, lass sie als Crewmark-Mitarbeiter laufen.",
      },
      {
        q: "Gibt es eine Conductor-Alternative für Windows oder Linux?",
        a: "Conductor selbst lief nur auf dem Mac. Die CLI von Claude Code mit `--worktree`, einfaches `git worktree` und Crewmark laufen alle auf macOS, Windows und Linux.",
      },
      {
        q: "Funktionieren meine Conductor-Workspaces weiter?",
        a: "Lokale Workspaces sind einfache Git Worktrees mit normalen Branches, der Code bleibt also in deinem Repository, egal was mit der App passiert. Committe und pushe die Branches, die du behalten willst.",
      },
    ],
  },
  cta: {
    title: "Deine Agenten brauchen ein neues Zuhause. Gib ihnen auch einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit Conductors Ankündigung, Changelog und Dokumentation sowie dem Bericht von TechCrunch abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Conductor, Meta, Anthropic oder OpenAI, die es auch nicht unterstützen. Conductor ist eine Marke ihres Inhabers, Claude und Claude Code sind Marken von Anthropic, Codex von OpenAI.",
};
