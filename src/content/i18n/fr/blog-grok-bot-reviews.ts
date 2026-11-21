import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot : avis des utilisateurs de Hacker News (2026)",
    description:
      "Avis sur Grok Bot (6 discussions Hacker News, août à novembre 2026) : ce qui plaît, les reproches sur les limites d’usage et la sécurité, et les alternatives.",
  },
  breadcrumb: "Avis sur Grok Bot",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Avis",
    title: "Avis sur Grok Bot : ce qu’en disent les utilisateurs de Hacker News",
    lead: "Grok Bot est l’ensemble de coéquipiers IA hébergés de xAI : des Bots qui disposent chacun de leur propre ordinateur dans le cloud, se connectent à vos outils, travaillent dans Slack et Microsoft Teams, exécutent des routines et se passent le travail. Nous avons lu 7 discussions Hacker News à son sujet, d’août à novembre 2026, ses trois premiers mois ; l’une était l’annonce de lancement d’un outil concurrent, donc les chiffres portent sur les 6 autres. Les utilisateurs racontent lui confier de vraies tâches sans écrire de code. Le reproche qui revient le plus concerne les limites d’usage, dans 3 des 6 discussions ; la sécurité et l’intérêt peu clair sont revenus dans 2 discussions chacun.",
    cta: "Commencer",
    secondary: "Voir les thèmes",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "Comment nous avons recueilli ces avis",
      text: [
        "Nous avons lu 7 discussions Hacker News sur Grok Bot le 13 novembre 2026, une page à la fois. L’une d’elles était l’annonce de lancement d’un outil open source concurrent, rédigée par son créateur, et nous ne l’avons comptée pour aucun thème : tous les chiffres de cette page portent donc sur les 6 autres. Comme Grok Bot a été lancé en bêta le 11 août 2026, elles datent toutes de ses trois premiers mois, d’août à novembre 2026.",
      ],
      points: [
        "Un thème n’est retenu que s’il est revenu dans au moins 2 des 6 discussions comptées, et nous indiquons dans combien. Les remarques faites dans un seul commentaire sont écartées.",
        "L’une des 6 ne porte pas uniquement sur Grok Bot : c’est une discussion générale où chacun décrit sa configuration IA, et nous n’en avons retenu que les mentions de Grok Bot. Deux autres traitent de la même actualité, et la plus récente renvoie vers la plus ancienne : nous comptons donc cette actualité une seule fois.",
        "Nous avons aussi trouvé 17 discussions Reddit via la recherche Google, mais nous n’avons pas pu ouvrir reddit.com : nous ne les avons donc ni lues ni résumées. Elles sont listées par titre dans [Plus de discussions sur Reddit](#reddit).",
        "Il s’agit d’un échantillon de discussions publiques, pas d’une enquête. Les personnes qui écrivent sur un outil ont souvent un avis tranché. Les mois sont déduits de l’ancienneté de chaque discussion et peuvent être décalés d’un mois.",
        "Rien n’a été rémunéré ni sollicité : nous n’avons rien publié, ni demandé d’avis, ni contacté personne. Les résumés sont formulés avec nos propres mots, et la seule citation est signalée et accompagnée d’un lien.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Les avis sur Grok Bot en un coup d’œil",
      text: [
        "Ce qui est revenu dans les 6 discussions Hacker News que nous avons comptées (la septième, l’annonce de lancement d’un outil concurrent, n’est pas comptée). Les chiffres comptent des discussions, pas des commentaires.",
      ],
      headers: ["Thème", "Ce que disent les utilisateurs", "Discussions"],
      rows: [
        ["Point fort : des tâches sans code", "Recherches, e-mails et synthèses régulières confiés de bout en bout", "2 sur 6"],
        ["Reproche : limites d’usage", "Les Bots toujours actifs épuisent l’usage, et une discussion de novembre portait sur le bridage de Grok Bot", "3 sur 6"],
        ["Reproche : sécurité", "L’injection de prompts, et le fait de confier aux Bots des identifiants et l’accès à des comptes sensibles", "2 sur 6"],
        ["Reproche : intérêt peu clair", "Difficile de trouver une tâche à lui confier, ou vu comme une version hébergée des agents open source", "2 sur 6"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Ce que les utilisateurs apprécient",
      points: [
        `De vraies tâches menées sans coder (2 discussions sur 6). Les utilisateurs racontent lui confier des tâches comme trouver un fournisseur, envoyer des candidatures et des e-mails, ou préparer des synthèses de sites web et de réseaux sociaux. Discussions Hacker News : [août 2026](${hn.launch}), [novembre 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Les reproches fréquents",
      points: [
        `Limites d’usage et consommation de tokens (3 discussions sur 6). Les utilisateurs disent que les Bots toujours actifs épuisent vite le quota hebdomadaire. Un commentateur de Hacker News l’a résumé ainsi en août 2026 : « Des agents perpétuels, toujours actifs, consomment ÉNORMÉMENT de tokens » (« Always on perpetual agents use a LOT of tokens ») ([discussion](${hn.launch})). En novembre 2026, une discussion Hacker News a porté sur le bridage de Grok Bot après que les coûts de xAI ont dépassé ses revenus d’abonnement, comme le formule le titre de la discussion. Discussions : [août 2026](${hn.launch}), [novembre 2026](${hn.throttled}), [novembre 2026](${hn.agenticSetup}).`,
        `Sécurité et accès aux comptes (2 sur 6). Les utilisateurs s’inquiètent de l’injection de prompts et du fait de donner aux Bots leurs identifiants et l’accès à des comptes sensibles sans limites strictes sur ce que chaque Bot peut atteindre. Discussions : [août 2026](${hn.launch}), [octobre 2026](${hn.agentAccess}).`,
        `Un intérêt peu clair (2 sur 6). Certains utilisateurs ne trouvaient pas de tâche qu’ils lui confieraient ; d’autres y voient une version hébergée d’agents open source comme OpenClaw. Discussions : [août 2026](${hn.launch}), [novembre 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Ce vers quoi les gens se tournent",
      text: [
        "Ces options ont été recommandées dans au moins 2 des 6 discussions comptées. D’autres outils n’ont été cités que dans une seule discussion chacun, nous les laissons donc de côté ici ; notre page [alternatives à Grok Bot](/alternatives/grok-bot) compare les principales options d’après leur propre documentation.",
      ],
      points: [
        `Hermes Agent (2 sur 6). Recommandé dans une discussion et cité comme option comparable dans une autre ; les utilisateurs le décrivent comme moins cher et plus configurable, avec le modèle de votre choix. Voir [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) et [les tarifs d’Hermes Agent](/pricing/hermes-agent). Discussions : [août 2026](${hn.launch}), [novembre 2026](${hn.agenticSetup}).`,
        `Votre propre configuration avec Codex ou Claude Code (2 sur 6). Les utilisateurs disent que Codex ou Claude Code, avec quelques scripts maison, couvre une bonne partie du même travail pour moins cher. Voir [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code). Discussions : [août 2026](${hn.launch}), [novembre 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Plus de discussions sur Reddit",
      text: [
        "Nous listons ces discussions Reddit pour aller plus loin. Nous les avons trouvées via la recherche Google, mais nous n’avons pas pu ouvrir reddit.com : nous ne les avons donc ni lues ni résumées, et aucun des thèmes ci-dessus ne s’appuie sur elles.",
      ],
      points: [
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, août 2026",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, septembre 2026",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, septembre 2026",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, septembre 2026",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, septembre 2026",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, septembre 2026",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, octobre 2026",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, octobre 2026",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, octobre 2026",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, octobre 2026",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, octobre 2026",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, octobre 2026",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, novembre 2026",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, novembre 2026",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, novembre 2026",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, novembre 2026",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, novembre 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Les faits sur Grok Bot, pour vérifier ce qui se dit",
      text: [
        "D’après la page produit et l’annonce de lancement de xAI, vérifiées le 13 novembre 2026. Plus de détails dans notre [guide Grok Bot](/personal-agent/grok-bot).",
      ],
      points: [
        "Ce que c’est : des coéquipiers IA hébergés par xAI. Chaque Bot dispose de son propre ordinateur dans le cloud, se connecte à vos outils et applications, travaille dans Slack et Microsoft Teams, exécute des routines selon un planning et passe le travail à d’autres Bots.",
        "Lancement : en bêta le 11 août 2026 ; la page produit indique désormais qu’il n’est plus en bêta.",
        "Prix : inclus dans les offres Premium ($30 par mois), Super ($100 par mois, 3,5 fois l’usage de Premium) et Ultra ($200 par mois, 12 fois l’usage de Premium) de xAI, facturées mensuellement. Chaque offre inclut un usage hebdomadaire de Grok Bot, et l’usage supplémentaire est facturé au coût des tokens. Les offres Teams et Enterprise passent par l’équipe commerciale.",
        "Licence : pas open source.",
        "Où il tourne : dans le cloud de xAI, donc les Bots continuent de travailler quand votre ordinateur portable est fermé. Vous y accédez via des applications pour ordinateur et mobile, dans Slack et Microsoft Teams, et lors d’appels Google Meet, Zoom ou Teams.",
        "Modèles : les Bots sont construits avec Grok.",
        "Validations : les Bots vous consultent quand ils ont besoin d’une validation, et les actions sensibles peuvent passer par Auto Review.",
        "Site officiel : [x.ai/bot](https://x.ai/bot).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des agents sur votre propre ordinateur, avec un poste permanent",
      text: [
        "Grok Bot fait tourner des Bots dans le cloud de xAI, sur Grok. Crewmark adopte une autre approche : vos propres sessions Claude Code ou Codex, sur votre ordinateur et avec l’abonnement que vous payez déjà, deviennent des employés IA dotés d’un rôle, d’objectifs et d’horaires de travail, chacun prenant le ticket suivant sur un tableau partagé. Les contreparties : votre ordinateur doit rester allumé, les agents se coordonnent pour l’instant via des tickets (les messages directs entre agents arrivent bientôt), et il n’y a pas d’intégration Slack intégrée. Il est open source sous GPL-3.0 et gratuit pour 1 projet et jusqu’à 3 employés IA.",
      ],
      steps: [
        { title: "Choisir un rôle", text: "Partez des [rôles d’employés IA](/ai-employees), ou rédigez votre propre rôle et vos objectifs." },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement. Pendant les horaires de travail, une pulsation réveille l’employé, de toutes les 15 minutes à une fois par jour, pour qu’il prenne le suivant.",
        },
        {
          title: "Répondre quand il demande",
          text: "Quand il a besoin d’une revue, d’une autorisation ou d’une information, il passe le ticket en Needs action et vous pose la question sur le ticket. Des missions, avec leur configuration pour chaque agent, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Envie que votre agent de codage travaille selon un planning ?",
    text: "Crewmark donne à Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Grok Bot vaut-il le coup ?",
        a: "Tout dépend de ce que vous lui confieriez et de l’usage dont vous avez besoin. Dans les 6 discussions Hacker News que nous avons comptées, les utilisateurs décrivent des tâches menées sans code, comme des recherches, des e-mails et des synthèses régulières. Le reproche qui revient le plus concerne les limites d’usage, dans 3 des 6 ; la sécurité et l’intérêt peu clair sont revenus dans 2 discussions chacun. Il est inclus dans l’offre Premium de xAI à $30 par mois, avec Super à $100 et Ultra à $200 pour plus d’usage.",
      },
      {
        q: "Quels sont les reproches les plus fréquents envers Grok Bot ?",
        a: "Dans les 6 discussions que nous avons comptées : les limites d’usage et la consommation de tokens (3 sur 6) ; la sécurité, surtout l’injection de prompts et le fait de confier aux Bots des identifiants et l’accès à des comptes sensibles (2 sur 6) ; et un intérêt peu clair, chez des utilisateurs qui ne trouvaient pas de tâche à lui confier ou qui y voient une version hébergée d’agents open source (2 sur 6).",
      },
      {
        q: "Grok Bot est-il sûr ?",
        a: "La sécurité est revenue dans 2 des 6 discussions que nous avons comptées. Les utilisateurs s’inquiètent de l’injection de prompts et du fait de donner aux Bots leurs identifiants et l’accès à des comptes sensibles sans limites strictes sur ce que chaque Bot peut atteindre. La page produit de xAI indique que les Bots vous consultent quand ils ont besoin d’une validation et que les actions sensibles peuvent passer par Auto Review.",
      },
      {
        q: "Existe-t-il un avis honnête sur Grok Bot ?",
        a: "Cette page ne teste pas Grok Bot elle-même ; elle résume ce que les utilisateurs ont dit dans 6 discussions Hacker News datant de ses trois premiers mois, avec les liens pour que vous puissiez les lire. Les utilisateurs racontent lui confier des tâches sans code. Le reproche le plus fréquent concerne les limites d’usage (3 sur 6), suivi de la sécurité et de l’intérêt peu clair (2 sur 6 chacun). Rien ici n’a été rémunéré ni sollicité.",
      },
      {
        q: "Que disent les utilisateurs de Reddit sur Grok Bot ?",
        a: "Nous n’avons pas pu ouvrir Reddit, nous n’avons donc pas résumé ces discussions. D’après leurs seuls titres : sept demandent ou signalent des alternatives, dont plusieurs open source ou auto-hébergées ; trois demandent s’il vaut le coup, l’une d’elles à propos de l’offre Premium à $30 ; deux portent sur les limites d’usage et la facturation ; une le compare à Muse de Meta ; une, sur r/MuseAgent, demande si ce qui est arrivé à Grok Bot pourrait arriver à Muse ; une affirme que sa documentation montre que tous vos Bots partagent un seul ordinateur, alors que la page produit de xAI indique que chaque Bot a le sien (voir [les faits](#facts)) ; une conseille de se tenir loin de xAI ; et une dit que Grok Bot a validé ce que son auteur construit. Les 17 sont listées avec leur lien dans [Plus de discussions sur Reddit](#reddit).",
      },
      {
        q: "Qu’utilise-t-on à la place de Grok Bot ?",
        a: "Dans les 6 discussions que nous avons comptées, deux options sont revenues plus d’une fois : Hermes Agent, que les utilisateurs décrivent comme moins cher et plus configurable, et une configuration maison avec Codex ou Claude Code plus vos propres scripts (2 sur 6 chacune). Notre page [alternatives à Grok Bot](/alternatives/grok-bot) compare d’autres options d’après leur propre documentation.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste permanent à votre agent de codage.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Discussions lues le 13 novembre 2026. Informations sur le produit vérifiées le même jour sur la page produit et dans l’annonce de lancement de xAI.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec xAI ni avec aucune entreprise citée sur cette page, et non approuvé par elles. Les opinions résumées ici sont celles des commentateurs des discussions en lien. Les noms de produits sont des marques de leurs propriétaires.",
};
