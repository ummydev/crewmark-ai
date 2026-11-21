import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/hermes-agent; the English master is src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes-Agent-Preise: kostenloser Agent und Nous-Portal-Pläne",
    description:
      "Hermes Agent ist kostenlos und MIT-lizenziert. Das optionale Nous Portal kostet $0, $20, $100 oder $200/Monat. Was jede Stufe enthält und was obendrauf kommt.",
  },
  breadcrumb: "Hermes-Agent-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Nous Research",
    title: "Hermes-Agent-Preise: ein kostenloser Agent und ein optionales Abo für Nous Portal",
    lead: "Hermes Agent ist kostenlos: Nous Research veröffentlicht ihn unter der MIT-Lizenz, und du bezahlst deinen Modellanbieter. Wenn du Modelle lieber von Nous beziehst, hat das optionale Nous Portal vier Stufen: Free für $0, Plus für $20 im Monat, Super für $100 und Ultra für $200, und die bezahlten enthalten einen in der Cloud gehosteten Agenten. Hier steht, was jede Stufe enthält, was du zusätzlich zahlst und wie es im Vergleich zu OpenClaw, OpenCode, OpenWorker und Grok Bot abschneidet.",
    cta: "Loslegen",
    secondary: "Zu den Plänen",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne von Hermes Agent und Nous Portal",
      text: [
        "Laut hermes-agent.nousresearch.com und portal.nousresearch.com, geprüft am 13. November 2026. Preise pro Monat; ein Jahrespreis ist nicht angegeben. Für den Agenten brauchst du keinen Plan von Nous Portal.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "Hermes Agent",
          "Kostenlos, MIT-Lizenz",
          "Der Agent: Terminal-UI, Desktop-App, Chat-Apps über ein Gateway, Skills, Gedächtnis, ein Cron-Scheduler und Bot Mode. Jeder Modellanbieter möglich",
        ],
        ["Nous Portal Free", "$0", "Nutzungsbasiert; nur kostenlose Modelle"],
        [
          "Nous Portal Plus",
          "$20/Monat",
          "Kostenlose und bezahlte Modelle; ein in der Cloud gehosteter Agent (4 GB RAM, 25 GB Speicherplatz)",
        ],
        [
          "Nous Portal Super",
          "$100/Monat",
          "5× so viel Nutzung wie Plus; kostenlose und bezahlte Modelle; ein in der Cloud gehosteter Agent (4 GB RAM, 100 GB Speicherplatz)",
        ],
        [
          "Nous Portal Ultra",
          "$200/Monat",
          "10× so viel Nutzung wie Plus; kostenlose und bezahlte Modelle; ein in der Cloud gehosteter Agent (8 GB RAM, 100 GB Speicherplatz)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für den Betrieb von Hermes Agent wirklich zahlst",
      points: [
        "Deinen Modellanbieter. Mit `hermes model` wechselst du den Anbieter: Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, eigene Endpoints und mehr. Mit einem API-Key rechnet dieser Anbieter ab.",
        "Ein Claude-Abo funktioniert nur mit Claude Max und zugekaufter Zusatznutzung. Laut Doku gilt: „Claude-Pro-Abonnenten können diesen Weg nicht nutzen“ („Claude Pro subscribers cannot use this path“), mit Pro brauchst du also einen API-Key.",
        "Die Anmeldung mit ChatGPT/Codex läuft per Gerätecode. Welche ChatGPT-Pläne funktionieren und wie die Nutzung auf die Planlimits angerechnet wird, ist „derzeit nicht dokumentiert“ („not currently documented“).",
        "Einen Ort, an dem er läuft. Hermes Agent wird lokal oder auf einem Server installiert: Das README nennt „einen VPS für $5, einen GPU-Cluster oder Serverless-Infrastruktur“ („a $5 VPS, a GPU cluster, or serverless infrastructure“). Seine sechs Terminal-Backends sind lokal, Docker, SSH, Modal, Daytona und Vercel Sandbox.",
        "Oder eine bezahlte Stufe von Nous Portal, die einen in der Cloud gehosteten Agenten enthält (Größen in der Tabelle oben).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes-Agent-Preise im Vergleich mit ähnlichen Agenten",
      text: [
        "Preise von der eigenen Website des jeweiligen Produkts, geprüft am 13. November 2026.",
        "Im direkten Vergleich: [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). Weitere Optionen unter [Hermes-Agent-Alternativen](/alternatives/hermes-agent).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        [
          "Hermes Agent",
          "Kostenlos; optional Nous Portal Plus $20/Monat",
          "Ja: der Agent (MIT) und Nous Portal Free für $0",
        ],
        ["[OpenClaw](/pricing/openclaw)", "Kostenlos; du bezahlst deinen Modellanbieter", "Ja: das ganze Projekt (MIT)"],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent kostenlos; OpenCode Go $10/Monat, Go Plus $40/Monat",
          "Ja: kostenlose Modelle mit täglichem Anfragelimit, kein Konto nötig",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Kein Preis angegeben; dein eigener Modell-Key oder ein lokales Modell",
          "Ja: die App (MIT)",
        ],
        [
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium $30/Monat; Super $100, Ultra $200",
          "Keine angegeben",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Hermes Agent ist dein persönlicher Agent. Crewmark betreibt ein Team aus Coding-Agenten.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agenten laufen über das Claude- oder ChatGPT-Abo, für das du schon zahlst, ohne separate Token-Rechnung.",
        "Die Preise von Crewmark: Free für $0 (1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person). Pro für $5/Monat und Team für $10/Monat kommen bald. Die Abrechnung ist noch nicht gebaut, deshalb kann jedes Konto Crewmark bis dahin kostenlos nutzen. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), mit Zielen in Zahlen." },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu und lass regelmäßige wiederkehren; der Heartbeat weckt den Mitarbeiter, damit er das nächste übernimmt.",
        },
        {
          title: "Sieh dir die Pläne an",
          text: "[Crewmark-Preise](/pricing) und was Agenten damit machen unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst Agenten, die an einem Job weiterarbeiten?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den Hermes-Agent-Preisen",
    items: [
      {
        q: "Ist Hermes Agent kostenlos?",
        a: "Ja. Der Agent ist Open Source unter der MIT-Lizenz. Du bezahlst deinen Modellanbieter oder schließt optional ein Abo für Nous Portal ab.",
      },
      {
        q: "Wie viel kostet Hermes Agent pro Monat?",
        a: "Der Agent kostet $0. Das optionale Nous Portal gibt es als Free für $0, Plus für $20 im Monat, Super für $100 (5× so viel Nutzung wie Plus) und Ultra für $200 (10× so viel Nutzung wie Plus). Ein Jahrespreis ist nicht angegeben.",
      },
      {
        q: "Brauche ich ein Abo für Nous Portal, um Hermes Agent zu nutzen?",
        a: "Nein. Nous Portal ist einer von vielen Anbietern, die du mit `hermes model` auswählen kannst, neben OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, lokalen Modellen und eigenen Endpoints.",
      },
      {
        q: "Kann ich mein Claude-Abo mit Hermes Agent nutzen?",
        a: "Nur mit Claude Max und zugekaufter Zusatznutzung. Laut Doku können Claude-Pro-Abonnenten den Weg über das Abo nicht nutzen, mit Pro brauchst du also einen API-Key.",
      },
      {
        q: "Ist bei einem Preisplan von Hermes Agent Hosting dabei?",
        a: "Die bezahlten Stufen von Nous Portal enthalten einen in der Cloud gehosteten Agenten: 4 GB RAM und 25 GB Speicherplatz bei Plus, 4 GB und 100 GB bei Super, 8 GB und 100 GB bei Ultra. Ansonsten betreibst du ihn auf deinem eigenen Rechner oder Server.",
      },
      {
        q: "Kann ich mein ChatGPT-Abo mit Hermes Agent nutzen?",
        a: "Die Anmeldung mit ChatGPT/Codex läuft per Gerätecode, aber laut Doku ist derzeit nicht dokumentiert, welche ChatGPT-Pläne funktionieren und wie die Nutzung auf die Planlimits angerechnet wird.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten eine Rolle und einen Zeitplan.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit hermes-agent.nousresearch.com, portal.nousresearch.com, der Doku und dem GitHub-README von Hermes Agent sowie der eigenen Preisseite jedes verglichenen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Nous Research noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
