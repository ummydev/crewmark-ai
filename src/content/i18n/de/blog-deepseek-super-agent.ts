import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent (dsh-superagent): Einrichtung",
    description:
      "DeepSeeks Open-Source-Super-Agent: proaktiver Coding-Agent für ein GitHub-Repo. Was er tut, Einrichtung, Sicherheitsgrenzen und Vergleich.",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Super-Agent: was er ist und wie du ihn einrichtest",
    lead: "dsh-superagent ist DeepSeeks quelloffener, proaktiver Coding-Agent für ein GitHub-Repository, veröffentlicht am 31. Oktober 2026 unter der MIT-Lizenz. Er läuft auf DeepSeek Harness, beobachtet GitHub und optional Feishu und macht aus Anfragen Pull Requests, jede in einer eigenen Session und einem eigenen Verzeichnis bearbeitet. Diese Anleitung erklärt, was er tut, was er braucht, wie du ihn einrichtest, was „proaktiv“ in der Praxis heißt und wie er sich im Vergleich schlägt.",
    cta: "Loslegen",
    secondary: "Direkt zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was DeepSeek Super-Agent ist",
      text: [
        "Das Repository beschreibt dsh-superagent als „proaktiven Coding-Agenten für ein GitHub-Repository, verpackt als Bundle für DeepSeek Harness“. Bittet jemand von einer Liste erlaubter Personen ihn um Arbeit, legt er ein Arbeitselement an (ein Ticket), bearbeitet es in einer eigenen Agent-Session und einem eigenen Verzeichnis und antwortet in der ursprünglichen Unterhaltung, zum Beispiel mit einem Pull Request. Ein Web-Panel zeigt nur das, was einen Menschen braucht.",
        "DeepSeek nennt ihn einen Forschungsprototyp, „kein offizielles DeepSeek-Produkt“. Der öffentliche Code unterscheidet sich von DeepSeeks interner Version, und manche Entwürfe aus DeepSeeks Beitrag sind Zukunftsrichtungen, die der Prototyp nicht umsetzt.",
      ],
      points: [
        "Quellen: GitHub-Benachrichtigungen, abonnierte Issues und Pull Requests, CI-Änderungen sowie gemergte oder geschlossene Pull Requests; Feishu-Chats, wenn du sie hinzufügst.",
        "Parallele Arbeit: Jedes Ticket bekommt eine eigene Executor-Session namens `worker-<ticket id>` und ein eigenes Verzeichnis, meist ein `git worktree`-Checkout, bis zu einem Limit für Gleichzeitigkeit, das du festlegst.",
        "Folgekommentare: Spätere Kommentare zu einem Issue oder Pull Request erreichen das Ticket, das daran arbeitet, ohne dass du den Agenten erneut erwähnen musst.",
        "Seine Regel für sich selbst: „so wenig menschliche Aufmerksamkeit wie möglich beanspruchen und so viel Nutzen wie möglich liefern“. Er bestätigt eine Anfrage einmal, bleibt während der Arbeit still und schreibt erst wieder mit einem Ergebnis, einer Frage oder einem Fehler.",
      ],
    },
    {
      kind: "table",
      title: "Ist er wirklich proaktiv? Die drei Accept-Modi",
      text: [
        "Medienberichte beschreiben einen Agenten, der Bugs behebt, bevor man ihn fragt. Die Dokumentation ist vorsichtiger: Eine direkte Anfrage einer erlaubten Person funktioniert immer, aber Arbeit, die niemand angefragt hat, braucht eine Regel, die dein Team geschrieben hat, und der Standardmodus hält nur fest, was der Agent getan hätte.",
      ],
      headers: ["Accept-Modus", "Was mit nicht angefragter Arbeit passiert"],
      rows: [
        ["`off`", "Wird ignoriert: Nur direkte Anfragen erlaubter Personen starten Arbeit"],
        ["`observe` (Standard)", "Wird anhand deiner Regeln bewertet und als „würde annehmen“ festgehalten, es startet aber nichts"],
        ["`auto`", "Wird gestartet, wenn mindestens eine deiner Regeln zutrifft"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du dsh-superagent ein",
      text: [
        "Du brauchst Node.js 22.19+ oder 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 oder ein späteres 0.2-Release und einen in DeepSeek Harness konfigurierten Modellanbieter. Die Einrichtung ist lang, deshalb lässt das Repository deinen Coding-Agenten dich Schritt für Schritt durchführen.",
      ],
      steps: [
        {
          title: "DeepSeek Harness installieren",
          text: "DeepSeek Harness (`dsh`) ist DeepSeeks quelloffenes Agent-Harness in der Developer Preview. Starte es einmal und konfiguriere einen Modellanbieter; die Web-Oberfläche öffnet sich unter `http://127.0.0.1:3080`.",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "Repository klonen und SETUP.md an deinen Coding-Agenten geben",
          text: "Bitte deinen Coding-Agenten im Checkout, SETUP.md zu lesen. Er prüft deinen Rechner, stellt pro Nachricht eine Frage, zeigt den ganzen Plan einmal und installiert erst dann etwas.",
          code: `git clone ${repo}.git\ncd dsh-superagent-prototype\n# dann deinen Coding-Agenten bitten:\n# Read SETUP.md in this repository and set up dsh-superagent with me.`,
        },
        {
          title: "Die Einrichtungsfragen beantworten",
          text: "Woher die Anfragen kommen (nur GitHub oder auch Feishu), welches Repository, mit welchem GitHub-Konto der Agent handelt (einem eigenen, nie deinem), welche Logins ihn um Arbeit bitten dürfen, von welchem Klon jedes Ticket auscheckt, wen seine Commits als Autor nennen und ob er Auto-Merge aktivieren darf (empfohlene Antwort: nein).",
        },
        {
          title: "Die Schritte erledigen, die nur du machen kannst",
          text: "Lege das GitHub-Konto des Agenten an, nimm mit diesem Konto die Repository-Einladung an und melde seine CLI an. Der Agent fragt im Chat nie nach einem Geheimnis; er gibt dir die genauen Befehle, die du in deinem eigenen Terminal ausführst.",
        },
        {
          title: "Die angewendeten Standardwerte prüfen",
          text: "Ein separates DeepSeek-Harness-Profil namens `superagent` auf Port 3082, Branches mit dem Präfix `agent/`, der Accept-Modus `observe` und eine stündliche Prüfung, die den Agenten neu startet, falls er gestoppt wurde.",
        },
        {
          title: "Die erste Anfrage schicken",
          text: "Kommentiere von einem erlaubten Konto aus `@<agent login> <request>` an einem Issue. Etwa eine Minute später erscheint ein Ticket im Panel; der Agent bestätigt, arbeitet in seinem eigenen Verzeichnis und antwortet im selben Thread, meist mit einem Pull Request.",
        },
      ],
      source: { label: "Quelle: das dsh-superagent-Repository auf GitHub", href: repo },
    },
    {
      kind: "text",
      title: "Sicherheit: was du vor dem Start wissen solltest",
      points: [
        "Die Worker laufen mit `danger-full-access` als dein Betriebssystem-Benutzer. Sie können dein Home-Verzeichnis lesen und jedes Programm per Pfad ausführen; die Konto-Wrapper wählen Zugangsdaten aus, sind aber keine Sicherheitsgrenze.",
        "Zur Isolation sagt DeepSeeks Dokumentation, den Agenten unter einem eigenen Betriebssystem-Konto zu betreiben, das nur die Zugangsdaten des Agenten enthält.",
        "Alles, was er schreibt, erscheint unter dem GitHub-Konto des Agenten; die Einrichtung empfiehlt deshalb ein eigenes Konto und zu Beginn eine kurze Liste erlaubter Personen.",
        "Nachrichten und Kommentare können nicht ändern, wer Arbeit anfragen darf: Erlaubnislisten, Regeln und Accept-Modus lassen sich nur im Panel ändern.",
        "Nach jedem Durchgang hat Hintergrundarbeit höchstens 30 Minuten, um fertig zu werden, bevor ihre Shell-Jobs gestoppt werden und das Ticket als wartend markiert wird.",
        "Es ist ein Forschungsprototyp, und DeepSeek Harness ist eine Developer Preview, in der mit Breaking Changes zu rechnen ist.",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "Alle drei sind Agenten, die weiterarbeiten, ohne dass du im Chat bist, starten ihre Arbeit aber unterschiedlich. Super-Agent wartet auf eine Erwähnung oder eine Regel, die dein Team geschrieben hat; [ChatGPT dots](/blog/chatgpt-dots) leben in OpenAIs Cloud; Crewmark weckt den Coding-Agenten, den du schon nutzt, DeepSeek Harness eingeschlossen, nach Zeitplan.",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Läuft auf", "Deinem Rechner, in DeepSeek Harness", "OpenAIs Cloud-Computer", "Deinem Computer, in DeepSeek Harness, Claude Code, Codex oder OpenCode"],
        ["Startet die Arbeit", "Eine @-Erwähnung einer erlaubten Person oder eine Regel im Modus `auto`", "Deine Nachrichten, Zeitpläne und eigene Recherche", "Ein Heartbeat alle 15–60 Minuten während der Arbeitszeit"],
        ["Arbeitswarteschlange", "Tickets aus GitHub und Feishu-Threads", "Gesprächs-Threads und Scheduled", "Issues auf einem Kanban-Board"],
        ["Umfang", "Ein GitHub-Repository pro Einrichtung", "Deine verbundenen Apps", "Ein Mitarbeiter pro Rolle, etwa SEO oder Entwicklung"],
        ["Kosten", "Kostenlos, MIT-Lizenz; du bezahlst deinen Modellanbieter", "Pro- und Business-Premium-Pläne", "Offene Registrierung; läuft mit dem Agenten und dem Plan, die du schon hast"],
        ["Status", "Forschungsprototyp", "Wird ausgerollt", "Registrierung offen"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Mach deine DeepSeek-Harness-, Claude-Code- oder Codex-Session proaktiv",
      text: [
        "Super-Agent braucht für jedes Repository ein eigenes Profil, eigene Konten und eine eigene Einrichtung. Crewmark arbeitet mit dem Agenten, den du schon nutzt, DeepSeek Harness eingeschlossen: Es gibt dieser Session eine Rolle, ein Ziel und Arbeitszeiten und weckt sie per Heartbeat, damit sie das nächste Issue von einem Board nimmt, für jede Art von Arbeit, nicht nur für ein Repository.",
      ],
      steps: [
        {
          title: "Eine Session zum Mitarbeiter machen",
          text: "Wähle eine Rolle, etwa Softwareentwickler oder SEO-Spezialist, schreibe sein Ziel als Zahl auf und führe den Einrichtungsbefehl in DeepSeek Harness, Claude Code, Codex oder OpenCode aus.",
        },
        {
          title: "Den Heartbeat die Arbeit starten lassen",
          text: "Während seiner Arbeitszeit wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf und macht dort weiter, wo er aufgehört hat; siehe [so machst du Claude Code proaktiv](/proactive-claude-code).",
        },
        {
          title: "Issues zuweisen und auf seine Nachrichten antworten",
          text: "Leg die Arbeit auf das Board; der Mitarbeiter nimmt sie, kommentiert unterwegs und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeeks dsh-superagent einrichten" },
  mid: {
    title: "Du nutzt schon DeepSeek Harness, Claude Code oder Codex?",
    text: "Crewmark macht diese Session proaktiv: ein Heartbeat, Arbeitszeiten und ein Board mit Issues, mit dem Plan, für den du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu DeepSeek Super-Agent",
    items: [
      {
        q: "Was ist DeepSeek Super-Agent?",
        a: "dsh-superagent ist ein quelloffener, proaktiver Coding-Agent für ein GitHub-Repository, von DeepSeek am 31. Oktober 2026 als Forschungsprototyp unter der MIT-Lizenz veröffentlicht. Er läuft auf DeepSeek Harness, nimmt Anfragen von GitHub und optional von Feishu entgegen und antwortet mit Pull Requests.",
      },
      {
        q: "Ist DeepSeek Super-Agent kostenlos?",
        a: "Der Code ist unter der MIT-Lizenz kostenlos. Er läuft auf DeepSeek Harness mit einem Modellanbieter, den du konfigurierst, du zahlst also für die Modellnutzung. DeepSeek hat keine gehostete Version angekündigt.",
      },
      {
        q: "Wo finde ich DeepSeek Super-Agent auf GitHub?",
        a: "Unter github.com/deepseek-ai/dsh-superagent-prototype. DeepSeek Harness, das Agent-Harness, auf dem er läuft, liegt unter github.com/deepseek-ai/deepseek-harness.",
      },
      {
        q: "Behebt DeepSeek Super-Agent Bugs, ohne gefragt zu werden?",
        a: "Nur, wenn du es erlaubst. Direkte Anfragen erlaubter Personen funktionieren immer, aber nicht angefragte Arbeit braucht eine Regel, die dein Team geschrieben hat, und der Standardmodus `observe` hält nur fest, was er getan hätte. Wechsle zu `auto`, nachdem du diese Einträge geprüft hast.",
      },
      {
        q: "Funktioniert dsh-superagent mit Slack oder Teams?",
        a: "In diesem Prototyp nicht. Er liefert GitHub und Feishu als Quellen mit; sein Cookbook erklärt, wie man eine weitere Quelle hinzufügt.",
      },
      {
        q: "Ist es sicher, ihn auszuführen?",
        a: "Seine Worker laufen mit vollem Zugriff als dein Betriebssystem-Benutzer und können dein Home-Verzeichnis lesen. DeepSeeks Dokumentation empfiehlt daher ein eigenes Betriebssystem-Konto, das nur die Zugangsdaten des Agenten enthält, ein eigenes GitHub-Konto und eine kurze Liste erlaubter Personen.",
      },
      {
        q: "Kann ich Crewmark mit DeepSeek Harness nutzen?",
        a: "Ja. Crewmark verbindet DeepSeek Harness, Claude Code, Codex und OpenCode. Es macht aus einer Session einen KI-Mitarbeiter, der während seiner Arbeitszeit per Heartbeat aufwacht und Issues von einem Board nimmt, mit dem Modellanbieter, den du schon nutzt.",
      },
    ],
  },
  cta: {
    title: "Mach den Agenten, den du schon nutzt, proaktiv.",
    text: "Crewmark macht aus Sessions in DeepSeek Harness, Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 3. November 2026 mit den GitHub-Repositories von dsh-superagent und DeepSeek Harness abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu DeepSeek, OpenAI oder Anthropic, die es auch nicht unterstützen. DeepSeek ist eine Marke von DeepSeek, ChatGPT von OpenAI und Claude Code von Anthropic.",
};
