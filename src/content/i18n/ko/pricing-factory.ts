import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/factory; the English master is src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 가격: Free, Pro $20, Plus, Max, Teams",
    description:
      "Factory AI 가격: 추론을 직접 준비하면 Free, Pro 월 $20, Plus 월 $100, Max 월 $200, Teams. 사용 한도, Extra Usage 크레딧, 토큰 과금 방식까지 정리했어요.",
  },
  breadcrumb: "Factory 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · Factory",
    title: "Factory AI 가격: Droid 요금제, 사용 한도, 토큰",
    lead: "Factory는 Droids라는 코딩 에이전트를 만들어요. Droids는 Factory App, Droid CLI, CI, Factory가 호스팅하는 클라우드 컴퓨터에서 실행돼요. Free 요금제는 추론을 직접 준비하면 $0이에요. ChatGPT, GitHub Copilot, OpenRouter로 로그인하거나 내 API 키를 연결하면 돼요. 유료 요금제는 개인당 월 $20인 Pro부터 월 $200인 Max까지 있고, Teams는 팀당 월 $60에 개인당 월 $40이 더해져요. 유료 요금제에는 롤링 사용 한도가 있고, Extra Usage는 그 위에 더하는 선불 크레딧이에요. 요금제, 사용량과 토큰이 청구되는 방식, 그리고 Devin, Claude Code, Codex, OpenCode와 비교한 가격을 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Factory 요금제와 가격",
      text: [
        "[factory.com](https://factory.com)의 가격 페이지와 Factory의 가격 문서에서 2026년 11월 13일에 확인했어요. 가격은 미국 달러 기준이고, 페이지 표기대로 월 단위(“/mo”)예요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "Free",
          "개인당 월 $0",
          "추론은 직접 준비: ChatGPT, GitHub Copilot, OpenRouter로 로그인하거나 내 API 키나 커스텀 엔드포인트를 연결",
        ],
        [
          "Pro",
          "개인당 월 $20",
          "데스크톱 앱, CLI, SDK, 모든 모델 이용 가능. 5시간·7일·30일 롤링 사용 한도",
        ],
        ["Plus", "개인당 월 $100", "Pro의 약 5배 사용량. 같은 롤링 사용 한도"],
        ["Max", "개인당 월 $200", "Pro의 약 10배 사용량. 같은 롤링 사용 한도"],
        ["Teams", "팀당 월 $60 + 개인당 월 $40", "최대 10시트"],
        ["Business와 Enterprise", "영업팀 문의", "Enterprise에서는 온프레미스 배포 옵션"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Factory에 실제로 내는 비용",
      points: [
        "Free에서는 추론을 직접. Free 요금제는 직접 가져온 추론으로 작동해요. ChatGPT, GitHub Copilot, OpenRouter 로그인이나 내 API 키, 커스텀 엔드포인트요. 토큰 비용은 그 제공자나 요금제에서 청구돼요.",
        "유료 요금제의 Standard Usage. Pro, Plus, Max에는 각각 5시간·7일·30일 롤링 사용 한도가 있어요. Plus는 Pro의 약 5배, Max는 약 10배 사용량을 줘요. 쓰지 않은 Standard Usage는 이월되지 않아요.",
        "Extra Usage. 더 쓰려면 Extra Usage를 써요. 최소 $10부터 충전하는 선불 크레딧이고 만료되지 않아요.",
        "Missions에는 Extra Usage가 필요해요. 기능과 마일스톤을 계획하는 Missions는 Extra Usage를 켜야 쓸 수 있고, 사용 한도에 닿으면 일시 중지돼요.",
        "Workstreams는 토큰을 더 써요. Pro, Plus, Max, Teams에서 쓸 수 있는 Workstreams(베타)는 단일 세션보다 토큰을 더 많이 써요. Business와 Enterprise에는 아직 없어요.",
        "모델. Factory는 “GPT-5, Claude Opus와 Sonnet, Gemini의 최신 버전을 포함한 모든 주요 프런티어 모델과 오픈 웨이트 모델”, 오픈 웨이트 모델로 이뤄진 “Droid Core” 풀, 그리고 내 API 키나 로컬 모델(BYOK)을 쓸 수 있다고 밝혀요.",
        "시트. Pro, Plus, Max는 개인당 가격이에요. Teams는 최대 10시트이고, Business와 Enterprise는 영업팀을 통해요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Factory 가격 vs 다른 코딩 에이전트",
      text: [
        "각 제품의 가격 페이지에서 2026년 11월 13일에 확인한 시작 가격이며, 미국 달러 기준이에요.",
        "나란히 비교: [Factory vs Claude Code](/compare/factory-vs-claude-code). 더 많은 선택지는 [Factory 대안](/alternatives/factory)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        ["Factory", "추론을 직접 준비하면 Free $0, Pro 월 $20", "있음: 추론을 직접 준비하면 Free"],
        ["[Devin](/pricing/devin)", "Free $0, Pro 월 $20", "있음: 할당량이 적은 Free 요금제"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Claude Pro에 포함, 월 $20 또는 연간 결제 시 월 $17",
          "없음: Claude Free에는 미포함. 종량제 API 크레딧으로도 사용 가능",
        ],
        [
          "Codex",
          "ChatGPT Plus(월 $20)에 포함, 또는 OpenAI API 키로 API 가격",
          "ChatGPT Free($0)는 데스크톱 앱에서 GPT-6 Luna를 “순차 제공”으로 표시",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "에이전트 무료, OpenCode Go 월 $10, Go Plus 월 $40",
          "있음: 에이전트(MIT)와 일일 요청 한도가 있는 무료 모델",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "쓰던 구독은 그대로 두고, 에이전트에게 직무와 보드를 주세요.",
      text: [
        "Factory는 요금제와 사용 한도가 있는 자체 에이전트를 판매해요. Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트 사용량은 이미 결제하고 있는 Claude나 ChatGPT 구독으로 처리되고, 토큰 비용이 따로 청구되지 않아요.",
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
    title: "Factory AI 가격 FAQ",
    items: [
      {
        q: "Factory AI는 무료인가요?",
        a: "추론을 직접 준비하면 무료예요. Free 요금제는 개인당 $0이고, ChatGPT, GitHub Copilot, OpenRouter로 로그인하거나 내 API 키나 커스텀 엔드포인트를 연결해 써요.",
      },
      {
        q: "Factory AI는 한 달에 얼마인가요?",
        a: "개인당 Pro는 월 $20, Plus는 월 $100, Max는 월 $200이에요. Teams는 팀당 월 $60에 개인당 월 $40이 더해지고, 최대 10시트까지예요. Business와 Enterprise는 영업팀을 통해 가격이 정해져요.",
      },
      {
        q: "Factory AI의 가격 모델은 어떻게 되나요?",
        a: "개인별 요금제에 5시간·7일·30일 롤링 사용 한도가 걸린 Standard Usage가 들어 있고, 선택 사항으로 Extra Usage가 있어요. Extra Usage는 최소 $10의 선불 크레딧이고 만료되지 않아요. 쓰지 않은 Standard Usage는 이월되지 않아요.",
      },
      {
        q: "Factory AI는 토큰 비용을 어떻게 청구하나요?",
        a: "Free에서는 직접 가져온 계정이나 API 키 쪽에서 토큰 비용이 청구돼요. Pro, Plus, Max에서는 모델 사용량이 요금제의 Standard Usage와 사용 한도에서 차감되고, 더 쓰려면 선불 크레딧인 Extra Usage를 써요. Workstreams는 단일 세션보다 토큰을 더 많이 써요.",
      },
      {
        q: "Factory AI에 엔터프라이즈 가격이 있나요?",
        a: "Business와 Enterprise는 영업팀을 통하며 가격은 공개되지 않았어요. Enterprise는 온프레미스 배포 옵션을 제공해요. 월 $60에 개인당 $40인 Teams는 최대 10시트예요.",
      },
      {
        q: "Factory AI는 오픈 소스인가요?",
        a: "아니요. Droid CLI와 Factory App의 소스 코드나 오픈 소스 라이선스는 공개되지 않았어요. github.com/Factory-AI/factory에는 README와 문서가 있어요. 오픈 소스 선택지는 [Factory 대안](/alternatives/factory)에서 볼 수 있어요.",
      },
    ],
  },
  cta: {
    title: "가격을 비교했다면, 이제 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 factory.com/pricing과 Factory의 가격 문서와 대조해 확인했어요. 다른 제품의 가격은 같은 날 각 제품의 가격 페이지에서 가져왔어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, Factory를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
