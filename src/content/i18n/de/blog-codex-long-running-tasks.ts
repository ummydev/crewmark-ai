import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# Interaktiv: das Ergebnis planen, dann Codex ein Ziel geben, das es selbst prüft
/plan
/goal all tests in test/auth pass and the lint step is clean

# Headless, aus einem Skript oder Cron: Dateien im Workspace bearbeiten lassen
codex exec --sandbox workspace-write "Work through TODO.md in order"

# Am nächsten Morgen oder beim nächsten Cron-Lauf: dieselbe Session fortsetzen
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Lang laufende Aufgaben in Codex: Codex über Nacht laufen lassen",
    description:
      "Wie du OpenAI Codex stunden- oder nächtelang arbeiten lässt: /goal und /plan, Cloud-Tasks, codex exec resume, den Mac wach halten, vom Handy aus reinschauen, Nutzungslimits und was es stoppt.",
  },
  breadcrumb: "Lang laufende Aufgaben in Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Lang laufende Aufgaben in Codex: Codex über Nacht oder im Hintergrund laufen lassen",
    lead: "Codex kann stundenlang an einer Aufgabe arbeiten und auch weitermachen, während du schläfst, wenn vier Dinge geregelt sind: ein Ziel, das es selbst prüfen kann, ein Computer, der wach bleibt (oder eine Aufgabe in der Cloud), Freigaben, die nicht auf dich warten, und genug Spielraum in deinem Plan. Dieser Guide zeigt die Wege, lange Codex-Aufgaben laufen zu lassen, vom Goal-Mode über Cloud-Tasks bis zu `codex exec resume`, was jeder davon nicht kann und wie du Codex eine feste Nachtschicht gibst.",
    cta: "Loslegen",
    secondary: "Über Nacht laufen lassen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Wege, Codex am Laufen zu halten",
      text: [
        "Manche führen einen Chat weiter, sodass Codex seinen Kontext behält; andere fangen jedes Mal neu an.",
      ],
      headers: ["Option", "Computer darf schlafen", "Derselbe Chat", "Wann es stoppt", "Ideal für"],
      rows: [
        ["Goal-Mode (`/goal`)", "Nein, bei lokaler Arbeit", "Ja", "Wenn das Ziel erreicht ist oder es eine Entscheidung braucht", "Eine Aufgabe mit klarem Ziel"],
        ["Codex-Cloud-Task", "Ja", "Ja", "Wenn die Aufgabe erledigt ist; du prüfst und öffnest einen Pull Request", "Eine Aufgabe vor dem Schlafengehen abgeben"],
        ["Geplante Aufgabe in einem Chat", "Nein, bei lokalen Dateien: Computer an, App läuft", "Ja", "Läuft nach Zeitplan: minütlich, täglich oder wöchentlich", "In Abständen nach derselben Arbeit sehen"],
        ["`codex exec` per Cron", "Nein", "Ja, mit `codex exec resume`", "Dein Cron-Rhythmus; du verdrahtest es selbst", "Skripte und CI"],
        ["Crewmark-Heartbeat", "Nein", "Ja", "Arbeitszeiten, die du festlegst, auch über Mitternacht hinaus", "Ein fester Job vom Board, Issue für Issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So lässt du Codex über Nacht laufen",
      steps: [
        {
          title: "Gib ihm ein Ziel, das es prüfen kann",
          text: "In der Desktop-App, der CLI oder der IDE-Erweiterung startet `/goal` den Goal-Mode: Der Zieltext ist zugleich der erste Prompt und das Abbruchkriterium. Wenn du nicht sicher bist, wie „fertig“ aussieht, stellt dir `/plan` Fragen und macht aus dem Ergebnis ein Ziel mit messbaren Kriterien. Bau eine Prüfung ein, etwa eine Testsuite, die durchlaufen muss.",
          code: commands,
        },
        {
          title: "Halt den Computer wach oder schick es in die Cloud",
          text: "Für lokale Arbeit auf einem Mac schalte in der Desktop-App „Prevent sleep while running“ ein. Ein Codex-Cloud-Task läuft in einem eigenen Workspace und arbeitet weiter, während dein Computer schläft; du startest einen, indem du Work in > Cloud und eine Umgebung wählst.",
        },
        {
          title: "Stell Freigaben so ein, dass es nicht um 2 Uhr nachts stoppt",
          text: "Ein Ziel behält dieselbe Sandbox und Freigaberichtlinie und pausiert, wenn es eine Entscheidung braucht. Lass es mit `--sandbox workspace-write` den Workspace bearbeiten, oder nutz „Approve for me“, damit ein Reviewer Routineanfragen übernimmt. `--full-auto` wird nicht mehr unterstützt, und `danger-full-access` gehört nur in einen isolierten Runner oder Container.",
        },
        {
          title: "Plan die Nutzungslimits ein",
          text: "Codex teilt sich das Kontingent deines ChatGPT-Plans: ein rollierendes 5-Stunden-Fenster plus Wochenlimits, und Cloud-Tasks ziehen aus demselben Topf. ChatGPT Pro hat derzeit kein 5-Stunden-Limit; Wochenlimits können gelten. Mit Credits oder einem API-Key läuft lokale Arbeit weiter. Die Zahlen findest du unter [Claude Code vs. Codex](/blog/claude-code-vs-codex).",
        },
        {
          title: "Schau vom Handy aus rein",
          text: "In der ChatGPT-App kannst du eine Aufgabe verfolgen, Befehle genehmigen und Diffs prüfen, bei Cloud-Tasks und bei einem Mac oder Windows-PC, den du unter Settings > Connections verbunden hast. Der verbundene Computer muss wach und online bleiben. Siehe [Codex Remote Control](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku zu Long-running work", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Was eine lange Codex-Aufgabe stoppt",
      points: [
        "Eine Entscheidung, die nur du treffen kannst. Der Goal-Mode pausiert, statt seinen eigenen Zugriff zu erweitern, prüf die Freigaben also, bevor du gehst.",
        "Ruhezustand oder eine verlorene Verbindung bei lokaler Arbeit. OpenAI empfiehlt, das Ziel zu pausieren, bevor du einen Verbindungsverlust erwartest, und es später fortzusetzen.",
        "Das Nutzungslimit, bis das Fenster zurückgesetzt wird oder du Credits nachlegst.",
        "Zwei Chats, die dieselben Dateien bearbeiten. Gib parallelen Chats eigene Git-Worktrees.",
        "Keine Arbeit mehr. Sobald das Ziel erreicht ist, hört es auf, und genau das willst du; für eine Liste von Aufgaben leg sie in eine Datei, die es abarbeitet.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Codex eine Nachtschicht",
      text: [
        "Eine lange Aufgabe endet; ein Job nicht. Crewmark macht aus einem Codex-Gespräch einen KI-Mitarbeiter mit Arbeitszeiten und Heartbeat, der sich immer wieder das nächste Issue vom Board nimmt, ohne dass du es einreihen musst.",
      ],
      steps: [
        {
          title: "Leg die Arbeitszeiten fest",
          text: "Arbeitszeiten können über Mitternacht gehen, eine Nachtschicht von 22:00 bis 07:00 funktioniert also, nur werktags oder jeden Tag. Außerhalb seiner Zeiten schläft der Mitarbeiter und rührt deinen Plan nicht an.",
        },
        {
          title: "Wähl den Heartbeat",
          text: "Alle 15, 30, 60, 120 oder 240 Minuten während seiner Schicht stellt die crewmark CLI mit `codex queue --resume` eine Nachricht in dasselbe Codex-Gespräch und startet es, damit der Mitarbeiter sein nächstes Issue aufnimmt. Dein Computer muss an bleiben.",
        },
        {
          title: "Lies morgens das Board",
          text: "Jedes Issue hat seine Kommentare und sein Aktivitätsprotokoll, und alles, was dich braucht, kommt als Nachricht, auf die der Mitarbeiter wartet. Siehe, [wie du Codex proaktiv machst](/proactive-codex), und lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex über Nacht laufen lassen" },
  mid: {
    title: "Soll Codex jede Nacht die Nachtschicht übernehmen?",
    text: "Crewmark weckt dein Codex während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu lang laufenden Aufgaben in Codex",
    items: [
      {
        q: "Kann Codex über Nacht laufen?",
        a: "Ja. Gib ihm mit `/goal` ein Ziel, halt den Mac mit „Prevent sleep while running“ wach (oder nutz einen Codex-Cloud-Task, der weiterarbeitet, während dein Computer schläft), stell die Freigaben so ein, dass es nicht auf dich wartet, und prüf das Ergebnis am Morgen.",
      },
      {
        q: "Wie lasse ich Codex im Hintergrund laufen?",
        a: "Führ `codex exec` ohne die interaktive Oberfläche aus, aus einem Skript, per Cron oder in CI, und setz dieselbe Session später mit `codex exec resume --last` fort. Oder starte einen Codex-Cloud-Task aus der Web- oder Desktop-App und schließ das Fenster.",
      },
      {
        q: "Was ist der Goal-Mode in Codex?",
        a: "Der Goal-Mode, gestartet mit `/goal`, lässt Codex auf ein Ziel hinarbeiten, das du formulierst; der Zieltext ist zugleich der erste Prompt und das Abschlusskriterium. Du kannst es in der Desktop-App über die Fortschrittszeile pausieren, fortsetzen, bearbeiten oder löschen.",
      },
      {
        q: "Arbeitet Codex weiter, wenn mein Computer schläft?",
        a: "Cloud-Tasks schon. Lokale Arbeit braucht einen wachen Computer, was auf einem Mac die Einstellung „Prevent sleep while running“ der Desktop-App übernimmt; auch ein verbundener Computer, den du vom Handy aus steuerst, muss wach und online bleiben.",
      },
      {
        q: "Stößt ein langer Codex-Lauf an mein Nutzungslimit?",
        a: "Das kann passieren. Codex nutzt das 5-Stunden-Fenster und die Wochenlimits deines ChatGPT-Plans, und Cloud-Tasks ziehen aus demselben Kontingent. Verteil die Arbeit mit einem Zeitplan oder Heartbeat über mehrere Fenster statt in einem langen Schub.",
      },
      {
        q: "Ist es sicher, Codex unbeaufsichtigt laufen zu lassen?",
        a: "Bleib auf deinem eigenen Rechner bei `--sandbox workspace-write` oder „Approve for me“, nutz `danger-full-access` nur in einem isolierten Runner oder Container und arbeite in einem Repository, in dem Änderungen durch ein Review gehen.",
      },
    ],
  },
  cta: {
    title: "Gib Codex eine Nachtschicht.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand von OpenAIs Codex-Doku (Long-running work, Codex Cloud, Non-interactive mode, Mobile, Scheduled tasks) am 8. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI verbunden oder von OpenAI unterstützt. Codex und ChatGPT sind Marken von OpenAI.",
};
