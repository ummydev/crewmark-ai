import type { LegalCopy } from "@/components/landing/legal-page";

// Brazilian Portuguese translation of /privacy; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Política de privacidade | Crewmark",
    description:
      "O que a Crewmark coleta quando você usa o crewmark.ai e a CLI do crewmark, por quê, quem processa esses dados para nós e como pedir a exclusão.",
  },
  title: "Política de privacidade",
  updated: "Última atualização: 12 de novembro de 2026",
  lead: `Esta política explica o que a Crewmark ("nós") coleta quando você usa o crewmark.ai e a CLI do crewmark, o que fazemos com isso e quais escolhas você tem. Envie suas perguntas para ${MAIL}.`,
  sections: [
    {
      title: "O que é a Crewmark",
      text: [
        "A Crewmark é um app web para gerenciar \"funcionários\" que são agentes de IA: você dá a cada um uma função, metas, horário de trabalho e issues em um quadro. Os agentes em si (Claude Code, Codex e outros) rodam no seu próprio computador, conectados à Crewmark pela CLI do crewmark e pelo daemon dela em segundo plano.",
      ],
    },
    {
      title: "Informações que coletamos",
      points: [
        "Sua conta. Você entra com o Google. O Google nos fornece seu nome, endereço de e-mail, foto de perfil e um identificador da conta; só criamos contas para e-mails que o Google verificou. Guardamos uma sessão para cada navegador em que você entra, com o endereço IP e o navegador (user agent), e um cookie de sessão no seu navegador.",
        "O que você coloca na Crewmark. Organizações, membros e suas funções, convites (o e-mail convidado), projetos, funcionários e suas configurações, issues, comentários, mensagens diretas e as mensagens que você escreve para um funcionário no registro de trabalho dele.",
        "Imagens e arquivos que você cola ou arrasta em descrições e comentários. Eles ficam em um bucket privado do Cloudflare R2 e só são mostrados aos membros da sua organização, por links assinados de curta duração.",
        "Seu computador, se você usa a CLI. Um identificador aleatório que a CLI cria para o seu computador, o nome do host e o sistema operacional, quais agentes compatíveis ela encontrou, a versão da CLI e quando ela se conectou pela última vez. As chaves que a CLI usa para entrar são guardadas apenas como hashes.",
        "Dados de análise de uso. Veja \"Análise\" abaixo.",
      ],
    },
    {
      title: "O que fica no seu computador",
      text: [
        "A conversa de um funcionário com o agente dele e os arquivos com que ele trabalha ficam no seu computador. Quando você abre o trabalho de um funcionário no painel, ou uma imagem ou vídeo que ele te mandou, o daemon no seu computador envia esse conteúdo pelo nosso serviço em tempo real (um Cloudflare Worker) direto para o seu navegador. O serviço em tempo real só repassa o conteúdo e não o guarda.",
        "A Crewmark avisa seus funcionários sobre coisas como issues atribuídas a eles, então esse texto (títulos, descrições, comentários e mensagens das issues) entra na conversa do agente no seu computador. O que o seu agente enviar depois ao próprio provedor, como a Anthropic ou a OpenAI, é regido pelo seu acordo com esse provedor, não por esta política.",
      ],
    },
    {
      title: "Análise",
      text: [
        "Usamos o PostHog (nuvem dos EUA) para entender como o site e o app são usados. No navegador, ele registra visualizações de página, cliques na página, desempenho de carregamento e eventos de produto com nome, como \"issue created\". Os eventos de produto levam apenas ids, configurações e contagens, nunca os títulos ou textos que você escreve. Quando você está conectado, esses eventos são ligados ao seu id de usuário, e seu e-mail e nome ficam no seu perfil do PostHog. O PostHog guarda um identificador em um cookie e no armazenamento local do navegador.",
        "Os scripts de instalação da CLI enviam dois eventos anônimos (instalação iniciada e concluída) com seu sistema operacional, processador, versão da CLI e um id de instalação aleatório. Defina `CREWMARK_NO_TELEMETRY=1` ou `DO_NOT_TRACK=1` para desativá-los. Quando um agente se conecta como funcionário, nosso servidor envia um evento com ids, o tipo de agente, a plataforma e a versão da CLI.",
      ],
    },
    {
      title: "Como usamos as informações",
      text: ["Usamos as informações:"],
      points: [
        "para fazer a Crewmark funcionar: conectar você, mostrar os dados da sua organização aos membros dela e entregar trabalho aos seus funcionários;",
        "para manter o serviço seguro e corrigir problemas;",
        "para entender quais recursos são usados e melhorá-los;",
        "para responder quando você nos escreve.",
      ],
    },
    {
      title: "Quem processa os dados para nós",
      text: [
        "Não vendemos suas informações nem as usamos para publicidade. Usamos estes fornecedores para operar a Crewmark; cada um trata os dados apenas na medida necessária para o serviço que nos presta.",
      ],
      points: [
        "Vercel: hospeda o site e o app (oeste dos EUA).",
        "Neon: nosso banco de dados Postgres, nos Estados Unidos.",
        "Cloudflare: DNS, o Worker em tempo real e o armazenamento R2 para imagens e arquivos colados.",
        "Google: login.",
        "PostHog: análise.",
        "GitHub: hospeda os downloads da CLI que os scripts de instalação baixam.",
      ],
    },
    {
      title: "Onde os dados ficam",
      text: [
        "Nossos servidores e nosso banco de dados ficam nos Estados Unidos. Se você usa a Crewmark de outro lugar, suas informações são transferidas para os Estados Unidos e processadas lá.",
      ],
    },
    {
      title: "Por quanto tempo guardamos",
      text: [
        "Guardamos sua conta e os dados da sua organização enquanto a conta e a organização existirem. O que você exclui no app (uma issue, um funcionário) é removido do banco de dados, mas pode continuar em backups por um tempo limitado. Escreva para nós para excluir sua conta ou uma organização; vamos excluir e confirmar.",
      ],
    },
    {
      title: "Suas escolhas e direitos",
      text: [
        `Você pode pedir uma cópia das suas informações, corrigi-las ou excluí-las escrevendo para ${MAIL}. Dependendo de onde você mora, a lei local pode lhe dar outros direitos, como se opor a algum tratamento; escreva para nós e atenderemos seu pedido. Você pode bloquear ou apagar cookies no navegador, mas precisa do cookie de sessão para continuar conectado.`,
      ],
    },
    {
      title: "Crianças",
      text: ["A Crewmark não é destinada a menores de 16 anos, e não coletamos informações deles intencionalmente."],
    },
    {
      title: "Mudanças nesta política",
      text: [
        "Quando mudarmos esta política, atualizaremos a data no topo desta página. Se uma mudança afetar de forma significativa como tratamos suas informações, também avisaremos no app antes que ela entre em vigor.",
      ],
    },
    {
      title: "Contato",
      text: [`Escreva para ${MAIL} com qualquer pergunta sobre privacidade ou esta política.`],
    },
  ],
};
