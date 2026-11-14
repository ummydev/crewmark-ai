import type { RoleData, RoleTemplate } from "@/content/roles/build";
import type { RoleSlug } from "@/i18n/roles";

// German translation of the role pages; the English master is src/content/roles/en.ts. Role names follow the
// marketplace presets in messages/de.json (Landing.marketplace.presets) with the search phrasing ("KI-SEO-Spezialist",
// "KI-Marketing-Agent"). The template avoids accusative and dative articles before the name, since "Spezialist" and
// "Agent" decline (einen Spezialisten, einen Agenten).

export const template: RoleTemplate = {
  kicker: "KI-Mitarbeiter · Rolle",
  parent: "KI-Mitarbeiter",
  cta: "Loslegen",
  secondary: "Rollenbeschreibung kopieren",
  doesTitle: (name) => `Was ein ${name} macht`,
  goalsTitle: "Ziele, die du ihm gibst",
  goalsText:
    "Gib einem KI-Mitarbeiter eine einzige Zahl, die er bewegen soll, so wie einer neuen Kollegin oder einem neuen Kollegen, und prüfe sie jede Woche. Such dir für den Anfang eins dieser Ziele aus.",
  goalsHeaders: ["Ziel", "Wie es gemessen wird", "Ein gutes erstes Ziel"],
  routineTitle: "Sein Tagesablauf",
  howToTitle: (name) => `${name} mit Claude Code oder Codex einrichten`,
  howToName: (name) => `${name} einrichten`,
  briefStep: {
    title: "Schreib die Rollenbeschreibung",
    text: "Speichere sie als `CLAUDE.md` (Claude Code) oder `AGENTS.md` (Codex) im Repository, in dem der Mitarbeiter arbeitet, damit jede Session mit seiner Aufgabe, seinem Ziel und seinen Regeln startet. Siehe den [CLAUDE.md-Leitfaden](/blog/claude-md).",
  },
  toolsTitle: "Gib ihm die Tools, die er braucht",
  approvalsTitle: "Leg fest, was dein Ja braucht",
  scheduleStep: {
    title: "Gib ihm einen Zeitplan",
    text: "Eine Rolle braucht einen Rhythmus, keinen einzelnen Prompt. Nutze `/loop` oder geplante Aufgaben für einen wiederkehrenden Prompt, oder gib ihm Arbeitszeiten, einen Heartbeat und ein Board mit Issues; siehe [Claude Code proaktiv machen](/proactive-claude-code).",
  },
  relatedTitle: "Verwandte Leitfäden",
  crewmark: {
    kicker: "Mit Crewmark",
    title: (name) => `${name} einstellen statt selbst skripten`,
    text: (name) =>
      `Bei Crewmark steht ein ${name} bereit, den du direkt einstellen kannst. Er läuft in deiner Claude-Code-, Codex-, DeepSeek-Harness- oder OpenCode-Session mit dem Abo, das du schon bezahlst, wacht während der Arbeitszeiten per Heartbeat auf, nimmt sich das nächste Issue von einem gemeinsamen Board und schreibt dir, wenn er eine Entscheidung braucht.`,
    steps: [
      {
        title: "Wähle die Rolle",
        text: "Skills, Ziel und Zeitplan sind schon eingerichtet. Ersetze das Ziel durch deine eigene Zahl.",
      },
      {
        title: "Verbinde dein Projekt",
        text: "Führe den Setup-Befehl im Repository oder Ordner aus, in dem er arbeitet. Er bekommt seine eigene Session und seinen eigenen Checkout.",
      },
      {
        title: "Prüfen statt babysitten",
        text: "Er kommentiert seine Issues während der Arbeit und fragt vor allem, was auf deiner Freigabeliste steht. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
      },
    ],
  },
  faqTitle: (name) => `${name}: häufige Fragen`,
  ctaText:
    "Crewmark macht aus Claude-Code-, Codex-, DeepSeek-Harness- und OpenCode-Sessions KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
  checked:
    "Rollenseiten am 7. November 2026 geschrieben, auf Basis der Crewmark-Marketplace-Presets und der Dokumentation der Agenten.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und weder mit Anthropic oder OpenAI verbunden noch von ihnen unterstützt. Claude, Claude Code und Codex sind Marken ihrer jeweiligen Inhaber.",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "KI-SEO-Spezialist",
    meta: {
      title: "KI-SEO-Spezialist: ein KI-Agent für SEO, jeden Tag",
      description:
        "Was ein KI-SEO-Spezialist macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung für Claude Code oder Codex. Oder stell auf Crewmark einen ein, der per Heartbeat aufwacht und dein SEO-Backlog abarbeitet.",
    },
    breadcrumb: "KI-SEO-Spezialist",
    title: "KI-SEO-Spezialist: ein KI-Agent für SEO, der jeden Tag arbeitet",
    lead: "Ein KI-SEO-Spezialist ist ein Coding-Agent wie Claude Code oder Codex mit der dauerhaften Aufgabe, deinen organischen Traffic zu steigern. Er findet Themen, nach denen Menschen gerade zu suchen beginnen, schreibt und verbessert Seiten im Code deiner Website, sorgt für ihre Indexierung und berichtet an jedem Werktag, was sich bewegt hat. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Anders als ein einmaliger SEO-Prompt ist der Spezialist für die Arbeit verantwortlich: Er führt eine Keyword-Map und ein Log, damit jede Session dort weitermacht, wo die letzte aufgehört hat.",
      points: [
        "Keyword-Recherche: liest Produktnews und Changelogs und prüft dann Google Autocomplete, Trends und die Search Console auf Suchbegriffe mit Nachfrage und schwachen Ergebnissen.",
        "Schreibt und aktualisiert Seiten: ein Haupt-Keyword pro URL, zuerst eine Definition, dann Schritte, eine Vergleichstabelle und ein FAQ.",
        "Behebt On-Page-Probleme: Titel und Beschreibungen, interne Links, Weiterleitungen, strukturierte Daten und hreflang.",
        "Sorgt für die Indexierung: pingt IndexNow, reicht die Sitemap erneut ein und beantragt die Indexierung.",
        "Berichtet: Traffic, Abstand zum Ziel und was er getan hat, in einer kurzen täglichen Notiz.",
      ],
    },
    goals: [
      ["Search-Console-Klicks", "Wöchentliche Klicks von Google", "+10 % pro Monat"],
      ["Impressionen", "Wöchentliche Impressionen in der Search Console", "+20 % pro Monat bei einer neuen Website"],
      ["Veröffentlichte Seiten", "Neue oder überarbeitete Seiten, die live sind", "Eine pro Werktag"],
      ["Indexierte Seiten", "Gültige Seiten im Bericht zur Seitenindexierung", "90 % der Sitemap"],
    ],
    routine: [
      "Prüfen, was sich geändert hat: neue Releases in deinem Markt, die Search-Console-Suchanfragen von gestern und Seiten mit Impressionen, aber ohne Klicks.",
      "Ein Thema auswählen und im Log notieren, warum.",
      "Die Seite nur anhand offizieller Quellen schreiben oder überarbeiten und sie dann übersetzen, falls deine Website weitere Sprachen hat.",
      "Sie lokal testen und eine Deploy-Anfrage öffnen; er veröffentlicht nicht selbst.",
      "Sobald sie live ist, IndexNow pingen und die Indexierung beantragen, dann die Keyword-Map aktualisieren.",
      "Vor Feierabend den Tagesbericht posten.",
    ],
    brief: `# Rolle: SEO-Spezialist
Ziel: +10 % Search-Console-Klicks pro Monat.

## Jeden Werktag
1. Prüfe neue Releases in unserem Markt und die Suchanfragen von gestern.
2. Wähle ein Thema mit steigender Nachfrage und schwachen Ergebnissen; logge, warum.
3. Schreib oder verbessere die Seite. Fakten nur aus offiziellen Quellen.
4. Teste lokal und öffne dann eine Deploy-Anfrage. Veröffentliche nie selbst.
5. Nach dem Deploy: IndexNow, Indexierung beantragen, keywords.md aktualisieren.
6. Poste einen Tagesbericht: Traffic, Abstand zum Ziel, was du getan hast.

## Regeln
- Ein Haupt-Keyword pro URL; prüfe zuerst docs/seo/keywords.md.
- Frag, bevor du Seiten löschst, Weiterleitungen änderst oder Code
  außerhalb der Content-Ordner anfasst.`,
    tools: "Websuche und Abruf von Webseiten für die Recherche, das Repository der Website und ein lokaler Dev-Server zum Testen der Seiten, Lesezugriff auf die Search Console und die Analytics sowie ein Skript für IndexNow. Nimm CLIs statt MCP-Servern, wo es beides gibt; sie verbrauchen weniger Tokens.",
    approvals: "Veröffentlichungen sollten über einen Menschen oder einen Deploy-Verantwortlichen laufen. Er soll außerdem fragen, bevor er Seiten löscht, Weiterleitungen ändert, Code außerhalb der Content-Ordner bearbeitet oder DNS anfasst.",
    related:
      "Wie du denselben Agenten Schritt für Schritt mit Skills und Hooks baust, liest du in [KI-SEO-Agent: So baust du einen](/blog/ai-seo-agent). Zu den Bausteinen siehe [Claude Code Skills](/blog/claude-code-skills) und [Claude Code Hooks](/blog/claude-code-hooks).",
    mid: {
      title: "Den SEO-Spezialisten, ohne ihn selbst zu bauen?",
      text: "Der SEO-Spezialist von Crewmark läuft auf deinem Claude Code oder Codex, wacht per Heartbeat auf und arbeitet ein SEO-Backlog ab.",
    },
    faq: [
      {
        q: "Was ist ein KI-SEO-Spezialist?",
        a: "Ein KI-Agent, meist ein Coding-Agent wie Claude Code oder Codex, mit der dauerhaften Aufgabe, den organischen Traffic zu steigern: Keywords recherchieren, Seiten schreiben und verbessern, sie indexieren lassen und über die Ergebnisse berichten.",
      },
      {
        q: "Kann ein KI-Agent SEO allein machen?",
        a: "Den Großteil der täglichen Arbeit, ja: Recherche, Schreiben, Übersetzen, technische Fixes und Indexierungsanträge. Veröffentlichungen, Weiterleitungen und alles Unumkehrbare sollten trotzdem über einen Menschen laufen.",
      },
      {
        q: "Was ist der Unterschied zu einem SEO-Tool?",
        a: "Ein SEO-Tool zeigt dir Daten; die Arbeit machst du weiterhin selbst. Ein KI-SEO-Spezialist erledigt die Arbeit im Code deiner Website und berichtet dir nach Zeitplan.",
      },
      {
        q: "Wann zeigt ein KI-SEO-Spezialist Ergebnisse?",
        a: "SEO dauert auf jeder Website Wochen. Eine neue Website braucht meist einige Wochen, bis die Impressionen wachsen; richte das erste Ziel auf veröffentlichte Seiten und Impressionen aus, danach auf Klicks.",
      },
      {
        q: "Gibt es einen kostenlosen KI-Agenten für SEO?",
        a: "Du kannst einen auf einem Agenten betreiben, für den du schon zahlst, etwa Claude Code oder Codex, mit kostenlosen Datenquellen wie Google Autocomplete, Trends, der Search Console und IndexNow.",
      },
    ],
    cta: "Gib deiner Website einen SEO-Spezialisten, der nie die Checkliste überspringt.",
  },
  "marketing-agent": {
    name: "KI-Marketing-Agent",
    meta: {
      title: "Autonomer KI-Marketing-Agent: Ziele, Ablauf, Setup",
      description:
        "Ein KI-Marketing-Agent (Growth-Marketer), der selbstständig Experimente in deinem ganzen Funnel durchführt: was er macht, welche Ziele du ihm gibst, ein Tagesablauf und eine Rollenbeschreibung für Claude Code oder Codex. Oder stell einen auf Crewmark ein.",
    },
    breadcrumb: "KI-Marketing-Agent",
    title: "KI-Marketing-Agent: ein Growth-Marketer, der selbstständig arbeitet",
    lead: "Ein KI-Marketing-Agent ist ein KI-Mitarbeiter, der für eine Wachstumszahl wie Trial-Anmeldungen verantwortlich ist und jeden Tag daran arbeitet: Er liest deine Funnel-Daten, findet den schwächsten Schritt, schreibt die Änderung, startet sie als Experiment und behält, was gewinnt. Gebaut auf einem Coding-Agenten wie Claude Code oder Codex, kann er Landingpages, E-Mails und Tracking in deinem eigenen Code ändern. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Er arbeitet wie ein Growth-Marketer in einem kleinen Unternehmen: ein Funnel, eine Zahl, viele kleine Experimente.",
      points: [
        "Funnel-Analyse: liest die Analytics, um zu sehen, wo Besucher zwischen Landingpage, Anmeldung und Aktivierung abspringen.",
        "Experimente: formuliert eine Hypothese, setzt die Änderung auf einer Seite oder in einer E-Mail um und wertet das Ergebnis nach genug Traffic aus.",
        "Texte: Headlines, Landingpages, Anzeigentexte und Onboarding-E-Mails, in Varianten zum Testen.",
        "Lifecycle-E-Mails: Willkommens- und Reaktivierungsstrecken, geschrieben und in deinem E-Mail-Tool eingerichtet.",
        "Wochenbericht: was getestet wurde, was gewonnen hat und was als Nächstes kommt.",
      ],
    },
    goals: [
      ["Trial-Anmeldungen", "Anmeldungen pro Woche laut Analytics", "+8 % pro Monat"],
      ["Conversion der Landingpages", "Besucher, die sich anmelden, pro Seite", "+1 Prozentpunkt"],
      ["Aktivierung", "Neue Nutzer, die die erste Schlüsselaktion abschließen", "+5 % pro Monat"],
      ["Durchgeführte Experimente", "Gestartete und ausgewertete Experimente", "Zwei pro Woche"],
    ],
    routine: [
      "Die Funnel-Zahlen von gestern lesen und jedes Experiment, das genug Daten hat.",
      "Abgeschlossene Experimente auswerten: den Gewinner behalten, den Verlierer zurückrollen, das Gelernte notieren.",
      "Den nächsten schwächsten Schritt im Funnel wählen und eine Hypothese formulieren.",
      "Die Änderung im Code oder im E-Mail-Tool umsetzen, wenn möglich hinter einem Flag oder als Variante.",
      "Vor allem fragen, was Geld kostet oder Kunden erreicht.",
      "Einen kurzen Bericht auf dem Board posten.",
    ],
    brief: `# Rolle: Growth-Marketer
Ziel: +8 % Trial-Anmeldungen pro Monat.

## Jeden Werktag
1. Lies die Funnel-Zahlen von gestern und die laufenden Experimente.
2. Schließe Experimente mit genug Daten ab: behalten, zurückrollen, Grund loggen.
3. Wähle den schwächsten Funnel-Schritt; formuliere eine Hypothese.
4. Bau die Änderung als Variante; öffne eine Review-Anfrage.
5. Poste, was du getestet hast, was gewonnen hat und was als Nächstes kommt.

## Regeln
- Eine Änderung pro Experiment; brich keinen Test zu früh ab.
- Frag, bevor du Geld ausgibst, Kunden E-Mails schickst oder Preise änderst.`,
    tools: "Lesezugriff auf deine Analytics (Produkt und Web), das Repository der Website und ein lokaler Dev-Server, die API oder CLI deines E-Mail-Tools und, falls vorhanden, ein Experiment- oder Feature-Flag-Tool.",
    approvals: "Er soll fragen, bevor er Geld für Anzeigen ausgibt, Kunden E-Mails schickt, Preise oder Pläne ändert oder unter deiner Marke etwas auf einem neuen Kanal veröffentlicht.",
    related:
      "Damit der Agent von selbst mit der Arbeit beginnt, lies [Claude Code proaktiv machen](/proactive-claude-code) oder [Codex](/proactive-codex). Plattformen, die Agenten als Mitarbeiter betreiben, vergleichst du in [die besten KI-Mitarbeiter-Plattformen](/blog/best-ai-employee-platforms).",
    mid: {
      title: "Ein Marketing-Agent, der läuft, während du entwickelst?",
      text: "Der Growth-Marketer von Crewmark läuft auf deinem Claude Code oder Codex, wacht per Heartbeat auf und arbeitet deine Funnel-Experimente ab.",
    },
    faq: [
      {
        q: "Was ist ein KI-Marketing-Agent?",
        a: "Ein KI-Agent mit einem dauerhaften Marketingziel wie Anmeldungen, der selbstständig deinen Funnel analysiert, Texte schreibt und Experimente durchführt und dir die Ergebnisse berichtet.",
      },
      {
        q: "Kann ein KI-Marketing-Agent autonom arbeiten?",
        a: "Recherche, Schreiben und Umsetzen können ohne Prompts nach Zeitplan laufen. Ausgaben, E-Mails an Kunden und Preisänderungen sollten auf das Ja eines Menschen warten.",
      },
      {
        q: "Lohnt sich ein KI-Marketing-Agent für kleine Unternehmen?",
        a: "Er passt zu kleinen Teams mit einem Produkt und ohne Vollzeit-Marketer: Er hält die Funnel-Arbeit jeden Tag am Laufen, und du prüfst, statt selbst zu machen.",
      },
      {
        q: "Kann ich einen KI-Marketing-Agenten mit Claude bauen?",
        a: "Ja. Claude Code mit einer Rollenbeschreibung, Zugriff auf deine Analytics und den Code der Website und einem Zeitplan reicht dafür; die Rollenbeschreibung auf dieser Seite ist ein Ausgangspunkt.",
      },
      {
        q: "KI-Marketing-Agent oder Marketing-Automation?",
        a: "Automation führt feste Abläufe aus, die du entwirfst. Ein KI-Marketing-Agent entscheidet, was als Nächstes ausprobiert wird, baut es und wertet das Ergebnis aus.",
      },
    ],
    cta: "Setz einen Growth-Marketer auf deinen Funnel, mit dem Agenten, den du schon nutzt.",
  },
  "social-media-manager": {
    name: "KI-Social-Media-Manager",
    meta: {
      title: "KI-Social-Media-Manager, der postet und lernt | Crewmark AI",
      description:
        "Was ein KI-Social-Media-Manager macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung für Claude Code oder Codex. Er entwirft, plant und antwortet, mit deiner Freigabe, bevor etwas öffentlich wird.",
    },
    breadcrumb: "KI-Social-Media-Manager",
    title: "KI-Social-Media-Manager: ein Agent, der entwirft, plant und lernt",
    lead: "Ein KI-Social-Media-Manager ist ein KI-Mitarbeiter, der deine Accounts aktiv hält: Er schreibt Posts und Threads aus dem, was dein Team ausliefert, plant sie ein, entwirft Antworten auf Erwähnungen und lernt, welche Posts funktionieren. Gebaut auf einem Coding-Agenten wie Claude Code oder Codex, arbeitet er mit deinem Changelog, deiner Dokumentation und deinen Notizen. Weil Posts öffentlich sind, entwirft er und du gibst frei. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Sein Ausgangsmaterial ist deine eigene Arbeit: Releases, Dokumentation, Blogartikel und Fragen von Kunden.",
      points: [
        "Macht aus Releases und Blogartikeln Threads für X und Posts für LinkedIn.",
        "Führt einen Redaktionskalender und plant freigegebene Posts ein.",
        "Entwirft Antworten auf Erwähnungen und Kommentare, die du freigibst.",
        "Liest die Zahlen jedes Posts und notiert, was ankommt.",
        "Nutzt wieder, was funktioniert hat: Formate, Uhrzeiten und Themen.",
      ],
    },
    goals: [
      ["Follower", "Netto neue Follower pro Monat", "+5 % pro Monat"],
      ["Veröffentlichte Posts", "Freigegebene Posts, die rausgegangen sind", "Einer pro Werktag"],
      ["Engagement", "Antworten, Reposts und Likes pro Post", "Steigend von Monat zu Monat"],
      ["Klicks auf die Website", "Besuche über Social Media, laut Analytics", "+10 % pro Monat"],
    ],
    routine: [
      "Lesen, was seit gestern ausgeliefert oder geschrieben wurde.",
      "Die Posts des Tages in deinem Ton entwerfen und zur Freigabe in den Kalender stellen.",
      "Die freigegebenen Posts einplanen.",
      "Antworten auf neue Erwähnungen entwerfen; alles Heikle an einen Menschen weitergeben.",
      "Die Zahlen der Posts von gestern lesen und notieren, was funktioniert hat.",
    ],
    brief: `# Rolle: Social-Media-Manager
Ziel: +5 % Follower pro Monat.

## Jeden Werktag
1. Lies neue Releases, Blogartikel und Änderungen an der Doku.
2. Entwirf die Posts für heute (X-Thread, LinkedIn-Post) in unserem Ton.
3. Stell Entwürfe zur Freigabe aufs Board; plane freigegebene ein.
4. Entwirf Antworten auf neue Erwähnungen; gib Beschwerden an einen Menschen weiter.
5. Logge die Zahlen von gestern und was funktioniert hat.

## Regeln
- Poste oder antworte nie öffentlich ohne Freigabe.
- Keine Behauptungen ohne Link als Beleg; keine Posts über Wettbewerber.`,
    tools: "Dein Changelog, deine Dokumentation und dein Blog (das Repository oder ein Ordner), die API oder CLI eines Planungstools, Lesezugriff auf die Analytics jeder Plattform und ein gemeinsamer Kalender oder ein Board für Entwürfe.",
    approvals: "Anfangs braucht jeder öffentliche Post und jede Antwort deine Freigabe. Er soll außerdem fragen, bevor er Accounts folgt oder anschreibt, sich in Threads über Wettbewerber einmischt oder auf Beschwerden antwortet.",
    related:
      "Wie du mehrere Agenten nebeneinander betreibst, zeigt [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents). Was einen Agenten zum Mitarbeiter macht, liest du in [was ein KI-Mitarbeiter ist](/ai-employees).",
    mid: {
      title: "Deine Accounts aktiv halten, ohne jeden Post selbst zu schreiben?",
      text: "Der Social-Media-Manager von Crewmark schreibt aus dem, was du auslieferst, plant ein, was du freigibst, und berichtet, was ankommt.",
    },
    faq: [
      {
        q: "Was ist ein KI-Social-Media-Manager?",
        a: "Ein KI-Agent, der deine Social-Media-Accounts im Alltag betreut: Er entwirft Posts aus deiner Arbeit, plant freigegebene ein, entwirft Antworten und verfolgt, was gut läuft.",
      },
      {
        q: "Sollte ein KI-Agent ohne Freigabe posten?",
        a: "Anfangs nicht. Posts sind öffentlich und schwer zurückzunehmen, also starte mit Entwürfen, die du freigibst, und lockere das nur für risikoarme Formate, wenn du seinem Ton vertraust.",
      },
      {
        q: "Kann ich einen KI-Social-Media-Manager mit Claude bauen?",
        a: "Ja: Claude Code mit einer Rollenbeschreibung, Zugriff auf deine Inhalte und ein Planungstool sowie einem täglichen Zeitplan. Die Rollenbeschreibung auf dieser Seite ist ein Ausgangspunkt.",
      },
      {
        q: "Gibt es einen kostenlosen KI-Social-Media-Manager?",
        a: "Du kannst einen auf einem Agenten betreiben, für den du schon zahlst, etwa Claude Code oder Codex. Planungstools und Plattform-APIs können eigene Kosten haben.",
      },
      {
        q: "Worüber sollte ein KI-Social-Media-Manager schreiben?",
        a: "Zuerst über dein eigenes Material: Releases, Anleitungen, Kundenfragen und Erkenntnisse. Darüber kann er zutreffend schreiben.",
      },
    ],
    cta: "Gib deinen Accounts einen Manager, der aus dem schreibt, was du auslieferst.",
  },
  "software-engineer": {
    name: "KI-Softwareentwickler",
    meta: {
      title: "KI-Softwareentwickler mit Claude Code oder Codex",
      description:
        "Ein KI-Softwareentwickler-Agent, der Issues übernimmt, Pull Requests mit Tests öffnet und um ein Review bittet. Was er macht, welche Ziele du ihm gibst, ein Tagesablauf und eine Rollenbeschreibung für Claude Code oder Codex.",
    },
    breadcrumb: "KI-Softwareentwickler",
    title: "KI-Softwareentwickler: ein Agent, der Issues übernimmt und Pull Requests öffnet",
    lead: "Ein KI-Softwareentwickler ist ein Coding-Agent wie Claude Code oder Codex mit einem festen Platz in deinem Team: Er nimmt sich Issues vom Board, arbeitet auf einem Branch in seinem eigenen Checkout, öffnet Pull Requests mit Tests und bittet um ein Review, ohne für jede Aufgabe einen Prompt zu brauchen. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Er arbeitet wie ein Junior- bis Mid-Level-Entwickler, der die Checkliste nie vergisst: kleine Änderungen, Tests, ein klarer Pull Request.",
      points: [
        "Nimmt sich das nächste fertige Issue oder das, das ihm zugewiesen ist.",
        "Arbeitet auf seinem eigenen Branch und Checkout, sodass er deine Arbeitskopie nie anfasst.",
        "Schreibt oder aktualisiert Tests und führt die Checks aus, bevor er um ein Review bittet.",
        "Öffnet einen Pull Request, der die Änderung erklärt und wie sie getestet wurde.",
        "Beantwortet Review-Kommentare und behebt, worum gebeten wird.",
      ],
    },
    goals: [
      ["Gemergte Pull Requests", "Pro Woche gemergte Pull Requests", "10 pro Woche"],
      ["Durchlaufzeit", "Stunden von der Übernahme des Issues bis zum geöffneten PR", "Unter einem Werktag"],
      ["Review-Runden", "Änderungsrunden vor dem Merge", "Eine oder zwei"],
      ["Geschlossene Bugs", "Pro Woche geschlossene Bug-Issues", "Alles, was im Backlog ist"],
    ],
    routine: [
      "Seine offenen Pull Requests auf Review-Kommentare prüfen und die zuerst erledigen.",
      "Das nächste fertige Issue übernehmen; im Issue nachfragen, wenn es unklar ist.",
      "Branch anlegen, ändern, testen und die Checks lokal ausführen.",
      "Den Pull Request öffnen und das Issue auf Review setzen.",
      "Das wiederholen, bis die Arbeitszeit endet, dann posten, was noch in Arbeit ist.",
    ],
    brief: `# Rolle: Softwareentwickler
Ziel: 10 gemergte Pull Requests pro Woche.

## Für jedes Issue
1. Lies das Issue; frag darin nach, wenn etwas unklar ist.
2. Arbeite auf einem neuen Branch in deinem eigenen Checkout.
3. Schreib oder aktualisiere Tests; führe Lint, Typprüfung und Tests aus.
4. Öffne einen PR: was sich geändert hat, warum, wie du es getestet hast.
5. Beantworte Review-Kommentare, bevor du neue Arbeit übernimmst.

## Regeln
- Pushe nie auf main und merge nie deinen eigenen PR.
- Frag vor Datenbankmigrationen, Dependency-Upgrades oder dem
  Löschen von Code, den du nicht geschrieben hast.`,
    tools: "Das Repository und sein Issue-Tracker, `gh` oder die CLI deines Git-Hosts, die Test- und Lint-Befehle des Projekts und ein eigener Checkout oder Git-Worktree pro Aufgabe; siehe den [Leitfaden zu Claude Code Worktrees](/blog/claude-code-worktree).",
    approvals: "Mergen, Deployen, Datenbankmigrationen, Dependency-Upgrades und alles, was Secrets oder Produktionsdaten berührt, sollte auf einen Menschen warten.",
    related:
      "Für Claude Code oder Codex als Engine siehe [Claude Code vs. Codex](/blog/claude-code-vs-codex). Wie du mehrere Entwickler gleichzeitig betreibst, liest du in [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents) und [Claude Code Background Agents](/blog/claude-code-background-agents).",
    mid: {
      title: "Ein Entwickler, der sich das nächste Issue selbst nimmt?",
      text: "Der Softwareentwickler von Crewmark läuft auf deinem Claude Code oder Codex, übernimmt Issues per Heartbeat und öffnet Pull Requests zum Review.",
    },
    faq: [
      {
        q: "Was ist ein KI-Softwareentwickler-Agent?",
        a: "Ein Coding-Agent wie Claude Code oder Codex, der Issues selbstständig abarbeitet: Er legt einen Branch an, ändert Code, testet und öffnet Pull Requests, die ein Mensch prüft.",
      },
      {
        q: "Welcher KI-Softwareentwickler-Agent ist der beste?",
        a: "Das hängt von der Engine ab, der du vertraust: Claude Code und Codex sind die gängigen, und beide können mit einer Rollenbeschreibung, einem eigenen Checkout und einem Zeitplan als KI-Softwareentwickler laufen.",
      },
      {
        q: "Kann ein KI-Softwareentwickler seinen eigenen Code mergen?",
        a: "Er sollte es nicht. Mergen und Deployen bleiben bei Menschen; der Agent öffnet Pull Requests und arbeitet Review-Kommentare ein.",
      },
      {
        q: "Was ist der Unterschied dazu, Claude Code selbst zu nutzen?",
        a: "Du musst nicht mehr jede Aufgabe selbst anstoßen. Der Agent nimmt sich während der Arbeitszeiten das nächste Issue vom Board, und du prüfst Pull Requests, statt Prompts zu schreiben.",
      },
      {
        q: "Kann ich mehrere KI-Entwickler in einem Repository betreiben?",
        a: "Ja, wenn jeder seinen eigenen Branch und Checkout hat, etwa einen Git-Worktree, damit sich ihre Änderungen nicht in die Quere kommen.",
      },
    ],
    cta: "Hol dir einen Entwickler, der aus Issues Pull Requests macht, mit deinem Abo.",
  },
  "ui-designer": {
    name: "KI-UI-Designer",
    meta: {
      title: "KI-UI-Designer: einheitliche Interfaces in deinem Code",
      description:
        "Ein KI-UI-Designer, der aus groben Seiten ein einheitliches Interface macht, in deinem Code und mit deinen Komponenten. Was er macht, welche Ziele du ihm gibst, ein Tagesablauf und eine Rollenbeschreibung für Claude Code oder Codex.",
    },
    breadcrumb: "KI-UI-Designer",
    title: "KI-UI-Designer: einheitliche Interfaces, in deinem eigenen Code",
    lead: "Ein KI-UI-Designer ist ein KI-Mitarbeiter, der das Interface deines Produkts direkt im Code verbessert: Typografie, Abstände, Komponenten, Dark Mode und Barrierefreiheit. Gebaut auf einem Coding-Agenten wie Claude Code oder Codex, arbeitet er in deinem Designsystem statt in einer separaten Designdatei, prüft seine Arbeit im Browser und öffnet einen Pull Request mit Vorher-nachher-Screenshots. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Sein Ergebnis ist Code, also ist eine Änderung bereit zum Ausliefern, sobald du sie freigibst.",
      points: [
        "Prüft Seiten auf uneinheitliche Typografie, Abstände und Farben und behebt sie mit deinen Design-Tokens.",
        "Macht aus einmaligem Markup gemeinsame Komponenten.",
        "Ergänzt und prüft den Dark Mode.",
        "Behebt Probleme bei der Barrierefreiheit: Kontrast, Fokuszustände, Labels und Tastaturbedienung.",
        "Macht Vorher-nachher-Screenshots in Desktop- und Smartphone-Breite für das Review.",
      ],
    },
    goals: [
      ["Fertige Screens", "Screens pro Woche, die seine Checkliste bestehen", "Drei pro Woche"],
      ["Barrierefreiheitsprobleme", "Offene Probleme aus einem Audit-Tool", "Jede Woche weniger"],
      ["Gemeinsame Komponenten", "Einmalige Muster, die durch Komponenten ersetzt wurden", "Zwei pro Woche"],
      ["Visuelle Regressionen", "Nach seinen Änderungen gemeldete UI-Bugs", "Null"],
    ],
    routine: [
      "Den nächsten Screen vom Board oder aus seiner Audit-Liste nehmen.",
      "Screenshots in Desktop- und Smartphone-Breite machen, hell und dunkel.",
      "Ihn mit den Tokens und Komponenten des Designsystems verbessern; eine Komponente anlegen, wenn sich ein Muster wiederholt.",
      "Ihn erneut im Browser prüfen und die Barrierefreiheits-Checks ausführen.",
      "Einen Pull Request mit Vorher-nachher-Screenshots öffnen.",
    ],
    brief: `# Rolle: UI-Designer
Ziel: 3 fertige Screens pro Woche.

## Für jeden Screen
1. Mach Screenshots: Desktop und Smartphone, hell und dunkel.
2. Korrigiere Typo, Abstände und Farben nur mit unseren Tokens.
3. Nutze Komponenten wieder; extrahiere eine, wenn sich ein Muster wiederholt.
4. Prüfe Kontrast, Fokuszustände und Labels.
5. Öffne einen PR mit Vorher-nachher-Screenshots.

## Regeln
- Keine neuen Farben, Schriften oder Abstandswerte außerhalb der Tokens.
- Frag, bevor du Texte, Layouts wichtiger Flows oder die Marke änderst.`,
    tools: "Das Frontend-Repository und ein lokaler Dev-Server, ein Browser, den er für Screenshots steuern kann, deine Design-Tokens und deine Komponentenbibliothek sowie ein Barrierefreiheits-Checker.",
    approvals: "Er soll fragen, bevor er die Marke (Logo, Farben, Schriften), Texte, das Layout von Anmelde- oder Checkout-Flows oder irgendetwas ändert, das Kunden auf einer konvertierenden Seite bemerken.",
    related:
      "Wie ein Designer neben einem Entwickler arbeitet, zeigt [mehrere Claude-Code-Agenten](/blog/multiple-claude-code-agents). Damit er sich selbst Arbeit nimmt, lies [Claude Code proaktiv machen](/proactive-claude-code).",
    mid: {
      title: "Dein Interface polieren, ohne Design-Backlog?",
      text: "Der UI-Designer von Crewmark arbeitet in deinem Code und mit deinen Komponenten und öffnet Pull Requests mit Vorher-nachher-Screenshots.",
    },
    faq: [
      {
        q: "Was ist ein KI-UI-Designer?",
        a: "Ein KI-Agent, der das Interface eines Produkts direkt im Code verbessert: Typografie, Abstände, Komponenten, Dark Mode und Barrierefreiheit, im Browser geprüft und als Pull Requests eingereicht.",
      },
      {
        q: "Ersetzt ein KI-UI-Designer Figma?",
        a: "Nicht beim Erkunden neuer Ideen. Er ist für die laufende Arbeit da, ausgelieferte Screens einheitlich und barrierefrei zu machen, und die passiert ohnehin im Code.",
      },
      {
        q: "Kann Claude Code UI-Design?",
        a: "Claude Code kann Frontend-Code bearbeiten und mit einem Browser-Tool das Ergebnis prüfen. Eine Rollenbeschreibung und Design-Tokens halten seine Änderungen einheitlich.",
      },
      {
        q: "Wie verhindere ich, dass ein KI-Designer die Marke ändert?",
        a: "Beschränke ihn in der Rollenbeschreibung auf deine Design-Tokens und führe Marke, Texte und wichtige Flows als Dinge auf, bei denen er zuerst fragen muss.",
      },
    ],
    cta: "Gib deinem Interface einen Designer, der in deinem Code arbeitet.",
  },
  "app-designer": {
    name: "KI-App-Designer",
    meta: {
      title: "KI-App-Designer: iOS- und Android-Screens im Simulator",
      description:
        "Ein KI-App-Designer, der iOS- und Android-Screens im Code deiner App gestaltet und im Simulator prüft. Was er macht, welche Ziele du ihm gibst, ein Tagesablauf und eine Rollenbeschreibung für Claude Code oder Codex.",
    },
    breadcrumb: "KI-App-Designer",
    title: "KI-App-Designer: mobile Screens, gebaut und im Simulator geprüft",
    lead: "Ein KI-App-Designer ist ein KI-Mitarbeiter, der deine iOS- und Android-Screens im Code der App selbst gestaltet und verfeinert und sie dann im Simulator oder Emulator prüft, bevor er um ein Review bittet. Gebaut auf einem Coding-Agenten wie Claude Code oder Codex, folgt er den Konventionen jeder Plattform und deinen Komponenten und kann App-Store-Screenshots vorbereiten. Diese Seite zeigt, was er macht, welche Ziele und welchen Tagesablauf du ihm gibst, und eine Rollenbeschreibung zum Kopieren.",
    does: {
      text: "Er gestaltet im Code der App, also ist das, was du prüfst, das, was ausgeliefert wird.",
      points: [
        "Legt neue Screens an und verfeinert bestehende mit deinen Komponenten.",
        "Folgt den Konventionen von iOS und Android: Navigation, Safe Areas, Dynamic Type und Touch-Ziele.",
        "Startet die App im Simulator oder Emulator und macht von jeder Änderung Screenshots.",
        "Prüft Dark Mode, kleine und große Bildschirme sowie Accessibility-Labels.",
        "Bereitet Screenshots für App Store und Play Store vor.",
      ],
    },
    goals: [
      ["Ausgelieferte Screens", "Pro Woche gemergte neue oder überarbeitete Screens", "Zwei pro Woche"],
      ["Simulator-Checks", "Änderungen mit Screenshots auf kleinen und großen Geräten", "Jede Änderung"],
      ["Barrierefreiheit", "Screens mit Labels und Dynamic-Type-Unterstützung", "Alle neuen Screens"],
      ["Store-Screenshots", "Aktuelle Screenshots pro Release", "Jedes Release"],
    ],
    routine: [
      "Den nächsten Screen vom Board nehmen.",
      "Ihn mit den Komponenten der App bauen oder anpassen.",
      "Ihn im Simulator auf einem kleinen und einem großen Gerät laufen lassen, hell und dunkel.",
      "Korrigieren, was nicht stimmt, und dann das Ergebnis per Screenshot festhalten.",
      "Einen Pull Request mit den Screenshots öffnen.",
    ],
    brief: `# Rolle: App-UI-Designer
Ziel: 2 App-Screens pro Woche.

## Für jeden Screen
1. Bau ihn mit unseren Komponenten und den Plattformkonventionen.
2. Starte ihn im Simulator: kleines und großes Gerät, hell und dunkel.
3. Prüfe Safe Areas, Dynamic Type, Touch-Ziele und Labels.
4. Öffne einen PR mit Simulator-Screenshots.

## Regeln
- Ändere Navigationsstruktur oder Onboarding nicht, ohne zu fragen.
- Reiche keine Builds im App Store oder Play Store ein.`,
    tools: "Das Repository der App, Xcode und der iOS-Simulator oder Android Studio und ein Emulator auf dem Rechner, auf dem er läuft, eine Möglichkeit für Screenshots und deine Komponentenbibliothek.",
    approvals: "Er soll fragen, bevor er Navigation, Onboarding oder Paywall-Screens ändert, und er darf nie selbst Builds einreichen oder Store-Einträge bearbeiten.",
    related:
      "Für den Entwickler, der die Logik hinter seinen Screens umsetzt, siehe den [KI-Softwareentwickler](/ai-employees/software-engineer). Für Web-Interfaces siehe den [KI-UI-Designer](/ai-employees/ui-designer).",
    mid: {
      title: "Die Screens deiner App auf Autopilot polieren?",
      text: "Der App-UI-Designer von Crewmark baut iOS- und Android-Screens in deinem Code und prüft sie im Simulator.",
    },
    faq: [
      {
        q: "Was ist ein KI-App-Designer?",
        a: "Ein KI-Agent, der Screens einer mobilen App im Code der App selbst gestaltet und verfeinert und sie im iOS-Simulator oder Android-Emulator prüft, bevor er um ein Review bittet.",
      },
      {
        q: "Kann ein KI-Agent iOS-Screens gestalten?",
        a: "Ein Coding-Agent wie Claude Code oder Codex kann SwiftUI- oder UIKit-Screens schreiben, die App im Simulator starten und das Ergebnis per Screenshot festhalten, auf einem Mac mit Xcode.",
      },
      {
        q: "Ist ein KI-App-Designer dasselbe wie ein KI-Generator für App-Designs?",
        a: "Nein. Ein Generator erstellt Mockups aus einem Prompt. Ein KI-App-Designer arbeitet im echten Code deiner App, mit deinen Komponenten, und öffnet Pull Requests.",
      },
      {
        q: "Kann er App-Store-Screenshots erstellen?",
        a: "Ja, aus dem Simulator. Das Einreichen, auch das der Builds, sollte bei einem Menschen bleiben.",
      },
    ],
    cta: "Gib deiner App einen Designer, der jeden Screen im Simulator prüft.",
  },
};
