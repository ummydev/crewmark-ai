import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/grok-bot; the English master is src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: Was es ist, wie man es nutzt, Pläne und Einrichtung",
    description:
      "xAIs Grok Bot erklärt: was der ständig aktive Agent kann, welche Pläne von X, SuperGrok und Cursor ihn enthalten, die kostenlose Testphase, der Download für Mac, Windows, Linux und Smartphones, die Einrichtung deines ersten Bots und Anwendungsfälle.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Grok Bot",
    title: "Grok Bot: was xAIs persönlicher Agent kann und wie du ihn nutzt",
    lead: "Grok Bot ist xAIs ständig aktiver Agent, den xAI als proaktiven KI-Teamkollegen bezeichnet. Jeder Bot arbeitet auf einem Cloud-Computer mit Browser, Dateien und Terminal, meldet sich bei den Apps an, die du nutzt, merkt sich, wie du Dinge erledigt haben willst, und arbeitet weiter, wenn du den Laptop zuklappst. Er startete im August 2026 als frühe Beta. Dieser Guide zeigt, was er kann, welche Pläne ihn enthalten, wie du deinen ersten Bot einrichtest, wie Routinen und Freigaben funktionieren und wofür Leute ihn nutzen.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Grok Bot ist",
      text: [
        "Grok Bot ist weder der Grok-Chatbot noch der Account @grok auf X. Er ist ein Agent mit eigenem Computer: Er kann Apps und Websites bedienen wie ein Mensch, Code schreiben und ausführen und mehrstufige Aufgaben erledigen, etwa eine Präsentation bauen, eine Kampagne durchführen, eine Reservierung buchen oder einen Kalender synchron halten.",
      ],
      points: [
        "Ein Cloud-Computer: Deine Bots teilen sich eine dauerhafte Maschine mit Browser, Dateisystem und Terminal. Jeder Bot hat seinen eigenen Bildschirm, und du kannst jedem live zusehen.",
        "Mehrere Bots, ein Team: Gib jedem Bot eine Aufgabe; sie können sich Nachrichten schicken und Arbeit übergeben, und dein erster Bot kann über die anderen berichten.",
        "Apps: Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub und mehr, dazu jeder MCP-Server und jede API. Er nutzt dieselben MCP-Server, Plugins und Skills wie Cursor.",
        "Gedächtnis: Jeder Bot führt eigene Notizen zu deinen Vorlieben und ein datiertes Arbeitsprotokoll; ein paar Fakten, etwa dein Name und deine Zeitzone, teilen sich alle deine Bots.",
        "Routinen: Bots erledigen Aufgaben nach Zeitplan oder wenn etwas passiert, etwa eine Erwähnung in Slack oder ein Webhook. Siehe [Grok-Bot-Routinen](/personal-agent/grok-bot-routines).",
        "Du erreichst ihn am Desktop, auf dem Smartphone, in Slack und auf X, per Text oder per Sprache.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Welche Pläne Grok Bot enthalten",
      text: [
        "Grok Bot läuft über ein Cursor-Konto. Das sind die Pläne, die ihn enthalten, laut Cursors Seite zu den Grok-Bot-Plänen; weder xAI noch Cursor nennen einen eigenen Preis oder eine wöchentliche Nutzung für Grok Bot in Zahlen.",
      ],
      headers: ["Plan", "Grok Bot", "Nutzung"],
      rows: [
        ["The X Subscription: Premium, Super, Ultra", "Enthalten, als Einzel- oder Team-Platz", "Gemeinsames Wochenkontingent, größer bei Super und Ultra; zusätzliche Nutzung aus Prepaid-Guthaben"],
        ["The X Subscription: Plus, Free", "Nicht enthalten", "-"],
        ["Ältere Cursor-Pläne: Pro, Pro+, Ultra, Teams", "Enthalten", "Wöchentliche Nutzung steigt von Pro bis Ultra; danach On-Demand-Nutzung, wenn eingeschaltet"],
        ["Verknüpftes SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+", "Enthalten über ein verknüpftes Konto", "Heavy bekommt am meisten; Verknüpfung und Cursor-Plan addieren sich nicht"],
        ["SuperGrok Lite", "Nicht enthalten", "-"],
        ["Kostenlose Testphase", "Ein Nutzungsguthaben mit 7-Tage-Fenster", "Wird durch Agentenschritte und Tokens verbraucht; wird nicht aufgefüllt"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Grok Bot ein",
      steps: [
        {
          title: "Lade die App herunter",
          text: "Du bekommst sie unter x.ai/bot. Sie läuft unter macOS (Apple Silicon und Intel), Windows (x64 und Arm64) und Linux (x64 und Arm64), dazu auf dem iPhone (iOS 18 oder neuer) und unter Android (9 oder neuer).",
        },
        {
          title: "Melde dich an",
          text: "Wähle Sign in und schließ die Anmeldung im Browser ab; Grok Bot nutzt dein Cursor-Konto, also greift das SSO deines Unternehmens. Kommt dein Zugang über SuperGrok oder X Premium+, verknüpfe dein Grok-Konto auf der Onboarding-Seite. Konten im Privacy Mode (Legacy) müssen zuerst wechseln, weil Bots Cloud-Speicher brauchen.",
        },
        {
          title: "Gib deinem ersten Bot eine Aufgabe",
          text: "Die App legt einen Bot namens Grok Bot an und öffnet einen Chat. Weitere fügst du mit New Bot (Cmd/Ctrl+N) hinzu. Gib jedem Bot in seiner ersten Nachricht eine Aufgabe und bitte ihn, sich zu merken, wie du die Arbeit erledigt haben willst. Du kannst ihm eine Aufgabe auch beibringen, indem du sie einmal auf dem Computer des Bots aufzeichnest.",
        },
        {
          title: "Verbinde Apps und leg Regeln fest",
          text: "Verbinde die Apps, die er braucht. Logins kommen aus seinem Vault, dann aus einem Passwortmanager wie 1Password, dann aus einem sicheren Formular, und der Bot sieht das Passwort nie. Auto Review ist standardmäßig an und prüft Aktionen, bevor sie laufen; leg unter Settings > General > Bot Ask-first-Regeln für alles an, was immer auf dich warten soll.",
        },
      ],
      source: { label: "Quelle: xAIs Grok-Bot-Doku, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei Grok Bot die Kontrolle behältst",
      points: [
        "Freigabekarten: Wenn eine Aktion dein OK braucht, zeigt der Bot eine Karte und wartet. In xAIs Beispielen entwirft er Slack-Antworten und Gmail-Nachrichten, die du freigibst.",
        "Auto Review prüft Aktionen, bevor ein Bot Befehle ausführt, Apps nutzt oder auf seinem Computer handelt, und behandelt nur deine eigenen Nachrichten als Anweisungen. xAI weist darauf hin, dass das Risiko durch schädliche Inhalte damit sinkt, aber nicht verschwindet.",
        "Ein Bot hat kein eigenes Konto; er handelt als du, also lässt sich jede Aktion auf dich zurückführen.",
        "Alle Bots teilen sich einen Computer und seine Anmeldungen: Meldet sich ein Bot bei einer Website an, können die anderen dieses Login auch nutzen.",
        "Für Single Sign-on oder Passkeys wählst du Open computer, dann Take control, erledigst den Schritt und sagst dem Bot, dass er weitermachen soll.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Anwendungsfälle für Grok Bot",
      text: ["Aus xAIs Doku zu Anwendungsfällen. Bei den meisten entwirft der Bot die Arbeit und wartet auf deine Freigabe, bevor etwas verschickt wird."],
      headers: ["Anwendungsfall", "Was der Bot tut"],
      rows: [
        ["Morgen-Briefing", "Fasst zusammen, was sich über Nacht in deinen Apps geändert hat"],
        ["Posteingangs-Manager", "Sortiert ungelesene E-Mails nach Dringlichkeit und entwirft Antworten"],
        ["Reisekoordinator", "Findet je zwei Flug- und Hoteloptionen und überlässt dir die Buchung"],
        ["Meeting-Vorbereitung", "Schreibt ein einseitiges Briefing zu Teilnehmern, früheren Gesprächen und offenen Themen"],
        ["Content-Marketer", "Entwirft einen Newsletter und Posts aus der Arbeit, die in der Woche ausgeliefert wurde"],
        ["Sales Development", "Qualifiziert eingehende Leads anhand deines idealen Kunden und entwirft Antworten"],
        ["Wettbewerbsanalyse", "Berichtet jede Woche über Launches und Preisänderungen der Konkurrenz"],
        ["Kampagnenteam", "Mehrere Bots holen Anmeldedaten, entwerfen Launch-Inhalte und prüfen die Fakten"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs. Muse, Dots und Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Hersteller", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["Läuft auf", "Einem Cloud-Computer, den sich deine Bots teilen", "Einer eigenen Cloud-VM pro Person", "Einem eigenen Cloud-Computer und Browser", "Der Claude-Duet-App"],
        ["Zeitpläne", "Routinen nach Zeitplan, Slack, GitHub, E-Mail oder Webhook", "Erinnerungen und wiederkehrende Aufgaben", "Geplante Erinnerungen und wiederkehrende Prüfungen", "Kommt mit dem zu dir, was Aufmerksamkeit braucht"],
        ["Wer ihn bekommt", "Ab X Premium, SuperGrok, Cursor-Pläne", "USA, kostenlos mit Limits; Power $20/Monat", "ChatGPT Pro und Business Premium", "Claude Pro, Max, Ultra in den USA, Warteliste"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Teamkollege wie Grok Bot für deinen Code",
      text: [
        "Grok Bot arbeitet in deinen Apps; Crewmark arbeitet in deinem Repository. Es macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat: Er wacht nach Zeitplan auf, nimmt das nächste Issue von einem Board, öffnet Pull Requests und schreibt dir, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Fang mit einer [Rolle als KI-Mitarbeiter](/ai-employees) an, etwa Softwareentwickler oder SEO-Spezialist.",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Er wacht in den Stunden, die du festlegst, alle 15 bis 240 Minuten auf. Siehe [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7).",
        },
        {
          title: "Vergleiche persönliche Agents",
          text: "Siehe [persönliche KI-Agenten im Vergleich](/personal-agent) und den [Guide zu Meta Muse](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Grok Bot einrichten" },
  mid: {
    title: "Du willst einen proaktiven Teamkollegen für deine Codebasis?",
    text: "Crewmark-Mitarbeiter wachen per Heartbeat auf, nehmen das nächste Issue von einem Board und öffnen Pull Requests.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist Grok Bot?",
        a: "xAIs ständig aktiver Agent. Jeder Bot arbeitet auf einem Cloud-Computer, meldet sich bei deinen Apps an, merkt sich deine Vorlieben, erledigt Routinen nach Zeitplan und arbeitet weiter, wenn du den Laptop zuklappst. Er ist weder der Grok-Chatbot noch der Account @grok auf X.",
      },
      {
        q: "Was kostet Grok Bot?",
        a: "Er steht in keiner eigenen Preisliste: Er ist in den Plänen Premium, Super und Ultra von The X Subscription enthalten, in den älteren Cursor-Plänen Pro, Pro+, Ultra und Teams sowie in verknüpften Abos von SuperGrok, SuperGrok Plus, SuperGrok Heavy und X Premium+. Die Nutzungslimits unterscheiden sich je nach Plan.",
      },
      {
        q: "Gibt es eine kostenlose Testphase für Grok Bot?",
        a: "Ja, ein Nutzungsguthaben mit 7-Tage-Fenster. Es wird durch Agentenschritte und Tokens verbraucht, nicht aufgefüllt und wird nie zu einem bezahlten Plan; danach upgradest du oder verknüpfst ein Konto.",
      },
      {
        q: "Läuft Grok Bot unter Windows, Linux und Android?",
        a: "Ja. Die Desktop-App läuft unter macOS, Windows und Linux (x64 und Arm64), und es gibt Apps für das iPhone (iOS 18+) und Android (9+).",
      },
      {
        q: "Kann Grok Bot Aufgaben nach Zeitplan erledigen?",
        a: "Ja, mit Routinen: nach einem Zeitplan in normaler Sprache oder wenn eine Slack-Nachricht, ein GitHub- oder Linear-Event, eine E-Mail oder ein Webhook eintrifft. Siehe [Grok-Bot-Routinen](/personal-agent/grok-bot-routines).",
      },
      {
        q: "Grok Bot vs. Meta Muse: Was ist besser?",
        a: "Muse ist für die alltägliche Lebensorganisation für alle gebaut, mit einer kostenlosen Stufe in den USA. Grok Bot ist für die Arbeit gebaut: mehrere Bots als Team, Routinen mit Auslösern und die Tools von Cursor für Code.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agenten einen Job, nicht nur einen Prompt.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit xAIs Dokumentation und Guides zu Grok Bot und Cursors Seite zu den Grok-Bot-Plänen abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu xAI, SpaceX, X, Cursor, Meta, OpenAI oder Anthropic, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
