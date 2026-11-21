import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Die Open-Source-Marketing-Skills von Crewmark, in die Agenten, die du schon hast
npx skills add ummydev/marketing-team-skills

# Oder als Claude-Code-Plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `Lies jeden Abend Search Console und unsere Analytics für die letzten
7 Tage, sag mir, was funktioniert, unternimm eine Sache dazu und poste
den Bericht im Issue „Täglicher SEO-Bericht“.

Prüf jeden Montag die Preis- und Changelog-Seiten aus
competitors.md, vergleich sie mit letzter Woche und sag mir, was sich
geändert hat und welche unserer Vergleichsseiten wir aktualisieren müssen.

Mach aus dem Blogartikel dieser Woche fünf Entwürfe für LinkedIn und X in unserem
Ton. Leg sie zur Prüfung aufs Board; veröffentliche nichts.

Hol jeden Freitag Anmeldungen und Aktivierung aus PostHog, vergleich sie
mit letzter Woche und schreib drei Dinge auf, die wir nächste Woche ausprobieren.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code für Marketing: KI-Mitarbeiter für dein Team",
    description:
      "Wie Marketingteams Claude Code und Codex als KI-Mitarbeiter einsetzen: SEO, Content, Social Media, Wettbewerber-Tracking und Reporting nach Zeitplan. Rollen, Anwendungsfälle, Prompts und Skills zum Kopieren, und wie du alles so einrichtest, dass nichts ohne dich rausgeht.",
  },
  breadcrumb: "Claude Code für Marketing",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Für Marketingteams",
    title: "Claude Code für Marketing: KI-Mitarbeiter für die wiederkehrende Arbeit",
    lead: "Claude Code und Codex sind nicht nur etwas für Entwickler. Mit einer Rolle, den richtigen Skills und einem Zeitplan schreibt und verbessert derselbe Agent die Seiten deiner Website, bringt sie in den Index, entwirft Posts aus dem, was ihr ausgeliefert habt, beobachtet die Konkurrenz und berichtet jeden Tag die Zahlen. Crewmarks eigenes Marketing läuft genau so. Diese Seite zeigt, welche Aufgaben du abgeben kannst, welche Rollen sie erledigen, Prompts und Skills zum Kopieren und wie du alles so einrichtest, dass nichts Öffentliches ohne einen Menschen rausgeht.",
    cta: "Loslegen",
    secondary: "Aufgaben ansehen",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Was Marketingteams einem KI-Mitarbeiter übergeben",
      text: [
        "Die besten ersten Aufgaben wiederholen sich jeden Tag oder jede Woche, haben ein klares Ende und lassen dir das letzte Wort.",
      ],
      headers: ["Aufgabe", "Wie oft", "Wer sie erledigt", "Guide"],
      rows: [
        ["SEO-Bericht: Traffic, was funktioniert, Abstand zum Ziel", "Täglich", "SEO-Spezialist", "[Täglicher SEO-Bericht](/use-cases/daily-seo-report)"],
        ["Preise, Launches und Doku-Änderungen der Konkurrenz", "Wöchentlich", "Marketing-Agent", "[Wöchentlicher Wettbewerber-Digest](/use-cases/weekly-competitor-digest)"],
        ["Neue Seiten für Keywords, die anfangen zu funktionieren", "Täglich", "SEO-Spezialist", "[KI-SEO-Spezialist](/ai-employees/seo-specialist)"],
        ["Vergleichs- und Alternativen-Seiten, aktuell gehalten", "Wöchentlich", "SEO-Spezialist", "[Skill für Wettbewerberseiten](/skills)"],
        ["Social-Media-Posts, entworfen aus dem, was ihr ausgeliefert habt", "Täglich", "Social-Media-Manager", "[KI-Social-Media-Manager](/ai-employees/social-media-manager)"],
        ["Funnel-Zahlen und Experimente zum Ausprobieren", "Wöchentlich", "Marketing-Agent", "[KI-Marketing-Agent](/ai-employees/marketing-agent)"],
        ["Übersetzungen von Seiten, die schon Suchtraffic bekommen", "Bei Bedarf", "SEO-Spezialist", "[Skill für mehrsprachiges SEO](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts zum Kopieren",
      text: [
        "Jeder davon funktioniert als wiederkehrendes Issue für einen KI-Mitarbeiter oder als einmaliger Prompt in Claude Code oder Codex.",
      ],
      steps: [
        {
          title: "Vier Aufgaben, je ein Satz",
          text: "Ersetze Namen und Zahlen durch deine. Zu den ersten beiden gibt es ausführliche Guides mit Rollenbeschreibung: den [täglichen SEO-Bericht](/use-cases/daily-seo-report) und den [wöchentlichen Wettbewerber-Digest](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "Marketing-Skills für Claude Code, die du installieren solltest",
      text: [
        "Skills geben dem Agenten die Schritte für jede Aufgabe vor, damit du sie nicht in jeder Session erklären musst.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, Open Source)",
          text: "Die Skills, die unser eigener SEO-Mitarbeiter jeden Tag nutzt: Trend-Keywords, Keyword-Recherche, eine Seite pro Keyword, Wettbewerberseiten, mehrsprachiges SEO, Seiten in den Index bringen, KI-Suche und der Tagesbericht, dazu Skills für Kurzvideos. Siehe [Marketing Team Skills](/skills).",
          code: install,
        },
        {
          title: "Weitere SEO- und Marketing-Skills",
          text: "marketingskills von Corey Haines (seo-audit, ai-seo, programmatic-seo und mehr), Claude SEO und andere vergleichen wir unter [die besten Claude Skills für SEO](/skills/seo).",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So baust du ein Marketingteam aus KI-Mitarbeitern auf",
      steps: [
        {
          title: "Stell eine Rolle nach der anderen ein",
          text: "Fang mit der Aufgabe an, die dich jede Woche die meiste Zeit kostet. Jede Rollenseite enthält Ziele, Tagesablauf und Rollenbeschreibung: [SEO-Spezialist](/ai-employees/seo-specialist), [Marketing-Agent](/ai-employees/marketing-agent), [Social-Media-Manager](/ai-employees/social-media-manager).",
        },
        {
          title: "Gib ihm Lesezugriff und ein Repository",
          text: "Lesezugriff auf Search Console und Analytics, das Repository der Website und eine lokale Vorschau zum Testen von Seiten. Nimm CLIs statt MCP-Servern, wo es beides gibt; sie verbrauchen weniger Tokens.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Wiederkehrende Aufgaben werden zu wiederkehrenden Issues; einmalige Arbeit wird zu Issues, die du zuweist. Jeder Mitarbeiter wacht während der Arbeitszeiten per Heartbeat auf und nimmt das nächste.",
        },
        {
          title: "Lass bei allem Öffentlichen einen Menschen entscheiden",
          text: "Veröffentlichen, Posten, Geld ausgeben und alles Unumkehrbare geht über einen Menschen. Braucht ein Mitarbeiter das, markiert er das Issue mit „Handlungsbedarf“ und fragt.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "Was du erwarten kannst",
      points: [
        "SEO braucht auf jeder Website Wochen: Richte die ersten Ziele auf ausgelieferte Seiten und Impressionen aus, dann auf Klicks.",
        "Unser eigener SEO-Mitarbeiter liefert täglich Seiten aus; in seinen ersten Wochen wuchsen die Impressionen von einer Handvoll auf Hunderte pro Woche, vor allem durch Longtail-Seiten, während breite Begriffe wie „ai employee“ hinter Position 80 blieben.",
        "Entwürfe gehen schnell, aber Geschmack zählt weiterhin: Prüf Social-Media-Posts und alles in der Stimme deiner Marke, bevor es rausgeht.",
        "Die Nutzung geht von deinem eigenen Claude- oder ChatGPT-Plan ab; leg die aufwendigen Aufgaben also in die Arbeitszeiten.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ein Marketingteam aus KI-Mitarbeitern mit Claude Code oder Codex aufbauen" },
  mid: {
    title: "Du willst diese Aufgaben jeden Tag erledigt haben, ohne zu prompten?",
    text: "Crewmark macht aus deinem Claude Code oder Codex Marketing-Mitarbeiter, die per Heartbeat aufwachen und ein Board abarbeiten.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann Claude Code Marketing machen?",
        a: "Ja, für Arbeit, die es über Dateien, das Web und Tools erledigen kann: Seiten der Website schreiben und verbessern, Keyword-Recherche, Wettbewerber-Tracking, Berichte aus Analytics und Entwürfe für Posts und E-Mails. Veröffentlichen und Geld ausgeben sollte bei einem Menschen bleiben.",
      },
      {
        q: "Was sind die besten Marketing-Skills für Claude Code?",
        a: "Für SEO und Wachstum gehören die Open-Source-Marketing Team Skills von Crewmark und marketingskills von Corey Haines zu den vollständigsten Sammlungen; wir vergleichen sie und weitere unter [die besten Claude Skills für SEO](/skills/seo).",
      },
      {
        q: "Gibt es ein Marketing-Plugin für Claude Code?",
        a: "Marketing Team Skills lässt sich mit `/plugin marketplace add ummydev/marketing-team-skills` als Claude-Code-Plugin installieren, oder mit `npx skills add` in Claude Code, Codex und andere Agenten.",
      },
      {
        q: "Kann ich auch Codex für Marketing nutzen?",
        a: "Ja. Leg die Rollenbeschreibung in die AGENTS.md statt in die CLAUDE.md; Skills und Einrichtung sind dieselben.",
      },
      {
        q: "Was unterscheidet einen KI-Marketing-Mitarbeiter von einem Marketing-Automation-Tool?",
        a: "Automation-Tools führen die Schritte aus, die du baust. Ein KI-Mitarbeiter entscheidet anhand eines Ziels, was als Nächstes zu tun ist, erledigt die Arbeit auf deiner Website und in deinen Tools und berichtet nach Zeitplan zurück.",
      },
      {
        q: "Postet er ohne mich in sozialen Medien?",
        a: "Nur wenn du es erlaubst. Wir empfehlen Entwürfe zur Prüfung: Der Mitarbeiter legt sie aufs Board und wartet auf dein OK.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Marketingteam KI-Mitarbeiter, die keinen Tag auslassen.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geschrieben am 10. November 2026, auf Basis der Arbeitsweise von Crewmarks eigenen Marketing-Mitarbeitern.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude, Claude Code und Codex sind Marken ihrer Inhaber.",
};
