import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# Encontre as worktrees que o Conductor criou para este repositório
git worktree list

# Em cada workspace que você quer manter: faça commit e push da branch
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor vai para a Meta: encerramento e alternativas",
    description:
      "O Conductor, app de Mac para agentes do Claude Code e do Codex em paralelo, vai para a Meta. As datas de encerramento, como salvar seus workspaces e as melhores alternativas ao Conductor para Mac, Windows e Linux.",
  },
  breadcrumb: "Alternativas ao Conductor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agentes de programação com IA",
    title: "O Conductor vai para a Meta: o que acontece agora e onde rodar seus agentes",
    lead: "O Conductor, app de Mac que roda agentes do Claude Code, Codex, Cursor e OpenCode em workspaces paralelos, anunciou em 4 de novembro de 2026 que vai se juntar à Meta. Novos cadastros estão fechados, o Conductor Cloud passa a ser somente leitura em 13 de novembro e é desligado em 20 de novembro, e o app local só recebe atualizações até o início de 2027. Este guia cobre as datas, como preservar o seu trabalho e as alternativas que fazem o mesmo serviço.",
    cta: "Começar",
    secondary: "Salve seus workspaces",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que era o Conductor e o que muda",
      text: [
        "O Conductor dava a cada tarefa de programação o próprio workspace: uma git worktree com a própria branch, arquivos, terminal, diff e fluxo de revisão, para que vários agentes pudessem trabalhar ao mesmo tempo em um repositório. Ele rodava só no macOS, com Claude Code, Codex, Cursor e OpenCode, e ganhou o Conductor Cloud para workspaces que continuavam rodando longe do seu Mac.",
        "O fundador, Charlie Holtz, anunciou que a equipe vai para a Meta construir \"a próxima interface\", com algo novo prometido para o início do ano que vem. A Meta confirmou o negócio ao TechCrunch, mas não divulgou os termos.",
      ],
    },
    {
      kind: "table",
      title: "O cronograma de encerramento do Conductor",
      headers: ["Data", "O que acontece"],
      rows: [
        ["4 de novembro de 2026", "Sem novos cadastros nem downloads. Usuários gratuitos não podem fazer upgrade; usuários Pro mantêm os recursos Pro sem custo. Assinantes ativos recebem reembolso."],
        ["13 de novembro de 2026", "Os workspaces na nuvem ficam somente leitura: dá para ler chats antigos e exportar dados, mas não enviar mensagens."],
        ["20 de novembro de 2026", "O Conductor Cloud é desligado e começa a exclusão dos dados de usuário na nuvem."],
        ["Até o início de 2027", "O app local para Mac continua recebendo modelos novos e correções de bugs críticos, e depois é descontinuado; todos os dados de usuário são excluídos quando ele for desligado."],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como preservar o seu trabalho antes dos prazos",
      steps: [
        {
          title: "Mova os workspaces na nuvem para o seu Mac antes de 13 de novembro",
          text: "Clique com o botão direito em cada workspace na nuvem no Conductor e escolha Transfer to local (transferir para o local). O workspace e os chats dele vão para o seu computador.",
        },
        {
          title: "Exporte seus dados antes de 20 de novembro",
          text: "Vá em Settings → Account → Export data (Configurações → Conta → Exportar dados) no Conductor para baixar tudo, inclusive os chats que você queira guardar como anotações ou prompts.",
        },
        {
          title: "Faça push de toda branch que importa",
          text: "Os workspaces locais são git worktrees comuns, normalmente em `~/conductor/workspaces/<repo>/<workspace>`, que compartilham o histórico do seu repositório. Faça commit e push das branches deles para que o trabalho sobreviva ao app.",
          code: rescue,
        },
        {
          title: "Leve junto seus scripts de setup",
          text: "O Conductor guarda os scripts de setup, execução e arquivamento de cada projeto em `.conductor/settings.toml` ou `.conductor/settings.local.toml`. Copie os comandos para o seu README ou para a configuração da próxima ferramenta, e liste arquivos como `.env` em um `.worktreeinclude` se for migrar para as worktrees do Claude Code.",
        },
        {
          title: "Escolha um substituto e teste em uma tarefa",
          text: "Compare as opções abaixo e rode uma tarefa real na nova ferramenta antes que o seu acesso ao Conductor Pro termine.",
        },
      ],
      source: { label: "Fonte: o anúncio do Conductor", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas ao Conductor, comparadas",
      headers: ["", "Conductor", "Claude Code sozinho", "App do Codex", "Crewmark"],
      rows: [
        ["O que é", "App de Mac para agentes em paralelo em worktrees", "`claude --worktree`, sessões paralelas no app desktop, agentes em background", "O app desktop da OpenAI com worktrees e tarefas na nuvem", "Funcionários de IA: sessões de agentes com papéis, metas, horários de trabalho e um heartbeat"],
        ["Agentes", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["Plataformas", "macOS", "macOS, Windows, Linux", "App desktop e web", "macOS, Windows, Linux"],
        ["Isolamento", "Uma git worktree por workspace", "Uma git worktree por sessão ou subagente", "Worktrees", "Cada funcionário na própria sessão e no próprio checkout"],
        ["Quem inicia a próxima tarefa", "Você", "Você (ou um agendamento)", "Você (ou um agendamento)", "O heartbeat: cada funcionário acorda e pega a próxima issue"],
        ["Quadro de tarefas", "Lista de workspaces", "Não", "Não", "Sim, com issues, comentários e mensagens para você"],
        ["Status", "A nuvem acaba em 20 de novembro; o app local, no início de 2027", "Ativo", "Ativo", "Ativo"],
      ],
    },
    {
      kind: "text",
      title: "Qual alternativa ao Conductor combina com você",
      points: [
        "Você usava o Conductor principalmente com o Claude Code: o próprio Claude Code agora faz o essencial. `claude --worktree <name>` dá a cada sessão a própria worktree e a própria branch, o `.worktreeinclude` copia o seu `.env` e o app desktop roda sessões paralelas com uma chave Worktree. Veja o [guia de worktrees no Claude Code](/blog/claude-code-worktree).",
        "Você usava principalmente o Codex: o app desktop do Codex já vem com worktrees e tarefas na nuvem; compare os dois agentes em [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Você precisa de Windows ou Linux: o Conductor nunca chegou lá; a CLI do Claude Code e o Crewmark rodam nos três.",
        "Você misturava agentes ou quer que eles continuem trabalhando sem você: é para isso que existe o Crewmark (abaixo). Para rodar vários agentes à mão, veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Conductor rodava seus agentes lado a lado. O Crewmark dá um emprego a eles.",
      text: [
        "O Conductor facilitava iniciar e revisar agentes em paralelo, mas cada workspace continuava esperando você digitar o próximo prompt. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Traga seus repositórios e seus agentes",
          text: "Rode o comando de setup em cada projeto. Vários funcionários podem compartilhar um repositório, cada um no próprio checkout, como os seus workspaces do Conductor.",
        },
        {
          title: "Dê a cada um um papel e uma meta",
          text: "Um programador, um revisor, um redator de SEO: cada um tem uma meta escrita como um número e o horário em que trabalha. Leia [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "A cada 15, 30 ou 60 minutos, o funcionário acorda na mesma conversa, pega a próxima issue e avisa você quando precisa de uma decisão; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Preservar o seu trabalho antes do encerramento do Conductor" },
  mid: {
    title: "Saindo do Conductor? Não só substitua: faça um upgrade.",
    text: "O Crewmark roda Claude Code, Codex e OpenCode como funcionários de IA que acordam com um heartbeat e pegam a próxima issue sozinhos.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o encerramento do Conductor",
    items: [
      {
        q: "O Conductor vai acabar?",
        a: "Em parte. O Conductor vai para a Meta. O Conductor Cloud passa a ser somente leitura em 13 de novembro de 2026 e é desligado em 20 de novembro. O app local para Mac continua recebendo modelos novos e correções críticas até o início de 2027, e depois é descontinuado.",
      },
      {
        q: "A Meta comprou o Conductor?",
        a: "Sim. O Conductor anunciou em 4 de novembro de 2026 que vai se juntar à Meta, e a Meta confirmou a aquisição ao TechCrunch. O preço e os termos não foram divulgados.",
      },
      {
        q: "Ainda dá para baixar o Conductor ou criar uma conta?",
        a: "Não. Novos cadastros e downloads foram interrompidos em 4 de novembro de 2026, e usuários gratuitos não podem mais fazer upgrade para o Pro.",
      },
      {
        q: "O que acontece com meus dados e minha assinatura?",
        a: "Os dados de usuário na nuvem começam a ser excluídos em 20 de novembro, e todos os dados de usuário são excluídos quando o app for desligado. Exporte-os em Settings → Account → Export data. Assinantes ativos recebem reembolso, e usuários Pro mantêm os recursos Pro sem custo até lá.",
      },
      {
        q: "Qual é a melhor alternativa ao Conductor para o Claude Code?",
        a: "A própria flag `--worktree` do Claude Code e as sessões paralelas do app desktop cobrem o trabalho paralelo isolado. Para que as sessões peguem trabalho sozinhas, rode-as como funcionários do Crewmark.",
      },
      {
        q: "Existe uma alternativa ao Conductor para Windows ou Linux?",
        a: "O próprio Conductor era só para Mac. A CLI do Claude Code com `--worktree`, o `git worktree` puro e o Crewmark rodam em macOS, Windows e Linux.",
      },
      {
        q: "Meus workspaces do Conductor vão continuar funcionando?",
        a: "Os workspaces locais são git worktrees simples com branches comuns, então o código fica no seu repositório aconteça o que acontecer com o app. Faça commit e push das branches que você quer manter.",
      },
    ],
  },
  cta: {
    title: "Seus agentes precisam de uma nova casa. Dê um emprego a eles também.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o anúncio, o changelog e a documentação do Conductor, e a reportagem do TechCrunch, em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Conductor, a Meta, a Anthropic ou a OpenAI e sem endosso deles. Conductor é marca do respectivo titular; Claude e Claude Code são marcas da Anthropic, e Codex, da OpenAI.",
};
