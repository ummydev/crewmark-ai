import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills de Claude para marketing y diseño | Crewmark AI",
    description:
      "Skills de Claude Code gratis y de código abierto de un equipo de marketing con IA que las usa a diario: keywords en tendencia, páginas SEO, páginas comparativas, indexación, búsqueda con IA e informe diario, más las mejores skills de diseño comparadas.",
  },
  breadcrumb: "Skills de Claude",
  hero: {
    kicker: "Skills de Claude",
    title: "Skills de Claude de un equipo de marketing con IA",
    lead: "Marketing Team Skills es un conjunto gratuito y de código abierto de Agent Skills para Claude Code, Codex y Cursor: los pasos que el especialista SEO con IA de Crewmark sigue cada día para encontrar keywords, escribir y traducir páginas, conseguir que se indexen e informar de lo que se ha movido. Cada skill es un SKILL.md con comandos que funcionan y los errores que cometimos. Abajo: qué incluye, cómo instalarlo y nuestras guías de las mejores skills para cada tarea.",
    cta: "Empezar",
    secondary: "Instalar las skills",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Qué incluye Marketing Team Skills",
      text: ["La versión 0.1 cubre el SEO on-page. Después llegan el SEO off-page, los vídeos UGC y la difusión en redes sociales."],
      headers: ["Skill", "Qué hace"],
      rows: [
        ["trend-keywords", "Detecta términos que la gente acaba de empezar a buscar tras un lanzamiento, un cierre o una adquisición, y publica una página el mismo día"],
        ["keyword-research", "Elige keywords con las que un sitio nuevo puede posicionar y mantiene un mapa de keywords"],
        ["seo-page", "Escribe una página para una keyword: primero la definición, después pasos, tabla, FAQ y fuentes"],
        ["competitor-pages", "Crea páginas de alternativas y comparativas (vs) a partir de la documentación de cada producto"],
        ["programmatic-pages", "Páginas con plantilla a escala sin contenido pobre"],
        ["multilingual-seo", "Publica cada página en varios idiomas con hreflang"],
        ["index-push", "Consigue que se rastreen las páginas: IndexNow, Search Console, Bing"],
        ["ai-search", "Hace que ChatGPT, Claude y Perplexity puedan citar el sitio"],
        ["seo-daily-report", "Escribe el informe de fin de jornada frente al objetivo"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo instalar las skills",
      steps: [
        {
          title: "Añádelas a tu agente",
          text: "La CLI de skills las instala en Claude Code, Codex, Cursor y otros agentes; o usa el plugin de Claude Code.",
          code: install,
        },
        {
          title: "Copia el brief del rol",
          text: "Pon `roles/seo-specialist/CLAUDE.md` (o `AGENTS.md` para Codex) en el repositorio de tu sitio y rellena el objetivo, para que cada sesión conozca la rutina diaria. Consulta el [especialista SEO con IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Ejecútalo cada día",
          text: "Usa `/loop` o tareas programadas, o ejecútalo como un empleado de IA con un heartbeat; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
      ],
      source: { label: "Fuente: Marketing Team Skills en GitHub", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "Las mejores skills de Claude por tarea",
      text: [
        "Nuestras comparativas de las skills que vale la pena instalar para cada tipo de trabajo, a partir del repositorio de cada proyecto:",
      ],
      points: [
        "[Mejores skills de Claude para diseño web y UI](/skills/website-design): frontend-design de Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop y más.",
        "Para crear un agente SEO paso a paso, lee [Agente de IA para SEO: cómo crearlo](/blog/ai-seo-agent); para las skills en general, [skills de Claude Code](/blog/claude-code-skills).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Skills para la sesión, empleados para el trabajo",
      text: [
        "Las skills hacen que una sesión sea buena en una tarea. Crewmark convierte Claude Code, Codex, DeepSeek Harness u OpenCode en empleados de IA con un rol, un objetivo y un horario de trabajo, que se despiertan con un heartbeat para tomar la siguiente issue de un tablero y usan las skills que instales.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Un [especialista SEO](/ai-employees/seo-specialist), un [agente de marketing](/ai-employees/marketing-agent), un [diseñador de UI](/ai-employees/ui-designer) y más.",
        },
        {
          title: "Conecta tu proyecto",
          text: "Cada empleado trabaja en su propia sesión y checkout, con la suscripción que ya pagas. Consulta los [precios](/pricing).",
        },
        {
          title: "Revisa, no lo vigiles",
          text: "Comenta mientras trabaja y pregunta antes de cualquier cosa de tu lista de aprobación.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar Marketing Team Skills" },
  mid: {
    title: "¿Quieres que alguien ejecute las skills por ti cada día?",
    text: "Los empleados de IA de Crewmark usan estas skills con un heartbeat, con el plan de Claude Code o Codex que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las skills de Claude",
    items: [
      {
        q: "¿Qué son las skills de Claude?",
        a: "Carpetas con un archivo SKILL.md que enseñan a Claude Code, Claude.ai y otros agentes a hacer una tarea concreta. Solo se carga una descripción corta hasta que la tarea necesita la skill completa.",
      },
      {
        q: "¿Marketing Team Skills es gratis?",
        a: "Sí. Es de código abierto, con licencia MIT, y está en GitHub en ummydev/marketing-team-skills.",
      },
      {
        q: "¿Funciona con Codex y Cursor?",
        a: "Sí. La CLI de skills lo instala en Codex, Cursor y otros agentes compatibles con Agent Skills, y hay un manifiesto de plugin para Codex.",
      },
      {
        q: "¿En qué se diferencia de otras skills de marketing?",
        a: "Es operativo, no enciclopédico: cada skill es la rutina paso a paso que un empleado SEO de IA sigue en un sitio real, con scripts y los problemas con los que nos topamos. Combina bien con bibliotecas amplias como coreyhaines31/marketingskills.",
      },
    ],
  },
  cta: {
    title: "Contrata al equipo que escribió las skills.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Lista de skills según Marketing Team Skills v0.1, 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni OpenAI y sin su respaldo. Claude, Claude Code y Codex son marcas de sus titulares.",
};
