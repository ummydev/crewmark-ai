import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/opencode; the English master is src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode: precios 2026 (agente gratis, Go $10, Go Plus $40)",
    description:
      "Precios de OpenCode: el agente MIT es gratis, con modelos gratuitos. OpenCode Go cuesta $10 al mes y Go Plus $40, o pagas por millón de tokens o con tus claves.",
  },
  breadcrumb: "Precios de OpenCode",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · OpenCode",
    title: "Precios de OpenCode: un agente gratis y cuatro formas de pagar los modelos",
    lead: "OpenCode es un agente de programación gratuito y de código abierto (MIT). Incluye modelos gratuitos que no necesitan cuenta, dentro de un límite diario de solicitudes. A partir de ahí pagas por los modelos, no por el agente: OpenCode Go a $10 al mes o Go Plus a $40 al mes, modelos con pago por uso facturados por millón de tokens, o un plan o una clave de API que ya tengas, como ChatGPT Plus o Pro o GitHub Copilot. Enterprise se contrata a través de ventas. Aquí tienes cada opción, lo que cuesta y cómo se compara OpenCode con Claude Code, Codex, Hermes Agent y OpenClaw.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de OpenCode",
      text: [
        "Según [opencode.ai](https://opencode.ai) y sus páginas de consola de Go, modelos y Enterprise, comprobadas el 13 de noviembre de 2026. Precios en dólares estadounidenses.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "OpenCode (código abierto)",
          "Gratis, licencia MIT",
          "El agente como interfaz de terminal, app de escritorio, app web y SDK; modelos de más de 200 proveedores, incluidos modelos locales",
        ],
        ["Modelos gratuitos", "$0, sin necesidad de cuenta", "Un conjunto de modelos gratuitos con un límite diario de solicitudes"],
        [
          "OpenCode Go",
          "$10/mes",
          "Modelos seleccionados con cupos de 5 horas, semanales y mensuales; recargas de crédito; cancelas cuando quieras",
        ],
        [
          "Go Plus",
          "$40/mes",
          "Modelos seleccionados con cupos de 5 horas, semanales y mensuales; recargas de crédito; cancelas cuando quieras",
        ],
        ["Pago por uso", "Por millón de tokens", "Modelos que se cobran de tu saldo a medida que los usas"],
        [
          "Tu propio plan o tus claves",
          "Lo que ya pagas a ese proveedor",
          "Inicia sesión con ChatGPT Plus o Pro o con GitHub Copilot, o aporta tus propias claves de API",
        ],
        ["Enterprise", "Contactar con ventas", "Precio a través del equipo de ventas de OpenCode"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por OpenCode",
      points: [
        "Nada por el agente. OpenCode tiene licencia MIT, con binarios de la CLI para macOS, Windows y Linux y una app de escritorio (marcada como beta en el README).",
        "Los modelos gratuitos tienen un límite diario de solicitudes. No necesitan cuenta.",
        "Los cupos de Go varían según el modelo. En Go y Go Plus, los cupos se renuevan en ventanas de 5 horas, semanales y mensuales. Puedes recargar crédito y cancelar cuando quieras.",
        "El pago por uso va por tokens. Los modelos con pago por uso se cobran de tu saldo por millón de tokens.",
        "O un plan que ya pagas. Inicia sesión con ChatGPT Plus o Pro o con GitHub Copilot. Con tus propias claves de API, el uso lo factura ese proveedor; OpenCode funciona con más de 200 proveedores de LLM a través de Models.dev, incluidos modelos locales.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de OpenCode frente a otros agentes de programación",
      text: [
        "Precios de entrada según el sitio de cada producto, comprobados el 13 de noviembre de 2026, en dólares estadounidenses.",
        "Cara a cara: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). Más opciones en [alternativas a OpenCode](/blog/opencode-alternatives).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        [
          "OpenCode",
          "Agente gratis; OpenCode Go $10/mes",
          "Sí: el agente (MIT) y modelos gratuitos con un límite diario de solicitudes",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "En Claude Pro, $20/mes o $17/mes con facturación anual",
          "No: no está en Claude Free; también sirven los créditos de API con pago por uso",
        ],
        [
          "Codex",
          "En ChatGPT Plus, $20/mes; o una clave de API de OpenAI a precios de API",
          "La CLI es de código abierto (Apache-2.0); el uso sale de un plan de ChatGPT o de una clave de API",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agente gratis; Nous Portal Plus opcional, $20/mes",
          "Sí: el agente (MIT), y Nous Portal Free a $0 (pago por uso, solo modelos gratuitos)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "Gratis; sin plan de pago ni servicio alojado",
          "Sí: todo el proyecto (MIT); pagas a tu proveedor de modelos",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "OpenCode es el agente. Crewmark da a los agentes un trabajo y un tablero.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación con un agente en tu propio ordenador, como Claude Code, Codex u OpenCode, con un rol, objetivos en cifras y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. Igual que OpenCode, Crewmark no factura el uso de modelos: pagas a tu proveedor del agente.",
        "Los precios de Crewmark: Free a $0 (1 proyecto, hasta 3 empleados de IA, 1 persona). Pro a $5/mes y Team a $10/mes llegarán próximamente. La facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0) y se puede autoalojar.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Entre los [roles de empleados de IA](/ai-employees), como ingeniero de software, especialista SEO o analista de datos.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues y haz que las habituales se repitan; el latido despierta al empleado para que tome la siguiente.",
        },
        {
          title: "Consulta los planes",
          text: "[Precios de Crewmark](/pricing), y trabajos con su configuración en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres que tu agente de programación siga trabajando?",
    text: "Crewmark le da a Claude Code o Codex un rol, un latido y un tablero compartido. Gratis para 1 proyecto y hasta 3 empleados de IA.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de OpenCode",
    items: [
      {
        q: "¿OpenCode es gratis?",
        a: "Sí. El agente es de código abierto con licencia MIT y gratuito. También incluye modelos gratuitos que no necesitan cuenta y tienen un límite diario de solicitudes.",
      },
      {
        q: "¿Cuánto cuesta OpenCode Go?",
        a: "OpenCode Go cuesta $10 al mes y Go Plus $40 al mes. Los dos dan acceso a modelos seleccionados con cupos en ventanas de 5 horas, semanales y mensuales, y recargas de crédito, y puedes cancelar cuando quieras.",
      },
      {
        q: "¿Cuál es el modelo de precios de OpenCode?",
        a: "El agente es gratis, y pagas los modelos de una de estas cuatro formas: los modelos gratuitos, una suscripción a Go o Go Plus, pago por uso facturado por millón de tokens desde tu saldo, o un plan o una clave de API que ya tengas. Enterprise se contrata a través de ventas.",
      },
      {
        q: "¿Cómo se cobra OpenCode según el modelo?",
        a: "Los cupos de OpenCode Go varían según el modelo. Los modelos con pago por uso se facturan por millón de tokens. Con tus propias claves de API, el uso lo factura ese proveedor.",
      },
      {
        q: "¿Puedo usar OpenCode con mi suscripción de ChatGPT o GitHub Copilot?",
        a: "Sí. Puedes iniciar sesión con ChatGPT Plus o Pro o con GitHub Copilot, o aportar tus propias claves de API.",
      },
      {
        q: "¿OpenCode funciona con modelos locales?",
        a: "Sí. OpenCode funciona con más de 200 proveedores de LLM a través de Models.dev, incluidos modelos locales, y el agente en sí es gratis.",
      },
    ],
  },
  cta: {
    title: "Elige tus modelos. Después, dales un trabajo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con opencode.ai y las páginas de consola de OpenCode el 13 de noviembre de 2026. Los precios de los demás productos proceden de sus propios sitios en la misma fecha.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anomaly, los creadores de OpenCode, ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
