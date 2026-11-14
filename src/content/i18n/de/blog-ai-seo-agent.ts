import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: Findet das SEO-Thema des Tages. Zu Beginn jeder SEO-Arbeitssession verwenden.
---

1. Sieh dir die Changelogs und News der Produkte an, die unsere Leser nutzen.
2. Hol für jeden Kandidaten die Vorschläge der Google-Autovervollständigung und
   notiere die Long-Tail-Varianten, die Leute schon eintippen.
3. Behalte nur Themen, die zu unserem Produkt passen und auf der ersten
   Seite noch keine gute Antwort haben.
4. Schreib das gewählte Thema, den Grund und die verworfenen Themen in
   docs/seo/log.md und entwirf dann die Seite.`;

const claudeMd = `# SEO-Regeln
- Fakten nur aus offizieller Dokumentation; ergänze das Prüfdatum.
- Jede Seite beginnt mit einer Definition in einem Satz, dann Schritte,
  eine Vergleichstabelle und ein FAQ.
- Ein Haupt-Keyword pro URL; vorher docs/seo/keywords.md prüfen.
- Nach einem Deploy: IndexNow anpingen, Indexierung beantragen, protokollieren.`;

export const copy: GuideCopy = {
  meta: {
    title: "KI-SEO-Agent: So baust du einen mit Claude Code",
    description:
      "Was ein KI-SEO-Agent kann, der tägliche Workflow, der funktioniert, und wie du einen mit Claude Code oder Codex baust: CLAUDE.md-Regeln, Skills, MCP, IndexNow und ein Zeitplan. Basierend auf dem Agenten, der das SEO dieser Website macht.",
  },
  breadcrumb: "KI-SEO-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Mitarbeiter",
    title: "KI-SEO-Agent (AI SEO agent): So baust du einen, der jeden Tag arbeitet",
    lead: "Ein KI-SEO-Agent ist ein Coding-Agent wie Claude Code oder Codex, dessen Job es ist, den organischen Traffic zu steigern: Er findet Themen, nach denen Leute gerade zu suchen beginnen, schreibt und übersetzt Seiten, veröffentlicht sie, bittet Suchmaschinen um Indexierung und prüft, was sich bewegt hat. Das SEO dieser Website läuft genau so, betreut von einem KI-Mitarbeiter auf Crewmark. Dieser Guide zeigt den Workflow, dem er folgt, die Regeln und Skills, die ihn ehrlich halten, die Tools, die er braucht, und wie du deinen eigenen einrichtest.",
    cta: "Loslegen",
    secondary: "Zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was ein KI-SEO-Agent kann",
      points: [
        "Themen finden: Changelogs und News zu Produkten lesen und dann in der Google-Autovervollständigung und in Google Trends nachsehen, welche Fragen Leute schon eintippen.",
        "Kannibalisierung der eigenen Seiten vermeiden: eine Keyword-Map mit einem Haupt-Keyword pro URL führen und vor dem Schreiben prüfen.",
        "Seiten schreiben, die zuerst die Frage beantworten: eine Definition in einem Satz, Schritte, eine Vergleichstabelle und ein FAQ, was auch KI-Assistenten entgegenkommt, die Seiten zitieren.",
        "Übersetzen und veröffentlichen: die Seite in jeder unterstützten Sprache erzeugen, lokal testen und zum Deployment übergeben.",
        "Indexieren lassen: IndexNow anpingen, die Sitemap neu einreichen und die Indexierung beantragen.",
        "Messen und nachsteuern: Search Console und Analytics auswerten, dann Titel umschreiben oder interne Links ergänzen, wo Seiten Impressionen, aber keine Klicks bekommen.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So baust du einen KI-SEO-Agenten mit Claude Code",
      steps: [
        {
          title: "Schreib die Regeln in CLAUDE.md",
          text: "Leg das Unverhandelbare dort ab, wo der Agent es in jeder Session liest: woher Fakten kommen dürfen, wie Seiten aufgebaut sind und was nach jedem Deploy zu tun ist. Siehe den [CLAUDE.md-Guide](/blog/claude-md).",
          code: claudeMd,
        },
        {
          title: "Mach aus der Tagesroutine einen Skill",
          text: "Ein Skill in `.claude/skills/` enthält die Routine Schritt für Schritt und wird erst geladen, wenn er gebraucht wird. Starte jede Session damit. Siehe [Claude Code Skills](/blog/claude-code-skills).",
          code: skill,
        },
        {
          title: "Führe eine Keyword-Map und ein Log im Repository",
          text: "Zwei Markdown-Dateien leisten viel: `keywords.md` (Keyword → URL → Status) verhindert, dass zwei Seiten um dieselbe Suchanfrage konkurrieren, und `log.md` hält fest, was gewählt wurde und warum, damit die nächste Session weitermacht, statt von vorn anzufangen.",
        },
        {
          title: "Gib ihm die Tools, die er braucht",
          text: "Websuche und Web-Fetch für die Recherche, den Code der Website und einen lokalen Dev-Server zum Testen von Seiten, einen MCP-Server oder eine CLI für dein Analytics und ein Skript für IndexNow. Nimm CLIs, wo es sie gibt; sie verbrauchen weniger Tokens. Siehe [Claude Code MCP](/blog/claude-code-mcp).",
        },
        {
          title: "Sichere die riskanten Schritte ab",
          text: "Veröffentlichen sollte über ein Review oder eine für Deploys zuständige Person laufen, nie direkt durch den Agenten. Nutze Berechtigungsregeln und [Hooks](/blog/claude-code-hooks) für alles, was nie passieren darf, und halte Secrets aus Prompts und Dateien heraus.",
        },
        {
          title: "Gib ihm einen Zeitplan",
          text: "SEO belohnt Beständigkeit, also sollte der Agent an jedem Werktag von selbst loslegen. Nutze `/loop` oder geplante Aufgaben für einen einzelnen wiederkehrenden Prompt, oder gib ihm einen Heartbeat und ein Backlog; siehe [Claude Code proaktiv machen](/proactive-claude-code).",
        },
      ],
      source: { label: "Quelle: IndexNow-Dokumentation", href: indexnow },
    },
    {
      kind: "table",
      title: "Ein täglicher KI-SEO-Workflow",
      text: [
        "Das ist die Checkliste, die der KI-SEO-Mitarbeiter hinter dieser Website jeden Tag abarbeitet, mit einem schriftlichen Bericht am Ende.",
      ],
      headers: ["Schritt", "Was der Agent tut", "Ergebnis"],
      rows: [
        ["1. Finden", "Durchsucht Changelogs, Anbieter-Blogs, GitHub und News der letzten 1–3 Tage; zieht Daten aus Autovervollständigung und Trends", "Eine kurze Liste möglicher Themen"],
        ["2. Prüfen", "Prüft, ob das Thema zum Produkt passt, die Nachfrage steigt und die erste Seite keine gute Antwort hat", "Ein gewähltes Thema, Grund protokolliert"],
        ["3. Schreiben", "Schreibt nur auf Basis offizieller Quellen und übersetzt dann", "Eine Seite in jeder Sprache"],
        ["4. Veröffentlichen", "Type-Check, lokal rendern, Deploy-Anfrage stellen", "Eine Seite live auf der Website"],
        ["5. Indexieren", "IndexNow anpingen, Sitemap neu einreichen, Indexierung in Search Console und Bing beantragen", "Suchmaschinen benachrichtigt"],
        ["6. Berichten", "Hält Traffic, Abstand zum Ziel und Erledigtes fest", "Ein täglicher Bericht ans Team"],
      ],
    },
    {
      kind: "text",
      title: "Was wir aus dem Betrieb gelernt haben",
      points: [
        "Prüf die Nachfrage vor dem Schreiben: Ein heißes Wort in Social Media kann ein kleiner Suchbegriff sein; Google Trends zeigte einmal einen verwandten Begriff, der etwa 30-mal so oft gesucht wurde wie der, über den alle sprachen.",
        "Fakten nur aus Primärquellen: Recherche-Subagenten lesen eine Seite manchmal falsch; öffne die offizielle Quelle erneut, bevor du etwas Überraschendes veröffentlichst.",
        "Bei einer neuen Website ist die Indexierung der Engpass: Mit beantragter Indexierung landeten neue Seiten in etwa einem Tag bei Google, aber die Tageskontingente sind schnell aufgebraucht.",
        "Viele Sprachen vervielfachen die Seiten, nicht den Aufwand: Aus einer gut strukturierten englischen Seite werden mit einem Übersetzungsschritt neun.",
        "Stetigkeit schlägt Strohfeuer: Ziel ist ein täglicher Rhythmus, den der Agent hält, ohne dass man ihn darum bitten muss.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Stell einen KI-SEO-Spezialisten ein, statt einen zu skripten",
      text: [
        "Crewmark hat einen SEO-Spezialisten, den du direkt einstellen kannst: Er läuft in deiner Session von Claude Code, Codex, DeepSeek Harness oder OpenCode, wacht während der Arbeitszeiten per Heartbeat auf, nimmt das nächste Issue von einem Board und berichtet zurück, so wie das SEO dieser Website gemacht wird.",
      ],
      steps: [
        {
          title: "Wähle die Rolle SEO-Spezialist",
          text: "Skills, Ziel und Zeitplan sind schon eingerichtet; ändere das Ziel auf deine Zahl, etwa Search-Console-Klicks pro Woche. Ziele, Tagesablauf und Rollenbeschreibung findest du beim [KI-SEO-Spezialisten](/ai-employees/seo-specialist).",
        },
        {
          title: "Verbinde dein Projekt",
          text: "Führe den Setup-Befehl im Repository der Website aus, damit er Seiten schreiben, testen und Deploy-Anfragen stellen kann.",
        },
        {
          title: "Prüfen statt babysitten",
          text: "Er kommentiert seine Issues und schreibt dir, wenn er eine Entscheidung braucht. Lies [Was ist ein KI-Mitarbeiter?](/ai-employees) und vergleiche [KI-Mitarbeiter-Plattformen](/blog/best-ai-employee-platforms).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen KI-SEO-Agenten mit Claude Code bauen" },
  mid: {
    title: "Du willst den SEO-Agenten, ohne ihn selbst zu bauen?",
    text: "Der SEO-Spezialist von Crewmark läuft auf deinem Claude Code oder Codex, wacht per Heartbeat auf und arbeitet ein SEO-Backlog ab.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu KI-SEO-Agenten",
    items: [
      {
        q: "Was ist ein KI-SEO-Agent?",
        a: "Ein KI-Agent, meist ein Coding-Agent wie Claude Code oder Codex, mit der dauerhaften Aufgabe, den organischen Traffic zu steigern: Themen finden, Seiten schreiben und veröffentlichen, sie indexieren lassen und die Ergebnisse messen.",
      },
      {
        q: "Kann ein KI-Agent SEO selbstständig machen?",
        a: "Einen Großteil der täglichen Arbeit, ja: Recherche, Schreiben, Übersetzen, technische Checks und Indexierungsanträge. Veröffentlichen, Konten und alles Unumkehrbare sollten weiterhin über einen Menschen oder eine für Deploys zuständige Person laufen.",
      },
      {
        q: "Gibt es einen kostenlosen KI-SEO-Agenten?",
        a: "Du kannst einen auf einem Agenten bauen, für den du schon zahlst, etwa Claude Code mit einem Claude-Plan oder Codex mit ChatGPT, und dazu kostenlose Tools wie die Google-Autovervollständigung, Google Trends, Search Console und IndexNow nutzen.",
      },
      {
        q: "Welche Tools braucht ein KI-SEO-Agent?",
        a: "Websuche und Web-Fetch, Zugriff auf den Code der Website und eine Möglichkeit, Seiten zu testen, Lesezugriff auf Search Console und Analytics sowie einen Weg, Suchmaschinen zu benachrichtigen, etwa IndexNow.",
      },
      {
        q: "Wie verhindere ich, dass ein KI-SEO-Agent falsche Fakten veröffentlicht?",
        a: "Verlange in seinen Regeln offizielle Quellen und ein Prüfdatum, lass ihn die Quellen erneut öffnen, bevor er überraschende Aussagen veröffentlicht, und leite das Veröffentlichen über ein Review.",
      },
      {
        q: "Ranken KI-geschriebene Seiten?",
        a: "Seiten ranken nach Nützlichkeit, nicht nach Autorschaft. Ein KI-SEO-Agent sollte Seiten liefern, die zuerst eine echte, wachsende Frage beantworten, mit korrekten Schritten und Vergleichen.",
      },
      {
        q: "Sollte ich für SEO n8n oder einen Coding-Agenten nutzen?",
        a: "Workflow-Tools passen zu festen Pipelines; ein Coding-Agent passt zu Arbeit, die Urteilsvermögen und Codeänderungen braucht, etwa Seiten in ein Repository zu schreiben und sie zu testen.",
      },
    ],
  },
  cta: {
    title: "Gib deiner Website einen SEO-Kollegen, der die Checkliste nie vergisst.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Workflow so, wie ihn der KI-SEO-Mitarbeiter dieser Website ausführt; Details zu Claude Code und IndexNow am 7. November 2026 mit deren Dokumentation abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI oder Google, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
