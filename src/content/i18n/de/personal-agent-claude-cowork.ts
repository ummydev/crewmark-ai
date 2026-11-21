import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: Was es ist, Preise, Einrichtung und vs Claude Code",
    description:
      "Claude Cowork erklärt: Anthropics Agent für Arbeit ohne Programmieren in den Claude-Apps. Pläne, Cloud-Betrieb, geplante Aufgaben, Freigaben, vs Claude Code.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Anthropic",
    title: "Claude Cowork: was Anthropics KI-Kollege kann und wie du ihn nutzt",
    lead: "Claude Cowork ist Anthropics Agent für Wissensarbeit in den Claude-Apps. Du beschreibst ein Ergebnis, etwa einen Recherchebericht, eine Tabelle, eine Präsentation oder einen aufgeräumten Ordner, und Claude plant die Schritte, arbeitet sie in deinen Dateien, verbundenen Apps und einem Browser ab und gibt dir das Ergebnis zurück. Aufgaben laufen in Anthropics Cloud und gehen weiter, wenn du den Laptop zuklappst. Hier erfährst du, was er kann, welche Pläne ihn enthalten, wie du ihn einrichtest, wie er vor dem Handeln fragt und wie er sich von Claude Code unterscheidet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Cowork ist",
      points: [
        "Ein Agent für Arbeit ohne Programmieren: Recherche, Analysen, Dokumente, Tabellen mit funktionierenden Formeln, Präsentationen und Dateiarbeit. Anthropics eigene FAQ positioniert Cowork dafür und Claude Code für Softwareentwicklung.",
        "Er läuft in der Cloud: Sessions laufen in einer isolierten Umgebung auf Anthropics Servern und werden in deinem Claude-Konto gespeichert. Bei Pro, Max und Ultra laufen neue Aufgaben seit dem 6. Oktober 2026 in der Cloud.",
        "Er erreicht deinen eigenen Computer über Claude Desktop: Lokale Dateien, lokale Connectoren, Browser-Nutzung und Computer Use brauchen die geöffnete Desktop-App auf diesem Rechner.",
        "Er wiederholt Arbeit: Geplante Aufgaben laufen stündlich, täglich, wöchentlich oder werktags, jede als eigene Session in der Cloud.",
        "Er ist Teil von Claude: Seit September 2026 wächst Cowork mit den normalen Claude-Unterhaltungen zusammen.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude-Cowork-Preise: welche Pläne ihn enthalten",
      text: [
        "Preise von claude.com/pricing am 13. November 2026, in US-Dollar, ohne Steuern. Anthropic veröffentlicht nicht, wie viel Cowork-Nutzung jeder Plan enthält; auf der Karte von Pro steht, dass Cowork die Limits schneller verbraucht als der Chat.",
      ],
      headers: ["Plan", "Preis", "Claude Cowork"],
      rows: [
        ["Free", "$0", "Nicht enthalten"],
        ["Pro", "$20/Monat oder $17/Monat bei jährlicher Abrechnung ($200 im Jahr)", "Enthalten"],
        ["Max", "$100/Monat", "Enthalten"],
        ["Ultra", "$200/Monat", "Enthalten"],
        ["Team (2 bis 150 Personen)", "Standard-Platz $20/Monat bei jährlicher Abrechnung oder $25 monatlich; Premium-Platz $100 oder $125", "Enthalten; Web und Mobil in der Beta"],
        ["Enterprise", "$20/Platz/Monat bei jährlicher Abrechnung, mindestens 20 Plätze, plus Nutzung zu API-Preisen", "Enthalten; Cloud-Sessions, Web und Mobil aus, bis ein Owner sie einschaltet"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Cowork ein",
      steps: [
        { title: "Hol dir einen bezahlten Claude-Plan", text: "Pro, Max, Ultra, Team oder Enterprise. Bei Enterprise muss ein Owner Cowork eventuell erst einschalten." },
        { title: "Installier Claude Desktop, wenn du lokal arbeiten willst", text: "Cowork läuft auch im Web sowie unter iOS und Android, aber lokale Dateien, Browser-Nutzung und Computer Use brauchen Claude Desktop für macOS oder Windows (Linux ist in der Beta)." },
        { title: "Beschreib das Ergebnis, nicht die Schritte", text: "Sag, was du zurückhaben willst und wo die Eingaben liegen: in Dateien, in einer verbundenen App wie Google Drive, Gmail, Microsoft 365 oder Slack oder im Web." },
        { title: "Leg fest, wie er fragt", text: "Wähl Manual, um jede Aktion selbst freizugeben, oder Auto, damit eine Sicherheitsprüfung Routineaktionen freigibt. Außerdem kannst du jedes Connector-Tool auf immer erlauben, Freigabe nötig oder blockiert stellen." },
        { title: "Mach einen Zeitplan daraus", text: "Tipp in einer Aufgabe `/schedule` oder nutz die Seite Scheduled und wähl stündlich, täglich, wöchentlich, werktags oder bei Bedarf." },
      ],
      source: { label: "Quelle: Anthropics Hilfe-Center, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Wie du bei Claude Cowork die Kontrolle behältst",
      points: [
        "Drei Freigabemodi: Manual fragt vor Aktionen; Auto führt bei jeder Aktion eine Sicherheitsprüfung durch, blockiert unsichere Aktionen und fragt wieder nach, wenn es wiederholt blockiert; Skip fragt nicht. Auto ist bei Pro, Max, Ultra und Team voreingestellt, Manual bei Enterprise.",
        "Er fragt, bevor er Dateien endgültig löscht, und Computer Use fragt vor jeder Anwendung.",
        "Admins von Team und Enterprise können Auto abschalten und für jedes Connector-Tool mit Schreibzugriff eine Freigabe verlangen.",
        "Du kannst eine Aufgabe während des Laufs lenken oder stoppen, in der Desktop-App, im Web oder auf dem Smartphone.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work und Copilot Cowork",
      text: [
        "Angaben von den eigenen Seiten jedes Anbieters, geprüft am 13. November 2026. Weitere KI-Kollegen vergleichen wir unter [KI-Kollegen-Tools](/blog/ai-coworker).",
        "Im direkten Vergleich: [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). Guides: [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["Hersteller", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["Gemacht für", "Wissensarbeit ohne Programmieren", "Softwareentwicklung", "Aufgaben, an deren Ende etwas zum Prüfen steht", "Arbeit in Microsoft 365"],
        ["Wo es läuft", "Anthropics Cloud; lokal über Claude Desktop", "Standardmäßig auf deinem Rechner; Cloud-Sessions im Web", "OpenAIs Cloud oder dein Computer über die Desktop-App", "Microsofts Cloud, mit OneDrive und SharePoint"],
        ["Wer es bekommt", "Bezahlte Claude-Pläne", "Bezahlte Claude-Pläne", "ChatGPT-Pläne; eingeschränkt bei Free und Go", "Lizenz für Microsoft 365 Copilot plus Copilot Credits"],
        ["Zeitpläne", "Stündlich bis wöchentlich, in der Cloud", "Geplante Aufgaben in Cloud und Desktop, `/loop`", "Geplante Aufgaben und Ereignis-Auslöser", "Geplante Prompts und ereignisgesteuerte Aufgaben"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Cowork für deine Dokumente. Crewmark für deine Codebasis.",
      text: [
        "Claude Cowork erledigt Wissensarbeit, die du ihm übergibst. Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, Zielen in Zahlen, Arbeitszeiten und einem Heartbeat, sodass Entwicklungs-, SEO- und Marketingarbeit in einem Repository nach Zeitplan erledigt und auf einem Board nachverfolgt wird.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa einen [KI-SEO-Spezialisten](/ai-employees/seo-specialist)." },
        { title: "Bring die Arbeit auf ein Board", text: "Weise Issues zu und lass die regelmäßigen sich wiederholen; der Heartbeat weckt den Mitarbeiter, damit er das nächste nimmt." },
        { title: "Sieh dir an, was er kann", text: "Jobs samt Einrichtung findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Cowork einrichten" },
  mid: {
    title: "Du willst einen KI-Kollegen für deine Codebasis?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Cowork",
    items: [
      {
        q: "Was ist Claude Cowork?",
        a: "Anthropics Agent für Wissensarbeit ohne Programmieren in den Claude-Apps. Du beschreibst ein Ergebnis, und er erledigt die Schritte in deinen Dateien, verbundenen Apps und einem Browser und gibt dir fertige Dateien zurück, etwa Dokumente, Tabellen und Präsentationen.",
      },
      {
        q: "Was kostet Claude Cowork?",
        a: "Er ist in bezahlten Claude-Plänen enthalten: Pro für $20 im Monat (oder $17 im Monat bei jährlicher Abrechnung), Max für $100, Ultra für $200 sowie Plätze in Team und Enterprise. Claude Free enthält ihn nicht.",
      },
      {
        q: "Claude Cowork vs Claude Code: Was ist der Unterschied?",
        a: "Cowork ist für Wissensarbeit wie Recherche, Dokumente und Tabellen in den Claude-Apps gedacht; Claude Code ist Anthropics Agent für Softwareentwicklung in deinem Repository. Laut Anthropic nutzt Cowork dieselbe Architektur wie Claude Code.",
      },
      {
        q: "Gibt es Claude Cowork für Windows und mobil?",
        a: "Ja. Claude Desktop führt ihn unter macOS und Windows aus (Linux in der Beta), und mit Pro, Max, Ultra und Team gibt es ihn im Web und in Claude für iOS und Android. Lokale Dateien, Browser-Nutzung und Computer Use brauchen die Desktop-App.",
      },
      {
        q: "Kann Claude Cowork Aufgaben nach Zeitplan erledigen?",
        a: "Ja, in allen bezahlten Plänen. Nutz `/schedule` in einer Aufgabe oder die Seite Scheduled; jeder Lauf ist eine eigene Session in der Cloud, also kann dein Computer aus sein, es sei denn, die Aufgabe braucht lokale Dateien.",
      },
      {
        q: "Arbeitet Claude Cowork, wenn mein Laptop zugeklappt ist?",
        a: "Cloud-Aufgaben schon: Sie laufen auf Anthropics Servern weiter. Arbeit, die deine lokalen Dateien, lokalen Connectoren oder deinen Browser braucht, kommt erst wieder an sie heran, wenn Claude Desktop geöffnet ist.",
      },
    ],
  },
  cta: {
    title: "Gib die Dokumente an Cowork ab. Und gib auch deinen Agenten einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 13. November 2026 mit claude.com/product/cowork, claude.com/pricing und Anthropics Hilfe-Center abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI oder Microsoft, die es auch nicht unterstützen. Claude und Claude Code sind Marken von Anthropic.",
};
