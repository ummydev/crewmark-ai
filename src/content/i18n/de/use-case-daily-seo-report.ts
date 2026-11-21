import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /use-cases/daily-seo-report; the English master is src/content/use-cases/daily-seo-report.ts.

const brief = `# Rolle: SEO-Berichterstatter
Läuft über das wiederkehrende Issue "Täglicher SEO-Bericht", jeden Tag um 18:30.

1. Search Console, letzte 7 Tage: Impressionen, Klicks, durchschnittliche Position.
   Lies die Tabellen Suchanfragen und Seiten. Notiere Suchanfragen in den Top 10,
   Seiten mit steigenden Impressionen und Seiten mit Impressionen,
   aber ohne Klicks.
2. Analytics, letzte 7 Tage: eindeutige Besucher, Besucher aus der Suche,
   Besucher von KI-Assistenten, die wichtigsten Landingpages aus der Suche.
3. Vergleich mit dem Wochenziel: 10.000 Impressionen, 500 Klicks,
   2.000 eindeutige Besucher.
4. Wähle eine Sache, die funktioniert, und leg heute nach
   (eine verwandte Seite, eine FAQ, interne Links oder eine Übersetzung).
5. Poste den Bericht als Kommentar im Issue, liste alle Entscheidungen auf,
   die du von mir brauchst, und markiere das Issue dann als erledigt.

Regeln
- Nur Lesezugriff auf Search Console und Analytics.
- Ignoriere Suchanfragen in Anführungszeichen oder mit langen -site:-Listen: Das sind
  Rank-Tracker, keine Menschen.`;

const schedule = `# Ein wiederkehrendes Issue, zugewiesen an deinen SEO-Mitarbeiter (Crewmark-CLI)
crewmark issues create --title "Täglicher SEO-Bericht" --assignee "<mitarbeiter>" \\
  --repeat "daily at 18:30" --timezone Europe/Berlin`;

