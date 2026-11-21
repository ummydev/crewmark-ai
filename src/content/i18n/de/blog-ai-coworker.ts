import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "KI-Kollegen (AI Coworker): Claude Cowork, Copilot, ChatGPT Work",
    description:
      "KI-Kollegen im Vergleich: Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot und Open Source wie Andrew Ngs OpenWorker.",
  },
  breadcrumb: "KI-Kollegen-Tools",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · KI-Kollegen",
    title: "KI-Kollegen im Vergleich: was jeder macht, was er kostet und was er vor dem Handeln fragt",
    lead: "Ein KI-Kollege ist ein Agent, dem du eine ganze Aufgabe übergibst. Er arbeitet in deinen Dateien, Apps und deinem Browser, macht im Hintergrund weiter und fragt dich, bevor er etwas Riskantes tut. 2026 bieten Anthropic, Microsoft, OpenAI, Google, Meta und xAI jeweils einen an, und auf GitHub gibt es Open-Source-Varianten, darunter Andrew Ngs OpenWorker. Hier steht, was jeder macht, wer ihn bekommt, was er kostet und wo er läuft, nach den eigenen Seiten der Anbieter.",
    cta: "Loslegen",
    secondary: "Zur Tabelle",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Was ist ein KI-Kollege?",
      text: [
        "Ein Chatbot antwortet. Ein KI-Kollege übernimmt eine Aufgabe mit klarem Ergebnis, etwa einen Bericht, eine Präsentation, eine ausgefüllte Tabelle oder ein aufgeräumtes Postfach, und arbeitet die Schritte selbst ab. Die Produkte unterscheiden sich stark, haben aber vier Dinge gemeinsam:",
      ],
      points: [
        "Er arbeitet dort, wo deine Arbeit liegt: in Dateien, E-Mail, Kalender, verbundenen Apps und einem Browser.",
        "Er macht ohne dich weiter: auf einem Cloud-Computer oder auf deinem eigenen Rechner, solange eine App geöffnet bleibt.",
        "Er kann wiederholen: Die meisten führen Aufgaben nach Zeitplan aus oder wenn etwas passiert, etwa wenn eine neue E-Mail eingeht.",
        "Er fragt zuerst: Senden, Veröffentlichen, Kaufen und Löschen warten auf deine Freigabe.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "KI-Kollegen auf einen Blick",
      text: [
        "Angaben von der Website, Preisseite, Dokumentation oder GitHub-Seite jedes Anbieters, geprüft am 13. November 2026. Preise in US-Dollar. Kein Ranking.",
      ],
      headers: ["KI-Kollege", "Anbieter", "Wer ihn bekommt", "Preis ab", "Läuft wo"],
      rows: [
        ["Claude Cowork", "Anthropic", "Bezahlte Pläne von Claude, nicht Free", "Claude Pro, $20/Monat", "Anthropics Cloud; lokale Dateien und Browser über die Desktop-App"],
        ["Copilot Cowork", "Microsoft", "Geschäfts- oder Schulkonten mit einer Lizenz für Microsoft 365 Copilot; private Konten in der Vorschau", "Copilot Credits zu je $0.01, zusätzlich zur Lizenz", "Microsofts Cloud, mit deinen Dateien aus OneDrive und SharePoint"],
        ["ChatGPT Work", "OpenAI", "Pläne von ChatGPT; eingeschränkt bei Free und Go, in der Desktop-App", "Voller Zugang ab ChatGPT Plus, $20/Monat", "OpenAIs Cloud oder dein Computer über die Desktop-App"],
        ["Gemini-Aufgaben (früher Spark)", "Google", "Google AI Pro oder Ultra, Erwachsene mit privatem Konto; nicht im EWR, in der Schweiz, im Vereinigten Königreich oder in Nigeria", "Google AI Pro, $19.99/Monat (USA)", "Googles Cloud"],
        ["Meta Muse", "Meta", "USA und Kanada, ab 18; Singapur seit dem 27. Oktober", "Für die meisten Zwecke kostenlos; Abos verfügbar", "Ein Cloud-Computer pro Nutzer"],
        ["Grok Bot", "xAI", "Pläne Premium, Super, Ultra, Teams und Enterprise", "Premium, $30/Monat", "Ein Cloud-Computer pro Bot; Slack, Teams und Calls"],
        ["Lindy", "Lindy", "Alle; kostenlose Testphase", "$29.99/Monat pro aktivem Nutzer", "Lindys Cloud; Slack, E-Mail, iMessage, Telefon"],
        ["OpenWorker (Open Source)", "Andrew Ng", "Alle; Desktop-App in offener Beta", "Kostenlos; eigener Modell-Key oder lokales Modell", "Dein Computer (macOS, Windows)"],
        ["OpenBot (Open Source)", "CopilotKit", "Alle", "Kostenlos für persönliche Projekte; Business bis zu $29/Nutzer/Monat", "Dein Laptop oder dein Kubernetes-Cluster"],
        ["Suparagent (Open Source)", "Anil-matcha auf GitHub", "Alle", "Kostenlos selbst gehostet; gehostet ab $15/Monat", "Desktop-App, dein Server oder gehostet"],
        ["Crewmark", "Crewmark", "Alle", "Gratis: 1 Projekt, bis zu 3 KI-Mitarbeiter", "Dein Computer, in deinem Claude Code oder Codex"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "Guides zu jedem KI-Kollegen",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork): Pläne, Einrichtung, Freigabemodi und Cowork vs Claude Code.",
        "[Copilot Cowork](/personal-agent/copilot-cowork): Lizenzen, Copilot Credits und Einrichtung in Microsoft 365.",
        "[ChatGPT Work](/personal-agent/chatgpt-work): was der Work-Modus macht, welche Pläne ihn enthalten und wie er mit Codex zusammenhängt.",
        "[Cursor Projects](/personal-agent/cursor-projects): Cursors Koordinator-Agent für größere Coding-Aufgaben.",
        "[Lindy](/personal-agent/lindy): Preise in Credits und wie du es einrichtest.",
        "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot) und [Suparagent](/personal-agent/suparagent): die Open-Source-Varianten, mit Einrichtung von GitHub.",
        "Im direkten Vergleich: [alle Vergleiche](/compare), etwa [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) und [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio).",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "Die KI-Kollegen der großen KI-Labs",
      points: [
        "Claude Cowork (Anthropic): Arbeit ohne Programmieren in den Apps von Claude, etwa Recherche, Dokumente, Tabellen, Präsentationen und Dateiarbeit. Aufgaben laufen in der Cloud und gehen auch bei zugeklapptem Laptop weiter; mit `/schedule` planst du sie stündlich, täglich oder wöchentlich. Im Modus Manual wird vor dem Handeln gefragt, im Modus Auto läuft für jede Aktion eine Sicherheitsprüfung. Nur in bezahlten Plänen, ab Pro für $20 im Monat.",
        "Copilot Cowork (Microsoft): mehrstufige Aufgaben in Microsoft 365, also E-Mails senden, Meetings planen, Dateien in Word, Excel und PowerPoint bearbeiten und in Teams posten. Vor heiklen Aktionen erscheint ein Freigabedialog, geplante und ereignisgesteuerte Aufgaben laufen von selbst, und je nach Tenant-Einstellungen wählst du Modelle von GPT, Claude oder Grok. Nötig sind eine Lizenz für Microsoft 365 Copilot und die Nutzung in Copilot Credits.",
        "ChatGPT Work (OpenAI): ein Work-Modus in ChatGPT für Aufgaben, an deren Ende etwas zum Prüfen steht, etwa Präsentationen, Tabellen und Analysen. Er teilt Kernfunktionen und Nutzungskontingent mit Codex. Free und Go bekommen eingeschränkten Zugang in der Desktop-App; ab Plus ($20 im Monat) gibt es ihn auf dem Desktop, im Web und mobil, mit geplanten Aufgaben und Ereignis-Triggern.",
        "Gemini-Aufgaben (Google, früher Spark): ein Cloud-Agent in der Gemini-App, der Gmail, Docs und andere Google-Apps nutzt, nach Zeitplan oder bei Ereignissen läuft und immer fragt, bevor er sendet, löscht, kauft oder Formulare abschickt. Googles Hilfeseite nennt Google AI Pro oder Ultra.",
        "Meta Muse: ein persönlicher Agent auf Metas Modell Muse Spark, mit einem eigenen Cloud-Computer pro Nutzer. Er arbeitet nach Zeitplan und reagiert auf Ereignisse, und ohne deine Freigabe wird nichts veröffentlicht, gesendet oder ausgegeben. Meta nennt ihn kostenlos für das meiste, was Menschen brauchen, mit Abos für mehr.",
        "Grok Bot (xAI): Bots mit eigenem Cloud-Computer, die sich bei deinen Tools anmelden, in Slack, Microsoft Teams und Videocalls arbeiten, Routinen ausführen und sich gegenseitig Arbeit übergeben. Enthalten in xAIs Plänen Premium ($30 im Monat), Super und Ultra. Siehe [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "Open-Source-KI-Kollegen auf GitHub",
      text: [
        "Wenn du deinen KI-Kollegen lieber selbst betreibst, mit eigenen Modell-Keys oder einem lokalen Modell, sind diese Projekte Open Source:",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, etwa 19.000 Sterne): Andrew Ngs „KI-Kollege für deine tägliche Arbeit“ („AI coworker for your everyday work“), eine Desktop-App für macOS und Windows in offener Beta. Sie läuft auf deinem Rechner mit Modellen von OpenAI, Anthropic, Gemini oder lokalen Modellen, holt vor Aktionen Freigaben ein und kann Briefings und Berichte nach Zeitplan erstellen.",
        "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, etwa 11.600 Sterne): CopilotKits selbst hostbarer Workspace für KI-Kollegen, jeder mit eigenem Browser, eigenen Dateien und Tools. Er nutzt CopilotKit Intelligence, das separat lizenziert wird. Siehe [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, etwa 7.000 Sterne): „ein Workspace für KI-Kollegen“ („a workspace for AI coworkers“), der benannte Agenten mit Routinen und Freigaben auf Engines laufen lässt, die du schon nutzt, etwa Claude Code, Codex oder Gemini CLI.",
        "[ai-employees](https://github.com/markfulton/ai-employees) (MIT): acht Geschäftsrollen als Ordner mit geplanten Routinen, die auf dem Agenten laufen, den du schon nutzt.",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Ein KI-Kollege für Code: Cursor Projects",
      text: ["Die meisten KI-Kollegen oben kümmern sich um Dokumente, E-Mail und Recherche. Für Softwarearbeit hat Cursor Projects eingeführt:"],
      points: [
        "Ein Koordinator-Agent plant ein größeres Stück Arbeit, etwa ein Feature, eine Migration oder eine komplette App, verteilt es an Agenten, die parallel auf Cursors Cloud Agents laufen, und bringt dir die fertige Arbeit zum Prüfen zurück.",
        "Jedes Project läuft auf einem eigenen Cloud-Computer, also hält es nicht an, wenn du den Laptop zuklappst, und führt gemeinsame Notizen, Vorlieben und ein Aufgaben-Board, das jeder Agent liest.",
        "Es kann einen Slack-Channel beobachten, nach Zeitplan laufen oder deinen Pull Requests folgen. In Multiplayer Projects hat jedes Teammitglied einen Koordinator, und die Koordinatoren schreiben sich gegenseitig Nachrichten.",
        "Es ist in Cursor-Plänen mit Cloud Agents enthalten, ab Premium für $30 im Monat, nicht in Free oder Plus. Siehe den [Guide zu Cursor Projects](/personal-agent/cursor-projects) und [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot).",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "Gibt es einen kostenlosen KI-Kollegen?",
      points: [
        "Meta Muse: laut Meta kostenlos für das meiste, was Menschen brauchen.",
        "ChatGPT Work: eingeschränkter Zugang bei ChatGPT Free, in der Desktop-App.",
        "Open Source: OpenWorker, OpenBot (persönliche Projekte) und Suparagent kosten im Betrieb nichts; du bezahlst deinen Modellanbieter oder nutzt ein lokales Modell.",
        "Lindy: eine kostenlose Testphase mit $50 Guthaben für 7 Tage.",
        "Crewmark: kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter, mit dem Abo für Claude Code oder Codex, das du schon hast.",
        "Claude Cowork, Gemini-Aufgaben, Copilot Cowork und Grok Bot brauchen einen bezahlten Plan oder eine Lizenz.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du einen KI-Kollegen aus",
      steps: [
        { title: "Beginne dort, wo deine Arbeit liegt", text: "Microsoft 365 im Job spricht für Copilot Cowork, Gmail und Google Docs für Gemini; wenn du schon für Claude oder ChatGPT zahlst, ist Cowork bzw. Work im Plan enthalten." },
        { title: "Entscheide, wo er laufen soll", text: "KI-Kollegen in der Cloud arbeiten weiter, wenn dein Laptop zugeklappt ist. Open-Source-Varianten behalten deine Daten, Keys und Dateien auf deinem Rechner." },
        { title: "Prüfe, wie er fragt", text: "Achte auf Freigaben vor dem Senden, Posten und Bezahlen und auf ein Protokoll dessen, was er getan hat." },
        { title: "Teste zwei Wochen lang eine wiederkehrende Aufgabe", text: "Ein Wochenbericht oder ein täglicher Durchgang durchs Postfach zeigt schnell, ob er Zeit spart." },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "KI-Kollege vs KI-Mitarbeiter",
      text: [
        "Die Begriffe überschneiden sich. In der Praxis ist ein KI-Kollege etwas, dem du Aufgaben gibst, wenn sie anfallen, während ein KI-Mitarbeiter eine feste Rolle hat: eine Stellenbeschreibung, Ziele, Arbeitszeiten und eine Warteschlange mit Arbeit, die er von selbst übernimmt. Plattformen, die auf dieser zweiten Idee aufbauen, vergleichen wir unter [Die besten KI-Mitarbeiter-Plattformen](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib deinem Coding-Agenten einen festen Job",
      text: [
        "Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat. Jeder nimmt das nächste Issue von einem gemeinsamen Board und fragt dich im Issue, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa einen [KI-SEO-Spezialisten](/ai-employees/seo-specialist)." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung für jeden Agenten findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "Einen KI-Kollegen auswählen" },
  mid: {
    title: "Du willst einen KI-Kollegen mit festem Job?",
    text: "Crewmark gibt deinem Agenten in Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein KI-Kollege?",
        a: "Ein Agent, dem du eine ganze Aufgabe übergibst. Er arbeitet in deinen Dateien, Apps und deinem Browser, macht im Hintergrund weiter, kann Aufgaben nach Zeitplan wiederholen und fragt, bevor er etwas sendet, veröffentlicht, kauft oder löscht.",
      },
      {
        q: "Was ist der KI-Kollege von Andrew Ng?",
        a: "OpenWorker: eine Open-Source-Desktop-App für macOS und Windows unter MIT-Lizenz, zu finden unter github.com/andrewyng/openworker. Die README nennt sie „einen KI-Kollegen für deine tägliche Arbeit“ („an AI coworker for your everyday work“). Sie läuft auf deinem Rechner mit deinem eigenen Modell-Key oder einem lokalen Modell.",
      },
      {
        q: "Ist Claude Cowork kostenlos?",
        a: "Nein. Claude Cowork gibt es nur in bezahlten Plänen von Claude, ab Pro für $20 im Monat (oder $17 im Monat bei jährlicher Abrechnung). Claude Free enthält es nicht.",
      },
      {
        q: "Was kostet Copilot Cowork?",
        a: "Es braucht eine Lizenz für Microsoft 365 Copilot, und die Nutzung wird in Copilot Credits abgerechnet: $0.01 pro Credit bei nutzungsbasierter Zahlung oder ein vorausbezahlter Jahresplan mit Rabatten von 5 % bis 20 %.",
      },
      {
        q: "Claude Cowork vs Claude Code: Was ist der Unterschied?",
        a: "Claude Cowork ist für Arbeit ohne Programmieren in den Apps von Claude gedacht: Recherche, Dokumente, Tabellen, Präsentationen und Dateien. Claude Code ist Anthropics Coding-Agent für dein Repository. Laut Anthropic nutzt Cowork dieselbe Architektur wie Claude Code.",
      },
      {
        q: "Gibt es Open-Source-KI-Kollegen auf GitHub?",
        a: "Ja: OpenWorker (Andrew Ng, MIT), OpenBot (CopilotKit, MIT), Suparagent (Apache-2.0) und ai-employees (MIT), neben anderen.",
      },
    ],
  },
  cta: {
    title: "Gib deiner KI einen Job, nicht nur eine Aufgabe.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit der Website, Preisseite, Dokumentation oder GitHub-Seite jedes Anbieters abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das mit keinem der auf dieser Seite genannten Unternehmen verbunden ist und von keinem unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
