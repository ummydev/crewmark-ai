import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/meta-muse-use-cases; the English master is
// src/content/personal-agents/meta-muse-use-cases.ts.

const daily = `Todo dia útil às 7h, me mande um resumo: minha agenda de hoje,
os três e-mails que precisam de mim primeiro e o que vence esta semana.

Toda sexta às 16h, liste o que eu disse que faria esta semana e não está feito,
e escreva os e-mails de acompanhamento para eu aprovar.`;

const marketing = `Toda segunda às 9h, confira as páginas de preços do [concorrente 1],
do [concorrente 2] e do [concorrente 3]. Me diga o que mudou desde a semana passada,
com links, e salve um relatório curto na minha Library.

Pesquise as perguntas que as pessoas fazem sobre [seu tema] em fóruns e nos
resultados de busca. Agrupe em 10 ideias de artigo, cada uma com um título provisório.

Escreva três versões de um e-mail de lançamento para [produto] com a minha voz,
usando as anotações deste arquivo. Não envie nada.`;

const money = `Descubra quanto vale o meu Honda Civic 2019 com 60.000 milhas,
escreva o anúncio e me diga quais propostas valem a pena responder.

Olhe as minhas últimas três contas de internet, encontre um plano mais barato da minha operadora
ou de um concorrente e escreva o e-mail pedindo que igualem a oferta.`;

