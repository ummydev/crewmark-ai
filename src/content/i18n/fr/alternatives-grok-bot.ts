import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/grok-bot; the English master is src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot : alternatives 2026 open source, gratuites et hébergées",
    description:
      "Alternatives à Grok Bot comparées : Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent et Crewmark, par licence et prix.",
  },
  breadcrumb: "Alternatives à Grok Bot",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · xAI Grok Bot",
    title: "Alternatives à Grok Bot : coéquipiers IA open source, gratuits et hébergés",
    lead: "Grok Bot est l’ensemble de « coéquipiers IA » hébergés de xAI : des Bots qui disposent chacun de leur propre ordinateur dans le cloud, se connectent à vos outils et applications, travaillent dans Slack et Microsoft Teams, exécutent des routines et se passent le travail. Il a été lancé en bêta le 11 août 2026 et n’est plus en bêta aujourd’hui. Il n’est pas open source, et les offres commencent à Premium, $30 par mois, avec Teams et Enterprise via l’équipe commerciale. Voici huit alternatives, des collègues IA de Claude, ChatGPT et Microsoft 365 aux projets open source sur GitHub, avec leur licence, leur prix et le profil auquel chacune convient.",
    cta: "Commencer",
    secondary: "Voir la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Grok Bot en un coup d’œil",
      text: [
        "Informations tirées du site, de la documentation et de la page de tarifs de chaque produit, vérifiées le 13 novembre 2026. Prix en dollars américains. Grok Bot : Premium $30, Super $100 et Ultra $200 par mois, facturés mensuellement, avec un usage hebdomadaire inclus et l’usage supplémentaire facturé au coût des tokens. Pour en savoir plus : notre [guide Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "L’agent d’Anthropic pour le travail hors code dans les applications Claude : recherche, documents, tableurs et présentations",
          "Non",
          "Forfaits Claude payants, à partir de Pro à $20 par mois ($17 par mois en facturation annuelle) ; pas sur Free",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Un agent de Microsoft 365 Copilot pour des tâches en plusieurs étapes dans Outlook, Teams, Word, Excel, PowerPoint, OneDrive et SharePoint",
          "Non",
          "Licence Microsoft 365 Copilot plus Copilot Credits à $0.01 l’unité, en paiement à l’usage, facturés mensuellement",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Un mode Work dans ChatGPT pour les tâches qui aboutissent à un livrable à relire, comme des présentations, des tableurs et des analyses",
          "Non",
          "Limité sur Free ($0) et Go ($8 par mois) dans l’application de bureau ; complet à partir de Plus à $20 par mois",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "Un assistant hébergé pour la boîte de réception, l’agenda, les réunions et les relances, partagé avec votre équipe dans Slack",
          "Non",
          "Gratuit : $50 de crédits pendant 7 jours ; $29.99 par mois par utilisateur actif pour 3 000 crédits",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "L’espace de travail auto-hébergeable de CopilotKit pour collègues IA, où chaque Bot dispose de son propre navigateur, de ses fichiers et de ses outils",
          "Oui (modèle d’application sous MIT ; utilise CopilotKit Intelligence, sous licence distincte)",
          "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Une application de bureau, « Un collègue IA pour votre travail quotidien » (« An AI coworker for your everyday work »), qui tourne sur votre machine avec des validations et une piste d’audit",
          "Oui (MIT)",
          "Aucun prix indiqué ; votre propre clé de modèle ou un modèle local",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "L’agent personnel de Nous Research, avec des Bots qui ont leurs propres modèles et routines et s’envoient des messages",
          "Oui (MIT)",
          "Agent gratuit, plus votre fournisseur de modèles ; Nous Portal Plus en option à $20 par mois",
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
      kind: "text",
      id: "big-vendors",
      title: "Les collègues IA d’Anthropic, de Microsoft et d’OpenAI",
      text: [
        "Hébergés, comme Grok Bot, et inclus dans des offres que beaucoup d’équipes ont déjà. Les trois sont comparés dans [les outils de collègues IA](/blog/ai-coworker).",
      ],
      points: [
        "Claude Cowork : l’agent d’Anthropic pour le travail intellectuel. Vous décrivez un résultat, et il mène la recherche, les documents, les tableurs et les présentations dans vos fichiers, vos applications connectées et un navigateur. Les tâches s’exécutent dans le cloud d’Anthropic et continuent même ordinateur portable fermé, et les tâches planifiées tournent toutes les heures, chaque jour, chaque semaine ou les jours ouvrés. Choisissez-le si vous payez déjà Claude et voulez récupérer sous forme de fichiers un travail en plusieurs étapes. Voir [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) et [alternatives à Claude Cowork](/alternatives/claude-cowork).",
        "Copilot Cowork : un agent de Microsoft 365 Copilot qui envoie des e-mails, planifie des réunions, modifie des fichiers Word, Excel et PowerPoint et publie dans Teams, avec une boîte de dialogue de validation avant les actions sensibles. Son sélecteur de modèle inclut des modèles GPT, Claude et Grok, selon les paramètres du locataire. Choisissez-le si votre travail se trouve dans Outlook, Teams, OneDrive et SharePoint. Guide : [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work : un mode Work dans ChatGPT qui planifie une tâche, utilise vos fichiers, des plugins, le web, un navigateur et du code, et vous remet un livrable à relire. Il partage ses limites d’utilisation avec Codex ; Plus ($20 par mois) et Pro (à partir de $100 par mois) y ont accès sur ordinateur, sur le web et sur mobile. Choisissez-le si une tâche a un résultat clair et implique plusieurs sources ou étapes. Guide : [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Un assistant hébergé pour le travail de bureau",
      points: [
        "Lindy : un seul assistant partagé plutôt que plusieurs Bots. Il gère la boîte de réception, l’agenda, les réunions, la recherche et les relances, et vous l’utilisez depuis Slack, l’e-mail, iMessage, les appels téléphoniques et une extension Chrome dans Gmail. Toute action ayant un impact extérieur, comme l’envoi d’un e-mail, attend votre accord, et les Routines tournent selon un planning ou sur un événement. Chaque utilisateur actif occupe un siège payant, y compris les personnes qui se contentent de le @mentionner dans Slack. Choisissez-le si votre équipe veut un assistant à @mentionner dans Slack pour des rapports, des recherches et des mises à jour du CRM. Guide : [Lindy](/personal-agent/lindy) ; pour en savoir plus : [alternatives à Lindy](/alternatives/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternatives open source à Grok Bot sur GitHub",
      text: [
        "Vous les faites tourner vous-même, avec vos propres clés de modèle. Nombres d’étoiles relevés sur GitHub le 13 novembre 2026.",
      ],
      points: [
        "OpenBot (`github.com/CopilotKit/OpenBot`, 11 652 étoiles) : comme avec Grok Bot, chaque Bot dispose de son propre ordinateur, avec un navigateur, des fichiers et des outils, plus des routines, des validations et un journal d’activité. Il tourne comme application de bureau pour Mac et Windows ou sur Kubernetes pour une équipe, et connecte vos propres agents via AG-UI. Choisissez-le si vous voulez des collègues IA à auto-héberger et personnaliser sous MIT. Voir [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "OpenWorker (`github.com/andrewyng/openworker`, 19 050 étoiles) : une application de bureau en bêta ouverte pour macOS et Windows. Les actions sont soumises à validation par défaut, chaque appel d’outil est enregistré, les tâches planifiées couvrent par exemple des synthèses matinales et des rapports hebdomadaires, et vous pouvez le mentionner dans Slack et obtenir la réponse dans le fil. Choisissez-le si vous voulez un agent sur votre propre machine, y compris avec un modèle local. Guide : [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent (`github.com/NousResearch/hermes-agent`, 262 923 étoiles) : l’agent personnel de Nous Research. Son Bot Mode transforme des profils en Bots nommés, chacun avec sa propre conversation, son rôle, son modèle, sa mémoire, ses skills et son avatar, et ils s’envoient directement des messages. Il répond dans Telegram, Discord, Slack, WhatsApp, Signal et par e-mail. Choisissez-le si vous voulez plusieurs Bots spécialisés sur votre propre machine ou serveur. Voir [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Grok Bot",
      steps: [
        {
          title: "Partir de ce que vous payez déjà",
          text: "Un forfait Claude payant inclut Claude Cowork ; les forfaits ChatGPT incluent Work (limité sur Free et Go) ; Copilot Cowork nécessite une licence Microsoft 365 Copilot plus des Copilot Credits.",
        },
        {
          title: "Décider où il s’exécute",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work et Lindy tournent dans le cloud de l’éditeur. OpenWorker tourne sur votre machine, OpenBot sur votre ordinateur portable ou Kubernetes, et Hermes Agent sur votre machine ou un serveur.",
        },
        {
          title: "Vérifier où votre équipe échange",
          text: "Grok Bot travaille dans Slack, Microsoft Teams et les appels. Dans Slack, vous pouvez aussi utiliser Lindy, OpenWorker, Hermes Agent, ainsi que des connecteurs ou des plugins dans Claude Cowork et ChatGPT Work. Copilot Cowork travaille dans Outlook et Teams.",
        },
        {
          title: "Regarder comment il demande avant d’agir",
          text: "Grok Bot vous consulte quand une validation est nécessaire et peut faire passer les actions sensibles par Auto Review. Lindy attend votre accord pour toute action ayant un impact extérieur, OpenWorker soumet les actions à validation par défaut, Claude Cowork a des modes Manual et Auto, et Copilot Cowork affiche une boîte de dialogue de validation.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Ce que disent les utilisateurs de Hacker News sur les alternatives à Grok Bot",
      text: [
        "Le 13 novembre 2026, nous avons lu 7 discussions Hacker News qui parlent de Grok Bot, d’août à novembre 2026, une page à la fois. Les discussions Reddit n’ont pu être trouvées que dans des résultats de recherche : nous les listons donc par titre, sans les résumer. Il s’agit d’un échantillon de discussions publiques, pas d’une enquête.",
      ],
      points: [
        "Des plaintes sur les limites d’usage sont revenues dans 3 des discussions que nous avons lues ([août 2026](https://news.ycombinator.com/item?id=49261514), [novembre 2026](https://news.ycombinator.com/item?id=50345698), [novembre 2026](https://news.ycombinator.com/item?id=50366117)). Les utilisateurs disent que les Bots qui tournent en permanence épuisent vite le quota hebdomadaire, et les discussions de novembre évoquent les limites réduites de Grok Bot.",
        "Les agents open source que vous faites tourner vous-même sont revenus dans 2 des discussions que nous avons lues ([août 2026](https://news.ycombinator.com/item?id=49261514), [novembre 2026](https://news.ycombinator.com/item?id=50366117)). Les utilisateurs ont cité [Hermes Agent](/alternatives/hermes-agent) dans les deux, et OpenClaw dans celle d’août ; dans cette discussion, ils les décrivent tous les deux comme plus configurables qu’un bot hébergé, et certains disent qu’OpenClaw doit être réparé souvent. Voir [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) et [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        "Monter sa propre configuration est revenu dans 2 des discussions que nous avons lues ([août 2026](https://news.ycombinator.com/item?id=49261514), [novembre 2026](https://news.ycombinator.com/item?id=50366117)) : un agent de code comme Claude Code ou Codex avec quelques scripts, ou des modèles via OpenRouter. Dans ces discussions, les utilisateurs disent qu’une telle configuration couvre l’essentiel du travail pour beaucoup moins cher. Voir [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Des doutes sur ce qu’apporte Grok Bot sont revenus dans 2 des discussions que nous avons lues ([août 2026](https://news.ycombinator.com/item?id=49261514), [novembre 2026](https://news.ycombinator.com/item?id=50366117)). Certains utilisateurs disent ne pas voir quelle tâche ils lui confieraient, et d’autres y voient une version hébergée d’agents open source comme OpenClaw, avec un navigateur en plus.",
        "Sur Reddit, des discussions intitulées [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot) et [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor) sont apparues dans les résultats de recherche. Nous ne listons que les titres ; nous n’avons pas lu ces discussions.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des Bots pour vos applications. Des employés IA pour votre base de code.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des projets. Il se réveille au rythme d’une pulsation pendant ses horaires de travail, prend des tickets sur un tableau partagé et, quand il a besoin d’une revue ou d’une autorisation, passe le ticket en Needs action et pose la question sur le ticket. Il n’a pas d’intégration Slack, GitHub ou Linear intégrée : les agents utilisent les outils et les connexions de leur propre ordinateur.",
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
    title: "Envie de coéquipiers IA pour votre base de code ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Grok Bot",
    items: [
      {
        q: "Existe-t-il une alternative open source à Grok Bot ?",
        a: "Oui. Le modèle d’application d’OpenBot est sous MIT (il utilise CopilotKit Intelligence, sous licence distincte), et OpenWorker et Hermes Agent sont sous MIT. Crewmark est open source sous GPL-3.0. Grok Bot lui-même n’est pas open source.",
      },
      {
        q: "Existe-t-il une alternative gratuite à Grok Bot ?",
        a: "OpenBot est gratuit pour les projets personnels ; OpenWorker n’indique aucun prix et tourne avec votre propre clé de modèle ou un modèle local ; Hermes Agent est gratuit, plus votre fournisseur de modèles. ChatGPT Work offre un accès limité sur l’offre Free dans l’application de bureau, l’offre Free de Lindy donne $50 de crédits pendant 7 jours, et Crewmark est gratuit pour 1 projet avec jusqu’à 3 employés IA. Claude Cowork n’est pas inclus dans l’offre Free de Claude.",
      },
      {
        q: "Quelles alternatives à Grok Bot sont sur GitHub ?",
        a: "OpenBot (`github.com/CopilotKit/OpenBot`, 11 652 étoiles), OpenWorker (`github.com/andrewyng/openworker`, 19 050 étoiles), Hermes Agent (`github.com/NousResearch/hermes-agent`, 262 923 étoiles) et Crewmark (`github.com/ummydev/crewmark-ai`). Nombres d’étoiles au 13 novembre 2026.",
      },
      {
        q: "Claude est-il une alternative à Grok Bot ?",
        a: "Claude Cowork, dans les applications Claude, est l’agent d’Anthropic pour le travail intellectuel : il exécute des tâches dans le cloud d’Anthropic et selon un planning, et il est inclus dans les forfaits Claude payants à partir de Pro à $20 par mois. Pour le code, Claude Code est l’agent de code d’Anthropic. Voir [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) et [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      },
      {
        q: "Combien coûte Grok Bot ?",
        a: "Premium coûte $30 par mois, Super $100 par mois (3,5 fois l’usage de Premium) et Ultra $200 par mois (12 fois l’usage de Premium), facturés mensuellement. Un usage hebdomadaire de Grok Bot est inclus, et l’usage supplémentaire est facturé au coût des tokens. Teams et Enterprise passent par l’équipe commerciale.",
      },
      {
        q: "Quelles alternatives à Grok Bot fonctionnent dans Slack ?",
        a: "Lindy travaille comme un coéquipier dans Slack ; OpenWorker répond quand vous le mentionnez dans un fil Slack ; Hermes Agent se connecte à Slack via son gateway ; Claude Cowork et ChatGPT Work se connectent à Slack sous forme de connecteur ou de plugin ; OpenBot compte Slack parmi ses frontends, dont certains sont en accès anticipé.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents de code, pas seulement une conversation.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Informations vérifiées le 13 novembre 2026 sur le site, la documentation et la page de tarifs de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec xAI ni avec aucune autre entreprise citée sur cette page, et non approuvé par elles. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
