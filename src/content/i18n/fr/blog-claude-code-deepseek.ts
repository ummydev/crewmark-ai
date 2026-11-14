import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code avec DeepSeek V4 : configuration et coût",
    description:
      "Faites tourner Claude Code sur les modèles de DeepSeek : les variables d’environnement documentées par DeepSeek pour deepseek-flash et deepseek-v4-pro, la correspondance des modèles, la recherche web, les tarifs et la configuration de Codex.",
  },
  breadcrumb: "Claude Code avec DeepSeek",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "Comment utiliser les modèles DeepSeek dans Claude Code",
    lead: "L’API de DeepSeek parle le protocole d’Anthropic : Claude Code peut donc tourner sur les modèles de DeepSeek si vous le faites pointer vers `https://api.deepseek.com/anthropic` avec une clé d’API DeepSeek. DeepSeek documente les réglages exacts : `deepseek-flash` (DeepSeek-V4.1-Flash) avec un contexte de 1M de tokens pour l’essentiel du travail, et `deepseek-v4-pro` derrière le nom Opus. Ce guide détaille la configuration sur macOS, Linux et Windows, explique la correspondance des noms de modèles Claude, ce que cela coûte et comment faire de même dans Codex.",
    cta: "Commencer",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer Claude Code avec DeepSeek",
      steps: [
        {
          title: "Obtenez une clé d’API DeepSeek",
          text: "Créez-en une sur platform.deepseek.com, dans API keys, et ajoutez du crédit au compte ; l’usage est facturé au token.",
        },
        {
          title: "Installez Claude Code si ce n’est pas déjà fait",
          text: "Le guide de DeepSeek l’installe avec npm : Node.js 18 ou plus récent, Git for Windows sous Windows, puis `npm install -g @anthropic-ai/claude-code` et `claude --version` pour vérifier.",
        },
        {
          title: "Définissez les variables d’environnement (macOS et Linux)",
          text: "Elles font pointer Claude Code vers l’endpoint compatible Anthropic de DeepSeek, utilisent `deepseek-flash` avec son contexte de 1M pour le modèle principal et les sous-agents, et relèvent le niveau d’effort ainsi que la fenêtre de compactage automatique. Ajoutez-les à votre profil de shell pour les conserver.",
          code: env,
        },
        {
          title: "Ou sous Windows (PowerShell)",
          text: "Les mêmes réglages sous forme de variables d’environnement PowerShell pour la session en cours.",
          code: windows,
        },
        {
          title: "Lancez Claude Code dans votre projet",
          text: "Placez-vous dans le projet avec `cd` et lancez `claude`. Tout le reste, comme CLAUDE.md, les skills, les hooks et les serveurs MCP, se configure comme d’habitude.",
        },
      ],
      source: { label: "Source : documentation de l’API DeepSeek, Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Correspondance entre les noms de modèles Claude et les modèles DeepSeek",
      text: [
        "Quand Claude Code (ou l’application de bureau Claude) envoie un nom de modèle Claude à l’endpoint de DeepSeek, DeepSeek le fait correspondre ainsi. C’est pourquoi la configuration ci-dessus règle toutes les variables de modèle sur `deepseek-flash` : sinon, tout ce qui demande Opus est facturé au tarif de V4 Pro.",
      ],
      headers: ["Nom de modèle envoyé par Claude Code", "Modèle DeepSeek utilisé", "Remarques"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "Facturé au tarif de V4 Pro"],
        ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash ; accepte les images"],
        ["`deepseek-flash[1m]`", "`deepseek-flash` avec un contexte de 1 048 576 tokens", "Comme dans les variables recommandées par DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "Ce que ça coûte",
      text: [
        "Tarifs de l’API DeepSeek en dollars américains par million de tokens au 6 novembre 2026. Les tarifs heures creuses (en dehors de 01:00–04:00 et 06:00–10:00 UTC en semaine) valent la moitié des tarifs heures pleines. La recherche web de Claude Code fonctionne aussi avec l’API de DeepSeek, mais chaque recherche ajoute des tokens de modèle pour résumer les résultats et est facturée au titre de la Search API de DeepSeek.",
      ],
      headers: ["Par million de tokens", "deepseek-flash, heures pleines", "deepseek-flash, heures creuses", "deepseek-v4-pro, heures pleines", "deepseek-v4-pro, heures creuses"],
      rows: [
        ["Entrée, cache hit", "0,006 $", "0,003 $", "0,044 $", "0,022 $"],
        ["Entrée, cache miss", "0,30 $", "0,15 $", "1,32 $", "0,66 $"],
        ["Sortie", "1,20 $", "0,60 $", "3,96 $", "1,98 $"],
      ],
    },
    {
      kind: "text",
      title: "Utiliser DeepSeek dans Codex",
      text: [
        "DeepSeek prend aussi en charge Codex, via la Responses API. Son guide propose un script de configuration qui sauvegarde `~/.codex/config.toml`, écrit un catalogue `~/.codex/models.json` avec `deepseek-flash` et `deepseek-v4-pro` et ajoute un fournisseur DeepSeek ; une seule configuration couvre alors la CLI Codex, l’application de bureau ChatGPT et l’extension VS Code. Lisez le script avant de l’exécuter, ou suivez les étapes manuelles du même guide. Le script désactive la recherche web intégrée, qui n’est disponible qu’avec `deepseek-v4-pro`. Pour les fichiers d’instructions propres à Codex, voir le [guide AGENTS.md pour Codex](/blog/codex-agents-md).",
      ],
    },
    {
      kind: "text",
      title: "Claude Code avec DeepSeek vs DeepSeek Harness",
      points: [
        "Claude Code avec DeepSeek : vous gardez l’interface et les habitudes de Claude Code, y compris CLAUDE.md, les skills, les hooks et les plugins, et payez les tarifs au token de DeepSeek au lieu d’un forfait Claude.",
        "DeepSeek Harness : l’application d’agents open source de DeepSeek, construite autour des plugins, avec une application de bureau et une interface web ; elle peut aussi exécuter Claude Code ou Codex comme sous-agents. Voir le [guide DeepSeek Harness](/blog/deepseek-harness).",
        "Dans les deux cas, les modèles sont les mêmes, `deepseek-flash` et `deepseek-v4-pro`, facturés par DeepSeek.",
        "Pour revenir aux modèles d’Anthropic, supprimez les variables (ou ouvrez un nouveau shell sans elles) et connectez-vous à Claude Code comme d’habitude.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des modèles bon marché, au travail toute la journée",
      text: [
        "Aux tarifs de DeepSeek, faire tourner Claude Code ou DeepSeek Harness permet de garder vos agents occupés à moindre coût. Crewmark transforme ces sessions en employés IA dotés d’un rôle, d’un objectif et d’horaires de travail, et réveille chacun avec une pulsation (heartbeat) pour qu’il prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Utilisez la configuration que vous avez déjà",
          text: "Un employé tourne dans une session Claude Code, Codex, DeepSeek Harness ou OpenCode sur votre machine, avec votre environnement et vos clés.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, il se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et prend la prochaine issue ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Gardez la facture sous contrôle",
          text: "Les horaires de travail et une issue à la fois rendent la consommation prévisible ; voir [comment réduire la consommation de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser les modèles DeepSeek dans Claude Code" },
  mid: {
    title: "Claude Code sur DeepSeek coûte peu. Faites-le travailler davantage.",
    text: "Crewmark réveille Claude Code, Codex ou DeepSeek Harness avec une pulsation, un rôle, un objectif et un tableau d’issues.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ Claude Code avec DeepSeek",
    items: [
      {
        q: "Claude Code peut-il utiliser les modèles DeepSeek ?",
        a: "Oui. L’API de DeepSeek est compatible Anthropic à l’adresse `https://api.deepseek.com/anthropic`. Réglez `ANTHROPIC_BASE_URL` sur cette adresse et `ANTHROPIC_AUTH_TOKEN` sur votre clé d’API DeepSeek, comme le montre le guide de DeepSeek.",
      },
      {
        q: "Quel modèle DeepSeek utiliser dans Claude Code ?",
        a: "Le guide de DeepSeek règle `deepseek-flash` (DeepSeek-V4.1-Flash) avec un contexte de 1M pour tous les rôles. `deepseek-v4-pro` est utilisé quand une requête demande un modèle Opus, à des tarifs plus élevés.",
      },
      {
        q: "Combien coûte Claude Code avec DeepSeek ?",
        a: "Uniquement l’usage de l’API DeepSeek : pour `deepseek-flash`, 0,30 $ par million de tokens d’entrée en cache miss et 1,20 $ par million de tokens de sortie en heures pleines, moitié moins en heures creuses, et bien moins pour l’entrée en cache.",
      },
      {
        q: "La recherche web fonctionne-t-elle dans Claude Code avec DeepSeek ?",
        a: "Oui. DeepSeek prend en charge l’outil de recherche web de Claude Code ; chaque recherche ajoute des tokens de modèle pour résumer les résultats et est facturée au titre de la Search API de DeepSeek.",
      },
      {
        q: "Faut-il un abonnement Claude ?",
        a: "Non. Avec ces variables, Claude Code envoie les requêtes à DeepSeek et facture votre compte DeepSeek au lieu d’un forfait Claude.",
      },
      {
        q: "Peut-on aussi utiliser DeepSeek dans Codex ?",
        a: "Oui. DeepSeek documente une configuration de Codex via la Responses API, avec un script ou des modifications manuelles de `~/.codex/config.toml` et `~/.codex/models.json`.",
      },
      {
        q: "Claude Code avec DeepSeek ou DeepSeek Harness ?",
        a: "Si vous aimez les outils et le flux de travail de Claude Code, gardez-le et changez de modèle. Si vous voulez l’application de DeepSeek elle-même, basée sur les plugins et dotée d’une interface de bureau, essayez DeepSeek Harness.",
      },
    ],
  },
  cta: {
    title: "Donnez des horaires à votre agent propulsé par DeepSeek.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de l’API DeepSeek (intégrations Claude Code et Codex, tarifs) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec DeepSeek, Anthropic ou OpenAI et non approuvé par eux. Claude et Claude Code sont des marques d’Anthropic ; Codex, d’OpenAI.",
};
