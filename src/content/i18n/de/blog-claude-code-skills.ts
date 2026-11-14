import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Fasst nicht committete Änderungen zusammen und markiert alles Riskante. Verwenden, wenn der Nutzer fragt, was sich geändert hat, eine Commit-Nachricht möchte oder seinen Diff prüfen lassen will.
---

## Aktuelle Änderungen

!\`git diff HEAD\`

## Anweisungen

Fasse die Änderungen oben in zwei oder drei Stichpunkten zusammen und liste dann
Risiken auf, etwa fehlende Fehlerbehandlung, hartkodierte Werte oder anzupassende Tests.`;

const reference = `---
description: API-Design-Konventionen dieser Codebasis. Verwenden beim Schreiben oder Prüfen von HTTP-Endpoints.
paths: ["src/api/**"]
---

Beim Schreiben von API-Endpoints:
- Verwende REST-konforme Namen und Ressourcen im Plural
- Gib Fehler als { error: { code, message } } zurück
- Validiere den Request-Body mit den Schemas in src/api/schemas/`;

const layout = `release/
├── SKILL.md          # die Schritte, und wann die anderen Dateien zu lesen sind
├── checklist.md      # wird nur geladen, wenn SKILL.md Claude darauf verweist
└── scripts/
    └── bump.sh       # wird ausgeführt, nicht in den Kontext gelesen`;

