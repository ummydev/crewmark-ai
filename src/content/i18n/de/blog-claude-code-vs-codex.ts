import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Codex (2026): Preise, Nutzungslimits und Funktionen im Vergleich | Crewmark",
    description:
      "Claude Code vs OpenAI Codex im November 2026: Modelle, Pläne und Preise, 5-Stunden- und Wochenlimits, CLAUDE.md vs AGENTS.md, Sandbox, Subagenten, geplante Aufgaben und welches du wählen solltest.",
  },
  breadcrumb: "Claude Code vs Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code · Codex",
    title: "Claude Code vs Codex: Welchen Coding-Agenten solltest du nutzen?",
    lead: "Claude Code ist Anthropics Coding-Agent, Codex der von OpenAI. Beide lesen dein Repository, bearbeiten Dateien, führen Befehle aus und laufen im Terminal, in einer IDE, als Desktop-App, im Web und auf dem Smartphone. Sie unterscheiden sich bei Modellen, Plänen, Limits, Standardeinstellungen und Offenheit. Dieser Vergleich zeigt, was jeder kostet, wie die Nutzungslimits funktionieren, wie die Funktionen zusammenpassen und welcher zu welcher Art von Arbeit passt, Stand November 2026.",
    cta: "Early Access anfragen",
    secondary: "Direkt zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Codex auf einen Blick",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["Hersteller", "Anthropic", "OpenAI"],
        ["Standardmodell", "Claude Opus 5.5; Sonnet 5.5, Haiku 5.5 und Fable 5.1 verfügbar", "GPT-6.1 Sol; GPT-6 Astra, GPT-6.1 Terra und GPT-6 Luna verfügbar"],
        ["Wo er läuft", "Terminal, VS Code, JetBrains, Desktop-App, claude.ai/code, Claude-Mobil-Apps, Slack", "Terminal, VS Code, Cursor und Windsurf, ChatGPT-Desktop-App, chatgpt.com/codex, ChatGPT-Mobil-App, Slack und Linear"],
        ["Günstigster Plan, der ihn enthält", "Claude Pro, $20/Monat", "ChatGPT Free (eingeschränkt), dann Go für $8/Monat und Plus für $20/Monat"],
        ["Open Source", "Nein: Das Repository ist öffentlich, aber alle Rechte vorbehalten", "CLI, SDK und App Server sind Open Source (Apache-2.0); die IDE-Erweiterung und die Cloud nicht"],
        ["Anweisungsdatei", "CLAUDE.md (liest AGENTS.md, wenn es keine CLAUDE.md gibt)", "AGENTS.md"],
        ["Sandbox", "Optional für Shell-Befehle", "Standardmäßig aktiv"],
        ["Geplante Aufgaben", "Geplante Cloud-Aufgaben (Vorschau), geplante Desktop-Aufgaben, `/loop`", "Geplante Aufgaben in der Desktop-App und in der Cloud"],
      ],
    },
    {
      kind: "table",
      title: "Preise: welche Pläne welchen enthalten",
      text: [
        "Beide gehören zum Chat-Abo ihres Herstellers, und beide laufen auch mit einem API-Schlüssel, abgerechnet pro Token. Die Preise gelten pro Monat in US-Dollar.",
      ],
      headers: ["Claude-Plan", "Preis", "ChatGPT-Plan", "Preis"],
      rows: [
        ["Free", "Kein Claude Code", "Free", "$0, nur GPT-6 Luna"],
        ["Pro", "$20 ($17 bei jährlicher Zahlung)", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100, $200 oder $500"],
        ["Team", "$25 pro Platz (Standard), $125 (Premium)", "Business", "$25 pro Nutzer ($20 bei jährlicher Zahlung)"],
        ["Enterprise", "$20 pro Platz bei jährlicher Zahlung, plus Nutzung zu API-Preisen", "Enterprise, Edu", "Vertrieb kontaktieren"],
      ],
    },
    {
      kind: "text",
      title: "Nutzungslimits",
      text: [
        "Beide arbeiten mit einem gleitenden 5-Stunden-Fenster plus Wochenlimits, und bei beiden teilen sich Chat und Coding ein Kontingent. Keiner nennt für jeden Plan genaue Stunden oder Nachrichten.",
      ],
      points: [
        "Claude: Pro hat ein 5-Stunden-Limit und ein Wochenlimit. Max bekommt das Fünffache der Pro-Nutzung. Ultra bekommt pro Woche das Zehnfache von Pro und für verifizierte Konten kein 5-Stunden-Limit. Claude-Chat, Claude Code und die IDE zehren vom selben Kontingent.",
        "Claude: Wenn du das 5-Stunden-Limit mitten in einer Aufgabe erreichst, kann Claude Code den aktuellen Schritt noch beenden (bei Pro einmal pro Woche, bei Max jedes Mal).",
        "Codex: OpenAI schätzt die lokalen Nachrichten pro 5 Stunden bei Plus je nach Modell, von 15–160 bei GPT-6.1 Sol über 350–3,000 bei GPT-6 Luna bis 5–45 bei GPT-6 Astra. ChatGPT Pro hat derzeit kein 5-Stunden-Limit; Wochenlimits können gelten.",
        "Codex: Cloud-Aufgaben und GitHub-Code-Reviews nutzen dasselbe Kontingent, und der schnelle Modus verbraucht das 2,5-Fache.",
        "Bei beiden kannst du über das Limit hinaus weiterarbeiten: bei Claude mit Nutzungsguthaben oder einem API-Schlüssel, bei Codex mit Guthaben oder einem API-Schlüssel (der API-Schlüssel deckt CLI, SDK und IDE ab, nicht die Cloud-Funktionen).",
      ],
    },
    {
      kind: "table",
      title: "Funktionen im direkten Vergleich",
      headers: ["Funktion", "Claude Code", "Codex"],
      rows: [
        ["Projektanweisungen", "`CLAUDE.md`, `.claude/rules/`, automatisches Memory", "`AGENTS.md`, `AGENTS.override.md`, standardmäßig zusammen 32 KiB"],
        ["Konfiguration", "`settings.json`", "`config.toml`"],
        ["Subagenten", "Ja, dazu Hintergrund-Agenten", "Ja: eingebaute default, worker und explorer, dazu eigene TOML-Agenten"],
        ["Hooks", "Ja", "Ja, standardmäßig aktiv"],
        ["Skills, Plugins, MCP", "Ja", "Ja"],
        ["Plan-Modus", "Ja (Shift+Tab)", "Ja"],
        ["Berechtigungsmodi", "Manuell, Änderungen akzeptieren, Plan, Auto (von einem Klassifikator geprüft), Bypass", "Um Freigabe bitten, für mich freigeben, Vollzugriff, benutzerdefiniert"],
        ["Sandbox", "Optional: Seatbelt unter macOS, bubblewrap unter Linux; nicht unter nativem Windows", "Standardmäßig aktiv, einschließlich einer nativen Windows-Sandbox"],
        ["Paralleles Arbeiten", "Parallele Desktop- und Web-Sessions, Hintergrund-Agenten", "Worktrees in der Desktop-App, Cloud-Aufgaben"],
        ["Code-Review", "`@claude review` bei Team und Enterprise; `/code-review` lokal in jedem Plan", "`@codex review` auf GitHub; `/review` in der CLI"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du zwischen Claude Code und Codex",
      text: [
        "Einen alleinigen Sieger gibt es nicht: Jeder Hersteller veröffentlicht Benchmarks, in denen das eigene Modell vorn liegt, und die ändern sich mit jedem Release. Entscheide nach dem, was deinen Alltag betrifft.",
      ],
      steps: [
        {
          title: "Geh von dem Abo aus, das du schon bezahlst",
          text: "Mit Claude Pro oder Max ist Claude Code enthalten, mit ChatGPT Plus oder Pro auch Codex. Beide zu testen kostet mit den Einstiegsplänen $40 im Monat, und Codex läuft auch mit ChatGPT Free und Go bei kleineren Limits.",
        },
        {
          title: "Pass die Limits an deine Arbeitszeit an",
          text: "Für lange Sessions jeden Tag vergleichst du die Top-Pläne: Claude Ultra ($200) hat für verifizierte Konten kein 5-Stunden-Limit, und ChatGPT Pro derzeit ebenfalls keins. Für gelegentliche Nutzung genügen die $20-Pläne beider Anbieter.",
        },
        {
          title: "Entscheide, wie viel in einer Sandbox laufen soll",
          text: "Codex führt Befehle standardmäßig in einer Sandbox aus, auch unter Windows. Claude Code fragt standardmäßig vor jeder Aktion nach und bietet eine Sandbox, die du einschaltest, dazu einen Auto-Modus, in dem ein Klassifikator sichere Aktionen freigibt.",
        },
        {
          title: "Prüfe, wo dein Team arbeitet",
          text: "Claude Code hat ein JetBrains-Plugin und läuft aus Slack; Codex bindet sich in Cursor, Windsurf, Slack und Linear ein. Beide funktionieren in VS Code, im Web und mobil.",
        },
        {
          title: "Halte deine Anweisungen portabel",
          text: "Schreib deine Projektregeln in AGENTS.md und importiere sie in CLAUDE.md mit `@AGENTS.md`; dann lesen beide Agenten dieselbe Datei und ein Wechsel kostet nichts. Siehe die [CLAUDE.md-Anleitung](/blog/claude-md).",
        },
      ],
      source: { label: "Quellen: Claude-Code-Dokumentation und Codex-Dokumentation", href: claudeDocs },
    },
    {
      kind: "text",
      title: "Und Cursor, Gemini CLI und OpenCode?",
      text: [
        "Cursor ist ein Editor mit eigenem Agenten und kann auch die Erweiterungen von Claude Code und Codex hosten. Gemini CLI und OpenCode sind Terminal-Agenten wie diese beiden; OpenCode ist Open Source und arbeitet mit vielen Modellanbietern. Alle lesen AGENTS.md, daher gilt das portable Setup von oben auch hier.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Nutze beide: gib jedem Agenten eine Rolle",
      text: [
        "Crewmark zwingt dich nicht zu einer Wahl. Es macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten, weckt ihn per Heartbeat und gibt ihm Issues von einem gemeinsamen Board. Ein Mitarbeiter kann auf Claude Code laufen und ein anderer auf Codex, im selben Projekt.",
      ],
      steps: [
        {
          title: "Aus einer Session einen Mitarbeiter machen",
          text: "Wähle eine Rolle wie Software-Entwickler oder SEO-Spezialist, formuliere ihr Ziel als Zahl und führe den Einrichtungsbefehl in Claude Code oder Codex aus.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "In seinen Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Konversation auf. Siehe [so machst du Claude Code proaktiv](/proactive-claude-code) und [so machst du Codex proaktiv](/proactive-codex).",
        },
        {
          title: "Issues zuweisen und auf seine Nachrichten antworten",
          text: "Leg die Arbeit auf das Board; jeder Mitarbeiter nimmt, was zu seiner Rolle passt, kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht. Lies [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Zwischen Claude Code und Codex wählen" },
  mid: {
    title: "Du zahlst schon für Claude oder ChatGPT?",
    text: "Crewmark macht aus Claude Code und Codex KI-Mitarbeiter mit Heartbeat und einem Board mit Issues, mit dem Plan, den du schon hast.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Code vs Codex",
    items: [
      {
        q: "Ist Claude Code besser als Codex?",
        a: "Keiner ist für alle besser. Beide sind leistungsfähige Agenten mit Subagenten, Hooks, Skills, MCP und Plan-Modus. Wähle nach dem Abo, das du hast, den Limits, die du brauchst, den Sandbox-Standards, die du willst, und den Tools, die dein Team nutzt.",
      },
      {
        q: "Was ist günstiger, Claude Code oder Codex?",
        a: "Codex hat den günstigeren Einstieg: Es ist in ChatGPT Free (eingeschränkt) und Go für $8 im Monat enthalten. Claude Code beginnt mit Claude Pro für $20. Für $20 im Monat enthalten Claude Pro und ChatGPT Plus jeweils ihren Agenten.",
      },
      {
        q: "Welche Nutzungslimits haben Claude Code und Codex?",
        a: "Beide nutzen ein 5-Stunden-Fenster plus Wochenlimits, die sie sich mit dem Chat teilen. Claude Max gibt das Fünffache von Pro, Ultra pro Woche das Zehnfache von Pro. OpenAI schätzt bei Plus 15–160 Nachrichten mit GPT-6.1 Sol pro 5 Stunden. Claude Ultra (verifiziert) und ChatGPT Pro haben derzeit kein 5-Stunden-Limit.",
      },
      {
        q: "Welche Modelle nutzen Claude Code und Codex?",
        a: "Claude Code nutzt standardmäßig Claude Opus 5.5, mit Sonnet 5.5, Haiku 5.5 und Fable 5.1 zur Auswahl. Codex nutzt standardmäßig GPT-6.1 Sol, mit GPT-6 Astra, GPT-6.1 Terra und GPT-6 Luna zur Auswahl.",
      },
      {
        q: "Ist Codex Open Source? Und Claude Code?",
        a: "Die Codex-CLI ist Open Source unter Apache-2.0; die IDE-Erweiterung und die Cloud sind es nicht. Das Repository von Claude Code ist öffentlich, aber nicht Open Source: alle Rechte vorbehalten, Nutzung nach Anthropics kommerziellen Bedingungen.",
      },
      {
        q: "Können Claude Code und Codex dieselben Anweisungen teilen?",
        a: "Ja. Schreib sie in AGENTS.md, das Codex liest, und setze `@AGENTS.md` in CLAUDE.md, damit Claude Code dieselbe Datei liest.",
      },
      {
        q: "Kann ich Claude Code und Codex zusammen nutzen?",
        a: "Ja. Viele Entwickler behalten beide und wechseln je nach Aufgabe. Mit Crewmark kann jeder ein KI-Mitarbeiter mit eigener Rolle sein, der per Heartbeat Issues vom selben Board nimmt.",
      },
    ],
  },
  cta: {
    title: "Bring Claude Code und Codex in dasselbe Team.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 5. November 2026 mit der Claude-Code-Dokumentation, claude.com/pricing, der Codex-Dokumentation auf learn.chatgpt.com und beiden GitHub-Repositories abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude und Claude Code sind Marken von Anthropic; ChatGPT und Codex sind Marken von OpenAI.",
};
