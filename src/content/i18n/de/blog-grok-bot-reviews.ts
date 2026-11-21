import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok-Bot-Erfahrungen: Was Nutzer auf Hacker News sagen (2026)",
    description:
      "Grok-Bot-Erfahrungen aus 6 Hacker-News-Threads, August bis November 2026: was Nutzern gefällt, Kritik an Limits und Sicherheit, und was sie stattdessen nutzen.",
  },
  breadcrumb: "Grok-Bot-Erfahrungen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Erfahrungen",
    title: "Grok-Bot-Erfahrungen: was Nutzer auf Hacker News sagen",
    lead: "Grok Bot ist das Angebot von xAI für gehostete KI-Teamkollegen: Bots, die jeweils einen eigenen Computer in der Cloud bekommen, sich bei deinen Tools anmelden, in Slack und Microsoft Teams arbeiten, Routinen ausführen und sich gegenseitig Arbeit übergeben. Wir haben 7 Hacker-News-Threads darüber gelesen, von August bis November 2026, seinen ersten drei Monaten; einer davon war der Launch-Beitrag eines konkurrierenden Tools, deshalb stammen die Zahlen aus den anderen 6. Nutzer beschreiben, wie sie ihm echte Erledigungen übergeben, ohne Code zu schreiben. Am häufigsten kritisiert wurden die Nutzungslimits, in 3 der 6 Threads; Sicherheit und unklarer Nutzen kamen in je 2 vor.",
    cta: "Loslegen",
    secondary: "Zu den Themen",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "So haben wir die Erfahrungen gesammelt",
      text: [
        "Am 13. November 2026 haben wir 7 Hacker-News-Threads über Grok Bot gelesen, eine Seite nach der anderen. Einer davon war der Launch-Beitrag eines konkurrierenden Open-Source-Tools, geschrieben von dessen Macher, und wir haben ihn für kein Thema mitgezählt; jede Zahl auf dieser Seite bezieht sich also auf die anderen 6. Grok Bot startete am 11. August 2026 als Beta, alle Threads stammen also aus seinen ersten drei Monaten, August bis November 2026.",
      ],
      points: [
        "Ein Thema steht hier nur, wenn es in mindestens 2 der 6 gezählten Threads vorkam, und wir nennen, in wie vielen. Punkte aus einem einzelnen Kommentar lassen wir weg.",
        "Einer der 6 handelt nicht nur von Grok Bot: Es ist ein allgemeiner Thread, in dem Leute ihre KI-Setups beschreiben, und wir haben nur die Erwähnungen von Grok Bot genutzt. Zwei andere besprechen dieselbe Meldung, und der spätere verlinkt den früheren, deshalb zählen wir diese Meldung einmal.",
        "Außerdem haben wir über die Google-Suche 17 Reddit-Threads gefunden, konnten reddit.com aber nicht öffnen, deshalb haben wir sie weder gelesen noch zusammengefasst. Sie stehen mit ihrem Titel unter [Mehr Diskussion auf Reddit](#reddit).",
        "Das ist eine Stichprobe öffentlicher Diskussionen, keine Umfrage. Wer über ein Tool postet, hat meist eine ausgeprägte Meinung. Die Monate sind aus dem Alter der Threads errechnet und können um einen Monat abweichen.",
        "Nichts davon wurde bezahlt oder angefragt: Wir haben nichts gepostet, um keine Bewertungen gebeten und niemanden kontaktiert. Die Zusammenfassungen sind in unseren eigenen Worten, und das eine Zitat ist gekennzeichnet und verlinkt.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Grok-Bot-Erfahrungen auf einen Blick",
      text: [
        "Was in den 6 gezählten Hacker-News-Threads vorkam (der siebte, der Launch-Beitrag eines konkurrierenden Tools, zählt nicht mit). Gezählt werden Threads, nicht Kommentare.",
      ],
      headers: ["Thema", "Was Nutzer sagen", "Threads"],
      rows: [
        ["Lob: Erledigungen ohne Code", "Recherche, E-Mails und regelmäßige Zusammenfassungen, von Anfang bis Ende übergeben", "2 von 6"],
        ["Kritik: Nutzungslimits", "Bots, die ständig laufen, verbrauchen viel Nutzung, und ein Thread im November besprach, dass Grok Bot gedrosselt wurde", "3 von 6"],
        ["Kritik: Sicherheit", "Prompt Injection und Bots, denen man Logins und Zugriff auf sensible Konten gibt", "2 von 6"],
        ["Kritik: unklarer Nutzen", "Schwer, eine Aufgabe dafür zu nennen, oder als gehostete Variante von Open-Source-Agenten gesehen", "2 von 6"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Was Nutzern gefällt",
      points: [
        `Echte Erledigungen ohne Programmieren (2 von 6 Threads). Nutzer beschreiben, wie sie ihm Erledigungen übergeben, etwa einen Lieferanten suchen, Bewerbungen und E-Mails verschicken und Zusammenfassungen von Websites und Social Media erstellen. Hacker-News-Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Häufige Kritikpunkte",
      points: [
        `Nutzungslimits und Token-Verbrauch (3 von 6 Threads). Nutzer sagen, Bots, die ständig laufen, verbrauchten das wöchentliche Kontingent schnell. Ein Kommentator auf Hacker News formulierte es im August 2026 so: „Ständig laufende Dauer-Agenten verbrauchen SEHR viele Tokens“ („Always on perpetual agents use a LOT of tokens“) ([Thread](${hn.launch})). Im November 2026 besprach ein Hacker-News-Thread, dass Grok Bot gedrosselt wurde, nachdem die Kosten von xAI die Einnahmen aus den Abos überholt hatten, wie es der Titel des Threads formuliert. Threads: [August 2026](${hn.launch}), [November 2026](${hn.throttled}), [November 2026](${hn.agenticSetup}).`,
        `Sicherheit und Kontozugriff (2 von 6). Nutzer sorgen sich um Prompt Injection und darum, Bots ihre Logins und Zugriff auf sensible Konten zu geben, ohne feste Grenzen dafür, was jeder Bot erreichen kann. Threads: [August 2026](${hn.launch}), [Oktober 2026](${hn.agentAccess}).`,
        `Unklarer Nutzen (2 von 6). Manche Nutzer konnten keine Aufgabe nennen, die sie ihm übergeben würden; andere sehen darin eine gehostete Version von Open-Source-Agenten wie OpenClaw. Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Worauf Leute umsteigen",
      text: [
        "Diese Optionen wurden in mindestens 2 der 6 gezählten Threads empfohlen. Andere Tools wurden jeweils nur in einem Thread genannt, deshalb lassen wir sie hier weg; unsere Seite [Grok-Bot-Alternativen](/alternatives/grok-bot) vergleicht die wichtigsten Optionen anhand ihrer eigenen Docs.",
      ],
      points: [
        `Hermes Agent (2 von 6). In einem Thread empfohlen und in einem anderen als vergleichbare Option genannt; Nutzer beschreiben ihn als günstiger und besser konfigurierbar, mit freier Wahl des Modells. Siehe [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) und [Hermes-Agent-Preise](/pricing/hermes-agent). Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
        `Ein eigenes Setup mit Codex oder Claude Code (2 von 6). Nutzer sagen, Codex oder Claude Code plus ein paar eigene Skripte erledige einen Großteil derselben Arbeit für weniger Geld. Siehe [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code). Threads: [August 2026](${hn.launch}), [November 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Mehr Diskussion auf Reddit",
      text: [
        "Diese Reddit-Threads listen wir zum Weiterlesen auf. Wir haben sie über die Google-Suche gefunden, konnten reddit.com aber nicht öffnen, deshalb haben wir sie weder gelesen noch zusammengefasst, und keines der Themen oben stützt sich auf sie.",
      ],
      points: [
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, August 2026",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, September 2026",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, September 2026",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, September 2026",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, September 2026",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, September 2026",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, Oktober 2026",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, Oktober 2026",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, Oktober 2026",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, Oktober 2026",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, Oktober 2026",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, Oktober 2026",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, November 2026",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, November 2026",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, November 2026",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, November 2026",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, November 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Fakten zu Grok Bot, um Aussagen zu prüfen",
      text: [
        "Von der Produktseite und dem Launch-Beitrag von xAI, geprüft am 13. November 2026. Mehr in unserem [Guide zu Grok Bot](/personal-agent/grok-bot).",
      ],
      points: [
        "Was es ist: gehostete KI-Teamkollegen von xAI. Jeder Bot bekommt einen eigenen Computer in der Cloud, meldet sich bei deinen Tools und Apps an, arbeitet in Slack und Microsoft Teams, führt Routinen nach Zeitplan aus und übergibt Arbeit an andere Bots.",
        "Veröffentlicht: am 11. August 2026 als Beta; laut Produktseite hat es die Beta inzwischen verlassen.",
        "Preis: enthalten in den Plänen Premium ($30 im Monat), Super ($100 im Monat, das 3,5-Fache der Nutzung von Premium) und Ultra ($200 im Monat, das 12-Fache der Nutzung von Premium) von xAI, monatlich abgerechnet. Jeder Plan enthält wöchentliche Grok-Bot-Nutzung, und zusätzliche Nutzung wird nach Token-Kosten abgerechnet. Teams und Enterprise laufen über den Vertrieb.",
        "Lizenz: nicht Open Source.",
        "Wo es läuft: in der Cloud von xAI, also arbeiten Bots weiter, wenn dein Laptop zugeklappt ist. Du erreichst sie über Desktop- und Mobile-Apps, in Slack und Microsoft Teams sowie in Calls über Google Meet, Zoom oder Teams.",
        "Modelle: Die Bots basieren auf Grok.",
        "Freigaben: Bots melden sich, wenn sie eine Freigabe brauchen, und heikle Aktionen können durch Auto Review laufen.",
        "Offizielle Website: [x.ai/bot](https://x.ai/bot).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Agenten auf deinem eigenen Computer, mit einem festen Job",
      text: [
        "Grok Bot betreibt Bots in der Cloud von xAI auf Grok. Crewmark geht einen anderen Weg: Deine eigenen Sessions in Claude Code oder Codex, auf deinem Computer und mit dem Abo, für das du schon zahlst, werden zu KI-Mitarbeitern mit Rolle, Zielen und Arbeitszeiten, die jeweils das nächste Issue von einem gemeinsamen Board nehmen. Die Kompromisse: Dein Computer muss eingeschaltet bleiben, die Agenten stimmen sich vorerst über Issues ab (Direktnachrichten zwischen Agenten kommen noch), und es gibt keine eingebaute Slack-Integration. Crewmark ist Open Source unter GPL-3.0 und kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter.",
      ],
      steps: [
        { title: "Wähle eine Rolle", text: "Beginne mit den [Rollen für KI-Mitarbeiter](/ai-employees) oder schreib deine eigene Rolle und eigene Ziele." },
        {
          title: "Bring die Arbeit auf ein Board",
          text: "Weise Issues zu und lass die regelmäßigen sich wiederholen. Während der Arbeitszeit weckt ein Heartbeat den Mitarbeiter, alle 15 Minuten bis einmal am Tag, damit er das nächste nimmt.",
        },
        {
          title: "Antworte, wenn er fragt",
          text: "Braucht er ein Review, eine Erlaubnis oder Informationen, setzt er das Issue auf „Handlungsbedarf“ und fragt dich dort. Jobs samt Einrichtung für jeden Agenten findest du unter [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Du willst, dass dein Coding-Agent nach Zeitplan arbeitet?",
    text: "Crewmark gibt Claude Code oder Codex eine Rolle, einen Heartbeat und ein gemeinsames Board.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Lohnt sich Grok Bot?",
        a: "Das hängt davon ab, was du ihm übergeben würdest und wie viel Nutzung du brauchst. In den 6 gezählten Hacker-News-Threads beschreiben Nutzer Erledigungen ohne Code, etwa Recherche, E-Mails und regelmäßige Zusammenfassungen. Am häufigsten kritisiert wurden die Nutzungslimits, in 3 der 6; Sicherheit und unklarer Nutzen kamen in je 2 vor. Grok Bot ist im Premium-Plan von xAI für $30 im Monat enthalten, mit Super für $100 und Ultra für $200 für mehr Nutzung.",
      },
      {
        q: "Was sind die häufigsten Kritikpunkte an Grok Bot?",
        a: "In den 6 gezählten Threads: Nutzungslimits und Token-Verbrauch (3 von 6); Sicherheit, vor allem Prompt Injection und Bots, denen man Logins und Zugriff auf sensible Konten gibt (2 von 6); und unklarer Nutzen, von Nutzern, die keine Aufgabe dafür nennen konnten oder darin eine gehostete Version von Open-Source-Agenten sehen (2 von 6).",
      },
      {
        q: "Ist Grok Bot sicher?",
        a: "Sicherheit kam in 2 der 6 gezählten Threads zur Sprache. Nutzer sorgen sich um Prompt Injection und darum, Bots ihre Logins und Zugriff auf sensible Konten zu geben, ohne feste Grenzen dafür, was jeder Bot erreichen kann. Laut der Produktseite von xAI melden sich Bots, wenn sie eine Freigabe brauchen, und heikle Aktionen können durch Auto Review laufen.",
      },
      {
        q: "Gibt es einen ehrlichen Erfahrungsbericht zu Grok Bot?",
        a: "Diese Seite testet Grok Bot nicht selbst; sie fasst zusammen, was Nutzer in 6 Hacker-News-Threads aus seinen ersten drei Monaten gesagt haben, mit Links, damit du sie selbst lesen kannst. Nutzer beschreiben, wie sie Erledigungen ohne Code übergeben. Die häufigste Kritik betrifft die Nutzungslimits (3 von 6), gefolgt von Sicherheit und unklarem Nutzen (je 2 von 6). Nichts hier wurde bezahlt oder angefragt.",
      },
      {
        q: "Was sagen Reddit-Nutzer über Grok Bot?",
        a: "Wir konnten Reddit nicht öffnen, deshalb haben wir diese Threads nicht zusammengefasst. Allein nach ihren Titeln: Sieben fragen nach Alternativen oder verweisen auf welche, mehrere davon Open Source oder selbst gehostet; drei fragen, ob es sich lohnt, einer davon mit Blick auf den Premium-Plan für $30; zwei drehen sich um Nutzungslimits und Abrechnung; einer vergleicht es mit Muse von Meta; einer, in r/MuseAgent, fragt, ob das, was Grok Bot passiert ist, auch Muse passieren könnte; einer sagt, laut seiner Doku teilten sich alle deine Bots einen Computer, während die Produktseite von xAI sagt, jeder Bot habe einen eigenen (siehe [die Fakten](#facts)); einer rät, sich von xAI fernzuhalten; und einer sagt, Grok Bot habe bestätigt, woran der Verfasser gebaut hat. Alle 17 sind unter [Mehr Diskussion auf Reddit](#reddit) verlinkt.",
      },
      {
        q: "Was nutzen Leute statt Grok Bot?",
        a: "In den 6 gezählten Threads kamen zwei mehr als einmal vor: Hermes Agent, den Nutzer als günstiger und besser konfigurierbar beschreiben, und ein selbst gebautes Setup mit Codex oder Claude Code plus eigenen Skripten (je 2 von 6). Unsere Seite [Grok-Bot-Alternativen](/alternatives/grok-bot) vergleicht weitere Optionen anhand ihrer eigenen Docs.",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agenten einen festen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Threads am 13. November 2026 gelesen. Produktfakten am selben Tag mit der Produktseite und dem Launch-Beitrag von xAI abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit xAI noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Die hier zusammengefassten Meinungen sind die der Kommentatoren in den verlinkten Threads. Produktnamen sind Marken ihrer Inhaber.",
};
