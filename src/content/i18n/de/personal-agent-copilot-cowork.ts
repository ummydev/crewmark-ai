import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork: Kosten, Credits, Lizenzen und vs Claude Cowork",
    description:
      "Microsoft Copilot Cowork erklärt: was der Agent für Microsoft 365 kann, Kosten in Copilot Credits, Lizenzen, Skills, Einrichtung und vs Claude Cowork.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Microsoft",
    title: "Copilot Cowork: was Microsofts Agent für Microsoft 365 kann und wie er abgerechnet wird",
    lead: "Copilot Cowork ist ein Agent in Microsoft 365 Copilot, der mehrstufige Aufgaben in Microsoft 365 erledigt. Er sendet E-Mails, plant Meetings, erstellt und bearbeitet Word-, Excel-, PowerPoint- und PDF-Dateien, postet in Teams, verwaltet Dateien in OneDrive und SharePoint, durchsucht deine Organisation und führt Deep Research durch, und vor heiklen Aktionen bittet er um Freigabe. Im Juni 2026 wurde er für Geschäfts- und Schulkonten allgemein verfügbar. Hier erfährst du, was er kann, wie Lizenzen und Copilot Credits funktionieren, wie du ihn einrichtest, wie Freigaben funktionieren und wie er sich von Claude Cowork, Claude Code und Codex unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Copilot Cowork ist und wofür man ihn nutzt",
      text: [
        "Microsoft beschreibt Cowork als agentisches System, das in deinem Auftrag mehrstufige Aufgaben in Microsoft 365 erledigt. Zu den vorgesehenen Einsätzen gehören: in einer einzigen Unterhaltung ein Thema recherchieren, ein Dokument schreiben und es an die Beteiligten mailen, wiederkehrende Briefings und Berichte sowie Aufgaben, die auf eingehende E-Mails oder Teams-Nachrichten reagieren.",
      ],
      points: [
        "Er läuft in Microsofts Cloud, in einer isolierten Umgebung. Dateien werden in OneDrive und SharePoint angelegt und von dort gelesen; auf Dateien auf deinem lokalen Gerät hat er keinen Zugriff.",
        "Er kann deinen Browser nutzen: In Cowork im Web laufen Browser-Aufgaben in einem versteckten Microsoft-Edge-Tab auf deinem eigenen Gerät, mit deinen bestehenden Anmeldungen.",
        "Er nutzt Modelle mehrerer Hersteller: Eine Modellauswahl, standardmäßig auf Auto, bietet GPT-, Claude- und Grok-Modelle, je nach Tenant-Einstellungen. Tenants in der EU Data Boundary bekommen nur GPT-Modelle.",
        "Skills und Plugins: Du kannst bis zu 50 eigene Skills als `SKILL.md`-Dateien in OneDrive hinzufügen. Zu den Plugins für Rollen und Branchen gehören Accounting, Finance und Capital Markets for Cowork; weitere Plugins und Connectoren decken Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk und MCP-Apps ab.",
        "Er wiederholt Arbeit: bis zu 25 geplante Prompts pro Nutzer, in normaler Sprache formuliert, plus ereignisgesteuerte Aufgaben, die laufen, wenn eine passende E-Mail eingeht oder eine Teams-Nachricht gepostet wird.",
        "Er verfolgt Aufgaben: Die Ansicht Tasks filtert nach In progress, Needs input, Done und Failed, die Seite Automations listet geplante und ereignisgesteuerte Aufgaben auf, und Projects (Oktober 2026) halten zusammengehörige Aufgaben, Anweisungen und Dateien zusammen.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork: Kosten, Credits und Lizenzen",
      text: [
        "Laut Microsoft Learn, Microsoft Support und Microsofts Copilot Credits Guide (November 2026), geprüft am 13. November 2026, in US-Dollar. Cowork wird nach Nutzung in Copilot Credits abgerechnet, zusätzlich zu einer Lizenz für Microsoft 365 Copilot. Eine Aufgabe hat keine festen Credit-Kosten: Sie hängen vom Modell, der Laufzeit, dem Kontext und den genutzten Tools ab.",
      ],
      headers: ["Posten", "Kosten oder Voraussetzung"],
      rows: [
        ["Lizenz für Microsoft 365 Copilot", "Nötig für Geschäfts- oder Schulkonten und dem Nutzer zugewiesen; ihr Preis steht nicht in der Cowork-Dokumentation"],
        ["Copilot Credits, nutzungsbasiert", "$0.01 pro Copilot Credit, monatlich im Nachhinein abgerechnet"],
        ["Copilot Credit Pre-Purchase Plan (P3)", "Ein im Voraus bezahltes Kontingent für ein Jahr, mit Rabatten von 5 % (300.000 Credits) bis 20 % (300.000.000 Credits); nicht genutzte Credits verfallen am Ende der Laufzeit"],
        ["Einrichtung durch Admins", "Cowork aktiviert, nutzungsbasierte Abrechnung eingeschaltet und eine Ausgabenrichtlinie, die Cowork auswählt; Admins können Credit-Limits pro Nutzer oder Gruppe festlegen"],
        ["Private Microsoft-Konten", "In der Vorschau; brauchen ein berechtigtes Microsoft-365-Abo, Preis nicht angegeben"],
        ["Bildung", "Lehrende und Personal können ihn nutzen; Studierende sind nicht berechtigt"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Copilot Cowork ein",
      steps: [
        {
          title: "Besorg dir die Lizenz",
          text: "Mit einem Geschäfts- oder Schulkonto brauchst du eine dir zugewiesene Lizenz für Microsoft 365 Copilot. Private Konten sind in der Vorschau und brauchen ein berechtigtes Microsoft-365-Abo.",
        },
        {
          title: "Lass ihn von einem Admin einschalten",
          text: "Ein Admin aktiviert Cowork, schaltet die nutzungsbasierte Abrechnung ein und gibt dir über eine Ausgabenrichtlinie, die Cowork auswählt, Zugriff. Für die Browser-Nutzung muss zusätzlich Cowork Browsing aktiviert sein.",
        },
        {
          title: "Öffne Cowork dort, wo du arbeitest",
          text: "Im Web (Edge oder Chrome empfohlen), in der Desktop-App Microsoft Copilot für Windows und macOS, in der Mobil-App für iOS und Android oder direkt in Outlook und Teams.",
        },
        {
          title: "Beschreib die Aufgabe",
          text: "Zum Beispiel: ein Thema recherchieren, ein Dokument schreiben und es an die Leute mailen, die es brauchen. Lass das Modell auf Auto oder wähl eins aus; der Reasoning-Aufwand steht standardmäßig auf Medium.",
        },
        {
          title: "Füg Skills und Automationen hinzu",
          text: "Leg eigene Skills als `SKILL.md`-Dateien in OneDrive ab, formuliere geplante Prompts in normaler Sprache oder lass eine Aufgabe laufen, wenn eine passende E-Mail oder Teams-Nachricht eingeht.",
        },
      ],
      source: { label: "Quelle: Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei Copilot Cowork die Kontrolle behältst",
      points: [
        "Vor heiklen Aktionen wie dem Senden von E-Mails, dem Posten in Teams oder dem Planen von Meetings zeigt Cowork einen Freigabedialog mit Vorschau. Bei Aktionen mit mittlerem und hohem Risiko wird eine Risikostufe angezeigt.",
        "Du kannst einmal freigeben, Nachfragen zu ähnlichen Aktionen für den Rest der Unterhaltung überspringen (bei E-Mail und Teams beschränkt auf einen Empfänger, eine Domain oder immer) oder abbrechen.",
        "Ereignisgesteuerte Aufgaben arbeiten standardmäßig nach dem Prinzip Entwurf und Freigabe, und du kannst jede Aufgabe pausieren, fortsetzen oder abbrechen.",
        "Er kann keine Dateien oder Ordner in OneDrive oder SharePoint löschen und gibt dir den Browser bei CAPTCHAs, Passwörtern, MFA-Codes und Kontoänderungen zurück.",
        "Admins steuern den Zugriff über Ausgabenrichtlinien, legen Credit-Limits pro Nutzer oder Gruppe fest und können Modellfamilien abschalten, auch die von Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code und Codex",
      text: [
        "Angaben aus der Dokumentation und von den Preisseiten jedes Anbieters, geprüft am 13. November 2026. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker); siehe auch den [Guide zu Claude Cowork](/personal-agent/claude-cowork) und [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Im direkten Vergleich: [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). Guides: [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["Hersteller", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["Gemacht für", "Mehrstufige Aufgaben in Microsoft 365", "Wissensarbeit ohne Programmieren", "Programmieren: liest deine Codebasis, bearbeitet Dateien, führt Befehle aus", "Programmieren: untersucht, bearbeitet und startet Code in einem Repository"],
        ["Wo es läuft", "Microsofts Cloud, mit OneDrive und SharePoint; keine lokalen Dateien", "Anthropics Cloud; lokale Dateien über Claude Desktop", "Terminal, IDE und Desktop-App auf deinem Rechner; Cloud-Sessions im Web", "CLI, IDE-Erweiterung und ChatGPT-Desktop-App; Codex Cloud"],
        ["Modelle", "GPT-, Claude- und Grok-Modelle, je nach Tenant-Einstellungen", "Claude-Modelle", "Claude-Modelle", "OpenAI-Modelle"],
        ["Wie du bezahlst", "Lizenz für Microsoft 365 Copilot plus Copilot Credits", "Bezahlte Claude-Pläne, Pro ab $20/Monat", "Bezahlte Claude-Pläne, Pro ab $20/Monat; oder API-Guthaben", "ChatGPT-Pläne wie Plus für $20/Monat; oder ein OpenAI-API-Key"],
        ["Wiederkehrende Arbeit", "Geplante Prompts; Ereignisse aus E-Mail, Teams und Connectoren", "Geplante Aufgaben, stündlich bis wöchentlich, in der Cloud", "Geplante Aufgaben in Cloud und Desktop, `/loop`", "Geplante Aufgaben; Ereignisse aus Gmail, Slack und GitHub"],
        ["Freigaben", "Freigabedialog mit Vorschau vor heiklen Aktionen", "Modi Manual, Auto oder Skip", "Berechtigungsmodi von `default` bis `bypassPermissions`", "Ask for approval, Approve for me oder voller Zugriff"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Cowork für Microsoft 365. Crewmark für dein Repository.",
      text: [
        "Copilot Cowork erledigt Aufgaben in Outlook, Teams, OneDrive und SharePoint. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen, sodass Entwicklungs-, SEO- und Marketingarbeit in einem Repository nach Zeitplan vorankommt.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an, etwa Softwareentwickler oder SEO-Spezialist." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Copilot Cowork einrichten" },
  mid: {
    title: "Du willst einen KI-Kollegen für deine Codebasis?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Copilot Cowork",
    items: [
      {
        q: "Was ist Copilot Cowork?",
        a: "Ein Agent in Microsoft 365 Copilot, der mehrstufige Aufgaben in Microsoft 365 erledigt: Er sendet E-Mails, plant Meetings, erstellt und bearbeitet Word-, Excel-, PowerPoint- und PDF-Dateien, postet in Teams, verwaltet Dateien in OneDrive und SharePoint, durchsucht deine Organisation und führt Deep Research durch. Vor heiklen Aktionen bittet er um Freigabe.",
      },
      {
        q: "Was kostet Copilot Cowork?",
        a: "Die Nutzung wird in Copilot Credits abgerechnet, zusätzlich zu einer Lizenz für Microsoft 365 Copilot. Nutzungsbasiert kostet ein Credit $0.01, monatlich im Nachhinein abgerechnet; ein Pre-Purchase Plan für ein Jahr bringt Rabatte von 5 % bis 20 %. Wie viele Credits eine Aufgabe braucht, hängt vom Modell, der Laufzeit, dem Kontext und den genutzten Tools ab.",
      },
      {
        q: "Welche Lizenzen braucht Copilot Cowork?",
        a: "Für ein Geschäfts- oder Schulkonto: eine dir zugewiesene Lizenz für Microsoft 365 Copilot, ein aktiviertes Cowork und eine von einem Admin eingeschaltete nutzungsbasierte Abrechnung, mit einer Ausgabenrichtlinie, die Cowork auswählt. Private Microsoft-Konten sind in der Vorschau und brauchen ein berechtigtes Microsoft-365-Abo. Im Bildungsbereich können Lehrende und Personal ihn nutzen, Studierende nicht.",
      },
      {
        q: "Wie melde ich mich bei Copilot Cowork an?",
        a: "Melde dich mit dem Konto an, das Zugriff hat: einem Geschäfts- oder Schulkonto (allgemein verfügbar) oder einem privaten Microsoft-Konto (Vorschau). Cowork gibt es im Web, in der Desktop-App Microsoft Copilot für Windows und macOS, in der Mobil-App für iOS und Android sowie direkt in Outlook und Teams.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot: Was ist der Unterschied?",
        a: "Copilot Cowork ist ein Agent in Microsoft 365 Copilot. Um ihn zu nutzen, brauchst du eine Lizenz für Microsoft 365 Copilot plus nutzungsbasierte Abrechnung, weil die Nutzung von Cowork zusätzlich zur Lizenz in Copilot Credits berechnet wird.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork: Was ist der Unterschied?",
        a: "Copilot Cowork arbeitet in Microsoft 365, legt Dateien in OneDrive und SharePoint ab, kommt nicht an lokale Dateien und wird zusätzlich zu einer Lizenz in Copilot Credits abgerechnet. Claude Cowork ist Anthropics Agent in den Claude-Apps, ist in bezahlten Claude-Plänen ab Pro für $20 im Monat enthalten und erreicht lokale Dateien über Claude Desktop. Die Modellauswahl von Copilot Cowork kann je nach Tenant-Einstellungen auch Claude-Modelle enthalten.",
      },
    ],
  },
  cta: {
    title: "Gib Aufgaben in Microsoft 365 an Cowork ab. Und gib auch deinen Coding-Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit Microsoft Learns Dokumentation zu Copilot Cowork, Microsofts Copilot Credits Guide und Microsoft Support abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Microsoft, Anthropic oder OpenAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
