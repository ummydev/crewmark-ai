import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// Permitir a solicitação
{ "action": "allow" }

// Negá-la: deny_reason aparece para o usuário (máx. 500 caracteres),
// reference_id vai apenas para o feed de atividade de compliance
{
  "action": "deny",
  "deny_reason": "Este prompt parece conter dados de cartão de clientes.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Inference hooks do Claude: como funcionam e configuração",
    description:
      "Os inference hooks do Claude, disponíveis desde 5 de novembro de 2026, enviam cada prompt e chamada de ferramenta ao seu servidor de segurança para permitir ou negar. Como funcionam, configuração, limites e a diferença para os hooks do Claude Code.",
  },
  breadcrumb: "Inference hooks do Claude",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude",
    title: "Inference hooks do Claude: uma checagem de permitir ou negar antes de cada prompt",
    lead: "Os inference hooks (hooks de inferência) permitem que uma organização do Claude Enterprise envie cada prompt, e opcionalmente cada chamada de ferramenta, ao seu próprio servidor de segurança e espere um veredito de permitir ou negar antes de o Claude rodar. Eles ficaram disponíveis para todos em 5 de novembro de 2026, junto com uma nova central de segurança em beta. Como a checagem acontece nos servidores da Anthropic, uma única configuração cobre o claude.ai, o Claude Code, o Cowork e os outros produtos do Claude, sem instalar nada nos notebooks. Este guia mostra como eles funcionam, como configurá-los, seus limites e como se diferenciam dos hooks que você escreve no Claude Code.",
    cta: "Começar",
    secondary: "Como configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Como os inference hooks funcionam",
      text: [
        "A sua organização (ou o fornecedor de segurança dela) mantém um servidor de segurança de IA: um endpoint HTTPS. Quando alguém envia um prompt, a Anthropic posta a transcrição da conversa nesse endpoint, assinada com o esquema Standard Webhooks, e espera um veredito. Com allow, a inferência segue; com deny, a solicitação nunca chega ao modelo e o usuário vê o seu motivo mais uma mensagem fixa dos seus administradores.",
      ],
      points: [
        "Dois eventos: `prompt`, antes de cada solicitação de inferência governada, e `tool_call`, antes de as chamadas de ferramenta da resposta do Claude rodarem, quando Validate tool calls (validar chamadas de ferramenta) está ativado.",
        "Uma configuração para a organização inteira: claude.ai, Claude Desktop e mobile, Claude Code (CLI incluída), Cowork, Claude for Microsoft 365, Claude Tag e Claude in Chrome.",
        "O que o seu servidor vê: o texto da transcrição, as chamadas de ferramenta e seus resultados, e o texto extraído de anexos. Nunca os bytes brutos de arquivos ou imagens, os prompts de sistema ou as definições de ferramentas.",
        "Os vereditos são só allow ou deny. Reescrever ou mascarar dados de um prompt não é suportado.",
        "Cada negação fica registrada no Activity Feed da sua organização.",
      ],
    },
    {
      kind: "table",
      title: "Inference hooks vs hooks do Claude Code vs Compliance API",
      text: [
        "Os nomes são parecidos, mas são três ferramentas diferentes. Os hooks do Claude Code são configurados por projeto ou por usuário e rodam na máquina do desenvolvedor; os inference hooks são definidos uma vez pela organização e rodam do lado da Anthropic.",
      ],
      headers: ["", "Inference hooks", "Hooks do Claude Code", "Compliance API"],
      rows: [
        ["Quem configura", "O Owner ou Primary owner da organização", "Cada desenvolvedor ou projeto, no `settings.json`", "A equipe de segurança ou compliance"],
        ["Onde roda", "Os servidores da Anthropic chamam o seu endpoint HTTPS", "Comandos de shell na máquina do desenvolvedor", "Você chama a API da Anthropic"],
        ["Quando", "Antes da inferência e antes de as chamadas de ferramenta rodarem", "Em eventos como PreToolUse, PostToolUse e Stop", "Depois do fato"],
        ["Cobre", "Todos os produtos do Claude na organização Enterprise", "Sessões do Claude Code com essa configuração", "Atividade, chats, arquivos, transcrições"],
        ["Pode bloquear", "Sim: allow ou deny", "Sim, nos eventos que suportam", "Não: auditoria e exportação"],
        ["Plano", "Claude Enterprise", "Qualquer usuário do Claude Code", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar os inference hooks",
      text: [
        "Você precisa do papel de Owner ou Primary owner (Admin não basta) e de um endpoint HTTPS público na porta 443. Túneis como o ngrok são bloqueados, então hospede o servidor de teste em um domínio que você controla.",
      ],
      steps: [
        {
          title: "Libere o recurso",
          text: "No claude.ai, abra Organization settings → Data and privacy (configurações da organização → dados e privacidade) e ative Allow for your organization em Inference hooks. Isso não inicia a inspeção: Enforce verdicts (aplicar vereditos) continua desligado.",
        },
        {
          title: "Adicione o seu endpoint e guarde o segredo de assinatura",
          text: "Clique em Configure, informe a sua URL `https://` e salve. No primeiro salvamento aparece, uma única vez, um segredo de assinatura do webhook: guarde-o, porque o seu servidor o usa para verificar cada solicitação.",
        },
        {
          title: "Adicione headers e teste",
          text: "Adicione até 16 headers estáticos para que o seu servidor possa autenticar a Anthropic e depois clique em Test connection. Ele envia um prompt sintético e mostra o veredito e o tempo de ida e volta.",
        },
        {
          title: "Devolva um veredito como JSON com HTTP 200",
          text: "Responda a cada solicitação com HTTP 200 e um `action`. Um status diferente de 200 é uma falha, não uma negação.",
          code: verdict,
        },
        {
          title: "Escolha o tratamento de falhas e um timeout",
          text: "Block the request falha fechado, Allow the request falha aberto. O timeout do veredito vai de 1 a 10.000 ms, 5.000 por padrão; um veredito lento conta como servidor inacessível. Falhas repetidas acionam um circuit breaker que aplica a sua configuração de falha até o servidor se recuperar.",
        },
        {
          title: "Implante aos poucos e depois aplique",
          text: "Comece no Shadow mode, que envia os vereditos sem bloquear nada, inspecione uma porcentagem das solicitações, exclua papéis personalizados se precisar e depois ative Enforce verdicts. As mudanças chegam a todos os servidores em cerca de um minuto.",
        },
      ],
      source: { label: "Fonte: documentação da Claude Platform, Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "Limites e pegadinhas",
      points: [
        "Só Enterprise: não estão no Team, Pro ou Max, nem em organizações da Claude Platform (API), nem no Amazon Bedrock ou Google Cloud.",
        "Conteúdo só de imagem, como uma captura de tela de um documento, não é inspecionado, porque os bytes brutos nunca são enviados.",
        "Uma mensagem negada continua na transcrição e é reenviada a cada mensagem seguinte. No Claude Code, rode `/rewind` até o prompt que a trouxe ou `/clear` para recomeçar.",
        "Algumas chamadas de modelo em segundo plano da própria Anthropic não são governadas, como as varreduras hospedadas do Claude Security, o Code Review em pull requests do GitHub e os relatórios inteligentes. Rodar `/code-review` localmente no Claude Code é governado.",
        "No modo de voz, uma pequena parte das chamadas de ferramenta não é enviada, então não dependa dos hooks como único controle ali.",
        "O mesmo anúncio trouxe uma central de segurança (beta) que compara as suas configurações do Claude, do Cowork e do Claude Code com a configuração recomendada pela Anthropic, além de gerenciamento centralizado e controles de acesso em beta.",
      ],
    },
    {
      kind: "text",
      title: "Por que isso importa para agentes que trabalham sozinhos",
      text: [
        "Quando o Claude Code trabalha sem supervisão, em um agendamento ou em segundo plano, ninguém lê cada prompt antes de ele ser enviado. Os inference hooks dão a uma empresa uma checagem em linha em cada solicitação e chamada de ferramenta, onde quer que o agente rode, e o shadow mode permite que as equipes de segurança ajustem a política antes de bloquear qualquer coisa. Para proteções por projeto em uma única máquina, os hooks e as regras de permissão do próprio Claude Code continuam valendo; veja [o plan mode do Claude Code](/blog/claude-code-plan-mode) para os modos de permissão.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Proteções para funcionários de IA que trabalham enquanto você está fora",
      text: [
        "O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro. Em um plano Claude Enterprise, os inference hooks checam os prompts dele como os de qualquer outra pessoa.",
      ],
      steps: [
        {
          title: "Decida o que precisa do seu sim",
          text: "Cada funcionário pergunta antes de ações arriscadas, como publicar, fazer merge ou gastar dinheiro, e você aprova a partir de uma única caixa de entrada.",
        },
        {
          title: "Mantenha o registro no quadro",
          text: "Cada issue guarda os comentários e as mudanças de status do funcionário, então você pode revisar o que ele fez ao lado dos logs da sua equipe de segurança.",
        },
        {
          title: "Deixe o heartbeat começar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como tornar o Claude Code proativo](/proactive-claude-code) e [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar os inference hooks do Claude" },
  mid: {
    title: "A segurança está pronta. Agora dê um trabalho ao Claude Code.",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os inference hooks do Claude",
    items: [
      {
        q: "O que são os inference hooks do Claude?",
        a: "Um recurso do Claude Enterprise que envia cada prompt, e opcionalmente cada chamada de ferramenta, ao servidor de segurança da sua organização, que responde allow ou deny antes de o Claude rodar. Eles ficaram disponíveis para todos em 5 de novembro de 2026.",
      },
      {
        q: "Os inference hooks funcionam com o Claude Code?",
        a: "Sim. Uma única configuração cobre todos os produtos do Claude na organização Enterprise, incluindo o Claude Code na CLI e no app desktop, sem nada para instalar nas máquinas dos desenvolvedores.",
      },
      {
        q: "Qual a diferença entre inference hooks e hooks do Claude Code?",
        a: "Os hooks do Claude Code são comandos de shell que cada desenvolvedor ou projeto configura no `settings.json` e rodam localmente em eventos como PreToolUse. Os inference hooks são definidos uma vez pela organização e rodam nos servidores da Anthropic antes da inferência, para todos os produtos do Claude.",
      },
      {
        q: "Quais planos têm inference hooks?",
        a: "Só o Claude Enterprise, configurado pelo Owner ou Primary owner. Eles não estão disponíveis para organizações da API da Claude Platform nem no Amazon Bedrock ou Google Cloud.",
      },
      {
        q: "Um inference hook pode mascarar dados sensíveis?",
        a: "Não. Os vereditos são só allow ou deny; reescrever ou mascarar dados de um prompt não é suportado.",
      },
      {
        q: "O que acontece se o meu servidor de segurança cair?",
        a: "Quem decide é a sua configuração de tratamento de falhas: bloquear a solicitação (falha fechada) ou deixá-la passar sem inspeção (falha aberta). Um circuit breaker para de chamar um servidor com falha e se reinicia quando ele se recupera.",
      },
      {
        q: "O que é a central de segurança do Claude?",
        a: "Uma página em beta em Organization settings, anunciada junto com os inference hooks, que compara as suas configurações do Claude, do Cowork e do Claude Code com a configuração recomendada pela Anthropic e gera um relatório para auditores.",
      },
    ],
  },
  cta: {
    title: "Funcionários de IA no Claude Code, dentro das suas proteções.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o anúncio da Anthropic, a Central de Ajuda do Claude e a documentação da Claude Platform em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
