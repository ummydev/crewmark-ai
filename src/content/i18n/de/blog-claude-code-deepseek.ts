import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4 in Claude Code: Einrichtung und Kosten",
    description:
      "Claude Code mit DeepSeeks Modellen betreiben: die Umgebungsvariablen, die DeepSeek für deepseek-flash und deepseek-v4-pro dokumentiert, Modell-Mapping, Websuche, Preise und die Einrichtung in Codex.",
  },
  breadcrumb: "Claude Code mit DeepSeek",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "So nutzt du DeepSeek-Modelle in Claude Code",
    lead: "DeepSeeks API spricht das Protokoll von Anthropic, deshalb kann Claude Code mit DeepSeeks Modellen laufen, wenn du es mit einem DeepSeek-API-Key auf `https://api.deepseek.com/anthropic` zeigen lässt. DeepSeek dokumentiert die genauen Einstellungen: `deepseek-flash` (DeepSeek-V4.1-Flash) mit 1M Tokens Kontext für die meiste Arbeit und `deepseek-v4-pro` hinter dem Namen Opus. Diese Anleitung zeigt die Einrichtung unter macOS, Linux und Windows, erklärt, wie Claude-Modellnamen zugeordnet werden, was es kostet und wie du dasselbe in Codex machst.",
    cta: "Loslegen",
    secondary: "Direkt zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Code mit DeepSeek ein",
      steps: [
        {
          title: "DeepSeek-API-Key besorgen",
          text: "Erstelle einen auf platform.deepseek.com unter API keys und lade Guthaben auf das Konto; abgerechnet wird pro Token.",
        },
        {
          title: "Claude Code installieren, falls noch nicht geschehen",
          text: "DeepSeeks Anleitung installiert es per npm: Node.js 18 oder neuer, unter Windows Git for Windows, dann `npm install -g @anthropic-ai/claude-code` und zur Kontrolle `claude --version`.",
        },
        {
          title: "Umgebungsvariablen setzen (macOS und Linux)",
          text: "Sie lassen Claude Code auf DeepSeeks Anthropic-kompatiblen Endpoint zeigen, nutzen `deepseek-flash` mit 1M Kontext für das Hauptmodell und die Subagents und erhöhen Effort-Level und Auto-Compact-Fenster. Trag sie in dein Shell-Profil ein, damit sie bleiben.",
          code: env,
        },
        {
          title: "Oder unter Windows (PowerShell)",
          text: "Dieselben Einstellungen als PowerShell-Umgebungsvariablen für die aktuelle Session.",
          code: windows,
        },
        {
          title: "Claude Code in deinem Projekt starten",
          text: "Wechsle mit `cd` ins Projekt und führe `claude` aus. Alles andere, etwa CLAUDE.md, Skills, Hooks und MCP-Server, richtest du wie gewohnt ein.",
        },
      ],
      source: { label: "Quelle: DeepSeek-API-Dokumentation, Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Wie Claude-Modellnamen DeepSeek-Modellen zugeordnet werden",
      text: [
        "Wenn Claude Code (oder die Claude-Desktop-App) einen Claude-Modellnamen an DeepSeeks Endpoint schickt, ordnet DeepSeek ihn so zu. Deshalb setzt die Einrichtung oben jede Modellvariable auf `deepseek-flash`: Sonst wird alles, was Opus anfordert, zu V4-Pro-Preisen abgerechnet.",
      ],
      headers: ["Modellname, den Claude Code sendet", "Genutztes DeepSeek-Modell", "Hinweise"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "Zu V4-Pro-Preisen abgerechnet"],
        ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash; akzeptiert Bilder"],
        ["`deepseek-flash[1m]`", "`deepseek-flash` mit 1.048.576 Tokens Kontext", "Wie in DeepSeeks empfohlenen Variablen gesetzt"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "Was es kostet",
      text: [
        "DeepSeek-API-Preise in US-Dollar pro Million Tokens am 6. November 2026. Die Nebenzeit-Preise (außerhalb von werktags 01:00–04:00 und 06:00–10:00 UTC) sind halb so hoch wie die Spitzenzeit-Preise. Die Websuche in Claude Code funktioniert auch mit DeepSeeks API, aber jede Suche verbraucht zusätzliche Modell-Tokens, um die Ergebnisse zusammenzufassen, und wird über DeepSeeks Search API abgerechnet.",
      ],
      headers: ["Pro 1 Mio. Tokens", "deepseek-flash, Spitzenzeit", "deepseek-flash, Nebenzeit", "deepseek-v4-pro, Spitzenzeit", "deepseek-v4-pro, Nebenzeit"],
      rows: [
        ["Input, Cache-Treffer", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Input, Cache-Fehlschlag", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Output", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "DeepSeek in Codex nutzen",
      text: [
        "DeepSeek unterstützt auch Codex, über die Responses API. Die Anleitung bietet ein Setup-Skript, das `~/.codex/config.toml` sichert, einen Katalog `~/.codex/models.json` mit `deepseek-flash` und `deepseek-v4-pro` schreibt und einen DeepSeek-Provider hinzufügt; eine Konfiguration deckt dann die Codex-CLI, die ChatGPT-Desktop-App und die VS-Code-Extension ab. Lies das Skript, bevor du es ausführst, oder folge den manuellen Schritten derselben Anleitung. Die eingebaute Websuche schaltet das Skript ab; sie ist nur mit `deepseek-v4-pro` verfügbar. Zu Codex’ eigenen Anweisungsdateien siehe die [Anleitung zu Codex AGENTS.md](/blog/codex-agents-md).",
      ],
    },
    {
      kind: "text",
      title: "Claude Code mit DeepSeek vs DeepSeek Harness",
      points: [
        "Claude Code mit DeepSeek: Du behältst die Oberfläche und Gewohnheiten von Claude Code, inklusive CLAUDE.md, Skills, Hooks und Plugins, und zahlst DeepSeeks Preise pro Token statt eines Claude-Abos.",
        "DeepSeek Harness: DeepSeeks eigene Open-Source-Agenten-App, um Plugins herum gebaut, mit Desktop-App und Web-UI; sie kann auch Claude Code oder Codex als Subagents ausführen. Siehe die [Anleitung zu DeepSeek Harness](/blog/deepseek-harness).",
        "In beiden Fällen sind die Modelle dieselben, `deepseek-flash` und `deepseek-v4-pro`, abgerechnet von DeepSeek.",
        "Um zu Anthropics Modellen zurückzukehren, entferne die Variablen (oder öffne eine neue Shell ohne sie) und melde dich wie gewohnt in Claude Code an.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Günstige Modelle, den ganzen Tag im Einsatz",
      text: [
        "Mit DeepSeeks Preisen wird es bezahlbar, Agenten in Claude Code oder DeepSeek Harness dauerhaft zu beschäftigen. Crewmark macht aus diesen Sessions KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt jeden per Heartbeat, damit er das nächste Issue von einem Board nimmt.",
      ],
      steps: [
        {
          title: "Dein bestehendes Setup nutzen",
          text: "Ein Mitarbeiter läuft in einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode auf deinem Rechner, mit deiner Umgebung und deinen Keys.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "Während der Arbeitszeit wacht er alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und nimmt das nächste Issue; siehe, [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Die Rechnung im Griff behalten",
          text: "Arbeitszeiten und ein Issue nach dem anderen machen den Verbrauch planbar; siehe, [wie du den Token-Verbrauch von Claude Code senkst](/blog/reduce-claude-code-token-usage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek-Modelle in Claude Code nutzen" },
  mid: {
    title: "Claude Code mit DeepSeek ist günstig. Lass es mehr arbeiten.",
    text: "Crewmark weckt Claude Code, Codex oder DeepSeek Harness per Heartbeat, mit einer Rolle, einem Ziel und einem Board voller Issues.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code mit DeepSeek",
    items: [
      {
        q: "Kann Claude Code DeepSeek-Modelle nutzen?",
        a: "Ja. DeepSeeks API ist unter `https://api.deepseek.com/anthropic` Anthropic-kompatibel. Setze `ANTHROPIC_BASE_URL` auf diese Adresse und `ANTHROPIC_AUTH_TOKEN` auf deinen DeepSeek-API-Key, wie DeepSeeks Anleitung zeigt.",
      },
      {
        q: "Welches DeepSeek-Modell sollte ich in Claude Code nutzen?",
        a: "DeepSeeks Anleitung setzt für jede Rolle `deepseek-flash` (DeepSeek-V4.1-Flash) mit 1M Kontext. `deepseek-v4-pro` kommt zum Einsatz, wenn eine Anfrage ein Opus-Modell verlangt, zu höheren Preisen.",
      },
      {
        q: "Was kostet Claude Code mit DeepSeek?",
        a: "Nur die Nutzung der DeepSeek-API: für `deepseek-flash` $0.30 pro Million Input-Tokens bei einem Cache-Fehlschlag und $1.20 pro Million Output-Tokens zur Spitzenzeit, in der Nebenzeit die Hälfte, und deutlich weniger für gecachten Input.",
      },
      {
        q: "Funktioniert die Websuche in Claude Code mit DeepSeek?",
        a: "Ja. DeepSeek unterstützt das Websuche-Tool von Claude Code; jede Suche verbraucht zusätzliche Modell-Tokens, um die Ergebnisse zusammenzufassen, und wird über DeepSeeks Search API abgerechnet.",
      },
      {
        q: "Brauche ich ein Claude-Abo?",
        a: "Nein. Mit diesen Variablen schickt Claude Code die Anfragen an DeepSeek und rechnet über dein DeepSeek-Konto ab statt über ein Claude-Abo.",
      },
      {
        q: "Kann ich DeepSeek auch in Codex nutzen?",
        a: "Ja. DeepSeek dokumentiert eine Einrichtung für Codex über die Responses API, per Skript oder durch manuelle Änderungen an `~/.codex/config.toml` und `~/.codex/models.json`.",
      },
      {
        q: "Claude Code mit DeepSeek oder DeepSeek Harness?",
        a: "Wenn du die Tools und den Workflow von Claude Code magst, bleib dabei und wechsle nur das Modell. Wenn du DeepSeeks eigene, auf Plugins aufgebaute App mit Desktop-Oberfläche willst, probier DeepSeek Harness.",
      },
    ],
  },
  cta: {
    title: "Gib deinem DeepSeek-Agenten einen Dienstplan.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit DeepSeeks API-Dokumentation (Integrationen für Claude Code und Codex, Preise) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu DeepSeek, Anthropic oder OpenAI, die es auch nicht unterstützen. Claude und Claude Code sind Marken von Anthropic, Codex ist eine Marke von OpenAI.",
};
