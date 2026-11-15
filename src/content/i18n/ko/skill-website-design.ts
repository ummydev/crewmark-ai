import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /skills/website-design; the English master is src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude 디자인 스킬 추천: 웹사이트·UI 디자인 (2026)",
    description:
      "웹사이트와 UI 디자인을 위한 최고의 Claude Code 스킬을 각 프로젝트 저장소를 바탕으로 비교해요. Anthropic의 frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop, Emil Kowalski의 스킬, shadcn 등과 설치 명령어까지 정리했어요.",
  },
  breadcrumb: "웹사이트·UI 디자인 스킬",
  parent: { name: "Claude 스킬", href: "/skills" },
  hero: {
    kicker: "Claude 스킬 · 디자인",
    title: "웹사이트·UI 디자인을 위한 최고의 Claude 스킬",
    lead: "디자인 스킬은 Claude Code(또는 Codex, Cursor 등 에이전트)에게 디자인하는 법을 알려 주는 SKILL.md 파일이에요. 어떤 색과 서체를 고를지, AI가 만든 티가 나는 어떤 기본값을 피할지, 완성이라고 하기 전에 결과를 어떻게 확인할지를 알려 줘요. 스킬이 없으면 에이전트는 흔히 똑같은 그라데이션과 카드 페이지를 내놓아요. 2026년에 설치할 만한 스킬과 각각 무엇을 가장 잘하는지, 설치 방법을 각 프로젝트 저장소를 바탕으로 정리했어요.",
    cta: "시작하기",
    secondary: "스킬 비교하기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "용도별 추천",
      points: [
        "새 랜딩 페이지나 회사 사이트: Taste Skill. 방향을 정하고 실제 사진을 쓰며, 넘기기 전에 브라우저에서 네 가지 너비로 페이지를 확인해요.",
        "이미 있는 UI 다듬기: Impeccable(polish, critique, audit 같은 명령어와 규칙 기반 'AI 티' 감지기) 또는 unslop(여백, 색, 아이콘, 문구, 서체 순서로 고쳐요).",
        "Anthropic의 무난한 기본 선택: 공식 스킬 frontend-design은 흔한 AI 디자인에서 벗어나도록 이끌어요.",
        "어떤 플랫폼이든 스타일, 팔레트, 폰트 고르기: UI UX Pro Max. 웹, 모바일, 데스크톱용 검색 가능한 디자인 데이터베이스예요.",
        "모션과 디테일: Emil Kowalski의 스킬.",
        "접근성과 UX 규칙으로 코드 검토하기: Vercel의 web-design-guidelines.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "웹사이트·UI 디자인 스킬 비교",
      text: [
        "스타 수와 라이선스는 2026년 11월 8일 GitHub API 기준이며 반올림했어요. 스킬이 여러 개 든 저장소는 저장소 전체의 스타 수예요.",
      ],
      headers: ["스킬", "잘하는 일", "지원 도구", "스타", "라이선스"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (Anthropic)", "새 UI에 개성 있는 디자인; 먼저 토큰 체계를 설계", "Claude Code, Claude.ai", "~189k (저장소)", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "웹, 모바일, 데스크톱용 스타일, 팔레트, 폰트 조합, UX 규칙", "Claude Code, Cursor, Codex 외 약 20개", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "회사·마케팅 사이트, 실제 브라우저에서 확인", "Claude Code, Codex, skills CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "기존 인터페이스 비평과 다듬기; AI 티 감지기", "Claude Code, Codex, Cursor 등", "~105k", "Apache 2.0"],
        ["[Emil Kowalski의 스킬](https://github.com/emilkowalski/skills)", "애니메이션, 마감, 컴포넌트 디테일", "skills CLI로 모든 에이전트", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) (Vercel)", "100개 이상의 접근성·UX 규칙으로 UI 코드 감사", "skills CLI로 모든 에이전트", "~34k (저장소)", "MIT (README 기준)"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "React 앱에서 shadcn/ui 컴포넌트를 올바르게 사용", "skills CLI로 모든 에이전트", "~128k (저장소)", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "프롬프트 하나로 페이지, 앱 프로토타입, 슬라이드, 모션까지; 중국어로 작성됨", "Claude Code, Cursor, Codex 등", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "AI 티 나는 UI를 단계별로 디자인된 인터페이스로", "Claude Code, Codex", "~11k", "CC BY 4.0"],
        ["[Stitch 스킬](https://github.com/google-labs-code/stitch-skills) (Google)", "Stitch에서 디자인한 뒤 React나 React Native로 구현", "Claude Code, Cursor, Codex; Stitch MCP 필요", "~9k", "Apache 2.0"],
        ["[Figma 스킬](https://github.com/figma/mcp-server-guide)", "Figma 디자인을 코드로, Figma 안에서 디자인 시스템 만들기(베타)", "Claude Code, Cursor; Figma MCP 필요", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "디자인 스킬 설치하고 사용하는 법",
      steps: [
        {
          title: "전부 말고 한두 개만 설치하기",
          text: "저마다 방향을 정하려는 스킬끼리는 충돌해요. 디자인하는 스킬 하나(frontend-design, Taste Skill, UI UX Pro Max)와, 원한다면 검토하는 스킬 하나(Impeccable, unslop, web-design-guidelines)를 고르세요.",
          code: install,
        },
        {
          title: "브리프 주기",
          text: "페이지의 목적, 대상, 마음에 드는 사이트 한두 개를 알려 주세요. 대부분의 스킬은 먼저 방향을 묻고, 결과는 브리프가 구체적인 만큼만 구체적이에요.",
        },
        {
          title: "스스로 결과를 확인하게 하기",
          text: "Taste Skill은 페이지를 네 가지 너비로 렌더링하고 마감 검사(finish gate)를 실행해요. Impeccable의 감지기는 `npx impeccable detect src/`로 62개 규칙을 돌려요. 이런 검사는 켜 두고, 스크린샷은 직접 확인하세요.",
        },
        {
          title: "결과를 디자인 시스템으로 저장하기",
          text: "여러 스킬이 DESIGN.md를 써요(Impeccable, Taste Skill, Stitch). 이 파일을 저장소에 두면 이후 세션과 다른 에이전트도 같은 색, 서체, 여백을 따라요. [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
        },
      ],
      source: { label: "출처: Anthropic의 frontend-design 스킬", href: anthropic },
    },
    {
      kind: "text",
      title: "설치 전에 알아 둘 점",
      points: [
        "훅을 추가하거나 엔진을 내려받는 스킬도 있어요. Impeccable은 명령어 훅을 설치하고 텔레메트리가 기본으로 켜져 있어요(`DO_NOT_TRACK=1`로 끌 수 있어요). Taste Skill은 마감 검사를 Stop 훅으로 실행하며 Node 22+와 Chrome이 필요해요.",
        "README에 따르면 Taste Skill로 전체 빌드를 하면 30–45분, 수십만 토큰이 들 수 있어요.",
        "UI UX Pro Max는 Python 3가 필요하고 유료 프리미엄 등급을 판매해요. 공개된 스킬은 MIT예요.",
        "unslop은 CC BY 4.0이에요. 글을 재사용하면 작성자를 표기하세요. 이름이 같은 텍스트용 저장소와 헷갈리지 마세요.",
        "Stitch와 Figma 스킬은 각자의 MCP 서버와 계정이 필요해요. Figma 캔버스 쓰기는 베타이고 무료 시트에서는 제한돼요.",
        "저희 팀 이야기: Crewmark 제품 화면에 Taste Skill을 썼고, unslop에 관한 짧은 영상도 만들었어요. 자매 프로젝트 [pretty-ui](https://github.com/ummydev/pretty-ui)는 같은 일을 하는 더 새롭고 작은 스킬이에요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스킬에 매일 일하는 디자이너를 붙여 주세요",
      text: [
        "스킬은 한 세션의 디자인을 더 좋게 만들어요. Crewmark는 Claude Code나 Codex를 AI UI 디자이너로 바꿔요. 주 3개 화면 다듬기 같은 목표, 근무 시간, 고칠 화면이 쌓인 보드를 갖고, 하트비트로 깨어나 전후 스크린샷이 담긴 풀 리퀘스트를 열어요.",
      ],
      steps: [
        {
          title: "UI 디자이너 직무 채용하기",
          text: "브리프, 목표, 루틴이 미리 설정돼 있어요. [AI UI 디자이너](/ai-employees/ui-designer)와 [AI 앱 UI 디자이너](/ai-employees/app-designer)를 참고하세요.",
        },
        {
          title: "디자인 스킬을 저장소에 설치하기",
          text: "직원은 다른 세션과 똑같이 `.claude/skills`의 스킬을 사용해요.",
        },
        {
          title: "프롬프트 말고 풀 리퀘스트 검토하기",
          text: "마음에 드는 화면은 승인하고, 수정은 보드에서 요청하세요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude 디자인 스킬 설치하고 사용하기" },
  mid: {
    title: "이 스킬을 매일 돌리는 디자이너가 필요하세요?",
    text: "Crewmark의 AI UI 디자이너는 하트비트에 맞춰 내 코드 안에서 일하고, 스크린샷이 담긴 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude 디자인 스킬 자주 묻는 질문",
    items: [
      {
        q: "웹사이트 디자인에 가장 좋은 Claude 스킬은 뭔가요?",
        a: "새 사이트라면 Taste Skill이나 Anthropic의 frontend-design, 기존 UI를 다듬는다면 Impeccable이나 unslop, 여러 플랫폼에 걸쳐 스타일과 팔레트를 고른다면 UI UX Pro Max예요. 대부분 디자인용 하나와 검토용 하나를 설치해요.",
      },
      {
        q: "공식 Claude 디자인 스킬이 있나요?",
        a: "네. Anthropic이 anthropics/skills에 frontend-design을 공개했고, claude-plugins-official에서 플러그인으로도 제공해요. Apache 2.0이고, 흔한 AI 디자인 기본값을 피하는 데 초점을 둬요.",
      },
      {
        q: "Claude Code에 스킬은 어떻게 설치하나요?",
        a: "플러그인 마켓플레이스(`/plugin marketplace add owner/repo` 후 `/plugin install`)나 skills CLI(`npx skills add owner/repo`)를 쓰거나, 스킬 폴더를 `.claude/skills/`에 복사하세요.",
      },
      {
        q: "이 스킬들은 Codex와 Cursor에서도 쓸 수 있나요?",
        a: "대부분 쓸 수 있어요. UI UX Pro Max, Impeccable, Taste Skill, Huashu Design은 Codex 사용법을 문서화했고, skills CLI는 SKILL.md 스킬을 Cursor, Codex 외 약 75개 에이전트에 설치해요.",
      },
      {
        q: "Claude 디자인 스킬은 무료인가요?",
        a: "여기 소개한 스킬은 오픈소스예요(MIT, Apache 2.0, CC BY 4.0). 다만 주변 제품 중에는 유료인 것도 있어요. UI UX Pro Max의 프리미엄 등급이 그렇고, Stitch와 Figma는 각자 계정이 필요해요.",
      },
      {
        q: "Impeccable과 Taste Skill은 뭐가 다른가요?",
        a: "Taste Skill은 새 회사·마케팅 사이트를 만들고 실제 브라우저에서 확인해요. Impeccable은 이미 있는 인터페이스에 강하고, 비평·감사·다듬기 명령어와 규칙 기반 AI 티 감지기를 갖췄어요.",
      },
    ],
  },
  cta: {
    title: "믿을 수 있는 스킬을 갖춘 디자이너를 보드에 두세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 각 스킬의 GitHub 저장소와 GitHub API로 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 여기 소개한 스킬의 작성자와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
