import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work: Was der Modus kann, Kosten, Download und vs Codex",
    description:
      "ChatGPT Work erklärt: wie sich Work vom Chat unterscheidet, welche Pläne ihn enthalten, was sie kosten, die Desktop-App und vs Codex und Claude Cowork.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · OpenAI",
    title: "ChatGPT Work: was OpenAIs Work-Modus kann und wie du ihn nutzt",
    lead: "ChatGPT Work ist ein Modus in ChatGPT, mit dem du Aufgaben mit klarem Ergebnis abgibst. Du wechselst von Chat zu Work, beschreibst, was du zurückhaben willst, und ChatGPT plant die Aufgabe, nutzt deine Dateien, Plugins, das Web, einen Browser und Code und liefert Arbeit zum Prüfen, etwa eine Präsentation, eine Tabelle, ein Dokument oder eine Analyse. Er teilt seine Kernfunktionen und Nutzungslimits mit Codex, OpenAIs Coding-Agent. Hier erfährst du, was er kann, welche Pläne ihn enthalten, wie du ihn einrichtest, wie er vor dem Handeln fragt und wie er sich von Codex, Claude Cowork und Copilot Cowork unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was ChatGPT Work ist",
      points: [
        "Ein Modus, keine eigene App: In ChatGPT wechselst du von Chat zu Work. OpenAI empfiehlt Chat für Antworten und Work für erledigte Aufgaben.",
        "Er liefert prüfbare Arbeit: Präsentationen, Tabellen, Dokumente, Analysen und wiederkehrende Updates, erstellt aus deinen Dateien, Plugins, dem Web, einem Browser und Code.",
        "Er läuft in der Cloud: Im Web laufen Aufgaben in einer verwalteten Cloud-Umgebung auf OpenAIs Infrastruktur und gehen weiter, nachdem du die App geschlossen hast. In der Desktop-App kannst du, wenn aktiviert, auch lokal mit deinen Dateien, Apps und deinem Browser arbeiten lassen.",
        "Er teilt seinen Kern mit Codex: OpenAI beschreibt Work als dieselben Kernfunktionen mit einer Oberfläche für die alltägliche Arbeit. Technische Details wie Git- und Shell-Ausgaben und der Pull-Request-Bereich fehlen.",
        "Er teilt Arbeit auf: ChatGPT kann unabhängige Teile einer Aufgabe an Subagents geben, und du kannst ihren Fortschritt verfolgen.",
        "Er wiederholt Arbeit: geplante Aufgaben und, im Web und mobil, Aufgaben, die durch Ereignisse in Gmail, Slack oder GitHub ausgelöst werden.",
        "OpenAI stellte ihn in seinem Wochenüberblick What's new für die Woche vom 6. bis 10. Juli 2026 vor.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work: Kosten und welche Pläne ihn enthalten",
      text: [
        "Preise aus OpenAIs Preisdokumentation am 13. November 2026, in US-Dollar. Work nutzt dieselben Preise, Credits und Nutzungslimits wie Codex, und längere oder komplexere Aufgaben können mehr Credits verbrauchen.",
      ],
      headers: ["Plan", "Preis", "ChatGPT Work"],
      rows: [
        ["Free", "$0/Monat", "Eingeschränkter Zugang, nur in der Desktop-App; keine geplanten Aufgaben"],
        ["Go", "$8/Monat", "Eingeschränkter Zugang, nur in der Desktop-App; geplante Aufgaben"],
        ["Plus", "$20/Monat", "Desktop, Web und mobil; zusätzliche Credits zukaufbar"],
        ["Pro", "Ab $100/Monat (Pläne für $100, $200 oder $500)", "Desktop, Web und mobil; zusätzliche Credits zukaufbar"],
        ["Business (ab 2 Nutzern)", "$20/Nutzer/Monat bei jährlicher Abrechnung oder $25 bei monatlicher Abrechnung", "Gemeinsame Workspace-Credits bei Credit-basierten Verträgen"],
        ["Enterprise und Edu", "Über den Vertrieb", "Gemeinsame Workspace-Credits; Admins steuern den Zugriff auf Work, Plugins und Browser-Nutzung"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du ChatGPT Work ein",
      steps: [
        {
          title: "Wähl aus, wo du ihn nutzt",
          text: "Work läuft im Web, in der ChatGPT-Desktop-App für macOS, Windows und Linux sowie in ChatGPT für iOS und Android. Mit Free und Go lädst du die Desktop-App herunter: In diesen Plänen gibt es Work nur dort.",
        },
        { title: "Wechsle von Chat zu Work", text: "Starte eine Aufgabe im Work-Modus und beschreib das Ergebnis, das du zurückhaben willst, etwa ein Briefing, eine Präsentation, eine Analyse oder eine Tabelle." },
        {
          title: "Gib ihm Quellen",
          text: "Lade Dateien hoch oder nutz ein Projekt und verbinde Plugins wie Slack, Google Drive, SharePoint, E-Mail, Kalender, CRMs und Projekt-Tracker. In der Desktop-App kann er außerdem lokale Dateien, eine Browser-Erweiterung und Computer Use unter macOS und Windows nutzen, in unterstützten Regionen.",
        },
        {
          title: "Wähl ein Modell und wie er fragt",
          text: "Der Guide empfiehlt GPT-6 Astra für anspruchsvolle Arbeit, GPT-6.1 Sol für komplexe Arbeit zu geringeren Kosten und Luna für einfachere Aufgaben. Starte in der Desktop-App mit dem Berechtigungsmodus Ask for approval.",
        },
        {
          title: "Lass Aufgaben sich wiederholen",
          text: "Leg eine geplante Aufgabe aus Chat oder Work im Web oder in der Desktop-App an, oder lös im Web und mobil eine durch ein Ereignis in Gmail, Slack oder GitHub aus. Eine Aufgabe kann einen Ereignis-Auslöser nicht mit einem Zeitplan kombinieren.",
        },
      ],
      source: { label: "Quelle: OpenAI-Doku, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei ChatGPT Work die Kontrolle behältst",
      points: [
        "ChatGPT zeigt seinen Fortschritt und hält an, wenn es Informationen oder eine Freigabe für wichtige Aktionen braucht; du kannst Fragen beantworten oder mitten in der Aufgabe die Richtung ändern.",
        "In der Desktop-App gibt es die Berechtigungsmodi Ask for approval (der empfohlene Start), Approve for me (berechtigte Anfragen gehen in eine automatische Prüfung) und, wo verfügbar, vollen Zugriff. Eine Sandbox setzt Grenzen für Dateien und Netzwerk.",
        "Standardmäßig fragt der Cloud-Browser, bevor er eine neue Website besucht (Always ask, Auto approve oder Always allow), und kann vor folgenreichen Aktionen erneut fragen.",
        "Eine Cloud-Aufgabe übernimmt weder die Dateien, Apps und Browser-Sessions noch den Netzwerkzugang deines Computers, und der Cloud-Browser kann deine lokalen Tabs, Erweiterungen, deinen Verlauf und deine gespeicherten Passwörter nicht nutzen.",
        "Workspace-Admins steuern den Zugriff auf Work, Plugins, Browser-Nutzung und Netzwerkzugang. In Enterprise- und Edu-Workspaces sind Plugins standardmäßig aus, und den Zugriff auf den Cloud-Browser muss ein Admin freischalten.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork und Copilot Cowork",
      text: [
        "Angaben aus der Dokumentation und von den Preisseiten jedes Anbieters, geprüft am 13. November 2026. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker). Für Coding-Arbeit siehe [Claude Code vs Codex](/blog/claude-code-vs-codex) und [Anwendungsfälle für Codex](/use-cases/codex); zu Anthropics Agenten den [Guide zu Claude Cowork](/personal-agent/claude-cowork).",
        "Im direkten Vergleich: [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). Guides: [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["Hersteller", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["Gemacht für", "Aufgaben, an deren Ende prüfbare Arbeit steht: Präsentationen, Tabellen, Dokumente, Analysen", "Programmieren: untersucht, bearbeitet und startet Code in einem Repository", "Wissensarbeit ohne Programmieren", "Mehrstufige Aufgaben in Microsoft 365"],
        ["Wo es läuft", "OpenAIs Cloud; lokal in der Desktop-App, wenn aktiviert", "CLI, IDE-Erweiterung und ChatGPT-Desktop-App; Codex Cloud", "Anthropics Cloud; lokale Dateien über Claude Desktop", "Microsofts Cloud, mit OneDrive und SharePoint"],
        ["Wer es bekommt", "ChatGPT-Pläne; eingeschränkt bei Free und Go", "ChatGPT-Pläne oder ein OpenAI-API-Key (ohne Cloud-Funktionen)", "Bezahlte Claude-Pläne, Pro ab $20/Monat", "Lizenz für Microsoft 365 Copilot plus Copilot Credits"],
        ["Nutzung", "Teilt Preise, Credits und Limits mit Codex", "Teilt Preise, Credits und Limits mit Work", "Verbraucht Planlimits schneller als der Chat", "Abrechnung pro Nutzung in Copilot Credits"],
        ["Wiederkehrende Arbeit", "Geplante Aufgaben; Ereignisse aus Gmail, Slack und GitHub", "Geplante Aufgaben in der ChatGPT-App und im Web", "Geplante Aufgaben, stündlich bis wöchentlich, in der Cloud", "Geplante Prompts; Ereignisse aus E-Mail, Teams und Connectoren"],
        ["Freigaben", "Ask for approval, Approve for me oder voller Zugriff; eine Sandbox", "Ask for approval, Approve for me oder voller Zugriff; eine Sandbox", "Modi Manual, Auto oder Skip", "Freigabedialog mit Vorschau vor heiklen Aktionen"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Work für deine Dokumente. Crewmark für deine Codebasis.",
      text: [
        "ChatGPT Work übernimmt eine Aufgabe und gibt dir etwas zum Prüfen zurück. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen, sodass Entwicklungs-, SEO- und Marketingarbeit in einem Repository nach Zeitplan erledigt wird.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an, etwa Softwareentwickler oder SEO-Spezialist." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Codex](/use-cases/codex) und [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "ChatGPT Work einrichten" },
  mid: {
    title: "Du willst einen KI-Kollegen für deine Codebasis?",
    text: "Crewmark gibt deinem Codex oder Claude Code eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu ChatGPT Work",
    items: [
      {
        q: "Was ist ChatGPT Work?",
        a: "Ein Modus in ChatGPT, mit dem du Aufgaben mit klarem Ergebnis delegierst. ChatGPT plant die Aufgabe, nutzt deine Dateien, Plugins, das Web, einen Browser und Code und liefert Arbeit zum Prüfen, etwa Präsentationen, Tabellen, Dokumente und Analysen.",
      },
      {
        q: "ChatGPT Work vs Chat: Was ist der Unterschied?",
        a: "Es sind zwei Modi in derselben App. OpenAI empfiehlt Chat für Antworten und Work für erledigte Aufgaben: Work plant mehrstufige Aufgaben, arbeitet in der Cloud weiter, nachdem du die App geschlossen hast, und hält bei wichtigen Aktionen für eine Freigabe an.",
      },
      {
        q: "Ist ChatGPT Work kostenlos, oder brauche ich Plus?",
        a: "Free ($0) und Go ($8 im Monat) bekommen eingeschränkten Zugang zu Work, nur in der Desktop-App. Plus ($20 im Monat) und Pro (ab $100 im Monat) bekommen Work auf dem Desktop, im Web und mobil und können zusätzliche Credits kaufen. Business kostet $20 pro Nutzer und Monat bei jährlicher Abrechnung; Enterprise und Edu laufen über den Vertrieb.",
      },
      {
        q: "ChatGPT Work vs Codex: Was ist der Unterschied?",
        a: "Sie teilen sich Kernfunktionen, Ausführung, Preise, Credits und Nutzungslimits. Codex ist OpenAIs Coding-Agent, mit CLI, IDE-Erweiterung und Cloud-Aufgaben für Repositorys; Work ist die Oberfläche für die alltägliche Arbeit, ohne Details wie Git- und Shell-Ausgaben oder einen Pull-Request-Bereich.",
      },
      {
        q: "Muss ich für ChatGPT Work eine App herunterladen?",
        a: "Mit Plus oder Pro nicht: Work läuft auch im Web und in ChatGPT für iOS und Android. Mit Free und Go gibt es Work nur in der ChatGPT-Desktop-App, die unter macOS, Windows und Linux läuft. Für die Arbeit mit lokalen Dateien, die Browser-Erweiterung und Computer Use brauchst du ebenfalls die Desktop-App.",
      },
      {
        q: "Können Studierende ChatGPT Work nutzen?",
        a: "In den Plänen Free und Go gibt es Work mit eingeschränktem Zugang in der Desktop-App. Workspaces von ChatGPT Edu nutzen Work mit gemeinsamen Workspace-Credits, wobei Admins den Zugriff auf Work, Plugins und Browser-Nutzung steuern; Preise für Edu gibt es über OpenAIs Vertriebsteam.",
      },
    ],
  },
  cta: {
    title: "Gib die Dokumente an Work ab. Und gib auch deinen Coding-Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Codex und Claude Code KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit OpenAIs Dokumentation und Preisseiten zu ChatGPT Work und Codex abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu OpenAI, Anthropic oder Microsoft, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
