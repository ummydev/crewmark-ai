import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/opencode; the English master is src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode-Preise: kostenloser Agent, Go $10, Go Plus $40 (2026)",
    description:
      "OpenCode-Preise: MIT-Agent kostenlos, mit Gratis-Modellen. OpenCode Go $10/Monat, Go Plus $40, oder Abrechnung pro Million Tokens bzw. über eigene Keys.",
  },
  breadcrumb: "OpenCode-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · OpenCode",
    title: "OpenCode-Preise: ein kostenloser Agent und vier Wege, für Modelle zu zahlen",
    lead: "OpenCode ist ein kostenloser Open-Source-Coding-Agent (MIT). Er bringt kostenlose Modelle mit, die kein Konto brauchen, innerhalb eines täglichen Anfragelimits. Darüber hinaus zahlst du für Modelle, nicht für den Agenten: OpenCode Go für $10 im Monat oder Go Plus für $40 im Monat, nutzungsbasierte Modelle, die pro Million Tokens abgerechnet werden, oder einen Plan bzw. API-Key, den du schon hast, etwa ChatGPT Plus oder Pro oder GitHub Copilot. Enterprise läuft über den Vertrieb. Hier ist jede Option, was sie kostet und wie OpenCode im Vergleich zu Claude Code, Codex, Hermes Agent und OpenClaw abschneidet.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von OpenCode",
      text: [
        "Laut [opencode.ai](https://opencode.ai) und den Console-Seiten zu Go, Modellen und Enterprise, geprüft am 13. November 2026. Preise in US-Dollar.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "OpenCode (Open Source)",
          "Kostenlos, MIT-Lizenz",
          "Der Agent als Terminal-UI, Desktop-App, Web-App und SDK; Modelle von 200+ Anbietern, auch lokale Modelle",
        ],
        ["Kostenlose Modelle", "$0, kein Konto nötig", "Eine Auswahl kostenloser Modelle mit täglichem Anfragelimit"],
        [
          "OpenCode Go",
          "$10/Monat",
          "Kuratierte Modelle mit Kontingenten für 5 Stunden, eine Woche und einen Monat; Guthaben aufladbar; jederzeit kündbar",
        ],
        [
          "Go Plus",
          "$40/Monat",
          "Kuratierte Modelle mit Kontingenten für 5 Stunden, eine Woche und einen Monat; Guthaben aufladbar; jederzeit kündbar",
        ],
        ["Nutzungsbasiert", "Pro Million Tokens", "Modelle werden bei Nutzung von deinem Guthaben abgerechnet"],
        [
          "Eigener Plan oder eigene Keys",
          "Was du diesem Anbieter ohnehin zahlst",
          "Anmeldung mit ChatGPT Plus oder Pro oder GitHub Copilot oder eigene API-Keys",
        ],
        ["Enterprise", "Vertrieb kontaktieren", "Preise über das Vertriebsteam von OpenCode"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für OpenCode wirklich zahlst",
      points: [
        "Nichts für den Agenten. OpenCode steht unter der MIT-Lizenz, mit CLI-Binaries für macOS, Windows und Linux und einer Desktop-App (im README als Beta gekennzeichnet).",
        "Kostenlose Modelle haben ein tägliches Anfragelimit. Sie brauchen kein Konto.",
        "Go-Kontingente hängen vom Modell ab. Bei Go und Go Plus werden die Kontingente über Zeitfenster von 5 Stunden, einer Woche und einem Monat zurückgesetzt. Du kannst Guthaben aufladen und jederzeit kündigen.",
        "Nutzungsbasiert heißt pro Token. Nutzungsbasierte Modelle werden pro Million Tokens von deinem Guthaben abgerechnet.",
        "Oder ein Plan, für den du schon zahlst. Melde dich mit ChatGPT Plus oder Pro oder GitHub Copilot an. Mit eigenen API-Keys rechnet der jeweilige Anbieter die Nutzung ab; OpenCode arbeitet über Models.dev mit 200+ LLM-Anbietern, auch mit lokalen Modellen.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode-Preise im Vergleich mit anderen Coding-Agenten",
      text: [
        "Einstiegspreise von der eigenen Website des jeweiligen Produkts, geprüft am 13. November 2026, in US-Dollar.",
        "Im direkten Vergleich: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). Weitere Optionen unter [OpenCode-Alternativen](/blog/opencode-alternatives).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        [
          "OpenCode",
          "Agent kostenlos; OpenCode Go $10/Monat",
          "Ja: der Agent (MIT) und kostenlose Modelle mit täglichem Anfragelimit",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "In Claude Pro, $20/Monat oder $17/Monat bei jährlicher Abrechnung",
          "Nein: nicht in Claude Free; nutzungsbasierte API-Credits funktionieren auch",
        ],
        [
          "Codex",
          "In ChatGPT Plus, $20/Monat; oder ein OpenAI-API-Key zu API-Preisen",
          "Die CLI ist Open Source (Apache-2.0); die Nutzung kommt aus einem ChatGPT-Plan oder über einen API-Key",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent kostenlos; optional Nous Portal Plus $20/Monat",
          "Ja: der Agent (MIT) und Nous Portal Free für $0 (nutzungsbasiert, nur kostenlose Modelle)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "Kostenlos; kein Bezahlplan und kein gehosteter Dienst",
          "Ja: das ganze Projekt (MIT); du bezahlst deinen Modellanbieter",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "OpenCode ist der Agent. Crewmark gibt Agenten einen Job und ein Board.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Agenten-Unterhaltung auf deinem eigenen Computer, etwa in Claude Code, Codex oder OpenCode, mit Rolle, KPIs und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Wie OpenCode rechnet Crewmark keine Modellnutzung ab: Du bezahlst deinen Agentenanbieter.",
        "Die Preise von Crewmark: Free für $0 (1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person). Pro für $5/Monat und Team für $10/Monat kommen bald. Die Abrechnung ist noch nicht gebaut, deshalb kann jedes Konto Crewmark bis dahin kostenlos nutzen. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler, SEO-Spezialist oder Datenanalyst.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu und lass regelmäßige wiederkehren; der Heartbeat weckt den Mitarbeiter, damit er das nächste übernimmt.",
        },
        {
          title: "Sieh dir die Pläne an",
          text: "[Crewmark-Preise](/pricing) und Jobs samt Einrichtung unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Soll dein Coding-Agent weiterarbeiten?",
    text: "Crewmark gibt Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board. Kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den OpenCode-Preisen",
    items: [
      {
        q: "Ist OpenCode kostenlos?",
        a: "Ja. Der Agent ist Open Source unter der MIT-Lizenz und kostenlos. Dazu kommen kostenlose Modelle, die kein Konto brauchen und ein tägliches Anfragelimit haben.",
      },
      {
        q: "Wie viel kostet OpenCode Go?",
        a: "OpenCode Go kostet $10 im Monat und Go Plus $40 im Monat. Beide bieten kuratierte Modelle mit Kontingenten über Zeitfenster von 5 Stunden, einer Woche und einem Monat sowie aufladbares Guthaben, und du kannst jederzeit kündigen.",
      },
      {
        q: "Wie funktioniert das Preismodell von OpenCode?",
        a: "Der Agent ist kostenlos, und für Modelle zahlst du auf einem von vier Wegen: die kostenlosen Modelle, ein Abo für Go oder Go Plus, nutzungsbasiert pro Million Tokens von deinem Guthaben oder ein Plan bzw. API-Key, den du schon hast. Enterprise läuft über den Vertrieb.",
      },
      {
        q: "Wie sind die Preise von OpenCode pro Modell?",
        a: "Die Kontingente von OpenCode Go hängen vom Modell ab. Nutzungsbasierte Modelle werden pro Million Tokens abgerechnet. Mit eigenen API-Keys rechnet der jeweilige Anbieter die Nutzung ab.",
      },
      {
        q: "Kann ich OpenCode mit meinem ChatGPT- oder GitHub-Copilot-Abo nutzen?",
        a: "Ja. Du kannst dich mit ChatGPT Plus oder Pro oder GitHub Copilot anmelden oder eigene API-Keys mitbringen.",
      },
      {
        q: "Funktioniert OpenCode mit lokalen Modellen?",
        a: "Ja. OpenCode arbeitet über Models.dev mit 200+ LLM-Anbietern, auch mit lokalen Modellen, und der Agent selbst ist kostenlos.",
      },
    ],
  },
  cta: {
    title: "Wähle deine Modelle. Dann gib deinen Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit opencode.ai und den Console-Seiten von OpenCode abgeglichen. Die Preise der anderen Produkte stammen vom selben Tag, jeweils von deren eigener Website.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Anomaly, den Machern von OpenCode, noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
