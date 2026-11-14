import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code (2026) | Crewmark AI",
    description:
      "Hermes Agent vs OpenClaw und wie beide im Vergleich zu Claude Code abschneiden: wofür jedes Tool gedacht ist, Modelle und Abos, Memory und Skills, Sicherheit und der Umstieg von OpenClaw auf Hermes. Aus den Docs der Projekte selbst.",
  },
  breadcrumb: "Hermes Agent vs OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Agenten",
    title: "Hermes Agent vs OpenClaw vs Claude Code: Welches brauchst du?",
    lead: "OpenClaw und Hermes Agent sind die zwei größten Open-Source-KI-Agenten für den persönlichen Einsatz: Beide laufen auf deinem eigenen Rechner und antworten dir in Telegram, Slack, WhatsApp und anderen Chat-Apps. OpenClaw hat die größere Community (rund 394.000 GitHub-Sterne); Hermes Agent von Nous Research (rund 261.000) ist um eine Lernschleife gebaut, die Erfahrung in Skills verwandelt. Claude Code ist eine andere Art Tool: ein Coding-Agent, der in deinem Repository arbeitet. Dieser Guide vergleicht die drei anhand ihrer eigenen Docs, damit du das richtige wählst, oder die richtige Kombination.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Die kurze Antwort",
      points: [
        "Nimm OpenClaw für die meisten Kanäle und Integrationen und die größte Community: Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal und über 20 weitere.",
        "Nimm Hermes Agent, wenn du einen Assistenten willst, der lernt: Er erstellt Skills aus Erfahrung, verbessert sie bei der Nutzung und pflegt ein kuratiertes Memory, mit eingebautem Cron-Scheduler.",
        "Nimm Claude Code für Softwarearbeit in einem Repository: Code lesen und ändern, Tests ausführen, Pull Requests öffnen.",
        "Du willst, dass Claude Code oder Codex ohne Prompt an einer Aufgabe weiterarbeiten, von einem Team-Board aus? Das ist ein KI-Mitarbeiter; mehr dazu am Ende dieser Seite.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent vs OpenClaw vs Claude Code",
      text: ["Laut README und Docs der jeweiligen Projekte und der GitHub-API, Stand 7. November 2026."],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["Entwickelt von", "Peter Steinberger und der Community; OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["Was es ist", "Persönlicher KI-Assistent in deinen Chat-Apps", "Sich selbst verbessernder persönlicher Agent mit Lernschleife", "Coding-Agent für dein Repository"],
        ["Wo du mit ihm sprichst", "Über 20 Chat-Kanäle, dazu Control UI, CLI und Apps", "Telegram, Discord, Slack, WhatsApp, Signal, E-Mail, CLI; Desktop-App", "Terminal, IDE, Desktop-App; Remote Control vom Smartphone"],
        ["Modelle", "Austauschbar: Claude, OpenAI und Codex, lokale Modelle", "Jeder Anbieter: Nous Portal, OpenRouter, OpenAI, eigene Endpunkte", "Claude-Modelle"],
        ["Claude-Abo", "API-Key oder vorhandener Claude-Code-Login auf demselben Rechner", "Nur Claude Max mit zugekaufter Extra-Nutzung; nicht Pro", "In den Claude-Plänen enthalten"],
        ["Memory und Skills", "Lokales Memory; Skills und Plugins auf ClawHub geteilt", "Vom Agenten kuratiertes Memory; erstellt und verbessert Skills (Standard agentskills.io)", "CLAUDE.md, Skills, Hooks, Subagenten"],
        ["Planung", "Gateway läuft als Daemon", "Eingebauter Cron-Scheduler", "`/loop` und geplante Aufgaben"],
        ["Isolation", "Tools laufen auf dem Host, solange du kein Sandboxing konfigurierst", "Freigabe für gefährliche Befehle; optional Docker oder Modal", "Berechtigungsmodi und -regeln; Sandboxing"],
        ["Lizenz, Sterne", "MIT, ~394k", "MIT, ~261k", "Kommerziell"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent vs OpenClaw: die echten Unterschiede",
      points: [
        "Lernen: Das Aushängeschild von Hermes ist die Lernschleife; nach komplexen Aufgaben schreibt er Skills und verfeinert sie. Die Stärke von OpenClaw ist die Breite: mehr Kanäle, Plugins auf ClawHub und native Apps für Desktop und Mobilgeräte.",
        "Sicherheit ab Werk: OpenClaw behandelt eingehende Nachrichten als nicht vertrauenswürdig und koppelt unbekannte Absender per Pairing, führt Tools in der Hauptsession aber auf dem Host aus, solange du kein Sandboxing einrichtest. Hermes fragt standardmäßig vor gefährlichen Befehlen nach und kann Tools in Docker oder Modal isolieren. OpenClaw veröffentlicht seine Sicherheitsfixes offen: 722 Advisories seit Januar 2026, alle kritischen behoben.",
        "Abos: OpenClaw kann einen lokalen Claude-Code-Login wiederverwenden; Hermes akzeptiert ein Claude-Abo nur mit Max und zugekaufter Extra-Nutzung, und beide unterstützen die Anmeldung mit ChatGPT/Codex.",
        "Governance: OpenClaw wird von der unabhängigen OpenClaw Foundation geführt, mit OpenAI als Spender; Hermes Agent wird von Nous Research entwickelt.",
        "Wechsel: Hermes hat einen Importer, der OpenClaw-Setups mit einem Befehl übernimmt (Persona, Erinnerungen, Skills und Messaging-Einstellungen).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So testest du beide, oder wechselst von OpenClaw zu Hermes",
      steps: [
        {
          title: "Installiere beide nebeneinander",
          text: "Beide installieren sich mit einem Befehl und betreiben ihr eigenes Gateway, du kannst sie also auf demselben Rechner mit verschiedenen Chat-Accounts testen.",
          code: install,
        },
        {
          title: "Verbinde zuerst nur einen Kanal",
          text: "Starte mit einer einzigen Chat-App und lass nur deinen eigenen Account zu; beide koppeln unbekannte Absender per Pairing oder filtern sie per Allowlist.",
        },
        {
          title: "Sieh dir die Migration vorab an",
          text: "`hermes import-agent openclaw --dry-run` zeigt, was übernommen würde; füg `--migrate-secrets` nur hinzu, wenn auch deine API-Keys kopiert werden sollen.",
        },
        {
          title: "Kläre die Isolation, bevor du echte Accounts verbindest",
          text: "Schalte das Sandboxing von OpenClaw oder das Docker-Backend von Hermes ein, bevor der Agent Nachrichten von anderen Leuten liest. Für eine Option, die von Anfang an auf Container setzt, sieh dir die [OpenClaw-Alternativen](/blog/openclaw-alternatives) an.",
        },
      ],
      source: { label: "Quelle: README von Hermes Agent", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw vs Claude Code und Hermes vs Claude Code",
      text: [
        "Sie lösen unterschiedliche Probleme. OpenClaw und Hermes sind Assistenten, denen du schreibst: Posteingang, Kalender, Recherche, Erinnerungen und Aufgaben über Apps hinweg. Claude Code ist der Ort, an dem Software entsteht: Es liest deine Codebase, bearbeitet Dateien, führt Befehle und Tests aus und öffnet Pull Requests. Viele nutzen beides: einen Chat-Assistenten für den Alltag und Claude Code (oder Codex) für die Arbeit im Repository. OpenClaw kann sogar deinen Claude-Code-Login auf demselben Rechner wiederverwenden. Damit Claude Code nach eigenem Zeitplan arbeitet, lies [wie du Claude Code proaktiv machst](/proactive-claude-code); um mehrere gleichzeitig laufen zu lassen, sieh dir [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents) an.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Wenn du Agenten mit einem Job willst, keine Assistenten",
      text: [
        "OpenClaw und Hermes antworten, wenn du ihnen schreibst. Crewmark macht aus Claude Code, Codex, DeepSeek Harness oder OpenCode KI-Mitarbeiter: Jeder hat eine Rolle, ein Ziel und Arbeitszeiten, wacht per Heartbeat auf, übernimmt das nächste Issue von einem gemeinsamen Board und schreibt dir, wenn er eine Entscheidung braucht, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Wähl eine Rolle",
          text: "Ein [SEO-Spezialist](/ai-employees/seo-specialist), ein [Softwareentwickler](/ai-employees/software-engineer), ein [Marketing-Agent](/ai-employees/marketing-agent) und mehr.",
        },
        {
          title: "Verbinde den Agenten, den du schon nutzt",
          text: "Jeder Mitarbeiter arbeitet in seiner eigenen Session und seinem eigenen Checkout.",
        },
        {
          title: "Füll das Board",
          text: "Weise Issues zu; beantworte nur, was dich braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Hermes Agent und OpenClaw nebeneinander testen" },
  mid: {
    title: "Du brauchst Agenten, die ein Backlog abarbeiten?",
    text: "Crewmark lässt Claude Code und Codex als KI-Mitarbeiter laufen, die per Heartbeat das nächste Issue von deinem Board übernehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Hermes Agent vs OpenClaw",
    items: [
      {
        q: "Ist Hermes Agent besser als OpenClaw?",
        a: "Das hängt davon ab, was dir wichtig ist. Hermes Agent setzt auf Lernen (Skills, die er selbst erstellt und verbessert) und fragt standardmäßig vor gefährlichen Befehlen nach. OpenClaw hat mehr Kanäle, Apps und Community-Plugins.",
      },
      {
        q: "Kann ich von OpenClaw zu Hermes Agent wechseln?",
        a: "Ja. Hermes bringt `hermes import-agent openclaw` mit, das deine Persona, Erinnerungen, Skills und Messaging-Einstellungen importiert; führ es zuerst mit `--dry-run` aus.",
      },
      {
        q: "Welches funktioniert mit meinem Claude-Abo?",
        a: "OpenClaw kann einen Claude-Code-Login auf demselben Rechner wiederverwenden oder einen API-Key nutzen. Hermes Agent akzeptiert ein Claude-Abo nur mit Claude Max und zugekaufter Extra-Nutzung; Pro-Nutzer brauchen einen API-Key.",
      },
      {
        q: "Sind OpenClaw und Hermes Agent kostenlos?",
        a: "Beide sind Open Source unter der MIT-Lizenz. Du zahlst für die Modelle, die du nutzt; Nous Research bietet für Hermes außerdem ein optionales Nous-Portal-Abo an.",
      },
      {
        q: "OpenClaw vs Claude Code: Was soll ich nutzen?",
        a: "OpenClaw ist ein persönlicher Assistent in deinen Chat-Apps; Claude Code ist ein Coding-Agent in deinem Repository. Sie ergänzen sich, und OpenClaw kann einen Claude-Code-Login auf demselben Rechner wiederverwenden.",
      },
      {
        q: "Hermes Agent vs Codex?",
        a: "Codex ist der Coding-Agent von OpenAI für dein Repository. Hermes ist ein allgemeiner persönlicher Agent, der sich mit ChatGPT/Codex anmelden kann, um OpenAI-Modelle zu nutzen.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten einen Job, nicht nur einen Chat.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit den READMEs und Docs von OpenClaw und Hermes Agent und der GitHub-API abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zur OpenClaw Foundation, Nous Research, Anthropic oder OpenAI und wird von ihnen nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
