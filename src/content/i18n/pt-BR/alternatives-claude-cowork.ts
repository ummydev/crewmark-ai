import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: alternativas grátis e open source em 2026",
    description:
      "Alternativas ao Claude Cowork comparadas: ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy e os open source OpenWorker, OpenBot e Suparagent, com preços.",
  },
  breadcrumb: "Alternativas ao Claude Cowork",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Claude Cowork",
    title: "Alternativas ao Claude Cowork: colegas de trabalho de IA da OpenAI, da Microsoft, do Google e da xAI, mais opções open source",
    lead: "O Claude Cowork é o agente da Anthropic para trabalho que não é de programação nos apps do Claude: você descreve um resultado e ele cuida de pesquisa, documentos, planilhas e apresentações nos seus arquivos, apps e em um navegador. Ele vem só com os planos pagos do Claude, a partir de $20 por mês, e a Anthropic diz que ele consome os limites do plano mais rápido que o chat. Ele roda com modelos Claude, e no Pro, no Max e no Ultra as novas tarefas rodam na nuvem da Anthropic desde 6 de outubro de 2026, sem opção para voltar atrás. Esta página compara as alternativas da OpenAI, da Microsoft, do Google e da xAI, uma assistente hospedada, apps open source que você mesmo roda e o Crewmark, com quanto custa cada um.",
    cta: "Começar",
    secondary: "Comparar",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Claude Cowork em resumo",
      text: [
        "Informações das páginas, da documentação ou do GitHub de cada fornecedor, verificadas em 13 de novembro de 2026. Preços em dólares americanos. Não é um ranking.",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (para referência)",
          "O agente da Anthropic para trabalho intelectual que não é de programação, nos apps do Claude",
          "Não",
          "Claude Pro $20/mês, ou $17/mês no plano anual; não está no Free",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "O modo Work da OpenAI no ChatGPT, para tarefas que terminam em algo para revisar",
          "Não",
          "Free ($0) e Go ($8/mês): limitado, só no app para desktop; Plus $20/mês",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "O agente da Microsoft para tarefas de várias etapas no Microsoft 365",
          "Não",
          "Licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada",
        ],
        [
          "[Tarefas do Gemini (antes Spark)](/personal-agent/gemini-spark)",
          "O agente em segundo plano do Google no app Gemini, que usa o Gmail, o Docs e outros apps do Google",
          "Não",
          "Google AI Pro $19.99/mês (EUA); sem acesso no plano gratuito",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Os colegas de equipe de IA hospedados da xAI, cada um com o próprio computador na nuvem",
          "Não",
          "Premium $30/mês",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Uma assistente de IA hospedada para caixa de entrada, agenda, reuniões e Slack, cobrada em créditos",
          "Não",
          "Grátis: $50 em créditos por 7 dias; depois, a partir de $29.99/mês por usuário ativo",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Um app desktop de colega de trabalho de IA que roda na sua máquina",
          "Sim, MIT",
          "Sem preço publicado; a sua própria chave de modelo ou um modelo local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "O workspace auto-hospedável da CopilotKit para colegas de trabalho de IA",
          "Sim, MIT (usa o CopilotKit Intelligence, com licença à parte)",
          "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
        ],
        [
          "[Suparagent](/personal-agent/suparagent)",
          "Um workspace para colegas de trabalho de IA sobre Claude Code, Codex, Gemini CLI, Cursor e outros motores",
          "Sim, Apache-2.0",
          "Desktop e auto-hospedado: nenhuma taxa informada; você paga o seu provedor de modelos",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um quadro de issues para funcionários de IA que rodam como Claude Code ou Codex no seu computador",
          "Sim, GPL-3.0",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5/mês em breve",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Alternativas hospedadas da OpenAI, da Microsoft, do Google e da xAI",
      text: [
        "Estas quatro funcionam de forma parecida com o Claude Cowork: você entrega uma tarefa no app do fornecedor e ela roda na nuvem do fornecedor. Lado a lado: [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): um modo Work no ChatGPT que planeja uma tarefa, usa os seus arquivos, plugins, a web, um navegador e código, e devolve apresentações, planilhas, documentos ou análises. Ele compartilha limites de uso com o Codex. Free e Go têm acesso limitado ao Work no app para desktop; o Plus ($20/mês) e o Pro (a partir de $100/mês) têm acesso no desktop, na web e no celular. Escolha-o se você quer a alternativa da OpenAI ao Claude Cowork, ou um jeito gratuito de testar um colega de trabalho de IA.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): executa tarefas de várias etapas no Outlook, Teams, Word, Excel, PowerPoint, OneDrive e SharePoint, e mostra uma caixa de aprovação antes de ações sensíveis. Ele exige uma licença do Microsoft 365 Copilot, e o uso é cobrado em Copilot Credits a $0.01 cada, no pagamento conforme o uso. Ele não acessa arquivos no seu dispositivo local. Escolha-o se o seu trabalho está no Microsoft 365 e os seus administradores querem limites de créditos por usuário ou grupo.",
        "[Tarefas do Gemini](/personal-agent/gemini-spark) (Google, chamadas de Spark durante o beta): um agente na nuvem dentro do app Gemini que usa o Gmail, o Docs, o Drive e outros apps do Google e roda com agendamento ou quando algo acontece. A página de ajuda do Google diz que ele exige o Google AI Pro ($19.99/mês nos EUA) ou o Ultra (a partir de $99.99/mês). Funciona só com Contas do Google pessoais e não está disponível no EEE, na Suíça, no Reino Unido nem na Nigéria. Escolha-o se o seu trabalho está no Gmail e nos outros apps do Google.",
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots hospedados que ganham, cada um, um computador próprio na nuvem, entram nas suas ferramentas, trabalham no Slack e no Microsoft Teams, rodam rotinas e trocam mensagens entre si. Ele está incluído no Premium ($30/mês), no Super ($100/mês) e no Ultra ($200/mês), com cobrança mensal e uso extra cobrado pelo custo dos tokens. Escolha-o se você quer vários Bots com trabalhos separados atuando no Slack, no Teams e em reuniões.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Uma assistente hospedada cobrada em créditos: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): uma assistente hospedada que cuida de caixa de entrada, agenda, reuniões, pesquisa, relatórios e follow-ups, usada pelo Slack, por e-mail, iMessage, SMS, chamadas telefônicas e uma extensão do Chrome no Gmail. As Routines rodam em um agendamento ou por um evento, e qualquer coisa com impacto externo espera a sua aprovação. Ela começa com $50 em créditos grátis que duram 7 dias; depois disso, cada usuário ativo é cobrado, a partir de $29.99/mês por 3.000 créditos. Escolha-a se você quer uma assistente executiva para quem possa mandar mensagem ou que possa @mencionar no Slack. Mais no nosso [guia da Lindy](/personal-agent/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas open source ao Claude Cowork",
      text: [
        "Estas três rodam no seu próprio computador ou servidor. Para uso pessoal, nenhuma delas informa taxa: você paga o seu provedor de modelos, ou roda um modelo local onde houver suporte.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): um app desktop de colega de trabalho de IA com licença MIT, em beta aberto. O loop do agente, as conversas, os tokens dos conectores e as chaves de modelo ficam na sua máquina. Você usa uma chave da OpenAI, da Anthropic, do Google Gemini ou do OpenRouter, ou roda um modelo local pelo Ollama, LM Studio, llama.cpp ou vLLM. Por padrão, as ações precisam de aprovação, e as execuções agendadas nunca aprovam as próprias ações: os pedidos delas esperam em uma caixa de entrada. Ele roda no macOS 12+ (Apple silicon) e no Windows 10/11 x64; a versão para Windows ainda não tem assinatura de código. Escolha-o se você quer uma alternativa local e open source ao Claude Cowork no Windows ou no Mac.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): um workspace auto-hospedável em que cada Bot ganha o próprio navegador, arquivos e ferramentas, com aprovações antes das ações, rotinas e um registro de atividades. Ele roda como app desktop para Mac e Windows (com backend em Docker) ou em Kubernetes para uma equipe. O template de aplicação é MIT; ele usa o CopilotKit Intelligence, que tem licença à parte e exige uma licença para produção em Kubernetes. Gratuito para projetos pessoais; o OpenBot for Business custa até $29 por usuário ativo por mês. Escolha-o se você quer auto-hospedar colegas de trabalho de IA e usar os seus próprios modelos ou agentes. Veja [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](/personal-agent/suparagent): um workspace Apache-2.0 para colegas de trabalho de IA com nome, cada um com função, workspace, memória, rotinas e configurações de aprovação, rodando em um motor que você já usa, como Claude Code, Codex, Gemini CLI ou Cursor. Ele tem um quadro de tarefas e um calendário, e um agente líder pode passar trabalho a especialistas. Ele roda como app desktop ou em um servidor Linux auto-hospedado; um serviço hospedado em suparagent.ai é um produto à parte. O projeto se descreve como inicial e em mudança. Escolha-o se você quer colegas de trabalho com funções no agente que você já paga.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa ao Claude Cowork",
      steps: [
        {
          title: "Comece por onde o seu trabalho está",
          text: "Microsoft 365 aponta para o Copilot Cowork; Gmail e Google Docs, para as tarefas do Gemini; ChatGPT, para o ChatGPT Work; e Slack ou iMessage, para a Lindy ou o Grok Bot.",
        },
        {
          title: "Decida quanto vai pagar",
          text: "Opções gratuitas: o ChatGPT Work no ChatGPT Free (limitado, só no app para desktop), os créditos de 7 dias da Lindy, OpenWorker, OpenBot e Suparagent com a sua própria chave de modelo, e o plano Free do Crewmark. O Copilot Cowork cobra por Copilot Credit além de uma licença; as tarefas do Gemini, o Grok Bot e os planos pagos do ChatGPT são assinaturas mensais.",
        },
        {
          title: "Escolha entre a nuvem do fornecedor e o seu próprio computador",
          text: "O ChatGPT Work, o Copilot Cowork, as tarefas do Gemini, o Grok Bot e a Lindy rodam na nuvem do fornecedor. O OpenWorker mantém conversas e chaves na sua máquina; o OpenBot e o Suparagent também podem rodar no seu próprio servidor.",
        },
        {
          title: "Confira a plataforma",
          text: "No Windows: o Copilot Cowork e o ChatGPT Work têm apps desktop para Windows, o OpenWorker oferece uma versão para Windows 10/11, e o app desktop do OpenBot roda no Windows. As tarefas do Gemini estão na web, em um app para Mac e no celular; o Grok Bot lista apps para macOS (Apple silicon) e iOS.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "O que as pessoas no Hacker News dizem sobre alternativas ao Claude Cowork",
      text: [
        "Em 13 de novembro de 2026, lemos 5 threads do Hacker News que discutem o Claude Cowork, de janeiro a novembro de 2026, uma página por vez. As threads do Reddit só puderam ser encontradas pelos resultados de busca, então as listamos pelo título e não as resumimos; esta é uma amostra de discussões públicas, não uma pesquisa.",
      ],
      points: [
        "Preferir outro modo ao modo de agente do Cowork apareceu em 2 das threads que lemos ([janeiro de 2026](https://news.ycombinator.com/item?id=46593022), [setembro de 2026](https://news.ycombinator.com/item?id=49729412)). Na thread de janeiro, os usuários dizem que o Claude Code faz o mesmo trabalho com mais controle para quem se sente à vontade no terminal; veja [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code). Na thread de setembro, os usuários dizem que o chat comum dá respostas melhores do que um modo de agente para perguntas de estratégia e pesquisa.",
        "No Reddit, threads com os títulos [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding) e [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM) apareceram nos resultados de busca. Listamos só os títulos; não lemos essas threads.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Crewmark: um time de funcionários de IA no Claude Code ou no Codex que você já usa",
      text: [
        "O Crewmark é um tipo de ferramenta diferente do Claude Cowork. É um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat, pega issues de um quadro compartilhado e mantém o status delas atualizado. É open source (GPL-3.0) e pode ser auto-hospedado.",
        "O plano Free cobre 1 projeto e até 3 funcionários de IA. Pro ($5/mês) e Team ($10/mês) chegam em breve; a cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. O uso do agente é pago ao seu provedor de agentes, e o seu computador precisa ficar ligado para os heartbeats. Detalhes em [preços do Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Dê a cada funcionário um cargo, metas e projetos; entre as opções rápidas estão engenheiro de software, especialista em SEO e analista de dados. Veja os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues, defina prioridades e faça as recorrentes se repetirem diariamente, semanalmente ou mensalmente. Quando um agente precisa de uma revisão, de uma permissão ou de uma informação, ele marca a issue como Needs action e espera por você.",
        },
        {
          title: "Defina o horário de trabalho",
          text: "O heartbeat acorda cada funcionário em intervalos de 15 minutos a 24 horas durante o horário de trabalho dele. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Já paga o Claude ou o ChatGPT?",
    text: "O Crewmark transforma o seu Claude Code ou Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado. Grátis para até 3 funcionários.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Claude Cowork",
    items: [
      {
        q: "Existe alternativa grátis ao Claude Cowork?",
        a: "Sim. O ChatGPT Free ($0) inclui acesso limitado ao ChatGPT Work no app para desktop. A Lindy começa com $50 em créditos que duram 7 dias. O OpenWorker não informa preço e roda com a sua própria chave de modelo ou um modelo local, o OpenBot é gratuito para projetos pessoais, e as versões desktop e auto-hospedada do Suparagent não informam taxa. O plano Free do Crewmark cobre 1 projeto e até 3 funcionários de IA. O próprio Claude Cowork não está no plano Free do Claude.",
      },
      {
        q: "Existe alternativa open source ao Claude Cowork?",
        a: "O OpenWorker (MIT), o OpenBot (um template de aplicação MIT sobre o CopilotKit Intelligence, que tem licença à parte) e o Suparagent (Apache-2.0) são open source, assim como o Crewmark (GPL-3.0). O próprio Claude Cowork não é, embora o repositório knowledge-work-plugins da Anthropic, com plugins para o Cowork, seja open source sob Apache-2.0.",
      },
      {
        q: "Qual é a alternativa da OpenAI ao Claude Cowork?",
        a: "O ChatGPT Work: um modo Work no ChatGPT para tarefas que terminam em algo para revisar, como apresentações, planilhas e análises. Ele é limitado no Free e no Go, no app para desktop, completo a partir do Plus, a $20/mês, e compartilha limites de uso com o Codex. Veja [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work).",
      },
      {
        q: "Quais alternativas ao Claude Cowork rodam no Windows?",
        a: "O Copilot Cowork (o app desktop do Microsoft Copilot para Windows e macOS), o ChatGPT Work (o app desktop do ChatGPT para macOS, Windows e Linux), o OpenWorker (Windows 10/11 x64, ainda sem assinatura de código) e o OpenBot (um app desktop para Mac e Windows). O próprio Claude Cowork também roda no Windows pelo Claude Desktop.",
      },
      {
        q: "Existe alternativa ao Claude Cowork que rode no meu próprio computador?",
        a: "O OpenWorker roda o loop do agente na sua máquina e guarda ali as conversas, os tokens dos conectores e as chaves de modelo; o OpenBot e o Suparagent rodam como apps desktop ou no seu próprio servidor. O Claude Cowork só acessa arquivos locais pelo Claude Desktop, e no Pro, no Max e no Ultra as novas tarefas dele rodam na nuvem desde 6 de outubro de 2026. Para tarefas que rodam só no seu computador, a Anthropic indica o Claude Code no app desktop ([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "Por que as pessoas procuram alternativas ao Claude Cowork?",
        a: "Pelos limites que a própria Anthropic informa: o Cowork exige um plano pago do Claude (Pro a partir de $20 por mês), consome os limites do plano mais rápido que o chat, as sessões não podem ser compartilhadas com outras pessoas, e no Pro, no Max e no Ultra as novas tarefas rodam na nuvem, sem opção para voltar atrás. Se o seu trabalho está no Microsoft 365 ou no Gmail, o Copilot Cowork e as tarefas do Gemini se conectam diretamente a esses apps.",
      },
    ],
  },
  cta: {
    title: "Dê um emprego aos seus agentes, não só uma tarefa.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido nas páginas, na documentação, nos preços e no GitHub de cada produto em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com Anthropic, OpenAI, Microsoft, Google, xAI, Lindy, CopilotKit nem com os criadores do OpenWorker e do Suparagent, e sem endosso deles. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
