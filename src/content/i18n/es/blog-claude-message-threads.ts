import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Crea el helper. Esta llamada no envía ninguna petición.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# El turno 1 crea el hilo y envía la conversación completa
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# El turno 2 envía solo el mensaje nuevo
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turno 1: la conversación completa, más
"thread": {"type": "create"}

# Todos los turnos siguientes: solo los mensajes nuevos, sin system ni tools, más
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# En cada petición del hilo
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude message threads: sesiones largas de agente más rápidas | Crewmark",
    description:
      "Los message threads de Anthropic envían una conversación de Claude una vez y después solo lo nuevo. Qué cambia en Claude Code, cómo usar la API beta, la caducidad de 5 minutos y los límites.",
  },
  breadcrumb: "Claude message threads",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude message threads: qué son y cómo usarlos",
    lead: "Los message threads son una función de la API de Claude en beta pública desde el 2 de noviembre de 2026. En vez de subir toda la conversación en cada turno, un agente la envía una vez y después solo los mensajes nuevos. Anthropic afirma que los ha activado para la mayoría de los usuarios de Claude Code y que la mediana del tiempo hasta el primer token baja un 35 % aproximadamente en peticiones de 500 000 a 1 M de tokens. Esta guía explica qué cambia, qué no, cómo usarlos en tu propio agente y cuáles son los límites.",
    cta: "Acceso anticipado",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué son los message threads",
      text: [
        "Sin un hilo, cada turno del bucle de un agente vuelve a subir la conversación completa, y la API vuelve a validarla y tokenizarla entera. Un agente de programación hace cientos de peticiones en una sesión, así que cuando la conversación llega a cientos de miles de tokens, ese reenvío retrasa el comienzo de la respuesta de Claude. Con un hilo, la API conserva la conversación entre turnos y la mayor parte de ese trabajo afecta solo al turno nuevo.",
      ],
      points: [
        "Primer token más rápido: Anthropic midió una bajada de la mediana de un 35 % aproximadamente en peticiones de Claude Code de 500 000 a 1 M de tokens. Cuanto más larga es la conversación, más ayuda.",
        "Peticiones más pequeñas: cada turno lleva solo mensajes nuevos, resultados de herramientas o capturas de pantalla.",
        "Mismos tokens y mismo precio: Claude sigue leyendo la conversación completa en cada turno, y ni los precios ni los límites de uso cambian.",
        "De corta duración: un hilo caduca 5 minutos después de su última petición y se guarda en memoria, cifrado, sin escribirse nunca en disco.",
        "Dónde: la API de Claude, Claude Platform en AWS, Claude Models en Google Cloud (gestionado por Anthropic) y Microsoft Foundry, con todos los modelos.",
      ],
    },
    {
      kind: "table",
      title: "Con y sin hilo",
      headers: ["", "Sin hilo", "Con hilo"],
      rows: [
        ["Cada petición envía", "La conversación completa, `system` y `tools`", "Solo los mensajes nuevos y el `id` de la respuesta anterior"],
        ["Tiempo hasta el primer token", "Crece a medida que crece la conversación", "Menor y más estable en conversaciones largas"],
        ["Tokens facturados", "La conversación completa en cada turno", "Los mismos"],
        ["Precio y límites de uso", "Estándar", "Sin cambios"],
        ["Quién guarda la conversación", "Tu aplicación", "Tu aplicación, más la API durante 5 minutos tras cada petición"],
        ["Retención cero de datos", "Compatible", "No compatible"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar los message threads en tu propio agente",
      text: [
        "Claude Code ya lo hace por ti. Para usar hilos en un agente que construyes sobre la Messages API, el helper de hilos del SDK es el camino más corto.",
      ],
      steps: [
        {
          title: "Crea un helper de hilo",
          text: "Pasa los mismos campos que en una petición de Messages. El helper añade la cabecera beta `message-threads-2026-08-12`, crea el hilo en el primer turno, envía solo mensajes nuevos después y mantiene la conversación completa en memoria.",
          code: sdk,
        },
        {
          title: "O envía tú mismo el campo thread",
          text: "Con cURL o una llamada `create` normal, añade `thread` a cada petición y envía la cabecera beta en todas. Continúa siempre desde el `id` de la última respuesta; cada `id` solo se puede continuar una vez.",
          code: raw,
        },
        {
          title: "Mantén fijos el modelo y los ajustes",
          text: "`system` y `tools` van solo en la primera petición. `model`, `thinking`, `tool_choice`, el `cache_control` de nivel superior y las cabeceras beta deben ser los mismos en todos los turnos; un cambio devuelve un error 400 con `thread_fingerprint_mismatch`. Para cambiarlos, empieza un hilo nuevo.",
        },
        {
          title: "Guarda tu propia copia y reenvía ante un 404",
          text: "Los hilos funcionan en la medida de lo posible (best-effort). Cuando una petición de continuación devuelve 404 con `thread_not_found` (el hilo caducó, el último turno no se guardó o lo escribió un modelo de respaldo), envía de nuevo la conversación completa en una petición create nueva. El helper del SDK lo hace una vez por sí solo.",
        },
        {
          title: "Activa el prompt caching",
          text: "Un hilo no pone tu prompt en caché por ti. Envía un `cache_control` de nivel superior en cada petición para que cada turno lea la conversación anterior desde la caché; una petición con `thread` puede llevar como máximo 4 puntos de corte (breakpoints).",
        },
      ],
      source: { label: "Fuente: la documentación de message threads de Anthropic", href: docs },
    },
    {
      kind: "text",
      title: "Límites y lo que los hilos no admiten",
      points: [
        "No funcionan con Message Batches, el recuento de tokens, la compactación bajo demanda ni la edición de contexto (salvo `clear_thinking_20251015` con `keep: \"all\"`).",
        "No están disponibles para organizaciones con HIPAA readiness ni con Inference hooks; esas peticiones devuelven un error 400 con `thread_unsupported_request`.",
        "No son compatibles con la retención cero de datos: la API guarda el hilo en memoria y lo elimina como máximo 1 hora después de su último uso.",
        "No hay API para listar, leer ni borrar un hilo, y un hilo solo admite añadir mensajes. Para compactar, empieza un hilo nuevo a partir de tu propio resumen.",
        "Tras una negativa (refusal), no continúes el hilo: empieza uno nuevo sin el turno que la provocó.",
        "Usa la misma clave de API y el mismo workspace en todas las peticiones de un hilo, o no se podrá continuar.",
      ],
    },
    {
      kind: "text",
      title: "Qué significa para quienes usan Claude Code",
      text: [
        "No necesitas cambiar nada: Anthropic dice que los hilos están activados por defecto para la mayoría de los usuarios de Claude Code. La mejora se nota en las sesiones largas, donde un turno avanzado en una conversación grande empieza a responder antes. Tu consumo no baja, porque Claude sigue leyendo toda la conversación en cada turno.",
        "Según la documentación de la API, un hilo caduca 5 minutos después de su última petición. Si retomas una sesión tras una pausa más larga, la primera petición vuelve a enviar la conversación completa y los turnos siguientes son rápidos. Es también lo que le pasa a una [sesión proactiva de Claude Code](/proactive-claude-code) que se despierta según un horario.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Haz que las sesiones largas de Claude Code trabajen solas",
      text: [
        "Los message threads hacen más rápidas las sesiones largas; Crewmark las hace proactivas. Da a una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode un rol, un objetivo y un horario laboral, y la despierta con un latido (heartbeat) en la misma conversación, de modo que conserva su contexto y toma el siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol, como ingeniero de software o especialista SEO, escribe su objetivo como un número y ejecuta el comando de configuración en Claude Code.",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario laboral, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code). Pueden funcionar varios a la vez, como en [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon trabajo en el tablero; el empleado lo toma, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usa los message threads de Claude en tu propio agente" },
  mid: {
    title: "¿Ejecutas sesiones largas de Claude Code?",
    text: "Crewmark las despierta con un latido, con un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude message threads",
    items: [
      {
        q: "¿Qué son los Claude message threads?",
        a: "Una función de la API de Claude, en beta pública desde el 2 de noviembre de 2026, que mantiene una conversación en el lado de Anthropic entre turnos. La primera petición envía la conversación completa y crea un hilo; cada petición posterior envía solo los mensajes nuevos y el `id` de la respuesta anterior.",
      },
      {
        q: "¿Los message threads hacen más rápido a Claude Code?",
        a: "En sesiones largas, sí. Anthropic dice que los hilos están activados por defecto para la mayoría de los usuarios de Claude Code y que la mediana del tiempo hasta el primer token baja un 35 % aproximadamente en peticiones de 500 000 a 1 M de tokens. En conversaciones cortas se gana poco.",
      },
      {
        q: "¿Los message threads ahorran tokens o dinero?",
        a: "No. Claude sigue leyendo la conversación completa en cada turno, así que el uso de tokens, los precios y los límites de uso no cambian. La ventaja son peticiones más pequeñas y un primer token más rápido. Para gastar menos, usa el prompt caching.",
      },
      {
        q: "¿Cuánto dura un hilo?",
        a: "Caduca 5 minutos después de su última petición, y cada respuesta guardada reinicia esos 5 minutos. La API lo elimina como máximo 1 hora después de su último uso. Pasado ese tiempo, envía de nuevo la conversación completa para empezar un hilo nuevo.",
      },
      {
        q: "¿Cuál es la cabecera beta de los message threads?",
        a: "`anthropic-beta: message-threads-2026-08-12`, enviada en cada petición del hilo. El helper de hilos del SDK la añade por ti.",
      },
      {
        q: "¿Los message threads son compatibles con la retención cero de datos?",
        a: "No. El contenido de un hilo se guarda en memoria, cifrado con una clave gestionada por el servidor, sin escribirse nunca en almacenamiento duradero, y se elimina como máximo 1 hora después de su último uso. Las organizaciones con HIPAA readiness no pueden usar hilos.",
      },
      {
        q: "¿Los message threads son lo mismo que los session threads de Managed Agents?",
        a: "No. Los message threads son una función de la Messages API; los session threads pertenecen a Claude Managed Agents.",
      },
    ],
  },
  cta: {
    title: "Haz proactivas tus sesiones largas de Claude Code.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con el anuncio de Anthropic y la documentación de Claude Platform el 4 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
