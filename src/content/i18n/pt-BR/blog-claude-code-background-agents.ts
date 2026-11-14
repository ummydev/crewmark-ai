import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code em segundo plano: headless e --bg | Crewmark AI",
    description:
      "Claude Code em segundo plano: tarefas em background, agent view com --bg, claude -p headless com cron, sessões na nuvem, agendamentos e permissões.",
  },
  breadcrumb: "Agentes do Claude Code em segundo plano",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Como rodar agentes do Claude Code em segundo plano",
    lead: "Um agente em segundo plano continua trabalhando enquanto você faz outra coisa: uma longa execução de testes que você mandou para o background, uma sessão que você iniciou com --bg antes de fechar o terminal, ou uma tarefa headless com claude -p que o cron dispara toda manhã. O Claude Code tem uma ferramenta para cada um desses casos. Este guia mostra como usá-las, o que mantém cada uma rodando e as permissões de que uma execução sem supervisão precisa.",
    cta: "Começar",
    secondary: "Ir para o modo headless",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Cinco jeitos de rodar o Claude Code em segundo plano",
      text: ["Eles diferem no que precisa continuar rodando e em quem inicia o trabalho."],
      headers: ["", "Começa com", "Continua rodando enquanto", "Bom para"],
      rows: [
        ["Tarefas em background", "Ctrl+B, ou o Claude roda um comando em background", "A sessão está aberta", "Builds e testes longos, subagentes, dentro de uma conversa"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "O computador está ligado (o terminal pode ser fechado)", "Várias sessões que você inicia agora e confere depois"],
        ["Modo headless", "`claude -p \"<prompt>\"`, a partir de um script ou do cron", "O comando está rodando", "Scripts, cron jobs, CI"],
        ["Sessões na nuvem", "`claude --cloud \"<task>\"`", "Os servidores da Anthropic a rodam (o notebook pode ser fechado)", "Tarefas longas em um repositório do GitHub"],
        ["Tarefas agendadas", "`/schedule`, o app desktop ou `/loop`", "Depende do tipo: nuvem, app aberto ou sessão aberta", "Trabalho recorrente; veja [como deixar o Claude Code proativo](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "Tarefas em background dentro de uma sessão",
      text: [
        "Pressione Ctrl+B enquanto o Claude está rodando um comando Bash ou um subagente para mandá-lo para o background (duas vezes no tmux) e continue conversando com o Claude. O Claude também pode iniciar um comando em background por conta própria. Os subagentes que o Claude cria rodam em background por padrão.",
        "Digite `/tasks` para listar os shells e subagentes em execução e acompanhá-los. Em uma sessão no terminal local, um comando em background não tem limite de tempo, mas para quando o Claude Code é encerrado. Para rodar vários agentes lado a lado, veja [como rodar vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent view: sessões que sobrevivem ao terminal",
      text: [
        "`claude --bg \"<prompt>\"` inicia uma sessão em background e retorna na hora; `/bg` manda para o background a sessão em que você está. Um processo supervisor as executa, então fechar o terminal não as interrompe, mas desligar ou reiniciar o computador, sim, e uma sessão ociosa e desanexada é encerrada depois de cerca de uma hora.",
        "`claude agents` abre o agent view; `claude attach <id>`, `claude logs <id>` e `claude stop <id>` gerenciam uma sessão. O agent view é um research preview, então os comandos podem mudar.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Rode o Claude Code em modo headless com claude -p",
      steps: [
        {
          title: "Rode um prompt e saia",
          text: "`-p` (ou `--print`) roda o Claude Code sem a interface interativa e sai quando termina, com código de saída 0 em caso de sucesso. Você também pode enviar a entrada por pipe.",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "Obtenha uma saída que um script consiga ler",
          text: "`--output-format json` retorna o resultado com o ID da sessão e metadados, incluindo `total_cost_usd`, uma estimativa calculada na sua máquina. `stream-json` (com `--verbose`) transmite os eventos à medida que acontecem.",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "Libere só as ferramentas de que ele precisa",
          text: "No modo headless, não há ninguém para aprovar um pedido de permissão. Desde a v2.1.302, uma execução sem modo definido começa em Manual e nega tudo o que precisaria de aprovação. Use `--allowedTools` para o que ele pode fazer e `--permission-mode dontAsk` para negar o resto em vez de ficar esperando.",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "Limite a execução",
          text: "`--max-turns` para depois de um número de turnos do agente, e `--max-budget-usd`, ao atingir um custo estimado (pode passar um pouco). Os dois só funcionam com `-p`.",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "Continue a mesma conversa depois",
          text: "Guarde o ID da sessão da saída JSON e passe-o para `--resume`, ou use `--continue` para a sessão mais recente no diretório.",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "Agende com o cron",
          text: "A documentação da Anthropic não traz um exemplo de cron; este usa só flags documentadas. O cron tem um PATH mínimo, então use o caminho completo que `which claude` mostra e crie antes a pasta de logs. Não acrescente `--bare` aqui: ele ignora o login da sua assinatura e exige uma chave de API.",
          code: '# crontab -e: dias úteis às 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: { label: "Fonte: documentação da Anthropic sobre o modo headless", href: "https://code.claude.com/docs/en/headless" },
    },
    {
      kind: "text",
      title: "Permissões para execuções sem supervisão",
      points: [
        "`dontAsk` mais uma lista em `--allowedTools` é a opção mais restrita: nega tudo o que não estiver na lista.",
        "`auto` deixa um classificador revisar cada ação no seu lugar. A Anthropic avisa que isso não garante segurança.",
        "`acceptEdits` aprova edições de arquivos e comandos simples de arquivo, mas não outros comandos de shell.",
        "`bypassPermissions` pula os pedidos de permissão e as verificações de segurança. A Anthropic recomenda usá-lo só em containers ou VMs isolados e sem acesso à internet, porque ele não oferece proteção contra prompt injection.",
        "Para regras que valem para todas as execuções de um projeto, coloque `permissions.allow` e `permissions.deny` em `.claude/settings.json`. As regras de negação sempre prevalecem.",
      ],
    },
    {
      kind: "text",
      title: "Opções na nuvem: quando seu computador está desligado",
      points: [
        "Sessões na nuvem: `claude --cloud \"<task>\"` roda na infraestrutura da Anthropic a partir da sua branch no GitHub e continua com o notebook fechado. Envie complementos com `claude -p \"...\" --cloud <session-id>`.",
        "Tarefas agendadas na nuvem: criadas com `/schedule` ou em claude.ai/code, rodam em horários definidos (no máximo uma vez por hora), a partir de uma chamada de API ou de eventos do GitHub. Planos Pro, Max, Ultra, Team e Enterprise; research preview.",
        "GitHub Actions: `anthropics/claude-code-action@v1` com um gatilho `schedule`. Um token OAuth gerado com `claude setup-token` usa sua assinatura; uma chave de API é cobrada por token.",
      ],
    },
    {
      kind: "steps",
      kicker: "Com o Crewmark",
      title: "Dê um trabalho fixo a um agente em segundo plano",
      text: [
        "Tarefas em background, agent view e cron iniciam um trabalho que você já decidiu. O Crewmark dá a uma sessão do Claude Code um cargo contínuo: ela acorda com um heartbeat durante o horário de trabalho, pega a próxima tarefa de um quadro e manda mensagem para você quando trava.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um cargo e uma meta em números e rode no Claude Code o comando de configuração que o Crewmark fornece. Essa conversa vira o funcionário.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "O daemon do Crewmark acorda a sessão a cada 15, 30 ou 60 minutos durante o horário de trabalho, na assinatura que você já paga, e não mexe nela fora desse horário.",
        },
        {
          title: "Atribua tarefas e responda às mensagens",
          text: "Adicione trabalho como tarefas no quadro; o funcionário as pega, comenta enquanto avança e pergunta a você quando precisa de uma revisão. Veja [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar o Claude Code em modo headless com claude -p" },
  mid: {
    title: "Quer que ele escolha a própria próxima tarefa?",
    text: "O Crewmark acorda sua sessão do Claude Code com um heartbeat e entrega a ela a próxima tarefa de um quadro, no horário de trabalho que você definir.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas sobre agentes do Claude Code em segundo plano",
    items: [
      {
        q: "Como rodar o Claude Code em segundo plano?",
        a: "Dentro de uma sessão, pressione Ctrl+B para mandar para o background um comando ou subagente em execução. Para iniciar uma sessão inteira em background, use `claude --bg \"<prompt>\"`. Para scripts e cron, use o modo headless: `claude -p \"<prompt>\"`.",
      },
      {
        q: "O que é o modo headless do Claude Code?",
        a: "Rodar o Claude Code com `-p` (ou `--print`): ele recebe um prompt, trabalha sem a interface interativa e sai, imprimindo o resultado como texto, JSON ou um fluxo de eventos JSON.",
      },
      {
        q: "Um agente em segundo plano continua rodando quando eu fecho o terminal?",
        a: "Tarefas em background dentro de uma sessão param quando o Claude Code é encerrado. Sessões iniciadas com `--bg` continuam rodando depois que o terminal fecha, até o computador desligar. Sessões na nuvem e tarefas agendadas na nuvem continuam rodando com o computador desligado.",
      },
      {
        q: "Qual modo de permissão usar em uma execução sem supervisão?",
        a: "Comece com `--permission-mode dontAsk` e uma lista em `--allowedTools` com exatamente o que a tarefa precisa. Use `bypassPermissions` só dentro de um container ou VM isolado e sem acesso à internet.",
      },
      {
        q: "O claude -p usa minha assinatura do Claude?",
        a: "Ele usa o login que estiver ativo, a menos que você passe `--bare`, que ignora o login e exige uma chave de API. A documentação da Anthropic não explica como as execuções headless contam nos limites de uso de um plano.",
      },
      {
        q: "Como acompanho os agentes em segundo plano?",
        a: "Use `/tasks` dentro de uma sessão, `claude agents` para sessões iniciadas com `--bg` e o arquivo de log ou a saída JSON para execuções headless.",
      },
    ],
  },
  cta: {
    title: "Dê ao Claude Code um trabalho fixo.",
    text: "O Crewmark transforma uma sessão do Claude Code em um funcionário de IA com cargo, meta, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code da Anthropic em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
