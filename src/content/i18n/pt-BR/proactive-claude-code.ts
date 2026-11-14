import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code proativo: heartbeat, /loop e cron | Crewmark AI",
    description:
      "Faça o Claude Code trabalhar sem esperar você: output style Proactive, auto mode, /goal, /loop, tarefas agendadas e um heartbeat para um trabalho fixo.",
  },
  breadcrumb: "Claude Code proativo",
  hero: {
    kicker: "Claude Code proativo",
    title: "Como deixar o Claude Code proativo",
    lead: "Um agente proativo do Claude Code não espera sua próxima mensagem. Ele toma sozinho as decisões de rotina, continua até terminar o trabalho, acorda em horários definidos e reage quando algo acontece. O Claude Code tem um recurso nativo para cada uma dessas coisas. Este guia mostra como ativá-los, onde cada um para e como dar ao Claude Code um trabalho fixo em vez de um prompt avulso. O que os recursos nativos deixam de fora é o heartbeat: acordar a mesma sessão em um ritmo regular para pegar a próxima tarefa. Mostramos como montar um à mão e como o Crewmark faz isso por você.",
    cta: "Começar",
    secondary: "Ir para o passo a passo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que “proativo” significa no Claude Code",
      text: [
        "Por padrão, o Claude Code é reativo: você digita, ele trabalha, para e espera. Para torná-lo proativo são necessárias três coisas diferentes, e a maioria dos guias só fala de uma delas.",
      ],
      points: [
        "Ele age sem perguntar a cada passo: um output style e um modo de permissão que permitem tomar decisões de rotina.",
        "Ele começa a trabalhar sozinho: um loop, um agendamento ou um evento que inicia um turno sem você digitar nada.",
        "Ele sabe no que trabalhar em seguida: uma meta ou uma fila de trabalho, para que cada despertar tenha algo útil a fazer.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Passo a passo: deixe o Claude Code proativo",
      steps: [
        {
          title: "Ative o output style Proactive",
          text: "É isso que as pessoas costumam chamar de “modo proativo do Claude Code”. Não é um modo, e sim um output style (estilo de saída) nativo: o Claude começa a implementar assim que você passa uma tarefa, faz suposições razoáveis nas decisões de rotina em vez de perguntar e pula o planejamento, a menos que você peça um plano. Ele ainda confirma com você antes de apagar dados ou mexer em sistemas compartilhados ou de produção, e não altera os pedidos de permissão. Você também pode escolhê-lo em Output style no `/config`.",
          code: "/output-style Proactive",
        },
        {
          title: "Escolha um modo de permissão para trabalho sem supervisão",
          text: "Um agente que para a cada pedido de permissão não é proativo. O auto mode executa as ações com verificações de segurança em segundo plano em vez de perguntar, e o `acceptEdits` libera edições de arquivos, mas continua perguntando sobre outros comandos. Reserve o `bypassPermissions`, que pula todas as verificações, para containers e VMs isolados.",
          code: "claude --permission-mode auto",
        },
        {
          title: "Mantenha-o trabalhando até terminar com /goal",
          text: "O `/goal` recebe uma condição. Depois de cada turno, um modelo pequeno verifica se ela foi atendida e, se não foi, o Claude inicia outro turno sozinho. A meta é removida quando é atendida. Escreva uma condição que você mesmo conseguiria verificar, como uma suíte de testes passando.",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "Repita tarefas com /loop enquanto a sessão está aberta",
          text: "O `/loop` roda um prompt em um intervalo ou, se você omitir o intervalo, deixa o Claude escolher a espera depois de cada execução. Ele vive na sessão atual: a sessão precisa continuar aberta, loops recorrentes expiram depois de 7 dias e execuções perdidas enquanto ele estava ocupado não são recuperadas.",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "Agende para quando você não estiver no teclado",
          text: "As tarefas agendadas do Desktop rodam uma sessão nova no seu computador em horários definidos, desde que o app desktop do Claude esteja aberto e o computador acordado. As tarefas agendadas na nuvem, criadas com `/schedule`, rodam na nuvem da Anthropic, então seu computador pode estar desligado; elas rodam no máximo uma vez por hora e exigem um plano Pro, Max, Ultra, Team ou Enterprise. Para repositórios, a GitHub Action oficial pode rodar o Claude Code em um agendamento cron.",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "Deixe que eventos o acordem",
          text: "Os Channels enviam eventos para uma sessão em andamento: uma mensagem do Telegram, do Discord ou do iMessage, uma falha de CI ou um webhook, para que o Claude reaja sem você abrir o terminal. Os hooks rodam seus próprios comandos em pontos do ciclo de vida do Claude, como antes de uma chamada de ferramenta ou quando um turno termina. Os dois precisam da sessão rodando.",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "Fonte: documentação da Anthropic sobre tarefas agendadas no Claude Code",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "A peça que falta",
      title: "Adicione um heartbeat: acorde a mesma sessão para a próxima tarefa",
      text: [
        "Um heartbeat é um empurrãozinho curto e regular na mesma conversa do Claude Code, por exemplo a cada 30 minutos durante o horário de trabalho, que diz: confira seu trabalho e pegue a próxima tarefa. Diferente de uma tarefa agendada, que inicia uma sessão nova com o mesmo prompt toda vez, o heartbeat mantém uma única conversa, então o agente lembra o que fez da última vez e pega o próximo item de uma fila. Essa é a diferença entre uma tarefa que se repete e um funcionário que continua trabalhando.",
        "O Claude Code não tem uma configuração de heartbeat, mas o modo headless consegue retomar uma sessão, então dá para montar um à mão.",
      ],
      steps: [
        {
          title: "À mão: cron mais claude -p --resume",
          text: "Inicie uma sessão, guarde o ID dela e deixe o cron retomá-la em um ritmo regular com um prompt curto de heartbeat. Mantenha a fila de trabalho em um arquivo no repositório, como o TODO.md. Este é um exemplo nosso montado com flags documentadas; a documentação da Anthropic não descreve uma configuração de heartbeat.",
          code: "# Uma vez: inicie a sessão e guarde o ID dela\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e: a cada 30 minutos, das 9:00 às 17:30, em dias úteis\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "O que a versão faça-você-mesmo não cobre",
          text: "Você mesmo cuida do arquivo da fila e dos horários do cron, nada o impede de rodar fora do horário de trabalho a menos que você codifique isso no cron, um heartbeat que dispara enquanto você está usando a sessão esbarra em você, e não há como ver, entre vários agentes, o que cada um está fazendo.",
        },
        {
          title: "Com o Crewmark: heartbeat nativo",
          text: "O daemon do Crewmark envia o heartbeat para a própria conversa do funcionário a cada 15, 30 ou 60 minutos durante o horário de trabalho, espera se o agente estiver ocupado, e o quadro é a fila: a cada heartbeat, o funcionário pega a próxima tarefa e relata o andamento. Os detalhes estão [mais abaixo](#crewmark).",
        },
      ],
    },
    {
      kind: "table",
      title: "Qual opção serve para você",
      headers: ["Opção", "Começa a trabalhar sozinho", "O computador precisa estar ligado", "Ideal para"],
      rows: [
        ["Output style Proactive", "Não, ele age mais rápido depois que você pede", "Sim", "Menos perguntas durante uma tarefa"],
        ["/goal", "Sim, o próximo turno, até a condição ser atendida", "Sim", "Terminar uma tarefa sem precisar cutucar"],
        ["/loop", "Sim, em um intervalo, por até 7 dias", "Sim, com a sessão aberta", "Acompanhar um deploy, o CI ou um PR"],
        ["Tarefas agendadas do Desktop", "Sim, em horários definidos", "Sim, acordado e com o app aberto", "Tarefas diárias com arquivos locais"],
        ["Tarefas agendadas na nuvem", "Sim, no máximo uma vez por hora", "Não", "Tarefas que só precisam de um repositório"],
        ["GitHub Actions", "Sim, via cron ou eventos do GitHub", "Não", "Manutenção de repositórios"],
        ["Channels", "Sim, quando chega um evento", "Sim, com a sessão aberta", "Reagir a chat, CI e webhooks"],
        ["Heartbeat à mão (cron + `claude -p --resume`)", "Sim, no ritmo do seu cron, na mesma sessão", "Sim", "Um agente trabalhando em um arquivo TODO"],
        ["Heartbeat do Crewmark", "Sim, a cada 15–60 min no horário de trabalho, na mesma sessão", "Sim", "Agentes com backlog, metas e horário de trabalho"],
      ],
    },
    {
      kind: "text",
      title: "O que esses recursos ainda deixam para você",
      text: [
        "Cada recurso inicia um turno. Nenhum deles decide o que o agente deveria estar fazendo nesta semana. Na prática, isso deixa lacunas:",
      ],
      points: [
        "Um agendamento repete o mesmo prompt. Ele não pega a próxima tarefa de um backlog nem lembra o que a execução de ontem concluiu.",
        "Não existe um quadro onde você passa trabalho novo ao Claude e vê o que ele está fazendo, o que terminou e onde travou.",
        "Não há horário de trabalho nem metas: um loop roda até expirar, não até um número mudar.",
        "Com vários agentes, nada os coordena, então cada um precisa dos próprios prompts e agendamentos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Claude Code um trabalho fixo",
      text: [
        "O Crewmark transforma uma conversa do Claude Code em um funcionário de IA com cargo, meta, horário de trabalho e heartbeat, e passa trabalho para ele por um quadro. Ele roda no seu Claude Code de verdade, no plano que você já paga.",
      ],
      steps: [
        {
          title: "Contrate um funcionário e conecte a conversa dele",
          text: "Escolha um cargo, como especialista em SEO ou engenheiro de software, e rode no Claude Code o comando de configuração que o Crewmark fornece. Essa conversa vira o funcionário, então ele guarda a memória do trabalho entre um despertar e outro.",
        },
        {
          title: "Defina o horário de trabalho e o heartbeat",
          text: "Um pequeno programa em segundo plano no seu computador, o daemon do Crewmark, envia o prompt de heartbeat do funcionário para essa mesma conversa a cada 15, 30 ou 60 minutos durante o expediente e não mexe nela fora dele. Um heartbeat que chega enquanto o agente está ocupado espera até ele ficar livre.",
        },
        {
          title: "Atribua tarefas no quadro",
          text: "Quando você atribui uma tarefa ou comenta nela, a novidade chega à conversa do agente como uma mensagem. Se a conversa estiver fechada, o Crewmark a retoma com `claude -p --resume` em auto mode, então o trabalho é pego mesmo assim.",
        },
        {
          title: "Avalie por um número",
          text: "Dê a cada funcionário um KPI, como cliques no Search Console por mês. Ele planeja as tarefas em função desse número, move-as pelo quadro, comenta o andamento e manda mensagem quando precisa de uma decisão.",
        },
      ],
    },
    {
      kind: "text",
      title: "Use tudo junto",
      text: [
        "Os recursos nativos e o Crewmark se somam. Ative o output style Proactive e o auto mode na conversa do funcionário para que cada heartbeat produza trabalho de verdade, use o `/goal` dentro de uma tarefa que tenha um ponto de chegada claro e acompanhe pelo celular com o [Claude Code Remote Control](/remote-claude-code). Para tarefas avulsas que rodam sem você, veja [como rodar agentes do Claude Code em segundo plano e no modo headless](/blog/claude-code-background-agents). Usa o Codex? Veja [como deixar o Codex proativo](/proactive-codex).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Deixar o Claude Code proativo" },
  mid: {
    title: "Dispense o cron e a sessão aberta",
    text: "O Crewmark acorda sua sessão do Claude Code com um heartbeat durante o horário de trabalho e entrega a ela a próxima tarefa de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um heartbeat no Claude Code?",
        a: "Um empurrãozinho regular na mesma conversa do Claude Code, por exemplo a cada 30 minutos durante o horário de trabalho, dizendo ao agente para conferir o trabalho e pegar a próxima tarefa. Como ele retoma uma sessão em vez de iniciar uma nova, o agente lembra o trabalho anterior. Dá para montar um com cron e `claude -p --resume`; o Crewmark já traz isso pronto, com horário de trabalho e um quadro como fila.",
      },
      {
        q: "O Claude Code tem um modo proativo?",
        a: "Não como modo. O Claude Code tem um output style nativo chamado Proactive, ativado com `/output-style Proactive`, que o faz agir nas decisões de rotina em vez de perguntar. Ele não muda os pedidos de permissão; para isso, combine-o com o auto mode.",
      },
      {
        q: "Como rodar o Claude Code em horários agendados?",
        a: "Use o `/loop` enquanto uma sessão está aberta, as tarefas agendadas do Desktop para tarefas no seu computador, o `/schedule` para tarefas agendadas na nuvem que rodam com o computador desligado, ou a GitHub Action do Claude Code com um gatilho cron.",
      },
      {
        q: "O /loop continua rodando depois que eu fecho o Claude Code?",
        a: "Não. Um loop pertence à sua sessão, então para quando a sessão termina, e loops recorrentes expiram depois de 7 dias. Para algo que sobreviva à sessão, use tarefas agendadas ou um heartbeat do Crewmark.",
      },
      {
        q: "O Claude Code consegue trabalhar com o computador desligado?",
        a: "As tarefas agendadas na nuvem e as GitHub Actions conseguem, porque rodam em máquinas de terceiros. Tudo o que usa seus arquivos locais, incluindo as tarefas agendadas do Desktop, os Channels e o Crewmark, precisa do computador ligado.",
      },
      {
        q: "É seguro deixar o Claude Code rodando sem supervisão?",
        a: "Use o auto mode em vez do `bypassPermissions`, dê a ele um repositório onde toda mudança passa por revisão e mantenha as credenciais de produção fora do alcance. O Crewmark acrescenta horário de trabalho e um quadro, para você ver cada mudança que ele fez e por quê.",
      },
      {
        q: "O Crewmark gasta tokens extras?",
        a: "Não. Os funcionários rodam dentro do seu próprio Claude Code, na assinatura que você já tem, então não há uma segunda conta de tokens.",
      },
    ],
  },
  cta: {
    title: "Faça do Claude Code seu primeiro funcionário de IA",
    text: "Dê a ele um cargo, uma meta, horário de trabalho e um heartbeat, e atribua a primeira tarefa.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code da Anthropic em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
