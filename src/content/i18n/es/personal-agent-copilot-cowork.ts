import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork: precio, créditos, licencias y vs Claude Cowork",
    description:
      "Copilot Cowork de Microsoft explicado: qué hace el agente de Microsoft 365, coste en Copilot Credits, licencias, skills, configuración y vs Claude Cowork.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Microsoft",
    title: "Copilot Cowork: qué hace el agente de Microsoft para Microsoft 365 y cómo se factura",
    lead: "Copilot Cowork es un agente de Microsoft 365 Copilot que lleva a cabo tareas de varios pasos en Microsoft 365. Envía correos, programa reuniones, crea y edita archivos de Word, Excel, PowerPoint y PDF, publica en Teams, gestiona archivos de OneDrive y SharePoint, busca en tu organización y hace investigaciones en profundidad, y pide aprobación antes de las acciones sensibles. Pasó a estar disponible de forma general para cuentas profesionales y educativas en junio de 2026. Aquí tienes qué hace, cómo funcionan las licencias y los Copilot Credits, cómo configurarlo, cómo funcionan las aprobaciones y cómo se compara con Claude Cowork, Claude Code y Codex.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Copilot Cowork y para qué se usa",
      text: [
        "Microsoft describe Cowork como un sistema agéntico que lleva a cabo tareas de varios pasos en tu nombre en Microsoft 365. Entre sus usos previstos están investigar un tema, redactar un documento y enviarlo por correo a las partes interesadas en una sola conversación, resúmenes e informes recurrentes, y tareas que reaccionan a los correos o mensajes de Teams que llegan.",
      ],
      points: [
        "Se ejecuta en la nube de Microsoft, en un entorno aislado. Los archivos se crean y se leen en OneDrive y SharePoint; no puede acceder a archivos de tu dispositivo local.",
        "Puede usar tu navegador: en Cowork en la web, las tareas de navegador se ejecutan en una pestaña oculta de Microsoft Edge en tu propio dispositivo, con las sesiones que ya tienes iniciadas.",
        "Usa modelos de varios fabricantes: un selector de modelos, en Auto por defecto, ofrece modelos GPT, Claude y Grok, según la configuración del inquilino. Los inquilinos dentro del EU Data Boundary solo tienen modelos GPT.",
        "Skills y plugins: puedes añadir hasta 50 skills personalizadas como archivos `SKILL.md` en OneDrive. Los plugins por rol y sector incluyen Accounting, Finance y Capital Markets for Cowork; otros plugins y conectores cubren Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk y apps MCP.",
        "Repite trabajo: hasta 25 prompts programados por usuario, escritos en lenguaje natural, además de tareas activadas por eventos que se ejecutan cuando llega un correo que coincide o se publica un mensaje en Teams.",
        "Hace el seguimiento de las tareas: una vista Tasks filtra por In progress, Needs input, Done y Failed, una página Automations enumera las tareas programadas y las activadas por eventos, y Projects (octubre de 2026) reúne tareas, instrucciones y archivos relacionados.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork: precio, créditos y licencias",
      text: [
        "De Microsoft Learn, Microsoft Support y la Copilot Credits Guide de Microsoft (noviembre de 2026), comprobado el 13 de noviembre de 2026, en dólares estadounidenses. Cowork se factura por uso en Copilot Credits, además de una licencia de Microsoft 365 Copilot. Una tarea no tiene un coste fijo en créditos: varía según el modelo, el tiempo de ejecución, el contexto y las herramientas que use.",
      ],
      headers: ["Concepto", "Coste o requisito"],
      rows: [
        ["Licencia de Microsoft 365 Copilot", "Obligatoria para cuentas profesionales o educativas y asignada al usuario; su precio no figura en la documentación de Cowork"],
        ["Copilot Credits, pago por uso", "$0.01 por Copilot Credit, facturado mensualmente a mes vencido"],
        ["Copilot Credit Pre-Purchase Plan (P3)", "Una bolsa para un año pagada por adelantado, con descuentos del 5% (300.000 créditos) al 20% (300.000.000 créditos); los créditos no usados caducan al final del plazo"],
        ["Configuración del administrador", "Cowork activado, facturación por uso activada y una directiva de gasto que seleccione Cowork; los administradores pueden fijar límites de créditos por usuario o por grupo"],
        ["Cuentas personales de Microsoft", "En vista previa; necesitan una suscripción de Microsoft 365 apta, precio no indicado"],
        ["Educación", "El profesorado y el personal pueden usarlo; los estudiantes no"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Copilot Cowork",
      steps: [
        {
          title: "Consigue la licencia",
          text: "En una cuenta profesional o educativa, necesitas tener asignada una licencia de Microsoft 365 Copilot. Las cuentas personales están en vista previa y necesitan una suscripción de Microsoft 365 apta.",
        },
        {
          title: "Pide a un administrador que lo active",
          text: "Un administrador activa Cowork, activa la facturación por uso y te da acceso mediante una directiva de gasto que seleccione Cowork. Para usar el navegador también hay que activar Cowork Browsing.",
        },
        {
          title: "Abre Cowork donde trabajas",
          text: "En la web (se recomienda Edge o Chrome), en la app de escritorio de Microsoft Copilot para Windows y macOS, en la app móvil para iOS y Android, o dentro de Outlook y Teams.",
        },
        {
          title: "Describe la tarea",
          text: "Por ejemplo, investigar un tema, redactar un documento y enviarlo por correo a quien lo necesite. Deja el modelo en Auto o elige uno; el esfuerzo de razonamiento es Medium por defecto.",
        },
        {
          title: "Añade skills y automatizaciones",
          text: "Guarda skills personalizadas en OneDrive como archivos `SKILL.md`, escribe prompts programados en lenguaje natural o configura una tarea para que se ejecute cuando llegue un correo o un mensaje de Teams que coincida.",
        },
      ],
      source: { label: "Fuente: Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene Copilot Cowork al mando",
      points: [
        "Antes de las acciones sensibles, como enviar un correo, publicar en Teams o programar reuniones, Cowork muestra un cuadro de aprobación con una vista previa. Las acciones de riesgo medio y alto muestran un nivel de riesgo.",
        "Puedes aprobar una vez, dejar de recibir confirmaciones para acciones similares durante el resto de la conversación (en correo y Teams, limitado a un destinatario, a un dominio o siempre) o cancelar.",
        "Las tareas activadas por eventos funcionan por defecto con borrador y aprobación, y puedes pausar, reanudar o cancelar cualquier tarea.",
        "No puede borrar archivos ni carpetas de OneDrive o SharePoint, y te devuelve el navegador para los CAPTCHA, las contraseñas, los códigos MFA y los cambios en la cuenta.",
        "Los administradores controlan el acceso mediante directivas de gasto, fijan límites de créditos por usuario o por grupo y pueden desactivar familias de modelos, incluidas las de Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code y Codex",
      text: [
        "Datos de la documentación y las páginas de precios de cada proveedor, comprobados el 13 de noviembre de 2026. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker); consulta también la [guía de Claude Cowork](/personal-agent/claude-cowork) y [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Cara a cara: [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). Guías: [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["Fabricante", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["Pensado para", "Tareas de varios pasos en Microsoft 365", "Trabajo del conocimiento que no es de programación", "Programación: lee tu código, edita archivos y ejecuta comandos", "Programación: inspecciona, edita y ejecuta código en un repositorio"],
        ["Dónde se ejecuta", "La nube de Microsoft, con OneDrive y SharePoint; sin archivos locales", "La nube de Anthropic; archivos locales a través de Claude Desktop", "Terminal, IDE y app de escritorio en tu máquina; sesiones en la nube en la web", "CLI, extensión de IDE y app de escritorio de ChatGPT; Codex Cloud"],
        ["Modelos", "Modelos GPT, Claude y Grok, según la configuración del inquilino", "Modelos de Claude", "Modelos de Claude", "Modelos de OpenAI"],
        ["Cómo se paga", "Licencia de Microsoft 365 Copilot más Copilot Credits", "Planes de pago de Claude, Pro desde $20/mes", "Planes de pago de Claude, Pro desde $20/mes; o créditos de API", "Planes de ChatGPT, como Plus a $20/mes; o una clave de API de OpenAI"],
        ["Trabajo recurrente", "Prompts programados; eventos de correo, Teams y conectores", "Tareas programadas, de cada hora a cada semana, en la nube", "Tareas programadas en la nube y de escritorio, `/loop`", "Tareas programadas; eventos de Gmail, Slack y GitHub"],
        ["Aprobaciones", "Cuadro de aprobación con vista previa antes de las acciones sensibles", "Modos Manual, Auto o Skip", "Modos de permisos de `default` a `bypassPermissions`", "Ask for approval, Approve for me o acceso completo"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Cowork para Microsoft 365. Crewmark para tu repositorio.",
      text: [
        "Copilot Cowork lleva tareas de principio a fin en Outlook, Teams, OneDrive y SharePoint. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido, para que el trabajo de ingeniería, SEO y marketing de un repositorio siga avanzando según un horario.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Copilot Cowork" },
  mid: {
    title: "¿Quieres un compañero de trabajo de IA para tu código?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Copilot Cowork",
    items: [
      {
        q: "¿Qué es Copilot Cowork?",
        a: "Un agente de Microsoft 365 Copilot que lleva a cabo tareas de varios pasos en Microsoft 365: envía correos, programa reuniones, crea y edita archivos de Word, Excel, PowerPoint y PDF, publica en Teams, gestiona archivos de OneDrive y SharePoint, busca en tu organización y hace investigaciones en profundidad. Pide aprobación antes de las acciones sensibles.",
      },
      {
        q: "¿Cuánto cuesta Copilot Cowork?",
        a: "El uso se factura en Copilot Credits, además de una licencia de Microsoft 365 Copilot. Con pago por uso cuesta $0.01 por crédito, facturado mensualmente a mes vencido; un Pre-Purchase Plan de un año da descuentos del 5% al 20%. Los créditos por tarea varían según el modelo, el tiempo de ejecución, el contexto y las herramientas que use.",
      },
      {
        q: "¿Qué licencias necesita Copilot Cowork?",
        a: "Para una cuenta profesional o educativa: una licencia de Microsoft 365 Copilot asignada a ti, Cowork activado y la facturación por uso activada por un administrador, con una directiva de gasto que seleccione Cowork. Las cuentas personales de Microsoft están en vista previa y necesitan una suscripción de Microsoft 365 apta. En educación, el profesorado y el personal pueden usarlo; los estudiantes no.",
      },
      {
        q: "¿Cómo inicio sesión en Copilot Cowork?",
        a: "Inicia sesión con la cuenta que tiene acceso: una cuenta profesional o educativa (disponible de forma general) o una cuenta personal de Microsoft (vista previa). Cowork está en la web, en la app de escritorio de Microsoft Copilot para Windows y macOS, en la app móvil para iOS y Android, y dentro de Outlook y Teams.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot: ¿en qué se diferencian?",
        a: "Copilot Cowork es un agente dentro de Microsoft 365 Copilot. Para usarlo necesitas una licencia de Microsoft 365 Copilot más la facturación por uso, porque el uso de Cowork se cobra en Copilot Credits además de la licencia.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork: ¿en qué se diferencian?",
        a: "Copilot Cowork trabaja en Microsoft 365, guarda los archivos en OneDrive y SharePoint, no puede llegar a archivos locales y se factura en Copilot Credits además de una licencia. Claude Cowork es el agente de Anthropic en las apps de Claude, viene con los planes de pago de Claude desde Pro a $20 al mes y llega a los archivos locales a través de Claude Desktop. El selector de modelos de Copilot Cowork también puede incluir modelos de Claude, según la configuración del inquilino.",
      },
    ],
  },
  cta: {
    title: "Pásale las tareas de Microsoft 365 a Cowork. Y dale también un trabajo a tus agentes de programación.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con la documentación de Copilot Cowork en Microsoft Learn, la Copilot Credits Guide de Microsoft y Microsoft Support el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Microsoft, Anthropic ni OpenAI y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
