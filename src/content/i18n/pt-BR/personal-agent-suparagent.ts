import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent: colegas de IA open source, preços e configuração",
    description:
      "O Suparagent é um workspace open source para colegas de IA que rodam no Claude Code, Codex, Gemini CLI ou Cursor. O que é, preços, configuração e comparações.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Open source",
    title: "Suparagent: um workspace open source para colegas de trabalho de IA",
    lead: "O Suparagent é um “workspace para colegas de trabalho de IA” (“workspace for AI coworkers”) open source. Você cria agentes com nome, cada um com uma função, um workspace, memória, rotinas e configurações de aprovação, e eles rodam em um motor que você já usa, como Claude Code, Codex, Gemini CLI ou Cursor. Ele roda como app para desktop ou no seu próprio servidor; um serviço hospedado em suparagent.ai é um produto à parte. O app se chamava Open Dots, depois Open Duet, e passou a se chamar Suparagent em 9 de novembro de 2026, na versão 0.8.5.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Suparagent",
      points: [
        "Colegas com nome: cada agente tem nome, função, motor, workspace, memória e configurações de aprovação, com templates e skills para começar.",
        "Motores que você já usa: Claude Code ou Codex CLI, Gemini CLI, Google Gemini pelo Antigravity, Cursor, outros agentes de CLI pelo Agent Client Protocol (ACP), OpenRouter, ou APIs compatíveis com a OpenAI, como Ollama ou LM Studio. Nenhum modelo vem incluído.",
        "Trabalho e agendamentos: um quadro de tarefas e um calendário para atribuir trabalho, agendar execuções únicas e revisar tentativas, e rotinas que rodam com agendamento, por webhook ou sob demanda enquanto o backend estiver rodando.",
        "Equipes de agentes: um agente líder (Claude ou Codex) delega a especialistas, e os agentes se coordenam em salas compartilhadas.",
        "Aprovações: Ask first, Accept edits, Approve for me (Claude, Codex e Cursor) e Plan only. Uma rotina nunca aprova uma ação sozinha, e uma visualização Today reúne aprovações, perguntas e resultados das rotinas.",
        `Open source sob a licença Apache 2.0 em [github.com/Anil-matcha/suparagent](${repo}), com cerca de 7.050 estrelas em 13 de novembro de 2026, em um repositório criado em maio de 2023. Ele é recente e está mudando: o servidor auto-hospedado, os computadores em Docker, as ferramentas de navegador e a prévia do app nativo para macOS são experimentais.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preços do Suparagent",
      text: [
        "Nenhuma taxa do Suparagent é informada para o app para desktop ou para um servidor auto-hospedado. Planos hospedados conforme listados no README em 13 de novembro de 2026, em dólares americanos. Em todos os planos, você usa a sua própria conta de provedor de IA.",
      ],
      headers: ["Plano", "Preço", "Inclui"],
      rows: [
        ["App para desktop ou servidor auto-hospedado", "Nenhuma taxa do Suparagent informada", "O seu próprio motor; você paga o seu provedor de modelos"],
        ["Hospedado: Free preview", "$0", "Computação em sandbox cobrada na sua conta Boat"],
        ["Hospedado: Starter", "$15/mês", "100 horas de computação, 51 GB"],
        ["Hospedado: Standard", "$49/mês", "300 horas de computação, 51 GB"],
        ["Hospedado: Pro", "$99/mês", "720 horas de computação, 111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Suparagent",
      steps: [
        {
          title: "Escolha onde ele roda",
          text: "Rode o app para desktop a partir do código-fonte (os instaladores nos GitHub Releases são experimentais e não assinados), configure um servidor Linux auto-hospedado ou use o app web hospedado em suparagent.ai.",
        },
        {
          title: "Crie um agente",
          text: "Dê a ele um nome, uma função, um motor como Claude Code, Codex, Gemini CLI ou Cursor, um workspace e um modo de aprovação, ou comece por um template.",
        },
        {
          title: "Dê trabalho a ele",
          text: "Atribua tarefas no quadro, ou defina rotinas para rodar com agendamento, por webhook ou sob demanda; o backend precisa continuar rodando. Aprovações, perguntas e resultados se reúnem na visualização Today.",
        },
      ],
      source: { label: "Fonte: README do Suparagent no GitHub", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot e Claude Cowork",
      text: [
        "Dados do README de cada projeto ou das próprias páginas do fornecedor, conferidos em 13 de novembro de 2026, com as estrelas no GitHub desse dia. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker).",
        "Guias: [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["Feito por", "Anil-matcha no GitHub", "Andrew Ng (andrewyng no GitHub)", "CopilotKit", "Anthropic"],
        ["Open source", "Apache 2.0; cerca de 7.050 estrelas", "MIT; cerca de 19.050 estrelas", "Template MIT, CopilotKit Intelligence com licença à parte; cerca de 11.652 estrelas", "Não"],
        ["Onde roda", "App para desktop, servidor Linux auto-hospedado ou app web hospedado", "O seu computador (macOS, Windows); um pequeno serviço na nuvem intermedeia o login dos conectores", "App para desktop (Mac, Windows, backend em Docker) ou Kubernetes; versão hospedada em acesso antecipado", "Nuvem da Anthropic; trabalho local pelo Claude Desktop"],
        ["Modelos", "Motores como Claude Code, Codex, Gemini CLI e Cursor; nenhum modelo incluído", "A sua própria chave da OpenAI, Anthropic, Gemini, OpenRouter e outros, ou um modelo local", "OpenAI, Claude, Gemini ou modelos abertos; os seus próprios agentes via AG-UI", "Modelos Claude"],
        ["Preço", "Nenhuma taxa informada para auto-hospedar; planos hospedados de $0 a $99 por mês", "Nenhum preço listado; traga o seu próprio modelo", "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês", "Planos pagos do Claude; o Pro custa $20 por mês"],
        ["Quadro de tarefas", "Quadro de tarefas e calendário", "Não informado", "Não informado", "Sem quadro de issues; uma lista de tarefas e uma página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Funcionários de IA com metas, horário e um heartbeat",
      text: [
        "O Suparagent roda colegas com nome no motor que você escolher. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees) e defina as metas em números." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues no quadro compartilhado; durante o horário de trabalho, o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Suparagent" },
  mid: {
    title: "Quer funcionários de IA nos agentes de programação que você já usa?",
    text: "O Crewmark dá às suas sessões do Claude Code ou do Codex um cargo, horário de trabalho, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Suparagent",
    items: [
      {
        q: "O que é o Suparagent?",
        a: "Um workspace open source para colegas de trabalho de IA. Você cria agentes com nome, com uma função, memória, rotinas e configurações de aprovação, e eles rodam em um motor que você já usa, como Claude Code, Codex, Gemini CLI ou Cursor. Ele se chamava Open Dots, depois Open Duet, até a mudança de nome em 9 de novembro de 2026.",
      },
      {
        q: "O Suparagent é gratuito?",
        a: "O código é Apache 2.0, e nenhuma taxa do Suparagent é informada para o app para desktop ou para um servidor auto-hospedado; você paga o seu provedor de modelos. O README lista planos hospedados: um Free preview a $0 (computação em sandbox cobrada na sua conta Boat), Starter a $15 por mês, Standard a $49 e Pro a $99.",
      },
      {
        q: "Com quais agentes de IA o Suparagent funciona?",
        a: "Claude Code ou Codex CLI, Gemini CLI, Google Gemini pelo Antigravity, Cursor, outros agentes de CLI pelo Agent Client Protocol (ACP), OpenRouter e APIs compatíveis com a OpenAI, como Ollama ou LM Studio. O agente líder de uma equipe precisa ser Claude ou Codex, e os apps conectados só funcionam com agentes Claude e Codex.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho aos seus agentes de programação, não só um prompt.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no README, no changelog e na licença do Suparagent no GitHub e em suparagent.ai em 13 de novembro de 2026; os dados da comparação vêm das próprias páginas de cada produto, no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o projeto Suparagent ou com a Vadoo Internet Services Private Limited e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
