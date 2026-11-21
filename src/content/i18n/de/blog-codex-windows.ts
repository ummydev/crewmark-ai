import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex unter Windows: App, CLI-Installation, Sandbox und WSL2",
    description:
      "Codex unter Windows: ChatGPT-App laden oder CLI installieren, in PowerShell mit Windows-Sandbox oder in WSL2 nutzen und fehlgeschlagenes Sandbox-Setup beheben.",
  },
  breadcrumb: "Codex unter Windows",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex unter Windows: App oder CLI installieren, dann Sandbox oder WSL2 wählen",
    lead: "Codex läuft nativ unter Windows. Seit dem 9. Juli 2026 ist die Codex-App Teil der ChatGPT-Desktop-App: Du installierst ChatGPT und wechselst darin zu Codex; für das Terminal installierst du die Codex CLI mit einem einzigen PowerShell-Befehl. Standardmäßig läuft der Agent in PowerShell unter der Windows-Sandbox, und du kannst ihn stattdessen nach WSL2 verlegen. Diese Anleitung zeigt Download und Installation, die drei Sandbox-Typen und welche Windows-Version jeder braucht, die dokumentierten Lösungen, wenn das Sandbox-Setup fehlschlägt, Computer Use und wie du einen Windows-PC vom Handy aus steuerst.",
    cta: "Loslegen",
    secondary: "Zu den Schritten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Welches Codex du unter Windows installierst",
      points: [
        "Die ChatGPT-Desktop-App, wenn du ein Fenster willst. Codex hat dort eine eigene Coding-Ansicht neben Chat und Work, mit Worktrees, geplanten Aufgaben, Git, einem eingebauten Browser, Dateivorschauen, Plugins und Skills. Die App gibt es in jedem ChatGPT-Abo, auch in Free.",
        "Die Codex CLI, wenn du im Terminal arbeitest. Sie installiert sich nativ per PowerShell-Skript oder mit npm.",
        "Die IDE-Erweiterung, wenn du in einem Editor arbeitest. OpenAI führt sie neben der App und der CLI als Weg, Codex nativ unter Windows zu nutzen.",
        "Windows 11 wird empfohlen. Ein aktuelles, vollständig aktualisiertes Windows 10 wird ohne Garantie unterstützt und braucht Version 1809 oder neuer, wegen ConPTY; ältere Versionen von Windows 10 werden nicht empfohlen. `winget` sollte verfügbar sein.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So lädst du Codex unter Windows herunter und installierst es",
      steps: [
        {
          title: "Lade die ChatGPT-Desktop-App herunter",
          text: "Hol sie über den Microsoft-Store-Link auf [OpenAIs Seite zur Windows-App](https://learn.chatgpt.com/docs/windows/windows-app) oder installiere sie mit winget aus PowerShell. Öffne ChatGPT, melde dich an und wähl Codex.",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "Oder installiere die Codex CLI",
          text: "Öffne ein neues PowerShell-Fenster und führ OpenAIs Installer aus; führst du ihn erneut aus, aktualisiert er Codex. Mit installiertem Node.js kannst du stattdessen npm nutzen. Aus der CLI heraus öffnet `codex app` die Desktop-App und installiert sie bei Bedarf, und `/app` verschiebt die aktuelle Session in die App.",
          code: cliInstall,
        },
        {
          title: "Melde dich an",
          text: "Wähl beim ersten Start Sign in with ChatGPT, um dein Abo zu nutzen, oder melde dich mit einem API-Key an, der zu den regulären API-Preisen abgerechnet wird. Codex cloud braucht die Anmeldung mit ChatGPT. `codex login status` endet mit 0, sobald du angemeldet bist.",
        },
        {
          title: "Installiere die Tools, die Codex aufruft",
          text: "Codex nutzt, was auf dem PC installiert ist. OpenAI schlägt Git, Node.js, Python, das .NET SDK und die GitHub CLI vor, alle über winget, und danach die Anmeldung bei GitHub.",
          code: tools,
        },
        {
          title: "Wähle, wo der Agent läuft",
          text: "Standardmäßig läuft der Agent nativ in PowerShell unter der Windows-Sandbox. Um ihn stattdessen in WSL2 laufen zu lassen, öffne Settings, stell den Agenten von Windows native auf WSL um und starte die App neu. In beiden Modi wählst du Ask for approval unter dem Eingabefeld, um den Schutz der Sandbox zu bekommen. Für Befehle, die Administratorrechte brauchen, startest du die App mit Run as administrator; der Agent erbt diese Rechte. Das integrierte Terminal kann PowerShell, Command Prompt, Git Bash oder WSL sein.",
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, Windows-App", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "Natives PowerShell oder WSL2?",
      text: [
        "OpenAI rät, standardmäßig die native Sandbox zu nutzen und WSL2 zu wählen, wenn du Linux-native Tools brauchst, schon in WSL2 arbeitest oder die nativen Optionen nicht zu deinem Setup passen. WSL1 wird nicht mehr unterstützt: Es funktionierte bis Codex 0.114, und ab 0.115 nutzt die Linux-Sandbox `bubblewrap`, womit die Unterstützung für WSL1 endete.",
      ],
      headers: ["", "Nativ (PowerShell)", "WSL2"],
      rows: [
        ["Sandbox", "Die Windows-Sandbox: MXC, elevated oder unelevated", "Die Linux-Sandbox, die `bubblewrap` braucht"],
        ["CLI installieren", "PowerShell-Installer oder npm", "`wsl --install` aus einer PowerShell mit Administratorrechten, dann das Linux-Installationsskript in WSL"],
        ["In der Desktop-App", "Der Standard", "Settings: den Agenten auf WSL umstellen, dann die App neu starten"],
        ["Wo Projekte liegen sollten", "Auf dem Windows-Laufwerk; WSL erreicht sie unter `/mnt/<drive>/...`", "Im Linux-Home, etwa `~/code`, nicht unter `/mnt/c`, wegen der Geschwindigkeit"],
        ["Codex-Home", "`%USERPROFILE%\\.codex`", "Das Linux-Home, sofern du `CODEX_HOME` nicht auf den Windows-Ordner zeigen lässt"],
        ["Wann du es wählst", "Standardmäßig", "Für Linux-native Tools oder einen Workflow, der schon in WSL2 läuft"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "So betreibst du Codex in WSL2",
      steps: [
        {
          title: "Installiere WSL2 und darin Codex",
          text: "Führ in einer PowerShell mit Administratorrechten `wsl --install` aus, dann `wsl`, um die Linux-Shell zu öffnen. Installiere darin `bubblewrap` für die Sandbox (`sudo apt install bubblewrap` oder `sudo dnf install bubblewrap`), führ das Linux-Installationsskript aus und starte `codex`.",
          code: wslInstall,
        },
        {
          title: "Leg Repositorys im Linux-Home ab",
          text: "Klone in einen Ordner wie `~/code` statt unter `/mnt/c`, das langsamer ist. Findet VS Code in WSL Codex nicht, prüf mit `which codex`, wo es liegt.",
        },
        {
          title: "Teile Einstellungen mit der Windows-App",
          text: "Die Windows-App hat ihr Codex-Home in `%USERPROFILE%\\.codex`, eine CLI in WSL nutzt dagegen das Linux-Home. Um ein gemeinsames zu nutzen, setz `CODEX_HOME` in WSL auf den Windows-Ordner.",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "Öffne WSL-Projekte in der Desktop-App",
          text: "Wähl Add new project (oder drück Ctrl+O) und tipp `\\\\wsl$\\`. Bleibt der Agent nativ, ist es zuverlässiger, Projekte auf dem Windows-Laufwerk zu halten und sie aus WSL über `/mnt/<drive>/...` zu erreichen.",
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, Windows und WSL", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Die Codex-Windows-Sandbox: MXC, elevated und unelevated",
      text: [
        "Mit der Windows-Sandbox läuft Codex nativ in PowerShell, ohne WSL oder eine virtuelle Maschine, und die Sandbox begrenzt dabei, worauf seine Befehle und deren Kindprozesse auf der Festplatte und im Netzwerk zugreifen können. Es gibt sie in drei Implementierungen. Die Desktop-App wählt MXC für Privatkonten automatisch auf Geräten, die es unterstützen.",
      ],
      headers: ["Sandbox", "Wie sie funktioniert", "Einrichtung", "Windows-Version"],
      rows: [
        [
          "`mxc` (empfohlen)",
          "Microsoft Execution Containers",
          "Keine vom Admin genehmigte Einrichtung, keine zusätzlichen Windows-Konten, keine Firewall-Regeln",
          "Windows 11 24H2 (Build 26100.9278) oder 25H2 (Build 26200.9278); Microsoft verteilt es noch an Windows 11",
        ],
        [
          "`elevated` (Legacy, der bevorzugte Fallback)",
          "Eigene Sandbox-Nutzer mit geringeren Rechten und Firewall-Regeln; Befehle in der Sandbox laufen ohne Administratorrechte",
          "Braucht einen Admin, der die Einrichtung genehmigt",
          "Keine eigene Anforderung in der Doku; es gilt die allgemeine Empfehlung (Windows 11 empfohlen, Windows 10 1809 oder neuer ohne Garantie)",
        ],
        [
          "`unelevated` (Legacy-Fallback)",
          "Schwächere Netzwerkisolierung und keine gesperrten Lesepfade",
          "Die Doku schlägt sie als Notlösung vor, wenn die Einrichtung der Legacy-Sandbox fehlschlägt",
          "Keine eigene Anforderung in der Doku; dieselbe allgemeine Empfehlung",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Die Codex-Windows-Sandbox einrichten",
      steps: [
        {
          title: "Prüf, ob MXC auf deinem PC funktioniert",
          text: "Führ mit Codex CLI 0.162.0 oder neuer diesen Test aus. Er sollte `MXC_OK` ausgeben und mit Code 0 enden.",
          code: mxcTest,
        },
        {
          title: "Bevorzuge MXC in der CLI",
          text: "Die Desktop-App bevorzugt MXC für Privatkonten bereits. Für die CLI oder in einem Unternehmens-Setup schaltest du es in der `config.toml` in deinem Codex-Home ein.",
          code: preferMxc,
        },
        {
          title: "Oder wähle eine Legacy-Sandbox",
          text: "Wo MXC nicht verfügbar ist, setz `elevated`, oder `unelevated` als letzten Fallback. Die elevated-Sandbox braucht einen Admin, der ihre Einrichtung genehmigt. In der CLI führt der Befehl `/setup-default-sandbox` diese Einrichtung aus; er erscheint nur unter Windows, wenn Codex auf der heruntergestuften Restricted-Token-Sandbox läuft.",
          code: legacy,
        },
        {
          title: "Oder lass die IT sie vorab einrichten",
          text: "Ein Administrator kann die elevated-Sandbox für einen anderen Nutzer bereitstellen. Um die Legacy-Sandbox später zu entfernen, führ `codex sandbox uninstall` als Administrator aus.",
          code: provision,
        },
      ],
      source: { label: "Quelle: OpenAIs Codex-Doku, Windows-Sandbox", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex-Windows-Sandbox-Setup fehlgeschlagen? Die dokumentierten Lösungen",
      text: [
        `OpenAIs [Seite zur Windows-Sandbox](${sandboxDocs}) hat eine Liste zur Fehlerbehebung. Das deckt sie ab, unter den Überschriften der Doku.`,
      ],
      points: [
        "„My legacy sandbox setup failed“: Die üblichen Ursachen sind eine abgelehnte UAC- oder Admin-Abfrage, eine Richtlinie, die das Anlegen lokaler Nutzer und Gruppen, Änderungen an der Firewall oder Anmelderechte für den Sandbox-Nutzer blockiert, oder eine andere Richtlinie. Versuch es erneut und bestätige die Abfrage, frag die IT oder nutz in der Zwischenzeit die `unelevated`-Sandbox.",
        "„I see Windows error 1385“: Windows verweigert dem Sandbox-Nutzer den Anmeldetyp, den er braucht. Anmelderechte für den Sandbox-Nutzer gehören zu den Dingen, die eine Richtlinie blockieren kann, frag also auf einem verwalteten PC die IT. MXC legt keine zusätzlichen Windows-Konten an und hängt deshalb unter Windows 11 24H2 oder 25H2 nicht von einem Sandbox-Nutzer ab.",
        "„Codex switched me to the unelevated sandbox“, „Codex warns that some folders are writable by Everyone“, „Sandboxed commands cannot reach the network“ und „Sandboxing worked before and then stopped“ haben auf dieser Seite jeweils einen eigenen Eintrag.",
        "Für die Diagnose lies `CODEX_HOME/.sandbox/sandbox.log`. Schick niemandem den Ordner `CODEX_HOME/.sandbox-secrets/`.",
        "Du suchst nach „setup didn't finish“? OpenAIs Doku hat keinen Eintrag mit diesem Wortlaut. Der nächstliegende dokumentierte Fall ist „My legacy sandbox setup failed“.",
        "Wenn PowerShell npm nicht ausführt und `npm.ps1 cannot be loaded because running scripts is disabled on this system.` meldet, ist die übliche Lösung `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`.",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Computer Use übernimmt unter Windows den Bildschirm",
      text: [
        "Mit Computer Use bedient Codex Desktop-Apps, indem es den Mauszeiger bewegt und tippt. In der Desktop-App gibt es das unter macOS und Windows, mit ChatGPT Work und Codex, in unterstützten Regionen. Zum Einschalten öffnest du Settings > Computer use, suchst unter Control nach Any App und wählst Install oder legst den Schalter um.",
      ],
      points: [
        "Es läuft auf dem aktiven Desktop und kann nicht im Hintergrund arbeiten. Während eine Aufgabe läuft, bewegt es den Mauszeiger, tippt und holt Fenster in den Vordergrund, du kannst den PC also nicht gleichzeitig nutzen.",
        "Damit es arbeiten kann, während du weg bist, lass den PC entsperrt und online und schau vom Handy aus mit [Remote Control](/blog/codex-remote-control) rein, oder führ die Desktop-App in einer virtuellen Windows-Maschine aus, damit Computer Use die VM übernimmt statt deines Bildschirms.",
        "Locked Use, mit dem eine Aufgabe weiterläuft, nachdem sich der Computer gesperrt hat, gibt es nur unter macOS.",
        'Um App-Freigaben zu speichern, führ die Apps in `$CODEX_HOME/config.toml` unter `[computer_use.windows]` auf, zum Beispiel `always_allowed_app_ids = ["mspaint.exe"]`.',
        "Auf allen Systemen kann Computer Use weder Terminal-Apps noch ChatGPT selbst automatisieren, sich nicht als Administrator anmelden und keine Sicherheits- und Datenschutzabfragen bestätigen.",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "Codex auf deinem Windows-PC vom Handy aus steuern",
      text: [
        "Ein Windows-PC kann ein Remote-Control-Host sein, genau wie ein Mac. Die ChatGPT-App auf deinem Handy schickt Prompts und Freigaben; der PC führt die Befehle mit seinen eigenen Projekten, Dateien, Zugangsdaten und Tools aus. Die vollständige Einrichtung und Lösungen findest du unter [Codex Remote Control](/blog/codex-remote-control).",
      ],
      points: [
        "Öffne auf dem PC die ChatGPT-Desktop-App, geh zu Settings > Connections > Control this Mac or PC und wähl Set up oder Add. Scann den QR-Code mit deinem Handy (iOS oder Android).",
        "Der PC erscheint dann unter Codex in der ChatGPT-App. Ältere App-Versionen nennen es Remote.",
        "Halt den PC wach, online und angemeldet, mit laufender Desktop-App; schläft er oder verliert er das Netzwerk, endet der Fernzugriff, bis er zurück ist. Für Aufgaben, die Computer Use nutzen, lass die Windows-Sitzung entsperrt.",
        "OpenAIs Abo-Tabelle führt Remote Control vom Handy für Plus, Pro, Business und Enterprise, nicht für die Anmeldung per API-Key. In einem ChatGPT-Workspace muss möglicherweise zuerst ein Admin den Remote-Control-Zugriff einschalten.",
        "Der PC kann außerdem Projekte auf einem Linux-Server als SSH-Host öffnen, dein Handy steuert Codex auf dem Server dann über den PC. Siehe [Codex auf einem VPS](/blog/codex-vps) und [Codex unter Linux](/blog/codex-linux). Für einen Mac, der immer läuft, siehe stattdessen [Codex auf einem Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Codex auf deinem PC einen festen Job",
      text: [
        "Remote Control und Computer Use warten weiterhin darauf, dass du jede Aufgabe startest. Crewmark macht aus einem Codex-Chat auf deinem Windows-PC einen KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und einem Heartbeat: Während seiner Arbeitszeit weckt ihn die `crewmark`-CLI, die unter Windows genauso läuft wie unter macOS und Linux, damit er das nächste Issue von einem gemeinsamen Board übernimmt. Dafür muss der PC an bleiben.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter ein",
          text: "Wähle eine Rolle aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa [Softwareentwickler](/ai-employees/software-engineer), und schreib seine Ziele und KPIs auf.",
        },
        {
          title: "Verbinde einen Codex-Chat auf dem PC",
          text: "Verknüpf über die `crewmark`-CLI einen Codex-Chat auf dem PC mit dem Mitarbeiter. Diese Unterhaltung wird zum Mitarbeiter. Claude Code funktioniert auch.",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Nur werktags oder jeden Tag, in deiner Zeitzone, mit Zeiten, die über Mitternacht gehen können. Währenddessen weckt die CLI den Mitarbeiter alle 15, 30, 60, 120 oder 240 Minuten. Siehe [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Weise Issues von überall zu",
          text: "Leg Issues auf dem Board unter crewmark.ai in jedem Browser an und weise sie zu; eine Zuweisung weckt den Mitarbeiter. Braucht er ein Review oder eine Entscheidung, setzt er das Issue auf Needs action und fragt dich dort. Jobs, die du ihm geben kannst, findest du unter [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex unter Windows herunterladen und installieren" },
  mid: {
    title: "Soll Codex auf deinem PC weiterarbeiten, auch wenn du ihm keinen Prompt schickst?",
    text: "Crewmark weckt dein Codex während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Wie lade ich die Codex-App unter Windows herunter?",
        a: "Codex ist Teil der ChatGPT-Desktop-App. Installiere sie über den Microsoft-Store-Link auf OpenAIs Seite zur Windows-App oder führ `winget install --id 9PLM9XGG6VKS -s msstore` in PowerShell aus, öffne dann ChatGPT und wähl Codex. Die App gibt es in jedem ChatGPT-Abo, auch in Free.",
      },
      {
        q: "Wie installiere ich die Codex CLI unter Windows?",
        a: 'Öffne ein neues PowerShell-Fenster und führ `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"` aus, oder `npm install -g @openai/codex`, wenn du Node.js hast. Führ dann `codex` aus und melde dich mit ChatGPT oder einem API-Key an. Führst du den Installer erneut aus, aktualisiert er Codex.',
      },
      {
        q: "Braucht Codex unter Windows WSL?",
        a: "Nein. Codex läuft nativ in PowerShell unter der Windows-Sandbox, in der Desktop-App, der CLI und der IDE-Erweiterung. WSL2 ist optional, für Linux-native Tools oder einen Workflow, der schon in WSL2 läuft. WSL1 wird ab Codex 0.115 nicht mehr unterstützt.",
      },
      {
        q: "Was ist die Codex-Windows-Sandbox?",
        a: "Sie begrenzt, worauf die Befehle von Codex auf der Festplatte und im Netzwerk zugreifen können, während sie nativ unter Windows laufen. MXC ist die empfohlene Implementierung und braucht Windows 11 24H2 oder 25H2; `elevated` und `unelevated` sind Legacy-Fallbacks. Die Desktop-App wählt MXC für Privatkonten auf unterstützten Geräten automatisch.",
      },
      {
        q: "Warum ist das Setup der Codex-Windows-Sandbox fehlgeschlagen?",
        a: "OpenAIs Doku enthält keine Meldung „setup didn't finish“. Für eine fehlgeschlagene Einrichtung der Legacy-Sandbox nennt sie eine abgelehnte UAC- oder Admin-Abfrage oder eine Richtlinie, die lokale Nutzer und Gruppen, Änderungen an der Firewall oder die Anmelderechte des Sandbox-Nutzers blockiert. Versuch es erneut und bestätige die Abfrage, frag die IT oder nutz in der Zwischenzeit `unelevated`. Windows-Fehler 1385 bedeutet, dass dem Sandbox-Nutzer der benötigte Anmeldetyp verweigert wurde.",
      },
      {
        q: "Kann ich Codex auf einem Windows-PC vom Handy aus steuern?",
        a: "Ja. Geh in der ChatGPT-Desktop-App auf dem PC zu Settings > Connections > Control this Mac or PC, scann den QR-Code mit der ChatGPT-App unter iOS oder Android und halt den PC wach, online und angemeldet. Für Aufgaben, die Computer Use nutzen, lass ihn entsperrt.",
      },
    ],
  },
  cta: {
    title: "Lass Codex auf deinem PC arbeiten.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Geprüft anhand von OpenAIs Codex-Doku (Windows-App, Windows-Sandbox, WSL, CLI, Anmeldung, Computer Use und Remote Connections) am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI, Microsoft oder einem anderen auf dieser Seite genannten Unternehmen verbunden oder von ihnen unterstützt. Codex und ChatGPT sind Marken von OpenAI; Windows ist eine Marke von Microsoft.",
};
