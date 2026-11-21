import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent: Open-Source-Workspace für KI-Kollegen, Preise, Setup",
    description:
      "Suparagent ist ein Open-Source-Workspace für KI-Kollegen auf Claude Code, Codex, Gemini CLI oder Cursor. Was es ist, Preise, Einrichtung und Vergleiche.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Open Source",
    title: "Suparagent: ein Open-Source-Workspace für KI-Kollegen",
    lead: "Suparagent ist ein quelloffener „Workspace für KI-Kollegen“ („workspace for AI coworkers“). Du legst benannte Agenten an, jeder mit Job, Workspace, Gedächtnis, Routinen und Freigabe-Einstellungen, und sie laufen auf einer Engine, die du schon nutzt, etwa Claude Code, Codex, Gemini CLI oder Cursor. Suparagent läuft als Desktop-App oder auf deinem eigenen Server; ein gehosteter Dienst unter suparagent.ai ist ein separates Produkt. Die App hieß zuerst Open Dots, dann Open Duet, und bekam am 9. November 2026 mit Version 0.8.5 den Namen Suparagent.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Suparagent ist",
      points: [
        "Benannte Kollegen: Jeder Agent hat Namen, Rolle, Engine, Workspace, Gedächtnis und Freigabe-Einstellungen, mit Vorlagen und Skills als Ausgangspunkt.",
        "Engines, die du schon nutzt: Claude Code oder Codex CLI, Gemini CLI, Google Gemini über Antigravity, Cursor, andere CLI-Agenten über das Agent Client Protocol (ACP), OpenRouter oder OpenAI-kompatible APIs wie Ollama oder LM Studio. Ein Modell ist nicht enthalten.",
        "Arbeit und Zeitpläne: ein Aufgaben-Board und ein Kalender, um Arbeit zuzuweisen, einmalige Läufe zu planen und Versuche zu prüfen, dazu Routinen, die nach Zeitplan, per Webhook oder bei Bedarf laufen, solange das Backend läuft.",
        "Teams von Agenten: Ein Lead-Agent (Claude oder Codex) delegiert an Spezialisten, und Agenten stimmen sich in gemeinsamen Räumen ab.",
        "Freigaben: Ask first, Accept edits, Approve for me (Claude, Codex und Cursor) und Plan only. Eine Routine gibt nie selbst eine Aktion frei, und die Ansicht Today sammelt Freigaben, Fragen und Ergebnisse von Routinen.",
        `Open Source unter Apache 2.0 unter [github.com/Anil-matcha/suparagent](${repo}), mit etwa 7.050 Sternen am 13. November 2026, in einem Repository, das im Mai 2023 angelegt wurde. Das Projekt ist früh und im Wandel: Der selbst gehostete Server, Docker-Computer, Browser-Tools und die native Desktop-Vorschau für macOS sind experimentell.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent: Preise",
      text: [
        "Für die Desktop-App oder einen selbst gehosteten Server ist keine Suparagent-Gebühr angegeben. Gehostete Pläne laut README am 13. November 2026, in US-Dollar. In jedem Plan bringst du dein eigenes Konto bei einem KI-Anbieter mit.",
      ],
      headers: ["Plan", "Preis", "Enthält"],
      rows: [
        ["Desktop-App oder selbst gehosteter Server", "Keine Suparagent-Gebühr angegeben", "Deine eigene Engine; du bezahlst deinen Modellanbieter"],
        ["Gehostet: Free Preview", "$0", "Sandbox-Rechenleistung, abgerechnet über dein Boat-Konto"],
        ["Gehostet: Starter", "$15/Monat", "100 Rechenstunden, 51 GB"],
        ["Gehostet: Standard", "$49/Monat", "300 Rechenstunden, 51 GB"],
        ["Gehostet: Pro", "$99/Monat", "720 Rechenstunden, 111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Suparagent ein",
      steps: [
        {
          title: "Wähl aus, wo es läuft",
          text: "Starte die Desktop-App aus einem Source-Checkout (die Installer unter GitHub Releases sind experimentell und unsigniert), richte einen selbst gehosteten Linux-Server ein oder nutz die gehostete Web-App unter suparagent.ai.",
        },
        {
          title: "Leg einen Agenten an",
          text: "Gib ihm einen Namen, eine Rolle, eine Engine wie Claude Code, Codex, Gemini CLI oder Cursor, einen Workspace und einen Freigabemodus, oder starte mit einer Vorlage.",
        },
        {
          title: "Gib ihm Arbeit",
          text: "Weise Aufgaben auf dem Board zu oder lass Routinen nach Zeitplan, per Webhook oder bei Bedarf laufen; das Backend muss dafür weiterlaufen. Freigaben, Fragen und Ergebnisse sammeln sich in der Ansicht Today.",
        },
      ],
      source: { label: "Quelle: Suparagent-README auf GitHub", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot und Claude Cowork",
      text: [
        "Angaben aus der README jedes Projekts oder von den eigenen Seiten des Anbieters, geprüft am 13. November 2026, mit GitHub-Sternen vom selben Tag. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker).",
        "Guides: [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["Hersteller", "Anil-matcha auf GitHub", "Andrew Ng (andrewyng auf GitHub)", "CopilotKit", "Anthropic"],
        ["Open Source", "Apache 2.0; etwa 7.050 Sterne", "MIT; etwa 19.050 Sterne", "MIT-Template, CopilotKit Intelligence separat lizenziert; etwa 11.652 Sterne", "Nein"],
        ["Wo es läuft", "Desktop-App, selbst gehosteter Linux-Server oder gehostete Web-App", "Dein Computer (macOS, Windows); ein kleiner Cloud-Dienst vermittelt die Connector-Anmeldung", "Desktop-App (Mac, Windows, Docker-Backend) oder Kubernetes; gehostet im Early Access", "Anthropics Cloud; lokale Arbeit über Claude Desktop"],
        ["Modelle", "Engines wie Claude Code, Codex, Gemini CLI und Cursor; kein Modell enthalten", "Dein eigener Key für OpenAI, Anthropic, Gemini, OpenRouter und andere oder ein lokales Modell", "OpenAI, Claude, Gemini oder offene Modelle; deine eigenen Agenten über AG-UI", "Claude-Modelle"],
        ["Preis", "Keine Gebühr fürs Selbsthosten angegeben; gehostete Pläne $0 bis $99 im Monat", "Kein Preis angegeben; eigenes Modell mitbringen", "Kostenlos für persönliche Projekte; Business bis zu $29 pro aktivem Nutzer im Monat", "Bezahlte Claude-Pläne; Pro kostet $20 im Monat"],
        ["Aufgaben-Board", "Aufgaben-Board und Kalender", "Keine Angabe", "Keine Angabe", "Kein Issue-Board; eine Aufgabenliste und die Seite Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "KI-Mitarbeiter mit Zielen, Arbeitszeiten und einem Heartbeat",
      text: [
        "Suparagent lässt benannte Kollegen auf der Engine deiner Wahl laufen. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an und leg die Ziele in Zahlen fest." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues auf dem gemeinsamen Board zu; während seiner Arbeitszeit weckt der Heartbeat den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Suparagent einrichten" },
  mid: {
    title: "Du willst KI-Mitarbeiter auf den Coding-Agenten, die du schon nutzt?",
    text: "Crewmark gibt deinen Sessions in Claude Code oder Codex eine Rolle, Arbeitszeiten, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Suparagent",
    items: [
      {
        q: "Was ist Suparagent?",
        a: "Ein Open-Source-Workspace für KI-Kollegen. Du legst benannte Agenten mit Rolle, Gedächtnis, Routinen und Freigabe-Einstellungen an, und sie laufen auf einer Engine, die du schon nutzt, etwa Claude Code, Codex, Gemini CLI oder Cursor. Bis zur Umbenennung am 9. November 2026 hieß es zuerst Open Dots, dann Open Duet.",
      },
      {
        q: "Ist Suparagent kostenlos?",
        a: "Der Code steht unter Apache 2.0, und für die Desktop-App oder einen selbst gehosteten Server ist keine Suparagent-Gebühr angegeben; du bezahlst deinen Modellanbieter. Die README nennt gehostete Pläne: eine Free Preview für $0 (Sandbox-Rechenleistung, abgerechnet über dein Boat-Konto), Starter für $15 im Monat, Standard für $49 und Pro für $99.",
      },
      {
        q: "Mit welchen KI-Agenten arbeitet Suparagent?",
        a: "Claude Code oder Codex CLI, Gemini CLI, Google Gemini über Antigravity, Cursor, andere CLI-Agenten über das Agent Client Protocol (ACP), OpenRouter und OpenAI-kompatible APIs wie Ollama oder LM Studio. Der Lead-Agent eines Teams muss Claude oder Codex sein, und verbundene Apps funktionieren nur mit Claude- und Codex-Agenten.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten einen Job, nicht nur einen Prompt.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit der Suparagent-README, dem Changelog und der Lizenz auf GitHub sowie suparagent.ai abgeglichen; Vergleichsangaben von den eigenen Seiten jedes Produkts, am selben Tag.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zum Suparagent-Projekt oder zu Vadoo Internet Services Private Limited, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
