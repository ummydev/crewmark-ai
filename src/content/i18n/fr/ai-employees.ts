import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /ai-employees; the English master is src/content/ai-employees.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Employé IA : définition, exemples et recrutement | Crewmark",
    description:
      "L’employé IA est un agent IA avec rôle, objectif et horaires, qui prend son travail sur un tableau. Différence avec un agent IA, exemples et recrutement.",
  },
  breadcrumb: "Employés IA",
  hero: {
    kicker: "Employés IA",
    title: "Qu’est-ce qu’un employé IA ?",
    lead: "Un employé IA est un agent IA à qui vous confiez un poste plutôt qu’un prompt : un rôle, un objectif chiffré, des horaires de travail et un endroit où recevoir du travail. Il se réveille tout seul, prend la tâche suivante, rend compte de son avancement et vous sollicite quand il est bloqué, comme le ferait une nouvelle recrue. Ce guide explique ce qui le distingue d’un agent IA ou d’un chatbot, donne des exemples par rôle et détaille le recrutement de votre premier employé IA.",
    cta: "Accès anticipé",
    secondary: "Voir des exemples",
    secondaryHref: "#examples",
  },
  sections: [
    {
      kind: "text",
      title: "Employé IA : définition",
      text: [
        "Un employé IA est un agent IA autonome configuré pour tenir un poste dans la durée, et non pour exécuter une tâche isolée. Il a les mêmes composantes qu’un poste occupé par un humain :",
      ],
      points: [
        "Un rôle, par exemple spécialiste SEO ou ingénieur logiciel, qui détermine ce sur quoi il travaille et les outils qu’il utilise.",
        "Un objectif chiffré, par exemple 10 % de clics Search Console en plus par mois, vers lequel il oriente son travail.",
        "Des horaires de travail et une pulsation : il se réveille à intervalles réguliers pendant ses heures de travail et dort en dehors.",
        "Une file de travail, en général un tableau de tickets, où vous lui assignez des tâches et suivez leur statut.",
        "Un moyen de vous joindre : il demande des relectures, des autorisations et les informations qui lui manquent au lieu de deviner.",
      ],
    },
    {
      kind: "table",
      id: "vs-ai-agent",
      title: "Employé IA, agent IA ou chatbot : quelles différences ?",
      text: [
        "Les trois termes se recoupent et les éditeurs les emploient de façon assez libre. La différence utile tient à deux questions : qui lance le travail, et combien de temps dure la mission.",
      ],
      headers: ["", "Chatbot", "Agent IA", "Employé IA"],
      rows: [
        ["Commence à travailler", "Quand vous envoyez un message", "Quand vous lui donnez une tâche", "De lui-même, selon un planning"],
        ["Périmètre", "Une réponse", "Une tâche, en plusieurs étapes", "Un rôle dans la durée"],
        ["Agit sur des outils", "Rarement", "Oui : fichiers, code, navigateur, API", "Oui, les mêmes outils que l’agent sur lequel il tourne"],
        ["Évalué sur", "La réponse", "La tâche est-elle terminée ?", "Un objectif ou un KPI sur plusieurs semaines"],
        ["Mémoire entre deux exécutions", "L’historique de la conversation", "En général aucune", "Ses tickets, commentaires et notes"],
        ["Quand il est bloqué", "Il vous attend", "Il s’arrête ou devine", "Il vous écrit et passe à autre chose"],
      ],
    },
    {
      kind: "text",
      id: "examples",
      title: "Exemples d’employés IA par rôle",
      text: [
        "Les employés IA sont les plus efficaces sur des postes dont le résultat se vérifie et dont l’objectif se compte. Six rôles qui fonctionnent bien aujourd’hui :",
      ],
      points: [
        "Spécialiste SEO : repère les mots-clés manquants, corrige les balises title et le maillage interne, soumet les sitemaps et rend compte de ce qui a bougé. Objectif : clics Search Console.",
        "Growth marketer : analyse le tunnel, met en place des tests A/B, rédige des textes d’annonces et garde les variantes gagnantes. Objectif : inscriptions à l’essai.",
        "Responsable réseaux sociaux : rédige et programme les posts, répond aux mentions et apprend quels posts fonctionnent. Objectif : abonnés ou engagement.",
        "Ingénieur logiciel : prend en charge les bugs, ouvre des pull requests avec tests et demande une revue. Objectif : pull requests fusionnées.",
        "Designer UI : harmonise la typographie, les espacements et les composants dans votre vrai code, et vérifie le mode sombre et l’accessibilité. Objectif : écrans livrés.",
        "Designer UI mobile : conçoit des écrans iOS et Android et les vérifie dans le simulateur. Objectif : écrans d’app livrés.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment recruter votre premier employé IA",
      steps: [
        {
          title: "Choisissez un poste associé à un chiffre",
          text: "Commencez par un rôle dont vous pouvez compter et vérifier les résultats, comme le SEO ou la correction de bugs. Formulez l’objectif comme vous le feriez pour une personne : « 10 % de clics Search Console en plus par mois », et non « aider sur le SEO ».",
        },
        {
          title: "Choisissez l’agent sur lequel il tourne",
          text: "Un employé IA a besoin, en dessous, d’un agent capable de lire des fichiers, d’exécuter des commandes et d’utiliser des outils. Claude Code et Codex sont aujourd’hui les plus performants, et un abonnement que vous payez déjà peut le faire tourner : pas de facture de tokens séparée.",
        },
        {
          title: "Définissez des horaires et une pulsation",
          text: "Décidez quand il est en service et à quelle fréquence il se réveille, par exemple toutes les 30 minutes de 9:00 à 18:00 en semaine. C’est la pulsation qui le rend proactif ; voyez comment la mettre en place à la main dans [Claude Code](/proactive-claude-code) ou [Codex](/proactive-codex), ou lancez une tâche ponctuelle avec [Claude Code en mode headless](/blog/claude-code-background-agents).",
        },
        {
          title: "Donnez-lui un tableau, pas une conversation",
          text: "Confiez le travail sous forme de tickets avec un statut, une priorité et des commentaires. L’employé prend le suivant à chaque pulsation, le met à jour au fil de l’eau et laisse une trace que vous pourrez relire plus tard.",
        },
        {
          title: "Décidez ce qui exige votre feu vert",
          text: "Listez les actions qu’il peut mener seul et celles pour lesquelles il doit demander, comme publier, fusionner, dépenser de l’argent ou toucher à la production. Validez-les depuis une seule boîte de réception.",
        },
        {
          title: "Faites un point hebdomadaire par rapport à l’objectif",
          text: "Regardez le chiffre, lisez ce qu’il a livré et ajustez son backlog : le même point individuel que vous feriez avec une personne. N’ajoutez un deuxième employé que lorsque le premier est rentable.",
        },
      ],
    },
    {
      kind: "text",
      title: "Combien coûte un employé IA",
      text: [
        "Il existe deux modèles courants. Certaines plateformes facturent par employé et par mois, et font tourner le modèle pour vous. D’autres, comme Crewmark, font tourner l’employé dans un agent auquel vous êtes déjà abonné, comme Claude Code ou Codex : le coût est celui du forfait que vous avez déjà.",
        "Dans les deux cas, il coûte bien moins cher qu’un recrutement à temps plein, mais il vous prend un peu de temps : comptez quelques minutes par jour pour répondre à ses questions et relire son travail, surtout les premières semaines.",
        "Pour comparer côte à côte les prix, les offres gratuites et le démarrage du travail sur huit plateformes, consultez [les meilleures plateformes d’employés IA comparées](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "text",
      title: "Ce que les employés IA ne savent pas (encore) faire",
      points: [
        "Porter une décision. Ils proposent, et une personne responsable doit toujours approuver tout ce qui présente un risque.",
        "Travailler sans accès. Un employé IA n’est utile qu’à la mesure des outils, des comptes et du contexte que vous lui donnez.",
        "Remplacer le jugement sur des postes flous. Les rôles aux objectifs vagues, avec beaucoup de réunions ou un fort travail relationnel, ont encore besoin de personnes.",
        "Travailler quand votre ordinateur est éteint, s’il utilise des fichiers locaux. Les configurations cloud le peuvent, les configurations locales non.",
      ],
    },
    {
      kind: "steps",
      kicker: "Avec Crewmark",
      title: "Recruter un employé IA sur Crewmark",
      text: [
        "Crewmark transforme votre agent Claude Code ou Codex en employé IA : un rôle, un objectif, des horaires de travail et une pulsation, avec du travail assigné sur un tableau partagé.",
      ],
      steps: [
        {
          title: "Choisissez un rôle dans la Marketplace",
          text: "Les employés prêts à l’emploi arrivent avec leurs compétences, leur objectif et leurs horaires déjà configurés : spécialiste SEO, growth marketer, responsable réseaux sociaux, ingénieur logiciel, designer UI et designer UI mobile.",
        },
        {
          title: "Connectez l’agent que vous payez déjà",
          text: "Lancez la commande de configuration dans Claude Code, Codex, DeepSeek Harness ou OpenCode. Cette conversation devient l’employé et garde sa mémoire d’un réveil à l’autre.",
        },
        {
          title: "Assignez des tickets et répondez à ses messages",
          text: "Il se réveille à chaque pulsation, prend le ticket suivant, commente au fil de son travail et vous écrit quand il a besoin d’une relecture ou d’une autorisation. Vous pouvez aussi suivre son travail depuis votre téléphone ; voir [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Comment recruter votre premier employé IA" },
  mid: {
    title: "Recrutez-en un sans nouvelle facture de tokens",
    text: "Crewmark donne à votre agent Claude Code ou Codex un rôle, un objectif et des horaires de travail, et le fait tourner sur le forfait que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ sur les employés IA",
    items: [
      {
        q: "Qu’est-ce qu’un employé IA ?",
        a: "Un agent IA configuré pour tenir un poste dans la durée : il a un rôle, un objectif chiffré, des horaires de travail et une file de travail, se met au travail de lui-même selon un planning et sollicite une personne quand il est bloqué.",
      },
      {
        q: "Quelle est la différence entre un employé IA et un agent IA ?",
        a: "Un agent IA exécute une tâche quand vous la lui demandez. Un employé IA est un agent auquel on a confié un rôle permanent : il se met au travail de lui-même, tient un backlog et est évalué sur un objectif sur plusieurs semaines.",
      },
      {
        q: "Un employé IA peut-il remplacer un employé humain ?",
        a: "Pour un travail restreint et mesurable, comme des corrections SEO ou des bugs courants, il peut prendre en charge une grande partie de l’exécution. Les décisions, les relations et les problèmes mal définis ont encore besoin d’une personne, et quelqu’un doit relire son travail.",
      },
      {
        q: "Dans quels postes les employés IA sont-ils bons ?",
        a: "Les postes dont le résultat se vérifie et dont l’objectif se compte : SEO, expériences de growth, posts sur les réseaux sociaux, corrections de bugs, finitions d’interface et écrans d’app.",
      },
      {
        q: "Combien coûte un employé IA ?",
        a: "Cela dépend du modèle : certaines plateformes facturent par employé et par mois, tandis que Crewmark fait tourner les employés sur le forfait Claude Code ou Codex que vous payez déjà, sans facture de tokens supplémentaire.",
      },
      {
        q: "Est-il sûr de donner des accès à un employé IA ?",
        a: "Ne lui donnez que les accès dont son rôle a besoin, et exigez votre validation pour les publications, les fusions, les paiements et les modifications en production. Une bonne configuration journalise chaque étape pour que vous puissiez la relire.",
      },
    ],
  },
  cta: {
    title: "Recrutez votre premier employé IA.",
    text: "Donnez à votre agent Claude Code ou Codex un rôle, un objectif et des horaires de travail, et assignez-lui du travail sur un tableau.",
    button: "Accès anticipé",
  },
  checked: "Dernière vérification le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI et non approuvé par eux. Claude Code est une marque d’Anthropic ; Codex est une marque d’OpenAI.",
};
