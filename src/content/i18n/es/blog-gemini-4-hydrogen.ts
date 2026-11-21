import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API: código de modelo gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Encuentra y corrige la prueba que falla en este diff"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen: precios, benchmarks, vs Argon y 3.8 Flash",
    description:
      "Gemini 4 Hydrogen, el modelo rápido de Google para código y agentes: $1.50 / $7.50 por 1M de tokens, contexto de 1M, benchmarks y vs Argon, 3.8 Flash y Claude.",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Nuevo modelo",
    title: "Gemini 4 Hydrogen: precios, benchmarks y cómo se compara",
    lead: "Google lanzó Gemini 4 Hydrogen el 12 de noviembre de 2026: un modelo rápido de la familia Gemini 4 para el trabajo diario de programación y agentes, con un precio de $1.50 por millón de tokens de entrada y $7.50 por millón de tokens de salida en toda su ventana de contexto de 1 millón de tokens. Se sitúa por debajo de Gemini 4 Carbon y Argon, que Google reserva para el razonamiento profundo y de largo recorrido, y sustituye a Gemini 3.8 Flash como el modelo que la mayoría usará a diario. Aquí tienes las novedades, las cifras que publicó Google, cómo se compara su precio con Argon, Carbon, 3.8 Flash y Claude, y dónde puedes usarlo.",
    cta: "Empezar",
    secondary: "Ver los precios",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen de un vistazo",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["Lanzamiento", "12 de noviembre de 2026, por Google"],
        ["Código de modelo", "`gemini-4-hydrogen`"],
        ["Pensado para", "Ejecución rápida en flujos de trabajo de programación y agentes"],
        ["Contexto", "1 millón de tokens de entrada, hasta 1 millón de tokens de salida"],
        ["Niveles de pensamiento", "low, medium, high (predeterminado) y el nuevo xhigh"],
        ["Precio de la API", "$1.50 de entrada y $7.50 de salida por millón de tokens, sin cambios en toda la ventana de contexto; nivel gratuito en la Gemini API"],
        ["Dónde", "Gemini API, Google AI Studio, Android Studio, Gemini para empresas, la app de Gemini, la Búsqueda de Google y Google Antigravity para los suscriptores de pago de Google AI Pro y Ultra"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Novedades de Gemini 4 Hydrogen",
      points: [
        "Un modelo rápido en la familia Gemini 4: Google reserva Carbon y Argon para el razonamiento profundo y de largo recorrido, y posiciona Hydrogen para la ejecución rápida, por sí solo o como ejecutor junto a ellos.",
        "Orchestrator, en Google Antigravity, alterna entre Carbon y Hydrogen dentro de una misma sesión. Google dice que alcanzó una tasa de éxito cercana a la de Carbon en Terminal-Bench 4.0 con un 24% menos de cuota y terminando un 19% más rápido.",
        "Un gran salto frente a Gemini 3.8 Flash, según Google: 2.5 veces más rápido con el ajuste predeterminado high, Terminal-Bench 4.1 sube del 18.2% al 57% y más de cinco veces menos afirmaciones inventadas.",
        "Exploración por lotes de repositorios grandes: lee y busca archivos en paralelo en lugar de uno a uno. Los socios de Google vieron que funcionaba entre 2 y 2.8 veces más rápido con entre un 12% y un 23% menos de tokens que 3.8 Flash.",
        "Cuatro niveles de pensamiento, incluido el nuevo xhigh, para que pagues solo el razonamiento que necesita cada tarea.",
        "Seguridad en el trabajo agéntico: Google informa de hasta un 81% menos de extralimitaciones, 12 veces menos acciones desalineadas y atajos en evaluaciones de uso de herramientas y programación, y una tasa de honestidad del 96.7% en su evaluación interna de agentes.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de Gemini 4 Hydrogen",
      text: [
        "Son las cifras que Google publicó en su anuncio; los resultados independientes llegarán más adelante. Cuando Google ofreció una comparación, aparece en la última columna.",
      ],
      headers: ["Benchmark", "Gemini 4 Hydrogen", "Comparado con"],
      rows: [
        ["Artificial Analysis Intelligence Index", "51 en high; 54 en xhigh", "Gemini 4 Argon: 50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash: 18.2%"],
        ["HLE-Diamond", "58.8%", "Lidera su categoría"],
        ["Vals Tax Agent Bench", "52.3%", "#1 en la clasificación general"],
        ["Vals Legal Research Bench", "55.8%", "Empatado en el #1"],
        ["Multimodal Knowledge Agent (MKA)", "53.4%", "Por delante de otros modelos, según Google"],
        ["Agents' Last Exam v1.1", "71.6%", "Por delante de otros modelos, según Google"],
        ["Agent Arena (arena.ai)", "#5", "Clasificación en vivo"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precios de Gemini 4 Hydrogen",
      text: [
        "Precios de la Gemini API por millón de tokens en USD, según la página de precios de Google del 13 de noviembre de 2026. Los precios de salida incluyen los tokens de pensamiento. Carbon y Argon tienen precios de lanzamiento hasta el 30 de noviembre y después se duplican; el precio de 3.8 Flash se duplica el 1 de enero de 2027. Los precios de Claude son los de Anthropic, tomados de nuestro artículo sobre [Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
      headers: ["Modelo", "Entrada", "Salida", "Lotes (entrada / salida)", "Nivel gratuito"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "Sí"],
        ["Gemini 4 Argon", "$2.00 hasta el 30 de nov., luego $4.00", "$10.00 hasta el 30 de nov., luego $20.00", "$1.00 / $5.00, luego $2.00 / $10.00", "No"],
        ["Gemini 4 Carbon", "$2.00 hasta el 30 de nov., luego $4.00", "$10.00 hasta el 30 de nov., luego $20.00", "$1.00 / $5.00, luego $2.00 / $10.00", "No"],
        ["Gemini 3.8 Flash", "$0.75 hasta el 31 de dic., luego $1.50", "$3.75 hasta el 31 de dic., luego $7.50", "-", "Sí"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen vs Argon vs Carbon",
      text: [
        "Google reparte el trabajo según la profundidad. Carbon es su modelo de razonamiento más capaz, para ingeniería de software compleja, matemáticas y ciencia avanzadas y agentes autónomos de varios pasos. Argon es el modelo de frontera eficiente, con respuestas más rápidas y menos gasto de tokens que Carbon. Hydrogen es para el trabajo diario y rápido de programación y agentes, y puede actuar como ejecutor o verificador mientras Carbon coordina.",
        "En precio, Hydrogen cuesta menos que Argon y Carbon hoy, y la diferencia crece el 1 de diciembre, cuando terminan sus precios de lanzamiento. Según las cifras de Google, también supera por poco a Argon en el Artificial Analysis Intelligence Index (51 frente a 50 en high). Ni Carbon ni Argon tienen nivel gratuito en la Gemini API; Hydrogen sí.",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen vs Gemini 3.8 Flash",
      text: [
        "Si trabajas con 3.8 Flash, Google presenta Hydrogen como la actualización: más rápido con su ajuste predeterminado, más del triple de puntuación en Terminal-Bench 4.1 y muchas menos afirmaciones inventadas. Cuesta el doble por token que 3.8 Flash hasta el 31 de diciembre; desde el 1 de enero de 2027 ambos tienen el mismo precio de lista, $1.50 y $7.50. Los socios de Google también informan de entre un 12% y un 23% menos de tokens por tarea, lo que compensa parte de la diferencia.",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen vs Claude Sonnet 5.5 y Opus 5.5",
      text: [
        "El anuncio de Google no compara Hydrogen con Claude, así que estos son los datos que sí se pueden comparar. Con $1.50 y $7.50 por millón de tokens, el precio de lista de Hydrogen está por debajo del de Claude Sonnet 5.5 ($2 y $10) y muy por debajo del de Opus 5.5 ($4 y $20), y ofrece un contexto de 1 millón de tokens con hasta 1 millón de tokens de salida. Claude Code y Codex ejecutan los modelos de sus propios proveedores, así que la elección del modelo suele depender del agente con el que trabajas; para ver cómo se comparan esos dos, consulta [Claude Code vs Codex](/blog/claude-code-vs-codex).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar Gemini 4 Hydrogen",
      steps: [
        { title: "Pruébalo en Google AI Studio", text: "Elige Gemini 4 Hydrogen en AI Studio; está disponible en todos los niveles de AI Studio, incluido el gratuito." },
        { title: "Llámalo desde la Gemini API", text: "Usa el código de modelo `gemini-4-hydrogen`. Deja el pensamiento en high, el valor predeterminado, y baja a medium o low cuando la velocidad importe más que la profundidad.", code: api },
        { title: "Programa con él en Google Antigravity", text: "Los suscriptores de pago de Google AI Pro y Ultra lo tienen en Antigravity, donde Orchestrator puede alternar entre Carbon y Hydrogen dentro de una misma sesión." },
        { title: "Úsalo en otros agentes", text: "Los agentes de programación que aceptan una clave de la Gemini API pueden llamar a `gemini-4-hydrogen` en cuanto añadan el modelo a su lista; revisa la lista de modelos de tu agente." },
      ],
      source: { label: "Fuente: Google, Introducing Gemini 4 Hydrogen", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un modelo más rápido es solo la mitad. La otra mitad es un trabajo.",
      text: [
        "Los modelos son cada vez más rápidos y baratos, pero los agentes que los usan siguen esperando el siguiente prompt. Crewmark convierte las sesiones de tu agente de programación en empleados de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, para que tomen la siguiente issue de un tablero por su cuenta.",
      ],
      steps: [
        { title: "Elige un rol", text: "Entre los [roles de empleados de IA](/ai-employees), como un [ingeniero de software de IA](/ai-employees/software-engineer)." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues, haz que las habituales se repitan y deja que el heartbeat despierte al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con la configuración y las reglas para cada agente, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar Gemini 4 Hydrogen" },
  mid: {
    title: "¿Quieres que tus agentes trabajen en tus issues con un horario?",
    text: "Crewmark le da a cada agente un rol, un heartbeat y un tablero compartido, para que tome el siguiente trabajo por su cuenta.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Gemini 4 Hydrogen?",
        a: "El modelo rápido de la familia Gemini 4 de Google para el trabajo diario de programación y agentes, lanzado el 12 de noviembre de 2026. Se sitúa por debajo de Gemini 4 Carbon y Argon, y tiene un contexto de 1 millón de tokens con hasta 1 millón de tokens de salida.",
      },
      {
        q: "¿Cuánto cuesta Gemini 4 Hydrogen?",
        a: "En la Gemini API, $1.50 por millón de tokens de entrada y $7.50 por millón de tokens de salida, sin cambios en toda la ventana de contexto; por lotes, $0.75 y $3.75. Hay un nivel gratuito, y está en la app de Gemini para todo el mundo.",
      },
      {
        q: "¿Es Gemini 4 Hydrogen mejor que Argon?",
        a: "Google los posiciona de forma distinta: Argon y Carbon para el razonamiento profundo y de largo recorrido, Hydrogen para la ejecución rápida. En el Artificial Analysis Intelligence Index, Google da a Hydrogen 51 con su ajuste predeterminado y a Argon 50, y Hydrogen cuesta menos.",
      },
      {
        q: "Gemini 4 Hydrogen vs 3.8 Flash: ¿debería cambiar?",
        a: "Según Google, Hydrogen es 2.5 veces más rápido con su ajuste predeterminado, logra un 57% en Terminal-Bench 4.1 frente al 18.2% y genera muchas menos afirmaciones inventadas. Cuesta el doble por token que 3.8 Flash hasta el 31 de diciembre de 2026; desde el 1 de enero de 2027 ambos tienen un precio de lista de $1.50 y $7.50.",
      },
      {
        q: "¿Cuál es el código de modelo de Gemini 4 Hydrogen?",
        a: "`gemini-4-hydrogen`, en la Gemini API y en Google AI Studio.",
      },
      {
        q: "¿Dónde está la ficha del modelo (model card) de Gemini 4 Hydrogen?",
        a: "Google la publicó en PDF: [ficha del modelo de Gemini 4 Hydrogen](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
      },
    ],
  },
  cta: {
    title: "Pon los modelos más nuevos en un trabajo permanente.",
    text: "Crewmark convierte las sesiones de los agentes de programación en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con el anuncio de Google y las páginas de precios y modelos de la Gemini API el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Google ni por Anthropic. Gemini y Claude son marcas comerciales de sus respectivos propietarios.",
};
