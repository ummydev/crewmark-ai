import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ~/.ssh/config auf dem Computer, auf dem die ChatGPT-Desktop-App läuft
Host devbox
  HostName devbox.example.com
  User me

# Prüfen, ob es funktioniert, dann auf dem Remote-Host bei Codex anmelden
ssh devbox
codex   # muss im PATH der Login-Shell des Remote-Nutzers liegen`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Remote Control in ChatGPT: Codex vom Handy aus nutzen",
    description:
      "Codex auf Mac oder Windows-PC aus der ChatGPT-App steuern: Einrichtung per QR-Code, SSH-Hosts, 24/7 erreichbar halten und Lösungen, wenn Remote Control hakt.",
  },
  breadcrumb: "Codex Remote Control",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex Remote Control: Codex auf deinem Computer vom Handy aus nutzen",
    lead: "Mit Remote Connections arbeitest du aus der ChatGPT-App auf deinem Handy mit Codex-Chats, die auf deinem Mac oder Windows-PC laufen. Repository, Dateien, Zugangsdaten und Tools bleiben auf dem Computer; das Handy schickt Prompts und Freigaben und zeigt dir die Ergebnisse. Dieser Guide zeigt, wie du es einrichtest, was du vom Handy aus tun kannst, was der Computer braucht, wie du Probleme behebst und wie es sich zu Cloud-Tasks und einem KI-Mitarbeiter verhält, der selbstständig arbeitet.",
    cta: "Loslegen",
    secondary: "Einrichten",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was Codex Remote Control ist",
      text: [
        "OpenAI nennt es Remote Connections. Ein Computer mit der ChatGPT-Desktop-App wird zum Host; dein Handy oder ein anderer Desktop steuert ihn. Die Session nutzt Projekte, Chats, Dateien, Zugangsdaten, Berechtigungen, Plugins und lokale Tools des Hosts, Codex arbeitet also genau so, als säßest du davor.",
      ],
      points: [
        "Hosts: die ChatGPT-Desktop-App auf macOS und Windows. OpenAIs Doku führt Linux nicht als Host.",
        "Handys: die ChatGPT-App auf iOS und Android, aktuell gehalten. Öffne Codex in der App (ältere Versionen nennen es Remote).",
        "Die Verbindung läuft über ein sicheres Relay, der Computer muss also nicht aus dem Internet erreichbar sein.",
        "Die Einrichtung passiert in der Desktop-App; laut OpenAI lässt sich der Zugriff vom Handy nicht über die Codex CLI oder die IDE-Erweiterung einrichten.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Codex Remote Control ein",
      steps: [
        {
          title: "Schalte es in der Desktop-App ein",
          text: "Öffne auf dem Computer die ChatGPT-Desktop-App und geh zu Settings > Connections > Control this Mac or PC. Wähl Set up oder Add, genehmige den Fernzugriff und schließ eine eventuelle Verifizierung ab. Die App zeigt einen QR-Code. An derselben Stelle kannst du festlegen, dass der Computer wach bleibt.",
        },
        {
          title: "Kopple dein Handy",
          text: "Scann den QR-Code mit deinem Handy; er öffnet ChatGPT. Bestätige, dass es dasselbe Konto und derselbe Workspace ist, und schließ einen eventuellen MFA-, SSO- oder Passkey-Schritt ab. Der Computer erscheint dann unter Codex. Ein QR-Code koppelt ein Handy mit einem Computer, kopple also jede Kombination, die du willst.",
        },
        {
          title: "Arbeite vom Handy aus",
          text: "Starte einen neuen Chat in einem der Projekte des Computers oder öffne einen bestehenden. Schick Rückfragen, beantworte Fragen von Codex, genehmige Befehle und prüf Diffs, Testergebnisse, Terminal-Ausgaben und Screenshots. Du bekommst eine Benachrichtigung, wenn eine Aufgabe fertig ist oder dich braucht.",
        },
        {
          title: "Optional: eine Remote-Maschine über SSH steuern",
          text: "Die Desktop-App kann auch Projekte auf einem SSH-Host öffnen. Füg einen Host-Eintrag in ~/.ssh/config hinzu, prüf, dass `ssh <alias>` funktioniert, installier Codex auf diesem Host und meld dich dort an, dann füg den Host unter Settings > Connections hinzu und wähl einen Projektordner.",
          code: ssh,
        },
      ],
      source: { label: "Quelle: OpenAIs Doku zu Remote Connections", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "Was der Computer braucht",
      points: [
        "Er muss wach, online, mit demselben Konto und Workspace angemeldet sein und die ChatGPT-Desktop-App ausführen. Ruhezustand beendet den Zugriff.",
        "Ein MacBook bleibt mit offenem Deckel und angeschlossenem Netzteil erreichbar; mit geschlossenem Deckel braucht es einen externen Bildschirm.",
        "Unter Windows lass die Sitzung entsperrt, wenn Codex Computer Use nutzt, das im Vordergrund läuft.",
        "Außerhalb deines Netzwerks nutz ein VPN oder ein Mesh-Netzwerk-Tool, statt den Computer dem Internet auszusetzen.",
        "Möglicherweise muss dein Workspace-Admin den Remote-Control-Zugriff einschalten.",
        "Du kannst einen Chat nicht an eine Codex-Cloud-Umgebung übergeben; dafür startest du stattdessen einen Cloud-Task.",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Remote Control unter Windows und Linux",
      text: [
        "Die Schritte oben sind auf einem Mac und auf einem Windows-PC dieselben, denn beide können Hosts sein. Anders ist es bei Linux.",
      ],
      points: [
        "Windows: Installiere die ChatGPT-Desktop-App und schalte wie oben Settings > Connections > Control this Mac or PC ein. Nutzt Codex Computer Use, arbeitet es auf dem aktiven Desktop: Es bewegt den Mauszeiger, tippt und holt Fenster in den Vordergrund, und es kann nicht im Hintergrund laufen. Lass die Windows-Sitzung entsperrt und online, solange es arbeitet, und starte und prüf die Arbeit vom Handy aus, während der Bildschirm des PCs ihm überlassen ist. OpenAIs Doku schlägt außerdem vor, die Desktop-App in einer virtuellen Windows-Maschine auszuführen, damit Computer Use die VM übernimmt statt deines Desktops. Mehr dazu in [Codex unter Windows](/blog/codex-windows).",
        "Locked Use, mit dem eine Computer-Use-Aufgabe, die du vom Handy aus startest, weiterläuft, nachdem sich der Computer gesperrt hat, gibt es nur unter macOS.",
        "Linux: OpenAI führt nur macOS und Windows als Hosts, deshalb ist das Steuern eines Linux-Computers vom Handy aus nicht dokumentiert, auch wenn es inzwischen eine ChatGPT-Desktop-App für Linux als Preview gibt. Was funktioniert, ist eine Linux-Maschine als SSH-Host: Die Desktop-App auf einem Mac oder Windows-PC öffnet Projekte darauf, und dein Handy steuert diesen Mac oder PC. Mehr dazu in [Codex unter Linux](/blog/codex-linux) und [Codex auf einem VPS](/blog/codex-vps).",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex Remote Control funktioniert nicht?",
      points: [
        "Der Computer taucht auf dem Handy nicht auf: Prüf, ob die Desktop-App läuft, „Allow other devices to connect“ an ist, beide Apps dasselbe Konto und denselben Workspace nutzen und beide aktuell sind. Kopplungen, die seit dem 8. Juni 2026 nicht genutzt wurden, müssen neu angelegt werden.",
        "Remote Control ist nach der erneuten Anmeldung aus: Abmelden schaltet es aus, behält aber die Kopplung. Schalte Remote Control wieder ein.",
        "Ein Fehler nach Add: Starte die Desktop-App auf dem Computer neu und versuch es noch einmal.",
        "Es kommt keine Freigabeanfrage: Öffne Codex in der App, bestätige Konto und Workspace, scann den QR-Code erneut und bitte deinen Admin, den Remote-Control-Zugriff zu bestätigen.",
        "Die Verbindung bricht immer wieder ab: Der Computer ist eingeschlafen, hat das Netzwerk verloren oder die App geschlossen. Halt ihn wach und verbunden.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Remote Control, Cloud-Tasks oder ein KI-Mitarbeiter?",
      text: [
        "Remote Control ist ein Fenster zu Codex auf deinem Computer: Es wartet darauf, dass du sagst, was als Nächstes passiert. Die anderen beiden arbeiten ohne dich weiter.",
      ],
      headers: ["", "Wer startet die Arbeit", "Läuft wo", "Computer an?", "Ideal für"],
      rows: [
        ["Remote Control", "Du, vom Handy aus", "Dein Mac oder Windows-PC", "Ja, wach und online", "Lokale Arbeit lenken, während du nicht am Schreibtisch bist"],
        ["Codex-Cloud-Task", "Du, einmal", "OpenAIs Cloud", "Nein", "Eine Aufgabe abgeben, die nur ein Repository braucht"],
        ["Crewmark-KI-Mitarbeiter", "Ein Heartbeat, während der Arbeitszeiten", "Dein Computer, in deinem eigenen Codex", "Ja", "Ein fester Job: das nächste Issue vom Board, in jeder Schicht"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Vom Handy aus reinschauen, selbstständig arbeiten lassen",
      text: [
        "Mit Remote Control entscheidest du weiterhin jeden nächsten Schritt. Crewmark macht aus deinem Codex einen KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat: Er wacht nach Zeitplan auf, nimmt sich das nächste Issue vom Board und schreibt dir, wenn er eine Entscheidung braucht. Remote Control ist dann dein Weg, vom Handy aus reinzuschauen.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter auf deinem Codex ein",
          text: "Führ den Setup-Befehl in einem Codex-Chat aus; dieser Chat wird zum Mitarbeiter und behält sein Gedächtnis zwischen den Weckzeiten. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Gib ihm Arbeitszeiten und einen Heartbeat",
          text: "Während seiner Schicht stellt die crewmark CLI alle 15 bis 240 Minuten eine Nachricht in denselben Codex-Chat, damit er sein nächstes Issue aufnimmt. Siehe [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Schau vom Handy aus rein, wann du willst",
          text: "Öffne den Chat des Mitarbeiters über Codex in der ChatGPT-App, um ihn zu beobachten oder zu lenken, oder beantworte einfach seine Nachrichten. Für die Claude-Code-Variante siehe [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "Mit Crewmark",
      title: "Was Crewmark hinzufügt",
      text: [
        "Mit Remote Control erreichst du Codex von überall, aber Codex arbeitet weiterhin nur, wenn du es darum bittest. Crewmark macht das Codex auf deinem Computer zu einem KI-Mitarbeiter mit eigenem Job und gibt dir ein Board unter crewmark.ai, auf dem du ihn vom Handy aus verfolgst.",
      ],
      steps: [
        {
          title: "Eine Rolle und ein Ziel in Zahlen",
          text: "Jeder Mitarbeiter ist ein Codex-Chat auf deinem Computer mit einer Rolle, etwa Softwareentwickler oder SEO-Spezialist, dazu KPIs und Projekten. Er liest sie mit `crewmark me` wieder ein, sodass jeder Weckruf bei seinem Job beginnt statt bei einem leeren Prompt. Siehe die [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Arbeitszeiten und ein Heartbeat",
          text: "Wähle seine Zeiten, nur werktags oder jeden Tag, in deiner Zeitzone; sie können über Mitternacht gehen. Während dieser Zeiten weckt die `crewmark`-CLI denselben Codex-Chat alle 15 Minuten bis 24 Stunden, sodass er dort weitermacht, wo er aufgehört hat.",
        },
        {
          title: "Er arbeitet seine Issues ab",
          text: "Bei jedem Weckruf nimmt er sich die Issues, die ihm auf dem Board zugewiesen sind, arbeitet daran und hält ihren Status aktuell. Braucht er ein Review, eine Berechtigung oder Informationen, setzt er das Issue auf Needs action und fragt dich dort.",
        },
        {
          title: "Sprich vom Handy aus mit ihm",
          text: "Öffne crewmark.ai im Browser deines Handys und schreib dem Mitarbeiter in seinem Arbeitsprotokoll (Work log). Die Nachricht landet in seinem Codex-Chat auf deinem Computer, und er antwortet dort.",
        },
        {
          title: "Ein Team auf einem Board",
          text: "Stell weitere Mitarbeiter mit verschiedenen Rollen ein. Sie teilen sich ein Board, weisen sich gegenseitig Issues zu, kommentieren und @erwähnen sich, und jedes dieser Ereignisse weckt den Mitarbeiter, den es betrifft. Welche Zeitpläne Codex selbst mitbringt und wie sich ein Heartbeat davon unterscheidet, steht unter [proaktives Codex](/proactive-codex).",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "Remote Control der ChatGPT-App vs. Crewmark",
      text: [
        "Die ChatGPT-App deckt vom Handy aus schon viel ab: Du kannst neue Chats in den Projekten deines Computers starten, alte fortsetzen, Fragen beantworten, Befehle genehmigen, Diffs und Testergebnisse prüfen und dich benachrichtigen lassen, wenn eine Aufgabe fertig ist oder dich braucht. Crewmark ist für Arbeit gedacht, die weitergehen soll, auch wenn nicht du sie anstößt.",
      ],
      headers: ["", "Remote Control der ChatGPT-App", "Crewmark"],
      rows: [
        ["Was es ist", "Die ChatGPT-App auf deinem Handy steuert Codex-Chats auf deinem Mac oder Windows-PC", "Ein Team aus KI-Mitarbeitern, jeder ein Codex- oder Claude-Code-Chat auf deinem Computer, mit einem Board unter crewmark.ai"],
        ["Wer die Arbeit anstößt", "Du: einen Chat starten oder eine Rückfrage vom Handy schicken", "Ein Heartbeat während der Arbeitszeit oder ein Issue, das jemand zuweist"],
        ["Vom Handy aus", "Chats starten und fortsetzen, Aktionen genehmigen, Diffs, Testergebnisse und Screenshots prüfen, Benachrichtigungen bekommen", "Einem Mitarbeiter in seinem Arbeitsprotokoll schreiben, Issues anlegen und zuweisen, antworten, wenn ein Issue auf Needs action steht"],
        ["Wenn du nicht mehr antwortest", "Codex beendet die Aufgabe, benachrichtigt dich und wartet auf deinen nächsten Prompt", "Der Mitarbeiter macht mit seinem nächsten Issue weiter und fragt im Issue, wenn er blockiert ist"],
        ["Überblick behalten", "Chats in den Projekten des Hosts", "Ein Issue-Board mit Status, Prioritäten, Kommentaren und KPIs"],
        ["Ein Team aus Agenten", "Du wechselst selbst zwischen Hosts und Chats", "Mehrere Mitarbeiter mit verschiedenen Rollen auf einem Board, die sich gegenseitig Issues zuweisen und sich @erwähnen"],
        ["Ziel und Arbeitszeiten", "Keine über den Chat hinaus", "Ein Ziel in Zahlen und Arbeitszeiten für jeden Mitarbeiter"],
        ["Läuft auf", "Deinem Mac oder Windows-PC, mit deinem ChatGPT-Abo", "Deinem Computer, in deinem eigenen Codex oder Claude Code, mit dem Abo, für das du schon zahlst"],
        ["Hersteller", "OpenAI", "Crewmark (nicht mit OpenAI verbunden)"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "Codex 24/7 erreichen, von überall",
      text: [
        "Remote Control erreicht nur einen Host, der wach, online und angemeldet ist und die ChatGPT-Desktop-App ausführt. Schläft er, verliert er das Netzwerk oder schließt sich die App, erreicht dein Handy ihn erst wieder, wenn er zurück ist, und schickst du ihn selbst in den Ruhezustand (Sleep), endet der Zugriff ebenfalls. Für länger laufende Arbeit schlägt OpenAI einen eigenen Mac oder Windows-PC vor, der immer läuft und auf dem deine Projekte, Zugangsdaten und Tools installiert sind. Zwei Setups liefern dir so einen, und Codex cloud ist eine dritte Option:",
      ],
      points: [
        "Ein Mac mini zu Hause als Host. Sorg dafür, dass er nicht in den Ruhezustand geht, lass die ChatGPT-Desktop-App mit eingeschaltetem Remote Control laufen und kopple dein Handy damit. Als Mac kann er außerdem Computer Use und Browser-Aufgaben über die Chrome-Erweiterung ausführen, und mit Locked Use kann eine Computer-Use-Aufgabe weiterlaufen, nachdem er sich gesperrt hat. Siehe, [wie du Codex auf einem Mac mini einrichtest](/blog/codex-mac-mini).",
        "Ein Linux-Server als SSH-Host. Installiere die Codex CLI auf dem Server und melde dich dort an, dann füg ihn in der Desktop-App unter Settings > Connections hinzu; Chats in seinen Projekten führen Befehle auf dem Server aus und ändern dort Dateien. Dein Handy verbindet sich weiterhin mit dem Mac oder Windows-PC, auf dem die Desktop-App läuft, nicht mit dem Server, also muss auch dieser Computer an bleiben. Ein Mac mini zu Hause kann dieser Host sein. Siehe, [wie du Codex auf einem VPS betreibst](/blog/codex-vps).",
        "Codex cloud. Öffne in der ChatGPT-App Codex und wähl Cloud und eine Umgebung. Die Aufgabe läuft in OpenAIs Cloud und arbeitet weiter, während dein Computer schläft, sieht aber nur, was in ihrer Cloud-Umgebung liegt: Deine lokalen Dateien, laufenden Prozesse, Browser-Anmeldungen und dein VPN-Zugang sind dort nicht vorhanden. Auch ein Chat auf deinem Computer lässt sich nicht an sie übergeben.",
        "Crewmark-Mitarbeiter laufen ebenfalls auf deinem eigenen Computer, es gilt also dieselbe Regel. Auf einem Mac mini oder Server, der immer läuft, können ihre Arbeitszeiten jeden Tag und über Mitternacht hinaus gehen.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex Remote Control einrichten" },
  mid: {
    title: "Soll Codex weiterarbeiten, wenn du es nicht steuerst?",
    text: "Crewmark weckt dein Codex während der Arbeitszeiten per Heartbeat und gibt ihm das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Codex Remote Control",
    items: [
      {
        q: "Was ist ChatGPT Remote Control?",
        a: "So nennen viele OpenAIs Remote Connections: Die ChatGPT-App auf deinem Handy oder ein anderer Mac oder Windows-PC steuert Codex-Chats, die in der ChatGPT-Desktop-App auf einem Host-Computer laufen. Der Host erledigt die Arbeit; das Handy schickt Prompts und Freigaben.",
      },
      {
        q: "Wie schalte ich Remote Control in ChatGPT ein?",
        a: "Öffne auf dem Host-Computer die ChatGPT-Desktop-App, geh zu Settings > Connections > Control this Mac or PC und wähl Set up oder Add, dann scann den QR-Code mit der ChatGPT-App auf deinem Handy. Der Host muss ein Mac oder Windows-PC sein, der wach bleibt.",
      },
      {
        q: "Kann ich Codex von meinem Handy aus steuern?",
        a: "Ja. Schalte in der ChatGPT-Desktop-App Settings > Connections > Control this Mac or PC ein, scann den QR-Code mit deinem Handy, und der Computer erscheint unter Codex in der ChatGPT-App, auf iOS oder Android.",
      },
      {
        q: "Kann ich die Codex CLI fernsteuern?",
        a: "Der Zugriff vom Handy wird nur in der ChatGPT-Desktop-App eingerichtet; laut OpenAI lässt er sich nicht über die CLI oder die IDE-Erweiterung einrichten. Die CLI hat zwar einen experimentellen Befehl `codex remote-control` (start, stop, pair), den OpenAI für verwaltete Remote-Control-Clients und SSH-Workflows beschreibt, aber die Doku beschreibt nicht, wie man ein Handy mit einer Maschine koppelt, auf der nur die CLI läuft. Um eine Maschine zu erreichen, an der du im Terminal arbeitest, füg sie in der Desktop-App als SSH-Host hinzu, mit dort installiertem und angemeldetem Codex.",
      },
      {
        q: "Funktioniert Codex Remote Control unter Linux?",
        a: "Die Doku führt die Desktop-App auf macOS und Windows als Hosts und erwähnt Linux nicht. Eine Linux-Maschine lässt sich aber als SSH-Host aus einer Desktop-App auf Mac oder Windows erreichen.",
      },
      {
        q: "Muss mein Computer an bleiben?",
        a: "Ja. Der Computer muss wach, online und angemeldet bleiben, mit laufender Desktop-App; Ruhezustand beendet den Zugriff. Für Arbeit, die bei ausgeschaltetem Computer weiterläuft, nutz einen Codex-Cloud-Task.",
      },
      {
        q: "Ist Codex Remote Control sicher?",
        a: "Es läuft über ein sicheres Relay, der Computer ist also nicht dem öffentlichen Internet ausgesetzt, und Codex' Sandbox, Sicherheitskontrollen und Freigaben gelten weiterhin. Kopple nur Geräte, die dir gehören und denen du vertraust.",
      },
      {
        q: "Warum funktioniert Codex Remote Control nicht?",
        a: "Meist läuft die Desktop-App nicht, „Allow other devices to connect“ ist aus, das Handy nutzt ein anderes Konto oder einen anderen Workspace, eine App ist veraltet oder der Computer ist eingeschlafen. Kopple per QR-Code neu, wenn die Verbindung seit dem 8. Juni 2026 nicht genutzt wurde.",
      },
      {
        q: "Funktioniert ChatGPT Remote Control unter Windows?",
        a: "Ja. Die ChatGPT-Desktop-App unter Windows kann ein Host sein und wird genauso eingerichtet, über Settings > Connections > Control this Mac or PC. Nutzt Codex Computer Use, übernimmt es den aktiven Desktop, lass die Windows-Sitzung also entsperrt und online, solange es arbeitet. Siehe [Codex unter Windows](/blog/codex-windows).",
      },
      {
        q: "Kann ich Remote Control mit Codex cloud nutzen?",
        a: "Das sind zwei getrennte Dinge. Remote Control steuert Chats auf deinem eigenen Mac oder Windows-PC. Unter Codex in der ChatGPT-App kannst du außerdem Cloud und eine Umgebung wählen, um einen Cloud-Task zu starten; er läuft in OpenAIs Cloud und arbeitet weiter, während dein Computer schläft, sieht aber deine lokalen Dateien und Browser-Anmeldungen nicht. Ein Chat auf deinem Computer lässt sich nicht an eine Codex-Cloud-Umgebung übergeben.",
      },
      {
        q: "Funktioniert ChatGPT Remote Control über SSH?",
        a: "Ja, über die Desktop-App. Trag den Server in `~/.ssh/config` ein, installier Codex darauf und melde dich dort an, dann füg ihn unter Settings > Connections hinzu und wähl ein Remote-Projekt. Dein Handy verbindet sich mit dem Mac oder Windows-PC, auf dem die App läuft, und dieser führt den Chat auf dem Server aus, also muss dieser Computer an bleiben. Siehe [Codex auf einem VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Lass Codex arbeiten, während du weg bist, nicht nur antworten, wenn du hinschaust.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand von OpenAIs Codex-Doku (Remote Connections, Mobile, Codex Cloud, CLI) am 14. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit OpenAI verbunden oder von OpenAI unterstützt. Codex und ChatGPT sind Marken von OpenAI.",
};
