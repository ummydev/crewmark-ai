import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/openclaw; the English master is src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw: precios (gratis) y lo que pagas de verdad",
    description:
      "OpenClaw es gratis y con licencia MIT, sin plan de pago ni servicio alojado. Pagas a tu proveedor de modelos: una clave de API o una suscripción que ya tienes.",
  },
  breadcrumb: "Precios de OpenClaw",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · OpenClaw",
    title: "Precios de OpenClaw: gratis y de código abierto, pagas a tu proveedor de modelos",
    lead: "OpenClaw no cuesta nada. Tiene licencia MIT, y su README dice que el proyecto “no tiene plan de pago, servicio alojado ni token” (“has no paid tier, hosted service, or token.”). Lo que pagas es el modelo que hay detrás: una clave de API que factura tu proveedor, o una suscripción que ya tienes, como un inicio de sesión de ChatGPT o de Claude Code. El Gateway lo ejecutas en tu propia máquina. Aquí tienes lo que eso significa en la práctica y cómo se compara con Hermes Agent, OpenCode, OpenWorker y Claude Code.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de OpenClaw",
      text: [
        "Según el README de OpenClaw en GitHub y docs.openclaw.ai, comprobados el 13 de noviembre de 2026. Hay una sola edición, y es gratis.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "OpenClaw (código abierto)",
          "Gratis, licencia MIT",
          "El Gateway, la Control UI, la CLI y la TUI; apps nativas para macOS, iOS, Android, Windows y Linux; canales de chat como WhatsApp, Telegram, Slack, Discord e iMessage; varios agentes por Gateway; el programador de Automations",
        ],
        ["Plan de pago", "Ninguno", "El README dice que no hay plan de pago"],
        ["Servicio alojado", "Ninguno", "El Gateway lo ejecutas y lo mantienes tú"],
        [
          "Uso de modelos",
          "Lo factura tu proveedor de modelos",
          "Una clave de API, o una suscripción que ya tienes (OAuth de ChatGPT/Codex, o un inicio de sesión de Claude Code en el mismo host)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por ejecutar OpenClaw",
      points: [
        "Tu proveedor de modelos. Los modelos son plugins: OpenAI, Anthropic, Google Gemini, OpenRouter, xAI y otros. Con una clave de API, ese proveedor te factura lo que usa OpenClaw.",
        "O una suscripción que ya pagas. OpenClaw puede iniciar sesión con OAuth de OpenAI ChatGPT/Codex, y puede usar Claude reutilizando un inicio de sesión de Claude Code en el mismo host (también `claude setup-token`).",
        "El inicio de sesión de Claude Code solo funciona cuando OpenClaw se ejecuta en el mismo host que ese inicio de sesión. Las instalaciones en contenedores (por ejemplo, Podman) no montan `~/.claude`, así que la documentación recomienda una clave de API en ese caso.",
        "Los servidores de modelos locales también están en la lista de proveedores: Ollama, LM Studio y vLLM.",
        "Tu propia máquina. El Gateway es un daemon en hardware que controlas tú, instalado en macOS, Linux, Windows o WSL2, o con Docker o Nix. OpenClaw no ofrece alojamiento propio.",
        "Nada a OpenClaw. El proyecto no tiene plan de pago, así que no hay nada que comprarle.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de OpenClaw frente a agentes similares",
      text: [
        "Precios según el sitio de cada producto, comprobados el 13 de noviembre de 2026. Todos necesitan además un modelo, que se paga a su proveedor salvo que algún plan de abajo lo incluya.",
        "Cara a cara: [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). Más opciones en [alternativas a OpenClaw](/blog/openclaw-alternatives).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        ["OpenClaw", "Gratis; pagas a tu proveedor de modelos", "Sí: todo el proyecto (MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agente gratis; Nous Portal Plus opcional, $20/mes",
          "Sí: el agente (MIT), y Nous Portal Free a $0",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agente gratis; OpenCode Go $10/mes, Go Plus $40/mes",
          "Sí: modelos gratuitos con un límite diario de solicitudes, sin necesidad de cuenta",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Sin precio publicado; tu propia clave de modelo o un modelo local",
          "Sí: la app (MIT)",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro $20/mes, o $17/mes con facturación anual",
          "No: no está en Claude Free; también sirven los créditos de API con pago por uso",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "OpenClaw te responde en el chat. Crewmark da un trabajo a tus agentes de programación.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. Igual que OpenClaw, no factura el uso de modelos: los agentes funcionan con la suscripción de Claude o ChatGPT que ya pagas.",
        "Los precios de Crewmark: Free a $0 (1 proyecto, hasta 3 empleados de IA, 1 persona). Pro a $5/mes y Team a $10/mes llegarán próximamente. La facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0) y se puede autoalojar.",
      ],
      steps: [
        { title: "Elige un rol", text: "Entre los [roles de empleados de IA](/ai-employees), con objetivos en cifras." },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues y haz que las habituales se repitan; el latido despierta al empleado para que tome la siguiente.",
        },
        {
          title: "Consulta los planes",
          text: "[Precios de Crewmark](/pricing), y lo que hacen los agentes con él en [casos de uso de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Ya pagas Claude o ChatGPT?",
    text: "Crewmark convierte tu Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de OpenClaw",
    items: [
      {
        q: "¿OpenClaw es gratis?",
        a: "Sí. OpenClaw es de código abierto con licencia MIT, y su README dice que el proyecto “no tiene plan de pago, servicio alojado ni token”. Solo pagas a tu proveedor de modelos.",
      },
      {
        q: "¿OpenClaw tiene un plan de precios?",
        a: "No. Hay una sola edición gratuita. Lo único que pagas es el modelo que conectes: una clave de API que factura su proveedor, o una suscripción que ya tienes.",
      },
      {
        q: "¿Cuál es el modelo de precios de OpenClaw?",
        a: "Software gratuito más un modelo que aportas tú. Los modelos son plugins (OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM y otros), así que el coste depende del proveedor y del plan que elijas.",
      },
      {
        q: "¿Puedo usar OpenClaw con mi suscripción de Claude?",
        a: "Sí, reutilizando un inicio de sesión de Claude Code en el mismo host (o `claude setup-token`). Las instalaciones en contenedores, como Podman, no montan `~/.claude`, así que la documentación recomienda una clave de API en ese caso.",
      },
      {
        q: "¿Hay una versión alojada de OpenClaw?",
        a: "No por parte del proyecto. El Gateway lo ejecutas en tu propia máquina (macOS, Linux, Windows o WSL2, o con Docker o Nix) y lo mantienes tú.",
      },
      {
        q: "¿Quién paga el desarrollo de OpenClaw?",
        a: "La OpenClaw Foundation, una organización 501(c)(3) independiente que emplea al equipo principal y firma las versiones. El README dice: “OpenAI es un donante, no un propietario” (“OpenAI is a donor, not an owner.”).",
      },
    ],
  },
  cta: {
    title: "Mantén tu factura de modelos. Dales un trabajo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el README de OpenClaw en GitHub y docs.openclaw.ai, y con la página de precios de cada producto comparado, el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con la OpenClaw Foundation ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
