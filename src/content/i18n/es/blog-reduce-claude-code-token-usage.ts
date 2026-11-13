import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

Cuando uses compact, céntrate en la salida de los tests y en los cambios de código.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Cómo reducir el consumo de tokens de Claude Code: 12 trucos | Crewmark",
    description:
      "Por qué Claude Code gasta tantos tokens y cómo reducirlo: revisa el consumo con /usage y /context, usa clear y compact, elige modelo y esfuerzo, recorta CLAUDE.md y MCP, y usa hooks, skills y subagentes.",
  },
  breadcrumb: "Reducir el consumo de tokens de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Cómo reducir el consumo de tokens de Claude Code (y dejar de chocar con los límites)",
    lead: "Claude Code envía toda la conversación en cada petición, así que el consumo de tokens crece con el contexto: una pregunta de una línea al final de una sesión larga cuesta mucho más que la misma pregunta en una sesión nueva. Esta guía muestra cómo ver en qué se van tus tokens y después doce cambios, sacados de la propia documentación de Anthropic, que reducen el consumo: desde `/clear` y `/compact` hasta elegir el modelo y el esfuerzo, recortar CLAUDE.md y los servidores MCP, y llevar el trabajo ruidoso a hooks, skills y subagentes.",
    cta: "Acceso anticipado",
    secondary: "Ir a los trucos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "Primero, mira en qué se van tus tokens",
      headers: ["Herramienta", "Qué muestra"],
      rows: [
        ["`/usage`", "Tokens de la sesión y coste estimado; en Pro, Max, Ultra, Team y Enterprise, barras de uso del plan, un desglose por skills, subagentes, plugins y servidores MCP, recomendaciones y tus tareas `/loop` más pesadas"],
        ["`/context`", "Qué está llenando ahora mismo la ventana de contexto"],
        ["Barra de estado", "El uso del contexto a la vista en todo momento, si la configuras"],
        ["Contador del spinner", "Los tokens de salida del turno actual, como `↓ 5.5k tokens`; no incluye tu contexto"],
        ["`/insights`", "Un informe HTML sobre cómo trabajas en tus sesiones recientes, con puntos de fricción y sugerencias"],
      ],
    },
    {
      kind: "text",
      title: "Por qué el consumo se dispara en una sesión larga",
      points: [
        "Contexto largo: cada petición lleva la conversación completa, y cada ronda de llamadas a herramientas envía otra petición. La caché abarata las relecturas, pero no las hace gratis.",
        "Fallos de caché: tu primer mensaje tras una pausa más larga que la vida de la caché vuelve a procesar todo el contexto.",
        "Lo que se ejecuta mientras no estás: tareas programadas de la sesión y `/loop`, mensajes de tus otras sesiones, comprobaciones de objetivos, resúmenes de sesión y compactación en reposo.",
        "Trabajadores en paralelo: cada subagente, agente de workflow y compañero de un agent team envía sus propias peticiones. Los agent teams usan unos 7x los tokens de una sesión normal cuando los compañeros trabajan en plan mode.",
        "La propia compactación: `/compact` tiene que leer la conversación que resume. `/clear` no cuesta nada.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "12 formas de reducir el consumo de tokens de Claude Code",
      steps: [
        {
          title: "Limpia entre tareas que no tienen relación",
          text: "`/clear` empieza una conversación nueva, así el contexto viejo deja de viajar contigo. Ejecuta antes `/rename` si quieres retomarla después con `/resume`.",
        },
        {
          title: "Compacta con instrucciones",
          text: "`/compact Focus on code samples and API usage` le dice a Claude qué conservar. También puedes dejar instrucciones fijas de compactación en CLAUDE.md.",
          code: compact,
        },
        {
          title: "Usa el modelo adecuado",
          text: "Sonnet resuelve la mayor parte del trabajo de código y cuesta menos que Opus; reserva Opus para la arquitectura y el razonamiento difícil. Cambia con `/model` y da a los subagentes sencillos `model: haiku`.",
        },
        {
          title: "Baja el esfuerzo en el trabajo sencillo",
          text: "Los tokens de razonamiento se facturan como salida y pueden llegar a decenas de miles por petición. Baja el nivel con `/effort` para las tareas rutinarias.",
        },
        {
          title: "Mantén CLAUDE.md corto",
          text: "Se carga completo en cada sesión. Quédate por debajo de unas 200 líneas y pasa las instrucciones de flujos concretos a skills, que solo se cargan cuando se usan. Mira la [guía de CLAUDE.md](/blog/claude-md) y [las skills de Claude Code](/blog/claude-code-skills).",
        },
        {
          title: "Recorta los servidores MCP",
          text: "Las definiciones de herramientas se cargan en diferido por defecto, pero cada servidor sigue añadiendo nombres e instrucciones. Desactiva los que no uses en `/mcp` y prefiere CLIs como `gh`, `aws` o `gcloud`, que no añaden un listado por herramienta.",
        },
        {
          title: "Filtra la salida ruidosa con un hook",
          text: "Un hook PreToolUse puede reescribir los comandos de test para quedarse solo con los fallos, y convertir decenas de miles de tokens de logs en unos cientos. La documentación de Anthropic incluye un script de filtrado listo para usar.",
          code: hook,
        },
        {
          title: "Delega el trabajo verboso en subagentes",
          text: "Ejecutar tests, leer documentación o procesar logs en un subagente deja la salida en su contexto; solo vuelve un resumen. Dales a esos subagentes un modelo más pequeño.",
        },
        {
          title: "Instala plugins de inteligencia de código",
          text: "En lenguajes tipados, un plugin de language server responde a «ir a la definición» en una sola llamada, en lugar de un grep y varias lecturas de archivos.",
        },
        {
          title: "Escribe prompts concretos",
          text: "«Añade validación de entrada a la función de login en auth.ts» lee unos pocos archivos; «mejora este código» lo recorre todo.",
        },
        {
          title: "Planifica primero, para pronto",
          text: "Usa el [plan mode](/blog/claude-code-plan-mode) en los cambios grandes para detectar una dirección equivocada antes de escribir código; pulsa Escape en cuanto Claude se desvíe y usa `/rewind` para volver a un checkpoint.",
        },
        {
          title: "Vigila lo que se ejecuta mientras no estás",
          text: "Cada tarea programada, ejecución de `/loop` o mensaje en reposo envía todo tu contexto. Para los loops que no necesites, pon `crossSessionInbound` en `hold` para encolar los mensajes de otras sesiones y revisa las filas de Loops en `/usage`.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "Límites de uso y costes de equipo",
      text: [
        "En Pro, Max y Ultra, el uso cuenta contra los límites de tu plan en lugar de generar una factura; mira [Claude Code vs Codex](/blog/claude-code-vs-codex) para ver cómo funcionan los límites de 5 horas y semanales. En la API, Anthropic indica una media empresarial de unos $13 por desarrollador y día activo, y de $150 a $250 al mes, con el 90% de los usuarios por debajo de $30 al día.",
        "Los administradores pueden fijar límites de gasto para los equipos, y una tabla `modelPricing` en los ajustes gestionados hace que `/usage` muestre las tarifas contratadas en lugar del precio de lista.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Agentes que trabajan con horario, sin quemar tokens toda la noche",
      text: [
        "Todo lo que despierta una sesión envía su contexto completo, así que un agente siempre activo necesita límites. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA que se despierta con un heartbeat solo durante el horario que tú fijas.",
      ],
      steps: [
        {
          title: "Fija un horario y un ritmo",
          text: "Elige cada 15, 30 o 60 minutos, y las horas en las que trabaja; fuera de ellas, duerme. Mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Una issue cada vez",
          text: "Cada heartbeat toma la siguiente issue del tablero, así que la sesión trabaja en una tarea concreta en lugar de explorar sin rumbo.",
        },
        {
          title: "Con el plan que ya pagas",
          text: "Los empleados funcionan con tu suscripción actual y cuentan contra los límites de tu plan. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Reducir el consumo de tokens de Claude Code" },
  mid: {
    title: "Gasta tus tokens en trabajo, no en esperas.",
    text: "Crewmark despierta a Claude Code durante el horario laboral con un rol, un objetivo y la siguiente issue de un tablero.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre el consumo de tokens de Claude Code",
    items: [
      {
        q: "¿Por qué Claude Code gasta tantos tokens?",
        a: "Envía la conversación completa en cada petición, y cada ronda de llamadas a herramientas es otra petición. Las sesiones largas, los fallos de caché tras las pausas, los subagentes y todo lo que se ejecuta mientras no estás se van sumando.",
      },
      {
        q: "¿Cómo reviso el consumo de tokens de Claude Code?",
        a: "Ejecuta `/usage` para ver los tokens de la sesión, el uso del plan y un desglose con recomendaciones, y `/context` para ver qué llena la ventana de contexto. Una barra de estado puede mostrar el uso del contexto en todo momento.",
      },
      {
        q: "¿Cuál es la forma más rápida de ahorrar tokens?",
        a: "Ejecuta `/clear` entre tareas sin relación, usa Sonnet salvo que necesites Opus y mantén CLAUDE.md corto. Esas tres cosas cubren la mayor parte del desperdicio.",
      },
      {
        q: "¿/compact ahorra tokens?",
        a: "Reduce el contexto de los mensajes siguientes, pero la compactación en sí lee toda la conversación, así que es una petición grande. Si no necesitas continuidad, `/clear` no cuesta nada.",
      },
      {
        q: "¿Los servidores MCP consumen tokens?",
        a: "Las definiciones de herramientas se cargan en diferido hasta que se usan, pero cada servidor sigue añadiendo nombres de herramientas e instrucciones. Desactiva los servidores que no uses y prefiere herramientas CLI cuando existan.",
      },
      {
        q: "¿Por qué llegué tan rápido a mi límite de uso?",
        a: "Normalmente por una sesión larga, unos cuantos fallos de caché o trabajo en segundo plano como `/loop`, tareas programadas, subagentes o agent teams. En un plan de pago, `/usage` muestra cuál de ellos está detrás de tu uso reciente.",
      },
      {
        q: "¿Los subagentes ahorran tokens?",
        a: "Mantienen la salida verbosa fuera de tu conversación principal, lo que hace que las peticiones siguientes sean pequeñas, pero sus propias peticiones también cuentan. Dales un modelo más pequeño para gastar menos.",
      },
    ],
  },
  cta: {
    title: "Pon a trabajar a Claude Code con un horario que controlas tú.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code (Manage costs effectively) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
