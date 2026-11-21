import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes-Agent-Alternativen 2026: Open Source und gehostet",
    description:
      "Hermes-Agent-Alternativen im Vergleich: OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot und Crewmark, mit Lizenz, Preis und Windows-Support.",
  },
  breadcrumb: "Hermes-Agent-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Nous Research Hermes Agent",
    title: "Hermes-Agent-Alternativen: Open-Source-Agenten, Coding-Agenten und gehostete Bots",
    lead: "Hermes Agent ist der persönliche Open-Source-KI-Agent (MIT) von Nous Research. Du nutzt ihn im Terminal, in einer Desktop-App oder in Chat-Apps; er schreibt Skills aus Erfahrung, führt sein eigenes Gedächtnis und lässt Routinen über einen eingebauten Cron-Scheduler laufen. Du betreibst ihn selbst, auf deinem Rechner oder einem Server, es sei denn, ein bezahlter Plan von Nous Portal hostet einen Agenten für dich. Um ein Claude-Abo damit zu nutzen, brauchst du Claude Max plus zugekaufte Extra-Nutzung; Abonnenten von Claude Pro brauchen einen API-Key. Hier sind sieben Alternativen, mit Lizenz, Preis und den Plattformen, auf denen sie jeweils laufen, Windows eingeschlossen.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes-Agent-Alternativen auf einen Blick",
      text: [
        "Angaben aus README, Dokumentation und Preisseite des jeweiligen Produkts, geprüft am 13. November 2026. Preise in US-Dollar. Hermes Agent selbst ist kostenlos, plus dein Modellanbieter; die Pläne von Nous Portal kosten Plus $20, Super $100 und Ultra $200 im Monat. Details unter [Hermes-Agent-Preise](/pricing/hermes-agent).",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "Ein persönlicher KI-Assistent, der auf deinem eigenen Computer läuft und dir in Chat-Apps antwortet",
          "Ja (MIT)",
          "Kostenlos; kein Bezahlplan und kein gehosteter Dienst; du bezahlst deinen Modellanbieter",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Ein Coding-Agent für Modelle von 200+ Anbietern, auch lokale Modelle, als Terminal-UI, Desktop-App, Web-App und SDK",
          "Ja (MIT)",
          "Kostenlos, mit kostenlosen Modellen (tägliches Anfragelimit); OpenCode Go $10 im Monat",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Eine Desktop-App, „ein KI-Kollege für deine tägliche Arbeit“ („An AI coworker for your everyday work“), plus ein Harness SDK, um agentische Apps zu bauen",
          "Ja (MIT)",
          "Kein Preis angegeben; eigener Modell-Key oder lokales Modell",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "Der selbst hostbare Workspace von CopilotKit für KI-Kollegen, in dem jeder Bot einen eigenen Browser, eigene Dateien und eigene Tools bekommt",
          "Ja (App-Vorlage unter MIT; nutzt das separat lizenzierte CopilotKit Intelligence)",
          "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "Der Coding-Agent von Anthropic, im Terminal, in IDE-Erweiterungen, einer Desktop-App, im Web und mobil",
          "Nein",
          "Bezahlte Claude-Pläne, ab Pro für $20 im Monat ($17 im Monat bei jährlicher Abrechnung)",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "Die gehosteten KI-Teamkollegen von xAI: Bots, die jeweils einen eigenen Computer in der Cloud bekommen",
          "Nein",
          "Premium $30 im Monat, monatlich abgerechnet",
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
      kind: "table",
      id: "windows",
      title: "Hermes-Agent-Alternativen für Windows",
      text: [
        "Hermes Agent selbst läuft nativ unter Windows (PowerShell) und unter WSL2, und seine Desktop-App gibt es für Windows 10 und 11. Das geben die Alternativen jeweils an.",
      ],
      headers: ["Produkt", "Windows", "Andere Plattformen"],
      rows: [
        [
          "Hermes Agent",
          "Nativ unter Windows (PowerShell) und WSL2; Desktop-App für Windows 10/11 (Microsoft Store oder .exe)",
          "Linux, macOS, Android über Termux; Desktop-App für macOS 12+ und Linux",
        ],
        ["OpenClaw", "Installer für Windows (PowerShell) und WSL2; native Windows-App", "macOS und Linux; Apps für macOS, iOS, Android und Linux"],
        [
          "OpenCode",
          "CLI-Binaries für Windows (x64, ARM64); Desktop-App, als Beta gekennzeichnet. Windows-Paketmanager werden nicht unterstützt",
          "CLI und Desktop-App für macOS und Linux; iPhone-App über TestFlight",
        ],
        ["OpenWorker", "Windows 10/11 x64; Builds sind noch nicht code-signiert, deshalb warnt SmartScreen", "macOS 12+ (Apple Silicon); kein Linux-Download angegeben"],
        ["OpenBot", "Desktop-App für Windows, mit Docker-Backend", "Desktop-App für macOS; Kubernetes für Teams"],
        [
          "Claude Code",
          "CLI unter Windows 10 1809+ oder Windows Server 2019+; Desktop-App für Windows (x64 und ARM64)",
          "macOS, Linux, Web, iOS und Android",
        ],
        [
          "Grok Bot",
          "Die Guides auf x.ai nennen Mac, Windows, Linux und Smartphones; jeder Bot arbeitet auf seinem eigenen Cloud-Computer",
          "Download für macOS (Apple Silicon) auf x.ai/bot; iOS",
        ],
        ["Crewmark", "`crewmark` CLI unter Windows", "CLI unter macOS und Linux; Web-App"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Weitere persönliche Open-Source-Agenten",
      text: ["Wie Hermes Agent laufen diese auf Hardware, die du kontrollierst, mit Modellen deiner Wahl."],
      points: [
        "OpenClaw: ein MIT-lizenzierter Assistent, der als Gateway auf deinem eigenen Computer läuft und in WhatsApp, Telegram, Slack, Discord, iMessage und anderen Chat-Apps antwortet. Er betreibt mehrere Agenten auf einem Gateway, hat einen eingebauten Automations-Scheduler und weder einen Bezahlplan noch einen gehosteten Dienst. Claude nutzt er per API-Key oder über einen vorhandenen Claude-Code-Login auf demselben Rechner. Wähle OpenClaw, wenn du einem Assistenten aus deinen bestehenden Chat-Apps schreiben willst, mit Modellanbietern, die du austauschen kannst. Verglichen in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw); mehr unter [OpenClaw-Alternativen](/blog/openclaw-alternatives).",
        "OpenWorker: eine MIT-lizenzierte Desktop-App unter Andrew Ngs GitHub-Konto, in offener Beta für macOS und Windows. Aktionen brauchen standardmäßig eine Freigabe, jeder Tool-Aufruf wird protokolliert, und du kannst Morgen-Briefings und Wochenberichte planen; außerdem kannst du OpenWorker in Slack erwähnen, und es antwortet im Thread. Wähle OpenWorker, wenn du einen Agenten auf deinem eigenen Rechner willst, mit eigenem Modell-Key oder lokalem Modell, und selbst festlegen willst, welche Aktionen eine Freigabe brauchen. Guide: [OpenWorker](/personal-agent/openworker).",
        "OpenBot: der selbst hostbare Workspace von CopilotKit für KI-Kollegen. Jeder Bot hat einen eigenen Computer (Browser, Dateien, Tools), Routinen, ein Gedächtnis, Freigaben und ein Aktivitätsprotokoll. Die App-Vorlage steht unter MIT; sie nutzt CopilotKit Intelligence, das separat lizenziert wird (kostenlos auf einem Laptop, eine Lizenz für den Produktivbetrieb auf Kubernetes). Wähle OpenBot, wenn du KI-Kollegen willst, die du selbst hosten und anpassen kannst, mit eigenen Modellen oder Agenten, die auf anderen Stacks gebaut sind. Guide: [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Coding-Agenten",
      text: [
        "Wenn du Hermes Agent vor allem Code übergibst, sind diese dafür gebaut. Im Vergleich: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode: ein MIT-lizenzierter Coding-Agent, der mit Modellen von 200+ Anbietern arbeitet, auch mit lokalen Modellen. Kostenlose Modelle brauchen kein Konto (mit täglichem Anfragelimit), OpenCode Go kostet $10 im Monat, und du kannst dich auch mit ChatGPT Plus oder Pro oder GitHub Copilot anmelden oder eigene API-Keys mitbringen. Wähle OpenCode, wenn du eigene Agenten und Subagents als Dateien in deinem Repository definieren willst, mit Berechtigungsregeln pro Aktion. Mehr unter [OpenCode-Alternativen](/blog/opencode-alternatives).",
        "Claude Code: der Coding-Agent von Anthropic, mit Subagents, experimentellen Agent Teams und geplanten Aufgaben, die in der Cloud laufen. Er ist nicht Open Source und in bezahlten Claude-Plänen enthalten, ab Pro für $20 im Monat. Wähle Claude Code, wenn du schon für einen Claude-Plan zahlst: Hermes Agent kann ein Claude-Abo nur mit Max und zugekaufter Extra-Nutzung verwenden. Siehe [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Eine gehostete Option",
      points: [
        "Grok Bot: die gehosteten KI-Teamkollegen von xAI. Jeder Bot hat einen eigenen Computer in der Cloud und arbeitet weiter, wenn dein Laptop zugeklappt ist; Bots melden sich bei deinen Tools an, arbeiten in Slack, Microsoft Teams und Videocalls, führen Routinen nach Zeitplan aus und schreiben sich gegenseitig Nachrichten. Grok Bot ist nicht Open Source; die Pläne beginnen bei Premium, $30 im Monat. Wähle Grok Bot, wenn dein Team Bots will, die in seinen bestehenden Apps arbeiten, ohne einen Server zu betreiben. Siehe [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) und [Grok-Bot-Alternativen](/alternatives/grok-bot).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Hermes-Agent-Alternative aus",
      steps: [
        {
          title: "Du willst bei Open Source bleiben?",
          text: "OpenClaw, OpenCode und OpenWorker stehen unter MIT; die App-Vorlage von OpenBot steht unter MIT, mit einer separat lizenzierten Engine; Crewmark steht unter GPL-3.0. Claude Code und Grok Bot sind nicht Open Source.",
        },
        {
          title: "Du arbeitest unter Windows?",
          text: "Hermes Agent läuft bereits nativ unter Windows. Von den Alternativen nennen OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code und die Crewmark-CLI alle Windows; die Versionen stehen in der Tabelle oben.",
        },
        {
          title: "Du zahlst schon für Claude?",
          text: "Hermes Agent nutzt ein Claude-Abo nur mit Max und zugekaufter Extra-Nutzung. OpenClaw kann einen Claude-Code-Login auf demselben Rechner wiederverwenden, Claude Code ist in bezahlten Claude-Plänen enthalten, und Crewmark führt Claude Code mit deinem eigenen Abo aus.",
        },
        {
          title: "Du willst keinen Server betreiben?",
          text: "Grok Bot wird von xAI gehostet. Die bezahlten Nous-Portal-Pläne von Hermes Agent enthalten einen in der Cloud gehosteten Agenten, und CopilotKit hostet OpenBot im Early Access.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein persönlicher Agent für dich. Ein Team aus KI-Mitarbeitern für dein Repository.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Projekten. Er wacht während seiner Arbeitszeit per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board, und wenn er ein Review oder eine Erlaubnis braucht, setzt er das Issue auf „Handlungsbedarf“ und fragt dort. Die Agenten arbeiten über Issues zusammen: Sie weisen sie einander zu, kommentieren und @erwähnen sich gegenseitig.",
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
    title: "Lass dein Claude Code oder Codex nach Zeitplan arbeiten",
    text: "Crewmark weckt deinen Agenten während der Arbeitszeit per Heartbeat und gibt ihm das nächste Issue von einem gemeinsamen Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Hermes-Agent-Alternativen",
    items: [
      {
        q: "Was ist eine Open-Source-Alternative zu Hermes Agent?",
        a: "OpenClaw, OpenCode und OpenWorker sind MIT-lizenziert. Die App-Vorlage von OpenBot steht unter MIT und nutzt CopilotKit Intelligence, das separat lizenziert wird. Crewmark ist Open Source unter GPL-3.0.",
      },
      {
        q: "Gibt es eine Hermes-Agent-Alternative für Windows?",
        a: "Mehrere. OpenClaw hat einen Windows-Installer und eine native Windows-App; OpenCode hat CLI-Binaries für Windows und eine Desktop-App in der Beta; OpenWorker läuft unter Windows 10/11 x64 (noch nicht code-signiert); OpenBot hat eine Desktop-App für Windows; Claude Code läuft unter Windows 10 1809 oder neuer. Hermes Agent selbst läuft ebenfalls nativ unter Windows.",
      },
      {
        q: "Hermes Agent vs OpenClaw: Was soll ich nutzen?",
        a: "Beide sind MIT-lizenzierte persönliche Agenten, die du selbst betreibst und über Chat-Apps erreichst. Hermes Agent konzentriert sich darauf, eigene Skills und sein Gedächtnis zu schreiben und zu verfeinern, und hat optionale bezahlte Nous-Portal-Pläne, die einen in der Cloud gehosteten Agenten enthalten. OpenClaw läuft als lokales Gateway und hat weder einen Bezahlplan noch einen gehosteten Dienst. Siehe [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      },
      {
        q: "Ist Hermes Agent kostenlos?",
        a: "Der Agent ist kostenlos unter MIT, und du bezahlst deinen Modellanbieter. Nous Portal ist optional: Free für $0 (nutzungsbasiert, nur kostenlose Modelle), Plus $20 im Monat, Super $100 und Ultra $200. Mehr unter [Hermes-Agent-Preise](/pricing/hermes-agent).",
      },
      {
        q: "Kann ich mein Claude-Abo mit Hermes Agent oder einer Alternative nutzen?",
        a: "Mit Hermes Agent nur bei Claude Max mit zugekaufter Extra-Nutzung; Abonnenten von Claude Pro brauchen einen API-Key. OpenClaw kann einen Claude-Code-Login auf demselben Rechner wiederverwenden. Claude Code ist in jedem bezahlten Claude-Plan enthalten, und Crewmark führt Claude Code mit deinem eigenen Abo aus.",
      },
      {
        q: "Gibt es eine gehostete Hermes-Agent-Alternative?",
        a: "Grok Bot wird von xAI gehostet, mit einem Cloud-Computer für jeden Bot, ab $30 im Monat. Die eigenen bezahlten Nous-Portal-Pläne von Hermes Agent enthalten einen in der Cloud gehosteten Agenten, und CopilotKit hostet OpenBot im Early Access.",
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
    "Crewmark ist ein unabhängiges Produkt, das weder mit Nous Research noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
