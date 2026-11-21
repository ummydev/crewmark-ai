import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Casos de uso de empleados de IA con Claude Code y Codex",
    description:
      "Trabajos que puedes delegar en un empleado de IA con Claude Code o Codex, por equipo, cada uno con un brief del rol para copiar y el horario en que se ejecuta: informes SEO diarios, resúmenes semanales de la competencia y más.",
  },
  breadcrumb: "Casos de uso",
  hero: {
    kicker: "Casos de uso",
    title: "Casos de uso de empleados de IA: trabajos para delegar en Claude Code y Codex",
    lead: "Cada caso de uso es un trabajo que un empleado de IA hace según un horario: qué hace, el brief del rol que copias en CLAUDE.md o AGENTS.md, los accesos que necesita y cómo ejecutarlo. Están agrupados por el equipo que suele encargarse de ese trabajo. Todos funcionan también como un prompt puntual en Claude Code o Codex.",
    cta: "Empezar",
    secondary: "Ver los casos de uso",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "Por equipo",
      headers: ["Equipo", "Qué delega"],
      rows: [
        ["[Marketing](/for/marketing)", "Páginas e informes SEO, seguimiento de la competencia, borradores para redes sociales, revisiones del embudo"],
        ["[Ingeniería](/for/engineering)", "Triaje de errores, revisión de pull requests, de issues a pull requests, notas de versión"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso",
      headers: ["Caso de uso", "Equipo", "Frecuencia"],
      rows: [
        ["[Informe SEO diario](/use-cases/daily-seo-report)", "Marketing", "Diaria"],
        ["[Resumen semanal de la competencia](/use-cases/weekly-competitor-digest)", "Marketing", "Semanal"],
        ["[Triaje de errores de Sentry](/use-cases/sentry-error-triage)", "Ingeniería", "Dos veces al día"],
        ["[Revisión de código con IA en cada PR](/use-cases/pr-review)", "Ingeniería", "En cada PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "Qué hace bueno a un primer trabajo",
      points: [
        "Se repite: el trabajo diario o semanal amortiza antes la configuración.",
        "Tiene un final claro: un informe publicado, una página en producción, un resumen enviado.",
        "Se puede comprobar: en un minuto ves si se hizo bien.",
        "La última palabra es tuya: publicar, gastar dinero y cualquier cosa pública pasa por una persona.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Ejecuta cualquiera de ellos como un empleado de IA",
      text: [
        "Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat. Los trabajos recurrentes se convierten en issues recurrentes en su tablero.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "De los [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Añade los trabajos como issues",
          text: "Los trabajos diarios y semanales se repiten solos; el empleado toma cada uno cuando toca.",
        },
        {
          title: "Responde cuando pregunte",
          text: "Cuando necesita una decisión, marca la issue como Requiere acción y te pregunta; todo lo demás está en el tablero.",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres estos trabajos hechos según un horario?",
    text: "Los empleados de Crewmark funcionan con tu Claude Code o Codex y toman el siguiente trabajo de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué puede hacer un empleado de IA?",
        a: "Trabajo recurrente que pueda hacer a través de archivos, la web y tus herramientas: informes a partir de la analítica, páginas para tu web, seguimiento de la competencia, borradores para revisar, triaje. Trabaja hacia un objetivo e informa según un horario.",
      },
      {
        q: "¿Qué casos de uso buenos tiene Claude Code fuera de la programación?",
        a: "Marketing es lo más fácil para empezar: páginas e informes SEO, resúmenes de la competencia y borradores de contenido. Consulta [Claude Code para marketing](/for/marketing); para trabajos de ingeniería más allá de escribir código, consulta [Claude Code para ingeniería](/for/engineering).",
      },
      {
        q: "¿Funcionan con Codex?",
        a: "Sí. Cada brief del rol funciona en AGENTS.md para Codex igual que en CLAUDE.md para Claude Code.",
      },
    ],
  },
  cta: {
    title: "Elige un trabajo. Delégalo en un empleado de IA.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Actualizado el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con OpenAI y sin su respaldo. Claude, Claude Code y Codex son marcas de sus titulares.",
};
