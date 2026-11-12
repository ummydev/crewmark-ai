import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet : l’agent proactif d’Anthropic, liste d’attente, accès et limites | Crewmark",
    description:
      "Claude Duet est l’application d’agent proactif d’Anthropic, en préversion de recherche depuis le 21 octobre 2026. Ce qu’elle fait, qui peut l’obtenir, comment s’inscrire sur la liste d’attente, son prix, ses limites de sécurité et comment elle se compare.",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Duet : ce que c’est, qui peut l’obtenir et comment ça marche",
    lead: "Claude Duet est une nouvelle application d’Anthropic où Claude travaille comme un agent proactif : il vient vous voir avec ce qui demande votre attention, fait les tâches que vous lui confiez, continue de travailler quand vous vous éloignez et vous demande avant d’agir en votre nom. Elle a ouvert en préversion de recherche avec liste d’attente le 21 octobre 2026, pour les abonnés Pro, Max et Ultra aux États-Unis. Ce guide explique ce qu’elle fait, comment obtenir l’accès, son prix, ses limites de sécurité et comment elle se compare.",
    cta: "Accès anticipé",
    secondary: "Comment obtenir l’accès",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Claude Duet",
      text: [
        "Une conversation Claude classique attend que vous l’ouvriez. Duet prend les devants : il surveille les applications que vous connectez, envoie un court récapitulatif du matin, reste discret tant que rien ne vous concerne et vous écrit quand une tâche est terminée ou demande une décision. Anthropic l’a conçu pour les professionnels et les propriétaires de petites entreprises, sur Claude Opus 5.5.",
      ],
      points: [
        "Récapitulatif du matin : un court résumé quotidien des points les plus importants de vos applications connectées.",
        "Un seul fil : vous lui écrivez par texte ou par la voix, comme à un collègue, et il garde une seule conversation continue.",
        "Votre contexte Claude : il utilise la mémoire, les skills et les applications connectées de votre compte Claude dès le premier message.",
        "Son propre ordinateur dans le cloud : les tâches s’exécutent dans une machine virtuelle dotée de son propre navigateur, votre ordinateur portable et votre téléphone peuvent donc être éteints.",
        "Petites et grandes tâches : planifier des réunions, rédiger des réponses, relancer des factures impayées, préparer la paie pour relecture ou créer des tableaux de bord, des prévisions, des présentations et des prototypes.",
        "Connecteurs : plus de 6 000 connecteurs et plugins du Claude Marketplace, comme Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign et Shopify.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet en bref",
      headers: ["", "Claude Duet"],
      rows: [
        ["Annoncé", "21 octobre 2026, en préversion de recherche"],
        ["Qui peut l’obtenir", "Les abonnés Pro, Max et Ultra aux États-Unis, via une liste d’attente"],
        ["Team et Enterprise", "Pas encore inclus"],
        ["Où", "Applications iOS et Android autonomes, et claude.ai sur ordinateur"],
        ["Prix", "Pas de prix séparé : inclus dans l’abonnement, avec les mêmes limites d’usage que le reste de Claude"],
        ["Modèle", "Claude Opus 5.5"],
        ["Fréquence des vérifications", "Toutes les quelques heures ; vous choisissez ce dont vous voulez être informé et à quelle fréquence"],
        ["API", "Aucune annoncée"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment obtenir Claude Duet et le configurer",
      steps: [
        {
          title: "Vérifiez que votre abonnement est éligible",
          text: "Il vous faut un abonnement Pro, Max ou Ultra aux États-Unis. Les offres Team et Enterprise ne font pas encore partie de la préversion.",
        },
        {
          title: "Inscrivez-vous sur la liste d’attente",
          text: "Inscrivez-vous sur la page de Claude Duet, claude.com/product/claude-duet. Anthropic vous envoie un e-mail quand Duet est prêt pour votre compte.",
        },
        {
          title: "Ouvrez l’application",
          text: "Installez l’application Claude Duet autonome sur iOS ou Android, ou utilisez-la sur claude.ai depuis un ordinateur. Elle est distincte de l’application Claude principale, mais partage votre compte.",
        },
        {
          title: "Connectez les applications à surveiller",
          text: "Les applications déjà connectées à Claude sont reprises, et en désactiver une à un endroit la désactive aux deux. Commencez par les quelques-unes qui comptent, comme votre boîte de réception, votre agenda et la facturation.",
        },
        {
          title: "Dites-lui ce dont vous voulez être informé",
          text: "Définissez ce qui est urgent et la fréquence des mises à jour souhaitée. Chaque vérification en arrière-plan consomme les limites de votre abonnement : des règles moins nombreuses et plus précises durent plus longtemps.",
        },
        {
          title: "Confiez-lui une tâche et approuvez ses actions",
          text: "Écrivez-lui comme à un collègue. Il lit et rédige seul, puis vous montre l’action, les destinataires et le contenu, et attend votre approbation avant d’envoyer, de payer, de signer ou de supprimer quoi que ce soit.",
        },
      ],
      source: { label: "Source : l’annonce de Claude Duet par Anthropic", href: announcement },
    },
    {
      kind: "text",
      title: "Sécurité, confidentialité et limites",
      points: [
        "Approbations : avant d’envoyer un message sensible, de payer ou de supprimer, il vous montre exactement ce qu’il va faire et attend. Une vérification distincte, extérieure au modèle, juge aussi si chaque action correspond à votre intention.",
        "Jamais autorisé, même avec approbation : négocier des valeurs mobilières, transférer de l’argent entre comptes ou utiliser le compte de quelqu’un d’autre.",
        "Mots de passe : il ne voit jamais vos mots de passe, cookies ni jetons de connexion. Les achats utilisent une carte à usage unique limitée à ce commerçant et à ce montant.",
        "Données sensibles : un classificateur bloque le partage de numéros de carte, de numéros de compte bancaire et de pièces d’identité officielles ; les informations de santé et de finances ne sont partagées que lorsque vous le demandez.",
        "Mémoire : il garde l’historique de vos conversations et sa mémoire jusqu’à ce que vous les supprimiez ou les réinitialisiez. Déconnecter une application met fin aux nouveaux accès, mais ce qu’il a déjà appris reste jusqu’à la réinitialisation de sa mémoire.",
        "Préversion précoce : Anthropic indique qu’il peut mal interpréter un fil, mal juger ce qui est urgent ou manquer ce qui arrive entre deux vérifications, et qu’il est moins bon pour les démarches personnelles que pour les tâches professionnelles.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "Les trois sont des agents qui continuent de travailler sans vous dans la conversation. Duet et [ChatGPT dots](/blog/chatgpt-dots) sont des assistants pour vos applications métier qui tournent dans le cloud de leur éditeur ; Crewmark réveille avec une pulsation (heartbeat) l’agent de codage que vous utilisez déjà, comme Claude Code ou Codex, pour traiter un tableau d’issues.",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Tourne sur", "L’ordinateur cloud d’Anthropic", "L’ordinateur cloud d’OpenAI", "Votre ordinateur, dans Claude Code, Codex, DeepSeek Harness ou OpenCode"],
        ["Démarre le travail", "Vos messages et des vérifications toutes les quelques heures", "Vos messages, planifications et ses propres recherches", "Une pulsation toutes les 15 à 60 minutes pendant les horaires de travail"],
        ["Excelle pour", "Boîte de réception, agenda, factures, récapitulatifs et tableaux de bord", "Recherche et tâches dans vos applications connectées", "Code, SEO et autre travail dans un dépôt, un employé par rôle"],
        ["File de travail", "Un seul fil continu", "Fils de conversation et Scheduled", "Issues sur un tableau kanban"],
        ["Coût", "Inclus dans Pro, Max et Ultra (États-Unis)", "Offres Pro et Business Premium", "Accès anticipé ; fonctionne avec l’agent et l’abonnement que vous avez déjà"],
        ["Statut", "Préversion de recherche, liste d’attente", "Déploiement progressif", "Accès anticipé"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Envie de la même proactivité pour Claude Code ?",
      text: [
        "Duet surveille votre boîte de réception et vos applications métier ; Anthropic ne le décrit pas travaillant dans votre dépôt de code. Crewmark applique la même idée aux agents de codage : il donne à une session Claude Code, Codex, DeepSeek Harness ou OpenCode un rôle, un objectif et des horaires de travail, et la réveille avec une pulsation dans la même conversation.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, par exemple ingénieur logiciel ou spécialiste SEO, écrivez son objectif sous forme de chiffre et lancez la commande d’installation dans Claude Code.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes et reprend là où il s’était arrêté ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé le prend, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Obtenir Claude Duet et le configurer" },
  mid: {
    title: "L’idée d’un agent qui vous écrit en premier vous plaît ?",
    text: "Crewmark le fait pour Claude Code et Codex : une pulsation, des horaires de travail et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ Claude Duet",
    items: [
      {
        q: "Qu’est-ce que Claude Duet ?",
        a: "Une application d’Anthropic, en préversion de recherche depuis le 21 octobre 2026, où Claude travaille comme un agent proactif. Elle surveille vos applications connectées, envoie un récapitulatif du matin, effectue des tâches dans son propre ordinateur cloud et demande votre approbation avant d’agir en votre nom.",
      },
      {
        q: "Quand Claude Duet est-il sorti ?",
        a: "Anthropic a ouvert la préversion de recherche le 21 octobre 2026, avec une liste d’attente. L’accès est déployé progressivement, et Anthropic vous envoie un e-mail quand il est prêt pour votre compte.",
      },
      {
        q: "Comment obtenir l’accès à Claude Duet ?",
        a: "Inscrivez-vous sur la liste d’attente sur claude.com/product/claude-duet avec un abonnement Pro, Max ou Ultra aux États-Unis. Utilisez ensuite l’application Claude Duet sur iOS ou Android, ou claude.ai sur ordinateur.",
      },
      {
        q: "Claude Duet est-il disponible pour les offres Team ou Enterprise ?",
        a: "Pas encore. La page produit d’Anthropic indique que les offres Team et Enterprise ne sont pas incluses dans la préversion.",
      },
      {
        q: "Combien coûte Claude Duet ?",
        a: "Il n’y a pas de prix séparé. Il est inclus dans Pro, Max et Ultra et utilise les mêmes limites d’usage que le reste de Claude ; les vérifications en arrière-plan et les tâches plus importantes en consomment davantage.",
      },
      {
        q: "Claude Duet est-il sûr ?",
        a: "Il demande avant d’envoyer, de payer, de signer ou de supprimer, ne voit jamais vos mots de passe ni vos jetons de connexion, utilise des cartes à usage unique pour les achats, et ne peut pas négocier de valeurs mobilières ni transférer de l’argent entre comptes, même avec approbation. C’est une préversion précoce : il peut donc encore mal juger ce qui est urgent.",
      },
      {
        q: "Claude Duet peut-il écrire du code dans mon dépôt ?",
        a: "Il peut créer des prototypes et des applications web dans son propre ordinateur cloud, mais Anthropic ne le présente pas comme un agent de codage pour votre dépôt. Pour cela, l’outil est Claude Code, et Crewmark rend les sessions Claude Code proactives avec une pulsation et un tableau d’issues.",
      },
    ],
  },
  cta: {
    title: "Rendez aussi vos sessions Claude Code proactives.",
    text: "Crewmark transforme des sessions Claude Code, Codex et DeepSeek Harness en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans l’annonce de Claude Duet d’Anthropic, sa page produit et son article sur la sécurité le 5 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI et non approuvé par elles. Claude, Claude Duet et Claude Code sont des marques d’Anthropic, et ChatGPT d’OpenAI.",
};
