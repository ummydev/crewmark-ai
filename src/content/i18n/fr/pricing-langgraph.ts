import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/langgraph; the English master is src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph prix : gratuit, LangSmith Plus $39, Agent Server",
    description:
      "LangGraph prix : le framework MIT est gratuit. LangSmith Developer coûte $0, Plus $39 par siège et par mois avec un Agent Server, puis $1.00 par LSU.",
  },
  breadcrumb: "Prix de LangGraph",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Frameworks d’agents",
    title: "Prix de LangGraph : le framework gratuit, les offres LangSmith et le coût d’Agent Server",
    lead: "LangGraph est gratuit : le framework est open source sous licence MIT et tourne dans votre propre application. Ce qui est payant, c’est LangSmith, le produit commercial de LangChain pour le traçage, l’évaluation et le déploiement. Developer coûte $0 pour un siège, Plus $39 par siège et par mois avec un Small Agent Server inclus, et Enterprise est sur mesure. Les Agent Servers supplémentaires sont facturés à l’usage, à $1.00 par LSU, et les appels aux modèles sont facturés par votre fournisseur de modèles. Voici chaque offre, le coût d’Agent Server, et la comparaison de LangGraph avec CrewAI, AutoGen, Relevance AI et Paperclip.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de LangGraph et LangSmith",
      text: [
        "D’après la page de tarifs de [langchain.com](https://www.langchain.com/langgraph) et la documentation de LangChain, vérifiées le 13 novembre 2026. Prix en dollars américains ; Developer et Plus sont facturés au mois.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Framework LangGraph (open source)",
          "Gratuit, licence MIT",
          "Une bibliothèque Python et JavaScript/TypeScript pour des agents à état, exécutée dans votre propre application",
        ],
        [
          "LangSmith Developer",
          "$0/siège par mois",
          "1 siège ; jusqu’à 5k traces de base/mois, puis paiement à l’usage ; pas d’Agent Server",
        ],
        [
          "LangSmith Plus",
          "$39/siège par mois",
          "Jusqu’à 10k traces de base/mois, puis paiement à l’usage ; « 1 Small Agent Server inclus sans frais en hébergement serverless » (« 1 Small Agent Server included on serverless hosting at no charge »)",
        ],
        [
          "LangSmith Enterprise",
          "Sur mesure, facturé annuellement d’avance",
          "Ajoute des options de déploiement auto-hébergé et hybride",
        ],
        [
          "Agent Servers supplémentaires",
          "$1.00 par LSU, facturé à l’usage",
          "Calcul d’exécution 0.0675 LSU/vCPU-h, mémoire d’exécution 0.0090 LSU/GiB-h, calcul de base de données 0.177 LSU/vCPU-h, mémoire de base de données 0.025 LSU/GiB-h",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour LangGraph",
      points: [
        "Votre fournisseur de modèles. LangGraph appelle les modèles qu’utilise votre code, et « LangGraph ne nécessite pas LangChain » (« LangGraph does not require LangChain. »). Ces appels aux modèles sont facturés par votre fournisseur.",
        "Les traces au-delà du volume inclus. Developer inclut jusqu’à 5k traces de base par mois et Plus jusqu’à 10k ; au-delà, les traces sont en paiement à l’usage.",
        "Les sièges. Developer est limité à 1 siège. Plus coûte $39 par siège et par mois.",
        "Les Agent Servers au-delà du premier. Plus inclut 1 Small Agent Server en hébergement serverless. Les suivants sont facturés à l’usage à $1.00 par LSU : le calcul d’exécution revient donc à $0.0675 par heure de vCPU et la mémoire d’exécution à $0.009 par heure de GiB ; le calcul de base de données est de 0.177 LSU par heure de vCPU et la mémoire de base de données de 0.025 LSU par heure de GiB.",
        "Les tâches cron continuent de tourner. Agent Server prend en charge des tâches cron selon le planning que vous définissez. La documentation de LangChain recommande de supprimer celles qui ne servent plus, car les exécutions récurrentes peuvent entraîner des frais d’API LLM.",
        "Où il est hébergé. Le Cloud Agent Server est « entièrement géré par LangChain sur AWS, Azure et GCP » (« Fully managed by LangChain on AWS, Azure, and GCP »). Le déploiement auto-hébergé et le déploiement hybride sont des options Enterprise.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de LangGraph vs autres frameworks et plateformes d’agents",
      text: [
        "Prix tirés de la page de tarifs ou du README de chaque produit, vérifiés le 13 novembre 2026, en dollars américains. Le README d’AutoGen indique « Ce projet a été archivé et n’est plus activement maintenu par Microsoft » (« This project has been archived and is no longer actively maintained by Microsoft »), et Microsoft désigne Agent Framework comme son successeur direct. Au 13 novembre 2026, la documentation de Relevance AI indique que son offre Free est retirée pour les nouvelles inscriptions et les comptes existants.",
        "Côte à côte : [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). D’autres options dans [les alternatives à LangGraph](/alternatives/langgraph).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        [
          "LangGraph",
          "Framework gratuit ; LangSmith Plus $39/siège par mois",
          "Oui : le framework (MIT) et LangSmith Developer à $0 pour 1 siège",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework gratuit ; AMP Basic gratuit ; Enterprise sur mesure",
          "Oui : le framework (MIT) et AMP Basic avec 50 exécutions de workflow/mois",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Gratuit (open source) ; le README ne mentionne aucun service payant",
          "Oui : code sous MIT ; le README indique qu’il est archivé et n’est plus activement maintenu par Microsoft",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, prix sur mesure via l’équipe commerciale",
          "Non : sa documentation indique que l’offre Free est retirée",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Auto-hébergé gratuit ; aucun prix publié",
          "Oui : auto-hébergé (MIT) ; une version cloud est sur liste d’attente",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vous ne développez pas d’application d’agents ? Donnez plutôt un rôle à Claude Code ou Codex.",
      text: [
        "LangGraph sert à construire des agents à état dans votre propre code. Crewmark est un gestionnaire de tickets pour une équipe d’employés IA, destiné à ceux qui utilisent déjà Claude Code ou Codex et veulent que des agents continuent de travailler sur un poste sans avoir à les relancer à chaque fois. Chaque employé a un rôle, des KPI et des horaires de travail, se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. L’usage de l’agent reste sur l’abonnement Claude ou ChatGPT que vous payez déjà.",
        "Les prix de Crewmark : Free à $0 (1 projet, jusqu’à 3 employés IA, 1 personne). Pro à $5/mois et Team à $10/mois arrivent bientôt. La facturation n’est pas encore en place : d’ici là, tous les comptes peuvent utiliser Crewmark gratuitement. Il est open source (GPL-3.0) et peut être auto-hébergé.",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel, spécialiste SEO ou analyste de données.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant.",
        },
        {
          title: "Voir les offres",
          text: "[Les tarifs de Crewmark](/pricing), et des missions avec leur configuration dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous utilisez déjà Claude Code ou Codex ?",
    text: "Crewmark le transforme en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé. Gratuit pour 1 projet et jusqu’à 3 employés IA.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix de LangGraph",
    items: [
      {
        q: "LangGraph est-il gratuit ?",
        a: "Oui. Le framework LangGraph est open source sous licence MIT, pour Python et JavaScript/TypeScript. LangSmith, le produit commercial de LangChain, propose aussi une offre Developer à $0 pour un siège.",
      },
      {
        q: "Combien coûte le déploiement de LangGraph dans le cloud ?",
        a: "Le déploiement passe par LangSmith Agent Server, entièrement géré par LangChain sur AWS, Azure et GCP. LangSmith Plus ($39 par siège et par mois) inclut sans frais 1 Small Agent Server en hébergement serverless, et les serveurs supplémentaires sont facturés à l’usage à $1.00 par LSU. L’offre Developer n’inclut pas d’Agent Server.",
      },
      {
        q: "Prix du serveur LangGraph : combien coûte Agent Server ?",
        a: "Agent Server (anciennement LangSmith Deployment) est facturé à l’usage en LSU, à $1.00 par LSU : 0.0675 LSU par heure de vCPU de calcul d’exécution, 0.0090 par heure de GiB de mémoire d’exécution, 0.177 par heure de vCPU de calcul de base de données et 0.025 par heure de GiB de mémoire de base de données. Plus inclut un Small Agent Server sans frais.",
      },
      {
        q: "Que comprend LangSmith Plus ?",
        a: "$39 par siège et par mois, facturés au mois : jusqu’à 10k traces de base par mois, puis paiement à l’usage, et 1 Small Agent Server sans frais en hébergement serverless.",
      },
      {
        q: "Existe-t-il des tarifs entreprise pour LangGraph ?",
        a: "LangSmith Enterprise est sur mesure, facturé annuellement d’avance. Les déploiements d’Agent Server auto-hébergés et hybrides sont des options Enterprise.",
      },
      {
        q: "Faut-il LangSmith pour utiliser LangGraph ?",
        a: "Le framework est une bibliothèque MIT gratuite qui tourne dans votre propre application. LangSmith est un produit commercial distinct de LangChain, pour le traçage, l’évaluation et le déploiement d’agents sur Agent Server.",
      },
    ],
  },
  cta: {
    title: "Construisez le graphe, ou confiez un poste à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur langchain.com/pricing et dans la documentation LangGraph et LangSmith de LangChain le 13 novembre 2026. Les prix des autres produits proviennent de leurs propres pages à la même date.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec LangChain ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
