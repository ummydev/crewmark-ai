import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/relevance-ai; the English master is src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance-AI-Preise: nur Enterprise, Free-Plan eingestellt",
    description:
      "Die Preisseite von Relevance AI nennt nur Enterprise, Preis auf Anfrage beim Vertrieb, und laut Doku ist der Free-Plan eingestellt. Was das für dich heißt.",
  },
  breadcrumb: "Relevance-AI-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Relevance AI",
    title: "Relevance-AI-Preise: ein Enterprise-Plan über den Vertrieb und kein Free-Plan",
    lead: "Die öffentliche Preisseite von Relevance AI listet einen einzigen Plan, Enterprise, mit individuellen Preisen: Der Weg führt über „Talk to sales“. Laut Doku ist der Free-Plan für Neuanmeldungen und bestehende Konten eingestellt. Für Modelle nennt die Doku zwei Wege: Credits oder deinen eigenen LLM-Key. Hier steht, was der Enterprise-Plan enthält, was das bedeutet, wenn du heute kaufst, und wie der Preis im Vergleich zu Lindy, CrewAI, LangGraph und Crewmark aussieht.",
    cta: "Loslegen",
    secondary: "Zu den Plänen",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von Relevance AI",
      text: [
        "Laut relevanceai.com/pricing und der Doku von Relevance AI, geprüft am 13. November 2026. Die Preisseite nennt keinen Preis für einen Self-Service-Plan.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "Enterprise",
          "Individuell („Talk to sales“)",
          "Eigene Actions und Anbieter-Credits; unbegrenzt viele Agenten, Tools, Nutzer und Projekte. Laut Doku gibt es SSO, RBAC, Audit-Logs, Agenten-Evaluationen, Steuerung der Arbeitszeiten und Enterprise-Trigger nur in Enterprise",
        ],
        ["Free", "Eingestellt", "Laut Doku ist der Free-Plan für Neuanmeldungen und bestehende Konten eingestellt"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für Relevance AI wirklich zahlst",
      points: [
        "Einen individuellen Vertrag. Der einzige gelistete Plan ist Enterprise, bepreist über den Vertrieb, du bekommst eine Zahl also erst nach einem Gespräch mit Relevance AI.",
        "Modelle über Credits oder deinen eigenen Key. Die Plantabelle in der Doku nennt „Use any LLMs with credits“ und „Bring your own LLM“ (BYOK). Enterprise enthält eigene Actions und Anbieter-Credits.",
        "Funktionen, die Enterprise brauchen: SSO, RBAC, Audit-Logs, Agenten-Evaluationen, Steuerung der Arbeitszeiten und Enterprise-Trigger für Salesforce, Snowflake und Zendesk.",
        "Kein kostenloser Einstieg. Da der Free-Plan für Neuanmeldungen eingestellt ist, gibt es keinen Plan für $0, mit dem du vor einem Vertriebsgespräch etwas ausprobieren kannst.",
        "Neben dem Produkt bietet das Vertriebsangebot ein eingebettetes Deployment-Team, das in Woche 1 und 2 Anwendungsfälle erfasst und ab Woche 3 deployt, plus „Invent“, das Relevance AI einen KI-Solutions-Engineer nennt, der rund um die Uhr (24/7) arbeitet.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance-AI-Preise im Vergleich mit ähnlichen Agentenplattformen",
      text: [
        "Preise von der eigenen Website des jeweiligen Produkts, geprüft am 13. November 2026. Produkte, die deine eigenen Modelle nutzen, brauchen außerdem ein Modell, das du an dessen Anbieter zahlst.",
        "Im direkten Vergleich: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Weitere Optionen unter [Relevance-AI-Alternativen](/alternatives/relevance-ai).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        ["Relevance AI", "Enterprise, individueller Preis über den Vertrieb", "Nein: Der Free-Plan ist eingestellt"],
        [
          "[Lindy](/personal-agent/lindy)",
          "$29.99/Monat pro aktivem Nutzer für 3.000 Credits",
          "Ja: Credits im Wert von $50, 7 Tage gültig, keine Kreditkarte nötig",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework kostenlos (MIT); AMP Enterprise individuell",
          "Ja: das Framework und AMP Basic mit 50 Workflow-Ausführungen im Monat",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework kostenlos (MIT); LangSmith Plus $39/Platz pro Monat",
          "Ja: das Framework und LangSmith Developer für $0 (1 Platz, bis zu 5.000 Basis-Traces im Monat)",
        ],
        [
          "[Crewmark](/pricing)",
          "Free; Pro $5/Monat und Team $10/Monat folgen bald",
          "Ja: 1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Relevance AI baut gehostete Agenten. Crewmark betreibt deine eigenen Coding-Agenten als Team.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agenten laufen über das Claude- oder ChatGPT-Abo, für das du schon zahlst, ohne separate Token-Rechnung.",
        "Die Preise von Crewmark: Free für $0 (1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person). Pro für $5/Monat und Team für $10/Monat kommen bald. Die Abrechnung ist noch nicht gebaut, deshalb kann jedes Konto Crewmark bis dahin kostenlos nutzen. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa SEO, Growth, Social Media oder Engineering, mit Zielen in Zahlen.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu und lass regelmäßige wiederkehren; der Heartbeat weckt den Mitarbeiter, damit er das nächste übernimmt.",
        },
        {
          title: "Sieh dir die Pläne an",
          text: "[Crewmark-Preise](/pricing) und was Agenten damit machen unter [Anwendungsfälle für Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst ohne Vertriebsgespräch starten?",
    text: "Der Free-Plan von Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den Relevance-AI-Preisen",
    items: [
      {
        q: "Hat Relevance AI einen kostenlosen Plan?",
        a: "Nicht mehr. Laut der Doku von Relevance AI ist der Free-Plan für Neuanmeldungen und bestehende Konten eingestellt.",
      },
      {
        q: "Wie viel kostet Relevance AI?",
        a: "Die öffentliche Preisseite listet einen Plan, Enterprise, mit individuellen Preisen über den Vertrieb. Einen Preis für einen Self-Service-Plan nennt sie nicht.",
      },
      {
        q: "Was ist in den Enterprise-Preisen von Relevance AI enthalten?",
        a: "Eigene Actions und Anbieter-Credits sowie unbegrenzt viele Agenten, Tools, Nutzer und Projekte. SSO, RBAC, Audit-Logs, Agenten-Evaluationen, Steuerung der Arbeitszeiten und Enterprise-Trigger gibt es nur in Enterprise.",
      },
      {
        q: "Kann ich meinen eigenen LLM-Key bei Relevance AI nutzen?",
        a: "Die Plantabelle in der Doku listet „Bring your own LLM“ (BYOK) neben „Use any LLMs with credits“, du kannst also Credits oder den Key deines eigenen Anbieters nutzen.",
      },
      {
        q: "Kann ich Relevance AI selbst hosten?",
        a: "Eine Option zum Selbsthosten wird nicht genannt. Relevance AI ist eine gehostete Webplattform und nicht Open Source.",
      },
      {
        q: "Gibt es eine Relevance-AI-Alternative mit kostenlosem Plan?",
        a: "Mehrere. Lindy gibt dir Credits im Wert von $50 für 7 Tage, CrewAI und LangGraph sind kostenlose Open-Source-Frameworks, und Crewmark hat einen Free-Plan. Siehe [Relevance-AI-Alternativen](/alternatives/relevance-ai).",
      },
    ],
  },
  cta: {
    title: "Starte kostenlos mit den Agenten, die du schon hast.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit relevanceai.com/pricing, der Doku von Relevance AI und der eigenen Preisseite jedes verglichenen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Relevance AI noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
