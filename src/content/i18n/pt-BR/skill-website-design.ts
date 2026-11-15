import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /skills/website-design; the English master is
// src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "Melhores skills do Claude para web design e UI (2026)",
    description:
      "As melhores skills do Claude Code para web design e design de UI, comparadas a partir dos próprios repositórios: frontend-design da Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop, as skills de Emil Kowalski, shadcn e mais, com os comandos de instalação.",
  },
  breadcrumb: "Skills de web design e UI",
  parent: { name: "Skills do Claude", href: "/skills" },
  hero: {
    kicker: "Skills do Claude · Design",
    title: "Melhores skills do Claude para web design e UI",
    lead: "Uma skill de design é um arquivo SKILL.md que ensina o Claude Code (ou o Codex, o Cursor e outros agentes) a fazer design: que cores e fontes escolher, que padrões com cara de IA evitar e como conferir o resultado antes de dar o trabalho por terminado. Sem uma, os agentes tendem a entregar sempre a mesma página de gradientes e cards. Estas são as skills que valem a pena instalar em 2026, no que cada uma se destaca e como instalá-la, a partir do repositório de cada projeto.",
    cta: "Começar",
    secondary: "Comparar as skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "Landing page nova ou site institucional: Taste Skill. Ela escolhe uma direção, usa fotos reais e confere a página em um navegador em quatro larguras antes de entregar.",
        "Refinar uma UI que já existe: Impeccable (comandos como polish, critique e audit, além de um detector de slop baseado em regras) ou unslop (corrige espaçamento, cores, ícones, textos e tipografia, nessa ordem).",
        "Uma escolha segura da Anthropic: frontend-design, a skill oficial, foge do design genérico de IA.",
        "Escolher estilos, paletas e fontes para qualquer plataforma: UI UX Pro Max, um banco de dados de design pesquisável para web, mobile e desktop.",
        "Animação e pequenos detalhes: as skills de Emil Kowalski.",
        "Revisar código com regras de acessibilidade e UX: web-design-guidelines, da Vercel.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de web design e UI comparadas",
      text: [
        "Estrelas e licenças da API do GitHub em 8 de novembro de 2026, arredondadas. Em repositórios com muitas skills, as estrelas são do repositório inteiro.",
      ],
      headers: ["Skill", "Melhor para", "Funciona com", "Estrelas", "Licença"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "Design marcante para qualquer UI nova; planeja primeiro um sistema de tokens", "Claude Code, Claude.ai", "~189k (repo)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Estilos, paletas, pares de fontes e regras de UX para web, mobile e desktop", "Claude Code, Cursor, Codex e ~20 outros", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "Sites institucionais e de marketing, conferidos em um navegador real", "Claude Code, Codex, CLI de skills", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "Criticar e refinar interfaces existentes; detector de slop", "Claude Code, Codex, Cursor e mais", "~105k", "Apache 2.0"],
        ["[Skills de Emil Kowalski](https://github.com/emilkowalski/skills)", "Animação, acabamento e detalhes de componentes", "Qualquer agente via CLI de skills", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "Auditar código de UI com mais de 100 regras de acessibilidade e UX", "Qualquer agente via CLI de skills", "~34k (repo)", "MIT (segundo o README)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "Usar corretamente os componentes do shadcn/ui em apps React", "Qualquer agente via CLI de skills", "~128k (repo)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "Páginas, protótipos de apps, apresentações e animações a partir de um prompt; escrita em chinês", "Claude Code, Cursor, Codex e mais", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "Transformar uma UI com cara de IA em uma interface com design de verdade, uma passada por vez", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Skills do Stitch](https://github.com/google-labs-code/stitch-skills) (Google)", "Fazer o design no Stitch e depois construir em React ou React Native", "Claude Code, Cursor, Codex; exige o MCP do Stitch", "~9k", "Apache 2.0"],
        ["[Skills do Figma](https://github.com/figma/mcp-server-guide)", "Do design no Figma para o código, e design systems no Figma (beta)", "Claude Code, Cursor; exige o MCP do Figma", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como instalar e usar uma skill de design",
      steps: [
        {
          title: "Instale uma ou duas, não todas",
          text: "Skills que querem definir a direção, cada uma do seu jeito, entram em conflito. Escolha uma que faz o design (frontend-design, Taste Skill ou UI UX Pro Max) e, se quiser, uma que revisa (Impeccable, unslop ou web-design-guidelines).",
          code: install,
        },
        {
          title: "Passe o brief",
          text: "Diga para que serve a página, para quem ela é e um ou dois sites de que você gosta. A maioria dessas skills pede uma direção primeiro, e o resultado só é tão específico quanto o brief.",
        },
        {
          title: "Deixe a skill conferir o próprio trabalho",
          text: "A Taste Skill renderiza a página em quatro larguras e passa por uma verificação final (finish gate); o detector do Impeccable roda 62 regras com `npx impeccable detect src/`. Mantenha essas verificações ligadas e olhe os prints você mesmo.",
        },
        {
          title: "Salve o resultado como design system",
          text: "Várias skills escrevem um DESIGN.md (Impeccable, Taste Skill, Stitch). Mantenha esse arquivo no repositório para que as próximas sessões, e outros agentes, sigam as mesmas cores, tipografia e espaçamento. Veja o [guia do CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fonte: a skill frontend-design da Anthropic", href: anthropic },
    },
    {
      kind: "text",
      title: "O que saber antes de instalar",
      points: [
        "Algumas skills adicionam hooks ou baixam um motor: o Impeccable instala hooks de comando e vem com telemetria ligada por padrão (desative com `DO_NOT_TRACK=1`); a Taste Skill roda uma verificação final como hook Stop e precisa de Node 22+ e Chrome.",
        "Um build completo com a Taste Skill pode levar de 30 a 45 minutos e algumas centenas de milhares de tokens, segundo o README.",
        "O UI UX Pro Max precisa de Python 3 e vende um plano premium; a skill aberta é MIT.",
        "O unslop é CC BY 4.0: dê crédito ao autor se reutilizar o texto. Não confunda com repositórios de mesmo nome focados em texto.",
        "As skills do Stitch e do Figma precisam dos servidores MCP e das contas deles; a escrita no canvas do Figma está em beta e é limitada nos assentos gratuitos.",
        "Da nossa equipe: usamos a Taste Skill nas telas do próprio produto do Crewmark e fizemos um vídeo curto sobre o unslop. Nosso projeto irmão [pretty-ui](https://github.com/ummydev/pretty-ui) é uma skill mais nova e menor para o mesmo trabalho.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê às skills um designer que trabalha todo dia",
      text: [
        "Uma skill faz uma sessão projetar melhor. O Crewmark transforma o Claude Code ou o Codex em um UI designer com IA com uma meta, como três telas refinadas por semana, um horário de trabalho e um quadro de telas para corrigir; ele acorda com um heartbeat e abre pull requests com prints de antes e depois.",
      ],
      steps: [
        {
          title: "Contrate o cargo de UI designer",
          text: "O brief, a meta e a rotina já vêm configurados; veja o [UI designer com IA](/ai-employees/ui-designer) e o [UI designer de apps com IA](/ai-employees/app-designer).",
        },
        {
          title: "Instale as suas skills de design no repositório",
          text: "O funcionário usa as skills em `.claude/skills` como qualquer sessão.",
        },
        {
          title: "Revise pull requests, não prompts",
          text: "Aprove as telas de que gostar; peça mudanças no quadro. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar e usar uma skill de design do Claude" },
  mid: {
    title: "Quer um designer que rode essas skills todo dia?",
    text: "O UI designer com IA do Crewmark trabalha no seu código com um heartbeat e abre pull requests com prints.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre skills de design do Claude",
    items: [
      {
        q: "Qual é a melhor skill do Claude para web design?",
        a: "Para um site novo, a Taste Skill ou a frontend-design da Anthropic; para refinar uma UI existente, o Impeccable ou o unslop; para escolher estilos e paletas em várias plataformas, o UI UX Pro Max. A maioria das pessoas instala uma que faz o design e outra que revisa.",
      },
      {
        q: "Existe uma skill de design oficial do Claude?",
        a: "Sim. A Anthropic publica a frontend-design em anthropics/skills e como plugin em claude-plugins-official. Ela é Apache 2.0 e foca em evitar os padrões genéricos de design de IA.",
      },
      {
        q: "Como instalo uma skill no Claude Code?",
        a: "Use o marketplace de plugins (`/plugin marketplace add owner/repo` e depois `/plugin install`), a CLI de skills (`npx skills add owner/repo`) ou copie a pasta da skill para `.claude/skills/`.",
      },
      {
        q: "Essas skills funcionam com o Codex e o Cursor?",
        a: "A maioria sim: UI UX Pro Max, Impeccable, Taste Skill e Huashu Design documentam o Codex, e a CLI de skills instala skills SKILL.md no Cursor, no Codex e em cerca de 75 outros agentes.",
      },
      {
        q: "As skills de design do Claude são gratuitas?",
        a: "As skills desta página são open source (MIT, Apache 2.0 ou CC BY 4.0). Alguns produtos em volta delas são pagos: o plano premium do UI UX Pro Max, e o Stitch e o Figma exigem contas próprias.",
      },
      {
        q: "Qual a diferença entre o Impeccable e a Taste Skill?",
        a: "A Taste Skill cria sites institucionais e de marketing novos, com verificação em um navegador real; o Impeccable se sai melhor em interfaces que já existem, com comandos para criticar, auditar e refinar, e um detector de slop baseado em regras.",
      },
    ],
  },
  cta: {
    title: "Coloque um designer no seu quadro, com as skills em que você confia.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no repositório do GitHub de cada skill e na API do GitHub em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic nem com os autores das skills listadas e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
