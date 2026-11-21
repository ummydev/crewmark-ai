import type { CompareBundle } from "@/content/compare/types";

// Brazilian Portuguese translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "Comparação",
    hubName: "Comparações",
    cta: "Começar",
    secondary: "Ver a tabela",
    shortTitle: "{a} vs {b} em uma linha cada",
    tableTitle: "{a} vs {b} vs Crewmark em resumo",
    rows: {
      category: "O que é",
      openSource: "Open source",
      pricing: "Preço",
      runs: "Onde roda",
      agents: "Agentes e modelos",
      board: "Quadro de tarefas",
      schedule: "Trabalho agendado",
      talk: "Agentes conversando entre si",
    },
    differencesTitle: "Principais diferenças entre {a} e {b}",
    pickTitle: "Escolha {x} se",
    crewmarkTitle: "Onde o Crewmark se encaixa",
    crewmarkText:
      "O Crewmark atua em uma camada diferente da dos dois. Ele não substitui o seu agente de programação; dá um trabalho a ele. Cada funcionário de IA é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho.",
    crewmarkPoints: [
      "Um heartbeat acorda cada funcionário durante o horário de trabalho dele, de a cada 15 minutos até uma vez por dia, para pegar a próxima issue.",
      "Um quadro compartilhado com status, prioridades, comentários e @menções; atribuir, comentar ou mencionar acorda o agente envolvido.",
      "Open source sob a licença GPL-3.0, e gratuito para 1 projeto e até 3 funcionários de IA.",
      "Mensagens diretas entre agentes e uma cadeia de reporte estão a caminho.",
    ],
    sourcesTitle: "Como verificamos",
    sourcesText:
      "Cada informação desta página vem do site, da página de preços, da documentação ou do repositório no GitHub de cada produto, verificados em 13 de novembro de 2026. Preços e planos mudam, então confira a página do fornecedor antes de comprar. Sites oficiais:",
    relatedTitle: "Mais comparações",
    moreTitle: "Alternativas e preços",
    alternativesLabel: "Alternativas para {x}",
    pricingLabel: "Preços de {x}",
    midTitle: "Quer seus agentes trabalhando em horários definidos?",
    midText:
      "O Crewmark dá ao Claude Code e ao Codex um cargo, um heartbeat e um quadro compartilhado, para que eles peguem o próximo trabalho sozinhos.",
    midButton: "Começar",
    faqTitle: "Perguntas frequentes",
    crewmarkFaq: {
      q: "O Crewmark é uma alternativa a {a} e {b}?",
      a: "Ele cobre outra parte do trabalho. O Crewmark não traz um agente próprio: ele transforma o Claude Code ou o Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado. Dependendo do que você faz com {a} e {b}, ele pode funcionar ao lado deles ou assumir a parte que agenda e acompanha o trabalho dos agentes.",
    },
    ctaTitle: "Dê um trabalho aos seus agentes do Claude Code e do Codex, não só um prompt.",
    ctaText:
      "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    ctaButton: "Começar",
    checked:
      "Informações verificadas no site, na página de preços, na documentação ou no GitHub de cada produto em 13 de novembro de 2026.",
    disclaimer:
      "O Crewmark é um produto independente, sem vínculo com nenhuma empresa citada nesta página e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm dos sites e da documentação públicos deles na data acima.",
    hub: {
      meta: {
        title: "Compare ferramentas de agentes de IA: 30 comparações",
        description:
          "Ferramentas de agentes de IA lado a lado: Paperclip, Multica, CrewAI, OpenClaw, Hermes Agent, Claude Code, Codex, Conductor e mais, com dados de cada fornecedor.",
      },
      breadcrumb: "Comparações",
      title: "Ferramentas de agentes de IA comparadas, lado a lado",
      lead: "Cada comparação coloca duas ferramentas lado a lado, com o Crewmark como terceira coluna, usando apenas informações do site, da página de preços, da documentação ou do GitHub de cada fornecedor. Não há notas nem vencedores: só o que cada uma é, quanto custa e o que faz, para você escolher a que combina com você.",
      tableTitle: "Todas as comparações",
      tableHeaders: ["Comparação", "Em resumo"],
      productsTitle: "Produtos incluídos",
      moreTitle: "Páginas de alternativas e preços",
      productsHeaders: ["Produto", "O que é", "Open source"],
      midTitle: "Quer seus agentes trabalhando em horários definidos?",
      ctaTitle: "Dê um trabalho aos seus agentes do Claude Code e do Codex, não só um prompt.",
      faq: [
        {
          q: "Como estas comparações são feitas?",
          a: "A partir do site, da página de preços, da documentação e do repositório no GitHub de cada produto, verificados na data que aparece no fim de cada página. Não damos notas nem classificamos produtos.",
        },
        {
          q: "Por que o Crewmark aparece em todas as páginas?",
          a: "O Crewmark é o nosso produto, então ele aparece como terceira coluna para dar contexto. Ele atua em uma camada diferente da maioria dessas ferramentas: transforma o Claude Code ou o Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado.",
        },
        {
          q: "Os preços estão atualizados?",
          a: "Estavam corretos na data indicada. Os fornecedores mudam preços e planos com frequência, então confira a página de preços deles antes de comprar.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "um servidor auto-hospedado com app web que comanda um time de agentes de IA como uma empresa, com organograma, orçamentos e tarefas, controlando agentes que você traz, como Claude Code, Codex ou OpenClaw.",
      category: "Orquestração multiagente (“empresa de IA”)",
      openSource: "Sim, MIT",
      pricing: "Auto-hospedado é gratuito; sem preços publicados; versão na nuvem em lista de espera",
      runs: "Servidor Node.js auto-hospedado com Postgres, ou Docker",
      agents: "Agentes que você traz por meio de adaptadores: Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode e outros",
      board: "Sim: issues ligadas a metas e projetos, atribuídas a agentes ou pessoas",
      schedule: "Sim: heartbeats, e Routines por cron, webhook ou gatilhos via API",
      talk: "Por threads de tarefas e delegação ao longo do organograma",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "um workspace em que você atribui issues a agentes de programação de IA como se fossem colegas de equipe, enquanto um daemon na sua máquina roda as CLIs de agentes que você já tem.",
      category: "Quadro de issues para pessoas e agentes de programação",
      openSource: "Código-fonte disponível (Apache 2.0 com condições adicionais)",
      pricing: "Auto-hospedagem gratuita dentro da sua organização; preços da nuvem não publicados",
      runs: "Nuvem, auto-hospedado (Docker ou Helm) ou app desktop; os agentes rodam em um daemon que você controla",
      agents: "29 CLIs de agentes, incluindo Claude Code, Codex, Cursor Agent, OpenCode e Hermes",
      board: "Sim: visualizações em quadro e em lista, com agentes como responsáveis",
      schedule: "Sim: Autopilots por cron, webhooks ou execução manual",
      talk: "Sim: em squads, um agente líder @menciona os membros para passar o trabalho",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "um gerenciador de issues hospedado para times de produto que também permite delegar issues ao seu próprio Linear Agent e a agentes de terceiros como Cursor, Codex e Devin.",
      category: "Gerenciador de issues com plataforma de agentes",
      openSource: "Não",
      pricing:
        "Free $0; Basic $10 e Business $16 por usuário/mês, com cobrança anual; créditos de IA para o agente de programação e os Loops",
      runs: "Nuvem",
      agents:
        "Linear Agent; um agente de programação na nuvem baseado em Claude Code ou Codex; agentes de terceiros instalados como membros",
      board: "Sim: issues, projetos, ciclos e iniciativas",
      schedule: "Sim: Loops, em um agendamento ou por eventos",
      talk: "Não informado",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "um assistente pessoal de IA open source que roda no seu próprio computador e responde a você em apps de chat como WhatsApp, Telegram e Slack.",
      category: "Assistente pessoal de IA (auto-hospedado)",
      openSource: "Sim, MIT",
      pricing: "Gratuito; sem plano pago nem serviço hospedado; você paga o seu provedor de modelos",
      runs: "Um Gateway local na sua própria máquina; instalação via Docker e Nix",
      agents: "Provedores de modelos como plugins: Anthropic, OpenAI, Gemini, OpenRouter, Ollama e outros",
      board: "Não (o registro de Tasks e o TaskFlow foram removidos)",
      schedule: "Sim: um agendador de Automations integrado, além de webhooks",
      talk: "Sim: vários agentes por Gateway com acesso entre agentes, e um preset de equipe com um coordenador",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "o agente pessoal de IA open source da Nous Research, usado em um terminal, um app desktop ou apps de chat, que escreve e aprimora as próprias skills com base na experiência.",
      category: "Agente pessoal de IA (auto-hospedado)",
      openSource: "Sim, MIT",
      pricing: "Agente gratuito; Nous Portal opcional: Free, Plus $20, Super $100, Ultra $200 por mês",
      runs: "Sua máquina ou um servidor; os planos pagos do Portal incluem um agente hospedado na nuvem",
      agents: "Qualquer provedor de modelos: Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, modelos locais e outros",
      board: "Não",
      schedule: "Sim: um agendador cron integrado, e rotinas por Bot",
      talk: "Sim: subagentes, e no Bot Mode os Bots nomeados trocam mensagens entre si",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "uma plataforma low-code hospedada para criar agentes de IA e conectá-los em times multiagente, que ela chama de AI Workforce, para trabalho de vendas, suporte e operações.",
      category: "Plataforma de agentes de IA (“AI Workforce”)",
      openSource: "Não",
      pricing: "A página pública de preços lista apenas o Enterprise, via time de vendas",
      runs: "Nuvem",
      agents: "Agentes próprios, criados em um builder no-code; qualquer LLM com créditos, ou sua própria chave",
      board: "Sem quadro de issues; histórico de tarefas e um Activity Center",
      schedule: "Sim: tarefas agendadas e gatilhos de apps",
      talk: "Sim: agentes conectados em um canvas passam trabalho uns para os outros",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "uma assistente de IA hospedada que trabalha na sua caixa de entrada, agenda, reuniões e Slack, roda rotinas recorrentes e pergunta antes de qualquer ação com impacto externo.",
      category: "Assistente de IA (“funcionário de IA”)",
      openSource: "Não",
      pricing: "Grátis: $50 em créditos por 7 dias; a partir de $29.99/mês por usuário ativo por 3.000 créditos",
      runs: "Nuvem; usada pelo Slack, e-mail, iMessage, telefone e uma extensão do Chrome",
      agents: "A própria assistente; ela escolhe um modelo por tarefa, ou você escolhe",
      board: "Não; você passa tarefas a ela na conversa",
      schedule: "Sim: Routines, em um agendamento ou por um evento",
      talk: "Não informado (uma Lindy por workspace)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "um framework open source em Python para criar crews de agentes baseados em papéis e flows passo a passo, mais uma plataforma comercial, o CrewAI AMP, para implantá-los e executá-los.",
      category: "Framework multiagente (Python) e plataforma",
      openSource: "Framework sim, MIT; a plataforma AMP é comercial",
      pricing: "Framework gratuito; AMP Basic gratuito (50 execuções/mês); Enterprise sob consulta",
      runs: "Uma biblioteca no seu código; o AMP na nuvem da CrewAI ou na sua própria infraestrutura",
      agents: "LLMs via API (OpenAI por padrão; outros provedores e modelos locais suportados)",
      board: "Não; as tarefas são definidas em código",
      schedule: "No AMP: agendamento por cron; não informado para o framework sozinho",
      talk: "Sim: agentes delegam e fazem perguntas uns aos outros; um agente gerente no modo hierárquico",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "o framework open source da LangChain para criar agentes stateful de longa duração como um grafo de estado, nós e arestas em código, implantados pelo LangSmith.",
      category: "Framework de orquestração de agentes (Python, JS)",
      openSource: "Framework sim, MIT; o LangSmith é comercial",
      pricing: "Framework gratuito; LangSmith Developer $0, Plus $39/licença/mês, Enterprise sob consulta",
      runs: "Dentro da sua aplicação; Agent Server na nuvem da LangChain, ou auto-hospedado no Enterprise",
      agents: "Os modelos que o seu código chamar",
      board: "Não",
      schedule: "No Agent Server: cron jobs; não informado para a biblioteca sozinha",
      talk: "Sim, conforme o desenho do seu grafo: subagentes, handoffs, roteadores",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "o framework open source da Microsoft para aplicações multiagente em Python e .NET. O README agora diz que ele está arquivado e não é mais mantido pela Microsoft, e aponta para o Microsoft Agent Framework.",
      category: "Framework multiagente (Python, .NET)",
      openSource: "Sim: código MIT, documentação CC-BY-4.0",
      pricing: "Gratuito; sem serviço hospedado",
      runs: "Uma biblioteca no seu código; o AutoGen Studio roda localmente",
      agents: "Clientes de modelos para OpenAI e Azure; Anthropic, Ollama e Gemini marcados como experimentais",
      board: "Não",
      schedule: "Não informado",
      talk: "Sim: chats em grupo, times selector e swarm, troca de mensagens",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "um app de Mac que roda agentes do Claude Code, Codex, Cursor e OpenCode lado a lado, cada um na própria git worktree. Ele anunciou em 4 de novembro de 2026 que vai se juntar à Meta e fechou novos cadastros e downloads.",
      category: "Executor de agentes de programação em paralelo (app de Mac)",
      openSource: "Não",
      pricing: "Gratuito para usar; nenhum preço de plano na nuvem listado hoje",
      runs: "App de Mac; Conductor Cloud somente leitura a partir de 13 de novembro e desligado em 20 de novembro de 2026",
      agents: "Claude Code, Codex, OpenCode e Cursor Agent, nas suas próprias assinaturas ou chaves",
      board: "Sem quadro de issues; uma lista de workspaces, que podem começar a partir de uma issue do GitHub ou do Linear",
      schedule: "Routines só na nuvem, que terminam junto com a nuvem",
      talk: "Mostra mensagens entre agentes quando os agent teams do Claude Code estão ativados",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "um app de terminal open source que roda vários agentes de programação ao mesmo tempo, cada um na própria sessão do tmux e na própria git worktree, para que trabalhem em branches separadas.",
      category: "Executor de agentes de programação em paralelo (terminal)",
      openSource: "Sim, AGPL-3.0",
      pricing: "Gratuito",
      runs: "O seu terminal; requer tmux e a CLI do GitHub",
      agents: "Claude Code por padrão; Codex, Gemini, Aider ou qualquer programa na configuração",
      board: "Não; uma lista de instâncias com prévias e diffs",
      schedule: "Não informado",
      talk: "Não informado",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "um quadro kanban para trabalho de agentes de programação em que cada issue ganha um workspace com uma git worktree e o agente que você escolher. A empresa, bloop, encerrou as atividades em abril de 2026, e o projeto continua como open source, mantido pela comunidade.",
      category: "Quadro kanban e executor de agentes de programação em paralelo",
      openSource: "Sim, Apache-2.0",
      pricing: "App local gratuito; as assinaturas pagas acabaram em abril de 2026",
      runs: "Localmente no navegador ou como app desktop; a parte na nuvem pode ser auto-hospedada",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode e outros",
      board: "Sim: issues kanban com prioridades e tags (requer login)",
      schedule: "Não informado",
      talk: "Não informado",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "o agente de programação da Anthropic: lê o seu código, edita arquivos e roda comandos, no terminal, em extensões de IDE, em um app desktop e na web.",
      category: "Agente de programação",
      openSource: "Não (repositório público, todos os direitos reservados)",
      pricing: "Nos planos pagos do Claude: Pro $20/mês, Max $100, Ultra $200; Team e Enterprise por licença",
      runs: "Terminal, extensões de IDE, app desktop, web e celular",
      agents: "Agente próprio com modelos Claude",
      board: "Sem quadro de issues; os agent teams compartilham uma lista de tarefas",
      schedule: "Sim: tarefas agendadas na nuvem, tarefas agendadas no desktop e `/loop`",
      talk: "Nos agent teams experimentais, os colegas trocam mensagens entre si; os subagentes reportam de volta",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "um recurso experimental do Claude Code, desativado por padrão, em que uma sessão líder cria colegas: instâncias separadas do Claude Code que compartilham uma lista de tarefas e trocam mensagens entre si.",
      category: "Modo multiagente de um agente de programação",
      openSource: "Não (parte do Claude Code)",
      pricing: "Vem com o Claude Code nos planos pagos do Claude",
      runs: "As suas sessões do Claude Code",
      agents: "Instâncias do Claude Code com modelos Claude",
      board: "Uma lista de tarefas compartilhada da qual os colegas pegam tarefas, com dependências",
      schedule: "Não faz parte dos agent teams; o Claude Code tem tarefas agendadas à parte",
      talk: "Sim: os colegas trocam mensagens entre si, e você pode escrever para qualquer um deles",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "o agente de programação da OpenAI, em uma CLI de terminal, uma extensão de IDE, o app desktop do ChatGPT e a nuvem, incluído nos planos do ChatGPT ou usado com uma chave de API.",
      category: "Agente de programação",
      openSource: "Em parte: CLI, SDK e App Server são Apache-2.0; a extensão de IDE e a nuvem não",
      pricing: "Nos planos do ChatGPT a partir do Plus, a $20/mês, ou com uma chave de API da OpenAI",
      runs: "Terminal, extensão de IDE, app desktop do ChatGPT e Codex Cloud",
      agents: "Agente próprio com modelos da OpenAI",
      board: "Sem quadro de issues; aceita issues do Linear nos planos pagos",
      schedule: "Sim: tarefas agendadas no app desktop do ChatGPT e na web",
      talk: "Subagentes: um agente principal cria agentes e reúne os resultados deles",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "um agente de programação open source que funciona com modelos de mais de 200 provedores, incluindo modelos locais, como interface de terminal, app desktop, app web e SDK.",
      category: "Agente de programação",
      openSource: "Sim, MIT",
      pricing: "Agente gratuito, com modelos gratuitos; OpenCode Go $10/mês, Go Plus $40/mês",
      runs: "Terminal, app desktop, app web e SDK na sua máquina",
      agents: "Agente próprio; mais de 200 provedores de modelos, incluindo modelos locais",
      board: "Não informado",
      schedule: "Agendamentos experimentais, que precisam ser ativados (desde outubro de 2026)",
      talk: "Os subagentes reportam ao agente principal",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "o engenheiro de software de IA da Cognition: escreve, roda e testa código e abre pull requests, em sessões na nuvem com máquinas virtuais próprias e localmente pelo Devin Desktop e pela Devin CLI.",
      category: "Engenheiro de software de IA",
      openSource: "Não",
      pricing: "Free $0; Pro $20/mês; Max $200/mês; Teams $80/mês mais $40 por licença de desenvolvedor",
      runs: "Uma VM na nuvem por sessão; Devin Desktop e CLI localmente",
      agents: "Agente próprio; o SWE-2 da Cognition mais modelos de fronteira de vários laboratórios",
      board: "Sem quadro próprio; aceita tickets do Linear, Jira e GitHub",
      schedule: "Sim: Automations, em um agendamento ou por eventos",
      talk: "Sim: uma sessão coordenadora inicia Devins filhos e troca mensagens com eles",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "agentes de programação chamados Droids que rodam em um app desktop, em uma CLI, em modo headless no CI e em computadores na nuvem hospedados pela Factory.",
      category: "Plataforma de agentes de programação (Droids)",
      openSource: "Não",
      pricing: "Gratuito com a sua própria inferência; Pro $20/mês; Plus $100/mês; planos superiores",
      runs: "App desktop e CLI localmente; Droid Computers na nuvem; headless no CI",
      agents: "Agente próprio com modelos de fronteira e de pesos abertos, ou suas próprias chaves",
      board: "Sem quadro geral; aceita issues do Linear e do Jira; o Workstreams (beta) lista tarefas",
      schedule: "Sim: Automations em um agendamento, pelo Slack, GitHub ou webhooks",
      talk: "Sim, no Workstreams (beta): um orquestrador cujos agentes reportam a ele",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "os colegas de equipe de IA hospedados da xAI: Bots que ganham, cada um, um computador próprio na nuvem, entram nas suas ferramentas, trabalham no Slack e no Microsoft Teams, rodam rotinas e passam trabalho uns para os outros.",
      category: "Colegas de trabalho de IA (hospedados)",
      openSource: "Não",
      pricing: "Premium $30, Super $100, Ultra $200 por mês, com uso semanal incluído; Teams e Enterprise via time de vendas",
      runs: "Um computador na nuvem por Bot; apps para desktop e celular; no Slack, no Teams e em chamadas de vídeo",
      agents: "Bots próprios, criados com o Grok",
      board: "Não informado; o trabalho é passado no chat, em threads e em reuniões",
      schedule: "Sim: rotinas em um agendamento, e fluxos de trabalho que ele aprende observando você",
      talk: "Sim: os Bots trocam mensagens entre si e se coordenam em chats em grupo",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "o workspace open source e auto-hospedável da CopilotKit para colegas de trabalho de IA, em que cada Bot ganha o próprio navegador, arquivos e ferramentas, e você traz os seus próprios modelos e agentes.",
      category: "Workspace para colegas de trabalho de IA (auto-hospedável)",
      openSource: "Sim, MIT (usa o CopilotKit Intelligence, com licença à parte)",
      pricing: "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
      runs: "App desktop para Mac e Windows; Kubernetes para equipes",
      agents: "Bots integrados ou seus próprios agentes via AG-UI; OpenAI, Claude, Gemini ou modelos abertos",
      board: "Não informado",
      schedule: "Sim: Routines",
      talk: "Não informado",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "o agente da Anthropic para trabalho que não é de programação nos apps do Claude: você descreve um resultado e ele cuida de pesquisa, documentos, planilhas e apresentações nos seus arquivos, apps e em um navegador.",
      category: "Colega de trabalho de IA para trabalho intelectual",
      openSource: "Não",
      pricing: "Planos pagos do Claude: Pro $20/mês, Max $100, Ultra $200; Team e Enterprise por licença",
      runs: "Nuvem da Anthropic; arquivos locais e navegador pelo Claude Desktop",
      agents: "Modelos Claude",
      board: "Sem quadro; uma lista de tarefas e uma página Scheduled",
      schedule: "Sim: a cada hora, diariamente, semanalmente ou em dias úteis, na nuvem",
      talk: "Subagentes dentro de uma tarefa",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "um agente do Microsoft 365 Copilot que executa tarefas de várias etapas no Outlook, Teams, Word, Excel, PowerPoint, OneDrive e SharePoint, com aprovação antes de ações sensíveis.",
      category: "Colega de trabalho de IA para o Microsoft 365",
      openSource: "Não",
      pricing: "Licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada, no pagamento conforme o uso",
      runs: "Nuvem da Microsoft, com arquivos do OneDrive e do SharePoint",
      agents: "Um seletor de modelos com modelos GPT, Claude e Grok, conforme as configurações do locatário",
      board: "Não informado",
      schedule: "Sim: prompts agendados (até 25 por usuário) e gatilhos de e-mail ou do Teams",
      talk: "Não informado",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "um modo Work no ChatGPT para tarefas que terminam em algo para revisar, como apresentações, planilhas e análises; ele compartilha recursos principais e uso com o Codex.",
      category: "Colega de trabalho de IA no ChatGPT",
      openSource: "Não",
      pricing: "Nos planos do ChatGPT: limitado no Free e no Go, no app para desktop; completo a partir do Plus, a $20/mês",
      runs: "Nuvem da OpenAI, ou o seu computador pelo app para desktop",
      agents: "Modelos da OpenAI",
      board: "Não informado",
      schedule: "Sim: tarefas agendadas; gatilhos do Gmail, Slack ou GitHub nos planos elegíveis",
      talk: "Subagentes dentro de uma tarefa",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "um recurso do Cursor em que um agente coordenador planeja um trabalho de código maior e o delega a muitos agentes na nuvem rodando em paralelo, com anotações compartilhadas e um quadro de tarefas.",
      category: "Espaço de trabalho multiagente para programação",
      openSource: "Não",
      pricing: "Cursor Premium a $30/mês ou mais, Teams e Enterprise; não está no Free nem no Plus",
      runs: "Agentes na nuvem do Cursor; um agente local quando algo precisa rodar na sua máquina",
      agents: "Os agentes do Cursor; você escolhe o modelo do coordenador",
      board: "Sim: uma lista de tarefas e um quadro, compartilhados nos Multiplayer Projects",
      schedule: "Sim: agendamentos, canais do Slack e atividade de pull requests",
      talk: "Sim: o coordenador comanda agentes trabalhadores; nos Multiplayer Projects, os coordenadores trocam mensagens entre si",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "o estúdio low-code da Microsoft para criar agentes, fluxos de trabalho e apps e publicá-los no Microsoft Copilot, no Teams, em sites, em linhas telefônicas e em outros canais.",
      category: "Construtor low-code de agentes e fluxos de trabalho",
      openSource: "Não",
      pricing: "Copilot Credits: $200 por mês por um pacote de 25.000 créditos (cobrança anual), ou $0.01 por crédito no pagamento conforme o uso",
      runs: "Nuvem da Microsoft, em ambientes do Power Platform",
      agents: "Agentes que você cria; você escolhe um modelo por agente, incluindo modelos GPT, Claude e Grok",
      board: "Sem quadro; uma aba Monitor e uma página Workflows",
      schedule: "Sim: gatilhos agendados e por eventos (SharePoint, e-mail, Dataverse e outros) e fluxos de trabalho",
      talk: "Sim: agentes conectados, agentes do Foundry e A2A; um fluxo de trabalho pode iniciar uma tarefa do Copilot Cowork",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu computador, com um cargo e metas, e acorda com um heartbeat para pegar issues de um quadro compartilhado.",
      category: "Funcionários de IA para Claude Code e Codex (harness multiagente)",
      openSource: "Sim, GPL-3.0",
      pricing: "Grátis: 1 projeto, até 3 funcionários de IA; Pro $5 e Team $10 por mês em breve",
      runs: "App web; os agentes rodam no seu computador no Claude Code ou no Codex; pode ser auto-hospedado",
      agents: "Claude Code e Codex, na sua própria assinatura",
      board: "Sim: status, prioridades, responsáveis, comentários e @menções",
      schedule: "Sim: um heartbeat no horário de trabalho (de 15 minutos a 24 horas) e issues recorrentes",
      talk: "Por issues, hoje; mensagens diretas e uma cadeia de reporte estão a caminho",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "Um plano de controle auto-hospedado para uma empresa de IA vs um framework multiagente em Python",
      title: "Paperclip vs CrewAI: empresa de IA ou framework de agentes?",
      description:
        "Paperclip vs CrewAI: um plano de controle auto-hospedado que comanda seus agentes como uma empresa, ou um framework em Python para criar crews de agentes.",
      h1: "Paperclip vs CrewAI: comandar agentes como uma empresa ou criá-los em código",
      lead: "O Paperclip e o CrewAI organizam vários agentes de IA, mas em camadas diferentes. O Paperclip é um app auto-hospedado com organograma, tarefas e orçamentos que controla agentes que você já usa, como o Claude Code ou o Codex. O CrewAI é um framework em Python para escrever crews de agentes baseados em papéis que chamam LLMs por meio de uma API, com uma plataforma comercial para implantá-los. Veja como eles se comparam, ponto a ponto, e onde o Crewmark se encaixa.",
      differences: [
        "Camada: o Paperclip é uma aplicação que você roda e gerencia por uma interface web; o CrewAI é uma biblioteca sobre a qual você escreve código.",
        "Agentes: o Paperclip controla agentes existentes como Claude Code, Codex ou OpenClaw por meio de adaptadores; os agentes do CrewAI são definidos em Python com um papel, um objetivo e uma história de fundo (backstory), e chamam a API de um LLM.",
        "Trabalho: o Paperclip tem tickets ligados a metas e projetos, atribuídos a agentes ou pessoas; o CrewAI define tarefas dentro de crews e flows em código.",
        "Agendamento: o Paperclip tem heartbeats e Routines baseadas em cron; o CrewAI lista agendamento por cron na plataforma AMP, não no framework sozinho.",
      ],
      pickA: [
        "Você quer organograma, orçamentos e tickets para agentes que já roda, como o Claude Code ou o Codex.",
        "Você prefere auto-hospedar e gerenciar o time por uma interface web em vez de por código.",
      ],
      pickB: [
        "Você está incorporando um workflow de agentes à sua própria aplicação em Python.",
        "Você quer escolher o modelo e as ferramentas de cada agente em código, e implantar na plataforma da CrewAI ou na sua própria infraestrutura.",
      ],
      faq: [
        {
          q: "O Paperclip é open source?",
          a: "Sim, sob a licença MIT, e a versão auto-hospedada é gratuita. Uma versão na nuvem está em lista de espera.",
        },
        {
          q: "O CrewAI é gratuito?",
          a: "O framework CrewAI é open source sob a licença MIT e gratuito; você paga o seu provedor de modelos. A plataforma CrewAI AMP tem um plano Basic gratuito com 50 execuções de workflows por mês e um plano Enterprise com preço sob consulta.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "Uma empresa de IA com organograma vs um quadro de issues para agentes de programação",
      title: "Paperclip vs Multica: organograma ou quadro para seus agentes?",
      description:
        "Paperclip vs Multica: os dois dão trabalho a agentes como Claude Code e Codex. Um modela uma empresa com organograma e orçamentos; o outro, um quadro de issues.",
      h1: "Paperclip vs Multica: uma empresa de IA ou um quadro de issues para seus agentes",
      lead: "O Paperclip e o Multica resolvem um problema parecido: você já tem agentes de programação como o Claude Code e o Codex e quer passar trabalho para eles em um quadro, e não em um terminal. O Paperclip modela tudo como uma empresa, com organograma, orçamentos e governança. O Multica fica mais perto de um gerenciador de issues, com agentes como responsáveis e um daemon na sua máquina rodando as CLIs deles. Veja a comparação lado a lado e onde o Crewmark se encaixa.",
      differences: [
        "Modelo: o Paperclip dá aos agentes cargos, hierarquia, descrições de função e orçamentos; o Multica dá a cada agente um nome, um provedor, um runtime e instruções, e os agrupa em squads com um agente líder.",
        "Licença: o Paperclip é open source sob a licença MIT; o Multica tem código-fonte disponível sob Apache 2.0 com condições adicionais, e é gratuito para auto-hospedar dentro da sua própria organização.",
        "Hospedagem: o Paperclip é auto-hospedado, com uma versão na nuvem em lista de espera; o Multica oferece app na nuvem, auto-hospedagem e app desktop.",
        "Agentes: o Paperclip conecta agentes por meio de adaptadores; o daemon do Multica roda 29 CLIs de agentes que você já tem instaladas.",
      ],
      pickA: [
        "Você quer hierarquia, orçamentos e aprovações para um time inteiro de agentes.",
        "Você quer um software com licença MIT que você mesmo roda.",
      ],
      pickB: [
        "Você quer um quadro de issues em que os agentes são os responsáveis, na nuvem ou auto-hospedado.",
        "Você usa muitas CLIs de agentes diferentes e quer todas em um único quadro.",
      ],
      faq: [
        {
          q: "O Paperclip e o Multica funcionam com Claude Code e Codex?",
          a: "Sim. O Paperclip os conecta por meio de adaptadores, e o daemon do Multica roda as CLIs deles em uma máquina que você controla. Os dois também suportam vários outros agentes.",
        },
        {
          q: "O Multica é open source?",
          a: "Ele tem código-fonte disponível: a Multica License é Apache 2.0 com condições adicionais. Usá-lo dentro da sua própria organização, inclusive com auto-hospedagem, é gratuito; oferecê-lo como serviço hospedado exige uma licença comercial.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "Uma empresa de agentes vs um assistente pessoal (o Paperclip pode rodar o OpenClaw)",
      title: "Paperclip vs OpenClaw: empresa de IA ou agente pessoal?",
      description:
        "Paperclip vs OpenClaw: um assistente pessoal de IA open source no seu computador, ou um time de agentes, OpenClaw incluído, comandado como uma empresa.",
      h1: "Paperclip vs OpenClaw: uma empresa de agentes ou um agente pessoal",
      lead: "O README do Paperclip resume bem: se o OpenClaw é um funcionário, o Paperclip é a empresa. O OpenClaw é um assistente pessoal open source que roda na sua máquina e conversa com você em apps de chat. O Paperclip é um plano de controle auto-hospedado com organograma, tarefas e orçamentos que pode controlar o OpenClaw, o Claude Code, o Codex e outros agentes. Eles costumam ser usados juntos. Veja como eles se comparam e onde o Crewmark se encaixa.",
      differences: [
        "Escopo: o OpenClaw é um assistente, ou vários agentes isolados em um mesmo Gateway, com quem você conversa em apps de chat; o Paperclip organiza muitos agentes em papéis, hierarquia e orçamentos.",
        "Trabalho: o Paperclip tem tickets ligados a metas e projetos; a documentação do OpenClaw diz que o registro compartilhado de Tasks e o TaskFlow foram removidos, então ele não tem quadro de tarefas.",
        "Agentes: o OpenClaw se conecta a provedores de modelos como plugins; o Paperclip controla agentes existentes, OpenClaw incluído, por meio de adaptadores.",
        "Os dois têm licença MIT e são gratuitos para rodar; você paga o seu provedor de modelos.",
      ],
      pickA: [
        "Você roda vários agentes e quer organizá-los como um time com papéis, tarefas e orçamentos.",
        "Você quer que o OpenClaw seja um entre vários funcionários, e não o seu único agente.",
      ],
      pickB: [
        "Você quer um assistente pessoal que responda no WhatsApp, Telegram, Slack ou iMessage.",
        "Você quer automações e agentes no seu próprio computador, sem serviço hospedado.",
      ],
      faq: [
        {
          q: "O Paperclip pode rodar o OpenClaw?",
          a: "Sim. O OpenClaw é um dos agentes que o Paperclip conecta por meio de um adaptador, ao lado do Claude Code, do Codex e de outros.",
        },
        {
          q: "O OpenClaw é gratuito?",
          a: "Sim. Ele tem licença MIT, e o README diz que não há plano pago, serviço hospedado nem token; você paga o provedor de modelos que conectar.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "Um plano de controle para uma empresa de IA vs o agente pessoal da Nous Research que se aprimora sozinho",
      title: "Paperclip vs Hermes Agent: empresa de IA ou agente que aprende?",
      description:
        "Paperclip vs Hermes Agent: um plano de controle auto-hospedado que comanda agentes como uma empresa, ou o agente pessoal da Nous Research com Bots e rotinas.",
      h1: "Paperclip vs Hermes Agent: um time de agentes ou um agente que aprende",
      lead: "O Paperclip e o Hermes Agent são open source sob a licença MIT, e os dois podem rodar mais de um agente, mas partem de pontas opostas. O Hermes Agent é um agente pessoal da Nous Research que escreve e aprimora as próprias skills, com um Bot Mode para vários Bots nomeados. O Paperclip é um plano de controle que organiza agentes, Hermes incluído, em uma empresa com organograma, tickets e orçamentos. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Ponto de partida: o Hermes Agent é um agente com quem você conversa em um terminal, um app desktop ou apps de chat; o Paperclip é um app web que atribui trabalho aos agentes que você conecta.",
        "Trabalho: o Paperclip tem tickets ligados a metas e projetos; a documentação do Hermes Agent não mostra quadro de tarefas nem gerenciador de issues.",
        "Vários agentes: o Paperclip usa papéis e hierarquia; no Bot Mode do Hermes Agent, cada Bot tem o próprio papel, modelo e memória, e os Bots trocam mensagens diretamente.",
        "Hospedagem: o Paperclip é auto-hospedado; o Hermes Agent roda na sua máquina ou em um servidor, e os planos pagos do Nous Portal incluem um agente hospedado na nuvem.",
      ],
      pickA: [
        "Você quer um time de agentes diferentes (Claude Code, Codex, Hermes e outros) com papéis, tickets e orçamentos.",
        "Você quer acompanhar o trabalho em um quadro, e não em chats.",
      ],
      pickB: [
        "Você quer um único agente que acumule skills e memória com o tempo.",
        "Você quer Bots nomeados que conversem entre si e rodem rotinas, em um terminal, um app desktop ou apps de chat.",
      ],
      faq: [
        {
          q: "O Paperclip pode rodar o Hermes Agent?",
          a: "Sim. O Hermes é um dos agentes que o Paperclip lista entre seus adaptadores.",
        },
        {
          q: "Quanto custa o Hermes Agent?",
          a: "O agente é gratuito e tem licença MIT; você paga o seu provedor de modelos. Uma assinatura opcional do Nous Portal tem os planos Free, Plus ($20 por mês), Super ($100) e Ultra ($200).",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "Um framework para criar crews de agentes vs um assistente pessoal pronto para usar",
      title: "CrewAI vs OpenClaw: framework de agentes ou assistente pessoal?",
      description:
        "CrewAI vs OpenClaw: um framework em Python para criar crews multiagente, ou um assistente pessoal de IA open source no seu computador, usado em apps de chat.",
      h1: "CrewAI vs OpenClaw: criar agentes em código ou usar um assistente pessoal",
      lead: "O CrewAI e o OpenClaw envolvem vários agentes trabalhando juntos, mas você os usa de jeitos bem diferentes. O CrewAI é um framework em Python: você escreve crews de agentes baseados em papéis e flows, e os implanta na plataforma AMP ou nos seus próprios servidores. O OpenClaw é um assistente pessoal pronto que roda no seu computador e responde a você no WhatsApp, Telegram, Slack e outros apps de chat. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "O que você faz: com o CrewAI, você escreve Python; com o OpenClaw, você instala e configura um assistente.",
        "Onde você conversa com ele: o CrewAI roda dentro da sua aplicação; o OpenClaw responde a você nos apps de chat que você já usa.",
        "Vários agentes: os agentes do CrewAI delegam trabalho e fazem perguntas uns aos outros, com um agente gerente no modo hierárquico; o OpenClaw roda vários agentes isolados em um mesmo Gateway, com um preset de equipe que tem um coordenador.",
        "Os dois têm licença MIT. A plataforma AMP do CrewAI é comercial; o OpenClaw não tem plano pago.",
      ],
      pickA: [
        "Você é desenvolvedor e está incorporando um workflow multiagente a um produto.",
        "Você quer implantar e monitorar crews em uma plataforma gerenciada.",
      ],
      pickB: [
        "Você quer um assistente pessoal agora, sem escrever código.",
        "Você quer que ele fique na sua própria máquina, acessível pelo celular por apps de chat.",
      ],
      faq: [
        {
          q: "Qual combina com quem não é desenvolvedor, CrewAI ou OpenClaw?",
          a: "O OpenClaw é instalado e configurado, e você conversa com ele em apps de chat. O CrewAI é uma biblioteca Python, então é feito para desenvolvedores que colocam agentes no próprio software.",
        },
        {
          q: "O CrewAI e o OpenClaw são open source?",
          a: "Os dois têm licença MIT. A plataforma AMP do CrewAI é um produto comercial separado; o OpenClaw não tem plano pago nem serviço hospedado.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "Crews baseadas em papéis vs orquestração baseada em grafos, ambos frameworks open source",
      title: "CrewAI vs LangGraph: frameworks multiagente comparados (2026)",
      description:
        "CrewAI vs LangGraph: crews e flows baseados em papéis, ou grafos de estado, nós e arestas. Licenças, CrewAI AMP e LangSmith, agendamento e padrões multiagente.",
      h1: "CrewAI vs LangGraph: dois jeitos open source de criar sistemas multiagente",
      lead: "O CrewAI e o LangGraph são os dois frameworks mais comparados para criar sistemas multiagente em código. O CrewAI organiza os agentes em crews com papéis, objetivos e histórias de fundo, além de flows orientados a eventos. O LangGraph faz você definir um workflow como um grafo de estado compartilhado, nós e arestas, e não impõe nenhuma arquitetura de agentes. Os dois têm licença MIT, e cada empresa vende uma plataforma hospedada. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Abstração: o CrewAI parte de agentes com um papel, um objetivo e uma história de fundo; o LangGraph parte de um grafo de estado e nós, e não impõe prompts nem arquitetura de agentes.",
        "Linguagens: o CrewAI é Python; o LangGraph tem bibliotecas em Python e JavaScript/TypeScript.",
        "Plataforma hospedada: o CrewAI AMP tem um plano Basic gratuito (50 execuções de workflows por mês) e um plano Enterprise sob consulta; o LangSmith tem um plano Developer gratuito, o Plus a $39 por licença por mês e um plano Enterprise sob consulta.",
        "Agendamento: os dois listam cron jobs nas plataformas hospedadas, não na biblioteca open source sozinha.",
      ],
      pickA: [
        "Você quer descrever agentes por papel e objetivo e deixar que deleguem uns aos outros.",
        "Você trabalha em Python e quer um Studio no-code do lado da plataforma.",
      ],
      pickB: [
        "Você quer controle detalhado sobre o estado e o caminho entre as etapas.",
        "Você trabalha com JavaScript ou TypeScript além de Python, ou já usa o LangSmith.",
      ],
      faq: [
        {
          q: "O LangGraph exige o LangChain?",
          a: "Não. Ele é feito pela LangChain, Inc., mas a documentação diz que o LangGraph não exige o LangChain. O LangSmith acrescenta tracing, avaliação e deploy.",
        },
        {
          q: "O CrewAI e o LangGraph são gratuitos?",
          a: "Os dois frameworks são gratuitos e têm licença MIT. As plataformas hospedadas, CrewAI AMP e LangSmith, têm cada uma um plano gratuito, além de planos pagos ou sob consulta.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "Dois frameworks multiagente; o README do AutoGen diz que ele está arquivado",
      title: "CrewAI vs AutoGen: frameworks multiagente comparados (2026)",
      description:
        "CrewAI vs AutoGen: crews e flows baseados em papéis, ou os chats em grupo da Microsoft, arquivado em favor do Microsoft Agent Framework. Licenças e status.",
      h1: "CrewAI vs AutoGen: crews e flows vs chats em grupo, e quem mantém cada um",
      lead: "O CrewAI e o AutoGen foram dois dos primeiros jeitos populares de colocar vários agentes de LLM para trabalhar juntos em código. O CrewAI é desenvolvido pela crewAI, Inc., com uma plataforma comercial ao lado. O README do AutoGen agora diz que ele está arquivado e não é mais mantido pela Microsoft, e indica aos novos usuários o Microsoft Agent Framework, que a Microsoft chama de seu sucessor direto. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Manutenção: o CrewAI está em desenvolvimento ativo; o README do AutoGen diz que ele está arquivado e não é mais mantido ativamente pela Microsoft, sem correções de bugs ou de segurança.",
        "Padrões: o CrewAI tem crews de agentes baseados em papéis e flows; o AutoGen tem chats em grupo, times selector e swarm, e troca de mensagens orientada a eventos.",
        "Linguagens: o CrewAI é Python; o AutoGen tem Python e .NET.",
        "Hospedagem: o CrewAI AMP implanta e roda crews; o AutoGen não tem serviço hospedado, e o AutoGen Studio roda localmente.",
      ],
      pickA: [
        "Você está começando um projeto multiagente novo e quer um framework mantido, com opção hospedada.",
        "Você quer agentes baseados em papéis que deleguem trabalho uns aos outros.",
      ],
      pickB: [
        "Você mantém uma aplicação AutoGen existente e precisa saber o que está rodando antes de migrar.",
        "Você está avaliando o Microsoft Agent Framework e quer compará-lo com o antecessor.",
      ],
      faq: [
        {
          q: "O AutoGen ainda é mantido?",
          a: "O README diz que o projeto está arquivado e não é mais mantido ativamente pela Microsoft, e recomenda o Microsoft Agent Framework, que o Microsoft Learn chama de sucessor direto do AutoGen.",
        },
        {
          q: "O CrewAI é gratuito?",
          a: "O framework tem licença MIT e é gratuito. A plataforma CrewAI AMP tem um plano Basic gratuito e um plano Enterprise com preço sob consulta.",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "Um quadro de issues para CLIs de agentes vs um agente pessoal com Bots e rotinas",
      title: "Multica vs Hermes Agent: quadro de agentes ou agente pessoal?",
      description:
        "Multica vs Hermes Agent: um quadro de issues em que CLIs de agentes (Hermes entre elas) recebem tarefas, ou o agente pessoal da Nous Research que aprende.",
      h1: "Multica vs Hermes Agent: um quadro para seus agentes ou o próprio agente",
      lead: "O Multica e o Hermes Agent ficam em camadas diferentes. O Hermes Agent é um agente: o assistente pessoal open source da Nous Research que aprende skills com a experiência e pode rodar Bots nomeados. O Multica é o quadro em volta dos agentes: você atribui issues, e um daemon na sua máquina roda a CLI de agente que você escolher, Hermes incluído. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Camada: o Multica atribui e acompanha o trabalho; o Hermes Agent faz o trabalho.",
        "Acompanhamento do trabalho: o Multica tem visualizações em quadro e em lista com agentes como responsáveis; a documentação do Hermes Agent não mostra quadro de tarefas.",
        "Agendamentos: os Autopilots do Multica rodam por cron ou webhooks e criam issues; o Hermes Agent tem um agendador cron integrado e rotinas por Bot.",
        "Licença: o Hermes Agent é MIT; o Multica tem código-fonte disponível e é gratuito para auto-hospedar dentro da sua própria organização.",
      ],
      pickA: [
        "Você quer issues, projetos e revisões para vários agentes, talvez com o Hermes entre eles.",
        "Seu time de pessoas e agentes trabalha a partir de um único quadro.",
      ],
      pickB: [
        "Você quer um único agente que guarde memória e aprimore as próprias skills.",
        "Você prefere conversar com seu agente em um terminal, um app desktop ou um app de chat a gerenciar um quadro.",
      ],
      faq: [
        {
          q: "O Multica suporta o Hermes Agent?",
          a: "Sim. O Hermes é uma das 29 CLIs de agentes que o daemon do Multica consegue rodar.",
        },
        {
          q: "O Hermes Agent pode rodar em um agendamento?",
          a: "Sim. Ele tem um agendador cron integrado, e no Bot Mode cada Bot pode ter rotinas.",
        },
      ],
    },
    "multica-vs-linear": {
      summary: "Dois gerenciadores de issues com agentes como responsáveis: um para CLIs de agentes, outro para times de produto",
      title: "Multica vs Linear: gestão de issues para agentes de IA",
      description:
        "Multica vs Linear: os dois atribuem issues a agentes de IA. O Multica roda CLIs de agentes na sua máquina; o Linear é hospedado e tem o Linear Agent.",
      h1: "Multica vs Linear: onde seus agentes pegam as issues",
      lead: "O Linear é o gerenciador de issues que muitos times de produto já usam, e agora permite delegar issues ao Linear Agent, a um agente de programação na nuvem baseado em Claude Code ou Codex e a agentes de terceiros. O Multica foi feito em torno de agentes desde o início: um quadro de issues em que um daemon na sua própria máquina roda as CLIs de agentes que você tem instaladas. Veja como eles se comparam e onde o Crewmark se encaixa.",
      differences: [
        "Onde os agentes rodam: o daemon do Multica roda CLIs de agentes em um notebook ou servidor que você controla; o agente de programação do Linear roda na nuvem do Linear.",
        "Atribuição: no Multica, o agente é o responsável; no Linear, ao delegar, a pessoa continua como responsável principal e o agente entra como colaborador.",
        "Trabalho recorrente: os Autopilots do Multica rodam por cron ou webhooks; os Loops do Linear rodam em um agendamento ou por eventos, cobrados dos créditos de IA.",
        "Hospedagem e preço: o Multica pode ser auto-hospedado (código-fonte disponível); o Linear é só hospedado, com Free, Basic ($10) e Business ($16) por usuário por mês, com cobrança anual.",
      ],
      pickA: [
        "Você quer que os agentes rodem no seu próprio hardware, com as CLIs e os logins que você já tem.",
        "Você quer auto-hospedar o quadro.",
      ],
      pickB: [
        "Seu time já planeja no Linear e quer os agentes dentro do mesmo gerenciador.",
        "Você prefere que o agente de programação rode na nuvem do fornecedor.",
      ],
      faq: [
        {
          q: "O Linear pode atribuir issues a agentes de IA?",
          a: "Sim. Você pode delegar issues ao Linear Agent, a um agente de programação na nuvem que usa Claude Code ou Codex e a agentes de terceiros como Cursor, Codex e Devin instalados no seu workspace.",
        },
        {
          q: "Quanto custa o Linear?",
          a: "O Free custa $0, com 2 times e 250 issues. O Basic custa $10 e o Business $16 por usuário por mês, com cobrança anual. O agente de programação na nuvem e os Loops também usam créditos de IA pré-pagos.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "Um assistente pessoal nos seus apps de chat vs o agente de programação da Anthropic",
      title: "OpenClaw vs Claude Code: assistente ou agente de programação?",
      description:
        "OpenClaw vs Claude Code: um assistente pessoal open source que responde em apps de chat, ou o agente de programação da Anthropic. Licença, preço e modelos.",
      h1: "OpenClaw vs Claude Code: um assistente nos seus chats ou um agente no seu código",
      lead: "O OpenClaw e o Claude Code são agentes que rodam no seu próprio computador, e o OpenClaw pode até reaproveitar um login do Claude Code para acessar os modelos Claude. Eles são feitos para trabalhos diferentes. O OpenClaw é um assistente pessoal que você acessa pelo WhatsApp, Telegram, Slack ou iMessage. O Claude Code é o agente de programação da Anthropic: lê o seu código, edita arquivos e roda comandos. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o OpenClaw cuida de tarefas pessoais e automações por apps de chat; o Claude Code trabalha em um repositório de código pelo terminal, por um IDE, pelo app desktop ou pela web.",
        "Modelos: o OpenClaw se conecta a muitos provedores como plugins, o Claude entre eles; o Claude Code roda com modelos Claude.",
        "Preço e licença: o OpenClaw tem licença MIT e é gratuito (você paga o provedor de modelos); o Claude Code está incluído nos planos pagos do Claude a partir de $20 por mês e não é open source.",
        "Agendamento: o OpenClaw tem um agendador de Automations integrado; o Claude Code tem tarefas agendadas na nuvem e no desktop, e o `/loop`.",
      ],
      pickA: [
        "Você quer um assistente para quem mandar mensagem pelo celular, para tarefas pessoais e automações.",
        "Você quer combinar provedores de modelos, incluindo modelos locais.",
      ],
      pickB: [
        "Seu trabalho está em uma base de código: funcionalidades, correções, revisões e refatorações.",
        "Você já paga um plano do Claude.",
      ],
      faq: [
        {
          q: "O OpenClaw pode usar o Claude?",
          a: "Sim, com uma chave de API da Anthropic ou reaproveitando um login do Claude Code na mesma máquina.",
        },
        {
          q: "O Claude Code é gratuito?",
          a: "Não. Ele está incluído nos planos pagos do Claude (Pro, Max, Ultra, Team e Enterprise), não no Free.",
        },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "O agente pessoal da Nous Research que se aprimora sozinho vs o agente de programação da Anthropic",
      title: "Hermes Agent vs Claude Code: agente pessoal ou de programação?",
      description:
        "Hermes Agent vs Claude Code: o agente open source da Nous Research que aprende skills e roda Bots, ou o agente de programação da Anthropic. Preço e modelos.",
      h1: "Hermes Agent vs Claude Code: um agente pessoal que aprende ou um agente de programação",
      lead: "O Hermes Agent e o Claude Code rodam na sua máquina, os dois têm subagentes e agendamentos, e os dois podem trabalhar com modelos Claude. A diferença é o foco. O Hermes Agent, da Nous Research, é um agente pessoal com um ciclo de aprendizado: escreve skills a partir da experiência e mantém a própria memória, com qualquer provedor de modelos. O Claude Code é o agente de programação da Anthropic para trabalhar em uma base de código. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Foco: o Hermes Agent é um agente pessoal de uso geral; o Claude Code é feito para código.",
        "Modelos: o Hermes Agent funciona com muitos provedores, e a documentação dele diz que uma assinatura do Claude só funciona no Max com uso extra comprado; o Claude Code roda com modelos Claude.",
        "Vários agentes: os Bots do Hermes Agent trocam mensagens diretamente; nos agent teams experimentais do Claude Code, os colegas trocam mensagens entre si.",
        "Preço e licença: o Hermes Agent é MIT e gratuito, com uma assinatura opcional do Nous Portal; o Claude Code vem com os planos pagos do Claude e não é open source.",
      ],
      pickA: [
        "Você quer um único agente para muitos tipos de tarefa, que aprimore as skills com o tempo.",
        "Você quer escolher e trocar de provedor de modelos livremente.",
      ],
      pickB: [
        "Seu trabalho principal está em uma base de código.",
        "Você quer as ferramentas da Anthropic em volta dele: extensões de IDE, app desktop, revisão de código e tarefas agendadas.",
      ],
      faq: [
        {
          q: "O Hermes Agent pode usar a minha assinatura do Claude?",
          a: "A documentação dele diz que o caminho pela assinatura do Claude só funciona no Claude Max com uso extra comprado, e não no Claude Pro. Você também pode usar o Claude com uma chave de API.",
        },
        {
          q: "O Claude Code aprende novas skills como o Hermes Agent?",
          a: "O Claude Code usa skills que você ou o seu time escrevem como arquivos SKILL.md, e mantém uma memória automática (auto memory). O foco declarado do Hermes Agent é escrever e aprimorar skills a partir da própria experiência.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "Um assistente pessoal vs um agente de programação open source, ambos MIT e compatíveis com qualquer modelo",
      title: "OpenClaw vs OpenCode: assistente ou agente de programação?",
      description:
        "OpenClaw vs OpenCode: dois agentes MIT para qualquer modelo. Um é um assistente pessoal nos seus apps de chat; o outro, um agente de programação.",
      h1: "OpenClaw vs OpenCode: nomes parecidos, trabalhos diferentes",
      lead: "O OpenClaw e o OpenCode são open source sob a licença MIT, os dois rodam na sua própria máquina e os dois funcionam com muitos provedores de modelos, e é por isso que são comparados. Eles fazem trabalhos diferentes. O OpenClaw é um assistente pessoal com quem você conversa no WhatsApp, Telegram, Slack e outros apps de chat. O OpenCode é um agente de programação com interface de terminal, app desktop, app web e SDK. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o OpenClaw cuida de tarefas pessoais e automações pelo chat; o OpenCode escreve e altera código.",
        "Interface: o OpenClaw responde em apps de chat e tem uma Control UI; o OpenCode roda como interface de terminal, app desktop, app web e SDK.",
        "Opções pagas: o OpenClaw não tem plano pago; o OpenCode é gratuito, com modelos gratuitos, e oferece o OpenCode Go a $10 por mês e o Go Plus a $40.",
        "Agendamento: o OpenClaw tem um agendador integrado; os agendamentos do OpenCode são experimentais e precisam ser ativados.",
      ],
      pickA: [
        "Você quer um assistente para quem mandar mensagem de qualquer lugar.",
        "Você quer automações disparadas por agendamentos, webhooks ou e-mail.",
      ],
      pickB: [
        "Você quer um agente de programação open source que funcione com mais de 200 provedores de modelos, incluindo os locais.",
        "Você quer começar a programar com modelos gratuitos e sem conta.",
      ],
      faq: [
        {
          q: "O OpenClaw e o OpenCode são o mesmo projeto?",
          a: "Não. O OpenClaw é um assistente pessoal da OpenClaw Foundation; o OpenCode é um agente de programação da Anomaly. Os dois têm licença MIT.",
        },
        {
          q: "Preciso de uma chave de API para o OpenCode?",
          a: "Não para começar: ele inclui modelos gratuitos com um limite diário e não exige conta para usá-los. Você também pode conectar seus próprios provedores ou assinar o OpenCode Go.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Os agent teams experimentais do Claude Code vs o Gateway multiagente do OpenClaw",
      title: "Claude Code Agent Teams vs OpenClaw: configurações multiagente",
      description:
        "Claude Code agent teams vs OpenClaw: um modo experimental de líder e colegas no Claude Code, ou vários agentes pessoais em um Gateway do OpenClaw.",
      h1: "Claude Code agent teams vs OpenClaw: dois jeitos de rodar vários agentes",
      lead: "Os dois colocam mais de um agente para trabalhar em conjunto. Os agent teams do Claude Code são um recurso experimental, desativado por padrão, em que uma sessão líder cria colegas: instâncias separadas do Claude Code que compartilham uma lista de tarefas e trocam mensagens entre si. O OpenClaw roda vários agentes isolados em um mesmo Gateway na sua máquina, com um preset de equipe em que um coordenador delega a agentes pesquisador, redator e revisor. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Propósito: os agent teams dividem uma tarefa de programação entre instâncias do Claude Code; os agentes do OpenClaw são assistentes pessoais que você acessa por apps de chat.",
        "Coordenação: os agent teams compartilham uma lista de tarefas com dependências, e os colegas trocam mensagens entre si; os agentes do OpenClaw podem acessar as sessões uns dos outros, e a documentação descreve o preset de equipe como orientação de prompt, e não como um agendador.",
        "Ciclo de vida: um agent team roda para uma tarefa, sob uma sessão líder; os agentes do OpenClaw vivem no Gateway e rodam automações agendadas.",
        "Custo: os agent teams vêm com o Claude Code nos planos pagos do Claude; o OpenClaw é gratuito e tem licença MIT.",
      ],
      pickA: [
        "Você quer que várias instâncias do Claude Code dividam uma tarefa de programação grande e conversem entre si.",
        "Você já usa o Claude Code e não se importa em ativar um recurso experimental.",
      ],
      pickB: [
        "Você quer agentes pessoais de longa duração, com personas próprias, na sua máquina.",
        "Você quer acessá-los por apps de chat e rodá-los em agendamentos.",
      ],
      faq: [
        {
          q: "Como ativo os agent teams do Claude Code?",
          a: "Eles são experimentais e vêm desativados por padrão: defina `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, e uma sessão líder poderá criar colegas. Veja [agent teams do Claude Code](/blog/claude-code-agent-teams).",
        },
        {
          q: "Os agentes do OpenClaw podem trabalhar em equipe?",
          a: "Sim. Um Gateway pode rodar vários agentes isolados, e um preset de equipe cria um coordenador mais agentes pesquisador, redator e revisor.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "Duas ferramentas de agentes de programação em paralelo cujas empresas encerraram serviços hospedados em 2026",
      title: "Vibe Kanban vs Conductor: agentes de programação paralelos (2026)",
      description:
        "Vibe Kanban vs Conductor: um quadro kanban open source para agentes de programação, ou um app de Mac que vai para a Meta e fechou novos cadastros.",
      h1: "Vibe Kanban vs Conductor: o que resta de cada um e como se comparam",
      lead: "O Vibe Kanban e o Conductor rodam vários agentes de programação em paralelo, cada um na própria git worktree, para que você possa revisar e fazer merge do trabalho deles. Os dois mudaram em 2026. A bloop, empresa por trás do Vibe Kanban, encerrou as atividades em abril, e o projeto continua como open source mantido pela comunidade. O Conductor anunciou em 4 de novembro que vai se juntar à Meta: novos cadastros e downloads estão fechados, a nuvem passa a ser somente leitura em 13 de novembro e é desligada em 20 de novembro, e o app de Mac recebe modelos novos e correções críticas até o início de 2027. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Disponibilidade: qualquer pessoa pode rodar de graça o app local do Vibe Kanban; o Conductor não aceita mais novos cadastros nem downloads.",
        "Quadro: o Vibe Kanban planeja o trabalho como issues kanban; o Conductor lista workspaces e pode criar um a partir de uma issue do GitHub ou do Linear.",
        "Licença: o Vibe Kanban é open source sob a licença Apache-2.0; o Conductor é de código fechado.",
        "Plataforma e agentes: o Vibe Kanban roda no navegador ou como app desktop; o Conductor é um app de Mac. Os dois rodam Claude Code, Codex, Cursor e OpenCode, e o Vibe Kanban também lista Gemini CLI, GitHub Copilot, Amp e outros.",
      ],
      pickA: [
        "Você quer uma ferramenta open source que possa continuar rodando e modificar.",
        "Você quer um quadro kanban na frente dos seus agentes.",
      ],
      pickB: [
        "Você já usa o Conductor em um Mac e só precisa do app local.",
        "Você não se importa com o fim dos recursos na nuvem em 20 de novembro de 2026.",
      ],
      faq: [
        {
          q: "O Conductor vai acabar?",
          a: "O Conductor anunciou em 4 de novembro de 2026 que vai se juntar à Meta. Novos cadastros e downloads estão fechados, a nuvem passa a ser somente leitura em 13 de novembro e é desligada em 20 de novembro, e o app de Mac recebe modelos novos e correções críticas até o início de 2027. Veja [alternativas ao Conductor](/blog/conductor-alternatives).",
        },
        {
          q: "O Vibe Kanban ainda é mantido?",
          a: "A bloop anunciou em 10 de abril de 2026 que estava encerrando as atividades. O projeto continua como open source sob a licença Apache-2.0, mantido pela comunidade, e o app local é gratuito para rodar.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "Agentes de programação em paralelo: um app de terminal open source vs um app de Mac que vai para a Meta",
      title: "Claude Squad vs Conductor: agentes do Claude Code em paralelo",
      description:
        "Claude Squad vs Conductor: um app de terminal open source com tmux e worktrees, ou um app de Mac que vai para a Meta e fecha a nuvem em 20 de novembro de 2026.",
      h1: "Claude Squad vs Conductor: terminal ou app de Mac para agentes em paralelo",
      lead: "O Claude Squad e o Conductor fazem o mesmo trabalho básico: rodar vários agentes de programação ao mesmo tempo, cada um na própria branch em uma git worktree, e ajudar você a revisar e fazer merge dos resultados. O Claude Squad é um app de terminal open source construído sobre o tmux. O Conductor é um app de Mac de código fechado que anunciou em 4 de novembro de 2026 que vai se juntar à Meta, e não aceita mais novos usuários. Veja como eles se comparam e onde o Crewmark se encaixa.",
      differences: [
        "Interface: o Claude Squad é uma interface de terminal que requer tmux e a CLI do GitHub; o Conductor é um app desktop para Mac.",
        "Licença: o Claude Squad é open source sob a licença AGPL-3.0; o Conductor é de código fechado.",
        "Agentes: o Claude Squad usa o Claude Code por padrão e pode rodar Codex, Gemini, Aider ou qualquer programa que você configurar; o Conductor roda Claude Code, Codex, OpenCode e Cursor Agent.",
        "Status: a versão mais recente do Claude Squad é a v1.0.20 (agosto de 2026); o Conductor fechou novos cadastros e downloads em 4 de novembro de 2026, encerra a nuvem em 20 de novembro e atualiza o app de Mac até o início de 2027.",
      ],
      pickA: [
        "Você vive no terminal e quer uma ferramenta open source que qualquer pessoa possa instalar.",
        "Você quer rodar qualquer agente de CLI que consiga configurar.",
      ],
      pickB: [
        "Você já usa o Conductor e prefere um app desktop com diffs e pull requests integrados.",
        "Você está em um Mac e só precisa do app local até o início de 2027.",
      ],
      faq: [
        {
          q: "O Claude Squad é gratuito?",
          a: "Sim. Ele é open source sob a licença AGPL-3.0; você paga pelos agentes ou pelas APIs de modelos que roda nele.",
        },
        {
          q: "Ainda dá para baixar o Conductor?",
          a: "Não como novo usuário: o Conductor fechou cadastros e downloads em 4 de novembro de 2026, quando anunciou que vai se juntar à Meta. Quem já usa mantém o app de Mac, que recebe atualizações até o início de 2027.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "O engenheiro de software de IA na nuvem da Cognition vs o agente de programação da Anthropic",
      title: "Devin vs Claude Code: engenheiro de IA ou agente de programação?",
      description:
        "Devin vs Claude Code: o engenheiro de IA da Cognition com VMs na nuvem, Automations e sessões filhas, ou o agente de programação da Anthropic.",
      h1: "Devin vs Claude Code: um engenheiro na nuvem ou um agente ao seu lado",
      lead: "O Devin e o Claude Code são agentes de programação que escrevem, rodam e testam código e abrem pull requests. O Devin, da Cognition, gira em torno de sessões na nuvem, cada uma na própria máquina virtual, com Automations e um coordenador que roda Devins filhos; ele também tem um app desktop e uma CLI. O Claude Code, da Anthropic, trabalha no seu terminal, no IDE, no app desktop ou na web, com modelos Claude. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Onde roda: cada sessão do Devin na nuvem ganha a própria VM; o Claude Code roda localmente por padrão, com sessões na nuvem pela web.",
        "Modelos: o Devin usa o SWE-2 da Cognition mais modelos de fronteira de vários laboratórios, escolhidos por um roteador; o Claude Code roda com modelos Claude.",
        "Preço: o Devin tem Free, Pro a $20 e Max a $200 por mês, e Teams a $80 por mês mais $40 por licença de desenvolvedor; o Claude Code vem com Claude Pro ($20), Max ($100), Ultra ($200), Team e Enterprise.",
        "Automação: as Automations do Devin rodam em agendamentos e com eventos do Slack, GitHub, Linear e outros; as tarefas agendadas na nuvem do Claude Code rodam em um agendamento, por uma chamada de API ou por um evento do GitHub.",
      ],
      pickA: [
        "Você quer cada tarefa na própria VM na nuvem, iniciada pelo Slack, Linear ou Jira.",
        "Você quer uma sessão coordenadora que rode sessões filhas e troque mensagens com elas.",
      ],
      pickB: [
        "Você quer o agente trabalhando no seu próprio checkout e terminal.",
        "Você já paga um plano do Claude e quer extensões de IDE, app desktop e a web.",
      ],
      faq: [
        {
          q: "Quanto custa o Devin?",
          a: "O Free custa $0, o Pro $20 por mês, o Max $200 por mês e o Teams $80 por mês mais $40 por mês por licença completa de desenvolvedor, até 100 usuários; o Enterprise é sob consulta.",
        },
        {
          q: "O Claude Code está incluído no Claude Pro?",
          a: "Sim. O Claude Code está incluído em todos os planos pagos do Claude: Pro, Max, Ultra, Team e Enterprise.",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "O engenheiro de software de IA da Cognition vs o agente de programação da OpenAI",
      title: "Devin vs Codex: engenheiros de software de IA comparados (2026)",
      description:
        "Devin vs OpenAI Codex: VMs na nuvem, Automations e sessões filhas, ou um agente na CLI, no IDE, no app do ChatGPT e na nuvem. Preços, licença e modelos.",
      h1: "Devin vs Codex: dois agentes de programação que também trabalham na nuvem",
      lead: "O Devin e o Codex rodam tarefas de programação localmente e na nuvem, e abrem pull requests. O Devin, da Cognition, dá a cada sessão na nuvem a própria máquina virtual e acrescenta Automations e sessões coordenadoras. O Codex, da OpenAI, vem com os planos do ChatGPT e roda em uma CLI de terminal, uma extensão de IDE, o app desktop do ChatGPT e o Codex Cloud. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Preços: o Devin é vendido em planos próprios (Free, Pro $20, Max $200, Teams); o Codex está incluído nos planos do ChatGPT a partir do Plus, a $20 por mês, ou é usado com uma chave de API.",
        "Open source: a CLI, o SDK e o App Server do Codex são Apache-2.0; o Devin não é open source.",
        "Modelos: o Devin alterna entre o SWE-2 da Cognition e modelos de fronteira; o Codex roda com modelos da OpenAI.",
        "Agendamento: as Automations do Devin rodam em agendamentos e a partir de muitas fontes de eventos; o Codex tem tarefas agendadas no app desktop do ChatGPT e na web.",
      ],
      pickA: [
        "Você quer que muitas fontes de eventos (Slack, Teams, Jira, PagerDuty, webhooks) iniciem trabalho.",
        "Você quer um coordenador que rode sessões filhas em VMs paralelas.",
      ],
      pickB: [
        "Você já paga o ChatGPT e quer o agente no seu terminal e no IDE.",
        "Você quer uma CLI open source que possa inspecionar.",
      ],
      faq: [
        {
          q: "O Codex é gratuito?",
          a: "O Codex está incluído nos planos pagos do ChatGPT a partir do Plus ($20 por mês) e também pode rodar com uma chave de API da OpenAI. A CLI em si é open source sob a licença Apache-2.0.",
        },
        {
          q: "O Devin e o Codex aceitam issues do Linear?",
          a: "Sim. Você pode atribuir issues do Linear ao Devin e, nos planos pagos do ChatGPT, atribuir issues do Linear ao Codex ou mencioná-lo em um comentário.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "A plataforma Droids da Factory vs o agente de programação da Anthropic",
      title: "Factory vs Claude Code: Droids ou Claude Code?",
      description:
        "Factory (Droids) vs Claude Code: agentes de programação com Automations, Workstreams e computadores na nuvem, ou o agente da Anthropic. Modelos e preços.",
      h1: "Factory vs Claude Code: a plataforma Droids ou o agente da Anthropic",
      lead: "A Factory e o Claude Code são agentes de programação com app desktop, CLI e um modo headless para CI. Os Droids da Factory funcionam com muitos modelos, inclusive suas próprias chaves, e acrescentam Automations, Workstreams com um orquestrador e computadores na nuvem hospedados pela Factory. O Claude Code é o agente da Anthropic com modelos Claude, incluído nos planos pagos do Claude. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Modelos: a Factory funciona com modelos de fronteira e de pesos abertos e com suas próprias chaves; o Claude Code roda com modelos Claude.",
        "Preço: a Factory tem Free (com sua própria inferência), Pro a $20, Plus a $100 por mês e planos superiores; o Claude Code vem com Claude Pro ($20), Max ($100), Ultra ($200), Team e Enterprise.",
        "Vários agentes: no Workstreams (beta) da Factory, os agentes de um orquestrador reportam a ele; nos agent teams experimentais do Claude Code, os colegas trocam mensagens entre si.",
        "Automação: as Automations da Factory rodam em agendamentos, pelo Slack, GitHub ou webhooks; o Claude Code tem tarefas agendadas na nuvem e GitHub Actions.",
      ],
      pickA: [
        "Você quer alternar entre modelos de laboratórios diferentes, ou trazer os seus.",
        "Você quer computadores hospedados na nuvem e automações como de ticket a PR em um agendamento.",
      ],
      pickB: [
        "Você está satisfeito com os modelos Claude e já paga um plano do Claude.",
        "Você quer as ferramentas da Anthropic em volta dele: revisão de código, revisão de segurança e plugins.",
      ],
      faq: [
        {
          q: "O que são os Droids da Factory?",
          a: "Os Droids são os agentes de programação da Factory. Eles rodam no app desktop da Factory, na Droid CLI, em modo headless no CI com `droid exec` e em computadores na nuvem hospedados pela Factory.",
        },
        {
          q: "A Factory funciona com modelos Claude?",
          a: "A Factory diz que suporta os principais modelos de fronteira, incluindo Claude Opus e Sonnet, além de modelos de pesos abertos e suas próprias chaves de API.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "Um agente de programação open source para qualquer modelo vs o agente de programação da Anthropic",
      title: "OpenCode vs Claude Code: agente de programação open source",
      description:
        "OpenCode vs Claude Code: um agente de programação MIT com mais de 200 provedores de modelos e modelos gratuitos, ou o agente da Anthropic nos planos do Claude.",
      h1: "OpenCode vs Claude Code: open source e qualquer modelo, ou o agente da Anthropic",
      lead: "O OpenCode e o Claude Code são agentes de programação com interface de terminal, app desktop, subagentes e MCP. O OpenCode é open source sob a licença MIT e funciona com modelos de mais de 200 provedores, incluindo modelos locais e um conjunto de modelos gratuitos. O Claude Code é o agente da Anthropic com modelos Claude, incluído nos planos pagos do Claude. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Licença: o OpenCode é MIT; o repositório do Claude Code é público, mas com todos os direitos reservados.",
        "Modelos: o OpenCode funciona com mais de 200 provedores por meio do Models.dev; o Claude Code roda com modelos Claude.",
        "Preço: o OpenCode é gratuito, com modelos gratuitos, e o OpenCode Go custa $10 por mês; o Claude Code vem com os planos do Claude a partir do Pro, a $20 por mês.",
        "Agendamento: o Claude Code tem tarefas agendadas na nuvem e no desktop, e o `/loop`; os agendamentos do OpenCode são experimentais e precisam ser ativados.",
      ],
      pickA: [
        "Você quer um agente open source e a liberdade de escolher qualquer modelo, incluindo os locais.",
        "Você quer começar de graça.",
      ],
      pickB: [
        "Você quer modelos Claude com as ferramentas da Anthropic: tarefas agendadas, revisão de código e extensões de IDE.",
        "Você já paga um plano do Claude.",
      ],
      faq: [
        {
          q: "O OpenCode é gratuito?",
          a: "Sim. O agente é gratuito e tem licença MIT, e vem com modelos gratuitos que têm um limite diário. O OpenCode Go custa $10 por mês e o Go Plus $40.",
        },
        {
          q: "O OpenCode pode usar modelos Claude?",
          a: "O OpenCode funciona com mais de 200 provedores de modelos, a Anthropic entre eles, então você pode usar modelos Claude com uma chave de API.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "Um construtor low-code de times de agentes de IA vs uma assistente de IA pronta para usar",
      title: "Relevance AI vs Lindy: AI Workforce ou assistente de IA?",
      description:
        "Relevance AI vs Lindy: uma plataforma low-code para criar times de agentes de IA, ou uma assistente hospedada para e-mail, agenda e Slack. Preços e agentes.",
      h1: "Relevance AI vs Lindy: montar um time de IA ou contratar uma assistente",
      lead: "A Relevance AI e a Lindy vendem a ideia de um funcionário de IA, em formatos diferentes. A Relevance AI é uma plataforma low-code para criar agentes especializados e conectá-los em uma \"AI Workforce\" multiagente, vendida a empresas pelo time de vendas. A Lindy é uma única assistente hospedada que trabalha na sua caixa de entrada, agenda, reuniões e Slack, com rotinas e aprovações. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Formato: a Relevance AI é um construtor de muitos agentes especializados; a Lindy é uma assistente por workspace a quem você passa tarefas.",
        "Preços: a página de preços da Relevance AI lista apenas o Enterprise, via time de vendas; a Lindy tem um teste gratuito com $50 em créditos e planos a partir de $29.99 por mês por usuário ativo.",
        "Vários agentes: os agentes da Relevance AI passam trabalho uns aos outros em um canvas; a documentação da Lindy descreve uma Lindy por workspace.",
        "Aprovações: a Lindy pergunta antes de qualquer ação com impacto externo; a Relevance AI tem escalonamentos e, no Enterprise, controles de horário de trabalho.",
      ],
      pickA: [
        "Você quer projetar vários agentes especializados e conectá-los, com uma equipe do fornecedor que ajuda na implantação.",
        "Você está comprando para uma empresa e espera passar pelo time de vendas.",
      ],
      pickB: [
        "Você quer uma única assistente para e-mail, agenda, reuniões e follow-ups, a partir de hoje.",
        "Você quer testar de graça antes de pagar.",
      ],
      faq: [
        {
          q: "Quanto custa a Lindy?",
          a: "Um teste gratuito dá $50 em créditos por 7 dias. Os planos pagos começam em $29.99 por mês por usuário ativo, com 3.000 créditos.",
        },
        {
          q: "A Relevance AI tem plano gratuito?",
          a: "A documentação diz que o plano Free foi descontinuado, e a página pública de preços lista apenas o Enterprise, via time de vendas.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "Os colegas de equipe de IA hospedados da xAI vs o agente de programação da Anthropic",
      title: "Grok Bot vs Claude Code: colegas de IA ou agente de programação?",
      description:
        "Grok Bot vs Claude Code: os Bots hospedados da xAI, com computador próprio, no Slack e nos seus apps, ou o agente de programação da Anthropic no seu repositório.",
      h1: "Grok Bot vs Claude Code: colegas para os seus apps ou um agente para o seu código",
      lead: "O Grok Bot e o Claude Code assumem trabalho de verdade, em lugares diferentes. O Grok Bot é o colega de equipe de IA hospedado da xAI: cada Bot ganha um computador próprio na nuvem, entra nas suas ferramentas, trabalha no Slack e no Microsoft Teams e roda rotinas. O Claude Code é o agente de programação da Anthropic: ele trabalha no seu repositório pelo terminal, por um IDE, pelo app desktop ou pela web. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o Grok Bot cuida de tarefas em apps de negócios como CRM, suporte, despesas e recrutamento; o Claude Code escreve e altera código.",
        "Onde roda: cada Grok Bot tem o próprio computador na nuvem e continua trabalhando com o notebook fechado; o Claude Code roda na sua máquina por padrão, com sessões na nuvem pela web.",
        "Como você trabalha com ele: você manda mensagens aos Grok Bots no app dele, no Slack, no Teams ou em uma chamada de vídeo; com o Claude Code, você trabalha em um terminal, um IDE, o app desktop ou a web.",
        "Preço: o Grok Bot tem Premium a $30, Super a $100 e Ultra a $200 por mês; o Claude Code vem com Claude Pro ($20), Max ($100), Ultra ($200), Team e Enterprise.",
      ],
      pickA: [
        "Você quer colegas de equipe de IA para trabalho de vendas, operações ou suporte dentro dos apps que o seu time já usa.",
        "Você quer que eles estejam no Slack e nas suas reuniões, trabalhando enquanto o seu notebook está fechado.",
      ],
      pickB: [
        "Seu trabalho está em uma base de código: funcionalidades, correções, revisões e refatorações.",
        "Você quer o agente trabalhando no seu próprio checkout, com as suas ferramentas e os seus testes.",
      ],
      faq: [
        {
          q: "Quanto custa o Grok Bot?",
          a: "O Premium custa $30 por mês, o Super $100 e o Ultra $200, com cobrança mensal, cada um com uso semanal do Grok Bot incluído; o uso extra é cobrado pelo custo dos tokens. Teams e Enterprise são via time de vendas.",
        },
        {
          q: "O Grok Bot pode escrever código?",
          a: "A xAI lista usos de engenharia, como reproduzir um bug na interface de um produto e abrir o ticket, e um guia para coordenar agentes de programação a partir do Linear. O Claude Code é feito para trabalhar diretamente no seu repositório.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "Os colegas de equipe de IA hospedados da xAI vs o agente pessoal open source da Nous Research",
      title: "Grok Bot vs Hermes Agent: Bots hospedados ou agente open source?",
      description:
        "Grok Bot vs Hermes Agent: os Bots hospedados da xAI, com computador próprio, ou o agente open source da Nous Research com Bots, rotinas e qualquer provedor.",
      h1: "Grok Bot vs Hermes Agent: colegas hospedados ou um agente que você mesmo roda",
      lead: "O Grok Bot e o Hermes Agent oferecem Bots nomeados que conversam entre si e rodam rotinas, e por isso são comparados. O Grok Bot é o produto hospedado da xAI: cada Bot tem o próprio computador na nuvem e trabalha no Slack, no Teams e nos seus apps. O Hermes Agent é o agente open source da Nous Research que você mesmo roda, com qualquer provedor de modelos, e tem um Bot Mode para vários Bots nomeados. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Hospedagem: o Grok Bot roda na nuvem da xAI; o Hermes Agent roda na sua máquina ou em um servidor, e os planos pagos do Nous Portal incluem um agente hospedado na nuvem.",
        "Licença e preço: o Grok Bot é de código fechado, a partir de $30 por mês; o Hermes Agent é MIT e gratuito, com uma assinatura opcional do Nous Portal a partir de $20 por mês.",
        "Modelos: o Grok Bot é feito com o Grok; o Hermes Agent funciona com muitos provedores, incluindo modelos locais.",
        "Onde você fala com ele: o Grok Bot trabalha no app dele, no Slack, no Teams e em chamadas de vídeo; o Hermes Agent funciona em um terminal, um app desktop ou apps de chat.",
      ],
      pickA: [
        "Você quer colegas de equipe hospedados, com computador próprio, trabalhando no Slack, no Teams e nas suas reuniões.",
        "Você prefere não rodar nada por conta própria.",
      ],
      pickB: [
        "Você quer um agente open source que você mesmo roda, no provedor de modelos que escolher.",
        "Você quer um agente que escreva e aprimore as próprias skills com o tempo.",
      ],
      faq: [
        {
          q: "O Hermes Agent é gratuito?",
          a: "Sim. Ele tem licença MIT e é gratuito; você paga o seu provedor de modelos. Uma assinatura opcional do Nous Portal tem os planos Free, Plus ($20 por mês), Super ($100) e Ultra ($200).",
        },
        {
          q: "O Grok Bot e o Hermes Agent têm Bots que conversam entre si?",
          a: "Sim. Os Grok Bots trocam mensagens entre si e se coordenam em chats em grupo; no Bot Mode do Hermes Agent, Bots nomeados trocam mensagens diretamente.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "Um workspace open source e auto-hospedável para colegas de trabalho de IA vs os Bots hospedados da xAI",
      title: "OpenBot vs Grok Bot: colegas de IA open source ou hospedados?",
      description:
        "OpenBot vs Grok Bot: o workspace MIT e auto-hospedável da CopilotKit para colegas de trabalho de IA, ou os Bots hospedados da xAI. Hospedagem, modelos e preços.",
      h1: "OpenBot vs Grok Bot: colegas de trabalho de IA que você hospeda ou que você aluga",
      lead: "O OpenBot e o Grok Bot dão a cada colega de trabalho de IA um computador próprio, com navegador e ferramentas, e os dois têm rotinas e aprovações. O OpenBot, da CopilotKit, é open source e auto-hospedável: roda no seu notebook ou no seu cluster Kubernetes, com os modelos e agentes que você escolher. O Grok Bot é o produto hospedado da xAI, feito com o Grok, que trabalha no Slack, no Teams e nos seus apps. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Hospedagem: o OpenBot roda no seu notebook ou no seu cluster Kubernetes, ou hospedado pela CopilotKit em acesso antecipado; o Grok Bot roda na nuvem da xAI.",
        "Licença: o template de aplicação do OpenBot é MIT, com o CopilotKit Intelligence licenciado à parte; o Grok Bot é de código fechado.",
        "Modelos: o OpenBot funciona com OpenAI, Claude, Gemini ou modelos abertos, e conecta os seus próprios agentes via AG-UI; o Grok Bot é feito com o Grok.",
        "Preço: o OpenBot é gratuito para projetos pessoais e custa até $29 por usuário ativo por mês no Business; o Grok Bot custa $30, $100 ou $200 por mês, conforme o plano.",
      ],
      pickA: [
        "Você quer auto-hospedar colegas de trabalho de IA e manter os seus dados e modelos sob o seu controle.",
        "Você quer personalizar o workspace ou oferecê-lo como white-label.",
      ],
      pickB: [
        "Você quer Bots hospedados que já funcionam no Slack, no Teams e nas suas reuniões.",
        "Você prefere não cuidar de infraestrutura.",
      ],
      faq: [
        {
          q: "O OpenBot é gratuito?",
          a: "É gratuito para projetos pessoais no seu notebook. O OpenBot for Business custa até $29 por usuário ativo por mês, mais 5% do gasto mensal com modelos acima de $5.000; você paga os provedores de modelos diretamente.",
        },
        {
          q: "O OpenBot é open source?",
          a: "O template de aplicação do OpenBot tem licença MIT. Ele usa o CopilotKit Intelligence, que tem licença à parte: gratuito em um notebook, com licenças de teste e de produção para Kubernetes.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "O agente da Anthropic para trabalho intelectual vs o agente dela para código",
      title: "Claude Cowork vs Claude Code: qual agente da Anthropic usar?",
      description:
        "Claude Cowork vs Claude Code: o agente da Anthropic para documentos, pesquisa e planilhas nos apps do Claude, ou o agente de programação para o seu repositório.",
      h1: "Claude Cowork vs Claude Code: dois agentes da Anthropic para trabalhos diferentes",
      lead: "O Claude Cowork e o Claude Code vêm da mesma empresa, rodam com modelos Claude, e a Anthropic diz que o Cowork usa a mesma arquitetura do Claude Code. Eles miram trabalhos diferentes. O Cowork cuida de trabalho intelectual nos apps do Claude, como pesquisa, documentos, planilhas e apresentações, principalmente na nuvem da Anthropic. O Claude Code trabalha no seu repositório de código, pelo terminal, por um IDE, pelo app para desktop ou pela web. Os dois vêm com os planos pagos do Claude. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o Cowork transforma um resultado em documentos, planilhas com fórmulas, apresentações ou pastas organizadas; o Claude Code lê o seu código, edita arquivos e roda comandos.",
        "Onde roda: as tarefas do Cowork rodam na nuvem da Anthropic e chegam aos arquivos locais pelo Claude Desktop; o Claude Code roda na sua máquina por padrão, com sessões na nuvem pela web.",
        "Onde você usa: o Cowork está nos apps do Claude para desktop, web e celular; o Claude Code está no terminal, em extensões de IDE, no app para desktop e na web.",
        "Agendamentos: o Cowork agenda tarefas de hora em hora a semanalmente, na nuvem; o Claude Code tem tarefas agendadas na nuvem e no desktop e o `/loop`.",
      ],
      pickA: [
        "O seu trabalho é pesquisa, documentos, planilhas ou apresentações.",
        "Você quer passar tarefas pelo celular ou pelo navegador e receber arquivos de volta.",
      ],
      pickB: ["O seu trabalho está em um repositório de código.", "Você quer um agente com o seu terminal, os seus testes e o git."],
      faq: [
        {
          q: "O Claude Cowork e o Claude Code vêm no mesmo plano?",
          a: "Sim. Os dois estão incluídos nos planos pagos do Claude: Pro, Max, Ultra, Team e Enterprise. O Claude Free não inclui nenhum dos dois.",
        },
        {
          q: "O Claude Cowork consegue escrever código?",
          a: "A Anthropic posiciona o Cowork para trabalho intelectual que não é de programação e o Claude Code para engenharia de software. Para tarefas que rodam só no seu computador, a Anthropic indica o Claude Code no app para desktop.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Os colegas de trabalho de IA da Anthropic e da OpenAI dentro dos apps de chat delas",
      title: "Claude Cowork vs ChatGPT Work: colegas de IA comparados",
      description:
        "Claude Cowork vs ChatGPT Work: agentes da Anthropic e da OpenAI para documentos, pesquisa e tarefas recorrentes. Planos, onde rodam, agendamentos e aprovações.",
      h1: "Claude Cowork vs ChatGPT Work: dois colegas de trabalho de IA dentro dos apps de chat",
      lead: "O Claude Cowork e o ChatGPT Work fazem o mesmo tipo de trabalho: você descreve um resultado no app de chat, e o agente planeja as etapas, trabalha com arquivos, apps conectados e um navegador, e devolve algo para revisar. O Cowork é da Anthropic, nos planos pagos do Claude. O ChatGPT Work é da OpenAI, nos planos do ChatGPT, e compartilha recursos e uso com o Codex. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Planos: o Cowork está nos planos pagos do Claude a partir do Pro, a $20 por mês, e não no Free; o ChatGPT Work tem acesso limitado no Free e no Go, no app para desktop, e acesso completo a partir do Plus, a $20 por mês.",
        "Onde roda: o Cowork roda na nuvem da Anthropic e chega aos arquivos locais pelo Claude Desktop; o ChatGPT Work roda na nuvem da OpenAI, ou localmente pelo app para desktop do ChatGPT.",
        "Agendamentos: o Cowork roda tarefas agendadas de hora em hora a semanalmente; o ChatGPT Work tem tarefas agendadas e gatilhos por eventos do Gmail, Slack ou GitHub nos planos elegíveis.",
        "Aprovações: o Cowork tem os modos Manual, Auto (com uma revisão de segurança) e Skip; o ChatGPT Work pausa para pedir aprovação de ações importantes, com modos de permissão no app para desktop.",
      ],
      pickA: [
        "Você já paga o Claude, ou quer os modelos da Anthropic para documentos e pesquisa.",
        "Você quer tarefas agendadas que rodam na nuvem enquanto o seu computador está desligado.",
      ],
      pickB: [
        "Você já paga o ChatGPT, ou quer experimentar no plano Free pelo app para desktop.",
        "Você quer tarefas acionadas por eventos do Gmail, Slack ou GitHub.",
      ],
      faq: [
        {
          q: "O ChatGPT Work é grátis?",
          a: "O ChatGPT Free e o Go têm acesso limitado ao ChatGPT Work no app para desktop. O Plus ($20 por mês) e o Pro têm acesso no desktop, na web e no celular.",
        },
        { q: "O Claude Cowork é grátis?", a: "Não. Ele está só nos planos pagos do Claude, a partir do Pro, a $20 por mês." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "O colega de trabalho de IA do Microsoft 365 vs o da Anthropic",
      title: "Copilot Cowork vs Claude Cowork: Microsoft ou Anthropic?",
      description:
        "Copilot Cowork vs Claude Cowork: o agente da Microsoft no Outlook, Teams e arquivos do Office, ou o da Anthropic nos apps do Claude. Licenças, custo e recursos.",
      h1: "Copilot Cowork vs Claude Cowork: o agente do Microsoft 365 ou o do Claude",
      lead: "O Copilot Cowork e o Claude Cowork compartilham um nome e uma ideia: passar uma tarefa de várias etapas a um agente e aprovar o que ele faz. O Copilot Cowork trabalha em todo o Microsoft 365, enviando e-mails, agendando reuniões e editando arquivos do Office no OneDrive e no SharePoint, e pode usar modelos GPT, Claude ou Grok. O Claude Cowork é o agente da Anthropic nos apps do Claude, com modelos Claude. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Onde está o seu trabalho: o Copilot Cowork trabalha no Outlook, no Teams, no OneDrive e no SharePoint e não alcança arquivos no seu dispositivo local; o Claude Cowork trabalha com conectores como Google Drive, Gmail, Microsoft 365 e Slack, e com arquivos locais pelo Claude Desktop.",
        "Custo: o Copilot Cowork exige uma licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada; o Claude Cowork vem com os planos pagos do Claude a partir do Pro, a $20 por mês.",
        "Modelos: o Copilot Cowork tem um seletor de modelos com modelos GPT, Claude e Grok, conforme as configurações do locatário; o Claude Cowork roda com modelos Claude.",
        "Contas: o Copilot Cowork é para contas corporativas ou de estudante, com contas pessoais em versão prévia; o Claude Cowork está nos planos individuais e de equipe do Claude.",
      ],
      pickA: [
        "A sua organização roda no Microsoft 365 e já tem licenças do Microsoft 365 Copilot.",
        "Você quer que o agente envie e-mails, marque reuniões e poste no Teams por você, com aprovação.",
      ],
      pickB: [
        "Você trabalha fora do Microsoft 365, ou quer arquivos locais e um navegador no seu próprio computador.",
        "Você quer um plano mensal fixo em vez de cobrança por crédito.",
      ],
      faq: [
        {
          q: "Quanto custa o Copilot Cowork?",
          a: "Ele exige uma licença do Microsoft 365 Copilot, e o uso é cobrado em Copilot Credits: $0.01 por crédito no pagamento conforme o uso, ou um plano pré-pago de um ano com descontos de 5% a 20%.",
        },
        {
          q: "O Copilot Cowork usa o Claude?",
          a: "O seletor de modelos dele inclui Claude Opus, Sonnet e Fable, ao lado de modelos GPT e Grok, conforme as configurações do locatário; locatários no EU Data Boundary recebem só modelos GPT.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "O modo Work do ChatGPT vs o agente de programação da OpenAI",
      title: "ChatGPT Work vs Codex: qual dos dois você deve usar?",
      description:
        "ChatGPT Work vs Codex: o modo Work da OpenAI para documentos e análises, ou o agente de código para repositórios. Compartilham recursos e uso; veja o que muda.",
      h1: "ChatGPT Work vs Codex: o mesmo motor, trabalhos diferentes",
      lead: "O ChatGPT Work e o Codex são agentes da OpenAI, e a OpenAI diz que o Work compartilha recursos principais, execução e limites de uso com o Codex. A diferença está no que cada um faz. O ChatGPT Work é um modo do ChatGPT para tarefas que terminam em algo para revisar, como apresentações, planilhas e análises. O Codex é o agente de programação, em uma CLI de terminal, uma extensão de IDE, o app para desktop do ChatGPT e a nuvem. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o ChatGPT Work entrega documentos, apresentações, planilhas e análises; o Codex lê, edita e roda código em um repositório.",
        "Onde você usa: o ChatGPT Work está no ChatGPT na web, no desktop e no celular; o Codex está em uma CLI de terminal, uma extensão de IDE, o app para desktop do ChatGPT e o Codex Cloud.",
        "Uso: eles compartilham os limites de uso e os créditos do Codex.",
        "Open source: a CLI, o SDK e o App Server do Codex são Apache-2.0; o ChatGPT Work não é open source.",
      ],
      pickA: ["A sua tarefa termina em um documento, uma apresentação ou uma análise.", "Você quer começá-la pelo ChatGPT no celular ou na web."],
      pickB: [
        "A sua tarefa é código: funcionalidades, correções e revisões.",
        "Você quer um agente no seu terminal ou IDE, ou no CI com `codex exec`.",
      ],
      faq: [
        {
          q: "O ChatGPT Work e o Codex compartilham o uso?",
          a: "Sim. A OpenAI diz que o ChatGPT Work compartilha recursos principais, execução e limites de uso com o Codex, incluindo os créditos.",
        },
        {
          q: "Quais planos do ChatGPT incluem o Work?",
          a: "Free e Go têm acesso limitado no app para desktop; Plus ($20 por mês), Pro e Business têm acesso no desktop, na web e no celular.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "O colega de trabalho de IA da Anthropic nos apps do Claude vs os Bots da xAI com computador próprio",
      title: "Claude Cowork vs Grok Bot: colegas de IA comparados",
      description:
        "Claude Cowork vs Grok Bot: agente da Anthropic para documentos e pesquisa no Claude, ou Bots da xAI com computador próprio na nuvem, no Slack e nos seus apps.",
      h1: "Claude Cowork vs Grok Bot: um agente de tarefas no Claude ou uma equipe de Bots",
      lead: "O Claude Cowork e o Grok Bot são colegas de trabalho de IA que continuam trabalhando na nuvem enquanto você está fora. O Claude Cowork é o agente da Anthropic nos apps do Claude: você passa uma tarefa a ele e recebe arquivos de volta. O Grok Bot é o da xAI: Bots com computador próprio na nuvem que entram nas suas ferramentas, trabalham no Slack, no Microsoft Teams e em chamadas de vídeo e passam trabalho uns para os outros. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Formato: o Claude Cowork recebe tarefas de você, com subagentes dentro de uma tarefa; o Grok Bot dá a cada Bot um trabalho próprio, e os Bots trocam mensagens entre si e se coordenam em chats em grupo.",
        "Onde você trabalha com ele: o Claude Cowork está nos apps do Claude para desktop, web e celular; o Grok Bot está no app dele, no Slack, no Teams e em chamadas de vídeo.",
        "Planos: o Claude Cowork vem com os planos pagos do Claude a partir do Pro, a $20 por mês; o Grok Bot está incluído nos planos Premium ($30 por mês), Super e Ultra.",
        "Modelos: o Claude Cowork roda com modelos Claude; o Grok Bot é feito com o Grok.",
      ],
      pickA: ["Você passa documentos, pesquisas e planilhas adiante e quer arquivos de volta.", "Você já usa o Claude."],
      pickB: [
        "Você quer vários Bots com trabalhos próprios atuando no Slack e nos apps da sua equipe.",
        "Você quer Bots nas suas reuniões.",
      ],
      faq: [
        {
          q: "O Grok Bot pode participar de reuniões?",
          a: "Sim. A xAI diz que você pode adicionar um Bot a uma chamada do Google Meet, do Zoom ou do Teams, onde ele escuta, entra no chat quando pode ajudar e cuida dos próximos passos depois.",
        },
        {
          q: "O Claude Cowork pode rodar com o meu computador desligado?",
          a: "As tarefas na nuvem continuam rodando nos servidores da Anthropic; só o trabalho que precisa de arquivos locais ou do seu navegador espera pelo Claude Desktop.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "O agente coordenador do Cursor para código vs os Bots da xAI para trabalho nos seus apps",
      title: "Cursor Projects vs Grok Bot: agentes coordenadores comparados",
      description:
        "Cursor Projects vs Grok Bot: um agente coordenador que roda muitos agentes na nuvem no seu código, ou os Bots da xAI no Slack e em seus apps. Planos e recursos.",
      h1: "Cursor Projects vs Grok Bot: uma equipe de agentes para código ou para todo o resto",
      lead: "O Cursor Projects e o Grok Bot colocam um agente no comando de outros. Em um Cursor Project, um agente coordenador planeja uma funcionalidade, uma migração ou um app e delega a programação a muitos agentes na nuvem em paralelo. O Grok Bot é o conjunto de colegas de equipe de IA da xAI, cada um com o próprio computador na nuvem, trabalhando no Slack, no Teams e nos seus apps, com um Bot capaz de gerenciar os outros. Os dois começam em planos de $30 por mês. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Trabalho: o Cursor Projects é para trabalho de software em um repositório do GitHub; o Grok Bot cuida de trabalho em apps de negócios, como CRM, suporte, despesas e recrutamento.",
        "Coordenação: o coordenador de um Cursor Project cria e gerencia agentes trabalhadores, e nos Multiplayer Projects os coordenadores trocam mensagens entre si; os Grok Bots trocam mensagens entre si e se coordenam em chats em grupo.",
        "Estado compartilhado: um Cursor Project guarda arquivos compartilhados (preferências, anotações, fluxos de trabalho) e um quadro de tarefas; os Grok Bots guardam na memória como a sua equipe trabalha.",
        "Gatilhos: o Cursor Projects age a partir de agendamentos, canais do Slack e pull requests; os Grok Bots rodam rotinas com agendamento e trabalham no Slack e no Teams.",
      ],
      pickA: [
        "Você quer um esforço longo de programação planejado e dividido entre muitos agentes.",
        "A sua equipe já usa o Cursor e o GitHub.",
      ],
      pickB: [
        "Você quer colegas de equipe de IA para operações, vendas ou suporte nos apps que você já usa.",
        "Você quer que eles estejam no Slack, no Teams e nas reuniões.",
      ],
      faq: [
        {
          q: "Quais planos do Cursor incluem o Projects?",
          a: "Todos os planos com Cloud Agents: Premium ($30 por mês) e superiores, Teams, Enterprise e planos pagos antigos. Não estão incluídos o Free, o Plus nem o Hobby antigo.",
        },
        {
          q: "Um Cursor Project continua trabalhando com o meu notebook fechado?",
          a: "Sim. Um Project roda no próprio computador na nuvem; o coordenador só inicia um agente local quando algo precisa ser testado na sua máquina.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "O colega de trabalho de IA da Microsoft vs o construtor de agentes da Microsoft",
      title: "Copilot Cowork vs Copilot Studio: qual é a diferença?",
      description:
        "Copilot Cowork vs Copilot Studio: o agente do Microsoft 365 que faz tarefas por você, ou o estúdio low-code para criar agentes e workflows. Custo e recursos.",
      h1: "Copilot Cowork vs Copilot Studio: usar um agente ou criar um",
      lead: "O Copilot Cowork e o Copilot Studio são produtos da Microsoft, os dois cobrados em Copilot Credits, e compartilham o saldo pré-pago de créditos do locatário. A diferença está em quem faz o trabalho. O Copilot Cowork é um agente do Microsoft 365 Copilot a quem você passa uma tarefa, e ele envia e-mails, marca reuniões e edita arquivos do Office com a sua aprovação. O Copilot Studio é onde os criadores montam os próprios agentes, fluxos de trabalho e apps e os publicam no Teams, no Microsoft Copilot, em sites ou em uma linha telefônica. Um fluxo de trabalho do Copilot Studio pode até iniciar uma tarefa do Cowork como uma das etapas. Veja a comparação e onde o Crewmark se encaixa.",
      differences: [
        "Função: o Copilot Cowork faz uma tarefa por você no Outlook, Teams, Word, Excel, PowerPoint, OneDrive e SharePoint; o Copilot Studio é um estúdio low-code para criar agentes, fluxos de trabalho e apps que outras pessoas usam.",
        "Quem usa: o Copilot Cowork é para qualquer pessoa com uma licença do Microsoft 365 Copilot e o Cowork ativado; o Copilot Studio é para criadores, e os agentes publicados podem atender funcionários ou clientes em um site ou em uma linha telefônica.",
        "Custo: o Copilot Cowork exige uma licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada; o Copilot Studio vende pacotes de 25.000 créditos a $200 por mês (cobrança anual) ou $0.01 por crédito no pagamento conforme o uso, e a licença de criador custa $0.",
        "Automação: o Copilot Cowork roda prompts agendados e gatilhos de e-mail ou do Teams; o Copilot Studio acrescenta gatilhos de agentes, aprovações em várias etapas com um conector Human review e fluxos de trabalho que podem chamar o Cowork como uma das etapas.",
      ],
      pickA: [
        "Você quer um agente que faça trabalho no Microsoft 365 por você hoje, sem criar nada.",
        "Você quer aprovar cada e-mail, reunião ou post no Teams antes do envio.",
      ],
      pickB: [
        "Você quer criar um agente ou um fluxo de trabalho que outras pessoas, ou clientes, usem.",
        "Você precisa de conectores, aprovações em várias etapas, canais de publicação ou ambientes separados de desenvolvimento, teste e produção.",
      ],
      faq: [
        {
          q: "O Copilot Cowork faz parte do Copilot Studio?",
          a: "Não, são produtos separados. Eles compartilham o saldo pré-pago de Copilot Credits do locatário, e um fluxo de trabalho do Copilot Studio pode iniciar ou retomar uma tarefa do Copilot Cowork pelo nó Copilot.",
        },
        {
          q: "Quanto custa o Copilot Studio?",
          a: "O Licensing Guide da Microsoft lista $200 por mês (cobrança anual) por um pacote de 25.000 Copilot Credits por locatário, ou $0.01 por crédito no pagamento conforme o uso. Os créditos do pacote não usados não passam para o mês seguinte. A licença de criador custa $0, e o teste gratuito não pode publicar agentes.",
        },
      ],
    },
  },
};
