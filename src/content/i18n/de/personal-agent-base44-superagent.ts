import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `Fass jeden Morgen um 7 Uhr meine ungelesenen E-Mails, die heutigen Meetings
und alle Slack-Threads zusammen, in denen ich erwähnt werde. Schick es hierher.

Wenn in Gmail eine E-Mail von einem neuen Lead ankommt, entwirf ein persönliches Follow-up
und frag mich, bevor du es sendest. Antwortet er nicht innerhalb von drei Tagen, versuch einen neuen Ansatz.

Hol jeden Freitag um 17 Uhr die Zahlen dieser Woche aus Vertrieb, Support und Marketing
und poste eine Zusammenfassung in #weekly in Slack.`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent: Preise, Credits, WhatsApp und Einrichtung",
    description:
      "Base44 Superagents erklärt: was der persönliche Agent kann, wie du einen anlegst, die Base44-Pläne und wie Superagents Message- und Integration-Credits verbrauchen, WhatsApp, Telegram und Slack verbinden, Workflows, Beispiele und der Vergleich mit anderen.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Base44",
    title: "Base44 Superagent: was er kann, was er kostet und wie du ihn einrichtest",
    lead: "Ein Superagent ist laut Base44 ein persönlicher KI-Agent, der rund um die Uhr Aufgaben für dich erledigt. Du sprichst mit ihm im Browser oder in WhatsApp, Telegram, Slack und anderen Chat-Apps; er arbeitet mit den Tools, die du verbindest, führt Workflows nach Zeitplan oder per Auslöser aus, erinnert sich über Unterhaltungen hinweg und kann sogar telefonieren. Dieser Guide zeigt, was er kann, wie du einen anlegst, wie Preise und Credits funktionieren, wie du WhatsApp verbindest, Workflow-Beispiele und den Vergleich mit anderen persönlichen Agents.",
    cta: "Loslegen",
    secondary: "Preise und Credits",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Was ein Base44 Superagent ist",
      text: [
        "Base44 ist vor allem als KI-App-Builder bekannt. Sein Superagent ist ein separater, persönlicher Agent, den du im Gespräch steuerst: Du beschreibst, was du willst, und er handelt für dich in deinen Tools. Er erreicht nur die Tools und Daten, die du verbindest.",
      ],
      points: [
        "Chat überall: im Browser, in WhatsApp, Telegram, Slack, iMessage und LINE. In WhatsApp kann er Gruppenchats beitreten.",
        "Connectors: Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack und mehr, dazu dein eigener MCP-Server. Geteilte Connectors lassen sich auf Lesezugriff beschränken.",
        "Workflows: Aufgaben, die nach Zeitplan laufen oder wenn in einem verbundenen Tool etwas passiert.",
        "Gedächtnis: Wissen, Arbeitskontext und ein Gedächtnisprotokoll, über Unterhaltungen hinweg geteilt oder getrennt gehalten.",
        "Skills und Ziele: wiederverwendbare Anweisungen, und `/goal`, um ein größeres Ergebnis in Aufgaben aufzuteilen, die du pausieren und fortsetzen kannst.",
        "Sprache: Sprich mit ihm, am Desktop mit Bildschirmfreigabe. Mit einer Telefonnummer können geplante Workflows Anrufe tätigen.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So legst du einen Base44 Superagent an",
      steps: [
        {
          title: "Öffne Personal Agent",
          text: "Melde dich auf app.base44.com an und klick in der Seitenleiste unter Explore auf Personal Agent (oder auf den Tab Agent, wenn deine Seitenleiste Apps und Agent zeigt).",
        },
        {
          title: "Wähle, wo du mit ihm sprichst",
          text: "Wähle Continue here für den Browser, oder WhatsApp, Telegram oder iMessage. Für WhatsApp scannst du den QR-Code oder öffnest die App mit dem Button und schickst die vorausgefüllte Nachricht; für Telegram schickst du die vorausgefüllte Nachricht oder drückst Start.",
        },
        {
          title: "Verbinde deine Tools",
          text: "Öffne Plugins in der Seitenleiste, klick bei einem Connector auf Connect, wähle einen geteilten oder einen App-User-Connector und stell ihn auf Lesezugriff, wenn der Agent nur nachsehen muss. Deinen eigenen MCP-Server fügst du mit Add Connector hinzu.",
        },
        {
          title: "Beschreib die Aufgabe",
          text: "Sag, was erledigt werden soll; pack Kontext zu Rolle oder Projekt in die erste Nachricht und gib feste Regeln vor, die er immer befolgen soll. Für wiederkehrende Arbeit beschreibst du den Zeitplan oder Auslöser, und er richtet einen Workflow ein.",
          code: prompts,
        },
      ],
      source: { label: "Quelle: Base44-Doku, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preise und Credits für den Base44 Superagent",
      text: [
        "Superagents laufen mit den Credits deines Base44-Workspaces. Das sind Base44s Pläne, wie sie am 10. November 2026 aufgeführt waren, bei jährlicher Abrechnung; laut Preisseite spart die jährliche Abrechnung 20 %, Monatspreise werden nicht genannt.",
      ],
      headers: ["Plan", "Preis (jährliche Abrechnung)", "Message-Credits / Monat", "Integration-Credits / Monat"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/Monat", "100", "2.000"],
        ["Builder", "$40/Monat", "250", "10.000"],
        ["Pro", "$80/Monat", "500", "20.000"],
        ["Elite", "$160/Monat", "1.200", "50.000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Wie Superagents Credits verbrauchen",
      points: [
        "Message-Credits: jede Nachricht, die der Agent verarbeitet, und jeder Workflow-Lauf, genau wie beim Chatten. Dazu zählen Nachrichten aus WhatsApp, Telegram, Slack, der API und Automatisierungen.",
        "Integration-Credits: Aktionen wie Bildgenerierung, Dateiverarbeitung, Datei-Uploads und Download-Links.",
        "Credits werden nach einem festen Zeitplan aufgefrischt, und ungenutzte Credits verfallen beim Zurücksetzen.",
        "Sind die Credits des Workspaces aufgebraucht, können Workflows nicht laufen. Sie bleiben eingeschaltet und laufen weiter, sobald wieder Credits da sind, aber verpasste Läufe werden nicht nachgeholt.",
        "Die Nutzung prüfst du unter Agent Settings > Credit usage. Ein Superagent kann außerdem Läufe pausieren, die in einer Schleife hängen, damit keine Credits verschwendet werden.",
        "Der Free-Plan hat 25 Message-Credits pro Monat. Jeder Lauf verbraucht Message-Credits, also braucht schon ein einziger täglicher Workflow (etwa 30 Läufe im Monat) mehr als das; für tägliche Workflows solltest du einen bezahlten Plan einplanen.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Workflows und Beispiele für den Base44 Superagent",
      text: [
        "Beschreib die Aufgabe im Chat, oder öffne Workflows, klick auf New Workflow und schick einen vorgeschlagenen Workflow in den Chat. Der Superagent ermittelt, ob er geplant oder ausgelöst ist, und fragt nach dem, was er braucht.",
      ],
      steps: [
        {
          title: "Geplant",
          text: "Läuft zu Zeiten, die du festlegst: ein Morgen-Briefing zu ungelesenen E-Mails, Meetings und Slack-Threads; ein Tagesabschluss mit der To-do-Liste für morgen; ein wöchentlicher Anruf bei einer Zahnarztpraxis, um nach einem früheren Termin zu fragen (wenn dein Agent eine Telefonnummer hat).",
        },
        {
          title: "Ausgelöst",
          text: "Läuft, wenn etwas passiert: eine neue E-Mail in Gmail, eine Änderung in den Daten deines Superagents oder Aktivität in einem verbundenen Tool, etwa eine Erinnerung, wenn eine E-Mail 24 Stunden ungelesen bleibt, oder ein Briefing 30 Minuten vor jedem Meeting.",
        },
        {
          title: "Wenn etwas schiefgeht",
          text: "Ein Workflow, der mehrmals hintereinander fehlschlägt, pausiert sich selbst, und Base44 schickt dir eine E-Mail. Prüf den Tab Activity, behebe die Ursache (oft eine getrennte Integration), klick auf Resume und dann zum Testen auf Run Now.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs. Meta Muse, Grok Bot und Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["Wo du mit ihm sprichst", "Browser, WhatsApp, Telegram, Slack, iMessage, LINE", "Muse-App, muse.ai, WhatsApp", "Desktop- und Smartphone-Apps, Slack, X", "Die Claude-Duet-App"],
        ["Zeitpläne", "Geplante und ausgelöste Workflows", "Erinnerungen und wiederkehrende Aufgaben", "Routinen nach Zeitplan oder Auslöser", "Kommt mit dem zu dir, was Aufmerksamkeit braucht"],
        ["Preise", "Credits aus dem Base44-Plan, ab $16/Monat bei jährlicher Abrechnung", "Kostenlos mit Wochenlimit; Power $20/Monat", "Enthalten ab X Premium, in SuperGrok und Cursor-Plänen", "Enthalten ab Claude Pro, über Warteliste"],
        ["Guide", "Diese Seite", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Superagent für deine Besorgungen, ein KI-Mitarbeiter für deinen Backlog",
      text: [
        "Ein Base44 Superagent ist auf die Tools und Chats einer Person ausgelegt. Crewmark ist auf eine Aufgabe ausgelegt: Es macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der das nächste Issue von einem gemeinsamen Board nimmt, ohne dass du über deinen bestehenden Agent-Plan hinaus Credits kaufen musst.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Fang mit einer [Rolle als KI-Mitarbeiter](/ai-employees) an: Entwickler, SEO-Spezialist, Marketing-Agent, Social-Media-Manager, Designer.",
        },
        {
          title: "Nutze den Plan, den du schon hast",
          text: "Crewmark arbeitet in deinem eigenen Claude Code oder Codex. Siehe [Preise](/pricing).",
        },
        {
          title: "Vergleiche weitere Agenten",
          text: "Siehe [persönliche KI-Agenten im Vergleich](/personal-agent) und [was ein Superagent ist](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen Base44 Superagent anlegen" },
  mid: {
    title: "Du willst einen Agenten mit einem Job, ohne Credits zu kaufen?",
    text: "Crewmark-Mitarbeiter laufen mit dem Claude-Code- oder Codex-Plan, den du ohnehin bezahlst, und arbeiten ein gemeinsames Board ab.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein Base44 Superagent?",
        a: "Der persönliche KI-Agent von Base44, der rund um die Uhr Aufgaben für dich erledigt. Du chattest mit ihm im Browser oder in WhatsApp, Telegram, Slack und anderen Apps; er arbeitet mit den Tools, die du verbindest, und führt geplante oder ausgelöste Workflows aus.",
      },
      {
        q: "Was kostet ein Base44 Superagent?",
        a: "Er verbraucht die Credits deines Base44-Plans. Bei jährlicher Abrechnung kosten die Pläne Starter $16, Builder $40, Pro $80 und Elite $160 im Monat, mit 100 bis 1.200 Message-Credits; der Free-Plan hat 25 Message-Credits pro Monat.",
      },
      {
        q: "Wie funktionieren die Credits beim Base44 Superagent?",
        a: "Jede Nachricht, die er verarbeitet, und jeder Workflow-Lauf verbraucht Message-Credits; Aktionen wie Bildgenerierung und Dateiverarbeitung verbrauchen Integration-Credits. Credits werden nach Zeitplan zurückgesetzt, ungenutzte verfallen, und Workflows laufen nicht, solange keine mehr da sind.",
      },
      {
        q: "Wie verbinde ich einen Base44 Superagent mit WhatsApp?",
        a: "Wähle beim Anlegen WhatsApp und scann den QR-Code oder öffne WhatsApp mit dem Button, dann schick die vorausgefüllte Nachricht. Du kannst auch eine WhatsApp-Nummer verbinden, damit er in Gruppenchats arbeiten kann.",
      },
      {
        q: "Was kann ein Base44 Superagent tun?",
        a: "Über Nacht deinen Posteingang sortieren, Leads nachfassen, Flugpreise beobachten, ein Restaurant buchen und einem Freund Bescheid sagen, wöchentliche Zahlen in Slack posten, deinen Kalender umplanen, die WhatsApp-Gruppe eines Projekts betreuen und mit einer Telefonnummer geplante Anrufe tätigen.",
      },
      {
        q: "Welche Alternativen gibt es zu Base44 Superagents?",
        a: "Meta Muse (kostenlos in den USA), Grok Bot (für Teams von Agenten bei der Arbeit), ChatGPT dots und Claude Duet (mit Pro-Plänen), Manus Cue sowie die Open-Source-Projekte OpenClaw oder Hermes Agent. Siehe [persönliche KI-Agenten im Vergleich](/personal-agent).",
      },
    ],
  },
  cta: {
    title: "Besorgungen für einen Superagent. Ein Job für einen KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit der Dokumentation von Base44, seiner Superagents-Seite und seiner Preisseite abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Base44, Wix, Meta, xAI oder Anthropic, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
