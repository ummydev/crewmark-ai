import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/langgraph; the English master is src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph-Preise: kostenlos, LangSmith Plus $39, Agent Server",
    description:
      "LangGraph-Preise: Das MIT-Framework ist gratis. LangSmith Developer kostet $0, Plus $39 pro Platz im Monat mit einem Agent Server, weitere Server $1.00 pro LSU.",
  },
  breadcrumb: "LangGraph-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Agenten-Frameworks",
    title: "LangGraph-Preise: das kostenlose Framework, die LangSmith-Pläne und die Kosten für Agent Server",
    lead: "LangGraph ist kostenlos: Das Framework ist Open Source unter der MIT-Lizenz und läuft in deiner eigenen Anwendung. Geld kostet LangSmith, das kommerzielle Produkt von LangChain für Tracing, Evaluation und Deployment. Developer kostet $0 für einen Platz, Plus $39 pro Platz im Monat mit einem Small Agent Server inklusive, und Enterprise ist individuell. Zusätzliche Agent Server werden nach Verbrauch mit $1.00 pro LSU abgerechnet, und Modellaufrufe rechnet dein Modellanbieter ab. Hier ist jeder Plan, was Agent Server kostet und wie LangGraph im Vergleich zu CrewAI, AutoGen, Relevance AI und Paperclip abschneidet.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von LangGraph und LangSmith",
      text: [
        "Laut der Preisseite von [langchain.com](https://www.langchain.com/langgraph) und der Doku von LangChain, geprüft am 13. November 2026. Preise in US-Dollar; Developer und Plus werden monatlich abgerechnet.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "LangGraph-Framework (Open Source)",
          "Kostenlos, MIT-Lizenz",
          "Eine Bibliothek für Python und JavaScript/TypeScript für zustandsbehaftete Agenten, die in deiner eigenen Anwendung läuft",
        ],
        [
          "LangSmith Developer",
          "$0/Platz pro Monat",
          "1 Platz; bis zu 5.000 Basis-Traces/Monat, danach nutzungsbasiert; kein Agent Server",
        ],
        [
          "LangSmith Plus",
          "$39/Platz pro Monat",
          "Bis zu 10.000 Basis-Traces/Monat, danach nutzungsbasiert; „1 Small Agent Server auf Serverless-Hosting ohne Aufpreis inklusive“ („1 Small Agent Server included on serverless hosting at no charge“)",
        ],
        [
          "LangSmith Enterprise",
          "Individuell, jährlich im Voraus in Rechnung gestellt",
          "Zusätzlich Optionen für selbst gehostete und hybride Bereitstellung",
        ],
        [
          "Zusätzliche Agent Server",
          "$1.00 pro LSU, nach Verbrauch",
          "Laufzeit-Rechenleistung 0,0675 LSU/vCPU-Stunde, Laufzeit-Arbeitsspeicher 0,0090 LSU/GiB-Stunde, Datenbank-Rechenleistung 0,177 LSU/vCPU-Stunde, Datenbank-Arbeitsspeicher 0,025 LSU/GiB-Stunde",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für LangGraph wirklich zahlst",
      points: [
        "Deinen Modellanbieter. LangGraph ruft die Modelle auf, die dein Code nutzt, und „LangGraph setzt LangChain nicht voraus.“ („LangGraph does not require LangChain.“) Diese Modellaufrufe rechnet dein Anbieter ab.",
        "Traces über die enthaltene Menge hinaus. Developer enthält bis zu 5.000 Basis-Traces im Monat, Plus bis zu 10.000; darüber hinaus werden Traces nutzungsbasiert abgerechnet.",
        "Plätze. Developer ist auf 1 Platz begrenzt. Plus kostet $39 pro Platz im Monat.",
        "Agent Server ab dem zweiten. Plus enthält 1 Small Agent Server auf Serverless-Hosting. Weitere werden nach Verbrauch mit $1.00 pro LSU abgerechnet, also kostet Laufzeit-Rechenleistung $0.0675 pro vCPU-Stunde und Laufzeit-Arbeitsspeicher $0.009 pro GiB-Stunde; Datenbank-Rechenleistung liegt bei 0,177 LSU pro vCPU-Stunde und Datenbank-Arbeitsspeicher bei 0,025 LSU pro GiB-Stunde.",
        "Cron-Jobs laufen weiter. Agent Server unterstützt Cron-Jobs nach einem Zeitplan, den du festlegst. Die Doku von LangChain rät, ungenutzte zu löschen, weil wiederkehrende Läufe Kosten für die LLM-API verursachen können.",
        "Wo es gehostet wird. Cloud Agent Server wird „vollständig von LangChain auf AWS, Azure und GCP verwaltet“ („Fully managed by LangChain on AWS, Azure, and GCP“). Selbst gehostete und hybride Bereitstellung sind Enterprise-Optionen.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph-Preise im Vergleich mit anderen Agenten-Frameworks und -Plattformen",
      text: [
        "Preise von der eigenen Preisseite oder aus dem README des jeweiligen Produkts, geprüft am 13. November 2026, in US-Dollar. Im README von AutoGen steht: „Dieses Projekt wurde archiviert und wird von Microsoft nicht mehr aktiv gepflegt“ („This project has been archived and is no longer actively maintained by Microsoft“), und Microsoft nennt Agent Framework als direkten Nachfolger. Stand 13. November 2026 ist der Free-Plan von Relevance AI laut dessen Doku für Neuanmeldungen und bestehende Konten eingestellt.",
        "Im direkten Vergleich: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Weitere Optionen unter [LangGraph-Alternativen](/alternatives/langgraph).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        [
          "LangGraph",
          "Framework kostenlos; LangSmith Plus $39/Platz pro Monat",
          "Ja: das Framework (MIT) und LangSmith Developer für $0 mit 1 Platz",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework kostenlos; AMP Basic kostenlos; Enterprise individuell",
          "Ja: das Framework (MIT) und AMP Basic mit 50 Workflow-Ausführungen/Monat",
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
          "[Paperclip](/alternatives/paperclip)",
          "Selbst gehostet kostenlos; keine Preise veröffentlicht",
          "Ja: selbst gehostet (MIT); für eine Cloud-Version gibt es eine Warteliste",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Du baust keine Agenten-App? Gib stattdessen Claude Code oder Codex eine Rolle.",
      text: [
        "LangGraph ist dafür da, zustandsbehaftete Agenten in deinem eigenen Code zu bauen. Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern, für alle, die schon Claude Code oder Codex nutzen und wollen, dass Agenten an einem Job weiterarbeiten, ohne dass sie jedes Mal einen Prompt brauchen. Jeder Mitarbeiter hat eine Rolle, KPIs und Arbeitszeiten, wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die Agentennutzung läuft weiter über das Claude- oder ChatGPT-Abo, für das du schon zahlst.",
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
    title: "FAQ zu den LangGraph-Preisen",
    items: [
      {
        q: "Ist LangGraph kostenlos?",
        a: "Ja. Das LangGraph-Framework ist Open Source unter der MIT-Lizenz, für Python und JavaScript/TypeScript. Auch LangSmith, das kommerzielle Produkt von LangChain, hat einen Developer-Plan für $0 mit einem Platz.",
      },
      {
        q: "Wie viel kostet das Deployment von LangGraph in der Cloud?",
        a: "Das Deployment läuft auf LangSmith Agent Server, vollständig von LangChain auf AWS, Azure und GCP verwaltet. LangSmith Plus ($39 pro Platz im Monat) enthält 1 Small Agent Server auf Serverless-Hosting ohne Aufpreis, und weitere Server werden nach Verbrauch mit $1.00 pro LSU abgerechnet. Der Developer-Plan hat keinen Agent Server.",
      },
      {
        q: "LangGraph-Server-Preise: Was kostet Agent Server?",
        a: "Agent Server (früher LangSmith Deployment) wird nach Verbrauch in LSUs zu $1.00 pro LSU abgerechnet: 0,0675 LSU pro vCPU-Stunde Laufzeit-Rechenleistung, 0,0090 pro GiB-Stunde Laufzeit-Arbeitsspeicher, 0,177 pro vCPU-Stunde Datenbank-Rechenleistung und 0,025 pro GiB-Stunde Datenbank-Arbeitsspeicher. Plus enthält einen Small Agent Server ohne Aufpreis.",
      },
      {
        q: "Was enthält LangSmith Plus?",
        a: "$39 pro Platz im Monat, monatlich abgerechnet: bis zu 10.000 Basis-Traces im Monat, danach nutzungsbasiert, und 1 Small Agent Server auf Serverless-Hosting ohne Aufpreis.",
      },
      {
        q: "Gibt es Enterprise-Preise für LangGraph?",
        a: "LangSmith Enterprise ist individuell und wird jährlich im Voraus in Rechnung gestellt. Selbst gehostete und hybride Bereitstellungen von Agent Server sind Enterprise-Optionen.",
      },
      {
        q: "Brauche ich LangSmith, um LangGraph zu nutzen?",
        a: "Das Framework ist eine kostenlose MIT-Bibliothek, die in deiner eigenen Anwendung läuft. LangSmith ist das separate kommerzielle Produkt von LangChain für Tracing, Evaluation und das Deployment von Agenten auf Agent Server.",
      },
    ],
  },
  cta: {
    title: "Bau den Graph, oder gib deinen Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, KPIs, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit langchain.com/pricing und der Doku von LangChain zu LangGraph und LangSmith abgeglichen. Die Preise der anderen Produkte stammen vom selben Tag, jeweils von deren eigenen Seiten.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit LangChain noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
