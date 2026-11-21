import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Einen Mac wach halten, während Claude Code arbeitet (er darf wieder schlafen, sobald claude beendet ist)
caffeinate -i claude --permission-mode auto

# Oder die Aufgabe an eine Cloud-Session übergeben, die bei zugeklapptem Laptop weiterläuft
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# Den nächsten Schritt von jedem Rechner aus in diese Cloud-Session einreihen
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Kann Claude Code 24/7 laufen? Über Nacht und unbeaufsichtigt",
    description:
      "Wie du Claude Code über Nacht oder rund um die Uhr arbeiten lässt: Permission Modes, /goal, den Rechner wach halten, Cloud-Sessions, geplante Aufgaben, Nutzungslimits und was es stoppt.",
  },
  breadcrumb: "Claude Code rund um die Uhr",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Kann Claude Code 24/7 laufen? So lässt du es über Nacht und unbeaufsichtigt arbeiten",
    lead: "Ja, mit Grenzen. Claude Code hat keine eigene Uhr, die es stoppt, aber vier Dinge tun es: Die Session endet oder der Computer schläft ein, es bleibt an einer Berechtigungsabfrage stehen, es erreicht das Nutzungslimit deines Plans, oder es ist fertig und hat nichts mehr zu tun. Für alles gibt es eine Lösung. Dieser Guide zeigt die Wege, Claude Code arbeiten zu lassen, während du schläfst, was jeder davon nicht kann und wie du ihm eine feste Nachtschicht gibst.",
    cta: "Loslegen",
    secondary: "Über Nacht laufen lassen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Wege, Claude Code am Laufen zu halten",
      text: [
        "Manche führen ein Gespräch weiter, sodass Claude sich erinnert, was es getan hat; andere starten jedes Mal eine neue Session mit demselben Prompt.",
      ],
      headers: ["Option", "Computer darf aus sein", "Dasselbe Gespräch", "Wann es stoppt", "Ideal für"],
      rows: [
        ["Cloud-Session (`claude --cloud`, claude.ai/code)", "Ja", "Ja", "Stoppt nach einer Weile ohne Aktivität; die VM wird freigegeben", "Eine lange Aufgabe, die du vor dem Schlafengehen abgibst"],
        ["Geplante Cloud-Aufgaben (`/schedule`)", "Ja", "Nein, jeder Lauf ist eine neue Session", "Höchstens stündlich; Pro, Max, Ultra, Team oder Enterprise", "Wiederkehrende Jobs, die nur ein Repository brauchen"],
        ["Geplante Aufgaben in der Desktop-App", "Nein: App offen, Computer wach", "Nein, jeder Lauf ist eine neue Session", "Nur solange der Rechner wach ist", "Nächtliche Jobs an lokalen Dateien"],
        ["`/loop`", "Nein: Session offen", "Ja", "Endet mit der Session; wiederkehrende Loops laufen nach 7 Tagen ab", "CI oder ein Deploy ein paar Stunden lang beobachten"],
        ["cron + `claude -p --resume`", "Nein", "Ja", "Dein Cron-Rhythmus; du verdrahtest es selbst", "Ein Agent, der eine TODO-Datei abarbeitet"],
        ["Crewmark-Heartbeat", "Nein", "Ja", "Arbeitszeiten, die du festlegst, auch über Mitternacht hinaus", "Ein fester Job vom Board, Issue für Issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So lässt du Claude Code über Nacht laufen",
      steps: [
        {
          title: "Wähl einen Permission Mode, der nicht bei jeder Abfrage stoppt",
          text: "Eine Session, die um 2 Uhr nachts an einer Berechtigungsabfrage wartet, tut bis zum Morgen nichts. Der Auto-Mode führt Aktionen mit Sicherheitsprüfungen im Hintergrund aus, statt zu fragen. `bypassPermissions`, das jede Prüfung überspringt, hebst du dir für isolierte Container und VMs auf.",
          code: overnight,
        },
        {
          title: "Gib ihm eine Ziellinie",
          text: "`/goal` nimmt eine Bedingung, etwa eine Testsuite, die durchläuft; nach jedem Turn prüft Claude sie und startet von selbst einen weiteren Turn, bis sie erfüllt ist. Für eine längere Nacht leg eine TODO-Datei oder einen schriftlichen Plan ins Repository und sag ihm, es soll sie der Reihe nach abarbeiten.",
        },
        {
          title: "Halt den Rechner wach oder verleg die Arbeit in die Cloud",
          text: "Eine lokale Session braucht einen eingeschalteten Computer und einen laufenden claude-Prozess. Auf einem Mac hält `caffeinate -i` ihn wach, solange Claude Code läuft; auf einem Server lässt du claude in tmux oder screen laufen, damit es ein geschlossenes Terminal übersteht. Eine Cloud-Session läuft weiter, nachdem du den Laptop zuklappst.",
        },
        {
          title: "Plan die Nutzungslimits ein",
          text: "Claude-Pläne nutzen ein rollierendes 5-Stunden-Fenster plus ein Wochenlimit, geteilt mit dem Chat. Max bekommt das 5-Fache der Nutzung von Pro; Ultra pro Woche das 10-Fache von Pro und, bei verifizierten Konten, kein 5-Stunden-Limit. Greift das Limit mitten in der Aufgabe, darf Claude Code den aktuellen Schritt eventuell abschließen (bei Pro einmal pro Woche, bei Max jedes Mal). Mit Usage Credits oder einem API-Key läuft es weiter. Siehe, [wie du den Token-Verbrauch von Claude Code senkst](/blog/reduce-claude-code-token-usage).",
        },
        {
          title: "Schau vom Handy aus rein",
          text: "Mit Remote Control siehst du eine lokale Session in der Claude-App oder im Browser, und Cloud-Sessions erscheinen im Code-Tab der App. Hat Claude über Nacht eine Frage gestellt, antwortest du nach dem Aufwachen, und es macht weiter. Siehe [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
      source: { label: "Quelle: Claude-Code-Doku von Anthropic, Cloud-Sessions", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Was Claude Code über Nacht stoppt",
      points: [
        "Das Terminal schließt sich oder der Computer schläft ein. Eine Remote-Control-Session verbindet sich wieder, sobald der Rechner wach ist, aber solange er schläft, passiert keine Arbeit.",
        "Eine Berechtigungsabfrage, die niemand beantwortet. Der Auto-Mode vermeidet die meisten.",
        "Das Nutzungslimit. Die Session wartet, bis das Fenster zurückgesetzt wird, es sei denn, du legst Credits oder einen API-Key nach.",
        "Inaktivität in der Cloud. Cloud-Sessions stoppen nach einer Weile ohne Aktivität, auch während sie darauf warten, dass du einen MCP-Tool-Aufruf genehmigst. Beim erneuten Öffnen ist das Gespräch wieder da, aber nicht Shell-Befehle, Subagents oder ein `/loop`, die noch liefen.",
        "Keine Arbeit mehr. Sobald das Ziel erreicht oder die TODO-Liste leer ist, hört es auf, und genau das willst du.",
        "Eine sehr lange Session. Claude Code komprimiert den Kontext automatisch, frühe Details überleben also nur als Zusammenfassung. Halt den Plan in einer Datei fest, nicht nur im Chat.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Claude Code eine Nachtschicht",
      text: [
        "Die ganze Nacht laufen zu lassen ist leicht angefangen und schwer durchzuhalten: Jemand muss jeden Morgen die nächste Aufgabe einreihen. Crewmark macht aus einem Claude-Code-Gespräch einen KI-Mitarbeiter mit Arbeitszeiten und Heartbeat, der sich selbstständig weiter Arbeit vom Board nimmt.",
      ],
      steps: [
        {
          title: "Leg die Arbeitszeiten fest",
          text: "Arbeitszeiten können über Mitternacht gehen, eine Nachtschicht von 22:00 bis 07:00 funktioniert also, nur werktags oder jeden Tag. Außerhalb seiner Zeiten schläft der Mitarbeiter und rührt deinen Plan nicht an.",
        },
        {
          title: "Wähl den Heartbeat",
          text: "Während seiner Schicht weckt die crewmark CLI dasselbe Gespräch alle 15, 30, 60, 120 oder 240 Minuten, damit es das nächste Issue nimmt. War das Gespräch geschlossen, setzt Crewmark es mit `claude -p --resume` im Auto-Mode fort. Dein Computer muss an bleiben.",
        },
        {
          title: "Lies morgens das Board",
          text: "Jedes Issue hat seine Kommentare und sein Aktivitätsprotokoll, und alles, was dich braucht, kommt als Nachricht, auf die der Mitarbeiter wartet. Siehe, [wie du Claude Code proaktiv machst](/proactive-claude-code), und lies, [was ein KI-Mitarbeiter ist](/ai-employees); für Codex lies [lang laufende Aufgaben in Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code über Nacht laufen lassen" },
  mid: {
    title: "Soll Claude Code jede Nacht die Nachtschicht übernehmen?",
    text: "Crewmark weckt dein Claude Code während der festgelegten Zeiten per Heartbeat und gibt ihm das nächste Issue vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code rund um die Uhr",
    items: [
      {
        q: "Kann Claude Code 24/7 laufen?",
        a: "Ja, solange etwas es am Laufen hält: eine Cloud-Session oder geplante Cloud-Aufgabe bei ausgeschaltetem Computer oder eine lokale Session auf einem Rechner, der wach bleibt, mit einem Permission Mode, der nicht für Abfragen stoppt. Nutzungslimits gelten weiterhin, Arbeit rund um die Uhr braucht also einen Plan mit Spielraum oder Credits.",
      },
      {
        q: "Kann ich Claude Code über Nacht laufen lassen?",
        a: "Ja. Starte es im Auto-Mode mit einem klaren Ziel oder einer TODO-Datei, halt den Rechner wach (oder nutz `claude --cloud`) und prüf das Ergebnis am Morgen. Alles, was dich braucht, wartet als Frage auf dich.",
      },
      {
        q: "Läuft Claude Code weiter, wenn ich den Laptop zuklappe?",
        a: "Eine lokale Session nicht: Sie braucht einen eingeschalteten Computer und einen laufenden claude-Prozess, und eine Remote-Control-Session endet, wenn ihr Terminal geschlossen wird. Eine Cloud-Session läuft weiter, und du kannst sie in der Claude-App verfolgen.",
      },
      {
        q: "Gibt es in Claude Code einen unbeaufsichtigten Modus?",
        a: "Nicht unter diesem Namen. Unbeaufsichtigte Läufe kombinieren einen Permission Mode, der nicht fragt (Auto-Mode oder `bypassPermissions` in einem isolierten Container), mit dem Headless-Mode `claude -p` oder einer Cloud-Session.",
      },
      {
        q: "Stößt Claude Code über Nacht an mein Nutzungslimit?",
        a: "Das kann passieren. Alle Claude-Pläne teilen ein 5-Stunden-Fenster und ein Wochenlimit zwischen Chat und Claude Code; Ultra verzichtet bei verifizierten Konten auf das 5-Stunden-Limit. Verteil die Arbeit mit einem Heartbeat oder Zeitplan über mehrere Fenster statt in einem langen Schub.",
      },
      {
        q: "Ist es sicher, Claude Code unbeaufsichtigt laufen zu lassen?",
        a: "Nutz auf deinem eigenen Rechner den Auto-Mode statt `bypassPermissions`, arbeite in einem Repository, in dem jede Änderung durch ein Review geht, und halt Produktionszugangsdaten außer Reichweite. Cloud-Sessions laufen standardmäßig in isolierten VMs mit eingeschränktem Netzwerkzugriff.",
      },
    ],
  },
  cta: {
    title: "Gib Claude Code eine Nachtschicht.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Geprüft anhand der Claude-Code-Doku (Cloud-Sessions, geplante Aufgaben, Remote Control) am 8. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden oder von Anthropic unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
