import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /skills/mobile-app-design; the English master is
// src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Expo's official skills (Claude Code plugin)
/plugin install expo@claude-plugins-official

# Vercel's React Native rules
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# The Flutter team's skills
npx skills add flutter/agent-plugins

# Apple design review for any framework
npx skills add dickwu/apple-design-skill

# Mobile Taste Skill for React Native and Expo
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "Melhores skills do Claude para design e desenvolvimento de apps mobile",
    description:
      "As melhores skills do Claude Code para apps mobile em 2026, por plataforma: Expo e Vercel para React Native, SwiftUI Pro e SwiftUI Expert para iOS, as skills do time do Flutter, revisão de design da Apple e mais, com os comandos de instalação.",
  },
  breadcrumb: "Skills de apps mobile",
  parent: { name: "Skills do Claude", href: "/skills" },
  hero: {
    kicker: "Skills do Claude · Apps mobile",
    title: "Melhores skills do Claude para design e desenvolvimento de apps mobile",
    lead: "Uma skill mobile é um arquivo SKILL.md que ensina o Claude Code (ou o Codex, o Cursor e outros agentes) a construir para celulares: as regras de design da plataforma, as APIs que mudaram depois que o modelo foi treinado e os erros que os agentes costumam cometer em SwiftUI, React Native ou Flutter. A maioria trata de uma plataforma só, então escolha pela que você publica. Estas são as skills que valem a pena instalar em 2026, agrupadas por plataforma, a partir do repositório de cada projeto.",
    cta: "Começar",
    secondary: "Comparar as skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "React Native e Expo: as skills oficiais do Expo para construir e publicar, as react-native-skills da Vercel ou as skills da Callstack para performance, e o Mobile Taste Skill para telas que não pareçam feitas por IA.",
        "SwiftUI e iOS: o SwiftUI Pro de Paul Hudson para SwiftUI moderno e acessível, o SwiftUI Expert de Antoine van der Lee para estado e performance, e as Claude Code Apple Skills para ir da ideia à App Store.",
        "Flutter: as skills do próprio time do Flutter para arquitetura, layouts, rotas e testes.",
        "Design para qualquer framework: o Apple Design Skill revisa um design com base nas Human Interface Guidelines da Apple, em SwiftUI, Flutter, React Native e mais; o UI UX Pro Max escolhe estilos, paletas e fontes.",
        "Antes de enviar: o App Store Review confere um projeto com as regras da App Store e do Google Play.",
        "Um web app que deveria parecer um app: o mobile-native de Emil Kowalski corrige o CSS e as meta tags que o denunciam no celular.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de apps mobile comparadas",
      text: [
        "Estrelas e licenças da API do GitHub em 8 de novembro de 2026, arredondadas. Em repositórios com muitas skills, as estrelas são do repositório inteiro.",
      ],
      headers: ["Skill", "Plataforma", "Melhor para", "Estrelas", "Licença"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web, mobile, desktop", "Estilos, paletas, pares de fontes e regras de UX", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "Web mobile, PWAs", "Fazer um web app parecer nativo no celular", "~54k (repo)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "Regras de performance para listas, animação, navegação e UI", "~34k (repo)", "MIT (segundo o README)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "Corrigir os erros que os LLMs cometem em SwiftUI; acessibilidade", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Construir, desenhar e publicar apps Expo: router, UI nativa, animação, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "Estado, performance, navegação e Liquid Glass; ferramentas para traces do Instruments", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (time do Flutter)", "Flutter", "Arquitetura, layouts responsivos, correção de layout, rotas, testes, localização", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Revisar um design com base em 123 páginas das diretrizes da Apple", "~3k", "Não informada"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "Performance, navegação, upgrades, migração e testes em um dispositivo", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "165 skills da ideia à App Store, 8 delas de design", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Telas desenhadas pelo serviço de IA da Sleek e depois construídas em código", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "Qualquer uma (mockups em React e Tailwind)", "Regras de design de apps conhecidos: cor, grid de 8 pontos, zona do polegar", "~500", "Não informada"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "APIs atuais da Apple: SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "Qualquer uma", "Conferir um app com as regras da App Store e do Google Play antes de enviar", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "Telas, navegação e um design system que não pareçam gerados por IA", "~10", "Ver repo"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "As skills mobile mais instaladas",
      text: [
        "Instalações pela CLI de skills, segundo o registro do skills.sh em 8 de novembro de 2026. Plugins instalados com `/plugin install` quase não aparecem aqui, então trate esses números como um piso.",
      ],
      points: [
        "ui-ux-pro-max (web e mobile): cerca de 440.000",
        "vercel-react-native-skills: cerca de 270.000",
        "mobile-native (Emil Kowalski): cerca de 116.000",
        "expo-dev-client, a mais instalada das skills do Expo: cerca de 74.000",
        "flutter-apply-architecture-best-practices, a mais instalada das do time do Flutter: cerca de 45.000",
        "swiftui-pro (Paul Hudson): cerca de 37.000",
        "swiftui-expert-skill (Antoine van der Lee): cerca de 36.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Code para um app mobile",
      steps: [
        {
          title: "Escolha pela plataforma: uma skill que constrói, uma que desenha",
          text: "Para Expo, as skills do Expo mais o Mobile Taste Skill; para SwiftUI, o SwiftUI Pro ou o SwiftUI Expert mais o Apple Design Skill; para Flutter, as skills do time do Flutter mais o Apple Design Skill ou o UI UX Pro Max. Duas skills que querem definir o estilo vão brigar.",
          code: install,
        },
        {
          title: "Passe o brief e um app de referência",
          text: "Diga para quem é o app, as três ou quatro telas que importam e um app cuja sensação você gosta. O Mobile Taste Skill faz o agente se comprometer com uma leitura do app (tipo, público, sensação) e planejar a navegação antes de escrever qualquer código.",
        },
        {
          title: "Confira no simulador, não no código",
          text: "Rode o app no iOS Simulator, em um emulador Android ou no Expo Go e olhe telas reais em mais de um tamanho. A skill agent-device da Callstack deixa o agente controlar um dispositivo e conferir o próprio trabalho.",
        },
        {
          title: "Salve o design system no repositório",
          text: "O Mobile Taste Skill escreve um MOBILE-DESIGN.md e o Expo tem uma skill expo-design-system. Mantenha o resultado no repositório para que as próximas sessões, e outros agentes, sigam as mesmas cores, tipografia e espaçamento. Veja o [guia do CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fonte: agent skills do Expo", href: expo },
    },
    {
      kind: "text",
      title: "O que saber antes de instalar",
      points: [
        "A Sleek exige uma conta paga para uso real: contas gratuitas recebem créditos de teste para cerca de uma rodada de design, e o Pro custa $69 por mês, segundo a skill. Todo brief vai para o sleek.design.",
        "As skills de EAS do Expo usam os serviços hospedados de build e atualização do Expo, e cada skill do Expo pede ao agente que envie feedback pela CLI de agentes do Expo.",
        "As ferramentas de trace do SwiftUI Expert precisam do xctrace do Xcode e de Python 3; elas gravam e analisam traces do Instruments na sua máquina.",
        "As Claude Code Apple Skills seguem a branch main sem fixar versões, e o próprio aviso do projeto diz que as skills foram escritas com ajuda do Claude Code e podem conter imprecisões.",
        "O mobile-native de Emil Kowalski é para web apps e PWAs no celular, não para apps nativos.",
        "Nenhuma delas é feita pela Apple ou pelo Google, e o App Store Review não garante aprovação. O registro também lista a design-mobile-apps da Sleek com cerca de 1,3 milhão de instalações em um repositório com poucas estrelas; não conseguimos verificar esse número, então ela não está na lista acima.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê às skills um designer de apps que trabalha todo dia",
      text: [
        "Uma skill deixa uma sessão melhor em trabalho mobile. O Crewmark transforma o Claude Code ou o Codex em um designer de apps com IA, com uma meta, como três telas bem acabadas por semana, horário de trabalho e um quadro de telas para corrigir; ele acorda com um heartbeat e abre pull requests com capturas do simulador.",
      ],
      steps: [
        {
          title: "Contrate o cargo de designer de apps",
          text: "O brief, a meta e a rotina já vêm configurados; veja o [designer de apps com IA](/ai-employees/app-designer) e o [engenheiro de software com IA](/ai-employees/software-engineer).",
        },
        {
          title: "Instale as suas skills mobile no repositório",
          text: "O funcionário usa as skills em `.claude/skills` como qualquer sessão. Para trabalho de web e UI, veja as [melhores skills do Claude para web design](/skills/website-design).",
        },
        {
          title: "Revise pull requests, não prompts",
          text: "Aprove as telas de que você gostar; peça mudanças no quadro. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Claude Code para trabalho mobile com skills" },
  mid: {
    title: "Quer um designer de apps que rode essas skills todo dia?",
    text: "O designer de apps com IA do Crewmark trabalha no seu código com um heartbeat e abre pull requests com capturas de tela.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre skills do Claude para apps mobile",
    items: [
      {
        q: "Qual é a melhor skill do Claude para design de apps mobile?",
        a: "Depende da plataforma. Para React Native e Expo, o Mobile Taste Skill com as próprias skills do Expo; para SwiftUI, o SwiftUI Pro ou o SwiftUI Expert com o Apple Design Skill; para qualquer framework, o Apple Design Skill ou o UI UX Pro Max para a parte visual.",
      },
      {
        q: "Existe uma skill oficial do Claude para React Native ou Expo?",
        a: "O Expo publica o expo/skills, também disponível como plugin no claude-plugins-official, e a Vercel e a Callstack publicam skills de React Native. Nenhuma delas é feita pela Anthropic.",
      },
      {
        q: "Qual é a melhor skill do Claude Code para SwiftUI e iOS?",
        a: "O SwiftUI Pro de Paul Hudson mira o iOS 26 e o Swift 6.4 e os erros que os LLMs cometem em SwiftUI; o SwiftUI Expert de Antoine van der Lee cobre estado, performance e Liquid Glass. Os dois se instalam como plugins ou com a CLI de skills.",
      },
      {
        q: "Existe uma skill de Flutter para o Claude Code?",
        a: "Sim. O time do Flutter publica o flutter/agent-plugins, com skills de arquitetura, layouts responsivos, correção de layout, rotas, localização e testes, e ele inclui as ferramentas MCP de Dart e Flutter.",
      },
      {
        q: "O Claude Code consegue desenhar a UI de um app mobile?",
        a: "Com uma skill de design ele se sai muito melhor do que sem: a skill traz as regras da plataforma e uma direção. Confira as telas em um simulador ou em um celular, porque só o código não mostra problemas de espaçamento e de área de toque.",
      },
      {
        q: "Essas skills mobile funcionam com o Codex e o Cursor?",
        a: "A maioria funciona. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill e as skills da Callstack documentam o Codex ou o Cursor, e a CLI de skills instala skills SKILL.md em dezenas de agentes.",
      },
    ],
  },
  cta: {
    title: "Coloque um designer de apps no seu quadro, com as skills em que você confia.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no repositório do GitHub de cada skill, na API do GitHub e no registro do skills.sh em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a Apple, o Google nem com os autores das skills listadas e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
