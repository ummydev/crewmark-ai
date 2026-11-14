import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// Permitir la solicitud
{ "action": "allow" }

// Denegarla: deny_reason se muestra al usuario (máx. 500 caracteres),
// reference_id solo va a tu feed de actividad de cumplimiento
{
  "action": "deny",
  "deny_reason": "Este prompt parece contener datos de tarjetas de clientes.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Inference hooks de Claude: cómo funcionan y configuración",
    description:
      "Los inference hooks de Claude, disponibles desde el 5 de noviembre de 2026, envían cada prompt y llamada a herramientas a tu servidor de seguridad para que permita o deniegue. Cómo funcionan, configuración, límites y diferencias con los hooks de Claude Code.",
  },
  breadcrumb: "Inference hooks de Claude",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude",
    title: "Inference hooks de Claude: un control de permitir o denegar antes de cada prompt",
    lead: "Los inference hooks (hooks de inferencia) permiten a una organización de Claude Enterprise enviar cada prompt, y opcionalmente cada llamada a herramientas, a su propio servidor de seguridad y esperar un veredicto de permitir o denegar antes de que Claude se ejecute. Pasaron a disponibilidad general el 5 de noviembre de 2026, junto con un nuevo centro de seguridad en beta. Como el control ocurre en los servidores de Anthropic, una sola configuración cubre claude.ai, Claude Code, Cowork y los demás productos de Claude, sin instalar nada en los portátiles. Esta guía explica cómo funcionan, cómo configurarlos, sus límites y en qué se diferencian de los hooks que escribes en Claude Code.",
    cta: "Empezar",
    secondary: "Cómo configurarlos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cómo funcionan los inference hooks",
      text: [
        "Tu organización (o su proveedor de seguridad) opera un servidor de seguridad de IA: un endpoint HTTPS. Cuando alguien envía un prompt, Anthropic publica la transcripción de la conversación en ese endpoint, firmada con el esquema Standard Webhooks, y espera un veredicto. Si es allow, la inferencia continúa; si es deny, la solicitud nunca llega al modelo y el usuario ve tu motivo junto con un mensaje fijo de tus administradores.",
      ],
      points: [
        "Dos eventos: `prompt`, antes de cada solicitud de inferencia gobernada, y `tool_call`, antes de que se ejecuten las llamadas a herramientas de la respuesta de Claude, cuando Validate tool calls (validar llamadas a herramientas) está activado.",
        "Una configuración para toda la organización: claude.ai, Claude Desktop y móvil, Claude Code (CLI incluida), Cowork, Claude for Microsoft 365, Claude Tag y Claude in Chrome.",
        "Lo que ve tu servidor: el texto de la transcripción, las llamadas a herramientas y sus resultados, y el texto extraído de los adjuntos. Nunca los bytes en bruto de archivos o imágenes, los prompts de sistema ni las definiciones de herramientas.",
        "Los veredictos son solo allow o deny. No se admite reescribir ni redactar (ocultar datos de) un prompt.",
        "Cada denegación queda registrada en el Activity Feed de tu organización.",
      ],
    },
    {
      kind: "table",
      title: "Inference hooks vs hooks de Claude Code vs Compliance API",
      text: [
        "Los nombres se parecen, pero son tres herramientas distintas. Los hooks de Claude Code se configuran por proyecto o por usuario y se ejecutan en la máquina del desarrollador; los inference hooks los define una vez la organización y se ejecutan en el lado de Anthropic.",
      ],
      headers: ["", "Inference hooks", "Hooks de Claude Code", "Compliance API"],
      rows: [
        ["Quién los configura", "El Owner o Primary owner de la organización", "Cada desarrollador o proyecto, en `settings.json`", "El equipo de seguridad o cumplimiento"],
        ["Dónde se ejecutan", "Los servidores de Anthropic llaman a tu endpoint HTTPS", "Comandos de shell en la máquina del desarrollador", "Tú llamas a la API de Anthropic"],
        ["Cuándo", "Antes de la inferencia y antes de que se ejecuten las llamadas a herramientas", "En eventos como PreToolUse, PostToolUse y Stop", "A posteriori"],
        ["Cubren", "Todos los productos de Claude de la organización Enterprise", "Las sesiones de Claude Code con esa configuración", "Actividad, chats, archivos, transcripciones"],
        ["Pueden bloquear", "Sí: allow o deny", "Sí, en los eventos que lo admiten", "No: auditoría y exportación"],
        ["Plan", "Claude Enterprise", "Cualquier usuario de Claude Code", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar los inference hooks",
      text: [
        "Necesitas el rol de Owner o Primary owner (Admin no basta) y un endpoint HTTPS público en el puerto 443. Los túneles como ngrok están bloqueados, así que aloja el servidor de pruebas en un dominio que controles.",
      ],
      steps: [
        {
          title: "Habilita la función",
          text: "En claude.ai, abre Organization settings → Data and privacy (configuración de la organización → datos y privacidad) y activa Allow for your organization en Inference hooks. Esto no inicia la inspección: Enforce verdicts (aplicar veredictos) sigue desactivado.",
        },
        {
          title: "Añade tu endpoint y guarda el secreto de firma",
          text: "Haz clic en Configure, introduce tu URL `https://` y guarda. Al guardar por primera vez se muestra una sola vez un secreto de firma del webhook: guárdalo, porque tu servidor lo usa para verificar cada solicitud.",
        },
        {
          title: "Añade cabeceras y prueba",
          text: "Añade hasta 16 cabeceras estáticas para que tu servidor pueda autenticar a Anthropic y luego haz clic en Test connection. Envía un prompt sintético e informa del veredicto y del tiempo de ida y vuelta.",
        },
        {
          title: "Devuelve un veredicto como JSON con HTTP 200",
          text: "Responde a cada solicitud con HTTP 200 y un `action`. Un estado distinto de 200 es un fallo, no una denegación.",
          code: verdict,
        },
        {
          title: "Elige el manejo de fallos y un tiempo de espera",
          text: "Block the request falla en cerrado, Allow the request falla en abierto. El tiempo de espera del veredicto va de 1 a 10.000 ms, 5.000 por defecto; un veredicto lento cuenta como servidor inaccesible. Los fallos repetidos activan un circuit breaker que aplica tu ajuste de fallo hasta que el servidor se recupera.",
        },
        {
          title: "Despliega de forma gradual y luego aplica",
          text: "Empieza en Shadow mode, que envía los veredictos sin bloquear nada, inspecciona un porcentaje de las solicitudes, excluye roles personalizados si hace falta y luego activa Enforce verdicts. Los cambios llegan a todos los servidores en aproximadamente un minuto.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Platform, Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "Límites y detalles a tener en cuenta",
      points: [
        "Solo Enterprise: no están en Team, Pro ni Max, ni para organizaciones de Claude Platform (API), ni en Amazon Bedrock o Google Cloud.",
        "El contenido que es solo imagen, como una captura de pantalla de un documento, no se inspecciona porque nunca se envían los bytes en bruto.",
        "Un mensaje denegado permanece en la transcripción y se reenvía con cada mensaje posterior. En Claude Code, ejecuta `/rewind` hasta el prompt que lo introdujo o `/clear` para empezar de cero.",
        "Algunas llamadas de fondo al modelo que hace la propia Anthropic no están gobernadas, como los escaneos alojados de Claude Security, Code Review en pull requests de GitHub y los informes inteligentes. Ejecutar `/code-review` en local en Claude Code sí está gobernado.",
        "En el modo de voz una pequeña parte de las llamadas a herramientas no se envía, así que no confíes en los hooks como único control ahí.",
        "El mismo anuncio añadió un centro de seguridad (beta) que compara tu configuración de Claude, Cowork y Claude Code con la configuración recomendada por Anthropic, además de gestión centralizada y controles de acceso en beta.",
      ],
    },
    {
      kind: "text",
      title: "Por qué importa para los agentes que trabajan solos",
      text: [
        "Cuando Claude Code trabaja sin supervisión, con una programación o en segundo plano, nadie lee cada prompt antes de que se envíe. Los inference hooks dan a una empresa un control en línea sobre cada solicitud y llamada a herramientas, se ejecute donde se ejecute el agente, y el shadow mode permite a los equipos de seguridad ajustar la política antes de bloquear nada. Para barreras por proyecto en una sola máquina siguen valiendo los hooks y las reglas de permisos de Claude Code; consulta [el plan mode de Claude Code](/blog/claude-code-plan-mode) para los modos de permisos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Barreras para empleados de IA que trabajan mientras no estás",
      text: [
        "Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero. Con un plan Claude Enterprise, los inference hooks revisan sus prompts como los de cualquier otra persona.",
      ],
      steps: [
        {
          title: "Decide qué necesita tu visto bueno",
          text: "Cada empleado pregunta antes de acciones arriesgadas, como publicar, hacer merge o gastar dinero, y tú apruebas desde una sola bandeja de entrada.",
        },
        {
          title: "Mantén el registro en el tablero",
          text: "Cada issue conserva los comentarios y cambios de estado del empleado, así que puedes revisar lo que hizo junto a los registros de tu equipo de seguridad.",
        },
        {
          title: "Deja que el heartbeat arranque el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code) y [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar los inference hooks de Claude" },
  mid: {
    title: "La seguridad está lista. Ahora dale un trabajo a Claude Code.",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los inference hooks de Claude",
    items: [
      {
        q: "¿Qué son los inference hooks de Claude?",
        a: "Una función de Claude Enterprise que envía cada prompt, y opcionalmente cada llamada a herramientas, al servidor de seguridad de tu organización, que responde allow o deny antes de que Claude se ejecute. Pasaron a disponibilidad general el 5 de noviembre de 2026.",
      },
      {
        q: "¿Los inference hooks funcionan con Claude Code?",
        a: "Sí. Una sola configuración cubre todos los productos de Claude de la organización Enterprise, incluido Claude Code en la CLI y en la app de escritorio, sin instalar nada en las máquinas de los desarrolladores.",
      },
      {
        q: "¿En qué se diferencian los inference hooks de los hooks de Claude Code?",
        a: "Los hooks de Claude Code son comandos de shell que cada desarrollador o proyecto configura en `settings.json` y se ejecutan en local en eventos como PreToolUse. Los inference hooks los define una vez la organización y se ejecutan en los servidores de Anthropic antes de la inferencia, para todos los productos de Claude.",
      },
      {
        q: "¿Qué planes tienen inference hooks?",
        a: "Solo Claude Enterprise, y los configura el Owner o Primary owner. No están disponibles para organizaciones de la API de Claude Platform ni en Amazon Bedrock o Google Cloud.",
      },
      {
        q: "¿Puede un inference hook ocultar datos sensibles?",
        a: "No. Los veredictos son solo allow o deny; no se admite reescribir ni redactar un prompt.",
      },
      {
        q: "¿Qué pasa si mi servidor de seguridad está caído?",
        a: "Lo decide tu ajuste de manejo de fallos: bloquear la solicitud (fallo en cerrado) o dejarla pasar sin inspeccionar (fallo en abierto). Un circuit breaker deja de llamar a un servidor que falla y se restablece cuando se recupera.",
      },
      {
        q: "¿Qué es el centro de seguridad de Claude?",
        a: "Una página en beta en Organization settings, anunciada junto con los inference hooks, que compara tu configuración de Claude, Cowork y Claude Code con la configuración recomendada por Anthropic y genera un informe para auditores.",
      },
    ],
  },
  cta: {
    title: "Empleados de IA en Claude Code, dentro de tus barreras.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el anuncio de Anthropic, el Centro de ayuda de Claude y la documentación de Claude Platform el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
