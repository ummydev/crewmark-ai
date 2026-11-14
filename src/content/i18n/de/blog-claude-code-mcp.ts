import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Remote-HTTP-Server (empfohlen für Cloud-Dienste)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Mit Bearer-Token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Lokaler stdio-Server: alles nach -- ist der eigene Befehl des Servers
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # alle konfigurierten Server
claude mcp get notion      # Details zu einem Server
claude mcp remove notion   # entfernen (vorher claude mcp logout notion ausführen, um Tokens zu widerrufen)
claude mcp add-from-claude-desktop   # aus Claude Desktop importieren (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code MCP: Server hinzufügen, Config und .mcp.json",
    description:
      "So richtest du MCP-Server in Claude Code ein: claude mcp add für HTTP- und stdio-Server, die Scopes local, project und user, wo die Config-Datei liegt, .mcp.json mit Umgebungsvariablen, OAuth und Fehlerbehebung.",
  },
  breadcrumb: "Anleitung zu Claude Code MCP",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code MCP: Server hinzufügen und wo die Konfiguration liegt",
    lead: "MCP-Server (Model Context Protocol) verbinden Claude Code mit externen Tools und Daten, etwa Notion, GitHub, Sentry, einer Datenbank oder deiner eigenen API. Du fügst sie mit `claude mcp add` hinzu, legst fest, ob jeder nur für dich gilt oder mit dem Team geteilt wird, und danach kann Claude ihre Tools aufrufen. Diese Anleitung zeigt, wie du HTTP- und stdio-Server hinzufügst, die drei Scopes und die Config-Dateien dahinter, `.mcp.json` mit Umgebungsvariablen, die Anmeldung per OAuth und was du prüfen solltest, wenn ein Server keine Verbindung bekommt.",
    cta: "Loslegen",
    secondary: "Zur Einrichtung",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "So fügst du einen MCP-Server zu Claude Code hinzu",
      steps: [
        {
          title: "Wähle den Transport",
          text: "Nimm HTTP für entfernte, in der Cloud gehostete Server; das ist der empfohlene Transport, und Claude Code weicht auf den veralteten SSE-Transport aus, wenn ein Server nur diesen anbietet. Nimm stdio für Server, die als lokaler Prozess laufen. Bei stdio wird alles nach `--` unverändert an den Server weitergegeben.",
          code: add,
        },
        {
          title: "Wähle einen Scope",
          text: "Ohne `--scope` ist ein Server lokal: nur für dich, nur in diesem Projekt. Mit `--scope project` landet er für das Team in `.mcp.json`, mit `--scope user` gilt er für alle deine Projekte. Siehe die Tabelle unten.",
        },
        {
          title: "Melde dich an, falls der Server das verlangt",
          text: "Viele Remote-Server nutzen OAuth. Führe in Claude Code `/mcp` aus und wähle den Server zur Anmeldung, oder `claude mcp login <name>` in deiner Shell. Headless-Läufe mit `-p` können den Anmeldeablauf nicht öffnen, melde dich also vorher interaktiv an.",
        },
        {
          title: "Prüfe, ob die Verbindung steht",
          text: "Führe `/mcp` aus, um Status und Tools jedes Servers zu sehen, und `claude mcp list` in deiner Shell. Bitte Claude dann, das Tool beim Namen zu nutzen.",
        },
        {
          title: "Verwalte deine Server",
          text: "Server auflisten, ansehen, entfernen oder importieren geht über die Kommandozeile. Einen Server, den du selten brauchst, deaktivierst du besser in `/mcp`, statt ihn zu entfernen.",
          code: manage,
        },
      ],
      source: { label: "Quelle: Claude-Code-Dokumentation, Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "MCP-Scopes und wo die Config-Dateien liegen",
      text: [
        "Hier speichert Claude Code die MCP-Konfiguration. Beachte: Der \"local\"-Scope von MCP liegt in `~/.claude.json`, nicht in `.claude/settings.local.json`.",
      ],
      headers: ["Scope", "Gilt für", "Geteilt", "Gespeichert in"],
      rows: [
        ["Local (Standard)", "Nur dieses Projekt", "Nein", "`~/.claude.json`, unter dem Pfad des Projekts"],
        ["Project", "Nur dieses Projekt", "Ja, committen", "`.mcp.json` im Projektstammverzeichnis"],
        ["User", "Alle deine Projekte", "Nein", "`~/.claude.json`, auf oberster Ebene"],
        ["Plugin", "Überall, wo das Plugin aktiviert ist", "Mit dem Plugin", "Die eigene Konfiguration des Plugins"],
        ["claude.ai-Connectors", "Sessions, die mit diesem claude.ai-Konto angemeldet sind", "Pro Konto", "Deine claude.ai-Einstellungen"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "Server mit .mcp.json teilen",
      text: [
        "Mit `.mcp.json` nutzt das ganze Team dieselben Server. Halte Secrets mit Umgebungsvariablen heraus: `${VAR}` wird durch den Wert der Variable ersetzt, und `${VAR:-default}` greift auf einen Standardwert zurück, wenn sie nicht gesetzt ist. Die Ersetzung funktioniert in `command`, `args`, `env`, `url` und `headers`.",
      ],
      steps: [
        {
          title: "Verweise auf Variablen statt auf Secrets",
          text: "Claude Code bittet jede Person beim ersten Mal, die Projekt-Server aus `.mcp.json` freizugeben; `claude mcp reset-project-choices` setzt diese Antworten zurück. Ein JSON-Eintrag mit `url` braucht außerdem einen `type`, etwa `http`.",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "Vorrang, Connectors und weitere Details",
      points: [
        "Ist derselbe Server doppelt definiert, verbindet sich Claude Code nur einmal und nimmt den ersten in dieser Reihenfolge: local, project, user, plugin, claude.ai-Connector. Einträge werden nicht zusammengeführt; die verwalteten Server einer Organisation haben Vorrang vor allen.",
        "Wenn du dich mit einem claude.ai-Konto bei Claude Code anmeldest, erscheinen Connectors, die du in claude.ai hinzugefügt hast, automatisch.",
        "Claude Code kann selbst ein MCP-Server sein: `claude mcp serve` stellt seine Tools einem anderen Client bereit, etwa Claude Desktop.",
        "Server können auch Prompts anbieten, die als Slash-Commands erscheinen; siehe [Slash-Commands in Claude Code](/blog/claude-code-slash-commands).",
        "Beim Entfernen eines Remote-Servers löscht Claude Code die gespeicherten Tokens, widerruft sie aber nicht; führe dafür vorher `claude mcp logout <name>` aus.",
      ],
    },
    {
      kind: "text",
      title: "MCP und Token-Verbrauch",
      text: [
        "Tool-Definitionen werden standardmäßig erst bei Bedarf geladen: Nur Tool-Namen und Server-Anweisungen liegen im Kontext, bis Claude ein Tool nutzt, eine lange Liste von Servern kostet also weniger als früher. Jeder Server fügt trotzdem etwas hinzu, deaktiviere daher in `/mcp` die, die du nicht nutzt, und nimm lieber eine CLI wie `gh`, `aws` oder `gcloud`, wenn es eine gibt, denn sie fügt gar keine Tool-Liste hinzu. Mehr dazu in [wie du den Token-Verbrauch von Claude Code senkst](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "text",
      title: "Fehlerbehebung: wenn ein Server keine Verbindung bekommt",
      points: [
        "Server verlangt eine Anmeldung: Öffne `/mcp` und wähle Re-authenticate, oder führe `claude mcp login <name>` aus.",
        "\"has a url but no type\": Ergänze `\"type\": \"http\"` (oder `sse` bzw. `ws`) im JSON-Eintrag; ohne Typ behandelt Claude Code ihn als stdio.",
        "Die Flags eines stdio-Servers sind verschwunden: Setz `--` vor den Befehl des Servers, damit Claude Code sie nicht als eigene interpretiert.",
        "Warnung wegen fehlender Variable in `claude mcp list`: Setz die Variable oder gib ihr ein `:-default`.",
        "Ein Projekt-Server lädt in `claude -p` nie: Headless gibt es keine Freigabeabfrage, prüfe also deine Einstellungen oder übergib die Server explizit mit `--mcp-config` und `--strict-mcp-config`.",
        "Servernamen, die du mit `claude mcp` hinzufügst, dürfen nur Buchstaben, Ziffern, Bindestriche und Unterstriche enthalten.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib deinen KI-Mitarbeitern dieselben Tools, die du nutzt",
      text: [
        "Über MCP erreicht Claude Code deinen Issue-Tracker, deine Datenbank oder deine Analytics. Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue von einem Board übernimmt, mit den MCP-Servern deines Projekts griffbereit.",
      ],
      steps: [
        {
          title: "Committe .mcp.json",
          text: "Server mit Projekt-Scope laden in der Session des Mitarbeiters genau wie in deiner; bei Servern, die OAuth brauchen, meldest du sie einmal interaktiv an.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
        {
          title: "Gib jeder Rolle nur, was sie braucht",
          text: "Ein SEO-Mitarbeiter bekommt die Search Console, ein Programmierer GitHub und Sentry. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen MCP-Server zu Claude Code hinzufügen" },
  mid: {
    title: "Die Tools sind verbunden. Wer nutzt sie, während du weg bist?",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Code MCP",
    items: [
      {
        q: "Wie füge ich einen MCP-Server zu Claude Code hinzu?",
        a: "Führe `claude mcp add --transport http <name> <url>` für einen Remote-Server aus oder `claude mcp add --transport stdio <name> -- <command>` für einen lokalen. Führe danach in Claude Code `/mcp` aus, um dich bei Bedarf anzumelden und zu prüfen, ob die Verbindung steht.",
      },
      {
        q: "Wo liegt die MCP-Config-Datei von Claude Code?",
        a: "Server mit Scope local und user stehen in `~/.claude.json` (lokale unter dem Pfad des Projekts). Server mit Projekt-Scope stehen in `.mcp.json` im Projektstammverzeichnis, das du committen kannst.",
      },
      {
        q: "Was ist der Unterschied zwischen den Scopes local, project und user?",
        a: "Local gilt nur für dich in einem Projekt (der Standard), project wird über `.mcp.json` mit dem Team geteilt, und user gilt nur für dich, aber in jedem Projekt.",
      },
      {
        q: "Wie halte ich API-Keys aus .mcp.json heraus?",
        a: "Verweise mit `${VAR}` oder `${VAR:-default}` in `command`, `args`, `env`, `url` oder `headers` auf Umgebungsvariablen und setze die Variablen auf jedem Rechner.",
      },
      {
        q: "Wie nutze ich meine MCP-Server aus Claude Desktop in Claude Code?",
        a: "Führe `claude mcp add-from-claude-desktop` aus und wähle die Server, die du importieren willst. Das funktioniert unter macOS und WSL; mit `--scope user` stehen sie in jedem Projekt zur Verfügung.",
      },
      {
        q: "Verbrauchen MCP-Server viele Tokens?",
        a: "Weniger als früher: Tool-Definitionen laden erst, wenn Claude ein Tool nutzt. Jeder Server fügt trotzdem Namen und Anweisungen hinzu, deaktiviere also ungenutzte und nimm lieber CLIs, wo es sie gibt.",
      },
      {
        q: "Kann Claude Code als MCP-Server dienen?",
        a: "Ja. `claude mcp serve` startet es als stdio-MCP-Server, mit dem sich andere Clients wie Claude Desktop verbinden können.",
      },
    ],
  },
  cta: {
    title: "Verbundene Tools und ein Mitarbeiter, der sie nutzt.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Claude-Code-Dokumentation (MCP und Kosten) abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
