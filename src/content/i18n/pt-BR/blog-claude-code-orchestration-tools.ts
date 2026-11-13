import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "Melhores ferramentas de orquestração para Claude Code em 2026 | Crewmark",
    description:
      "Como rodar vários agentes do Claude Code ao mesmo tempo: as opções nativas (subagents, agent view, agent teams, workflows) e 10 ferramentas de orquestração comparadas, do Claude Squad e Orca ao Paperclip, Multica e Crewmark.",
  },
  breadcrumb: "Ferramentas de orquestração para Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "As melhores ferramentas de orquestração para Claude Code em 2026",
    lead: "Orquestrar o Claude Code significa rodar vários agentes do Claude Code ao mesmo tempo e coordená-los: dar a cada um sua própria cópia do código, uma tarefa e um jeito de reportar o que fez. O Claude Code já faz boa parte disso sozinho, e uma leva de ferramentas open source e comerciais acrescenta interfaces, quadros e agendamentos por cima. Este guia mostra primeiro as opções nativas e depois compara dez ferramentas por interface, isolamento, agentes suportados e a pergunta que mais importa: o agente começa a trabalhar sozinho ou fica esperando você?",
    cta: "Acesso antecipado",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Nativo no Claude Code: cinco jeitos de rodar agentes em paralelo",
      text: [
        "Antes de instalar qualquer coisa, veja se o Claude Code já resolve o seu caso. Em todas as opções nativas os workers são sessões do Claude; as worktrees dão a cada uma o próprio checkout (veja o [guia de worktrees](/blog/claude-code-worktree)).",
      ],
      headers: ["Opção", "O que oferece", "Status"],
      rows: [
        ["Subagents (subagentes)", "Workers dentro de uma sessão que fazem uma tarefa paralela no próprio contexto e devolvem um resumo", "Disponível"],
        ["Agent view (`claude agents`)", "Uma única tela para disparar e acompanhar sessões em background, e intervir quando alguma precisa de você", "Research preview"],
        ["Agent teams (equipes de agentes)", "Várias sessões com uma lista de tarefas e mensagens compartilhadas, coordenadas por uma sessão líder", "Experimental, desativado por padrão"],
        ["Dynamic workflows (fluxos dinâmicos)", "Um script que roda muitos subagentes e confere os resultados entre si", "Disponível"],
        ["Projects (projetos)", "Uma conversa contínua que abre threads em paralelo na nuvem ou no seu computador", "Beta público nos planos Pro, Max e Ultra"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Ferramentas de orquestração para Claude Code comparadas",
      text: [
        "Estrelas e licenças são do GitHub em 6 de novembro de 2026. \"Começa a trabalhar sozinho\" significa que a ferramenta consegue dar ao agente a próxima tarefa sem você digitar um prompt, por meio de um quadro, um agendamento ou um heartbeat.",
      ],
      headers: ["Ferramenta", "Interface", "Isolamento", "Agentes", "Começa a trabalhar sozinho", "Licença, estrelas"],
      rows: [
        ["Claude Squad", "Interface de terminal (`cs`)", "Sessão do tmux e git worktree por agente", "Claude Code, Codex, Gemini, Aider e outros", "Não", "AGPL-3.0, ~9k"],
        ["Orca", "Desktop, CLI, mobile, runtime remoto", "Uma worktree por agente", "Claude Code, Codex e outros, nas suas assinaturas", "Não; um agente orquestrador pode dividir o trabalho", "MIT, ~117k"],
        ["Ruflo (antigo Claude Flow)", "Plugins do Claude Code, CLI e servidor MCP", "Não informado", "Claude Code, Codex, clientes MCP", "Não; swarms disparados por prompt ou por missão", "MIT, ~81k"],
        ["oh-my-claudecode", "Plugin do Claude Code (`/autopilot`)", "Não informado", "Claude Code", "Não; o autopilot roda depois que você o inicia", "MIT, ~41k"],
        ["Vibe Kanban", "Interface web com quadro kanban", "Um workspace e uma branch por tarefa", "Mais de 10, incluindo Claude Code, Codex e Gemini CLI", "Não; você abre um workspace por issue. Em descontinuação, mantido pela comunidade", "Apache-2.0, ~29k"],
        ["opcode (antigo Claudia)", "Interface gráfica desktop", "Processos separados para os agentes em background", "Claude Code", "Não", "AGPL-3.0, ~22k"],
        ["CloudCLI (Claude Code UI)", "Interface web e mobile", "Sandbox Docker opcional", "Claude Code, Codex, Cursor CLI, OpenCode", "Não", "AGPL-3.0, ~15k"],
        ["Conductor", "App para Mac", "Um workspace e uma branch por tarefa", "Claude Code, Codex, Cursor, OpenCode", "Não. Vai para a Meta; a nuvem é desligada em 20 de novembro de 2026", "Código fechado"],
        ["Paperclip", "Interface web: uma \"empresa de IA\" com organograma, metas e orçamentos", "Worktrees e sandboxes opcionais", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode e outros", "Sim: heartbeats agendados, além de atribuições e @menções", "MIT, ~111k"],
        ["Multica", "Web, desktop, CLI e API", "Um daemon na sua máquina", "Claude Code, Codex, Cursor, Copilot, OpenCode e outros", "Sim: os agentes pegam as issues atribuídas; Autopilots via cron", "Multica License (source-available), ~55k"],
        ["Crewmark", "Quadro web, CLI e um daemon na sua máquina", "Cada funcionário na própria sessão e no próprio checkout", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Sim: um heartbeat durante o horário de trabalho pega a próxima issue", "Acesso antecipado"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher uma ferramenta de orquestração para Claude Code",
      steps: [
        {
          title: "Teste primeiro o que já vem nativo",
          text: "Para algumas tarefas em paralelo que você mesmo dispara, `claude --worktree` mais o agent view pode ser tudo de que você precisa. Para uma mudança grande, `/batch` ou um workflow divide o trabalho entre subagentes.",
        },
        {
          title: "Escolha a interface que você vai mesmo acompanhar",
          text: "Quem vive no terminal costuma preferir o Claude Squad; outros querem um app desktop (Orca, opcode) ou um quadro web (Vibe Kanban, Paperclip, Multica, Crewmark), que também funciona pelo celular.",
        },
        {
          title: "Decida quem inicia a próxima tarefa",
          text: "A maioria das ferramentas acelera agentes que você conduz. Se quer que os agentes continuem trabalhando entre um prompt e outro, procure um quadro com agendamento ou heartbeat: Paperclip, Multica e Crewmark fazem isso.",
        },
        {
          title: "Confira o isolamento e os agentes suportados",
          text: "Agentes em paralelo precisam de checkouts separados, geralmente git worktrees. Se a sua equipe mistura Claude Code com Codex ou OpenCode, confira se a ferramenta roda todos eles nas assinaturas que vocês já têm.",
        },
        {
          title: "Confira a saúde do projeto",
          text: "Olhe a licença, os commits recentes e o status: a empresa do Vibe Kanban está descontinuando o projeto, o Conductor está indo para a Meta e o Crystal foi substituído por um app novo.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "Notas sobre cada ferramenta",
      points: [
        "Claude Squad ([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)): um app de terminal que dá a cada agente a própria sessão do tmux e a própria git worktree; `--autoyes` aceita os prompts automaticamente (experimental).",
        "Orca ([stablyai/orca](https://github.com/stablyai/orca)): roda uma frota de agentes de programação com as suas próprias assinaturas no desktop, no celular ou em uma máquina remota.",
        "Ruflo ([ruvnet/ruflo](https://github.com/ruvnet/ruflo)): um meta-harness de agentes para Claude Code e Codex, com swarms e memória entre sessões; `ruvnet/claude-flow` agora redireciona para cá.",
        "oh-my-claudecode ([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)): um plugin com fluxos em etapas de planejamento, desenvolvimento e QA dentro do Claude Code.",
        "Vibe Kanban ([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)): planeje issues em um quadro e abra um workspace com um agente para cada uma; o README diz que o projeto está sendo descontinuado.",
        "opcode ([winfunc/opcode](https://github.com/winfunc/opcode)): uma interface gráfica desktop para o Claude Code com agentes personalizados, histórico de sessões, análise de uso e checkpoints.",
        "CloudCLI ([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)): uma interface web e mobile para as suas sessões, com shell, arquivos e git; uma versão paga na nuvem adiciona containers hospedados.",
        "Conductor ([conductor.build](https://www.conductor.build)): veja [alternativas ao Conductor](/blog/conductor-alternatives) para as datas de desligamento e como migrar o seu trabalho.",
        "Paperclip ([paperclipai/paperclip](https://github.com/paperclipai/paperclip)) e Multica ([multica-ai/multica](https://github.com/multica-ai/multica)): o mais próximo de funcionários de IA; veja nossas comparações com o [Paperclip](/alternatives/paperclip) e o [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Orquestração que continua quando você para de digitar",
      text: [
        "O Crewmark transforma cada sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e o acorda com um heartbeat para pegar a próxima issue de um quadro compartilhado.",
      ],
      steps: [
        {
          title: "Um funcionário por função",
          text: "Um programador, um revisor, um redator de SEO: cada um tem a própria sessão, o próprio checkout e uma meta escrita como um número. Veja [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Um quadro em vez de uma grade de terminais",
          text: "Atribua issues; cada funcionário comenta enquanto trabalha e manda mensagem quando precisa de uma decisão sua.",
        },
        {
          title: "Um heartbeat em vez do seu próximo prompt",
          text: "Durante o horário de trabalho, cada funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher uma ferramenta de orquestração para Claude Code" },
  mid: {
    title: "Cinco agentes rodando e você ainda digita cada prompt?",
    text: "O Crewmark dá a cada sessão do Claude Code um papel, uma meta e um heartbeat, para ela pegar a próxima issue sem você.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre orquestração do Claude Code",
    items: [
      {
        q: "O que é orquestração do Claude Code?",
        a: "Rodar vários agentes do Claude Code ao mesmo tempo e coordená-los: checkouts separados, tarefas separadas e um jeito de ver o que cada um está fazendo e fazer o merge dos resultados.",
      },
      {
        q: "O Claude Code consegue orquestrar agentes sozinho?",
        a: "Sim. Subagents, agent view, agent teams (experimental), dynamic workflows e projects já vêm nativos, e `--worktree` isola as sessões que você mesmo roda.",
      },
      {
        q: "Qual é a melhor ferramenta de orquestração para Claude Code?",
        a: "Para quem trabalha no terminal, Claude Squad; para uma frota no desktop, Orca; para swarms dentro do Claude Code, Ruflo; para agentes que continuam trabalhando a partir de um quadro com agendamento, Paperclip, Multica ou Crewmark.",
      },
      {
        q: "Existe uma interface gráfica para gerenciar agentes do Claude Code?",
        a: "Sim: Orca e opcode são apps desktop; Vibe Kanban, CloudCLI, Paperclip e Multica têm interface web; e o próprio app desktop do Claude Code roda sessões em paralelo com uma opção de Worktree.",
      },
      {
        q: "Quais ferramentas deixam os agentes começarem a trabalhar sem um prompt?",
        a: "Entre as comparadas aqui, Paperclip (heartbeats agendados), Multica (issues atribuídas e Autopilots via cron) e Crewmark (um heartbeat durante o horário de trabalho). As outras rodam os agentes que você inicia.",
      },
      {
        q: "Essas ferramentas são gratuitas?",
        a: "A maioria é open source e gratuita para hospedar por conta própria: MIT para Orca, Ruflo, oh-my-claudecode e Paperclip; AGPL-3.0 para Claude Squad, opcode e CloudCLI; Apache-2.0 para Vibe Kanban. O Multica usa uma licença própria source-available; o Conductor é de código fechado.",
      },
      {
        q: "O que usar no lugar do Conductor?",
        a: "Veja [alternativas ao Conductor](/blog/conductor-alternatives): o próprio `--worktree` do Claude Code e o app desktop cobrem o essencial, e as ferramentas acima acrescentam quadros, frotas ou agendamentos.",
      },
    ],
  },
  cta: {
    title: "Deixe seus agentes do Claude Code pegarem sozinhos a próxima tarefa.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code, o README ou site de cada projeto e a API do GitHub em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é uma das ferramentas comparadas. Os nomes dos produtos são marcas dos respectivos titulares; nenhum projeto revisou ou endossou esta página.",
};
