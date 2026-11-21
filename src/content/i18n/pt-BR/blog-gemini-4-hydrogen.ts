import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API: código do modelo gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Encontre e corrija o teste que está falhando neste diff"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen: preços, benchmarks, vs Argon e 3.8 Flash",
    description:
      "Gemini 4 Hydrogen, o modelo rápido do Google para código e agentes: $1.50 / $7.50 por 1M de tokens, contexto de 1M, benchmarks e vs Argon, 3.8 Flash e Claude.",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Novo modelo",
    title: "Gemini 4 Hydrogen: preços, benchmarks e como se compara",
    lead: "O Google lançou o Gemini 4 Hydrogen em 12 de novembro de 2026: um modelo rápido da família Gemini 4 para o trabalho do dia a dia com código e agentes, com preço de $1.50 por milhão de tokens de entrada e $7.50 por milhão de tokens de saída em toda a sua janela de contexto de 1 milhão de tokens. Ele fica abaixo do Gemini 4 Carbon e do Argon, que o Google reserva para raciocínio profundo e de longo prazo, e substitui o Gemini 3.8 Flash como o modelo que a maioria das pessoas vai usar no dia a dia. Veja o que há de novo, os números que o Google publicou, como o preço dele se compara com o Argon, o Carbon, o 3.8 Flash e o Claude, e onde você pode usá-lo.",
    cta: "Começar",
    secondary: "Ver os preços",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen em resumo",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["Lançamento", "12 de novembro de 2026, pelo Google"],
        ["Código do modelo", "`gemini-4-hydrogen`"],
        ["Feito para", "Execução rápida em fluxos de trabalho de programação e de agentes"],
        ["Contexto", "1 milhão de tokens de entrada, até 1 milhão de tokens de saída"],
        ["Níveis de pensamento", "low, medium, high (padrão) e o novo xhigh"],
        ["Preço na API", "$1.50 de entrada e $7.50 de saída por milhão de tokens, sem variação em toda a janela de contexto; nível gratuito na Gemini API"],
        ["Onde", "Gemini API, Google AI Studio, Android Studio, Gemini para empresas, o app Gemini, a Pesquisa Google e o Google Antigravity para assinantes pagos do Google AI Pro e Ultra"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "O que há de novo no Gemini 4 Hydrogen",
      points: [
        "Um modelo rápido na família Gemini 4: o Google reserva o Carbon e o Argon para raciocínio profundo e de longo prazo e posiciona o Hydrogen para execução rápida, sozinho ou como executor ao lado deles.",
        "O Orchestrator, no Google Antigravity, alterna entre Carbon e Hydrogen numa mesma sessão. O Google diz que ele chegou perto da taxa de sucesso do Carbon no Terminal-Bench 4.0 usando 24% menos cota e terminando 19% mais rápido.",
        "Um grande salto em relação ao Gemini 3.8 Flash, segundo o Google: 2.5 vezes mais rápido na configuração padrão high, Terminal-Bench 4.1 de 18.2% para 57% e mais de cinco vezes menos afirmações inventadas.",
        "Exploração em lote de repositórios grandes: ele lê e pesquisa arquivos em paralelo, em vez de um por um. Parceiros do Google viram o modelo rodar de 2 a 2.8 vezes mais rápido, com 12% a 23% menos tokens que o 3.8 Flash.",
        "Quatro níveis de pensamento, incluindo o novo xhigh, para você pagar só pelo raciocínio de que cada tarefa precisa.",
        "Segurança no trabalho agêntico: o Google relata até 81% menos excesso de iniciativa, 12 vezes menos ações desalinhadas e atalhos em avaliações de uso de ferramentas e de programação, e uma taxa de honestidade de 96.7% na sua avaliação interna de agentes.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks do Gemini 4 Hydrogen",
      text: [
        "Estes são os números que o Google publicou no anúncio; resultados independentes virão depois. Quando o Google fez uma comparação, ela aparece na última coluna.",
      ],
      headers: ["Benchmark", "Gemini 4 Hydrogen", "Comparado com"],
      rows: [
        ["Artificial Analysis Intelligence Index", "51 em high; 54 em xhigh", "Gemini 4 Argon: 50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash: 18.2%"],
        ["HLE-Diamond", "58.8%", "Lidera a sua categoria"],
        ["Vals Tax Agent Bench", "52.3%", "#1 no geral"],
        ["Vals Legal Research Bench", "55.8%", "Empatado em #1"],
        ["Multimodal Knowledge Agent (MKA)", "53.4%", "À frente de outros modelos, segundo o Google"],
        ["Agents' Last Exam v1.1", "71.6%", "À frente de outros modelos, segundo o Google"],
        ["Agent Arena (arena.ai)", "#5", "Ranking ao vivo"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços do Gemini 4 Hydrogen",
      text: [
        "Preços da Gemini API por milhão de tokens em dólares americanos, da página de preços do Google em 13 de novembro de 2026. Os preços de saída incluem os tokens de pensamento. Carbon e Argon têm preços de lançamento até 30 de novembro e depois dobram; o preço do 3.8 Flash dobra em 1º de janeiro de 2027. Os preços do Claude são os da Anthropic, tirados do nosso post sobre o [Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
      headers: ["Modelo", "Entrada", "Saída", "Lote (entrada / saída)", "Nível gratuito"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "Sim"],
        ["Gemini 4 Argon", "$2.00 até 30 de nov., depois $4.00", "$10.00 até 30 de nov., depois $20.00", "$1.00 / $5.00, depois $2.00 / $10.00", "Não"],
        ["Gemini 4 Carbon", "$2.00 até 30 de nov., depois $4.00", "$10.00 até 30 de nov., depois $20.00", "$1.00 / $5.00, depois $2.00 / $10.00", "Não"],
        ["Gemini 3.8 Flash", "$0.75 até 31 de dez., depois $1.50", "$3.75 até 31 de dez., depois $7.50", "-", "Sim"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen vs Argon vs Carbon",
      text: [
        "O Google divide o trabalho por profundidade. O Carbon é o seu modelo de raciocínio mais capaz, para engenharia de software complexa, matemática e ciência avançadas e agentes autônomos de várias etapas. O Argon é o modelo de fronteira eficiente, com respostas mais rápidas e menos gasto de tokens que o Carbon. O Hydrogen é para o trabalho rápido do dia a dia com código e agentes, e pode atuar como executor ou verificador enquanto o Carbon coordena.",
        "Em preço, o Hydrogen custa menos que o Argon e o Carbon hoje, e a diferença aumenta em 1º de dezembro, quando acabam os preços de lançamento deles. Pelos números do Google, ele também supera o Argon por pouco no Artificial Analysis Intelligence Index (51 contra 50 em high). Nem o Carbon nem o Argon têm nível gratuito na Gemini API; o Hydrogen tem.",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen vs Gemini 3.8 Flash",
      text: [
        "Se você usa o 3.8 Flash, o Google apresenta o Hydrogen como o upgrade: mais rápido na configuração padrão, mais que o triplo da pontuação no Terminal-Bench 4.1 e muito menos afirmações inventadas. Ele custa o dobro por token em relação ao 3.8 Flash até 31 de dezembro; a partir de 1º de janeiro de 2027, os dois têm o mesmo preço de tabela, $1.50 e $7.50. Os parceiros do Google também relatam de 12% a 23% menos tokens por tarefa, o que compensa parte da diferença.",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen vs Claude Sonnet 5.5 e Opus 5.5",
      text: [
        "O anúncio do Google não compara o Hydrogen com o Claude, então estes são os fatos que dá para comparar. A $1.50 e $7.50 por milhão de tokens, o preço de tabela do Hydrogen fica abaixo do Claude Sonnet 5.5 ($2 e $10) e bem abaixo do Opus 5.5 ($4 e $20), e ele oferece contexto de 1 milhão de tokens com até 1 milhão de tokens de saída. O Claude Code e o Codex rodam os modelos dos próprios fornecedores, então a escolha do modelo costuma seguir o agente em que você trabalha; para ver como esses dois se comparam, leia [Claude Code vs Codex](/blog/claude-code-vs-codex).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar o Gemini 4 Hydrogen",
      steps: [
        { title: "Teste no Google AI Studio", text: "Escolha o Gemini 4 Hydrogen no AI Studio; ele está disponível em todos os níveis do AI Studio, inclusive no gratuito." },
        { title: "Chame pela Gemini API", text: "Use o código de modelo `gemini-4-hydrogen`. Deixe o pensamento no padrão high e mude para medium ou low quando a velocidade importar mais que a profundidade.", code: api },
        { title: "Programe com ele no Google Antigravity", text: "Assinantes pagos do Google AI Pro e Ultra têm acesso a ele no Antigravity, onde o Orchestrator pode alternar entre Carbon e Hydrogen numa mesma sessão." },
        { title: "Use em outros agentes", text: "Agentes de programação que aceitam uma chave da Gemini API podem chamar `gemini-4-hydrogen` assim que incluírem o modelo na lista; confira a lista de modelos do seu agente." },
      ],
      source: { label: "Fonte: Google, Introducing Gemini 4 Hydrogen", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um modelo mais rápido é só metade. A outra metade é um trabalho.",
      text: [
        "Os modelos ficam cada vez mais rápidos e baratos, mas os agentes em volta deles continuam esperando o próximo prompt. O Crewmark transforma as sessões do seu agente de programação em funcionários de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, para que eles peguem sozinhos a próxima issue de um quadro.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Entre os [cargos de funcionários de IA](/ai-employees), como um [engenheiro de software de IA](/ai-employees/software-engineer)." },
        { title: "Coloque o trabalho num quadro", text: "Atribua issues, faça as recorrentes se repetirem e deixe o heartbeat acordar o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com configuração e regras para cada agente estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar o Gemini 4 Hydrogen" },
  mid: {
    title: "Quer seus agentes resolvendo issues com horário definido?",
    text: "O Crewmark dá a cada agente um cargo, um heartbeat e um quadro compartilhado, para que ele pegue o próximo trabalho sozinho.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é o Gemini 4 Hydrogen?",
        a: "O modelo rápido da família Gemini 4 do Google para o trabalho do dia a dia com código e agentes, lançado em 12 de novembro de 2026. Ele fica abaixo do Gemini 4 Carbon e do Argon e tem contexto de 1 milhão de tokens, com até 1 milhão de tokens de saída.",
      },
      {
        q: "Quanto custa o Gemini 4 Hydrogen?",
        a: "Na Gemini API, $1.50 por milhão de tokens de entrada e $7.50 por milhão de tokens de saída, sem variação em toda a janela de contexto; em lote, $0.75 e $3.75. Há um nível gratuito, e ele está no app Gemini para todo mundo.",
      },
      {
        q: "O Gemini 4 Hydrogen é melhor que o Argon?",
        a: "O Google posiciona os dois de forma diferente: Argon e Carbon para raciocínio profundo e de longo prazo, Hydrogen para execução rápida. No Artificial Analysis Intelligence Index, o Google informa 51 para o Hydrogen na configuração padrão e 50 para o Argon, e o Hydrogen custa menos.",
      },
      {
        q: "Gemini 4 Hydrogen vs 3.8 Flash: vale a pena trocar?",
        a: "Segundo o Google, o Hydrogen é 2.5 vezes mais rápido na configuração padrão, marca 57% no Terminal-Bench 4.1 contra 18.2% e gera muito menos afirmações inventadas. Ele custa o dobro por token em relação ao 3.8 Flash até 31 de dezembro de 2026; a partir de 1º de janeiro de 2027, os dois custam $1.50 e $7.50 pela tabela.",
      },
      {
        q: "Qual é o código do modelo Gemini 4 Hydrogen?",
        a: "`gemini-4-hydrogen`, na Gemini API e no Google AI Studio.",
      },
      {
        q: "Onde está o model card do Gemini 4 Hydrogen?",
        a: "O Google publicou em PDF: [model card do Gemini 4 Hydrogen](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
      },
    ],
  },
  cta: {
    title: "Coloque os modelos mais novos num trabalho permanente.",
    text: "O Crewmark transforma sessões de agentes de programação em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com o anúncio do Google e as páginas de preços e de modelos da Gemini API em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso do Google ou da Anthropic. Gemini e Claude são marcas registradas de seus respectivos proprietários.",
};
