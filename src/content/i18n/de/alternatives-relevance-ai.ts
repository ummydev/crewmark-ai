import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance-AI-Alternativen 2026: Open Source und gehostet",
    description:
      "Relevance AI hat den Free-Plan eingestellt und nennt nur Enterprise. Vergleiche CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy und Crewmark mit Preisen.",
  },
  breadcrumb: "Relevance-AI-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Relevance AI",
    title: "Relevance-AI-Alternativen: Open-Source-Frameworks, selbst gehostete Agenten-Teams und gehostete Assistenten",
    lead: "Relevance AI ist eine gehostete Low-Code-Plattform, um KI-Agenten zu bauen und sie zu Multi-Agenten-Teams zu verknüpfen, die sie AI Workforce nennt, für Arbeit in Vertrieb, Support und Operations. Mit Stand 13. November 2026 ist der Free-Plan laut Doku für neue Registrierungen und bestehende Konten eingestellt, und die Preisseite nennt einen einzigen Plan, Enterprise, über den Vertrieb. Relevance AI ist nicht Open Source und nennt keine Möglichkeit zum Self-Hosting. Diese Seite stellt 7 Alternativen vor: Open-Source-Frameworks, selbst gehostete Agenten-Teams, einen gehosteten Assistenten und Crewmark, jeweils mit den Kosten.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance-AI-Alternativen auf einen Blick",
      text: [
        "Angaben von den eigenen Seiten, der Dokumentation oder dem GitHub jedes Anbieters, geprüft am 13. November 2026. Preise in US-Dollar, sofern der Anbieter welche nennt. Kein Ranking.",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (zum Vergleich)",
          "Eine gehostete Low-Code-Plattform für KI-Agenten und Multi-Agenten-Workforces",
          "Nein",
          "Nur Enterprise, über den Vertrieb; Free-Plan eingestellt",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Ein Python-Framework für Crews aus rollenbasierten Agenten, plus die Plattform CrewAI AMP",
          "Framework ja, MIT; AMP ist kommerziell",
          "Framework kostenlos; AMP Basic kostenlos (50 Workflow-Ausführungen im Monat)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "Das Framework von LangChain für langlebige, zustandsbehaftete Agenten, gebaut als Graphen im Code",
          "Framework ja, MIT; LangSmith ist kommerziell",
          "Framework kostenlos; LangSmith Developer $0, Plus $39/Platz/Monat",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Das Multi-Agenten-Framework von Microsoft für Python und .NET; laut README archiviert",
          "Ja: Code MIT, Doku CC-BY-4.0",
          "Kostenlos; kein gehosteter Dienst",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Ein selbst gehosteter Server, der Agenten, die du mitbringst, als Unternehmen führt, mit Organigramm und Budgets",
          "Ja, MIT",
          "Selbst gehostet kostenlos; Cloud-Version mit Warteliste",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "Der selbst hostbare Workspace von CopilotKit für KI-Kollegen",
          "Ja, MIT (nutzt das separat lizenzierte CopilotKit Intelligence)",
          "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Ein gehosteter KI-Assistent für Posteingang, Kalender, Meetings und Slack, abgerechnet in Credits",
          "Nein",
          "$50 in kostenlosen Credits für 7 Tage; danach ab $29.99/Monat pro aktivem Nutzer",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Ein Issue-Board für KI-Mitarbeiter, die als Claude Code oder Codex auf deinem Computer laufen",
          "Ja, GPL-3.0",
          "Kostenlos (1 Projekt, bis zu 3 KI-Mitarbeiter); Pro $5/Monat folgt bald",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Open-Source-Agenten-Frameworks (du schreibst den Code)",
      text: [
        "Diese ersetzen den Builder von Relevance AI durch eine Bibliothek: Du definierst Agenten und Workflows im Code und bezahlst deinen Modellanbieter. Für CrewAI und LangGraph gibt es außerdem kommerzielle Plattformen, um zu deployen, was du baust. Im direkten Vergleich: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai): ein MIT-lizenziertes Python-Framework für Crews aus Agenten, jeder mit Rolle, Ziel und Backstory definiert, plus ereignisgesteuerte Flows für die schrittweise Steuerung. Agenten können Arbeit delegieren und sich gegenseitig Fragen stellen. Die kommerzielle Plattform CrewAI AMP hat einen kostenlosen Basic-Plan mit visuellem Editor, KI-Copiloten und 50 Workflow-Ausführungen im Monat sowie einen Enterprise-Plan mit individuellen Preisen, der in deiner eigenen VPC deployen kann. Wähle CrewAI, wenn du rollenbasierte Multi-Agenten-Teams in Python willst, mit einem No-Code-Editor als Option. Preise: [CrewAI-Preise](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph): das MIT-lizenzierte Framework von LangChain für langlebige, zustandsbehaftete Agenten, geschrieben als Graph aus State, Nodes und Edges in Python oder JavaScript. Es bietet dauerhafte Ausführung (Durable Execution) und Pausen für menschliche Eingaben (Human-in-the-Loop). LangSmith ergänzt Tracing, Evaluation und Deployment: Developer $0 (1 Platz, kein Agent Server), Plus $39/Platz/Monat mit einem enthaltenen kleinen Agent Server, Enterprise nach Vereinbarung. Wähle LangGraph, wenn du jeden Schritt auf niedriger Ebene steuern willst. Preise: [LangGraph-Preise](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen): das Open-Source-Framework von Microsoft für Multi-Agenten-Apps in Python und .NET, mit Gruppenchats, Handoffs und AutoGen Studio für No-Code-Prototyping. Laut README ist das Projekt „archiviert und wird von Microsoft nicht mehr aktiv gepflegt“ („has been archived and is no longer actively maintained by Microsoft“), und es verweist neue Nutzer auf Microsoft Agent Framework, das Microsoft den direkten Nachfolger von AutoGen nennt. Wähle AutoGen nur, wenn du eine bestehende AutoGen-App pflegst oder seine Muster studieren willst.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "Selbst gehostete Agenten-Teams (ohne Framework-Code)",
      text: [
        "Wie Relevance AI geben dir diese ein Team aus Agenten, das du über eine Web- oder Desktop-App verwaltest, aber du betreibst sie auf deinem eigenen Rechner oder deinen eigenen Servern. Siehe [Paperclip vs CrewAI](/compare/paperclip-vs-crewai).",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip): ein MIT-lizenzierter Node.js-Server mit Web-Oberfläche, der ein Team aus KI-Agenten als Unternehmen führt. Du legst ein Ziel fest, baust ein Organigramm mit Rollen, Berichtslinien und Budgets und weist Issues Agenten zu, die du mitbringst, etwa Claude Code, Codex oder OpenClaw. Routinen legen wiederkehrende Aufgaben per Cron, Webhook oder API-Trigger an, und Freigaben und harte Budget-Stopps lassen die Kontrolle bei einem Menschen. Derzeit gibt es Paperclip nur selbst gehostet; eine Cloud-Version hat eine Warteliste. Wähle Paperclip, wenn du viele verschiedene Agenten auf ein Ziel hin koordinieren und ihre Ausgaben deckeln willst.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): ein selbst hostbarer Workspace, in dem jeder Bot einen eigenen Browser, eigene Dateien und eigene Tools bekommt, mit Routinen, Freigaben und einem Aktivitätsprotokoll. Es läuft als Desktop-App für Mac und Windows oder für ein Team auf Kubernetes, in der Team-Edition mit Firmen-Login, Rollen, Tool-Berechtigungen und Audit. Du bringst OpenAI, Claude, Gemini oder offene Modelle mit oder deine eigenen Agenten über AG-UI. Kostenlos für persönliche Projekte; OpenBot for Business kostet bis zu $29 pro aktivem Nutzer im Monat, plus 5 % der monatlichen Modellausgaben über $5.000. Wähle OpenBot, wenn du KI-Kollegen mit Freigaben und Audit-Trail auf deiner eigenen Infrastruktur willst.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Ein gehosteter Assistent: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): ein einzelner gehosteter KI-Assistent statt eines Teams, das du baust. Er kümmert sich über Slack, E-Mail, iMessage, SMS, Telefonanrufe und eine Chrome-Erweiterung in Gmail um Posteingang, Kalender, Meetings, Recherche, Berichte und Follow-ups, führt Routinen nach Zeitplan oder bei einem Ereignis aus und wartet bei allem mit Außenwirkung zuerst auf eine Freigabe. Zum Start gibt es $50 in kostenlosen Credits, die 7 Tage gelten; danach wird jeder aktive Nutzer abgerechnet, ab $29.99/Monat für 3.000 Credits. Wähle Lindy, wenn du einen fertigen Assistenten willst, für den du dich selbst registrieren kannst. Siehe [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Relevance-AI-Alternative aus",
      steps: [
        {
          title: "Entscheide, ob du Code schreiben willst",
          text: "CrewAI, LangGraph und AutoGen sind Bibliotheken, die du programmierst. Paperclip, OpenBot und Lindy sind Apps, die du konfigurierst. Der kostenlose Basic-Plan von CrewAI AMP ergänzt einen visuellen Editor, wenn du etwas dazwischen willst.",
        },
        {
          title: "Entscheide, wo es laufen soll",
          text: "Relevance AI und Lindy sind gehostet. Paperclip gibt es derzeit nur selbst gehostet; OpenBot läuft auf deinem Laptop oder auf Kubernetes; die Frameworks laufen in deinem eigenen Code, mit CrewAI AMP und LangSmith als optionalen gehosteten Plattformen.",
        },
        {
          title: "Prüfe, wofür du dich heute registrieren kannst",
          text: "Die öffentliche Preisseite von Relevance AI nennt nur Enterprise, über den Vertrieb. CrewAI AMP Basic und LangSmith Developer sind kostenlose Pläne, Lindy startet mit kostenlosen Credits und ohne Kreditkarte, OpenBot ist für persönliche Projekte kostenlos, und die selbst gehostete Version von Paperclip braucht kein Paperclip-Konto.",
        },
        {
          title: "Prüfe, ob das Framework gepflegt wird",
          text: "Laut README pflegt Microsoft AutoGen nicht mehr und rät vom Einsatz in Produktion ab, während das Projekt in den archivierten Zustand übergeht. Für neue Projekte verweist Microsoft auf Microsoft Agent Framework.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Crewmark: ein Team aus KI-Mitarbeitern auf Claude Code oder Codex",
      text: [
        "Crewmark ist enger gefasst als Relevance AI. Es baut keine Agenten, sondern gibt dem Claude Code oder Codex, das du schon nutzt, einen Job. Jeder KI-Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board und hält ihren Status aktuell. Agenten weisen sich gegenseitig Issues zu, kommentieren und @erwähnen, und jedes Ereignis weckt den Agenten, den es betrifft.",
        "Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten. Der Free-Plan umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter; Pro ($5/Monat) und Team ($10/Monat) folgen bald, und die Abrechnung ist noch nicht gebaut, deshalb kann bis dahin jedes Konto Crewmark kostenlos nutzen. Die Agentennutzung bezahlst du deinem Agentenanbieter, und dein Computer muss für die Heartbeats eingeschaltet bleiben. Details unter [Crewmark-Preise](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Gib jedem Mitarbeiter eine Rolle, Ziele und Projekte, zum Beispiel als SEO-Spezialist oder Softwareentwickler. Siehe [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues mit Status und Prioritäten zu und lass regelmäßige wiederkehren. Braucht ein Agent ein Review, eine Erlaubnis oder Informationen, setzt er das Issue auf „Handlungsbedarf“ und wartet.",
        },
        {
          title: "Leg Arbeitszeiten fest",
          text: "Der Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeit alle 15 Minuten bis 24 Stunden. Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst Agenten, mit denen du heute starten kannst?",
    text: "Crewmark macht aus deinem Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board. Kostenlos für bis zu 3 Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Relevance-AI-Alternativen",
    items: [
      {
        q: "Gibt es eine Open-Source-Alternative zu Relevance AI?",
        a: "Ja. CrewAI und LangGraph sind MIT-lizenzierte Frameworks, und der Code von AutoGen steht unter MIT, auch wenn das Projekt laut README archiviert ist. Paperclip (MIT) und OpenBot (eine MIT-Anwendungsvorlage auf dem separat lizenzierten CopilotKit Intelligence) sind selbst gehostete Apps, um Agenten-Teams zu betreiben, und Crewmark steht unter GPL-3.0. Relevance AI selbst ist nicht Open Source.",
      },
      {
        q: "Hat Relevance AI einen kostenlosen Plan?",
        a: "Nein. Mit Stand 13. November 2026 ist der Free-Plan laut Doku für neue Registrierungen und bestehende Konten eingestellt, und die Preisseite nennt einen einzigen Plan, Enterprise, mit individuellen Preisen über den Vertrieb. Details unter [Relevance-AI-Preise](/pricing/relevance-ai).",
      },
      {
        q: "Gibt es eine kostenlose Relevance-AI-Alternative?",
        a: "Die Frameworks CrewAI, LangGraph und AutoGen sind kostenlos; du bezahlst deinen Modellanbieter. Der Basic-Plan von CrewAI AMP ist kostenlos, mit 50 Workflow-Ausführungen im Monat, und der Developer-Plan von LangSmith kostet $0 für 1 Platz. Paperclip lässt sich kostenlos selbst hosten, OpenBot ist für persönliche Projekte kostenlos, Lindy startet mit $50 in Credits für 7 Tage, und der Free-Plan von Crewmark umfasst bis zu 3 KI-Mitarbeiter.",
      },
      {
        q: "Gibt es eine No-Code-Alternative zu Relevance AI?",
        a: "Der kostenlose Basic-Plan von CrewAI AMP enthält einen visuellen Editor und einen KI-Copiloten. Lindy richtest du im Gespräch ein, ohne Builder. AutoGen Studio ist eine No-Code-Oberfläche für Prototypen, aber laut README nicht als produktionsreife App gedacht.",
      },
      {
        q: "Kann ich eine Relevance-AI-Alternative selbst hosten?",
        a: "Ja. Paperclip läuft als ein Node.js-Prozess oder als Docker-Image, OpenBot auf deinem Laptop oder auf Kubernetes und Crewmark aus seinem Repository (Node.js, PostgreSQL und Google-Anmeldung). Die Frameworks CrewAI, LangGraph und AutoGen laufen in deinem eigenen Code; CrewAI AMP Enterprise kann in deiner eigenen VPC deployen, und der selbst gehostete Agent Server von LangSmith ist eine Enterprise-Option. Relevance AI nennt keine Möglichkeit zum Self-Hosting.",
      },
      {
        q: "Relevance AI vs Lindy: Was ist der Unterschied?",
        a: "Relevance AI ist eine Plattform, um viele spezialisierte Agenten zu bauen und zu einer Workforce zu verknüpfen, verkauft über den Vertrieb. Lindy ist ein einzelner fertiger Assistent für Posteingang, Kalender, Meetings und Slack, abgerechnet pro aktivem Nutzer in Credits ab $29.99/Monat. Siehe [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
    ],
  },
  cta: {
    title: "Gib deinen Agenten einen Job, ganz ohne Verkaufsgespräch.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit den eigenen Seiten, der Dokumentation, den Preisen und dem GitHub jedes Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs oder CopilotKit noch mit Lindy verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
