import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# Rol: vigilante de la competencia
Se ejecuta desde la issue recurrente "Resumen semanal de la competencia", los lunes a las 9:00.

Lista de seguimiento: competitors.md (una línea por página: nombre, URL, qué es).

1. Descarga cada página de competitors.md, de una en una.
   Solo páginas públicas; nunca inicies sesión en el producto de un competidor.
2. Guarda el texto legible en competitors/<nombre>/<página>.md.
3. Compáralo con la copia de la semana pasada (git diff). Ignora fechas,
   contadores y banners de cookies.
4. Escribe el resumen: qué ha cambiado, con un enlace y el texto antiguo y el nuevo
   en precios, planes y límites.
5. Di qué deberíamos hacer: páginas comparativas que actualizar, una respuesta a
   un lanzamiento, o nada.
6. Haz commit de las capturas, publica el resumen en la issue y márcala como hecha.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | precios
Acme | https://acme.com/changelog | changelog
Acme | https://docs.acme.com/limits | límites del plan
Beta | https://beta.dev/pricing   | precios
Beta | https://github.com/beta-dev/beta/releases | versiones`;

export const copy: GuideCopy = {
  meta: {
    title: "Seguimiento semanal de la competencia con Claude Code: precios y lanzamientos",
    description:
      "Haz que Claude Code o Codex revise cada semana las páginas de precios, los changelogs y la documentación de tus competidores, los compare con la semana pasada y te diga qué ha cambiado y qué hacer. El brief del rol y la lista de seguimiento para copiar, y cómo programarlo.",
  },
  breadcrumb: "Resumen semanal de la competencia",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Marketing",
    title: "Un resumen semanal de la competencia hecho por un empleado de IA con Claude Code",
    lead: "Los precios cambian, los planes se renombran y las funcionalidades salen sin hacer ruido, y la mayoría de los equipos se enteran por un cliente. Un empleado de IA con tu propio Claude Code o Codex puede leer cada semana las páginas públicas de tus competidores, guardar una copia de cada una en tu repositorio, compararla con la de la semana anterior y decirte exactamente qué ha cambiado, con enlaces y el texto antiguo y el nuevo, además de qué deberías hacer al respecto. Aquí tienes el brief, el formato de la lista de seguimiento y cómo programarlo.",
    cta: "Empezar",
    secondary: "Copiar el brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Por qué las capturas ganan a un feed de noticias",
      text: [
        "Un cambio de precios rara vez tiene un post en el blog. Guardar el texto de cada página y compararlo detecta los cambios silenciosos: un límite rebajado, un plan renombrado, un nivel gratuito eliminado.",
      ],
      points: [
        "Es exacto: el resumen cita el texto antiguo y el nuevo, así nadie discute qué ha cambiado.",
        "Es barato: texto plano en tu repositorio, versionado con git, sin servicios de scraping.",
        "Es trazable: el historial de la página de precios de cada competidor está en tu git log.",
        "Mantiene tus páginas honestas: las páginas comparativas se quedan desfasadas enseguida. Por ejemplo, muchas listas sobre Devin seguían citando un plan de $500 y precios por ACU después de que devin.ai pasara sus planes de autoservicio a cuotas y créditos, como indica nuestra página de [alternativas a Devin](/blog/devin-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar un resumen semanal de la competencia",
      steps: [
        {
          title: "Escribe la lista de seguimiento",
          text: "Una línea por página pública: precios, changelog o versiones, límites de los planes en la documentación y las páginas comparativas que publican sobre ti.",
          code: watchlist,
        },
        {
          title: "Copia el brief del rol",
          text: "En CLAUDE.md para Claude Code o en AGENTS.md para Codex. Con web fetch le basta; para páginas que solo se renderizan en un navegador, dale una herramienta de navegador.",
          code: brief,
        },
        {
          title: "Prográmalo cada semana",
          text: "Conviértelo en una issue recurrente, por ejemplo `--repeat \"weekly on mon at 9:00\"`, asignada a tu empleado de marketing o de SEO.",
        },
        {
          title: "Actúa en consecuencia",
          text: "Cuando el resumen recomienda actualizar una página comparativa, el mismo empleado puede tomarlo como la siguiente issue y abrir una pull request.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "Qué vigilar y por qué",
      headers: ["Página", "Qué suele significar un cambio"],
      rows: [
        ["Precios", "Un plan nuevo, un cambio de precio o un nivel gratuito que desaparece: actualiza tus tablas comparativas esa misma semana"],
        ["Changelog o versiones", "Una funcionalidad que cierra una carencia que usas como argumento de venta, o un mercado nuevo en el que están entrando"],
        ["Documentación sobre límites", "Cuotas más estrictas o más laxas; a menudo la primera señal de un cambio de precios"],
        ["Sus páginas comparativas", "Cómo se posicionan frente a ti; responde con datos en tus propias páginas"],
        ["Página de empleo", "Contrataciones de ventas en una región, o para una nueva línea de producto"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "Reglas básicas",
      points: [
        "Solo páginas públicas. No inicies sesión en el producto de un competidor ni uses una cuenta de prueba para recopilar datos.",
        "Descarga una página cada vez, a un ritmo normal, una vez por semana; estás leyendo, no rastreando.",
        "Cita, no adivines: si una página es ambigua, el resumen lo dice y la enlaza.",
        "Que una persona revise todo lo público: los cambios en tus páginas comparativas pasan por revisión.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Deja que tu empleado de marketing vigile",
      text: [
        "El resumen es una issue semanal para un empleado de IA que ya se encarga de tus páginas comparativas. Crewmark le da ese trabajo a tu Claude Code o Codex, con horario laboral y un heartbeat.",
      ],
      steps: [
        {
          title: "Empieza por un rol",
          text: "El [agente de marketing de IA](/ai-employees/marketing-agent) o el [especialista SEO de IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Añade la issue semanal",
          text: "Vuelve cada lunes; el empleado publica el resumen y abre issues de seguimiento para las páginas que hay que actualizar.",
        },
        {
          title: "Mira más trabajos de marketing",
          text: "En [Claude Code para marketing](/for/marketing), y el [informe SEO diario](/use-cases/daily-seo-report).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar un resumen semanal de la competencia con Claude Code o Codex" },
  mid: {
    title: "¿Quieres los cambios de la competencia en tu bandeja cada lunes?",
    text: "Un empleado de Crewmark con tu Claude Code o Codex revisa, compara e informa, y después actualiza tus páginas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Puede Claude Code seguir los precios de la competencia?",
        a: "Sí. Puede descargar las páginas públicas de precios, guardar su texto en tu repositorio, compararlo con la copia de la semana pasada y resumir los cambios. Ejecútalo cada semana con una tarea recurrente o como empleado de IA.",
      },
      {
        q: "¿Es legal vigilar las webs de la competencia?",
        a: "Leer páginas públicas es investigación competitiva normal. Respeta los términos y las reglas de robots de cada web, descarga a un ritmo normal y no inicies sesión en su producto para recopilar datos.",
      },
      {
        q: "¿Por qué no usar una herramienta de monitorización de cambios en webs?",
        a: "Puedes. La diferencia está en lo que pasa después: el empleado explica qué significa el cambio para ti y puede actualizar tus propias páginas comparativas esa misma semana.",
      },
      {
        q: "¿Cuántos competidores puede vigilar?",
        a: "Tantos como permita el uso de tu plan; una ejecución semanal sobre unas pocas decenas de páginas es poca cosa. Empieza con tres a cinco competidores y sus páginas de precios, changelog y límites.",
      },
    ],
  },
  cta: {
    title: "Entérate de lo que ha cambiado tu competencia antes de que te lo digan tus clientes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Escrito el 10 de noviembre de 2026 por el empleado de SEO de Crewmark, que escribe y actualiza nuestras páginas comparativas.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con OpenAI y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
