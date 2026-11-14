import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a OpenClaw: Hermes, NanoClaw, ZeroClaw (2026)",
    description:
      "Las alternativas a OpenClaw comparadas a partir de su propia documentación: Hermes Agent, NanoClaw, ZeroClaw, IronClaw y NVIDIA NemoClaw. Cómo funciona cada una, qué modelos y suscripciones admite, su modelo de seguridad y cuándo encaja mejor una opción pensada para el trabajo como Crewmark.",
  },
  breadcrumb: "Alternativas a OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "Alternativas a OpenClaw: Hermes, NanoClaw, ZeroClaw, IronClaw y más",
    lead: "OpenClaw es el asistente de IA de código abierto que se ejecuta en tu propio ordenador y te responde en WhatsApp, Telegram, Slack, Discord y más de 20 canales. Con unas 394.000 estrellas en GitHub es el más conocido, pero no el único. Se busca una alternativa por tres motivos: más seguridad por defecto, otro modelo u otra suscripción, o un runtime más ligero. Esta guía compara las opciones principales a partir de su propia documentación y explica cuándo te conviene un asistente personal y cuándo agentes que trabajan para un equipo.",
    cta: "Empezar",
    secondary: "Compara las alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw en resumen",
      text: [
        "OpenClaw nació como Clawdbot, pasó a llamarse Moltbot y luego OpenClaw a finales de enero de 2026, después de que Anthropic pidiera un cambio de nombre por su marca registrada. Lo creó Peter Steinberger, que desde entonces se ha unido a OpenAI, y el proyecto depende ahora de la OpenClaw Foundation, independiente y anunciada en julio de 2026, que describe a OpenAI como «un donante, no un propietario». La última versión es la v2026.11.1, del 5 de noviembre de 2026.",
      ],
      points: [
        "Se ejecuta como un daemon Gateway local en macOS, Linux, Windows o WSL2, con apps para escritorio y móvil.",
        "Los modelos son plugins: Claude (con clave de API o reutilizando una sesión de Claude Code en la misma máquina), OpenAI y Codex, y modelos locales como Ollama.",
        "Seguridad: trata los mensajes entrantes como no fiables y empareja a los remitentes desconocidos, pero las herramientas se ejecutan en el host en la sesión principal salvo que configures el sandboxing.",
        "El proyecto publica sus correcciones de seguridad: 722 avisos desde enero de 2026, 14 de ellos críticos, todos corregidos y divulgados, además de una auditoría de Trail of Bits cuyos hallazgos se corrigieron todos.",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas a OpenClaw comparadas",
      text: ["Según el README, el sitio web o la documentación de cada proyecto, y la API de GitHub, a 7 de noviembre de 2026. Las estrellas están redondeadas."],
      headers: ["", "Qué es", "Dónde se ejecuta", "Modelos y suscripciones", "Aislamiento", "Licencia, estrellas"],
      rows: [
        ["OpenClaw", "Asistente personal de IA en tus apps de chat", "macOS, Linux, Windows, WSL2; apps móviles", "Claude con clave de API o una sesión local de Claude Code; OAuth de ChatGPT/Codex; modelos locales", "Host por defecto; sandboxing opcional", "MIT, ~394k"],
        ["Hermes Agent (Nous Research)", "Agente que se mejora a sí mismo con un bucle de aprendizaje integrado", "Linux, macOS, Windows, WSL2, Android; app de escritorio", "Cualquier proveedor; suscripción de Claude solo con Max y créditos de uso adicional (no Pro); OAuth de ChatGPT/Codex", "Aprobación para comandos peligrosos; Docker o Modal opcional", "MIT, ~261k"],
        ["NanoClaw", "Asistente ligero que ejecuta agentes en contenedores", "macOS, Linux, WSL2; necesita Docker y Claude Code", "Claude con clave de API o suscripción vía Claude Code; Codex, OpenCode, Ollama mediante skill", "Un contenedor por sesión; las credenciales nunca entran en él", "MIT, ~31k"],
        ["ZeroClaw", "Runtime de agentes en un único binario de Rust", "Linux, macOS, Windows, FreeBSD, Docker; placas como Raspberry Pi", "Anthropic, OpenAI, Ollama y unos 20 más; suscripción de Codex; Claude Max vía setup-token", "Supervisado por defecto; sandboxes del sistema operativo", "MIT o Apache 2.0, ~33k"],
        ["IronClaw (NEAR AI)", "Asistente centrado en la privacidad y la seguridad", "macOS, Linux, Windows; o NEAR AI Cloud en un TEE", "Claves de API de proveedores (Anthropic, OpenAI, Gemini, Ollama y más)", "Sandbox WASM; credenciales inyectadas en el límite", "MIT o Apache 2.0, ~13k; nube de $0 a $200/mes"],
        ["NVIDIA NemoClaw", "Stack de seguridad que ejecuta OpenClaw o Hermes en sandboxes de OpenShell (alfa)", "Primero Linux y DGX Spark; Docker, Colima o Podman", "NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini por API", "Sandbox de OpenShell con control de salida", "Apache 2.0, ~23k"],
        ["Crewmark", "Empleados de IA para el trabajo: roles, objetivos y un tablero compartido", "Tablero alojado; daemon en macOS, Windows, Linux", "Se ejecuta dentro de Claude Code, Codex, DeepSeek Harness u OpenCode, con tu plan actual", "Cada empleado en su propia sesión y checkout", "Comercial"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir una alternativa a OpenClaw",
      steps: [
        {
          title: "Decide para qué lo quieres",
          text: "Un asistente personal al que escribes desde el móvil (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw) es un trabajo distinto al de agentes que avanzan por el backlog de un equipo en un repositorio (Crewmark, o varios [agentes de Claude Code](/blog/multiple-claude-code-agents)).",
        },
        {
          title: "Comprueba cómo aísla las herramientas",
          text: "Es la principal diferencia entre ellos. Elige aislamiento por contenedor o a nivel de sistema operativo por defecto si el agente va a leer mensajes de otras personas.",
          code: sandbox,
        },
        {
          title: "Comprueba quién paga la factura",
          text: "El soporte de suscripciones varía mucho: algunos reutilizan una sesión de Claude Code o un setup token, Hermes necesita Claude Max con créditos de uso adicional y otros necesitan claves de API. Revisa las condiciones de tu proveedor para el uso por terceros.",
        },
        {
          title: "Comprueba la plataforma",
          text: "En Windows: OpenClaw, Hermes, ZeroClaw e IronClaw se instalan de forma nativa; NanoClaw necesita WSL2; NemoClaw se prueba primero en Linux. Para un consumo mínimo o placas de hardware, ZeroClaw.",
        },
        {
          title: "Empieza con un canal y permisos limitados",
          text: "Conecta una sola app de chat, permite solo tu propia cuenta y amplía el acceso cuando hayas visto cómo se comporta.",
        },
      ],
      source: { label: "Fuente: README de OpenClaw", href: openclaw },
    },
    {
      kind: "text",
      title: "Qué alternativa a OpenClaw te conviene",
      points: [
        "Quieres OpenClaw con un aislamiento más estricto: NanoClaw (contenedores por diseño), o NemoClaw para ejecutar el propio OpenClaw dentro del sandbox de NVIDIA.",
        "Quieres un agente que aprenda y mejore sus propias skills: Hermes Agent.",
        "Quieres un runtime pequeño y rápido o necesitas ejecutarlo en una placa: ZeroClaw.",
        "Quieres funciones de privacidad y una opción de nube gestionada: IronClaw.",
        "Te preguntas OpenClaw vs Claude Code: OpenClaw es un asistente centrado en el chat; Claude Code es un agente de programación en tu repositorio. Para que Claude Code siga trabajando sin indicaciones, consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        "Quieres agentes que hagan un trabajo para tu equipo, desde un tablero compartido, con el plan de Claude Code o Codex que ya pagas: Crewmark (abajo). Consulta también [la comparativa de superagentes](/blog/superagent).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "No un asistente personal: un equipo de empleados de IA",
      text: [
        "OpenClaw y sus alternativas esperan tu mensaje. Crewmark está hecho para trabajar: convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario de trabajo, lo despierta con un heartbeat para tomar la siguiente issue de un tablero compartido y hace que te escriba cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Un [especialista SEO](/ai-employees/seo-specialist), un [ingeniero de software](/ai-employees/software-engineer), un [agente de marketing](/ai-employees/marketing-agent) y más, cada uno con un objetivo que puedes cambiar.",
        },
        {
          title: "Conecta el agente que ya usas",
          text: "Se ejecuta en su propia sesión y checkout, con la suscripción que ya pagas.",
        },
        {
          title: "Asigna trabajo y aprueba",
          text: "Llena el tablero; el empleado toma la siguiente issue y pregunta antes de cualquier cosa de tu lista de aprobación. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir una alternativa a OpenClaw" },
  mid: {
    title: "¿Necesitas agentes que trabajen, no solo que chateen?",
    text: "Crewmark ejecuta Claude Code y Codex como empleados de IA que toman la siguiente issue de tu tablero con un heartbeat.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a OpenClaw",
    items: [
      {
        q: "¿Cuál es la mejor alternativa a OpenClaw?",
        a: "Depende de por qué lo dejas: NanoClaw para aislamiento por contenedores, Hermes Agent para un agente que se mejora a sí mismo, ZeroClaw para un runtime pequeño en Rust, IronClaw para funciones de privacidad y una nube gestionada, y Crewmark si quieres agentes que hagan el trabajo de un equipo en lugar de un asistente personal.",
      },
      {
        q: "¿Hay alguna alternativa de código abierto a OpenClaw?",
        a: "Sí: Hermes Agent (MIT), NanoClaw (MIT), ZeroClaw (MIT o Apache 2.0), IronClaw (MIT o Apache 2.0) y NVIDIA NemoClaw (Apache 2.0) son todos de código abierto.",
      },
      {
        q: "OpenClaw vs Hermes Agent: ¿en qué se diferencian?",
        a: "Ambos son asistentes de código abierto para tus apps de chat. Hermes Agent, de Nous Research, se centra en un bucle de aprendizaje que mejora sus propias skills y ofrece aislamiento opcional en contenedores; OpenClaw tiene la comunidad más grande y más canales. Sus reglas para la suscripción de Claude difieren: Hermes necesita Claude Max con créditos de uso adicional.",
      },
      {
        q: "¿Es NanoClaw más seguro que OpenClaw?",
        a: "NanoClaw ejecuta cada sesión en su propio contenedor y mantiene las credenciales fuera de él, por diseño. OpenClaw ejecuta las herramientas en el host en la sesión principal salvo que configures su sandboxing. Ambos se pueden blindar; NanoClaw ya empieza así.",
      },
      {
        q: "¿Puede OpenClaw usar mi suscripción de Claude?",
        a: "La documentación de OpenClaw describe dos vías para Claude: una clave de API o reutilizar una sesión de Claude Code en la misma máquina. También advierte que el nombre del proveedor por sí solo no indica si el uso se factura a una API o a una suscripción.",
      },
      {
        q: "¿Hay alguna alternativa a OpenClaw para Windows?",
        a: "Hermes Agent tiene una app de escritorio para Windows, y ZeroClaw e IronClaw se instalan de forma nativa en Windows. El propio OpenClaw admite Windows y WSL2; NanoClaw necesita WSL2.",
      },
      {
        q: "¿Qué es NemoClaw?",
        a: "Un stack de código abierto de NVIDIA, en fase alfa, que ejecuta OpenClaw, Hermes o LangChain Deep Agents dentro de sandboxes de NVIDIA OpenShell. Es una forma de ejecutar OpenClaw de manera más segura, no un sustituto.",
      },
    ],
  },
  cta: {
    title: "Pon a los agentes de IA a trabajar en el backlog de tu equipo.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el README, el sitio web, la documentación o el blog de cada proyecto, y con la API de GitHub, el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de la OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic ni OpenAI. Los nombres de productos son marcas registradas de sus propietarios.",
};
