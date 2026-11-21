import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /use-cases/daily-seo-report; the English master is src/content/use-cases/daily-seo-report.ts.

const brief = `# Rol: responsable del informe SEO
Se ejecuta desde la issue recurrente "Informe SEO diario", cada día a las 18:30.

1. Search Console, últimos 7 días: impresiones, clics, posición media.
   Lee las tablas de consultas y de páginas. Anota las consultas del top 10,
   las páginas cuyas impresiones suben y las páginas con impresiones
   pero sin clics.
2. Analítica, últimos 7 días: visitantes únicos, visitantes desde búsqueda,
   visitantes desde asistentes de IA, principales páginas de entrada desde búsqueda.
3. Compara con el objetivo semanal: 10.000 impresiones, 500 clics,
   2.000 visitantes únicos.
4. Elige una cosa que funcione y apuesta más por ella hoy
   (una página relacionada, una FAQ, enlaces internos o una traducción).
5. Publica el informe como comentario en la issue, enumera las decisiones
   que necesitas de mí y marca la issue como hecha.

Reglas
- Acceso de solo lectura a Search Console y a la analítica.
- Ignora las consultas entre comillas o con largas listas de -site: son
  rank trackers, no personas.`;

const schedule = `# Una issue recurrente, asignada a tu empleado de SEO (CLI de Crewmark)
crewmark issues create --title "Informe SEO diario" --assignee "<empleado>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const copy: GuideCopy = {
  meta: {
    title: "Informe SEO diario con Claude Code: configuración de un empleado de IA",
    description:
      "Haz que Claude Code o Codex escriba tu informe SEO cada día: cifras de Search Console y de la analítica, la distancia a tu objetivo, qué funciona y una cosa hecha al respecto. El brief del rol para copiar, los accesos que necesita y cómo programarlo.",
  },
  breadcrumb: "Informe SEO diario",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Marketing",
    title: "Un informe SEO diario escrito por un empleado de IA con Claude Code",
    lead: "Cada tarde, un empleado de IA que funciona con tu propio Claude Code o Codex saca los últimos siete días de Search Console y de tu analítica, los compara con tu objetivo, encuentra las consultas y páginas que empiezan a funcionar, hace una cosa para impulsarlas más y publica el informe donde trabaja tu equipo. Es la rutina que el propio empleado de SEO de Crewmark ejecuta cada día; abajo tienes el brief para copiar, los accesos que necesita y cómo ponerlo en un horario.",
    cta: "Empezar",
    secondary: "Copiar el brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué cubre el informe",
      points: [
        "Búsqueda: impresiones, clics y posición media de los últimos siete días, con las consultas y páginas que hay detrás.",
        "Qué funciona: consultas en el top 10, páginas cuyas impresiones suben y páginas con impresiones pero sin clics, lo que suele indicar que el título o el contenido no encajan con la búsqueda.",
        "Visitantes: visitantes únicos, visitantes desde buscadores y visitantes desde asistentes de IA como ChatGPT y Perplexity, con las páginas a las que llegaron.",
        "La distancia al objetivo: las cifras de esta semana frente a la meta semanal.",
        "Qué hizo hoy y las decisiones que necesita de ti.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "Un ejemplo: nuestro propio informe, 10 de noviembre de 2026",
      text: [
        "Este es el principio del informe que publicó el empleado de SEO de Crewmark para crewmark.ai, una web con pocas semanas de vida.",
      ],
      headers: ["Métrica", "Últimos 7 días", "Objetivo semanal"],
      rows: [
        ["Impresiones en Search Console", "537 (frente a 309 en el informe anterior)", "10.000"],
        ["Clics en Search Console", "2", "500"],
        ["Visitantes únicos", "93, de ellos 16 desde búsqueda y 0 desde asistentes de IA", "2.000"],
        ["Funciona", "“base44 superagent” en la posición 4 sin clics: llegaba a una página general", "-"],
        ["Qué se hizo", "Escribió una página dedicada a Base44 Superagent ese mismo día", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar un informe SEO diario con Claude Code o Codex",
      steps: [
        {
          title: "Dale acceso de solo lectura a las cifras",
          text: "Para Search Console: la API de Search Console con una cuenta de servicio de solo lectura, un servidor MCP o un navegador que el agente pueda manejar mientras tienes la sesión iniciada. Para la analítica: la CLI, la API o el servidor MCP de tu herramienta; nuestro empleado usa la CLI de PostHog. Con acceso de lectura le basta.",
        },
        {
          title: "Copia el brief del rol",
          text: "Ponlo en CLAUDE.md para Claude Code o en AGENTS.md para Codex, y cambia el objetivo por el tuyo. Las [Marketing Team Skills](/skills) de código abierto incluyen una skill seo-daily-report con los mismos pasos.",
          code: brief,
        },
        {
          title: "Ponlo en un horario",
          text: "Convierte el informe en una issue recurrente, para que vuelva al empleado cada día a la misma hora y puedas ver si el de hoy está hecho.",
          code: schedule,
        },
        {
          title: "Léelo donde ya trabajas",
          text: "El informe llega como comentario en la issue. Cuando necesita algo de ti, marca la issue como Requiere acción y pregunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "Convierte el informe en acción",
      text: [
        "Un informe que solo describe las cifras no las mueve. Lo útil es la regla de qué hacer después, y está en el brief:",
      ],
      points: [
        "Una consulta en el top 10 o en subida: escribe el long tail relacionado (otros usos de la misma herramienta, “vs”, alternativas, errores, plataformas), añade una FAQ, enlázala desde páginas que ya reciben visitas o tradúcela a un idioma en el que ya se busca.",
        "Impresiones pero sin clics: la página no encaja con la búsqueda. Cámbiale el título por la consulta que usa la gente, o escribe una página para esa consulta.",
        "Términos genéricos atascados por detrás de la posición 50: deja de dedicarles tiempo; una web nueva gana primero el long tail.",
        "Anota la decisión y el resultado en un registro, para que el informe de mañana pueda comprobar si funcionó.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Contrata al empleado de SEO que lo escribe",
      text: [
        "El informe es una parte del día de un especialista SEO. Crewmark convierte tu Claude Code o Codex en ese empleado, con un rol, un objetivo en cifras, horario laboral y un heartbeat.",
      ],
      steps: [
        {
          title: "Empieza por el rol",
          text: "El [especialista SEO de IA](/ai-employees/seo-specialist) viene con sus objetivos, su rutina diaria y su brief.",
        },
        {
          title: "Añade el informe como issue recurrente",
          text: "Se despierta con su heartbeat, ve que toca el informe y lo publica.",
        },
        {
          title: "Mira el resto del marketing",
          text: "Hay más trabajos para equipos de marketing en [Claude Code para marketing](/for/marketing); el siguiente caso de uso es un [resumen semanal de la competencia](/use-cases/weekly-competitor-digest).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar un informe SEO diario con Claude Code o Codex" },
  mid: {
    title: "¿Quieres el informe, y el trabajo que hay detrás, cada día?",
    text: "El especialista SEO de Crewmark funciona con tu Claude Code o Codex y publica su informe según un horario.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puede Claude Code leer Google Search Console?",
        a: "Sí, a través de la API de Search Console con una cuenta de servicio, un servidor MCP para Search Console o un navegador que pueda manejar mientras tienes la sesión iniciada. Dale acceso de solo lectura.",
      },
      {
        q: "¿Cómo programo un informe SEO diario con Claude Code?",
        a: "Claude Code no arranca solo; algo tiene que despertarlo. Usa una tarea recurrente o un heartbeat (consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code)) o ejecútalo como empleado de Crewmark con una issue recurrente.",
      },
      {
        q: "¿Qué debería incluir un informe SEO diario?",
        a: "Impresiones, clics y posición de siete días con las consultas y páginas que hay detrás; qué está en el top 10 o en subida; visitantes desde búsqueda y desde asistentes de IA; la distancia al objetivo; qué se hizo hoy; y las decisiones pendientes.",
      },
      {
        q: "¿También funciona con Codex?",
        a: "Sí. Pon el mismo brief en AGENTS.md; los accesos que necesita son los mismos.",
      },
      {
        q: "¿Por qué mirar siete días en lugar de uno?",
        a: "Los datos de Search Console llegan con uno o dos días de retraso y los días sueltos tienen mucho ruido. Siete días muestran la tendencia; el informe diario simplemente la lee cada día.",
      },
    ],
  },
  cta: {
    title: "Recibe el informe SEO cada día, y el trabajo que pide.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Escrito el 10 de noviembre de 2026, a partir de la rutina que el propio empleado de SEO de Crewmark ejecuta cada día.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI, Google ni PostHog y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
