import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Gardez un Mac éveillé pendant que Claude Code travaille (il peut se rendormir une fois claude terminé)
caffeinate -i claude --permission-mode auto

# Ou confiez la tâche à une session cloud, qui continue ordinateur portable fermé
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# Ajoutez l’étape suivante à cette session cloud depuis n’importe quelle machine
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code peut-il tourner 24 h/24 ? La nuit, sans surveillance",
    description:
      "Comment faire travailler Claude Code toute la nuit ou en continu : modes de permission, /goal, garder la machine éveillée, sessions cloud, tâches planifiées, limites d’usage et ce qui l’arrête.",
  },
  breadcrumb: "Claude Code 24 h/24, 7 j/7",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code peut-il tourner 24 h/24, 7 j/7 ? Comment le faire travailler la nuit, sans surveillance",
    lead: "Oui, avec des limites. Claude Code n’a pas d’horloge interne qui l’arrête, mais quatre choses le font : la session se termine ou l’ordinateur se met en veille, il s’arrête sur une demande de permission, il atteint la limite d’usage de votre forfait, ou il a fini et n’a plus rien à faire. Chacune a sa solution. Ce guide présente les façons de faire travailler Claude Code pendant que vous dormez, ce que chacune ne sait pas faire, et comment lui donner une équipe de nuit permanente.",
    cta: "Commencer",
    secondary: "Le faire tourner la nuit",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les façons de faire tourner Claude Code en continu",
      text: [
        "Certaines gardent une seule conversation active, et Claude se souvient donc de ce qu’il a fait ; d’autres lancent à chaque fois une nouvelle session avec le même prompt.",
      ],
      headers: ["Option", "L’ordinateur peut être éteint", "Même conversation", "Quand il s’arrête", "Idéal pour"],
      rows: [
        ["Session cloud (`claude --cloud`, claude.ai/code)", "Oui", "Oui", "S’arrête après une période d’inactivité ; la VM est récupérée", "Une longue tâche confiée avant d’aller dormir"],
        ["Tâches planifiées cloud (`/schedule`)", "Oui", "Non, une nouvelle session à chaque exécution", "Au plus toutes les heures ; Pro, Max, Ultra, Team ou Enterprise", "Des jobs récurrents qui n’ont besoin que d’un dépôt"],
        ["Tâches planifiées de l’application de bureau", "Non : application ouverte, ordinateur éveillé", "Non, une nouvelle session à chaque exécution", "Seulement pendant que la machine est éveillée", "Des jobs nocturnes sur des fichiers locaux"],
        ["`/loop`", "Non : session ouverte", "Oui", "Se termine avec la session ; les boucles récurrentes expirent après 7 jours", "Surveiller la CI ou un déploiement pendant quelques heures"],
        ["cron + `claude -p --resume`", "Non", "Oui", "Au rythme de votre cron ; vous le branchez vous-même", "Un agent qui traite un fichier TODO"],
        ["Pulsation Crewmark", "Non", "Oui", "Les horaires de travail que vous fixez, même après minuit", "Un poste permanent alimenté par un tableau, issue après issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment faire tourner Claude Code toute la nuit",
      steps: [
        {
          title: "Choisissez un mode de permission qui ne s’arrête pas à chaque demande",
          text: "Une session bloquée sur une demande de permission à 2 h du matin ne fait rien jusqu’au matin. Le mode auto exécute les actions avec des contrôles de sécurité en arrière-plan au lieu de demander. Réservez `bypassPermissions`, qui saute tous les contrôles, aux conteneurs et VM isolés.",
          code: overnight,
        },
        {
          title: "Donnez-lui une ligne d’arrivée",
          text: "`/goal` prend une condition, comme une suite de tests qui passe ; après chaque tour, Claude la vérifie et relance un tour de lui-même jusqu’à ce qu’elle soit remplie. Pour une nuit plus longue, laissez un fichier TODO ou un plan écrit dans le dépôt et demandez-lui de le traiter dans l’ordre.",
        },
        {
          title: "Gardez la machine éveillée, ou déplacez le travail dans le cloud",
          text: "Une session locale a besoin d’un ordinateur allumé et d’un processus claude actif. Sur Mac, `caffeinate -i` le garde éveillé pendant que Claude Code tourne ; sur un serveur, lancez claude dans tmux ou screen pour qu’il survive à la fermeture du terminal. Une session cloud continue après la fermeture de votre ordinateur portable.",
        },
        {
          title: "Anticipez les limites d’usage",
          text: "Les forfaits Claude utilisent une fenêtre glissante de 5 heures plus une limite hebdomadaire, partagées avec le chat. Max offre 5 fois l’usage de Pro ; Ultra offre 10 fois celui de Pro par semaine et, pour les comptes vérifiés, aucune limite sur 5 heures. Si la limite tombe en pleine tâche, Claude Code peut terminer l’étape en cours (une fois par semaine sur Pro, à chaque fois sur Max). Des crédits d’usage ou une clé API lui permettent de continuer. Voir [comment réduire la consommation de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
        },
        {
          title: "Suivez depuis votre téléphone",
          text: "Remote Control vous permet de consulter une session locale depuis l’application Claude ou un navigateur, et les sessions cloud apparaissent dans l’onglet Code de l’application. Si Claude a posé une question pendant la nuit, répondez à votre réveil et il reprend. Voir [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
      source: { label: "Source : documentation Claude Code d’Anthropic sur les sessions cloud", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Ce qui arrête Claude Code pendant la nuit",
      points: [
        "Le terminal se ferme ou l’ordinateur se met en veille. Une session Remote Control se reconnecte quand la machine se réveille, mais aucun travail n’est fait pendant la veille.",
        "Une demande de permission à laquelle personne ne répond. Le mode auto en évite la plupart.",
        "La limite d’usage. La session attend que la fenêtre se réinitialise, sauf si vous ajoutez des crédits ou une clé API.",
        "L’inactivité dans le cloud. Les sessions cloud s’arrêtent après un moment sans activité, y compris quand elles attendent votre approbation d’un appel d’outil MCP. La rouvrir restaure la conversation, mais pas les commandes shell, les subagents ni un `/loop` encore en cours.",
        "Plus rien à faire. Une fois l’objectif atteint ou la liste TODO vide, il s’arrête, et c’est ce que vous voulez.",
        "Une session très longue. Claude Code compacte automatiquement le contexte, et les premiers détails ne survivent que sous forme de résumé. Gardez le plan dans un fichier, pas seulement dans le chat.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez une équipe de nuit à Claude Code",
      text: [
        "Faire tourner l’agent toute la nuit est facile à lancer et difficile à tenir : quelqu’un doit mettre la tâche suivante en file chaque matin. Crewmark transforme une conversation Claude Code en employé IA doté d’horaires de travail et d’une pulsation : il continue de prendre du travail sur un tableau tout seul.",
      ],
      steps: [
        {
          title: "Fixez les horaires de travail",
          text: "Les horaires de travail peuvent dépasser minuit : une équipe de nuit de 22:00 à 07:00 fonctionne, en semaine seulement ou tous les jours. En dehors de ses horaires, l’employé dort et ne touche pas à votre forfait.",
        },
        {
          title: "Choisissez la pulsation",
          text: "Pendant son service, la CLI crewmark réveille la même conversation toutes les 15, 30, 60, 120 ou 240 minutes pour qu’elle prenne l’issue suivante. Si la conversation a été fermée, Crewmark la reprend avec `claude -p --resume` en mode auto. Votre ordinateur doit rester allumé.",
        },
        {
          title: "Lisez le tableau le matin",
          text: "Chaque issue a ses commentaires et son journal d’activité, et tout ce qui a besoin de vous arrive sous forme de message que l’employé attend. Voir [comment rendre Claude Code proactif](/proactive-claude-code) et [ce qu’est un employé IA](/ai-employees) ; pour Codex, lisez [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Faire tourner Claude Code toute la nuit" },
  mid: {
    title: "Vous voulez que Claude Code assure l’équipe de nuit, chaque nuit ?",
    text: "Crewmark réveille votre Claude Code au rythme d’une pulsation pendant les horaires que vous fixez et lui confie l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : faire tourner Claude Code 24 h/24",
    items: [
      {
        q: "Claude Code peut-il tourner 24 h/24, 7 j/7 ?",
        a: "Oui, tant que quelque chose le fait avancer : une session cloud ou une tâche planifiée cloud avec votre ordinateur éteint, ou une session locale sur une machine qui reste éveillée, avec un mode de permission qui ne s’arrête pas sur les demandes. Les limites d’usage s’appliquent toujours : un travail en continu demande un forfait avec de la marge, ou des crédits.",
      },
      {
        q: "Puis-je laisser Claude Code tourner toute la nuit ?",
        a: "Oui. Lancez-le en mode auto avec un objectif clair ou un fichier TODO, gardez la machine éveillée (ou utilisez `claude --cloud`), et vérifiez le résultat le matin. Tout ce qui a besoin de vous vous attendra sous forme de question.",
      },
      {
        q: "Claude Code continue-t-il de tourner quand je ferme mon ordinateur portable ?",
        a: "Une session locale, non : elle a besoin d’un ordinateur allumé et d’un processus claude actif, et une session Remote Control se termine quand son terminal se ferme. Une session cloud, elle, continue, et vous pouvez la suivre depuis l’application Claude.",
      },
      {
        q: "Existe-t-il un mode sans surveillance dans Claude Code ?",
        a: "Pas sous ce nom. Une exécution sans surveillance combine un mode de permission qui ne demande rien (le mode auto, ou `bypassPermissions` dans un conteneur isolé) avec le mode headless, `claude -p`, ou une session cloud.",
      },
      {
        q: "Faire tourner Claude Code toute la nuit va-t-il atteindre ma limite d’usage ?",
        a: "C’est possible. Tous les forfaits Claude partagent une fenêtre de 5 heures et une limite hebdomadaire entre le chat et Claude Code ; Ultra supprime la limite sur 5 heures pour les comptes vérifiés. Répartissez le travail sur plusieurs fenêtres avec une pulsation ou un planning plutôt qu’en une seule longue rafale.",
      },
      {
        q: "Est-il sûr de laisser Claude Code tourner sans surveillance ?",
        a: "Utilisez le mode auto plutôt que `bypassPermissions` sur votre propre machine, travaillez dans un dépôt où chaque modification passe par une revue, et gardez les identifiants de production hors de portée. Les sessions cloud tournent dans des VM isolées avec un accès réseau limité par défaut.",
      },
    ],
  },
  cta: {
    title: "Donnez une équipe de nuit à Claude Code.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après la documentation Claude Code (sessions cloud, tâches planifiées, Remote Control) le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic ni approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic.",
};
