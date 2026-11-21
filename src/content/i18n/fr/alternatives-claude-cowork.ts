import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork : alternatives gratuites et open source en 2026",
    description:
      "Alternatives à Claude Cowork : ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy, plus OpenWorker, OpenBot et Suparagent en open source, avec les prix.",
  },
  breadcrumb: "Alternatives à Claude Cowork",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Claude Cowork",
    title: "Alternatives à Claude Cowork : les collègues IA d’OpenAI, Microsoft, Google et xAI, et des options open source",
    lead: "Claude Cowork est l’agent d’Anthropic pour le travail hors code dans les applications Claude : vous décrivez un résultat, et il mène la recherche, les documents, les tableurs et les présentations dans vos fichiers, vos applications et un navigateur. Il n’est inclus que dans les forfaits Claude payants, à partir de $20 par mois, et Anthropic indique qu’il consomme les limites du forfait plus vite que le chat. Il tourne sur les modèles Claude et, sur Pro, Max et Ultra, les nouvelles tâches s’exécutent dans le cloud d’Anthropic depuis le 6 octobre 2026, sans réglage pour revenir en arrière. Cette page compare les alternatives d’OpenAI, Microsoft, Google et xAI, un assistant hébergé, des applications open source à faire tourner vous-même et Crewmark, avec ce que coûte chacune.",
    cta: "Commencer",
    secondary: "Les comparer",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Claude Cowork en un coup d’œil",
      text: [
        "Informations tirées des pages, de la documentation ou du GitHub de chaque éditeur, vérifiées le 13 novembre 2026. Prix en dollars américains. Ce n’est pas un classement.",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (pour référence)",
          "L’agent d’Anthropic pour le travail intellectuel hors code dans les applications Claude",
          "Non",
          "Claude Pro $20/mois, ou $17/mois en facturation annuelle ; pas sur Free",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Le mode Work d’OpenAI dans ChatGPT, pour les tâches qui aboutissent à un livrable à relire",
          "Non",
          "Free ($0) et Go ($8/mois) : accès limité, application de bureau uniquement ; Plus $20/mois",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "L’agent de Microsoft pour des tâches en plusieurs étapes dans Microsoft 365",
          "Non",
          "Licence Microsoft 365 Copilot plus Copilot Credits à $0.01 l’unité",
        ],
        [
          "[Tâches Gemini (anciennement Spark)](/personal-agent/gemini-spark)",
          "L’agent d’arrière-plan de Google dans l’application Gemini, qui utilise Gmail, Docs et d’autres applications Google",
          "Non",
          "Google AI Pro $19.99/mois (États-Unis) ; pas d’accès avec l’offre gratuite",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Les coéquipiers IA hébergés de xAI, chacun avec son propre ordinateur cloud",
          "Non",
          "Premium $30/mois",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Un assistant IA hébergé pour la boîte de réception, l’agenda, les réunions et Slack, facturé en crédits",
          "Non",
          "Gratuit : $50 de crédits pendant 7 jours ; ensuite à partir de $29.99/mois par utilisateur actif",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Une application de bureau de collègue IA qui tourne sur votre machine",
          "Oui, MIT",
          "Aucun prix indiqué ; votre propre clé de modèle ou un modèle local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "L’espace de travail auto-hébergeable de CopilotKit pour collègues IA",
          "Oui, MIT (utilise CopilotKit Intelligence, sous licence distincte)",
          "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois",
        ],
        [
          "[Suparagent](/personal-agent/suparagent)",
          "Un espace de travail pour collègues IA sur Claude Code, Codex, Gemini CLI, Cursor et d’autres moteurs",
          "Oui, Apache-2.0",
          "Bureau et auto-hébergé : aucun tarif indiqué ; vous payez votre fournisseur de modèles",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un tableau de tickets pour des employés IA qui tournent comme Claude Code ou Codex sur votre ordinateur",
          "Oui, GPL-3.0",
          "Gratuit (1 projet, jusqu’à 3 employés IA) ; Pro $5/mois bientôt disponible",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Alternatives hébergées d’OpenAI, Microsoft, Google et xAI",
      text: [
        "Ces quatre-là fonctionnent un peu comme Claude Cowork : vous confiez une tâche dans l’application de l’éditeur, et elle s’exécute dans son cloud. Côte à côte : [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI) : un mode Work dans ChatGPT qui planifie une tâche, utilise vos fichiers, des plugins, le web, un navigateur et du code, et renvoie des présentations, des tableurs, des documents ou des analyses. Il partage ses limites d’utilisation avec Codex. Free et Go ont un accès limité à Work dans l’application de bureau ; Plus ($20/mois) et Pro (à partir de $100/mois) y ont accès sur ordinateur, sur le web et sur mobile. Choisissez-le si vous voulez l’alternative d’OpenAI à Claude Cowork, ou un moyen gratuit d’essayer un collègue IA.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft) : exécute des tâches en plusieurs étapes dans Outlook, Teams, Word, Excel, PowerPoint, OneDrive et SharePoint, et affiche une boîte de dialogue de validation avant les actions sensibles. Il nécessite une licence Microsoft 365 Copilot, et l’usage est facturé en Copilot Credits à $0.01 l’unité, en paiement à l’usage. Il ne peut pas accéder aux fichiers de votre appareil local. Choisissez-le si votre travail se trouve dans Microsoft 365 et que vos administrateurs veulent des limites de crédits par utilisateur ou par groupe.",
        "[Tâches Gemini](/personal-agent/gemini-spark) (Google, appelées Spark pendant la bêta) : un agent cloud dans l’application Gemini qui utilise Gmail, Docs, Drive et d’autres applications Google, et s’exécute selon un planning ou quand un événement survient. La page d’aide de Google indique qu’il faut Google AI Pro ($19.99/mois aux États-Unis) ou Ultra (à partir de $99.99/mois). Elles ne fonctionnent qu’avec des comptes Google personnels et ne sont pas disponibles dans l’EEE, en Suisse, au Royaume-Uni ni au Nigeria. Choisissez-les si votre travail se trouve dans Gmail et les autres applications de Google.",
        "[Grok Bot](/alternatives/grok-bot) (xAI) : des Bots hébergés qui disposent chacun de leur propre ordinateur cloud, se connectent à vos outils, travaillent dans Slack et Microsoft Teams, exécutent des routines et s’envoient des messages. Il est inclus dans Premium ($30/mois), Super ($100/mois) et Ultra ($200/mois), facturés mensuellement, l’usage supplémentaire étant facturé au coût des tokens. Choisissez-le si vous voulez plusieurs Bots aux rôles distincts, au travail dans Slack, Teams et les réunions.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Un assistant hébergé facturé en crédits : Lindy",
      points: [
        "[Lindy](/alternatives/lindy) : un assistant hébergé unique qui gère la boîte de réception, l’agenda, les réunions, la recherche, les rapports et les relances, utilisable via Slack, l’e-mail, iMessage, les SMS, les appels téléphoniques et une extension Chrome dans Gmail. Les Routines tournent selon un planning ou sur un événement, et toute action ayant un impact extérieur attend votre accord. Il démarre avec $50 de crédits gratuits valables 7 jours ; ensuite, chaque utilisateur actif est facturé, à partir de $29.99/mois pour 3 000 crédits. Choisissez-le si vous voulez un assistant de direction à qui écrire par SMS ou à @mentionner dans Slack. Pour en savoir plus : notre [guide Lindy](/personal-agent/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternatives open source à Claude Cowork",
      text: [
        "Ces trois-là tournent sur votre propre ordinateur ou serveur. Pour un usage personnel, aucun n’affiche de tarif : vous payez votre fournisseur de modèles, ou faites tourner un modèle local quand c’est pris en charge.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker) : une application de bureau de collègue IA sous licence MIT, en bêta ouverte. La boucle de l’agent, les conversations, les tokens des connecteurs et les clés de modèle restent sur votre machine. Vous apportez une clé OpenAI, Anthropic, Google Gemini ou OpenRouter, ou faites tourner un modèle local via Ollama, LM Studio, llama.cpp ou vLLM. Les actions nécessitent une validation par défaut, et les exécutions planifiées n’approuvent jamais leurs propres actions : leurs demandes attendent dans une boîte de réception. Il tourne sous macOS 12+ (Apple silicon) et Windows 10/11 x64 ; la version Windows n’est pas encore signée. Choisissez-le si vous voulez une alternative locale et open source à Claude Cowork, sous Windows ou sur Mac.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit) : un espace de travail auto-hébergeable où chaque Bot dispose de son propre navigateur, de ses fichiers et de ses outils, avec des validations avant les actions, des routines et un journal d’activité. Il tourne comme application de bureau pour Mac et Windows (avec un backend Docker) ou sur Kubernetes pour une équipe. Le modèle d’application est sous MIT ; il utilise CopilotKit Intelligence, sous licence distincte, qui nécessite une licence pour la production sur Kubernetes. Gratuit pour les projets personnels ; OpenBot for Business coûte jusqu’à $29 par utilisateur actif et par mois. Choisissez-le si vous voulez auto-héberger des collègues IA et apporter vos propres modèles ou agents. Voir [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](/personal-agent/suparagent) : un espace de travail sous Apache-2.0 pour des collègues IA nommés, chacun avec un rôle, un espace de travail, une mémoire, des routines et des réglages de validation, qui tourne sur un moteur que vous utilisez déjà, comme Claude Code, Codex, Gemini CLI ou Cursor. Il a un tableau de tâches et un calendrier, et un agent principal peut passer le travail à des spécialistes. Il tourne comme application de bureau ou sur un serveur Linux auto-hébergé ; un service hébergé sur suparagent.ai est un produit distinct. Le projet se décrit comme jeune et en évolution. Choisissez-le si vous voulez des collègues dotés de rôles sur l’agent que vous payez déjà.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Claude Cowork",
      steps: [
        {
          title: "Partir de là où se trouve votre travail",
          text: "Microsoft 365 oriente vers Copilot Cowork, Gmail et Google Docs vers les tâches Gemini, ChatGPT vers ChatGPT Work, et Slack ou iMessage vers Lindy ou Grok Bot.",
        },
        {
          title: "Décider combien vous paierez",
          text: "Options gratuites : ChatGPT Work sur ChatGPT Free (limité, application de bureau uniquement), les crédits de 7 jours de Lindy, OpenWorker, OpenBot et Suparagent avec votre propre clé de modèle, et l’offre Free de Crewmark. Copilot Cowork facture chaque Copilot Credit en plus d’une licence ; les tâches Gemini, Grok Bot et les forfaits ChatGPT payants sont des abonnements mensuels.",
        },
        {
          title: "Choisir le cloud de l’éditeur ou votre propre ordinateur",
          text: "ChatGPT Work, Copilot Cowork, les tâches Gemini, Grok Bot et Lindy tournent dans le cloud de l’éditeur. OpenWorker garde les conversations et les clés sur votre machine ; OpenBot et Suparagent peuvent aussi tourner sur votre propre serveur.",
        },
        {
          title: "Vérifier la plateforme",
          text: "Sous Windows : Copilot Cowork et ChatGPT Work ont des applications de bureau Windows, OpenWorker propose une version Windows 10/11, et l’application de bureau d’OpenBot tourne sous Windows. Les tâches Gemini sont disponibles sur le web, dans une application Mac et sur mobile ; Grok Bot indique des applications pour macOS (Apple silicon) et iOS.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Ce que disent les utilisateurs de Hacker News sur les alternatives à Claude Cowork",
      text: [
        "Le 13 novembre 2026, nous avons lu 5 discussions Hacker News qui parlent de Claude Cowork, de janvier à novembre 2026, une page à la fois. Les discussions Reddit n’ont pu être trouvées que dans des résultats de recherche : nous les listons donc par titre, sans les résumer. Il s’agit d’un échantillon de discussions publiques, pas d’une enquête.",
      ],
      points: [
        "La préférence pour un autre mode que le mode agent de Cowork est revenue dans 2 des discussions que nous avons lues ([janvier 2026](https://news.ycombinator.com/item?id=46593022), [septembre 2026](https://news.ycombinator.com/item?id=49729412)). Dans la discussion de janvier, les utilisateurs disent que Claude Code fait le même travail avec plus de contrôle pour les personnes à l’aise dans un terminal ; voir [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code). Dans la discussion de septembre, les utilisateurs disent que le simple chat leur donne de meilleures réponses qu’un mode agent pour les questions de stratégie et de recherche.",
        "Sur Reddit, des discussions intitulées [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding) et [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM) sont apparues dans les résultats de recherche. Nous ne listons que les titres ; nous n’avons pas lu ces discussions.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Crewmark : une équipe d’employés IA sur le Claude Code ou le Codex que vous utilisez déjà",
      text: [
        "Crewmark est un outil d’un autre type que Claude Cowork. C’est un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation, prend des tickets sur un tableau partagé et tient leur statut à jour. Il est open source (GPL-3.0) et peut être auto-hébergé.",
        "L’offre Free couvre 1 projet et jusqu’à 3 employés IA. Pro ($5/mois) et Team ($10/mois) arrivent bientôt ; la facturation n’est pas encore en place, donc tous les comptes peuvent utiliser Crewmark gratuitement d’ici là. L’usage de l’agent est payé à votre fournisseur d’agent, et votre ordinateur doit rester allumé pour les pulsations. Détails sur les [tarifs de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Donnez à chaque employé un rôle, des objectifs et des projets ; les choix rapides incluent ingénieur logiciel, spécialiste SEO et analyste de données. Voir les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets, définissez des priorités et rendez récurrents ceux qui reviennent chaque jour, chaque semaine ou chaque mois. Quand un agent a besoin d’une revue, d’une autorisation ou d’une information, il passe le ticket en Needs action et vous attend.",
        },
        {
          title: "Définir des horaires de travail",
          text: "La pulsation réveille chaque employé à un intervalle de 15 minutes à 24 heures pendant ses horaires de travail. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous payez déjà Claude ou ChatGPT ?",
    text: "Crewmark transforme votre Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé. Gratuit jusqu’à 3 employés.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Claude Cowork",
    items: [
      {
        q: "Existe-t-il une alternative gratuite à Claude Cowork ?",
        a: "Oui. ChatGPT Free ($0) inclut un accès limité à ChatGPT Work dans l’application de bureau. Lindy démarre avec $50 de crédits valables 7 jours. OpenWorker n’indique aucun prix et tourne avec votre propre clé de modèle ou un modèle local, OpenBot est gratuit pour les projets personnels, et les versions bureau et auto-hébergée de Suparagent n’affichent aucun tarif. L’offre Free de Crewmark couvre 1 projet et jusqu’à 3 employés IA. Claude Cowork lui-même n’est pas inclus dans l’offre Claude Free.",
      },
      {
        q: "Existe-t-il une alternative open source à Claude Cowork ?",
        a: "OpenWorker (MIT), OpenBot (un modèle d’application sous MIT reposant sur CopilotKit Intelligence, sous licence distincte) et Suparagent (Apache-2.0) sont open source, tout comme Crewmark (GPL-3.0). Claude Cowork lui-même ne l’est pas, même si knowledge-work-plugins, le dépôt de plugins d’Anthropic pour Cowork, est open source sous Apache-2.0.",
      },
      {
        q: "Quelle est l’alternative d’OpenAI à Claude Cowork ?",
        a: "ChatGPT Work : un mode Work dans ChatGPT pour les tâches qui aboutissent à un livrable à relire, comme des présentations, des tableurs et des analyses. L’accès est limité sur Free et Go dans l’application de bureau et complet à partir de Plus à $20/mois, et il partage ses limites d’utilisation avec Codex. Voir [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work).",
      },
      {
        q: "Quelles alternatives à Claude Cowork tournent sous Windows ?",
        a: "Copilot Cowork (l’application de bureau Microsoft Copilot pour Windows et macOS), ChatGPT Work (l’application de bureau ChatGPT pour macOS, Windows et Linux), OpenWorker (Windows 10/11 x64, pas encore signé) et OpenBot (une application de bureau pour Mac et Windows). Claude Cowork lui-même tourne aussi sous Windows via Claude Desktop.",
      },
      {
        q: "Existe-t-il une alternative à Claude Cowork qui tourne sur mon propre ordinateur ?",
        a: "OpenWorker fait tourner la boucle de son agent sur votre machine et y garde les conversations, les tokens des connecteurs et les clés de modèle ; OpenBot et Suparagent tournent comme applications de bureau ou sur votre propre serveur. Claude Cowork n’accède aux fichiers locaux que via Claude Desktop et, sur Pro, Max et Ultra, ses nouvelles tâches s’exécutent dans le cloud depuis le 6 octobre 2026. Pour les tâches qui ne tournent que sur votre ordinateur, Anthropic oriente vers Claude Code dans l’application de bureau ([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "Pourquoi cherche-t-on des alternatives à Claude Cowork ?",
        a: "Pour les limites qu’indique Anthropic : Cowork nécessite un forfait Claude payant (Pro à partir de $20 par mois), il consomme les limites du forfait plus vite que le chat, les sessions ne peuvent pas être partagées avec d’autres personnes, et sur Pro, Max et Ultra, les nouvelles tâches s’exécutent dans le cloud sans réglage pour revenir en arrière. Si votre travail se trouve dans Microsoft 365 ou Gmail, Copilot Cowork et les tâches Gemini se connectent directement à ces applications.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste à vos agents, pas seulement une tâche.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié le 13 novembre 2026 sur les pages, la documentation, les tarifs et le GitHub de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI, Microsoft, Google, xAI, Lindy, CopilotKit ni les créateurs d’OpenWorker et de Suparagent, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
