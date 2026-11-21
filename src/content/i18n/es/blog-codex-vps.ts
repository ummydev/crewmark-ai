import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts (the `en` value of codexVps).

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex en un VPS: instálalo, inicia sesión y conéctate por SSH",
    description:
      "Instala la Codex CLI en un VPS Linux, inicia sesión con device auth, añade el servidor como host SSH en la app de ChatGPT y úsalo desde el móvil.",
  },
  breadcrumb: "Codex en un VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex en un VPS: instálalo en un servidor Linux y conéctate por SSH",
    lead: "Un servidor Linux alquilado, un VPS, nunca se suspende, y la Codex CLI funciona en Linux. Lo que hay que resolver bien es cómo llegas a él desde el móvil: la app de ChatGPT no se conecta al propio servidor. Se conecta a la app de escritorio de ChatGPT en un Mac o PC con Windows, y esa app ejecuta chats en el servidor por SSH. Esta guía explica cómo instalar Codex en el servidor e iniciar sesión, añadirlo como host SSH, controlarlo desde el móvil, una configuración solo de terminal con tmux, cómo proteger el servidor y Codex cloud si prefieres no tener ningún servidor.",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Cómo encaja Codex en un VPS",
      text: ["Intervienen tres máquinas, y cada una tiene una función:"],
      points: [
        "El servidor Linux ejecuta Codex. Los chats en sus proyectos ejecutan comandos, leen archivos y escriben cambios allí, con las dependencias, las políticas de seguridad y la capacidad de cómputo del servidor. La app de escritorio inicia Codex en él por SSH, en el shell de inicio de sesión del usuario remoto.",
        "Un Mac o PC con Windows ejecuta la app de escritorio de ChatGPT, que mantiene la conexión SSH. Es el host con el que habla tu móvil, así que también tiene que seguir despierto y conectado.",
        "Tu móvil ejecuta la app de ChatGPT y controla ese host mediante el control remoto. Envía prompts y aprobaciones y te muestra diffs, la salida del terminal y notificaciones.",
        "OpenAI solo documenta macOS y Windows como hosts de control remoto, así que vincular un móvil directamente con un servidor Linux no está documentado. Vincula tu móvil con el Mac o PC, idealmente [un Mac mini siempre encendido](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Qué necesitas",
      points: [
        "Un servidor Linux al que puedas llegar por SSH. La guía de instalación de la Codex CLI en GitHub indica Ubuntu 20.04+ o Debian 10+, con 4 GB de RAM como mínimo y 8 GB recomendados; hay builds de release para x86_64 y ARM64.",
        "Un Mac o PC con Windows con la app de escritorio de ChatGPT, para añadir el servidor como host SSH. Si quieres llegar al servidor desde el móvil, este ordenador tiene que seguir encendido.",
        "Una cuenta de ChatGPT para Codex. La tabla de planes de OpenAI incluye las conexiones remotas por SSH en Plus, Pro, Business y Enterprise y con una clave de API, y el control remoto desde el móvil en Plus, Pro, Business y Enterprise, pero no con una clave de API.",
        "La app de ChatGPT en el móvil, iOS o Android.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Codex en un VPS Linux",
      steps: [
        {
          title: "Alquila un servidor y comprueba SSH",
          text: "Crea un servidor Linux y asegúrate de que puedes iniciar sesión por SSH desde el Mac o PC que ejecutará la app de escritorio. Usa inicio de sesión con clave y una cuenta con solo los permisos que Codex necesita, no root.",
        },
        {
          title: "Instala la Codex CLI en el servidor",
          text: "Ejecuta el script de instalación de OpenAI en el servidor; el mismo comando lo actualiza más adelante, y npm también sirve. Instala bubblewrap para el sandbox de Codex: sin `bwrap` en el PATH, Codex recurre a un helper incluido que necesita user namespaces sin privilegios, y muestra un aviso al iniciarse. Ubuntu 24.04 puede seguir avisando hasta que cargues el perfil de AppArmor `bwrap-userns-restrict`.",
          code: install,
        },
        {
          title: "Inicia sesión en un servidor sin interfaz gráfica",
          text: "El servidor no tiene navegador, así que usa el inicio de sesión con código de dispositivo: ejecuta `codex login --device-auth`, o elige Sign in with Device Code, y sigue las indicaciones. Está en beta, y el inicio de sesión con código de dispositivo tiene que activarse primero en los ajustes de seguridad de ChatGPT o por el administrador de tu workspace. Si no puedes usarlo, reenvía el callback del inicio de sesión con `ssh -L 1455:localhost:1455` y ejecuta `codex login` en el servidor, o copia `~/.codex/auth.json` de un ordenador donde tengas la sesión iniciada y trata ese archivo como una contraseña.",
          code: login,
        },
        {
          title: "Añade el servidor a tu configuración SSH",
          text: "En el Mac o PC, añade una entrada Host a `~/.ssh/config` y comprueba que `ssh devbox` funciona. Codex lee de ese archivo los alias de host concretos e ignora las entradas que solo son patrones. La app de escritorio inicia Codex en el shell de inicio de sesión del usuario remoto, así que `codex` tiene que estar en el PATH allí.",
          code: ssh,
        },
        {
          title: "Añádelo como host SSH en la app de escritorio",
          text: "En la app de escritorio de ChatGPT, abre Settings > Connections, añade o activa el host SSH y elige una carpeta de proyecto en el servidor. Los chats de ese proyecto ejecutan comandos, leen archivos y escriben cambios en el servidor.",
        },
        {
          title: "Contrólalo desde el móvil",
          text: "En el mismo Mac o PC, abre Settings > Connections > Control this Mac or PC, selecciona Set up o Add y escanea el código QR con la app de ChatGPT. Abre Codex en el móvil, elige ese ordenador y el proyecto del servidor, e inicia un chat. El chat se ejecuta en el servidor a través del Mac o PC, así que mantén ese ordenador despierto y conectado; [un Mac mini en casa](/blog/codex-mac-mini) puede hacer ese trabajo. Los detalles de configuración y las soluciones están en [control remoto de Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Fuente: documentación de OpenAI sobre conexiones remotas y hosts SSH", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "Solo terminal: la Codex CLI por SSH en tmux",
      text: [
        "Si te basta con un terminal, puedes prescindir de la app de escritorio. Conéctate al servidor por SSH, ejecuta la Codex CLI dentro de tmux y sal de la sesión sin cerrarla (detach): Codex sigue en marcha después de que te desconectes, y vuelves a ella desde cualquier ordenador que pueda entrar por SSH.",
      ],
      steps: [
        {
          title: "Inicia Codex dentro de tmux",
          text: "Instala tmux desde los paquetes de tu distribución si no lo tienes, inicia una sesión y ejecuta `codex` en la carpeta de tu proyecto.",
          code: tmux,
        },
        {
          title: "Ten claro lo que no hace",
          text: "Esta configuración no está conectada a tu móvil. OpenAI dice que la configuración móvil empieza en la app de escritorio y no se puede hacer desde la CLI. La CLI tiene un comando experimental `codex remote-control`, que la documentación asocia a clientes de control remoto gestionados y flujos de trabajo por SSH, pero no describe cómo vincular un móvil con un servidor que solo ejecuta la CLI.",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Protege el servidor",
      points: [
        "Trátalo como cualquier servidor SSH: claves de confianza, una cuenta con privilegios mínimos y ningún servicio sin autenticación escuchando en la internet pública.",
        "No expongas el app server de Codex. `codex app-server --listen` y `codex --remote` son sobre todo para desarrollo y depuración, y OpenAI desaconseja abrir transportes del app server en una red compartida o pública.",
        "Para llegar al servidor desde fuera de su red, usa una VPN o una red mesh como Tailscale, que conecta solo tus propios dispositivos mediante enlaces WireGuard cifrados.",
        "Mantén privado `~/.codex/auth.json`; OpenAI dice que lo trates como una contraseña.",
        "Los ajustes del sandbox, los controles de seguridad y las aprobaciones se aplican a los chats en el servidor igual que en local, y el sandbox en Linux necesita bubblewrap.",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "Pasa un chat entre tu ordenador y el servidor",
      text: [
        "La app de escritorio puede pasar un chat, con su estado de Git, entre tu ordenador y un host SSH conectado. Los dos necesitan un proyecto guardado para el mismo repositorio Git. En el pie del chat, elige dónde se ejecuta ahora, elige el host de destino (This computer lo trae de vuelta), revisa y selecciona Hand off. Codex crea o reutiliza un worktree allí. Una respuesta que todavía está en curso se interrumpe, y un chat no se puede pasar a Codex cloud.",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "Sin ningún servidor: Codex cloud",
      points: [
        "Codex cloud ejecuta tareas de programación en la nube de OpenAI. Cada tarea tiene su propio workspace y sigue trabajando mientras tu ordenador está suspendido.",
        "Empieza desde la web, desde la app de escritorio (Work in > Cloud) o desde la app de ChatGPT en el móvil (abre Codex, elige Cloud y un entorno). Con el entorno por defecto puedes empezar sin elegir un repositorio, y Codex puede hacer checkout de repositorios de tu cuenta conectada de GitHub o GitLab.",
        "Una tarea en la nube solo ve su entorno en la nube: tus archivos locales, los procesos en ejecución, las sesiones iniciadas en el navegador y el acceso por VPN no se trasladan. Las configuraciones reutilizables están en Work in > Cloud > Select environment > Create environment.",
        "Necesita iniciar sesión con ChatGPT, no una clave de API. Desde un terminal, `codex cloud` abre un selector de tus chats en la nube y `codex cloud exec` envía una tarea.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Host Mac mini vs host SSH Linux vs Codex cloud",
      headers: ["", "Host Mac mini", "Host SSH Linux", "Codex cloud"],
      rows: [
        ["Dónde se ejecuta Codex", "En el Mac mini, en la app de escritorio de ChatGPT", "En el servidor; la app de escritorio en un Mac o PC lo inicia por SSH", "En la nube de OpenAI, en un workspace por tarea"],
        ["A qué se conecta tu móvil", "Al Mac mini", "Al Mac o PC con Windows que ejecuta la app de escritorio", "A la nube de OpenAI: abre Codex y elige Cloud"],
        ["Qué tiene que seguir encendido", "El Mac mini", "El servidor y el Mac o PC", "Nada tuyo"],
        ["Archivos, inicios de sesión y VPN", "Todo lo que hay en el Mac mini", "Lo que hay en el servidor", "Solo el entorno en la nube; los archivos locales, las sesiones iniciadas en el navegador y el acceso por VPN no se trasladan"],
        ["Ideal para", "Computer Use y tareas en el navegador con la extensión de Chrome, desarrollo para iOS, archivos guardados en casa", "Trabajo de terminal en un servidor, con su capacidad de cómputo y sus dependencias", "Tareas de programación que solo necesitan un repositorio"],
        ["Planes (tabla de OpenAI)", "Control remoto desde el móvil: Plus, Pro, Business, Enterprise", "Conexiones SSH: esos planes y una clave de API; controlar el host desde el móvil sigue necesitando uno de esos planes", "Plus, Pro, Business, Enterprise; no con una clave de API"],
        ["Configuración", "App de escritorio, ajustes para mantenerlo despierto, control remoto", "CLI en el servidor, configuración SSH, host SSH en la app de escritorio", "Elegir o crear un entorno en la nube"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale al servidor un trabajo fijo",
      text: [
        "Un servidor que nunca se suspende sigue esperando tu siguiente prompt. Crewmark convierte un chat de Codex en él en un empleado de IA con un rol, un objetivo numérico, horario laboral y un heartbeat: durante el horario laboral, la CLI `crewmark`, que funciona en Linux además de en macOS y Windows, despierta al empleado para que avance con sus issues en un tablero compartido. El ordenador en el que se ejecuta tiene que seguir encendido, y un VPS lo está.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO, y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta Codex en el servidor",
          text: "Pega el enlace de configuración en un chat de Codex en el servidor. Instala la CLI `crewmark` y vincula ese chat al empleado. También funciona con Claude Code; consulta [Claude Code en un VPS](/blog/claude-code-vps).",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Solo entre semana o todos los días, un horario que puede pasar de la medianoche y un despertar cada 15, 30, 60, 120 o 240 minutos. Cada despertar llega al mismo chat de Codex, así que retoma el trabajo donde lo dejó. Las opciones de programación del propio Codex se comparan en [Codex proactivo](/proactive-codex).",
        },
        {
          title: "Asigna issues y háblale desde el móvil",
          text: "Abre crewmark.ai en el navegador del móvil para crear y asignar issues, o escribe al empleado en su registro de trabajo; el mensaje llega al chat de Codex en el servidor, y responde allí. Asignar una issue lo despierta al momento y, cuando necesita una revisión o una decisión, pone la issue en Needs action y te pregunta allí. Tienes trabajos para darle en [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Codex en un VPS Linux como host SSH" },
  mid: {
    title: "¿Quieres que el servidor siga trabajando cuando no le envías prompts?",
    text: "Crewmark despierta a Codex con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puedo ejecutar Codex en un VPS?",
        a: "Sí. La Codex CLI funciona en Linux: instálala con `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, inicia sesión con `codex login --device-auth` y luego úsala por SSH en tmux o añade el servidor como host SSH en la app de escritorio de ChatGPT en un Mac o PC con Windows, que puedes controlar desde el móvil.",
      },
      {
        q: "¿Cómo inicio sesión en Codex en un VPS sin navegador?",
        a: "Ejecuta `codex login --device-auth`, o elige Sign in with Device Code, y sigue las indicaciones. Está en beta y tiene que activarse en los ajustes de seguridad de ChatGPT o por un administrador del workspace. Si no, reenvía el callback con `ssh -L 1455:localhost:1455 user@server` y ejecuta `codex login` allí, o copia `~/.codex/auth.json` de un ordenador donde tengas la sesión iniciada.",
      },
      {
        q: "¿Cómo conecto Codex a un VPS?",
        a: "Añade el servidor a `~/.ssh/config` en el Mac o PC que ejecuta la app de escritorio de ChatGPT y comprueba que `ssh <alias>` funciona. Asegúrate de que `codex` está instalado, con la sesión iniciada y en el PATH del shell de inicio de sesión del usuario remoto, y luego añade el host en Settings > Connections y elige una carpeta de proyecto remota.",
      },
      {
        q: "¿Puedo controlar Codex en un VPS desde el móvil?",
        a: "Sí, a través de un Mac o PC con Windows. Tu móvil controla la app de escritorio de ChatGPT en ese ordenador, y la app ejecuta el chat en el servidor por SSH, así que el ordenador tiene que seguir despierto y conectado. OpenAI no documenta cómo vincular un móvil directamente con un servidor Linux ni solo con la CLI.",
      },
      {
        q: "¿La app de escritorio de ChatGPT funciona en un servidor Linux?",
        a: "Hay una app de escritorio de ChatGPT para Linux, en vista previa, para las versiones de escritorio de Ubuntu, Debian, Fedora y Arch Linux, todavía sin Computer Use. La documentación de OpenAI no cubre un servidor sin entorno de escritorio, y Linux no figura como host de control remoto. En un VPS, usa la Codex CLI.",
      },
      {
        q: "¿Es seguro ejecutar Codex en un VPS?",
        a: "Trátalo como cualquier servidor SSH: inicio de sesión con clave, una cuenta con privilegios mínimos y ningún servicio público sin autenticación escuchando. No expongas el app server de Codex en una red pública, usa una VPN o una red mesh para llegar al servidor desde fuera, mantén privado `~/.codex/auth.json` e instala bubblewrap para que funcione el sandbox.",
      },
    ],
  },
  cta: {
    title: "Pon tu servidor a trabajar.",
    text: "Crewmark convierte las sesiones de Codex y Claude Code en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de OpenAI (conexiones remotas, Codex CLI, autenticación, sandboxing, la app para Linux, Codex cloud, planes), el README y la guía de instalación de Codex en GitHub, y la documentación de Tailscale el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI ni por ninguna empresa mencionada en esta página. Codex y ChatGPT son marcas comerciales de OpenAI.",
};
