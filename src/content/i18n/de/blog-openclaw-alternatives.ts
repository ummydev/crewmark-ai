import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw-Alternativen: Hermes, NanoClaw, ZeroClaw (2026)",
    description:
      "Die OpenClaw-Alternativen im Vergleich, nach ihren eigenen Docs: Hermes Agent, NanoClaw, ZeroClaw, IronClaw und NVIDIA NemoClaw. Wie jede läuft, welche Modelle und Abos sie unterstützt, ihr Sicherheitsmodell und wann eine arbeitsorientierte Option wie Crewmark besser passt.",
  },
  breadcrumb: "OpenClaw-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Agenten",
    title: "OpenClaw-Alternativen: Hermes, NanoClaw, ZeroClaw, IronClaw und mehr",
    lead: "OpenClaw ist der Open-Source-KI-Assistent, der auf deinem eigenen Computer läuft und dir in WhatsApp, Telegram, Slack, Discord und über 20 weiteren Kanälen antwortet. Mit rund 394.000 GitHub-Sternen ist er der bekannteste, aber nicht der einzige. Nach einer Alternative sucht man aus drei Gründen: mehr Sicherheit ab Werk, ein anderes Modell oder Abo, oder eine schlankere Laufzeitumgebung. Dieser Guide vergleicht die wichtigsten Optionen anhand ihrer eigenen Docs und erklärt, wann du einen persönlichen Assistenten willst und wann Agenten, die für ein Team arbeiten.",
    cta: "Loslegen",
    secondary: "Alternativen vergleichen",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw in Kürze",
      text: [
        "OpenClaw begann als Clawdbot, wurde in Moltbot und Ende Januar 2026 dann in OpenClaw umbenannt, nachdem Anthropic wegen seiner Marke um eine Namensänderung gebeten hatte. Peter Steinberger hat es entwickelt; er ist inzwischen zu OpenAI gewechselt, und das Projekt liegt jetzt bei der unabhängigen OpenClaw Foundation, angekündigt im Juli 2026, die OpenAI als „Spender, nicht Eigentümer“ bezeichnet. Das neueste Release ist v2026.11.1 vom 5. November 2026.",
      ],
      points: [
        "Läuft als lokaler Gateway-Daemon auf macOS, Linux, Windows oder WSL2, mit Apps für Desktop und Smartphone.",
        "Modelle sind Plugins: Claude (per API-Key oder über einen vorhandenen Claude-Code-Login auf demselben Rechner), OpenAI und Codex sowie lokale Modelle wie Ollama.",
        "Sicherheit: Eingehende Nachrichten gelten als nicht vertrauenswürdig, unbekannte Absender müssen erst gekoppelt werden, aber Tools laufen in der Hauptsession auf dem Host, solange du kein Sandboxing konfigurierst.",
        "Das Projekt veröffentlicht seine Sicherheitsfixes: 722 Advisories seit Januar 2026, davon 14 kritisch, alle behoben und offengelegt, dazu ein Audit von Trail of Bits, dessen Befunde alle behoben wurden.",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "OpenClaw-Alternativen im Vergleich",
      text: ["Laut README, Website oder Docs des jeweiligen Projekts und der GitHub-API, Stand 7. November 2026. Sterne sind gerundet."],
      headers: ["", "Was es ist", "Läuft auf", "Modelle und Abos", "Isolation", "Lizenz, Sterne"],
      rows: [
        ["OpenClaw", "Persönlicher KI-Assistent in deinen Chat-Apps", "macOS, Linux, Windows, WSL2; Mobile-Apps", "Claude per API-Key oder lokalem Claude-Code-Login; ChatGPT/Codex-OAuth; lokale Modelle", "Standardmäßig auf dem Host; Sandboxing optional", "MIT, ~394k"],
        ["Hermes Agent (Nous Research)", "Sich selbst verbessernder Agent mit eingebauter Lernschleife", "Linux, macOS, Windows, WSL2, Android; Desktop-App", "Jeder Anbieter; Claude-Abo nur mit Max und Extra-Usage-Guthaben (nicht Pro); ChatGPT/Codex-OAuth", "Freigabe für gefährliche Befehle; optional Docker oder Modal", "MIT, ~261k"],
        ["NanoClaw", "Schlanker Assistent, der Agenten in Containern ausführt", "macOS, Linux, WSL2; braucht Docker und Claude Code", "Claude per API-Key oder Abo über Claude Code; Codex, OpenCode, Ollama per Skill", "Ein Container pro Session; Zugangsdaten gelangen nie hinein", "MIT, ~31k"],
        ["ZeroClaw", "Agenten-Laufzeit als einzelnes Rust-Binary", "Linux, macOS, Windows, FreeBSD, Docker; Boards wie Raspberry Pi", "Anthropic, OpenAI, Ollama und ~20 weitere; Codex-Abo; Claude Max per setup-token", "Standardmäßig überwacht; OS-Sandboxes", "MIT oder Apache 2.0, ~33k"],
        ["IronClaw (NEAR AI)", "Auf Datenschutz und Sicherheit ausgerichteter Assistent", "macOS, Linux, Windows; oder NEAR AI Cloud in einer TEE", "API-Keys der Anbieter (Anthropic, OpenAI, Gemini, Ollama und mehr)", "WASM-Sandbox; Zugangsdaten werden an der Grenze injiziert", "MIT oder Apache 2.0, ~13k; Cloud von $0 bis $200/Monat"],
        ["NVIDIA NemoClaw", "Sicherheits-Stack, der OpenClaw oder Hermes in OpenShell-Sandboxes ausführt (Alpha)", "Zuerst Linux und DGX Spark; Docker, Colima oder Podman", "NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini per API", "OpenShell-Sandbox mit Egress-Kontrolle", "Apache 2.0, ~23k"],
        ["Crewmark", "KI-Mitarbeiter für die Arbeit: Rollen, Ziele und ein gemeinsames Board", "Gehostetes Board; Daemon auf macOS, Windows, Linux", "Läuft in Claude Code, Codex, DeepSeek Harness oder OpenCode, mit deinem bestehenden Plan", "Jeder Mitarbeiter in eigener Session und eigenem Checkout", "Kommerziell"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du eine OpenClaw-Alternative",
      steps: [
        {
          title: "Leg fest, wofür du ihn brauchst",
          text: "Ein persönlicher Assistent, dem du vom Smartphone aus schreibst (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw), ist ein anderer Job als Agenten, die das Backlog eines Teams in einem Repository abarbeiten (Crewmark oder mehrere [Claude-Code-Agenten](/blog/multiple-claude-code-agents)).",
        },
        {
          title: "Prüf, wie er Tools isoliert",
          text: "Das ist der wichtigste Unterschied zwischen ihnen. Wähl standardmäßig Container- oder OS-Isolation, wenn der Agent Nachrichten von anderen Leuten liest.",
          code: sandbox,
        },
        {
          title: "Prüf, über wessen Rechnung er läuft",
          text: "Die Abo-Unterstützung unterscheidet sich stark: Manche nutzen einen Claude-Code-Login oder ein Setup-Token, Hermes braucht Claude Max mit Extra-Usage-Guthaben, andere brauchen API-Keys. Prüf die Bedingungen deines Anbieters zur Nutzung durch Dritte.",
        },
        {
          title: "Prüf die Plattform",
          text: "Unter Windows: OpenClaw, Hermes, ZeroClaw und IronClaw lassen sich nativ installieren; NanoClaw braucht WSL2; NemoClaw wird zuerst unter Linux getestet. Für minimalen Ressourcenbedarf oder Hardware-Boards: ZeroClaw.",
        },
        {
          title: "Starte mit einem Kanal und engen Berechtigungen",
          text: "Verbinde eine einzige Chat-App, erlaube nur dein eigenes Konto und erweitere den Zugriff erst, wenn du gesehen hast, wie er sich verhält.",
        },
      ],
      source: { label: "Quelle: OpenClaws README", href: openclaw },
    },
    {
      kind: "text",
      title: "Welche OpenClaw-Alternative zu dir passt",
      points: [
        "Du willst OpenClaw mit strengerer Isolation: NanoClaw (Container by Design) oder NemoClaw, um OpenClaw selbst in NVIDIAs Sandbox laufen zu lassen.",
        "Du willst einen Agenten, der lernt und seine eigenen Skills verbessert: Hermes Agent.",
        "Du willst eine kleine, schnelle Laufzeitumgebung oder musst auf einem Board laufen: ZeroClaw.",
        "Du willst Datenschutzfunktionen und eine verwaltete Cloud-Option: IronClaw.",
        "Du fragst dich OpenClaw vs Claude Code: OpenClaw ist ein Chat-zentrierter Assistent; Claude Code ist ein Coding-Agent in deinem Repository. Damit Claude Code ohne Prompts weiterarbeitet, lies, [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        "Du willst Agenten, die eine Aufgabe für dein Team erledigen, von einem gemeinsamen Board aus, mit dem Claude-Code- oder Codex-Plan, für den du schon zahlst: Crewmark (unten). Siehe auch [den Superagent-Vergleich](/blog/superagent).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Kein persönlicher Assistent, sondern ein Team aus KI-Mitarbeitern",
      text: [
        "OpenClaw und seine Alternativen warten auf deine Nachricht. Crewmark ist für die Arbeit gebaut: Es macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten, weckt ihn per Heartbeat, damit er das nächste Issue von einem gemeinsamen Board übernimmt, und lässt ihn dir schreiben, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Wähl eine Rolle",
          text: "Ein [SEO-Spezialist](/ai-employees/seo-specialist), ein [Softwareentwickler](/ai-employees/software-engineer), ein [Marketing-Agent](/ai-employees/marketing-agent) und mehr, jeweils mit einem Ziel, das du ändern kannst.",
        },
        {
          title: "Verbinde den Agenten, den du schon nutzt",
          text: "Er läuft in seiner eigenen Session und seinem eigenen Checkout, mit dem Abo, für das du schon zahlst.",
        },
        {
          title: "Weise Arbeit zu und gib frei",
          text: "Füll das Board; der Mitarbeiter übernimmt das nächste Issue und fragt vor allem nach, was auf deiner Freigabeliste steht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Eine OpenClaw-Alternative wählen" },
  mid: {
    title: "Du brauchst Agenten, die arbeiten, nicht nur chatten?",
    text: "Crewmark lässt Claude Code und Codex als KI-Mitarbeiter laufen, die per Heartbeat das nächste Issue von deinem Board übernehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu OpenClaw-Alternativen",
    items: [
      {
        q: "Was ist die beste OpenClaw-Alternative?",
        a: "Das hängt davon ab, warum du wechselst: NanoClaw für Container-Isolation, Hermes Agent für einen sich selbst verbessernden Agenten, ZeroClaw für eine kleine Rust-Laufzeitumgebung, IronClaw für Datenschutzfunktionen und eine verwaltete Cloud, und Crewmark, wenn du Agenten willst, die die Arbeit eines Teams erledigen, statt eines persönlichen Assistenten.",
      },
      {
        q: "Gibt es eine Open-Source-Alternative zu OpenClaw?",
        a: "Ja: Hermes Agent (MIT), NanoClaw (MIT), ZeroClaw (MIT oder Apache 2.0), IronClaw (MIT oder Apache 2.0) und NVIDIA NemoClaw (Apache 2.0) sind alle Open Source.",
      },
      {
        q: "OpenClaw vs Hermes Agent: Was ist der Unterschied?",
        a: "Beide sind Open-Source-Assistenten für deine Chat-Apps. Hermes Agent von Nous Research dreht sich um eine Lernschleife, die seine eigenen Skills verbessert, und bietet optionale Container-Isolation; OpenClaw hat die größere Community und mehr Kanäle. Ihre Regeln für das Claude-Abo unterscheiden sich: Hermes braucht Claude Max mit Extra-Usage-Guthaben.",
      },
      {
        q: "Ist NanoClaw sicherer als OpenClaw?",
        a: "NanoClaw führt jede Session by Design in einem eigenen Container aus und hält Zugangsdaten außerhalb davon. OpenClaw führt Tools in der Hauptsession auf dem Host aus, solange du sein Sandboxing nicht konfigurierst. Beide lassen sich absichern; NanoClaw startet so.",
      },
      {
        q: "Kann OpenClaw mein Claude-Abo nutzen?",
        a: "OpenClaws Docs beschreiben zwei Wege zu Claude: einen API-Key oder einen vorhandenen Claude-Code-Login auf demselben Rechner. Die Docs warnen außerdem, dass der Anbietername allein nicht verrät, ob die Nutzung über eine API oder ein Abo abgerechnet wird.",
      },
      {
        q: "Gibt es eine OpenClaw-Alternative für Windows?",
        a: "Hermes Agent hat eine Windows-Desktop-App, und ZeroClaw und IronClaw lassen sich nativ unter Windows installieren. OpenClaw selbst unterstützt Windows und WSL2; NanoClaw braucht WSL2.",
      },
      {
        q: "Was ist NemoClaw?",
        a: "Ein Open-Source-Stack von NVIDIA im Alpha-Stadium, der OpenClaw, Hermes oder LangChain Deep Agents in NVIDIA-OpenShell-Sandboxes ausführt. Damit lässt sich OpenClaw sicherer betreiben; ein Ersatz dafür ist es nicht.",
      },
    ],
  },
  cta: {
    title: "Lass KI-Agenten das Backlog deines Teams abarbeiten.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit README, Website, Docs oder Blog des jeweiligen Projekts und der GitHub-API abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zur OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic oder OpenAI und wird von ihnen nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
