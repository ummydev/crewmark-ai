import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex sous Linux : app de bureau, installation CLI et bac à sable",
    description:
      "Installez Codex sous Linux : l’app ChatGPT en préversion pour Ubuntu, Debian, Fedora et Arch, ou la CLI avec bubblewrap. Plus la connexion headless et SSH.",
  },
  breadcrumb: "Codex sous Linux",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex sous Linux : la préversion de l’application de bureau, la CLI, et ce que Linux ne sait pas encore faire",
    lead: "Il y a deux façons de faire tourner Codex sur une machine Linux. L’application de bureau ChatGPT, qui inclut Codex, est en préversion sous Linux depuis août 2026, pour Ubuntu, Debian, Fedora et Arch sur x64 et ARM64. La CLI Codex s’installe avec une seule commande et utilise `bubblewrap` pour son bac à sable. Ce guide couvre les deux installations, la connexion sur un serveur headless, ce que Linux n’a pas encore (Computer Use, et le contrôle d’un hôte Linux depuis le téléphone), comment une machine Linux peut tout de même servir d’hôte SSH à l’application de bureau sur un Mac ou un PC, et Codex cloud.",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Quel Codex utiliser sous Linux",
      points: [
        "L’application de bureau ChatGPT, en préversion : une fenêtre avec Codex à côté de Chat et Work. C’est l’interface graphique de Codex sous Linux. Le guide d’OpenAI couvre Linux sur un poste de travail ; sur un serveur sans bureau, utilisez la CLI.",
        "La CLI Codex : elle tourne dans un terminal, sur un poste de travail ou sur un serveur headless auquel vous accédez en SSH.",
        "L’extension d’IDE, pour VS Code, Cursor ou Windsurf, si vous préférez rester dans votre éditeur.",
        "Codex cloud : les tâches tournent sur les serveurs d’OpenAI, donc rien de ce qui vous appartient n’a besoin de rester allumé. Voir [Codex cloud](#cloud) plus bas.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment installer l’application de bureau Codex sous Linux",
      steps: [
        {
          title: "Vérifiez votre distribution et votre architecture",
          text: "La préversion prend en charge Ubuntu 24.04 LTS et 26.04 LTS, Debian 13, Fedora 43 et 44, ainsi qu’un Arch Linux actuel et entièrement à jour. D’autres distributions peuvent fonctionner, mais ne sont pas officiellement prises en charge. Les paquets existent pour x64 et ARM64 : lancez `uname -m` ; `x86_64` signifie x64, et `aarch64` ou `arm64` signifie ARM64.",
          code: "uname -m",
        },
        {
          title: "Téléchargez et installez le paquet",
          text: `Récupérez le paquet correspondant à votre distribution et à votre architecture (voir [le guide d’OpenAI sur l’application Linux](${linuxAppDocs})) et installez-le depuis le dossier où vous l’avez enregistré. Sur Arch, le script d’installation d’OpenAI lance aussi une mise à jour complète du système.`,
          code: appInstall,
        },
        {
          title: "Ouvrez-la et sélectionnez Codex",
          text: "Ouvrez ChatGPT depuis le menu des applications, ou lancez `chatgpt` dans un terminal, connectez-vous et sélectionnez Codex. Sous Wayland, l’application utilise XWayland quand il est disponible ; le Wayland natif est expérimental, et vous pouvez le forcer avec `chatgpt --ozone-platform=wayland`.",
        },
        {
          title: "Gardez-la à jour",
          text: "Les mises à jour passent par votre gestionnaire de paquets.",
          code: appUpdate,
        },
        {
          title: "Gardez les longs chats actifs",
          text: "Activez Settings > General > Prevent sleep while running, qui existe sur macOS et Linux, pour que les chats locaux continuent pendant que vous êtes loin de l’ordinateur.",
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, application ChatGPT pour Linux", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "Comment installer la CLI Codex sous Linux",
      steps: [
        {
          title: "Lancez le script d’installation",
          text: "La même commande installe et met à jour Codex ; `codex update` applique aussi une mise à jour quand la version installée le permet. Avec Node.js installé, `npm install -g @openai/codex` fonctionne aussi. OpenAI publie des builds Linux pour x86_64 et aarch64.",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "Installez bubblewrap pour le bac à sable",
          text: `Le bac à sable Linux de Codex nécessite \`bubblewrap\`. Sans \`bwrap\` dans le PATH, Codex se rabat sur un utilitaire intégré qui nécessite des user namespaces non privilégiés, et affiche un avertissement au démarrage. Sur Ubuntu 25.04, le bubblewrap empaqueté fonctionne tel quel ; sur Ubuntu 24.04, l’avertissement peut persister tant que vous n’avez pas chargé le profil AppArmor \`bwrap-userns-restrict\` (voir [la documentation d’OpenAI sur le bac à sable](${sandboxingDocs})).`,
          code: bubblewrap,
        },
        {
          title: "Connectez-vous",
          text: "Lancez `codex` et choisissez Sign in with ChatGPT pour utiliser votre forfait, ou connectez-vous avec une clé API, facturée aux tarifs standard de l’API. Codex cloud nécessite la connexion ChatGPT. `codex login status` renvoie 0 une fois que vous êtes connecté.",
        },
        {
          title: "Sur un serveur headless, connectez-vous avec un code d’appareil",
          text: "Sans navigateur sur la machine, choisissez Sign in with Device Code ou lancez `codex login --device-auth`, qui est en bêta. La connexion par code d’appareil doit d’abord être activée, dans vos paramètres de sécurité ChatGPT ou par un administrateur de l’espace de travail. Deux autres méthodes : copier `~/.codex/auth.json` depuis un ordinateur où la connexion par navigateur a fonctionné, en traitant ce fichier comme un mot de passe ; ou rediriger le callback de connexion en SSH et lancer `codex login` sur le serveur.",
          code: headless,
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, CLI Codex", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Pas encore de Computer Use sous Linux",
      text: [
        "Computer Use permet à Codex d’utiliser des applications de bureau en déplaçant le pointeur et en tapant au clavier. Il ne figure pas dans la préversion Linux de l’application de bureau ; le guide Linux d’OpenAI indique qu’une version future l’ajoutera. Pour l’instant, il fonctionne dans l’application de bureau sur macOS et Windows.",
      ],
      points: [
        "Le travail qui se fait dans un terminal tourne quand même sous Linux : Codex y exécute des commandes et modifie des fichiers, dans son bac à sable `bubblewrap`.",
        "Pour les tâches qui nécessitent des applications de bureau, utilisez un Mac ou un PC Windows. Sous Windows, Computer Use prend le contrôle de l’écran pendant qu’il travaille : voir [Codex sous Windows](/blog/codex-windows). Pour un Mac toujours allumé, voir [Codex sur un Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Utiliser une machine Linux depuis l’application de bureau sur un Mac ou un PC",
      text: [
        "La documentation d’OpenAI sur les remote connections ne cite que des ordinateurs Mac et Windows comme hôtes que l’application ChatGPT du téléphone peut contrôler : le contrôle de l’application de bureau Linux depuis le téléphone n’est donc pas documenté. Une machine Linux peut tout de même servir d’hôte SSH : l’application de bureau sur un Mac ou un PC Windows y ouvre des projets, et Codex y exécute des commandes, y lit des fichiers et y écrit des modifications. Vous la pilotez ensuite depuis votre téléphone via ce Mac ou ce PC.",
      ],
      steps: [
        {
          title: "Ajoutez la machine Linux à votre configuration SSH",
          text: "Sur le Mac ou le PC qui fait tourner l’application de bureau, ajoutez un hôte dans `~/.ssh/config`. Codex lit les alias d’hôtes concrets de ce fichier et ignore les entrées qui ne sont que des motifs. Vérifiez que `ssh devbox` fonctionne depuis cet ordinateur. Traitez-le comme n’importe quel accès SSH : clés de confiance, compte aux privilèges minimaux et rien de non authentifié en écoute sur un réseau public ; pour joindre une machine hors de votre réseau, utilisez un VPN ou un outil de réseau maillé.",
          code: sshConfig,
        },
        {
          title: "Installez Codex sur la machine Linux et connectez-vous",
          text: "L’application démarre Codex sur la machine distante en SSH, dans le shell de connexion de l’utilisateur distant : `codex` doit donc s’y trouver dans le PATH. Installez-le avec le script ci-dessus et connectez-vous, avec `codex login --device-auth` sur un serveur headless.",
        },
        {
          title: "Ajoutez l’hôte dans l’application de bureau",
          text: "Allez dans Settings > Connections, ajoutez ou activez l’hôte SSH, et choisissez un dossier de projet dessus. Quand le même dépôt Git est enregistré comme projet des deux côtés, vous pouvez transférer un chat entre votre ordinateur et l’hôte Linux depuis le pied du chat.",
        },
        {
          title: "Contrôlez-le depuis votre téléphone",
          text: "Appairez votre téléphone avec le Mac ou le PC comme décrit dans [le guide du contrôle à distance de Codex](/blog/codex-remote-control). Le téléphone parle à cet ordinateur, qui doit rester allumé, et Codex fait le travail sur la machine Linux. Pour un serveur loué, voir [Codex sur un VPS](/blog/codex-vps).",
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, remote connections", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Ou laissez Codex cloud exécuter la tâche",
      text: [
        `Si vous ne voulez garder aucune machine allumée, [Codex cloud](${cloudDocs}) exécute les tâches sur les serveurs d’OpenAI. Chaque tâche dispose de son propre espace de travail et continue pendant que votre ordinateur dort.`,
      ],
      points: [
        "Lancez une tâche depuis le web ou l’application de bureau avec Work in > Cloud, ou depuis Codex dans l’application mobile ChatGPT. Depuis un terminal Linux, `codex cloud` ouvre un sélecteur de chats cloud, `codex cloud exec` soumet une tâche et `codex cloud list` liste les plus récentes.",
        "Il faut une connexion ChatGPT, et ce n’est pas disponible avec une clé API. Le tableau des forfaits d’OpenAI l’indique pour Plus, Pro, Business et Enterprise.",
        "Une tâche cloud ne voit que son environnement cloud. Les fichiers locaux de votre machine, les processus en cours, les connexions du navigateur et l’accès VPN ne sont pas repris, et un chat ne peut pas lui être transféré depuis votre ordinateur.",
        "Pour une configuration réutilisable, créez un environnement sous Work in > Cloud > Select environment > Create environment, avec un accès complet à l’Internet public ou une liste d’autorisation.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent à Codex sur votre machine Linux",
      text: [
        "L’application de bureau, la CLI et SSH attendent tous que vous lanciez la tâche suivante. Crewmark transforme un chat Codex sur votre machine Linux en employé IA doté d’un rôle, d’objectifs, d’horaires de travail et d’une pulsation : pendant ses horaires, la CLI `crewmark`, qui tourne sous Linux comme sous macOS et Windows, le réveille pour qu’il prenne le ticket suivant sur un tableau partagé. La machine doit rester allumée, ce que fait de toute façon un serveur Linux.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme [ingénieur logiciel](/ai-employees/software-engineer), et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez un chat Codex sur la machine",
          text: "Reliez un chat Codex sur le poste de travail ou le serveur Linux à l’employé via la CLI `crewmark`. Cette conversation devient l’employé. Claude Code fonctionne aussi.",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "En semaine seulement ou tous les jours, dans votre fuseau horaire, avec des horaires qui peuvent dépasser minuit. Pendant ces horaires, la CLI réveille l’employé toutes les 15, 30, 60, 120 ou 240 minutes. Voir [comment rendre Codex proactif](/proactive-codex).",
        },
        {
          title: "Assignez des tickets depuis n’importe quel navigateur",
          text: "Créez et assignez des tickets sur le tableau de crewmark.ai ; en assigner un réveille l’employé. Quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Installer l’application de bureau ChatGPT sous Linux et utiliser Codex" },
  mid: {
    title: "Vous voulez que Codex continue de travailler sous Linux quand vous ne lui envoyez pas de prompt ?",
    text: "Crewmark réveille votre Codex au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Existe-t-il une interface graphique Codex pour Linux ?",
        a: "Oui. L’application de bureau ChatGPT, qui inclut Codex, est en préversion sous Linux pour Ubuntu 24.04 et 26.04, Debian 13, Fedora 43 et 44, et Arch Linux, sur x64 et ARM64. Si vous préférez rester dans un éditeur, l’extension d’IDE Codex fonctionne dans VS Code, Cursor et Windsurf.",
      },
      {
        q: "Comment télécharger l’application de bureau Codex pour Linux ?",
        a: "Téléchargez le paquet .deb (Ubuntu, Debian) ou .rpm (Fedora) correspondant à votre architecture, comme l’explique le guide d’OpenAI sur l’application Linux, et installez-le avec `sudo apt install ./chatgpt_amd64.deb` ou `sudo dnf install ./chatgpt.x86_64.rpm` ; sur Arch, lancez le script `install-arch.sh` d’OpenAI. Ouvrez ensuite ChatGPT, ou lancez `chatgpt`, et sélectionnez Codex.",
      },
      {
        q: "Comment installer la CLI Codex sous Linux ?",
        a: "Lancez `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, ou `npm install -g @openai/codex`. Installez `bubblewrap` pour le bac à sable (`sudo apt install bubblewrap` ou `sudo dnf install bubblewrap`), puis lancez `codex` et connectez-vous.",
      },
      {
        q: "Computer Use de Codex fonctionne-t-il sous Linux ?",
        a: "Pas encore. Computer Use ne figure pas dans la préversion Linux de l’application de bureau, et OpenAI indique qu’une version future l’ajoutera. Aujourd’hui, il est disponible dans l’application de bureau sur macOS et Windows.",
      },
      {
        q: "Comment se connecter à Codex sur un serveur Linux headless ?",
        a: "Activez la connexion par code d’appareil dans vos paramètres de sécurité ChatGPT (ou demandez à l’administrateur de votre espace de travail de le faire), puis lancez `codex login --device-auth`, qui est en bêta. Vous pouvez aussi copier `~/.codex/auth.json` depuis un ordinateur où vous vous êtes connecté, ou vous connecter avec `ssh -L 1455:localhost:1455 user@remote` et lancer `codex login` sur le serveur.",
      },
      {
        q: "Puis-je contrôler Codex sous Linux depuis mon téléphone ?",
        a: "Pas directement : la documentation d’OpenAI ne cite que des ordinateurs Mac et Windows comme hôtes de contrôle à distance. Ajoutez la machine Linux comme hôte SSH dans l’application de bureau ChatGPT sur un Mac ou un PC Windows, puis contrôlez cet ordinateur depuis l’application ChatGPT sur votre téléphone ; Codex tourne sur la machine Linux.",
      },
    ],
  },
  cta: {
    title: "Mettez Codex au travail sur votre machine Linux.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation Codex d’OpenAI (application ChatGPT pour Linux, CLI, connexion, bac à sable, Computer Use, remote connections et Codex cloud) le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI ni à aucune entreprise citée sur cette page, et non approuvé par elles. Codex et ChatGPT sont des marques d’OpenAI.",
};
