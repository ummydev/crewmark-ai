import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// es translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "Una app de chat constructivista que cambia de forma",
    text: "La interfaz de una app de chat de compañía rediseñada en estilo constructivista: golondrinas, fases lunares, un ojo no humano y una escalera de caracol, con chats dibujados como mapas y cartas.",
  },
  "art-history-cat": {
    title: "40.000 años de historia del arte en un prompt",
    text: "La misma persona y el mismo gato redibujados en cada época, de una pintura mural egipcia a Van Gogh, Mondrian, el pixel art y 2026. Unas 4.900 líneas de código, sin modelo de imagen.",
  },
  "crystal-bud-flight": {
    title: "Un capullo de cristal y un vuelo sobre campos morados",
    text: "Un capullo escarchado y luego un vuelo rasante sobre prados, picos nevados y campos de flores moradas. El autor dice que tardó media hora.",
  },
  "blender-island-rebuild": {
    title: "Una isla reconstruida en Blender a partir de una referencia",
    text: "Hecha en Blender solo con código: 130 objetos, 1,14 millones de caras, sin texturas, una noria que gira y peces que nadan. Fable completó lo que la referencia no mostraba.",
  },
  "locomotive-robot-anime": {
    title: "Un corto de anime de 90 segundos: una locomotora de vapor se convierte en robot",
    text: "Anime 2D con aspecto dibujado a mano a partir de un prompt: Fable montó cada plano en Blender desde Python, lo renderizó y entintó cada fotograma en una segunda pasada, y escribió la música nota a nota con numpy.",
  },
  "geonosis-battle-blender": {
    title: "Una batalla de Star Wars construida en Blender",
    text: "La prueba de Blender que el autor pasa a cada modelo nuevo: más de mil droides, cañoneras y disparos láser en la arena. Un prompt, 1,5 horas con 20 minutos de render.",
  },
  "laundry-in-the-sun": {
    title: "Ropa tendida a la luz de la tarde",
    text: "Dos personas miran camisas ondeando en un tendedero en un prado soleado. Los pliegues, la luz que atraviesa la tela, la cámara y el sonido son código.",
  },
  "fushimi-inari-travel-ad": {
    title: "Un anuncio de viajes de Fushimi Inari en otoño",
    text: "Veinte segundos del santuario de Kioto, un recorrido por el túnel de toriis rojos y un rótulo al atardecer, todo en código, música incluida.",
  },
  "rainy-tokyo-alley": {
    title: "Un callejón de Tokio bajo la lluvia, sin modelo de vídeo",
    text: "Lluvia, charcos y reflejos de neón, un espejo de esquina que refleja de verdad y carteles japoneses que se pueden leer. Publicado por Higgsfield.",
  },
  "pet-robot": {
    title: "Un robot mascota que podrías construir en casa",
    text: "Matt Shumer pidió un robot que pudiera construir en su piso y recibió un pequeño robot mascota redondo que despierta, mueve el brazo y juega con una pelota.",
  },
  "lighthouse-in-a-storm": {
    title: "Un faro en la tormenta",
    text: "Un haz de luz barre un mar nocturno agitado hasta que las nubes se abren alrededor de la luna. Con effort alto y sonido.",
  },
  "piano-boy-short": {
    title: "Un corto de 46 segundos sin una sola imagen generada",
    text: "Un niño al piano: cada fotograma dibujado y cada nota tocada por código que escribió Fable, sin modelos de imagen ni de vídeo.",
  },
  "ufo-area-51": {
    title: "Un ovni aterriza en el Área 51",
    text: "Una película de cinco planos y 30 segundos en three.js y Remotion a partir de una frase: sin modelos importados, texturas ni audio de archivo, en 4K.",
  },
  "spider-web-logo": {
    title: "Una araña teje el logo de Claude en su red",
    text: "Una araña a la luz de la luna teje su red paso a paso y, al amanecer, borda el logo de Claude en el centro.",
  },
  istanbul: {
    title: "Estambul, construida a partir de un prompt",
    text: "La ciudad desde el aire: Santa Sofía y el Cuerno de Oro, ferris cruzando el Bósforo y el horizonte al atardecer. Fable 5.2 Max, unos 46 $.",
  },
  "auric-voyage": {
    title: "Auric Voyage: un barco dorado sobre las nubes",
    text: "Un velero dorado sobre nubes volumétricas, con ciclo de día y noche y una cubierta a la que puedes subir. Solo Three.js, unos 38 minutos y 17 $.",
  },
  "pirate-ship": {
    title: "Un barco pirata navegando al atardecer",
    text: "Un tres palos con estela, ventanas de camarote iluminadas y velas desplegadas. A la primera, unas 1,5 horas y 35 millones de tokens.",
  },
  "voxel-pagoda": {
    title: "Una pagoda de vóxeles llena de detalles",
    text: "Una isla flotante con una pagoda de cinco pisos, cerezos en flor, estanques y farolillos que se encienden de noche.",
  },
  "voxel-paris-1888": {
    title: "París en 1888, con la Torre Eiffel en obras",
    text: "Grúas que levantan vigas, remachadores entre chispas y un barco de vapor por el Sena, en una isla de vóxeles flotante. A la primera, con un prompt largo y preciso.",
  },
  "night-tokyo-ramen-stall": {
    title: "Un puesto de ramen en una noche lluviosa de Tokio",
    text: "Un PROMPT.md, una carpeta vacía y ninguna edición manual, en 20 minutos y por 7 $. Pulsa T y la lluvia se convierte poco a poco en nieve.",
  },
  "floating-pixel-island": {
    title: "Una isla de píxeles flotante",
    text: "Una isla en pixel art que se repite en bucle, con torre de mago, cerezos, arcoíris y dirigibles. Un prompt con effort extra alto.",
  },
  "talking-village": {
    title: "Un pueblo europeo donde cada personaje piensa",
    text: "Un pueblo 3D cuyos habitantes piensan y hablan entre sí con IA, de la prueba de Fable 5.2 de Matthew Berman.",
  },
  "lighthouse-at-sunset": {
    title: "Un faro fotorrealista al atardecer",
    text: "El prompt de faro de siempre del autor, en Fable 5.2: un faro a rayas, un haz que barre y un mar en calma.",
  },
  "abyssal-landing-page": {
    title: "Abyssal: una landing page que baja hasta el fondo del mar",
    text: "Desplázate desde una superficie iluminada por la luna, entre medusas brillantes, hasta una ciudad de farolillos y un ojo gigante en la oscuridad. Con effort bajo.",
  },
  "liquid-glass-type": {
    title: "Tipografía de vidrio, ámbar y metal líquido",
    text: "Gotas de vidrio, ámbar y metal líquido atraviesan titulares gigantes, cada material con su propia paleta.",
  },
  "car-configurator": {
    title: "Un configurador de coches hecho con effort medio",
    text: "Gira alrededor de una berlina roja, cambia pintura y llantas, y pasa a una vista de salida con estelas de luz. Doce minutos.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth: ocho maneras de destruir el planeta",
    text: "La Tierra con mapas reales de la NASA y luces de ciudades, y ocho formas de acabar con ella, de un asteroide a un dios que se la come como una manzana. A la primera.",
  },
  "virus-capsid": {
    title: "La cápside de un virus que se ensambla sola",
    text: "Un archivo HTML: 420 subunidades de proteína forman una cápside T=7, primero 12 pentámeros y luego 60 hexámeros, la geometría que usan los virus reales.",
  },
  "drained-ocean": {
    title: "Cómo se ve el Atlántico sin agua",
    text: "Datos reales del fondo marino de la NOAA en un sobrevuelo 3D mientras se vacía el océano: Gran Bretaña se une a Europa en segundos y aparece la dorsal mesoatlántica.",
  },
  "deep-sea-dive": {
    title: "Una inmersión de la superficie a 40 metros",
    text: "La luz, los bancos de peces y el haz de la linterna cambian con la profundidad, con un profundímetro al lado. Todo código.",
  },
  "pocket-black-hole": {
    title: "Un agujero negro de bolsillo",
    text: "Cuando le pidieron algo que se hiciera viral, Fable creó un agujero negro interactivo con un disco brillante curvado por la lente gravitatoria.",
  },
  "galaxy-dive": {
    title: "Vuela hacia una galaxia espiral",
    text: "Empieza fuera de una galaxia espiral y entra volando, con un contador de años luz que baja. Unos 20 minutos de trabajo.",
  },
};

