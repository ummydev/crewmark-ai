import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Expo 공식 스킬 (Claude Code 플러그인)
/plugin install expo@claude-plugins-official

# Vercel의 React Native 규칙
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Flutter 팀의 스킬
npx skills add flutter/agent-plugins

# 어떤 프레임워크에서든 쓰는 Apple 디자인 리뷰
npx skills add dickwu/apple-design-skill

# React Native와 Expo용 Mobile Taste Skill
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "모바일 앱 디자인·개발용 Claude 스킬 추천 (2026)",
    description:
      "2026년 모바일 앱을 위한 최고의 Claude Code 스킬을 플랫폼별로 정리했어요. React Native는 Expo와 Vercel, iOS는 SwiftUI Pro와 SwiftUI Expert, Flutter 팀의 스킬, Apple 디자인 리뷰 등과 설치 명령어까지.",
  },
  breadcrumb: "모바일 앱 스킬",
  parent: { name: "Claude 스킬", href: "/skills" },
  hero: {
    kicker: "Claude 스킬 · 모바일 앱",
    title: "모바일 앱 디자인과 개발을 위한 최고의 Claude 스킬",
    lead: "모바일 스킬은 Claude Code(또는 Codex, Cursor 등 에이전트)에게 휴대폰용 앱을 만드는 법을 가르치는 SKILL.md 파일이에요. 플랫폼의 디자인 규칙, 모델이 학습된 뒤 바뀐 API, 에이전트가 SwiftUI, React Native, Flutter에서 흔히 저지르는 실수를 알려 줘요. 대부분 한 플랫폼을 다루니, 출시하는 플랫폼에 맞춰 고르세요. 2026년에 설치할 만한 스킬을 플랫폼별로 묶어 각 프로젝트 저장소를 바탕으로 정리했어요.",
    cta: "시작하기",
    secondary: "스킬 비교하기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "용도별 추천",
      points: [
        "React Native와 Expo: 빌드와 출시엔 Expo 공식 스킬, 성능엔 Vercel의 react-native-skills나 Callstack의 스킬, AI가 만든 티가 나지 않는 화면엔 Mobile Taste Skill.",
        "SwiftUI와 iOS: 현대적이고 접근성 좋은 SwiftUI엔 Paul Hudson의 SwiftUI Pro, 상태와 성능엔 Antoine van der Lee의 SwiftUI Expert, 아이디어부터 App Store까지는 Claude Code Apple Skills.",
        "Flutter: 아키텍처, 레이아웃, 라우팅, 테스트를 다루는 Flutter 팀의 공식 스킬.",
        "어떤 프레임워크든 디자인: Apple Design Skill은 SwiftUI, Flutter, React Native 등에서 디자인을 Apple의 Human Interface Guidelines에 비춰 리뷰해요. UI UX Pro Max는 스타일, 팔레트, 폰트를 골라 줘요.",
        "제출 전: App Store Review가 프로젝트를 App Store와 Google Play 규칙에 비춰 점검해요.",
        "앱처럼 느껴져야 하는 웹 앱: Emil Kowalski의 mobile-native가 휴대폰에서 웹 앱 티를 내는 CSS와 메타 태그를 고쳐요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "모바일 앱 스킬 비교",
      text: [
        "스타 수와 라이선스는 2026년 11월 8일 GitHub API 기준이며 반올림했어요. 스킬이 여러 개 든 저장소는 저장소 전체의 스타 수예요.",
      ],
      headers: ["스킬", "플랫폼", "잘하는 일", "스타", "라이선스"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "웹, 모바일, 데스크톱", "스타일, 팔레트, 폰트 조합, UX 규칙", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "모바일 웹, PWA", "휴대폰에서 웹 앱을 네이티브처럼 느껴지게", "~54k (저장소)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "리스트, 애니메이션, 내비게이션, UI 성능 규칙", "~34k (저장소)", "MIT (README 기준)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "LLM이 SwiftUI에서 저지르는 실수 고치기; 접근성", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Expo 앱 빌드, 디자인, 출시: 라우터, 네이티브 UI, 애니메이션, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "상태, 성능, 내비게이션, Liquid Glass; Instruments 트레이스 도구", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (Flutter 팀)", "Flutter", "아키텍처, 반응형 레이아웃, 레이아웃 수정, 라우팅, 테스트, 현지화", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Apple 가이드라인 123페이지에 비춰 디자인 리뷰", "~3k", "명시 안 됨"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "성능, 내비게이션, 업그레이드, 마이그레이션, 기기에서 테스트", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "아이디어부터 App Store까지 165개 스킬, 그중 8개가 디자인용", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Sleek의 AI 서비스가 디자인한 화면을 코드로 구현", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "모두 (React와 Tailwind로 목업)", "유명 앱에서 뽑은 디자인 규칙: 색, 8포인트 그리드, 엄지 영역", "~500", "명시 안 됨"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "최신 Apple API: SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "모두", "제출 전에 App Store와 Google Play 규칙에 비춰 앱 점검", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "AI가 만든 티가 나지 않는 화면, 내비게이션, 디자인 시스템", "~10", "저장소 참고"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "가장 많이 설치된 모바일 스킬",
      text: [
        "skills CLI를 통한 설치 수로, 2026년 11월 8일 skills.sh 레지스트리 기준이에요. `/plugin install`로 설치하는 플러그인은 대부분 여기에 잡히지 않으니 최소치로 보세요.",
      ],
      points: [
        "ui-ux-pro-max (웹과 모바일): 약 440,000",
        "vercel-react-native-skills: 약 270,000",
        "mobile-native (Emil Kowalski): 약 116,000",
        "expo-dev-client, Expo 스킬 중 가장 많이 설치됨: 약 74,000",
        "flutter-apply-architecture-best-practices, Flutter 팀 스킬 중 가장 많이 설치됨: 약 45,000",
        "swiftui-pro (Paul Hudson): 약 37,000",
        "swiftui-expert-skill (Antoine van der Lee): 약 36,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "모바일 앱을 위한 Claude Code 설정법",
      steps: [
        {
          title: "플랫폼별로 고르기: 만드는 스킬 하나, 디자인하는 스킬 하나",
          text: "Expo라면 Expo 스킬과 Mobile Taste Skill, SwiftUI라면 SwiftUI Pro나 SwiftUI Expert와 Apple Design Skill, Flutter라면 Flutter 팀의 스킬과 Apple Design Skill이나 UI UX Pro Max. 둘 다 스타일을 정하려는 스킬끼리는 충돌해요.",
          code: install,
        },
        {
          title: "브리프와 참고 앱 주기",
          text: "앱의 대상, 중요한 화면 서너 개, 느낌이 마음에 드는 앱 하나를 알려 주세요. Mobile Taste Skill은 에이전트가 코드를 쓰기 전에 앱의 성격(종류, 대상, 느낌)을 확정하고 내비게이션을 계획하게 해요.",
        },
        {
          title: "코드가 아니라 시뮬레이터에서 확인하기",
          text: "iOS 시뮬레이터, Android 에뮬레이터, Expo Go에서 앱을 실행하고 실제 화면을 여러 크기로 보세요. Callstack의 agent-device 스킬을 쓰면 에이전트가 기기를 조작해 자기 작업을 직접 확인해요.",
        },
        {
          title: "디자인 시스템을 저장소에 저장하기",
          text: "Mobile Taste Skill은 MOBILE-DESIGN.md를 쓰고, Expo에는 expo-design-system 스킬이 있어요. 결과를 저장소에 두면 이후 세션과 다른 에이전트도 같은 색, 서체, 여백을 따라요. [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
        },
      ],
      source: { label: "출처: Expo의 에이전트 스킬", href: expo },
    },
    {
      kind: "text",
      title: "설치 전에 알아 둘 점",
      points: [
        "Sleek을 제대로 쓰려면 유료 계정이 필요해요. 스킬에 따르면 무료 계정은 디자인 한 번 정도의 체험 크레딧을 받고, Pro는 월 $69예요. 모든 브리프는 sleek.design으로 전송돼요.",
        "Expo의 EAS 스킬은 Expo의 호스팅 빌드·업데이트 서비스를 쓰고, 각 Expo 스킬은 에이전트에게 Expo의 에이전트 CLI로 피드백을 보내도록 요청해요.",
        "SwiftUI Expert의 트레이스 도구에는 Xcode의 xctrace와 Python 3가 필요해요. 내 컴퓨터에서 Instruments 트레이스를 기록하고 분석해요.",
        "Claude Code Apple Skills는 버전 고정 없이 main 브랜치를 따라가고, 자체 면책 문구에서 스킬을 Claude Code의 도움으로 작성해 부정확한 내용이 있을 수 있다고 밝혀요.",
        "Emil Kowalski의 mobile-native는 휴대폰의 웹 앱과 PWA용이고, 네이티브 앱용이 아니에요.",
        "모두 Apple이나 Google이 만든 게 아니며, App Store Review가 승인을 보장하지도 않아요. 레지스트리에는 스타가 적은 저장소 아래 Sleek의 design-mobile-apps가 약 130만 설치로 올라 있지만, 확인할 수 없어서 위 목록에 넣지 않았어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스킬에 매일 일하는 앱 디자이너를 붙여 주세요",
      text: [
        "스킬은 한 세션을 모바일 작업에 더 능숙하게 만들어요. Crewmark는 Claude Code나 Codex를 AI 앱 디자이너로 바꿔요. 주 3개 화면 다듬기 같은 목표, 근무 시간, 고칠 화면이 쌓인 보드를 갖고, 하트비트로 깨어나 시뮬레이터 스크린샷이 담긴 풀 리퀘스트를 열어요.",
      ],
      steps: [
        {
          title: "앱 디자이너 직무 채용하기",
          text: "브리프, 목표, 루틴이 미리 설정돼 있어요. [AI 앱 디자이너](/ai-employees/app-designer)와 [AI 소프트웨어 엔지니어](/ai-employees/software-engineer)를 참고하세요.",
        },
        {
          title: "모바일 스킬을 저장소에 설치하기",
          text: "직원은 다른 세션과 똑같이 `.claude/skills`의 스킬을 사용해요. 웹과 UI 작업은 [웹사이트 디자인을 위한 최고의 Claude 스킬](/skills/website-design)을 참고하세요.",
        },
        {
          title: "프롬프트 말고 풀 리퀘스트 검토하기",
          text: "마음에 드는 화면은 승인하고, 수정은 보드에서 요청하세요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "스킬로 모바일 앱 작업용 Claude Code 설정하기" },
  mid: {
    title: "이 스킬을 매일 돌리는 앱 디자이너가 필요하세요?",
    text: "Crewmark의 AI 앱 디자이너는 하트비트에 맞춰 내 코드 안에서 일하고, 스크린샷이 담긴 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude 모바일 앱 스킬 자주 묻는 질문",
    items: [
      {
        q: "모바일 앱 디자인에 가장 좋은 Claude 스킬은 뭔가요?",
        a: "플랫폼에 따라 달라요. React Native와 Expo는 Mobile Taste Skill과 Expo 공식 스킬, SwiftUI는 SwiftUI Pro나 SwiftUI Expert와 Apple Design Skill, 어떤 프레임워크든 시각적인 부분은 Apple Design Skill이나 UI UX Pro Max예요.",
      },
      {
        q: "React Native나 Expo용 공식 Claude 스킬이 있나요?",
        a: "Expo가 expo/skills를 공개했고 claude-plugins-official에서 플러그인으로도 제공해요. Vercel과 Callstack도 React Native 스킬을 공개했어요. 모두 Anthropic이 만든 건 아니에요.",
      },
      {
        q: "SwiftUI와 iOS에 가장 좋은 Claude Code 스킬은 뭔가요?",
        a: "Paul Hudson의 SwiftUI Pro는 iOS 26과 Swift 6.4, 그리고 LLM이 SwiftUI에서 저지르는 실수를 다뤄요. Antoine van der Lee의 SwiftUI Expert는 상태, 성능, Liquid Glass를 다뤄요. 둘 다 플러그인이나 skills CLI로 설치해요.",
      },
      {
        q: "Claude Code용 Flutter 스킬이 있나요?",
        a: "네. Flutter 팀이 flutter/agent-plugins를 공개했어요. 아키텍처, 반응형 레이아웃, 레이아웃 수정, 라우팅, 현지화, 테스트 스킬이 들어 있고 Dart와 Flutter MCP 도구도 함께 제공해요.",
      },
      {
        q: "Claude Code가 모바일 앱 UI를 디자인할 수 있나요?",
        a: "디자인 스킬이 있으면 없을 때보다 훨씬 잘해요. 스킬이 플랫폼 규칙과 방향을 알려 주거든요. 코드만으로는 여백이나 터치 영역 문제가 보이지 않으니 시뮬레이터나 휴대폰에서 화면을 확인하세요.",
      },
      {
        q: "이 모바일 스킬들은 Codex와 Cursor에서도 쓸 수 있나요?",
        a: "대부분 쓸 수 있어요. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill, Callstack의 스킬은 Codex나 Cursor 사용법을 문서화했고, skills CLI는 SKILL.md 스킬을 수십 개 에이전트에 설치해요.",
      },
    ],
  },
  cta: {
    title: "믿을 수 있는 스킬을 갖춘 앱 디자이너를 보드에 두세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 각 스킬의 GitHub 저장소, GitHub API, skills.sh 레지스트리로 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, Apple, Google이나 여기 소개한 스킬의 작성자와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
