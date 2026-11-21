import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code sur Mac mini : 24 h/24, piloté depuis votre téléphone",
    description:
      "Claude Code 24 h/24 sur un Mac mini à la maison : gardez-le éveillé, activez Remote Control, pilotez-le du téléphone et accédez à son bureau via Tailscale.",
  },
  breadcrumb: "Claude Code sur un Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code sur un Mac mini : un serveur toujours allumé que vous pilotez depuis votre téléphone",
    lead: "Remote Control vous permet de piloter Claude Code depuis l’application Claude sur votre téléphone, mais seulement tant que l’ordinateur qui le fait tourner est allumé. Donnez-lui donc un ordinateur qui ne s’éteint jamais. Chez Crewmark, on garde un Mac mini à la maison comme serveur toujours allumé : Claude Code y tourne avec Remote Control, le téléphone le pilote, et un MacBook Air accède à son bureau via Tailscale et un bureau à distance. Toutes les données restent sur le Mac mini. C’est la configuration qui, pour nous, fonctionne le mieux aujourd’hui, et voici comment la mettre en place.",
    cta: "Commencer",
    secondary: "Voir les étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Pourquoi Claude Code a besoin d’un ordinateur qui reste allumé",
      text: [
        "Le plus rapide pour commencer, c’est l’ordinateur que vous avez déjà. L’application de bureau Claude intègre Remote Control : sur l’ordinateur que vous voulez piloter, ouvrez Settings, activez Connect new sessions to Remote Control, puis ouvrez la session depuis l’application Claude sur votre téléphone. Claude continue de tourner sur cet ordinateur ; le téléphone n’est qu’une fenêtre ouverte sur lui.",
        "Le hic, c’est que cela ne fonctionne que tant que cet ordinateur est allumé. Fermez le portable, et votre téléphone ne peut plus joindre Claude Code jusqu’à ce qu’il se réveille. Un Mac mini qui reste allumé à la maison lève cette limite, et c’est ce que met en place la suite de ce guide.",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "La configuration en un coup d’œil",
      points: [
        "Un Mac mini à la maison, allumé et réglé pour ne pas se mettre en veille. C’est le serveur : Claude Code, vos dépôts, vos connexions et vos fichiers s’y trouvent.",
        "Claude Code avec Remote Control activé, dans l’application de bureau Claude ou dans la CLI.",
        "L’application Claude sur votre téléphone (iOS ou Android), ou claude.ai/code dans n’importe quel navigateur, pour ouvrir ces sessions de n’importe où.",
        "Tailscale et Screen Sharing, pour ouvrir le bureau du Mac mini depuis un portable comme si vous étiez assis devant.",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Pourquoi un Mac mini plutôt qu’un serveur Linux",
      text: [
        "Un serveur Linux loué reste lui aussi allumé, et cette configuration est décrite dans [Claude Code sur un VPS](/blog/claude-code-vps). Un Mac ajoute ce que Linux ne sait pas faire :",
      ],
      points: [
        "Computer Use, qui permet à Claude d’utiliser les applications et l’écran. Dans la CLI, c’est réservé à macOS. Dans Claude Desktop, c’est une préversion de recherche sur macOS et Windows, avec Pro, Max ou Ultra (pas Team ni Enterprise), et l’application doit être ouverte. Voir [la documentation d’Anthropic sur Computer Use](https://code.claude.com/docs/en/computer-use).",
        "Les applications iOS. Xcode et l’iOS Simulator ne tournent que sur macOS : si Claude Code travaille sur une application iPhone, le serveur doit être un Mac.",
        "L’application de bureau complète. Claude Desktop sous Linux est une bêta pour Ubuntu et Debian, sans Computer Use, Cowork ni dictée.",
        "Vos données chez vous. Dépôts, connexions du navigateur et fichiers restent sur une machine qui vous appartient, et non sur le serveur d’un fournisseur.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer Claude Code sur un Mac mini",
      steps: [
        {
          title: "Gardez le Mac mini éveillé",
          text: "Dans System Settings > Energy, activez Prevent automatic sleeping when the display is off, pour que le Mac mini continue de tourner écran éteint. Activez aussi Wake for network access, qui lui permet de se réveiller pour les services partagés. Voir [les réglages de veille et de réveil d’Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac).",
        },
        {
          title: "Installez Claude Code et connectez-vous",
          text: "Installez l’application de bureau Claude, la CLI Claude Code ou les deux, et connectez-vous avec votre compte Claude. Remote Control nécessite un forfait Pro, Max, Ultra, Team ou Enterprise. Les clés API ne fonctionnent pas avec lui, et sur Team ou Enterprise, un Owner doit d’abord l’activer.",
        },
        {
          title: "Activez Remote Control",
          text: "Dans l’application de bureau, ouvrez Settings > Code (ou Settings > Claude Code) et activez Connect new sessions to Remote Control : chaque nouvelle session pourra alors être ouverte depuis votre téléphone. Pour une seule session, tapez `/remote-control` ou `/rc` dans l’onglet Code. Dans la CLI, mettez `remoteControlAtStartup` à true dans `~/.claude/settings.json`, ou lancez `claude remote-control` comme serveur qui héberge plusieurs sessions à la fois.",
          code: remoteControl,
        },
        {
          title: "Ouvrez-la depuis votre téléphone",
          text: "Ouvrez l’application Claude sur iOS ou Android, ou claude.ai/code dans un navigateur, et choisissez la session. Claude continue de tourner sur le Mac mini ; votre téléphone envoie les messages et affiche les résultats. Si le réseau coupe, Claude Code se reconnecte automatiquement quand le Mac mini est de nouveau en ligne. Les détails de configuration et les solutions aux problèmes se trouvent dans [le guide Remote Control](/remote-claude-code).",
        },
        {
          title: "Mettez le Mac mini et votre portable sur Tailscale",
          text: "Installez Tailscale sur le Mac mini et sur le portable depuis lequel vous travaillerez, et ajoutez-les au même tailnet. Tailscale crée entre vos appareils un réseau privé pair-à-pair, avec des connexions WireGuard chiffrées, et seuls les appareils de votre tailnet peuvent se joindre entre eux. Voir [ce qu’est Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        },
        {
          title: "Activez Screen Sharing",
          text: "Sur le Mac mini, ouvrez System Settings > General > Sharing et activez Screen Sharing. Il ne peut pas être activé en même temps que Remote Management : désactivez d’abord ce dernier s’il est actif. Voir [le guide Screen Sharing d’Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac).",
        },
        {
          title: "Travaillez dessus depuis votre portable",
          text: "Depuis votre portable, connectez-vous avec Screen Sharing au nom ou à l’adresse du Mac mini sur votre tailnet. Vous retrouvez son bureau : connectez-vous à un site web dans son navigateur, ouvrez Xcode et le Simulator, ou regardez ce que fait Claude, depuis chez vous ou n’importe où ailleurs. Chez Crewmark, on travaille ainsi depuis un MacBook Air, et les fichiers ne quittent jamais le Mac mini.",
        },
      ],
      source: { label: "Source : documentation Remote Control d’Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Ce qui le fait tourner, et ce qui l’arrête",
      points: [
        "Le processus Claude Code doit continuer de tourner. Quittez l’application de bureau ou fermez le terminal, et la session passe hors ligne : laissez-les donc ouverts sur le Mac mini.",
        "La veille et les coupures réseau se rattrapent : Claude Code se reconnecte automatiquement quand la machine est de nouveau en ligne. Le mode serveur (`claude remote-control`) est moins patient. Après environ 10 minutes sans réseau, il s’arrête : relancez-le.",
        "Remote Control pilote une session déjà en cours. Il ne lance pas de travail de lui-même : quand une tâche est terminée, Claude attend votre prochain message.",
        "Les demandes de permission et les limites d’usage arrêtent aussi les longues exécutions. [Comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7) couvre les modes de permission, `/goal` et les limites des forfaits.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez un poste permanent au Mac mini toujours allumé",
      text: [
        "Un Mac mini toujours allumé répond chaque fois que vous lui écrivez, et attend quand vous ne le faites pas. Crewmark transforme une conversation Claude Code sur cette machine en employé IA doté d’un rôle, d’objectifs, d’horaires de travail et d’une pulsation : pendant les horaires de travail, la CLI `crewmark` réveille l’employé pour qu’il traite ses tickets sur un tableau partagé. L’ordinateur sur lequel il tourne doit rester allumé, et c’est le cas du Mac mini.",
      ],
      steps: [
        {
          title: "Recrutez un employé",
          text: "Choisissez un rôle parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses objectifs et ses KPI.",
        },
        {
          title: "Connectez Claude Code sur le Mac mini",
          text: "Collez le lien de configuration dans une conversation Claude Code sur le Mac mini. Il installe la CLI `crewmark` et relie cette conversation à l’employé. Codex fonctionne aussi.",
        },
        {
          title: "Fixez les horaires de travail et une pulsation",
          text: "Choisissez les horaires, en semaine seulement ou tous les jours, et la fréquence de réveil de l’employé : toutes les 15, 30, 60, 120 ou 240 minutes. Les horaires peuvent dépasser minuit : sur une machine qui ne se met jamais en veille, une équipe de nuit fonctionne aussi.",
        },
        {
          title: "Assignez des tickets depuis votre téléphone",
          text: "Créez et assignez des tickets sur le tableau de crewmark.ai depuis n’importe quel navigateur ; en assigner un réveille l’employé immédiatement. Il tient à jour le statut de chaque ticket, et quand il a besoin d’une revue ou d’une décision, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions à lui confier se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Claude Code sur un Mac mini comme serveur toujours allumé" },
  mid: {
    title: "Vous voulez que le Mac mini continue de travailler quand vous ne lui écrivez pas ?",
    text: "Crewmark réveille Claude Code au rythme d’une pulsation pendant les horaires que vous fixez et lui confie le ticket suivant sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code peut-il tourner 24 h/24 sur un Mac mini ?",
        a: "Oui, tant que le Mac mini reste éveillé et que le processus Claude Code continue de tourner. Activez Prevent automatic sleeping when the display is off dans System Settings > Energy, laissez l’application de bureau Claude ouverte (ou la CLI en marche), et activez Remote Control pour pouvoir le joindre depuis votre téléphone. Les demandes de permission et les limites d’usage s’appliquent toujours.",
      },
      {
        q: "Comment configurer Claude Code sur un Mac mini ?",
        a: "Gardez le Mac éveillé dans les réglages Energy, installez Claude Code ou l’application de bureau Claude et connectez-vous, activez Connect new sessions to Remote Control (ou lancez `claude remote-control`), puis ouvrez la session dans l’application Claude sur votre téléphone. Ajoutez Tailscale et Screen Sharing pour accéder à son bureau depuis un portable.",
      },
      {
        q: "Comment utiliser Claude Code sur mon Mac mini depuis mon iPhone ?",
        a: "Avec Remote Control. Activez-le pour la session sur le Mac mini, puis ouvrez l’application Claude sur votre iPhone (ou claude.ai/code) et choisissez la session. Claude tourne sur le Mac mini ; le téléphone envoie vos messages et affiche les résultats. Il faut un forfait Pro, Max, Ultra, Team ou Enterprise.",
      },
      {
        q: "Ai-je besoin de Tailscale pour Claude Code ?",
        a: "Pas pour Remote Control : vous ouvrez la session dans l’application Claude. Tailscale sert à joindre le Mac mini lui-même, par exemple son bureau via Screen Sharing depuis un portable. Il place vos appareils sur un réseau privé, un tailnet, où eux seuls peuvent se joindre entre eux.",
      },
      {
        q: "Claude Code peut-il créer des applications iOS sur un Mac mini ?",
        a: "C’est un Mac qui le rend possible : Xcode et l’iOS Simulator ne tournent que sur macOS, et c’est pourquoi cette configuration utilise un Mac mini plutôt qu’un serveur Linux. Faites tourner Claude Code sur le Mac mini dans le dossier du projet de l’application, et ouvrez son bureau via Screen Sharing quand vous voulez voir le Simulator vous-même.",
      },
      {
        q: "Mac mini ou VPS Linux pour Claude Code ?",
        a: "Un VPS Linux suffit quand Claude Code n’a besoin que d’un terminal et d’un navigateur : la CLI tourne sur n’importe quelle distribution et Claude in Chrome fonctionne sous Linux. Choisissez un Mac mini pour Computer Use, pour le développement iOS avec Xcode et le Simulator, ou pour garder vos fichiers sur une machine à la maison. Voir [Claude Code sur un VPS](/blog/claude-code-vps).",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à votre Mac mini.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la documentation Claude Code d’Anthropic (Remote Control, Computer Use, Claude Desktop sous Linux), l’assistance Apple et la documentation de Tailscale le 14 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic, Apple ou Tailscale ni approuvé par eux. Claude et Claude Code sont des marques d’Anthropic ; Mac, Mac mini et Xcode sont des marques d’Apple.",
};
