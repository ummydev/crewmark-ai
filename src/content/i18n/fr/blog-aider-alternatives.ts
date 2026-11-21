import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// fr translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, un fork communautaire d’Aider
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (modèles locaux via Ollama)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider chargeait vos conventions avec --read
aider --read CONVENTIONS.md

# OpenCode et Codex lisent AGENTS.md à la racine du dépôt
mv CONVENTIONS.md AGENTS.md

# Claude Code lit CLAUDE.md ; importez-y le même fichier
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à Aider (2026) : Aider est-il mort ?",
    description:
      "Aider est-il encore maintenu ? Sa dernière release, son dernier commit et ses issues ouvertes, puis les meilleures alternatives à Aider en 2026 : le fork cecli, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI et Claude Code, avec les commandes d’installation.",
  },
  breadcrumb: "Alternatives à Aider",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agents de code",
    title: "Alternatives à Aider en 2026 : Aider est-il mort, et que prendre à la place ?",
    lead: "Aider a été le premier pair programmer IA dans le terminal : open source, compatible avec n’importe quel modèle, une carte de votre dépôt et un commit git pour chaque modification. Il s’installe et fonctionne toujours, et compte environ 50 000 étoiles sur GitHub. Mais sa dernière release taguée sur GitHub date d’août 2025 et son dernier commit du 22 mai 2026 ; beaucoup d’utilisateurs cherchent donc un outil qui suit le rythme des nouveaux modèles. Voici où en est le projet, les alternatives les plus proches du fonctionnement d’Aider et comment migrer votre configuration.",
    cta: "Commencer",
    secondary: "Aider est-il mort ?",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Aider est-il mort ?",
      text: [
        "Pas officiellement. Le dépôt n’est pas archivé et personne n’a annoncé sa fin. Mais d’après tous les signaux publics, il est à peine maintenu :",
      ],
      points: [
        "Dernière release taguée sur GitHub : v0.86.0, le 9 août 2025. Le dernier paquet sur PyPI, aider-chat 0.86.2, a été publié le 12 février 2026.",
        "Dernier commit sur la branche principale : le 22 mai 2026, un merge qui ajoutait des noms de modèles Claude plus récents.",
        "Environ 1 960 issues et pull requests ouvertes.",
        "En janvier 2026, un utilisateur a ouvert une issue sur l’avenir d’Aider. Une réponse le décrit comme un projet essentiellement porté par une seule personne, qui a ralenti ; le mainteneur n’y a pas répondu.",
        "Le README indique toujours qu’Aider fonctionne le mieux avec Claude 3.7 Sonnet, DeepSeek R1, o3-mini et GPT-4o.",
      ],
    },
    {
      kind: "text",
      title: "Choix rapides",
      points: [
        "Aider, mais toujours mis à jour : cecli, un fork communautaire d’Aider.",
        "L’agent de terminal open source le plus populaire, avec n’importe quel modèle : OpenCode, MIT, environ 226 000 étoiles.",
        "L’esprit minimaliste d’Aider : Pi, un petit harness que vous étendez vous-même, MIT, environ 121 000 étoiles.",
        "Les modèles locaux d’abord, comme beaucoup d’utilisateurs d’Aider : Nanocoder, avec Ollama.",
        "Le mode watch d’Aider, où vous demandez des modifications dans des commentaires de code : Cline ou Kilo Code dans VS Code et JetBrains.",
        "Vous payez déjà ChatGPT ou Claude : Codex CLI ou Claude Code.",
        "Un agent qui traite un backlog selon un planning, pas seulement quand vous tapez : Crewmark, par-dessus Claude Code ou Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des alternatives à Aider",
      text: [
        "Étoiles arrondies, d’après l’API GitHub le 10 novembre 2026 ; « dernier commit » désigne le commit le plus récent sur la branche principale ce jour-là.",
      ],
      headers: ["Outil", "Licence", "Écrit en", "Modèles", "Coût", "Idéal pour"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k étoiles)", "Python", "Presque tous, y compris locaux", "Gratuit ; votre clé de modèle", "La référence ; dernier commit le 22 mai 2026"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (~420 étoiles)", "Python", "Comme Aider", "Gratuit ; votre clé de modèle", "Rester proche d’Aider sur un fork toujours mis à jour"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k étoiles)", "TypeScript", "N’importe quel fournisseur, modèles locaux", "Modèles gratuits avec limite quotidienne ; Go $10/mois", "Un agent de terminal complet avec modes Plan et Build et une application de bureau"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k étoiles)", "TypeScript", "Votre abonnement ou clé API", "Gratuit", "Un harness minimal que vous étendez avec des outils et des skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k étoiles)", "Go", "La plupart des fournisseurs, Ollama", "Gratuit ; votre clé", "Une interface de terminal soignée avec LSP et MCP, sur toutes les plateformes"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k étoiles)", "TypeScript", "Votre clé de modèle", "Gratuit", "Un agent dans VS Code, JetBrains ou le terminal"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (~28k étoiles)", "TypeScript", "500+, au tarif du fournisseur", "Gratuit pour commencer", "Des extensions d’IDE plus une CLI forkée d’OpenCode"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k étoiles)", "TypeScript", "Ollama ou toute API compatible OpenAI", "Gratuit", "Du code privé, local d’abord"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k étoiles)", "Rust", "OpenAI", "Tout forfait ChatGPT, y compris Free ; ou une clé API", "Les utilisateurs de ChatGPT qui veulent un agent natif rapide"],
        ["[Claude Code](https://code.claude.com/docs)", "Propriétaire", "-", "Anthropic", "Claude Pro $20/mois", "Les utilisateurs de Claude"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (~16k étoiles)", "Go", "Plusieurs fournisseurs", "Gratuit ; votre clé de modèle", "Les gros projets ; dernier commit le 3 octobre 2025"],
        ["[Crewmark](/pricing)", "Propriétaire", "-", "Via votre Claude Code ou Codex", `Forfait gratuit (${free.projects} projet, ${free.employees} employés IA) ; Pro $${pro.price}/mois bientôt disponible`, "Un agent doté d’un rôle, d’horaires de travail et d’une pulsation, qui prend l’issue suivante sur un tableau"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternatives open source à Aider à installer dès aujourd’hui",
      text: [
        "Chacune s’installe en une commande. Lisez un script avant de le passer à votre shell.",
      ],
      steps: [
        {
          title: "cecli, le fork d’Aider",
          text: "cecli est né comme fork d’Aider en août 2025 et il est toujours mis à jour. Il se présente comme un agent CLI pensé pour l’extensibilité et la personnalisation, s’installe sous la commande `cecli` sur macOS, Linux et Windows, et est aussi disponible sur PyPI sous le nom cecli-dev.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Le plus proche d’Aider en portée : open source, d’abord dans le terminal, et compatible avec plus de 200 fournisseurs de modèles, y compris locaux. Il ajoute un agent Plan en lecture seule à côté de l’agent Build à accès complet, des subagents et une application de bureau en bêta.",
        },
        {
          title: "Pi et Nanocoder",
          text: "Pi garde un noyau réduit et se passe volontairement de sub-agents et de mode plan ; vous ajoutez ce dont vous avez besoin avec des extensions et des skills. Nanocoder est développé par un collectif à but non lucratif pour les modèles locaux via Ollama, avec des modes plan et architect, ce dernier familier aux utilisateurs d’Aider.",
        },
      ],
      source: { label: "Source : le README de chaque projet sur GitHub", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Passer d’Aider à un autre agent",
      steps: [
        {
          title: "Reprenez votre fichier de conventions",
          text: "Aider lit les conventions de code dans un fichier chargé avec `--read`. OpenCode et Codex lisent `AGENTS.md` à la racine du dépôt, et Claude Code lit `CLAUDE.md`, qui peut importer `AGENTS.md`. Voir [AGENTS.md pour Codex](/blog/codex-agents-md) et [CLAUDE.md](/blog/claude-md).",
          code: conventions,
        },
        {
          title: "Décidez comment gérer les commits",
          text: "Aider commite chaque modification avec un message généré. Claude Code, Codex et OpenCode vous laissent les commits par défaut : demandez un commit quand une modification est terminée, ou écrivez votre règle de commit dans AGENTS.md.",
        },
        {
          title: "Apportez vos modèles",
          text: "Si vous utilisiez Aider avec DeepSeek ou un modèle local, OpenCode, Crush, Nanocoder et Pi acceptent tous vos propres clés, et les trois premiers communiquent avec Ollama. Voir [Claude Code avec DeepSeek](/blog/claude-code-deepseek) pour l’inverse.",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider vs OpenCode, Claude Code, Pi et Cline",
      points: [
        "Aider vs OpenCode : tous deux sont open source et indépendants du modèle. OpenCode reçoit plus de 100 commits par semaine et ajoute des agents, des subagents, MCP et une application de bureau ; Aider est plus simple et commite pour vous.",
        "Aider vs Claude Code : Claude Code est propriétaire et utilise les modèles d’Anthropic, inclus à partir de Claude Pro à $20 par mois ; il reçoit en premier les nouvelles fonctionnalités de Claude. Aider est gratuit et fonctionne avec n’importe quel modèle.",
        "Aider vs Pi : tous deux sont volontairement petits. Pi est activement développé, avec un SDK, un mode RPC et un système de paquets pour les extensions.",
        "Aider vs Cline : Cline vit surtout dans votre éditeur, avec aussi une CLI ; Aider est d’abord dans le terminal, avec un mode watch pour les commentaires dans l’éditeur.",
        "Aider vs Codex : Codex CLI est open source et écrit en Rust, inclus dans tous les forfaits ChatGPT ; il utilise les modèles d’OpenAI.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Du pair programmer au coéquipier avec un backlog",
      text: [
        "Aider et tous les outils de cette liste attendent votre prochain message. Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : pendant son service, il se réveille, prend l’issue suivante sur un tableau, commite et ouvre une pull request, et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Recrutez un employé sur votre agent",
          text: "Lancez la commande d’installation dans une conversation Claude Code ou Codex ; cette conversation devient l’employé. Voir l’[ingénieur logiciel IA](/ai-employees/software-engineer).",
        },
        {
          title: "Donnez-lui des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous fixez. Voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Comparez le reste",
          text: "Pour d’autres agents de terminal, voir les [alternatives à OpenCode](/blog/opencode-alternatives) ; pour les éditeurs, les [alternatives à Cursor](/blog/cursor-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez un agent qui continue de travailler entre vos prompts ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation pendant les horaires de travail et prennent l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les alternatives à Aider",
    items: [
      {
        q: "Aider est-il mort ?",
        a: "Il n’est pas archivé, et il s’installe et fonctionne toujours. Mais sa dernière release GitHub est la v0.86.0 d’août 2025, sa dernière release PyPI date de février 2026 et son dernier commit du 22 mai 2026, et une question de janvier 2026 sur son avenir n’a reçu aucune réponse du mainteneur.",
      },
      {
        q: "Aider est-il encore maintenu ?",
        a: "À peine. Aucun commit depuis le 22 mai 2026, environ 1 960 issues et pull requests sont ouvertes, et le README recommande toujours des modèles du début de 2025. cecli, un fork communautaire, est toujours mis à jour.",
      },
      {
        q: "Existe-t-il un fork d’Aider ?",
        a: "Oui : cecli, un fork GitHub d’Aider lancé en août 2025, sous Apache 2.0, installé sous la commande `cecli`. Il est bien plus petit qu’Aider, avec environ 420 étoiles.",
      },
      {
        q: "Aider vs OpenCode : lequel est le meilleur en 2026 ?",
        a: "Pour la plupart des gens, OpenCode : il est open source et indépendant du modèle comme Aider, mais il est mis à jour presque tous les jours et ajoute des subagents, MCP et une application de bureau. Aider est plus simple et commite chaque modification pour vous.",
      },
      {
        q: "Aider est-il gratuit ?",
        a: "Oui. Aider est sous Apache 2.0 et gratuit ; vous payez votre fournisseur de modèle, ou rien si vous utilisez un modèle local.",
      },
      {
        q: "Quelle est la meilleure alternative gratuite à Aider ?",
        a: "OpenCode inclut des modèles gratuits avec une limite quotidienne ; Nanocoder, Crush et OpenCode font tourner gratuitement des modèles locaux via Ollama ; et Codex CLI fonctionne avec un compte ChatGPT gratuit.",
      },
    ],
  },
  cta: {
    title: "Donnez un backlog à votre agent de code, pas seulement un prompt.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après le dépôt GitHub, le README et les releases de chaque projet, PyPI et les pages de prix des éditeurs le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Aider ni à aucun des projets cités, ni approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
