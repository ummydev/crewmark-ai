import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Was ist ein Superagent? DeepSeek, Base44, ClickUp",
    description:
      "„Superagent“ heißen gleich mehrere KI-Produkte. Was ein Superagent ist, warum DeepSeeks Super-agent gerade im Trend liegt und wie er sich mit Base44 Superagents, ClickUp Super Agents, Genspark und den Open-Source-Projekten von superagent-ai vergleicht.",
  },
  breadcrumb: "Was ist ein Superagent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · KI-Agenten",
    title: "Was ist ein Superagent? Alle „Superagents“ 2026 im Vergleich",
    lead: "Ein Superagent ist ein KI-Agent, der von selbst weiterarbeitet: Er erkennt anstehende Arbeit, übernimmt Aufgaben, ohne für jeden Schritt einen Prompt zu brauchen, erledigt sie im Hintergrund und meldet sich nur bei dir, wenn er eine Entscheidung braucht. Das Wort ist diesen Monat überall, weil DeepSeek am 31. Oktober 2026 seinen Super-agent-Prototyp als Open Source veröffentlicht hat, doch mehrere Produkte tragen den Namen schon, von Base44 und ClickUp bis zu einem Open-Source-Sicherheitstool. Diese Anleitung erklärt die Idee, was jedes davon tatsächlich ist und wie du auswählst.",
    cta: "Loslegen",
    secondary: "Zum Vergleich",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent: eine Definition",
      text: [
        "Einen Standard gibt es nicht, aber jedes Produkt, das als Superagent verkauft wird, folgt derselben Idee: weg von einem Assistenten, der antwortet, wenn man ihn fragt, hin zu einem Agenten, der laufende Arbeit verantwortet.",
      ],
      points: [
        "Er beginnt die Arbeit selbst: durch einen Zeitplan, einen Trigger, eine Nachricht oder eine zugewiesene Aufgabe, nicht nur durch einen Chat-Prompt.",
        "Er läuft im Hintergrund, oft an mehreren Aufgaben gleichzeitig, jede in einer eigenen Session.",
        "Er behält Kontext über Aufgaben hinweg und ist mit den Tools verbunden, in denen die Arbeit passiert, etwa GitHub, Slack, Gmail oder einem Projekt-Board.",
        "Er bittet nur dann um menschliche Aufmerksamkeit, wenn er eine Entscheidung oder Freigabe braucht.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Alle „Superagents“ im Vergleich",
      text: [
        "Angaben von der Website oder dem GitHub-Repository des jeweiligen Herstellers, Stand 6. November 2026.",
      ],
      headers: ["Produkt", "Von", "Was es ist", "Wie die Arbeit startet", "Preis"],
      rows: [
        ["DeepSeek Super-agent (dsh-superagent)", "DeepSeeks Harness-Team", "Ein proaktiver Coding-Agent für ein GitHub-Repository; ein Forschungsprototyp, kein offizielles Produkt", "Anfragen auf GitHub (optional auch Feishu) von erlaubten Personen oder Regeln, die das Team schreibt", "Kostenlos, MIT; läuft auf DeepSeek Harness"],
        ["Base44 Superagents", "Base44 (gehört zu Wix)", "No-Code-Agenten, die du in normaler Sprache beschreibst, für private oder geschäftliche Aufgaben", "Zeitpläne, Trigger, Webhooks und Messenger wie WhatsApp, Telegram und Slack", "Verbraucht Credits des Base44-Tarifs; Free-Tarif, danach ab $16/Monat bei jährlicher Abrechnung"],
        ["ClickUp Super Agents", "ClickUp", "KI-Teammitglieder in einem ClickUp-Workspace, die sichten, planen, berichten und Einträge anlegen", "@-Erwähnungen, zugewiesene Aufgaben, Direktnachrichten, Zeitpläne und Trigger", "Für alle Nutzer verfügbar; Nutzung wird in KI-Credits abgerechnet"],
        ["Genspark Super Agent", "Genspark", "Ein Allzweck-Agent für Recherche, Präsentationen, Dokumente und mehr", "Dein Prompt", "Siehe genspark.ai"],
        ["superagent-ai/superagent", "Superagent (Open Source)", "2023 als Agenten-Framework gestartet; schützt heute KI-Apps vor Prompt Injection und Datenlecks", "Läuft in der Pipeline deiner App", "Open Source, MIT"],
        ["superagent-ai/grok-cli", "Community, nicht mit xAI verbunden", "Ein quelloffener Coding-Agent fürs Terminal, der die Grok-API nutzt", "Dein Prompt; Sub-Agenten und Fernsteuerung per Telegram", "Kostenlos, MIT; eigener Grok-API-Schlüssel nötig"],
        ["Crewmark", "Crewmark", "KI-Mitarbeiter auf Basis von Claude Code, Codex, DeepSeek Harness oder OpenCode", "Ein Heartbeat während der Arbeitszeit nimmt das nächste Issue von einem Board", "Offene Registrierung; läuft mit deinem bestehenden Abo"],
      ],
    },
    {
      kind: "text",
      title: "Warum gerade alle nach „Superagent“ suchen: DeepSeek",
      text: [
        "Am 31. Oktober 2026 veröffentlichte DeepSeek einen Forschungsprototyp namens dsh-superagent und einen Essay über das Design von Super-Agenten, und das Repository übersprang innerhalb einer Woche rund 20.000 GitHub-Sterne. Er macht aus DeepSeek Harness einen Agenten, der GitHub beobachtet, eigene Arbeitselemente anlegt, jedes in einer separaten Session bearbeitet und mit Ergebnissen wie Pull Requests antwortet, während ein Web-Panel zeigt, was einen Menschen braucht. Sein erklärtes Ziel: so wenig menschliche Aufmerksamkeit wie möglich beanspruchen. Die ganze Analyse findest du unter [DeepSeek Super-Agent erklärt](/blog/deepseek-super-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So wählst du einen Superagent aus",
      steps: [
        {
          title: "Geh davon aus, wo die Arbeit liegt",
          text: "Code auf GitHub spricht für DeepSeeks Prototyp oder einen Agenten auf Basis von Claude Code oder Codex; ein ClickUp-Workspace für ClickUp Super Agents; private Erledigungen und Messaging für Base44.",
        },
        {
          title: "Prüfe, wie er die Arbeit startet",
          text: "Ein echter Superagent wartet nicht auf jeden Prompt. Achte auf Zeitpläne, Trigger, zugewiesene Aufgaben oder einen Heartbeat und auf einen klaren Ort, an dem du siehst, was er tut.",
        },
        {
          title: "Prüfe, was er allein darf",
          text: "Bevorzuge Agenten, die vor riskanten Aktionen wie Mergen, Senden oder Geldausgeben nachfragen und ein Protokoll führen, das du prüfen kannst. DeepSeeks Prototyp handelt nur auf Anfragen oder nach Regeln, die das Team geschrieben hat.",
        },
        {
          title: "Prüfe, wessen Modelle und wessen Rechnung",
          text: "Workspace-Produkte berechnen Credits zusätzlich zum Tarif; Open-Source-Tools laufen mit deinem eigenen API-Schlüssel oder Abo. Vergleiche mit den [besten KI-Mitarbeiter-Plattformen](/blog/best-ai-employee-platforms).",
        },
        {
          title: "Prototyp oder Produkt?",
          text: "DeepSeek sagt, sein Super-agent sei nur als Referenz gedacht. Für die tägliche Arbeit nimm etwas, das gepflegt wird, oder baue auf einem Agenten auf, dem du schon vertraust.",
        },
      ],
      source: { label: "Quelle: DeepSeeks dsh-superagent-Repository", href: deepseek },
    },
    {
      kind: "text",
      title: "Superagent vs KI-Agent vs KI-Mitarbeiter",
      text: [
        "Ein KI-Agent erledigt eine Aufgabe, die du ihm gibst. Ein Superagent bringt Autonomie dazu: Er bemerkt oder erhält Arbeit und macht im Hintergrund weiter. Ein KI-Mitarbeiter geht noch einen Schritt weiter und gibt diesem Agenten einen Job: eine Rolle, ein in Zahlen gemessenes Ziel, Arbeitszeiten und ein Board mit Aufgaben, so wie du einen Menschen einarbeiten würdest. Lies, [was ein KI-Mitarbeiter ist](/ai-employees) und [wie du Claude Code proaktiv machst](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Ein Superagent mit Stellenbeschreibung",
      text: [
        "Crewmark macht aus einer Session in Claude Code, Codex, DeepSeek Harness oder OpenCode einen KI-Mitarbeiter: Er wacht während der Arbeitszeit per Heartbeat auf, nimmt das nächste Issue von einem gemeinsamen Board, kommentiert seine Arbeit und schreibt dir, wenn er eine Entscheidung braucht, mit dem Abo, für das du schon zahlst.",
      ],
      steps: [
        {
          title: "Wähle den Agenten, dem du vertraust",
          text: "Auch DeepSeek Harness, dieselbe Laufzeitumgebung, auf der DeepSeeks Super-agent aufbaut.",
        },
        {
          title: "Gib ihm eine Rolle und ein Ziel",
          text: "Softwareentwickler, SEO-Spezialist, Growth Marketer: jeder mit einer Zahl, die er bewegen soll.",
        },
        {
          title: "Lass den Heartbeat den Rest erledigen",
          text: "Alle 15, 30 oder 60 Minuten während der Arbeitszeit nimmt er das nächste Issue; du beantwortest nur, was dich wirklich braucht.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen Superagent auswählen" },
  mid: {
    title: "Du willst einen Superagent, der in deinem Repo arbeitet, mit deinem Tarif?",
    text: "Crewmark macht aus Claude Code, Codex oder DeepSeek Harness KI-Mitarbeiter, die per Heartbeat aufwachen und sich das nächste Issue selbst nehmen.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Superagents",
    items: [
      {
        q: "Was ist ein Superagent?",
        a: "Ein KI-Agent, der über längere Zeit selbstständig arbeitet: Er startet Aufgaben durch Trigger, Zeitpläne oder Anfragen, erledigt sie im Hintergrund und fragt einen Menschen nur, wenn er eine Entscheidung braucht.",
      },
      {
        q: "Was ist DeepSeek Super-agent?",
        a: "Ein Forschungsprototyp, den DeepSeek am 31. Oktober 2026 als Open Source veröffentlicht hat (dsh-superagent, MIT). Er lässt DeepSeek Harness proaktiv in einem GitHub-Repository arbeiten. Laut DeepSeek ist er nur als Referenz gedacht und kein offizielles Produkt.",
      },
      {
        q: "Ist DeepSeek Super-agent kostenlos?",
        a: "Ja. Der Prototyp und DeepSeek Harness sind Open Source unter der MIT-Lizenz; du zahlst für die Modellnutzung dahinter.",
      },
      {
        q: "Was sind Base44 Superagents?",
        a: "No-Code-KI-Agenten in Base44 (gehört zu Wix), die du in normaler Sprache beschreibst. Sie laufen nach Zeitplänen und Triggern, verbinden sich mit Gmail, Drive, Notion, GitHub, Slack oder MCP-Servern und verbrauchen die Credits deines Base44-Tarifs.",
      },
      {
        q: "Was sind ClickUp Super Agents?",
        a: "KI-Teammitglieder in einem ClickUp-Workspace, im Dezember 2025 eingeführt, die du per @-Erwähnung ansprechen, mit Aufgaben betrauen oder nach Zeitplan laufen lassen kannst. Sie stehen allen Nutzern offen und verbrauchen KI-Credits.",
      },
      {
        q: "Ist Superagent auf GitHub dasselbe wie der von DeepSeek?",
        a: "Nein. Die Organisation superagent-ai hat damit nichts zu tun: Ihr superagent-Repository ist heute ein KI-Sicherheitstool, und grok-cli ist ein Community-Coding-Agent für die Grok-API.",
      },
      {
        q: "Was ist der Unterschied zwischen einem Superagent und einem KI-Mitarbeiter?",
        a: "Ein Superagent arbeitet selbstständig an Aufgaben. Ein KI-Mitarbeiter ist ein autonomer Agent mit Rolle, Ziel, Arbeitszeiten und Board, sodass seine Arbeit organisiert und gemessen wird wie die eines Teammitglieds.",
      },
    ],
  },
  cta: {
    title: "Mach deinen Coding-Agenten zum Superagent mit Job.",
    text: "Crewmark macht aus Sessions in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 6. November 2026 mit der Website oder dem GitHub-Repository jedes Produkts abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu DeepSeek, Base44, Wix, ClickUp, Genspark oder den superagent-ai-Projekten, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
