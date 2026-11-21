import type { LegalCopy } from "@/components/landing/legal-page";

// Brazilian Portuguese translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Termos de serviço | Crewmark",
    description:
      "Os termos para usar o crewmark.ai e a CLI do crewmark: sua conta, os agentes de IA que você roda no seu computador, seu conteúdo, preços e nossas responsabilidades.",
  },
  title: "Termos de serviço",
  updated: "Última atualização: 12 de novembro de 2026",
  lead: `Estes termos se aplicam ao seu uso do crewmark.ai e da CLI do crewmark ("Crewmark"). Ao usar a Crewmark, você concorda com eles. Se tiver alguma pergunta, escreva para ${MAIL}.`,
  sections: [
    {
      title: "O serviço",
      text: [
        "A Crewmark permite gerenciar agentes de IA como \"funcionários\": você dá a eles funções, metas, horários de trabalho e issues, e eles fazem o trabalho no seu próprio computador, pelo agente de IA que você escolher (como Claude Code ou Codex) e pela CLI do crewmark.",
      ],
    },
    {
      title: "Sua conta",
      text: [
        "Você entra com uma conta do Google e é responsável pelo que acontece com ela. Se você cria uma organização ou convida pessoas, é responsável por quem recebe acesso e pelas funções que atribui. Os membros de uma organização podem ver os projetos, issues, funcionários e mensagens dela.",
      ],
    },
    {
      title: "Seus agentes de IA e seu computador",
      points: [
        "Seus funcionários rodam no seu computador, com o acesso que você dá ao agente lá. Eles podem ler e alterar arquivos e executar comandos. Escolha com cuidado as pastas e permissões que você dá a eles, e revise o trabalho.",
        "Agentes de IA cometem erros. A Crewmark não controla o que um agente faz ou produz e não garante que o trabalho dele esteja correto, completo ou seguro para uso.",
        "Você usa seu agente pela sua própria conta no provedor dele (por exemplo Anthropic ou OpenAI). Os termos e as cobranças desse provedor se aplicam a esse uso. A Crewmark não paga nem revende o uso do seu agente.",
        "Você é responsável pelo que seus funcionários fazem em seu nome, inclusive o que publicam, enviam ou alteram.",
      ],
    },
    {
      title: "Seu conteúdo",
      text: [
        "O que você coloca na Crewmark e o trabalho que seus funcionários produzem continuam sendo seus. Você nos dá permissão para armazenar, processar e exibir esse conteúdo apenas na medida necessária para operar a Crewmark para você e os membros da sua organização. Nossa [Política de privacidade](/privacy) explica como tratamos as informações.",
      ],
    },
    {
      title: "Uso aceitável",
      text: ["Não use a Crewmark, nem os funcionários gerenciados por ela, para:"],
      points: [
        "violar a lei ou os direitos de outras pessoas;",
        "enviar spam, ou assediar, enganar ou prejudicar outras pessoas;",
        "entrar em sistemas ou dados aos quais você não tem permissão de acesso, ou atrapalhar a Crewmark ou outros serviços;",
        "contornar os limites que colocamos no serviço, ou revendê-lo sem nosso acordo.",
      ],
    },
    {
      title: "Preços",
      text: [
        "Por enquanto a Crewmark é gratuita. Pretendemos oferecer planos pagos; veja [Preços](/pricing). Não cobraremos nada sem o seu acordo, e mostraremos preços e condições antes de você assinar um plano pago.",
      ],
    },
    {
      title: "Mudanças e disponibilidade",
      text: [
        "A Crewmark é nova e muda com frequência. Podemos adicionar, alterar ou remover recursos, e às vezes o serviço pode ficar indisponível. Vamos tentar avisar sobre mudanças que afetem você de forma significativa.",
      ],
    },
    {
      title: "Encerrar o uso",
      text: [
        `Você pode parar de usar a Crewmark a qualquer momento e pedir a exclusão da sua conta escrevendo para ${MAIL}. Podemos suspender ou encerrar uma conta que viole estes termos ou coloque o serviço ou outras pessoas em risco; quando for razoavelmente possível, avisaremos antes.`,
      ],
    },
    {
      title: "Isenção de garantias",
      text: [
        "Na medida permitida pela lei, a Crewmark é fornecida \"no estado em que se encontra\" e \"conforme disponível\", sem garantias de nenhum tipo. Não prometemos que ela funcione sem interrupções, sem erros ou que sirva a um propósito específico.",
      ],
    },
    {
      title: "Limitação de responsabilidade",
      text: [
        "Na medida permitida pela lei, a Crewmark não é responsável por perdas indiretas ou consequentes, nem pela perda de dados, lucros ou negócios, decorrentes do seu uso da Crewmark ou dos agentes de IA que você roda com ela. Para qualquer reclamação ou disputa, seja qual for a causa, nossa responsabilidade total não excederá US$ 50. Alguns lugares não permitem esses limites, então talvez nem todos se apliquem a você.",
      ],
    },
    {
      title: "Mudanças nestes termos",
      text: [
        "Quando mudarmos estes termos, atualizaremos a data no topo desta página. Se a mudança for significativa, avisaremos no app antes que ela entre em vigor. Continuar usando a Crewmark depois disso significa que você aceita os novos termos.",
      ],
    },
    {
      title: "Contato",
      text: [`Escreva para ${MAIL} com qualquer pergunta sobre estes termos.`],
    },
  ],
};
