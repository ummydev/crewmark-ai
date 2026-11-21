import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/devin; the English master is src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin 가격 2026: Free, Pro $20, Max $200, Teams",
    description:
      "Devin 가격: Free $0, Pro 월 $20, Max 월 $200, Teams와 Enterprise. 할당량, 온디맨드 크레딧, 시트가 작동하는 방식과 다른 에이전트와의 가격 비교.",
  },
  breadcrumb: "Devin 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · Cognition",
    title: "Devin 가격: 모든 요금제와 그 밖에 드는 비용",
    lead: "Cognition의 AI 소프트웨어 엔지니어 Devin에는 적은 할당량이 붙은 $0 Free 요금제가 있어요. Pro는 월 $20, Max는 월 $200이고 둘 다 1인용이에요. Teams는 “팀 요금제 월 $80 + 정식 개발자 시트당 월 $40”으로 표시되고, Enterprise는 영업팀을 통해요. 셀프서비스 요금제마다 일간 할당량이나 주간 할당량, 또는 둘 다가 있고, 이를 넘으면 선불 온디맨드 크레딧으로 내요. 요금제, 추가 비용, 그리고 Factory, Claude Code, Codex, Cursor Projects, Crewmark와 비교한 Devin의 가격을 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Devin 요금제와 가격",
      text: [
        "[devin.ai](https://devin.ai)의 가격 페이지와 Devin의 결제 문서에서 2026년 11월 13일에 확인했어요. 가격은 미국 달러 기준이에요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        ["Free", "$0", "적은 할당량, 제한된 모델만 이용 가능"],
        [
          "Pro",
          "월 $20",
          "Devin Cloud, 모든 모델 이용 가능, 추가 사용량은 API 가격으로 청구. 1인용",
        ],
        ["Max", "월 $200", "더 높은 할당량. 1인용"],
        [
          "Teams",
          "“팀 요금제 월 $80 + 정식 개발자 시트당 월 $40”",
          "최대 100명. 멤버당 동시 클라우드 세션을 최대 2개까지 쓰는 “Free 모드”(SWE-2)",
        ],
        ["Enterprise", "“상담 문의”", "VPC와 전용 배포"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Devin에 실제로 내는 비용",
      points: [
        "먼저 할당량. Devin의 셀프서비스 요금제에는 일간 할당량이나 주간 할당량, 또는 둘 다가 있어요.",
        "그다음은 선불 크레딧. 할당량을 넘는 사용량은 선불 온디맨드 크레딧에서 차감돼요. Pro에서는 추가 사용량이 API 가격으로 청구돼요.",
        "GPT 모델은 내 ChatGPT 요금제로. Pro, Max, Teams에서는 연결한 ChatGPT 요금제로 GPT 모델 사용량을 처리할 수 있어요.",
        "요금제별 모델. Free는 제한된 모델만, Pro는 모든 모델을 쓸 수 있어요. Devin은 Cognition의 SWE-2와 “OpenAI, Claude, Gemini, SpaceXAI의 프런티어 모델, 그리고 주요 오픈 소스 모델”을 쓰고, Adaptive 라우터가 작업마다 모델을 골라요.",
        "시트. Pro와 Max는 1인용 요금제예요. Teams는 멤버를 최대 100명까지 둘 수 있고, 더 큰 팀은 Enterprise로 안내돼요.",
        "Teams의 크레딧. Teams에서는 공유 온디맨드 크레딧이 바닥나면 Automations가 멈춰요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 가격 vs 다른 코딩 에이전트",
      text: [
        "각 제품의 가격 페이지에서 2026년 11월 13일에 확인한 시작 가격이며, 미국 달러 기준이에요. 모델 사용량이 포함되지 않은 요금제는 그 비용을 모델 제공자에게 따로 내요.",
        "나란히 비교: [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). 더 많은 선택지는 [Devin 대안](/blog/devin-alternatives)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        ["Devin", "Free $0, Pro 월 $20", "있음: 할당량이 적은 Free 요금제"],
        [
          "[Factory](/pricing/factory)",
          "추론을 직접 준비하면 Free $0, Pro 월 $20",
          "있음: 추론을 직접 준비하면 Free",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "Claude Pro에 포함, 월 $20 또는 연간 결제 시 월 $17",
          "없음: Claude Free에는 미포함. 종량제 API 크레딧으로도 사용 가능",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "ChatGPT Plus(월 $20)에 포함, 또는 OpenAI API 키로 API 가격",
          "ChatGPT Free($0)는 데스크톱 앱에서 GPT-6 Luna를 “순차 제공”으로 표시",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 월 $30 또는 연 $300",
          "없음: Free, Plus, 기존 Hobby 요금제에는 없음",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0, Pro 월 $5 출시 예정",
          "있음: 프로젝트 1개, AI 직원 최대 3명. 에이전트 사용료는 내 제공자에게 지불",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "이미 Claude Code나 Codex를 결제하고 있나요? 일자리와 보드를 주세요.",
      text: [
        "Devin은 요금제 할당량과 크레딧으로 과금되는 자체 에이전트예요. Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트 사용량은 이미 결제하고 있는 Claude나 ChatGPT 구독으로 처리돼요.",
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
    title: "이미 Claude나 ChatGPT를 결제하고 있나요?",
    text: "Crewmark는 내 Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Devin 가격 FAQ",
    items: [
      {
        q: "Devin은 무료인가요?",
        a: "적은 할당량과 제한된 모델로 쓰는 $0 Free 요금제가 있어요. 월 $20인 Pro에서는 Devin Cloud와 모든 모델을 쓸 수 있어요.",
      },
      {
        q: "Devin은 한 달에 얼마인가요?",
        a: "Pro는 월 $20, Max는 월 $200이고 둘 다 1인용이에요. Teams는 “팀 요금제 월 $80 + 정식 개발자 시트당 월 $40”으로 표시되며 최대 100명까지 쓸 수 있어요. Enterprise는 “상담 문의”예요. 가격은 미국 달러 기준이에요.",
      },
      {
        q: "Devin의 가격 모델은 어떻게 되나요?",
        a: "일간 할당량이나 주간 할당량, 또는 둘 다가 있는 요금제에, 할당량을 넘는 사용량은 선불 온디맨드 크레딧으로 내는 구조예요. Pro에서는 추가 사용량이 API 가격으로 청구돼요. Teams에는 팀 요금과 정식 개발자 시트당 요금이 붙어요.",
      },
      {
        q: "Devin의 Teams와 Enterprise 요금제는 어떻게 작동하나요?",
        a: "Teams는 멤버를 최대 100명까지 둘 수 있고, 공유 온디맨드 크레딧이 바닥나면 Automations가 멈춰요. 더 큰 팀은 Enterprise로 안내되는데, 가격은 영업팀을 통해 정해지고 VPC와 전용 배포를 제공해요.",
      },
      {
        q: "내 ChatGPT 요금제를 Devin에서 쓸 수 있나요?",
        a: "네, Pro, Max, Teams에서 쓸 수 있어요. 연결한 ChatGPT 요금제로 GPT 모델 사용량을 처리해요.",
      },
      {
        q: "Devin은 오픈 소스인가요?",
        a: "아니요. Devin의 소스 코드나 오픈 소스 라이선스는 공개되지 않았어요. github.com/CognitionAI/devin-cli에는 설치 패키지, 문서, 스크립트가 있어요. 오픈 소스 선택지는 [Devin 대안](/blog/devin-alternatives)에서 볼 수 있어요.",
      },
    ],
  },
  cta: {
    title: "가격을 비교했다면, 이제 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 devin.ai/pricing과 Devin의 결제 문서와 대조해 확인했어요. 다른 제품의 가격은 같은 날 각 제품의 가격 페이지에서 가져왔어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, Cognition을 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
