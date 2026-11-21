import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex unter Linux: Desktop-App, CLI-Installation und Sandbox",
    description:
      "Codex unter Linux installieren: ChatGPT-Desktop-App (Preview) für Ubuntu, Debian, Fedora und Arch oder CLI mit bubblewrap. Plus Headless-Login und SSH-Hosts.",
  },
  breadcrumb: "Codex unter Linux",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex unter Linux: die Desktop-App als Preview, die CLI und was Linux noch nicht kann",
    lead: "Es gibt zwei Wege, Codex auf einer Linux-Maschine zu betreiben. Die ChatGPT-Desktop-App, die Codex enthält, ist seit August 2026 als Preview für Linux verfügbar, für Ubuntu, Debian, Fedora und Arch auf x64 und ARM64. Die Codex CLI installierst du mit einem Befehl, und sie nutzt `bubblewrap` für ihre Sandbox. Diese Anleitung zeigt beide Installationen, die Anmeldung auf einem Headless-Server, was Linux noch fehlt (Computer Use und die Steuerung eines Linux-Hosts vom Handy), wie eine Linux-Maschine trotzdem als SSH-Host für die Desktop-App auf einem Mac oder PC dient, und Codex cloud.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Welches Codex du unter Linux nutzt",
      points: [
        "Die ChatGPT-Desktop-App, als Preview: ein Fenster mit Codex neben Chat und Work. Das ist die Codex-GUI unter Linux. OpenAIs Anleitung behandelt Desktop-Linux; auf einem Server ohne Desktop nutzt du die CLI.",
        "Die Codex CLI: läuft im Terminal, auf einem Desktop oder auf einem Headless-Server, den du per SSH erreichst.",
        "Die IDE-Erweiterung für VS Code, Cursor oder Windsurf, wenn du lieber in deinem Editor bleibst.",
        "Codex cloud: Aufgaben laufen auf OpenAIs Servern, nichts von dir muss also an bleiben. Siehe [Codex cloud](#cloud) weiter unten.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So installierst du die Codex-Desktop-App unter Linux",
      steps: [
        {
          title: "Prüf Distribution und Architektur",
          text: "Die Preview unterstützt Ubuntu 24.04 LTS und 26.04 LTS, Debian 13, Fedora 43 und 44 sowie ein aktuelles, vollständig aktualisiertes Arch Linux. Andere Distributionen funktionieren vielleicht, werden aber nicht offiziell unterstützt. Pakete gibt es für x64 und ARM64: Führ `uname -m` aus; `x86_64` bedeutet x64, `aarch64` oder `arm64` bedeutet ARM64.",
          code: "uname -m",
        },
        {
          title: "Lade das Paket herunter und installiere es",
          text: `Hol das Paket für deine Distribution und Architektur (siehe [OpenAIs Anleitung zur Linux-App](${linuxAppDocs})) und installiere es aus dem Ordner, in dem du es gespeichert hast. Unter Arch führt OpenAIs Installationsskript außerdem ein vollständiges System-Upgrade durch.`,
          code: appInstall,
        },
        {
          title: "Öffne die App und wähl Codex",
          text: "Öffne ChatGPT aus deinem Anwendungsmenü oder führ `chatgpt` in einem Terminal aus, melde dich an und wähl Codex. Unter Wayland nutzt die App XWayland, wenn es verfügbar ist; natives Wayland ist experimentell, und du kannst es mit `chatgpt --ozone-platform=wayland` erzwingen.",
        },
        {
          title: "Halt sie aktuell",
          text: "Updates kommen über deinen Paketmanager.",
          code: appUpdate,
        },
        {
          title: "Lass lange Chats weiterlaufen",
          text: "Schalte Settings > General > Prevent sleep while running ein, das es unter macOS und Linux gibt, damit lokale Chats weiterlaufen, während du nicht am Computer bist.",
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, ChatGPT-App für Linux", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "So installierst du die Codex CLI unter Linux",
      steps: [
        {
          title: "Führ das Installationsskript aus",
          text: "Derselbe Befehl installiert und aktualisiert Codex; `codex update` spielt ebenfalls ein Update ein, wenn die installierte Version das unterstützt. Mit installiertem Node.js funktioniert auch `npm install -g @openai/codex`. OpenAI veröffentlicht Linux-Builds für x86_64 und aarch64.",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "Installiere bubblewrap für die Sandbox",
          text: `Die Linux-Sandbox von Codex braucht \`bubblewrap\`. Ohne \`bwrap\` im PATH greift Codex auf einen mitgelieferten Helfer zurück, der unprivilegierte User Namespaces braucht, und gibt beim Start eine Warnung aus. Unter Ubuntu 25.04 funktioniert das paketierte bubblewrap direkt; unter Ubuntu 24.04 kann die Warnung bleiben, bis du das AppArmor-Profil \`bwrap-userns-restrict\` lädst (siehe [OpenAIs Doku zum Sandboxing](${sandboxingDocs})).`,
          code: bubblewrap,
        },
        {
          title: "Melde dich an",
          text: "Führ `codex` aus und wähl Sign in with ChatGPT, um dein Abo zu nutzen, oder melde dich mit einem API-Key an, der zu den regulären API-Preisen abgerechnet wird. Codex cloud braucht die Anmeldung mit ChatGPT. `codex login status` endet mit 0, sobald du angemeldet bist.",
        },
        {
          title: "Melde dich auf einem Headless-Server per Device Code an",
          text: "Ohne Browser auf der Maschine wählst du Sign in with Device Code oder führst `codex login --device-auth` aus, das in der Beta ist. Die Anmeldung per Device Code muss zuerst eingeschaltet werden, in deinen ChatGPT-Sicherheitseinstellungen oder von einem Workspace-Admin. Zwei andere Wege: Kopier `~/.codex/auth.json` von einem Computer, auf dem die Anmeldung im Browser funktioniert hat, und behandle diese Datei wie ein Passwort; oder leite den Anmelde-Callback per SSH weiter und führ `codex login` auf dem Server aus.",
          code: headless,
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, Codex CLI", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Noch kein Computer Use unter Linux",
      text: [
        "Mit Computer Use bedient Codex Desktop-Apps, indem es den Mauszeiger bewegt und tippt. In der Linux-Preview der Desktop-App fehlt es; laut OpenAIs Linux-Anleitung wird ein künftiges Release es ergänzen. Vorerst läuft es in der Desktop-App unter macOS und Windows.",
      ],
      points: [
        "Arbeit, die im Terminal passiert, läuft unter Linux trotzdem: Codex führt dort Befehle aus und bearbeitet Dateien, innerhalb seiner `bubblewrap`-Sandbox.",
        "Für Aufgaben, die Desktop-Apps brauchen, nimm einen Mac oder einen Windows-PC. Unter Windows übernimmt Computer Use den Bildschirm, während es arbeitet: siehe [Codex unter Windows](/blog/codex-windows). Für einen Mac, der immer läuft, siehe [Codex auf einem Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Eine Linux-Maschine aus der Desktop-App auf einem Mac oder PC nutzen",
      text: [
        "OpenAIs Doku zu Remote Connections führt nur Mac- und Windows-Computer als Hosts, die die ChatGPT-App auf dem Handy steuern kann, die Steuerung der Linux-Desktop-App vom Handy ist also nicht dokumentiert. Eine Linux-Maschine kann trotzdem ein SSH-Host sein: Die Desktop-App auf einem Mac oder Windows-PC öffnet Projekte darauf, und Codex führt dort Befehle aus, liest Dateien und schreibt Änderungen. Vom Handy aus steuerst du sie dann über diesen Mac oder PC.",
      ],
      steps: [
        {
          title: "Füg die Linux-Maschine zu deiner SSH-Config hinzu",
          text: "Füg auf dem Mac oder PC, auf dem die Desktop-App läuft, einen Host in `~/.ssh/config` hinzu. Codex liest konkrete Host-Aliasse aus dieser Datei und ignoriert Einträge, die nur aus Mustern bestehen. Prüf, dass `ssh devbox` von diesem Computer aus funktioniert. Behandle es wie jeden SSH-Zugang: vertrauenswürdige Schlüssel, ein Konto mit minimalen Rechten und nichts ohne Authentifizierung, das in einem öffentlichen Netzwerk lauscht; um eine Maschine außerhalb deines Netzwerks zu erreichen, nutz ein VPN oder ein Mesh-Netzwerk-Tool.",
          code: sshConfig,
        },
        {
          title: "Installiere Codex auf der Linux-Maschine und melde dich an",
          text: "Die App startet Codex auf der entfernten Maschine per SSH, in der Login-Shell des Remote-Nutzers, `codex` muss dort also im PATH liegen. Installiere es mit dem Skript oben und melde dich an, auf einem Headless-Server mit `codex login --device-auth`.",
        },
        {
          title: "Füg den Host in der Desktop-App hinzu",
          text: "Geh zu Settings > Connections, füg den SSH-Host hinzu oder aktivier ihn und wähl einen Projektordner darauf. Ist dasselbe Git-Repository auf beiden Seiten als Projekt gespeichert, kannst du einen Chat über die Fußzeile des Chats zwischen deinem Computer und dem Linux-Host übergeben.",
        },
        {
          title: "Steuere sie vom Handy aus",
          text: "Kopple dein Handy mit dem Mac oder PC, wie in [Codex Remote Control](/blog/codex-remote-control) beschrieben. Das Handy spricht mit diesem Computer, der an bleiben muss, und Codex erledigt die Arbeit auf der Linux-Maschine. Für einen gemieteten Server siehe [Codex auf einem VPS](/blog/codex-vps).",
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, Remote Connections", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Oder lass Codex cloud die Aufgabe ausführen",
      text: [
        `Willst du gar keine Maschine eingeschaltet lassen, führt [Codex cloud](${cloudDocs}) Aufgaben auf OpenAIs Servern aus. Jede Aufgabe bekommt ihren eigenen Workspace und läuft weiter, während dein Computer schläft.`,
      ],
      points: [
        "Starte eine Aufgabe im Web oder in der Desktop-App mit Work in > Cloud oder unter Codex in der mobilen ChatGPT-App. Im Linux-Terminal öffnet `codex cloud` eine Auswahl der Cloud-Chats, `codex cloud exec` reicht eine Aufgabe ein und `codex cloud list` listet die letzten auf.",
        "Es braucht eine Anmeldung mit ChatGPT und ist mit einem API-Key nicht verfügbar. OpenAIs Abo-Tabelle führt es für Plus, Pro, Business und Enterprise.",
        "Ein Cloud-Task sieht nur seine Cloud-Umgebung. Lokale Dateien, laufende Prozesse, Browser-Anmeldungen und der VPN-Zugang deiner Maschine werden nicht übernommen, und ein Chat lässt sich nicht von deinem Computer an ihn übergeben.",
        "Für ein wiederverwendbares Setup legst du unter Work in > Cloud > Select environment > Create environment eine Umgebung an, mit vollem Zugriff auf das öffentliche Internet oder einer Allowlist.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Codex auf deiner Linux-Maschine einen festen Job",
      text: [
        "Die Desktop-App, die CLI und SSH warten alle darauf, dass du die nächste Aufgabe startest. Crewmark macht aus einem Codex-Chat auf deiner Linux-Maschine einen KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und einem Heartbeat: Während seiner Arbeitszeit weckt ihn die `crewmark`-CLI, die unter Linux genauso läuft wie unter macOS und Windows, damit er das nächste Issue von einem gemeinsamen Board übernimmt. Die Maschine muss an bleiben, was ein Linux-Server ohnehin tut.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa [Softwareentwickler](/ai-employees/software-engineer), und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde einen Codex-Chat auf der Maschine",
          text: "Verknüpf über die `crewmark`-CLI einen Codex-Chat auf dem Linux-Desktop oder -Server mit dem Mitarbeiter. Diese Unterhaltung wird zum Mitarbeiter. Claude Code funktioniert auch.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Nur werktags oder jeden Tag, in deiner Zeitzone, mit Zeiten, die über Mitternacht gehen können. Währenddessen weckt die CLI den Mitarbeiter alle 15, 30, 60, 120 oder 240 Minuten. Siehe, [wie du Codex proaktiv machst](/proactive-codex).",
        },
        {
          title: "Weise Issues aus jedem Browser zu",
          text: "Leg Issues auf dem Board unter crewmark.ai an und weise sie zu; eine Zuweisung weckt den Mitarbeiter. Braucht er ein Review oder eine Entscheidung, setzt er das Issue auf Needs action und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Die ChatGPT-Desktop-App unter Linux installieren und Codex nutzen" },
  mid: {
    title: "Soll Codex unter Linux weiterarbeiten, auch wenn du ihm keinen Prompt schickst?",
    text: "Crewmark weckt dein Codex während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Gibt es eine Codex-GUI für Linux?",
        a: "Ja. Die ChatGPT-Desktop-App, die Codex enthält, ist als Preview für Linux verfügbar, für Ubuntu 24.04 und 26.04, Debian 13, Fedora 43 und 44 sowie Arch Linux, auf x64 und ARM64. Bleibst du lieber im Editor, funktioniert die Codex-IDE-Erweiterung in VS Code, Cursor und Windsurf.",
      },
      {
        q: "Wie lade ich die Codex-Desktop-App für Linux herunter?",
        a: "Lade das .deb- (Ubuntu, Debian) oder .rpm-Paket (Fedora) für deine Architektur herunter, wie es OpenAIs Anleitung zur Linux-App beschreibt, und installiere es mit `sudo apt install ./chatgpt_amd64.deb` oder `sudo dnf install ./chatgpt.x86_64.rpm`; unter Arch führst du OpenAIs Skript `install-arch.sh` aus. Öffne dann ChatGPT oder führ `chatgpt` aus und wähl Codex.",
      },
      {
        q: "Wie installiere ich die Codex CLI unter Linux?",
        a: "Führ `curl -fsSL https://chatgpt.com/codex/install.sh | sh` oder `npm install -g @openai/codex` aus. Installiere `bubblewrap` für die Sandbox (`sudo apt install bubblewrap` oder `sudo dnf install bubblewrap`), führ dann `codex` aus und melde dich an.",
      },
      {
        q: "Funktioniert Codex Computer Use unter Linux?",
        a: "Noch nicht. In der Linux-Preview der Desktop-App fehlt Computer Use, und laut OpenAI wird ein künftiges Release es ergänzen. Derzeit ist es in der Desktop-App unter macOS und Windows verfügbar.",
      },
      {
        q: "Wie melde ich mich auf einem Headless-Linux-Server bei Codex an?",
        a: "Schalte die Anmeldung per Device Code in deinen ChatGPT-Sicherheitseinstellungen ein (oder bitte deinen Workspace-Admin darum) und führ dann `codex login --device-auth` aus, das in der Beta ist. Du kannst auch `~/.codex/auth.json` von einem Computer kopieren, auf dem du angemeldet bist, oder dich mit `ssh -L 1455:localhost:1455 user@remote` verbinden und `codex login` auf dem Server ausführen.",
      },
      {
        q: "Kann ich Codex unter Linux vom Handy aus steuern?",
        a: "Nicht direkt: OpenAIs Doku führt nur Mac- und Windows-Computer als Remote-Control-Hosts. Füg die Linux-Maschine in der ChatGPT-Desktop-App auf einem Mac oder Windows-PC als SSH-Host hinzu und steuere dann diesen Computer aus der ChatGPT-App auf deinem Handy; Codex läuft auf der Linux-Maschine.",
      },
    ],
  },
  cta: {
    title: "Lass Codex auf deiner Linux-Maschine arbeiten.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand von OpenAIs Codex-Doku (ChatGPT-App für Linux, CLI, Anmeldung, Sandboxing, Computer Use, Remote Connections und Codex cloud) am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI oder einem anderen auf dieser Seite genannten Unternehmen verbunden oder von ihnen unterstützt. Codex und ChatGPT sind Marken von OpenAI.",
};
