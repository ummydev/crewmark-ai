import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# In Claude Code: das offizielle Plugin installieren (User-Scope wählen)
/plugin install telegram@claude-plugins-official

# Den Token speichern, den dir BotFather gegeben hat
/telegram:configure <token>

# Claude Code mit aktiviertem Channel neu starten
claude --channels plugin:telegram@claude-plugins-official

# Deinem Bot schreiben, dann mit dem Code koppeln, den er zurückschickt
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Channels: Telegram, Discord, iMessage einrichten",
    description:
      "Wie Claude Code Channels funktionieren und wie du die offiziellen Plugins für Telegram, Discord und iMessage einrichtest: Befehle, Kopplung, Absender-Allowlists, Voraussetzungen, warum Channels nicht verfügbar sind, und Slack.",
  },
  breadcrumb: "Claude Code Channels",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Channels: Claude Code aus Telegram, Discord oder iMessage schreiben",
    lead: "Channels schieben Nachrichten in eine Claude-Code-Session, die schon auf deinem Computer läuft. So kannst du ihr vom Handy aus schreiben und bekommst die Antwort im selben Chat, während die Arbeit an deinen echten Dateien passiert. Für Telegram, Discord und iMessage gibt es offizielle Plugins. Dieser Guide erklärt, wie Channels funktionieren, wie du jeden einrichtest, wie du Fremde draußen hältst, warum sie manchmal nicht auftauchen und wie sie sich zu Remote Control und Claude in Slack verhalten.",
    cta: "Loslegen",
    secondary: "Telegram einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Claude Code Channels sind",
      text: [
        "Ein Channel ist ein MCP-Server, der Events in deine laufende Claude-Code-Session schiebt. Er kann in beide Richtungen funktionieren: Claude liest die Nachricht und antwortet über denselben Channel, wie eine Chat-Brücke. Events kommen nur an, solange die Session offen ist.",
      ],
      points: [
        "Offizielle Channel-Plugins: Telegram, Discord und iMessage, dazu fakechat, ein Demo-Chat auf localhost.",
        "Jedes davon ist ein Plugin aus claude-plugins-official und braucht eine Bun-Installation.",
        "Du kannst auch einen eigenen Channel bauen, zum Beispiel einen Webhook-Empfänger für CI-Fehler oder Error-Alerts.",
        "Channels sind eine Research Preview: Das Flag `--channels` steht nicht in `claude --help`, und seine Syntax kann sich ändern.",
        "Im Terminal siehst du die eingehende Nachricht und eine Bestätigung wie „sent“; der Antworttext selbst erscheint in der Chat-App.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du den Telegram-Channel ein",
      steps: [
        {
          title: "Erstell einen Bot",
          text: "Öffne in Telegram BotFather, schick `/newbot`, gib dem Bot einen Namen und einen Benutzernamen, der auf „bot“ endet, und kopier den Token.",
          code: telegram,
        },
        {
          title: "Installier und konfigurier das Plugin",
          text: "Führ in Claude Code `/plugin install telegram@claude-plugins-official` aus und wähl den User-Scope. Wird der Marketplace nicht gefunden, füg ihn mit `/plugin marketplace add anthropics/claude-plugins-official` hinzu. Speicher dann den Token mit `/telegram:configure <token>`, oder setz `TELEGRAM_BOT_TOKEN`, bevor du Claude Code startest.",
        },
        {
          title: "Starte mit aktiviertem Channel neu",
          text: "Beende Claude Code und starte es erneut mit `--channels plugin:telegram@claude-plugins-official`. Du kannst mehrere Channel-Plugins angeben, getrennt durch Leerzeichen.",
        },
        {
          title: "Koppeln und absichern",
          text: "Schick deinem Bot eine beliebige Nachricht; er antwortet mit einem Kopplungscode. Bestätige ihn mit `/telegram:access pair <code>` und führ dann `/telegram:access policy allowlist` aus, damit nur dein Konto die Session erreicht.",
        },
      ],
      source: { label: "Quelle: Claude-Code-Doku von Anthropic, Channels", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord und iMessage",
      points: [
        "Discord: Erstell im Discord Developer Portal eine Anwendung, kopier den Bot-Token, schalte Message Content Intent ein und lad den Bot mit dem Scope `bot` ein. Dann `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`, Neustart mit `--channels plugin:discord@claude-plugins-official`, dem Bot eine DM schicken und mit `/discord:access pair <code>` koppeln.",
        "iMessage: nur macOS, ohne Bot oder Token. Es liest deine Messages-Datenbank, gib deinem Terminal also Festplattenvollzugriff. Installier `imessage@claude-plugins-official`, starte neu mit `--channels plugin:imessage@claude-plugins-official` und schreib dir selbst. Weitere Personen fügst du mit `/imessage:access allow <phone or Apple ID email>` hinzu.",
        "Slack: kein Channel. Claude in Slack startet über eine @Claude-Erwähnung eine Cloud-Session, statt deiner lokalen Session zu schreiben.",
        "WhatsApp und andere Apps: kein offizielles Channel-Plugin; du würdest anhand der Channels-Referenz einen eigenen bauen.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels nicht verfügbar oder funktionieren nicht?",
      points: [
        "Dein Kontotyp: Channels brauchen eine Anmeldung über claude.ai oder einen Console-API-Key. Über Amazon Bedrock, Googles Cloud Agent Platform oder Microsoft Foundry funktionieren sie nicht.",
        "Deine Organisation: In Claude Team und Enterprise bleiben Channels gesperrt, bis ein Owner sie unter Organization settings > Claude Code > Channels einschaltet. Eine Warnung beim Start weist darauf hin. Pro-, Max- und Ultra-Konten ohne Organisation überspringen diese Prüfung.",
        "Das Plugin ist nicht freigegeben: Während der Preview akzeptiert `--channels` nur Plugins auf Anthropics Allowlist (oder der deiner Organisation). Alles andere startet ohne Channel, und der Hinweis beim Start sagt dir, warum.",
        "Der Bot antwortet nicht: Claude Code muss mit `--channels` laufen; der Bot kann nur antworten, solange der Channel aktiv ist.",
        "Es stoppt mitten in der Aufgabe: Eine Berechtigungsabfrage pausiert die Session, bis jemand antwortet. Manche Channels können die Abfrage an dein Handy weiterleiten.",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Halte Fremde draußen",
      points: [
        "Jeder offizielle Channel führt eine Absender-Allowlist; Nachrichten von allen anderen werden stillschweigend verworfen. Telegram und Discord fügen dich per Kopplung hinzu; iMessage lässt deine eigenen Nachrichten durch.",
        "Nur Server, die in `--channels` genannt sind, können Nachrichten schieben; ein Eintrag in `.mcp.json` reicht nicht.",
        "Wenn ein Channel Berechtigungsabfragen weiterleitet, kann jeder auf seiner Allowlist Tool-Nutzung in deiner Session genehmigen oder ablehnen. Füg nur Leute hinzu, denen du das zutraust.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels vs. Remote Control vs. Claude in Slack",
      headers: ["", "Was es tut", "Läuft wo", "Gut für"],
      rows: [
        ["Channels", "Schiebt Chat-Nachrichten, Alerts und Webhooks in deine offene Session", "Dein Computer", "Der Session vom Handy aus schreiben; auf CI und Alerts reagieren"],
        ["[Remote Control](/remote-claude-code)", "Du steuerst deine lokale Session über claude.ai oder die Claude-App", "Dein Computer", "Laufende Arbeit lenken, während du nicht am Schreibtisch bist"],
        ["Claude in Slack", "Eine @Claude-Erwähnung startet eine Cloud-Session", "Anthropics Cloud", "Aufgaben aus einem Team-Gespräch heraus starten"],
        ["Notification-Hook", "Führt deinen Befehl aus, etwa einen Desktop-Alert, wenn Claude dich braucht", "Dein Computer", "Wissen, wann ein Turn endet oder Input braucht"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Lass Claude Code dir schreiben, nicht nur antworten",
      text: [
        "Ein Channel ist ein Weg, mit einer Session zu sprechen, die du laufen lässt. Crewmark macht aus dieser Session einen KI-Mitarbeiter: Er wacht während der Arbeitszeiten per Heartbeat auf, nimmt sich das nächste Issue vom Board und schreibt dir in Crewmark, wenn er feststeckt, ohne dass du ihm zuerst schreiben musst.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter auf deinem Claude Code ein",
          text: "Führ den Setup-Befehl in einem Claude-Code-Gespräch aus; dieses Gespräch wird zum Mitarbeiter. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Wähl seine Arbeitszeiten und wie oft er aufwacht, alle 15 bis 240 Minuten. Siehe, [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Antworte, wenn er dich braucht",
          text: "Entscheidungen kommen als Direktnachrichten; eine Antwort, und er macht weiter. Für Arbeit über Nacht siehe, [wie du Claude Code rund um die Uhr laufen lässt](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Den Telegram-Channel für Claude Code einrichten" },
  mid: {
    title: "Soll Claude Code zu dir kommen, wenn es feststeckt?",
    text: "Crewmark-Mitarbeiter wachen per Heartbeat auf, arbeiten ein Board ab und schreiben dir, wenn sie eine Entscheidung brauchen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code Channels",
    items: [
      {
        q: "Was sind Claude Code Channels?",
        a: "MCP-Server, die Events in eine bereits laufende Claude-Code-Session schieben: Chat-Nachrichten aus Telegram, Discord oder iMessage oder Webhooks aus CI und Monitoring. Claude kann über denselben Channel antworten. Sie sind eine Research Preview.",
      },
      {
        q: "Gibt es ein offizielles Telegram-Plugin für Claude Code?",
        a: "Ja: `telegram@claude-plugins-official`. Installier es mit `/plugin install`, speicher deinen BotFather-Token mit `/telegram:configure`, starte Claude Code mit `--channels plugin:telegram@claude-plugins-official` und kopple dein Konto mit dem Code, den der Bot schickt.",
      },
      {
        q: "Kann ich Claude Code Channels mit Slack oder WhatsApp nutzen?",
        a: "Für keins von beiden gibt es einen offiziellen Channel. Für Slack startet Claude in Slack stattdessen Cloud-Sessions über eine @Claude-Erwähnung. Für andere Apps kannst du anhand der Channels-Referenz einen eigenen Channel bauen.",
      },
      {
        q: "Warum sind Claude Code Channels nicht verfügbar?",
        a: "Meist, weil du dich über Bedrock, Google Cloud oder Foundry anmeldest, deine Team- oder Enterprise-Organisation sie nicht aktiviert hat oder das Plugin nicht auf der freigegebenen Liste steht. Der Hinweis beim Start nennt den Grund.",
      },
      {
        q: "Funktionieren Channels, wenn mein Computer aus ist?",
        a: "Nein. Events kommen nur an, solange die Session auf deinem Computer offen ist. Für ein Always-on-Setup lässt du Claude Code in einem Hintergrundprozess oder einem dauerhaften Terminal auf einem Rechner laufen, der wach bleibt.",
      },
      {
        q: "Wie bekomme ich eine Benachrichtigung, wenn Claude Code fertig ist?",
        a: "Füg einen `Notification`- oder `Stop`-Hook hinzu, der einen Desktop-Alert auslöst, etwa mit `osascript` auf macOS. Siehe [Claude Code Hooks](/blog/claude-code-hooks). Um es auf dem Handy zu erfahren, bitte Claude, nach dem Ende über einen Channel zu antworten.",
      },
    ],
  },
  cta: {
    title: "Vom Beantworten von Nachrichten zur eigenen Warteschlange.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der Claude-Code-Doku zu Channels am 8. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden oder von Anthropic unterstützt. Claude und Claude Code sind Marken von Anthropic; Telegram, Discord und iMessage sind Marken ihrer jeweiligen Inhaber.",
};
