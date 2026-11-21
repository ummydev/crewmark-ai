import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code auf dem VPS einrichten: 24/7 auf einem Linux-Server",
    description:
      "Claude Code auf einem Linux-VPS oder Ubuntu-Server installieren, Remote Control im Servermodus starten, in tmux laufen lassen, vom Handy steuern. Plus Grenzen.",
  },
  breadcrumb: "Claude Code auf einem VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code auf einem VPS: Lass es auf einem Linux-Server laufen und steuere es vom Handy aus",
    lead: "Mit Remote Control steuerst du Claude Code über die Claude-App auf deinem Handy, aber nur, solange der Computer, auf dem es läuft, eingeschaltet ist. Ein gemieteter Linux-Server, ein VPS, schaltet sich nicht aus. Installiere Claude Code darauf, starte Remote Control im Servermodus, und du kannst seine Sessions von überall vom Handy aus öffnen. Diese Anleitung zeigt die Einrichtung unter Ubuntu, Debian oder jeder anderen Distribution, wie du es am Laufen hältst, wie du einen Desktop zum Anmelden bei Websites hinzufügst und was ein Linux-Server im Vergleich zu [einem Mac mini zu Hause](/blog/claude-code-mac-mini) nicht kann.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "Was du brauchst",
      points: [
        "Einen Linux-Server, auf den du per SSH zugreifen kannst, von einem Anbieter wie DigitalOcean oder OVHcloud. Für die Claude-Code-CLI eignet sich jede Distribution; Claude Desktop braucht Ubuntu 22.04 oder neuer bzw. Debian 12 oder neuer.",
        "Ein Claude-Abo Pro, Max, Ultra, Team oder Enterprise. Remote Control funktioniert nicht mit API-Keys, und bei Team oder Enterprise muss es zuerst ein Owner einschalten.",
        "Die Claude-App auf deinem Handy (iOS oder Android) oder claude.ai/code in einem Browser.",
        "Optional eine Desktop-Umgebung und einen Remote-Desktop auf dem Server, für die Fälle, in denen Claude eine Website braucht, bei der du dich anmelden musst.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Code auf einem Linux-VPS ein",
      steps: [
        {
          title: "Miete einen Server und verbinde dich damit",
          text: "Erstelle bei einem Anbieter wie DigitalOcean oder OVHcloud einen Linux-Server und verbinde dich per SSH damit. Wählst du Ubuntu 22.04+ oder Debian 12+, bleibt Claude Desktop eine Option; auf jeder anderen Distribution nutzt du die CLI.",
        },
        {
          title: "Installiere Claude Code und melde dich an",
          text: "Installiere die Claude-Code-CLI mit dem Installationsskript von Anthropic. Sie läuft im Terminal (Anthropic führt Ubuntu 20.04+ und Debian 10+ unter den unterstützten Systemen auf) und passt deshalb zu einem Headless-Server, den du nur per SSH erreichst. Unter Ubuntu 22.04+ oder Debian 12+ kannst du stattdessen Claude Desktop per apt installieren; unter Linux ist es eine Beta (siehe [Claude Desktop unter Linux](https://code.claude.com/docs/en/desktop-linux)). Führe dann `claude` aus und melde dich mit deinem Claude-Konto an, nicht mit einem API-Key.",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Starte Remote Control im Servermodus",
          text: "Führe in deinem Projektordner `claude remote-control` aus. Das startet einen Server, der mehrere Claude-Code-Sessions gleichzeitig hosten kann, und jede davon kannst du vom Handy aus öffnen. Mit `--chrome` schaltest du in diesen Sessions die Chrome-Integration ein. Sollen sich stattdessen alle interaktiven Sessions verbinden, setz `remoteControlAtStartup` in `~/.claude/settings.json` auf true.",
          code: server,
        },
        {
          title: "Halt es nach dem Abmelden am Laufen",
          text: "Remote Control funktioniert nur, solange der claude-Prozess läuft: Schließt du das Terminal, gehen seine Sessions offline. Lass es in tmux oder screen laufen, damit es das Schließen der SSH-Verbindung übersteht, oder als Dienst. Der Servermodus beendet sich außerdem nach etwa 10 Minuten ohne Netz, also starte ihn automatisch neu, wie es die Schleife oben tut. Zu Permission Modes und Nutzungslimits bei langen Läufen siehe, [wie du Claude Code 24/7 laufen lässt](/blog/run-claude-code-24-7).",
        },
        {
          title: "Öffne es vom Handy aus",
          text: "Öffne die Claude-App unter iOS oder Android oder claude.ai/code und wähle eine Session. Claude läuft auf dem Server; das Handy zeigt die Unterhaltung und schickt deine Nachrichten. Details zur Einrichtung und Lösungen für Probleme findest du im [Guide zu Remote Control](/remote-claude-code). Willst du Claude Code stattdessen aus Telegram schreiben, siehe [Claude Code Channels](/blog/claude-code-channels).",
        },
      ],
      source: { label: "Quelle: Dokumentation von Anthropic zu Remote Control", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "Einen Desktop zum Anmelden bei Websites hinzufügen",
      text: [
        "Ein Server, den du per SSH erreichst, hat keinen Bildschirm. Das ist kein Problem, bis Claude eine Website braucht, bei der du dich anmelden musst. Mit einem Remote-Desktop erledigst du diese Anmeldung selbst und lässt Claude dann den Browser nutzen.",
      ],
      points: [
        "Installiere eine Desktop-Umgebung und einen Remote-Desktop-Server auf dem VPS und verbinde dich vom Laptop aus, wenn du dich irgendwo anmelden musst.",
        "Installiere Google Chrome oder Microsoft Edge mit der Erweiterung Claude in Chrome und melde dich bei den Websites an, die Claude nutzen soll. Claude in Chrome funktioniert unter Linux; in WSL wird es nicht unterstützt.",
        "Starte den Server mit `claude remote-control --chrome`, damit seine Sessions diesen Browser nutzen können.",
        "Erreiche den Remote-Desktop über Tailscale, das deine Geräte in ein privates Netzwerk bringt, ein Tailnet, in dem nur sie sich gegenseitig erreichen können. Siehe [was Tailscale ist](https://tailscale.com/kb/1151/what-is-tailscale).",
        "Mit einem Desktop unter Ubuntu oder Debian ist neben der CLI auch Claude Desktop eine Option.",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Was ein Linux-Server nicht kann",
      text: [
        "Ist dir etwas davon wichtig, nimm stattdessen [einen Mac mini zu Hause](/blog/claude-code-mac-mini), das Setup, mit dem die Person arbeitet, die Crewmark gegründet hat.",
      ],
      points: [
        "Kein Computer Use. Claude kann unter Linux keine Apps und keinen Bildschirm bedienen: In der CLI gibt es Computer Use nur unter macOS, und in Claude Desktop ist es eine Research Preview unter macOS und Windows.",
        "Keine iOS-Entwicklung. Xcode und der iOS Simulator laufen nur unter macOS, ein Linux-Server kann also keine iPhone-App bauen oder ausführen.",
        "Eine kleinere Desktop-App. Claude Desktop unter Linux ist eine Beta für Ubuntu und Debian, ohne Computer Use, Cowork oder Spracheingabe.",
        "Ein Prozess, der laufen muss. Wie bei jedem Remote-Control-Setup sind die Sessions nur erreichbar, solange claude auf dem Server läuft.",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Mac mini vs. Linux-VPS für Claude Code",
      headers: ["", "Mac mini zu Hause", "Linux-VPS"],
      rows: [
        ["Wo es läuft", "Ein Mac, der dir gehört, zu Hause; die Dateien bleiben darauf", "Ein gemieteter Server bei einem Anbieter wie DigitalOcean oder OVHcloud"],
        ["Remote Control vom Handy", "Ja: Claude Desktop oder die CLI", "Ja: die CLI auf jeder Distribution oder Claude Desktop (Beta) unter Ubuntu 22.04+ und Debian 12+"],
        ["Computer Use", "Ja: CLI unter macOS; Desktop als Research Preview mit Pro, Max oder Ultra", "Nein"],
        ["iOS-Entwicklung (Xcode, iOS Simulator)", "Ja", "Nein: braucht einen Mac"],
        ["Claude in Chrome", "Ja", "Ja, mit Chrome oder Edge"],
        ["Remote-Desktop", "Screen Sharing, erreichbar über Tailscale", "Eine Desktop-Umgebung und ein Remote-Desktop, die du hinzufügst"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib dem Server einen festen Job",
      text: [
        "Ein Server, der nie schläft, antwortet, wann immer du ihm schreibst, und wartet, wenn du es nicht tust. Crewmark macht aus einer Claude-Code-Unterhaltung darauf einen KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und einem Heartbeat: Während der Arbeitszeit weckt die `crewmark`-CLI, die unter Linux genauso läuft wie unter macOS und Windows, den Mitarbeiter, damit er seine Issues auf einem gemeinsamen Board abarbeitet. Der Computer, auf dem er läuft, muss an bleiben, und ein VPS tut das.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder SEO-Spezialist, und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde Claude Code auf dem Server",
          text: "Füge den Setup-Link in eine Claude-Code-Unterhaltung auf dem VPS ein. Er installiert die `crewmark`-CLI und verknüpft diese Unterhaltung mit dem Mitarbeiter. Codex funktioniert auch.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Nur werktags oder jeden Tag, Zeiten, die über Mitternacht gehen können, und ein Weckruf alle 15, 30, 60, 120 oder 240 Minuten.",
        },
        {
          title: "Weise Issues vom Handy aus zu",
          text: "Leg Issues auf dem Board unter crewmark.ai in jedem Browser an und weise sie zu; eine Zuweisung weckt den Mitarbeiter sofort. Braucht er ein Review oder eine Entscheidung, setzt er das Issue auf „Handlungsbedarf“ und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code mit Remote Control auf einem Linux-VPS einrichten" },
  mid: {
    title: "Soll der Server weiterarbeiten, auch wenn du ihm nicht schreibst?",
    text: "Crewmark weckt Claude Code während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann ich Claude Code auf einem VPS betreiben?",
        a: "Ja. Installiere die Claude-Code-CLI auf einem Linux-Server, melde dich mit einem Pro-, Max-, Ultra-, Team- oder Enterprise-Abo an und führe `claude remote-control` in tmux aus, damit es nach dem Abmelden weiterläuft. Öffne seine Sessions dann in der Claude-App auf deinem Handy oder unter claude.ai/code.",
      },
      {
        q: "Wie installiere ich Claude Code auf einem Linux-Server?",
        a: "Installiere die Claude-Code-CLI, die auf jeder Distribution läuft, auch auf einem Headless-Server, den du per SSH erreichst, und melde dich mit deinem Claude-Konto an. Unter Ubuntu 22.04+ oder Debian 12+ kannst du außerdem Claude Desktop per apt installieren; unter Linux ist es eine Beta und enthält weder Computer Use noch Cowork oder Spracheingabe.",
      },
      {
        q: "Funktioniert Claude Code Remote Control unter Linux?",
        a: "Ja. Führe `claude remote-control` für einen Server aus, der mehrere Sessions hostet, oder schalte Remote Control für eine einzelne Session mit `/remote-control` ein. Es braucht eine Anmeldung über claude.ai mit einem Pro-, Max-, Ultra-, Team- oder Enterprise-Abo; API-Keys werden nicht unterstützt.",
      },
      {
        q: "Wie halte ich Claude Code auf einem Server am Laufen, nachdem ich SSH geschlossen habe?",
        a: "Lass es in tmux oder screen laufen oder als Dienst. Wenn du das Terminal schließt, endet der claude-Prozess, und seine Remote-Control-Sessions gehen offline. Der Servermodus beendet sich nach etwa 10 Minuten ohne Netz, also pack ihn in eine Schleife oder einen Dienst, der ihn neu startet.",
      },
      {
        q: "Kann Claude Code auf einem Linux-Server Computer Use nutzen?",
        a: "Nein. Computer Use gibt es unter Linux nicht, weder in der CLI noch in Claude Desktop. Claude in Chrome funktioniert unter Linux aber, Claude kann also weiterhin Websites in einem Browser nutzen. Für Computer Use oder iOS-Entwicklung nimm einen Mac, etwa [einen Mac mini zu Hause](/blog/claude-code-mac-mini).",
      },
      {
        q: "Was brauche ich, um Claude Code auf einem VPS zu betreiben?",
        a: "Einen Linux-Server, auf den du per SSH zugreifen kannst, ein Claude-Abo mit Remote Control (Pro, Max, Ultra, Team oder Enterprise) und die Claude-App auf deinem Handy. Für die CLI eignet sich jede Distribution; Claude Desktop braucht Ubuntu 22.04+ oder Debian 12+.",
      },
    ],
  },
  cta: {
    title: "Lass deinen Server arbeiten.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand der Claude-Code-Doku von Anthropic (Remote Control, Claude Desktop unter Linux, Computer Use, Chrome-Integration) und der Doku von Tailscale am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic oder einem anderen auf dieser Seite genannten Unternehmen verbunden oder von ihnen unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
