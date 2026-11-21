import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw-Erfahrungen: Was Nutzer auf Hacker News sagen (2026)",
    description:
      "OpenClaw-Erfahrungen aus 10 Hacker-News-Threads, Februar bis November 2026: was Nutzern gefällt, die häufigste Kritik und worauf sie umsteigen.",
  },
  breadcrumb: "OpenClaw-Erfahrungen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Erfahrungen",
    title: "OpenClaw-Erfahrungen: was Nutzer auf Hacker News sagen",
    lead: "OpenClaw ist ein persönlicher Open-Source-KI-Assistent, der auf deinem eigenen Computer läuft und dir in Chat-Apps antwortet, die du schon nutzt, etwa WhatsApp, Telegram und Slack. Wir haben 10 Hacker-News-Threads über ihn gelesen, von Februar bis November 2026. Nutzer schätzen ihn für kleine persönliche Erledigungen und mögen es, dass sein Gedächtnis ihnen selbst gehört. Am häufigsten kritisiert wurde, dass er oft kaputtgeht und Pflege braucht (6 der 10 Threads) und dass sein weitreichender Zugriff ein Sicherheitsrisiko ist (5 von 10).",
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
        "Am 13. November 2026 haben wir 10 Hacker-News-Threads über OpenClaw gelesen, eine Seite nach der anderen. Sie stammen aus der Zeit von Februar bis November 2026, 7 davon aus den Monaten Februar bis April, als am meisten diskutiert wurde. In den größten Threads mit mehreren Hundert Kommentaren haben wir die Kommentare der obersten Ebene und die Passagen zu den wichtigsten Themen gelesen, nicht jede Antwort.",
      ],
      points: [
        "Ein Thema steht hier nur, wenn es in mindestens 2 der 10 Threads vorkam, und wir nennen, in wie vielen. Punkte aus einem einzelnen Kommentar lassen wir weg.",
        "Einer der Threads handelt von Grok Bot; daraus haben wir die Kommentare genutzt, die Grok Bot mit OpenClaw vergleichen. Ein anderer fragt allgemein nach den KI-Setups der Leute; daraus haben wir die Erwähnungen von OpenClaw genutzt.",
        "Außerdem haben wir über die Google-Suche 9 Reddit-Threads gefunden, konnten reddit.com aber nicht öffnen, deshalb haben wir sie weder gelesen noch zusammengefasst. Sie stehen mit ihrem Titel unter [Mehr Diskussion auf Reddit](#reddit).",
        "Das ist eine Stichprobe öffentlicher Diskussionen, keine Umfrage. Wer über ein Tool postet, hat meist eine ausgeprägte Meinung. Die Monate sind aus dem Alter der Threads errechnet und können um einen Monat abweichen.",
        "Nichts davon wurde bezahlt oder angefragt: Wir haben nichts gepostet, um keine Bewertungen gebeten und niemanden kontaktiert. Die Zusammenfassungen sind in unseren eigenen Worten, und das eine Zitat ist gekennzeichnet und verlinkt.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "OpenClaw-Erfahrungen auf einen Blick",
      text: ["Was in den 10 gelesenen Hacker-News-Threads vorkam. Gezählt werden Threads, nicht Kommentare."],
      headers: ["Thema", "Was Nutzer sagen", "Threads"],
      rows: [
        ["Lob: praktisch für persönliche Erledigungen", "Erinnerungen, Follow-ups, Kalenderaufgaben und Bots für Gruppenchats, wenn er funktioniert", "3 von 10"],
        ["Lob: in deinen Chat-Apps, mit einem Gedächtnis, das dir gehört", "Er antwortet in Apps wie WhatsApp und speichert sein Gedächtnis in Dateien, die du lesen und bearbeiten kannst", "2 von 10"],
        ["Lob: wohin sich Assistenten entwickeln", "Selbst Kritiker sehen darin, was eingebaute Assistenten hätten sein sollen", "2 von 10"],
        ["Kritik: geht oft kaputt", "Updates machen Dinge kaputt, und die Pflege kostet mehr Zeit, als er spart", "6 von 10"],
        ["Kritik: Sicherheitsrisiko", "Weitreichender Zugriff auf deinen Computer und deine Konten, dazu anfällig für Prompt Injection", "5 von 10"],
        ["Kritik: mehr Hype als echte Nutzung", "Große Behauptungen ohne konkrete Beispiele; Demo-Aufgaben, die nach Show aussehen", "4 von 10"],
        ["Kritik: Kosten und Abos", "Die Modellnutzung summiert sich, und er hängt von den Abo-Regeln anderer Firmen ab", "3 von 10"],
        ["Kritik: braucht einen Extra-Rechner und Know-how", "Läuft am besten auf einem separaten Computer, betreut von jemandem, der ihn gern wartet", "2 von 10"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Was Nutzern gefällt",
      points: [
        `Praktisch für persönliche Erledigungen, wenn er funktioniert (3 von 10 Threads). Nutzer beschreiben, wie er Erinnerungen und Follow-ups verschickt, kleine Kalenderaufgaben erledigt und Bots für Familien- oder Gruppenchats betreibt. Hacker-News-Threads: [April 2026](${hn.whoIsUsing}), [April 2026](${hn.memory}), [November 2026](${hn.agenticSetup}).`,
        `Er lebt in den Chat-Apps, die du schon nutzt, mit einem Gedächtnis, das dir gehört (2 von 10). Nutzer schreiben ihm gern aus Apps wie WhatsApp und mögen, dass sein Gedächtnis in Dateien auf ihrem eigenen Rechner liegt, die sie lesen und bearbeiten können. Threads: [April 2026](${hn.whoIsUsing}), [August 2026](${hn.grokBot}).`,
        `Ein Ausblick darauf, wohin sich Assistenten entwickeln (2 von 10). Selbst Kommentatoren, die ihn kritisieren, sagen, er tue, was die in Smartphones und Computer eingebauten Assistenten hätten tun sollen, und erwarten, dass die Idee dieses Projekt überdauert. Threads: [Februar 2026](${hn.appleIntelligence}), [März 2026](${hn.securityNightmare}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Häufige Kritikpunkte",
      points: [
        `Er geht oft kaputt und braucht ständige Pflege (6 von 10 Threads). Nutzer beschreiben Updates, die Dinge kaputtmachen, Funktionen, die ohne Vorwarnung nicht mehr gehen, und dass sie mehr Zeit mit Reparieren als mit Nutzen verbringen. Ein Kommentator auf Hacker News schrieb im November 2026: „Bei jedem Update ist etwas kaputtgegangen, und ich habe mehr Zeit mit Reparieren verbracht“ („Every update something broke, and I spent more time fixing things“) ([Thread](${hn.agenticSetup})). Threads: [Februar 2026](${hn.appleIntelligence}), [April 2026](${hn.whoIsUsing}), [April 2026](${hn.memory}), [August 2026](${hn.grokBot}), [November 2026](${hn.agenticSetup}), [November 2026](${hn.saas}).`,
        `Sein weitreichender Zugriff ist ein Sicherheitsrisiko (5 von 10). Nutzer weisen darauf hin, dass er weitreichenden Zugriff auf deinen Computer und deine Konten bekommt und sich durch Prompt Injection lenken lässt. Der übliche Rat ist, ihn auf einem separaten Rechner mit separaten Konten zu betreiben; manche raten, ihn gar nicht erst zu installieren. Threads: [Februar 2026](${hn.personalComputer}), [Februar 2026](${hn.appleIntelligence}), [Februar 2026](${hn.changingMyLife}), [März 2026](${hn.securityNightmare}), [April 2026](${hn.whoIsUsing}).`,
        `Mehr Hype als echte Nutzung (4 von 10). Nutzer sagen, Beiträge über OpenClaw versprächen große Veränderungen ohne konkrete Beispiele, und seine üblichen Demo-Aufgaben, etwa einen Flug buchen oder ein Meeting planen, sähen eher nach Produktivitätstheater aus als nach gesparter Zeit. Threads: [Februar 2026](${hn.changingMyLife}), [März 2026](${hn.securityNightmare}), [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
        `Kosten und die Abhängigkeit von Abos anderer Firmen (3 von 10). Nutzer sagen, die Modellnutzung dahinter summiere sich. Im April 2026 berichtete ein Hacker-News-Thread, dass Anthropic Claude-Code-Abos nicht mehr für OpenClaw zuließ; Kommentatoren wogen API-Preise gegen einen Wechsel zu anderen Modellanbietern ab. Threads: [April 2026](${hn.whoIsUsing}), [April 2026](${hn.anthropicSubscriptions}), [April 2026](${hn.memory}).`,
        `Er braucht einen Extra-Rechner und technisches Können (2 von 10). Nutzer sagen, er laufe am besten auf einem separaten Computer, betreut von jemandem, dem die Wartung liegt, und einige Inhaber kleiner Firmen wünschen sich stattdessen eine gehostete, fertig eingerichtete Version. Threads: [Februar 2026](${hn.personalComputer}), [November 2026](${hn.saas}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Worauf Leute umsteigen",
      text: [
        "Diese Optionen wurden in mindestens 2 der 10 Threads empfohlen. Andere Tools wurden jeweils nur in einem Thread genannt, deshalb lassen wir sie hier weg; unser [Guide zu OpenClaw-Alternativen](/blog/openclaw-alternatives) vergleicht die wichtigsten Optionen anhand ihrer eigenen Docs.",
      ],
      points: [
        `Hermes Agent (3 von 10). Nutzer, die gewechselt sind, sagen, er laufe bei ihnen zuverlässiger. Siehe [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) und [Hermes-Agent-Preise](/pricing/hermes-agent). Threads: [April 2026](${hn.whoIsUsing}), [August 2026](${hn.grokBot}), [November 2026](${hn.agenticSetup}).`,
        `Einfach Claude Code oder Codex, mit Skills und einer guten \`CLAUDE.md\` (3 von 10). Mehrere Nutzer sagen, sie hätten große OpenClaw-Setups gebaut und seien zu den Coding-Agenten zurückgekehrt, die sie schon hatten. Siehe [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) und [Claude Code vs Codex](/blog/claude-code-vs-codex). Threads: [Februar 2026](${hn.changingMyLife}), [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
        `Claude Cowork (2 von 10). Empfohlen als gehosteter Assistent von Anthropic. Siehe unseren [Guide zu Claude Cowork](/personal-agent/claude-cowork). Threads: [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
        `Cronjobs und eigene Skripte (2 von 10). Manche Nutzer sagen, das meiste, was OpenClaw tut, ließe sich mit ein paar geplanten Skripten erledigen. Threads: [April 2026](${hn.whoIsUsing}), [November 2026](${hn.agenticSetup}).`,
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
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, Februar 2026",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, Februar 2026",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, März 2026",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, März 2026",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, April 2026",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, Juni 2026",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, Juli 2026",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, August 2026",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, Oktober 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Fakten zu OpenClaw, um Aussagen zu prüfen",
      text: [
        "Aus OpenClaws eigener README, Doku und GitHub, geprüft am 13. November 2026. Mehr zu den Kosten auf unserer Seite [OpenClaw-Preise](/pricing/openclaw).",
      ],
      points: [
        "Was es ist: ein persönlicher Open-Source-KI-Assistent. Ein Gateway läuft auf deinem eigenen Computer und antwortet dir in Chat-Apps wie WhatsApp, Telegram, Slack, Discord und iMessage; Zustand, Gedächtnis und Zugangsdaten bleiben auf deiner Hardware.",
        "Preis: kostenlos. Laut README hat das Projekt keinen bezahlten Tarif, keinen gehosteten Dienst und keinen Token. Du bezahlst deinen Modellanbieter.",
        "Lizenz: MIT. Betrieben wird das Projekt von der OpenClaw Foundation, einer unabhängigen gemeinnützigen Organisation.",
        "Wo es läuft: auf deinem eigenen Rechner, mit Installern für macOS, Linux, Windows und WSL2, Apps für macOS, iOS, Android, Windows und Linux sowie dokumentierten Installationen per Docker und Nix.",
        "Modelle: Plugins für OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM und weitere.",
        "Sicherheit, laut eigener Doku: Tools laufen in der Hauptsession auf dem Host, solange du kein Sandboxing konfigurierst, und Exec-Freigaben sind standardmäßig aus.",
        "Zeitplanung: ein eingebauter Scheduler für wiederkehrende und einmalige Jobs, dazu Trigger per Webhook und Gmail.",
        "Namen: am 30. Januar 2026 in OpenClaw umbenannt; frühere Namen sind unter anderem Clawdbot und Moltbot. Stand 13. November 2026 hat das Projekt 394.406 GitHub-Sterne. Offizielle Website: [openclaw.ai](https://openclaw.ai).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib Claude Code oder Codex einen festen Job",
      text: [
        "Mehrere Nutzer in diesen Threads sind zu Claude Code oder Codex zurückgekehrt. Crewmark baut darauf auf: Es macht aus deinen eigenen Sessions in Claude Code oder Codex KI-Mitarbeiter mit Rolle, Zielen und Arbeitszeiten, die jeweils das nächste Issue von einem gemeinsamen Board nehmen. Ein persönlicher Assistent in deinen Chat-Apps ist es nicht: Die Arbeit läuft über Issues, es gibt keine eingebaute Slack-Integration, und die Agenten laufen auf deinem Computer, der eingeschaltet bleiben muss. Crewmark ist Open Source unter GPL-3.0 und kostenlos für 1 Projekt und bis zu 3 KI-Mitarbeiter.",
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
        q: "Lohnt sich OpenClaw?",
        a: "Das hängt davon ab, wie viel Pflege du in Kauf nimmst. In den 10 Hacker-News-Threads, die wir gelesen haben, setzen Nutzer, die ihn mögen, ihn für persönliche Erledigungen wie Erinnerungen und Kalenderaufgaben ein, aus Chat-Apps, die sie schon nutzen. Die häufigste Kritik, in 6 der 10 Threads, ist, dass er oft kaputtgeht und ständig repariert werden muss. Die Software ist kostenlos unter der MIT-Lizenz; du bezahlst für die Modelle, die er nutzt.",
      },
      {
        q: "Ist die Nutzung von OpenClaw sicher?",
        a: "Sicherheit kam in 5 der 10 Threads zur Sprache. Nutzer verweisen auf seinen weitreichenden Zugriff auf deinen Computer und deine Konten und auf Prompt Injection und raten, ihn auf einem separaten Rechner mit separaten Konten zu betreiben. Laut OpenClaws eigener README laufen Tools in der Hauptsession auf dem Host, solange du kein Sandboxing konfigurierst, und seine Exec-Freigaben sind standardmäßig aus.",
      },
      {
        q: "Warum sagen Leute, OpenClaw sei überhypt?",
        a: "In 4 der 10 Threads sagen Nutzer, Beiträge darüber hätten große Ergebnisse ohne konkrete Beispiele versprochen, und seine Demo-Aufgaben sähen eher nach Produktivitätstheater aus als nach gesparter Zeit. Einer der Reddit-Threads in unserer Liste, aus r/LocalLLaMA vom März 2026, nennt ihn im Titel überhypt und schlägt stattdessen Skills vor; gelesen haben wir ihn nicht.",
      },
      {
        q: "Was nutzen Leute statt OpenClaw?",
        a: "In den gelesenen Threads: Hermes Agent und einfach Claude Code oder Codex (je 3 Threads), danach Claude Cowork sowie Cronjobs mit eigenen Skripten (je 2 Threads). Unser [Guide zu OpenClaw-Alternativen](/blog/openclaw-alternatives) vergleicht die Optionen anhand ihrer eigenen Docs.",
      },
      {
        q: "Was sagen Reddit-Nutzer über OpenClaw?",
        a: "Wir konnten Reddit nicht öffnen, deshalb haben wir diese Threads nicht zusammengefasst. Allein nach ihren Titeln: Vier fragen, ob sich OpenClaw noch lohnt, ob es sich lohnt, dabeizubleiben, oder ob es tot ist, einer davon, weil der Verfasser jetzt Codex hat; drei haben kritische Titel, einer davon schlägt stattdessen Skills vor; einer, in r/myclaw, wehrt sich dagegen, OpenClaw nutzlos zu nennen; und einer ist ein Erfahrungsbericht nach ausgiebigem Testen. Alle neun sind unter [Mehr Diskussion auf Reddit](#reddit) verlinkt.",
      },
      {
        q: "Ist OpenClaw kostenlos?",
        a: "Ja. Laut README hat das Projekt keinen bezahlten Tarif, keinen gehosteten Dienst und keinen Token, und es steht unter der MIT-Lizenz. Du bezahlst deinen Modellanbieter, und Kosten kamen in 3 der 10 gelesenen Threads zur Sprache, darunter ein Thread vom April 2026 darüber, dass Anthropic Claude-Code-Abos nicht mehr für OpenClaw zuließ. Siehe [OpenClaw-Preise](/pricing/openclaw).",
      },
    ],
  },
  cta: {
    title: "Gib deinem Coding-Agenten einen festen Job.",
    text: "Crewmark macht aus Sessions in Claude Code und Codex KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Threads am 13. November 2026 gelesen. Produktfakten am selben Tag mit OpenClaws eigener README, Doku und GitHub abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt, das weder mit der OpenClaw Foundation noch mit einem anderen auf dieser Seite genannten Unternehmen verbunden ist und von keinem davon unterstützt wird. Die hier zusammengefassten Meinungen sind die der Kommentatoren in den verlinkten Threads. Produktnamen sind Marken ihrer Inhaber.",
};
