import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/meta-muse; the English master is src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `Schick mir jeden Werktag um 7 Uhr ein kurzes Briefing: die heutigen Termine,
alles Dringende in meinem Posteingang und das Wetter.

Such drei Flüge nach Chicago für das erste Dezemberwochenende unter $400,
vergleich sie und frag mich, bevor du etwas buchst.

Ich will mein Auto verkaufen. Finde heraus, was es wert ist, entwirf die Anzeige
und sag mir, welche Angebote eine Antwort wert sind.`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse: Was es ist, wie man es nutzt und was es kostet",
    description:
      "Metas persönlicher KI-Agent Muse erklärt: was er kann, wie du ihn bekommst und nutzt, die Pläne Free, Power ($20) und Maximum ($100), geplante Aufgaben, verbundene Apps und Zahlungen, Datenschutzeinstellungen und der Vergleich mit anderen.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Meta Muse",
    title: "Meta Muse: was Metas persönlicher Agent kann, wie du ihn nutzt und was er kostet",
    lead: "Muse ist Metas persönlicher KI-Agent, gestartet in den USA am 8. September 2026. Laut Meta beantwortet er nicht nur Fragen, sondern erledigt die Arbeit tatsächlich: Er schickt E-Mails, bucht Reisen, füllt Formulare aus und verhandelt für dich, arbeitet weiter, nachdem du die App geschlossen hast, und fragt vor allem Wichtigen nach, etwa bevor er eine E-Mail sendet oder etwas kauft. Dieser Guide zeigt, wie du ihn bekommst und nutzt, erklärt die Pläne und Token-Limits, geplante Aufgaben und Datenschutzeinstellungen und vergleicht ihn mit Grok Bot, ChatGPT dots und Claude.",
    cta: "Loslegen",
    secondary: "So nutzt du ihn",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Meta Muse ist",
      text: [
        "Muse läuft auf Muse Spark, Metas Modell, in einer eigenen Cloud-Maschine, die Meta Muse Secure VM nennt. Er macht aus Zielen Pläne, arbeitet sie im Hintergrund ab und meldet sich, wenn sich etwas ändert oder er deine Freigabe braucht.",
      ],
      points: [
        "Er handelt: schickt E-Mails, bucht Reisen, öffnet einen Browser, füllt Formulare aus und verhandelt. Metas Beispiele sind unter anderem, ein Auto teurer zu verkaufen, eine Rechnung zu senken und einen Trainingsplan anzupassen.",
        "Er erinnert sich: daran, was dir wichtig ist, aus Details, die du einmal erwähnst, und macht ungefragt Vorschläge, etwa aus einem gespeicherten Instagram-Rezept-Reel eine Einkaufsliste.",
        "Er kauft sicher: Der Checkout läuft über Link by Stripe, dessen Agent-Wallet eine Einmalkarte erstellt, sodass Muse deine echte Kartennummer nie sieht.",
        "Er ist da, wo du bist: in der Muse-App, im Web unter muse.ai und in WhatsApp; als Nächstes kommen Metas KI-Brillen.",
        "Er ist nicht dasselbe wie Meta AI, der Assistent in Facebook, Instagram und WhatsApp, und auch nicht Muse Code, Metas Produkt für Entwickler.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preise von Meta Muse: Free, Power und Maximum",
      text: [
        "Laut Metas Hilfe-Center am 10. November 2026. Muse und seine Abos sind in einer begrenzten Testphase und noch nicht überall verfügbar.",
      ],
      headers: ["Plan", "Preis", "Wöchentliche Nutzung"],
      rows: [
        ["Free", "$0", "Ein kostenloses wöchentliches Nutzungslimit (Meta veröffentlicht seine Größe nicht); warte, bis es zurückgesetzt wird, oder upgrade"],
        ["Power", "$20 im Monat", "500M Muse-Tokens pro Woche"],
        ["Maximum", "$100 im Monat", "3B Muse-Tokens pro Woche"],
        ["Zusätzliche Tokens", "Separat erhältlich", "Kauf mehr zusätzlich zu deinem Wochenkontingent"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So bekommst und nutzt du Meta Muse",
      text: [
        "Du musst 18 Jahre alt oder an deinem Wohnort volljährig sein, dich dort befinden, wo Muse verfügbar ist (gestartet ist er in den USA), und dich mit einem Meta-Konto anmelden. Eins anlegen kannst du mit Facebook, Instagram, einer E-Mail-Adresse oder einer Telefonnummer.",
      ],
      steps: [
        {
          title: "Lade die App herunter oder öffne muse.ai",
          text: "Hol dir die Muse-App für iOS oder Android oder melde dich auf muse.ai an. Meta nennt keine App für Windows oder Mac, also nutze am Computer muse.ai im Browser.",
        },
        {
          title: "Sag ihm, was du brauchst",
          text: "Muse öffnet sich im Tab Chat. Beschreib das Ergebnis, nicht die Schritte; vielleicht stellt er zuerst ein paar Fragen. Du kannst Nachfragen schicken, ohne zu warten und ohne den Kontext zu wiederholen.",
          code: prompts,
        },
        {
          title: "Verbinde die Apps, die er braucht",
          text: "Leg fest, welche Apps Muse nutzen darf und wie viel Zugriff jede bekommt; bei E-Mail nur Lesen oder Lesen und Senden. Demnächst: Shop Pay beim Checkout und 1Password, damit er deine bestehenden Logins nutzen kann.",
        },
        {
          title: "Freigeben, prüfen und deine Dateien finden",
          text: "Muse fragt vor heiklen Aktionen wie dem Senden einer E-Mail oder einem Kauf und führt ein Protokoll darüber, was er getan hat und vorhat. Dateien, die er erstellt, landen im Tab Library.",
        },
      ],
      source: { label: "Quelle: Metas Ankündigung von Muse", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Erinnerungen und geplante Aufgaben in Muse",
      text: [
        "Muse hat keinen eigenen Bildschirm für Zeitpläne: Du legst Erinnerungen und wiederkehrende Aufgaben an, indem du darum bittest, und Metas Hilfe-Center erklärt, wie sie sich verhalten.",
      ],
      points: [
        "Einmalig: Sag Muse, woran er dich wann erinnern soll; er bestätigt die genaue Uhrzeit.",
        "Wiederkehrend: Beschreib die Aufgabe und wie oft, zum Beispiel „Erinnere mich jeden Montag um 9 Uhr daran, meinen Stundenzettel einzureichen“. Sie läuft, bis du sie abbrichst, und Muse schreibt dir jedes Mal.",
        "Finden: Frag „Welche Erinnerungen habe ich?“ oder tippe oben auf das Assistant-Symbol und öffne Upcoming.",
        "Ändern oder abbrechen: Sag, welche und was sich ändern soll, etwa eine Montagserinnerung auf Dienstag zu verschieben.",
        "Zeiten richten sich nach deiner Zeitzone; wählst du eine Zeit, die schon vorbei ist, schlägt Muse eine andere vor.",
        "Mehr Ideen für tägliche Routinen findest du unter [Anwendungsfälle für Meta Muse](/personal-agent/meta-muse-use-cases).",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "Datenschutz: wie du widersprichst und was Meta sehen kann",
      points: [
        "Der Muse jeder Person läuft in einer eigenen Muse Secure VM; die Agenten anderer Leute kommen nicht an sie heran.",
        "Ein separater Agent, Sentinel, muss alles freigeben, was Muse ins Internet schickt, und fragt dich, wenn nötig.",
        "Muse kann deine Passwörter und Zahlungsmittel nicht sehen; geteilte Logins kommen in einen sicheren Speicher.",
        "Deine Unterhaltungen und VM-Daten werden nicht mit Metas Werbesystemen geteilt.",
        "Du kannst der Nutzung deiner Interaktionen zum Training von Metas KI widersprechen, jede App ändern oder trennen und Muse sagen, dass er etwas vergessen soll.",
        "Meta plant für später in diesem Jahr eine Muse Confidential VM, verschlüsselt mit einem Schlüssel, den nur du hast.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse nicht verfügbar oder funktioniert nicht?",
      points: [
        "Außerhalb der USA: Muse ist in den USA gestartet und anderswo in einer begrenzten Testphase; laut Meta ist er noch nicht überall verfügbar.",
        "Unter 18: Du musst 18 Jahre alt oder in deinem Land volljährig sein.",
        "Kostenloses Limit erreicht: Warte, bis das Wochenlimit zurückgesetzt wird, upgrade auf Power oder Maximum oder kauf zusätzliche Tokens.",
        "Kein Sprachmodus: Sprache gibt es nur in manchen Ländern, und sie braucht Mikrofonzugriff, den du unter Settings > Voice and Avatar ändern kannst.",
        "Er hat etwas Unerwartetes getan: Meta warnt, dass Muse ungenau sein oder unerwartete Aktionen ausführen kann; lass also Freigaben für Senden und Kaufen eingeschaltet und prüf das Protokoll.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs. Grok Bot, ChatGPT dots und Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Hersteller", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["Gemacht für", "Alltagsaufgaben und Lebensorganisation", "Arbeit: Teams von Bots in deinen Apps", "Langfristige Ziele innerhalb von ChatGPT", "Ein proaktiver Claude, der sich meldet"],
        ["Günstigster Einstieg", "Kostenlos mit Wochenlimit", "Kostenloses Testguthaben; ab X Premium", "ChatGPT Pro", "Claude Pro, über Warteliste"],
        ["Zeitpläne", "Erinnerungen und wiederkehrende Aufgaben", "Routinen mit Zeitplänen, Slack, E-Mail und Webhooks", "Geplante Erinnerungen und wiederkehrende Prüfungen", "Kommt mit dem zu dir, was Aufmerksamkeit braucht"],
        ["Guide", "Diese Seite", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Muse erledigt deine Besorgungen. Wer erledigt deinen Backlog?",
      text: [
        "Muse ist für die Lebensorganisation gebaut. Wenn die Arbeit, die du abgeben willst, in einem Code-Repository oder einem Marketingplan steckt, macht Crewmark aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der das nächste Issue von einem Board nimmt und dir schreibt, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Fang mit einer [Rolle als KI-Mitarbeiter](/ai-employees) an, etwa SEO-Spezialist oder Social-Media-Manager.",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Er wacht in den Stunden, die du festlegst, alle 15 bis 240 Minuten auf. Siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Vergleiche persönliche Agents",
          text: "Siehe [persönliche KI-Agenten im Vergleich](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mit Meta Muse loslegen" },
  mid: {
    title: "Du willst einen Agenten, der deinen Arbeits-Backlog abarbeitet?",
    text: "Crewmark-Mitarbeiter wachen per Heartbeat auf und nehmen das nächste Issue von einem Board, mit dem Claude-Code- oder Codex-Plan, den du hast.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist Meta Muse?",
        a: "Metas persönlicher KI-Agent, gestartet in den USA am 8. September 2026 und angetrieben vom Modell Muse Spark. Er schickt E-Mails, bucht Reisen, füllt Formulare aus und kauft für dich ein, von seiner eigenen Cloud-Maschine aus, und fragt vor heiklen Aktionen nach.",
      },
      {
        q: "Ist Meta Muse kostenlos?",
        a: "Ja, mit einem wöchentlichen Nutzungslimit. Power kostet $20 im Monat für 500M Muse-Tokens pro Woche, Maximum $100 im Monat für 3B, und du kannst zusätzliche Tokens kaufen.",
      },
      {
        q: "Wie bekomme ich Meta Muse?",
        a: "Lade die Muse-App für iOS oder Android herunter oder geh auf muse.ai und melde dich mit einem Meta-Konto an. Du musst 18 oder volljährig sein und dich dort befinden, wo Muse verfügbar ist; gestartet ist er in den USA.",
      },
      {
        q: "Kann ich Meta Muse unter Windows oder auf dem Mac nutzen?",
        a: "Meta nennt die Apps für iOS und Android und muse.ai. Auf einem Windows-PC oder Mac nutzt du muse.ai im Browser.",
      },
      {
        q: "Kann Muse Aufgaben nach Zeitplan erledigen?",
        a: "Ja. Bitte ihn um eine wiederkehrende Aufgabe, etwa „Erinnere mich jeden Montag um 9 Uhr daran, meinen Stundenzettel einzureichen“; sie läuft, bis du sie abbrichst, und du findest sie unter dem Assistant-Symbol bei Upcoming.",
      },
      {
        q: "Nutzt Meta meine Muse-Unterhaltungen für Werbung?",
        a: "Laut Meta werden Unterhaltungen und VM-Daten nicht mit seinen Werbesystemen geteilt. Du kannst außerdem widersprechen, dass deine Interaktionen zum Training von Metas KI-Modellen genutzt werden.",
      },
    ],
  },
  cta: {
    title: "Persönliche Agents erledigen Besorgungen. KI-Mitarbeiter erledigen deinen Backlog.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit Metas Ankündigung von Muse und den Artikeln im Meta-Hilfe-Center abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Meta, xAI, OpenAI oder Anthropic, die es auch nicht unterstützen. Muse, Meta und WhatsApp sind Marken von Meta.",
};
