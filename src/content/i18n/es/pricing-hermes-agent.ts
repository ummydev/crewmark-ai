import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/hermes-agent; the English master is src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent: precios (agente gratis y planes de Nous Portal)",
    description:
      "Hermes Agent es gratis y tiene licencia MIT. El Nous Portal opcional cuesta $0, $20, $100 o $200 al mes. Qué incluye cada nivel y qué pagas aparte.",
  },
  breadcrumb: "Precios de Hermes Agent",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Nous Research",
    title: "Precios de Hermes Agent: un agente gratis y una suscripción opcional a Nous Portal",
    lead: "Hermes Agent es gratis: Nous Research lo publica con licencia MIT, y pagas a tu proveedor de modelos. Si prefieres obtener los modelos de Nous, el Nous Portal opcional tiene cuatro niveles: Free a $0, Plus a $20 al mes, Super a $100 y Ultra a $200, y los de pago incluyen un agente alojado en la nube. Aquí tienes lo que incluye cada nivel, qué pagas aparte y cómo se compara con OpenClaw, OpenCode, OpenWorker y Grok Bot.",
    cta: "Empezar",
    secondary: "Ver los planes",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes de Hermes Agent y Nous Portal",
      text: [
        "Según hermes-agent.nousresearch.com y portal.nousresearch.com, comprobados el 13 de noviembre de 2026. Los precios son mensuales; no se indica precio anual. No necesitas un plan de Nous Portal para usar el agente.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Hermes Agent",
          "Gratis, licencia MIT",
          "El agente: interfaz de terminal, app de escritorio, apps de chat a través de un único gateway, skills, memoria, un programador cron y Bot Mode. Con cualquier proveedor de modelos",
        ],
        ["Nous Portal Free", "$0", "Pago por uso; solo modelos gratuitos"],
        ["Nous Portal Plus", "$20/mes", "Modelos gratuitos y de pago; un agente alojado en la nube (4 GB de RAM, 25 GB de disco)"],
        [
          "Nous Portal Super",
          "$100/mes",
          "5× el uso de Plus; modelos gratuitos y de pago; un agente alojado en la nube (4 GB de RAM, 100 GB de disco)",
        ],
        [
          "Nous Portal Ultra",
          "$200/mes",
          "10× el uso de Plus; modelos gratuitos y de pago; un agente alojado en la nube (8 GB de RAM, 100 GB de disco)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por ejecutar Hermes Agent",
      points: [
        "Tu proveedor de modelos. Cambias de proveedor con `hermes model`: Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, endpoints personalizados y más. Con una clave de API, te factura ese proveedor.",
        "Una suscripción de Claude solo funciona en Claude Max con uso adicional comprado. La documentación dice que “los suscriptores de Claude Pro no pueden usar esta vía” (“Claude Pro subscribers cannot use this path”), así que en Pro necesitas una clave de API.",
        "El inicio de sesión con ChatGPT/Codex funciona con un código de dispositivo. Qué planes de ChatGPT funcionan, y cómo cuenta el uso frente a los límites del plan, “no está documentado actualmente” (“not currently documented”).",
        "Un sitio donde ejecutarlo. Hermes Agent se instala en local o en un servidor: el README menciona “un VPS de $5, un clúster de GPU o infraestructura serverless” (“a $5 VPS, a GPU cluster, or serverless infrastructure”). Sus seis backends de terminal son local, Docker, SSH, Modal, Daytona y Vercel Sandbox.",
        "O un nivel de pago de Nous Portal, que incluye un agente alojado en la nube (con los tamaños de la tabla de arriba).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de Hermes Agent frente a agentes similares",
      text: [
        "Precios según el sitio de cada producto, comprobados el 13 de noviembre de 2026.",
        "Cara a cara: [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). Más opciones en [alternativas a Hermes Agent](/alternatives/hermes-agent).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        [
          "Hermes Agent",
          "Gratis; Nous Portal Plus opcional, $20/mes",
          "Sí: el agente (MIT), y Nous Portal Free a $0",
        ],
        ["[OpenClaw](/pricing/openclaw)", "Gratis; pagas a tu proveedor de modelos", "Sí: todo el proyecto (MIT)"],
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
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium $30/mes; Super $100, Ultra $200",
          "No se indica ninguna",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Hermes Agent es tu agente personal. Crewmark dirige un equipo de agentes de programación.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. Los agentes funcionan con la suscripción de Claude o ChatGPT que ya pagas, sin una factura de tokens aparte.",
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
          text: "[Precios de Crewmark](/pricing), y lo que hacen los agentes con él en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres agentes que sigan adelante con un trabajo?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un latido y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de Hermes Agent",
    items: [
      {
        q: "¿Hermes Agent es gratis?",
        a: "Sí. El agente es de código abierto con licencia MIT. Pagas a tu proveedor de modelos o, si quieres, te suscribes a Nous Portal.",
      },
      {
        q: "¿Cuánto cuesta Hermes Agent al mes?",
        a: "El agente cuesta $0. El Nous Portal opcional tiene Free a $0, Plus a $20 al mes, Super a $100 (5× el uso de Plus) y Ultra a $200 (10× el uso de Plus). No se indica precio anual.",
      },
      {
        q: "¿Necesito una suscripción a Nous Portal para usar Hermes Agent?",
        a: "No. Nous Portal es uno de los muchos proveedores que puedes elegir con `hermes model`, junto a OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, modelos locales y endpoints personalizados.",
      },
      {
        q: "¿Puedo usar mi suscripción de Claude con Hermes Agent?",
        a: "Solo en Claude Max con uso adicional comprado. La documentación dice que los suscriptores de Claude Pro no pueden usar la vía de la suscripción, así que en Pro necesitas una clave de API.",
      },
      {
        q: "¿Algún plan de precios de Hermes Agent incluye alojamiento?",
        a: "Los niveles de pago de Nous Portal incluyen un agente alojado en la nube: 4 GB de RAM y 25 GB de disco en Plus, 4 GB y 100 GB en Super, 8 GB y 100 GB en Ultra. Si no, lo ejecutas en tu propia máquina o servidor.",
      },
      {
        q: "¿Puedo usar mi suscripción de ChatGPT con Hermes Agent?",
        a: "El inicio de sesión con ChatGPT/Codex funciona con un código de dispositivo, pero la documentación dice que qué planes de ChatGPT funcionan, y cómo cuenta el uso frente a los límites del plan, no está documentado actualmente.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes de programación un rol y un horario.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con hermes-agent.nousresearch.com, portal.nousresearch.com, la documentación y el README de GitHub de Hermes Agent, y la página de precios de cada producto comparado, el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Nous Research ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
