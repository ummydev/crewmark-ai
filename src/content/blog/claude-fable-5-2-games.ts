import type { Locale } from "next-intl";

import type { GuideCopy, GuideGalleryItem, GuideSection } from "@/components/landing/guide-article";
import { fableGames } from "./claude-fable-5-2-games-data";

// /blog/claude-fable-5-2-games, for "claude fable games" and its suggestions (game dev, game design, game creation,
// video game), "fable 5.2 games" and "fable 5.2 video game" (Google autocomplete, 2026-11-12). The 28 games are the
// ones in ummydev/awesome-claude-fable-games, each post opened on X on 2026-11-11; tools, time and cost are the makers'
// own words in their posts and replies. Every game also has a page on vibegamer.io with its trailer and screenshots.

/** A language's sentence or two about each game, by id. Game names are never translated. */
export type GameText = Record<string, string>;

export type GameLabels = {
  likes: string;
  views: string;
  prompt: string;
  play: string;
  trailer: string;
  source: string;
  alt: (name: string) => string;
};

const UTM = "?utm_source=crewmark&utm_medium=blog&utm_campaign=claude-fable-5-2-games";

function gameCards(locale: Locale, playable: boolean, text: GameText, labels: GameLabels): GuideGalleryItem[] {
  const n = new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 });
  return fableGames
    .filter((g) => Boolean(g.play) === playable)
    .map((g) => {
      const stats = [g.likes ? `${n.format(g.likes)} ${labels.likes}` : "", g.views ? `${n.format(g.views)} ${labels.views}` : ""]
        .filter(Boolean)
        .join(" · ");
      const links = [
        ...(g.play ? [{ label: labels.play, href: g.play }] : []),
        ...(g.source && g.source !== g.play ? [{ label: labels.source, href: g.source }] : []),
        { label: labels.trailer, href: g.vibegamer + UTM },
      ];
      return {
        id: g.id,
        title: g.name,
        image: `/media/claude-fable-5-2-games/${g.id}.webp`,
        alt: labels.alt(g.name),
        href: g.post,
        byline: `${g.maker}${g.handle ? ` (@${g.handle})` : ""}${stats ? ` · ${stats}` : ""}`,
        text: text[g.id],
        prompt: g.prompt,
        promptLabel: g.prompt ? labels.prompt : undefined,
        links,
      };
    });
}

/** The two gallery sections: games you can play in a browser, then games shared as videos. */
export function gameSections(
  locale: Locale,
  text: GameText,
  labels: GameLabels,
  heads: { playable: { title: string; text: string }; video: { title: string; text: string } },
  watch: string,
): GuideSection[] {
  return [
    { kind: "gallery", id: "play-now", title: heads.playable.title, text: [heads.playable.text], watch, items: gameCards(locale, true, text, labels) },
    { kind: "gallery", id: "video-only", title: heads.video.title, text: [heads.video.text], watch, items: gameCards(locale, false, text, labels) },
  ];
}

