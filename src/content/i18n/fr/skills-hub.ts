import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills Claude pour le marketing et le design | Crewmark AI",
    description:
      "Des skills Claude Code gratuites et open source, issues d’une équipe marketing IA qui s’en sert tous les jours : mots-clés tendance, pages SEO, pages comparatives, indexation, recherche IA et rapport quotidien, plus un comparatif des meilleures skills de design.",
  },
  breadcrumb: "Skills Claude",
  hero: {
    kicker: "Skills Claude",
    title: "Les skills Claude d’une équipe marketing IA",
    lead: "Marketing Team Skills est un ensemble gratuit et open source d’Agent Skills pour Claude Code, Codex et Cursor : les étapes que le spécialiste SEO IA de Crewmark suit chaque jour pour trouver des mots-clés, rédiger et traduire des pages, les faire indexer et rendre compte de ce qui a bougé. Chaque skill est un SKILL.md avec des commandes qui fonctionnent et les erreurs que nous avons commises. Ci-dessous : ce qu’il contient, comment l’installer et nos guides des meilleures skills pour chaque tâche.",
    cta: "Commencer",
    secondary: "Installer les skills",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Ce que contient Marketing Team Skills",
      text: ["La version 0.1 couvre le SEO on-page. Le SEO off-page, la vidéo UGC et la prospection sur les réseaux sociaux suivront."],
      headers: ["Skill", "Ce qu’elle fait"],
      rows: [
        ["trend-keywords", "Repère les termes que les gens viennent de commencer à chercher après un lancement, une fermeture ou un rachat, et publie une page le jour même"],
        ["keyword-research", "Choisit des mots-clés sur lesquels un nouveau site peut se positionner et tient une carte des mots-clés"],
        ["seo-page", "Rédige une page pour un mot-clé : définition d’abord, puis étapes, tableau, FAQ et sources"],
        ["competitor-pages", "Crée des pages d’alternatives et de comparaison (vs) à partir de la documentation de chaque produit"],
        ["programmatic-pages", "Des pages issues de modèles, à grande échelle, sans contenu pauvre"],
        ["multilingual-seo", "Publie chaque page en plusieurs langues avec hreflang"],
        ["index-push", "Fait explorer les pages : IndexNow, Search Console, Bing"],
        ["ai-search", "Rend le site citable par ChatGPT, Claude et Perplexity"],
        ["seo-daily-report", "Rédige le rapport de fin de journée au regard de l’objectif"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment installer les skills",
      steps: [
        {
          title: "Ajoutez-les à votre agent",
          text: "La CLI skills les installe dans Claude Code, Codex, Cursor et d’autres agents ; ou utilisez le plugin Claude Code.",
          code: install,
        },
        {
          title: "Copiez la fiche de poste",
          text: "Placez `roles/seo-specialist/CLAUDE.md` (ou `AGENTS.md` pour Codex) dans le dépôt de votre site et renseignez l’objectif, pour que chaque session connaisse la routine quotidienne. Voir le [spécialiste SEO IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Lancez-le chaque jour",
          text: "Utilisez `/loop` ou des tâches planifiées, ou faites-le tourner comme un employé IA avec une pulsation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
      ],
      source: { label: "Source : Marketing Team Skills sur GitHub", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "Les meilleures skills Claude par tâche",
      text: [
        "Nos comparatifs des skills qui valent la peine d’être installées pour chaque type de travail, d’après le dépôt de chaque projet :",
      ],
      points: [
        "[Meilleures skills Claude pour le web design et l’UI](/skills/website-design) : frontend-design d’Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop et d’autres.",
        "Pour construire un agent SEO pas à pas, lisez [Agent IA SEO : comment en créer un](/blog/ai-seo-agent) ; pour les skills en général, [skills Claude Code](/blog/claude-code-skills).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des skills pour la session, des employés pour le travail",
      text: [
        "Les skills rendent une session compétente sur une tâche. Crewmark transforme Claude Code, Codex, DeepSeek Harness ou OpenCode en employés IA dotés d’un rôle, d’un objectif et d’horaires de travail, qui se réveillent au rythme d’une pulsation pour prendre la prochaine issue d’un tableau, en utilisant les skills que vous installez.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Un [spécialiste SEO](/ai-employees/seo-specialist), un [agent marketing](/ai-employees/marketing-agent), un [designer UI](/ai-employees/ui-designer) et d’autres.",
        },
        {
          title: "Connectez votre projet",
          text: "Chaque employé travaille dans sa propre session et son propre checkout, avec l’abonnement que vous payez déjà. Voir les [tarifs](/pricing).",
        },
        {
          title: "Relisez, sans le surveiller",
          text: "Il commente au fil de son travail et vous demande avant toute action figurant sur votre liste d’approbation.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Installer Marketing Team Skills" },
  mid: {
    title: "Vous voulez que ces skills tournent pour vous tous les jours ?",
    text: "Les employés IA de Crewmark utilisent ces skills au rythme d’une pulsation, avec l’abonnement Claude Code ou Codex que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les skills Claude",
    items: [
      {
        q: "Que sont les skills Claude ?",
        a: "Des dossiers contenant un fichier SKILL.md qui apprennent à Claude Code, Claude.ai et d’autres agents à réaliser une tâche précise. Seule une courte description est chargée jusqu’à ce que la tâche ait besoin de la skill complète.",
      },
      {
        q: "Marketing Team Skills est-il gratuit ?",
        a: "Oui. Il est open source sous licence MIT, sur GitHub à l’adresse ummydev/marketing-team-skills.",
      },
      {
        q: "Fonctionne-t-il avec Codex et Cursor ?",
        a: "Oui. La CLI skills l’installe dans Codex, Cursor et d’autres agents compatibles Agent Skills, et il existe un manifeste de plugin pour Codex.",
      },
      {
        q: "En quoi est-il différent des autres skills marketing ?",
        a: "Il est opérationnel plutôt qu’encyclopédique : chaque skill est la routine pas à pas qu’un employé SEO IA suit sur un site en production, avec des scripts et les pièges dans lesquels nous sommes tombés. Il se combine bien avec des bibliothèques plus larges comme coreyhaines31/marketingskills.",
      },
    ],
  },
  cta: {
    title: "Recrutez l’équipe qui a écrit les skills.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Liste des skills selon Marketing Team Skills v0.1, au 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ou OpenAI et non approuvé par eux. Claude, Claude Code et Codex sont des marques de leurs propriétaires.",
};
