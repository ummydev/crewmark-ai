import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen-Alternativen 2026: CrewAI, LangGraph und mehr",
    description:
      "Laut README pflegt Microsoft AutoGen nicht mehr. CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip und Crewmark nach Lizenz und Preis im Vergleich.",
  },
  breadcrumb: "AutoGen-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Microsoft AutoGen",
    title: "AutoGen-Alternativen 2026: Frameworks und Agenten für den Umstieg",
    lead: "AutoGen ist das Open-Source-Framework von Microsoft für Multi-Agenten-Anwendungen in Python und .NET, mit AutoGen Studio als No-Code-Oberfläche für Prototypen. Als wir am 13. November 2026 nachgesehen haben, stand im README: „Dieses Projekt wurde archiviert und wird von Microsoft nicht mehr aktiv gepflegt.“ („This project has been archived and is no longer actively maintained by Microsoft.“) Es verweist neue Nutzer auf Microsoft Agent Framework, das Microsoft den „direkten Nachfolger“ („direct successor“) von AutoGen nennt. Diese Seite stellt diesen Nachfolger und sieben weitere Optionen vor, von Code-Frameworks bis zu Agenten, die von selbst laufen, jeweils mit Lizenz, Preis und für wen sie sich eignen.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen-Alternativen auf einen Blick",
      text: [
        "Angaben aus README, Dokumentation und Preisseite des jeweiligen Produkts, geprüft am 13. November 2026. Preise in US-Dollar. AutoGen selbst ist kostenlos und Open Source (Code unter MIT), und du bezahlst deinen Modellanbieter.",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Ein Python-Framework für Crews aus rollenbasierten Agenten und ereignisgesteuerte Flows, plus die kommerzielle Plattform CrewAI AMP",
          "Framework ja (MIT); AMP ist kommerziell",
          "Framework kostenlos, plus dein Modellanbieter; AMP Basic kostenlos (50 Workflow-Ausführungen im Monat)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "Das Framework von LangChain für langlebige, zustandsbehaftete Agenten, gebaut als Graph, in Python und JS/TS",
          "Framework ja (MIT); LangSmith ist kommerziell",
          "Framework kostenlos; LangSmith Developer $0 pro Platz im Monat, Plus $39 pro Platz im Monat",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "Ein persönlicher KI-Assistent, der auf deinem eigenen Computer läuft und dir in Chat-Apps antwortet",
          "Ja (MIT)",
          "Kostenlos; kein Bezahlplan und kein gehosteter Dienst; du bezahlst deinen Modellanbieter",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "Der persönliche Agent von Nous Research, der eigene Skills schreibt und verfeinert, nutzbar im Terminal, in einer Desktop-App oder in Chat-Apps",
          "Ja (MIT)",
          "Agent kostenlos, plus dein Modellanbieter; optional Nous Portal Plus $20 im Monat",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Ein selbst gehosteter Server mit Web-Oberfläche, der Agenten, die du mitbringst (Claude Code, Codex, OpenClaw und weitere), als Unternehmen mit Organigramm, Budgets und Aufgaben führt",
          "Ja (MIT)",
          "Selbst gehostete Version kostenlos; keine Preise veröffentlicht; Cloud-Version mit Warteliste",
        ],
        [
          "[Claude Code Agent Teams](/blog/claude-code-agent-teams)",
          "Eine experimentelle Funktion von Claude Code, bei der eine Lead-Session Teammates startet, die sich eine Aufgabenliste teilen und sich gegenseitig Nachrichten schreiben",
          "Nein",
          "Bei Claude Code in bezahlten Claude-Plänen enthalten, ab Pro für $20 im Monat ($17 im Monat bei jährlicher Abrechnung)",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem Computer, die per Heartbeat aufwacht",
          "Ja (GPL-3.0)",
          "Kostenlos (1 Projekt, bis zu 3 KI-Mitarbeiter); Pro $5 im Monat folgt bald; die Agentennutzung bezahlst du deinem Agentenanbieter",
        ],
      ],
    },
    {
      kind: "text",
      id: "successor",
      title: "Was AutoGen abgelöst hat: Microsoft Agent Framework",
      text: [
        "Microsofts eigene Antwort ist Agent Framework. Auf Microsoft Learn heißt es: „Das Agent Framework ist der direkte Nachfolger, entwickelt von denselben Teams“ („The Agent Framework is the direct successor, created by the same teams“), und dort gibt es eine Migrationsanleitung von AutoGen. Der Rest dieser Seite behandelt andere Projekte.",
      ],
      points: [
        "Das README von AutoGen empfiehlt Agent Framework für neue Projekte und sagt, AutoGen werde „jetzt von der Community verwaltet“ („now community-managed“).",
        "Zum Einsatz in Produktion heißt es im README: „AutoGen wurde für Forschung und Experimente entwickelt, und während es in den archivierten Zustand übergeht, raten wir weiterhin vom Einsatz in Produktion ab.“ („AutoGen was developed for research and experimentation and as it transitions to archived, we continue to advise against production use.“)",
        "AutoGen Studio, die No-Code-Oberfläche, ist laut demselben README „nicht als produktionsreife App gedacht“ („is not meant to be a production-ready app“).",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Multi-Agenten-Frameworks, mit denen du Code schreibst",
      text: [
        "Am nächsten an AutoGen: Open-Source-Bibliotheken, die du aus deinem eigenen Code aufrufst, mit Agenten, die zusammenarbeiten. Im direkten Vergleich: [CrewAI vs AutoGen](/compare/crewai-vs-autogen) und [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI: ein MIT-lizenziertes Python-Framework. Jeder Agent wird mit Rolle, Ziel und Backstory definiert; ist Delegation eingeschaltet, geben Agenten einander Arbeit ab und stellen sich gegenseitig Fragen, und Flows ergänzen eine ereignisgesteuerte, schrittweise Steuerung. CrewAI AMP, die kommerzielle Plattform, ergänzt ein No-Code-Studio, Tracing, Cron-Zeitplanung und Deployment. Wähle CrewAI, wenn du Python schreibst (3.10 oder neuer, unter 3.14) und rollenbasierte Agenten in deiner eigenen Anwendung willst. Preise: [CrewAI-Preise](/pricing/crewai).",
        "LangGraph: das MIT-lizenzierte Framework von LangChain für langlebige, zustandsbehaftete Agenten, definiert als Graph aus State, Nodes und Edges in Python oder JS/TS. Es pausiert mit Interrupts für menschliche Eingaben und macht nach Fehlern weiter; LangSmith ergänzt Tracing, Evaluation und Deployment auf Agent Server. Wähle LangGraph, wenn du jeden Schritt auf niedriger Ebene steuern willst. Preise: [LangGraph-Preise](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Fertige Agenten, die von selbst laufen",
      text: [
        "AutoGen ist eine Bibliothek, mit der du Agenten baust. Diese beiden sind Agenten, die du installierst und ausführst, mit eingebautem Scheduler. Verglichen in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: ein MIT-lizenzierter persönlicher Assistent, der als Gateway auf deinem eigenen Computer läuft und in WhatsApp, Telegram, Slack, Discord und anderen Chat-Apps antwortet. Auf einem Gateway können mehrere Agenten laufen, und ein Team-Preset legt einen Koordinator mit Agenten für Recherche, Schreiben und Review an. Wähle OpenClaw, wenn du einen Assistenten auf Hardware willst, die du kontrollierst, mit Modellanbietern, die du austauschen kannst. Mehr unter [OpenClaw-Alternativen](/blog/openclaw-alternatives).",
        "Hermes Agent: der MIT-lizenzierte persönliche Agent von Nous Research. Er schreibt Skills aus Erfahrung, führt sein eigenes Gedächtnis und hat einen eingebauten Cron-Scheduler; im Bot Mode schreiben sich benannte Bots mit eigenen Modellen und Routinen direkt Nachrichten. Wähle Hermes Agent, wenn du mehrere spezialisierte Agenten willst, die du aus einem Terminal, einer Desktop-App und Chat-Apps erreichst. Mehr unter [Hermes-Agent-Alternativen](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coding-Agenten als Team betreiben",
      text: [
        "Diese koordinieren Coding-Agenten, die es schon gibt, statt Agenten, die du selbst baust. Siehe [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) und [Claude Code Agent Teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: ein selbst gehosteter, MIT-lizenzierter Node.js-Server mit Web-Oberfläche, der ein Team aus Agenten als Unternehmen führt: ein Organigramm mit Rollen und Budgets, Issues, die Agenten oder Menschen zugewiesen werden, und Routinen per Cron, Webhook oder API-Trigger. Über Adapter steuert er Agenten, die du mitbringst, etwa Claude Code, Codex, OpenClaw und Hermes. Wähle Paperclip, wenn viele verschiedene Agenten mit Ausgabenlimits auf deinem eigenen Server auf ein gemeinsames Ziel hinarbeiten sollen.",
        "Claude Code Agent Teams: eine experimentelle Funktion von Claude Code, standardmäßig aus. Eine Lead-Session startet Teammates, separate Claude-Code-Instanzen, die sich eine Aufgabenliste teilen und sich direkt Nachrichten schreiben, und du kannst jedem Teammate schreiben. Der Token-Verbrauch ist höher, weil jeder Teammate eine eigene Claude-Instanz ist. Wähle Agent Teams, wenn du schon für einen Claude-Plan zahlst und eine Gruppe von Agenten willst, die bei einer Coding-Aufgabe miteinander sprechen.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine AutoGen-Alternative aus",
      steps: [
        {
          title: "Du pflegst eine AutoGen-App?",
          text: "Sieh dir Microsoft Agent Framework und seine Migrationsanleitung von AutoGen auf Microsoft Learn an. Diesen Weg empfiehlt das README von AutoGen.",
        },
        {
          title: "Du willst weiter Agenten-Code schreiben?",
          text: "CrewAI und LangGraph sind MIT-lizenzierte Bibliotheken, wie AutoGen. CrewAI ist eine Python-Bibliothek; LangGraph gibt es für Python und JS/TS.",
        },
        {
          title: "Du brauchst einen gehosteten Ort, um Agenten auszuführen und zu tracen?",
          text: "AutoGen hat keinen gehosteten Dienst. LangSmith Plus ($39 pro Platz im Monat) enthält einen Small Agent Server; der Basic-Plan von CrewAI AMP ist für 50 Workflow-Ausführungen im Monat kostenlos.",
        },
        {
          title: "Du willst Agenten, die ohne dich weiterarbeiten?",
          text: "OpenClaw und Hermes Agent haben eingebaute Scheduler, Paperclip führt Routinen per Cron, Webhook oder API aus, und Crewmark weckt Claude Code oder Codex während der Arbeitszeit per Heartbeat. Das README von AutoGen erwähnt keine Zeitplanung.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "AutoGen baut Agenten-Apps. Crewmark gibt deinen Coding-Agenten einen Job.",
      text: [
        "Crewmark ist kein Framework, um Multi-Agenten-Anwendungen zu bauen. Es ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Projekten. Er wacht während seiner Arbeitszeit per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board, und wenn er ein Review oder eine Erlaubnis braucht, setzt er das Issue auf „Handlungsbedarf“ und fragt dort.",
        "Crewmark ist Open Source unter GPL-3.0 und kostenlos für 1 Projekt mit bis zu 3 KI-Mitarbeitern. Deinen Agentenanbieter bezahlst du wie gewohnt weiter, und dein Computer muss für die Heartbeats eingeschaltet bleiben. Die Pläne stehen auf der [Preisseite](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Beginne mit den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder SEO-Spezialist, und schreib seine KPIs und Projekte auf.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues dem Mitarbeiter oder Menschen zu und lass regelmäßige täglich, wöchentlich oder monatlich wiederkehren.",
        },
        {
          title: "Leg seine Arbeitszeiten fest",
          text: "Wähle Arbeitszeiten und einen Heartbeat zwischen 15 Minuten und 24 Stunden. Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Agenten, die sich die nächste Aufgabe selbst nehmen",
    text: "Crewmark weckt deine Claude-Code- oder Codex-Session per Heartbeat und gibt ihr das nächste Issue von einem gemeinsamen Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu AutoGen-Alternativen",
    items: [
      {
        q: "Was hat AutoGen abgelöst?",
        a: "Microsoft Agent Framework. Das README von AutoGen verweist neue Nutzer darauf, und Microsoft Learn nennt es „den direkten Nachfolger, entwickelt von denselben Teams“ („the direct successor, created by the same teams“), mit einer Migrationsanleitung von AutoGen.",
      },
      {
        q: "Wird Microsoft AutoGen noch gepflegt?",
        a: "Nicht von Microsoft. Am 13. November 2026 stand im README: „Dieses Projekt wurde archiviert und wird von Microsoft nicht mehr aktiv gepflegt. Microsoft stellt für dieses Projekt keine Fehlerbehebungen, Sicherheitskorrekturen, neuen Funktionen und keinen Support bereit.“ („This project has been archived and is no longer actively maintained by Microsoft. Microsoft is not providing bug fixes, security fixes, new features, or support for this project.“) Laut README wird das Projekt inzwischen von der Community verwaltet.",
      },
      {
        q: "Gibt es eine kostenlose AutoGen-Alternative?",
        a: "Mehrere sind kostenlos und Open Source: die Frameworks CrewAI und LangGraph, OpenClaw, Hermes Agent und das selbst gehostete Paperclip, alle unter MIT. Bei allen bezahlst du deinen Modellanbieter. Crewmark ist Open Source unter GPL-3.0 und hat einen kostenlosen Plan für 1 Projekt mit bis zu 3 KI-Mitarbeitern.",
      },
      {
        q: "Was ist eine Alternative zu AutoGen Studio?",
        a: "Laut README von AutoGen ist AutoGen Studio „nicht als produktionsreife App gedacht“ („is not meant to be a production-ready app“). Als visuellen Builder hat CrewAI AMP ein No-Code-Studio, und sein Basic-Plan ist kostenlos, mit visuellem Editor und 50 Workflow-Ausführungen im Monat. Für LangGraph ist LangSmith Studio das Tool von LangChain für visuelles Prototyping.",
      },
      {
        q: "Ist AutoGen kostenlos?",
        a: "Ja. Der Code ist Open Source unter MIT (die Dokumentation unter CC-BY-4.0), und du bezahlst deinen Modellanbieter. Das README erwähnt keinen gehosteten oder kostenpflichtigen AutoGen-Dienst.",
      },
      {
        q: "Bei welchen AutoGen-Alternativen sprechen Agenten miteinander?",
        a: "CrewAI-Agenten können Arbeit delegieren und sich gegenseitig Fragen stellen, wenn Delegation eingeschaltet ist; LangGraph nutzt Subagents, Handoffs und Router, die du im Graph entwirfst; OpenClaw erlaubt Zugriff von Agent zu Agent zwischen Agenten auf einem Gateway; die Bots von Hermes Agent schreiben sich im Bot Mode gegenseitig Nachrichten; in den Agent Teams von Claude Code schreiben sich Teammates direkt. In Crewmark arbeiten Agenten über Issues zusammen: Sie weisen sie zu, kommentieren und @erwähnen.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten Rollen und ein Board.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Angaben am 13. November 2026 mit dem README, der Dokumentation und der Preisseite des jeweiligen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Microsoft noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
