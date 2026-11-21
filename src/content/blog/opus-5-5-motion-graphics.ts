import type { Locale } from "next-intl";

import type { GuideCopy, GuideGalleryItem, GuideSection } from "@/components/landing/guide-article";
import { motionVideos, type MotionSection } from "./opus-5-5-motion-graphics-data";

// /blog/opus-5-5-motion-graphics, for "opus 5.5 motion graphics" and its suggestions (prompt, examples, videos, skill,
// github, reddit, x), "claude motion graphics" (skill, prompt, examples, video) and "claude opus video generation"
// (Google autocomplete, 2026-11-12). The 43 videos are the ones in ummydev/awesome-claude-motion-video, picked by
// watching each one and checked post by post on X on 2026-11-12 (likes, views, prompt); facts about tools, time and cost
// are the makers' own words in their posts and replies.

/** A language's words for one video: its title and a sentence or two about it. */
export type MotionText = Record<string, { title: string; text: string }>;

export type MotionLabels = {
  likes: string;
  views: string;
  prompt: string;
  alt: (title: string) => string;
};

/** The gallery cards for one section, in the page's language. */
export function motionGallery(
  section: MotionSection,
  locale: Locale,
  text: MotionText,
  labels: MotionLabels,
): GuideGalleryItem[] {
  const n = new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 });
  return motionVideos
    .filter((v) => v.section === section)
    .map((v) => {
      const t = text[v.id];
      const stats = [v.likes ? `${n.format(v.likes)} ${labels.likes}` : "", v.views ? `${n.format(v.views)} ${labels.views}` : ""]
        .filter(Boolean)
        .join(" · ");
      return {
        id: v.id,
        title: t.title,
        image: `/media/opus-5-5-motion-graphics/${v.id}.webp`,
        alt: labels.alt(t.title),
        href: v.post,
        byline: `${v.maker}${v.handle ? ` (@${v.handle})` : ""} · ${v.model === "Claude" ? "Claude" : `Claude ${v.model}`}${stats ? ` · ${stats}` : ""}`,
        text: t.text,
        prompt: v.prompt,
        promptLabel: v.prompt ? labels.prompt : undefined,
      };
    });
}

