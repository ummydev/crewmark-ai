import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, executado como hook PreToolUse no Bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # vira o feedback para o Claude
  exit 2                                               # 2 = bloquear a ação
fi

exit 0  # sem decisão: vale o fluxo normal de permissões`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Hooks do Claude Code: eventos, exemplos e como funcionam | Crewmark",
    description:
      "Os hooks do Claude Code explicados: eventos do ciclo de vida, onde configurar, códigos de saída e saída JSON, e exemplos prontos para copiar: notificações, formatação automática, bloqueio de comandos e hooks Stop.",
  },
  breadcrumb: "Guia de hooks do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Hooks do Claude Code: eventos, exemplos e como funcionam",
    lead: "Os hooks do Claude Code são comandos que rodam automaticamente em pontos fixos de uma sessão: antes de uma ferramenta rodar, depois que um arquivo é editado, quando o Claude termina, quando ele precisa da sua resposta. Diferente das instruções do CLAUDE.md, que o Claude costuma seguir, um hook roda sempre, então é a forma de impor regras e automatizar tarefas repetitivas. Este guia cobre os eventos, onde os hooks são configurados, como os códigos de saída e o JSON controlam o que acontece, quatro exemplos prontos para usar e os tipos de hook mais novos: prompt, agent e HTTP.",
    cta: "Acesso antecipado",
    secondary: "Ir para os exemplos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Eventos de hooks do Claude Code",
      text: [
        "A referência lista mais de trinta eventos. Estes são os que a maioria dos hooks usa; um `matcher` restringe um hook a certas ferramentas, arquivos ou origens.",
      ],
      headers: ["Evento", "Quando dispara", "Uso comum"],
      rows: [
        ["`SessionStart`", "Uma sessão começa ou é retomada", "Carregar contexto, verificar o ambiente"],
        ["`UserPromptSubmit`", "Você envia um prompt, antes de o Claude vê-lo", "Adicionar contexto, bloquear prompts sensíveis"],
        ["`PreToolUse`", "Antes de uma chamada de ferramenta rodar; pode bloqueá-la", "Bloquear comandos perigosos, proteger arquivos"],
        ["`PermissionRequest`", "Uma chamada de ferramenta precisa de uma decisão de permissão", "Aprovar ou negar automaticamente pedidos específicos"],
        ["`PostToolUse`", "Depois que uma chamada de ferramenta dá certo", "Formatar, rodar o linter ou testar os arquivos editados"],
        ["`Notification`", "O Claude Code envia uma notificação", "Alertas na área de trabalho quando o Claude precisa de você"],
        ["`SubagentStart`, `SubagentStop`", "Um subagente começa ou termina", "Registrar ou conferir o trabalho delegado"],
        ["`Stop`", "O Claude termina de responder", "Verificar se a tarefa está mesmo concluída"],
        ["`PreCompact`, `PostCompact`", "Em torno da compactação do contexto", "Salvar ou reinjetar o contexto essencial"],
        ["`FileChanged`, `CwdChanged`", "Um arquivo observado ou o diretório de trabalho muda", "Recarregar o ambiente, reformatar arquivos"],
        ["`SessionEnd`", "A sessão termina", "Limpar, gravar um log"],
      ],
    },
    {
      kind: "table",
      title: "Onde colocar os hooks",
      headers: ["Local", "Escopo", "Compartilhado"],
      rows: [
        ["`~/.claude/settings.json`", "Todos os seus projetos", "Não"],
        ["`.claude/settings.json`", "Um projeto", "Sim, faça commit"],
        ["`.claude/settings.local.json`", "Um projeto", "Não, fica no gitignore"],
        ["Configurações de política gerenciadas", "A organização inteira", "Controlado pelo administrador"],
        ["`hooks/hooks.json` de um plugin", "Enquanto o plugin está ativado", "Sim, com o plugin"],
        ["Frontmatter de uma skill ou de um subagente", "Depois que a skill é invocada, ou enquanto o subagente roda", "Sim, no arquivo"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Exemplos de hooks do Claude Code, passo a passo",
      text: [
        "Adicione cada bloco sob a chave `hooks` de um arquivo de configuração; se o arquivo já tiver um objeto `hooks`, adicione o evento como uma chave irmã em vez de substituí-lo. Rode `/hooks` para confirmar que o Claude Code carregou o hook. Você também pode pedir para o Claude escrever o hook por você.",
      ],
      steps: [
        {
          title: "Receba uma notificação na área de trabalho quando o Claude precisar de você",
          text: "Um hook `Notification` em `~/.claude/settings.json`. Este usa `osascript` no macOS; use `notify-send` no Linux ou PowerShell no Windows.",
          code: notify,
        },
        {
          title: "Formate automaticamente cada arquivo que o Claude editar",
          text: "Um hook `PostToolUse` com o matcher `Edit|Write` lê o caminho editado do JSON recebido no stdin com `jq` e roda o Prettier nele. Coloque em `.claude/settings.json` para o time todo compartilhar.",
          code: format,
        },
        {
          title: "Bloqueie um comando perigoso",
          text: "Um hook `PreToolUse` no `Bash` roda este script. O código de saída 2 bloqueia a chamada, e o que você escrever no stderr vira o feedback para o Claude, que assim pode mudar de rumo. Sair com 0 significa nenhuma decisão, então as permissões normais continuam valendo.",
          code: block,
        },
        {
          title: "Mantenha o Claude trabalhando até a tarefa terminar",
          text: "Um hook `Stop` do tipo `prompt` pergunta a um modelo se tudo está concluído. Se a resposta for `ok: false`, o Claude continua trabalhando com o `reason` como próxima instrução. É o exemplo clássico de hook Stop.",
          code: stop,
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "Como os hooks decidem o que acontece",
      points: [
        "Entrada: cada hook recebe o evento como JSON no stdin, como o nome da ferramenta e `tool_input`, o ID da sessão e `cwd`.",
        "Saída 0: nenhuma objeção. Em alguns eventos, como `SessionStart` e `UserPromptSubmit`, o stdout em texto puro é adicionado ao contexto do Claude.",
        "Saída 2: bloquear, quando o evento permite. O stderr volta para o Claude ou para você, dependendo do evento.",
        "JSON no stdout: controle mais fino, como `hookSpecificOutput` com uma decisão de permissão, `updatedInput` para reescrever a entrada de uma ferramenta, ou `additionalContext`.",
        "Outros códigos de saída: em geral um erro que não bloqueia, a menos que o hook defina `onFailure: \"block\"`.",
        "Os hooks que casam com o mesmo evento rodam em paralelo.",
      ],
    },
    {
      kind: "table",
      title: "Hooks do tipo command, prompt, agent e HTTP",
      headers: ["Tipo", "O que roda", "Timeout padrão"],
      rows: [
        ["`command`", "Um comando de shell", "10 minutos"],
        ["`http`", "Um POST do JSON do evento para uma URL; o corpo da resposta funciona como a saída de um comando", "10 minutos"],
        ["`mcp_tool`", "Uma ferramenta de um servidor MCP configurado", "10 minutos"],
        ["`prompt`", "Uma única chamada ao modelo que responde `ok` ou não", "30 segundos"],
        ["`agent`", "Um subagente que pode ler arquivos e rodar ferramentas antes de decidir (experimental)", "60 segundos"],
      ],
    },
    {
      kind: "text",
      title: "Hooks vs. skills vs. CLAUDE.md, e outras pegadinhas",
      points: [
        "O CLAUDE.md e as [skills](/blog/claude-code-skills) são instruções que o Claude costuma seguir; os hooks rodam sempre. Coloque num hook tudo o que nunca pode ser pulado.",
        "O `PostToolUse` não desfaz uma ação que já rodou; use o `PreToolUse` para impedi-la.",
        "O `Stop` dispara sempre que o Claude termina uma resposta, não só no fim de uma tarefa, e não quando o usuário interrompe.",
        "Os hooks não conseguem rodar slash commands nem chamar ferramentas por conta própria; eles só respondem por códigos de saída, stdout, stderr ou JSON.",
        "`\"disableAllHooks\": true` desliga os hooks; os hooks gerenciados continuam rodando, a menos que as configurações gerenciadas também os desliguem.",
        "Os hooks são locais à sua configuração do Claude Code. Verificações para a organização inteira em todos os produtos Claude são outro recurso: os [inference hooks do Claude](/blog/claude-inference-hooks).",
        "Um hook PreToolUse que filtra a saída dos testes também é uma das melhores formas de [reduzir o uso de tokens](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Os hooks mantêm o Claude Code na linha. O Crewmark mantém ele trabalhando.",
      text: [
        "Os hooks são o que deixa seguro um agente sem supervisão: formatação, testes e proteções rodam sempre. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, com os hooks do seu projeto no lugar.",
      ],
      steps: [
        {
          title: "Faça commit dos seus hooks",
          text: "Os hooks de `.claude/settings.json` carregam na sessão do funcionário como na sua, então as edições dele são formatadas e os comandos arriscados, bloqueados.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Responda só ao que precisa de você",
          text: "Ele comenta nas issues dele e manda mensagem quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Adicionar hooks ao Claude Code" },
  mid: {
    title: "Seus hooks rodam sempre. E o seu agente?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre hooks do Claude Code",
    items: [
      {
        q: "O que são os hooks do Claude Code?",
        a: "Comandos, chamadas HTTP ou verificações com um modelo, definidos pelo usuário, que o Claude Code roda automaticamente em eventos do ciclo de vida, como antes de uma ferramenta rodar ou quando o Claude termina. Eles dão um controle determinístico em vez de depender de o Claude lembrar uma instrução.",
      },
      {
        q: "Onde configuro os hooks do Claude Code?",
        a: "Sob `hooks` em `~/.claude/settings.json` (todos os projetos), `.claude/settings.json` (compartilhado com o time) ou `.claude/settings.local.json` (só para você). Plugins, skills e subagentes também podem trazer hooks. Rode `/hooks` para ver o que está carregado.",
      },
      {
        q: "Como bloqueio um comando com um hook?",
        a: "Use um hook `PreToolUse` com o matcher `Bash`. Leia o comando do JSON recebido no stdin e saia com o código 2 e um motivo no stderr para bloqueá-lo; o Claude vê o motivo e se ajusta.",
      },
      {
        q: "O que é um hook Stop?",
        a: "Um hook no evento `Stop`, que dispara quando o Claude termina de responder. Um hook Stop do tipo prompt pode verificar se a tarefa está completa e, se não estiver, mandar o Claude de volta ao trabalho com um motivo.",
      },
      {
        q: "Hooks vs. skills: qual é a diferença?",
        a: "Skills são instruções e arquivos que o Claude carrega quando são relevantes e costuma seguir. Hooks são código que o Claude Code roda toda vez que um evento dispara, seja qual for a decisão do Claude.",
      },
      {
        q: "Por que o meu hook não dispara?",
        a: "Verifique se ele aparece em `/hooks`, se o nome do evento e o matcher estão escritos exatamente certo, se o script é executável e se a saída do perfil do seu shell não está corrompendo o JSON dele. Inicie o Claude Code com um log de depuração para ver o que cada hook fez.",
      },
      {
        q: "Os hooks do Claude Code são a mesma coisa que os inference hooks?",
        a: "Não. Os hooks do Claude Code rodam na sua máquina, nas suas sessões. Os inference hooks são um recurso do Claude Enterprise que envia cada prompt da organização a um servidor de segurança antes de o Claude rodar.",
      },
    ],
  },
  cta: {
    title: "Proteções nos hooks, trabalho a partir de um quadro.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code (guia de hooks e referência de hooks) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
