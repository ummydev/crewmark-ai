import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# Frag den Bot, dem die Aufgabe gehören soll, in seinem Chat
Richte eine Routine ein, die jeden Werktag um 7:00 Uhr mein Gmail von der Nacht sortiert,
Antworten auf alles Dringende entwirft und mir die Liste schickt. Verschick nichts.

Richte eine Routine für jeden Sonntag um 18:00 Uhr ein: Prüf den Google Calendar der nächsten Woche,
markiere Konflikte und überladene Tage und schick mir einen Plan für Montag.

Richte eine Routine für alle 2 Stunden an Werktagen ein: Prüf den Slack-Channel #launch
auf Fragen zu Preisen und entwirf Antworten zu meiner Freigabe.`;

const webhook = `# "POST to" und "key" aus dem Webhook-Bereich der Routine kopieren (Desktop)
curl -X POST "https://<POST-to-URL aus der Routine>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = ein Lauf hat begonnen (das Ergebnis steht im Chat des Bots)
# alles andere = kein Lauf gestartet`;

export const copy: GuideCopy = {
  meta: {
    title: "Grok-Bot-Routinen: Zeitpläne, Webhooks und Fehlerbehebung",
    description:
      "So richtest du Routinen in Grok Bot ein: Zeitpläne in normaler Sprache, Zeitzonen, Testläufe, Webhook- und Slack-Auslöser, die Limits (50 Routinen, 5 Minuten, 300 Läufe pro Stunde) und was du prüfst, wenn eine Routine nicht läuft.",
  },
  breadcrumb: "Grok-Bot-Routinen",
  parent: { name: "Persönliche Agents", href: "/personal-agent" },
  hero: {
    kicker: "Persönliche Agents · Grok Bot",
    title: "Grok-Bot-Routinen: einen Bot planen, per Webhook auslösen und Fehler beheben",
    lead: "Eine Routine sagt einem Grok Bot, wann er eine Aufgabe erledigen soll: nach Zeitplan, etwa jeden Werktag um 8:00 Uhr, oder wenn etwas passiert, etwa eine Erwähnung in Slack oder ein Webhook-Aufruf. Weil Bots auf einem Cloud-Computer arbeiten, laufen Routinen auch bei zugeklapptem Laptop. Dieser Guide zeigt, wie du eine Routine am Desktop und auf dem Smartphone anlegst, welche Formulierungen für Zeitpläne funktionieren, wie Webhooks und Event-Auslöser gehen, welche Limits gelten, welche Routine-Ideen es aus xAIs eigenen Beispielen gibt und was du prüfst, wenn eine Routine nicht läuft.",
    cta: "Loslegen",
    secondary: "Routine anlegen",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Was eine Grok-Bot-Routine ist",
      text: [
        "Laut xAI legt eine Routine fest, wann ein Bot einen Workflow ausführt: nach Zeitplan oder wenn etwas passiert. Sie gehört zu einem Bot, nutzt dessen Gedächtnis und Skills und veröffentlicht ihre Ergebnisse im Chat des Bots.",
      ],
      points: [
        "Zeitpläne: einfache Formulierungen wie „every weekday at 8:00 AM“ oder „every 2 hours“, in der Zeitzone, die in den Settings eingestellt ist.",
        "Events: ein Slack-Auslöser; ein Event aus GitHub, Linear, Sentry oder PagerDuty; eine E-Mail an die eigene Adresse des Bots; oder ein Webhook-Aufruf.",
        "Eine neue Routine läuft nicht, wenn du sie anlegst. Sie wartet auf ihren nächsten geplanten Zeitpunkt; mit Test startest du sie sofort.",
        "Routinen laufen auf dem Cloud-Computer des Bots, also laufen sie weiter, wenn dein Laptop zugeklappt ist.",
        "Jeder Lauf, Tests eingeschlossen, verbraucht deine Grok-Bot-Nutzung.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So legst du eine Routine in Grok Bot an",
      steps: [
        {
          title: "Frag den Bot, dem die Aufgabe gehören soll",
          text: "Öffne am Desktop den Chat dieses Bots und beschreib die Aufgabe und wann sie laufen soll. Sag, woher die Eingaben kommen, welches Ergebnis du willst, was deine Freigabe braucht und was passieren soll, wenn eine Quelle fehlt. Auf dem Smartphone öffnest du das Profil des Bots, tippst unter Routines auf Add routine und vervollständigst die Nachricht, die mit „Set up a routine to“ beginnt.",
          code: prompts,
        },
        {
          title: "Prüf „When to run“ und die Zeitzone",
          text: "Öffne die Routine und lies unter When to run nach, ob der gespeicherte Zeitplan stimmt; wenn nicht, wähl Edit und beschreib die Korrektur. Die Zeitzone findest du in den Settings unter Bot im Feld Timezone. Auto-detect nutzt die Zeitzone deines Computers; wähl also eine feste, wenn die Arbeit woanders hingehört.",
        },
        {
          title: "Teste sie einmal",
          text: "Öffne am Desktop die Routine und wähl Test. Sie zeigt Running…, bis der Lauf fertig ist, und das Ergebnis erscheint im Chat des Bots. Tests leisten echte Arbeit, etwa Dateien ändern oder Websites nutzen; halte also alles, was schreibt oder sendet, hinter deiner Freigabe. Hat eine Routine keinen Test-Button, bitte den Bot, die Aufgabe einmal im Chat mit unbedenklichen Eingaben zu erledigen.",
        },
        {
          title: "Pausieren, fortsetzen oder löschen",
          text: "Klick am Desktop auf den Namen des Bots, öffne Details und nutze den Schalter in der Zeile der Routine, oder öffne die Routine und wähl Pause oder Resume. Auf dem Smartphone öffnest du die Routine im Profil des Bots und schaltest Active aus; zum Löschen wischst du über die Zeile. Löschen lässt sich nicht rückgängig machen.",
        },
      ],
      source: { label: "Quelle: xAIs Grok-Bot-Doku, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "So löst du eine Routine per Webhook aus",
      text: [
        "Mit einem Webhook kann ein anderer Dienst eine Routine starten, zum Beispiel dein Shop, wenn eine Erstattung angefragt wird, oder ein Formular, wenn sich jemand anmeldet.",
      ],
      steps: [
        {
          title: "Füg den Auslöser hinzu",
          text: "Bitte den Bot, der Routine einen Webhook-Auslöser hinzuzufügen.",
        },
        {
          title: "Kopier URL und Schlüssel",
          text: "Öffne am Desktop die Routine und such ihren Webhook-Bereich: POST to (die URL), key (das Geheimnis) und header (der vollständige Authorization-Header). Klick auf ein Feld, um es zu kopieren.",
          code: webhook,
        },
        {
          title: "Schick einen POST und lies die Antwort",
          text: "Schick einen HTTP-POST mit dem Schlüssel als `Authorization: Bearer <key>`. Du kannst einen JSON-Body mitschicken; der Bot bekommt ihn zusammen mit den Anweisungen der Routine. Eine 200 bedeutet, dass ein Lauf begonnen hat, nicht, dass er fertig ist. Jede andere Antwort bedeutet, dass kein Lauf gestartet wurde: Prüf, ob die Routine pausiert ist und ob du den aktuellen Schlüssel verwendest.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack, GitHub und andere Event-Auslöser",
      points: [
        "Slack: auslösen, wenn der Bot erwähnt wird, wenn ein Wort oder eine Phrase auftaucht, wenn jemand auf eine Nachricht reagiert, oder bei jeder Nachricht, in einem Channel oder im ganzen Slack. Verbinde Slack zuerst mit dem Cursor-Konto, dem der Bot gehört.",
        "GitHub, Linear, Sentry und PagerDuty: Starte eine Routine durch ein Event in diesen Tools; diese Auslöser laufen über Integrationen des Cursor-Kontos und brauchen eventuell eine eigene Verbindung.",
        "E-Mail: Eine Routine kann durch eine E-Mail an die eigene Adresse des Bots starten.",
        "Nur neue Aktivität startet einen Lauf. Halte Auslöser eng: Ein belebter Channel, bei dem jede Nachricht beobachtet wird, verbraucht die Nutzung schnell.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Limits für Grok-Bot-Routinen",
      headers: ["Limit", "Wert"],
      rows: [
        ["Routinen pro Bot", "Bis zu 50"],
        ["Kürzester Zeitplan", "5 Minuten zwischen Läufen"],
        ["Läufe pro Stunde, alle Routinen zusammen", "Bis zu 300"],
        ["Läufe pro Stunde, eine Routine", "Bis zu 200"],
        ["Aufbewahrter Laufverlauf", "Die 20 letzten Läufe pro Routine"],
        ["Über einem Rate Limit", "Der Lauf schlägt mit „Automation run rate limit exceeded“ fehl"],
        ["Nach langer Abwesenheit", "Grok Bot fragt eventuell, ob Routinen weiterlaufen sollen, und pausiert sie, wenn du nicht antwortest"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Grok-Bot-Routinen funktionieren nicht? Was du prüfen solltest",
      points: [
        "Sie lief nie: Eine neue Routine wartet auf ihren nächsten geplanten Zeitpunkt. Wähl Test, um sie sofort zu starten.",
        "Sie ist pausiert: Am Desktop ist der Schalter in der Zeile aus; auf dem Smartphone ist Active aus. Grok Bot kann Routinen auch selbst pausieren, wenn du eine Weile weg warst.",
        "Falsche Uhrzeit: Lies When to run und prüf dann die Timezone unter Settings > Bot. Auto-detect folgt dem Computer, an dem du gerade bist.",
        "Ein Slack-Auslöser hat nicht reagiert: Die Nachricht muss neu sein, im beobachteten Channel stehen und die passende Phrase enthalten.",
        "Der Webhook hat keinen Lauf gestartet: Jede Antwort außer 200 heißt, dass er es nicht getan hat. Prüf, ob die Routine pausiert ist und ob der Schlüssel aktuell ist.",
        "Ein Lauf ist an einem Rate Limit gescheitert: Grenz den Auslöser ein oder streck den Zeitplan, dann starte erneut mit Test oder schick den Webhook noch einmal. xAI führt außerdem Fehlschläge durch ein gemeinsames Grok-Bot-Limit als bekanntes Problem; diese werden nicht automatisch wiederholt.",
        "Die Nutzung ist aufgebraucht: Jeder Lauf verbraucht deine wöchentliche Nutzung. Pausiere Routinen, die du nicht brauchst, und streck die Zeitpläne. Bei The X Subscription kommt zusätzliche Nutzung aus Prepaid-Guthaben; bei älteren Cursor-Plänen aus On-Demand-Nutzung, wenn sie eingeschaltet ist.",
        "„Sync failed“: xAIs Doku zu Routinen beschreibt diesen Fehler nicht. Öffne die Routine, prüf Zeitplan und Auslöser und starte Test; schlägt es weiter fehl, kontaktier den Grok-Bot-Support aus der App.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "Routine-Ideen aus xAIs eigenen Beispielen",
      text: ["Sie stammen aus den Anwendungsfällen in xAIs Doku; jede entwirft die Arbeit und wartet auf deine Freigabe, bevor etwas rausgeht."],
      headers: ["Routine", "Wann", "Was sie tut"],
      rows: [
        ["Morgen-Briefing", "Jeden Morgen", "Fasst zusammen, was sich über Nacht in deinen Apps geändert hat, und entwirft einen Post fürs Team"],
        ["Posteingangs-Manager", "Über Nacht", "Sortiert Gmail nach Dringlichkeit und entwirft Antworten auf dringende Threads, ohne zu senden"],
        ["Die Woche voraus", "Sonntagabend", "Prüft den Google Calendar, markiert Konflikte und schickt einen Plan für Montag"],
        ["Meeting-Notizen", "Jeden Abend", "Holt Aufgaben mit Verantwortlichen aus Granola-Notizen und entwirft einen Slack-Post"],
        ["Projekt-Updates", "Freitags", "Entwirft Fortschritts-Updates in Notion und fügt sie nach deiner Freigabe hinzu"],
        ["Kampagnenteam", "Montags, 9 Uhr", "Holt Anmeldedaten, entwirft Launch-Inhalte und prüft die Fakten gegen die Zahlen"],
        ["Wettbewerbsanalyse", "Wöchentlich", "Berichtet über Launches und Preisänderungen der Konkurrenz, mit Links"],
        ["Monatsabschluss", "Am 1. des Monats", "Gleicht Rechnungen ab, stimmt Ausgaben ab und listet Ausnahmen zur Freigabe auf"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Routinen auch für deinen Coding-Agenten",
      text: [
        "Grok-Bot-Routinen passen zu Arbeit, die in Gmail, Slack und Notion steckt. Steckt die Arbeit in einem Code-Repository, gibt Crewmark deinem eigenen Claude Code oder Codex denselben Rhythmus: einen KI-Mitarbeiter mit Rolle, einem Ziel in Zahlen, Arbeitszeiten und einem Heartbeat, der ihn weckt, damit er das nächste Issue von einem Board nimmt.",
      ],
      steps: [
        {
          title: "Stell einen Mitarbeiter auf deinem Agenten ein",
          text: "Führ den Einrichtungsbefehl in einer Unterhaltung in Claude Code oder Codex aus; diese Unterhaltung wird zum Mitarbeiter. Siehe, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
        {
          title: "Leg Arbeitszeiten und einen Heartbeat fest",
          text: "Er wacht in den Stunden, die du wählst, alle 15 bis 240 Minuten auf, auch über Nacht. Siehe [wie du Claude Code proaktiv machst](/proactive-claude-code) und [geplante Aufgaben in Codex](/proactive-codex).",
        },
        {
          title: "Vergleiche persönliche Agents",
          text: "Siehe den [Guide zu Grok Bot](/personal-agent/grok-bot) und [persönliche KI-Agenten im Vergleich](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Eine Grok-Bot-Routine anlegen" },
  mid: {
    title: "Du willst dieselbe Routine für einen Coding-Agenten?",
    text: "Crewmark weckt dein Claude Code oder Codex während der Arbeitszeiten per Heartbeat und gibt ihm das nächste Issue.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Wie plane ich eine Routine in Grok Bot?",
        a: "Bitte den Bot, dem die Aufgabe gehören soll, in seinem Chat, eine Routine einzurichten, und sag, wann, zum Beispiel „every weekday at 8:00 AM“. Auf dem Smartphone öffnest du das Profil des Bots und tippst auf Add routine. Öffne dann die Routine und prüf When to run und deine Zeitzone.",
      },
      {
        q: "Warum läuft meine Grok-Bot-Routine nicht?",
        a: "Meist wartet sie auf ihren ersten geplanten Zeitpunkt, ist pausiert, oder die Zeitzone stimmt nicht. Starte Test, um zu prüfen, ob sie funktioniert, stell sicher, dass Active an ist, und lies When to run. Webhook-Aufrufe, die keine 200 bekommen, starten keinen Lauf.",
      },
      {
        q: "Wie löse ich eine Grok-Bot-Routine per Webhook aus?",
        a: "Bitte den Bot, einen Webhook-Auslöser hinzuzufügen, kopier dann am Desktop URL und Schlüssel aus dem Webhook-Bereich der Routine und schick einen HTTP-POST mit `Authorization: Bearer <key>`. Ein JSON-Body wird an den Bot weitergegeben.",
      },
      {
        q: "Wie oft kann eine Grok-Bot-Routine laufen?",
        a: "Höchstens alle fünf Minuten. Jede Routine kann bis zu 200-mal pro Stunde laufen und alle Routinen zusammen bis zu 300-mal, und ein Bot kann bis zu 50 Routinen haben.",
      },
      {
        q: "Laufen Routinen, wenn mein Computer aus ist?",
        a: "Ja. Bots arbeiten auf einem Cloud-Computer, also laufen geplante und ausgelöste Läufe bei zugeklapptem Laptop weiter, und der Bot benachrichtigt dich, wenn er fertig ist.",
      },
      {
        q: "Verbrauchen Grok-Bot-Routinen Nutzung?",
        a: "Ja. Jeder Lauf, auch Testläufe, verbraucht deine Grok-Bot-Nutzung, und häufige Zeitpläne oder belebte Slack-Auslöser verbrauchen sie am schnellsten.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agenten einen Zeitplan und einen Job.",
    text: "Crewmark macht aus Sessions von Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 10. November 2026 mit xAIs Dokumentation zu Grok Bot und Cursors Seite zu den Grok-Bot-Plänen abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu xAI, SpaceX, X oder Cursor, die es auch nicht unterstützen. Grok ist eine Marke ihres Inhabers.",
};
