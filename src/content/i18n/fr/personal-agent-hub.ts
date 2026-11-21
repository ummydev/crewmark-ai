import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Agents IA personnels 2026 : Muse, Grok Bot, Dots comparés",
    description:
      "Ce qu’est un agent IA personnel et ceux que les gens recherchent, comparés d’après les pages de chaque éditeur : Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, les tâches Gemini, Microsoft Autopilot, OpenClaw et Hermes Agent.",
  },
  breadcrumb: "Agents personnels",
  hero: {
    kicker: "Agents personnels",
    title: "Les agents IA personnels en 2026 : ce qu’ils sont et lequel choisir",
    lead: "Un agent personnel est une IA qui travaille pour vous, pas seulement avec vous : il a son propre ordinateur ou navigateur, se connecte à vos applications, retient vos préférences, continue de travailler après la fermeture de l’app et revient vers vous quand il a besoin d’une décision. Ces derniers mois, Meta, xAI, OpenAI, Anthropic, Google, Microsoft et Manus ont tous lancé le leur. Cette page explique ce qu’ils ont en commun, les compare d’après les pages de chaque éditeur et renvoie vers nos guides consacrés à chacun.",
    cta: "Commencer",
    secondary: "Les comparer",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est un agent personnel",
      text: [
        "Un chatbot répond puis attend. Un agent personnel reçoit un objectif, planifie les étapes et les exécute sur le web et dans vos applications, souvent pendant votre absence. Les nouveaux venus partagent cinq caractéristiques.",
      ],
      points: [
        "Son propre ordinateur : une machine ou un navigateur dans le cloud où il clique, tape et remplit des formulaires comme une personne.",
        "Vos applications : e-mail, agenda, fichiers et messagerie, avec les accès que vous choisissez.",
        "La mémoire : il apprend vos préférences et n’a pas besoin des mêmes instructions deux fois.",
        "Toujours actif : tâches planifiées et récurrentes, et travail qui continue après la fermeture de l’app.",
        "Les approbations : il attend votre accord avant d’envoyer, d’acheter ou de faire tout ce que vous marquez comme sensible.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des agents IA personnels",
      text: ["D’après les pages de chaque éditeur au 10 novembre 2026. La disponibilité évolue vite ; vérifiez avant de vous inscrire."],
      headers: ["Agent", "Éditeur", "Conçu pour", "Qui peut y accéder", "Accès le moins cher"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "Les tâches du quotidien et l’administratif personnel", "États-Unis, 18 ans et plus, compte Meta", "Gratuit avec une limite hebdomadaire ; Power $20/mois"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "Le travail : une équipe de Bots dans vos applications", "X Premium, Super, Ultra ; SuperGrok ; offres Cursor", "Crédit d’essai gratuit"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "Des objectifs au long cours dans ChatGPT", "ChatGPT Pro et Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "Un Claude proactif qui vient vers vous", "Claude Pro, Max, Ultra aux États-Unis, sur liste d’attente", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "Un agent personnel dans WhatsApp, Telegram, Slack ou le navigateur, avec des workflows", "Toute personne ayant un compte Base44", "Crédits de l’offre Base44 ; Starter $16/mois en facturation annuelle"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "Des agents avec leur propre e-mail, téléphone, portefeuille et ordinateur", "Accès anticipé sur invitation", "Gratuit pendant l’accès anticipé"],
        ["[Tâches Gemini (Spark)](/personal-agent/gemini-spark)", "Google", "Démarches, recherches et fichiers depuis Gemini", "Google AI Pro ou Ultra, hors EEE, Royaume-Uni et Suisse", "Google AI Pro"],
        ["Microsoft Autopilot (Scout)", "Microsoft", "Le travail dans Microsoft 365 et Teams", "Organisations Frontier, avec une licence GitHub Copilot", "Via votre organisation"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "Open source", "Un assistant auto-hébergé dans vos messageries", "Tout le monde ; tourne sur votre ordinateur", "Gratuit ; vous payez le modèle"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, open source", "Un agent auto-hébergé qui apprend des skills", "Tout le monde ; tourne sur votre ordinateur", "Gratuit ; vous payez le modèle"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "Quel agent personnel choisir ?",
      points: [
        "Vous voulez de l’aide pour l’administratif personnel sans payer pour l’instant : Meta Muse, gratuit aux États-Unis. Voir les [cas d’usage de Meta Muse](/personal-agent/meta-muse-use-cases).",
        "Vous voulez une équipe d’agents sur des tâches de travail, à heures fixes : Grok Bot, avec des routines déclenchées par un planning ou un événement. Voir les [routines Grok Bot](/personal-agent/grok-bot-routines).",
        "Vous payez déjà ChatGPT Pro : ChatGPT dots. Pour Claude Pro et au-delà : Claude Duet, sur liste d’attente.",
        "Vous vivez dans les applications Google : les tâches Gemini avec Google AI Pro. Dans Microsoft 365 au travail : Autopilot, si votre organisation fait partie de Frontier.",
        "Vous voulez un agent capable de passer des appels et de payer dans la limite d’un budget : Manus Cue, en accès anticipé. Voir [Manus Cue](/personal-agent/manus-cue).",
        "Vous le voulez sur votre propre machine avec votre propre modèle : OpenClaw ou Hermes Agent, tous deux open source.",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "Les collègues IA pour le travail",
      text: [
        "Des agents conçus pour les tâches professionnelles plutôt que pour les démarches personnelles, avec un guide pour chacun. D’après les pages de chaque éditeur au 13 novembre 2026 ; davantage de détails dans [les collègues IA comparés](/blog/ai-coworker).",
      ],
      headers: ["Collègue IA", "Éditeur", "Conçu pour", "Accès le moins cher"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Recherche, documents, tableurs et présentations dans les applications Claude", "Claude Pro, $20/mois"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Des tâches en plusieurs étapes dans Outlook, Teams et les fichiers Office", "Licence Microsoft 365 Copilot plus Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "Des tâches qui aboutissent à une présentation, un tableur ou une analyse", "Limité sur ChatGPT Free dans l’application de bureau ; complet dès Plus, $20/mois"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "Un agent coordinateur qui pilote de nombreux agents de code dans le cloud", "Cursor Premium, $30/mois"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "Un assistant dans l’e-mail, Slack, iMessage et au téléphone", "Essai gratuit ; ensuite $29.99/mois par utilisateur actif"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng, open source", "Un collègue IA de bureau qui demande avant d’agir", "Gratuit ; votre propre clé de modèle ou un modèle local"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit, open source", "Un espace de travail auto-hébergé pour collègues IA", "Gratuit pour les projets personnels"],
        ["[Suparagent](/personal-agent/suparagent)", "Open source", "Des agents nommés avec des routines sur Claude Code, Codex ou Gemini CLI", "Gratuit en auto-hébergement"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "Avant de confier vos comptes",
      points: [
        "Ne connectez que ce dont une tâche a besoin, et préférez l’accès en lecture seule quand il est proposé (Muse permet de choisir un accès en lecture seule à l’e-mail).",
        "Gardez les approbations actives pour l’envoi, l’achat et tout ce qui est public. Muse et Gemini demandent par défaut avant d’envoyer ou d’acheter ; sur Grok Bot, où Auto Review laisse passer la plupart des actions, ajoutez des règles Ask first.",
        "Sachez qui d’autre peut utiliser une connexion : les Grok Bots partagent un même ordinateur, donc un site auquel un Bot se connecte est ouvert aux autres.",
        "Vérifiez les limites d’usage : les agents qui travaillent en arrière-plan consomment des tokens pendant votre absence.",
        "Lisez le journal d’activité de temps en temps ; les éditeurs préviennent que ces agents peuvent se tromper ou faire des actions inattendues.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des agents personnels pour votre vie, des employés IA pour votre travail",
      text: [
        "Les agents personnels sont pensés pour les démarches d’une seule personne. Crewmark est pensé pour un poste : il transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, qui prend le ticket suivant sur un tableau partagé, commente au fil de son travail et vous écrit quand il est bloqué.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Partez d’un [rôle d’employé IA](/ai-employees) : ingénieur logiciel, spécialiste SEO, agent marketing, social media manager ou designer.",
        },
        {
          title: "Faites-le tourner sur l’abonnement que vous avez",
          text: "Il travaille dans votre propre Claude Code ou Codex, donc pas de facture de tokens séparée. Voir les [tarifs](/pricing).",
        },
        {
          title: "Laissez-le continuer",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous fixez. Voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez un agent avec un poste, pas seulement des démarches ?",
    text: "Les employés Crewmark travaillent sur un tableau partagé au rythme d’une pulsation, avec l’abonnement Claude Code ou Codex que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce qu’un agent IA personnel ?",
        a: "Une IA qui accomplit des tâches pour vous au lieu de seulement répondre : elle a son propre ordinateur ou navigateur, utilise vos applications, retient vos préférences, exécute du travail planifié et en arrière-plan, et demande avant les actions sensibles.",
      },
      {
        q: "Quel est le meilleur agent IA personnel en 2026 ?",
        a: "Cela dépend de là où vous êtes déjà. Meta Muse est le plus simple à essayer (gratuit aux États-Unis), Grok Bot a les routines les plus détaillées pour le travail, ChatGPT dots et Claude Duet sont inclus dans les offres Pro, et OpenClaw ou Hermes Agent conviennent à ceux qui veulent s’auto-héberger.",
      },
      {
        q: "Existe-t-il un agent IA personnel gratuit ?",
        a: "Meta Muse est gratuit aux États-Unis avec une limite hebdomadaire, Grok Bot propose un crédit d’essai gratuit, Manus Cue est gratuit pendant l’accès anticipé, et OpenClaw et Hermes Agent sont des logiciels open source gratuits (vous payez le modèle).",
      },
      {
        q: "Grok Bot vs Muse vs Dots : quelle différence ?",
        a: "Muse est l’agent de Meta pour les tâches du quotidien, gratuit pour commencer. Grok Bot est l’agent de xAI pour le travail, avec plusieurs Bots et des routines. ChatGPT dots sont les agents toujours actifs d’OpenAI dans ChatGPT, sur Pro et Business Premium.",
      },
      {
        q: "Un agent personnel est-il la même chose qu’un employé IA ?",
        a: "Pas tout à fait. Un agent personnel travaille pour une personne sur ses démarches. Un employé IA, au sens de Crewmark, a un rôle et un objectif, travaille sur le tableau d’une équipe selon un planning et rend compte aux personnes avec qui il travaille.",
      },
      {
        q: "Les agents IA personnels sont-ils sûrs ?",
        a: "Ils sont conçus avec des approbations, des machines isolées et des journaux d’activité, mais les éditeurs reconnaissent qu’ils peuvent se tromper. Ne connectez que le nécessaire, gardez les approbations actives pour l’envoi et l’achat, et vérifiez ce qu’ils ont fait.",
      },
    ],
  },
  cta: {
    title: "Les démarches pour votre agent personnel. Un poste pour un employé IA.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans les annonces, la documentation, le centre d’aide et les pages de tarifs de chaque éditeur le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Meta, xAI, OpenAI, Anthropic, Manus, Google, Microsoft, OpenClaw ni Nous Research, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
