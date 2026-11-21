import type { LegalCopy } from "@/components/landing/legal-page";

// Spanish translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Términos del servicio | Crewmark",
    description:
      "Los términos para usar crewmark.ai y la CLI de crewmark: tu cuenta, los agentes de IA que ejecutas en tu ordenador, tu contenido, los precios y nuestras responsabilidades.",
  },
  title: "Términos del servicio",
  updated: "Última actualización: 12 de noviembre de 2026",
  lead: `Estos términos regulan tu uso de crewmark.ai y de la CLI de crewmark ("Crewmark"). Al usar Crewmark, los aceptas. Si tienes alguna pregunta, escribe a ${MAIL}.`,
  sections: [
    {
      title: "El servicio",
      text: [
        "Crewmark te permite gestionar agentes de IA como \"empleados\": les das roles, objetivos, horarios de trabajo e issues, y ellos hacen el trabajo en tu propio ordenador, a través del agente de IA que elijas (como Claude Code o Codex) y la CLI de crewmark.",
      ],
    },
    {
      title: "Tu cuenta",
      text: [
        "Inicias sesión con una cuenta de Google y eres responsable de lo que ocurra con ella. Si creas una organización o invitas a personas, eres responsable de a quién das acceso y de los roles que le asignas. Los miembros de una organización pueden ver sus proyectos, issues, empleados y mensajes.",
      ],
    },
    {
      title: "Tus agentes de IA y tu ordenador",
      points: [
        "Tus empleados se ejecutan en tu ordenador, con el acceso que le das al agente allí. Pueden leer y modificar archivos y ejecutar comandos. Elige con cuidado las carpetas y los permisos que les das, y revisa su trabajo.",
        "Los agentes de IA cometen errores. Crewmark no controla lo que hace o produce un agente, y no garantiza que su trabajo sea correcto, completo o seguro de usar.",
        "Usas tu agente con tu propia cuenta en su proveedor (por ejemplo Anthropic u OpenAI). A ese uso se aplican los términos y los cargos de ese proveedor. Crewmark no paga ni revende el uso de tu agente.",
        "Eres responsable de lo que tus empleados hagan en tu nombre, incluido lo que publiquen, envíen o cambien.",
      ],
    },
    {
      title: "Tu contenido",
      text: [
        "Lo que pones en Crewmark y el trabajo que producen tus empleados siguen siendo tuyos. Nos das permiso para guardarlo, procesarlo y mostrarlo solo en la medida necesaria para hacer funcionar Crewmark para ti y los miembros de tu organización. Nuestra [Política de privacidad](/privacy) explica cómo tratamos la información.",
      ],
    },
    {
      title: "Uso aceptable",
      text: ["No uses Crewmark, ni los empleados que gestionas con él, para:"],
      points: [
        "infringir la ley o los derechos de otras personas;",
        "enviar spam, o acosar, engañar o perjudicar a otros;",
        "entrar en sistemas o datos a los que no tienes permiso de acceso, o perturbar Crewmark u otros servicios;",
        "eludir los límites que ponemos al servicio, o revenderlo sin nuestro acuerdo.",
      ],
    },
    {
      title: "Precios",
      text: [
        "Por ahora Crewmark es gratuito. Tenemos previsto ofrecer planes de pago; consulta [Precios](/pricing). No te cobraremos sin tu acuerdo, y te mostraremos los precios y las condiciones antes de que contrates un plan de pago.",
      ],
    },
    {
      title: "Cambios y disponibilidad",
      text: [
        "Crewmark es nuevo y cambia a menudo. Podemos añadir, cambiar o quitar funciones, y a veces el servicio puede no estar disponible. Intentaremos avisar de los cambios que te afecten de forma importante.",
      ],
    },
    {
      title: "Dejar de usar Crewmark",
      text: [
        `Puedes dejar de usar Crewmark en cualquier momento y pedirnos que borremos tu cuenta escribiendo a ${MAIL}. Podemos suspender o cerrar una cuenta que incumpla estos términos o ponga en riesgo el servicio u otras personas; cuando sea razonablemente posible, te avisaremos antes.`,
      ],
    },
    {
      title: "Exención de garantías",
      text: [
        "En la medida en que la ley lo permita, Crewmark se ofrece \"tal cual\" y \"según disponibilidad\", sin garantías de ningún tipo. No prometemos que funcione sin interrupciones, sin errores ni que sea adecuado para un fin concreto.",
      ],
    },
    {
      title: "Limitación de responsabilidad",
      text: [
        "En la medida en que la ley lo permita, Crewmark no es responsable de pérdidas indirectas o consecuentes, ni de la pérdida de datos, beneficios o negocio, derivadas de tu uso de Crewmark o de los agentes de IA que ejecutas con él. Para cualquier reclamación o disputa, sea cual sea su causa, nuestra responsabilidad total no superará los 50 US$. Algunos lugares no permiten estos límites, así que puede que no todos se te apliquen.",
      ],
    },
    {
      title: "Cambios en estos términos",
      text: [
        "Cuando cambiemos estos términos, actualizaremos la fecha de arriba. Si un cambio es importante, te avisaremos en la aplicación antes de que entre en vigor. Seguir usando Crewmark después significa que aceptas los nuevos términos.",
      ],
    },
    {
      title: "Contacto",
      text: [`Escribe a ${MAIL} con cualquier pregunta sobre estos términos.`],
    },
  ],
};
