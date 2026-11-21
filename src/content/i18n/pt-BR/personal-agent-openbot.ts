import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot: colegas de IA open source da CopilotKit, preços e setup",
    description:
      "O OpenBot é o workspace open source e auto-hospedável da CopilotKit para colegas de IA. O que faz, preço do OpenBot for Business, setup, GitHub e vs Grok Bot.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Open source",
    title: "OpenBot: o workspace open source da CopilotKit para colegas de trabalho de IA",
    lead: "O OpenBot é o workspace open source e auto-hospedável da CopilotKit para colegas de trabalho de IA. Cada Bot ganha um computador próprio, com navegador, arquivos e ferramentas, e trabalha com aprovações e um registro de atividades. Você o roda como app para desktop no seu notebook ou em Kubernetes para uma equipe, usa os seus próprios modelos e pode conectar agentes que já criou via AG-UI. Veja o que ele faz, quanto custa o OpenBot for Business, como configurar, como ele mantém você no controle e como se compara a outros colegas de trabalho de IA.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o OpenBot",
      points: [
        "Um computador por Bot: cada Bot tem o próprio navegador, arquivos e ferramentas, junto com conversas, rotinas, memória, skills, apps, aprovações e atividades.",
        "Onde roda: um app para desktop para Mac e Windows com backend em Docker no seu notebook, ou Kubernetes via Helm para uma equipe. Uma versão hospedada pela CopilotKit está em acesso antecipado.",
        "Os seus modelos: OpenAI, Claude, Gemini ou modelos abertos por um endpoint compatível com a OpenAI. Você paga os provedores de modelos diretamente.",
        "Os seus agentes: use os Bots integrados, ou conecte agentes que você criou em outras stacks via AG-UI.",
        "Routines: trabalho recorrente, rodado por um routine worker.",
        "Ferramentas e interfaces: ferramentas MCP, e interfaces para Mac, Windows, web, iOS, Android, Slack e Teams, algumas delas em acesso antecipado.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "O OpenBot no GitHub e o CopilotKit Intelligence",
      text: [
        `O código está em [github.com/CopilotKit/OpenBot](${repo}). O repositório foi criado em 17 de agosto de 2026 e tinha cerca de 11.652 estrelas em 13 de novembro de 2026.`,
      ],
      points: [
        "O template de aplicação tem licença MIT, então você pode auto-hospedá-lo e personalizá-lo.",
        "Ele usa o CopilotKit Intelligence, que tem licença própria: uma licença local gratuita em um notebook, e uma licença de teste ou de produção em Kubernetes.",
        "Rodar em produção no Kubernetes exige uma licença do CopilotKit Intelligence além da avaliação.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preços do OpenBot e o OpenBot for Business",
      text: [
        "Segundo open.bot/pricing em 13 de novembro de 2026, em dólares americanos. Em todos os planos, você paga os provedores de modelos diretamente.",
      ],
      headers: ["Plano ou licença", "Preço"],
      rows: [
        ["Projetos pessoais", "Gratuito"],
        ["OpenBot for Business, pagamento conforme o uso", "Até $29 por usuário ativo por mês, mais 5% do gasto mensal com modelos acima de $5.000"],
        ["Anual", "Sob consulta"],
        ["CopilotKit Intelligence", "Licença local gratuita em um notebook; licença de teste ou de produção em Kubernetes"],
        ["Modelos", "Pagos diretamente aos provedores de modelos"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o OpenBot",
      steps: [
        {
          title: "Escolha onde ele roda",
          text: "No seu notebook, o app para desktop para Mac ou Windows, que roda com um backend em Docker. Para uma equipe, Kubernetes via Helm. Uma versão hospedada pela CopilotKit está em acesso antecipado.",
        },
        {
          title: "Conecte os seus modelos",
          text: "Use OpenAI, Claude, Gemini ou modelos abertos por um endpoint compatível com a OpenAI. Você paga os provedores diretamente.",
        },
        {
          title: "Escolha um Bot ou traga um agente",
          text: "Comece com um Bot integrado, ou conecte via AG-UI um agente que você já criou. Cada Bot ganha um computador próprio, com navegador, arquivos e ferramentas.",
        },
        {
          title: "Adicione ferramentas e rotinas",
          text: "Dê ferramentas MCP aos Bots e configure Routines para o trabalho recorrente; um routine worker as roda.",
        },
        {
          title: "Acesse onde você trabalha",
          text: "As interfaces cobrem Mac, Windows, web, iOS, Android, Slack e Teams; algumas estão em acesso antecipado.",
        },
      ],
      source: { label: "Fonte: README do OpenBot no GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o OpenBot mantém você no controle",
      points: [
        "Aprovações: os Bots perguntam antes de agir.",
        "Atividades: cada Bot mantém um registro de atividades.",
        "Edição para equipes: login corporativo, papéis, permissões de ferramentas e auditoria.",
        "Auto-hospedagem: ele roda no seu notebook ou no seu próprio cluster Kubernetes, com os provedores de modelos que você escolher.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent e Claude Cowork",
      text: [
        "Dados do README de cada projeto ou das próprias páginas do fornecedor, conferidos em 13 de novembro de 2026, com as estrelas no GitHub desse dia. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker); para o Grok Bot, veja [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "Guias: [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["Feito por", "CopilotKit", "Andrew Ng (andrewyng no GitHub)", "Anil-matcha no GitHub", "Anthropic"],
        ["Open source", "Template MIT, CopilotKit Intelligence com licença à parte; cerca de 11.652 estrelas", "MIT; cerca de 19.050 estrelas", "Apache 2.0; cerca de 7.050 estrelas", "Não"],
        ["Onde roda", "App para desktop (Mac, Windows, backend em Docker) ou Kubernetes; versão hospedada em acesso antecipado", "O seu computador (macOS, Windows); um pequeno serviço na nuvem intermedeia o login dos conectores", "App para desktop, servidor Linux auto-hospedado ou app web hospedado", "Nuvem da Anthropic; trabalho local pelo Claude Desktop"],
        ["Modelos", "OpenAI, Claude, Gemini ou modelos abertos; os seus próprios agentes via AG-UI", "A sua própria chave da OpenAI, Anthropic, Gemini, OpenRouter e outros, ou um modelo local", "Motores como Claude Code, Codex, Gemini CLI e Cursor; nenhum modelo incluído", "Modelos Claude"],
        ["Preço", "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês", "Nenhum preço listado; traga o seu próprio modelo", "Nenhuma taxa informada para auto-hospedar; planos hospedados de $0 a $99 por mês", "Planos pagos do Claude; o Pro custa $20 por mês"],
        ["Trabalho recorrente", "Routines, rodadas por um routine worker", "Resumos, relatórios e outras tarefas repetitivas agendados", "Rotinas com agendamento, por webhook ou sob demanda", "A cada hora, diariamente, semanalmente ou em dias úteis, na nuvem"],
        ["Aprovações", "Antes das ações; auditoria na edição para equipes", "Ativadas por padrão; modelo revisor opcional", "Ask first, Accept edits, Approve for me ou Plan only", "Manual, Auto ou Skip"],
        ["Quadro de tarefas", "Não informado", "Não informado", "Quadro de tarefas e calendário", "Sem quadro de issues; uma lista de tarefas e uma página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Bots no seu workspace. Funcionários de IA nos seus agentes de programação.",
      text: [
        "O OpenBot dá a cada Bot um computador próprio em um workspace que você hospeda. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees) e defina as metas em números." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues no quadro compartilhado; durante o horário de trabalho, o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o OpenBot" },
  mid: {
    title: "Quer funcionários de IA nos agentes de programação que você já usa?",
    text: "O Crewmark dá às suas sessões do Claude Code ou do Codex um cargo, horário de trabalho, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o OpenBot",
    items: [
      {
        q: "O que é o OpenBot?",
        a: "O workspace open source e auto-hospedável da CopilotKit para colegas de trabalho de IA. Cada Bot ganha um computador próprio, com navegador, arquivos e ferramentas, além de aprovações e um registro de atividades. Ele roda como app para desktop no seu notebook ou em Kubernetes para uma equipe, com os modelos que você trouxer.",
      },
      {
        q: "O OpenBot é feito pela CopilotKit?",
        a: "Sim. Ele está em github.com/CopilotKit/OpenBot. Ele usa o CopilotKit Intelligence, que tem licença separada do template MIT do OpenBot, e conecta agentes existentes via AG-UI.",
      },
      {
        q: "O OpenBot é gratuito e open source?",
        a: "O template de aplicação tem licença MIT, e o OpenBot é gratuito para projetos pessoais. O CopilotKit Intelligence, que ele usa, tem uma licença local gratuita em um notebook e uma licença de teste ou de produção em Kubernetes. Você paga os provedores de modelos diretamente.",
      },
      {
        q: "Quanto custa o OpenBot for Business?",
        a: "No pagamento conforme o uso, custa até $29 por usuário ativo por mês, mais 5% do gasto mensal com modelos acima de $5.000; o preço anual é sob consulta. Rodar em produção no Kubernetes também exige uma licença do CopilotKit Intelligence além da avaliação.",
      },
      {
        q: "OpenBot vs Grok Bot: qual é a diferença?",
        a: "O OpenBot é open source e auto-hospedável: você o roda no seu notebook ou em Kubernetes e usa os seus próprios modelos ou agentes. Para uma comparação lado a lado com o Grok Bot, veja [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
      },
      {
        q: "Onde está o OpenBot no GitHub?",
        a: "Em github.com/CopilotKit/OpenBot. O repositório foi criado em 17 de agosto de 2026 e tinha cerca de 11.652 estrelas em 13 de novembro de 2026.",
      },
    ],
  },
  cta: {
    title: "Hospede os seus Bots. Dê um trabalho aos seus agentes de programação também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no README do OpenBot no GitHub e em open.bot/pricing em 13 de novembro de 2026; os dados da comparação vêm das próprias páginas de cada produto, no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a CopilotKit e sem endosso dela. Os nomes dos produtos são marcas dos respectivos titulares.",
};
