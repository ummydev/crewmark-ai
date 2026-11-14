import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash (1017) : prix, contexte, vs V4 Pro",
    description:
      "DeepSeek-V4.1-Flash-1017 expliqué : ce qui a changé le 17 octobre 2026, prix de l’API, contexte de 1M, poids ouverts sur Hugging Face, résultats de benchmarks publiés par DeepSeek et quand préférer V4 Pro.",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek V4.1 Flash (1017) : prix, contexte, benchmarks et comparaison avec V4 Pro",
    lead: "DeepSeek-V4.1-Flash-1017 est la mise à jour du 17 octobre 2026 de DeepSeek V4.1 Flash, le plus petit modèle de la nouvelle architecture de DeepSeek, avec compréhension des images et un contexte de 1M de tokens. C’est le modèle que l’API sert sous le nom `deepseek-flash`, celui qu’utilisent le site et l’application de DeepSeek, et celui que DeepSeek Harness fait tourner par défaut ; ses poids sont ouverts sous licence MIT. Selon DeepSeek, il obtient de meilleurs scores que la version de septembre tout en terminant les tâches plus vite, avec des réponses plus courtes. Voici ce que c’est, ce qu’il coûte, comment il se compare à V4 Pro et comment l’utiliser.",
    cta: "Commencer",
    secondary: "Aller aux tarifs",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash en un coup d’œil",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["Sortie", "V4.1 Flash le 10 septembre 2026 ; la mise à jour 1017 le 17 octobre 2026"],
        ["Nom du modèle dans l’API", "`deepseek-flash` (les anciens noms `deepseek-v4-flash` et `deepseek-v4-flash-vision-exp` sont servis par lui)"],
        ["Entrée", "Texte et images"],
        ["Fenêtre de contexte", "1M de tokens ; DeepSeek recommande un `max_tokens` de 256K ou plus"],
        ["Poids", "Ouverts sur Hugging Face, licence MIT"],
        ["Où il tourne", "API, site et application de DeepSeek ; modèle par défaut dans DeepSeek Harness"],
        ["Optimisé pour", "DeepSeek Harness (v0.2.1-rc.1 ou ultérieure), Tencent CodeBuddy et WorkBuddy, selon DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Prix de DeepSeek V4.1 Flash vs V4 Pro",
      text: [
        "Tarifs de l’API DeepSeek en dollars américains par million de tokens au 6 novembre 2026. Les tarifs heures creuses s’appliquent en dehors des plages 01:00–04:00 et 06:00–10:00 UTC en semaine et valent la moitié des tarifs heures pleines ; la mise à jour 1017 n’a pas changé les prix. Les API Search et Fetch de DeepSeek coûtent chacune 0,75 $ les 1 000 appels.",
      ],
      headers: ["Par million de tokens", "Flash, heures pleines", "Flash, heures creuses", "V4 Pro, heures pleines", "V4 Pro, heures creuses"],
      rows: [
        ["Entrée, cache hit", "0,006 $", "0,003 $", "0,044 $", "0,022 $"],
        ["Entrée, cache miss", "0,30 $", "0,15 $", "1,32 $", "0,66 $"],
        ["Sortie", "1,20 $", "0,60 $", "3,96 $", "1,98 $"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de DeepSeek V4.1 Flash (selon DeepSeek)",
      text: [
        "Ce sont les chiffres de DeepSeek publiés sur la fiche du modèle, qui comparent la mise à jour 1017 au V4.1 Flash de septembre. DeepSeek a fait tourner Terminal-Bench 4.0 avec le harness de Claude Code et DeepSWE avec Mini-SWE-V2. Les benchmarks d’un éditeur avantagent ses propres modèles : testez sur vos propres tâches avant de changer.",
      ],
      headers: ["Benchmark", "V4.1 Flash 1017", "V4.1 Flash (sept.)"],
      rows: [
        ["Terminal-Bench 4.0", "42,3", "31,2"],
        ["DeepSWE v1.1", "77,0", "74,2"],
        ["ProgramBench", "29,1", "20,3"],
        ["NL2Repo-Bench", "68,2", "65,4"],
        ["Automation-Bench v1.0.6", "60,5", "54,8"],
        ["Agents' Last Exam", "35,4", "31,8"],
        ["HLE (sans outils)", "42,6", "36,8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash vs V4 Pro : lequel choisir",
      points: [
        "V4 Pro (`deepseek-v4-pro`, disponible pour tous depuis le 13 août 2026) coûte 4,4 fois plus cher par token d’entrée et 3,3 fois plus cher par token de sortie, et n’accepte que du texte ; Flash ajoute l’entrée d’images.",
        "Les deux ont un contexte de 1M de tokens et un niveau de raisonnement réglable (low, high et max).",
        "Les configurations d’agents de code de DeepSeek elle-même utilisent Flash par défaut : DeepSeek Harness, ainsi que les réglages recommandés pour Claude Code, qui associent Sonnet et Haiku à Flash et seulement Opus à V4 Pro.",
        "Une répartition pratique : Flash pour le travail courant des agents et les sous-agents, V4 Pro quand une tâche difficile continue d’échouer avec Flash.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment utiliser DeepSeek V4.1 Flash",
      steps: [
        {
          title: "Via l’API",
          text: "Créez une clé d’API sur platform.deepseek.com et appelez le modèle sous le nom `deepseek-flash` ; l’API est compatible OpenAI et Anthropic.",
          code: api,
        },
        {
          title: "Dans un agent de code",
          text: "Faites-le tourner dans DeepSeek Harness, où il est le modèle par défaut, ou faites pointer Claude Code ou Codex vers DeepSeek ; voir [DeepSeek Harness](/blog/deepseek-harness) et [Claude Code avec DeepSeek](/blog/claude-code-deepseek).",
        },
        {
          title: "En local, avec les poids ouverts",
          text: "Téléchargez DeepSeek-V4.1-Flash-1017 sur Hugging Face. Le dépôt fournit un encodeur de prompts de référence et des instructions d’inférence au lieu d’un modèle de chat ; DeepSeek recommande temperature 1.0 et top_p 1.0.",
        },
      ],
      source: { label: "Source : DeepSeek-V4.1-Flash-1017 sur Hugging Face", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un modèle bon marché et capable, au travail sur votre backlog",
      text: [
        "Aux tarifs de Flash, garder un agent occupé toute la journée reste abordable. Crewmark transforme une session DeepSeek Harness, Claude Code, Codex ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail, et la réveille avec une pulsation (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Choisissez l’agent et le modèle",
          text: "DeepSeek Harness fait tourner V4.1 Flash par défaut ; Claude Code et Codex peuvent l’utiliser via l’endpoint de DeepSeek.",
        },
        {
          title: "Donnez-lui un rôle et un objectif",
          text: "Lisez [ce qu’est un employé IA](/ai-employees) et ce qui le distingue d’un [superagent](/blog/superagent).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, il se réveille toutes les 15, 30 ou 60 minutes et prend la prochaine issue ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser DeepSeek V4.1 Flash" },
  mid: {
    title: "Un modèle aussi bon marché devrait travailler toute la journée.",
    text: "Crewmark réveille DeepSeek Harness, Claude Code ou Codex avec une pulsation, un rôle, un objectif et un tableau d’issues.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ DeepSeek V4.1 Flash",
    items: [
      {
        q: "Qu’est-ce que DeepSeek V4.1 Flash 1017 ?",
        a: "La mise à jour du 17 octobre 2026 de DeepSeek V4.1 Flash, le plus petit modèle de la nouvelle architecture de DeepSeek. Il accepte texte et images, dispose d’un contexte de 1M de tokens et est servi sous le nom `deepseek-flash`.",
      },
      {
        q: "Combien coûte DeepSeek V4.1 Flash ?",
        a: "Sur l’API, 0,30 $ par million de tokens d’entrée en cache miss (0,006 $ en cache hit) et 1,20 $ par million de tokens de sortie en heures pleines ; en heures creuses, les prix sont divisés par deux.",
      },
      {
        q: "Quelle est la fenêtre de contexte de DeepSeek V4.1 Flash ?",
        a: "1M de tokens, DeepSeek recommandant un `max_tokens` d’au moins 256K.",
      },
      {
        q: "DeepSeek V4.1 Flash est-il open source ?",
        a: "Ses poids sont ouverts sur Hugging Face sous licence MIT, avec un encodeur de prompts de référence et des instructions d’inférence.",
      },
      {
        q: "DeepSeek V4.1 Flash vs V4 Pro : quelle différence ?",
        a: "V4 Pro coûte 4,4 fois plus cher par token d’entrée et 3,3 fois plus par token de sortie, et n’accepte que du texte ; Flash accepte les images et est le modèle par défaut des configurations d’agents de code de DeepSeek. Les deux ont un contexte de 1M.",
      },
      {
        q: "Qu’est-ce qui a changé entre V4.1 Flash et 1017 ?",
        a: "DeepSeek annonce de meilleurs scores sur les benchmarks d’agents et de code, des réponses plus courtes et des tâches terminées plus vite, au même prix et sous le même nom de modèle.",
      },
      {
        q: "Peut-on utiliser DeepSeek V4.1 Flash dans Claude Code ?",
        a: "Oui. DeepSeek documente des variables d’environnement qui font pointer Claude Code vers son endpoint compatible Anthropic avec `deepseek-flash` ; voir [Claude Code avec DeepSeek](/blog/claude-code-deepseek).",
      },
    ],
  },
  cta: {
    title: "Faites de DeepSeek V4.1 Flash un employé IA.",
    text: "Crewmark transforme des sessions DeepSeek Harness, Claude Code, Codex et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de l’API DeepSeek (journal des modifications, actualités, tarifs) et sur la fiche du modèle Hugging Face le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec DeepSeek et non approuvé par elle. Les résultats de benchmarks sont ceux de DeepSeek. Les noms de produits sont des marques de leurs propriétaires.",
};
