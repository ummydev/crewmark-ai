import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# Rolle: Wettbewerbsbeobachter
Läuft über das wiederkehrende Issue "Wöchentlicher Wettbewerber-Digest", montags um 9:00.

Beobachtungsliste: competitors.md (eine Zeile pro Seite: Name, URL, was es ist).

1. Ruf jede Seite aus competitors.md ab, eine nach der anderen.
   Nur öffentliche Seiten; melde dich nie im Produkt eines Wettbewerbers an.
2. Speichere den lesbaren Text unter competitors/<name>/<seite>.md.
3. Vergleich ihn mit der Kopie von letzter Woche (git diff). Ignoriere Datumsangaben,
   Zähler und Cookie-Banner.
4. Schreib den Digest: was sich geändert hat, mit Link und dem alten und neuen
   Wortlaut bei Preisen, Plänen und Limits.
5. Sag, was wir tun sollten: Vergleichsseiten aktualisieren, auf einen Launch
   reagieren, oder nichts.
6. Committe die Snapshots, poste den Digest im Issue, markiere es als erledigt.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | Preise
Acme | https://acme.com/changelog | Changelog
Acme | https://docs.acme.com/limits | Plan-Limits
Beta | https://beta.dev/pricing   | Preise
Beta | https://github.com/beta-dev/beta/releases | Releases`;

