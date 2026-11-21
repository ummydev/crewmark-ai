import type { Locale } from "next-intl";

import type { GuideCopy, GuideSection } from "@/components/landing/guide-article";
import { fableVideos, type FableVideoSection } from "./claude-fable-5-2-videos-data";

// /blog/claude-fable-5-2-videos, for "fable 5.2 video generation" and "fable 5.2 videos", "fable 5.2 video creation"
// and "claude fable 5.2 video" (Google autocomplete, 2026-11-12). The 32 videos are the ones in
// ummydev/awesome-claude-fable-videos, watched one by one and checked post by post on X on 2026-11-11 and 11-12;
// tools, time and cost are the makers' own words.

/** A language's title and a sentence or two for each video, by id. */
export type VideoText = Record<string, { title: string; text: string }>;

export type VideoLabels = {
  likes: string;
  views: string;
  prompt: string;
  open: string;
  alt: (title: string) => string;
};

/** The four gallery sections, in order, in the page's language. */
export function videoSections(
  locale: Locale,
  text: VideoText,
  labels: VideoLabels,
  heads: Record<FableVideoSection, { title: string; text: string }>,
  watch: string,
): GuideSection[] {
  const n = new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 });
  const ids: Record<FableVideoSection, string> = { film: "films", world: "3d-worlds", web: "web-pages", science: "science" };
  return (["film", "world", "web", "science"] as const).map((s) => ({
    kind: "gallery",
    id: ids[s],
    title: heads[s].title,
    text: [heads[s].text],
    watch,
    items: fableVideos
      .filter((v) => v.section === s)
      .map((v) => {
        const stats = [v.likes ? `${n.format(v.likes)} ${labels.likes}` : "", v.views ? `${n.format(v.views)} ${labels.views}` : ""]
          .filter(Boolean)
          .join(" · ");
        return {
          id: v.id,
          title: text[v.id].title,
          image: `/media/claude-fable-5-2-videos/${v.id}.webp`,
          alt: labels.alt(text[v.id].title),
          href: v.post,
          byline: `${v.maker}${v.handle ? ` (@${v.handle})` : ""}${stats ? ` · ${stats}` : ""}`,
          text: text[v.id].text,
          prompt: v.prompt,
          promptLabel: v.prompt ? labels.prompt : undefined,
          links: v.play ? [{ label: labels.open, href: v.play }] : undefined,
        };
      }),
  }));
}

