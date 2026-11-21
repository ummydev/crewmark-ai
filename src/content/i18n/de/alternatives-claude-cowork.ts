import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude-Cowork-Alternativen 2026: kostenlos und Open Source",
    description:
      "Claude-Cowork-Alternativen im Vergleich: ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy und Open Source wie OpenWorker, OpenBot, Suparagent, mit Preisen.",
  },
  breadcrumb: "Claude-Cowork-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Claude Cowork",
    title: "Claude-Cowork-Alternativen: KI-Kollegen von OpenAI, Microsoft, Google und xAI, dazu Open-Source-Optionen",
    lead: "Claude Cowork ist der Agent von Anthropic für Arbeit ohne Programmieren in den Claude-Apps: Du beschreibst ein Ergebnis, und er arbeitet Recherche, Dokumente, Tabellen und Folien in deinen Dateien, Apps und einem Browser ab. Es gibt ihn nur in bezahlten Claude-Plänen, ab $20 im Monat, und laut Anthropic verbraucht er die Limits des Plans schneller als der Chat. Er läuft auf Claude-Modellen, und bei Pro, Max und Ultra laufen neue Aufgaben seit dem 6. Oktober 2026 in Anthropics Cloud, ohne Einstellung, um zurückzuwechseln. Diese Seite vergleicht die Alternativen von OpenAI, Microsoft, Google und xAI, einen gehosteten Assistenten, Open-Source-Apps, die du selbst betreibst, und Crewmark, jeweils mit den Kosten.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude-Cowork-Alternativen auf einen Blick",
      text: [
        "Angaben von den eigenen Seiten, der Dokumentation oder dem GitHub jedes Anbieters, geprüft am 13. November 2026. Preise in US-Dollar. Kein Ranking.",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (zum Vergleich)",
          "Der Agent von Anthropic für Wissensarbeit ohne Programmieren in den Claude-Apps",
          "Nein",
          "Claude Pro $20/Monat oder $17/Monat bei jährlicher Abrechnung; nicht in Free",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Der Work-Modus von OpenAI in ChatGPT, für Aufgaben, an deren Ende etwas zum Prüfen steht",
          "Nein",
          "Free ($0) und Go ($8/Monat): eingeschränkt, nur in der Desktop-App; Plus $20/Monat",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Der Agent von Microsoft für mehrstufige Aufgaben in Microsoft 365",
          "Nein",
          "Lizenz für Microsoft 365 Copilot plus Copilot Credits zu je $0.01",
        ],
        [
          "[Gemini-Aufgaben (früher Spark)](/personal-agent/gemini-spark)",
          "Der Hintergrund-Agent von Google in der Gemini-App, der Gmail, Docs und andere Google-Apps nutzt",
          "Nein",
          "Google AI Pro $19.99/Monat (USA); kein Zugang im kostenlosen Plan",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Die gehosteten KI-Teamkollegen von xAI, jeder mit eigenem Cloud-Computer",
          "Nein",
          "Premium $30/Monat",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Ein gehosteter KI-Assistent für Posteingang, Kalender, Meetings und Slack, abgerechnet in Credits",
          "Nein",
          "Kostenlos: $50 in Credits für 7 Tage; danach ab $29.99/Monat pro aktivem Nutzer",
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
          "[Suparagent](/personal-agent/suparagent)",
          "Ein Workspace für KI-Kollegen auf Claude Code, Codex, Gemini CLI, Cursor und anderen Engines",
          "Ja, Apache-2.0",
          "Desktop und selbst gehostet: keine Gebühr angegeben; du bezahlst deinen Modellanbieter",
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
      title: "Gehostete Alternativen von OpenAI, Microsoft, Google und xAI",
      text: [
        "Diese vier funktionieren ähnlich wie Claude Cowork: Du übergibst eine Aufgabe in der App des Anbieters, und sie läuft in dessen Cloud. Im direkten Vergleich: [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): ein Work-Modus in ChatGPT, der eine Aufgabe plant, deine Dateien, Plugins, das Web, einen Browser und Code nutzt und Präsentationen, Tabellen, Dokumente oder Analysen zurückgibt. Er teilt sich die Nutzungslimits mit Codex. Free und Go bekommen eingeschränkten Zugang zu Work in der Desktop-App; Plus ($20/Monat) und Pro (ab $100/Monat) bekommen ihn auf dem Desktop, im Web und mobil. Wähle ChatGPT Work, wenn du die OpenAI-Alternative zu Claude Cowork willst oder einen kostenlosen Weg, einen KI-Kollegen auszuprobieren.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): erledigt mehrstufige Aufgaben in Outlook, Teams, Word, Excel, PowerPoint, OneDrive und SharePoint und zeigt vor heiklen Aktionen einen Freigabedialog. Nötig ist eine Lizenz für Microsoft 365 Copilot, und die Nutzung wird in Copilot Credits zu je $0.01 nutzungsbasiert abgerechnet. Auf Dateien auf deinem lokalen Gerät kann es nicht zugreifen. Wähle Copilot Cowork, wenn deine Arbeit in Microsoft 365 liegt und deine Admins Credit-Limits pro Nutzer oder Gruppe wollen.",
        "[Gemini-Aufgaben](/personal-agent/gemini-spark) (Google, in der Beta Spark genannt): ein Cloud-Agent in der Gemini-App, der Gmail, Docs, Drive und andere Google-Apps nutzt und nach Zeitplan läuft oder wenn etwas passiert. Laut Googles Hilfeartikel braucht er Google AI Pro ($19.99/Monat in den USA) oder Ultra (ab $99.99/Monat). Er funktioniert nur mit privaten Google-Konten und ist im EWR, in der Schweiz, im Vereinigten Königreich und in Nigeria nicht verfügbar. Wähle Gemini-Aufgaben, wenn deine Arbeit in Gmail und den anderen Google-Apps liegt.",
        "[Grok Bot](/alternatives/grok-bot) (xAI): gehostete Bots, die jeweils einen eigenen Cloud-Computer bekommen, sich bei deinen Tools anmelden, in Slack und Microsoft Teams arbeiten, Routinen ausführen und sich gegenseitig Nachrichten schreiben. Grok Bot ist in Premium ($30/Monat), Super ($100/Monat) und Ultra ($200/Monat) enthalten, monatlich abgerechnet; zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Wähle Grok Bot, wenn du mehrere Bots mit getrennten Jobs willst, die in Slack, Teams und Meetings arbeiten.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Ein gehosteter Assistent mit Abrechnung in Credits: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): ein gehosteter Assistent, der sich um Posteingang, Kalender, Meetings, Recherche, Berichte und Follow-ups kümmert und über Slack, E-Mail, iMessage, SMS, Telefonanrufe und eine Chrome-Erweiterung in Gmail genutzt wird. Routines laufen nach Zeitplan oder bei einem Ereignis, und alles mit Außenwirkung wartet auf deine Freigabe. Zum Start gibt es $50 in kostenlosen Credits, die 7 Tage gelten; danach wird jeder aktive Nutzer abgerechnet, ab $29.99/Monat für 3.000 Credits. Wähle Lindy, wenn du einen Executive Assistant willst, dem du eine Nachricht schreiben oder den du in Slack @erwähnen kannst. Mehr in unserem [Guide zu Lindy](/personal-agent/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Open-Source-Alternativen zu Claude Cowork",
      text: [
        "Diese drei laufen auf deinem eigenen Computer oder Server. Für die private Nutzung nennt keines davon eine Gebühr: Du bezahlst deinen Modellanbieter oder nutzt ein lokales Modell, wo das unterstützt wird.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): eine MIT-lizenzierte Desktop-App als KI-Kollege, in offener Beta. Agent-Schleife, Unterhaltungen, Connector-Tokens und Modell-Keys bleiben auf deinem Rechner. Du bringst einen Key für OpenAI, Anthropic, Google Gemini oder OpenRouter mit oder betreibst ein lokales Modell über Ollama, LM Studio, llama.cpp oder vLLM. Aktionen brauchen standardmäßig eine Freigabe, und geplante Läufe geben ihre eigenen Aktionen nie selbst frei: Ihre Anfragen warten in einem Posteingang. OpenWorker läuft unter macOS 12+ (Apple Silicon) und Windows 10/11 x64; der Windows-Build ist noch nicht code-signiert. Wähle OpenWorker, wenn du eine lokale Open-Source-Alternative zu Claude Cowork unter Windows oder auf dem Mac willst.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): ein selbst hostbarer Workspace, in dem jeder Bot einen eigenen Browser, eigene Dateien und eigene Tools bekommt, mit Freigaben vor Aktionen, Routinen und einem Aktivitätsprotokoll. Es läuft als Desktop-App für Mac und Windows (mit Docker-Backend) oder für ein Team auf Kubernetes. Die App-Vorlage steht unter MIT; sie nutzt CopilotKit Intelligence, das separat lizenziert wird und für den Produktivbetrieb auf Kubernetes eine Lizenz braucht. Kostenlos für persönliche Projekte; OpenBot for Business kostet bis zu $29 pro aktivem Nutzer im Monat. Wähle OpenBot, wenn du KI-Kollegen selbst hosten und eigene Modelle oder Agenten mitbringen willst. Siehe [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](/personal-agent/suparagent): ein Workspace unter Apache-2.0 für benannte KI-Kollegen, jeder mit Rolle, Workspace, Gedächtnis, Routinen und Freigabe-Einstellungen, die auf einer Engine laufen, die du schon nutzt, etwa Claude Code, Codex, Gemini CLI oder Cursor. Er hat ein Aufgaben-Board und einen Kalender, und ein Lead-Agent kann Arbeit an Spezialisten übergeben. Suparagent läuft als Desktop-App oder als selbst gehosteter Linux-Server; ein gehosteter Dienst unter suparagent.ai ist ein separates Produkt. Das Projekt beschreibt sich selbst als früh und im Wandel. Wähle Suparagent, wenn du Kollegen mit Rollen auf dem Agenten willst, für den du schon zahlst.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Claude-Cowork-Alternative aus",
      steps: [
        {
          title: "Beginne dort, wo deine Arbeit liegt",
          text: "Microsoft 365 spricht für Copilot Cowork, Gmail und Google Docs für Gemini-Aufgaben, ChatGPT für ChatGPT Work und Slack oder iMessage für Lindy oder Grok Bot.",
        },
        {
          title: "Entscheide, was du zahlen willst",
          text: "Kostenlose Optionen: ChatGPT Work in ChatGPT Free (eingeschränkt, nur in der Desktop-App), Lindys Credits für 7 Tage, OpenWorker, OpenBot und Suparagent mit deinem eigenen Modell-Key sowie der Free-Plan von Crewmark. Copilot Cowork rechnet zusätzlich zu einer Lizenz pro Copilot Credit ab; Gemini-Aufgaben, Grok Bot und bezahlte ChatGPT-Pläne sind Monatsabos.",
        },
        {
          title: "Wähle zwischen der Cloud des Anbieters und deinem eigenen Computer",
          text: "ChatGPT Work, Copilot Cowork, Gemini-Aufgaben, Grok Bot und Lindy laufen in der Cloud des Anbieters. OpenWorker behält Unterhaltungen und Keys auf deinem Rechner; OpenBot und Suparagent können auch auf deinem eigenen Server laufen.",
        },
        {
          title: "Prüfe die Plattform",
          text: "Unter Windows: Copilot Cowork und ChatGPT Work haben Desktop-Apps für Windows, OpenWorker liefert einen Build für Windows 10/11, und die Desktop-App von OpenBot läuft unter Windows. Gemini-Aufgaben gibt es im Web, als Mac-App und mobil; Grok Bot nennt Apps für macOS (Apple Silicon) und iOS.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Was Leute auf Hacker News über Claude-Cowork-Alternativen sagen",
      text: [
        "Am 13. November 2026 haben wir 5 Hacker-News-Threads gelesen, die Claude Cowork besprechen, von Januar bis November 2026, eine Seite nach der anderen. Reddit-Threads ließen sich nur über Suchergebnisse finden, deshalb listen wir sie mit Titel auf und fassen sie nicht zusammen; das ist eine Stichprobe öffentlicher Diskussionen, keine Umfrage.",
      ],
      points: [
        "Die Vorliebe für einen anderen Modus statt des Agent-Modus von Cowork kam in 2 der gelesenen Threads vor ([Januar 2026](https://news.ycombinator.com/item?id=46593022), [September 2026](https://news.ycombinator.com/item?id=49729412)). Im Thread vom Januar sagen Nutzer, Claude Code erledige dieselbe Arbeit mit mehr Kontrolle, wenn man sich im Terminal wohlfühlt; siehe [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code). Im Thread vom September sagen Nutzer, der normale Chat gebe ihnen bei Strategie- und Recherchefragen bessere Antworten als ein Agent-Modus.",
        "Auf Reddit tauchten in den Suchergebnissen Threads mit den Titeln [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding) und [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM) auf. Wir listen nur die Titel; diese Threads haben wir nicht gelesen.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Crewmark: ein Team aus KI-Mitarbeitern auf dem Claude Code oder Codex, das du schon nutzt",
      text: [
        "Crewmark ist eine andere Art von Tool als Claude Cowork. Es ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board und hält ihren Status aktuell. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
        "Der Free-Plan umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter. Pro ($5/Monat) und Team ($10/Monat) folgen bald; die Abrechnung ist noch nicht gebaut, deshalb kann bis dahin jedes Konto Crewmark kostenlos nutzen. Die Agentennutzung bezahlst du deinem Agentenanbieter, und dein Computer muss für die Heartbeats eingeschaltet bleiben. Details unter [Crewmark-Preise](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Gib jedem Mitarbeiter eine Rolle, Ziele und Projekte; zur schnellen Auswahl gibt es etwa Softwareentwickler, SEO-Spezialist und Datenanalyst. Siehe [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu, setz Prioritäten und lass regelmäßige täglich, wöchentlich oder monatlich wiederkehren. Braucht ein Agent ein Review, eine Erlaubnis oder Informationen, setzt er das Issue auf „Handlungsbedarf“ und wartet auf dich.",
        },
        {
          title: "Leg Arbeitszeiten fest",
          text: "Der Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeit alle 15 Minuten bis 24 Stunden. Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du zahlst schon für Claude oder ChatGPT?",
    text: "Crewmark macht aus deinem Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board. Kostenlos für bis zu 3 Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude-Cowork-Alternativen",
    items: [
      {
        q: "Gibt es eine kostenlose Alternative zu Claude Cowork?",
        a: "Ja. ChatGPT Free ($0) enthält eingeschränkten Zugang zu ChatGPT Work in der Desktop-App. Lindy startet mit $50 in Credits, die 7 Tage gelten. OpenWorker nennt keinen Preis und läuft mit deinem eigenen Modell-Key oder einem lokalen Modell, OpenBot ist für persönliche Projekte kostenlos, und für die Desktop- und die selbst gehostete Version von Suparagent ist keine Gebühr angegeben. Der Free-Plan von Crewmark umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter. Claude Cowork selbst ist im Free-Plan von Claude nicht enthalten.",
      },
      {
        q: "Gibt es eine Open-Source-Alternative zu Claude Cowork?",
        a: "OpenWorker (MIT), OpenBot (eine MIT-Anwendungsvorlage auf dem separat lizenzierten CopilotKit Intelligence) und Suparagent (Apache-2.0) sind Open Source, ebenso Crewmark (GPL-3.0). Claude Cowork selbst ist es nicht, allerdings ist Anthropics Repository knowledge-work-plugins mit Plugins für Cowork Open Source unter Apache-2.0.",
      },
      {
        q: "Was ist die OpenAI-Alternative zu Claude Cowork?",
        a: "ChatGPT Work: ein Work-Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, etwa Präsentationen, Tabellen und Analysen. Bei Free und Go ist er in der Desktop-App eingeschränkt, voll gibt es ihn ab Plus für $20/Monat, und er teilt sich die Nutzungslimits mit Codex. Siehe [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work).",
      },
      {
        q: "Welche Claude-Cowork-Alternativen laufen unter Windows?",
        a: "Copilot Cowork (die Desktop-App von Microsoft Copilot für Windows und macOS), ChatGPT Work (die ChatGPT-Desktop-App für macOS, Windows und Linux), OpenWorker (Windows 10/11 x64, noch nicht code-signiert) und OpenBot (eine Desktop-App für Mac und Windows). Claude Cowork selbst läuft über Claude Desktop ebenfalls unter Windows.",
      },
      {
        q: "Gibt es eine Claude-Cowork-Alternative, die auf meinem eigenen Computer läuft?",
        a: "OpenWorker führt seine Agent-Schleife auf deinem Rechner aus und behält Unterhaltungen, Connector-Tokens und Modell-Keys dort; OpenBot und Suparagent laufen als Desktop-Apps oder auf deinem eigenen Server. Claude Cowork erreicht lokale Dateien nur über Claude Desktop, und bei Pro, Max und Ultra laufen seine neuen Aufgaben seit dem 6. Oktober 2026 in der Cloud. Für Aufgaben, die nur auf deinem Computer laufen, verweist Anthropic auf Claude Code in der Desktop-App ([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "Warum suchen Leute nach Alternativen zu Claude Cowork?",
        a: "Wegen der Grenzen, die Anthropic selbst nennt: Cowork braucht einen bezahlten Claude-Plan (Pro ab $20 im Monat), verbraucht die Limits des Plans schneller als der Chat, Sessions lassen sich nicht mit anderen teilen, und bei Pro, Max und Ultra laufen neue Aufgaben in der Cloud, ohne Einstellung, um zurückzuwechseln. Wenn deine Arbeit in Microsoft 365 oder Gmail liegt, verbinden sich Copilot Cowork und Gemini-Aufgaben direkt mit diesen Apps.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Agenten einen Job, nicht nur eine Aufgabe.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit den eigenen Seiten, der Dokumentation, den Preisen und dem GitHub jedes Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Anthropic, OpenAI, Microsoft, Google, xAI, Lindy oder CopilotKit noch mit den Machern von OpenWorker und Suparagent verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
