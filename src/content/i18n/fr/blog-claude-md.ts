import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commandes
- Installer : pnpm install
- Un seul fichier de test : pnpm vitest run path/to/file.test.ts
- Typecheck : pnpm tsc --noEmit

# Conventions
- Lève les erreurs avec les helpers de src/lib/errors.ts, jamais avec des chaînes brutes.
- src/legacy/ est toujours en service, mais ne copie pas ses patterns.

# Pièges
- Les tests d’intégration ont besoin de DATABASE_URL (voir .env.example).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- Chaque handler valide son entrée avec le schéma de src/api/schemas/.`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md : emplacements, bonnes pratiques, modèle et AGENTS.md | Crewmark",
    description:
      "Comment fonctionne CLAUDE.md dans Claude Code : où placer les fichiers et dans quel ordre ils se chargent, imports, règles, que mettre dedans, un modèle et le lien avec AGENTS.md.",
  },
  breadcrumb: "Guide CLAUDE.md",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "CLAUDE.md : où le mettre, quoi écrire et comment il s’accorde avec AGENTS.md",
    lead: "CLAUDE.md est un fichier markdown d’instructions que Claude Code lit au début de chaque session : les commandes à lancer, les conventions à suivre et les pièges à éviter dans votre projet. Ce guide couvre tous les emplacements possibles d’un CLAUDE.md et leur ordre de chargement, les imports et les fichiers de règles, ce qui doit y figurer ou non, un court modèle et le lien avec AGENTS.md.",
    cta: "Accès anticipé",
    secondary: "Aller au modèle",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est CLAUDE.md",
      text: [
        "Claude Code démarre chaque session sans souvenir de la précédente. CLAUDE.md est le moyen de lui donner le contexte dont un nouveau coéquipier aurait besoin : il est lu au lancement et envoyé à Claude comme un message après le system prompt. C’est donc du contexte, pas une configuration imposée. Claude le suit généralement, mais ce qui doit toujours ou jamais arriver relève des hooks ou des règles de permission.",
      ],
      points: [
        "Du markdown simple, sans champ obligatoire : des titres et de courtes puces fonctionnent le mieux.",
        "Les fichiers se combinent, ils ne s’écrasent pas : chaque CLAUDE.md applicable est chargé, donc des lignes contradictoires laissent Claude en choisir une.",
        "Vérifiez ce qui a été chargé avec `/context all`, sous Memory files.",
      ],
    },
    {
      kind: "table",
      title: "Où placer les fichiers CLAUDE.md et dans quel ordre ils se chargent",
      text: [
        "Claude Code les charge du plus large au plus précis, si bien que le fichier le plus proche de l’endroit où vous avez lancé la commande est lu en dernier. Il remonte aussi depuis votre répertoire de travail et charge le CLAUDE.md de chaque répertoire parent.",
      ],
      headers: ["Portée", "Emplacement", "À utiliser pour"],
      rows: [
        ["Politique gérée", "`/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS), `/etc/claude-code/CLAUDE.md` (Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md` (Windows)", "Les règles qu’une organisation impose à tous ses développeurs"],
        ["Utilisateur", "`~/.claude/CLAUDE.md`", "Vos préférences personnelles dans tous les projets"],
        ["Projet", "`./CLAUDE.md` ou `./.claude/CLAUDE.md`", "Les instructions de l’équipe, versionnées dans git"],
        ["Local", "`./CLAUDE.local.md`", "Vos notes sur un projet ; ajoutez-le au .gitignore"],
        ["Sous-répertoire", "`some/dir/CLAUDE.md`", "Chargé seulement quand Claude lit ou modifie un fichier de ce répertoire"],
        ["Règles", "`.claude/rules/*.md` et `~/.claude/rules/`", "Fichiers par sujet ; avec un glob `paths`, ils ne se chargent que pour les fichiers concernés"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment écrire un CLAUDE.md efficace",
      steps: [
        {
          title: "Commencez par /init",
          text: "Lancez `/init` dans votre projet. Claude Code lit le code et écrit un CLAUDE.md de départ ; s’il en existe déjà un, il propose des améliorations au lieu de l’écraser. Il reprend aussi `.cursorrules` et les instructions Copilot.",
        },
        {
          title: "Ne gardez que ce que Claude ne trouve pas seul",
          text: "Gardez les commandes exactes de build, de test et de lint (dont celle pour lancer un seul test), les endroits où le code est trompeur, les décisions qui ne sont écrites nulle part et tout ce que vous avez dû corriger deux fois. Retirez les arborescences de fichiers et l’architecture que Claude peut lire dans le dépôt. Anthropic recommande de rester sous 200 lignes.",
          code: example,
        },
        {
          title: "Soyez précis, sans crier",
          text: "Écrivez « Indente avec 2 espaces », pas « Formate bien le code ». La documentation actuelle juge IMPORTANT et les MAJUSCULES dépassés : ils poussent Claude à appliquer une règle à l’excès. Si une ligne est encore oubliée, raccourcissez le fichier ou transformez la règle en hook.",
        },
        {
          title: "Découpez avec les imports et les règles",
          text: "`@path/to/file` importe un autre fichier (relatif au fichier qui importe, sur quatre niveaux au maximum) ; un `@` entre backticks reste littéral. Les règles qui concernent une partie du code vont dans `.claude/rules/` avec un glob `paths`, et ne se chargent que lorsque Claude touche des fichiers correspondants.",
          code: rule,
        },
        {
          title: "Déplacez les procédures dans des skills",
          text: "Les workflows en plusieurs étapes, comme publier une version, relèvent d’une skill (`.claude/skills/<name>/SKILL.md`), qui ne se charge que lorsqu’elle est pertinente. CLAUDE.md est lu à chaque tâche, donc chaque ligne coûte de l’attention.",
        },
        {
          title: "Gardez-le à jour",
          text: "Ajoutez une ligne quand Claude répète une erreur ou qu’une relecture relève un problème, et modifiez le fichier avec `/memory` ou en demandant à Claude de le mettre à jour. `/doctor` propose des coupes quand le fichier devient trop long.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md et AGENTS.md",
      text: [
        "AGENTS.md est un format ouvert d’instructions pour les agents de code, utilisé par Codex, Cursor, Gemini CLI, l’agent de code de GitHub Copilot, opencode et bien d’autres. Claude Code le lit désormais aussi, mais par défaut seulement quand le projet n’a pas de CLAUDE.md.",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["Lu par", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode et d’autres ; Claude Code en repli"],
        ["Quand Claude Code le lit", "Toujours", "Par défaut seulement s’il n’y a ni CLAUDE.md, ni `.claude/CLAUDE.md`, ni CLAUDE.local.md dans l’arborescence ; `/config` peut lire les deux"],
        ["Fichier personnel", "`CLAUDE.local.md`", "Non lu par Claude Code (`AGENTS.override.md` est propre à Codex)"],
        ["Imports", "`@path`, jusqu’à quatre niveaux", "Aucun dans le format"],
        ["Règles par chemin", "`.claude/rules/` avec `paths`", "Fichiers AGENTS.md imbriqués par répertoire"],
      ],
    },
    {
      kind: "text",
      title: "Un seul fichier pour Claude Code et Codex",
      text: [
        "Si votre équipe utilise les deux agents, gardez les instructions communes dans AGENTS.md et faites-les importer par CLAUDE.md, avec en dessous les notes réservées à Claude. Il ne se charge jamais deux fois. Un lien symbolique (`ln -s AGENTS.md CLAUDE.md`) fonctionne aussi, mais pas pour les coéquipiers sous Windows, et un CLAUDE.md qui se contente de dire « lis AGENTS.md » en toutes lettres n’est pas fiable.",
      ],
      points: [
        "Le dépôt de ce site fait exactement cela : son CLAUDE.md tient en une seule ligne, `@AGENTS.md`.",
        "Codex lit les fichiers AGENTS.md depuis la racine du dépôt jusqu’à votre répertoire de travail et plafonne leur taille cumulée à 32 KiB par défaut.",
      ],
    },
    {
      kind: "text",
      title: "Limites et pièges",
      points: [
        "Un CLAUDE.md chargé au lancement est lu en entier jusqu’à 4 MiB ; un fichier plus gros est ignoré.",
        "Les fichiers chargés à la demande, comme les CLAUDE.md de sous-répertoires et les règles par chemin, sont tronqués au-delà d’une limite par fichier (40 000 caractères avec une fenêtre de contexte de 200K).",
        "Les imports organisent un fichier mais n’économisent pas de contexte : le texte importé est tout de même chargé.",
        "Les imports hors du projet demandent une approbation une fois ; les commentaires HTML `<!-- -->` sont retirés et ne coûtent rien.",
        "Le CLAUDE.md à la racine du projet est relu après `/compact`.",
        "« Retiens ça » va dans l’auto memory (`~/.claude/projects/<project>/memory/`), pas dans CLAUDE.md.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "CLAUDE.md dit comment travailler. Crewmark dit sur quoi travailler, et quand.",
      text: [
        "Un bon CLAUDE.md fait démarrer chaque session de Claude Code bien informée, mais la session attend toujours votre prochain message. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, comme ingénieur logiciel ou spécialiste SEO, écrivez son objectif sous forme de chiffre et lancez la commande d’installation dans votre projet, là où se trouve déjà votre CLAUDE.md.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code). Plusieurs peuvent partager un dépôt, comme dans [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé le prend, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Écrire un fichier CLAUDE.md pour Claude Code" },
  mid: {
    title: "Votre CLAUDE.md est prêt. Qui lance la tâche suivante ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ CLAUDE.md",
    items: [
      {
        q: "Qu’est-ce que CLAUDE.md ?",
        a: "Un fichier markdown d’instructions de projet que Claude Code lit au début de chaque session, comme les commandes de build et de test, les conventions et les pièges connus. C’est du contexte pour Claude, pas une configuration imposée.",
      },
      {
        q: "Où mettre CLAUDE.md ?",
        a: "Pour une équipe, à la racine du projet sous `./CLAUDE.md` ou `./.claude/CLAUDE.md`, versionné dans git. Pour vous seul, `~/.claude/CLAUDE.md` s’applique à tous les projets et `./CLAUDE.local.md` à un seul. Les sous-répertoires peuvent avoir le leur, chargé quand Claude y travaille.",
      },
      {
        q: "Quelle longueur pour CLAUDE.md ?",
        a: "Courte. Anthropic recommande moins de 200 lignes par fichier, car chaque ligne est lue à chaque tâche. Déplacez les procédures dans des skills et les règles d’une partie du code dans `.claude/rules/`.",
      },
      {
        q: "Claude Code lit-il AGENTS.md ?",
        a: "Oui, mais par défaut seulement quand le projet n’a pas de CLAUDE.md. Pour partager un seul fichier, mettez `@AGENTS.md` en haut de CLAUDE.md, ou réglez l’option Project instructions dans `/config` pour lire les deux.",
      },
      {
        q: "CLAUDE.md ou AGENTS.md : lequel choisir ?",
        a: "Si seul Claude Code lit votre dépôt, CLAUDE.md. Si vos coéquipiers utilisent aussi Codex, Cursor ou un autre agent, écrivez AGENTS.md et importez-le depuis un CLAUDE.md qui ajoute les notes propres à Claude.",
      },
      {
        q: "Comment créer un fichier CLAUDE.md ?",
        a: "Lancez `/init` dans Claude Code pour en générer un à partir de votre code, puis élaguez-le. Modifiez-le ensuite avec `/memory` ou en demandant à Claude d’ajouter une ligne.",
      },
      {
        q: "Pourquoi Claude ignore-t-il mon CLAUDE.md ?",
        a: "Vérifiez qu’il s’est chargé avec `/context all`, cherchez les contradictions entre fichiers et raccourcissez-le : les fichiers longs diluent chaque règle. Ce qui ne doit jamais être sauté relève d’un hook ou d’une règle de permission, pas de CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Donnez du travail à votre Claude Code bien briefé.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans la documentation de Claude Code, agents.md et la documentation Codex d’OpenAI le 5 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI et non approuvé par elles. Claude et Claude Code sont des marques d’Anthropic, et Codex d’OpenAI.",
};
