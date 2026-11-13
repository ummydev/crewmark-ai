import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

Lors d’un compact, concentre-toi sur la sortie des tests et les modifications de code.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Réduire la consommation de tokens de Claude Code : 12 astuces | Crewmark",
    description:
      "Pourquoi Claude Code consomme autant de tokens et comment réduire la note : suivez l’usage avec /usage et /context, utilisez clear et compact, choisissez modèle et effort, allégez CLAUDE.md et MCP, et misez sur hooks, skills et sous-agents.",
  },
  breadcrumb: "Réduire la consommation de tokens de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Comment réduire la consommation de tokens de Claude Code (et ne plus buter sur les limites)",
    lead: "Claude Code envoie toute la conversation à chaque requête : la consommation de tokens grandit donc avec le contexte, et une question d’une ligne en fin de longue session coûte bien plus que la même question dans une session neuve. Ce guide montre comment voir où partent vos tokens, puis douze changements tirés de la documentation d’Anthropic elle-même pour réduire la consommation, de `/clear` et `/compact` au choix du modèle et de l’effort, en passant par l’allègement de CLAUDE.md et des serveurs MCP, jusqu’au transfert du travail bruyant vers les hooks, les skills et les sous-agents.",
    cta: "Accès anticipé",
    secondary: "Aller aux astuces",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "D’abord, voyez où partent vos tokens",
      headers: ["Outil", "Ce qu’il affiche"],
      rows: [
        ["`/usage`", "Les tokens de la session et le coût estimé ; sur Pro, Max, Ultra, Team et Enterprise, des barres d’utilisation du forfait, une répartition par skills, sous-agents, plugins et serveurs MCP, des recommandations et vos tâches `/loop` les plus gourmandes"],
        ["`/context`", "Ce qui remplit la fenêtre de contexte en ce moment"],
        ["Barre d’état", "L’utilisation du contexte affichée en permanence, si vous la configurez"],
        ["Compteur du spinner", "Les tokens de sortie du tour en cours, par exemple `↓ 5.5k tokens` ; votre contexte n’y est pas compté"],
        ["`/insights`", "Un rapport HTML sur votre façon de travailler au fil des sessions récentes, avec les points de friction et des suggestions"],
      ],
    },
    {
      kind: "text",
      title: "Pourquoi la consommation grimpe dans une longue session",
      points: [
        "Contexte long : chaque requête transporte toute la conversation, et chaque série d’appels d’outils envoie une nouvelle requête. Le cache rend les relectures moins chères, pas gratuites.",
        "Défauts de cache : votre premier message après une pause plus longue que la durée de vie du cache retraite tout le contexte.",
        "Ce qui tourne pendant que vous êtes inactif : les tâches planifiées de la session et `/loop`, les messages de vos autres sessions, les points sur les objectifs, les récapitulatifs de session et la compaction en veille.",
        "Les workers en parallèle : chaque sous-agent, agent de workflow et coéquipier d’une agent team envoie ses propres requêtes. Les agent teams consomment environ 7x les tokens d’une session standard quand les coéquipiers tournent en plan mode.",
        "La compaction elle-même : `/compact` doit lire la conversation qu’il résume. `/clear` ne coûte rien.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "12 façons de réduire la consommation de tokens de Claude Code",
      steps: [
        {
          title: "Videz le contexte entre deux tâches sans rapport",
          text: "`/clear` démarre une nouvelle conversation : l’ancien contexte cesse de suivre. Lancez d’abord `/rename` si vous voulez la reprendre plus tard avec `/resume`.",
        },
        {
          title: "Compactez avec des instructions",
          text: "`/compact Focus on code samples and API usage` indique à Claude ce qu’il doit garder. Vous pouvez aussi placer des instructions de compaction permanentes dans CLAUDE.md.",
          code: compact,
        },
        {
          title: "Utilisez le bon modèle",
          text: "Sonnet gère l’essentiel du travail de code et coûte moins cher qu’Opus ; réservez Opus à l’architecture et au raisonnement difficile. Changez avec `/model`, et donnez `model: haiku` aux sous-agents simples.",
        },
        {
          title: "Baissez l’effort pour le travail simple",
          text: "Les tokens de réflexion sont facturés comme de la sortie et peuvent atteindre des dizaines de milliers par requête. Baissez le niveau avec `/effort` pour les tâches courantes.",
        },
        {
          title: "Gardez CLAUDE.md court",
          text: "Il est chargé en entier à chaque session. Restez sous les 200 lignes environ et déplacez les instructions propres à un workflow dans des skills, qui ne se chargent qu’à l’usage. Voir le [guide CLAUDE.md](/blog/claude-md) et [les skills de Claude Code](/blog/claude-code-skills).",
        },
        {
          title: "Faites le tri dans les serveurs MCP",
          text: "Les définitions d’outils sont chargées à la demande par défaut, mais chaque serveur ajoute quand même des noms et des instructions. Désactivez ceux que vous n’utilisez pas dans `/mcp`, et préférez des CLI comme `gh`, `aws` ou `gcloud`, qui n’ajoutent aucune liste d’outils.",
        },
        {
          title: "Filtrez la sortie bruyante avec un hook",
          text: "Un hook PreToolUse peut réécrire les commandes de test pour ne garder que les échecs, et ramener des dizaines de milliers de tokens de logs à quelques centaines. La documentation d’Anthropic fournit un script de filtrage prêt à l’emploi.",
          code: hook,
        },
        {
          title: "Confiez le travail verbeux à des sous-agents",
          text: "Lancer des tests, lire de la documentation ou traiter des logs dans un sous-agent garde la sortie dans son contexte ; seul un résumé revient. Donnez à ces sous-agents un modèle plus petit.",
        },
        {
          title: "Installez des plugins d’intelligence de code",
          text: "Pour les langages typés, un plugin de language server répond à « aller à la définition » en un seul appel, au lieu d’un grep et de plusieurs lectures de fichiers.",
        },
        {
          title: "Écrivez des prompts précis",
          text: "« Ajoute une validation des entrées à la fonction de login dans auth.ts » lit quelques fichiers ; « améliore ce code » parcourt tout.",
        },
        {
          title: "Planifiez d’abord, arrêtez tôt",
          text: "Utilisez le [plan mode](/blog/claude-code-plan-mode) pour les gros changements afin de repérer une mauvaise direction avant d’écrire du code ; appuyez sur Échap dès que Claude dévie, et revenez à un checkpoint avec `/rewind`.",
        },
        {
          title: "Surveillez ce qui tourne en votre absence",
          text: "Chaque tâche planifiée, exécution de `/loop` ou message en veille envoie tout votre contexte. Arrêtez les boucles inutiles, réglez `crossSessionInbound` sur `hold` pour mettre en file d’attente les messages des autres sessions, et consultez les lignes Loops de `/usage`.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "Limites d’utilisation et coûts d’équipe",
      text: [
        "Sur Pro, Max et Ultra, l’utilisation est décomptée des limites de votre forfait plutôt que facturée ; voir [Claude Code vs Codex](/blog/claude-code-vs-codex) pour le fonctionnement des limites sur 5 heures et hebdomadaires. Sur l’API, Anthropic indique une moyenne en entreprise d’environ $13 par développeur et par jour actif, et de $150 à $250 par mois, 90% des utilisateurs restant sous $30 par jour.",
        "Les administrateurs peuvent fixer des plafonds de dépenses pour les équipes, et une table `modelPricing` dans les paramètres gérés permet à `/usage` d’afficher les tarifs négociés plutôt que le prix catalogue.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des agents qui travaillent selon un horaire, sans brûler des tokens toute la nuit",
      text: [
        "Tout ce qui réveille une session envoie son contexte complet : un agent toujours actif a donc besoin de limites. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA qui se réveille à chaque pulsation, uniquement pendant les horaires de travail que vous fixez.",
      ],
      steps: [
        {
          title: "Fixez des horaires et un rythme",
          text: "Choisissez toutes les 15, 30 ou 60 minutes, ainsi que les heures où il est en service ; en dehors, il dort. Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Une issue à la fois",
          text: "Chaque pulsation prend la prochaine issue du tableau : la session travaille sur une tâche ciblée plutôt que d’explorer sans fin.",
        },
        {
          title: "Avec l’abonnement que vous payez déjà",
          text: "Les employés tournent sur votre abonnement existant, décompté des limites de votre forfait. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Réduire la consommation de tokens de Claude Code" },
  mid: {
    title: "Dépensez vos tokens pour du travail, pas pour de l’attente.",
    text: "Crewmark réveille Claude Code pendant les horaires de travail avec un rôle, un objectif et la prochaine issue d’un tableau.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ consommation de tokens Claude Code",
    items: [
      {
        q: "Pourquoi Claude Code consomme-t-il autant de tokens ?",
        a: "Il envoie toute la conversation à chaque requête, et chaque série d’appels d’outils est une requête de plus. Les longues sessions, les défauts de cache après une pause, les sous-agents et tout ce qui tourne pendant que vous êtes inactif s’additionnent.",
      },
      {
        q: "Comment vérifier ma consommation de tokens dans Claude Code ?",
        a: "Lancez `/usage` pour les tokens de la session, l’utilisation du forfait et une répartition avec des recommandations, et `/context` pour voir ce qui remplit la fenêtre de contexte. Une barre d’état peut afficher l’utilisation du contexte en permanence.",
      },
      {
        q: "Quel est le moyen le plus rapide d’économiser des tokens ?",
        a: "Lancez `/clear` entre des tâches sans rapport, utilisez Sonnet sauf si vous avez besoin d’Opus, et gardez CLAUDE.md court. Ces trois gestes couvrent l’essentiel du gaspillage.",
      },
      {
        q: "/compact fait-il économiser des tokens ?",
        a: "Il réduit le contexte des messages suivants, mais la compaction elle-même lit toute la conversation : c’est donc une grosse requête. Si vous n’avez pas besoin de continuité, `/clear` ne coûte rien.",
      },
      {
        q: "Les serveurs MCP consomment-ils des tokens ?",
        a: "Les définitions d’outils ne sont chargées qu’à l’usage, mais chaque serveur ajoute quand même des noms d’outils et des instructions. Désactivez les serveurs inutilisés et préférez les outils en ligne de commande quand ils existent.",
      },
      {
        q: "Pourquoi ai-je atteint ma limite d’utilisation si vite ?",
        a: "En général à cause d’une longue session, de quelques défauts de cache ou de travail en arrière-plan comme `/loop`, des tâches planifiées, des sous-agents ou des agent teams. Sur un forfait payant, `/usage` montre lequel de ces facteurs explique votre utilisation récente.",
      },
      {
        q: "Les sous-agents font-ils économiser des tokens ?",
        a: "Ils gardent la sortie verbeuse hors de votre conversation principale, ce qui allège les requêtes suivantes, mais leurs propres requêtes comptent aussi. Donnez-leur un modèle plus petit pour dépenser moins.",
      },
    ],
  },
  cta: {
    title: "Faites travailler Claude Code selon un horaire que vous maîtrisez.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans la documentation de Claude Code (Manage costs effectively) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
