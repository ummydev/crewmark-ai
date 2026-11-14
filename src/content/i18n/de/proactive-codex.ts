import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex proaktiv: Zeitpläne, Cron und Heartbeat | Crewmark AI",
    description:
      "So handeln Codex und ChatGPT, ohne auf dich zu warten: Scheduled tasks (früher Automations), codex exec mit cron, die GitHub Action und ein Heartbeat.",
  },
  breadcrumb: "Proaktives Codex",
  hero: {
    kicker: "Proaktives Codex",
    title: "So machst du Codex proaktiv",
    lead: "Ein proaktiver Codex-Agent sitzt nicht wartend in einem Chat. Er erledigt Routinefreigaben selbst, läuft nach Zeitplan, reagiert auf einen Pull Request oder eine Slack-Nachricht und meldet sich mit dem Ergebnis. OpenAI liefert für jedes davon einen Baustein, und einige davon teilt sich Codex mit ChatGPT. Diese Anleitung zeigt, wie du sie einrichtest, was jeder nicht kann und wie du Codex eine feste Aufgabe statt eines einmaligen Prompts gibst. Was keiner davon bietet, ist ein Heartbeat: dieselbe Unterhaltung in einem festen Rhythmus wecken, damit sie ihre nächste Aufgabe übernimmt. Wir zeigen die nächstliegende eingebaute Option und wie Crewmark einen Heartbeat ergänzt.",
    cta: "Loslegen",
    secondary: "Direkt zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was „proaktiv“ bei Codex bedeutet",
      text: [
        "Von Haus aus antwortet Codex, wenn du fragst. Ein proaktives Setup braucht drei Dinge, und sie stecken in verschiedenen Teilen des Produkts:",
      ],
      points: [
        "Es hält nicht für jede Freigabe an: ein Berechtigungsmodus, der Routineaktionen durchlässt.",
        "Es beginnt von selbst: eine geplante Aufgabe, ein Ereignis-Trigger oder ein Cronjob, der die Arbeit ohne dich startet.",
        "Es weiß, was als Nächstes zu tun ist: ein Backlog und ein Ziel, damit jeder Lauf sinnvolle Arbeit hat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Schritt für Schritt: Codex proaktiv machen",
      steps: [
        {
          title: "Wähle einen Berechtigungsmodus, der nicht bei allem anhält",
          text: "Tippe in der CLI `/permissions`. „Approve for me“ fragt nur bei Aktionen nach, die als potenziell unsicher erkannt werden, und eignet sich damit für Arbeit, die du nicht beobachtest. „Full access“ hebt die Beschränkungen für Dateien und das Internet auf; das solltest du isolierten Rechnern vorbehalten. Falls eine ältere Anleitung dir `--full-auto` empfiehlt: Dieses Flag wird nicht mehr unterstützt, nutze stattdessen `--sandbox workspace-write`.",
          code: "/permissions",
        },
        {
          title: "Leg eine geplante Aufgabe an (früher Automations)",
          text: "Was früher Codex Automations hieß, heißt jetzt Scheduled tasks. Bitte in einem Codex-Chat um eine: Sag, worin die Arbeit besteht, wann sie laufen soll und ob die Ergebnisse in denselben Chat zurückkommen sollen. Aufgaben können alle paar Minuten, täglich oder wöchentlich laufen, und du verwaltest sie in der Ansicht Scheduled in der Seitenleiste. Eine Aufgabe, die mit lokalen Dateien arbeitet, braucht einen eingeschalteten Computer und eine laufende App; in einem Git-Repository kann sie in einem separaten Hintergrund-Worktree arbeiten. Die Codex-CLI verwaltet keine geplanten Aufgaben.",
          code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
        },
        {
          title: "Lös Aufgaben durch Ereignisse aus",
          text: "Statt zu einer Uhrzeit kann eine Aufgabe starten, wenn etwas passiert: eine neue Gmail-Nachricht, eine Slack-Nachricht in ausgewählten Channels oder Aktivität in einem GitHub-Pull-Request. Ereignis-Trigger richtest du in ChatGPT im Web oder in der Mobil-App ein, bei berechtigten Abos, und eine Aufgabe nutzt entweder Ereignisse oder einen Zeitplan, nicht beides.",
        },
        {
          title: "Führe Codex mit codex exec aus cron aus",
          text: "`codex exec` führt Codex ohne die interaktive Oberfläche aus: Der Fortschritt geht nach stderr und nur die letzte Nachricht nach stdout, es passt also gut zu Skripten und geplanten Jobs. Ohne `--sandbox workspace-write` arbeitet es nur lesend. Die Dokumentation von OpenAI nennt geplante Jobs als Einsatzzweck, gibt aber kein Cron-Beispiel; dieses hier stammt von uns.",
          code: '# crontab -e: an jedem Werktag um 9:00 Uhr\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "Bau Codex in deinen GitHub-Workflow ein",
          text: "Die GitHub Action `openai/codex-action` führt Codex innerhalb eines Workflows aus, und du wählst die Trigger. Kommentiere in Pull Requests `@codex review` für ein Review oder bitte `@codex`, CI-Fehler zu beheben. In Linear kannst du ein Issue Codex zuweisen.",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "Reagiere mit Hooks innerhalb einer Session",
          text: "Codex-Hooks führen deine Befehle an bestimmten Punkten aus, etwa beim Start einer Session, vor und nach einem Tool-Aufruf oder wenn ein Turn endet. Sie reagieren, während Codex arbeitet; sie starten es nicht. Um Arbeit zu starten, nutze eine geplante Aufgabe oder einen Ereignis-Trigger.",
        },
      ],
      source: {
        label: "Quelle: Codex-Dokumentation von OpenAI zu geplanten Aufgaben (Englisch)",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "Der fehlende Baustein",
      title: "Füge einen Heartbeat hinzu: dieselbe Unterhaltung für die nächste Aufgabe wecken",
      text: [
        "Ein Heartbeat ist ein kurzer, regelmäßiger Anstoß in dieselbe Codex-Unterhaltung, etwa alle 30 Minuten während der Arbeitszeit, der sagt: Prüf deine Arbeit, nimm die nächste Aufgabe. Eine geplante Aufgabe wiederholt einen Prompt; ein Heartbeat hält eine einzige Unterhaltung am Laufen, sodass Codex sich erinnert, was es beim letzten Mal getan hat, und den nächsten Punkt aus einer Warteschlange nimmt. Das ist der Unterschied zwischen einem Job, der sich wiederholt, und einem Mitarbeiter, der weiterarbeitet.",
      ],
      steps: [
        {
          title: "Die nächstliegende eingebaute Option",
          text: "Eine geplante Codex-Aufgabe kann ihre Ergebnisse in denselben Chat zurückschicken, du kannst ihren Prompt also als Heartbeat formulieren: „Prüf alle 30 Minuten TODO.md, nimm die nächste offene Aufgabe und hak sie ab“. Die Warteschlangen-Datei pflegst du aber weiterhin selbst, und der Zeitplan weiß nichts von Arbeitszeiten oder anderen Agenten.",
        },
        {
          title: "Mit Crewmark: Heartbeat eingebaut",
          text: "Der Daemon von Crewmark reiht den Heartbeat während der Arbeitszeit alle 15, 30 oder 60 Minuten mit `codex queue --resume` in die eigene Codex-Unterhaltung des Mitarbeiters ein, und das Board ist die Warteschlange: Bei jedem Heartbeat nimmt der Mitarbeiter sein nächstes Issue und berichtet darüber. Details findest du [weiter unten](#crewmark).",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "Und ChatGPT?",
      text: [
        "Auch ChatGPT kann sich von selbst melden. Scheduled tasks in ChatGPT schicken dir Erinnerungen, wiederkehrende Briefings und die Ergebnisse von Dingen, die es beobachtet; du findest sie auf der Seite Scheduled in der Seitenleiste. Wie viele du haben kannst und wie oft sie laufen, hängt von deinem Abo ab. ChatGPT Pulse, das ein proaktives tägliches Update verschickt hat, wurde im Juni 2026 eingestellt; OpenAI verweist für ein tägliches Briefing stattdessen auf eine geplante Aufgabe.",
        "Der Unterschied zu Codex: Eine ChatGPT-Aufgabe arbeitet mit dem, worauf ChatGPT zugreifen kann, nicht mit deiner Codebasis. Für Arbeit in einem Repository nutze geplante Codex-Aufgaben oder `codex exec`.",
      ],
    },
    {
      kind: "table",
      title: "Welche Option passt",
      headers: ["Option", "Beginnt Arbeit von selbst", "Computer muss an sein", "Am besten für"],
      rows: [
        ["Approve for me", "Nein, es hält seltener an, sobald du fragst", "Ja", "Weniger Unterbrechungen während einer Aufgabe"],
        ["Geplante Aufgabe mit lokalen Dateien", "Ja, nach Zeitplan", "Ja, mit laufender App", "Tägliche Arbeit in einem Repository"],
        ["Geplante Aufgabe im Web", "Ja, nach Zeitplan", "Nein", "Arbeit, die deine Dateien nicht braucht"],
        ["Ereignisgesteuerte Aufgabe", "Ja, bei Aktivität in Gmail, Slack oder GitHub", "Nein", "Auf Nachrichten und PRs reagieren"],
        ["codex exec + cron", "Ja, nach deinem Cron-Zeitplan", "Ja", "Skripte, die du komplett selbst steuerst"],
        ["Codex GitHub Action", "Ja, bei Workflow-Triggern", "Nein", "Reviews und CI-Fixes"],
        ["Geplante Aufgabe in ChatGPT", "Ja, nach Zeitplan", "Nein", "Erinnerungen und Briefings"],
        ["Geplante Aufgabe als Heartbeat", "Ja, nach Zeitplan, Ergebnisse im selben Chat", "Ja, bei lokalen Dateien", "Ein Agent, der eine TODO-Datei abarbeitet"],
        ["Crewmark-Heartbeat", "Ja, alle 15–60 Min. während der Arbeitszeit, in derselben Unterhaltung", "Ja", "Agenten mit Backlog, Zielen und Arbeitszeiten"],
      ],
    },
    {
      kind: "text",
      title: "Was diese Funktionen dir weiterhin überlassen",
      text: ["Jede der Optionen oben startet einen Lauf. Keine entscheidet, woran Codex diese Woche arbeiten soll:"],
      points: [
        "Eine geplante Aufgabe wiederholt einen Prompt. Sie nimmt nicht den nächsten Punkt aus einem Backlog und weiß nicht, was der letzte Lauf unerledigt gelassen hat.",
        "Es gibt kein gemeinsames Board, auf dem du Codex Arbeit gibst und siehst, was in Arbeit, erledigt oder blockiert ist.",
        "Es gibt keine Arbeitszeiten und keine Zielwerte, du kannst es also nicht beauftragen, bis Monatsende eine Zahl zu bewegen.",
        "Codex neben Claude Code zu betreiben heißt: zwei getrennte Sätze von Prompts, Zeitplänen und Orten, an denen du nachsehen musst.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Codex eine feste Aufgabe",
      text: [
        "Crewmark macht aus einer Codex-Unterhaltung einen KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat und gibt ihm Arbeit über dasselbe Board wie deinen Claude-Code-Mitarbeitern. Er läuft in deinem echten Codex, mit dem ChatGPT-Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein und verbinde seine Codex-Unterhaltung",
          text: "Wähle eine Rolle und führe den Setup-Befehl, den Crewmark dir gibt, in Codex aus. Diese Unterhaltung wird zum Mitarbeiter und erinnert sich so zwischen den Weckrufen an die Arbeit.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Der Crewmark-Daemon, ein kleines Hintergrundprogramm auf deinem Computer, reiht den Heartbeat-Prompt des Mitarbeiters während seiner Arbeitszeit alle 15, 30 oder 60 Minuten mit `codex queue --resume` in diese Unterhaltung ein und lässt ihn außerhalb davon in Ruhe.",
        },
        {
          title: "Weise Issues auf dem Board zu",
          text: "Wenn du ein Issue zuweist oder kommentierst, landet die Neuigkeit in derselben Unterhaltung. Codex nimmt neue Arbeit also selbst auf, statt darauf zu warten, dass du sie hineinkopierst.",
        },
        {
          title: "Miss ihn an einer Zahl",
          text: "Gib jedem Mitarbeiter eine KPI. Er plant seine Issues auf diese Zahl hin, schiebt sie über das Board, kommentiert seinen Fortschritt und schreibt dir, wenn er eine Entscheidung braucht.",
        },
      ],
    },
    {
      kind: "text",
      title: "Kombiniere sie",
      text: [
        "Behalte die geplanten Aufgaben von Codex für kleine wiederkehrende Routinejobs und nutze Crewmark für die dauerhafte Aufgabe: Stell die Unterhaltung des Mitarbeiters auf „Approve for me“, damit jeder Heartbeat Arbeit erledigt, und lass Pull-Request-Reviews weiter über `@codex review` laufen. Du nutzt stattdessen Claude Code? Siehe [Claude Code proaktiv machen](/proactive-claude-code).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex proaktiv machen" },
  mid: {
    title: "Gib Codex eine feste Aufgabe, keinen geplanten Prompt",
    text: "Crewmark weckt deine Codex-Unterhaltung während der Arbeitszeit im Heartbeat-Takt und gibt ihr das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein Heartbeat für Codex?",
        a: "Ein regelmäßiger Anstoß in dieselbe Codex-Unterhaltung, zum Beispiel alle 30 Minuten während der Arbeitszeit, der Codex anweist, seine Arbeit zu prüfen und die nächste Aufgabe zu übernehmen. Weil er eine Unterhaltung fortsetzt, erinnert sich Codex an frühere Arbeit. Am nächsten kommt dem eine geplante Aufgabe, die in denselben Chat zurückmeldet; bei Crewmark ist ein Heartbeat eingebaut, mit Arbeitszeiten und einem Board als Warteschlange.",
      },
      {
        q: "Was ist aus Codex Automations geworden?",
        a: "Sie heißen jetzt Scheduled tasks. Du legst sie an, indem du in einem Codex-Chat darum bittest, und verwaltest sie in der Ansicht Scheduled der App; die Doku-Seite liegt weiterhin unter einer URL, die auf /automations endet.",
      },
      {
        q: "Funktioniert codex --full-auto noch?",
        a: "Nein, `--full-auto` wird nicht mehr unterstützt. Nutze `--sandbox workspace-write`, damit Codex Dateien bearbeiten darf, oder den Berechtigungsmodus „Approve for me“, damit es nur bei Aktionen nachfragt, die unsicher wirken.",
      },
      {
        q: "Wie führe ich Codex nach Zeitplan oder mit cron aus?",
        a: "Bitte in der Codex-App um eine geplante Aufgabe. Aus deinem eigenen Scheduler rufst du `codex exec` aus einem Cronjob auf und übergibst `--sandbox workspace-write`, wenn es Dateien ändern soll. In einem Repository kannst du außerdem die Codex GitHub Action aus einem Workflow ausführen.",
      },
      {
        q: "Kann ChatGPT mir proaktiv schreiben?",
        a: "Ja, über geplante und ereignisgesteuerte Aufgaben. ChatGPT Pulse, das proaktive tägliche Update, wurde im Juni 2026 eingestellt, und OpenAI empfiehlt stattdessen eine geplante Aufgabe für ein tägliches Briefing.",
      },
      {
        q: "Arbeitet Codex weiter, wenn mein Computer aus ist?",
        a: "Geplante Aufgaben im Web, Ereignis-Trigger, Codex-Cloud-Aufgaben und die GitHub Action schon. Alles, was mit deinen lokalen Dateien arbeitet, darunter lokale geplante Aufgaben, Cronjobs und Crewmark, braucht einen eingeschalteten Computer.",
      },
      {
        q: "Kostet Crewmark zusätzliche Tokens?",
        a: "Nein. Mitarbeiter laufen in deinem eigenen Codex mit dem ChatGPT-Abo, das du schon hast. Es gibt also keine zweite Rechnung für Tokens.",
      },
    ],
  },
  cta: {
    title: "Mach Codex zu deinem ersten KI-Mitarbeiter",
    text: "Gib ihm eine Rolle, ein Ziel, Arbeitszeiten und einen Heartbeat und weise ihm dann sein erstes Issue zu.",
    button: "Loslegen",
  },
  checked: "Am 2. November 2026 mit der Codex-Dokumentation von OpenAI abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu OpenAI, das es auch nicht unterstützt. Codex und ChatGPT sind Marken von OpenAI.",
};
