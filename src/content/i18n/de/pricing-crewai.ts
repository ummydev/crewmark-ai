import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/crewai; the English master is src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI-Preise: kostenloses Framework, AMP Basic und Enterprise",
    description:
      "CrewAI-Preise: Das MIT-Framework ist kostenlos, AMP Basic ist gratis mit 50 Workflow-Ausführungen im Monat, Enterprise individuell. Dazu deine Modellkosten.",
  },
  breadcrumb: "CrewAI-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Agenten-Frameworks",
    title: "CrewAI-Preise: das kostenlose Framework, die AMP-Pläne und die Modellkosten",
    lead: "Das Open-Source-Python-Framework von CrewAI ist unter der MIT-Lizenz kostenlos; du bezahlst deinen Modellanbieter, standardmäßig die OpenAI-API. CrewAI AMP, die Plattform des Unternehmens, um Crews und Flows zu bauen, zu deployen und zu tracen, hat zwei Pläne: Basic, kostenlos mit 50 Workflow-Ausführungen im Monat, und Enterprise zu einem individuellen Preis. CrewAI nennt keine Währung, keinen Abrechnungszeitraum und keinen Preis für Mehrnutzung. Hier steht, was jeder Plan enthält, wofür du sonst noch zahlst und wie CrewAI im Vergleich zu LangGraph, AutoGen, Relevance AI und Paperclip abschneidet.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von CrewAI",
      text: [
        "Laut der Preisseite von [crewai.com](https://crewai.com) und dem README von crewAI, geprüft am 13. November 2026. CrewAI listet die Plattform-Pläne als „Free“ und „Custom“, ohne Währung oder Abrechnungszeitraum.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "CrewAI-Framework (Open Source)",
          "Kostenlos, MIT-Lizenz",
          "Eine Python-Bibliothek für Crews aus rollenbasierten Agenten und ereignisgesteuerte Flows, die in deinem eigenen Code und auf deiner eigenen Infrastruktur läuft",
        ],
        [
          "AMP Basic",
          "Kostenlos",
          "Visueller Editor und KI-Copilot, GitHub-Integration, 50 Workflow-Ausführungen/Monat, Cron-Zeitplanung, Human-in-the-Loop-Eingaben",
        ],
        [
          "AMP Enterprise",
          "Individuell (kein Preis angegeben)",
          "Deployment in der CrewAI-Cloud, in deiner eigenen VPC oder auf deiner eigenen Infrastruktur; SSO (MS Entra, Okta), RBAC, dedizierte VPC und Enterprise-Connectoren; Cron-Zeitplanung und Human-in-the-Loop-Eingaben",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für CrewAI wirklich zahlst",
      points: [
        "Deinen Modellanbieter. CrewAI-Agenten rufen die Modell-APIs auf, die du konfigurierst: „Standardmäßig nutzen deine Agenten die OpenAI-API“ („By default your agents will use the OpenAI API“). Andere Anbieter und lokale Modelle (Ollama, LM Studio) werden unterstützt.",
        "Workflow-Ausführungen bei AMP Basic. Der kostenlose Plattform-Plan ist auf 50 Workflow-Ausführungen im Monat begrenzt. CrewAI nennt keinen Preis für Mehrnutzung.",
        "Enterprise-Funktionen. SSO, RBAC, dedizierte VPC und Enterprise-Connectoren gibt es nur in Enterprise, zu einem individuellen Preis.",
        "Wo es läuft. Das Framework ist eine Python-Bibliothek (Python `>=3.10, <3.14`) in deinem eigenen Code und auf deiner eigenen Infrastruktur. AMP ist eine Web-App unter app.crewai.com; Enterprise lässt sich in der CrewAI-Cloud, in deiner eigenen VPC oder auf deiner eigenen Infrastruktur deployen.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI-Preise im Vergleich mit anderen Agenten-Frameworks und -Plattformen",
      text: [
        "Preise von der eigenen Preisseite oder aus dem README des jeweiligen Produkts, geprüft am 13. November 2026, in US-Dollar. Im README von AutoGen steht: „Dieses Projekt wurde archiviert und wird von Microsoft nicht mehr aktiv gepflegt“ („This project has been archived and is no longer actively maintained by Microsoft“), und Microsoft nennt Agent Framework als direkten Nachfolger. Stand 13. November 2026 ist der Free-Plan von Relevance AI laut dessen Doku für Neuanmeldungen und bestehende Konten eingestellt.",
        "Im direkten Vergleich: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). Weitere Optionen unter [CrewAI-Alternativen](/alternatives/crewai).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        [
          "CrewAI",
          "Framework kostenlos; AMP Basic kostenlos; Enterprise individuell",
          "Ja: das Framework (MIT) und AMP Basic mit 50 Workflow-Ausführungen/Monat",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework kostenlos; LangSmith Plus $39/Platz pro Monat",
          "Ja: das Framework (MIT) und LangSmith Developer für $0 mit 1 Platz",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Kostenlos (Open Source); das README nennt keinen kostenpflichtigen Dienst",
          "Ja: Code unter MIT; laut README archiviert und von Microsoft nicht mehr aktiv gepflegt",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, individuelle Preise über den Vertrieb",
          "Nein: Laut Doku ist der Free-Plan eingestellt",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "Selbst gehostet kostenlos; keine Preise veröffentlicht",
          "Ja: selbst gehostet (MIT); für eine Cloud-Version gibt es eine Warteliste",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Du baust keine Python-App? Gib stattdessen Claude Code oder Codex eine Rolle.",
      text: [
        "CrewAI ist dafür da, Multi-Agenten-Workflows in deinem eigenen Python-Code zu bauen. Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern, für alle, die schon Claude Code oder Codex nutzen und wollen, dass Agenten an einem Job weiterarbeiten, ohne dass sie jedes Mal einen Prompt brauchen. Jeder Mitarbeiter hat eine Rolle, KPIs und Arbeitszeiten, wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agentennutzung läuft weiter über das Claude- oder ChatGPT-Abo, für das du schon zahlst.",
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
    title: "Du nutzt schon Claude Code oder Codex?",
    text: "Crewmark macht daraus KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board. Kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den CrewAI-Preisen",
    items: [
      {
        q: "Ist CrewAI kostenlos?",
        a: "Das Framework schon: Es ist Open Source unter der MIT-Lizenz, und du bezahlst nur deinen Modellanbieter. Auch der Plan AMP Basic von CrewAI ist kostenlos, mit 50 Workflow-Ausführungen im Monat.",
      },
      {
        q: "Welche Pläne hat CrewAI AMP?",
        a: "Zwei: Basic, gelistet als „Free“ (visueller Editor und KI-Copilot, GitHub-Integration, 50 Workflow-Ausführungen im Monat), und Enterprise, gelistet als „Custom“ ohne Preis. CrewAI nennt keine Währung, keinen Abrechnungszeitraum und keinen Preis für Mehrnutzung.",
      },
      {
        q: "Wie viel kostet CrewAI Enterprise?",
        a: "CrewAI nennt keinen Preis; Enterprise ist „Custom“. Es bringt Deployment in der CrewAI-Cloud, in deiner eigenen VPC oder auf deiner eigenen Infrastruktur, SSO mit MS Entra oder Okta, RBAC und Enterprise-Connectoren dazu.",
      },
      {
        q: "Wie funktioniert das Preismodell von CrewAI?",
        a: "Ein kostenloses Open-Source-Framework, das du selbst betreibst, plus die Plattform AMP mit Preisen je Plan: Basic ist kostenlos und auf 50 Workflow-Ausführungen im Monat begrenzt, Enterprise ist individuell. Die Modellnutzung rechnet dein Modellanbieter separat ab.",
      },
      {
        q: "Wie viel kostet die CrewAI-Cloud?",
        a: "AMP ist eine Web-App unter app.crewai.com, und Basic ist mit 50 Workflow-Ausführungen im Monat kostenlos. Deployment in der CrewAI-Cloud, in deiner eigenen VPC oder auf deiner eigenen Infrastruktur steht unter Enterprise, zu einem individuellen Preis.",
      },
      {
        q: "Brauche ich einen OpenAI-Key, um CrewAI zu nutzen?",
        a: "Standardmäßig nutzen CrewAI-Agenten die OpenAI-API. Andere Anbieter und lokale Modelle wie Ollama und LM Studio werden unterstützt.",
      },
    ],
  },
  cta: {
    title: "Bau eine Crew im Code, oder gib deinen Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit crewai.com/pricing, der Plattform-Doku von CrewAI und dem README von crewAI abgeglichen. Die Preise der anderen Produkte stammen vom selben Tag, jeweils von deren eigenen Seiten.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit crewAI, Inc. noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
