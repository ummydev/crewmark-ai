import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Resume as alterações sem commit e aponta o que for arriscado. Use quando o usuário perguntar o que mudou, quiser uma mensagem de commit ou pedir para revisar o diff.
---

## Alterações atuais

!\`git diff HEAD\`

## Instruções

Resuma as alterações acima em dois ou três tópicos e depois liste os riscos,
como tratamento de erros ausente, valores fixos no código ou testes para atualizar.`;

const reference = `---
description: Convenções de design de API deste código. Use ao escrever ou revisar endpoints HTTP.
paths: ["src/api/**"]
---

Ao escrever endpoints de API:
- Use nomes RESTful e recursos no plural
- Retorne erros como { error: { code, message } }
- Valide o corpo da requisição com os schemas de src/api/schemas/`;

const layout = `release/
├── SKILL.md          # os passos, e quando ler os outros arquivos
├── checklist.md      # carregado só quando o SKILL.md indica
└── scripts/
    └── bump.sh       # executado, não lido para o contexto`;

const fork = `---
description: Audita as dependências em busca de vulnerabilidades conhecidas e versões major desatualizadas
context: fork
agent: Explore
disable-model-invocation: true
---

Rode a auditoria do gerenciador de pacotes, liste cada achado alto ou crítico com
a versão que corrige e informe quais versões major estão atrasadas. Não altere nenhum arquivo.`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills do Claude Code: como criar, exemplos e boas práticas | Crewmark",
    description:
      "O que são as skills do Claude Code, como carregam, como criar uma com SKILL.md, exemplos, arquivos de apoio, skills em um subagente, instalar skills de plugins e boas práticas.",
  },
  breadcrumb: "Guia de skills do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Skills do Claude Code: como criar, com exemplos e boas práticas",
    lead: "Uma skill do Claude Code é uma pasta com um arquivo `SKILL.md`: uma descrição de quando usá-la e as instruções a seguir. O Claude vê só as descrições até precisar de uma skill, e então carrega tudo, então você pode deixar procedimentos longos e material de referência à mão sem pagar por eles a cada mensagem. Este guia mostra como as skills carregam, como escrever a sua primeira, exemplos, arquivos de apoio, skills que rodam em um subagente, como instalar skills de plugins e como fazer o Claude realmente usá-las.",
    cta: "Acesso antecipado",
    secondary: "Crie a sua primeira skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que são as skills do Claude Code",
      text: [
        "Crie uma skill quando você vive colando no chat as mesmas instruções, o mesmo checklist ou o mesmo procedimento de vários passos, ou quando uma parte do seu CLAUDE.md deixou de ser um fato e virou um procedimento. As skills seguem o padrão aberto Agent Skills (agentskills.io), que outras ferramentas de IA também leem; o Claude Code acrescenta extras como controle de invocação, execução em subagentes e saída de shell ao vivo no prompt.",
      ],
      points: [
        "Duas formas de rodar uma: o Claude a carrega quando o seu pedido combina com a `description` dela, ou você digita `/skill-name`.",
        "Barata até ser usada: só o nome e a descrição ficam no contexto; o corpo carrega quando a skill roda. Uma skill configurada para rodar só manualmente nem lista a descrição.",
        "Os comandos de barra próprios agora são skills: `.claude/commands/<name>.md` continua funcionando, mas uma pasta de skill também pode guardar arquivos de apoio. Veja [comandos de barra do Claude Code](/blog/claude-code-slash-commands).",
        "O Claude Code também vem com skills incluídas, como `/simplify`, `/loop`, `/batch` e `/debug`.",
      ],
    },
    {
      kind: "table",
      title: "Skills vs. CLAUDE.md vs. subagentes vs. plugins vs. MCP",
      headers: ["", "O que é", "Quando carrega", "Para que usar"],
      rows: [
        ["CLAUDE.md", "Instruções do projeto", "Em toda sessão, completo", "Fatos e convenções de que o Claude sempre precisa; veja o [guia do CLAUDE.md](/blog/claude-md)"],
        ["Skill", "Uma pasta com `SKILL.md`", "A descrição, sempre; o corpo, quando usada", "Procedimentos, checklists, material de referência, prompts repetíveis"],
        ["Subagente", "Um trabalhador separado com o próprio contexto", "Quando o Claude delega", "Tarefas paralelas cujos detalhes não devem encher a sua conversa"],
        ["Plugin", "Um pacote de skills, agentes, hooks e servidores MCP", "Quando instalado e ativado", "Compartilhar skills com um time ou instalar as de outras pessoas"],
        ["Servidor MCP", "Uma conexão com uma ferramenta ou fonte de dados externa", "Quando conectado", "Dar ao Claude ferramentas novas, como um banco de dados ou um gerenciador de issues"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como criar uma skill do Claude Code",
      steps: [
        {
          title: "Escolha onde ela fica",
          text: "`~/.claude/skills/<name>/` para você em todos os projetos; `.claude/skills/<name>/` em um repositório, com commit, para todo mundo que trabalha nele. O nome da pasta vira o comando, então `summarize-changes` gera `/summarize-changes`.",
        },
        {
          title: "Escreva o SKILL.md: uma descrição e depois as instruções",
          text: "O frontmatter vai entre linhas `---` bem no topo. Só `description` é recomendado: coloque primeiro o caso de uso e as palavras que as pessoas realmente diriam. Abaixo dele, escreva as instruções em Markdown. Uma linha que começa com `` !`command` `` roda esse comando antes e cola a saída, então a skill trabalha a partir do seu estado real.",
          code: first,
        },
        {
          title: "Teste dos dois jeitos",
          text: "Abra o `claude` em um projeto git com uma alteração sem commit. Pergunte \"O que eu mudei?\" para ver se o Claude escolhe a skill sozinho, e depois digite `/summarize-changes` para rodá-la diretamente. As skills que você adiciona durante uma sessão carregam sozinhas; rode `/reload-skills` se alguma não aparecer.",
        },
        {
          title: "Decida quem pode rodá-la",
          text: "Adicione `disable-model-invocation: true` a qualquer coisa com efeitos colaterais, como deploys ou envio de mensagens, para que só você possa acioná-la. Adicione `user-invocable: false` a conhecimento de fundo que só o Claude deve carregar. Passe dados com `$ARGUMENTS`, como mostra o guia de comandos de barra.",
        },
        {
          title: "Compartilhe",
          text: "Faça commit de `.claude/skills/` no repositório, ou empacote as skills como um plugin para vários repositórios ou times.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Exemplos de skills do Claude Code",
      steps: [
        {
          title: "Uma skill de referência que só carrega para os arquivos certos",
          text: "Skills de referência guardam convenções que o Claude aplica enquanto trabalha. `paths` limita o carregamento automático aos arquivos que combinam com os globs.",
          code: reference,
        },
        {
          title: "Uma skill de tarefa com arquivos de apoio",
          text: "Mantenha o SKILL.md curto e aponte para o resto. O Claude lê `checklist.md` só quando o SKILL.md manda, e roda `bump.sh` sem lê-lo, então os detalhes não custam nada até serem necessários.",
          code: layout,
        },
        {
          title: "Uma skill que roda no próprio subagente",
          text: "`context: fork` inicia um subagente (aqui o tipo Explore, somente leitura) com a skill como prompt. Ele não vê a sua conversa, então as instruções precisam se sustentar sozinhas; ele roda em segundo plano, a menos que você defina `background: false`.",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "Instalar skills de plugins e marketplaces",
      text: [
        "Skills escritas por outras pessoas costumam chegar dentro de plugins. O Claude Code registra o marketplace oficial da Anthropic (`claude-plugins-official`) na primeira vez que você inicia uma sessão interativa; navegue por ele com `/plugin` ou instale direto, por exemplo `/plugin install skill-creator@claude-plugins-official`. Para um marketplace de um time ou da comunidade, adicione-o antes com `/plugin marketplace add owner/repo`.",
      ],
      points: [
        "As skills de plugin se chamam `/plugin-name:skill-name`.",
        "O marketplace oficial mostra o custo de contexto de cada plugin por turno e quando invocado.",
        "O plugin skill-creator ajuda a escrever uma skill e roda evals que comparam os resultados com e sem ela.",
        "Leia as skills de um repositório ou plugin antes de confiar nelas: `allowed-tools` pode pré-aprovar ferramentas no turno em que uma skill roda.",
      ],
    },
    {
      kind: "text",
      title: "Boas práticas, e quando o Claude ignora uma skill",
      points: [
        "Escreva a descrição pensando na correspondência: comece pela tarefa e pelas frases que os usuários dizem. A descrição mais `when_to_use` é cortada em 1.536 caracteres na listagem.",
        "Coloque as instruções mais importantes perto do topo: depois que a conversa é compactada, o Claude Code pode manter só o começo de uma skill invocada. Invoque-a de novo para restaurá-la.",
        "Escreva as orientações para a tarefa inteira (\"rode os testes depois de cada edição\"), porque o arquivo da skill não é relido nos turnos seguintes. Uma regra que nunca pode ser pulada pertence a um hook.",
        "Para reduzir o uso de tokens, tire os procedimentos do CLAUDE.md e passe-os para skills, defina `disable-model-invocation: true` nas skills que você roda manualmente e confira o `/skill-doctor` para achar skills que custam contexto mas quase não são usadas.",
        "Não está sendo acionada? Confira se a descrição tem as palavras-chave certas, pergunte \"Quais skills estão disponíveis?\" e rode `claude plugin validate .claude/skills` para achar frontmatter que não é lido corretamente.",
        "Acionada vezes demais? Deixe a descrição mais específica, ou passe a skill para manual com `disable-model-invocation: true`.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "As skills ensinam o Claude Code a fazer. O Crewmark dá a ele algo para fazer a cada hora.",
      text: [
        "Uma biblioteca de skills deixa cada sessão capaz, mas ela ainda espera você pedir. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, com as skills do seu projeto carregadas.",
      ],
      steps: [
        {
          title: "Mantenha as skills no repositório",
          text: "A sessão do funcionário lê `.claude/skills/` e o CLAUDE.md como a sua, então uma skill de release ou um checklist de revisão vão junto.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa e pega a próxima issue; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; o funcionário comenta conforme avança e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Criar uma skill para o Claude Code" },
  mid: {
    title: "Suas skills estão prontas. Quem roda elas enquanto você está fora?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre skills do Claude Code",
    items: [
      {
        q: "O que são as skills do Claude Code?",
        a: "Pastas com um arquivo `SKILL.md` que guardam as instruções de uma tarefa ou um conjunto de conhecimento de referência. O Claude carrega uma quando o seu pedido combina com a descrição dela, ou você a roda com `/skill-name`.",
      },
      {
        q: "Onde ficam as skills do Claude Code?",
        a: "Em `~/.claude/skills/<name>/SKILL.md` para skills pessoais em todos os projetos, em `.claude/skills/<name>/SKILL.md` dentro de um repositório para o time, ou dentro de um plugin.",
      },
      {
        q: "Como faço o Claude Code usar a minha skill?",
        a: "Escreva uma descrição que nomeie a tarefa e as palavras que você usaria para pedi-la, confira se a skill aparece quando você pergunta \"Quais skills estão disponíveis?\", ou rode-a diretamente com `/skill-name`.",
      },
      {
        q: "Skills vs. subagentes: qual é a diferença?",
        a: "Uma skill são instruções carregadas em uma conversa; um subagente é um trabalhador separado com o próprio contexto. Uma skill com `context: fork` junta os dois: ela roda como subagente com a skill como prompt.",
      },
      {
        q: "Skills vs. plugins?",
        a: "Um plugin é a forma de empacotar e compartilhar skills, subagentes, hooks e servidores MCP. Instale um plugin para ganhar as skills dele, ou escreva uma skill no seu próprio `.claude/skills/` sem plugin nenhum.",
      },
      {
        q: "As skills gastam muitos tokens?",
        a: "Só as descrições ficam no contexto; o corpo carrega quando uma skill roda, e as skills configuradas só para uso manual nem listam a descrição. Passar procedimentos longos do CLAUDE.md para skills costuma reduzir o uso de tokens.",
      },
      {
        q: "Onde encontro skills do Claude Code?",
        a: "No marketplace oficial de plugins da Anthropic (navegue com `/plugin` ou em claude.com/marketplace), em marketplaces de times e da comunidade que você adiciona com `/plugin marketplace add`, e em repositórios públicos do GitHub.",
      },
    ],
  },
  cta: {
    title: "Coloque as suas skills do Claude Code para trabalhar com horário marcado.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code (skills e plugins) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
