import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// pt-BR translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "Um FPS num porto de contêineres sob a chuva, feito em cerca de oito horas sem nenhum retorno humano: cada modelo, textura e som criado do zero, por uns US$ 550 a preço de API. O prompt foi algo como \"faz um FPS pra mim também\".",
  "what-the-water-keeps":
    "Um passeio lento de barco, à luz de lanterna, por oito mundos de sonho, de uma cidade submersa a uma floresta nevada, em Three.js. O autor usou Tripo 3D nos modelos e Suno na trilha do jogo; o Fable compôs a do trailer.",
  "oil-paint": "Caminhe por uma floresta de outono que parece pintada à mão: cerca de 1,5 milhão de pinceladas por quadro a 200 fps numa aba do navegador, feito em menos de uma hora. O código é aberto.",
  "starry-night-rider": "Pedale pela vila de A Noite Estrelada, de Van Gogh, com céu, casas e paralelepípedos em pinceladas espiraladas.",
  "mirror-earth": "O planeta inteiro em voxels: vá aonde quiser, destrua o que quiser, com clima que acompanha a Terra real ao vivo. Feito no Spawn.",
  "i-would-have-gotten-away-with-it":
    "Um Scooby-Doo ao contrário, de Ethan Mollick: você é o vilão da mansão assombrada e precisa assustar as crianças intrometidas. O Fable também fez o trailer, a música e o som.",
  "gilt-and-gutter": "Um shooter 1 contra 1 estiloso num salão de fliperama dourado, onde tiros da sua cor carregam sua arma. Modelos de personagens do Tripo3D; rigging e animação do Fable.",
  tidewright: "Navegue por um mar noturno em plena tempestade e reacenda os faróis das Ilhas Thrumming.",
  "the-clockmakers-heart": "Desperte um gigante de relojoaria adormecido, um quebra-cabeça de engrenagens por vez; um primeiro rascunho do Fable 5.2.",
  "turbo-tails": "Um kart 3D com seis pilotos animais, drift, rampas e itens, para jogar com amigos. Três prompts no total; a música veio do Suno e o Claude a integrou.",
  rifts: "Um brawler de heróis 3 contra 3 no estilo Overwatch, com 12 heróis, fendas entre mundos e chefes, grátis no navegador pelo Spawn.",
  "memory-of-teresa-the-storm-spire": "Uma luta contra chefe em salões de pedra à luz de velas e na torre de uma catedral sob a chuva, feita de primeira e grátis no Spawn.",
  "aidens-revenge": "Um beat 'em up em pixel art para 1 a 4 jogadores, imaginado e desenhado por um menino chamado Aiden, e transformado em jogo numa noite com o Fable 5.2.",
  "hogwarts-royale": "Um battle royale de escola de magia em vassouras, com pátio de castelo e floresta encantada, a partir de um prompt de uma linha.",
  "party-royale": "Um jogo de festa no estilo Fall Guys para 60 jogadores, com portas falsas, plataformas giratórias e multiplayer, feito de primeira.",
  fablecraft: "Um sandbox de voxels infinito em um único arquivo HTML: coloque e quebre blocos, com sombras em 4K, reflexos e 10 chunks de distância de visão. Dois prompts com effort extra alto.",
  "street-brawler-ii": "Um jogo de luta de fliperama em pixel art com vários personagens, golpes especiais, combos e cenários, gerado de primeira em menos de 35 minutos.",
  "toy-room-adventure": "Encolha até o tamanho de um brinquedo e explore um quarto infantil ensolarado. O Fable se recusou a copiar os personagens do filme e recriou só o estilo: a luz, a poeira e cada detalhe em escala de brinquedo.",
  "tokyo-night-gp": "Um jogo de corrida em three.js pela Tóquio noturna, com asfalto molhado e reflexivo, cinco rivais e três voltas: um prompt, 30 minutos e cerca de 15% do limite semanal de um plano de US$ 20.",
  "samurai-duel": "Dois samurais sob uma lua vermelha, com barras de vida, acertos críticos e sangue, a partir de um prompt com effort High.",
  "the-clockmakers-mansion": "Um jogo de terror no Roblox: o Fable construiu a mansão assombrada no Roblox Studio via MCP e editou o trailer sozinho.",
  "neon-coast": "Uma cidade de praia no estilo GTA sob um pôr do sol rosa: desça do carro e ande, pegue outro, com minimapa e nível de procurado. Um prompt.",
  "mist-locked-gate":
    "Um jogo de ação wuxia num santuário de montanha nevado e cheio de lanternas, feito pelo Claude Fable 5.2 numa tarde, num único arquivo HTML.",
  "the-waking-river":
    "Navegue num barco dourado por cinco mundos adormecidos que despertam à sua passagem. O autor compartilhou o prompt completo em PDF.",
  "cayley":
    "Um simulador de voo com física de asa real, nove aviões reais e o planeta inteiro carregado em 3D, feito em uma noite. Código aberto.",
  "maad-maxxing":
    "Combate de carros no deserto ao estilo Mad Max, em three.js e WebGPU, escrito todo em código, sem modelos nem texturas.",
  "lumenvale":
    "Uma fantasia tranquila de mundo aberto: desperte os sete santuários adormecidos de um vale de flores. O Fable fez o jogo, a música e o trailer.",
  "danfo-run":
    "Dirija um danfo amarelo pelo trânsito de Lagos, pegue passageiros e suba no ranking ao vivo. É anterior ao Fable 5.2: feito com Claude como parceiro de desenvolvimento, Three.js para o 3D e GPT para a arte.",
};

