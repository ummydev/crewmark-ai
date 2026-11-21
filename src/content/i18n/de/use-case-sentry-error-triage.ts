import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code: den gehosteten MCP-Server von Sentry hinzufügen, dann per OAuth anmelden
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex: über die mcp-remote-Brücke
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# Rolle: Fehler-Triage
Läuft über das wiederkehrende Issue "Sentry-Triage", werktags um 9:00 und 14:00.

1. Liste in Sentry ungelöste Issues in der Produktionsumgebung auf, die seit dem
   letzten Lauf zum ersten Mal aufgetreten oder wieder aufgetreten sind.
2. Prüf für jedes, ob es auf dem Board schon ein Issue gibt (such nach der
   Sentry-Issue-ID). Wenn ja, ergänze die neue Anzahl als Kommentar.
3. Sonst leg ein Issue an: Titel aus dem Fehler, betroffene Nutzer und Events,
   erstes und letztes Auftreten, die obersten Stack-Frames, das Release, in dem
   es begann, und deine beste Vermutung zur Ursache, als Vermutung markiert.
4. Priorität: Urgent, wenn es Anmeldung, Zahlung oder Daten blockiert; High, wenn es
   mehr als 1 % der Sessions betrifft; sonst Medium.
5. Ist der Fix klein und offensichtlich, nimm ihn als dein nächstes Issue und
   öffne einen Pull Request mit Test. Nicht mergen.
