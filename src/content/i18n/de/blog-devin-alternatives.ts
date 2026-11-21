import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// de translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (braucht Node 24+ und uv)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (der Nachfolger von SWE-agent)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Devin-Alternativen (2026): Open Source, kostenlos, günstiger",
    description:
      "Die besten Alternativen zu Devin AI 2026, mit aktuellen Preisen der Anbieter: Open-Source-Agents, die du heute installieren kannst (OpenHands, OpenCode, mini-swe-agent, Cline, Goose), Cloud-Agents von OpenAI, Anthropic, Google und GitHub sowie Team-Plattformen.",
  },
  breadcrumb: "Devin-Alternativen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · KI-Softwareentwickler",
    title: "Die besten Devin-Alternativen 2026: Open Source, kostenlos und günstiger",
    lead: "Devin von Cognition ist ein autonomer KI-Softwareentwickler: Du markierst ihn in Slack oder Teams, weist ihm ein Linear- oder Jira-Ticket zu oder zeigst ihm fehlschlagende CI, und er arbeitet in seiner eigenen virtuellen Maschine und öffnet einen Pull Request. 2026 gibt es eine kostenlose Stufe und Pläne ab $20 im Monat. Die Alternativen fallen in drei Gruppen: Open-Source-Agents, die du selbst betreibst, Cloud-Agents der Modellhersteller und Plattformen für Teams. Jede passt zu jemand anderem; hier steht, zu wem, mit Preisen von der Website des jeweiligen Anbieters.",
    cta: "Loslegen",
    secondary: "Open-Source-Alternativen",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "Du willst Open Source auf deinen eigenen Servern: OpenHands, das Projekt, das als OpenDevin begann und heute eine selbst gehostete Steuerzentrale für Coding-Agents ist.",
        "Du lebst im Terminal und willst jedes Modell: OpenCode, MIT-lizenziert, mit etwa 226.000 GitHub-Sternen.",
        "Du zahlst schon für ChatGPT oder Claude: Cloud-Tasks in OpenAI Codex oder Cloud-Sessions in Claude Code, enthalten in Plänen ab $20 im Monat.",
        "Dein Team arbeitet in GitHub: Copilot in der Cloud, zugewiesen aus Issues und enthalten ab Copilot Pro für $10 im Monat.",
        "Du willst ticketgesteuerte Agents im ganzen Unternehmen: die Droids von Factory.",
        "Du willst einen KI-Entwickler mit festem Job auf deinem eigenen Claude Code oder Codex: Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin-Alternativen im Vergleich",
      text: [
        "Preise sind der günstigste Plan, der den Agent enthält, laut Preisseite des jeweiligen Anbieters am 10. November 2026. Sterne gerundet, aus der GitHub-API am selben Tag.",
      ],
      headers: ["Tool", "Open Source", "Läuft wo", "Ab", "Ideal für"],
      rows: [
        ["[Devin](https://devin.ai)", "Nein", "Eigene Cloud-VM pro Session; lokal Devin Desktop und CLI", "Kostenlose Stufe; Pro $20/Monat", "Teams, die Tickets aus Slack, Teams oder Jira an einen Agent abgeben wollen"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "Ja, MIT (~93k Sterne)", "Dein Laptop, Docker, eine VM; auch gehostete Cloud", "Selbst gehostet kostenlos; Teams $500/Monat", "Ein Agent im Stil von Devin auf eigener Infrastruktur und mit eigenen Modell-Keys"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "Ja, MIT (~226k Sterne)", "Terminal, Desktop-App, SDK", "Kostenlose Modelle enthalten; Go $10/Monat", "Terminal-Nutzer, die einen von über 200 Modellanbietern wollen"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "Ja, MIT (~9.5k Sterne)", "Lokale CLI", "Kostenlos (du zahlst das Modell)", "Forschung, Benchmarks und reproduzierbares Issue-Fixing"],
        ["[Cline](https://github.com/cline/cline)", "Ja, Apache 2.0 (~71k Sterne)", "CLI, VS Code, JetBrains, Desktop", "Kostenlos (du zahlst das Modell)", "Ein Open-Source-Agent in deinem Editor"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Ja, Apache 2.0 (~56k Sterne)", "Desktop-App, CLI, API", "Kostenlos (du zahlst das Modell)", "Ein Agent für Code und andere Arbeit, mit MCP-Erweiterungen"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "Nur die CLI (Apache 2.0)", "OpenAIs Cloud; CLI, IDE, Desktop", "ChatGPT Plus $20/Monat", "ChatGPT-Abonnenten"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "Nein", "Von Anthropic verwaltete VM pro Cloud-Session; auch lokal", "Claude Pro $20/Monat", "Claude-Code-Nutzer, deren Arbeit bei zugeklapptem Laptop weiterlaufen soll"],
        ["[Google Jules](https://jules.google)", "Nein", "Google-Cloud-VM", "15 Tasks/Tag im Basisplan; Google AI Pro $19.99/Monat", "Einzelne Entwickler mit Gemini"],
        ["[GitHub Copilot in der Cloud](https://github.com/features/copilot/plans)", "Nein", "GitHubs Cloud-Sandbox", "Copilot Pro $10/Monat", "Teams, die schon auf GitHub sind"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "Nein", "Cursors Cloud-VMs", "Premium $30/Monat", "Teams, die schon in Cursor arbeiten"],
        ["[Factory](https://factory.com)", "Nein", "Desktop, CLI, Web; Cloud- und lokale Agents", "Pro $20/Monat", "Engineering-Organisationen, die Agents über Tickets und Chat steuern"],
        ["[Crewmark](/pricing)", "Ja, GPL-3.0", "Dein Computer, in deinem eigenen Claude Code oder Codex", `Free-Plan (${free.projects} Projekt, ${free.employees} KI-Mitarbeiter); Pro $${pro.price}/Monat bald verfügbar`, "Kleine Teams, die einen KI-Entwickler nach Zeitplan wollen, mit einem Abo, für das sie schon zahlen"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Open-Source-Alternativen zu Devin, die du heute betreiben kannst",
      text: [
        "Devin selbst ist nicht Open Source. Diese hier schon, und jede lässt sich mit einem einzigen Befehl installieren. Du bringst deinen eigenen Modell-Key mit: Die Software ist kostenlos, du zahlst deinen Modellanbieter. Lies ein Skript, bevor du es an deine Shell weiterreichst.",
      ],
      steps: [
        {
          title: "OpenHands (früher OpenDevin)",
          text: "Heißt jetzt Agent Canvas: eine selbst gehostete Steuerzentrale, die den OpenHands-Agent und auch Claude Code, Codex, Gemini oder OpenCode auf deinem Laptop, in Docker oder auf einer VM betreibt, mit Automationen für Slack, GitHub und Linear. Selbst gehostet kostenlos; ein gehosteter Teams-Plan kostet $500 im Monat für bis zu 10 Nutzer.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Ein MIT-lizenzierter Terminal-Agent, der mit mehr als 200 Modellanbietern funktioniert, auch mit lokalen Modellen, dazu eine Desktop-App in der Beta. Kostenlose Modelle sind ohne Konto enthalten; OpenCode Go kostet $10 im Monat, und du kannst dich mit einem ChatGPT- oder GitHub-Copilot-Abo anmelden. Ähnliche Agents findest du unter [OpenCode-Alternativen](/blog/opencode-alternatives).",
        },
        {
          title: "SWE-agent und mini-swe-agent",
          text: "Der Forschungs-Agent aus Princeton und Stanford, der ein GitHub-Issue nimmt und versucht, es zu beheben. Laut README hat mini-swe-agent ihn inzwischen abgelöst, also fang dort an. Kostenlos; du zahlst nur für das Modell.",
        },
        {
          title: "Cline, Goose, Aider und Kilo Code",
          text: "Cline ist ein Agent unter Apache-Lizenz für Terminal, VS Code und JetBrains mit Plan- und Act-Modus. Goose, inzwischen unter der Agentic AI Foundation der Linux Foundation, erledigt Code und andere Aufgaben über MCP-Erweiterungen. Aider und Kilo Code sind ebenfalls beliebte Open-Source-Coding-Agents; Devika, ein früher Open-Source-Klon von Devin, wurde seit September 2025 nicht mehr aktualisiert.",
        },
      ],
      source: { label: "Quelle: OpenHands auf GitHub", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Cloud-Agents der Modellhersteller",
      text: [
        "Wenn du Devins Workflow „zuweisen und weggehen“ ohne weiteren Anbieter willst: Die Modellhersteller bieten ihn inzwischen in Plänen an, die du vielleicht schon hast.",
      ],
      points: [
        "OpenAI Codex: Cloud-Tasks unter chatgpt.com/codex, enthalten ab ChatGPT Plus für $20 im Monat; Cloud-Tasks verbrauchen mehr von deinem Kontingent, und ein API-Key deckt CLI und IDE ab, aber keine Cloud-Funktionen.",
        "Claude Code: Cloud-Sessions über claude.ai/code, die Claude-App oder `claude --cloud`, jede in einer isolierten, von Anthropic verwalteten VM, in den Plänen Pro ($20 im Monat), Max, Ultra und Team, ohne gesonderte Kosten für die VM.",
        "Google Jules: klont dein Repository in eine Cloud-VM und öffnet einen Pull Request; 15 Tasks am Tag im Basisplan und 100 mit Google AI Pro für $19.99 im Monat.",
        "GitHub Copilot in der Cloud: Weis ein Issue zu, und Copilot öffnet einen Pull Request; enthalten ab Copilot Pro für $10 im Monat, die Nutzung wird in GitHub AI Credits abgerechnet.",
        "Cursor Cloud Agents: laufen in isolierten VMs, gestartet aus Cursor, dem Web, Slack oder Linear; ab dem Premium-Plan für $30 im Monat.",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Was Devin 2026 kostet",
      text: [
        "Viele Listen nennen noch einen Team-Plan für $500 und $2.25 pro ACU. Auf devin.ai nutzen die Self-Serve-Pläne heute keine ACUs mehr; die Abrechnung kombiniert ein enthaltenes Kontingent mit On-Demand-Credits, und nur Enterprise wird in ACUs abgerechnet.",
      ],
      points: [
        "Free: $0, mit kleinem Kontingent.",
        "Pro: $20 im Monat, inklusive Devin Cloud; zusätzliche Nutzung zu API-Preisen.",
        "Max: $200 im Monat.",
        "Teams: $80 im Monat plus $40 im Monat pro vollem Entwickler-Seat, bis zu 100 Nutzer.",
        "Enterprise: individuell.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein KI-Entwickler mit festem Job, auf deinem eigenen Agent",
      text: [
        "Devin und die Cloud-Agents warten darauf, dass du jede Aufgabe zuweist. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Softwareentwickler mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und Heartbeat: Während seiner Schicht wacht er auf, nimmt sich das nächste Issue vom Board, öffnet einen Pull Request und schreibt dir, wenn er eine Entscheidung braucht. Er läuft mit dem Abo, für das du schon zahlst, auf deinem Computer.",
      ],
      steps: [
        {
          title: "Stell die Rolle Softwareentwickler ein",
          text: "Briefing, Ziel und Routine sind schon eingerichtet; siehe den [KI-Softwareentwickler](/ai-employees/software-engineer).",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weis Issues zu wie einem Teammitglied; der Mitarbeiter hält Status und Kommentare aktuell. Siehe [Claude Code Kanban](/blog/claude-code-kanban).",
        },
        {
          title: "Lass ihn weitermachen",
          text: "Leg Arbeitszeiten fest, auch nachts. Siehe, [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7), und [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst einen Entwickler im Stil von Devin auf dem Claude-Code- oder Codex-Abo, das du schon hast?",
    text: "Crewmark-Mitarbeiter wachen per Heartbeat auf, arbeiten ein Board ab und öffnen Pull Requests.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Devin-Alternativen",
    items: [
      {
        q: "Was ist die beste Open-Source-Alternative zu Devin?",
        a: "OpenHands, das als OpenDevin begann, kommt am nächsten: eine selbst gehostete Agent-Plattform, die du mit deinen eigenen Modell-Keys betreibst. Als Terminal-Agent OpenCode; für Forschung und Benchmarks mini-swe-agent.",
      },
      {
        q: "Ist OpenDevin dasselbe wie OpenHands?",
        a: "Ja. OpenDevin wurde von All Hands AI in OpenHands umbenannt. Es ist MIT-lizenziert und erscheint jetzt als Agent Canvas, das auch Claude Code, Codex und andere Agents ausführt.",
      },
      {
        q: "Ist Devin kostenlos?",
        a: "Es gibt eine kostenlose Stufe mit kleinem Kontingent. Bezahlpläne sind Pro für $20 im Monat, Max für $200 und Teams für $80 im Monat plus $40 pro Entwickler-Seat, laut devin.ai am 10. November 2026.",
      },
      {
        q: "Rechnet Devin noch pro ACU ab?",
        a: "Nur bei Enterprise. Self-Serve-Pläne kombinieren jetzt ein enthaltenes Kontingent mit On-Demand-Credits, die alte Angabe von $2.25 pro ACU gilt für sie also nicht mehr.",
      },
      {
        q: "Devin vs. Claude Code oder Codex: Was sollte ich nutzen?",
        a: "Wenn du schon für Claude oder ChatGPT zahlst, bekommst du mit deren Cloud-Sessions und Cloud-Tasks Devins Workflow „zuweisen und weggehen“ ohne Zusatzkosten. Devin bringt dazu Workflows für Slack, Teams, Jira und Linear, die für Teams gebaut sind.",
      },
      {
        q: "Was ist die günstigste Devin-Alternative?",
        a: "Die Open-Source-Agents kosten nichts außer deiner Modellnutzung. Unter den gehosteten Optionen enthält GitHub Copilot Pro für $10 im Monat den Cloud-Agent, und Google Jules erlaubt 15 Tasks am Tag im Basisplan.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Claude Code oder Codex einen Job, nicht nur eine Aufgabe.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der Website, Preisseite, Doku und des GitHub-Repositorys jedes Produkts am 10. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Cognition oder einem der genannten Unternehmen verbunden oder von ihnen unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
