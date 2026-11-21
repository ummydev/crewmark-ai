import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts (the `en` value of codexMacMini).

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex en Mac mini: configúralo y úsalo 24/7 desde el móvil",
    description:
      "Codex 24/7 en un Mac mini: instala la app de ChatGPT y la CLI, mantén el Mac despierto, activa el control remoto, vincula el móvil y añade Computer Use.",
  },
  breadcrumb: "Codex en un Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex en un Mac mini: un host siempre encendido que controlas desde el móvil",
    lead: "El control remoto te permite usar Codex desde la app de ChatGPT en el móvil, pero solo mientras el ordenador en el que se ejecuta está despierto y conectado. Si cierras un portátil, el móvil lo pierde. Para trabajo de larga duración, OpenAI sugiere un Mac dedicado y siempre encendido, y un Mac mini en casa encaja: se queda encendido, mantiene tus proyectos, inicios de sesión y herramientas en una máquina tuya, y puede ejecutar Computer Use y tareas en el navegador. Esta guía explica cómo instalar Codex en él, mantenerlo despierto, configurar el control remoto, vincular el móvil y llegar a su escritorio desde un portátil.",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Por qué un Mac mini como host de Codex",
      text: [
        "Tu móvil no ejecuta Codex. Envía prompts, aprobaciones y mensajes de seguimiento, y el host aporta todo lo demás: proyectos, chats, archivos, credenciales, plugins, servidores MCP, skills, Computer Use, el navegador y las herramientas locales. Así que el host decide qué puede hacer Codex desde tu móvil, y si se puede llegar a él. Un Mac mini que nunca se suspende es un buen host:",
      ],
      points: [
        "Se queda encendido. Un host que se suspende, pierde la red o cierra la app corta el acceso remoto hasta que vuelve.",
        "Computer Use y tareas en el navegador. La app de escritorio de ChatGPT ejecuta Computer Use en macOS y Windows; la vista previa para Linux aún no lo tiene. En Windows, Computer Use toma el control del escritorio activo y necesita la sesión desbloqueada. Un Mac tiene el uso con el ordenador bloqueado (locked use), así que una tarea de Computer Use que inicias desde el móvil puede ejecutarse después de que el Mac se bloquee.",
        "Apps para iOS. Xcode y el iOS Simulator solo funcionan en macOS, así que si Codex trabaja en una app para iPhone, el host tiene que ser un Mac.",
        "Tus datos en casa. Los repositorios, los inicios de sesión del navegador y las credenciales se quedan en una máquina tuya, y los sitios web con sesión iniciada y las apps de escritorio funcionan porque el host puede llegar a ellos.",
        "Una base también para servidores. La misma app de escritorio puede añadir servidores Linux como hosts SSH, así que el Mac mini puede ser el ordenador siempre encendido al que se conecta tu móvil mientras los chats se ejecutan en un servidor.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Qué necesitas",
      points: [
        "Un Mac mini que puedas dejar encendido y conectado a internet.",
        "Una cuenta de ChatGPT con acceso a Codex. La tabla de planes de OpenAI incluye el control remoto desde el móvil en Plus, Pro, Business y Enterprise; no está disponible con una clave de API. En un workspace de ChatGPT, puede que un administrador tenga que activar primero el acceso a Remote Control.",
        "La última versión de la app de ChatGPT en el móvil, iOS o Android, con la sesión iniciada en la misma cuenta y el mismo workspace que el Mac mini.",
        "Opcionalmente, Tailscale en el Mac mini y en tu portátil, para llegar al escritorio del Mac mini desde cualquier sitio.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Codex en un Mac mini",
      steps: [
        {
          title: "Instala la app de escritorio de ChatGPT y la Codex CLI",
          text: "Desde el 9 de julio de 2026, Codex está en la app de escritorio de ChatGPT, junto a Chat y Work. Instala la app para macOS, inicia sesión con la cuenta y el workspace que usas en el móvil y selecciona Codex. La Codex CLI es opcional, pero viene bien cuando entras por SSH: instálala con el script de OpenAI o con Homebrew, ejecuta `codex` y elige Sign in with ChatGPT. `codex app` abre la app de escritorio, y la instala si falta.",
          code: install,
        },
        {
          title: "Mantén el Mac mini despierto",
          text: "En System Settings > Energy, activa Prevent automatic sleeping when the display is off para que el Mac mini siga funcionando con la pantalla apagada; Wake for network access le permite despertarse para los servicios compartidos (consulta [los ajustes de reposo y activación de Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)). Después, en la app de escritorio, activa Settings > General > Prevent sleep while running, para que los chats locales sigan adelante mientras no estás.",
        },
        {
          title: "Activa el control remoto",
          text: "En la app de escritorio, abre Settings > Connections > Control this Mac or PC y selecciona Set up o Add. Aprueba el acceso remoto y completa la verificación que te pida; la app muestra un código QR. En Settings > Connections también eliges mantener el ordenador despierto, activas Computer Use, instalas la extensión de Chrome y gestionas los dispositivos conectados.",
        },
        {
          title: "Vincula tu móvil",
          text: "Escanea el código QR con el móvil; se abre ChatGPT. Confirma la cuenta y el workspace y completa el paso de MFA, SSO o passkey si lo hay. El Mac mini aparece entonces en Codex en la app de ChatGPT (Remote en versiones antiguas), y puedes iniciar chats en sus proyectos, aprobar comandos y revisar diffs. Un código QR vincula un móvil con un host, así que vincula cada móvil que vayas a usar. Para controlarlo también desde un portátil, usa Settings > Connections > Control other devices en el portátil, donde esa opción esté disponible.",
        },
        {
          title: "Activa Computer Use y la extensión de Chrome",
          text: "Para tareas en el navegador y en el escritorio, el host necesita las dos. Con Codex seleccionado, abre Settings > Computer use, busca Any App en Control y selecciona Install o activa el interruptor, e instala la extensión de Chrome desde Settings > Connections. Computer Use solo está disponible en algunas regiones. Para que una tarea de Computer Use que inicias desde el móvil se ejecute con el Mac bloqueado, activa el uso con el ordenador bloqueado (locked use) en Settings > Computer Use. Instala un plug-in de autorización de Apple, solo desbloquea durante un turno activo de Computer Use y vuelve a bloquear si alguien usa el teclado o el puntero del Mac mini.",
        },
        {
          title: "Añade hosts SSH si tu código está en un servidor",
          text: "Settings > Connections también puede añadir un servidor Linux de `~/.ssh/config` como host SSH; después eliges una carpeta de proyecto en él. Los chats de ese proyecto se ejecutan en el servidor, mientras tu móvil sigue conectándose al Mac mini. La configuración está en [Codex en un VPS](/blog/codex-vps).",
        },
        {
          title: "Llega al escritorio del Mac mini con Tailscale y Screen Sharing",
          text: "Instala Tailscale en el Mac mini y en tu portátil y añade los dos a la misma tailnet, una red privada donde solo tus dispositivos pueden comunicarse entre sí mediante conexiones WireGuard cifradas (consulta [qué es Tailscale](https://tailscale.com/kb/1151/what-is-tailscale)). En el Mac mini, activa System Settings > General > Sharing > Screen Sharing; no puede estar activado a la vez que Remote Management. Después, conéctate desde el portátil al nombre del Mac mini en tu tailnet para iniciar sesión en sitios web, responder a avisos de seguridad o privacidad que Computer Use no puede aprobar, o ver trabajar a Codex (consulta [la guía de Screen Sharing de Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)).",
        },
      ],
      source: { label: "Fuente: documentación de OpenAI sobre conexiones remotas", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Qué lo mantiene accesible y qué lo detiene",
      points: [
        "El Mac mini tiene que seguir despierto, conectado y con la sesión iniciada en la misma cuenta y el mismo workspace, con la app de escritorio abierta. Si se suspende, pierde la red o la app se cierra, el móvil no puede llegar a él hasta que vuelva. Elegir Sleep tú mismo también corta el acceso.",
        "Cerrar sesión en la app de escritorio desactiva Remote Control pero conserva tus vinculaciones. Cuando vuelvas a iniciar sesión, activa Remote Control de nuevo.",
        "Si aparece un error tras seleccionar Add, reinicia la app de escritorio en el Mac mini y vuelve a intentarlo. Las vinculaciones sin usar desde el 8 de junio de 2026 necesitan las dos apps actualizadas y una nueva vinculación.",
        "El control remoto no empieza a trabajar por su cuenta. Cuando una tarea termina, Codex te avisa y espera tu siguiente prompt. Para tareas programadas y otras formas de iniciar trabajo sin ti, consulta [Codex proactivo](/proactive-codex) y [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        "Tienes más soluciones en [control remoto de Codex](/blog/codex-remote-control#troubleshooting).",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "Otras formas de tener Codex accesible",
      points: [
        "Un servidor Linux como host SSH ejecuta Codex en el servidor, pero tu móvil sigue conectándose a un Mac o PC con Windows que ejecuta la app de escritorio, así que ese ordenador también tiene que seguir encendido. El Mac mini puede ser ese ordenador. Consulta [Codex en un VPS](/blog/codex-vps).",
        "Codex cloud ejecuta tareas en la nube de OpenAI y sigue trabajando mientras tu ordenador está suspendido. Solo ve su entorno en la nube, así que tus archivos locales, las sesiones iniciadas en el navegador y el acceso por VPN no están ahí.",
        "Para Claude Code, la misma configuración con un Mac mini siempre encendido está en [Claude Code en un Mac mini](/blog/claude-code-mac-mini), y la versión de Anthropic del control remoto en [Claude Code Remote Control](/remote-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale al Mac mini siempre encendido un trabajo fijo",
      text: [
        "Un Mac mini siempre encendido responde cada vez que le escribes desde el móvil, y espera cuando no lo haces. Crewmark convierte un chat de Codex en él en un empleado de IA con un rol, un objetivo numérico, horario laboral y un heartbeat: durante el horario laboral, la CLI `crewmark` despierta al empleado para que avance con sus issues en un tablero compartido. El ordenador en el que se ejecuta tiene que seguir encendido, y el Mac mini lo está.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO, y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta Codex en el Mac mini",
          text: "Pega el enlace de configuración en un chat de Codex en el Mac mini. Instala la CLI `crewmark` y vincula ese chat al empleado. También funciona con Claude Code.",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Elige el horario, solo entre semana o todos los días, y cada cuánto se despierta el empleado: cada 15, 30, 60, 120 o 240 minutos. El horario puede pasar de la medianoche, así que en una máquina que nunca se suspende también funciona un turno de noche. Cada despertar llega al mismo chat de Codex, así que retoma el trabajo donde lo dejó.",
        },
        {
          title: "Asigna issues y háblale desde el móvil",
          text: "Abre crewmark.ai en el navegador del móvil para crear y asignar issues, o escribe al empleado en su registro de trabajo; responde allí. Asignar una issue lo despierta al momento y, cuando necesita una revisión o una decisión, pone la issue en Needs action y te pregunta allí. Tienes trabajos para darle en [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Codex en un Mac mini como host siempre encendido" },
  mid: {
    title: "¿Quieres que el Mac mini siga trabajando cuando no le escribes?",
    text: "Crewmark despierta a Codex con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puede Codex funcionar 24/7 en un Mac mini?",
        a: "Sí, siempre que el Mac mini siga despierto, conectado y con la sesión iniciada, con la app de escritorio de ChatGPT abierta. Activa Prevent automatic sleeping when the display is off en System Settings > Energy y Prevent sleep while running en Settings > General de la app, y configura el control remoto para poder llegar a él desde el móvil. Después de cada tarea, Codex espera tu siguiente prompt salvo que otra cosa inicie el trabajo.",
      },
      {
        q: "¿Cómo instalo Codex en un Mac mini?",
        a: "Instala la app de escritorio de ChatGPT para macOS y selecciona Codex en ella. Para el terminal, instala la Codex CLI con `curl -fsSL https://chatgpt.com/codex/install.sh | sh` o `brew install --cask codex`, y luego ejecuta `codex` y elige Sign in with ChatGPT. `codex app` abre la app de escritorio y la instala si falta.",
      },
      {
        q: "¿Cómo uso Codex en mi Mac mini desde el iPhone?",
        a: "En la app de escritorio del Mac mini, abre Settings > Connections > Control this Mac or PC, selecciona Set up o Add y escanea el código QR con el iPhone. El Mac mini aparece entonces en Codex en la app de ChatGPT, donde puedes iniciar chats, aprobar comandos y revisar diffs. La app de ChatGPT en Android también funciona.",
      },
      {
        q: "¿Cuáles son los requisitos mínimos de Codex en un Mac?",
        a: "Para la Codex CLI, la guía de instalación de OpenAI en GitHub indica macOS 12 o posterior, con 4 GB de RAM como mínimo y 8 GB recomendados. La documentación de OpenAI que hemos consultado no da requisitos aparte para la app de escritorio de ChatGPT. Para el control remoto también necesitas acceso a Codex en tu cuenta y la última versión de la app de ChatGPT en el móvil.",
      },
      {
        q: "¿Necesito Tailscale para el control remoto de Codex?",
        a: "No. El control remoto pasa por el relay seguro de OpenAI, así que el Mac mini no queda expuesto a la internet pública. Tailscale sirve para llegar al propio Mac mini, por ejemplo a su escritorio con Screen Sharing o por SSH desde un portátil fuera de casa; la documentación de OpenAI recomienda una VPN o una red mesh para llegar a máquinas fuera de tu red.",
      },
      {
        q: "¿Mac mini o VPS Linux para Codex?",
        a: "Un servidor Linux basta cuando Codex solo necesita un terminal: la CLI funciona en Linux, y la app de escritorio puede abrir proyectos en él por SSH. Pero tu móvil sigue conectándose a un Mac o PC con Windows que ejecuta la app de escritorio, así que necesitas ese ordenador encendido de todos modos. Elige un Mac mini para Computer Use, tareas en el navegador con la extensión de Chrome, desarrollo para iOS o para guardar tus archivos en casa. Consulta [Codex en un VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo a tu Mac mini.",
    text: "Crewmark convierte las sesiones de Codex y Claude Code en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de OpenAI (conexiones remotas, Computer Use, Codex CLI, ajustes, planes), el soporte de Apple y la documentación de Tailscale el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI, Apple ni Tailscale. Codex y ChatGPT son marcas comerciales de OpenAI; Mac, Mac mini y Xcode son marcas comerciales de Apple.",
};
