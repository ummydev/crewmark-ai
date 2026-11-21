import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph-Alternativen 2026: CrewAI, AutoGen und mehr",
    description:
      "LangGraph-Alternativen im Vergleich: CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, Claude Code Agent Teams und Crewmark nach Lizenz, Preis und Einsatz.",
  },
  breadcrumb: "LangGraph-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · LangChain LangGraph",
    title: "LangGraph-Alternativen 2026: Frameworks, fertige Agenten und Agenten-Teams",
    lead: "LangGraph ist das Open-Source-Framework (MIT) von LangChain für langlebige, zustandsbehaftete Agenten: Du definierst einen Workflow als Graph aus State, Nodes und Edges, in Python oder JS/TS. Es ist bewusst Low-Level und „gibt weder Prompts noch eine Agenten-Architektur vor“ („does not prescribe prompts or agent architecture“). Auf der Plattform LangSmith von LangChain hat der kostenlose Developer-Plan einen Platz und keinen Agent Server, und selbst gehostetes Deployment gibt es nur mit Enterprise. Wenn du Agenten willst, die über eine Rolle definiert sind, einen fertigen Agenten statt einer Bibliothek oder ein Team aus Coding-Agenten, findest du hier sieben Optionen mit Lizenz, Preis und für wen sie sich jeweils eignen.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph-Alternativen auf einen Blick",
      text: [
        "Angaben aus README, Dokumentation und Preisseite des jeweiligen Produkts, geprüft am 13. November 2026. Preise in US-Dollar. LangGraph selbst ist kostenlos unter MIT; LangSmith Plus kostet $39 pro Platz im Monat. Details unter [LangGraph-Preise](/pricing/langgraph).",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Ein Python-Framework für Crews aus rollenbasierten Agenten und ereignisgesteuerte Flows, plus die kommerzielle Plattform CrewAI AMP",
          "Framework ja (MIT); AMP ist kommerziell",
          "Framework kostenlos, plus dein Modellanbieter; AMP Basic kostenlos (50 Workflow-Ausführungen im Monat)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Das Multi-Agenten-Framework von Microsoft in Python und .NET; laut README ist es archiviert und wird von Microsoft nicht mehr gepflegt",
          "Ja (Code MIT, Doku CC-BY-4.0)",
          "Kostenlos, plus dein Modellanbieter; kein gehosteter Dienst",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "Ein persönlicher KI-Assistent, der auf deinem eigenen Computer läuft und dir in Chat-Apps antwortet",
          "Ja (MIT)",
          "Kostenlos; kein Bezahlplan und kein gehosteter Dienst; du bezahlst deinen Modellanbieter",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "Der persönliche Agent von Nous Research, der eigene Skills schreibt und verfeinert, nutzbar im Terminal, in einer Desktop-App oder in Chat-Apps",
          "Ja (MIT)",
          "Agent kostenlos, plus dein Modellanbieter; optional Nous Portal Plus $20 im Monat",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Ein selbst gehosteter Server mit Web-Oberfläche, der Agenten, die du mitbringst (Claude Code, Codex, OpenClaw und weitere), als Unternehmen mit Organigramm, Budgets und Aufgaben führt",
          "Ja (MIT)",
          "Selbst gehostete Version kostenlos; keine Preise veröffentlicht; Cloud-Version mit Warteliste",
        ],
        [
          "[Claude Code Agent Teams](/blog/claude-code-agent-teams)",
          "Eine experimentelle Funktion von Claude Code, bei der eine Lead-Session Teammates startet, die sich eine Aufgabenliste teilen und sich gegenseitig Nachrichten schreiben",
          "Nein",
          "Bei Claude Code in bezahlten Claude-Plänen enthalten, ab Pro für $20 im Monat ($17 im Monat bei jährlicher Abrechnung)",
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
      kind: "text",
      id: "frameworks",
      title: "Andere Agenten-Frameworks",
      text: [
        "Bibliotheken, die du wie LangGraph aus deinem eigenen Code aufrufst. Im direkten Vergleich: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph) und [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI: ein MIT-lizenziertes Python-Framework. LangGraph hat kein eingebautes Rollenkonzept; in CrewAI wird jeder Agent mit Rolle, Ziel und Backstory definiert. Ist Delegation eingeschaltet, geben Agenten einander Arbeit ab und stellen sich gegenseitig Fragen, und Flows ergänzen eine ereignisgesteuerte, schrittweise Steuerung mit State und Verzweigungen. CrewAI AMP ergänzt ein No-Code-Studio, Tracing, Cron-Zeitplanung und Deployment. Wähle CrewAI, wenn du Python schreibst (3.10 oder neuer, unter 3.14) und Agenten nach Rollen organisieren willst. Preise: [CrewAI-Preise](/pricing/crewai).",
        "AutoGen: das MIT-lizenzierte Multi-Agenten-Framework von Microsoft in Python und .NET, mit Gruppenchats sowie Selector- und Swarm-Teams. Am 13. November 2026 stand im README, das Projekt sei „archiviert und wird von Microsoft nicht mehr aktiv gepflegt“ („has been archived and is no longer actively maintained by Microsoft“); es riet vom Einsatz in Produktion ab und verwies neue Nutzer auf Microsoft Agent Framework, seinen Nachfolger. Wähle AutoGen, wenn du eine bestehende AutoGen-App pflegst oder Multi-Agenten-Muster studieren willst. Mehr unter [AutoGen-Alternativen](/alternatives/autogen).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Fertige Agenten statt einer Bibliothek",
      text: [
        "Mit LangGraph baust du den Agenten selbst. Diese beiden sind Agenten, die du installierst und ausführst, jeweils mit eingebautem Scheduler. Verglichen in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: ein MIT-lizenzierter persönlicher Assistent, der als Gateway auf deinem eigenen Computer läuft und in WhatsApp, Telegram, Slack, Discord und anderen Chat-Apps antwortet. Er betreibt mehrere Agenten auf einem Gateway, hat einen eingebauten Automations-Scheduler, und das Projekt hat weder einen Bezahlplan noch einen gehosteten Dienst. Wähle OpenClaw, wenn du einen Assistenten auf Hardware willst, die du kontrollierst, mit Modellanbietern, die du austauschen kannst. Mehr unter [OpenClaw-Alternativen](/blog/openclaw-alternatives).",
        "Hermes Agent: der MIT-lizenzierte persönliche Agent von Nous Research. Er schreibt Skills aus Erfahrung, führt sein eigenes Gedächtnis und lässt Routinen über einen eingebauten Cron-Scheduler laufen; im Bot Mode schreiben sich benannte Bots mit eigenen Modellen direkt Nachrichten. Wähle Hermes Agent, wenn du einen Agenten willst, der seine eigenen Skills mit der Zeit verbessert und den du aus einem Terminal, einer Desktop-App und Chat-Apps erreichst. Mehr unter [Hermes-Agent-Alternativen](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coding-Agenten koordinieren, die du schon nutzt",
      text: [
        "Wenn die Agenten, die du koordinieren willst, Coding-Agenten wie Claude Code oder Codex sind, lassen diese sie als Team laufen. Siehe [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) und [Claude Code Agent Teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: ein selbst gehosteter, MIT-lizenzierter Node.js-Server mit Web-Oberfläche, der Agenten als Unternehmen führt: ein Organigramm mit Rollen und Budgets, Issues, die Agenten oder Menschen zugewiesen werden, Freigaben und Routinen per Cron, Webhook oder API-Trigger. Laut eigener Aussage ist es „kein Agenten-Framework“ („not an agent framework“): Über Adapter steuert es Agenten, die du mitbringst, etwa Claude Code, Codex und OpenClaw. Wähle Paperclip, wenn viele Agenten mit Ausgabenlimits auf deinem eigenen Server auf ein gemeinsames Ziel hinarbeiten sollen.",
        "Claude Code Agent Teams: eine experimentelle Funktion von Claude Code, standardmäßig aus. Eine Lead-Session startet Teammates, separate Claude-Code-Instanzen, die sich eine Aufgabenliste mit Abhängigkeiten teilen und sich direkt Nachrichten schreiben. Wähle Agent Teams, wenn du schon für einen Claude-Plan zahlst und mehrere Claude-Code-Instanzen an einer Coding-Aufgabe arbeiten lassen willst.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine LangGraph-Alternative aus",
      steps: [
        {
          title: "Du brauchst Low-Level-Kontrolle über jeden Schritt?",
          text: "Genau dafür ist LangGraph gebaut. Als Einstieg auf höherer Ebene verweist das README auf Deep Agents, das auf LangGraph aufbaut und Subagents ergänzt.",
        },
        {
          title: "Du willst Agenten, die über eine Rolle definiert sind?",
          text: "CrewAI-Agenten haben Rolle, Ziel und Backstory; Paperclip hat ein Organigramm mit Titeln und Stellenbeschreibungen; Crewmark gibt jedem KI-Mitarbeiter eine Rolle, KPIs und Projekte.",
        },
        {
          title: "Du brauchst geplante Läufe?",
          text: "LangGraph hat Cron-Jobs auf LangSmith Agent Server; für die Bibliothek allein ist das nicht angegeben. CrewAI hat Cron-Zeitplanung auf AMP. OpenClaw und Hermes Agent haben eingebaute Scheduler, Paperclip führt Routinen aus, und Crewmark hat einen Heartbeat und wiederkehrende Issues.",
        },
        {
          title: "Du achtest auf die Kosten?",
          text: "Die Open-Source-Frameworks sind kostenlos, und du bezahlst die Modellaufrufe. Cron-Jobs in LangGraph senden bei jedem Lauf dieselbe Eingabe, und die Doku von LangChain rät, ungenutzte zu löschen, weil wiederkehrende Läufe LLM-API-Kosten verursachen können. Paperclip hat Budgets mit harten Stopps; Crewmark nutzt dein eigenes Abo für Claude Code oder Codex.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "LangGraph baut Agenten in deine App ein. Crewmark lässt deine Coding-Agenten als Team arbeiten.",
      text: [
        "Crewmark ist kein Framework, und du schreibst keinen Graph. Es ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, KPIs und Projekten. Er wacht während seiner Arbeitszeit per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board, und wenn er ein Review oder eine Erlaubnis braucht, setzt er das Issue auf „Handlungsbedarf“ und fragt dort.",
        "Crewmark ist Open Source unter GPL-3.0 und kostenlos für 1 Projekt mit bis zu 3 KI-Mitarbeitern. Deinen Agentenanbieter bezahlst du wie gewohnt weiter, und dein Computer muss für die Heartbeats eingeschaltet bleiben. Die Pläne stehen auf der [Preisseite](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Beginne mit den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder Datenanalyst, und schreib seine KPIs und Projekte auf.",
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
    title: "Ein Team aus Agenten, ohne einen Graph zu schreiben",
    text: "Crewmark weckt deine Claude-Code- oder Codex-Session per Heartbeat und gibt ihr das nächste Issue von einem gemeinsamen Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu LangGraph-Alternativen",
    items: [
      {
        q: "Welche Open-Source-Alternativen zu LangGraph gibt es?",
        a: "Das Framework von CrewAI, AutoGen (laut dessen README archiviert und von Microsoft nicht mehr gepflegt), OpenClaw, Hermes Agent und Paperclip sind alle MIT-lizenziert. Crewmark ist Open Source unter GPL-3.0. Claude Code, das Agent Teams ausführt, ist nicht Open Source.",
      },
      {
        q: "Ist LangGraph kostenlos?",
        a: "Das Framework ist kostenlos unter MIT. Die Plattform LangSmith von LangChain hat einen Developer-Plan für $0 pro Platz im Monat (1 Platz, bis zu 5k Basis-Traces im Monat, danach nutzungsbasiert, kein Agent Server), Plus für $39 pro Platz im Monat mit einem enthaltenen Small Agent Server und Enterprise mit individuellen Preisen. Mehr unter [LangGraph-Preise](/pricing/langgraph).",
      },
      {
        q: "LangGraph vs CrewAI: Was ist der Unterschied?",
        a: "LangGraph ist Low-Level: Du baust einen Graph aus State, Nodes und Edges, und es gibt kein eingebautes Rollenkonzept. CrewAI definiert jeden Agenten über Rolle, Ziel und Backstory und fasst sie zu Crews zusammen, mit Flows für die schrittweise Steuerung. Beide Frameworks sind MIT-lizenziert. CrewAI ist ein Python-Framework; LangGraph gibt es für Python und JS/TS. Siehe [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      },
      {
        q: "Brauche ich LangChain, um LangGraph zu nutzen?",
        a: "Nein. In der Doku von LangChain heißt es: „LangGraph setzt LangChain nicht voraus.“ („LangGraph does not require LangChain.“) Beispiele nutzen oft Modell-Integrationen von LangChain, aber LangGraph funktioniert mit allen Modellen, die dein Code aufruft.",
      },
      {
        q: "Ist AutoGen 2026 noch eine Alternative zu LangGraph?",
        a: "Laut README ist das Projekt „archiviert und wird von Microsoft nicht mehr aktiv gepflegt“ („has been archived and is no longer actively maintained by Microsoft“), und es rät vom Einsatz in Produktion ab. Microsoft verweist neue Nutzer auf Microsoft Agent Framework, das es den direkten Nachfolger von AutoGen nennt. Siehe [AutoGen-Alternativen](/alternatives/autogen).",
      },
      {
        q: "Welche LangGraph-Alternativen führen Agenten nach Zeitplan aus?",
        a: "OpenClaw (Automations), Hermes Agent (ein eingebauter Cron-Scheduler), Paperclip (Routinen per Cron, Webhook oder API) und Crewmark (ein Heartbeat in der Arbeitszeit und wiederkehrende Issues). CrewAI plant auf seiner Plattform AMP, und Claude Code hat geplante Aufgaben, getrennt von Agent Teams. LangGraph selbst führt Cron-Jobs auf LangSmith Agent Server aus.",
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
    "Crewmark ist ein unabhängiges Produkt, das weder mit LangChain noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
