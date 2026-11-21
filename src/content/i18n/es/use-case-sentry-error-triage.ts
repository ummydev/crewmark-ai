import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code: añade el servidor MCP alojado de Sentry y luego inicia sesión con OAuth
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex: a través del puente mcp-remote
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# Rol: triaje de errores
Se ejecuta desde la issue recurrente "Triaje de Sentry", los días laborables a las 9:00 y a las 14:00.

1. En Sentry, lista las issues sin resolver vistas por primera vez o que han
   vuelto a aparecer desde la última ejecución, en el entorno de producción.
2. Para cada una: busca en el tablero si ya hay una issue (busca el ID
   de la issue de Sentry). Si la hay, añade el nuevo recuento como comentario.
3. Si no, abre una issue: título a partir del error, usuarios y eventos
   afectados, primera y última aparición, los primeros frames del stack, la versión
   en la que empezó y tu mejor hipótesis sobre la causa, marcada como hipótesis.
4. Prioridad: Urgent si bloquea el registro, los pagos o los datos; High si
   afecta a más del 1% de las sesiones; si no, Medium.
5. Si el arreglo es pequeño y obvio, tómalo como tu siguiente issue y
   abre una pull request con un test. No hagas merge.
6. Nunca resuelvas, ignores ni borres nada en Sentry por tu cuenta.`;

export const copy: GuideCopy = {
  meta: {
    title: "Triaje diario de errores de Sentry con Claude Code o Codex",
    description:
      "Haz que un empleado de IA con Claude Code o Codex lea los errores nuevos de Sentry dos veces al día, los registre en tu tablero con el stack, el impacto y una causa probable, y abra pull requests con arreglos para los pequeños. La configuración del MCP de Sentry y el brief del rol para copiar.",
  },
  breadcrumb: "Triaje de errores de Sentry",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Ingeniería",
    title: "Triaje de errores de Sentry hecho por un empleado de IA con Claude Code o Codex",
    lead: "Los errores nuevos se acumulan en Sentry más rápido de lo que nadie los lee. Un empleado de IA con tu propio Claude Code o Codex puede revisar Sentry según un horario, saltarse lo que ya está en el tablero, registrar cada error nuevo como issue con el stack trace, los usuarios afectados y una causa probable, y encargarse él mismo de los arreglos pequeños, abriendo una pull request para revisión. Aquí tienes cómo conectar el servidor MCP de Sentry, el brief para copiar y las reglas que lo mantienen seguro.",
    cta: "Empezar",
    secondary: "Conectar Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué hace el empleado",
      points: [
        "Lee las issues de Sentry sin resolver que son nuevas o han vuelto a aparecer desde su última ejecución.",
        "Elimina duplicados contrastando con tu tablero, así un error ruidoso recibe un comentario y no diez issues nuevas.",
        "Registra una issue útil: impacto, primera y última aparición, la versión en la que empezó, los primeros frames del stack y una causa probable, claramente marcada como hipótesis.",
        "Asigna una prioridad según reglas que escribes tú, por ejemplo que todo lo que bloquee el registro o los pagos es urgente.",
        "Arregla los obvios: una comprobación de null, una clave de traducción que falta, una redirección mal hecha. Abre una pull request con un test y espera la revisión.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar el triaje de Sentry con Claude Code o Codex",
      steps: [
        {
          title: "Conecta el servidor MCP de Sentry",
          text: "Sentry aloja un servidor MCP en mcp.sentry.dev con OAuth, así que no hay nada que instalar ni ningún token que pegar. Añádelo, arranca el agente e inicia sesión en Sentry cuando te lo pida. Le da al agente las issues, los errores, los proyectos y el análisis de Seer de Sentry.",
          code: connect,
        },
        {
          title: "Copia el brief del rol",
          text: "En CLAUDE.md para Claude Code o en AGENTS.md para Codex, en el repositorio del que vienen los errores, para que pueda leer el código que hay detrás de cada frame del stack.",
          code: brief,
        },
        {
          title: "Ponlo en un horario",
          text: "Convierte el triaje en una issue recurrente, por ejemplo `--repeat \"weekdays at 9:00\"`, y añade otra por la tarde si tu volumen de errores lo pide.",
        },
        {
          title: "Revisa los arreglos",
          text: "Las pull requests con arreglos pasan por tu revisión habitual. Cuando el empleado no está seguro del impacto o de a quién le corresponde, marca la issue como Requiere acción y pregunta.",
        },
      ],
      source: { label: "Fuente: documentación del servidor MCP de Sentry", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "Reglas que lo mantienen seguro",
      points: [
        "Lee Sentry, escribe en el tablero. Resolver, ignorar o borrar en Sentry queda en manos de personas.",
        "Solo producción: apúntalo a tu entorno de producción para que no registre el ruido de staging.",
        "Una hipótesis es una hipótesis: la causa de cada issue se marca como hipótesis hasta que alguien la confirme.",
        "Nada de merges: los arreglos son pull requests con un test, nunca pushes directos.",
        "Datos personales: los eventos de Sentry pueden incluir datos de usuarios; limita la issue a recuentos e IDs, sin emails ni IPs.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un ingeniero que empieza el día con tus errores",
      text: [
        "El triaje es una issue recurrente natural para un ingeniero de software de IA. Crewmark convierte tu Claude Code o Codex en ese empleado, con horario laboral y un heartbeat.",
      ],
      steps: [
        {
          title: "Empieza por el rol",
          text: "El [ingeniero de software de IA](/ai-employees/software-engineer) toma issues de un tablero y abre pull requests.",
        },
        {
          title: "Añade el triaje como issue recurrente",
          text: "Hace el triaje cuando toca y después avanza con las issues que ha registrado.",
        },
        {
          title: "Más trabajos de ingeniería",
          text: "Consulta [Claude Code para ingeniería](/for/engineering) y [revisión de código con IA en cada pull request](/use-cases/pr-review).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar el triaje de errores de Sentry con Claude Code o Codex" },
  mid: {
    title: "¿Quieres los errores nuevos registrados y los pequeños arreglados antes del standup?",
    text: "Un ingeniero de Crewmark con tu Claude Code o Codex hace el triaje de Sentry según un horario y abre pull requests con arreglos.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo conecto Sentry a Claude Code?",
        a: "Ejecuta `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, arranca Claude Code e inicia sesión en Sentry con OAuth cuando te lo pida. Sentry aloja el servidor, así que no hay nada que instalar.",
      },
      {
        q: "¿El servidor MCP de Sentry funciona con Codex?",
        a: "Sí, a través del puente mcp-remote: `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "¿Puede el agente resolver issues de Sentry?",
        a: "Se le puede permitir, pero recomendamos que no lo haga: deja que registre y arregle, y que resolver e ignorar siga en manos de personas para que nada quede oculto por error.",
      },
      {
        q: "¿Con qué frecuencia debería ejecutarse el triaje?",
        a: "Dos veces los días laborables basta para la mayoría de los equipos; añade una ejecución cada hora durante un lanzamiento. Cada ejecución consume el uso del plan de tu agente, así que no lo ejecutes cada pocos minutos.",
      },
      {
        q: "¿Adónde van las issues?",
        a: "Adonde tu equipo lleve el trabajo. Con Crewmark van al mismo tablero desde el que trabaja el empleado; si no, usa el servidor MCP o la CLI de tu gestor de tareas, como los de Linear o GitHub.",
      },
    ],
  },
  cta: {
    title: "Errores registrados y los pequeños arreglados antes de tu primer café.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación del servidor MCP de Sentry el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Sentry, Anthropic ni OpenAI y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
