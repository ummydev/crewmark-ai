import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts (the `en` value of codexLinux).

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex en Linux: app de escritorio, instalar la CLI y sandbox",
    description:
      "Instala Codex en Linux: la app de ChatGPT en vista previa para Ubuntu, Debian, Fedora y Arch, o la CLI con bubblewrap. Incluye login sin navegador y hosts SSH.",
  },
  breadcrumb: "Codex en Linux",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex en Linux: la app de escritorio en vista previa, la CLI y lo que Linux aún no puede hacer",
    lead: "Hay dos formas de ejecutar Codex en una máquina Linux. La app de escritorio de ChatGPT, que incluye Codex, está en vista previa en Linux desde agosto de 2026, para Ubuntu, Debian, Fedora y Arch en x64 y ARM64. La Codex CLI se instala con un solo comando y usa `bubblewrap` para su sandbox. Esta guía explica las dos instalaciones, cómo iniciar sesión en un servidor sin interfaz gráfica, lo que Linux aún no tiene (Computer Use y el control de un host Linux desde el móvil), cómo una máquina Linux sigue sirviendo como host SSH para la app de escritorio en un Mac o PC, y Codex cloud.",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Qué Codex usar en Linux",
      points: [
        "La app de escritorio de ChatGPT, en vista previa: una ventana con Codex junto a Chat y Work. Es la interfaz gráfica (GUI) de Codex en Linux. La guía de OpenAI cubre Linux de escritorio; en un servidor sin escritorio, usa la CLI.",
        "La Codex CLI: se ejecuta en un terminal, en un escritorio o en un servidor sin interfaz gráfica al que llegas por SSH.",
        "La extensión del IDE, para VS Code, Cursor o Windsurf, si prefieres quedarte en tu editor.",
        "Codex cloud: las tareas se ejecutan en los servidores de OpenAI, así que nada tuyo tiene que seguir encendido. Consulta [Codex cloud](#cloud) más abajo.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo instalar la app de escritorio de Codex en Linux",
      steps: [
        {
          title: "Comprueba tu distribución y tu arquitectura",
          text: "La vista previa es compatible con Ubuntu 24.04 LTS y 26.04 LTS, Debian 13, Fedora 43 y 44, y Arch Linux actual y totalmente actualizado. Otras distribuciones pueden funcionar, pero no son compatibles oficialmente. Hay paquetes para x64 y ARM64: ejecuta `uname -m`; `x86_64` significa x64, y `aarch64` o `arm64` significa ARM64.",
          code: "uname -m",
        },
        {
          title: "Descarga e instala el paquete",
          text: `Consigue el paquete para tu distribución y tu arquitectura (consulta [la guía de la app para Linux de OpenAI](${linuxAppDocs})) e instálalo desde la carpeta en la que lo guardaste. En Arch, el script de instalación de OpenAI también hace una actualización completa del sistema.`,
          code: appInstall,
        },
        {
          title: "Ábrela y selecciona Codex",
          text: "Abre ChatGPT desde el menú de aplicaciones, o ejecuta `chatgpt` en un terminal, inicia sesión y selecciona Codex. En Wayland, la app usa XWayland cuando está disponible; Wayland nativo es experimental, y puedes forzarlo con `chatgpt --ozone-platform=wayland`.",
        },
        {
          title: "Mantenla actualizada",
          text: "Las actualizaciones llegan a través de tu gestor de paquetes.",
          code: appUpdate,
        },
        {
          title: "Mantén en marcha los chats largos",
          text: "Activa Settings > General > Prevent sleep while running, que existe en macOS y Linux, para que los chats locales sigan adelante mientras no estás delante del ordenador.",
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, app de ChatGPT para Linux", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "Cómo instalar la Codex CLI en Linux",
      steps: [
        {
          title: "Ejecuta el script de instalación",
          text: "El mismo comando instala y actualiza Codex; `codex update` también aplica una actualización cuando la versión instalada lo admite. Con Node.js instalado, `npm install -g @openai/codex` también sirve. OpenAI publica builds para Linux en x86_64 y aarch64.",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "Instala bubblewrap para el sandbox",
          text: `El sandbox de Codex en Linux necesita \`bubblewrap\`. Sin un \`bwrap\` en el PATH, Codex recurre a un helper incluido que necesita user namespaces sin privilegios, y muestra un aviso al iniciarse. En Ubuntu 25.04, el bubblewrap empaquetado funciona tal cual; en Ubuntu 24.04 puede seguir avisando hasta que cargues el perfil de AppArmor \`bwrap-userns-restrict\` (consulta [la documentación de sandboxing de OpenAI](${sandboxingDocs})).`,
          code: bubblewrap,
        },
        {
          title: "Inicia sesión",
          text: "Ejecuta `codex` y elige Sign in with ChatGPT para usar tu plan, o inicia sesión con una clave de API, que se factura a las tarifas estándar de la API. Codex cloud necesita el inicio de sesión con ChatGPT. `codex login status` termina con código 0 cuando has iniciado sesión.",
        },
        {
          title: "En un servidor sin interfaz gráfica, inicia sesión con un código de dispositivo",
          text: "Si la máquina no tiene navegador, elige Sign in with Device Code o ejecuta `codex login --device-auth`, que está en beta. El inicio de sesión con código de dispositivo tiene que activarse primero, en los ajustes de seguridad de ChatGPT o por un administrador del workspace. Hay otras dos formas: copiar `~/.codex/auth.json` de un ordenador donde funcionó el inicio de sesión en el navegador, y tratar ese archivo como una contraseña; o reenviar el callback del inicio de sesión por SSH y ejecutar `codex login` en el servidor.",
          code: headless,
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, Codex CLI", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Todavía no hay Computer Use en Linux",
      text: [
        "Computer Use permite que Codex maneje apps de escritorio moviendo el puntero y escribiendo. No está en la vista previa para Linux de la app de escritorio; la guía de OpenAI para Linux dice que una versión futura lo añadirá. Por ahora funciona en la app de escritorio en macOS y Windows.",
      ],
      points: [
        "El trabajo que se hace en un terminal sigue funcionando en Linux: Codex ejecuta comandos y edita archivos allí, dentro de su sandbox `bubblewrap`.",
        "Para tareas que necesitan apps de escritorio, usa un Mac o un PC con Windows. En Windows, Computer Use toma el control de la pantalla mientras trabaja: consulta [Codex en Windows](/blog/codex-windows). Para un Mac siempre encendido, consulta [Codex en un Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Usa una máquina Linux desde la app de escritorio en un Mac o PC",
      text: [
        "La documentación de OpenAI sobre conexiones remotas solo incluye ordenadores Mac y Windows como hosts que la app de ChatGPT para móvil puede controlar, así que controlar desde el móvil la app de escritorio en Linux no está documentado. Una máquina Linux sí puede ser un host SSH: la app de escritorio en un Mac o PC con Windows abre proyectos en ella, y Codex ejecuta comandos, lee archivos y escribe cambios allí. Después la manejas desde el móvil a través de ese Mac o PC.",
      ],
      steps: [
        {
          title: "Añade la máquina Linux a tu configuración SSH",
          text: "En el Mac o PC que ejecuta la app de escritorio, añade un host a `~/.ssh/config`. Codex lee de ese archivo los alias de host concretos e ignora las entradas que solo son patrones. Comprueba que `ssh devbox` funciona desde ese ordenador. Trátalo como cualquier acceso SSH: claves de confianza, una cuenta con privilegios mínimos y nada sin autenticación escuchando en una red pública; para llegar a una máquina fuera de tu red, usa una VPN o una herramienta de red mesh.",
          code: sshConfig,
        },
        {
          title: "Instala Codex en la máquina Linux e inicia sesión",
          text: "La app inicia Codex en la máquina remota por SSH, en el shell de inicio de sesión del usuario remoto, así que `codex` tiene que estar en el PATH allí. Instálalo con el script de arriba e inicia sesión, con `codex login --device-auth` en un servidor sin interfaz gráfica.",
        },
        {
          title: "Añade el host en la app de escritorio",
          text: "Ve a Settings > Connections, añade o activa el host SSH y elige una carpeta de proyecto en él. Cuando el mismo repositorio Git está guardado como proyecto en los dos lados, puedes pasar un chat entre tu ordenador y el host Linux desde el pie del chat.",
        },
        {
          title: "Contrólalo desde el móvil",
          text: "Vincula tu móvil con el Mac o PC como se describe en [control remoto de Codex](/blog/codex-remote-control). El móvil habla con ese ordenador, que tiene que seguir encendido, y Codex hace el trabajo en la máquina Linux. Para un servidor alquilado, consulta [Codex en un VPS](/blog/codex-vps).",
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, conexiones remotas", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "O deja que Codex cloud ejecute la tarea",
      text: [
        `Si no quieres tener ninguna máquina encendida, [Codex cloud](${cloudDocs}) ejecuta tareas en los servidores de OpenAI. Cada tarea tiene su propio workspace y sigue adelante mientras tu ordenador está suspendido.`,
      ],
      points: [
        "Inicia una tarea desde la web o la app de escritorio con Work in > Cloud, o desde Codex en la app móvil de ChatGPT. Desde un terminal Linux, `codex cloud` abre un selector de chats en la nube, `codex cloud exec` envía una tarea y `codex cloud list` muestra las recientes.",
        "Necesita iniciar sesión con ChatGPT y no está disponible con una clave de API. La tabla de planes de OpenAI lo incluye en Plus, Pro, Business y Enterprise.",
        "Una tarea en la nube solo ve su entorno en la nube. Los archivos locales de tu máquina, los procesos en ejecución, las sesiones iniciadas en el navegador y el acceso por VPN no se trasladan, y no se le puede pasar un chat desde tu ordenador.",
        "Para una configuración reutilizable, crea un entorno en Work in > Cloud > Select environment > Create environment, con acceso completo a la internet pública o una lista de permitidos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Codex en tu máquina Linux un trabajo fijo",
      text: [
        "La app de escritorio, la CLI y SSH esperan a que inicies la siguiente tarea. Crewmark convierte un chat de Codex en tu máquina Linux en un empleado de IA con un rol, objetivos, horario laboral y un heartbeat: durante su horario, la CLI `crewmark`, que funciona en Linux además de en macOS y Windows, lo despierta para que tome la siguiente issue de un tablero compartido. La máquina tiene que seguir encendida, algo que un servidor Linux ya hace de por sí.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como [ingeniero de software](/ai-employees/software-engineer), y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta un chat de Codex en la máquina",
          text: "Vincula un chat de Codex en el escritorio o servidor Linux al empleado mediante la CLI `crewmark`. Esa conversación se convierte en el empleado. También funciona con Claude Code.",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Solo entre semana o todos los días, en tu zona horaria, con un horario que puede pasar de la medianoche. Durante ese horario, la CLI despierta al empleado cada 15, 30, 60, 120 o 240 minutos. Consulta [cómo hacer que Codex sea proactivo](/proactive-codex).",
        },
        {
          title: "Asigna issues desde cualquier navegador",
          text: "Crea y asigna issues en el tablero de crewmark.ai; asignar una despierta al empleado. Cuando necesita una revisión o una decisión, pone la issue en Needs action y te pregunta allí. Tienes trabajos para darle en [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar la app de escritorio de ChatGPT en Linux y usar Codex" },
  mid: {
    title: "¿Quieres que Codex siga trabajando en Linux cuando no le envías prompts?",
    text: "Crewmark despierta a tu Codex con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Hay una interfaz gráfica (GUI) de Codex para Linux?",
        a: "Sí. La app de escritorio de ChatGPT, que incluye Codex, está en vista previa en Linux para Ubuntu 24.04 y 26.04, Debian 13, Fedora 43 y 44, y Arch Linux, en x64 y ARM64. Si prefieres quedarte en un editor, la extensión del IDE de Codex funciona en VS Code, Cursor y Windsurf.",
      },
      {
        q: "¿Cómo descargo la app de escritorio de Codex para Linux?",
        a: "Descarga el paquete .deb (Ubuntu, Debian) o .rpm (Fedora) para tu arquitectura, como describe la guía de la app para Linux de OpenAI, e instálalo con `sudo apt install ./chatgpt_amd64.deb` o `sudo dnf install ./chatgpt.x86_64.rpm`; en Arch, ejecuta el script `install-arch.sh` de OpenAI. Luego abre ChatGPT, o ejecuta `chatgpt`, y selecciona Codex.",
      },
      {
        q: "¿Cómo instalo la Codex CLI en Linux?",
        a: "Ejecuta `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, o `npm install -g @openai/codex`. Instala `bubblewrap` para el sandbox (`sudo apt install bubblewrap` o `sudo dnf install bubblewrap`), y luego ejecuta `codex` e inicia sesión.",
      },
      {
        q: "¿Funciona Computer Use de Codex en Linux?",
        a: "Todavía no. Computer Use no está en la vista previa para Linux de la app de escritorio, y OpenAI dice que una versión futura lo añadirá. Hoy está disponible en la app de escritorio en macOS y Windows.",
      },
      {
        q: "¿Cómo inicio sesión en Codex en un servidor Linux sin interfaz gráfica?",
        a: "Activa el inicio de sesión con código de dispositivo en los ajustes de seguridad de ChatGPT (o pide al administrador de tu workspace que lo haga) y luego ejecuta `codex login --device-auth`, que está en beta. También puedes copiar `~/.codex/auth.json` de un ordenador donde hayas iniciado sesión, o conectarte con `ssh -L 1455:localhost:1455 user@remote` y ejecutar `codex login` en el servidor.",
      },
      {
        q: "¿Puedo controlar Codex en Linux desde el móvil?",
        a: "No directamente: la documentación de OpenAI solo incluye ordenadores Mac y Windows como hosts de control remoto. Añade la máquina Linux como host SSH en la app de escritorio de ChatGPT en un Mac o PC con Windows, y luego controla ese ordenador desde la app de ChatGPT en el móvil; Codex se ejecuta en la máquina Linux.",
      },
    ],
  },
  cta: {
    title: "Pon a trabajar a Codex en tu máquina Linux.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de Codex de OpenAI (app de ChatGPT para Linux, CLI, inicio de sesión, sandboxing, Computer Use, conexiones remotas y Codex cloud) el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI ni por ninguna empresa mencionada en esta página. Codex y ChatGPT son marcas comerciales de OpenAI.",
};
