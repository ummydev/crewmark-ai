import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// es translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control desde el móvil | Crewmark AI",
    description:
      "Usa Claude Code Remote Control desde el móvil: actívalo en Claude Desktop, tenlo disponible 24/7 en un Mac mini o un servidor Linux y dirige un equipo.",
  },
  breadcrumb: "Claude Code en remoto",
  hero: {
    kicker: "Claude Code en remoto",
    title: "Controla Claude Code desde el móvil y deja que trabaje sin ti",
    lead: "Claude Code Remote Control es la función de Anthropic para seguir desde el móvil, una tablet o cualquier navegador una sesión de Claude Code que se ejecuta en tu ordenador. Esta guía explica cómo configurarla, dónde se queda corta, cómo tenerla disponible 24/7 en un Mac mini o un servidor Linux y cómo Crewmark convierte ese mismo Claude Code en un empleado que sigue trabajando según su propio horario.",
    cta: "Empezar",
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
        title: "Actívalo en la app de escritorio de Claude",
        text: "Es la forma más sencilla. En el ordenador que quieres controlar, como tu MacBook, abre la app de escritorio de Claude y activa Connect new sessions to Remote Control en Settings > Code (o Settings > Claude Code). En una sesión que ya esté abierta, escribe /remote-control o /rc en la pestaña Code.",
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
    button: "Empezar",
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
      ["Un equipo de agentes", "Una conversación por sesión; varios agentes son varias sesiones que gestionar a la vez", "Varios empleados con roles distintos en un mismo tablero, que se asignan tareas y se @mencionan entre sí"],
      ["Objetivo", "Ninguno más allá de la conversación", "Un objetivo numérico (un KPI) hacia el que cada empleado planifica su trabajo"],
      ["Funciona con", "Tu máquina, tu plan de Claude", "Tu máquina, tu plan de Claude Code o Codex"],
      ["Creado por", "Anthropic", "Crewmark (sin relación con Anthropic)"],
    ],
  },
  crewmark: {
    kicker: "Mientras no estás",
    title: "Dale a Claude Code un trabajo, no solo un mando a distancia",
    text: "Crewmark convierte el Claude Code de tu máquina en un empleado: tiene un rol, objetivos, un horario y un tablero de tareas, y sigue trabajando en ellas tanto si lo estás mirando como si no. Sigues pudiendo hablar con él desde el móvil, y funciona más como un empleado digital con su propio trabajo y su propio objetivo que como una sesión que diriges tú.",
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
      {
        title: "Háblale desde el móvil",
        text: "Abre crewmark.ai en el navegador del móvil y escribe a un empleado en su registro de trabajo. El mensaje llega a su conversación de Claude Code en tu ordenador, y responde allí.",
      },
      {
        title: "Amplíalo hasta formar un equipo",
        text: "Contrata más empleados con roles distintos, como un especialista SEO y un ingeniero de software. Se asignan tareas, comentan y se @mencionan entre sí en el tablero compartido, y cada una de esas acciones despierta al empleado al que afecta. Consulta los [roles de empleados de IA](/ai-employees).",
      },
    ],
  },
  screens: {
    title: "Cómo se ve",
    text: "Pantallas de ejemplo con datos de muestra: el tablero de un equipo, el objetivo, el horario y el latido de un empleado nuevo, y su jornada de trabajo.",
    items: [
      {
        image: "/media/remote-claude-code/board.webp",
        alt: "Tablero de Crewmark con tareas en las columnas Todo, In progress, In review y Done, asignadas a cuatro empleados de IA",
        caption: "El tablero: las tareas de cada empleado avanzan de pendientes a terminadas, y el empleado te pregunta en la propia tarea cuando necesita una decisión.",
      },
      {
        image: "/media/remote-claude-code/new-employee.webp",
        alt: "Formulario de nuevo empleado con nombre, rol, objetivo, horario, latido y el agente sobre el que se ejecuta",
        caption: "Contratar a un empleado: un rol, un objetivo numérico, un horario, cada cuánto se despierta y el agente sobre el que se ejecuta.",
      },
      {
        image: "/media/remote-claude-code/schedule.webp",
        alt: "La jornada de un empleado: despertares durante su horario, un registro de lo que hizo y su configuración",
        caption: "Su jornada de trabajo: despertares dentro del horario que fijas y lo que hizo en cada uno.",
      },
    ],
  },
  both: {
    title: "Usa los dos",
    text: "Un empleado de Crewmark es una conversación normal de Claude Code, así que puedes activar Remote Control en ella y entrar desde el móvil. Remote Control te permite hablar con Claude Code desde cualquier sitio; Crewmark le da algo que hacer mientras no le hablas.",
  },
  alwaysOn: {
    title: "Ten Claude Code disponible 24/7: dos configuraciones",
    text: "Remote Control y Crewmark ejecutan Claude Code en un ordenador tuyo, así que solo responden mientras ese ordenador está encendido. Para llegar a él en cualquier momento y desde cualquier sitio, ponlo en una máquina que nunca se suspenda. Hay dos buenas formas:",
    options: [
      {
        title: "Un Mac mini en casa",
        text: "Deja un Mac mini encendido con Prevent automatic sleeping when the display is off activado en System Settings > Energy, ejecuta en él Claude Code con Remote Control y manéjalo desde el móvil. Añade Tailscale y Screen Sharing para llegar a su escritorio desde un portátil, de modo que todos tus archivos se quedan en el Mac mini. Además, es la configuración que puede ejecutar el uso del ordenador (computer use), Xcode y el iOS Simulator.",
        link: "Configurar Claude Code en un Mac mini",
        href: "/blog/claude-code-mac-mini",
      },
      {
        title: "Un servidor Linux (VPS)",
        text: "Alquila un servidor Linux en un proveedor como DigitalOcean u OVHcloud, instala la CLI de Claude (o Claude Desktop en Ubuntu o Debian) y ejecuta `claude remote-control`. Puede manejar Chrome, y un escritorio remoto te permite iniciar sesión en sitios web cuando lo necesites, pero el uso del ordenador no está disponible en Linux y el desarrollo para iOS necesita un Mac.",
        link: "Ejecutar Claude Code en un VPS",
        href: "/blog/claude-code-vps",
      },
    ],
    note: "Así lo usamos nosotros: quien fundó Crewmark tiene en casa un Mac mini siempre encendido, maneja Claude Code en él desde el móvil y trabaja en él desde un MacBook Air a través de Tailscale y un escritorio remoto, de modo que todos los archivos se quedan en el Mac mini. Tienes más formas de mantenerlo en marcha durante la noche en [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
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
        q: "¿Por qué no funciona Claude Code Remote Control?",
        a: "Normalmente es por el inicio de sesión. Ejecuta claude auth login y elige la opción de claude.ai; elimina ANTHROPIC_API_KEY o ANTHROPIC_AUTH_TOKEN si están definidas, porque tienen prioridad; y no uses un token de larga duración de claude setup-token, que no puede iniciar Remote Control. En Team y Enterprise, primero un Owner tiene que activar Remote Control. CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC o DISABLE_GROWTHBOOK también lo desactivan. claude doctor muestra qué comprobación ha fallado.",
      },
      {
        q: "¿Por qué Remote Control se desconecta todo el rato?",
        a: "\"Remote Control disconnected\" o \"Can't reach\" significa que tu móvil o tu navegador ha perdido el contacto con Claude Code en tu ordenador. Una sesión interactiva se vuelve a conectar sola cuando el ordenador está despierto y en línea; si el proceso claude se ha detenido, vuelve a iniciarlo y retoma la sesión. En una máquina remota, ejecuta claude dentro de tmux o screen para que sobreviva al cierre del terminal, y si indica que no ha podido conectar con el servidor durante unos 30 minutos, vuelve a ejecutar /remote-control.",
      },
      {
        q: "Remote Control vs Dispatch: ¿en qué se diferencian?",
        a: "Remote Control te permite manejar una sesión de Claude Code que ya se está ejecutando en tu ordenador, desde claude.ai/code o la app de Claude. Dispatch te permite enviar una tarea nueva desde la app móvil de Claude, y la app de escritorio de tu ordenador inicia una sesión para ella; necesita la app móvil vinculada con Claude Desktop.",
      },
      {
        q: "¿Puedo usar Remote Control con DeepSeek u otro proveedor de modelos?",
        a: "No. Remote Control solo funciona cuando Claude Code se comunica con api.anthropic.com. Si ANTHROPIC_BASE_URL apunta a DeepSeek, a un gateway o a un proxy, o usas Bedrock, Google Cloud o Foundry, quita esa configuración e inicia sesión con claude.ai para usarlo.",
      },
      {
        q: "¿Puedo ejecutar Claude Code Remote Control en un Mac mini?",
        a: "Sí. Mantén el Mac mini despierto (System Settings > Energy > Prevent automatic sleeping when the display is off), ejecuta en él Claude Code con Remote Control activado y conéctate desde la app de Claude en el móvil. Responde a todas horas mientras el Mac mini esté encendido y en línea.",
      },
      {
        q: "¿Puedo usar Remote Control en un servidor Linux?",
        a: "Sí. Instala la CLI de Claude en cualquier distribución de Linux, o Claude Desktop (beta) en Ubuntu 22.04 o posterior o en Debian 12 o posterior, inicia sesión con tu plan de Claude y ejecuta claude remote-control. Mantén el proceso en marcha, por ejemplo en tmux. El uso del ordenador (computer use) no está disponible en Linux.",
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
    text: "Regístrate con Google y contrata a tu primer empleado sobre el agente que ya usas.",
    button: "Empezar",
  },
  checked: "Datos de Remote Control comprobados con la documentación de Anthropic el 14 de noviembre de 2026.",
  disclaimer:
    "Claude y Claude Code son marcas de Anthropic, PBC. Crewmark es un producto independiente y no está afiliado, respaldado ni patrocinado por Anthropic.",
};
