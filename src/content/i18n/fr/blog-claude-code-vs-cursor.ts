import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor (2026) : tarifs, modèles, limites et lequel choisir | Crewmark",
    description:
      "Claude Code vs Cursor en novembre 2026 : les nouveaux forfaits de Cursor centrés sur Grok depuis son arrivée chez SpaceX, le coût des modèles Claude dans chacun, agents, CLI, règles, MCP, hooks et comment choisir.",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code vs Cursor en 2026 : ce qui a changé et lequel choisir",
    lead: "Claude Code est l’agent de codage d’Anthropic : il fonctionne dans votre terminal, votre IDE, l’application de bureau ou le navigateur avec un abonnement Claude. Cursor est un éditeur de code IA doté de son propre agent, d’une CLI et d’agents cloud. La comparaison a changé cette année : Cursor fait partie de SpaceX depuis août 2026, ses forfaits sont désormais construits autour des modèles Grok, et les modèles Claude dans Cursor sont facturés à part, au prix catalogue de l’API. Ce guide compare les tarifs, les modèles, les limites et les fonctionnalités au 6 novembre 2026, et montre comment choisir, ou utiliser les deux.",
    cta: "Accès anticipé",
    secondary: "Aller à la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Cursor en un coup d’œil",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["Développé par", "Anthropic", "Cursor, filiale de SpaceX depuis août 2026"],
        ["Ce que c’est", "Un agent de codage pour le terminal, les IDE, le bureau, le web et le mobile", "Un éditeur de code IA, plus une CLI (`agent`), des agents cloud et la revue de code"],
        ["Modèles principaux", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5 à 4.7 et Composer 2.5 ; Claude, GPT, Gemini et d’autres au prix catalogue de l’API"],
        ["Forfait payant le moins cher", "Claude Pro, 20 $/mois", "Plus, 8 $/mois, modèles Grok uniquement"],
        ["Coût des modèles Claude", "Inclus dans les limites de votre forfait Claude", "Facturés à part, à l’usage, au prix catalogue de l’API (Premium et au-delà)"],
        ["Instructions du projet", "`CLAUDE.md`, `.claude/rules/` ; lit AGENTS.md s’il n’y a pas de CLAUDE.md", "`.cursor/rules/*.mdc`, `AGENTS.md`, règles utilisateur et d’équipe"],
        ["Plateformes", "macOS, Windows, Linux", "macOS, Windows, Linux"],
      ],
    },
    {
      kind: "table",
      title: "Tarifs : forfaits Claude vs forfaits Cursor",
      text: [
        "Prix mensuels en dollars américains, tels qu’affichés sur claude.com/pricing et cursor.com/pricing. Les forfaits Cursor incluent désormais aussi des fonctionnalités X, comme moins de publicités dans le fil, et partagent avec Grok un même quota d’usage IA renouvelé chaque semaine.",
      ],
      headers: ["Forfait Claude", "Prix", "Forfait Cursor", "Prix"],
      rows: [
        ["Free", "Pas de Claude Code", "Free", "0 $, requêtes d’agent limitées"],
        ["Pro", "20 $ (17 $ en facturation annuelle)", "Plus", "8 $, modèles Grok uniquement"],
        ["Max", "100 $", "Premium", "30 $ : 4 fois l’usage de Plus, agents cloud, automatisations, revue de code, modèles tiers au prix de l’API"],
        ["Ultra", "200 $", "Super", "100 $ : 15 fois l’usage de Plus"],
        ["Team", "25 $ par siège (Standard), 125 $ (Premium)", "Ultra", "200 $ : 50 fois l’usage de Plus"],
        ["Enterprise", "20 $ par siège en facturation annuelle, plus l’usage aux tarifs de l’API", "Teams, Enterprise", "À partir de 30 $ par utilisateur ; Enterprise sur devis"],
      ],
    },
    {
      kind: "table",
      title: "Les fonctionnalités côte à côte",
      headers: ["Fonctionnalité", "Claude Code", "Cursor"],
      rows: [
        ["Agent dans le terminal", "`claude`, avec le mode headless `-p`", "CLI `agent`, avec le mode print `-p`"],
        ["Mode plan", "Oui (Shift+Tab, `/plan`)", "Oui (Shift+Tab, `/plan`)"],
        ["Agents cloud", "Claude Code sur le web, sessions cloud", "Agents cloud dans des VM (Premium et au-delà), lancés depuis le web, iOS, GitHub, Slack, Linear ou l’API"],
        ["Travail en parallèle", "`--worktree`, sous-agents, vue des agents", "`/worktree`, `/best-of-n` sur plusieurs modèles"],
        ["Automatisations", "`/loop`, tâches planifiées sur le bureau et dans le cloud", "Automatisations sur cron, Git, Slack, Linear, webhooks, Sentry, PagerDuty (Premium et au-delà)"],
        ["MCP", "Oui : `claude mcp add`, `.mcp.json`", "Oui : `.cursor/mcp.json`"],
        ["Hooks", "Oui, plus de 30 événements dans `settings.json`", "Oui, une vingtaine d’événements dans `hooks.json` ; peut charger les hooks de Claude Code"],
        ["Revue de code", "`/code-review` en local ; `@claude review` sur Team et Enterprise", "Bugbot sur GitHub, GitLab, Bitbucket et Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir entre Claude Code et Cursor",
      text: [
        "Aucun n’est meilleur en tout, et les benchmarks publiés avantagent ceux qui les publient. Décidez selon ce qui change votre journée.",
      ],
      steps: [
        {
          title: "Choisissez les modèles que vous voulez payer",
          text: "Si vous voulez des modèles Claude au quotidien, un forfait Claude les inclut dans ses limites ; dans Cursor, ils sont facturés en plus du forfait, au prix catalogue de l’API. Si Grok et Composer vous suffisent, les forfaits Cursor à 8 $ et 30 $ coûtent moins cher que ceux de Claude.",
        },
        {
          title: "Choisissez où vous voulez travailler",
          text: "Cursor est d’abord un éditeur : modifications en ligne, complétion avec Tab et l’agent dans une seule fenêtre. Claude Code est d’abord un agent : il fonctionne depuis n’importe quel terminal et s’intègre à VS Code, JetBrains, l’application de bureau, le web et Slack.",
        },
        {
          title: "Évaluez ce qui doit tourner sans vous",
          text: "Les deux tournent dans le cloud et de façon planifiée. Les agents cloud et les automatisations de Cursor exigent Premium ou plus ; les tâches planifiées et les sessions cloud de Claude Code sont incluses dans les forfaits Claude. Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Gardez votre configuration portable",
          text: "Écrivez les règles communes dans AGENTS.md (les deux le lisent) et importez-le depuis CLAUDE.md ; Cursor peut aussi charger les hooks de Claude Code. Changer d’outil ou combiner les deux coûte alors peu. Voir le [guide CLAUDE.md](/blog/claude-md).",
        },
        {
          title: "Ou utilisez les deux",
          text: "La documentation VS Code d’Anthropic propose un lien d’installation pour Cursor : l’extension Claude Code fonctionne donc dans l’éditeur Cursor, avec votre forfait Claude.",
        },
      ],
      source: { label: "Sources : documentation de Claude Code et tarifs de Cursor", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Si vous utilisez l’extension Claude Code dans Cursor",
      text: [
        "Le 29 octobre 2026, Cursor a signalé que des versions malveillantes 2.1.312 et 2.1.313 de l’extension Anthropic.claude-code, qui n’avaient pas été créées par Anthropic, ont été disponibles sur la marketplace d’extensions de Cursor pendant environ 11 heures, pour Windows et macOS. Cursor les a retirées, a reconstruit la marketplace et a publié une vérification : une clé SSH nommée `svc-telemetry` dans votre `authorized_keys` signifie que la machine a été touchée. Si vous avez installé ou mis à jour l’extension ce jour-là, suivez l’avis de sécurité de Cursor.",
      ],
    },
    {
      kind: "text",
      title: "Et Codex ?",
      text: [
        "Codex, d’OpenAI, est le troisième choix courant : il est inclus dans les forfaits ChatGPT dès l’offre gratuite, et il fonctionne aussi dans Cursor. Comparez-le dans [Claude Code vs Codex](/blog/claude-code-vs-codex), et voyez les [outils d’orchestration pour Claude Code](/blog/claude-code-orchestration-tools) pour faire tourner plusieurs agents à la fois.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Quel que soit votre choix, donnez-lui un travail",
      text: [
        "Les éditeurs comme les agents attendent toujours votre prochain prompt. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à chaque pulsation pour qu’elle prenne la prochaine issue d’un tableau, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Choisissez un rôle et un objectif",
          text: "Ingénieur logiciel, relecteur, rédacteur SEO : chacun a un objectif exprimé sous forme de chiffre. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et prend la prochaine issue.",
        },
        {
          title: "Suivez le travail sur le tableau",
          text: "Il commente au fil de l’eau et vous écrit quand il a besoin d’une décision.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir entre Claude Code et Cursor" },
  mid: {
    title: "Vous avez choisi votre agent ? Laissez-le maintenant travailler sans vous attendre.",
    text: "Crewmark réveille Claude Code ou Codex avec une pulsation, un rôle, un objectif et un tableau d’issues.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ Claude Code vs Cursor",
    items: [
      {
        q: "Claude Code est-il meilleur que Cursor ?",
        a: "Cela dépend de votre façon de travailler. Claude Code convient à ceux qui veulent les modèles Claude inclus dans un abonnement et un agent qui fonctionne depuis n’importe quel terminal ou IDE. Cursor convient à ceux qui veulent un éditeur IA avec modifications en ligne, et à qui les modèles Grok, ou le prix de l’API pour les autres, conviennent.",
      },
      {
        q: "Puis-je utiliser les modèles Claude dans Cursor ?",
        a: "Oui, à partir de Premium (30 $), mais les modèles tiers comme Claude sont facturés à part, à l’usage, au prix catalogue de l’API. Le forfait Plus à 8 $ ne propose que les modèles Grok.",
      },
      {
        q: "Lequel est le moins cher, Claude Code ou Cursor ?",
        a: "Les forfaits d’entrée de Cursor sont moins chers (8 $ et 30 $ par mois), mais l’usage de Claude dans Cursor coûte en plus. Si vous utilisez surtout les modèles Claude, un forfait Claude Pro (20 $) ou Max (100 $) revient généralement moins cher que de payer au prix de l’API.",
      },
      {
        q: "Cursor appartient-il désormais à SpaceX ?",
        a: "Oui. Cursor a annoncé le 14 août 2026 avoir été racheté par SpaceX, au terme d’un processus commencé en avril. Ses forfaits incluent désormais des fonctionnalités X et les modèles Grok.",
      },
      {
        q: "Puis-je faire tourner Claude Code dans Cursor ?",
        a: "Oui. L’extension Claude Code s’installe dans Cursor via le lien d’installation d’Anthropic, et la CLI `claude` fonctionne dans le terminal de Cursor. Utilisez l’extension officielle et vérifiez sa version après l’avis de sécurité de Cursor du 29 octobre.",
      },
      {
        q: "Claude Code et Cursor partagent-ils leur configuration ?",
        a: "En partie. Les deux lisent AGENTS.md, les deux prennent en charge MCP (chacun avec son propre fichier de configuration), et Cursor peut charger les hooks de Claude Code. Pour le reste, les fichiers de règles et de paramètres sont distincts.",
      },
      {
        q: "Et les limites d’usage ?",
        a: "Les forfaits Claude utilisent une fenêtre de 5 heures plus des limites hebdomadaires partagées avec le chat Claude. Les forfaits Cursor partagent avec Grok un quota renouvelé chaque semaine, dimensionné en multiples du forfait Plus, avec des recharges ou une facturation au prix de l’API au-delà.",
      },
    ],
  },
  cta: {
    title: "Faites de votre agent de codage un coéquipier qui ne s’arrête pas.",
    text: "Crewmark transforme des sessions Claude Code, Codex et DeepSeek Harness en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans la documentation de Claude Code, sur claude.com/pricing et sur cursor.com (tarifs, documentation, changelog et blog) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, Cursor ni SpaceX et non approuvé par eux. Claude et Claude Code sont des marques d’Anthropic ; Cursor, de son propriétaire.",
};
