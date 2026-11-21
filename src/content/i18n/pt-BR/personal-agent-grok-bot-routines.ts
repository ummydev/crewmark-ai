import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# Peça ao Bot que deve cuidar do trabalho, no chat dele
Crie uma rotina para organizar o meu Gmail da noite todo dia útil às 7:00,
rascunhar respostas para o que for urgente e me mandar a lista. Não envie nada.

Crie uma rotina todo domingo às 18:00: revise o Google Calendar da próxima semana,
aponte conflitos e dias sobrecarregados e me mande um plano para segunda.

Crie uma rotina a cada 2 horas nos dias úteis: confira o canal #launch do Slack
em busca de perguntas sobre preços e rascunhe respostas para eu aprovar.`;

const webhook = `# Copie "POST to" e "key" da seção Webhook da rotina (desktop)
curl -X POST "https://<POST to URL from the routine>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = uma execução começou (veja o resultado no chat do Bot)
# qualquer outra resposta = nenhuma execução começou`;

export const copy: GuideCopy = {
  meta: {
    title: "Rotinas do Grok Bot: agendamentos, webhooks e correções",
    description:
      "Como configurar rotinas no Grok Bot: agendamentos em linguagem comum, fusos horários, execuções de teste, gatilhos de webhook e Slack, os limites (50 rotinas, 5 minutos, 300 execuções por hora) e o que conferir quando uma rotina não roda.",
  },
  breadcrumb: "Rotinas do Grok Bot",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Grok Bot",
    title: "Rotinas do Grok Bot: como agendar um Bot, acioná-lo por webhook e corrigir problemas",
    lead: "Uma rotina diz a um Grok Bot quando rodar um trabalho: com agendamento, como todo dia útil às 8:00, ou quando algo acontece, como uma menção no Slack ou uma chamada de webhook. Como os Bots trabalham em um computador na nuvem, as rotinas rodam com o seu notebook fechado. Este guia mostra como criar uma rotina no desktop e no celular, a forma de escrever agendamentos que funciona, webhooks e gatilhos de eventos, os limites, ideias de rotina a partir dos próprios exemplos da xAI e o que conferir quando uma rotina não roda.",
    cta: "Começar",
    secondary: "Criar uma rotina",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é uma rotina do Grok Bot",
      text: [
        "Nas palavras da xAI, uma rotina “diz a um Bot quando rodar um workflow: com agendamento ou quando algo acontece.” Ela pertence a um Bot, usa a memória e as skills desse Bot e publica os resultados no chat dele.",
      ],
      points: [
        "Agendamentos: frases simples como “every weekday at 8:00 AM” ou “every 2 hours”, no fuso horário definido em Settings.",
        "Eventos: um gatilho do Slack; um evento do GitHub, Linear, Sentry ou PagerDuty; um e-mail para o endereço próprio do Bot; ou uma chamada de webhook.",
        "Uma rotina nova não roda quando você a cria. Ela espera o próximo horário agendado; use Test para rodá-la agora.",
        "As rotinas rodam no computador do Bot na nuvem, então continuam quando o seu notebook está fechado.",
        "Toda execução, inclusive os testes, consome o seu uso do Grok Bot.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como criar uma rotina no Grok Bot",
      steps: [
        {
          title: "Peça ao Bot que deve cuidar do trabalho",
          text: "No desktop, abra o chat desse Bot e descreva o trabalho e quando ele deve rodar. Diga de onde vem a entrada, que resultado você quer, o que precisa da sua aprovação e o que fazer se uma fonte estiver faltando. No celular, abra o perfil do Bot, toque em Add routine em Routines e complete a mensagem que começa com “Set up a routine to”.",
          code: prompts,
        },
        {
          title: "Confira “When to run” e o fuso horário",
          text: "Abra a rotina e leia When to run para confirmar o agendamento salvo; se estiver errado, escolha Edit e descreva a correção. O fuso horário fica em Settings, em Bot, no campo Timezone. O Auto-detect usa o fuso do seu computador, então escolha um fixo se o trabalho pertence a outro lugar.",
        },
        {
          title: "Teste uma vez",
          text: "No desktop, abra a rotina e escolha Test. Ela mostra Running… até a execução terminar, e o resultado aparece no chat do Bot. Os testes fazem trabalho de verdade, como alterar arquivos ou usar sites, então mantenha tudo o que grava ou envia atrás da sua aprovação. Se uma rotina não tiver botão Test, peça ao Bot para fazer o trabalho uma vez no chat com uma entrada segura.",
        },
        {
          title: "Pause, retome ou exclua",
          text: "No desktop, clique no nome do Bot, abra Details e use a chave na linha da rotina, ou abra a rotina e escolha Pause ou Resume. No celular, abra a rotina pelo perfil do Bot e desligue Active; deslize a linha para excluí-la. A exclusão não pode ser desfeita.",
        },
      ],
      source: { label: "Fonte: documentação do Grok Bot da xAI, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "Como acionar uma rotina com um webhook",
      text: [
        "Um webhook deixa outro serviço iniciar uma rotina, por exemplo a sua loja quando um reembolso é pedido, ou um formulário quando alguém se cadastra.",
      ],
      steps: [
        {
          title: "Adicione o gatilho",
          text: "Peça ao Bot para adicionar um gatilho de webhook à rotina.",
        },
        {
          title: "Copie a URL e a chave",
          text: "No desktop, abra a rotina e encontre a seção Webhook: POST to (a URL), key (o segredo) e header (o cabeçalho Authorization completo). Clique em um campo para copiá-lo.",
          code: webhook,
        },
        {
          title: "Envie um POST e leia a resposta",
          text: "Envie um HTTP POST com a chave como `Authorization: Bearer <key>`. Você pode incluir um corpo JSON; o Bot o recebe junto com as instruções da rotina. Um 200 significa que uma execução começou, não que terminou. Qualquer outra resposta significa que nenhuma execução começou: confira se a rotina não está pausada e se você está usando a chave atual.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Gatilhos do Slack, GitHub e outros eventos",
      points: [
        "Slack: dispara quando o Bot é mencionado, quando uma palavra ou frase aparece, quando alguém reage a uma mensagem ou em qualquer mensagem, em um canal ou em todo o Slack. Conecte o Slack antes na conta do Cursor dona do Bot.",
        "GitHub, Linear, Sentry e PagerDuty: iniciam uma rotina a partir de um evento nessas ferramentas; esses gatilhos passam pelas integrações da conta do Cursor e podem exigir conexão própria.",
        "E-mail: uma rotina pode começar a partir de um e-mail enviado ao endereço próprio do Bot.",
        "Só atividade nova inicia uma execução. Mantenha os gatilhos estreitos: um canal movimentado observado em toda mensagem consome uso rápido.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Limites das rotinas do Grok Bot",
      headers: ["Limite", "Valor"],
      rows: [
        ["Rotinas por Bot", "Até 50"],
        ["Agendamento mais curto", "5 minutos entre execuções"],
        ["Execuções por hora, todas as rotinas juntas", "Até 300"],
        ["Execuções por hora, uma rotina", "Até 200"],
        ["Histórico de execuções guardado", "As 20 execuções mais recentes por rotina"],
        ["Acima de um limite de taxa", "A execução falha com “Automation run rate limit exceeded”"],
        ["Depois de uma ausência longa", "O Grok Bot pode perguntar se deve manter as rotinas rodando, e as pausa se você não responder"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Rotinas do Grok Bot não funcionam? O que conferir",
      points: [
        "Nunca rodou: uma rotina nova espera o próximo horário agendado. Escolha Test para rodá-la agora.",
        "Está pausada: no desktop a chave da linha está desligada; no celular, Active está desligado. O Grok Bot também pode pausar rotinas sozinho depois que você ficou ausente.",
        "Horário errado: leia When to run e depois confira o Timezone em Settings > Bot. O Auto-detect segue o computador em que você está.",
        "Um gatilho do Slack não disparou: a mensagem precisa ser nova, estar no canal observado e conter a frase correspondente.",
        "O webhook não iniciou uma execução: qualquer resposta diferente de 200 significa que não iniciou. Confira se a rotina não está pausada e se a chave é a atual.",
        "Uma execução falhou por limite de taxa: estreite o gatilho ou espace o agendamento, depois rode de novo com Test ou reenviando o webhook. A xAI também lista falhas causadas por um limite compartilhado do Grok Bot como problema conhecido; essas não são repetidas automaticamente.",
        "O uso acabou: toda execução consome o seu uso semanal. Pause as rotinas de que você não precisa e espace os agendamentos. Na The X Subscription, o uso extra vem de crédito pré-pago; nos planos antigos do Cursor, do uso sob demanda, se estiver ativado.",
        "“Sync failed”: a documentação de rotinas da xAI não descreve esse erro. Abra a rotina, confira o agendamento e o gatilho e rode Test; se continuar falhando, fale com o suporte do Grok Bot pelo app.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "Ideias de rotina a partir dos próprios exemplos da xAI",
      text: ["Estas vêm dos casos de uso da documentação da xAI; cada uma rascunha o trabalho e espera a sua aprovação antes de qualquer coisa sair."],
      headers: ["Rotina", "Quando", "O que faz"],
      rows: [
        ["Resumo da manhã", "Toda manhã", "Resume o que mudou durante a noite nos seus apps e rascunha um post para a equipe"],
        ["Gestor da caixa de entrada", "Durante a noite", "Ordena o Gmail por urgência e rascunha respostas para as conversas urgentes sem enviar"],
        ["Semana que vem", "Domingo à noite", "Revisa o Google Calendar, aponta conflitos e manda um plano para segunda"],
        ["Notas de reunião", "Toda noite", "Extrai itens de ação com responsáveis das notas do Granola e rascunha um post no Slack"],
        ["Atualizações de projeto", "Às sextas", "Rascunha atualizações de progresso no Notion e as adiciona depois da sua aprovação"],
        ["Equipe de campanha", "Segundas, 9h", "Puxa dados de cadastro, rascunha o conteúdo de lançamento e checa os fatos com os números"],
        ["Inteligência competitiva", "Semanal", "Relata lançamentos e mudanças de preço dos concorrentes, com links"],
        ["Fechamento do mês", "Dia 1º do mês", "Concilia faturas e despesas e lista as exceções para aprovação"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Rotinas também para o seu agente de código",
      text: [
        "As rotinas do Grok Bot servem para trabalho que vive no Gmail, no Slack e no Notion. Se o trabalho vive em um repositório de código, o Crewmark dá o mesmo ritmo ao seu próprio Claude Code ou Codex: um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat que o acorda para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Contrate um funcionário no seu agente",
          text: "Rode o comando de configuração em uma conversa do Claude Code ou do Codex; essa conversa vira o funcionário. Veja [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Defina horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você escolher, inclusive de madrugada. Veja [como deixar o Claude Code proativo](/proactive-claude-code) e [tarefas agendadas no Codex](/proactive-codex).",
        },
        {
          title: "Compare agentes pessoais",
          text: "Veja o [guia do Grok Bot](/personal-agent/grok-bot) e [agentes pessoais de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Criar uma rotina no Grok Bot" },
  mid: {
    title: "Quer a mesma rotina para um agente de código?",
    text: "O Crewmark acorda o seu Claude Code ou Codex com um heartbeat durante o horário de trabalho e entrega a próxima issue a ele.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como agendo uma rotina no Grok Bot?",
        a: "Peça ao Bot que deve cuidar do trabalho, no chat dele, para criar uma rotina e diga quando, por exemplo “every weekday at 8:00 AM”. No celular, abra o perfil do Bot e toque em Add routine. Depois abra a rotina e confira When to run e o seu fuso horário.",
      },
      {
        q: "Por que a minha rotina do Grok Bot não está rodando?",
        a: "Em geral ela está esperando o primeiro horário agendado, está pausada ou o fuso horário está errado. Rode Test para ver se funciona, confirme que Active está ligado e leia When to run. Chamadas de webhook que não recebem 200 não iniciam uma execução.",
      },
      {
        q: "Como aciono uma rotina do Grok Bot com um webhook?",
        a: "Peça ao Bot para adicionar um gatilho de webhook, copie a URL e a chave da seção Webhook da rotina no desktop e envie um HTTP POST com `Authorization: Bearer <key>`. Um corpo JSON é repassado ao Bot.",
      },
      {
        q: "Com que frequência uma rotina do Grok Bot pode rodar?",
        a: "No máximo a cada cinco minutos. Cada rotina pode rodar até 200 vezes por hora e todas as rotinas juntas até 300, e um Bot pode ter até 50 rotinas.",
      },
      {
        q: "As rotinas rodam com o meu computador desligado?",
        a: "Sim. Os Bots trabalham em um computador na nuvem, então execuções agendadas e acionadas continuam com o seu notebook fechado, e o Bot avisa quando termina.",
      },
      {
        q: "As rotinas do Grok Bot consomem uso?",
        a: "Sim. Toda execução, inclusive as de Test, consome o seu uso do Grok Bot, e agendamentos frequentes ou gatilhos em canais movimentados do Slack consomem mais rápido.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu agente de código um horário e um trabalho.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação do Grok Bot da xAI e na página de planos do Grok Bot no Cursor em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a xAI, a SpaceX, o X ou o Cursor e sem endosso deles. Grok é uma marca do respectivo titular.",
};
