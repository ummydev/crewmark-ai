import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code: adicione o servidor MCP hospedado do Sentry e depois entre com OAuth
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex: pela ponte mcp-remote
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# Cargo: triagem de erros
Roda a partir da issue recorrente "Sentry triage", nos dias úteis às 9:00 e às 14:00.

1. No Sentry, liste as issues não resolvidas vistas pela primeira vez ou que voltaram
   desde a última execução, no ambiente de produção.
2. Para cada uma: procure no quadro uma issue existente (busque o ID da issue
   no Sentry). Se houver, adicione a nova contagem como comentário.
3. Senão, abra uma issue: título a partir do erro, usuários e eventos
   afetados, primeira e última ocorrência, os frames do topo da stack, a versão
   em que começou e o seu melhor palpite sobre a causa, marcado como palpite.
4. Prioridade: Urgent se bloqueia cadastro, pagamento ou dados; High se
   afeta mais de 1% das sessões; senão Medium.
5. Se a correção for pequena e óbvia, pegue-a como a sua próxima issue e
   abra um pull request com um teste. Não faça merge.
6. Nunca resolva, ignore ou exclua nada no Sentry por conta própria.`;

export const copy: GuideCopy = {
  meta: {
    title: "Faça a triagem de erros do Sentry com o Claude Code ou o Codex todo dia",
    description:
      "Tenha um funcionário de IA no Claude Code ou no Codex que lê os erros novos do Sentry duas vezes por dia, registra-os no seu quadro com a stack, o impacto e uma causa provável e abre pull requests de correção para os pequenos. A configuração do MCP do Sentry e o brief do cargo para copiar.",
  },
  breadcrumb: "Triagem de erros do Sentry",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Engenharia",
    title: "Triagem de erros do Sentry por um funcionário de IA no Claude Code ou no Codex",
    lead: "Erros novos se acumulam no Sentry mais rápido do que alguém consegue ler. Um funcionário de IA no seu próprio Claude Code ou Codex pode conferir o Sentry com agendamento, pular o que já está no quadro, registrar cada erro novo como issue com a stack trace, os usuários afetados e uma causa provável, e pegar as correções pequenas ele mesmo, abrindo um pull request para revisão. Veja como conectar o servidor MCP do Sentry, o brief para copiar e as regras que mantêm tudo seguro.",
    cta: "Começar",
    secondary: "Conectar o Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que o funcionário faz",
      points: [
        "Lê as issues não resolvidas do Sentry que são novas ou voltaram desde a última execução.",
        "Elimina duplicatas com base no seu quadro, então um erro barulhento ganha um comentário, não dez issues novas.",
        "Registra uma issue útil: impacto, primeira e última ocorrência, a versão em que começou, os frames do topo da stack e uma causa provável, claramente marcada como palpite.",
        "Define a prioridade a partir de regras que você escreve, como: tudo o que bloqueia cadastro ou pagamento é urgente.",
        "Corrige os óbvios: uma checagem de null, uma chave de tradução faltando, um redirecionamento errado. Ele abre um pull request com um teste e espera a revisão.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar a triagem do Sentry no Claude Code ou no Codex",
      steps: [
        {
          title: "Conecte o servidor MCP do Sentry",
          text: "O Sentry hospeda um servidor MCP em mcp.sentry.dev com OAuth, então não há nada para instalar nem token para colar. Adicione-o, inicie o agente e entre no Sentry quando ele pedir. Isso dá ao agente as issues, erros, projetos e a análise do Seer do Sentry.",
          code: connect,
        },
        {
          title: "Copie o brief do cargo",
          text: "No CLAUDE.md para o Claude Code ou no AGENTS.md para o Codex, no repositório de onde vêm os erros, para que ele possa ler o código por trás de cada frame da stack.",
          code: brief,
        },
        {
          title: "Coloque em um agendamento",
          text: "Transforme a triagem em uma issue recorrente, por exemplo `--repeat \"weekdays at 9:00\"`, e uma segunda à tarde se o seu volume de erros pedir.",
        },
        {
          title: "Revise as correções",
          text: "Os pull requests de correção passam pela sua revisão normal. Quando o funcionário não tem certeza sobre o impacto ou o responsável, ele marca a issue como Needs action e pergunta.",
        },
      ],
      source: { label: "Fonte: documentação do servidor MCP do Sentry", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "Regras que mantêm tudo seguro",
      points: [
        "Ler o Sentry, escrever no quadro. Resolver, ignorar ou excluir no Sentry fica com as pessoas.",
        "Só produção: aponte-o para o ambiente de produção, para ele não registrar o barulho do staging.",
        "Palpite é palpite: a causa em cada issue fica marcada como hipótese até alguém confirmar.",
        "Sem merges: correções são pull requests com teste, nunca pushes diretos.",
        "Dados pessoais: eventos do Sentry podem incluir dados de usuários; mantenha a issue em contagens e IDs, não em e-mails ou IPs.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um engenheiro que começa o dia pelos seus erros",
      text: [
        "A triagem é uma issue recorrente natural para um engenheiro de software com IA. O Crewmark transforma o seu Claude Code ou Codex nesse funcionário, com horário de trabalho e um heartbeat.",
      ],
      steps: [
        {
          title: "Comece pelo cargo",
          text: "O [engenheiro de software com IA](/ai-employees/software-engineer) pega issues de um quadro e abre pull requests.",
        },
        {
          title: "Adicione a triagem como issue recorrente",
          text: "Ele faz a triagem quando chega a hora e depois trabalha nas issues que registrou.",
        },
        {
          title: "Mais trabalhos de engenharia",
          text: "Veja [Claude Code para engenharia](/for/engineering) e [revisão de código com IA em todo pull request](/use-cases/pr-review).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar a triagem de erros do Sentry no Claude Code ou no Codex" },
  mid: {
    title: "Quer os erros novos registrados e os pequenos corrigidos antes da daily?",
    text: "Um engenheiro do Crewmark no seu Claude Code ou Codex faz a triagem do Sentry com agendamento e abre pull requests de correção.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como conecto o Sentry ao Claude Code?",
        a: "Rode `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, inicie o Claude Code e entre no Sentry com OAuth quando ele pedir. O Sentry hospeda o servidor, então não há nada para instalar.",
      },
      {
        q: "O servidor MCP do Sentry funciona com o Codex?",
        a: "Sim, pela ponte mcp-remote: `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "O agente pode resolver issues no Sentry?",
        a: "Dá para permitir, mas recomendamos que não: deixe-o registrar e corrigir, e mantenha resolver e ignorar com as pessoas, para nada ser escondido por engano.",
      },
      {
        q: "Com que frequência a triagem deve rodar?",
        a: "Duas vezes nos dias úteis bastam para a maioria das equipes; acrescente uma execução por hora durante um lançamento. Cada execução consome o uso do plano do seu agente, então não rode a cada poucos minutos.",
      },
      {
        q: "Para onde vão as issues?",
        a: "Para onde a sua equipe acompanha o trabalho. Com o Crewmark, elas vão para o mesmo quadro de onde o funcionário trabalha; caso contrário, use o servidor MCP ou a CLI do seu gerenciador, como os do Linear ou do GitHub.",
      },
    ],
  },
  cta: {
    title: "Erros registrados e os pequenos corrigidos antes do seu café.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação do servidor MCP do Sentry em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Sentry, a Anthropic ou a OpenAI e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