const enText: VideoText = {
  "constructivist-chat-ui": {
    title: "A constructivist chat app that changes form",
    text: "A companion-chat app restyled in a constructivist look: swallows, moon phases, an inhuman eye and a spiral staircase, with chat screens drawn like survey maps and letters.",
  },
  "art-history-cat": {
    title: "40,000 years of art history in one prompt",
    text: "The same person and cat redrawn in every era, from an Egyptian wall painting to Van Gogh, Mondrian, pixel art and 2026. About 4,900 lines of code, no image model.",
  },
  "crystal-bud-flight": {
    title: "A crystal bud, then a flight over purple fields",
    text: "A frosted flower bud, then a low flight over meadows, snowy peaks and purple flower fields. The maker says it took half an hour.",
  },
  "blender-island-rebuild": {
    title: "An island rebuilt in Blender from a reference",
    text: "Built in Blender from code alone: 130 objects, 1.14 million faces, no textures, a turning water wheel and swimming fish. Fable filled in what the reference didn't show.",
  },
  "locomotive-robot-anime": {
    title: "A 90-second anime short: a steam locomotive becomes a robot",
    text: "Hand-drawn-looking 2D anime from one prompt: Fable built every shot in Blender from Python, rendered it and inked each frame in a second pass, then wrote the score note by note with numpy.",
  },
  "geonosis-battle-blender": {
    title: "A Star Wars battle built in Blender",
    text: "The maker's Blender benchmark for every new model: over a thousand droids, gunships and laser fire in the arena. One prompt, 1.5 hours including a 20-minute render.",
  },
  "laundry-in-the-sun": {
    title: "Laundry on a line in the afternoon light",
    text: "Two people watch shirts flap on a washing line in a sunny field. The folds, the light through the fabric, the camera and the sound are all code.",
  },
  "fushimi-inari-travel-ad": {
    title: "A travel ad for Fushimi Inari in autumn",
    text: "Twenty seconds of the Kyoto shrine, a run through the red torii tunnel and a title card at sunset, entirely in code with the music included.",
  },
  "rainy-tokyo-alley": {
    title: "A rainy Tokyo alley made without a video model",
    text: "Rain, puddles and neon reflections, a street mirror that really reflects and Japanese signs you can read. Posted by Higgsfield.",
  },
  "pet-robot": {
    title: "A pet robot you could build at home",
    text: "Asked for a robot he could build in his apartment, Matt Shumer got a round little pet robot that wakes up, swings its arm and plays with a ball.",
  },
  "lighthouse-in-a-storm": {
    title: "A lighthouse in a storm",
    text: "A beam sweeps over a heaving night sea until the clouds part around the moon. On high effort, with sound.",
  },
  "piano-boy-short": {
    title: "A 46-second film with zero generated images",
    text: "A boy at a piano: every frame drawn and every note played by code Fable wrote, with no image or video model.",
  },
  "ufo-area-51": {
    title: "A UFO lands at Area 51",
    text: "A five-shot, 30-second film in three.js and Remotion from one sentence: no imported models, textures or stock audio, rendered in 4K.",
  },
  "spider-web-logo": {
    title: "A spider weaves the Claude logo into its web",
    text: "A moonlit spider spins its web step by step, then stitches the Claude logo into the centre by dawn.",
  },
  istanbul: {
    title: "Istanbul, built from a prompt",
    text: "The city from the air: the Hagia Sophia and the Golden Horn, ferries on the Bosphorus and the skyline at dusk. Fable 5.2 Max, about $46.",
  },
  "auric-voyage": {
    title: "Auric Voyage: a golden ship above the clouds",
    text: "A golden sailing ship over volumetric clouds, with a day and night cycle and a deck you can walk onto. Three.js only, about 38 minutes and $17.",
  },
  "pirate-ship": {
    title: "A pirate ship sailing at sunset",
    text: "A three-masted ship with a wake, lit cabin windows and full sails. One shot, about 1.5 hours and 35M tokens.",
  },
  "voxel-pagoda": {
    title: "A voxel pagoda full of tiny details",
    text: "A floating island with a five-storey pagoda, cherry blossoms, ponds and lanterns that light up at night.",
  },
  "voxel-paris-1888": {
    title: "Paris in 1888, the Eiffel Tower under construction",
    text: "Cranes lift girders, riveting teams spark and a riverboat steams along the Seine, on a floating voxel island. One shot, from a long, precise prompt.",
  },
  "night-tokyo-ramen-stall": {
    title: "A ramen stall on a rainy Tokyo night",
    text: "One PROMPT.md, an empty folder and no hand edits, in 20 minutes for $7. Press T and the rain slowly turns to snow.",
  },
  "floating-pixel-island": {
    title: "A floating pixel island",
    text: "A looping pixel-art island with a wizard's tower, cherry trees, a rainbow and airships. One prompt on extra-high effort.",
  },
  "talking-village": {
    title: "A European village where every character thinks",
    text: "A 3D village whose people think and talk to each other with AI, from Matthew Berman's Fable 5.2 field test.",
  },
  "lighthouse-at-sunset": {
    title: "A photorealistic lighthouse at sunset",
    text: "The maker's standing lighthouse prompt on Fable 5.2: a striped lighthouse, a sweeping beam and a calm sea.",
  },
  "abyssal-landing-page": {
    title: "Abyssal: a landing page that scrolls into the ocean",
    text: "Scroll from a moonlit surface past glowing jellyfish to a lantern-lit city and a giant eye in the dark. Made on low effort.",
  },
  "liquid-glass-type": {
    title: "Glass, amber and liquid metal type",
    text: "Blobs of glass, amber and liquid metal push through giant headline type, each with its own colour scheme.",
  },
  "car-configurator": {
    title: "A car configurator made on medium effort",
    text: "Orbit a red sedan, change the paint and wheels, and switch to a launch view with light streaks. Twelve minutes.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth: eight ways to destroy the planet",
    text: "Earth with real NASA maps and city lights, and eight ways to end it, from an asteroid to a god that eats it like an apple. First try.",
  },
  "virus-capsid": {
    title: "A virus shell assembling itself",
    text: "One HTML file: 420 protein subunits form a T=7 shell, 12 pentamers first and then 60 hexamers, the geometry real viruses use.",
  },
  "drained-ocean": {
    title: "What the Atlantic looks like with the water drained",
    text: "Real NOAA seafloor data in a 3D flyover as the ocean drains: Britain joins Europe in seconds, then the Mid-Atlantic Ridge appears.",
  },
  "deep-sea-dive": {
    title: "A dive from the surface to 40 metres",
    text: "Sunlight, schools of fish and a torch beam change with depth, with a depth gauge on the side. All code.",
  },
  "pocket-black-hole": {
    title: "A pocket black hole",
    text: "Asked for something that would go viral, Fable made an interactive black hole with a glowing disk bent by gravitational lensing.",
  },
  "galaxy-dive": {
    title: "Fly into a spiral galaxy",
    text: "Start outside a spiral galaxy and fly in, with a light-year counter ticking down. About 20 minutes of work.",
  },
};

const enLabels: VideoLabels = {
  likes: "likes",
  views: "views",
  prompt: "Show the prompt (as the maker shared it)",
  open: "Open it live",
  alt: (title) => `Still from the video: ${title}`,
};