export const copy: GuideCopy = {
  meta: {
    title: "Täglicher SEO-Bericht mit Claude Code: Setup mit KI-Mitarbeiter",
    description:
      "Lass Claude Code oder Codex jeden Tag deinen SEO-Bericht schreiben: Zahlen aus Search Console und Analytics, der Abstand zum Ziel, was funktioniert und eine Sache, die dafür getan wurde. Die Rollenbeschreibung zum Kopieren, der nötige Zugriff und wie du ihn planst.",
  },
  breadcrumb: "Täglicher SEO-Bericht",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Anwendungsfälle · Marketing",
    title: "Ein täglicher SEO-Bericht, geschrieben von einem KI-Mitarbeiter in Claude Code",
    lead: "Jeden Abend holt ein KI-Mitarbeiter, der auf deinem eigenen Claude Code oder Codex läuft, die letzten sieben Tage aus der Search Console und deiner Analytics, vergleicht sie mit deinem Ziel, findet die Suchanfragen und Seiten, die anfangen zu funktionieren, tut eine Sache, um sie weiter voranzubringen, und veröffentlicht den Bericht dort, wo dein Team arbeitet. Das ist die Routine, die Crewmarks eigener SEO-Mitarbeiter jeden Tag ausführt; unten findest du die Rollenbeschreibung zum Kopieren, den Zugriff, den er braucht, und wie du ihn in einen Zeitplan bringst.",
    cta: "Loslegen",
    secondary: "Rollenbeschreibung kopieren",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was der Bericht abdeckt",
      points: [
        "Suche: Impressionen, Klicks und durchschnittliche Position der letzten sieben Tage, mit den Suchanfragen und Seiten dahinter.",
        "Was funktioniert: Suchanfragen in den Top 10, Seiten mit steigenden Impressionen und Seiten mit Impressionen, aber ohne Klicks, was meist heißt, dass Titel oder Inhalt nicht zur Suche passen.",
        "Besucher: eindeutige Besucher, Besucher aus Suchmaschinen und Besucher von KI-Assistenten wie ChatGPT und Perplexity, mit den Landingpages, auf denen sie ankamen.",
        "Der Abstand zum Ziel: die Zahlen dieser Woche im Vergleich zum Wochenziel.",
        "Was er heute getan hat und welche Entscheidungen er von dir braucht.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "Ein Beispiel: unser eigener Bericht vom 10. November 2026",
      text: [
        "Das ist der Anfang des Berichts, den Crewmarks SEO-Mitarbeiter für crewmark.ai veröffentlicht hat, eine Website, die wenige Wochen alt ist.",
      ],
      headers: ["Kennzahl", "Letzte 7 Tage", "Wochenziel"],
      rows: [
        ["Impressionen in der Search Console", "537 (nach 309 im vorherigen Bericht)", "10.000"],
        ["Klicks in der Search Console", "2", "500"],
        ["Eindeutige Besucher", "93, davon 16 aus der Suche und 0 von KI-Assistenten", "2.000"],
        ["Funktioniert", "„base44 superagent“ auf Position 4 ohne Klicks: Die Suche landete auf einer Übersichtsseite", "-"],
        ["Was getan wurde", "Am selben Tag eine eigene Seite zu Base44 Superagent geschrieben", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du einen täglichen SEO-Bericht mit Claude Code oder Codex ein",
      steps: [
        {
          title: "Gib ihm Lesezugriff auf die Zahlen",
          text: "Für die Search Console: die Search-Console-API mit einem Dienstkonto mit Lesezugriff, ein MCP-Server oder ein Browser, den der Agent steuern kann, während du angemeldet bist. Für Analytics: die CLI, API oder der MCP-Server deines Tools; unser Mitarbeiter nutzt die CLI von PostHog. Lesezugriff ist alles, was er braucht.",
        },
        {
          title: "Kopier die Rollenbeschreibung",
          text: "Leg sie für Claude Code in die CLAUDE.md oder für Codex in die AGENTS.md und ersetze das Ziel durch deins. Die Open-Source-[Marketing Team Skills](/skills) enthalten einen Skill seo-daily-report mit denselben Schritten.",
          code: brief,
        },
        {
          title: "Bring ihn in einen Zeitplan",
          text: "Mach den Bericht zu einem wiederkehrenden Issue, damit er jeden Tag zur selben Zeit zum Mitarbeiter zurückkommt und du siehst, ob der heutige erledigt ist.",
          code: schedule,
        },
        {
          title: "Lies ihn dort, wo du ohnehin arbeitest",
          text: "Der Bericht landet als Kommentar im Issue. Braucht er etwas von dir, markiert er das Issue mit „Handlungsbedarf“ und fragt.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "Mach aus dem Bericht Taten",
      text: [
        "Ein Bericht, der die Zahlen nur beschreibt, bewegt sie nicht. Der nützliche Teil ist die Regel dafür, was als Nächstes zu tun ist, und sie steht in der Rollenbeschreibung:",
      ],
      points: [
        "Eine Suchanfrage in den Top 10 oder im Aufwind: Schreib den verwandten Longtail (andere Einsatzzwecke desselben Tools, „vs“, Alternativen, Fehler, Plattformen), ergänze eine FAQ, verlinke sie von Seiten, die schon Besucher bekommen, oder übersetze sie in eine Sprache, in der schon danach gesucht wird.",
        "Impressionen, aber keine Klicks: Die Seite passt nicht zur Suche. Gib ihr einen Titel mit der Suchanfrage, die Leute nutzen, oder schreib eine Seite für diese Suchanfrage.",
        "Head-Terms, die hinter Position 50 festhängen: Verwende keine Zeit mehr darauf; eine neue Website gewinnt zuerst Longtails.",
        "Schreib die Entscheidung und das Ergebnis in ein Log, damit der Bericht von morgen prüfen kann, ob es funktioniert hat.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Stell den SEO-Mitarbeiter ein, der ihn schreibt",
      text: [
        "Der Bericht ist ein Teil im Tag eines SEO-Spezialisten. Crewmark macht aus deinem Claude Code oder Codex genau diesen Mitarbeiter, mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat.",
      ],
      steps: [
        {
          title: "Fang mit der Rolle an",
          text: "Der [KI-SEO-Spezialist](/ai-employees/seo-specialist) kommt mit Zielen, Tagesablauf und Rollenbeschreibung.",
        },
        {
          title: "Leg den Bericht als wiederkehrendes Issue an",
          text: "Er wacht per Heartbeat auf, sieht, dass der Bericht fällig ist, und veröffentlicht ihn.",
        },
        {
          title: "Sieh dir den Rest des Marketings an",
          text: "Weitere Aufgaben für Marketingteams findest du unter [Claude Code für Marketing](/for/marketing); der nächste Anwendungsfall ist ein [wöchentlicher Wettbewerber-Digest](/use-cases/weekly-competitor-digest).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen täglichen SEO-Bericht mit Claude Code oder Codex einrichten" },
  mid: {
    title: "Du willst den Bericht, und die Arbeit dahinter, jeden Tag?",
    text: "Der SEO-Spezialist von Crewmark läuft auf deinem Claude Code oder Codex und veröffentlicht seinen Bericht nach Zeitplan.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann Claude Code die Google Search Console lesen?",
        a: "Ja, über die Search-Console-API mit einem Dienstkonto, über einen MCP-Server für die Search Console oder über einen Browser, den es steuern kann, während du angemeldet bist. Gib ihm nur Lesezugriff.",
      },
      {
        q: "Wie plane ich einen täglichen SEO-Bericht mit Claude Code?",
        a: "Claude Code startet nicht von selbst; irgendetwas muss es wecken. Nutze eine wiederkehrende Aufgabe oder einen Heartbeat, siehe [wie du Claude Code proaktiv machst](/proactive-claude-code), oder lass es als Crewmark-Mitarbeiter mit einem wiederkehrenden Issue laufen.",
      },
      {
        q: "Was sollte ein täglicher SEO-Bericht enthalten?",
        a: "Impressionen, Klicks und Position der letzten sieben Tage mit den Suchanfragen und Seiten dahinter; was in den Top 10 steht oder steigt; Besucher aus der Suche und von KI-Assistenten; den Abstand zum Ziel; was heute getan wurde; und welche Entscheidungen nötig sind.",
      },
      {
        q: "Funktioniert das auch mit Codex?",
        a: "Ja. Leg dieselbe Rollenbeschreibung in die AGENTS.md; der nötige Zugriff ist derselbe.",
      },
      {
        q: "Warum sieben Tage statt einem?",
        a: "Daten der Search Console kommen ein, zwei Tage verzögert, und einzelne Tage schwanken stark. Sieben Tage zeigen den Trend; der Tagesbericht liest ihn nur jeden Tag ab.",
      },
    ],
  },
  cta: {
    title: "Bekomm jeden Tag den SEO-Bericht, und die Arbeit, die er verlangt.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geschrieben am 10. November 2026, auf Basis der Routine, die Crewmarks eigener SEO-Mitarbeiter jeden Tag ausführt.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI, Google oder PostHog, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
