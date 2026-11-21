import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// fr translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (nécessite Node 24+ et uv)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (le successeur de SWE-agent)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à Devin (2026) : open source, gratuites, moins chères",
    description:
      "Les meilleures alternatives à Devin AI en 2026, avec les prix actuels de chaque éditeur : agents open source à installer dès aujourd’hui (OpenHands, OpenCode, mini-swe-agent, Cline, Goose), agents cloud d’OpenAI, Anthropic, Google et GitHub, et plateformes pour les équipes.",
  },
  breadcrumb: "Alternatives à Devin",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Ingénieurs logiciels IA",
    title: "Les meilleures alternatives à Devin en 2026 : open source, gratuites et moins chères",
    lead: "Devin, de Cognition, est un ingénieur logiciel IA autonome : vous le mentionnez dans Slack ou Teams, vous lui assignez un ticket Linear ou Jira, ou vous le pointez vers une CI en échec, et il travaille dans sa propre machine virtuelle avant d’ouvrir une pull request. En 2026, il a une offre gratuite et des forfaits à partir de $20 par mois. Les alternatives se répartissent en trois groupes : les agents open source que vous faites tourner vous-même, les agents cloud des créateurs de modèles et les plateformes pour les équipes. Chacune convient à un profil différent ; voici lequel, avec les prix tirés du site de chaque éditeur.",
    cta: "Commencer",
    secondary: "Alternatives open source",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Choix rapides",
      points: [
        "Vous le voulez open source et sur vos propres serveurs : OpenHands, le projet né sous le nom d’OpenDevin, aujourd’hui un centre de contrôle auto-hébergé pour agents de code.",
        "Vous vivez dans le terminal et voulez n’importe quel modèle : OpenCode, sous licence MIT, avec environ 226 000 étoiles sur GitHub.",
        "Vous payez déjà ChatGPT ou Claude : les tâches cloud d’OpenAI Codex ou les sessions cloud de Claude Code, incluses dans les forfaits à partir de $20 par mois.",
        "Votre équipe travaille dans GitHub : Copilot dans le cloud, assigné depuis les issues et inclus à partir de Copilot Pro à $10 par mois.",
        "Vous voulez des agents pilotés par tickets dans toute l’entreprise : les Droids de Factory.",
        "Vous voulez un ingénieur IA avec un poste permanent, sur votre propre Claude Code ou Codex : Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des alternatives à Devin",
      text: [
        "Les prix sont ceux du forfait le moins cher qui inclut l’agent, d’après la page de prix de chaque éditeur le 10 novembre 2026. Étoiles arrondies, d’après l’API GitHub le même jour.",
      ],
      headers: ["Outil", "Open source", "Où il tourne", "À partir de", "Idéal pour"],
      rows: [
        ["[Devin](https://devin.ai)", "Non", "Sa propre VM cloud par session ; Devin Desktop et CLI en local", "Offre gratuite ; Pro $20/mois", "Les équipes qui veulent confier des tickets à un agent depuis Slack, Teams ou Jira"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "Oui, MIT (~93k étoiles)", "Votre ordinateur, Docker, une VM ; aussi en cloud hébergé", "Gratuit en auto-hébergement ; Teams $500/mois", "Un agent façon Devin sur votre propre infrastructure et vos clés de modèle"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "Oui, MIT (~226k étoiles)", "Terminal, application de bureau, SDK", "Modèles gratuits inclus ; Go $10/mois", "Les utilisateurs du terminal qui veulent l’un des 200+ fournisseurs de modèles"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "Oui, MIT (~9.5k étoiles)", "CLI locale", "Gratuit (vous payez le modèle)", "La recherche, les benchmarks et la correction d’issues reproductible"],
        ["[Cline](https://github.com/cline/cline)", "Oui, Apache 2.0 (~71k étoiles)", "CLI, VS Code, JetBrains, bureau", "Gratuit (vous payez le modèle)", "Un agent open source dans votre éditeur"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Oui, Apache 2.0 (~56k étoiles)", "Application de bureau, CLI, API", "Gratuit (vous payez le modèle)", "Un seul agent pour le code et le reste, avec des extensions MCP"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "CLI uniquement (Apache 2.0)", "Le cloud d’OpenAI ; CLI, IDE, bureau", "ChatGPT Plus $20/mois", "Les abonnés ChatGPT"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "Non", "Une VM gérée par Anthropic par session cloud ; aussi en local", "Claude Pro $20/mois", "Les utilisateurs de Claude Code qui veulent que le travail continue ordinateur fermé"],
        ["[Google Jules](https://jules.google)", "Non", "VM dans le cloud de Google", "15 tâches/jour sur le forfait de base ; Google AI Pro $19.99/mois", "Les développeurs individuels sur Gemini"],
        ["[GitHub Copilot in the cloud](https://github.com/features/copilot/plans)", "Non", "Le bac à sable cloud de GitHub", "Copilot Pro $10/mois", "Les équipes déjà sur GitHub"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "Non", "Les VM cloud de Cursor", "Premium $30/mois", "Les équipes qui travaillent déjà dans Cursor"],
        ["[Factory](https://factory.com)", "Non", "Bureau, CLI, web ; agents cloud et locaux", "Pro $20/mois", "Les organisations d’ingénierie qui pilotent des agents depuis les tickets et le chat"],
        ["[Crewmark](/pricing)", "Oui, GPL-3.0", "Votre ordinateur, dans votre propre Claude Code ou Codex", `Forfait gratuit (${free.projects} projet, ${free.employees} employés IA) ; Pro $${pro.price}/mois bientôt disponible`, "Les petites équipes qui veulent un ingénieur IA selon un planning, avec un forfait qu’elles paient déjà"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternatives open source à Devin à lancer dès aujourd’hui",
      text: [
        "Devin lui-même n’est pas open source. Ceux-ci le sont, et chacun s’installe en une seule commande. Vous apportez votre propre clé de modèle : le logiciel est gratuit et vous payez votre fournisseur de modèle. Lisez un script avant de le passer à votre shell.",
      ],
      steps: [
        {
          title: "OpenHands (anciennement OpenDevin)",
          text: "Désormais appelé Agent Canvas : un centre de contrôle auto-hébergé qui fait tourner l’agent OpenHands, mais aussi Claude Code, Codex, Gemini ou OpenCode, sur votre ordinateur, dans Docker ou sur une VM, avec des automatisations pour Slack, GitHub et Linear. Gratuit en auto-hébergement ; un forfait Teams hébergé coûte $500 par mois pour 10 utilisateurs maximum.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Un agent de terminal sous licence MIT qui fonctionne avec plus de 200 fournisseurs de modèles, y compris des modèles locaux, plus une application de bureau en bêta. Des modèles gratuits sont inclus sans compte ; OpenCode Go coûte $10 par mois, et vous pouvez vous connecter avec un abonnement ChatGPT ou GitHub Copilot. Voir les [alternatives à OpenCode](/blog/opencode-alternatives) pour des agents similaires.",
        },
        {
          title: "SWE-agent et mini-swe-agent",
          text: "L’agent de recherche de Princeton et Stanford qui prend une issue GitHub et tente de la corriger. Son README indique désormais que mini-swe-agent l’a remplacé : commencez donc par celui-ci. Gratuit ; vous ne payez que le modèle.",
        },
        {
          title: "Cline, Goose, Aider et Kilo Code",
          text: "Cline est un agent sous licence Apache pour le terminal, VS Code et JetBrains, avec des modes Plan et Act. Goose, désormais sous l’Agentic AI Foundation de la Linux Foundation, gère le code et d’autres tâches via des extensions MCP. Aider et Kilo Code sont aussi des agents de code open source populaires ; Devika, un des premiers clones open source de Devin, n’a pas été mis à jour depuis septembre 2025.",
        },
      ],
      source: { label: "Source : OpenHands sur GitHub", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Les agents cloud des créateurs de modèles",
      text: [
        "Si vous voulez le workflow « assignez et partez » de Devin sans ajouter un éditeur, les créateurs de modèles le proposent désormais dans des forfaits que vous avez peut-être déjà.",
      ],
      points: [
        "OpenAI Codex : des tâches cloud sur chatgpt.com/codex, incluses à partir de ChatGPT Plus à $20 par mois ; les tâches cloud consomment davantage de votre quota, et une clé API couvre la CLI et l’IDE mais pas les fonctionnalités cloud.",
        "Claude Code : des sessions cloud depuis claude.ai/code, l’application Claude ou `claude --cloud`, chacune dans une VM isolée gérée par Anthropic, sur les forfaits Pro ($20 par mois), Max, Ultra et Team, sans frais séparés pour la VM.",
        "Google Jules : clone votre dépôt dans une VM cloud et ouvre une pull request ; 15 tâches par jour sur le forfait de base et 100 avec Google AI Pro à $19.99 par mois.",
        "GitHub Copilot in the cloud : assignez une issue et Copilot ouvre une pull request ; inclus à partir de Copilot Pro à $10 par mois, avec un usage facturé en GitHub AI Credits.",
        "Cursor Cloud Agents : tournent dans des VM isolées, lancés depuis Cursor, le web, Slack ou Linear ; à partir du forfait Premium à $30 par mois.",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Combien coûte Devin en 2026",
      text: [
        "Beaucoup de listes citent encore un forfait équipe à $500 et $2.25 par ACU. Aujourd’hui sur devin.ai, les forfaits en libre-service n’utilisent plus d’ACU ; la facturation combine un quota inclus et des crédits à la demande, et seul Enterprise est facturé en ACU.",
      ],
      points: [
        "Free : $0, avec un quota léger.",
        "Pro : $20 par mois, Devin Cloud inclus ; l’usage supplémentaire au tarif de l’API.",
        "Max : $200 par mois.",
        "Teams : $80 par mois plus $40 par mois par siège de développeur complet, jusqu’à 100 utilisateurs.",
        "Enterprise : sur devis.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un ingénieur IA avec un poste permanent, sur votre propre agent",
      text: [
        "Devin et les agents cloud attendent que vous assigniez chaque tâche. Crewmark transforme votre propre Claude Code ou Codex en ingénieur logiciel IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : pendant son service, il se réveille, prend l’issue suivante sur un tableau, ouvre une pull request et vous écrit quand il a besoin d’une décision. Il tourne avec l’abonnement que vous payez déjà, sur votre ordinateur.",
      ],
      steps: [
        {
          title: "Recrutez le rôle d’ingénieur logiciel",
          text: "Son brief, son objectif et sa routine sont déjà configurés ; voir l’[ingénieur logiciel IA](/ai-employees/software-engineer).",
        },
        {
          title: "Mettez le travail sur un tableau",
          text: "Assignez des issues comme à un coéquipier ; l’employé tient à jour les statuts et les commentaires. Voir [le kanban pour Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Laissez-le continuer",
          text: "Fixez des horaires de travail, même la nuit. Voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7) et [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez un ingénieur façon Devin sur le forfait Claude Code ou Codex que vous avez déjà ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation, avancent sur un tableau et ouvrent des pull requests.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les alternatives à Devin",
    items: [
      {
        q: "Quelle est la meilleure alternative open source à Devin ?",
        a: "OpenHands, né sous le nom d’OpenDevin, est la plus proche : une plateforme d’agents auto-hébergée que vous faites tourner avec vos propres clés de modèle. Pour un agent de terminal, OpenCode ; pour la recherche et les benchmarks, mini-swe-agent.",
      },
      {
        q: "OpenDevin et OpenHands, c’est la même chose ?",
        a: "Oui. OpenDevin a été renommé OpenHands, par All Hands AI. Il est sous licence MIT et est désormais distribué sous le nom d’Agent Canvas, qui fait aussi tourner Claude Code, Codex et d’autres agents.",
      },
      {
        q: "Devin est-il gratuit ?",
        a: "Il existe une offre gratuite avec un quota léger. Les forfaits payants sont Pro à $20 par mois, Max à $200 et Teams à $80 par mois plus $40 par siège de développeur, d’après devin.ai le 10 novembre 2026.",
      },
      {
        q: "Devin facture-t-il encore à l’ACU ?",
        a: "Seulement sur Enterprise. Les forfaits en libre-service combinent désormais un quota inclus et des crédits à la demande : l’ancien chiffre de $2.25 par ACU ne s’y applique plus.",
      },
      {
        q: "Devin vs Claude Code ou Codex : lequel utiliser ?",
        a: "Si vous payez déjà Claude ou ChatGPT, leurs sessions cloud et tâches cloud vous donnent le workflow « assignez et partez » de Devin sans coût supplémentaire. Devin ajoute des workflows Slack, Teams, Jira et Linear pensés pour les équipes.",
      },
      {
        q: "Quelle est l’alternative à Devin la moins chère ?",
        a: "Les agents open source ne coûtent rien au-delà de votre usage de modèle. Parmi les options hébergées, GitHub Copilot Pro à $10 par mois inclut l’agent cloud, et Google Jules permet 15 tâches par jour sur son forfait de base.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à votre Claude Code ou Codex, pas seulement une tâche.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après le site, la page de prix, la documentation et le dépôt GitHub de chaque produit le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Cognition ni à aucune des entreprises citées, ni approuvé par elles. Les noms de produits sont des marques de leurs propriétaires.",
};
