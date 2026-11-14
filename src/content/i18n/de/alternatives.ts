import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip): selbst gehostete Open-Source-Orchestrierung für ein ganzes Unternehmen aus Agenten."],
    ["multica", "[Multica](/alternatives/multica): ein Issue-Board für Coding-Agent-CLIs, in der Cloud oder selbst gehostet."],
    ["crewai", "[CrewAI](/alternatives/crewai): ein Python-Framework, um Multi-Agenten-Workflows mit API-Keys zu bauen."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const newToIt = "Neu bei dem Thema? Lies, [was ein KI-Mitarbeiter ist](/ai-employees).";

const closing = (product: string) => ({
  title: `Probier Crewmark als deine ${product}-Alternative aus.`,
  text: "Gib deinem Claude-Code- oder Codex-Agenten eine Rolle, ein Ziel und Arbeitszeiten und weise ihm Arbeit auf einem Board zu.",
  button: "Loslegen",
});

const mid = {
  title: "Stell einen KI-Mitarbeiter mit dem Abo ein, für das du schon zahlst",
  text: "Crewmark weckt deine Claude-Code- oder Codex-Session im Heartbeat-Takt und gibt ihr das nächste Issue vom Board.",
  button: "Loslegen",
};

const disclaimer = (owner: string) =>
  `Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu ${owner}, wird von ${owner} auch nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber. Angaben zu anderen Produkten stammen aus deren öffentlicher Dokumentation und können sich inzwischen geändert haben.`;

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Paperclip-AI-Alternative: Crewmark vs. Paperclip",
      description:
        "Suchst du eine Paperclip-Alternative? Crewmark und Paperclip im Vergleich: Hosting, Agenten, Heartbeats, Ziele und Setup – und was zu deinem Team passt.",
    },
    breadcrumb: "Paperclip-Alternative",
    hero: {
      kicker: "Paperclip-Alternative",
      title: "Crewmark vs. Paperclip",
      lead: "Paperclip und Crewmark machen beide aus Coding-Agenten wie Claude Code und Codex ein Team, das nach Zeitplan Arbeit übernimmt. Paperclip ist ein Open-Source-Server, den du selbst betreibst, um ein ganzes Unternehmen aus Agenten zu orchestrieren; Crewmark ist ein gehostetes Board, auf dem jeder Agent ein Mitarbeiter mit Rolle, Zahlenziel und Arbeitszeiten ist. So schneiden sie im Vergleich ab.",
      cta: "Loslegen",
      secondary: "Zum Vergleich",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Was Paperclip ist",
        text: [
          "Paperclip ist ein MIT-lizenzierter Node.js-Server mit React-Oberfläche, der laut eigener Beschreibung ein Team aus KI-Agenten orchestriert, um ein Unternehmen zu führen. Du legst ein Unternehmensziel fest, baust ein Organigramm mit Rollen, Berichtslinien und Budgets und stellst Agenten über Adapter für Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw und weitere ein.",
          "Agenten wachen für zugewiesene Issues, Rückfragen oder optionale Timer-Heartbeats auf; Routinen laufen per Cron oder Webhook; und Budgets, Freigaben und Einstellungsfreigaben halten einen Menschen im Spiel. Derzeit wird es selbst gehostet, eine Cloud-Version hat eine Warteliste.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs. Paperclip auf einen Blick",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["Hosting", "Selbst gehostet (Node.js 24+ oder Docker); Cloud mit Warteliste", "Gehostete Web-App plus ein kleiner Daemon auf deinem Computer"],
          ["Lizenz", "Open Source, MIT", "Kommerziell, Registrierung offen"],
          ["Agenten", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw und weitere oder API-Keys", "Claude Code, Codex, DeepSeek Harness und OpenCode"],
          ["Arbeitseinheit", "Issues, verknüpft mit Unternehmens- und Projektzielen", "Issues auf einem Kanban-Board"],
          ["Struktur", "Organigramm: Rollen, Berichtslinien, Budgets", "Mitarbeiter: Rolle, KPI in Zahlen, Arbeitszeiten"],
          ["Wann Agenten aufwachen", "Zugewiesene Arbeit, Nachrichten, optionale Timer-Heartbeats, Routinen", "Ein Heartbeat alle 15, 30 oder 60 Minuten während der Arbeitszeit"],
          ["Kostenkontrolle", "Budgets pro Unternehmen, Agent und Projekt", "Läuft mit deinem bestehenden Abo; schläft außerhalb der Arbeitszeit"],
          ["Wenn blockiert", "Freigabe-Workflows und Kommentare", "Eine Direktnachricht an dich, dann macht er weiter"],
        ],
      },
      {
        kind: "text",
        title: "Welches solltest du wählen?",
        points: [
          "Wähle Paperclip, wenn du Open Source willst, das du selbst hosten und anpassen kannst, Budgets und ein Organigramm für viele Agenten brauchst oder Agenten nutzt, die Crewmark nicht unterstützt, etwa Cursor oder Gemini CLI.",
          "Wähle Crewmark, wenn du keinen Server betreiben willst, jeden Agenten an einer Zahl (Klicks, Anmeldungen, gemergte PRs) messen und an Arbeitszeiten binden möchtest und ein Board willst, auf dem dir Agenten schreiben, wenn sie blockiert sind.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "So wechselst du von Paperclip zu Crewmark",
        steps: [
          {
            title: "Exportiere, was du behalten willst",
            text: "Paperclip exportiert ein Unternehmen als gut lesbares Markdown: Agenten mit ihren Rollen und Anweisungen, Skills und optional Projekte, Routinen und Aufgaben. Secrets, Freigaben und der Kostenverlauf sind nicht enthalten.",
          },
          {
            title: "Leg jeden Agenten als Mitarbeiter neu an",
            text: "Wähle in Crewmark die passendste Rolle, füge die Anweisungen des Agenten ein und mach aus seinem Ziel eine Zahl, die er verfolgen kann, etwa „+10 % Search-Console-Klicks pro Monat“.",
          },
          {
            title: "Verbinde denselben Agenten",
            text: "Führe den Setup-Befehl in der Claude-Code- oder Codex-Unterhaltung aus, in der der Mitarbeiter leben soll. Er nutzt weiter das Abo, für das du schon zahlst.",
          },
          {
            title: "Übertrage offene Aufgaben aufs Board",
            text: "Leg offene Issues neu an und weise sie zu. Stell Arbeitszeiten und einen Heartbeat ein, und der Mitarbeiter übernimmt sie beim nächsten Aufwachen.",
          },
        ],
      },
      { kind: "text", title: "Weitere Alternativen", points: [...others("paperclip"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Von Paperclip zu Crewmark wechseln" },
    mid,
    faq: {
      title: "FAQ zur Paperclip-Alternative",
      items: [
        {
          q: "Ist Paperclip kostenlos?",
          a: "Die selbst gehostete Version ist kostenlos und Open Source unter der MIT-Lizenz. Für die Cloud-Version, für die es eine Warteliste gibt, hat Paperclip keine Preise veröffentlicht.",
        },
        {
          q: "Was ist der Hauptunterschied zwischen Crewmark und Paperclip?",
          a: "Paperclip ist ein selbst gehosteter Server, um ein Unternehmen aus Agenten mit Organigramm und Budgets zu betreiben. Crewmark ist gehostet und behandelt jeden Agenten als Mitarbeiter mit Zahlenziel, Arbeitszeiten und Heartbeat.",
        },
        {
          q: "Funktionieren beide mit Claude Code und Codex?",
          a: "Ja. Beide steuern das echte Claude Code und Codex. Paperclip unterstützt außerdem Cursor, Gemini CLI und weitere Agenten; Crewmark außerdem DeepSeek Harness und OpenCode.",
        },
        {
          q: "Kann ich Crewmark selbst hosten?",
          a: "Nein. Crewmark ist eine gehostete App; nur der Daemon, der deine Agenten weckt, läuft auf deinem Computer.",
        },
        {
          q: "Paperclip vs. OpenClaw oder Hermes Agent?",
          a: "Paperclip beschreibt sich selbst als das Unternehmen und OpenClaw als einen Mitarbeiter: OpenClaw und Hermes sind persönliche Agenten, und Paperclip organisiert solche Agenten in einem Organigramm mit Zielen und Budgets. Den Vergleich der beiden Agenten findest du in [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "Am 2. November 2026 mit dem README, der Dokumentation und der Website von Paperclip abgeglichen.",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Multica-Alternative: Crewmark vs. Multica | Crewmark AI",
      description:
        "Suchst du eine Multica-Alternative? Crewmark und Multica im Vergleich: Agenten, Zeitplanung, Ziele, Lizenz und Setup – und was zu deinem Team passt.",
    },
    breadcrumb: "Multica-Alternative",
    hero: {
      kicker: "Multica-Alternative",
      title: "Crewmark vs. Multica",
      lead: "Mit Multica und Crewmark kannst du Coding-Agenten wie Claude Code und Codex Issues zuweisen, als wären sie Teammitglieder. Multica ist ein Workspace für Softwareteams, in der Cloud oder selbst gehostet; Crewmark behandelt jeden Agenten als Mitarbeiter mit Zahlenziel, Arbeitszeiten und einem Heartbeat, der ihn von selbst weckt. So schneiden sie im Vergleich ab.",
      cta: "Loslegen",
      secondary: "Zum Vergleich",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Was Multica ist",
        text: [
          "Multica ist ein Source-available-Workspace, in dem du laut eigener Beschreibung KI-Coding-Agenten Arbeit so zuweist wie einem Teammitglied. Ein eigenes Modell bringt es nicht mit: Ein Daemon steuert die Agent-CLIs, bei denen du schon angemeldet bist, 26 an der Zahl, darunter Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode und DeepSeek Harness.",
          "Agenten übernehmen Issues von einem Board, die Arbeit landet im Review, und ein Posteingang meldet sich, wenn ein Agent eine Entscheidung braucht. Autopilots legen Issues per Cron-Zeitplan oder Webhook an, Squads leiten Arbeit über einen Leader weiter, und es lässt sich mit Slack, Feishu, DingTalk, WeCom und Telegram verbinden.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs. Multica auf einen Blick",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["Hosting", "Cloud oder selbst gehostet mit Docker oder Helm", "Gehostete Web-App plus ein kleiner Daemon auf deinem Computer"],
          ["Lizenz", "Source-available (Apache 2.0 mit Bedingungen); wer es für andere hostet, braucht eine kommerzielle Lizenz", "Kommerziell, Registrierung offen"],
          ["Agenten", "26 Agent-CLIs, darunter Claude Code, Codex, Cursor und DeepSeek Harness", "Claude Code, Codex, DeepSeek Harness und OpenCode"],
          ["Arbeitseinheit", "Issues auf einem Board, Squads, Chat und Channels", "Issues auf einem Kanban-Board"],
          ["Geplante Arbeit", "Autopilots legen Issues per Cron oder Webhook an", "Ein Heartbeat weckt jeden Mitarbeiter alle 15, 30 oder 60 Minuten"],
          ["Ziele", "Pro Agent keine angegeben", "Eine KPI in Zahlen pro Mitarbeiter, z. B. +10 % Klicks pro Monat"],
          ["Arbeitszeiten", "Keine angegeben", "Pro Mitarbeiter festgelegt; außerhalb davon schläft er"],
          ["Wenn blockiert", "Posteingang und Review-Schritte", "Eine Direktnachricht an dich, dann macht er weiter"],
        ],
      },
      {
        kind: "text",
        title: "Welches solltest du wählen?",
        points: [
          "Wähle Multica, wenn du Self-Hosting brauchst, die größte Auswahl an Agent-CLIs willst oder mit Feishu, DingTalk oder WeCom arbeitest.",
          "Wähle Crewmark, wenn du Agenten willst, die nach ihrem eigenen Zeitplan mit der Arbeit beginnen, ohne dass du Issues für sie anlegst, die an einer Zahl gemessen werden und sich an Arbeitszeiten halten, damit sie nachts nicht dein Kontingent verbrauchen.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "So wechselst du von Multica zu Crewmark",
        steps: [
          {
            title: "Liste deine Agenten und offenen Issues auf",
            text: "Notiere die Anweisungen jedes Agenten und die Issues, die noch offen sind. Die CLI und die API von Multica können sie auflisten.",
          },
          {
            title: "Leg jeden Agenten als Mitarbeiter neu an",
            text: "Wähle in Crewmark die passendste Rolle, füge die Anweisungen ein und gib ihm ein Ziel in Zahlen sowie Arbeitszeiten und einen Heartbeat.",
          },
          {
            title: "Verbinde dieselbe Agent-CLI",
            text: "Führe den Setup-Befehl in der Claude-Code-, Codex-, DeepSeek-Harness- oder OpenCode-Unterhaltung aus, in der der Mitarbeiter leben soll. Er nutzt weiter die Anmeldung, die du schon hast.",
          },
          {
            title: "Ersetze Autopilots durch Heartbeats",
            text: "Statt eines Cronjobs, der Issues anlegt, legst du wiederkehrende Arbeit in den Backlog des Mitarbeiters. Bei jedem Heartbeat prüft er das Board und nimmt sich das nächste Issue vor.",
          },
        ],
      },
      { kind: "text", title: "Weitere Alternativen", points: [...others("multica"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Von Multica zu Crewmark wechseln" },
    mid,
    faq: {
      title: "FAQ zur Multica-Alternative",
      items: [
        {
          q: "Ist Multica Open Source?",
          a: "Es ist source-available: Die Multica License ist Apache 2.0 mit zusätzlichen Bedingungen. Die Nutzung in deiner eigenen Organisation, auch selbst gehostet, ist kostenlos; wer es anderen als gehosteten Dienst anbietet, braucht eine kommerzielle Lizenz.",
        },
        {
          q: "Was ist der Hauptunterschied zwischen Crewmark und Multica?",
          a: "Beide bringen Coding-Agenten auf ein Issue-Board. Crewmark ergänzt eine Struktur wie bei Mitarbeitern: ein Zahlenziel, Arbeitszeiten und einen Heartbeat, der jeden Agenten von selbst weckt, damit er das nächste Issue übernimmt.",
        },
        {
          q: "Nutzen beide meine bestehende Anmeldung bei Claude Code oder Codex?",
          a: "Ja. Beide steuern die Agent-CLI, bei der du schon angemeldet bist, die Arbeit läuft also mit deinem bestehenden Abo.",
        },
        {
          q: "Kann ich Crewmark selbst hosten?",
          a: "Nein. Crewmark ist eine gehostete App; nur der Daemon, der deine Agenten weckt, läuft auf deinem Computer.",
        },
        {
          q: "Ist Multica kostenlos?",
          a: "Multica ist source-available: Selbst gehostet ist es für die Nutzung in deiner eigenen Organisation kostenlos; wer es anderen anbietet, braucht eine kommerzielle Lizenz. Die Cloud hat eine kostenlose Testphase; Tarifpreise hat Multica noch nicht veröffentlicht.",
        },
        {
          q: "Multica vs. Linear: Was ist der Unterschied?",
          a: "Linear ist ein Issue-Tracker für Menschen. Multica ist ein Board, auf dem Coding-Agenten Teammitglieder sind: Du weist ihnen Issues zu, und sie übernehmen, bearbeiten und melden sie über einen Daemon auf deinem Computer oder eine Cloud-Runtime.",
        },
        {
          q: "Multica vs. Hermes Agent?",
          a: "Das sind verschiedene Ebenen. Hermes Agent ist ein persönlicher Agent von Nous Research; Multica kann Hermes, zusammen mit Claude Code, Codex, OpenClaw und mehr als 20 weiteren Agent-CLIs, als Runtime auf seinem Board ausführen. Siehe [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "Am 2. November 2026 mit dem README, der Dokumentation, der Lizenz und der Website von Multica abgeglichen.",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "CrewAI-Alternative ohne Code: Crewmark vs. CrewAI",
      description:
        "Suchst du eine CrewAI-Alternative? Crewmark und CrewAI im Vergleich: Programmierung, Modelle, Preise und Arbeitszuweisung – und was zu deinem Team passt.",
    },
    breadcrumb: "CrewAI-Alternative",
    hero: {
      kicker: "CrewAI-Alternative",
      title: "Crewmark vs. CrewAI",
      lead: "CrewAI ist ein Python-Framework, um Multi-Agenten-Workflows zu bauen, mit einer kommerziellen Plattform obendrauf. Crewmark ist kein Framework: Es macht aus dem Claude-Code- oder Codex-Agenten, den du schon nutzt, einen KI-Mitarbeiter und gibt ihm Arbeit auf einem Board, ohne dass du Code schreiben musst und ohne API-Rechnung. So schneiden sie im Vergleich ab.",
      cta: "Loslegen",
      secondary: "Zum Vergleich",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Was CrewAI ist",
        text: [
          "CrewAI ist ein MIT-lizenziertes Open-Source-Python-Framework, laut eigener Beschreibung für produktionsreife Multi-Agenten-Workflows. Du definierst Agenten mit Rolle, Ziel, Hintergrundgeschichte (Backstory), Tools und einem LLM und kombinierst sie dann zu Crews und ereignisgesteuerten Flows. Standardmäßig nutzen die Agenten die OpenAI-API; andere Anbieter und lokale Modelle werden unterstützt.",
          "CrewAI AMP ergänzt einen visuellen Editor, einen KI-Copiloten, Cron-Zeitplanung, menschliche Eingaben im Ablauf (Human-in-the-Loop), Tracing und Deployment in die Cloud von CrewAI oder auf deine eigene Infrastruktur.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs. CrewAI auf einen Blick",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["Was es ist", "Ein Python-Framework plus eine Plattform, um Workflows zu deployen", "Ein Board mit KI-Mitarbeitern, die in deinem Coding-Agenten laufen"],
          ["Programmierkenntnisse nötig", "Ja für das Framework (Python 3.10–3.13); ein visueller Editor auf der Plattform", "Nein: Rolle wählen und einen Setup-Befehl ausführen"],
          ["Modelle", "API-Keys: standardmäßig OpenAI, andere Anbieter und lokale Modelle", "Claude Code, Codex, DeepSeek Harness oder OpenCode, mit deinem bestehenden Abo"],
          ["Was Agenten können", "Die Tools, die du im Code definierst", "Alles, was der Coding-Agent kann: Dateien, Terminal, Browser, MCP"],
          ["Arbeitseinheit", "Aufgaben innerhalb einer Crew oder eines Flows", "Issues auf einem Kanban-Board"],
          ["Zeitplanung", "Cron-Zeitplanung auf der Plattform", "Ein Heartbeat alle 15, 30 oder 60 Minuten während der Arbeitszeit"],
          ["Ziele", "Ein Zielfeld im Prompt jedes Agenten", "Eine KPI in Zahlen pro Mitarbeiter, über die Zeit verfolgt"],
          ["Preise", "Kostenloser Plan mit 50 Ausführungen pro Monat; Enterprise nach Vereinbarung", "Offene Registrierung; keine zusätzlichen Token-Kosten zu deinem Abo"],
        ],
      },
      {
        kind: "text",
        title: "Welches solltest du wählen?",
        points: [
          "Wähle CrewAI, wenn du als Entwickler einen Multi-Agenten-Workflow in dein eigenes Produkt einbaust, jeden Schritt genau steuern musst oder ein Enterprise-Deployment mit SSO und eigener VPC brauchst.",
          "Wähle Crewmark, wenn du keinen Agenten-Code schreiben oder pflegen willst, schon für Claude Code oder Codex zahlst und Agenten willst, die dauerhafte Aufgaben wie SEO oder Bugfixing übernehmen und auf einem Board berichten.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "So wechselst du von CrewAI zu Crewmark",
        steps: [
          {
            title: "Ordne jedem Agenten eine Rolle zu",
            text: "Nimm Rolle und Ziel jedes CrewAI-Agenten und wähle die passendste Rolle in Crewmark. Seine Backstory wird zu den Anweisungen des Mitarbeiters.",
          },
          {
            title: "Mach aus dem Ziel eine Zahl",
            text: "Das Ziel in CrewAI ist ein Satz im Prompt. In Crewmark schreibst du stattdessen auf, was du messen würdest, etwa „10 gemergte Pull Requests pro Woche“.",
          },
          {
            title: "Verbinde einen Coding-Agenten",
            text: "Führe den Setup-Befehl in Claude Code oder Codex aus. Der Mitarbeiter nutzt die eigenen Tools dieses Agenten, eigener Tool-Code ist also meist nicht nötig.",
          },
          {
            title: "Mach aus Aufgaben Issues",
            text: "Leg die Arbeit, die deine Crew bisher erledigt hat, als Issues auf dem Board an und stell Arbeitszeiten und einen Heartbeat ein, damit der Mitarbeiter sie von selbst übernimmt.",
          },
        ],
      },
      { kind: "text", title: "Weitere Alternativen", points: [...others("crewai"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Von CrewAI zu Crewmark wechseln" },
    mid,
    faq: {
      title: "FAQ zur CrewAI-Alternative",
      items: [
        {
          q: "Ist CrewAI kostenlos?",
          a: "Das Framework ist Open Source unter der MIT-Lizenz, die Tokens bezahlst du aber bei deinem Modellanbieter. Die gehostete Plattform hat einen kostenlosen Basic-Plan mit 50 Workflow-Ausführungen pro Monat und einen Enterprise-Plan mit individuellen Preisen.",
        },
        {
          q: "Muss ich programmieren können, um Crewmark zu nutzen?",
          a: "Nein. Du wählst eine Rolle, schreibst das Ziel auf und führst einen Setup-Befehl in Claude Code oder Codex aus. Arbeit wird als Issues auf einem Board zugewiesen.",
        },
        {
          q: "Kann CrewAI Claude Code oder Codex als Agenten ausführen?",
          a: "CrewAI-Agenten sind LLM-Aufrufe mit Tools, die du definierst. Sie nutzen also Modell-APIs, statt in Claude Code oder Codex zu laufen. Crewmark-Mitarbeiter laufen im echten Coding-Agenten.",
        },
        {
          q: "Was ist eine gute Open-Source-Alternative zu CrewAI?",
          a: "Wenn du Open Source und Agenten auf Basis von Coding-CLIs willst, sieh dir [Paperclip](/alternatives/paperclip) an. Crewmark ist nicht Open Source, sondern eine gehostete App.",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "Am 2. November 2026 mit dem README, der Dokumentation und der Preisseite von CrewAI abgeglichen.",
    disclaimer: disclaimer("CrewAI"),
  },
};
