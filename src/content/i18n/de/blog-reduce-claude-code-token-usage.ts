import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

Konzentriere dich beim Compact auf Testausgaben und Codeänderungen.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Token-Verbrauch senken: 12 Tipps, die wirken | Crewmark",
    description:
      "Warum Claude Code so viele Tokens verbraucht und wie du es senkst: Verbrauch mit /usage und /context prüfen, clear und compact nutzen, Modell und Effort wählen, CLAUDE.md und MCP entschlacken, Hooks, Skills und Subagents einsetzen.",
  },
  breadcrumb: "Claude Code Token-Verbrauch senken",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "So senkst du den Token-Verbrauch von Claude Code (und stößt nicht mehr an Limits)",
    lead: "Claude Code schickt bei jeder Anfrage die ganze Unterhaltung mit, deshalb wächst der Token-Verbrauch mit dem Kontext: Eine einzeilige Frage spät in einer langen Session kostet weit mehr als dieselbe Frage in einer frischen. Diese Anleitung zeigt, wie du siehst, wohin deine Tokens gehen, und dann zwölf Änderungen aus Anthropics eigener Dokumentation, die den Verbrauch senken: von `/clear` und `/compact` über die Wahl von Modell und Effort und schlankere CLAUDE.md und MCP-Server bis zum Auslagern lauter Arbeit in Hooks, Skills und Subagents.",
    cta: "Early Access anfragen",
    secondary: "Direkt zu den Tipps",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "Zuerst: sehen, wohin deine Tokens gehen",
      headers: ["Tool", "Was es zeigt"],
      rows: [
        ["`/usage`", "Session-Tokens und geschätzte Kosten; bei Pro, Max, Ultra, Team und Enterprise außerdem Nutzungsbalken des Tarifs, eine Aufschlüsselung nach Skills, Subagents, Plugins und MCP-Servern, Empfehlungen und deine teuersten `/loop`-Aufgaben"],
        ["`/context`", "Was das Kontextfenster gerade füllt"],
        ["Statuszeile", "Die Kontextnutzung ständig im Blick, wenn du sie einrichtest"],
        ["Spinner-Zähler", "Die Output-Tokens des aktuellen Turns, etwa `↓ 5.5k tokens`; dein Kontext ist darin nicht enthalten"],
        ["`/insights`", "Ein HTML-Bericht darüber, wie du in den letzten Sessions arbeitest, mit Reibungspunkten und Vorschlägen"],
      ],
    },
    {
      kind: "text",
      title: "Warum der Verbrauch in einer langen Session steigt",
      points: [
        "Langer Kontext: Jede Anfrage trägt die komplette Unterhaltung, und jede Runde von Tool-Aufrufen schickt eine weitere Anfrage. Caching macht erneutes Lesen günstiger, aber nicht kostenlos.",
        "Cache-Misses: Deine erste Nachricht nach einer Pause, die länger ist als die Cache-Lebensdauer, verarbeitet den ganzen Kontext neu.",
        "Was läuft, während du nicht aktiv bist: sessionbezogene geplante Aufgaben und `/loop`, Nachrichten aus deinen anderen Sessions, Ziel-Check-ins, Session-Zusammenfassungen und Komprimierung im Leerlauf.",
        "Parallele Worker: Jeder Subagent, Workflow-Agent und jedes Mitglied eines Agent Teams schickt eigene Anfragen. Agent Teams verbrauchen etwa 7x so viele Tokens wie eine normale Session, wenn die Teammitglieder im Plan Mode laufen.",
        "Die Komprimierung selbst: `/compact` muss die Unterhaltung lesen, die es zusammenfasst. `/clear` kostet nichts.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "12 Wege, den Token-Verbrauch von Claude Code zu senken",
      steps: [
        {
          title: "Zwischen unabhängigen Aufgaben leeren",
          text: "`/clear` startet eine neue Unterhaltung, sodass alter Kontext nicht mehr mitfährt. Führ vorher `/rename` aus, wenn du sie später mit `/resume` fortsetzen willst.",
        },
        {
          title: "Mit Anweisungen komprimieren",
          text: "`/compact Focus on code samples and API usage` sagt Claude, was erhalten bleiben soll. Dauerhafte Compact-Anweisungen kannst du auch in die CLAUDE.md schreiben.",
          code: compact,
        },
        {
          title: "Das passende Modell nutzen",
          text: "Sonnet erledigt die meiste Programmierarbeit und kostet weniger als Opus; heb dir Opus für Architektur und schwieriges Reasoning auf. Wechsle mit `/model` und gib einfachen Subagents `model: haiku`.",
        },
        {
          title: "Den Effort bei einfacher Arbeit senken",
          text: "Thinking-Tokens werden als Output abgerechnet und können pro Anfrage in die Zehntausende gehen. Senk die Stufe mit `/effort` für Routineaufgaben.",
        },
        {
          title: "Die CLAUDE.md kurz halten",
          text: "Sie wird in jeder Session vollständig geladen. Bleib unter etwa 200 Zeilen und verschieb workflowspezifische Anweisungen in Skills, die nur bei Bedarf laden. Siehe die [CLAUDE.md-Anleitung](/blog/claude-md) und [Claude Code Skills](/blog/claude-code-skills).",
        },
        {
          title: "MCP-Server ausmisten",
          text: "Tool-Definitionen werden standardmäßig erst bei Bedarf geladen, aber jeder Server fügt trotzdem Namen und Anweisungen hinzu. Deaktivier ungenutzte Server in `/mcp` und greif lieber zu CLIs wie `gh`, `aws` oder `gcloud`, die keine Liste pro Tool hinzufügen.",
        },
        {
          title: "Laute Ausgaben mit einem Hook filtern",
          text: "Ein PreToolUse-Hook kann Testbefehle so umschreiben, dass nur Fehlschläge übrig bleiben, und macht so aus Zehntausenden Tokens an Logs ein paar Hundert. Anthropics Dokumentation enthält ein fertiges Filterskript.",
          code: hook,
        },
        {
          title: "Ausführliche Arbeit an Subagents abgeben",
          text: "Wenn ein Subagent Tests ausführt, Dokumentation liest oder Logs verarbeitet, bleibt die Ausgabe in seinem Kontext; zurück kommt nur eine Zusammenfassung. Gib diesen Subagents ein kleineres Modell.",
        },
        {
          title: "Code-Intelligence-Plugins installieren",
          text: "Bei typisierten Sprachen beantwortet ein Language-Server-Plugin „Gehe zu Definition“ mit einem einzigen Aufruf statt mit einem grep und mehreren gelesenen Dateien.",
        },
        {
          title: "Konkrete Prompts schreiben",
          text: "„Füge der Login-Funktion in auth.ts eine Eingabevalidierung hinzu“ liest ein paar Dateien; „verbessere diese Codebasis“ durchsucht alles.",
        },
        {
          title: "Erst planen, früh stoppen",
          text: "Nutz den [Plan Mode](/blog/claude-code-plan-mode) für große Änderungen, damit eine falsche Richtung auffällt, bevor Code geschrieben wird; drück Escape, sobald Claude vom Kurs abkommt, und spring mit `/rewind` zu einem Checkpoint zurück.",
        },
        {
          title: "Im Blick behalten, was läuft, während du weg bist",
          text: "Jede geplante Aufgabe, jeder `/loop`-Lauf und jede Leerlauf-Nachricht schickt deinen gesamten Kontext. Stopp Loops, die du nicht brauchst, setz `crossSessionInbound` auf `hold`, um Nachrichten aus anderen Sessions zu sammeln, und prüf die Loops-Zeilen in `/usage`.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "Nutzungslimits und Teamkosten",
      text: [
        "Bei Pro, Max und Ultra wird die Nutzung auf die Limits deines Tarifs angerechnet statt in Rechnung gestellt; wie die 5-Stunden- und Wochenlimits funktionieren, steht in [Claude Code vs. Codex](/blog/claude-code-vs-codex). Über die API nennt Anthropic einen Unternehmensdurchschnitt von rund $13 pro Entwickler und aktivem Tag und $150 bis $250 im Monat, wobei 90% der Nutzer unter $30 am Tag bleiben.",
        "Admins können Ausgabenlimits für Teams festlegen, und eine `modelPricing`-Tabelle in den verwalteten Einstellungen sorgt dafür, dass `/usage` die vertraglich vereinbarten Preise statt der Listenpreise zeigt.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Agents, die nach Zeitplan arbeiten, ohne die ganze Nacht Tokens zu verbrennen",
      text: [
        "Alles, was eine Session weckt, schickt ihren gesamten Kontext, deshalb braucht ein ständig aktiver Agent Grenzen. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter, der per Heartbeat nur während der Arbeitszeiten aufwacht, die du festlegst.",
      ],
      steps: [
        {
          title: "Arbeitszeiten und Rhythmus festlegen",
          text: "Wähl alle 15, 30 oder 60 Minuten und die Stunden, in denen er im Dienst ist; außerhalb davon schläft er. Siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Ein Issue nach dem anderen",
          text: "Jeder Heartbeat übernimmt das nächste Issue vom Board, sodass die Session an einer klar umrissenen Aufgabe arbeitet statt ziellos zu erkunden.",
        },
        {
          title: "Mit dem Tarif, den du ohnehin zahlst",
          text: "Mitarbeiter laufen über dein bestehendes Abo und werden auf die Limits deines Tarifs angerechnet. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Den Token-Verbrauch von Claude Code senken" },
  mid: {
    title: "Gib deine Tokens für Arbeit aus, nicht fürs Warten.",
    text: "Crewmark weckt Claude Code während der Arbeitszeiten mit Rolle, Ziel und dem nächsten Issue vom Board.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zum Token-Verbrauch von Claude Code",
    items: [
      {
        q: "Warum verbraucht Claude Code so viele Tokens?",
        a: "Es schickt bei jeder Anfrage die komplette Unterhaltung mit, und jede Runde von Tool-Aufrufen ist eine weitere Anfrage. Lange Sessions, Cache-Misses nach Pausen, Subagents und alles, was läuft, während du nicht aktiv bist, summieren sich.",
      },
      {
        q: "Wie prüfe ich meinen Token-Verbrauch in Claude Code?",
        a: "Führ `/usage` aus für Session-Tokens, Tarifnutzung und eine Aufschlüsselung mit Empfehlungen, und `/context`, um zu sehen, was das Kontextfenster füllt. Eine Statuszeile kann die Kontextnutzung dauerhaft anzeigen.",
      },
      {
        q: "Wie spare ich am schnellsten Tokens?",
        a: "Führ `/clear` zwischen unabhängigen Aufgaben aus, nutz Sonnet, solange du Opus nicht brauchst, und halt die CLAUDE.md kurz. Diese drei Punkte decken den Großteil der Verschwendung ab.",
      },
      {
        q: "Spart /compact Tokens?",
        a: "Es verkleinert den Kontext für spätere Nachrichten, aber die Komprimierung selbst liest die ganze Unterhaltung und ist damit eine große Anfrage. Wenn du keine Kontinuität brauchst, kostet `/clear` nichts.",
      },
      {
        q: "Verbrauchen MCP-Server Tokens?",
        a: "Tool-Definitionen werden erst bei Bedarf geladen, aber jeder Server fügt trotzdem Tool-Namen und Anweisungen hinzu. Deaktivier Server, die du nicht nutzt, und greif lieber zu CLI-Tools, wo es sie gibt.",
      },
      {
        q: "Warum habe ich mein Nutzungslimit so schnell erreicht?",
        a: "Meist wegen einer langen Session, einiger Cache-Misses oder Hintergrundarbeit wie `/loop`, geplanten Aufgaben, Subagents oder Agent Teams. In einem bezahlten Tarif zeigt `/usage`, was davon hinter deiner jüngsten Nutzung steckt.",
      },
      {
        q: "Sparen Subagents Tokens?",
        a: "Sie halten ausführliche Ausgaben aus deiner Hauptunterhaltung heraus, wodurch spätere Anfragen klein bleiben, aber ihre eigenen Anfragen zählen trotzdem. Gib ihnen ein kleineres Modell, um weniger auszugeben.",
      },
    ],
  },
  cta: {
    title: "Lass Claude Code nach einem Zeitplan arbeiten, den du bestimmst.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Manage costs effectively) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
