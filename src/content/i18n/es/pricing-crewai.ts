import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/crewai; the English master is src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI: precios (framework gratis, AMP Basic y Enterprise)",
    description:
      "Precios de CrewAI: framework MIT gratis, CrewAI AMP Basic gratis con 50 ejecuciones de flujos al mes y Enterprise a medida. Y lo que te cuestan los modelos.",
  },
  breadcrumb: "Precios de CrewAI",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Frameworks de agentes",
    title: "Precios de CrewAI: el framework gratis, los planes de AMP y el coste de los modelos",
    lead: "El framework de Python de código abierto de CrewAI es gratis con licencia MIT; pagas a tu proveedor de modelos, que por defecto es la API de OpenAI. CrewAI AMP, la plataforma de la empresa para crear, desplegar y trazar crews y flows, tiene dos planes: Basic, gratis con 50 ejecuciones de flujos de trabajo al mes, y Enterprise, con precio a medida. CrewAI no publica moneda, periodo de facturación ni precio por exceso de uso. Aquí tienes lo que incluye cada plan, qué más pagas y cómo se compara CrewAI con LangGraph, AutoGen, Relevance AI y Paperclip.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de CrewAI",
      text: [
        "Según la página de precios de [crewai.com](https://crewai.com) y el README de crewAI, comprobados el 13 de noviembre de 2026. CrewAI muestra los planes de la plataforma como “Gratis” (“Free”) y “A medida” (“Custom”), sin moneda ni periodo de facturación.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Framework CrewAI (código abierto)",
          "Gratis, licencia MIT",
          "Una biblioteca de Python para crews de agentes basados en roles y flows orientados a eventos, que se ejecuta en tu propio código y tu propia infraestructura",
        ],
        [
          "AMP Basic",
          "Gratis",
          "Editor visual y copiloto de IA, integración con GitHub, 50 ejecuciones de flujos de trabajo/mes, programación con cron, intervención humana (human-in-the-loop)",
        ],
        [
          "AMP Enterprise",
          "A medida (sin precio publicado)",
          "Despliegue en la nube de CrewAI, en tu propia VPC o en tu propia infraestructura; SSO (MS Entra, Okta), RBAC, VPC dedicada y conectores empresariales; programación con cron e intervención humana (human-in-the-loop)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por CrewAI",
      points: [
        "Tu proveedor de modelos. Los agentes de CrewAI llaman a las API de modelos que configures: “Por defecto, tus agentes usarán la API de OpenAI” (“By default your agents will use the OpenAI API”). Admite otros proveedores y modelos locales (Ollama, LM Studio).",
        "Ejecuciones de flujos de trabajo en AMP Basic. El plan gratuito de la plataforma está limitado a 50 ejecuciones de flujos de trabajo al mes. CrewAI no publica un precio por exceso de uso.",
        "Funciones de Enterprise. SSO, RBAC, la VPC dedicada y los conectores empresariales son exclusivos de Enterprise, con precio a medida.",
        "Dónde se ejecuta. El framework es una biblioteca de Python (Python `>=3.10, <3.14`) en tu propio código y tu propia infraestructura. AMP es una app web en app.crewai.com; Enterprise puede desplegarse en la nube de CrewAI, en tu propia VPC o en tu propia infraestructura.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de CrewAI frente a otros frameworks y plataformas de agentes",
      text: [
        "Precios según la página de precios o el README de cada producto, comprobados el 13 de noviembre de 2026, en dólares estadounidenses. El README de AutoGen dice “Este proyecto se ha archivado y Microsoft ya no lo mantiene activamente” (“This project has been archived and is no longer actively maintained by Microsoft”), y Microsoft señala a Agent Framework como su sucesor directo. A 13 de noviembre de 2026, la documentación de Relevance AI dice que su plan Free se ha retirado para los nuevos registros y las cuentas existentes.",
        "Cara a cara: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). Más opciones en [alternativas a CrewAI](/alternatives/crewai).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        [
          "CrewAI",
          "Framework gratis; AMP Basic gratis; Enterprise a medida",
          "Sí: el framework (MIT) y AMP Basic con 50 ejecuciones de flujos de trabajo/mes",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework gratis; LangSmith Plus $39/puesto al mes",
          "Sí: el framework (MIT) y LangSmith Developer a $0 para 1 puesto",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Gratis (código abierto); el README no menciona ningún servicio de pago",
          "Sí: código con licencia MIT; el README dice que está archivado y que Microsoft ya no lo mantiene activamente",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, precio a medida a través de ventas",
          "No: su documentación dice que el plan Free se ha retirado",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "Autoalojado gratis; sin precios publicados",
          "Sí: autoalojado (MIT); hay una versión en la nube en lista de espera",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿No estás creando una app en Python? Dale un rol a Claude Code o Codex.",
      text: [
        "CrewAI sirve para crear flujos de trabajo multiagente en tu propio código de Python. Crewmark es un gestor de issues para un equipo de empleados de IA, pensado para quienes ya usan Claude Code o Codex y quieren que sus agentes sigan adelante con un trabajo sin tener que darles un prompt cada vez. Cada empleado tiene un rol, objetivos en cifras y un horario laboral, se despierta con un latido y toma issues de un tablero compartido. El uso del agente sigue corriendo por la suscripción de Claude o ChatGPT que ya pagas.",
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
    title: "¿Ya usas Claude Code o Codex?",
    text: "Crewmark lo convierte en empleados de IA con roles, un latido y un tablero compartido. Gratis para 1 proyecto y hasta 3 empleados de IA.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de CrewAI",
    items: [
      {
        q: "¿CrewAI es gratis?",
        a: "El framework sí: es de código abierto con licencia MIT, y solo pagas a tu proveedor de modelos. El plan CrewAI AMP Basic también es gratis, con 50 ejecuciones de flujos de trabajo al mes.",
      },
      {
        q: "¿Qué planes de precios tiene CrewAI AMP?",
        a: "Dos: Basic, que aparece como “Gratis” (editor visual y copiloto de IA, integración con GitHub, 50 ejecuciones de flujos de trabajo al mes), y Enterprise, que aparece como “A medida”, sin precio. CrewAI no publica moneda, periodo de facturación ni precio por exceso de uso.",
      },
      {
        q: "¿Cuánto cuesta CrewAI Enterprise?",
        a: "CrewAI no publica un precio; Enterprise es “A medida”. Añade despliegue en la nube de CrewAI, en tu propia VPC o en tu propia infraestructura, SSO con MS Entra u Okta, RBAC y conectores empresariales.",
      },
      {
        q: "¿Cuál es el modelo de precios de CrewAI?",
        a: "Un framework de código abierto gratuito que ejecutas tú, más la plataforma AMP con precio por plan: Basic es gratis y está limitado a 50 ejecuciones de flujos de trabajo al mes, y Enterprise es a medida. El uso de modelos lo factura aparte tu proveedor de modelos.",
      },
      {
        q: "¿Cuánto cuesta CrewAI en la nube?",
        a: "AMP es una app web en app.crewai.com, y Basic es gratis con 50 ejecuciones de flujos de trabajo al mes. El despliegue en la nube de CrewAI, en tu propia VPC o en tu propia infraestructura figura en Enterprise, con precio a medida.",
      },
      {
        q: "¿Necesito una clave de OpenAI para usar CrewAI?",
        a: "Por defecto, los agentes de CrewAI usan la API de OpenAI. Admite otros proveedores y modelos locales, como Ollama y LM Studio.",
      },
    ],
  },
  cta: {
    title: "Crea un crew en código, o dales un trabajo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con crewai.com/pricing, la documentación de la plataforma de CrewAI y el README de crewAI el 13 de noviembre de 2026. Los precios de los demás productos proceden de sus propias páginas en la misma fecha.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con crewAI, Inc. ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
