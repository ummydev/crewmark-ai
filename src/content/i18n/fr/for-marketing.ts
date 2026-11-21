import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Les skills marketing open source de Crewmark, dans les agents que vous avez
npx skills add ummydev/marketing-team-skills

# Ou en plugin Claude Code
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `Chaque soir, lis Search Console et notre analytics des 7 derniers
jours, dis-moi ce qui fonctionne, fais une chose pour en tirer parti, et publie
le rapport sur le ticket « Daily SEO report ».

Chaque lundi, consulte les pages de tarifs et de changelog listées dans
competitors.md, compare-les à la semaine dernière et dis-moi ce qui
a changé et lesquelles de nos pages comparatives mettre à jour.

Transforme l’article de blog de cette semaine en cinq brouillons LinkedIn et X avec notre
ton. Mets-les sur le tableau pour relecture ; ne publie rien.

Chaque vendredi, récupère les inscriptions et l’activation dans PostHog, compare
avec la semaine dernière, et écris trois choses à essayer la semaine prochaine.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code pour le marketing : des employés IA pour votre équipe",
    description:
      "Comment les équipes marketing utilisent Claude Code et Codex comme employés IA : SEO, contenu, réseaux sociaux, veille concurrentielle et reporting selon un planning. Rôles, cas d’usage, prompts et skills à copier, et comment tout configurer pour que rien ne sorte sans vous.",
  },
  breadcrumb: "Claude Code pour le marketing",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Pour les équipes marketing",
    title: "Claude Code pour le marketing : des employés IA qui font le travail récurrent",
    lead: "Claude Code et Codex ne sont pas réservés aux ingénieurs. Avec un rôle, les bonnes skills et un planning, le même agent écrit et corrige les pages de votre site, les fait indexer, rédige des posts à partir de ce que vous avez livré, surveille les concurrents et fait le point sur les chiffres chaque jour. Le marketing de Crewmark fonctionne ainsi. Cette page présente les tâches à déléguer, les rôles qui s’en chargent, des prompts et des skills à copier, et comment tout configurer pour que rien de public ne sorte sans une personne.",
    cta: "Commencer",
    secondary: "Voir les tâches",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Ce que les équipes marketing confient à un employé IA",
      text: [
        "Les meilleures premières tâches se répètent chaque jour ou chaque semaine, ont une ligne d’arrivée claire et vous laissent le dernier mot.",
      ],
      headers: ["Tâche", "Fréquence", "Qui s’en charge", "Guide"],
      rows: [
        ["Rapport SEO : trafic, ce qui fonctionne, l’écart avec l’objectif", "Quotidienne", "Spécialiste SEO", "[Rapport SEO quotidien](/use-cases/daily-seo-report)"],
        ["Tarifs, lancements et changements de documentation des concurrents", "Hebdomadaire", "Agent marketing", "[Veille concurrentielle hebdomadaire](/use-cases/weekly-competitor-digest)"],
        ["Nouvelles pages pour les mots-clés qui commencent à marcher", "Quotidienne", "Spécialiste SEO", "[Spécialiste SEO IA](/ai-employees/seo-specialist)"],
        ["Pages comparatives et d’alternatives, tenues à jour", "Hebdomadaire", "Spécialiste SEO", "[Skill des pages concurrents](/skills)"],
        ["Posts pour les réseaux sociaux rédigés à partir de ce que vous avez livré", "Quotidienne", "Social media manager", "[Social media manager IA](/ai-employees/social-media-manager)"],
        ["Chiffres du funnel et expériences à tester", "Hebdomadaire", "Agent marketing", "[Agent marketing IA](/ai-employees/marketing-agent)"],
        ["Traductions des pages qui reçoivent déjà du trafic organique", "Selon les besoins", "Spécialiste SEO", "[Skill de SEO multilingue](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Des prompts à copier",
      text: [
        "Chacun fonctionne comme ticket récurrent pour un employé IA, ou comme prompt ponctuel dans Claude Code ou Codex.",
      ],
      steps: [
        {
          title: "Quatre tâches, une phrase chacune",
          text: "Remplacez les noms et les chiffres par les vôtres. Les deux premières ont des guides complets avec la fiche de rôle : le [rapport SEO quotidien](/use-cases/daily-seo-report) et la [veille concurrentielle hebdomadaire](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "Les skills marketing Claude Code à installer",
      text: [
        "Les skills donnent à l’agent les étapes de chaque tâche, pour que vous n’ayez pas à les réexpliquer à chaque session.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, open source)",
          text: "Les skills que notre propre employé SEO fait tourner chaque jour : mots-clés tendance, recherche de mots-clés, une page par mot-clé, pages concurrents, SEO multilingue, indexation des pages, recherche IA et rapport quotidien, plus des skills de vidéo courte. Voir [Marketing Team Skills](/skills).",
          code: install,
        },
        {
          title: "D’autres skills SEO et marketing",
          text: "marketingskills de Corey Haines (seo-audit, ai-seo, programmatic-seo et d’autres), Claude SEO et d’autres sont comparées dans les [meilleures skills Claude pour le SEO](/skills/seo).",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Monter une équipe marketing d’employés IA",
      steps: [
        {
          title: "Recrutez un rôle à la fois",
          text: "Commencez par la tâche qui vous prend le plus de temps chaque semaine. Chaque page de rôle présente les objectifs, la routine quotidienne et la fiche de poste : [spécialiste SEO](/ai-employees/seo-specialist), [agent marketing](/ai-employees/marketing-agent), [social media manager](/ai-employees/social-media-manager).",
        },
        {
          title: "Donnez-lui un accès en lecture et un dépôt",
          text: "Un accès en lecture seule à Search Console et à l’analytics, le dépôt du site et un aperçu local pour tester les pages. Préférez les CLI aux serveurs MCP quand les deux existent ; elles consomment moins de tokens.",
        },
        {
          title: "Mettez le travail sur un tableau",
          text: "Les tâches récurrentes deviennent des tickets récurrents ; le travail ponctuel devient des tickets que vous assignez. Chaque employé se réveille au rythme de sa pulsation pendant les horaires de travail et prend le suivant.",
        },
        {
          title: "Gardez une personne sur tout ce qui est public",
          text: "Publier, poster, dépenser et tout ce qui est irréversible passe par une personne. Quand un employé en a besoin, il marque le ticket Needs action et pose la question.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "À quoi s’attendre",
      points: [
        "Le SEO prend des semaines sur n’importe quel site : visez d’abord des objectifs de pages livrées et d’impressions, puis de clics.",
        "Notre propre employé SEO livre des pages chaque jour ; pendant ses premières semaines, les impressions sont passées d’une poignée à plusieurs centaines par semaine, surtout grâce aux pages de longue traîne, tandis que les termes génériques comme « ai employee » restaient au-delà de la 80e position.",
        "Les brouillons sont rapides, mais le goût compte toujours : relisez les posts et tout ce qui porte la voix de votre marque avant publication.",
        "L’usage est décompté de votre propre abonnement Claude ou ChatGPT : planifiez donc les tâches lourdes pendant les horaires de travail.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Monter une équipe marketing d’employés IA sur Claude Code ou Codex" },
  mid: {
    title: "Vous voulez que ces tâches soient faites chaque jour sans prompt ?",
    text: "Crewmark transforme votre Claude Code ou Codex en employés marketing qui se réveillent au rythme d’une pulsation et avancent sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code peut-il faire du marketing ?",
        a: "Oui, pour le travail qu’il peut mener avec des fichiers, le web et des outils : écrire et corriger les pages du site, rechercher des mots-clés, suivre les concurrents, produire des rapports à partir de l’analytics, et rédiger des posts et des e-mails. La publication et les dépenses doivent rester entre les mains d’une personne.",
      },
      {
        q: "Quelles sont les meilleures skills marketing pour Claude Code ?",
        a: "Pour le SEO et la croissance : les Marketing Team Skills open source de Crewmark et marketingskills de Corey Haines sont deux des ensembles les plus complets ; nous les comparons avec d’autres dans les [meilleures skills Claude pour le SEO](/skills/seo).",
      },
      {
        q: "Existe-t-il un plugin marketing pour Claude Code ?",
        a: "Marketing Team Skills s’installe comme plugin Claude Code avec `/plugin marketplace add ummydev/marketing-team-skills`, ou dans Claude Code, Codex et d’autres agents avec `npx skills add`.",
      },
      {
        q: "Peut-on aussi utiliser Codex pour le marketing ?",
        a: "Oui. Mettez la fiche de rôle dans AGENTS.md au lieu de CLAUDE.md ; les skills et la configuration sont les mêmes.",
      },
      {
        q: "En quoi un employé marketing IA diffère-t-il d’un outil d’automatisation marketing ?",
        a: "Les outils d’automatisation exécutent les étapes que vous construisez. Un employé IA décide quoi faire ensuite au regard d’un objectif, fait le travail dans votre site et vos outils, et vous rend compte, selon un planning.",
      },
      {
        q: "Publiera-t-il sur les réseaux sociaux sans moi ?",
        a: "Seulement si vous l’y autorisez. Nous recommandons des brouillons à relire : l’employé les met sur le tableau et attend votre accord.",
      },
    ],
  },
  cta: {
    title: "Donnez à votre équipe marketing des employés IA qui ne manquent jamais un jour.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Rédigé le 10 novembre 2026, d’après le fonctionnement des propres employés marketing de Crewmark.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI, et non approuvé par eux. Claude, Claude Code et Codex sont des marques de leurs propriétaires.",
};
