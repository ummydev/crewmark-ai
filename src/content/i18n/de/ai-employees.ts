import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /ai-employees; the English master is src/content/ai-employees.ts.
export const copy: GuideCopy = {
  meta: {
    title: "KI-Mitarbeiter: Definition und Beispiele | Crewmark AI",
    description:
      "Ein KI-Mitarbeiter ist ein KI-Agent mit Rolle, Ziel und Arbeitszeiten, der Arbeit vom Board nimmt. Unterschied zum KI-Agenten, Beispiele und Einstieg.",
  },
  breadcrumb: "KI-Mitarbeiter",
  hero: {
    kicker: "KI-Mitarbeiter",
    title: "Was ist ein KI-Mitarbeiter?",
    lead: "Ein KI-Mitarbeiter ist ein KI-Agent, dem du statt eines Prompts eine Stelle gibst: eine Rolle, ein in Zahlen gemessenes Ziel, Arbeitszeiten und einen Ort, an dem er Arbeit bekommt. Er wacht von selbst auf, übernimmt die nächste Aufgabe, meldet seinen Fortschritt und fragt dich, wenn er nicht weiterkommt, so wie es ein neuer Kollege tun würde. Diese Anleitung erklärt, worin er sich von einem KI-Agenten oder einem Chatbot unterscheidet, zeigt Beispiele nach Rolle und führt dich durch die Einstellung deines ersten.",
    cta: "Loslegen",
    secondary: "Beispiele ansehen",
    secondaryHref: "#examples",
  },
  sections: [
    {
      kind: "text",
      title: "KI-Mitarbeiter: eine Definition",
      text: [
        "Ein KI-Mitarbeiter ist ein autonomer KI-Agent, der für eine dauerhafte Aufgabe eingerichtet ist, nicht für eine einzelne. Er hat dieselben Bestandteile wie eine Stelle für einen Menschen:",
      ],
      points: [
        "Eine Rolle, etwa SEO-Spezialist oder Softwareentwickler. Sie bestimmt, woran er arbeitet und welche Tools er nutzt.",
        "Ein Ziel in Zahlen, etwa 10 % mehr Search-Console-Klicks pro Monat, auf das er seine Arbeit ausrichtet.",
        "Arbeitszeiten und einen Heartbeat: Während seiner Schicht wacht er nach Zeitplan auf, außerhalb davon schläft er.",
        "Eine Arbeitswarteschlange, meist ein Board mit Issues, auf dem du ihm Aufgaben zuweist und ihren Status siehst.",
        "Einen Weg zu dir: Er bittet um Reviews, Berechtigungen und fehlende Informationen, statt zu raten.",
      ],
    },
    {
      kind: "table",
      id: "vs-ai-agent",
      title: "KI-Mitarbeiter vs. KI-Agent vs. Chatbot",
      text: [
        "Die drei Begriffe überschneiden sich, und Anbieter verwenden sie recht frei. Der nützliche Unterschied: Wer stößt die Arbeit an, und wie lange dauert die Aufgabe?",
      ],
      headers: ["", "Chatbot", "KI-Agent", "KI-Mitarbeiter"],
      rows: [
        ["Beginnt die Arbeit", "Wenn du eine Nachricht schickst", "Wenn du ihm eine Aufgabe gibst", "Von selbst, nach Zeitplan"],
        ["Umfang", "Eine Antwort", "Eine Aufgabe, viele Schritte", "Eine dauerhafte Rolle"],
        ["Nutzt Tools", "Selten", "Ja: Dateien, Code, Browser, APIs", "Ja, dieselben wie der Agent, auf dem er läuft"],
        ["Gemessen an", "Der Antwort", "Ob die Aufgabe erledigt ist", "Einem Ziel oder einer KPI über Wochen"],
        ["Gedächtnis zwischen Läufen", "Der Chatverlauf", "Meist keins", "Seine Issues, Kommentare und Notizen"],
        ["Wenn er feststeckt", "Wartet auf dich", "Bricht ab oder rät", "Schreibt dir und macht mit anderer Arbeit weiter"],
      ],
    },
    {
      kind: "text",
      id: "examples",
      title: "Beispiele für KI-Mitarbeiter nach Rolle",
      text: [
        "KI-Mitarbeiter funktionieren am besten in Jobs, deren Ergebnis sich prüfen und deren Ziel sich zählen lässt. Sechs Rollen, die heute gut funktionieren:",
      ],
      points: [
        "[SEO-Spezialist](/ai-employees/seo-specialist): findet fehlende Keywords, verbessert Titel und interne Links, reicht Sitemaps ein und berichtet, was sich bewegt hat. Ziel: Search-Console-Klicks.",
        "[Growth-Marketer](/ai-employees/marketing-agent): wertet den Funnel aus, setzt A/B-Tests auf, entwirft Anzeigentexte und behält die Varianten, die gewinnen. Ziel: Trial-Anmeldungen.",
        "[Social-Media-Manager](/ai-employees/social-media-manager): entwirft und plant Posts, beantwortet Erwähnungen und lernt, welche Posts ankommen. Ziel: Follower oder Engagement.",
        "[Softwareentwickler](/ai-employees/software-engineer): übernimmt Bugs, öffnet Pull Requests mit Tests und bittet um ein Review. Ziel: gemergte Pull Requests.",
        "[UI-Designer](/ai-employees/ui-designer): bringt Typografie, Abstände und Komponenten in deinem echten Code in Ordnung und prüft Dark Mode und Barrierefreiheit. Ziel: fertige Screens.",
        "[App-UI-Designer](/ai-employees/app-designer): gestaltet Screens für iOS und Android und prüft sie im Simulator. Ziel: fertige App-Screens.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So stellst du deinen ersten KI-Mitarbeiter ein",
      steps: [
        {
          title: "Wähle einen Job mit einer Zahl dahinter",
          text: "Fang mit einer Rolle an, deren Ergebnisse du zählen und prüfen kannst, etwa SEO oder Bugfixing. Formuliere das Ziel so, wie du es für einen Menschen tun würdest: „10 % mehr Search-Console-Klicks pro Monat“, nicht „bei SEO helfen“.",
        },
        {
          title: "Wähle den Agenten, auf dem er läuft",
          text: "Ein KI-Mitarbeiter braucht darunter einen leistungsfähigen Agenten, der Dateien lesen, Befehle ausführen und Tools nutzen kann. Claude Code und Codex sind heute die stärksten, und ein Abo, das du schon bezahlst, kann ihn betreiben. Es gibt also keine separate Rechnung für Tokens.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Bestimme, wann er im Dienst ist und wie oft er aufwacht, zum Beispiel alle 30 Minuten von 9:00 bis 18:00 Uhr an Werktagen. Der Heartbeat macht ihn proaktiv; wie du das von Hand einrichtest, siehst du für [Claude Code](/proactive-claude-code) oder [Codex](/proactive-codex). Für einen einmaligen Job nutzt du [Claude Code im Headless-Modus](/blog/claude-code-background-agents).",
        },
        {
          title: "Gib ihm ein Board, keinen Chat",
          text: "Weise Arbeit als Issues mit Status, Priorität und Kommentaren zu. Der Mitarbeiter nimmt sich bei jedem Heartbeat das nächste vor, aktualisiert es unterwegs und hinterlässt ein Protokoll, das du später durchsehen kannst.",
        },
        {
          title: "Leg fest, was dein Ja braucht",
          text: "Liste auf, welche Aktionen er allein ausführen darf und bei welchen er fragen muss, etwa Veröffentlichen, Mergen, Geld ausgeben oder Änderungen an der Produktion. Diese gibst du in einem Posteingang frei.",
        },
        {
          title: "Prüfe wöchentlich gegen das Ziel",
          text: "Schau auf die Zahl, lies, was er geliefert hat, und pass seinen Backlog an, wie im Einzelgespräch mit einem Menschen. Stell einen zweiten Mitarbeiter erst ein, wenn sich der erste lohnt.",
        },
      ],
    },
    {
      kind: "text",
      title: "Was ein KI-Mitarbeiter kostet",
      text: [
        "Es gibt zwei gängige Modelle. Manche Plattformen berechnen pro Mitarbeiter und Monat und betreiben das Modell für dich. Andere, wie Crewmark, lassen den Mitarbeiter in einem Agenten laufen, den du schon abonniert hast, etwa Claude Code oder Codex. Die Kosten sind dann das Abo, das du ohnehin hast.",
        "So oder so kostet er weit weniger als eine Vollzeitstelle, aber nicht ohne deine Zeit: Rechne mit ein paar Minuten am Tag, um Fragen zu beantworten und Arbeit zu prüfen, besonders in den ersten Wochen.",
        "Preise, Gratis-Pläne und wie die Arbeit startet, für acht Plattformen nebeneinander: [die besten Plattformen für KI-Mitarbeiter im Vergleich](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "text",
      title: "Was KI-Mitarbeiter (noch) nicht können",
      points: [
        "Eine Entscheidung verantworten. Sie machen Vorschläge, und alles Riskante muss weiterhin jemand Verantwortliches freigeben.",
        "Ohne Zugang arbeiten. Ein KI-Mitarbeiter ist nur so nützlich wie die Tools, Konten und der Kontext, die du ihm gibst.",
        "Urteilsvermögen in unklaren Jobs ersetzen. Rollen mit vagen Zielen, vielen Meetings oder Beziehungsarbeit brauchen weiterhin Menschen.",
        "Laufen, während dein Computer aus ist, wenn er mit lokalen Dateien arbeitet. Cloud-Setups können das, lokale nicht.",
      ],
    },
    {
      kind: "steps",
      kicker: "Mit Crewmark",
      title: "Einen KI-Mitarbeiter bei Crewmark einstellen",
      text: [
        "Crewmark macht aus deinem Claude-Code- oder Codex-Agenten einen KI-Mitarbeiter: mit Rolle, Ziel, Arbeitszeiten und Heartbeat, und die Arbeit wird auf einem gemeinsamen Board zugewiesen.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle im Marktplatz",
          text: "Fertige Mitarbeiter kommen mit eingerichteten Skills, Ziel und Zeitplan: SEO-Spezialist, Growth-Marketer, Social-Media-Manager, Softwareentwickler, UI-Designer und App-UI-Designer.",
        },
        {
          title: "Verbinde den Agenten, für den du schon zahlst",
          text: "Führe den Setup-Befehl in Claude Code, Codex, DeepSeek Harness oder OpenCode aus. Diese Unterhaltung wird zum Mitarbeiter und behält ihr Gedächtnis zwischen den Weckrufen.",
        },
        {
          title: "Weise Issues zu und beantworte seine Nachrichten",
          text: "Er wacht im Takt seines Heartbeats auf, nimmt das nächste Issue, kommentiert seine Arbeit und schreibt dir, wenn er ein Review oder eine Berechtigung braucht. Du kannst auch vom Handy aus nachsehen; siehe [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "So stellst du deinen ersten KI-Mitarbeiter ein" },
  mid: {
    title: "Einstellen ohne neue Rechnung für Tokens",
    text: "Crewmark gibt deinem Claude-Code- oder Codex-Agenten eine Rolle, ein Ziel und Arbeitszeiten und lässt ihn mit dem Abo laufen, für das du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu KI-Mitarbeitern",
    items: [
      {
        q: "Was ist ein KI-Mitarbeiter?",
        a: "Ein KI-Agent, der für eine dauerhafte Aufgabe eingerichtet ist: Er hat eine Rolle, ein Ziel in Zahlen, Arbeitszeiten und eine Warteschlange mit Arbeit, beginnt nach Zeitplan von selbst und fragt einen Menschen, wenn er nicht weiterkommt.",
      },
      {
        q: "Was ist der Unterschied zwischen einem KI-Mitarbeiter und einem KI-Agenten?",
        a: "Ein KI-Agent erledigt eine Aufgabe, wenn du ihn darum bittest. Ein KI-Mitarbeiter ist ein Agent mit einer festen Rolle: Er beginnt die Arbeit von selbst, führt einen Backlog und wird über Wochen an einem Ziel gemessen.",
      },
      {
        q: "Kann ein KI-Mitarbeiter einen menschlichen Mitarbeiter ersetzen?",
        a: "Bei eng umrissener, messbarer Arbeit wie SEO-Korrekturen oder Routine-Bugs kann er einen Großteil der Ausführung übernehmen. Entscheidungen, Beziehungen und unklare Probleme brauchen weiterhin einen Menschen, und jemand muss seine Arbeit prüfen.",
      },
      {
        q: "Wofür eignen sich KI-Mitarbeiter?",
        a: "Für Jobs mit prüfbarem Ergebnis und zählbarem Ziel: SEO, Growth-Experimente, Social-Media-Posts, Bugfixes, UI-Feinschliff und App-Screens.",
      },
      {
        q: "Was kostet ein KI-Mitarbeiter?",
        a: "Das hängt vom Modell ab: Manche Plattformen berechnen pro Mitarbeiter und Monat, Crewmark dagegen lässt Mitarbeiter mit dem Claude-Code- oder Codex-Abo laufen, für das du schon zahlst, ohne zusätzliche Rechnung für Tokens.",
      },
      {
        q: "Ist es sicher, einem KI-Mitarbeiter Zugang zu geben?",
        a: "Gib ihm nur den Zugang, den die Rolle braucht, und verlange deine Freigabe für Veröffentlichungen, Merges, Zahlungen und Änderungen an der Produktion. Ein gutes Setup protokolliert jeden Schritt, damit du ihn prüfen kannst.",
      },
    ],
  },
  cta: {
    title: "Stell deinen ersten KI-Mitarbeiter ein.",
    text: "Gib deinem Claude-Code- oder Codex-Agenten eine Rolle, ein Ziel und Arbeitszeiten und weise ihm Arbeit auf einem Board zu.",
    button: "Loslegen",
  },
  checked: "Zuletzt geprüft am 2. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude Code ist eine Marke von Anthropic; Codex ist eine Marke von OpenAI.",
};