const enText: GameText = {
  saltline:
    "A rain-soaked container-port FPS built in about eight hours with no human feedback: every model, texture and sound made from scratch, for roughly $550 at API prices. The prompt was close to \"you should also build me a FPS\".",
  "what-the-water-keeps":
    "A slow, lantern-lit boat ride through eight dreamlike worlds, from a drowned city to a snowy forest, in Three.js. The maker used Tripo 3D for models and Suno for the game music; Fable composed the trailer's score.",
  "oil-paint":
    "Walk through an autumn forest that looks hand-painted: about 1.5 million brush strokes a frame at 200 fps in a browser tab, made in under an hour. The source is open.",
  "starry-night-rider":
    "Ride a bicycle through the village of Van Gogh's The Starry Night, the sky, houses and cobbles all in swirling brushstrokes.",
  "mirror-earth":
    "The whole planet in voxels: go anywhere, break anything, with weather that follows the real Earth live. Built on Spawn.",
  "i-would-have-gotten-away-with-it":
    "A reverse Scooby-Doo by Ethan Mollick: you are the villain of the haunted manor and must scare off the meddling kids. Fable made the trailer, music and sound too.",
  "gilt-and-gutter":
    "A stylish 1v1 shooter in a gilded arcade hall, where shots of your own colour charge your gun. Character models from Tripo3D, rigging and animation by Fable.",
  tidewright: "Sail a storm-tossed night sea and relight the lighthouses of the Thrumming Isles.",
  "the-clockmakers-heart": "Wake a sleeping clockwork giant one gear puzzle at a time, a first draft by Fable 5.2.",
  "turbo-tails":
    "A 3D kart racer with six animal drivers, drifting, ramps and items, playable with friends. Three prompts in all; the music came from Suno and Claude wired it in.",
  "rifts": "An Overwatch-style 3v3 hero brawler with 12 heroes, world-hopping rifts and boss fights, free in the browser on Spawn.",
  "memory-of-teresa-the-storm-spire":
    "A dark boss fight in candlelit stone halls and on a rain-lashed cathedral spire, made in one go and free to play on Spawn.",
  "aidens-revenge":
    "A 1–4 player pixel-art beat 'em up dreamed up and drawn by a kid named Aiden, and turned into a game overnight with Fable 5.2.",
  "hogwarts-royale":
    "A wizard-school battle royale on brooms, with a castle courtyard and an enchanted forest, from a one-line prompt.",
  "party-royale":
    "A Fall Guys-style party game for 60 players, with fake doors, spinning platforms and multiplayer, made in one try.",
  fablecraft:
    "An infinite voxel sandbox in a single HTML file: place and break blocks, with 4K shadows, reflections and a 10-chunk view distance. Two prompts on extra-high effort.",
  "street-brawler-ii":
    "A pixel-art arcade fighter with several characters, special moves, combos and stages, generated in one go in under 35 minutes.",
  "toy-room-adventure":
    "Shrink to toy size and explore a sunlit kids' bedroom. Fable declined to copy the film's characters, so it recreated the look instead: the light, the dust and every toy-sized detail.",
  "tokyo-night-gp":
    "A three.js racer through neon Tokyo at night on wet, reflective asphalt, five rivals over three laps: one prompt, 30 minutes, about 15% of a $20 plan's weekly limit.",
  "samurai-duel": "Two samurai under a red moon, with health bars, critical hits and blood effects, from one prompt on High effort.",
  "the-clockmakers-mansion":
    "A Roblox horror game: Fable built the haunted mansion in Roblox Studio over MCP and cut the trailer itself.",
  "neon-coast":
    "A GTA-style beach city in pink sunset light: get out and walk, take a car, with a minimap and wanted stars. One prompt.",
  "mist-locked-gate":
    "A wuxia action game in a snowy, lantern-lit mountain shrine, made by Claude Fable 5.2 in one afternoon as a single HTML file.",
  "the-waking-river":
    "Sail a golden boat through five sleeping worlds that wake up as you pass. The maker shared the full prompt as a PDF.",
  "cayley":
    "A flight simulator with real wing physics, nine real aircraft and the whole planet streamed in 3D, built overnight. Open source.",
  "maad-maxxing":
    "Mad Max-style car combat in the desert, in three.js and WebGPU, written entirely in code with no models or textures.",
  "lumenvale":
    "A gentle open-world fantasy: wake the seven sleeping shrines of a flower valley. Fable made the game, its music and its trailer.",
  "danfo-run":
    "Drive a yellow danfo through Lagos traffic, load passengers and top the live leaderboard. Built before Fable 5.2, with Claude as the dev partner, Three.js for the 3D and GPT for the art.",
};

const enLabels: GameLabels = {
  likes: "likes",
  views: "views",
  prompt: "Show the prompt (as the maker shared it)",
  play: "Play in the browser",
  trailer: "Trailer and screenshots",
  source: "Source",
  alt: (name) => `${name}: cover art made from the game's screenshots`,
};

