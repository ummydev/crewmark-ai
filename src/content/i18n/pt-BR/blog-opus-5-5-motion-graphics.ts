import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// pt-BR translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "Claude, motion designer: um reel de 15 segundos a partir de uma frase",
    text: "Um reel de portfólio: letras de partículas, curvas de easing sob \"Timing is everything\", tipografia líquida e um encerramento laranja que soma 899 quadros, 8 cenas e 1 keyframe. A partir de uma frase em chinês.",
  },
  "pelican-riding-a-bicycle": {
    title: "Um pelicano de bicicleta, feito a sério",
    text: "Cansado dos pelicanos em SVG, o autor pediu o mais detalhado possível. O Opus 5.5 escreveu tudo no Claude Code: uma cena do Blender renderizada no Cycles, um renderizador de nuvens em Rust para um céu de 12K, cerca de 24 mil penas, uma bicicleta com 36 raios e 92 elos de corrente, e a música. Nada de modelos, texturas ou músicas prontos.",
  },
  "inference-startup-launch": {
    title: "Muda: o vídeo de lançamento de uma startup de inferência, em um minuto e por cerca de US$ 2",
    text: "\"A maior parte da inferência é espera. Não mais.\" As grades de requisições acendem conforme a vazão sobe, e então a marca aparece. Sem modelo de vídeo e sem bibliotecas extras: o Claude animou uma página web e gravou com Playwright e ffmpeg.",
  },
  "typingmind-launch": {
    title: "TypingMind: um prompt no lugar de quatro semanas com freelancers",
    text: "O Opus leu as páginas do produto, escreveu o roteiro e animou um único chat que pergunta a vários modelos ao mesmo tempo. Um prompt e quase uma hora no Claude Code, sem nenhuma skill instalada.",
  },
  "notion-launch-it-picked": {
    title: "Um vídeo de lançamento do Notion, com o produto escolhido pelo Opus",
    text: "Pediram só que escolhesse um SaaS conhecido e fizesse um vídeo de lançamento profissional: o Opus escolheu o Notion, buscou materiais reais na web e montou um vídeo caprichado de funcionalidades.",
  },
  "makermap-one-shape": {
    title: "MakerMap: uma única forma que se transforma no produto inteiro",
    text: "Vinte segundos em que uma forma vira cadastro, um pino no mapa, 3.393 makers num globo, matches e busca. As molas, o cursor e o desfoque de movimento são cálculo determinístico em um único arquivo HTML.",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook, com trilha no estilo Oppenheimer",
    text: "Dois capítulos, Fissão e Fusão: milhares de páginas douradas formam manchetes, uma contagem regressiva, uma explosão, com música que o Opus compôs a partir do tema do filme.",
  },
  "distilbook-film-strips": {
    title: "Distilbook: tiras de filme girando até virar um túnel",
    text: "Um arco-íris de tiras de filme cruza a tela e se enrola num túnel luminoso, no estilo de um vídeo de referência. A versão final não teve nenhuma edição manual.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites chega a um milhão de visitas por mês",
    text: "Um vídeo de marco com um contador que dispara até um milhão. Feito de primeira em quatro minutos, com uma só alteração.",
  },
  "famewall-mascot": {
    title: "Famewall: achou o mascote e colocou no vídeo",
    text: "Um vídeo de lançamento para uma ferramenta de depoimentos. O Opus vasculhou os SVGs do site, encontrou o mascote e o colocou no vídeo sem ninguém pedir.",
  },
  "lumail-pricing": {
    title: "Lumail: e-mail marketing que o seu agente de IA consegue operar",
    text: "Grades de contatos que nunca abrem um e-mail e uma conta que só cresce, e então a proposta. Em menos de dez minutos, sem skill, só o prompt.",
  },
  "founder-page-launch": {
    title: "founder.page: todas as funcionalidades em 20 segundos",
    text: "Um vídeo de lançamento rápido e fiel à marca, com contadores de receita e visitas. Feito de primeira no Claude Code.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI: um vídeo de lançamento para desenvolvedores",
    text: "Feito com Opus 5.5 e Remotion a partir de um briefing longo que pedia um vídeo premium digno de abrir uma keynote.",
  },
  "sahi-trading-terminal": {
    title: "Um terminal de trading que se afasta até virar um ponto no espaço",
    text: "De um único ponto a gráficos, posições e uma cadeia de opções; afasta até a área de trabalho virar um pontinho no espaço e volta para um celular. Feito de primeira.",
  },
  "aisa-one-key": {
    title: "AIsa: milhares de chaves de API viram uma só",
    text: "Um enxame de nomes de chaves se reduz a uma única chave laranja. Um prompt, de primeira.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive: streaming em 4K, entregue em qualquer lugar",
    text: "Um vídeo escuro e editorial para um serviço de entrega de arquivos: terreno em camadas, um globo de pontos luminoso, um domínio próprio. Sem skills; com som.",
  },
  "matra-apple-style": {
    title: "Matra: um vídeo no estilo Apple para um app",
    text: "Trinta segundos em Remotion e React: tipografia SF Pro, um iPhone de titânio, legendas sincronizadas palavra por palavra com uma voz real e música.",
  },
  "no-hands-labs": {
    title: "No Hands Labs: empresas que se constroem sozinhas",
    text: "Texto verde-limão sobre preto e um 95% em matriz de pontos para um estúdio de empresas tocadas por IA.",
  },
  "pen-designs-launch": {
    title: "norilu: delegue o trabalho que sempre volta",
    text: "O Opus leu os designs do autor pelo MCP do pen.dev e fez um vídeo de lançamento calmo. Um segundo prompt bem direto melhorou a música e o ritmo.",
  },
  "bento-surf": {
    title: "Bento.surf: um vídeo de produto de 40 segundos",
    text: "Um vídeo divertido e pensado para celular de uma página de links, a partir de um único prompt.",
  },
  quickemailverify: {
    title: "QuickEmailVerify: barre os bounces antes de enviar",
    text: "Um vídeo estilo SaaS para um verificador de e-mails, de digitar um endereço até uma lista limpa. Opus 5.5 com effort alto.",
  },
  "orbe-everyday-spending": {
    title: "Orbe: gastos do dia a dia em 3D isométrico",
    text: "Um vídeo vertical para um app de gastos: mercado, posto de gasolina e restaurante, cada um registrando uma compra. O autor diz que precisou de mais de um prompt.",
  },
  "winkz-pitch": {
    title: "Um vídeo de apresentação para um negócio atacadista na Amazon",
    text: "Quinze segundos para convencer marcas, com contadores de proteção de preço e compra antecipada.",
  },
  "queryglow-launch": {
    title: "QueryGlow: um vídeo de lançamento no estilo da Anthropic",
    text: "Um vídeo tranquilo, com tipografia serifada, para uma ferramenta de banco de dados auto-hospedada; o autor pediu em alemão algo \"à la Anthropic\" e no fim acrescentou música.",
  },
  "opus-1984-ad": {
    title: "Um anúncio do Opus 5.5 inspirado no \"1984\" da Apple",
    text: "Alguém correndo com um martelo, fileiras de figuras cinzentas e um rosto gigante na tela, tudo feito só com código. O Opus até conferiu os níveis de som.",
  },
  "paybox-brand-sting": {
    title: "PayBox: uma vinheta de marca a partir de um logo",
    text: "O agente leu o logo, encontrou a empresa, escreveu o roteiro e construiu uma vinheta de dez segundos em uma passada só.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm: um logo montado com fragmentos low-poly",
    text: "Um logo em wireframe é preenchido fragmento por fragmento, o ícone do app aparece e o nome é digitado, com som.",
  },
  "opus-retro-launch": {
    title: "Um vídeo de lançamento retrofuturista do Opus 5.5",
    text: "Uma cabeça de listras luminosas com granulação de filme e efeito CRT, a partir de um prompt e uma imagem de referência.",
  },
  "psychedelic-showreel": {
    title: "Phosphene: um estudo de movimento psicodélico",
    text: "Um olho gigante, túneis girando e caleidoscópios, com imagem e som do Opus em effort extra alto: 90 minutos de renderização e US$ 14 no total.",
  },
  "poster-breaks-out": {
    title: "Um pôster que rompe a própria moldura",
    text: "Letras enormes em vermelho e azul atravessam o pôster. O Opus compôs a trilha e sincronizou cada batida com o ritmo.",
  },
  "i-can": {
    title: "I CAN: desfocar, repetir, renderizar, agrupar, curvar a luz",
    text: "Cartelas em negrito que fazem exatamente o que dizem, a partir de um prompt de uma linha.",
  },
  "light-speed-earth": {
    title: "Um segundo na Terra",
    text: "Sem nenhuma orientação, o Opus escolheu o tema: tudo o que acontece em um segundo, da luz dando voltas na Terra ao nascimento de quatro bebês.",
  },
  "no-samples-showreel": {
    title: "Um showreel com música criada do zero",
    text: "O autor não entende nada de motion design. O Opus escreveu o código de cada quadro e sintetizou a música, sem samples, no Cursor.",
  },
  "easing-explained": {
    title: "I make things move: Motion Designer Claude",
    text: "Tipografia que gira e encaixa, uma aula sobre curvas de easing e um encerramento, a partir de um prompt de uma linha em chinês.",
  },
  "portfolio-film": {
    title: "O portfólio de um designer, transformado em vídeo",
    text: "O Opus passou por cada tela do portfólio do autor e pelo trabalho open source dele, e fez um reel marcante de primeira.",
  },
  "it-thinks-in-curves": {
    title: "Ritmo, tipografia, loops: ele pensa em curvas",
    text: "Loops quadrados de tipografia em blocos de cor e uma curva de Bézier desenhada ao vivo, sobre a ideia do Opus de que escreve matemática em vez de keyframes.",
  },
  "who-are-you-opus": {
    title: "Oi, eu sou o Claude: o Opus 5.5 se apresenta",
    text: "Dez segundos de tipografia: \"leio cada palavra\", \"penso bem\", \"falo direto\", \"construo com você\".",
  },
  "madhav-about-me": {
    title: "Um vídeo de dez segundos sobre quem pediu",
    text: "Quando pediram um vídeo sobre o que ele soubesse do autor, o Opus fez uma peça de partículas sobre o trabalho dele.",
  },
  "recursion-nine-styles": {
    title: "Recursão explicada em nove gêneros",
    text: "Cada explicação muda para um estilo diferente, de um videogame retrô ao filme noir. De primeira mesmo: cenas em React e SVG, música e som sintetizados em Python.",
  },
  "negroni-recipe": {
    title: "Um Negroni, passo a passo",
    text: "Uma receita animada que enche o copo ingrediente por ingrediente, renderizada em HTML a partir de uma única imagem.",
  },
  "history-of-ai": {
    title: "83 anos de IA em menos de três minutos",
    text: "Pesquisa, roteiro, animação e sons reais gravados: todos os 5.160 quadros foram programados pelo Claude a partir de um único prompt.",
  },
  "how-llms-work-fable": {
    title: "Como os LLMs funcionam, em motion graphics",
    text: "Tokens, embeddings, atenção e camadas do transformer, cada um em sua cena, do teste do Fable 5.2 feito por Matthew Berman.",
  },
  "white-russian-recipe": {
    title: "Um White Russian em estilo desenhado à mão",
    text: "Com um esboço e um prompt, um MP4 em 1080p cerca de 25 minutos depois: um arquivo HTML de SVG e JavaScript puro, sem biblioteca de animação.",
  },
};

