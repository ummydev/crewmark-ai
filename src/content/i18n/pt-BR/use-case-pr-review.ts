import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /use-cases/pr-review; the English master is
// src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code: revise um pull request e publique comentários inline
/code-review 142 --comment

# Codex: peça uma revisão em um comentário do PR no GitHub
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- Aponte testes faltando para branches novos em billing/ e auth/.
- Toda migração SQL precisa de rollback; diga se não tiver.
- Não comente sobre formatação; o linter cuida disso.
- Não aprove nada nem peça mudanças em nada: só comente.`;

export const copy: GuideCopy = {
  meta: {
    title: "Revisão de código com IA usando o Claude Code e o Codex em todo PR",
    description:
      "Três formas de ter revisão de código com IA em pull requests com o Claude Code e o Codex: /code-review com comentários inline, @codex review e revisões automáticas, e um funcionário de IA que revisa todo PR do quadro. Comandos, regras de revisão para copiar e limites.",
  },
  breadcrumb: "Revisão de código com IA em todo PR",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Engenharia",
    title: "Revisão de código com IA em todo pull request com o Claude Code e o Codex",
    lead: "Tanto o Claude Code quanto o Codex conseguem revisar um pull request e deixar comentários inline no GitHub. Você pode rodar uma revisão por conta própria, fazer com que ela comece automaticamente ou dar a um funcionário de IA o trabalho de revisar tudo o que chegar ao quadro. Esta página mostra os comandos de cada opção, as regras de revisão que vale a pena escrever, o que os revisores não fazem e como tornar a revisão um trabalho fixo, em vez de algo que você precisa lembrar de pedir.",
    cta: "Começar",
    secondary: "Os comandos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "Três formas de ter revisão com IA em um pull request",
      headers: ["Opção", "Como começa", "Onde roda", "Bom para"],
      rows: [
        ["Claude Code `/code-review`", "Você roda, com o número de um PR; `--comment` publica comentários inline", "A sua própria sessão do Claude Code, em qualquer plano", "Revisar o seu branch ou um PR antes do merge"],
        ["Claude Code Review (gerenciado)", "Um Owner da organização ativa para os repositórios; qualquer pessoa pode comentar `@claude review`", "O serviço da Anthropic", "Equipes em planos do Claude que querem revisões sob demanda"],
        ["Revisão de código do Codex", "`@codex review` em um comentário do PR, ou Automatic review nas configurações do Codex", "A nuvem da OpenAI", "Equipes em planos do ChatGPT; aponta problemas P0 e P1 no GitHub"],
        ["Um funcionário de IA", "Uma issue de revisão no quadro, ou todo PR atribuído a ele", "O seu próprio Claude Code ou Codex, com um heartbeat", "Um trabalho fixo: todo PR revisado, pendências acompanhadas"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como revisar um pull request com o Claude Code ou o Codex",
      steps: [
        {
          title: "Claude Code: rode /code-review",
          text: "Em uma sessão do Claude Code, `/code-review` encontra bugs nas mudanças do seu branch; passe o número de um PR para revisar esse pull request e `--comment` para publicar os achados no GitHub como comentários inline. `--fix` aplica as correções na sua working tree em vez disso. `/review` é um alias.",
          code: commands,
        },
        {
          title: "Codex: mencione @codex review",
          text: "Em um comentário do pull request, escreva `@codex review`; o Codex reage com 👀 e publica uma revisão. Acrescente um foco depois, se quiser. Para revisar sem precisar pedir, ative Automatic review nas configurações do Codex e escolha o gatilho.",
        },
        {
          title: "Escreva as suas regras de revisão",
          text: "O Codex lê uma seção `## Code Review Rules` do AGENTS.md mais próximo do código. Para o Claude Code, coloque as mesmas regras no CLAUDE.md. Regras deixam as revisões consistentes e as mantêm longe de assuntos que o seu linter já cobre.",
          code: rules,
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, revisão local com /code-review", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "O que a revisão com IA não faz",
      points: [
        "Aprovar ou bloquear: o Code Review gerenciado do Claude nunca aprova nem bloqueia um pull request, e um bom brief de revisão diz ao funcionário para só comentar.",
        "Substituir a pessoa dona da mudança: ela pega bugs e testes faltando; decisões de produto e de design ficam com as pessoas.",
        "Ver tudo: o Codex no GitHub aponta só problemas P0 e P1, para manter os comentários focados. Peça um foco específico quando precisar.",
        "Sair de graça: as revisões consomem o uso do seu plano. Revise sob demanda, ou quando o PR estiver pronto para revisão, e não a cada push.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Faça da revisão o trabalho de alguém",
      text: [
        "Comandos revisam quando alguém lembra de rodá-los. Um funcionário de IA revisa porque esse é o trabalho dele: o Crewmark transforma o seu Claude Code ou Codex em um engenheiro que acorda com um heartbeat, pega os pull requests esperando revisão e comenta neles.",
      ],
      steps: [
        {
          title: "Comece pelo cargo",
          text: "O [engenheiro de software com IA](/ai-employees/software-engineer), com as suas regras de revisão no brief.",
        },
        {
          title: "Leve as revisões para o quadro",
          text: "Atribua issues de revisão a ele, ou adicione uma issue recorrente para revisar todo pull request aberto marcado como pronto.",
        },
        {
          title: "Mais trabalhos de engenharia",
          text: "Veja [Claude Code para engenharia](/for/engineering) e [triagem de erros do Sentry](/use-cases/sentry-error-triage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Revisar um pull request com o Claude Code ou o Codex" },
  mid: {
    title: "Quer todo pull request revisado sem precisar pedir?",
    text: "Um engenheiro do Crewmark no seu Claude Code ou Codex revisa o que estiver esperando, com um heartbeat.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como reviso um pull request com o Claude Code?",
        a: "Rode `/code-review <PR number> --comment` em uma sessão do Claude Code para publicar os achados como comentários inline no GitHub. Sem `--comment`, ele relata na própria sessão; `--fix` aplica as correções localmente.",
      },
      {
        q: "/review é a mesma coisa que /code-review no Claude Code?",
        a: "A documentação do Claude Code lista `/review` como alias de `/code-review`.",
      },
      {
        q: "Como faço o Codex revisar um pull request?",
        a: "Comente `@codex review` no pull request, ou ative Automatic review nas configurações do Codex para que as revisões comecem no gatilho que você escolher. A revisão de código precisa estar ativada para o repositório.",
      },
      {
        q: "Posso passar as regras da nossa equipe para o revisor de IA?",
        a: "Sim. O Codex lê uma seção `## Code Review Rules` no AGENTS.md; para o Claude Code, coloque as mesmas regras no CLAUDE.md.",
      },
      {
        q: "A IA vai aprovar ou fazer merge de pull requests?",
        a: "O Code Review gerenciado do Claude nunca aprova nem bloqueia, e você deve manter o merge com as pessoas. O brief de um funcionário de IA deve dizer para só comentar.",
      },
    ],
  },
  cta: {
    title: "Todo pull request revisado, sem ninguém precisar lembrar de pedir.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação de revisão de código do Claude Code e na documentação de revisão de código do Codex da OpenAI em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a OpenAI ou o GitHub e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
