import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash (1017): preço, contexto e vs V4 Pro",
    description:
      "DeepSeek-V4.1-Flash-1017 explicado: o que mudou em 17 de outubro de 2026, preço da API, contexto de 1M, pesos abertos no Hugging Face, resultados de benchmarks da DeepSeek e quando usar o V4 Pro.",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek V4.1 Flash (1017): preço, contexto, benchmarks e comparação com o V4 Pro",
    lead: "O DeepSeek-V4.1-Flash-1017 é a atualização de 17 de outubro de 2026 do DeepSeek V4.1 Flash, o menor modelo da arquitetura mais recente da DeepSeek, com compreensão de imagens e contexto de 1M de tokens. É o modelo que a API serve como `deepseek-flash`, o que o site e o app da DeepSeek usam e o que o DeepSeek Harness roda por padrão, e seus pesos são abertos sob a licença MIT. Segundo a DeepSeek, ele pontua mais que a versão de setembro e conclui as tarefas mais rápido, com respostas mais curtas. Veja o que ele é, quanto custa, como se compara com o V4 Pro e como usá-lo.",
    cta: "Começar",
    secondary: "Ir para os preços",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash em resumo",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["Lançamento", "V4.1 Flash em 10 de setembro de 2026; a atualização 1017 em 17 de outubro de 2026"],
        ["Nome do modelo na API", "`deepseek-flash` (os nomes antigos `deepseek-v4-flash` e `deepseek-v4-flash-vision-exp` também são atendidos por ele)"],
        ["Entrada", "Texto e imagens"],
        ["Janela de contexto", "1M de tokens; a DeepSeek recomenda `max_tokens` de 256K ou mais"],
        ["Pesos", "Abertos no Hugging Face, licença MIT"],
        ["Onde roda", "API, site e app da DeepSeek; padrão no DeepSeek Harness"],
        ["Otimizado para", "DeepSeek Harness (v0.2.1-rc.1 ou posterior), Tencent CodeBuddy e WorkBuddy, segundo a DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preço do DeepSeek V4.1 Flash vs V4 Pro",
      text: [
        "Preços da API da DeepSeek em dólares americanos por milhão de tokens em 6 de novembro de 2026. As tarifas fora do pico valem fora das faixas das 01:00 às 04:00 e das 06:00 às 10:00 UTC em dias úteis e são metade das de pico; a atualização 1017 não mudou os preços. As APIs de Search e Fetch da DeepSeek custam $0.75 a cada 1.000 chamadas, cada uma.",
      ],
      headers: ["Por 1M de tokens", "Flash, pico", "Flash, fora do pico", "V4 Pro, pico", "V4 Pro, fora do pico"],
      rows: [
        ["Entrada, cache hit", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Entrada, cache miss", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Saída", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks do DeepSeek V4.1 Flash (segundo a DeepSeek)",
      text: [
        "Estes são os números da própria DeepSeek, publicados no model card, comparando a atualização 1017 com o V4.1 Flash de setembro. A DeepSeek rodou o Terminal-Bench 4.0 com o harness do Claude Code e o DeepSWE com o Mini-SWE-V2. Benchmarks de fabricantes favorecem os próprios modelos; teste com as suas tarefas antes de trocar.",
      ],
      headers: ["Benchmark", "V4.1 Flash 1017", "V4.1 Flash (set.)"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE (sem ferramentas)", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash vs V4 Pro: qual usar",
      points: [
        "O V4 Pro (`deepseek-v4-pro`, disponível para todos desde 13 de agosto de 2026) custa 4,4 vezes mais por token de entrada e 3,3 vezes mais por token de saída, e aceita só texto; o Flash adiciona entrada de imagens.",
        "Os dois têm contexto de 1M de tokens e nível de raciocínio ajustável (low, high e max).",
        "As configurações de agentes de programação da própria DeepSeek usam o Flash por padrão: o DeepSeek Harness e as configurações recomendadas para o Claude Code, que mapeiam Sonnet e Haiku para o Flash e só o Opus para o V4 Pro.",
        "Uma divisão prática: Flash para o trabalho do dia a dia dos agentes e para subagentes, V4 Pro quando uma tarefa difícil continua falhando no Flash.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar o DeepSeek V4.1 Flash",
      steps: [
        {
          title: "Pela API",
          text: "Gere uma chave de API em platform.deepseek.com e chame o modelo como `deepseek-flash`; a API é compatível com OpenAI e com Anthropic.",
          code: api,
        },
        {
          title: "Em um agente de programação",
          text: "Rode-o no DeepSeek Harness, onde ele é o padrão, ou aponte o Claude Code ou o Codex para a DeepSeek; veja [DeepSeek Harness](/blog/deepseek-harness) e [Claude Code com DeepSeek](/blog/claude-code-deepseek).",
        },
        {
          title: "Localmente, com os pesos abertos",
          text: "Baixe o DeepSeek-V4.1-Flash-1017 do Hugging Face. O repositório traz um codificador de prompts de referência e instruções de inferência no lugar de um template de chat; a DeepSeek recomenda temperature 1.0 e top_p 1.0.",
        },
      ],
      source: { label: "Fonte: DeepSeek-V4.1-Flash-1017 no Hugging Face", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um modelo barato e capaz, trabalhando no seu backlog",
      text: [
        "Com os preços do Flash, manter um agente ocupado o dia todo cabe no orçamento. O Crewmark transforma uma sessão do DeepSeek Harness, do Claude Code, do Codex ou do OpenCode em um funcionário de IA com um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Escolha o agente e o modelo",
          text: "O DeepSeek Harness roda o V4.1 Flash por padrão; o Claude Code e o Codex podem usá-lo pelo endpoint da DeepSeek.",
        },
        {
          title: "Dê a ele um cargo e uma meta",
          text: "Leia [o que é um funcionário de IA](/ai-employees) e como ele se diferencia de um [superagent](/blog/superagent).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, ele acorda a cada 15, 30 ou 60 minutos e pega a próxima issue; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Use o DeepSeek V4.1 Flash" },
  mid: {
    title: "Um modelo tão barato deveria trabalhar o dia todo.",
    text: "O Crewmark acorda o DeepSeek Harness, o Claude Code ou o Codex com um heartbeat, com um cargo, uma meta e um quadro de issues.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o DeepSeek V4.1 Flash",
    items: [
      {
        q: "O que é o DeepSeek V4.1 Flash 1017?",
        a: "A atualização de 17 de outubro de 2026 do DeepSeek V4.1 Flash, o menor modelo da arquitetura mais recente da DeepSeek. Ele aceita texto e imagens, tem contexto de 1M de tokens e é servido como `deepseek-flash`.",
      },
      {
        q: "Quanto custa o DeepSeek V4.1 Flash?",
        a: "Na API, $0.30 por milhão de tokens de entrada com cache miss ($0.006 com cache hit) e $1.20 por milhão de tokens de saída no pico; fora do pico, os preços caem pela metade.",
      },
      {
        q: "Qual é a janela de contexto do DeepSeek V4.1 Flash?",
        a: "1M de tokens, e a DeepSeek recomenda `max_tokens` de pelo menos 256K.",
      },
      {
        q: "O DeepSeek V4.1 Flash é open source?",
        a: "Os pesos são abertos no Hugging Face sob a licença MIT, com um codificador de prompts de referência e instruções de inferência.",
      },
      {
        q: "DeepSeek V4.1 Flash vs V4 Pro: qual é a diferença?",
        a: "O V4 Pro custa 4,4 vezes mais por token de entrada e 3,3 vezes mais por token de saída, e aceita só texto; o Flash aceita imagens e é o padrão nas configurações de agentes de programação da DeepSeek. Os dois têm contexto de 1M.",
      },
      {
        q: "O que mudou do V4.1 Flash para o 1017?",
        a: "A DeepSeek relata pontuações maiores em benchmarks de agentes e de programação, respostas mais curtas e tarefas concluídas mais rápido, com o mesmo preço e o mesmo nome de modelo.",
      },
      {
        q: "Posso usar o DeepSeek V4.1 Flash no Claude Code?",
        a: "Sim. A DeepSeek documenta variáveis de ambiente que apontam o Claude Code para o endpoint compatível com a Anthropic dela, com `deepseek-flash`; veja [Claude Code com DeepSeek](/blog/claude-code-deepseek).",
      },
    ],
  },
  cta: {
    title: "Transforme o DeepSeek V4.1 Flash em um funcionário de IA.",
    text: "O Crewmark transforma sessões do DeepSeek Harness, do Claude Code, do Codex e do OpenCode em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação da API da DeepSeek (change log, notícias, preços) e o model card no Hugging Face em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a DeepSeek e sem endosso dela. Os números de benchmark são da própria DeepSeek. Os nomes de produtos são marcas de seus proprietários.",
};
