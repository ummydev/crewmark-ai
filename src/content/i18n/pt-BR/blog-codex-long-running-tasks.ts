import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# Interativo: planeje o resultado e depois dê ao Codex uma meta que ele mesmo confere
/plan
/goal all tests in test/auth pass and the lint step is clean

# Headless, a partir de um script ou do cron: deixe ele editar arquivos no workspace
codex exec --sandbox workspace-write "Work through TODO.md in order"

# Na manhã seguinte, ou na próxima execução do cron: continue a mesma sessão
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Tarefas longas no Codex: rode o Codex durante a noite",
    description:
      "Como manter o OpenAI Codex trabalhando por horas ou durante a noite: /goal e /plan, tarefas na nuvem, codex exec resume, manter o Mac acordado, acompanhar pelo celular, limites de uso e o que faz ele parar.",
  },
  breadcrumb: "Tarefas longas no Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Tarefas longas no Codex: como rodar o Codex durante a noite ou em segundo plano",
    lead: "O Codex consegue trabalhar em uma tarefa por horas, e pode continuar enquanto você dorme, se quatro coisas estiverem resolvidas: uma meta que ele mesmo consiga conferir, um computador que fique acordado (ou uma tarefa na nuvem), aprovações que não fiquem esperando por você e espaço suficiente no seu plano. Este guia mostra as formas de rodar tarefas longas no Codex, do Goal mode às tarefas na nuvem e ao `codex exec resume`, o que cada uma não faz e como dar ao Codex um turno da noite fixo.",
    cta: "Começar",
    secondary: "Rodar durante a noite",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Formas de manter o Codex rodando",
      text: [
        "Algumas mantêm um único chat, então o Codex preserva o contexto; outras começam do zero a cada vez.",
      ],
      headers: ["Opção", "O computador pode dormir", "Mesmo chat", "Onde para", "Ideal para"],
      rows: [
        ["Goal mode (`/goal`)", "Não, para trabalho local", "Sim", "Quando a meta é cumprida ou quando precisa de uma decisão", "Uma tarefa com um ponto final claro"],
        ["Tarefa no Codex Cloud", "Sim", "Sim", "Quando a tarefa termina; você revisa e abre um pull request", "Delegar uma tarefa antes de dormir"],
        ["Tarefa agendada em um chat", "Não, para arquivos locais: computador ligado, app rodando", "Sim", "Roda na própria agenda: minutos, diária ou semanal", "Retomar o mesmo trabalho em intervalos"],
        ["`codex exec` pelo cron", "Não", "Sim, com `codex exec resume`", "No ritmo do seu cron; você mesmo monta", "Scripts e CI"],
        ["Heartbeat do Crewmark", "Não", "Sim", "No horário de trabalho que você definir, até depois da meia-noite", "Um trabalho fixo tirado de um quadro, issue por issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como rodar o Codex durante a noite",
      steps: [
        {
          title: "Dê a ele uma meta que ele consiga conferir",
          text: "No app desktop, na CLI ou na extensão de IDE, `/goal` inicia o Goal mode: o texto da meta é ao mesmo tempo o primeiro prompt e o ponto final. Se você não tem certeza de como é o “pronto”, `/plan` faz perguntas e transforma o resultado em uma meta com critérios mensuráveis. Inclua uma verificação, como uma suíte de testes passando.",
          code: commands,
        },
        {
          title: "Mantenha o computador acordado ou mande para a nuvem",
          text: "Para trabalho local em um Mac, ative “Prevent sleep while running” no app desktop. Uma tarefa no Codex Cloud roda no próprio workspace e continua trabalhando enquanto o seu computador dorme; inicie uma escolhendo Work in > Cloud e um ambiente.",
        },
        {
          title: "Configure as aprovações para ele não parar às 2h da manhã",
          text: "Uma meta mantém o mesmo sandbox e a mesma política de aprovação, e pausa quando precisa de uma decisão. Deixe-o editar o workspace com `--sandbox workspace-write`, ou use “Approve for me” para que um revisor cuide dos pedidos rotineiros. O `--full-auto` não é mais suportado, e o `danger-full-access` só deve ser usado em um runner ou contêiner isolado.",
        },
        {
          title: "Planeje os limites de uso",
          text: "O Codex divide a cota do seu plano do ChatGPT: uma janela móvel de 5 horas mais limites semanais, e as tarefas na nuvem tiram do mesmo bolo. O ChatGPT Pro hoje não tem limite de 5 horas; limites semanais podem se aplicar. Créditos ou uma chave de API deixam o trabalho local continuar. Veja [Claude Code vs Codex](/blog/claude-code-vs-codex) para os números.",
        },
        {
          title: "Acompanhe pelo celular",
          text: "No app do ChatGPT, você pode acompanhar uma tarefa, aprovar comandos e revisar diffs, tanto para tarefas na nuvem quanto para um Mac ou PC com Windows conectado em Settings > Connections. O computador conectado precisa ficar acordado e online. Veja [remote control do Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI sobre trabalho de longa duração", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "O que faz uma tarefa longa do Codex parar",
      points: [
        "Uma decisão que só você pode tomar. O Goal mode pausa em vez de ampliar o próprio acesso, então confira as aprovações antes de sair.",
        "Repouso ou perda de conexão no trabalho local. A OpenAI sugere pausar a meta antes de quando você espera perder a conectividade e retomá-la depois.",
        "O limite de uso, até a janela reiniciar ou você adicionar créditos.",
        "Dois chats editando os mesmos arquivos. Dê a chats paralelos as suas próprias git worktrees.",
        "Acabar o trabalho. Quando a meta é cumprida, ele para, que é o que você quer; para uma lista de tarefas, mantenha-as em um arquivo que ele vai cumprindo.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Codex um turno da noite",
      text: [
        "Uma tarefa longa termina; um trabalho fixo, não. O Crewmark transforma uma conversa do Codex em um funcionário de IA com horário de trabalho e um heartbeat, para que ele continue pegando a próxima issue de um quadro sem você ter de enfileirá-la.",
      ],
      steps: [
        {
          title: "Defina o horário de trabalho",
          text: "O horário de trabalho pode passar da meia-noite, então um turno da noite como das 22:00 às 07:00 funciona, só em dias úteis ou todos os dias. Fora do horário, o funcionário dorme e não mexe no seu plano.",
        },
        {
          title: "Escolha o heartbeat",
          text: "A cada 15, 30, 60, 120 ou 240 minutos durante o turno, a CLI crewmark coloca uma mensagem na fila da mesma conversa do Codex com `codex queue --resume` e a inicia, para que o funcionário pegue a próxima issue. O seu computador precisa ficar ligado.",
        },
        {
          title: "Leia o quadro de manhã",
          text: "Cada issue tem seus comentários e o registro de atividades, e tudo o que precisa de você chega como uma mensagem pela qual o funcionário espera. Veja [como deixar o Codex proativo](/proactive-codex) e [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar o Codex durante a noite" },
  mid: {
    title: "Quer o Codex no turno da noite toda noite?",
    text: "O Crewmark acorda o seu Codex com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre tarefas longas no Codex",
    items: [
      {
        q: "O Codex pode rodar durante a noite?",
        a: "Sim. Dê a ele uma meta com `/goal`, mantenha o Mac acordado com “Prevent sleep while running” (ou use uma tarefa no Codex Cloud, que continua trabalhando enquanto o computador dorme), configure as aprovações para ele não esperar por você e revise o resultado de manhã.",
      },
      {
        q: "Como rodo o Codex em segundo plano?",
        a: "Rode `codex exec` sem a interface interativa, a partir de um script, do cron ou do CI, e continue a mesma sessão depois com `codex exec resume --last`. Ou inicie uma tarefa no Codex Cloud pela web ou pelo app desktop e feche a janela.",
      },
      {
        q: "O que é o Goal mode no Codex?",
        a: "O Goal mode, iniciado com `/goal`, mantém o Codex trabalhando rumo a uma meta que você escreve; o texto da meta é ao mesmo tempo o primeiro prompt e o critério de conclusão. Você pode pausar, retomar, editar ou apagar a meta pela linha de progresso no app desktop.",
      },
      {
        q: "O Codex continua trabalhando com o computador em repouso?",
        a: "As tarefas na nuvem, sim. O trabalho local precisa do computador acordado, o que a opção “Prevent sleep while running” do app desktop resolve no Mac; um computador conectado que você controla pelo celular também precisa ficar acordado e online.",
      },
      {
        q: "Uma execução longa do Codex vai bater no meu limite de uso?",
        a: "Pode. O Codex usa a janela de 5 horas e os limites semanais do seu plano do ChatGPT, e as tarefas na nuvem tiram da mesma cota. Distribua o trabalho entre janelas com uma agenda ou um heartbeat, em vez de um único surto longo.",
      },
      {
        q: "É seguro rodar o Codex sem supervisão?",
        a: "Use `--sandbox workspace-write` ou “Approve for me” na sua própria máquina, use `danger-full-access` só em um runner ou contêiner isolado e trabalhe em um repositório em que as mudanças passem por revisão.",
      },
    ],
  },
  cta: {
    title: "Dê ao Codex um turno da noite.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação do Codex da OpenAI (trabalho de longa duração, Codex Cloud, modo não interativo, mobile, tarefas agendadas) em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI. Codex e ChatGPT são marcas registradas da OpenAI.",
};
