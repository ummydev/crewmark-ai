import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: qué hace el asistente, precio, créditos y configuración",
    description:
      "Lindy AI: un asistente alojado para correo, calendario, reuniones y Slack. Precios por créditos, rutinas, aprobaciones, dónde usarlo y Lindy vs Relevance AI.",
  },
  breadcrumb: "Lindy",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Lindy",
    title: "Lindy AI: qué hace el asistente, cuánto cuesta y cómo configurarlo",
    lead: "Lindy se describe como un empleado de IA que completa trabajo en tus herramientas conectadas. Es un único asistente alojado que hace de asistente ejecutivo personal para cada usuario y de compañero de equipo compartido en Slack. Se encarga de la bandeja de entrada, el calendario, las reuniones, la investigación, los informes y los seguimientos, ejecuta el trabajo recurrente como rutinas y espera tu aprobación antes de cualquier cosa con impacto externo. Aquí tienes qué hace, cómo funcionan sus precios por créditos, cómo configurarlo, cómo funcionan las aprobaciones y cómo se compara con Relevance AI y Grok Bot.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Lindy",
      points: [
        "Un asistente, no un creador de agentes: la documentación describe una sola instancia de Lindy por espacio de trabajo. Se promociona para muchos roles, como anuncios de pago, SEO y contenidos, contabilidad, selección de personal y atención al cliente.",
        "Dos formas de usarlo: en privado, como tu asistente ejecutivo a través de iMessage, correo o mensajes directos de Slack, y como compañero de equipo compartido al que tu equipo puede @mencionar en Slack para investigar, redactar informes o actualizar un CRM.",
        "Aprende: más de 40 skills integradas además de las tuyas, una memoria editable y Watch and Learn, con el que le enseñas una tarea una sola vez.",
        "Repite trabajo como rutinas: cada una tiene un disparador (una programación o un evento), un prompt y un destino. Las rutinas integradas cubren resúmenes diarios, redacción y etiquetado de correos, recordatorios de seguimiento, y grabación, preparación y programación de reuniones.",
        "Elige un modelo para cada tarea, y también puedes elegirlo tú.",
        "Es alojado: Lindy se ejecuta en la nube y lo fabrica Crivello Corp, que opera con el nombre comercial Lindy.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precios de Lindy: créditos y puestos",
      text: [
        "De lindy.ai/pricing el 13 de noviembre de 2026. No se muestra la facturación anual. Se factura a cada usuario activo de un espacio de trabajo, incluidas las personas que solo @mencionan a Lindy en Slack, y los créditos mensuales no se acumulan de un mes a otro.",
      ],
      headers: ["Opción", "Precio", "Qué incluye"],
      rows: [
        ["Inicio gratis", "$0, sin tarjeta de crédito", "$50 en créditos que duran 7 días; la semana gratis es única por compañero de equipo"],
        ["Por usuario activo", "Desde $29.99/mes", "3.000 créditos por cada usuario activo, en una bolsa común para todo el equipo"],
        ["Niveles con más créditos", "Hasta $9999.50/mes", "Hasta 1.750.000 créditos"],
        ["Recargas", "$10 por cada 1.000 créditos", "Cuando se agota la bolsa, las acciones que gastan créditos se pausan hasta el siguiente ciclo o una recarga"],
        ["Enterprise", "A medida", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Lindy",
      steps: [
        { title: "Empieza con créditos gratis", text: "El inicio gratis da $50 en créditos que duran 7 días, sin tarjeta de crédito." },
        {
          title: "Elige dónde hablar con él",
          text: "Slack, correo, iMessage y SMS, llamadas telefónicas, la extensión de Chrome en Gmail o la página Home de la web de Lindy, que muestra lo que ha estado haciendo Lindy. Microsoft Teams figura como próximamente.",
        },
        {
          title: "Conecta tus herramientas",
          text: "Gmail, Google Calendar, la grabación de reuniones en Google Meet, Zoom y Microsoft Teams, servidores MCP y credenciales de API guardadas.",
        },
        { title: "Enséñale cómo trabajas", text: "Usa las skills integradas, añade las tuyas, edita su memoria o enséñale una tarea una sola vez con Watch and Learn." },
        {
          title: "Configura rutinas",
          text: "Dale a cada rutina un disparador, un prompt y un destino, o empieza por una integrada, como un resumen diario. Las rutinas del espacio de trabajo se ejecutan a través de Slack y solo los administradores pueden configurarlas.",
        },
      ],
      source: { label: "Fuente: documentación de Lindy", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene Lindy al mando",
      points: [
        "Todo lo que tiene impacto externo espera tu aprobación, como enviar un correo, actualizar un ticket, publicar en otro canal o publicar un documento.",
        "Las consultas de solo lectura en fuentes aprobadas no necesitan aprobación.",
        "Los administradores pueden poner un tope de créditos por puesto, y solo los administradores configuran las rutinas del espacio de trabajo.",
        "Cuando se agota la bolsa de créditos, Lindy pausa las acciones que gastan créditos hasta el siguiente ciclo o una recarga.",
        "Su memoria es editable.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI y Grok Bot",
      text: [
        "Datos del sitio, la página de precios y la documentación de cada proveedor, comprobados el 13 de noviembre de 2026. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker); consulta también la [guía de Grok Bot](/personal-agent/grok-bot).",
        "Cara a cara: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). Guías: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["Fabricante", "Crivello Corp (Lindy)", "OnSearch Pty Ltd (Relevance AI)", "xAI"],
        ["Qué es", "Un asistente alojado por espacio de trabajo: un asistente ejecutivo y un compañero en Slack", "Una plataforma low-code/no-code para crear agentes y Workforces multiagente", "Compañeros de equipo de IA alojados: Bots, cada uno con su propio ordenador en la nube"],
        ["Varios agentes", "No se indica; la documentación describe una sola instancia de Lindy por espacio de trabajo", "Sí: agentes conectados en un lienzo visual", "Sí: los Bots se escriben entre sí y se coordinan en chats grupales"],
        ["Dónde lo usas", "Slack, correo, iMessage y SMS, teléfono, extensión de Chrome, web", "App web", "Apps de macOS e iOS, Slack, Microsoft Teams, llamadas"],
        ["Trabajo recurrente", "Rutinas según una programación o un evento", "Tareas programadas y disparadores desde apps", "Rutinas según una programación"],
        ["Aprobaciones", "Todo lo que tiene impacto externo espera aprobación", "Flujos de aprobación y escalados por correo y Slack", "Los Bots te consultan cuando necesitan aprobación; Auto Review"],
        ["Precios", "$50 en créditos gratis durante 7 días; desde $29.99/mes por usuario activo", "Plan Enterprise a través de ventas", "Premium $30, Super $100 o Ultra $200 al mes"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Lindy para tu bandeja de entrada. Crewmark para tu repositorio.",
      text: [
        "Lindy trabaja con tu bandeja de entrada, tu calendario, tus reuniones y Slack. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido, para que el trabajo de ingeniería, SEO y marketing de un repositorio se haga según un horario.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Lindy" },
  mid: {
    title: "¿Quieres un empleado de IA para tu código?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Lindy AI",
    items: [
      {
        q: "¿Qué es Lindy AI?",
        a: "Un asistente de IA alojado que trabaja con tus herramientas conectadas. Hace de asistente ejecutivo personal para cada usuario y de compañero de equipo compartido en Slack, se encarga de la bandeja de entrada, el calendario, las reuniones, la investigación, los informes y los seguimientos, y ejecuta el trabajo recurrente como rutinas.",
      },
      {
        q: "¿Cuánto cuesta Lindy?",
        a: "Puedes empezar con $50 en créditos que duran 7 días, sin tarjeta. Después, se factura a cada usuario activo del espacio de trabajo, desde $29.99 al mes por 3.000 créditos cada uno, en una bolsa común para todo el equipo. Las recargas cuestan $10 por cada 1.000 créditos, y los precios de Enterprise son a medida.",
      },
      {
        q: "¿Lindy es un agente o muchos?",
        a: "Uno. La documentación describe una sola instancia de Lindy por espacio de trabajo, y las rutinas no son un bot aparte. Se promociona para muchos roles y aprende mediante skills integradas y personalizadas, memoria y Watch and Learn, pero no se indica que tenga personalidades de agente separadas.",
      },
      {
        q: "¿Hay una app de Lindy?",
        a: "Lindy se usa a través de su página Home en la web, Slack, correo, iMessage y SMS, llamadas telefónicas y una extensión de Chrome en Gmail. La documentación no describe una app de escritorio ni móvil; Microsoft Teams figura como próximamente.",
      },
      {
        q: "¿Cómo me registro en Lindy?",
        a: "Empieza con los $50 en créditos gratis, que no piden tarjeta, duran 7 días y son únicos por compañero de equipo. Después, cada usuario activo ocupa un puesto de pago: los compañeros que se unen desde Slack tienen 7 días de prueba gratis, y los registros directos se facturan de inmediato.",
      },
      {
        q: "¿Lindy actúa sin preguntar?",
        a: "No en nada que tenga impacto externo: enviar un correo, actualizar un ticket, publicar en otro canal o publicar un documento espera tu aprobación. Las consultas de solo lectura en fuentes aprobadas no necesitan aprobación.",
      },
    ],
  },
  cta: {
    title: "Pásale tu bandeja de entrada a un asistente. Y dale también un trabajo a tus agentes de programación.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con lindy.ai, la página de precios de Lindy y la documentación de Lindy el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Lindy, Relevance AI ni xAI y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
