import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork: custo, créditos, licenciamento e vs Claude Cowork",
    description:
      "O Microsoft Copilot Cowork explicado: o que o agente do Microsoft 365 faz, custo em Copilot Credits, licenciamento, skills, configuração e vs Claude Cowork.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Microsoft",
    title: "Copilot Cowork: o que o agente da Microsoft para o Microsoft 365 faz e como é cobrado",
    lead: "O Copilot Cowork é um agente do Microsoft 365 Copilot que executa tarefas de várias etapas em todo o Microsoft 365. Ele envia e-mails, agenda reuniões, cria e edita arquivos do Word, Excel, PowerPoint e PDF, posta no Teams, gerencia arquivos do OneDrive e do SharePoint, pesquisa na sua organização e faz pesquisas aprofundadas, e pede aprovação antes de ações sensíveis. Ele chegou à disponibilidade geral para contas corporativas ou de estudante em junho de 2026. Veja o que ele faz, como funcionam o licenciamento e os Copilot Credits, como configurar, como funcionam as aprovações e como ele se compara ao Claude Cowork, ao Claude Code e ao Codex.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Copilot Cowork e para que ele serve",
      text: [
        "A Microsoft descreve o Cowork como um sistema agêntico que executa tarefas de várias etapas por você em todo o Microsoft 365. Os usos previstos incluem pesquisar um assunto, escrever um documento e enviá-lo por e-mail às partes interessadas em uma única conversa, resumos e relatórios recorrentes, e tarefas que reagem a e-mails recebidos ou a mensagens do Teams.",
      ],
      points: [
        "Ele roda na nuvem da Microsoft, em um ambiente isolado. Os arquivos são criados e lidos no OneDrive e no SharePoint; ele não acessa arquivos no seu dispositivo local.",
        "Ele pode usar o seu navegador: no Cowork na web, as tarefas de navegador rodam em uma aba oculta do Microsoft Edge no seu próprio dispositivo, com os logins que você já tem.",
        "Ele usa modelos de vários fabricantes: um seletor de modelos, em Auto por padrão, oferece modelos GPT, Claude e Grok, conforme as configurações do locatário. Locatários no EU Data Boundary recebem só modelos GPT.",
        "Skills e plugins: você pode adicionar até 50 skills personalizadas como arquivos `SKILL.md` no OneDrive. Os plugins por função e setor incluem Accounting, Finance e Capital Markets para o Cowork; outros plugins e conectores cobrem Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk e apps MCP.",
        "Ele repete trabalho: até 25 prompts agendados por usuário, escritos em linguagem comum, além de tarefas orientadas a eventos que rodam quando chega um e-mail correspondente ou quando uma mensagem é postada no Teams.",
        "Ele acompanha tarefas: uma visualização Tasks filtra por In progress, Needs input, Done e Failed, uma página Automations lista as tarefas agendadas e orientadas a eventos, e os Projects (outubro de 2026) mantêm tarefas, instruções e arquivos relacionados juntos.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Custo, créditos e licenciamento do Copilot Cowork",
      text: [
        "Segundo o Microsoft Learn, o Suporte da Microsoft e o Copilot Credits Guide da Microsoft (novembro de 2026), conferidos em 13 de novembro de 2026, em dólares americanos. O Cowork é cobrado pelo uso em Copilot Credits, além de uma licença do Microsoft 365 Copilot. Uma tarefa não tem custo fixo em créditos: ele varia com o modelo, o tempo de execução, o contexto e as ferramentas usadas.",
      ],
      headers: ["Item", "Custo ou requisito"],
      rows: [
        ["Licença do Microsoft 365 Copilot", "Obrigatória para contas corporativas ou de estudante e atribuída ao usuário; o preço não aparece na documentação do Cowork"],
        ["Copilot Credits, pagamento conforme o uso", "$0.01 por Copilot Credit, cobrado mensalmente depois do uso"],
        ["Copilot Credit Pre-Purchase Plan (P3)", "Um pacote de um ano pago antecipadamente, com descontos de 5% (300.000 créditos) a 20% (300.000.000 créditos); os créditos não usados expiram no fim do prazo"],
        ["Configuração pelo admin", "Cowork ativado, cobrança por uso ligada e uma política de gastos que selecione o Cowork; os admins podem definir limites de créditos por usuário ou por grupo"],
        ["Contas pessoais da Microsoft", "Em versão prévia; exigem uma assinatura qualificada do Microsoft 365, preço não informado"],
        ["Educação", "Professores e funcionários podem usar; alunos não são elegíveis"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Copilot Cowork",
      steps: [
        {
          title: "Consiga a licença",
          text: "Em uma conta corporativa ou de estudante, você precisa de uma licença do Microsoft 365 Copilot atribuída a você. As contas pessoais estão em versão prévia e exigem uma assinatura qualificada do Microsoft 365.",
        },
        {
          title: "Peça a um admin para ativar",
          text: "Um admin ativa o Cowork, liga a cobrança por uso e dá acesso a você por meio de uma política de gastos que selecione o Cowork. O uso do navegador também exige o Cowork Browsing ativado.",
        },
        {
          title: "Abra o Cowork onde você trabalha",
          text: "Na web (Edge ou Chrome recomendados), no app para desktop Microsoft Copilot para Windows e macOS, no app para celular para iOS e Android, ou dentro do Outlook e do Teams.",
        },
        {
          title: "Descreva a tarefa",
          text: "Por exemplo: pesquise um assunto, escreva um documento e envie por e-mail para quem precisa dele. Deixe o modelo em Auto ou escolha um; o esforço de raciocínio fica em Medium por padrão.",
        },
        {
          title: "Adicione skills e automações",
          text: "Coloque skills personalizadas no OneDrive como arquivos `SKILL.md`, escreva prompts agendados em linguagem comum, ou defina uma tarefa para rodar quando chegar um e-mail ou uma mensagem do Teams correspondente.",
        },
      ],
      source: { label: "Fonte: Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o Copilot Cowork mantém você no controle",
      points: [
        "Antes de ações sensíveis, como enviar e-mails, postar no Teams ou agendar reuniões, o Cowork mostra uma caixa de aprovação com uma prévia. Ações de risco médio e alto mostram um nível de risco.",
        "Você pode aprovar uma vez, dispensar as confirmações para ações parecidas pelo resto da conversa (para e-mail e Teams, limitado a um destinatário, a um domínio ou sempre) ou cancelar.",
        "Tarefas orientadas a eventos usam por padrão o modo rascunhar e aprovar, e você pode pausar, retomar ou cancelar qualquer tarefa.",
        "Ele não consegue excluir arquivos nem pastas no OneDrive ou no SharePoint, e devolve o navegador a você para CAPTCHAs, senhas, códigos de MFA e alterações de conta.",
        "Os admins controlam o acesso por políticas de gastos, definem limites de créditos por usuário ou por grupo e podem desativar famílias de modelos, inclusive as da Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code e Codex",
      text: [
        "Dados da documentação e das páginas de preços de cada fornecedor, conferidos em 13 de novembro de 2026. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker); veja também o [guia do Claude Cowork](/personal-agent/claude-cowork) e [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Lado a lado: [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). Guias: [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["Feito por", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["Feito para", "Tarefas de várias etapas em todo o Microsoft 365", "Trabalho intelectual que não é de programação", "Programação: lê o seu código, edita arquivos, roda comandos", "Programação: inspeciona, edita e roda código em um repositório"],
        ["Onde roda", "Nuvem da Microsoft, com OneDrive e SharePoint; sem arquivos locais", "Nuvem da Anthropic; arquivos locais pelo Claude Desktop", "Terminal, IDE e app para desktop na sua máquina; sessões na nuvem pela web", "CLI, extensão de IDE e app para desktop do ChatGPT; Codex Cloud"],
        ["Modelos", "Modelos GPT, Claude e Grok, conforme as configurações do locatário", "Modelos Claude", "Modelos Claude", "Modelos da OpenAI"],
        ["Como você paga", "Licença do Microsoft 365 Copilot mais Copilot Credits", "Planos pagos do Claude, Pro a partir de $20/mês", "Planos pagos do Claude, Pro a partir de $20/mês; ou créditos de API", "Planos do ChatGPT, como o Plus a $20/mês; ou uma chave de API da OpenAI"],
        ["Trabalho recorrente", "Prompts agendados; eventos de e-mail, Teams e conectores", "Tarefas agendadas, de hora em hora a semanal, na nuvem", "Tarefas agendadas na nuvem e no desktop, `/loop`", "Tarefas agendadas; eventos do Gmail, Slack e GitHub"],
        ["Aprovações", "Caixa de aprovação com prévia antes de ações sensíveis", "Modos Manual, Auto ou Skip", "Modos de permissão de `default` a `bypassPermissions`", "Ask for approval, Approve for me ou acesso total"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Cowork para o Microsoft 365. O Crewmark para o seu repositório.",
      text: [
        "O Copilot Cowork leva tarefas adiante no Outlook, no Teams, no OneDrive e no SharePoint. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado, para que o trabalho de engenharia, SEO e marketing em um repositório continue andando com agendamento.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Copilot Cowork" },
  mid: {
    title: "Quer um colega de trabalho de IA para o seu código?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Copilot Cowork",
    items: [
      {
        q: "O que é o Copilot Cowork?",
        a: "Um agente do Microsoft 365 Copilot que executa tarefas de várias etapas em todo o Microsoft 365: ele envia e-mails, agenda reuniões, cria e edita arquivos do Word, Excel, PowerPoint e PDF, posta no Teams, gerencia arquivos do OneDrive e do SharePoint, pesquisa na sua organização e faz pesquisas aprofundadas. Ele pede aprovação antes de ações sensíveis.",
      },
      {
        q: "Quanto custa o Copilot Cowork?",
        a: "O uso é cobrado em Copilot Credits, além de uma licença do Microsoft 365 Copilot. No pagamento conforme o uso, custa $0.01 por crédito, cobrado mensalmente depois do uso; um Pre-Purchase Plan de um ano dá descontos de 5% a 20%. Os créditos por tarefa variam com o modelo, o tempo de execução, o contexto e as ferramentas usadas.",
      },
      {
        q: "Qual licenciamento o Copilot Cowork exige?",
        a: "Para uma conta corporativa ou de estudante: uma licença do Microsoft 365 Copilot atribuída a você, o Cowork ativado e a cobrança por uso ligada por um admin, com uma política de gastos que selecione o Cowork. As contas pessoais da Microsoft estão em versão prévia e exigem uma assinatura qualificada do Microsoft 365. Na educação, professores e funcionários podem usar; alunos não.",
      },
      {
        q: "Como entrar no Copilot Cowork?",
        a: "Entre com a conta que tem acesso: uma conta corporativa ou de estudante (em disponibilidade geral) ou uma conta pessoal da Microsoft (versão prévia). O Cowork está na web, no app para desktop Microsoft Copilot para Windows e macOS, no app para celular para iOS e Android, e dentro do Outlook e do Teams.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot: qual é a diferença?",
        a: "O Copilot Cowork é um agente do Microsoft 365 Copilot. Para usá-lo, você precisa de uma licença do Microsoft 365 Copilot mais a cobrança por uso, porque o uso do Cowork é cobrado em Copilot Credits além da licença.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork: qual é a diferença?",
        a: "O Copilot Cowork trabalha em todo o Microsoft 365, guarda os arquivos no OneDrive e no SharePoint, não alcança arquivos locais e é cobrado em Copilot Credits além de uma licença. O Claude Cowork é o agente da Anthropic nos apps do Claude, vem com os planos pagos do Claude a partir do Pro, a $20 por mês, e alcança arquivos locais pelo Claude Desktop. O seletor de modelos do Copilot Cowork também pode incluir modelos Claude, conforme as configurações do locatário.",
      },
    ],
  },
  cta: {
    title: "Passe as tarefas do Microsoft 365 para o Cowork. Dê um trabalho aos seus agentes de programação também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido na documentação do Copilot Cowork no Microsoft Learn, no Copilot Credits Guide da Microsoft e no Suporte da Microsoft em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Microsoft, a Anthropic ou a OpenAI e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
