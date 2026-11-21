import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/devin; the English master is src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin-Preise 2026: Free, Pro $20, Max $200 und Teams",
    description:
      "Devin-Preise: Free für $0, Pro $20/Monat, Max $200, Teams und Enterprise. Kontingente, On-Demand-Credits und Plätze erklärt, dazu Devin im Preisvergleich.",
  },
  breadcrumb: "Devin-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Cognition",
    title: "Devin-Preise: jeder Plan und was du darüber hinaus zahlst",
    lead: "Devin, der KI-Softwareingenieur von Cognition, hat einen Free-Plan für $0 mit einem kleinen Kontingent. Pro kostet $20 im Monat und Max $200 im Monat, beide für einen Nutzer. Teams ist mit „$80/month for team plan + $40/mo per full dev seat“ angegeben, Enterprise läuft über den Vertrieb. Jeder Self-Service-Plan hat ein tägliches und/oder wöchentliches Kontingent; darüber hinaus zahlst du mit vorausbezahlten On-Demand-Credits. Hier sind die Pläne, die Zusatzkosten und wie der Preis von Devin im Vergleich zu Factory, Claude Code, Codex, Cursor Projects und Crewmark aussieht.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von Devin",
      text: [
        "Laut der Preisseite von [devin.ai](https://devin.ai) und der Abrechnungsdoku von Devin, geprüft am 13. November 2026. Preise in US-Dollar.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        ["Free", "$0", "Ein kleines Kontingent und eingeschränkte Modellverfügbarkeit"],
        [
          "Pro",
          "$20 pro Monat",
          "Devin Cloud, volle Modellverfügbarkeit, zusätzliche Nutzung zu API-Preisen; ein Nutzer",
        ],
        ["Max", "$200 pro Monat", "Höhere Kontingente; ein Nutzer"],
        [
          "Teams",
          "„$80/month for team plan + $40/mo per full dev seat“",
          "Bis zu 100 Nutzer; ein „Free mode“ (SWE-2) mit bis zu 2 gleichzeitigen Cloud-Sessions pro Mitglied",
        ],
        ["Enterprise", "„Let's talk“", "VPC und dedizierte Bereitstellung"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für Devin wirklich zahlst",
      points: [
        "Zuerst ein Kontingent. Die Self-Service-Pläne von Devin arbeiten mit einem täglichen und/oder wöchentlichen Kontingent.",
        "Dann vorausbezahlte Credits. Nutzung über das Kontingent hinaus läuft über vorausbezahlte On-Demand-Credits. Bei Pro wird zusätzliche Nutzung zu API-Preisen abgerechnet.",
        "Dein ChatGPT-Plan für GPT-Modelle. Pro, Max und Teams können einen verknüpften ChatGPT-Plan für die Nutzung von GPT-Modellen verwenden.",
        "Modelle je nach Plan. Free hat eine eingeschränkte Modellverfügbarkeit, Pro die volle. Devin nutzt SWE-2 von Cognition plus „Frontier-Modelle von OpenAI, Claude, Gemini und SpaceXAI sowie führende Open-Source-Modelle“ („frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models“), und ein Adaptive-Router wählt pro Aufgabe ein Modell.",
        "Plätze. Pro und Max sind Pläne für einen Nutzer. Teams erlaubt bis zu 100 Mitglieder, größere Teams werden an Enterprise verwiesen.",
        "Credits bei Teams. Bei Teams stoppen die Automations, wenn die gemeinsamen On-Demand-Credits aufgebraucht sind.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin-Preise im Vergleich mit anderen Coding-Agenten",
      text: [
        "Einstiegspreise von der eigenen Preisseite des jeweiligen Produkts, geprüft am 13. November 2026, in US-Dollar. Wo ein Plan keine Modellnutzung enthält, läuft sie über deinen Modellanbieter.",
        "Im direkten Vergleich: [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). Weitere Optionen unter [Devin-Alternativen](/blog/devin-alternatives).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        ["Devin", "Free $0; Pro $20/Monat", "Ja: Free-Plan mit kleinem Kontingent"],
        [
          "[Factory](/pricing/factory)",
          "Free $0 mit eigener Inferenz; Pro $20/Monat",
          "Ja: Free, wenn du deine eigene Inferenz mitbringst",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "In Claude Pro, $20/Monat oder $17/Monat bei jährlicher Abrechnung",
          "Nein: nicht in Claude Free; nutzungsbasierte API-Credits funktionieren auch",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "In ChatGPT Plus, $20/Monat; oder ein OpenAI-API-Key zu API-Preisen",
          "ChatGPT Free ($0) listet GPT-6 Luna in der Desktop-App, „je nach Rollout“ („subject to rollout“)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/Monat oder $300/Jahr",
          "Nein: nicht in Free, Plus oder dem älteren Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0; Pro $5/Monat folgt bald",
          "Ja: 1 Projekt, bis zu 3 KI-Mitarbeiter; die Agentennutzung zahlst du an deinen Anbieter",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Du zahlst schon für Claude Code oder Codex? Gib ihm einen Job und ein Board.",
      text: [
        "Devin ist ein eigener Agent, abgerechnet über Plan-Kontingent und Credits. Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agentennutzung läuft weiter über das Claude- oder ChatGPT-Abo, für das du schon zahlst.",
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
    title: "Du zahlst schon für Claude oder ChatGPT?",
    text: "Crewmark macht aus deinem Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den Devin-Preisen",
    items: [
      {
        q: "Ist Devin kostenlos?",
        a: "Es gibt einen Free-Plan für $0 mit kleinem Kontingent und eingeschränkter Modellverfügbarkeit. Pro für $20 im Monat bringt Devin Cloud und die volle Modellverfügbarkeit dazu.",
      },
      {
        q: "Wie viel kostet Devin pro Monat?",
        a: "Pro kostet $20 im Monat und Max $200 im Monat, beide für einen Nutzer. Teams ist mit „$80/month for team plan + $40/mo per full dev seat“ angegeben, für bis zu 100 Nutzer. Bei Enterprise steht „Let's talk“. Preise in US-Dollar.",
      },
      {
        q: "Wie funktioniert das Preismodell von Devin?",
        a: "Ein Plan mit täglichem und/oder wöchentlichem Kontingent plus vorausbezahlte On-Demand-Credits für die Nutzung darüber hinaus. Bei Pro wird zusätzliche Nutzung zu API-Preisen abgerechnet. Bei Teams kommen eine Team-Gebühr und eine Gebühr pro vollem Entwicklerplatz dazu.",
      },
      {
        q: "Wie funktionieren die Pläne Teams und Enterprise von Devin?",
        a: "Teams erlaubt bis zu 100 Mitglieder, und seine Automations stoppen, wenn die gemeinsamen On-Demand-Credits aufgebraucht sind. Größere Teams werden an Enterprise verwiesen, das über den Vertrieb bepreist wird und VPC sowie dedizierte Bereitstellung bietet.",
      },
      {
        q: "Kann ich meinen ChatGPT-Plan mit Devin nutzen?",
        a: "Ja, bei Pro, Max und Teams. Ein verknüpfter ChatGPT-Plan deckt die Nutzung von GPT-Modellen ab.",
      },
      {
        q: "Ist Devin Open Source?",
        a: "Nein. Für Devin sind weder Quellcode noch eine Open-Source-Lizenz veröffentlicht; github.com/CognitionAI/devin-cli enthält Installationspakete, Doku und Skripte. Open-Source-Optionen findest du unter [Devin-Alternativen](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Vergleiche den Preis. Dann gib deinem Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit devin.ai/pricing und der Abrechnungsdoku von Devin abgeglichen. Die Preise der anderen Produkte stammen vom selben Tag, jeweils von deren eigener Preisseite.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Cognition noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
