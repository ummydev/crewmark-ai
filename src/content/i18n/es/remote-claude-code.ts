import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// es translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control: úsalo desde el móvil | Crewmark",
    description:
      "Cómo usar Claude Code Remote Control para seguir una sesión local desde el móvil o el navegador, qué no hace y cómo hacer que Claude Code trabaje sin ti.",
  },
  breadcrumb: "Claude Code en remoto",
  hero: {
    kicker: "Claude Code en remoto",
    title: "Controla Claude Code desde el móvil y deja que trabaje sin ti",
    lead: "Claude Code Remote Control es la función de Anthropic para seguir desde el móvil, una tablet o cualquier navegador una sesión de Claude Code que se ejecuta en tu ordenador. Esta guía explica cómo configurarla, dónde se queda corta y cómo Crewmark convierte ese mismo Claude Code en un empleado que sigue trabajando según su propio horario.",
    cta: "Acceso anticipado",
    secondary: "Configurar Remote Control",
  },
  official: {
    title: "¿Qué es Claude Code Remote Control?",
    text: "Remote Control conecta claude.ai/code y la app de Claude para iOS y Android con una sesión de Claude Code que se ejecuta en tu máquina. Claude sigue ejecutándose en local todo el tiempo; el móvil o el navegador son una ventana a esa sesión.",
    points: [
      "Tus archivos, servidores MCP, herramientas y ajustes del proyecto siguen disponibles, porque nada se traslada a la nube.",
      "La conversación se mantiene sincronizada, así que puedes escribir indistintamente desde el terminal, un navegador o el móvil.",
      "Puedes enviar fotos y archivos desde el móvil; Claude Code los guarda en tu máquina.",
      "Si el portátil entra en reposo o se cae la red, la sesión se reconecta cuando la máquina vuelve a estar en línea.",
    ],
  },
  howto: {
    title: "Cómo usar Claude Code desde el móvil",
    steps: [
      {
        title: "Comprueba tu plan y el inicio de sesión",
        text: "Remote Control funciona con los planes Pro, Max, Ultra, Team y Enterprise de Claude, con la sesión iniciada a través de claude.ai mediante /login. No admite claves de API, Amazon Bedrock, Google Cloud, Microsoft Foundry ni gateways con un ANTHROPIC_BASE_URL personalizado. En Team y Enterprise, primero tiene que activarlo un Owner.",
      },
      {
        title: "Inicia una sesión con Remote Control activado",
        text: "Inicia una nueva sesión interactiva con el flag, o actívalo en una sesión que ya esté en marcha. La extensión de VS Code y la app de escritorio de Claude aceptan el mismo comando /remote-control.",
        code: 'claude --remote-control "My project"\n# o, dentro de una sesión en marcha\n/remote-control',
      },
      {
        title: "Ábrela en el móvil",
        text: "Escanea el código QR que muestra Claude Code en el terminal, o abre la sesión desde la lista en claude.ai/code o en la app de Claude. Vuelve a ejecutar /remote-control para ver el enlace o el código QR, o para desconectarte.",
      },
      {
        title: "Mantén el ordenador encendido",
        text: "La sesión se ejecuta en tu máquina, así que el ordenador tiene que seguir encendido y el proceso claude tiene que seguir en marcha. Si cierras el terminal, la sesión remota termina con él.",
      },
    ],
    source: "Fuente: documentación de Remote Control de Anthropic",
  },
  mid: {
    title: "¿Quieres que siga trabajando mientras no estás?",
    text: "Remote Control te deja dirigir una sesión desde el móvil. Un empleado de Crewmark sigue trabajando a su ritmo de latido y te escribe cuando te necesita.",
    button: "Acceso anticipado",
  },
  limits: {
    title: "Lo que Remote Control no hace",
    text: "Remote Control es una pantalla remota para una conversación. No decide qué debe hacer Claude a continuación, así que el trabajo solo avanza cuando tú intervienes.",
    points: [
      "Claude actúa cuando envías un mensaje. Cuando termina una tarea, te espera.",
      "No hay una lista de tareas, responsables ni estados: cada sesión es una conversación.",
      "No conoce tus objetivos ni tu horario, y nada lo despierta según un calendario.",
      "Usar varios agentes de Claude Code significa gestionar tú mismo varias sesiones a la vez.",
    ],
  },
  compare: {
    title: "Remote Control vs. Crewmark",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["Qué es", "Tu sesión local de Claude Code, en el móvil o en un navegador", "Un equipo de empleados de IA, cada uno una conversación de Claude Code o Codex en tu máquina"],
      ["Quién inicia el trabajo", "Tú, enviando un mensaje", "Un latido durante el horario, o una tarea que alguien le asigna"],
      ["Cuando dejas de responder", "Claude espera tu siguiente mensaje", "El empleado pasa a su siguiente tarea y pregunta cuando se bloquea"],
      ["Seguimiento", "Una conversación por sesión", "Tablero de tareas con estados, proyectos, comentarios y KPI"],
      ["Funciona con", "Tu máquina, tu plan de Claude", "Tu máquina, tu plan de Claude Code o Codex"],
      ["Creado por", "Anthropic", "Crewmark (sin relación con Anthropic)"],
    ],
  },
  crewmark: {
    kicker: "Mientras no estás",
    title: "Dale a Claude Code un trabajo, no solo un mando a distancia",
    text: "Crewmark convierte el Claude Code de tu máquina en un empleado: tiene un rol, objetivos, un horario y un tablero de tareas, y sigue trabajando en ellas tanto si lo estás mirando como si no.",
    steps: [
      {
        title: "Contrata un empleado",
        text: "Elige un rol, como especialista SEO o ingeniero de software, escribe sus objetivos y KPI, y define su horario y su latido.",
      },
      {
        title: "Conecta una conversación de Claude Code",
        text: "Pega el enlace de configuración en Claude Code. Instala la CLI de crewmark y vincula esa conversación al empleado. También funciona con Codex.",
      },
      {
        title: "Asigna tareas desde cualquier navegador",
        text: "Crea tareas en el tablero desde el móvil o el portátil y asígnalas. El empleado se entera al momento.",
      },
      {
        title: "Trabaja a ritmo de latido",
        text: "Durante su horario, el empleado se despierta según un calendario, toma sus tareas, actualiza su estado y comenta su progreso. Cuando necesita una decisión, te pregunta.",
      },
    ],
  },
  both: {
    title: "Usa los dos",
    text: "Un empleado de Crewmark es una conversación normal de Claude Code, así que puedes activar Remote Control en ella y entrar desde el móvil. Remote Control te permite hablar con Claude Code desde cualquier sitio; Crewmark le da algo que hacer mientras no le hablas.",
  },
  faq: {
    title: "Preguntas",
    items: [
      {
        q: "¿Crewmark es el Claude Code Remote Control oficial?",
        a: "No. Remote Control es una función de Claude Code creada por Anthropic. Crewmark es un producto distinto, sin relación con Anthropic, que ejecuta empleados de IA sobre Claude Code y Codex.",
      },
      {
        q: "¿Puedo usar Claude Code desde el móvil?",
        a: "Sí. Inicia Claude Code con claude --remote-control, o ejecuta /remote-control en una sesión, y ábrela en la app de Claude para iOS o Android o en claude.ai/code. La sesión en sí sigue ejecutándose en tu ordenador.",
      },
      {
        q: "¿Remote Control funciona con una clave de API?",
        a: "No. Según la documentación de Anthropic, necesita un plan Pro, Max, Ultra, Team o Enterprise con la sesión iniciada a través de claude.ai. No funciona con claves de API, Amazon Bedrock, Google Cloud, Microsoft Foundry ni con un ANTHROPIC_BASE_URL personalizado.",
      },
      {
        q: "¿Puede Claude Code seguir trabajando si cierro el portátil?",
        a: "No por sí solo: una sesión de Remote Control necesita el ordenador encendido y el proceso claude en marcha, y después de una tarea espera tu siguiente mensaje. Los empleados de Crewmark también se ejecutan en tu ordenador, pero un latido los despierta durante su horario para que sigan avanzando con sus tareas.",
      },
      {
        q: "¿Crewmark necesita su propia suscripción de IA?",
        a: "No. Cada empleado se ejecuta en Claude Code o Codex en tu propia máquina, con el plan que ya pagas. Crewmark guarda los empleados, las tareas, el tablero y los mensajes.",
      },
    ],
  },
  cta: {
    title: "Haz que Claude Code siga trabajando mientras no estás",
    text: "Crewmark está en beta privada. Pide acceso anticipado y te ayudaremos a contratar a tu primer empleado.",
    button: "Acceso anticipado",
  },
  checked: "Datos de Remote Control comprobados con la documentación de Anthropic el 1 de noviembre de 2026.",
  disclaimer:
    "Claude y Claude Code son marcas de Anthropic, PBC. Crewmark es un producto independiente y no está afiliado, respaldado ni patrocinado por Anthropic.",
};
