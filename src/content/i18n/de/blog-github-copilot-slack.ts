import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # Standard-Repositorys für diesen Channel wählen
@GitHub help          # Befehle auflisten`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot in Slack: Einrichtung und Alternativen",
    description:
      "@GitHub in Slack und Teams ist seit dem 6. November 2026 allgemein verfügbar. So richtest du es ein, das kann der Copilot-Agent aus einem Chat-Thread heraus, Berechtigungen und Grenzen und der Vergleich mit Claude Code in Slack.",
  },
  breadcrumb: "GitHub Copilot in Slack",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · KI-Coding-Agenten",
    title: "GitHub Copilot in Slack: Aus einem Chat-Thread wird ein Pull Request",
    lead: "Mit GitHub Copilot in Slack erwähnst du `@GitHub` in einem Thread, und Copilots Cloud-Agent untersucht einen Bug, legt Issues an, schreibt die Änderung und öffnet einen Pull Request, mit der Unterhaltung als Kontext. Seit dem 6. November 2026 ist das in Slack und Microsoft Teams allgemein verfügbar. Dieser Guide zeigt, wie du es einrichtest, was es kann und was nicht, wer es auslösen darf und wie es sich im Vergleich zu Claude Code in Slack und einem dauerhaft aktiven KI-Mitarbeiter schlägt.",
    cta: "Loslegen",
    secondary: "Zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was @GitHub in Slack und Teams macht",
      points: [
        "Untersucht, plant, schreibt Code und öffnet Issues und Pull Requests aus einem Chat-Thread heraus, mit dem ganzen Thread als Kontext.",
        "Arbeitet asynchron in einer Cloud-Sandbox und postet eine Zusammenfassung mit Links zu dem, was es erstellt hat.",
        "Legt ein Issue an, mehrere oder Parent- und Child-Issues; arbeitet in bis zu 11 Repositorys derselben Organisation oder desselben Kontos.",
        "Unterstützt die Wahl des Modells, MCP-Server, die Repository-Admins eingerichtet haben, und Copilot Memory (in der Preview).",
        "Seit dem Release vom 6. November erkennt es das Repository aus deiner Nachricht, vermerkt in jedem Issue und PR, aus welcher Unterhaltung und von welchem Nutzer es stammt, und zeigt in Teams Pläne, Diffs und Vorschauen in einem Canvas neben dem Chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du GitHub Copilot in Slack ein",
      steps: [
        {
          title: "Prüfe, ob du es nutzen kannst",
          text: "Du brauchst einen kostenpflichtigen Copilot-Plan und Schreibzugriff auf die Repositorys, die geändert werden sollen. In Organisationen und Enterprises ist die Richtlinie „Copilot in the cloud“ standardmäßig an, ein Owner kann sie aber abschalten; bei Repositorys im Besitz eines Enterprise installiert ein Admin die App und legt fest, auf welche Repositorys sie zugreifen darf.",
        },
        {
          title: "Installiere die GitHub-App für Slack",
          text: "Füge die GitHub-Integration über slack.github.com zu deinem Workspace hinzu (für Teams über teams.github.com).",
        },
        {
          title: "Verbinde dein Konto",
          text: "Öffne eine Direktnachricht mit der GitHub-App oder tippe `@GitHub` in einen Thread und folge den Anweisungen, um dein GitHub-Konto zu verknüpfen. `@GitHub help` listet die Befehle auf.",
        },
        {
          title: "Lege Standard-Repositorys für einen Channel fest",
          text: "Führe `@GitHub settings` in einem Channel aus, um einen Owner und Repositorys auszuwählen; das erste wird zum primären Repository. Direktnachrichten haben keinen Standard, also nenne Repository und Branch im Prompt.",
        },
        {
          title: "Beschreib die Aufgabe in normaler Sprache",
          text: "Erwähne `@GitHub` mit der Aufgabe oder antworte damit auf eine GitHub-Benachrichtigung. Copilot liest den Thread, arbeitet in der Cloud und antwortet mit Links zum Issue oder Pull Request.",
          code: prompts,
        },
      ],
      source: { label: "Quelle: GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "Berechtigungen und Grenzen",
      points: [
        "Nur wer Schreibzugriff auf alle ausgewählten Repositorys hat, kann eine Session starten oder steuern; alle im Thread können Input beisteuern.",
        "Gäste und externe Mitarbeiter (Outside Collaborators) können keine Sessions starten oder steuern.",
        "In einer Direktnachricht handelt Copilot mit den Berechtigungen deines verknüpften Kontos; in einem geteilten Channel legt es Issues und PRs unter seiner App-Identität an.",
        "Der ganze Thread wird als Kontext erfasst und im resultierenden Pull Request gespeichert, also halte Secrets aus der Unterhaltung heraus.",
        "GitHubs Ankündigung sagt nichts Genaues zur Abrechnung von Slack-Sessions; prüf die Copilot-Nutzung deines Plans, bevor du es breit ausrollst.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "GitHub Copilot in Slack vs. Claude Code in Slack vs. ein KI-Mitarbeiter",
      headers: ["", "GitHub Copilot in Slack", "Claude Code in Slack", "Crewmark-KI-Mitarbeiter"],
      rows: [
        ["Wie die Arbeit startet", "`@GitHub` erwähnen oder der App eine DM schicken", "`@Claude` in einem Team-Channel erwähnen", "Ein Heartbeat während der Arbeitszeiten übernimmt das nächste Issue; du kannst es ihm auch zuweisen"],
        ["Wo es läuft", "In GitHubs Cloud-Sandbox", "In Anthropics Cloud (Claude Code on the web)", "Auf deinem Rechner, in Claude Code, Codex, DeepSeek Harness oder OpenCode"],
        ["Was es liefert", "Issues und Pull Requests", "Pull Requests und Reviews", "Arbeit an jedem Issue auf dem Board, mit Kommentaren und Nachrichten an dich"],
        ["Pläne", "Kostenpflichtige Copilot-Pläne", "Pro, Max und Ultra, mit aktiviertem Claude Code on the web", "Dein bestehendes Agenten-Abo"],
        ["Arbeitet ohne dich weiter", "Nein: eine Aufgabe pro Erwähnung", "Nein: eine Aufgabe pro Erwähnung", "Ja, während seiner Arbeitszeiten"],
      ],
    },
    {
      kind: "text",
      title: "Wann ein Chatbot reicht und wann nicht",
      text: [
        "Copilot in Slack ist ideal für den Moment, in dem ein Bugreport in einem Thread landet: eine Erwähnung, und ein Pull Request folgt. Trotzdem bleibt es reaktiv: Nichts passiert, bis jemand fragt, und jede Erwähnung ist eine Aufgabe. Wenn du einen Agenten willst, der sich selbstständig durch ein Backlog arbeitet, mit Rolle und Zielen, sieh dir [KI-Mitarbeiter](/ai-employees) an und lies, [wie du Claude Code proaktiv machst](/proactive-claude-code). Weitere Wege, mehrere Agenten laufen zu lassen, findest du unter [Orchestrierungs-Tools für Claude Code](/blog/claude-code-orchestration-tools).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Vom „Bot erwähnen“ zum Mitarbeiter, der sich die nächste Aufgabe selbst nimmt",
      text: [
        "Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten. Er wacht per Heartbeat auf, übernimmt das nächste Issue von einem gemeinsamen Board, kommentiert während der Arbeit und schreibt dir, wenn er eine Entscheidung braucht.",
      ],
      steps: [
        {
          title: "Verteile Arbeit wie im Chat",
          text: "Leg ein Issue an und weise es zu, aus jedem Browser oder vom Handy; der Mitarbeiter erfährt sofort davon.",
        },
        {
          title: "Lass ihn weitermachen",
          text: "Zwischen deinen Nachrichten arbeitet er seine Issues mit einem Heartbeat von 15, 30 oder 60 Minuten ab.",
        },
        {
          title: "Behalte Copilot für schnelle Fixes",
          text: "Das schließt sich nicht aus: Nutze `@GitHub` für einmalige Anfragen in einem Thread und einen Mitarbeiter für das laufende Backlog.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "GitHub Copilot in Slack einrichten" },
  mid: {
    title: "Du willst einen Agenten, der nicht darauf wartet, erwähnt zu werden?",
    text: "Crewmark weckt Claude Code oder Codex per Heartbeat, mit Rolle, Ziel und einem Board voller Issues.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu GitHub Copilot in Slack",
    items: [
      {
        q: "Ist GitHub Copilot in Slack allgemein verfügbar?",
        a: "Ja. GitHub hat am 6. November 2026 angekündigt, dass @GitHub in Slack und Teams allgemein verfügbar ist.",
      },
      {
        q: "Wie füge ich GitHub Copilot zu Slack hinzu?",
        a: "Installiere die GitHub-App für Slack über slack.github.com, schick der App dann eine DM oder erwähne `@GitHub` in einem Thread und verknüpfe dein GitHub-Konto. Mit `@GitHub settings` legst du Standard-Repositorys für einen Channel fest.",
      },
      {
        q: "Welchen Plan brauche ich für Copilot in Slack?",
        a: "Einen kostenpflichtigen Copilot-Plan und Schreibzugriff auf die Repositorys, die es ändern soll. Organisations-Owner können die Richtlinie „Copilot in the cloud“ abschalten, auf der es aufbaut.",
      },
      {
        q: "Kann GitHub Copilot in Slack Pull Requests öffnen?",
        a: "Ja. Es untersucht das Problem, schreibt die Änderung in einer Cloud-Sandbox und öffnet den Pull Request, dann postet es eine Zusammenfassung mit Links im Thread.",
      },
      {
        q: "Funktioniert es auch in Microsoft Teams?",
        a: "Ja. @GitHub ist auch in Teams allgemein verfügbar, wo ein Canvas Pläne, Codeänderungen und Vorschauen neben der Unterhaltung zeigt.",
      },
      {
        q: "Wer kann Copilot in einem Slack-Channel auslösen?",
        a: "Nur wer Schreibzugriff auf alle ausgewählten Repositorys hat, kann eine Session starten oder steuern. Andere im Thread können Input beisteuern; Gäste und externe Mitarbeiter können es nicht auslösen.",
      },
      {
        q: "GitHub Copilot in Slack oder Claude Code in Slack?",
        a: "Beide machen aus einer Erwähnung in Slack eine Coding-Aufgabe in der Cloud. Copilot läuft mit einem kostenpflichtigen Copilot-Plan und legt Issues und PRs an; Claude Code in Slack braucht einen Claude-Pro-, Max- oder Ultra-Plan mit Claude Code on the web.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Team einen KI-Kollegen, der nicht erst gefragt werden muss.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 7. November 2026 mit GitHubs Changelog (6. November 2026), GitHub Docs und Anthropics Claude-Code-Dokumentation abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu GitHub, Microsoft, Slack oder Anthropic, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
