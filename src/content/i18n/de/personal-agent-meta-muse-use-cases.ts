import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/meta-muse-use-cases; the English master is
// src/content/personal-agents/meta-muse-use-cases.ts.

const daily = `Schick mir jeden Werktag um 7 Uhr ein Briefing: meine heutigen Termine,
die drei E-Mails, um die ich mich zuerst kümmern muss, und alles, was diese Woche fällig ist.

Liste jeden Freitag um 16 Uhr auf, was ich diese Woche zugesagt und noch nicht erledigt habe,
und entwirf die Follow-up-E-Mails zu meiner Freigabe.`;

const marketing = `Prüf jeden Montag um 9 Uhr die Preisseiten von [Wettbewerber 1],
[Wettbewerber 2] und [Wettbewerber 3]. Sag mir, was sich seit letzter Woche geändert hat,
mit Links, und speichere einen kurzen Bericht in meiner Library.

Recherchiere, welche Fragen Leute in Foren und Suchergebnissen zu [deinem Thema] stellen.
Gruppiere sie zu 10 Artikelideen mit je einem Arbeitstitel.

Entwirf drei Versionen einer Launch-E-Mail für [Produkt] in meinem Ton,
auf Basis der Notizen in dieser Datei. Verschick nichts.`;

const money = `Finde heraus, was mein Honda Civic von 2019 mit 60.000 Meilen wert ist,
entwirf die Anzeige und sag mir, welche Angebote eine Antwort wert sind.

Sieh dir meine letzten drei Internetrechnungen an, finde einen günstigeren Tarif bei meinem Anbieter
oder einem Konkurrenten und entwirf die E-Mail, in der ich sie bitte, mitzuziehen.`;

