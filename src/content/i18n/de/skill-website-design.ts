import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /skills/website-design; the English master is src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "Die besten Claude Skills für Webdesign und UI (2026)",
    description:
      "Die besten Claude Code Skills für Webdesign und UI-Design, verglichen anhand ihrer eigenen Repositorys: Anthropics frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop, die Skills von Emil Kowalski, shadcn und mehr, mit Installationsbefehlen.",
  },
  breadcrumb: "Skills für Webdesign und UI",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · Design",
    title: "Die besten Claude Skills für Webdesign und UI",
    lead: "Ein Design-Skill ist eine SKILL.md-Datei, die Claude Code (oder Codex, Cursor und anderen Agenten) beibringt, wie man gestaltet: welche Farben und Schriften passen, welche typischen KI-Standards zu vermeiden sind und wie das Ergebnis geprüft wird, bevor es als fertig gilt. Ohne einen liefern Agenten meist dieselbe Seite aus Verläufen und Karten. Das sind die Skills, die sich 2026 lohnen, worin jeder am besten ist und wie du ihn installierst, auf Basis des Repositorys jedes Projekts.",
    cta: "Loslegen",
    secondary: "Skills vergleichen",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "Neue Landingpage oder Unternehmenswebsite: Taste Skill. Er legt eine Richtung fest, nutzt echte Fotos und prüft die Seite in vier Breiten im Browser, bevor er sie übergibt.",
        "Bestehende UI aufpolieren: Impeccable (Befehle wie polish, critique und audit, dazu ein regelbasierter Slop-Detektor) oder unslop (behebt Abstände, Farben, Icons, Texte und Typografie, in dieser Reihenfolge).",
        "Eine sichere Wahl von Anthropic: frontend-design, der offizielle Skill, steuert weg von generischem KI-Design.",
        "Stile, Paletten und Schriften für jede Plattform auswählen: UI UX Pro Max, eine durchsuchbare Design-Datenbank für Web, Mobile und Desktop.",
        "Animation und die kleinen Details: die Skills von Emil Kowalski.",
        "Code anhand von Regeln für Barrierefreiheit und UX prüfen: web-design-guidelines von Vercel.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills für Webdesign und UI im Vergleich",
      text: [
        "Sterne und Lizenzen laut GitHub-API am 8. November 2026, gerundet. Bei Repositorys mit vielen Skills gelten die Sterne für das ganze Repository.",
      ],
      headers: ["Skill", "Am besten für", "Funktioniert mit", "Sterne", "Lizenz"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "Eigenständiges Design für jede neue UI; plant zuerst ein Token-System", "Claude Code, Claude.ai", "~189k (Repo)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Stile, Paletten, Schriftpaare und UX-Regeln für Web, Mobile und Desktop", "Claude Code, Cursor, Codex und ~20 weitere", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "Unternehmens- und Marketing-Websites, geprüft in einem echten Browser", "Claude Code, Codex, Skills-CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "Bestehende Interfaces kritisieren und aufpolieren; Slop-Detektor", "Claude Code, Codex, Cursor und mehr", "~105k", "Apache 2.0"],
        ["[Skills von Emil Kowalski](https://github.com/emilkowalski/skills)", "Animation, Feinschliff und Details von Komponenten", "Jeder Agent über die Skills-CLI", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "UI-Code gegen über 100 Regeln für Barrierefreiheit und UX prüfen", "Jeder Agent über die Skills-CLI", "~34k (Repo)", "MIT (laut README)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "shadcn/ui-Komponenten in React-Apps richtig einsetzen", "Jeder Agent über die Skills-CLI", "~128k (Repo)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "Seiten, App-Prototypen, Präsentationen und Animationen aus einem Prompt; auf Chinesisch geschrieben", "Claude Code, Cursor, Codex und mehr", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "Aus KI-typischer UI ein gestaltetes Interface machen, Durchgang für Durchgang", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Stitch-Skills](https://github.com/google-labs-code/stitch-skills) (Google)", "In Stitch gestalten, dann in React oder React Native bauen", "Claude Code, Cursor, Codex; braucht das Stitch-MCP", "~9k", "Apache 2.0"],
        ["[Figma-Skills](https://github.com/figma/mcp-server-guide)", "Von Figma-Designs zu Code, und Designsysteme in Figma (Beta)", "Claude Code, Cursor; braucht das Figma-MCP", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So installierst und nutzt du einen Design-Skill",
      steps: [
        {
          title: "Installiere einen oder zwei, nicht alle",
          text: "Skills, die jeweils selbst die Richtung vorgeben wollen, kommen sich in die Quere. Nimm einen, der gestaltet (frontend-design, Taste Skill oder UI UX Pro Max), und wenn du willst einen, der prüft (Impeccable, unslop oder web-design-guidelines).",
          code: install,
        },
        {
          title: "Gib ihm das Briefing",
          text: "Sag, wofür die Seite ist, für wen sie ist, und nenne ein oder zwei Websites, die dir gefallen. Die meisten dieser Skills fragen zuerst nach einer Richtung, und das Ergebnis wird nur so konkret wie das Briefing.",
        },
        {
          title: "Lass ihn seine eigene Arbeit prüfen",
          text: "Taste Skill rendert die Seite in vier Breiten und durchläuft eine Abschlussprüfung (Finish Gate); der Detektor von Impeccable prüft 62 Regeln mit `npx impeccable detect src/`. Lass diese Prüfungen eingeschaltet und sieh dir die Screenshots selbst an.",
        },
        {
          title: "Speichere das Ergebnis als Designsystem",
          text: "Mehrere Skills schreiben eine DESIGN.md (Impeccable, Taste Skill, Stitch). Behalte sie im Repository, damit spätere Sessions und andere Agenten dieselben Farben, Schriften und Abstände verwenden. Siehe die [Anleitung zur CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Quelle: Anthropics frontend-design-Skill", href: anthropic },
    },
    {
      kind: "text",
      title: "Gut zu wissen vor der Installation",
      points: [
        "Manche Skills fügen Hooks hinzu oder laden eine Engine herunter: Impeccable installiert Befehls-Hooks und hat Telemetrie standardmäßig aktiviert (abschalten mit `DO_NOT_TRACK=1`); Taste Skill führt eine Abschlussprüfung als Stop-Hook aus und braucht Node 22+ und Chrome.",
        "Ein kompletter Build mit Taste Skill kann laut README 30–45 Minuten dauern und einige Hunderttausend Tokens verbrauchen.",
        "UI UX Pro Max braucht Python 3 und verkauft eine Premium-Stufe; der offene Skill steht unter MIT.",
        "unslop steht unter CC BY 4.0: Nenne den Autor, wenn du seinen Text wiederverwendest. Nicht zu verwechseln mit textbezogenen Repositorys gleichen Namens.",
        "Die Skills für Stitch und Figma brauchen deren MCP-Server und Konten; Schreibzugriffe auf den Figma-Canvas sind in der Beta und auf kostenlosen Plätzen begrenzt.",
        "Aus unserem Team: Wir haben Taste Skill für die Screens von Crewmarks eigenem Produkt genutzt und ein kurzes Video über unslop gemacht. Unser Schwesterprojekt [pretty-ui](https://github.com/ummydev/pretty-ui) ist ein neuerer, kleinerer Skill für dieselbe Aufgabe.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib den Skills einen Designer, der jeden Tag arbeitet",
      text: [
        "Ein Skill lässt eine Session besser gestalten. Crewmark macht aus Claude Code oder Codex einen KI-UI-Designer mit einem Ziel, etwa drei fertige Screens pro Woche, mit Arbeitszeiten und einem Board voller Screens, die zu verbessern sind; er wacht per Heartbeat auf und öffnet Pull Requests mit Vorher-nachher-Screenshots.",
      ],
      steps: [
        {
          title: "Stell die Rolle UI-Designer ein",
          text: "Rollenbeschreibung, Ziel und Tagesablauf sind schon eingerichtet; siehe den [KI-UI-Designer](/ai-employees/ui-designer) und den [KI-App-Designer](/ai-employees/app-designer).",
        },
        {
          title: "Installiere deine Design-Skills im Repository",
          text: "Der Mitarbeiter nutzt die Skills in `.claude/skills` wie jede andere Session.",
        },
        {
          title: "Prüf Pull Requests, nicht Prompts",
          text: "Gib die Screens frei, die dir gefallen; fordere Änderungen auf dem Board an. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Einen Claude-Design-Skill installieren und nutzen" },
  mid: {
    title: "Du willst einen Designer, der diese Skills jeden Tag nutzt?",
    text: "Der KI-UI-Designer von Crewmark arbeitet per Heartbeat in deinem Code und öffnet Pull Requests mit Screenshots.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude-Design-Skills",
    items: [
      {
        q: "Welcher Claude Skill ist der beste für Webdesign?",
        a: "Für eine neue Website Taste Skill oder Anthropics frontend-design; zum Aufpolieren einer bestehenden UI Impeccable oder unslop; zum Auswählen von Stilen und Paletten über Plattformen hinweg UI UX Pro Max. Die meisten installieren einen, der gestaltet, und einen, der prüft.",
      },
      {
        q: "Gibt es einen offiziellen Design-Skill für Claude?",
        a: "Ja. Anthropic veröffentlicht frontend-design in anthropics/skills und als Plugin in claude-plugins-official. Er steht unter Apache 2.0 und soll generische KI-Design-Standards vermeiden.",
      },
      {
        q: "Wie installiere ich einen Skill in Claude Code?",
        a: "Über den Plugin-Marketplace (`/plugin marketplace add owner/repo`, dann `/plugin install`), über die Skills-CLI (`npx skills add owner/repo`) oder indem du den Ordner des Skills nach `.claude/skills/` kopierst.",
      },
      {
        q: "Funktionieren diese Skills mit Codex und Cursor?",
        a: "Die meisten ja: UI UX Pro Max, Impeccable, Taste Skill und Huashu Design dokumentieren Codex, und die Skills-CLI installiert SKILL.md-Skills in Cursor, Codex und rund 75 weitere Agenten.",
      },
      {
        q: "Sind Claude-Design-Skills kostenlos?",
        a: "Die Skills auf dieser Seite sind Open Source (MIT, Apache 2.0 oder CC BY 4.0). Manche Produkte drumherum kosten Geld: die Premium-Stufe von UI UX Pro Max, und Stitch und Figma brauchen eigene Konten.",
      },
      {
        q: "Was ist der Unterschied zwischen Impeccable und Taste Skill?",
        a: "Taste Skill baut neue Unternehmens- und Marketing-Websites mit einer Prüfung im echten Browser; Impeccable ist am stärksten bei Interfaces, die es schon gibt, mit Befehlen zum Kritisieren, Prüfen und Aufpolieren und einem regelbasierten Slop-Detektor.",
      },
    ],
  },
  cta: {
    title: "Hol dir einen Designer aufs Board, mit den Skills, denen du vertraust.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked: "Am 8. November 2026 mit dem GitHub-Repository jedes Skills und der GitHub-API abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder den Autoren der aufgeführten Skills, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
