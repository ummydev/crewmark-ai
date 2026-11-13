import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, läuft als PreToolUse-Hook auf Bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # wird zu Claudes Feedback
  exit 2                                               # 2 = Aktion blockieren
fi

exit 0  # keine Entscheidung: der normale Berechtigungsablauf greift`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Hooks: Events, Beispiele und Funktionsweise | Crewmark",
    description:
      "Claude Code Hooks erklärt: die Lifecycle-Events, wo Hooks hingehören, Exit-Codes und JSON-Ausgabe sowie Beispiele zum Kopieren für Benachrichtigungen, automatisches Formatieren, das Blockieren von Befehlen und Stop-Hooks.",
  },
  breadcrumb: "Anleitung zu Claude Code Hooks",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code Hooks: Events, Beispiele und wie sie funktionieren",
    lead: "Claude Code Hooks sind Befehle, die an festen Punkten einer Session automatisch laufen: bevor ein Tool läuft, nachdem eine Datei bearbeitet wurde, wenn Claude fertig ist, wenn es deine Eingabe braucht. Anders als Anweisungen in der CLAUDE.md, die Claude meistens befolgt, läuft ein Hook immer. Damit setzt du Regeln durch und automatisierst lästige Routinearbeit. Diese Anleitung zeigt die Events, wo Hooks konfiguriert werden, wie Exit-Codes und JSON steuern, was passiert, vier sofort nutzbare Beispiele und die neueren Hook-Typen prompt, agent und HTTP.",
    cta: "Early Access anfragen",
    secondary: "Zu den Beispielen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Hook-Events in Claude Code",
      text: [
        "Die Referenz listet mehr als dreißig Events. Das hier sind die, die die meisten Hooks nutzen; ein `matcher` beschränkt einen Hook auf bestimmte Tools, Dateien oder Quellen.",
      ],
      headers: ["Event", "Wann es auslöst", "Typischer Einsatz"],
      rows: [
        ["`SessionStart`", "Eine Session beginnt oder wird fortgesetzt", "Kontext laden, die Umgebung prüfen"],
        ["`UserPromptSubmit`", "Du schickst einen Prompt ab, bevor Claude ihn sieht", "Kontext ergänzen, heikle Prompts blockieren"],
        ["`PreToolUse`", "Bevor ein Tool-Call läuft; kann ihn blockieren", "Gefährliche Befehle blockieren, Dateien schützen"],
        ["`PermissionRequest`", "Ein Tool-Call braucht eine Berechtigungsentscheidung", "Bestimmte Anfragen automatisch erlauben oder ablehnen"],
        ["`PostToolUse`", "Nachdem ein Tool-Call erfolgreich war", "Bearbeitete Dateien formatieren, linten oder testen"],
        ["`Notification`", "Claude Code schickt eine Benachrichtigung", "Desktop-Hinweise, wenn Claude dich braucht"],
        ["`SubagentStart`, `SubagentStop`", "Ein Subagent startet oder ist fertig", "Delegierte Arbeit protokollieren oder prüfen"],
        ["`Stop`", "Claude ist mit der Antwort fertig", "Prüfen, ob die Aufgabe wirklich erledigt ist"],
        ["`PreCompact`, `PostCompact`", "Rund um die Komprimierung des Kontexts", "Wichtigen Kontext sichern oder erneut einspielen"],
        ["`FileChanged`, `CwdChanged`", "Eine beobachtete Datei oder das Arbeitsverzeichnis ändert sich", "Umgebung neu laden, Dateien neu formatieren"],
        ["`SessionEnd`", "Die Session endet", "Aufräumen, ein Log schreiben"],
      ],
    },
    {
      kind: "table",
      title: "Wo Hooks hingehören",
      headers: ["Ort", "Geltungsbereich", "Geteilt"],
      rows: [
        ["`~/.claude/settings.json`", "Alle deine Projekte", "Nein"],
        ["`.claude/settings.json`", "Ein Projekt", "Ja, committen"],
        ["`.claude/settings.local.json`", "Ein Projekt", "Nein, per gitignore ausgeschlossen"],
        ["Verwaltete Richtlinieneinstellungen", "Die ganze Organisation", "Vom Admin gesteuert"],
        ["`hooks/hooks.json` eines Plugins", "Solange das Plugin aktiviert ist", "Ja, mit dem Plugin"],
        ["Frontmatter eines Skills oder Subagents", "Sobald der Skill aufgerufen wird oder solange der Subagent läuft", "Ja, in der Datei"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Beispiele für Claude Code Hooks, Schritt für Schritt",
      text: [
        "Füge jeden Block unter dem Schlüssel `hooks` einer Settings-Datei ein; hat die Datei schon ein `hooks`-Objekt, ergänze das Event als weiteren Schlüssel daneben, statt es zu ersetzen. Führe `/hooks` aus, um zu prüfen, ob Claude Code den Hook geladen hat. Du kannst Claude auch bitten, den Hook für dich zu schreiben.",
      ],
      steps: [
        {
          title: "Lass dich per Desktop-Benachrichtigung rufen, wenn Claude dich braucht",
          text: "Ein `Notification`-Hook in `~/.claude/settings.json`. Dieser nutzt `osascript` unter macOS; unter Linux nimmst du `notify-send`, unter Windows PowerShell.",
          code: notify,
        },
        {
          title: "Formatiere jede Datei automatisch, die Claude bearbeitet",
          text: "Ein `PostToolUse`-Hook mit dem Matcher `Edit|Write` liest mit `jq` den bearbeiteten Pfad aus dem JSON auf stdin und lässt Prettier darüber laufen. Leg ihn in `.claude/settings.json` ab, damit das ganze Team ihn nutzt.",
          code: format,
        },
        {
          title: "Blockiere einen gefährlichen Befehl",
          text: "Ein `PreToolUse`-Hook auf `Bash` führt dieses Skript aus. Exit-Code 2 blockiert den Aufruf, und was du nach stderr schreibst, wird zu Claudes Feedback, damit es umsteuern kann. Exit 0 heißt keine Entscheidung, die normalen Berechtigungen gelten also weiter.",
          code: block,
        },
        {
          title: "Lass Claude weiterarbeiten, bis die Aufgabe erledigt ist",
          text: "Ein `Stop`-Hook vom Typ `prompt` fragt ein Modell, ob alles fertig ist. Antwortet es mit `ok: false`, arbeitet Claude weiter, mit dem `reason` als nächster Anweisung. Das ist das klassische Beispiel für einen Stop-Hook.",
          code: stop,
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "Wie Hooks entscheiden, was passiert",
      points: [
        "Eingabe: Jeder Hook bekommt das Event als JSON auf stdin, etwa den Tool-Namen und `tool_input`, die Session-ID und `cwd`.",
        "Exit 0: kein Einwand. Bei einigen Events, etwa `SessionStart` und `UserPromptSubmit`, wird einfacher stdout-Text in Claudes Kontext aufgenommen.",
        "Exit 2: blockieren, sofern das Event es zulässt. Stderr geht je nach Event an Claude oder an dich.",
        "JSON auf stdout: feinere Steuerung, etwa `hookSpecificOutput` mit einer Berechtigungsentscheidung, `updatedInput`, um die Eingabe eines Tools umzuschreiben, oder `additionalContext`.",
        "Andere Exit-Codes: meist ein nicht blockierender Fehler, außer der Hook setzt `onFailure: \"block\"`.",
        "Passende Hooks für dasselbe Event laufen parallel.",
      ],
    },
    {
      kind: "table",
      title: "Command-, Prompt-, Agent- und HTTP-Hooks",
      headers: ["Typ", "Was läuft", "Standard-Timeout"],
      rows: [
        ["`command`", "Ein Shell-Befehl", "10 Minuten"],
        ["`http`", "Ein POST des Event-JSON an eine URL; der Response-Body wirkt wie die Ausgabe eines Befehls", "10 Minuten"],
        ["`mcp_tool`", "Ein Tool auf einem konfigurierten MCP-Server", "10 Minuten"],
        ["`prompt`", "Ein einzelner Modellaufruf, der mit `ok` antwortet oder nicht", "30 Sekunden"],
        ["`agent`", "Ein Subagent, der vor der Entscheidung Dateien lesen und Tools ausführen kann (experimentell)", "60 Sekunden"],
      ],
    },
    {
      kind: "text",
      title: "Hooks vs. Skills vs. CLAUDE.md und weitere Stolperfallen",
      points: [
        "CLAUDE.md und [Skills](/blog/claude-code-skills) sind Anweisungen, die Claude meistens befolgt; Hooks laufen immer. Alles, was nie übersprungen werden darf, gehört in einen Hook.",
        "`PostToolUse` kann eine bereits ausgeführte Aktion nicht rückgängig machen; nutze `PreToolUse`, um sie zu verhindern.",
        "`Stop` löst jedes Mal aus, wenn Claude eine Antwort beendet, nicht nur am Ende einer Aufgabe, und nicht, wenn der Nutzer unterbricht.",
        "Hooks können selbst keine Slash-Commands ausführen und keine Tools aufrufen; sie antworten nur über Exit-Codes, stdout, stderr oder JSON.",
        "`\"disableAllHooks\": true` schaltet Hooks ab; verwaltete Hooks laufen trotzdem, außer die verwalteten Einstellungen schalten sie ebenfalls ab.",
        "Hooks gelten nur für deine eigene Claude-Code-Installation. Organisationsweite Prüfungen für alle Claude-Produkte sind ein anderes Feature: [Claude Inference Hooks](/blog/claude-inference-hooks).",
        "Ein PreToolUse-Hook, der Testausgaben filtert, ist außerdem einer der besten Wege, den [Token-Verbrauch zu senken](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Hooks halten Claude Code in der Spur. Crewmark hält es am Arbeiten.",
      text: [
        "Hooks machen einen unbeaufsichtigten Agenten erst sicher: Formatierung, Tests und Leitplanken laufen jedes Mal. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt, mit den Hooks deines Projekts an Ort und Stelle.",
      ],
      steps: [
        {
          title: "Committe deine Hooks",
          text: "Hooks aus `.claude/settings.json` laden in der Session des Mitarbeiters genau wie in deiner, seine Änderungen werden also formatiert und riskante Befehle blockiert.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Beantworte nur, was dich braucht",
          text: "Er kommentiert seine Issues und schreibt dir, wenn er eine Entscheidung braucht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Hooks zu Claude Code hinzufügen" },
  mid: {
    title: "Deine Hooks laufen jedes Mal. Dein Agent auch?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Code Hooks",
    items: [
      {
        q: "Was sind Claude Code Hooks?",
        a: "Selbst definierte Befehle, HTTP-Aufrufe oder Modellprüfungen, die Claude Code bei Lifecycle-Events automatisch ausführt, etwa bevor ein Tool läuft oder wenn Claude fertig ist. Sie geben dir deterministische Kontrolle, statt darauf zu setzen, dass Claude sich an eine Anweisung erinnert.",
      },
      {
        q: "Wo konfiguriere ich Claude Code Hooks?",
        a: "Unter `hooks` in `~/.claude/settings.json` (alle Projekte), `.claude/settings.json` (mit dem Team geteilt) oder `.claude/settings.local.json` (nur für dich). Auch Plugins, Skills und Subagents können Hooks mitbringen. Führe `/hooks` aus, um zu sehen, was geladen ist.",
      },
      {
        q: "Wie blockiere ich einen Befehl mit einem Hook?",
        a: "Nutze einen `PreToolUse`-Hook mit dem Matcher `Bash`. Lies den Befehl aus dem JSON auf stdin und beende das Skript mit Exit-Code 2 und einer Begründung auf stderr, um ihn zu blockieren; Claude sieht die Begründung und passt sich an.",
      },
      {
        q: "Was ist ein Stop-Hook?",
        a: "Ein Hook auf das Event `Stop`, das auslöst, wenn Claude mit einer Antwort fertig ist. Ein Stop-Hook vom Typ prompt kann prüfen, ob die Aufgabe erledigt ist, und Claude andernfalls mit einer Begründung zurück an die Arbeit schicken.",
      },
      {
        q: "Hooks vs. Skills: Was ist der Unterschied?",
        a: "Skills sind Anweisungen und Dateien, die Claude lädt, wenn sie relevant sind, und meistens befolgt. Hooks sind Code, den Claude Code jedes Mal ausführt, wenn ein Event auslöst, egal wie Claude entscheidet.",
      },
      {
        q: "Warum löst mein Hook nicht aus?",
        a: "Prüfe, ob er in `/hooks` auftaucht, ob Event-Name und Matcher exakt richtig geschrieben sind, ob das Skript ausführbar ist und ob Ausgaben deines Shell-Profils sein JSON nicht verfälschen. Starte Claude Code mit einem Debug-Log, um zu sehen, was jeder Hook getan hat.",
      },
      {
        q: "Sind Claude Code Hooks dasselbe wie Inference Hooks?",
        a: "Nein. Claude Code Hooks laufen auf deinem Rechner für deine Sessions. Inference Hooks sind ein Feature von Claude Enterprise, das jeden Prompt der Organisation an einen Sicherheitsserver schickt, bevor Claude läuft.",
      },
    ],
  },
  cta: {
    title: "Leitplanken in Hooks, Arbeit von einem Board.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (Hooks-Anleitung und Hooks-Referenz) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
