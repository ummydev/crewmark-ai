import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Skills für Marketing und Design | Crewmark AI",
    description:
      "Kostenlose Open-Source-Skills für Claude Code von einem KI-Marketingteam, das sie jeden Tag nutzt: Trend-Keywords, SEO-Seiten, Vergleichsseiten, Indexierung, KI-Suche und ein Tagesbericht, dazu die besten Design-Skills im Vergleich.",
  },
  breadcrumb: "Claude Skills",
  hero: {
    kicker: "Claude Skills",
    title: "Claude Skills von einem KI-Marketingteam",
    lead: "Marketing Team Skills ist eine kostenlose Open-Source-Sammlung von Agent Skills für Claude Code, Codex und Cursor: die Schritte, die Crewmarks eigener KI-SEO-Spezialist jeden Tag ausführt, um Keywords zu finden, Seiten zu schreiben und zu übersetzen, sie indexieren zu lassen und zu berichten, was sich bewegt hat. Jeder Skill ist eine SKILL.md mit Befehlen, die funktionieren, und den Fehlern, die wir gemacht haben. Unten: was drinsteckt, wie du es installierst, und unsere Ratgeber zu den besten Skills für jede Aufgabe.",
    cta: "Loslegen",
    secondary: "Skills installieren",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Was in Marketing Team Skills steckt",
      text: ["Version 0.1 deckt On-Page-SEO ab. Off-Page-SEO, UGC-Videos und Social-Media-Outreach folgen."],
      headers: ["Skill", "Was er macht"],
      rows: [
        ["trend-keywords", "Erkennt Begriffe, nach denen nach einem Launch, einer Einstellung oder einer Übernahme gerade erst gesucht wird, und bringt noch am selben Tag eine Seite live"],
        ["keyword-research", "Wählt Keywords, für die eine neue Website ranken kann, und führt eine Keyword-Map"],
        ["seo-page", "Schreibt eine Seite für ein Keyword: zuerst die Definition, dann Schritte, Tabelle, FAQ und Quellen"],
        ["competitor-pages", "Baut Alternativen- und Vergleichsseiten (vs) aus der eigenen Dokumentation jedes Produkts"],
        ["programmatic-pages", "Seiten aus Vorlagen in großer Zahl, ohne Thin Content"],
        ["multilingual-seo", "Bringt jede Seite in mehreren Sprachen mit hreflang live"],
        ["index-push", "Sorgt dafür, dass Seiten gecrawlt werden: IndexNow, Search Console, Bing"],
        ["ai-search", "Macht die Website für ChatGPT, Claude und Perplexity zitierfähig"],
        ["seo-daily-report", "Schreibt den Bericht zum Tagesende, gemessen am Ziel"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So installierst du die Skills",
      steps: [
        {
          title: "Füge sie deinem Agenten hinzu",
          text: "Die Skills-CLI installiert sie in Claude Code, Codex, Cursor und anderen Agenten; oder nutze das Claude-Code-Plugin.",
          code: install,
        },
        {
          title: "Kopiere die Rollenbeschreibung",
          text: "Leg `roles/seo-specialist/CLAUDE.md` (oder `AGENTS.md` für Codex) ins Repository deiner Website und trag das Ziel ein, damit jede Session den Tagesablauf kennt. Siehe den [KI-SEO-Spezialisten](/ai-employees/seo-specialist).",
        },
        {
          title: "Lass es jeden Tag laufen",
          text: "Nutze `/loop` oder geplante Aufgaben, oder lass es als KI-Mitarbeiter mit Heartbeat laufen; siehe [wie du Claude Code proaktiv machst](/proactive-claude-code).",
        },
      ],
      source: { label: "Quelle: Marketing Team Skills auf GitHub", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "Die besten Claude Skills nach Aufgabe",
      text: [
        "Unsere Vergleiche der Skills, die sich für die jeweilige Art von Arbeit lohnen, auf Basis des Repositorys jedes Projekts:",
      ],
      points: [
        "[Die besten Claude Skills für Webdesign und UI](/skills/website-design): Anthropics frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop und mehr.",
        "Wie du Schritt für Schritt einen SEO-Agenten baust, steht in [KI-SEO-Agent: So baust du einen](/blog/ai-seo-agent); zu Skills allgemein siehe [Claude Code Skills](/blog/claude-code-skills).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Skills für die Session, Mitarbeiter für den Job",
      text: [
        "Skills machen eine Session gut in einer Aufgabe. Crewmark macht aus Claude Code, Codex, DeepSeek Harness oder OpenCode KI-Mitarbeiter mit Rolle, Ziel und Arbeitszeiten, die per Heartbeat aufwachen, das nächste Issue von einem Board übernehmen und die Skills nutzen, die du installierst.",
      ],
      steps: [
        {
          title: "Wähl eine Rolle",
          text: "Ein [SEO-Spezialist](/ai-employees/seo-specialist), ein [Marketing-Agent](/ai-employees/marketing-agent), ein [UI-Designer](/ai-employees/ui-designer) und mehr.",
        },
        {
          title: "Verbinde dein Projekt",
          text: "Jeder Mitarbeiter arbeitet in seiner eigenen Session und seinem eigenen Checkout, mit dem Abo, für das du schon zahlst. Siehe [Preise](/pricing).",
        },
        {
          title: "Prüfen statt babysitten",
          text: "Er kommentiert während der Arbeit und fragt vor allem nach, was auf deiner Freigabeliste steht.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Marketing Team Skills installieren" },
  mid: {
    title: "Sollen die Skills jeden Tag für dich laufen?",
    text: "Die KI-Mitarbeiter von Crewmark nutzen diese Skills per Heartbeat, mit dem Claude-Code- oder Codex-Plan, für den du schon zahlst.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude Skills",
    items: [
      {
        q: "Was sind Claude Skills?",
        a: "Ordner mit einer SKILL.md-Datei, die Claude Code, Claude.ai und anderen Agenten beibringen, eine bestimmte Aufgabe zu erledigen. Geladen wird nur eine kurze Beschreibung, bis die Aufgabe den ganzen Skill braucht.",
      },
      {
        q: "Ist Marketing Team Skills kostenlos?",
        a: "Ja. Es ist Open Source unter der MIT-Lizenz und liegt auf GitHub unter ummydev/marketing-team-skills.",
      },
      {
        q: "Funktioniert es mit Codex und Cursor?",
        a: "Ja. Die Skills-CLI installiert es in Codex, Cursor und anderen Agenten, die Agent Skills unterstützen, und es gibt ein Plugin-Manifest für Codex.",
      },
      {
        q: "Was unterscheidet es von anderen Marketing-Skills?",
        a: "Es ist operativ statt enzyklopädisch: Jeder Skill ist die Schritt-für-Schritt-Routine, die ein KI-SEO-Mitarbeiter auf einer echten Website ausführt, mit Skripten und den Stolperfallen, in die wir geraten sind. Es passt gut zu breiten Sammlungen wie coreyhaines31/marketingskills.",
      },
    ],
  },
  cta: {
    title: "Stell das Team ein, das die Skills geschrieben hat.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Skill-Liste laut Marketing Team Skills v0.1, Stand 8. November 2026.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder OpenAI, die es auch nicht unterstützen. Claude, Claude Code und Codex sind Marken ihrer Inhaber.",
};
