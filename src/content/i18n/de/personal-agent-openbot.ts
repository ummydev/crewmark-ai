import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot: CopilotKits Open-Source-KI-Kollegen, Preise, Einrichtung",
    description:
      "OpenBot ist CopilotKits selbst hostbarer Open-Source-Workspace für KI-Kollegen. Was er kann, Preise für OpenBot for Business, Setup, GitHub und vs Grok Bot.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Open Source",
    title: "OpenBot: CopilotKits Open-Source-Workspace für KI-Kollegen",
    lead: "OpenBot ist CopilotKits selbst hostbarer Open-Source-Workspace für KI-Kollegen. Jeder Bot bekommt einen eigenen Computer mit Browser, Dateien und Tools und arbeitet mit Freigaben und einem Aktivitätsprotokoll. Du betreibst ihn als Desktop-App auf deinem Laptop oder für ein Team auf Kubernetes, bringst deine eigenen Modelle mit und kannst Agenten, die du schon gebaut hast, über AG-UI anbinden. Hier erfährst du, was er kann, was OpenBot for Business kostet, wie du ihn einrichtest, wie du die Kontrolle behältst und wie er sich von anderen KI-Kollegen unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was OpenBot ist",
      points: [
        "Ein Computer pro Bot: Jeder Bot hat einen eigenen Browser, eigene Dateien und Tools, dazu Unterhaltungen, Routinen, Gedächtnis, Skills, Apps, Freigaben und Aktivität.",
        "Wo er läuft: als Desktop-App für Mac und Windows mit Docker-Backend auf deinem Laptop oder für ein Team auf Kubernetes per Helm. Eine von CopilotKit gehostete Version ist im Early Access.",
        "Deine Modelle: OpenAI, Claude, Gemini oder offene Modelle über einen OpenAI-kompatiblen Endpunkt. Die Modellanbieter bezahlst du direkt.",
        "Deine Agenten: Nutz die eingebauten Bots oder binde Agenten, die du mit anderen Stacks gebaut hast, über AG-UI an.",
        "Routinen: wiederkehrende Arbeit, ausgeführt von einem Routine-Worker.",
        "Tools und Frontends: MCP-Tools sowie Frontends für Mac, Windows, Web, iOS, Android, Slack und Teams, einige davon im Early Access.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenBot auf GitHub und CopilotKit Intelligence",
      text: [
        `Der Code liegt unter [github.com/CopilotKit/OpenBot](${repo}). Das Repository wurde am 17. August 2026 angelegt und hatte am 13. November 2026 etwa 11.652 Sterne.`,
      ],
      points: [
        "Das Anwendungs-Template ist MIT-lizenziert, du kannst es also selbst hosten und anpassen.",
        "Es nutzt CopilotKit Intelligence, das eine eigene Lizenz hat: eine kostenlose lokale Lizenz auf einem Laptop und eine Test- oder Produktionslizenz auf Kubernetes.",
        "Für den Produktivbetrieb auf Kubernetes brauchst du über die Evaluierung hinaus eine Lizenz für CopilotKit Intelligence.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot: Preise und OpenBot for Business",
      text: [
        "Laut open.bot/pricing am 13. November 2026, in US-Dollar. In jedem Plan bezahlst du die Modellanbieter direkt.",
      ],
      headers: ["Plan oder Lizenz", "Preis"],
      rows: [
        ["Persönliche Projekte", "Kostenlos"],
        ["OpenBot for Business, nutzungsbasiert", "Bis zu $29 pro aktivem Nutzer im Monat, plus 5 % der monatlichen Modellausgaben über $5.000"],
        ["Jährlich", "Individuell"],
        ["CopilotKit Intelligence", "Kostenlose lokale Lizenz auf einem Laptop; Test- oder Produktionslizenz auf Kubernetes"],
        ["Modelle", "Direkt an die Modellanbieter bezahlt"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du OpenBot ein",
      steps: [
        {
          title: "Wähl aus, wo er läuft",
          text: "Auf deinem Laptop die Desktop-App für Mac oder Windows, die mit einem Docker-Backend läuft. Für ein Team Kubernetes per Helm. Eine von CopilotKit gehostete Version ist im Early Access.",
        },
        {
          title: "Verbinde deine Modelle",
          text: "Nutz OpenAI, Claude, Gemini oder offene Modelle über einen OpenAI-kompatiblen Endpunkt. Die Anbieter bezahlst du direkt.",
        },
        {
          title: "Wähl einen Bot oder bring einen Agenten mit",
          text: "Starte mit einem eingebauten Bot oder binde einen Agenten, den du schon gebaut hast, über AG-UI an. Jeder Bot bekommt einen eigenen Computer mit Browser, Dateien und Tools.",
        },
        {
          title: "Füg Tools und Routinen hinzu",
          text: "Gib Bots MCP-Tools und richte Routines für wiederkehrende Arbeit ein; ein Routine-Worker führt sie aus.",
        },
        {
          title: "Erreiche ihn dort, wo du arbeitest",
          text: "Frontends gibt es für Mac, Windows, Web, iOS, Android, Slack und Teams; einige sind im Early Access.",
        },
      ],
      source: { label: "Quelle: OpenBot-README auf GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei OpenBot die Kontrolle behältst",
      points: [
        "Freigaben: Bots fragen vor Aktionen.",
        "Aktivität: Jeder Bot führt ein Aktivitätsprotokoll.",
        "Team-Edition: Firmen-Login, Rollen, Tool-Berechtigungen und Audit.",
        "Selbsthosting: Er läuft auf deinem Laptop oder deinem eigenen Kubernetes-Cluster, mit den Modellanbietern deiner Wahl.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent und Claude Cowork",
      text: [
        "Angaben aus der README jedes Projekts oder von den eigenen Seiten des Anbieters, geprüft am 13. November 2026, mit GitHub-Sternen vom selben Tag. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker); zu Grok Bot siehe [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "Guides: [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["Hersteller", "CopilotKit", "Andrew Ng (andrewyng auf GitHub)", "Anil-matcha auf GitHub", "Anthropic"],
        ["Open Source", "MIT-Template, CopilotKit Intelligence separat lizenziert; etwa 11.652 Sterne", "MIT; etwa 19.050 Sterne", "Apache 2.0; etwa 7.050 Sterne", "Nein"],
        ["Wo es läuft", "Desktop-App (Mac, Windows, Docker-Backend) oder Kubernetes; gehostet im Early Access", "Dein Computer (macOS, Windows); ein kleiner Cloud-Dienst vermittelt die Connector-Anmeldung", "Desktop-App, selbst gehosteter Linux-Server oder gehostete Web-App", "Anthropics Cloud; lokale Arbeit über Claude Desktop"],
        ["Modelle", "OpenAI, Claude, Gemini oder offene Modelle; deine eigenen Agenten über AG-UI", "Dein eigener Key für OpenAI, Anthropic, Gemini, OpenRouter und andere oder ein lokales Modell", "Engines wie Claude Code, Codex, Gemini CLI und Cursor; kein Modell enthalten", "Claude-Modelle"],
        ["Preis", "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat", "Kein Preis angegeben; eigenes Modell mitbringen", "Keine Gebühr fürs Selbsthosten angegeben; gehostete Pläne $0 bis $99 im Monat", "Bezahlte Claude-Pläne; Pro kostet $20 im Monat"],
        ["Wiederkehrende Arbeit", "Routinen, ausgeführt von einem Routine-Worker", "Geplante Briefings, Berichte und andere wiederholbare Aufgaben", "Routinen nach Zeitplan, per Webhook oder bei Bedarf", "Stündlich, täglich, wöchentlich oder werktags, in der Cloud"],
        ["Freigaben", "Vor Aktionen; Audit in der Team-Edition", "Standardmäßig an; optionales Prüfmodell", "Ask first, Accept edits, Approve for me oder Plan only", "Manual, Auto oder Skip"],
        ["Aufgaben-Board", "Keine Angabe", "Keine Angabe", "Aufgaben-Board und Kalender", "Kein Issue-Board; eine Aufgabenliste und die Seite Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Bots in deinem Workspace. KI-Mitarbeiter auf deinen Coding-Agenten.",
      text: [
        "OpenBot gibt jedem Bot einen eigenen Computer in einem Workspace, den du hostest. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an und leg die Ziele in Zahlen fest." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues auf dem gemeinsamen Board zu; während seiner Arbeitszeit weckt der Heartbeat den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenBot einrichten" },
  mid: {
    title: "Du willst KI-Mitarbeiter auf den Coding-Agenten, die du schon nutzt?",
    text: "Crewmark gibt deinen Sessions in Claude Code oder Codex eine Rolle, Arbeitszeiten, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu OpenBot",
    items: [
      {
        q: "Was ist OpenBot?",
        a: "CopilotKits selbst hostbarer Open-Source-Workspace für KI-Kollegen. Jeder Bot bekommt einen eigenen Computer mit Browser, Dateien und Tools, dazu Freigaben und ein Aktivitätsprotokoll. Er läuft als Desktop-App auf deinem Laptop oder für ein Team auf Kubernetes, mit den Modellen, die du mitbringst.",
      },
      {
        q: "Ist OpenBot von CopilotKit?",
        a: "Ja. Er liegt unter github.com/CopilotKit/OpenBot. Er nutzt CopilotKit Intelligence, das getrennt vom MIT-Template von OpenBot lizenziert ist, und bindet bestehende Agenten über AG-UI an.",
      },
      {
        q: "Ist OpenBot kostenlos und Open Source?",
        a: "Das Anwendungs-Template ist MIT-lizenziert, und OpenBot ist für persönliche Projekte kostenlos. CopilotKit Intelligence, das er nutzt, hat eine kostenlose lokale Lizenz auf einem Laptop und eine Test- oder Produktionslizenz auf Kubernetes. Die Modellanbieter bezahlst du direkt.",
      },
      {
        q: "Was kostet OpenBot for Business?",
        a: "Nutzungsbasiert bis zu $29 pro aktivem Nutzer im Monat, plus 5 % der monatlichen Modellausgaben über $5.000; jährliche Preise sind individuell. Für den Produktivbetrieb auf Kubernetes brauchst du über die Evaluierung hinaus außerdem eine Lizenz für CopilotKit Intelligence.",
      },
      {
        q: "OpenBot vs Grok Bot: Was ist der Unterschied?",
        a: "OpenBot ist Open Source und selbst hostbar: Du betreibst ihn auf deinem Laptop oder auf Kubernetes und bringst deine eigenen Modelle oder Agenten mit. Einen direkten Vergleich mit Grok Bot findest du unter [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
      },
      {
        q: "Wo finde ich OpenBot auf GitHub?",
        a: "Unter github.com/CopilotKit/OpenBot. Das Repository wurde am 17. August 2026 angelegt und hatte am 13. November 2026 etwa 11.652 Sterne.",
      },
    ],
  },
  cta: {
    title: "Hoste deine Bots. Und gib auch deinen Coding-Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit der OpenBot-README auf GitHub und open.bot/pricing abgeglichen; Vergleichsangaben von den eigenen Seiten jedes Produkts, am selben Tag.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu CopilotKit, das es auch nicht unterstützt. Produktnamen sind Marken ihrer Inhaber.",
};
