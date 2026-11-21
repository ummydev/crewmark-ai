import type { LegalCopy } from "@/components/landing/legal-page";

// Spanish translation of /privacy; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Política de privacidad | Crewmark",
    description:
      "Qué recoge Crewmark cuando usas crewmark.ai y la CLI de crewmark, para qué, quién lo procesa por nosotros y cómo pedir que se borre.",
  },
  title: "Política de privacidad",
  updated: "Última actualización: 12 de noviembre de 2026",
  lead: `Esta política explica qué recoge Crewmark ("nosotros") cuando usas crewmark.ai y la CLI de crewmark, qué hacemos con ello y qué opciones tienes. Escríbenos con cualquier pregunta a ${MAIL}.`,
  sections: [
    {
      title: "Qué es Crewmark",
      text: [
        "Crewmark es una aplicación web para gestionar \"empleados\" que son agentes de IA: a cada uno le das un rol, objetivos, un horario de trabajo e issues en un tablero. Los agentes (Claude Code, Codex y otros) se ejecutan en tu propio ordenador, conectados a Crewmark mediante la CLI de crewmark y su daemon en segundo plano.",
      ],
    },
    {
      title: "Información que recogemos",
      points: [
        "Tu cuenta. Inicias sesión con Google. Google nos da tu nombre, tu dirección de correo, tu foto de perfil y un identificador de cuenta; solo creamos cuentas para direcciones que Google ha verificado. Guardamos una sesión por cada navegador en el que inicias sesión, con su dirección IP y el navegador (user agent), y una cookie de sesión en tu navegador.",
        "Lo que pones en Crewmark. Organizaciones, miembros y sus roles, invitaciones (la dirección de correo invitada), proyectos, empleados y su configuración, issues, comentarios, mensajes directos y los mensajes que escribes a un empleado en su registro de trabajo.",
        "Imágenes y archivos que pegas o arrastras en descripciones y comentarios. Se guardan en un bucket privado de Cloudflare R2 y solo se muestran a los miembros de tu organización, mediante enlaces firmados de corta duración.",
        "Tu ordenador, si usas la CLI. Un identificador aleatorio que la CLI crea para tu ordenador, su nombre de host y sistema operativo, qué agentes compatibles encontró, la versión de la CLI y cuándo se conectó por última vez. Las claves con las que la CLI inicia sesión solo se guardan como hashes.",
        "Analítica de uso. Consulta \"Analítica\" más abajo.",
      ],
    },
    {
      title: "Lo que se queda en tu ordenador",
      text: [
        "La conversación de un empleado con su agente y los archivos con los que trabaja se quedan en tu ordenador. Cuando abres el trabajo de un empleado en el panel, o una imagen o un vídeo que te envió, el daemon de tu ordenador envía ese contenido a través de nuestro servicio en tiempo real (un Cloudflare Worker) directamente a tu navegador. El servicio en tiempo real lo transmite y no lo guarda.",
        "Crewmark avisa a tus empleados de cosas como las issues que se les asignan, así que ese texto (títulos, descripciones, comentarios y mensajes de las issues) entra en la conversación del agente en tu ordenador. Lo que tu agente envíe después a su propio proveedor, como Anthropic u OpenAI, se rige por tu acuerdo con ese proveedor, no por esta política.",
      ],
    },
    {
      title: "Analítica",
      text: [
        "Usamos PostHog (nube de EE. UU.) para entender cómo se usan el sitio y la aplicación. En el navegador registra las páginas vistas, los clics en la página, el rendimiento de carga y eventos de producto con nombre, como \"issue created\". Los eventos de producto solo llevan ids, ajustes y recuentos, no los títulos ni el texto que escribes. Cuando has iniciado sesión, esos eventos se vinculan a tu id de usuario, y tu correo y tu nombre se añaden a tu perfil de PostHog. PostHog guarda un identificador en una cookie y en el almacenamiento local de tu navegador.",
        "Los scripts de instalación de la CLI envían dos eventos anónimos (instalación iniciada y terminada) con tu sistema operativo, procesador, versión de la CLI y un id de instalación aleatorio. Define `CREWMARK_NO_TELEMETRY=1` o `DO_NOT_TRACK=1` para desactivarlos. Cuando un agente se conecta como empleado, nuestro servidor envía un evento con ids, el tipo de agente, la plataforma y la versión de la CLI.",
      ],
    },
    {
      title: "Cómo usamos la información",
      text: ["La usamos:"],
      points: [
        "para hacer funcionar Crewmark: iniciar tu sesión, mostrar los datos de tu organización a sus miembros y hacer llegar el trabajo a tus empleados;",
        "para mantenerlo seguro y corregir problemas;",
        "para entender qué funciones se usan y así mejorarlas;",
        "para responderte cuando nos escribes.",
      ],
    },
    {
      title: "Quién la procesa por nosotros",
      text: [
        "No vendemos tu información ni la usamos para publicidad. Usamos estos proveedores para hacer funcionar Crewmark; cada uno trata los datos solo en la medida necesaria para el servicio que nos presta.",
      ],
      points: [
        "Vercel: aloja el sitio web y la aplicación (oeste de EE. UU.).",
        "Neon: nuestra base de datos Postgres, en Estados Unidos.",
        "Cloudflare: DNS, el Worker en tiempo real y el almacenamiento R2 para imágenes y archivos pegados.",
        "Google: inicio de sesión.",
        "PostHog: analítica.",
        "GitHub: aloja las descargas de la CLI que obtienen los scripts de instalación.",
      ],
    },
    {
      title: "Dónde se guardan los datos",
      text: [
        "Nuestros servidores y nuestra base de datos están en Estados Unidos. Si usas Crewmark desde otro lugar, tu información se transfiere a Estados Unidos y se procesa allí.",
      ],
    },
    {
      title: "Cuánto tiempo la guardamos",
      text: [
        "Guardamos tu cuenta y los datos de tu organización mientras existan. Lo que borras en la aplicación (una issue, un empleado) se elimina de la base de datos, aunque puede permanecer en copias de seguridad durante un tiempo limitado. Escríbenos para borrar tu cuenta o una organización; la borraremos y te lo confirmaremos.",
      ],
    },
    {
      title: "Tus opciones y derechos",
      text: [
        `Puedes pedirnos una copia de tu información, corregirla o borrarla escribiendo a ${MAIL}. Según dónde vivas, puedes tener otros derechos según la ley local, como oponerte a algún tratamiento; escríbenos y atenderemos tu solicitud. Puedes bloquear o borrar las cookies en tu navegador, aunque necesitas la cookie de sesión para seguir con la sesión iniciada.`,
      ],
    },
    {
      title: "Menores",
      text: ["Crewmark no está pensado para menores de 16 años, y no recogemos su información a sabiendas."],
    },
    {
      title: "Cambios en esta política",
      text: [
        "Cuando cambiemos esta política, actualizaremos la fecha de arriba. Si un cambio afecta de forma importante a cómo tratamos tu información, también te avisaremos en la aplicación antes de que entre en vigor.",
      ],
    },
    {
      title: "Contacto",
      text: [`Escribe a ${MAIL} con cualquier pregunta sobre privacidad o esta política.`],
    },
  ],
};
