import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor-Alternativen 2026: 10 kostenlose, Open-Source- und günstigere Optionen | Crewmark",
    description:
      "Cursor gehört jetzt zu SpaceX und setzt in seinen Plänen auf Grok. Zehn Alternativen im Vergleich: Claude Code, Codex, GitHub Copilot, Devin Desktop (Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity und Junie, mit Preisen und Gratis-Tarifen.",
  },
  breadcrumb: "Cursor-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · KI-Coding-Tools",
    title: "Die besten Cursor-Alternativen 2026",
    lead: "Cursor gehört seit August 2026 zu SpaceX, und seine Pläne sind jetzt um Grok herum gebaut: Der Plus-Plan für $8 bietet nur Grok-Modelle, und Claude, GPT oder Gemini kosten ab dem $30-Plan extra, zum API-Listenpreis. Wenn du dich dafür nicht angemeldet hast, gibt es gute Alternativen: Agenten, die in deinem bestehenden Abo enthalten sind, Editoren mit eigener KI und Open-Source-Tools, in denen du deinen eigenen Key nutzt. Hier sind zehn davon, verglichen nach Art, Gratis-Tarif, Preis und Modellen, Stand 6. November 2026.",
    cta: "Early Access anfragen",
    secondary: "Direkt zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Cursor-Alternativen im Vergleich",
      text: [
        "Einstiegspreise sind die günstigsten bezahlten Einzelpläne auf der Seite des jeweiligen Anbieters, in US-Dollar pro Monat. „Claude-Modelle“ bedeutet, dass du die Modelle von Anthropic darin nutzen kannst, inklusive oder mit eigenem Key.",
      ],
      headers: ["Tool", "Art", "Kostenlose Option", "Bezahlt ab", "Claude-Modelle", "Open Source"],
      rows: [
        ["Claude Code", "Agent: Terminal, IDEs, Desktop, Web", "Nein", "$20 (Claude Pro)", "Inklusive", "Nein"],
        ["OpenAI Codex", "Agent: CLI, IDE, Desktop, Cloud", "Ja, ChatGPT Free", "$8 (ChatGPT Go)", "Nein", "CLI unter Apache-2.0"],
        ["GitHub Copilot", "Erweiterung für die meisten IDEs, CLI", "Ja, 2.000 Vervollständigungen pro Monat", "$10 (Pro)", "Ja; Opus ab Pro+ ($39)", "Nein"],
        ["Devin Desktop (früher Windsurf)", "IDE", "Ja", "$20 (Pro)", "Ja", "Nein"],
        ["Zed", "Nativer Editor", "Ja, mit eigenen Keys", "$10 (Pro)", "Mit eigenem Key oder externem Agenten", "Ja"],
        ["Cline", "VS-Code-Erweiterung und CLI", "Kostenlos; du zahlst die Modellnutzung", "Kein Einzelplan", "Mit eigenem Key", "Apache-2.0"],
        ["Kilo Code", "Erweiterung für VS Code und JetBrains, CLI", "Ja", "$19 (Kilo Pass Starter)", "Über das Gateway oder mit eigenem Key", "MIT"],
        ["OpenCode", "Terminal-Agent, Desktop, IDE", "Ja", "Nicht angegeben", "Mit eigenem Key; Anmeldung mit Copilot oder ChatGPT", "MIT"],
        ["Google Antigravity", "Agentische IDE, CLI", "Ja", "Business ab $30 pro Platz", "In den bezahlten Plänen", "Nein"],
        ["JetBrains Junie", "Agent in JetBrains-IDEs, CLI", "Ja, Junie Lite", "AI Pro, angegeben mit $8.33", "Ja, oder mit eigenem Key", "Nein"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du eine Cursor-Alternative",
      steps: [
        {
          title: "Geh von dem Abo aus, das du schon bezahlst",
          text: "Claude Pro oder Max enthält Claude Code; jeder ChatGPT-Plan enthält Codex; viele Firmen haben GitHub Copilot schon. Was du bereits bezahlst, ist meist günstiger als ein neues Tool plus API-Rechnungen.",
        },
        {
          title: "Entscheide dich zwischen Editor und Agent",
          text: "Wenn du das Cursor-Gefühl willst (ein Editor mit Inline-Bearbeitung und Tab-Vervollständigung), sieh dir Devin Desktop, Zed, Copilot in VS Code oder Antigravity an. Wenn du vor allem Aufgaben an einen Agenten abgibst, laufen Claude Code, Codex und OpenCode in jedem Terminal und Editor.",
        },
        {
          title: "Wenn du es kostenlos oder Open Source willst",
          text: "Cline, Kilo Code, OpenCode und Zed sind Open Source und mit eigenem API-Key kostenlos nutzbar; du zahlst dem Modellanbieter nur, was du verbrauchst.",
        },
        {
          title: "Prüfe, woher deine Modelle kommen",
          text: "Wenn du Claude täglich nutzen willst, erspart dir ein Tool, das es im Plan enthält (Claude Code, Copilot, Devin Desktop, Junie), Überraschungen bei der Abrechnung pro Token. Tools mit eigenem Key geben dir jedes Modell zum Listenpreis.",
        },
        {
          title: "Nimm deine Regeln mit",
          text: "Viele dieser Tools lesen AGENTS.md, ein Umzug weg von `.cursor/rules` heißt also vor allem, deine Regeln in eine Datei zu kopieren. In der [CLAUDE.md-Anleitung](/blog/claude-md) steht, wie du eine Datei für mehrere Agenten nutzt.",
        },
      ],
      source: { label: "Quelle: GitHub-Copilot-Pläne und die Website des jeweiligen Anbieters", href: copilot },
    },
    {
      kind: "text",
      title: "Die Alternativen im Einzelnen",
      points: [
        "Claude Code: Anthropics Agent, enthalten in Claude Pro ($20, oder $17 bei jährlicher Zahlung), Max ($100) und Ultra ($200); läuft auch mit einem API-Key. Vergleiche ihn in [Claude Code vs Cursor](/blog/claude-code-vs-cursor).",
        "OpenAI Codex: in jedem ChatGPT-Plan enthalten, von Free (GPT-6 Luna) und Go ($8) bis Plus ($20) und Pro (ab $100). Siehe [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "GitHub Copilot: Free, Pro ($10), Pro+ ($39) und Max ($100); läuft in VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse und Zed, mit Claude, GPT, Gemini und weiteren Modellen.",
        "Devin Desktop: der neue Name von Windsurf, von Cognition; windsurf.com leitet jetzt dorthin weiter. Free, Pro ($20) und Max ($200).",
        "Zed: ein schneller nativer Editor für macOS, Windows und Linux; kostenlos mit eigenen Keys oder externen Agenten wie Claude Code und Codex, Pro für $10 mit gehosteten Modellen.",
        "Cline: eine Open-Source-Erweiterung für VS Code und eine CLI; kostenlos, du zahlst nur die Inferenz mit deinen eigenen Keys.",
        "Kilo Code: Open Source (MIT), inzwischen im Besitz von Anaconda; kostenlos mit eigenen Keys oder kostenlosen Modellen, Kilo Pass ab $19.",
        "OpenCode: ein Open-Source-Terminal-Agent mit über 75 Modellanbietern; kostenlos, und er kann sich mit einem bestehenden Copilot- oder ChatGPT-Abo anmelden.",
        "Google Antigravity: Googles agentische IDE und CLI, für Einzelpersonen kostenlos; bezahlte Pläne bringen Gemini 4 Argon und Claude-Modelle dazu.",
        "JetBrains Junie: der Coding-Agent von JetBrains in den eigenen IDEs und als CLI, mit einem kostenlosen Lite-Tarif sowie den Plänen AI Pro und Ultimate.",
        "Nicht in der Liste: Roo Code (das GitHub-Repository ist archiviert), Gemini CLI (die private Nutzung ist im Juni 2026 zu Antigravity CLI gewechselt) und Aider (kein Release seit August 2025).",
      ],
    },
    {
      kind: "text",
      title: "Was sich bei Cursor geändert hat",
      text: [
        "Cursor gab am 14. August 2026 bekannt, dass SpaceX die Übernahme abgeschlossen hat. Die Preisseite listet jetzt Free, Plus ($8, nur Grok-Modelle), Premium ($30, mit Cloud-Agenten, Automationen, Code-Review und Drittanbieter-Modellen, die nach Nutzung zum API-Listenpreis abgerechnet werden), Super ($100) und Ultra ($200), dazu X-Funktionen wie weniger Werbung in der Timeline. Die Nutzung ist ein gemeinsames Kontingent mit Grok, das sich wöchentlich erneuert. Wenn du bei Cursor bleibst, kannst du die Claude-Code-Erweiterung oder -CLI weiterhin darin nutzen, mit deinem Claude-Plan.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Du wechselst das Tool? Gib dem neuen einen Job.",
      text: [
        "Egal, zu welchem Agenten du wechselst: Er wartet auf deinen nächsten Prompt. Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board nimmt, mit dem Abo, das du schon bezahlst.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle und ein Ziel",
          text: "Software-Entwickler, Reviewer, SEO-Texter: Jeder Mitarbeiter hat ein Ziel, das als Zahl formuliert ist. Lies [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "In seinen Arbeitszeiten wacht er alle 15, 30 oder 60 Minuten auf und nimmt das nächste Issue; siehe [so machst du Claude Code proaktiv](/proactive-claude-code).",
        },
        {
          title: "Lass mehrere gleichzeitig laufen",
          text: "Gib jedem einen eigenen Worktree und eine eigene Rolle; siehe die [Orchestrierungs-Tools für Claude Code](/blog/claude-code-orchestration-tools).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Eine Cursor-Alternative wählen" },
  mid: {
    title: "Du wechselst von Cursor zu Claude Code, Codex oder OpenCode?",
    text: "Crewmark macht daraus KI-Mitarbeiter, die per Heartbeat aufwachen und sich das nächste Issue selbst nehmen.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Cursor-Alternativen",
    items: [
      {
        q: "Was ist die beste Alternative zu Cursor?",
        a: "Mit einem Claude-Plan Claude Code, mit ChatGPT Codex; für einen Editor, der sich wie Cursor anfühlt, Devin Desktop (früher Windsurf) oder Copilot in VS Code; kostenlos und Open Source Cline, Kilo Code, OpenCode oder Zed mit eigenem Key.",
      },
      {
        q: "Gibt es eine kostenlose Cursor-Alternative?",
        a: "Ja. Cline, Kilo Code, OpenCode und Zed sind mit eigenem API-Key kostenlos, Copilot hat einen Gratis-Tarif mit 2.000 Vervollständigungen pro Monat, Codex läuft mit ChatGPT Free, und Antigravity und Devin Desktop haben kostenlose Pläne.",
      },
      {
        q: "Welche Open-Source-Alternativen zu Cursor gibt es?",
        a: "Cline (Apache-2.0), Kilo Code (MIT), OpenCode (MIT) und Zed sind Open Source; die Codex-CLI ist ebenfalls Open Source (Apache-2.0).",
      },
      {
        q: "Warum hat Cursor seine Preise geändert?",
        a: "Nach der Übernahme durch SpaceX (bekanntgegeben am 14. August 2026) wurden die Pläne auf Grok-Modelle und ein mit X gebündeltes Angebot umgestellt: Plus für $8 bietet nur Grok, und Drittanbieter-Modelle wie Claude kosten ab Premium ($30) extra, zum API-Listenpreis.",
      },
      {
        q: "Was ist mit Windsurf passiert?",
        a: "Windsurf heißt jetzt Devin Desktop und stammt von Cognition; windsurf.com leitet auf devin.ai/desktop weiter.",
      },
      {
        q: "Welche Cursor-Alternative ist am günstigsten?",
        a: "Tools mit eigenem Key (Cline, OpenCode, Kilo Code, Zed) kosten nichts außer der Modellnutzung. Bei den Plänen startet Codex bei $8 mit ChatGPT Go und Copilot Pro bei $10; wenn du Claude inklusive willst, kostet Claude Pro $20.",
      },
      {
        q: "Kann ich meine Cursor-Regeln behalten?",
        a: "Größtenteils. Leg sie in AGENTS.md ab, das Codex, Copilot, OpenCode und andere lesen; Claude Code liest sie über einen `@AGENTS.md`-Import in CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Neuer Coding-Agent, gleiches Abo, jetzt mit einem Job.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit cursor.com und der Website, Preisseite oder dem GitHub-Repository jeder Alternative abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Cursor, SpaceX oder einem der genannten Anbieter, die es auch nicht unterstützen. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
