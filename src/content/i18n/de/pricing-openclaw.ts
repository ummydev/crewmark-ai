import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/openclaw; the English master is src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw-Preise: kostenlos, und wofür du wirklich zahlst",
    description:
      "OpenClaw ist kostenlos und MIT-lizenziert, ohne Bezahlplan oder gehosteten Dienst. Du zahlst deinen Modellanbieter: per API-Key oder über ein vorhandenes Abo.",
  },
  breadcrumb: "OpenClaw-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · OpenClaw",
    title: "OpenClaw-Preise: kostenlos und Open Source, du bezahlst deinen Modellanbieter",
    lead: "OpenClaw kostet nichts. Es ist MIT-lizenziert, und laut README hat das Projekt „keinen Bezahlplan, keinen gehosteten Dienst und keinen Token.“ („has no paid tier, hosted service, or token.“) Du zahlst für das Modell dahinter: einen API-Key, den dein Anbieter abrechnet, oder ein Abo, das du schon hast, etwa einen Login für ChatGPT oder Claude Code. Das Gateway betreibst du auf deinem eigenen Rechner. Hier steht, was das in der Praxis heißt und wie es im Vergleich zu Hermes Agent, OpenCode, OpenWorker und Claude Code abschneidet.",
    cta: "Loslegen",
    secondary: "Was du wirklich zahlst",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von OpenClaw",
      text: [
        "Laut dem GitHub-README von OpenClaw und docs.openclaw.ai, geprüft am 13. November 2026. Es gibt eine einzige Edition, und die ist kostenlos.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "OpenClaw (Open Source)",
          "Kostenlos, MIT-Lizenz",
          "Das Gateway, Control UI, CLI und TUI; native Apps für macOS, iOS, Android, Windows und Linux; Chat-Kanäle wie WhatsApp, Telegram, Slack, Discord und iMessage; mehrere Agenten pro Gateway; der Automations-Scheduler",
        ],
        ["Bezahlplan", "Keiner", "Laut README gibt es keinen Bezahlplan"],
        ["Gehosteter Dienst", "Keiner", "Du betreibst und wartest das Gateway selbst"],
        [
          "Modellnutzung",
          "Abgerechnet von deinem Modellanbieter",
          "Ein API-Key oder ein Abo, das du schon hast (ChatGPT/Codex OAuth oder ein Claude-Code-Login auf demselben Host)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für den Betrieb von OpenClaw wirklich zahlst",
      points: [
        "Deinen Modellanbieter. Modelle sind Plugins: OpenAI, Anthropic, Google Gemini, OpenRouter, xAI und weitere. Mit einem API-Key rechnet dir dieser Anbieter ab, was OpenClaw verbraucht.",
        "Oder ein Abo, für das du schon zahlst. OpenClaw kann sich per OAuth mit OpenAI ChatGPT/Codex anmelden, und es kann Claude nutzen, indem es einen Claude-Code-Login auf demselben Host wiederverwendet (auch `claude setup-token`).",
        "Der Claude-Code-Login funktioniert nur, wenn OpenClaw auf demselben Host läuft wie dieser Login. Container-Installationen (zum Beispiel Podman) binden `~/.claude` nicht ein, deshalb empfiehlt die Doku dort einen API-Key.",
        "Lokale Modellserver stehen ebenfalls auf der Anbieterliste: Ollama, LM Studio und vLLM.",
        "Deinen eigenen Rechner. Das Gateway ist ein Daemon auf Hardware, die du kontrollierst, installiert unter macOS, Linux, Windows oder WSL2 oder mit Docker oder Nix. OpenClaw bietet kein eigenes Hosting an.",
        "Nichts an OpenClaw selbst. Das Projekt hat keinen Bezahlplan, es gibt dort also nichts zu kaufen.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw-Preise im Vergleich mit ähnlichen Agenten",
      text: [
        "Preise von der eigenen Website des jeweiligen Produkts, geprüft am 13. November 2026. Alle brauchen außerdem ein Modell, das du an dessen Anbieter zahlst, sofern ein Plan unten es nicht enthält.",
        "Im direkten Vergleich: [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). Weitere Optionen unter [OpenClaw-Alternativen](/blog/openclaw-alternatives).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        ["OpenClaw", "Kostenlos; du bezahlst deinen Modellanbieter", "Ja: das ganze Projekt (MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent kostenlos; optional Nous Portal Plus $20/Monat",
          "Ja: der Agent (MIT) und Nous Portal Free für $0",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent kostenlos; OpenCode Go $10/Monat, Go Plus $40/Monat",
          "Ja: kostenlose Modelle mit täglichem Anfragelimit, kein Konto nötig",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Kein Preis angegeben; dein eigener Modell-Key oder ein lokales Modell",
          "Ja: die App (MIT)",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro $20/Monat oder $17/Monat bei jährlicher Abrechnung",
          "Nein: nicht in Claude Free; nutzungsbasierte API-Credits funktionieren auch",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "OpenClaw antwortet dir im Chat. Crewmark gibt deinen Coding-Agenten einen Job.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Wie OpenClaw rechnet Crewmark keine Modellnutzung ab: Die Agenten laufen über das Claude- oder ChatGPT-Abo, für das du schon zahlst.",
        "Die Preise von Crewmark: Free für $0 (1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person). Pro für $5/Monat und Team für $10/Monat kommen bald. Die Abrechnung ist noch nicht gebaut, deshalb kann jedes Konto Crewmark bis dahin kostenlos nutzen. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), mit Zielen in Zahlen." },
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
    title: "Du zahlst schon für Claude oder ChatGPT?",
    text: "Crewmark macht aus deinem Claude Code oder Codex KI-Mitarbeiter mit Rollen, einem Heartbeat und einem gemeinsamen Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den OpenClaw-Preisen",
    items: [
      {
        q: "Ist OpenClaw kostenlos?",
        a: "Ja. OpenClaw ist Open Source unter der MIT-Lizenz, und laut README hat das Projekt „keinen Bezahlplan, keinen gehosteten Dienst und keinen Token.“ („has no paid tier, hosted service, or token.“) Du zahlst nur deinen Modellanbieter.",
      },
      {
        q: "Hat OpenClaw einen Preisplan?",
        a: "Nein. Es gibt eine kostenlose Edition. Die einzige Rechnung ist die für das Modell, das du verbindest: ein API-Key, den der Anbieter abrechnet, oder ein Abo, das du schon hast.",
      },
      {
        q: "Wie funktioniert das Preismodell von OpenClaw?",
        a: "Kostenlose Software plus ein Modell, das du mitbringst. Modelle sind Plugins (OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM und weitere), also hängen die Kosten vom Anbieter und Plan ab, den du wählst.",
      },
      {
        q: "Kann ich OpenClaw mit meinem Claude-Abo nutzen?",
        a: "Ja, indem du einen Claude-Code-Login auf demselben Host wiederverwendest (oder `claude setup-token`). Container-Installationen wie Podman binden `~/.claude` nicht ein, deshalb empfiehlt die Doku dort einen API-Key.",
      },
      {
        q: "Gibt es eine gehostete Version von OpenClaw?",
        a: "Nicht vom Projekt selbst. Du betreibst das Gateway auf deinem eigenen Rechner (macOS, Linux, Windows oder WSL2 oder mit Docker oder Nix) und wartest es selbst.",
      },
      {
        q: "Wer bezahlt die Entwicklung von OpenClaw?",
        a: "Die OpenClaw Foundation, eine unabhängige 501(c)(3)-Organisation, die das Kernteam beschäftigt und Releases signiert. Im README steht: „OpenAI ist ein Spender, kein Eigentümer.“ („OpenAI is a donor, not an owner.“)",
      },
    ],
  },
  cta: {
    title: "Behalte deine Modellrechnung. Gib deinen Agenten einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit dem GitHub-README von OpenClaw, docs.openclaw.ai und der eigenen Preisseite jedes verglichenen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit der OpenClaw Foundation noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
