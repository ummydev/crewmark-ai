import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// de translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS und Linux; für Windows gibt es einen PowerShell-Installer)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # oder: npm install -g @charmland/crush

# Kilo CLI (ein Fork von OpenCode)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (kostenlos, finanziert durch Textanzeigen)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder mit einem Modell, das in Ollama läuft
nanocoder --provider ollama --model llama3.1

# Crush: Ollama in deiner crushrc hinzufügen
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode-Alternativen (2026): kostenlos, Open Source, lokal",
    description:
      "Die besten OpenCode-Alternativen 2026: Open-Source-Terminal-Agents (Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), kostenlose Optionen ohne API-Key, Tipps für Rust und Windows, lokale LLMs, GUIs sowie Claude Code, Codex und Copilot CLI.",
  },
  breadcrumb: "OpenCode-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Coding-Agents",
    title: "Die besten OpenCode-Alternativen 2026: kostenlos, Open Source und lokal",
    lead: "OpenCode ist mit etwa 226.000 Sternen einer der meistgesternten Open-Source-Coding-Agents auf GitHub: ein MIT-lizenzierter Terminal-Agent, der mit jedem Modellanbieter funktioniert, dazu eine Desktop-App in der Beta. Leute suchen aus verschiedenen Gründen weiter: ein kleineres Harness, das sie an ihren eigenen Workflow anpassen können, ein einzelnes Go- oder Rust-Binary, bessere Unterstützung für lokale Modelle, eine App statt eines Terminals, eine kostenlose Option ohne API-Key oder der Agent, für den ihre Firma schon zahlt. Hier sind die Alternativen für jeden Fall, mit Lizenzen, Installationsbefehlen und Preisen von der jeweiligen Projektseite.",
    cta: "Loslegen",
    secondary: "Installationsbefehle",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "Ein minimaler Agent, den du selbst formst: Pi, MIT-lizenziert, etwa 121.000 Sterne.",
        "Eine polierte Terminal-App, die überall läuft, auch auf Windows und Android: Crush, von Charm.",
        "OpenCode mit IDE und Cloud-Agent drumherum: Kilo CLI, ein Fork von OpenCode.",
        "Kostenlos ohne API-Key: Freebuff, finanziert durch Textanzeigen.",
        "Lokale Modelle zuerst: Nanocoder, gebaut von einem gemeinnützigen Kollektiv.",
        "In Rust geschrieben: Codex CLI oder Goose.",
        "Du zahlst schon für Claude, ChatGPT oder Copilot: Claude Code, Codex CLI oder GitHub Copilot CLI.",
        "Ein Agent, der nach Zeitplan weiterarbeitet, nicht nur, wenn du tippst: Crewmark, auf Basis von Claude Code oder Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode-Alternativen im Vergleich",
      text: [
        "Sterne gerundet, aus der GitHub-API am 10. November 2026. Kosten sind das, was du zum Start brauchst; die meisten Open-Source-Agents sind kostenlos, und du zahlst deinen Modellanbieter.",
      ],
      headers: ["Tool", "Lizenz", "Gebaut mit", "Läuft auf", "Kosten", "Ideal für"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k Sterne)", "TypeScript", "Terminal, Desktop-App (Beta)", "Kostenlose Modelle mit Tageslimit; Go $10/Monat, Go Plus $40/Monat", "Die Referenz: jeder Anbieter, lokale Modelle, Plan- und Build-Agents"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k Sterne)", "TypeScript", "macOS, Linux, Windows; SDK und RPC", "Kostenlos; dein Abo oder API-Key", "Ein minimales Harness, das du mit eigenen Tools und Skills erweiterst"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k Sterne)", "Go", "Jedes Terminal: macOS, Linux, Windows, Android, BSD", "Kostenlos; dein Key oder Charms Hyper-Modelle", "Eine polierte Terminal-UI mit LSP und MCP"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (~28k Sterne)", "TypeScript", "CLI, VS Code, JetBrains, Cloud", "Kostenloser Einstieg; 500+ Modelle zum Preis des Anbieters, ohne Aufschlag", "OpenCodes Engine plus IDE-Erweiterungen und Code-Reviews"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (~56k Sterne)", "Rust", "Desktop-App, CLI, API", "Kostenlos; dein Modell-Key", "Ein Agent für Code und andere Arbeit, mit MCP-Erweiterungen"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k Sterne)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "Kostenlos; dein Modell-Key", "Ein Open-Source-Agent in Editor und Terminal"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k Sterne)", "TypeScript", "Terminal", "Kostenlos; lokale Modelle oder jede OpenAI-kompatible API", "Privates, lokales Coding mit Ollama"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (~14k Sterne)", "TypeScript", "CLI, Desktop, Web, Cloud", "Kostenlos mit Textanzeigen; kein API-Key", "Einen Coding-Agent ausprobieren, ohne zu zahlen oder dich bei einem Modell anzumelden"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (~29k Sterne)", "TypeScript", "Terminal", "Qwen-Plus- oder -Pro-Abo oder ein API-Key", "Nutzer von Qwen-Modellen"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k Sterne)", "Rust", "Terminal; auch IDE und Desktop", "Jeder ChatGPT-Plan, auch Free; Go kostet $8/Monat; oder ein API-Key", "ChatGPT-Abonnenten, die ein schnelles natives Binary wollen"],
        ["[Claude Code](https://code.claude.com/docs)", "Proprietär", "-", "Terminal, IDE, Desktop, Web", "Claude Pro $20/Monat", "Claude-Nutzer, die Anthropics eigenen Agent wollen"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "Proprietär", "-", "macOS, Linux, Windows", "Ein Copilot-Plan; Pro kostet $10/Monat", "Teams, die schon für Copilot zahlen"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k Sterne)", "Python", "Terminal", "Kostenlos; dein Modell-Key", "Git-zentriertes Pair-Programming; keine Commits seit dem 22. Mai 2026 (siehe [Aider-Alternativen](/blog/aider-alternatives))"],
        ["[Crewmark](/pricing)", "Proprietär", "-", "Dein Computer, in deinem eigenen Claude Code oder Codex", `Free-Plan (${free.projects} Projekt, ${free.employees} KI-Mitarbeiter); Pro $${pro.price}/Monat bald verfügbar`, "Ein Agent mit Rolle, Arbeitszeiten und Heartbeat, der sich das nächste Issue vom Board nimmt"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Open-Source-Alternativen zu OpenCode, die du heute installieren kannst",
      text: [
        "Jede davon lässt sich mit einem Befehl installieren. Lies ein Skript, bevor du es an deine Shell weiterreichst.",
      ],
      steps: [
        {
          title: "Pi",
          text: "Ein minimales, erweiterbares Agent-Harness. Es kommt mit sinnvollen Standards, verzichtet aber bewusst auf Sub-Agents und Plan-Mode: Die ergänzt du mit Erweiterungen, Skills und Prompt-Templates, oder du lässt Pi sie bauen. Führ `/login` aus, um ein Abo oder einen API-Key zu verbinden. Pi hat kein eingebautes Berechtigungssystem; wenn du Grenzen brauchst, lass es in einem Container oder einer Sandbox laufen. Die Doku beschreibt drei Wege.",
          code: install,
        },
        {
          title: "Crush",
          text: "Charms Terminal-Agent, in Go geschrieben. Er liest deine Language Server als Kontext, nimmt MCP-Server über http, stdio und sse und lässt dich das Modell mitten in der Session wechseln. Installieren lässt er sich mit Homebrew, npm, winget, scoop, apt und pkg, und die README nennt Windows (PowerShell und WSL), Android und die BSDs. Die Lizenz ist FSL-1.1-MIT, eine Source-Available-Lizenz und keine Open-Source-Lizenz.",
        },
        {
          title: "Kilo CLI",
          text: "Laut Kilos README ist die CLI ein Fork von OpenCode. Obendrauf bringt Kilo Erweiterungen für VS Code und JetBrains, einen Cloud-Agent, automatische Pull-Request-Reviews und 500+ Modelle, die du mitten in der Aufgabe wechseln kannst. MIT-lizenziert.",
        },
        {
          title: "Goose, Cline und Nanocoder",
          text: "Goose ist ein Rust-Agent mit Desktop-App und CLI, inzwischen unter der Agentic AI Foundation der Linux Foundation. Cline läuft als CLI, Editor-Erweiterung oder SDK. Nanocoder ist ein lokaler Terminal-Agent des Nano Collective, mit den Modi normal, auto-accept, yolo, plan und architect sowie Befehlen, die einen Branch reviewen oder einen Pull Request in einem eigenen Worktree auschecken.",
        },
      ],
      source: { label: "Quelle: die README jedes Projekts auf GitHub", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "OpenCode-Alternativen mit kostenlosen Modellen",
      text: [
        "OpenCode selbst enthält kostenlose Modelle mit einem täglichen Anfragelimit, auf die du zurückfallen kannst, wenn deine Go-Limits aufgebraucht sind. Wenn du etwas anderes Kostenloses willst:",
      ],
      points: [
        "Freebuff: kein Abo, keine Credits, kein API-Key. Textanzeigen bezahlen die enthaltenen Modelle, mit DeepSeek V4.1 Flash als Standard; Empfehlungen und Bounties erweitern das kostenlose Tageskontingent um Stunden.",
        "Lokale Modelle: Nanocoder, Crush, Goose und OpenCode sprechen alle mit Ollama, die einzigen Kosten sind also deine eigene Hardware.",
        "Googles Gratis-Stufe: Gemini CLI hat keine mehr. Laut README sind kostenlose Einzelkonten sowie Google AI Pro und Ultra am 18. Juni 2026 zur Antigravity CLI (`agy`) gewechselt.",
        "Codex CLI: Open Source und funktioniert mit einem kostenlosen ChatGPT-Konto.",
        "Open-Source-Agents mit eigenem Key: Pi, Kilo CLI, Cline und Goose kosten selbst nichts; du zahlst nur für das Modell.",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "OpenCode-Alternativen für lokale LLMs",
      text: [
        "Wenn du OpenCode nutzt, um Modelle auf deinem eigenen Rechner zu betreiben, machen diese beiden lokale Modelle zum Hauptweg.",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Gebaut für lokale Modelle über Ollama oder jede OpenAI-kompatible API wie OpenRouter. Übergib Anbieter und Modell als Flags, oder lass es mit `nanocoder run` nicht-interaktiv laufen.",
          code: local,
        },
        {
          title: "Crush",
          text: "Füg Ollama als Anbieter in deiner `crushrc` hinzu, einer Bash-ähnlichen Konfigurationsdatei, die auf jeder Plattform gleich funktioniert, auch unter Windows, und registrier dann die Modelle, die du heruntergeladen hast.",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust, Windows, Android oder eine GUI",
      points: [
        "In Rust: Codex CLI und Goose sind beide in Rust geschrieben. Crush ist ein einzelnes Go-Binary.",
        "Für Windows: Crush (winget, scoop oder npm), Pi (ein PowerShell-Installer), GitHub Copilot CLI (winget) und die OpenCode-Desktop-App laufen alle nativ.",
        "Für Android: Die README von Crush führt Android unter den unterstützten Terminals.",
        "Mit GUI: OpenCodes eigene Desktop-App (Beta) für macOS, Windows und Linux; Goose Desktop; Freebuff Desktop, das auch dein installiertes Claude Code und Codex ausführen kann; und Kilo oder Cline in VS Code und JetBrains.",
        "OpenCode Go kostet $10 im Monat für Open-Weight-Modelle (Go Plus $40). Wenn du lieber ein Abo für ein Frontier-Modell hast: Codex ist in ChatGPT Go für $8 im Monat enthalten, Copilot Pro kostet $10 und Claude Pro $20.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Wenn der Agent arbeiten soll, ohne dass du tippst",
      text: [
        "Jedes Tool auf dieser Liste wartet auf deinen nächsten Prompt. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und Heartbeat: Während seiner Schicht wacht er auf, nimmt sich das nächste Issue vom Board und schreibt dir, wenn er eine Entscheidung braucht. Er läuft auf deinem Computer, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter auf deinem Agent ein",
          text: "Führ den Setup-Befehl in einem Claude-Code- oder Codex-Gespräch aus; dieses Gespräch wird zum Mitarbeiter. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Er wacht während der festgelegten Zeiten alle 15 bis 240 Minuten auf, auch nachts. Siehe, [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7), und [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Antworte, wenn er fragt",
          text: "Entscheidungen kommen als Nachrichten zu dir; alles andere steht auf dem Board. Weitere Agents im Vergleich findest du unter [Cursor-Alternativen](/blog/cursor-alternatives) und [Devin-Alternativen](/blog/devin-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst einen Coding-Agent, der zwischen deinen Prompts weiterarbeitet?",
    text: "Crewmark-Mitarbeiter wachen während der Arbeitszeiten per Heartbeat auf und nehmen sich das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu OpenCode-Alternativen",
    items: [
      {
        q: "Was ist die beste Open-Source-Alternative zu OpenCode?",
        a: "Pi, wenn du ein kleines Harness willst, das du selbst erweiterst; Crush für eine polierte Terminal-App auf jeder Plattform; und Kilo CLI, wenn du OpenCodes Engine mit IDE-Erweiterungen drumherum willst. Goose und Cline sind ebenfalls solide Optionen unter Apache-Lizenz.",
      },
      {
        q: "Basiert Kilo CLI auf OpenCode?",
        a: "Ja. Laut Kilos README ist Kilo CLI ein Fork von OpenCode, erweitert für Kilos Plattform: Erweiterungen für VS Code und JetBrains, ein Cloud-Agent und Code-Reviews.",
      },
      {
        q: "Gibt es eine kostenlose Alternative zu OpenCode?",
        a: "Freebuff ist kostenlos ohne API-Key, finanziert durch Textanzeigen. Nanocoder, Crush, Goose und OpenCode selbst sind mit lokalen Modellen über Ollama kostenlos. Die Gratis-Stufe von Gemini CLI ist im Juni 2026 zur Antigravity CLI gewechselt.",
      },
      {
        q: "Gibt es eine OpenCode-Alternative in Rust?",
        a: "Codex CLI von OpenAI und Goose sind beide in Rust geschrieben und stehen unter Apache 2.0. Crush ist in Go geschrieben und kommt als einzelnes Binary.",
      },
      {
        q: "Ist Crush Open Source?",
        a: "Der Code von Crush ist öffentlich unter FSL-1.1-MIT, einer Source-Available-Lizenz. OpenCode, Pi, Kilo CLI und Nanocoder stehen unter MIT; Goose, Cline, Codex CLI, Qwen Code und Freebuff unter Apache 2.0.",
      },
      {
        q: "OpenCode vs. Claude Code: Was sollte ich nutzen?",
        a: "OpenCode funktioniert mit jedem Anbieter, auch mit lokalen Modellen, und ist Open Source. Claude Code ist Anthropics eigener Agent, Closed Source, enthalten ab Claude Pro für $20 im Monat. Wenn du ohnehin für Claude zahlst, bekommt Claude Code Features zuerst; wenn du oft das Modell wechselst, passen OpenCode oder Pi besser.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agent einen Job, nicht nur einen Prompt.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der GitHub-Repositorys und READMEs jedes Projekts, opencode.ai und der Preisseiten der Anbieter am 10. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenCode oder einem der genannten Projekte verbunden oder von ihnen unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
