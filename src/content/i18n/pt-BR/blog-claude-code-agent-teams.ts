import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-code-agent-teams; the English master is
// src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Agent teams do Claude Code vs subagentes | Crewmark AI",
    description:
      "Os agent teams do Claude Code explicados a partir da documentação: como diferem dos subagentes, como ativar e iniciar um, painéis no tmux e iTerm2, tamanho da equipe, custo em tokens e limitações, com prompts de exemplo.",
  },
  breadcrumb: "Agent teams do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Agent teams do Claude Code vs subagentes: quando usar cada um e como montar uma equipe",
    lead: "Os agent teams permitem que uma sessão do Claude Code atue como líder de equipe e crie colegas: instâncias separadas do Claude Code, cada uma com sua própria janela de contexto, que compartilham uma lista de tarefas e trocam mensagens diretamente. Os subagentes são mais leves: ajudantes dentro de uma sessão que fazem um trabalho específico e devolvem um resumo. Os agent teams são experimentais e vêm desativados. Este guia compara os dois com base na documentação da Anthropic e depois mostra como ativar as equipes, iniciar uma, ver os colegas em painéis do tmux ou iTerm2 e evitar os problemas mais comuns.",
    cta: "Começar",
    secondary: "Montar uma equipe",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams vs subagentes",
      text: [
        "Os dois executam trabalho em paralelo em janelas de contexto separadas. A diferença é quem coordena: com subagentes, o agente principal gerencia tudo; em uma equipe, os colegas pegam tarefas de uma lista compartilhada e conversam entre si.",
      ],
      headers: ["", "Subagentes", "Agent teams"],
      rows: [
        ["O que são", "Ajudantes dentro de uma sessão, definidos em `.claude/agents/` ou integrados (Explore, Plan, general-purpose)", "Uma sessão líder mais instâncias separadas do Claude Code como colegas"],
        ["Contexto", "Janela de contexto própria; só um resumo volta para quem chamou", "Janela de contexto própria; totalmente independentes"],
        ["Comunicação", "Devolvem um resultado para quem chamou (subagentes nomeados podem trocar mensagens)", "Os colegas trocam mensagens diretamente; você pode escrever para qualquer um"],
        ["Coordenação", "O agente principal gerencia todo o trabalho", "Lista de tarefas compartilhada com reserva de tarefas, dependências e mensagens"],
        ["Ideal para", "Tarefas focadas em que só o resultado importa", "Trabalho que exige discussão: revisão, debate, funcionalidades divididas por camada"],
        ["Custo em tokens", "Menor", "Maior: cada colega é uma instância separada do Claude"],
        ["Status", "Disponível para todos", "Experimental, desativado por padrão"],
      ],
    },
    {
      kind: "text",
      title: "Quando usar agent teams (e quando não usar)",
      points: [
        "Pesquisa e revisão: os colegas analisam um problema por ângulos diferentes e depois contestam as conclusões uns dos outros.",
        "Novos módulos ou funcionalidades: cada colega cuida de uma parte, como frontend, backend e testes.",
        "Depuração com hipóteses concorrentes: vários colegas tentam provar a própria teoria e derrubar as dos outros.",
        "Não para trabalho sequencial, edições nos mesmos arquivos ou tarefas com muitas dependências: nesses casos, use uma única sessão ou subagentes.",
        "Não para trabalho rotineiro: o uso de tokens cresce a cada colega ativo.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como montar um agent team no Claude Code",
      steps: [
        {
          title: "Ative os agent teams",
          text: "Defina `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` como `1` no seu ambiente ou no bloco `env` do settings.json. As equipes precisam de uma sessão interativa; com `-p` (e com o Agent SDK) o Claude não cria colegas.",
          code: enable,
        },
        {
          title: "Descreva a equipe em linguagem natural",
          text: "Diga quantos colegas quer e o que cada um faz. O Claude cria a lista de tarefas compartilhada, inicia os colegas e sintetiza as conclusões quando eles terminam.",
          code: prompt,
        },
        {
          title: "Escolha um modo de exibição",
          text: "O modo in-process é o padrão e funciona em qualquer terminal: os colegas aparecem em um painel abaixo do prompt; use as setas e Enter para abrir um e mandar mensagem, e `Ctrl+T` para a lista de tarefas. Os painéis divididos dão a cada colega seu próprio painel e exigem tmux ou iTerm2 com a CLI `it2`; defina `teammateMode` como `auto` ou `tmux`, ou inicie com `claude --teammate-mode auto`.",
        },
        {
          title: "Reaproveite papéis que você já definiu",
          text: "Peça um colega “usando o tipo de agente security-reviewer” para reaproveitar uma definição de subagente de `.claude/agents/`, com suas ferramentas, modelo e instruções.",
        },
        {
          title: "Oriente e depois encerre",
          text: "Acompanhe os colegas, redirecione-os e diga “espere seus colegas” se o líder começar a fazer o trabalho deles. Para terminar, peça ao líder que encerre um colega pelo nome; os diretórios da equipe são limpos quando a sessão termina.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Agent teams", href: docs },
    },
    {
      kind: "text",
      title: "Boas práticas e limitações",
      points: [
        "Comece com 3–5 colegas e cerca de 5–6 tarefas para cada um; três colegas focados costumam render mais que cinco dispersos.",
        "Dê a cada colega um conjunto diferente de arquivos: dois colegas editando o mesmo arquivo sobrescrevem um ao outro.",
        "Coloque os detalhes da tarefa no prompt de criação: os colegas carregam o CLAUDE.md, os servidores MCP e as skills, mas não a conversa do líder.",
        "Use hooks como portões de qualidade: `TeammateIdle`, `TaskCreated` e `TaskCompleted` podem devolver o trabalho com o código de saída 2.",
        "Limites: uma equipe por sessão, sem equipes aninhadas, o líder não pode mudar, o `/resume` não traz de volta colegas in-process e o status das tarefas pode atrasar.",
        "Os painéis divididos não funcionam no terminal integrado do VS Code, no Windows Terminal nem no Ghostty; o modo in-process funciona em qualquer lugar.",
        "Com os agent teams ativados, um subagente que o Claude nomeia pode ser iniciado como colega; defina a variável como `0` se quiser os subagentes comuns de volta.",
      ],
    },
    {
      kind: "text",
      title: "Agent teams vs outras formas de rodar o Claude Code em paralelo",
      text: [
        "Os agent teams dividem uma tarefa que você está acompanhando, dentro de uma única sessão. Para tarefas independentes, rode sessões separadas em [git worktrees](/blog/claude-code-worktree) ou como [agentes em segundo plano](/blog/claude-code-background-agents); para uma comparação completa, leia [vários agentes do Claude Code](/blog/multiple-claude-code-agents). Para reduzir o custo, veja [como reduzir o uso de tokens do Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Uma equipe que continua trabalhando depois que a sessão termina",
      text: [
        "Um agent team vive dentro de uma sessão e para quando você a fecha. O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness ou OpenCode em funcionários de IA com papéis, metas e horários de trabalho duradouros: cada um acorda com um heartbeat, pega a próxima issue de um quadro compartilhado e manda mensagem quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Dê um papel a cada funcionário",
          text: "Um [engenheiro de software](/ai-employees/software-engineer), um revisor, um [especialista em SEO](/ai-employees/seo-specialist): os papéis que você criaria como colegas, mas permanentes.",
        },
        {
          title: "Trabalhe a partir de um único quadro",
          text: "As issues substituem a lista de tarefas da sessão e sobrevivem a reinícios, dias e semanas.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "A cada 15, 30 ou 60 minutos durante o horário de trabalho; veja [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Montar um agent team no Claude Code" },
  mid: {
    title: "Quer uma equipe que não acabe junto com a sessão?",
    text: "O Crewmark mantém funcionários Claude Code trabalhando a partir de um quadro compartilhado, com um heartbeat, no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre agent teams no Claude Code",
    items: [
      {
        q: "O que são os agent teams do Claude Code?",
        a: "Um recurso experimental em que uma sessão do Claude Code lidera uma equipe de instâncias separadas do Claude Code. Os colegas têm suas próprias janelas de contexto, compartilham uma lista de tarefas e trocam mensagens diretamente entre si e com o líder.",
      },
      {
        q: "Qual é a diferença entre agent teams e subagentes?",
        a: "Os subagentes trabalham dentro de uma sessão e devolvem um resumo ao agente principal, que coordena tudo. Os agent teams são instâncias separadas que se coordenam sozinhas por meio de uma lista de tarefas compartilhada e mensagens diretas, com um custo maior em tokens.",
      },
      {
        q: "Como ativo os agent teams no Claude Code?",
        a: "Defina CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS como 1 no seu ambiente ou no bloco env do settings.json e depois peça ao Claude, em uma sessão interativa, que crie colegas para uma tarefa.",
      },
      {
        q: "Os agent teams precisam de tmux?",
        a: "Não. O modo in-process padrão funciona em qualquer terminal. O tmux, ou o iTerm2 com a CLI it2, só é necessário se você quiser cada colega em seu próprio painel dividido.",
      },
      {
        q: "Quantos colegas devo usar?",
        a: "A Anthropic sugere começar com 3 a 5 colegas e cerca de 5 a 6 tarefas para cada um. O custo cresce a cada colega, e mais colegas aumentam o trabalho de coordenação.",
      },
      {
        q: "Os agent teams funcionam no VS Code?",
        a: "O modo in-process funciona em qualquer terminal, inclusive no terminal integrado do VS Code. O modo de painéis divididos não é suportado ali.",
      },
      {
        q: "Por que o Claude cria colegas quando eu queria subagentes?",
        a: "Com os agent teams ativados, um subagente que o Claude nomeia é iniciado como colega. Defina CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS como 0 para ter os subagentes comuns de volta.",
      },
    ],
  },
  cta: {
    title: "Transforme seu agent team em uma equipe permanente.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com a documentação do Claude Code (Agent teams e Subagents) em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic. Claude e Claude Code são marcas registradas da Anthropic.",
};