const labels: VideoLabels = {
  likes: "me gusta",
  views: "visualizaciones",
  prompt: "Ver el prompt (tal como lo compartió el autor)",
  open: "Abrirlo en vivo",
  alt: (title) => `Fotograma del vídeo: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Vídeos con Claude Fable 5.2: 32 cortos y escenas 3D hechos con código",
    description:
      "Vídeos creados con Claude Fable 5.2: un corto de anime renderizado en Blender, Estambul desde el aire, un barco dorado sobre las nubes, landing pages y visualizaciones científicas. Sin modelo de vídeo: Fable escribe el código. Con autor, me gusta y prompt.",
  },
  breadcrumb: "Vídeos con Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Vídeos con Claude Fable 5.2: 32 cortos y escenas 3D, todo hecho con código",
    lead: "Claude Fable 5.2 no genera vídeo como un modelo de vídeo. Escribe código en Three.js, WebGL, Remotion o el Python de Blender, y renderiza lo que ese código dibuja. Aquí están los 32 mejores resultados que la gente publicó en sus primeros días, cada uno con su autor, las cifras y, si lo compartió, el prompt.",
    cta: "Empezar",
    secondary: "Verlos",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Cómo hace vídeo Fable 5.2",
      text: [
        "Generar vídeo con Fable 5.2 significa pedirle una escena o un corto y dejar que lo construya entero como un programa: los modelos, la cámara, la iluminación y a menudo la música. Algunos autores lo renderizan a MP4; otros comparten la escena como una página que puedes abrir y recorrer.",
      ],
      points: [
        "El anime de 90 segundos de 0kncn se montó plano a plano en Blender desde Python, con banda sonora escrita en numpy.",
        "El barco dorado de Marcel es Three.js puro, sin Blender ni modelos externos: unos 38 minutos y 17 $ con effort medio.",
        "La Estambul de Peter Gostev, la más popular de todas, se hizo con Fable 5.2 Max por unos 46 $.",
        "El corto del ovni de Dante salió de una sola frase, con three.js y Remotion, sin texturas ni audio de archivo.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Cómo hacer uno en Claude Code",
      steps: [
        {
          title: "Abre Claude Code con Fable 5.2",
          text: "Fable 5.2 requiere un plan Pro o superior, o acceso por API. Para una escena que compartir como página basta una carpeta vacía; para Blender, instálalo para que Fable lo maneje desde Python.",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "Describe la escena, o el corto plano a plano",
          text: "Una frase vale (\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"); los prompts largos y precisos, como el de París 1888 más abajo, te dan más control.",
        },
        {
          title: "Pídele que lo renderice, o que lo deje en vivo",
          text: "Pide un MP4 con una resolución y fotogramas por segundo concretos, o una sola página HTML que se abra en el navegador y se pueda compartir.",
        },
      ],
    },
    ...videoSections(
      "es",
      text,
      labels,
      {
        film: { title: "Cortos y animación", text: "Películas cortas con cámara, historia o banda sonora." },
        world: { title: "Mundos 3D y dioramas", text: "Ciudades, barcos e islas; varias son páginas en vivo que puedes recorrer." },
        web: { title: "Webs y páginas interactivas", text: "Landing pages y páginas de producto que se animan al desplazarte o hacer clic." },
        science: { title: "Ciencia, espacio y datos", text: "Galaxias, agujeros negros, virus y el fondo del mar, a menudo con datos reales." },
      },
      "Ver la publicación original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Más de Claude",
      text: [
        "La lista completa, con tres fotogramas por vídeo, está en GitHub: [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). Para juegos hechos con Fable 5.2, mira [juegos con Claude Fable 5.2](/blog/claude-fable-5-2-games); para vídeos de lanzamiento y motion graphics con Opus 5.5, [motion graphics con Opus 5.5](/blog/opus-5-5-motion-graphics). Lo que cambió en el modelo está en nuestra [guía de Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Hacer un vídeo con Claude Fable 5.2 en Claude Code" },
  mid: {
    title: "¿Quieres a Fable 5.2 en un trabajo fijo?",
    text: "Los empleados de Crewmark trabajan en tu propio Claude Code, se despiertan con un heartbeat y toman la siguiente tarea del tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Claude Fable 5.2 puede generar vídeo?",
        a: "No como lo hace un modelo de vídeo. Escribe código que dibuja cada fotograma, en Three.js, WebGL, Remotion o Blender, y lo renderiza a MP4 o lo ejecuta en vivo en el navegador. Por eso el texto, los logos y los detalles salen nítidos.",
      },
      {
        q: "¿Qué herramientas usa?",
        a: "Lo más habitual es Three.js o WebGL en un solo archivo HTML. Otros usaron Remotion para montajes de estilo cine, Blender manejado desde Python, y Python o numpy para la música.",
      },
      {
        q: "¿Cuánto tarda y cuánto cuesta?",
        a: "Desde unos 20 minutos y 7 $ (el puesto de ramen de Tokio) hasta 1,5 horas y 35 millones de tokens (el barco pirata) o unos 46 $ con Fable 5.2 Max (Estambul).",
      },
      {
        q: "¿Puedo abrir estas escenas yo mismo?",
        a: "Cuatro tienen una página en vivo enlazada en su tarjeta: el barco dorado, el barco pirata, el agujero negro y la galaxia. El resto se compartió en vídeo.",
      },
      {
        q: "¿Fable 5.2 u Opus 5.5 para vídeo?",
        a: "Se usan los dos. En lo que la gente publicó, Fable 5.2 se usó sobre todo para mundos 3D y cortos, y Opus 5.5 para vídeos de lanzamiento y motion graphics, que reunimos en [motion graphics con Opus 5.5](/blog/opus-5-5-motion-graphics).",
      },
    ],
  },
  cta: {
    title: "Pon al modelo más nuevo en un trabajo fijo.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con puesto, objetivos, horario y heartbeat.",
    button: "Empezar",
  },
  checked: "Cada publicación y prompt comprobado en X y Xiaohongshu el 11 y el 12 de noviembre de 2026; los me gusta y visualizaciones son los de esos días.",
  disclaimer:
    "Los vídeos y prompts pertenecen a sus autores; cada tarjeta enlaza a la publicación original. Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic. Claude, Claude Fable, Claude Opus y Claude Code son marcas de Anthropic.",
};
