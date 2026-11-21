import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw : avis des utilisateurs de Hacker News (2026)",
    description:
      "Avis sur OpenClaw (10 discussions Hacker News, février à novembre 2026) : ce qui plaît, les reproches les plus fréquents et les alternatives choisies.",
  },
  breadcrumb: "Avis sur OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Avis",
    title: "Avis sur OpenClaw : ce qu’en disent les utilisateurs de Hacker News",
    lead: "OpenClaw est un assistant IA personnel open source qui tourne sur votre propre ordinateur et vous répond dans les applications de discussion que vous utilisez déjà, comme WhatsApp, Telegram et Slack. Nous avons lu 10 discussions Hacker News à son sujet, de février à novembre 2026. Les utilisateurs l’apprécient pour de petites tâches personnelles et aiment que sa mémoire leur appartienne. Les reproches qui reviennent le plus sont qu’il casse souvent et demande de l’entretien (6 discussions sur 10) et que son accès étendu représente un risque de sécurité (5 sur 10).",
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
        "Nous avons lu 10 discussions Hacker News sur OpenClaw le 13 novembre 2026, une page à la fois. Elles datent de février à novembre 2026, et 7 d’entre elles sont de février à avril, période où l’essentiel des échanges a eu lieu. Dans les plus grandes discussions, qui comptent plusieurs centaines de commentaires, nous avons lu les commentaires de premier niveau et les passages autour des sujets clés, pas chaque réponse.",
      ],
      points: [
        "Un thème n’est retenu que s’il est revenu dans au moins 2 des 10 discussions, et nous indiquons dans combien. Les remarques faites dans un seul commentaire sont écartées.",
        "L’une des discussions porte sur Grok Bot ; nous en avons utilisé les commentaires qui comparent Grok Bot et OpenClaw. Une autre interroge les gens sur leurs configurations IA en général ; nous en avons utilisé les mentions d’OpenClaw.",
        "Nous avons aussi trouvé 9 discussions Reddit via la recherche Google, mais nous n’avons pas pu ouvrir reddit.com : nous ne les avons donc ni lues ni résumées. Elles sont listées par titre dans [Plus de discussions sur Reddit](#reddit).",
        "Il s’agit d’un échantillon de discussions publiques, pas d’une enquête. Les personnes qui écrivent sur un outil ont souvent un avis tranché. Les mois sont déduits de l’ancienneté de chaque discussion et peuvent être décalés d’un mois.",
        "Rien n’a été rémunéré ni sollicité : nous n’avons rien publié, ni demandé d’avis, ni contacté personne. Les résumés sont formulés avec nos propres mots, et la seule citation est signalée et accompagnée d’un lien.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Les avis sur OpenClaw en un coup d’œil",
      text: [
        "Ce qui est revenu dans les 10 discussions Hacker News que nous avons lues. Les chiffres comptent des discussions, pas des commentaires.",
      ],
      headers: ["Thème", "Ce que disent les utilisateurs", "Discussions"],
      rows: [
        ["Point fort : pratique pour les tâches personnelles", "Rappels, relances, tâches d’agenda et bots de discussions de groupe, quand il fonctionne", "3 sur 10"],
        ["Point fort : dans vos applications de discussion, avec une mémoire qui vous appartient", "Il répond dans des applications comme WhatsApp et garde sa mémoire dans des fichiers que vous pouvez lire et modifier", "2 sur 10"],
        ["Point fort : la direction que prennent les assistants", "Même ses détracteurs y voient ce que les assistants intégrés auraient dû être", "2 sur 10"],
        ["Reproche : casse souvent", "Les mises à jour cassent des choses, et l’entretien prend plus de temps qu’il n’en fait gagner", "6 sur 10"],
        ["Reproche : risque de sécurité", "Un accès étendu à votre ordinateur et à vos comptes, et une exposition à l’injection de prompts", "5 sur 10"],
        ["Reproche : plus de battage que d’usage réel", "De grandes promesses sans exemples concrets ; des tâches de démo qui ressemblent à de la mise en scène", "4 sur 10"],
        ["Reproche : coût et abonnements", "L’usage des modèles finit par chiffrer, et il dépend des règles d’abonnement d’autres entreprises", "3 sur 10"],
        ["Reproche : demande une machine dédiée et des compétences", "Mieux vaut le faire tourner sur un ordinateur séparé, avec quelqu’un prêt à l’entretenir", "2 sur 10"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Ce que les utilisateurs apprécient",
      points: [
        `Pratique pour les tâches personnelles, quand il fonctionne (3 discussions sur 10). Les utilisateurs racontent qu’il envoie des rappels et des relances, gère de petites tâches d’agenda et fait tourner des bots pour des discussions en famille ou en groupe. Discussions Hacker News : [avril 2026](${hn.whoIsUsing}), [avril 2026](${hn.memory}), [novembre 2026](${hn.agenticSetup}).`,
        `Il vit dans les applications de discussion que vous utilisez déjà, avec une mémoire qui vous appartient (2 sur 10). Les utilisateurs aiment lui écrire depuis des applications comme WhatsApp, et garder sa mémoire dans des fichiers sur leur propre machine, qu’ils peuvent lire et modifier. Discussions : [avril 2026](${hn.whoIsUsing}), [août 2026](${hn.grokBot}).`,
        `Un aperçu de la direction que prennent les assistants (2 sur 10). Même les commentateurs qui le critiquent disent qu’il fait ce que les assistants intégrés aux téléphones et aux ordinateurs auraient dû faire, et s’attendent à ce que l’idée survive à ce projet. Discussions : [février 2026](${hn.appleIntelligence}), [mars 2026](${hn.securityNightmare}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Les reproches fréquents",
      points: [
        `Il casse souvent et demande un entretien constant (6 discussions sur 10). Les utilisateurs décrivent des mises à jour qui cassent des choses, des fonctionnalités qui cessent de marcher sans prévenir, et plus de temps passé à le réparer qu’à s’en servir. Comme l’a écrit un commentateur de Hacker News en novembre 2026 : « À chaque mise à jour, quelque chose cassait, et je passais plus de temps à réparer » (« Every update something broke, and I spent more time fixing things ») ([discussion](${hn.agenticSetup})). Discussions : [février 2026](${hn.appleIntelligence}), [avril 2026](${hn.whoIsUsing}), [avril 2026](${hn.memory}), [août 2026](${hn.grokBot}), [novembre 2026](${hn.agenticSetup}), [novembre 2026](${hn.saas}).`,
        `Son accès étendu représente un risque de sécurité (5 sur 10). Les utilisateurs soulignent qu’il obtient un large accès à votre ordinateur et à vos comptes, et qu’il peut être manipulé par injection de prompts. Le conseil habituel est de le faire tourner sur une machine séparée, avec des comptes séparés ; certains disent de ne pas l’installer du tout. Discussions : [février 2026](${hn.personalComputer}), [février 2026](${hn.appleIntelligence}), [février 2026](${hn.changingMyLife}), [mars 2026](${hn.securityNightmare}), [avril 2026](${hn.whoIsUsing}).`,
        `Plus de battage que d’usage réel (4 sur 10). Les utilisateurs disent que les publications sur OpenClaw promettent de grands changements sans exemples concrets, et que ses tâches de démo habituelles, comme réserver un vol ou planifier une réunion, ressemblent davantage à du théâtre de productivité qu’à du temps gagné. Discussions : [février 2026](${hn.changingMyLife}), [mars 2026](${hn.securityNightmare}), [avril 2026](${hn.whoIsUsing}), [novembre 2026](${hn.agenticSetup}).`,
        `Le coût, et la dépendance aux abonnements d’autres entreprises (3 sur 10). Les utilisateurs disent que l’usage des modèles qui le font tourner finit par chiffrer. En avril 2026, une discussion Hacker News a rapporté qu’Anthropic ne permettait plus d’utiliser les abonnements Claude Code avec OpenClaw ; les commentateurs ont mis en balance le paiement au tarif de l’API et le passage à d’autres fournisseurs de modèles. Discussions : [avril 2026](${hn.whoIsUsing}), [avril 2026](${hn.anthropicSubscriptions}), [avril 2026](${hn.memory}).`,
        `Il demande une machine dédiée et des compétences techniques (2 sur 10). Les utilisateurs disent qu’il vaut mieux le faire tourner sur un ordinateur séparé, avec quelqu’un à l’aise pour l’entretenir, et certains patrons de petites entreprises demandent plutôt une version hébergée, prête à l’emploi. Discussions : [février 2026](${hn.personalComputer}), [novembre 2026](${hn.saas}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Ce vers quoi les gens se tournent",
      text: [
        "Ces options ont été recommandées dans au moins 2 des 10 discussions. D’autres outils n’ont été cités que dans une seule discussion chacun, nous les laissons donc de côté ici ; notre [guide des alternatives à OpenClaw](/blog/openclaw-alternatives) compare les principales options d’après leur propre documentation.",
      ],
      points: [
        `Hermes Agent (3 sur 10). Les utilisateurs qui sont passés à Hermes Agent disent qu’il fonctionne de façon plus fiable chez eux. Voir [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) et [les tarifs d’Hermes Agent](/pricing/hermes-agent). Discussions : [avril 2026](${hn.whoIsUsing}), [août 2026](${hn.grokBot}), [novembre 2026](${hn.agenticSetup}).`,
        `Claude Code ou Codex tout simplement, avec des skills et un bon \`CLAUDE.md\` (3 sur 10). Plusieurs utilisateurs disent avoir monté de grosses configurations OpenClaw, puis être revenus aux agents de code qu’ils avaient déjà. Voir [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) et [Claude Code vs Codex](/blog/claude-code-vs-codex). Discussions : [février 2026](${hn.changingMyLife}), [avril 2026](${hn.whoIsUsing}), [novembre 2026](${hn.agenticSetup}).`,
        `Claude Cowork (2 sur 10). Recommandé comme assistant hébergé d’Anthropic. Voir notre [guide Claude Cowork](/personal-agent/claude-cowork). Discussions : [avril 2026](${hn.whoIsUsing}), [novembre 2026](${hn.agenticSetup}).`,
        `Des tâches cron et vos propres scripts (2 sur 10). Certains utilisateurs disent que l’essentiel de ce que fait OpenClaw pourrait tenir dans un ensemble de scripts planifiés. Discussions : [avril 2026](${hn.whoIsUsing}), [novembre 2026](${hn.agenticSetup}).`,
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
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, février 2026",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, février 2026",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, mars 2026",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, mars 2026",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, avril 2026",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, juin 2026",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, juillet 2026",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, août 2026",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, octobre 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Les faits sur OpenClaw, pour vérifier ce qui se dit",
      text: [
        "D’après le README, la documentation et le GitHub d’OpenClaw, vérifiés le 13 novembre 2026. Plus de détails sur le coût dans notre page [tarifs d’OpenClaw](/pricing/openclaw).",
      ],
      points: [
        "Ce que c’est : un assistant IA personnel open source. Un Gateway tourne sur votre propre ordinateur et vous répond dans des applications de discussion comme WhatsApp, Telegram, Slack, Discord et iMessage ; l’état, la mémoire et les identifiants restent sur votre matériel.",
        "Prix : gratuit. Son README indique que le projet n’a ni offre payante, ni service hébergé, ni jeton. Vous payez votre fournisseur de modèles.",
        "Licence : MIT. Le projet est géré par l’OpenClaw Foundation, une organisation à but non lucratif indépendante.",
        "Où il tourne : sur votre propre machine, avec des installateurs pour macOS, Linux, Windows et WSL2, des applications pour macOS, iOS, Android, Windows et Linux, et des installations Docker et Nix documentées.",
        "Modèles : des plugins pour OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM et d’autres.",
        "Sécurité, selon sa propre documentation : les outils s’exécutent sur l’hôte pour la session principale, sauf si vous configurez le sandboxing, et les approbations d’exécution sont désactivées par défaut.",
        "Planification : un planificateur intégré pour les tâches récurrentes et ponctuelles, plus des déclencheurs par webhook et Gmail.",
        "Noms : renommé OpenClaw le 30 janvier 2026 ; parmi ses anciens noms figurent Clawdbot et Moltbot. Il compte 394 406 étoiles sur GitHub au 13 novembre 2026. Site officiel : [openclaw.ai](https://openclaw.ai).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un poste permanent à Claude Code ou Codex",
      text: [
        "Plusieurs utilisateurs de ces discussions sont revenus à Claude Code ou Codex. Crewmark s’appuie sur eux : il transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs et d’horaires de travail, chacun prenant le ticket suivant sur un tableau partagé. Ce n’est pas un assistant personnel dans vos applications de discussion : le travail passe par des tickets, il n’y a pas d’intégration Slack intégrée, et les agents tournent sur votre ordinateur, qui doit rester allumé. Il est open source sous GPL-3.0 et gratuit pour 1 projet et jusqu’à 3 employés IA.",
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
        q: "OpenClaw vaut-il le coup ?",
        a: "Tout dépend de l’entretien que vous êtes prêt à accepter. Dans les 10 discussions Hacker News que nous avons lues, les utilisateurs qui l’apprécient s’en servent pour des tâches personnelles comme des rappels et des tâches d’agenda, depuis des applications de discussion qu’ils utilisent déjà. Le reproche le plus fréquent, dans 6 des 10 discussions, est qu’il casse souvent et demande des réparations constantes. Le logiciel est gratuit, sous licence MIT ; vous payez les modèles qu’il utilise.",
      },
      {
        q: "OpenClaw est-il sûr ?",
        a: "La sécurité est revenue dans 5 des 10 discussions. Les utilisateurs pointent son large accès à votre ordinateur et à vos comptes ainsi que l’injection de prompts, et conseillent de le faire tourner sur une machine séparée, avec des comptes séparés. Le README d’OpenClaw lui-même indique que les outils s’exécutent sur l’hôte pour la session principale, sauf si vous configurez le sandboxing, et que ses approbations d’exécution sont désactivées par défaut.",
      },
      {
        q: "Pourquoi dit-on qu’OpenClaw est surcoté ?",
        a: "Dans 4 des 10 discussions, les utilisateurs disent que les publications à son sujet promettaient de grands résultats sans exemples concrets, et que ses tâches de démo ressemblent davantage à du théâtre de productivité qu’à du temps gagné. L’une des discussions Reddit que nous listons, publiée sur r/LocalLLaMA en mars 2026, porte un titre qui le dit surcoté et suggère plutôt les skills ; nous ne l’avons pas lue.",
      },
      {
        q: "Qu’utilise-t-on à la place d’OpenClaw ?",
        a: "Dans les discussions que nous avons lues : Hermes Agent, et Claude Code ou Codex tout simplement (3 discussions chacun), puis Claude Cowork, et des tâches cron avec vos propres scripts (2 discussions chacun). Notre [guide des alternatives à OpenClaw](/blog/openclaw-alternatives) compare les options d’après leur propre documentation.",
      },
      {
        q: "Que disent les utilisateurs de Reddit sur OpenClaw ?",
        a: "Nous n’avons pas pu ouvrir Reddit, nous n’avons donc pas résumé ces discussions. D’après leurs seuls titres : quatre demandent si OpenClaw vaut encore le coup, s’il vaut la peine de le garder ou s’il est mort, l’une d’elles maintenant que son auteur a Codex ; trois ont un titre critique, dont l’une suggère d’utiliser plutôt des skills ; une, sur r/myclaw, conteste qu’on le dise inutile ; et une est un avis après des tests approfondis. Les neuf sont listées avec leur lien dans [Plus de discussions sur Reddit](#reddit).",
      },
      {
        q: "OpenClaw est-il gratuit ?",
        a: "Oui. Son README indique que le projet n’a ni offre payante, ni service hébergé, ni jeton, et il est sous licence MIT. Vous payez votre fournisseur de modèles, et le coût est revenu dans 3 des 10 discussions que nous avons lues, dont une discussion d’avril 2026 selon laquelle Anthropic ne permettait plus d’utiliser les abonnements Claude Code avec lui. Voir [les tarifs d’OpenClaw](/pricing/openclaw).",
      },
    ],
  },
  cta: {
    title: "Confiez un poste permanent à votre agent de codage.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Discussions lues le 13 novembre 2026. Informations sur le produit vérifiées le même jour dans le README, la documentation et le GitHub d’OpenClaw.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec l’OpenClaw Foundation ni avec aucune entreprise citée sur cette page, et non approuvé par elles. Les opinions résumées ici sont celles des commentateurs des discussions en lien. Les noms de produits sont des marques de leurs propriétaires.",
};
