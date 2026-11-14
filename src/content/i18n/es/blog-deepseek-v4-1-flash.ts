import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash (1017): precio, benchmarks y vs V4 Pro",
    description:
      "DeepSeek-V4.1-Flash-1017 explicado: qué cambió el 17 de octubre de 2026, precio de la API, contexto de 1M, pesos abiertos en Hugging Face, resultados de benchmarks de DeepSeek y cuándo conviene V4 Pro.",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek V4.1 Flash (1017): precio, contexto, benchmarks y comparación con V4 Pro",
    lead: "DeepSeek-V4.1-Flash-1017 es la actualización del 17 de octubre de 2026 de DeepSeek V4.1 Flash, el modelo más pequeño de la arquitectura más reciente de DeepSeek, con comprensión de imágenes y un contexto de 1M de tokens. Es el modelo que la API sirve como `deepseek-flash`, el que usan la web y la app de DeepSeek y el que DeepSeek Harness ejecuta por defecto, y sus pesos son abiertos con licencia MIT. Según DeepSeek, puntúa más alto que la versión de septiembre y termina las tareas más rápido y con respuestas más cortas. Aquí verás qué es, cuánto cuesta, cómo se compara con V4 Pro y cómo usarlo.",
    cta: "Empezar",
    secondary: "Ir a los precios",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash de un vistazo",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["Lanzamiento", "V4.1 Flash el 10 de septiembre de 2026; la actualización 1017 el 17 de octubre de 2026"],
        ["Nombre del modelo en la API", "`deepseek-flash` (los nombres anteriores `deepseek-v4-flash` y `deepseek-v4-flash-vision-exp` también lo usan)"],
        ["Entrada", "Texto e imágenes"],
        ["Ventana de contexto", "1M de tokens; DeepSeek recomienda un `max_tokens` de 256K o más"],
        ["Pesos", "Abiertos en Hugging Face, licencia MIT"],
        ["Dónde funciona", "API, web y app de DeepSeek; modelo por defecto en DeepSeek Harness"],
        ["Optimizado para", "DeepSeek Harness (v0.2.1-rc.1 o posterior), Tencent CodeBuddy y WorkBuddy, según DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precio de DeepSeek V4.1 Flash frente a V4 Pro",
      text: [
        "Precios de la API de DeepSeek en dólares estadounidenses por millón de tokens a 6 de noviembre de 2026. Las tarifas fuera de hora punta se aplican fuera de las franjas de 01:00 a 04:00 y de 06:00 a 10:00 UTC en días laborables y son la mitad de las de hora punta; la actualización 1017 no cambió los precios. Las API de Search y Fetch de DeepSeek cuestan $0.75 por cada 1.000 llamadas cada una.",
      ],
      headers: ["Por 1M de tokens", "Flash, hora punta", "Flash, fuera de punta", "V4 Pro, hora punta", "V4 Pro, fuera de punta"],
      rows: [
        ["Entrada, acierto de caché", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Entrada, fallo de caché", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Salida", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de DeepSeek V4.1 Flash (según DeepSeek)",
      text: [
        "Son las cifras de DeepSeek publicadas en la ficha del modelo, que comparan la actualización 1017 con el V4.1 Flash de septiembre. DeepSeek ejecutó Terminal-Bench 4.0 con el harness de Claude Code y DeepSWE con Mini-SWE-V2. Los benchmarks de cada fabricante favorecen a sus propios modelos; pruébalo con tus propias tareas antes de cambiar.",
      ],
      headers: ["Benchmark", "V4.1 Flash 1017", "V4.1 Flash (sept.)"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE (sin herramientas)", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash vs V4 Pro: cuál usar",
      points: [
        "V4 Pro (`deepseek-v4-pro`, disponible para todos desde el 13 de agosto de 2026) cuesta 4,4 veces más por token de entrada y 3,3 veces más por token de salida, y solo acepta texto; Flash añade la entrada de imágenes.",
        "Los dos tienen un contexto de 1M de tokens y un nivel de razonamiento ajustable (low, high y max).",
        "Las configuraciones de agentes de programación de la propia DeepSeek usan Flash por defecto: DeepSeek Harness y la configuración recomendada para Claude Code, que asigna Sonnet y Haiku a Flash y solo Opus a V4 Pro.",
        "Un reparto práctico: Flash para el trabajo diario de los agentes y los subagentes, y V4 Pro cuando una tarea difícil sigue fallando con Flash.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar DeepSeek V4.1 Flash",
      steps: [
        {
          title: "A través de la API",
          text: "Consigue una clave de API en platform.deepseek.com y llama al modelo como `deepseek-flash`; la API es compatible con OpenAI y con Anthropic.",
          code: api,
        },
        {
          title: "En un agente de programación",
          text: "Ejecútalo en DeepSeek Harness, donde es el modelo por defecto, o apunta Claude Code o Codex a DeepSeek; consulta [DeepSeek Harness](/blog/deepseek-harness) y [Claude Code con DeepSeek](/blog/claude-code-deepseek).",
        },
        {
          title: "En local, con los pesos abiertos",
          text: "Descarga DeepSeek-V4.1-Flash-1017 de Hugging Face. El repositorio incluye un codificador de prompts de referencia e instrucciones de inferencia en lugar de una plantilla de chat; DeepSeek recomienda temperature 1.0 y top_p 1.0.",
        },
      ],
      source: { label: "Fuente: DeepSeek-V4.1-Flash-1017 en Hugging Face", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un modelo barato y capaz, trabajando en tu backlog",
      text: [
        "Con los precios de Flash, mantener ocupado a un agente todo el día sale asequible. Crewmark convierte una sesión de DeepSeek Harness, Claude Code, Codex u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un latido (heartbeat) para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Elige el agente y el modelo",
          text: "DeepSeek Harness ejecuta V4.1 Flash por defecto; Claude Code y Codex pueden usarlo a través del endpoint de DeepSeek.",
        },
        {
          title: "Dale un rol y un objetivo",
          text: "Lee [qué es un empleado de IA](/ai-employees) y en qué se diferencia de un [superagent](/blog/superagent).",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario se despierta cada 15, 30 o 60 minutos y toma la siguiente issue; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usa DeepSeek V4.1 Flash" },
  mid: {
    title: "Un modelo tan barato debería trabajar todo el día.",
    text: "Crewmark despierta a DeepSeek Harness, Claude Code o Codex con un latido, con un rol, un objetivo y un tablero de issues.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre DeepSeek V4.1 Flash",
    items: [
      {
        q: "¿Qué es DeepSeek V4.1 Flash 1017?",
        a: "La actualización del 17 de octubre de 2026 de DeepSeek V4.1 Flash, el modelo más pequeño de la arquitectura más reciente de DeepSeek. Acepta texto e imágenes, tiene un contexto de 1M de tokens y se sirve como `deepseek-flash`.",
      },
      {
        q: "¿Cuánto cuesta DeepSeek V4.1 Flash?",
        a: "En la API, $0.30 por millón de tokens de entrada con fallo de caché ($0.006 con acierto) y $1.20 por millón de tokens de salida en hora punta; fuera de punta, los precios son la mitad.",
      },
      {
        q: "¿Cuál es la ventana de contexto de DeepSeek V4.1 Flash?",
        a: "1M de tokens, y DeepSeek recomienda un `max_tokens` de al menos 256K.",
      },
      {
        q: "¿DeepSeek V4.1 Flash es de código abierto?",
        a: "Sus pesos son abiertos en Hugging Face con licencia MIT, junto con un codificador de prompts de referencia e instrucciones de inferencia.",
      },
      {
        q: "DeepSeek V4.1 Flash vs V4 Pro: ¿en qué se diferencian?",
        a: "V4 Pro cuesta 4,4 veces más por token de entrada y 3,3 veces más por token de salida, y solo acepta texto; Flash acepta imágenes y es el modelo por defecto en las configuraciones de agentes de programación de DeepSeek. Los dos tienen un contexto de 1M.",
      },
      {
        q: "¿Qué cambió de V4.1 Flash a 1017?",
        a: "DeepSeek informa de puntuaciones más altas en benchmarks de agentes y programación, respuestas más cortas y tareas terminadas más rápido, con el mismo precio y el mismo nombre de modelo.",
      },
      {
        q: "¿Puedo usar DeepSeek V4.1 Flash en Claude Code?",
        a: "Sí. DeepSeek documenta unas variables de entorno que apuntan Claude Code a su endpoint compatible con Anthropic con `deepseek-flash`; consulta [Claude Code con DeepSeek](/blog/claude-code-deepseek).",
      },
    ],
  },
  cta: {
    title: "Convierte DeepSeek V4.1 Flash en un empleado de IA.",
    text: "Crewmark convierte las sesiones de DeepSeek Harness, Claude Code, Codex y OpenCode en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de la API de DeepSeek (registro de cambios, noticias, precios) y la ficha del modelo en Hugging Face el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con DeepSeek y sin su respaldo. Las cifras de los benchmarks son las de DeepSeek. Los nombres de productos son marcas de sus propietarios.",
};
