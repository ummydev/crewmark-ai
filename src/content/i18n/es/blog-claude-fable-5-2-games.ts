import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// es translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "Un FPS en un puerto de contenedores bajo la lluvia, hecho en unas ocho horas sin ninguna indicación humana: cada modelo, textura y sonido creado desde cero, por unos 550 $ a precio de API. El prompt venía a ser «hazme también un FPS».",
  "what-the-water-keeps":
    "Un paseo lento en barca, a la luz de un farol, por ocho mundos de ensueño, de una ciudad sumergida a un bosque nevado, en Three.js. El autor usó Tripo 3D para los modelos y Suno para la música del juego; Fable compuso la del tráiler.",
  "oil-paint": "Pasea por un bosque otoñal que parece pintado a mano: unos 1,5 millones de pinceladas por fotograma a 200 fps en una pestaña del navegador, hecho en menos de una hora. El código es abierto.",
  "starry-night-rider": "Recorre en bici el pueblo de La noche estrellada de Van Gogh, con el cielo, las casas y los adoquines en pinceladas arremolinadas.",
  "mirror-earth": "El planeta entero en vóxeles: ve a donde quieras, rompe lo que quieras, con un tiempo que sigue al de la Tierra real en directo. Hecho en Spawn.",
  "i-would-have-gotten-away-with-it":
    "Un Scooby-Doo al revés de Ethan Mollick: eres el villano de la mansión encantada y tienes que asustar a los niños entrometidos. Fable hizo también el tráiler, la música y el sonido.",
  "gilt-and-gutter": "Un shooter 1 contra 1 con estilo en una sala recreativa dorada, donde los disparos de tu color cargan tu arma. Modelos de personajes de Tripo3D; rigging y animación de Fable.",
  tidewright: "Navega por un mar nocturno en plena tormenta y vuelve a encender los faros de las islas Thrumming.",
  "the-clockmakers-heart": "Despierta a un gigante de relojería dormido, un puzle de engranajes tras otro; un primer borrador de Fable 5.2.",
  "turbo-tails": "Un juego de karts en 3D con seis pilotos animales, derrapes, rampas y objetos, para jugar con amigos. Tres prompts en total; la música salió de Suno y Claude la integró.",
  rifts: "Un brawler de héroes 3 contra 3 al estilo Overwatch, con 12 héroes, grietas entre mundos y combates contra jefes, gratis en el navegador en Spawn.",
  "memory-of-teresa-the-storm-spire": "Un combate contra un jefe en salas de piedra a la luz de las velas y en la aguja de una catedral bajo la lluvia, hecho a la primera y gratis en Spawn.",
  "aidens-revenge": "Un beat 'em up de pixel art para 1 a 4 jugadores, ideado y dibujado por un niño llamado Aiden, y convertido en juego en una noche con Fable 5.2.",
  "hogwarts-royale": "Un battle royale de escuela de magia en escobas, con un patio de castillo y un bosque encantado, a partir de un prompt de una línea.",
  "party-royale": "Un juego de fiesta al estilo Fall Guys para 60 jugadores, con puertas falsas, plataformas giratorias y multijugador, hecho a la primera.",
  fablecraft: "Un sandbox de vóxeles infinito en un solo archivo HTML: pon y rompe bloques, con sombras en 4K, reflejos y 10 chunks de distancia de visión. Dos prompts con effort extra alto.",
  "street-brawler-ii": "Un juego de lucha arcade en pixel art con varios personajes, golpes especiales, combos y escenarios, generado a la primera en menos de 35 minutos.",
  "toy-room-adventure": "Encógete hasta el tamaño de un juguete y explora un dormitorio infantil lleno de sol. Fable se negó a copiar los personajes de la película y recreó solo el estilo: la luz, el polvo y cada detalle a escala de juguete.",
  "tokyo-night-gp": "Un juego de carreras en three.js por el Tokio nocturno sobre asfalto mojado y brillante, cinco rivales y tres vueltas: un prompt, 30 minutos y un 15 % del límite semanal de un plan de 20 $.",
  "samurai-duel": "Dos samuráis bajo una luna roja, con barras de vida, golpes críticos y sangre, a partir de un prompt con effort High.",
  "the-clockmakers-mansion": "Un juego de terror en Roblox: Fable construyó la mansión encantada en Roblox Studio por MCP y montó el tráiler él mismo.",
  "neon-coast": "Una ciudad de playa al estilo GTA bajo un atardecer rosa: baja del coche y camina, coge otro, con minimapa y nivel de búsqueda. Un prompt.",
  "mist-locked-gate":
    "Un juego de acción wuxia en un santuario de montaña nevado e iluminado con farolillos, hecho por Claude Fable 5.2 en una tarde en un solo archivo HTML.",
  "the-waking-river":
    "Navega en una barca dorada por cinco mundos dormidos que despiertan a tu paso. El autor compartió el prompt completo en PDF.",
  "cayley":
    "Un simulador de vuelo con física de alas real, nueve aviones reales y todo el planeta cargado en 3D, hecho en una noche. Código abierto.",
  "maad-maxxing":
    "Combate de coches al estilo Mad Max en el desierto, con three.js y WebGPU, escrito entero en código, sin modelos ni texturas.",
  "lumenvale":
    "Una fantasía tranquila de mundo abierto: despierta los siete santuarios dormidos de un valle de flores. Fable hizo el juego, su música y su tráiler.",
  "danfo-run":
    "Conduce un danfo amarillo por el tráfico de Lagos, recoge pasajeros y sube en la clasificación en vivo. Es anterior a Fable 5.2: se hizo con Claude como compañero de desarrollo, Three.js para el 3D y GPT para el arte.",
};

