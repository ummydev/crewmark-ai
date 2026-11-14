import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots: Was sie sind, Anleitung und Preis",
    description:
      "ChatGPT dots sind die Always-on-Agenten von OpenAI: was sie können, welche Pläne sie bekommen, Einrichtung, eigene Regeln, Grenzen und Vergleich.",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · ChatGPT",
    title: "ChatGPT dots: was sie sind und wie du sie nutzt",
    lead: "Dots sind ständig aktive Agenten in ChatGPT, vorgestellt auf dem OpenAI DevDay am 29. September 2026. Jeder dot hat seinen eigenen Cloud-Computer und Browser, verbindet sich mit deinen Apps, lernt aus Feedback und arbeitet weiter an deinen Zielen, während du weg bist. Diese Anleitung zeigt, wer einen bekommt, was er kostet, wie du ihn einrichtest, welche Regeln ihn im Zaum halten und was er noch nicht kann.",
    cta: "Loslegen",
    secondary: "Direkt zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was ChatGPT dots sind",
      text: [
        "OpenAI nennt dots „bemerkenswert fähige, ständig aktive Agenten, die alles erledigen sollen“. Ein dot läuft mit GPT-6 Astra und arbeitet auf seinem eigenen Cloud-Computer mit eigenem Browser, mit den Apps, die du verbindest. Du sprichst mit ihm in ChatGPT auf dem Desktop, im Web oder auf dem Smartphone, in Slack und Teams, per Sprache in der Mobile-App und, in einer US-Beta für Pro, per SMS.",
      ],
      points: [
        "Er arbeitet, wenn du es nicht tust: Mit Lesezugriff auf deine verbundenen Apps sucht er nach Möglichkeiten zu helfen und führt geplante Erinnerungen und wiederkehrende Prüfungen aus.",
        "Er betreut mehrere Projekte gleichzeitig und meldet sich mit Fortschritten, Fragen und Entscheidungen, die du treffen musst.",
        "Er erinnert sich: Er startet mit deinen ChatGPT-Erinnerungen und lernt deine Vorlieben, während ihr zusammenarbeitet.",
        "Er schreibt Code, indem er delegiert: Ein dot kann Codex-Aufgaben starten, die auf deine Codex-Limits angerechnet werden.",
        "Du kannst zusehen: Öffne jederzeit den Computer des dots, übernimm die Steuerung und gib sie wieder ab.",
      ],
    },
    {
      kind: "table",
      title: "Wer dots nutzen kann und was sie kosten",
      text: [
        "Dein erster dot ist in den unten genannten Plänen ohne Aufpreis enthalten. Im ersten Monat nach dem Start zählte die Nutzung von dots nicht zu den Kontingenten des Plans; OpenAI will danach Nutzungsbedingungen pro Plan veröffentlichen, hatte das bei unserer Prüfung aber noch nicht getan. Der Kauf weiterer dots oder von mehr Arbeit pro dot ist angekündigt, Preise gibt es noch nicht.",
      ],
      headers: ["Plan", "Dots", "Hinweise"],
      rows: [
        ["Free, Go, Plus, Business", "Nein", "Nicht enthalten"],
        ["Pro (Pro 100, Pro 200, Pro 500)", "Ja, wird ausgerollt", "Nicht im EWR, in der Schweiz oder im Vereinigten Königreich"],
        ["Business Premium", "Ja, wird ausgerollt", "Unterstützte Regionen, abhängig von der Berechtigung des Workspace"],
        ["Enterprise, Edu, Healthcare", "Beta", "Aus, bis ein Workspace-Admin es einschaltet"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du deinen ersten dot ein",
      text: ["Du musst mindestens 18 Jahre alt sein. Der Rollout erfolgt schrittweise, es kann also ein paar Tage dauern, bis dein Konto Zugriff hat."],
      steps: [
        {
          title: "Dots öffnen",
          text: "Geh auf chatgpt.com/dots oder öffne dots in der ChatGPT-Desktop-App, im Web auf dem Desktop oder in der Mobile-App unter iOS oder Android.",
        },
        {
          title: "Deinen dot erstellen und benennen",
          text: "Folge dem Onboarding: Gib ihm einen Namen, der zu seinem Handle wird (@yourname-agentname), und wähle einen Avatar. Beides kannst du später in seinem Profil ändern.",
        },
        {
          title: "Deine Apps verbinden",
          text: "Öffne im Profil des dots Customize, dann Plugins, wähle eine App und prüfe die Berechtigungen, die sie anfordert. Slack verbindest du am Desktop. Ein dot kann ein persönliches E-Mail-Konto nutzen, das du verbindest, aber noch keine eigene E-Mail-Adresse haben.",
        },
        {
          title: "Eigene Regeln festlegen",
          text: "Lege unter Customize, Custom rules für jede Art von Aktion fest, ob der dot ohne Nachfrage handeln soll, nur handeln soll, wenn es in deinem Prompt vorab freigegeben ist, vor dem Handeln fragen soll oder an dich übergeben soll.",
        },
        {
          title: "Ihm ein Ziel geben",
          text: "Beschreib das Ergebnis, das du willst, und gib Kontext; hänge Dateien mit + an und antworte im Thread, um ihn zu steuern. Bitte um Erinnerungen oder wiederkehrende Prüfungen und verwalte sie unter Scheduled.",
        },
        {
          title: "Verfolgen, pausieren oder löschen",
          text: "Das Profil zeigt die Arbeit unter In progress, Scheduled und Completed. Pausiere den dot bei Bedarf über das •••-Menü. Wenn du ihn löschst, werden seine Erinnerungen und geplanten Aufgaben entfernt, und das lässt sich nicht rückgängig machen.",
        },
      ],
      source: { label: "Quelle: OpenAIs Ankündigung der dots", href: announcement },
    },
    {
      kind: "text",
      title: "Sicherheit: was ein dot selbstständig tut und was nicht",
      points: [
        "Ein Passwort ändern oder Geld senden musst du immer selbst, indem du die Steuerung übernimmst.",
        "Daten dauerhaft löschen oder Software installieren kann jedes Mal deine Zustimmung erfordern.",
        "Auto-review prüft riskante Aktionen, etwa an wen eine E-Mail geht, gegen deine Anweisungen und Regeln, und deine eigenen Regeln können das nicht abschalten.",
        "Ein dot kann mit einer auf der Website eines Händlers gespeicherten Karte einkaufen, aber nur mit deiner Zustimmung im Einzelfall oder einer konkreten Freigabe im Voraus.",
        "Dein eigener Computer bleibt außen vor, es sei denn, du verbindest ihn mit Allow access in der ChatGPT-Desktop-App; standardmäßig ist das aus.",
        "OpenAI sagt, dass der Schutz vor Prompt Injection das Risiko senkt, aber nicht beseitigt, und dass manche abgeschlossenen Aktionen nicht rückgängig zu machen sind.",
      ],
    },
    {
      kind: "text",
      title: "Was dots noch nicht können",
      points: [
        "Du bekommst einen primären dot; Teams aus dots werden als zukünftige Richtung beschrieben.",
        "Ein dot hat keine eigene E-Mail-Adresse, kann dich nicht anrufen und funktioniert nicht im mobilen Web.",
        "Es gibt keine Webhooks oder Event-Trigger, um ihn zu starten; er arbeitet auf Basis deiner Nachrichten, seiner Zeitpläne und seiner eigenen Recherche mit Lesezugriff.",
        "Du kannst einzelne Erinnerungen nicht ansehen, bearbeiten oder löschen; nur wenn du den dot löschst, verschwindet, was er gelernt hat.",
        "Plus-Nutzer bekommen keine dots, und Pro-Nutzer im EWR, in der Schweiz und im Vereinigten Königreich auch nicht.",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs. Grok Bot vs. Crewmark",
      text: [
        "xAI hat Grok Bot im August 2026 als „dein Team aus ständig aktiven Agenten“ mit eigenem Computer vorgestellt. Crewmark geht einen anderen Weg: Statt eines neuen Agenten in fremder Cloud macht es den Coding-Agenten, den du schon nutzt, zu einem Mitarbeiter auf deinem eigenen Rechner.",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["Läuft auf", "Cloud-Computer von OpenAI", "Eigenem Computer, laut xAI", "Deinem Computer, in Claude Code oder Codex"],
        ["Modell", "GPT-6 Astra", "Grok", "Was dein Claude Code oder Codex nutzt"],
        ["Wie viele", "Ein primärer dot", "Mehrere, die einander Nachrichten schicken können", "Ein Mitarbeiter pro Rolle, so viele du einrichtest"],
        ["Was die Arbeit startet", "Deine Nachrichten, Zeitpläne, eigene Recherche", "Lernt Routinen, indem er dir bei der Arbeit zusieht", "Ein Heartbeat alle 15–60 Minuten während der Arbeitszeiten"],
        ["Arbeitsqueue", "Unterhaltungs-Threads und Scheduled", "Nicht dokumentiert", "Issues auf einem Kanban-Board"],
        ["Ziel", "Ziele, die du beschreibst", "Nicht dokumentiert", "Eine KPI in Zahlen, z. B. +10 % Klicks pro Monat"],
        ["Pläne", "Pro, Business Premium, Enterprise-Beta", "SuperGrok- und Cursor-Pläne, Beta", "Offene Registrierung; läuft mit deinem bestehenden Claude- oder ChatGPT-Plan"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Du zahlst schon für Claude Code oder Codex? Mach es ständig aktiv",
      text: [
        "Wenn deine Daueraufgaben in einer Codebasis oder einer Website liegen, brauchst du keinen neuen Agenten. Crewmark gibt der Claude-Code- oder Codex-Session, die du schon nutzt, eine Rolle, ein Ziel und Arbeitszeiten und weckt sie per Heartbeat, damit sie das nächste Issue vom Board nimmt.",
      ],
      steps: [
        {
          title: "Mach aus einer Session einen Mitarbeiter",
          text: "Wähle eine Rolle wie SEO-Spezialist oder Softwareentwickler, formuliere sein Ziel als Zahl und führe den Setup-Befehl in Claude Code oder Codex aus.",
        },
        {
          title: "Lass den Heartbeat ihn am Laufen halten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und weiß daher noch, was er getan hat; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Weise Issues zu und beantworte seine Nachrichten",
          text: "Leg Arbeit aufs Board; der Mitarbeiter übernimmt sie, kommentiert unterwegs und schreibt dir, wenn er nicht weiterkommt. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Deinen ersten ChatGPT dot einrichten" },
  mid: {
    title: "Du willst einen ständig aktiven Agenten für deine Codebasis?",
    text: "Crewmark hält deine Claude-Code- oder Codex-Session per Heartbeat am Arbeiten, mit dem Plan, für den du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu ChatGPT dots",
    items: [
      {
        q: "Was sind ChatGPT dots?",
        a: "Ständig aktive Agenten in ChatGPT, vorgestellt am 29. September 2026. Jeder dot läuft mit GPT-6 Astra auf seinem eigenen Cloud-Computer mit Browser, verbindet sich mit deinen Apps, lernt aus Feedback und arbeitet weiter an deinen Zielen.",
      },
      {
        q: "Was kosten ChatGPT dots?",
        a: "Dein erster dot ist in Pro und Business Premium ohne Aufpreis enthalten. OpenAI plant, weitere dots und mehr Arbeit pro dot zu verkaufen, hat aber weder Preise noch Nutzungsbedingungen für die Zeit nach dem Startmonat veröffentlicht.",
      },
      {
        q: "Kann ich dots mit ChatGPT Plus nutzen?",
        a: "Nein. Dots sind in Free, Go, Plus und im regulären Business-Plan nicht enthalten. Sie werden für Pro und Business Premium ausgerollt und sind für Enterprise, Edu und Healthcare in der Beta.",
      },
      {
        q: "Wie nutze ich einen ChatGPT dot?",
        a: "Öffne chatgpt.com/dots, erstelle und benenne deinen dot, verbinde Apps unter Customize, lege eigene Regeln fest, was er ohne Nachfrage tun darf, und gib ihm dann ein Ziel. Verfolge seine Arbeit in seinem Profil unter In progress, Scheduled und Completed.",
      },
      {
        q: "Was ist der Unterschied zwischen ChatGPT dots und Grok Bot?",
        a: "Beide sind ständig aktive Agenten mit eigenem Computer. Ein dot läuft mit GPT-6 Astra, und zum Start bekommst du einen; Grok Bot von xAI ist ein Team aus Agenten, die einander Nachrichten schicken können, in der Beta für SuperGrok und einige Cursor-Pläne.",
      },
      {
        q: "Können ChatGPT dots Code schreiben?",
        a: "Ja, indem sie an Codex delegieren: Ein dot kann Codex-Aufgaben in der Cloud starten oder lokale Codex-Aufgaben, wenn du deinen Computer verbindest, und diese werden auf deine Codex-Limits angerechnet.",
      },
    ],
  },
  cta: {
    title: "Mach den Agenten, den du schon nutzt, ständig aktiv.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sessions KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 2. November 2026 mit OpenAIs Ankündigung, Hilfe-Center, Release Notes und Preisseite abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu OpenAI, xAI oder Anthropic, die es auch nicht unterstützen. ChatGPT ist eine Marke von OpenAI, Grok von xAI und Claude Code von Anthropic.",
};