6. Löse, ignoriere oder lösche in Sentry nie selbst etwas.`;

export const copy: GuideCopy = {
  meta: {
    title: "Sentry-Fehler täglich mit Claude Code oder Codex sichten",
    description:
      "Lass einen KI-Mitarbeiter auf Claude Code oder Codex zweimal täglich neue Sentry-Fehler lesen, sie mit Stack, Auswirkung und wahrscheinlicher Ursache auf deinem Board erfassen und für die kleinen Pull Requests mit Fixes öffnen. Das Sentry-MCP-Setup und die Rollenbeschreibung zum Kopieren.",
  },
  breadcrumb: "Sentry-Fehler-Triage",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Anwendungsfälle · Engineering",
    title: "Sentry-Fehler-Triage durch einen KI-Mitarbeiter in Claude Code oder Codex",
    lead: "Neue Fehler stapeln sich in Sentry schneller, als irgendwer sie liest. Ein KI-Mitarbeiter auf deinem eigenen Claude Code oder Codex kann Sentry nach Zeitplan prüfen, überspringen, was schon auf dem Board steht, jeden neuen Fehler als Issue mit Stacktrace, betroffenen Nutzern und wahrscheinlicher Ursache erfassen und die kleinen Fixes selbst übernehmen, mit einem Pull Request zum Review. Hier erfährst du, wie du den MCP-Server von Sentry verbindest, findest die Rollenbeschreibung zum Kopieren und die Regeln, die es sicher halten.",
    cta: "Loslegen",
    secondary: "Sentry verbinden",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was der Mitarbeiter tut",
      points: [
        "Liest ungelöste Sentry-Issues, die seit seinem letzten Lauf neu sind oder wieder aufgetreten sind.",
        "Gleicht sie mit deinem Board ab, damit ein lauter Fehler einen Kommentar bekommt statt zehn neuer Issues.",
        "Legt ein brauchbares Issue an: Auswirkung, erstes und letztes Auftreten, das Release, in dem es begann, die obersten Stack-Frames und eine wahrscheinliche Ursache, klar als Vermutung gekennzeichnet.",
        "Setzt eine Priorität nach Regeln, die du schreibst, etwa: Alles, was Anmeldung oder Zahlung blockiert, ist dringend.",
        "Behebt die offensichtlichen Fälle: eine Null-Prüfung, einen fehlenden Übersetzungsschlüssel, eine falsche Weiterleitung. Er öffnet einen Pull Request mit Test und wartet aufs Review.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du die Sentry-Triage mit Claude Code oder Codex ein",
      steps: [
        {
          title: "Verbinde den MCP-Server von Sentry",
          text: "Sentry hostet einen MCP-Server unter mcp.sentry.dev mit OAuth, also gibt es nichts zu installieren und kein Token einzufügen. Füg ihn hinzu, starte den Agenten und melde dich bei Sentry an, wenn er fragt. Damit bekommt der Agent Zugriff auf Issues, Fehler, Projekte und die Seer-Analyse von Sentry.",
          code: connect,
        },
        {
          title: "Kopier die Rollenbeschreibung",
          text: "In die CLAUDE.md für Claude Code oder die AGENTS.md für Codex, im Repository, aus dem die Fehler stammen, damit er den Code hinter jedem Stack-Frame lesen kann.",
          code: brief,
        },
        {
          title: "Bring es in einen Zeitplan",
          text: "Mach die Triage zu einem wiederkehrenden Issue, zum Beispiel mit `--repeat \"weekdays at 9:00\"`, und zu einem zweiten am Nachmittag, wenn dein Fehleraufkommen das braucht.",
        },
        {
          title: "Prüf die Fixes",
          text: "Pull Requests mit Fixes gehen durch dein normales Review. Ist sich der Mitarbeiter bei Auswirkung oder Zuständigkeit unsicher, markiert er das Issue mit „Handlungsbedarf“ und fragt.",
        },
      ],
      source: { label: "Quelle: Doku zum MCP-Server von Sentry", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "Regeln, die es sicher halten",
      points: [
        "Sentry lesen, aufs Board schreiben. Lösen, Ignorieren oder Löschen in Sentry bleibt bei Menschen.",
        "Nur Produktion: Richte ihn auf deine Produktionsumgebung aus, damit er kein Rauschen aus Staging erfasst.",
        "Eine Vermutung ist eine Vermutung: Die Ursache in jedem Issue ist als Hypothese gekennzeichnet, bis jemand sie bestätigt.",
        "Keine Merges: Fixes sind Pull Requests mit Test, nie direkte Pushes.",
        "Personenbezogene Daten: Sentry-Events können Nutzerdaten enthalten; beschränk das Issue auf Anzahlen und IDs, keine E-Mail-Adressen oder IPs.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Entwickler, der den Tag mit deinen Fehlern beginnt",
      text: [
        "Triage ist ein natürliches wiederkehrendes Issue für einen KI-Softwareentwickler. Crewmark macht aus deinem Claude Code oder Codex genau diesen Mitarbeiter, mit Arbeitszeiten und einem Heartbeat.",
      ],
      steps: [
        {
          title: "Fang mit der Rolle an",
          text: "Der [KI-Softwareentwickler](/ai-employees/software-engineer) nimmt Issues von einem Board und öffnet Pull Requests.",
        },
        {
          title: "Leg die Triage als wiederkehrendes Issue an",
          text: "Er führt die Triage aus, wenn sie fällig ist, und arbeitet dann die Issues ab, die er angelegt hat.",
        },
        {
          title: "Weitere Engineering-Aufgaben",
          text: "Siehe [Claude Code für Engineering](/for/engineering) und [KI-Code-Review bei jedem Pull Request](/use-cases/pr-review).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Sentry-Fehler-Triage mit Claude Code oder Codex einrichten" },
  mid: {
    title: "Du willst neue Fehler erfasst und die kleinen behoben haben, bevor das Standup beginnt?",
    text: "Ein Crewmark-Entwickler auf deinem Claude Code oder Codex sichtet Sentry nach Zeitplan und öffnet Pull Requests mit Fixes.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Wie verbinde ich Sentry mit Claude Code?",
        a: "Führ `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp` aus, starte Claude Code und melde dich bei Sentry per OAuth an, wenn du dazu aufgefordert wirst. Sentry hostet den Server, also gibt es nichts zu installieren.",
      },
      {
        q: "Funktioniert der Sentry-MCP-Server mit Codex?",
        a: "Ja, über die mcp-remote-Brücke: `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "Kann der Agent Sentry-Issues lösen?",
        a: "Man kann es ihm erlauben, aber wir empfehlen es nicht: Lass ihn erfassen und beheben, und lass Lösen und Ignorieren bei Menschen, damit nichts aus Versehen verschwindet.",
      },
      {
        q: "Wie oft sollte die Triage laufen?",
        a: "Zweimal an Werktagen reicht für die meisten Teams; während eines Launches kannst du einen stündlichen Lauf ergänzen. Jeder Lauf verbraucht Nutzung aus deinem Agent-Plan, also lass ihn nicht alle paar Minuten laufen.",
      },
      {
        q: "Wo landen die Issues?",
        a: "Dort, wo dein Team die Arbeit verfolgt. Mit Crewmark landen sie auf demselben Board, von dem der Mitarbeiter arbeitet; ansonsten nutze den MCP-Server oder die CLI deines Trackers, etwa von Linear oder GitHub.",
      },
    ],
  },
  cta: {
    title: "Fehler erfasst, kleine behoben, bevor du deinen Kaffee hattest.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit der Dokumentation zum MCP-Server von Sentry abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Sentry, Anthropic oder OpenAI, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