/** The four gallery sections, in order, from a language's headings. */
export function motionSections(
  locale: Locale,
  text: MotionText,
  labels: MotionLabels,
  heads: Record<MotionSection, { title: string; text: string }>,
  watch: string,
): GuideSection[] {
  const ids: Record<MotionSection, string> = { launch: "launch-films", brand: "logo-reveals", showreel: "showreels", explainer: "explainers" };
  return (["launch", "brand", "showreel", "explainer"] as const).map((s) => ({
    kind: "gallery",
    id: ids[s],
    title: heads[s].title,
    text: [heads[s].text],
    watch,
    items: motionGallery(s, locale, text, labels),
  }));
}

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const enText: MotionText = {
  "claude-motion-reel": {
    title: "Claude, motion designer: a 15-second reel from one sentence",
    text: "A portfolio-style reel: particle lettering, easing curves under \"Timing is everything\", liquid type and an orange end card tallying 899 frames, 8 scenes and 1 keyframe. From one sentence in Chinese.",
  },
  "pelican-riding-a-bicycle": {
    title: "A pelican riding a bicycle, made properly",
    text: "Tired of SVG pelicans, the maker asked for the most detailed one possible. Opus 5.5 wrote it all in Claude Code: a Blender scene rendered in Cycles, a Rust cloud renderer for a 12K sky, about 24,000 feathers, a bike with 36 spokes and 92 chain links, plus the music. No ready-made models, textures or music.",
  },
  "inference-startup-launch": {
    title: "Muda: a launch film for an inference startup, made in a minute for about $2",
    text: "\"Most of inference is waiting. Not anymore.\" Request grids light up as throughput climbs, then the brand lands. No video model and no extra libraries: Claude animated a web page and recorded it with Playwright and ffmpeg.",
  },
  "typingmind-launch": {
    title: "TypingMind: one prompt instead of four weeks with freelancers",
    text: "Opus read the product's pages, wrote the script and animated one chat box asking several models at once. One prompt and almost an hour in Claude Code, with no skills installed.",
  },
  "notion-launch-it-picked": {
    title: "A Notion launch film, with the product picked by Opus",
    text: "Told only to choose a SaaS people know and make a professional launch video, Opus picked Notion, pulled real assets from the web and cut a polished feature film.",
  },
  "makermap-one-shape": {
    title: "MakerMap: one shape morphing through the whole product",
    text: "Twenty seconds of a single shape turning into sign-up, a map pin, 3,393 makers on a globe, matches and search. The springs, cursor and motion blur are deterministic math in one HTML file.",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook, scored like Oppenheimer",
    text: "Two chapters, Fission and Fusion: thousands of golden pages swarm into headlines, a countdown, an explosion, to music Opus composed itself after the film's theme.",
  },
  "distilbook-film-strips": {
    title: "Distilbook: film strips spiralling into a tunnel",
    text: "A rainbow of film strips sweeps across the screen and coils into a glowing tunnel, in the style of a reference video. The final cut has no manual edits.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites hits a million monthly visitors",
    text: "A milestone film with a counter racing to a million. One shot in four minutes, with one change.",
  },
  "famewall-mascot": {
    title: "Famewall: it found the mascot and brought it in",
    text: "A launch film for a testimonials tool. Opus dug into the site's SVGs, found its mascot and put it in the video without being asked.",
  },
  "lumail-pricing": {
    title: "Lumail: email marketing your AI agent can run",
    text: "Dot grids of contacts who never open an email and a bill that keeps climbing, then the pitch. Made in under ten minutes with no skill, just the prompt.",
  },
  "founder-page-launch": {
    title: "founder.page: every feature in 20 seconds",
    text: "A fast, on-brand launch film with live revenue and visitor counters. One shot in Claude Code.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI: a developer-tool launch film",
    text: "Made with Opus 5.5 and Remotion from one long brief for a premium launch film fit to open a keynote.",
  },
  "sahi-trading-terminal": {
    title: "A trading terminal that zooms out to a point in space",
    text: "From a single dot to charts, positions and an option chain, out until the desktop is a speck in space, then back in to a phone. A single shot.",
  },
  "aisa-one-key": {
    title: "AIsa: thousands of API keys become one",
    text: "A swarm of key names collapses into a single orange key. One prompt, one shot.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive: stream in 4K, delivered everywhere",
    text: "A dark, editorial film for a file-delivery product: layered terrain, a glowing dotted globe, a custom domain. No skills, sound on.",
  },
  "matra-apple-style": {
    title: "Matra: an Apple-style film for an app",
    text: "Thirty seconds in Remotion and React: SF Pro type, a titanium iPhone, captions synced word by word to a real voice, and music.",
  },
  "no-hands-labs": {
    title: "No Hands Labs: companies that build themselves",
    text: "Lime-on-black type and a dot-matrix 95% for a studio of AI-run companies.",
  },
  "pen-designs-launch": {
    title: "norilu: hand off the work that keeps coming back",
    text: "Opus read the maker's designs through the pen.dev MCP and made a calm launch film. A blunt second prompt fixed the music and the pacing.",
  },
  "bento-surf": {
    title: "Bento.surf: a 40-second product film",
    text: "A playful, phone-first film for a link-in-bio page, from a single prompt.",
  },
  quickemailverify: {
    title: "QuickEmailVerify: stop bounces before you hit send",
    text: "A SaaS-style film for an email checker, from typing an address to a cleaned list. Opus 5.5 on high effort.",
  },
  "orbe-everyday-spending": {
    title: "Orbe: everyday spending in isometric 3D",
    text: "A vertical film for a spending app: a supermarket, a petrol station and a restaurant, each logging a purchase. The maker says it took more than one prompt.",
  },
  "winkz-pitch": {
    title: "A pitch film for an Amazon wholesale business",
    text: "Fifteen seconds pitching brands, with price-protection and buy-upfront counters.",
  },
  "queryglow-launch": {
    title: "QueryGlow: a launch film in Anthropic's style",
    text: "A quiet, serif film for a self-hosted database tool, asked for \"a la Anthropic\" in German, with music added at the end.",
  },
  "opus-1984-ad": {
    title: "An ad for Opus 5.5, after Apple's 1984",
    text: "A runner with a hammer, rows of grey figures and a giant face on the screen, made only from code. Opus even checked the sound levels.",
  },
  "paybox-brand-sting": {
    title: "PayBox: a brand sting from just a logo",
    text: "The agent read the logo, found the company, wrote the scenario and built a ten-second sting in one pass.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm: a logo built from low-poly shards",
    text: "A wireframe logo fills in shard by shard, the app icon lands and the name types out, with sound.",
  },
  "opus-retro-launch": {
    title: "A retro-futuristic Opus 5.5 launch film",
    text: "A glowing striped head with film grain and a CRT effect, from one prompt and one style reference image.",
  },
  "psychedelic-showreel": {
    title: "Phosphene: a psychedelic motion study",
    text: "A giant eye, spinning tunnels and kaleidoscopes, with motion and sound by Opus on extra-high effort: 90 minutes of rendering, $14 in all.",
  },
  "poster-breaks-out": {
    title: "A poster breaking out of its own frame",
    text: "Big red and blue type punches through its poster. Opus composed the soundtrack and synced every hit to the beat.",
  },
  "i-can": {
    title: "I CAN: blur, loop, render, swarm, bend light",
    text: "Bold title cards that each do what they say, from a one-line prompt.",
  },
  "light-speed-earth": {
    title: "One second on Earth",
    text: "Given no direction at all, Opus chose its own subject: everything that happens in one second, from light circling the Earth to four new people being born.",
  },
  "no-samples-showreel": {
    title: "A showreel with music made from scratch",
    text: "The maker knows nothing about motion design. Opus wrote the code for every frame and synthesized the music, no samples, in Cursor.",
  },
  "easing-explained": {
    title: "I make things move: Motion Designer Claude",
    text: "Kinetic type that spins and snaps, a lesson in easing curves and an end card, from a one-line Chinese prompt.",
  },
  "portfolio-film": {
    title: "A designer's portfolio, turned into a film",
    text: "Opus went through every screen of the maker's portfolio and open source work and made a bold reel in one shot.",
  },
  "it-thinks-in-curves": {
    title: "Rhythm, type, loops: it thinks in curves",
    text: "Square loops of colour-blocked type and a bezier curve drawn live, on Opus's claim that it writes the math instead of keyframes.",
  },
  "who-are-you-opus": {
    title: "Hi, I'm Claude: Opus 5.5 introduces itself",
    text: "Ten seconds of type: \"I read every word\", \"I think it through\", \"I tell it straight\", \"I build with you\".",
  },
  "madhav-about-me": {
    title: "A ten-second film about the person asking",
    text: "Asked for a video on whatever it knew about the maker, Opus made a particle film about his work.",
  },
  "recursion-nine-styles": {
    title: "Recursion, explained in nine genres",
    text: "Each explanation switches to a different style, from a retro game to film noir. A genuine one-shot: scenes in React and SVG, music and sound synthesized in Python.",
  },
  "negroni-recipe": {
    title: "A Negroni, poured step by step",
    text: "A recipe explainer that fills the glass ingredient by ingredient, rendered in HTML from one image.",
  },
  "history-of-ai": {
    title: "83 years of AI in under three minutes",
    text: "Research, script, animation and real recorded sounds: all 5,160 frames coded by Claude from one prompt.",
  },
  "how-llms-work-fable": {
    title: "How LLMs work, as a motion graphic",
    text: "Tokens, embeddings, attention and transformer layers, each its own scene, from Matthew Berman's Fable 5.2 test.",
  },
  "white-russian-recipe": {
    title: "A White Russian in a hand-drawn style",
    text: "From a sketch and one prompt, a 1080p MP4 about 25 minutes later: one HTML file of SVG and plain JavaScript, no animation library.",
  },
};

