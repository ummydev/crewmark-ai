import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Actualiza Claude Code y elige el modelo para esta sesión
claude update
/model                       # elige Claude Fable 5.2

# O inicia una sesión directamente con él
claude --model claude-fable-5-2

# Modo rápido en Fable 5.2 (Claude Code v2.1.321 o posterior)
/fast`;

const api = `# Claude API: cambia el ID del modelo
model = "claude-fable-5-1"  # antes
model = "claude-fable-5-2"  # después

# El pensamiento adaptativo está siempre activo; controla la profundidad con effort
# low | medium | high (predeterminado) | xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2: benchmarks, precios y comparación con Opus 5.5",
    description:
      "Claude Fable 5.2, lanzado el 9 de noviembre de 2026: novedades, benchmarks de Anthropic, precios de la API ($8/$40) y modo rápido, contexto de 1M, Fable 5.2 vs Opus 5.5, vs Fable 5.1 y vs Mythos 5.2, y cómo usarlo en Claude Code.",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Modelos de Claude",
    title: "Claude Fable 5.2: novedades, benchmarks, precios y cómo se compara con Opus 5.5",
    lead: "Anthropic lanzó Claude Fable 5.2 el 9 de noviembre de 2026, junto con Claude Mythos 5.2, el mismo modelo con salvaguardas distintas. Anthropic presenta Fable 5.2 como su modelo de disponibilidad general más capaz para trabajo técnico: es más rápido y más barato que Fable 5.1, puntúa más alto en los benchmarks de programación y agentes de Anthropic y añade un modo rápido. Esta guía explica qué ha cambiado, las cifras, cuánto cuesta, cuándo elegirlo frente a Opus 5.5 y cómo usarlo en Claude Code.",
    cta: "Empezar",
    secondary: "Fable 5.2 vs Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 de un vistazo",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["Lanzamiento", "9 de noviembre de 2026 (después de Fable 5 en junio y Fable 5.1 en septiembre)"],
        ["ID del modelo en la API", "`claude-fable-5-2`"],
        ["Precio", "$8 por millón de tokens de entrada, $40 por millón de salida (Fable 5.1: $10 y $50)"],
        ["Modo rápido", "Salida hasta 2.5x más rápida, a $16 de entrada y $80 de salida por millón de tokens"],
        ["Ventana de contexto", "1M de tokens, con un máximo de 128K de salida"],
        ["Pensamiento", "Pensamiento adaptativo, siempre activo; effort `low`, `medium`, `high` (predeterminado), `xhigh`, `max`"],
        ["Fecha de corte del conocimiento", "Junio de 2026"],
        ["Velocidad", "Salida hasta un 30% más rápida que Fable 5.1, según Anthropic"],
        ["Quién puede usarlo", "Claude Pro, Max, Ultra, Team y Enterprise; todos los clientes de la Claude API; Amazon Bedrock, Google Cloud y Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Novedades de Fable 5.2",
      points: [
        "Mejor en trabajo técnico largo y difícil: Anthropic dice que puede llevar tareas de ingeniería ambiguas durante días y coordinar cientos de subagentes, incluso más de mil.",
        "Más barato: la entrada y la salida cuestan un 20% menos que en Fable 5.1, y el procesamiento por lotes va a mitad de precio ($4 y $20).",
        "Más rápido: salida hasta un 30% más rápida que Fable 5.1, y un modo rápido hasta 2.5x más rápido todavía, al doble de precio.",
        "Robótica: Anthropic informa de un control mucho mejor de robots físicos, incluso en tareas para las que no se entrenó.",
        "Salvaguardas: incluye salvaguardas de ciberseguridad y biología. Las consultas de ciberseguridad marcadas se envían a Claude Opus 4.8 y las de biología, a Claude Opus 5.",
        "Retención de datos: los modelos Fable exigen por defecto una retención de 30 días para la supervisión de seguridad; la retención cero de datos requiere autorización de Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de Claude Fable 5.2",
      text: [
        "Datos de la página de Fable de Anthropic, con las salvaguardas activadas salvo que se indique lo contrario. Son cifras de la propia Anthropic, no pruebas independientes.",
      ],
      headers: ["Benchmark", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0 (programación agéntica)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2 (programación agéntica)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1 (uso del ordenador)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench (flujos de negocio)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam (con herramientas)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim (robótica, ejecutado por Anthropic)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precios de Claude Fable 5.2",
      text: [
        "Precios de la API por millón de tokens, según la documentación de Anthropic del 10 de noviembre de 2026. En los planes de Claude, Fable 5.2 se incluye en el uso de tu suscripción: en Pro y en los puestos estándar de Team puede consumir hasta el 50% de tus límites semanales. El modo rápido en Claude Code se cobra de los créditos de uso.",
      ],
      headers: ["Modelo", "Entrada", "Salida", "Lecturas de caché", "Lotes (entrada / salida)"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2, modo rápido", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 vs Opus 5.5: ¿cuál deberías usar?",
      text: [
        "El consejo de la propia Anthropic es empezar con Opus 5.5 para la mayoría del trabajo y pasar a Fable 5.2 cuando Opus 5.5 con más effort siga sin llegar.",
      ],
      points: [
        "Precio: Fable 5.2 cuesta el doble por token ($8 y $40 frente a $4 y $20), y su effort predeterminado es `high` mientras que el de Opus 5.5 es `medium`, así que además tiende a pensar más en cada petición.",
        "Capacidad: en las tablas de Anthropic, Fable 5.2 supera a Opus 5.5 en programación agéntica (69.9% frente a 62.3% en FrontierSWE v2), ciencia y trabajo de largo recorrido; la diferencia es menor en uso del ordenador (89.3% frente a 87.2% en OSWorld 2.1).",
        "Coste por tarea: Anthropic dice que Fable 5.2 con effort `high` quedó aproximadamente a la par de Opus 5.5 con `max` en FrontierCode 2.0 (45.3% frente a 45.5%) por cerca de la mitad del coste por tarea, así que en tareas difíciles no tiene por qué ser la opción más cara.",
        "Cambiar a mitad de conversación: solo Fable 5.2 y Mythos 5.2 pueden leer el pensamiento de Fable 5.2, así que si pasas una conversación de Fable 5.2 a Opus 5.5, se pierde ese razonamiento en los turnos que se ejecuten allí.",
        "Regla práctica: Opus 5.5 para el día a día; Fable 5.2 para trabajos de agentes de larga duración, bugs difíciles y trabajo que falla con Opus.",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 vs Mythos 5.2, y vs Fable 5.1",
      points: [
        "Mythos 5.2 es el mismo modelo con menos restricciones para trabajo de ciberseguridad y biología. Solo está disponible para organizaciones verificadas mediante los programas de Anthropic, como el Cyber Verification Program, y cuesta lo mismo.",
        "En las tablas de ciberseguridad y biología de Anthropic, Mythos 5.2 puntúa más alto que Fable 5.2 con sus salvaguardas activadas; para todo lo demás son el mismo modelo.",
        "Frente a Fable 5.1, Fable 5.2 es más barato, hasta un 30% más rápido y puntúa más alto en todas las tablas de Anthropic, por ejemplo 49.1% frente a 32.4% en FrontierCode 2.0 y 41.3% frente a 17.9% en el Remote Labor Index.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar Claude Fable 5.2 en Claude Code",
      steps: [
        {
          title: "Actualiza y elige el modelo",
          text: "Actualiza Claude Code, ejecuta `/model` y elige Claude Fable 5.2, o inicia una sesión con `--model claude-fable-5-2`. En un plan de Claude, necesitas Pro, Max, Ultra, Team o Enterprise.",
          code: claudeCode,
        },
        {
          title: "Empieza con effort en high",
          text: "Anthropic dice que la mayor parte de la mejora ya está en `high`. Sube a `xhigh` para tu trabajo de programación más difícil y largo cuando hayas comprobado que ayuda; reserva `max` para los casos raros en los que el tiempo y los tokens no importan.",
        },
        {
          title: "Activa el modo rápido cuando importe la velocidad",
          text: "Ejecuta `/fast` mientras usas Fable 5.2 (Claude Code v2.1.321 o posterior). Es hasta 2.5x más rápido al doble de precio; en los planes de suscripción se paga con créditos de uso, no con los límites de tu plan, y no está disponible en Bedrock, Vertex ni Foundry.",
        },
        {
          title: "¿Llamas a la API? Revisa los cambios incompatibles",
          text: "El pensamiento adaptativo está siempre activo (`budget_tokens` y `disabled` devuelven 400), el uso forzado de herramientas no está soportado, editar turnos anteriores invalida los bloques de pensamiento y la antigua herramienta `computer_20251124` se sustituye por el conjunto de herramientas de uso del ordenador. Claude Code y el Agent SDK se encargan de esto por ti.",
          code: api,
        },
      ],
      source: { label: "Fuente: documentación de Anthropic, What's new in Claude Fable 5.2", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Fable 5.2 un trabajo de larga duración",
      text: [
        "Fable 5.2 está pensado para trabajo que dura horas. Crewmark convierte una sesión de Claude Code en un empleado de IA con un rol, un objetivo, horario laboral y un heartbeat; el empleado usa el modelo con el que se ejecuta su sesión, así que puedes poner Fable 5.2 en los trabajos más difíciles y dejar Opus 5.5 para el resto.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Por ejemplo, el [ingeniero de software de IA](/ai-employees/software-engineer) para un backlog de issues difíciles.",
        },
        {
          title: "Configura el modelo en su sesión",
          text: "Ejecuta `/model` en la conversación de Claude Code del empleado y elige Fable 5.2.",
        },
        {
          title: "Déjalo trabajar",
          text: "Se despierta con su heartbeat y avanza por el tablero; consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar Claude Fable 5.2 en Claude Code" },
  mid: {
    title: "¿Quieres que Fable 5.2 trabaje en tus issues más difíciles con un horario?",
    text: "Los empleados de Crewmark se ejecutan en tu propio Claude Code, se despiertan con un heartbeat y toman la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Fable 5.2",
    items: [
      {
        q: "¿Cuándo se lanzó Claude Fable 5.2?",
        a: "El 9 de noviembre de 2026, junto con Claude Mythos 5.2. Llega después de Fable 5 (9 de junio de 2026) y Fable 5.1 (1 de septiembre de 2026).",
      },
      {
        q: "¿Cuánto cuesta Claude Fable 5.2?",
        a: "En la API, $8 por millón de tokens de entrada y $40 por millón de tokens de salida, frente a $10 y $50 en Fable 5.1. El modo rápido cuesta $16 y $80; los lotes, $4 y $20. En los planes de Claude está incluido desde Pro; en Pro y en los puestos estándar de Team puede consumir hasta el 50% de los límites de uso semanales.",
      },
      {
        q: "¿Es Fable 5.2 mejor que Opus 5.5?",
        a: "Según los benchmarks de Anthropic, sí en programación agéntica, ciencia y trabajo de largo recorrido. También cuesta el doble por token, y Anthropic sigue recomendando Opus 5.5 como punto de partida para la mayoría del trabajo.",
      },
      {
        q: "¿Cuál es la ventana de contexto de Claude Fable 5.2?",
        a: "1M de tokens, con hasta 128K tokens de salida.",
      },
      {
        q: "¿Qué diferencia hay entre Fable 5.2 y Mythos 5.2?",
        a: "Son el mismo modelo. Fable 5.2 tiene salvaguardas de ciberseguridad y biología y está abierto a todo el mundo; Mythos 5.2 es para organizaciones verificadas mediante los programas de Anthropic.",
      },
      {
        q: "¿Claude Fable 5.2 es gratis?",
        a: "No. Anthropic lo ofrece en los planes Pro, Max, Ultra, Team y Enterprise y en la API; el plan Free no aparece en la lista.",
      },
      {
        q: "¿Hay una system card de Claude Fable 5.2?",
        a: "Sí, Anthropic publicó la “Claude Fable 5.2 and Claude Mythos 5.2 System Card”, enlazada desde su página de Fable.",
      },
    ],
  },
  cta: {
    title: "Pon el modelo más nuevo en un trabajo permanente.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la página de Fable de Anthropic, el anuncio de lanzamiento, la documentación de Claude Platform y la de Claude Code el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic. Claude, Claude Fable, Claude Mythos, Claude Opus y Claude Code son marcas comerciales de Anthropic.",
};
