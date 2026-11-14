import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex proativo: agendamento, cron e heartbeat | Crewmark AI",
    description:
      "Faça o Codex e o ChatGPT agirem sem esperar por você: tarefas agendadas (antigas Automations), codex exec com cron, a GitHub Action e um heartbeat.",
  },
  breadcrumb: "Codex proativo",
  hero: {
    kicker: "Codex proativo",
    title: "Como deixar o Codex proativo",
    lead: "Um agente proativo do Codex não fica parado esperando em um chat. Ele cuida sozinho das aprovações de rotina, roda em horários agendados, reage a um pull request ou a uma mensagem no Slack e informa o resultado. A OpenAI oferece um recurso para cada uma dessas coisas, e o ChatGPT compartilha alguns deles. Este guia mostra como configurá-los, o que cada um não consegue fazer e como dar ao Codex um trabalho fixo em vez de um prompt avulso. O que nenhum deles oferece é um heartbeat: acordar a mesma conversa em um ritmo regular para pegar a próxima tarefa. Mostramos a opção nativa mais próxima e como o Crewmark acrescenta um.",
    cta: "Começar",
    secondary: "Ir para o passo a passo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que “proativo” significa no Codex",
      text: [
        "De fábrica, o Codex responde quando você pergunta. Uma configuração proativa precisa de três coisas, e elas ficam em partes diferentes do produto:",
      ],
      points: [
        "Ele não para a cada aprovação: um modo de permissão que libera as ações de rotina.",
        "Ele começa sozinho: uma tarefa agendada, um gatilho de evento ou um cron job que inicia o trabalho sem você.",
        "Ele sabe o que fazer em seguida: um backlog e uma meta, para que cada execução tenha trabalho útil.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Passo a passo: deixe o Codex proativo",
      steps: [
        {
          title: "Escolha um modo de permissão que não pare por tudo",
          text: "Na CLI, digite `/permissions`. “Approve for me” só pergunta sobre ações identificadas como potencialmente inseguras, o que combina com trabalho que você não está acompanhando. “Full access” remove os limites de arquivos e de internet; reserve-o para máquinas isoladas. Se um guia mais antigo mandar usar `--full-auto`, essa flag não é mais suportada: use `--sandbox workspace-write` no lugar.",
          code: "/permissions",
        },
        {
          title: "Crie uma tarefa agendada (antigas Automations)",
          text: "O que antes se chamava Codex Automations agora se chama Scheduled tasks (tarefas agendadas). Peça uma em um chat do Codex: diga qual é o trabalho, quando deve rodar e se os resultados voltam para o mesmo chat. As tarefas podem rodar a cada poucos minutos, todo dia ou toda semana, e você as gerencia na visualização Scheduled da barra lateral. Uma tarefa que trabalha com arquivos locais precisa do computador ligado e do app rodando; em um repositório Git, ela pode trabalhar em uma worktree separada em segundo plano. A CLI do Codex não gerencia tarefas agendadas.",
          code: "Todo dia útil às 9h, verifique se há testes falhando neste repositório,\ncorrija o que puder em uma worktree em segundo plano\ne poste um resumo neste chat.",
        },
        {
          title: "Dispare tarefas a partir de eventos",
          text: "Em vez de um horário, uma tarefa pode começar quando algo acontece: uma nova mensagem no Gmail, uma mensagem no Slack nos canais que você escolher ou atividade em um pull request do GitHub. Os gatilhos de evento são configurados no ChatGPT na web ou no celular, nos planos elegíveis, e uma tarefa usa eventos ou um agendamento, não os dois.",
        },
        {
          title: "Rode o Codex pelo cron com codex exec",
          text: "O `codex exec` roda o Codex sem a interface interativa: o andamento vai para o stderr e só a mensagem final vai para o stdout, então ele se encaixa em scripts e tarefas agendadas. Ele é somente leitura, a menos que você passe `--sandbox workspace-write`. A documentação da OpenAI cita tarefas agendadas como um uso, mas não dá um exemplo de cron; este é nosso.",
          code: '# crontab -e: todo dia útil às 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "Coloque o Codex no seu fluxo do GitHub",
          text: "A GitHub Action `openai/codex-action` roda o Codex dentro de um workflow, e você escolhe os gatilhos. Em pull requests, comente `@codex review` para pedir uma revisão ou peça ao `@codex` que corrija falhas de CI. No Linear, você pode atribuir uma tarefa ao Codex.",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "Use hooks para reagir dentro de uma sessão",
          text: "Os hooks do Codex rodam seus comandos em pontos como o início da sessão, antes e depois de uma chamada de ferramenta ou quando um turno para. Eles reagem enquanto o Codex está trabalhando; não o iniciam. Para iniciar o trabalho, use uma tarefa agendada ou um gatilho de evento.",
        },
      ],
      source: {
        label: "Fonte: documentação da OpenAI sobre tarefas agendadas no Codex",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "A peça que falta",
      title: "Adicione um heartbeat: acorde a mesma conversa para a próxima tarefa",
      text: [
        "Um heartbeat é um empurrãozinho curto e regular na mesma conversa do Codex, por exemplo a cada 30 minutos durante o horário de trabalho, que diz: confira seu trabalho e pegue a próxima tarefa. Uma tarefa agendada repete um prompt; um heartbeat mantém uma única conversa, então o Codex lembra o que fez da última vez e pega o próximo item de uma fila. Essa é a diferença entre uma tarefa que se repete e um funcionário que continua trabalhando.",
      ],
      steps: [
        {
          title: "A opção nativa mais próxima",
          text: "Uma tarefa agendada do Codex pode enviar os resultados de volta para o mesmo chat, então você pode escrever o prompt dela como um heartbeat: “a cada 30 minutos, confira o TODO.md, pegue a próxima tarefa não marcada e marque-a como feita”. Você continua mantendo o arquivo da fila por conta própria, e o agendamento não sabe nada de horário de trabalho nem de outros agentes.",
        },
        {
          title: "Com o Crewmark: heartbeat nativo",
          text: "O daemon do Crewmark coloca o heartbeat na fila da própria conversa do Codex do funcionário com `codex queue --resume` a cada 15, 30 ou 60 minutos durante o horário de trabalho, e o quadro é a fila: a cada heartbeat, o funcionário pega a próxima tarefa e relata o andamento. Os detalhes estão [mais abaixo](#crewmark).",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "E o ChatGPT?",
      text: [
        "O ChatGPT também pode tomar a iniciativa. As tarefas agendadas do ChatGPT enviam lembretes, resumos recorrentes e os resultados do que ele monitora, e ficam na página Scheduled da barra lateral. Quantas você pode ter e com que frequência rodam depende do seu plano. O ChatGPT Pulse, que enviava uma atualização diária proativa, foi descontinuado em junho de 2026; a OpenAI recomenda usar uma tarefa agendada para ter um resumo diário.",
        "A diferença em relação ao Codex: uma tarefa do ChatGPT trabalha com o que o ChatGPT consegue acessar, não com o seu código. Para trabalho em um repositório, use as tarefas agendadas do Codex ou o `codex exec`.",
      ],
    },
    {
      kind: "table",
      title: "Qual opção serve para você",
      headers: ["Opção", "Começa a trabalhar sozinho", "O computador precisa estar ligado", "Ideal para"],
      rows: [
        ["Approve for me", "Não, ele para menos depois que você pede", "Sim", "Menos interrupções durante uma tarefa"],
        ["Tarefa agendada com arquivos locais", "Sim, em horários definidos", "Sim, com o app rodando", "Trabalho diário em um repositório"],
        ["Tarefa agendada na web", "Sim, em horários definidos", "Não", "Trabalho que não precisa dos seus arquivos"],
        ["Tarefa disparada por evento", "Sim, com atividade no Gmail, no Slack ou no GitHub", "Não", "Reagir a mensagens e PRs"],
        ["codex exec + cron", "Sim, no seu agendamento cron", "Sim", "Scripts que você controla de ponta a ponta"],
        ["GitHub Action do Codex", "Sim, com os gatilhos do workflow", "Não", "Revisões e correções de CI"],
        ["Tarefa agendada do ChatGPT", "Sim, em horários definidos", "Não", "Lembretes e resumos"],
        ["Tarefa agendada como heartbeat", "Sim, em horários definidos, com resultados no mesmo chat", "Sim, para arquivos locais", "Um agente trabalhando em um arquivo TODO"],
        ["Heartbeat do Crewmark", "Sim, a cada 15–60 min no horário de trabalho, na mesma conversa", "Sim", "Agentes com backlog, metas e horário de trabalho"],
      ],
    },
    {
      kind: "text",
      title: "O que esses recursos ainda deixam para você",
      text: ["Cada opção acima inicia uma execução. Nenhuma delas decide no que o Codex deveria estar trabalhando nesta semana:"],
      points: [
        "Uma tarefa agendada repete um prompt. Ela não puxa o próximo item de um backlog nem sabe o que a última execução deixou por terminar.",
        "Não existe um quadro compartilhado onde você passa trabalho ao Codex e vê o que está em andamento, concluído ou travado.",
        "Não há horário de trabalho nem metas, então você não consegue pedir que ele mova um número até o fim do mês.",
        "Rodar o Codex ao lado do Claude Code significa dois conjuntos separados de prompts, agendamentos e lugares para acompanhar.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Codex um trabalho fixo",
      text: [
        "O Crewmark transforma uma conversa do Codex em um funcionário de IA com cargo, meta, horário de trabalho e heartbeat, e passa trabalho para ele pelo mesmo quadro dos seus funcionários no Claude Code. Ele roda no seu Codex de verdade, no plano do ChatGPT que você já paga.",
      ],
      steps: [
        {
          title: "Contrate um funcionário e conecte a conversa do Codex dele",
          text: "Escolha um cargo e rode no Codex o comando de configuração que o Crewmark fornece. Essa conversa vira o funcionário, então ele lembra o trabalho entre um despertar e outro.",
        },
        {
          title: "Defina o horário de trabalho e o heartbeat",
          text: "O daemon do Crewmark, um pequeno programa em segundo plano no seu computador, coloca o prompt de heartbeat do funcionário na fila dessa conversa com `codex queue --resume` a cada 15, 30 ou 60 minutos durante o expediente e não mexe nela fora dele.",
        },
        {
          title: "Atribua tarefas no quadro",
          text: "Atribuir uma tarefa ou comentar nela envia a novidade para a mesma conversa, então o Codex pega trabalho novo sozinho em vez de esperar você colar o pedido.",
        },
        {
          title: "Avalie por um número",
          text: "Dê a cada funcionário um KPI. Ele planeja as tarefas em função desse número, move-as pelo quadro, comenta o andamento e manda mensagem quando precisa de uma decisão.",
        },
      ],
    },
    {
      kind: "text",
      title: "Use tudo junto",
      text: [
        "Deixe as tarefas agendadas do próprio Codex para pequenas tarefas recorrentes e use o Crewmark para o trabalho contínuo: configure a conversa do funcionário como “Approve for me” para que cada heartbeat produza trabalho, e deixe as revisões de pull request seguirem com `@codex review`. Usa o Claude Code? Veja [como deixar o Claude Code proativo](/proactive-claude-code).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Deixar o Codex proativo" },
  mid: {
    title: "Dê ao Codex um trabalho fixo, não um prompt agendado",
    text: "O Crewmark acorda sua conversa do Codex com um heartbeat durante o horário de trabalho e entrega a ela a próxima tarefa de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um heartbeat no Codex?",
        a: "Um empurrãozinho regular na mesma conversa do Codex, por exemplo a cada 30 minutos durante o horário de trabalho, dizendo para ele conferir o trabalho e pegar a próxima tarefa. Como ele continua uma única conversa, o Codex lembra o trabalho anterior. Uma tarefa agendada que responde no mesmo chat é o mais perto disso; o Crewmark já traz um heartbeat pronto, com horário de trabalho e um quadro como fila.",
      },
      {
        q: "O que aconteceu com as Codex Automations?",
        a: "Agora elas se chamam Scheduled tasks (tarefas agendadas). Você as cria pedindo em um chat do Codex e as gerencia na visualização Scheduled do app; a página da documentação continua em uma URL que termina em /automations.",
      },
      {
        q: "O codex --full-auto ainda funciona?",
        a: "Não, o `--full-auto` não é mais suportado. Use `--sandbox workspace-write` para deixar o Codex editar arquivos, ou o modo de permissão “Approve for me” para que ele só pergunte sobre ações que parecem inseguras.",
      },
      {
        q: "Como rodar o Codex em horários agendados ou com cron?",
        a: "No app do Codex, peça uma tarefa agendada. No seu próprio agendador, chame o `codex exec` a partir de um cron job e passe `--sandbox workspace-write` se ele precisar alterar arquivos. Em um repositório, você também pode rodar a GitHub Action do Codex a partir de um workflow.",
      },
      {
        q: "O ChatGPT pode me mandar mensagens por iniciativa própria?",
        a: "Sim, por meio de tarefas agendadas e tarefas disparadas por eventos. O ChatGPT Pulse, a atualização diária proativa, foi descontinuado em junho de 2026, e a OpenAI sugere usar uma tarefa agendada para ter um resumo diário.",
      },
      {
        q: "O Codex continua trabalhando com o computador desligado?",
        a: "As tarefas agendadas na web, os gatilhos de evento, as tarefas do Codex na nuvem e a GitHub Action continuam. Tudo o que trabalha com seus arquivos locais, incluindo tarefas agendadas locais, cron jobs e o Crewmark, precisa do computador ligado.",
      },
      {
        q: "O Crewmark gasta tokens extras?",
        a: "Não. Os funcionários rodam dentro do seu próprio Codex, no plano do ChatGPT que você já tem, então não há uma segunda conta de tokens.",
      },
    ],
  },
  cta: {
    title: "Faça do Codex seu primeiro funcionário de IA",
    text: "Dê a ele um cargo, uma meta, horário de trabalho e um heartbeat, e atribua a primeira tarefa.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Codex da OpenAI em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenAI e sem endosso dela. Codex e ChatGPT são marcas da OpenAI.",
};
