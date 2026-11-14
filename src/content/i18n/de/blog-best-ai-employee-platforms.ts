import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Die besten KI-Mitarbeiter-Plattformen 2026 | Crewmark AI",
    description:
      "Lindy, Sintra, Marblism, Artisan, Ema, Devin, das Open-Source-Projekt ai-employees und Crewmark im Vergleich: Rollen, wie die Arbeit startet, welche Modelle laufen, Gratis-Pläne und Preise.",
  },
  breadcrumb: "Die besten KI-Mitarbeiter-Plattformen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · KI-Mitarbeiter",
    title: "Die besten KI-Mitarbeiter-Plattformen 2026 im Vergleich",
    lead: "Eine KI-Mitarbeiter-Plattform gibt dir KI-Agenten, die wie Personal eingerichtet sind: Jeder hat eine Rolle, arbeitet auf ein Ziel hin und legt los, ohne dass du ihn jedes Mal anstoßen musst. Alle Produkte unten verkaufen diese Idee, unterscheiden sich aber darin, welche Aufgaben sie abdecken, wie die Arbeit zu ihnen kommt, auf welchen Modellen sie laufen und wie sie abrechnen. Wir haben acht verglichen, darunter unser eigenes, und dabei nur das genutzt, was jeder Anbieter selbst veröffentlicht.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "KI-Mitarbeiter-Plattformen auf einen Blick",
      text: [
        "Die Preise sind die Einstiegspläne, die am 6. November 2026 auf der Preisseite jedes Anbieters standen, in US-Dollar. Was ein KI-Mitarbeiter ist und wie er sich von einem KI-Agenten unterscheidet, erfährst du unter [Was ist ein KI-Mitarbeiter?](/ai-employees).",
      ],
      headers: ["Plattform", "Am besten für", "Wie die Arbeit startet", "Läuft auf", "Gratis-Option", "Bezahlt ab"],
      rows: [
        ["Lindy", "Büroarbeit in rund 17 Bereichen: Postfach, Kalender, Vertrieb, Support, Recruiting", "Zeitpläne (Routines), Slack und iMessage, Telefonate", "Große Modelle nach Wahl von Lindy", "Gratis: $50 Guthaben für 7 Tage", "$49.99/Monat pro Nutzer (Team)"],
        ["Sintra", "Kleine Unternehmen: über 12 benannte Helfer für Support, Texte, SEO, Social Media und Vertrieb", "Du chattest mit einem Helfer oder startest eine Aufgabe per Klick", "Sintras Modelle (auf Basis von Claude Sonnet)", "Kein Gratis-Plan", "$48.50/Monat, mit Jahresplan weniger"],
        ["Marblism", "Kleine Unternehmen: 7 Rollen von Assistenz bis Empfang und Recht", "Du setzt ein Ziel; sie arbeiten täglich daran und holen Freigaben ein", "Nicht angegeben", "Kein Gratis-Plan", "$24/Monat jährlich, $44 monatlich"],
        ["Artisan (Ava)", "Outbound-Vertrieb: ein KI-Business-Development-Rep", "Autonom, mit Freigabe- und Eskalationsregeln", "Nicht angegeben", "Nicht angegeben", "Credit-Pläne; Demo buchen"],
        ["Ema", "HR, IT und Finanzen in Großunternehmen", "Teams, Slack oder Sprache; über 250 Integrationen", "Emas Mix aus über 100 Modellen", "Kostenlose Testphase", "Ergebnisbasiert; nicht veröffentlicht"],
        ["Devin", "Softwareentwicklung", "@Erwähnung in Slack oder Teams, Tickets aus Linear oder Jira, wiederkehrende Workflows", "Devins Modelle (mehrere Anbieter)", "Gratis-Plan mit kleinem Kontingent", "$20/Monat (Pro)"],
        ["ai-employees (Open Source)", "8 Geschäftsrollen als Ordner mit geplanten Routinen", "Zeitpläne in der SCHEDULE.md jeder Rolle", "Dein eigener Agent: Claude Code, Codex, OpenCode und andere", "Gratis, MIT-Lizenz", "Gratis"],
        ["Crewmark", "Jede Rolle, die du definierst, auf Coding-Agenten: Engineering, SEO, Marketing, Design", "Ein Heartbeat weckt jeden Mitarbeiter während seiner Arbeitszeiten, damit er das nächste Issue vom Board nimmt", "Dein eigenes Abo von Claude Code, Codex, DeepSeek Harness oder OpenCode", "Ja: 1 Projekt, bis zu 3 Mitarbeiter", "5 $/Monat (Pro, bald verfügbar)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du eine KI-Mitarbeiter-Plattform aus",
      steps: [
        {
          title: "Beginne bei der Aufgabe, nicht beim Tool",
          text: "Schreib eine Rolle auf und die Zahl, die sie bewegen soll, etwa gebuchte Termine, Search-Console-Klicks oder gemergte Pull Requests. Plattformen, die für eine einzige Aufgabe gebaut sind (Artisan für Outbound-Vertrieb, Devin für Code), schlagen Generalisten bei genau dieser Aufgabe meist.",
        },
        {
          title: "Prüfe, wie die Arbeit startet",
          text: "Ein Chat-Assistent wartet auf dich; ein KI-Mitarbeiter legt von selbst los. Achte auf Zeitpläne, Trigger oder einen Heartbeat und auf einen Ort, an dem du Arbeit zuweist, etwa ein Board, Tickets oder einen Slack-Channel.",
        },
        {
          title: "Prüfe, wessen Modelle und wessen Rechnung",
          text: "Die meisten Plattformen verkaufen Modellnutzung als Credits oder Seats weiter. Wenn du schon für Claude Code oder Codex zahlst, verursachen Tools, die auf diesem Abo laufen (das Open-Source-Projekt ai-employees, Crewmark), kaum oder keine zusätzlichen Modellkosten.",
        },
        {
          title: "Prüfe, wie er vor dem Handeln fragt",
          text: "Ein Mitarbeiter, der E-Mails verschickt, Beiträge veröffentlicht oder Geld ausgibt, sollte vorher fragen. Achte auf Freigaben, Eskalationsregeln und ein Protokoll dessen, was er getan hat.",
        },
        {
          title: "Teste eine Rolle zwei Wochen lang",
          text: "Nutze den Gratis-Plan oder die Testphase, falls vorhanden, miss die Zahl, die du aufgeschrieben hast, und füge erst dann weitere Rollen hinzu.",
        },
      ],
    },
    {
      kind: "text",
      title: "Die Plattformen im Detail",
      points: [
        "Lindy: vermarktet als „der Teamkollege, der mehr leistet, als er kostet“ („the teammate that punches above its price“). Routines laufen nach Zeitplan, du kannst Lindy über Slack oder iMessage schreiben, und „Watch and Learn“ zeichnet eine Aufgabe auf, die du einmal vormachst. Preise: [lindy.ai/pricing](https://www.lindy.ai/pricing).",
        "Sintra: über 12 Helfer mit Namen, etwa Cassie für Support, Seomi für SEO und Soshie für Social Media, die jeweils als Chatbot arbeiten, mit dem du sprichst. Ein einzelner Helfer kostet $39/Monat. Preise: [sintra.ai/pricing](https://sintra.ai/pricing).",
        "Marblism: sieben KI-Mitarbeiter (Eva, Sonny, Stan, Walter, Penny, Rachel und Linda), die, sobald du ein Ziel setzt, „jeden Tag selbstständig daran arbeiten“ („work toward it every day, on their own“); die Pläne enthalten 50 Stunden KI-Arbeit pro Monat. Preise: [marblism.com/pricing](https://www.marblism.com/pricing).",
        "Artisan: „KI-Mitarbeiter für Go-to-Market-Teams“ („AI employees for go-to-market teams“). Ava findet Leads, reichert sie an, schreibt Outreach-Nachrichten, beantwortet Rückmeldungen und bucht Termine, mit menschlichen Freigaben. Siehe [artisan.co](https://www.artisan.co).",
        "Ema: ein „universeller KI-Mitarbeiter“ („Universal AI Employee“), den du einrichtest, indem du sein Ziel in Alltagssprache beschreibst, für HR, IT, Finanzen und mehr. Siehe [ema.ai](https://www.ema.ai).",
        "Devin: „der autonome Softwareentwickler deines Teams“ („your team's autonomous software engineer“). Du weist ihm ein Ticket zu und bekommst einen Pull Request; Max kostet $200/Monat, Teams $80/Monat plus $40 pro Seat. Preise: [devin.ai/pricing](https://devin.ai/pricing).",
        "ai-employees: ein MIT-lizenziertes GitHub-Projekt, bei dem „ein KI-Mitarbeiter ein Ordner mit geplanten Routinen ist, der eine Geschäftsrolle abdeckt“ („an AI Employee is a folder of scheduled routines that covers one business role“), ausgeführt von dem Coding-Agenten, den du schon hast. Siehe [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).",
        "Crewmark: macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und einem Board voller Issues; er kommentiert seine Issues und schreibt dir, wenn er eine Entscheidung braucht. Siehe [Claude Code proaktiv machen](/proactive-claude-code).",
      ],
    },
    {
      kind: "text",
      title: "Kostenlose KI-Mitarbeiter und Open Source auf GitHub",
      text: [
        "Gratis-Pläne gibt es, aber sie sind klein: Lindy gibt $50 Guthaben für sieben Tage, Devin ein kleines Kontingent und Ema eine Testphase. Der Open-Source-Weg kostet kein Geld, dafür Einrichtungszeit: GitHub-Projekte wie markfulton/ai-employees laufen auf einem Agenten-Abo, das du schon hast, und mit einem Claude-Pro- oder Max-Plan verbrauchen sie die Limits deines Plans statt zusätzlicher Dollar.",
        "Wenn du eher Open-Source-Agenten-Frameworks als fertige Mitarbeiter vergleichst, sieh dir unsere Vergleiche mit [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip) und [Multica](/alternatives/multica) an.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "KI-Mitarbeiter auf dem Coding-Agenten, für den du schon zahlst",
      text: [
        "Crewmark ist für Teams, deren Arbeit ohnehin schon über Claude Code oder Codex läuft. Statt eine neue KI samt Credits zu kaufen, gibst du deinem bestehenden Agenten einen Job.",
      ],
      steps: [
        {
          title: "Wähle eine Rolle und ein Ziel",
          text: "Softwareentwickler, SEO-Spezialist, Growth Marketer oder eine Rolle, die du selbst schreibst, mit einem Ziel in Zahlen.",
        },
        {
          title: "Verbinde eine Session",
          text: "Führe in deinem Projekt einen Setup-Befehl aus; der Mitarbeiter läuft in einer Session von Claude Code, Codex, DeepSeek Harness oder OpenCode auf deinem Rechner, mit deinem Tarif.",
        },
        {
          title: "Weise Issues zu; der Heartbeat erledigt den Rest",
          text: "Während der Arbeitszeiten wacht der Mitarbeiter alle 15, 30 oder 60 Minuten auf, nimmt das nächste Issue, kommentiert seine Arbeit und schreibt dir, wenn er eine Entscheidung braucht.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Eine KI-Mitarbeiter-Plattform auswählen" },
  mid: {
    title: "Du zahlst schon für Claude Code oder Codex?",
    text: "Crewmark macht daraus KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Board voller Issues, ohne zweite KI-Rechnung.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu KI-Mitarbeiter-Plattformen",
    items: [
      {
        q: "Was ist die beste KI-Mitarbeiter-Plattform?",
        a: "Das hängt von der Aufgabe ab. Für Büroarbeit über viele Bereiche Lindy; für Marketing und Support in kleinen Unternehmen Sintra oder Marblism; für Outbound-Vertrieb Artisan; für HR und IT in Großunternehmen Ema; für Code Devin; und wenn du schon Claude Code oder Codex nutzt, das Open-Source-Projekt ai-employees oder Crewmark.",
      },
      {
        q: "Gibt es kostenlose KI-Mitarbeiter?",
        a: "Einige Plattformen haben kleine Gratis-Pläne oder Testphasen: Lindy ($50 Guthaben für 7 Tage), Devin (ein kleines Kontingent) und Ema (eine Testphase). Open-Source-Projekte wie markfulton/ai-employees sind kostenlos und laufen auf einem Agenten-Abo, das du schon hast.",
      },
      {
        q: "Was kostet ein KI-Mitarbeiter?",
        a: "Am 6. November 2026 reichten die Einstiegspläne von etwa $20 im Monat (Devin Pro) bis $49.99 pro Nutzer (Lindy Team); bei Artisan und Ema gibt es Preise nur über den Vertrieb. Tools, die auf deinem eigenen Claude-Code- oder Codex-Plan laufen, verursachen kaum oder keine zusätzlichen Modellkosten.",
      },
      {
        q: "Was ist der Unterschied zwischen einem KI-Mitarbeiter und einem KI-Agenten?",
        a: "Ein KI-Agent erledigt eine Aufgabe, wenn man ihn darum bittet. Ein KI-Mitarbeiter ist ein Agent mit Rolle, Ziel und Zeitplan, der deshalb von selbst mit der Arbeit beginnt und dranbleibt. Mehr unter [Was ist ein KI-Mitarbeiter?](/ai-employees).",
      },
      {
        q: "Können kleine Unternehmen KI-Mitarbeiter nutzen?",
        a: "Ja. Sintra und Marblism sind für kleine Unternehmen gebaut, mit benannten Mitarbeitern für Support, Social Media, SEO und Vertrieb, zu Preisen von etwa $24 bis $49 im Monat.",
      },
      {
        q: "Gibt es Open-Source-KI-Mitarbeiter auf GitHub?",
        a: "Ja. markfulton/ai-employees (MIT) bündelt 8 Geschäftsrollen als geplante Routinen für Claude Code, Codex, OpenCode und andere Agenten; weitere Projekte sind OpenCompany und eggent.",
      },
      {
        q: "Wie stelle ich einen KI-Mitarbeiter ein?",
        a: "Wähle eine Rolle und eine Zahl, die sie bewegen soll, nimm eine Plattform, die von selbst mit der Arbeit beginnt und vor riskanten Aktionen fragt, lass sie zwei Wochen laufen und behalte sie nur, wenn sich die Zahl bewegt.",
      },
    ],
  },
  cta: {
    title: "Gib dem Agenten, für den du schon zahlst, einen Job.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex und DeepSeek Harness KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Website und der Preisseite jedes Anbieters abgeglichen. Preise ändern sich; die Links führen zu den aktuellen.",
  disclaimer:
    "Crewmark ist eines der verglichenen Produkte. Produktnamen sind Marken ihrer Inhaber; kein Anbieter hat diese Seite geprüft oder unterstützt.",
};
