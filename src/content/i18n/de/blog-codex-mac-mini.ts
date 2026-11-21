import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex auf dem Mac mini einrichten: 24/7 vom Handy steuern",
    description:
      "Codex 24/7 auf einem Mac mini: ChatGPT-Desktop-App und CLI installieren, den Mac wach halten, Remote Control einschalten, Handy koppeln, Computer Use ergänzen.",
  },
  breadcrumb: "Codex auf einem Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex auf einem Mac mini: ein Host, der immer läuft und den du vom Handy aus steuerst",
    lead: "Mit Remote Control nutzt du Codex über die ChatGPT-App auf deinem Handy, aber nur, solange der Computer, auf dem es läuft, wach und online ist. Klappst du einen Laptop zu, verliert dein Handy den Zugriff. Für länger laufende Arbeit schlägt OpenAI einen eigenen Mac vor, der immer läuft, und ein Mac mini zu Hause passt dazu: Er bleibt an, hält deine Projekte, Logins und Tools auf einem Rechner, der dir gehört, und kann Computer Use und Browser-Aufgaben ausführen. Diese Anleitung zeigt, wie du Codex darauf installierst, ihn wach hältst, Remote Control einrichtest, dein Handy koppelst und seinen Desktop vom Laptop aus erreichst.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Warum ein Mac mini als Host für Codex",
      text: [
        "Dein Handy führt Codex nicht aus. Es schickt Prompts, Freigaben und Rückfragen, und alles andere liefert der Host: Projekte, Chats, Dateien, Zugangsdaten, Plugins, MCP-Server, Skills, Computer Use, den Browser und lokale Tools. Der Host entscheidet also, was Codex vom Handy aus tun kann und ob es überhaupt erreichbar ist. Ein Mac mini, der nie schläft, ist ein guter Host:",
      ],
      points: [
        "Er bleibt an. Ein Host, der schläft, das Netzwerk verliert oder die App schließt, unterbricht den Fernzugriff, bis er zurück ist.",
        "Computer Use und Browser-Aufgaben. Die ChatGPT-Desktop-App führt Computer Use unter macOS und Windows aus; die Linux-Preview hat es noch nicht. Unter Windows übernimmt Computer Use den aktiven Desktop und braucht eine entsperrte Sitzung. Ein Mac hat Locked Use, sodass eine Computer-Use-Aufgabe, die du vom Handy aus startest, weiterlaufen kann, nachdem sich der Mac gesperrt hat.",
        "iOS-Apps. Xcode und der iOS Simulator laufen nur unter macOS; arbeitet Codex an einer iPhone-App, muss der Host also ein Mac sein.",
        "Deine Daten bleiben zu Hause. Repositorys, Browser-Logins und Zugangsdaten liegen auf einem Rechner, der dir gehört, und Websites, bei denen du angemeldet bist, sowie Desktop-Apps funktionieren, weil der Host sie erreichen kann.",
        "Auch eine Basis für Server. Dieselbe Desktop-App kann Linux-Server als SSH-Hosts hinzufügen, der Mac mini kann also der Computer sein, der immer läuft und mit dem sich dein Handy verbindet, während die Chats auf einem Server laufen.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Was du brauchst",
      points: [
        "Einen Mac mini, den du eingeschaltet und mit dem Internet verbunden lassen kannst.",
        "Ein ChatGPT-Konto mit Zugriff auf Codex. OpenAIs Abo-Tabelle führt Remote Control vom Handy bei Plus, Pro, Business und Enterprise; mit einem API-Key ist es nicht verfügbar. In einem ChatGPT-Workspace muss möglicherweise zuerst ein Admin den Remote-Control-Zugriff einschalten.",
        "Die aktuelle ChatGPT-App auf deinem Handy, iOS oder Android, angemeldet mit demselben Konto und Workspace wie der Mac mini.",
        "Optional Tailscale auf dem Mac mini und deinem Laptop, um den Desktop des Mac mini von überall zu erreichen.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Codex auf einem Mac mini ein",
      steps: [
        {
          title: "Installiere die ChatGPT-Desktop-App und die Codex CLI",
          text: "Seit dem 9. Juli 2026 steckt Codex in der ChatGPT-Desktop-App, neben Chat und Work. Installiere die App für macOS, melde dich mit dem Konto und Workspace an, die du auf dem Handy nutzt, und wähl Codex. Die Codex CLI ist optional, aber praktisch, wenn du dich per SSH verbindest: Installiere sie mit OpenAIs Skript oder mit Homebrew, führ `codex` aus und wähl Sign in with ChatGPT. `codex app` öffnet die Desktop-App und installiert sie, falls sie fehlt.",
          code: install,
        },
        {
          title: "Halt den Mac mini wach",
          text: "Schalte in System Settings > Energy die Option Prevent automatic sleeping when the display is off ein, damit der Mac mini bei ausgeschaltetem Display weiterläuft; mit Wake for network access kann er für freigegebene Dienste aufwachen (siehe [Apples Einstellungen für Ruhezustand und Aktivierung](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)). Schalte dann in der Desktop-App Settings > General > Prevent sleep while running ein, damit lokale Chats weiterlaufen, während du weg bist.",
        },
        {
          title: "Schalte Remote Control ein",
          text: "Öffne in der Desktop-App Settings > Connections > Control this Mac or PC und wähl Set up oder Add. Genehmige den Fernzugriff und schließ eine eventuelle Verifizierung ab; die App zeigt einen QR-Code. Unter Settings > Connections legst du außerdem fest, dass der Computer wach bleibt, schaltest Computer Use ein, installierst die Chrome-Erweiterung und verwaltest verbundene Geräte.",
        },
        {
          title: "Kopple dein Handy",
          text: "Scann den QR-Code mit deinem Handy; er öffnet ChatGPT. Bestätige Konto und Workspace und schließ einen eventuellen MFA-, SSO- oder Passkey-Schritt ab. Der Mac mini erscheint dann unter Codex in der ChatGPT-App (in älteren Versionen Remote), und du kannst Chats in seinen Projekten starten, Befehle genehmigen und Diffs prüfen. Ein QR-Code koppelt ein Handy mit einem Host, kopple also jedes Handy, das du nutzen willst. Um den Mac mini auch von einem Laptop aus zu steuern, nutz auf dem Laptop Settings > Connections > Control other devices, sofern diese Option dort verfügbar ist.",
        },
        {
          title: "Schalte Computer Use und die Chrome-Erweiterung ein",
          text: "Für Browser- und Desktop-Aufgaben braucht der Host beides. Öffne bei ausgewähltem Codex Settings > Computer use, such unter Control nach Any App und wähl Install oder leg den Schalter um; die Chrome-Erweiterung installierst du über Settings > Connections. Computer Use ist nur in einigen Regionen verfügbar. Damit eine Computer-Use-Aufgabe, die du vom Handy aus startest, bei gesperrtem Mac laufen kann, schalte Locked Use in Settings > Computer Use ein. Es installiert ein Autorisierungs-Plug-in von Apple, entsperrt nur für einen aktiven Computer-Use-Durchgang und sperrt wieder, sobald jemand Tastatur oder Zeiger des Mac mini benutzt.",
        },
        {
          title: "Füg SSH-Hosts hinzu, wenn dein Code auf einem Server liegt",
          text: "Unter Settings > Connections kannst du außerdem einen Linux-Server aus `~/.ssh/config` als SSH-Host hinzufügen; dann wählst du einen Projektordner darauf. Chats in diesem Projekt laufen auf dem Server, während sich dein Handy weiterhin mit dem Mac mini verbindet. Die Einrichtung steht in [Codex auf einem VPS](/blog/codex-vps).",
        },
        {
          title: "Erreiche den Desktop des Mac mini mit Tailscale und Screen Sharing",
          text: "Installiere Tailscale auf dem Mac mini und deinem Laptop und füg beide demselben Tailnet hinzu, einem privaten Netzwerk, in dem sich nur deine Geräte über verschlüsselte WireGuard-Verbindungen gegenseitig erreichen können (siehe [was Tailscale ist](https://tailscale.com/kb/1151/what-is-tailscale)). Schalte auf dem Mac mini System Settings > General > Sharing > Screen Sharing ein; es kann nicht gleichzeitig mit Remote Management aktiv sein. Verbinde dich dann vom Laptop aus mit dem Namen des Mac mini in deinem Tailnet, um dich bei Websites anzumelden, Sicherheits- oder Datenschutzabfragen zu beantworten, die Computer Use nicht freigeben kann, oder Codex bei der Arbeit zuzusehen (siehe [Apples Anleitung zu Screen Sharing](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)).",
        },
      ],
      source: { label: "Quelle: OpenAIs Doku zu Remote Connections", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Was ihn erreichbar hält und was ihn stoppt",
      points: [
        "Der Mac mini muss wach, online und mit demselben Konto und Workspace angemeldet bleiben, mit geöffneter Desktop-App. Schläft er, verliert er das Netzwerk oder schließt sich die App, erreicht dein Handy ihn erst wieder, wenn er zurück ist. Schickst du ihn selbst in den Ruhezustand (Sleep), endet der Zugriff ebenfalls.",
        "Abmelden von der Desktop-App schaltet Remote Control aus, behält aber deine Kopplungen. Schalte Remote Control wieder ein, nachdem du dich erneut angemeldet hast.",
        "Erscheint ein Fehler, nachdem du Add gewählt hast, starte die Desktop-App auf dem Mac mini neu und versuch es noch einmal. Bei Kopplungen, die seit dem 8. Juni 2026 nicht genutzt wurden, müssen beide Apps aktualisiert und neu gekoppelt werden.",
        "Remote Control startet keine Arbeit von selbst. Ist eine Aufgabe erledigt, benachrichtigt dich Codex und wartet auf deinen nächsten Prompt. Zu geplanten Aufgaben und anderen Wegen, Arbeit ohne dich zu starten, siehe [proaktives Codex](/proactive-codex) und [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        "Weitere Lösungen findest du unter [Codex Remote Control](/blog/codex-remote-control#troubleshooting).",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "Andere Wege, Codex erreichbar zu halten",
      points: [
        "Ein Linux-Server als SSH-Host führt Codex auf dem Server aus, aber dein Handy verbindet sich weiterhin mit einem Mac oder Windows-PC, auf dem die Desktop-App läuft, also muss auch dieser Computer an bleiben. Der Mac mini kann das sein. Siehe [Codex auf einem VPS](/blog/codex-vps).",
        "Codex cloud führt Aufgaben in OpenAIs Cloud aus und arbeitet weiter, während dein Computer schläft. Es sieht nur seine Cloud-Umgebung, deine lokalen Dateien, Browser-Anmeldungen und dein VPN-Zugang sind dort also nicht vorhanden.",
        "Für Claude Code steht dasselbe Setup mit einem Mac mini, der immer läuft, in [Claude Code auf einem Mac mini](/blog/claude-code-mac-mini), und Anthropics Version von Remote Control in [Claude Code Remote Control](/remote-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib dem Mac mini, der immer läuft, einen festen Job",
      text: [
        "Ein Mac mini, der immer läuft, antwortet, wann immer du ihm vom Handy aus schreibst, und wartet, wenn du es nicht tust. Crewmark macht aus einem Codex-Chat darauf einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat: Während der Arbeitszeit weckt die `crewmark`-CLI den Mitarbeiter, damit er seine Issues auf einem gemeinsamen Board abarbeitet. Der Computer, auf dem er läuft, muss an bleiben, und der Mac mini tut das.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder SEO-Spezialist, und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde Codex auf dem Mac mini",
          text: "Füge den Setup-Link in einen Codex-Chat auf dem Mac mini ein. Er installiert die `crewmark`-CLI und verknüpft diesen Chat mit dem Mitarbeiter. Claude Code funktioniert auch.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Wähle die Zeiten, nur werktags oder jeden Tag, und wie oft der Mitarbeiter aufwacht: alle 15, 30, 60, 120 oder 240 Minuten. Die Zeiten können über Mitternacht gehen, auf einem Rechner, der nie schläft, funktioniert also auch eine Nachtschicht. Jeder Weckruf landet im selben Codex-Chat, sodass er dort weitermacht, wo er aufgehört hat.",
        },
        {
          title: "Weise Issues zu und sprich vom Handy aus mit ihm",
          text: "Öffne crewmark.ai im Browser deines Handys, um Issues anzulegen und zuzuweisen, oder schreib dem Mitarbeiter in seinem Arbeitsprotokoll (Work log); er antwortet dort. Eine Zuweisung weckt ihn sofort, und braucht er ein Review oder eine Entscheidung, setzt er das Issue auf Needs action und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex auf einem Mac mini als Host einrichten, der immer läuft" },
  mid: {
    title: "Soll der Mac mini weiterarbeiten, auch wenn du ihm nicht schreibst?",
    text: "Crewmark weckt Codex während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann Codex auf einem Mac mini 24/7 laufen?",
        a: "Ja, solange der Mac mini wach, online und angemeldet bleibt und die ChatGPT-Desktop-App geöffnet ist. Schalte in System Settings > Energy die Option Prevent automatic sleeping when the display is off ein und in der App unter Settings > General die Option Prevent sleep while running, dann richte Remote Control ein, damit du ihn vom Handy aus erreichst. Nach jeder Aufgabe wartet Codex auf deinen nächsten Prompt, sofern nichts anderes die Arbeit anstößt.",
      },
      {
        q: "Wie installiere ich Codex auf einem Mac mini?",
        a: "Installiere die ChatGPT-Desktop-App für macOS und wähl darin Codex. Für das Terminal installierst du die Codex CLI mit `curl -fsSL https://chatgpt.com/codex/install.sh | sh` oder `brew install --cask codex`, führst dann `codex` aus und wählst Sign in with ChatGPT. `codex app` öffnet die Desktop-App und installiert sie, falls sie fehlt.",
      },
      {
        q: "Wie nutze ich Codex auf meinem Mac mini vom iPhone aus?",
        a: "Öffne in der Desktop-App auf dem Mac mini Settings > Connections > Control this Mac or PC, wähl Set up oder Add und scann den QR-Code mit deinem iPhone. Der Mac mini erscheint dann unter Codex in der ChatGPT-App, wo du Chats starten, Befehle genehmigen und Diffs prüfen kannst. Die ChatGPT-App unter Android funktioniert auch.",
      },
      {
        q: "Was sind die Mindestanforderungen für Codex auf einem Mac?",
        a: "Für die Codex CLI nennt OpenAIs Installationsanleitung auf GitHub macOS 12 oder neuer, mit 4 GB RAM als Minimum und 8 GB als Empfehlung. Die OpenAI-Doku, die wir geprüft haben, nennt keine eigenen Anforderungen für die ChatGPT-Desktop-App. Für Remote Control brauchst du außerdem Zugriff auf Codex in deinem Konto und die aktuelle ChatGPT-App auf deinem Handy.",
      },
      {
        q: "Brauche ich Tailscale für Codex Remote Control?",
        a: "Nein. Remote Control läuft über OpenAIs sicheres Relay, der Mac mini ist also nicht dem öffentlichen Internet ausgesetzt. Tailscale brauchst du, um den Mac mini selbst zu erreichen, etwa seinen Desktop per Screen Sharing oder per SSH von einem Laptop unterwegs; OpenAIs Doku empfiehlt ein VPN oder ein Mesh-Netzwerk, um Maschinen außerhalb deines Netzwerks zu erreichen.",
      },
      {
        q: "Mac mini oder Linux-VPS für Codex?",
        a: "Ein Linux-Server reicht, wenn Codex nur ein Terminal braucht: Die CLI läuft unter Linux, und die Desktop-App kann Projekte darauf per SSH öffnen. Dein Handy verbindet sich aber weiterhin mit einem Mac oder Windows-PC, auf dem die Desktop-App läuft, diesen Computer brauchst du also ohnehin eingeschaltet. Nimm einen Mac mini für Computer Use, Browser-Aufgaben über die Chrome-Erweiterung, iOS-Entwicklung oder um deine Dateien zu Hause zu behalten. Siehe [Codex auf einem VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Gib deinem Mac mini einen Job.",
    text: "Crewmark macht aus Sessions in Codex und Claude Code KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand von OpenAIs Doku (Remote Connections, Computer Use, Codex CLI, Einstellungen, Abos), Apple Support und der Doku von Tailscale am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI, Apple oder Tailscale verbunden oder von ihnen unterstützt. Codex und ChatGPT sind Marken von OpenAI; Mac, Mac mini und Xcode sind Marken von Apple.",
};
