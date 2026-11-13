import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# Eine Session im Plan Mode starten
claude --permission-mode plan

# Oder in einer laufenden Session nur diesen Prompt planen
/plan füge Rate Limiting zur öffentlichen API hinzu`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Plan Mode: Shortcut, Funktionsweise, vs. Auto Mode | Crewmark",
    description:
      "So funktioniert der Plan Mode (Plan-Modus) in Claude Code: der Shortcut Shift+Tab und /plan, was Claude beim Planen darf, einen Plan freigeben, ihn zum Standard machen und der Vergleich mit Auto, Accept Edits und Manual.",
  },
  breadcrumb: "Claude Code Plan Mode",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Plan Mode: wie er funktioniert und wann er sich lohnt",
    lead: "Der Plan Mode (Plan-Modus) ist der Berechtigungsmodus von Claude Code, in dem Claude recherchiert und Änderungen vorschlägt, ohne sie umzusetzen: Es liest Dateien, führt Befehle zum Erkunden aus und schreibt einen Plan, fasst deinen Code aber erst an, wenn du zustimmst. Drück `Shift+Tab`, um dorthin zu wechseln, oder beginne einen Prompt mit `/plan`. Diese Anleitung zeigt alle Wege hinein und hinaus, was beim Planen erlaubt ist, die Freigabeoptionen, wie du ihn zum Standard machst und wie er sich im Vergleich zu Auto, Accept Edits und Manual schlägt.",
    cta: "Early Access anfragen",
    secondary: "Direkt zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "Plan Mode vs. Auto Mode vs. Accept Edits vs. Manual",
      text: [
        "Der Plan-Modus ist einer der Berechtigungsmodi von Claude Code. Jeder tauscht Bequemlichkeit gegen Kontrolle; die Tabelle zeigt, was Claude in welchem Modus ohne Rückfrage tun darf.",
      ],
      headers: ["Modus", "Läuft ohne Rückfrage", "Am besten für"],
      rows: [
        ["Manual (`default`)", "Nur Lesezugriffe", "Jede Aktion prüfen, sensible Arbeit"],
        ["Accept Edits (`acceptEdits`)", "Lesezugriffe, Dateiänderungen und gängige Dateibefehle wie `mkdir` und `mv`", "Iterieren an Code, den du danach mit `git diff` prüfst"],
        ["Plan (`plan`)", "Lesezugriffe plus Erkundungsbefehle, die der Classifier des Auto Mode freigibt, sofern Auto Mode verfügbar ist. Keine Änderungen, bevor du zustimmst", "Eine Codebasis erkunden und sich auf einen Ansatz einigen, bevor sie geändert wird"],
        ["Auto (`auto`)", "Alles, mit Sicherheitsprüfungen im Hintergrund", "Lange Aufgaben, weniger Rückfragen"],
        ["Don't ask (`dontAsk`)", "Nur vorab freigegebene Tools; alles andere wird abgelehnt", "Abgeschottete CI und Skripte"],
        ["Bypass (`bypassPermissions`)", "Alles", "Nur isolierte Container und VMs"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du den Plan Mode in Claude Code",
      steps: [
        {
          title: "In den Plan-Modus wechseln",
          text: "Drück im Terminal `Shift+Tab`, um durch die Modi zu schalten, bis die Statusleiste `⏸ plan mode on` zeigt; von Manual aus geht der Zyklus über Accept Edits zu Plan. Oder beginne einen einzelnen Prompt mit `/plan`. In VS Code klickst du auf die Modusanzeige unter dem Eingabefeld und wählst Plan; in der Desktop-App nutzt du die Modusauswahl.",
          code: enter,
        },
        {
          title: "Die Änderung beschreiben und Claude erkunden lassen",
          text: "Sag, was gebaut oder behoben werden soll. Claude liest den Code, führt Befehle zur Untersuchung aus und schreibt dann einen Plan. Ist Auto Mode (automatischer Modus) verfügbar, prüft ein Classifier diese Befehle, statt dich zu fragen; andernfalls fragt alles, was über die eingebauten Nur-Lese-Befehle hinausgeht, vorher nach.",
        },
        {
          title: "Den Plan prüfen und bearbeiten",
          text: "Beantworte Claudes Fragen, widersprich, oder drück `Ctrl+G`, um den Plan in deinem Texteditor zu öffnen und selbst zu ändern. Pläne werden als Dateien in `~/.claude/plans/` gespeichert, oder in dem Ordner, den die Einstellung `plansDirectory` festlegt.",
        },
        {
          title: "Freigeben oder weiterplanen",
          text: "Wähl Yes, and use auto mode (ja, und Auto Mode verwenden), oder Yes, auto-accept edits, wenn Auto Mode nicht verfügbar ist, damit Claude den Plan umsetzt; Yes, manually approve edits, um jede Änderung einzeln zu prüfen; oder No, keep planning, um weiterzuplanen. Mit der Freigabe verlässt Claude den Plan-Modus und benennt die Session nach dem Plan.",
        },
        {
          title: "Ohne Freigabe verlassen",
          text: "Drück erneut `Shift+Tab`, um den Plan-Modus ohne Plan zu verlassen. Für die nächste Änderung schaltest du wieder dorthin oder beginnst den Prompt mit `/plan`.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "Den Plan Mode zum Standard machen",
      text: [
        "Für eine Session startest du mit `claude --permission-mode plan`. Für jede Terminal-Session in einem Projekt setzt du `defaultMode` in `.claude/settings.json` auf `plan`; für alle Projekte auf deinem Rechner trägst du es in `~/.claude/settings.json` ein.",
      ],
      steps: [
        {
          title: "In die Einstellungen eintragen",
          text: "Unterhaltungen in VS Code lesen für den Startmodus keine Projekteinstellungen: Setz stattdessen `claudeCode.initialPermissionMode` in deinen VS-Code-Benutzereinstellungen auf `plan`.",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "Wann sich der Plan Mode lohnt",
      points: [
        "Änderungen, die viele Dateien berühren oder bei denen die erste Idee oft falsch ist: eine Migration, ein Refactoring, ein neues Feature über Frontend und Backend hinweg.",
        "Code, den du noch nicht kennst: Lass Claude ihn erfassen und den Ansatz erklären, bevor sich irgendetwas ändert.",
        "Teure Fehler: Datenbankschemas, Authentifizierung, Zahlungen, öffentliche APIs.",
        "Lass ihn weg bei Einzeiler-Fixes und Aufgaben, die du genauso beschreiben würdest wie der Plan; da sind Manual oder Accept Edits schneller.",
        "Kombinier ihn mit einem sauberen Kontext: Ist `showClearContextOnPlanAccept` aktiv, kann die Freigabe auch die Planungsunterhaltung leeren, sodass die Umsetzung allein vom Plan ausgeht.",
      ],
    },
    {
      kind: "text",
      title: "Stolperfallen",
      points: [
        "Der Plan-Modus blockiert Änderungen, nicht alles: Ist Auto Mode verfügbar, laufen freigegebene Shell-Befehle schon beim Planen, ein Befehl mit Nebenwirkungen kann also trotzdem ausgeführt werden.",
        "In einer interaktiven Terminal-Session, die mit verfügbaren Bypass Permissions gestartet wurde, werden die Sperren des Plan-Modus nicht durchgesetzt; Claude wird nur angewiesen, nichts zu ändern.",
        "Headless-Läufe (`claude -p`), Agent-SDK-Sessions und das Chat-Panel in VS Code behalten die Sperren des Plan-Modus.",
        "Plan in VS Code zu wählen gilt nur für diese Unterhaltung; neue Unterhaltungen starten wieder in deinem üblichen Modus.",
        "Deny-Regeln gelten in jedem Modus, auch im Plan-Modus. Zu `/plan`, `/permissions` und weiteren Befehlen siehe [Claude Code Slash-Commands](/blog/claude-code-slash-commands).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Der Plan Mode macht Claude vorsichtig. Crewmark hält es am Arbeiten.",
      text: [
        "Mit dem Plan-Modus behältst du bei einer großen Änderung das Steuer in der Hand; die Session wartet trotzdem darauf, dass du die nächste startest. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue vom Board übernimmt.",
      ],
      steps: [
        {
          title: "Pläne als Issue-Kommentare",
          text: "Ein Mitarbeiter kann seinen Plan im Issue posten und vor einer riskanten Änderung auf dein Okay warten, sodass du auf dem Board freigibst statt im Terminal.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und übernimmt das nächste Issue; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Mehrere Mitarbeiter, ein Repository",
          text: "Gib jedem seinen eigenen [Worktree](/blog/claude-code-worktree) und seine Rolle. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Den Plan Mode in Claude Code nutzen" },
  mid: {
    title: "Du hast den Plan freigegeben. Wer übernimmt die nächste Aufgabe?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zum Claude Code Plan Mode",
    items: [
      {
        q: "Was ist der Plan Mode in Claude Code?",
        a: "Ein Berechtigungsmodus, in dem Claude recherchiert und einen Plan schreibt, ohne deinen Code zu ändern. Änderungen bleiben gesperrt, bis du den Plan freigibst.",
      },
      {
        q: "Was ist der Shortcut für den Plan Mode?",
        a: "`Shift+Tab` schaltet im Terminal durch die Berechtigungsmodi; hör auf, wenn die Statusleiste `⏸ plan mode on` zeigt. Du kannst auch einen Prompt mit `/plan` beginnen oder mit `claude --permission-mode plan` starten.",
      },
      {
        q: "Plan Mode vs. Auto Mode: Was ist der Unterschied?",
        a: "Der Plan-Modus erkundet und schlägt vor, ohne zu ändern. Auto Mode erledigt die Arbeit, ändert Dateien und führt Befehle aus, mit Sicherheitsprüfungen im Hintergrund. Ein üblicher Ablauf: erst planen, dann mit Yes, and use auto mode freigeben.",
      },
      {
        q: "Plan Mode vs. Accept Edits?",
        a: "Mit Accept Edits ändert Claude Dateien ohne Rückfrage, und du prüfst danach. Der Plan-Modus ändert nichts, bis du einen Plan freigibst; nach der Freigabe kannst du wählen, Änderungen automatisch zu akzeptieren.",
      },
      {
        q: "Wie nutze ich den Plan Mode in VS Code oder der Desktop-App?",
        a: "Klick in VS Code auf die Modusanzeige unter dem Eingabefeld und wähl Plan, oder setz `claudeCode.initialPermissionMode` auf `plan`. In der Desktop-App wählst du ihn in der Modusauswahl.",
      },
      {
        q: "Wo speichert Claude Code Pläne?",
        a: "Als Dateien in `~/.claude/plans/`, sofern du mit der Einstellung `plansDirectory` keinen anderen Ordner festlegst. Drück `Ctrl+G`, um den aktuellen Plan in deinem Editor zu bearbeiten.",
      },
      {
        q: "Wie verlasse ich den Plan Mode?",
        a: "Gib den Plan frei, dann wechselt Claude in den Modus, den du wählst, oder drück `Shift+Tab`, um ohne Freigabe auszusteigen.",
      },
    ],
  },
  cta: {
    title: "Lass Claude Code planen, bauen und das nächste Issue übernehmen.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Berechtigungsmodi und Einstellungen) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