const labels: GameLabels = {
  likes: "curtidas",
  views: "visualizações",
  prompt: "Ver o prompt (como o autor compartilhou)",
  play: "Jogar no navegador",
  trailer: "Trailer e capturas",
  source: "Código",
  alt: (name) => `${name}: capa criada a partir de capturas do jogo`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Jogos feitos com Claude Fable 5.2: 28 para jogar ou assistir",
    description:
      "Jogos criados com o Claude Fable 5.2: um FPS com cara de AAA, um passeio de bicicleta num Van Gogh, uma Terra de voxels, karts e lutas contra chefes, quase todos jogáveis no navegador. Cada um com autor, link para jogar, curtidas e, quando compartilhado, o prompt.",
  },
  breadcrumb: "Jogos com Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Jogos com Claude Fable 5.2: 28 jogos que as pessoas fizeram, e como",
    lead: "Nos dias após o lançamento do Claude Fable 5.2, muita gente publicou jogos feitos com ele: um FPS na chuva, um passeio de barco por mundos de sonho, uma Terra de voxels, karts e lutas contra chefes. Abrimos cada post, conferimos os links e ficamos com os 28 mais bonitos. 20 rodam no seu navegador.",
    cta: "Começar",
    secondary: "Jogar",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "O que o Fable 5.2 constrói",
      text: [
        "A maioria são jogos de navegador escritos em JavaScript e Three.js, muitas vezes um único arquivo HTML que você abre e joga. Outros foram feitos em plataformas que hospedam jogos criados com IA, como o Spawn, ou dentro do Roblox Studio via MCP. O Fable escreve o código, os shaders e, muitas vezes, a música e o trailer.",
      ],
      points: [
        "O Saltline, de Felix Rieseberg, levou cerca de oito horas sem retorno humano; cada modelo, textura e som foi feito do zero.",
        "O Fablecraft é um sandbox de voxels infinito num arquivo HTML, com dois prompts: \"make minecraft single file\" e \"eh looks basic, make it hdr\".",
        "O Turbo Tails, de Peter Yang, ganhou controles para celular e multiplayer com dois pedidos curtos.",
        "Alguns autores combinaram outras ferramentas: Tripo 3D para personagens, Suno para música.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Como fazer um jogo com o Fable 5.2 no Claude Code",
      steps: [
        {
          title: "Abra o Claude Code com o Fable 5.2 numa pasta vazia",
          text: "O Fable 5.2 exige um plano Pro ou superior, ou acesso via API. Mais effort demora mais e costuma ficar mais bonito.",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "Descreva o jogo em uma ou duas frases",
          text: "Prompts curtos funcionam: o Hogwarts Royale, de Matt Shumer, saiu de uma linha. Peça um único arquivo HTML com Three.js se quiser algo que abra e se compartilhe na hora.",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "Jogue e peça uma mudança de cada vez",
          text: "O Turbo Tails cresceu assim: primeiro \"faça funcionar no celular\" (Let's make mobile work please), depois \"adicione multiplayer do jeito mais simples\" (Ok let's add multiplayer the simplest way).",
        },
        {
          title: "Compartilhe",
          text: "Publique a pasta num host estático como Vercel ou Netlify, ou publique como artifact do Claude, como o Saltline e o Tidewright.",
        },
      ],
    },
    ...gameSections(
      "pt-BR",
      text,
      labels,
      {
        playable: { title: "Jogos para jogar agora", text: "Rodam no navegador. Cada card leva ao jogo, ao post do autor e a uma página com trailer e capturas." },
        video: { title: "Jogos compartilhados em vídeo", text: "Ainda sem versão pública: veja a jogatina no post do autor." },
      },
      "Post original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mais do Claude",
      text: [
        "A lista completa, com capturas e prompts, está no GitHub: [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). Para curtas e mundos 3D, [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos); para vídeos de lançamento feitos com o Opus 5.5, [motion graphics com Opus 5.5](/blog/opus-5-5-motion-graphics). O que mudou no modelo está no nosso [guia do Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Fazer um jogo de navegador com o Claude Fable 5.2 no Claude Code" },
  mid: {
    title: "Quer o Fable 5.2 entregando uma funcionalidade por dia?",
    text: "Os funcionários do Crewmark rodam no seu próprio Claude Code, acordam com um heartbeat e pegam a próxima tarefa do quadro, inclusive se for um jogo.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Fable 5.2 consegue fazer jogos?",
        a: "Sim. Ele escreve jogos de navegador jogáveis em JavaScript e Three.js, muitas vezes num único arquivo HTML, e consegue construir no Roblox Studio via MCP. Os autores relatam de jogos de um prompt em 30 minutos a um FPS de oito horas com tudo feito do zero.",
      },
      {
        q: "Onde jogar os jogos do Claude Fable 5.2?",
        a: "20 dos 28 acima rodam no navegador: nos sites dos autores, como artifacts do Claude ou no Spawn. O resto foi compartilhado em vídeo.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "O Tokyo Night GP levou um prompt, 30 minutos e uns 15% do limite semanal de um plano de US$ 20. O Street Brawler II, menos de 35 minutos. O Saltline rodou cerca de oito horas, uns US$ 550 a preço de API.",
      },
      {
        q: "Ele copia personagens de filmes e jogos?",
        a: "Nem sempre. Quando pediram um jogo de Toy Story, o Fable se recusou a usar os personagens protegidos e recriou só o estilo. Misturas de fãs como o Hogwarts Royale são projetos dos próprios autores.",
      },
      {
        q: "Os prompts são públicos?",
        a: "Cinco autores compartilharam os seus, e citamos nos cards. A maioria era curta: uma ou duas frases.",
      },
    ],
  },
  cta: {
    title: "Coloque o modelo mais novo num trabalho fixo.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargo, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Cada post, link e prompt conferido em 11 de novembro de 2026; curtidas e visualizações são as daquele dia.",
  disclaimer:
    "Os jogos, capas e prompts pertencem aos seus autores; cada card leva ao post original. As capas foram geradas a partir das capturas de cada jogo. O Crewmark é um produto independente, sem afiliação nem endosso da Anthropic. Claude, Claude Fable e Claude Code são marcas da Anthropic; os demais jogos e personagens pertencem aos seus donos.",
};