export const copy: GuideCopy = {
  meta: {
    title: "Casos de uso do Meta Muse: prompts, rotinas e ideias",
    description:
      "Para que usar o Meta Muse, com prompts que você pode copiar: rotinas diárias e tarefas recorrentes, pesquisa de marketing e SEO, burocracias de pequenas empresas, economizar dinheiro, viagens e tarefas do dia a dia, além de dicas e do que o Muse não faz.",
  },
  breadcrumb: "Casos de uso do Meta Muse",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Meta Muse",
    title: "Casos de uso do Meta Muse: o que entregar a ele, com prompts para copiar",
    lead: "O Muse, o agente pessoal da Meta, faz mais do que responder: ele envia e-mails, reserva viagens, preenche formulários, compra coisas com a sua aprovação, cria arquivos e roda tarefas recorrentes com o app fechado. O difícil é saber o que pedir. Estes são os casos de uso que a própria Meta aponta e os que funcionam melhor para uma rotina diária, pesquisa de marketing e burocracias de pequenas empresas, cada um com um prompt para começar, além do que o Muse não foi feito para fazer.",
    cta: "Começar",
    secondary: "Rotinas diárias",
    secondaryHref: "#daily",
  },
  sections: [
    {
      kind: "text",
      title: "No que o Muse é bom",
      text: [
        "Os exemplos da própria Meta são pessoais e práticos: vender um carro por mais, baixar uma conta, ajustar um plano de treino, transformar um reel de receita salvo em uma lista de compras, planejar um jantar em torno das restrições alimentares dos amigos. Eles têm três coisas em comum, e os melhores casos de uso também.",
      ],
      points: [
        "Um objetivo, não uma resposta única: o Muse transforma o objetivo em um plano e continua trabalhando nele em segundo plano.",
        "Trabalho na web e nos seus apps: e-mail, formulários, reservas e checkout, a partir do próprio navegador na nuvem.",
        "Um ponto em que você decide: ele volta para pedir aprovação antes de enviar ou comprar, então você continua no comando de tudo o que importa.",
      ],
    },
    {
      kind: "steps",
      id: "daily",
      title: "Rotinas diárias com o Muse",
      text: [
        "O Muse roda tarefas recorrentes que você cria pedindo. A Central de Ajuda da Meta diz que elas se repetem até você cancelar, seguem o seu fuso horário e chegam como mensagens na sua conversa.",
      ],
      steps: [
        {
          title: "Crie a rotina em uma mensagem",
          text: "Diga o que fazer, com que frequência e quando, e o que você quer receber. O Muse confirma o agendamento antes de salvar.",
          code: daily,
        },
        {
          title: "Confira o que está agendado",
          text: "Pergunte “Quais lembretes eu tenho?” ou toque no ícone Assistant no topo e abra Upcoming.",
        },
        {
          title: "Ajuste no caminho",
          text: "Diga ao Muse qual tarefa mudar, mover ou cancelar, por exemplo “Passe a minha revisão de sexta para quinta às 15h”.",
        },
      ],
    },
    {
      kind: "steps",
      id: "marketing",
      title: "Meta Muse para marketing e SEO",
      text: [
        "O Muse é um agente pessoal, não uma plataforma de marketing, mas pesquisa e primeiros rascunhos combinam bem com ele: ele pode navegar, comparar, resumir e salvar arquivos na sua Library, com agendamento se você quiser. Mantenha a publicação nas suas mãos.",
      ],
      steps: [
        {
          title: "Acompanhe concorrentes toda semana",
          text: "Passe as páginas a conferir e o dia de fazer isso; peça o que mudou, com links.",
          code: marketing,
        },
        {
          title: "Transforme perguntas em ideias de conteúdo",
          text: "Peça para ele juntar as perguntas que as pessoas fazem sobre o seu tema e agrupá-las em ideias de artigo. Confira as ideias em uma ferramenta de palavras-chave antes de escrever; o Muse não mostra volume de busca.",
        },
        {
          title: "Rascunhe e depois aprove",
          text: "Peça rascunhos de e-mails, posts ou briefs a partir das suas anotações, com a sua voz, e não deixe nada ser enviado sem você. A Meta não diz que o Muse pode publicar em redes sociais por você.",
        },
      ],
    },
    {
      kind: "text",
      id: "small-business",
      title: "Meta Muse para uma pequena empresa",
      points: [
        "Triagem da caixa de entrada: uma lista pela manhã do que precisa de você, com rascunhos para o resto. Para o e-mail, você escolhe somente leitura ou leitura e envio.",
        "Checagem de fornecedores e preços: comparar orçamentos, acompanhar um preço e avisar quando ele cair.",
        "Formulários e reservas: preencher inscrições, cadastros e reservas, e parar antes de enviar se você pedir.",
        "Compras: o Muse paga pelo Link, da Stripe, com um cartão de uso único, e pergunta antes de comprar.",
        "Documentos: briefs, tabelas comparativas e relatórios salvos na aba Library.",
        "Lembre que é uma ferramenta de conta pessoal: a conta da Meta de uma pessoa, não um espaço de trabalho compartilhado por uma equipe.",
      ],
    },
    {
      kind: "steps",
      id: "money",
      title: "Economize dinheiro (ou ganhe algum) com o Muse",
      text: [
        "Dois dos exemplos de lançamento da Meta são sobre dinheiro: vender um carro por mais e baixar uma conta. Os dois funcionam porque o Muse consegue pesquisar, rascunhar e negociar, e confere com você antes de fechar qualquer coisa.",
      ],
      steps: [
        {
          title: "Venda algo por mais",
          text: "Peça para ele precificar o item, escrever o anúncio e organizar as propostas.",
          code: money,
        },
        {
          title: "Baixe uma conta",
          text: "Passe o seu plano atual e peça para ele encontrar um melhor e escrever o pedido.",
        },
        {
          title: "Acompanhe preços",
          text: "Peça para ele conferir o preço de um produto, voo ou hotel com agendamento e avisar quando cair abaixo de um valor.",
        },
      ],
    },
    {
      kind: "table",
      id: "more",
      title: "Mais casos de uso do Meta Muse",
      headers: ["Caso de uso", "Experimente pedir"],
      rows: [
        ["Viagem", "“Encontre três opções de voo e hotel para [datas] e não reserve até eu escolher uma.”"],
        ["Tarefas do dia a dia", "“Transforme este reel de receita salvo em uma lista de compras para quatro pessoas.”"],
        ["Eventos", "“Planeje um jantar para seis no sábado; lembre que o Sam é vegetariano; escreva os convites.”"],
        ["Saúde e exercícios", "“Ajuste o meu plano de corrida; só consigo treinar três dias por semana este mês.”"],
        ["Casa", "“Encontre um encanador perto de mim, com boas avaliações, que possa vir esta semana, e escreva a mensagem.”"],
        ["Aprendizado", "“Toda noite às 20h, me teste com cinco frases em espanhol desta semana.”"],
      ],
    },
    {
      kind: "text",
      id: "tips",
      title: "Dicas para resultados melhores",
      points: [
        "Descreva o resultado e os limites (orçamento, datas, o que não fazer), não cada passo.",
        "Diga onde ele deve parar: “rascunhe mas não envie”, “compare mas não reserve”.",
        "Mencione preferências uma vez; o Muse lembra delas entre conversas, e você pode pedir que ele esqueça.",
        "Conecte só os apps de que uma tarefa precisa e escolha e-mail somente leitura quando rascunhos bastarem.",
        "Fique de olho no limite semanal: pesquisas longas gastam mais tokens. O Power ($20 por mês) tem 500M de tokens por semana.",
        "Confira o histórico do que ele fez e pretende fazer; a Meta avisa que ele pode ser impreciso ou tomar ações inesperadas.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Quando marketing é um trabalho, não uma tarefa avulsa",
      text: [
        "Uma checagem semanal de concorrentes é uma tarefa avulsa. Aumentar o tráfego de busca é um trabalho: pesquisa de palavras-chave, páginas, indexação e um relatório contra uma meta, todo dia. O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA para esse tipo de trabalho, com um cargo, uma meta em números, horário de trabalho e um heartbeat.",
      ],
      steps: [
        {
          title: "Contrate um cargo de marketing",
          text: "Comece pelo [especialista em SEO com IA](/ai-employees/seo-specialist) ou pelo [agente de marketing com IA](/ai-employees/marketing-agent); cada um vem com um brief, uma meta e uma rotina diária.",
        },
        {
          title: "Dê a ele as skills",
          text: "As nossas [skills de marketing](/skills) open source são o que o nosso próprio agente de SEO roda todo dia.",
        },
        {
          title: "Leia o relatório diário",
          text: "Ele acorda com um heartbeat, trabalha por um quadro e manda mensagem quando precisa de uma decisão. Veja o [guia do Meta Muse](/personal-agent/meta-muse) para o lado pessoal.",
        },
      ],
    },
  ],
  howTo: { section: "daily", name: "Criar uma rotina diária no Meta Muse" },
  mid: {
    title: "Quer marketing feito todo dia, e não só pesquisado?",
    text: "Os funcionários de IA de SEO e marketing do Crewmark trabalham por um quadro com um heartbeat e prestam contas.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Para que o Meta Muse serve melhor?",
        a: "Objetivos que exigem vários passos na web e nos seus apps, com um ponto em que você decide: vender algo, baixar uma conta, planejar uma viagem ou um evento, fazer a triagem de e-mails e checagens recorrentes, como um resumo diário ou o acompanhamento semanal de um preço.",
      },
      {
        q: "O Meta Muse consegue rodar uma tarefa todo dia?",
        a: "Sim. Peça uma tarefa recorrente com o horário, como “Todo dia útil às 7h, me mande um resumo”. Ela se repete até você cancelar, e você a encontra no ícone Assistant, em Upcoming.",
      },
      {
        q: "Dá para usar o Meta Muse para marketing ou SEO?",
        a: "Para pesquisa e rascunhos, sim: checagem de concorrentes, ideias de conteúdo, rascunhos de e-mails e posts, salvos como arquivos. Ele não mostra volume de busca, e a Meta não diz que ele pode publicar em redes sociais, então a publicação fica com você.",
      },
      {
        q: "O Meta Muse é bom para uma pequena empresa?",
        a: "Para as burocracias de uma pessoa, como triagem da caixa de entrada, orçamentos, formulários, reservas e compras com aprovação. Ele roda em uma conta pessoal da Meta, não em um espaço de trabalho compartilhado por uma equipe.",
      },
      {
        q: "O Meta Muse pode me fazer ganhar dinheiro?",
        a: "Ele pode ajudar: os próprios exemplos da Meta incluem vender um carro por mais e baixar uma conta. Ele pesquisa, rascunha e negocia, e confere com você antes de fechar qualquer coisa.",
      },
      {
        q: "Quais são bons prompts para o Meta Muse?",
        a: "Os que dizem o resultado, os limites e onde parar, como “Encontre três voos por menos de $400 para estas datas e me pergunte antes de reservar”. Os prompts desta página são um ponto de partida.",
      },
    ],
  },
  cta: {
    title: "Tarefas avulsas para o Muse. Um trabalho para um funcionário de IA.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no anúncio do Muse pela Meta e em artigos da Central de Ajuda da Meta em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Meta e sem endosso dela. Muse e Meta são marcas da Meta. Os prompts desta página são exemplos do Crewmark, não da Meta.",
};
