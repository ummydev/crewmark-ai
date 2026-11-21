import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork : définition, tarifs, configuration, vs Claude Code",
    description:
      "Claude Cowork expliqué : l’agent d’Anthropic pour le travail hors code dans Claude. Offres, exécution cloud, tâches planifiées, validations et vs Claude Code.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Anthropic",
    title: "Claude Cowork : ce que fait le collègue IA d’Anthropic et comment l’utiliser",
    lead: "Claude Cowork est l’agent d’Anthropic pour le travail intellectuel dans les applications Claude. Vous décrivez un résultat, comme une synthèse de recherche, un tableur, une présentation ou un dossier bien rangé, et Claude planifie les étapes, les exécute dans vos fichiers, vos applications connectées et un navigateur, puis vous remet le résultat. Les tâches s’exécutent dans le cloud d’Anthropic et continuent même ordinateur portable fermé. Voici ce qu’il fait, quelles offres l’incluent, comment le configurer, comment il demande avant d’agir et en quoi il diffère de Claude Code.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Claude Cowork",
      points: [
        "Un agent pour le travail hors code : recherche, analyse, documents, tableurs avec des formules qui fonctionnent, présentations et gestion de fichiers. La FAQ d’Anthropic elle-même réserve Cowork à ces usages et Claude Code à l’ingénierie logicielle.",
        "Il s’exécute dans le cloud : les sessions tournent dans un environnement isolé sur les serveurs d’Anthropic et sont enregistrées dans votre compte Claude. Sur Pro, Max et Ultra, les nouvelles tâches s’exécutent dans le cloud depuis le 6 octobre 2026.",
        "Il accède à votre propre ordinateur via Claude Desktop : les fichiers locaux, les connecteurs locaux, l’utilisation du navigateur et l’utilisation de l’ordinateur nécessitent que l’application de bureau soit ouverte sur cette machine.",
        "Il répète le travail : les tâches planifiées s’exécutent toutes les heures, chaque jour, chaque semaine ou les jours ouvrés, chacune dans sa propre session dans le cloud.",
        "Il fait partie de Claude : depuis septembre 2026, Cowork se fond peu à peu dans les conversations Claude ordinaires.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs de Claude Cowork : quelles offres l’incluent",
      text: [
        "Prix relevés sur claude.com/pricing le 13 novembre 2026, en dollars américains, hors taxes. Anthropic ne publie pas la quantité d’usage de Cowork incluse dans chaque offre ; sa fiche Pro précise que Cowork consomme les limites plus vite que le chat.",
      ],
      headers: ["Offre", "Prix", "Claude Cowork"],
      rows: [
        ["Free", "$0", "Non inclus"],
        ["Pro", "$20/mois, ou $17/mois en facturation annuelle ($200 par an)", "Inclus"],
        ["Max", "$100/mois", "Inclus"],
        ["Ultra", "$200/mois", "Inclus"],
        ["Team (de 2 à 150 personnes)", "Siège Standard à $20/mois en facturation annuelle ou $25 en mensuel ; siège Premium à $100 ou $125", "Inclus ; web et mobile en bêta"],
        ["Enterprise", "$20/siège/mois en facturation annuelle, 20 sièges minimum, plus l’usage aux tarifs de l’API", "Inclus ; sessions cloud, web et mobile désactivés jusqu’à ce qu’un propriétaire les active"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Claude Cowork",
      steps: [
        { title: "Souscrivez une offre Claude payante", text: "Pro, Max, Ultra, Team ou Enterprise. Sur Enterprise, un propriétaire devra peut-être activer Cowork." },
        { title: "Installez Claude Desktop pour travailler en local", text: "Cowork fonctionne aussi sur le web, sur iOS et sur Android, mais les fichiers locaux, l’utilisation du navigateur et l’utilisation de l’ordinateur nécessitent Claude Desktop pour macOS ou Windows (Linux est en bêta)." },
        { title: "Décrivez le résultat, pas les étapes", text: "Dites ce que vous voulez obtenir et où se trouvent les éléments de départ : des fichiers, une application connectée comme Google Drive, Gmail, Microsoft 365 ou Slack, ou le web." },
        { title: "Choisissez comment il demande", text: "Choisissez Manual pour approuver chaque action, ou Auto pour laisser un contrôle de sécurité approuver les actions courantes. Vous pouvez aussi régler chaque outil de connecteur sur toujours autorisé, validation requise ou bloqué." },
        { title: "Planifiez la tâche", text: "Tapez `/schedule` dans une tâche, ou utilisez la page Scheduled, et choisissez toutes les heures, chaque jour, chaque semaine, les jours ouvrés ou à la demande." },
      ],
      source: { label: "Source : centre d’aide d’Anthropic, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment Claude Cowork vous laisse le contrôle",
      points: [
        "Trois modes de validation : Manual demande avant d’agir ; Auto soumet chaque action à un contrôle de sécurité et bloque celles qui sont risquées, puis repasse aux demandes s’il se heurte sans cesse à des blocages ; Skip ne demande rien. Auto est le mode par défaut sur Pro, Max, Ultra et Team, Manual sur Enterprise.",
        "Il demande avant de supprimer définitivement des fichiers, et l’utilisation de l’ordinateur demande avant chaque application.",
        "Les administrateurs Team et Enterprise peuvent désactiver Auto et exiger une validation pour chaque outil de connecteur capable d’écrire.",
        "Vous pouvez réorienter ou arrêter une tâche en cours depuis l’application de bureau, le web ou votre téléphone.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work et Copilot Cowork",
      text: [
        "Informations tirées des propres pages de chaque éditeur, vérifiées le 13 novembre 2026. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker).",
        "Côte à côte : [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). Guides : [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["Éditeur", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["Conçu pour", "Le travail intellectuel hors code", "L’ingénierie logicielle", "Les tâches qui aboutissent à un livrable à relire", "Le travail dans Microsoft 365"],
        ["Où il s’exécute", "Cloud d’Anthropic ; en local via Claude Desktop", "Votre machine par défaut ; sessions cloud sur le web", "Cloud d’OpenAI, ou votre ordinateur via l’application de bureau", "Cloud de Microsoft, avec OneDrive et SharePoint"],
        ["Qui peut y accéder", "Offres Claude payantes", "Offres Claude payantes", "Offres ChatGPT ; accès limité sur Free et Go", "Licence Microsoft 365 Copilot plus Copilot Credits"],
        ["Planification", "De toutes les heures à chaque semaine, dans le cloud", "Tâches planifiées cloud et sur le bureau, `/loop`", "Tâches planifiées et déclencheurs d’événements", "Prompts planifiés et tâches déclenchées par un événement"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Cowork pour vos documents. Crewmark pour votre base de code.",
      text: [
        "Claude Cowork prend en charge le travail intellectuel que vous lui confiez. Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, pour que le travail d’ingénierie, de SEO et de marketing dans un dépôt soit fait selon un planning et suivi sur un tableau.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Parmi les [rôles d’employés IA](/ai-employees), comme un [spécialiste SEO IA](/ai-employees/seo-specialist)." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Claude Cowork" },
  mid: {
    title: "Envie d’un collègue IA pour votre base de code ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Claude Cowork",
    items: [
      {
        q: "Qu’est-ce que Claude Cowork ?",
        a: "L’agent d’Anthropic pour le travail intellectuel hors code dans les applications Claude. Vous décrivez un résultat et il en exécute les étapes dans vos fichiers, vos applications connectées et un navigateur, puis renvoie des fichiers finis comme des documents, des tableurs et des présentations.",
      },
      {
        q: "Combien coûte Claude Cowork ?",
        a: "Il est inclus dans les offres Claude payantes : Pro à $20 par mois (ou $17 par mois en facturation annuelle), Max à $100, Ultra à $200, ainsi que les sièges Team et Enterprise. Claude Free ne l’inclut pas.",
      },
      {
        q: "Claude Cowork vs Claude Code : quelle différence ?",
        a: "Cowork sert au travail intellectuel, comme la recherche, les documents et les tableurs, dans les applications Claude ; Claude Code est l’agent d’Anthropic pour l’ingénierie logicielle dans votre dépôt. Selon Anthropic, Cowork repose sur la même architecture que Claude Code.",
      },
      {
        q: "Claude Cowork est-il disponible sur Windows et sur mobile ?",
        a: "Oui. Claude Desktop le fait tourner sur macOS et Windows (Linux en bêta), et il est disponible sur le web et dans Claude pour iOS et Android sur Pro, Max, Ultra et Team. Les fichiers locaux, l’utilisation du navigateur et l’utilisation de l’ordinateur nécessitent l’application de bureau.",
      },
      {
        q: "Claude Cowork peut-il exécuter des tâches selon un planning ?",
        a: "Oui, sur toutes les offres payantes. Utilisez `/schedule` dans une tâche ou la page Scheduled ; chaque exécution est une session distincte dans le cloud, donc votre ordinateur peut être éteint, sauf si la tâche a besoin de fichiers locaux.",
      },
      {
        q: "Claude Cowork fonctionne-t-il quand mon ordinateur portable est fermé ?",
        a: "Les tâches cloud, oui : elles continuent sur les serveurs d’Anthropic. Le travail qui nécessite vos fichiers locaux, vos connecteurs locaux ou votre navigateur ne peut plus y accéder tant que Claude Desktop n’est pas rouvert.",
      },
    ],
  },
  cta: {
    title: "Confiez les documents à Cowork. Donnez aussi un poste à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié sur claude.com/product/cowork, claude.com/pricing et le centre d’aide d’Anthropic le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI ni Microsoft, et non approuvé par eux. Claude et Claude Code sont des marques d’Anthropic.",
};
