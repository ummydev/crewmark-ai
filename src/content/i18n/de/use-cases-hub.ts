import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Anwendungsfälle für KI-Mitarbeiter mit Claude Code und Codex",
    description:
      "Aufgaben, die du einem KI-Mitarbeiter mit Claude Code oder Codex übergeben kannst, nach Team, jeweils mit einer Rollenbeschreibung zum Kopieren und dem passenden Zeitplan: tägliche SEO-Berichte, wöchentliche Wettbewerber-Digests und mehr.",
  },
  breadcrumb: "Anwendungsfälle",
  hero: {
    kicker: "Anwendungsfälle",
    title: "Anwendungsfälle für KI-Mitarbeiter: Aufgaben für Claude Code und Codex",
    lead: "Jeder Anwendungsfall ist eine Aufgabe, die ein KI-Mitarbeiter nach Zeitplan erledigt: was er tut, die Rollenbeschreibung zum Kopieren in die CLAUDE.md oder AGENTS.md, den Zugriff, den er braucht, und wie du ihn startest. Sie sind nach dem Team gruppiert, dem die Arbeit meist gehört. Jeder funktioniert auch als einmaliger Prompt in Claude Code oder Codex.",
    cta: "Loslegen",
    secondary: "Anwendungsfälle ansehen",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "Nach Team",
      headers: ["Team", "Was es abgibt"],
      rows: [
        ["[Marketing](/for/marketing)", "SEO-Seiten und -Berichte, Wettbewerber-Tracking, Social-Media-Entwürfe, Funnel-Reviews"],
        ["[Engineering](/for/engineering)", "Fehler-Triage, Review von Pull Requests, von Issues zu Pull Requests, Release Notes"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Anwendungsfälle",
      headers: ["Anwendungsfall", "Team", "Wie oft"],
      rows: [
        ["[Täglicher SEO-Bericht](/use-cases/daily-seo-report)", "Marketing", "Täglich"],
        ["[Wöchentlicher Wettbewerber-Digest](/use-cases/weekly-competitor-digest)", "Marketing", "Wöchentlich"],
        ["[Sentry-Fehler-Triage](/use-cases/sentry-error-triage)", "Engineering", "Zweimal täglich"],
        ["[KI-Code-Review bei jedem PR](/use-cases/pr-review)", "Engineering", "Bei jedem PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "Was eine gute erste Aufgabe ausmacht",
      points: [
        "Sie wiederholt sich: Tägliche oder wöchentliche Arbeit macht die Einrichtung am schnellsten wett.",
        "Sie hat ein klares Ende: ein veröffentlichter Bericht, eine ausgelieferte Seite, ein verschickter Digest.",
        "Sie ist prüfbar: Du siehst in einer Minute, ob sie richtig erledigt wurde.",
        "Das letzte Wort bleibt bei dir: Veröffentlichen, Geld ausgeben und alles Öffentliche geht über einen Menschen.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Lass jede dieser Aufgaben von einem KI-Mitarbeiter erledigen",
      text: [
        "Crewmark macht aus deinem eigenen Claude Code oder Codex einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat. Wiederkehrende Aufgaben werden zu wiederkehrenden Issues auf seinem Board.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees).",
        },
        {
          title: "Leg die Aufgaben als Issues an",
          text: "Tägliche und wöchentliche Aufgaben wiederholen sich von selbst; der Mitarbeiter nimmt jede, sobald sie fällig ist.",
        },
        {
          title: "Antworte, wenn er fragt",
          text: "Wenn er eine Entscheidung braucht, markiert er das Issue mit „Handlungsbedarf“ und fragt; alles andere steht auf dem Board.",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst diese Aufgaben nach Zeitplan erledigt haben?",
    text: "Crewmark-Mitarbeiter laufen auf deinem Claude Code oder Codex und nehmen die nächste Aufgabe von einem Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was kann ein KI-Mitarbeiter tun?",
        a: "Wiederkehrende Arbeit, die er über Dateien, das Web und deine Tools erledigen kann: Berichte aus Analytics, Seiten für deine Website, Wettbewerber-Tracking, Entwürfe zur Prüfung, Triage. Er arbeitet auf ein Ziel hin und berichtet nach Zeitplan.",
      },
      {
        q: "Was sind gute Anwendungsfälle für Claude Code jenseits des Programmierens?",
        a: "Marketing ist der einfachste Einstieg: SEO-Seiten und -Berichte, Wettbewerber-Digests und Content-Entwürfe. Siehe [Claude Code für Marketing](/for/marketing); für Engineering-Aufgaben jenseits des Codeschreibens siehe [Claude Code für Engineering](/for/engineering).",
      },
      {
        q: "Funktioniert das auch mit Codex?",
        a: "Ja. Jede Rollenbeschreibung funktioniert in der AGENTS.md für Codex genauso wie in der CLAUDE.md für Claude Code.",
      },
    ],
  },
  cta: {
    title: "Wähle eine Aufgabe. Übergib sie einem KI-Mitarbeiter.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Aktualisiert am 10. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude, Claude Code und Codex sind Marken ihrer Inhaber.",
};
