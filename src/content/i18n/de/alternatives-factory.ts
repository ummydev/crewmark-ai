import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory-AI-Alternativen 2026: Coding-Agenten im Vergleich",
    description:
      "Factory-AI-Alternativen im Vergleich: Devin, Claude Code, Codex, Open Source wie OpenCode, Cursor Projects und Conductor, mit Preisen, Limits und Einsatzzweck.",
  },
  breadcrumb: "Factory-Alternativen",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Alternativen · Factory",
    title: "Factory-AI-Alternativen: Devin, Claude Code, Codex, OpenCode und mehr im Vergleich",
    lead: "Factory macht Droids: Coding-Agenten, die in der Factory App auf deinem Desktop, in der Droid CLI, headless in CI und auf von Factory gehosteten Cloud-Computern laufen. Die Einzelpläne reichen von Free (mit eigener Inferenz) bis $200 im Monat. Pro, Plus und Max haben rollierende Limits über 5 Stunden, 7 Tage und 30 Tage, Teams ist auf 10 Plätze begrenzt, und Droid CLI und Factory App haben keine Open-Source-Lizenz. Hier sind 7 Alternativen, von Devin und Claude Code bis zum Open-Source-Agenten OpenCode, mit den jeweiligen Kosten.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory-Alternativen auf einen Blick",
      text: [
        "Angaben von den eigenen Seiten, der Dokumentation oder dem GitHub jedes Anbieters, geprüft am 13. November 2026. Preise in US-Dollar. Kein Ranking. Die eigenen Pläne von Factory stehen unter [Factory-Preise](/pricing/factory).",
      ],
      headers: ["Alternative", "Was es ist", "Open Source", "Preis ab"],
      rows: [
        [
          "[Factory](/pricing/factory) (zum Vergleich)",
          "Droids: Coding-Agenten in einer Desktop-App, einer CLI, in CI und auf von Factory gehosteten Cloud-Computern",
          "Nein",
          "Free $0/Monat mit eigener Inferenz; Pro $20/Monat",
        ],
        [
          "[Devin](/pricing/devin)",
          "Der KI-Softwareingenieur von Cognition: eine Cloud-VM pro Session, dazu Devin Desktop und Devin CLI",
          "Nein",
          "Free $0 (kleines Kontingent); Pro $20/Monat",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Der Coding-Agent von Anthropic im Terminal, in der IDE, als Desktop-App, im Web und mobil",
          "Nein (öffentliches Repository, alle Rechte vorbehalten)",
          "In bezahlten Claude-Plänen: Pro $20/Monat oder $17/Monat bei jährlicher Abrechnung",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "Der Coding-Agent von OpenAI: CLI, IDE-Erweiterung, ChatGPT-Desktop-App und Codex Cloud",
          "Teilweise: CLI, SDK und App Server unter Apache-2.0",
          "In ChatGPT-Plänen ab Plus für $20/Monat oder mit einem OpenAI-API-Key",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Ein Coding-Agent für 200+ Modellanbieter, auch lokale Modelle",
          "Ja, MIT",
          "Kostenlos, mit kostenlosen Modellen; OpenCode Go $10/Monat",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Ein Koordinator-Agent, der Coding-Arbeit plant und Cloud-Agenten von Cursor parallel laufen lässt",
          "Nein",
          "Cursor Premium $30/Monat oder $300/Jahr",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Eine Mac-App, die Claude Code, Codex, Cursor und OpenCode nebeneinander in Git-Worktrees ausführt",
          "Nein",
          "Kostenlos nutzbar; seit dem 4. November 2026 keine neuen Registrierungen und Downloads mehr",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Ein Issue-Board für KI-Mitarbeiter, die als Claude Code oder Codex auf deinem Computer laufen",
          "Ja, GPL-3.0",
          "Kostenlos (1 Projekt, bis zu 3 KI-Mitarbeiter); Pro $5/Monat folgt bald",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Cloud-Coding-Agenten wie die Droids",
      text: [
        "Wie die Droid Computers von Factory lassen diese Agenten in der Cloud des Anbieters laufen, die Arbeit geht also auch bei zugeklapptem Laptop weiter.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition): ein KI-Softwareingenieur, der Code schreibt, startet und testet und Pull Requests öffnet, jede Cloud-Session auf einer eigenen virtuellen Maschine, dazu lokal Devin Desktop und Devin CLI. Er übernimmt Linear- und Jira-Tickets, führt Automations nach Zeitplan oder bei Ereignissen aus, und eine Koordinator-Session kann Child-Devins starten und ihnen Nachrichten schreiben. Free $0 (kleines Kontingent), Pro $20/Monat, Max $200/Monat; Teams kostet „$80/Monat für den Team-Plan + $40/Monat pro vollem Entwicklerplatz“ („$80/month for team plan + $40/mo per full dev seat“), für bis zu 100 Nutzer. Wähle Devin, wenn du Tickets an einen Agenten übergeben und Pull Requests zurückbekommen willst, mit Team-Plänen über 10 Plätze hinaus. Mehr: [Devin-Alternativen](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects): eine Cursor-Funktion, bei der ein Koordinator-Agent ein Feature, eine Migration oder eine komplette App plant, die Arbeit an Agenten verteilt, die parallel auf den Cloud Agents von Cursor laufen, und dir die fertige Arbeit zum Prüfen zurückbringt. Ein Project hat ein Aufgaben-Board und gemeinsame Notizen und kann nach Zeitplan, auf einen Slack-Channel oder auf deine Pull Requests hin arbeiten. Es ist in Cursor Premium ($30/Monat oder $300/Jahr) und höher, Teams und Enterprise enthalten, nicht in Free oder Plus. Wähle Cursor Projects, wenn du schon in Cursor arbeitest und einen Koordinator willst, der viele Cloud-Agenten steuert.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Coding-Agenten von Anthropic und OpenAI",
      text: [
        "Der Free-Plan von Factory kann mit einer ChatGPT-Anmeldung oder deinen eigenen API-Keys laufen. Wenn du Anthropic oder OpenAI schon bezahlst, sind deren eigene Coding-Agenten in diesen Plänen enthalten. Im direkten Vergleich: [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic): liest deine Codebasis, bearbeitet Dateien und führt Befehle aus, im Terminal, in IDE-Erweiterungen, einer Desktop-App, im Web und in den mobilen Claude-Apps, auf Claude-Modellen. Es führt geplante Aufgaben in der Cloud und auf dem Desktop sowie `/loop` aus und hat Subagents plus experimentelle Agent Teams. Es ist in bezahlten Claude-Plänen enthalten, nicht in Free: Pro $20/Monat ($17/Monat bei jährlicher Abrechnung), Max $100, Ultra $200 und Team-Plätze für 2 bis 150 Personen. Wähle Claude Code, wenn du schon für Claude zahlst.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI): ein Coding-Agent als Terminal-CLI, als IDE-Erweiterung, in der ChatGPT-Desktop-App und in Codex Cloud, mit `codex exec` für Skripte und CI. CLI, SDK und App Server sind Open Source unter Apache-2.0. Codex ist in ChatGPT-Plänen ab Plus für $20/Monat enthalten, in Pro ab $100/Monat und in Business ab $20/Nutzer/Monat bei jährlicher Abrechnung, oder du nutzt es mit einem OpenAI-API-Key (nur CLI, SDK und IDE-Erweiterung). Wähle Codex, wenn du schon für ChatGPT zahlst oder eine Open-Source-CLI willst. Siehe [Devin vs Codex](/compare/devin-vs-codex).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Eine Open-Source-Alternative zu Factory: OpenCode",
      points: [
        "[OpenCode](/pricing/opencode): ein MIT-lizenzierter Coding-Agent, der mit 200+ Modellanbietern arbeitet, auch mit lokalen Modellen, als Terminal-UI, Desktop-App, Web-App und SDK. Du kannst mit kostenlosen Modellen starten, die kein Konto brauchen (mit täglichem Anfragelimit), dich mit ChatGPT Plus oder Pro oder GitHub Copilot anmelden, eigene API-Keys mitbringen oder für OpenCode Go ($10/Monat) oder Go Plus ($40/Monat) zahlen. Eigene Agenten und Subagents sind Dateien in deinem Repository, mit Regeln pro Aktion: erlauben, nachfragen oder verweigern. Geplante Läufe sind experimentell und per Opt-in. Wähle OpenCode, wenn du einen Open-Source-Agenten willst, den du auf fast jedes Modell ansetzen kannst. Mehr: [OpenCode-Alternativen](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "Mehrere Agenten nebeneinander: Conductor",
      points: [
        "[Conductor](/pricing/conductor): eine Mac-App, die Agenten von Claude Code, Codex, Cursor und OpenCode nebeneinander ausführt, jede Aufgabe in ihrem eigenen Git-Worktree, und dir hilft, den Diff zu prüfen, einen Pull Request zu öffnen und zu mergen. Am 4. November 2026 kündigte Conductor an, sich Meta anzuschließen: Neue Registrierungen und Downloads sind geschlossen, Conductor Cloud ist ab dem 13. November 2026 schreibgeschützt und wird am 20. November 2026 abgeschaltet, und die lokale App bekommt bis Anfang 2027 neue Modelle und kritische Bugfixes. Wähle Conductor nur, wenn es schon auf deinem Mac installiert ist. Mehr: [Conductor-Alternativen](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "So wählst du eine Factory-Alternative aus",
      steps: [
        {
          title: "Entscheide, wo der Agent läuft",
          text: "Devin und Cursor Projects laufen in der Cloud des Anbieters, wie die Droid Computers. Claude Code und Codex laufen auf deinem Rechner und in ihrer eigenen Cloud. OpenCode läuft auf deinem Rechner. Conductor läuft lokal auf einem Mac.",
        },
        {
          title: "Zähl die Plätze",
          text: "Factory Teams ist auf 10 Plätze begrenzt. Devin Teams reicht bis 100 Nutzer, der Team-Plan von Claude Code deckt 2 bis 150 Personen ab, Codex Business beginnt bei 2 Nutzern, und Cursor Teams wird pro Platz berechnet.",
        },
        {
          title: "Prüfe, wie die Nutzung begrenzt ist",
          text: "Pro, Plus und Max von Factory haben rollierende Limits über 5 Stunden, 7 Tage und 30 Tage plus vorausbezahlte Extra Usage. Devin nutzt tägliche und/oder wöchentliche Kontingente plus vorausbezahlte Credits. Claude Code teilt sich 5-Stunden- und Wochenlimits mit dem Claude-Chat. Die kostenlosen Modelle von OpenCode haben ein tägliches Anfragelimit.",
        },
        {
          title: "Entscheide, ob du Open Source brauchst",
          text: "OpenCode steht unter MIT, die CLI von Codex unter Apache-2.0. Factory, Devin, Claude Code, Cursor Projects und Conductor veröffentlichen für das Produkt selbst keine Open-Source-Lizenz.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Crewmark: Gib Claude Code oder Codex eine Rolle und einen Zeitplan",
      text: [
        "Crewmark ist kein Coding-Agent. Es ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern: Jeder ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf, nimmt sich Issues von einem gemeinsamen Board und hält ihren Status aktuell, mit dem Agenten-Abo, für das du schon zahlst. Dein Computer muss für die Heartbeats eingeschaltet bleiben.",
        "Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten. Der Free-Plan umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter; Pro ($5/Monat) und Team ($10/Monat) folgen bald, und die Abrechnung ist noch nicht gebaut, deshalb kann bis dahin jedes Konto Crewmark kostenlos nutzen. Die Agentennutzung bezahlst du deinem Agentenanbieter. Details unter [Crewmark-Preise](/pricing).",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Gib jedem Mitarbeiter eine Rolle, Ziele und Projekte, zum Beispiel als Softwareentwickler. Siehe [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues mit Status und Prioritäten zu und lass regelmäßige wiederkehren. Agenten weisen sich gegenseitig Issues zu und @erwähnen sich; braucht einer ein Review oder eine Erlaubnis, setzt er das Issue auf „Handlungsbedarf“ und wartet.",
        },
        {
          title: "Leg Arbeitszeiten fest",
          text: "Der Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeit alle 15 Minuten bis 24 Stunden. Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du zahlst schon für Claude Code oder Codex?",
    text: "Crewmark gibt ihnen Rollen, einen Heartbeat und ein gemeinsames Board, damit sie ohne Prompt weiterarbeiten. Kostenlos für bis zu 3 Mitarbeiter.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Factory-Alternativen",
    items: [
      {
        q: "Gibt es eine kostenlose Factory-AI-Alternative?",
        a: "OpenCode ist kostenlos, mit kostenlosen Modellen, die kein Konto brauchen (tägliches Anfragelimit). Devin hat einen Free-Plan mit kleinem Kontingent. Der Free-Plan von Crewmark umfasst 1 Projekt und bis zu 3 KI-Mitarbeiter. Factory selbst hat einen Free-Plan für $0/Monat, wenn du deine eigene Inferenz mitbringst: Melde dich mit ChatGPT, GitHub Copilot oder OpenRouter an oder verbinde deine eigenen API-Keys.",
      },
      {
        q: "Gibt es eine Open-Source-Alternative zu den Droids von Factory?",
        a: "OpenCode (MIT) ist ein vollständig quelloffener Coding-Agent, und CLI, SDK und App Server von Codex stehen unter Apache-2.0. Crewmark (GPL-3.0) ist ebenfalls Open Source, führt aber Claude Code oder Codex aus statt eines eigenen Agenten. Factory veröffentlicht für Droid CLI und Factory App keine Open-Source-Lizenz; sein Repository github.com/Factory-AI/factory enthält nur ein README und Dokumentation.",
      },
      {
        q: "Factory vs Devin: Was ist der Unterschied?",
        a: "Beide laufen in der Cloud und lokal, übernehmen Issues aus Linear und Jira und führen Automatisierungen aus. Die Droids von Factory laufen in der Factory App, der Droid CLI, in CI und auf Droid Computers; Devin führt jede Cloud-Session auf einer eigenen VM aus, dazu Devin Desktop und Devin CLI. Beide nennen Pro für $20/Monat. Factory Teams kostet $60/Monat pro Team plus $40/Monat pro Person, bis zu 10 Plätze; Devin Teams kostet „$80/Monat für den Team-Plan + $40/Monat pro vollem Entwicklerplatz“ („$80/month for team plan + $40/mo per full dev seat“), für bis zu 100 Nutzer.",
      },
      {
        q: "Factory vs Claude Code: Was ist der Unterschied?",
        a: "Claude Code ist der eigene Agent von Anthropic auf Claude-Modellen, enthalten in bezahlten Claude-Plänen. Die Droids von Factory arbeiten mit GPT-5, Claude Opus und Sonnet, Gemini und Open-Weight-Modellen oder deinen eigenen Keys und ergänzen gehostete Droid Computers, Delegation aus Slack, Linear und Jira sowie geplante Automatisierungen. Siehe [Factory vs Claude Code](/compare/factory-vs-claude-code).",
      },
      {
        q: "Kann ich mein ChatGPT-Abo nutzen, statt für Factory zu zahlen?",
        a: "Codex ist in ChatGPT-Plänen ab Plus für $20/Monat enthalten. Bei OpenCode kannst du dich mit ChatGPT Plus oder Pro anmelden, und die Pläne Pro, Max und Teams von Devin können einen verknüpften ChatGPT-Plan für die Nutzung von GPT-Modellen verwenden. Auch beim Free-Plan von Factory kannst du dich mit ChatGPT anmelden. Crewmark führt Codex mit deinem ChatGPT-Abo aus.",
      },
      {
        q: "Welche Factory-Alternative lässt mehrere Agenten parallel laufen?",
        a: "Die Koordinator-Session von Devin startet Child-Devins und schreibt ihnen Nachrichten. Cursor Projects lässt einen Koordinator mit Worker-Agenten in Cursors Cloud laufen. Claude Code hat Subagents und experimentelle Agent Teams, Codex startet Subagents parallel, und OpenCode kann mehrere Agenten im selben Projekt starten. Crewmark lässt ein Team aus KI-Mitarbeitern von einem gemeinsamen Board aus arbeiten.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Coding-Agenten einen Job, nicht nur einen Prompt.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit den eigenen Seiten, der Dokumentation, den Preisen und dem GitHub jedes Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor oder Conductor noch mit Meta verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber. Angaben zu anderen Produkten stammen von deren öffentlichen Seiten und können sich inzwischen geändert haben.",
};
