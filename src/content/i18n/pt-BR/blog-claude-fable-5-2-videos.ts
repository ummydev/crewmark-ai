import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// pt-BR translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "Um app de chat construtivista que muda de forma",
    text: "A interface de um app de chat de companhia refeita em estilo construtivista: andorinhas, fases da lua, um olho não humano e uma escada em espiral, com telas de chat desenhadas como mapas e cartas.",
  },
  "art-history-cat": {
    title: "40 mil anos de história da arte num prompt",
    text: "A mesma pessoa e o mesmo gato redesenhados em cada época, de uma pintura mural egípcia a Van Gogh, Mondrian, pixel art e 2026. Cerca de 4.900 linhas de código, sem modelo de imagem.",
  },
  "crystal-bud-flight": {
    title: "Um botão de cristal e um voo sobre campos roxos",
    text: "Um botão de flor congelado e depois um voo rasante sobre prados, picos nevados e campos de flores roxas. O autor diz que levou meia hora.",
  },
  "blender-island-rebuild": {
    title: "Uma ilha reconstruída no Blender a partir de uma referência",
    text: "Feita no Blender só com código: 130 objetos, 1,14 milhão de faces, sem texturas, uma roda d'água girando e peixes nadando. O Fable completou o que a referência não mostrava.",
  },
  "locomotive-robot-anime": {
    title: "Um curta de anime de 90 segundos: uma locomotiva a vapor vira robô",
    text: "Anime 2D com cara de desenho à mão a partir de um prompt: o Fable montou cada plano no Blender via Python, renderizou e passou a arte-final quadro a quadro, e escreveu a trilha nota por nota com numpy.",
  },
  "geonosis-battle-blender": {
    title: "Uma batalha de Star Wars construída no Blender",
    text: "O teste de Blender que o autor roda em todo modelo novo: mais de mil droides, naves de ataque e tiros de laser na arena. Um prompt, 1,5 hora com 20 minutos de render.",
  },
  "laundry-in-the-sun": {
    title: "Roupa no varal na luz da tarde",
    text: "Duas pessoas olham camisas balançando num varal num campo ensolarado. As dobras, a luz atravessando o tecido, a câmera e o som são todos código.",
  },
  "fushimi-inari-travel-ad": {
    title: "Um anúncio de viagem do Fushimi Inari no outono",
    text: "Vinte segundos do santuário de Kyoto, uma corrida pelo túnel de toriis vermelhos e uma cartela ao pôr do sol, tudo em código, música incluída.",
  },
  "rainy-tokyo-alley": {
    title: "Um beco de Tóquio na chuva, sem modelo de vídeo",
    text: "Chuva, poças e reflexos de neon, um espelho de esquina que reflete de verdade e placas em japonês que dá para ler. Publicado pela Higgsfield.",
  },
  "pet-robot": {
    title: "Um robô de estimação que você poderia construir em casa",
    text: "Matt Shumer pediu um robô que pudesse montar no apartamento e recebeu um robozinho redondo que acorda, mexe o braço e brinca com uma bola.",
  },
  "lighthouse-in-a-storm": {
    title: "Um farol na tempestade",
    text: "Um facho de luz varre um mar noturno agitado até as nuvens se abrirem em volta da lua. Effort alto, com som.",
  },
  "piano-boy-short": {
    title: "Um curta de 46 segundos sem nenhuma imagem gerada",
    text: "Um menino ao piano: cada quadro desenhado e cada nota tocada por código que o Fable escreveu, sem modelos de imagem ou vídeo.",
  },
  "ufo-area-51": {
    title: "Um OVNI pousa na Área 51",
    text: "Um filme de cinco planos e 30 segundos em three.js e Remotion a partir de uma frase: sem modelos importados, texturas ou áudio de banco, em 4K.",
  },
  "spider-web-logo": {
    title: "Uma aranha tece o logo do Claude na teia",
    text: "Uma aranha ao luar tece a teia passo a passo e, ao amanhecer, borda o logo do Claude no centro.",
  },
  istanbul: {
    title: "Istambul, construída a partir de um prompt",
    text: "A cidade vista do alto: a Hagia Sophia e o Chifre de Ouro, balsas cruzando o Bósforo e o horizonte ao entardecer. Fable 5.2 Max, cerca de US$ 46.",
  },
  "auric-voyage": {
    title: "Auric Voyage: um navio dourado acima das nuvens",
    text: "Um veleiro dourado sobre nuvens volumétricas, com ciclo de dia e noite e um convés onde dá para subir. Só Three.js, cerca de 38 minutos e US$ 17.",
  },
  "pirate-ship": {
    title: "Um navio pirata navegando ao pôr do sol",
    text: "Um três-mastros com esteira, janelas de cabine acesas e velas cheias. De primeira, cerca de 1,5 hora e 35 milhões de tokens.",
  },
  "voxel-pagoda": {
    title: "Um pagode de voxels cheio de detalhes",
    text: "Uma ilha flutuante com um pagode de cinco andares, cerejeiras, lagos e lanternas que acendem à noite.",
  },
  "voxel-paris-1888": {
    title: "Paris em 1888, com a Torre Eiffel em construção",
    text: "Guindastes erguem vigas, rebitadores soltam faíscas e um barco a vapor sobe o Sena, numa ilha de voxels flutuante. De primeira, com um prompt longo e preciso.",
  },
  "night-tokyo-ramen-stall": {
    title: "Uma barraca de ramen numa noite chuvosa de Tóquio",
    text: "Um PROMPT.md, uma pasta vazia e nenhuma edição manual, em 20 minutos e por US$ 7. Aperte T e a chuva vira neve aos poucos.",
  },
  "floating-pixel-island": {
    title: "Uma ilha de pixels flutuante",
    text: "Uma ilha em pixel art em loop, com torre de mago, cerejeiras, arco-íris e dirigíveis. Um prompt com effort extra alto.",
  },
  "talking-village": {
    title: "Uma vila europeia onde cada personagem pensa",
    text: "Uma vila 3D cujos moradores pensam e conversam entre si com IA, do teste do Fable 5.2 feito por Matthew Berman.",
  },
  "lighthouse-at-sunset": {
    title: "Um farol fotorrealista ao pôr do sol",
    text: "O prompt de farol de sempre do autor, no Fable 5.2: um farol listrado, um facho girando e um mar calmo.",
  },
  "abyssal-landing-page": {
    title: "Abyssal: uma landing page que desce até o fundo do mar",
    text: "Role de uma superfície ao luar, passando por águas-vivas brilhantes, até uma cidade de lanternas e um olho gigante no escuro. Feita com effort baixo.",
  },
  "liquid-glass-type": {
    title: "Tipografia de vidro, âmbar e metal líquido",
    text: "Bolhas de vidro, âmbar e metal líquido atravessam títulos enormes, cada material com sua paleta.",
  },
  "car-configurator": {
    title: "Um configurador de carro feito com effort médio",
    text: "Gire em volta de um sedã vermelho, troque pintura e rodas e mude para uma vista de largada com rastros de luz. Doze minutos.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth: oito jeitos de destruir o planeta",
    text: "A Terra com mapas reais da NASA e luzes das cidades, e oito jeitos de acabar com ela, de um asteroide a um deus que a come como uma maçã. De primeira.",
  },
  "virus-capsid": {
    title: "O capsídeo de um vírus se montando sozinho",
    text: "Um arquivo HTML: 420 subunidades de proteína formam um capsídeo T=7, primeiro 12 pentâmeros e depois 60 hexâmeros, a geometria dos vírus reais.",
  },
  "drained-ocean": {
    title: "Como fica o Atlântico sem água",
    text: "Dados reais do fundo do mar da NOAA num sobrevoo 3D enquanto o oceano esvazia: a Grã-Bretanha se liga à Europa em segundos e surge a dorsal mesoatlântica.",
  },
  "deep-sea-dive": {
    title: "Um mergulho da superfície até 40 metros",
    text: "A luz do sol, os cardumes e o facho da lanterna mudam com a profundidade, com um profundímetro ao lado. Tudo código.",
  },
  "pocket-black-hole": {
    title: "Um buraco negro de bolso",
    text: "Quando pediram algo que viralizasse, o Fable fez um buraco negro interativo com um disco brilhante curvado pela lente gravitacional.",
  },
  "galaxy-dive": {
    title: "Voe para dentro de uma galáxia espiral",
    text: "Comece fora de uma galáxia espiral e entre voando, com um contador de anos-luz diminuindo. Cerca de 20 minutos de trabalho.",
  },
};

