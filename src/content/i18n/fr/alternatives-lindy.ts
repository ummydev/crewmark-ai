import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/lindy; the English master is src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI : alternatives gratuites et open source en 2026",
    description:
      "Alternatives à Lindy AI : Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI, OpenWorker et OpenBot en open source, et des options gratuites.",
  },
  breadcrumb: "Alternatives à Lindy",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Lindy",
    title: "Alternatives à Lindy AI : collègues IA hébergés, plateformes d’agents et assistants open source",
    lead: "Lindy est un assistant IA hébergé qui travaille dans votre boîte de réception, votre agenda, vos réunions et Slack, exécute des routines récurrentes et demande votre accord avant toute action ayant un impact extérieur. Il est facturé en crédits : vous démarrez avec $50 de crédits gratuits valables 7 jours, puis payez à partir de $29.99 par mois par utilisateur actif pour 3 000 crédits. Les crédits mensuels ne sont pas reportés, et chaque utilisateur actif est facturé, y compris les personnes qui se contentent de @mentionner Lindy dans Slack. Voici 8 alternatives, hébergées et open source, avec ce que coûte chacune.",
    cta: "Commencer",
    secondary: "Les comparer",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Lindy en un coup d’œil",
      text: [
        "Informations tirées des pages, de la documentation ou du GitHub de chaque éditeur, vérifiées le 13 novembre 2026. Prix en dollars américains. Ce n’est pas un classement.",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (pour référence)",
          "Un assistant IA hébergé pour la boîte de réception, l’agenda, les réunions et Slack",
          "Non",
          "$50 de crédits gratuits pendant 7 jours ; ensuite à partir de $29.99/mois par utilisateur actif pour 3 000 crédits",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Les coéquipiers IA hébergés de xAI, chacun avec son propre ordinateur cloud",
          "Non",
          "Premium $30/mois",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "L’agent d’Anthropic pour le travail intellectuel hors code dans les applications Claude",
          "Non",
          "Claude Pro $20/mois, ou $17/mois en facturation annuelle",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "L’agent de Microsoft pour des tâches en plusieurs étapes dans Microsoft 365",
          "Non",
          "Licence Microsoft 365 Copilot plus Copilot Credits à $0.01 l’unité",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Le mode Work d’OpenAI dans ChatGPT, pour les tâches qui aboutissent à un livrable à relire",
          "Non",
          "Free ($0) et Go ($8/mois) : accès limité, application de bureau uniquement ; Plus $20/mois",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "Une plateforme low-code hébergée pour des agents IA et des équipes multi-agents",
          "Non",
          "Enterprise uniquement, via l’équipe commerciale ; offre Free retirée",
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
      title: "Collègues IA hébergés de xAI, Anthropic, Microsoft et OpenAI",
      text: [
        "Comme Lindy, ils tournent dans le cloud de l’éditeur et reçoivent le travail dans la conversation. D’autres sont comparés côte à côte dans [les outils de collègues IA](/blog/ai-coworker).",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI) : des Bots qui disposent chacun de leur propre ordinateur cloud, se connectent à vos outils, travaillent dans Slack et Microsoft Teams, exécutent des routines selon un planning et s’envoient des messages. Parmi les Bots prêts à l’emploi figurent Sales Outbound, Talent Scout et Chief of Staff. Il est inclus dans Premium ($30/mois), Super ($100/mois) et Ultra ($200/mois), facturés mensuellement, l’usage supplémentaire étant facturé au coût des tokens. Choisissez-le si vous voulez plusieurs Bots aux rôles distincts, y compris dans Microsoft Teams. Voir le [guide Grok Bot](/personal-agent/grok-bot).",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic) : vous décrivez un résultat, et Claude mène la recherche, les documents, les tableurs avec des formules fonctionnelles et les présentations dans vos fichiers, vos applications connectées comme Gmail et Slack, et un navigateur. Les tâches planifiées tournent toutes les heures, chaque jour, chaque semaine ou les jours ouvrés, dans le cloud. Il est inclus dans les forfaits Claude payants : Pro $20/mois ($17/mois en facturation annuelle), Max $100, Ultra $200, plus des sièges Team et Enterprise. Choisissez-le si vous voulez récupérer des fichiers finis plutôt qu’une aide pour votre boîte de réception.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft) : envoie des e-mails, planifie des réunions, modifie des fichiers Word, Excel et PowerPoint et publie dans Teams, avec une boîte de dialogue de validation avant les actions sensibles. Il nécessite une licence Microsoft 365 Copilot, et l’usage est facturé en Copilot Credits à $0.01 l’unité. Choisissez-le si votre entreprise fonctionne sous Outlook et Teams.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI) : un mode Work dans ChatGPT pour les tâches qui aboutissent à un livrable à relire, avec des plugins pour Slack, Google Drive, SharePoint, l’e-mail, les agendas et les CRM, des tâches planifiées et des déclencheurs Gmail, Slack ou GitHub sur les forfaits éligibles. Free et Go ont un accès limité dans l’application de bureau ; l’accès complet commence avec Plus à $20/mois. Choisissez-le si vous utilisez déjà ChatGPT.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "Une plateforme d’agents pour les équipes : Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai) : une plateforme low-code hébergée où vous créez des agents spécialisés, avec leurs propres instructions, outils et connaissances, et les reliez en équipes multi-agents qu’elle appelle une AI Workforce, pour la vente, le support et les opérations. Au 13 novembre 2026, sa page de tarifs ne liste qu’Enterprise, via l’équipe commerciale, et sa documentation indique que l’offre Free a été retirée. Choisissez-la si votre entreprise veut plusieurs agents no-code et une équipe de déploiement intégrée. Voir [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) et [tarifs de Relevance AI](/pricing/relevance-ai).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternatives open source à Lindy",
      text: [
        "Les deux tournent sur votre propre ordinateur ou serveur, avec le modèle de votre choix, et aucun ne facture en crédits : vous payez directement votre fournisseur de modèles.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker) : une application de bureau de collègue IA sous licence MIT pour macOS et Windows, en bêta ouverte. Il travaille avec GitHub, Slack, l’e-mail et les agendas ; quand vous le @mentionnez dans Slack, la tâche tourne sur votre ordinateur et la réponse revient dans le fil. Vous pouvez planifier des synthèses matinales et des rapports hebdomadaires ; les exécutions planifiées n’approuvent jamais leurs propres actions, et leurs demandes attendent dans une boîte de réception. Utilisez une clé OpenAI, Anthropic, Google Gemini ou OpenRouter, ou un modèle local. Choisissez-le si vous voulez une aide de bureau à la Lindy, avec vos clés gardées sur votre machine.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit) : un espace de travail auto-hébergeable où chaque Bot a son propre navigateur, ses fichiers, ses outils, ses routines, sa mémoire et ses validations. Il tourne comme application de bureau pour Mac et Windows ou sur Kubernetes pour une équipe, avec notamment des frontends pour Slack et Teams (certains en accès anticipé). Gratuit pour les projets personnels ; OpenBot for Business coûte jusqu’à $29 par utilisateur actif et par mois, plus 5 % des dépenses mensuelles en modèles au-delà de $5 000. Choisissez-le si vous voulez héberger des collègues IA pour une équipe sur votre propre infrastructure.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Lindy",
      steps: [
        {
          title: "Compter qui va l’utiliser",
          text: "Lindy facture chaque utilisateur actif, y compris les personnes qui se contentent de le @mentionner dans Slack. Grok Bot propose des offres individuelles à partir de $30/mois ; Copilot Cowork nécessite une licence Microsoft 365 Copilot et facture chaque Copilot Credit ; OpenWorker n’indique aucun prix et OpenBot est gratuit pour les projets personnels.",
        },
        {
          title: "Décider comment payer l’usage",
          text: "Les crédits mensuels de Lindy ne sont pas reportés, et les recharges coûtent $10 pour 1 000 crédits. Grok Bot et les forfaits Claude et ChatGPT sont des abonnements avec des limites d’utilisation. Avec OpenWorker et OpenBot, vous payez directement votre fournisseur de modèles.",
        },
        {
          title: "Partir de là où se fait votre travail",
          text: "Slack et Microsoft Teams : Grok Bot. Microsoft 365 : Copilot Cowork. Documents et tableurs à rendre : Claude Cowork ou ChatGPT Work. De nombreux agents pour la vente ou le support : Relevance AI.",
        },
        {
          title: "Choisir hébergé ou auto-hébergé",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work et Relevance AI sont hébergés. OpenWorker tourne sur votre ordinateur, et OpenBot sur votre ordinateur portable ou votre propre cluster Kubernetes.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Crewmark : des employés IA sur le Claude Code ou le Codex que vous payez déjà",
      text: [
        "Crewmark n’est pas un assistant de boîte de réception comme Lindy. C’est un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation, prend des tickets sur un tableau partagé et tient leur statut à jour. Crewmark ne facture pas l’usage : les agents tournent sur l’abonnement Claude ou ChatGPT que vous payez déjà, et votre ordinateur doit rester allumé pour les pulsations.",
        "L’offre Free couvre 1 projet et jusqu’à 3 employés IA. Pro ($5/mois) et Team ($10/mois) arrivent bientôt ; la facturation n’est pas encore en place, donc tous les comptes peuvent utiliser Crewmark gratuitement d’ici là. Il est open source (GPL-3.0). Détails sur les [tarifs de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Donnez à chaque employé un rôle, des objectifs et des projets, par exemple spécialiste SEO ou analyste de données. Voir les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Mettre le travail récurrent sur le tableau",
          text: "Rendez des tickets récurrents chaque jour, chaque semaine ou chaque mois ; à l’échéance, le ticket se rouvre et son employé est prévenu. Un agent qui a besoin d’une revue ou d’une autorisation passe le ticket en Needs action et attend.",
        },
        {
          title: "Définir des horaires de travail",
          text: "La pulsation réveille chaque employé à un intervalle de 15 minutes à 24 heures pendant ses horaires de travail. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous préférez ne pas payer au crédit ?",
    text: "Crewmark fait tourner des employés IA sur l’abonnement Claude Code ou Codex que vous avez déjà. Gratuit jusqu’à 3 employés.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Lindy",
    items: [
      {
        q: "Existe-t-il une alternative gratuite à Lindy ?",
        a: "Oui. ChatGPT Free ($0) inclut un accès limité à ChatGPT Work dans l’application de bureau. OpenWorker n’indique aucun prix et tourne avec votre propre clé de modèle ou un modèle local, et OpenBot est gratuit pour les projets personnels. L’offre Free de Crewmark couvre 1 projet et jusqu’à 3 employés IA. Lindy lui-même démarre avec $50 de crédits valables 7 jours, une seule fois par membre de l’équipe.",
      },
      {
        q: "Existe-t-il une alternative open source à Lindy ?",
        a: "OpenWorker (MIT) et OpenBot (un modèle d’application sous MIT reposant sur CopilotKit Intelligence, sous licence distincte) sont open source, tout comme Crewmark (GPL-3.0). Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work et Relevance AI ne le sont pas.",
      },
      {
        q: "Lindy vs Relevance AI : quelle différence ?",
        a: "Lindy est un assistant hébergé unique pour la boîte de réception, l’agenda, les réunions et Slack, facturé en crédits par utilisateur actif. Relevance AI est une plateforme low-code pour créer de nombreux agents spécialisés et les relier en une Workforce ; sa page de tarifs ne liste qu’Enterprise, via l’équipe commerciale. Voir [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
      {
        q: "Quelle alternative à Lindy fonctionne dans Slack ?",
        a: "Grok Bot travaille dans Slack et Microsoft Teams comme un collègue. Avec OpenWorker, vous le @mentionnez dans Slack et il répond dans le fil. OpenBot a un frontend Slack (certains frontends sont en accès anticipé), ChatGPT Work a un plugin Slack et des déclencheurs Slack sur les forfaits éligibles, et Claude Cowork a un connecteur Slack.",
      },
      {
        q: "Existe-t-il une alternative à Lindy qui tourne sur mon propre ordinateur ?",
        a: "OpenWorker fait tourner la boucle de son agent sur votre machine et y garde les conversations et les clés de modèle. OpenBot tourne comme application de bureau pour Mac et Windows, ou sur votre propre cluster Kubernetes. Les agents de Crewmark tournent sur votre ordinateur, dans Claude Code ou Codex.",
      },
      {
        q: "Pourquoi cherche-t-on des alternatives à Lindy ?",
        a: "Pour les limites qu’indique Lindy : les crédits mensuels ne sont pas reportés et, une fois épuisés, Lindy suspend les actions qui consomment des crédits jusqu’au cycle suivant ou à une recharge ($10 pour 1 000 crédits). Chaque utilisateur actif est facturé, y compris les personnes qui se contentent de le @mentionner dans Slack. Les crédits gratuits durent 7 jours, et la possibilité d’utiliser Lindy dans Microsoft Teams est toujours annoncée comme bientôt disponible.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents, pas un solde de crédits.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié le 13 novembre 2026 sur les pages, la documentation, les tarifs et le GitHub de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI, CopilotKit ni les créateurs d’OpenWorker, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
