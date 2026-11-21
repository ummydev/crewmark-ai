import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Mantenha o Mac acordado enquanto o Claude Code trabalha (ele pode dormir de novo quando o claude sair)
caffeinate -i claude --permission-mode auto

# Ou passe a tarefa para uma sessão na nuvem, que continua rodando com o notebook fechado
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# Enfileire o próximo passo nessa sessão na nuvem a partir de qualquer máquina
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "O Claude Code pode rodar 24/7? Rode durante a noite, sem supervisão",
    description:
      "Como manter o Claude Code trabalhando durante a noite ou o tempo todo: modos de permissão, /goal, manter a máquina acordada, sessões na nuvem, tarefas agendadas, limites de uso e o que faz ele parar.",
  },
  breadcrumb: "Rodar o Claude Code 24/7",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "O Claude Code pode rodar 24/7? Como rodá-lo durante a noite e sem supervisão",
    lead: "Sim, com limites. O Claude Code não tem um relógio próprio que o faça parar, mas quatro coisas fazem: a sessão termina ou o computador dorme, ele para em um pedido de permissão, ele bate no limite de uso do seu plano, ou ele termina e não tem o que fazer em seguida. Cada uma tem solução. Este guia mostra as formas de manter o Claude Code trabalhando enquanto você dorme, o que cada uma não faz e como dar a ele um turno da noite fixo.",
    cta: "Começar",
    secondary: "Rodar durante a noite",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Formas de manter o Claude Code rodando",
      text: [
        "Algumas mantêm uma única conversa, então o Claude se lembra do que fez; outras iniciam uma sessão nova a cada vez com o mesmo prompt.",
      ],
      headers: ["Opção", "O computador pode ficar desligado", "Mesma conversa", "Onde para", "Ideal para"],
      rows: [
        ["Sessão na nuvem (`claude --cloud`, claude.ai/code)", "Sim", "Sim", "Para depois de um tempo de inatividade; a VM é recolhida", "Uma tarefa longa que você delega antes de dormir"],
        ["Tarefas agendadas na nuvem (`/schedule`)", "Sim", "Não, uma sessão nova a cada execução", "No máximo de hora em hora; Pro, Max, Ultra, Team ou Enterprise", "Trabalhos recorrentes que só precisam de um repositório"],
        ["Tarefas agendadas no desktop", "Não: app aberto, computador acordado", "Não, uma sessão nova a cada execução", "Só enquanto a máquina está acordada", "Trabalhos noturnos em arquivos locais"],
        ["`/loop`", "Não: sessão aberta", "Sim", "Termina com a sessão; loops recorrentes expiram depois de 7 dias", "Acompanhar o CI ou um deploy por algumas horas"],
        ["cron + `claude -p --resume`", "Não", "Sim", "No ritmo do seu cron; você mesmo monta", "Um agente avançando por um arquivo TODO"],
        ["Heartbeat do Crewmark", "Não", "Sim", "No horário de trabalho que você definir, até depois da meia-noite", "Um trabalho fixo tirado de um quadro, issue por issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como rodar o Claude Code durante a noite",
      steps: [
        {
          title: "Escolha um modo de permissão que não pare a cada pedido",
          text: "Uma sessão esperando um pedido de permissão às 2h da manhã não faz nada até de manhã. O auto mode executa as ações com verificações de segurança em segundo plano em vez de perguntar. Deixe o `bypassPermissions`, que pula todas as verificações, para contêineres e VMs isolados.",
          code: overnight,
        },
        {
          title: "Dê a ele um ponto final",
          text: "O `/goal` recebe uma condição, como uma suíte de testes passando; depois de cada turno, o Claude a confere e inicia outro turno sozinho até ela ser cumprida. Para uma noite mais longa, deixe um arquivo TODO ou um plano escrito no repositório e diga a ele que vá cumprindo em ordem.",
        },
        {
          title: "Mantenha a máquina acordada ou leve o trabalho para a nuvem",
          text: "Uma sessão local precisa do computador ligado e do processo claude rodando. No Mac, `caffeinate -i` o mantém acordado enquanto o Claude Code roda; em um servidor, rode o claude dentro do tmux ou do screen para que ele sobreviva a um terminal fechado. Uma sessão na nuvem continua rodando depois que você fecha o notebook.",
        },
        {
          title: "Planeje os limites de uso",
          text: "Os planos do Claude usam uma janela móvel de 5 horas mais um limite semanal, compartilhados com o chat. O Max tem 5 vezes o uso do Pro; o Ultra tem 10 vezes o do Pro por semana e, para contas verificadas, nenhum limite de 5 horas. Se o limite chegar no meio da tarefa, o Claude Code pode terminar o passo atual (uma vez por semana no Pro, sempre no Max). Créditos de uso ou uma chave de API deixam ele continuar. Veja [como reduzir o uso de tokens do Claude Code](/blog/reduce-claude-code-token-usage).",
        },
        {
          title: "Acompanhe pelo celular",
          text: "O Remote Control deixa você ver uma sessão local pelo app do Claude ou pelo navegador, e as sessões na nuvem aparecem na aba Code do app. Se o Claude fez uma pergunta durante a noite, responda quando acordar e ele continua. Veja [Remote Control do Claude Code](/remote-claude-code).",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code sobre sessões na nuvem", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "O que faz o Claude Code parar durante a noite",
      points: [
        "O terminal fecha ou o computador dorme. Uma sessão de Remote Control se reconecta quando a máquina acorda, mas nenhum trabalho acontece enquanto ela dorme.",
        "Um pedido de permissão que ninguém responde. O auto mode evita a maioria deles.",
        "O limite de uso. A sessão espera a janela reiniciar, a menos que você adicione créditos ou uma chave de API.",
        "Inatividade na nuvem. As sessões na nuvem param depois de um tempo sem atividade, inclusive enquanto esperam você aprovar uma chamada de ferramenta MCP. Reabrir restaura a conversa, mas não os comandos de shell, subagentes ou um `/loop` que ainda estavam rodando.",
        "Acabar o trabalho. Quando a meta é cumprida ou a lista TODO fica vazia, ele para, que é o que você quer.",
        "Uma sessão muito longa. O Claude Code compacta o contexto automaticamente, então os detalhes iniciais só sobrevivem como resumo. Mantenha o plano em um arquivo, não só no chat.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Claude Code um turno da noite",
      text: [
        "Rodar a noite toda é fácil de começar e difícil de manter: alguém precisa enfileirar a próxima tarefa toda manhã. O Crewmark transforma uma conversa do Claude Code em um funcionário de IA com horário de trabalho e um heartbeat, para que ele continue pegando trabalho de um quadro por conta própria.",
      ],
      steps: [
        {
          title: "Defina o horário de trabalho",
          text: "O horário de trabalho pode passar da meia-noite, então um turno da noite como das 22:00 às 07:00 funciona, só em dias úteis ou todos os dias. Fora do horário, o funcionário dorme e não mexe no seu plano.",
        },
        {
          title: "Escolha o heartbeat",
          text: "Durante o turno, a CLI crewmark acorda a mesma conversa a cada 15, 30, 60, 120 ou 240 minutos para pegar a próxima issue. Se a conversa tiver sido fechada, o Crewmark a retoma com `claude -p --resume` em auto mode. O seu computador precisa ficar ligado.",
        },
        {
          title: "Leia o quadro de manhã",
          text: "Cada issue tem seus comentários e o registro de atividades, e tudo o que precisa de você chega como uma mensagem pela qual o funcionário espera. Veja [como deixar o Claude Code proativo](/proactive-claude-code) e [o que é um funcionário de IA](/ai-employees); para o Codex, leia [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar o Claude Code durante a noite" },
  mid: {
    title: "Quer o Claude Code no turno da noite toda noite?",
    text: "O Crewmark acorda o seu Claude Code com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre rodar o Claude Code 24/7",
    items: [
      {
        q: "O Claude Code pode rodar 24/7?",
        a: "Sim, desde que algo o mantenha rodando: uma sessão na nuvem ou uma tarefa agendada na nuvem com o computador desligado, ou uma sessão local em uma máquina que fique acordada, com um modo de permissão que não pare a cada pedido. Os limites de uso continuam valendo, então trabalho o tempo todo exige um plano com folga, ou créditos.",
      },
      {
        q: "Posso deixar o Claude Code rodando durante a noite?",
        a: "Sim. Inicie-o em auto mode com uma meta clara ou um arquivo TODO, mantenha a máquina acordada (ou use `claude --cloud`) e confira o resultado de manhã. Tudo o que precisar de você estará esperando como uma pergunta.",
      },
      {
        q: "O Claude Code continua rodando quando fecho o notebook?",
        a: "Uma sessão local, não: ela precisa do computador ligado e do processo claude rodando, e uma sessão de Remote Control termina quando o terminal dela fecha. Uma sessão na nuvem continua rodando, e você pode acompanhá-la pelo app do Claude.",
      },
      {
        q: "Existe um modo sem supervisão no Claude Code?",
        a: "Não com esse nome. Execuções sem supervisão combinam um modo de permissão que não pergunta (auto mode, ou `bypassPermissions` em um contêiner isolado) com o modo headless, `claude -p`, ou uma sessão na nuvem.",
      },
      {
        q: "Rodar o Claude Code a noite toda vai bater no meu limite de uso?",
        a: "Pode. Todos os planos do Claude dividem uma janela de 5 horas e um limite semanal entre o chat e o Claude Code; o Ultra elimina o limite de 5 horas para contas verificadas. Distribua o trabalho entre janelas com um heartbeat ou uma agenda, em vez de um único surto longo.",
      },
      {
        q: "É seguro deixar o Claude Code rodando sem supervisão?",
        a: "Use o auto mode em vez do `bypassPermissions` na sua própria máquina, trabalhe em um repositório em que toda mudança passe por revisão e mantenha as credenciais de produção fora de alcance. As sessões na nuvem rodam em VMs isoladas, com acesso de rede limitado por padrão.",
      },
    ],
  },
  cta: {
    title: "Dê ao Claude Code um turno da noite.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com a documentação do Claude Code (sessões na nuvem, tarefas agendadas, Remote Control) em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic. Claude e Claude Code são marcas registradas da Anthropic.",
};
