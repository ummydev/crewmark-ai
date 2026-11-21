import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// fr translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "Un FPS dans un port à conteneurs sous la pluie, construit en huit heures environ sans aucun retour humain : chaque modèle, texture et son créé de zéro, pour à peu près 550 $ au tarif de l'API. Le prompt tenait en gros dans « fais-moi aussi un FPS ».",
  "what-the-water-keeps":
    "Une lente balade en barque à la lueur d'une lanterne à travers huit mondes de rêve, d'une ville engloutie à une forêt enneigée, en Three.js. L'auteur a utilisé Tripo 3D pour les modèles et Suno pour la musique du jeu ; Fable a composé celle de la bande-annonce.",
  "oil-paint": "Promenez-vous dans une forêt d'automne qui semble peinte à la main : environ 1,5 million de coups de pinceau par image à 200 i/s dans un onglet du navigateur, réalisée en moins d'une heure. Le code est ouvert.",
  "starry-night-rider": "Traversez à vélo le village de La Nuit étoilée de Van Gogh, ciel, maisons et pavés tout en touches tourbillonnantes.",
  "mirror-earth": "La planète entière en voxels : allez où vous voulez, cassez tout, avec une météo qui suit la vraie Terre en direct. Construit sur Spawn.",
  "i-would-have-gotten-away-with-it":
    "Un Scooby-Doo à l'envers signé Ethan Mollick : vous êtes le méchant du manoir hanté et devez effrayer les enfants trop curieux. Fable a aussi fait la bande-annonce, la musique et les sons.",
  "gilt-and-gutter": "Un shooter 1 contre 1 très stylé dans une salle d'arcade dorée, où les tirs de votre couleur rechargent votre arme. Modèles de personnages par Tripo3D ; squelette et animation par Fable.",
  tidewright: "Naviguez sur une mer nocturne déchaînée et rallumez les phares des îles Thrumming.",
  "the-clockmakers-heart": "Réveillez un géant mécanique endormi, une énigme d'engrenages après l'autre ; un premier jet de Fable 5.2.",
  "turbo-tails": "Un jeu de kart en 3D avec six pilotes animaux, dérapages, tremplins et objets, à jouer entre amis. Trois prompts en tout ; la musique vient de Suno et Claude l'a intégrée.",
  rifts: "Un jeu de héros en 3 contre 3 façon Overwatch, avec 12 héros, des failles entre les mondes et des boss, gratuit dans le navigateur sur Spawn.",
  "memory-of-teresa-the-storm-spire": "Un combat de boss sombre dans des salles de pierre éclairées à la bougie et sur la flèche d'une cathédrale battue par la pluie, fait du premier coup et gratuit sur Spawn.",
  "aidens-revenge": "Un beat 'em up en pixel art pour 1 à 4 joueurs, imaginé et dessiné par un enfant nommé Aiden, et devenu un jeu en une nuit avec Fable 5.2.",
  "hogwarts-royale": "Un battle royale d'école de sorcellerie sur balais, avec une cour de château et une forêt enchantée, à partir d'un prompt d'une ligne.",
  "party-royale": "Un jeu de soirée façon Fall Guys pour 60 joueurs, avec fausses portes, plateformes tournantes et multijoueur, fait du premier coup.",
  fablecraft: "Un bac à sable de voxels infini dans un seul fichier HTML : posez et cassez des blocs, avec ombres 4K, reflets et 10 chunks de distance d'affichage. Deux prompts en effort extra élevé.",
  "street-brawler-ii": "Un jeu de combat d'arcade en pixel art avec plusieurs personnages, coups spéciaux, combos et décors, généré du premier coup en moins de 35 minutes.",
  "toy-room-adventure": "Rétrécissez à la taille d'un jouet et explorez une chambre d'enfant baignée de soleil. Fable a refusé de copier les personnages du film et n'a recréé que le style : la lumière, la poussière et chaque détail à hauteur de jouet.",
  "tokyo-night-gp": "Une course en three.js dans Tokyo la nuit, sur un asphalte mouillé et brillant, cinq rivaux, trois tours : un prompt, 30 minutes, environ 15 % de la limite hebdomadaire d'un forfait à 20 $.",
  "samurai-duel": "Deux samouraïs sous une lune rouge, avec barres de vie, coups critiques et effets de sang, à partir d'un prompt en effort High.",
  "the-clockmakers-mansion": "Un jeu d'horreur Roblox : Fable a construit le manoir hanté dans Roblox Studio via MCP et monté lui-même la bande-annonce.",
  "neon-coast": "Une ville balnéaire façon GTA sous un coucher de soleil rose : descendez de voiture et marchez, prenez-en une autre, avec minicarte et niveau de recherche. Un prompt.",
  "mist-locked-gate":
    "Un jeu d'action wuxia dans un sanctuaire de montagne enneigé, éclairé de lanternes, fait par Claude Fable 5.2 en un après-midi dans un seul fichier HTML.",
  "the-waking-river":
    "Naviguez sur une barque dorée à travers cinq mondes endormis qui s'éveillent sur votre passage. L'auteur a partagé le prompt complet en PDF.",
  "cayley":
    "Un simulateur de vol avec une vraie physique des ailes, neuf vrais avions et toute la planète chargée en 3D, construit en une nuit. Open source.",
  "maad-maxxing":
    "Des combats de voitures façon Mad Max dans le désert, en three.js et WebGPU, entièrement écrits en code, sans modèles ni textures.",
  "lumenvale":
    "Une fantasy douce en monde ouvert : réveillez les sept sanctuaires endormis d'une vallée fleurie. Fable a fait le jeu, sa musique et sa bande-annonce.",
  "danfo-run":
    "Conduisez un danfo jaune dans les embouteillages de Lagos, prenez des passagers et grimpez au classement en direct. Antérieur à Fable 5.2 : fait avec Claude comme partenaire de développement, Three.js pour la 3D et GPT pour les graphismes.",
};

