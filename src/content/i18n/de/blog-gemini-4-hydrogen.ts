import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API: Modellcode gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Finde und behebe den fehlschlagenden Test in diesem Diff"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen: Preise, Benchmarks, vs. Argon und 3.8 Flash",
    description:
      "Gemini 4 Hydrogen, Googles schnelles Coding- und Agent-Modell: $1.50 / $7.50 pro Million Tokens, 1M Kontext, Benchmarks, vs. Argon, Carbon, 3.8 Flash und Claude.",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Neues Modell",
    title: "Gemini 4 Hydrogen: Preise, Benchmarks und Vergleiche",
    lead: "Google hat Gemini 4 Hydrogen am 12. November 2026 veröffentlicht: ein schnelles Gemini-4-Modell für alltägliches Coding und agentische Arbeit, das über sein gesamtes Kontextfenster von 1 Million Tokens $1.50 pro Million Input-Tokens und $7.50 pro Million Output-Tokens kostet. Es liegt unterhalb von Gemini 4 Carbon und Argon, die Google für tiefes Reasoning über lange Aufgaben vorsieht, und löst Gemini 3.8 Flash als das Modell ab, zu dem die meisten greifen werden. Hier erfährst du, was neu ist, welche Zahlen Google veröffentlicht hat, wie sich der Preis mit Argon, Carbon, 3.8 Flash und Claude vergleicht und wo du es nutzen kannst.",
    cta: "Loslegen",
    secondary: "Zu den Preisen",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen auf einen Blick",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["Erschienen", "12. November 2026, von Google"],
        ["Modellcode", "`gemini-4-hydrogen`"],
        ["Gebaut für", "Schnelle Ausführung in Coding- und Agent-Workflows"],
        ["Kontext", "1 Million Tokens Input, bis zu 1 Million Tokens Output"],
        ["Thinking-Stufen", "Low, medium, high (Standard) und das neue xhigh"],
        ["API-Preis", "$1.50 Input, $7.50 Output pro Million Tokens, gleich über das gesamte Kontextfenster; ein Free Tier in der Gemini API"],
        ["Verfügbar in", "Gemini API, Google AI Studio, Android Studio, Gemini für Unternehmen, der Gemini-App, Google Search und Google Antigravity für zahlende Abonnenten von Google AI Pro und Ultra"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Was ist neu in Gemini 4 Hydrogen",
      points: [
        "Ein schnelles Modell in der Gemini-4-Familie: Google behält Carbon und Argon für tiefes Reasoning über lange Aufgaben vor und positioniert Hydrogen für schnelle Ausführung, allein oder als ausführendes Modell an ihrer Seite.",
        "Orchestrator in Google Antigravity wechselt innerhalb einer Session zwischen Carbon und Hydrogen. Laut Google erreichte es auf Terminal-Bench 4.0 fast die Erfolgsquote von Carbon, verbrauchte dabei 24% weniger Kontingent und war 19% schneller fertig.",
        "Laut Google ein großer Schritt gegenüber Gemini 3.8 Flash: 2,5-mal schneller in der Standardeinstellung high, Terminal-Bench 4.1 von 18.2% auf 57% gestiegen und mehr als fünfmal weniger erfundene Behauptungen.",
        "Gebündelte Exploration großer Repositories: Es liest und durchsucht Dateien parallel statt nacheinander. Partner sahen es 2- bis 2,8-mal schneller laufen, mit 12% bis 23% weniger Tokens als 3.8 Flash.",
        "Vier Thinking-Stufen, darunter das neue xhigh, sodass du nur für das Reasoning bezahlst, das eine Aufgabe braucht.",
        "Sicherheit bei agentischer Arbeit: Google meldet bis zu 81% weniger Fälle, in denen das Modell über den Auftrag hinausgeht, 12-mal weniger fehlausgerichtete Aktionen und Abkürzungen in Tool-Use- und Coding-Evaluierungen und eine Ehrlichkeitsrate von 96.7% in seiner internen Agent-Evaluierung.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Gemini 4 Hydrogen Benchmarks",
      text: [
        "Das sind die Zahlen, die Google in seiner Ankündigung veröffentlicht hat; unabhängige Ergebnisse folgen noch. Wo Google einen Vergleich angibt, steht er in der letzten Spalte.",
      ],
      headers: ["Benchmark", "Gemini 4 Hydrogen", "Verglichen mit"],
      rows: [
        ["Artificial Analysis Intelligence Index", "51 auf high; 54 auf xhigh", "Gemini 4 Argon: 50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash: 18.2%"],
        ["HLE-Diamond", "58.8%", "Spitze in seiner Klasse"],
        ["Vals Tax Agent Bench", "52.3%", "Platz 1 insgesamt"],
        ["Vals Legal Research Bench", "55.8%", "Geteilter Platz 1"],
        ["Multimodal Knowledge Agent (MKA)", "53.4%", "Laut Google vor anderen Modellen"],
        ["Agents' Last Exam v1.1", "71.6%", "Laut Google vor anderen Modellen"],
        ["Agent Arena (arena.ai)", "Platz 5", "Live-Ranking"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Gemini 4 Hydrogen Preise",
      text: [
        "Preise der Gemini API pro Million Tokens in US-Dollar, laut Googles Preisseite am 13. November 2026. Die Output-Preise enthalten Thinking-Tokens. Carbon und Argon haben bis 30. November Launch-Preise, danach verdoppeln sie sich; der Preis von 3.8 Flash verdoppelt sich am 1. Januar 2027. Die Claude-Preise sind die von Anthropic, aus unserem Beitrag zu [Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
      headers: ["Modell", "Input", "Output", "Batch (Input / Output)", "Free Tier"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "Ja"],
        ["Gemini 4 Argon", "$2.00 bis 30. Nov., dann $4.00", "$10.00 bis 30. Nov., dann $20.00", "$1.00 / $5.00, dann $2.00 / $10.00", "Nein"],
        ["Gemini 4 Carbon", "$2.00 bis 30. Nov., dann $4.00", "$10.00 bis 30. Nov., dann $20.00", "$1.00 / $5.00, dann $2.00 / $10.00", "Nein"],
        ["Gemini 3.8 Flash", "$0.75 bis 31. Dez., dann $1.50", "$3.75 bis 31. Dez., dann $7.50", "-", "Ja"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen vs. Argon vs. Carbon",
      text: [
        "Google teilt die Arbeit nach Tiefe auf. Carbon ist sein leistungsfähigstes Reasoning-Modell, für komplexes Software-Engineering, anspruchsvolle Mathematik und Naturwissenschaften und autonome mehrstufige Agents. Argon ist das effiziente Frontier-Modell, mit schnelleren Antworten und geringerem Token-Verbrauch als Carbon. Hydrogen ist für schnelles, alltägliches Coding und agentische Arbeit gedacht und kann als Worker oder Verifier laufen, während Carbon koordiniert.",
        "Beim Preis ist Hydrogen heute günstiger als Argon und Carbon, und der Abstand wächst am 1. Dezember, wenn deren Launch-Preise enden. Nach Googles Zahlen liegt es im Artificial Analysis Intelligence Index außerdem knapp vor Argon (51 vs. 50 auf high). Weder Carbon noch Argon haben ein Free Tier in der Gemini API; Hydrogen schon.",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen vs. Gemini 3.8 Flash",
      text: [
        "Wenn du 3.8 Flash nutzt, präsentiert Google Hydrogen als das Upgrade: schneller in der Standardeinstellung, mehr als dreimal so viel auf Terminal-Bench 4.1 und deutlich weniger erfundene Behauptungen. Bis zum 31. Dezember kostet es pro Token doppelt so viel wie 3.8 Flash; ab dem 1. Januar 2027 stehen beide bei denselben $1.50 und $7.50. Googles Partner berichten außerdem von 12% bis 23% weniger Tokens pro Aufgabe, was einen Teil des Unterschieds ausgleicht.",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen vs. Claude Sonnet 5.5 und Opus 5.5",
      text: [
        "Googles Ankündigung vergleicht Hydrogen nicht mit Claude, deshalb hier die Fakten, die sich vergleichen lassen. Mit $1.50 und $7.50 pro Million Tokens liegt Hydrogen im Listenpreis unter Claude Sonnet 5.5 ($2 und $10) und deutlich unter Opus 5.5 ($4 und $20), und es bietet einen Kontext von 1 Million Tokens mit bis zu 1 Million Output-Tokens. Claude Code und Codex laufen mit den Modellen ihres eigenen Anbieters, daher richtet sich die Modellwahl meist nach dem Agent, mit dem du arbeitest; wie die beiden sich unterscheiden, liest du in [Claude Code vs. Codex](/blog/claude-code-vs-codex).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du Gemini 4 Hydrogen",
      steps: [
        { title: "Probier es in Google AI Studio aus", text: "Wähl Gemini 4 Hydrogen in AI Studio; es ist in jeder AI-Studio-Stufe verfügbar, auch in der kostenlosen." },
        { title: "Ruf es über die Gemini API auf", text: "Nutze den Modellcode `gemini-4-hydrogen`. Lass Thinking auf dem Standard high und geh auf medium oder low, wenn Tempo wichtiger ist als Tiefe.", code: api },
        { title: "Code damit in Google Antigravity", text: "Zahlende Abonnenten von Google AI Pro und Ultra bekommen es in Antigravity, wo Orchestrator innerhalb einer Session zwischen Carbon und Hydrogen wechseln kann." },
        { title: "Nutz es in anderen Agents", text: "Coding-Agents, die einen Gemini-API-Key akzeptieren, können `gemini-4-hydrogen` aufrufen, sobald sie das Modell anbieten; schau in die Modellliste deines Agents." },
      ],
      source: { label: "Quelle: Google, Introducing Gemini 4 Hydrogen", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein schnelleres Modell ist die halbe Miete. Die andere Hälfte ist ein Job.",
      text: [
        "Modelle werden immer schneller und günstiger, und die Agents drumherum warten trotzdem auf den nächsten Prompt. Crewmark macht aus deinen Coding-Agent-Sessions KI-Mitarbeiter mit Rolle, Ziel in Zahlen, Arbeitszeiten und Heartbeat, sodass sie sich das nächste Issue selbst vom Board nehmen.",
      ],
      steps: [
        { title: "Wähl eine Rolle", text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa einen [KI-Softwareentwickler](/ai-employees/software-engineer)." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu, lass die regelmäßigen wiederkehren und lass den Heartbeat den Mitarbeiter wecken, damit er sich das nächste nimmt." },
        { title: "Sieh, was er kann", text: "Jobs mit Setup und Regeln für jeden Agent findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini 4 Hydrogen nutzen" },
  mid: {
    title: "Sollen deine Agents Issues nach Zeitplan abarbeiten?",
    text: "Crewmark gibt jedem Agent eine Rolle, einen Heartbeat und ein gemeinsames Board, sodass er sich den nächsten Job selbst nimmt.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist Gemini 4 Hydrogen?",
        a: "Googles schnelles Gemini-4-Modell für alltägliches Coding und agentische Arbeit, erschienen am 12. November 2026. Es liegt unterhalb von Gemini 4 Carbon und Argon und hat einen Kontext von 1 Million Tokens mit bis zu 1 Million Output-Tokens.",
      },
      {
        q: "Was kostet Gemini 4 Hydrogen?",
        a: "In der Gemini API $1.50 pro Million Input-Tokens und $7.50 pro Million Output-Tokens, gleich über das gesamte Kontextfenster; Batch kostet $0.75 und $3.75. Es gibt ein Free Tier, und in der Gemini-App steht es allen zur Verfügung.",
      },
      {
        q: "Ist Gemini 4 Hydrogen besser als Argon?",
        a: "Google positioniert die beiden unterschiedlich: Argon und Carbon für tiefes Reasoning über lange Aufgaben, Hydrogen für schnelle Ausführung. Im Artificial Analysis Intelligence Index gibt Google für Hydrogen in der Standardeinstellung 51 an und für Argon 50, und Hydrogen ist günstiger.",
      },
      {
        q: "Gemini 4 Hydrogen vs. 3.8 Flash: Lohnt sich der Wechsel?",
        a: "Laut Google ist Hydrogen in der Standardeinstellung 2,5-mal schneller, erreicht auf Terminal-Bench 4.1 57% statt 18.2% und liefert deutlich weniger erfundene Behauptungen. Bis zum 31. Dezember 2026 kostet es pro Token doppelt so viel wie 3.8 Flash; ab dem 1. Januar 2027 stehen beide bei $1.50 und $7.50.",
      },
      {
        q: "Wie lautet der Modellcode von Gemini 4 Hydrogen?",
        a: "`gemini-4-hydrogen`, in der Gemini API und in Google AI Studio.",
      },
      {
        q: "Wo finde ich die Model Card von Gemini 4 Hydrogen?",
        a: "Google hat sie als PDF veröffentlicht: [Model Card von Gemini 4 Hydrogen](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
      },
    ],
  },
  cta: {
    title: "Setz die neuesten Modelle auf einen festen Job.",
    text: "Crewmark macht aus Coding-Agent-Sessions KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand von Googles Ankündigung und den Preis- und Modellseiten der Gemini API am 13. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Google oder Anthropic verbunden oder von ihnen unterstützt. Gemini und Claude sind Marken ihrer jeweiligen Inhaber.",
};
