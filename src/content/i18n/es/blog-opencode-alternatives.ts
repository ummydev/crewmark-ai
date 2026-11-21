import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// es translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS y Linux; Windows tiene un instalador de PowerShell)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # o: npm install -g @charmland/crush

# Kilo CLI (un fork de OpenCode)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (gratis, financiado con anuncios de texto)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder con un modelo ejecutándose en Ollama
nanocoder --provider ollama --model llama3.1

# Crush: añade Ollama en tu crushrc
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a OpenCode (2026): gratis, open source y locales",
    description:
      "Las mejores alternativas a OpenCode en 2026: agentes de terminal de código abierto (Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), opciones gratis sin clave de API, opciones en Rust y para Windows, LLM locales, interfaces gráficas, y Claude Code, Codex y Copilot CLI.",
  },
  breadcrumb: "Alternativas a OpenCode",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agentes de programación",
    title: "Las mejores alternativas a OpenCode en 2026: gratis, de código abierto y locales",
    lead: "OpenCode es uno de los agentes de programación de código abierto con más estrellas en GitHub, unas 226.000: un agente de terminal con licencia MIT que funciona con cualquier proveedor de modelos, más una app de escritorio en beta. La gente busca otras opciones por varios motivos: un harness más pequeño que puedan adaptar a su propio flujo, un único binario en Go o Rust, mejor soporte para modelos locales, una app en lugar de un terminal, una opción gratuita que no necesite clave de API o el agente que su empresa ya paga. Aquí tienes las alternativas para cada caso, con licencias, comandos de instalación y precios sacados de la página de cada proyecto.",
    cta: "Empezar",
    secondary: "Comandos de instalación",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Elecciones rápidas",
      points: [
        "Un agente mínimo que moldeas tú mismo: Pi, con licencia MIT, unas 121.000 estrellas.",
        "Una app de terminal pulida que funciona en todas partes, Windows y Android incluidos: Crush, de Charm.",
        "OpenCode con un IDE y un agente en la nube alrededor: Kilo CLI, que es un fork de OpenCode.",
        "Gratis y sin clave de API: Freebuff, financiado con anuncios de texto.",
        "Modelos locales primero: Nanocoder, creado por un colectivo sin ánimo de lucro.",
        "Escrito en Rust: Codex CLI o Goose.",
        "Si ya pagas Claude, ChatGPT o Copilot: Claude Code, Codex CLI o GitHub Copilot CLI.",
        "Un agente que sigue trabajando con un horario, no solo cuando escribes: Crewmark, sobre Claude Code o Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparativa de alternativas a OpenCode",
      text: [
        "Estrellas redondeadas, de la API de GitHub el 10 de noviembre de 2026. Los costes son lo que necesitas para empezar; la mayoría de los agentes de código abierto son gratis y pagas a tu proveedor de modelos.",
      ],
      headers: ["Herramienta", "Licencia", "Hecha con", "Funciona en", "Cuánto cuesta", "Ideal para"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k estrellas)", "TypeScript", "Terminal, app de escritorio (beta)", "Modelos gratis con límite diario; Go $10/mes, Go Plus $40/mes", "La referencia: cualquier proveedor, modelos locales, agentes Plan y Build"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k estrellas)", "TypeScript", "macOS, Linux, Windows; SDK y RPC", "Gratis; tu suscripción o clave de API", "Un harness mínimo que amplías con tus propias herramientas y skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k estrellas)", "Go", "Cualquier terminal: macOS, Linux, Windows, Android, BSD", "Gratis; tu clave o los modelos Hyper de Charm", "Una interfaz de terminal pulida con LSP y MCP"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (~28k estrellas)", "TypeScript", "CLI, VS Code, JetBrains, nube", "Gratis para empezar; más de 500 modelos a la tarifa del proveedor, sin recargo", "El motor de OpenCode más extensiones de IDE y revisiones de código"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (~56k estrellas)", "Rust", "App de escritorio, CLI, API", "Gratis; tu clave del modelo", "Un solo agente para código y otras tareas, con extensiones MCP"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k estrellas)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "Gratis; tu clave del modelo", "Un agente de código abierto en tu editor y tu terminal"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k estrellas)", "TypeScript", "Terminal", "Gratis; modelos locales o cualquier API compatible con OpenAI", "Programación privada y local primero con Ollama"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (~14k estrellas)", "TypeScript", "CLI, escritorio, web, nube", "Gratis con anuncios de texto; sin clave de API", "Probar un agente de programación sin pagar ni registrarte en un modelo"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (~29k estrellas)", "TypeScript", "Terminal", "Suscripción Qwen Plus o Pro, o una clave de API", "Usuarios de los modelos Qwen"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k estrellas)", "Rust", "Terminal; también IDE y escritorio", "Cualquier plan de ChatGPT, incluido Free; Go cuesta $8/mes; o una clave de API", "Suscriptores de ChatGPT que quieren un binario nativo y rápido"],
        ["[Claude Code](https://code.claude.com/docs)", "Propietaria", "-", "Terminal, IDE, escritorio, web", "Claude Pro $20/mes", "Usuarios de Claude que quieren el agente de la propia Anthropic"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "Propietaria", "-", "macOS, Linux, Windows", "Un plan de Copilot; Pro cuesta $10/mes", "Equipos que ya pagan Copilot"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k estrellas)", "Python", "Terminal", "Gratis; tu clave del modelo", "Pair programming centrado en git; sin commits desde el 22 de mayo de 2026 (consulta [alternativas a Aider](/blog/aider-alternatives))"],
        ["[Crewmark](/pricing)", "Propietaria", "-", "Tu ordenador, dentro de tu propio Claude Code o Codex", `Plan Free (${free.projects} proyecto, ${free.employees} empleados de IA); Pro $${pro.price}/mes próximamente`, "Un agente con un rol, horario laboral y un heartbeat que toma la siguiente issue de un tablero"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas de código abierto a OpenCode que puedes instalar hoy",
      text: [
        "Cada una se instala con un solo comando. Lee el script antes de pasarlo a tu shell.",
      ],
      steps: [
        {
          title: "Pi",
          text: "Un harness de agente mínimo y extensible. Trae valores predeterminados razonables, pero prescinde a propósito de subagentes y modo plan: los añades con extensiones, skills y plantillas de prompt, o le pides a Pi que los construya. Ejecuta `/login` para conectar una suscripción o una clave de API. Pi no tiene un sistema de permisos integrado, así que ejecútalo en un contenedor o sandbox si necesitas límites; su documentación describe tres formas.",
          code: install,
        },
        {
          title: "Crush",
          text: "El agente de terminal de Charm, escrito en Go. Lee tus servidores de lenguaje para obtener contexto, admite servidores MCP por http, stdio y sse, y te deja cambiar de modelo a mitad de sesión. Se instala con Homebrew, npm, winget, scoop, apt y pkg, y su README incluye Windows (PowerShell y WSL), Android y los BSD. La licencia es FSL-1.1-MIT, una licencia de código disponible, no de código abierto.",
        },
        {
          title: "Kilo CLI",
          text: "El README de Kilo dice que su CLI es un fork de OpenCode. Encima, Kilo añade extensiones para VS Code y JetBrains, un agente en la nube, revisiones automáticas de pull requests y más de 500 modelos entre los que puedes cambiar a mitad de tarea. Licencia MIT.",
        },
        {
          title: "Goose, Cline y Nanocoder",
          text: "Goose es un agente en Rust con app de escritorio y CLI, ahora bajo la Agentic AI Foundation de la Linux Foundation. Cline funciona como CLI, extensión de editor o SDK. Nanocoder es un agente de terminal local primero del Nano Collective, con modos normal, auto-accept, yolo, plan y architect, y comandos que revisan una rama o hacen checkout de una pull request en su propio worktree.",
        },
      ],
      source: { label: "Fuente: el README de cada proyecto en GitHub", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "Alternativas a OpenCode con modelos gratis",
      text: [
        "El propio OpenCode incluye modelos gratis con un límite diario de peticiones, y puedes recurrir a ellos cuando se agoten tus límites de Go. Si quieres otra cosa gratuita:",
      ],
      points: [
        "Freebuff: sin suscripción, créditos ni clave de API. Los anuncios de texto pagan los modelos incluidos, con DeepSeek V4.1 Flash como predeterminado; las referencias y recompensas añaden horas a la cuota diaria gratuita.",
        "Modelos locales: Nanocoder, Crush, Goose y OpenCode hablan con Ollama, así que el único coste es tu propio hardware.",
        "El nivel gratuito de Google: Gemini CLI ya no lo tiene. Su README dice que las cuentas individuales gratuitas y Google AI Pro y Ultra pasaron a Antigravity CLI (`agy`) el 18 de junio de 2026.",
        "Codex CLI: código abierto y funciona con una cuenta gratuita de ChatGPT.",
        "Agentes de código abierto con tu propia clave: Pi, Kilo CLI, Cline y Goose no cuestan nada en sí; solo pagas el modelo.",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "Alternativas a OpenCode para LLM locales",
      text: [
        "Si usas OpenCode para ejecutar modelos en tu propia máquina, estas dos hacen de los modelos locales la opción principal.",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Pensado para modelos locales mediante Ollama, o cualquier API compatible con OpenAI como OpenRouter. Pasa el proveedor y el modelo como flags, o ejecútalo de forma no interactiva con `nanocoder run`.",
          code: local,
        },
        {
          title: "Crush",
          text: "Añade Ollama como proveedor en tu `crushrc`, un archivo de configuración tipo Bash que funciona igual en todas las plataformas, Windows incluido, y luego registra los modelos que hayas descargado.",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust, Windows, Android o una interfaz gráfica",
      points: [
        "En Rust: Codex CLI y Goose están escritos en Rust. Crush es un único binario en Go.",
        "Para Windows: Crush (winget, scoop o npm), Pi (un instalador de PowerShell), GitHub Copilot CLI (winget) y la app de escritorio de OpenCode funcionan de forma nativa.",
        "Para Android: el README de Crush incluye Android entre los terminales compatibles.",
        "Con interfaz gráfica: la propia app de escritorio de OpenCode (beta) para macOS, Windows y Linux; Goose Desktop; Freebuff Desktop, que también puede ejecutar tus Claude Code y Codex instalados; y Kilo o Cline dentro de VS Code y JetBrains.",
        "OpenCode Go cuesta $10 al mes para modelos de pesos abiertos (Go Plus cuesta $40). Si prefieres una sola suscripción para un modelo de frontera, Codex viene con ChatGPT Go a $8 al mes, Copilot Pro cuesta $10 y Claude Pro, $20.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Cuando quieres que el agente trabaje sin que tú escribas",
      text: [
        "Todas las herramientas de esta lista esperan tu siguiente prompt. Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat: durante su turno se despierta, toma la siguiente issue de un tablero y te escribe cuando necesita una decisión. Se ejecuta en tu ordenador, con el plan que ya pagas.",
      ],
      steps: [
        {
          title: "Contrata a un empleado sobre tu agente",
          text: "Ejecuta el comando de configuración en una conversación de Claude Code o Codex; esa conversación se convierte en el empleado. Consulta [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Dale horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que fijes, incluso de noche. Consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7) y [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Responde cuando pregunte",
          text: "Las decisiones te llegan como mensajes; todo lo demás está en el tablero. Para más comparativas de agentes de terminal, consulta [alternativas a Cursor](/blog/cursor-alternatives) y [alternativas a Devin](/blog/devin-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres un agente de programación que siga trabajando entre tus prompts?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat durante el horario laboral y toman la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las alternativas a OpenCode",
    items: [
      {
        q: "¿Cuál es la mejor alternativa de código abierto a OpenCode?",
        a: "Pi si quieres un harness pequeño que amplías tú mismo, Crush para una app de terminal pulida en todas las plataformas y Kilo CLI si quieres el motor de OpenCode con extensiones de IDE alrededor. Goose y Cline también son opciones sólidas con licencia Apache.",
      },
      {
        q: "¿Kilo CLI está basado en OpenCode?",
        a: "Sí. El README de Kilo dice que Kilo CLI es un fork de OpenCode, ampliado para funcionar con la plataforma de Kilo: extensiones para VS Code y JetBrains, un agente en la nube y revisiones de código.",
      },
      {
        q: "¿Hay una alternativa gratuita a OpenCode?",
        a: "Freebuff es gratis y sin clave de API, financiado con anuncios de texto. Nanocoder, Crush, Goose y el propio OpenCode son gratis con modelos locales mediante Ollama. El nivel gratuito de Gemini CLI pasó a Antigravity CLI en junio de 2026.",
      },
      {
        q: "¿Hay una alternativa a OpenCode escrita en Rust?",
        a: "Codex CLI, de OpenAI, y Goose están escritos en Rust y tienen licencia Apache 2.0. Crush está escrito en Go y se distribuye como un único binario.",
      },
      {
        q: "¿Crush es de código abierto?",
        a: "El código de Crush es público bajo FSL-1.1-MIT, una licencia de código disponible. OpenCode, Pi, Kilo CLI y Nanocoder son MIT; Goose, Cline, Codex CLI, Qwen Code y Freebuff son Apache 2.0.",
      },
      {
        q: "OpenCode vs Claude Code: ¿cuál debería usar?",
        a: "OpenCode funciona con cualquier proveedor, incluidos los modelos locales, y es de código abierto. Claude Code es el agente de la propia Anthropic, de código cerrado, incluido desde Claude Pro a $20 al mes. Si ya pagas Claude, Claude Code recibe antes las funciones nuevas; si cambias de modelo a menudo, OpenCode o Pi encajan mejor.",
      },
    ],
  },
  cta: {
    title: "Dale a tu agente de programación un trabajo, no solo un prompt.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con el repositorio de GitHub y el README de cada proyecto, opencode.ai y las páginas de precios de cada proveedor el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenCode ni por ningún proyecto de la lista. Los nombres de productos son marcas comerciales de sus propietarios.",
};
