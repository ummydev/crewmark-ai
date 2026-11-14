import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao OpenClaw: Hermes, NanoClaw, ZeroClaw (2026)",
    description:
      "As alternativas ao OpenClaw comparadas a partir da documentação de cada uma: Hermes Agent, NanoClaw, ZeroClaw, IronClaw e NVIDIA NemoClaw. Como cada uma roda, quais modelos e assinaturas suporta, seu modelo de segurança e quando uma opção voltada para o trabalho, como o Crewmark, faz mais sentido.",
  },
  breadcrumb: "Alternativas ao OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "Alternativas ao OpenClaw: Hermes, NanoClaw, ZeroClaw, IronClaw e mais",
    lead: "O OpenClaw é o assistente de IA open source que roda no seu próprio computador e responde a você no WhatsApp, Telegram, Slack, Discord e mais de 20 outros canais. Com cerca de 394 mil estrelas no GitHub, é o mais conhecido, mas não o único. As pessoas procuram uma alternativa por três motivos: mais segurança por padrão, outro modelo ou outra assinatura, ou um runtime mais leve. Este guia compara as principais opções a partir da documentação de cada uma e explica quando você quer um assistente pessoal e quando quer agentes que trabalham para uma equipe.",
    cta: "Começar",
    secondary: "Compare as alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "O OpenClaw em resumo",
      text: [
        "O OpenClaw começou como Clawdbot, foi renomeado para Moltbot e depois para OpenClaw no fim de janeiro de 2026, depois que a Anthropic pediu uma mudança de nome por causa da sua marca registrada. Peter Steinberger o criou; desde então ele entrou na OpenAI, e o projeto agora fica na OpenClaw Foundation, independente e anunciada em julho de 2026, que diz que a OpenAI é “uma doadora, não uma dona”. A versão mais recente é a v2026.11.1, de 5 de novembro de 2026.",
      ],
      points: [
        "Roda como um daemon Gateway local no macOS, Linux, Windows ou WSL2, com apps para desktop e celular.",
        "Os modelos são plugins: Claude (por chave de API ou reaproveitando um login do Claude Code na mesma máquina), OpenAI e Codex, e modelos locais como Ollama.",
        "Segurança: trata as mensagens recebidas como não confiáveis e faz pareamento com remetentes desconhecidos, mas as ferramentas rodam no host na sessão principal, a menos que você configure o sandboxing.",
        "O projeto publica suas correções de segurança: 722 avisos desde janeiro de 2026, 14 deles críticos, todos corrigidos e divulgados, além de uma auditoria da Trail of Bits cujas descobertas foram todas corrigidas.",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas ao OpenClaw comparadas",
      text: ["Segundo o README, o site ou a documentação de cada projeto, e a API do GitHub, em 7 de novembro de 2026. As estrelas estão arredondadas."],
      headers: ["", "O que é", "Onde roda", "Modelos e assinaturas", "Isolamento", "Licença, estrelas"],
      rows: [
        ["OpenClaw", "Assistente pessoal de IA nos seus apps de chat", "macOS, Linux, Windows, WSL2; apps para celular", "Claude por chave de API ou um login local do Claude Code; OAuth do ChatGPT/Codex; modelos locais", "Host por padrão; sandboxing opcional", "MIT, ~394k"],
        ["Hermes Agent (Nous Research)", "Agente que se aprimora sozinho com um ciclo de aprendizado integrado", "Linux, macOS, Windows, WSL2, Android; app de desktop", "Qualquer provedor; assinatura do Claude só no Max com créditos de uso extra (não no Pro); OAuth do ChatGPT/Codex", "Aprovação para comandos perigosos; Docker ou Modal opcional", "MIT, ~261k"],
        ["NanoClaw", "Assistente leve que roda agentes em contêineres", "macOS, Linux, WSL2; precisa de Docker e Claude Code", "Claude por chave de API ou assinatura via Claude Code; Codex, OpenCode, Ollama por skill", "Um contêiner por sessão; as credenciais nunca entram nele", "MIT, ~31k"],
        ["ZeroClaw", "Runtime de agentes em um único binário Rust", "Linux, macOS, Windows, FreeBSD, Docker; placas como Raspberry Pi", "Anthropic, OpenAI, Ollama e cerca de 20 outros; assinatura do Codex; Claude Max via setup-token", "Supervisionado por padrão; sandboxes do sistema operacional", "MIT ou Apache 2.0, ~33k"],
        ["IronClaw (NEAR AI)", "Assistente focado em privacidade e segurança", "macOS, Linux, Windows; ou NEAR AI Cloud em um TEE", "Chaves de API de provedores (Anthropic, OpenAI, Gemini, Ollama e mais)", "Sandbox WASM; credenciais injetadas na fronteira", "MIT ou Apache 2.0, ~13k; nuvem de $0 a $200/mês"],
        ["NVIDIA NemoClaw", "Stack de segurança que roda OpenClaw ou Hermes em sandboxes do OpenShell (alfa)", "Linux e DGX Spark primeiro; Docker, Colima ou Podman", "NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini por API", "Sandbox do OpenShell com controle de saída", "Apache 2.0, ~23k"],
        ["Crewmark", "Funcionários de IA para o trabalho: papéis, metas e um quadro compartilhado", "Quadro hospedado; daemon no macOS, Windows, Linux", "Roda dentro do Claude Code, Codex, DeepSeek Harness ou OpenCode, no plano que você já tem", "Cada funcionário na sua própria sessão e checkout", "Comercial"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher uma alternativa ao OpenClaw",
      steps: [
        {
          title: "Defina para que serve",
          text: "Um assistente pessoal com quem você fala pelo celular (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw) é um trabalho diferente de agentes que avançam pelo backlog de uma equipe em um repositório (Crewmark, ou vários [agentes do Claude Code](/blog/multiple-claude-code-agents)).",
        },
        {
          title: "Veja como ele isola as ferramentas",
          text: "Essa é a principal diferença entre eles. Escolha isolamento por contêiner ou no nível do sistema operacional por padrão se o agente for ler mensagens de outras pessoas.",
          code: sandbox,
        },
        {
          title: "Veja quem paga a conta",
          text: "O suporte a assinaturas varia muito: alguns reaproveitam um login do Claude Code ou um setup token, o Hermes precisa do Claude Max com créditos de uso extra, e outros exigem chaves de API. Confira os termos do seu provedor para uso por terceiros.",
        },
        {
          title: "Veja a plataforma",
          text: "No Windows: OpenClaw, Hermes, ZeroClaw e IronClaw instalam de forma nativa; o NanoClaw precisa do WSL2; o NemoClaw é testado primeiro no Linux. Para uma pegada mínima ou placas de hardware, ZeroClaw.",
        },
        {
          title: "Comece com um canal e permissões restritas",
          text: "Conecte um único app de chat, permita só a sua própria conta e amplie o acesso depois de ver como ele se comporta.",
        },
      ],
      source: { label: "Fonte: README do OpenClaw", href: openclaw },
    },
    {
      kind: "text",
      title: "Qual alternativa ao OpenClaw combina com você",
      points: [
        "Você quer o OpenClaw com isolamento mais rígido: NanoClaw (contêineres por design), ou NemoClaw para rodar o próprio OpenClaw dentro do sandbox da NVIDIA.",
        "Você quer um agente que aprenda e aprimore as próprias skills: Hermes Agent.",
        "Você quer um runtime pequeno e rápido ou precisa rodar em uma placa: ZeroClaw.",
        "Você quer recursos de privacidade e uma opção de nuvem gerenciada: IronClaw.",
        "Você quer comparar OpenClaw vs Claude Code: o OpenClaw é um assistente centrado no chat; o Claude Code é um agente de programação no seu repositório. Para manter o Claude Code trabalhando sem prompts, veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        "Você quer agentes que façam um trabalho para a sua equipe, a partir de um quadro compartilhado, no plano do Claude Code ou do Codex que você já paga: Crewmark (abaixo). Veja também [a comparação de superagentes](/blog/superagent).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Não um assistente pessoal: uma equipe de funcionários de IA",
      text: [
        "O OpenClaw e suas alternativas esperam a sua mensagem. O Crewmark é feito para o trabalho: ele transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, acorda esse funcionário com um heartbeat para pegar a próxima issue de um quadro compartilhado e faz com que ele mande mensagem para você quando precisar de uma decisão.",
      ],
      steps: [
        {
          title: "Escolha um papel",
          text: "Um [especialista em SEO](/ai-employees/seo-specialist), um [engenheiro de software](/ai-employees/software-engineer), um [agente de marketing](/ai-employees/marketing-agent) e mais, cada um com uma meta que você pode mudar.",
        },
        {
          title: "Conecte o agente que você já usa",
          text: "Ele roda na sua própria sessão e checkout, na assinatura que você já paga.",
        },
        {
          title: "Atribua trabalho e aprove",
          text: "Preencha o quadro; o funcionário pega a próxima issue e pergunta antes de qualquer coisa que esteja na sua lista de aprovação. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher uma alternativa ao OpenClaw" },
  mid: {
    title: "Precisa de agentes que trabalhem, não só que conversem?",
    text: "O Crewmark roda Claude Code e Codex como funcionários de IA que pegam a próxima issue do seu quadro a cada heartbeat.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao OpenClaw",
    items: [
      {
        q: "Qual é a melhor alternativa ao OpenClaw?",
        a: "Depende do motivo da troca: NanoClaw para isolamento em contêineres, Hermes Agent para um agente que se aprimora sozinho, ZeroClaw para um runtime pequeno em Rust, IronClaw para recursos de privacidade e uma nuvem gerenciada, e Crewmark se você quer agentes fazendo o trabalho de uma equipe em vez de um assistente pessoal.",
      },
      {
        q: "Existe alguma alternativa open source ao OpenClaw?",
        a: "Sim: Hermes Agent (MIT), NanoClaw (MIT), ZeroClaw (MIT ou Apache 2.0), IronClaw (MIT ou Apache 2.0) e NVIDIA NemoClaw (Apache 2.0) são todos open source.",
      },
      {
        q: "OpenClaw vs Hermes Agent: qual é a diferença?",
        a: "Os dois são assistentes open source para os seus apps de chat. O Hermes Agent, da Nous Research, gira em torno de um ciclo de aprendizado que aprimora as próprias skills e oferece isolamento opcional em contêiner; o OpenClaw tem a comunidade maior e mais canais. As regras para a assinatura do Claude são diferentes: o Hermes precisa do Claude Max com créditos de uso extra.",
      },
      {
        q: "O NanoClaw é mais seguro que o OpenClaw?",
        a: "O NanoClaw roda cada sessão no próprio contêiner e mantém as credenciais fora dele, por design. O OpenClaw roda as ferramentas no host na sessão principal, a menos que você configure o sandboxing dele. Os dois podem ser blindados; o NanoClaw já começa assim.",
      },
      {
        q: "O OpenClaw pode usar a minha assinatura do Claude?",
        a: "A documentação do OpenClaw descreve dois caminhos para o Claude: uma chave de API ou reaproveitar um login do Claude Code na mesma máquina. Ela também avisa que só o nome do provedor não diz se o uso é cobrado de uma API ou de uma assinatura.",
      },
      {
        q: "Existe alguma alternativa ao OpenClaw para Windows?",
        a: "O Hermes Agent tem um app de desktop para Windows, e o ZeroClaw e o IronClaw instalam de forma nativa no Windows. O próprio OpenClaw suporta Windows e WSL2; o NanoClaw precisa do WSL2.",
      },
      {
        q: "O que é o NemoClaw?",
        a: "Uma stack open source da NVIDIA, em versão alfa, que roda OpenClaw, Hermes ou LangChain Deep Agents dentro de sandboxes do NVIDIA OpenShell. É uma forma de rodar o OpenClaw com mais segurança, não um substituto dele.",
      },
    ],
  },
  cta: {
    title: "Coloque agentes de IA para trabalhar no backlog da sua equipe.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o README, o site, a documentação ou o blog de cada projeto, e com a API do GitHub, em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso da OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic ou OpenAI. Os nomes de produtos são marcas registradas dos seus donos.",
};
