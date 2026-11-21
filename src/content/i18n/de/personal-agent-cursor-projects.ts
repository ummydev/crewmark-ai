import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects: Was die Funktion kann, Preise und vs Grok Bot",
    description:
      "Cursor Projects erklärt: ein Koordinator-Agent, der größere Coding-Arbeit plant und an Cloud-Agenten gibt. Pläne, Setup, lokale Tests, Review, vs Grok Bot.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Cursor",
    title: "Cursor Projects: wie der Koordinator-Agent größere Arbeit plant und verteilt",
    lead: "Cursor Projects ist eine Cursor-Funktion für größere Arbeitspakete, etwa ein Feature, eine Migration oder eine komplette App. Du chattest mit einem Koordinator-Agenten, der selbst keinen Code schreibt: Er plant die Arbeit, verteilt sie an Agenten, die parallel auf Cursors Cloud Agents laufen, und bringt dir die fertige Arbeit zum Prüfen zurück. Jedes Project führt gemeinsame Dateien, die jeder Agent darin liest, und kann wiederkehrende Arbeit erledigen, ohne dass du es anstoßen musst. Hier erfährst du, wie es funktioniert, welche Pläne es enthalten, wie du es einrichtest, wo es läuft und wie es sich von Grok Bot und Claude Code unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Cursor Projects ist",
      points: [
        "Ein Koordinator und seine Worker: Du sprichst mit einem Koordinator-Agenten, der Worker-Agenten anlegt, sie nach ihrer Aufgabe benennt und steuert. Der Koordinator schreibt selbst keinen Code; er plant die Arbeit und verteilt sie an die Worker, die parallel laufen.",
        "Es läuft in der Cloud: Jedes Project hat einen eigenen Cloud-Computer auf Cursors Cloud Agents, also hält es nicht an, wenn du den Laptop zuklappst.",
        "Gemeinsame Dateien: Ein Project führt Vorlieben, Notizen und Workflows, die jeder Agent darin liest. Eine gemeinsame `notes.md` hält fest, was in Arbeit, eingeplant und erledigt ist.",
        "Eine Aufgabenliste mit Board: Jedes Project hat eine, und in Multiplayer Projects teilen sich alle Mitglieder sie.",
        "Wiederkehrende Arbeit: Sag dem Koordinator, er soll einen Slack-Channel beobachten, nach Zeitplan laufen oder deinen Pull Requests folgen, und er reagiert auf diese Signale ohne Prompt.",
        "Gemacht für Arbeit, die länger dauert als ein Chat: ein Feature mit mehreren Pull Requests, eine Migration oder ein Job, der erledigt wird, während du weg bist.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects: Preise und welche Pläne es enthalten",
      text: [
        "Projects laufen auf Cloud Agents, also sind sie in jedem Cursor-Plan mit Cloud Agents enthalten. Preise von Cursors Hilfeseite zu den Preisen am 13. November 2026. Die bezahlten Pläne von Cursor enthalten ein Nutzungskontingent für Cursor-Modelle (Grok und Composer).",
      ],
      headers: ["Plan", "Preis", "Cursor Projects"],
      rows: [
        ["Free", "-", "Nicht enthalten"],
        ["Plus", "$8/Monat", "Nicht enthalten"],
        ["Premium", "$30/Monat oder $300/Jahr", "Enthalten"],
        ["Super", "$100/Monat", "Enthalten"],
        ["Ultra", "$200/Monat", "Enthalten"],
        ["Teams", "$30, $100 oder $200 pro Platz/Monat", "Enthalten; Multiplayer Projects brauchen ein Team-Konto und Cursor 3.26.13 oder neuer"],
        ["Enterprise", "-", "Enthalten; braucht Cursor 3.21.9 oder neuer"],
        ["Ältere Pläne", "-", "In älteren bezahlten Plänen enthalten; nicht im älteren Hobby"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Cursor Projects ein",
      steps: [
        {
          title: "Prüf deinen Plan und deine Datenschutzeinstellung",
          text: "Du brauchst einen Plan mit Cloud Agents: Premium oder höher, Teams, Enterprise (Cursor 3.21.9 oder neuer) oder einen älteren bezahlten Plan. Mit Privacy Mode (Legacy) sind Projects nicht verfügbar.",
        },
        { title: "Öffne das Agents Window", text: "Projects befinden sich im Agents Window von Cursor und laufen in der Cloud." },
        {
          title: "Beschreib die größere Aufgabe",
          text: "Sag dem Koordinator, was er bauen soll, etwa ein Feature, eine Migration oder eine komplette App, in deinen GitHub-Repositorys. Du wählst das Modell des Koordinators.",
        },
        {
          title: "Füg gemeinsame Dateien hinzu",
          text: "Schreib Vorlieben, Notizen und Workflows für das Project auf; jeder Agent darin liest sie, und `notes.md` hält fest, was in Arbeit, eingeplant und erledigt ist.",
        },
        {
          title: "Prüf die Arbeit und mach sie wiederkehrend",
          text: "Der Koordinator bringt dir fertige Arbeit zum Prüfen zurück. Bitte ihn, einen Slack-Channel zu beobachten, nach Zeitplan zu laufen oder deinen Pull Requests zu folgen, damit er ohne Prompt weitermacht.",
        },
      ],
      source: { label: "Quelle: Cursor-Doku, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei Cursor Projects die Kontrolle behältst",
      points: [
        "Review: Der Koordinator bringt dir fertige Arbeit zum Prüfen zurück.",
        "Überblick: Die Aufgabenliste mit Board und die gemeinsame `notes.md` zeigen, was in Arbeit, eingeplant und erledigt ist.",
        "Trennung: Jedes Project läuft auf einem eigenen Cloud-Computer. Der Koordinator startet einen lokalen Agenten, wenn etwas auf deinem Rechner getestet werden muss.",
        "Teams: In Multiplayer Projects (Team-Konto, Cursor 3.26.13 oder neuer) hat jedes Mitglied einen eigenen Koordinator, die Koordinatoren schreiben sich direkt Nachrichten, und alle Mitglieder teilen sich das Board.",
        "Datenschutz: Mit Privacy Mode (Legacy) sind Projects nicht verfügbar.",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Kann Cursor Projects lokal laufen?",
      text: [
        "Nein, nicht durchgängig. Laut Cursors Doku läuft ein Project auf einem eigenen Computer in der Cloud, also hält es nicht an, wenn du den Laptop zuklappst, und in der Cloud kann es mehr Agenten parallel ausführen, als ein Laptop schaffen würde. Wenn etwas auf deinem Rechner getestet werden muss, startet der Koordinator einen lokalen Agenten, der es dort ausführt.",
        "Cursors Self-Hosted Machines verlagern die Ausführung der Tools auf einen Rechner, den du verwaltest: My Machines für den Laptop, die Devbox oder die VM einer einzelnen Person und Team Pools im Enterprise-Plan. Dateiänderungen, Terminal-Befehle und andere Tool-Aufrufe laufen dann auf diesem Rechner, aber die Agent-Schleife, die Inferenz und die Planung bleiben in Cursors Cloud, und der Worker schickt Cursor die Inhalte, die der Agent braucht. (Cursor-Doku, geprüft am 13. November 2026.)",
        "Wenn du ein ganzes Team aus Agenten auf deinem eigenen Computer laufen lassen willst, funktionieren diese Tools so:",
      ],
      points: [
        "[Claude Code Agent Teams](/blog/claude-code-agent-teams): eine experimentelle, standardmäßig deaktivierte Funktion von Claude Code, bei der eine leitende Session Teammates startet, die sich eine Aufgabenliste teilen und sich gegenseitig Nachrichten schreiben, alles in deinen eigenen Sessions von Claude Code.",
        "[Claude Squad](/compare/claude-squad-vs-conductor): eine Open-Source-Terminal-App (AGPL-3.0), die mehrere Coding-Agenten gleichzeitig ausführt, jeden in seiner eigenen tmux-Session und seinem eigenen Git-Worktree.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor): ein Open-Source-Kanban-Board (Apache-2.0) für Coding-Agenten, das lokal im Browser oder als Desktop-App läuft; seit die Firma dahinter im April 2026 geschlossen wurde, pflegt es seine Community.",
        "[Crewmark](/ai-employees): Open Source (GPL-3.0). Jeder KI-Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle und Zielen, und ein Heartbeat weckt ihn, damit er das nächste Issue von einem gemeinsamen Board nimmt. Die Arbeit ist nicht auf Code beschränkt: Rollen wie [SEO-Spezialist](/ai-employees/seo-specialist) laufen genauso, und die Web-App lässt sich selbst hosten.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot und Claude Code",
      text: [
        "Angaben aus der Dokumentation und von den Preisseiten jedes Anbieters, geprüft am 13. November 2026. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker); siehe auch den [Guide zu Grok Bot](/personal-agent/grok-bot) und [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Im direkten Vergleich: [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). Guides: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["Hersteller", "Cursor", "xAI", "Anthropic"],
        ["Gemacht für", "Größere Coding-Arbeit: ein Feature, eine Migration, eine komplette App", "KI-Teamkollegen, die in deinen Apps, Slack und Teams arbeiten", "Programmieren: liest deine Codebasis, bearbeitet Dateien, führt Befehle aus"],
        ["Mehrere Agenten", "Ein Koordinator plant und verteilt an parallel arbeitende Worker-Agenten", "Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab", "Subagents in einer Session; experimentelle Agent Teams"],
        ["Wo es läuft", "Cursors Cloud Agents, ein Cloud-Computer pro Project; ein lokaler Agent für Tests", "Cloud: Jeder Bot hat einen eigenen Computer", "Terminal, IDE und Desktop-App auf deinem Rechner; Cloud-Sessions im Web"],
        ["Aufgaben-Board", "Eine Aufgabenliste mit Board plus eine gemeinsame `notes.md`", "Keine Angabe; Arbeit wird im Chat, in Slack-Threads und in Meetings übergeben", "Kein Issue-Board; Agent Teams teilen sich eine Aufgabenliste"],
        ["Wiederkehrende Arbeit", "Beobachtet einen Slack-Channel, läuft nach Zeitplan oder folgt deinen Pull Requests", "Routinen nach Zeitplan", "Geplante Aufgaben in Cloud und Desktop, `/loop`"],
        ["Preis", "Cursor Premium ab $30/Monat", "Premium $30, Super $100 oder Ultra $200 pro Monat", "Bezahlte Claude-Pläne, Pro ab $20/Monat"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Projects für einen großen Job. Crewmark für feste Rollen.",
      text: [
        "Cursor Projects koordiniert Agenten bei einem größeren Arbeitspaket. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen, sodass Entwicklungs-, SEO- und Marketingarbeit in einem Repository laufend erledigt wird.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an, etwa Softwareentwickler oder SEO-Spezialist." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cursor Projects einrichten" },
  mid: {
    title: "Du willst Agenten mit einem festen Job?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Cursor Projects",
    items: [
      {
        q: "Was ist Cursor Projects?",
        a: "Eine Cursor-Funktion für größere Arbeitspakete, etwa ein Feature, eine Migration oder eine komplette App. Ein Koordinator-Agent plant die Arbeit, verteilt sie an Agenten, die parallel auf Cursors Cloud Agents laufen, und bringt dir die fertige Arbeit zum Prüfen zurück.",
      },
      {
        q: "Welche Cursor-Pläne enthalten Projects?",
        a: "Jeder Plan mit Cloud Agents: Premium ($30 im Monat oder $300 im Jahr) und höher, Super ($100) und Ultra ($200), Teams ($30, $100 oder $200 pro Platz und Monat), Enterprise und ältere bezahlte Pläne. Free, Plus ($8 im Monat) und das ältere Hobby enthalten es nicht.",
      },
      {
        q: "Läuft Cursor Projects lokal?",
        a: "Nein, es läuft auf Cursors Cloud Agents, jedes Project auf einem eigenen Cloud-Computer, also hält es nicht an, wenn du den Laptop zuklappst. Wenn etwas auf deinem Rechner getestet werden muss, startet der Koordinator einen lokalen Agenten. Mit Privacy Mode (Legacy) sind Projects nicht verfügbar.",
      },
      {
        q: "Wie prüfe ich, was Cursor Projects getan hat?",
        a: "Der Koordinator bringt dir fertige Arbeit zum Prüfen zurück. Die Aufgabenliste mit Board des Projects und die gemeinsame `notes.md` zeigen, was in Arbeit, eingeplant und erledigt ist.",
      },
      {
        q: "Kann sich ein Team ein Cursor Project teilen?",
        a: "Ja, mit Multiplayer Projects auf einem Team-Konto und Cursor 3.26.13 oder neuer. Jedes Mitglied hat einen Koordinator, die Koordinatoren schreiben sich direkt Nachrichten, und alle Mitglieder teilen sich die Aufgabenliste mit Board.",
      },
      {
        q: "Cursor Projects vs Grok Bot: Was ist der Unterschied?",
        a: "Cursor Projects ist ein Coding-Workspace in Cursor: Ein Koordinator verteilt einen größeren Job an Worker-Agenten auf Cloud Agents. Grok Bot sind die gehosteten KI-Teamkollegen von xAI: Bots, die jeweils einen eigenen Cloud-Computer bekommen, sich bei deinen Apps anmelden und in Slack und Microsoft Teams arbeiten. Siehe den [Guide zu Grok Bot](/personal-agent/grok-bot).",
      },
    ],
  },
  cta: {
    title: "Koordiniere einen großen Job in Projects. Und gib deinen Agenten auch eine feste Rolle.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit Cursors Doku zu Projects, dem Hilfe-Center und der Preisseite abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Cursor, xAI oder Anthropic, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
