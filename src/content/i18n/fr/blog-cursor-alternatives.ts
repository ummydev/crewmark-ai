import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à Cursor en 2026 : 10 options gratuites, open source et moins chères | Crewmark",
    description:
      "Cursor a rejoint SpaceX et ses forfaits sont désormais centrés sur Grok. Dix alternatives comparées : Claude Code, Codex, GitHub Copilot, Devin Desktop (Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity et Junie, avec tarifs et offres gratuites.",
  },
  breadcrumb: "Alternatives à Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Outils de codage IA",
    title: "Les meilleures alternatives à Cursor en 2026",
    lead: "Cursor fait partie de SpaceX depuis août 2026, et ses forfaits sont désormais construits autour de Grok : le forfait Plus à 8 $ ne propose que les modèles Grok, et Claude, GPT ou Gemini sont facturés en plus, au prix catalogue de l’API, à partir du forfait à 30 $. Si ce n’est pas ce pour quoi vous aviez signé, il existe de bonnes alternatives : des agents inclus dans l’abonnement que vous avez déjà, des éditeurs dotés de leur propre IA et des outils open source où vous utilisez votre propre clé. En voici dix, comparées selon ce qu’elles sont, leurs offres gratuites, leurs tarifs et leurs modèles, au 6 novembre 2026.",
    cta: "Accès anticipé",
    secondary: "Aller à la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Cursor comparées",
      text: [
        "Les prix d’entrée sont ceux des forfaits individuels payants les moins chers affichés sur la page de chaque éditeur, en dollars américains par mois. « Modèles Claude » indique si vous pouvez y utiliser les modèles d’Anthropic, inclus ou avec votre propre clé.",
      ],
      headers: ["Outil", "Type", "Option gratuite", "Payant dès", "Modèles Claude", "Open source"],
      rows: [
        ["Claude Code", "Agent : terminal, IDE, bureau, web", "Non", "20 $ (Claude Pro)", "Inclus", "Non"],
        ["OpenAI Codex", "Agent : CLI, IDE, bureau, cloud", "Oui, ChatGPT Free", "8 $ (ChatGPT Go)", "Non", "La CLI est sous Apache-2.0"],
        ["GitHub Copilot", "Extension pour la plupart des IDE, CLI", "Oui, 2 000 complétions par mois", "10 $ (Pro)", "Oui ; Opus dès Pro+ (39 $)", "Non"],
        ["Devin Desktop (anciennement Windsurf)", "IDE", "Oui", "20 $ (Pro)", "Oui", "Non"],
        ["Zed", "Éditeur natif", "Oui, avec vos propres clés", "10 $ (Pro)", "Avec votre propre clé ou un agent externe", "Oui"],
        ["Cline", "Extension VS Code et CLI", "Gratuit ; vous payez l’usage du modèle", "Pas de forfait individuel", "Avec votre propre clé", "Apache-2.0"],
        ["Kilo Code", "Extension VS Code et JetBrains, CLI", "Oui", "19 $ (Kilo Pass Starter)", "Via sa passerelle ou votre propre clé", "MIT"],
        ["OpenCode", "Agent en terminal, bureau, IDE", "Oui", "Non communiqué", "Avec votre propre clé ; connexion avec Copilot ou ChatGPT", "MIT"],
        ["Google Antigravity", "IDE agentique, CLI", "Oui", "Business dès 30 $ par siège", "Sur les forfaits payants", "Non"],
        ["JetBrains Junie", "Agent dans les IDE JetBrains, CLI", "Oui, Junie Lite", "AI Pro, affiché à 8,33 $", "Oui, ou avec votre propre clé", "Non"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir une alternative à Cursor",
      steps: [
        {
          title: "Partez de l’abonnement que vous payez déjà",
          text: "Claude Pro ou Max inclut Claude Code ; tout forfait ChatGPT inclut Codex ; beaucoup d’entreprises ont déjà GitHub Copilot. Utiliser ce que vous payez déjà revient généralement moins cher qu’un nouvel outil plus des factures d’API.",
        },
        {
          title: "Choisissez entre éditeur et agent",
          text: "Si vous voulez retrouver l’expérience de Cursor (un éditeur avec modifications en ligne et complétion avec Tab), regardez Devin Desktop, Zed, Copilot dans VS Code ou Antigravity. Si vous confiez surtout des tâches à un agent, Claude Code, Codex et OpenCode fonctionnent depuis n’importe quel terminal et éditeur.",
        },
        {
          title: "Si vous voulez du gratuit ou de l’open source",
          text: "Cline, Kilo Code, OpenCode et Zed sont open source et gratuits avec votre propre clé d’API ; vous ne payez au fournisseur du modèle que ce que vous consommez.",
        },
        {
          title: "Vérifiez d’où viennent vos modèles",
          text: "Si vous voulez Claude au quotidien, un outil qui l’inclut dans un forfait (Claude Code, Copilot, Devin Desktop, Junie) vous évite les mauvaises surprises de facturation au token. Les outils avec votre propre clé vous donnent n’importe quel modèle au prix catalogue.",
        },
        {
          title: "Emportez vos règles",
          text: "Beaucoup de ces outils lisent AGENTS.md : quitter `.cursor/rules` revient surtout à copier vos règles dans un seul fichier. Voir le [guide CLAUDE.md](/blog/claude-md) pour utiliser un même fichier avec plusieurs agents.",
        },
      ],
      source: { label: "Source : forfaits GitHub Copilot et site de chaque éditeur", href: copilot },
    },
    {
      kind: "text",
      title: "Notes sur chaque alternative",
      points: [
        "Claude Code : l’agent d’Anthropic, inclus dans Claude Pro (20 $, ou 17 $ en facturation annuelle), Max (100 $) et Ultra (200 $) ; il fonctionne aussi avec une clé d’API. Comparez-le dans [Claude Code vs Cursor](/blog/claude-code-vs-cursor).",
        "OpenAI Codex : inclus dans tous les forfaits ChatGPT, de Free (GPT-6 Luna) et Go (8 $) à Plus (20 $) et Pro (à partir de 100 $). Voir [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "GitHub Copilot : Free, Pro (10 $), Pro+ (39 $) et Max (100 $) ; fonctionne dans VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse et Zed, avec Claude, GPT, Gemini et d’autres modèles.",
        "Devin Desktop : le nouveau nom de Windsurf, chez Cognition ; windsurf.com redirige désormais vers lui. Free, Pro (20 $) et Max (200 $).",
        "Zed : un éditeur natif et rapide pour macOS, Windows et Linux ; gratuit avec vos propres clés ou avec des agents externes comme Claude Code et Codex, Pro à 10 $ pour les modèles hébergés.",
        "Cline : une extension VS Code et une CLI open source ; gratuit, vous ne payez que l’inférence avec vos propres clés.",
        "Kilo Code : open source (MIT), désormais propriété d’Anaconda ; gratuit avec vos propres clés ou des modèles gratuits, Kilo Pass à partir de 19 $.",
        "OpenCode : un agent open source en terminal compatible avec plus de 75 fournisseurs de modèles ; gratuit, il peut se connecter avec un abonnement Copilot ou ChatGPT existant.",
        "Google Antigravity : l’IDE agentique et la CLI de Google, gratuits pour les particuliers ; les forfaits payants ajoutent Gemini 4 Argon et les modèles Claude.",
        "JetBrains Junie : l’agent de codage de JetBrains, dans ses IDE et en CLI, avec une offre Lite gratuite et les forfaits AI Pro et Ultimate.",
        "Non retenus : Roo Code (son dépôt GitHub est archivé), Gemini CLI (l’usage personnel est passé à Antigravity CLI en juin 2026) et Aider (aucune version depuis août 2025).",
      ],
    },
    {
      kind: "text",
      title: "Ce qui a changé chez Cursor",
      text: [
        "Cursor a annoncé le 14 août 2026 que SpaceX avait finalisé son rachat. Sa page de tarifs affiche désormais Free, Plus (8 $, modèles Grok uniquement), Premium (30 $, avec agents cloud, automatisations, revue de code et modèles tiers facturés à l’usage au prix catalogue de l’API), Super (100 $) et Ultra (200 $), ainsi que des fonctionnalités X comme moins de publicités dans le fil. L’usage forme un quota unique partagé avec Grok et renouvelé chaque semaine. Si vous gardez Cursor, vous pouvez toujours y utiliser l’extension ou la CLI de Claude Code avec votre forfait Claude.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vous changez d’outil ? Donnez un travail au nouveau.",
      text: [
        "Quel que soit l’agent que vous adoptez, il attend votre prochain prompt. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à chaque pulsation pour qu’elle prenne la prochaine issue d’un tableau, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Choisissez un rôle et un objectif",
          text: "Ingénieur logiciel, relecteur, rédacteur SEO : chaque employé a un objectif exprimé sous forme de chiffre. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, il se réveille toutes les 15, 30 ou 60 minutes et prend la prochaine issue ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Faites-en tourner plusieurs à la fois",
          text: "Donnez à chacun son propre worktree et son rôle ; voir les [outils d’orchestration pour Claude Code](/blog/claude-code-orchestration-tools).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir une alternative à Cursor" },
  mid: {
    title: "Vous quittez Cursor pour Claude Code, Codex ou OpenCode ?",
    text: "Crewmark en fait des employés IA qui se réveillent à chaque pulsation et prennent eux-mêmes la prochaine issue.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ sur les alternatives à Cursor",
    items: [
      {
        q: "Quelle est la meilleure alternative à Cursor ?",
        a: "Avec un forfait Claude, Claude Code ; avec ChatGPT, Codex ; pour un éditeur proche de Cursor, Devin Desktop (anciennement Windsurf) ou Copilot dans VS Code ; pour du gratuit et open source, Cline, Kilo Code, OpenCode ou Zed avec votre propre clé.",
      },
      {
        q: "Existe-t-il une alternative gratuite à Cursor ?",
        a: "Oui. Cline, Kilo Code, OpenCode et Zed sont gratuits avec votre propre clé d’API, Copilot propose une offre gratuite avec 2 000 complétions par mois, Codex fonctionne avec ChatGPT Free, et Antigravity et Devin Desktop ont des forfaits gratuits.",
      },
      {
        q: "Quelles sont les alternatives open source à Cursor ?",
        a: "Cline (Apache-2.0), Kilo Code (MIT), OpenCode (MIT) et Zed sont open source ; la CLI de Codex l’est aussi (Apache-2.0).",
      },
      {
        q: "Pourquoi les tarifs de Cursor ont-ils changé ?",
        a: "Après le rachat de Cursor par SpaceX (annoncé le 14 août 2026), ses forfaits sont passés aux modèles Grok et à une gamme groupée avec X : Plus à 8 $ ne propose que Grok, et les modèles tiers comme Claude sont facturés en plus, au prix catalogue de l’API, à partir de Premium (30 $).",
      },
      {
        q: "Qu’est devenu Windsurf ?",
        a: "Windsurf s’appelle désormais Devin Desktop et est développé par Cognition ; windsurf.com redirige vers devin.ai/desktop.",
      },
      {
        q: "Quelle est l’alternative à Cursor la moins chère ?",
        a: "Les outils avec votre propre clé (Cline, OpenCode, Kilo Code, Zed) ne coûtent rien d’autre que l’usage du modèle. Côté forfaits, Codex démarre à 8 $ avec ChatGPT Go et Copilot Pro à 10 $ ; si vous voulez Claude inclus, Claude Pro coûte 20 $.",
      },
      {
        q: "Puis-je garder mes règles Cursor ?",
        a: "En grande partie. Placez-les dans AGENTS.md, que lisent Codex, Copilot, OpenCode et d’autres ; Claude Code le lit via un import `@AGENTS.md` dans CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Nouvel agent de codage, même abonnement, et désormais un vrai travail.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié sur cursor.com et sur le site, la page de tarifs ou le dépôt GitHub de chaque alternative le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Cursor, SpaceX ni aucun des éditeurs cités et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
