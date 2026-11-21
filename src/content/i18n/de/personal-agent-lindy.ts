import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: Was der Assistent kann, Preise, Credits, Einrichtung",
    description:
      "Lindy AI erklärt: ein gehosteter Assistent für E-Mail, Kalender, Meetings und Slack. Credit-Preise, Routinen, Freigaben, Kanäle und Lindy vs Relevance AI.",
  },
  breadcrumb: "Lindy",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Lindy",
    title: "Lindy AI: was der Assistent kann, was er kostet und wie du ihn einrichtest",
    lead: "Lindy beschreibt sich als KI-Mitarbeiter, der Arbeit in deinen verbundenen Tools erledigt. Er ist ein einziger gehosteter Assistent, der für jeden Nutzer als persönlicher Executive Assistant und in Slack als gemeinsamer Teamkollege arbeitet. Er kümmert sich um Posteingang, Kalender, Meetings, Recherche, Berichte und Nachfassen, erledigt wiederkehrende Arbeit als Routinen und wartet auf deine Freigabe, bevor er etwas mit Wirkung nach außen tut. Hier erfährst du, was er kann, wie seine Preise in Credits funktionieren, wie du ihn einrichtest, wie Freigaben funktionieren und wie er sich von Relevance AI und Grok Bot unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Lindy ist",
      points: [
        "Ein Assistent, kein Agenten-Baukasten: Die Doku beschreibt einen Lindy pro Workspace. Vermarktet wird er für viele Rollen, etwa Paid Ads, SEO und Content, Buchhaltung, Recruiting und Kundensupport.",
        "Zwei Arten, ihn zu nutzen: privat, als dein Executive Assistant über iMessage, E-Mail oder Slack-DMs, und als gemeinsamer Teamkollege, den dein Team in Slack per @Erwähnung bittet, zu recherchieren, Berichte zu schreiben oder ein CRM zu aktualisieren.",
        "Er lernt: 40+ eingebaute Skills plus deine eigenen, ein bearbeitbares Gedächtnis und Watch and Learn, bei dem du ihm eine Aufgabe einmal zeigst.",
        "Er erledigt wiederkehrende Arbeit als Routinen: Jede hat einen Auslöser (einen Zeitplan oder ein Ereignis), einen Prompt und ein Ziel. Eingebaute Routinen decken tägliche Briefings, das Entwerfen und Labeln von E-Mails, Nachfass-Erinnerungen sowie Aufzeichnung, Vorbereitung und Planung von Meetings ab.",
        "Er wählt pro Aufgabe ein Modell, und du kannst das Modell auch selbst auswählen.",
        "Er ist gehostet: Lindy läuft in der Cloud und wird von Crivello Corp gemacht, die unter dem Namen Lindy firmiert.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Lindy: Preise, Credits und Plätze",
      text: [
        "Laut lindy.ai/pricing am 13. November 2026. Jährliche Abrechnung wird nicht angezeigt. Abgerechnet wird jeder aktive Nutzer in einem Workspace, auch Leute, die Lindy in Slack nur per @Erwähnung ansprechen, und monatliche Credits werden nicht übertragen.",
      ],
      headers: ["Option", "Preis", "Was du bekommst"],
      rows: [
        ["Kostenloser Start", "$0, keine Kreditkarte nötig", "Credits im Wert von $50, 7 Tage gültig; die kostenlose Woche gibt es einmal pro Teammitglied"],
        ["Pro aktivem Nutzer", "Ab $29.99/Monat", "3.000 Credits für jeden aktiven Nutzer, im Team gebündelt"],
        ["Größere Credit-Stufen", "Bis zu $9,999.50/Monat", "Bis zu 1.750.000 Credits"],
        ["Aufstockungen", "$10 pro 1.000 Credits", "Wenn das Kontingent aufgebraucht ist, pausieren Aktionen, die Credits verbrauchen, bis zum nächsten Zyklus oder bis du aufstockst"],
        ["Enterprise", "Individuell", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Lindy ein",
      steps: [
        { title: "Starte mit kostenlosen Credits", text: "Der kostenlose Start gibt dir Credits im Wert von $50, 7 Tage gültig, ohne Kreditkarte." },
        {
          title: "Wähl aus, wo du mit ihm sprichst",
          text: "Slack, E-Mail, iMessage und SMS, Telefonanrufe, die Chrome-Erweiterung in Gmail oder Lindys Startseite im Web, die zeigt, was Lindy getan hat. Microsoft Teams ist als demnächst verfügbar gelistet.",
        },
        {
          title: "Verbinde deine Tools",
          text: "Gmail, Google Calendar, Meeting-Aufzeichnung in Google Meet, Zoom und Microsoft Teams, MCP-Server und gespeicherte API-Zugangsdaten.",
        },
        { title: "Bring ihm bei, wie du arbeitest", text: "Nutz die eingebauten Skills, füg eigene hinzu, bearbeite sein Gedächtnis oder zeig ihm eine Aufgabe einmal mit Watch and Learn." },
        {
          title: "Richte Routinen ein",
          text: "Gib jeder Routine einen Auslöser, einen Prompt und ein Ziel, oder starte mit einer eingebauten, etwa einem täglichen Briefing. Workspace-Routinen laufen über Slack, und nur Admins können sie einrichten.",
        },
      ],
      source: { label: "Quelle: Lindy-Doku", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei Lindy die Kontrolle behältst",
      points: [
        "Alles mit Wirkung nach außen wartet auf deine Freigabe, etwa eine E-Mail senden, ein Ticket aktualisieren, in einem anderen Channel posten oder ein Dokument veröffentlichen.",
        "Reine Leseabfragen aus freigegebenen Quellen brauchen keine Freigabe.",
        "Admins können Credits pro Platz begrenzen, und nur Admins richten Workspace-Routinen ein.",
        "Wenn das Credit-Kontingent aufgebraucht ist, pausiert Lindy Aktionen, die Credits verbrauchen, bis zum nächsten Zyklus oder bis du aufstockst.",
        "Sein Gedächtnis lässt sich bearbeiten.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI und Grok Bot",
      text: [
        "Angaben von der Website, Preisseite und Dokumentation jedes Anbieters, geprüft am 13. November 2026. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker); siehe auch den [Guide zu Grok Bot](/personal-agent/grok-bot).",
        "Im direkten Vergleich: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). Guides: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["Hersteller", "Crivello Corp (Lindy)", "OnSearch Pty Ltd (Relevance AI)", "xAI"],
        ["Was es ist", "Ein gehosteter Assistent pro Workspace: Executive Assistant und Teamkollege in Slack", "Eine Low-/No-Code-Plattform zum Bauen von Agenten und Multi-Agenten-Workforces", "Gehostete KI-Teamkollegen: Bots mit jeweils eigenem Cloud-Computer"],
        ["Mehrere Agenten", "Keine Angabe; die Doku beschreibt einen Lindy pro Workspace", "Ja: Agenten, verknüpft auf einer visuellen Arbeitsfläche", "Ja: Bots schreiben sich gegenseitig Nachrichten und stimmen sich in Gruppenchats ab"],
        ["Wo du es nutzt", "Slack, E-Mail, iMessage und SMS, Telefon, Chrome-Erweiterung, Web", "Web-App", "Apps für macOS und iOS, Slack, Microsoft Teams, Anrufe"],
        ["Wiederkehrende Arbeit", "Routinen nach Zeitplan oder bei Ereignissen", "Geplante Aufgaben und App-Auslöser", "Routinen nach Zeitplan"],
        ["Freigaben", "Alles mit Wirkung nach außen wartet auf Freigabe", "Freigabe-Workflows und Eskalationen per E-Mail und Slack", "Bots melden sich, wenn eine Freigabe nötig ist; Auto Review"],
        ["Preise", "Credits im Wert von $50 gratis für 7 Tage; ab $29.99/Monat pro aktivem Nutzer", "Enterprise-Plan über den Vertrieb", "Premium $30, Super $100 oder Ultra $200 pro Monat"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Lindy für deinen Posteingang. Crewmark für dein Repository.",
      text: [
        "Lindy arbeitet in deinem Posteingang, deinem Kalender, deinen Meetings und Slack. Crewmark macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, die jeweils Issues von einem gemeinsamen Board nehmen, sodass Entwicklungs-, SEO- und Marketingarbeit in einem Repository nach Zeitplan erledigt wird.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Fang mit den [Rollen für KI-Mitarbeiter](/ai-employees) an, etwa Softwareentwickler oder SEO-Spezialist." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Lindy einrichten" },
  mid: {
    title: "Du willst einen KI-Mitarbeiter für deine Codebasis?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Lindy AI",
    items: [
      {
        q: "Was ist Lindy AI?",
        a: "Ein gehosteter KI-Assistent, der in deinen verbundenen Tools arbeitet. Er ist für jeden Nutzer ein persönlicher Executive Assistant und in Slack ein gemeinsamer Teamkollege, kümmert sich um Posteingang, Kalender, Meetings, Recherche, Berichte und Nachfassen und erledigt wiederkehrende Arbeit als Routinen.",
      },
      {
        q: "Was kostet Lindy?",
        a: "Du kannst mit Credits im Wert von $50 starten, 7 Tage gültig, ohne Kreditkarte. Danach wird jeder aktive Nutzer im Workspace abgerechnet, ab $29.99 im Monat für je 3.000 Credits, im Team gebündelt. Aufstockungen kosten $10 pro 1.000 Credits, und die Preise für Enterprise sind individuell.",
      },
      {
        q: "Ist Lindy ein Agent oder viele?",
        a: "Einer. Die Doku beschreibt einen Lindy pro Workspace, und Routinen sind kein separater Bot. Er wird für viele Rollen vermarktet und lernt über eingebaute und eigene Skills, sein Gedächtnis und Watch and Learn, separate Agenten-Personas werden aber nicht genannt.",
      },
      {
        q: "Gibt es eine Lindy-App?",
        a: "Du nutzt Lindy über seine Startseite im Web, Slack, E-Mail, iMessage und SMS, Telefonanrufe und eine Chrome-Erweiterung in Gmail. Die Doku beschreibt keine Desktop- oder Mobil-App; Microsoft Teams ist als demnächst verfügbar gelistet.",
      },
      {
        q: "Wie melde ich mich bei Lindy an?",
        a: "Starte mit den kostenlosen Credits im Wert von $50, die keine Kreditkarte brauchen, 7 Tage gelten und einmal pro Teammitglied vergeben werden. Danach belegt jeder aktive Nutzer einen bezahlten Platz: Teammitglieder, die über Slack dazukommen, bekommen eine 7-tägige kostenlose Testphase, und direkte Anmeldungen werden sofort abgerechnet.",
      },
      {
        q: "Handelt Lindy, ohne zu fragen?",
        a: "Nicht bei allem mit Wirkung nach außen: Eine E-Mail senden, ein Ticket aktualisieren, in einem anderen Channel posten oder ein Dokument veröffentlichen wartet auf deine Freigabe. Reine Leseabfragen aus freigegebenen Quellen brauchen keine Freigabe.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Posteingang an einen Assistenten ab. Und gib auch deinen Coding-Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit lindy.ai, Lindys Preisseite und Lindys Dokumentation abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Lindy, Relevance AI oder xAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