const fork = `---
description: Abhängigkeiten auf bekannte Sicherheitslücken und veraltete Major-Versionen prüfen
context: fork
agent: Explore
disable-model-invocation: true
---

Führe das Audit des Paketmanagers aus, liste jeden Befund mit Schweregrad hoch oder
kritisch samt Fix-Version auf und berichte, welche Major-Versionen hinterherhinken. Ändere keine Dateien.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Skills: anlegen, Beispiele und Best Practices",
    description:
      "Was Claude Code Skills sind, wie sie laden, wie du einen mit SKILL.md anlegst, Beispiele, zusätzliche Dateien, Skills als Subagent, Skills aus Plugins installieren und Best Practices.",
  },
  breadcrumb: "Anleitung zu Claude Code Skills",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Skills: So legst du sie an, mit Beispielen und Best Practices",
    lead: "Ein Claude Code Skill ist ein Ordner mit einer `SKILL.md`-Datei: einer Beschreibung, wann er zum Einsatz kommt, und den Anweisungen, die zu befolgen sind. Claude sieht nur die Beschreibungen, bis ein Skill gebraucht wird, und lädt ihn dann vollständig. So kannst du lange Abläufe und Referenzmaterial griffbereit halten, ohne bei jeder Nachricht dafür zu zahlen. Diese Anleitung zeigt, wie Skills laden, wie du deinen ersten schreibst, dazu Beispiele, zusätzliche Dateien, Skills als Subagent, die Installation von Skills aus Plugins und wie du Claude dazu bringst, sie tatsächlich zu nutzen.",
    cta: "Loslegen",
    secondary: "Ersten Skill anlegen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Code Skills sind",
      text: [
        "Leg einen Skill an, wenn du immer wieder dieselben Anweisungen, dieselbe Checkliste oder denselben mehrstufigen Ablauf in den Chat kopierst, oder wenn ein Teil deiner CLAUDE.md von einer Tatsache zu einem Ablauf gewachsen ist. Skills folgen dem offenen Standard Agent Skills (agentskills.io), den auch andere KI-Tools lesen; Claude Code ergänzt Extras wie die Steuerung des Aufrufs, Ausführung als Subagent und Live-Shell-Ausgabe im Prompt.",
      ],
      points: [
        "Zwei Wege, einen auszuführen: Claude lädt ihn, wenn deine Anfrage zu seiner `description` passt, oder du tippst `/skill-name`.",
        "Günstig, bis er gebraucht wird: Nur Name und Beschreibung stehen im Kontext; der Inhalt lädt erst, wenn der Skill läuft. Ein Skill, der nur von Hand gestartet werden darf, listet seine Beschreibung gar nicht erst auf.",
        "Eigene Slash-Commands sind jetzt Skills: `.claude/commands/<name>.md` funktioniert weiterhin, aber ein Skill-Ordner kann zusätzlich weitere Dateien enthalten. Siehe [Claude Code Slash-Commands](/blog/claude-code-slash-commands).",
        "Claude Code bringt auch mitgelieferte Skills mit, etwa `/simplify`, `/loop`, `/batch` und `/debug`.",
      ],
    },
    {
      kind: "table",
      title: "Skills vs. CLAUDE.md vs. Subagents vs. Plugins vs. MCP",
      headers: ["", "Was es ist", "Geladen", "Wofür"],
      rows: [
        ["CLAUDE.md", "Projektanweisungen", "In jeder Session, vollständig", "Fakten und Konventionen, die Claude immer braucht; siehe die [Anleitung zur CLAUDE.md](/blog/claude-md)"],
        ["Skill", "Ein Ordner mit `SKILL.md`", "Beschreibung immer; Inhalt bei Bedarf", "Abläufe, Checklisten, Referenzmaterial, wiederverwendbare Prompts"],
        ["Subagent", "Ein separater Agent mit eigenem Kontext", "Wenn Claude delegiert", "Nebenaufgaben, deren Details deine Unterhaltung nicht füllen sollen"],
        ["Plugin", "Ein Paket aus Skills, Agents, Hooks und MCP-Servern", "Wenn installiert und aktiviert", "Skills mit einem Team teilen oder die anderer installieren"],
        ["MCP-Server", "Eine Verbindung zu einem externen Tool oder einer Datenquelle", "Wenn verbunden", "Claude neue Tools geben, etwa eine Datenbank oder einen Issue-Tracker"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So legst du einen Claude Code Skill an",
      steps: [
        {
          title: "Wähle, wo er liegt",
          text: "`~/.claude/skills/<name>/` für dich selbst in allen Projekten; `.claude/skills/<name>/` in einem Repository, committet, für alle, die dort arbeiten. Der Ordnername wird zum Command: `summarize-changes` ergibt `/summarize-changes`.",
        },
        {
          title: "Schreib die SKILL.md: eine Beschreibung, dann die Anweisungen",
          text: "Das Frontmatter steht zwischen zwei `---`-Zeilen ganz oben. Empfohlen ist nur `description`: Stell den Anwendungsfall und die Worte, die man tatsächlich sagen würde, an den Anfang. Darunter schreibst du die Anweisungen in Markdown. Eine Zeile, die mit `` !`command` `` beginnt, führt zuerst diesen Befehl aus und fügt seine Ausgabe ein, sodass der Skill von deinem echten Stand ausgeht.",
          code: first,
        },
        {
          title: "Teste beide Wege",
          text: "Starte `claude` in einem Git-Projekt mit einer nicht committeten Änderung. Frag \"Was habe ich geändert?\", um zu sehen, ob Claude den Skill von selbst aufgreift, und tippe dann `/summarize-changes`, um ihn direkt auszuführen. Skills, die du während einer Session hinzufügst, laden von selbst; führe `/reload-skills` aus, wenn einer nicht auftaucht.",
        },
        {
          title: "Leg fest, wer ihn ausführen darf",
          text: "Ergänze `disable-model-invocation: true` bei allem mit Nebenwirkungen, etwa Deploys oder dem Versenden von Nachrichten, damit nur du ihn starten kannst. Ergänze `user-invocable: false` für Hintergrundwissen, das nur Claude laden soll. Eingaben übergibst du mit `$ARGUMENTS`, wie in der Anleitung zu Slash-Commands gezeigt.",
        },
        {
          title: "Teile ihn",
          text: "Committe `.claude/skills/` ins Repository oder pack Skills als Plugin für mehrere Repositories oder Teams.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Beispiele für Claude Code Skills",
      steps: [
        {
          title: "Ein Referenz-Skill, der nur für passende Dateien lädt",
          text: "Referenz-Skills enthalten Konventionen, die Claude bei der Arbeit anwendet. `paths` beschränkt das automatische Laden auf Dateien, die zu den Globs passen.",
          code: reference,
        },
        {
          title: "Ein Aufgaben-Skill mit zusätzlichen Dateien",
          text: "Halte die SKILL.md kurz und verweise auf den Rest. Claude liest `checklist.md` nur, wenn die SKILL.md es dazu auffordert, und führt `bump.sh` aus, ohne es zu lesen. Die Details kosten also nichts, bis sie gebraucht werden.",
          code: layout,
        },
        {
          title: "Ein Skill, der in seinem eigenen Subagent läuft",
          text: "`context: fork` startet einen Subagent (hier vom schreibgeschützten Typ Explore) mit dem Skill als Prompt. Er sieht deine Unterhaltung nicht, die Anweisungen müssen also für sich allein stehen; er läuft im Hintergrund, außer du setzt `background: false`.",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "Skills aus Plugins und Marketplaces installieren",
      text: [
        "Skills, die andere geschrieben haben, kommen meist in Plugins. Claude Code registriert Anthropics offiziellen Marketplace (`claude-plugins-official`), wenn du zum ersten Mal eine interaktive Session startest; durchstöbere ihn mit `/plugin` oder installiere direkt, zum Beispiel `/plugin install skill-creator@claude-plugins-official`. Einen Team- oder Community-Marketplace fügst du zuerst mit `/plugin marketplace add owner/repo` hinzu.",
      ],
      points: [
        "Plugin-Skills heißen `/plugin-name:skill-name`.",
        "Der offizielle Marketplace zeigt für jedes Plugin die Kontextkosten pro Turn und beim Aufruf.",
        "Das Plugin skill-creator hilft beim Schreiben eines Skills und führt Evals aus, die Ergebnisse mit und ohne ihn vergleichen.",
        "Lies die Skills eines Repositorys oder Plugins, bevor du ihnen vertraust: `allowed-tools` kann Tools für den Turn, in dem ein Skill läuft, vorab freigeben.",
      ],
    },
    {
      kind: "text",
      title: "Best Practices, und wenn Claude einen Skill ignoriert",
      points: [
        "Schreib die Beschreibung so, dass sie gefunden wird: Beginne mit der Aufgabe und den Formulierungen, die Nutzer verwenden. Beschreibung plus `when_to_use` werden in der Liste nach 1.536 Zeichen abgeschnitten.",
        "Stell die wichtigsten Anweisungen nach oben: Nachdem die Unterhaltung komprimiert wurde, behält Claude Code eventuell nur den Anfang eines aufgerufenen Skills. Ruf ihn erneut auf, um ihn wiederherzustellen.",
        "Formuliere Vorgaben für die ganze Aufgabe (\"führe nach jeder Änderung die Tests aus\"), denn die Skill-Datei wird in späteren Turns nicht erneut gelesen. Eine Regel, die nie übersprungen werden darf, gehört in einen Hook.",
        "Um Tokens zu sparen, verschiebe Abläufe aus der CLAUDE.md in Skills, setze `disable-model-invocation: true` bei Skills, die du von Hand startest, und prüfe mit `/skill-doctor`, welche Skills Kontext kosten, aber selten genutzt werden.",
        "Er wird nicht ausgelöst? Prüfe, ob die Beschreibung die richtigen Schlüsselwörter enthält, frag \"Welche Skills sind verfügbar?\" und führe `claude plugin validate .claude/skills` aus, um Frontmatter zu finden, das sich nicht parsen lässt.",
        "Er wird zu oft ausgelöst? Fasse die Beschreibung enger oder stell den Skill mit `disable-model-invocation: true` auf manuell um.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Skills bringen Claude Code bei, wie es geht. Crewmark gibt ihm jede Stunde etwas zu tun.",
      text: [
        "Eine Sammlung von Skills macht jede Session fähiger, aber sie wartet trotzdem darauf, dass du fragst. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt, mit den Skills deines Projekts geladen.",
      ],
      steps: [
        {
          title: "Behalte deine Skills im Repository",
          text: "Die Session des Mitarbeiters liest `.claude/skills/` und die CLAUDE.md genau wie deine, ein Release-Skill oder eine Review-Checkliste kommen also mit.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und übernimmt das nächste Issue; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Weise Issues zu und beantworte seine Nachrichten",
          text: "Lege Arbeit auf das Board; der Mitarbeiter kommentiert laufend und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen Skill für Claude Code anlegen" },
  mid: {
    title: "Deine Skills sind bereit. Wer führt sie aus, während du weg bist?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code Skills",
    items: [
      {
        q: "Was sind Claude Code Skills?",
        a: "Ordner mit einer `SKILL.md`-Datei, die Anweisungen für eine Aufgabe oder einen Bestand an Referenzwissen enthalten. Claude lädt einen, wenn deine Anfrage zu seiner Beschreibung passt, oder du führst ihn mit `/skill-name` aus.",
      },
      {
        q: "Wo liegen Claude Code Skills?",
        a: "`~/.claude/skills/<name>/SKILL.md` für persönliche Skills in allen Projekten, `.claude/skills/<name>/SKILL.md` in einem Repository fürs Team, oder in einem Plugin.",
      },
      {
        q: "Wie bringe ich Claude Code dazu, meinen Skill zu nutzen?",
        a: "Schreib eine Beschreibung, die die Aufgabe und die Worte nennt, mit denen du danach fragen würdest, prüfe, ob der Skill auftaucht, wenn du \"Welche Skills sind verfügbar?\" fragst, oder führ ihn direkt mit `/skill-name` aus.",
      },
      {
        q: "Skills vs. Subagents: Was ist der Unterschied?",
        a: "Ein Skill sind Anweisungen, die in eine Unterhaltung geladen werden; ein Subagent ist ein separater Agent mit eigenem Kontext. Ein Skill mit `context: fork` verbindet beides: Er läuft als Subagent mit dem Skill als Prompt.",
      },
      {
        q: "Skills vs. Plugins?",
        a: "Ein Plugin ist die Form, in der Skills, Subagents, Hooks und MCP-Server verpackt und geteilt werden. Installiere ein Plugin, um seine Skills zu bekommen, oder schreib einen Skill in deinem eigenen `.claude/skills/` ganz ohne Plugin.",
      },
      {
        q: "Verbrauchen Skills viele Tokens?",
        a: "Nur ihre Beschreibungen bleiben im Kontext; der Inhalt lädt, wenn ein Skill läuft, und Skills, die nur manuell gestartet werden, listen gar keine Beschreibung. Lange Abläufe aus der CLAUDE.md in Skills zu verschieben, senkt den Tokenverbrauch meist.",
      },
      {
        q: "Wo finde ich Claude Code Skills?",
        a: "Im offiziellen Plugin-Marketplace von Anthropic (durchstöbern mit `/plugin` oder unter claude.com/marketplace), in Team- und Community-Marketplaces, die du mit `/plugin marketplace add` hinzufügst, und in öffentlichen GitHub-Repositories.",
      },
    ],
  },
  cta: {
    title: "Lass deine Claude Code Skills nach Zeitplan arbeiten.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Skills und Plugins) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
