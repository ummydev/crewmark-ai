import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Serveur HTTP distant (recommandé pour les services cloud)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Avec un bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Serveur stdio local : tout ce qui suit -- est la commande propre du serveur
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # tous les serveurs configurés
claude mcp get notion      # le détail d'un serveur
claude mcp remove notion   # le supprimer (lancez d'abord claude mcp logout notion pour révoquer les tokens)
claude mcp add-from-claude-desktop   # importer depuis Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "MCP dans Claude Code : serveurs, config et .mcp.json",
    description:
      "Comment configurer des serveurs MCP dans Claude Code : claude mcp add pour les serveurs HTTP et stdio, les portées local, project et user, l’emplacement du fichier de configuration, .mcp.json avec des variables d’environnement, OAuth et dépannage.",
  },
  breadcrumb: "Guide MCP pour Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "MCP dans Claude Code : ajouter des serveurs et savoir où se trouve la configuration",
    lead: "Les serveurs MCP (Model Context Protocol) relient Claude Code à des outils et des données externes, comme Notion, GitHub, Sentry, une base de données ou votre propre API. Vous les ajoutez avec `claude mcp add`, vous choisissez si chacun est réservé à vous ou partagé avec l’équipe, et Claude peut ensuite appeler leurs outils. Ce guide couvre l’ajout de serveurs HTTP et stdio, les trois portées et les fichiers de configuration qui les sous-tendent, `.mcp.json` avec des variables d’environnement, la connexion via OAuth et ce qu’il faut vérifier quand un serveur ne se connecte pas.",
    cta: "Commencer",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Comment ajouter un serveur MCP à Claude Code",
      steps: [
        {
          title: "Choisissez le transport",
          text: "Utilisez HTTP pour les serveurs distants hébergés dans le cloud ; c’est le transport recommandé, et Claude Code se rabat sur le transport SSE, désormais obsolète, quand un serveur ne propose que celui-là. Utilisez stdio pour les serveurs qui tournent comme un processus local. Avec stdio, tout ce qui suit `--` est transmis tel quel au serveur.",
          code: add,
        },
        {
          title: "Choisissez une portée",
          text: "Sans `--scope`, un serveur est local : pour vous seul, dans ce projet seulement. Ajoutez `--scope project` pour l’écrire dans `.mcp.json` à l’intention de l’équipe, ou `--scope user` pour tous vos projets. Voir le tableau ci-dessous.",
        },
        {
          title: "Connectez-vous si le serveur l’exige",
          text: "Beaucoup de serveurs distants utilisent OAuth. Lancez `/mcp` dans Claude Code et choisissez le serveur pour vous authentifier, ou `claude mcp login <name>` dans votre terminal. Les exécutions headless avec `-p` ne peuvent pas ouvrir le flux de connexion : connectez-vous d’abord en mode interactif.",
        },
        {
          title: "Vérifiez la connexion",
          text: "Lancez `/mcp` pour voir l’état et les outils de chaque serveur, et `claude mcp list` dans votre terminal. Demandez ensuite à Claude d’utiliser l’outil par son nom.",
        },
        {
          title: "Gérez vos serveurs",
          text: "Listez, inspectez, supprimez ou importez des serveurs en ligne de commande. Désactivez depuis `/mcp` un serveur que vous utilisez rarement plutôt que de le supprimer.",
          code: manage,
        },
      ],
      source: { label: "Source : documentation de Claude Code, Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "Portées MCP et emplacement des fichiers de configuration",
      text: [
        "Voici où Claude Code conserve la configuration MCP. Notez que la portée « local » de MCP se trouve dans `~/.claude.json`, et non dans `.claude/settings.local.json`.",
      ],
      headers: ["Portée", "Chargée dans", "Partagée", "Stockée dans"],
      rows: [
        ["Local (par défaut)", "Ce projet uniquement", "Non", "`~/.claude.json`, sous le chemin du projet"],
        ["Project", "Ce projet uniquement", "Oui, à committer", "`.mcp.json` à la racine du projet"],
        ["User", "Tous vos projets", "Non", "`~/.claude.json`, au premier niveau"],
        ["Plugin", "Partout où le plugin est activé", "Avec le plugin", "La configuration propre au plugin"],
        ["Connecteurs claude.ai", "Les sessions connectées avec ce compte claude.ai", "Par compte", "Vos paramètres claude.ai"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "Partager des serveurs avec .mcp.json",
      text: [
        "`.mcp.json` permet à toute l’équipe d’utiliser les mêmes serveurs. Gardez-en les secrets à l’écart grâce aux variables d’environnement : `${VAR}` est remplacé par la valeur de la variable, et `${VAR:-default}` prend une valeur par défaut quand elle n’est pas définie. L’expansion fonctionne dans `command`, `args`, `env`, `url` et `headers`.",
      ],
      steps: [
        {
          title: "Référencez des variables plutôt que des secrets",
          text: "Claude Code demande à chaque personne d’approuver les serveurs de projet de `.mcp.json` la première fois ; `claude mcp reset-project-choices` réinitialise ces réponses. Une entrée JSON avec une `url` doit aussi avoir un `type`, par exemple `http`.",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "Priorité, connecteurs et autres détails",
      points: [
        "Quand le même serveur est défini deux fois, Claude Code ne s’y connecte qu’une fois, en retenant le premier dans cet ordre : local, project, user, plugin, connecteur claude.ai. Les entrées ne sont pas fusionnées ; les serveurs gérés d’une organisation passent avant tous les autres.",
        "Si vous vous connectez à Claude Code avec un compte claude.ai, les connecteurs ajoutés dans claude.ai apparaissent automatiquement.",
        "Claude Code peut lui-même être un serveur MCP : `claude mcp serve` expose ses outils à un autre client, comme Claude Desktop.",
        "Les serveurs peuvent aussi proposer des prompts qui apparaissent comme des commandes slash ; voir [les commandes slash de Claude Code](/blog/claude-code-slash-commands).",
        "Supprimer un serveur distant efface les tokens enregistrés par Claude Code sans les révoquer ; pour cela, lancez d’abord `claude mcp logout <name>`.",
      ],
    },
    {
      kind: "text",
      title: "MCP et consommation de tokens",
      text: [
        "Les définitions d’outils sont chargées à la demande par défaut : seuls les noms des outils et les instructions des serveurs occupent le contexte jusqu’à ce que Claude utilise un outil, si bien qu’une longue liste de serveurs coûte moins cher qu’avant. Chaque serveur ajoute tout de même quelque chose : désactivez dans `/mcp` ceux que vous n’utilisez pas, et préférez une CLI comme `gh`, `aws` ou `gcloud` quand elle existe, puisqu’elle n’ajoute aucune liste d’outils. Plus de détails dans [comment réduire la consommation de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "text",
      title: "Dépannage : quand un serveur ne se connecte pas",
      points: [
        "Le serveur demande une authentification : ouvrez `/mcp` et choisissez Re-authenticate, ou lancez `claude mcp login <name>`.",
        "« has a url but no type » : ajoutez `\"type\": \"http\"` (ou `sse` ou `ws`) à l’entrée JSON ; sans type, Claude Code la traite comme un serveur stdio.",
        "Les options d’un serveur stdio ont disparu : placez `--` avant la commande du serveur pour que Claude Code ne les interprète pas comme les siennes.",
        "Avertissement de variable manquante dans `claude mcp list` : définissez la variable ou donnez-lui une valeur `:-default`.",
        "Un serveur de projet ne se charge jamais avec `claude -p` : en mode headless, il n’y a pas de demande d’approbation, donc vérifiez vos paramètres ou passez les serveurs explicitement avec `--mcp-config` et `--strict-mcp-config`.",
        "Les noms de serveurs ajoutés avec `claude mcp` ne peuvent contenir que des lettres, des chiffres, des tirets et des underscores.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez à vos employés IA les mêmes outils que vous",
      text: [
        "MCP, c’est ce qui permet à Claude Code d’atteindre votre gestionnaire d’issues, votre base de données ou vos statistiques. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à chaque pulsation pour qu’elle prenne la prochaine issue d’un tableau, avec les serveurs MCP de votre projet à disposition.",
      ],
      steps: [
        {
          title: "Committez .mcp.json",
          text: "Les serveurs de portée projet se chargent dans la session de l’employé comme dans la vôtre ; pour les serveurs qui exigent OAuth, connectez-la une fois en mode interactif.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Donnez à chaque rôle uniquement ce dont il a besoin",
          text: "Un employé SEO reçoit Search Console ; un développeur, GitHub et Sentry. Découvrez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ajouter un serveur MCP à Claude Code" },
  mid: {
    title: "Les outils sont connectés. Qui s’en sert pendant votre absence ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ MCP pour Claude Code",
    items: [
      {
        q: "Comment ajouter un serveur MCP à Claude Code ?",
        a: "Lancez `claude mcp add --transport http <name> <url>` pour un serveur distant, ou `claude mcp add --transport stdio <name> -- <command>` pour un serveur local. Lancez ensuite `/mcp` dans Claude Code pour vous connecter si besoin et vérifier la connexion.",
      },
      {
        q: "Où se trouve le fichier de configuration MCP de Claude Code ?",
        a: "Les serveurs de portée local et user sont stockés dans `~/.claude.json` (les serveurs locaux sous le chemin du projet). Les serveurs de portée projet sont dans `.mcp.json` à la racine du projet, que vous pouvez committer.",
      },
      {
        q: "Quelle est la différence entre les portées local, project et user ?",
        a: "Local, c’est vous seul dans un projet (le comportement par défaut) ; project est partagé avec l’équipe via `.mcp.json` ; user, c’est vous seul dans tous vos projets.",
      },
      {
        q: "Comment garder les clés d’API hors de .mcp.json ?",
        a: "Référencez des variables d’environnement avec `${VAR}` ou `${VAR:-default}` dans `command`, `args`, `env`, `url` ou `headers`, et définissez ces variables sur chaque machine.",
      },
      {
        q: "Comment utiliser mes serveurs MCP de Claude Desktop dans Claude Code ?",
        a: "Lancez `claude mcp add-from-claude-desktop` et choisissez les serveurs à importer. Cela fonctionne sur macOS et WSL ; ajoutez `--scope user` pour les rendre disponibles dans tous vos projets.",
      },
      {
        q: "Les serveurs MCP consomment-ils beaucoup de tokens ?",
        a: "Moins qu’avant : les définitions d’outils ne se chargent que lorsque Claude utilise un outil. Chaque serveur ajoute tout de même des noms et des instructions : désactivez ceux que vous n’utilisez pas et préférez les CLI quand elles existent.",
      },
      {
        q: "Claude Code peut-il servir de serveur MCP ?",
        a: "Oui. `claude mcp serve` le lance comme serveur MCP stdio auquel d’autres clients, comme Claude Desktop, peuvent se connecter.",
      },
    ],
  },
  cta: {
    title: "Des outils connectés, et un employé pour s’en servir.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (MCP et coûts) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
