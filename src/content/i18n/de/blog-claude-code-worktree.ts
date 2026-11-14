import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# Zwei isolierte Sessions, jede in ihrem eigenen Terminal
claude --worktree feature-auth
claude --worktree fix-flaky-test

# Einen Worktree aus Pull Request 1234 abzweigen (das # in Anführungszeichen setzen)
claude --worktree "#1234"

# Worktrees aus git status heraushalten
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Worktree: --worktree, Workflow, Aufräumen",
    description:
      "So funktionieren Git Worktrees in Claude Code: claude --worktree, Speicherort, Basis-Branch, .worktreeinclude für .env-Dateien, Aufräumen, Subagents und die Einstellungen.",
  },
  breadcrumb: "Anleitung zu Claude Code Worktrees",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Worktrees: parallele Sessions ohne Konflikte beim Bearbeiten",
    lead: "Ein Claude Code Worktree ist ein separates Git-Arbeitsverzeichnis mit eigenen Dateien und eigenem Branch, das sich die History deines Repositorys teilt. Starte eine Session mit `claude --worktree <name>`, und Claude arbeitet dort statt in deinem Checkout. So können zwei oder drei Sessions gleichzeitig laufen, ohne sich gegenseitig in die Dateien zu pfuschen. Diese Anleitung behandelt das Flag, den Speicherort der Worktrees, den Branch, von dem sie starten, wie `.env`-Dateien hineinkommen, das Aufräumen, Subagents und die Einstellungen.",
    cta: "Loslegen",
    secondary: "Direkt zum Workflow",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code Worktrees erklärt",
      text: [
        "Git unterstützt Worktrees schon seit Jahren: `git worktree add` checkt einen Branch in ein zweites Verzeichnis aus, das auf denselben `.git`-Daten basiert. Darauf baut Claude Code auf. Mit `--worktree` (oder `-w`) legt es den Worktree für dich an, startet die Session darin, blockiert Änderungen, die in deinem Haupt-Checkout landen würden, und bietet beim Beenden an aufzuräumen.",
        "Worktrees isolieren Dateien, sonst nichts. Um eine Aufgabe innerhalb einer Unterhaltung auf mehrere Worker zu verteilen, nutze Subagents; einen Vergleich der Optionen findest du unter [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
      ],
      points: [
        "Standard-Speicherort: `.claude/worktrees/<name>/` im Root des Repositorys.",
        "Standard-Branchname: `worktree-<name>`. Lässt du den Namen weg, wählt Claude Code einen, etwa `bright-running-fox`.",
        "Geteilt mit deinem Checkout: das `.git`-Verzeichnis (Commits und Branches sind also überall sichtbar), Plugins mit Projekt-Scope und \"Nicht mehr fragen\"-Freigaben für Berechtigungen.",
        "Nicht geteilt: alles, was in der .gitignore steht, etwa `.env`, `node_modules` und Build-Ausgaben. Ein Worktree ist ein frischer Checkout.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Der Worktree-Workflow Schritt für Schritt",
      steps: [
        {
          title: "Ignoriere den Worktree-Ordner",
          text: "Füge `.claude/worktrees/` zur `.gitignore` hinzu, damit Worktree-Dateien in deinem Haupt-Checkout nicht als untracked auftauchen. Wenn du Claude in diesem Repository noch nie gestartet hast, führe zuerst einmal `claude` aus und bestätige die Vertrauensabfrage für den Workspace; vorher beenden sich interaktive `--worktree`-Starts sofort.",
        },
        {
          title: "Starte eine Session pro Aufgabe",
          text: "Führe `claude --worktree <name>` für jede Aufgabe in einem eigenen Terminal aus. Mit einem bereits vorhandenen Namen öffnet der Befehl diesen Worktree erneut, statt einen neuen anzulegen. Du kannst Claude auch mitten in der Session bitten, \"in einem Worktree zu arbeiten\", dann wechselt es mit dem Tool `EnterWorktree` selbst in einen.",
          code: start,
        },
        {
          title: "Nimm die untracked Dateien mit",
          text: "Liste ignorierte Dateien, die das Projekt braucht, etwa `.env` und `.env.local`, in einer `.worktreeinclude`-Datei im Root des Repositorys auf, in `.gitignore`-Syntax. Claude Code kopiert passende Dateien in jeden Worktree, den es anlegt, auch in die von Subagents und der Desktop-App. Installiere danach die Abhängigkeiten im Worktree oder richte ihn über die Einstellungen ein: Dieses Beispiel zweigt von deinem aktuellen Stand ab, nutzt ein einziges `node_modules` und checkt nur das Web-Package aus.",
          code: settings,
        },
        {
          title: "Lass die Sessions arbeiten",
          text: "Solange eine Session isoliert ist, verweigert Claude Code Dateiänderungen, die auf den Haupt-Checkout zielen, Befehle, deren Arbeitsverzeichnis der Haupt-Checkout ist, und Git-Befehle, die dorthin umgeleitet werden (`git -C`, `--git-dir`, `GIT_DIR`). Was ein einfacher Shell-Befehl wie `cp` schreibt, verfolgt es nicht; Berechtigungen und Sandboxing bleiben also wichtig.",
        },
        {
          title: "Reviewe und merge wie jeden anderen Branch",
          text: "Jeder Worktree ist ein ganz normaler Branch. Committe und pushe von dort aus, öffne einen Pull Request und reviewe ihn wie den eines Teamkollegen. Da alle Worktrees `.git` teilen, ist der Branch sofort auch in deinem Haupt-Checkout sichtbar.",
        },
        {
          title: "Beenden und aufräumen",
          text: "Beim Beenden prüft Claude Code den Worktree. Ein sauberer Worktree aus einer unbenannten Session wird samt Branch automatisch entfernt; bei einer benannten Session fragt es vorher. Gibt es Änderungen, untracked Dateien oder neue Commits, fragt es, ob der Worktree bleiben oder weg soll, und gibt einen Befehl `claude --worktree <name> --resume` aus, mit dem du später zurückkommst.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Worktree-Einstellungen in Claude Code",
      text: [
        "Alle gehören unter `worktree` in eine Einstellungsdatei (`~/.claude/settings.json`, `.claude/settings.json` oder `.claude/settings.local.json`).",
      ],
      headers: ["Einstellung", "Was sie bewirkt", "Standard"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` zweigt vom Standard-Branch des Remotes ab (`origin/main`); `\"head\"` zweigt von deinem lokalen HEAD ab, ungepushte Commits eingeschlossen", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "Verlinkt Verzeichnisse wie `node_modules` per Symlink aus dem Haupt-Checkout, statt sie zu duplizieren", "Keine"],
        ["`worktree.sparsePaths`", "Checkt per Sparse-Checkout nur die aufgeführten Verzeichnisse (plus Dateien im Root) aus; nimm `.claude` mit auf", "Ganzer Baum"],
        ["`worktree.bgIsolation`", "`\"worktree\"` lässt Hintergrund-Sessions nur innerhalb eines Worktrees ändern; `\"none\"` erlaubt Änderungen an der Arbeitskopie", "`\"worktree\"`"],
        ["Worktree-Speicherort (Desktop-App)", "Settings > Code legt einen eigenen Ordner für lokale Sessions fest; SSH-Verbindungen haben einen eigenen", "`.claude/worktrees/`"],
        ["`.worktreeinclude` (Datei, keine Einstellung)", "Kopiert passende ignorierte Dateien in jeden neuen Worktree", "Keine"],
      ],
    },
    {
      kind: "table",
      title: "Claude Code Worktree vs. Branch vs. git worktree",
      headers: ["", "Branch wechseln", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["Getrennte Dateien auf der Platte", "Nein: ein Verzeichnis, jeweils ein Branch", "Ja", "Ja"],
        ["Mehrere Sessions gleichzeitig", "Nein: sie überschreiben sich gegenseitig", "Ja", "Ja"],
        ["Speicherort", "Dein Checkout", "Wo immer du willst", "`.claude/worktrees/<name>/` oder der Pfad eines Hooks"],
        ["Startet von", "Dem Branch, zu dem du wechselst", "Jedem bestehenden oder neuen Branch", "`origin/<default>`, deinem HEAD oder einem PR"],
        ["Kopiert `.env`", "Nicht nötig", "Nein", "Ja, mit `.worktreeinclude`"],
        ["Änderungen außerhalb blockiert", "Nein", "Nein", "Ja"],
        ["Aufräumen", "Entfällt", "`git worktree remove`", "Wird beim Beenden angeboten"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "Von Hand mit git worktree",
      text: [
        "Nimm reines Git, wenn du einen bestimmten bestehenden Branch oder einen Ordner außerhalb des Repositorys willst; `worktree.baseRef` kann keinen Branch benennen. Plugins und Berechtigungsfreigaben teilt Claude Code auch mit diesen Worktrees.",
      ],
      steps: [
        {
          title: "Worktree anlegen, Claude starten, danach entfernen",
          text: "Ersetze `feature-a` durch einen neuen Branchnamen oder lass `-b` weg, um einen bereits vorhandenen Branch auszuchecken.",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "Subagents und Hintergrund-Sessions in Worktrees",
      points: [
        "Bitte Claude, \"für deine Agenten Worktrees zu verwenden\", oder ergänze `isolation: worktree` im Frontmatter eines eigenen Subagents in `.claude/agents/`; dann arbeitet jeder Subagent in seinem eigenen temporären Worktree.",
        "Der Worktree eines Subagents ohne Änderungen wird entfernt, sobald der Subagent fertig ist. Einer mit Änderungen bleibt, bis ein regelmäßiger Aufräumlauf ihn nach `cleanupPeriodDays` entfernen kann, ohne dass Arbeit verloren geht.",
        "Hintergrund-Sessions (`claude --bg`) ändern standardmäßig nur innerhalb eines Worktrees; starte eine mit `claude --bg --worktree` oder setze `worktree.bgIsolation` auf `\"none\"`.",
        "Schalte in der Desktop-App unter dem Eingabefeld Worktree ein, bevor du eine Session startest.",
      ],
    },
    {
      kind: "text",
      title: "Worktrees aufräumen und typische Probleme",
      points: [
        "Starts mit `claude -p --worktree` haben keine Abfrage beim Beenden und lassen ihre Worktrees deshalb liegen. Entferne sie mit `git worktree remove`, vorher mit `git worktree unlock`, falls Git sie als gesperrt meldet.",
        "`Can only use --worktree in a git repository`: Führe `git init` aus und lege einen ersten Commit an, oder richte einen `WorktreeCreate`-Hook für SVN, Perforce oder Mercurial ein.",
        "Git-LFS-Dateien erscheinen als Pointer-Dateien, wenn LFS mit `--local` installiert wurde: Führe `git lfs pull` im Worktree aus.",
        "Claude Code legt keinen Worktree an, wenn `.claude` oder `.claude/worktrees` ein Symlink ist.",
        "In Hooks zeigt `${CLAUDE_PROJECT_DIR}` weiter auf den Haupt-Checkout; den Worktree-Pfad liefert das Feld `cwd` der Hook-Eingabe.",
        "Ein Worktree mit Basis `\"fresh\"` ohne eigene Commits oder mit bereits gemergtem PR wird auf den Standard-Branch zurückgesetzt, wenn du ihn über seinen Namen erneut öffnest.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Worktrees halten Sessions auseinander. Crewmark hält sie beschäftigt.",
      text: [
        "Worktrees lösen das Kollisionsproblem, aber jede Session bleibt untätig, bis du etwas tippst. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt.",
      ],
      steps: [
        {
          title: "Ein Mitarbeiter pro Worktree",
          text: "Gib jedem Mitarbeiter einen eigenen Worktree und eine eigene Rolle, etwa einem Programmierer und einem Reviewer im selben Repository, wie bei [mehreren Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht jeder Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Weise Issues zu und reviewe Branches",
          text: "Lege Arbeit auf das Board; jeder Mitarbeiter übernimmt ein Issue, committet auf seinem eigenen Branch und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Parallele Claude-Code-Sessions in Git Worktrees ausführen" },
  mid: {
    title: "Drei Worktrees, drei Sessions. Wer sagt ihnen, was als Nächstes kommt?",
    text: "Crewmark weckt jede Claude-Code-Session per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code Worktrees",
    items: [
      {
        q: "Was ist ein Worktree in Claude Code?",
        a: "Ein separates Git-Arbeitsverzeichnis mit eigenen Dateien und eigenem Branch, das sich die History deines Repositorys teilt. `claude --worktree <name>` legt einen an und startet die Session darin, sodass parallele Sessions nicht dieselben Dateien bearbeiten.",
      },
      {
        q: "Wo legt Claude Code Worktrees ab?",
        a: "In `.claude/worktrees/<name>/` im Root des Repositorys, auf einem Branch namens `worktree-<name>`. In der Desktop-App kannst du unter Settings einen anderen Ordner wählen, und ein `WorktreeCreate`-Hook kann sie überall ablegen.",
      },
      {
        q: "Von welchem Branch startet ein Claude Code Worktree?",
        a: "Standardmäßig vom Standard-Branch des Remotes, meist `origin/main`. Setze `worktree.baseRef` auf `\"head\"`, um von deinem lokalen HEAD abzuzweigen, übergib `\"#1234\"`, um von einem Pull Request zu starten, oder lege den Worktree für jeden anderen Branch mit `git worktree add` an.",
      },
      {
        q: "Warum fehlt meine .env-Datei im Worktree?",
        a: "Ein Worktree ist ein frischer Checkout, deshalb fehlen von Git ignorierte Dateien. Liste sie in einer `.worktreeinclude`-Datei im Root des Repositorys auf, dann kopiert Claude Code sie in jeden neuen Worktree.",
      },
      {
        q: "Wie räume ich Claude Code Worktrees auf?",
        a: "Beim Beenden einer Session bietet Claude Code an, ihren Worktree zu entfernen, und entfernt saubere, unbenannte automatisch. Worktrees aus `-p`-Starts bleiben liegen: Liste sie mit `git worktree list` auf und entferne sie mit `git worktree remove`.",
      },
      {
        q: "Worktree oder Branch: Was ist der Unterschied?",
        a: "Ein Branch ist eine Folge von Commits; ein Worktree ist ein Verzeichnis, in dem ein Branch ausgecheckt ist. Ein Branch-Wechsel ändert die Dateien in deinem einen Verzeichnis, Worktrees geben dagegen jedem Branch ein eigenes Verzeichnis, sodass mehrere Sessions gleichzeitig laufen können.",
      },
      {
        q: "Können Subagents Worktrees nutzen?",
        a: "Ja. Bitte Claude, für seine Agenten Worktrees zu verwenden, oder ergänze `isolation: worktree` im Frontmatter eines eigenen Subagents. Jeder bekommt einen temporären Worktree, der entfernt wird, wenn er nichts ändert.",
      },
    ],
  },
  cta: {
    title: "Gib jedem Worktree einen Mitarbeiter, der weiß, was als Nächstes zu tun ist.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Worktrees, Einstellungen, CLI-Referenz und Desktop-App) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
