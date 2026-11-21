import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/factory; the English master is src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory-AI-Preise: Free, Pro $20, Plus, Max und Teams",
    description:
      "Factory-AI-Preise: Free mit eigener Inferenz, Pro $20, Plus $100 und Max $200 im Monat sowie Teams. Rate Limits, Extra Usage und wie Tokens abgerechnet werden.",
  },
  breadcrumb: "Factory-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Factory",
    title: "Factory-AI-Preise: Droid-Pläne, Nutzungslimits und Tokens",
    lead: "Factory baut Droids, Coding-Agenten, die in der Factory App, der Droid CLI, in CI und auf von Factory gehosteten Cloud-Computern laufen. Der Free-Plan kostet $0, wenn du deine eigene Inferenz mitbringst: Melde dich mit ChatGPT, GitHub Copilot oder OpenRouter an oder verbinde deine eigenen API-Keys. Die bezahlten Pläne reichen von Pro für $20 im Monat bis Max für $200 im Monat pro Person, und Teams kostet $60 im Monat pro Team plus $40 im Monat pro Person. Bezahlte Pläne haben rollierende Rate Limits, und Extra Usage ist vorausbezahltes Guthaben obendrauf. Hier sind die Pläne, wie Nutzung und Tokens abgerechnet werden und wie der Preis im Vergleich zu Devin, Claude Code, Codex und OpenCode aussieht.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von Factory",
      text: [
        "Laut der Preisseite von [factory.com](https://factory.com) und der Preisdoku von Factory, geprüft am 13. November 2026. Preise in US-Dollar, wie angegeben („/mo“).",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "Free",
          "$0/mo pro Person",
          "Eigene Inferenz mitbringen: Anmeldung mit ChatGPT, GitHub Copilot oder OpenRouter oder eigene API-Keys bzw. ein eigener Endpoint",
        ],
        [
          "Pro",
          "$20/mo pro Person",
          "Desktop-App, CLI und SDK, volle Modellverfügbarkeit; rollierende Rate Limits über 5 Stunden, 7 Tage und 30 Tage",
        ],
        ["Plus", "$100/mo pro Person", "Etwa 5-mal so viel Nutzung wie Pro; dieselben rollierenden Rate Limits"],
        ["Max", "$200/mo pro Person", "Etwa 10-mal so viel Nutzung wie Pro; dieselben rollierenden Rate Limits"],
        ["Teams", "$60/mo pro Team plus $40/mo pro Person", "Bis zu 10 Plätze"],
        ["Business und Enterprise", "Vertrieb kontaktieren", "Optionen für On-Premise-Bereitstellung bei Enterprise"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für Factory wirklich zahlst",
      points: [
        "Inferenz bei Free. Der Free-Plan arbeitet mit Inferenz, die du mitbringst: einer Anmeldung bei ChatGPT, GitHub Copilot oder OpenRouter oder deinen eigenen API-Keys bzw. einem eigenen Endpoint. Die Tokens rechnet dieser Anbieter oder Plan ab.",
        "Standard Usage in bezahlten Plänen. Pro, Plus und Max haben jeweils rollierende Rate Limits über 5 Stunden, 7 Tage und 30 Tage. Plus bietet etwa 5-mal so viel Nutzung wie Pro, Max etwa 10-mal so viel. Nicht genutzte Standard Usage wird nicht übertragen.",
        "Extra Usage. Mehr Nutzung gibt es über Extra Usage, ein vorausbezahltes Guthaben mit $10 Mindestbetrag, das nicht verfällt.",
        "Missions brauchen Extra Usage. Missions, die Features und Meilensteine planen, brauchen aktivierte Extra Usage und pausieren, wenn sie ein Rate Limit erreichen.",
        "Workstreams verbrauchen mehr Tokens. Workstreams (Beta) in Pro, Plus, Max und Teams verbrauchen mehr Tokens als eine einzelne Session. In Business und Enterprise gibt es sie noch nicht.",
        "Modelle. Factory nennt „alle führenden Frontier- und Open-Weight-Modelle, darunter die neuesten Versionen von GPT-5, Claude Opus und Sonnet, Gemini“ („all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini“), einen Pool aus Open-Weight-Modellen namens „Droid Core“ und deine eigenen API-Keys oder lokale Modelle (BYOK).",
        "Plätze. Pro, Plus und Max werden pro Person berechnet. Teams ist auf 10 Plätze begrenzt; Business und Enterprise laufen über den Vertrieb.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory-Preise im Vergleich mit anderen Coding-Agenten",
      text: [
        "Einstiegspreise von der eigenen Preisseite des jeweiligen Produkts, geprüft am 13. November 2026, in US-Dollar.",
        "Im direkten Vergleich: [Factory vs Claude Code](/compare/factory-vs-claude-code). Weitere Optionen unter [Factory-Alternativen](/alternatives/factory).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        ["Factory", "Free $0 mit eigener Inferenz; Pro $20/Monat", "Ja: Free, wenn du deine eigene Inferenz mitbringst"],
        ["[Devin](/pricing/devin)", "Free $0; Pro $20/Monat", "Ja: Free-Plan mit kleinem Kontingent"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "In Claude Pro, $20/Monat oder $17/Monat bei jährlicher Abrechnung",
          "Nein: nicht in Claude Free; nutzungsbasierte API-Credits funktionieren auch",
        ],
        [
          "Codex",
          "In ChatGPT Plus, $20/Monat; oder ein OpenAI-API-Key zu API-Preisen",
          "ChatGPT Free ($0) listet GPT-6 Luna in der Desktop-App, „je nach Rollout“ („subject to rollout“)",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent kostenlos; OpenCode Go $10/Monat, Go Plus $40/Monat",
          "Ja: der Agent (MIT) und kostenlose Modelle mit täglichem Anfragelimit",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Behalte dein Abo. Gib deinem Agenten eine Rolle und ein Board.",
      text: [
        "Factory verkauft einen eigenen Agenten mit Plänen und Nutzungslimits. Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agentennutzung läuft weiter über das Claude- oder ChatGPT-Abo, für das du schon zahlst, ohne separate Token-Rechnung.",
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
    title: "FAQ zu den Factory-AI-Preisen",
    items: [
      {
        q: "Ist Factory AI kostenlos?",
        a: "Ja, wenn du deine eigene Inferenz mitbringst. Der Free-Plan kostet $0 pro Person: Melde dich mit ChatGPT, GitHub Copilot oder OpenRouter an oder verbinde deine eigenen API-Keys oder einen eigenen Endpoint.",
      },
      {
        q: "Wie viel kostet Factory AI pro Monat?",
        a: "Pro Person kostet Pro $20, Plus $100 und Max $200 im Monat. Teams kostet $60 im Monat pro Team plus $40 im Monat pro Person, für bis zu 10 Plätze. Business und Enterprise werden über den Vertrieb bepreist.",
      },
      {
        q: "Wie funktioniert das Preismodell von Factory AI?",
        a: "Ein Plan pro Person mit Standard Usage unter rollierenden Rate Limits über 5 Stunden, 7 Tage und 30 Tage, plus optional Extra Usage: vorausbezahltes Guthaben mit $10 Mindestbetrag, das nicht verfällt. Nicht genutzte Standard Usage wird nicht übertragen.",
      },
      {
        q: "Wie rechnet Factory AI Tokens ab?",
        a: "Bei Free werden Tokens über das Konto oder den API-Key abgerechnet, den du mitbringst. Bei Pro, Plus und Max zählt die Modellnutzung gegen die Standard Usage deines Plans und dessen Rate Limits, und Extra Usage ist das vorausbezahlte Guthaben für mehr. Workstreams verbrauchen mehr Tokens als eine einzelne Session.",
      },
      {
        q: "Gibt es Enterprise-Preise für Factory AI?",
        a: "Business und Enterprise laufen über den Vertrieb, ohne angegebenen Preis. Enterprise bietet Optionen für On-Premise-Bereitstellung. Teams für $60 im Monat plus $40 pro Person ist auf 10 Plätze begrenzt.",
      },
      {
        q: "Ist Factory AI Open Source?",
        a: "Nein. Für die Droid CLI und die Factory App sind weder Quellcode noch eine Open-Source-Lizenz veröffentlicht; github.com/Factory-AI/factory enthält ein README und Doku. Open-Source-Optionen findest du unter [Factory-Alternativen](/alternatives/factory).",
      },
    ],
  },
  cta: {
    title: "Vergleiche den Preis. Dann gib deinem Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit factory.com/pricing und der Preisdoku von Factory abgeglichen. Die Preise der anderen Produkte stammen vom selben Tag, jeweils von deren eigener Preisseite.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Factory noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
