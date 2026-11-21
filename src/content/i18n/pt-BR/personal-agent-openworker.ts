import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker: colega de IA open source de Andrew Ng, setup e SDK",
    description:
      "O OpenWorker, colega de IA open source de Andrew Ng no GitHub: app para desktop com o seu próprio modelo, aprovações e agendamentos, mais um Harness SDK.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Open source",
    title: "OpenWorker: o colega de trabalho de IA open source de Andrew Ng e como configurá-lo",
    lead: "O OpenWorker é um app para desktop open source que o README chama de “um colega de trabalho de IA para o seu trabalho do dia a dia” (“an AI coworker for your everyday work”), mais um Harness SDK em TypeScript e Rust para criar os seus próprios apps agênticos. O repositório fica na conta de Andrew Ng no GitHub, usa a licença MIT e tinha cerca de 19.050 estrelas em 13 de novembro de 2026. O app roda na sua máquina com a sua própria chave de modelo ou um modelo local, pergunta antes de agir e registra cada chamada de ferramenta. Veja o que ele faz, quanto custa, como configurar, como funcionam as aprovações e como ele se compara ao OpenBot, ao Suparagent e ao Claude Cowork.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o OpenWorker",
      points: [
        "Um app para desktop para o trabalho do dia a dia: pesquisa, escrita, revisão de código e execução de tarefas nas suas ferramentas. Ele está em beta aberto.",
        "Ele roda na sua máquina: o loop do agente, as conversas, os tokens dos conectores e as chaves de modelo ficam nela. A única peça na nuvem é um pequeno serviço que intermedeia o login OAuth dos conectores.",
        "Você escolhe o modelo: OpenAI, Anthropic, Google Gemini, OpenRouter e outros provedores com a sua própria chave, ou modelos locais pelo Ollama, LM Studio, llama.cpp ou vLLM. O motor do agente é escrito em Python sobre o aisuite, a biblioteca de Andrew Ng.",
        "Colegas especialistas vêm com as ferramentas e as instruções para um trabalho específico; os primeiros são os de segurança.",
        "Conectores: GitHub, Slack, e-mail e agendas, entre mais de 25, além de MCP. Mencione @OpenWorker no Slack e a tarefa roda no seu desktop, com a resposta na thread.",
        "Agendamentos: resumos matinais, relatórios semanais e outras tarefas repetitivas rodam com agendamento, com transcrições para revisar.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "O OpenWorker no GitHub e o Harness SDK",
      text: [
        `O código está em [github.com/andrewyng/openworker](${repo}). O repositório foi criado em 20 de julho de 2026, a LICENSE MIT dele nomeia Andrew Ng como titular dos direitos autorais, e ele tinha cerca de 19.050 estrelas em 13 de novembro de 2026.`,
      ],
      points: [
        "Harness SDK: um SDK em TypeScript e Rust, no mesmo repositório, para criar os seus próprios apps agênticos para desktop ou web.",
        "Subagentes e equipes: o SDK oferece os dois; isso não é informado para o app para desktop.",
        "Implantação: apps criados com o SDK podem rodar em Kubernetes na AWS, no Azure ou no Google Cloud.",
        "Contribuições: os mantenedores dizem que podem não aceitar pull requests de funcionalidades que já estão em desenvolvimento ou que fogem dos planos deles.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preço e licença do OpenWorker",
      text: [
        "Nem o README nem o openworker.com listam um preço, conferido em 13 de novembro de 2026. Você usa a sua própria chave de modelo, cobrada pelo seu provedor, ou roda um modelo local.",
      ],
      headers: ["Parte", "O que você paga"],
      rows: [
        ["App para desktop (beta aberto)", "Nenhum preço listado; licença MIT"],
        ["Harness SDK (TypeScript, Rust)", "Nenhum preço listado; licença MIT, mesmo repositório"],
        ["Modelo na nuvem: OpenAI, Anthropic, Google Gemini, OpenRouter ou outro provedor", "Cobrado por esse provedor, na sua própria chave"],
        ["Modelo local: Ollama, LM Studio, llama.cpp ou vLLM", "Roda na sua própria máquina"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o OpenWorker",
      steps: [
        {
          title: "Baixe o app para desktop",
          text: "Ele roda no macOS 12 ou posterior em Apple silicon (assinado e notarizado) e no Windows 10 ou 11 em x64. As versões para Windows ainda não têm assinatura de código, então o SmartScreen mostra um aviso. Não há download para Linux listado.",
        },
        {
          title: "Adicione um modelo",
          text: "Informe a sua própria chave da OpenAI, Anthropic, Google Gemini, OpenRouter ou de outro provedor, ou use um modelo local pelo Ollama, LM Studio, llama.cpp ou vLLM. As chaves ficam na sua máquina.",
        },
        {
          title: "Conecte as suas ferramentas",
          text: "Adicione conectores como GitHub, Slack, e-mail e agendas, ou servidores MCP. O login passa por um pequeno serviço na nuvem que intermedeia o OAuth; os tokens ficam na sua máquina.",
        },
        {
          title: "Decida o que precisa do seu OK",
          text: "Por padrão, as ações esperam aprovação. Transforme aprovações pontuais em regras fixas e listas de permissões, ou ative a aprovação automática, em que um modelo revisor decide e passa a decisão para você quando não tem certeza.",
        },
        {
          title: "Agende o trabalho repetitivo",
          text: "Configure resumos matinais, relatórios semanais e outras tarefas repetitivas. Execuções sem supervisão nunca se aprovam sozinhas: as perguntas delas esperam em uma caixa de entrada, e cada execução deixa uma transcrição para revisar.",
        },
      ],
      source: { label: "Fonte: README do OpenWorker no GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o OpenWorker mantém você no controle: aprovações, revisão e auditoria",
      points: [
        "Aprovação por padrão: as ações esperam o seu OK, e um conjunto de operações perigosas fica sempre com uma pessoa.",
        "Regras que você vai construindo: uma aprovação pontual pode virar uma regra fixa ou um item de uma lista de permissões.",
        "Aprovação automática opcional: um modelo revisor cuida das aprovações, passa a decisão para você quando não tem certeza e tem um circuit breaker.",
        "Uma trilha de auditoria: cada chamada de ferramenta é registrada com a forma como foi aprovada, e o app sinaliza ações em que dados saem do Mac (“Leaves this Mac”).",
        "Sandbox: os comandos podem rodar em um sandbox NVIDIA OpenShell ou no sandbox nativo do macOS ou do Windows.",
        "Execuções agendadas nunca se aprovam sozinhas; tudo o que precisam de você espera em uma caixa de entrada.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent e Claude Cowork",
      text: [
        "Dados do README de cada projeto ou das próprias páginas do fornecedor, conferidos em 13 de novembro de 2026, com as estrelas no GitHub desse dia. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker).",
        "Guias: [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["Feito por", "Andrew Ng (andrewyng no GitHub)", "CopilotKit", "Anil-matcha no GitHub", "Anthropic"],
        ["Open source", "MIT; cerca de 19.050 estrelas", "Template MIT, CopilotKit Intelligence com licença à parte; cerca de 11.652 estrelas", "Apache 2.0; cerca de 7.050 estrelas", "Não"],
        ["Onde roda", "O seu computador (macOS, Windows); um pequeno serviço na nuvem intermedeia o login dos conectores", "App para desktop (Mac, Windows, backend em Docker) ou Kubernetes; versão hospedada em acesso antecipado", "App para desktop, servidor Linux auto-hospedado ou app web hospedado", "Nuvem da Anthropic; trabalho local pelo Claude Desktop"],
        ["Modelos", "A sua própria chave da OpenAI, Anthropic, Gemini, OpenRouter e outros, ou um modelo local", "OpenAI, Claude, Gemini ou modelos abertos; os seus próprios agentes via AG-UI", "Motores como Claude Code, Codex, Gemini CLI e Cursor; nenhum modelo incluído", "Modelos Claude"],
        ["Preço", "Nenhum preço listado; traga o seu próprio modelo", "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês", "Nenhuma taxa informada para auto-hospedar; planos hospedados de $0 a $99 por mês", "Planos pagos do Claude; o Pro custa $20 por mês"],
        ["Trabalho recorrente", "Resumos, relatórios e outras tarefas repetitivas agendados", "Routines, rodadas por um routine worker", "Rotinas com agendamento, por webhook ou sob demanda", "A cada hora, diariamente, semanalmente ou em dias úteis, na nuvem"],
        ["Aprovações", "Ativadas por padrão; modelo revisor opcional", "Antes das ações; auditoria na edição para equipes", "Ask first, Accept edits, Approve for me ou Plan only", "Manual, Auto ou Skip"],
        ["Quadro de tarefas", "Não informado", "Não informado", "Quadro de tarefas e calendário", "Sem quadro de issues; uma lista de tarefas e uma página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um colega no seu desktop. Funcionários de IA em um quadro.",
      text: [
        "O OpenWorker é um colega de trabalho de IA que você roda na sua própria máquina. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado, para que o trabalho recorrente de engenharia, SEO e marketing seja assumido e acompanhado.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees) e defina as metas em números." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues no quadro compartilhado; durante o horário de trabalho, o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o OpenWorker" },
  mid: {
    title: "Quer funcionários de IA que pegam issues de um quadro?",
    text: "O Crewmark dá às suas sessões do Claude Code ou do Codex um cargo, horário de trabalho, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o OpenWorker",
    items: [
      {
        q: "O que é o OpenWorker?",
        a: "Um app para desktop open source que o README chama de “um colega de trabalho de IA para o seu trabalho do dia a dia” (“an AI coworker for your everyday work”), mais um Harness SDK para criar os seus próprios apps agênticos. Ele roda na sua máquina com a sua própria chave de modelo ou um modelo local, pede aprovação antes das ações e pode rodar tarefas com agendamento. O app para desktop está em beta aberto.",
      },
      {
        q: "O OpenWorker é feito por Andrew Ng?",
        a: "O repositório é github.com/andrewyng/openworker, na conta de Andrew Ng no GitHub, e a LICENSE dele nomeia Andrew Ng como titular dos direitos autorais. O motor do app é feito sobre o aisuite, a biblioteca dele. O rodapé do openworker.com diz “© 2026 OpenWorker”.",
      },
      {
        q: "O OpenWorker é gratuito e open source?",
        a: "Ele é open source sob a licença MIT, e nem o README nem o openworker.com listam um preço. Você usa a sua própria chave de modelo, cobrada pelo seu provedor, ou roda um modelo local pelo Ollama, LM Studio, llama.cpp ou vLLM.",
      },
      {
        q: "O que é o Harness SDK do OpenWorker?",
        a: "Um SDK em TypeScript e Rust, no mesmo repositório, para criar os seus próprios apps agênticos para desktop ou web. Ele oferece subagentes e equipes, e os apps criados com ele podem rodar em Kubernetes na AWS, no Azure ou no Google Cloud.",
      },
      {
        q: "O OpenWorker roda no Mac, no Windows e no Linux?",
        a: "Ele roda no macOS 12 ou posterior em Apple silicon e no Windows 10 ou 11 em x64. As versões para Windows ainda não têm assinatura de código, então o SmartScreen mostra um aviso. Não há download para Linux listado.",
      },
      {
        q: "Quais são os limites do OpenWorker?",
        a: "O app para desktop está em beta aberto, as versões para Windows ainda não têm assinatura de código, e os mantenedores dizem que podem não aceitar pull requests de funcionalidades que já estão em desenvolvimento ou que fogem dos planos deles.",
      },
    ],
  },
  cta: {
    title: "Mantenha um colega no seu desktop. Dê um trabalho aos seus agentes de programação também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no README do OpenWorker no GitHub e em openworker.com em 13 de novembro de 2026; os dados da comparação vêm das próprias páginas de cada produto, no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com Andrew Ng ou com o OpenWorker e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
