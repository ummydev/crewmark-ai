import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code proaktiv: Heartbeat, /loop, Zeitplan | Crewmark",
    description:
      "So startet Claude Code Arbeit von selbst: Proactive output style, auto mode, /goal, /loop, geplante Aufgaben und ein Heartbeat für eine feste Aufgabe.",
  },
  breadcrumb: "Proaktives Claude Code",
  hero: {
    kicker: "Proaktives Claude Code",
    title: "So machst du Claude Code proaktiv",
    lead: "Ein proaktiver Claude-Code-Agent wartet nicht auf deine nächste Nachricht. Er trifft Routineentscheidungen selbst, macht weiter, bis die Aufgabe erledigt ist, wacht nach Zeitplan auf und reagiert, wenn etwas passiert. Für jedes davon hat Claude Code einen eingebauten Baustein. Diese Anleitung zeigt, wie du sie einschaltest, wo jeder an Grenzen stößt und wie du Claude Code eine feste Aufgabe statt eines einmaligen Prompts gibst. Der Baustein, der bei den eingebauten Funktionen fehlt, ist ein Heartbeat: dieselbe Session in einem festen Rhythmus wecken, damit sie ihre nächste Aufgabe übernimmt. Wir zeigen, wie du ihn von Hand einrichtest und wie Crewmark das für dich erledigt.",
    cta: "Early Access anfragen",
    secondary: "Direkt zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was „proaktiv“ bei Claude Code bedeutet",
      text: [
        "Standardmäßig ist Claude Code reaktiv: Du tippst, es arbeitet, es hält an und wartet. Damit es proaktiv wird, braucht es drei getrennte Dinge, und die meisten Anleitungen behandeln nur eines davon.",
      ],
      points: [
        "Es handelt, ohne bei jedem Schritt nachzufragen: ein Output Style und ein Berechtigungsmodus, die es Routineentscheidungen treffen lassen.",
        "Es beginnt Arbeit von selbst: eine Schleife, ein Zeitplan oder ein Ereignis, das einen Turn startet, ohne dass du tippst.",
        "Es weiß, woran es als Nächstes arbeiten soll: ein Ziel oder eine Warteschlange mit Arbeit, damit jeder Weckruf etwas Sinnvolles zu tun hat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Schritt für Schritt: Claude Code proaktiv machen",
      steps: [
        {
          title: "Schalte den Proactive output style ein",
          text: "Das meinen die meisten, wenn sie vom „Proactive Mode“ von Claude Code sprechen. Es ist kein Modus, sondern ein eingebauter Output Style: Claude beginnt mit der Umsetzung, sobald du ihm eine Aufgabe gibst, trifft bei Routineentscheidungen vernünftige Annahmen, statt zu fragen, und lässt die Planung weg, außer du bittest um einen Plan. Bevor es Daten löscht oder gemeinsam genutzte oder produktive Systeme anfasst, fragt es trotzdem nach, und an deinen Berechtigungsabfragen ändert es nichts. Du kannst ihn auch unter Output style in `/config` auswählen.",
          code: "/output-style Proactive",
        },
        {
          title: "Wähle einen Berechtigungsmodus für unbeaufsichtigte Arbeit",
          text: "Ein Agent, der bei jeder Berechtigungsabfrage anhält, ist nicht proaktiv. Der auto mode führt Aktionen mit Sicherheitsprüfungen im Hintergrund aus, statt zu fragen, und `acceptEdits` lässt Dateiänderungen durch, fragt bei anderen Befehlen aber weiterhin nach. `bypassPermissions`, das jede Prüfung überspringt, solltest du isolierten Containern und VMs vorbehalten.",
          code: "claude --permission-mode auto",
        },
        {
          title: "Lass es mit /goal weitermachen, bis die Aufgabe erledigt ist",
          text: "`/goal` nimmt eine Bedingung entgegen. Nach jedem Turn prüft ein kleines Modell, ob sie erfüllt ist, und falls nicht, startet Claude von selbst einen weiteren Turn. Ist das Ziel erreicht, wird es gelöscht. Formuliere eine Bedingung, die du selbst prüfen könntest, etwa dass eine Testsuite durchläuft.",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "Wiederhole Arbeit mit /loop, solange die Session offen ist",
          text: "`/loop` führt einen Prompt in einem Intervall aus oder lässt Claude nach jedem Lauf selbst die Pause wählen, wenn du das Intervall weglässt. Die Schleife lebt in der aktuellen Session: Die Session muss offen bleiben, wiederkehrende Schleifen laufen nach 7 Tagen ab, und Läufe, die verpasst wurden, während sie beschäftigt war, werden nicht nachgeholt.",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "Plane es für Zeiten, in denen du nicht am Rechner sitzt",
          text: "Desktop scheduled tasks starten nach Zeitplan eine neue Session auf deinem Computer, solange die Claude-Desktop-App offen und der Computer wach ist. Cloud scheduled tasks, angelegt mit `/schedule`, laufen in der Cloud von Anthropic, dein Computer kann also aus sein; sie laufen höchstens stündlich und brauchen ein Pro-, Max-, Ultra-, Team- oder Enterprise-Abo. Für Repositories kann die offizielle GitHub Action Claude Code nach einem Cron-Zeitplan ausführen.",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "Lass es von Ereignissen wecken",
          text: "Channels schieben Ereignisse in eine laufende Session: eine Nachricht aus Telegram, Discord oder iMessage, einen CI-Fehler oder einen Webhook, sodass Claude reagiert, ohne dass du das Terminal öffnest. Hooks führen deine eigenen Befehle an bestimmten Punkten im Lebenszyklus von Claude aus, etwa vor einem Tool-Aufruf oder am Ende eines Turns. Beides setzt voraus, dass die Session läuft.",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "Quelle: Dokumentation von Anthropic zu geplanten Aufgaben in Claude Code (Englisch)",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "Der fehlende Baustein",
      title: "Füge einen Heartbeat hinzu: dieselbe Session für die nächste Aufgabe wecken",
      text: [
        "Ein Heartbeat ist ein kurzer, regelmäßiger Anstoß in dieselbe Claude-Code-Unterhaltung, etwa alle 30 Minuten während der Arbeitszeit, der sagt: Prüf deine Arbeit, nimm die nächste Aufgabe. Anders als eine geplante Aufgabe, die jedes Mal eine neue Session mit demselben Prompt startet, hält ein Heartbeat eine einzige Unterhaltung am Laufen. Der Agent erinnert sich also, was er beim letzten Mal getan hat, und nimmt den nächsten Punkt aus einer Warteschlange. Das ist der Unterschied zwischen einem Job, der sich wiederholt, und einem Mitarbeiter, der weiterarbeitet.",
        "Claude Code hat keine Heartbeat-Einstellung, aber der Headless-Modus kann eine Session fortsetzen, du kannst ihn also von Hand einrichten.",
      ],
      steps: [
        {
          title: "Von Hand: cron plus claude -p --resume",
          text: "Starte eine Session, speichere ihre ID und lass cron sie in einem festen Rhythmus mit einem kurzen Heartbeat-Prompt fortsetzen. Halte die Warteschlange in einer Datei im Repo, etwa TODO.md. Das ist unser eigenes Beispiel aus dokumentierten Flags; die Dokumentation von Anthropic beschreibt kein Heartbeat-Setup.",
          code: "# Einmalig: Session starten und ihre ID speichern\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e: alle 30 Minuten, 9:00–17:30 Uhr an Werktagen\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "Was die Do-it-yourself-Variante nicht abdeckt",
          text: "Die Warteschlangen-Datei und die Cron-Zeiten verwaltest du selbst, nichts hält ihn außerhalb der Arbeitszeit an, sofern du sie nicht in cron festschreibst, ein Heartbeat, der feuert, während du die Session gerade nutzt, kommt dir in die Quere, und über mehrere Agenten hinweg siehst du nicht, was jeder gerade tut.",
        },
        {
          title: "Mit Crewmark: Heartbeat eingebaut",
          text: "Der Daemon von Crewmark schickt den Heartbeat während der Arbeitszeit alle 15, 30 oder 60 Minuten in die eigene Unterhaltung des Mitarbeiters und wartet, wenn der Agent beschäftigt ist. Das Board ist die Warteschlange: Bei jedem Heartbeat nimmt der Mitarbeiter sein nächstes Issue und berichtet darüber. Details findest du [weiter unten](#crewmark).",
        },
      ],
    },
    {
      kind: "table",
      title: "Welche Option passt",
      headers: ["Option", "Beginnt Arbeit von selbst", "Computer muss an sein", "Am besten für"],
      rows: [
        ["Proactive output style", "Nein, es handelt schneller, sobald du fragst", "Ja", "Weniger Rückfragen während einer Aufgabe"],
        ["/goal", "Ja, den nächsten Turn, bis die Bedingung erfüllt ist", "Ja", "Eine Aufgabe ohne Anstupsen abschließen"],
        ["/loop", "Ja, im Intervall, bis zu 7 Tage lang", "Ja, mit offener Session", "Ein Deployment, CI oder einen PR beobachten"],
        ["Desktop scheduled tasks", "Ja, nach Zeitplan", "Ja, wach und mit offener App", "Tägliche Jobs mit lokalen Dateien"],
        ["Cloud scheduled tasks", "Ja, höchstens stündlich", "Nein", "Jobs, die nur ein Repository brauchen"],
        ["GitHub Actions", "Ja, per Cron oder bei GitHub-Ereignissen", "Nein", "Repository-Pflege"],
        ["Channels", "Ja, wenn ein Ereignis eintrifft", "Ja, mit offener Session", "Auf Chat, CI und Webhooks reagieren"],
        ["Heartbeat von Hand (cron + `claude -p --resume`)", "Ja, in deinem Cron-Rhythmus, in derselben Session", "Ja", "Ein Agent, der eine TODO-Datei abarbeitet"],
        ["Crewmark-Heartbeat", "Ja, alle 15–60 Min. während der Arbeitszeit, in derselben Session", "Ja", "Agenten mit Backlog, Zielen und Arbeitszeiten"],
      ],
    },
    {
      kind: "text",
      title: "Was diese Funktionen dir weiterhin überlassen",
      text: [
        "Jede Funktion startet einen Turn. Keine entscheidet, woran der Agent diese Woche arbeiten soll. In der Praxis bleiben Lücken:",
      ],
      points: [
        "Ein Zeitplan wiederholt denselben Prompt. Er nimmt nicht die nächste Aufgabe aus einem Backlog und weiß nicht, was der Lauf von gestern erledigt hat.",
        "Es gibt kein Board, auf dem du Claude neue Arbeit gibst und siehst, was es gerade tut, was es erledigt hat und wo es feststeckt.",
        "Es gibt keine Arbeitszeiten und keine Zielwerte: Eine Schleife läuft, bis sie abläuft, nicht bis sich eine Zahl bewegt.",
        "Bei mehreren Agenten koordiniert sie nichts, also braucht jeder seine eigenen Prompts und Zeitpläne.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Claude Code eine feste Aufgabe",
      text: [
        "Crewmark macht aus einer Claude-Code-Unterhaltung einen KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat und gibt ihm Arbeit über ein Board. Er läuft in deinem echten Claude Code, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein und verbinde seine Unterhaltung",
          text: "Wähle eine Rolle, etwa SEO-Spezialist oder Softwareentwickler, und führe den Setup-Befehl, den Crewmark dir gibt, in Claude Code aus. Diese Unterhaltung wird zum Mitarbeiter und behält so ihr Gedächtnis an die Arbeit zwischen den Weckrufen.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Ein kleines Hintergrundprogramm auf deinem Computer, der Crewmark-Daemon, schickt den Heartbeat-Prompt des Mitarbeiters während seiner Arbeitszeit alle 15, 30 oder 60 Minuten in genau diese Unterhaltung und lässt ihn außerhalb davon in Ruhe. Ein Heartbeat, der eintrifft, während der Agent beschäftigt ist, wartet, bis er frei ist.",
        },
        {
          title: "Weise Issues auf dem Board zu",
          text: "Wenn du ein Issue zuweist oder kommentierst, kommt die Neuigkeit als Nachricht in der Unterhaltung des Agenten an. Ist die Unterhaltung geschlossen, setzt Crewmark sie mit `claude -p --resume` im auto mode fort, sodass die Arbeit trotzdem aufgenommen wird.",
        },
        {
          title: "Miss ihn an einer Zahl",
          text: "Gib jedem Mitarbeiter eine KPI, etwa Search-Console-Klicks pro Monat. Er plant seine Issues auf diese Zahl hin, schiebt sie über das Board, kommentiert seinen Fortschritt und schreibt dir, wenn er eine Entscheidung braucht.",
        },
      ],
    },
    {
      kind: "text",
      title: "Kombiniere sie",
      text: [
        "Die eingebauten Funktionen und Crewmark ergänzen sich. Schalte in der Unterhaltung des Mitarbeiters den Proactive output style und den auto mode ein, damit jeder Heartbeat echte Arbeit erledigt, nutze `/goal` in einem Issue mit klarem Ziel, und schau mit [Claude Code Remote Control](/remote-claude-code) vom Handy aus vorbei. Für einmalige Jobs, die ohne dich laufen, siehe [Claude Code als Hintergrund-Agent und im Headless-Modus ausführen](/blog/claude-code-background-agents). Du nutzt stattdessen Codex? Siehe [Codex proaktiv machen](/proactive-codex).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code proaktiv machen" },
  mid: {
    title: "Spar dir den Cronjob und die offene Session",
    text: "Crewmark weckt deine Claude-Code-Session während der Arbeitszeit im Heartbeat-Takt und gibt ihr das nächste Issue vom Board.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein Heartbeat für Claude Code?",
        a: "Ein regelmäßiger Anstoß in dieselbe Claude-Code-Unterhaltung, zum Beispiel alle 30 Minuten während der Arbeitszeit, der den Agenten anweist, seine Arbeit zu prüfen und die nächste Aufgabe zu übernehmen. Weil er eine Session fortsetzt, statt eine neue zu starten, erinnert sich der Agent an frühere Arbeit. Du kannst ihn mit cron und `claude -p --resume` einrichten; bei Crewmark ist er eingebaut, mit Arbeitszeiten und einem Board als Warteschlange.",
      },
      {
        q: "Hat Claude Code einen Proactive Mode?",
        a: "Nicht als Modus. Claude Code hat einen eingebauten Proactive output style, den du mit `/output-style Proactive` einschaltest. Damit handelt es bei Routineentscheidungen, statt zu fragen. An den Berechtigungsabfragen ändert er nichts; kombiniere ihn dafür mit dem auto mode.",
      },
      {
        q: "Wie führe ich Claude Code nach Zeitplan aus?",
        a: "Nutze `/loop`, solange eine Session offen ist, Desktop scheduled tasks für Jobs auf deinem Computer, `/schedule` für Cloud scheduled tasks, die bei ausgeschaltetem Computer laufen, oder die GitHub Action von Claude Code mit einem Cron-Trigger.",
      },
      {
        q: "Läuft /loop weiter, wenn ich Claude Code schließe?",
        a: "Nein. Eine Schleife gehört zu ihrer Session, sie endet also mit der Session, und wiederkehrende Schleifen laufen nach 7 Tagen ab. Für etwas, das die Session überdauert, nutze geplante Aufgaben oder einen Crewmark-Heartbeat.",
      },
      {
        q: "Kann Claude Code arbeiten, während mein Computer aus ist?",
        a: "Cloud scheduled tasks und GitHub Actions können das, weil sie auf fremden Rechnern laufen. Alles, was deine lokalen Dateien nutzt, darunter Desktop scheduled tasks, Channels und Crewmark, braucht einen eingeschalteten Computer.",
      },
      {
        q: "Ist es sicher, Claude Code unbeaufsichtigt laufen zu lassen?",
        a: "Nutze den auto mode statt `bypassPermissions`, gib ihm ein Repository, in dem jede Änderung durch ein Review geht, und halte Zugangsdaten für die Produktion außer Reichweite. Crewmark ergänzt Arbeitszeiten und ein Board, sodass du jede Änderung siehst, die er gemacht hat, und warum.",
      },
      {
        q: "Kostet Crewmark zusätzliche Tokens?",
        a: "Nein. Mitarbeiter laufen in deinem eigenen Claude Code mit dem Abo, das du schon hast. Es gibt also keine zweite Rechnung für Tokens.",
      },
    ],
  },
  cta: {
    title: "Mach Claude Code zu deinem ersten KI-Mitarbeiter",
    text: "Gib ihm eine Rolle, ein Ziel, Arbeitszeiten und einen Heartbeat und weise ihm dann sein erstes Issue zu.",
    button: "Early Access anfragen",
  },
  checked: "Am 2. November 2026 mit der Claude-Code-Dokumentation von Anthropic abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
