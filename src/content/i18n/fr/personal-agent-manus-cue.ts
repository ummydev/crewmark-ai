import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/manus-cue; the English master is src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# Un agent pour les démarches
Chaque jour de semaine à 8 h, regarde dans ma boîte de réception tout ce qui concerne le déménagement et
envoie-moi un court résumé. Demande-moi avant de répondre à qui que ce soit.

# Une petite équipe avec un objectif (l’exemple de Manus, sous forme de prompt)
Nous organisons un séminaire d’équipe en mars pour 20 personnes.
L’un de vous cherche des lieux près de Lisbonne, un autre en tire une sélection
de trois, et un troisième rédige une présentation avec une recommandation pour que je décide.`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue : code d’invitation, utilisation et tarifs",
    description:
      "Cue de Manus expliqué : des agents personnels avec leur propre e-mail, numéro de téléphone, portefeuille et ordinateur. Comment y accéder avec un code d’invitation, comment le télécharger, comment utiliser les agents et les conversations de groupe, les automatisations planifiées et ce que ça coûte.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Manus Cue",
    title: "Manus Cue : des agents personnels avec leur propre e-mail, téléphone et portefeuille",
    lead: "Cue est une app autonome de Manus pour vos agents personnels, lancée en accès anticipé avec Manus 2.0 le 28 septembre 2026. Ce qui la distingue : chaque agent reçoit sa propre adresse e-mail, son numéro de téléphone, son portefeuille et son ordinateur, ce qui lui permet d’écrire à des personnes, de prendre vos appels et de payer dans la limite d’un budget que vous fixez. Ce guide explique comment entrer avec un code d’invitation, comment la télécharger, comment utiliser un agent ou une équipe, les automatisations planifiées, ce que ça coûte et les questions encore ouvertes.",
    cta: "Commencer",
    secondary: "Obtenir l’accès",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Manus Cue",
      text: [
        "Manus présente Cue comme une nouvelle app autonome pour vos agents personnels, sur votre téléphone et votre ordinateur. Elle repose sur la même infrastructure que Manus, mais c’est une app distincte, pas un mode de Manus.",
      ],
      points: [
        "Sa propre identité : chaque agent a une adresse e-mail, un numéro de téléphone, un portefeuille et un ordinateur.",
        "Appels : un agent peut prendre vos appels et vous laisser un résumé dans Cue.",
        "Paiements : les agents peuvent payer dans la limite d’un budget que vous fixez.",
        "Équipes : plusieurs agents peuvent partager une conversation de groupe et un objectif commun, et se passer le travail pendant que vous donnez la direction et tranchez.",
        "Dans la vraie vie : au restaurant, scannez un QR code pour que votre agent commande pour vous ou garde votre place dans la file.",
        "Un seul assistant, c’est bien aussi : gardez un unique agent pour les démarches, les rappels et les recherches.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Obtenir Manus Cue",
      steps: [
        {
          title: "Obtenez un code d’invitation",
          text: "Cue est en accès anticipé et nécessite un code d’invitation. Au lancement, Manus a proposé le code MEETCUE à un nombre limité de premiers utilisateurs, premiers arrivés, premiers servis ; il n’a pas dit s’il fonctionne encore. Chaque personne admise reçoit des codes supplémentaires à partager : demandez à quelqu’un qui utilise déjà Cue.",
        },
        {
          title: "Téléchargez l’app depuis Manus",
          text: "Dans Manus, ouvrez l’onglet Agents (Cue!) dans la barre latérale et scannez le QR code pour télécharger l’app. Manus mentionne le web, le desktop et le mobile ; au lancement, la version iOS attendait la validation de l’App Store, vérifiez donc l’App Store avant de compter dessus.",
        },
        {
          title: "Connectez-vous avec le code",
          text: "Saisissez le code d’invitation à la connexion. Manus peut aussi vous en envoyer une copie par e-mail.",
        },
        {
          title: "Créez votre premier agent",
          text: "Commencez avec un agent pour les démarches ou montez une petite équipe avec un objectif commun. Dites ce que vous voulez faire faire, le budget qu’il peut dépenser et ce sur quoi il doit d’abord vous consulter.",
          code: prompts,
        },
      ],
      source: { label: "Source : l’article de lancement de Manus 2.0 et de Cue", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "Automatisations planifiées et skills",
      points: [
        "Scheduled Automations : décrivez ce que vous voulez faire faire et quand, et Cue s’en charge.",
        "Les déclencheurs d’événements, comme un nouvel e-mail ou un message Slack, sont décrits pour Manus Automations ; Manus n’indique pas que Cue les propose déjà.",
        "Les skills que vous avez créées ou importées dans Manus ne sont pas transférées automatiquement. Configurez-les à nouveau dans Cue.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Tarifs de Manus Cue",
      headers: ["", "Ce que dit Manus"],
      rows: [
        ["Accès anticipé", "Gratuit, avec un code d’invitation"],
        ["Après l’accès anticipé", "Non annoncé"],
        ["Abonnement ou crédits Manus", "L’article de lancement n’indique pas qu’une offre Manus inclut Cue ni que Cue consomme des crédits Manus"],
        ["Paiements des agents", "Les agents paient depuis leur portefeuille dans la limite du budget que vous fixez"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "Questions ouvertes avant de lui confier votre numéro",
      points: [
        "Qui un agent peut contacter, et à quoi il peut vous engager, n’est pas décrit dans l’article de lancement. Fixez un budget et dites à chaque agent sur quoi il doit d’abord vous consulter.",
        "La façon dont votre interlocuteur sait qu’il parle à un agent n’est pas décrite non plus.",
        "Les tarifs après l’accès anticipé et les pays où Cue fonctionne n’ont pas été annoncés.",
        "Des agents qui envoient des messages et paient depuis un portefeuille peuvent faire des erreurs coûteuses ; commencez avec un petit budget.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs Meta Muse et Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["Identité de l’agent", "Son propre e-mail, numéro de téléphone, portefeuille et ordinateur", "Agit via vos comptes connectés", "Agit en votre nom ; pas de compte à lui"],
        ["Équipes d’agents", "Oui, conversations de groupe avec un objectif commun", "Non décrit", "Oui, les Bots se passent le travail"],
        ["Planification", "Scheduled Automations", "Rappels et tâches récurrentes", "Routines selon un planning ou un déclencheur"],
        ["Accès", "Accès anticipé, code d’invitation", "États-Unis, gratuit avec une limite hebdomadaire", "X Premium et au-delà, SuperGrok, offres Cursor"],
        ["Guide", "Cette page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Une équipe d’agents pour votre travail, sur l’agent que vous utilisez déjà",
      text: [
        "Cue donne une identité à chaque agent personnel. Crewmark donne un poste à chaque agent de travail : il transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, qui avance sur un tableau partagé avec le reste de votre équipe.",
      ],
      steps: [
        {
          title: "Choisissez des rôles",
          text: "Partez des [rôles d’employés IA](/ai-employees) : ingénieur, spécialiste SEO, agent marketing, social media manager, designer.",
        },
        {
          title: "Mettez le travail sur un tableau",
          text: "Chaque employé prend le ticket suivant qui lui est assigné, commente au fil de son travail et vous écrit quand il est bloqué.",
        },
        {
          title: "Comparez les agents personnels",
          text: "Voir le [comparatif des agents IA personnels](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Bien démarrer avec Manus Cue" },
  mid: {
    title: "Vous voulez une équipe d’agents sur votre vrai travail ?",
    text: "Les employés Crewmark avancent sur un tableau partagé au rythme d’une pulsation, avec l’abonnement Claude Code ou Codex que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce que Manus Cue ?",
        a: "Une app autonome de Manus pour les agents personnels, lancée en accès anticipé le 28 septembre 2026. Chaque agent a sa propre adresse e-mail, son numéro de téléphone, son portefeuille et son ordinateur, et plusieurs agents peuvent travailler ensemble dans une conversation de groupe.",
      },
      {
        q: "Comment obtenir un code d’invitation Manus Cue ?",
        a: "Au lancement, Manus a proposé MEETCUE à un nombre limité de premiers utilisateurs, premiers arrivés, premiers servis. Chaque personne admise reçoit des codes d’invitation supplémentaires à partager : le moyen le plus sûr est de demander à quelqu’un qui utilise déjà Cue.",
      },
      {
        q: "Combien coûte Manus Cue ?",
        a: "Il est gratuit pendant l’accès anticipé, avec un code d’invitation. Manus n’a pas annoncé de tarifs pour la suite, ni si un abonnement Manus l’inclura.",
      },
      {
        q: "Comment télécharger Manus Cue ?",
        a: "Ouvrez l’onglet Agents (Cue!) dans la barre latérale de Manus et scannez le QR code. Manus mentionne le web, le desktop et le mobile ; la version iOS attendait la validation de l’App Store au lancement.",
      },
      {
        q: "Un agent Cue peut-il passer des appels et faire des paiements ?",
        a: "Chaque agent a son propre numéro de téléphone et son portefeuille : il peut prendre vos appels et laisser un résumé, envoyer des messages et payer dans la limite d’un budget que vous fixez.",
      },
      {
        q: "Cue fait-il partie de Manus ?",
        a: "Il repose sur la même infrastructure, mais c’est une app distincte. Les skills de Manus ne sont pas transférées automatiquement, et Manus n’indique pas que Cue consomme des crédits Manus.",
      },
    ],
  },
  cta: {
    title: "Les agents personnels font vos démarches. Les employés IA traitent votre backlog.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans l’article de lancement de Manus 2.0 et le centre d’aide de Manus le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Manus, Meta ni xAI, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
