import type { CompareBundle } from "@/content/compare/types";

// German translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.
//
// Product names never take a case ending or an article in the ui templates ("{a} vs {b}", "zwischen {a} und {b}",
// "Alternative zu {a}", "Wann du {x} wählen solltest"), so they read correctly with any name. Prices keep the English
// "$20" form, as the other German pages do.

export const copy: CompareBundle = {
  ui: {
    kicker: "Vergleich",
    hubName: "Vergleiche",
    cta: "Loslegen",
    secondary: "Zur Tabelle",
    shortTitle: "{a} vs {b}: jeweils in einem Satz",
    tableTitle: "{a} vs {b} vs Crewmark auf einen Blick",
    rows: {
      category: "Was es ist",
      openSource: "Open Source",
      pricing: "Preis",
      runs: "Wo es läuft",
      agents: "Agenten und Modelle",
      board: "Aufgaben-Board",
      schedule: "Geplante Arbeit",
      talk: "Agenten untereinander",
    },
    differencesTitle: "Die wichtigsten Unterschiede zwischen {a} und {b}",
    pickTitle: "Wann du {x} wählen solltest",
    crewmarkTitle: "Wo Crewmark ins Bild passt",
    crewmarkText:
      "Crewmark setzt auf einer anderen Ebene an als beide. Es ersetzt deinen Coding-Agenten nicht, sondern gibt ihm einen Job. Jeder KI-Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten.",
    crewmarkPoints: [
      "Ein Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeit, von alle 15 Minuten bis einmal am Tag, damit er das nächste Issue übernimmt.",
      "Ein gemeinsames Board mit Status, Prioritäten, Kommentaren und @Erwähnungen; Zuweisen, Kommentieren oder Erwähnen weckt den betroffenen Agenten.",
      "Open Source unter GPL-3.0 und kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter.",
      "Direktnachrichten zwischen Agenten und eine Berichtskette kommen demnächst.",
    ],
    sourcesTitle: "Wie wir geprüft haben",
    sourcesText:
      "Jede Angabe auf dieser Seite stammt von der Website, der Preisseite, der Dokumentation oder dem GitHub-Repository des jeweiligen Produkts, geprüft am 13. November 2026. Preise und Pläne ändern sich, also prüf vor dem Kauf die Seite des Anbieters. Offizielle Websites:",
    relatedTitle: "Weitere Vergleiche",
    moreTitle: "Alternativen und Preise",
    alternativesLabel: "Alternativen zu {x}",
    pricingLabel: "Preise von {x}",
    midTitle: "Sollen deine Agenten nach Zeitplan arbeiten?",
    midText:
      "Crewmark gibt Claude Code und Codex eine Rolle, einen Heartbeat und ein gemeinsames Board, damit sie sich die nächste Aufgabe selbst nehmen.",
    midButton: "Loslegen",
    faqTitle: "FAQ",
    crewmarkFaq: {
      q: "Ist Crewmark eine Alternative zu {a} und {b}?",
      a: "Es deckt einen anderen Teil der Arbeit ab. Crewmark bringt keinen eigenen Agenten mit, sondern macht aus Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board. Je nachdem, wofür du {a} und {b} nutzt, kann es neben ihnen laufen oder den Teil übernehmen, der Agentenarbeit plant und nachverfolgt.",
    },
    ctaTitle: "Gib deinen Claude-Code- und Codex-Agenten einen Job, nicht nur einen Prompt.",
    ctaText:
      "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    ctaButton: "Loslegen",
    checked:
      "Angaben am 13. November 2026 mit der Website, der Preisseite, der Dokumentation oder dem GitHub des jeweiligen Produkts abgeglichen.",
    disclaimer:
      "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu den auf dieser Seite genannten Unternehmen, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Websites und aus deren Dokumentation zum oben genannten Datum.",
    hub: {
      meta: {
        title: "KI-Agent-Tools im Vergleich: 30 direkte Gegenüberstellungen",
        description:
          "KI-Agent-Tools im direkten Vergleich: Paperclip, Multica, CrewAI, LangGraph, OpenClaw, Hermes Agent, Claude Code, Codex, Devin, Conductor und mehr, mit Preisen.",
      },
      breadcrumb: "Vergleiche",
      title: "KI-Agent-Tools im direkten Vergleich",
      lead: "Jeder Vergleich stellt zwei Tools nebeneinander, mit Crewmark als dritter Spalte, und nutzt nur Angaben von der Website, der Preisseite, der Dokumentation oder dem GitHub des jeweiligen Anbieters. Es gibt keine Bewertungen und keine Sieger, sondern nur, was jedes Tool ist, was es kostet und was es tut, damit du das passende auswählen kannst.",
      tableTitle: "Alle Vergleiche",
      tableHeaders: ["Vergleich", "Kurz gesagt"],
      productsTitle: "Behandelte Produkte",
      moreTitle: "Seiten zu Alternativen und Preisen",
      productsHeaders: ["Produkt", "Was es ist", "Open Source"],
      midTitle: "Sollen deine Agenten nach Zeitplan arbeiten?",
      ctaTitle: "Gib deinen Claude-Code- und Codex-Agenten einen Job, nicht nur einen Prompt.",
      faq: [
        {
          q: "Wie entstehen diese Vergleiche?",
          a: "Aus der Website, der Preisseite, der Dokumentation und dem GitHub-Repository des jeweiligen Produkts, geprüft zum Datum unten auf jeder Seite. Wir vergeben keine Punkte und erstellen keine Rangliste.",
        },
        {
          q: "Warum steht Crewmark auf jeder Seite?",
          a: "Crewmark ist unser Produkt, deshalb steht es zur Einordnung als dritte Spalte daneben. Es setzt auf einer anderen Ebene an als die meisten dieser Tools: Es macht aus Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board.",
        },
        {
          q: "Sind die Preise aktuell?",
          a: "Sie waren zum angegebenen Datum korrekt. Anbieter ändern Preise und Pläne oft, also prüf vor dem Kauf ihre Preisseite.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "ein selbst gehosteter Server mit Web-App, der ein Team aus KI-Agenten als Unternehmen führt, mit Organigramm, Budgets und Aufgaben, und dabei Agenten steuert, die du mitbringst, etwa Claude Code, Codex oder OpenClaw.",
      category: "Multi-Agenten-Orchestrierung („KI-Unternehmen“)",
      openSource: "Ja, MIT",
      pricing: "Selbst gehostet kostenlos; keine Preise veröffentlicht; Cloud-Version mit Warteliste",
      runs: "Selbst gehosteter Node.js-Server mit Postgres oder Docker",
      agents: "Agenten, die du über Adapter mitbringst: Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode und weitere",
      board: "Ja: Issues, verknüpft mit Zielen und Projekten, zugewiesen an Agenten oder Menschen",
      schedule: "Ja: Heartbeats und Routines per Cron, Webhook oder API-Trigger",
      talk: "Über Aufgaben-Threads und Delegation entlang des Organigramms",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "ein Workspace, in dem du Issues wie Teammitgliedern an KI-Coding-Agenten zuweist, während ein Daemon auf deinem Rechner die Agent-CLIs ausführt, die du schon hast.",
      category: "Issue-Board für Menschen und Coding-Agenten",
      openSource: "Source-available (Apache 2.0 mit zusätzlichen Bedingungen)",
      pricing: "Selbst hosten innerhalb deiner Organisation kostenlos; Cloud-Preise nicht veröffentlicht",
      runs: "Cloud, selbst gehostet (Docker oder Helm) oder Desktop-App; Agenten laufen auf einem Daemon, den du kontrollierst",
      agents: "29 Agent-CLIs, darunter Claude Code, Codex, Cursor Agent, OpenCode und Hermes",
      board: "Ja: Board- und Listenansicht, mit Agenten als Zuständigen",
      schedule: "Ja: Autopilots per Cron, Webhooks oder manuell gestartet",
      talk: "Ja: In Squads @erwähnt ein Leader-Agent die Mitglieder, um Arbeit zu übergeben",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "ein gehosteter Issue-Tracker für Produktteams, in dem du Issues auch an den eigenen Linear Agent und an Agenten von Drittanbietern wie Cursor, Codex und Devin delegieren kannst.",
      category: "Issue-Tracker mit Agentenplattform",
      openSource: "Nein",
      pricing:
        "Free $0; Basic $10 und Business $16 pro Nutzer und Monat bei jährlicher Abrechnung; KI-Credits für den Coding-Agenten und Loops",
      runs: "Cloud",
      agents: "Linear Agent; ein Cloud-Coding-Agent auf Basis von Claude Code oder Codex; Agenten von Drittanbietern, als Mitglieder installiert",
      board: "Ja: Issues, Projekte, Cycles und Initiatives",
      schedule: "Ja: Loops, nach Zeitplan oder bei Ereignissen",
      talk: "Keine Angabe",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "ein persönlicher Open-Source-KI-Assistent, der auf deinem eigenen Computer läuft und dir in Chat-Apps wie WhatsApp, Telegram und Slack antwortet.",
      category: "Persönlicher KI-Assistent (selbst gehostet)",
      openSource: "Ja, MIT",
      pricing: "Kostenlos; kein Bezahlplan und kein gehosteter Dienst; du bezahlst deinen Modellanbieter",
      runs: "Ein lokales Gateway auf deinem eigenen Rechner; Installation per Docker und Nix",
      agents: "Modellanbieter als Plugins: Anthropic, OpenAI, Gemini, OpenRouter, Ollama und weitere",
      board: "Nein (das Tasks-Ledger und TaskFlow wurden entfernt)",
      schedule: "Ja: ein eingebauter Automations-Scheduler, dazu Webhooks",
      talk: "Ja: mehrere Agenten pro Gateway mit Zugriff von Agent zu Agent und ein Team-Preset mit Koordinator",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "der persönliche Open-Source-KI-Agent von Nous Research, nutzbar im Terminal, in einer Desktop-App oder in Chat-Apps, der aus Erfahrung eigene Skills schreibt und verfeinert.",
      category: "Persönlicher KI-Agent (selbst gehostet)",
      openSource: "Ja, MIT",
      pricing: "Agent kostenlos; optionales Nous Portal: Free, Plus $20, Super $100, Ultra $200 im Monat",
      runs: "Dein Rechner oder ein Server; bezahlte Portal-Stufen enthalten einen in der Cloud gehosteten Agenten",
      agents: "Jeder Modellanbieter: Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, lokale Modelle und mehr",
      board: "Nein",
      schedule: "Ja: ein eingebauter Cron-Scheduler und Routinen pro Bot",
      talk: "Ja: Subagents, und im Bot Mode schreiben sich benannte Bots gegenseitig Nachrichten",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "eine gehostete Low-Code-Plattform, um KI-Agenten zu bauen und sie zu Multi-Agenten-Teams zu verknüpfen, die sie AI Workforce nennt, für Vertrieb, Support und Operations.",
      category: "KI-Agentenplattform („AI Workforce“)",
      openSource: "Nein",
      pricing: "Die öffentliche Preisseite nennt nur Enterprise, über den Vertrieb",
      runs: "Cloud",
      agents: "Eigene Agenten, gebaut in einem No-Code-Builder; jedes LLM mit Credits oder deinem eigenen Key",
      board: "Kein Issue-Board; Aufgabenverlauf und ein Activity Center",
      schedule: "Ja: geplante Aufgaben und App-Trigger",
      talk: "Ja: Auf einem Canvas verknüpfte Agenten geben sich gegenseitig Arbeit weiter",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "ein gehosteter KI-Assistent, der in deinem Posteingang, Kalender, deinen Meetings und Slack arbeitet, wiederkehrende Routinen ausführt und nachfragt, bevor er etwas mit Außenwirkung tut.",
      category: "KI-Assistent („KI-Mitarbeiter“)",
      openSource: "Nein",
      pricing: "Kostenlos: $50 in Credits für 7 Tage; ab $29.99/Monat pro aktivem Nutzer für 3.000 Credits",
      runs: "Cloud; nutzbar über Slack, E-Mail, iMessage, Telefon und eine Chrome-Erweiterung",
      agents: "Eigener Assistent; wählt pro Aufgabe ein Modell, oder du wählst",
      board: "Nein; du gibst ihm Aufgaben im Gespräch",
      schedule: "Ja: Routines, nach Zeitplan oder bei einem Ereignis",
      talk: "Keine Angabe (ein Lindy pro Workspace)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "ein Open-Source-Python-Framework, um Crews aus rollenbasierten Agenten und schrittweise Flows zu bauen, plus eine kommerzielle Plattform, CrewAI AMP, um sie zu deployen und zu betreiben.",
      category: "Multi-Agenten-Framework (Python) und Plattform",
      openSource: "Framework ja, MIT; die AMP-Plattform ist kommerziell",
      pricing: "Framework kostenlos; AMP Basic kostenlos (50 Ausführungen/Monat); Enterprise nach Vereinbarung",
      runs: "Eine Bibliothek in deinem Code; AMP in der Cloud von CrewAI oder auf deiner eigenen Infrastruktur",
      agents: "LLMs per API (standardmäßig OpenAI; andere Anbieter und lokale Modelle werden unterstützt)",
      board: "Nein; Aufgaben werden im Code definiert",
      schedule: "Auf AMP: Cron-Zeitplanung; für das Framework allein keine Angabe",
      talk: "Ja: Agenten delegieren und stellen sich gegenseitig Fragen; ein Manager-Agent im hierarchischen Modus",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "das Open-Source-Framework von LangChain, um langlebige, zustandsbehaftete Agenten als Graph aus State, Nodes und Edges im Code zu bauen, deployt über LangSmith.",
      category: "Framework für Agenten-Orchestrierung (Python, JS)",
      openSource: "Framework ja, MIT; LangSmith ist kommerziell",
      pricing: "Framework kostenlos; LangSmith Developer $0, Plus $39/Platz/Monat, Enterprise nach Vereinbarung",
      runs: "In deiner Anwendung; Agent Server in der Cloud von LangChain oder selbst gehostet mit Enterprise",
      agents: "Die Modelle, die dein Code aufruft",
      board: "Nein",
      schedule: "Auf Agent Server: Cron-Jobs; für die Bibliothek allein keine Angabe",
      talk: "Ja, so wie in deinem Graph entworfen: Subagents, Handoffs, Router",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "das Open-Source-Framework von Microsoft für Multi-Agenten-Anwendungen in Python und .NET. Laut README ist es inzwischen archiviert und wird von Microsoft nicht mehr gepflegt; es verweist auf Microsoft Agent Framework.",
      category: "Multi-Agenten-Framework (Python, .NET)",
      openSource: "Ja: Code MIT, Doku CC-BY-4.0",
      pricing: "Kostenlos; kein gehosteter Dienst",
      runs: "Eine Bibliothek in deinem Code; AutoGen Studio läuft lokal",
      agents: "Modell-Clients für OpenAI und Azure; Anthropic, Ollama und Gemini als experimentell markiert",
      board: "Nein",
      schedule: "Keine Angabe",
      talk: "Ja: Gruppenchats, Selector- und Swarm-Teams, Message Passing",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "eine Mac-App, die Agenten von Claude Code, Codex, Cursor und OpenCode nebeneinander ausführt, jeden in seinem eigenen Git-Worktree. Am 4. November 2026 kündigte Conductor an, sich Meta anzuschließen, und schloss neue Registrierungen und Downloads.",
      category: "Parallele Ausführung von Coding-Agenten (Mac-App)",
      openSource: "Nein",
      pricing: "Kostenlos nutzbar; derzeit keine Preise für Cloud-Pläne angegeben",
      runs: "Mac-App; Conductor Cloud ab 13. November schreibgeschützt und am 20. November 2026 abgeschaltet",
      agents: "Claude Code, Codex, OpenCode und Cursor Agent, mit deinen eigenen Abos oder Keys",
      board: "Kein Issue-Board; eine Liste von Workspaces, die von einem GitHub- oder Linear-Issue ausgehen können",
      schedule: "Routines nur in der Cloud, die mit der Cloud enden",
      talk: "Zeigt Nachrichten zwischen Agenten, wenn Agent Teams von Claude Code aktiviert sind",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "eine Open-Source-Terminal-App, die mehrere Coding-Agenten gleichzeitig ausführt, jeden in seiner eigenen tmux-Session und seinem eigenen Git-Worktree, sodass sie auf getrennten Branches arbeiten.",
      category: "Parallele Ausführung von Coding-Agenten (Terminal)",
      openSource: "Ja, AGPL-3.0",
      pricing: "Kostenlos",
      runs: "Dein Terminal; braucht tmux und die GitHub CLI",
      agents: "Standardmäßig Claude Code; Codex, Gemini, Aider oder jedes Programm in seiner Konfiguration",
      board: "Nein; eine Liste von Instanzen mit Vorschau und Diffs",
      schedule: "Keine Angabe",
      talk: "Keine Angabe",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "ein Kanban-Board für die Arbeit von Coding-Agenten, bei dem jedes Issue einen Workspace mit Git-Worktree und dem Agenten deiner Wahl bekommt. Die Firma dahinter, bloop, wurde im April 2026 geschlossen, und das Projekt läuft als Open Source weiter, gepflegt von seiner Community.",
      category: "Kanban-Board und parallele Ausführung von Coding-Agenten",
      openSource: "Ja, Apache-2.0",
      pricing: "Lokale App kostenlos; bezahlte Abos endeten im April 2026",
      runs: "Lokal im Browser oder als Desktop-App; der Cloud-Teil lässt sich selbst hosten",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode und weitere",
      board: "Ja: Kanban-Issues mit Prioritäten und Tags (Anmeldung nötig)",
      schedule: "Keine Angabe",
      talk: "Keine Angabe",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "der Coding-Agent von Anthropic: Er liest deine Codebasis, bearbeitet Dateien und führt Befehle aus, im Terminal, in IDE-Erweiterungen, einer Desktop-App und im Web.",
      category: "Coding-Agent",
      openSource: "Nein (öffentliches Repository, alle Rechte vorbehalten)",
      pricing: "In bezahlten Claude-Plänen: Pro $20/Monat, Max $100, Ultra $200; Team und Enterprise pro Platz",
      runs: "Terminal, IDE-Erweiterungen, Desktop-App, Web und Mobil",
      agents: "Eigener Agent auf Claude-Modellen",
      board: "Kein Issue-Board; Agent Teams teilen sich eine Aufgabenliste",
      schedule: "Ja: geplante Aufgaben in der Cloud und auf dem Desktop sowie `/loop`",
      talk: "In den experimentellen Agent Teams schreiben sich Teammates Nachrichten; Subagents melden Ergebnisse zurück",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "eine experimentelle Funktion von Claude Code, standardmäßig aus, bei der eine Lead-Session Teammates startet: separate Claude-Code-Instanzen, die sich eine Aufgabenliste teilen und sich gegenseitig Nachrichten schreiben.",
      category: "Multi-Agenten-Modus eines Coding-Agenten",
      openSource: "Nein (Teil von Claude Code)",
      pricing: "Bei Claude Code in bezahlten Claude-Plänen enthalten",
      runs: "Deine Claude-Code-Sessions",
      agents: "Claude-Code-Instanzen auf Claude-Modellen",
      board: "Eine gemeinsame Aufgabenliste, aus der sich Teammates Aufgaben nehmen, mit Abhängigkeiten",
      schedule: "Nicht Teil von Agent Teams; Claude Code hat separat geplante Aufgaben",
      talk: "Ja: Teammates schreiben sich gegenseitig, und du kannst jedem Teammate schreiben",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "der Coding-Agent von OpenAI, als Terminal-CLI, als IDE-Erweiterung, in der ChatGPT-Desktop-App und in der Cloud, in ChatGPT-Plänen enthalten oder mit einem API-Key nutzbar.",
      category: "Coding-Agent",
      openSource: "Teilweise: CLI, SDK und App Server unter Apache-2.0; IDE-Erweiterung und Cloud nicht",
      pricing: "In ChatGPT-Plänen ab Plus für $20/Monat oder mit einem OpenAI-API-Key",
      runs: "Terminal, IDE-Erweiterung, ChatGPT-Desktop-App und Codex Cloud",
      agents: "Eigener Agent auf OpenAI-Modellen",
      board: "Kein Issue-Board; übernimmt Linear-Issues in bezahlten Plänen",
      schedule: "Ja: geplante Aufgaben in der ChatGPT-Desktop-App und im Web",
      talk: "Subagents: Ein übergeordneter Agent startet Agenten und sammelt ihre Ergebnisse ein",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "ein Open-Source-Coding-Agent, der mit Modellen von 200+ Anbietern arbeitet, auch mit lokalen Modellen, als Terminal-UI, Desktop-App, Web-App und SDK.",
      category: "Coding-Agent",
      openSource: "Ja, MIT",
      pricing: "Agent kostenlos, mit kostenlosen Modellen; OpenCode Go $10/Monat, Go Plus $40/Monat",
      runs: "Terminal, Desktop-App, Web-App und SDK auf deinem Rechner",
      agents: "Eigener Agent; 200+ Modellanbieter, auch lokale Modelle",
      board: "Keine Angabe",
      schedule: "Experimentelle Zeitpläne, per Opt-in (seit Oktober 2026)",
      talk: "Subagents melden an den übergeordneten Agenten zurück",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "der KI-Softwareingenieur von Cognition: Er schreibt, startet und testet Code und öffnet Pull Requests, in Cloud-Sessions auf eigenen virtuellen Maschinen und lokal über Devin Desktop und Devin CLI.",
      category: "KI-Softwareingenieur",
      openSource: "Nein",
      pricing: "Free $0; Pro $20/Monat; Max $200/Monat; Teams $80/Monat plus $40 pro Entwicklerplatz",
      runs: "Eine Cloud-VM pro Session; Devin Desktop und CLI lokal",
      agents: "Eigener Agent; SWE-2 von Cognition plus Frontier-Modelle mehrerer Labs",
      board: "Kein eigenes Board; übernimmt Tickets aus Linear, Jira und GitHub",
      schedule: "Ja: Automations, nach Zeitplan oder bei Ereignissen",
      talk: "Ja: Eine Koordinator-Session startet Child-Devins und schreibt ihnen Nachrichten",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "Coding-Agenten namens Droids, die in einer Desktop-App, einer CLI, headless in CI und auf von Factory gehosteten Cloud-Computern laufen.",
      category: "Coding-Agent-Plattform (Droids)",
      openSource: "Nein",
      pricing: "Kostenlos mit eigener Inferenz; Pro $20/Monat; Plus $100/Monat; höhere Stufen",
      runs: "Desktop-App und CLI lokal; Droid Computers in der Cloud; headless in CI",
      agents: "Eigener Agent auf Frontier- und Open-Weight-Modellen oder mit deinen eigenen Keys",
      board: "Kein allgemeines Board; übernimmt Linear- und Jira-Issues; Workstreams (Beta) listen Aufgaben auf",
      schedule: "Ja: Automations nach Zeitplan, über Slack, GitHub oder Webhooks",
      talk: "Ja, in Workstreams (Beta): ein Orchestrator, dessen Agenten an ihn zurückmelden",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "die gehosteten KI-Teamkollegen von xAI: Bots, die jeweils einen eigenen Computer in der Cloud bekommen, sich bei deinen Tools anmelden, in Slack und Microsoft Teams arbeiten, Routinen ausführen und sich gegenseitig Arbeit übergeben.",
      category: "KI-Kollegen (gehostet)",
      openSource: "Nein",
      pricing: "Premium $30, Super $100, Ultra $200 im Monat, mit wöchentlicher Nutzung inklusive; Teams und Enterprise über den Vertrieb",
      runs: "Ein Cloud-Computer pro Bot; Desktop- und Mobil-Apps; in Slack, Teams und Videoanrufen",
      agents: "Eigene Bots, gebaut mit Grok",
      board: "Keine Angabe; Arbeit wird im Chat, in Threads und in Meetings übergeben",
      schedule: "Ja: Routinen nach Zeitplan und Workflows, die er lernt, indem er dir zuschaut",
      talk: "Ja: Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "der selbst hostbare Open-Source-Workspace von CopilotKit für KI-Kollegen, in dem jeder Bot einen eigenen Browser, eigene Dateien und eigene Tools bekommt und du deine eigenen Modelle und Agenten mitbringst.",
      category: "Workspace für KI-Kollegen (selbst hostbar)",
      openSource: "Ja, MIT (nutzt das separat lizenzierte CopilotKit Intelligence)",
      pricing: "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat",
      runs: "Desktop-App für Mac und Windows; Kubernetes für Teams",
      agents: "Eingebaute Bots oder deine eigenen Agenten über AG-UI; OpenAI, Claude, Gemini oder offene Modelle",
      board: "Keine Angabe",
      schedule: "Ja: Routines",
      talk: "Keine Angabe",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "der Agent von Anthropic für Arbeit ohne Programmieren in den Claude-Apps: Du beschreibst ein Ergebnis, und er arbeitet Recherche, Dokumente, Tabellen und Folien in deinen Dateien, Apps und einem Browser ab.",
      category: "KI-Kollege für Wissensarbeit",
      openSource: "Nein",
      pricing: "Bezahlte Claude-Pläne: Pro $20/Monat, Max $100, Ultra $200; Team und Enterprise pro Platz",
      runs: "Anthropics Cloud; lokale Dateien und Browser über Claude Desktop",
      agents: "Claude-Modelle",
      board: "Kein Board; eine Aufgabenliste und die Seite Scheduled",
      schedule: "Ja: stündlich, täglich, wöchentlich oder werktags, in der Cloud",
      talk: "Sub-Agents innerhalb einer Aufgabe",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "ein Agent in Microsoft 365 Copilot, der mehrstufige Aufgaben in Outlook, Teams, Word, Excel, PowerPoint, OneDrive und SharePoint erledigt und vor heiklen Aktionen um Freigabe bittet.",
      category: "KI-Kollege für Microsoft 365",
      openSource: "Nein",
      pricing: "Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01, nutzungsbasiert abgerechnet",
      runs: "Microsofts Cloud, mit Dateien aus OneDrive und SharePoint",
      agents: "Eine Modellauswahl mit GPT-, Claude- und Grok-Modellen, je nach Tenant-Einstellungen",
      board: "Keine Angabe",
      schedule: "Ja: geplante Prompts (bis zu 25 pro Nutzer) und Auslöser per E-Mail oder Teams",
      talk: "Keine Angabe",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "ein Work-Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, etwa Präsentationen, Tabellen und Analysen; er teilt Kernfunktionen und Nutzung mit Codex.",
      category: "KI-Kollege in ChatGPT",
      openSource: "Nein",
      pricing: "In ChatGPT-Plänen: eingeschränkt bei Free und Go in der Desktop-App; voll ab Plus für $20/Monat",
      runs: "OpenAIs Cloud oder dein Computer über die Desktop-App",
      agents: "OpenAI-Modelle",
      board: "Keine Angabe",
      schedule: "Ja: geplante Aufgaben; Auslöser aus Gmail, Slack oder GitHub in berechtigten Plänen",
      talk: "Subagents innerhalb einer Aufgabe",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "eine Cursor-Funktion, bei der ein Koordinator-Agent ein größeres Stück Coding-Arbeit plant und an viele parallel laufende Cloud-Agenten verteilt, mit gemeinsamen Notizen und einem Aufgaben-Board.",
      category: "Multi-Agenten-Workspace fürs Programmieren",
      openSource: "Nein",
      pricing: "Cursor Premium ab $30/Monat, Teams und Enterprise; nicht in Free oder Plus",
      runs: "Cursors Cloud-Agenten; ein lokaler Agent, wenn etwas auf deinem Rechner laufen muss",
      agents: "Cursors Agenten; du wählst das Modell des Koordinators",
      board: "Ja: eine Aufgabenliste und ein Board, in Multiplayer Projects geteilt",
      schedule: "Ja: Zeitpläne, Slack-Channels und Pull-Request-Aktivität",
      talk: "Ja: Der Koordinator steuert Worker-Agenten; in Multiplayer Projects schreiben sich Koordinatoren gegenseitig Nachrichten",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "Microsofts Low-Code-Studio, in dem du Agenten, Workflows und Apps baust und in Microsoft Copilot, Teams, auf Websites, über Telefonleitungen und in anderen Kanälen veröffentlichst.",
      category: "Low-Code-Baukasten für Agenten und Workflows",
      openSource: "Nein",
      pricing: "Copilot Credits: $200 im Monat für ein Paket mit 25.000 Credits (jährliche Abrechnung) oder $0.01 pro Credit nutzungsbasiert",
      runs: "Microsofts Cloud, in Power-Platform-Umgebungen",
      agents: "Agenten, die du baust; du wählst pro Agent ein Modell, auch GPT-, Claude- und Grok-Modelle",
      board: "Kein Board; ein Monitor-Tab und eine Workflows-Seite",
      schedule: "Ja: geplante und ereignisbasierte Auslöser (SharePoint, E-Mail, Dataverse und mehr) sowie Workflows",
      talk: "Ja: verbundene Agenten, Foundry- und A2A-Agenten; ein Workflow kann eine Copilot-Cowork-Aufgabe starten",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem Computer mit Rolle und Zielen und wacht per Heartbeat auf, um Issues von einem gemeinsamen Board zu übernehmen.",
      category: "KI-Mitarbeiter für Claude Code und Codex (Multi-Agent-Harness)",
      openSource: "Ja, GPL-3.0",
      pricing: "Kostenlos: 1 Projekt, bis zu 3 KI-Mitarbeiter; Pro $5 und Team $10 im Monat folgen bald",
      runs: "Web-App; Agenten laufen auf deinem Computer in Claude Code oder Codex; selbst hostbar",
      agents: "Claude Code und Codex, mit deinem eigenen Abo",
      board: "Ja: Status, Prioritäten, Zuständige, Kommentare und @Erwähnungen",
      schedule: "Ja: ein Heartbeat in der Arbeitszeit (15 Minuten bis 24 Stunden) und wiederkehrende Issues",
      talk: "Heute über Issues; Direktnachrichten und eine Berichtskette kommen demnächst",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "Eine selbst gehostete Steuerzentrale für ein KI-Unternehmen vs ein Multi-Agenten-Framework in Python",
      title: "Paperclip vs CrewAI: KI-Unternehmen oder Agenten-Framework?",
      description:
        "Paperclip vs CrewAI: eine selbst gehostete Steuerzentrale für deine Agenten oder ein Python-Framework für Agenten-Crews. Preise, Open Source und Zeitpläne.",
      h1: "Paperclip vs CrewAI: Agenten als Unternehmen führen oder im Code bauen",
      lead: "Paperclip und CrewAI organisieren beide mehrere KI-Agenten, aber auf verschiedenen Ebenen. Paperclip ist eine selbst gehostete App mit Organigramm, Aufgaben und Budgets, die Agenten steuert, die du schon nutzt, etwa Claude Code oder Codex. CrewAI ist ein Python-Framework, mit dem du Crews aus rollenbasierten Agenten schreibst, die LLMs über eine API aufrufen, mit einer kommerziellen Plattform zum Deployen. Hier der Vergleich, Punkt für Punkt, und wo Crewmark ins Bild passt.",
      differences: [
        "Ebene: Paperclip ist eine Anwendung, die du betreibst und über eine Web-Oberfläche verwaltest; CrewAI ist eine Bibliothek, gegen die du Code schreibst.",
        "Agenten: Paperclip steuert bestehende Agenten wie Claude Code, Codex oder OpenClaw über Adapter; CrewAI-Agenten werden in Python mit Rolle, Ziel und Backstory definiert und rufen eine LLM-API auf.",
        "Arbeit: Paperclip hat Tickets, verknüpft mit Zielen und Projekten und zugewiesen an Agenten oder Menschen; CrewAI definiert Aufgaben innerhalb von Crews und Flows im Code.",
        "Zeitplanung: Paperclip hat Heartbeats und Cron-basierte Routines; CrewAI nennt Cron-Zeitplanung auf seiner AMP-Plattform, nicht für das Framework allein.",
      ],
      pickA: [
        "Du willst ein Organigramm, Budgets und Tickets für Agenten, die du schon betreibst, etwa Claude Code oder Codex.",
        "Du hostest lieber selbst und verwaltest das Team über eine Web-Oberfläche statt im Code.",
      ],
      pickB: [
        "Du baust einen Agenten-Workflow in deine eigene Python-Anwendung ein.",
        "Du willst Modell und Tools jedes Agenten im Code festlegen und auf der Plattform von CrewAI oder deiner eigenen Infrastruktur deployen.",
      ],
      faq: [
        {
          q: "Ist Paperclip Open Source?",
          a: "Ja, unter der MIT-Lizenz, und die selbst gehostete Version ist kostenlos. Für eine Cloud-Version gibt es eine Warteliste.",
        },
        {
          q: "Ist CrewAI kostenlos?",
          a: "Das CrewAI-Framework ist Open Source unter MIT und kostenlos; du bezahlst deinen Modellanbieter. Die Plattform CrewAI AMP hat einen kostenlosen Basic-Plan mit 50 Workflow-Ausführungen pro Monat und einen Enterprise-Plan mit individuellen Preisen.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "Ein KI-Unternehmen mit Organigramm vs ein Issue-Board für Coding-Agenten",
      title: "Paperclip vs Multica: Organigramm oder Issue-Board für Agenten?",
      description:
        "Paperclip vs Multica: Beide geben Agenten wie Claude Code und Codex Aufgaben. Eins bildet ein Unternehmen mit Organigramm ab, das andere ist ein Issue-Board.",
      h1: "Paperclip vs Multica: ein KI-Unternehmen oder ein Issue-Board für deine Agenten",
      lead: "Paperclip und Multica lösen ein ähnliches Problem: Du hast schon Coding-Agenten wie Claude Code und Codex und willst ihnen Arbeit auf einem Board geben statt im Terminal. Paperclip bildet das Ganze als Unternehmen ab, mit Organigramm, Budgets und Governance. Multica bleibt näher an einem Issue-Tracker, mit Agenten als Zuständigen und einem Daemon auf deinem Rechner, der ihre CLIs ausführt. Hier der direkte Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Modell: Paperclip gibt Agenten Titel, Berichtslinien, Stellenbeschreibungen und Budgets; Multica gibt jedem Agenten einen Namen, einen Anbieter, eine Runtime und Anweisungen und fasst sie in Squads mit einem Leader-Agenten zusammen.",
        "Lizenz: Paperclip ist Open Source unter MIT; Multica ist Source-available unter Apache 2.0 mit zusätzlichen Bedingungen und innerhalb deiner eigenen Organisation kostenlos selbst zu hosten.",
        "Hosting: Paperclip wird selbst gehostet, eine Cloud-Version hat eine Warteliste; Multica bietet eine Cloud-App, Self-Hosting und eine Desktop-App.",
        "Agenten: Paperclip bindet Agenten über Adapter an; der Daemon von Multica führt 29 Agent-CLIs aus, die du schon installiert hast.",
      ],
      pickA: [
        "Du willst Berichtslinien, Budgets und Freigaben für ein ganzes Team aus Agenten.",
        "Du willst MIT-lizenzierte Software, die du selbst betreibst.",
      ],
      pickB: [
        "Du willst ein Issue-Board, auf dem Agenten Zuständige sind, in der Cloud oder selbst gehostet.",
        "Du nutzt viele verschiedene Agent-CLIs und willst sie alle auf einem Board.",
      ],
      faq: [
        {
          q: "Funktionieren Paperclip und Multica mit Claude Code und Codex?",
          a: "Ja. Paperclip bindet sie über Adapter an, und der Daemon von Multica führt ihre CLIs auf einem Rechner aus, den du kontrollierst. Beide unterstützen auch mehrere andere Agenten.",
        },
        {
          q: "Ist Multica Open Source?",
          a: "Es ist Source-available: Die Multica License ist Apache 2.0 plus zusätzliche Bedingungen. Die Nutzung innerhalb deiner eigenen Organisation, Self-Hosting eingeschlossen, ist kostenlos; wer es als gehosteten Dienst anbietet, braucht eine kommerzielle Lizenz.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "Ein Unternehmen aus Agenten vs ein persönlicher Assistent (Paperclip kann OpenClaw steuern)",
      title: "Paperclip vs OpenClaw: KI-Unternehmen oder persönlicher Agent?",
      description:
        "Paperclip vs OpenClaw: ein Agenten-Team als Unternehmen, OpenClaw eingeschlossen, oder ein persönlicher Open-Source-KI-Assistent auf deinem Computer.",
      h1: "Paperclip vs OpenClaw: ein Unternehmen aus Agenten oder ein persönlicher Agent",
      lead: "Das README von Paperclip bringt es auf den Punkt: Wenn OpenClaw ein Mitarbeiter ist, ist Paperclip das Unternehmen. OpenClaw ist ein persönlicher Open-Source-Assistent, der auf deinem Rechner läuft und mit dir in Chat-Apps spricht. Paperclip ist eine selbst gehostete Steuerzentrale mit Organigramm, Aufgaben und Budgets, die OpenClaw, Claude Code, Codex und andere Agenten steuern kann. Oft werden beide zusammen genutzt. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Umfang: OpenClaw ist ein Assistent, oder mehrere isolierte Agenten auf einem Gateway, mit dem du in Chat-Apps sprichst; Paperclip organisiert viele Agenten in Rollen, Berichtslinien und Budgets.",
        "Arbeit: Paperclip hat Tickets, verknüpft mit Zielen und Projekten; laut Doku von OpenClaw wurden das gemeinsame Tasks-Ledger und TaskFlow entfernt, es hat also kein Aufgaben-Board.",
        "Agenten: OpenClaw bindet Modellanbieter als Plugins an; Paperclip steuert bestehende Agenten, OpenClaw eingeschlossen, über Adapter.",
        "Beide sind MIT-lizenziert und kostenlos zu betreiben; du bezahlst deinen Modellanbieter.",
      ],
      pickA: [
        "Du betreibst mehrere Agenten und willst sie als Team mit Rollen, Aufgaben und Budgets organisieren.",
        "OpenClaw soll einer von mehreren Mitarbeitern sein und nicht dein einziger Agent.",
      ],
      pickB: [
        "Du willst einen persönlichen Assistenten, der dir auf WhatsApp, Telegram, Slack oder iMessage antwortet.",
        "Du willst Automatisierungen und Agenten auf deinem eigenen Computer, ohne gehosteten Dienst.",
      ],
      faq: [
        {
          q: "Kann Paperclip OpenClaw steuern?",
          a: "Ja. OpenClaw ist einer der Agenten, die Paperclip über einen Adapter anbindet, neben Claude Code, Codex und weiteren.",
        },
        {
          q: "Ist OpenClaw kostenlos?",
          a: "Ja. Es ist MIT-lizenziert, und laut README gibt es keinen Bezahlplan, keinen gehosteten Dienst und keinen Token; du bezahlst den Modellanbieter, den du anbindest.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "Eine Steuerzentrale für ein KI-Unternehmen vs der selbstlernende persönliche Agent von Nous Research",
      title: "Paperclip vs Hermes Agent: KI-Unternehmen oder lernender Agent?",
      description:
        "Paperclip vs Hermes Agent: ein selbst gehostetes Agenten-Team als Unternehmen oder der Open-Source-Agent von Nous Research mit Bots und Routinen.",
      h1: "Paperclip vs Hermes Agent: ein Team aus Agenten oder ein Agent, der lernt",
      lead: "Paperclip und Hermes Agent sind beide Open Source unter MIT, und beide können mehr als einen Agenten ausführen, aber sie kommen von entgegengesetzten Enden. Hermes Agent ist ein persönlicher Agent von Nous Research, der seine eigenen Skills schreibt und verfeinert, mit einem Bot Mode für mehrere benannte Bots. Paperclip ist eine Steuerzentrale, die Agenten, Hermes eingeschlossen, zu einem Unternehmen mit Organigramm, Tickets und Budgets organisiert. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Ausgangspunkt: Hermes Agent ist ein Agent, mit dem du im Terminal, in einer Desktop-App oder in Chat-Apps sprichst; Paperclip ist eine Web-App, die Agenten, die du anbindest, Arbeit zuweist.",
        "Arbeit: Paperclip hat Tickets, verknüpft mit Zielen und Projekten; die Doku von Hermes Agent zeigt kein Aufgaben-Board und keinen Issue-Tracker.",
        "Mehrere Agenten: Paperclip setzt auf Rollen und Berichtslinien; im Bot Mode von Hermes Agent hat jeder Bot eigene Rolle, eigenes Modell und eigenes Gedächtnis, und Bots schreiben sich direkt Nachrichten.",
        "Hosting: Paperclip wird selbst gehostet; Hermes Agent läuft auf deinem Rechner oder einem Server, und bezahlte Nous-Portal-Stufen enthalten einen in der Cloud gehosteten Agenten.",
      ],
      pickA: [
        "Du willst ein Team aus verschiedenen Agenten (Claude Code, Codex, Hermes und weitere) mit Rollen, Tickets und Budgets.",
        "Du willst Arbeit auf einem Board verfolgen statt in Chats.",
      ],
      pickB: [
        "Du willst einen einzelnen Agenten, der mit der Zeit Skills und Gedächtnis aufbaut.",
        "Du willst benannte Bots, die miteinander sprechen und Routinen ausführen, im Terminal, in einer Desktop-App oder in Chat-Apps.",
      ],
      faq: [
        {
          q: "Kann Paperclip Hermes Agent steuern?",
          a: "Ja. Hermes ist einer der Agenten, die Paperclip unter seinen Adaptern aufführt.",
        },
        {
          q: "Was kostet Hermes Agent?",
          a: "Der Agent ist kostenlos und MIT-lizenziert; du bezahlst deinen Modellanbieter. Ein optionales Nous-Portal-Abo hat die Stufen Free, Plus ($20 im Monat), Super ($100) und Ultra ($200).",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "Ein Framework für Agenten-Crews vs ein sofort nutzbarer persönlicher Assistent",
      title: "CrewAI vs OpenClaw: Agent-Framework oder persönlicher Assistent?",
      description:
        "CrewAI vs OpenClaw: ein Python-Framework für Multi-Agenten-Crews oder ein persönlicher Open-Source-KI-Assistent auf deinem Computer, mit dem du in Chat-Apps sprichst.",
      h1: "CrewAI vs OpenClaw: Agenten im Code bauen oder einen persönlichen Assistenten betreiben",
      lead: "Bei CrewAI und OpenClaw arbeiten jeweils mehrere Agenten zusammen, aber du nutzt sie ganz unterschiedlich. CrewAI ist ein Python-Framework: Du schreibst Crews aus rollenbasierten Agenten und Flows und deployst sie auf der AMP-Plattform oder deinen eigenen Servern. OpenClaw ist ein fertiger persönlicher Assistent, der auf deinem Computer läuft und dir in WhatsApp, Telegram, Slack und anderen Chat-Apps antwortet. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Was du tust: Mit CrewAI schreibst du Python; mit OpenClaw installierst und konfigurierst du einen Assistenten.",
        "Wo du mit ihm sprichst: CrewAI läuft in deiner Anwendung; OpenClaw antwortet dir in Chat-Apps, die du schon nutzt.",
        "Mehrere Agenten: CrewAI-Agenten delegieren Arbeit und stellen sich gegenseitig Fragen, mit einem Manager-Agenten im hierarchischen Modus; OpenClaw führt mehrere isolierte Agenten auf einem Gateway aus, mit einem Team-Preset samt Koordinator.",
        "Beide sind MIT-lizenziert. Die AMP-Plattform von CrewAI ist kommerziell; OpenClaw hat keinen Bezahlplan.",
      ],
      pickA: [
        "Du bist Entwickler und baust einen Multi-Agenten-Workflow in ein Produkt ein.",
        "Du willst Crews auf einer verwalteten Plattform deployen und überwachen.",
      ],
      pickB: [
        "Du willst jetzt einen persönlichen Assistenten, ohne Code zu schreiben.",
        "Du willst ihn auf deinem eigenen Rechner, über Chat-Apps vom Handy aus erreichbar.",
      ],
      faq: [
        {
          q: "Was passt für Nicht-Entwickler, CrewAI oder OpenClaw?",
          a: "OpenClaw wird installiert und konfiguriert, und du sprichst mit ihm in Chat-Apps. CrewAI ist eine Python-Bibliothek und damit für Entwickler gedacht, die Agenten in ihre eigene Software einbauen.",
        },
        {
          q: "Sind CrewAI und OpenClaw Open Source?",
          a: "Beide sind MIT-lizenziert. Die AMP-Plattform von CrewAI ist ein separates kommerzielles Produkt; OpenClaw hat keinen Bezahlplan und keinen gehosteten Dienst.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "Rollenbasierte Crews vs Graph-basierte Orchestrierung, beides Open-Source-Frameworks",
      title: "CrewAI vs LangGraph: Multi-Agenten-Frameworks im Vergleich (2026)",
      description:
        "CrewAI vs LangGraph: rollenbasierte Crews und Flows oder Graphen aus State, Nodes und Edges. Lizenzen, CrewAI AMP und LangSmith, Zeitplanung im Vergleich.",
      h1: "CrewAI vs LangGraph: zwei Open-Source-Wege zu Multi-Agenten-Systemen",
      lead: "CrewAI und LangGraph sind die beiden Frameworks, die am häufigsten verglichen werden, wenn es um Multi-Agenten-Systeme im Code geht. CrewAI organisiert Agenten als Crews mit Rollen, Zielen und Backstories, dazu ereignisgesteuerte Flows. Bei LangGraph definierst du einen Workflow als Graph aus gemeinsamem State, Nodes und Edges, ohne vorgegebene Agentenarchitektur. Beide sind MIT-lizenziert, und beide Firmen verkaufen eine gehostete Plattform. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Abstraktion: CrewAI geht von Agenten mit Rolle, Ziel und Backstory aus; LangGraph geht von einem Graph aus State und Nodes aus und gibt weder Prompts noch Agentenarchitektur vor.",
        "Sprachen: CrewAI ist Python; LangGraph hat Bibliotheken für Python und JavaScript/TypeScript.",
        "Gehostete Plattform: CrewAI AMP hat einen kostenlosen Basic-Plan (50 Workflow-Ausführungen pro Monat) und einen individuellen Enterprise-Plan; LangSmith hat einen kostenlosen Developer-Plan, Plus für $39 pro Platz und Monat und einen individuellen Enterprise-Plan.",
        "Zeitplanung: Beide nennen Cron-Jobs auf ihren gehosteten Plattformen, nicht in der Open-Source-Bibliothek allein.",
      ],
      pickA: [
        "Du willst Agenten über Rolle und Ziel beschreiben und sie sich gegenseitig Arbeit delegieren lassen.",
        "Du arbeitest in Python und willst auf Plattformseite ein No-Code-Studio.",
      ],
      pickB: [
        "Du willst feine Kontrolle über den State und den Weg zwischen den Schritten.",
        "Du arbeitest neben Python auch in JavaScript oder TypeScript oder nutzt schon LangSmith.",
      ],
      faq: [
        {
          q: "Braucht LangGraph LangChain?",
          a: "Nein. Es stammt von LangChain, Inc., aber laut Doku setzt LangGraph LangChain nicht voraus. LangSmith ergänzt Tracing, Evaluation und Deployment.",
        },
        {
          q: "Sind CrewAI und LangGraph kostenlos?",
          a: "Beide Frameworks sind kostenlos und MIT-lizenziert. Ihre gehosteten Plattformen, CrewAI AMP und LangSmith, haben jeweils einen kostenlosen Plan plus bezahlte oder individuelle Pläne.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "Zwei Multi-Agenten-Frameworks; laut README ist AutoGen archiviert",
      title: "CrewAI vs AutoGen: Multi-Agenten-Frameworks im Vergleich (2026)",
      description:
        "CrewAI vs AutoGen: Crews und Flows oder Microsofts Gruppenchats, archiviert zugunsten von Microsoft Agent Framework. Lizenzen, Modelle und Status.",
      h1: "CrewAI vs AutoGen: Crews und Flows vs Gruppenchats, und wer sie pflegt",
      lead: "CrewAI und AutoGen gehörten zu den frühen, beliebten Wegen, mehrere LLM-Agenten im Code zusammenarbeiten zu lassen. CrewAI wird von crewAI, Inc. entwickelt, mit einer kommerziellen Plattform daneben. Das README von AutoGen sagt inzwischen, dass es archiviert ist und von Microsoft nicht mehr gepflegt wird, und verweist neue Nutzer auf Microsoft Agent Framework, das Microsoft seinen direkten Nachfolger nennt. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Pflege: CrewAI wird aktiv entwickelt; laut README ist AutoGen archiviert und wird von Microsoft nicht mehr aktiv gepflegt, ohne Bug- oder Sicherheitsfixes.",
        "Muster: CrewAI hat Crews aus rollenbasierten Agenten und Flows; AutoGen hat Gruppenchats, Selector- und Swarm-Teams und ereignisgesteuertes Message Passing.",
        "Sprachen: CrewAI ist Python; AutoGen gibt es für Python und .NET.",
        "Hosting: CrewAI AMP deployt und betreibt Crews; AutoGen hat keinen gehosteten Dienst, und AutoGen Studio läuft lokal.",
      ],
      pickA: [
        "Du startest ein neues Multi-Agenten-Projekt und willst ein gepflegtes Framework mit gehosteter Option.",
        "Du willst rollenbasierte Agenten, die sich gegenseitig Arbeit delegieren.",
      ],
      pickB: [
        "Du pflegst eine bestehende AutoGen-Anwendung und musst wissen, was du betreibst, bevor du migrierst.",
        "Du ziehst Microsoft Agent Framework in Betracht und willst es mit seinem Vorgänger vergleichen.",
      ],
      faq: [
        {
          q: "Wird AutoGen noch gepflegt?",
          a: "Laut README ist das Projekt archiviert und wird von Microsoft nicht mehr aktiv gepflegt; es empfiehlt Microsoft Agent Framework, das Microsoft Learn als direkten Nachfolger von AutoGen bezeichnet.",
        },
        {
          q: "Ist CrewAI kostenlos?",
          a: "Das Framework ist MIT-lizenziert und kostenlos. Die Plattform CrewAI AMP hat einen kostenlosen Basic-Plan und einen Enterprise-Plan mit individuellen Preisen.",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "Ein Issue-Board für Agent-CLIs vs ein persönlicher Agent mit Bots und Routinen",
      title: "Multica vs Hermes Agent: Agenten-Board oder persönlicher Agent?",
      description:
        "Multica vs Hermes Agent: ein Issue-Board für Agent-CLIs, Hermes eingeschlossen, oder der selbstlernende Agent von Nous Research. Lizenz, Hosting, Zeitpläne.",
      h1: "Multica vs Hermes Agent: ein Board für deine Agenten oder der Agent selbst",
      lead: "Multica und Hermes Agent liegen auf verschiedenen Ebenen. Hermes Agent ist ein Agent: der persönliche Open-Source-Assistent von Nous Research, der aus Erfahrung Skills lernt und benannte Bots ausführen kann. Multica ist das Board um die Agenten herum: Du weist Issues zu, und ein Daemon auf deinem Rechner führt die Agent-CLI aus, die du wählst, Hermes eingeschlossen. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Ebene: Multica weist Arbeit zu und verfolgt sie; Hermes Agent erledigt die Arbeit.",
        "Arbeitsverfolgung: Multica hat Board- und Listenansichten mit Agenten als Zuständigen; die Doku von Hermes Agent zeigt kein Aufgaben-Board.",
        "Zeitpläne: Die Autopilots von Multica laufen per Cron oder Webhooks und legen Issues an; Hermes Agent hat einen eingebauten Cron-Scheduler und Routinen pro Bot.",
        "Lizenz: Hermes Agent ist MIT; Multica ist Source-available und innerhalb deiner eigenen Organisation kostenlos selbst zu hosten.",
      ],
      pickA: [
        "Du willst Issues, Projekte und Reviews für mehrere Agenten, womöglich auch Hermes.",
        "Dein Team aus Menschen und Agenten arbeitet von einem Board aus.",
      ],
      pickB: [
        "Du willst einen einzelnen Agenten, der sein Gedächtnis behält und seine eigenen Skills verbessert.",
        "Du sprichst lieber im Terminal, in einer Desktop-App oder in einer Chat-App mit deinem Agenten, als ein Board zu verwalten.",
      ],
      faq: [
        {
          q: "Unterstützt Multica Hermes Agent?",
          a: "Ja. Hermes ist eine der 29 Agent-CLIs, die der Daemon von Multica ausführen kann.",
        },
        {
          q: "Kann Hermes Agent nach Zeitplan laufen?",
          a: "Ja. Er hat einen eingebauten Cron-Scheduler, und im Bot Mode kann jeder Bot Routinen haben.",
        },
      ],
    },
    "multica-vs-linear": {
      summary: "Zwei Issue-Tracker mit Agenten als Zuständigen: einer für Agent-CLIs, einer für Produktteams",
      title: "Multica vs Linear: Issue-Tracking für KI-Agenten im Vergleich",
      description:
        "Multica vs Linear: Issues für KI-Agenten. Multica führt Agent-CLIs auf deinem Rechner aus; Linear ist gehostet, mit Linear Agent und einem Cloud-Coding-Agenten.",
      h1: "Multica vs Linear: wo deine Agenten ihre Issues holen",
      lead: "Linear ist der Issue-Tracker, den viele Produktteams schon nutzen, und dort kannst du Issues inzwischen an Linear Agent, an einen Cloud-Coding-Agenten auf Basis von Claude Code oder Codex und an Agenten von Drittanbietern delegieren. Multica ist von Anfang an um Agenten herum gebaut: ein Issue-Board, auf dem ein Daemon auf deinem eigenen Rechner die Agent-CLIs ausführt, die du installiert hast. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Wo Agenten laufen: Der Daemon von Multica führt Agent-CLIs auf einem Laptop oder Server aus, den du kontrollierst; der Coding-Agent von Linear läuft in der Cloud von Linear.",
        "Zuweisung: In Multica ist der Agent der Zuständige; in Linear bleibt beim Delegieren die Person primär zuständig, und der Agent kommt als Mitwirkender dazu.",
        "Wiederkehrende Arbeit: Die Autopilots von Multica laufen per Cron oder Webhooks; die Loops von Linear laufen nach Zeitplan oder bei Ereignissen und werden über KI-Credits abgerechnet.",
        "Hosting und Preis: Multica lässt sich selbst hosten (Source-available); Linear gibt es nur gehostet, mit Free, Basic ($10) und Business ($16) pro Nutzer und Monat bei jährlicher Abrechnung.",
      ],
      pickA: [
        "Deine Agenten sollen auf deiner eigenen Hardware laufen, mit den CLIs und Logins, die du schon hast.",
        "Du willst das Board selbst hosten.",
      ],
      pickB: [
        "Dein Team plant schon in Linear und will Agenten im selben Tracker.",
        "Der Coding-Agent soll lieber in der Cloud des Anbieters laufen.",
      ],
      faq: [
        {
          q: "Kann Linear Issues an KI-Agenten zuweisen?",
          a: "Ja. Du kannst Issues an Linear Agent delegieren, an einen Cloud-Coding-Agenten, der Claude Code oder Codex nutzt, und an Agenten von Drittanbietern wie Cursor, Codex und Devin, die in deinem Workspace installiert sind.",
        },
        {
          q: "Was kostet Linear?",
          a: "Free kostet $0, mit 2 Teams und 250 Issues. Basic kostet $10 und Business $16 pro Nutzer und Monat bei jährlicher Abrechnung. Der Cloud-Coding-Agent und Loops verbrauchen außerdem vorausbezahlte KI-Credits.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "Ein persönlicher Assistent in deinen Chat-Apps vs der Coding-Agent von Anthropic",
      title: "OpenClaw vs Claude Code: Assistent im Chat oder Coding-Agent?",
      description:
        "OpenClaw vs Claude Code: ein Open-Source-Assistent in deinen Chat-Apps oder der Coding-Agent von Anthropic. Lizenz, Preis, Modelle und Zeitpläne im Vergleich.",
      h1: "OpenClaw vs Claude Code: ein Assistent in deinen Chats oder ein Agent in deinem Code",
      lead: "OpenClaw und Claude Code sind beide Agenten, die auf deinem eigenen Computer laufen, und OpenClaw kann sogar ein Claude-Code-Login wiederverwenden, um Claude-Modelle zu erreichen. Gebaut sind sie für verschiedene Aufgaben. OpenClaw ist ein persönlicher Assistent, den du über WhatsApp, Telegram, Slack oder iMessage erreichst. Claude Code ist der Coding-Agent von Anthropic: Er liest deine Codebasis, bearbeitet Dateien und führt Befehle aus. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Aufgabe: OpenClaw erledigt persönliche Aufgaben und Automatisierungen über Chat-Apps; Claude Code arbeitet in einem Code-Repository, im Terminal, in einer IDE, in der Desktop-App oder im Web.",
        "Modelle: OpenClaw bindet viele Anbieter als Plugins an, Claude eingeschlossen; Claude Code läuft auf Claude-Modellen.",
        "Preis und Lizenz: OpenClaw ist MIT-lizenziert und kostenlos (du bezahlst den Modellanbieter); Claude Code ist in bezahlten Claude-Plänen ab $20 im Monat enthalten und nicht Open Source.",
        "Zeitplanung: OpenClaw hat einen eingebauten Automations-Scheduler; Claude Code hat geplante Aufgaben in der Cloud und auf dem Desktop sowie `/loop`.",
      ],
      pickA: [
        "Du willst einen Assistenten, dem du vom Handy aus für persönliche Aufgaben und Automatisierungen schreiben kannst.",
        "Du willst Modellanbieter mischen, auch lokale Modelle.",
      ],
      pickB: [
        "Deine Arbeit steckt in einer Codebasis: Features, Fixes, Reviews und Refactorings.",
        "Du zahlst schon für einen Claude-Plan.",
      ],
      faq: [
        {
          q: "Kann OpenClaw Claude nutzen?",
          a: "Ja, mit einem Anthropic-API-Key oder indem es ein Claude-Code-Login auf demselben Rechner wiederverwendet.",
        },
        {
          q: "Ist Claude Code kostenlos?",
          a: "Nein. Es ist in bezahlten Claude-Plänen enthalten (Pro, Max, Ultra, Team und Enterprise), nicht in Free.",
        },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Der selbstlernende persönliche Agent von Nous Research vs der Coding-Agent von Anthropic",
      title: "Hermes Agent vs Claude Code: persönlicher oder Coding-Agent?",
      description:
        "Hermes Agent vs Claude Code: der Open-Source-Agent von Nous Research mit Skills und Bots oder der Coding-Agent von Anthropic. Modelle, Preis, Zeitpläne.",
      h1: "Hermes Agent vs Claude Code: ein lernender persönlicher Agent oder ein Coding-Agent",
      lead: "Hermes Agent und Claude Code laufen beide auf deinem Rechner, haben beide Subagents und Zeitpläne und können beide mit Claude-Modellen arbeiten. Der Unterschied liegt im Fokus. Hermes Agent von Nous Research ist ein persönlicher Agent mit Lernschleife: Er schreibt Skills aus Erfahrung und führt sein eigenes Gedächtnis, mit jedem Modellanbieter. Claude Code ist der Coding-Agent von Anthropic für die Arbeit in einer Codebasis. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Fokus: Hermes Agent ist ein allgemeiner persönlicher Agent; Claude Code ist für Code gebaut.",
        "Modelle: Hermes Agent arbeitet mit vielen Anbietern, und laut Doku funktioniert ein Claude-Abo nur mit Max und zugekaufter Zusatznutzung; Claude Code läuft auf Claude-Modellen.",
        "Mehrere Agenten: Die Bots von Hermes Agent schreiben sich direkt Nachrichten; in den experimentellen Agent Teams von Claude Code schreiben sich Teammates gegenseitig.",
        "Preis und Lizenz: Hermes Agent ist MIT und kostenlos, mit optionalem Nous-Portal-Abo; Claude Code ist in bezahlten Claude-Plänen enthalten und nicht Open Source.",
      ],
      pickA: [
        "Du willst einen Agenten für viele Arten von Aufgaben, der seine Skills mit der Zeit verbessert.",
        "Du willst Modellanbieter frei wählen und wechseln.",
      ],
      pickB: [
        "Deine Hauptarbeit steckt in einer Codebasis.",
        "Du willst die Tools von Anthropic drumherum: IDE-Erweiterungen, eine Desktop-App, Code-Review und geplante Aufgaben.",
      ],
      faq: [
        {
          q: "Kann Hermes Agent mein Claude-Abo nutzen?",
          a: "Laut Doku funktioniert der Weg über das Claude-Abo nur mit Claude Max und zugekaufter Zusatznutzung, nicht mit Claude Pro. Du kannst Claude auch mit einem API-Key nutzen.",
        },
        {
          q: "Lernt Claude Code neue Skills wie Hermes Agent?",
          a: "Claude Code nutzt Skills, die du oder dein Team als SKILL.md-Dateien schreibt, und führt ein Auto-Memory. Der erklärte Fokus von Hermes Agent ist, Skills aus eigener Erfahrung zu schreiben und zu verfeinern.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "Ein persönlicher Assistent vs ein Open-Source-Coding-Agent, beide MIT und modellunabhängig",
      title: "OpenClaw vs OpenCode: persönlicher Assistent oder Coding-Agent?",
      description:
        "OpenClaw vs OpenCode: zwei MIT-lizenzierte, modellunabhängige Agenten. Ein persönlicher Assistent in deinen Chat-Apps und ein Coding-Agent.",
      h1: "OpenClaw vs OpenCode: ähnliche Namen, verschiedene Aufgaben",
      lead: "OpenClaw und OpenCode sind beide Open Source unter MIT, laufen beide auf deinem eigenen Rechner und arbeiten beide mit vielen Modellanbietern, deshalb werden sie verglichen. Sie erledigen verschiedene Aufgaben. OpenClaw ist ein persönlicher Assistent, mit dem du in WhatsApp, Telegram, Slack und anderen Chat-Apps sprichst. OpenCode ist ein Coding-Agent mit Terminal-UI, Desktop-App, Web-App und SDK. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Aufgabe: OpenClaw erledigt persönliche Aufgaben und Automatisierungen aus dem Chat heraus; OpenCode schreibt und ändert Code.",
        "Oberfläche: OpenClaw antwortet in Chat-Apps und hat eine Control UI; OpenCode läuft als Terminal-UI, Desktop-App, Web-App und SDK.",
        "Bezahloptionen: OpenClaw hat keinen Bezahlplan; OpenCode ist kostenlos, mit kostenlosen Modellen, und bietet OpenCode Go für $10 im Monat und Go Plus für $40.",
        "Zeitplanung: OpenClaw hat einen eingebauten Scheduler; die Zeitpläne von OpenCode sind experimentell und per Opt-in.",
      ],
      pickA: [
        "Du willst einen Assistenten, dem du von überall schreiben kannst.",
        "Du willst Automatisierungen, ausgelöst durch Zeitpläne, Webhooks oder E-Mail.",
      ],
      pickB: [
        "Du willst einen Open-Source-Coding-Agenten, der mit 200+ Modellanbietern arbeitet, auch mit lokalen.",
        "Du willst mit kostenlosen Modellen und ohne Konto loslegen.",
      ],
      faq: [
        {
          q: "Sind OpenClaw und OpenCode dasselbe Projekt?",
          a: "Nein. OpenClaw ist ein persönlicher Assistent der OpenClaw Foundation; OpenCode ist ein Coding-Agent von Anomaly. Beide sind MIT-lizenziert.",
        },
        {
          q: "Brauche ich für OpenCode einen API-Key?",
          a: "Nicht für den Einstieg: Es enthält kostenlose Modelle mit Tageslimit und braucht dafür kein Konto. Du kannst auch eigene Anbieter verbinden oder OpenCode Go abonnieren.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Die experimentellen Agent Teams von Claude Code vs das Multi-Agenten-Gateway von OpenClaw",
      title: "Claude Code Agent Teams vs OpenClaw: Multi-Agenten-Setups",
      description:
        "Claude Code agent teams vs OpenClaw: Lead-Session und Teammates in Claude Code (experimentell) oder mehrere persönliche Agenten auf einem OpenClaw-Gateway.",
      h1: "Claude Code agent teams vs OpenClaw: zwei Wege, mehrere Agenten zu betreiben",
      lead: "Beide geben dir mehrere Agenten, die zusammenarbeiten. Die Agent Teams von Claude Code sind eine experimentelle Funktion, standardmäßig aus, bei der eine Lead-Session Teammates startet: separate Claude-Code-Instanzen, die sich eine Aufgabenliste teilen und sich gegenseitig Nachrichten schreiben. OpenClaw führt mehrere isolierte Agenten auf einem Gateway auf deinem Rechner aus, mit einem Team-Preset, in dem ein Koordinator an Recherche-, Schreib- und Review-Agenten delegiert. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Zweck: Agent Teams teilen eine Coding-Aufgabe auf Claude-Code-Instanzen auf; die Agenten von OpenClaw sind persönliche Assistenten, die du in Chat-Apps erreichst.",
        "Koordination: Agent Teams teilen sich eine Aufgabenliste mit Abhängigkeiten, und Teammates schreiben sich gegenseitig; OpenClaw-Agenten können auf die Sessions der anderen zugreifen, und die Doku nennt das Team-Preset eine Anleitung per Prompt, keinen Scheduler.",
        "Lebensdauer: Ein Agent Team läuft für eine Aufgabe unter einer Lead-Session; OpenClaw-Agenten leben auf dem Gateway und führen geplante Automatisierungen aus.",
        "Kosten: Agent Teams sind bei Claude Code in bezahlten Claude-Plänen enthalten; OpenClaw ist kostenlos und MIT-lizenziert.",
      ],
      pickA: [
        "Mehrere Claude-Code-Instanzen sollen eine große Coding-Aufgabe aufteilen und miteinander sprechen.",
        "Du nutzt Claude Code schon und hast kein Problem damit, eine experimentelle Funktion einzuschalten.",
      ],
      pickB: [
        "Du willst langlebige persönliche Agenten mit eigenen Personas auf deinem Rechner.",
        "Du willst sie über Chat-Apps erreichen und nach Zeitplan laufen lassen.",
      ],
      faq: [
        {
          q: "Wie schalte ich Agent Teams in Claude Code ein?",
          a: "Sie sind experimentell und standardmäßig aus: Setz `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, dann kann eine Lead-Session Teammates starten. Siehe [Claude Code Agent Teams](/blog/claude-code-agent-teams).",
        },
        {
          q: "Können OpenClaw-Agenten als Team arbeiten?",
          a: "Ja. Ein Gateway kann mehrere isolierte Agenten ausführen, und ein Team-Preset legt einen Koordinator plus Recherche-, Schreib- und Review-Agenten an.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "Zwei Tools für parallele Coding-Agenten, deren Firmen 2026 ihre gehosteten Dienste eingestellt haben",
      title: "Vibe Kanban vs Conductor: parallele Coding-Agenten 2026",
      description:
        "Vibe Kanban vs Conductor: ein Open-Source-Kanban-Board für Coding-Agenten oder eine Mac-App, die zu Meta geht, ohne Neuanmeldungen. Was von beiden bleibt, im Vergleich.",
      h1: "Vibe Kanban vs Conductor: was von beiden bleibt und wie sie sich unterscheiden",
      lead: "Vibe Kanban und Conductor führen beide mehrere Coding-Agenten parallel aus, jeden in seinem eigenen Git-Worktree, damit du ihre Arbeit prüfen und mergen kannst. Beide haben sich 2026 verändert. bloop, die Firma hinter Vibe Kanban, wurde im April geschlossen, und das Projekt läuft als Open Source weiter, gepflegt von seiner Community. Conductor kündigte am 4. November an, sich Meta anzuschließen: Neue Registrierungen und Downloads sind geschlossen, die Cloud ist ab 13. November schreibgeschützt und wird am 20. November abgeschaltet, und die Mac-App bekommt bis Anfang 2027 neue Modelle und kritische Fixes. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Verfügbarkeit: Die lokale App von Vibe Kanban kann jeder kostenlos betreiben; Conductor nimmt keine neuen Registrierungen oder Downloads mehr an.",
        "Board: Vibe Kanban plant Arbeit als Kanban-Issues; Conductor listet Workspaces auf und kann einen aus einem GitHub- oder Linear-Issue starten.",
        "Lizenz: Vibe Kanban ist Open Source unter Apache-2.0; Conductor ist Closed Source.",
        "Plattform und Agenten: Vibe Kanban läuft im Browser oder als Desktop-App; Conductor ist eine Mac-App. Beide führen Claude Code, Codex, Cursor und OpenCode aus, und Vibe Kanban nennt außerdem Gemini CLI, GitHub Copilot, Amp und weitere.",
      ],
      pickA: [
        "Du willst ein Open-Source-Tool, das du weiter betreiben und anpassen kannst.",
        "Du willst ein Kanban-Board vor deinen Agenten.",
      ],
      pickB: [
        "Du nutzt Conductor schon auf einem Mac und brauchst nur die lokale App.",
        "Du kommst damit klar, dass die Cloud-Funktionen am 20. November 2026 enden.",
      ],
      faq: [
        {
          q: "Wird Conductor eingestellt?",
          a: "Conductor kündigte am 4. November 2026 an, sich Meta anzuschließen. Neue Registrierungen und Downloads sind geschlossen, die Cloud ist ab 13. November schreibgeschützt und wird am 20. November abgeschaltet, und die Mac-App bekommt bis Anfang 2027 neue Modelle und kritische Fixes. Siehe [Conductor-Alternativen](/blog/conductor-alternatives).",
        },
        {
          q: "Wird Vibe Kanban noch gepflegt?",
          a: "bloop kündigte am 10. April 2026 an, den Betrieb einzustellen. Das Projekt läuft als Open Source unter Apache-2.0 weiter, gepflegt von seiner Community, und die lokale App ist kostenlos nutzbar.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "Parallele Coding-Agenten: eine Open-Source-Terminal-App vs eine Mac-App, die zu Meta geht",
      title: "Claude Squad vs Conductor: parallele Claude-Code-Agenten",
      description:
        "Claude Squad vs Conductor: eine Open-Source-Terminal-App mit tmux und Worktrees oder eine Mac-App, die zu Meta geht und ihre Cloud am 20. November 2026 abschaltet.",
      h1: "Claude Squad vs Conductor: Terminal oder Mac-App für parallele Agenten",
      lead: "Claude Squad und Conductor erledigen im Kern dieselbe Aufgabe: mehrere Coding-Agenten gleichzeitig ausführen, jeden auf seinem eigenen Branch in einem Git-Worktree, und dir helfen, die Ergebnisse zu prüfen und zu mergen. Claude Squad ist eine Open-Source-Terminal-App auf Basis von tmux. Conductor ist eine Closed-Source-Mac-App, die am 4. November 2026 ankündigte, sich Meta anzuschließen, und keine neuen Nutzer mehr aufnimmt. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Oberfläche: Claude Squad ist eine Terminal-UI, die tmux und die GitHub CLI braucht; Conductor ist eine Desktop-App für den Mac.",
        "Lizenz: Claude Squad ist Open Source unter AGPL-3.0; Conductor ist Closed Source.",
        "Agenten: Claude Squad nutzt standardmäßig Claude Code und kann Codex, Gemini, Aider oder jedes Programm ausführen, das du konfigurierst; Conductor führt Claude Code, Codex, OpenCode und Cursor Agent aus.",
        "Status: Das neueste Release von Claude Squad ist v1.0.20 (August 2026); Conductor hat am 4. November 2026 neue Registrierungen und Downloads geschlossen, schaltet seine Cloud am 20. November ab und aktualisiert seine Mac-App bis Anfang 2027.",
      ],
      pickA: [
        "Du lebst im Terminal und willst ein Open-Source-Tool, das jeder installieren kann.",
        "Du willst jeden CLI-Agenten ausführen, den du konfigurieren kannst.",
      ],
      pickB: [
        "Du nutzt Conductor schon und bevorzugst eine Desktop-App mit eingebauten Diffs und Pull Requests.",
        "Du arbeitest auf einem Mac und brauchst die lokale App nur bis Anfang 2027.",
      ],
      faq: [
        {
          q: "Ist Claude Squad kostenlos?",
          a: "Ja. Es ist Open Source unter AGPL-3.0; du bezahlst die Agenten oder Modell-APIs, die du darin ausführst.",
        },
        {
          q: "Kann ich Conductor noch herunterladen?",
          a: "Nicht als neuer Nutzer: Conductor hat Registrierungen und Downloads am 4. November 2026 geschlossen, als es ankündigte, sich Meta anzuschließen. Bestehende Nutzer behalten die Mac-App, die bis Anfang 2027 Updates bekommt.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Der Cloud-KI-Softwareingenieur von Cognition vs der Coding-Agent von Anthropic",
      title: "Devin vs Claude Code: KI-Softwareingenieur oder Coding-Agent?",
      description:
        "Devin vs Claude Code: Cognitions KI-Softwareingenieur mit Cloud-VMs, Automations und Child-Sessions oder Anthropics Coding-Agent. Preise und Funktionen.",
      h1: "Devin vs Claude Code: ein Ingenieur in der Cloud oder ein Agent an deiner Seite",
      lead: "Devin und Claude Code sind beide Coding-Agenten, die Code schreiben, ausführen und testen und Pull Requests öffnen. Devin von Cognition setzt auf Cloud-Sessions, jede auf einer eigenen virtuellen Maschine, mit Automations und einem Koordinator, der Child-Devins ausführt; dazu gibt es eine Desktop-App und eine CLI. Claude Code von Anthropic arbeitet in deinem Terminal, deiner IDE, der Desktop-App oder im Web, auf Claude-Modellen. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Wo es läuft: Jede Cloud-Session von Devin bekommt eine eigene VM; Claude Code läuft standardmäßig lokal, mit Cloud-Sessions im Web.",
        "Modelle: Devin nutzt SWE-2 von Cognition plus Frontier-Modelle mehrerer Labs, ausgewählt von einem Router; Claude Code läuft auf Claude-Modellen.",
        "Preis: Devin hat Free, Pro für $20 und Max für $200 im Monat sowie Teams für $80 im Monat plus $40 pro Entwicklerplatz; Claude Code ist in Claude Pro ($20), Max ($100), Ultra ($200), Team und Enterprise enthalten.",
        "Automatisierung: Die Automations von Devin laufen nach Zeitplan und bei Ereignissen aus Slack, GitHub, Linear und mehr; die geplanten Cloud-Aufgaben von Claude Code laufen nach Zeitplan, per API-Aufruf oder bei einem GitHub-Ereignis.",
      ],
      pickA: [
        "Du willst jede Aufgabe in einer eigenen Cloud-VM, gestartet aus Slack, Linear oder Jira.",
        "Du willst eine Koordinator-Session, die Child-Sessions ausführt und ihnen Nachrichten schreibt.",
      ],
      pickB: [
        "Der Agent soll in deinem eigenen Checkout und Terminal arbeiten.",
        "Du zahlst schon für einen Claude-Plan und willst IDE-Erweiterungen, eine Desktop-App und das Web.",
      ],
      faq: [
        {
          q: "Was kostet Devin?",
          a: "Free kostet $0, Pro $20 im Monat, Max $200 im Monat und Teams $80 im Monat plus $40 im Monat pro vollem Entwicklerplatz, bis zu 100 Nutzer; Enterprise gibt es auf Angebot.",
        },
        {
          q: "Ist Claude Code in Claude Pro enthalten?",
          a: "Ja. Claude Code ist in jedem bezahlten Claude-Plan enthalten: Pro, Max, Ultra, Team und Enterprise.",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "Der KI-Softwareingenieur von Cognition vs der Coding-Agent von OpenAI",
      title: "Devin vs Codex: KI-Softwareingenieure im Vergleich (2026)",
      description:
        "Devin vs OpenAI Codex: Cloud-VMs, Automations und Child-Sessions oder ein Coding-Agent in CLI, IDE, ChatGPT-App und Cloud. Preise, Lizenz, Modelle.",
      h1: "Devin vs Codex: zwei Coding-Agenten, die auch in der Cloud arbeiten",
      lead: "Devin und Codex führen beide Coding-Aufgaben lokal und in der Cloud aus und öffnen Pull Requests. Devin von Cognition gibt jeder Cloud-Session eine eigene virtuelle Maschine und ergänzt Automations und Koordinator-Sessions. Codex von OpenAI ist in ChatGPT-Plänen enthalten und läuft als Terminal-CLI, als IDE-Erweiterung, in der ChatGPT-Desktop-App und in Codex Cloud. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Preise: Devin wird mit eigenen Plänen verkauft (Free, Pro $20, Max $200, Teams); Codex ist in ChatGPT-Plänen ab Plus für $20 im Monat enthalten oder wird mit einem API-Key genutzt.",
        "Open Source: CLI, SDK und App Server von Codex stehen unter Apache-2.0; Devin ist nicht Open Source.",
        "Modelle: Devin routet zwischen SWE-2 von Cognition und Frontier-Modellen; Codex läuft auf OpenAI-Modellen.",
        "Zeitplanung: Die Automations von Devin laufen nach Zeitplan und bei vielen Ereignisquellen; Codex hat geplante Aufgaben in der ChatGPT-Desktop-App und im Web.",
      ],
      pickA: [
        "Viele Ereignisquellen (Slack, Teams, Jira, PagerDuty, Webhooks) sollen Arbeit anstoßen.",
        "Du willst einen Koordinator, der Child-Sessions in parallelen VMs ausführt.",
      ],
      pickB: [
        "Du zahlst schon für ChatGPT und willst den Agenten in deinem Terminal und deiner IDE.",
        "Du willst eine Open-Source-CLI, die du einsehen kannst.",
      ],
      faq: [
        {
          q: "Ist Codex kostenlos?",
          a: "Codex ist in bezahlten ChatGPT-Plänen ab Plus ($20 im Monat) enthalten und kann auch mit einem OpenAI-API-Key laufen. Die CLI selbst ist Open Source unter Apache-2.0.",
        },
        {
          q: "Können Devin und Codex Linear-Issues übernehmen?",
          a: "Ja. Du kannst Linear-Issues an Devin zuweisen, und in bezahlten ChatGPT-Plänen kannst du Linear-Issues an Codex zuweisen oder es in einem Kommentar erwähnen.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Die Droids-Plattform von Factory vs der Coding-Agent von Anthropic",
      title: "Factory vs Claude Code: Droids oder Claude Code?",
      description:
        "Factory (Droids) vs Claude Code: Coding-Agenten mit Automations, Workstreams und Cloud-Computern oder Anthropics Agent. Modelle, Preise, Multi-Agenten.",
      h1: "Factory vs Claude Code: die Droids-Plattform oder der Agent von Anthropic",
      lead: "Factory und Claude Code sind beide Coding-Agenten mit Desktop-App, CLI und Headless-Modus für CI. Die Droids von Factory arbeiten mit vielen Modellen, auch mit deinen eigenen Keys, und ergänzen Automations, Workstreams mit einem Orchestrator und von Factory gehostete Cloud-Computer. Claude Code ist der Agent von Anthropic auf Claude-Modellen, enthalten in bezahlten Claude-Plänen. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Modelle: Factory arbeitet mit Frontier- und Open-Weight-Modellen und deinen eigenen Keys; Claude Code läuft auf Claude-Modellen.",
        "Preis: Factory hat Free (mit eigener Inferenz), Pro für $20, Plus für $100 im Monat und höhere Stufen; Claude Code ist in Claude Pro ($20), Max ($100), Ultra ($200), Team und Enterprise enthalten.",
        "Mehrere Agenten: In den Workstreams von Factory (Beta) melden die Agenten eines Orchestrators an ihn zurück; in den experimentellen Agent Teams von Claude Code schreiben sich Teammates gegenseitig.",
        "Automatisierung: Die Automations von Factory laufen nach Zeitplan, über Slack, GitHub oder Webhooks; Claude Code hat geplante Cloud-Aufgaben und GitHub Actions.",
      ],
      pickA: [
        "Du willst zwischen Modellen verschiedener Labs wechseln oder eigene mitbringen.",
        "Du willst gehostete Cloud-Computer und Automatisierungen wie Ticket-zu-PR nach Zeitplan.",
      ],
      pickB: [
        "Du bist mit Claude-Modellen zufrieden und zahlst schon für einen Claude-Plan.",
        "Du willst die Tools von Anthropic drumherum: Code-Review, Security-Review und Plugins.",
      ],
      faq: [
        {
          q: "Was sind Factory Droids?",
          a: "Droids sind die Coding-Agenten von Factory. Sie laufen in der Desktop-App von Factory, in der Droid CLI, headless in CI mit `droid exec` und auf von Factory gehosteten Cloud-Computern.",
        },
        {
          q: "Funktioniert Factory mit Claude-Modellen?",
          a: "Laut Factory unterstützt es die führenden Frontier-Modelle, darunter Claude Opus und Sonnet, dazu Open-Weight-Modelle und deine eigenen API-Keys.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "Ein Open-Source-Coding-Agent für jedes Modell vs der Coding-Agent von Anthropic",
      title: "OpenCode vs Claude Code: Open-Source-Coding-Agent im Vergleich",
      description:
        "OpenCode vs Claude Code: ein MIT-Coding-Agent für 200+ Modellanbieter, mit kostenlosen Modellen, oder Anthropics Agent in Claude-Plänen. Preis und Modelle.",
      h1: "OpenCode vs Claude Code: Open Source und jedes Modell oder der Agent von Anthropic",
      lead: "OpenCode und Claude Code sind beide Coding-Agenten mit Terminal-UI, Desktop-App, Subagents und MCP. OpenCode ist Open Source unter MIT und arbeitet mit Modellen von 200+ Anbietern, darunter lokale Modelle und eine Auswahl kostenloser Modelle. Claude Code ist der Agent von Anthropic auf Claude-Modellen, enthalten in bezahlten Claude-Plänen. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Lizenz: OpenCode ist MIT; das Repository von Claude Code ist öffentlich, aber alle Rechte sind vorbehalten.",
        "Modelle: OpenCode arbeitet über Models.dev mit 200+ Anbietern; Claude Code läuft auf Claude-Modellen.",
        "Preis: OpenCode ist kostenlos, mit kostenlosen Modellen, und OpenCode Go kostet $10 im Monat; Claude Code ist in Claude-Plänen ab Pro für $20 im Monat enthalten.",
        "Zeitplanung: Claude Code hat geplante Aufgaben in der Cloud und auf dem Desktop sowie `/loop`; die Zeitpläne von OpenCode sind experimentell und per Opt-in.",
      ],
      pickA: [
        "Du willst einen Open-Source-Agenten und die Freiheit, jedes Modell zu wählen, auch lokale.",
        "Du willst kostenlos starten.",
      ],
      pickB: [
        "Du willst Claude-Modelle mit den Tools von Anthropic: geplante Aufgaben, Code-Review und IDE-Erweiterungen.",
        "Du zahlst schon für einen Claude-Plan.",
      ],
      faq: [
        {
          q: "Ist OpenCode kostenlos?",
          a: "Ja. Der Agent ist kostenlos und MIT-lizenziert und bringt kostenlose Modelle mit Tageslimit mit. OpenCode Go kostet $10 im Monat und Go Plus $40.",
        },
        {
          q: "Kann OpenCode Claude-Modelle nutzen?",
          a: "OpenCode arbeitet mit 200+ Modellanbietern, darunter Anthropic, du kannst also Claude-Modelle mit einem API-Key nutzen.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "Ein Low-Code-Baukasten für eine AI Workforce vs ein fertiger KI-Assistent",
      title: "Relevance AI vs Lindy: AI Workforce oder KI-Assistent?",
      description:
        "Relevance AI vs Lindy: eine Low-Code-Plattform für Teams aus KI-Agenten oder ein gehosteter KI-Assistent für Posteingang, Kalender und Slack. Preise im Vergleich.",
      h1: "Relevance AI vs Lindy: eine AI Workforce bauen oder einen Assistenten einstellen",
      lead: "Relevance AI und Lindy verkaufen beide die Idee eines KI-Mitarbeiters, in unterschiedlicher Form. Relevance AI ist eine Low-Code-Plattform, um spezialisierte Agenten zu bauen und sie zu einer „AI Workforce“ aus mehreren Agenten zu verknüpfen, verkauft an Unternehmen über den Vertrieb. Lindy ist ein einzelner gehosteter Assistent, der in deinem Posteingang, Kalender, deinen Meetings und Slack arbeitet, mit Routinen und Freigaben. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Form: Relevance AI ist ein Baukasten für viele spezialisierte Agenten; Lindy ist ein Assistent pro Workspace, dem du Aufgaben übergibst.",
        "Preise: Die Preisseite von Relevance AI nennt nur Enterprise, über den Vertrieb; Lindy hat eine kostenlose Testphase mit $50 in Credits und Pläne ab $29.99 im Monat pro aktivem Nutzer.",
        "Mehrere Agenten: Agenten in Relevance AI geben sich auf einem Canvas Arbeit weiter; die Doku von Lindy beschreibt einen Lindy pro Workspace.",
        "Freigaben: Lindy fragt nach, bevor es etwas mit Außenwirkung tut; Relevance AI hat Eskalationen und, mit Enterprise, Steuerung der Arbeitszeiten.",
      ],
      pickA: [
        "Du willst mehrere spezialisierte Agenten entwerfen und verbinden, mit einem Team des Anbieters, das beim Deployment hilft.",
        "Du kaufst für ein Unternehmen ein und rechnest damit, über den Vertrieb zu gehen.",
      ],
      pickB: [
        "Du willst einen einzelnen Assistenten für E-Mail, Kalender, Meetings und Follow-ups, ab heute.",
        "Du willst es kostenlos testen, bevor du zahlst.",
      ],
      faq: [
        {
          q: "Was kostet Lindy?",
          a: "Eine kostenlose Testphase gibt dir $50 in Credits für 7 Tage. Bezahlte Pläne beginnen bei $29.99 im Monat pro aktivem Nutzer für 3.000 Credits.",
        },
        {
          q: "Hat Relevance AI einen kostenlosen Plan?",
          a: "Laut Doku wurde der Free-Plan eingestellt, und die öffentliche Preisseite nennt nur Enterprise, über den Vertrieb.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "Die gehosteten KI-Teamkollegen von xAI vs der Coding-Agent von Anthropic",
      title: "Grok Bot vs Claude Code: KI-Teamkollegen oder Coding-Agent?",
      description:
        "Grok Bot vs Claude Code: xAIs gehostete Bots mit eigenen Computern, die in Slack und deinen Apps arbeiten, oder Anthropics Coding-Agent für dein Repository.",
      h1: "Grok Bot vs Claude Code: Teamkollegen für deine Apps oder ein Agent für deinen Code",
      lead: "Grok Bot und Claude Code übernehmen beide echte Arbeit, an unterschiedlichen Orten. Grok Bot ist der gehostete KI-Teamkollege von xAI: Jeder Bot bekommt einen eigenen Computer in der Cloud, meldet sich bei deinen Tools an, arbeitet in Slack und Microsoft Teams und führt Routinen aus. Claude Code ist der Coding-Agent von Anthropic: Er arbeitet in deinem Repository, im Terminal, in einer IDE, in der Desktop-App oder im Web. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Aufgabe: Grok Bot erledigt Arbeit in Business-Apps wie CRM, Support, Spesen und Recruiting; Claude Code schreibt und ändert Code.",
        "Wo es läuft: Jeder Grok Bot hat einen eigenen Cloud-Computer und arbeitet weiter, wenn dein Laptop zugeklappt ist; Claude Code läuft standardmäßig auf deinem Rechner, mit Cloud-Sessions im Web.",
        "Wie du damit arbeitest: Grok Bots schreibst du in ihrer App, in Slack, in Teams oder in einem Videoanruf; mit Claude Code arbeitest du im Terminal, in einer IDE, in der Desktop-App oder im Web.",
        "Preis: Grok Bot hat Premium für $30, Super für $100 und Ultra für $200 im Monat; Claude Code ist in Claude Pro ($20), Max ($100), Ultra ($200), Team und Enterprise enthalten.",
      ],
      pickA: [
        "Du willst KI-Teamkollegen für Vertrieb, Operations oder Support in den Apps, die dein Team schon nutzt.",
        "Du willst sie in Slack und in deinen Meetings, und sie sollen arbeiten, während dein Laptop zugeklappt ist.",
      ],
      pickB: [
        "Deine Arbeit steckt in einer Codebasis: Features, Fixes, Reviews und Refactorings.",
        "Der Agent soll in deinem eigenen Checkout arbeiten, mit deinen Tools und Tests.",
      ],
      faq: [
        {
          q: "Was kostet Grok Bot?",
          a: "Premium kostet $30 im Monat, Super $100 und Ultra $200, monatlich abgerechnet, jeweils mit wöchentlicher Grok-Bot-Nutzung inklusive; zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Teams und Enterprise laufen über den Vertrieb.",
        },
        {
          q: "Kann Grok Bot Code schreiben?",
          a: "xAI nennt Einsätze in der Entwicklung, etwa einen Bug in der Oberfläche eines Produkts nachzustellen und das Ticket anzulegen, und eine Anleitung, um Coding-Agenten aus Linear heraus zu koordinieren. Claude Code ist dafür gebaut, direkt in deinem Repository zu arbeiten.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "Die gehosteten KI-Teamkollegen von xAI vs der persönliche Open-Source-Agent von Nous Research",
      title: "Grok Bot vs Hermes Agent: gehostete Bots oder Open-Source-Agent?",
      description:
        "Grok Bot vs Hermes Agent: xAIs gehostete Bots mit eigenen Computern oder der Open-Source-Agent von Nous Research mit Bots, Routinen und beliebigem Modellanbieter.",
      h1: "Grok Bot vs Hermes Agent: gehostete Teamkollegen oder ein Agent, den du selbst betreibst",
      lead: "Grok Bot und Hermes Agent bieten beide benannte Bots, die miteinander sprechen und Routinen ausführen, deshalb werden sie verglichen. Grok Bot ist das gehostete Produkt von xAI: Jeder Bot hat einen eigenen Cloud-Computer und arbeitet in Slack, Teams und deinen Apps. Hermes Agent ist der Open-Source-Agent von Nous Research, den du selbst betreibst, mit jedem Modellanbieter und einem Bot Mode für mehrere benannte Bots. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Hosting: Grok Bot läuft in der Cloud von xAI; Hermes Agent läuft auf deinem Rechner oder einem Server, und bezahlte Nous-Portal-Stufen enthalten einen in der Cloud gehosteten Agenten.",
        "Lizenz und Preis: Grok Bot ist Closed Source, ab $30 im Monat; Hermes Agent ist MIT-lizenziert und kostenlos, mit einem optionalen Nous-Portal-Abo ab $20 im Monat.",
        "Modelle: Grok Bot ist mit Grok gebaut; Hermes Agent arbeitet mit vielen Anbietern, auch mit lokalen Modellen.",
        "Wo du mit ihm sprichst: Grok Bot arbeitet in seiner App, in Slack, Teams und Videoanrufen; Hermes Agent läuft im Terminal, in einer Desktop-App oder in Chat-Apps.",
      ],
      pickA: [
        "Du willst gehostete Teamkollegen mit eigenen Computern, die in Slack, Teams und deinen Meetings arbeiten.",
        "Du willst selbst nichts betreiben.",
      ],
      pickB: [
        "Du willst einen Open-Source-Agenten, den du selbst betreibst, mit dem Modellanbieter deiner Wahl.",
        "Du willst einen Agenten, der mit der Zeit seine eigenen Skills schreibt und verfeinert.",
      ],
      faq: [
        {
          q: "Ist Hermes Agent kostenlos?",
          a: "Ja. Er ist MIT-lizenziert und kostenlos; du bezahlst deinen Modellanbieter. Ein optionales Nous-Portal-Abo hat die Stufen Free, Plus ($20 im Monat), Super ($100) und Ultra ($200).",
        },
        {
          q: "Haben Grok Bot und Hermes Agent beide Bots, die miteinander sprechen?",
          a: "Ja. Grok Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab; im Bot Mode von Hermes Agent schreiben sich benannte Bots direkt Nachrichten.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "Ein selbst hostbarer Open-Source-Workspace für KI-Kollegen vs die gehosteten Bots von xAI",
      title: "OpenBot vs Grok Bot: KI-Kollegen als Open Source oder gehostet?",
      description:
        "OpenBot vs Grok Bot: der MIT-lizenzierte, selbst hostbare Workspace von CopilotKit für KI-Kollegen oder xAIs gehostete Bots. Hosting, Modelle, Preise, Funktionen.",
      h1: "OpenBot vs Grok Bot: KI-Kollegen, die du selbst hostest, oder KI-Kollegen, die du mietest",
      lead: "OpenBot und Grok Bot geben beide jedem KI-Kollegen einen eigenen Computer mit Browser und Tools, und beide haben Routinen und Freigaben. OpenBot von CopilotKit ist Open Source und selbst hostbar: Es läuft auf deinem Laptop oder deinem Kubernetes-Cluster, mit den Modellen und Agenten deiner Wahl. Grok Bot ist das gehostete Produkt von xAI, gebaut mit Grok, das in Slack, Teams und deinen Apps arbeitet. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Hosting: OpenBot läuft auf deinem Laptop oder deinem Kubernetes-Cluster oder, im Early Access, gehostet von CopilotKit; Grok Bot läuft in der Cloud von xAI.",
        "Lizenz: Das Anwendungs-Template von OpenBot ist MIT-lizenziert, CopilotKit Intelligence ist separat lizenziert; Grok Bot ist Closed Source.",
        "Modelle: OpenBot arbeitet mit OpenAI, Claude, Gemini oder offenen Modellen und bindet deine eigenen Agenten über AG-UI an; Grok Bot ist mit Grok gebaut.",
        "Preis: OpenBot ist für persönliche Projekte kostenlos und kostet mit Business bis zu $29 pro aktivem Nutzer im Monat; Grok Bot kostet je nach Plan $30, $100 oder $200 im Monat.",
      ],
      pickA: [
        "Du willst KI-Kollegen selbst hosten und deine Daten und Modelle unter eigener Kontrolle behalten.",
        "Du willst den Workspace anpassen oder als White Label anbieten.",
      ],
      pickB: [
        "Du willst gehostete Bots, die in Slack, Teams und deinen Meetings sofort bereitstehen.",
        "Du willst keine Infrastruktur betreiben.",
      ],
      faq: [
        {
          q: "Ist OpenBot kostenlos?",
          a: "Für persönliche Projekte auf deinem Laptop ist es kostenlos. OpenBot for Business kostet bis zu $29 pro aktivem Nutzer im Monat, plus 5 % der monatlichen Modellausgaben über $5.000; Modellanbieter bezahlst du direkt.",
        },
        {
          q: "Ist OpenBot Open Source?",
          a: "Das Anwendungs-Template von OpenBot ist MIT-lizenziert. Es nutzt CopilotKit Intelligence, das separat lizenziert ist: kostenlos auf einem Laptop, mit Test- und Produktionslizenzen für Kubernetes.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Der Agent von Anthropic für Wissensarbeit vs sein Agent für Code",
      title: "Claude Cowork vs Claude Code: Welcher Anthropic-Agent passt?",
      description:
        "Claude Cowork vs Claude Code: Anthropics Agent für Dokumente, Recherche und Tabellen in den Claude-Apps oder sein Coding-Agent für dein Repository.",
      h1: "Claude Cowork vs Claude Code: zwei Anthropic-Agenten für unterschiedliche Arbeit",
      lead: "Claude Cowork und Claude Code kommen vom selben Unternehmen und laufen auf Claude-Modellen, und laut Anthropic nutzt Cowork dieselbe Architektur wie Claude Code. Gedacht sind sie für unterschiedliche Arbeit. Cowork erledigt Wissensarbeit in den Claude-Apps, etwa Recherche, Dokumente, Tabellen und Folien, überwiegend in Anthropics Cloud. Claude Code arbeitet in deinem Code-Repository, im Terminal, in einer IDE, in der Desktop-App oder im Web. Beide sind in bezahlten Claude-Plänen enthalten. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Arbeit: Cowork macht aus einem gewünschten Ergebnis Dokumente, Tabellen mit Formeln, Präsentationen oder geordnete Ordner; Claude Code liest deine Codebasis, bearbeitet Dateien und führt Befehle aus.",
        "Wo es läuft: Cowork-Aufgaben laufen in Anthropics Cloud und erreichen lokale Dateien über Claude Desktop; Claude Code läuft standardmäßig auf deinem Rechner, mit Cloud-Sessions im Web.",
        "Wo du es nutzt: Cowork steckt in den Claude-Apps für Desktop, Web und Smartphone; Claude Code im Terminal, in IDE-Erweiterungen, in der Desktop-App und im Web.",
        "Zeitpläne: Cowork plant Aufgaben stündlich bis wöchentlich in der Cloud; Claude Code hat geplante Aufgaben in der Cloud und auf dem Desktop sowie `/loop`.",
      ],
      pickA: [
        "Deine Arbeit besteht aus Recherche, Dokumenten, Tabellen oder Folien.",
        "Du willst Aufgaben vom Smartphone oder im Browser abgeben und Dateien zurückbekommen.",
      ],
      pickB: ["Deine Arbeit steckt in einem Code-Repository.", "Du willst einen Agenten mit deinem Terminal, deinen Tests und git."],
      faq: [
        {
          q: "Sind Claude Cowork und Claude Code im selben Plan enthalten?",
          a: "Ja. Beide sind in den bezahlten Claude-Plänen enthalten: Pro, Max, Ultra, Team und Enterprise. Claude Free enthält keines von beiden.",
        },
        {
          q: "Kann Claude Cowork Code schreiben?",
          a: "Anthropic positioniert Cowork für Wissensarbeit ohne Programmieren und Claude Code für Softwareentwicklung. Für Aufgaben, die nur auf deinem Computer laufen, verweist Anthropic auf Claude Code in der Desktop-App.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Die KI-Kollegen von Anthropic und OpenAI in ihren Chat-Apps",
      title: "Claude Cowork vs ChatGPT Work: KI-Kollegen im Vergleich",
      description:
        "Claude Cowork vs ChatGPT Work: die Agenten von Anthropic und OpenAI für Dokumente, Recherche und wiederkehrende Aufgaben. Pläne, Laufort, Zeitpläne, Freigaben.",
      h1: "Claude Cowork vs ChatGPT Work: zwei KI-Kollegen in den Chat-Apps",
      lead: "Claude Cowork und ChatGPT Work erledigen dieselbe Art von Job: Du beschreibst in der Chat-App ein Ergebnis, und der Agent plant die Schritte, arbeitet sich durch Dateien, verbundene Apps und einen Browser und gibt dir etwas zum Prüfen zurück. Cowork kommt von Anthropic, in bezahlten Claude-Plänen. ChatGPT Work kommt von OpenAI, in ChatGPT-Plänen, und teilt seine Fähigkeiten und seine Nutzung mit Codex. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Pläne: Cowork gibt es in bezahlten Claude-Plänen ab Pro für $20 im Monat, nicht in Free; ChatGPT Work bietet eingeschränkten Zugang bei Free und Go in der Desktop-App und vollen Zugang ab Plus für $20 im Monat.",
        "Wo es läuft: Cowork läuft in Anthropics Cloud und erreicht lokale Dateien über Claude Desktop; ChatGPT Work läuft in OpenAIs Cloud oder lokal über die ChatGPT-Desktop-App.",
        "Zeitpläne: Cowork führt geplante Aufgaben stündlich bis wöchentlich aus; ChatGPT Work hat geplante Aufgaben plus Ereignis-Auslöser aus Gmail, Slack oder GitHub in berechtigten Plänen.",
        "Freigaben: Cowork hat die Modi Manual, Auto (mit Sicherheitsprüfung) und Skip; ChatGPT Work hält bei wichtigen Aktionen für deine Freigabe an, mit Berechtigungsmodi in der Desktop-App.",
      ],
      pickA: [
        "Du bezahlst schon für Claude oder willst die Modelle von Anthropic für Dokumente und Recherche.",
        "Du willst geplante Aufgaben, die in der Cloud laufen, während dein Computer aus ist.",
      ],
      pickB: [
        "Du bezahlst schon für ChatGPT oder willst es mit dem Free-Plan in der Desktop-App ausprobieren.",
        "Du willst Aufgaben, die durch Ereignisse in Gmail, Slack oder GitHub ausgelöst werden.",
      ],
      faq: [
        {
          q: "Ist ChatGPT Work kostenlos?",
          a: "ChatGPT Free und Go bekommen eingeschränkten Zugang zu ChatGPT Work in der Desktop-App. Plus ($20 im Monat) und Pro bekommen es auf dem Desktop, im Web und mobil.",
        },
        { q: "Ist Claude Cowork kostenlos?", a: "Nein. Es ist nur in bezahlten Claude-Plänen enthalten, ab Pro für $20 im Monat." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Der KI-Kollege von Microsoft 365 vs der von Anthropic",
      title: "Copilot Cowork vs Claude Cowork: Microsoft oder Anthropic?",
      description:
        "Copilot Cowork vs Claude Cowork: Microsofts Agent für Outlook, Teams und Office-Dateien oder Anthropics Agent in den Claude-Apps. Lizenzen, Kosten, Funktionen.",
      h1: "Copilot Cowork vs Claude Cowork: der Agent für Microsoft 365 oder der von Claude",
      lead: "Copilot Cowork und Claude Cowork teilen sich einen Namen und eine Idee: Du übergibst einem Agenten eine mehrstufige Aufgabe und gibst frei, was er tut. Copilot Cowork arbeitet in Microsoft 365, sendet E-Mails, plant Meetings, bearbeitet Office-Dateien in OneDrive und SharePoint und kann GPT-, Claude- oder Grok-Modelle nutzen. Claude Cowork ist der Agent von Anthropic in den Claude-Apps, auf Claude-Modellen. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Wo deine Arbeit liegt: Copilot Cowork arbeitet in Outlook, Teams, OneDrive und SharePoint und kommt nicht an Dateien auf deinem lokalen Gerät; Claude Cowork arbeitet mit Connectoren wie Google Drive, Gmail, Microsoft 365 und Slack und über Claude Desktop mit lokalen Dateien.",
        "Kosten: Copilot Cowork braucht eine Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01; Claude Cowork ist in bezahlten Claude-Plänen ab Pro für $20 im Monat enthalten.",
        "Modelle: Copilot Cowork hat eine Modellauswahl mit GPT-, Claude- und Grok-Modellen, je nach Tenant-Einstellungen; Claude Cowork läuft auf Claude-Modellen.",
        "Konten: Copilot Cowork ist für Geschäfts- oder Schulkonten gedacht, private Konten sind in der Vorschau; Claude Cowork gibt es in Claude-Plänen für Einzelpersonen und Teams.",
      ],
      pickA: [
        "Deine Organisation arbeitet mit Microsoft 365 und hat schon Lizenzen für Microsoft 365 Copilot.",
        "Der Agent soll für dich E-Mails senden, Meetings buchen und in Teams posten, jeweils mit deiner Freigabe.",
      ],
      pickB: [
        "Du arbeitest außerhalb von Microsoft 365 oder willst lokale Dateien und einen Browser auf deinem eigenen Computer.",
        "Du willst einen festen Monatsplan statt Abrechnung pro Credit.",
      ],
      faq: [
        {
          q: "Was kostet Copilot Cowork?",
          a: "Es braucht eine Lizenz für Microsoft 365 Copilot, und die Nutzung wird in Copilot Credits abgerechnet: $0.01 pro Credit bei nutzungsbasierter Zahlung oder ein vorausbezahlter Jahresplan mit Rabatten von 5 % bis 20 %.",
        },
        {
          q: "Nutzt Copilot Cowork Claude?",
          a: "Seine Modellauswahl enthält Claude Opus, Sonnet und Fable neben GPT- und Grok-Modellen, je nach Tenant-Einstellungen; Tenants mit EU Data Boundary bekommen nur GPT-Modelle.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "Der Work-Modus von ChatGPT vs der Coding-Agent von OpenAI",
      title: "ChatGPT Work vs Codex: Welches solltest du nutzen?",
      description:
        "ChatGPT Work vs Codex: OpenAIs Work-Modus für Dokumente und Analysen oder sein Coding-Agent für Repositorys. Geteilte Fähigkeiten und Nutzung; die Unterschiede.",
      h1: "ChatGPT Work vs Codex: derselbe Motor, unterschiedliche Jobs",
      lead: "ChatGPT Work und Codex sind beide Agenten von OpenAI, und laut OpenAI teilt Work Kernfunktionen, Ausführung und Nutzungslimits mit Codex. Der Unterschied liegt darin, wofür sie gedacht sind. ChatGPT Work ist ein Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, etwa Präsentationen, Tabellen und Analysen. Codex ist der Coding-Agent, als Terminal-CLI, als IDE-Erweiterung, in der ChatGPT-Desktop-App und in der Cloud. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Arbeit: ChatGPT Work liefert Dokumente, Präsentationen, Tabellen und Analysen; Codex liest, bearbeitet und startet Code in einem Repository.",
        "Wo du es nutzt: ChatGPT Work steckt in ChatGPT im Web, auf dem Desktop und mobil; Codex gibt es als Terminal-CLI, als IDE-Erweiterung, in der ChatGPT-Desktop-App und in Codex Cloud.",
        "Nutzung: Beide teilen sich die Nutzungslimits und Credits von Codex.",
        "Open Source: CLI, SDK und App Server von Codex stehen unter Apache-2.0; ChatGPT Work ist nicht Open Source.",
      ],
      pickA: [
        "Am Ende deiner Aufgabe steht ein Dokument, eine Präsentation oder eine Analyse.",
        "Du willst sie aus ChatGPT auf dem Smartphone oder im Web starten.",
      ],
      pickB: [
        "Deine Aufgabe ist Code: Features, Fixes und Reviews.",
        "Du willst einen Agenten in deinem Terminal oder deiner IDE oder in CI mit `codex exec`.",
      ],
      faq: [
        {
          q: "Teilen sich ChatGPT Work und Codex die Nutzung?",
          a: "Ja. Laut OpenAI teilt ChatGPT Work Kernfunktionen, Ausführung und Nutzungslimits mit Codex, einschließlich Credits.",
        },
        {
          q: "Welche ChatGPT-Pläne enthalten Work?",
          a: "Free und Go bekommen eingeschränkten Zugang in der Desktop-App; Plus ($20 im Monat), Pro und Business bekommen es auf dem Desktop, im Web und mobil.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Der KI-Kollege von Anthropic in den Claude-Apps vs die Bots von xAI mit eigenen Computern",
      title: "Claude Cowork vs Grok Bot: KI-Kollegen im Vergleich",
      description:
        "Claude Cowork vs Grok Bot: Anthropics Agent für Dokumente und Recherche in den Claude-Apps oder xAIs Bots mit eigenen Cloud-Computern in Slack und deinen Apps.",
      h1: "Claude Cowork vs Grok Bot: ein Aufgaben-Agent in Claude oder ein Team von Bots",
      lead: "Claude Cowork und Grok Bot sind beide KI-Kollegen, die in der Cloud weiterarbeiten, während du weg bist. Claude Cowork ist der Agent von Anthropic in den Claude-Apps: Du übergibst ihm eine Aufgabe und bekommst Dateien zurück. Grok Bot kommt von xAI: Bots mit eigenen Cloud-Computern, die sich bei deinen Tools anmelden, in Slack, Microsoft Teams und Videoanrufen arbeiten und sich gegenseitig Arbeit übergeben. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Aufbau: Claude Cowork nimmt Aufgaben von dir entgegen, mit Sub-Agents innerhalb einer Aufgabe; bei Grok Bot hat jeder Bot seinen eigenen Job, und die Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab.",
        "Wo du damit arbeitest: Claude Cowork steckt in den Claude-Apps für Desktop, Web und Smartphone; Grok Bot in seiner eigenen App, in Slack, Teams und Videoanrufen.",
        "Pläne: Claude Cowork ist in bezahlten Claude-Plänen ab Pro für $20 im Monat enthalten; Grok Bot in den Plänen Premium ($30 im Monat), Super und Ultra.",
        "Modelle: Claude Cowork läuft auf Claude-Modellen; Grok Bot ist mit Grok gebaut.",
      ],
      pickA: ["Du gibst Dokumente, Recherche und Tabellen ab und willst Dateien zurück.", "Du nutzt Claude schon."],
      pickB: [
        "Du willst mehrere Bots mit eigenen Jobs, die in Slack und den Apps deines Teams arbeiten.",
        "Du willst Bots in deinen Meetings.",
      ],
      faq: [
        {
          q: "Kann Grok Bot an Meetings teilnehmen?",
          a: "Ja. Laut xAI kannst du einen Bot zu einem Anruf in Google Meet, Zoom oder Teams hinzufügen, wo er zuhört, sich im Chat meldet, wenn er helfen kann, und sich danach um die Nacharbeit kümmert.",
        },
        {
          q: "Kann Claude Cowork laufen, während mein Computer aus ist?",
          a: "Cloud-Aufgaben laufen auf Anthropics Servern weiter; nur Arbeit, die lokale Dateien oder deinen Browser braucht, wartet auf Claude Desktop.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "Der Koordinator-Agent von Cursor für Code vs die Bots von xAI für Arbeit in vielen Apps",
      title: "Cursor Projects vs Grok Bot: Koordinator-Agenten im Vergleich",
      description:
        "Cursor Projects vs Grok Bot: ein Koordinator-Agent, der viele Cloud-Agenten auf deinen Code ansetzt, oder xAIs Bots in Slack und deinen Apps. Pläne, Funktionen.",
      h1: "Cursor Projects vs Grok Bot: ein Team von Agenten für Code oder für alles andere",
      lead: "Cursor Projects und Grok Bot setzen beide einen Agenten über andere. In einem Cursor Project plant ein Koordinator-Agent ein Feature, eine Migration oder eine App und verteilt das Programmieren an viele Cloud-Agenten, die parallel arbeiten. Grok Bot ist eine Gruppe von KI-Teamkollegen von xAI, jeder mit eigenem Cloud-Computer, die in Slack, Teams und deinen Apps arbeiten, wobei ein Bot die anderen steuern kann. Beide starten mit Plänen für $30 im Monat. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Arbeit: Cursor Projects ist für Softwarearbeit in einem GitHub-Repository gedacht; Grok Bot erledigt Arbeit in Business-Apps wie CRM, Support, Spesen und Recruiting.",
        "Koordination: Der Koordinator eines Cursor Project erstellt und steuert Worker-Agenten, und in Multiplayer Projects schreiben sich Koordinatoren gegenseitig Nachrichten; Grok Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab.",
        "Gemeinsamer Stand: Ein Cursor Project führt gemeinsame Dateien (Vorlieben, Notizen, Workflows) und ein Aufgaben-Board; Grok Bots merken sich, wie dein Team arbeitet.",
        "Auslöser: Cursor Projects reagieren auf Zeitpläne, Slack-Channels und Pull Requests; Grok Bots führen Routinen nach Zeitplan aus und arbeiten in Slack und Teams.",
      ],
      pickA: [
        "Du willst ein langes Coding-Vorhaben planen und auf viele Agenten verteilen lassen.",
        "Dein Team nutzt schon Cursor und GitHub.",
      ],
      pickB: [
        "Du willst KI-Teamkollegen für Operations, Vertrieb oder Support in deinen bestehenden Apps.",
        "Du willst sie in Slack, Teams und Meetings.",
      ],
      faq: [
        {
          q: "Welche Cursor-Pläne enthalten Projects?",
          a: "Jeder Plan mit Cloud Agents: Premium ($30 im Monat) und höher, Teams, Enterprise und ältere bezahlte Pläne. Nicht Free, Plus oder das ältere Hobby.",
        },
        {
          q: "Arbeitet ein Cursor Project weiter, wenn mein Laptop zugeklappt ist?",
          a: "Ja. Ein Project läuft auf einem eigenen Computer in der Cloud; der Koordinator startet nur dann einen lokalen Agenten, wenn etwas auf deinem Rechner getestet werden muss.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Der KI-Kollege von Microsoft vs der Agenten-Baukasten von Microsoft",
      title: "Copilot Cowork vs Copilot Studio: Was ist der Unterschied?",
      description:
        "Copilot Cowork vs Copilot Studio: der Agent in Microsoft 365, der für dich arbeitet, oder das Low-Code-Studio für Agenten und Workflows. Kosten, Funktionen.",
      h1: "Copilot Cowork vs Copilot Studio: einen Agenten nutzen oder einen bauen",
      lead: "Copilot Cowork und Copilot Studio sind beide Produkte von Microsoft, werden beide in Copilot Credits abgerechnet und teilen sich den vorausbezahlten Credit-Pool eines Tenants. Der Unterschied liegt darin, wer die Arbeit macht. Copilot Cowork ist ein Agent in Microsoft 365 Copilot, dem du eine Aufgabe übergibst; er sendet E-Mails, bucht Meetings und bearbeitet Office-Dateien, mit deiner Freigabe. In Copilot Studio bauen Maker ihre eigenen Agenten, Workflows und Apps und veröffentlichen sie in Teams, Microsoft Copilot, auf Websites oder über eine Telefonleitung. Ein Workflow in Copilot Studio kann sogar eine Cowork-Aufgabe als einen seiner Schritte starten. Hier der Vergleich, und wo Crewmark ins Bild passt.",
      differences: [
        "Aufgabe: Copilot Cowork erledigt eine Aufgabe für dich in Outlook, Teams, Word, Excel, PowerPoint, OneDrive und SharePoint; Copilot Studio ist ein Low-Code-Studio, in dem du Agenten, Workflows und Apps baust, die andere nutzen.",
        "Wer es nutzt: Copilot Cowork ist für alle mit einer Lizenz für Microsoft 365 Copilot und eingeschaltetem Cowork; Copilot Studio ist für Maker, und die dort veröffentlichten Agenten können Mitarbeitenden oder Kunden auf einer Website oder über eine Telefonleitung zur Verfügung stehen.",
        "Kosten: Copilot Cowork braucht eine Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01; Copilot Studio verkauft Pakete mit 25.000 Credits für $200 im Monat (jährliche Abrechnung) oder $0.01 pro Credit nutzungsbasiert, und seine Maker-Lizenz kostet $0.",
        "Automatisierung: Copilot Cowork führt geplante Prompts und Auslöser per E-Mail oder Teams aus; Copilot Studio ergänzt Agenten-Auslöser, mehrstufige Freigaben mit einem Human-review-Connector und Workflows, die Cowork als einen Schritt aufrufen können.",
      ],
      pickA: [
        "Ein Agent soll schon heute Arbeit in Microsoft 365 für dich erledigen, ohne dass du etwas baust.",
        "Du willst jede E-Mail, jedes Meeting und jeden Teams-Post freigeben, bevor etwas rausgeht.",
      ],
      pickB: [
        "Du willst einen Agenten oder einen Workflow bauen, den andere Menschen oder Kunden nutzen.",
        "Du brauchst Connectoren, mehrstufige Freigaben, Veröffentlichungskanäle oder getrennte Entwicklungs-, Test- und Produktionsumgebungen.",
      ],
      faq: [
        {
          q: "Ist Copilot Cowork Teil von Copilot Studio?",
          a: "Nein, es sind getrennte Produkte. Sie teilen sich den vorausbezahlten Copilot-Credit-Pool eines Tenants, und ein Workflow in Copilot Studio kann über seinen Copilot-Knoten eine Copilot-Cowork-Aufgabe starten oder fortsetzen.",
        },
        {
          q: "Was kostet Copilot Studio?",
          a: "Microsofts Licensing Guide nennt $200 im Monat (jährliche Abrechnung) für ein Paket mit 25.000 Copilot Credits pro Tenant oder $0.01 pro Credit nutzungsbasiert. Nicht verbrauchte Credits aus dem Paket werden nicht übertragen. Die Maker-Lizenz kostet $0, und mit der kostenlosen Testversion lassen sich keine Agenten veröffentlichen.",
        },
      ],
    },
  },
};
