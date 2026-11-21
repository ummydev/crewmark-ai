import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Las skills de marketing de código abierto de Crewmark, en los agentes que ya tienes
npx skills add ummydev/marketing-team-skills

# O como plugin de Claude Code
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `Cada tarde, lee Search Console y nuestra analítica de los últimos
7 días, dime qué funciona, haz una cosa al respecto y publica
el informe en la issue "Informe SEO diario".

Cada lunes, revisa las páginas de precios y de changelog de
competitors.md, compáralas con la semana pasada y dime qué
ha cambiado y cuáles de nuestras páginas comparativas actualizar.

Convierte el post del blog de esta semana en cinco borradores para
LinkedIn y X con nuestro tono. Ponlos en el tablero para revisión;
no publiques.

Cada viernes, saca los registros y la activación de PostHog, compáralos
con la semana pasada y escribe tres cosas que probar la semana que viene.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code para marketing: empleados de IA para tu equipo",
    description:
      "Cómo usan los equipos de marketing Claude Code y Codex como empleados de IA: SEO, contenido, redes sociales, seguimiento de la competencia e informes según un horario. Roles, casos de uso, prompts y skills para copiar, y cómo configurarlo para que nada salga sin ti.",
  },
  breadcrumb: "Claude Code para marketing",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Para equipos de marketing",
    title: "Claude Code para marketing: empleados de IA que hacen el trabajo recurrente",
    lead: "Claude Code y Codex no son solo para ingenieros. Con un rol, las skills adecuadas y un horario, el mismo agente escribe y corrige las páginas de tu web, consigue que se indexen, redacta posts a partir de lo que has lanzado, vigila a la competencia e informa de las cifras cada día. El marketing de Crewmark funciona así. Esta página explica qué trabajos delegar, los roles que los hacen, prompts y skills para copiar, y cómo configurarlo para que nada público salga sin pasar por una persona.",
    cta: "Empezar",
    secondary: "Ver los trabajos",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Qué delegan los equipos de marketing en un empleado de IA",
      text: [
        "Los mejores primeros trabajos se repiten cada día o cada semana, tienen un final claro y te dejan la última palabra.",
      ],
      headers: ["Trabajo", "Frecuencia", "Quién lo hace", "Guía"],
      rows: [
        ["Informe SEO: tráfico, qué funciona, la distancia al objetivo", "Diaria", "Especialista SEO", "[Informe SEO diario](/use-cases/daily-seo-report)"],
        ["Precios, lanzamientos y cambios en la documentación de la competencia", "Semanal", "Agente de marketing", "[Resumen semanal de la competencia](/use-cases/weekly-competitor-digest)"],
        ["Páginas nuevas para palabras clave que empiezan a funcionar", "Diaria", "Especialista SEO", "[Especialista SEO de IA](/ai-employees/seo-specialist)"],
        ["Páginas comparativas y de alternativas, siempre al día", "Semanal", "Especialista SEO", "[Skill de páginas de competidores](/skills)"],
        ["Posts para redes sociales redactados a partir de lo que has lanzado", "Diaria", "Social media manager", "[Social media manager de IA](/ai-employees/social-media-manager)"],
        ["Cifras del embudo y experimentos que probar", "Semanal", "Agente de marketing", "[Agente de marketing de IA](/ai-employees/marketing-agent)"],
        ["Traducciones de páginas que ya reciben tráfico de búsqueda", "Cuando haga falta", "Especialista SEO", "[Skill de SEO multilingüe](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts para copiar",
      text: [
        "Cada uno funciona como issue recurrente para un empleado de IA, o como prompt puntual en Claude Code o Codex.",
      ],
      steps: [
        {
          title: "Cuatro trabajos, una frase cada uno",
          text: "Cambia los nombres y las cifras por los tuyos. Los dos primeros tienen guías completas con el brief del rol: el [informe SEO diario](/use-cases/daily-seo-report) y el [resumen semanal de la competencia](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "Skills de marketing para Claude Code que instalar",
      text: [
        "Las skills le dan al agente los pasos de cada trabajo, así no tienes que explicárselos en cada sesión.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, código abierto)",
          text: "Las skills que nuestro propio empleado de SEO ejecuta cada día: palabras clave en tendencia, investigación de palabras clave, una página por palabra clave, páginas de competidores, SEO multilingüe, indexación de páginas, búsqueda con IA y el informe diario, además de skills de vídeo corto. Consulta [Marketing Team Skills](/skills).",
          code: install,
        },
        {
          title: "Más skills de SEO y marketing",
          text: "marketingskills de Corey Haines (seo-audit, ai-seo, programmatic-seo y más), Claude SEO y otras se comparan en [las mejores skills de Claude para SEO](/skills/seo).",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo montar un equipo de marketing de empleados de IA",
      steps: [
        {
          title: "Contrata un rol cada vez",
          text: "Empieza por el trabajo que más tiempo te cuesta cada semana. Cada página de rol tiene los objetivos, la rutina diaria y el brief: [especialista SEO](/ai-employees/seo-specialist), [agente de marketing](/ai-employees/marketing-agent), [social media manager](/ai-employees/social-media-manager).",
        },
        {
          title: "Dale acceso de lectura y un repositorio",
          text: "Acceso de solo lectura a Search Console y a la analítica, el repositorio de la web y una vista previa local para probar páginas. Cuando existan las dos opciones, mejor CLIs que servidores MCP; gastan menos tokens.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Los trabajos recurrentes se convierten en issues recurrentes; el trabajo puntual, en issues que asignas. Cada empleado se despierta con su heartbeat durante el horario laboral y toma la siguiente.",
        },
        {
          title: "Que una persona revise todo lo público",
          text: "Publicar, postear, gastar dinero y cualquier cosa irreversible pasa por una persona. Cuando un empleado lo necesita, marca la issue como Requiere acción y pregunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "Qué esperar",
      points: [
        "El SEO tarda semanas en cualquier web: apunta los primeros objetivos a páginas publicadas e impresiones, y después a clics.",
        "Nuestro propio empleado de SEO publica páginas a diario; en sus primeras semanas las impresiones pasaron de un puñado a cientos por semana, sobre todo por páginas de long tail, mientras que términos amplios como “ai employee” siguieron por detrás de la posición 80.",
        "Los borradores salen rápido, pero el criterio sigue importando: revisa los posts y todo lo que vaya con la voz de tu marca antes de que salga.",
        "El uso sale de tu propio plan de Claude o ChatGPT, así que programa los trabajos pesados dentro del horario laboral.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Montar un equipo de marketing de empleados de IA con Claude Code o Codex" },
  mid: {
    title: "¿Quieres estos trabajos hechos cada día sin escribir prompts?",
    text: "Crewmark convierte tu Claude Code o Codex en empleados de marketing que se despiertan con un heartbeat y avanzan por un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puede Claude Code hacer marketing?",
        a: "Sí, en el trabajo que pueda hacer a través de archivos, la web y herramientas: escribir y corregir páginas de la web, investigar palabras clave, seguir a la competencia, preparar informes a partir de la analítica y redactar posts y emails. Publicar y gastar dinero debería seguir en manos de una persona.",
      },
      {
        q: "¿Cuáles son las mejores skills de marketing para Claude Code?",
        a: "Para SEO y crecimiento: Marketing Team Skills, de código abierto de Crewmark, y marketingskills de Corey Haines son dos de los conjuntos más completos; los comparamos con otros en [las mejores skills de Claude para SEO](/skills/seo).",
      },
      {
        q: "¿Hay un plugin de marketing para Claude Code?",
        a: "Marketing Team Skills se instala como plugin de Claude Code con `/plugin marketplace add ummydev/marketing-team-skills`, o en Claude Code, Codex y otros agentes con `npx skills add`.",
      },
      {
        q: "¿También puedo usar Codex para marketing?",
        a: "Sí. Pon el brief del rol en AGENTS.md en lugar de CLAUDE.md; las skills y la configuración son las mismas.",
      },
      {
        q: "¿En qué se diferencia un empleado de marketing de IA de una herramienta de automatización de marketing?",
        a: "Las herramientas de automatización ejecutan los pasos que tú montas. Un empleado de IA decide qué hacer a continuación en función de un objetivo, hace el trabajo en tu web y tus herramientas e informa, según un horario.",
      },
      {
        q: "¿Publicará en redes sociales sin mí?",
        a: "Solo si se lo permites. Recomendamos borradores para revisión: el empleado los pone en el tablero y espera tu visto bueno.",
      },
    ],
  },
  cta: {
    title: "Dale a tu equipo de marketing empleados de IA que no fallan ni un día.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Escrito el 10 de noviembre de 2026, a partir de cómo trabajan los empleados de marketing de Crewmark.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con OpenAI y sin su respaldo. Claude, Claude Code y Codex son marcas de sus titulares.",
};
