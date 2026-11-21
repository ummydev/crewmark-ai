import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex sous Windows : app, installation CLI, bac à sable et WSL2",
    description:
      "Téléchargez Codex sous Windows (app ChatGPT ou CLI), lancez-le dans PowerShell avec le bac à sable Windows ou dans WSL2, et réparez un bac à sable en échec.",
  },
  breadcrumb: "Codex sous Windows",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex sous Windows : installer l’application ou la CLI, puis choisir le bac à sable ou WSL2",
    lead: "Codex tourne nativement sous Windows. Depuis le 9 juillet 2026, l’application Codex fait partie de l’application de bureau ChatGPT : vous installez donc ChatGPT et passez à Codex à l’intérieur ; pour le terminal, la CLI Codex s’installe avec une seule commande PowerShell. Par défaut, l’agent tourne dans PowerShell sous le bac à sable Windows, et vous pouvez le faire passer dans WSL2. Ce guide couvre le téléchargement et l’installation, les trois types de bac à sable et la version de Windows requise par chacun, les solutions documentées quand la configuration du bac à sable échoue, Computer Use, et le contrôle d’un PC Windows depuis votre téléphone.",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Quel Codex installer sous Windows",
      points: [
        "L’application de bureau ChatGPT, si vous voulez une fenêtre. Codex y a sa propre vue de code à côté de Chat et Work, avec worktrees, tâches planifiées, Git, un navigateur intégré, aperçus de fichiers, plugins et skills. L’application est disponible avec tous les forfaits ChatGPT, y compris Free.",
        "La CLI Codex, si vous travaillez dans un terminal. Elle s’installe nativement avec un script PowerShell, ou avec npm.",
        "L’extension d’IDE, si vous travaillez dans un éditeur. OpenAI la cite à côté de l’application et de la CLI comme moyen d’utiliser Codex nativement sous Windows.",
        "Windows 11 est recommandé. Un Windows 10 récent et entièrement à jour est pris en charge sans garantie et nécessite la version 1809 ou ultérieure, pour ConPTY ; un Windows 10 plus ancien n’est pas recommandé. `winget` doit être disponible.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment télécharger et installer Codex sous Windows",
      steps: [
        {
          title: "Téléchargez l’application de bureau ChatGPT",
          text: "Récupérez-la via le lien Microsoft Store de [la page d’OpenAI sur l’application Windows](https://learn.chatgpt.com/docs/windows/windows-app), ou installez-la avec winget depuis PowerShell. Ouvrez ChatGPT, connectez-vous et sélectionnez Codex.",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "Ou installez la CLI Codex",
          text: "Ouvrez une nouvelle fenêtre PowerShell et lancez le programme d’installation d’OpenAI ; le relancer met Codex à jour. Avec Node.js installé, vous pouvez utiliser npm à la place. Depuis la CLI, `codex app` ouvre l’application de bureau, en l’installant si besoin, et `/app` y transfère la session en cours.",
          code: cliInstall,
        },
        {
          title: "Connectez-vous",
          text: "Au premier lancement, choisissez Sign in with ChatGPT pour utiliser votre forfait, ou connectez-vous avec une clé API, facturée aux tarifs standard de l’API. Codex cloud nécessite la connexion ChatGPT. `codex login status` renvoie 0 une fois que vous êtes connecté.",
        },
        {
          title: "Installez les outils que Codex appellera",
          text: "Codex utilise ce qui est installé sur le PC. OpenAI suggère Git, Node.js, Python, le SDK .NET et la CLI GitHub, tous via winget, puis de vous connecter à GitHub.",
          code: tools,
        },
        {
          title: "Choisissez où tourne l’agent",
          text: "Par défaut, l’agent tourne nativement dans PowerShell sous le bac à sable Windows. Pour le faire tourner dans WSL2, ouvrez Settings, passez l’agent de Windows native à WSL et redémarrez l’application. Dans les deux modes, sélectionnez Ask for approval sous la zone de saisie pour bénéficier de la protection du bac à sable. Pour les commandes qui nécessitent des droits d’administrateur, lancez l’application avec Run as administrator ; l’agent en hérite. Le terminal intégré peut être PowerShell, Command Prompt, Git Bash ou WSL.",
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, application Windows", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "PowerShell natif ou WSL2 ?",
      text: [
        "OpenAI conseille d’utiliser le bac à sable natif par défaut, et de choisir WSL2 quand vous avez besoin d’outils natifs Linux, que vous travaillez déjà dans WSL2, ou que les options natives ne conviennent pas à votre configuration. WSL1 n’est plus pris en charge : il fonctionnait jusqu’à Codex 0.114, et depuis la 0.115, le bac à sable Linux utilise `bubblewrap` et la prise en charge de WSL1 a pris fin.",
      ],
      headers: ["", "Natif (PowerShell)", "WSL2"],
      rows: [
        ["Bac à sable", "Le bac à sable Windows : MXC, elevated ou unelevated", "Le bac à sable Linux, qui nécessite `bubblewrap`"],
        ["Installer la CLI", "Programme d’installation PowerShell ou npm", "`wsl --install` depuis un PowerShell administrateur, puis le script d’installation Linux dans WSL"],
        ["Dans l’application de bureau", "Par défaut", "Settings : passez l’agent à WSL, puis redémarrez l’application"],
        ["Où garder les projets", "Sur le disque Windows ; WSL peut y accéder via `/mnt/<drive>/...`", "Dans le répertoire personnel Linux, par exemple `~/code`, pas `/mnt/c`, pour la vitesse"],
        ["Codex home", "`%USERPROFILE%\\.codex`", "Le répertoire personnel Linux, sauf si vous faites pointer `CODEX_HOME` vers le dossier Windows"],
        ["Quand le choisir", "Par défaut", "Outils natifs Linux, ou un workflow déjà dans WSL2"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "Comment faire tourner Codex dans WSL2",
      steps: [
        {
          title: "Installez WSL2, puis Codex à l’intérieur",
          text: "Depuis un PowerShell administrateur, lancez `wsl --install`, puis `wsl` pour ouvrir le shell Linux. À l’intérieur, installez `bubblewrap` pour le bac à sable (`sudo apt install bubblewrap` ou `sudo dnf install bubblewrap`), lancez le script d’installation Linux et démarrez `codex`.",
          code: wslInstall,
        },
        {
          title: "Gardez les dépôts dans le répertoire personnel Linux",
          text: "Clonez dans un dossier comme `~/code` plutôt que sous `/mnt/c`, qui est plus lent. Si VS Code dans WSL ne trouve pas Codex, vérifiez où il se trouve avec `which codex`.",
        },
        {
          title: "Partagez les réglages avec l’application Windows",
          text: "L’application Windows garde son Codex home dans `%USERPROFILE%\\.codex`, tandis qu’une CLI dans WSL utilise le répertoire personnel Linux. Pour n’en partager qu’un, définissez `CODEX_HOME` dans WSL sur le dossier Windows.",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "Ouvrez des projets WSL dans l’application de bureau",
          text: "Choisissez Add new project (ou appuyez sur Ctrl+O) et tapez `\\\\wsl$\\`. Si l’agent reste natif, il est plus fiable de garder les projets sur le disque Windows et d’y accéder depuis WSL via `/mnt/<drive>/...`.",
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, Windows et WSL", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Le bac à sable Windows de Codex : MXC, elevated et unelevated",
      text: [
        "Le bac à sable Windows permet à Codex de tourner nativement dans PowerShell, sans WSL ni machine virtuelle, tout en limitant ce que ses commandes et leurs processus enfants peuvent toucher sur le disque et sur le réseau. Il existe en trois implémentations. L’application de bureau choisit MXC automatiquement pour les comptes grand public sur les appareils qui le prennent en charge.",
      ],
      headers: ["Bac à sable", "Fonctionnement", "Configuration", "Version de Windows"],
      rows: [
        [
          "`mxc` (recommandé)",
          "Microsoft Execution Containers",
          "Aucune configuration à faire approuver par un administrateur, aucun compte Windows supplémentaire, aucune règle de pare-feu",
          "Windows 11 24H2 (build 26100.9278) ou 25H2 (build 26200.9278) ; Microsoft est encore en train de le déployer sur Windows 11",
        ],
        [
          "`elevated` (ancien, le repli à privilégier)",
          "Des utilisateurs de bac à sable dédiés aux privilèges réduits et des règles de pare-feu ; les commandes du bac à sable tournent sans droits d’administrateur",
          "Nécessite qu’un administrateur approuve sa configuration",
          "Aucune exigence propre dans la documentation ; les recommandations générales s’appliquent (Windows 11 recommandé, Windows 10 1809 ou ultérieur sans garantie)",
        ],
        [
          "`unelevated` (ancien repli)",
          "Isolation réseau plus faible, et aucun chemin interdit en lecture",
          "La documentation le suggère comme solution d’attente quand la configuration de l’ancien bac à sable échoue",
          "Aucune exigence propre dans la documentation ; mêmes recommandations générales",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Configuration du bac à sable Windows de Codex",
      steps: [
        {
          title: "Vérifiez si MXC fonctionne sur votre PC",
          text: "Avec la CLI Codex 0.162.0 ou ultérieure, lancez ce test. Il doit afficher `MXC_OK` et se terminer avec le code 0.",
          code: mxcTest,
        },
        {
          title: "Privilégiez MXC dans la CLI",
          text: "L’application de bureau privilégie déjà MXC pour les comptes grand public. Pour la CLI, ou dans un environnement d’entreprise, activez-le dans `config.toml`, dans votre Codex home.",
          code: preferMxc,
        },
        {
          title: "Ou choisissez un ancien bac à sable",
          text: "Là où MXC n’est pas disponible, choisissez `elevated`, ou `unelevated` en dernier recours. Le bac à sable elevated nécessite qu’un administrateur approuve sa configuration. Dans la CLI, la commande `/setup-default-sandbox` lance cette configuration ; elle n’apparaît que sous Windows, quand Codex utilise le bac à sable dégradé à jeton restreint.",
          code: legacy,
        },
        {
          title: "Ou laissez le service informatique le configurer à l’avance",
          text: "Un administrateur peut provisionner le bac à sable elevated pour un autre utilisateur. Pour supprimer plus tard l’ancien bac à sable, lancez `codex sandbox uninstall` en tant qu’administrateur.",
          code: provision,
        },
      ],
      source: { label: "Source : documentation Codex d’OpenAI, bac à sable Windows", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Échec de la configuration du bac à sable Windows de Codex ? Les solutions documentées",
      text: [
        `La [page d’OpenAI sur le bac à sable Windows](${sandboxDocs}) contient une liste de dépannage. Voici ce qu’elle couvre, sous les intitulés mêmes de la documentation.`,
      ],
      points: [
        "« My legacy sandbox setup failed » : les causes habituelles sont une invite UAC ou administrateur refusée, une stratégie qui bloque la création d’utilisateurs et de groupes locaux, la modification du pare-feu ou l’octroi de droits de connexion à l’utilisateur du bac à sable, ou une autre stratégie. Réessayez et approuvez l’invite, demandez au service informatique, ou utilisez le bac à sable `unelevated` en attendant.",
        "« I see Windows error 1385 » : Windows refuse à l’utilisateur du bac à sable le type de connexion dont il a besoin. Les droits de connexion de l’utilisateur du bac à sable font partie de ce qu’une stratégie peut bloquer : sur un PC géré, demandez donc au service informatique. MXC ne crée aucun compte Windows supplémentaire : sous Windows 11 24H2 ou 25H2, il ne dépend donc pas d’un utilisateur de bac à sable.",
        "« Codex switched me to the unelevated sandbox », « Codex warns that some folders are writable by Everyone », « Sandboxed commands cannot reach the network » et « Sandboxing worked before and then stopped » ont chacun leur propre entrée sur cette page.",
        "Pour le diagnostic, lisez `CODEX_HOME/.sandbox/sandbox.log`. N’envoyez jamais à qui que ce soit le dossier `CODEX_HOME/.sandbox-secrets/`.",
        "Vous cherchez « setup didn't finish » ? La documentation d’OpenAI n’a aucune entrée formulée ainsi. Le cas documenté le plus proche est « My legacy sandbox setup failed ».",
        "Si PowerShell refuse d’exécuter npm et affiche `npm.ps1 cannot be loaded because running scripts is disabled on this system.`, la solution courante est `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`.",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Sous Windows, Computer Use prend le contrôle de l’écran",
      text: [
        "Computer Use permet à Codex d’utiliser des applications de bureau en déplaçant le pointeur et en tapant au clavier. Dans l’application de bureau, il est disponible sur macOS et Windows, avec ChatGPT Work et Codex, dans les régions prises en charge. Pour l’activer, ouvrez Settings > Computer use, trouvez Any App sous Control, et sélectionnez Install ou activez l’interrupteur.",
      ],
      points: [
        "Il tourne sur le bureau actif et ne peut pas travailler en arrière-plan. Pendant qu’une tâche tourne, il déplace le pointeur, tape au clavier et fait passer des fenêtres au premier plan : vous ne pouvez donc pas utiliser le PC en même temps.",
        "Pour le laisser travailler pendant votre absence, gardez le PC déverrouillé et en ligne, et suivez-le depuis votre téléphone avec [le contrôle à distance](/blog/codex-remote-control), ou faites tourner l’application de bureau dans une machine virtuelle Windows, pour que Computer Use prenne le contrôle de la VM plutôt que de votre écran.",
        "L’utilisation verrouillée (locked use), qui permet à une tâche de continuer une fois l’ordinateur verrouillé, est réservée à macOS.",
        'Pour enregistrer les approbations d’applications, listez les applications dans `$CODEX_HOME/config.toml` sous `[computer_use.windows]`, par exemple `always_allowed_app_ids = ["mspaint.exe"]`.',
        "Sur tous les systèmes, Computer Use ne peut ni automatiser les applications de terminal ou ChatGPT lui-même, ni se connecter en tant qu’administrateur, ni approuver les demandes de sécurité et de confidentialité.",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "Contrôler Codex sur votre PC Windows depuis votre téléphone",
      text: [
        "Un PC Windows peut servir d’hôte de contrôle à distance, comme un Mac. L’application ChatGPT sur votre téléphone envoie les prompts et les approbations ; le PC exécute les commandes avec ses propres projets, fichiers, identifiants et outils. La configuration complète et les solutions aux problèmes se trouvent dans [le guide du contrôle à distance de Codex](/blog/codex-remote-control).",
      ],
      points: [
        "Sur le PC, ouvrez l’application de bureau ChatGPT et allez dans Settings > Connections > Control this Mac or PC, puis sélectionnez Set up ou Add. Scannez le QR code avec votre téléphone (iOS ou Android).",
        "Le PC apparaît alors sous Codex dans l’application ChatGPT. Les anciennes versions de l’application l’appellent Remote.",
        "Gardez le PC éveillé, en ligne, connecté et avec l’application de bureau ouverte ; s’il se met en veille ou perd le réseau, l’accès à distance s’arrête jusqu’à son retour. Pour les tâches qui utilisent Computer Use, gardez la session Windows déverrouillée.",
        "Le tableau des forfaits d’OpenAI indique le contrôle à distance mobile pour Plus, Pro, Business et Enterprise, pas pour une connexion par clé API. Dans un espace de travail ChatGPT, un administrateur devra peut-être d’abord activer l’accès Remote Control.",
        "Le PC peut aussi ouvrir des projets sur un serveur Linux comme hôte SSH : votre téléphone pilote alors Codex sur le serveur via le PC. Voir [Codex sur un VPS](/blog/codex-vps) et [Codex sous Linux](/blog/codex-linux). Pour un Mac toujours allumé, voir plutôt [Codex sur un Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent à Codex sur votre PC",
      text: [
        "Le contrôle à distance et Computer Use attendent toujours que vous lanciez chaque tâche. Crewmark transforme un chat Codex sur votre PC Windows en employé IA doté d’un rôle, d’objectifs, d’horaires de travail et d’une pulsation : pendant ses horaires, la CLI `crewmark`, qui tourne sous Windows comme sous macOS et Linux, le réveille pour qu’il prenne le ticket suivant sur un tableau partagé. Pour cela, le PC doit rester allumé.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme [ingénieur logiciel](/ai-employees/software-engineer), et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez un chat Codex sur le PC",
          text: "Reliez un chat Codex sur le PC à l’employé via la CLI `crewmark`. Cette conversation devient l’employé. Claude Code fonctionne aussi.",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "En semaine seulement ou tous les jours, dans votre fuseau horaire, avec des horaires qui peuvent dépasser minuit. Pendant ces horaires, la CLI réveille l’employé toutes les 15, 30, 60, 120 ou 240 minutes. Voir [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Assignez des tickets de n’importe où",
          text: "Créez et assignez des tickets sur le tableau de crewmark.ai depuis n’importe quel navigateur ; en assigner un réveille l’employé. Quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Télécharger et installer Codex sous Windows" },
  mid: {
    title: "Vous voulez que Codex continue de travailler sur votre PC quand vous ne lui envoyez pas de prompt ?",
    text: "Crewmark réveille votre Codex au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Comment télécharger l’application Codex sous Windows ?",
        a: "Codex fait partie de l’application de bureau ChatGPT. Installez-la via le lien Microsoft Store de la page d’OpenAI sur l’application Windows, ou lancez `winget install --id 9PLM9XGG6VKS -s msstore` dans PowerShell, puis ouvrez ChatGPT et sélectionnez Codex. L’application est disponible avec tous les forfaits ChatGPT, y compris Free.",
      },
      {
        q: "Comment installer la CLI Codex sous Windows ?",
        a: 'Ouvrez une nouvelle fenêtre PowerShell et lancez `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`, ou `npm install -g @openai/codex` si vous avez Node.js. Lancez ensuite `codex` et connectez-vous avec ChatGPT ou une clé API. Relancer le programme d’installation met Codex à jour.',
      },
      {
        q: "Codex sous Windows a-t-il besoin de WSL ?",
        a: "Non. Codex tourne nativement dans PowerShell sous le bac à sable Windows, dans l’application de bureau, la CLI et l’extension d’IDE. WSL2 est optionnel, pour des outils natifs Linux ou un workflow déjà dans WSL2. WSL1 n’est plus pris en charge depuis Codex 0.115.",
      },
      {
        q: "Qu’est-ce que le bac à sable Windows de Codex ?",
        a: "Il limite ce que les commandes de Codex peuvent toucher sur le disque et sur le réseau pendant qu’elles tournent nativement sous Windows. MXC est l’implémentation recommandée et nécessite Windows 11 24H2 ou 25H2 ; `elevated` et `unelevated` sont d’anciennes solutions de repli. L’application de bureau choisit MXC automatiquement pour les comptes grand public sur les appareils compatibles.",
      },
      {
        q: "Pourquoi la configuration du bac à sable Windows de Codex a-t-elle échoué ?",
        a: "La documentation d’OpenAI ne contient aucun message « setup didn't finish ». Pour un échec de configuration de l’ancien bac à sable, elle cite une invite UAC ou administrateur refusée, ou une stratégie qui bloque les utilisateurs et groupes locaux, les modifications du pare-feu ou les droits de connexion de l’utilisateur du bac à sable. Réessayez et approuvez l’invite, demandez au service informatique, ou utilisez `unelevated` en attendant. L’erreur Windows 1385 signifie que l’utilisateur du bac à sable s’est vu refuser le type de connexion dont il a besoin.",
      },
      {
        q: "Puis-je contrôler Codex sur un PC Windows depuis mon téléphone ?",
        a: "Oui. Dans l’application de bureau ChatGPT sur le PC, allez dans Settings > Connections > Control this Mac or PC, scannez le QR code avec l’application ChatGPT sur iOS ou Android, et gardez le PC éveillé, en ligne et connecté. Gardez-le déverrouillé pour les tâches qui utilisent Computer Use.",
      },
    ],
  },
  cta: {
    title: "Mettez Codex au travail sur votre PC.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation Codex d’OpenAI (application Windows, bac à sable Windows, WSL, CLI, connexion, Computer Use et remote connections) le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI, Microsoft ni à aucune entreprise citée sur cette page, et non approuvé par elles. Codex et ChatGPT sont des marques d’OpenAI ; Windows est une marque de Microsoft.",
};
