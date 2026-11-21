import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/lindy; the English master is src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI : l’assistant IA, tarifs, crédits et configuration",
    description:
      "Lindy AI expliqué : un assistant hébergé pour e-mails, agenda, réunions et Slack. Tarifs en crédits, routines, validations, où l’utiliser et vs Relevance AI.",
  },
  breadcrumb: "Lindy",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Lindy",
    title: "Lindy AI : ce que fait l’assistant, ce qu’il coûte et comment le configurer",
    lead: "Lindy se présente comme un employé IA qui accomplit le travail dans vos outils connectés. C’est un assistant hébergé unique, qui joue le rôle d’assistant de direction personnel pour chaque utilisateur et de coéquipier partagé dans Slack. Il gère la boîte de réception, l’agenda, les réunions, la recherche, les rapports et les relances, exécute le travail récurrent sous forme de routines et attend votre accord avant toute action ayant un impact extérieur. Voici ce qu’il fait, comment fonctionne sa tarification en crédits, comment le configurer, comment fonctionnent les validations et comment il se compare à Relevance AI et Grok Bot.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Lindy",
      points: [
        "Un assistant, pas un outil de création d’agents : la documentation décrit un Lindy par espace de travail. Il est vendu pour de nombreux rôles, comme la publicité payante, le SEO et le contenu, la comptabilité, le recrutement et le support client.",
        "Deux façons de l’utiliser : en privé, comme assistant de direction via iMessage, l’e-mail ou les messages privés Slack, et comme coéquipier partagé que votre équipe peut @mentionner dans Slack pour faire des recherches, rédiger des rapports ou mettre à jour un CRM.",
        "Il apprend : plus de 40 skills intégrées plus les vôtres, une mémoire modifiable, et Watch and Learn, où vous lui montrez une tâche une seule fois.",
        "Il répète le travail sous forme de routines : chacune a un déclencheur (un planning ou un événement), un prompt et une destination. Les routines intégrées couvrent les points quotidiens, la rédaction et le classement des e-mails, les relances, ainsi que l’enregistrement, la préparation et la planification des réunions.",
        "Il choisit un modèle par tâche, et vous pouvez choisir le modèle vous-même.",
        "Il est hébergé : Lindy tourne dans le cloud et est édité par Crivello Corp, sous le nom commercial Lindy.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs de Lindy : crédits et sièges",
      text: [
        "D’après lindy.ai/pricing le 13 novembre 2026. La facturation annuelle n’est pas affichée. Chaque utilisateur actif d’un espace de travail est facturé, y compris les personnes qui se contentent de @mentionner Lindy dans Slack, et les crédits mensuels ne sont pas reportés.",
      ],
      headers: ["Option", "Prix", "Ce que vous obtenez"],
      rows: [
        ["Démarrage gratuit", "$0, sans carte bancaire", "$50 de crédits valables 7 jours ; la semaine gratuite n’est accordée qu’une fois par coéquipier"],
        ["Par utilisateur actif", "À partir de $29.99/mois", "3 000 crédits par utilisateur actif, mis en commun au sein de l’équipe"],
        ["Paliers de crédits supérieurs", "Jusqu’à $9 999.50/mois", "Jusqu’à 1 750 000 crédits"],
        ["Recharges", "$10 les 1 000 crédits", "Quand la réserve est épuisée, les actions qui consomment des crédits sont suspendues jusqu’au cycle suivant ou à une recharge"],
        ["Enterprise", "Sur mesure", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Lindy",
      steps: [
        { title: "Commencez avec des crédits gratuits", text: "Le démarrage gratuit donne $50 de crédits valables 7 jours, sans carte bancaire." },
        {
          title: "Choisissez où lui parler",
          text: "Slack, l’e-mail, iMessage et les SMS, les appels téléphoniques, l’extension Chrome dans Gmail, ou la page Home de Lindy sur le web, qui montre ce que Lindy a fait. Microsoft Teams est annoncé comme bientôt disponible.",
        },
        {
          title: "Connectez vos outils",
          text: "Gmail, Google Calendar, l’enregistrement des réunions sur Google Meet, Zoom et Microsoft Teams, des serveurs MCP et des identifiants d’API enregistrés.",
        },
        { title: "Apprenez-lui votre façon de travailler", text: "Utilisez les skills intégrées, ajoutez les vôtres, modifiez sa mémoire ou montrez-lui une tâche une seule fois avec Watch and Learn." },
        {
          title: "Configurez des routines",
          text: "Donnez à chaque routine un déclencheur, un prompt et une destination, ou partez d’une routine intégrée comme le point quotidien. Les routines de l’espace de travail passent par Slack et seuls les administrateurs peuvent les configurer.",
        },
      ],
      source: { label: "Source : documentation de Lindy", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment Lindy vous laisse le contrôle",
      points: [
        "Toute action ayant un impact extérieur attend votre accord, comme envoyer un e-mail, mettre à jour un ticket, publier dans un autre canal ou publier un document.",
        "Les consultations en lecture seule à partir de sources approuvées ne nécessitent pas de validation.",
        "Les administrateurs peuvent plafonner les crédits par siège, et seuls les administrateurs configurent les routines de l’espace de travail.",
        "Quand la réserve de crédits est épuisée, Lindy suspend les actions qui consomment des crédits jusqu’au cycle suivant ou à une recharge.",
        "Sa mémoire est modifiable.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI et Grok Bot",
      text: [
        "Informations tirées du site, de la page de tarifs et de la documentation de chaque éditeur, vérifiées le 13 novembre 2026. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker) ; voir aussi le [guide Grok Bot](/personal-agent/grok-bot).",
        "Côte à côte : [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). Guides : [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["Éditeur", "Crivello Corp (Lindy)", "OnSearch Pty Ltd (Relevance AI)", "xAI"],
        ["Ce que c’est", "Un assistant hébergé par espace de travail : un assistant de direction et un coéquipier dans Slack", "Une plateforme low-code/no-code pour créer des agents et des Workforces multi-agents", "Des coéquipiers IA hébergés : des Bots qui ont chacun leur propre ordinateur cloud"],
        ["Plusieurs agents", "Non précisé ; la documentation décrit un Lindy par espace de travail", "Oui : des agents reliés sur un canevas visuel", "Oui : les Bots s’envoient des messages et se coordonnent dans des discussions de groupe"],
        ["Où l’utiliser", "Slack, e-mail, iMessage et SMS, téléphone, extension Chrome, web", "Application web", "Applications macOS et iOS, Slack, Microsoft Teams, appels"],
        ["Travail récurrent", "Routines selon un planning ou un événement", "Tâches planifiées et déclencheurs d’applications", "Routines planifiées"],
        ["Validations", "Toute action ayant un impact extérieur attend une validation", "Workflows de validation et escalades par e-mail et Slack", "Les Bots vous consultent quand une validation est nécessaire ; Auto Review"],
        ["Tarifs", "$50 de crédits gratuits pendant 7 jours ; à partir de $29.99/mois par utilisateur actif", "Offre Enterprise via l’équipe commerciale", "Premium $30, Super $100 ou Ultra $200 par mois"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Lindy pour votre boîte de réception. Crewmark pour votre dépôt.",
      text: [
        "Lindy travaille dans votre boîte de réception, votre agenda, vos réunions et Slack. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé, pour que le travail d’ingénierie, de SEO et de marketing dans un dépôt soit fait selon un planning.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Lindy" },
  mid: {
    title: "Envie d’un employé IA pour votre base de code ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Lindy AI",
    items: [
      {
        q: "Qu’est-ce que Lindy AI ?",
        a: "Un assistant IA hébergé qui travaille dans vos outils connectés. Il joue le rôle d’assistant de direction personnel pour chaque utilisateur et de coéquipier partagé dans Slack ; il gère la boîte de réception, l’agenda, les réunions, la recherche, les rapports et les relances, et exécute le travail récurrent sous forme de routines.",
      },
      {
        q: "Combien coûte Lindy ?",
        a: "Vous pouvez commencer avec $50 de crédits valables 7 jours, sans carte bancaire. Ensuite, chaque utilisateur actif de l’espace de travail est facturé, à partir de $29.99 par mois pour 3 000 crédits chacun, mis en commun au sein de l’équipe. Les recharges coûtent $10 les 1 000 crédits, et les tarifs Enterprise sont sur mesure.",
      },
      {
        q: "Lindy est-il un agent unique ou plusieurs ?",
        a: "Un seul. La documentation décrit un Lindy par espace de travail, et les routines ne sont pas un bot distinct. Il est vendu pour de nombreux rôles et apprend grâce aux skills intégrées et personnalisées, à la mémoire et à Watch and Learn, mais l’existence de personas d’agents distincts n’est pas précisée.",
      },
      {
        q: "Existe-t-il une application Lindy ?",
        a: "Vous utilisez Lindy via sa page Home sur le web, Slack, l’e-mail, iMessage et les SMS, les appels téléphoniques et une extension Chrome dans Gmail. La documentation ne décrit pas d’application de bureau ni mobile ; Microsoft Teams est annoncé comme bientôt disponible.",
      },
      {
        q: "Comment s’inscrire à Lindy ?",
        a: "Commencez avec les $50 de crédits gratuits, qui ne nécessitent pas de carte bancaire, sont valables 7 jours et ne sont accordés qu’une fois par coéquipier. Ensuite, chaque utilisateur actif occupe un siège payant : les coéquipiers qui arrivent depuis Slack ont un essai gratuit de 7 jours, et les inscriptions directes sont facturées immédiatement.",
      },
      {
        q: "Lindy agit-il sans demander ?",
        a: "Pas pour les actions ayant un impact extérieur : envoyer un e-mail, mettre à jour un ticket, publier dans un autre canal ou publier un document attend votre accord. Les consultations en lecture seule à partir de sources approuvées ne nécessitent pas de validation.",
      },
    ],
  },
  cta: {
    title: "Confiez votre boîte de réception à un assistant. Donnez aussi un poste à vos agents de code.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié sur lindy.ai, la page de tarifs de Lindy et la documentation de Lindy le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Lindy, Relevance AI ni xAI, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
