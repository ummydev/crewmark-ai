import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ~/.ssh/config sur l’ordinateur qui fait tourner l’application de bureau ChatGPT
Host devbox
  HostName devbox.example.com
  User me

# Vérifiez que ça marche, puis connectez-vous à Codex sur l’hôte distant
ssh devbox
codex   # doit être dans le PATH du shell de connexion de l’utilisateur distant`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Remote Control dans ChatGPT : Codex depuis son téléphone",
    description:
      "Contrôlez Codex sur Mac ou PC Windows depuis l’app ChatGPT : QR code, hôtes SSH, accès 24 h/24 et solutions si le contrôle à distance ne marche pas.",
  },
  breadcrumb: "Codex Remote Control",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex Remote Control : utiliser Codex sur votre ordinateur depuis votre téléphone",
    lead: "Les connexions à distance vous permettent de travailler avec des chats Codex qui tournent sur votre Mac ou PC Windows depuis l’application ChatGPT de votre téléphone. Votre dépôt, vos fichiers, vos identifiants et vos outils restent sur l’ordinateur ; le téléphone envoie les prompts et les approbations et vous montre les résultats. Ce guide explique comment le configurer, ce que vous pouvez faire depuis le téléphone, ce dont l’ordinateur a besoin, comment réparer quand ça ne marche pas, et comment cela se compare aux tâches cloud et à un employé IA qui travaille seul.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est le contrôle à distance de Codex",
      text: [
        "OpenAI parle de remote connections. Un ordinateur qui fait tourner l’application de bureau ChatGPT devient un hôte ; votre téléphone, ou un autre ordinateur, le contrôle. La session utilise les projets, chats, fichiers, identifiants, permissions, plugins et outils locaux de l’hôte : Codex fonctionne exactement comme si vous étiez devant.",
      ],
      points: [
        "Hôtes : l’application de bureau ChatGPT sur macOS et Windows. La documentation d’OpenAI ne mentionne pas Linux comme hôte.",
        "Téléphones : l’application ChatGPT sur iOS et Android, à jour. Ouvrez Codex dans l’application (les anciennes versions l’appellent Remote).",
        "La connexion passe par un relais sécurisé : l’ordinateur n’a pas besoin d’être exposé à Internet.",
        "La configuration se fait dans l’application de bureau ; selon OpenAI, l’accès depuis le téléphone ne peut pas être configuré depuis la CLI Codex ou l’extension d’IDE.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer le contrôle à distance de Codex",
      steps: [
        {
          title: "Activez-le dans l’application de bureau",
          text: "Sur l’ordinateur, ouvrez l’application de bureau ChatGPT et allez dans Settings > Connections > Control this Mac or PC. Sélectionnez Set up ou Add, approuvez l’accès à distance et terminez les éventuelles vérifications. L’application affiche un QR code. Au même endroit, vous pouvez choisir de garder l’ordinateur éveillé.",
        },
        {
          title: "Appairez votre téléphone",
          text: "Scannez le QR code avec votre téléphone ; il ouvre ChatGPT. Confirmez qu’il s’agit du même compte et du même espace de travail, et terminez l’éventuelle étape MFA, SSO ou passkey. L’ordinateur apparaît alors sous Codex. Un QR code appaire un téléphone avec un ordinateur : appairez chaque combinaison voulue.",
        },
        {
          title: "Travaillez depuis le téléphone",
          text: "Démarrez un nouveau chat dans l’un des projets de l’ordinateur ou ouvrez-en un existant. Envoyez des relances, répondez aux questions de Codex, approuvez des commandes, et examinez diffs, résultats de tests, sortie du terminal et captures d’écran. Vous recevez une notification quand une tâche se termine ou a besoin de vous.",
        },
        {
          title: "Optionnel : contrôlez une machine distante en SSH",
          text: "L’application de bureau peut aussi ouvrir des projets sur un hôte SSH. Ajoutez une entrée Host dans ~/.ssh/config, vérifiez que `ssh <alias>` fonctionne, installez Codex sur cet hôte et connectez-vous-y, puis ajoutez l’hôte dans Settings > Connections et choisissez un dossier de projet.",
          code: ssh,
        },
      ],
      source: { label: "Source : documentation d’OpenAI sur les remote connections", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "Ce dont l’ordinateur a besoin",
      points: [
        "Il doit être éveillé, en ligne, connecté au même compte et au même espace de travail, avec l’application de bureau ChatGPT ouverte. La mise en veille coupe l’accès.",
        "Un Mac portable reste joignable écran ouvert et branché sur secteur ; écran fermé, il lui faut un écran externe.",
        "Sous Windows, gardez la session déverrouillée si Codex utilise Computer Use, qui s’exécute au premier plan.",
        "Hors de votre réseau, utilisez un VPN ou un outil de réseau maillé plutôt que d’exposer l’ordinateur à Internet.",
        "L’administrateur de votre espace de travail devra peut-être activer l’accès Remote Control.",
        "Vous ne pouvez pas transférer un chat vers un environnement Codex cloud ; pour cela, lancez plutôt une tâche cloud.",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Le contrôle à distance sous Windows et Linux",
      text: [
        "Les étapes ci-dessus sont les mêmes sur un Mac et sur un PC Windows, puisque les deux peuvent servir d’hôte. C’est sous Linux que les choses diffèrent.",
      ],
      points: [
        "Windows : installez l’application de bureau ChatGPT et activez Settings > Connections > Control this Mac or PC comme ci-dessus. Si Codex utilise Computer Use, il travaille sur le bureau actif : il déplace le pointeur, tape au clavier et passe au premier plan, et il ne peut pas tourner en arrière-plan. Gardez la session Windows déverrouillée et en ligne pendant qu’il travaille, et utilisez votre téléphone pour lancer et suivre le travail pendant que l’écran du PC lui est cédé. La documentation d’OpenAI suggère aussi de faire tourner l’application de bureau dans une machine virtuelle Windows, pour que Computer Use prenne le contrôle de la VM plutôt que de votre bureau. Plus de détails dans [Codex sous Windows](/blog/codex-windows).",
        "L’utilisation verrouillée (locked use), qui permet à une tâche Computer Use lancée depuis votre téléphone de continuer une fois l’ordinateur verrouillé, est réservée à macOS.",
        "Linux : OpenAI ne cite que macOS et Windows comme hôtes ; contrôler un ordinateur Linux depuis votre téléphone n’est donc pas documenté, même si une application de bureau ChatGPT pour Linux est désormais disponible en préversion. Ce qui fonctionne, c’est une machine Linux comme hôte SSH : l’application de bureau sur un Mac ou un PC Windows ouvre des projets dessus, et votre téléphone contrôle ce Mac ou ce PC. Plus de détails dans [Codex sous Linux](/blog/codex-linux) et [Codex sur un VPS](/blog/codex-vps).",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Le contrôle à distance de Codex ne fonctionne pas ?",
      points: [
        "L’ordinateur n’apparaît pas sur le téléphone : vérifiez que l’application de bureau tourne, que « Allow other devices to connect » est activé, que les deux applications utilisent le même compte et le même espace de travail, et qu’elles sont à jour. Les appairages inutilisés depuis le 8 juin 2026 doivent être refaits.",
        "Remote Control s’est désactivé après une reconnexion : se déconnecter le désactive mais conserve l’appairage. Réactivez Remote Control.",
        "Une erreur après avoir sélectionné Add : redémarrez l’application de bureau sur l’ordinateur et réessayez.",
        "Aucune demande d’approbation n’arrive : ouvrez Codex dans l’application, vérifiez le compte et l’espace de travail, scannez à nouveau le QR code et demandez à votre administrateur de confirmer l’accès Remote Control.",
        "La connexion se coupe sans cesse : l’ordinateur s’est mis en veille, a perdu le réseau ou a fermé l’application. Gardez-le éveillé et connecté.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Contrôle à distance, tâches cloud ou employé IA ?",
      text: [
        "Le contrôle à distance est une fenêtre sur Codex dans votre ordinateur : il attend que vous lui disiez quoi faire ensuite. Les deux autres options continuent de travailler sans vous.",
      ],
      headers: ["", "Qui lance le travail", "Où il tourne", "Ordinateur allumé ?", "Idéal pour"],
      rows: [
        ["Contrôle à distance", "Vous, depuis le téléphone", "Votre Mac ou PC Windows", "Oui, éveillé et en ligne", "Diriger le travail local quand vous êtes loin du bureau"],
        ["Tâche Codex Cloud", "Vous, une fois", "Le cloud d’OpenAI", "Non", "Confier une tâche qui n’a besoin que d’un dépôt"],
        ["Employé IA Crewmark", "Une pulsation, pendant les horaires de travail", "Votre ordinateur, dans votre propre Codex", "Oui", "Un poste permanent : l’issue suivante sur un tableau, à chaque service"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Jetez un œil depuis votre téléphone, laissez-le travailler seul",
      text: [
        "Avec le contrôle à distance, c’est toujours vous qui décidez de chaque étape suivante. Crewmark transforme votre Codex en employé IA doté d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation : il se réveille selon un planning, prend l’issue suivante sur un tableau et vous écrit quand il a besoin d’une décision. Le contrôle à distance devient alors votre façon de jeter un œil depuis votre téléphone.",
      ],
      steps: [
        {
          title: "Recrutez un employé sur votre Codex",
          text: "Lancez la commande d’installation dans un chat Codex ; ce chat devient l’employé et garde sa mémoire d’un réveil à l’autre. Voir [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Donnez-lui des horaires de travail et une pulsation",
          text: "Pendant son service, la CLI crewmark place un message dans le même chat Codex toutes les 15 à 240 minutes pour qu’il prenne sa prochaine issue. Voir [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Jetez un œil depuis votre téléphone quand vous voulez",
          text: "Ouvrez le chat de l’employé depuis Codex dans l’application ChatGPT pour le suivre ou le diriger, ou répondez simplement à ses messages. Pour la version Claude Code, voir [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "Avec Crewmark",
      title: "Ce qu’apporte Crewmark",
      text: [
        "Le contrôle à distance vous permet de joindre Codex de n’importe où, mais Codex ne travaille toujours que quand vous le lui demandez. Crewmark fait du Codex installé sur votre ordinateur un employé IA doté de son propre poste, et vous donne un tableau sur crewmark.ai pour le suivre depuis votre téléphone.",
      ],
      steps: [
        {
          title: "Un rôle et un objectif chiffré",
          text: "Chaque employé est un chat Codex sur votre ordinateur, avec un rôle, par exemple ingénieur logiciel ou spécialiste SEO, ainsi que des KPI et des projets. Il les relit avec `crewmark me` : chaque réveil part donc de son poste, et non d’un prompt vide. Voir les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Des horaires de travail et une pulsation",
          text: "Choisissez ses horaires, en semaine seulement ou tous les jours, dans votre fuseau horaire ; ils peuvent dépasser minuit. Pendant ces horaires, la CLI `crewmark` réveille le même chat Codex toutes les 15 minutes à 24 heures, pour qu’il reprenne là où il s’était arrêté.",
        },
        {
          title: "Il continue d’avancer sur ses issues",
          text: "À chaque réveil, il prend les issues qui lui sont assignées sur le tableau, travaille dessus et tient leur statut à jour. Quand il a besoin d’une revue, d’une permission ou d’une information, il passe l’issue en Needs action et vous pose la question sur l’issue.",
        },
        {
          title: "Parlez-lui depuis votre téléphone",
          text: "Ouvrez crewmark.ai dans le navigateur de votre téléphone et écrivez à l’employé dans son Work log. Le message arrive dans son chat Codex sur votre ordinateur, et il y répond.",
        },
        {
          title: "Une équipe sur un seul tableau",
          text: "Recrutez d’autres employés aux rôles différents. Ils partagent un même tableau, s’assignent des issues, commentent et se @mentionnent, et chacune de ces actions réveille l’employé concerné. Pour la planification intégrée à Codex et ce qui la distingue d’une pulsation, voir [Codex proactif](/proactive-codex).",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "Le contrôle à distance de l’application ChatGPT ou Crewmark",
      text: [
        "L’application ChatGPT couvre déjà beaucoup de choses depuis votre téléphone : vous pouvez démarrer de nouveaux chats dans les projets de votre ordinateur, poursuivre les anciens, répondre aux questions, approuver des commandes, examiner diffs et résultats de tests, et recevoir une notification quand une tâche se termine ou a besoin de vous. Crewmark sert au travail qui doit continuer quand ce n’est pas vous qui le lancez.",
      ],
      headers: ["", "Contrôle à distance de l’application ChatGPT", "Crewmark"],
      rows: [
        ["Ce que c’est", "L’application ChatGPT sur votre téléphone qui contrôle des chats Codex sur votre Mac ou PC Windows", "Une équipe d’employés IA, chacun étant un chat Codex ou Claude Code sur votre ordinateur, avec un tableau sur crewmark.ai"],
        ["Qui lance le travail", "Vous : démarrer un chat ou envoyer une relance depuis votre téléphone", "Une pulsation pendant les horaires de travail, ou une issue que quelqu’un assigne"],
        ["Depuis votre téléphone", "Démarrer et poursuivre des chats, approuver des actions, examiner diffs, résultats de tests et captures d’écran, recevoir des notifications", "Écrire à un employé dans son Work log, créer et assigner des issues, répondre quand une issue a besoin d’une action"],
        ["Quand vous ne répondez plus", "Codex termine la tâche, vous prévient et attend votre prochain prompt", "L’employé passe à son issue suivante et pose la question sur l’issue quand il est bloqué"],
        ["Suivi", "Des chats dans les projets de l’hôte", "Un tableau d’issues avec statuts, priorités, commentaires et KPI"],
        ["Une équipe d’agents", "Vous passez vous-même d’un hôte et d’un chat à l’autre", "Plusieurs employés aux rôles différents sur un même tableau, qui s’assignent des issues et se @mentionnent"],
        ["Objectif et horaires", "Aucun, au-delà du chat", "Un objectif chiffré et des horaires de travail pour chaque employé"],
        ["Tourne sur", "Votre Mac ou PC Windows, avec votre forfait ChatGPT", "Votre ordinateur, dans votre propre Codex ou Claude Code, avec le forfait que vous payez déjà"],
        ["Édité par", "OpenAI", "Crewmark (sans lien avec OpenAI)"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "Joindre Codex 24 h/24, 7 j/7, de n’importe où",
      text: [
        "Le contrôle à distance ne peut joindre qu’un hôte éveillé, en ligne, connecté et sur lequel tourne l’application de bureau ChatGPT. S’il se met en veille, perd le réseau ou si l’application se ferme, votre téléphone ne peut plus le joindre jusqu’à son retour, et choisir Sleep vous-même coupe aussi l’accès. Pour un travail de longue durée, OpenAI suggère un Mac ou PC Windows dédié et toujours allumé, sur lequel vos projets, identifiants et outils sont installés. Deux configurations vous en donnent un, et Codex cloud est une troisième option :",
      ],
      points: [
        "Un Mac mini à la maison comme hôte. Empêchez-le de se mettre en veille, faites-y tourner l’application de bureau ChatGPT avec le contrôle à distance activé, et appairez votre téléphone avec lui. Comme c’est un Mac, il peut aussi exécuter Computer Use et des tâches dans le navigateur via l’extension Chrome, et avec l’utilisation verrouillée, une tâche Computer Use peut continuer une fois le Mac verrouillé. Voir [comment configurer Codex sur un Mac mini](/blog/codex-mac-mini).",
        "Un serveur Linux comme hôte SSH. Installez la CLI Codex sur le serveur et connectez-vous-y, puis ajoutez-le sous Settings > Connections dans l’application de bureau ; les chats dans ses projets exécutent des commandes et modifient des fichiers sur le serveur. Votre téléphone se connecte toujours au Mac ou PC Windows qui fait tourner l’application de bureau, et non au serveur : cet ordinateur doit donc lui aussi rester allumé. Un Mac mini à la maison peut être cet hôte. Voir [comment faire tourner Codex sur un VPS](/blog/codex-vps).",
        "Codex cloud. Dans l’application ChatGPT, ouvrez Codex et choisissez Cloud et un environnement. La tâche tourne dans le cloud d’OpenAI et continue pendant que votre ordinateur dort, mais elle ne voit que ce qui se trouve dans son environnement cloud : vos fichiers locaux, vos processus en cours, vos connexions dans le navigateur et votre accès VPN n’y sont pas. Un chat sur votre ordinateur ne peut pas non plus lui être transféré.",
        "Les employés Crewmark tournent eux aussi sur votre propre ordinateur : la même règle s’applique. Sur un Mac mini ou un serveur toujours allumé, leurs horaires de travail peuvent couvrir tous les jours et dépasser minuit.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer le contrôle à distance de Codex" },
  mid: {
    title: "Vous voulez que Codex continue de travailler quand vous ne le dirigez pas ?",
    text: "Crewmark réveille votre Codex au rythme d’une pulsation pendant les horaires de travail et lui confie l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur le contrôle à distance de Codex",
    items: [
      {
        q: "Qu’est-ce que le contrôle à distance de ChatGPT ?",
        a: "C’est ainsi que beaucoup appellent les connexions à distance d’OpenAI : l’application ChatGPT de votre téléphone, ou un autre Mac ou PC Windows, contrôle des chats Codex qui tournent dans l’application de bureau ChatGPT d’un ordinateur hôte. L’hôte fait le travail ; le téléphone envoie les prompts et les approbations.",
      },
      {
        q: "Comment activer le contrôle à distance dans ChatGPT ?",
        a: "Sur l’ordinateur hôte, ouvrez l’application de bureau ChatGPT, allez dans Settings > Connections > Control this Mac or PC et sélectionnez Set up ou Add, puis scannez le QR code avec l’application ChatGPT de votre téléphone. L’hôte doit être un Mac ou PC Windows qui reste éveillé.",
      },
      {
        q: "Peut-on contrôler Codex depuis son téléphone ?",
        a: "Oui. Activez Settings > Connections > Control this Mac or PC dans l’application de bureau ChatGPT, scannez le QR code avec votre téléphone, et l’ordinateur apparaît sous Codex dans l’application ChatGPT, sur iOS ou Android.",
      },
      {
        q: "Peut-on contrôler la CLI Codex à distance ?",
        a: "L’accès depuis le téléphone ne se configure que dans l’application de bureau ChatGPT ; selon OpenAI, il ne peut pas être configuré depuis la CLI ou l’extension d’IDE. La CLI dispose bien d’une commande expérimentale `codex remote-control` (start, stop, pair), qu’OpenAI décrit pour des clients de contrôle à distance gérés et des workflows SSH, mais la documentation ne décrit pas l’appairage d’un téléphone avec une machine qui n’a que la CLI. Pour atteindre une machine sur laquelle vous travaillez via un terminal, ajoutez-la comme hôte SSH dans l’application de bureau, avec Codex installé et connecté dessus.",
      },
      {
        q: "Le contrôle à distance de Codex fonctionne-t-il sous Linux ?",
        a: "La documentation cite l’application de bureau sur macOS et Windows comme hôtes et ne mentionne pas Linux. Une machine Linux reste accessible comme hôte SSH depuis l’application de bureau sur Mac ou Windows.",
      },
      {
        q: "Mon ordinateur doit-il rester allumé ?",
        a: "Oui. L’ordinateur doit rester éveillé, en ligne et connecté, avec l’application de bureau ouverte ; la mise en veille coupe l’accès. Pour un travail qui continue ordinateur éteint, utilisez une tâche Codex Cloud.",
      },
      {
        q: "Le contrôle à distance de Codex est-il sûr ?",
        a: "Il passe par un relais sécurisé, l’ordinateur n’est donc pas exposé à l’Internet public, et le bac à sable, les contrôles de sécurité et les approbations de Codex s’appliquent toujours. N’appairez que des appareils qui vous appartiennent et en qui vous avez confiance.",
      },
      {
        q: "Pourquoi le contrôle à distance de Codex ne fonctionne-t-il pas ?",
        a: "En général, l’application de bureau n’est pas ouverte, « Allow other devices to connect » est désactivé, le téléphone est sur un autre compte ou espace de travail, une application n’est pas à jour, ou l’ordinateur s’est mis en veille. Refaites l’appairage avec le QR code si la connexion n’a pas servi depuis le 8 juin 2026.",
      },
      {
        q: "Le contrôle à distance de ChatGPT fonctionne-t-il sous Windows ?",
        a: "Oui. L’application de bureau ChatGPT sous Windows peut servir d’hôte, configurée de la même façon via Settings > Connections > Control this Mac or PC. Si Codex utilise Computer Use, il prend le contrôle du bureau actif : gardez donc la session Windows déverrouillée et en ligne pendant qu’il travaille. Voir [Codex sous Windows](/blog/codex-windows).",
      },
      {
        q: "Peut-on utiliser le contrôle à distance avec Codex cloud ?",
        a: "Ce sont deux choses distinctes. Le contrôle à distance pilote des chats sur votre propre Mac ou PC Windows. Depuis Codex dans l’application ChatGPT, vous pouvez aussi choisir Cloud et un environnement pour lancer une tâche cloud, qui tourne dans le cloud d’OpenAI et continue pendant que votre ordinateur dort, mais ne voit ni vos fichiers locaux ni vos connexions dans le navigateur. Un chat sur votre ordinateur ne peut pas être transféré vers un environnement Codex cloud.",
      },
      {
        q: "Le contrôle à distance de ChatGPT fonctionne-t-il en SSH ?",
        a: "Oui, via l’application de bureau. Ajoutez le serveur à `~/.ssh/config`, installez Codex dessus et connectez-vous-y, puis ajoutez-le sous Settings > Connections et choisissez un projet distant. Votre téléphone se connecte au Mac ou PC Windows qui fait tourner l’application, laquelle exécute le chat sur le serveur : cet ordinateur doit donc rester allumé. Voir [Codex sur un VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Laissez Codex travailler pendant votre absence, pas seulement répondre quand vous regardez.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après la documentation Codex d’OpenAI (remote connections, mobile, Codex Cloud, CLI) le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenAI ni approuvé par OpenAI. Codex et ChatGPT sont des marques d’OpenAI.",
};
