import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# En interactif : planifiez le résultat, puis donnez à Codex un objectif qu’il vérifie lui-même
/plan
/goal all tests in test/auth pass and the lint step is clean

# Sans interface, depuis un script ou cron : laissez-le modifier les fichiers de l’espace de travail
codex exec --sandbox workspace-write "Work through TODO.md in order"

# Le lendemain matin, ou au prochain passage de cron : reprenez la même session
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Tâches longues avec Codex : faire tourner Codex la nuit",
    description:
      "Comment faire travailler OpenAI Codex pendant des heures ou toute la nuit : /goal et /plan, tâches cloud, codex exec resume, garder le Mac éveillé, suivre depuis votre téléphone, limites d’usage et ce qui l’arrête.",
  },
  breadcrumb: "Tâches longues avec Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Tâches longues avec Codex : faire tourner Codex la nuit ou en arrière-plan",
    lead: "Codex peut travailler des heures sur une même tâche, et continuer pendant que vous dormez, à quatre conditions : un objectif qu’il peut vérifier lui-même, un ordinateur qui reste éveillé (ou une tâche dans le cloud), des approbations qui ne vous attendent pas, et assez de marge dans votre forfait. Ce guide présente les façons de lancer de longues tâches Codex, du mode Goal aux tâches cloud et à `codex exec resume`, ce que chacune ne sait pas faire, et comment donner à Codex une équipe de nuit permanente.",
    cta: "Commencer",
    secondary: "Le faire tourner la nuit",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les façons de faire tourner Codex en continu",
      text: [
        "Certaines gardent un seul chat actif, et Codex conserve donc son contexte ; d’autres repartent de zéro à chaque fois.",
      ],
      headers: ["Option", "L’ordinateur peut dormir", "Même chat", "Quand il s’arrête", "Idéal pour"],
      rows: [
        ["Mode Goal (`/goal`)", "Non, pour le travail local", "Oui", "Quand l’objectif est atteint, ou qu’il a besoin d’une décision", "Une tâche avec une ligne d’arrivée claire"],
        ["Tâche Codex Cloud", "Oui", "Oui", "Quand la tâche est terminée ; vous relisez et ouvrez une pull request", "Confier une tâche avant d’aller dormir"],
        ["Tâche planifiée dans un chat", "Non, pour les fichiers locaux : ordinateur allumé, application ouverte", "Oui", "Tourne selon son planning : toutes les quelques minutes, chaque jour ou chaque semaine", "Revenir sur le même travail à intervalles réguliers"],
        ["`codex exec` depuis cron", "Non", "Oui, avec `codex exec resume`", "Au rythme de votre cron ; vous le branchez vous-même", "Les scripts et la CI"],
        ["Pulsation Crewmark", "Non", "Oui", "Les horaires de travail que vous fixez, même après minuit", "Un poste permanent alimenté par un tableau, issue après issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment faire tourner Codex toute la nuit",
      steps: [
        {
          title: "Donnez-lui un objectif vérifiable",
          text: "Dans l’application de bureau, la CLI ou l’extension d’IDE, `/goal` lance le mode Goal : le texte de l’objectif est à la fois le premier prompt et la ligne d’arrivée. Si vous ne savez pas exactement à quoi ressemble le travail terminé, `/plan` vous pose des questions et transforme le résultat en objectif avec des critères mesurables. Incluez une vérification, comme une suite de tests qui passe.",
          code: commands,
        },
        {
          title: "Gardez l’ordinateur éveillé, ou envoyez la tâche dans le cloud",
          text: "Pour le travail local sur Mac, activez « Prevent sleep while running » dans l’application de bureau. Une tâche Codex Cloud tourne dans son propre espace de travail et continue pendant que votre ordinateur dort ; lancez-en une en choisissant Work in > Cloud et un environnement.",
        },
        {
          title: "Réglez les approbations pour qu’il ne s’arrête pas à 2 h du matin",
          text: "Un objectif conserve le même bac à sable et la même politique d’approbation, et se met en pause quand il a besoin d’une décision. Laissez-le modifier l’espace de travail avec `--sandbox workspace-write`, ou utilisez « Approve for me » pour qu’un relecteur gère les demandes de routine. `--full-auto` n’est plus pris en charge, et `danger-full-access` n’a sa place que dans un runner ou un conteneur isolé.",
        },
        {
          title: "Anticipez les limites d’usage",
          text: "Codex partage le quota de votre forfait ChatGPT : une fenêtre glissante de 5 heures plus des limites hebdomadaires, et les tâches cloud puisent dans la même réserve. ChatGPT Pro n’a actuellement pas de limite sur 5 heures ; des limites hebdomadaires peuvent s’appliquer. Des crédits ou une clé API permettent au travail local de continuer. Voir [Claude Code vs Codex](/blog/claude-code-vs-codex) pour les chiffres.",
        },
        {
          title: "Suivez depuis votre téléphone",
          text: "Dans l’application ChatGPT, vous pouvez suivre une tâche, approuver des commandes et relire des diffs, pour les tâches cloud comme pour un Mac ou un PC Windows connecté dans Settings > Connections. L’ordinateur connecté doit rester éveillé et en ligne. Voir [le contrôle à distance de Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI sur le travail de longue durée", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Ce qui arrête une longue tâche Codex",
      points: [
        "Une décision que vous seul pouvez prendre. Le mode Goal se met en pause plutôt que d’élargir ses propres accès : vérifiez donc les approbations avant de partir.",
        "La mise en veille ou une perte de connexion pendant un travail local. OpenAI conseille de mettre l’objectif en pause avant une perte de connexion prévisible et de le reprendre ensuite.",
        "La limite d’usage, jusqu’à ce que la fenêtre se réinitialise ou que vous ajoutiez des crédits.",
        "Deux chats qui modifient les mêmes fichiers. Donnez à chaque chat parallèle son propre worktree git.",
        "Plus rien à faire. Une fois l’objectif atteint, il s’arrête, et c’est ce que vous voulez ; pour une liste de tâches, mettez-les dans un fichier qu’il traite dans l’ordre.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez une équipe de nuit à Codex",
      text: [
        "Une longue tâche finit par se terminer ; un poste, non. Crewmark transforme une conversation Codex en employé IA doté d’horaires de travail et d’une pulsation : il continue de prendre l’issue suivante sur un tableau sans que vous ayez à la mettre en file.",
      ],
      steps: [
        {
          title: "Fixez les horaires de travail",
          text: "Les horaires de travail peuvent dépasser minuit : une équipe de nuit de 22:00 à 07:00 fonctionne, en semaine seulement ou tous les jours. En dehors de ses horaires, l’employé dort et ne touche pas à votre forfait.",
        },
        {
          title: "Choisissez la pulsation",
          text: "Toutes les 15, 30, 60, 120 ou 240 minutes pendant son service, la CLI crewmark place un message dans la même conversation Codex avec `codex queue --resume` et la lance, pour que l’employé prenne sa prochaine issue. Votre ordinateur doit rester allumé.",
        },
        {
          title: "Lisez le tableau le matin",
          text: "Chaque issue a ses commentaires et son journal d’activité, et tout ce qui a besoin de vous arrive sous forme de message que l’employé attend. Voir [comment rendre Codex proactif](/proactive-codex) et [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Faire tourner Codex toute la nuit" },
  mid: {
    title: "Vous voulez que Codex assure l’équipe de nuit, chaque nuit ?",
    text: "Crewmark réveille votre Codex au rythme d’une pulsation pendant les horaires que vous fixez et lui confie l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les tâches longues avec Codex",
    items: [
      {
        q: "Codex peut-il tourner toute la nuit ?",
        a: "Oui. Donnez-lui un objectif avec `/goal`, gardez le Mac éveillé avec « Prevent sleep while running » (ou utilisez une tâche Codex Cloud, qui continue pendant que votre ordinateur dort), réglez les approbations pour qu’il ne vous attende pas, et relisez le résultat le matin.",
      },
      {
        q: "Comment faire tourner Codex en arrière-plan ?",
        a: "Lancez `codex exec` sans l’interface interactive, depuis un script, cron ou la CI, et reprenez plus tard la même session avec `codex exec resume --last`. Ou lancez une tâche Codex Cloud depuis le web ou l’application de bureau et fermez la fenêtre.",
      },
      {
        q: "Qu’est-ce que le mode Goal dans Codex ?",
        a: "Le mode Goal, lancé avec `/goal`, fait travailler Codex vers un objectif que vous rédigez ; le texte de l’objectif est à la fois le premier prompt et les critères d’achèvement. Vous pouvez le mettre en pause, le reprendre, le modifier ou l’effacer depuis la ligne de progression de l’application de bureau.",
      },
      {
        q: "Codex continue-t-il de travailler quand mon ordinateur est en veille ?",
        a: "Les tâches cloud, oui. Le travail local nécessite un ordinateur éveillé, ce que gère le réglage « Prevent sleep while running » de l’application de bureau sur Mac ; un ordinateur connecté que vous contrôlez depuis votre téléphone doit aussi rester éveillé et en ligne.",
      },
      {
        q: "Une longue exécution de Codex va-t-elle atteindre ma limite d’usage ?",
        a: "C’est possible. Codex utilise la fenêtre de 5 heures et les limites hebdomadaires de votre forfait ChatGPT, et les tâches cloud puisent dans le même quota. Répartissez le travail sur plusieurs fenêtres avec un planning ou une pulsation plutôt qu’en une seule longue rafale.",
      },
      {
        q: "Est-il sûr de laisser Codex tourner sans surveillance ?",
        a: "Gardez `--sandbox workspace-write` ou « Approve for me » sur votre propre machine, n’utilisez `danger-full-access` que dans un runner ou un conteneur isolé, et travaillez dans un dépôt où les modifications passent par une revue.",
      },
    ],
  },
  cta: {
    title: "Donnez une équipe de nuit à Codex.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation Codex d’OpenAI (long-running work, Codex Cloud, mode non interactif, mobile, tâches planifiées) le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI ni approuvé par OpenAI. Codex et ChatGPT sont des marques d’OpenAI.",
};
