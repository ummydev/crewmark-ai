import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: Trouve le sujet SEO du jour. À utiliser au début de chaque session de travail SEO.
---

1. Consulte les changelogs et l’actualité des produits qu’utilisent nos lecteurs.
2. Pour chaque candidat, récupère les suggestions de la saisie semi-automatique
   de Google et note les variantes longue traîne que les gens tapent déjà.
3. Ne garde que les sujets liés à notre produit qui n’ont pas encore
   de bonne réponse en première page.
4. Écris le sujet retenu, la raison et les sujets écartés dans
   docs/seo/log.md, puis rédige la page.`;

const claudeMd = `# Règles SEO
- Des faits issus uniquement de la documentation officielle ; ajoute la date de vérification.
- Chaque page commence par une définition en une phrase, puis des étapes,
  un tableau comparatif et une FAQ.
- Un mot-clé principal par URL ; vérifie d’abord docs/seo/keywords.md.
- Après un déploiement : notifie IndexNow, demande l’indexation, consigne-le.`;

export const copy: GuideCopy = {
  meta: {
    title: "Agent IA SEO : en créer un avec Claude Code | Crewmark AI",
    description:
      "Ce que peut faire un agent IA pour le SEO, le workflow quotidien qui fonctionne et comment en créer un avec Claude Code ou Codex : règles CLAUDE.md, skills, MCP, IndexNow et planification. D’après l’agent qui gère le SEO de ce site.",
  },
  breadcrumb: "Agent IA SEO",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Employés IA",
    title: "Agent IA SEO (AI SEO agent) : comment en créer un qui travaille tous les jours",
    lead: "Un agent IA SEO est un agent de codage, comme Claude Code ou Codex, chargé de faire croître le trafic organique : il repère les sujets que les gens commencent à chercher, rédige et traduit des pages, les met en ligne, demande aux moteurs de recherche de les indexer et vérifie ce qui a bougé. Le SEO de ce site fonctionne ainsi, confié à un employé IA sur Crewmark. Ce guide présente le workflow qu’il suit, les règles et les skills qui le gardent rigoureux, les outils dont il a besoin et la façon de mettre en place le vôtre.",
    cta: "Commencer",
    secondary: "Aller à la mise en place",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que peut faire un agent IA SEO",
      points: [
        "Trouver des sujets : lire les changelogs et l’actualité des produits, puis consulter la saisie semi-automatique de Google et Google Trends pour voir les questions que les gens tapent déjà.",
        "Éviter la cannibalisation entre vos propres pages : tenir une carte des mots-clés avec un mot-clé principal par URL et la consulter avant d’écrire.",
        "Rédiger des pages qui répondent d’abord à la question : une définition en une phrase, des étapes, un tableau comparatif et une FAQ, un format qui convient aussi aux assistants IA qui citent des pages.",
        "Traduire et mettre en ligne : générer la page dans toutes les langues que vous proposez, la tester en local et la transmettre pour le déploiement.",
        "La faire indexer : notifier IndexNow, soumettre à nouveau le sitemap et demander l’indexation.",
        "Mesurer et ajuster : lire Search Console et les statistiques, puis réécrire les titres ou ajouter des liens internes là où les pages obtiennent des impressions mais pas de clics.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment créer un agent IA SEO avec Claude Code",
      steps: [
        {
          title: "Écrire les règles dans CLAUDE.md",
          text: "Placez l’incontournable là où l’agent le lit à chaque session : d’où peuvent venir les faits, comment les pages sont structurées et quoi faire après chaque déploiement. Voir le [guide CLAUDE.md](/blog/claude-md).",
          code: claudeMd,
        },
        {
          title: "Transformer la routine quotidienne en skill",
          text: "Une skill dans `.claude/skills/` contient la routine étape par étape et ne se charge que lorsqu’elle sert. Commencez chaque session avec elle. Voir [les skills de Claude Code](/blog/claude-code-skills).",
          code: skill,
        },
        {
          title: "Tenir une carte des mots-clés et un journal dans le dépôt",
          text: "Deux fichiers Markdown suffisent pour beaucoup : `keywords.md` (mot-clé → URL → statut) empêche deux pages de se disputer la même requête, et `log.md` consigne ce qui a été choisi et pourquoi, pour que la session suivante reprenne le fil au lieu de repartir de zéro.",
        },
        {
          title: "Lui donner les outils dont il a besoin",
          text: "Recherche et récupération web pour s’informer, le code du site et un serveur de développement local pour tester les pages, un serveur MCP ou une CLI pour vos statistiques, et un script pour IndexNow. Privilégiez les CLI quand elles existent : elles coûtent moins de tokens. Voir [MCP dans Claude Code](/blog/claude-code-mcp).",
        },
        {
          title: "Encadrer les étapes risquées",
          text: "La publication doit passer par une relecture ou par un responsable des déploiements, jamais partir directement de l’agent. Utilisez des règles de permission et des [hooks](/blog/claude-code-hooks) pour tout ce qui ne doit jamais arriver, et gardez les secrets hors des prompts et des fichiers.",
        },
        {
          title: "Le planifier",
          text: "Le SEO récompense la régularité : l’agent doit donc démarrer seul chaque jour ouvré. Utilisez `/loop` ou des tâches planifiées pour un prompt récurrent unique, ou donnez-lui une pulsation et un backlog ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
      ],
      source: { label: "Source : documentation IndexNow", href: indexnow },
    },
    {
      kind: "table",
      title: "Un workflow SEO quotidien piloté par l’IA",
      text: [
        "Voici la checklist que l’employé IA chargé du SEO de ce site parcourt chaque jour, avec un rapport écrit à la fin.",
      ],
      headers: ["Étape", "Ce que fait l’agent", "Résultat"],
      rows: [
        ["1. Repérer", "Passe en revue les changelogs, les blogs des éditeurs, GitHub et l’actualité des 1 à 3 derniers jours ; récupère les données de saisie semi-automatique et de Trends", "Une courte liste de sujets candidats"],
        ["2. Vérifier", "Vérifie que le sujet est lié au produit, que la demande augmente et que la première page n’offre pas de bonne réponse", "Un sujet retenu, avec la raison consignée"],
        ["3. Rédiger", "Rédige uniquement à partir de sources officielles, puis traduit", "Une page dans toutes les langues"],
        ["4. Mettre en ligne", "Vérifie les types, fait le rendu en local, ouvre une demande de déploiement", "Une page en ligne sur le site"],
        ["5. Indexer", "Notifie IndexNow, soumet à nouveau le sitemap, demande l’indexation dans Search Console et Bing", "Moteurs de recherche notifiés"],
        ["6. Rendre compte", "Consigne le trafic, l’écart par rapport à l’objectif et ce qui a été fait", "Un rapport quotidien à l’équipe"],
      ],
    },
    {
      kind: "text",
      title: "Ce que nous avons appris en en faisant tourner un",
      points: [
        "Vérifiez la demande avant d’écrire : un mot en vogue sur les réseaux sociaux peut n’être qu’une petite requête ; Google Trends a déjà montré un terme voisin recherché environ 30 fois plus que celui dont tout le monde parlait.",
        "Des faits issus uniquement de sources primaires : les sous-agents de recherche lisent parfois mal une page ; rouvrez la source officielle avant de publier quoi que ce soit de surprenant.",
        "Pour un site récent, l’indexation est le goulot d’étranglement : demander l’indexation a fait entrer de nouvelles pages dans Google en un jour environ, mais les quotas quotidiens s’épuisent vite.",
        "Plusieurs langues multiplient les pages, pas l’effort : une page en anglais bien structurée en devient neuf grâce à une étape de traduction.",
        "La régularité l’emporte sur les coups d’éclat : l’objectif est un rythme quotidien que l’agent tient sans qu’on le lui demande.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Recruter un spécialiste SEO IA plutôt que d’en scripter un",
      text: [
        "Crewmark propose un spécialiste SEO prêt à recruter : il tourne dans votre session Claude Code, Codex, DeepSeek Harness ou OpenCode, se réveille au rythme d’une pulsation pendant ses horaires de travail, prend le ticket suivant sur un tableau et rend compte de son travail, exactement comme pour le SEO de ce site.",
      ],
      steps: [
        {
          title: "Choisir le rôle de spécialiste SEO",
          text: "Ses skills, son objectif et son planning sont déjà configurés ; remplacez l’objectif par votre propre chiffre, par exemple les clics Search Console par semaine. Voir le [rôle de spécialiste SEO IA](/ai-employees/seo-specialist) pour ses objectifs, sa routine et sa fiche de poste.",
        },
        {
          title: "Connecter votre projet",
          text: "Lancez la commande d’installation dans le dépôt du site pour qu’il puisse écrire des pages, les tester et ouvrir des demandes de déploiement.",
        },
        {
          title: "Relire, sans le surveiller",
          text: "Il commente ses tickets et vous écrit quand il a besoin d’une décision. Lisez [qu’est-ce qu’un employé IA](/ai-employees) et comparez [les plateformes d’employés IA](/blog/best-ai-employee-platforms).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Créer un agent IA SEO avec Claude Code" },
  mid: {
    title: "Vous voulez l’agent SEO sans avoir à le construire ?",
    text: "Le spécialiste SEO de Crewmark tourne sur votre Claude Code ou Codex, se réveille au rythme d’une pulsation et avance dans un backlog SEO.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les agents IA SEO",
    items: [
      {
        q: "Qu’est-ce qu’un agent IA SEO ?",
        a: "Un agent IA, généralement un agent de codage comme Claude Code ou Codex, chargé en continu de faire croître le trafic organique : trouver des sujets, rédiger et mettre en ligne des pages, les faire indexer et mesurer les résultats.",
      },
      {
        q: "Un agent IA peut-il faire du SEO tout seul ?",
        a: "Une bonne partie du travail quotidien, oui : recherche, rédaction, traduction, vérifications techniques et demandes d’indexation. La publication, les comptes et tout ce qui est irréversible doivent encore passer par une personne ou un responsable des déploiements.",
      },
      {
        q: "Existe-t-il un agent IA SEO gratuit ?",
        a: "Vous pouvez en créer un sur un agent que vous payez déjà, comme Claude Code avec un forfait Claude ou Codex avec ChatGPT, en utilisant des outils gratuits comme la saisie semi-automatique de Google, Google Trends, Search Console et IndexNow.",
      },
      {
        q: "De quels outils un agent IA SEO a-t-il besoin ?",
        a: "Recherche et récupération web, accès au code du site et un moyen de tester les pages, un accès en lecture à Search Console et aux statistiques, et un moyen de notifier les moteurs de recherche, comme IndexNow.",
      },
      {
        q: "Comment empêcher un agent IA SEO de publier des faits erronés ?",
        a: "Exigez dans ses règles des sources officielles et une date de vérification, faites-lui rouvrir les sources avant de publier des affirmations surprenantes et faites passer la publication par une relecture.",
      },
      {
        q: "Les pages rédigées par une IA se positionnent-elles ?",
        a: "Les pages se positionnent selon leur utilité, pas selon leur auteur. Ce qu’un agent IA SEO doit produire, ce sont des pages qui répondent d’abord à une vraie question en pleine croissance, avec des étapes et des comparaisons exactes.",
      },
      {
        q: "Faut-il utiliser n8n ou un agent de codage pour le SEO ?",
        a: "Les outils de workflow conviennent aux pipelines figés ; un agent de codage convient au travail qui demande du jugement et des modifications de code, comme écrire des pages dans un dépôt et les tester.",
      },
    ],
  },
  cta: {
    title: "Offrez à votre site un coéquipier SEO qui n’oublie jamais la checklist.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Workflow tel qu’appliqué par l’employé IA chargé du SEO de ce site ; détails sur Claude Code et IndexNow vérifiés dans leur documentation le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI ou Google et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
