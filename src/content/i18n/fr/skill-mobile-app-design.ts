import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Les skills officielles d’Expo (plugin Claude Code)
/plugin install expo@claude-plugins-official

# Les règles React Native de Vercel
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Les skills de l’équipe Flutter
npx skills add flutter/agent-plugins

# Revue de design Apple pour tout framework
npx skills add dickwu/apple-design-skill

# Mobile Taste Skill pour React Native et Expo
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "Meilleures skills Claude pour le design et le développement d’apps mobiles",
    description:
      "Les meilleures skills Claude Code pour les apps mobiles en 2026, par plateforme : Expo et Vercel pour React Native, SwiftUI Pro et SwiftUI Expert pour iOS, les skills de l’équipe Flutter, la revue de design Apple et d’autres, avec les commandes d’installation.",
  },
  breadcrumb: "Skills pour apps mobiles",
  parent: { name: "Skills Claude", href: "/skills" },
  hero: {
    kicker: "Skills Claude · Apps mobiles",
    title: "Les meilleures skills Claude pour le design et le développement d’apps mobiles",
    lead: "Une skill mobile est un fichier SKILL.md qui apprend à Claude Code (ou à Codex, Cursor et d’autres agents) à développer pour smartphone : les règles de design de la plateforme, les API qui ont changé depuis l’entraînement du modèle et les erreurs que les agents ont tendance à commettre en SwiftUI, React Native ou Flutter. La plupart portent sur une seule plateforme : choisissez donc selon celle sur laquelle vous publiez. Voici les skills qui valent la peine d’être installées en 2026, regroupées par plateforme, d’après le dépôt de chaque projet.",
    cta: "Commencer",
    secondary: "Comparer les skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Le choix rapide",
      points: [
        "React Native et Expo : les skills officielles d’Expo pour développer et publier, react-native-skills de Vercel ou les skills de Callstack pour les performances, et Mobile Taste Skill pour des écrans qui n’ont pas l’air faits par une IA.",
        "SwiftUI et iOS : SwiftUI Pro de Paul Hudson pour un SwiftUI moderne et accessible, SwiftUI Expert d’Antoine van der Lee pour l’état et les performances, et Claude Code Apple Skills pour aller de l’idée à l’App Store.",
        "Flutter : les skills de l’équipe Flutter elle-même pour l’architecture, les mises en page, le routage et les tests.",
        "Le design pour tout framework : Apple Design Skill évalue un design au regard des Human Interface Guidelines d’Apple, en SwiftUI, Flutter, React Native et d’autres ; UI UX Pro Max choisit styles, palettes et polices.",
        "Avant de soumettre : App Store Review vérifie un projet au regard des règles de l’App Store et de Google Play.",
        "Une web app qui doit ressembler à une app : mobile-native d’Emil Kowalski corrige le CSS et les balises meta qui la trahissent sur smartphone.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des skills pour apps mobiles",
      text: [
        "Étoiles et licences issues de l’API GitHub au 8 novembre 2026, arrondies. Pour les dépôts qui contiennent de nombreuses skills, les étoiles concernent tout le dépôt.",
      ],
      headers: ["Skill", "Plateforme", "Idéale pour", "Étoiles", "Licence"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web, mobile, desktop", "Styles, palettes, associations de polices et règles d’UX", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "Web mobile, PWA", "Donner à une web app un rendu natif sur smartphone", "~54k (dépôt)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "Règles de performance pour les listes, l’animation, la navigation et l’UI", "~34k (dépôt)", "MIT (selon le README)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "Corriger les erreurs que font les LLM en SwiftUI ; accessibilité", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Développer, concevoir et publier des apps Expo : router, UI native, animation, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "État, performances, navigation et Liquid Glass ; outils de traces Instruments", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (équipe Flutter)", "Flutter", "Architecture, mises en page responsives, corrections de layout, routage, tests, localisation", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Évaluer un design au regard de 123 pages de consignes Apple", "~3k", "Non précisée"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "Performances, navigation, mises à jour, migration et tests sur appareil", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "165 skills de l’idée à l’App Store, dont 8 pour le design", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Des écrans conçus par le service IA de Sleek, puis développés en code", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "Toutes (maquettes en React et Tailwind)", "Règles de design tirées d’apps connues : couleur, grille de 8 points, zone du pouce", "~500", "Non précisée"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "Les API Apple actuelles : SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "Toutes", "Vérifier une app au regard des règles de l’App Store et de Google Play avant de la soumettre", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "Écrans, navigation et design system qui n’ont pas l’air générés par une IA", "~10", "Voir le dépôt"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Les skills mobiles les plus installées",
      text: [
        "Installations via la CLI skills, d’après le registre skills.sh au 8 novembre 2026. Les plugins installés avec `/plugin install` n’y apparaissent généralement pas : considérez ces chiffres comme un plancher.",
      ],
      points: [
        "ui-ux-pro-max (web et mobile) : environ 440 000",
        "vercel-react-native-skills : environ 270 000",
        "mobile-native (Emil Kowalski) : environ 116 000",
        "expo-dev-client, la plus installée des skills d’Expo : environ 74 000",
        "flutter-apply-architecture-best-practices, la plus installée de l’équipe Flutter : environ 45 000",
        "swiftui-pro (Paul Hudson) : environ 37 000",
        "swiftui-expert-skill (Antoine van der Lee) : environ 36 000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Claude Code pour une app mobile",
      steps: [
        {
          title: "Choisissez par plateforme : une skill qui développe, une qui conçoit",
          text: "Pour Expo, les skills Expo plus Mobile Taste Skill ; pour SwiftUI, SwiftUI Pro ou SwiftUI Expert plus Apple Design Skill ; pour Flutter, les skills de l’équipe Flutter plus Apple Design Skill ou UI UX Pro Max. Deux skills qui veulent toutes deux imposer le style vont se contredire.",
          code: install,
        },
        {
          title: "Donnez-lui le brief et une app de référence",
          text: "Dites à qui s’adresse l’app, quels sont les trois ou quatre écrans qui comptent et quelle app a le rendu qui vous plaît. Mobile Taste Skill oblige l’agent à arrêter une lecture de l’app (type, public, ressenti) et à planifier la navigation avant d’écrire la moindre ligne de code.",
        },
        {
          title: "Vérifiez sur un simulateur, pas dans le code",
          text: "Lancez l’app dans le simulateur iOS, un émulateur Android ou Expo Go, et regardez de vrais écrans à plusieurs tailles. La skill agent-device de Callstack permet à l’agent de piloter un appareil et de vérifier son propre travail.",
        },
        {
          title: "Enregistrez le design system dans le dépôt",
          text: "Mobile Taste Skill écrit un MOBILE-DESIGN.md et Expo propose une skill expo-design-system. Gardez le résultat dans le dépôt pour que les sessions suivantes, et les autres agents, respectent les mêmes couleurs, la même typographie et les mêmes espacements. Voir le [guide CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Source : les agent skills d’Expo", href: expo },
    },
    {
      kind: "text",
      title: "À savoir avant d’installer",
      points: [
        "Sleek nécessite un compte payant pour un usage réel : les comptes gratuits reçoivent des crédits d’essai pour environ une génération de design, et l’offre Pro coûte $69 par mois, d’après sa skill. Chaque brief est envoyé à sleek.design.",
        "Les skills EAS d’Expo utilisent les services hébergés de build et de mise à jour d’Expo, et chaque skill Expo demande à l’agent d’envoyer des retours via la CLI agent d’Expo.",
        "Les outils de traces de SwiftUI Expert nécessitent xctrace de Xcode et Python 3 ; ils enregistrent et analysent des traces Instruments sur votre machine.",
        "Claude Code Apple Skills suit sa branche main sans version figée, et son propre avertissement précise que les skills ont été écrites avec l’aide de Claude Code et peuvent contenir des inexactitudes.",
        "mobile-native d’Emil Kowalski s’adresse aux web apps et aux PWA sur smartphone, pas aux apps natives.",
        "Aucune n’est créée par Apple ou Google, et App Store Review ne peut pas garantir l’approbation. Le registre liste aussi design-mobile-apps de Sleek avec environ 1.3 million d’installations, sous un dépôt qui compte peu d’étoiles ; nous n’avons pas pu vérifier ce chiffre, il ne figure donc pas dans la liste ci-dessus.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez à vos skills un designer d’apps qui travaille tous les jours",
      text: [
        "Une skill rend une session meilleure sur le mobile. Crewmark transforme Claude Code ou Codex en designer d’apps IA doté d’un objectif, par exemple trois écrans peaufinés par semaine, d’horaires de travail et d’un tableau d’écrans à corriger ; il se réveille au rythme d’une pulsation et ouvre des pull requests avec des captures du simulateur.",
      ],
      steps: [
        {
          title: "Recrutez le rôle de designer d’apps",
          text: "Sa fiche de poste, son objectif et sa routine sont déjà configurés ; voir le [designer d’apps IA](/ai-employees/app-designer) et l’[ingénieur logiciel IA](/ai-employees/software-engineer).",
        },
        {
          title: "Installez vos skills mobiles dans le dépôt",
          text: "L’employé utilise les skills de `.claude/skills` comme n’importe quelle session. Pour le web et l’UI, voir les [meilleures skills Claude pour le web design](/skills/website-design).",
        },
        {
          title: "Relisez des pull requests, pas des prompts",
          text: "Approuvez les écrans qui vous plaisent ; demandez des modifications sur le tableau. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Claude Code pour le développement mobile avec des skills" },
  mid: {
    title: "Vous voulez un designer d’apps qui fait tourner ces skills tous les jours ?",
    text: "Le designer d’apps IA de Crewmark travaille dans votre code au rythme d’une pulsation et ouvre des pull requests avec des captures.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les skills Claude pour apps mobiles",
    items: [
      {
        q: "Quelle est la meilleure skill Claude pour le design d’apps mobiles ?",
        a: "Cela dépend de la plateforme. Pour React Native et Expo, Mobile Taste Skill avec les skills d’Expo ; pour SwiftUI, SwiftUI Pro ou SwiftUI Expert avec Apple Design Skill ; pour tout framework, Apple Design Skill ou UI UX Pro Max pour la partie visuelle.",
      },
      {
        q: "Existe-t-il une skill Claude officielle pour React Native ou Expo ?",
        a: "Expo publie expo/skills, aussi disponible sous forme de plugin dans claude-plugins-official, et Vercel et Callstack publient des skills React Native. Aucune n’est créée par Anthropic.",
      },
      {
        q: "Quelle est la meilleure skill Claude Code pour SwiftUI et iOS ?",
        a: "SwiftUI Pro de Paul Hudson cible iOS 26 et Swift 6.4 et les erreurs que font les LLM en SwiftUI ; SwiftUI Expert d’Antoine van der Lee couvre l’état, les performances et Liquid Glass. Les deux s’installent comme plugins ou avec la CLI skills.",
      },
      {
        q: "Existe-t-il une skill Flutter pour Claude Code ?",
        a: "Oui. L’équipe Flutter publie flutter/agent-plugins, avec des skills pour l’architecture, les mises en page responsives, les corrections de layout, le routage, la localisation et les tests, et inclut les outils MCP Dart et Flutter.",
      },
      {
        q: "Claude Code peut-il concevoir l’UI d’une app mobile ?",
        a: "Avec une skill de design, il fait bien mieux que sans : la skill apporte les règles de la plateforme et une direction. Vérifiez les écrans sur un simulateur ou un smartphone, car le code seul ne révèle pas les problèmes d’espacement et de zones tactiles.",
      },
      {
        q: "Ces skills mobiles fonctionnent-elles avec Codex et Cursor ?",
        a: "La plupart, oui. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill et les skills de Callstack documentent Codex ou Cursor, et la CLI skills installe les skills SKILL.md dans des dizaines d’agents.",
      },
    ],
  },
  cta: {
    title: "Mettez un designer d’apps sur votre tableau, avec les skills auxquelles vous faites confiance.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le dépôt GitHub de chaque skill, via l’API GitHub et dans le registre skills.sh le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, Apple, Google ni avec les auteurs des skills présentées, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
