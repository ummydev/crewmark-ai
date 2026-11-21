import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: o que é, preços, configuração e vs Claude Code",
    description:
      "O Claude Cowork explicado: o agente da Anthropic para trabalho que não é de programação nos apps do Claude. Preços, configuração, agendamentos e vs Claude Code.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Anthropic",
    title: "Claude Cowork: o que o colega de trabalho de IA da Anthropic faz e como usar",
    lead: "O Claude Cowork é o agente da Anthropic para trabalho intelectual nos apps do Claude. Você descreve um resultado, como um relatório de pesquisa, uma planilha, uma apresentação ou uma pasta organizada, e o Claude planeja as etapas e as executa nos seus arquivos, apps conectados e em um navegador, depois entrega o resultado. As tarefas rodam na nuvem da Anthropic e continuam com o notebook fechado. Veja o que ele faz, quais planos o incluem, como configurar, como ele pergunta antes de agir e como se diferencia do Claude Code.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Claude Cowork",
      points: [
        "Um agente para trabalho que não é de programação: pesquisa, análise, documentos, planilhas com fórmulas que funcionam, apresentações e trabalho com arquivos. O próprio FAQ da Anthropic posiciona o Cowork para isso e o Claude Code para engenharia de software.",
        "Ele roda na nuvem: as sessões rodam em um ambiente isolado nos servidores da Anthropic e ficam salvas na sua conta do Claude. No Pro, no Max e no Ultra, as tarefas novas rodam na nuvem desde 6 de outubro de 2026.",
        "Ele chega ao seu próprio computador pelo Claude Desktop: arquivos locais, conectores locais, uso do navegador e uso do computador precisam do app para desktop aberto nessa máquina.",
        "Ele repete trabalho: tarefas agendadas rodam a cada hora, diariamente, semanalmente ou em dias úteis, cada uma como uma sessão própria na nuvem.",
        "Ele faz parte do Claude: desde setembro de 2026, o Cowork vem sendo incorporado às conversas comuns do Claude.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preços do Claude Cowork: quais planos o incluem",
      text: [
        "Preços de claude.com/pricing em 13 de novembro de 2026, em dólares americanos, sem impostos. A Anthropic não publica quanto uso do Cowork cada plano inclui; o card do Pro avisa que o Cowork consome os limites mais rápido do que o chat.",
      ],
      headers: ["Plano", "Preço", "Claude Cowork"],
      rows: [
        ["Free", "$0", "Não incluído"],
        ["Pro", "$20/mês, ou $17/mês no plano anual ($200 por ano)", "Incluído"],
        ["Max", "$100/mês", "Incluído"],
        ["Ultra", "$200/mês", "Incluído"],
        ["Team (de 2 a 150 pessoas)", "Licença Standard $20/mês no plano anual ou $25 no mensal; licença Premium $100 ou $125", "Incluído; web e celular em beta"],
        ["Enterprise", "$20/licença/mês no plano anual, mínimo de 20 licenças, mais o uso a preços de API", "Incluído; sessões na nuvem, web e celular desativados até um proprietário ativá-los"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Cowork",
      steps: [
        { title: "Assine um plano pago do Claude", text: "Pro, Max, Ultra, Team ou Enterprise. No Enterprise, pode ser preciso que um proprietário ative o Cowork." },
        { title: "Instale o Claude Desktop se quiser trabalho local", text: "O Cowork também roda na web e no iOS e Android, mas arquivos locais, uso do navegador e uso do computador precisam do Claude Desktop para macOS ou Windows (o Linux está em beta)." },
        { title: "Descreva o resultado, não as etapas", text: "Diga o que você quer receber e onde estão os insumos: arquivos, um app conectado como Google Drive, Gmail, Microsoft 365 ou Slack, ou a web." },
        { title: "Escolha como ele pergunta", text: "Escolha Manual para aprovar cada ação, ou Auto para deixar uma revisão de segurança aprovar as ações de rotina. Você também pode definir cada ferramenta de conector como sempre permitida, com aprovação obrigatória ou bloqueada." },
        { title: "Transforme em um agendamento", text: "Digite `/schedule` em uma tarefa, ou use a página Scheduled, e escolha a cada hora, diariamente, semanalmente, em dias úteis ou sob demanda." },
      ],
      source: { label: "Fonte: central de ajuda da Anthropic, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o Claude Cowork mantém você no controle",
      points: [
        "Três modos de aprovação: o Manual pergunta antes das ações; o Auto faz uma revisão de segurança de cada ação e bloqueia as inseguras, voltando a perguntar se continuar esbarrando em bloqueios; o Skip não pergunta. O Auto é o padrão no Pro, Max, Ultra e Team, e o Manual no Enterprise.",
        "Ele pergunta antes de excluir arquivos permanentemente, e o uso do computador pergunta antes de cada aplicativo.",
        "Admins do Team e do Enterprise podem desativar o Auto e exigir aprovação para cada ferramenta de conector com permissão de escrita.",
        "Você pode redirecionar ou parar uma tarefa no meio da execução pelo app para desktop, pela web ou pelo celular.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work e Copilot Cowork",
      text: [
        "Dados das próprias páginas de cada fornecedor, conferidos em 13 de novembro de 2026. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker).",
        "Lado a lado: [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). Guias: [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["Feito por", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["Feito para", "Trabalho intelectual que não é de programação", "Engenharia de software", "Tarefas que terminam em algo para revisar", "Trabalho em todo o Microsoft 365"],
        ["Onde roda", "Nuvem da Anthropic; local pelo Claude Desktop", "Na sua máquina por padrão; sessões na nuvem pela web", "Nuvem da OpenAI, ou o seu computador pelo app para desktop", "Nuvem da Microsoft, com OneDrive e SharePoint"],
        ["Quem pode usar", "Planos pagos do Claude", "Planos pagos do Claude", "Planos do ChatGPT; limitado no Free e no Go", "Licença do Microsoft 365 Copilot mais Copilot Credits"],
        ["Agendamentos", "De hora em hora a semanal, na nuvem", "Tarefas agendadas na nuvem e no desktop, `/loop`", "Tarefas agendadas e gatilhos por evento", "Prompts agendados e tarefas acionadas por eventos"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Cowork para os seus documentos. O Crewmark para o seu código.",
      text: [
        "O Claude Cowork cuida do trabalho intelectual que você passa para ele. O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, metas em números, horário de trabalho e um heartbeat, para que o trabalho de engenharia, SEO e marketing em um repositório seja feito com agendamento e acompanhado em um quadro.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Entre os [cargos de funcionários de IA](/ai-employees), como um [especialista em SEO com IA](/ai-employees/seo-specialist)." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Claude Cowork" },
  mid: {
    title: "Quer um colega de trabalho de IA para o seu código?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Claude Cowork",
    items: [
      {
        q: "O que é o Claude Cowork?",
        a: "O agente da Anthropic para trabalho intelectual que não é de programação, nos apps do Claude. Você descreve um resultado e ele executa as etapas nos seus arquivos, apps conectados e em um navegador, depois entrega arquivos prontos, como documentos, planilhas e apresentações.",
      },
      {
        q: "Quanto custa o Claude Cowork?",
        a: "Ele vem com os planos pagos do Claude: Pro a $20 por mês (ou $17 por mês no plano anual), Max a $100, Ultra a $200, e licenças do Team e do Enterprise. O Claude Free não inclui o Cowork.",
      },
      {
        q: "Claude Cowork vs Claude Code: qual é a diferença?",
        a: "O Cowork é para trabalho intelectual, como pesquisa, documentos e planilhas, nos apps do Claude; o Claude Code é o agente da Anthropic para engenharia de software no seu repositório. A Anthropic diz que o Cowork usa a mesma arquitetura do Claude Code.",
      },
      {
        q: "O Claude Cowork está disponível no Windows e no celular?",
        a: "Sim. O Claude Desktop roda o Cowork no macOS e no Windows (Linux em beta), e ele está na web e no Claude para iOS e Android no Pro, Max, Ultra e Team. Arquivos locais, uso do navegador e uso do computador precisam do app para desktop.",
      },
      {
        q: "O Claude Cowork consegue rodar tarefas com agendamento?",
        a: "Sim, em todos os planos pagos. Use `/schedule` em uma tarefa ou a página Scheduled; cada execução é uma sessão própria na nuvem, então o seu computador pode ficar desligado, a menos que a tarefa precise de arquivos locais.",
      },
      {
        q: "O Claude Cowork funciona com o notebook fechado?",
        a: "As tarefas na nuvem funcionam: elas continuam rodando nos servidores da Anthropic. O trabalho que precisa dos seus arquivos locais, conectores locais ou navegador deixa de alcançá-los até o Claude Desktop ser aberto de novo.",
      },
    ],
  },
  cta: {
    title: "Passe os documentos para o Cowork. Dê um trabalho aos seus agentes também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido em claude.com/product/cowork, claude.com/pricing e na central de ajuda da Anthropic em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a OpenAI ou a Microsoft e sem endosso delas. Claude e Claude Code são marcas da Anthropic.",
};
