import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex auf dem VPS einrichten: Installation, Login und SSH",
    description:
      "Die Codex CLI auf einem Linux-VPS installieren, per Device Auth anmelden, den Server als SSH-Host in der ChatGPT-Desktop-App hinzufügen und vom Handy erreichen.",
  },
  breadcrumb: "Codex auf einem VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex auf einem VPS: auf einem Linux-Server installieren und per SSH verbinden",
    lead: "Ein gemieteter Linux-Server, ein VPS, schläft nie, und die Codex CLI läuft unter Linux. Worauf es ankommt, ist, wie du ihn vom Handy aus erreichst: Die ChatGPT-App verbindet sich nicht selbst mit dem Server. Sie verbindet sich mit der ChatGPT-Desktop-App auf einem Mac oder Windows-PC, und diese App führt Chats per SSH auf dem Server aus. Diese Anleitung zeigt, wie du Codex auf dem Server installierst und dich dort anmeldest, ihn als SSH-Host hinzufügst und vom Handy aus steuerst, außerdem ein reines Terminal-Setup mit tmux, wie du den Server absicherst und Codex cloud, falls du lieber gar keinen Server betreiben willst.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Wie Codex auf einem VPS zusammenspielt",
      text: ["Beteiligt sind drei Maschinen, und jede hat eine Aufgabe:"],
      points: [
        "Der Linux-Server führt Codex aus. Chats in seinen Projekten führen dort Befehle aus, lesen Dateien und schreiben Änderungen, mit den Abhängigkeiten, Sicherheitsrichtlinien und der Rechenleistung des Servers. Die Desktop-App startet Codex darauf per SSH, in der Login-Shell des Remote-Nutzers.",
        "Ein Mac oder Windows-PC führt die ChatGPT-Desktop-App aus, die die SSH-Verbindung hält. Er ist der Host, mit dem dein Handy spricht, also muss auch er wach und online bleiben.",
        "Dein Handy führt die ChatGPT-App aus und steuert diesen Host per Remote Control. Es schickt Prompts und Freigaben und zeigt dir Diffs, Terminal-Ausgaben und Benachrichtigungen.",
        "OpenAI dokumentiert nur macOS und Windows als Remote-Control-Hosts, das direkte Koppeln eines Handys mit einem Linux-Server ist also nicht dokumentiert. Kopple dein Handy stattdessen mit dem Mac oder PC, am besten mit [einem Mac mini, der immer läuft](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Was du brauchst",
      points: [
        "Einen Linux-Server, den du per SSH erreichst. Die Installationsanleitung der Codex CLI auf GitHub nennt Ubuntu 20.04+ oder Debian 10+, mit 4 GB RAM als Minimum und 8 GB als Empfehlung; Release-Builds gibt es für x86_64 und ARM64.",
        "Einen Mac oder Windows-PC mit der ChatGPT-Desktop-App, um den Server als SSH-Host hinzuzufügen. Willst du den Server vom Handy aus erreichen, muss dieser Computer an bleiben.",
        "Ein ChatGPT-Konto für Codex. OpenAIs Abo-Tabelle führt SSH-Remote-Verbindungen bei Plus, Pro, Business und Enterprise sowie mit einem API-Key, und Remote Control vom Handy bei Plus, Pro, Business und Enterprise, aber nicht mit einem API-Key.",
        "Die ChatGPT-App auf deinem Handy, iOS oder Android.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Codex auf einem Linux-VPS ein",
      steps: [
        {
          title: "Miete einen Server und prüf SSH",
          text: "Erstelle einen Linux-Server und stell sicher, dass du dich per SSH von dem Mac oder PC aus anmelden kannst, auf dem die Desktop-App laufen wird. Nutze eine Anmeldung per Schlüssel und ein Konto mit nur den Rechten, die Codex braucht, nicht root.",
        },
        {
          title: "Installiere die Codex CLI auf dem Server",
          text: "Führ OpenAIs Installationsskript auf dem Server aus; derselbe Befehl aktualisiert Codex später, und npm funktioniert auch. Installiere bubblewrap für die Sandbox von Codex: Ohne `bwrap` im PATH greift Codex auf einen mitgelieferten Helfer zurück, der unprivilegierte User Namespaces braucht, und gibt beim Start eine Warnung aus. Unter Ubuntu 24.04 kann die Warnung bleiben, bis du das AppArmor-Profil `bwrap-userns-restrict` lädst.",
          code: install,
        },
        {
          title: "Melde dich auf einem Headless-Server an",
          text: "Der Server hat keinen Browser, also nutz die Anmeldung per Device Code: Führ `codex login --device-auth` aus oder wähl Sign in with Device Code und folge der Anleitung. Die Funktion ist in der Beta, und die Anmeldung per Device Code muss zuerst in deinen ChatGPT-Sicherheitseinstellungen oder von deinem Workspace-Admin eingeschaltet werden. Kannst du sie nicht nutzen, leite den Login-Callback mit `ssh -L 1455:localhost:1455` weiter und führ `codex login` auf dem Server aus, oder kopier `~/.codex/auth.json` von einem Computer, auf dem du angemeldet bist, und behandle diese Datei wie ein Passwort.",
          code: login,
        },
        {
          title: "Füg den Server zu deiner SSH-Config hinzu",
          text: "Füg auf dem Mac oder PC einen Host-Eintrag in `~/.ssh/config` hinzu und prüf, dass `ssh devbox` funktioniert. Codex liest konkrete Host-Aliasse aus dieser Datei und ignoriert Einträge, die nur aus Mustern bestehen. Die Desktop-App startet Codex in der Login-Shell des Remote-Nutzers, `codex` muss dort also im PATH liegen.",
          code: ssh,
        },
        {
          title: "Füg ihn in der Desktop-App als SSH-Host hinzu",
          text: "Öffne in der ChatGPT-Desktop-App Settings > Connections, füg den SSH-Host hinzu oder aktivier ihn und wähl dann einen Projektordner auf dem Server. Chats in diesem Projekt führen auf dem Server Befehle aus, lesen dort Dateien und schreiben Änderungen.",
        },
        {
          title: "Steuere ihn vom Handy aus",
          text: "Öffne auf demselben Mac oder PC Settings > Connections > Control this Mac or PC, wähl Set up oder Add und scann den QR-Code mit der ChatGPT-App. Öffne Codex auf deinem Handy, wähl diesen Computer und das Projekt des Servers und starte einen Chat. Der Chat läuft über den Mac oder PC auf dem Server, halt diesen Computer also wach und online; [ein Mac mini zu Hause](/blog/codex-mac-mini) kann diese Aufgabe übernehmen. Details zur Einrichtung und Lösungen findest du unter [Codex Remote Control](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Quelle: OpenAIs Doku zu Remote Connections und SSH-Hosts", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "Nur Terminal: die Codex CLI per SSH in tmux",
      text: [
        "Brauchst du nur ein Terminal, kannst du die Desktop-App weglassen. Verbinde dich per SSH mit dem Server, führ die Codex CLI in tmux aus und trenn dich von der Sitzung: Codex läuft weiter, nachdem du die Verbindung beendet hast, und du kehrst von jedem Computer aus zurück, der den Server per SSH erreicht.",
      ],
      steps: [
        {
          title: "Starte Codex in tmux",
          text: "Installiere tmux aus den Paketen deiner Distribution, falls es fehlt, starte eine Sitzung und führ `codex` in deinem Projektordner aus.",
          code: tmux,
        },
        {
          title: "Was dieses Setup nicht kann",
          text: "Dieses Setup ist nicht mit deinem Handy verbunden. Laut OpenAI beginnt die Einrichtung für das Handy in der Desktop-App und lässt sich nicht über die CLI erledigen. Die CLI hat einen experimentellen Befehl `codex remote-control`, den die Doku mit verwalteten Remote-Control-Clients und SSH-Workflows in Verbindung bringt, aber sie beschreibt nicht, wie man ein Handy mit einem Server koppelt, auf dem nur die CLI läuft.",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Halt den Server sicher",
      points: [
        "Behandle ihn wie jeden SSH-Server: vertrauenswürdige Schlüssel, ein Konto mit minimalen Rechten und keine Dienste ohne Authentifizierung, die im öffentlichen Internet lauschen.",
        "Mach den App-Server von Codex nicht öffentlich zugänglich. `codex app-server --listen` und `codex --remote` sind vor allem für Entwicklung und Debugging gedacht, und OpenAI warnt davor, App-Server-Transports in einem geteilten oder öffentlichen Netzwerk zu öffnen.",
        "Um den Server von außerhalb seines Netzwerks zu erreichen, nutz ein VPN oder ein Mesh-Netzwerk wie Tailscale, das nur deine eigenen Geräte über verschlüsselte WireGuard-Verbindungen miteinander verbindet.",
        "Halt `~/.codex/auth.json` privat; laut OpenAI solltest du die Datei wie ein Passwort behandeln.",
        "Sandbox-Einstellungen, Sicherheitskontrollen und Freigaben gelten für Chats auf dem Server genauso wie lokal, und die Sandbox braucht unter Linux bubblewrap.",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "Einen Chat zwischen deinem Computer und dem Server verschieben",
      text: [
        "Die Desktop-App kann einen Chat samt Git-Stand zwischen deinem Computer und einem verbundenen SSH-Host übergeben. Beide brauchen ein gespeichertes Projekt für dasselbe Git-Repository. Wähl in der Fußzeile des Chats den Ort, an dem er gerade läuft, wähl den Ziel-Host (This computer holt ihn zurück), prüf alles und wähl Hand off. Codex legt dort einen Worktree an oder nutzt einen vorhandenen. Eine Antwort, die noch läuft, wird unterbrochen, und an Codex cloud lässt sich ein Chat nicht übergeben.",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "Ganz ohne Server: Codex cloud",
      points: [
        "Codex cloud führt Coding-Aufgaben in OpenAIs Cloud aus. Jede Aufgabe bekommt ihren eigenen Workspace und arbeitet weiter, während dein Computer schläft.",
        "Starte im Web, in der Desktop-App (Work in > Cloud) oder in der ChatGPT-App auf deinem Handy (Codex öffnen, Cloud und eine Umgebung wählen). Mit der Standardumgebung kannst du starten, ohne ein Repository auszuwählen, und Codex kann Repositorys aus deinem verbundenen GitHub- oder GitLab-Konto auschecken.",
        "Ein Cloud-Task sieht nur seine Cloud-Umgebung: Deine lokalen Dateien, laufenden Prozesse, Browser-Anmeldungen und dein VPN-Zugang werden nicht übernommen. Wiederverwendbare Setups liegen unter Work in > Cloud > Select environment > Create environment.",
        "Es braucht eine Anmeldung mit ChatGPT, keinen API-Key. Im Terminal öffnet `codex cloud` eine Auswahl deiner Cloud-Chats, und `codex cloud exec` reicht eine Aufgabe ein.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mac-mini-Host vs. Linux-SSH-Host vs. Codex cloud",
      headers: ["", "Mac-mini-Host", "Linux-SSH-Host", "Codex cloud"],
      rows: [
        ["Wo Codex läuft", "Auf dem Mac mini, in der ChatGPT-Desktop-App", "Auf dem Server; die Desktop-App auf einem Mac oder PC startet es per SSH", "In OpenAIs Cloud, in einem Workspace pro Aufgabe"],
        ["Womit sich dein Handy verbindet", "Mit dem Mac mini", "Mit dem Mac oder Windows-PC, auf dem die Desktop-App läuft", "Mit OpenAIs Cloud: Codex öffnen und Cloud wählen"],
        ["Was an bleiben muss", "Der Mac mini", "Der Server und der Mac oder PC", "Nichts von dir"],
        ["Dateien, Anmeldungen und VPN", "Alles auf dem Mac mini", "Was auf dem Server liegt", "Nur die Cloud-Umgebung; lokale Dateien, Browser-Anmeldungen und VPN-Zugang werden nicht übernommen"],
        ["Passt für", "Computer Use und Browser-Aufgaben über die Chrome-Erweiterung, iOS-Entwicklung, Dateien zu Hause", "Terminal-Arbeit auf einem Server, mit seiner Rechenleistung und seinen Abhängigkeiten", "Coding-Aufgaben, die nur ein Repository brauchen"],
        ["Abos (OpenAIs Tabelle)", "Remote Control vom Handy: Plus, Pro, Business, Enterprise", "SSH-Verbindungen: diese Abos und ein API-Key; die Steuerung des Hosts vom Handy braucht trotzdem eines dieser Abos", "Plus, Pro, Business, Enterprise; nicht mit einem API-Key"],
        ["Einrichtung", "Desktop-App, Einstellungen gegen den Ruhezustand, Remote Control", "CLI auf dem Server, SSH-Config, SSH-Host in der Desktop-App", "Eine Cloud-Umgebung wählen oder anlegen"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib dem Server einen festen Job",
      text: [
        "Ein Server, der nie schläft, wartet trotzdem auf deinen nächsten Prompt. Crewmark macht aus einem Codex-Chat darauf einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat: Während der Arbeitszeit weckt die `crewmark`-CLI, die unter Linux genauso läuft wie unter macOS und Windows, den Mitarbeiter, damit er seine Issues auf einem gemeinsamen Board abarbeitet. Der Computer, auf dem er läuft, muss an bleiben, und ein VPS tut das.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler oder SEO-Spezialist, und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde Codex auf dem Server",
          text: "Füge den Setup-Link in einen Codex-Chat auf dem Server ein. Er installiert die `crewmark`-CLI und verknüpft diesen Chat mit dem Mitarbeiter. Claude Code funktioniert auch; siehe [Claude Code auf einem VPS](/blog/claude-code-vps).",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Nur werktags oder jeden Tag, Zeiten, die über Mitternacht gehen können, und ein Weckruf alle 15, 30, 60, 120 oder 240 Minuten. Jeder Weckruf landet im selben Codex-Chat, sodass er dort weitermacht, wo er aufgehört hat. Die eigenen Zeitplanoptionen von Codex vergleicht [proaktives Codex](/proactive-codex).",
        },
        {
          title: "Weise Issues zu und sprich vom Handy aus mit ihm",
          text: "Öffne crewmark.ai im Browser deines Handys, um Issues anzulegen und zuzuweisen, oder schreib dem Mitarbeiter in seinem Arbeitsprotokoll (Work log); die Nachricht landet im Codex-Chat auf dem Server, und er antwortet dort. Eine Zuweisung weckt ihn sofort, und braucht er ein Review oder eine Entscheidung, setzt er das Issue auf Needs action und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex auf einem Linux-VPS als SSH-Host einrichten" },
  mid: {
    title: "Soll der Server weiterarbeiten, auch wenn du ihm keinen Prompt schickst?",
    text: "Crewmark weckt Codex während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Kann ich Codex auf einem VPS betreiben?",
        a: "Ja. Die Codex CLI läuft unter Linux: Installiere sie mit `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, melde dich mit `codex login --device-auth` an und nutze sie dann entweder per SSH in tmux oder füg den Server als SSH-Host in der ChatGPT-Desktop-App auf einem Mac oder Windows-PC hinzu, den du vom Handy aus steuern kannst.",
      },
      {
        q: "Wie melde ich mich ohne Browser bei Codex auf einem VPS an?",
        a: "Führ `codex login --device-auth` aus oder wähl Sign in with Device Code und folge der Anleitung. Die Funktion ist in der Beta und muss in deinen ChatGPT-Sicherheitseinstellungen oder von einem Workspace-Admin eingeschaltet werden. Andernfalls leite den Callback mit `ssh -L 1455:localhost:1455 user@server` weiter und führ dort `codex login` aus, oder kopier `~/.codex/auth.json` von einem Computer, auf dem du angemeldet bist.",
      },
      {
        q: "Wie verbinde ich Codex mit einem VPS?",
        a: "Füg den Server in `~/.ssh/config` auf dem Mac oder PC hinzu, auf dem die ChatGPT-Desktop-App läuft, und prüf, dass `ssh <alias>` funktioniert. Stell sicher, dass `codex` installiert, angemeldet und im PATH der Login-Shell des Remote-Nutzers ist, füg dann den Host unter Settings > Connections hinzu und wähl einen Remote-Projektordner.",
      },
      {
        q: "Kann ich Codex auf einem VPS vom Handy aus steuern?",
        a: "Ja, über einen Mac oder Windows-PC. Dein Handy steuert die ChatGPT-Desktop-App auf diesem Computer, und die App führt den Chat per SSH auf dem Server aus, der Computer muss also wach und online bleiben. OpenAI dokumentiert nicht, wie man ein Handy direkt mit einem Linux-Server oder nur mit der CLI koppelt.",
      },
      {
        q: "Läuft die ChatGPT-Desktop-App auf einem Linux-Server?",
        a: "Es gibt eine ChatGPT-Desktop-App für Linux, als Preview, für Desktop-Versionen von Ubuntu, Debian, Fedora und Arch Linux, bisher ohne Computer Use. OpenAIs Doku behandelt keinen Server ohne Desktop-Umgebung, und Linux wird nicht als Remote-Control-Host geführt. Auf einem VPS nutzt du die Codex CLI.",
      },
      {
        q: "Ist es sicher, Codex auf einem VPS zu betreiben?",
        a: "Behandle ihn wie jeden SSH-Server: Anmeldung per Schlüssel, ein Konto mit minimalen Rechten und keine öffentlich lauschenden Dienste ohne Authentifizierung. Mach den App-Server von Codex nicht in einem öffentlichen Netzwerk zugänglich, nutz ein VPN oder ein Mesh-Netzwerk, um den Server von außen zu erreichen, halt `~/.codex/auth.json` privat und installier bubblewrap, damit die Sandbox funktioniert.",
      },
    ],
  },
  cta: {
    title: "Lass deinen Server arbeiten.",
    text: "Crewmark macht aus Sessions in Codex und Claude Code KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand von OpenAIs Doku (Remote Connections, Codex CLI, Authentifizierung, Sandboxing, die Linux-App, Codex cloud, Abos), der Codex-README und der Installationsanleitung auf GitHub sowie der Doku von Tailscale am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI oder einem anderen auf dieser Seite genannten Unternehmen verbunden oder von ihnen unterstützt. Codex und ChatGPT sind Marken von OpenAI.",
};
