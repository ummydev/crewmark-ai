import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// fr translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS et Linux ; Windows a un installeur PowerShell)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # ou : npm install -g @charmland/crush

# Kilo CLI (un fork d’OpenCode)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (gratuit, financé par des annonces textuelles)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder avec un modèle qui tourne dans Ollama
nanocoder --provider ollama --model llama3.1

# Crush : ajoutez Ollama dans votre crushrc
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à OpenCode (2026) : gratuites, open source, locales",
    description:
      "Les meilleures alternatives à OpenCode en 2026 : agents de terminal open source (Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), options gratuites sans clé API, choix en Rust et pour Windows, LLM locaux, interfaces graphiques, et Claude Code, Codex et Copilot CLI.",
  },
  breadcrumb: "Alternatives à OpenCode",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agents de code",
    title: "Les meilleures alternatives à OpenCode en 2026 : gratuites, open source et locales",
    lead: "OpenCode est l’un des agents de code open source les plus étoilés sur GitHub, avec environ 226 000 étoiles : un agent de terminal sous licence MIT qui fonctionne avec n’importe quel fournisseur de modèles, plus une application de bureau en bêta. On cherche ailleurs pour plusieurs raisons : un harness plus petit à plier à son propre workflow, un binaire unique en Go ou en Rust, un meilleur support des modèles locaux, une application plutôt qu’un terminal, une option gratuite sans clé API, ou l’agent que son entreprise paie déjà. Voici les alternatives pour chaque cas, avec licences, commandes d’installation et prix tirés de la page de chaque projet.",
    cta: "Commencer",
    secondary: "Commandes d’installation",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Choix rapides",
      points: [
        "Un agent minimal que vous façonnez vous-même : Pi, sous licence MIT, environ 121 000 étoiles.",
        "Une application de terminal soignée qui tourne partout, Windows et Android compris : Crush, de Charm.",
        "OpenCode entouré d’un IDE et d’un agent cloud : Kilo CLI, qui est un fork d’OpenCode.",
        "Gratuit sans clé API : Freebuff, financé par des annonces textuelles.",
        "Les modèles locaux d’abord : Nanocoder, développé par un collectif à but non lucratif.",
        "Écrit en Rust : Codex CLI ou Goose.",
        "Vous payez déjà Claude, ChatGPT ou Copilot : Claude Code, Codex CLI ou GitHub Copilot CLI.",
        "Un agent qui continue de travailler selon un planning, pas seulement quand vous tapez : Crewmark, par-dessus Claude Code ou Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des alternatives à OpenCode",
      text: [
        "Étoiles arrondies, d’après l’API GitHub le 10 novembre 2026. Les coûts indiquent ce qu’il faut pour commencer ; la plupart des agents open source sont gratuits et vous payez votre fournisseur de modèle.",
      ],
      headers: ["Outil", "Licence", "Écrit en", "Fonctionne sur", "Coût", "Idéal pour"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k étoiles)", "TypeScript", "Terminal, application de bureau (bêta)", "Modèles gratuits avec limite quotidienne ; Go $10/mois, Go Plus $40/mois", "La référence : n’importe quel fournisseur, modèles locaux, agents Plan et Build"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k étoiles)", "TypeScript", "macOS, Linux, Windows ; SDK et RPC", "Gratuit ; votre abonnement ou clé API", "Un harness minimal que vous étendez avec vos propres outils et skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k étoiles)", "Go", "Tous les terminaux : macOS, Linux, Windows, Android, BSD", "Gratuit ; votre clé, ou les modèles Hyper de Charm", "Une interface de terminal soignée avec LSP et MCP"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (~28k étoiles)", "TypeScript", "CLI, VS Code, JetBrains, cloud", "Gratuit pour commencer ; 500+ modèles au tarif du fournisseur, sans marge", "Le moteur d’OpenCode plus des extensions d’IDE et des revues de code"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (~56k étoiles)", "Rust", "Application de bureau, CLI, API", "Gratuit ; votre clé de modèle", "Un seul agent pour le code et le reste, avec des extensions MCP"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k étoiles)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "Gratuit ; votre clé de modèle", "Un agent open source dans votre éditeur et votre terminal"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k étoiles)", "TypeScript", "Terminal", "Gratuit ; modèles locaux ou toute API compatible OpenAI", "Du code privé, local d’abord, avec Ollama"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (~14k étoiles)", "TypeScript", "CLI, bureau, web, cloud", "Gratuit avec annonces textuelles ; sans clé API", "Essayer un agent de code sans payer ni s’inscrire auprès d’un modèle"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (~29k étoiles)", "TypeScript", "Terminal", "Abonnement Qwen Plus ou Pro, ou une clé API", "Les utilisateurs des modèles Qwen"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k étoiles)", "Rust", "Terminal ; aussi IDE et bureau", "Tout forfait ChatGPT, y compris Free ; Go à $8/mois ; ou une clé API", "Les abonnés ChatGPT qui veulent un binaire natif rapide"],
        ["[Claude Code](https://code.claude.com/docs)", "Propriétaire", "-", "Terminal, IDE, bureau, web", "Claude Pro $20/mois", "Les utilisateurs de Claude qui veulent l’agent d’Anthropic"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "Propriétaire", "-", "macOS, Linux, Windows", "Un forfait Copilot ; Pro à $10/mois", "Les équipes qui paient déjà Copilot"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k étoiles)", "Python", "Terminal", "Gratuit ; votre clé de modèle", "Le pair programming centré sur git ; aucun commit depuis le 22 mai 2026 (voir les [alternatives à Aider](/blog/aider-alternatives))"],
        ["[Crewmark](/pricing)", "Propriétaire", "-", "Votre ordinateur, dans votre propre Claude Code ou Codex", `Forfait gratuit (${free.projects} projet, ${free.employees} employés IA) ; Pro $${pro.price}/mois bientôt disponible`, "Un agent doté d’un rôle, d’horaires de travail et d’une pulsation, qui prend l’issue suivante sur un tableau"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternatives open source à OpenCode à installer dès aujourd’hui",
      text: [
        "Chacune s’installe en une commande. Lisez un script avant de le passer à votre shell.",
      ],
      steps: [
        {
          title: "Pi",
          text: "Un harness d’agent minimal et extensible. Il est livré avec des réglages par défaut raisonnables mais se passe volontairement de sub-agents et de mode plan : vous les ajoutez avec des extensions, des skills et des modèles de prompts, ou vous demandez à Pi de les construire. Lancez `/login` pour connecter un abonnement ou une clé API. Pi n’a pas de système de permissions intégré : faites-le tourner dans un conteneur ou un bac à sable si vous avez besoin de limites ; sa documentation décrit trois façons de le faire.",
          code: install,
        },
        {
          title: "Crush",
          text: "L’agent de terminal de Charm, écrit en Go. Il lit vos serveurs de langage pour le contexte, accepte des serveurs MCP via http, stdio et sse, et vous laisse changer de modèle en cours de session. Il s’installe avec Homebrew, npm, winget, scoop, apt et pkg, et son README cite Windows (PowerShell et WSL), Android et les BSD. La licence est FSL-1.1-MIT, une licence source-available plutôt qu’open source.",
        },
        {
          title: "Kilo CLI",
          text: "Le README de Kilo indique que sa CLI est un fork d’OpenCode. Par-dessus, Kilo ajoute des extensions VS Code et JetBrains, un agent cloud, des revues automatiques de pull requests et plus de 500 modèles entre lesquels basculer en cours de tâche. Sous licence MIT.",
        },
        {
          title: "Goose, Cline et Nanocoder",
          text: "Goose est un agent en Rust avec une application de bureau et une CLI, désormais sous l’Agentic AI Foundation de la Linux Foundation. Cline fonctionne comme CLI, extension d’éditeur ou SDK. Nanocoder est un agent de terminal local d’abord, du Nano Collective, avec des modes normal, auto-accept, yolo, plan et architect, et des commandes qui relisent une branche ou récupèrent une pull request dans son propre worktree.",
        },
      ],
      source: { label: "Source : le README de chaque projet sur GitHub", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "Alternatives à OpenCode avec des modèles gratuits",
      text: [
        "OpenCode lui-même inclut des modèles gratuits avec une limite quotidienne de requêtes, et vous pouvez vous y replier quand vos limites Go sont épuisées. Si vous voulez autre chose de gratuit :",
      ],
      points: [
        "Freebuff : ni abonnement, ni crédits, ni clé API. Des annonces textuelles financent les modèles inclus, avec DeepSeek V4.1 Flash par défaut ; les parrainages et les bounties ajoutent des heures au quota quotidien gratuit.",
        "Modèles locaux : Nanocoder, Crush, Goose et OpenCode communiquent tous avec Ollama ; le seul coût est donc votre propre matériel.",
        "L’offre gratuite de Google : Gemini CLI n’en a plus. Son README indique que les comptes individuels gratuits ainsi que Google AI Pro et Ultra sont passés à Antigravity CLI (`agy`) le 18 juin 2026.",
        "Codex CLI : open source, et il fonctionne avec un compte ChatGPT gratuit.",
        "Agents open source avec votre propre clé : Pi, Kilo CLI, Cline et Goose ne coûtent rien en eux-mêmes ; vous ne payez que le modèle.",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "Alternatives à OpenCode pour les LLM locaux",
      text: [
        "Si vous utilisez OpenCode pour faire tourner des modèles sur votre propre machine, ces deux-là font des modèles locaux la voie principale.",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Conçu pour les modèles locaux via Ollama, ou pour toute API compatible OpenAI comme OpenRouter. Passez le fournisseur et le modèle en options, ou lancez-le en mode non interactif avec `nanocoder run`.",
          code: local,
        },
        {
          title: "Crush",
          text: "Ajoutez Ollama comme fournisseur dans votre `crushrc`, un fichier de configuration proche de Bash qui fonctionne de la même façon sur toutes les plateformes, Windows compris, puis enregistrez les modèles que vous avez téléchargés.",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust, Windows, Android ou une interface graphique",
      points: [
        "En Rust : Codex CLI et Goose sont tous deux écrits en Rust. Crush est un binaire Go unique.",
        "Pour Windows : Crush (winget, scoop ou npm), Pi (un installeur PowerShell), GitHub Copilot CLI (winget) et l’application de bureau d’OpenCode tournent tous nativement.",
        "Pour Android : le README de Crush cite Android parmi les terminaux pris en charge.",
        "Avec une interface graphique : l’application de bureau d’OpenCode (bêta) pour macOS, Windows et Linux ; Goose Desktop ; Freebuff Desktop, qui peut aussi lancer vos Claude Code et Codex installés ; et Kilo ou Cline dans VS Code et JetBrains.",
        "OpenCode Go coûte $10 par mois pour des modèles open-weight (Go Plus est à $40). Si vous préférez un seul abonnement pour un modèle de pointe, Codex est inclus dans ChatGPT Go à $8 par mois, Copilot Pro coûte $10 et Claude Pro $20.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Quand vous voulez que l’agent travaille sans que vous tapiez",
      text: [
        "Tous les outils de cette liste attendent votre prochain prompt. Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : pendant son service, il se réveille, prend l’issue suivante sur un tableau et vous écrit quand il a besoin d’une décision. Il tourne sur votre ordinateur, avec le forfait que vous payez déjà.",
      ],
      steps: [
        {
          title: "Recrutez un employé sur votre agent",
          text: "Lancez la commande d’installation dans une conversation Claude Code ou Codex ; cette conversation devient l’employé. Voir [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Donnez-lui des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous fixez, même la nuit. Voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7) et [les tâches longues avec Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Répondez quand il demande",
          text: "Les décisions vous arrivent sous forme de messages ; tout le reste est sur le tableau. Pour d’autres comparatifs d’agents, voir les [alternatives à Cursor](/blog/cursor-alternatives) et les [alternatives à Devin](/blog/devin-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez un agent de code qui continue de travailler entre vos prompts ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation pendant les horaires de travail et prennent l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les alternatives à OpenCode",
    items: [
      {
        q: "Quelle est la meilleure alternative open source à OpenCode ?",
        a: "Pi si vous voulez un petit harness que vous étendez vous-même, Crush pour une application de terminal soignée sur toutes les plateformes, et Kilo CLI si vous voulez le moteur d’OpenCode entouré d’extensions d’IDE. Goose et Cline sont aussi de bons choix sous licence Apache.",
      },
      {
        q: "Kilo CLI est-il basé sur OpenCode ?",
        a: "Oui. Le README de Kilo indique que Kilo CLI est un fork d’OpenCode, étendu pour fonctionner avec la plateforme de Kilo : extensions VS Code et JetBrains, agent cloud et revues de code.",
      },
      {
        q: "Existe-t-il une alternative gratuite à OpenCode ?",
        a: "Freebuff est gratuit sans clé API, financé par des annonces textuelles. Nanocoder, Crush, Goose et OpenCode lui-même sont gratuits avec des modèles locaux via Ollama. L’offre gratuite de Gemini CLI est passée à Antigravity CLI en juin 2026.",
      },
      {
        q: "Existe-t-il une alternative à OpenCode écrite en Rust ?",
        a: "Codex CLI, d’OpenAI, et Goose sont tous deux écrits en Rust et sous licence Apache 2.0. Crush est écrit en Go et livré sous forme de binaire unique.",
      },
      {
        q: "Crush est-il open source ?",
        a: "Le code de Crush est public sous FSL-1.1-MIT, une licence source-available. OpenCode, Pi, Kilo CLI et Nanocoder sont sous MIT ; Goose, Cline, Codex CLI, Qwen Code et Freebuff sous Apache 2.0.",
      },
      {
        q: "OpenCode vs Claude Code : lequel utiliser ?",
        a: "OpenCode fonctionne avec n’importe quel fournisseur, y compris des modèles locaux, et il est open source. Claude Code est l’agent d’Anthropic, propriétaire, inclus à partir de Claude Pro à $20 par mois. Si vous payez déjà Claude, Claude Code reçoit les fonctionnalités en premier ; si vous changez souvent de modèle, OpenCode ou Pi conviennent mieux.",
      },
    ],
  },
  cta: {
    title: "Donnez un travail à votre agent de code, pas seulement un prompt.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après le dépôt GitHub et le README de chaque projet, opencode.ai et les pages de prix des éditeurs le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à OpenCode ni à aucun des projets cités, ni approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
