import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "AGENTS.md dans Codex : emplacement, ordre, exemples",
    description:
      "Comment Codex lit AGENTS.md : le fichier global dans ~/.codex, ceux du projet et des dossiers, AGENTS.override.md, l’ordre de chargement, la limite de 32 KiB, les règles de code review et des exemples.",
  },
  breadcrumb: "Guide AGENTS.md pour Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Codex",
    title: "AGENTS.md dans Codex : où le placer, dans quel ordre il se charge et quoi y écrire",
    lead: "AGENTS.md est le fichier d’instructions que Codex, l’agent d’OpenAI, lit avant de se mettre au travail : vos commandes de build et de test, vos conventions et vos règles, en Markdown tout simple. Codex combine un fichier global dans `~/.codex` avec les fichiers de votre dépôt, de la racine jusqu’au dossier dans lequel vous travaillez. Ce guide couvre tous les emplacements, l’ordre de chargement exact et la limite de taille, les overrides, les noms de fichier de repli, les règles de code review et des exemples à copier.",
    cta: "Commencer",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Où Codex cherche AGENTS.md, dans l’ordre de chargement",
      text: [
        "Codex construit la chaîne d’instructions une seule fois au démarrage (dans l’interface terminal, une fois par session). Les fichiers sont assemblés du haut vers le bas de ce tableau : les instructions les plus proches de votre répertoire de travail arrivent en dernier et l’emportent.",
      ],
      headers: ["Ordre", "Emplacement", "Ce que lit Codex"],
      rows: [
        ["1. Global", "`~/.codex/` (ou `$CODEX_HOME`)", "`AGENTS.override.md` s’il existe, sinon `AGENTS.md` ; seulement le premier non vide"],
        ["2. Racine du projet", "En général la racine Git", "`AGENTS.override.md`, sinon `AGENTS.md`, sinon un nom de repli ; un fichier au maximum"],
        ["3. Chaque dossier en dessous", "Chaque répertoire de la racine jusqu’à l’endroit où vous avez lancé Codex", "La même vérification dans chaque répertoire, un fichier par répertoire"],
        ["Arrêt", "Votre répertoire courant", "Les dossiers en dessous ne sont pas lus"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer AGENTS.md pour Codex",
      steps: [
        {
          title: "Créez les valeurs globales par défaut",
          text: "Lancez `mkdir -p ~/.codex` et écrivez dans `~/.codex/AGENTS.md` les préférences que vous voulez dans tous vos dépôts. Pour vérifier qu’il est chargé, demandez à Codex de résumer ses instructions.",
          code: global,
        },
        {
          title: "Ajoutez un fichier de projet, et des overrides là où les équipes diffèrent",
          text: "Placez un `AGENTS.md` à la racine du dépôt pour la configuration commune. Dans un dossier aux règles différentes, ajoutez `AGENTS.override.md` : il remplace l’`AGENTS.md` de ce dossier, que Codex ignore alors.",
          code: project,
        },
        {
          title: "Vérifiez ce qui a été chargé",
          text: "Lancez Codex dans le dossier qui vous intéresse, par exemple `codex --cd services/payments`, et demandez-lui la liste des sources d’instructions chargées. Il doit citer le fichier global, puis celui de la racine, puis celui du dossier.",
        },
        {
          title: "Réutilisez un nom de fichier existant, ou relevez la limite",
          text: "Si votre dépôt garde déjà ses instructions dans un autre fichier, ajoutez-le à `project_doc_fallback_filenames` dans `~/.codex/config.toml`. Codex cesse d’ajouter des fichiers une fois que la taille cumulée atteint `project_doc_max_bytes`, 32 KiB par défaut.",
          code: config,
        },
        {
          title: "Ajoutez des règles pour la code review de Codex",
          text: "Pour `@codex review` sur GitHub, ajoutez une section `## Code Review Rules` à l’AGENTS.md le plus proche du code concerné. Dites ce qu’il faut signaler et l’alternative sûre ; laissez la mise en forme et le lint à la CI.",
          code: review,
        },
      ],
      source: { label: "Source : documentation de Codex, Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "Bonnes pratiques pour AGENTS.md",
      points: [
        "Limitez-vous à ce que Codex ne peut pas deviner : les commandes exactes de build, de test et de lint (y compris comment lancer un seul test), les pièges du code et les décisions qui ne sont écrites nulle part.",
        "Placez les règles les plus spécifiques au plus près du code : un AGENTS.md imbriqué dans `services/payments/` vaut mieux qu’un long fichier racine avec une section paiements.",
        "Surveillez le budget de 32 KiB : les fichiers sont ajoutés de la racine vers le bas et le reste est coupé, alors découpez les fichiers longs en fichiers imbriqués ou relevez `project_doc_max_bytes`.",
        "Utilisez `AGENTS.override.md` pour des changements temporaires, globalement ou dans un dossier, et supprimez-le pour revenir en arrière.",
        "Un AGENTS.md vide est ignoré, et la recherche dans ce répertoire passe au nom de fichier suivant.",
        "Utilisez un `CODEX_HOME` distinct pour les comptes d’automatisation, afin que leurs instructions globales ne se mélangent pas aux vôtres.",
      ],
    },
    {
      kind: "table",
      title: "AGENTS.md dans Codex vs Claude Code et les autres",
      text: [
        "AGENTS.md est un format ouvert lu par de nombreux agents, ce qui en fait le meilleur endroit pour les instructions à partager. Claude Code a son propre fichier, CLAUDE.md ; consultez le [guide CLAUDE.md](/blog/claude-md) pour les détails.",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["Fichier principal", "`AGENTS.md`", "`CLAUDE.md` ; lit `AGENTS.md` seulement en l’absence de CLAUDE.md"],
        ["Fichier personnel ou temporaire", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["Fichier global", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["Dossiers imbriqués", "De la racine au répertoire courant", "Les parents au lancement ; les sous-dossiers quand Claude y travaille"],
        ["Limite de taille", "32 KiB cumulés par défaut", "Limites par fichier ; visez moins de 200 lignes"],
        ["Partager un fichier", "Natif", "Mettez `@AGENTS.md` en tête de CLAUDE.md"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "AGENTS.md dit à Codex comment faire. Crewmark lui dit quoi faire ensuite.",
      text: [
        "Un bon AGENTS.md fait démarrer chaque session Codex bien informée, mais la session attend toujours votre prompt. Crewmark transforme une session Codex, Claude Code, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Gardez AGENTS.md dans le dépôt",
          text: "La session Codex de l’employé le lit comme la vôtre : conventions et commandes de test sont donc de la partie.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Codex proactif](/proactive-codex).",
        },
        {
          title: "Mélangez les agents sur un même tableau",
          text: "Un seul AGENTS.md peut servir des employés Codex et Claude Code côte à côte ; comparez-les dans [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer AGENTS.md pour Codex" },
  mid: {
    title: "Codex connaît vos règles. Qui lui donne la tâche suivante ?",
    text: "Crewmark réveille Codex avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement ChatGPT que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ AGENTS.md pour Codex",
    items: [
      {
        q: "Qu’est-ce que AGENTS.md dans Codex ?",
        a: "Un fichier Markdown d’instructions que Codex lit avant tout travail : commandes, conventions et règles de votre projet. Codex combine un fichier global avec les fichiers de votre dépôt.",
      },
      {
        q: "Où Codex cherche-t-il AGENTS.md ?",
        a: "D’abord dans `~/.codex` (ou `$CODEX_HOME`), puis dans chaque répertoire de la racine du projet jusqu’au dossier où vous avez lancé Codex, en lisant au plus un fichier par répertoire.",
      },
      {
        q: "Dans quel ordre les fichiers AGENTS.md sont-ils chargés ?",
        a: "Le global d’abord, puis celui de la racine du projet, puis chaque dossier imbriqué jusqu’au répertoire courant. Ils sont assemblés dans cet ordre : le fichier le plus proche arrive en dernier et prime.",
      },
      {
        q: "Qu’est-ce que AGENTS.override.md ?",
        a: "Un fichier que Codex lit à la place d’AGENTS.md dans le même répertoire, au niveau global ou dans un dossier. Utilisez-le pour des règles temporaires ou propres à une équipe sans modifier le fichier partagé.",
      },
      {
        q: "AGENTS.md a-t-il une limite de taille ?",
        a: "Oui : Codex cesse d’ajouter des fichiers une fois que la taille cumulée atteint `project_doc_max_bytes`, 32 KiB par défaut. Relevez-la dans `~/.codex/config.toml` ou répartissez les instructions dans des fichiers imbriqués.",
      },
      {
        q: "Puis-je utiliser un seul fichier pour Codex et Claude Code ?",
        a: "Oui. Gardez les instructions communes dans AGENTS.md et ajoutez `@AGENTS.md` en tête de CLAUDE.md, avec les notes propres à Claude en dessous.",
      },
      {
        q: "La code review de Codex lit-elle AGENTS.md ?",
        a: "Oui. Ajoutez une section `## Code Review Rules` à l’AGENTS.md le plus proche du code, et `@codex review` sur GitHub l’applique.",
      },
    ],
  },
  cta: {
    title: "Donnez du travail à votre Codex bien briefé.",
    text: "Crewmark transforme les sessions Codex, Claude Code et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Codex d’OpenAI (Custom instructions with AGENTS.md) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec OpenAI ni Anthropic et non approuvé par elles. Codex est une marque d’OpenAI, et Claude et Claude Code des marques d’Anthropic.",
};
