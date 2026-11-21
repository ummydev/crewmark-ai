import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/manus-cue; the English master is src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# Ein Agent für Besorgungen
Prüf jeden Werktag um 8 Uhr meinen Posteingang auf alles zum Umzug und
schick mir eine kurze Zusammenfassung. Frag, bevor du jemandem antwortest.

# Ein kleines Team mit einem Ziel (Manus' eigenes Beispiel, als Prompt)
Wir planen im März ein Team-Offsite für 20 Personen.
Einer von euch recherchiert Locations in der Nähe von Lissabon, einer macht daraus eine Shortlist
mit drei Optionen, und einer entwirft eine Präsentation mit einer Empfehlung, über die ich entscheide.`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue: Einladungscode, Nutzung und Preise",
    description:
      "Cue von Manus erklärt: persönliche Agenten mit eigener E-Mail-Adresse, Telefonnummer, Wallet und eigenem Computer. Wie du mit einem Einladungscode Zugang bekommst, wie du die App herunterlädst, wie du Agenten und Gruppenchats nutzt, geplante Automatisierungen und was es kostet.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Manus Cue",
    title: "Manus Cue: persönliche Agenten mit eigener E-Mail, eigenem Telefon und eigener Wallet",
    lead: "Cue ist eine eigenständige App von Manus für deine persönlichen Agenten, gestartet im Early Access zusammen mit Manus 2.0 am 28. September 2026. Was sie auszeichnet: Jeder Agent bekommt eine eigene E-Mail-Adresse, Telefonnummer, Wallet und einen eigenen Computer, sodass er Leuten schreiben, deine Anrufe annehmen und innerhalb eines Budgets bezahlen kann, das du festlegst. Dieser Guide zeigt, wie du mit einem Einladungscode reinkommst, wie du die App herunterlädst, wie du einen Agenten oder ein Team nutzt, geplante Automatisierungen, was es kostet und welche Fragen offen sind.",
    cta: "Loslegen",
    secondary: "Zugang bekommen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Manus Cue ist",
      text: [
        "Manus beschreibt Cue als neue, eigenständige App für deine persönlichen Agenten, auf Smartphone und Desktop. Sie baut auf derselben Infrastruktur wie Manus auf, ist aber eine eigene App und kein Modus von Manus.",
      ],
      points: [
        "Eigene Identität: Jeder Agent hat eine E-Mail-Adresse, eine Telefonnummer, eine Wallet und einen Computer.",
        "Anrufe: Ein Agent kann deine Anrufe annehmen und dir in Cue eine Zusammenfassung hinterlassen.",
        "Zahlungen: Agenten können innerhalb eines Budgets bezahlen, das du festlegst.",
        "Teams: Mehrere Agenten können sich einen Gruppenchat und ein gemeinsames Ziel teilen und sich gegenseitig Arbeit übergeben, während du die Richtung vorgibst und das letzte Wort hast.",
        "Draußen in der Welt: Scann im Restaurant einen QR-Code, damit dein Agent für dich bestellt oder deinen Platz in der Schlange hält.",
        "Ein Assistent reicht auch: Behalte einen einzelnen Agenten für Besorgungen, Erinnerungen und Recherche.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So bekommst du Manus Cue",
      steps: [
        {
          title: "Besorg dir einen Einladungscode",
          text: "Cue ist im Early Access und braucht einen Einladungscode. Zum Start bot Manus einer begrenzten Zahl früher Nutzer den Code MEETCUE an, nach dem Prinzip „wer zuerst kommt“; ob er noch funktioniert, hat Manus nicht gesagt. Jeder, der reinkommt, erhält zusätzliche Codes zum Weitergeben; frag also jemanden, der Cue schon nutzt.",
        },
        {
          title: "Lade die App über Manus herunter",
          text: "Öffne in Manus den Tab Agents (Cue!) in der Seitenleiste und scann den QR-Code, um die App herunterzuladen. Manus nennt Web, Desktop und Mobile; zum Start wartete iOS noch auf die Prüfung im App Store, schau also im App Store nach, bevor du dich darauf verlässt.",
        },
        {
          title: "Melde dich mit dem Code an",
          text: "Gib den Einladungscode bei der Anmeldung ein. Manus schickt dir eventuell auch eine Kopie per E-Mail.",
        },
        {
          title: "Leg deinen ersten Agenten an",
          text: "Fang mit einem Agenten für Besorgungen an oder richte ein kleines Team mit einem gemeinsamen Ziel ein. Sag, was erledigt werden soll, welches Budget er ausgeben darf und wobei er dich zuerst fragen muss.",
          code: prompts,
        },
      ],
      source: { label: "Quelle: Manus' Launch-Beitrag zu Manus 2.0 und Cue", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "Geplante Automatisierungen und Skills",
      points: [
        "Scheduled Automations: Beschreib, was wann erledigt werden soll, und Cue richtet es ein.",
        "Event-Auslöser, etwa eine neue E-Mail oder eine Slack-Nachricht, sind für Manus Automations beschrieben; dass Cue sie schon hat, sagt Manus nicht.",
        "Skills, die du in Manus erstellt oder importiert hast, werden nicht automatisch übernommen. Richte sie in Cue neu ein.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preise von Manus Cue",
      headers: ["", "Was Manus sagt"],
      rows: [
        ["Early Access", "Kostenlos, mit Einladungscode"],
        ["Nach dem Early Access", "Nicht angekündigt"],
        ["Manus-Abo oder Credits", "Der Launch-Beitrag sagt weder, dass ein Manus-Plan Cue enthält, noch, dass Cue Manus-Credits verbraucht"],
        ["Zahlungen der Agenten", "Agenten bezahlen aus ihrer Wallet innerhalb des Budgets, das du festlegst"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "Offene Fragen, bevor du ihm deine Nummer gibst",
      points: [
        "Wen ein Agent kontaktieren darf und wozu er dich verpflichten darf, beschreibt der Launch-Beitrag nicht. Leg ein Budget fest und sag jedem Agenten, wobei er dich zuerst fragen soll.",
        "Woran die Person am anderen Ende erkennt, dass sie mit einem Agenten spricht, wird ebenfalls nicht beschrieben.",
        "Preise nach dem Early Access und die Länder, in denen Cue funktioniert, sind nicht angekündigt.",
        "Agenten, die Nachrichten verschicken und aus einer Wallet bezahlen, können Fehler machen, die Geld kosten; fang mit einem kleinen Budget an.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs. Meta Muse und Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["Identität des Agenten", "Eigene E-Mail, Telefonnummer, Wallet und eigener Computer", "Handelt über deine verbundenen Konten", "Handelt als du; kein eigenes Konto"],
        ["Teams von Agenten", "Ja, Gruppenchats mit gemeinsamem Ziel", "Nicht beschrieben", "Ja, Bots übergeben sich gegenseitig Arbeit"],
        ["Zeitpläne", "Scheduled Automations", "Erinnerungen und wiederkehrende Aufgaben", "Routinen nach Zeitplan oder Auslöser"],
        ["Zugang", "Early Access, Einladungscode", "USA, kostenlos mit Wochenlimit", "Ab X Premium, SuperGrok, Cursor-Pläne"],
        ["Guide", "Diese Seite", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Team von Agenten für deine Arbeit, auf dem Agenten, den du schon nutzt",
      text: [
        "Cue gibt jedem persönlichen Agenten eine Identität. Crewmark gibt jedem Arbeitsagenten einen Job: Es macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der zusammen mit dem Rest deines Teams ein gemeinsames Board abarbeitet.",
      ],
      steps: [
        {
          title: "Wähle Rollen",
          text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an: Entwickler, SEO-Spezialist, Marketing-Agent, Social-Media-Manager, Designer.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Jeder Mitarbeiter nimmt das nächste Issue, das ihm zugewiesen ist, kommentiert beim Arbeiten und schreibt dir, wenn er feststeckt.",
        },
        {
          title: "Vergleiche persönliche Agents",
          text: "Siehe [persönliche KI-Agenten im Vergleich](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mit Manus Cue loslegen" },
  mid: {
    title: "Du willst ein Team von Agenten für deine eigentliche Arbeit?",
    text: "Crewmark-Mitarbeiter arbeiten per Heartbeat ein gemeinsames Board ab, mit dem Claude-Code- oder Codex-Plan, den du ohnehin bezahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist Manus Cue?",
        a: "Eine eigenständige App von Manus für persönliche Agenten, gestartet im Early Access am 28. September 2026. Jeder Agent hat eine eigene E-Mail-Adresse, Telefonnummer, Wallet und einen eigenen Computer, und mehrere Agenten können in einem Gruppenchat zusammenarbeiten.",
      },
      {
        q: "Wie bekomme ich einen Einladungscode für Manus Cue?",
        a: "Zum Start bot Manus einer begrenzten Zahl früher Nutzer MEETCUE an, nach dem Prinzip „wer zuerst kommt“. Jeder, der Zugang bekommt, erhält zusätzliche Einladungscodes zum Weitergeben; am sichersten fragst du also jemanden, der Cue schon nutzt.",
      },
      {
        q: "Was kostet Manus Cue?",
        a: "Während des Early Access ist es mit Einladungscode kostenlos. Preise danach hat Manus nicht angekündigt, ebenso wenig, ob ein Manus-Abo es enthalten wird.",
      },
      {
        q: "Wie lade ich Manus Cue herunter?",
        a: "Öffne den Tab Agents (Cue!) in der Seitenleiste von Manus und scann den QR-Code. Manus nennt Web, Desktop und Mobile; iOS wartete zum Start noch auf die Prüfung im App Store.",
      },
      {
        q: "Kann ein Cue-Agent telefonieren und bezahlen?",
        a: "Jeder Agent hat eine eigene Telefonnummer und Wallet: Er kann deine Anrufe annehmen und eine Zusammenfassung hinterlassen, Nachrichten verschicken und innerhalb eines Budgets bezahlen, das du festlegst.",
      },
      {
        q: "Gehört Cue zu Manus?",
        a: "Es baut auf derselben Infrastruktur auf, ist aber eine eigene App. Skills aus Manus werden nicht automatisch übernommen, und Manus sagt nicht, dass Cue Manus-Credits verbraucht.",
      },
    ],
  },
  cta: {
    title: "Persönliche Agents erledigen Besorgungen. KI-Mitarbeiter erledigen deinen Backlog.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit Manus' Launch-Beitrag zu Manus 2.0 und seinem Hilfe-Center abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Manus, Meta oder xAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
