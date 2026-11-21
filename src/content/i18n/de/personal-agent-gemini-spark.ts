import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/gemini-spark; the English master is src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `Prüf jeden Monat am 3. meine Kreditkartenabrechnungen in Gmail
auf neue oder versteckte Abogebühren und schick mir eine Liste.

Beobachte den Schul-Posteingang meines Kindes auf Fristen und schick
mir und meinem Partner jeden Tag um 19 Uhr eine Zusammenfassung.

Fass die Meeting-Notizen dieser Woche aus E-Mail und Chat in einem Google Doc zusammen
und entwirf die Follow-up-E-Mail. Verschick sie nicht.`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark (jetzt Tasks): Nutzung, Pläne, Länder",
    description:
      "Was aus Gemini Spark wurde: Googles persönlicher Agent rund um die Uhr heißt jetzt Tasks in der Gemini-App. Wer ihn nutzen kann (Google AI Pro oder Ultra, welche Länder), wie du ihn einschaltest, Zeitpläne, verbundene Apps, Limits und die Mac-App.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Gemini Spark",
    title: "Gemini Spark, jetzt Tasks in Gemini: so nutzt du Googles persönlichen Agenten",
    lead: "Google kündigte Gemini Spark am 19. Mai 2026 als persönlichen KI-Agenten an, der rund um die Uhr proaktiv Aufgaben erledigt: Er arbeitet in der Cloud, macht bei zugeklapptem Laptop oder gesperrtem Smartphone weiter und nutzt Gmail, Docs und deine anderen Google-Apps. Das Spark aus der Beta heißt in der Gemini-App jetzt Tasks, deshalb scheint der Spark-Button verschwunden zu sein. Dieser Guide zeigt, wer ihn nutzen kann, wie du ihn einschaltest, Zeitpläne, verbundene Apps, Limits und worin er gut ist.",
    cta: "Loslegen",
    secondary: "Einschalten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was ist aus Gemini Spark geworden?",
      text: [
        "Abgeschaltet wurde nichts. Googles Hilfeartikel nennt die Funktion jetzt Tasks und vermerkt, dass sie in der Beta Spark hieß. Du startest eine Aufgabe mit der Option Task unter dem Textfeld in Gemini, und deine bestehenden Aufgaben und Zeitpläne sind noch da.",
      ],
      points: [
        "Was er ist: ein Agent, der auf Gemini in der Cloud läuft, zum Start aufgebaut auf Gemini 3.5 und Googles Antigravity-Harness.",
        "Was er tut: räumt deinen Posteingang auf, beobachtet Flug- und Hotelpreise, recherchiert mit belegten Quellen, surft zum Einkaufen oder Buchen und erstellt PDFs, Docs, Sheets und Slides.",
        "Wann er arbeitet: im Hintergrund, nach Zeitplan oder wenn etwas passiert, und er fragt vor folgenreichen Aktionen wie Geld ausgeben oder E-Mails senden.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Wer Gemini Tasks (Spark) nutzen kann",
      text: ["Laut Googles Hilfe zu Gemini Apps am 10. November 2026."],
      headers: ["Voraussetzung", "Details"],
      rows: [
        ["Plan", "Google AI Pro oder Ultra (Google AI Pro kostet in den USA $19.99 im Monat)"],
        ["Konto", "Ein privates Google-Konto, ab 18; Arbeits- und Schulkonten werden noch nicht unterstützt"],
        ["Länder", "Überall, wo Gemini Apps verfügbar sind, außer im Europäischen Wirtschaftsraum, in der Schweiz, in Großbritannien und in Nigeria"],
        ["Einstellung", "Keep Activity muss eingeschaltet sein"],
        ["Wo", "In der mobilen Gemini-App, der Gemini-App für Mac und der Web-App unter gemini.google.com"],
        ["Kostenloser Plan", "Nicht enthalten"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du Gemini Tasks",
      steps: [
        {
          title: "Schalte den Task-Modus ein",
          text: "Klick auf gemini.google.com unter dem Textfeld auf Task und folge den Schritten auf dem Bildschirm. Tasks funktionieren auch in der mobilen Gemini-App und in der Gemini-App für Mac.",
        },
        {
          title: "Verbinde die Apps, die er braucht",
          text: "Tasks können Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides und Tasks nutzen, dazu Google Search, Flights, Hotels und Maps, Contacts, Photos und YouTube sowie eigene Apps und Apps von Drittanbietern. Zu Googles Launch-Partnern gehörten Canva, OpenTable und Instacart.",
        },
        {
          title: "Beschreib die Aufgabe und wann sie erledigt werden soll",
          text: "Bitte um eine einmalige Aufgabe oder leg einen Zeitplan fest: zu einer bestimmten Uhrzeit oder wenn etwas passiert. Öffne den Thread der Aufgabe und ihr Arbeitspanel, um Berechtigungen und Zeitpläne zu prüfen.",
          code: prompts,
        },
        {
          title: "Gib die wichtigen Schritte frei",
          text: "Gemini fragt, bevor es für eine Aufgabe im Web surft (nachdem du Chrome einmal die Berechtigung gegeben hast), und bevor es Nachrichten sendet, einkauft, Formulare absendet oder sich mit Google anmeldet. Außerdem hält es an, bevor es heikle Informationen wie Gesundheits-, Finanz- oder Ausweisdaten teilt, selbst wenn du „Always allow“ gewählt hast.",
        },
      ],
      source: { label: "Quelle: Googles Hilfe zu Gemini Apps über Tasks", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "Limits, Zeitpläne und Ausschalten",
      points: [
        "Bis zu 15 Aufgaben können gleichzeitig laufen; ein Zeitplan läuft nicht, wenn schon 15 laufen.",
        "Laut Googles Hilfe laufen Zeitpläne nicht, solange der Task-Modus aus oder dein Gerät ausgeschaltet ist. Pausiere oder setze Zeitpläne im Thread der Aufgabe fort oder auf der Seite Scheduled in der Web-App.",
        "Die Nutzungslimits richten sich nach Rechenaufwand und sind bei Ultra höher als bei Pro.",
        "Chrome Auto Browse funktioniert nur am Desktop.",
        "Ausschalten kannst du es im Web unter Settings > Task settings („Use task mode to hand off work“) oder in der Mac-App unter Gemini > Settings > Tasks. Dabei werden die Daten des Remote-Browsers und des Codes gelöscht; deine Aufgaben, Zeitpläne und Dateien bleiben erhalten, sind aber pausiert.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Anwendungsfälle für Gemini Tasks",
      text: ["Die ersten drei sind Googles eigene Launch-Beispiele."],
      headers: ["Anwendungsfall", "Was er tut"],
      rows: [
        ["Abo-Check", "Durchsucht monatliche Kartenabrechnungen nach neuen oder versteckten Abogebühren"],
        ["Zusammenfassung des Schul-Posteingangs", "Achtet auf Fristen und schickt dir und deinem Partner täglich eine Zusammenfassung"],
        ["Meeting-Follow-up", "Fasst Notizen aus E-Mail und Chat in einem Doc zusammen und entwirft das Follow-up"],
        ["Posteingang aufräumen", "Archiviert Newsletter und meldet dich von Verteilern ab"],
        ["Preisbeobachtung", "Beobachtet Flug- und Hotelpreise und sagt dir, wenn sie fallen"],
        ["Recherchebericht", "Recherchiert ein Thema mit belegten Quellen und verpackt es als Datei"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini Tasks vs. Meta Muse und Grok Bot",
      headers: ["", "Gemini Tasks (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["Hersteller", "Google", "Meta", "xAI"],
        ["Günstigster Einstieg", "Google AI Pro", "Kostenlos in den USA, Wochenlimit", "Kostenloses Testguthaben; ab X Premium"],
        ["Am stärksten mit", "Gmail, Docs und Googles Apps", "Alltägliche Besorgungen, WhatsApp", "Arbeits-Apps, Teams von Bots"],
        ["Zeitpläne", "Zu einer Uhrzeit oder bei einem Event", "Erinnerungen und wiederkehrende Aufgaben", "Routinen nach Zeitplan oder Auslöser"],
        ["Nicht verfügbar in", "EWR, Schweiz, Großbritannien, Nigeria", "Außerhalb der USA (begrenzte Testphase)", "-"],
        ["Guide", "Diese Seite", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein geplanter Agent für deine Arbeit, nicht nur für deinen Posteingang",
      text: [
        "Gemini Tasks kümmern sich um die Google-Apps einer Person. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der das nächste Issue von einem gemeinsamen Board nimmt und zurückberichtet.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Fang mit einer [Rolle als KI-Mitarbeiter](/ai-employees) an, etwa SEO-Spezialist oder Softwareentwickler.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Er wacht in den Stunden, die du wählst, alle 15 bis 240 Minuten auf. Siehe [geplante Aufgaben in Codex](/proactive-codex).",
        },
        {
          title: "Vergleiche persönliche Agents",
          text: "Siehe [persönliche KI-Agenten im Vergleich](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini Tasks nutzen" },
  mid: {
    title: "Du willst einen Agenten, der den Backlog deines Teams abarbeitet?",
    text: "Crewmark-Mitarbeiter wachen per Heartbeat auf und nehmen das nächste Issue von einem Board, mit dem Claude-Code- oder Codex-Plan, den du hast.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist aus Gemini Spark geworden?",
        a: "Google hat es umbenannt. Das Spark aus der Beta heißt in der Gemini-App jetzt Tasks: Wähl Task unter dem Textfeld. Deine bestehenden Aufgaben und Zeitpläne werden übernommen.",
      },
      {
        q: "Ist Gemini Spark kostenlos?",
        a: "Nein. Tasks brauchen ein Abo von Google AI Pro oder Ultra auf einem privaten Google-Konto; Google AI Pro kostet in den USA $19.99 im Monat.",
      },
      {
        q: "Ist Gemini Spark in Großbritannien oder Europa verfügbar?",
        a: "Noch nicht. Laut Googles Hilfe ist es überall verfügbar, wo es Gemini Apps gibt, außer im Europäischen Wirtschaftsraum, in der Schweiz, in Großbritannien und in Nigeria.",
      },
      {
        q: "Gibt es eine Mac-App für Gemini Spark?",
        a: "Ja, Tasks funktionieren in der Gemini-App für Mac, ebenso in der mobilen App und unter gemini.google.com.",
      },
      {
        q: "Können Gemini Tasks nach Zeitplan laufen?",
        a: "Ja, zu einer festen Uhrzeit oder wenn etwas passiert. Bis zu 15 Aufgaben können gleichzeitig laufen, und Zeitpläne pausieren, solange der Task-Modus aus ist.",
      },
      {
        q: "Gemini Spark vs. Meta Muse: Was sollte ich nutzen?",
        a: "Wenn dein Leben in Gmail und Googles Apps stattfindet und du Google AI Pro bezahlst, Gemini Tasks. Wenn du in den USA bist und kostenlos einsteigen willst, Meta Muse.",
      },
    ],
  },
  cta: {
    title: "Persönliche Agents für deinen Posteingang. KI-Mitarbeiter für deinen Backlog.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit Googles Ankündigung von Gemini Spark und der Hilfe zu Gemini Apps abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Google, Meta oder xAI, die es auch nicht unterstützen. Gemini und Google sind Marken von Google.",
};
