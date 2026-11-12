import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Cria o helper. Esta chamada não envia nenhuma requisição.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# O turno 1 cria a thread e envia a conversa completa
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# O turno 2 envia só a mensagem nova
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turno 1: a conversa completa, mais
"thread": {"type": "create"}

# Todos os turnos seguintes: só as mensagens novas, sem system nem tools, mais
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# Em toda requisição da thread
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude message threads: sessões longas de agente mais rápidas | Crewmark",
    description:
      "Os message threads da Anthropic enviam uma conversa do Claude uma vez e depois só o que é novo. O que muda no Claude Code, como usar a API beta, a expiração de 5 minutos e os limites.",
  },
  breadcrumb: "Claude message threads",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude message threads: o que são e como usar",
    lead: "Os message threads são um recurso da API do Claude em beta pública desde 2 de novembro de 2026. Em vez de enviar a conversa inteira a cada turno, o agente a envia uma vez e depois só as mensagens novas. A Anthropic diz que ativou o recurso para a maioria dos usuários do Claude Code e que a mediana do tempo até o primeiro token cai cerca de 35% em requisições de 500 mil a 1 milhão de tokens. Este guia explica o que muda, o que não muda, como usar no seu próprio agente e quais são os limites.",
    cta: "Acesso antecipado",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que são os message threads",
      text: [
        "Sem uma thread, cada turno do loop de um agente envia a conversa completa de novo, e a API valida e tokeniza tudo outra vez. Um agente de programação faz centenas de requisições em uma sessão; quando a conversa chega a centenas de milhares de tokens, esse reenvio atrasa o início da resposta do Claude. Com uma thread, a API guarda a conversa entre os turnos e a maior parte desse trabalho cobre só o turno novo.",
      ],
      points: [
        "Primeiro token mais rápido: a Anthropic mediu uma queda da mediana de cerca de 35% em requisições do Claude Code de 500 mil a 1 milhão de tokens. Quanto mais longa a conversa, maior o ganho.",
        "Requisições menores: cada turno leva só mensagens novas, resultados de ferramentas ou capturas de tela.",
        "Mesmos tokens e mesmo preço: o Claude continua lendo a conversa completa a cada turno, e preços e limites de uso não mudam.",
        "De curta duração: uma thread expira 5 minutos depois da última requisição e fica na memória, criptografada, sem nunca ser gravada em disco.",
        "Onde: a API do Claude, o Claude Platform na AWS, o Claude Models no Google Cloud (gerenciado pela Anthropic) e o Microsoft Foundry, em todos os modelos.",
      ],
    },
    {
      kind: "table",
      title: "Com e sem thread",
      headers: ["", "Sem thread", "Com thread"],
      rows: [
        ["Cada requisição envia", "A conversa completa, `system` e `tools`", "Só as mensagens novas e o `id` da resposta anterior"],
        ["Tempo até o primeiro token", "Cresce conforme a conversa cresce", "Menor e mais estável em conversas longas"],
        ["Tokens cobrados", "A conversa completa a cada turno", "Os mesmos"],
        ["Preço e limites de uso", "Padrão", "Sem mudança"],
        ["Quem guarda a conversa", "Seu app", "Seu app, mais a API por 5 minutos após cada requisição"],
        ["Retenção zero de dados", "Elegível", "Não elegível"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar os message threads no seu próprio agente",
      text: [
        "O Claude Code já faz isso por você. Para usar threads em um agente que você constrói sobre a Messages API, o helper de threads do SDK é o caminho mais curto.",
      ],
      steps: [
        {
          title: "Crie um helper de thread",
          text: "Passe os mesmos campos de uma requisição da Messages. O helper adiciona o cabeçalho beta `message-threads-2026-08-12`, cria a thread no primeiro turno, envia só mensagens novas depois e mantém a conversa completa na memória.",
          code: sdk,
        },
        {
          title: "Ou envie você mesmo o campo thread",
          text: "Com cURL ou uma chamada `create` comum, adicione `thread` a cada requisição e envie o cabeçalho beta em todas. Continue sempre a partir do `id` da resposta mais recente; cada `id` só pode ser continuado uma vez.",
          code: raw,
        },
        {
          title: "Mantenha modelo e configurações fixos",
          text: "`system` e `tools` vão só na primeira requisição. `model`, `thinking`, `tool_choice`, o `cache_control` de nível superior e os cabeçalhos beta devem ser os mesmos em todos os turnos; qualquer mudança retorna um erro 400 com `thread_fingerprint_mismatch`. Para mudá-los, comece uma nova thread.",
        },
        {
          title: "Guarde sua própria cópia e reenvie em caso de 404",
          text: "As threads funcionam em regime de melhor esforço (best-effort). Quando uma requisição de continuação retorna 404 com `thread_not_found` (a thread expirou, o último turno não foi armazenado ou um modelo de fallback o escreveu), envie a conversa completa de novo em uma nova requisição create. O helper do SDK faz isso uma vez sozinho.",
        },
        {
          title: "Ative o prompt caching",
          text: "Uma thread não coloca seu prompt em cache por você. Envie um `cache_control` de nível superior em toda requisição para que cada turno leia a conversa anterior do cache; uma requisição com `thread` pode ter no máximo 4 pontos de corte (breakpoints).",
        },
      ],
      source: { label: "Fonte: a documentação de message threads da Anthropic", href: docs },
    },
    {
      kind: "text",
      title: "Limites e o que as threads não suportam",
      points: [
        "Não funcionam com Message Batches, contagem de tokens, compactação sob demanda nem edição de contexto (exceto `clear_thinking_20251015` com `keep: \"all\"`).",
        "Não estão disponíveis para organizações com HIPAA readiness ou Inference hooks; essas requisições retornam um erro 400 com `thread_unsupported_request`.",
        "Não são elegíveis à retenção zero de dados: a API guarda a thread na memória e a exclui no máximo 1 hora após o último uso.",
        "Não existe API para listar, ler ou excluir uma thread, e uma thread só aceita acréscimos. Para compactar, comece uma nova thread a partir do seu próprio resumo.",
        "Depois de uma recusa (refusal), não continue a thread: comece uma nova sem o turno que a causou.",
        "Use a mesma chave de API e o mesmo workspace em todas as requisições de uma thread, ou ela não poderá ser continuada.",
      ],
    },
    {
      kind: "text",
      title: "O que isso significa para quem usa o Claude Code",
      text: [
        "Você não precisa mudar nada: a Anthropic diz que as threads vêm ativadas por padrão para a maioria dos usuários do Claude Code. O ganho aparece nas sessões longas, em que um turno avançado de uma conversa grande começa a responder mais cedo. Seu consumo não diminui, porque o Claude continua lendo a conversa inteira a cada turno.",
        "Segundo a documentação da API, uma thread expira 5 minutos depois da última requisição. Quando você volta a uma sessão depois de uma pausa maior, a primeira requisição envia a conversa completa de novo e os turnos seguintes são rápidos. É também o que acontece com uma [sessão proativa do Claude Code](/proactive-claude-code) que acorda em um horário agendado.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Faça as sessões longas do Claude Code trabalharem sozinhas",
      text: [
        "Os message threads deixam as sessões longas mais rápidas; o Crewmark as deixa proativas. Ele dá a uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat na mesma conversa, de modo que ela mantém o contexto e pega a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um cargo, como engenheiro de software ou especialista em SEO, escreva a meta dele como um número e rode o comando de configuração no Claude Code.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como tornar o Claude Code proativo](/proactive-claude-code). Vários podem rodar lado a lado, como em [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque trabalho no quadro; o funcionário pega a tarefa, comenta ao longo do caminho e manda mensagem quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Use os message threads do Claude no seu próprio agente" },
  mid: {
    title: "Roda sessões longas do Claude Code?",
    text: "O Crewmark as acorda com um heartbeat, com um cargo, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre Claude message threads",
    items: [
      {
        q: "O que são os Claude message threads?",
        a: "Um recurso da API do Claude, em beta pública desde 2 de novembro de 2026, que mantém uma conversa do lado da Anthropic entre os turnos. A primeira requisição envia a conversa completa e cria uma thread; cada requisição seguinte envia só as mensagens novas e o `id` da resposta anterior.",
      },
      {
        q: "Os message threads deixam o Claude Code mais rápido?",
        a: "Em sessões longas, sim. A Anthropic diz que as threads vêm ativadas por padrão para a maioria dos usuários do Claude Code e que a mediana do tempo até o primeiro token cai cerca de 35% em requisições de 500 mil a 1 milhão de tokens. Em conversas curtas o ganho é pequeno.",
      },
      {
        q: "Os message threads economizam tokens ou dinheiro?",
        a: "Não. O Claude continua lendo a conversa completa a cada turno, então o uso de tokens, os preços e os limites de uso não mudam. O ganho está em requisições menores e um primeiro token mais rápido. Para gastar menos, use o prompt caching.",
      },
      {
        q: "Quanto tempo dura uma thread?",
        a: "Ela expira 5 minutos depois da última requisição, e cada resposta armazenada reinicia esses 5 minutos. A API a exclui no máximo 1 hora após o último uso. Depois disso, envie a conversa completa de novo para começar uma nova thread.",
      },
      {
        q: "Qual é o cabeçalho beta dos message threads?",
        a: "`anthropic-beta: message-threads-2026-08-12`, enviado em toda requisição da thread. O helper de threads do SDK o adiciona para você.",
      },
      {
        q: "Os message threads são elegíveis à retenção zero de dados?",
        a: "Não. O conteúdo de uma thread fica na memória, criptografado com uma chave gerenciada pelo servidor, nunca é gravado em armazenamento durável e é excluído no máximo 1 hora após o último uso. Organizações com HIPAA readiness não podem usar threads.",
      },
      {
        q: "Os message threads são a mesma coisa que os session threads do Managed Agents?",
        a: "Não. Os message threads são um recurso da Messages API; os session threads pertencem ao Claude Managed Agents.",
      },
    ],
  },
  cta: {
    title: "Deixe proativas as suas sessões longas do Claude Code.",
    text: "O Crewmark transforma sessões do Claude Code, do Codex e do DeepSeek Harness em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com o anúncio da Anthropic e a documentação do Claude Platform em 4 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
