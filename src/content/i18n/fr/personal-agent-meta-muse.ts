import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/meta-muse; the English master is src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `Chaque jour de semaine à 7 h, envoie-moi un court résumé : mon agenda du jour,
ce qui est urgent dans ma boîte de réception, et la météo.

Trouve trois vols pour Chicago le premier week-end de décembre à moins de $400,
compare-les, et demande-moi avant de réserver quoi que ce soit.

Je veux vendre ma voiture. Cherche ce qu’elle vaut, rédige l’annonce
et dis-moi quelles offres méritent une réponse.`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse : ce que c’est, comment l’utiliser et ses tarifs",
    description:
      "L’agent IA personnel Muse de Meta expliqué : ce qu’il fait, comment l’obtenir et l’utiliser, les offres Free, Power ($20) et Maximum ($100), les tâches planifiées, les applications connectées et les paiements, les réglages de confidentialité et la comparaison avec les autres.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Meta Muse",
    title: "Meta Muse : ce que fait l’agent personnel de Meta, comment l’utiliser et combien il coûte",
    lead: "Muse est l’agent IA personnel de Meta, lancé aux États-Unis le 8 septembre 2026. Selon Meta, il ne se contente pas de répondre aux questions : il fait réellement le travail. Il envoie des e-mails, réserve des voyages, remplit des formulaires et négocie pour vous, continue de travailler après la fermeture de l’app et demande avant toute action importante, comme envoyer un e-mail ou acheter quelque chose. Ce guide explique comment l’obtenir et l’utiliser, ses offres et limites de tokens, les tâches planifiées, les réglages de confidentialité et sa comparaison avec Grok Bot, ChatGPT dots et Claude.",
    cta: "Commencer",
    secondary: "Comment l’utiliser",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Meta Muse",
      text: [
        "Muse fonctionne sur Muse Spark, le modèle de Meta, dans une machine cloud dédiée que Meta appelle la Muse Secure VM. Il transforme des objectifs en plans et y travaille en arrière-plan, et revient vers vous quand quelque chose change ou qu’il a besoin de votre approbation.",
      ],
      points: [
        "Il agit : il envoie des e-mails, réserve des voyages, ouvre un navigateur, remplit des formulaires et négocie. Parmi les exemples de Meta : vendre une voiture plus cher, faire baisser une facture et ajuster un programme d’entraînement.",
        "Il se souvient : de ce qui compte pour vous, à partir de détails mentionnés une seule fois, et fait des suggestions sans qu’on le lui demande, comme transformer un reel de recette enregistré sur Instagram en liste de courses.",
        "Il achète en sécurité : le paiement passe par Link by Stripe, dont le portefeuille pour agents crée une carte à usage unique, si bien que Muse ne voit jamais votre vrai numéro de carte.",
        "Il est là où vous êtes : dans l’app Muse, sur le web à muse.ai et dans WhatsApp ; les lunettes IA de Meta suivront.",
        "Ce n’est pas Meta AI, l’assistant de Facebook, Instagram et WhatsApp, ni Muse Code, le produit de Meta pour les développeurs.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Tarifs de Meta Muse : Free, Power et Maximum",
      text: [
        "D’après le centre d’aide de Meta au 10 novembre 2026. Muse et ses abonnements sont en test limité et ne sont pas encore disponibles partout.",
      ],
      headers: ["Offre", "Prix", "Usage hebdomadaire"],
      rows: [
        ["Free", "$0", "Une limite d’usage hebdomadaire gratuite (Meta n’en publie pas la taille) ; attendez sa réinitialisation ou passez à une offre supérieure"],
        ["Power", "$20 par mois", "500M tokens Muse par semaine"],
        ["Maximum", "$100 par mois", "3B tokens Muse par semaine"],
        ["Tokens supplémentaires", "Vendus séparément", "Achetez-en en plus de votre quota hebdomadaire"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Obtenir et utiliser Meta Muse",
      text: [
        "Vous devez avoir 18 ans ou l’âge de la majorité là où vous vivez, vous trouver dans une zone où Muse est disponible (il a été lancé aux États-Unis) et vous connecter avec un compte Meta. Vous pouvez en créer un avec Facebook, Instagram, une adresse e-mail ou un numéro de téléphone.",
      ],
      steps: [
        {
          title: "Téléchargez-le ou ouvrez muse.ai",
          text: "Installez l’app Muse sur iOS ou Android, ou connectez-vous sur muse.ai. Meta ne propose pas d’app Windows ou Mac : sur ordinateur, utilisez muse.ai dans votre navigateur.",
        },
        {
          title: "Dites-lui ce dont vous avez besoin",
          text: "Muse s’ouvre sur l’onglet Chat. Décrivez le résultat voulu, pas les étapes ; il peut d’abord poser quelques questions. Vous pouvez envoyer des précisions sans attendre et sans répéter le contexte.",
          code: prompts,
        },
        {
          title: "Connectez les applications dont il a besoin",
          text: "Choisissez les applications que Muse peut utiliser et le niveau d’accès de chacune ; pour l’e-mail, lecture seule ou lecture et envoi. Bientôt : Shop Pay au paiement et 1Password pour qu’il utilise vos identifiants existants.",
        },
        {
          title: "Approuvez, vérifiez et retrouvez vos fichiers",
          text: "Muse demande avant les actions sensibles, comme envoyer un e-mail ou faire un achat, et garde une trace de ce qu’il a fait et de ce qu’il prévoit de faire. Les fichiers qu’il crée sont enregistrés dans l’onglet Library.",
        },
      ],
      source: { label: "Source : l’annonce de Muse par Meta", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Rappels et tâches planifiées dans Muse",
      text: [
        "Muse n’a pas d’écran de planification à part : vous créez rappels et tâches récurrentes en les demandant, et le centre d’aide de Meta explique leur fonctionnement.",
      ],
      points: [
        "Ponctuel : dites à Muse de quoi vous rappeler et quand ; il confirme l’heure exacte.",
        "Récurrent : décrivez la tâche et sa fréquence, par exemple « Chaque lundi à 9 h, rappelle-moi d’envoyer ma feuille de temps ». Elle tourne jusqu’à ce que vous l’annuliez, et Muse vous écrit à chaque fois.",
        "Les retrouver : demandez « Quels rappels ai-je ? », ou touchez l’icône Assistant en haut et ouvrez Upcoming.",
        "Modifier ou annuler : dites lequel et ce qu’il faut changer, par exemple déplacer un rappel du lundi au mardi.",
        "Les heures suivent votre fuseau horaire ; si vous choisissez une heure déjà passée, Muse en propose une autre.",
        "D’autres idées de routines quotidiennes dans les [cas d’usage de Meta Muse](/personal-agent/meta-muse-use-cases).",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "Confidentialité : comment refuser et ce que Meta peut voir",
      points: [
        "Le Muse de chaque personne tourne dans sa propre Muse Secure VM ; les agents des autres ne peuvent pas y accéder.",
        "Un agent distinct, Sentinel, doit approuver tout ce que Muse envoie sur internet et vous consulte si besoin.",
        "Muse ne voit ni vos mots de passe ni vos moyens de paiement ; les identifiants partagés vont dans un stockage sécurisé.",
        "Vos conversations et les données de la VM ne sont pas partagées avec les systèmes publicitaires de Meta.",
        "Vous pouvez refuser que vos interactions servent à entraîner l’IA de Meta, modifier ou déconnecter n’importe quelle application, et demander à Muse d’oublier quelque chose.",
        "Meta prévoit une Muse Confidential VM plus tard cette année, chiffrée avec une clé que vous seul détenez.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse indisponible ou qui ne fonctionne pas ?",
      points: [
        "Hors des États-Unis : Muse a été lancé aux États-Unis et est en test limité ailleurs ; Meta indique qu’il n’est pas encore disponible partout.",
        "Moins de 18 ans : vous devez avoir 18 ans ou l’âge de la majorité dans votre pays.",
        "Limite gratuite atteinte : attendez la réinitialisation de la limite hebdomadaire, passez à Power ou Maximum, ou achetez des tokens supplémentaires.",
        "Pas de mode vocal : la voix n’est disponible que dans certains pays et nécessite l’accès au micro, modifiable dans Settings > Voice and Avatar.",
        "Il a fait quelque chose d’inattendu : Meta prévient que Muse peut être inexact ou faire des actions inattendues ; gardez donc les approbations actives pour l’envoi et l’achat, et consultez l’historique des actions.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs Grok Bot, ChatGPT dots et Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Éditeur", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["Conçu pour", "Les tâches du quotidien et l’administratif personnel", "Le travail : des équipes de Bots dans vos applications", "Des objectifs au long cours dans ChatGPT", "Un Claude proactif qui fait le point avec vous"],
        ["Accès le moins cher", "Gratuit avec une limite hebdomadaire", "Crédit d’essai gratuit ; X Premium et au-delà", "ChatGPT Pro", "Claude Pro, sur liste d’attente"],
        ["Planification", "Rappels et tâches récurrentes", "Routines avec plannings, Slack, e-mail et webhooks", "Rappels planifiés et vérifications récurrentes", "Vient vers vous avec ce qui demande votre attention"],
        ["Guide", "Cette page", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Muse s’occupe de vos démarches. Qui s’occupe de votre backlog ?",
      text: [
        "Muse est conçu pour l’administratif personnel. Si le travail que vous voulez déléguer se trouve dans un dépôt de code ou un plan marketing, Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, qui prend le ticket suivant sur un tableau et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Partez d’un [rôle d’employé IA](/ai-employees), comme spécialiste SEO ou social media manager.",
        },
        {
          title: "Donnez-lui des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous fixez. Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Comparez les agents personnels",
          text: "Voir le [comparatif des agents IA personnels](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Bien démarrer avec Meta Muse" },
  mid: {
    title: "Vous voulez un agent qui traite votre backlog de travail ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation et prennent le ticket suivant sur un tableau, avec l’abonnement Claude Code ou Codex que vous avez.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce que Meta Muse ?",
        a: "L’agent IA personnel de Meta, lancé aux États-Unis le 8 septembre 2026 et propulsé par le modèle Muse Spark. Il envoie des e-mails, réserve des voyages, remplit des formulaires et fait des achats pour vous depuis sa propre machine cloud, et demande avant les actions sensibles.",
      },
      {
        q: "Meta Muse est-il gratuit ?",
        a: "Oui, avec une limite d’usage hebdomadaire. Power coûte $20 par mois pour 500M tokens Muse par semaine et Maximum $100 par mois pour 3B, et vous pouvez acheter des tokens supplémentaires.",
      },
      {
        q: "Comment obtenir Meta Muse ?",
        a: "Téléchargez l’app Muse sur iOS ou Android ou allez sur muse.ai, et connectez-vous avec un compte Meta. Vous devez avoir 18 ans ou l’âge de la majorité et vous trouver dans une zone où Muse est disponible ; il a été lancé aux États-Unis.",
      },
      {
        q: "Peut-on utiliser Meta Muse sur Windows ou Mac ?",
        a: "Meta propose les apps iOS et Android et muse.ai. Sur un PC Windows ou un Mac, utilisez muse.ai dans votre navigateur.",
      },
      {
        q: "Muse peut-il faire des tâches selon un planning ?",
        a: "Oui. Demandez-lui une tâche récurrente, comme « Chaque lundi à 9 h, rappelle-moi d’envoyer ma feuille de temps » ; elle tourne jusqu’à ce que vous l’annuliez, et vous la retrouvez sous l’icône Assistant, dans Upcoming.",
      },
      {
        q: "Meta utilise-t-il mes conversations Muse pour la publicité ?",
        a: "Meta indique que les conversations et les données de la VM ne sont pas partagées avec ses systèmes publicitaires. Vous pouvez aussi refuser que vos interactions servent à entraîner les modèles d’IA de Meta.",
      },
    ],
  },
  cta: {
    title: "Les agents personnels font vos démarches. Les employés IA traitent votre backlog.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans l’annonce de Muse par Meta et les articles du centre d’aide de Meta le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Meta, xAI, OpenAI ni Anthropic, et non approuvé par eux. Muse, Meta et WhatsApp sont des marques de Meta.",
};
