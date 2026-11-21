import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Persönliche KI-Agenten 2026: Muse, Grok Bot, Dots im Vergleich",
    description:
      "Was ein persönlicher KI-Agent ist und welche gerade gesucht werden, verglichen anhand der Seiten der Hersteller: Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, Gemini-Aufgaben, Microsoft Autopilot, OpenClaw und Hermes Agent.",
  },
  breadcrumb: "Persönliche Agents",
  hero: {
    kicker: "Persönliche Agents",
    title: "Persönliche KI-Agenten 2026: was sie sind und welchen du nutzen solltest",
    lead: "Ein persönlicher Agent ist eine KI, die für dich arbeitet, nicht nur mit dir: Er hat einen eigenen Computer oder Browser, meldet sich bei deinen Apps an, merkt sich deine Vorlieben, arbeitet weiter, nachdem du die App geschlossen hast, und meldet sich, wenn er eine Entscheidung braucht. In den letzten Monaten haben Meta, xAI, OpenAI, Anthropic, Google, Microsoft und Manus alle einen herausgebracht. Diese Seite erklärt, was sie gemeinsam haben, vergleicht sie anhand der Seiten der Hersteller und verlinkt auf unsere Guides zu jedem einzelnen.",
    cta: "Loslegen",
    secondary: "Vergleich ansehen",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Was ein persönlicher Agent ist",
      text: [
        "Ein Chatbot antwortet und wartet. Ein persönlicher Agent übernimmt ein Ziel, plant die Schritte und erledigt sie im Web und in deinen Apps, oft während du nicht da bist. Die neuen Agenten haben fünf Merkmale gemeinsam.",
      ],
      points: [
        "Ein eigener Computer: eine Cloud-Maschine oder ein Browser, in dem er klickt, tippt und Formulare ausfüllt wie ein Mensch.",
        "Deine Apps: E-Mail, Kalender, Dateien und Chat, mit dem Zugriff, den du festlegst.",
        "Gedächtnis: Er lernt deine Vorlieben und braucht dieselbe Anweisung nicht zweimal.",
        "Immer an: geplante und wiederkehrende Aufgaben, und Arbeit, die weiterläuft, nachdem du die App geschlossen hast.",
        "Freigaben: Er wartet auf dein OK, bevor er etwas sendet, kauft oder etwas anderes tut, das du als heikel markierst.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Persönliche KI-Agenten im Vergleich",
      text: ["Laut den Seiten der Hersteller am 10. November 2026. Die Verfügbarkeit ändert sich schnell; prüf sie, bevor du dich anmeldest."],
      headers: ["Agent", "Hersteller", "Gemacht für", "Wer ihn bekommt", "Günstigster Einstieg"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "Alltagsaufgaben und Lebensorganisation", "USA, ab 18, Meta-Konto", "Kostenlos mit Wochenlimit; Power $20/Monat"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "Arbeit: ein Team von Bots in deinen Apps", "X Premium, Super, Ultra; SuperGrok; Cursor-Pläne", "Kostenloses Testguthaben"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "Langfristige Ziele innerhalb von ChatGPT", "ChatGPT Pro und Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "Ein proaktiver Claude, der auf dich zukommt", "Claude Pro, Max, Ultra in den USA, über Warteliste", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "Ein persönlicher Agent in WhatsApp, Telegram, Slack oder im Browser, mit Workflows", "Alle mit einem Base44-Konto", "Credits aus dem Base44-Plan; Starter $16/Monat bei jährlicher Abrechnung"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "Agenten mit eigener E-Mail, eigenem Telefon, eigener Wallet und eigenem Computer", "Early Access per Einladung", "Kostenlos während des Early Access"],
        ["[Gemini-Aufgaben (Spark)](/personal-agent/gemini-spark)", "Google", "Besorgungen, Recherche und Dateien aus Gemini heraus", "Google AI Pro oder Ultra, außerhalb von EWR, Großbritannien und der Schweiz", "Google AI Pro"],
        ["Microsoft Autopilot (Scout)", "Microsoft", "Arbeit in Microsoft 365 und Teams", "Frontier-Organisationen, mit GitHub-Copilot-Lizenz", "Über deine Organisation"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "Open Source", "Ein selbst gehosteter Assistent in deinen Chat-Apps", "Alle; läuft auf deinem Computer", "Kostenlos; du bezahlst das Modell"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, Open Source", "Ein selbst gehosteter Agent, der Skills lernt", "Alle; läuft auf deinem Computer", "Kostenlos; du bezahlst das Modell"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "Welchen persönlichen Agenten solltest du nutzen?",
      points: [
        "Du willst Hilfe bei der Lebensorganisation und noch nichts bezahlen: Meta Muse, kostenlos in den USA. Siehe [Anwendungsfälle für Meta Muse](/personal-agent/meta-muse-use-cases).",
        "Du willst ein Team von Agenten für Arbeitsaufgaben, nach Zeitplan: Grok Bot, mit Routinen, die nach Zeitplan oder per Auslöser laufen. Siehe [Grok-Bot-Routinen](/personal-agent/grok-bot-routines).",
        "Du bezahlst schon ChatGPT Pro: ChatGPT dots. Ab Claude Pro: Claude Duet, über die Warteliste.",
        "Du lebst in Googles Apps: Gemini-Aufgaben mit Google AI Pro. Bei der Arbeit in Microsoft 365: Autopilot, wenn deine Organisation bei Frontier ist.",
        "Du willst einen Agenten, der telefonieren und innerhalb eines Budgets bezahlen kann: Manus Cue, im Early Access. Siehe [Manus Cue](/personal-agent/manus-cue).",
        "Du willst ihn auf deinem eigenen Rechner mit deinem eigenen Modell: OpenClaw oder Hermes Agent, beide Open Source.",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "KI-Kollegen für die Arbeit",
      text: [
        "Agenten, die für Arbeitsaufgaben statt für Besorgungen gebaut sind, mit einem Guide zu jedem. Laut den Seiten der Hersteller am 13. November 2026; mehr unter [KI-Kollegen-Tools im Vergleich](/blog/ai-coworker).",
      ],
      headers: ["KI-Kollege", "Hersteller", "Gemacht für", "Günstigster Einstieg"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Recherche, Dokumente, Tabellen und Folien in den Claude-Apps", "Claude Pro, $20/Monat"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Mehrstufige Aufgaben in Outlook, Teams und Office-Dateien", "Lizenz für Microsoft 365 Copilot plus Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "Aufgaben, an deren Ende eine Präsentation, eine Tabelle oder eine Analyse steht", "Eingeschränkt mit ChatGPT Free in der Desktop-App; voll ab Plus, $20/Monat"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "Ein Koordinator-Agent, der viele Coding-Agenten in der Cloud steuert", "Cursor Premium, $30/Monat"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "Ein Assistent in E-Mail, Slack, iMessage und am Telefon", "Kostenlose Testphase; danach $29.99/Monat pro aktivem Nutzer"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng, Open Source", "Ein KI-Kollege für den Desktop, der vor dem Handeln fragt", "Kostenlos; dein eigener Modell-Key oder ein lokales Modell"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit, Open Source", "Ein selbst gehosteter Workspace für KI-Kollegen", "Kostenlos für persönliche Projekte"],
        ["[Suparagent](/personal-agent/suparagent)", "Open Source", "Benannte Agenten mit Routinen auf Claude Code, Codex oder Gemini CLI", "Kostenlos zum Selbsthosten"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "Bevor du deine Konten übergibst",
      points: [
        "Verbinde nur, was eine Aufgabe braucht, und nimm Lesezugriff, wo er angeboten wird (bei Muse kannst du für E-Mail nur Lesezugriff wählen).",
        "Lass Freigaben für Senden, Kaufen und alles Öffentliche eingeschaltet. Muse und Gemini fragen standardmäßig vor dem Senden oder Kaufen; bei Grok Bot, wo Auto Review die meisten Aktionen durchlässt, ergänze Ask-first-Regeln.",
        "Wisse, wer ein Login sonst noch nutzen kann: Grok Bots teilen sich einen Computer, also steht eine Website, bei der sich ein Bot anmeldet, auch den anderen offen.",
        "Prüf die Nutzungslimits: Agenten, die im Hintergrund arbeiten, verbrauchen Tokens, während du weg bist.",
        "Lies ab und zu das Aktivitätsprotokoll; die Hersteller warnen, dass diese Agenten sich irren oder unerwartete Aktionen ausführen können.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Persönliche Agents fürs Leben, KI-Mitarbeiter für die Arbeit",
      text: [
        "Persönliche Agents sind auf die Besorgungen einer Person ausgelegt. Crewmark ist auf eine Aufgabe ausgelegt: Es macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der das nächste Issue von einem gemeinsamen Board nimmt, beim Arbeiten kommentiert und dir schreibt, wenn er feststeckt.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Fang mit einer [Rolle als KI-Mitarbeiter](/ai-employees) an: Softwareentwickler, SEO-Spezialist, Marketing-Agent, Social-Media-Manager oder Designer.",
        },
        {
          title: "Nutze den Plan, den du schon hast",
          text: "Er arbeitet in deinem eigenen Claude Code oder Codex, also gibt es keine separate Token-Rechnung. Siehe [Preise](/pricing).",
        },
        {
          title: "Lass ihn weiterarbeiten",
          text: "Er wacht in den Stunden, die du festlegst, alle 15 bis 240 Minuten auf. Siehe [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst einen Agenten mit einem Job, nicht nur mit Besorgungen?",
    text: "Crewmark-Mitarbeiter arbeiten per Heartbeat ein gemeinsames Board ab, mit dem Claude-Code- oder Codex-Plan, den du ohnehin bezahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein persönlicher KI-Agent?",
        a: "Eine KI, die Aufgaben für dich erledigt, statt nur zu antworten: Sie hat einen eigenen Computer oder Browser, nutzt deine Apps, merkt sich deine Vorlieben, erledigt geplante Arbeit und Arbeit im Hintergrund und fragt vor heiklen Aktionen nach.",
      },
      {
        q: "Was ist der beste persönliche KI-Agent 2026?",
        a: "Das hängt davon ab, wo du schon bist. Meta Muse ist am einfachsten auszuprobieren (kostenlos in den USA), Grok Bot hat die ausführlichsten Routinen für die Arbeit, ChatGPT dots und Claude Duet kommen mit Pro-Plänen, und OpenClaw oder Hermes Agent passen zu Leuten, die selbst hosten wollen.",
      },
      {
        q: "Gibt es einen kostenlosen persönlichen KI-Agenten?",
        a: "Meta Muse ist in den USA mit Wochenlimit kostenlos, Grok Bot hat ein kostenloses Testguthaben, Manus Cue ist während des Early Access kostenlos, und OpenClaw und Hermes Agent sind kostenlose Open-Source-Software (du bezahlst das Modell).",
      },
      {
        q: "Grok Bot vs. Muse vs. Dots: Was ist der Unterschied?",
        a: "Muse ist Metas Agent für Alltagsaufgaben, kostenlos zum Einstieg. Grok Bot ist xAIs Agent für die Arbeit, mit mehreren Bots und Routinen. ChatGPT dots sind OpenAIs ständig aktive Agenten in ChatGPT, mit Pro und Business Premium.",
      },
      {
        q: "Ist ein persönlicher Agent dasselbe wie ein KI-Mitarbeiter?",
        a: "Nicht ganz. Ein persönlicher Agent arbeitet für eine Person an ihren Besorgungen. Ein KI-Mitarbeiter im Sinne von Crewmark hat eine Rolle und ein Ziel, arbeitet nach Zeitplan das Board eines Teams ab und berichtet an die Menschen, mit denen er arbeitet.",
      },
      {
        q: "Sind persönliche KI-Agenten sicher?",
        a: "Sie sind mit Freigaben, isolierten Maschinen und Aktivitätsprotokollen gebaut, aber die Hersteller sagen, dass sie Fehler machen können. Verbinde nur, was du brauchst, lass Freigaben für Senden und Kaufen eingeschaltet und prüf, was sie getan haben.",
      },
    ],
  },
  cta: {
    title: "Besorgungen für deinen persönlichen Agenten. Ein Job für einen KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit den Ankündigungen, der Dokumentation, dem Hilfe-Center und den Preisseiten jedes Herstellers abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Meta, xAI, OpenAI, Anthropic, Manus, Google, Microsoft, OpenClaw oder Nous Research, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
