import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code sur VPS : le faire tourner 24 h/24 sur serveur Linux",
    description:
      "Claude Code sur un VPS Linux ou un serveur Ubuntu : Remote Control en mode serveur, actif en continu dans tmux, piloté depuis le téléphone. Et ses limites.",
  },
  breadcrumb: "Claude Code sur un VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code sur un VPS : le faire tourner sur un serveur Linux et le piloter depuis votre téléphone",
    lead: "Remote Control vous permet de piloter Claude Code depuis l’application Claude sur votre téléphone, mais seulement tant que l’ordinateur qui le fait tourner est allumé. Un serveur Linux loué, un VPS, ne s’éteint pas. Installez-y Claude Code, lancez Remote Control en mode serveur, et vous pourrez ouvrir ses sessions depuis votre téléphone où que vous soyez. Ce guide couvre l’installation sur Ubuntu, Debian ou toute autre distribution, comment le garder actif, comment ajouter un bureau pour vous connecter à des sites web, et ce qu’un serveur Linux ne sait pas faire par rapport à [un Mac mini à la maison](/blog/claude-code-mac-mini).",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "Ce qu’il vous faut",
      points: [
        "Un serveur Linux accessible en SSH, chez un fournisseur comme DigitalOcean ou OVHcloud. N’importe quelle distribution convient pour la CLI Claude Code ; Claude Desktop nécessite Ubuntu 22.04 ou version ultérieure, ou Debian 12 ou version ultérieure.",
        "Un forfait Claude Pro, Max, Ultra, Team ou Enterprise. Remote Control ne fonctionne pas avec les clés API, et sur Team ou Enterprise, un Owner doit d’abord l’activer.",
        "L’application Claude sur votre téléphone (iOS ou Android), ou claude.ai/code dans un navigateur.",
        "En option, un environnement de bureau et un bureau à distance sur le serveur, pour les fois où Claude a besoin d’un site web sur lequel vous devez vous connecter.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer Claude Code sur un VPS Linux",
      steps: [
        {
          title: "Louez un serveur et connectez-vous-y",
          text: "Créez un serveur Linux chez un fournisseur comme DigitalOcean ou OVHcloud et connectez-vous-y en SSH. Choisir Ubuntu 22.04+ ou Debian 12+ vous laisse Claude Desktop comme option ; sur toute autre distribution, vous utilisez la CLI.",
        },
        {
          title: "Installez Claude Code et connectez-vous",
          text: "Installez la CLI Claude Code avec le script d’installation d’Anthropic. Elle tourne dans un terminal (Anthropic cite Ubuntu 20.04+ et Debian 10+ parmi les systèmes pris en charge) : elle convient donc à un serveur headless que vous n’atteignez qu’en SSH. Sur Ubuntu 22.04+ ou Debian 12+, vous pouvez installer Claude Desktop à la place, avec apt ; il est en bêta sous Linux (voir [Claude Desktop sous Linux](https://code.claude.com/docs/en/desktop-linux)). Lancez ensuite `claude` et connectez-vous avec votre compte Claude, pas avec une clé API.",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Lancez Remote Control en mode serveur",
          text: "Depuis le dossier de votre projet, lancez `claude remote-control`. Cela démarre un serveur qui peut héberger plusieurs sessions Claude Code à la fois, et vous pouvez ouvrir chacune d’elles depuis votre téléphone. Ajoutez `--chrome` pour activer l’intégration Chrome dans ces sessions. Pour que ce soit plutôt chaque session interactive qui se connecte, mettez `remoteControlAtStartup` à true dans `~/.claude/settings.json`.",
          code: server,
        },
        {
          title: "Gardez-le actif après votre déconnexion",
          text: "Remote Control ne fonctionne que tant que le processus claude tourne : fermez le terminal et ses sessions passent hors ligne. Lancez-le dans tmux ou screen pour qu’il survive à la fermeture de la connexion SSH, ou comme service. Le mode serveur s’arrête aussi après environ 10 minutes sans réseau : relancez-le automatiquement, comme le fait la boucle ci-dessus. Pour les modes de permission et les limites d’usage sur les longues exécutions, voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Ouvrez-le depuis votre téléphone",
          text: "Ouvrez l’application Claude sur iOS ou Android, ou claude.ai/code, et choisissez une session. Claude tourne sur le serveur ; le téléphone affiche la conversation et envoie vos messages. Les détails de configuration et les solutions aux problèmes se trouvent dans [le guide Remote Control](/remote-claude-code). Pour écrire plutôt à Claude Code depuis Telegram, voir [les channels de Claude Code](/blog/claude-code-channels).",
        },
      ],
      source: { label: "Source : documentation Remote Control d’Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "Ajouter un bureau pour vous connecter aux sites web",
      text: [
        "Un serveur que vous atteignez en SSH n’a pas d’écran, ce qui ne pose aucun problème jusqu’à ce que Claude ait besoin d’un site sur lequel vous devez vous connecter. Ajoutez un bureau à distance et vous pourrez vous connecter vous-même, puis laisser Claude utiliser le navigateur.",
      ],
      points: [
        "Installez un environnement de bureau et un serveur de bureau à distance sur le VPS, et ouvrez-le depuis votre portable quand vous devez vous connecter quelque part.",
        "Installez Google Chrome ou Microsoft Edge avec l’extension Claude in Chrome, et connectez-vous aux sites que Claude doit utiliser. Claude in Chrome fonctionne sous Linux ; il n’est pas pris en charge dans WSL.",
        "Démarrez le serveur avec `claude remote-control --chrome` pour que ses sessions puissent utiliser ce navigateur.",
        "Accédez au bureau à distance via Tailscale, qui place vos appareils sur un réseau privé, un tailnet, où eux seuls peuvent se joindre entre eux. Voir [ce qu’est Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        "Avec un bureau sur Ubuntu ou Debian, Claude Desktop est aussi une option, en plus de la CLI.",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Ce qu’un serveur Linux ne sait pas faire",
      text: [
        "Si l’un de ces points compte pour vous, utilisez plutôt [un Mac mini à la maison](/blog/claude-code-mac-mini), la configuration que l’on utilise chez Crewmark.",
      ],
      points: [
        "Pas de Computer Use. Claude ne peut pas utiliser les applications et l’écran sous Linux : dans la CLI, Computer Use est réservé à macOS, et dans Claude Desktop, c’est une préversion de recherche sur macOS et Windows.",
        "Pas de développement iOS. Xcode et l’iOS Simulator ne tournent que sur macOS : un serveur Linux ne peut donc ni compiler ni exécuter une application iPhone.",
        "Une application de bureau plus limitée. Claude Desktop sous Linux est une bêta pour Ubuntu et Debian, sans Computer Use, Cowork ni dictée.",
        "Un processus qui doit rester actif. Comme pour toute configuration Remote Control, les sessions ne sont joignables que tant que claude tourne sur le serveur.",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Mac mini ou VPS Linux pour Claude Code",
      headers: ["", "Mac mini à la maison", "VPS Linux"],
      rows: [
        ["Où il tourne", "Un Mac qui vous appartient, chez vous ; les fichiers y restent", "Un serveur loué chez un fournisseur comme DigitalOcean ou OVHcloud"],
        ["Remote Control depuis votre téléphone", "Oui : Claude Desktop ou la CLI", "Oui : la CLI sur n’importe quelle distribution, ou Claude Desktop (bêta) sur Ubuntu 22.04+ et Debian 12+"],
        ["Computer Use", "Oui : CLI sur macOS ; Desktop en préversion de recherche avec Pro, Max ou Ultra", "Non"],
        ["Développement iOS (Xcode, iOS Simulator)", "Oui", "Non : nécessite un Mac"],
        ["Claude in Chrome", "Oui", "Oui, avec Chrome ou Edge"],
        ["Bureau à distance", "Screen Sharing, via Tailscale", "Un environnement de bureau et un bureau à distance que vous ajoutez"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent au serveur",
      text: [
        "Un serveur qui ne se met jamais en veille répond chaque fois que vous lui écrivez, et attend quand vous ne le faites pas. Crewmark transforme une conversation Claude Code sur ce serveur en employé IA doté d’un rôle, d’objectifs, d’horaires de travail et d’une pulsation : pendant les horaires de travail, la CLI `crewmark`, qui tourne sous Linux comme sous macOS et Windows, réveille l’employé pour qu’il traite ses tickets sur un tableau partagé. L’ordinateur sur lequel il tourne doit rester allumé, et c’est le cas d’un VPS.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez Claude Code sur le serveur",
          text: "Collez le lien de configuration dans une conversation Claude Code sur le VPS. Il installe la CLI `crewmark` et relie cette conversation à l’employé. Codex fonctionne aussi.",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "En semaine seulement ou tous les jours, des horaires qui peuvent dépasser minuit, et un réveil toutes les 15, 30, 60, 120 ou 240 minutes.",
        },
        {
          title: "Assignez des tickets depuis votre téléphone",
          text: "Créez et assignez des tickets sur le tableau de crewmark.ai depuis n’importe quel navigateur ; en assigner un réveille l’employé immédiatement. Quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Claude Code sur un VPS Linux avec Remote Control" },
  mid: {
    title: "Vous voulez que le serveur continue de travailler quand vous ne lui écrivez pas ?",
    text: "Crewmark réveille Claude Code au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Puis-je faire tourner Claude Code sur un VPS ?",
        a: "Oui. Installez la CLI Claude Code sur un serveur Linux, connectez-vous avec un forfait Pro, Max, Ultra, Team ou Enterprise, et lancez `claude remote-control` dans tmux pour qu’il continue de tourner après votre déconnexion. Ouvrez ensuite ses sessions depuis l’application Claude sur votre téléphone ou sur claude.ai/code.",
      },
      {
        q: "Comment installer Claude Code sur un serveur Linux ?",
        a: "Installez la CLI Claude Code, qui fonctionne sur n’importe quelle distribution, y compris sur un serveur headless que vous atteignez en SSH, et connectez-vous avec votre compte Claude. Sur Ubuntu 22.04+ ou Debian 12+, vous pouvez aussi installer Claude Desktop avec apt ; il est en bêta sous Linux et n’inclut ni Computer Use, ni Cowork, ni la dictée.",
      },
      {
        q: "Claude Code Remote Control fonctionne-t-il sous Linux ?",
        a: "Oui. Lancez `claude remote-control` pour un serveur qui héberge plusieurs sessions, ou activez Remote Control pour une seule session avec `/remote-control`. Il faut une connexion claude.ai avec un forfait Pro, Max, Ultra, Team ou Enterprise ; les clés API ne sont pas prises en charge.",
      },
      {
        q: "Comment garder Claude Code actif sur un serveur après avoir fermé SSH ?",
        a: "Lancez-le dans tmux ou screen, ou comme service. Fermer le terminal arrête le processus claude et met ses sessions Remote Control hors ligne. Le mode serveur s’arrête après environ 10 minutes sans réseau : placez-le dans une boucle ou un service qui le relance.",
      },
      {
        q: "Claude Code peut-il utiliser Computer Use sur un serveur Linux ?",
        a: "Non. Computer Use n’est pas disponible sous Linux, ni dans la CLI ni dans Claude Desktop. Claude in Chrome fonctionne en revanche sous Linux : Claude peut donc toujours utiliser des sites web dans un navigateur. Pour Computer Use ou le développement iOS, utilisez un Mac, comme [un Mac mini à la maison](/blog/claude-code-mac-mini).",
      },
      {
        q: "De quoi ai-je besoin pour faire tourner Claude Code sur un VPS ?",
        a: "D’un serveur Linux accessible en SSH, d’un forfait Claude qui inclut Remote Control (Pro, Max, Ultra, Team ou Enterprise) et de l’application Claude sur votre téléphone. N’importe quelle distribution convient pour la CLI ; Claude Desktop nécessite Ubuntu 22.04+ ou Debian 12+.",
      },
    ],
  },
  cta: {
    title: "Mettez votre serveur au travail.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation Claude Code d’Anthropic (Remote Control, Claude Desktop sous Linux, Computer Use, intégration Chrome) et la documentation de Tailscale le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic ni à aucune entreprise citée sur cette page, et non approuvé par elles. Claude et Claude Code sont des marques d’Anthropic.",
};
