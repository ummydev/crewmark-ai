import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# marketingskills von Corey Haines: nur die SEO-Skills
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (in Claude Code)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# Deine echten Search-Console-Daten (seo von Ian Nuttall, gehostetes MCP)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Der Lighthouse-basierte SEO-Skill von Addy Osmani
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (von uns): tägliche SEO-Routinen
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Die besten Claude Skills für SEO (2026): Audits, GEO, Keywords",
    description:
      "Die besten Claude Code Skills für SEO und KI-Suche, verglichen anhand ihrer eigenen Repositorys: seo-audit und ai-seo von Corey Haines, Claude SEO, GEO-SEO Claude, Search-Console-MCPs, SE Ranking und mehr, mit Installationszahlen und Befehlen.",
  },
  breadcrumb: "SEO-Skills",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · SEO",
    title: "Die besten Claude Skills für SEO",
    lead: "Ein SEO-Skill ist eine SKILL.md-Datei, die Claude Code (oder Codex, Cursor und anderen Agenten) einen Teil der Suchmaschinenarbeit beibringt: eine Website auditieren, Seiten planen, Schema schreiben oder in der KI-Suche zitiert werden. Es gibt zwei Arten. Methoden-Skills sind kostenlose Checklisten und Playbooks, die keine Schlüssel brauchen. Daten-Skills verbinden den Agenten über einen MCP-Server mit Search Console, DataForSEO, SE Ranking oder Ahrefs, damit er mit echten Zahlen arbeitet statt zu raten. Ein gutes Setup hat von beiden einen. Das sind die Skills, die sich 2026 lohnen, auf Basis des Repositorys jedes Projekts.",
    cta: "Loslegen",
    secondary: "Skills vergleichen",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "Ein sicherer Start: marketingskills von Corey Haines. Seine Skills seo-audit, ai-seo und programmatic-seo sind die drei meistinstallierten SEO-Skills auf skills.sh.",
        "Ein komplettes Audit mit einem Befehl: Claude SEO. `/seo audit <url>` schickt bis zu 17 spezialisierte Agenten über die Website und liefert einen priorisierten Plan.",
        "KI-Suche (GEO): GEO-SEO Claude für Audits im Agenturstil und PDF-Berichte, oder GEO Optimizer für einen Readiness-Score von 0–100, den du in der CI laufen lassen kannst.",
        "Deine eigenen Zahlen: seo von Ian Nuttall, ein kostenloser Search-Console-MCP-Server samt CLI; die Skills von SE Ranking, wenn du SE Ranking ohnehin bezahlst.",
        "Technisches SEO nach Lehrbuch: der seo-Skill von Addy Osmani, aufgebaut auf Lighthouse-Audits und Googles Richtlinien.",
        "SEO jeden Tag betreiben statt einmal: Marketing Team Skills (von uns) deckt ab, wie man Keywords wählt, die eine neue Website gewinnen kann, eine Seite pro Keyword, Index-Pushes und einen Tagesbericht.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "SEO-Skills für Claude Code im Vergleich",
      text: [
        "Sterne und Lizenzen laut GitHub-API am 8. November 2026, gerundet. Bei Repositorys mit vielen Skills gelten die Sterne für das ganze Repository.",
      ],
      headers: ["Skill", "Am besten für", "Braucht", "Sterne", "Lizenz"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines): seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "Audits, KI-Suche, Seiten in großer Zahl und Schema, als Methoden", "Nichts; jeder Agent über die Skills-CLI", "~59k (Repo)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "Audits der ganzen Website mit parallelen Agenten: technisch, E-E-A-T, Schema, GEO, lokal", "Claude Code 1.0.33+; `/seo setup` installiert ein eigenes Python und einen Headless-Browser", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO-Audits, Prüfungen für KI-Crawler und PDF-Berichte für Kunden", "Python 3.10+, Git; Installation per Shell-Skript", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "SEO, GEO und Google Ads aus Live-Daten von Search Console, GA4 und Ads", "Anmeldung beim gehosteten MCP von NotFair", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "Technisches und On-Page-SEO nach Lighthouse und den Google-Search-Richtlinien", "Nichts; Lighthouse oder Chrome-DevTools-MCP für Live-Prüfungen", "~3k (Repo)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "Recherchierte, faktengeprüfte Blogartikel, vor der Auslieferung bewertet", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "Ein schneller SEO- und GEO-Check plus Schema, für Solo-Gründer", "Python 3", "~1.9k (Repo)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "Ein KI-Readiness-Score von 0–100 und Korrekturen: robots.txt, llms.txt, JSON-LD", "Python 3.10+ und uv; eigener LLM-Schlüssel für Zitationsprüfungen", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "26 SEO- und GEO-Prüfungen mit Bestanden/Nicht bestanden für eine URL", "Python 3.9+ unter macOS oder Linux", "~1k", "Nicht angegeben"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "Deine echten Daten aus Search Console, Analytics und Bing, plus Keyword-Recherche", "Google-Anmeldung beim gehosteten MCP; DataForSEO- oder Ahrefs-Schlüssel für Keywords", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "Von chinesischen KI-Assistenten (Doubao, DeepSeek) empfohlen werden; Chinesisch und Englisch", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "Keyword-Cluster, Backlink-Lücken und KI-Share-of-Voice aus SE-Ranking-Daten", "SE-Ranking-Konto (14 Tage Testphase, dann kostenpflichtig)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (von uns)", "Tägliche SEO-Arbeit für eine neue Website: Keywords, Seiten, Index-Pushes, Berichte; dazu Kurzvideos", "Nichts; jeder Agent über die Skills-CLI", "Neu (Nov. 2026)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Die meistinstallierten SEO-Skills",
      text: [
        "Installationen über die Skills-CLI, laut skills.sh-Registry am 8. November 2026. Plugins, die mit `/plugin install` installiert werden, etwa Claude SEO, tauchen hier meist nicht auf; sieh die Zahlen also als Untergrenze.",
      ],
      points: [
        "seo-audit (marketingskills): etwa 249.000",
        "ai-seo (marketingskills): etwa 160.000",
        "programmatic-seo (marketingskills): etwa 158.000",
        "site-architecture (marketingskills): etwa 130.000",
        "schema (marketingskills): etwa 86.000",
        "seo-geo (opc-skills): etwa 56.000",
        "seo (web-quality-skills von Addy Osmani): etwa 54.000",
        "seo (Ian Nuttall): etwa 24.000",
        "seo (Haupt-Skill von Claude SEO): etwa 10.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Code für SEO ein",
      steps: [
        {
          title: "Installiere einen Methoden-Skill",
          text: "Nimm die SEO-Skills von marketingskills oder Claude SEO, nicht beide: Sie decken dieselben Audits ab und werden sich widersprechen. Nimm den Skill von Addy Osmani nur dazu, wenn du zusätzlich technische Prüfungen im Lighthouse-Stil willst.",
          code: install,
        },
        {
          title: "Verbinde echte Daten",
          text: "Ohne Daten sind die Keyword-Ideen eines Agenten geraten. Verbinde die Search Console (seo von Ian Nuttall oder `/seo google` von Claude SEO) und, wenn du Suchvolumen brauchst, eine Keyword-Quelle wie DataForSEO, Ahrefs oder SE Ranking.",
        },
        {
          title: "Erst auditieren, dann der Reihe nach beheben",
          text: "Lass das Audit auf deiner eigenen Website laufen, bitte den Agenten dann, die wichtigsten Punkte zu beheben, und wiederhole dieselben Prüfungen. Änderungen bei Indexierung und Ranking zeigen sich in der Search Console erst Tage oder Wochen später, nicht in der Session.",
        },
        {
          title: "Mach eine Routine daraus",
          text: "SEO zahlt sich aus, wenn du jede Woche dieselbe Schleife drehst: Keyword wählen, Seite schreiben, in den Index pushen, Zahlen lesen. Schreib die Schleife in die CLAUDE.md oder einen Skill und lass sie nach Zeitplan laufen. Siehe [wie man einen KI-SEO-Agenten baut](/blog/ai-seo-agent).",
        },
      ],
      source: { label: "Quelle: marketingskills von Corey Haines", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "Was unser SEO-Agent auf crewmark.ai nutzt",
      text: [
        "Crewmarks eigenes SEO macht ein KI-Mitarbeiter: eine Claude-Code-Session mit der [Rolle SEO-Spezialist](/ai-employees/seo-specialist), die per Heartbeat in Schichten arbeitet. In ihrem Repository sind 25 Skills von Corey Haines installiert, dazu unsere Marketing Team Skills.",
      ],
      points: [
        "Am 7. November 2026 ließ er die Audit-Skills von marketingskills auf crewmark.ai laufen. Das Audit bemängelte, dass die Website keine öffentlichen Preise und keine Datenschutzseite hatte; eine [Preisseite](/pricing) ging am nächsten Tag online.",
        "Jeden Tag wählt er Keywords aus Google Autocomplete und der Search Console (keyword-research), schreibt eine Seite pro Keyword (seo-page), reicht neue URLs bei IndexNow, Bing und Google ein (index-push) und veröffentlicht einen Tagesbericht (seo-daily-report).",
        "Die Website ist neu, deshalb können wir noch keine Ranking-Ergebnisse zeigen. Wir ergänzen diese Seite um Search-Console-Zahlen, sobald es welche gibt, die sich zu zeigen lohnen.",
      ],
    },
    {
      kind: "text",
      title: "Gut zu wissen vor der Installation",
      points: [
        "Daten-Skills schicken deine Daten irgendwohin: seo von Ian Nuttall, NotFair und Ryze verbinden sich über ihre gehosteten MCP-Server, und SE Ranking und DataForSEO rechnen pro Credit ab. Große Läufe mit SE Ranking können laut README Tausende Credits verbrauchen.",
        "GEO-SEO Claude und Agentic SEO Skill werden mit `curl ... | bash` installiert. Lade das Skript herunter und lies es, bevor du es ausführst, so wie die README von Claude SEO es für den eigenen Installer empfiehlt.",
        "Lass keinen Skill Links kaufen. Die seo-skills von Illyism enthalten linkdr, das Backlinks beim Dienst des Autors kauft; bezahlte Links, die Ranking-Signale weitergeben, verstoßen gegen Googles Spam-Richtlinien.",
        "Ergebniszahlen in READMEs, etwa Traffic-Zuwächse, sind Angaben der Autoren selbst. Die 10.8K Search-Console-Klicks in 12 Wochen, die Claude SEO meldet, beziehen sich auf die eigene Website.",
        "Manche kostenlosen Skills verkaufen nebenbei etwas: Claude SEO und GEO-SEO Claude bewerben bezahlte Communitys, und GEO Optimizer hat einen Pro-Plan ab $19 im Monat. Die Skills selbst sind Open Source.",
        "Anthropic veröffentlicht keinen SEO-Skill; keiner davon ist offiziell.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib den Skills einen SEO-Spezialisten, der jeden Tag arbeitet",
      text: [
        "Ein Skill macht eine Session besser in SEO. Crewmark macht aus Claude Code oder Codex einen KI-SEO-Spezialisten mit einem Ziel in Zahlen, etwa 10 % mehr Search-Console-Klicks pro Monat, mit Arbeitszeiten und einem Board voller Seiten, die zu schreiben sind; er wacht per Heartbeat auf, nimmt das nächste Issue und schreibt dir, wenn er eine Freigabe braucht.",
      ],
      steps: [
        {
          title: "Stell die Rolle SEO-Spezialist ein",
          text: "Rollenbeschreibung, Ziel und Tagesablauf sind schon eingerichtet; siehe den [KI-SEO-Spezialisten](/ai-employees/seo-specialist) und den [KI-Marketing-Agenten](/ai-employees/marketing-agent).",
        },
        {
          title: "Installiere deine SEO-Skills im Repository",
          text: "Der Mitarbeiter nutzt die Skills in `.claude/skills` wie jede andere Session. Fang mit [Marketing Team Skills](/skills) an.",
        },
        {
          title: "Prüf Seiten und Berichte, nicht Prompts",
          text: "Gib neue Seiten frei und lies den Tagesbericht auf dem Board. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code mit Skills für SEO einrichten" },
  mid: {
    title: "Du willst einen SEO-Spezialisten, der diese Skills jeden Tag nutzt?",
    text: "Der KI-SEO-Spezialist von Crewmark arbeitet per Heartbeat in Schichten, schreibt Seiten, pusht sie in den Index und berichtet jeden Tag.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude-SEO-Skills",
    items: [
      {
        q: "Welcher Claude Skill ist der beste für SEO?",
        a: "Für die meisten Websites seo-audit, ai-seo und programmatic-seo von Corey Haines, die meistinstallierten SEO-Skills auf skills.sh. Für ein komplettes Audit mit parallelen Agenten Claude SEO. Ergänze eine Datenquelle wie ein Search-Console-MCP, damit der Agent mit deinen echten Zahlen arbeitet.",
      },
      {
        q: "Gibt es einen offiziellen Claude-SEO-Skill?",
        a: "Nein. Das Skills-Repository von Anthropic enthält Stand November 2026 keinen SEO-Skill. Claude SEO ist ein unabhängiges Open-Source-Projekt von Agrici Daniel, kein Produkt von Anthropic.",
      },
      {
        q: "Was ist der Unterschied zwischen Claude SEO und marketingskills?",
        a: "Claude SEO ist ein einzelnes Plugin für Audits: 26 Sub-Skills und 19 Agenten hinter einem `/seo`-Befehl, mit eigenen Python-Tools und einem Headless-Browser. marketingskills ist eine Bibliothek einzelner Methoden-Skills für das ganze Marketing; du installierst nur die SEO-Skills, die du brauchst, und sie brauchen keine Einrichtung.",
      },
      {
        q: "Kann Claude Code Keyword-Recherche machen?",
        a: "Es kann Keywords auswählen und gruppieren, sieht aber von sich aus kein Suchvolumen. Verbinde eine Datenquelle: die Search Console für die Suchanfragen, bei denen du schon erscheinst, und DataForSEO, Ahrefs oder SE Ranking für das Volumen. Google Autocomplete zeigt, wonach Leute suchen, aber nicht, wie viele.",
      },
      {
        q: "Was ist der Unterschied zwischen einem SEO-Skill und einem GEO-Skill?",
        a: "SEO-Skills zielen auf Rankings in Google und Bing; GEO-Skills (Generative Engine Optimization) zielen darauf, von ChatGPT, Perplexity, Gemini und Googles AI Overviews zitiert zu werden, mit Prüfungen wie Zugriff für KI-Crawler, llms.txt und zitierfähigen Antworten. Die meisten Pakete machen inzwischen beides.",
      },
      {
        q: "Funktionieren diese SEO-Skills mit Codex und Cursor?",
        a: "Die meisten ja. Skills, die mit der Skills-CLI installiert werden, funktionieren in Codex, Cursor und Dutzenden weiteren Agenten, und MCP-basierte wie seo von Ian Nuttall verbinden sich mit jedem Agenten, der Remote-MCP-Server unterstützt.",
      },
    ],
  },
  cta: {
    title: "Hol dir einen SEO-Spezialisten aufs Board, mit den Skills, denen du vertraust.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 8. November 2026 mit dem GitHub-Repository jedes Skills, der GitHub-API und der skills.sh-Registry abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic oder den Autoren der aufgeführten Skills, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
