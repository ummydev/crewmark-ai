import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/meta-muse; the English master is
// src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `Todo dia útil às 7h, me mande um resumo curto: a agenda de hoje,
o que estiver urgente na minha caixa de entrada e a previsão do tempo.

Encontre três voos para Chicago no primeiro fim de semana de dezembro por menos de $400,
compare os três e me pergunte antes de reservar qualquer coisa.

Quero vender meu carro. Pesquise quanto ele vale, escreva o anúncio
e me diga quais propostas valem a pena responder.`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse: o que é, como usar e preços",
    description:
      "O agente pessoal de IA Muse, da Meta, explicado: o que ele faz, como conseguir e usar, os planos Free, Power ($20) e Maximum ($100), tarefas agendadas, apps conectados e pagamentos, configurações de privacidade e como ele se compara.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Meta Muse",
    title: "Meta Muse: o que o agente pessoal da Meta faz, como usar e quanto custa",
    lead: "O Muse é o agente pessoal de IA da Meta, lançado nos EUA em 8 de setembro de 2026. Segundo a Meta, ele “não só responde perguntas, ele faz o trabalho de verdade”: envia e-mails, reserva viagens, preenche formulários e negocia por você, continua trabalhando depois que você fecha o app e pergunta antes de qualquer coisa importante, como enviar um e-mail ou comprar algo. Este guia mostra como conseguir o Muse, como usá-lo, os planos e limites de tokens, as tarefas agendadas, as configurações de privacidade e como ele se compara ao Grok Bot, ao ChatGPT dots e ao Claude.",
    cta: "Começar",
    secondary: "Como usar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Meta Muse",
      text: [
        "O Muse roda no Muse Spark, o modelo da Meta, dentro de uma máquina na nuvem dedicada que a Meta chama de Muse Secure VM. Ele transforma objetivos em planos e trabalha neles em segundo plano, voltando quando algo muda ou quando precisa da sua aprovação.",
      ],
      points: [
        "Ele age: envia e-mails, reserva viagens, abre um navegador, preenche formulários e negocia. Os exemplos da Meta incluem vender um carro por mais, baixar uma conta e ajustar um plano de treino.",
        "Ele lembra: o que importa para você, a partir de detalhes que você menciona uma vez, e dá sugestões sem que você peça, como transformar um reel de receita salvo no Instagram em uma lista de compras.",
        "Ele compra com segurança: o pagamento passa pelo Link, da Stripe, cuja carteira para agentes cria um cartão de uso único, então o Muse nunca vê o número real do seu cartão.",
        "Ele está onde você está: no app Muse, na web em muse.ai e no WhatsApp; os óculos com IA da Meta vêm a seguir.",
        "Ele não é o mesmo que a Meta AI, o assistente do Facebook, Instagram e WhatsApp, nem o Muse Code, o produto da Meta para desenvolvedores.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços do Meta Muse: Free, Power e Maximum",
      text: [
        "Segundo a Central de Ajuda da Meta em 10 de novembro de 2026. O Muse e as assinaturas estão em testes limitados e ainda não estão disponíveis em todos os lugares.",
      ],
      headers: ["Plano", "Preço", "Uso semanal"],
      rows: [
        ["Free", "$0", "Um limite de uso semanal gratuito (a Meta não divulga o tamanho); espere zerar ou faça upgrade"],
        ["Power", "$20 por mês", "500M de tokens do Muse por semana"],
        ["Maximum", "$100 por mês", "3B de tokens do Muse por semana"],
        ["Tokens extras", "Vendidos à parte", "Compre mais além da sua cota semanal"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como conseguir e usar o Meta Muse",
      text: [
        "Você precisa ter 18 anos ou a maioridade do lugar onde mora, estar em um lugar onde o Muse esteja disponível (ele foi lançado nos EUA) e entrar com uma conta da Meta. Dá para criar uma com o Facebook, o Instagram, um endereço de e-mail ou um número de telefone.",
      ],
      steps: [
        {
          title: "Baixe o app ou abra o muse.ai",
          text: "Baixe o app Muse no iOS ou no Android, ou entre em muse.ai. A Meta não lista um app para Windows ou Mac, então no computador use o muse.ai no navegador.",
        },
        {
          title: "Diga do que você precisa",
          text: "O Muse abre na aba Chat. Descreva o resultado, não os passos; ele pode fazer algumas perguntas antes. Você pode mandar mensagens de acompanhamento sem esperar e sem repetir o contexto.",
          code: prompts,
        },
        {
          title: "Conecte os apps de que ele precisa",
          text: "Escolha quais apps o Muse pode usar e quanto acesso cada um recebe; para o e-mail, somente leitura ou leitura e envio. Em breve: Shop Pay no checkout e 1Password para ele usar os seus logins existentes.",
        },
        {
          title: "Aprove, revise e encontre os seus arquivos",
          text: "O Muse pergunta antes de ações sensíveis, como enviar um e-mail ou fazer uma compra, e mantém um histórico do que fez e do que pretende fazer. Os arquivos que ele cria ficam salvos na aba Library.",
        },
      ],
      source: { label: "Fonte: anúncio do Muse pela Meta", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Lembretes e tarefas agendadas no Muse",
      text: [
        "O Muse não tem uma tela de agendamento separada: você cria lembretes e tarefas recorrentes pedindo, e a Central de Ajuda da Meta explica como eles funcionam.",
      ],
      points: [
        "Únicos: diga ao Muse do que lembrar você e quando; ele confirma o horário exato.",
        "Recorrentes: descreva a tarefa e a frequência, por exemplo “Toda segunda às 9h, me lembre de enviar minha folha de horas”. Ela roda até você cancelar, e o Muse manda mensagem a cada vez.",
        "Para encontrá-los: pergunte “Quais lembretes eu tenho?”, ou toque no ícone Assistant no topo e abra Upcoming.",
        "Para mudar ou cancelar: diga qual e o que mudar, como passar um lembrete de segunda para terça.",
        "Os horários seguem o seu fuso; se você escolher um horário que já passou, o Muse sugere outro.",
        "Mais ideias de rotinas diárias estão em [casos de uso do Meta Muse](/personal-agent/meta-muse-use-cases).",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "Privacidade: como desativar e o que a Meta pode ver",
      points: [
        "O Muse de cada pessoa roda na própria Muse Secure VM; os agentes de outras pessoas não conseguem acessá-la.",
        "Um agente separado, o Sentinel, precisa aprovar tudo o que o Muse manda para a internet e pergunta a você quando necessário.",
        "O Muse não vê suas senhas nem seus meios de pagamento; logins compartilhados vão para um armazenamento seguro.",
        "Suas conversas e os dados da VM não são compartilhados com os sistemas de anúncios da Meta.",
        "Você pode impedir que suas interações sejam usadas para treinar a IA da Meta, mudar ou desconectar qualquer app e pedir ao Muse que esqueça algo.",
        "A Meta planeja uma Muse Confidential VM ainda este ano, criptografada com uma chave que só você tem.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "O Meta Muse não está disponível ou não funciona?",
      points: [
        "Fora dos EUA: o Muse foi lançado nos EUA e está em testes limitados em outros lugares; a Meta diz que ele ainda não está disponível em todos os locais.",
        "Menor de 18: você precisa ter 18 anos ou a maioridade do seu país.",
        "Bateu no limite gratuito: espere o limite semanal zerar, faça upgrade para Power ou Maximum ou compre tokens extras.",
        "Sem modo de voz: a voz só está disponível em alguns países e precisa de acesso ao microfone, que você muda em Settings > Voice and Avatar.",
        "Ele fez algo inesperado: a Meta avisa que o Muse pode ser impreciso ou tomar ações inesperadas, então mantenha as aprovações ligadas para envios e compras e confira o histórico.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs Grok Bot, ChatGPT dots e Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Feito por", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["Feito para", "Tarefas do dia a dia e burocracias da vida", "Trabalho: equipes de Bots nos seus apps", "Objetivos de longa duração dentro do ChatGPT", "Um Claude proativo que vem conferir com você"],
        ["Forma mais barata de entrar", "Grátis com limite semanal", "Crédito de teste grátis; X Premium ou acima", "ChatGPT Pro", "Claude Pro, por lista de espera"],
        ["Agendamentos", "Lembretes e tarefas recorrentes", "Rotinas com agendamento, Slack, e-mail e webhooks", "Lembretes agendados e checagens recorrentes", "Vem até você com o que precisa de atenção"],
        ["Guia", "Esta página", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Muse cuida das suas tarefas. Quem cuida do seu backlog?",
      text: [
        "O Muse foi feito para as burocracias da vida. Se o trabalho que você quer delegar está em um repositório de código ou em um plano de marketing, o Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, que pega a próxima issue de um quadro e manda mensagem quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece por um [cargo de funcionário de IA](/ai-employees), como especialista em SEO ou gerente de redes sociais.",
        },
        {
          title: "Dê a ele horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você definir. Veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Compare agentes pessoais",
          text: "Veja [agentes pessoais de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Começar a usar o Meta Muse" },
  mid: {
    title: "Quer um agente que dê conta do backlog do seu trabalho?",
    text: "Os funcionários do Crewmark acordam com um heartbeat e pegam a próxima issue de um quadro, no plano do Claude Code ou do Codex que você tem.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é o Meta Muse?",
        a: "O agente pessoal de IA da Meta, lançado nos EUA em 8 de setembro de 2026 e movido pelo modelo Muse Spark. Ele envia e-mails, reserva viagens, preenche formulários e faz compras por você a partir da própria máquina na nuvem, e pergunta antes de ações sensíveis.",
      },
      {
        q: "O Meta Muse é grátis?",
        a: "Sim, com um limite de uso semanal. O Power custa $20 por mês por 500M de tokens do Muse por semana e o Maximum custa $100 por mês por 3B, e dá para comprar tokens extras.",
      },
      {
        q: "Como consigo o Meta Muse?",
        a: "Baixe o app Muse no iOS ou no Android ou acesse muse.ai e entre com uma conta da Meta. Você precisa ter 18 anos ou a maioridade e estar em um lugar onde o Muse esteja disponível; ele foi lançado nos EUA.",
      },
      {
        q: "Dá para usar o Meta Muse no Windows ou no Mac?",
        a: "A Meta lista os apps de iOS e Android e o muse.ai. Em um PC com Windows ou em um Mac, use o muse.ai no navegador.",
      },
      {
        q: "O Muse faz tarefas com agendamento?",
        a: "Sim. Peça uma tarefa recorrente, como “Toda segunda às 9h, me lembre de enviar minha folha de horas”; ela roda até você cancelar, e você a encontra no ícone Assistant, em Upcoming.",
      },
      {
        q: "A Meta usa minhas conversas com o Muse para anúncios?",
        a: "A Meta diz que as conversas e os dados da VM não são compartilhados com os sistemas de anúncios dela. Você também pode impedir que suas interações sejam usadas para treinar os modelos de IA da Meta.",
      },
    ],
  },
  cta: {
    title: "Agentes pessoais cuidam de tarefas. Funcionários de IA cuidam do seu backlog.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no anúncio do Muse pela Meta e em artigos da Central de Ajuda da Meta em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Meta, a xAI, a OpenAI ou a Anthropic e sem endosso delas. Muse, Meta e WhatsApp são marcas da Meta.",
};