const labels: MotionLabels = {
  likes: "curtidas",
  views: "visualizações",
  prompt: "Ver o prompt (original)",
  alt: (title) => `Quadro do vídeo: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Motion graphics com Opus 5.5: 43 exemplos e seus prompts",
    description:
      "Vídeos de motion graphics feitos com o Claude Opus 5.5: vídeos de lançamento, animações de logo, tipografia cinética e explicações, cada um com o prompt do autor, curtidas e visualizações. Mais o prompt que todo mundo copiou e como fazer um no Claude Code.",
  },
  breadcrumb: "Motion graphics com Opus 5.5",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Opus 5.5",
    title: "Motion graphics com Opus 5.5: 43 exemplos e os prompts por trás deles",
    lead: "Desde o lançamento do Claude Opus 5.5, muita gente pede motion graphics a ele e publica o resultado: vídeos de lançamento, animações de logo, tipografia cinética, receitas explicadas. O Opus escreve cada um como código e renderiza em MP4. Assistimos a todos e ficamos com os 43 melhores, cada um com o prompt do autor.",
    cta: "Começar",
    secondary: "Ver os exemplos",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Como o Claude faz um vídeo de motion graphics",
      text: [
        "Nenhum modelo de vídeo entra em cena. O Opus escreve a animação como código (uma página HTML com SVG e JavaScript, um projeto em React ou [Remotion](https://www.remotion.dev), às vezes Three.js), percorre um navegador headless quadro a quadro e manda os quadros para o ffmpeg. Música e efeitos sonoros também são sintetizados em código.",
        "Como cada quadro é uma função do tempo, os loops fecham perfeitamente e o som cai no quadro exato. E o texto sai nítido e real: nomes de produto, preços e textos de interface escritos certinho.",
      ],
      points: [
        "O vídeo de lançamento de Deedy Das usou só JavaScript, Playwright e ffmpeg, e custou cerca de US$ 2 de API.",
        "O vídeo de Ethan Mollick sobre recursão desenhou cada cena em React e SVG e sintetizou a música em Python.",
        "A receita animada de Sarutobi Sasuke é um arquivo HTML de SVG e JavaScript puro, sem biblioteca de animação, pronta em uns 25 minutos.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Como fazer um no Claude Code",
      steps: [
        {
          title: "Abra o Claude Code com o Opus 5.5 numa pasta vazia",
          text: "Vários autores disseram que não instalaram skills nem plugins: o Opus escolhe as próprias ferramentas e instala o que precisar.",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "Passe o prompt e o seu produto",
          text: "Inclua o seu site para ele ler as páginas e escrever o roteiro. Um logo, uma captura de tela ou um vídeo de referência ajudam a acertar o seu visual.",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "Deixe renderizar",
          text: "Conte com alguns minutos até uma hora e meia, dependendo da duração e do effort. Peça para ele avisar onde salvou o MP4.",
        },
        {
          title: "Assista e diga o que está errado",
          text: "A primeira versão de Sacha Arbonel estava rápida demais e a música era fraca; uma segunda mensagem bem direta melhorou muito. Peça um ritmo mais lento, uma música livre de direitos ou outro formato.",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "O prompt que todo mundo copiou",
      text: [`Muitos dos vídeos abaixo partem do mesmo prompt curto que circulou no X: \`${basePrompt}\`. O que os autores acrescentaram:`],
      points: [
        "Seu produto ou site: \"for <sua url>\", ou \"visite as páginas primeiro para entender o produto e depois escreva você mesmo o conteúdo do vídeo\".",
        "Uma referência: \"como se fosse o seu showreel\", \"capriche ao máximo (go all out)\", \"um vídeo de lançamento premium para desenvolvedores\", \"no estilo Apple\".",
        "Um clima ou um som: \"psicodélico e hipnótico\", ou \"inspire-se na música de Oppenheimer, mas componha você\".",
        "Um limite: \"evite molduras e textinhos nos cantos, que entregam que foi feito por IA\".",
        "Material de referência: um logo, uma imagem, um esboço à mão ou outro vídeo para imitar.",
      ],
    },
    ...motionSections(
      "pt-BR",
      text,
      labels,
      {
        launch: { title: "Vídeos de lançamento de produto", text: "Lançamentos, marcos e apresentações de produtos reais, quase todos com um único prompt." },
        brand: { title: "Animações de logo e vídeos de marca", text: "Vinhetas e anúncios feitos a partir de um logo, de uma imagem de referência ou de um anúncio famoso." },
        showreel: { title: "Showreels e tipografia cinética", text: "O Opus se exibindo como motion designer: tipografia, loops e movimento puro." },
        explainer: { title: "Vídeos explicativos", text: "Receitas, história e computação, explicadas em movimento." },
      },
      "Ver o post original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mais vídeos",
      text: [
        "A lista completa, com três quadros por vídeo e todos os prompts, está no GitHub: [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
        "Para mundos 3D e curtas feitos com o modelo mais novo do Claude, veja a [coleção de vídeos do Claude Fable 5.2 no GitHub](https://github.com/ummydev/awesome-claude-fable-videos), e o nosso [guia do Claude Fable 5.2](/blog/claude-fable-5-2) para saber o que mudou e como ele se compara ao Opus 5.5.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Fazer um vídeo de motion graphics com o Claude Opus 5.5 no Claude Code" },
  mid: {
    title: "Quer um vídeo de lançamento a cada release?",
    text: "Um funcionário do Crewmark roda no seu próprio Claude Code: passe as notas da versão e ele renderiza o vídeo enquanto você cuida do lançamento.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Opus 5.5 consegue fazer vídeos?",
        a: "Sim, escrevendo código. Ele monta a animação como uma página web ou um projeto Remotion e renderiza quadro a quadro em MP4, com música que ele mesmo sintetiza. Ele não gera imagens como um modelo de vídeo, por isso texto, números e interface saem nítidos.",
      },
      {
        q: "Preciso de uma skill, do Remotion ou do After Effects?",
        a: "Não. Vários autores disseram que usaram o Claude Code puro, sem skills: o Opus escolheu as ferramentas, normalmente Playwright ou Chrome headless com ffmpeg, às vezes Remotion.",
      },
      {
        q: "Quanto tempo leva e quanto custa?",
        a: "De cerca de um minuto e US$ 2 (Deedy Das) a uma hora e meia de renderização e US$ 14 com effort extra alto (monokern). A maioria relatou um prompt e de alguns minutos a uma hora.",
      },
      {
        q: "De onde vem a música?",
        a: "Em geral o Opus compõe e sintetiza em código, em Python ou JavaScript, e encaixa as batidas nos cortes. Alguns autores pediram para usar uma música livre de direitos.",
      },
      {
        q: "Posso usar esses prompts?",
        a: "Os prompts são dos próprios autores, citados dos posts deles. Teste com o seu produto; os vídeos pertencem a quem os fez.",
      },
    ],
  },
  cta: {
    title: "Entregue o vídeo a um funcionário de IA.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargo, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Curtidas, visualizações e prompts conferidos em cada post original no X ou no Xiaohongshu em 12 de novembro de 2026.",
  disclaimer:
    "Os vídeos e prompts pertencem aos seus autores; cada card leva ao post original. O Crewmark é um produto independente, sem afiliação nem endosso da Anthropic. Claude, Claude Opus, Claude Fable e Claude Code são marcas da Anthropic.",
};
