import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# Inicie uma sessão no plan mode
claude --permission-mode plan

# Ou, dentro de uma sessão, planeje só este prompt
/plan adicione rate limiting à API pública`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Plan mode do Claude Code: atalho, como funciona e auto mode",
    description:
      "Como funciona o plan mode (modo plano) do Claude Code: o atalho Shift+Tab e o /plan, o que o Claude pode fazer enquanto planeja, aprovar um plano, deixá-lo como padrão e a comparação com auto, accept edits e manual.",
  },
  breadcrumb: "Plan mode do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Plan mode do Claude Code: como funciona e quando usar",
    lead: "O plan mode (modo plano) é o modo de permissão do Claude Code em que o Claude pesquisa e propõe mudanças sem fazê-las: ele lê arquivos, roda comandos para explorar e escreve um plano, mas não edita o seu código até você aprovar. Aperte `Shift+Tab` para chegar até ele ou comece um prompt com `/plan`. Este guia mostra todas as formas de entrar e sair, o que é permitido durante o planejamento, as opções de aprovação, como deixá-lo como padrão e como ele se compara aos modos auto, accept edits e manual.",
    cta: "Começar",
    secondary: "Ir para os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "Plan mode vs. auto mode vs. accept edits vs. manual",
      text: [
        "O modo plano é um dos modos de permissão do Claude Code. Cada um troca comodidade por supervisão; a tabela mostra o que o Claude pode fazer sem perguntar em cada um.",
      ],
      headers: ["Modo", "Roda sem perguntar", "Melhor para"],
      rows: [
        ["Manual (`default`)", "Só leituras", "Revisar cada ação, trabalho sensível"],
        ["Accept edits (`acceptEdits`)", "Leituras, edições de arquivos e comandos de arquivo comuns como `mkdir` e `mv`", "Iterar em código que você revisa depois com `git diff`"],
        ["Plan (`plan`)", "Leituras, mais os comandos de exploração que o classificador do auto mode aprova, quando ele está disponível. Nenhuma edição até você aprovar", "Explorar uma base de código e combinar uma abordagem antes de mudá-la"],
        ["Auto (`auto`)", "Tudo, com verificações de segurança em segundo plano", "Tarefas longas, menos confirmações"],
        ["Don't ask (`dontAsk`)", "Só ferramentas pré-aprovadas; todo o resto é negado", "CI e scripts restritos"],
        ["Bypass (`bypassPermissions`)", "Tudo", "Só contêineres e VMs isolados"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar o plan mode no Claude Code",
      steps: [
        {
          title: "Entre no modo plano",
          text: "No terminal, aperte `Shift+Tab` para alternar entre os modos até a barra de status mostrar `⏸ plan mode on`; a partir do Manual, o ciclo passa por accept edits e depois por plan. Ou comece um único prompt com `/plan`. No VS Code, clique no indicador de modo abaixo da caixa do prompt e escolha Plan; no app desktop, use o seletor de modo.",
          code: enter,
        },
        {
          title: "Descreva a mudança e deixe o Claude explorar",
          text: "Peça o que você quer construir ou corrigir. O Claude lê o código e roda comandos para investigar, depois escreve um plano. Quando o auto mode (modo automático) está disponível, um classificador revisa esses comandos em vez de perguntar a você; caso contrário, tudo o que vai além dos comandos somente leitura nativos pede confirmação antes.",
        },
        {
          title: "Revise e edite o plano",
          text: "Responda às perguntas do Claude, conteste ou aperte `Ctrl+G` para abrir o plano no seu editor de texto e mudá-lo você mesmo. Os planos são salvos como arquivos em `~/.claude/plans/`, ou na pasta definida pela configuração `plansDirectory`.",
        },
        {
          title: "Aprove ou continue planejando",
          text: "Escolha Yes, and use auto mode (sim, e usar o modo automático), ou Yes, auto-accept edits quando o auto mode não estiver disponível, para o Claude implementar; Yes, manually approve edits para revisar cada edição; ou No, keep planning para continuar planejando. Aprovar sai do modo plano e dá à sessão o nome do plano.",
        },
        {
          title: "Saia sem aprovar",
          text: "Aperte `Shift+Tab` de novo para sair do modo plano sem um plano. Para planejar a próxima mudança, volte ao modo no ciclo ou comece o prompt com `/plan`.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "Deixe o plan mode como padrão",
      text: [
        "Para uma sessão, inicie com `claude --permission-mode plan`. Para todas as sessões de terminal de um projeto, defina `defaultMode` como `plan` em `.claude/settings.json`; para todos os projetos da sua máquina, coloque em `~/.claude/settings.json`.",
      ],
      steps: [
        {
          title: "Adicione às configurações",
          text: "As conversas do VS Code não leem as configurações do projeto para o modo inicial: em vez disso, defina `claudeCode.initialPermissionMode` como `plan` nas configurações de usuário do VS Code.",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "Quando o plan mode vale a pena",
      points: [
        "Mudanças que mexem em muitos arquivos, ou em que a primeira ideia costuma estar errada: uma migração, um refactor, uma funcionalidade nova entre front-end e back-end.",
        "Código que você ainda não conhece: deixe o Claude mapeá-lo e explicar a abordagem antes de qualquer mudança.",
        "Erros caros: schemas de banco de dados, autenticação, pagamentos, APIs públicas.",
        "Pule para correções de uma linha e tarefas que você descreveria do mesmo jeito que o plano; ali os modos manual ou accept edits são mais rápidos.",
        "Combine com um contexto limpo: com `showClearContextOnPlanAccept` ativado, aprovar também pode limpar a conversa de planejamento para que a implementação comece só a partir do plano.",
      ],
    },
    {
      kind: "text",
      title: "Pegadinhas",
      points: [
        "O modo plano bloqueia edições, não tudo: com o auto mode disponível, comandos de shell aprovados rodam durante o planejamento, então um comando com efeitos colaterais ainda pode ser executado.",
        "Numa sessão interativa de terminal iniciada com bypass permissions disponível, os bloqueios do modo plano não são aplicados; o Claude só recebe a instrução de não editar.",
        "Execuções headless (`claude -p`), sessões do Agent SDK e o painel de chat do VS Code mantêm os bloqueios do modo plano.",
        "Escolher Plan no VS Code vale só para aquela conversa; as novas voltam ao seu modo inicial de sempre.",
        "As regras de negação continuam valendo em todos os modos, inclusive no plano. Veja [comandos de barra do Claude Code](/blog/claude-code-slash-commands) para `/plan`, `/permissions` e outros comandos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O plan mode deixa o Claude cuidadoso. O Crewmark o mantém trabalhando.",
      text: [
        "O modo plano é como você continua no comando de uma mudança grande; ainda assim, a sessão espera você começar a próxima. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Planos como comentários na issue",
          text: "Um funcionário pode publicar o plano na issue e esperar o seu sinal verde antes de uma mudança arriscada, então você aprova pelo quadro em vez do terminal.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa e pega a próxima issue; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Vários funcionários, um repositório",
          text: "Dê a cada um a própria [worktree](/blog/claude-code-worktree) e um papel. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar o plan mode no Claude Code" },
  mid: {
    title: "Você aprovou o plano. Quem pega a próxima tarefa?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o plan mode do Claude Code",
    items: [
      {
        q: "O que é o plan mode no Claude Code?",
        a: "Um modo de permissão em que o Claude pesquisa e escreve um plano sem editar o seu código. As edições ficam bloqueadas até você aprovar o plano.",
      },
      {
        q: "Qual é o atalho do plan mode?",
        a: "`Shift+Tab` alterna os modos de permissão no terminal; pare quando a barra de status mostrar `⏸ plan mode on`. Você também pode começar um prompt com `/plan` ou iniciar com `claude --permission-mode plan`.",
      },
      {
        q: "Plan mode vs. auto mode: qual é a diferença?",
        a: "O modo plano explora e propõe sem editar. O auto mode faz o trabalho, editando e rodando comandos com verificações de segurança em segundo plano. Um fluxo comum é planejar primeiro e depois aprovar com Yes, and use auto mode.",
      },
      {
        q: "Plan mode vs. accept edits?",
        a: "Accept edits deixa o Claude mudar arquivos sem perguntar, e você revisa depois. O modo plano não muda nada até você aprovar um plano; depois da aprovação, você pode escolher aceitar as edições automaticamente.",
      },
      {
        q: "Como usar o plan mode no VS Code ou no app desktop?",
        a: "No VS Code, clique no indicador de modo abaixo da caixa do prompt e escolha Plan, ou defina `claudeCode.initialPermissionMode` como `plan`. No app desktop, escolha no seletor de modo.",
      },
      {
        q: "Onde os planos do Claude Code são salvos?",
        a: "Como arquivos em `~/.claude/plans/`, a menos que você defina outra pasta com a configuração `plansDirectory`. Aperte `Ctrl+G` para editar o plano atual no seu editor.",
      },
      {
        q: "Como sair do plan mode?",
        a: "Aprove o plano, o que muda para o modo que você escolher, ou aperte `Shift+Tab` para sair sem aprovar.",
      },
    ],
  },
  cta: {
    title: "Deixe o Claude Code planejar, construir e pegar a próxima issue.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code (modos de permissão e configurações) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
