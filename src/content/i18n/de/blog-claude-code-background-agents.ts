import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code im Hintergrund: Headless, --bg, Cron | Crewmark",
    description:
      "Claude Code im Hintergrund: Background Tasks, Agent View mit --bg, headless claude -p mit cron, Cloud-Sessions, geplante Aufgaben und Berechtigungen.",
  },
  breadcrumb: "Claude Code als Hintergrund-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "So lässt du Claude Code als Hintergrund-Agent laufen",
    lead: "Ein Hintergrund-Agent arbeitet weiter, während du etwas anderes tust: ein langer Testlauf, den du in den Hintergrund geschickt hast, eine Session, die du mit --bg gestartet und deren Terminal du geschlossen hast, oder ein headless claude -p-Job, den cron jeden Morgen startet. Für jeden dieser Fälle hat Claude Code ein Werkzeug. Diese Anleitung zeigt, wie du sie nutzt, was jedes am Laufen hält und welche Berechtigungen ein unbeaufsichtigter Lauf braucht.",
    cta: "Early Access anfragen",
    secondary: "Direkt zum Headless-Modus",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Fünf Wege, Claude Code im Hintergrund auszuführen",
      text: ["Sie unterscheiden sich darin, was weiterlaufen muss und wer die Arbeit startet."],
      headers: ["", "Start mit", "Läuft weiter, solange", "Gut für"],
      rows: [
        ["Background Tasks", "Ctrl+B, oder Claude führt einen Befehl im Hintergrund aus", "Die Session offen ist", "Lange Builds und Tests, Subagenten, innerhalb einer Unterhaltung"],
        ["Agent View", "`claude --bg \"<prompt>\"`", "Dein Computer an ist (das Terminal darf zu)", "Mehrere Sessions, die du jetzt startest und später prüfst"],
        ["Headless-Modus", "`claude -p \"<prompt>\"`, aus einem Skript oder cron", "Der Befehl läuft", "Skripte, Cronjobs, CI"],
        ["Cloud-Sessions", "`claude --cloud \"<task>\"`", "Die Server von Anthropic sie ausführen (Laptop darf zu)", "Lange Aufgaben in einem GitHub-Repo"],
        ["Geplante Aufgaben", "`/schedule`, die Desktop-App oder `/loop`", "Je nach Art: Cloud, App offen oder Session offen", "Wiederkehrende Arbeit; siehe [Claude Code proaktiv machen](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "Background Tasks innerhalb einer Session",
      text: [
        "Drück Ctrl+B, während Claude einen Bash-Befehl oder einen Subagenten ausführt, um ihn in den Hintergrund zu schicken (in tmux zweimal), und sprich weiter mit Claude. Claude kann einen Befehl auch von sich aus im Hintergrund starten. Subagenten, die Claude startet, laufen standardmäßig im Hintergrund.",
        "Tippe `/tasks`, um laufende Shells und Subagenten aufzulisten und nach ihnen zu sehen. In einer lokalen Terminal-Session hat ein Hintergrundbefehl kein Zeitlimit, er endet aber, wenn Claude Code beendet wird. Wie du mehrere Agenten nebeneinander laufen lässt, steht in [mehrere Claude-Code-Agenten parallel ausführen](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent View: Sessions, die das Terminal überdauern",
      text: [
        "`claude --bg \"<prompt>\"` startet eine Session im Hintergrund und kehrt sofort zurück; `/bg` schickt die Session, in der du gerade bist, in den Hintergrund. Ein Supervisor-Prozess führt sie aus, das Schließen des Terminals stoppt sie also nicht, das Herunterfahren oder Neustarten des Computers aber schon, und eine nicht verbundene, untätige Session wird nach etwa einer Stunde beendet.",
        "`claude agents` öffnet die Agent View; mit `claude attach <id>`, `claude logs <id>` und `claude stop <id>` verwaltest du eine einzelne Session. Agent View ist eine Research Preview, die Befehle können sich also ändern.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code headless mit claude -p ausführen",
      steps: [
        {
          title: "Einen Prompt ausführen und beenden",
          text: "`-p` (oder `--print`) führt Claude Code ohne die interaktive Oberfläche aus und beendet es, wenn es fertig ist, bei Erfolg mit Exit-Code 0. Du kannst auch Eingaben hineinpipen.",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "Ausgabe erzeugen, die ein Skript lesen kann",
          text: "`--output-format json` gibt das Ergebnis mit der Session-ID und Metadaten zurück, darunter `total_cost_usd`, eine auf deinem Rechner berechnete Schätzung. `stream-json` (mit `--verbose`) streamt Ereignisse, sobald sie passieren.",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "Nur die Tools erlauben, die es braucht",
          text: "Im Headless-Modus ist niemand da, der eine Abfrage freigibt. Seit v2.1.302 startet ein Lauf ohne gesetzten Modus in Manual und lehnt alles ab, was eine Freigabe bräuchte. Nutze `--allowedTools` für das, was es darf, und `--permission-mode dontAsk`, damit der Rest abgelehnt wird, statt zu warten.",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "Den Lauf begrenzen",
          text: "`--max-turns` stoppt nach einer bestimmten Zahl von Agent-Turns, `--max-budget-usd` bei geschätzten Kosten (es kann etwas darüber hinausgehen). Beides funktioniert nur mit `-p`.",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "Dieselbe Unterhaltung später fortsetzen",
          text: "Speichere die Session-ID aus der JSON-Ausgabe und übergib sie an `--resume`, oder nutze `--continue` für die letzte Session im Verzeichnis.",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "Nach Zeitplan mit cron ausführen",
          text: "Die Dokumentation von Anthropic enthält kein Cron-Beispiel; dieses hier nutzt nur dokumentierte Flags. Cron hat einen minimalen PATH, nutze also den vollständigen Pfad aus `which claude` und leg den Log-Ordner vorher an. Füge hier kein `--bare` hinzu: Es überspringt deine Abo-Anmeldung und braucht einen API-Key.",
          code: '# crontab -e: werktags um 9:00 Uhr\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: {
        label: "Quelle: Dokumentation von Anthropic zum Headless-Modus (Englisch)",
        href: "https://code.claude.com/docs/en/headless",
      },
    },
    {
      kind: "text",
      title: "Berechtigungen für unbeaufsichtigte Läufe",
      points: [
        "`dontAsk` plus eine `--allowedTools`-Liste ist die abgeriegelte Variante: Alles, was nicht auf der Liste steht, wird abgelehnt.",
        "`auto` lässt einen Klassifikator statt dir jede Aktion prüfen. Anthropic weist darauf hin, dass das keine Sicherheit garantiert.",
        "`acceptEdits` gibt Dateiänderungen und einfache Dateibefehle frei, aber keine anderen Shell-Befehle.",
        "`bypassPermissions` überspringt Abfragen und Sicherheitsprüfungen. Laut Anthropic solltest du es nur in isolierten Containern oder VMs ohne Internetzugang nutzen, da es keinen Schutz vor Prompt Injection bietet.",
        "Für Regeln, die für jeden Lauf in einem Projekt gelten, trag `permissions.allow` und `permissions.deny` in `.claude/settings.json` ein. Deny-Regeln haben immer Vorrang.",
      ],
    },
    {
      kind: "text",
      title: "Cloud-Optionen: wenn dein Computer aus ist",
      points: [
        "Cloud-Sessions: `claude --cloud \"<task>\"` läuft auf der Infrastruktur von Anthropic, ausgehend von deinem GitHub-Branch, und arbeitet bei zugeklapptem Laptop weiter. Folgeanweisungen schickst du mit `claude -p \"...\" --cloud <session-id>`.",
        "Cloud scheduled tasks: angelegt mit `/schedule` oder unter claude.ai/code, laufen sie nach Zeitplan (höchstens stündlich), per API-Aufruf oder bei GitHub-Ereignissen. Pro, Max, Ultra, Team und Enterprise; Research Preview.",
        "GitHub Actions: `anthropics/claude-code-action@v1` mit einem `schedule`-Trigger. Ein OAuth-Token aus `claude setup-token` nutzt dein Abo; ein API-Key wird pro Token abgerechnet.",
      ],
    },
    {
      kind: "steps",
      kicker: "Mit Crewmark",
      title: "Gib einem Hintergrund-Agenten eine feste Aufgabe",
      text: [
        "Background Tasks, Agent View und cron starten alle Arbeit, über die du schon entschieden hast. Crewmark gibt einer Claude-Code-Session stattdessen eine dauerhafte Rolle: Sie wacht während der Arbeitszeit im Heartbeat-Takt auf, nimmt das nächste Issue vom Board und schreibt dir, wenn sie blockiert ist.",
      ],
      steps: [
        {
          title: "Mach aus einer Session einen Mitarbeiter",
          text: "Wähle eine Rolle und ein Ziel in Zahlen und führe den Setup-Befehl, den Crewmark dir gibt, in Claude Code aus. Diese Unterhaltung wird zum Mitarbeiter.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Der Crewmark-Daemon weckt die Session während ihrer Arbeitszeit alle 15, 30 oder 60 Minuten, mit dem Abo, für das du schon zahlst, und lässt sie außerhalb davon in Ruhe.",
        },
        {
          title: "Issues zuweisen, Nachrichten beantworten",
          text: "Leg Arbeit als Issues auf dem Board an; der Mitarbeiter übernimmt sie, kommentiert unterwegs und fragt dich, wenn er ein Review braucht. Siehe [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code headless mit claude -p ausführen" },
  mid: {
    title: "Soll er sich seine nächste Aufgabe selbst nehmen?",
    text: "Crewmark weckt deine Claude-Code-Session im Heartbeat-Takt und gibt ihr das nächste Issue vom Board, während der Arbeitszeiten, die du festlegst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Code als Hintergrund-Agent",
    items: [
      {
        q: "Wie lasse ich Claude Code im Hintergrund laufen?",
        a: "Drück innerhalb einer Session Ctrl+B, um einen laufenden Befehl oder Subagenten in den Hintergrund zu schicken. Um eine ganze Session im Hintergrund zu starten, nutze `claude --bg \"<prompt>\"`. Für Skripte und cron nutze den Headless-Modus: `claude -p \"<prompt>\"`.",
      },
      {
        q: "Was ist der Headless-Modus von Claude Code?",
        a: "Claude Code mit `-p` (oder `--print`) auszuführen: Es nimmt einen Prompt entgegen, arbeitet ohne die interaktive Oberfläche und beendet sich, wobei es das Ergebnis als Text, JSON oder als Stream von JSON-Ereignissen ausgibt.",
      },
      {
        q: "Läuft ein Hintergrund-Agent weiter, wenn ich das Terminal schließe?",
        a: "Background Tasks innerhalb einer Session enden, wenn Claude Code beendet wird. Mit `--bg` gestartete Sessions laufen nach dem Schließen des Terminals weiter, bis der Computer herunterfährt. Cloud-Sessions und Cloud scheduled tasks laufen auch bei ausgeschaltetem Computer weiter.",
      },
      {
        q: "Welchen Berechtigungsmodus sollte ein unbeaufsichtigter Lauf nutzen?",
        a: "Fang mit `--permission-mode dontAsk` und einer `--allowedTools`-Liste an, die genau das enthält, was der Job braucht. Nutze `bypassPermissions` nur in einem isolierten Container oder einer VM ohne Internetzugang.",
      },
      {
        q: "Nutzt claude -p mein Claude-Abo?",
        a: "Es nutzt die Anmeldung, mit der du eingeloggt bist, außer du übergibst `--bare`, das die Anmeldung überspringt und einen API-Key braucht. Wie Headless-Läufe auf die Nutzungslimits eines Abos angerechnet werden, sagt die Dokumentation von Anthropic nicht ausdrücklich.",
      },
      {
        q: "Wie sehe ich nach meinen Hintergrund-Agenten?",
        a: "Nutze `/tasks` innerhalb einer Session, `claude agents` für mit `--bg` gestartete Sessions und die Log-Datei oder die JSON-Ausgabe für Headless-Läufe.",
      },
    ],
  },
  cta: {
    title: "Gib Claude Code eine feste Aufgabe.",
    text: "Crewmark macht aus einer Claude-Code-Session einen KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 2. November 2026 mit der Claude-Code-Dokumentation von Anthropic abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
