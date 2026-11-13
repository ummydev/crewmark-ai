import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# Retrouver les worktrees que Conductor a créés pour ce dépôt
git worktree list

# Dans chaque espace de travail à garder : committer et pousser sa branche
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor rejoint Meta : dates de fermeture et meilleures alternatives | Crewmark",
    description:
      "Conductor, l’application Mac pour agents Claude Code et Codex en parallèle, rejoint Meta. Les dates de fermeture, comment sauver vos espaces de travail et les alternatives à Conductor sur Mac, Windows et Linux.",
  },
  breadcrumb: "Alternatives à Conductor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agents de codage IA",
    title: "Conductor rejoint Meta : ce qui change et où faire tourner vos agents désormais",
    lead: "Conductor, l’application Mac qui fait tourner des agents Claude Code, Codex, Cursor et OpenCode en parallèle dans des espaces de travail séparés, a annoncé le 4 novembre 2026 qu’il rejoint Meta. Les inscriptions sont fermées, Conductor Cloud passe en lecture seule le 13 novembre et ferme le 20 novembre, et l’application locale ne recevra des mises à jour que jusqu’au début de 2027. Ce guide présente les dates, comment conserver votre travail et les alternatives qui font le même travail.",
    cta: "Accès anticipé",
    secondary: "Sauver vos espaces de travail",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’était Conductor, et ce qui change",
      text: [
        "Conductor donnait à chaque tâche de code son propre espace de travail : un git worktree avec sa propre branche, ses fichiers, son terminal, son diff et son flux de relecture, pour que plusieurs agents puissent travailler en même temps sur un même dépôt. Il ne tournait que sur macOS, avec Claude Code, Codex, Cursor et OpenCode, et proposait aussi Conductor Cloud pour des espaces de travail qui continuaient de tourner loin de votre Mac.",
        "Le fondateur Charlie Holtz a annoncé que l’équipe rejoint Meta pour construire « la prochaine interface », avec quelque chose de nouveau promis pour le début de l’année prochaine. Meta a confirmé l’opération à TechCrunch, sans en dévoiler les conditions.",
      ],
    },
    {
      kind: "table",
      title: "Le calendrier de fermeture de Conductor",
      headers: ["Date", "Ce qui se passe"],
      rows: [
        ["4 novembre 2026", "Plus d’inscriptions ni de téléchargements. Les utilisateurs gratuits ne peuvent plus passer à Pro ; les utilisateurs Pro gardent les fonctions Pro gratuitement. Les abonnés actifs sont remboursés."],
        ["13 novembre 2026", "Les espaces de travail cloud passent en lecture seule : vous pouvez lire les anciennes conversations et exporter vos données, mais plus envoyer de messages."],
        ["20 novembre 2026", "Conductor Cloud ferme et la suppression des données utilisateur du cloud commence."],
        ["Jusqu’au début de 2027", "L’application Mac locale reçoit encore les nouveaux modèles et les correctifs critiques, puis s’arrête ; toutes les données utilisateur sont supprimées à sa fermeture."],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment garder votre travail avant les échéances",
      steps: [
        {
          title: "Rapatriez les espaces de travail cloud sur votre Mac avant le 13 novembre",
          text: "Faites un clic droit sur chaque espace de travail cloud dans Conductor et choisissez Transfer to local (transférer en local). L’espace de travail et ses conversations sont déplacés sur votre ordinateur.",
        },
        {
          title: "Exportez vos données avant le 20 novembre",
          text: "Dans Conductor, allez dans Settings → Account → Export data (exporter les données) pour tout télécharger, y compris les conversations que vous voudrez peut-être garder comme notes ou comme prompts.",
        },
        {
          title: "Poussez chaque branche qui compte",
          text: "Les espaces de travail locaux sont des git worktrees ordinaires, en général sous `~/conductor/workspaces/<repo>/<workspace>`, qui partagent l’historique de votre dépôt. Committez et poussez leurs branches pour que le travail survive à l’application.",
          code: rescue,
        },
        {
          title: "Reprenez vos scripts de configuration",
          text: "Conductor garde les scripts de configuration, d’exécution et d’archivage de chaque projet dans `.conductor/settings.toml` ou `.conductor/settings.local.toml`. Copiez ces commandes dans votre README ou dans la configuration de votre prochain outil, et listez des fichiers comme `.env` dans un `.worktreeinclude` si vous passez aux worktrees de Claude Code.",
        },
        {
          title: "Choisissez un remplaçant et essayez-le sur une tâche",
          text: "Comparez les options ci-dessous, puis faites une vraie tâche dans le nouvel outil avant la fin de votre accès à Conductor Pro.",
        },
      ],
      source: { label: "Source : l’annonce de Conductor", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Les alternatives à Conductor comparées",
      headers: ["", "Conductor", "Claude Code seul", "Application Codex", "Crewmark"],
      rows: [
        ["Ce que c’est", "Application Mac pour agents en parallèle dans des worktrees", "`claude --worktree`, sessions parallèles dans l’application desktop, agents en arrière-plan", "L’application desktop d’OpenAI, avec worktrees et tâches cloud", "Des employés IA : des sessions d’agent avec rôles, objectifs, horaires de travail et une pulsation (heartbeat)"],
        ["Agents", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["Plateformes", "macOS", "macOS, Windows, Linux", "Application desktop et web", "macOS, Windows, Linux"],
        ["Isolation", "Un git worktree par espace de travail", "Un git worktree par session ou subagent", "Worktrees", "Chaque employé dans sa propre session et son propre checkout"],
        ["Qui lance la tâche suivante", "Vous", "Vous (ou une planification)", "Vous (ou une planification)", "La pulsation : chaque employé se réveille et prend l’issue suivante"],
        ["Tableau de tâches", "Liste des espaces de travail", "Non", "Non", "Oui, avec issues, commentaires et messages pour vous"],
        ["Statut", "Le cloud s’arrête le 20 novembre ; le local jusqu’au début de 2027", "Actif", "Actif", "Accès anticipé"],
      ],
    },
    {
      kind: "text",
      title: "Quelle alternative à Conductor vous convient",
      points: [
        "Vous utilisiez Conductor surtout avec Claude Code : Claude Code fait désormais l’essentiel lui-même. `claude --worktree <name>` donne à chaque session son propre worktree et sa propre branche, `.worktreeinclude` copie votre `.env`, et l’application desktop lance des sessions parallèles avec un interrupteur Worktree. Voir le [guide des worktrees Claude Code](/blog/claude-code-worktree).",
        "Vous utilisiez surtout Codex : l’application desktop Codex intègre les worktrees et les tâches cloud ; comparez les deux agents dans [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Il vous faut Windows ou Linux : Conductor n’y a jamais été disponible ; la CLI de Claude Code et Crewmark tournent tous deux sur les trois systèmes.",
        "Vous mélangiez les agents, ou voulez qu’ils continuent sans vous : c’est le rôle de Crewmark (ci-dessous). Pour faire tourner plusieurs agents à la main, voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Conductor faisait tourner vos agents côte à côte. Crewmark leur donne un poste.",
      text: [
        "Conductor rendait les agents parallèles faciles à lancer et à relire, mais chaque espace de travail attendait toujours que vous tapiez le prompt suivant. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail, et la réveille avec une pulsation pour prendre l’issue suivante sur un tableau, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Apportez vos dépôts et vos agents",
          text: "Lancez la commande d’installation dans chaque projet. Plusieurs employés peuvent partager un dépôt, chacun dans son propre checkout, un peu comme vos espaces de travail Conductor.",
        },
        {
          title: "Donnez à chacun un rôle et un objectif",
          text: "Un développeur, un relecteur, un rédacteur SEO : chacun a un objectif écrit sous forme de chiffre et ses horaires de travail. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Toutes les 15, 30 ou 60 minutes, l’employé se réveille dans la même conversation, prend l’issue suivante et vous écrit quand il a besoin d’une décision ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Garder votre travail avant la fermeture de Conductor" },
  mid: {
    title: "Vous quittez Conductor ? Ne le remplacez pas seulement, passez au niveau supérieur.",
    text: "Crewmark fait tourner Claude Code, Codex et OpenCode comme des employés IA qui se réveillent avec une pulsation et prennent eux-mêmes l’issue suivante.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ sur la fermeture de Conductor",
    items: [
      {
        q: "Conductor ferme-t-il ?",
        a: "En partie. Conductor rejoint Meta. Conductor Cloud passe en lecture seule le 13 novembre 2026 et ferme le 20 novembre. L’application Mac locale reçoit encore les nouveaux modèles et les correctifs critiques jusqu’au début de 2027, puis s’arrête.",
      },
      {
        q: "Meta a-t-il racheté Conductor ?",
        a: "Oui. Conductor a annoncé le 4 novembre 2026 qu’il rejoint Meta, et Meta a confirmé l’acquisition à TechCrunch. Le prix et les conditions n’ont pas été dévoilés.",
      },
      {
        q: "Peut-on encore télécharger Conductor ou s’y inscrire ?",
        a: "Non. Les inscriptions et les téléchargements se sont arrêtés le 4 novembre 2026, et les utilisateurs gratuits ne peuvent plus passer à Pro.",
      },
      {
        q: "Que deviennent mes données et mon abonnement ?",
        a: "La suppression des données utilisateur du cloud commence le 20 novembre, et toutes les données utilisateur sont supprimées à la fermeture de l’application. Exportez-les depuis Settings → Account → Export data. Les abonnés actifs sont remboursés, et les utilisateurs Pro gardent les fonctions Pro gratuitement jusque-là.",
      },
      {
        q: "Quelle est la meilleure alternative à Conductor pour Claude Code ?",
        a: "L’option `--worktree` de Claude Code et les sessions parallèles de l’application desktop couvrent le travail parallèle isolé. Pour que les sessions prennent le travail d’elles-mêmes, faites-les tourner comme employés Crewmark.",
      },
      {
        q: "Existe-t-il une alternative à Conductor pour Windows ou Linux ?",
        a: "Conductor lui-même était réservé au Mac. La CLI de Claude Code avec `--worktree`, un simple `git worktree` et Crewmark tournent tous sur macOS, Windows et Linux.",
      },
      {
        q: "Mes espaces de travail Conductor vont-ils continuer à fonctionner ?",
        a: "Les espaces de travail locaux sont de simples git worktrees avec des branches ordinaires : le code reste dans votre dépôt, quoi qu’il arrive à l’application. Committez et poussez les branches que vous voulez garder.",
      },
    ],
  },
  cta: {
    title: "Vos agents ont besoin d’un nouveau foyer. Donnez-leur aussi un poste.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans l’annonce, le changelog et la documentation de Conductor, ainsi que dans l’article de TechCrunch, le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Conductor, Meta, Anthropic ni OpenAI et non approuvé par eux. Conductor est une marque de son propriétaire, Claude et Claude Code sont des marques d’Anthropic, et Codex d’OpenAI.",
};
