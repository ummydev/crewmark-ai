import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts (the `en` value of grokBotReviews).

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: avaliações de usuários do Hacker News (2026)",
    description:
      "Avaliações do Grok Bot em 6 threads do Hacker News, de agosto a novembro de 2026: elogios, queixas sobre limites de uso e segurança, e o que usam no lugar.",
  },
  breadcrumb: "Avaliações do Grok Bot",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Avaliações",
    title: "Avaliações do Grok Bot: o que os usuários dizem no Hacker News",
    lead: "O Grok Bot é o conjunto de colegas de equipe de IA hospedados da xAI: Bots que ganham, cada um, um computador próprio na nuvem, entram nas suas ferramentas, trabalham no Slack e no Microsoft Teams, rodam rotinas e passam trabalho uns para os outros. Lemos 7 threads do Hacker News sobre ele, de agosto a novembro de 2026, os três primeiros meses dele; uma era o post de lançamento de uma ferramenta concorrente, então as contagens vêm das outras 6. Os usuários descrevem como entregam a ele tarefas reais sem escrever código. A reclamação que mais apareceu é sobre limites de uso, em 3 das 6 threads; segurança e valor pouco claro apareceram em 2 cada.",
    cta: "Começar",
    secondary: "Ver os temas",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "Como coletamos estas avaliações",
      text: [
        "Lemos 7 threads do Hacker News sobre o Grok Bot em 13 de novembro de 2026, uma página por vez. Uma delas era o post de lançamento de uma ferramenta open source concorrente, escrito pelo próprio criador, e não a contamos para nenhum tema, então todas as contagens desta página são sobre as outras 6. O Grok Bot foi lançado em beta em 11 de agosto de 2026, então todas elas são dos três primeiros meses dele, de agosto a novembro de 2026.",
      ],
      points: [
        "Um tema só entra na lista se apareceu em pelo menos 2 das 6 threads contadas, e dizemos em quantas. Pontos levantados em um único comentário ficaram de fora.",
        "Uma das 6 não é só sobre o Grok Bot: é uma thread geral em que as pessoas descrevem os setups de IA delas, e usamos só as menções ao Grok Bot. Outras duas discutem a mesma notícia, e a mais recente tem link para a anterior, então contamos essa notícia uma vez só.",
        "Também encontramos 17 threads do Reddit pela busca do Google, mas não conseguimos abrir o reddit.com, então não as lemos nem resumimos. Elas estão listadas pelo título em [Mais discussões no Reddit](#reddit).",
        "Esta é uma amostra de discussões públicas, não uma pesquisa. Quem posta sobre uma ferramenta costuma ter opiniões fortes. Os meses foram calculados a partir da idade de cada thread e podem ter um mês de diferença.",
        "Nada foi pago nem solicitado: não postamos, não pedimos avaliações e não entramos em contato com ninguém. Os resumos estão nas nossas palavras, e a única citação está marcada e com link.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Avaliações do Grok Bot em resumo",
      text: [
        "O que apareceu nas 6 threads do Hacker News que contamos (a sétima, o post de lançamento de uma ferramenta concorrente, não entra na contagem). As contagens são de threads, não de comentários.",
      ],
      headers: ["Tema", "O que os usuários dizem", "Threads"],
      rows: [
        ["Elogio: tarefas sem código", "Pesquisa, e-mails e resumos periódicos entregues do começo ao fim", "2 de 6"],
        ["Reclamação: limites de uso", "Bots sempre ligados consomem o uso, e uma thread de novembro discutiu a limitação imposta ao Grok Bot", "3 de 6"],
        ["Reclamação: segurança", "Prompt injection, e entregar aos Bots logins e acesso a contas sensíveis", "2 de 6"],
        ["Reclamação: valor pouco claro", "Difícil citar uma tarefa para entregar a ele, ou visto como uma versão hospedada de agentes open source", "2 de 6"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Do que os usuários gostam",
      points: [
        `Tarefas reais feitas sem programar (2 de 6 threads). Os usuários descrevem como entregam a ele tarefas como encontrar um fornecedor, enviar candidaturas a vagas e e-mails, e montar resumos de sites e redes sociais. Threads do Hacker News: [agosto de 2026](${hn.launch}), [novembro de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Reclamações comuns",
      points: [
        `Limites de uso e consumo de tokens (3 de 6 threads). Os usuários dizem que Bots sempre ligados esgotam rápido a cota semanal. Um comentarista do Hacker News resumiu assim em agosto de 2026: "Agentes perpétuos sempre ligados usam MUITOS tokens" ("Always on perpetual agents use a LOT of tokens") ([thread](${hn.launch})). Em novembro de 2026, uma thread do Hacker News discutiu a limitação imposta ao Grok Bot depois que os custos da xAI superaram a receita das assinaturas, como diz o título da thread. Threads: [agosto de 2026](${hn.launch}), [novembro de 2026](${hn.throttled}), [novembro de 2026](${hn.agenticSetup}).`,
        `Segurança e acesso às contas (2 de 6). Os usuários se preocupam com prompt injection e com dar aos Bots os seus logins e acesso a contas sensíveis sem limites firmes sobre o que cada Bot pode alcançar. Threads: [agosto de 2026](${hn.launch}), [outubro de 2026](${hn.agentAccess}).`,
        `Valor pouco claro (2 de 6). Alguns usuários não conseguiram citar uma tarefa que entregariam a ele; outros o veem como uma versão hospedada de agentes open source como o OpenClaw. Threads: [agosto de 2026](${hn.launch}), [novembro de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "Para onde as pessoas migram",
      text: [
        "Estas opções apareceram como recomendação em pelo menos 2 das 6 threads contadas. Outras ferramentas foram citadas em só uma thread cada, então ficaram de fora aqui; a nossa página de [alternativas ao Grok Bot](/alternatives/grok-bot) compara as principais opções a partir da documentação de cada uma.",
      ],
      points: [
        `Hermes Agent (2 de 6). Recomendado em uma thread e citado como opção comparável em outra; os usuários o descrevem como mais barato e mais configurável, com o modelo que você escolher. Veja [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) e [preços do Hermes Agent](/pricing/hermes-agent). Threads: [agosto de 2026](${hn.launch}), [novembro de 2026](${hn.agenticSetup}).`,
        `O seu próprio setup com Codex ou Claude Code (2 de 6). Os usuários dizem que o Codex ou o Claude Code mais alguns scripts próprios cobrem boa parte do mesmo trabalho por menos dinheiro. Veja [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code). Threads: [agosto de 2026](${hn.launch}), [novembro de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Mais discussões no Reddit",
      text: [
        "Listamos estas threads do Reddit para quem quiser ler mais. Nós as encontramos pela busca do Google, mas não conseguimos abrir o reddit.com, então não as lemos nem resumimos, e nenhum dos temas acima se baseia nelas.",
      ],
      points: [
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, agosto de 2026",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, setembro de 2026",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, setembro de 2026",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, setembro de 2026",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, setembro de 2026",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, setembro de 2026",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, outubro de 2026",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, outubro de 2026",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, outubro de 2026",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, outubro de 2026",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, outubro de 2026",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, outubro de 2026",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, novembro de 2026",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, novembro de 2026",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, novembro de 2026",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, novembro de 2026",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, novembro de 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Fatos sobre o Grok Bot para checar o que se diz",
      text: [
        "Da página do produto e do post de lançamento da xAI, conferidos em 13 de novembro de 2026. Mais no nosso [guia do Grok Bot](/personal-agent/grok-bot).",
      ],
      points: [
        "O que é: colegas de equipe de IA hospedados da xAI. Cada Bot ganha um computador próprio na nuvem, entra nas suas ferramentas e apps, trabalha no Slack e no Microsoft Teams, roda rotinas com agendamento e passa trabalho para outros Bots.",
        "Lançamento: em beta em 11 de agosto de 2026; a página do produto agora diz que ele saiu do beta.",
        "Preço: incluído nos planos Premium ($30 por mês), Super ($100 por mês, 3,5 vezes o uso do Premium) e Ultra ($200 por mês, 12 vezes o uso do Premium) da xAI, com cobrança mensal. Cada plano inclui uso semanal do Grok Bot, e o uso extra é cobrado pelo custo dos tokens. Os planos Teams e Enterprise são via time de vendas.",
        "Licença: não é open source.",
        "Onde roda: na nuvem da xAI, então os Bots continuam trabalhando com o seu notebook fechado. Você os acessa pelos apps para desktop e celular, no Slack e no Microsoft Teams, e em chamadas do Google Meet, do Zoom ou do Teams.",
        "Modelos: os Bots são construídos com o Grok.",
        "Aprovações: os Bots consultam você quando precisam de aprovação, e ações sensíveis podem passar pelo Auto Review.",
        "Site oficial: [x.ai/bot](https://x.ai/bot).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Agentes no seu próprio computador, com um trabalho fixo",
      text: [
        "O Grok Bot roda Bots na nuvem da xAI, com o Grok. O Crewmark segue outro caminho: as suas próprias sessões do Claude Code ou do Codex, no seu computador e na assinatura que você já paga, viram funcionários de IA com cargo, metas e horário de trabalho, cada um pegando a próxima issue de um quadro compartilhado. As contrapartidas: o seu computador precisa ficar ligado, por enquanto os agentes se coordenam por issues (mensagens diretas entre agentes estão a caminho), e não há integração nativa com o Slack. É open source sob GPL-3.0 e grátis para 1 projeto e até 3 funcionários de IA.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees) ou escreva o seu próprio cargo e as suas metas." },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem. Durante o horário de trabalho, um heartbeat acorda o funcionário para pegar a próxima, em intervalos que vão de 15 minutos a um dia.",
        },
        {
          title: "Responda quando ele perguntar",
          text: "Quando precisa de uma revisão, de uma permissão ou de uma informação, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos com a configuração para cada agente estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer o seu agente de programação trabalhando com agenda?",
    text: "O Crewmark dá ao Claude Code ou ao Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Grok Bot vale a pena?",
        a: "Depende do que você entregaria a ele e de quanto uso precisa. Nas 6 threads do Hacker News que contamos, os usuários descrevem tarefas feitas sem código, como pesquisa, e-mails e resumos periódicos. A reclamação que mais apareceu é sobre limites de uso, em 3 das 6; segurança e valor pouco claro apareceram em 2 cada. Ele está incluído no plano Premium da xAI, a $30 por mês, com o Super a $100 e o Ultra a $200 para mais uso.",
      },
      {
        q: "Quais são as reclamações mais comuns sobre o Grok Bot?",
        a: "Nas 6 threads que contamos: limites de uso e consumo de tokens (3 de 6); segurança, principalmente prompt injection e entregar aos Bots logins e acesso a contas sensíveis (2 de 6); e valor pouco claro, de usuários que não conseguiram citar uma tarefa para entregar a ele ou que o veem como uma versão hospedada de agentes open source (2 de 6).",
      },
      {
        q: "O Grok Bot é seguro?",
        a: "Segurança apareceu em 2 das 6 threads que contamos. Os usuários se preocupam com prompt injection e com dar aos Bots os seus logins e acesso a contas sensíveis sem limites firmes sobre o que cada Bot pode alcançar. A página do produto da xAI diz que os Bots consultam você quando precisam de aprovação e que ações sensíveis podem passar pelo Auto Review.",
      },
      {
        q: "Existe uma avaliação honesta do Grok Bot?",
        a: "Esta página não testa o Grok Bot; ela resume o que os usuários disseram em 6 threads do Hacker News dos três primeiros meses dele, com links para você lê-las. Os usuários descrevem como entregam tarefas sem código. A reclamação mais comum é sobre limites de uso (3 de 6), seguida de segurança e valor pouco claro (2 de 6 cada). Nada aqui foi pago nem solicitado.",
      },
      {
        q: "O que os usuários do Reddit dizem sobre o Grok Bot?",
        a: "Não conseguimos abrir o Reddit, então não resumimos essas threads. Só pelos títulos: sete pedem ou indicam alternativas, várias delas open source ou auto-hospedadas; três perguntam se ele vale a pena, uma delas sobre o plano Premium de $30; duas são sobre limites de uso e cobrança; uma o compara com o Muse, da Meta; uma, no r/MuseAgent, pergunta se o que aconteceu com o Grok Bot pode acontecer com o Muse; uma diz que a documentação dele mostra que todos os seus Bots compartilham um computador, enquanto a página do produto da xAI diz que cada Bot tem o próprio (veja [os fatos](#facts)); uma alerta as pessoas para ficarem longe da xAI; e uma diz que o Grok Bot validou o que o autor vem construindo. As 17 estão com link em [Mais discussões no Reddit](#reddit).",
      },
      {
        q: "O que as pessoas usam no lugar do Grok Bot?",
        a: "Nas 6 threads que contamos, duas opções apareceram mais de uma vez: o Hermes Agent, que os usuários descrevem como mais barato e mais configurável, e um setup caseiro com Codex ou Claude Code mais scripts próprios (2 de 6 cada). A nossa página de [alternativas ao Grok Bot](/alternatives/grok-bot) compara mais opções a partir da documentação de cada uma.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho fixo ao seu agente de programação.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Threads lidas em 13 de novembro de 2026. Dados do produto conferidos na página do produto e no post de lançamento da xAI no mesmo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a xAI nem com nenhuma empresa citada nesta página e sem endosso delas. As opiniões resumidas aqui são dos comentaristas das threads com link. Os nomes de produtos são marcas dos respectivos titulares.",
};
