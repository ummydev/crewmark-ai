import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts (the `en` value of codexWindows).

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex en Windows: app, instalación de la CLI, sandbox y WSL2",
    description:
      "Descarga Codex en Windows con la app de ChatGPT o instala la CLI, úsalo en PowerShell con el sandbox de Windows o en WSL2 y arregla un sandbox que falla.",
  },
  breadcrumb: "Codex en Windows",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex en Windows: instala la app o la CLI y elige el sandbox o WSL2",
    lead: "Codex funciona de forma nativa en Windows. Desde el 9 de julio de 2026, la app de Codex forma parte de la app de escritorio de ChatGPT, así que instalas ChatGPT y cambias a Codex dentro de ella; para el terminal, la Codex CLI se instala con un solo comando de PowerShell. Por defecto, el agente se ejecuta en PowerShell bajo el sandbox de Windows, y puedes pasarlo a WSL2. Esta guía explica la descarga y la instalación, los tres tipos de sandbox y qué versión de Windows necesita cada uno, las soluciones documentadas cuando falla la configuración del sandbox, Computer Use y cómo controlar un PC con Windows desde el móvil.",
    cta: "Empezar",
    secondary: "Ver los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Qué Codex instalar en Windows",
      points: [
        "La app de escritorio de ChatGPT, si quieres una ventana. Codex tiene su propia vista de programación junto a Chat y Work, con worktrees, tareas programadas, Git, un navegador integrado, vistas previas de archivos, plugins y skills. La app está disponible en todos los planes de ChatGPT, incluido Free.",
        "La Codex CLI, si trabajas en un terminal. Se instala de forma nativa con un script de PowerShell, o con npm.",
        "La extensión del IDE, si trabajas en un editor. OpenAI la incluye junto a la app y la CLI como forma de usar Codex de forma nativa en Windows.",
        "Se recomienda Windows 11. Un Windows 10 reciente y totalmente actualizado es compatible sin garantías y necesita la versión 1809 o posterior, por ConPTY; no se recomienda un Windows 10 más antiguo. `winget` debería estar disponible.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo descargar e instalar Codex en Windows",
      steps: [
        {
          title: "Descarga la app de escritorio de ChatGPT",
          text: "Consíguela desde el enlace de Microsoft Store en [la página de la app para Windows de OpenAI](https://learn.chatgpt.com/docs/windows/windows-app), o instálala con winget desde PowerShell. Abre ChatGPT, inicia sesión y selecciona Codex.",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "O instala la Codex CLI",
          text: "Abre una ventana nueva de PowerShell y ejecuta el instalador de OpenAI; si lo vuelves a ejecutar, actualiza Codex. Con Node.js instalado puedes usar npm en su lugar. Desde la CLI, `codex app` abre la app de escritorio, instalándola si hace falta, y `/app` pasa la sesión actual a ella.",
          code: cliInstall,
        },
        {
          title: "Inicia sesión",
          text: "En el primer uso, elige Sign in with ChatGPT para usar tu plan, o inicia sesión con una clave de API, que se factura a las tarifas estándar de la API. Codex cloud necesita el inicio de sesión con ChatGPT. `codex login status` termina con código 0 cuando has iniciado sesión.",
        },
        {
          title: "Instala las herramientas que usará Codex",
          text: "Codex usa lo que está instalado en el PC. OpenAI sugiere Git, Node.js, Python, el .NET SDK y la GitHub CLI, todo con winget, y después iniciar sesión en GitHub.",
          code: tools,
        },
        {
          title: "Elige dónde se ejecuta el agente",
          text: "Por defecto, el agente se ejecuta de forma nativa en PowerShell bajo el sandbox de Windows. Para ejecutarlo en WSL2, abre Settings, cambia el agente de Windows native a WSL y reinicia la app. En cualquiera de los dos modos, selecciona Ask for approval debajo del cuadro de mensaje para tener la protección del sandbox. Para comandos que necesitan permisos de administrador, inicia la app con Run as administrator; el agente los hereda. El terminal integrado puede ser PowerShell, Command Prompt, Git Bash o WSL.",
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, app para Windows", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "¿PowerShell nativo o WSL2?",
      text: [
        "El consejo de OpenAI es usar el sandbox nativo por defecto y elegir WSL2 cuando necesitas herramientas nativas de Linux, ya trabajas en WSL2 o las opciones nativas no encajan con tu configuración. WSL1 ya no es compatible: funcionó hasta Codex 0.114, y desde la 0.115 el sandbox de Linux usa `bubblewrap` y el soporte de WSL1 terminó.",
      ],
      headers: ["", "Nativo (PowerShell)", "WSL2"],
      rows: [
        ["Sandbox", "El sandbox de Windows: MXC, elevated o unelevated", "El sandbox de Linux, que necesita `bubblewrap`"],
        ["Instalar la CLI", "Instalador de PowerShell o npm", "`wsl --install` desde un PowerShell con permisos de administrador y luego el script de instalación de Linux dentro de WSL"],
        ["En la app de escritorio", "La opción por defecto", "Settings: cambia el agente a WSL y reinicia la app"],
        ["Dónde guardar los proyectos", "En la unidad de Windows; WSL puede llegar a ellos en `/mnt/<drive>/...`", "En el home de Linux, como `~/code`, no en `/mnt/c`, por velocidad"],
        ["Home de Codex", "`%USERPROFILE%\\.codex`", "El home de Linux, salvo que apuntes `CODEX_HOME` a la carpeta de Windows"],
        ["Cuándo elegirlo", "Por defecto", "Herramientas nativas de Linux, o un flujo de trabajo que ya está en WSL2"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "Cómo ejecutar Codex en WSL2",
      steps: [
        {
          title: "Instala WSL2 y Codex dentro",
          text: "Desde un PowerShell con permisos de administrador, ejecuta `wsl --install` y luego `wsl` para abrir el shell de Linux. Dentro, instala `bubblewrap` para el sandbox (`sudo apt install bubblewrap` o `sudo dnf install bubblewrap`), ejecuta el script de instalación de Linux e inicia `codex`.",
          code: wslInstall,
        },
        {
          title: "Guarda los repositorios en el home de Linux",
          text: "Clona en una carpeta como `~/code` en lugar de bajo `/mnt/c`, que es más lento. Si VS Code en WSL no encuentra Codex, comprueba dónde está con `which codex`.",
        },
        {
          title: "Comparte los ajustes con la app de Windows",
          text: "La app de Windows guarda su home de Codex en `%USERPROFILE%\\.codex`, mientras que una CLI dentro de WSL usa el home de Linux. Para compartir uno, define en WSL `CODEX_HOME` con la carpeta de Windows.",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "Abre proyectos de WSL en la app de escritorio",
          text: "Elige Add new project (o pulsa Ctrl+O) y escribe `\\\\wsl$\\`. Si el agente sigue en modo nativo, es más fiable guardar los proyectos en la unidad de Windows y llegar a ellos desde WSL a través de `/mnt/<drive>/...`.",
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, Windows y WSL", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "El sandbox de Codex en Windows: MXC, elevated y unelevated",
      text: [
        "El sandbox de Windows permite que Codex se ejecute de forma nativa en PowerShell, sin WSL ni una máquina virtual, limitando lo que sus comandos y sus procesos hijo pueden tocar en el disco y en la red. Tiene tres implementaciones. La app de escritorio elige MXC automáticamente para cuentas de consumidor en dispositivos compatibles.",
      ],
      headers: ["Sandbox", "Cómo funciona", "Configuración", "Versión de Windows"],
      rows: [
        [
          "`mxc` (recomendado)",
          "Microsoft Execution Containers",
          "Sin configuración aprobada por un administrador, sin cuentas de Windows adicionales, sin reglas de firewall",
          "Windows 11 24H2 (build 26100.9278) o 25H2 (build 26200.9278); Microsoft todavía lo está desplegando en Windows 11",
        ],
        [
          "`elevated` (heredado, la alternativa preferida)",
          "Usuarios de sandbox dedicados con menos privilegios y reglas de firewall; los comandos en el sandbox se ejecutan sin permisos de administrador",
          "Necesita que un administrador apruebe su configuración",
          "La documentación no da un requisito aparte; se aplica la recomendación general (Windows 11 recomendado, Windows 10 1809 o posterior sin garantías)",
        ],
        [
          "`unelevated` (alternativa heredada)",
          "Aislamiento de red más débil, y sin rutas de lectura denegadas",
          "La documentación lo sugiere como solución provisional cuando falla la configuración del sandbox heredado",
          "La documentación no da un requisito aparte; la misma recomendación general",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Configuración del sandbox de Codex en Windows",
      steps: [
        {
          title: "Comprueba si MXC funciona en tu PC",
          text: "Con Codex CLI 0.162.0 o posterior, ejecuta esta prueba. Debería mostrar `MXC_OK` y terminar con código 0.",
          code: mxcTest,
        },
        {
          title: "Da preferencia a MXC en la CLI",
          text: "La app de escritorio ya da preferencia a MXC para cuentas de consumidor. Para la CLI, o en un entorno empresarial, actívalo en `config.toml` en tu home de Codex.",
          code: preferMxc,
        },
        {
          title: "O elige un sandbox heredado",
          text: "Donde MXC no esté disponible, configura `elevated`, o `unelevated` como última alternativa. El sandbox elevated necesita que un administrador apruebe su configuración. En la CLI, el comando `/setup-default-sandbox` ejecuta esa configuración; solo aparece en Windows, cuando Codex está en el sandbox degradado de token restringido.",
          code: legacy,
        },
        {
          title: "O deja que TI lo configure de antemano",
          text: "Un administrador puede preparar el sandbox elevated para otro usuario. Para quitar el sandbox heredado más adelante, ejecuta `codex sandbox uninstall` como administrador.",
          code: provision,
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI, sandbox de Windows", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "¿Ha fallado la configuración del sandbox de Codex en Windows? Las soluciones documentadas",
      text: [
        `La [página del sandbox de Windows](${sandboxDocs}) de OpenAI tiene una lista de solución de problemas. Esto es lo que cubre, con los títulos de la propia documentación.`,
      ],
      points: [
        "“My legacy sandbox setup failed”: las causas habituales son un aviso de UAC o de administrador rechazado, una política que impide crear usuarios y grupos locales, cambiar el firewall o dar al usuario del sandbox derechos de inicio de sesión, o alguna otra política. Vuelve a intentarlo y aprueba el aviso, pregunta a TI o usa el sandbox `unelevated` mientras tanto.",
        "“I see Windows error 1385”: Windows le niega al usuario del sandbox el tipo de inicio de sesión que necesita. Los derechos de inicio de sesión del usuario del sandbox están entre lo que una política puede bloquear, así que en un PC gestionado, pregunta a TI. MXC no crea cuentas de Windows adicionales, así que en Windows 11 24H2 o 25H2 no depende de un usuario del sandbox.",
        "“Codex switched me to the unelevated sandbox”, “Codex warns that some folders are writable by Everyone”, “Sandboxed commands cannot reach the network” y “Sandboxing worked before and then stopped” tienen cada uno su propia entrada en esa página.",
        "Para diagnósticos, lee `CODEX_HOME/.sandbox/sandbox.log`. Nunca le envíes a nadie la carpeta `CODEX_HOME/.sandbox-secrets/`.",
        "¿Buscas “setup didn't finish”? La documentación de OpenAI no tiene ninguna entrada con ese texto. El caso documentado más cercano es “My legacy sandbox setup failed”.",
        "Si PowerShell no ejecuta npm y dice `npm.ps1 cannot be loaded because running scripts is disabled on this system.`, la solución habitual es `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`.",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Computer Use en Windows toma el control de la pantalla",
      text: [
        "Computer Use permite que Codex maneje apps de escritorio moviendo el puntero y escribiendo. En la app de escritorio está disponible en macOS y Windows, con ChatGPT Work y Codex, en las regiones compatibles. Para activarlo, abre Settings > Computer use, busca Any App en Control y selecciona Install o activa el interruptor.",
      ],
      points: [
        "Se ejecuta en el escritorio activo y no puede trabajar en segundo plano. Mientras una tarea está en marcha, mueve el puntero, escribe y trae ventanas al frente, así que no puedes usar el PC al mismo tiempo.",
        "Para que trabaje mientras no estás, mantén el PC desbloqueado y conectado y revísalo desde el móvil con el [control remoto](/blog/codex-remote-control), o ejecuta la app de escritorio dentro de una máquina virtual de Windows para que Computer Use tome el control de la VM en lugar de tu pantalla.",
        "El uso con el ordenador bloqueado (locked use), que permite que una tarea siga después de que el ordenador se bloquee, es solo para macOS.",
        'Para guardar las aprobaciones de apps, enumera las apps en `$CODEX_HOME/config.toml` bajo `[computer_use.windows]`, por ejemplo `always_allowed_app_ids = ["mspaint.exe"]`.',
        "En todos los sistemas, Computer Use no puede automatizar apps de terminal ni el propio ChatGPT, iniciar sesión como administrador ni aprobar avisos de seguridad y privacidad.",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "Controla Codex en tu PC con Windows desde el móvil",
      text: [
        "Un PC con Windows puede ser un host de control remoto, como un Mac. La app de ChatGPT en el móvil envía prompts y aprobaciones; el PC ejecuta los comandos con sus propios proyectos, archivos, credenciales y herramientas. La configuración completa y las soluciones están en [control remoto de Codex](/blog/codex-remote-control).",
      ],
      points: [
        "En el PC, abre la app de escritorio de ChatGPT, ve a Settings > Connections > Control this Mac or PC y selecciona Set up o Add. Escanea el código QR con el móvil (iOS o Android).",
        "El PC aparece entonces en Codex en la app de ChatGPT. En versiones antiguas de la app se llama Remote.",
        "Mantén el PC despierto, conectado, con la sesión iniciada y con la app de escritorio abierta; si se suspende o pierde la red, el acceso remoto se corta hasta que vuelve. Para tareas que usan Computer Use, mantén la sesión de Windows desbloqueada.",
        "La tabla de planes de OpenAI incluye el control remoto desde el móvil en Plus, Pro, Business y Enterprise, no con inicio de sesión por clave de API. En un workspace de ChatGPT, puede que un administrador tenga que activar primero el acceso a Remote Control.",
        "El PC también puede abrir proyectos en un servidor Linux como host SSH, así que tu móvil maneja Codex en el servidor a través del PC. Consulta [Codex en un VPS](/blog/codex-vps) y [Codex en Linux](/blog/codex-linux). Para un Mac siempre encendido, consulta [Codex en un Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Codex en tu PC un trabajo fijo",
      text: [
        "El control remoto y Computer Use siguen esperando a que inicies cada tarea. Crewmark convierte un chat de Codex en tu PC con Windows en un empleado de IA con un rol, objetivos, horario laboral y un heartbeat: durante su horario, la CLI `crewmark`, que funciona en Windows además de en macOS y Linux, lo despierta para que tome la siguiente issue de un tablero compartido. Para eso, el PC tiene que seguir encendido.",
      ],
      steps: [
        {
          title: "Contrata a un empleado",
          text: "Elige un rol de los [roles de empleados de IA](/ai-employees), como [ingeniero de software](/ai-employees/software-engineer), y escribe sus objetivos y KPI.",
        },
        {
          title: "Conecta un chat de Codex en el PC",
          text: "Vincula un chat de Codex en el PC al empleado mediante la CLI `crewmark`. Esa conversación se convierte en el empleado. También funciona con Claude Code.",
        },
        {
          title: "Fija el horario laboral y un heartbeat",
          text: "Solo entre semana o todos los días, en tu zona horaria, con un horario que puede pasar de la medianoche. Durante ese horario, la CLI despierta al empleado cada 15, 30, 60, 120 o 240 minutos. Consulta [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Asigna issues desde cualquier sitio",
          text: "Crea y asigna issues en el tablero de crewmark.ai desde cualquier navegador; asignar una despierta al empleado. Cuando necesita una revisión o una decisión, pone la issue en Needs action y te pregunta allí. Tienes trabajos para darle en [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Descargar e instalar Codex en Windows" },
  mid: {
    title: "¿Quieres que Codex siga trabajando en tu PC cuando no le envías prompts?",
    text: "Crewmark despierta a tu Codex con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo descargo la app de Codex en Windows?",
        a: "Codex forma parte de la app de escritorio de ChatGPT. Instálala desde el enlace de Microsoft Store en la página de la app para Windows de OpenAI, o ejecuta `winget install --id 9PLM9XGG6VKS -s msstore` en PowerShell, y luego abre ChatGPT y selecciona Codex. La app está disponible en todos los planes de ChatGPT, incluido Free.",
      },
      {
        q: "¿Cómo instalo la Codex CLI en Windows?",
        a: 'Abre una ventana nueva de PowerShell y ejecuta `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`, o `npm install -g @openai/codex` si tienes Node.js. Luego ejecuta `codex` e inicia sesión con ChatGPT o con una clave de API. Si vuelves a ejecutar el instalador, Codex se actualiza.',
      },
      {
        q: "¿Codex en Windows necesita WSL?",
        a: "No. Codex se ejecuta de forma nativa en PowerShell bajo el sandbox de Windows, en la app de escritorio, la CLI y la extensión del IDE. WSL2 es opcional, para herramientas nativas de Linux o un flujo de trabajo que ya está en WSL2. WSL1 no es compatible desde Codex 0.115.",
      },
      {
        q: "¿Qué es el sandbox de Codex en Windows?",
        a: "Limita lo que los comandos de Codex pueden tocar en el disco y en la red mientras se ejecutan de forma nativa en Windows. MXC es la implementación recomendada y necesita Windows 11 24H2 o 25H2; `elevated` y `unelevated` son alternativas heredadas. La app de escritorio elige MXC automáticamente para cuentas de consumidor en dispositivos compatibles.",
      },
      {
        q: "¿Por qué ha fallado la configuración del sandbox de Codex en Windows?",
        a: "La documentación de OpenAI no contiene ningún mensaje “setup didn't finish”. Para una configuración fallida del sandbox heredado, indica un aviso de UAC o de administrador rechazado, o una política que bloquea usuarios y grupos locales, cambios en el firewall o los derechos de inicio de sesión del usuario del sandbox. Vuelve a intentarlo y aprueba el aviso, pregunta a TI o usa `unelevated` mientras tanto. El error 1385 de Windows significa que se le negó al usuario del sandbox el tipo de inicio de sesión que necesita.",
      },
      {
        q: "¿Puedo controlar Codex en un PC con Windows desde el móvil?",
        a: "Sí. En la app de escritorio de ChatGPT del PC, ve a Settings > Connections > Control this Mac or PC, escanea el código QR con la app de ChatGPT en iOS o Android y mantén el PC despierto, conectado y con la sesión iniciada. Mantenlo desbloqueado para tareas que usan Computer Use.",
      },
    ],
  },
  cta: {
    title: "Pon a trabajar a Codex en tu PC.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de Codex de OpenAI (app para Windows, sandbox de Windows, WSL, CLI, inicio de sesión, Computer Use y conexiones remotas) el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI, Microsoft ni ninguna empresa mencionada en esta página. Codex y ChatGPT son marcas comerciales de OpenAI; Windows es una marca comercial de Microsoft.",
};
