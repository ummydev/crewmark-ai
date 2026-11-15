import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /skills/website-design; the English master is src/content/skill-pages/website-design.ts.

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
    title: "Mejores skills de Claude para diseño web y UI (2026)",
    description:
      "Las mejores skills de Claude Code para diseño web y de UI, comparadas a partir de sus repositorios: frontend-design de Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop, las skills de Emil Kowalski, shadcn y más, con comandos de instalación.",
  },
  breadcrumb: "Skills de diseño web y UI",
  parent: { name: "Skills de Claude", href: "/skills" },
  hero: {
    kicker: "Skills de Claude · Diseño",
    title: "Las mejores skills de Claude para diseño web y UI",
    lead: "Una skill de diseño es un archivo SKILL.md que enseña a Claude Code (o a Codex, Cursor y otros agentes) a diseñar: qué colores y tipografías elegir, qué recursos con aspecto de IA evitar y cómo comprobar el resultado antes de darlo por terminado. Sin una, los agentes tienden a entregar la misma página de degradados y tarjetas. Estas son las skills que vale la pena instalar en 2026, en qué destaca cada una y cómo instalarla, según el repositorio de cada proyecto.",
    cta: "Empezar",
    secondary: "Comparar las skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Recomendaciones rápidas",
      points: [
        "Landing page nueva o web de empresa: Taste Skill. Elige una dirección, usa fotos reales y comprueba la página en un navegador a cuatro anchos antes de entregarla.",
        "Pulir una UI que ya existe: Impeccable (comandos como polish, critique y audit, más un detector de slop basado en reglas) o unslop (corrige espaciado, color, iconos, textos y tipografía, en ese orden).",
        "Una opción segura de Anthropic: frontend-design, la skill oficial, se aleja del diseño genérico de IA.",
        "Elegir estilos, paletas y fuentes para cualquier plataforma: UI UX Pro Max, una base de datos de diseño con búsqueda para web, móvil y escritorio.",
        "Animación y pequeños detalles: las skills de Emil Kowalski.",
        "Revisar código según reglas de accesibilidad y UX: web-design-guidelines de Vercel.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de diseño web y UI comparadas",
      text: [
        "Estrellas y licencias de la API de GitHub a 8 de noviembre de 2026, redondeadas. En los repositorios con muchas skills, las estrellas son de todo el repositorio.",
      ],
      headers: ["Skill", "Ideal para", "Funciona con", "Estrellas", "Licencia"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "Diseño con personalidad para cualquier UI nueva; planifica primero un sistema de tokens", "Claude Code, Claude.ai", "~189k (repo)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Estilos, paletas, pares de fuentes y reglas de UX para web, móvil y escritorio", "Claude Code, Cursor, Codex y ~20 más", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "Webs de empresa y de marketing, comprobadas en un navegador real", "Claude Code, Codex, CLI de skills", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "Criticar y pulir interfaces existentes; detector de slop", "Claude Code, Codex, Cursor y más", "~105k", "Apache 2.0"],
        ["[Skills de Emil Kowalski](https://github.com/emilkowalski/skills)", "Animación, pulido y detalles de componentes", "Cualquier agente vía CLI de skills", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "Auditar código de UI según más de 100 reglas de accesibilidad y UX", "Cualquier agente vía CLI de skills", "~34k (repo)", "MIT (según el README)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "Usar bien los componentes de shadcn/ui en apps de React", "Cualquier agente vía CLI de skills", "~128k (repo)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "Páginas, prototipos de apps, presentaciones y animación a partir de un solo prompt; escrita en chino", "Claude Code, Cursor, Codex y más", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "Convertir una UI con aspecto de IA en una interfaz diseñada, pasada a pasada", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Skills de Stitch](https://github.com/google-labs-code/stitch-skills) (Google)", "Diseñar en Stitch y después construir en React o React Native", "Claude Code, Cursor, Codex; requiere el MCP de Stitch", "~9k", "Apache 2.0"],
        ["[Skills de Figma](https://github.com/figma/mcp-server-guide)", "De diseños de Figma a código, y sistemas de diseño en Figma (beta)", "Claude Code, Cursor; requiere el MCP de Figma", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo instalar y usar una skill de diseño",
      steps: [
        {
          title: "Instala una o dos, no todas",
          text: "Las skills que quieren marcar la dirección cada una por su lado acaban chocando. Elige una que diseñe (frontend-design, Taste Skill o UI UX Pro Max) y, si quieres, otra que revise (Impeccable, unslop o web-design-guidelines).",
          code: install,
        },
        {
          title: "Dale el brief",
          text: "Explica para qué es la página, a quién va dirigida y uno o dos sitios que te gusten. La mayoría de estas skills piden primero una dirección, y el resultado solo será tan concreto como el brief.",
        },
        {
          title: "Deja que compruebe su propio trabajo",
          text: "Taste Skill renderiza la página a cuatro anchos y pasa un control final (finish gate); el detector de Impeccable aplica 62 reglas con `npx impeccable detect src/`. Mantén esas comprobaciones activadas y mira tú mismo las capturas.",
        },
        {
          title: "Guarda el resultado como sistema de diseño",
          text: "Varias skills escriben un DESIGN.md (Impeccable, Taste Skill, Stitch). Guárdalo en el repositorio para que las sesiones posteriores, y otros agentes, sigan los mismos colores, tipografía y espaciado. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fuente: la skill frontend-design de Anthropic", href: anthropic },
    },
    {
      kind: "text",
      title: "Qué saber antes de instalar",
      points: [
        "Algunas skills añaden hooks o descargan un motor: Impeccable instala hooks de comandos y tiene la telemetría activada por defecto (desactívala con `DO_NOT_TRACK=1`); Taste Skill ejecuta un control final como hook Stop y necesita Node 22+ y Chrome.",
        "Una construcción completa con Taste Skill puede llevar 30–45 minutos y unos cientos de miles de tokens, según su README.",
        "UI UX Pro Max necesita Python 3 y vende un nivel premium; la skill abierta es MIT.",
        "unslop es CC BY 4.0: cita al autor si reutilizas su texto. No la confundas con repositorios del mismo nombre centrados en texto.",
        "Las skills de Stitch y Figma necesitan sus servidores MCP y sus cuentas; la escritura en el lienzo de Figma está en beta y es limitada en los puestos gratuitos.",
        "Desde nuestro equipo: usamos Taste Skill en las pantallas del propio producto de Crewmark e hicimos un vídeo corto sobre unslop. Nuestro proyecto hermano [pretty-ui](https://github.com/ummydev/pretty-ui) es una skill más nueva y pequeña para el mismo trabajo.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dales a las skills un diseñador que trabaje cada día",
      text: [
        "Una skill hace que una sesión diseñe mejor. Crewmark convierte Claude Code o Codex en un diseñador de UI con IA con un objetivo, como tres pantallas pulidas a la semana, un horario de trabajo y un tablero de pantallas por arreglar; se despierta con un heartbeat y abre pull requests con capturas de antes y después.",
      ],
      steps: [
        {
          title: "Contrata el rol de diseñador de UI",
          text: "Su brief, su objetivo y su rutina vienen configurados; consulta el [diseñador de UI con IA](/ai-employees/ui-designer) y el [diseñador de apps con IA](/ai-employees/app-designer).",
        },
        {
          title: "Instala tus skills de diseño en el repositorio",
          text: "El empleado usa las skills de `.claude/skills` como cualquier sesión.",
        },
        {
          title: "Revisa pull requests, no prompts",
          text: "Aprueba las pantallas que te gusten y pide cambios en el tablero. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar y usar una skill de diseño de Claude" },
  mid: {
    title: "¿Quieres un diseñador que ejecute estas skills cada día?",
    text: "El diseñador de UI con IA de Crewmark trabaja en tu código con un heartbeat y abre pull requests con capturas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las skills de diseño de Claude",
    items: [
      {
        q: "¿Cuál es la mejor skill de Claude para diseño web?",
        a: "Para un sitio nuevo, Taste Skill o frontend-design de Anthropic; para pulir una UI existente, Impeccable o unslop; para elegir estilos y paletas en varias plataformas, UI UX Pro Max. La mayoría de la gente instala una que diseña y otra que revisa.",
      },
      {
        q: "¿Hay una skill de diseño oficial de Claude?",
        a: "Sí. Anthropic publica frontend-design en anthropics/skills y como plugin en claude-plugins-official. Tiene licencia Apache 2.0 y se centra en evitar los diseños genéricos típicos de la IA.",
      },
      {
        q: "¿Cómo instalo una skill en Claude Code?",
        a: "Usa el marketplace de plugins (`/plugin marketplace add owner/repo` y después `/plugin install`), la CLI de skills (`npx skills add owner/repo`) o copia la carpeta de la skill en `.claude/skills/`.",
      },
      {
        q: "¿Funcionan estas skills con Codex y Cursor?",
        a: "La mayoría sí: UI UX Pro Max, Impeccable, Taste Skill y Huashu Design documentan Codex, y la CLI de skills instala skills SKILL.md en Cursor, Codex y unos 75 agentes más.",
      },
      {
        q: "¿Las skills de diseño de Claude son gratis?",
        a: "Las skills de esta página son de código abierto (MIT, Apache 2.0 o CC BY 4.0). Algunos productos relacionados son de pago: el nivel premium de UI UX Pro Max, y Stitch y Figma requieren sus propias cuentas.",
      },
      {
        q: "¿Qué diferencia hay entre Impeccable y Taste Skill?",
        a: "Taste Skill crea webs de empresa y de marketing nuevas con una comprobación en un navegador real; Impeccable destaca con interfaces que ya existen, con comandos para criticar, auditar y pulir, y un detector de slop basado en reglas.",
      },
    ],
  },
  cta: {
    title: "Pon un diseñador en tu tablero, con las skills en las que confías.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el repositorio de GitHub de cada skill y la API de GitHub el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con los autores de las skills listadas y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
