import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy-AI-Alternativen 2026: kostenlos und Open Source",
    description:
      "Lindy-AI-Alternativen im Vergleich: Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI, Open Source wie OpenWorker und OpenBot, auch kostenlos.",
  },
  breadcrumb: "Lindy-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Lindy",
    title: "Lindy-AI-Alternativen: gehostete KI-Kollegen, Agentenplattformen und Open-Source-Assistenten",
    lead: "Lindy ist ein gehosteter KI-Assistent, der in deinem Posteingang, Kalender, deinen Meetings und Slack arbeitet, wiederkehrende Routinen ausführt und nachfragt, bevor er etwas mit Außenwirkung tut. Abgerechnet wird in Credits: Du startest mit $50 in kostenlosen Credits, die 7 Tage gelten, und zahlst danach ab $29.99 im Monat pro aktivem Nutzer für 3.000 Credits. Monatliche Credits werden nicht übertragen, und jeder aktive Nutzer wird abgerechnet, auch Leute, die Lindy in Slack nur @erwähnen. Hier sind 8 Alternativen, gehostet und Open Source, mit den jeweiligen Kosten.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy-Alternativen auf einen Blick",
      text: [
        "Angaben von den eigenen Seiten, der Dokumentation oder dem GitHub jedes Anbieters, geprüft am 13. November 2026. Preise in US-Dollar. Kein Ranking.",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (zum Vergleich)",
          "Ein gehosteter KI-Assistent für Posteingang, Kalender, Meetings und Slack",
          "Nein",
          "$50 in kostenlosen Credits für 7 Tage; danach ab $29.99/Monat pro aktivem Nutzer für 3.000 Credits",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Die gehosteten KI-Teamkollegen von xAI, jeder mit eigenem Cloud-Computer",
          "Nein",
          "Premium $30/Monat",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Der Agent von Anthropic für Wissensarbeit ohne Programmieren in den Claude-Apps",
          "Nein",
          "Claude Pro $20/Monat oder $17/Monat bei jährlicher Abrechnung",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Der Agent von Microsoft für mehrstufige Aufgaben in Microsoft 365",
          "Nein",
          "Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Der Work-Modus von OpenAI in ChatGPT, für Aufgaben, an deren Ende etwas zum Prüfen steht",
          "Nein",
          "Free ($0) und Go ($8/Monat): eingeschränkt, nur in der Desktop-App; Plus $20/Monat",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "Eine gehostete Low-Code-Plattform für KI-Agenten und Multi-Agenten-Teams",
          "Nein",
          "Nur Enterprise, über den Vertrieb; Free-Plan eingestellt",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Eine Desktop-App als KI-Kollege, die auf deinem Rechner läuft",
          "Ja, MIT",
          "Kein Preis angegeben; eigener Modell-Key oder lokales Modell",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "Der selbst hostbare Workspace von CopilotKit für KI-Kollegen",
          "Ja, MIT (nutzt das separat lizenzierte CopilotKit Intelligence)",
          "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat",
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
      id: "hosted",
      title: "Gehostete KI-Kollegen von xAI, Anthropic, Microsoft und OpenAI",
      text: [
        "Wie Lindy laufen diese in der Cloud des Anbieters und nehmen Arbeit im Gespräch entgegen. Weitere davon im direkten Vergleich unter [KI-Kollegen-Tools](/blog/ai-coworker).",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots, die jeweils einen eigenen Cloud-Computer bekommen, sich bei deinen Tools anmelden, in Slack und Microsoft Teams arbeiten, Routinen nach Zeitplan ausführen und sich gegenseitig Nachrichten schreiben. Zu den fertigen Bots gehören Sales Outbound, Talent Scout und Chief of Staff. Grok Bot ist in Premium ($30/Monat), Super ($100/Monat) und Ultra ($200/Monat) enthalten, monatlich abgerechnet; zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Wähle Grok Bot, wenn du mehrere Bots mit getrennten Jobs willst, auch in Microsoft Teams. Siehe den [Guide zu Grok Bot](/personal-agent/grok-bot).",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic): Du beschreibst ein Ergebnis, und Claude arbeitet Recherche, Dokumente, Tabellen mit funktionierenden Formeln und Präsentationen in deinen Dateien, verbundenen Apps wie Gmail und Slack und einem Browser ab. Geplante Aufgaben laufen stündlich, täglich, wöchentlich oder werktags in der Cloud. Claude Cowork ist in bezahlten Claude-Plänen enthalten: Pro $20/Monat ($17/Monat bei jährlicher Abrechnung), Max $100, Ultra $200, dazu Plätze in Team und Enterprise. Wähle Claude Cowork, wenn du fertige Dateien zurückbekommen willst statt Hilfe im Posteingang.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): sendet E-Mails, plant Meetings, bearbeitet Dateien in Word, Excel und PowerPoint und postet in Teams, mit einem Freigabedialog vor heiklen Aktionen. Nötig ist eine Lizenz für Microsoft 365 Copilot, und die Nutzung wird in Copilot Credits zu je $0.01 abgerechnet. Wähle Copilot Cowork, wenn dein Unternehmen mit Outlook und Teams arbeitet.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): ein Work-Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, mit Plugins für Slack, Google Drive, SharePoint, E-Mail, Kalender und CRMs, geplanten Aufgaben und Auslösern aus Gmail, Slack oder GitHub in berechtigten Plänen. Free und Go bekommen eingeschränkten Zugang in der Desktop-App; voller Zugang beginnt mit Plus für $20/Monat. Wähle ChatGPT Work, wenn du ChatGPT schon nutzt.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "Eine Agentenplattform für Teams: Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai): eine gehostete Low-Code-Plattform, auf der du spezialisierte Agenten mit eigenen Anweisungen, Tools und eigenem Wissen baust und sie zu Multi-Agenten-Teams verknüpfst, die Relevance AI eine AI Workforce nennt, für Arbeit in Vertrieb, Support und Operations. Mit Stand 13. November 2026 nennt die Preisseite nur Enterprise, über den Vertrieb, und laut Doku wurde der Free-Plan eingestellt. Wähle Relevance AI, wenn dein Unternehmen mehrere No-Code-Agenten und ein eingebettetes Deployment-Team will. Siehe [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) und [Relevance-AI-Preise](/pricing/relevance-ai).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-Source-Alternativen zu Lindy",
      text: [
        "Beide laufen auf deinem eigenen Computer oder Server mit dem Modell deiner Wahl, und keines rechnet in Credits ab: Du bezahlst deinen Modellanbieter direkt.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): eine MIT-lizenzierte Desktop-App als KI-Kollege für macOS und Windows, in offener Beta. Sie arbeitet mit GitHub, Slack, E-Mail und Kalendern; wenn du sie in Slack @erwähnst, läuft die Aufgabe auf deinem Desktop, und die Antwort kommt im Thread zurück. Du kannst Morgen-Briefings und Wochenberichte planen; geplante Läufe geben ihre eigenen Aktionen nie selbst frei, und ihre Anfragen warten in einem Posteingang. Nutze einen Key für OpenAI, Anthropic, Google Gemini oder OpenRouter oder ein lokales Modell. Wähle OpenWorker, wenn du Büro-Hilfe wie bei Lindy willst und deine Keys auf deinem Rechner bleiben sollen.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): ein selbst hostbarer Workspace, in dem jeder Bot einen eigenen Browser, eigene Dateien, Tools, Routinen, ein Gedächtnis und Freigaben hat. Es läuft als Desktop-App für Mac und Windows oder für ein Team auf Kubernetes, mit Frontends unter anderem für Slack und Teams (einige im Early Access). Kostenlos für persönliche Projekte; OpenBot for Business kostet bis zu $29 pro aktivem Nutzer im Monat, plus 5 % der monatlichen Modellausgaben über $5.000. Wähle OpenBot, wenn du KI-Kollegen für ein Team auf deiner eigenen Infrastruktur hosten willst.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Lindy-Alternative aus",
      steps: [
        {
          title: "Zähl, wer es nutzen wird",
          text: "Lindy rechnet jeden aktiven Nutzer ab, auch Leute, die Lindy in Slack nur @erwähnen. Grok Bot nennt Einzelpläne ab $30/Monat; Copilot Cowork braucht eine Lizenz für Microsoft 365 Copilot und rechnet pro Copilot Credit ab; OpenWorker nennt keinen Preis, und OpenBot ist für persönliche Projekte kostenlos.",
        },
        {
          title: "Entscheide, wie du für die Nutzung zahlen willst",
          text: "Lindys monatliche Credits werden nicht übertragen, und Aufstockungen kosten $10 pro 1.000 Credits. Grok Bot und die Pläne von Claude und ChatGPT sind Abos mit Nutzungslimits. Bei OpenWorker und OpenBot bezahlst du deinen Modellanbieter direkt.",
        },
        {
          title: "Richte dich danach, wo deine Arbeit stattfindet",
          text: "Slack und Microsoft Teams: Grok Bot. Microsoft 365: Copilot Cowork. Dokumente und Tabellen, die fertig zurückkommen sollen: Claude Cowork oder ChatGPT Work. Viele Agenten für Vertrieb oder Support: Relevance AI.",
        },
        {
          title: "Wähle gehostet oder selbst gehostet",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work und Relevance AI sind gehostet. OpenWorker läuft auf deinem Desktop, und OpenBot läuft auf deinem Laptop oder deinem eigenen Kubernetes-Cluster.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Crewmark: KI-Mitarbeiter auf dem Claude Code oder Codex, für das du schon zahlst",
      text: [
        "Crewmark ist kein Posteingangs-Assistent wie Lindy. Es ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board und hält ihren Status aktuell. Crewmark rechnet keine Nutzung ab: Die Agenten laufen mit dem Abo für Claude oder ChatGPT, für das du schon zahlst, und dein Computer muss für die Heartbeats eingeschaltet bleiben.",
        "Der Free-Plan umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter. Pro ($5/Monat) und Team ($10/Monat) folgen bald; die Abrechnung ist noch nicht gebaut, deshalb kann bis dahin jedes Konto Crewmark kostenlos nutzen. Crewmark ist Open Source (GPL-3.0). Details unter [Crewmark-Preise](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Gib jedem Mitarbeiter eine Rolle, Ziele und Projekte, zum Beispiel als SEO-Spezialist oder Datenanalyst. Siehe [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Bring wiederkehrende Arbeit aufs Board",
          text: "Lass Issues täglich, wöchentlich oder monatlich wiederkehren; wenn eines fällig ist, wird es wieder geöffnet, und sein Mitarbeiter wird benachrichtigt. Braucht ein Agent ein Review oder eine Erlaubnis, setzt er das Issue auf „Handlungsbedarf“ und wartet.",
        },
        {
          title: "Leg Arbeitszeiten fest",
          text: "Der Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeit alle 15 Minuten bis 24 Stunden. Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Lieber nicht pro Credit zahlen?",
    text: "Crewmark lässt KI-Mitarbeiter mit dem Abo für Claude Code oder Codex laufen, das du schon hast. Kostenlos für bis zu 3 Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Lindy-Alternativen",
    items: [
      {
        q: "Gibt es eine kostenlose Lindy-Alternative?",
        a: "Ja. ChatGPT Free ($0) enthält eingeschränkten Zugang zu ChatGPT Work in der Desktop-App. OpenWorker nennt keinen Preis und läuft mit deinem eigenen Modell-Key oder einem lokalen Modell, und OpenBot ist für persönliche Projekte kostenlos. Der Free-Plan von Crewmark umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter. Lindy selbst startet mit $50 in Credits, die 7 Tage gelten, einmal pro Teammitglied.",
      },
      {
        q: "Gibt es eine Open-Source-Alternative zu Lindy?",
        a: "OpenWorker (MIT) und OpenBot (eine MIT-Anwendungsvorlage auf dem separat lizenzierten CopilotKit Intelligence) sind Open Source, ebenso Crewmark (GPL-3.0). Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work und Relevance AI sind es nicht.",
      },
      {
        q: "Lindy vs Relevance AI: Was ist der Unterschied?",
        a: "Lindy ist ein einzelner gehosteter Assistent für Posteingang, Kalender, Meetings und Slack, abgerechnet pro aktivem Nutzer in Credits. Relevance AI ist eine Low-Code-Plattform, um viele spezialisierte Agenten zu bauen und zu einer Workforce zu verknüpfen; die Preisseite nennt nur Enterprise, über den Vertrieb. Siehe [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
      {
        q: "Welche Lindy-Alternative funktioniert in Slack?",
        a: "Grok Bot arbeitet in Slack und Microsoft Teams wie ein Kollege. OpenWorker @erwähnst du in Slack, und es antwortet im Thread. OpenBot hat ein Slack-Frontend (einige Frontends sind im Early Access), ChatGPT Work hat ein Slack-Plugin und Slack-Auslöser in berechtigten Plänen, und Claude Cowork hat einen Slack-Connector.",
      },
      {
        q: "Gibt es eine Lindy-Alternative, die auf meinem eigenen Computer läuft?",
        a: "OpenWorker führt seine Agent-Schleife auf deinem Rechner aus und behält Unterhaltungen und Modell-Keys dort. OpenBot läuft als Desktop-App für Mac und Windows oder auf deinem eigenen Kubernetes-Cluster. Die Agenten von Crewmark laufen auf deinem Computer in Claude Code oder Codex.",
      },
      {
        q: "Warum suchen Leute nach Lindy-Alternativen?",
        a: "Wegen der Grenzen, die Lindy selbst nennt: Monatliche Credits werden nicht übertragen, und wenn sie aufgebraucht sind, pausiert Lindy Aktionen, die Credits verbrauchen, bis zum nächsten Zyklus oder bis du aufstockst ($10 pro 1.000 Credits). Jeder aktive Nutzer wird abgerechnet, auch Leute, die Lindy in Slack nur @erwähnen. Kostenlose Credits gelten 7 Tage, und Microsoft Teams als Ort, an dem du Lindy nutzen kannst, kommt erst noch.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Agenten einen Job, kein Credit-Guthaben.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit den eigenen Seiten, der Dokumentation, den Preisen und dem GitHub jedes Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI oder CopilotKit noch mit den Machern von OpenWorker verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