const labels: GameLabels = {
  likes: "me gusta",
  views: "visualizaciones",
  prompt: "Ver el prompt (tal como lo compartió el autor)",
  play: "Jugar en el navegador",
  trailer: "Tráiler y capturas",
  source: "Código",
  alt: (name) => `${name}: portada creada a partir de capturas del juego`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Juegos hechos con Claude Fable 5.2: 28 para jugar o ver",
    description:
      "Juegos creados con Claude Fable 5.2: un FPS con aspecto AAA, un paseo en bici por un Van Gogh, una Tierra de vóxeles, karts y combates contra jefes, casi todos jugables en el navegador. Cada uno con su autor, enlace para jugar, me gusta y, si lo compartió, el prompt.",
  },
  breadcrumb: "Juegos con Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Juegos con Claude Fable 5.2: 28 juegos que hizo la gente, y cómo",
    lead: "En los días tras el lanzamiento de Claude Fable 5.2, mucha gente publicó juegos creados con él: un FPS bajo la lluvia, un paseo en barca por mundos de ensueño, una Tierra de vóxeles, karts y combates contra jefes. Abrimos cada publicación, comprobamos los enlaces y nos quedamos con los 28 que mejor se ven. 20 funcionan en tu navegador.",
    cta: "Empezar",
    secondary: "Jugar",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Qué construye Fable 5.2",
      text: [
        "La mayoría son juegos de navegador escritos en JavaScript y Three.js, a menudo un solo archivo HTML que abres y juegas. Otros están hechos en plataformas que alojan juegos creados con IA, como Spawn, o dentro de Roblox Studio por MCP. Fable escribe el código, los shaders y muchas veces también la música y el tráiler.",
      ],
      points: [
        "Saltline, de Felix Rieseberg, llevó unas ocho horas sin indicaciones humanas; cada modelo, textura y sonido se hizo desde cero.",
        "Fablecraft es un sandbox de vóxeles infinito en un archivo HTML, con dos prompts: \"make minecraft single file\" y \"eh looks basic, make it hdr\".",
        "Turbo Tails, de Peter Yang, ganó controles móviles y multijugador con dos indicaciones cortas.",
        "Algunos autores combinaron otras herramientas: Tripo 3D para los personajes, Suno para la música.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Cómo hacer un juego con Fable 5.2 en Claude Code",
      steps: [
        {
          title: "Abre Claude Code con Fable 5.2 en una carpeta vacía",
          text: "Fable 5.2 requiere un plan Pro o superior, o acceso por API. Más effort tarda más y suele verse mejor.",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "Describe el juego en una o dos frases",
          text: "Los prompts cortos funcionan: Hogwarts Royale, de Matt Shumer, salió de una línea. Pide un único archivo HTML con Three.js si quieres algo que se abra y se comparta al momento.",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "Juega y pide un cambio cada vez",
          text: "Turbo Tails creció así: primero «haz que funcione en móvil» (Let's make mobile work please) y luego «añade multijugador de la forma más sencilla» (Ok let's add multiplayer the simplest way).",
        },
        {
          title: "Compártelo",
          text: "Sube la carpeta a un hosting estático como Vercel o Netlify, o publícalo como artifact de Claude, como Saltline y Tidewright.",
        },
      ],
    },
    ...gameSections(
      "es",
      text,
      labels,
      {
        playable: { title: "Juegos para jugar ya", text: "Funcionan en el navegador. Cada tarjeta enlaza al juego, a la publicación del autor y a una página con el tráiler y capturas." },
        video: { title: "Juegos compartidos en vídeo", text: "Sin versión pública todavía: mira la partida en la publicación del autor." },
      },
      "Publicación original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Más de Claude",
      text: [
        "La lista completa, con capturas y prompts, está en GitHub: [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). Para cortos y mundos 3D, [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos); para vídeos de lanzamiento hechos con Opus 5.5, [motion graphics con Opus 5.5](/blog/opus-5-5-motion-graphics). Lo que cambió en el modelo está en nuestra [guía de Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Hacer un juego de navegador con Claude Fable 5.2 en Claude Code" },
  mid: {
    title: "¿Quieres que Fable 5.2 entregue una función cada día?",
    text: "Los empleados de Crewmark trabajan en tu propio Claude Code, se despiertan con un heartbeat y toman la siguiente tarea del tablero, también si es un juego.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Claude Fable 5.2 puede hacer juegos?",
        a: "Sí. Escribe juegos de navegador jugables en JavaScript y Three.js, a menudo en un solo archivo HTML, y puede construir en Roblox Studio por MCP. Los autores cuentan desde juegos de un prompt en 30 minutos hasta un FPS de ocho horas con todo creado desde cero.",
      },
      {
        q: "¿Dónde se juegan los juegos de Claude Fable 5.2?",
        a: "20 de los 28 de arriba funcionan en el navegador: en las webs de sus autores, como artifacts de Claude o en Spawn. El resto se compartió en vídeo.",
      },
      {
        q: "¿Cuánto tarda y cuánto cuesta?",
        a: "Tokyo Night GP llevó un prompt, 30 minutos y un 15 % del límite semanal de un plan de 20 $. Street Brawler II, menos de 35 minutos. Saltline estuvo unas ocho horas, unos 550 $ a precio de API.",
      },
      {
        q: "¿Copia personajes de películas y juegos?",
        a: "No siempre. Cuando le pidieron un juego de Toy Story, Fable se negó a usar los personajes con copyright y recreó solo el estilo. Las mezclas de fans como Hogwarts Royale son proyectos de sus autores.",
      },
      {
        q: "¿Los prompts son públicos?",
        a: "Cinco autores compartieron el suyo y los citamos en las tarjetas. La mayoría eran cortos: una o dos frases.",
      },
    ],
  },
  cta: {
    title: "Pon al modelo más nuevo en un trabajo fijo.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con puesto, objetivos, horario y heartbeat.",
    button: "Empezar",
  },
  checked: "Cada publicación, enlace y prompt comprobado el 11 de noviembre de 2026; los me gusta y visualizaciones son los de ese día.",
  disclaimer:
    "Los juegos, portadas y prompts pertenecen a sus autores; cada tarjeta enlaza a la publicación original. Las portadas se generaron a partir de las capturas de cada juego. Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic. Claude, Claude Fable y Claude Code son marcas de Anthropic; los demás juegos y personajes pertenecen a sus dueños.",
};