export const copy: GuideCopy = {
  meta: {
    title: "Anwendungsfälle für Meta Muse: Prompts, Routinen und Ideen",
    description:
      "Wofür du Meta Muse nutzen kannst, mit Prompts zum Kopieren: tägliche Routinen und wiederkehrende Aufgaben, Marketing- und SEO-Recherche, Verwaltung im kleinen Unternehmen, Geld sparen, Reisen und Besorgungen, dazu Tipps und was Muse nicht tut.",
  },
  breadcrumb: "Anwendungsfälle für Meta Muse",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Meta Muse",
    title: "Anwendungsfälle für Meta Muse: was du ihm übergibst, mit Prompts zum Kopieren",
    lead: "Muse, Metas persönlicher Agent, kann mehr als antworten: Er schickt E-Mails, bucht Reisen, füllt Formulare aus, kauft mit deiner Freigabe ein, erstellt Dateien und erledigt wiederkehrende Aufgaben, während die App geschlossen ist. Schwierig ist, zu wissen, worum man ihn bitten soll. Das sind die Anwendungsfälle, auf die Meta selbst verweist, und die, die sich am besten für eine tägliche Routine, Marketing-Recherche und die Verwaltung im kleinen Unternehmen eignen, jeweils mit einem Prompt zum Starten, dazu, wofür Muse nicht gebaut ist.",
    cta: "Loslegen",
    secondary: "Tägliche Routinen",
    secondaryHref: "#daily",
  },
  sections: [
    {
      kind: "text",
      title: "Worin Muse gut ist",
      text: [
        "Metas eigene Beispiele sind persönlich und praktisch: ein Auto teurer verkaufen, eine Rechnung senken, einen Trainingsplan anpassen, aus einem gespeicherten Rezept-Reel eine Einkaufsliste machen, ein Abendessen rund um die Ernährungseinschränkungen von Freunden planen. Sie haben drei Dinge gemeinsam, und die besten Anwendungsfälle auch.",
      ],
      points: [
        "Ein Ziel, keine einzelne Antwort: Muse macht daraus einen Plan und arbeitet im Hintergrund weiter daran.",
        "Arbeit im Web und in deinen Apps: E-Mail, Formulare, Buchungen und Checkout, aus seinem eigenen Cloud-Browser.",
        "Ein Punkt, an dem du entscheidest: Vor dem Senden oder Kaufen holt er sich deine Freigabe, sodass du bei allem Wichtigen das Sagen behältst.",
      ],
    },
    {
      kind: "steps",
      id: "daily",
      title: "Tägliche Routinen mit Muse",
      text: [
        "Muse erledigt wiederkehrende Aufgaben, die du anlegst, indem du darum bittest. Laut Metas Hilfe-Center wiederholen sie sich, bis du sie abbrichst, richten sich nach deiner Zeitzone und kommen als Nachrichten in deiner Unterhaltung an.",
      ],
      steps: [
        {
          title: "Leg die Routine in einer Nachricht fest",
          text: "Sag, was zu tun ist, wie oft und wann, und was du zurückhaben willst. Muse bestätigt den Zeitplan, bevor er ihn speichert.",
          code: daily,
        },
        {
          title: "Prüf, was geplant ist",
          text: "Frag „Welche Erinnerungen habe ich?“ oder tippe oben auf das Assistant-Symbol und öffne Upcoming.",
        },
        {
          title: "Pass sie nach und nach an",
          text: "Sag Muse, welche Aufgabe er ändern, verschieben oder abbrechen soll, zum Beispiel „Verschieb meinen Freitags-Rückblick auf Donnerstag 15 Uhr“.",
        },
      ],
    },
    {
      kind: "steps",
      id: "marketing",
      title: "Meta Muse für Marketing und SEO",
      text: [
        "Muse ist ein persönlicher Agent, keine Marketing-Plattform, aber Recherche und erste Entwürfe liegen ihm gut: Er kann im Web suchen, vergleichen, zusammenfassen und Dateien in deine Library schreiben, auf Wunsch nach Zeitplan. Das Veröffentlichen behältst du selbst in der Hand.",
      ],
      steps: [
        {
          title: "Beobachte jede Woche die Konkurrenz",
          text: "Gib ihm die zu prüfenden Seiten und den Tag dafür; frag nach den Änderungen, mit Links.",
          code: marketing,
        },
        {
          title: "Mach aus Fragen Content-Ideen",
          text: "Bitte ihn, die Fragen zu sammeln, die Leute zu deinem Thema stellen, und sie zu Artikelideen zu gruppieren. Prüf die Ideen mit einem Keyword-Tool, bevor du schreibst; Muse zeigt keine Suchvolumen.",
        },
        {
          title: "Erst entwerfen, dann freigeben",
          text: "Lass ihn E-Mails, Posts oder Briefings aus deinen Notizen in deinem Ton entwerfen und nichts ohne dich verschicken. Meta sagt nicht, dass Muse für dich in sozialen Netzwerken posten kann.",
        },
      ],
    },
    {
      kind: "text",
      id: "small-business",
      title: "Meta Muse für ein kleines Unternehmen",
      points: [
        "Posteingang sortieren: eine morgendliche Liste dessen, was dich braucht, mit Entwürfen für den Rest. Bei E-Mail wählst du nur Lesen oder Lesen und Senden.",
        "Lieferanten und Preise prüfen: Angebote vergleichen, einen Preis beobachten und dir sagen, wann er fällt.",
        "Formulare und Buchungen: Anmeldungen, Anträge und Reservierungen ausfüllen und vor dem Absenden anhalten, wenn du ihn darum bittest.",
        "Einkäufe: Muse bezahlt über Link by Stripe mit einer Einmalkarte und fragt vor dem Kauf.",
        "Dokumente: Briefings, Vergleichstabellen und Berichte, gespeichert im Tab Library.",
        "Bedenke, dass es ein Werkzeug für ein persönliches Konto ist: das Meta-Konto einer Person, kein gemeinsamer Team-Workspace.",
      ],
    },
    {
      kind: "steps",
      id: "money",
      title: "Mit Muse Geld sparen (oder verdienen)",
      text: [
        "Zwei von Metas Launch-Beispielen drehen sich um Geld: ein Auto teurer verkaufen und eine Rechnung senken. Beides funktioniert, weil Muse recherchieren, entwerfen und verhandeln kann und sich mit dir abstimmt, bevor er sich festlegt.",
      ],
      steps: [
        {
          title: "Verkauf etwas teurer",
          text: "Bitte ihn, den Preis des Artikels zu ermitteln, die Anzeige zu entwerfen und die Angebote zu sortieren.",
          code: money,
        },
        {
          title: "Senk eine Rechnung",
          text: "Gib ihm deinen aktuellen Tarif und bitte ihn, einen besseren zu finden und die Anfrage zu entwerfen.",
        },
        {
          title: "Beobachte Preise",
          text: "Bitte ihn, den Preis eines Produkts, Flugs oder Hotels nach Zeitplan zu prüfen und dir Bescheid zu geben, wenn er unter einen bestimmten Betrag fällt.",
        },
      ],
    },
    {
      kind: "table",
      id: "more",
      title: "Weitere Anwendungsfälle für Meta Muse",
      headers: ["Anwendungsfall", "Probier es mit"],
      rows: [
        ["Reisen", "„Such drei Flug- und Hoteloptionen für [Daten] und buch nichts, bis ich eine ausgewählt habe.“"],
        ["Besorgungen", "„Mach aus diesem gespeicherten Rezept-Reel eine Einkaufsliste für vier Personen.“"],
        ["Events", "„Plan ein Abendessen für sechs am Samstag; denk daran, dass Sam Vegetarier ist; entwirf die Einladungen.“"],
        ["Gesundheit und Fitness", "„Pass meinen Laufplan an; diesen Monat kann ich nur drei Tage pro Woche trainieren.“"],
        ["Haushalt", "„Finde einen gut bewerteten Klempner in meiner Nähe, der diese Woche kommen kann, und entwirf die Nachricht.“"],
        ["Lernen", "„Frag mich jeden Abend um 20 Uhr fünf spanische Redewendungen aus dieser Woche ab.“"],
      ],
    },
    {
      kind: "text",
      id: "tips",
      title: "Tipps für bessere Ergebnisse",
      points: [
        "Beschreib das Ergebnis und die Grenzen (Budget, Daten, was er nicht tun soll), nicht jeden Schritt.",
        "Sag, wo er aufhören soll: „entwerfen, aber nicht senden“, „vergleichen, aber nicht buchen“.",
        "Nenne Vorlieben einmal; Muse merkt sie sich über Unterhaltungen hinweg, und du kannst ihm sagen, dass er etwas vergessen soll.",
        "Verbinde nur die Apps, die eine Aufgabe braucht, und wähl für E-Mail nur Lesezugriff, wenn Entwürfe reichen.",
        "Behalte das Wochenlimit im Blick: Lange Recherchen verbrauchen mehr Tokens. Power ($20 im Monat) hat 500M Tokens pro Woche.",
        "Prüf das Protokoll darüber, was er getan hat und vorhat; Meta warnt, dass er ungenau sein oder unerwartete Aktionen ausführen kann.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Wenn Marketing ein Job ist und keine Besorgung",
      text: [
        "Ein wöchentlicher Blick auf die Konkurrenz ist eine Besorgung. Suchtraffic auszubauen ist ein Job: Keyword-Recherche, Seiten, Indexierung und ein Bericht gegen ein Ziel, jeden Tag. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter für genau so einen Job, mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat.",
      ],
      steps: [
        {
          title: "Stell eine Marketing-Rolle ein",
          text: "Fang mit dem [KI-SEO-Spezialisten](/ai-employees/seo-specialist) oder dem [KI-Marketing-Agenten](/ai-employees/marketing-agent) an; jeder kommt mit Rollenbeschreibung, Ziel und Tagesablauf.",
        },
        {
          title: "Gib ihm die Skills",
          text: "Unsere Open-Source-[Marketing-Skills](/skills) sind das, was unser eigener SEO-Agent jeden Tag nutzt.",
        },
        {
          title: "Lies seinen Tagesbericht",
          text: "Er wacht per Heartbeat auf, arbeitet ein Board ab und schreibt dir, wenn er eine Entscheidung braucht. Für die persönliche Seite siehe den [Guide zu Meta Muse](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "daily", name: "Eine tägliche Routine in Meta Muse einrichten" },
  mid: {
    title: "Du willst Marketing, das jeden Tag gemacht wird, nicht nur recherchiert?",
    text: "Die KI-Mitarbeiter von Crewmark für SEO und Marketing arbeiten per Heartbeat ein Board ab und berichten zurück.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Wofür eignet sich Meta Muse am besten?",
        a: "Für Ziele, die mehrere Schritte im Web und in deinen Apps brauchen, mit einem Punkt, an dem du entscheidest: etwas verkaufen, eine Rechnung senken, eine Reise oder ein Event planen, den Posteingang sortieren, und wiederkehrende Prüfungen wie ein tägliches Briefing oder eine wöchentliche Preisbeobachtung.",
      },
      {
        q: "Kann Meta Muse jeden Tag eine Aufgabe erledigen?",
        a: "Ja. Bitte um eine wiederkehrende Aufgabe mit Uhrzeit, etwa „Schick mir jeden Werktag um 7 Uhr ein Briefing“. Sie wiederholt sich, bis du sie abbrichst, und du findest sie unter dem Assistant-Symbol bei Upcoming.",
      },
      {
        q: "Kann ich Meta Muse für Marketing oder SEO nutzen?",
        a: "Für Recherche und Entwürfe ja: Konkurrenz-Checks, Content-Ideen, Entwürfe für E-Mails und Posts, als Dateien gespeichert. Er zeigt keine Suchvolumen, und Meta sagt nicht, dass er in sozialen Netzwerken posten kann, also bleibt das Veröffentlichen bei dir.",
      },
      {
        q: "Taugt Meta Muse für ein kleines Unternehmen?",
        a: "Für die Verwaltung einer Person, etwa Posteingang sortieren, Angebote, Formulare, Buchungen und Einkäufe mit Freigabe. Er läuft auf einem persönlichen Meta-Konto statt in einem gemeinsamen Team-Workspace.",
      },
      {
        q: "Kann ich mit Meta Muse Geld verdienen?",
        a: "Er kann helfen: Zu Metas eigenen Beispielen gehören, ein Auto teurer zu verkaufen und eine Rechnung zu senken. Er recherchiert, entwirft und verhandelt und stimmt sich mit dir ab, bevor er sich festlegt.",
      },
      {
        q: "Was sind gute Prompts für Meta Muse?",
        a: "Solche, die Ergebnis, Grenzen und Haltepunkt nennen, etwa „Such drei Flüge unter $400 für diese Daten und frag mich vor dem Buchen“. Die Prompts auf dieser Seite sind ein Ausgangspunkt.",
      },
    ],
  },
  cta: {
    title: "Besorgungen für Muse. Ein Job für einen KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit Metas Ankündigung von Muse und den Artikeln im Meta-Hilfe-Center abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Meta, das es auch nicht unterstützt. Muse und Meta sind Marken von Meta. Die Prompts auf dieser Seite sind Beispiele von Crewmark, nicht von Meta.",
};
