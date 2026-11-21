import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// de translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, ein Community-Fork von Aider
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (lokale Modelle über Ollama)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider hat deine Konventionen mit --read geladen
aider --read CONVENTIONS.md

# OpenCode und Codex lesen AGENTS.md im Root des Repositorys
mv CONVENTIONS.md AGENTS.md

# Claude Code liest CLAUDE.md; importier dort dieselbe Datei
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Aider-Alternativen (2026): Ist Aider tot? Was du jetzt nutzt",
    description:
      "Wird Aider noch gepflegt? Letztes Release, letzter Commit und offene Issues, dann die besten Aider-Alternativen 2026: der Fork cecli, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI und Claude Code, mit Installationsbefehlen.",
  },
  breadcrumb: "Aider-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Coding-Agents",
    title: "Aider-Alternativen 2026: Ist Aider tot, und was nutzt du stattdessen?",
    lead: "Aider war der ursprüngliche KI-Pair-Programmer im Terminal: Open Source, jedes Modell, eine Karte deines Repositorys und ein Git-Commit für jede Änderung. Es lässt sich weiterhin installieren und ausführen und hat etwa 50.000 GitHub-Sterne. Das letzte getaggte Release auf GitHub stammt aber vom August 2025 und der letzte Commit vom 22. Mai 2026, deshalb suchen viele Nutzer etwas, das mit neuen Modellen Schritt hält. Hier liest du, wo das Projekt steht, welche Alternativen Aider am nächsten kommen und wie du dein Setup mitnimmst.",
    cta: "Loslegen",
    secondary: "Ist Aider tot?",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Ist Aider tot?",
      text: [
        "Offiziell nicht. Das Repository ist nicht archiviert, und niemand hat ein Ende angekündigt. Aber nach allen öffentlichen Signalen wird es kaum noch gepflegt:",
      ],
      points: [
        "Letztes getaggtes GitHub-Release: v0.86.0, 9. August 2025. Das letzte Paket auf PyPI, aider-chat 0.86.2, wurde am 12. Februar 2026 hochgeladen.",
        "Letzter Commit auf dem Main-Branch: 22. Mai 2026, ein Merge, der neuere Claude-Modellnamen ergänzt hat.",
        "Etwa 1.960 offene Issues und Pull Requests.",
        "Im Januar 2026 eröffnete ein Nutzer ein Issue zur Zukunft von Aider. Eine Antwort nennt es im Grunde ein Ein-Personen-Projekt, das langsamer geworden ist; der Maintainer hat dort nicht geantwortet.",
        "Die README sagt immer noch, Aider funktioniere am besten mit Claude 3.7 Sonnet, DeepSeek R1, o3-mini und GPT-4o.",
      ],
    },
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "Aider, aber weiter aktualisiert: cecli, ein Community-Fork von Aider.",
        "Der beliebteste Open-Source-Terminal-Agent, jedes Modell: OpenCode, MIT, etwa 226.000 Sterne.",
        "Aiders minimalistischer Geist: Pi, ein kleines Harness, das du selbst erweiterst, MIT, etwa 121.000 Sterne.",
        "Lokale Modelle zuerst, wie viele Aider-Nutzer es betrieben haben: Nanocoder, mit Ollama.",
        "Aiders Watch-Mode, bei dem du Änderungen in Code-Kommentaren anforderst: Cline oder Kilo Code in VS Code und JetBrains.",
        "Du zahlst ohnehin für ChatGPT oder Claude: Codex CLI oder Claude Code.",
        "Ein Agent, der einen Backlog nach Zeitplan abarbeitet, nicht nur, wenn du tippst: Crewmark, auf Basis von Claude Code oder Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Aider-Alternativen im Vergleich",
      text: [
        "Sterne gerundet, aus der GitHub-API am 10. November 2026; „letzter Commit“ ist der neueste Commit auf dem Main-Branch an diesem Tag.",
      ],
      headers: ["Tool", "Lizenz", "Gebaut mit", "Modelle", "Kosten", "Ideal für"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k Sterne)", "Python", "Fast alle, auch lokale", "Kostenlos; dein Modell-Key", "Die Referenz; letzter Commit am 22. Mai 2026"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (~420 Sterne)", "Python", "Wie Aider", "Kostenlos; dein Modell-Key", "Nah an Aider bleiben, auf einem Fork, der noch gepflegt wird"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k Sterne)", "TypeScript", "Jeder Anbieter, lokale Modelle", "Kostenlose Modelle mit Tageslimit; Go $10/Monat", "Ein vollwertiger Terminal-Agent mit Plan- und Build-Modus und Desktop-App"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k Sterne)", "TypeScript", "Dein Abo oder API-Key", "Kostenlos", "Ein minimales Harness, das du mit Tools und Skills erweiterst"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k Sterne)", "Go", "Die meisten Anbieter, Ollama", "Kostenlos; dein Key", "Eine polierte Terminal-UI mit LSP und MCP, auf jeder Plattform"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k Sterne)", "TypeScript", "Dein Modell-Key", "Kostenlos", "Ein Agent in VS Code, JetBrains oder im Terminal"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (~28k Sterne)", "TypeScript", "500+, zum Preis des Anbieters", "Kostenloser Einstieg", "IDE-Erweiterungen plus eine CLI, geforkt von OpenCode"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k Sterne)", "TypeScript", "Ollama oder jede OpenAI-kompatible API", "Kostenlos", "Privates, lokales Coding"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k Sterne)", "Rust", "OpenAI", "Jeder ChatGPT-Plan, auch Free; oder ein API-Key", "ChatGPT-Nutzer, die einen schnellen nativen Agent wollen"],
        ["[Claude Code](https://code.claude.com/docs)", "Proprietär", "-", "Anthropic", "Claude Pro $20/Monat", "Claude-Nutzer"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (~16k Sterne)", "Go", "Mehrere Anbieter", "Kostenlos; dein Modell-Key", "Große Projekte; letzter Commit am 3. Oktober 2025"],
        ["[Crewmark](/pricing)", "Proprietär", "-", "Über dein Claude Code oder Codex", `Free-Plan (${free.projects} Projekt, ${free.employees} KI-Mitarbeiter); Pro $${pro.price}/Monat bald verfügbar`, "Ein Agent mit Rolle, Arbeitszeiten und Heartbeat, der sich das nächste Issue vom Board nimmt"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Open-Source-Alternativen zu Aider, die du heute installieren kannst",
      text: [
        "Jede lässt sich mit einem Befehl installieren. Lies ein Skript, bevor du es an deine Shell weiterreichst.",
      ],
      steps: [
        {
          title: "cecli, der Aider-Fork",
          text: "cecli entstand im August 2025 als Fork von Aider und wird weiter aktualisiert. Es beschreibt sich als CLI-Agent, gebaut für Erweiterbarkeit und Anpassung, installiert sich als Befehl `cecli` auf macOS, Linux und Windows und liegt auch als cecli-dev auf PyPI.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Im Funktionsumfang am nächsten an Aider: Open Source, Terminal zuerst und jeder von über 200 Modellanbietern, auch lokale. Dazu kommen ein schreibgeschützter Plan-Agent neben dem Build-Agent mit vollem Zugriff, Subagents und eine Desktop-App in der Beta.",
        },
        {
          title: "Pi und Nanocoder",
          text: "Pi hält den Kern klein und verzichtet bewusst auf Sub-Agents und Plan-Mode; was du brauchst, ergänzt du mit Erweiterungen und Skills. Nanocoder wird von einem gemeinnützigen Kollektiv für lokale Modelle über Ollama gebaut, mit Plan- und Architect-Modus, wobei Letzterer Aider-Nutzern vertraut ist.",
        },
      ],
      source: { label: "Quelle: die README jedes Projekts auf GitHub", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Von Aider zu einem anderen Agent wechseln",
      steps: [
        {
          title: "Nimm deine Konventionsdatei mit",
          text: "Aider liest Coding-Konventionen aus einer Datei, die du mit `--read` lädst. OpenCode und Codex lesen `AGENTS.md` im Root des Repositorys, Claude Code liest `CLAUDE.md`, das `AGENTS.md` importieren kann. Siehe [AGENTS.md für Codex](/blog/codex-agents-md) und [CLAUDE.md](/blog/claude-md).",
          code: conventions,
        },
        {
          title: "Leg fest, wie du committen willst",
          text: "Aider committet jede Änderung mit einer generierten Nachricht. Claude Code, Codex und OpenCode überlassen Commits standardmäßig dir: Bitte also um einen Commit, wenn eine Änderung fertig ist, oder schreib deine Commit-Regel in die AGENTS.md.",
        },
        {
          title: "Bring deine Modelle mit",
          text: "Wenn du Aider mit DeepSeek oder einem lokalen Modell betrieben hast: OpenCode, Crush, Nanocoder und Pi nehmen alle deine eigenen Keys, und die ersten drei sprechen mit Ollama. Für den umgekehrten Weg siehe [Claude Code mit DeepSeek](/blog/claude-code-deepseek).",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider vs. OpenCode, Claude Code, Pi und Cline",
      points: [
        "Aider vs. OpenCode: Beide sind Open Source und modellunabhängig. OpenCode bekommt mehr als 100 Commits pro Woche und bringt Agents, Subagents, MCP und eine Desktop-App mit; Aider ist einfacher und committet für dich.",
        "Aider vs. Claude Code: Claude Code ist Closed Source und nutzt Anthropics Modelle, enthalten ab Claude Pro für $20 im Monat; neue Claude-Features kommen dort zuerst an. Aider ist kostenlos und funktioniert mit jedem Modell.",
        "Aider vs. Pi: Beide sind bewusst klein. Pi wird aktiv entwickelt, mit SDK, RPC-Modus und einem Paketsystem für Erweiterungen.",
        "Aider vs. Cline: Cline lebt vor allem in deinem Editor, hat aber auch eine CLI; Aider ist Terminal-first, mit einem Watch-Mode für Editor-Kommentare.",
        "Aider vs. Codex: Codex CLI ist Open Source, in Rust geschrieben und in jedem ChatGPT-Plan enthalten; es nutzt die Modelle von OpenAI.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Vom Pair-Programmer zum Teammitglied mit Backlog",
      text: [
        "Aider und jedes Tool hier warten auf deine nächste Nachricht. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und Heartbeat: Während seiner Schicht wacht er auf, nimmt sich das nächste Issue vom Board, committet, öffnet einen Pull Request und schreibt dir, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter auf deinem Agent ein",
          text: "Führ den Setup-Befehl in einem Claude-Code- oder Codex-Gespräch aus; dieses Gespräch wird zum Mitarbeiter. Siehe den [KI-Softwareentwickler](/ai-employees/software-engineer).",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Er wacht während der festgelegten Zeiten alle 15 bis 240 Minuten auf. Siehe, [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7).",
        },
        {
          title: "Vergleich den Rest",
          text: "Für weitere Terminal-Agents siehe [OpenCode-Alternativen](/blog/opencode-alternatives); für Editoren [Cursor-Alternativen](/blog/cursor-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst einen Agent, der zwischen deinen Prompts weiterarbeitet?",
    text: "Crewmark-Mitarbeiter wachen während der Arbeitszeiten per Heartbeat auf und nehmen sich das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Aider-Alternativen",
    items: [
      {
        q: "Ist Aider tot?",
        a: "Es ist nicht archiviert und lässt sich weiterhin installieren und ausführen. Aber das letzte GitHub-Release war v0.86.0 im August 2025, das letzte PyPI-Release im Februar 2026 und der letzte Commit am 22. Mai 2026, und eine Frage zur Zukunft aus dem Januar 2026 hat keine Antwort vom Maintainer.",
      },
      {
        q: "Wird Aider noch gepflegt?",
        a: "Kaum. Seit dem 22. Mai 2026 gab es keine Commits, etwa 1.960 Issues und Pull Requests sind offen, und die README empfiehlt noch Modelle von Anfang 2025. cecli, ein Community-Fork, wird weiter aktualisiert.",
      },
      {
        q: "Gibt es einen Fork von Aider?",
        a: "Ja: cecli, ein GitHub-Fork von Aider, gestartet im August 2025, Apache 2.0, installiert als Befehl `cecli`. Er ist viel kleiner als Aider, mit etwa 420 Sternen.",
      },
      {
        q: "Aider vs. OpenCode: Was ist 2026 besser?",
        a: "Für die meisten OpenCode: Es ist wie Aider Open Source und modellunabhängig, wird aber fast täglich aktualisiert und bringt Subagents, MCP und eine Desktop-App mit. Aider ist einfacher und committet jede Änderung für dich.",
      },
      {
        q: "Ist Aider kostenlos?",
        a: "Ja. Aider steht unter Apache 2.0 und ist kostenlos; du zahlst deinen Modellanbieter oder nichts, wenn du ein lokales Modell betreibst.",
      },
      {
        q: "Was ist die beste kostenlose Aider-Alternative?",
        a: "OpenCode enthält kostenlose Modelle mit Tageslimit; Nanocoder, Crush und OpenCode betreiben lokale Modelle über Ollama kostenlos; und Codex CLI funktioniert mit einem kostenlosen ChatGPT-Konto.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agent einen Backlog, nicht nur einen Prompt.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der GitHub-Repositorys, READMEs und Releases jedes Projekts, PyPI und der Preisseiten der Anbieter am 10. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Aider oder einem der genannten Projekte verbunden oder von ihnen unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
