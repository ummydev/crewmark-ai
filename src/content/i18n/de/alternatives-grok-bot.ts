import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok-Bot-Alternativen 2026: Open Source, kostenlos, gehostet",
    description:
      "Grok-Bot-Alternativen im Vergleich: Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent und Crewmark nach Lizenz und Preis.",
  },
  breadcrumb: "Grok-Bot-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · xAI Grok Bot",
    title: "Grok-Bot-Alternativen: KI-Teamkollegen als Open Source, kostenlos und gehostet",
    lead: "Grok Bot ist das Angebot von xAI für gehostete „KI-Teamkollegen“ („AI teammates“): Bots, die jeweils einen eigenen Computer in der Cloud bekommen, sich bei deinen Tools und Apps anmelden, in Slack und Microsoft Teams arbeiten, Routinen ausführen und sich gegenseitig Arbeit übergeben. Grok Bot startete am 11. August 2026 als Beta und hat die Beta inzwischen verlassen. Es ist nicht Open Source, und die Pläne beginnen bei Premium, $30 im Monat; Teams und Enterprise laufen über den Vertrieb. Hier sind acht Alternativen, von den KI-Kollegen in Claude, ChatGPT und Microsoft 365 bis zu Open-Source-Projekten auf GitHub, mit Lizenz, Preis und für wen sie sich jeweils eignen.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok-Bot-Alternativen auf einen Blick",
      text: [
        "Angaben von Website, Dokumentation und Preisseite des jeweiligen Produkts, geprüft am 13. November 2026. Preise in US-Dollar. Grok Bot: Premium $30, Super $100 und Ultra $200 im Monat, monatlich abgerechnet, mit wöchentlicher Nutzung inklusive; zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Mehr in unserem [Guide zu Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Der Agent von Anthropic für Arbeit ohne Programmieren in den Claude-Apps: Recherche, Dokumente, Tabellen und Folien",
          "Nein",
          "Bezahlte Claude-Pläne, ab Pro für $20 im Monat ($17 im Monat bei jährlicher Abrechnung); nicht in Free",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Ein Agent in Microsoft 365 Copilot für mehrstufige Aufgaben in Outlook, Teams, Word, Excel, PowerPoint, OneDrive und SharePoint",
          "Nein",
          "Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01, nutzungsbasiert, monatlich abgerechnet",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Ein Work-Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, etwa Präsentationen, Tabellen und Analysen",
          "Nein",
          "Eingeschränkt bei Free ($0) und Go ($8 im Monat) in der Desktop-App; voll ab Plus für $20 im Monat",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "Ein gehosteter Assistent für Posteingang, Kalender, Meetings und Follow-ups, den du in Slack mit deinem Team teilst",
          "Nein",
          "Kostenlos: $50 in Credits für 7 Tage; $29.99 im Monat pro aktivem Nutzer für 3.000 Credits",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "Der selbst hostbare Workspace von CopilotKit für KI-Kollegen, in dem jeder Bot einen eigenen Browser, eigene Dateien und eigene Tools bekommt",
          "Ja (App-Vorlage unter MIT; nutzt das separat lizenzierte CopilotKit Intelligence)",
          "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Eine Desktop-App, „ein KI-Kollege für deine tägliche Arbeit“ („An AI coworker for your everyday work“), die auf deinem Rechner läuft, mit Freigaben und Audit-Trail",
          "Ja (MIT)",
          "Kein Preis angegeben; eigener Modell-Key oder lokales Modell",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "Der persönliche Agent von Nous Research, mit Bots, die eigene Modelle und Routinen haben und sich gegenseitig Nachrichten schreiben",
          "Ja (MIT)",
          "Agent kostenlos, plus dein Modellanbieter; optional Nous Portal Plus $20 im Monat",
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
      id: "big-vendors",
      title: "KI-Kollegen von Anthropic, Microsoft und OpenAI",
      text: [
        "Gehostet wie Grok Bot und in Plänen enthalten, die viele Teams schon haben. Alle drei vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker).",
      ],
      points: [
        "Claude Cowork: der Agent von Anthropic für Wissensarbeit. Du beschreibst ein Ergebnis, und er arbeitet Recherche, Dokumente, Tabellen und Folien in deinen Dateien, verbundenen Apps und einem Browser ab. Aufgaben laufen in Anthropics Cloud und gehen auch bei zugeklapptem Laptop weiter, und geplante Aufgaben laufen stündlich, täglich, wöchentlich oder werktags. Wähle Claude Cowork, wenn du schon für Claude zahlst und mehrstufige Arbeit als Dateien zurückbekommen willst. Siehe [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) und [Claude-Cowork-Alternativen](/alternatives/claude-cowork).",
        "Copilot Cowork: ein Agent in Microsoft 365 Copilot, der E-Mails sendet, Meetings plant, Dateien in Word, Excel und PowerPoint bearbeitet und in Teams postet, mit einem Freigabedialog vor heiklen Aktionen. Seine Modellauswahl umfasst GPT-, Claude- und Grok-Modelle, je nach Tenant-Einstellungen. Wähle Copilot Cowork, wenn deine Arbeit in Outlook, Teams, OneDrive und SharePoint liegt. Guide: [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work: ein Work-Modus in ChatGPT, der eine Aufgabe plant, deine Dateien, Plugins, das Web, einen Browser und Code nutzt und dir etwas zum Prüfen zurückgibt. Er teilt sich die Nutzungslimits mit Codex; Plus ($20 im Monat) und Pro (ab $100 im Monat) bekommen ihn auf dem Desktop, im Web und mobil. Wähle ChatGPT Work, wenn eine Aufgabe ein klares Ergebnis und mehrere Quellen oder Schritte hat. Guide: [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Ein gehosteter Assistent für Büroarbeit",
      points: [
        "Lindy: ein gemeinsamer Assistent statt mehrerer Bots. Er kümmert sich um Posteingang, Kalender, Meetings, Recherche und Follow-ups, und du nutzt ihn über Slack, E-Mail, iMessage, Telefonanrufe und eine Chrome-Erweiterung in Gmail. Alles mit Außenwirkung, etwa das Senden einer E-Mail, wartet auf deine Freigabe, und Routines laufen nach Zeitplan oder bei einem Ereignis. Jeder aktive Nutzer belegt einen bezahlten Platz, auch Personen, die Lindy in Slack nur @erwähnen. Wähle Lindy, wenn dein Team einen Assistenten will, den es in Slack für Berichte, Recherche und CRM-Updates @erwähnen kann. Guide: [Lindy](/personal-agent/lindy); mehr unter [Lindy-Alternativen](/alternatives/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-Source-Alternativen zu Grok Bot auf GitHub",
      text: ["Diese betreibst du selbst und bringst eigene Modell-Keys mit. Die Sternzahlen stammen von GitHub, Stand 13. November 2026."],
      points: [
        "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 Sterne): Wie bei Grok Bot bekommt jeder Bot einen eigenen Computer mit Browser, Dateien und Tools, dazu Routinen, Freigaben und ein Aktivitätsprotokoll. Es läuft als Desktop-App für Mac und Windows oder für ein Team auf Kubernetes und bindet deine eigenen Agenten über AG-UI an. Wähle OpenBot, wenn du KI-Kollegen unter MIT willst, die du selbst hosten und anpassen kannst. Siehe [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "OpenWorker (`github.com/andrewyng/openworker`, 19.050 Sterne): eine Desktop-App in offener Beta für macOS und Windows. Aktionen brauchen standardmäßig eine Freigabe, jeder Tool-Aufruf wird protokolliert, geplante Aufgaben decken etwa Morgen-Briefings und Wochenberichte ab, und du kannst OpenWorker in Slack erwähnen und bekommst die Antwort im Thread. Wähle OpenWorker, wenn du einen Agenten auf deinem eigenen Rechner willst, auch mit einem lokalen Modell. Guide: [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 Sterne): der persönliche Agent von Nous Research. Sein Bot Mode macht aus Profilen benannte Bots, jeder mit eigenem Chat, eigener Rolle, eigenem Modell, Gedächtnis, Skills und Avatar, und sie schreiben sich direkt Nachrichten. Er antwortet in Telegram, Discord, Slack, WhatsApp, Signal und per E-Mail. Wähle Hermes Agent, wenn du mehrere spezialisierte Bots auf deinem eigenen Rechner oder Server willst. Siehe [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Grok-Bot-Alternative aus",
      steps: [
        {
          title: "Beginne mit dem, wofür du schon zahlst",
          text: "Ein bezahlter Claude-Plan enthält Claude Cowork; ChatGPT-Pläne enthalten Work (eingeschränkt bei Free und Go); Copilot Cowork braucht eine Lizenz für Microsoft 365 Copilot plus Copilot Credits.",
        },
        {
          title: "Entscheide, wo er laufen soll",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work und Lindy laufen in der Cloud des Anbieters. OpenWorker läuft auf deinem Rechner, OpenBot auf deinem Laptop oder auf Kubernetes und Hermes Agent auf deinem Rechner oder einem Server.",
        },
        {
          title: "Prüfe, wo dein Team kommuniziert",
          text: "Grok Bot arbeitet in Slack, Microsoft Teams und Calls. In Slack kannst du außerdem Lindy, OpenWorker, Hermes Agent sowie Connectoren oder Plugins in Claude Cowork und ChatGPT Work nutzen. Copilot Cowork arbeitet in Outlook und Teams.",
        },
        {
          title: "Sieh dir an, wie er vor dem Handeln fragt",
          text: "Grok Bot meldet sich, wenn eine Freigabe nötig ist, und kann heikle Aktionen durch Auto Review schicken. Lindy wartet bei allem mit Außenwirkung auf Freigabe, bei OpenWorker brauchen Aktionen standardmäßig eine Freigabe, Claude Cowork hat die Modi Manual und Auto, und Copilot Cowork zeigt einen Freigabedialog.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Was Leute auf Hacker News über Grok-Bot-Alternativen sagen",
      text: [
        "Am 13. November 2026 haben wir 7 Hacker-News-Threads gelesen, die Grok Bot besprechen, von August bis November 2026, eine Seite nach der anderen. Reddit-Threads ließen sich nur über Suchergebnisse finden, deshalb listen wir sie mit Titel auf und fassen sie nicht zusammen; das ist eine Stichprobe öffentlicher Diskussionen, keine Umfrage.",
      ],
      points: [
        "Kritik an den Nutzungslimits kam in 3 der gelesenen Threads vor ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50345698), [November 2026](https://news.ycombinator.com/item?id=50366117)). Nutzer sagen, Bots, die ständig laufen, verbrauchten das wöchentliche Kontingent schnell, und die Threads aus dem November besprechen die niedrigeren Limits von Grok Bot.",
        "Open-Source-Agenten, die du selbst betreibst, kamen in 2 der gelesenen Threads vor ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)). Nutzer nannten [Hermes Agent](/alternatives/hermes-agent) in beiden und OpenClaw im Thread vom August; dort beschreiben sie beide als besser konfigurierbar als einen gehosteten Bot, und manche sagen, OpenClaw müsse oft repariert werden. Siehe [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) und [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        "Ein selbst gebautes Setup kam in 2 der gelesenen Threads vor ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)): ein Coding-Agent wie Claude Code oder Codex plus ein paar Skripte oder Modelle über OpenRouter. Nutzer dort sagen, so ein Setup erledige den Großteil der Arbeit für viel weniger Geld. Siehe [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Zweifel daran, was Grok Bot bringt, kamen in 2 der gelesenen Threads vor ([August 2026](https://news.ycombinator.com/item?id=49261514), [November 2026](https://news.ycombinator.com/item?id=50366117)). Manche Nutzer sagen, ihnen falle keine Aufgabe ein, die sie ihm übergeben würden, und andere sehen darin eine gehostete Version von Open-Source-Agenten wie OpenClaw, ergänzt um einen Browser.",
        "Auf Reddit tauchten in den Suchergebnissen Threads mit den Titeln [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot) und [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor) auf. Wir listen nur die Titel; diese Threads haben wir nicht gelesen.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Bots für deine Apps. KI-Mitarbeiter für deine Codebasis.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Projekten. Er wacht während seiner Arbeitszeit per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board, und wenn er ein Review oder eine Erlaubnis braucht, setzt er das Issue auf „Handlungsbedarf“ und fragt dort. Eine eingebaute Integration für Slack, GitHub oder Linear gibt es nicht: Die Agenten nutzen die Tools und Logins auf ihrem eigenen Computer.",
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
    title: "Du willst KI-Teamkollegen für deine Codebasis?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Grok-Bot-Alternativen",
    items: [
      {
        q: "Gibt es eine Open-Source-Alternative zu Grok Bot?",
        a: "Ja. Die App-Vorlage von OpenBot steht unter MIT (sie nutzt CopilotKit Intelligence, das separat lizenziert wird), und OpenWorker und Hermes Agent stehen unter MIT. Crewmark ist Open Source unter GPL-3.0. Grok Bot selbst ist nicht Open Source.",
      },
      {
        q: "Gibt es eine kostenlose Alternative zu Grok Bot?",
        a: "OpenBot ist für persönliche Projekte kostenlos; OpenWorker nennt keinen Preis und läuft mit deinem eigenen Modell-Key oder einem lokalen Modell; Hermes Agent ist kostenlos, plus dein Modellanbieter. ChatGPT Work bietet im Free-Plan eingeschränkten Zugang in der Desktop-App, der Free-Plan von Lindy gibt dir $50 in Credits für 7 Tage, und Crewmark ist kostenlos für 1 Projekt mit bis zu 3 KI-Mitarbeitern. Claude Cowork ist im Free-Plan von Claude nicht enthalten.",
      },
      {
        q: "Welche Grok-Bot-Alternativen gibt es auf GitHub?",
        a: "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 Sterne), OpenWorker (`github.com/andrewyng/openworker`, 19.050 Sterne), Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 Sterne) und Crewmark (`github.com/ummydev/crewmark-ai`). Die Sternzahlen sind vom 13. November 2026.",
      },
      {
        q: "Ist Claude eine Alternative zu Grok Bot?",
        a: "Claude Cowork in den Claude-Apps ist der Agent von Anthropic für Wissensarbeit: Er führt Aufgaben in Anthropics Cloud und nach Zeitplan aus und ist in bezahlten Claude-Plänen enthalten, ab Pro für $20 im Monat. Für Code ist Claude Code der Coding-Agent von Anthropic. Siehe [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) und [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      },
      {
        q: "Was kostet Grok Bot?",
        a: "Premium kostet $30 im Monat, Super $100 im Monat (das 3,5-Fache der Nutzung von Premium) und Ultra $200 im Monat (das 12-Fache der Nutzung von Premium), monatlich abgerechnet. Wöchentliche Grok-Bot-Nutzung ist enthalten, zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Teams und Enterprise laufen über den Vertrieb.",
      },
      {
        q: "Welche Grok-Bot-Alternativen funktionieren in Slack?",
        a: "Lindy arbeitet als Teamkollege in Slack; OpenWorker antwortet, wenn du es in einem Slack-Thread erwähnst; Hermes Agent verbindet sich über sein Gateway mit Slack; Claude Cowork und ChatGPT Work binden Slack als Connector oder Plugin an; OpenBot nennt Slack unter seinen Frontends, einige davon im Early Access.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten einen Job, nicht nur einen Chat.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Angaben am 13. November 2026 mit der Website, der Dokumentation und der Preisseite des jeweiligen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit xAI noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