export const claudeFable52Videos: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Fable 5.2 Videos: 32 Films and 3D Scenes Made in Code",
      description:
        "Videos made with Claude Fable 5.2: an anime short rendered in Blender, Istanbul from the air, a golden ship above the clouds, landing pages and science visuals. No video model: Fable writes the code. Each with the maker, likes and prompt.",
    },
    breadcrumb: "Claude Fable 5.2 videos",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-12" },
    hero: {
      kicker: "Blog · Claude Fable 5.2",
      title: "Claude Fable 5.2 videos: 32 films and 3D scenes, all made in code",
      lead: "Claude Fable 5.2 doesn't generate video the way a video model does. It writes code, in Three.js, WebGL, Remotion or Blender's Python, and renders what that code draws. Here are the 32 best results people posted in its first days, each with the maker, the numbers and, where shared, the prompt.",
      cta: "Get started",
      secondary: "Watch them",
      secondaryHref: "#films",
    },
    sections: [
      {
        kind: "text",
        id: "how-it-works",
        title: "How Fable 5.2 makes video",
        text: [
          "Video generation with Fable 5.2 means asking it for a scene or a short film and letting it build the whole thing as a program: the models, the camera, the lighting, often the music. Some makers render it to an MP4; others share the scene as a page you can open and move around in.",
        ],
        points: [
          "0kncn's 90-second anime was built shot by shot in Blender from Python, with a soundtrack written in numpy.",
          "Marcel's golden ship is pure Three.js, with no Blender and no outside models: about 38 minutes and $17 on medium effort.",
          "Peter Gostev's Istanbul, the most liked of all, ran on Fable 5.2 Max for about $46.",
          "Dante's UFO film came from one sentence and used three.js and Remotion, with no textures or stock audio.",
        ],
      },
      {
        kind: "steps",
        id: "make-one",
        title: "How to make one in Claude Code",
        steps: [
          {
            title: "Start Claude Code on Fable 5.2",
            text: "Fable 5.2 needs a Pro plan or higher, or API access. For a scene you can share as a page, an empty folder is enough; for Blender, have Blender installed so Fable can drive it from Python.",
            code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
          },
          {
            title: "Describe the scene, or the film shot by shot",
            text: "One sentence works (\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"); long, precise briefs like the Paris 1888 prompt below give you more control.",
          },
          {
            title: "Ask it to render, or to keep it live",
            text: "Ask for an MP4 at a set resolution and frame rate, or for a single HTML page you can open in a browser and share.",
          },
        ],
      },
      ...videoSections("en", enText, enLabels, {
        film: { title: "Films and animated shorts", text: "Short films with a camera, a story or a score." },
        world: { title: "3D worlds and dioramas", text: "Cities, ships and islands, several of them live pages you can move around in." },
        web: { title: "Websites and interactive pages", text: "Landing pages and product pages that animate as you scroll or click." },
        science: { title: "Science, space and data", text: "Galaxies, black holes, viruses and the ocean floor, often from real data." },
      }, "Watch the original post"),
      {
        kind: "text",
        id: "more",
        title: "More from Claude",
        text: [
          "The full list with three stills per video is on GitHub: [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). For games built with Fable 5.2 see [Claude Fable 5.2 games](/blog/claude-fable-5-2-games); for launch films and motion graphics made with Opus 5.5 see [Opus 5.5 motion graphics](/blog/opus-5-5-motion-graphics). What changed in the model is in our [Claude Fable 5.2 guide](/blog/claude-fable-5-2).",
        ],
      },
    ],
    howTo: { section: "make-one", name: "Make a video with Claude Fable 5.2 in Claude Code" },
    mid: {
      title: "Want Fable 5.2 on a standing job?",
      text: "Crewmark employees run on your own Claude Code, wake on a heartbeat and take the next issue from a board.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Claude Fable 5.2 generate video?",
          a: "Not the way a video model does. It writes code that draws each frame, in Three.js, WebGL, Remotion or Blender, and renders it to an MP4 or runs it live in a browser. That's why the text, logos and fine details come out sharp.",
        },
        {
          q: "What tools does it use?",
          a: "Most often Three.js or WebGL in a single HTML file. Others used Remotion for film-style edits, Blender driven from Python, and Python or numpy for the music.",
        },
        {
          q: "How long does it take and what does it cost?",
          a: "From about 20 minutes and $7 (the Tokyo ramen stall) to 1.5 hours and 35M tokens (the pirate ship) or about $46 on Fable 5.2 Max (Istanbul).",
        },
        {
          q: "Can I open these scenes myself?",
          a: "Four have a live page linked on their card: the golden ship, the pirate ship, the black hole and the galaxy. The rest were shared as videos.",
        },
        {
          q: "Fable 5.2 or Opus 5.5 for video?",
          a: "Makers use both. In what people posted, Fable 5.2 was used most for 3D worlds and films, and Opus 5.5 for product launch films and motion graphics, which we collected in [Opus 5.5 motion graphics](/blog/opus-5-5-motion-graphics).",
        },
      ],
    },
    cta: {
      title: "Put the newest model on a standing job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Every post and prompt checked on X and Xiaohongshu on November 11 and 12, 2026; likes and views are what the post showed then.",
    disclaimer:
      "The videos and prompts belong to their makers; every card links to the original post. Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude, Claude Fable, Claude Opus and Claude Code are trademarks of Anthropic.",
  },
};