const enLabels: MotionLabels = {
  likes: "likes",
  views: "views",
  prompt: "Show the prompt (verbatim)",
  alt: (title) => `Still from the video: ${title}`,
};

export const opusMotionGraphics: Partial<Record<"en", GuideCopy>> = {
  en: {
    meta: {
      title: "Opus 5.5 Motion Graphics: 43 Examples and Their Prompts",
      description:
        "Motion graphics videos made with Claude Opus 5.5: launch films, logo reveals, kinetic type and explainers, each with the maker's prompt, likes and views. Plus the prompt everyone copied and how to make one in Claude Code.",
    },
    breadcrumb: "Opus 5.5 motion graphics",
    parent: { name: "Blog", href: "/blog" },
    article: { published: "2026-11-12" },
    hero: {
      kicker: "Blog · Claude Opus 5.5",
      title: "Opus 5.5 motion graphics: 43 examples and the prompts behind them",
      lead: "Since Claude Opus 5.5 came out, people have been asking it for motion graphics and posting the results: launch films, logo reveals, kinetic type, recipe explainers. Opus writes each one as code and renders it to an MP4. We watched them all and kept the 43 best, each with the maker's prompt.",
      cta: "Get started",
      secondary: "See the examples",
      secondaryHref: "#launch-films",
    },
    sections: [
      {
        kind: "text",
        id: "how-it-works",
        title: "How Claude makes a motion graphics video",
        text: [
          "No video model is involved. Opus writes the animation as code (an HTML page with SVG and JavaScript, a React or [Remotion](https://www.remotion.dev) project, sometimes Three.js), steps a headless browser through it frame by frame and pipes the frames into ffmpeg. Music and sound effects are synthesized in code too.",
          "Because every frame is a function of time, loops close perfectly and sound lands on the exact frame. It also means text stays sharp and real: product names, prices and UI copy come out spelled right.",
        ],
        points: [
          "Deedy Das's launch film used only JavaScript, Playwright and ffmpeg, and cost about $2 of API time.",
          "Ethan Mollick's recursion video drew every scene in React and SVG and synthesized its music in Python.",
          "Sarutobi Sasuke's cocktail explainer is one HTML file of SVG and plain JavaScript with no animation library, finished in about 25 minutes.",
        ],
      },
      {
        kind: "steps",
        id: "make-one",
        title: "How to make one with Claude Code",
        steps: [
          {
            title: "Start Claude Code on Opus 5.5 in an empty folder",
            text: "Several makers said they installed no skills or plugins: Opus picks its own tools and installs what it needs.",
            code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
          },
          {
            title: "Give it the prompt and your product",
            text: "Add your site so it can read the pages and write the script itself. A logo file, a screenshot or a reference video helps it match your look.",
            code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
          },
          {
            title: "Let it render",
            text: "Expect a few minutes to an hour and a half, depending on length and effort. Ask it to tell you where the MP4 is saved.",
          },
          {
            title: "Watch it and say what's wrong",
            text: "Sacha Arbonel's first cut was too fast and the music was weak; one blunt follow-up made it much better. Ask for a slower pace, a royalty-free track or another aspect ratio.",
          },
        ],
      },
      {
        kind: "text",
        id: "the-prompt",
        title: "The prompt everyone copied",
        text: [
          `Many of the videos below start from the same short prompt that went around X: \`${basePrompt}\`. What makers added to it:`,
        ],
        points: [
          "Your product or site: \"for <your url>\", or \"visit the pages first to learn about the product, then write the video content yourself\".",
          "A frame of reference: \"like it's your showreel\", \"go all out\", \"a premium developer-tool launch film\", \"Apple-style\".",
          "A mood or a sound: \"psychedelic and hypnotic\", or \"use the Oppenheimer theme music as inspiration, but compose it yourself\".",
          "A guardrail: \"avoid the frames and texts on the corners which are typical AI-made giveaways\".",
          "A reference: a logo, one image, a hand-drawn sketch or another video to match.",
        ],
      },
      ...motionSections("en", enText, enLabels, {
        launch: { title: "Product launch films", text: "Launch films, milestone videos and pitches for real products, most from a single prompt." },
        brand: { title: "Logo reveals and brand films", text: "Stings and ads built from a logo, a reference image or a famous ad." },
        showreel: { title: "Showreels and kinetic type", text: "Opus showing off as a motion designer: type, loops and pure motion." },
        explainer: { title: "Explainers", text: "Recipes, history and computer science, explained in motion." },
      }, "Watch the original post"),
      {
        kind: "text",
        id: "more",
        title: "More videos and the full list",
        text: [
          "The full list, with three stills per video and every prompt, is on GitHub: [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
          "For 3D worlds and short films made with Claude's newest model, see [Claude Fable 5.2 videos on GitHub](https://github.com/ummydev/awesome-claude-fable-videos), and our guide to [Claude Fable 5.2](/blog/claude-fable-5-2) for what changed and how it compares with Opus 5.5.",
        ],
      },
    ],
    howTo: { section: "make-one", name: "Make a motion graphics video with Claude Opus 5.5 in Claude Code" },
    mid: {
      title: "Want a launch film every time you ship?",
      text: "A Crewmark employee runs on your own Claude Code: give it the release notes and it can render the video while you get on with the launch.",
      button: "Get started",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Can Claude Opus 5.5 make videos?",
          a: "Yes, by writing code. It builds the animation as a web page or a Remotion project and renders it frame by frame to an MP4, with music it synthesizes itself. It doesn't generate footage the way a video model does, which is why text, numbers and UI come out crisp.",
        },
        {
          q: "Do I need a skill, Remotion or After Effects?",
          a: "No. Several makers said they used plain Claude Code with no skills: Opus chose the tools itself, usually Playwright or headless Chrome plus ffmpeg, sometimes Remotion.",
        },
        {
          q: "How long does it take and what does it cost?",
          a: "From about a minute and $2 (Deedy Das) to an hour and a half of rendering and $14 on extra-high effort (monokern). Most makers reported one prompt and a few minutes to an hour.",
        },
        {
          q: "Where does the music come from?",
          a: "Opus usually composes and synthesizes it in code, in Python or JavaScript, and times the hits to the cuts. A few makers asked it to use a royalty-free track instead.",
        },
        {
          q: "Can I use these prompts?",
          a: "The prompts are the makers' own, quoted from their posts. Try them on your own product; the videos themselves belong to their makers.",
        },
      ],
    },
    cta: {
      title: "Give the video to an AI employee.",
      text: "Crewmark turns Claude Code and Codex sessions into AI employees with roles, goals, working hours and a heartbeat.",
      button: "Get started",
    },
    checked: "Likes, views and prompts checked on each original post on X or Xiaohongshu on November 12, 2026.",
    disclaimer:
      "The videos and prompts belong to their makers; every card links to the original post. Crewmark is an independent product, not affiliated with or endorsed by Anthropic. Claude, Claude Opus, Claude Fable and Claude Code are trademarks of Anthropic.",
  },
};
