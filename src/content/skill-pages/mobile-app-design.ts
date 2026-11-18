import type { GuideCopy } from "@/components/landing/guide-article";

// /skills/mobile-app-design (MC-197): "claude skills for mobile app development", "claude skills for mobile app
// design", "best claude skills for app design", "claude code skills for ios development", "claude skills for react
// native", "claude skills for flutter", "swiftui skill claude", "mobile app design skill claude" (Google autocomplete,
// 2026-11-08; development and design autocomplete about equally, so the page covers both, grouped by platform). Facts
// come from each project's README or SKILL.md and the GitHub API on 2026-11-08; install counts are from the skills.sh
// search API the same day. Stars are rounded; for repositories that hold many skills they belong to the whole
// repository. The registry lists Sleek's design-mobile-apps with ~1.28M installs under designed-by-ai/skills (28 stars);
// we couldn't verify that, so the page doesn't use the number. Crewmark's team hasn't used these mobile skills, so the
// copy doesn't say it has.

const expo = "https://github.com/expo/skills";

const install = `# Expo's official skills (Claude Code plugin)
/plugin install expo@claude-plugins-official

# Vercel's React Native rules
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# The Flutter team's skills
npx skills add flutter/agent-plugins

# Apple design review for any framework
npx skills add dickwu/apple-design-skill

# Mobile Taste Skill for React Native and Expo
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const mobileAppDesign: GuideCopy = {
  meta: {
    title: "Best Claude Skills for Mobile App Design & Development",
    description:
      "The best Claude Code skills for mobile apps in 2026, by platform: Expo and Vercel for React Native, SwiftUI Pro and SwiftUI Expert for iOS, the Flutter team's skills, Apple design review and more, with install commands.",
  },
  breadcrumb: "Mobile app skills",
  parent: { name: "Claude skills", href: "/skills" },
  hero: {
    kicker: "Claude skills · Mobile apps",
    title: "Best Claude skills for mobile app design and development",
    lead: "A mobile skill is a SKILL.md file that teaches Claude Code (or Codex, Cursor and other agents) how to build for phones: the platform's design rules, the APIs that changed since the model was trained, and the mistakes agents tend to make in SwiftUI, React Native or Flutter. Most are about one platform, so pick by the one you ship on. These are the skills worth installing in 2026, grouped by platform, from each project's own repository.",
    cta: "Get started",
    secondary: "Compare the skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Quick picks",
      points: [
        "React Native and Expo: Expo's official skills to build and ship, Vercel's react-native-skills or Callstack's skills for performance, and Mobile Taste Skill for screens that don't look AI-made.",
        "SwiftUI and iOS: Paul Hudson's SwiftUI Pro for modern, accessible SwiftUI, Antoine van der Lee's SwiftUI Expert for state and performance, and Claude Code Apple Skills to go from idea to the App Store.",
        "Flutter: the Flutter team's own skills for architecture, layouts, routing and tests.",
        "Design for any framework: Apple Design Skill reviews a design against Apple's Human Interface Guidelines, in SwiftUI, Flutter, React Native and more; UI UX Pro Max picks styles, palettes and fonts.",
        "Before you submit: App Store Review checks a project against App Store and Google Play rules.",
        "A web app that should feel like an app: Emil Kowalski's mobile-native fixes the CSS and meta tags that give it away on phones.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mobile app skills compared",
      text: [
        "Stars and licenses from the GitHub API on November 8, 2026, rounded. For repositories with many skills, stars are for the whole repository.",
      ],
      headers: ["Skill", "Platform", "Best for", "Stars", "License"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web, mobile, desktop", "Styles, palettes, font pairs and UX rules", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "Mobile web, PWAs", "Making a web app feel native on a phone", "~54k (repo)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "Performance rules for lists, animation, navigation and UI", "~34k (repo)", "MIT (per README)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "Fixing the mistakes LLMs make in SwiftUI; accessibility", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Building, designing and shipping Expo apps: router, native UI, animation, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "State, performance, navigation and Liquid Glass; Instruments trace tools", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (Flutter team)", "Flutter", "Architecture, responsive layouts, layout fixes, routing, tests, localization", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Reviewing a design against 123 pages of Apple's guidelines", "~3k", "Not stated"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "Performance, navigation, upgrades, migration and testing on a device", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "165 skills from idea to App Store, 8 of them for design", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Screens designed by Sleek's AI service, then built in code", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "Any (mockups in React and Tailwind)", "Design rules from well-known apps: color, 8-point grid, thumb zone", "~500", "Not stated"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "Current Apple APIs: SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "Any", "Checking an app against App Store and Google Play rules before submitting", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "Screens, navigation and a design system that don't look AI-generated", "~10", "See repo"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "The most installed mobile skills",
      text: [
        "Installs through the skills CLI, from the skills.sh registry on November 8, 2026. Plugins installed with `/plugin install` mostly don't show up here, so treat these as a floor.",
      ],
      points: [
        "ui-ux-pro-max (web and mobile): about 440,000",
        "vercel-react-native-skills: about 270,000",
        "mobile-native (Emil Kowalski): about 116,000",
        "expo-dev-client, the most installed of Expo's skills: about 74,000",
        "flutter-apply-architecture-best-practices, the most installed of the Flutter team's: about 45,000",
        "swiftui-pro (Paul Hudson): about 37,000",
        "swiftui-expert-skill (Antoine van der Lee): about 36,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "How to set up Claude Code for a mobile app",
      steps: [
        {
          title: "Pick by platform: one skill that builds, one that designs",
          text: "For Expo, the Expo skills plus Mobile Taste Skill; for SwiftUI, SwiftUI Pro or SwiftUI Expert plus Apple Design Skill; for Flutter, the Flutter team's skills plus Apple Design Skill or UI UX Pro Max. Two skills that both want to set the style will fight.",
          code: install,
        },
        {
          title: "Give it the brief and a reference app",
          text: "Say who the app is for, the three or four screens that matter and an app whose feel you like. Mobile Taste Skill makes the agent commit to an app read (kind, audience, feel) and plan the navigation before it writes any code.",
        },
        {
          title: "Check it on a simulator, not in the code",
          text: "Run the app in the iOS Simulator, an Android emulator or Expo Go and look at real screens at more than one size. Callstack's agent-device skill lets the agent drive a device and check its own work.",
        },
        {
          title: "Save the design system in the repository",
          text: "Mobile Taste Skill writes a MOBILE-DESIGN.md and Expo has an expo-design-system skill. Keep the result in the repository so later sessions, and other agents, follow the same colors, type and spacing. See the [CLAUDE.md guide](/blog/claude-md).",
        },
      ],
      source: { label: "Source: Expo's agent skills", href: expo },
    },
    {
      kind: "text",
      title: "Things to know before installing",
      points: [
        "Sleek needs a paid account for real use: free accounts get trial credits for about one design run, and Pro is $69 a month, per its skill. Every brief goes to sleek.design.",
        "Expo's EAS skills use Expo's hosted build and update services, and each Expo skill asks the agent to send feedback through Expo's agent CLI.",
        "SwiftUI Expert's trace tools need Xcode's xctrace and Python 3; they record and analyse Instruments traces on your machine.",
        "Claude Code Apple Skills follows its main branch with no version pins, and its own disclaimer says the skills were written with Claude Code's help and may contain inaccuracies.",
        "Emil Kowalski's mobile-native is for web apps and PWAs on phones, not for native apps.",
        "None of these are made by Apple or Google, and App Store Review can't promise approval. The registry also lists Sleek's design-mobile-apps with about 1.3 million installs under a repository with few stars; we couldn't verify that number, so it isn't in the list above.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "With Crewmark",
      title: "Give the skills an app designer that works every day",
      text: [
        "A skill makes one session better at mobile work. Crewmark turns Claude Code or Codex into an AI app designer with a goal, such as three polished screens a week, working hours and a board of screens to fix; it wakes on a heartbeat and opens pull requests with simulator screenshots.",
      ],
      steps: [
        {
          title: "Hire the app designer role",
          text: "Its brief, goal and routine come set up; see the [AI app designer](/ai-employees/app-designer) and the [AI software engineer](/ai-employees/software-engineer).",
        },
        {
          title: "Install your mobile skills in the repository",
          text: "The employee uses the skills in `.claude/skills` like any session does. For web and UI work, see the [best Claude skills for website design](/skills/website-design).",
        },
        {
          title: "Review pull requests, not prompts",
          text: "Approve the screens you like; ask for changes on the board. Read [what an AI employee is](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Set up Claude Code for mobile app work with skills" },
  mid: {
    title: "Want an app designer that runs these skills every day?",
    text: "Crewmark's AI app designer works in your code on a heartbeat and opens pull requests with screenshots.",
    button: "Get started",
  },
  faq: {
    title: "Claude mobile app skills FAQ",
    items: [
      {
        q: "What is the best Claude skill for mobile app design?",
        a: "It depends on the platform. For React Native and Expo, Mobile Taste Skill with Expo's own skills; for SwiftUI, SwiftUI Pro or SwiftUI Expert with Apple Design Skill; for any framework, Apple Design Skill or UI UX Pro Max for the visual side.",
      },
      {
        q: "Is there an official Claude skill for React Native or Expo?",
        a: "Expo publishes expo/skills, also available as a plugin in claude-plugins-official, and Vercel and Callstack publish React Native skills. None of them are made by Anthropic.",
      },
      {
        q: "What's the best Claude Code skill for SwiftUI and iOS?",
        a: "Paul Hudson's SwiftUI Pro targets iOS 26 and Swift 6.4 and the mistakes LLMs make in SwiftUI; Antoine van der Lee's SwiftUI Expert covers state, performance and Liquid Glass. Both install as plugins or with the skills CLI.",
      },
      {
        q: "Is there a Flutter skill for Claude Code?",
        a: "Yes. The Flutter team publishes flutter/agent-plugins, with skills for architecture, responsive layouts, layout fixes, routing, localization and tests, and it bundles the Dart and Flutter MCP tools.",
      },
      {
        q: "Can Claude Code design a mobile app UI?",
        a: "With a design skill it does much better than without one: the skill brings the platform's rules and a direction. Check the screens on a simulator or a phone, since the code alone won't show spacing and touch-target problems.",
      },
      {
        q: "Do these mobile skills work with Codex and Cursor?",
        a: "Most do. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill and Callstack's skills document Codex or Cursor, and the skills CLI installs SKILL.md skills into dozens of agents.",
      },
    ],
  },
  cta: {
    title: "Put an app designer on your board, with the skills you trust.",
    text: "Crewmark turns Claude Code, Codex, DeepSeek Harness and OpenCode sessions into AI employees with roles, goals, working hours and a heartbeat.",
    button: "Get started",
  },
  checked:
    "Checked against each skill's GitHub repository, the GitHub API and the skills.sh registry on November 8, 2026.",
  disclaimer:
    "Crewmark is an independent product, not affiliated with or endorsed by Anthropic, Apple, Google or the authors of the skills listed. Product names are trademarks of their owners.",
};
