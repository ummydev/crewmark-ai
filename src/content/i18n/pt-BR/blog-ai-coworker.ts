import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts (the `en` value of aiCoworker).

export const copy: GuideCopy = {
  meta: {
    title: "Colegas de trabalho de IA: Claude Cowork, Copilot, ChatGPT Work",
    description:
      "Comparamos Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot e opções open source como o OpenWorker, de Andrew Ng.",
  },
  breadcrumb: "Colegas de trabalho de IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Colegas de trabalho de IA",
    title: "Colegas de trabalho de IA comparados: o que cada um faz, quanto custa e o que pergunta antes de agir",
    lead: "Um colega de trabalho de IA é um agente para quem você entrega uma tarefa inteira. Ele trabalha nos seus arquivos, apps e navegador, continua em segundo plano e confirma com você antes de qualquer coisa arriscada. Em 2026, Anthropic, Microsoft, OpenAI, Google, Meta e xAI têm cada uma o seu, e há opções open source no GitHub, incluindo o OpenWorker, de Andrew Ng. Veja o que cada um faz, quem pode usar, quanto custa e onde roda, segundo as páginas de cada fornecedor.",
    cta: "Começar",
    secondary: "Ver a tabela",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "O que é um colega de trabalho de IA?",
      text: [
        "Um chatbot responde. Um colega de trabalho de IA pega uma tarefa com um resultado claro, como um relatório, uma apresentação, uma planilha preenchida ou uma caixa de entrada zerada, e executa as etapas sozinho. Os produtos variam bastante, mas têm quatro coisas em comum:",
      ],
      points: [
        "Trabalha onde o seu trabalho está: arquivos, e-mail, agenda, apps conectados e um navegador.",
        "Continua sem você: em um computador na nuvem ou na sua própria máquina enquanto um app fica aberto.",
        "Pode repetir: a maioria roda tarefas com agendamento ou quando algo acontece, como a chegada de um e-mail novo.",
        "Pergunta antes: enviar, publicar, comprar e excluir esperam a sua aprovação.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Colegas de trabalho de IA lado a lado",
      text: [
        "Dados do site, da página de preços, da documentação ou do GitHub de cada fornecedor, conferidos em 13 de novembro de 2026. Preços em dólares americanos. Não é um ranking.",
      ],
      headers: ["Colega de trabalho de IA", "Feito por", "Quem pode usar", "Preço a partir de", "Onde roda"],
      rows: [
        ["Claude Cowork", "Anthropic", "Planos pagos do Claude, não o Free", "Claude Pro, $20/mês", "Nuvem da Anthropic; arquivos locais e navegador pelo app para desktop"],
        ["Copilot Cowork", "Microsoft", "Contas corporativas ou de estudante com licença do Microsoft 365 Copilot; contas pessoais em prévia", "Copilot Credits a $0.01 cada, além da licença", "Nuvem da Microsoft, com os seus arquivos do OneDrive e do SharePoint"],
        ["ChatGPT Work", "OpenAI", "Planos do ChatGPT; limitado no Free e no Go, no app para desktop", "Acesso completo a partir do ChatGPT Plus, $20/mês", "Nuvem da OpenAI ou o seu computador pelo app para desktop"],
        ["Tarefas do Gemini (antes Spark)", "Google", "Google AI Pro ou Ultra, adultos com conta pessoal; não disponível no EEE, na Suíça, no Reino Unido nem na Nigéria", "Google AI Pro, $19.99/mês (EUA)", "Nuvem do Google"],
        ["Meta Muse", "Meta", "EUA e Canadá, maiores de 18 anos; Singapura desde 27 de outubro", "Grátis para a maioria dos usos; há assinaturas", "Um computador na nuvem por usuário"],
        ["Grok Bot", "xAI", "Planos Premium, Super, Ultra, Teams e Enterprise", "Premium, $30/mês", "Um computador na nuvem por Bot; Slack, Teams e chamadas"],
        ["Lindy", "Lindy", "Qualquer pessoa; teste grátis", "$29.99/mês por usuário ativo", "Nuvem da Lindy; Slack, e-mail, iMessage, telefone"],
        ["OpenWorker (open source)", "Andrew Ng", "Qualquer pessoa; app para desktop em beta aberto", "Grátis; a sua própria chave de modelo ou um modelo local", "O seu computador (macOS, Windows)"],
        ["OpenBot (open source)", "CopilotKit", "Qualquer pessoa", "Grátis para projetos pessoais; Business até $29/usuário/mês", "O seu notebook ou o seu cluster Kubernetes"],
        ["Suparagent (open source)", "Anil-matcha no GitHub", "Qualquer pessoa", "Grátis para auto-hospedar; versão hospedada a partir de $15/mês", "App para desktop, o seu servidor ou hospedado"],
        ["Crewmark", "Crewmark", "Qualquer pessoa", "Grátis: 1 projeto, até 3 funcionários de IA", "O seu computador, dentro do seu Claude Code ou Codex"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "Guias de cada colega de trabalho de IA",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork): planos, configuração, modos de aprovação e Cowork vs Claude Code.",
        "[Copilot Cowork](/personal-agent/copilot-cowork): licenciamento, Copilot Credits e configuração no Microsoft 365.",
        "[ChatGPT Work](/personal-agent/chatgpt-work): o que o modo Work faz, quais planos o incluem e como ele se relaciona com o Codex.",
        "[Cursor Projects](/personal-agent/cursor-projects): o agente coordenador do Cursor para trabalhos de programação maiores.",
        "[Lindy](/personal-agent/lindy): preços em créditos e como configurar.",
        "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot) e [Suparagent](/personal-agent/suparagent): os open source, com a configuração a partir do GitHub.",
        "Lado a lado: [todas as comparações](/compare), como [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) e [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio).",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "Os colegas de trabalho de IA dos grandes laboratórios",
      points: [
        "Claude Cowork (Anthropic): trabalho que não é de programação nos apps do Claude, como pesquisa, documentos, planilhas, apresentações e trabalho com arquivos. As tarefas rodam na nuvem e continuam com o notebook fechado; você pode agendá-las a cada hora, diariamente ou semanalmente com `/schedule`. Ele pergunta antes de agir no modo Manual ou faz uma revisão de segurança de cada ação no modo Auto. Só nos planos pagos, a partir do Pro por $20 por mês.",
        "Copilot Cowork (Microsoft): tarefas de várias etapas no Microsoft 365, como enviar e-mails, agendar reuniões, editar arquivos do Word, Excel e PowerPoint e postar no Teams. Ele mostra uma caixa de aprovação antes de ações sensíveis, roda tarefas agendadas e acionadas por eventos e deixa você escolher modelos GPT, Claude ou Grok, conforme as configurações do locatário. Exige uma licença do Microsoft 365 Copilot mais o uso em Copilot Credits.",
        "ChatGPT Work (OpenAI): um modo Work no ChatGPT para tarefas que terminam em algo para revisar, como apresentações, planilhas e análises. Ele compartilha recursos principais e uso com o Codex. Free e Go têm acesso limitado no app para desktop; o Plus ($20 por mês) e os planos acima têm acesso no desktop, na web e no celular, com tarefas agendadas e gatilhos por evento.",
        "Tarefas do Gemini (Google, antes Spark): um agente na nuvem dentro do app Gemini que usa o Gmail, o Docs e outros apps do Google, roda com agendamento ou quando algo acontece e sempre pergunta antes de enviar, excluir, comprar ou submeter formulários. A página de ajuda do Google lista o Google AI Pro ou Ultra.",
        "Meta Muse: um agente pessoal baseado no Muse Spark, o modelo da Meta, com um computador na nuvem próprio para cada usuário. Ele trabalha com agendamento e em resposta a eventos, e nada é publicado, enviado ou gasto sem a sua aprovação. A Meta diz que ele é grátis para a maior parte do que as pessoas precisam, com assinaturas para mais.",
        "Grok Bot (xAI): Bots com um computador na nuvem próprio que entram nas suas ferramentas, trabalham no Slack, no Microsoft Teams e em videochamadas, rodam rotinas e passam trabalho uns para os outros. Incluído nos planos Premium ($30 por mês), Super e Ultra da xAI. Veja [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "Colegas de trabalho de IA open source no GitHub",
      text: [
        "Se você prefere rodar o seu colega de trabalho de IA por conta própria, com as suas próprias chaves de modelo ou um modelo local, estes são open source:",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, cerca de 19.000 estrelas): o \"colega de trabalho de IA para o seu trabalho do dia a dia\" (\"AI coworker for your everyday work\") de Andrew Ng, um app para desktop para macOS e Windows em beta aberto. Ele roda na sua máquina com modelos da OpenAI, da Anthropic, do Gemini ou locais, pede aprovação antes de agir e pode agendar resumos e relatórios.",
        "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, cerca de 11.600 estrelas): o workspace auto-hospedável da CopilotKit para colegas de trabalho de IA, cada um com o próprio navegador, arquivos e ferramentas. Ele usa o CopilotKit Intelligence, licenciado à parte. Veja [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, cerca de 7.000 estrelas): \"um workspace para colegas de trabalho de IA\" (\"a workspace for AI coworkers\") que roda agentes com nome, com rotinas e aprovações, sobre motores que você já usa, como Claude Code, Codex ou Gemini CLI.",
        "[ai-employees](https://github.com/markfulton/ai-employees) (MIT): oito cargos de negócio como pastas de rotinas agendadas que rodam no agente que você já usa.",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Um colega de trabalho de IA para código: Cursor Projects",
      text: ["A maioria dos colegas acima cuida de documentos, e-mail e pesquisa. Para trabalho de software, o Cursor acrescentou o Projects:"],
      points: [
        "Um agente coordenador planeja um trabalho maior, como uma funcionalidade, uma migração ou um app completo, delega a agentes que rodam em paralelo nos Cloud Agents do Cursor e traz o trabalho pronto para você conferir.",
        "Cada Project roda no próprio computador na nuvem, então fechar o notebook não o interrompe, e guarda anotações, preferências e um quadro de tarefas compartilhados que todos os agentes leem.",
        "Ele pode acompanhar um canal do Slack, rodar com agendamento ou seguir os seus pull requests. Nos Multiplayer Projects, cada membro da equipe tem um coordenador, e os coordenadores trocam mensagens entre si.",
        "Ele está nos planos do Cursor com Cloud Agents, a partir do Premium por $30 por mês, e não no Free nem no Plus. Veja o [guia do Cursor Projects](/personal-agent/cursor-projects) e [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot).",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "Existe colega de trabalho de IA grátis?",
      points: [
        "Meta Muse: grátis para a maior parte do que as pessoas precisam, segundo a Meta.",
        "ChatGPT Work: acesso limitado no ChatGPT Free, no app para desktop.",
        "Open source: OpenWorker, OpenBot (projetos pessoais) e Suparagent não custam nada para rodar; você paga o seu provedor de modelos ou usa um modelo local.",
        "Lindy: teste grátis com $50 em créditos por 7 dias.",
        "Crewmark: grátis para 1 projeto e até 3 funcionários de IA, na assinatura do Claude Code ou do Codex que você já tem.",
        "Claude Cowork, as tarefas do Gemini, Copilot Cowork e Grok Bot exigem um plano pago ou uma licença.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher um colega de trabalho de IA",
      steps: [
        { title: "Comece por onde o seu trabalho está", text: "Microsoft 365 no trabalho aponta para o Copilot Cowork; Gmail e Google Docs, para o Gemini; se você já paga pelo Claude ou pelo ChatGPT, o Cowork ou o Work vem com o plano." },
        { title: "Decida onde ele deve rodar", text: "Colegas de trabalho na nuvem continuam trabalhando com o notebook fechado. Os open source mantêm os seus dados, chaves e arquivos na sua máquina." },
        { title: "Veja como ele pede permissão", text: "Procure aprovações antes de enviar, postar e gastar, e um registro do que ele fez." },
        { title: "Teste uma tarefa recorrente por duas semanas", text: "Um relatório semanal ou uma triagem diária da caixa de entrada mostra rápido se ele economiza tempo." },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "Colega de trabalho de IA vs funcionário de IA",
      text: [
        "Os nomes se sobrepõem. Na prática, um colega de trabalho de IA é algo para quem você passa tarefas conforme elas surgem, enquanto um funcionário de IA tem um cargo fixo: uma descrição de função, metas, horário de trabalho e uma fila de trabalho que ele assume sozinho. Plataformas criadas em torno dessa segunda ideia são comparadas em [as melhores plataformas de funcionários de IA](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê um emprego fixo ao seu agente de programação",
      text: [
        "O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com cargo, metas em números, horário de trabalho e um heartbeat. Cada um pega a próxima tarefa de um quadro compartilhado e pergunta a você na própria tarefa quando precisa de uma decisão.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Entre os [cargos de funcionários de IA](/ai-employees), como um [especialista em SEO com IA](/ai-employees/seo-specialist)." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua tarefas e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração para cada agente estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "Escolher um colega de trabalho de IA" },
  mid: {
    title: "Quer um colega de trabalho de IA com um emprego fixo?",
    text: "O Crewmark dá ao seu agente do Claude Code ou do Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um colega de trabalho de IA?",
        a: "Um agente para quem você entrega uma tarefa inteira. Ele trabalha nos seus arquivos, apps e navegador, continua em segundo plano, pode repetir tarefas com agendamento e pergunta antes de enviar, publicar, comprar ou excluir.",
      },
      {
        q: "Qual é o colega de trabalho de IA de Andrew Ng?",
        a: "O OpenWorker: um app para desktop open source para macOS e Windows, com licença MIT, em github.com/andrewyng/openworker. O README dele o chama de \"um colega de trabalho de IA para o seu trabalho do dia a dia\" (\"an AI coworker for your everyday work\"). Ele roda na sua máquina com a sua própria chave de modelo ou um modelo local.",
      },
      {
        q: "O Claude Cowork é grátis?",
        a: "Não. O Claude Cowork está só nos planos pagos do Claude, a partir do Pro por $20 por mês (ou $17 por mês no plano anual). O Claude Free não inclui o Cowork.",
      },
      {
        q: "Quanto custa o Copilot Cowork?",
        a: "Ele exige uma licença do Microsoft 365 Copilot, e o uso é cobrado em Copilot Credits: $0.01 por crédito no pagamento conforme o uso, ou um plano pré-pago de um ano com descontos de 5% a 20%.",
      },
      {
        q: "Claude Cowork vs Claude Code: qual é a diferença?",
        a: "O Claude Cowork é para trabalho que não é de programação nos apps do Claude: pesquisa, documentos, planilhas, apresentações e arquivos. O Claude Code é o agente de programação da Anthropic para o seu repositório. A Anthropic diz que o Cowork usa a mesma arquitetura do Claude Code.",
      },
      {
        q: "Existem colegas de trabalho de IA open source no GitHub?",
        a: "Sim: OpenWorker (Andrew Ng, MIT), OpenBot (CopilotKit, MIT), Suparagent (Apache-2.0) e ai-employees (MIT), entre outros.",
      },
    ],
  },
  cta: {
    title: "Dê um emprego à sua IA, não só uma tarefa.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Dados conferidos no site, na página de preços, na documentação ou no GitHub de cada fornecedor em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso de nenhuma empresa citada nesta página. Os nomes dos produtos são marcas dos respectivos titulares.",
};
