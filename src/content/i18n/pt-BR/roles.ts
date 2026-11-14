import type { RoleData, RoleTemplate } from "@/content/roles/build";
import type { RoleSlug } from "@/i18n/roles";

// Brazilian Portuguese copy for the role pages (MC-143), translated from src/content/roles/en.ts. Role names follow the
// site's wording (ai-employees.ts, Landing.marketplace.presets) in the way people search for them in Portuguese.

export const template: RoleTemplate = {
  kicker: "Funcionários de IA · Cargo",
  parent: "Funcionários de IA",
  cta: "Começar",
  secondary: "Copiar o brief do cargo",
  doesTitle: (name) => `O que faz um ${name}`,
  goalsTitle: "Metas para dar a ele",
  goalsText:
    "Dê a um funcionário de IA um número para mover, como faria com uma nova contratação, e revise toda semana. Escolha uma destas para começar.",
  goalsHeaders: ["Meta", "Como é medida", "Uma boa primeira meta"],
  routineTitle: "A rotina diária dele",
  howToTitle: (name) => `Como configurar um ${name} com Claude Code ou Codex`,
  howToName: (name) => `Configurar um ${name}`,
  briefStep: {
    title: "Escreva o brief do cargo",
    text: "Salve como `CLAUDE.md` (Claude Code) ou `AGENTS.md` (Codex) no repositório em que o funcionário trabalha, para que toda sessão comece com a função, a meta e as regras dele. Veja o [guia do CLAUDE.md](/blog/claude-md).",
  },
  toolsTitle: "Dê a ele as ferramentas de que precisa",
  approvalsTitle: "Decida o que precisa do seu sim",
  scheduleStep: {
    title: "Coloque-o em uma agenda",
    text: "Um cargo precisa de ritmo, não de um único prompt. Use `/loop` ou tarefas agendadas para um prompt recorrente, ou dê a ele horário de trabalho, um heartbeat e um quadro de tarefas; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
  },
  relatedTitle: "Guias relacionados",
  crewmark: {
    kicker: "Com o Crewmark",
    title: (name) => `Contrate um ${name} em vez de programar um`,
    text: (name) =>
      `O Crewmark tem um ${name} pronto para contratar. Ele roda na sua sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode, na assinatura que você já paga, acorda com um heartbeat no horário de trabalho, pega a próxima tarefa de um quadro compartilhado e manda mensagem quando precisa de uma decisão.`,
    steps: [
      {
        title: "Escolha o cargo",
        text: "As habilidades, a meta e a agenda já vêm configuradas. Troque a meta pelo seu próprio número.",
      },
      {
        title: "Conecte seu projeto",
        text: "Rode o comando de configuração no repositório ou na pasta em que ele trabalha. Ele ganha a própria sessão e o próprio checkout.",
      },
      {
        title: "Revise, não fique de babá",
        text: "Ele comenta nas tarefas enquanto trabalha e pergunta antes de qualquer coisa da sua lista de aprovação. Leia [o que é um funcionário de IA](/ai-employees).",
      },
    ],
  },
  faqTitle: (name) => `Perguntas frequentes sobre o ${name}`,
  ctaText:
    "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
  checked:
    "Páginas de cargos escritas em 7 de novembro de 2026 a partir dos cargos do marketplace do Crewmark e da documentação de cada agente.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso da Anthropic ou da OpenAI. Claude, Claude Code e Codex são marcas registradas de seus respectivos donos.",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "especialista em SEO com IA",
    meta: {
      title: "Especialista em SEO com IA: um agente de SEO diário",
      description:
        "O que faz um especialista em SEO com IA, as metas e a rotina diária para dar a ele e um brief do cargo para copiar no Claude Code ou Codex. Ou contrate um no Crewmark que acorda com um heartbeat e avança seu backlog de SEO.",
    },
    breadcrumb: "Especialista em SEO com IA",
    title: "Especialista em SEO com IA: um agente de SEO que trabalha todo dia",
    lead: "Um especialista em SEO com IA é um agente de programação, como o Claude Code ou o Codex, com a função contínua de aumentar seu tráfego orgânico. Ele encontra temas que as pessoas começaram a buscar, escreve e corrige páginas no código do seu site, faz com que sejam indexadas e relata o que mudou, todo dia útil. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "Diferente de um prompt de SEO avulso, o especialista é dono do trabalho: mantém um mapa de palavras-chave e um registro, então cada sessão continua de onde a anterior parou.",
      points: [
        "Pesquisa de palavras-chave: lê notícias de produto e changelogs e depois confere o autocompletar do Google, o Trends e o Search Console atrás de termos com demanda e resultados fracos.",
        "Escreve e atualiza páginas: uma palavra-chave principal por URL, primeiro uma definição, depois passos, uma tabela comparativa e um FAQ.",
        "Corrige problemas on-page: títulos e descrições, links internos, redirecionamentos, dados estruturados e hreflang.",
        "Faz as páginas serem indexadas: avisa o IndexNow, reenvia o sitemap e solicita a indexação.",
        "Relata: tráfego, a distância até a meta e o que fez, em uma nota diária curta.",
      ],
    },
    goals: [
      ["Cliques no Search Console", "Cliques semanais vindos do Google", "+10% por mês"],
      ["Impressões", "Impressões semanais no Search Console", "+20% por mês em um site novo"],
      ["Páginas publicadas", "Páginas novas ou reescritas no ar", "Uma por dia útil"],
      ["Páginas indexadas", "Páginas válidas no relatório de indexação de páginas", "90% do sitemap"],
    ],
    routine: [
      "Confere o que mudou: lançamentos novos no seu mercado, as consultas de ontem no Search Console e páginas com impressões mas sem cliques.",
      "Escolhe um tema e anota o porquê no registro.",
      "Escreve ou reescreve a página só com fontes oficiais e depois traduz, se o seu site tiver mais idiomas.",
      "Testa localmente e abre um pedido de deploy; não publica sozinho.",
      "Quando a página entra no ar, avisa o IndexNow e solicita a indexação, depois atualiza o mapa de palavras-chave.",
      "Antes de encerrar o dia, publica o relatório diário.",
    ],
    brief: `# Cargo: especialista em SEO
Meta: +10% de cliques no Search Console por mês.

## Todo dia útil
1. Confira os lançamentos novos do nosso mercado e as consultas de ontem.
2. Escolha um tema com demanda crescente e resultados fracos; registre o porquê.
3. Escreva ou corrija a página. Fatos só de fontes oficiais.
4. Teste localmente e abra um pedido de deploy. Nunca publique você mesmo.
5. Depois do deploy: IndexNow, solicitar indexação, atualizar keywords.md.
6. Publique um relatório diário: tráfego, distância até a meta, o que você fez.

## Regras
- Uma palavra-chave principal por URL; confira docs/seo/keywords.md antes.
- Pergunte antes de apagar páginas, mudar redirecionamentos ou mexer em código
  fora das pastas de conteúdo.`,
    tools: "Busca e acesso à web para pesquisa, o repositório do site e um servidor de desenvolvimento local para testar páginas, acesso de leitura ao Search Console e ao analytics, e um script para o IndexNow. Quando houver as duas opções, prefira CLIs a servidores MCP; elas gastam menos tokens.",
    approvals: "Publicar deve passar por uma pessoa ou por quem cuida dos deploys. Pergunte também antes de apagar páginas, mudar redirecionamentos, editar código fora das pastas de conteúdo ou mexer no DNS.",
    related:
      "Para montar passo a passo o mesmo agente com skills e hooks, leia [Agente de SEO com IA: como criar um](/blog/ai-seo-agent). Para as peças básicas, veja [skills do Claude Code](/blog/claude-code-skills) e [hooks do Claude Code](/blog/claude-code-hooks).",
    mid: {
      title: "Quer o especialista em SEO sem ter que montá-lo?",
      text: "O especialista em SEO do Crewmark roda no seu Claude Code ou Codex, acorda com um heartbeat e avança um backlog de SEO.",
    },
    faq: [
      {
        q: "O que é um especialista em SEO com IA?",
        a: "Um agente de IA, geralmente um agente de programação como o Claude Code ou o Codex, com a função contínua de aumentar o tráfego orgânico: pesquisar palavras-chave, escrever e corrigir páginas, fazer com que sejam indexadas e relatar os resultados.",
      },
      {
        q: "Um agente de IA consegue fazer SEO sozinho?",
        a: "A maior parte do trabalho diário, sim: pesquisa, redação, tradução, correções técnicas e pedidos de indexação. Publicação, redirecionamentos e qualquer coisa irreversível ainda devem passar por uma pessoa.",
      },
      {
        q: "Qual a diferença para uma ferramenta de SEO?",
        a: "Uma ferramenta de SEO mostra dados; o trabalho continua sendo seu. Um especialista em SEO com IA faz o trabalho no código do seu site e presta contas, em uma agenda.",
      },
      {
        q: "Quanto tempo até um especialista em SEO com IA dar resultado?",
        a: "SEO leva semanas em qualquer site. Um site novo costuma precisar de algumas semanas antes de as impressões crescerem; mire a primeira meta em páginas publicadas e impressões, depois em cliques.",
      },
      {
        q: "Existe um agente de IA grátis para SEO?",
        a: "Você pode rodar um em um agente que já paga, como o Claude Code ou o Codex, com fontes de dados gratuitas como o autocompletar do Google, o Trends, o Search Console e o IndexNow.",
      },
    ],
    cta: "Dê ao seu site um especialista em SEO que nunca pula o checklist.",
  },
  "marketing-agent": {
    name: "agente de marketing com IA",
    meta: {
      title: "Agente de marketing com IA autônomo: metas e rotina",
      description:
        "Um agente de marketing com IA (analista de growth) que roda experimentos em todo o seu funil por conta própria: o que faz, metas para dar a ele, uma rotina diária e um brief do cargo para Claude Code ou Codex. Ou contrate um no Crewmark.",
    },
    breadcrumb: "Agente de marketing com IA",
    title: "Agente de marketing com IA: um analista de growth que trabalha sozinho",
    lead: "Um agente de marketing com IA é um funcionário de IA dono de um número de crescimento, como cadastros no trial, que trabalha nele todo dia: lê os dados do seu funil, encontra a etapa mais fraca, escreve a mudança, roda como experimento e mantém o que vence. Construído sobre um agente de programação como o Claude Code ou o Codex, ele pode mudar landing pages, e-mails e o tracking no seu próprio código. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "Ele trabalha como um analista de growth em uma empresa pequena: um funil, um número, muitos experimentos pequenos.",
      points: [
        "Análise de funil: lê o analytics para ver onde os visitantes desistem entre a landing page, o cadastro e a ativação.",
        "Experimentos: escreve uma hipótese, faz a mudança em uma página ou e-mail e lê o resultado quando há tráfego suficiente.",
        "Copy: títulos, landing pages, copy de anúncios e e-mails de onboarding, em variantes para testar.",
        "E-mail de relacionamento: sequências de boas-vindas e de reengajamento, escritas e configuradas na sua ferramenta de e-mail.",
        "Relatório semanal: o que foi testado, o que venceu e o que vem a seguir.",
      ],
    },
    goals: [
      ["Cadastros no trial", "Cadastros por semana no analytics", "+8% por mês"],
      ["Conversão da landing page", "Visitantes que se cadastram, por página", "+1 ponto percentual"],
      ["Ativação", "Novos usuários que concluem a primeira ação-chave", "+5% por mês"],
      ["Experimentos rodados", "Experimentos iniciados e analisados", "Dois por semana"],
    ],
    routine: [
      "Lê os números do funil de ontem e qualquer experimento que já tenha dados suficientes.",
      "Fecha os experimentos concluídos: mantém o vencedor, reverte o perdedor e anota o que aprendeu.",
      "Escolhe a próxima etapa mais fraca do funil e escreve uma hipótese.",
      "Faz a mudança no código ou na ferramenta de e-mail, atrás de uma flag ou como variante quando possível.",
      "Pergunta antes de qualquer coisa que gaste dinheiro ou chegue aos clientes.",
      "Publica um relatório curto no quadro.",
    ],
    brief: `# Cargo: analista de growth
Meta: +8% de cadastros no trial por mês.

## Todo dia útil
1. Leia os números do funil de ontem e os experimentos em andamento.
2. Feche os experimentos com dados suficientes: manter, reverter, registrar o porquê.
3. Escolha a etapa mais fraca do funil; escreva uma hipótese.
4. Construa a mudança como variante; abra um pedido de revisão.
5. Publique o que você testou, o que venceu e o que vem a seguir.

## Regras
- Uma mudança por experimento; não pare um teste antes da hora.
- Pergunte antes de gastar dinheiro, mandar e-mail para clientes ou mudar preços.`,
    tools: "Acesso de leitura ao seu analytics (de produto e web), o repositório do site e um servidor de desenvolvimento local, a API ou CLI da sua ferramenta de e-mail e uma ferramenta de experimentos ou feature flags, se você tiver.",
    approvals: "Pergunte antes de gastar dinheiro com anúncios, mandar e-mail para clientes, mudar preços ou planos ou publicar qualquer coisa com a sua marca em um canal novo.",
    related:
      "Para o agente começar a trabalhar sozinho, leia [como deixar o Claude Code proativo](/proactive-claude-code) ou o [Codex](/proactive-codex). Para comparar plataformas que rodam agentes como funcionários, veja [as melhores plataformas de funcionários de IA](/blog/best-ai-employee-platforms).",
    mid: {
      title: "Um agente de marketing que trabalha enquanto você constrói?",
      text: "O analista de growth do Crewmark roda no seu Claude Code ou Codex, acorda com um heartbeat e avança os experimentos do seu funil.",
    },
    faq: [
      {
        q: "O que é um agente de marketing com IA?",
        a: "Um agente de IA com uma meta contínua de marketing, como cadastros, que analisa seu funil, escreve copy e roda experimentos por conta própria, relatando os resultados para você.",
      },
      {
        q: "Um agente de marketing com IA consegue rodar de forma autônoma?",
        a: "A pesquisa, a redação e a construção podem rodar em uma agenda, sem prompts. Gastos, e-mails para clientes e mudanças de preço devem esperar o sim de uma pessoa.",
      },
      {
        q: "Um agente de marketing com IA serve para uma pequena empresa?",
        a: "Ele combina com times pequenos, com um produto e sem um profissional de marketing em tempo integral: mantém o trabalho no funil todo dia, e você revisa em vez de fazer.",
      },
      {
        q: "Dá para criar um agente de marketing com IA com o Claude?",
        a: "Sim. O Claude Code com um brief do cargo, acesso ao seu analytics e ao código do site e uma agenda dá conta; o brief do cargo desta página é um ponto de partida.",
      },
      {
        q: "Agente de marketing com IA ou automação de marketing?",
        a: "A automação roda fluxos fixos que você desenha. Um agente de marketing com IA decide o que testar em seguida, constrói e lê o resultado.",
      },
    ],
    cta: "Coloque um analista de growth no seu funil, no agente que você já usa.",
  },
  "social-media-manager": {
    name: "social media com IA",
    meta: {
      title: "Social media com IA: um agente que posta e aprende",
      description:
        "O que faz um social media com IA, as metas e a rotina diária para dar a ele e um brief do cargo para Claude Code ou Codex. Escreve, agenda e responde, com a sua aprovação antes de qualquer coisa ficar pública.",
    },
    breadcrumb: "Social media com IA",
    title: "Social media com IA: um agente que escreve, agenda e aprende",
    lead: "Um social media com IA é um funcionário de IA que mantém suas contas ativas: escreve posts e threads a partir do que seu time lança, agenda, rascunha respostas a menções e aprende quais posts dão certo. Construído sobre um agente de programação como o Claude Code ou o Codex, ele trabalha a partir do seu changelog, da documentação e das suas notas. Como os posts são públicos, ele rascunha e você aprova. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "A matéria-prima dele é o seu próprio trabalho: lançamentos, documentação, posts do blog e perguntas de clientes.",
      points: [
        "Transforma lançamentos e posts do blog em threads para o X e posts para o LinkedIn.",
        "Mantém um calendário de conteúdo e agenda os posts aprovados.",
        "Rascunha respostas a menções e comentários para você aprovar.",
        "Lê os números de cada post e anota o que engaja.",
        "Reaproveita o que funcionou: formatos, horários e temas.",
      ],
    },
    goals: [
      ["Seguidores", "Novos seguidores líquidos por mês", "+5% por mês"],
      ["Posts publicados", "Posts aprovados que foram ao ar", "Um por dia útil"],
      ["Engajamento", "Respostas, reposts e curtidas por post", "Subindo mês a mês"],
      ["Cliques para o site", "Visitas vindas das redes, no analytics", "+10% por mês"],
    ],
    routine: [
      "Lê o que foi lançado ou escrito desde ontem.",
      "Rascunha os posts do dia na sua voz e coloca no calendário para aprovação.",
      "Agenda os posts que você aprovou.",
      "Rascunha respostas às menções novas; passa qualquer coisa sensível para uma pessoa.",
      "Lê os números dos posts de ontem e anota o que funcionou.",
    ],
    brief: `# Cargo: social media
Meta: +5% de seguidores por mês.

## Todo dia útil
1. Leia os lançamentos, posts do blog e mudanças na documentação novos.
2. Rascunhe os posts de hoje (thread no X, post no LinkedIn) na nossa voz.
3. Coloque os rascunhos no quadro para aprovação; agende os aprovados.
4. Rascunhe respostas às menções novas; passe reclamações para uma pessoa.
5. Registre os números de ontem e o que funcionou.

## Regras
- Nunca poste nem responda em público sem aprovação.
- Nenhuma afirmação que não dê para comprovar com um link; nenhum post sobre concorrentes.`,
    tools: "Seu changelog, documentação e blog (o repositório ou uma pasta), a API ou CLI de uma ferramenta de agendamento, acesso de leitura ao analytics de cada plataforma e um calendário ou quadro compartilhado para os rascunhos.",
    approvals: "No começo, todo post e toda resposta pública precisa da sua aprovação. Pergunte também antes de seguir ou mandar mensagem para contas, entrar em threads sobre concorrentes ou responder reclamações.",
    related:
      "Para rodar vários agentes lado a lado, veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents). Para entender o que torna um agente um funcionário, leia [o que é um funcionário de IA](/ai-employees).",
    mid: {
      title: "Manter suas contas ativas sem escrever cada post?",
      text: "O social media do Crewmark escreve a partir do que você lança, agenda o que você aprova e mostra o que engaja.",
    },
    faq: [
      {
        q: "O que é um social media com IA?",
        a: "Um agente de IA que cuida das suas redes sociais no dia a dia: rascunha posts a partir do seu trabalho, agenda os aprovados, rascunha respostas e acompanha o que performa.",
      },
      {
        q: "Um agente de IA deve postar sem aprovação?",
        a: "No começo, não. Posts são públicos e difíceis de desfazer, então comece com rascunhos que você aprova e só afrouxe para formatos de baixo risco quando confiar na voz dele.",
      },
      {
        q: "Dá para criar um social media com IA com o Claude?",
        a: "Sim: o Claude Code com um brief do cargo, acesso ao seu conteúdo e a uma ferramenta de agendamento, e uma agenda diária. O brief do cargo desta página é um ponto de partida.",
      },
      {
        q: "Existe um social media com IA grátis?",
        a: "Você pode rodar um em um agente que já paga, como o Claude Code ou o Codex. Ferramentas de agendamento e APIs das plataformas podem ter custos próprios.",
      },
      {
        q: "Sobre o que um social media com IA deve escrever?",
        a: "Primeiro sobre o seu próprio material: lançamentos, guias, perguntas de clientes e lições aprendidas. É sobre isso que ele consegue escrever com precisão.",
      },
    ],
    cta: "Dê às suas contas um social media que escreve a partir do que você lança.",
  },
  "software-engineer": {
    name: "engenheiro de software com IA",
    meta: {
      title: "Engenheiro de software com IA no Claude Code ou Codex",
      description:
        "Um agente engenheiro de software com IA que pega tarefas, abre pull requests com testes e pede revisão. O que faz, metas para dar a ele, uma rotina diária e um brief do cargo para Claude Code ou Codex.",
    },
    breadcrumb: "Engenheiro de software com IA",
    title: "Engenheiro de software com IA: um agente que pega tarefas e abre pull requests",
    lead: "Um engenheiro de software com IA é um agente de programação, como o Claude Code ou o Codex, com um lugar no seu time: pega tarefas do quadro, trabalha em uma branch no próprio checkout, abre pull requests com testes e pede revisão, sem precisar de um prompt para cada tarefa. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "Ele trabalha como um engenheiro júnior ou pleno que nunca esquece o checklist: mudanças pequenas, testes e um pull request claro.",
      points: [
        "Pega a próxima tarefa que estiver pronta, ou a que foi atribuída a ele.",
        "Trabalha na própria branch e no próprio checkout, então nunca mexe na sua cópia de trabalho.",
        "Escreve ou atualiza testes e roda as verificações antes de pedir revisão.",
        "Abre um pull request que explica a mudança e como ela foi testada.",
        "Responde aos comentários de revisão e corrige o que foi pedido.",
      ],
    },
    goals: [
      ["Pull requests mergeados", "Pull requests mergeados por semana", "10 por semana"],
      ["Cycle time", "Horas entre pegar a tarefa e abrir o PR", "Menos de um dia útil"],
      ["Rodadas de revisão", "Rodadas de ajustes antes do merge", "Uma ou duas"],
      ["Bugs fechados", "Tarefas de bug fechadas por semana", "O que houver no backlog"],
    ],
    routine: [
      "Confere os pull requests abertos dele atrás de comentários de revisão e corrige esses primeiro.",
      "Pega a próxima tarefa pronta; se não estiver clara, pergunta na própria tarefa.",
      "Cria a branch, faz a mudança, testa e roda as verificações localmente.",
      "Abre o pull request e move a tarefa para revisão.",
      "Repete até o fim do horário de trabalho e depois publica o que ficou em andamento.",
    ],
    brief: `# Cargo: engenheiro de software
Meta: 10 pull requests mergeados por semana.

## Para cada tarefa
1. Leia a tarefa; pergunte nela se algo não estiver claro.
2. Trabalhe em uma branch nova no seu próprio checkout.
3. Escreva ou atualize testes; rode lint, checagem de tipos e testes.
4. Abra um PR: o que mudou, por que e como você testou.
5. Responda aos comentários de revisão antes de pegar trabalho novo.

## Regras
- Nunca faça push na main nem merge do seu próprio PR.
- Pergunte antes de migrações de banco de dados, atualizar dependências ou
  apagar código que não foi você que escreveu.`,
    tools: "O repositório e o gerenciador de tarefas dele, o `gh` ou a CLI do seu serviço de Git, os comandos de teste e lint do projeto e um checkout ou git worktree separado por tarefa; veja o [guia de worktree do Claude Code](/blog/claude-code-worktree).",
    approvals: "Merge, deploy, migrações de banco de dados, atualizações de dependências e qualquer coisa que envolva segredos ou dados de produção devem esperar por uma pessoa.",
    related:
      "Para Claude Code vs Codex como motor, veja [Claude Code vs Codex](/blog/claude-code-vs-codex). Para rodar vários engenheiros ao mesmo tempo, leia [vários agentes do Claude Code](/blog/multiple-claude-code-agents) e [agentes em segundo plano do Claude Code](/blog/claude-code-background-agents).",
    mid: {
      title: "Ter um engenheiro que pega a próxima tarefa sozinho?",
      text: "O engenheiro de software do Crewmark roda no seu Claude Code ou Codex, pega tarefas com um heartbeat e abre pull requests para revisão.",
    },
    faq: [
      {
        q: "O que é um agente engenheiro de software com IA?",
        a: "Um agente de programação, como o Claude Code ou o Codex, que avança tarefas por conta própria: cria uma branch, muda o código, testa e abre pull requests para uma pessoa revisar.",
      },
      {
        q: "Qual é o melhor agente engenheiro de software com IA?",
        a: "Depende do motor em que você confia: Claude Code e Codex são os mais comuns, e qualquer um dos dois pode rodar como engenheiro de software com IA com um brief do cargo, um checkout próprio e uma agenda.",
      },
      {
        q: "Um engenheiro de software com IA pode fazer merge do próprio código?",
        a: "Não deveria. Deixe merge e deploy com pessoas; o agente abre pull requests e corrige os comentários de revisão.",
      },
      {
        q: "Qual a diferença para eu mesmo usar o Claude Code?",
        a: "Você para de iniciar cada tarefa. O agente pega a próxima tarefa do quadro no horário de trabalho, e você revisa pull requests em vez de escrever prompts.",
      },
      {
        q: "Posso rodar vários engenheiros com IA em um repositório?",
        a: "Sim, se cada um tiver a própria branch e o próprio checkout, como um git worktree, para que as mudanças não colidam.",
      },
    ],
    cta: "Tenha um engenheiro que transforma tarefas em pull requests, no seu plano.",
  },
  "ui-designer": {
    name: "UI designer com IA",
    meta: {
      title: "UI designer com IA: interfaces no seu próprio código",
      description:
        "Um UI designer com IA que transforma páginas cruas em uma interface consistente, no seu código e com os seus componentes. O que faz, metas para dar a ele, uma rotina diária e um brief do cargo para Claude Code ou Codex.",
    },
    breadcrumb: "UI designer com IA",
    title: "UI designer com IA: interfaces consistentes, no seu próprio código",
    lead: "Um UI designer com IA é um funcionário de IA que melhora a interface do seu produto direto no código: tipografia, espaçamento, componentes, modo escuro e acessibilidade. Construído sobre um agente de programação como o Claude Code ou o Codex, ele trabalha no seu design system em vez de em um arquivo de design à parte, confere o trabalho em um navegador e abre um pull request com prints de antes e depois. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "O que ele entrega é código, então uma mudança fica pronta para ir ao ar assim que você aprova.",
      points: [
        "Audita páginas atrás de tipografia, espaçamento e cores inconsistentes e corrige com os seus design tokens.",
        "Transforma markup avulso em componentes compartilhados.",
        "Adiciona e confere o modo escuro.",
        "Corrige problemas de acessibilidade: contraste, estados de foco, labels e uso pelo teclado.",
        "Tira prints de antes e depois em larguras de desktop e celular para a revisão.",
      ],
    },
    goals: [
      ["Telas refinadas", "Telas que passam no checklist dele, por semana", "Três por semana"],
      ["Problemas de acessibilidade", "Problemas abertos segundo uma ferramenta de auditoria", "Caindo toda semana"],
      ["Componentes compartilhados", "Padrões avulsos trocados por componentes", "Dois por semana"],
      ["Regressões visuais", "Bugs de UI relatados depois das mudanças dele", "Zero"],
    ],
    routine: [
      "Escolhe a próxima tela do quadro ou da lista de auditoria.",
      "Tira prints em larguras de desktop e celular, no modo claro e escuro.",
      "Corrige com os tokens e componentes do design system; cria um componente se um padrão se repete.",
      "Confere de novo no navegador e roda as verificações de acessibilidade.",
      "Abre um pull request com prints de antes e depois.",
    ],
    brief: `# Cargo: UI designer
Meta: 3 telas refinadas por semana.

## Para cada tela
1. Tire prints: desktop e celular, claro e escuro.
2. Corrija tipografia, espaçamento e cores só com os nossos tokens.
3. Reutilize componentes; extraia um se um padrão se repetir.
4. Confira contraste, estados de foco e labels.
5. Abra um PR com prints de antes e depois.

## Regras
- Nada de cores, fontes ou valores de espaçamento novos fora dos tokens.
- Pergunte antes de mudar textos, layouts de fluxos principais ou a marca.`,
    tools: "O repositório do front-end e um servidor de desenvolvimento local, um navegador que ele consiga controlar para tirar prints, seus design tokens e sua biblioteca de componentes, e um verificador de acessibilidade.",
    approvals: "Pergunte antes de mudar a marca (logo, cores, fontes), os textos, o layout dos fluxos de cadastro ou checkout, ou qualquer coisa que um cliente vá notar em uma página que converte.",
    related:
      "Para ter um designer trabalhando junto com um engenheiro, veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents). Para ele pegar trabalho sozinho, leia [como deixar o Claude Code proativo](/proactive-claude-code).",
    mid: {
      title: "Refinar sua interface sem um backlog de design?",
      text: "O UI designer do Crewmark trabalha no seu código e com os seus componentes, e abre pull requests com prints de antes e depois.",
    },
    faq: [
      {
        q: "O que é um UI designer com IA?",
        a: "Um agente de IA que melhora a interface de um produto direto no código: tipografia, espaçamento, componentes, modo escuro e acessibilidade, conferidos em um navegador e enviados como pull requests.",
      },
      {
        q: "Um UI designer com IA substitui o Figma?",
        a: "Não para explorar ideias novas. Ele serve para o trabalho constante de deixar consistentes e acessíveis as telas já lançadas, o que acontece no código de qualquer forma.",
      },
      {
        q: "O Claude Code consegue fazer design de UI?",
        a: "O Claude Code consegue editar código de front-end e, com uma ferramenta de navegador, conferir o resultado. Um brief do cargo e design tokens mantêm as mudanças dele consistentes.",
      },
      {
        q: "Como impedir que um designer com IA mude a marca?",
        a: "Limite-o aos seus design tokens no brief do cargo e coloque marca, textos e fluxos principais na lista do que ele precisa perguntar antes.",
      },
    ],
    cta: "Dê à sua interface um designer que trabalha no seu código.",
  },
  "app-designer": {
    name: "UI designer de apps com IA",
    meta: {
      title: "UI designer de apps com IA: telas iOS e Android",
      description:
        "Um UI designer de apps com IA que desenha telas para iOS e Android no código do seu app e confere tudo no simulador. O que faz, metas para dar a ele, uma rotina diária e um brief do cargo para Claude Code ou Codex.",
    },
    breadcrumb: "UI designer de apps com IA",
    title: "UI designer de apps com IA: telas mobile, construídas e conferidas no simulador",
    lead: "Um UI designer de apps com IA é um funcionário de IA que desenha e refina suas telas de iOS e Android no próprio código do app e depois confere tudo no simulador ou emulador antes de pedir revisão. Construído sobre um agente de programação como o Claude Code ou o Codex, ele segue as convenções de cada plataforma e os seus componentes, e pode preparar os prints da App Store. Esta página mostra o que ele faz, as metas e a rotina para dar a ele e um brief do cargo que você pode copiar.",
    does: {
      text: "Ele desenha no código do app, então o que você revisa é o que vai ao ar.",
      points: [
        "Monta telas novas e refina as existentes com os seus componentes.",
        "Segue as convenções de iOS e Android: navegação, áreas seguras, Dynamic Type e áreas de toque.",
        "Roda o app no simulador ou emulador e tira prints de cada mudança.",
        "Confere o modo escuro, telas pequenas e grandes e os labels de acessibilidade.",
        "Prepara os prints para a App Store e a Play Store.",
      ],
    },
    goals: [
      ["Telas entregues", "Telas novas ou redesenhadas mergeadas por semana", "Duas por semana"],
      ["Testes no simulador", "Mudanças com prints em aparelhos pequenos e grandes", "Toda mudança"],
      ["Acessibilidade", "Telas com labels e suporte a Dynamic Type", "Todas as telas novas"],
      ["Prints das lojas", "Prints atualizados a cada versão", "Toda versão"],
    ],
    routine: [
      "Pega a próxima tela do quadro.",
      "Constrói ou ajusta a tela com os componentes do app.",
      "Roda no simulador em um aparelho pequeno e em um grande, no modo claro e escuro.",
      "Corrige o que estiver estranho e depois tira print do resultado.",
      "Abre um pull request com os prints.",
    ],
    brief: `# Cargo: UI designer de apps
Meta: 2 telas de app por semana.

## Para cada tela
1. Construa com os nossos componentes e as convenções da plataforma.
2. Rode no simulador: aparelho pequeno e grande, claro e escuro.
3. Confira áreas seguras, Dynamic Type, áreas de toque e labels.
4. Abra um PR com prints do simulador.

## Regras
- Não mude a estrutura de navegação nem o onboarding sem perguntar.
- Não envie builds para a App Store nem para a Play Store.`,
    tools: "O repositório do app, o Xcode e o iOS Simulator ou o Android Studio e um emulador na máquina em que ele roda, um jeito de tirar prints e a sua biblioteca de componentes.",
    approvals: "Pergunte antes de mudar a navegação, o onboarding ou as telas de paywall, e nunca deixe que ele envie builds ou edite as páginas das lojas sozinho.",
    related:
      "Para o engenheiro que conecta a lógica por trás das telas dele, veja o [engenheiro de software com IA](/ai-employees/software-engineer). Para interfaces web, veja o [UI designer com IA](/ai-employees/ui-designer).",
    mid: {
      title: "Refinar as telas do seu app no piloto automático?",
      text: "O UI designer de apps do Crewmark constrói telas de iOS e Android no seu código e confere tudo no simulador.",
    },
    faq: [
      {
        q: "O que é um UI designer de apps com IA?",
        a: "Um agente de IA que desenha e refina telas de apps mobile no próprio código do app e confere tudo no iOS Simulator ou no emulador do Android antes de pedir revisão.",
      },
      {
        q: "Um agente de IA consegue desenhar telas de iOS?",
        a: "Um agente de programação como o Claude Code ou o Codex consegue escrever telas em SwiftUI ou UIKit, rodar o app no simulador e tirar print do resultado, em um Mac com Xcode.",
      },
      {
        q: "Um UI designer de apps com IA é o mesmo que um gerador de design de apps com IA?",
        a: "Não. Um gerador cria mockups a partir de um prompt. Um UI designer de apps com IA trabalha no código real do seu app, com os seus componentes, e abre pull requests.",
      },
      {
        q: "Ele consegue fazer os prints da App Store?",
        a: "Sim, a partir do simulador. Enviar os prints, assim como os builds, deve ficar com uma pessoa.",
      },
    ],
    cta: "Dê ao seu app um designer que confere cada tela no simulador.",
  },
};
