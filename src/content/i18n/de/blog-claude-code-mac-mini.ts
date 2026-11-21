import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code auf dem Mac mini einrichten: 24/7 vom Handy steuern",
    description:
      "Claude Code 24/7 auf einem Mac mini zu Hause: wach halten, Remote Control einschalten, vom Handy steuern und den Desktop über Tailscale erreichen.",
  },
  breadcrumb: "Claude Code auf einem Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code auf einem Mac mini: ein Server, der immer läuft und den du vom Handy aus steuerst",
    lead: "Mit Remote Control steuerst du Claude Code über die Claude-App auf deinem Handy, aber nur, solange der Computer, auf dem es läuft, eingeschaltet ist. Also gib ihm einen Computer, der sich nie ausschaltet. Die Person, die Crewmark gegründet hat, nutzt zu Hause einen Mac mini als Server, der immer läuft, und hält das derzeit für das Setup, das am besten funktioniert: Claude Code läuft darauf mit Remote Control, das Handy steuert es, und ein MacBook Air erreicht seinen Desktop über Tailscale und einen Remote-Desktop. Alle Daten bleiben auf dem Mac mini. So baust du es nach.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Warum Claude Code einen Computer braucht, der an bleibt",
      text: [
        "Am schnellsten startest du mit dem Computer, den du schon hast. In der Claude-Desktop-App ist Remote Control eingebaut: Öffne auf dem Computer, den du steuern willst, die Settings, schalte Connect new sessions to Remote Control ein und öffne die Session in der Claude-App auf deinem Handy. Claude läuft auf diesem Computer weiter; das Handy ist nur ein Fenster hinein.",
        "Der Haken: Das funktioniert nur, solange dieser Computer an ist. Klappst du den Laptop zu, erreicht dein Handy Claude Code erst wieder, wenn er aufwacht. Ein Mac mini, der zu Hause an bleibt, hebt diese Grenze auf, und genau das richtet der Rest dieser Anleitung ein.",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "Das Setup im Überblick",
      points: [
        "Ein Mac mini zu Hause, eingeschaltet und so eingestellt, dass er nicht in den Ruhezustand geht. Er ist der Server: Claude Code, deine Repositorys, Logins und Dateien liegen darauf.",
        "Claude Code mit eingeschaltetem Remote Control, in der Claude-Desktop-App oder der CLI.",
        "Die Claude-App auf deinem Handy (iOS oder Android) oder claude.ai/code in einem beliebigen Browser, um diese Sessions von überall zu öffnen.",
        "Tailscale plus Screen Sharing (Bildschirmfreigabe), damit du den Desktop des Mac mini vom Laptop aus öffnen kannst, als würdest du davorsitzen.",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Warum ein Mac mini und kein Linux-Server",
      text: [
        "Ein gemieteter Linux-Server bleibt auch an, und dieses Setup beschreibt [Claude Code auf einem VPS](/blog/claude-code-vps). Ein Mac kann zusätzlich Dinge, die Linux nicht kann:",
      ],
      points: [
        "Computer Use, bei dem Claude Apps und den Bildschirm bedient. In der CLI gibt es das nur unter macOS. In Claude Desktop ist es eine Research Preview unter macOS und Windows, mit Pro, Max oder Ultra (nicht Team oder Enterprise), und die App muss laufen. Siehe [Anthropics Doku zu Computer Use](https://code.claude.com/docs/en/computer-use).",
        "iOS-Apps. Xcode und der iOS Simulator laufen nur unter macOS; arbeitet Claude Code an einer iPhone-App, muss der Server also ein Mac sein.",
        "Die vollständige Desktop-App. Claude Desktop unter Linux ist eine Beta für Ubuntu und Debian, ohne Computer Use, Cowork oder Spracheingabe.",
        "Deine Daten bleiben zu Hause. Repositorys, Browser-Logins und Dateien liegen auf einem Rechner, der dir gehört, statt auf dem Server eines Anbieters.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Code auf einem Mac mini ein",
      steps: [
        {
          title: "Halt den Mac mini wach",
          text: "Schalte in System Settings > Energy die Option Prevent automatic sleeping when the display is off ein, damit der Mac mini bei ausgeschaltetem Display weiterläuft. Schalte auch Wake for network access ein, damit er für freigegebene Dienste aufwachen kann. Siehe [Apples Einstellungen für Ruhezustand und Aktivierung](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac).",
        },
        {
          title: "Installiere Claude Code und melde dich an",
          text: "Installiere die Claude-Desktop-App, die Claude-Code-CLI oder beides und melde dich mit deinem Claude-Konto an. Remote Control braucht ein Pro-, Max-, Ultra-, Team- oder Enterprise-Abo. API-Keys funktionieren damit nicht, und bei Team oder Enterprise muss es zuerst ein Owner einschalten.",
        },
        {
          title: "Schalte Remote Control ein",
          text: "Öffne in der Desktop-App Settings > Code (oder Settings > Claude Code) und schalte Connect new sessions to Remote Control ein, damit sich jede neue Session vom Handy aus öffnen lässt. Für eine einzelne Session tippst du `/remote-control` oder `/rc` im Code-Tab. In der CLI setzt du `remoteControlAtStartup` in `~/.claude/settings.json` auf true oder führst `claude remote-control` als Server aus, der mehrere Sessions gleichzeitig hostet.",
          code: remoteControl,
        },
        {
          title: "Öffne es vom Handy aus",
          text: "Öffne die Claude-App unter iOS oder Android oder claude.ai/code in einem Browser und wähle die Session. Claude läuft weiter auf dem Mac mini; dein Handy schickt Nachrichten und zeigt die Ergebnisse. Bricht das Netz ab, verbindet sich Claude Code automatisch neu, sobald der Mac mini wieder online ist. Details zur Einrichtung und Lösungen für Probleme findest du im [Guide zu Remote Control](/remote-claude-code).",
        },
        {
          title: "Bring Mac mini und Laptop in Tailscale",
          text: "Installiere Tailscale auf dem Mac mini und auf dem Laptop, von dem aus du arbeitest, und füge beide demselben Tailnet hinzu. Tailscale baut zwischen deinen Geräten ein privates Peer-to-Peer-Netzwerk mit verschlüsselten WireGuard-Verbindungen auf, und nur Geräte in deinem Tailnet können sich gegenseitig erreichen. Siehe [was Tailscale ist](https://tailscale.com/kb/1151/what-is-tailscale).",
        },
        {
          title: "Schalte Screen Sharing ein",
          text: "Öffne auf dem Mac mini System Settings > General > Sharing und schalte Screen Sharing (Bildschirmfreigabe) ein. Es kann nicht gleichzeitig mit Remote Management aktiv sein, schalte das also zuerst aus, falls es an ist. Siehe [Apples Anleitung zu Screen Sharing](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac).",
        },
        {
          title: "Arbeite vom Laptop aus daran",
          text: "Verbinde dich vom Laptop aus per Screen Sharing mit dem Namen oder der Adresse des Mac mini in deinem Tailnet. Du bekommst seinen Desktop: Melde dich in seinem Browser bei einer Website an, öffne Xcode und den Simulator oder schau zu, was Claude gerade tut, von zu Hause oder von überall sonst. Die Person, die Crewmark gegründet hat, arbeitet so von einem MacBook Air aus, und die Dateien verlassen den Mac mini nie.",
        },
      ],
      source: { label: "Quelle: Dokumentation von Anthropic zu Remote Control", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Was es am Laufen hält und was es stoppt",
      points: [
        "Der Claude-Code-Prozess muss weiterlaufen. Beendest du die Desktop-App oder schließt das Terminal, geht die Session offline, also lass sie auf dem Mac mini offen.",
        "Ruhezustand und Netzabbrüche lassen sich überbrücken: Claude Code verbindet sich automatisch neu, sobald der Rechner wieder online ist. Der Servermodus (`claude remote-control`) ist weniger geduldig. Nach etwa 10 Minuten ohne Netz beendet er sich, dann startest du ihn neu.",
        "Remote Control steuert eine Session, die bereits läuft. Es fängt nicht von selbst mit Arbeit an: Ist eine Aufgabe erledigt, wartet Claude auf deine nächste Nachricht.",
        "Auch Berechtigungsabfragen und Nutzungslimits stoppen lange Läufe. [Wie du Claude Code 24/7 laufen lässt](/blog/run-claude-code-24-7) behandelt Permission Modes, `/goal` und die Limits der Abos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib dem Mac mini, der immer läuft, einen festen Job",
      text: [
        "Ein Mac mini, der immer läuft, antwortet, wann immer du ihm schreibst, und wartet, wenn du es nicht tust. Crewmark macht aus einer Claude-Code-Unterhaltung darauf einen KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und einem Heartbeat: Während der Arbeitszeit weckt die `crewmark`-CLI den Mitarbeiter, damit er seine Issues auf einem gemeinsamen Board abarbeitet. Der Computer, auf dem er läuft, muss an bleiben, und der Mac mini tut das.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder SEO-Spezialist, und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde Claude Code auf dem Mac mini",
          text: "Füge den Setup-Link in eine Claude-Code-Unterhaltung auf dem Mac mini ein. Er installiert die `crewmark`-CLI und verknüpft diese Unterhaltung mit dem Mitarbeiter. Codex funktioniert auch.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Wähle die Zeiten, nur werktags oder jeden Tag, und wie oft der Mitarbeiter aufwacht: alle 15, 30, 60, 120 oder 240 Minuten. Die Zeiten können über Mitternacht gehen, auf einem Rechner, der nie schläft, funktioniert also auch eine Nachtschicht.",
        },
        {
          title: "Weise Issues vom Handy aus zu",
          text: "Leg Issues auf dem Board unter crewmark.ai in jedem Browser an und weise sie zu; eine Zuweisung weckt den Mitarbeiter sofort. Er hält den Status jedes Issues aktuell, und braucht er ein Review oder eine Entscheidung, setzt er das Issue auf „Handlungsbedarf“ und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code auf einem Mac mini als Server einrichten, der immer läuft" },
  mid: {
    title: "Soll der Mac mini weiterarbeiten, auch wenn du ihm nicht schreibst?",
    text: "Crewmark weckt Claude Code während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann Claude Code auf einem Mac mini 24/7 laufen?",
        a: "Ja, solange der Mac mini wach bleibt und der Claude-Code-Prozess weiterläuft. Schalte in System Settings > Energy die Option Prevent automatic sleeping when the display is off ein, lass die Claude-Desktop-App offen (oder die CLI laufen) und schalte Remote Control ein, damit du es vom Handy aus erreichst. Berechtigungsabfragen und Nutzungslimits gelten weiterhin.",
      },
      {
        q: "Wie richte ich Claude Code auf einem Mac mini ein?",
        a: "Halt den Mac in den Energy-Einstellungen wach, installiere Claude Code oder die Claude-Desktop-App und melde dich an, schalte Connect new sessions to Remote Control ein (oder führ `claude remote-control` aus) und öffne die Session dann in der Claude-App auf deinem Handy. Mit Tailscale und Screen Sharing erreichst du seinen Desktop vom Laptop aus.",
      },
      {
        q: "Wie nutze ich Claude Code auf meinem Mac mini vom iPhone aus?",
        a: "Mit Remote Control. Schalte es für die Session auf dem Mac mini ein, öffne dann die Claude-App auf deinem iPhone (oder claude.ai/code) und wähle die Session. Claude läuft auf dem Mac mini; das Handy schickt deine Nachrichten und zeigt die Ergebnisse. Du brauchst dafür ein Pro-, Max-, Ultra-, Team- oder Enterprise-Abo.",
      },
      {
        q: "Brauche ich Tailscale für Claude Code?",
        a: "Nicht für Remote Control: Die Session öffnest du in der Claude-App. Tailscale brauchst du, um den Mac mini selbst zu erreichen, etwa seinen Desktop per Screen Sharing vom Laptop aus. Es bringt deine Geräte in ein privates Netzwerk, ein Tailnet, in dem nur sie sich gegenseitig erreichen können.",
      },
      {
        q: "Kann Claude Code auf einem Mac mini iOS-Apps bauen?",
        a: "Erst ein Mac macht es möglich: Xcode und der iOS Simulator laufen nur unter macOS, deshalb nutzt dieses Setup einen Mac mini statt eines Linux-Servers. Lass Claude Code auf dem Mac mini im Projektordner der App laufen und öffne seinen Desktop per Screen Sharing, wenn du den Simulator selbst sehen willst.",
      },
      {
        q: "Mac mini oder Linux-VPS für Claude Code?",
        a: "Ein Linux-VPS reicht, wenn Claude Code nur ein Terminal und einen Browser braucht: Die CLI läuft auf jeder Distribution, und Claude in Chrome funktioniert unter Linux. Nimm einen Mac mini für Computer Use, für iOS-Entwicklung mit Xcode und dem Simulator oder um deine Dateien auf einem Rechner zu Hause zu behalten. Siehe [Claude Code auf einem VPS](/blog/claude-code-vps).",
      },
    ],
  },
  cta: {
    title: "Gib deinem Mac mini einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand der Claude-Code-Doku von Anthropic (Remote Control, Computer Use, Claude Desktop unter Linux), Apple Support und der Doku von Tailscale am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic, Apple oder Tailscale verbunden oder von ihnen unterstützt. Claude und Claude Code sind Marken von Anthropic; Mac, Mac mini und Xcode sind Marken von Apple.",
};