const labels: VideoLabels = {
  likes: "curtidas",
  views: "visualizações",
  prompt: "Ver o prompt (como o autor compartilhou)",
  open: "Abrir ao vivo",
  alt: (title) => `Quadro do vídeo: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Vídeos com Claude Fable 5.2: 32 curtas e cenas 3D feitos em código",
    description:
      "Vídeos criados com o Claude Fable 5.2: um curta de anime renderizado no Blender, Istambul vista do alto, um navio dourado acima das nuvens, landing pages e visualizações científicas. Sem modelo de vídeo: o Fable escreve o código. Com autor, curtidas e prompt.",
  },
  breadcrumb: "Vídeos com Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Vídeos com Claude Fable 5.2: 32 curtas e cenas 3D, tudo feito em código",
    lead: "O Claude Fable 5.2 não gera vídeo como um modelo de vídeo. Ele escreve código em Three.js, WebGL, Remotion ou no Python do Blender, e renderiza o que esse código desenha. Aqui estão os 32 melhores resultados que as pessoas publicaram nos primeiros dias, cada um com autor, números e, quando compartilhado, o prompt.",
    cta: "Começar",
    secondary: "Assistir",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Como o Fable 5.2 faz vídeo",
      text: [
        "Gerar vídeo com o Fable 5.2 é pedir uma cena ou um curta e deixar que ele construa tudo como um programa: os modelos, a câmera, a iluminação e muitas vezes a música. Alguns autores renderizam em MP4; outros compartilham a cena como uma página que dá para abrir e explorar.",
      ],
      points: [
        "O anime de 90 segundos de 0kncn foi montado plano a plano no Blender via Python, com trilha escrita em numpy.",
        "O navio dourado de Marcel é Three.js puro, sem Blender nem modelos externos: cerca de 38 minutos e US$ 17 com effort médio.",
        "A Istambul de Peter Gostev, a mais curtida de todas, rodou no Fable 5.2 Max por cerca de US$ 46.",
        "O filme do OVNI de Dante saiu de uma frase, com three.js e Remotion, sem texturas nem áudio de banco.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Como fazer um no Claude Code",
      steps: [
        {
          title: "Abra o Claude Code com o Fable 5.2",
          text: "O Fable 5.2 exige um plano Pro ou superior, ou acesso via API. Para uma cena compartilhável como página, basta uma pasta vazia; para o Blender, instale-o para que o Fable o controle via Python.",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "Descreva a cena, ou o curta plano a plano",
          text: "Uma frase basta (\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"); prompts longos e precisos, como o de Paris 1888 abaixo, dão mais controle.",
        },
        {
          title: "Peça para renderizar, ou para deixar ao vivo",
          text: "Peça um MP4 com resolução e taxa de quadros definidas, ou uma única página HTML que abra no navegador e possa ser compartilhada.",
        },
      ],
    },
    ...videoSections(
      "pt-BR",
      text,
      labels,
      {
        film: { title: "Curtas e animação", text: "Filmes curtos com câmera, história ou trilha." },
        world: { title: "Mundos 3D e dioramas", text: "Cidades, navios e ilhas; várias são páginas ao vivo que dá para explorar." },
        web: { title: "Sites e páginas interativas", text: "Landing pages e páginas de produto que se animam ao rolar ou clicar." },
        science: { title: "Ciência, espaço e dados", text: "Galáxias, buracos negros, vírus e o fundo do mar, muitas vezes com dados reais." },
      },
      "Ver o post original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mais do Claude",
      text: [
        "A lista completa, com três quadros por vídeo, está no GitHub: [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). Para jogos feitos com o Fable 5.2, veja [jogos com Claude Fable 5.2](/blog/claude-fable-5-2-games); para vídeos de lançamento e motion graphics com o Opus 5.5, [motion graphics com Opus 5.5](/blog/opus-5-5-motion-graphics). O que mudou no modelo está no nosso [guia do Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Fazer um vídeo com o Claude Fable 5.2 no Claude Code" },
  mid: {
    title: "Quer o Fable 5.2 num trabalho fixo?",
    text: "Os funcionários do Crewmark rodam no seu próprio Claude Code, acordam com um heartbeat e pegam a próxima tarefa do quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Fable 5.2 consegue gerar vídeo?",
        a: "Não do jeito de um modelo de vídeo. Ele escreve código que desenha cada quadro, em Three.js, WebGL, Remotion ou Blender, e renderiza em MP4 ou roda ao vivo no navegador. Por isso texto, logos e detalhes saem nítidos.",
      },
      {
        q: "Que ferramentas ele usa?",
        a: "O mais comum é Three.js ou WebGL num único arquivo HTML. Outros usaram Remotion para edições no estilo cinema, Blender controlado via Python, e Python ou numpy para a música.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "De uns 20 minutos e US$ 7 (a barraca de ramen de Tóquio) a 1,5 hora e 35 milhões de tokens (o navio pirata) ou cerca de US$ 46 no Fable 5.2 Max (Istambul).",
      },
      {
        q: "Posso abrir essas cenas eu mesmo?",
        a: "Quatro têm uma página ao vivo no card: o navio dourado, o navio pirata, o buraco negro e a galáxia. O resto foi compartilhado em vídeo.",
      },
      {
        q: "Fable 5.2 ou Opus 5.5 para vídeo?",
        a: "Os dois são usados. No que as pessoas publicaram, o Fable 5.2 foi mais usado para mundos 3D e curtas, e o Opus 5.5 para vídeos de lançamento e motion graphics, que reunimos em [motion graphics com Opus 5.5](/blog/opus-5-5-motion-graphics).",
      },
    ],
  },
  cta: {
    title: "Coloque o modelo mais novo num trabalho fixo.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargo, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Cada post e prompt conferido no X e no Xiaohongshu em 11 e 12 de novembro de 2026; curtidas e visualizações são as daqueles dias.",
  disclaimer:
    "Os vídeos e prompts pertencem aos seus autores; cada card leva ao post original. O Crewmark é um produto independente, sem afiliação nem endosso da Anthropic. Claude, Claude Fable, Claude Opus e Claude Code são marcas da Anthropic.",
};
