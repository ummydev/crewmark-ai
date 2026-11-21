import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/relevance-ai; the English master is src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI: precios (solo Enterprise, plan Free retirado)",
    description:
      "La página de precios de Relevance AI muestra un plan, Enterprise, a medida vía ventas, y su documentación da por retirado el plan Free. Qué supone para ti.",
  },
  breadcrumb: "Precios de Relevance AI",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Relevance AI",
    title: "Precios de Relevance AI: un plan Enterprise a través de ventas y ningún plan Free",
    lead: "La página pública de precios de Relevance AI muestra un único plan, Enterprise, con precio a medida: “Habla con ventas” (“Talk to sales”). Su documentación dice que el plan Free se ha retirado para los nuevos registros y las cuentas existentes. Para los modelos, la documentación indica dos vías: créditos o tu propia clave de LLM. Aquí tienes lo que incluye el plan Enterprise, lo que eso supone si vas a comprar hoy y cómo se compara el precio con Lindy, CrewAI, LangGraph y Crewmark.",
    cta: "Empezar",
    secondary: "Ver los planes",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de Relevance AI",
      text: [
        "Según relevanceai.com/pricing y la documentación de Relevance AI, comprobadas el 13 de noviembre de 2026. La página de precios no publica el precio de ningún plan de autoservicio.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Enterprise",
          "A medida (“Habla con ventas”)",
          "Actions personalizadas y créditos de proveedores; agentes, herramientas, usuarios y proyectos ilimitados. Según la documentación, SSO, RBAC, registros de auditoría, evaluaciones de agentes, controles de horario laboral y disparadores empresariales son exclusivos de Enterprise",
        ],
        ["Free", "Retirado", "La documentación dice que el plan Free se ha retirado para los nuevos registros y las cuentas existentes"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por Relevance AI",
      points: [
        "Un contrato a medida. El único plan publicado es Enterprise, con precio a través de ventas, así que solo tienes una cifra después de hablar con Relevance AI.",
        "Modelos con créditos o con tu propia clave. La tabla de planes de la documentación indica “Usa cualquier LLM con créditos” (“Use any LLMs with credits”) y “Usa tu propio LLM” (“Bring your own LLM”, BYOK). Enterprise incluye Actions personalizadas y créditos de proveedores.",
        "Funciones que requieren Enterprise: SSO, RBAC, registros de auditoría, evaluaciones de agentes, controles de horario laboral y disparadores empresariales para Salesforce, Snowflake y Zendesk.",
        "Ninguna forma gratuita de empezar. Con el plan Free retirado para los nuevos registros, no hay un plan de $0 para probarlo antes de una conversación con ventas.",
        "Además del producto, la propuesta comercial ofrece un equipo de despliegue integrado que identifica casos de uso en las semanas 1 y 2 y despliega a partir de la semana 3, además de “Invent”, que Relevance AI llama un ingeniero de soluciones de IA disponible 24/7.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de Relevance AI frente a plataformas de agentes similares",
      text: [
        "Precios según el sitio de cada producto, comprobados el 13 de noviembre de 2026. Los productos que usan tus propios modelos necesitan además un modelo, que se paga a su proveedor.",
        "Cara a cara: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Más opciones en [alternativas a Relevance AI](/alternatives/relevance-ai).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        ["Relevance AI", "Enterprise, precio a medida a través de ventas", "No: el plan Free se ha retirado"],
        [
          "[Lindy](/personal-agent/lindy)",
          "$29.99/mes por usuario activo por 3.000 créditos",
          "Sí: $50 en créditos que duran 7 días, sin tarjeta de crédito",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework gratis (MIT); AMP Enterprise a medida",
          "Sí: el framework, y AMP Basic con 50 ejecuciones de flujos de trabajo al mes",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework gratis (MIT); LangSmith Plus $39/puesto al mes",
          "Sí: el framework, y LangSmith Developer a $0 (1 puesto, hasta 5.000 trazas base al mes)",
        ],
        [
          "[Crewmark](/pricing)",
          "Gratis; Pro $5/mes y Team $10/mes próximamente",
          "Sí: 1 proyecto, hasta 3 empleados de IA, 1 persona",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Relevance AI crea agentes alojados. Crewmark dirige tus propios agentes de programación como un equipo.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. Los agentes funcionan con la suscripción de Claude o ChatGPT que ya pagas, sin una factura de tokens aparte.",
        "Los precios de Crewmark: Free a $0 (1 proyecto, hasta 3 empleados de IA, 1 persona). Pro a $5/mes y Team a $10/mes llegarán próximamente. La facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0) y se puede autoalojar.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Entre los [roles de empleados de IA](/ai-employees), como SEO, growth, redes sociales o ingeniería, con objetivos en cifras.",
        },
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
    title: "¿Quieres empezar sin una llamada con ventas?",
    text: "El plan Free de Crewmark le da a tu Claude Code o Codex un rol, un latido y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de Relevance AI",
    items: [
      {
        q: "¿Relevance AI tiene un plan gratuito?",
        a: "Ya no. La documentación de Relevance AI dice que el plan Free se ha retirado para los nuevos registros y las cuentas existentes.",
      },
      {
        q: "¿Cuánto cuesta Relevance AI?",
        a: "Su página pública de precios muestra un único plan, Enterprise, con precio a medida a través de ventas. No publica el precio de ningún plan de autoservicio.",
      },
      {
        q: "¿Qué incluyen los precios de Relevance AI para empresas?",
        a: "Actions personalizadas y créditos de proveedores, y agentes, herramientas, usuarios y proyectos ilimitados. SSO, RBAC, registros de auditoría, evaluaciones de agentes, controles de horario laboral y disparadores empresariales son exclusivos de Enterprise.",
      },
      {
        q: "¿Puedo usar mi propia clave de LLM con Relevance AI?",
        a: "La tabla de planes de la documentación indica “Usa tu propio LLM” (BYOK) junto a “Usa cualquier LLM con créditos”, así que puedes usar créditos o la clave de tu propio proveedor.",
      },
      {
        q: "¿Puedo autoalojar Relevance AI?",
        a: "No se indica ninguna opción de autoalojamiento. Relevance AI es una plataforma web alojada y no es de código abierto.",
      },
      {
        q: "¿Hay alguna alternativa a Relevance AI con plan gratuito?",
        a: "Varias lo tienen. Lindy da $50 en créditos durante 7 días, CrewAI y LangGraph son frameworks de código abierto gratuitos, y Crewmark tiene un plan Free. Consulta [alternativas a Relevance AI](/alternatives/relevance-ai).",
      },
    ],
  },
  cta: {
    title: "Empieza gratis con los agentes que ya tienes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con relevanceai.com/pricing, la documentación de Relevance AI y la página de precios de cada producto comparado el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Relevance AI ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