const labels: GameLabels = {
  likes: "j'aime",
  views: "vues",
  prompt: "Voir le prompt (tel que partagé par l'auteur)",
  play: "Jouer dans le navigateur",
  trailer: "Bande-annonce et captures",
  source: "Code source",
  alt: (name) => `${name} : visuel créé à partir de captures du jeu`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Jeux faits avec Claude Fable 5.2 : 28 à jouer ou à regarder",
    description:
      "Des jeux créés avec Claude Fable 5.2 : un FPS au look AAA, une balade à vélo dans un Van Gogh, une Terre en voxels, du kart et des combats de boss, presque tous jouables dans le navigateur. Avec l'auteur, le lien pour jouer, les j'aime et, s'il a été partagé, le prompt.",
  },
  breadcrumb: "Jeux avec Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Jeux avec Claude Fable 5.2 : 28 jeux réalisés par la communauté, et comment",
    lead: "Dans les jours qui ont suivi la sortie de Claude Fable 5.2, beaucoup ont publié les jeux qu'il avait construits : un FPS sous la pluie, une balade en barque à travers des mondes de rêve, une Terre en voxels, du kart et des combats de boss. Nous avons ouvert chaque publication, vérifié les liens et gardé les 28 plus beaux. 20 tournent dans votre navigateur.",
    cta: "Commencer",
    secondary: "Y jouer",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Ce que construit Fable 5.2",
      text: [
        "La plupart sont des jeux de navigateur écrits en JavaScript et Three.js, souvent un seul fichier HTML qu'on ouvre pour jouer. D'autres sont construits sur des plateformes qui hébergent des jeux faits par IA, comme Spawn, ou dans Roblox Studio via MCP. Fable écrit le code, les shaders et souvent la musique et la bande-annonce.",
      ],
      points: [
        "Saltline, de Felix Rieseberg, a pris environ huit heures sans retour humain ; chaque modèle, texture et son a été créé de zéro.",
        "Fablecraft est un bac à sable de voxels infini dans un fichier HTML, en deux prompts : \"make minecraft single file\" et \"eh looks basic, make it hdr\".",
        "Turbo Tails, de Peter Yang, a gagné les commandes mobiles et le multijoueur en deux courtes relances.",
        "Certains auteurs ont combiné d'autres outils : Tripo 3D pour les personnages, Suno pour la musique.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Faire un jeu avec Fable 5.2 dans Claude Code",
      steps: [
        {
          title: "Lancez Claude Code avec Fable 5.2 dans un dossier vide",
          text: "Fable 5.2 demande un forfait Pro ou supérieur, ou un accès API. Plus d'effort prend plus de temps et donne en général un plus beau résultat.",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "Décrivez le jeu en une ou deux phrases",
          text: "Les prompts courts fonctionnent : Hogwarts Royale, de Matt Shumer, est sorti d'une ligne. Demandez un seul fichier HTML avec Three.js pour pouvoir l'ouvrir et le partager tout de suite.",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "Jouez-y et demandez un changement à la fois",
          text: "Turbo Tails a grandi ainsi : d'abord « fais-le marcher sur mobile » (Let's make mobile work please), puis « ajoute le multijoueur le plus simplement possible » (Ok let's add multiplayer the simplest way).",
        },
        {
          title: "Partagez-le",
          text: "Déployez le dossier sur un hébergeur statique comme Vercel ou Netlify, ou publiez-le en artifact Claude, comme Saltline et Tidewright.",
        },
      ],
    },
    ...gameSections(
      "fr",
      text,
      labels,
      {
        playable: { title: "Jeux jouables tout de suite", text: "Ils tournent dans le navigateur. Chaque carte renvoie au jeu, à la publication de l'auteur et à une page avec la bande-annonce et des captures." },
        video: { title: "Jeux partagés en vidéo", text: "Pas encore de version publique : regardez la partie dans la publication de l'auteur." },
      },
      "Publication d'origine",
    ),
    {
      kind: "text",
      id: "more",
      title: "Plus de créations Claude",
      text: [
        "La liste complète, avec captures et prompts, est sur GitHub : [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). Pour des courts métrages et des mondes 3D, [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos) ; pour des films de lancement faits avec Opus 5.5, [motion design avec Opus 5.5](/blog/opus-5-5-motion-graphics). Ce qui a changé dans le modèle est dans notre [guide de Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Faire un jeu de navigateur avec Claude Fable 5.2 dans Claude Code" },
  mid: {
    title: "Fable 5.2 qui livre une fonctionnalité par jour ?",
    text: "Les employés Crewmark tournent sur votre propre Claude Code, se réveillent au rythme d'un heartbeat et prennent le ticket suivant sur le tableau, jeux compris.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Fable 5.2 peut-il faire des jeux ?",
        a: "Oui. Il écrit des jeux de navigateur jouables en JavaScript et Three.js, souvent dans un seul fichier HTML, et peut construire dans Roblox Studio via MCP. Les auteurs racontent aussi bien des jeux d'un prompt en 30 minutes qu'un FPS de huit heures entièrement créé de zéro.",
      },
      {
        q: "Où jouer aux jeux faits avec Claude Fable 5.2 ?",
        a: "20 des 28 jeux ci-dessus tournent dans le navigateur : sur les sites de leurs auteurs, en artifacts Claude ou sur Spawn. Les autres ont été partagés en vidéo.",
      },
      {
        q: "Combien de temps et combien ça coûte ?",
        a: "Tokyo Night GP a pris un prompt, 30 minutes et environ 15 % de la limite hebdomadaire d'un forfait à 20 $. Street Brawler II, moins de 35 minutes. Saltline a tourné environ huit heures, à peu près 550 $ au tarif de l'API.",
      },
      {
        q: "Copie-t-il les personnages de films et de jeux ?",
        a: "Pas toujours. Quand on lui a demandé un jeu Toy Story, Fable a refusé d'utiliser les personnages protégés et n'a recréé que le style. Les mélanges de fans comme Hogwarts Royale sont les projets de leurs auteurs.",
      },
      {
        q: "Les prompts sont-ils publics ?",
        a: "Cinq auteurs ont partagé le leur, et nous les citons sur les cartes. La plupart étaient courts : une ou deux phrases.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste permanent au modèle le plus récent.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA avec un poste, des objectifs, des horaires et un heartbeat.",
    button: "Commencer",
  },
  checked: "Chaque publication, lien et prompt vérifié le 11 novembre 2026 ; les j'aime et les vues sont ceux de ce jour-là.",
  disclaimer:
    "Les jeux, visuels et prompts appartiennent à leurs auteurs ; chaque carte renvoie à la publication d'origine. Les visuels ont été générés à partir des captures de chaque jeu. Crewmark est un produit indépendant, sans lien avec Anthropic ni soutien de sa part. Claude, Claude Fable et Claude Code sont des marques d'Anthropic ; les autres jeux et personnages appartiennent à leurs propriétaires.",
};
