import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker: Andrew Ngs Open-Source-KI-Kollege, Einrichtung, SDK",
    description:
      "OpenWorker, Andrew Ngs Open-Source-KI-Kollege auf GitHub: eine Desktop-App mit deinem eigenen Modell, Freigaben und Zeitplänen, dazu ein Harness SDK.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Open Source",
    title: "OpenWorker: Andrew Ngs Open-Source-KI-Kollege und wie du ihn einrichtest",
    lead: "OpenWorker ist eine Open-Source-Desktop-App, die ihre README „einen KI-Kollegen für deine tägliche Arbeit“ („an AI coworker for your everyday work“) nennt, plus ein Harness SDK in TypeScript und Rust, mit dem du eigene agentische Apps baust. Das Repository liegt unter Andrew Ngs GitHub-Konto, nutzt die MIT-Lizenz und hatte am 13. November 2026 etwa 19.050 Sterne. Die App läuft auf deinem Rechner mit deinem eigenen Modell-Key oder einem lokalen Modell, fragt, bevor sie handelt, und protokolliert jeden Tool-Aufruf. Hier erfährst du, was sie kann, was sie kostet, wie du sie einrichtest, wie Freigaben funktionieren und wie sie sich von OpenBot, Suparagent und Claude Cowork unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was OpenWorker ist",
      points: [
        "Eine Desktop-App für die tägliche Arbeit: Recherche, Schreiben, Code-Reviews und Aufgaben in deinen Tools. Sie ist in offener Beta.",
        "Sie läuft auf deinem Rechner: Agent-Loop, Unterhaltungen, Connector-Tokens und Modell-Keys bleiben dort. Der einzige Cloud-Teil ist ein kleiner Dienst, der die OAuth-Anmeldung für Connectoren vermittelt.",
        "Du wählst das Modell: OpenAI, Anthropic, Google Gemini, OpenRouter und andere Anbieter mit deinem eigenen Key oder lokale Modelle über Ollama, LM Studio, llama.cpp oder vLLM. Die Agent-Engine ist in Python geschrieben und baut auf aisuite auf, Andrew Ngs Bibliothek.",
        "Spezialisierte KI-Kollegen bringen die Tools und Anweisungen für einen bestimmten Job mit; den Anfang machen Kollegen für Security.",
        "Connectoren: GitHub, Slack, E-Mail und Kalender unter mehr als 25, plus MCP. Erwähne @OpenWorker in Slack, und die Aufgabe läuft auf deinem Desktop, mit der Antwort im Thread.",
        "Zeitpläne: Morgen-Briefings, Wochenberichte und andere wiederholbare Aufgaben laufen nach Zeitplan, mit Transkripten zum Prüfen.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenWorker auf GitHub und das Harness SDK",
      text: [
        `Der Code liegt unter [github.com/andrewyng/openworker](${repo}). Das Repository wurde am 20. Juli 2026 angelegt, seine MIT-LICENSE nennt Andrew Ng als Rechteinhaber, und es hatte am 13. November 2026 etwa 19.050 Sterne.`,
      ],
      points: [
        "Harness SDK: ein SDK in TypeScript und Rust im selben Repository, mit dem du eigene agentische Desktop- oder Web-Apps baust.",
        "Sub-Agents und Teams: Das SDK unterstützt beides; für die Desktop-App ist das nicht angegeben.",
        "Deployment: Apps, die auf dem SDK aufbauen, können auf Kubernetes in AWS, Azure oder Google Cloud laufen.",
        "Beiträge: Die Maintainer schreiben, dass sie Pull Requests für Funktionen, die schon in Entwicklung sind oder nicht in ihre Pläne passen, eventuell nicht annehmen.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker: Preise und Lizenz",
      text: [
        "Weder die README noch openworker.com nennt einen Preis, geprüft am 13. November 2026. Du bringst deinen eigenen Modell-Key mit, den dein Anbieter abrechnet, oder lässt ein lokales Modell laufen.",
      ],
      headers: ["Teil", "Was du bezahlst"],
      rows: [
        ["Desktop-App (offene Beta)", "Kein Preis angegeben; MIT-Lizenz"],
        ["Harness SDK (TypeScript, Rust)", "Kein Preis angegeben; MIT-Lizenz, selbes Repository"],
        ["Cloud-Modell: OpenAI, Anthropic, Google Gemini, OpenRouter oder ein anderer Anbieter", "Wird von diesem Anbieter abgerechnet, über deinen eigenen Key"],
        ["Lokales Modell: Ollama, LM Studio, llama.cpp oder vLLM", "Läuft auf deinem eigenen Rechner"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du OpenWorker ein",
      steps: [
        {
          title: "Lade die Desktop-App herunter",
          text: "Sie läuft unter macOS 12 oder neuer auf Apple Silicon (signiert und notarisiert) und unter Windows 10 oder 11 auf x64. Windows-Builds sind noch nicht code-signiert, deshalb zeigt SmartScreen eine Warnung. Ein Download für Linux ist nicht gelistet.",
        },
        {
          title: "Füg ein Modell hinzu",
          text: "Gib deinen eigenen Key für OpenAI, Anthropic, Google Gemini, OpenRouter oder einen anderen Anbieter ein oder nutz ein lokales Modell über Ollama, LM Studio, llama.cpp oder vLLM. Keys bleiben auf deinem Rechner.",
        },
        {
          title: "Verbinde deine Tools",
          text: "Füg Connectoren wie GitHub, Slack, E-Mail und Kalender oder MCP-Server hinzu. Die Anmeldung läuft über einen kleinen Cloud-Dienst, der OAuth vermittelt; die Tokens bleiben auf deinem Rechner.",
        },
        {
          title: "Leg fest, was dein OK braucht",
          text: "Aktionen warten standardmäßig auf Freigabe. Mach aus einmaligen Freigaben dauerhafte Regeln und Allowlists oder schalte Auto-Approve ein, bei dem ein Prüfmodell entscheidet und an dich eskaliert, wenn es unsicher ist.",
        },
        {
          title: "Plane die wiederkehrende Arbeit",
          text: "Richte Morgen-Briefings, Wochenberichte und andere wiederholbare Aufgaben ein. Unbeaufsichtigte Läufe geben sich nie selbst frei: Ihre Fragen warten in einem Posteingang, und jeder Lauf hinterlässt ein Transkript zum Prüfen.",
        },
      ],
      source: { label: "Quelle: OpenWorker-README auf GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei OpenWorker die Kontrolle behältst: Freigaben, Prüfung und Audit",
      points: [
        "Freigabe als Standard: Aktionen warten auf dein OK, und bestimmte gefährliche Operationen bleiben immer bei einem Menschen.",
        "Regeln, die du aufbaust: Aus einer einmaligen Freigabe kann eine dauerhafte Regel oder ein Allowlist-Eintrag werden.",
        "Optionales Auto-Approve: Ein Prüfmodell übernimmt Freigaben, eskaliert an dich, wenn es unsicher ist, und hat einen Circuit Breaker.",
        "Ein Audit-Trail: Jeder Tool-Aufruf wird mit der Art seiner Freigabe protokolliert, und die App markiert Aktionen, bei denen Daten den Mac verlassen („Leaves this Mac“).",
        "Sandboxing: Befehle können in einer NVIDIA-OpenShell-Sandbox oder in der eingebauten Sandbox von macOS oder Windows laufen.",
        "Geplante Läufe geben sich nie selbst frei; alles, was sie von dir brauchen, wartet in einem Posteingang.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent und Claude Cowork",
      text: [
        "Angaben aus der README jedes Projekts oder von den eigenen Seiten des Anbieters, geprüft am 13. November 2026, mit GitHub-Sternen vom selben Tag. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker).",
        "Guides: [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["Hersteller", "Andrew Ng (andrewyng auf GitHub)", "CopilotKit", "Anil-matcha auf GitHub", "Anthropic"],
        ["Open Source", "MIT; etwa 19.050 Sterne", "MIT-Template, CopilotKit Intelligence separat lizenziert; etwa 11.652 Sterne", "Apache 2.0; etwa 7.050 Sterne", "Nein"],
        ["Wo es läuft", "Dein Computer (macOS, Windows); ein kleiner Cloud-Dienst vermittelt die Connector-Anmeldung", "Desktop-App (Mac, Windows, Docker-Backend) oder Kubernetes; gehostet im Early Access", "Desktop-App, selbst gehosteter Linux-Server oder gehostete Web-App", "Anthropics Cloud; lokale Arbeit über Claude Desktop"],
        ["Modelle", "Dein eigener Key für OpenAI, Anthropic, Gemini, OpenRouter und andere oder ein lokales Modell", "OpenAI, Claude, Gemini oder offene Modelle; deine eigenen Agenten über AG-UI", "Engines wie Claude Code, Codex, Gemini CLI und Cursor; kein Modell enthalten", "Claude-Modelle"],
        ["Preis", "Kein Preis angegeben; eigenes Modell mitbringen", "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat", "Keine Gebühr fürs Selbsthosten angegeben; gehostete Pläne $0 bis $99 im Monat", "Bezahlte Claude-Pläne; Pro kostet $20 im Monat"],
        ["Wiederkehrende Arbeit", "Geplante Briefings, Berichte und andere wiederholbare Aufgaben", "Routinen, ausgeführt von einem Routine-Worker", "Routinen nach Zeitplan, per Webhook oder bei Bedarf", "Stündlich, täglich, wöchentlich oder werktags, in der Cloud"],
        ["Freigaben", "Standardmäßig an; optionales Prüfmodell", "Vor Aktionen; Audit in der Team-Edition", "Ask first, Accept edits, Approve for me oder Plan only", "Manual, Auto oder Skip"],
        ["Aufgaben-Board", "Keine Angabe", "Keine Angabe", "Aufgaben-Board und Kalender", "Kein Issue-Board; eine Aufgabenliste und die Seite Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Kollege auf deinem Desktop. KI-Mitarbeiter auf einem Board.",
      text: [
        "OpenWorker ist ein KI-Kollege, den du auf deinem eigenen Rechner betreibst. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen, sodass wiederkehrende Entwicklungs-, SEO- und Marketingarbeit aufgegriffen und nachverfolgt wird.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an und leg die Ziele in Zahlen fest." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues auf dem gemeinsamen Board zu; während seiner Arbeitszeit weckt der Heartbeat den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenWorker einrichten" },
  mid: {
    title: "Du willst KI-Mitarbeiter, die Issues von einem Board nehmen?",
    text: "Crewmark gibt deinen Sessions in Claude Code oder Codex eine Rolle, Arbeitszeiten, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu OpenWorker",
    items: [
      {
        q: "Was ist OpenWorker?",
        a: "Eine Open-Source-Desktop-App, die ihre README „einen KI-Kollegen für deine tägliche Arbeit“ („an AI coworker for your everyday work“) nennt, plus ein Harness SDK, mit dem du eigene agentische Apps baust. Sie läuft auf deinem Rechner mit deinem eigenen Modell-Key oder einem lokalen Modell, bittet vor Aktionen um Freigabe und kann Aufgaben nach Zeitplan ausführen. Die Desktop-App ist in offener Beta.",
      },
      {
        q: "Ist OpenWorker von Andrew Ng?",
        a: "Das Repository ist github.com/andrewyng/openworker, unter Andrew Ngs GitHub-Konto, und seine LICENSE nennt Andrew Ng als Rechteinhaber. Die Engine der App baut auf aisuite auf, seiner Bibliothek. Im Footer von openworker.com steht „© 2026 OpenWorker“.",
      },
      {
        q: "Ist OpenWorker kostenlos und Open Source?",
        a: "Es ist Open Source unter der MIT-Lizenz, und weder die README noch openworker.com nennt einen Preis. Du bringst deinen eigenen Modell-Key mit, den dein Anbieter abrechnet, oder lässt ein lokales Modell über Ollama, LM Studio, llama.cpp oder vLLM laufen.",
      },
      {
        q: "Was ist das Harness SDK von OpenWorker?",
        a: "Ein SDK in TypeScript und Rust im selben Repository, mit dem du eigene agentische Desktop- oder Web-Apps baust. Es unterstützt Sub-Agents und Teams, und Apps, die darauf aufbauen, können auf Kubernetes in AWS, Azure oder Google Cloud laufen.",
      },
      {
        q: "Läuft OpenWorker unter Mac, Windows und Linux?",
        a: "Es läuft unter macOS 12 oder neuer auf Apple Silicon und unter Windows 10 oder 11 auf x64. Windows-Builds sind noch nicht code-signiert, deshalb zeigt SmartScreen eine Warnung. Ein Download für Linux ist nicht gelistet.",
      },
      {
        q: "Wo liegen die Grenzen von OpenWorker?",
        a: "Die Desktop-App ist in offener Beta, Windows-Builds sind noch nicht code-signiert, und die Maintainer schreiben, dass sie Pull Requests für Funktionen, die schon in Entwicklung sind oder nicht in ihre Pläne passen, eventuell nicht annehmen.",
      },
    ],
  },
  cta: {
    title: "Hol dir einen Kollegen auf den Desktop. Und gib auch deinen Coding-Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit der OpenWorker-README auf GitHub und openworker.com abgeglichen; Vergleichsangaben von den eigenen Seiten jedes Produkts, am selben Tag.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Andrew Ng oder OpenWorker, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
