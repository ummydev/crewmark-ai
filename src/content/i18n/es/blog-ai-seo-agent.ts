import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: Encuentra el tema SEO del día. Úsala al empezar cada sesión de trabajo de SEO.
---

1. Revisa los changelogs y las noticias de los productos que usan nuestros lectores.
2. Para cada candidato, consulta las sugerencias del autocompletado de Google y
   anota las variantes long tail que la gente ya escribe.
3. Quédate solo con los temas relacionados con nuestro producto que todavía no
   tienen una buena respuesta en la primera página.
4. Escribe el tema elegido, el motivo y los descartados en
   docs/seo/log.md, y después redacta la página.`;

const claudeMd = `# Reglas de SEO
- Datos solo de la documentación oficial; añade la fecha en que lo comprobaste.
- Cada página empieza con una definición de una frase, luego pasos,
  una tabla comparativa y unas preguntas frecuentes.
- Una keyword principal por URL; revisa antes docs/seo/keywords.md.
- Tras un deploy: avisa a IndexNow, solicita la indexación y regístralo.`;

export const copy: GuideCopy = {
  meta: {
    title: "Agente de IA para SEO: cómo crearlo con Claude Code",
    description:
      "Qué puede hacer un agente de IA para SEO, el flujo diario que funciona y cómo crear uno con Claude Code o Codex: reglas en CLAUDE.md, skills, MCP, IndexNow y un horario. Basado en el agente que lleva el SEO de este sitio.",
  },
  breadcrumb: "Agente de IA para SEO",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Empleados de IA",
    title: "Agente de IA para SEO (AI SEO agent): cómo crear uno que trabaje cada día",
    lead: "Un agente de IA para SEO es un agente de programación, como Claude Code o Codex, al que se le encarga hacer crecer el tráfico orgánico: encuentra temas que la gente empieza a buscar, escribe y traduce páginas, las publica, pide a los buscadores que las indexen y comprueba qué ha cambiado. El SEO de este sitio funciona así, a cargo de un empleado de IA en Crewmark. Esta guía muestra el flujo de trabajo que sigue, las reglas y skills que lo mantienen honesto, las herramientas que necesita y cómo montar el tuyo.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué puede hacer un agente de IA para SEO",
      points: [
        "Encontrar temas: leer changelogs y noticias de productos, y después consultar el autocompletado de Google y Google Trends para ver las preguntas que la gente ya escribe.",
        "Evitar que tus propias páginas se canibalicen: mantener un mapa de keywords con una keyword principal por URL y revisarlo antes de escribir.",
        "Escribir páginas que responden primero a la pregunta: una definición de una frase, pasos, una tabla comparativa y unas preguntas frecuentes, algo que también encaja con los asistentes de IA que citan páginas.",
        "Traducir y publicar: generar la página en todos los idiomas que ofreces, probarla en local y pasarla para el despliegue.",
        "Conseguir que se indexe: avisar a IndexNow, volver a enviar el sitemap y solicitar la indexación.",
        "Medir y ajustar: leer Search Console y la analítica, y reescribir títulos o añadir enlaces internos donde las páginas tienen impresiones pero no clics.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo crear un agente de IA para SEO con Claude Code",
      steps: [
        {
          title: "Escribe las reglas en CLAUDE.md",
          text: "Pon lo innegociable donde el agente lo lee en cada sesión: de dónde pueden salir los datos, cómo se estructuran las páginas y qué hacer después de cada deploy. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
          code: claudeMd,
        },
        {
          title: "Convierte la rutina diaria en una skill",
          text: "Una skill en `.claude/skills/` guarda la rutina paso a paso y solo se carga cuando se usa. Empieza cada sesión con ella. Consulta [skills de Claude Code](/blog/claude-code-skills).",
          code: skill,
        },
        {
          title: "Guarda un mapa de keywords y un registro en el repositorio",
          text: "Dos archivos Markdown dan para mucho: `keywords.md` (keyword → URL → estado) evita que dos páginas compitan por la misma búsqueda, y `log.md` registra qué se eligió y por qué, para que la siguiente sesión continúe en lugar de empezar de cero.",
        },
        {
          title: "Dale las herramientas que necesita",
          text: "Búsqueda y descarga web para investigar, el código del sitio y un servidor de desarrollo local para probar páginas, un servidor MCP o una CLI para tu analítica, y un script para IndexNow. Usa CLIs cuando existan: gastan menos tokens. Consulta [MCP en Claude Code](/blog/claude-code-mcp).",
        },
        {
          title: "Protege los pasos arriesgados",
          text: "La publicación debería pasar por una revisión o por un responsable de despliegues, nunca salir directamente del agente. Usa reglas de permisos y [hooks](/blog/claude-code-hooks) para todo lo que nunca debe ocurrir, y mantén los secretos fuera de los prompts y de los archivos.",
        },
        {
          title: "Ponle un horario",
          text: "El SEO premia la constancia, así que el agente debería arrancar solo cada día laborable. Usa `/loop` o tareas programadas para un único prompt recurrente, o dale un heartbeat y un backlog; consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
      ],
      source: { label: "Fuente: documentación de IndexNow", href: indexnow },
    },
    {
      kind: "table",
      title: "Un flujo de trabajo diario de SEO con IA",
      text: [
        "Esta es la lista de comprobación que recorre cada día el empleado de IA que lleva el SEO de este sitio, con un informe escrito al final.",
      ],
      headers: ["Paso", "Qué hace el agente", "Resultado"],
      rows: [
        ["1. Buscar", "Revisa changelogs, blogs de proveedores, GitHub y noticias de los últimos 1–3 días; extrae datos del autocompletado y de Trends", "Una lista corta de temas candidatos"],
        ["2. Verificar", "Comprueba que el tema tiene relación con el producto, que la demanda crece y que la primera página no tiene una buena respuesta", "Un tema elegido, con el motivo registrado"],
        ["3. Escribir", "Redacta solo a partir de fuentes oficiales y luego traduce", "Una página en todos los idiomas"],
        ["4. Publicar", "Comprueba los tipos, renderiza en local y abre una solicitud de despliegue", "Una página publicada en el sitio"],
        ["5. Indexar", "Avisa a IndexNow, vuelve a enviar el sitemap y solicita la indexación en Search Console y Bing", "Buscadores avisados"],
        ["6. Informar", "Registra el tráfico, la distancia al objetivo y lo que se hizo", "Un informe diario para el equipo"],
      ],
    },
    {
      kind: "text",
      title: "Lo que hemos aprendido llevando uno",
      points: [
        "Comprueba la demanda antes de escribir: una palabra de moda en redes sociales puede ser una búsqueda pequeña; Google Trends llegó a mostrar un término relacionado que se buscaba unas 30 veces más que el que estaba en boca de todos.",
        "Datos solo de fuentes primarias: los subagentes de investigación a veces leen mal una página; vuelve a abrir la fuente oficial antes de publicar cualquier cosa sorprendente.",
        "En un sitio nuevo, la indexación es el cuello de botella: solicitar la indexación metió páginas nuevas en Google en cerca de un día, pero las cuotas diarias se agotan rápido.",
        "Muchos idiomas multiplican las páginas, no el esfuerzo: una página en inglés bien estructurada se convierte en nueve con un paso de traducción.",
        "La constancia gana a los arrebatos: el objetivo es un ritmo diario que el agente mantenga sin que se lo pidan.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Contrata un especialista SEO de IA en lugar de programarlo",
      text: [
        "Crewmark tiene un especialista SEO listo para contratar: trabaja en tu sesión de Claude Code, Codex, DeepSeek Harness u OpenCode, se despierta con un heartbeat durante el horario laboral, toma la siguiente tarea de un tablero e informa de lo que ha hecho, igual que se lleva el SEO de este sitio.",
      ],
      steps: [
        {
          title: "Elige el rol de especialista SEO",
          text: "Sus skills, su objetivo y su horario vienen configurados; cambia el objetivo por tu cifra, como los clics semanales en Search Console. Consulta el [rol de especialista SEO con IA](/ai-employees/seo-specialist) para ver sus objetivos, su rutina y su brief.",
        },
        {
          title: "Conecta tu proyecto",
          text: "Ejecuta el comando de configuración en el repositorio del sitio para que pueda escribir páginas, probarlas y abrir solicitudes de despliegue.",
        },
        {
          title: "Revisa, no lo vigiles",
          text: "Comenta en sus tareas y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees) y compara [plataformas de empleados de IA](/blog/best-ai-employee-platforms).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Crear un agente de IA para SEO con Claude Code" },
  mid: {
    title: "¿Quieres el agente de SEO sin tener que construirlo?",
    text: "El especialista SEO de Crewmark funciona con tu Claude Code o Codex, se despierta con un heartbeat y va resolviendo un backlog de SEO.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre agentes de IA para SEO",
    items: [
      {
        q: "¿Qué es un agente de IA para SEO?",
        a: "Un agente de IA, normalmente un agente de programación como Claude Code o Codex, al que se le encarga de forma continua hacer crecer el tráfico orgánico: encontrar temas, escribir y publicar páginas, conseguir que se indexen y medir los resultados.",
      },
      {
        q: "¿Puede un agente de IA hacer SEO por su cuenta?",
        a: "Buena parte del trabajo diario, sí: investigación, redacción, traducción, comprobaciones técnicas y solicitudes de indexación. La publicación, las cuentas y cualquier cosa irreversible deberían seguir pasando por una persona o por un responsable de despliegues.",
      },
      {
        q: "¿Hay algún agente de IA para SEO gratis?",
        a: "Puedes crear uno sobre un agente que ya pagas, como Claude Code con un plan de Claude o Codex con ChatGPT, usando herramientas gratuitas como el autocompletado de Google, Google Trends, Search Console e IndexNow.",
      },
      {
        q: "¿Qué herramientas necesita un agente de IA para SEO?",
        a: "Búsqueda y descarga web, acceso al código del sitio y una forma de probar páginas, acceso de lectura a Search Console y a la analítica, y una forma de avisar a los buscadores, como IndexNow.",
      },
      {
        q: "¿Cómo evito que un agente de IA para SEO publique datos erróneos?",
        a: "Exige en sus reglas fuentes oficiales y una fecha de comprobación, haz que vuelva a abrir las fuentes antes de publicar afirmaciones sorprendentes y haz que la publicación pase por una revisión.",
      },
      {
        q: "¿Posicionan las páginas escritas por IA?",
        a: "Las páginas posicionan por su utilidad, no por quién las escribe. Lo que debe producir un agente de IA para SEO son páginas que respondan primero a una pregunta real y en auge, con pasos y comparativas precisos.",
      },
      {
        q: "¿Uso n8n o un agente de programación para SEO?",
        a: "Las herramientas de flujos de trabajo encajan con procesos fijos; un agente de programación encaja con trabajo que requiere criterio y cambios de código, como escribir páginas en un repositorio y probarlas.",
      },
    ],
  },
  cta: {
    title: "Dale a tu sitio un compañero de SEO que nunca olvida la lista de comprobación.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Flujo de trabajo tal como lo ejecuta el empleado de IA que lleva el SEO de este sitio; detalles de Claude Code e IndexNow comprobados con su documentación el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI ni Google y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
