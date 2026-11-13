import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "2026 Cursor 대안 추천 10가지: 무료, 오픈소스, 더 저렴한 도구 | Crewmark",
    description:
      "SpaceX에 합류한 Cursor가 Grok 중심 요금제로 바뀌었어요. Claude Code, Codex, GitHub Copilot, Devin Desktop(Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity, Junie까지 Cursor 대안 10가지를 가격과 무료 요금제와 함께 비교해요.",
  },
  breadcrumb: "Cursor 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · AI 코딩 도구",
    title: "2026년 최고의 Cursor 대안",
    lead: "Cursor는 2026년 8월 SpaceX의 일부가 되었고, 요금제는 이제 Grok 중심으로 짜여 있어요. $8 Plus 요금제는 Grok 모델만 제공하고, Claude, GPT, Gemini는 $30 요금제부터 API 정가로 따로 청구돼요. 처음 가입할 때 기대한 것과 다르다면 좋은 대안이 있어요. 이미 내고 있는 구독에 포함된 에이전트, 자체 AI를 갖춘 에디터, 내 API 키로 쓰는 오픈소스 도구예요. 2026년 11월 6일 기준으로 10가지 도구를 어떤 도구인지, 무료 요금제, 가격, 모델 면에서 비교해 드려요.",
    cta: "얼리 액세스 신청",
    secondary: "비교표로 이동",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Cursor 대안 비교",
      text: [
        "시작 가격은 각 업체 페이지에 나온 가장 저렴한 개인 유료 요금제의 월 요금(미국 달러)이에요. 'Claude 모델'은 요금제에 포함되든 내 키로 쓰든 Anthropic 모델을 쓸 수 있는지를 뜻해요.",
      ],
      headers: ["도구", "유형", "무료 옵션", "유료 시작가", "Claude 모델", "오픈소스"],
      rows: [
        ["Claude Code", "에이전트: 터미널, IDE, 데스크톱, 웹", "없음", "$20(Claude Pro)", "포함", "아니요"],
        ["OpenAI Codex", "에이전트: CLI, IDE, 데스크톱, 클라우드", "있음, ChatGPT Free", "$8(ChatGPT Go)", "없음", "CLI는 Apache-2.0"],
        ["GitHub Copilot", "대부분의 IDE용 확장, CLI", "있음, 월 2,000회 자동 완성", "$10(Pro)", "있음, Opus는 Pro+($39)부터", "아니요"],
        ["Devin Desktop(구 Windsurf)", "IDE", "있음", "$20(Pro)", "있음", "아니요"],
        ["Zed", "네이티브 에디터", "있음, 내 키 사용 시", "$10(Pro)", "내 키 또는 외부 에이전트로", "예"],
        ["Cline", "VS Code 확장과 CLI", "무료, 모델 사용료만 지불", "개인 요금제 없음", "내 키로", "Apache-2.0"],
        ["Kilo Code", "VS Code·JetBrains 확장, CLI", "있음", "$19(Kilo Pass Starter)", "게이트웨이 또는 내 키로", "MIT"],
        ["OpenCode", "터미널 에이전트, 데스크톱, IDE", "있음", "표시 없음", "내 키로, Copilot이나 ChatGPT로 로그인 가능", "MIT"],
        ["Google Antigravity", "에이전트형 IDE, CLI", "있음", "Business 좌석당 $30부터", "유료 요금제에서", "아니요"],
        ["JetBrains Junie", "JetBrains IDE 속 에이전트, CLI", "있음, Junie Lite", "AI Pro, 표시가 $8.33", "있음, 내 키도 가능", "아니요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cursor 대안 고르는 방법",
      steps: [
        {
          title: "이미 내고 있는 구독부터 보기",
          text: "Claude Pro나 Max에는 Claude Code가, 모든 ChatGPT 요금제에는 Codex가 포함되고, 많은 회사가 이미 GitHub Copilot을 쓰고 있어요. 이미 돈을 내는 걸 쓰는 편이 새 도구에 API 요금까지 내는 것보다 대개 저렴해요.",
        },
        {
          title: "에디터인지 에이전트인지 정하기",
          text: "Cursor 같은 사용감(인라인 편집과 Tab 자동 완성이 있는 에디터)을 원한다면 Devin Desktop, Zed, VS Code의 Copilot, Antigravity를 보세요. 주로 에이전트에게 작업을 맡긴다면 Claude Code, Codex, OpenCode는 어느 터미널과 에디터에서나 동작해요.",
        },
        {
          title: "무료나 오픈소스를 원한다면",
          text: "Cline, Kilo Code, OpenCode, Zed는 오픈소스이고 내 API 키로 무료로 쓸 수 있어요. 모델 제공업체에 쓴 만큼만 내면 돼요.",
        },
        {
          title: "모델이 어디서 오는지 확인하기",
          text: "Claude를 매일 쓰고 싶다면 요금제에 포함된 도구(Claude Code, Copilot, Devin Desktop, Junie)를 고르면 토큰 단위 과금으로 인한 예상 밖 청구를 피할 수 있어요. 내 키를 쓰는 도구는 어떤 모델이든 정가로 쓸 수 있어요.",
        },
        {
          title: "규칙도 함께 옮기기",
          text: "이 도구들 상당수가 AGENTS.md를 읽기 때문에, `.cursor/rules`에서 옮기는 건 대부분 규칙을 파일 하나에 복사하는 일이에요. 파일 하나를 여러 에이전트에서 쓰는 방법은 [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
        },
      ],
      source: { label: "출처: GitHub Copilot 요금제와 각 업체 사이트", href: copilot },
    },
    {
      kind: "text",
      title: "대안별 메모",
      points: [
        "Claude Code: Anthropic의 에이전트로, Claude Pro($20, 연간 결제 시 $17), Max($100), Ultra($200)에 포함되고 API 키로도 실행돼요. [Claude Code vs Cursor](/blog/claude-code-vs-cursor)에서 비교해 보세요.",
        "OpenAI Codex: 모든 ChatGPT 요금제에 포함돼요. Free(GPT-6 Luna), Go($8)부터 Plus($20), Pro($100부터)까지. [Claude Code vs Codex](/blog/claude-code-vs-codex)를 참고하세요.",
        "GitHub Copilot: Free, Pro($10), Pro+($39), Max($100). VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse, Zed에서 동작하고 Claude, GPT, Gemini 등 여러 모델을 쓸 수 있어요.",
        "Devin Desktop: Cognition이 만든 Windsurf의 새 이름으로, windsurf.com은 이제 여기로 리디렉션돼요. Free, Pro($20), Max($200).",
        "Zed: macOS, Windows, Linux용 빠른 네이티브 에디터. 내 키나 Claude Code, Codex 같은 외부 에이전트로는 무료이고, 호스팅 모델은 $10 Pro.",
        "Cline: 오픈소스 VS Code 확장과 CLI. 무료이고, 내 키로 추론 비용만 내요.",
        "Kilo Code: 오픈소스(MIT)이며 지금은 Anaconda 소유. 내 키나 무료 모델로는 무료, Kilo Pass는 $19부터.",
        "OpenCode: 75개 이상의 모델 제공업체를 지원하는 오픈소스 터미널 에이전트. 무료이고, 기존 Copilot이나 ChatGPT 구독으로 로그인할 수 있어요.",
        "Google Antigravity: Google의 에이전트형 IDE와 CLI로, 개인은 무료예요. 유료 요금제에서는 Gemini 4 Argon과 Claude 모델이 추가돼요.",
        "JetBrains Junie: JetBrains IDE 안과 CLI에서 동작하는 JetBrains의 코딩 에이전트로, 무료 Lite 등급과 AI Pro, Ultimate 요금제가 있어요.",
        "제외한 도구: Roo Code(GitHub 저장소가 보관 처리됨), Gemini CLI(개인 사용은 2026년 6월 Antigravity CLI로 이전), Aider(2025년 8월 이후 릴리스 없음).",
      ],
    },
    {
      kind: "text",
      title: "Cursor에서 무엇이 바뀌었나",
      text: [
        "Cursor는 2026년 8월 14일 SpaceX의 인수가 완료되었다고 발표했어요. 가격 페이지에는 이제 Free, Plus($8, Grok 모델만), Premium($30, 클라우드 에이전트, 자동화, 코드 리뷰 포함, 서드파티 모델은 사용량에 따라 API 정가로 청구), Super($100), Ultra($200)가 있고, 타임라인 광고 감소 같은 X 기능도 함께 제공돼요. 사용량은 Grok과 공유하는 풀 하나로, 매주 초기화돼요. Cursor를 계속 쓴다면 그 안에서 Claude Code 확장이나 CLI를 내 Claude 요금제로 실행할 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "도구를 바꾸나요? 새 도구에 일을 맡기세요.",
      text: [
        "어떤 에이전트로 옮기든, 그 에이전트는 내 다음 프롬프트를 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간이 있는 AI 직원으로 바꾸고, 하트비트로 깨워 보드에서 다음 issue를 가져가게 해요. 이미 내고 있는 구독 그대로요.",
      ],
      steps: [
        {
          title: "역할과 목표 고르기",
          text: "소프트웨어 엔지니어, 리뷰어, SEO 작가: 직원마다 숫자로 적은 목표가 있어요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
        {
          title: "하트비트로 일 시작하기",
          text: "근무 시간 동안 15분, 30분, 60분마다 깨어나 다음 issue를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "여러 명을 동시에 돌리기",
          text: "각자에게 전용 worktree와 역할을 주세요. [Claude Code 오케스트레이션 도구](/blog/claude-code-orchestration-tools)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cursor 대안 고르기" },
  mid: {
    title: "Cursor에서 Claude Code, Codex, OpenCode로 옮기나요?",
    text: "Crewmark는 이들을 하트비트로 깨어나 다음 issue를 스스로 가져가는 AI 직원으로 바꿔요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Cursor 대안 자주 묻는 질문",
    items: [
      {
        q: "가장 좋은 Cursor 대안은 무엇인가요?",
        a: "Claude 요금제가 있다면 Claude Code, ChatGPT가 있다면 Codex예요. Cursor 같은 느낌의 에디터라면 Devin Desktop(구 Windsurf)이나 VS Code의 Copilot, 무료 오픈소스라면 내 키로 Cline, Kilo Code, OpenCode, Zed를 쓰세요.",
      },
      {
        q: "무료 Cursor 대안이 있나요?",
        a: "네. Cline, Kilo Code, OpenCode, Zed는 내 API 키로 무료로 쓸 수 있고, Copilot에는 월 2,000회 자동 완성이 되는 무료 등급이 있으며, Codex는 ChatGPT Free에서 동작하고, Antigravity와 Devin Desktop에도 무료 요금제가 있어요.",
      },
      {
        q: "오픈소스 Cursor 대안에는 어떤 게 있나요?",
        a: "Cline(Apache-2.0), Kilo Code(MIT), OpenCode(MIT), Zed가 오픈소스예요. Codex CLI도 오픈소스(Apache-2.0)예요.",
      },
      {
        q: "Cursor 가격은 왜 바뀌었나요?",
        a: "SpaceX가 Cursor를 인수한 뒤(2026년 8월 14일 발표) 요금제가 Grok 모델과 X를 묶은 구성으로 바뀌었어요. $8 Plus는 Grok만 쓸 수 있고, Claude 같은 서드파티 모델은 Premium($30)부터 API 정가로 따로 청구돼요.",
      },
      {
        q: "Windsurf는 어떻게 됐나요?",
        a: "Windsurf는 이제 Cognition이 만드는 Devin Desktop이라는 이름이에요. windsurf.com은 devin.ai/desktop으로 리디렉션돼요.",
      },
      {
        q: "가장 저렴한 Cursor 대안은 무엇인가요?",
        a: "내 키를 쓰는 도구(Cline, OpenCode, Kilo Code, Zed)는 모델 사용료 말고는 비용이 없어요. 요금제 중에서는 Codex가 ChatGPT Go로 $8부터, Copilot Pro가 $10이고, Claude가 포함된 걸 원한다면 Claude Pro가 $20이에요.",
      },
      {
        q: "Cursor 규칙을 그대로 쓸 수 있나요?",
        a: "대부분은요. AGENTS.md에 넣으면 Codex, Copilot, OpenCode 등이 읽어요. Claude Code는 CLAUDE.md의 `@AGENTS.md` 가져오기로 읽어요.",
      },
    ],
  },
  cta: {
    title: "새 코딩 에이전트, 같은 구독, 이제는 맡은 일까지.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 cursor.com과 각 대안의 공식 사이트, 가격 페이지 또는 GitHub 저장소와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Cursor, SpaceX 또는 여기 소개한 어떤 업체와도 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
