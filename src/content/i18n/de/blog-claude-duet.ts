import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet: Anthropics proaktiver Agent, Warteliste, Zugang und Grenzen | Crewmark",
    description:
      "Claude Duet ist Anthropics App für einen proaktiven Agenten, seit dem 21. Oktober 2026 in der Research Preview. Was sie kann, wer sie bekommt, wie du dich auf die Warteliste setzt, was sie kostet, ihre Sicherheitsgrenzen und der Vergleich.",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Duet: was es ist, wer es bekommt und wie es funktioniert",
    lead: "Claude Duet ist eine neue App von Anthropic, in der Claude als proaktiver Agent arbeitet: Er meldet sich mit dem, was deine Aufmerksamkeit braucht, erledigt die Aufgaben, die du ihm übergibst, arbeitet weiter, wenn du weg bist, und fragt nach, bevor er in deinem Namen handelt. Am 21. Oktober 2026 startete er als Research Preview mit Warteliste für Abonnenten von Pro, Max und Ultra in den USA. Diese Anleitung zeigt, was er kann, wie du Zugang bekommst, was er kostet, welche Sicherheitsgrenzen er hat und wie er im Vergleich abschneidet.",
    cta: "Early Access anfragen",
    secondary: "So bekommst du Zugang",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Duet ist",
      text: [
        "Ein normaler Claude-Chat wartet, bis du ihn öffnest. Duet meldet sich zuerst: Er beobachtet die Apps, die du verbindest, schickt eine kurze Morgenübersicht, bleibt ruhig, bis etwas dich braucht, und schreibt dir, wenn eine Aufgabe erledigt ist oder eine Entscheidung braucht. Anthropic hat ihn für Berufstätige und Inhaber kleiner Unternehmen gebaut, auf Basis von Claude Opus 5.5.",
      ],
      points: [
        "Morgenübersicht: eine kurze tägliche Zusammenfassung des Wichtigsten aus deinen verbundenen Apps.",
        "Ein Thread: Du schreibst ihm per Text oder Sprache, wie einem Kollegen, und er führt eine einzige fortlaufende Konversation.",
        "Dein Claude-Kontext: Er nutzt Memory, Skills und verbundene Apps deines Claude-Kontos von der ersten Nachricht an.",
        "Ein eigener Cloud-Computer: Aufgaben laufen in einer virtuellen Maschine mit eigenem Browser, dein Laptop und dein Handy können also aus sein.",
        "Kleine und große Aufgaben: Meetings planen, Antworten entwerfen, unbezahlte Rechnungen nachfassen, die Gehaltsabrechnung zur Prüfung vorbereiten oder Dashboards, Prognosen, Präsentationen und Prototypen bauen.",
        "Konnektoren: mehr als 6.000 Konnektoren und Plugins aus dem Claude Marketplace, etwa Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign und Shopify.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet auf einen Blick",
      headers: ["", "Claude Duet"],
      rows: [
        ["Angekündigt", "21. Oktober 2026, als Research Preview"],
        ["Wer es bekommt", "Abonnenten von Pro, Max und Ultra in den USA, über eine Warteliste"],
        ["Team und Enterprise", "Noch nicht enthalten"],
        ["Wo", "Eigenständige Apps für iOS und Android sowie claude.ai am Computer"],
        ["Preis", "Kein eigener Preis: im Abo enthalten, mit denselben Nutzungsgrenzen wie der Rest von Claude"],
        ["Modell", "Claude Opus 5.5"],
        ["Wie oft er prüft", "Alle paar Stunden; du wählst, worüber du informiert werden willst und wie oft"],
        ["API", "Keine angekündigt"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So bekommst du Claude Duet und richtest es ein",
      steps: [
        {
          title: "Prüfe, ob dein Abo infrage kommt",
          text: "Du brauchst ein Pro-, Max- oder Ultra-Abo in den USA. Team- und Enterprise-Pläne sind noch nicht Teil der Preview.",
        },
        {
          title: "Setz dich auf die Warteliste",
          text: "Melde dich auf der Claude-Duet-Seite unter claude.com/product/claude-duet an. Anthropic schickt dir eine E-Mail, sobald Duet für dein Konto bereit ist.",
        },
        {
          title: "Öffne die App",
          text: "Installiere die eigenständige Claude-Duet-App auf iOS oder Android oder nutze sie auf claude.ai am Computer. Sie ist von der Haupt-App von Claude getrennt, teilt aber dein Konto.",
        },
        {
          title: "Verbinde die Apps, die er beobachten soll",
          text: "Apps, die du schon mit Claude verbunden hast, werden übernommen, und wenn du eine an einer Stelle abschaltest, ist sie an beiden aus. Fang mit den wenigen an, auf die es ankommt, etwa Posteingang, Kalender und Rechnungsstellung.",
        },
        {
          title: "Sag ihm, worüber du informiert werden willst",
          text: "Lege fest, was als dringend gilt und wie oft du Updates willst. Jede Prüfung im Hintergrund verbraucht die Grenzen deines Abos, daher halten weniger, dafür präzisere Regeln länger.",
        },
        {
          title: "Übergib ihm eine Aufgabe und genehmige seine Aktionen",
          text: "Schreib ihm, wie du einem Kollegen schreiben würdest. Er liest und entwirft selbstständig, zeigt dir dann die Aktion, die Empfänger und den Inhalt und wartet auf deine Genehmigung, bevor er etwas sendet, bezahlt, unterschreibt oder löscht.",
        },
      ],
      source: { label: "Quelle: Anthropics Ankündigung zu Claude Duet", href: announcement },
    },
    {
      kind: "text",
      title: "Sicherheit, Datenschutz und Grenzen",
      points: [
        "Genehmigungen: Bevor er eine sensible Nachricht sendet, bezahlt oder löscht, zeigt er dir genau, was er tun wird, und wartet. Eine separate Prüfung außerhalb des Modells beurteilt zusätzlich, ob jede Aktion zu deiner Absicht passt.",
        "Nie erlaubt, auch nicht mit Genehmigung: Wertpapiere handeln, Geld zwischen Konten verschieben oder das Konto einer anderen Person nutzen.",
        "Passwörter: Er sieht nie deine Passwörter, Cookies oder Anmelde-Tokens. Käufe laufen über eine Einmalkarte, die auf diesen Händler und diesen Betrag begrenzt ist.",
        "Sensible Daten: Ein Klassifikator blockiert das Weitergeben von Kartennummern, Kontonummern und amtlichen Ausweisnummern; Gesundheits- und Finanzdaten werden nur geteilt, wenn du darum bittest.",
        "Memory: Er behält deinen Konversationsverlauf und sein Memory, bis du sie löschst oder zurücksetzt. Das Trennen einer App stoppt neuen Zugriff, aber was er schon gelernt hat, bleibt, bis du sein Memory zurücksetzt.",
        "Frühe Preview: Anthropic sagt, er könne einen Thread falsch verstehen, die Dringlichkeit falsch einschätzen oder etwas verpassen, das zwischen zwei Prüfungen eintrifft, und er sei bei privaten Erledigungen schwächer als bei Arbeitsaufgaben.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs. ChatGPT dots vs. Crewmark",
      text: [
        "Alle drei sind Agenten, die weiterarbeiten, ohne dass du im Chat bist. Duet und [ChatGPT dots](/blog/chatgpt-dots) sind Assistenten für deine Business-Apps, die in der Cloud ihres Herstellers laufen; Crewmark weckt den Coding-Agenten, den du schon nutzt, etwa Claude Code oder Codex, per Heartbeat, damit er ein Board mit Issues abarbeitet.",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Läuft auf", "Anthropics Cloud-Computer", "OpenAIs Cloud-Computer", "Deinem Computer, in Claude Code, Codex, DeepSeek Harness oder OpenCode"],
        ["Startet die Arbeit", "Deine Nachrichten und Prüfungen alle paar Stunden", "Deine Nachrichten, Zeitpläne und eigene Recherche", "Ein Heartbeat alle 15 bis 60 Minuten in den Arbeitszeiten"],
        ["Am besten bei", "Posteingang, Kalender, Rechnungen, Übersichten und Dashboards", "Recherche und Aufgaben in deinen verbundenen Apps", "Code, SEO und andere Arbeit in einem Repository, ein Mitarbeiter pro Rolle"],
        ["Arbeitswarteschlange", "Ein fortlaufender Thread", "Konversations-Threads und Scheduled", "Issues auf einem Kanban-Board"],
        ["Kosten", "In Pro, Max und Ultra enthalten (USA)", "Pro- und Business-Premium-Pläne", "Early Access; läuft mit dem Agenten und Plan, die du schon hast"],
        ["Status", "Research Preview, Warteliste", "Wird schrittweise ausgerollt", "Early Access"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Dieselbe proaktive Arbeitsweise für Claude Code?",
      text: [
        "Duet beobachtet deinen Posteingang und deine Business-Apps; Anthropic beschreibt nicht, dass er in deinem Code-Repository arbeitet. Crewmark bringt dieselbe Idee zu Coding-Agenten: Es gibt einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode eine Rolle, ein Ziel und Arbeitszeiten und weckt sie per Heartbeat in derselben Konversation.",
      ],
      steps: [
        {
          title: "Aus einer Session einen Mitarbeiter machen",
          text: "Wähle eine Rolle wie Software-Entwickler oder SEO-Spezialist, formuliere ihr Ziel als Zahl und führe den Einrichtungsbefehl in Claude Code aus.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "In seinen Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten auf und macht dort weiter, wo er aufgehört hat; siehe [so machst du Claude Code proaktiv](/proactive-claude-code).",
        },
        {
          title: "Issues zuweisen und auf seine Nachrichten antworten",
          text: "Leg die Arbeit auf das Board; der Mitarbeiter nimmt sie, kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht. Lies [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Duet bekommen und einrichten" },
  mid: {
    title: "Gefällt dir die Idee eines Agenten, der sich zuerst meldet?",
    text: "Crewmark macht das für Claude Code und Codex: ein Heartbeat, Arbeitszeiten und ein Board mit Issues, mit dem Plan, für den du schon zahlst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Duet",
    items: [
      {
        q: "Was ist Claude Duet?",
        a: "Eine App von Anthropic, seit dem 21. Oktober 2026 in der Research Preview, in der Claude als proaktiver Agent arbeitet. Sie beobachtet deine verbundenen Apps, schickt eine Morgenübersicht, erledigt Aufgaben in einem eigenen Cloud-Computer und holt deine Genehmigung ein, bevor sie in deinem Namen handelt.",
      },
      {
        q: "Wann wurde Claude Duet veröffentlicht?",
        a: "Anthropic hat die Research Preview am 21. Oktober 2026 mit einer Warteliste geöffnet. Der Zugang wird schrittweise freigegeben, und Anthropic schickt dir eine E-Mail, sobald er für dein Konto bereit ist.",
      },
      {
        q: "Wie bekomme ich Zugang zu Claude Duet?",
        a: "Setz dich auf claude.com/product/claude-duet mit einem Pro-, Max- oder Ultra-Abo in den USA auf die Warteliste. Danach nutzt du die Claude-Duet-App auf iOS oder Android oder claude.ai am Computer.",
      },
      {
        q: "Gibt es Claude Duet für Team- oder Enterprise-Pläne?",
        a: "Noch nicht. Auf Anthropics Produktseite steht, dass Team- und Enterprise-Pläne nicht in der Preview enthalten sind.",
      },
      {
        q: "Was kostet Claude Duet?",
        a: "Es gibt keinen eigenen Preis. Es ist in Pro, Max und Ultra enthalten und nutzt dieselben Nutzungsgrenzen wie der Rest von Claude; Prüfungen im Hintergrund und größere Aufgaben verbrauchen mehr davon.",
      },
      {
        q: "Ist Claude Duet sicher?",
        a: "Es fragt nach, bevor es sendet, bezahlt, unterschreibt oder löscht, sieht nie deine Passwörter oder Anmelde-Tokens, nutzt für Käufe Einmalkarten und kann auch mit Genehmigung weder Wertpapiere handeln noch Geld zwischen Konten verschieben. Es ist eine frühe Preview, daher kann es die Dringlichkeit immer noch falsch einschätzen.",
      },
      {
        q: "Kann Claude Duet Code in meinem Repository schreiben?",
        a: "Es kann in seinem eigenen Cloud-Computer Prototypen und Web-Apps bauen, aber Anthropic stellt es nicht als Coding-Agenten für dein Repository vor. Dafür ist Claude Code das Werkzeug, und Crewmark macht Claude-Code-Sessions mit einem Heartbeat und einem Board mit Issues proaktiv.",
      },
    ],
  },
  cta: {
    title: "Mach auch deine Claude-Code-Sessions proaktiv.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 5. November 2026 mit Anthropics Ankündigung zu Claude Duet, der Produktseite und dem Sicherheitsartikel abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude, Claude Duet und Claude Code sind Marken von Anthropic, ChatGPT von OpenAI.",
};
