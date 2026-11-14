import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Ein GitHub-Issue anhand seiner Nummer beheben, mit Test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

Behebe dieses Issue nach unseren Konventionen in CLAUDE.md.
1. Schreib einen fehlschlagenden Test, der es reproduziert.
2. Nimm die kleinste Änderung vor, mit der er besteht.
3. Führe die Testsuite aus und fasse zusammen, was sich geändert hat.`;

const positional = `---
description: Eine Komponente von einem Framework in ein anderes migrieren
argument-hint: [component] [from] [to]
---

Migriere die Komponente $0 von $1 nach $2.
Erhalte jedes bestehende Verhalten und halte alle Tests grün.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Slash-Commands: Cheat Sheet und eigene Commands",
    description:
      "Ein Cheat Sheet der Claude Code Slash-Commands, die du kennen solltest, wie du eigene Slash-Commands mit Argumenten schreibst und wie Commands und Skills zusammenhängen.",
  },
  breadcrumb: "Claude Code Slash-Commands",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Slash-Commands: das Cheat Sheet und wie du eigene schreibst",
    lead: "Slash-Commands sind die Kürzel, die du am Anfang einer Nachricht in Claude Code tippst, etwa `/init`, `/compact` oder `/code-review`, um die Session zu steuern oder einen gespeicherten Prompt auszuführen. Diese Anleitung enthält ein Cheat Sheet der wichtigsten Commands, sortiert danach, wann du sie brauchst, und zeigt dann, wie du eigene Slash-Commands mit Argumenten anlegst und wie sie mit Skills zusammenhängen.",
    cta: "Loslegen",
    secondary: "Direkt zu eigenen Commands",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "So funktionieren Slash-Commands",
      text: [
        "Tippe in Claude Code `/`, um alle verfügbaren Commands zu sehen, und tippe weiter, um die Liste zu filtern. Ein Command zählt nur am Anfang einer Nachricht; alles nach seinem Namen wird zu seinen Argumenten.",
      ],
      points: [
        "Eingebaute Commands sind fest in die CLI programmiert, etwa `/clear`, `/model` und `/compact`.",
        "Mitgelieferte Skills kommen mit Claude Code und funktionieren wie Prompts, die an Claude übergeben werden, etwa `/simplify`, `/loop` und `/batch`.",
        "Eigene Commands sind die, die du selbst schreibst: Skills in `.claude/skills/` oder ältere Dateien in `.claude/commands/`. Plugins und MCP-Server können weitere hinzufügen.",
        "Schickst du einen Command, während Claude noch antwortet, läuft er nach dem aktuellen Turn; einige wenige, etwa `/status` und `/usage`, laufen sofort.",
        "Nicht jeder Command ist für alle sichtbar: Manche hängen von deiner Plattform, deinem Tarif oder den Richtlinien deiner Organisation ab.",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Cheat Sheet der Claude Code Slash-Commands",
      text: ["Die Commands, die die meisten nutzen, in der Reihenfolge, in der eine Session sie typischerweise braucht."],
      headers: ["Wann", "Command", "Was er macht"],
      rows: [
        ["Einrichtung", "`/init`", "Schreibt eine erste CLAUDE.md für das Projekt"],
        ["Einrichtung", "`/memory`", "Bearbeitet CLAUDE.md-Dateien und schaltet das automatische Gedächtnis ein oder aus"],
        ["Einrichtung", "`/mcp`", "Verwaltet Verbindungen zu MCP-Servern"],
        ["Einrichtung", "`/permissions`", "Verwaltet Allow-, Ask- und Deny-Regeln für Tools"],
        ["Einrichtung", "`/config`", "Öffnet die Einstellungen: Theme, Modell, Ausgabestil und mehr"],
        ["Während einer Aufgabe", "`/plan`", "Wechselt vor einer großen Änderung in den Plan-Modus"],
        ["Während einer Aufgabe", "`/model`, `/effort`", "Wechselt das Modell und legt fest, wie viel es nachdenkt"],
        ["Während einer Aufgabe", "`/context`", "Zeigt, was das Kontextfenster füllt"],
        ["Während einer Aufgabe", "`/compact [instructions]`", "Fasst die bisherige Unterhaltung zusammen, um Kontext freizugeben"],
        ["Während einer Aufgabe", "`/btw [question]`", "Stellt eine Nebenfrage, ohne sie der Unterhaltung hinzuzufügen"],
        ["Während einer Aufgabe", "`/goal`", "Setzt eine Bedingung, auf die Claude weiter hinarbeitet"],
        ["Parallel", "`/tasks`", "Listet die Hintergrundarbeit und Subagents der Session auf"],
        ["Parallel", "`/background`", "Löst die Session ab, damit sie als Hintergrund-Agent weiterläuft"],
        ["Parallel", "`/batch <instruction>`", "Teilt eine Änderung über die ganze Codebasis in Einheiten auf, jede in ihrem eigenen Worktree"],
        ["Parallel", "`/fork`", "Kopiert die Unterhaltung in eine neue Hintergrund-Session"],
        ["Vor dem Ausliefern", "`/diff`", "Zeigt die Änderungen in deinem Arbeitsverzeichnis"],
        ["Vor dem Ausliefern", "`/code-review`", "Prüft den aktuellen Diff oder einen PR auf Bugs; `/review` ist ein Alias"],
        ["Vor dem Ausliefern", "`/security-review`", "Prüft die Änderungen des Branches auf Sicherheitslücken"],
        ["Zwischen Sessions", "`/clear`", "Startet eine neue Unterhaltung mit leerem Kontext"],
        ["Zwischen Sessions", "`/resume`, `/rename`", "Kehrt zu einer früheren Unterhaltung zurück; benennt die aktuelle"],
        ["Zwischen Sessions", "`/branch`, `/rewind`", "Verzweigt die Unterhaltung; setzt Code und Unterhaltung auf einen Checkpoint zurück"],
        ["Automatisierung", "`/loop [interval] [prompt]`", "Wiederholt einen Prompt, solange die Session offen bleibt"],
        ["Automatisierung", "`/schedule`", "Legt geplante Aufgaben in der Cloud an und verwaltet sie"],
        ["Wenn es hakt", "`/doctor`, `/debug`", "Diagnostiziert Probleme mit dem Setup; liest das Debug-Log der Session"],
        ["Wenn es hakt", "`/usage`, `/status`", "Zeigt Kosten und Tariflimits (`/cost` und `/stats` sind Aliasse); zeigt Version, Modell und Konto"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So legst du einen eigenen Slash-Command an",
      text: [
        "Eigene Commands sind in Skills aufgegangen. Eine Datei `.claude/commands/fix-issue.md` und ein Skill `.claude/skills/fix-issue/SKILL.md` erzeugen beide `/fix-issue` und funktionieren gleich; für neue Commands ist das Skill-Format vorzuziehen, weil es zusätzliche Dateien aufnehmen kann.",
      ],
      steps: [
        {
          title: "Lege den Ordner und die SKILL.md an",
          text: "Für einen Command, den das ganze Team bekommt, lege `.claude/skills/<name>/SKILL.md` im Repository an und committe ihn. Für einen, den nur du in allen Projekten nutzt, lege ihn in `~/.claude/skills/<name>/SKILL.md` ab. Der Ordnername wird zum Command: `fix-issue` ergibt `/fix-issue`.",
        },
        {
          title: "Schreib das Frontmatter",
          text: "Füge zwischen zwei `---`-Zeilen eine `description` hinzu (daran entscheidet Claude, wann der Skill passt), `argument-hint`, um erwartete Argumente im Menü anzuzeigen, `disable-model-invocation: true`, wenn nur du ihn auslösen sollst (bei allem mit Nebenwirkungen, etwa Deploys), und `allowed-tools`, um Tools für diesen Turn vorab freizugeben.",
        },
        {
          title: "Schreib den Prompt, mit Argumenten",
          text: "Schreib unter dem Frontmatter die Anweisungen in Markdown. `$ARGUMENTS` wird durch alles ersetzt, was nach dem Command getippt wurde; `$0`, `$1` und so weiter (oder `$ARGUMENTS[0]`) greifen einzelne Argumente heraus. Eine Zeile mit `` !`command` `` führt zuerst diesen Shell-Befehl aus und fügt seine Ausgabe in den Prompt ein.",
          code: skill,
        },
        {
          title: "Führ ihn aus",
          text: "Tippe `/fix-issue 123`. Skills, die du während einer Session hinzufügst oder änderst, laden von selbst; taucht einer nicht auf, führe `/reload-skills` aus. Ohne `disable-model-invocation` kann Claude den Skill auch selbst ausführen, wenn deine Anfrage zu seiner Beschreibung passt.",
        },
        {
          title: "Nutze Positionsargumente für mehrteilige Commands",
          text: "`/migrate-component SearchBar React Vue` füllt der Reihe nach `$0`, `$1` und `$2`.",
          code: positional,
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Commands und Skills", href: commands },
    },
    {
      kind: "table",
      title: "Wo eigene Slash-Commands liegen",
      headers: ["Ort", "Pfad", "Command-Name"],
      rows: [
        ["Persönlich", "`~/.claude/skills/<name>/SKILL.md`", "`/<name>` in all deinen Projekten"],
        ["Projekt", "`.claude/skills/<name>/SKILL.md`", "`/<name>` für alle im Repository"],
        ["Ältere Command-Datei", "`.claude/commands/<name>.md`", "`/<name>`; ein Unterordner fügt ein Präfix hinzu, z. B. `commands/frontend/component.md` → `/frontend:component`"],
        ["Plugin", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["MCP-Server", "Vom Server bereitgestellte Prompts", "Im `/`-Menü aufgeführt"],
      ],
    },
    {
      kind: "table",
      title: "Slash-Commands vs. Skills",
      text: [
        "Seit der Zusammenlegung lautet die Frage weniger \"welches von beiden\" als \"welches Dateiformat\". Haben ein Skill und eine Command-Datei denselben Namen, gewinnt der Skill.",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["Erzeugt `/<name>`", "Ja", "Ja"],
        ["Frontmatter", "Dieselben Felder, außer `name` und `paths`", "Alle Felder"],
        ["Zusätzliche Dateien (Skripte, Vorlagen)", "Nein", "Ja, im Ordner des Skills"],
        ["Claude kann ihn selbst laden", "Ja, außer bei `disable-model-invocation: true`", "Ja, außer bei `disable-model-invocation: true`"],
        ["Status", "Funktioniert weiterhin", "Empfohlen für Neues"],
      ],
    },
    {
      kind: "text",
      title: "Tipps und Stolperfallen",
      points: [
        "Am Terminal-Prompt kannst du Skills stapeln: `/write-tests /fix-issue 123` lädt beide und übergibt `123` an jeden, bis zu sechs. In `claude -p` und im Agent SDK lädt nur der erste.",
        "Eingebaute Commands, an die du dich erinnerst, gibt es vielleicht nicht mehr: `/pr-comments`, `/vim` und `/ultraplan` wurden entfernt. Sieh in `/help` oder in der Dokumentation nach.",
        "`allowed-tools` gibt Berechtigungen nur für den Turn frei, der den Skill aufruft, und Skills in einem Repository können sich selbst Tools freigeben. Lies sie also, bevor du Claude Code in einem fremden Repository startest.",
        "Die Beschreibung jedes Skills steht im Kontext; `/skill-doctor` zeigt, was jeder kostet und wie oft er genutzt wird. Lange Abläufe gehören in Skills, nicht in die [CLAUDE.md](/blog/claude-md).",
        "`/loop` wiederholt einen Prompt nur, solange deine Session offen ist. Damit Arbeit von selbst startet, siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Slash-Commands machen dich schneller. Crewmark lässt Claude Code ohne dich loslegen.",
      text: [
        "Jeder Slash-Command braucht weiterhin dich an der Tastatur, um ihn zu tippen. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt, mit denselben Skills und Commands, die du eingerichtet hast.",
      ],
      steps: [
        {
          title: "Behalte deine Skills im Repository",
          text: "Deine `.claude/skills/` und die CLAUDE.md laden in der Session des Mitarbeiters genau wie in deiner, `/fix-issue` und deine Konventionen kommen also mit.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und übernimmt das nächste Issue. Mehrere können sich ein Repository teilen, jeder in seinem eigenen [Worktree](/blog/claude-code-worktree).",
        },
        {
          title: "Weise Issues zu und beantworte seine Nachrichten",
          text: "Lege Arbeit auf das Board; der Mitarbeiter kommentiert laufend und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen eigenen Slash-Command in Claude Code anlegen" },
  mid: {
    title: "Das Tippen hast du automatisiert. Wer entscheidet, was als Nächstes getippt wird?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code Slash-Commands",
    items: [
      {
        q: "Wie sehe ich alle Slash-Commands von Claude Code?",
        a: "Tippe `/` am Anfang einer Nachricht, um das Menü zu öffnen, und tippe weiter, um es zu filtern. Auch `/help` und `/skills` listen sie auf, und die Seite Commands in der Claude-Code-Dokumentation enthält die vollständige Referenz.",
      },
      {
        q: "Wie lege ich einen eigenen Slash-Command in Claude Code an?",
        a: "Lege `.claude/skills/<name>/SKILL.md` an (oder `~/.claude/skills/<name>/SKILL.md` für alle Projekte), mit einem kurzen Frontmatter und deinem Prompt. Daraus wird `/<name>`. Eine ältere Datei `.claude/commands/<name>.md` funktioniert ebenfalls.",
      },
      {
        q: "Wie übergebe ich Argumente an einen Slash-Command?",
        a: "Tippe sie nach dem Command-Namen. Im Prompt enthält `$ARGUMENTS` alles, was du getippt hast, und `$0`, `$1` und so weiter enthalten einzelne Argumente. Ergänze `argument-hint` im Frontmatter, um anzuzeigen, was erwartet wird.",
      },
      {
        q: "Was ist der Unterschied zwischen Slash-Commands und Skills?",
        a: "Eigene Slash-Commands sind in Skills aufgegangen: Beide erzeugen ein `/name` und funktionieren gleich. Skills bringen einen Ordner für zusätzliche Dateien mit und sind das empfohlene Format; Command-Dateien in `.claude/commands/` funktionieren weiterhin.",
      },
      {
        q: "Sind Slash-Commands veraltet?",
        a: "Nein. Mit `/name` führst du jeden Command und jeden Skill aus. Geändert hat sich das Dateiformat für eigene: `.claude/commands/` funktioniert noch, aber Skills sind vorzuziehen. Einzelne eingebaute Commands wurden entfernt.",
      },
      {
        q: "Kann Claude meinen Slash-Command selbst ausführen?",
        a: "Ja, wenn deine Anfrage zur Beschreibung des Skills passt. Ergänze `disable-model-invocation: true` im Frontmatter, damit er nur läuft, wenn du ihn tippst.",
      },
      {
        q: "Funktionieren Slash-Commands im Headless-Modus?",
        a: "Eigene Skills schon: `claude -p \"/fix-issue 123\"` führt einen aus, weil `-p` Skills und eigene Commands wie eine interaktive Session lädt. Nur der erste Skill in der Nachricht wird geladen, und `--bare` überspringt die Skill-Erkennung komplett.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Claude Code Skills einen Mitarbeiter, der sie ausführt.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Commands und Skills) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
