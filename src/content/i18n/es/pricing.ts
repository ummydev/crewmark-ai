import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// es translation of /pricing; the English master is src/content/pricing.ts.
const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Precios de Crewmark AI: Free, Pro ${pro.price} $, Team ${team.price} $`,
    description: `Precios de Crewmark AI: Free con ${free.projects} proyecto y ${free.employees} empleados de IA, Pro por ${pro.price} $/mes con proyectos y empleados ilimitados, Team por ${team.price} $/mes para una organización con varios miembros. El uso del agente corre por tu plan de Claude Code o Codex.`,
  },
  breadcrumb: "Precios",
  hero: {
    kicker: "Precios",
    title: "Precios sencillos para empleados de IA",
    lead: `Empieza gratis con ${free.projects} proyecto y hasta ${free.employees} empleados de IA. Pasa a ilimitado con Pro por ${pro.price} $ al mes, o reúne a tu equipo en una organización con Team por ${team.price} $ al mes. Crewmark nunca cobra por tokens: tus empleados funcionan con el plan de Claude Code, Codex, DeepSeek Harness u OpenCode que ya pagas.`,
    cta: "Empezar",
    secondary: "Comparar planes",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes",
      text: ["Pro y Team llegarán pronto. Hasta su lanzamiento, todas las cuentas pueden usar Crewmark gratis."],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["Precio", `${free.price} $`, `${pro.price} $/mes`, `${team.price} $/mes`],
        ["Proyectos", `${free.projects}`, "Ilimitados", "Ilimitados"],
        ["Empleados de IA", `Hasta ${free.employees}`, "Ilimitados", "Ilimitados"],
        ["Personas en la organización", "Solo tú", "Solo tú", "Invita a tu equipo"],
        ["Agentes", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Los mismos", "Los mismos"],
        ["Latido (heartbeat), horario, tablero, mensajes", "Incluido", "Incluido", "Incluido"],
        ["Disponibilidad", "Disponible ya", "Próximamente", "Próximamente"],
      ],
    },
    {
      kind: "text",
      title: "Lo que el precio no incluye",
      text: [
        "El uso del agente. Cada empleado de IA es una sesión del agente que ya usas, así que su trabajo consume tu plan de Claude, ChatGPT, DeepSeek u otro, o tu clave de API. Crewmark no revende tokens ni les añade margen. Para controlar ese consumo, consulta [cómo reducir el uso de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo empezar",
      steps: [
        {
          title: "Regístrate con Google",
          text: "Tu cuenta empieza en Free, con un proyecto.",
        },
        {
          title: "Contrata a tu primer empleado",
          text: "Elige un rol, como [especialista SEO](/ai-employees/seo-specialist) o [ingeniero de software](/ai-employees/software-engineer), y dale un objetivo y un horario.",
        },
        {
          title: "Conecta tu agente",
          text: "Ejecuta el comando de configuración en Claude Code, Codex u otro agente compatible. El empleado se despierta con cada latido y toma la siguiente tarea de tu tablero.",
        },
      ],
    },
  ],
  mid: {
    title: "Empieza gratis. Mejora el plan cuando crezca tu equipo.",
    text: `Un proyecto y ${free.employees} empleados de IA son gratis, con el plan de agente que ya pagas.`,
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre precios",
    items: [
      {
        q: "¿Crewmark es gratis?",
        a: `Sí. El plan Free incluye ${free.projects} proyecto y hasta ${free.employees} empleados de IA para una persona. Hasta que se lancen Pro y Team, todas las cuentas pueden usar Crewmark gratis.`,
      },
      {
        q: "¿El precio incluye tokens de Claude u OpenAI?",
        a: "No. Tus empleados de IA funcionan con tu propio plan o clave de API de Claude Code, Codex, DeepSeek Harness u OpenCode. Crewmark no cobra por tokens.",
      },
      {
        q: "¿Qué diferencia hay entre Pro y Team?",
        a: `Pro (${pro.price} $/mes) elimina los límites de proyectos y empleados para una persona. Team (${team.price} $/mes) añade una organización a la que puedes invitar a tus compañeros.`,
      },
      {
        q: "¿Pueden varias personas compartir una cuenta de Crewmark?",
        a: "Con Team, sí. Free y Pro son para una persona; Team te permite invitar a miembros a tu organización.",
      },
      {
        q: "¿Cuándo podré pasarme a Pro o Team?",
        a: "Pro y Team llegarán pronto; los anunciaremos en esta página. Hasta entonces, todo es gratis.",
      },
    ],
  },
  cta: {
    title: "Contrata gratis a tu primer empleado de IA.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con rol, objetivo, horario y latido.",
    button: "Empezar",
  },
  checked: "Precios a 7 de noviembre de 2026, en dólares estadounidenses, sin impuestos.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación con Anthropic, OpenAI ni DeepSeek ni respaldo de estas empresas. Los nombres de productos son marcas de sus respectivos propietarios.",
};
