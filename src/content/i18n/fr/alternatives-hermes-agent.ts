import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent : alternatives open source et hébergées en 2026",
    description:
      "Alternatives à Hermes Agent comparées : OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot et Crewmark, avec licence, prix et support Windows.",
  },
  breadcrumb: "Alternatives à Hermes Agent",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Nous Research Hermes Agent",
    title: "Alternatives à Hermes Agent : agents open source, agents de code et Bots hébergés",
    lead: "Hermes Agent est l’agent IA personnel open source (MIT) de Nous Research. Vous l’utilisez depuis un terminal, une application de bureau ou des applications de messagerie ; il écrit des skills à partir de l’expérience, garde sa propre mémoire et exécute des routines grâce à un planificateur cron intégré. Vous le faites tourner vous-même, sur votre machine ou un serveur, sauf si une offre payante du Nous Portal héberge un agent pour vous. L’utiliser avec un abonnement Claude nécessite Claude Max plus de l’usage supplémentaire acheté ; les abonnés Claude Pro ont besoin d’une clé API. Voici sept alternatives, avec leur licence, leur prix et les plateformes sur lesquelles chacune tourne, Windows compris.",
    cta: "Commencer",
    secondary: "Voir la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Hermes Agent en un coup d’œil",
      text: [
        "Informations tirées du README, de la documentation et de la page de tarifs de chaque produit, vérifiées le 13 novembre 2026. Prix en dollars américains. Hermes Agent lui-même est gratuit, plus votre fournisseur de modèles ; les offres Nous Portal sont Plus à $20, Super à $100 et Ultra à $200 par mois. Détails : [tarifs d’Hermes Agent](/pricing/hermes-agent).",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "Un assistant IA personnel qui tourne sur votre propre ordinateur et vous répond dans des applications de messagerie",
          "Oui (MIT)",
          "Gratuit ; aucune offre payante ni service hébergé ; vous payez votre fournisseur de modèles",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Un agent de code pour les modèles de 200+ fournisseurs, y compris des modèles locaux, sous forme d’interface terminal, d’application de bureau, d’application web et de SDK",
          "Oui (MIT)",
          "Gratuit, avec des modèles gratuits (limite quotidienne de requêtes) ; OpenCode Go $10 par mois",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Une application de bureau, « Un collègue IA pour votre travail quotidien » (« An AI coworker for your everyday work »), plus un Harness SDK pour créer des applications agentiques",
          "Oui (MIT)",
          "Aucun prix indiqué ; votre propre clé de modèle ou un modèle local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "L’espace de travail auto-hébergeable de CopilotKit pour collègues IA, où chaque Bot dispose de son propre navigateur, de ses fichiers et de ses outils",
          "Oui (modèle d’application sous MIT ; utilise CopilotKit Intelligence, sous licence distincte)",
          "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "L’agent de code d’Anthropic, dans le terminal, des extensions d’IDE, une application de bureau, le web et le mobile",
          "Non",
          "Forfaits Claude payants, à partir de Pro à $20 par mois ($17 par mois en facturation annuelle)",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "Les coéquipiers IA hébergés de xAI : des Bots qui disposent chacun de leur propre ordinateur dans le cloud",
          "Non",
          "Premium $30 par mois, facturé mensuellement",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un gestionnaire de tickets pour une équipe d’employés IA, chacun étant une conversation Claude Code ou Codex sur votre ordinateur qui se réveille au rythme d’une pulsation",
          "Oui (GPL-3.0)",
          "Gratuit (1 projet, jusqu’à 3 employés IA) ; Pro à $5 par mois bientôt disponible ; usage de l’agent payé à votre fournisseur d’agent",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Alternatives à Hermes Agent pour Windows",
      text: [
        "Hermes Agent lui-même tourne sous Windows en natif (PowerShell) et sous WSL2, et son application de bureau existe pour Windows 10 et 11. Voici ce qu’indique chaque alternative.",
      ],
      headers: ["Produit", "Windows", "Autres plateformes"],
      rows: [
        [
          "Hermes Agent",
          "Windows natif (PowerShell) et WSL2 ; application de bureau pour Windows 10/11 (Microsoft Store ou .exe)",
          "Linux, macOS, Android via Termux ; application de bureau pour macOS 12+ et Linux",
        ],
        [
          "OpenClaw",
          "Installeur pour Windows (PowerShell) et WSL2 ; application Windows native",
          "macOS et Linux ; applications pour macOS, iOS, Android et Linux",
        ],
        [
          "OpenCode",
          "Binaires CLI pour Windows (x64, ARM64) ; application de bureau, marquée bêta. Les gestionnaires de paquets Windows ne sont pas pris en charge",
          "CLI et application de bureau pour macOS et Linux ; application iPhone via TestFlight",
        ],
        [
          "OpenWorker",
          "Windows 10/11 x64 ; les builds ne sont pas encore signés, donc SmartScreen affiche un avertissement",
          "macOS 12+ (Apple silicon) ; aucun téléchargement Linux indiqué",
        ],
        [
          "OpenBot",
          "Application de bureau pour Windows, avec un backend Docker",
          "Application de bureau pour macOS ; Kubernetes pour les équipes",
        ],
        [
          "Claude Code",
          "CLI sous Windows 10 1809+ ou Windows Server 2019+ ; application de bureau pour Windows (x64 et ARM64)",
          "macOS, Linux, web, iOS et Android",
        ],
        [
          "Grok Bot",
          "Les guides de x.ai mentionnent Mac, Windows, Linux et les téléphones ; chaque Bot travaille sur son propre ordinateur cloud",
          "Téléchargement macOS (Apple silicon) sur x.ai/bot ; iOS",
        ],
        ["Crewmark", "CLI `crewmark` sous Windows", "CLI sous macOS et Linux ; application web"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Autres agents personnels open source",
      text: ["Comme Hermes Agent, ils tournent sur du matériel que vous contrôlez, avec les modèles de votre choix."],
      points: [
        "OpenClaw : un assistant sous licence MIT qui tourne comme un Gateway sur votre propre ordinateur et répond dans WhatsApp, Telegram, Slack, Discord, iMessage et d’autres applications de messagerie. Il fait tourner plusieurs agents sur un même Gateway, dispose d’un planificateur Automations intégré et n’a ni offre payante ni service hébergé. Il utilise Claude via une clé API ou en réutilisant une connexion Claude Code sur la même machine. Choisissez-le si vous voulez un assistant à qui écrire depuis vos applications de messagerie habituelles, avec des fournisseurs de modèles interchangeables. Comparé dans [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) ; pour en savoir plus : [alternatives à OpenClaw](/blog/openclaw-alternatives).",
        "OpenWorker : une application de bureau sous licence MIT, sur le compte GitHub d’Andrew Ng, en bêta ouverte pour macOS et Windows. Les actions nécessitent une validation par défaut, chaque appel d’outil est enregistré, et vous pouvez planifier des synthèses matinales et des rapports hebdomadaires ; vous pouvez aussi le mentionner dans Slack, et il répond dans le fil. Choisissez-le si vous voulez un agent sur votre propre machine, avec votre propre clé de modèle ou un modèle local, et la maîtrise des actions qui nécessitent une validation. Guide : [OpenWorker](/personal-agent/openworker).",
        "OpenBot : l’espace de travail auto-hébergeable de CopilotKit pour collègues IA. Chaque Bot a son propre ordinateur (navigateur, fichiers, outils), des routines, une mémoire, des validations et un journal d’activité. Le modèle d’application est sous MIT ; il utilise CopilotKit Intelligence, sous licence distincte (gratuite sur un ordinateur portable, avec une licence pour la production sur Kubernetes). Choisissez-le si vous voulez des collègues IA à auto-héberger et personnaliser, avec vos propres modèles ou des agents construits sur d’autres stacks. Guide : [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Agents de code",
      text: [
        "Si l’essentiel de ce que vous confiez à Hermes Agent est du code, ces agents sont conçus pour cela. Comparatif : [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode : un agent de code sous licence MIT qui fonctionne avec les modèles de 200+ fournisseurs, y compris des modèles locaux. Les modèles gratuits ne nécessitent aucun compte (avec une limite quotidienne de requêtes), OpenCode Go coûte $10 par mois, et vous pouvez aussi vous connecter avec ChatGPT Plus ou Pro ou GitHub Copilot, ou apporter vos propres clés API. Choisissez-le si vous voulez des agents et des subagents personnalisés, définis sous forme de fichiers dans votre dépôt, avec des règles d’autorisation par action. Pour en savoir plus : [alternatives à OpenCode](/blog/opencode-alternatives).",
        "Claude Code : l’agent de code d’Anthropic, avec des subagents, des agent teams expérimentales et des tâches planifiées qui tournent dans le cloud. Il n’est pas open source et est inclus dans les forfaits Claude payants, à partir de Pro à $20 par mois. Choisissez-le si vous payez déjà un forfait Claude : Hermes Agent ne peut utiliser un abonnement Claude qu’avec Max et de l’usage supplémentaire acheté. Voir [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Une option hébergée",
      points: [
        "Grok Bot : les coéquipiers IA hébergés de xAI. Chaque Bot a son propre ordinateur dans le cloud et continue de travailler quand votre ordinateur portable est fermé ; les Bots se connectent à vos outils, travaillent dans Slack, Microsoft Teams et les appels vidéo, exécutent des routines selon un planning et s’envoient des messages. Il n’est pas open source ; les offres commencent à Premium, $30 par mois. Choisissez-le si votre équipe veut des Bots qui travaillent dans ses applications existantes sans faire tourner de serveur. Voir [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) et [alternatives à Grok Bot](/alternatives/grok-bot).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Hermes Agent",
      steps: [
        {
          title: "Vous voulez rester dans l’open source ?",
          text: "OpenClaw, OpenCode et OpenWorker sont sous MIT ; le modèle d’application d’OpenBot est sous MIT, avec un moteur sous licence distincte ; Crewmark est sous GPL-3.0. Claude Code et Grok Bot ne sont pas open source.",
        },
        {
          title: "Sous Windows ?",
          text: "Hermes Agent tourne déjà sous Windows en natif. Parmi les alternatives, OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code et la CLI Crewmark indiquent tous Windows ; voir le tableau ci-dessus pour les versions.",
        },
        {
          title: "Vous payez déjà Claude ?",
          text: "Hermes Agent n’utilise un abonnement Claude qu’avec Max et de l’usage supplémentaire acheté. OpenClaw peut réutiliser une connexion Claude Code sur la même machine, Claude Code est inclus dans les forfaits Claude payants, et Crewmark fait tourner Claude Code sur votre propre abonnement.",
        },
        {
          title: "Vous ne voulez pas gérer de serveur ?",
          text: "Grok Bot est hébergé par xAI. Les offres payantes du Nous Portal d’Hermes Agent incluent un agent hébergé dans le cloud, et CopilotKit héberge OpenBot en accès anticipé.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un agent personnel pour vous. Une équipe d’employés IA pour votre dépôt.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des projets. Il se réveille au rythme d’une pulsation pendant ses horaires de travail, prend des tickets sur un tableau partagé et, quand il a besoin d’une revue ou d’une autorisation, passe le ticket en Needs action et pose la question sur le ticket. Les agents collaborent via les tickets : ils se les assignent, les commentent et se @mentionnent.",
        "Il est open source sous GPL-3.0 et gratuit pour 1 projet avec jusqu’à 3 employés IA. Vous continuez de payer votre fournisseur d’agent comme d’habitude, et votre ordinateur doit rester allumé pour les pulsations. Les offres sont sur la [page tarifs](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses KPI et ses projets.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets à l’employé ou à des personnes, et rendez récurrents ceux qui reviennent chaque jour, chaque semaine ou chaque mois.",
        },
        {
          title: "Définir ses horaires",
          text: "Choisissez des horaires de travail et une pulsation comprise entre 15 minutes et 24 heures. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Faites travailler votre Claude Code ou Codex selon un planning",
    text: "Crewmark réveille votre agent au rythme d’une pulsation pendant les horaires de travail et lui confie le ticket suivant d’un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Hermes Agent",
    items: [
      {
        q: "Quelle alternative open source à Hermes Agent ?",
        a: "OpenClaw, OpenCode et OpenWorker sont sous licence MIT. Le modèle d’application d’OpenBot est sous MIT et utilise CopilotKit Intelligence, sous licence distincte. Crewmark est open source sous GPL-3.0.",
      },
      {
        q: "Existe-t-il une alternative à Hermes Agent pour Windows ?",
        a: "Plusieurs. OpenClaw a un installeur Windows et une application Windows native ; OpenCode a des binaires CLI pour Windows et une application de bureau en bêta ; OpenWorker tourne sous Windows 10/11 x64 (pas encore signé) ; OpenBot a une application de bureau Windows ; Claude Code tourne sous Windows 10 1809 ou version ultérieure. Hermes Agent lui-même tourne aussi sous Windows en natif.",
      },
      {
        q: "Hermes Agent vs OpenClaw : lequel utiliser ?",
        a: "Les deux sont des agents personnels sous licence MIT que vous faites tourner vous-même et joignez depuis des applications de messagerie. Hermes Agent met l’accent sur l’écriture et l’amélioration de ses propres skills et de sa mémoire, et propose des offres Nous Portal payantes facultatives qui incluent un agent hébergé dans le cloud. OpenClaw tourne comme un Gateway local et n’a ni offre payante ni service hébergé. Voir [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      },
      {
        q: "Hermes Agent est-il gratuit ?",
        a: "L’agent est gratuit sous MIT, et vous payez votre fournisseur de modèles. Nous Portal est facultatif : Free à $0 (paiement à l’usage, modèles gratuits uniquement), Plus à $20 par mois, Super à $100 et Ultra à $200. Pour en savoir plus : [tarifs d’Hermes Agent](/pricing/hermes-agent).",
      },
      {
        q: "Puis-je utiliser mon abonnement Claude avec Hermes Agent ou une alternative ?",
        a: "Avec Hermes Agent, uniquement sur Claude Max avec de l’usage supplémentaire acheté ; les abonnés Claude Pro ont besoin d’une clé API. OpenClaw peut réutiliser une connexion Claude Code sur la même machine. Claude Code est inclus dans tous les forfaits Claude payants, et Crewmark fait tourner Claude Code sur votre propre abonnement.",
      },
      {
        q: "Existe-t-il une alternative hébergée à Hermes Agent ?",
        a: "Grok Bot est hébergé par xAI, avec un ordinateur cloud pour chaque Bot, à partir de $30 par mois. Les offres payantes du Nous Portal d’Hermes Agent incluent elles-mêmes un agent hébergé dans le cloud, et CopilotKit héberge OpenBot en accès anticipé.",
      },
    ],
  },
  cta: {
    title: "Donnez à vos agents de code des rôles et un tableau.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Informations vérifiées le 13 novembre 2026 dans le README, la documentation et la page de tarifs de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Nous Research ni avec aucune autre entreprise citée sur cette page, et non approuvé par elles. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
