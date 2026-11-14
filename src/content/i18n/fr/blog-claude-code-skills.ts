import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Résume les modifications non committées et signale tout ce qui est risqué. À utiliser quand l’utilisateur demande ce qui a changé, veut un message de commit ou demande une relecture de son diff.
---

## Modifications en cours

!\`git diff HEAD\`

## Instructions

Résume les modifications ci-dessus en deux ou trois puces, puis liste les
risques éventuels : gestion d’erreurs manquante, valeurs codées en dur ou tests à mettre à jour.`;

const reference = `---
description: Conventions de conception d’API de ce code. À utiliser pour écrire ou relire des endpoints HTTP.
paths: ["src/api/**"]
---

Pour écrire des endpoints d’API :
- Utilise des noms RESTful et des ressources au pluriel
- Renvoie les erreurs sous la forme { error: { code, message } }
- Valide le corps de la requête avec les schémas de src/api/schemas/`;

const layout = `release/
├── SKILL.md          # les étapes, et quand lire les autres fichiers
├── checklist.md      # chargé seulement quand SKILL.md y renvoie Claude
└── scripts/
    └── bump.sh       # exécuté, pas lu dans le contexte`;

const fork = `---
description: Auditer les dépendances pour trouver les vulnérabilités connues et les versions majeures en retard
context: fork
agent: Explore
disable-model-invocation: true
---

Lance l’audit du gestionnaire de paquets, liste chaque résultat de gravité haute ou
critique avec la version corrective, et indique quelles versions majeures sont en retard. Ne modifie aucun fichier.`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills Claude Code : créer, exemples, bonnes pratiques",
    description:
      "Ce que sont les skills Claude Code, comment elles se chargent, comment en créer une avec SKILL.md, des exemples, les fichiers annexes, les skills en subagent, l’installation via des plugins et les bonnes pratiques.",
  },
  breadcrumb: "Guide des skills Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Skills Claude Code : comment les créer, avec exemples et bonnes pratiques",
    lead: "Une skill Claude Code est un dossier contenant un fichier `SKILL.md` : une description de quand l’utiliser et les instructions à suivre. Claude ne voit que les descriptions jusqu’à ce qu’une skill soit nécessaire, puis la charge en entier : vous pouvez donc garder sous la main de longues procédures et de la documentation de référence sans les payer à chaque message. Ce guide explique comment les skills se chargent, comment écrire votre première skill, avec des exemples, les fichiers annexes, les skills en subagent, l’installation de skills depuis des plugins, et comment faire en sorte que Claude s’en serve vraiment.",
    cta: "Commencer",
    secondary: "Créer votre première skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que sont les skills Claude Code",
      text: [
        "Créez une skill quand vous collez sans cesse les mêmes instructions, la même checklist ou la même procédure en plusieurs étapes dans le chat, ou quand une partie de votre CLAUDE.md est passée d’un simple fait à une procédure. Les skills suivent le standard ouvert Agent Skills (agentskills.io), que d’autres outils d’IA lisent aussi ; Claude Code y ajoute des extras comme le contrôle de l’invocation, l’exécution en subagent et la sortie shell en direct dans le prompt.",
      ],
      points: [
        "Deux façons d’en lancer une : Claude la charge quand votre demande correspond à sa `description`, ou vous tapez `/skill-name`.",
        "Peu coûteuse tant qu’elle ne sert pas : seuls le nom et la description restent dans le contexte ; le corps se charge quand la skill s’exécute. Une skill réservée au lancement manuel n’affiche même pas sa description.",
        "Les commandes slash personnalisées sont désormais des skills : `.claude/commands/<name>.md` fonctionne toujours, mais un dossier de skill peut aussi contenir des fichiers annexes. Voir [les commandes slash Claude Code](/blog/claude-code-slash-commands).",
        "Claude Code fournit aussi des skills intégrées, comme `/simplify`, `/loop`, `/batch` et `/debug`.",
      ],
    },
    {
      kind: "table",
      title: "Skills, CLAUDE.md, subagents, plugins ou MCP",
      headers: ["", "Ce que c’est", "Chargement", "À utiliser pour"],
      rows: [
        ["CLAUDE.md", "Instructions du projet", "À chaque session, en entier", "Les faits et conventions dont Claude a toujours besoin ; voir le [guide CLAUDE.md](/blog/claude-md)"],
        ["Skill", "Un dossier avec `SKILL.md`", "Description toujours ; corps à l’usage", "Procédures, checklists, documentation de référence, prompts réutilisables"],
        ["Subagent", "Un agent séparé avec son propre contexte", "Quand Claude délègue", "Les tâches annexes dont les détails ne doivent pas encombrer votre conversation"],
        ["Plugin", "Un paquet de skills, d’agents, de hooks et de serveurs MCP", "Une fois installé et activé", "Partager des skills avec une équipe ou installer celles des autres"],
        ["Serveur MCP", "Une connexion à un outil ou une source de données externe", "Une fois connecté", "Donner de nouveaux outils à Claude, comme une base de données ou un outil de suivi d’issues"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment créer une skill Claude Code",
      steps: [
        {
          title: "Choisissez son emplacement",
          text: "`~/.claude/skills/<name>/` pour vous, dans tous vos projets ; `.claude/skills/<name>/` dans un dépôt, committé, pour tous ceux qui y travaillent. Le nom du dossier devient la commande : `summarize-changes` donne `/summarize-changes`.",
        },
        {
          title: "Écrivez SKILL.md : une description, puis les instructions",
          text: "Le frontmatter se place entre deux lignes `---`, tout en haut du fichier. Seule `description` est recommandée : commencez par le cas d’usage et les mots que les gens emploieraient vraiment. En dessous, rédigez les instructions en Markdown. Une ligne commençant par `` !`command` `` exécute d’abord cette commande et colle sa sortie, pour que la skill parte de votre état réel.",
          code: first,
        },
        {
          title: "Testez-la des deux façons",
          text: "Lancez `claude` dans un projet git avec une modification non committée. Demandez « Qu’est-ce que j’ai changé ? » pour voir si Claude choisit la skill de lui-même, puis tapez `/summarize-changes` pour la lancer directement. Les skills ajoutées pendant une session se chargent d’elles-mêmes ; lancez `/reload-skills` si l’une n’apparaît pas.",
        },
        {
          title: "Décidez qui peut la lancer",
          text: "Ajoutez `disable-model-invocation: true` pour tout ce qui a des effets de bord, comme un déploiement ou l’envoi de messages, afin que vous seul puissiez la déclencher. Ajoutez `user-invocable: false` pour des connaissances de fond que seul Claude doit charger. Passez des entrées avec `$ARGUMENTS`, comme le montre le guide des commandes slash.",
        },
        {
          title: "Partagez-la",
          text: "Committez `.claude/skills/` dans le dépôt, ou empaquetez vos skills sous forme de plugin pour plusieurs dépôts ou équipes.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Exemples de skills Claude Code",
      steps: [
        {
          title: "Une skill de référence qui ne se charge que pour certains fichiers",
          text: "Les skills de référence contiennent des conventions que Claude applique en travaillant. `paths` limite le chargement automatique aux fichiers qui correspondent aux globs.",
          code: reference,
        },
        {
          title: "Une skill de tâche avec des fichiers annexes",
          text: "Gardez SKILL.md court et renvoyez vers le reste. Claude ne lit `checklist.md` que lorsque SKILL.md le lui demande, et exécute `bump.sh` sans le lire : les détails ne coûtent rien tant qu’ils ne servent pas.",
          code: layout,
        },
        {
          title: "Une skill qui s’exécute dans son propre subagent",
          text: "`context: fork` lance un subagent (ici le type Explore, en lecture seule) avec la skill pour prompt. Il ne voit pas votre conversation, donc les instructions doivent se suffire à elles-mêmes ; il tourne en arrière-plan sauf si vous définissez `background: false`.",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "Installer des skills depuis des plugins et des marketplaces",
      text: [
        "Les skills écrites par d’autres arrivent généralement dans des plugins. Claude Code enregistre la marketplace officielle d’Anthropic (`claude-plugins-official`) au premier lancement d’une session interactive ; parcourez-la avec `/plugin`, ou installez directement, par exemple `/plugin install skill-creator@claude-plugins-official`. Pour une marketplace d’équipe ou communautaire, ajoutez-la d’abord avec `/plugin marketplace add owner/repo`.",
      ],
      points: [
        "Les skills de plugin s’appellent `/plugin-name:skill-name`.",
        "La marketplace officielle indique le coût en contexte de chaque plugin, par tour et à l’invocation.",
        "Le plugin skill-creator aide à écrire une skill et lance des évaluations qui comparent les résultats avec et sans elle.",
        "Lisez les skills d’un dépôt ou d’un plugin avant de leur faire confiance : `allowed-tools` peut pré-autoriser des outils pendant le tour où une skill s’exécute.",
      ],
    },
    {
      kind: "text",
      title: "Bonnes pratiques, et quand Claude ignore une skill",
      points: [
        "Rédigez la description pour qu’elle soit reconnue : commencez par la tâche et les formulations qu’emploient les utilisateurs. Dans la liste, la description et `when_to_use` sont tronqués à 1 536 caractères.",
        "Placez les instructions les plus importantes en haut : après la compaction de la conversation, Claude Code peut ne garder que le début d’une skill invoquée. Invoquez-la à nouveau pour la rétablir.",
        "Formulez les consignes pour toute la tâche (« lance les tests après chaque modification »), car le fichier de la skill n’est pas relu aux tours suivants. Une règle qui ne doit jamais être sautée a sa place dans un hook.",
        "Pour réduire la consommation de tokens, sortez les procédures de CLAUDE.md pour en faire des skills, mettez `disable-model-invocation: true` sur les skills que vous lancez à la main, et consultez `/skill-doctor` pour repérer les skills qui coûtent du contexte mais servent rarement.",
        "Elle ne se déclenche pas ? Vérifiez que la description contient les bons mots-clés, demandez « Quelles skills sont disponibles ? », et lancez `claude plugin validate .claude/skills` pour trouver un frontmatter qui ne se parse pas.",
        "Elle se déclenche trop souvent ? Resserrez la description, ou passez la skill en mode manuel avec `disable-model-invocation: true`.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Les skills apprennent à Claude Code comment faire. Crewmark lui donne de quoi faire, toutes les heures.",
      text: [
        "Une bibliothèque de skills rend chaque session plus compétente, mais elle attend toujours que vous demandiez. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau, avec les skills de votre projet chargées.",
      ],
      steps: [
        {
          title: "Gardez vos skills dans le dépôt",
          text: "La session de l’employé lit `.claude/skills/` et CLAUDE.md comme la vôtre : une skill de release ou une checklist de relecture suivent donc.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et prend la prochaine issue ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Créer une skill pour Claude Code" },
  mid: {
    title: "Vos skills sont prêtes. Qui les lance pendant votre absence ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ skills Claude Code",
    items: [
      {
        q: "Que sont les skills Claude Code ?",
        a: "Des dossiers avec un fichier `SKILL.md` qui contiennent les instructions d’une tâche ou un ensemble de connaissances de référence. Claude en charge une quand votre demande correspond à sa description, ou vous la lancez avec `/skill-name`.",
      },
      {
        q: "Où placer les skills Claude Code ?",
        a: "`~/.claude/skills/<name>/SKILL.md` pour des skills personnelles dans tous vos projets, `.claude/skills/<name>/SKILL.md` dans un dépôt pour l’équipe, ou dans un plugin.",
      },
      {
        q: "Comment faire en sorte que Claude Code utilise ma skill ?",
        a: "Rédigez une description qui nomme la tâche et les mots que vous emploieriez pour la demander, vérifiez que la skill apparaît quand vous demandez « Quelles skills sont disponibles ? », ou lancez-la directement avec `/skill-name`.",
      },
      {
        q: "Skills ou subagents : quelle différence ?",
        a: "Une skill est un ensemble d’instructions chargé dans une conversation ; un subagent est un agent séparé avec son propre contexte. Une skill avec `context: fork` combine les deux : elle s’exécute comme un subagent, avec la skill pour prompt.",
      },
      {
        q: "Skills ou plugins ?",
        a: "Un plugin est la façon d’empaqueter et de partager skills, subagents, hooks et serveurs MCP. Installez un plugin pour obtenir ses skills, ou écrivez une skill dans votre propre `.claude/skills/` sans plugin.",
      },
      {
        q: "Les skills consomment-elles beaucoup de tokens ?",
        a: "Seules leurs descriptions restent dans le contexte ; le corps se charge quand une skill s’exécute, et les skills en mode manuel uniquement n’affichent même pas de description. Déplacer de longues procédures de CLAUDE.md vers des skills réduit généralement la consommation de tokens.",
      },
      {
        q: "Où trouver des skills Claude Code ?",
        a: "Dans la marketplace officielle de plugins d’Anthropic (parcourez-la avec `/plugin` ou sur claude.com/marketplace), dans les marketplaces d’équipe ou communautaires que vous ajoutez avec `/plugin marketplace add`, et dans des dépôts GitHub publics.",
      },
    ],
  },
  cta: {
    title: "Faites travailler vos skills Claude Code selon un planning.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (skills et plugins) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
