import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts (the `en` value of openclawReviews).

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw: avaliações de usuários do Hacker News (2026)",
    description:
      "Avaliações do OpenClaw em 10 threads do Hacker News, de fevereiro a novembro de 2026: do que os usuários gostam, as reclamações mais comuns e para onde migram.",
  },
  breadcrumb: "Avaliações do OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Avaliações",
    title: "Avaliações do OpenClaw: o que os usuários dizem no Hacker News",
    lead: "O OpenClaw é um assistente pessoal de IA open source que roda no seu próprio computador e responde a você nos apps de chat que você já usa, como WhatsApp, Telegram e Slack. Lemos 10 threads do Hacker News sobre ele, de fevereiro a novembro de 2026. Os usuários gostam dele para pequenas tarefas pessoais e gostam de ser donos da memória dele. As reclamações que mais apareceram são que ele quebra com frequência e exige manutenção (6 das 10 threads) e que o acesso amplo dele é um risco de segurança (5 de 10).",
    cta: "Começar",
    secondary: "Ver os temas",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "Como coletamos estas avaliações",
      text: [
        "Lemos 10 threads do Hacker News sobre o OpenClaw em 13 de novembro de 2026, uma página por vez. Elas vão de fevereiro a novembro de 2026, e 7 delas são de fevereiro a abril, quando aconteceu a maior parte da discussão. Nas threads maiores, que chegam a várias centenas de comentários, lemos os comentários de primeiro nível e os trechos em torno dos temas principais, não todas as respostas.",
      ],
      points: [
        "Um tema só entra na lista se apareceu em pelo menos 2 das 10 threads, e dizemos em quantas. Pontos levantados em um único comentário ficaram de fora.",
        "Uma das threads é sobre o Grok Bot; usamos os comentários dela que comparam o Grok Bot com o OpenClaw. Outra pergunta às pessoas sobre os setups de IA delas em geral; usamos as menções ao OpenClaw.",
        "Também encontramos 9 threads do Reddit pela busca do Google, mas não conseguimos abrir o reddit.com, então não as lemos nem resumimos. Elas estão listadas pelo título em [Mais discussões no Reddit](#reddit).",
        "Esta é uma amostra de discussões públicas, não uma pesquisa. Quem posta sobre uma ferramenta costuma ter opiniões fortes. Os meses foram calculados a partir da idade de cada thread e podem ter um mês de diferença.",
        "Nada foi pago nem solicitado: não postamos, não pedimos avaliações e não entramos em contato com ninguém. Os resumos estão nas nossas palavras, e a única citação está marcada e com link.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Avaliações do OpenClaw em resumo",
      text: ["O que apareceu nas 10 threads do Hacker News que lemos. As contagens são de threads, não de comentários."],
      headers: ["Tema", "O que os usuários dizem", "Threads"],
      rows: [
        ["Elogio: útil para tarefas pessoais", "Lembretes, follow-ups, tarefas de agenda e bots para chats em grupo, quando funciona", "3 de 10"],
        ["Elogio: nos seus apps de chat, com uma memória que é sua", "Ele responde em apps como o WhatsApp e guarda a memória em arquivos que você pode ler e editar", "2 de 10"],
        ["Elogio: o rumo dos assistentes", "Até os críticos veem nele o que os assistentes integrados deveriam ter sido", "2 de 10"],
        ["Reclamação: quebra com frequência", "As atualizações quebram coisas, e a manutenção toma mais tempo do que economiza", "6 de 10"],
        ["Reclamação: risco de segurança", "Acesso amplo ao seu computador e às suas contas, e exposição a prompt injection", "5 de 10"],
        ["Reclamação: hype à frente do uso real", "Grandes promessas sem exemplos concretos; tarefas de demonstração que parecem encenação", "4 de 10"],
        ["Reclamação: custo e assinaturas", "O uso de modelos vai somando, e ele depende das regras de assinatura de outras empresas", "3 de 10"],
        ["Reclamação: exige uma máquina extra e conhecimento técnico", "Funciona melhor em um computador separado, com alguém disposto a cuidar da manutenção", "2 de 10"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Do que os usuários gostam",
      points: [
        `Útil para tarefas pessoais, quando funciona (3 de 10 threads). Os usuários contam que ele envia lembretes e follow-ups, cuida de pequenas tarefas de agenda e roda bots para chats de família ou de grupo. Threads do Hacker News: [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.memory}), [novembro de 2026](${hn.agenticSetup}).`,
        `Ele fica nos apps de chat que você já usa, com uma memória que é sua (2 de 10). Os usuários gostam de mandar mensagens para ele de apps como o WhatsApp e de manter a memória dele em arquivos na própria máquina, que podem ler e editar. Threads: [abril de 2026](${hn.whoIsUsing}), [agosto de 2026](${hn.grokBot}).`,
        `Um vislumbre de para onde os assistentes estão indo (2 de 10). Até comentaristas que o criticam dizem que ele faz o que os assistentes integrados aos celulares e computadores deveriam ter feito, e esperam que a ideia sobreviva a este projeto. Threads: [fevereiro de 2026](${hn.appleIntelligence}), [março de 2026](${hn.securityNightmare}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Reclamações comuns",
      points: [
        `Ele quebra com frequência e exige manutenção constante (6 de 10 threads). Os usuários descrevem atualizações que quebram coisas, recursos que param de funcionar sem aviso e mais tempo gasto consertando do que usando. Como disse um comentarista do Hacker News em novembro de 2026: "A cada atualização alguma coisa quebrava, e eu passava mais tempo consertando as coisas" ("Every update something broke, and I spent more time fixing things") ([thread](${hn.agenticSetup})). Threads: [fevereiro de 2026](${hn.appleIntelligence}), [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.memory}), [agosto de 2026](${hn.grokBot}), [novembro de 2026](${hn.agenticSetup}), [novembro de 2026](${hn.saas}).`,
        `O acesso amplo dele é um risco de segurança (5 de 10). Os usuários apontam que ele ganha acesso amplo ao seu computador e às suas contas e pode ser manipulado por prompt injection. O conselho habitual é rodá-lo em uma máquina separada, com contas separadas; alguns dizem para nem instalar. Threads: [fevereiro de 2026](${hn.personalComputer}), [fevereiro de 2026](${hn.appleIntelligence}), [fevereiro de 2026](${hn.changingMyLife}), [março de 2026](${hn.securityNightmare}), [abril de 2026](${hn.whoIsUsing}).`,
        `Hype à frente do uso real (4 de 10). Os usuários dizem que os posts sobre o OpenClaw prometem grandes mudanças sem exemplos concretos, e que as tarefas de demonstração de sempre, como reservar um voo ou marcar uma reunião, parecem mais teatro de produtividade do que tempo economizado. Threads: [fevereiro de 2026](${hn.changingMyLife}), [março de 2026](${hn.securityNightmare}), [abril de 2026](${hn.whoIsUsing}), [novembro de 2026](${hn.agenticSetup}).`,
        `Custo, e dependência das assinaturas de outras empresas (3 de 10). Os usuários dizem que o uso de modelos por trás dele vai somando. Em abril de 2026, uma thread do Hacker News relatou que a Anthropic não permitia mais usar as assinaturas do Claude Code com o OpenClaw; os comentaristas pesaram pagar preços de API contra migrar para outros provedores de modelos. Threads: [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.anthropicSubscriptions}), [abril de 2026](${hn.memory}).`,
        `Ele exige uma máquina extra e conhecimento técnico (2 de 10). Os usuários dizem que ele funciona melhor em um computador separado, com alguém à vontade para cuidar da manutenção, e alguns donos de pequenas empresas pedem uma versão hospedada e pronta para usar. Threads: [fevereiro de 2026](${hn.personalComputer}), [novembro de 2026](${hn.saas}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Para onde as pessoas migram",
      text: [
        "Estas opções apareceram como recomendação em pelo menos 2 das 10 threads. Outras ferramentas foram citadas em só uma thread cada, então ficaram de fora aqui; o nosso [guia de alternativas ao OpenClaw](/blog/openclaw-alternatives) compara as principais opções a partir da documentação de cada uma.",
      ],
      points: [
        `Hermes Agent (3 de 10). Os usuários que migraram para ele dizem que ele roda de forma mais confiável para eles. Veja [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) e [preços do Hermes Agent](/pricing/hermes-agent). Threads: [abril de 2026](${hn.whoIsUsing}), [agosto de 2026](${hn.grokBot}), [novembro de 2026](${hn.agenticSetup}).`,
        `Claude Code ou Codex puros, com skills e um bom \`CLAUDE.md\` (3 de 10). Vários usuários dizem que montaram grandes setups do OpenClaw e voltaram aos agentes de programação que já tinham. Veja [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) e [Claude Code vs Codex](/blog/claude-code-vs-codex). Threads: [fevereiro de 2026](${hn.changingMyLife}), [abril de 2026](${hn.whoIsUsing}), [novembro de 2026](${hn.agenticSetup}).`,
        `Claude Cowork (2 de 10). Recomendado como um assistente hospedado da Anthropic. Veja o nosso [guia do Claude Cowork](/personal-agent/claude-cowork). Threads: [abril de 2026](${hn.whoIsUsing}), [novembro de 2026](${hn.agenticSetup}).`,
        `Cron jobs e scripts próprios (2 de 10). Alguns usuários dizem que a maior parte do que o OpenClaw faz poderia ser um conjunto de scripts agendados. Threads: [abril de 2026](${hn.whoIsUsing}), [novembro de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Mais discussões no Reddit",
      text: [
        "Listamos estas threads do Reddit para quem quiser ler mais. Nós as encontramos pela busca do Google, mas não conseguimos abrir o reddit.com, então não as lemos nem resumimos, e nenhum dos temas acima se baseia nelas.",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, fevereiro de 2026",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, fevereiro de 2026",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, março de 2026",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, março de 2026",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, abril de 2026",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, junho de 2026",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, julho de 2026",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, agosto de 2026",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, outubro de 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Fatos sobre o OpenClaw para checar o que se diz",
      text: [
        "Do README, da documentação e do GitHub do próprio OpenClaw, conferidos em 13 de novembro de 2026. Mais sobre custos na nossa página de [preços do OpenClaw](/pricing/openclaw).",
      ],
      points: [
        "O que é: um assistente pessoal de IA open source. Um Gateway roda no seu próprio computador e responde a você em apps de chat como WhatsApp, Telegram, Slack, Discord e iMessage; estado, memória e credenciais ficam no seu hardware.",
        "Preço: grátis. O README diz que o projeto não tem plano pago, serviço hospedado nem token. Você paga o seu provedor de modelos.",
        "Licença: MIT. Ele é mantido pela OpenClaw Foundation, uma organização sem fins lucrativos independente.",
        "Onde roda: na sua própria máquina, com instaladores para macOS, Linux, Windows e WSL2, apps para macOS, iOS, Android, Windows e Linux, e instalações documentadas com Docker e Nix.",
        "Modelos: plugins para OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM e outros.",
        "Segurança, segundo a própria documentação: as ferramentas rodam no host na sessão principal, a menos que você configure o sandboxing, e as aprovações de exec vêm desligadas por padrão.",
        "Agendamento: um agendador integrado para tarefas recorrentes e pontuais, além de gatilhos por webhook e pelo Gmail.",
        "Nomes: passou a se chamar OpenClaw em 30 de janeiro de 2026; entre os nomes anteriores estão Clawdbot e Moltbot. Tem 394.406 estrelas no GitHub em 13 de novembro de 2026. Site oficial: [openclaw.ai](https://openclaw.ai).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê um trabalho fixo ao Claude Code ou ao Codex",
      text: [
        "Vários usuários nestas threads voltaram ao Claude Code ou ao Codex. O Crewmark é construído sobre eles: transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com cargo, metas e horário de trabalho, cada um pegando a próxima issue de um quadro compartilhado. Ele não é um assistente pessoal nos seus apps de chat: o trabalho passa por issues, não há integração nativa com o Slack, e os agentes rodam no seu computador, que precisa ficar ligado. É open source sob GPL-3.0 e grátis para 1 projeto e até 3 funcionários de IA.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees) ou escreva o seu próprio cargo e as suas metas." },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem. Durante o horário de trabalho, um heartbeat acorda o funcionário para pegar a próxima, em intervalos que vão de 15 minutos a um dia.",
        },
        {
          title: "Responda quando ele perguntar",
          text: "Quando precisa de uma revisão, de uma permissão ou de uma informação, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos com a configuração para cada agente estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer o seu agente de programação trabalhando com agenda?",
    text: "O Crewmark dá ao Claude Code ou ao Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O OpenClaw vale a pena?",
        a: "Depende de quanta manutenção você aceita. Nas 10 threads do Hacker News que lemos, os usuários que gostam dele o usam para tarefas pessoais, como lembretes e tarefas de agenda, a partir de apps de chat que já usam. A reclamação mais comum, em 6 das 10 threads, é que ele quebra com frequência e exige consertos constantes. O software é grátis sob a licença MIT; você paga pelos modelos que ele usa.",
      },
      {
        q: "O OpenClaw é seguro?",
        a: "Segurança apareceu em 5 das 10 threads. Os usuários apontam o acesso amplo dele ao seu computador e às suas contas, além de prompt injection, e recomendam rodá-lo em uma máquina separada, com contas separadas. O próprio README do OpenClaw diz que as ferramentas rodam no host na sessão principal, a menos que você configure o sandboxing, e as aprovações de exec dele vêm desligadas por padrão.",
      },
      {
        q: "Por que as pessoas dizem que o OpenClaw é superestimado?",
        a: "Em 4 das 10 threads, os usuários dizem que os posts sobre ele prometiam grandes resultados sem exemplos concretos e que as tarefas de demonstração dele parecem mais teatro de produtividade do que tempo economizado. Uma das threads do Reddit que listamos, do r/LocalLLaMA em março de 2026, tem um título que o chama de superestimado e sugere usar skills no lugar dele; não a lemos.",
      },
      {
        q: "O que as pessoas usam no lugar do OpenClaw?",
        a: "Nas threads que lemos: Hermes Agent e Claude Code ou Codex puros (3 threads cada), depois Claude Cowork e cron jobs com scripts próprios (2 threads cada). O nosso [guia de alternativas ao OpenClaw](/blog/openclaw-alternatives) compara as opções a partir da documentação de cada uma.",
      },
      {
        q: "O que os usuários do Reddit dizem sobre o OpenClaw?",
        a: "Não conseguimos abrir o Reddit, então não resumimos essas threads. Só pelos títulos: quatro perguntam se o OpenClaw ainda vale a pena, se vale continuar com ele ou se ele morreu, uma delas agora que o autor tem o Codex; três têm títulos críticos, e uma delas sugere usar skills no lugar dele; uma, no r/myclaw, contesta quem o chama de inútil; e uma é uma avaliação depois de testes extensos. As nove estão com link em [Mais discussões no Reddit](#reddit).",
      },
      {
        q: "O OpenClaw é grátis?",
        a: "Sim. O README diz que o projeto não tem plano pago, serviço hospedado nem token, e ele tem licença MIT. Você paga o seu provedor de modelos, e o custo apareceu em 3 das 10 threads que lemos, incluindo uma thread de abril de 2026 sobre a Anthropic não permitir mais o uso das assinaturas do Claude Code com ele. Veja [preços do OpenClaw](/pricing/openclaw).",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho fixo ao seu agente de programação.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Threads lidas em 13 de novembro de 2026. Dados do produto conferidos no README, na documentação e no GitHub do próprio OpenClaw no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenClaw Foundation nem com nenhuma empresa citada nesta página e sem endosso delas. As opiniões resumidas aqui são dos comentaristas das threads com link. Os nomes de produtos são marcas dos respectivos titulares.",
};
