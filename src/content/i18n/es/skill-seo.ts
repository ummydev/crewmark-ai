import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# marketingskills de Corey Haines: solo las skills de SEO
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (dentro de Claude Code)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# Tus datos reales de Search Console (seo de Ian Nuttall, MCP alojado)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# La skill de SEO de Addy Osmani basada en Lighthouse
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (la nuestra): rutinas diarias de SEO
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Mejores skills de Claude para SEO (2026): auditorías, GEO, keywords",
    description:
      "Las mejores skills de Claude Code para SEO y búsqueda con IA, comparadas a partir de sus repositorios: seo-audit y ai-seo de Corey Haines, Claude SEO, GEO-SEO Claude, MCPs de Search Console, SE Ranking y más, con número de instalaciones y comandos.",
  },
  breadcrumb: "Skills de SEO",
  parent: { name: "Skills de Claude", href: "/skills" },
  hero: {
    kicker: "Skills de Claude · SEO",
    title: "Las mejores skills de Claude para SEO",
    lead: "Una skill de SEO es un archivo SKILL.md que enseña a Claude Code (o a Codex, Cursor y otros agentes) a hacer una parte del trabajo de búsqueda: auditar una web, planificar páginas, escribir schema o conseguir que te citen en la búsqueda con IA. Hay dos tipos. Las skills de método son checklists y playbooks gratuitos que no necesitan claves. Las skills de datos conectan el agente a Search Console, DataForSEO, SE Ranking o Ahrefs a través de un servidor MCP, para que trabaje con cifras reales en lugar de suposiciones. Una buena configuración tiene una de cada. Estas son las que vale la pena instalar en 2026, según el repositorio de cada proyecto.",
    cta: "Empezar",
    secondary: "Comparar las skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Recomendaciones rápidas",
      points: [
        "Un comienzo seguro: marketingskills de Corey Haines. Sus seo-audit, ai-seo y programmatic-seo son las tres skills de SEO más instaladas en skills.sh.",
        "Una auditoría completa con un comando: Claude SEO. `/seo audit <url>` lanza hasta 17 agentes especializados por la web y devuelve un plan priorizado.",
        "Búsqueda con IA (GEO): GEO-SEO Claude para auditorías al estilo de agencia e informes en PDF, o GEO Optimizer para una puntuación de preparación de 0 a 100 que puedes ejecutar en CI.",
        "Tus propias cifras: seo de Ian Nuttall, un servidor MCP y una CLI gratuitos para Search Console; las skills de SE Ranking si ya pagas SE Ranking.",
        "SEO técnico de manual: la skill seo de Addy Osmani, basada en las auditorías de Lighthouse y las directrices de Google.",
        "Hacer SEO cada día, no una sola vez: Marketing Team Skills (la nuestra) cubre elegir palabras clave que una web nueva puede ganar, una página por palabra clave, envíos al índice y un informe diario.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de SEO para Claude Code comparadas",
      text: [
        "Estrellas y licencias de la API de GitHub a 8 de noviembre de 2026, redondeadas. En los repositorios con muchas skills, las estrellas son de todo el repositorio.",
      ],
      headers: ["Skill", "Ideal para", "Requiere", "Estrellas", "Licencia"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines): seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "Auditorías, búsqueda con IA, páginas a escala y schema, como métodos", "Nada; cualquier agente vía CLI de skills", "~59k (repo)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "Auditorías de toda la web con agentes en paralelo: técnica, E-E-A-T, schema, GEO, local", "Claude Code 1.0.33+; `/seo setup` añade su propio Python y un navegador headless", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "Auditorías GEO, comprobaciones de crawlers de IA e informes en PDF para clientes", "Python 3.10+, Git; se instala con un script de shell", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "SEO, GEO y Google Ads a partir de datos en vivo de Search Console, GA4 y Ads", "Iniciar sesión en el MCP alojado de NotFair", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "SEO técnico y on-page a partir de Lighthouse y las directrices de Google Search", "Nada; Lighthouse o el MCP de Chrome DevTools para comprobaciones en vivo", "~3k (repo)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "Posts de blog investigados y verificados, puntuados antes de entregarlos", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "Una revisión rápida de SEO y GEO más schema, para fundadores en solitario", "Python 3", "~1.9k (repo)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "Una puntuación de preparación para IA de 0 a 100 y arreglos: robots.txt, llms.txt, JSON-LD", "Python 3.10+ y uv; tu propia clave de LLM para comprobar citas", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "26 comprobaciones de SEO y GEO de aprobado/suspenso para una URL", "Python 3.9+ en macOS o Linux", "~1k", "No indicada"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "Tus datos reales de Search Console, Analytics y Bing, más investigación de palabras clave", "Inicio de sesión de Google en el MCP alojado; clave de DataForSEO o Ahrefs para palabras clave", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "Conseguir que te recomienden los asistentes de IA chinos (Doubao, DeepSeek); en chino e inglés", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "Clusters de palabras clave, huecos de backlinks y cuota de voz en IA a partir de datos de SE Ranking", "Cuenta de SE Ranking (prueba de 14 días, después de pago)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (la nuestra)", "Trabajo SEO diario para una web nueva: palabras clave, páginas, envíos al índice, informes; además de vídeo corto", "Nada; cualquier agente vía CLI de skills", "Nueva (nov. 2026)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Las skills de SEO más instaladas",
      text: [
        "Instalaciones a través de la CLI de skills, según el registro de skills.sh a 8 de noviembre de 2026. Los plugins instalados con `/plugin install`, como Claude SEO, casi no aparecen aquí, así que tómalas como un mínimo.",
      ],
      points: [
        "seo-audit (marketingskills): unas 249.000",
        "ai-seo (marketingskills): unas 160.000",
        "programmatic-seo (marketingskills): unas 158.000",
        "site-architecture (marketingskills): unas 130.000",
        "schema (marketingskills): unas 86.000",
        "seo-geo (opc-skills): unas 56.000",
        "seo (web-quality-skills de Addy Osmani): unas 54.000",
        "seo (Ian Nuttall): unas 24.000",
        "seo (la skill principal de Claude SEO): unas 10.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Code para SEO",
      steps: [
        {
          title: "Instala una skill de método",
          text: "Elige las skills de SEO de marketingskills o Claude SEO, no las dos: cubren las mismas auditorías y no coincidirán. Añade la skill de Addy Osmani solo si quieres además comprobaciones técnicas al estilo de Lighthouse.",
          code: install,
        },
        {
          title: "Conecta datos reales",
          text: "Sin datos, las ideas de palabras clave de un agente son suposiciones. Conecta Search Console (seo de Ian Nuttall o `/seo google` de Claude SEO) y una fuente de palabras clave como DataForSEO, Ahrefs o SE Ranking si necesitas el volumen de búsqueda.",
        },
        {
          title: "Audita y luego arregla por orden",
          text: "Ejecuta la auditoría sobre tu propia web, pide al agente que arregle los primeros puntos y vuelve a pasar las mismas comprobaciones. Los cambios de indexación y de posiciones aparecen en Search Console días o semanas después, no durante la sesión.",
        },
        {
          title: "Conviértelo en una rutina",
          text: "El SEO da resultados repitiendo el mismo ciclo cada semana: elegir una palabra clave, escribir la página, enviarla al índice, leer las cifras. Deja el ciclo por escrito en CLAUDE.md o en una skill y ejecútalo según un horario. Consulta [cómo crear un agente de SEO con IA](/blog/ai-seo-agent).",
        },
      ],
      source: { label: "Fuente: marketingskills de Corey Haines", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "Qué usa nuestro agente de SEO en crewmark.ai",
      text: [
        "El SEO de Crewmark lo hace un empleado de IA: una sesión de Claude Code con el [rol de especialista SEO](/ai-employees/seo-specialist), que trabaja por turnos con un heartbeat. Su repositorio tiene instaladas 25 skills de Corey Haines, además de nuestras Marketing Team Skills.",
      ],
      points: [
        "El 7 de noviembre de 2026 ejecutó las skills de auditoría de marketingskills sobre crewmark.ai. La auditoría señaló que la web no tenía precios públicos ni página de privacidad; una [página de precios](/pricing) se publicó al día siguiente.",
        "Cada día elige palabras clave del autocompletado de Google y de Search Console (keyword-research), escribe una página por palabra clave (seo-page), envía las URLs nuevas a IndexNow, Bing y Google (index-push) y publica un informe diario (seo-daily-report).",
        "La web es nueva, así que todavía no podemos mostrar resultados de posicionamiento. Añadiremos cifras de Search Console a esta página cuando haya algunas que merezca la pena enseñar.",
      ],
    },
    {
      kind: "text",
      title: "Qué saber antes de instalar",
      points: [
        "Las skills de datos envían tus datos a algún sitio: seo de Ian Nuttall, NotFair y Ryze se conectan a través de sus servidores MCP alojados, y SE Ranking y DataForSEO cobran por crédito. Las ejecuciones grandes de SE Ranking pueden gastar miles de créditos, según su README.",
        "GEO-SEO Claude y Agentic SEO Skill se instalan con `curl ... | bash`. Descarga el script y léelo antes de ejecutarlo, como recomienda el README de Claude SEO para su propio instalador.",
        "No dejes que una skill compre enlaces. seo-skills de Illyism incluye linkdr, que compra backlinks del servicio del autor; los enlaces pagados que transmiten autoridad incumplen las políticas contra el spam de Google.",
        "Las cifras de resultados de los README, como aumentos de tráfico, son afirmaciones de los propios autores. Los 10.8K clics en Search Console en 12 semanas que cuenta Claude SEO son de su propia web.",
        "Algunas skills gratuitas venden algo al lado: Claude SEO y GEO-SEO Claude promocionan comunidades de pago, y GEO Optimizer tiene un plan Pro desde $19 al mes. Las skills en sí son de código abierto.",
        "Anthropic no publica ninguna skill de SEO; ninguna de estas es oficial.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dales a las skills un especialista SEO que trabaje cada día",
      text: [
        "Una skill hace que una sesión sea mejor en SEO. Crewmark convierte Claude Code o Codex en un especialista SEO de IA con un objetivo en cifras, como un 10% más de clics en Search Console al mes, horario laboral y un tablero de páginas por escribir; se despierta con un heartbeat, toma la siguiente issue y te escribe cuando necesita una aprobación.",
      ],
      steps: [
        {
          title: "Contrata el rol de especialista SEO",
          text: "Su brief, su objetivo y su rutina diaria vienen configurados; consulta el [especialista SEO de IA](/ai-employees/seo-specialist) y el [agente de marketing de IA](/ai-employees/marketing-agent).",
        },
        {
          title: "Instala tus skills de SEO en el repositorio",
          text: "El empleado usa las skills de `.claude/skills` como cualquier sesión. Empieza por [Marketing Team Skills](/skills).",
        },
        {
          title: "Revisa páginas e informes, no prompts",
          text: "Aprueba las páginas nuevas y lee el informe diario en el tablero. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Claude Code para SEO con skills" },
  mid: {
    title: "¿Quieres un especialista SEO que ejecute estas skills cada día?",
    text: "El especialista SEO de IA de Crewmark trabaja por turnos con un heartbeat, escribe páginas, las envía al índice e informa cada día.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las skills de SEO de Claude",
    items: [
      {
        q: "¿Cuál es la mejor skill de Claude para SEO?",
        a: "Para la mayoría de las webs, seo-audit, ai-seo y programmatic-seo de Corey Haines, las skills de SEO más instaladas en skills.sh. Para una auditoría completa con agentes en paralelo, Claude SEO. Añade una fuente de datos como un MCP de Search Console para que el agente trabaje con tus cifras reales.",
      },
      {
        q: "¿Hay una skill oficial de Claude para SEO?",
        a: "No. El repositorio de skills de Anthropic no tiene ninguna skill de SEO a noviembre de 2026. Claude SEO es un proyecto independiente de código abierto de Agrici Daniel, no un producto de Anthropic.",
      },
      {
        q: "¿Qué diferencia hay entre Claude SEO y marketingskills?",
        a: "Claude SEO es un único plugin pensado para auditorías: 26 sub-skills y 19 agentes detrás de un comando `/seo`, con sus propias herramientas de Python y un navegador headless. marketingskills es una biblioteca de skills de método independientes para todo el marketing; instalas solo las de SEO que necesites, y no requieren configuración.",
      },
      {
        q: "¿Puede Claude Code investigar palabras clave?",
        a: "Puede elegir y agrupar palabras clave, pero por sí solo no ve el volumen de búsqueda. Conecta una fuente de datos: Search Console para las consultas en las que ya apareces, y DataForSEO, Ahrefs o SE Ranking para el volumen. El autocompletado de Google muestra qué busca la gente, no cuánta.",
      },
      {
        q: "¿Qué diferencia hay entre una skill de SEO y una de GEO?",
        a: "Las skills de SEO buscan posicionar en Google y Bing; las de GEO (generative engine optimization) buscan que te citen ChatGPT, Perplexity, Gemini y los AI Overviews de Google, con comprobaciones como el acceso de los crawlers de IA, llms.txt y respuestas citables. La mayoría de los paquetes ya hacen las dos cosas.",
      },
      {
        q: "¿Funcionan estas skills de SEO con Codex y Cursor?",
        a: "La mayoría sí. Las skills instaladas con la CLI de skills funcionan en Codex, Cursor y decenas de agentes más, y las basadas en MCP, como seo de Ian Nuttall, se conectan a cualquier agente compatible con servidores MCP remotos.",
      },
    ],
  },
  cta: {
    title: "Pon un especialista SEO en tu tablero, con las skills en las que confías.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el repositorio de GitHub de cada skill, la API de GitHub y el registro de skills.sh el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con los autores de las skills listadas y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
