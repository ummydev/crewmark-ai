import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Den Helper anlegen. Dieser Aufruf sendet keine Anfrage.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# Turn 1 legt den Thread an und sendet die ganze Konversation
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# Turn 2 sendet nur die neue Nachricht
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turn 1: die ganze Konversation, dazu
"thread": {"type": "create"}

# Jeder weitere Turn: nur die neuen Nachrichten, ohne system und tools, dazu
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# Bei jeder Anfrage des Threads
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Message Threads: schnellere lange Agent-Sessions erklärt | Crewmark",
    description:
      "Anthropics Message Threads senden eine Claude-Konversation einmal und danach nur noch das Neue. Was sich für Claude Code ändert, wie du die Beta-API nutzt, die 5-Minuten-Frist und die Grenzen.",
  },
  breadcrumb: "Claude Message Threads",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Message Threads: was sie sind und wie du sie nutzt",
    lead: "Message Threads sind eine Funktion der Claude API und seit dem 2. November 2026 in der öffentlichen Beta. Statt bei jedem Turn die ganze Konversation hochzuladen, sendet ein Agent sie einmal und danach nur noch die neuen Nachrichten. Anthropic sagt, die Funktion sei für die meisten Claude-Code-Nutzer aktiviert, und die mediane Zeit bis zum ersten Token sinke bei Anfragen mit 500.000 bis 1 Mio. Tokens um etwa 35 %. Diese Anleitung zeigt, was sich ändert, was nicht, wie du Threads in deinem eigenen Agenten nutzt und wo die Grenzen liegen.",
    cta: "Early Access anfragen",
    secondary: "Direkt zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Message Threads sind",
      text: [
        "Ohne Thread lädt jeder Turn einer Agent-Schleife die komplette Konversation erneut hoch, und die API prüft und tokenisiert sie jedes Mal von vorn. Ein Coding-Agent stellt in einer Session Hunderte Anfragen. Sobald die Konversation mehrere Hunderttausend Tokens umfasst, verzögert dieses erneute Senden den Beginn von Claudes Antwort. Mit einem Thread hält die API die Konversation zwischen den Turns vor, und der Großteil dieser Arbeit betrifft nur noch den neuen Turn.",
      ],
      points: [
        "Schnellerer erster Token: Anthropic hat bei Claude-Code-Anfragen mit 500.000 bis 1 Mio. Tokens einen medianen Rückgang von etwa 35 % gemessen. Je länger die Konversation, desto mehr bringt es.",
        "Kleinere Anfragen: Jeder Turn enthält nur neue Nachrichten, Tool-Ergebnisse oder Screenshots.",
        "Gleiche Tokens, gleicher Preis: Claude liest bei jedem Turn weiterhin die ganze Konversation, und Preise und Rate Limits ändern sich nicht.",
        "Kurzlebig: Ein Thread läuft 5 Minuten nach seiner letzten Anfrage ab und liegt verschlüsselt im Arbeitsspeicher, nie auf der Festplatte.",
        "Wo: die Claude API, Claude Platform on AWS, Claude Models on Google Cloud (von Anthropic verwaltet) und Microsoft Foundry, bei allen Modellen.",
      ],
    },
    {
      kind: "table",
      title: "Mit und ohne Thread",
      headers: ["", "Ohne Thread", "Mit Thread"],
      rows: [
        ["Jede Anfrage sendet", "Die ganze Konversation, `system` und `tools`", "Nur die neuen Nachrichten und die `id` der vorherigen Antwort"],
        ["Zeit bis zum ersten Token", "Wächst mit der Konversation", "Niedriger und gleichmäßiger in langen Konversationen"],
        ["Abgerechnete Tokens", "Die ganze Konversation bei jedem Turn", "Dieselben"],
        ["Preis und Rate Limits", "Standard", "Unverändert"],
        ["Wer die Konversation hält", "Deine App", "Deine App, dazu die API für 5 Minuten nach jeder Anfrage"],
        ["Zero Data Retention", "Möglich", "Nicht möglich"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So nutzt du Message Threads in deinem eigenen Agenten",
      text: [
        "Claude Code macht das schon für dich. Für einen Agenten, den du auf der Messages API baust, ist der Thread-Helper des SDK der kürzeste Weg.",
      ],
      steps: [
        {
          title: "Einen Thread-Helper anlegen",
          text: "Übergib dieselben Felder wie bei einer Messages-Anfrage. Der Helper fügt den Beta-Header `message-threads-2026-08-12` hinzu, legt den Thread im ersten Turn an, sendet danach nur noch neue Nachrichten und hält die ganze Konversation im Speicher.",
          code: sdk,
        },
        {
          title: "Oder das Feld thread selbst senden",
          text: "Mit cURL oder einem einfachen `create`-Aufruf fügst du `thread` zu jeder Anfrage hinzu und sendest bei jeder den Beta-Header. Setze immer bei der `id` der neuesten Antwort fort; jede `id` lässt sich nur einmal fortsetzen.",
          code: raw,
        },
        {
          title: "Modell und Einstellungen unverändert lassen",
          text: "`system` und `tools` gehören nur in die erste Anfrage. `model`, `thinking`, `tool_choice`, das `cache_control` auf oberster Ebene und die Beta-Header müssen bei jedem Turn gleich bleiben; eine Änderung liefert einen 400-Fehler mit `thread_fingerprint_mismatch`. Um sie zu ändern, starte einen neuen Thread.",
        },
        {
          title: "Eine eigene Kopie behalten und bei 404 erneut senden",
          text: "Threads funktionieren nach bestem Bemühen (Best Effort). Wenn eine Continue-Anfrage 404 mit `thread_not_found` liefert (der Thread ist abgelaufen, der letzte Turn wurde nicht gespeichert oder ein Fallback-Modell hat ihn geschrieben), sende die ganze Konversation in einer neuen Create-Anfrage noch einmal. Der SDK-Helper macht das einmal von selbst.",
        },
        {
          title: "Prompt Caching einschalten",
          text: "Ein Thread cacht deinen Prompt nicht für dich. Sende bei jeder Anfrage ein `cache_control` auf oberster Ebene, damit jeder Turn die frühere Konversation aus dem Cache liest; eine Anfrage mit `thread` darf höchstens 4 Breakpoints enthalten.",
        },
      ],
      source: { label: "Quelle: Anthropics Dokumentation zu Message Threads", href: docs },
    },
    {
      kind: "text",
      title: "Grenzen und was Threads nicht unterstützen",
      points: [
        "Nicht mit Message Batches, Token-Zählung, Compaction auf Abruf oder Context Editing (außer `clear_thinking_20251015` mit `keep: \"all\"`).",
        "Nicht für Organisationen mit HIPAA Readiness oder Inference Hooks; solche Anfragen liefern einen 400-Fehler mit `thread_unsupported_request`.",
        "Nicht für Zero Data Retention geeignet: Die API hält einen Thread im Speicher und löscht ihn spätestens 1 Stunde nach der letzten Nutzung.",
        "Es gibt keine API, um einen Thread aufzulisten, zu lesen oder zu löschen, und ein Thread wird nur angehängt. Zum Verdichten startest du einen neuen Thread aus deiner eigenen Zusammenfassung.",
        "Setze einen Thread nach einer Ablehnung nicht fort: Starte einen neuen ohne den Turn, der dazu geführt hat.",
        "Nutze für alle Anfragen eines Threads denselben API-Schlüssel und denselben Workspace, sonst lässt er sich nicht fortsetzen.",
      ],
    },
    {
      kind: "text",
      title: "Was das für Claude-Code-Nutzer bedeutet",
      text: [
        "Du musst nichts ändern: Laut Anthropic sind Threads für die meisten Claude-Code-Nutzer standardmäßig aktiv. Der Gewinn zeigt sich in langen Sessions, in denen ein Turn tief in einer großen Konversation früher zu antworten beginnt. Dein Verbrauch sinkt nicht, denn Claude liest bei jedem Turn weiterhin die ganze Konversation.",
        "Laut API-Dokumentation läuft ein Thread 5 Minuten nach seiner letzten Anfrage ab. Kehrst du nach einer längeren Pause zu einer Session zurück, sendet die erste Anfrage die ganze Konversation erneut, und die folgenden Turns sind schnell. Genau das passiert auch mit einer [proaktiven Claude-Code-Session](/proactive-claude-code), die nach Zeitplan aufwacht.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Lange Claude-Code-Sessions von selbst weiterarbeiten lassen",
      text: [
        "Message Threads machen lange Sessions schneller; Crewmark macht sie proaktiv. Es gibt einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode eine Rolle, ein Ziel und Arbeitszeiten und weckt sie per Heartbeat in derselben Konversation, damit sie ihren Kontext behält und das nächste Issue von einem Board nimmt.",
      ],
      steps: [
        {
          title: "Aus einer Session einen Mitarbeiter machen",
          text: "Wähle eine Rolle wie Software-Entwickler oder SEO-Spezialist, formuliere ihr Ziel als Zahl und führe den Einrichtungsbefehl in Claude Code aus.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "In seinen Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Konversation auf; siehe [so machst du Claude Code proaktiv](/proactive-claude-code). Mehrere können nebeneinander laufen, wie bei [mehreren Claude-Code-Agenten](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Issues zuweisen und auf seine Nachrichten antworten",
          text: "Leg die Arbeit auf das Board; der Mitarbeiter nimmt sie, kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht. Lies [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Message Threads im eigenen Agenten nutzen" },
  mid: {
    title: "Du lässt lange Claude-Code-Sessions laufen?",
    text: "Crewmark weckt sie per Heartbeat mit Rolle, Ziel und einem Board mit Issues, mit dem Plan, für den du schon zahlst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Message Threads",
    items: [
      {
        q: "Was sind Claude Message Threads?",
        a: "Eine Funktion der Claude API, seit dem 2. November 2026 in der öffentlichen Beta, die eine Konversation zwischen den Turns auf Anthropics Seite hält. Die erste Anfrage sendet die ganze Konversation und legt einen Thread an; jede weitere Anfrage sendet nur die neuen Nachrichten und die `id` der vorherigen Antwort.",
      },
      {
        q: "Machen Message Threads Claude Code schneller?",
        a: "In langen Sessions ja. Anthropic sagt, Threads seien für die meisten Claude-Code-Nutzer standardmäßig aktiv, und die mediane Zeit bis zum ersten Token sinke bei Anfragen mit 500.000 bis 1 Mio. Tokens um etwa 35 %. Kurze Konversationen profitieren kaum.",
      },
      {
        q: "Sparen Message Threads Tokens oder Geld?",
        a: "Nein. Claude liest bei jedem Turn weiterhin die ganze Konversation, daher bleiben Token-Verbrauch, Preise und Rate Limits gleich. Der Gewinn sind kleinere Anfragen und ein schnellerer erster Token. Für niedrigere Kosten nutzt du Prompt Caching.",
      },
      {
        q: "Wie lange besteht ein Thread?",
        a: "Er läuft 5 Minuten nach seiner letzten Anfrage ab, und jede gespeicherte Antwort startet die 5 Minuten neu. Die API löscht ihn spätestens 1 Stunde nach der letzten Nutzung. Danach sendest du die ganze Konversation erneut, um einen neuen Thread zu starten.",
      },
      {
        q: "Wie lautet der Beta-Header für Message Threads?",
        a: "`anthropic-beta: message-threads-2026-08-12`, gesendet bei jeder Anfrage des Threads. Der Thread-Helper des SDK fügt ihn für dich hinzu.",
      },
      {
        q: "Sind Message Threads für Zero Data Retention geeignet?",
        a: "Nein. Der Inhalt eines Threads liegt im Speicher, verschlüsselt mit einem serverseitig verwalteten Schlüssel, wird nie in dauerhaften Speicher geschrieben und spätestens 1 Stunde nach der letzten Nutzung gelöscht. Organisationen mit HIPAA Readiness können keine Threads nutzen.",
      },
      {
        q: "Sind Message Threads dasselbe wie die Session Threads von Managed Agents?",
        a: "Nein. Message Threads sind eine Funktion der Messages API; Session Threads gehören zu Claude Managed Agents.",
      },
    ],
  },
  cta: {
    title: "Mach deine langen Claude-Code-Sessions proaktiv.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 4. November 2026 mit Anthropics Ankündigung und der Claude-Platform-Dokumentation abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, die es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
