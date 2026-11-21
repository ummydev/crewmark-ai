import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts (the `en` value of claudeCodeMacMini).

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code en Mac mini: configúralo y úsalo 24/7 desde el móvil",
    description:
      "Ejecuta Claude Code 24/7 en un Mac mini en casa: mantenlo despierto, activa Remote Control, manéjalo desde el móvil y llega a su escritorio con Tailscale.",
  },
  breadcrumb: "Claude Code en un Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code en un Mac mini: un servidor siempre encendido que manejas desde el móvil",
    lead: "Remote Control te permite manejar Claude Code desde la app de Claude en el móvil, pero solo mientras el ordenador en el que se ejecuta está encendido. Así que dale un ordenador que nunca se apague. Quien fundó Crewmark tiene en casa un Mac mini como servidor siempre encendido: Claude Code se ejecuta en él con Remote Control, el móvil lo maneja y un MacBook Air llega a su escritorio a través de Tailscale y un escritorio remoto. Todos los datos se quedan en el Mac mini. Es la configuración que mejor le funciona ahora mismo, y aquí tienes cómo montarla.",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Por qué Claude Code necesita un ordenador que siga encendido",
      text: [
        "Lo más rápido es empezar con el ordenador que ya tienes. La app de escritorio de Claude trae Remote Control integrado: en el ordenador que quieres controlar, abre Settings, activa Connect new sessions to Remote Control y abre la sesión desde la app de Claude en el móvil. Claude sigue ejecutándose en ese ordenador; el móvil es una ventana a él.",
        "El problema es que solo funciona mientras ese ordenador está encendido. Si cierras el portátil, el móvil no puede llegar a Claude Code hasta que se vuelva a despertar. Un Mac mini que se queda encendido en casa elimina ese límite, y eso es lo que monta el resto de esta guía.",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "La configuración de un vistazo",
      points: [
        "Un Mac mini en casa, encendido y configurado para no suspenderse. Es el servidor: Claude Code, tus repositorios, tus inicios de sesión y tus archivos viven en él.",
        "Claude Code con Remote Control activado, en la app de escritorio de Claude o en la CLI.",
        "La app de Claude en el móvil (iOS o Android), o claude.ai/code en cualquier navegador, para abrir esas sesiones desde cualquier sitio.",
        "Tailscale más Screen Sharing, para abrir el escritorio del Mac mini desde un portátil como si lo tuvieras delante.",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Por qué un Mac mini y no un servidor Linux",
      text: [
        "Un servidor Linux alquilado también se queda encendido, y esa configuración está en [Claude Code en un VPS](/blog/claude-code-vps). Un Mac añade cosas que Linux no puede hacer:",
      ],
      points: [
        "El uso del ordenador (computer use), con el que Claude maneja apps y la pantalla. En la CLI solo está disponible en macOS. En Claude Desktop es una vista previa de investigación (research preview) en macOS y Windows, con Pro, Max o Ultra (no Team ni Enterprise), y la app tiene que estar en ejecución. Consulta [la documentación de Anthropic sobre computer use](https://code.claude.com/docs/en/computer-use).",
        "Apps para iOS. Xcode y el iOS Simulator solo funcionan en macOS, así que si Claude Code trabaja en una app para iPhone, el servidor tiene que ser un Mac.",
        "La app de escritorio completa. Claude Desktop en Linux es una beta para Ubuntu y Debian, sin uso del ordenador, Cowork ni dictado.",
        "Tus datos en casa. Los repositorios, los inicios de sesión del navegador y los archivos se quedan en una máquina tuya en lugar de en el servidor de un proveedor.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Code en un Mac mini",
      steps: [
        {
          title: "Mantén el Mac mini despierto",
          text: "En System Settings > Energy, activa Prevent automatic sleeping when the display is off para que el Mac mini siga funcionando con la pantalla apagada. Activa también Wake for network access, que le permite despertarse para los servicios compartidos. Consulta [los ajustes de reposo y activación de Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac).",
        },
        {
          title: "Instala Claude Code e inicia sesión",
          text: "Instala la app de escritorio de Claude, la CLI de Claude Code o ambas, e inicia sesión con tu cuenta de Claude. Remote Control necesita un plan Pro, Max, Ultra, Team o Enterprise. No funciona con claves de API, y en Team o Enterprise primero tiene que activarlo un Owner.",
        },
        {
          title: "Activa Remote Control",
          text: "En la app de escritorio, abre Settings > Code (o Settings > Claude Code) y activa Connect new sessions to Remote Control, para que cualquier sesión nueva se pueda abrir desde el móvil. Para una sola sesión, escribe `/remote-control` o `/rc` en la pestaña Code. En la CLI, pon `remoteControlAtStartup` en true en `~/.claude/settings.json`, o ejecuta `claude remote-control` como un servidor que aloja varias sesiones a la vez.",
          code: remoteControl,
        },
        {
          title: "Ábrelo desde el móvil",
          text: "Abre la app de Claude en iOS o Android, o claude.ai/code en un navegador, y elige la sesión. Claude sigue ejecutándose en el Mac mini; el móvil envía mensajes y muestra los resultados. Si se cae la red, Claude Code se reconecta automáticamente cuando el Mac mini vuelve a estar en línea. Los detalles de configuración y las soluciones están en [la guía de Remote Control](/remote-claude-code).",
        },
        {
          title: "Pon el Mac mini y tu portátil en Tailscale",
          text: "Instala Tailscale en el Mac mini y en el portátil desde el que vas a trabajar, y añade los dos a la misma tailnet. Tailscale crea una red privada entre pares (peer-to-peer) entre tus dispositivos con conexiones WireGuard cifradas, y solo los dispositivos de tu tailnet pueden comunicarse entre sí. Consulta [qué es Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        },
        {
          title: "Activa Screen Sharing",
          text: "En el Mac mini, abre System Settings > General > Sharing y activa Screen Sharing. No puede estar activado a la vez que Remote Management, así que desactiva este primero si lo tienes activado. Consulta [la guía de Screen Sharing de Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac).",
        },
        {
          title: "Trabaja en él desde tu portátil",
          text: "Desde el portátil, conéctate con Screen Sharing al nombre o la dirección del Mac mini en tu tailnet. Verás su escritorio: inicia sesión en un sitio web en su navegador, abre Xcode y el Simulator, o mira lo que está haciendo Claude, desde casa o desde cualquier otro sitio. Quien fundó Crewmark trabaja así desde un MacBook Air, y los archivos nunca salen del Mac mini.",
        },
      ],
      source: { label: "Fuente: documentación de Remote Control de Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "Qué lo mantiene en marcha y qué lo detiene",
      points: [
        "El proceso de Claude Code tiene que seguir en marcha. Si sales de la app de escritorio o cierras el terminal, la sesión se desconecta, así que déjala abierta en el Mac mini.",
        "El reposo y las caídas de red tienen arreglo: Claude Code se reconecta automáticamente cuando la máquina vuelve a estar en línea. El modo servidor (`claude remote-control`) tiene menos paciencia. Tras unos 10 minutos sin red se cierra, así que vuelve a iniciarlo.",
        "Remote Control maneja una sesión que ya está en marcha. No empieza a trabajar por su cuenta: cuando termina una tarea, Claude espera tu siguiente mensaje.",
        "Las solicitudes de permiso y los límites de uso también detienen las ejecuciones largas. [Cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7) explica los modos de permisos, `/goal` y los límites de los planes.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale al Mac mini siempre encendido un trabajo fijo",
      text: [
        "Un Mac mini siempre encendido responde cuando le escribes y espera cuando no lo haces. Crewmark convierte una conversación de Claude Code en él en un empleado de IA con un rol, objetivos, horario laboral y un heartbeat: durante el horario laboral, la CLI `crewmark` despierta al empleado para que avance con sus issues en un tablero compartido. El ordenador en el que se ejecuta tiene que seguir encendido, y el Mac mini lo está.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO, y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta Claude Code en el Mac mini",
          text: "Pega el enlace de configuración en una conversación de Claude Code en el Mac mini. Instala la CLI `crewmark` y vincula esa conversación al empleado. También funciona con Codex.",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Elige el horario, solo entre semana o todos los días, y cada cuánto se despierta el empleado: cada 15, 30, 60, 120 o 240 minutos. El horario puede pasar de la medianoche, así que en una máquina que nunca se suspende también funciona un turno de noche.",
        },
        {
          title: "Asigna issues desde el móvil",
          text: "Crea y asigna issues en el tablero de crewmark.ai desde cualquier navegador; asignar una despierta al empleado al momento. Mantiene al día el estado de cada issue y, cuando necesita una revisión o una decisión, pone la issue en Requiere acción y te pregunta allí. Tienes trabajos para darle en [casos de uso de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Claude Code en un Mac mini como servidor siempre encendido" },
  mid: {
    title: "¿Quieres que el Mac mini siga trabajando cuando no le escribes?",
    text: "Crewmark despierta a Claude Code con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puede Claude Code funcionar 24/7 en un Mac mini?",
        a: "Sí, siempre que el Mac mini siga despierto y el proceso de Claude Code siga en marcha. Activa Prevent automatic sleeping when the display is off en System Settings > Energy, deja abierta la app de escritorio de Claude (o la CLI en ejecución) y activa Remote Control para poder llegar a él desde el móvil. Las solicitudes de permiso y los límites de uso siguen aplicándose.",
      },
      {
        q: "¿Cómo configuro Claude Code en un Mac mini?",
        a: "Mantén el Mac despierto en los ajustes de Energy, instala Claude Code o la app de escritorio de Claude e inicia sesión, activa Connect new sessions to Remote Control (o ejecuta `claude remote-control`) y abre la sesión en la app de Claude en el móvil. Añade Tailscale y Screen Sharing para llegar a su escritorio desde un portátil.",
      },
      {
        q: "¿Cómo uso Claude Code en mi Mac mini desde el iPhone?",
        a: "Con Remote Control. Actívalo para la sesión en el Mac mini y luego abre la app de Claude en el iPhone (o claude.ai/code) y elige la sesión. Claude se ejecuta en el Mac mini; el móvil envía tus mensajes y muestra los resultados. Necesita un plan Pro, Max, Ultra, Team o Enterprise.",
      },
      {
        q: "¿Necesito Tailscale para Claude Code?",
        a: "No para Remote Control: la sesión se abre en la app de Claude. Tailscale sirve para llegar al propio Mac mini, por ejemplo a su escritorio con Screen Sharing desde un portátil. Pone tus dispositivos en una red privada, una tailnet, donde solo ellos pueden comunicarse entre sí.",
      },
      {
        q: "¿Puede Claude Code crear apps para iOS en un Mac mini?",
        a: "Es el Mac lo que lo hace posible: Xcode y el iOS Simulator solo funcionan en macOS, y por eso esta configuración usa un Mac mini en lugar de un servidor Linux. Ejecuta Claude Code en el Mac mini en la carpeta del proyecto de la app y abre su escritorio con Screen Sharing cuando quieras ver el Simulator con tus propios ojos.",
      },
      {
        q: "¿Mac mini o VPS Linux para Claude Code?",
        a: "Un VPS Linux basta cuando Claude Code solo necesita un terminal y un navegador: la CLI funciona en cualquier distribución y Claude in Chrome funciona en Linux. Elige un Mac mini para el uso del ordenador, el desarrollo para iOS con Xcode y el Simulator, o para guardar tus archivos en una máquina en casa. Consulta [Claude Code en un VPS](/blog/claude-code-vps).",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo a tu Mac mini.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de Claude Code de Anthropic (Remote Control, computer use, Claude Desktop en Linux), el soporte de Apple y la documentación de Tailscale el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic, Apple ni Tailscale. Claude y Claude Code son marcas comerciales de Anthropic; Mac, Mac mini y Xcode son marcas comerciales de Apple.",
};
