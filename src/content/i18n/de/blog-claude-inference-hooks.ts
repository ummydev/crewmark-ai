import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// Anfrage erlauben
{ "action": "allow" }

// Ablehnen: deny_reason wird dem Nutzer angezeigt (max. 500 Zeichen),
// reference_id landet nur in deinem Compliance-Aktivitätsfeed
{
  "action": "deny",
  "deny_reason": "Dieser Prompt scheint Kartendaten von Kunden zu enthalten.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Inference Hooks: Funktionsweise, Einrichtung, vs. Claude Code Hooks | Crewmark",
    description:
      "Claude Inference Hooks, seit dem 5. November 2026 allgemein verfügbar, schicken jeden Prompt und Tool-Call an deinen Sicherheitsserver, der erlaubt oder ablehnt. Funktionsweise, Einrichtung, Grenzen und der Unterschied zu Claude Code Hooks.",
  },
  breadcrumb: "Claude Inference Hooks",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Inference Hooks: eine Erlauben-oder-Ablehnen-Prüfung vor jedem Prompt",
    lead: "Mit Inference Hooks kann eine Claude-Enterprise-Organisation jeden Prompt, und optional jeden Tool-Call, an ihren eigenen Sicherheitsserver schicken und auf ein Urteil warten, ob erlaubt oder abgelehnt wird, bevor Claude läuft. Seit dem 5. November 2026 sind sie allgemein verfügbar, zusammen mit einem neuen Security Center in der Beta. Weil die Prüfung auf Anthropics Servern stattfindet, deckt eine einzige Einrichtung claude.ai, Claude Code, Cowork und die anderen Claude-Produkte ab, ohne dass auf Laptops etwas installiert wird. Diese Anleitung zeigt, wie sie funktionieren, wie du sie einrichtest, wo ihre Grenzen liegen und worin sie sich von den Hooks unterscheiden, die du in Claude Code schreibst.",
    cta: "Early Access anfragen",
    secondary: "So richtest du sie ein",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "So funktionieren Inference Hooks",
      text: [
        "Deine Organisation (oder ihr Security-Anbieter) betreibt einen KI-Sicherheitsserver: einen HTTPS-Endpoint. Wenn jemand einen Prompt abschickt, sendet Anthropic das Transkript der Unterhaltung an diesen Endpoint, signiert nach dem Standard-Webhooks-Schema, und wartet auf ein Urteil. Bei allow läuft die Inferenz weiter; bei deny erreicht die Anfrage das Modell nie, und der Nutzer sieht deine Begründung plus eine feste Nachricht deiner Admins.",
      ],
      points: [
        "Zwei Events: `prompt`, vor jeder kontrollierten Inferenzanfrage, und `tool_call`, bevor die Tool-Calls in Claudes Antwort ausgeführt werden, wenn Validate tool calls (Tool-Calls prüfen) aktiv ist.",
        "Eine Einrichtung für die ganze Organisation: claude.ai, Claude Desktop und Mobile, Claude Code (inklusive CLI), Cowork, Claude for Microsoft 365, Claude Tag und Claude in Chrome.",
        "Was dein Server sieht: den Text des Transkripts, Tool-Calls und ihre Ergebnisse sowie aus Anhängen extrahierten Text. Nie die rohen Bytes von Dateien oder Bildern, System-Prompts oder Tool-Definitionen.",
        "Urteile sind nur allow oder deny. Einen Prompt umschreiben oder schwärzen geht nicht.",
        "Jede Ablehnung wird im Activity Feed deiner Organisation protokolliert.",
      ],
    },
    {
      kind: "table",
      title: "Inference Hooks vs. Claude Code Hooks vs. Compliance API",
      text: [
        "Die Namen ähneln sich, aber es sind drei verschiedene Werkzeuge. Claude Code Hooks werden pro Projekt oder pro Nutzer konfiguriert und laufen auf dem Rechner des Entwicklers; Inference Hooks legt die Organisation einmal fest, und sie laufen auf Anthropics Seite.",
      ],
      headers: ["", "Inference Hooks", "Claude Code Hooks", "Compliance API"],
      rows: [
        ["Wer richtet sie ein", "Owner oder Primary owner der Organisation", "Jeder Entwickler oder jedes Projekt, in `settings.json`", "Das Security- oder Compliance-Team"],
        ["Wo sie laufen", "Anthropics Server rufen deinen HTTPS-Endpoint auf", "Shell-Befehle auf dem Rechner des Entwicklers", "Du rufst Anthropics API auf"],
        ["Wann", "Vor der Inferenz und bevor Tool-Calls laufen", "Bei Events wie PreToolUse, PostToolUse und Stop", "Im Nachhinein"],
        ["Abdeckung", "Jedes Claude-Produkt in der Enterprise-Organisation", "Claude-Code-Sessions mit dieser Konfiguration", "Aktivität, Chats, Dateien, Transkripte"],
        ["Können blockieren", "Ja: allow oder deny", "Ja, bei Events, die das unterstützen", "Nein: Audit und Export"],
        ["Tarif", "Claude Enterprise", "Jeder Claude-Code-Nutzer", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Inference Hooks ein",
      text: [
        "Du brauchst die Rolle Owner oder Primary owner (Admin reicht nicht) und einen öffentlichen HTTPS-Endpoint auf Port 443. Tunnel wie ngrok werden blockiert, hoste den Testserver also auf einer Domain, die du kontrollierst.",
      ],
      steps: [
        {
          title: "Die Funktion freischalten",
          text: "Öffne in claude.ai Organization settings → Data and privacy (Organisationseinstellungen → Daten und Datenschutz) und aktiviere unter Inference hooks die Option Allow for your organization. Damit startet noch keine Prüfung: Enforce verdicts (Urteile durchsetzen) bleibt aus.",
        },
        {
          title: "Endpoint hinzufügen und Signing Secret sichern",
          text: "Klick auf Configure, gib deine `https://`-URL ein und speichere. Beim ersten Speichern wird einmalig ein Webhook Signing Secret angezeigt: Bewahre es auf, denn dein Server prüft damit jede Anfrage.",
        },
        {
          title: "Header hinzufügen und testen",
          text: "Füge bis zu 16 statische Header hinzu, damit dein Server Anthropic authentifizieren kann, und klick dann auf Test connection. Das schickt einen synthetischen Prompt und meldet das Urteil und die Round-Trip-Zeit.",
        },
        {
          title: "Ein Urteil als HTTP-200-JSON zurückgeben",
          text: "Beantworte jede Anfrage mit HTTP 200 und einer `action`. Ein anderer Status als 200 ist ein Fehler, keine Ablehnung.",
          code: verdict,
        },
        {
          title: "Fehlerverhalten und Timeout wählen",
          text: "Block the request schlägt geschlossen fehl (fail closed), Allow the request offen (fail open). Der Timeout für das Urteil liegt zwischen 1 und 10.000 ms, standardmäßig 5.000; ein zu langsames Urteil gilt als nicht erreichbar. Wiederholte Fehler lösen einen Circuit Breaker aus, der deine Fehlereinstellung anwendet, bis sich der Server erholt.",
        },
        {
          title: "Schrittweise ausrollen, dann durchsetzen",
          text: "Starte im Shadow mode, der Urteile abfragt, ohne etwas zu blockieren, prüfe einen Prozentsatz der Anfragen, schließe bei Bedarf eigene Rollen aus und aktiviere dann Enforce verdicts. Änderungen erreichen alle Server in etwa einer Minute.",
        },
      ],
      source: { label: "Quelle: Claude-Platform-Dokumentation, Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "Grenzen und Stolperfallen",
      points: [
        "Nur Enterprise: nicht in Team, Pro oder Max, nicht für Organisationen der Claude Platform (API) und nicht auf Amazon Bedrock oder Google Cloud.",
        "Reine Bildinhalte, etwa ein Screenshot eines Dokuments, werden nicht geprüft, weil rohe Bytes nie gesendet werden.",
        "Eine abgelehnte Nachricht bleibt im Transkript und wird mit jeder späteren Nachricht erneut gesendet. In Claude Code springst du mit `/rewind` zum Prompt zurück, der sie hereingebracht hat, oder fängst mit `/clear` neu an.",
        "Einige Hintergrundaufrufe des Modells durch Anthropic selbst werden nicht kontrolliert, etwa gehostete Scans von Claude Security, Code Review auf GitHub-Pull-Requests und Smart Reports. `/code-review` lokal in Claude Code auszuführen wird dagegen kontrolliert.",
        "Im Sprachmodus wird ein kleiner Teil der Tool-Calls nicht gesendet, verlass dich dort also nicht allein auf die Hooks.",
        "Mit derselben Ankündigung kam ein Security Center (Beta), das deine Einstellungen für Claude, Cowork und Claude Code mit Anthropics empfohlener Konfiguration vergleicht, dazu zentrale Verwaltung und Zugriffskontrollen in der Beta.",
      ],
    },
    {
      kind: "text",
      title: "Warum das für Agenten zählt, die allein arbeiten",
      text: [
        "Wenn Claude Code unbeaufsichtigt arbeitet, nach Zeitplan oder im Hintergrund, liest niemand jeden Prompt, bevor er rausgeht. Inference Hooks geben einem Unternehmen eine Inline-Prüfung für jede Anfrage und jeden Tool-Call, egal wo der Agent läuft, und mit dem Shadow mode können Security-Teams die Richtlinie feinjustieren, bevor sie irgendetwas blockieren. Für Leitplanken pro Projekt auf einem einzelnen Rechner gelten weiterhin die eigenen Hooks und Berechtigungsregeln von Claude Code; zu den Berechtigungsmodi siehe [Claude Code Plan Mode](/blog/claude-code-plan-mode).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Leitplanken für KI-Mitarbeiter, die arbeiten, während du weg bist",
      text: [
        "Crewmark macht aus einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten und weckt ihn per Heartbeat, damit er das nächste Issue vom Board übernimmt. In einem Claude-Enterprise-Tarif prüfen Inference Hooks seine Prompts wie die aller anderen.",
      ],
      steps: [
        {
          title: "Leg fest, was dein Ja braucht",
          text: "Jeder Mitarbeiter fragt vor riskanten Aktionen nach, etwa Veröffentlichen, Mergen oder Geld ausgeben, und du gibst sie in einem einzigen Posteingang frei.",
        },
        {
          title: "Behalte den Verlauf auf dem Board",
          text: "Jedes Issue speichert die Kommentare und Statuswechsel des Mitarbeiters, sodass du neben den Logs deines Security-Teams nachvollziehen kannst, was er getan hat.",
        },
        {
          title: "Lass den Heartbeat die Arbeit starten",
          text: "Während seiner Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten in derselben Unterhaltung auf; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code) und [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Inference Hooks einrichten" },
  mid: {
    title: "Die Sicherheit steht. Jetzt gib Claude Code einen Job.",
    text: "Crewmark weckt Claude Code per Heartbeat mit Rolle, Ziel und einem Board voller Issues, mit dem Tarif, den du ohnehin zahlst.",
    button: "Early Access anfragen",
  },
  faq: {
    title: "FAQ zu Claude Inference Hooks",
    items: [
      {
        q: "Was sind Claude Inference Hooks?",
        a: "Eine Funktion von Claude Enterprise, die jeden Prompt, und optional jeden Tool-Call, an den Sicherheitsserver deiner Organisation schickt, der mit allow oder deny antwortet, bevor Claude läuft. Seit dem 5. November 2026 sind sie allgemein verfügbar.",
      },
      {
        q: "Funktionieren Inference Hooks mit Claude Code?",
        a: "Ja. Eine Konfiguration deckt jedes Claude-Produkt in der Enterprise-Organisation ab, auch Claude Code in der CLI und in der Desktop-App, ohne dass auf den Rechnern der Entwickler etwas installiert werden muss.",
      },
      {
        q: "Worin unterscheiden sich Inference Hooks von Claude Code Hooks?",
        a: "Claude Code Hooks sind Shell-Befehle, die jeder Entwickler oder jedes Projekt in `settings.json` konfiguriert und die lokal bei Events wie PreToolUse laufen. Inference Hooks legt die Organisation einmal fest, und sie laufen vor der Inferenz auf Anthropics Servern, für jedes Claude-Produkt.",
      },
      {
        q: "Welche Tarife haben Inference Hooks?",
        a: "Nur Claude Enterprise, eingerichtet vom Owner oder Primary owner. Für API-Organisationen der Claude Platform sowie auf Amazon Bedrock oder Google Cloud sind sie nicht verfügbar.",
      },
      {
        q: "Kann ein Inference Hook sensible Daten schwärzen?",
        a: "Nein. Urteile sind nur allow oder deny; einen Prompt umschreiben oder schwärzen geht nicht.",
      },
      {
        q: "Was passiert, wenn mein Sicherheitsserver ausfällt?",
        a: "Das entscheidet deine Einstellung zum Fehlerverhalten: die Anfrage blockieren (fail closed) oder ungeprüft durchlassen (fail open). Ein Circuit Breaker stellt die Aufrufe an einen fehlerhaften Server ein und setzt sich zurück, sobald er sich erholt.",
      },
      {
        q: "Was ist das Claude Security Center?",
        a: "Eine Beta-Seite in den Organization settings, angekündigt zusammen mit den Inference Hooks, die deine Einstellungen für Claude, Cowork und Claude Code mit Anthropics empfohlener Konfiguration vergleicht und einen Bericht für Auditoren erstellt.",
      },
    ],
  },
  cta: {
    title: "KI-Mitarbeiter auf Claude Code, innerhalb deiner Leitplanken.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Early Access anfragen",
  },
  checked: "Am 6. November 2026 mit Anthropics Ankündigung, dem Claude Help Center und der Claude-Platform-Dokumentation abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, das es auch nicht unterstützt. Claude und Claude Code sind Marken von Anthropic.",
};
