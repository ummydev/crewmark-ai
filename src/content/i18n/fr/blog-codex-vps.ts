import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex sur VPS : installer, se connecter et relier en SSH",
    description:
      "Installez la CLI Codex sur un VPS Linux, connectez-vous par code d’appareil, ajoutez le serveur comme hôte SSH dans l’app ChatGPT et pilotez-le du téléphone.",
  },
  breadcrumb: "Codex sur un VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex sur un VPS : l’installer sur un serveur Linux et s’y connecter en SSH",
    lead: "Un serveur Linux loué, un VPS, ne se met jamais en veille, et la CLI Codex tourne sous Linux. Le point délicat, c’est la façon de le joindre depuis votre téléphone : l’application ChatGPT ne se connecte pas au serveur lui-même. Elle se connecte à l’application de bureau ChatGPT sur un Mac ou un PC Windows, et c’est cette application qui exécute les chats sur le serveur en SSH. Ce guide couvre l’installation de Codex sur le serveur et la connexion, son ajout comme hôte SSH, son contrôle depuis votre téléphone, une configuration en terminal seul avec tmux, la sécurité du serveur, et Codex cloud si vous préférez ne pas faire tourner de serveur du tout.",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Comment s’articule Codex sur un VPS",
      text: ["Trois machines interviennent, chacune avec un seul rôle :"],
      points: [
        "Le serveur Linux fait tourner Codex. Les chats de ses projets y exécutent des commandes, y lisent des fichiers et y écrivent des modifications, avec les dépendances, les politiques de sécurité et la puissance de calcul du serveur. L’application de bureau y démarre Codex en SSH, dans le shell de connexion de l’utilisateur distant.",
        "Un Mac ou un PC Windows fait tourner l’application de bureau ChatGPT, qui maintient la connexion SSH. C’est l’hôte auquel parle votre téléphone : il doit donc lui aussi rester éveillé et en ligne.",
        "Votre téléphone fait tourner l’application ChatGPT et contrôle cet hôte grâce au contrôle à distance. Il envoie les prompts et les approbations, et vous montre les diffs, la sortie du terminal et les notifications.",
        "OpenAI ne documente que macOS et Windows comme hôtes de contrôle à distance : appairer un téléphone directement avec un serveur Linux n’est donc pas documenté. Appairez plutôt votre téléphone avec le Mac ou le PC, idéalement [un Mac mini toujours allumé](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Ce qu’il vous faut",
      points: [
        "Un serveur Linux accessible en SSH. Le guide d’installation de la CLI Codex sur GitHub indique Ubuntu 20.04+ ou Debian 10+, avec 4 Go de RAM au minimum et 8 Go recommandés ; des builds de release existent pour x86_64 et ARM64.",
        "Un Mac ou un PC Windows avec l’application de bureau ChatGPT, pour ajouter le serveur comme hôte SSH. Si vous voulez joindre le serveur depuis votre téléphone, cet ordinateur doit rester allumé.",
        "Un compte ChatGPT pour Codex. Le tableau des forfaits d’OpenAI indique les connexions à distance SSH sur Plus, Pro, Business et Enterprise ainsi qu’avec une clé API, et le contrôle à distance mobile sur Plus, Pro, Business et Enterprise, mais pas avec une clé API.",
        "L’application ChatGPT sur votre téléphone, iOS ou Android.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer Codex sur un VPS Linux",
      steps: [
        {
          title: "Louez un serveur et vérifiez l’accès SSH",
          text: "Créez un serveur Linux et assurez-vous de pouvoir vous y connecter en SSH depuis le Mac ou le PC qui fera tourner l’application de bureau. Utilisez une connexion par clé et un compte qui n’a que les droits dont Codex a besoin, pas root.",
        },
        {
          title: "Installez la CLI Codex sur le serveur",
          text: "Lancez le script d’installation d’OpenAI sur le serveur ; la même commande le met à jour plus tard, et npm fonctionne aussi. Installez bubblewrap pour le bac à sable de Codex : sans `bwrap` dans le PATH, Codex se rabat sur un utilitaire intégré qui nécessite des user namespaces non privilégiés, et affiche un avertissement au démarrage. Ubuntu 24.04 peut continuer d’avertir tant que vous n’avez pas chargé le profil AppArmor `bwrap-userns-restrict`.",
          code: install,
        },
        {
          title: "Connectez-vous sur un serveur headless",
          text: "Le serveur n’a pas de navigateur : utilisez donc la connexion par code d’appareil. Lancez `codex login --device-auth`, ou choisissez Sign in with Device Code, et suivez les instructions. Elle est en bêta, et la connexion par code d’appareil doit d’abord être activée dans vos paramètres de sécurité ChatGPT ou par l’administrateur de votre espace de travail. Si vous ne pouvez pas l’utiliser, redirigez le callback de connexion avec `ssh -L 1455:localhost:1455` et lancez `codex login` sur le serveur, ou copiez `~/.codex/auth.json` depuis un ordinateur où vous êtes connecté, et traitez ce fichier comme un mot de passe.",
          code: login,
        },
        {
          title: "Ajoutez le serveur à votre configuration SSH",
          text: "Sur le Mac ou le PC, ajoutez une entrée Host dans `~/.ssh/config` et vérifiez que `ssh devbox` fonctionne. Codex lit les alias d’hôtes concrets de ce fichier et ignore les entrées qui ne sont que des motifs. L’application de bureau démarre Codex dans le shell de connexion de l’utilisateur distant : `codex` doit donc s’y trouver dans le PATH.",
          code: ssh,
        },
        {
          title: "Ajoutez-le comme hôte SSH dans l’application de bureau",
          text: "Dans l’application de bureau ChatGPT, ouvrez Settings > Connections, ajoutez ou activez l’hôte SSH, puis choisissez un dossier de projet sur le serveur. Les chats de ce projet exécutent des commandes, lisent des fichiers et écrivent des modifications sur le serveur.",
        },
        {
          title: "Contrôlez-le depuis votre téléphone",
          text: "Sur le même Mac ou PC, ouvrez Settings > Connections > Control this Mac or PC, sélectionnez Set up ou Add, et scannez le QR code avec l’application ChatGPT. Ouvrez Codex sur votre téléphone, choisissez cet ordinateur et le projet du serveur, et démarrez un chat. Le chat tourne sur le serveur via le Mac ou le PC : gardez donc cet ordinateur éveillé et en ligne ; [un Mac mini à la maison](/blog/codex-mac-mini) peut tenir ce rôle. Les détails de configuration et les solutions aux problèmes se trouvent dans [le guide du contrôle à distance de Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Source : documentation d’OpenAI sur les remote connections et les hôtes SSH", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "Terminal seul : la CLI Codex en SSH dans tmux",
      text: [
        "Si un terminal vous suffit, vous pouvez vous passer de l’application de bureau. Connectez-vous au serveur en SSH, lancez la CLI Codex dans tmux et détachez-vous : Codex continue de tourner après votre déconnexion, et vous vous rattachez depuis n’importe quel ordinateur capable de s’y connecter en SSH.",
      ],
      steps: [
        {
          title: "Lancez Codex dans tmux",
          text: "Installez tmux depuis les paquets de votre distribution s’il n’est pas présent, démarrez une session et lancez `codex` dans le dossier de votre projet.",
          code: tmux,
        },
        {
          title: "Sachez ce que cela ne fait pas",
          text: "Cette configuration n’est pas reliée à votre téléphone. Selon OpenAI, la configuration mobile part de l’application de bureau et ne peut pas se faire depuis la CLI. La CLI dispose d’une commande expérimentale `codex remote-control`, que la documentation associe à des clients de contrôle à distance gérés et à des workflows SSH, mais elle ne décrit pas l’appairage d’un téléphone avec un serveur qui ne fait tourner que la CLI.",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Sécuriser le serveur",
      points: [
        "Traitez-le comme n’importe quel serveur SSH : clés de confiance, compte aux privilèges minimaux, et aucun service non authentifié en écoute sur l’Internet public.",
        "N’exposez pas l’app server de Codex. `codex app-server --listen` et `codex --remote` servent surtout au développement et au débogage, et OpenAI déconseille d’ouvrir les transports de l’app server sur un réseau partagé ou public.",
        "Pour joindre le serveur depuis l’extérieur de son réseau, utilisez un VPN ou un réseau maillé comme Tailscale, qui ne relie que vos propres appareils via des liaisons WireGuard chiffrées.",
        "Gardez `~/.codex/auth.json` privé ; OpenAI recommande de le traiter comme un mot de passe.",
        "Les réglages du bac à sable, les contrôles de sécurité et les approbations s’appliquent aux chats sur le serveur comme en local, et le bac à sable sous Linux nécessite bubblewrap.",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "Déplacer un chat entre votre ordinateur et le serveur",
      text: [
        "L’application de bureau peut transférer un chat, avec son état Git, entre votre ordinateur et un hôte SSH connecté. Les deux doivent avoir un projet enregistré pour le même dépôt Git. Dans le pied du chat, sélectionnez l’endroit où il tourne actuellement, choisissez l’hôte de destination (This computer le ramène), vérifiez et sélectionnez Hand off. Codex y crée ou réutilise un worktree. Une réponse encore en cours est interrompue, et un chat ne peut pas être transféré vers Codex cloud.",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "Pas de serveur du tout : Codex cloud",
      points: [
        "Codex cloud exécute des tâches de code dans le cloud d’OpenAI. Chaque tâche dispose de son propre espace de travail et continue pendant que votre ordinateur est en veille.",
        "Lancez-les depuis le web, depuis l’application de bureau (Work in > Cloud) ou depuis l’application ChatGPT sur votre téléphone (ouvrez Codex, choisissez Cloud et un environnement). Avec l’environnement par défaut, vous pouvez commencer sans choisir de dépôt, et Codex peut récupérer des dépôts depuis votre compte GitHub ou GitLab connecté.",
        "Une tâche cloud ne voit que son environnement cloud : vos fichiers locaux, vos processus en cours, vos connexions dans le navigateur et votre accès VPN ne sont pas repris. Les configurations réutilisables se trouvent sous Work in > Cloud > Select environment > Create environment.",
        "Il faut une connexion ChatGPT, pas une clé API. Depuis un terminal, `codex cloud` ouvre un sélecteur de vos chats cloud et `codex cloud exec` soumet une tâche.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hôte Mac mini, hôte SSH Linux ou Codex cloud",
      headers: ["", "Hôte Mac mini", "Hôte SSH Linux", "Codex cloud"],
      rows: [
        ["Où tourne Codex", "Sur le Mac mini, dans l’application de bureau ChatGPT", "Sur le serveur ; l’application de bureau sur un Mac ou un PC le démarre en SSH", "Dans le cloud d’OpenAI, dans un espace de travail par tâche"],
        ["À quoi se connecte votre téléphone", "Au Mac mini", "Au Mac ou PC Windows qui fait tourner l’application de bureau", "Au cloud d’OpenAI : ouvrez Codex et choisissez Cloud"],
        ["Ce qui doit rester allumé", "Le Mac mini", "Le serveur, et le Mac ou le PC", "Rien qui vous appartienne"],
        ["Fichiers, connexions et VPN", "Tout ce qui se trouve sur le Mac mini", "Ce qui se trouve sur le serveur", "Seulement l’environnement cloud ; les fichiers locaux, les connexions du navigateur et l’accès VPN ne sont pas repris"],
        ["Idéal pour", "Computer Use et les tâches dans le navigateur via l’extension Chrome, le développement iOS, des fichiers gardés à la maison", "Le travail en terminal sur un serveur, avec sa puissance de calcul et ses dépendances", "Les tâches de code qui n’ont besoin que d’un dépôt"],
        ["Forfaits (tableau d’OpenAI)", "Contrôle à distance mobile : Plus, Pro, Business, Enterprise", "Connexions SSH : ces forfaits et une clé API ; contrôler l’hôte depuis le téléphone nécessite toujours l’un de ces forfaits", "Plus, Pro, Business, Enterprise ; pas avec une clé API"],
        ["Configuration", "Application de bureau, réglages anti-veille, contrôle à distance", "CLI sur le serveur, configuration SSH, hôte SSH dans l’application de bureau", "Choisir ou créer un environnement cloud"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent au serveur",
      text: [
        "Un serveur qui ne se met jamais en veille attend tout de même votre prochain prompt. Crewmark transforme un chat Codex sur ce serveur en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : pendant les horaires de travail, la CLI `crewmark`, qui tourne sous Linux comme sous macOS et Windows, réveille l’employé pour qu’il traite ses tickets sur un tableau partagé. L’ordinateur sur lequel il tourne doit rester allumé, et c’est le cas d’un VPS.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez Codex sur le serveur",
          text: "Collez le lien de configuration dans un chat Codex sur le serveur. Il installe la CLI `crewmark` et relie ce chat à l’employé. Claude Code fonctionne aussi ; voir [Claude Code sur un VPS](/blog/claude-code-vps).",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "En semaine seulement ou tous les jours, des horaires qui peuvent dépasser minuit, et un réveil toutes les 15, 30, 60, 120 ou 240 minutes. Chaque réveil arrive dans le même chat Codex, pour qu’il reprenne là où il s’était arrêté. Les options de planification propres à Codex sont comparées dans [Codex proactif](/proactive-codex).",
        },
        {
          title: "Assignez des tickets et parlez-lui depuis votre téléphone",
          text: "Ouvrez crewmark.ai dans le navigateur de votre téléphone pour créer et assigner des tickets, ou écrivez à l’employé dans son Work log ; le message arrive dans le chat Codex sur le serveur, et il y répond. Assigner un ticket le réveille immédiatement, et quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Codex sur un VPS Linux comme hôte SSH" },
  mid: {
    title: "Vous voulez que le serveur continue de travailler quand vous ne lui envoyez pas de prompt ?",
    text: "Crewmark réveille Codex au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Puis-je faire tourner Codex sur un VPS ?",
        a: "Oui. La CLI Codex tourne sous Linux : installez-la avec `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, connectez-vous avec `codex login --device-auth`, puis utilisez-la en SSH dans tmux, ou ajoutez le serveur comme hôte SSH dans l’application de bureau ChatGPT sur un Mac ou un PC Windows, que vous pouvez contrôler depuis votre téléphone.",
      },
      {
        q: "Comment se connecter à Codex sur un VPS sans navigateur ?",
        a: "Lancez `codex login --device-auth`, ou choisissez Sign in with Device Code, et suivez les instructions. C’est en bêta, et cela doit être activé dans vos paramètres de sécurité ChatGPT ou par un administrateur de l’espace de travail. Sinon, redirigez le callback avec `ssh -L 1455:localhost:1455 user@server` et lancez `codex login` sur le serveur, ou copiez `~/.codex/auth.json` depuis un ordinateur où vous êtes connecté.",
      },
      {
        q: "Comment connecter Codex à un VPS ?",
        a: "Ajoutez le serveur à `~/.ssh/config` sur le Mac ou le PC qui fait tourner l’application de bureau ChatGPT et vérifiez que `ssh <alias>` fonctionne. Assurez-vous que `codex` est installé, connecté et présent dans le PATH du shell de connexion de l’utilisateur distant, puis ajoutez l’hôte dans Settings > Connections et choisissez un dossier de projet distant.",
      },
      {
        q: "Puis-je contrôler Codex sur un VPS depuis mon téléphone ?",
        a: "Oui, via un Mac ou un PC Windows. Votre téléphone contrôle l’application de bureau ChatGPT sur cet ordinateur, et l’application exécute le chat sur le serveur en SSH : l’ordinateur doit donc rester éveillé et en ligne. OpenAI ne documente pas l’appairage d’un téléphone directement avec un serveur Linux ou avec la CLI seule.",
      },
      {
        q: "L’application de bureau ChatGPT tourne-t-elle sur un serveur Linux ?",
        a: "Il existe une application de bureau ChatGPT pour Linux, en préversion, pour les versions desktop d’Ubuntu, Debian, Fedora et Arch Linux, pour l’instant sans Computer Use. La documentation d’OpenAI ne couvre pas un serveur sans environnement de bureau, et Linux ne figure pas parmi les hôtes de contrôle à distance. Sur un VPS, utilisez la CLI Codex.",
      },
      {
        q: "Est-il sûr de faire tourner Codex sur un VPS ?",
        a: "Traitez-le comme n’importe quel serveur SSH : connexion par clé, compte aux privilèges minimaux et aucun service public non authentifié en écoute. N’exposez pas l’app server de Codex sur un réseau public, utilisez un VPN ou un réseau maillé pour joindre le serveur depuis l’extérieur, gardez `~/.codex/auth.json` privé, et installez bubblewrap pour que le bac à sable fonctionne.",
      },
    ],
  },
  cta: {
    title: "Mettez votre serveur au travail.",
    text: "Crewmark transforme des sessions Codex et Claude Code en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation d’OpenAI (remote connections, CLI Codex, authentification, bac à sable, application Linux, Codex cloud, forfaits), le README et le guide d’installation de Codex sur GitHub, et la documentation de Tailscale le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI ni à aucune entreprise citée sur cette page, et non approuvé par elles. Codex et ChatGPT sont des marques d’OpenAI.",
};