export const claudeFable52Games: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Claude Fable 5.2 Games: 28 Games You Can Play or Watch",
      description:
        "Games made with Claude Fable 5.2: a AAA-looking FPS, a Van Gogh bike ride, a voxel Earth, kart racers and boss fights, most playable in the browser. Each with the maker, play link, likes and, where shared, the prompt.",
    },
    breadcrumb: "Claude Fable 5.2 games",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-12" },
    hero: {
      kicker: "Blog · Claude Fable 5.2",
      title: "Claude Fable 5.2 games: 28 games people made, and how",
      lead: "In the days after Anthropic released Claude Fable 5.2, people posted games it had built: a rain-soaked FPS, a boat ride through dream worlds, a voxel Earth, kart racers and boss fights. We opened every post, checked the play links and kept the 28 that look the best. 20 run in your browser.",
      cta: "Get started",
      secondary: "Play them",
      secondaryHref: "#play-now",
    },
    sections: [
      {
        kind: "text",
        id: "what-it-builds",
        title: "What Fable 5.2 builds",
        text: [
          "Most of these are browser games written in JavaScript and Three.js, often a single HTML file you can open and play. Others are built on platforms that host AI-made games, like Spawn, or inside Roblox Studio over MCP. Fable writes the code, the shaders and often the music and the trailer.",
        ],
        points: [
          "Felix Rieseberg's Saltline took about eight hours with no human feedback; every model, texture and sound was made from scratch.",
          "Fablecraft is an infinite voxel sandbox in one HTML file, from two prompts: \"make minecraft single file\" and \"eh looks basic, make it hdr\".",
          "Peter Yang's Turbo Tails got mobile controls and multiplayer from two short follow-ups.",
          "Some makers mixed in other tools: Tripo 3D for character models, Suno for music.",
        ],
      },
      {
        kind: "steps",
        id: "make-one",
        title: "How to make a game with Fable 5.2 in Claude Code",
        steps: [
          {
            title: "Start Claude Code on Fable 5.2 in an empty folder",
            text: "Fable 5.2 needs a Pro plan or higher, or API access. Higher effort takes longer and usually looks better.",
            code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
          },
          {
            title: "Describe the game in a sentence or two",
            text: "Short prompts work: Matt Shumer's Hogwarts Royale came from one line. Ask for a single HTML file with Three.js if you want something you can open and share at once.",
            code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
          },
          {
            title: "Play it and ask for one change at a time",
            text: "\"Let's make mobile work please\", then \"Ok let's add multiplayer the simplest way\" is how Turbo Tails grew.",
          },
          {
            title: "Share it",
            text: "Deploy the folder to a static host like Vercel or Netlify, or publish it as a Claude artifact, as Saltline and Tidewright are.",
          },
        ],
      },
      ...gameSections("en", enText, enLabels, {
        playable: { title: "Games you can play now", text: "These run in the browser. Each card links to the game, the maker's post and a page with the trailer and screenshots." },
        video: { title: "Games shared as videos", text: "No public build yet: watch the gameplay in the maker's post." },
      }, "Original post"),
      {
        kind: "text",
        id: "more",
        title: "More from Claude",
        text: [
          "The full list, with screenshots and the prompts, is on GitHub: [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). For films and 3D worlds see [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos); for launch films made with Opus 5.5, see [Opus 5.5 motion graphics](/blog/opus-5-5-motion-graphics). What changed in the model itself is in our [Claude Fable 5.2 guide](/blog/claude-fable-5-2).",
        ],
      },
    ],
    howTo: { section: "make-one", name: "Make a browser game with Claude Fable 5.2 in Claude Code" },
    mid: {
      title: "Want Fable 5.2 shipping a feature every day?",
      text: "Crewmark employees run on your own Claude Code, wake on a heartbeat and take the next issue from the board, games included.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Claude Fable 5.2 make games?",
          a: "Yes. It writes playable browser games in JavaScript and Three.js, often as a single HTML file, and it can build in Roblox Studio over MCP. Makers report everything from one-prompt games in 30 minutes to an eight-hour FPS with every asset made from scratch.",
        },
        {
          q: "Where can I play Claude Fable 5.2 games?",
          a: "20 of the 28 above run in the browser: on the makers' own sites, as Claude artifacts or on Spawn. The rest were shared as gameplay videos.",
        },
        {
          q: "How long does it take and what does it cost?",
          a: "Tokyo Night GP took one prompt, 30 minutes and about 15% of a $20 plan's weekly limit. Street Brawler II took under 35 minutes. Saltline ran for about eight hours, roughly $550 at API prices.",
        },
        {
          q: "Will it copy characters from films and games?",
          a: "Not always. Asked for a Toy Story game, Fable declined to use the copyrighted characters and recreated the style instead. Fan mashups like Hogwarts Royale are the makers' own projects.",
        },
        {
          q: "Are the prompts public?",
          a: "Five makers shared theirs, and we quote them on the cards above. Most were short: one or two sentences.",
        },
      ],
    },
    cta: {
      title: "Put the newest model on a standing job.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Every post, play link and prompt checked on November 11, 2026; likes and views are what the post showed then.",
    disclaimer:
      "The games, covers and prompts belong to their makers; every card links to the original post. Cover art was generated from each game's own screenshots. Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude, Claude Fable and Claude Code are trademarks of Anthropic; other games and characters belong to their owners.",
  },
};
