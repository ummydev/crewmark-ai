import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Claude Code aktualisieren, dann das Modell für diese Session wählen
claude update
/model                       # Claude Fable 5.2 wählen

# Oder eine Session direkt damit starten
claude --model claude-fable-5-2

# Fast Mode auf Fable 5.2 (Claude Code v2.1.321 oder neuer)
/fast`;

const api = `# Claude API: die Modell-ID ändern
model = "claude-fable-5-1"  # vorher
model = "claude-fable-5-2"  # nachher

# Adaptive Thinking ist immer an; die Tiefe steuerst du mit effort
# low | medium | high (Standard) | xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2: Benchmarks, Preise, vs. Opus 5.5",
    description:
      "Claude Fable 5.2, erschienen am 9. November 2026: Neuerungen, Anthropics Benchmarks, API-Preise ($8/$40) und Fast Mode, 1M Kontext, Fable 5.2 vs. Opus 5.5, vs. Fable 5.1 und vs. Mythos 5.2, und wie du es in Claude Code nutzt.",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Claude-Modelle",
    title: "Claude Fable 5.2: Neuerungen, Benchmarks, Preise und der Vergleich mit Opus 5.5",
    lead: "Anthropic hat Claude Fable 5.2 am 9. November 2026 veröffentlicht, zusammen mit Claude Mythos 5.2, demselben Modell mit anderen Schutzmechanismen. Anthropic nennt Fable 5.2 sein leistungsfähigstes allgemein verfügbares Modell für technische Arbeit: Es ist schneller und günstiger als Fable 5.1, schneidet in Anthropics Coding- und Agent-Benchmarks besser ab und bringt einen Fast Mode mit. Dieser Guide zeigt, was sich geändert hat, die Zahlen, die Kosten, wann du es Opus 5.5 vorziehst und wie du es in Claude Code nutzt.",
    cta: "Loslegen",
    secondary: "Fable 5.2 vs. Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 auf einen Blick",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["Erschienen", "9. November 2026 (nach Fable 5 im Juni und Fable 5.1 im September)"],
        ["API-Modell-ID", "`claude-fable-5-2`"],
        ["Preis", "$8 pro Million Input-Tokens, $40 pro Million Output (Fable 5.1: $10 und $50)"],
        ["Fast Mode", "Bis zu 2,5-mal schnellere Ausgabe, für $16 Input und $80 Output pro Million Tokens"],
        ["Kontextfenster", "1M Tokens, maximal 128K Output"],
        ["Thinking", "Adaptive Thinking, immer an; Effort `low`, `medium`, `high` (Standard), `xhigh`, `max`"],
        ["Wissensstand", "Juni 2026"],
        ["Geschwindigkeit", "Laut Anthropic bis zu 30 % schnellere Ausgabe als Fable 5.1"],
        ["Wer es nutzen kann", "Claude Pro, Max, Ultra, Team und Enterprise; alle Claude-API-Kunden; Amazon Bedrock, Google Cloud und Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Was ist neu in Fable 5.2",
      points: [
        "Besser bei langer, schwieriger technischer Arbeit: Laut Anthropic kann es unklar definierte Engineering-Aufgaben tagelang bearbeiten und Hunderte, sogar mehr als tausend Subagents koordinieren.",
        "Günstiger: Input und Output kosten 20 % weniger als bei Fable 5.1, Batch-Verarbeitung kostet die Hälfte ($4 und $20).",
        "Schneller: bis zu 30 % schnellere Ausgabe als Fable 5.1 und ein Fast Mode, der noch einmal bis zu 2,5-mal schneller ist, zum doppelten Preis.",
        "Robotik: Anthropic berichtet von deutlich besserer Steuerung physischer Roboter, auch bei Aufgaben, für die es nicht trainiert wurde.",
        "Schutzmechanismen: Safeguards für Cybersicherheit und Biologie sind eingebaut. Markierte Cyber-Anfragen werden an Claude Opus 4.8 weitergeleitet, markierte Biologie-Anfragen an Claude Opus 5.",
        "Datenaufbewahrung: Fable-Modelle verlangen standardmäßig 30 Tage Aufbewahrung zur Sicherheitsüberwachung; Zero Data Retention braucht eine Freigabe von Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Claude Fable 5.2 Benchmarks",
      text: [
        "Von Anthropics Fable-Seite, mit aktivierten Safeguards, sofern nicht anders angegeben. Das sind Anthropics eigene Zahlen, keine unabhängigen Tests.",
      ],
      headers: ["Benchmark", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0 (agentisches Coding)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2 (agentisches Coding)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1 (Computer Use)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench (Business-Workflows)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam (mit Tools)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim (Robotik, von Anthropic durchgeführt)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Claude Fable 5.2 Preise",
      text: [
        "API-Preise pro Million Tokens, laut Anthropics Doku am 10. November 2026. In Claude-Abos ist Fable 5.2 im Nutzungskontingent enthalten: Auf Pro und Standard-Team-Seats kann es bis zu 50 % deiner wöchentlichen Limits verbrauchen. Der Fast Mode in Claude Code wird über Usage Credits abgerechnet.",
      ],
      headers: ["Modell", "Input", "Output", "Cache-Reads", "Batch (Input / Output)"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2, Fast Mode", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 vs. Opus 5.5: Was solltest du nutzen?",
      text: [
        "Anthropic selbst rät, für die meiste Arbeit mit Opus 5.5 zu starten und zu Fable 5.2 zu wechseln, wenn Opus 5.5 auch mit höherem Effort nicht reicht.",
      ],
      points: [
        "Preis: Fable 5.2 kostet pro Token doppelt so viel ($8 und $40 gegenüber $4 und $20), und sein Standard-Effort ist `high`, bei Opus 5.5 `medium`. Es denkt pro Anfrage also meist auch mehr.",
        "Leistung: In Anthropics Tabellen liegt Fable 5.2 bei agentischem Coding (69.9% vs. 62.3% auf FrontierSWE v2), Wissenschaft und langen Aufgaben vor Opus 5.5; bei Computer Use ist der Abstand kleiner (89.3% vs. 87.2% auf OSWorld 2.1).",
        "Kosten pro Aufgabe: Laut Anthropic lag Fable 5.2 mit `high` Effort auf FrontierCode 2.0 etwa gleichauf mit Opus 5.5 auf `max` (45.3% vs. 45.5%), bei ungefähr halben Kosten pro Aufgabe. Für schwierige Aufgaben ist es also nicht zwangsläufig die teurere Wahl.",
        "Wechsel mitten im Gespräch: Nur Fable 5.2 und Mythos 5.2 können das Thinking von Fable 5.2 lesen. Wenn du ein Gespräch von Fable 5.2 zu Opus 5.5 verschiebst, fehlt dort das Reasoning für diese Turns.",
        "Faustregel: Opus 5.5 für den Alltag; Fable 5.2 für lang laufende Agent-Jobs, harte Bugs und Arbeit, an der Opus scheitert.",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 vs. Mythos 5.2 und vs. Fable 5.1",
      points: [
        "Mythos 5.2 ist dasselbe Modell mit weniger Einschränkungen für Arbeit in Cybersicherheit und Biologie. Es ist nur für Organisationen gedacht, die über Anthropics Programme verifiziert sind, etwa das Cyber Verification Program, und kostet dasselbe.",
        "In Anthropics Cyber- und Biologie-Tabellen schneidet Mythos 5.2 besser ab als Fable 5.2 mit aktivierten Safeguards; für alles andere sind sie dasselbe Modell.",
        "Gegenüber Fable 5.1 ist Fable 5.2 günstiger, bis zu 30 % schneller und in allen Tabellen von Anthropic besser, zum Beispiel 49.1% vs. 32.4% auf FrontierCode 2.0 und 41.3% vs. 17.9% im Remote Labor Index.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du Claude Fable 5.2 in Claude Code",
      steps: [
        {
          title: "Aktualisieren und Modell wählen",
          text: "Aktualisiere Claude Code, führ dann `/model` aus und wähl Claude Fable 5.2, oder starte eine Session mit `--model claude-fable-5-2`. Mit einem Claude-Abo brauchst du Pro, Max, Ultra, Team oder Enterprise.",
          code: claudeCode,
        },
        {
          title: "Lass den Effort zum Start auf high",
          text: "Laut Anthropic ist der Großteil des Gewinns bei `high` schon da. Geh für deine schwierigste lang laufende Coding-Arbeit auf `xhigh`, sobald du gesehen hast, dass es hilft; `max` hebst du dir für seltene Fälle auf, in denen Zeit und Tokens egal sind.",
        },
        {
          title: "Schalte den Fast Mode ein, wenn Tempo zählt",
          text: "Führ `/fast` aus, während du auf Fable 5.2 bist (Claude Code v2.1.321 oder neuer). Er ist bis zu 2,5-mal schneller zum doppelten Preis; in Abos wird er über Usage Credits bezahlt, nicht aus den Limits deines Plans, und auf Bedrock, Vertex oder Foundry ist er nicht verfügbar.",
        },
        {
          title: "Du nutzt die API? Prüf die Breaking Changes",
          text: "Adaptive Thinking ist immer an (`budget_tokens` und `disabled` liefern 400), erzwungene Tool-Nutzung wird nicht unterstützt, das Bearbeiten früherer Turns macht Thinking-Blöcke ungültig, und das alte Tool `computer_20251124` wird durch das Computer-Use-Toolset ersetzt. Claude Code und das Agent SDK erledigen das für dich.",
          code: api,
        },
      ],
      source: { label: "Quelle: Anthropic-Doku, What's new in Claude Fable 5.2", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Fable 5.2 einen lang laufenden Job",
      text: [
        "Fable 5.2 ist für Arbeit gebaut, die Stunden dauert. Crewmark macht aus einer Claude-Code-Session einen KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat; der Mitarbeiter nutzt das Modell, auf dem seine Session läuft. So kannst du Fable 5.2 auf die schwierigsten Jobs setzen und Opus 5.5 für den Rest behalten.",
      ],
      steps: [
        {
          title: "Wähl eine Rolle",
          text: "Etwa den [KI-Softwareentwickler](/ai-employees/software-engineer) für einen Backlog harter Issues.",
        },
        {
          title: "Stell das Modell in seiner Session ein",
          text: "Führ `/model` im Claude-Code-Gespräch des Mitarbeiters aus und wähl Fable 5.2.",
        },
        {
          title: "Lass ihn laufen",
          text: "Er wacht per Heartbeat auf und arbeitet das Board ab; lies, [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Fable 5.2 in Claude Code nutzen" },
  mid: {
    title: "Soll Fable 5.2 deine schwierigsten Issues nach Zeitplan abarbeiten?",
    text: "Crewmark-Mitarbeiter laufen auf deinem eigenen Claude Code, wachen per Heartbeat auf und nehmen sich das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Fable 5.2",
    items: [
      {
        q: "Wann ist Claude Fable 5.2 erschienen?",
        a: "Am 9. November 2026, zusammen mit Claude Mythos 5.2. Es folgt auf Fable 5 (9. Juni 2026) und Fable 5.1 (1. September 2026).",
      },
      {
        q: "Was kostet Claude Fable 5.2?",
        a: "Über die API $8 pro Million Input-Tokens und $40 pro Million Output-Tokens, nach $10 und $50 bei Fable 5.1. Der Fast Mode kostet $16 und $80, Batch $4 und $20. In Claude-Abos ist es ab Pro enthalten; auf Pro und Standard-Team-Seats kann es bis zu 50 % der wöchentlichen Nutzungslimits verbrauchen.",
      },
      {
        q: "Ist Fable 5.2 besser als Opus 5.5?",
        a: "In Anthropics Benchmarks ja, bei agentischem Coding, Wissenschaft und langen Aufgaben. Es kostet pro Token aber auch doppelt so viel, und Anthropic empfiehlt für die meiste Arbeit weiterhin Opus 5.5 als Ausgangspunkt.",
      },
      {
        q: "Wie groß ist das Kontextfenster von Claude Fable 5.2?",
        a: "1M Tokens, mit bis zu 128K Output-Tokens.",
      },
      {
        q: "Was ist der Unterschied zwischen Fable 5.2 und Mythos 5.2?",
        a: "Es ist dasselbe Modell. Fable 5.2 hat Safeguards für Cybersicherheit und Biologie und steht allen offen; Mythos 5.2 ist für Organisationen, die über Anthropics Programme verifiziert sind.",
      },
      {
        q: "Ist Claude Fable 5.2 kostenlos?",
        a: "Nein. Anthropic führt es für die Pläne Pro, Max, Ultra, Team und Enterprise und in der API; der Free-Plan ist nicht aufgeführt.",
      },
      {
        q: "Gibt es eine System Card für Claude Fable 5.2?",
        a: "Ja, Anthropic hat die „Claude Fable 5.2 and Claude Mythos 5.2 System Card“ veröffentlicht, verlinkt auf seiner Fable-Seite.",
      },
    ],
  },
  cta: {
    title: "Setz das neueste Modell auf einen festen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand von Anthropics Fable-Seite, dem Launch-Post, der Claude-Platform-Doku und der Claude-Code-Doku am 10. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden oder von Anthropic unterstützt. Claude, Claude Fable, Claude Mythos, Claude Opus und Claude Code sind Marken von Anthropic.",
};