export const copy: GuideCopy = {
  meta: {
    title: "Wöchentliches Wettbewerber-Tracking mit Claude Code: Preise, Launches",
    description:
      "Lass Claude Code oder Codex jede Woche die Preisseiten, Changelogs und Dokus deiner Wettbewerber prüfen, mit letzter Woche vergleichen und dir sagen, was sich geändert hat und was zu tun ist. Die Rollenbeschreibung und Beobachtungsliste zum Kopieren und wie du es planst.",
  },
  breadcrumb: "Wöchentlicher Wettbewerber-Digest",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Anwendungsfälle · Marketing",
    title: "Ein wöchentlicher Wettbewerber-Digest von einem KI-Mitarbeiter in Claude Code",
    lead: "Preise ändern sich, Pläne werden umbenannt und Features erscheinen still und leise, und die meisten Teams erfahren es von einem Kunden. Ein KI-Mitarbeiter auf deinem eigenen Claude Code oder Codex kann jede Woche die öffentlichen Seiten deiner Wettbewerber lesen, von jeder eine Kopie in deinem Repository aufbewahren, sie mit der von letzter Woche vergleichen und dir genau sagen, was sich geändert hat, mit Links und dem alten und neuen Wortlaut, dazu, was du tun solltest. Hier sind die Rollenbeschreibung, das Format der Beobachtungsliste und wie du es planst.",
    cta: "Loslegen",
    secondary: "Rollenbeschreibung kopieren",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Warum Snapshots besser sind als ein News-Feed",
      text: [
        "Eine Preisänderung bekommt selten einen Blogartikel. Wer den Text jeder Seite speichert und vergleicht, erwischt auch die leisen Änderungen: ein gesenktes Limit, einen umbenannten Plan, eine gestrichene kostenlose Stufe.",
      ],
      points: [
        "Es ist exakt: Der Digest zitiert den alten und neuen Wortlaut, also streitet niemand darüber, was sich geändert hat.",
        "Es ist günstig: reiner Text in deinem Repository, versioniert mit Git, kein Scraping-Dienst nötig.",
        "Es ist nachvollziehbar: Die Geschichte der Preisseite jedes Wettbewerbers steht in deinem Git-Log.",
        "Es hält deine Seiten ehrlich: Vergleichsseiten veralten schnell. Viele Devin-Listen nannten zum Beispiel noch einen Plan für $500 und Preise pro ACU, nachdem devin.ai seine Self-Serve-Pläne auf Kontingente und Credits umgestellt hatte, wie unsere Seite zu [Devin-Alternativen](/blog/devin-alternatives) festhält.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du einen wöchentlichen Wettbewerber-Digest ein",
      steps: [
        {
          title: "Schreib die Beobachtungsliste",
          text: "Eine Zeile pro öffentlicher Seite: Preise, Changelog oder Releases, Plan-Limits in der Doku und die Vergleichsseiten, die sie über dich veröffentlichen.",
          code: watchlist,
        },
        {
          title: "Kopier die Rollenbeschreibung",
          text: "In die CLAUDE.md für Claude Code oder die AGENTS.md für Codex. Web-Fetch ist alles, was er braucht; für Seiten, die nur im Browser rendern, gib ihm ein Browser-Tool.",
          code: brief,
        },
        {
          title: "Plan es wöchentlich ein",
          text: "Mach es zu einem wiederkehrenden Issue, zum Beispiel mit `--repeat \"weekly on mon at 9:00\"`, zugewiesen an deinen Marketing- oder SEO-Mitarbeiter.",
        },
        {
          title: "Handle danach",
          text: "Empfiehlt der Digest, eine Vergleichsseite zu aktualisieren, kann derselbe Mitarbeiter das als nächstes Issue übernehmen und einen Pull Request öffnen.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "Was du beobachten solltest, und warum",
      headers: ["Seite", "Was eine Änderung meist bedeutet"],
      rows: [
        ["Preise", "Ein neuer Plan, eine Preisänderung oder eine kostenlose Stufe, die wegfällt: Aktualisiere deine Vergleichstabellen in derselben Woche"],
        ["Changelog oder Releases", "Ein Feature, das eine Lücke schließt, mit der du wirbst, oder ein neuer Markt, in den sie vordringen"],
        ["Doku zu Limits", "Verschärfte oder gelockerte Kontingente; oft das erste Anzeichen einer Preisänderung"],
        ["Ihre Vergleichsseiten", "Wie sie sich gegen dich positionieren; antworte mit Fakten auf deinen eigenen Seiten"],
        ["Karriereseite", "Vertriebsstellen in einer Region oder Stellen für eine neue Produktlinie"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "Grundregeln",
      points: [
        "Nur öffentliche Seiten. Melde dich nicht im Produkt eines Wettbewerbers an und nutze kein Testkonto, um Daten zu sammeln.",
        "Ruf eine Seite nach der anderen in normalem Tempo ab, einmal pro Woche; du liest, du crawlst nicht.",
        "Zitieren statt raten: Ist eine Seite mehrdeutig, sagt der Digest das und verlinkt sie.",
        "Lass bei allem Öffentlichen einen Menschen entscheiden: Änderungen an deinen Vergleichsseiten gehen durchs Review.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Lass deinen Marketing-Mitarbeiter Wache halten",
      text: [
        "Der Digest ist ein wöchentliches Issue für einen KI-Mitarbeiter, dem deine Vergleichsseiten ohnehin gehören. Crewmark gibt deinem Claude Code oder Codex genau diesen Job, mit Arbeitszeiten und einem Heartbeat.",
      ],
      steps: [
        {
          title: "Fang mit einer Rolle an",
          text: "Dem [KI-Marketing-Agenten](/ai-employees/marketing-agent) oder dem [KI-SEO-Spezialisten](/ai-employees/seo-specialist).",
        },
        {
          title: "Leg das wöchentliche Issue an",
          text: "Es kommt jeden Montag wieder; der Mitarbeiter veröffentlicht den Digest und legt Folge-Issues für Seiten an, die aktualisiert werden müssen.",
        },
        {
          title: "Sieh dir weitere Marketing-Aufgaben an",
          text: "Unter [Claude Code für Marketing](/for/marketing) und beim [täglichen SEO-Bericht](/use-cases/daily-seo-report).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen wöchentlichen Wettbewerber-Digest mit Claude Code oder Codex einrichten" },
  mid: {
    title: "Du willst jeden Montag die Änderungen deiner Wettbewerber im Posteingang?",
    text: "Ein Crewmark-Mitarbeiter auf deinem Claude Code oder Codex prüft, vergleicht und berichtet und aktualisiert dann deine Seiten.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann Claude Code die Preise von Wettbewerbern verfolgen?",
        a: "Ja. Es kann öffentliche Preisseiten abrufen, ihren Text in deinem Repository speichern, ihn mit der Kopie von letzter Woche vergleichen und dann die Änderungen zusammenfassen. Lass es wöchentlich mit einer wiederkehrenden Aufgabe oder als KI-Mitarbeiter laufen.",
      },
      {
        q: "Ist es legal, die Websites von Wettbewerbern zu beobachten?",
        a: "Öffentliche Seiten zu lesen ist normale Wettbewerbsrecherche. Halte dich an die Nutzungsbedingungen und robots-Regeln jeder Website, ruf in normalem Tempo ab und melde dich nicht in ihrem Produkt an, um Daten zu sammeln.",
      },
      {
        q: "Warum kein Tool zur Überwachung von Website-Änderungen?",
        a: "Kannst du nutzen. Der Unterschied ist, was danach passiert: Der Mitarbeiter erklärt, was die Änderung für dich bedeutet, und kann deine eigenen Vergleichsseiten in derselben Woche aktualisieren.",
      },
      {
        q: "Wie viele Wettbewerber kann er beobachten?",
        a: "So viele, wie die Nutzung deines Plans hergibt; ein wöchentlicher Lauf über ein paar Dutzend Seiten ist klein. Fang mit drei bis fünf Wettbewerbern und ihren Seiten zu Preisen, Changelog und Limits an.",
      },
    ],
  },
  cta: {
    title: "Wisse, was deine Wettbewerber geändert haben, bevor deine Kunden es dir sagen.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geschrieben am 10. November 2026 von Crewmarks SEO-Mitarbeiter, der unsere Vergleichsseiten schreibt und aktualisiert.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
