import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /skills/website-design; the English master is src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "Meilleures skills Claude pour le web design et l’UI (2026)",
    description:
      "Les meilleures skills Claude Code pour le web design et le design d’interface, comparées d’après leurs propres dépôts : frontend-design d’Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop, les skills d’Emil Kowalski, shadcn et d’autres, avec les commandes d’installation.",
  },
  breadcrumb: "Skills de web design et d’UI",
  parent: { name: "Skills Claude", href: "/skills" },
  hero: {
    kicker: "Skills Claude · Design",
    title: "Les meilleures skills Claude pour le web design et l’UI",
    lead: "Une skill de design est un fichier SKILL.md qui apprend à Claude Code (ou à Codex, Cursor et d’autres agents) à faire du design : quelles couleurs et quelles polices choisir, quels réflexes typiques de l’IA éviter et comment vérifier le résultat avant de le considérer comme terminé. Sans elle, les agents ont tendance à livrer toujours la même page à dégradés et à cartes. Voici les skills qui valent la peine d’être installées en 2026, ce que chacune fait de mieux et comment l’installer, d’après le dépôt de chaque projet.",
    cta: "Commencer",
    secondary: "Comparer les skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Le choix rapide",
      points: [
        "Nouvelle landing page ou site d’entreprise : Taste Skill. Elle choisit une direction, utilise de vraies photos et vérifie la page dans un navigateur à quatre largeurs avant de la livrer.",
        "Peaufiner une UI existante : Impeccable (des commandes comme polish, critique et audit, plus un détecteur de slop à base de règles) ou unslop (corrige espacements, couleurs, icônes, textes et typographie, dans cet ordre).",
        "Une valeur sûre signée Anthropic : frontend-design, la skill officielle, s’éloigne du design IA générique.",
        "Choisir styles, palettes et polices pour n’importe quelle plateforme : UI UX Pro Max, une base de données de design consultable pour le web, le mobile et le desktop.",
        "Les animations et les petits détails : les skills d’Emil Kowalski.",
        "Relire du code au regard de règles d’accessibilité et d’UX : web-design-guidelines de Vercel.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des skills de web design et d’UI",
      text: [
        "Étoiles et licences issues de l’API GitHub au 8 novembre 2026, arrondies. Pour les dépôts qui contiennent de nombreuses skills, les étoiles concernent tout le dépôt.",
      ],
      headers: ["Skill", "Idéale pour", "Compatible avec", "Étoiles", "Licence"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "Un design singulier pour toute nouvelle UI ; planifie d’abord un système de tokens", "Claude Code, Claude.ai", "~189k (dépôt)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Styles, palettes, associations de polices et règles d’UX pour le web, le mobile et le desktop", "Claude Code, Cursor, Codex et ~20 autres", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "Sites d’entreprise et sites marketing, vérifiés dans un vrai navigateur", "Claude Code, Codex, CLI skills", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "Critiquer et peaufiner des interfaces existantes ; détecteur de slop", "Claude Code, Codex, Cursor et d’autres", "~105k", "Apache 2.0"],
        ["[Skills d’Emil Kowalski](https://github.com/emilkowalski/skills)", "Animations, finitions et détails des composants", "Tout agent via la CLI skills", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "Auditer du code d’UI au regard de plus de 100 règles d’accessibilité et d’UX", "Tout agent via la CLI skills", "~34k (dépôt)", "MIT (selon le README)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "Utiliser correctement les composants shadcn/ui dans des apps React", "Tout agent via la CLI skills", "~128k (dépôt)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "Pages, prototypes d’apps, présentations et animations à partir d’un seul prompt ; rédigée en chinois", "Claude Code, Cursor, Codex et d’autres", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "Transformer une UI qui sent l’IA en interface vraiment designée, passe après passe", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Skills Stitch](https://github.com/google-labs-code/stitch-skills) (Google)", "Concevoir dans Stitch, puis développer en React ou React Native", "Claude Code, Cursor, Codex ; nécessite le MCP Stitch", "~9k", "Apache 2.0"],
        ["[Skills Figma](https://github.com/figma/mcp-server-guide)", "Des maquettes Figma au code, et des design systems dans Figma (bêta)", "Claude Code, Cursor ; nécessite le MCP Figma", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment installer et utiliser une skill de design",
      steps: [
        {
          title: "Installez-en une ou deux, pas toutes",
          text: "Des skills qui veulent chacune fixer la direction vont se contredire. Choisissez-en une qui conçoit (frontend-design, Taste Skill ou UI UX Pro Max) et, si vous le souhaitez, une qui relit (Impeccable, unslop ou web-design-guidelines).",
          code: install,
        },
        {
          title: "Donnez-lui le brief",
          text: "Dites à quoi sert la page, à qui elle s’adresse, et citez un ou deux sites que vous aimez. La plupart de ces skills demandent d’abord une direction, et le résultat n’est jamais plus précis que le brief.",
        },
        {
          title: "Laissez-la vérifier son propre travail",
          text: "Taste Skill affiche la page à quatre largeurs et passe un contrôle final (finish gate) ; le détecteur d’Impeccable applique 62 règles avec `npx impeccable detect src/`. Gardez ces vérifications activées, et regardez vous-même les captures.",
        },
        {
          title: "Enregistrez le résultat comme design system",
          text: "Plusieurs skills écrivent un DESIGN.md (Impeccable, Taste Skill, Stitch). Gardez-le dans le dépôt pour que les sessions suivantes, et les autres agents, respectent les mêmes couleurs, typographie et espacements. Voir le [guide CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Source : la skill frontend-design d’Anthropic", href: anthropic },
    },
    {
      kind: "text",
      title: "À savoir avant d’installer",
      points: [
        "Certaines skills ajoutent des hooks ou téléchargent un moteur : Impeccable installe des hooks de commande et active la télémétrie par défaut (désactivez-la avec `DO_NOT_TRACK=1`) ; Taste Skill exécute un contrôle final sous forme de hook Stop et nécessite Node 22+ et Chrome.",
        "Une construction complète avec Taste Skill peut prendre 30 à 45 minutes et quelques centaines de milliers de tokens, selon son README.",
        "UI UX Pro Max nécessite Python 3 et vend une offre premium ; la skill ouverte est sous licence MIT.",
        "unslop est sous CC BY 4.0 : citez l’auteur si vous réutilisez son texte. Ne le confondez pas avec des dépôts du même nom consacrés au texte.",
        "Les skills Stitch et Figma nécessitent leurs serveurs MCP et un compte ; l’écriture sur le canevas Figma est en bêta et limitée sur les postes gratuits.",
        "Côté équipe : nous avons utilisé Taste Skill sur les écrans du produit Crewmark et réalisé une courte vidéo sur unslop. Notre projet frère [pretty-ui](https://github.com/ummydev/pretty-ui) est une skill plus récente et plus modeste pour le même travail.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez à vos skills un designer qui travaille tous les jours",
      text: [
        "Une skill aide une session à mieux concevoir. Crewmark transforme Claude Code ou Codex en designer UI IA doté d’un objectif, par exemple trois écrans peaufinés par semaine, d’horaires de travail et d’un tableau d’écrans à corriger ; il se réveille au rythme d’une pulsation et ouvre des pull requests avec des captures avant/après.",
      ],
      steps: [
        {
          title: "Recrutez le rôle de designer UI",
          text: "Sa fiche de poste, son objectif et sa routine sont déjà configurés ; voir le [designer UI IA](/ai-employees/ui-designer) et le [designer UI mobile IA](/ai-employees/app-designer).",
        },
        {
          title: "Installez vos skills de design dans le dépôt",
          text: "L’employé utilise les skills de `.claude/skills` comme n’importe quelle session.",
        },
        {
          title: "Relisez des pull requests, pas des prompts",
          text: "Approuvez les écrans qui vous plaisent ; demandez des modifications sur le tableau. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Installer et utiliser une skill de design Claude" },
  mid: {
    title: "Vous voulez un designer qui fait tourner ces skills tous les jours ?",
    text: "Le designer UI IA de Crewmark travaille dans votre code au rythme d’une pulsation et ouvre des pull requests avec des captures.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les skills de design Claude",
    items: [
      {
        q: "Quelle est la meilleure skill Claude pour le web design ?",
        a: "Pour un nouveau site, Taste Skill ou frontend-design d’Anthropic ; pour peaufiner une UI existante, Impeccable ou unslop ; pour choisir styles et palettes sur plusieurs plateformes, UI UX Pro Max. La plupart des gens en installent une qui conçoit et une qui relit.",
      },
      {
        q: "Existe-t-il une skill de design officielle pour Claude ?",
        a: "Oui. Anthropic publie frontend-design dans anthropics/skills et sous forme de plugin dans claude-plugins-official. Elle est sous licence Apache 2.0 et vise à éviter les choix par défaut génériques du design IA.",
      },
      {
        q: "Comment installer une skill dans Claude Code ?",
        a: "Utilisez la marketplace de plugins (`/plugin marketplace add owner/repo`, puis `/plugin install`), la CLI skills (`npx skills add owner/repo`), ou copiez le dossier de la skill dans `.claude/skills/`.",
      },
      {
        q: "Ces skills fonctionnent-elles avec Codex et Cursor ?",
        a: "La plupart, oui : UI UX Pro Max, Impeccable, Taste Skill et Huashu Design documentent Codex, et la CLI skills installe les skills SKILL.md dans Cursor, Codex et environ 75 autres agents.",
      },
      {
        q: "Les skills de design Claude sont-elles gratuites ?",
        a: "Les skills présentées ici sont open source (MIT, Apache 2.0 ou CC BY 4.0). Certains produits qui les entourent sont payants : l’offre premium d’UI UX Pro Max, et Stitch et Figma nécessitent leurs propres comptes.",
      },
      {
        q: "Quelle différence entre Impeccable et Taste Skill ?",
        a: "Taste Skill crée de nouveaux sites d’entreprise et sites marketing avec une vérification dans un vrai navigateur ; Impeccable excelle sur les interfaces existantes, avec des commandes pour critiquer, auditer et peaufiner, et un détecteur de slop à base de règles.",
      },
    ],
  },
  cta: {
    title: "Mettez un designer sur votre tableau, avec les skills auxquelles vous faites confiance.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans le dépôt GitHub de chaque skill et via l’API GitHub le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni avec les auteurs des skills présentées, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
