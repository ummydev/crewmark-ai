import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code: einen Pull Request reviewen und Inline-Kommentare posten
/code-review 142 --comment

# Codex: in einem PR-Kommentar auf GitHub um ein Review bitten
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- Weise auf fehlende Tests für neue Verzweigungen in billing/ und auth/ hin.
- Jede SQL-Migration braucht ein Rollback; sag es, wenn keins da ist.
- Kommentiere keine Formatierung; das übernimmt der Linter.
- Nichts freigeben und keine Änderungen anfordern: nur kommentieren.`;

export const copy: GuideCopy = {
  meta: {
    title: "KI-Code-Review mit Claude Code und Codex bei jedem PR",
    description:
      "Drei Wege zum KI-Code-Review von Pull Requests mit Claude Code und Codex: /code-review mit Inline-Kommentaren, @codex review und automatische Reviews, und ein KI-Mitarbeiter, der jeden PR auf dem Board reviewt. Befehle, Review-Regeln zum Kopieren und Grenzen.",
  },
  breadcrumb: "KI-Code-Review bei jedem PR",
  parent: { name: "Anwendungsfälle", href: "/use-cases" },
  hero: {
    kicker: "Anwendungsfälle · Engineering",
    title: "KI-Code-Review bei jedem Pull Request mit Claude Code und Codex",
    lead: "Sowohl Claude Code als auch Codex können einen Pull Request reviewen und Inline-Kommentare auf GitHub hinterlassen. Du kannst ein Review selbst starten, es automatisch starten lassen oder einem KI-Mitarbeiter die Aufgabe geben, alles zu reviewen, was auf dem Board landet. Diese Seite zeigt die Befehle für jeden Weg, die Review-Regeln, die es sich aufzuschreiben lohnt, was die Reviewer nicht tun und wie das Review zur festen Aufgabe wird statt zu etwas, an das man denken muss.",
    cta: "Loslegen",
    secondary: "Die Befehle",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "Drei Wege zum KI-Review eines Pull Requests",
      headers: ["Option", "Wie es startet", "Wo es läuft", "Gut für"],
      rows: [
        ["Claude Code `/code-review`", "Du startest es mit einer PR-Nummer; `--comment` postet Inline-Kommentare", "Deine eigene Claude-Code-Session, jeder Plan", "Deinen Branch oder einen PR vor dem Merge reviewen"],
        ["Claude Code Review (verwaltet)", "Ein Owner der Organisation schaltet es für Repositorys ein; jeder kann `@claude review` kommentieren", "Der Dienst von Anthropic", "Teams mit Claude-Plänen, die Reviews auf Anfrage wollen"],
        ["Codex-Code-Review", "`@codex review` in einem PR-Kommentar oder Automatic review in den Codex-Einstellungen", "Die Cloud von OpenAI", "Teams mit ChatGPT-Plänen; markiert P0- und P1-Probleme auf GitHub"],
        ["Ein KI-Mitarbeiter", "Ein Review-Issue auf dem Board oder jeder PR, der ihm zugewiesen ist", "Dein eigenes Claude Code oder Codex, per Heartbeat", "Eine feste Aufgabe: jeder PR reviewt, Folgearbeiten verfolgt"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So reviewst du einen Pull Request mit Claude Code oder Codex",
      steps: [
        {
          title: "Claude Code: /code-review ausführen",
          text: "In einer Claude-Code-Session findet `/code-review` Bugs in den Änderungen deines Branches; gib eine PR-Nummer an, um diesen Pull Request zu reviewen, und `--comment`, um die Ergebnisse als Inline-Kommentare auf GitHub zu posten. `--fix` wendet sie stattdessen auf dein Arbeitsverzeichnis an. `/review` ist ein Alias.",
          code: commands,
        },
        {
          title: "Codex: @codex review erwähnen",
          text: "Schreib in einem Kommentar zum Pull Request `@codex review`; Codex reagiert mit 👀 und postet ein Review. Häng einen Schwerpunkt an, wenn du einen willst. Für Reviews ohne Nachfrage schaltest du Automatic review in den Codex-Einstellungen ein und wählst den Auslöser.",
        },
        {
          title: "Schreib deine Review-Regeln auf",
          text: "Codex liest einen Abschnitt `## Code Review Rules` aus der AGENTS.md, die dem Code am nächsten liegt. Für Claude Code legst du dieselben Regeln in die CLAUDE.md. Regeln machen Reviews einheitlich und halten sie von Themen fern, die dein Linter schon abdeckt.",
          code: rules,
        },
      ],
      source: { label: "Quelle: Claude-Code-Doku, lokales Review mit /code-review", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "Was KI-Review nicht tut",
      points: [
        "Freigeben oder blockieren: Claudes verwaltetes Code Review gibt einen Pull Request nie frei und blockiert ihn nie, und eine gute Rollenbeschreibung sagt einem Mitarbeiter, dass er nur kommentiert.",
        "Den Menschen ersetzen, dem die Änderung gehört: Es findet Bugs und fehlende Tests; Produkt- und Designentscheidungen bleiben bei Menschen.",
        "Alles sehen: Codex auf GitHub markiert nur P0- und P1-Probleme, damit die Kommentare fokussiert bleiben. Bitte um einen bestimmten Schwerpunkt, wenn du einen brauchst.",
        "Nichts kosten: Reviews verbrauchen die Nutzung deines Plans. Reviewe auf Anfrage oder bei Ready for review statt bei jedem Push.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Mach das Review zu jemandes Job",
      text: [
        "Befehle reviewen, wenn jemand daran denkt, sie auszuführen. Ein KI-Mitarbeiter reviewt, weil es sein Job ist: Crewmark macht aus deinem Claude Code oder Codex einen Entwickler, der per Heartbeat aufwacht, Pull Requests übernimmt, die auf ein Review warten, und sie kommentiert.",
      ],
      steps: [
        {
          title: "Fang mit der Rolle an",
          text: "Der [KI-Softwareentwickler](/ai-employees/software-engineer), mit deinen Review-Regeln in seiner Rollenbeschreibung.",
        },
        {
          title: "Leite Reviews aufs Board",
          text: "Weis ihm Review-Issues zu oder leg ein wiederkehrendes Issue an, das jeden offenen, als bereit markierten Pull Request reviewt.",
        },
        {
          title: "Weitere Engineering-Aufgaben",
          text: "Siehe [Claude Code für Engineering](/for/engineering) und [Sentry-Fehler-Triage](/use-cases/sentry-error-triage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen Pull Request mit Claude Code oder Codex reviewen" },
  mid: {
    title: "Du willst jeden Pull Request reviewt haben, ohne zu fragen?",
    text: "Ein Crewmark-Entwickler auf deinem Claude Code oder Codex reviewt per Heartbeat, was wartet.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Wie reviewe ich einen Pull Request mit Claude Code?",
        a: "Führ in einer Claude-Code-Session `/code-review <PR number> --comment` aus, um die Ergebnisse als Inline-Kommentare auf GitHub zu posten. Ohne `--comment` berichtet es in der Session; `--fix` wendet die Fixes lokal an.",
      },
      {
        q: "Ist /review in Claude Code dasselbe wie /code-review?",
        a: "Die Doku von Claude Code führt `/review` als Alias von `/code-review`.",
      },
      {
        q: "Wie bringe ich Codex dazu, einen Pull Request zu reviewen?",
        a: "Kommentiere `@codex review` im Pull Request oder schalte Automatic review in den Codex-Einstellungen ein, damit Reviews bei dem Auslöser starten, den du wählst. Code Review muss für das Repository aktiviert sein.",
      },
      {
        q: "Kann ich dem KI-Reviewer die Regeln unseres Teams mitgeben?",
        a: "Ja. Codex liest einen Abschnitt `## Code Review Rules` in der AGENTS.md; für Claude Code legst du dieselben Regeln in die CLAUDE.md.",
      },
      {
        q: "Gibt die KI Pull Requests frei oder merged sie?",
        a: "Claudes verwaltetes Code Review gibt nie frei und blockiert nie, und das Mergen solltest du bei Menschen lassen. Die Rollenbeschreibung eines KI-Mitarbeiters sollte sagen, dass er nur kommentiert.",
      },
    ],
  },
  cta: {
    title: "Jeder Pull Request reviewt, ohne dass jemand daran denken muss.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit der Doku zum Code Review von Claude Code und der Doku zum Codex-Code-Review von OpenAI abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI oder GitHub, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
