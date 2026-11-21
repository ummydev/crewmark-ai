import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts (the `en` value of claudeCodeVps).

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code en un VPS: configúralo 24/7 en un servidor Linux",
    description:
      "Instala Claude Code en un VPS Linux o un servidor Ubuntu, usa Remote Control en modo servidor, mantenlo en tmux y manéjalo desde el móvil. Y sus límites.",
  },
  breadcrumb: "Claude Code en un VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code en un VPS: ejecútalo en un servidor Linux y manéjalo desde el móvil",
    lead: "Remote Control te permite manejar Claude Code desde la app de Claude en el móvil, pero solo mientras el ordenador en el que se ejecuta está encendido. Un servidor Linux alquilado, un VPS, no se apaga. Instala Claude Code en él, ejecuta Remote Control en modo servidor y podrás abrir sus sesiones desde el móvil estés donde estés. Esta guía explica la configuración en Ubuntu, Debian o cualquier otra distribución, cómo mantenerlo en marcha, cómo añadir un escritorio para iniciar sesión en sitios web y qué no puede hacer un servidor Linux en comparación con [un Mac mini en casa](/blog/claude-code-mac-mini).",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "Qué necesitas",
      points: [
        "Un servidor Linux al que puedas conectarte por SSH, de un proveedor como DigitalOcean u OVHcloud. Cualquier distribución sirve para la CLI de Claude Code; Claude Desktop necesita Ubuntu 22.04 o posterior, o Debian 12 o posterior.",
        "Un plan Pro, Max, Ultra, Team o Enterprise de Claude. Remote Control no funciona con claves de API, y en Team o Enterprise primero tiene que activarlo un Owner.",
        "La app de Claude en el móvil (iOS o Android), o claude.ai/code en un navegador.",
        "Opcionalmente, un entorno de escritorio y un escritorio remoto en el servidor, para cuando Claude necesite un sitio web en el que tengas que iniciar sesión.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Code en un VPS Linux",
      steps: [
        {
          title: "Alquila un servidor y conéctate a él",
          text: "Crea un servidor Linux en un proveedor como DigitalOcean u OVHcloud y conéctate a él por SSH. Si eliges Ubuntu 22.04+ o Debian 12+, Claude Desktop sigue siendo una opción; en cualquier otra distribución usas la CLI.",
        },
        {
          title: "Instala Claude Code e inicia sesión",
          text: "Instala la CLI de Claude Code con el script de instalación de Anthropic. Se ejecuta en un terminal (Anthropic incluye Ubuntu 20.04+ y Debian 10+ entre los sistemas compatibles), así que encaja en un servidor sin interfaz gráfica (headless) al que solo llegas por SSH. En Ubuntu 22.04+ o Debian 12+ puedes instalar Claude Desktop en su lugar, con apt; en Linux está en beta (consulta [Claude Desktop en Linux](https://code.claude.com/docs/en/desktop-linux)). Después ejecuta `claude` e inicia sesión con tu cuenta de Claude, no con una clave de API.",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Inicia Remote Control en modo servidor",
          text: "Desde la carpeta de tu proyecto, ejecuta `claude remote-control`. Inicia un servidor que puede alojar varias sesiones de Claude Code a la vez, y puedes abrir cada una de ellas desde el móvil. Añade `--chrome` para activar la integración con Chrome en esas sesiones. Si prefieres que se conecte cada sesión interactiva, pon `remoteControlAtStartup` en true en `~/.claude/settings.json`.",
          code: server,
        },
        {
          title: "Mantenlo en marcha después de cerrar sesión",
          text: "Remote Control solo funciona mientras el proceso claude está en marcha: si cierras el terminal, sus sesiones se desconectan. Ejecútalo dentro de tmux o screen para que sobreviva al cierre de la conexión SSH, o como servicio. Además, el modo servidor se cierra tras unos 10 minutos sin red, así que reinícialo automáticamente, como hace el bucle de arriba. Para los modos de permisos y los límites de uso en ejecuciones largas, consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Ábrelo desde el móvil",
          text: "Abre la app de Claude en iOS o Android, o claude.ai/code, y elige una sesión. Claude se ejecuta en el servidor; el móvil muestra la conversación y envía tus mensajes. Los detalles de configuración y las soluciones están en [la guía de Remote Control](/remote-claude-code). Si prefieres escribir a Claude Code desde Telegram, consulta [Channels de Claude Code](/blog/claude-code-channels).",
        },
      ],
      source: { label: "Fuente: documentación de Remote Control de Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "Añade un escritorio para iniciar sesión en sitios web",
      text: [
        "Un servidor al que llegas por SSH no tiene pantalla, lo cual no es un problema hasta que Claude necesita un sitio en el que tienes que iniciar sesión. Añade un escritorio remoto y podrás iniciar sesión tú y luego dejar que Claude use el navegador.",
      ],
      points: [
        "Instala un entorno de escritorio y un servidor de escritorio remoto en el VPS, y conéctate desde el portátil cuando necesites iniciar sesión en algún sitio.",
        "Instala Google Chrome o Microsoft Edge con la extensión Claude in Chrome, e inicia sesión en los sitios que Claude deba usar. Claude in Chrome funciona en Linux; no es compatible con WSL.",
        "Inicia el servidor con `claude remote-control --chrome` para que sus sesiones puedan usar ese navegador.",
        "Llega al escritorio remoto a través de Tailscale, que pone tus dispositivos en una red privada, una tailnet, donde solo ellos pueden comunicarse entre sí. Consulta [qué es Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        "Con un escritorio en Ubuntu o Debian, Claude Desktop también es una opción, además de la CLI.",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Lo que no puede hacer un servidor Linux",
      text: [
        "Si alguna de estas cosas te importa, usa [un Mac mini en casa](/blog/claude-code-mac-mini), la configuración que usa quien fundó Crewmark.",
      ],
      points: [
        "Sin uso del ordenador (computer use). Claude no puede manejar apps ni la pantalla en Linux: en la CLI, el uso del ordenador es solo para macOS, y en Claude Desktop es una vista previa de investigación (research preview) en macOS y Windows.",
        "Sin desarrollo para iOS. Xcode y el iOS Simulator solo funcionan en macOS, así que un servidor Linux no puede compilar ni ejecutar una app para iPhone.",
        "Una app de escritorio más limitada. Claude Desktop en Linux es una beta para Ubuntu y Debian, sin uso del ordenador, Cowork ni dictado.",
        "Un proceso que tiene que seguir activo. Como en cualquier configuración de Remote Control, las sesiones solo están disponibles mientras claude se ejecuta en el servidor.",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Mac mini vs VPS Linux para Claude Code",
      headers: ["", "Mac mini en casa", "VPS Linux"],
      rows: [
        ["Dónde se ejecuta", "Un Mac tuyo, en casa; los archivos se quedan en él", "Un servidor alquilado en un proveedor como DigitalOcean u OVHcloud"],
        ["Remote Control desde el móvil", "Sí: Claude Desktop o la CLI", "Sí: la CLI en cualquier distribución, o Claude Desktop (beta) en Ubuntu 22.04+ y Debian 12+"],
        ["Uso del ordenador (computer use)", "Sí: la CLI en macOS; Desktop como vista previa de investigación con Pro, Max o Ultra", "No"],
        ["Desarrollo para iOS (Xcode, iOS Simulator)", "Sí", "No: necesita un Mac"],
        ["Claude in Chrome", "Sí", "Sí, con Chrome o Edge"],
        ["Escritorio remoto", "Screen Sharing, a través de Tailscale", "Un entorno de escritorio y un escritorio remoto que añades tú"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale al servidor un trabajo fijo",
      text: [
        "Un servidor que nunca se suspende responde cuando le escribes y espera cuando no lo haces. Crewmark convierte una conversación de Claude Code en él en un empleado de IA con un rol, objetivos, horario laboral y un heartbeat: durante el horario laboral, la CLI `crewmark`, que funciona en Linux además de en macOS y Windows, despierta al empleado para que avance con sus issues en un tablero compartido. El ordenador en el que se ejecuta tiene que seguir encendido, y un VPS lo está.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO, y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta Claude Code en el servidor",
          text: "Pega el enlace de configuración en una conversación de Claude Code en el VPS. Instala la CLI `crewmark` y vincula esa conversación al empleado. También funciona con Codex.",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Solo entre semana o todos los días, un horario que puede pasar de la medianoche y un despertar cada 15, 30, 60, 120 o 240 minutos.",
        },
        {
          title: "Asigna issues desde el móvil",
          text: "Crea y asigna issues en el tablero de crewmark.ai desde cualquier navegador; asignar una despierta al empleado al momento. Cuando necesita una revisión o una decisión, pone la issue en Requiere acción y te pregunta allí. Tienes trabajos para darle en [casos de uso de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Claude Code en un VPS Linux con Remote Control" },
  mid: {
    title: "¿Quieres que el servidor siga trabajando cuando no le escribes?",
    text: "Crewmark despierta a Claude Code con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puedo ejecutar Claude Code en un VPS?",
        a: "Sí. Instala la CLI de Claude Code en un servidor Linux, inicia sesión con un plan Pro, Max, Ultra, Team o Enterprise y ejecuta `claude remote-control` dentro de tmux para que siga en marcha después de cerrar sesión. Luego abre sus sesiones desde la app de Claude en el móvil o en claude.ai/code.",
      },
      {
        q: "¿Cómo instalo Claude Code en un servidor Linux?",
        a: "Instala la CLI de Claude Code, que funciona en cualquier distribución, incluido un servidor sin interfaz gráfica al que llegas por SSH, e inicia sesión con tu cuenta de Claude. En Ubuntu 22.04+ o Debian 12+ también puedes instalar Claude Desktop con apt; en Linux está en beta y no incluye uso del ordenador, Cowork ni dictado.",
      },
      {
        q: "¿Claude Code Remote Control funciona en Linux?",
        a: "Sí. Ejecuta `claude remote-control` para tener un servidor que aloja varias sesiones, o activa Remote Control para una sola sesión con `/remote-control`. Necesita haber iniciado sesión con claude.ai en un plan Pro, Max, Ultra, Team o Enterprise; no admite claves de API.",
      },
      {
        q: "¿Cómo mantengo Claude Code en marcha en un servidor después de cerrar SSH?",
        a: "Ejecútalo dentro de tmux o screen, o como servicio. Al cerrar el terminal se detiene el proceso claude y sus sesiones de Remote Control se desconectan. El modo servidor se cierra tras unos 10 minutos sin red, así que envuélvelo en un bucle o en un servicio que lo reinicie.",
      },
      {
        q: "¿Puede Claude Code usar computer use en un servidor Linux?",
        a: "No. El uso del ordenador no está disponible en Linux, ni en la CLI ni en Claude Desktop. Claude in Chrome sí funciona en Linux, así que Claude puede seguir usando sitios web en un navegador. Para el uso del ordenador o el desarrollo para iOS, usa un Mac, como [un Mac mini en casa](/blog/claude-code-mac-mini).",
      },
      {
        q: "¿Qué necesito para ejecutar Claude Code en un VPS?",
        a: "Un servidor Linux al que puedas conectarte por SSH, un plan de Claude que incluya Remote Control (Pro, Max, Ultra, Team o Enterprise) y la app de Claude en el móvil. Cualquier distribución sirve para la CLI; Claude Desktop necesita Ubuntu 22.04+ o Debian 12+.",
      },
    ],
  },
  cta: {
    title: "Pon tu servidor a trabajar.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de Claude Code de Anthropic (Remote Control, Claude Desktop en Linux, computer use, integración con Chrome) y la de Tailscale el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic ni por ninguna empresa mencionada en esta página. Claude y Claude Code son marcas comerciales de Anthropic.",
};
