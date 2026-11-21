import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/langgraph; the English master is
// src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph: preços, grátis, LangSmith Plus $39 e Agent Server",
    description:
      "Preços do LangGraph: o framework MIT é grátis. LangSmith: Developer a $0, Plus a $39 por licença/mês com um Agent Server, e servidores extras a $1.00 por LSU.",
  },
  breadcrumb: "Preços do LangGraph",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Frameworks de agentes",
    title: "Preços do LangGraph: o framework grátis, os planos do LangSmith e o custo do Agent Server",
    lead: "O LangGraph é grátis: o framework é open source sob a licença MIT e roda dentro da sua própria aplicação. O que custa dinheiro é o LangSmith, o produto comercial da LangChain para tracing, avaliação e implantação. O Developer custa $0 para uma licença, o Plus custa $39 por licença por mês com um Small Agent Server incluído, e o Enterprise é sob medida. Agent Servers adicionais são cobrados pelo uso, a $1.00 por LSU, e as chamadas de modelos são cobradas pelo seu provedor de modelos. Veja cada plano, quanto custa o Agent Server e como o LangGraph se compara ao CrewAI, ao AutoGen, à Relevance AI e ao Paperclip.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do LangGraph e do LangSmith",
      text: [
        "Segundo a página de preços do [langchain.com](https://www.langchain.com/langgraph) e a documentação da LangChain, conferidas em 13 de novembro de 2026. Preços em dólares americanos; Developer e Plus são cobrados mensalmente.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Framework LangGraph (open source)",
          "Grátis, licença MIT",
          "Uma biblioteca Python e JavaScript/TypeScript para agentes stateful, executada dentro da sua própria aplicação",
        ],
        [
          "LangSmith Developer",
          "$0/licença por mês",
          "1 licença; até 5k traces base/mês, depois pagamento conforme o uso; sem Agent Server",
        ],
        [
          "LangSmith Plus",
          "$39/licença por mês",
          "Até 10k traces base/mês, depois pagamento conforme o uso; \"1 Small Agent Server incluído em hospedagem serverless, sem custo\" (\"1 Small Agent Server included on serverless hosting at no charge\")",
        ],
        [
          "LangSmith Enterprise",
          "Sob medida, faturado anualmente de forma antecipada",
          "Acrescenta opções de implantação auto-hospedada e híbrida",
        ],
        [
          "Agent Servers adicionais",
          "$1.00 por LSU, cobrado pelo uso",
          "Computação de runtime 0,0675 LSU/vCPU-hora, memória de runtime 0,0090 LSU/GiB-hora, computação de banco de dados 0,177 LSU/vCPU-hora, memória de banco de dados 0,025 LSU/GiB-hora",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pelo LangGraph",
      points: [
        "Seu provedor de modelos. O LangGraph chama os modelos que o seu código usar, e \"o LangGraph não exige o LangChain\" (\"LangGraph does not require LangChain.\"). Essas chamadas de modelos são cobradas pelo seu provedor.",
        "Traces além do incluído. O Developer inclui até 5k traces base por mês e o Plus até 10k; acima disso, os traces são cobrados no pagamento conforme o uso.",
        "Licenças. O Developer é limitado a 1 licença. O Plus custa $39 por licença por mês.",
        "Agent Servers além do primeiro. O Plus inclui 1 Small Agent Server em hospedagem serverless. Os demais são cobrados pelo uso, a $1.00 por LSU, então a computação de runtime sai a $0.0675 por vCPU-hora e a memória de runtime a $0.009 por GiB-hora; a computação de banco de dados é de 0,177 LSU por vCPU-hora e a memória de banco de dados, de 0,025 LSU por GiB-hora.",
        "Os cron jobs continuam rodando. O Agent Server suporta cron jobs em um agendamento que você define. A documentação da LangChain recomenda excluir os que não são usados, porque execuções recorrentes podem gerar cobranças de API de LLM.",
        "Onde fica hospedado. O Cloud Agent Server é \"totalmente gerenciado pela LangChain na AWS, Azure e GCP\" (\"Fully managed by LangChain on AWS, Azure, and GCP\"). Implantação auto-hospedada e híbrida são opções do Enterprise.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do LangGraph vs outros frameworks e plataformas de agentes",
      text: [
        "Preços da página de preços ou do README de cada produto, conferidos em 13 de novembro de 2026, em dólares americanos. O README do AutoGen diz \"Este projeto foi arquivado e não é mais mantido ativamente pela Microsoft\" (\"This project has been archived and is no longer actively maintained by Microsoft\"), e a Microsoft aponta o Agent Framework como sucessor direto. Em 13 de novembro de 2026, a documentação da Relevance AI diz que o plano Free foi encerrado para novos cadastros e contas existentes.",
        "Lado a lado: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Mais opções em [alternativas ao LangGraph](/alternatives/langgraph).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        [
          "LangGraph",
          "Framework grátis; LangSmith Plus $39/licença por mês",
          "Sim: o framework (MIT) e o LangSmith Developer a $0 para 1 licença",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework grátis; AMP Basic grátis; Enterprise sob medida",
          "Sim: o framework (MIT) e o AMP Basic com 50 execuções de workflow/mês",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Grátis (open source); o README não menciona serviço pago",
          "Sim: código sob MIT; o README diz que ele foi arquivado e não é mais mantido ativamente pela Microsoft",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, preço sob medida via time de vendas",
          "Não: a documentação diz que o plano Free foi encerrado",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Auto-hospedado grátis; sem preços publicados",
          "Sim: auto-hospedado (MIT); uma versão na nuvem está em lista de espera",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Não está criando um app de agentes? Dê um cargo ao Claude Code ou ao Codex.",
      text: [
        "O LangGraph serve para criar agentes stateful no seu próprio código. O Crewmark é um gerenciador de issues para um time de funcionários de IA, para quem já usa o Claude Code ou o Codex e quer que os agentes continuem tocando um trabalho sem precisar de um prompt a cada vez. Cada funcionário tem um cargo, KPIs e horário de trabalho, acorda com um heartbeat e pega issues de um quadro compartilhado. O uso do agente continua na assinatura do Claude ou do ChatGPT que você já paga.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software, especialista em SEO ou analista de dados.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e trabalhos com a configuração em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Já usa o Claude Code ou o Codex?",
    text: "O Crewmark o transforma em funcionários de IA com cargos, um heartbeat e um quadro compartilhado. Grátis para 1 projeto e até 3 funcionários de IA.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do LangGraph",
    items: [
      {
        q: "O LangGraph é grátis?",
        a: "Sim. O framework LangGraph é open source sob a licença MIT, para Python e JavaScript/TypeScript. O LangSmith, o produto comercial da LangChain, também tem um plano Developer a $0 para uma licença.",
      },
      {
        q: "Quanto custa implantar o LangGraph na nuvem?",
        a: "A implantação roda no LangSmith Agent Server, totalmente gerenciado pela LangChain na AWS, Azure e GCP. O LangSmith Plus ($39 por licença por mês) inclui 1 Small Agent Server em hospedagem serverless sem custo, e servidores adicionais são cobrados pelo uso, a $1.00 por LSU. O plano Developer não tem Agent Server.",
      },
      {
        q: "Preços do servidor do LangGraph: quanto custa o Agent Server?",
        a: "O Agent Server (antes LangSmith Deployment) é cobrado em LSUs, a $1.00 por LSU: 0,0675 LSU por vCPU-hora de computação de runtime, 0,0090 por GiB-hora de memória de runtime, 0,177 por vCPU-hora de computação de banco de dados e 0,025 por GiB-hora de memória de banco de dados. O Plus inclui um Small Agent Server sem custo.",
      },
      {
        q: "O que o LangSmith Plus inclui?",
        a: "$39 por licença por mês, com cobrança mensal: até 10k traces base por mês, depois pagamento conforme o uso, e 1 Small Agent Server em hospedagem serverless sem custo.",
      },
      {
        q: "Existe preço Enterprise para o LangGraph?",
        a: "O LangSmith Enterprise é sob medida, faturado anualmente de forma antecipada. Implantações auto-hospedadas e híbridas do Agent Server são opções do Enterprise.",
      },
      {
        q: "Preciso do LangSmith para usar o LangGraph?",
        a: "O framework é uma biblioteca MIT grátis que roda dentro da sua própria aplicação. O LangSmith é o produto comercial separado da LangChain para tracing, avaliação e implantação de agentes no Agent Server.",
      },
    ],
  },
  cta: {
    title: "Monte o grafo, ou dê um trabalho aos seus agentes.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em langchain.com/pricing e na documentação do LangGraph e do LangSmith da LangChain em 13 de novembro de 2026. Os preços dos outros produtos vêm das páginas de cada um, na mesma data.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a LangChain nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
