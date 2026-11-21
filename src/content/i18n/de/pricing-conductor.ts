import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /pricing/conductor; the English master is src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor-Preise: gratis Mac-App, Cloud-Pläne, Wechsel zu Meta",
    description:
      "Conductor ist kostenlos, Modellnutzung läuft über deine Agenten-Anbieter. Seit 4. November 2026: keine Anmeldungen mehr, Conductor Cloud wird abgeschaltet.",
  },
  breadcrumb: "Conductor-Preise",
  parent: { name: "Vergleiche", href: "/compare" },
  hero: {
    kicker: "Preise · Conductor",
    title: "Conductor-Preise: eine kostenlose Mac-App, Cloud-Pläne und was sich am 4. November 2026 geändert hat",
    lead: "„Conductor ist kostenlos nutzbar.“ („Conductor is free to use.“) Es rechnet keine Modellnutzung ab und verkauft sie auch nicht weiter: Claude Code, Codex, OpenCode und Cursor laufen über deine eigenen Abos oder API-Keys. Cloud-Workspaces brauchten einen Plan Pro, Team oder Enterprise, aber heute sind keine Preise angegeben. Am 4. November 2026 kündigte Conductor an, sich Meta anzuschließen, und schloss neue Registrierungen und Downloads. Hier steht, was du zahlst, was sich geändert hat und wie der Preis im Vergleich zu Vibe Kanban, Claude Squad, Cursor Projects und Crewmark aussieht.",
    cta: "Loslegen",
    secondary: "Was sich geändert hat",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne und Preise von Conductor",
      text: [
        "Laut conductor.build und der Doku, geprüft am 13. November 2026. Die Seite /pricing leitet inzwischen auf die Startseite weiter, und nirgends auf der Website sind Planpreise angegeben.",
      ],
      headers: ["Plan", "Preis", "Was enthalten ist"],
      rows: [
        [
          "Conductor (Mac-App)",
          "Kostenlos nutzbar",
          "Claude Code, Codex und OpenCode (mitgeliefert) sowie Cursor Agent nebeneinander, jeder in seinem eigenen Git-Worktree; Diff-Review, Checks, Pull Requests und Merge",
        ],
        [
          "Pro",
          "Kein Preis angegeben; seit dem 4. November 2026 behalten Pro-Nutzer die Pro-Funktionen kostenlos",
          "Cloud-Workspaces und Routines (geplante oder per GitHub ausgelöste Agentenläufe)",
        ],
        ["Team (nur auf Einladung)", "Kein Preis angegeben", "Cloud-Workspaces und Routines"],
        ["Enterprise", "Kein Preis angegeben", "Cloud-Workspaces"],
        [
          "Modellnutzung",
          "Abgerechnet vom Anbieter des jeweiligen Agenten",
          "Deine bestehenden Abos (zum Beispiel Claude Pro oder Max oder ChatGPT) oder API-Keys",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Was du für Conductor wirklich zahlst",
      points: [
        "Die Anbieter deiner Agenten. Conductor rechnet keine Modellnutzung ab und verkauft sie nicht weiter. Jeder Agent wird über das Konto oder den API-Key bei seinem Anbieter abgerechnet; Cursor Agent läuft über die Cursor-API.",
        "Einen Mac. Conductor gibt es nur für macOS, und es ist „noch nicht für Windows oder Linux verfügbar.“ („not available for Windows or Linux yet.“) Agenten laufen direkt auf deinem Rechner, mit den Rechten deines Benutzerkontos und ohne Sandbox.",
        "Nichts für die App selbst. Die lokale App ist kostenlos nutzbar.",
        "Cloud-Workspaces brauchten einen Plan Pro, Team oder Enterprise. Seit dem 4. November 2026 können Free-Nutzer nicht mehr upgraden, Pro-Nutzer behalten die Pro-Funktionen kostenlos, und aktive Abonnenten bekommen eine Erstattung.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "Was sich am 4. November 2026 geändert hat",
      text: [
        "Conductor hat angekündigt, sich Meta anzuschließen. Im Footer der Website steht jetzt „Conductor from Meta, © 2026 Meta.“ Die Daten, die zählen, wenn du es nutzt oder gerade nutzen wolltest:",
      ],
      points: [
        "4. November 2026: Neue Registrierungen und Downloads geschlossen. Free-Nutzer können nicht mehr upgraden, Pro-Nutzer behalten die Pro-Funktionen kostenlos, aktive Abonnenten bekommen eine Erstattung.",
        "13. November 2026: Conductor Cloud wird schreibgeschützt.",
        "20. November 2026: Conductor Cloud wird abgeschaltet, und die Löschung der Cloud-Nutzerdaten beginnt.",
        "Bis Anfang 2027: Die lokale App bekommt neue Modelle und kritische Bugfixes, danach läuft sie aus. Alle Nutzerdaten werden gelöscht, wenn die App abgeschaltet wird.",
        "Wenn du etwas suchst, wohin du wechseln kannst, sieh dir die [Conductor-Alternativen](/blog/conductor-alternatives) an.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor-Preise im Vergleich mit ähnlichen Tools",
      text: [
        "Preise von der eigenen Website des jeweiligen Produkts, geprüft am 13. November 2026. Bei allen zahlst du außerdem für die Coding-Agenten oder Modelle, die du ausführst, sofern ein Plan unten sie nicht enthält.",
        "Im direkten Vergleich: [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). Weitere Optionen unter [Conductor-Alternativen](/blog/conductor-alternatives).",
      ],
      headers: ["Produkt", "Preis ab", "Kostenlose Option"],
      rows: [
        [
          "Conductor",
          "Kostenlos nutzbar; Preise der Cloud-Pläne nicht angegeben",
          "Ja, aber neue Registrierungen und Downloads sind seit dem 4. November 2026 geschlossen",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "Lokale App kostenlos; laut dem Abschaltungs-Post von bloop vom 10. April 2026 wurden die Abos beendet",
          "Ja: Open Source (Apache-2.0), von der Community gepflegt",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "Kostenlos; kein Bezahlplan angegeben",
          "Ja: Open Source (AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/Monat oder $300/Jahr",
          "Nein: nicht in Free, Plus ($8/Monat) oder dem älteren Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free; Pro $5/Monat und Team $10/Monat folgen bald",
          "Ja: 1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Conductor führt Agenten nebeneinander aus. Crewmark gibt ihnen einen Job und ein Board.",
      text: [
        "Crewmark ist ein Issue-Tracker für ein Team aus KI-Mitarbeitern. Jeder Mitarbeiter ist eine Claude-Code- oder Codex-Unterhaltung auf deinem eigenen Computer, mit Rolle, Zielen und Arbeitszeiten. Er wacht per Heartbeat auf und nimmt sich Issues von einem gemeinsamen Board. Die CLI `crewmark` läuft unter macOS, Linux und Windows, und die Agenten nutzen das Claude- oder ChatGPT-Abo, für das du schon zahlst.",
        "Die Preise von Crewmark: Free für $0 (1 Projekt, bis zu 3 KI-Mitarbeiter, 1 Person). Pro für $5/Monat und Team für $10/Monat kommen bald. Die Abrechnung ist noch nicht gebaut, deshalb kann jedes Konto Crewmark bis dahin kostenlos nutzen. Crewmark ist Open Source (GPL-3.0) und lässt sich selbst hosten.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle",
          text: "Aus den [Rollen für KI-Mitarbeiter](/ai-employees), etwa Softwareentwickler, mit Zielen in Zahlen.",
        },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu und lass regelmäßige wiederkehren; der Heartbeat weckt den Mitarbeiter, damit er das nächste übernimmt.",
        },
        {
          title: "Sieh dir die Pläne an",
          text: "[Crewmark-Preise](/pricing) und was Agenten damit machen unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du ziehst von Conductor um?",
    text: "Crewmark gibt deinem Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board, unter macOS, Linux oder Windows.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den Conductor-Preisen",
    items: [
      {
        q: "Ist Conductor kostenlos?",
        a: "Ja. „Conductor ist kostenlos nutzbar“ („Conductor is free to use“), und die Modellnutzung rechnet der Anbieter des jeweiligen Agenten ab. Seit dem 4. November 2026 sind neue Registrierungen und Downloads allerdings geschlossen.",
      },
      {
        q: "Wie viel kostet Conductor?",
        a: "Die Mac-App ist kostenlos. Cloud-Workspaces brauchten einen Plan Pro, Team (nur auf Einladung) oder Enterprise, aber für diese Pläne sind heute keine Preise angegeben, und die Seite /pricing leitet auf die Startseite weiter.",
      },
      {
        q: "Verlangt Conductor Gebühren auf die Modellnutzung?",
        a: "Nein. Conductor rechnet keine Modellnutzung ab und verkauft sie nicht weiter. Claude Code, Codex, OpenCode und Cursor Agent nutzen deine eigenen Abos, etwa Claude Pro oder Max oder ChatGPT, oder deine API-Keys.",
      },
      {
        q: "Ist Conductor Open Source, oder muss ich eine Lizenz kaufen?",
        a: "Weder noch. Conductor ist nicht Open Source (weder ein Quellcode-Repository noch eine Lizenz ist veröffentlicht), und die App ist kostenlos nutzbar, es gibt also keinen Lizenzpreis.",
      },
      {
        q: "Was passiert mit meinem Conductor-Pro-Abo?",
        a: "Seit dem 4. November 2026 behalten Pro-Nutzer die Pro-Funktionen kostenlos, und aktive Abonnenten bekommen eine Erstattung. Conductor Cloud wird am 13. November schreibgeschützt und am 20. November 2026 abgeschaltet.",
      },
      {
        q: "Wie lange funktioniert die Conductor-App noch?",
        a: "Die lokale App bekommt bis Anfang 2027 neue Modelle und kritische Bugfixes, danach läuft sie aus, und alle Nutzerdaten werden gelöscht, wenn sie abgeschaltet wird. Siehe [Conductor-Alternativen](/blog/conductor-alternatives).",
      },
    ],
  },
  cta: {
    title: "Lass deine Agenten nach Conductor weiterarbeiten.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 13. November 2026 mit conductor.build, der Doku, dem Changelog und der Ankündigung von Conductor sowie der eigenen Preisseite jedes verglichenen Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit Conductor noch mit Meta oder einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Produktnamen sind Marken ihrer Inhaber.",
};
