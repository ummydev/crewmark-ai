import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Atualize o Claude Code e escolha o modelo desta sessão
claude update
/model                       # escolha Claude Fable 5.2

# Ou inicie uma sessão direto nele
claude --model claude-fable-5-2

# Modo rápido no Fable 5.2 (Claude Code v2.1.321 ou posterior)
/fast`;

const api = `# Claude API: troque o ID do modelo
model = "claude-fable-5-1"  # antes
model = "claude-fable-5-2"  # depois

# O pensamento adaptativo fica sempre ativo; ajuste a profundidade com effort
# low | medium | high (padrão) | xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2: benchmarks, preços e comparação com o Opus 5.5",
    description:
      "Claude Fable 5.2, lançado em 9 de novembro de 2026: o que há de novo, os benchmarks da Anthropic, preços na API ($8/$40) e modo rápido, contexto de 1M, Fable 5.2 vs Opus 5.5, vs Fable 5.1 e vs Mythos 5.2, e como usá-lo no Claude Code.",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Modelos Claude",
    title: "Claude Fable 5.2: novidades, benchmarks, preços e como se compara ao Opus 5.5",
    lead: "A Anthropic lançou o Claude Fable 5.2 em 9 de novembro de 2026, junto com o Claude Mythos 5.2, o mesmo modelo com salvaguardas diferentes. A Anthropic chama o Fable 5.2 de seu modelo de disponibilidade geral mais capaz para trabalho técnico: é mais rápido e mais barato que o Fable 5.1, pontua mais alto nos benchmarks de programação e de agentes da Anthropic e ganha um modo rápido. Este guia mostra o que mudou, os números, quanto custa, quando escolhê-lo em vez do Opus 5.5 e como usá-lo no Claude Code.",
    cta: "Começar",
    secondary: "Fable 5.2 vs Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 em resumo",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["Lançamento", "9 de novembro de 2026 (depois do Fable 5 em junho e do Fable 5.1 em setembro)"],
        ["ID do modelo na API", "`claude-fable-5-2`"],
        ["Preço", "$8 por milhão de tokens de entrada, $40 por milhão de saída (Fable 5.1: $10 e $50)"],
        ["Modo rápido", "Saída até 2.5x mais rápida, a $16 de entrada e $80 de saída por milhão de tokens"],
        ["Janela de contexto", "1M de tokens, com saída máxima de 128K"],
        ["Pensamento", "Pensamento adaptativo, sempre ativo; effort `low`, `medium`, `high` (padrão), `xhigh`, `max`"],
        ["Data de corte do conhecimento", "Junho de 2026"],
        ["Velocidade", "Saída até 30% mais rápida que o Fable 5.1, segundo a Anthropic"],
        ["Quem pode usar", "Claude Pro, Max, Ultra, Team e Enterprise; todos os clientes da Claude API; Amazon Bedrock, Google Cloud e Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "O que há de novo no Fable 5.2",
      points: [
        "Melhor em trabalho técnico longo e difícil: a Anthropic diz que ele consegue tocar tarefas de engenharia ambíguas por dias e coordenar centenas, até mais de mil, subagentes.",
        "Mais barato: entrada e saída custam 20% menos que no Fable 5.1, e o processamento em lote sai pela metade do preço ($4 e $20).",
        "Mais rápido: saída até 30% mais rápida que o Fable 5.1, e um modo rápido que é até 2.5x mais rápido ainda, pelo dobro do preço.",
        "Robótica: a Anthropic relata controle muito melhor de robôs físicos, inclusive em tarefas para as quais ele não foi treinado.",
        "Salvaguardas: há salvaguardas de cibersegurança e biologia integradas. Consultas de cibersegurança sinalizadas são encaminhadas ao Claude Opus 4.8, e as de biologia, ao Claude Opus 5.",
        "Retenção de dados: os modelos Fable exigem, por padrão, retenção de 30 dias para monitoramento de segurança; retenção zero de dados precisa de autorização da Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks do Claude Fable 5.2",
      text: [
        "Da página do Fable na Anthropic, com as salvaguardas ativas salvo indicação. São números da própria Anthropic, não testes independentes.",
      ],
      headers: ["Benchmark", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0 (programação agêntica)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2 (programação agêntica)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1 (uso do computador)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench (fluxos de negócio)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam (com ferramentas)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim (robótica, executado pela Anthropic)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços do Claude Fable 5.2",
      text: [
        "Preços da API por milhão de tokens, da documentação da Anthropic em 10 de novembro de 2026. Nos planos do Claude, o Fable 5.2 entra no uso da sua assinatura: nos planos Pro e nos assentos Team padrão, ele pode usar até 50% dos seus limites semanais. O modo rápido no Claude Code é cobrado dos créditos de uso.",
      ],
      headers: ["Modelo", "Entrada", "Saída", "Leituras de cache", "Lote (entrada / saída)"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2, modo rápido", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 vs Opus 5.5: qual usar?",
      text: [
        "A recomendação da própria Anthropic é começar com o Opus 5.5 na maior parte do trabalho e passar para o Fable 5.2 quando o Opus 5.5 com effort mais alto ainda não der conta.",
      ],
      points: [
        "Preço: o Fable 5.2 custa o dobro por token ($8 e $40 contra $4 e $20), e o effort padrão dele é `high`, enquanto o do Opus 5.5 é `medium`, então ele também tende a pensar mais por requisição.",
        "Capacidade: nas tabelas da Anthropic, o Fable 5.2 supera o Opus 5.5 em programação agêntica (69.9% vs 62.3% no FrontierSWE v2), ciência e trabalho de longo horizonte; a diferença é menor em uso do computador (89.3% vs 87.2% no OSWorld 2.1).",
        "Custo por tarefa: a Anthropic diz que o Fable 5.2 com effort `high` empatou praticamente com o Opus 5.5 em `max` no FrontierCode 2.0 (45.3% vs 45.5%) por cerca de metade do custo por tarefa, então, em tarefas difíceis, ele não é necessariamente a opção mais cara.",
        "Trocar no meio da conversa: só o Fable 5.2 e o Mythos 5.2 conseguem ler o pensamento do Fable 5.2, então passar uma conversa do Fable 5.2 para o Opus 5.5 perde o raciocínio nos turnos que rodarem lá.",
        "Regra prática: Opus 5.5 no dia a dia; Fable 5.2 para jobs longos de agentes, bugs difíceis e trabalho que falha no Opus.",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 vs Mythos 5.2, e vs Fable 5.1",
      points: [
        "O Mythos 5.2 é o mesmo modelo com menos restrições em trabalho de cibersegurança e biologia. Ele é só para organizações verificadas pelos programas da Anthropic, como o Cyber Verification Program, e custa o mesmo.",
        "Nas tabelas de cibersegurança e biologia da Anthropic, o Mythos 5.2 pontua mais alto que o Fable 5.2 com as salvaguardas ativas; em todo o resto, são o mesmo modelo.",
        "Comparado ao Fable 5.1, o Fable 5.2 é mais barato, até 30% mais rápido e pontua mais alto em todas as tabelas da Anthropic, por exemplo 49.1% vs 32.4% no FrontierCode 2.0 e 41.3% vs 17.9% no Remote Labor Index.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar o Claude Fable 5.2 no Claude Code",
      steps: [
        {
          title: "Atualize e escolha o modelo",
          text: "Atualize o Claude Code, rode `/model` e escolha Claude Fable 5.2, ou inicie uma sessão com `--model claude-fable-5-2`. Em um plano do Claude, é preciso ter Pro, Max, Ultra, Team ou Enterprise.",
          code: claudeCode,
        },
        {
          title: "Comece com effort em high",
          text: "A Anthropic diz que a maior parte do ganho já aparece em `high`. Suba para `xhigh` no seu trabalho de programação longo mais difícil depois de ver que ajuda; deixe `max` para casos raros em que tempo e tokens não importam.",
        },
        {
          title: "Ative o modo rápido quando a velocidade importar",
          text: "Rode `/fast` com o Fable 5.2 selecionado (Claude Code v2.1.321 ou posterior). Ele é até 2.5x mais rápido pelo dobro do preço; nos planos de assinatura, é pago com créditos de uso, não com os limites do plano, e não está disponível no Bedrock, no Vertex nem no Foundry.",
        },
        {
          title: "Usa a API? Confira as mudanças incompatíveis",
          text: "O pensamento adaptativo fica sempre ativo (`budget_tokens` e `disabled` retornam 400), o uso forçado de ferramentas não é suportado, editar turnos anteriores invalida os blocos de pensamento, e a antiga ferramenta `computer_20251124` foi substituída pelo conjunto de ferramentas de uso do computador. O Claude Code e o Agent SDK cuidam disso para você.",
          code: api,
        },
      ],
      source: { label: "Fonte: documentação da Anthropic, What's new in Claude Fable 5.2", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Fable 5.2 um trabalho de longa duração",
      text: [
        "O Fable 5.2 foi feito para trabalho que dura horas. O Crewmark transforma uma sessão do Claude Code em um funcionário de IA com papel, meta, horário de trabalho e um heartbeat; o funcionário usa o modelo em que a sessão dele roda, então você pode colocar o Fable 5.2 nos trabalhos mais difíceis e deixar o Opus 5.5 para o resto.",
      ],
      steps: [
        {
          title: "Escolha um papel",
          text: "Como o [engenheiro de software de IA](/ai-employees/software-engineer) para um backlog de issues difíceis.",
        },
        {
          title: "Defina o modelo na sessão dele",
          text: "Rode `/model` na conversa do Claude Code do funcionário e escolha o Fable 5.2.",
        },
        {
          title: "Deixe rodar",
          text: "Ele acorda com o heartbeat e vai avançando pelo quadro; veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar o Claude Fable 5.2 no Claude Code" },
  mid: {
    title: "Quer o Fable 5.2 resolvendo suas issues mais difíceis em uma agenda?",
    text: "Os funcionários do Crewmark rodam no seu próprio Claude Code, acordam com um heartbeat e pegam a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Claude Fable 5.2",
    items: [
      {
        q: "Quando o Claude Fable 5.2 foi lançado?",
        a: "Em 9 de novembro de 2026, junto com o Claude Mythos 5.2. Ele vem depois do Fable 5 (9 de junho de 2026) e do Fable 5.1 (1º de setembro de 2026).",
      },
      {
        q: "Quanto custa o Claude Fable 5.2?",
        a: "Na API, $8 por milhão de tokens de entrada e $40 por milhão de tokens de saída, abaixo dos $10 e $50 do Fable 5.1. O modo rápido custa $16 e $80; o lote, $4 e $20. Nos planos do Claude, está incluído a partir do Pro; nos planos Pro e nos assentos Team padrão, pode usar até 50% dos limites de uso semanais.",
      },
      {
        q: "O Fable 5.2 é melhor que o Opus 5.5?",
        a: "Nos benchmarks da Anthropic, sim, em programação agêntica, ciência e trabalho de longo horizonte. Ele também custa o dobro por token, e a Anthropic ainda recomenda o Opus 5.5 como ponto de partida para a maior parte do trabalho.",
      },
      {
        q: "Qual é a janela de contexto do Claude Fable 5.2?",
        a: "1M de tokens, com até 128K tokens de saída.",
      },
      {
        q: "Qual é a diferença entre o Fable 5.2 e o Mythos 5.2?",
        a: "São o mesmo modelo. O Fable 5.2 tem salvaguardas de cibersegurança e biologia e está aberto a todos; o Mythos 5.2 é para organizações verificadas pelos programas da Anthropic.",
      },
      {
        q: "O Claude Fable 5.2 é gratuito?",
        a: "Não. A Anthropic o lista nos planos Pro, Max, Ultra, Team e Enterprise e na API; o plano Free não aparece na lista.",
      },
      {
        q: "Existe um system card do Claude Fable 5.2?",
        a: "Sim, a Anthropic publicou o “Claude Fable 5.2 and Claude Mythos 5.2 System Card”, com link na página do Fable.",
      },
    ],
  },
  cta: {
    title: "Coloque o modelo mais novo em um trabalho fixo.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a página do Fable da Anthropic, o post de lançamento, a documentação da Claude Platform e a documentação do Claude Code em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic. Claude, Claude Fable, Claude Mythos, Claude Opus e Claude Code são marcas registradas da Anthropic.",
};
