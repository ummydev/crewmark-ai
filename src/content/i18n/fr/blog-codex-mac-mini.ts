import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex sur Mac mini : le faire tourner 24 h/24 depuis le téléphone",
    description:
      "Codex 24 h/24 sur un Mac mini : installez l’app de bureau ChatGPT et la CLI, gardez le Mac éveillé, activez le contrôle à distance, appairez le téléphone.",
  },
  breadcrumb: "Codex sur un Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex sur un Mac mini : un hôte toujours allumé que vous contrôlez depuis votre téléphone",
    lead: "Le contrôle à distance vous permet d’utiliser Codex depuis l’application ChatGPT sur votre téléphone, mais seulement tant que l’ordinateur qui le fait tourner est éveillé et en ligne. Fermez un portable, et votre téléphone le perd. Pour un travail de longue durée, OpenAI suggère un Mac dédié et toujours allumé, et un Mac mini à la maison fait l’affaire : il reste allumé, garde vos projets, connexions et outils sur une machine qui vous appartient, et peut exécuter Computer Use et des tâches dans le navigateur. Ce guide couvre l’installation de Codex, comment garder le Mac mini éveillé, la configuration du contrôle à distance, l’appairage de votre téléphone et l’accès à son bureau depuis un portable.",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Pourquoi un Mac mini comme hôte Codex",
      text: [
        "Votre téléphone ne fait pas tourner Codex. Il envoie les prompts, les approbations et les relances, et l’hôte fournit tout le reste : projets, chats, fichiers, identifiants, plugins, serveurs MCP, skills, Computer Use, le navigateur et les outils locaux. C’est donc l’hôte qui décide de ce que Codex peut faire depuis votre téléphone, et même s’il est joignable. Un Mac mini qui ne se met jamais en veille fait un bon hôte :",
      ],
      points: [
        "Il reste allumé. Un hôte qui se met en veille, perd le réseau ou ferme l’application coupe l’accès à distance jusqu’à son retour.",
        "Computer Use et les tâches dans le navigateur. L’application de bureau ChatGPT exécute Computer Use sur macOS et Windows ; la préversion Linux ne l’a pas encore. Sous Windows, Computer Use prend le contrôle du bureau actif et a besoin que la session soit déverrouillée. Un Mac dispose de l’utilisation verrouillée (locked use) : une tâche Computer Use lancée depuis votre téléphone peut donc continuer une fois le Mac verrouillé.",
        "Les applications iOS. Xcode et l’iOS Simulator ne tournent que sur macOS : si Codex travaille sur une application iPhone, l’hôte doit être un Mac.",
        "Vos données chez vous. Dépôts, connexions du navigateur et identifiants restent sur une machine qui vous appartient, et les sites web où vous êtes connecté comme les applications de bureau fonctionnent, puisque l’hôte peut y accéder.",
        "Une base pour des serveurs aussi. La même application de bureau peut ajouter des serveurs Linux comme hôtes SSH : le Mac mini peut ainsi être l’ordinateur toujours allumé auquel votre téléphone se connecte pendant que les chats tournent sur un serveur.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Ce qu’il vous faut",
      points: [
        "Un Mac mini que vous pouvez laisser allumé et connecté à Internet.",
        "Un compte ChatGPT avec accès à Codex. Le tableau des forfaits d’OpenAI indique le contrôle à distance mobile sur Plus, Pro, Business et Enterprise ; il n’est pas disponible avec une clé API. Dans un espace de travail ChatGPT, un administrateur devra peut-être d’abord activer l’accès Remote Control.",
        "La dernière version de l’application ChatGPT sur votre téléphone, iOS ou Android, connectée au même compte et au même espace de travail que le Mac mini.",
        "En option, Tailscale sur le Mac mini et sur votre portable, pour accéder au bureau du Mac mini de n’importe où.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer Codex sur un Mac mini",
      steps: [
        {
          title: "Installez l’application de bureau ChatGPT et la CLI Codex",
          text: "Depuis le 9 juillet 2026, Codex se trouve dans l’application de bureau ChatGPT, à côté de Chat et Work. Installez l’application pour macOS, connectez-vous avec le compte et l’espace de travail que vous utilisez sur votre téléphone, et sélectionnez Codex. La CLI Codex est optionnelle, mais pratique quand vous vous connectez en SSH : installez-la avec le script d’OpenAI ou avec Homebrew, lancez `codex` et choisissez Sign in with ChatGPT. `codex app` ouvre l’application de bureau, et l’installe si elle manque.",
          code: install,
        },
        {
          title: "Gardez le Mac mini éveillé",
          text: "Dans System Settings > Energy, activez Prevent automatic sleeping when the display is off, pour que le Mac mini continue de tourner écran éteint ; Wake for network access lui permet de se réveiller pour les services partagés (voir [les réglages de veille et de réveil d’Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)). Ensuite, dans l’application de bureau, activez Settings > General > Prevent sleep while running, pour que les chats locaux continuent pendant votre absence.",
        },
        {
          title: "Activez le contrôle à distance",
          text: "Dans l’application de bureau, ouvrez Settings > Connections > Control this Mac or PC et sélectionnez Set up ou Add. Approuvez l’accès à distance et terminez les éventuelles vérifications ; l’application affiche un QR code. C’est aussi dans Settings > Connections que vous choisissez de garder l’ordinateur éveillé, activez Computer Use, installez l’extension Chrome et gérez les appareils connectés.",
        },
        {
          title: "Appairez votre téléphone",
          text: "Scannez le QR code avec votre téléphone ; il ouvre ChatGPT. Confirmez le compte et l’espace de travail, et terminez l’éventuelle étape MFA, SSO ou passkey. Le Mac mini apparaît alors sous Codex dans l’application ChatGPT (Remote dans les anciennes versions), et vous pouvez démarrer des chats dans ses projets, approuver des commandes et examiner des diffs. Un QR code appaire un téléphone avec un hôte : appairez chaque téléphone que vous utiliserez. Pour le contrôler aussi depuis un portable, utilisez Settings > Connections > Control other devices sur le portable, là où cette option est disponible.",
        },
        {
          title: "Activez Computer Use et l’extension Chrome",
          text: "Pour les tâches dans le navigateur et sur le bureau, l’hôte a besoin des deux. Avec Codex sélectionné, ouvrez Settings > Computer use, trouvez Any App sous Control et sélectionnez Install ou activez l’interrupteur, puis installez l’extension Chrome depuis Settings > Connections. Computer Use n’est disponible que dans certaines régions. Pour qu’une tâche Computer Use lancée depuis votre téléphone puisse tourner pendant que le Mac est verrouillé, activez l’utilisation verrouillée (locked use) dans Settings > Computer Use. Elle installe un plug-in d’autorisation Apple, ne déverrouille que le temps d’un tour Computer Use actif, et reverrouille si quelqu’un utilise le clavier ou le pointeur du Mac mini.",
        },
        {
          title: "Ajoutez des hôtes SSH si votre code se trouve sur un serveur",
          text: "Settings > Connections permet aussi d’ajouter un serveur Linux depuis `~/.ssh/config` comme hôte SSH ; vous choisissez ensuite un dossier de projet dessus. Les chats de ce projet tournent sur le serveur, tandis que votre téléphone continue de se connecter au Mac mini. La configuration est décrite dans [Codex sur un VPS](/blog/codex-vps).",
        },
        {
          title: "Accédez au bureau du Mac mini avec Tailscale et Screen Sharing",
          text: "Installez Tailscale sur le Mac mini et sur votre portable, et ajoutez-les au même tailnet, un réseau privé où seuls vos appareils peuvent se joindre entre eux via des connexions WireGuard chiffrées (voir [ce qu’est Tailscale](https://tailscale.com/kb/1151/what-is-tailscale)). Sur le Mac mini, activez System Settings > General > Sharing > Screen Sharing ; il ne peut pas être activé en même temps que Remote Management. Depuis votre portable, connectez-vous ensuite au nom du Mac mini sur votre tailnet pour vous connecter à des sites web, répondre aux demandes de sécurité ou de confidentialité que Computer Use ne peut pas approuver, ou regarder Codex travailler (voir [le guide Screen Sharing d’Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)).",
        },
      ],
      source: { label: "Source : documentation d’OpenAI sur les remote connections", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Ce qui le garde joignable, et ce qui l’arrête",
      points: [
        "Le Mac mini doit rester éveillé, en ligne et connecté au même compte et au même espace de travail, avec l’application de bureau ouverte. S’il se met en veille, perd le réseau ou si l’application se ferme, votre téléphone ne peut plus le joindre jusqu’à son retour. Choisir Sleep vous-même coupe aussi l’accès.",
        "Se déconnecter de l’application de bureau désactive Remote Control mais conserve vos appairages. Une fois reconnecté, réactivez Remote Control.",
        "Si une erreur apparaît après avoir sélectionné Add, redémarrez l’application de bureau sur le Mac mini et réessayez. Les appairages inutilisés depuis le 8 juin 2026 nécessitent de mettre à jour les deux applications et de refaire l’appairage.",
        "Le contrôle à distance ne lance pas de travail de lui-même. Quand une tâche est terminée, Codex vous prévient et attend votre prochain prompt. Pour les tâches planifiées et d’autres façons de lancer du travail sans vous, voir [Codex proactif](/proactive-codex) et [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        "D’autres solutions se trouvent dans [le guide du contrôle à distance de Codex](/blog/codex-remote-control#troubleshooting).",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "D’autres façons de garder Codex joignable",
      points: [
        "Un serveur Linux comme hôte SSH fait tourner Codex sur le serveur, mais votre téléphone se connecte toujours à un Mac ou PC Windows qui fait tourner l’application de bureau : cet ordinateur doit donc lui aussi rester allumé. Le Mac mini peut jouer ce rôle. Voir [Codex sur un VPS](/blog/codex-vps).",
        "Codex cloud exécute les tâches dans le cloud d’OpenAI et continue de travailler pendant que votre ordinateur dort. Il ne voit que son environnement cloud : vos fichiers locaux, vos connexions dans le navigateur et votre accès VPN n’y sont pas.",
        "Pour Claude Code, la même configuration avec un Mac mini toujours allumé est décrite dans [Claude Code sur un Mac mini](/blog/claude-code-mac-mini), et la version d’Anthropic du contrôle à distance dans [Claude Code Remote Control](/remote-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent au Mac mini toujours allumé",
      text: [
        "Un Mac mini toujours allumé répond chaque fois que vous lui écrivez depuis votre téléphone, et attend quand vous ne le faites pas. Crewmark transforme un chat Codex sur cette machine en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : pendant les horaires de travail, la CLI `crewmark` réveille l’employé pour qu’il traite ses tickets sur un tableau partagé. L’ordinateur sur lequel il tourne doit rester allumé, et c’est le cas du Mac mini.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez Codex sur le Mac mini",
          text: "Collez le lien de configuration dans un chat Codex sur le Mac mini. Il installe la CLI `crewmark` et relie ce chat à l’employé. Claude Code fonctionne aussi.",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "Choisissez les horaires, en semaine seulement ou tous les jours, et la fréquence de réveil de l’employé : toutes les 15, 30, 60, 120 ou 240 minutes. Les horaires peuvent dépasser minuit : sur une machine qui ne se met jamais en veille, une équipe de nuit fonctionne aussi. Chaque réveil arrive dans le même chat Codex, pour qu’il reprenne là où il s’était arrêté.",
        },
        {
          title: "Assignez des tickets et parlez-lui depuis votre téléphone",
          text: "Ouvrez crewmark.ai dans le navigateur de votre téléphone pour créer et assigner des tickets, ou écrivez à l’employé dans son Work log ; il y répond. Assigner un ticket le réveille immédiatement, et quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Codex sur un Mac mini comme hôte toujours allumé" },
  mid: {
    title: "Vous voulez que le Mac mini continue de travailler quand vous ne lui écrivez pas ?",
    text: "Crewmark réveille Codex au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Codex peut-il tourner 24 h/24 sur un Mac mini ?",
        a: "Oui, tant que le Mac mini reste éveillé, en ligne et connecté, avec l’application de bureau ChatGPT ouverte. Activez Prevent automatic sleeping when the display is off dans System Settings > Energy et Prevent sleep while running dans Settings > General de l’application, puis configurez le contrôle à distance pour pouvoir le joindre depuis votre téléphone. Après chaque tâche, Codex attend votre prochain prompt, sauf si autre chose lance le travail.",
      },
      {
        q: "Comment installer Codex sur un Mac mini ?",
        a: "Installez l’application de bureau ChatGPT pour macOS et sélectionnez-y Codex. Pour le terminal, installez la CLI Codex avec `curl -fsSL https://chatgpt.com/codex/install.sh | sh` ou `brew install --cask codex`, puis lancez `codex` et choisissez Sign in with ChatGPT. `codex app` ouvre l’application de bureau et l’installe si elle manque.",
      },
      {
        q: "Comment utiliser Codex sur mon Mac mini depuis mon iPhone ?",
        a: "Dans l’application de bureau sur le Mac mini, ouvrez Settings > Connections > Control this Mac or PC, sélectionnez Set up ou Add, et scannez le QR code avec votre iPhone. Le Mac mini apparaît alors sous Codex dans l’application ChatGPT, où vous pouvez démarrer des chats, approuver des commandes et examiner des diffs. L’application ChatGPT sur Android fonctionne aussi.",
      },
      {
        q: "Quelle est la configuration minimale pour Codex sur un Mac ?",
        a: "Pour la CLI Codex, le guide d’installation d’OpenAI sur GitHub indique macOS 12 ou version ultérieure, avec 4 Go de RAM au minimum et 8 Go recommandés. La documentation d’OpenAI que nous avons consultée ne donne pas de configuration requise distincte pour l’application de bureau ChatGPT. Pour le contrôle à distance, il vous faut aussi l’accès à Codex sur votre compte et la dernière version de l’application ChatGPT sur votre téléphone.",
      },
      {
        q: "Ai-je besoin de Tailscale pour le contrôle à distance de Codex ?",
        a: "Non. Le contrôle à distance passe par le relais sécurisé d’OpenAI : le Mac mini n’est donc pas exposé à l’Internet public. Tailscale sert à joindre le Mac mini lui-même, par exemple son bureau via Screen Sharing, ou en SSH depuis un portable loin de chez vous ; la documentation d’OpenAI recommande un VPN ou un réseau maillé pour joindre des machines hors de votre réseau.",
      },
      {
        q: "Mac mini ou VPS Linux pour Codex ?",
        a: "Un serveur Linux suffit quand Codex n’a besoin que d’un terminal : la CLI tourne sous Linux, et l’application de bureau peut y ouvrir des projets en SSH. Mais votre téléphone se connecte toujours à un Mac ou PC Windows qui fait tourner l’application de bureau : cet ordinateur doit donc être allumé de toute façon. Choisissez un Mac mini pour Computer Use, les tâches dans le navigateur via l’extension Chrome, le développement iOS ou pour garder vos fichiers à la maison. Voir [Codex sur un VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à votre Mac mini.",
    text: "Crewmark transforme des sessions Codex et Claude Code en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation d’OpenAI (remote connections, Computer Use, CLI Codex, réglages, forfaits), l’assistance Apple et la documentation de Tailscale le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI, Apple ou Tailscale ni approuvé par eux. Codex et ChatGPT sont des marques d’OpenAI ; Mac, Mac mini et Xcode sont des marques d’Apple.",
};
