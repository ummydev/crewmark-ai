import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work: o que o modo faz, custo, download e vs Codex",
    description:
      "O ChatGPT Work explicado: como o modo Work difere do Chat, quais planos o incluem e quanto custam, o app para desktop e Work vs Codex e Claude Cowork.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · OpenAI",
    title: "ChatGPT Work: o que o modo Work da OpenAI faz e como usar",
    lead: "O ChatGPT Work é um modo do ChatGPT para delegar tarefas com um resultado claro. Você troca de Chat para Work, descreve o que quer receber, e o ChatGPT planeja a tarefa, usa os seus arquivos, plugins, a web, um navegador e código, e entrega um trabalho para você revisar, como uma apresentação, uma planilha, um documento ou uma análise. Ele compartilha os recursos principais e os limites de uso com o Codex, o agente de programação da OpenAI. Veja o que ele faz, quais planos o incluem, como configurar, como ele pergunta antes de agir e como se compara ao Codex, ao Claude Cowork e ao Copilot Cowork.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o ChatGPT Work",
      points: [
        "Um modo, não um app separado: no ChatGPT, você troca de Chat para Work. A orientação da OpenAI é usar o Chat para respostas e o Work para tarefas concluídas.",
        "Ele entrega trabalho para revisar: apresentações, planilhas, documentos, análises e atualizações recorrentes, feitos a partir dos seus arquivos, plugins, da web, de um navegador e de código.",
        "Ele roda na nuvem: na web, as tarefas rodam em um ambiente de nuvem gerenciado na infraestrutura da OpenAI e continuam depois que você fecha o app. No app para desktop, você também pode escolher trabalhar localmente com os seus arquivos, apps e navegador, quando isso estiver ativado.",
        "Ele compartilha o núcleo com o Codex: a OpenAI descreve o Work como os mesmos recursos principais com uma experiência pensada para o trabalho do dia a dia. Ele deixa de fora detalhes técnicos, como a saída do Git e do shell e o painel de pull requests.",
        "Ele divide o trabalho: o ChatGPT pode passar partes independentes de uma tarefa a subagentes, e você pode acompanhar o progresso deles.",
        "Ele repete trabalho: tarefas agendadas e, na web e no celular, tarefas acionadas por eventos do Gmail, Slack ou GitHub.",
        "A OpenAI o apresentou no seu resumo de novidades da semana de 6 a 10 de julho de 2026.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Custo do ChatGPT Work: quais planos o incluem",
      text: [
        "Preços da documentação de preços da OpenAI em 13 de novembro de 2026, em dólares americanos. O Work usa os mesmos preços, créditos e limites de uso do Codex, e tarefas mais longas ou complexas podem usar mais créditos.",
      ],
      headers: ["Plano", "Preço", "ChatGPT Work"],
      rows: [
        ["Free", "$0/mês", "Acesso limitado, só no app para desktop; sem tarefas agendadas"],
        ["Go", "$8/mês", "Acesso limitado, só no app para desktop; tarefas agendadas"],
        ["Plus", "$20/mês", "Desktop, web e celular; créditos extras à venda"],
        ["Pro", "A partir de $100/mês (planos de $100, $200 ou $500)", "Desktop, web e celular; créditos extras à venda"],
        ["Business (2+ usuários)", "$20/usuário/mês no plano anual, ou $25 no mensal", "Créditos compartilhados do workspace em contratos baseados em créditos"],
        ["Enterprise e Edu", "Fale com o time de vendas", "Créditos compartilhados do workspace; os admins controlam o acesso ao Work, aos plugins e ao uso do navegador"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o ChatGPT Work",
      steps: [
        {
          title: "Escolha onde usar",
          text: "O Work roda na web, no app para desktop do ChatGPT para macOS, Windows e Linux, e no ChatGPT para iOS e Android. No Free e no Go, baixe o app para desktop: nesses planos, o Work só está lá.",
        },
        { title: "Troque de Chat para Work", text: "Comece uma tarefa no modo Work e descreva o resultado que você quer receber, como um briefing, uma apresentação, uma análise ou uma planilha." },
        {
          title: "Dê fontes a ele",
          text: "Envie arquivos ou use um projeto, e conecte plugins como Slack, Google Drive, SharePoint, e-mail, agendas, CRMs e ferramentas de gestão de projetos. No app para desktop, ele também pode usar arquivos locais, uma extensão de navegador e o Computer Use no macOS e no Windows, nas regiões com suporte.",
        },
        {
          title: "Escolha um modelo e como ele pergunta",
          text: "O guia sugere o GPT-6 Astra para trabalhos exigentes, o GPT-6.1 Sol para trabalhos complexos com custo menor e o Luna para tarefas mais simples. No app para desktop, comece com o modo de permissão Ask for approval.",
        },
        {
          title: "Faça a tarefa se repetir",
          text: "Crie uma tarefa agendada a partir do Chat ou do Work, na web ou no app para desktop, ou, na web e no celular, acione uma a partir de um evento do Gmail, Slack ou GitHub. Uma mesma tarefa não pode combinar um gatilho por evento com um agendamento por horário.",
        },
      ],
      source: { label: "Fonte: documentação da OpenAI, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o ChatGPT Work mantém você no controle",
      points: [
        "O ChatGPT mostra o progresso e pausa quando precisa de informações ou de aprovação para ações importantes; você pode responder perguntas ou mudar a direção no meio da tarefa.",
        "No app para desktop, os modos de permissão são Ask for approval (o recomendado para começar), Approve for me (pedidos elegíveis vão para revisão automática) e acesso total, onde houver. Um sandbox define limites de arquivos e de rede.",
        "Por padrão, o navegador na nuvem pergunta antes de visitar um site novo (Always ask, Auto approve ou Always allow) e pode perguntar de novo antes de ações com consequências.",
        "Uma tarefa na nuvem não herda os arquivos, apps, sessões de navegador nem o acesso à rede do seu computador, e o navegador na nuvem não pode usar as suas abas locais, extensões, histórico ou senhas salvas.",
        "Os admins do workspace controlam o acesso ao Work, aos plugins, ao uso do navegador e ao acesso à rede. Nos workspaces Enterprise e Edu, os plugins vêm desativados por padrão e o acesso ao navegador na nuvem precisa ser ativado por um admin.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork e Copilot Cowork",
      text: [
        "Dados da documentação e das páginas de preços de cada fornecedor, conferidos em 13 de novembro de 2026. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker). Para trabalho de programação, veja [Claude Code vs Codex](/blog/claude-code-vs-codex) e [casos de uso do Codex](/use-cases/codex); para o agente da Anthropic, o [guia do Claude Cowork](/personal-agent/claude-cowork).",
        "Lado a lado: [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). Guias: [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["Feito por", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["Feito para", "Tarefas que terminam em trabalho para revisar: apresentações, planilhas, documentos, análises", "Programação: inspeciona, edita e roda código em um repositório", "Trabalho intelectual que não é de programação", "Tarefas de várias etapas em todo o Microsoft 365"],
        ["Onde roda", "Nuvem da OpenAI; localmente no app para desktop, quando ativado", "CLI, extensão de IDE e app para desktop do ChatGPT; Codex Cloud", "Nuvem da Anthropic; arquivos locais pelo Claude Desktop", "Nuvem da Microsoft, com OneDrive e SharePoint"],
        ["Quem pode usar", "Planos do ChatGPT; limitado no Free e no Go", "Planos do ChatGPT, ou uma chave de API da OpenAI (sem os recursos na nuvem)", "Planos pagos do Claude, Pro a partir de $20/mês", "Licença do Microsoft 365 Copilot mais Copilot Credits"],
        ["Uso", "Compartilha preços, créditos e limites com o Codex", "Compartilha preços, créditos e limites com o Work", "Consome os limites do plano mais rápido do que o chat", "Cobrado por uso em Copilot Credits"],
        ["Trabalho recorrente", "Tarefas agendadas; eventos do Gmail, Slack e GitHub", "Tarefas agendadas no app do ChatGPT e na web", "Tarefas agendadas, de hora em hora a semanal, na nuvem", "Prompts agendados; eventos de e-mail, Teams e conectores"],
        ["Aprovações", "Ask for approval, Approve for me ou acesso total; um sandbox", "Ask for approval, Approve for me ou acesso total; um sandbox", "Modos Manual, Auto ou Skip", "Caixa de aprovação com prévia antes de ações sensíveis"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Work para os seus documentos. O Crewmark para o seu código.",
      text: [
        "O ChatGPT Work pega uma tarefa e devolve algo para revisar. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado, para que o trabalho de engenharia, SEO e marketing em um repositório seja feito com agendamento.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Codex](/use-cases/codex) e [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o ChatGPT Work" },
  mid: {
    title: "Quer um colega de trabalho de IA para o seu código?",
    text: "O Crewmark dá ao seu Codex ou Claude Code um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o ChatGPT Work",
    items: [
      {
        q: "O que é o ChatGPT Work?",
        a: "Um modo do ChatGPT para delegar tarefas com um resultado claro. O ChatGPT planeja a tarefa, usa os seus arquivos, plugins, a web, um navegador e código, e entrega trabalho para revisar, como apresentações, planilhas, documentos e análises.",
      },
      {
        q: "ChatGPT Work vs Chat: qual é a diferença?",
        a: "São dois modos no mesmo app. A OpenAI sugere o Chat para respostas e o Work para tarefas concluídas: o Work planeja tarefas de várias etapas, continua na nuvem depois que você fecha o app e pausa para pedir aprovação em ações importantes.",
      },
      {
        q: "O ChatGPT Work é grátis, ou preciso do Plus?",
        a: "O Free ($0) e o Go ($8 por mês) têm acesso limitado ao Work, só no app para desktop. O Plus ($20 por mês) e o Pro (a partir de $100 por mês) têm o Work no desktop, na web e no celular e podem comprar créditos extras. O Business custa $20 por usuário por mês no plano anual; Enterprise e Edu são pelo time de vendas.",
      },
      {
        q: "ChatGPT Work vs Codex: qual é a diferença?",
        a: "Eles compartilham recursos principais, execução, preços, créditos e limites de uso. O Codex é o agente de programação da OpenAI, com uma CLI, uma extensão de IDE e tarefas na nuvem para repositórios; o Work é a experiência para o trabalho do dia a dia, sem detalhes como a saída do Git e do shell ou um painel de pull requests.",
      },
      {
        q: "Preciso baixar um app para usar o ChatGPT Work?",
        a: "No Plus e no Pro, não: o Work também roda na web e no ChatGPT para iOS e Android. No Free e no Go, ele só está no app para desktop do ChatGPT, que roda no macOS, Windows e Linux. Trabalhar com arquivos locais, a extensão de navegador e o Computer Use também exige o app para desktop.",
      },
      {
        q: "Estudantes podem usar o ChatGPT Work?",
        a: "Nos planos Free e Go, o Work vem com acesso limitado no app para desktop. Os workspaces do ChatGPT Edu usam o Work com créditos compartilhados do workspace, e os admins controlam o acesso ao Work, aos plugins e ao uso do navegador; o preço do Edu é pelo time de vendas da OpenAI.",
      },
    ],
  },
  cta: {
    title: "Passe os documentos para o Work. Dê um trabalho aos seus agentes de programação também.",
    text: "O Crewmark transforma sessões do Codex e do Claude Code em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação e nas páginas de preços do ChatGPT Work e do Codex da OpenAI em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenAI, a Anthropic ou a Microsoft e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
