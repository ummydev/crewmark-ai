import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash (1017): Preis, Kontext, vs V4 Pro",
    description:
      "DeepSeek-V4.1-Flash-1017 erklärt: was sich am 17. Oktober 2026 geändert hat, API-Preise, 1M Kontext, offene Gewichte auf Hugging Face, DeepSeeks Benchmark-Ergebnisse und wann sich V4 Pro lohnt.",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek V4.1 Flash (1017): Preis, Kontext, Benchmarks und Vergleich mit V4 Pro",
    lead: "DeepSeek-V4.1-Flash-1017 ist das Update vom 17. Oktober 2026 für DeepSeek V4.1 Flash, das kleinste Modell in DeepSeeks neuester Architektur, mit Bildverständnis und 1M Tokens Kontext. Die API liefert es als `deepseek-flash` aus, DeepSeeks Website und App nutzen es, DeepSeek Harness führt es standardmäßig aus, und die Gewichte sind unter der MIT-Lizenz offen. Laut DeepSeek erzielt es höhere Werte als das September-Release und erledigt Aufgaben schneller und mit kürzeren Ausgaben. Hier erfährst du, was es ist, was es kostet, wie es sich mit V4 Pro vergleicht und wie du es nutzt.",
    cta: "Loslegen",
    secondary: "Direkt zu den Preisen",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash auf einen Blick",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["Veröffentlicht", "V4.1 Flash am 10. September 2026; das Update 1017 am 17. Oktober 2026"],
        ["Modellname in der API", "`deepseek-flash` (die älteren Namen `deepseek-v4-flash` und `deepseek-v4-flash-vision-exp` werden ebenfalls von ihm bedient)"],
        ["Input", "Text und Bilder"],
        ["Kontextfenster", "1M Tokens; DeepSeek empfiehlt `max_tokens` von 256K oder mehr"],
        ["Gewichte", "Offen auf Hugging Face, MIT-Lizenz"],
        ["Wo es läuft", "DeepSeek-API, Website und App; Standard in DeepSeek Harness"],
        ["Optimiert für", "DeepSeek Harness (v0.2.1-rc.1 oder neuer), Tencent CodeBuddy und WorkBuddy, laut DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek V4.1 Flash Preis vs V4 Pro",
      text: [
        "Preise der DeepSeek-API in US-Dollar pro Million Tokens, Stand 6. November 2026. Die Nebenzeit-Preise gelten außerhalb von 01:00–04:00 und 06:00–10:00 UTC an Werktagen und sind halb so hoch wie die Spitzenzeit-Preise; das Update 1017 hat an den Preisen nichts geändert. DeepSeeks Search- und Fetch-API kosten jeweils $0.75 pro 1.000 Aufrufe.",
      ],
      headers: ["Pro 1 Mio. Tokens", "Flash, Spitzenzeit", "Flash, Nebenzeit", "V4 Pro, Spitzenzeit", "V4 Pro, Nebenzeit"],
      rows: [
        ["Input, Cache-Treffer", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Input, Cache-Fehlschlag", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Output", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "DeepSeek V4.1 Flash Benchmarks (laut DeepSeek)",
      text: [
        "Das sind DeepSeeks eigene Zahlen aus der Model Card, die das Update 1017 mit dem V4.1 Flash vom September vergleichen. DeepSeek hat Terminal-Bench 4.0 mit dem Harness von Claude Code und DeepSWE mit Mini-SWE-V2 ausgeführt. Benchmarks von Herstellern bevorzugen die eigenen Modelle; teste mit deinen eigenen Aufgaben, bevor du wechselst.",
      ],
      headers: ["Benchmark", "V4.1 Flash 1017", "V4.1 Flash (Sept.)"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE (ohne Tools)", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash vs V4 Pro: Welches Modell nutzen?",
      points: [
        "V4 Pro (`deepseek-v4-pro`, seit dem 13. August 2026 allgemein verfügbar) kostet pro Input-Token das 4,4-Fache und pro Output-Token das 3,3-Fache und verarbeitet nur Text; Flash nimmt zusätzlich Bilder an.",
        "Beide haben 1M Tokens Kontext und ein einstellbares Reasoning-Level (low, high und max).",
        "DeepSeeks eigene Setups für Coding-Agenten nutzen standardmäßig Flash: DeepSeek Harness und die empfohlenen Einstellungen für Claude Code, die Sonnet und Haiku auf Flash und nur Opus auf V4 Pro abbilden.",
        "Eine praktische Aufteilung: Flash für die alltägliche Agentenarbeit und Subagents, V4 Pro, wenn eine schwierige Aufgabe mit Flash immer wieder scheitert.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du DeepSeek V4.1 Flash",
      steps: [
        {
          title: "Über die API",
          text: "Hol dir einen API-Key auf platform.deepseek.com und ruf das Modell als `deepseek-flash` auf; die API ist OpenAI- und Anthropic-kompatibel.",
          code: api,
        },
        {
          title: "In einem Coding-Agenten",
          text: "Führe es in DeepSeek Harness aus, wo es Standard ist, oder lass Claude Code oder Codex auf DeepSeek zeigen; siehe [DeepSeek Harness](/blog/deepseek-harness) und [Claude Code mit DeepSeek](/blog/claude-code-deepseek).",
        },
        {
          title: "Lokal, mit den offenen Gewichten",
          text: "Lade DeepSeek-V4.1-Flash-1017 von Hugging Face herunter. Das Repository liefert statt eines Chat-Templates einen Referenz-Prompt-Encoder und Anleitungen zur Inferenz; DeepSeek empfiehlt temperature 1.0 und top_p 1.0.",
        },
      ],
      source: { label: "Quelle: DeepSeek-V4.1-Flash-1017 auf Hugging Face", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein günstiges, fähiges Modell, das deinen Backlog abarbeitet",
      text: [
        "Zu Flash-Preisen ist es bezahlbar, einen Agenten den ganzen Tag zu beschäftigen. Crewmark macht aus einer Session in DeepSeek Harness, Claude Code, Codex oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board nimmt.",
      ],
      steps: [
        {
          title: "Agent und Modell wählen",
          text: "DeepSeek Harness führt standardmäßig V4.1 Flash aus; Claude Code und Codex können es über DeepSeeks Endpoint nutzen.",
        },
        {
          title: "Rolle und Ziel vergeben",
          text: "Lies, [was ein KI-Mitarbeiter ist](/ai-employees) und wie er sich von einem [Superagent](/blog/superagent) unterscheidet.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "Während der Arbeitszeit wacht er alle 15, 30 oder 60 Minuten auf und nimmt das nächste Issue; siehe, [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek V4.1 Flash nutzen" },
  mid: {
    title: "Ein so günstiges Modell sollte den ganzen Tag arbeiten.",
    text: "Crewmark weckt DeepSeek Harness, Claude Code oder Codex per Heartbeat, mit einer Rolle, einem Ziel und einem Board voller Issues.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu DeepSeek V4.1 Flash",
    items: [
      {
        q: "Was ist DeepSeek V4.1 Flash 1017?",
        a: "Das Update vom 17. Oktober 2026 für DeepSeek V4.1 Flash, das kleinste Modell in DeepSeeks neuester Architektur. Es nimmt Text und Bilder an, hat 1M Tokens Kontext und wird als `deepseek-flash` ausgeliefert.",
      },
      {
        q: "Was kostet DeepSeek V4.1 Flash?",
        a: "Über die API $0.30 pro Million Input-Tokens bei einem Cache-Fehlschlag ($0.006 bei einem Treffer) und $1.20 pro Million Output-Tokens zur Spitzenzeit; in der Nebenzeit kostet es die Hälfte.",
      },
      {
        q: "Wie groß ist das Kontextfenster von DeepSeek V4.1 Flash?",
        a: "1M Tokens; DeepSeek empfiehlt `max_tokens` von mindestens 256K.",
      },
      {
        q: "Ist DeepSeek V4.1 Flash Open Source?",
        a: "Die Gewichte sind auf Hugging Face unter der MIT-Lizenz offen, zusammen mit einem Referenz-Prompt-Encoder und Anleitungen zur Inferenz.",
      },
      {
        q: "DeepSeek V4.1 Flash vs V4 Pro: Was ist der Unterschied?",
        a: "V4 Pro kostet pro Input-Token das 4,4-Fache und pro Output-Token das 3,3-Fache und verarbeitet nur Text; Flash nimmt Bilder an und ist Standard in DeepSeeks Setups für Coding-Agenten. Beide haben 1M Kontext.",
      },
      {
        q: "Was hat sich von V4.1 Flash zu 1017 geändert?",
        a: "DeepSeek meldet höhere Werte in Agenten- und Coding-Benchmarks, kürzere Ausgaben und schneller erledigte Aufgaben, bei gleichem Preis und gleichem Modellnamen.",
      },
      {
        q: "Kann ich DeepSeek V4.1 Flash in Claude Code nutzen?",
        a: "Ja. DeepSeek dokumentiert Umgebungsvariablen, die Claude Code mit `deepseek-flash` auf seinen Anthropic-kompatiblen Endpoint zeigen lassen; siehe [Claude Code mit DeepSeek](/blog/claude-code-deepseek).",
      },
    ],
  },
  cta: {
    title: "Mach DeepSeek V4.1 Flash zu einem KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions in DeepSeek Harness, Claude Code, Codex und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit DeepSeeks API-Dokumentation (Changelog, News, Preise) und der Model Card auf Hugging Face abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu DeepSeek, das es auch nicht unterstützt. Die Benchmark-Werte stammen von DeepSeek. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
