import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# No Claude Code: instale o plugin oficial (escolha o escopo de usuário)
/plugin install telegram@claude-plugins-official

# Salve o token que o BotFather te deu
/telegram:configure <token>

# Reinicie o Claude Code com o channel ativado
claude --channels plugin:telegram@claude-plugins-official

# Mande uma mensagem ao seu bot e pareie com o código que ele responder
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Channels do Claude Code: configurar Telegram, Discord e iMessage",
    description:
      "Como funcionam os channels do Claude Code e como configurar os plugins oficiais de Telegram, Discord e iMessage: comandos, pareamento, allowlist de remetentes, requisitos, por que os channels não aparecem, e o Slack.",
  },
  breadcrumb: "Channels do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Channels do Claude Code: mande mensagens ao Claude Code pelo Telegram, Discord ou iMessage",
    lead: "Os channels enviam mensagens para uma sessão do Claude Code que já está rodando no seu computador, então você pode escrever para ela pelo celular e receber a resposta no mesmo chat enquanto o trabalho acontece nos seus arquivos de verdade. Telegram, Discord e iMessage têm plugins oficiais. Este guia explica como os channels funcionam, como configurar cada um, como manter estranhos de fora, por que às vezes eles não aparecem e como se comparam ao Remote Control e ao Claude no Slack.",
    cta: "Começar",
    secondary: "Configurar o Telegram",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que são os channels do Claude Code",
      text: [
        "Um channel é um servidor MCP que envia eventos para a sua sessão do Claude Code em execução. Ele pode ser bidirecional: o Claude lê a mensagem e responde pelo mesmo channel, como uma ponte de chat. Os eventos só chegam enquanto a sessão está aberta.",
      ],
      points: [
        "Plugins de channel oficiais: Telegram, Discord e iMessage, mais o fakechat, um chat de demonstração em localhost.",
        "Cada um é um plugin do claude-plugins-official e precisa do Bun instalado.",
        "Você também pode criar o seu próprio channel, por exemplo um receptor de webhooks para falhas de CI ou alertas de erro.",
        "Os channels são uma prévia de pesquisa: a flag `--channels` não aparece em `claude --help`, e a sintaxe pode mudar.",
        "No terminal, você vê a mensagem recebida e uma confirmação como “sent”; o texto da resposta em si aparece no app de chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o channel do Telegram",
      steps: [
        {
          title: "Crie um bot",
          text: "No Telegram, abra o BotFather, envie `/newbot`, dê ao bot um nome e um username terminado em “bot”, e copie o token.",
          code: telegram,
        },
        {
          title: "Instale e configure o plugin",
          text: "No Claude Code, rode `/plugin install telegram@claude-plugins-official` e escolha o escopo de usuário. Se o marketplace não for encontrado, adicione-o com `/plugin marketplace add anthropics/claude-plugins-official`. Depois salve o token com `/telegram:configure <token>`, ou defina `TELEGRAM_BOT_TOKEN` antes de iniciar o Claude Code.",
        },
        {
          title: "Reinicie com o channel ativado",
          text: "Saia e inicie o Claude Code de novo com `--channels plugin:telegram@claude-plugins-official`. Você pode passar vários plugins de channel, separados por espaços.",
        },
        {
          title: "Pareie e restrinja o acesso",
          text: "Envie qualquer mensagem ao seu bot; ele responde com um código de pareamento. Aprove com `/telegram:access pair <code>` e depois rode `/telegram:access policy allowlist` para que só a sua conta alcance a sessão.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code sobre channels", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord e iMessage",
      points: [
        "Discord: crie uma aplicação no Discord Developer Portal, copie o token do bot, ative o Message Content Intent e convide o bot com o escopo `bot`. Depois rode `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`, reinicie com `--channels plugin:discord@claude-plugins-official`, mande uma DM ao bot e pareie com `/discord:access pair <code>`.",
        "iMessage: só no macOS, sem bot nem token. Ele lê o seu banco de dados do Mensagens, então dê ao seu terminal Acesso Total ao Disco. Instale `imessage@claude-plugins-official`, reinicie com `--channels plugin:imessage@claude-plugins-official` e mande uma mensagem para você mesmo. Adicione outras pessoas com `/imessage:access allow <phone or Apple ID email>`.",
        "Slack: não é um channel. O Claude no Slack inicia uma sessão na nuvem a partir de uma menção @Claude, em vez de mandar mensagens para a sua sessão local.",
        "WhatsApp e outros apps: não há plugin de channel oficial; você teria de criar o seu com a referência de channels.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels indisponíveis ou sem funcionar?",
      points: [
        "O tipo de conta: os channels exigem login pelo claude.ai ou uma chave de API do Console. Eles não funcionam pelo Amazon Bedrock, pela Agent Platform do Google Cloud nem pelo Microsoft Foundry.",
        "A sua organização: no Claude Team e no Enterprise, os channels ficam bloqueados até um Owner ativá-los em Organization settings > Claude Code > Channels. Um aviso na inicialização informa isso. Contas Pro, Max e Ultra sem organização pulam essa verificação.",
        "O plugin não está aprovado: durante a prévia, `--channels` aceita só plugins da allowlist da Anthropic (ou da sua organização). Qualquer outro inicia sem o channel, e o aviso de inicialização diz por quê.",
        "O bot não responde: o Claude Code precisa estar rodando com `--channels`; o bot só consegue responder enquanto o channel está ativo.",
        "Para no meio da tarefa: um pedido de permissão pausa a sessão até alguém responder. Alguns channels conseguem repassar o pedido para o seu celular.",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Mantenha estranhos de fora",
      points: [
        "Todo channel oficial mantém uma allowlist de remetentes; mensagens de qualquer outra pessoa são descartadas em silêncio. Telegram e Discord adicionam você pelo pareamento; o iMessage deixa passar as suas próprias mensagens.",
        "Só servidores citados em `--channels` podem enviar mensagens; estar no `.mcp.json` não basta.",
        "Se um channel repassa pedidos de permissão, qualquer pessoa na allowlist dele pode aprovar ou negar o uso de ferramentas na sua sessão. Só adicione quem você confiaria para isso.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels vs Remote Control vs Claude no Slack",
      headers: ["", "O que faz", "Onde roda", "Bom para"],
      rows: [
        ["Channels", "Envia mensagens de chat, alertas e webhooks para a sua sessão aberta", "Seu computador", "Escrever para a sessão pelo celular; reagir a CI e alertas"],
        ["[Remote Control](/remote-claude-code)", "Você comanda a sua sessão local pelo claude.ai ou pelo app do Claude", "Seu computador", "Conduzir o trabalho em andamento longe da mesa"],
        ["Claude no Slack", "Uma menção @Claude inicia uma sessão na nuvem", "Nuvem da Anthropic", "Iniciar tarefas a partir de uma conversa da equipe"],
        ["Hook de notificação", "Roda um comando seu, como um alerta na área de trabalho, quando o Claude precisa de você", "Seu computador", "Saber quando um turno termina ou precisa de resposta"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Deixe o Claude Code mandar mensagem para você, não só responder",
      text: [
        "Um channel é uma forma de falar com uma sessão que você deixou rodando. O Crewmark transforma essa sessão em um funcionário de IA: ele acorda com um heartbeat durante o horário de trabalho, pega a próxima issue de um quadro e manda mensagem para você no Crewmark quando trava, sem você ter de escrever primeiro.",
      ],
      steps: [
        {
          title: "Contrate um funcionário no seu Claude Code",
          text: "Rode o comando de configuração em uma conversa do Claude Code; essa conversa vira o funcionário. Veja [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Dê a ele horário e um heartbeat",
          text: "Escolha o horário de trabalho e com que frequência ele acorda, a cada 15 a 240 minutos. Veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Responda quando ele precisar de você",
          text: "As decisões chegam como mensagens diretas; uma resposta e ele continua. Para trabalho durante a noite, veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o channel do Telegram no Claude Code" },
  mid: {
    title: "Quer que o Claude Code venha até você quando travar?",
    text: "Os funcionários do Crewmark acordam com um heartbeat, avançam por um quadro e mandam mensagem quando precisam de uma decisão.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre channels no Claude Code",
    items: [
      {
        q: "O que são os channels do Claude Code?",
        a: "Servidores MCP que enviam eventos para uma sessão do Claude Code já em execução: mensagens de chat do Telegram, Discord ou iMessage, ou webhooks de CI e monitoramento. O Claude pode responder pelo mesmo channel. São uma prévia de pesquisa.",
      },
      {
        q: "Existe um plugin oficial do Claude Code para o Telegram?",
        a: "Sim: `telegram@claude-plugins-official`. Instale com `/plugin install`, salve o token do BotFather com `/telegram:configure`, inicie o Claude Code com `--channels plugin:telegram@claude-plugins-official` e pareie a sua conta com o código que o bot enviar.",
      },
      {
        q: "Posso usar os channels do Claude Code com Slack ou WhatsApp?",
        a: "Não há channel oficial para nenhum dos dois. No Slack, o Claude no Slack inicia sessões na nuvem a partir de uma menção @Claude. Para outros apps, você pode criar o seu próprio channel com a referência de channels.",
      },
      {
        q: "Por que os channels do Claude Code não estão disponíveis?",
        a: "Normalmente porque você faz login pelo Bedrock, Google Cloud ou Foundry, porque a sua organização Team ou Enterprise não os ativou, ou porque o plugin não está na lista aprovada. O aviso de inicialização diz o motivo.",
      },
      {
        q: "Os channels funcionam com o computador desligado?",
        a: "Não. Os eventos só chegam enquanto a sessão está aberta no seu computador; para algo sempre ligado, rode o Claude Code em um processo em segundo plano ou em um terminal persistente, numa máquina que não entre em repouso.",
      },
      {
        q: "Como recebo uma notificação quando o Claude Code termina?",
        a: "Adicione um hook `Notification` ou `Stop` que dispare um alerta na área de trabalho, como `osascript` no macOS. Veja [hooks do Claude Code](/blog/claude-code-hooks). Para saber pelo celular, peça ao Claude que responda por um channel quando terminar.",
      },
    ],
  },
  cta: {
    title: "De responder mensagens a trabalhar na própria fila.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com a documentação do Claude Code sobre channels em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic. Claude e Claude Code são marcas registradas da Anthropic; Telegram, Discord e iMessage são marcas registradas de seus donos.",
};
