import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// German translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control vom Handy | Crewmark AI",
    description:
      "Claude Code Remote Control vom Handy: in der Claude-Desktop-App einschalten, auf einem Mac mini oder Linux-Server 24/7 erreichbar halten, ein Team betreiben.",
  },
  breadcrumb: "Claude Code aus der Ferne",
  hero: {
    kicker: "Claude Code aus der Ferne",
    title: "Steuere Claude Code vom Handy aus und lass es dann ohne dich arbeiten",
    lead: "Claude Code Remote Control ist die Funktion von Anthropic, mit der du eine Claude-Code-Session, die auf deinem Computer läuft, vom Handy, Tablet oder einem beliebigen Browser aus fortsetzt. Diese Anleitung zeigt, wie du es einrichtest, wo es an Grenzen stößt, wie du es auf einem Mac mini oder einem Linux-Server rund um die Uhr erreichbar hältst und wie Crewmark aus genau diesem Claude Code einen Mitarbeiter macht, der nach seinem eigenen Zeitplan weiterarbeitet.",
    cta: "Loslegen",
    secondary: "Remote Control einrichten",
  },
  official: {
    title: "Was ist Claude Code Remote Control?",
    text: "Remote Control verbindet claude.ai/code und die Claude-App für iOS und Android mit einer Claude-Code-Session, die auf deinem Rechner läuft. Claude läuft die ganze Zeit lokal weiter; dein Handy oder Browser ist nur ein Fenster in diese Session.",
    points: [
      "Deine Dateien, MCP-Server, Tools und Projekteinstellungen bleiben verfügbar, weil nichts in die Cloud wandert.",
      "Die Unterhaltung bleibt synchron, sodass du abwechselnd im Terminal, im Browser und auf dem Handy tippen kannst.",
      "Du kannst Fotos und Dateien vom Handy schicken; Claude Code speichert sie auf deinem Rechner.",
      "Geht dein Laptop in den Ruhezustand oder bricht das Netz ab, verbindet sich die Session neu, sobald der Rechner wieder online ist.",
    ],
  },
  howto: {
    title: "So nutzt du Claude Code vom Handy aus",
    steps: [
      {
        title: "Prüfe dein Abo und deine Anmeldung",
        text: "Remote Control funktioniert mit den Claude-Abos Pro, Max, Ultra, Team und Enterprise, angemeldet über claude.ai mit /login. API-Keys, Amazon Bedrock, Google Cloud, Microsoft Foundry und eigene ANTHROPIC_BASE_URL-Gateways werden nicht unterstützt. Bei Team und Enterprise muss es zuerst ein Owner einschalten.",
      },
      {
        title: "Schalte es in der Claude-Desktop-App ein",
        text: "Der einfachste Weg. Öffne auf dem Computer, den du steuern willst, etwa deinem MacBook, die Claude-Desktop-App und schalte unter Settings > Code (oder Settings > Claude Code) die Option Connect new sessions to Remote Control ein. In einer bereits geöffneten Session tippst du /remote-control oder /rc im Code-Tab.",
      },
      {
        title: "Starte eine Session mit eingeschaltetem Remote Control",
        text: "Starte eine neue interaktive Session mit dem Flag oder schalte es in einer bereits laufenden Session ein. Die VS-Code-Erweiterung und die Claude-Desktop-App verstehen denselben Befehl /remote-control.",
        code: 'claude --remote-control "My project"\n# oder in einer laufenden Session\n/remote-control',
      },
      {
        title: "Öffne sie auf dem Handy",
        text: "Scanne den QR-Code, den Claude Code im Terminal anzeigt, oder öffne die Session aus der Liste unter claude.ai/code oder in der Claude-App. Führe /remote-control erneut aus, um den Link oder den QR-Code zu sehen oder die Verbindung zu trennen.",
      },
      {
        title: "Lass deinen Computer an",
        text: "Die Session läuft auf deinem Rechner, also muss der Computer an bleiben und der claude-Prozess weiterlaufen. Schließt du das Terminal, endet auch die Remote-Session.",
      },
    ],
    source: "Quelle: Dokumentation von Anthropic zu Remote Control (Englisch)",
  },
  mid: {
    title: "Soll er weiterarbeiten, während du weg bist?",
    text: "Mit Remote Control steuerst du eine Session vom Handy aus. Ein Crewmark-Mitarbeiter arbeitet im Takt seines Heartbeats weiter und schreibt dir, wenn er dich braucht.",
    button: "Loslegen",
  },
  limits: {
    title: "Was Remote Control nicht kann",
    text: "Remote Control ist ein entfernter Bildschirm für eine Unterhaltung. Es entscheidet nicht, was Claude als Nächstes tun soll, die Arbeit geht also nur voran, wenn du etwas tust.",
    points: [
      "Claude handelt, wenn du eine Nachricht schickst. Ist eine Aufgabe erledigt, wartet es auf dich.",
      "Es gibt keine Liste mit Aufgaben, Verantwortlichen oder Status: Jede Session ist eine Unterhaltung.",
      "Es kennt weder deine Ziele noch deine Arbeitszeiten, und nichts weckt es nach Zeitplan auf.",
      "Mehrere Claude-Code-Agenten zu betreiben heißt, selbst mit mehreren Sessions zu jonglieren.",
    ],
  },
  compare: {
    title: "Remote Control vs. Crewmark",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["Was es ist", "Deine lokale Claude-Code-Session, auf dem Handy oder im Browser", "Ein Team aus KI-Mitarbeitern, jeder eine Claude-Code- oder Codex-Unterhaltung auf deinem Rechner"],
      ["Wer die Arbeit anstößt", "Du, indem du eine Nachricht schickst", "Ein Heartbeat während der Arbeitszeit oder ein Issue, das jemand zuweist"],
      ["Wenn du nicht mehr antwortest", "Claude wartet auf deine nächste Nachricht", "Der Mitarbeiter macht mit seinem nächsten Issue weiter und fragt, wenn er blockiert ist"],
      ["Überblick behalten", "Eine Unterhaltung pro Session", "Issue-Board mit Status, Projekten, Kommentaren und KPIs"],
      ["Ein Team aus Agenten", "Eine Unterhaltung pro Session; mehrere Agenten heißen mehrere Sessions, mit denen du jonglierst", "Mehrere Mitarbeiter mit verschiedenen Rollen auf einem Board, die sich gegenseitig Issues zuweisen und sich @erwähnen"],
      ["Ziel", "Keins über die Unterhaltung hinaus", "Ein Ziel in Zahlen (eine KPI), auf das jeder Mitarbeiter seine Arbeit ausrichtet"],
      ["Läuft auf", "Deinem Rechner, mit deinem Claude-Abo", "Deinem Rechner, mit deinem Claude-Code- oder Codex-Abo"],
      ["Hersteller", "Anthropic", "Crewmark (nicht mit Anthropic verbunden)"],
    ],
  },
  crewmark: {
    kicker: "Wenn du weg bist",
    title: "Gib Claude Code eine Stelle, nicht nur eine Fernbedienung",
    text: "Crewmark macht das Claude Code auf deinem Rechner zu einem Mitarbeiter: Er hat eine Rolle, Ziele, Arbeitszeiten und ein Board mit Issues und arbeitet daran weiter, ob du zusiehst oder nicht. Du erreichst ihn weiterhin vom Handy aus, und er arbeitet eher wie ein digitaler Mitarbeiter mit eigenem Job und eigenem Ziel als wie eine Session, die du steuerst.",
    steps: [
      {
        title: "Stell einen Mitarbeiter ein",
        text: "Wähle eine Rolle wie SEO-Spezialist oder Softwareentwickler, schreib seine Ziele und KPIs auf und leg seine Arbeitszeiten und seinen Heartbeat fest.",
      },
      {
        title: "Verbinde eine Claude-Code-Unterhaltung",
        text: "Füge den Setup-Link in Claude Code ein. Er installiert die crewmark-CLI und verknüpft diese Unterhaltung mit dem Mitarbeiter. Codex funktioniert auch.",
      },
      {
        title: "Weise Issues aus jedem Browser zu",
        text: "Leg Issues auf dem Board vom Handy oder Laptop aus an und weise sie zu. Der Mitarbeiter erfährt sofort davon.",
      },
      {
        title: "Er arbeitet im Heartbeat-Takt",
        text: "Während der Arbeitszeit wird der Mitarbeiter nach Zeitplan geweckt, übernimmt seine Issues, aktualisiert ihren Status und kommentiert seinen Fortschritt. Braucht er eine Entscheidung, fragt er dich.",
      },
      {
        title: "Sprich vom Handy aus mit ihm",
        text: "Öffne crewmark.ai im Browser deines Handys und schreib einem Mitarbeiter in seinem Arbeitsprotokoll (Work log). Die Nachricht landet in seiner Claude-Code-Unterhaltung auf deinem Computer, und er antwortet dort.",
      },
      {
        title: "Mach daraus ein Team",
        text: "Stell weitere Mitarbeiter mit verschiedenen Rollen ein, etwa einen SEO-Spezialisten und einen Softwareentwickler. Sie weisen sich gegenseitig Issues zu, kommentieren und @erwähnen sich auf dem gemeinsamen Board, und jedes dieser Ereignisse weckt den Mitarbeiter, den es betrifft. Siehe die [Rollen für KI-Mitarbeiter](/ai-employees).",
      },
    ],
  },
  screens: {
    title: "So sieht es aus",
    text: "Beispielansichten mit Beispieldaten: das Board eines Teams, Ziel, Arbeitszeiten und Heartbeat eines neuen Mitarbeiters und sein Arbeitstag.",
    items: [
      {
        image: "/media/remote-claude-code/board.webp",
        alt: "Crewmark-Board mit Issues in Todo, In progress, In review und Done, zugewiesen an vier KI-Mitarbeiter",
        caption: "Das Board: Die Issues jedes Mitarbeiters wandern von Todo nach Done, und braucht ein Mitarbeiter eine Entscheidung, fragt er dich im Issue.",
      },
      {
        image: "/media/remote-claude-code/new-employee.webp",
        alt: "Formular für einen neuen Mitarbeiter mit Name, Rolle, Ziel, Arbeitszeiten, Heartbeat und dem Agenten, auf dem er läuft",
        caption: "Einen Mitarbeiter einstellen: eine Rolle, ein Ziel in Zahlen, Arbeitszeiten, wie oft er aufwacht, und der Agent, auf dem er läuft.",
      },
      {
        image: "/media/remote-claude-code/schedule.webp",
        alt: "Der Tag eines Mitarbeiters: Weckrufe während der Arbeitszeit, ein Protokoll seiner Arbeit und seine Einstellungen",
        caption: "Sein Arbeitstag: Weckrufe innerhalb der Zeiten, die du festlegst, und was er bei jedem davon getan hat.",
      },
    ],
  },
  both: {
    title: "Nutze beides",
    text: "Ein Crewmark-Mitarbeiter ist eine ganz normale Claude-Code-Unterhaltung, du kannst also trotzdem Remote Control dafür einschalten und dich vom Handy aus einklinken. Mit Remote Control sprichst du von überall mit Claude Code; Crewmark gibt ihm etwas zu tun, während du nicht mit ihm sprichst.",
  },
  alwaysOn: {
    title: "Claude Code rund um die Uhr erreichbar halten: zwei Setups",
    text: "Remote Control und Crewmark lassen Claude Code beide auf einem Computer laufen, der dir gehört, und antworten deshalb nur, solange dieser Computer an ist. Willst du es jederzeit und von überall erreichen, stell es auf einen Rechner, der nie schläft. Dafür gibt es zwei gute Wege:",
    options: [
      {
        title: "Ein Mac mini zu Hause",
        text: "Lass einen Mac mini eingeschaltet, schalte in System Settings > Energy die Option Prevent automatic sleeping when the display is off ein, lass Claude Code mit Remote Control darauf laufen und steuere es vom Handy aus. Mit Tailscale und Screen Sharing erreichst du seinen Desktop vom Laptop aus, sodass alle deine Dateien auf dem Mac mini bleiben. Es ist auch das Setup, auf dem Computer Use, Xcode und der iOS Simulator laufen können.",
        link: "Claude Code auf einem Mac mini einrichten",
        href: "/blog/claude-code-mac-mini",
      },
      {
        title: "Ein Linux-Server (VPS)",
        text: "Miete einen Linux-Server bei einem Anbieter wie DigitalOcean oder OVHcloud, installiere die Claude-CLI (oder Claude Desktop unter Ubuntu oder Debian) und führe `claude remote-control` aus. Er kann Chrome steuern, und über einen Remote-Desktop meldest du dich bei Bedarf selbst bei Websites an, aber Computer Use gibt es unter Linux nicht, und für iOS-Entwicklung brauchst du einen Mac.",
        link: "Claude Code auf einem VPS betreiben",
        href: "/blog/claude-code-vps",
      },
    ],
    note: "So machen wir es selbst: Die Person, die Crewmark gegründet hat, lässt zu Hause einen Mac mini ständig laufen, steuert Claude Code darauf vom Handy aus und arbeitet von einem MacBook Air aus über Tailscale und einen Remote-Desktop daran, sodass jede Datei auf dem Mac mini bleibt. Weitere Wege, es über Nacht am Laufen zu halten, findest du unter [wie du Claude Code 24/7 laufen lässt](/blog/run-claude-code-24-7).",
  },
  faq: {
    title: "Fragen",
    items: [
      {
        q: "Ist Crewmark das offizielle Claude Code Remote Control?",
        a: "Nein. Remote Control ist eine Funktion von Claude Code, entwickelt von Anthropic. Crewmark ist ein eigenständiges Produkt ohne Verbindung zu Anthropic, das KI-Mitarbeiter auf Basis von Claude Code und Codex betreibt.",
      },
      {
        q: "Kann ich Claude Code vom Handy aus nutzen?",
        a: "Ja. Starte Claude Code mit claude --remote-control oder führe /remote-control in einer Session aus und öffne sie dann in der Claude-App für iOS oder Android oder unter claude.ai/code. Die Session selbst läuft weiter auf deinem Computer.",
      },
      {
        q: "Funktioniert Remote Control mit einem API-Key?",
        a: "Nein. Laut der Dokumentation von Anthropic braucht es ein Pro-, Max-, Ultra-, Team- oder Enterprise-Abo mit Anmeldung über claude.ai. Mit API-Keys, Amazon Bedrock, Google Cloud, Microsoft Foundry oder einer eigenen ANTHROPIC_BASE_URL funktioniert es nicht.",
      },
      {
        q: "Warum funktioniert Claude Code Remote Control nicht?",
        a: "Meistens liegt es an der Anmeldung. Führe claude auth login aus und wähle die Option claude.ai; entferne ANTHROPIC_API_KEY oder ANTHROPIC_AUTH_TOKEN, falls sie gesetzt sind, denn sie haben Vorrang; und nutze kein langlebiges Token aus claude setup-token, damit lässt sich Remote Control nicht starten. Bei Team und Enterprise muss zuerst ein Owner Remote Control einschalten. Auch CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC oder DISABLE_GROWTHBOOK schalten es ab. claude doctor zeigt dir, welche Prüfung fehlgeschlagen ist.",
      },
      {
        q: "Warum trennt sich Remote Control ständig?",
        a: "\"Remote Control disconnected\" oder \"Can't reach\" bedeutet, dass dein Handy oder Browser den Kontakt zu Claude Code auf deinem Computer verloren hat. Eine interaktive Session verbindet sich von selbst neu, sobald der Computer wach und online ist; ist der claude-Prozess beendet, starte ihn neu und setze die Session fort. Auf einem entfernten Rechner führst du claude in tmux oder screen aus, damit es ein geschlossenes Terminal übersteht, und wenn es meldet, dass der Server etwa 30 Minuten lang nicht erreichbar war, führe /remote-control erneut aus.",
      },
      {
        q: "Remote Control vs. Dispatch: Was ist der Unterschied?",
        a: "Mit Remote Control steuerst du eine Claude-Code-Session, die bereits auf deinem Computer läuft, über claude.ai/code oder die Claude-App. Mit Dispatch schickst du eine neue Aufgabe aus der mobilen Claude-App, und die Desktop-App auf deinem Computer startet dafür eine Session; dazu muss die mobile App mit Claude Desktop gekoppelt sein.",
      },
      {
        q: "Kann ich Remote Control mit DeepSeek oder einem anderen Modellanbieter nutzen?",
        a: "Nein. Remote Control funktioniert nur, wenn Claude Code mit api.anthropic.com spricht. Wenn ANTHROPIC_BASE_URL auf DeepSeek, ein Gateway oder einen Proxy zeigt oder du Bedrock, Google Cloud oder Foundry nutzt, entferne diese Einstellung und melde dich mit claude.ai an, um es zu nutzen.",
      },
      {
        q: "Kann ich Claude Code Remote Control auf einem Mac mini nutzen?",
        a: "Ja. Halt den Mac mini wach (System Settings > Energy > Prevent automatic sleeping when the display is off), lass Claude Code mit eingeschaltetem Remote Control darauf laufen und verbinde dich über die Claude-App auf deinem Handy. Claude Code antwortet dann rund um die Uhr, solange der Mac mini eingeschaltet und online ist.",
      },
      {
        q: "Kann ich Remote Control auf einem Linux-Server nutzen?",
        a: "Ja. Installiere die Claude-CLI auf einer beliebigen Linux-Distribution oder Claude Desktop (Beta) unter Ubuntu 22.04 oder neuer bzw. Debian 12 oder neuer, melde dich mit deinem Claude-Abo an und führe claude remote-control aus. Halt den Prozess am Laufen, zum Beispiel in tmux. Computer Use gibt es unter Linux nicht.",
      },
      {
        q: "Kann Claude Code weiterarbeiten, wenn ich meinen Laptop zuklappe?",
        a: "Nicht von selbst: Eine Remote-Control-Session braucht einen eingeschalteten Computer und einen laufenden claude-Prozess, und nach einer Aufgabe wartet sie auf deine nächste Nachricht. Crewmark-Mitarbeiter laufen zwar ebenfalls auf deinem Computer, aber ein Heartbeat weckt sie während ihrer Arbeitszeit, damit sie ihre Issues weiter abarbeiten.",
      },
      {
        q: "Braucht Crewmark ein eigenes KI-Abo?",
        a: "Nein. Jeder Mitarbeiter läuft in Claude Code oder Codex auf deinem eigenen Rechner, mit dem Abo, für das du schon zahlst. Crewmark verwaltet die Mitarbeiter, Issues, das Board und die Nachrichten.",
      },
    ],
  },
  cta: {
    title: "Lass Claude Code weiterarbeiten, während du weg bist",
    text: "Registriere dich mit Google und stell deinen ersten Mitarbeiter auf dem Agenten ein, den du schon nutzt.",
    button: "Loslegen",
  },
  checked: "Angaben zu Remote Control am 14. November 2026 mit der Dokumentation von Anthropic abgeglichen.",
  disclaimer:
    "Claude und Claude Code sind Marken von Anthropic, PBC. Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, wird von Anthropic weder unterstützt noch gesponsert.",
};
