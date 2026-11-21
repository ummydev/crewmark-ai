import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/opencode; the English master is src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 가격: 무료 에이전트, Go $10, Go Plus $40 (2026)",
    description:
      "OpenCode 가격: MIT 에이전트는 무료이고 무료 모델도 있어요. OpenCode Go는 월 $10, Go Plus는 월 $40이고, 백만 토큰당 종량제나 내 키로도 쓸 수 있어요.",
  },
  breadcrumb: "OpenCode 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · OpenCode",
    title: "OpenCode 가격: 무료 에이전트, 그리고 모델 비용을 내는 네 가지 방법",
    lead: "OpenCode는 무료 오픈 소스(MIT) 코딩 에이전트예요. 계정 없이 쓸 수 있는 무료 모델이 일일 요청 한도 안에서 함께 제공돼요. 그 이상은 에이전트가 아니라 모델에 돈을 내요. 월 $10인 OpenCode Go나 월 $40인 Go Plus, 백만 토큰 단위로 청구되는 종량제 모델, 또는 ChatGPT Plus나 Pro, GitHub Copilot처럼 이미 가진 요금제나 API 키를 쓸 수 있어요. Enterprise는 영업팀을 통해요. 각 선택지와 비용, 그리고 Claude Code, Codex, Hermes Agent, OpenClaw와 비교한 OpenCode를 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenCode 요금제와 가격",
      text: [
        "[opencode.ai](https://opencode.ai)와 Go, 모델, Enterprise에 관한 콘솔 페이지에서 2026년 11월 13일에 확인했어요. 가격은 미국 달러 기준이에요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "OpenCode(오픈 소스)",
          "무료, MIT 라이선스",
          "터미널 UI, 데스크톱 앱, 웹 앱, SDK로 쓰는 에이전트. 로컬 모델을 포함해 200개 이상 제공자의 모델",
        ],
        ["무료 모델", "$0, 계정 불필요", "일일 요청 한도가 있는 무료 모델 세트"],
        [
          "OpenCode Go",
          "월 $10",
          "엄선된 모델과 5시간·주간·월간 허용량. 크레딧 충전 가능, 언제든 해지",
        ],
        [
          "Go Plus",
          "월 $40",
          "엄선된 모델과 5시간·주간·월간 허용량. 크레딧 충전 가능, 언제든 해지",
        ],
        ["종량제", "백만 토큰당", "쓰는 만큼 잔액에서 청구되는 모델"],
        [
          "내 요금제나 키",
          "해당 제공자에게 이미 내는 금액",
          "ChatGPT Plus나 Pro, GitHub Copilot으로 로그인하거나 내 API 키를 사용",
        ],
        ["Enterprise", "영업팀 문의", "OpenCode 영업팀을 통해 가격 책정"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "OpenCode에 실제로 내는 비용",
      points: [
        "에이전트는 무료. OpenCode는 MIT 라이선스이고, macOS, Windows, Linux용 CLI 바이너리와 데스크톱 앱(README에는 베타로 표기)이 있어요.",
        "무료 모델에는 일일 요청 한도가 있어요. 계정은 필요 없어요.",
        "Go 허용량은 모델마다 달라요. Go와 Go Plus에서는 허용량이 5시간, 주간, 월간 단위로 초기화돼요. 크레딧을 충전할 수 있고 언제든 해지할 수 있어요.",
        "종량제는 토큰 단위예요. 종량제 모델은 백만 토큰 단위로 잔액에서 청구돼요.",
        "또는 이미 내고 있는 요금제. ChatGPT Plus나 Pro, GitHub Copilot으로 로그인하세요. 내 API 키를 쓰면 사용량은 그 제공자가 청구해요. OpenCode는 Models.dev를 통해 로컬 모델을 포함한 200개 이상의 LLM 제공자와 함께 작동해요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 가격 vs 다른 코딩 에이전트",
      text: [
        "각 제품의 사이트에서 2026년 11월 13일에 확인한 시작 가격이며, 미국 달러 기준이에요.",
        "나란히 비교: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). 더 많은 선택지는 [OpenCode 대안](/blog/opencode-alternatives)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        [
          "OpenCode",
          "에이전트 무료, OpenCode Go 월 $10",
          "있음: 에이전트(MIT)와 일일 요청 한도가 있는 무료 모델",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "Claude Pro에 포함, 월 $20 또는 연간 결제 시 월 $17",
          "없음: Claude Free에는 미포함. 종량제 API 크레딧으로도 사용 가능",
        ],
        [
          "Codex",
          "ChatGPT Plus(월 $20)에 포함, 또는 OpenAI API 키로 API 가격",
          "CLI는 오픈 소스(Apache-2.0). 사용량은 ChatGPT 요금제나 API 키로 처리",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "에이전트 무료, 선택 사항인 Nous Portal Plus 월 $20",
          "있음: 에이전트(MIT), 그리고 $0인 Nous Portal Free(종량제, 무료 모델만)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "무료. 유료 등급이나 호스팅 서비스 없음",
          "있음: 프로젝트 전체(MIT). 모델 제공자 비용만 냄",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "OpenCode는 에이전트예요. Crewmark는 에이전트에게 일자리와 보드를 줘요.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code, Codex, OpenCode 같은 에이전트 대화로, 직무, KPI, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. OpenCode처럼 Crewmark도 모델 사용량을 청구하지 않아요. 비용은 에이전트 제공자에게 내요.",
        "Crewmark 가격: Free는 $0이에요(프로젝트 1개, AI 직원 최대 3명, 사용자 1명). 월 $5인 Pro와 월 $10인 Team은 출시 예정이에요. 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 골라요. 소프트웨어 엔지니어, SEO 전문가, 데이터 분석가 같은 직무가 있어요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "요금제 보기",
          text: "[Crewmark 요금](/pricing)을 확인하고, 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에서 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "코딩 에이전트가 계속 일하길 원하나요?",
    text: "Crewmark는 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요. 프로젝트 1개와 AI 직원 최대 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "OpenCode 가격 FAQ",
    items: [
      {
        q: "OpenCode는 무료인가요?",
        a: "네. 에이전트는 MIT 라이선스의 오픈 소스이고 무료예요. 계정 없이 쓸 수 있고 일일 요청 한도가 있는 무료 모델도 함께 제공돼요.",
      },
      {
        q: "OpenCode Go는 얼마인가요?",
        a: "OpenCode Go는 월 $10, Go Plus는 월 $40이에요. 둘 다 5시간·주간·월간 단위의 허용량이 있는 엄선된 모델과 크레딧 충전을 제공하고, 언제든 해지할 수 있어요.",
      },
      {
        q: "OpenCode의 가격 모델은 어떻게 되나요?",
        a: "에이전트는 무료이고, 모델 비용은 네 가지 중 하나로 내요. 무료 모델, Go나 Go Plus 구독, 잔액에서 백만 토큰 단위로 청구되는 종량제, 또는 이미 가진 요금제나 API 키예요. Enterprise는 영업팀을 통해요.",
      },
      {
        q: "OpenCode는 모델별로 가격이 어떻게 매겨지나요?",
        a: "OpenCode Go 허용량은 모델마다 달라요. 종량제 모델은 백만 토큰 단위로 청구돼요. 내 API 키를 쓰면 사용량은 그 제공자가 청구해요.",
      },
      {
        q: "ChatGPT나 GitHub Copilot 구독으로 OpenCode를 쓸 수 있나요?",
        a: "네. ChatGPT Plus나 Pro, GitHub Copilot으로 로그인하거나 내 API 키를 쓸 수 있어요.",
      },
      {
        q: "OpenCode는 로컬 모델로도 작동하나요?",
        a: "네. OpenCode는 Models.dev를 통해 로컬 모델을 포함한 200개 이상의 LLM 제공자와 함께 작동하고, 에이전트 자체는 무료예요.",
      },
    ],
  },
  cta: {
    title: "모델을 골랐다면, 이제 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 opencode.ai와 OpenCode 콘솔 페이지와 대조해 확인했어요. 다른 제품의 가격은 같은 날 각 제품의 사이트에서 가져왔어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, OpenCode를 만든 Anomaly를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
