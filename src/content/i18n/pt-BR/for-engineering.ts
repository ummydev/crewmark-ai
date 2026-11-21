import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `Duas vezes por dia, leia os erros novos e os que voltaram no Sentry em produção,
registre os que não estão no quadro com o impacto e uma causa
provável, e abra um pull request para qualquer correção de uma linha.

Revise todo pull request marcado como pronto para revisão com base nas regras
do AGENTS.md. Só comente; nunca aprove nem faça merge.

Toda sexta, escreva as notas de versão a partir dos pull requests com merge
desta semana: o que mudou para os usuários, agrupado por área, com links.

Pegue a próxima issue com o rótulo "good first issue", trabalhe na sua própria
git worktree e abra um pull request com testes.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code para equipes de engenharia: funcionários de IA que entregam",
    description:
      "Como equipes de engenharia usam o Claude Code e o Codex como funcionários de IA: triagem de erros, revisão de código, de issues a pull requests, notas de versão e turnos noturnos, com agendamento. Cargos, casos de uso, prompts para copiar e as regras que mantêm as pessoas no comando dos merges.",
  },
  breadcrumb: "Claude Code para engenharia",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Para equipes de engenharia",
    title: "Claude Code para equipes de engenharia: funcionários de IA que pegam a próxima issue",
    lead: "A maioria das equipes usa o Claude Code ou o Codex quando alguém senta e escreve um prompt. O ganho maior é dar a ele trabalhos fixos: fazer a triagem dos erros novos toda manhã, revisar todo pull request que estiver pronto, pegar a próxima issue do quadro e abrir um pull request, escrever as notas de versão na sexta. Esta página mostra quais trabalhos de engenharia delegar, como rodar vários agentes sem que um atrapalhe o outro, prompts para copiar e as regras que mantêm o merge com as pessoas.",
    cta: "Começar",
    secondary: "Ver os trabalhos",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "O que equipes de engenharia entregam a um funcionário de IA",
      headers: ["Trabalho", "Frequência", "Guia"],
      rows: [
        ["Fazer a triagem de erros novos do Sentry e corrigir os pequenos", "Duas vezes por dia", "[Triagem de erros do Sentry](/use-cases/sentry-error-triage)"],
        ["Revisar pull requests que estão prontos", "A cada PR", "[Revisão de código com IA em todo PR](/use-cases/pr-review)"],
        ["Pegar a próxima issue e abrir um pull request", "Contínuo", "[Engenheiro de software com IA](/ai-employees/software-engineer)"],
        ["Dar conta de um backlog durante a noite", "Toda noite", "[Rodar o Claude Code 24/7](/blog/run-claude-code-24-7), [tarefas longas no Codex](/blog/codex-long-running-tasks)"],
        ["Escrever notas de versão a partir dos pull requests com merge", "Semanal", "Prompt abaixo"],
        ["Manter o quadro atualizado: status, comentários, links", "Toda issue", "[Kanban do Claude Code](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts para copiar",
      text: ["Cada um funciona como uma issue recorrente para um funcionário de IA ou como um prompt avulso no Claude Code ou no Codex."],
      steps: [
        {
          title: "Quatro trabalhos, uma frase cada",
          text: "Troque os nomes e os agendamentos pelos seus. Os dois primeiros têm guias completos com a configuração: [triagem de erros do Sentry](/use-cases/sentry-error-triage) e [revisão de código com IA](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar engenheiros de IA no Claude Code ou no Codex",
      steps: [
        {
          title: "Escreva as regras uma vez",
          text: "Coloque os comandos de build e teste, as convenções e as regras de revisão no CLAUDE.md ou no AGENTS.md, para que toda sessão comece do mesmo ponto. Veja [CLAUDE.md](/blog/claude-md) e [AGENTS.md para o Codex](/blog/codex-agents-md).",
        },
        {
          title: "Dê a cada agente a própria worktree",
          text: "Dois agentes editando o mesmo checkout sobrescrevem um ao outro. Use uma git worktree por agente; veja [worktrees no Claude Code](/blog/claude-code-worktree) e [como rodar vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Conecte as ferramentas de que os trabalhos precisam",
          text: "O GitHub pela CLI dele, o Sentry pelo servidor MCP hospedado, o seu gerenciador de issues pelo servidor MCP ou pela CLI. Prefira CLIs quando os dois existirem; elas gastam menos tokens.",
        },
        {
          title: "Mantenha o merge com as pessoas",
          text: "Os agentes abrem pull requests e comentam; as pessoas aprovam e fazem merge. Quando um funcionário precisa de uma decisão, ele marca a issue como Needs action e pergunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "O que esperar",
      points: [
        "Issues pequenas e bem descritas são as que dão mais certo: um bug com stack trace, um teste que falta, uma mudança de texto em muitos arquivos.",
        "Funcionalidades grandes ainda precisam de uma pessoa para quebrá-las em issues; os agentes são bons nas partes, menos no plano.",
        "O uso sai do seu próprio plano do Claude ou do ChatGPT; agende os trabalhos pesados dentro do horário de trabalho ou de madrugada, dentro dos seus limites.",
        "A carga de revisão muda de lugar, não some: mais pull requests significam mais coisa para revisar, e é por isso que a revisão com IA está nesta lista.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Engenheiros com um quadro, horário de trabalho e um heartbeat",
      text: [
        "O Crewmark transforma o seu próprio Claude Code ou Codex em funcionários de IA: cada um tem um cargo, uma meta em números, horário de trabalho e um heartbeat, pega a próxima issue de um quadro compartilhado, comenta enquanto trabalha e abre pull requests para revisão.",
      ],
      steps: [
        {
          title: "Contrate o cargo",
          text: "Comece pelo [engenheiro de software com IA](/ai-employees/software-engineer).",
        },
        {
          title: "Adicione trabalhos fixos como issues recorrentes",
          text: "Triagem, revisão e notas de versão voltam sozinhas, cada uma no seu agendamento.",
        },
        {
          title: "Veja outras equipes",
          text: "Equipes de marketing usam a mesma configuração: [Claude Code para marketing](/for/marketing). Todos os trabalhos estão em [casos de uso](/use-cases).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar engenheiros de IA no Claude Code ou no Codex" },
  mid: {
    title: "Quer engenheiros que pegam a próxima issue sozinhos?",
    text: "Os funcionários do Crewmark rodam no seu Claude Code ou Codex, acordam com um heartbeat e abrem pull requests para revisão.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Quais são os melhores casos de uso do Claude Code para equipes de engenharia?",
        a: "Trabalhos que se repetem e têm um ponto final claro: triagem de erros, revisão de pull requests, bugs pequenos com stack trace, testes, notas de versão e manter o quadro atualizado. Funcionalidades maiores ainda precisam de uma pessoa para planejá-las.",
      },
      {
        q: "Vários agentes do Claude Code podem trabalhar em um mesmo repositório?",
        a: "Sim, se cada um tiver a própria git worktree e as próprias issues. Veja [como rodar vários agentes do Claude Code](/blog/multiple-claude-code-agents) e [agent teams](/blog/claude-code-agent-teams).",
      },
      {
        q: "Isso funciona com o Codex?",
        a: "Sim. Os mesmos trabalhos e regras funcionam com o Codex; coloque as regras no AGENTS.md.",
      },
      {
        q: "Um agente de IA deve fazer merge dos próprios pull requests?",
        a: "Não. Deixe-o abrir pull requests e comentar; mantenha a aprovação e o merge com as pessoas.",
      },
      {
        q: "Qual é a diferença em relação ao Devin ou a outros agentes na nuvem?",
        a: "Agentes na nuvem rodam cada tarefa na nuvem do fornecedor quando você a atribui. O Crewmark roda o seu próprio Claude Code ou Codex no seu plano, com trabalhos fixos agendados. Veja [alternativas ao Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Dê à sua equipe de engenharia funcionários de IA que pegam a próxima issue.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Escrito em 10 de novembro de 2026; os fatos sobre as ferramentas foram conferidos na documentação do Sentry, da Anthropic e da OpenAI no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a OpenAI, o GitHub ou o Sentry e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
