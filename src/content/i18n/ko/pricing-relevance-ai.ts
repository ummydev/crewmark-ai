import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/relevance-ai; the English master is src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 가격: Enterprise만, Free 요금제 종료",
    description:
      "Relevance AI 가격 페이지에는 영업팀을 통한 맞춤형 가격의 Enterprise 요금제 하나만 있고, 문서에는 Free 요금제가 종료되었다고 나와요. 무엇을 뜻하는지 정리했어요.",
  },
  breadcrumb: "Relevance AI 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · Relevance AI",
    title: "Relevance AI 가격: 영업팀을 통한 Enterprise 요금제 하나, Free 요금제는 없음",
    lead: "Relevance AI의 공개 가격 페이지에는 맞춤형 가격의 Enterprise 요금제 하나만 있어요. “영업팀과 상담”하는 방식이에요. 문서에는 Free 요금제가 신규 가입과 기존 계정 모두에서 종료되었다고 나와요. 모델은 문서에 두 가지 방법이 나와 있어요. 크레딧, 또는 내 LLM 키예요. Enterprise 요금제에 포함된 것, 지금 구매한다면 무엇을 뜻하는지, 그리고 Lindy, CrewAI, LangGraph, Crewmark와 비교한 가격을 정리했어요.",
    cta: "시작하기",
    secondary: "요금제 보기",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Relevance AI 요금제와 가격",
      text: [
        "relevanceai.com/pricing과 Relevance AI 문서에서 2026년 11월 13일에 확인했어요. 가격 페이지에는 셀프서비스 요금제 가격이 없어요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "Enterprise",
          "맞춤형(“영업팀과 상담”)",
          "커스텀 Actions와 공급사 크레딧. 에이전트, 도구, 사용자, 프로젝트 무제한. 문서에 따르면 SSO, RBAC, 감사 로그, 에이전트 평가, 근무 시간 제어, 엔터프라이즈 트리거는 Enterprise 전용",
        ],
        ["Free", "종료", "문서에 따르면 Free 요금제는 신규 가입과 기존 계정 모두에서 종료"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Relevance AI에 실제로 내는 비용",
      points: [
        "맞춤 계약. 공개된 요금제는 영업팀을 통해 가격이 정해지는 Enterprise뿐이라, Relevance AI와 상담한 뒤에야 금액을 알 수 있어요.",
        "모델은 크레딧이나 내 키로. 문서의 요금제 표에는 “크레딧으로 어떤 LLM이든 사용”과 “내 LLM 가져오기”(BYOK)가 있어요. Enterprise에는 커스텀 Actions와 공급사 크레딧이 포함돼요.",
        "Enterprise가 필요한 기능: SSO, RBAC, 감사 로그, 에이전트 평가, 근무 시간 제어, 그리고 Salesforce, Snowflake, Zendesk용 엔터프라이즈 트리거.",
        "무료로 시작할 방법이 없어요. Free 요금제가 신규 가입에서 종료되어, 영업 상담 전에 써 볼 수 있는 $0 요금제가 없어요.",
        "제품과 별도로, 영업 제안에는 1~2주 차에 활용 사례를 정리하고 3주 차부터 배포하는 상주 배포 팀, 그리고 Relevance AI가 24/7 AI 솔루션 엔지니어라고 부르는 “Invent”가 들어 있어요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 가격 vs 비슷한 에이전트 플랫폼",
      text: [
        "각 제품의 사이트에서 2026년 11월 13일에 확인한 가격이에요. 내 모델을 쓰는 제품은 모델도 따로 필요하고, 그 비용은 제공자에게 내요.",
        "나란히 비교: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). 더 많은 선택지는 [Relevance AI 대안](/alternatives/relevance-ai)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        ["Relevance AI", "Enterprise, 영업팀을 통한 맞춤형 가격", "없음: Free 요금제 종료"],
        [
          "[Lindy](/personal-agent/lindy)",
          "활성 사용자당 월 $29.99(3,000 크레딧)",
          "있음: 7일간 쓸 수 있는 $50 크레딧, 신용카드 불필요",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "프레임워크 무료(MIT), AMP Enterprise 맞춤형",
          "있음: 프레임워크, 그리고 월 50회 워크플로 실행이 가능한 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "프레임워크 무료(MIT), LangSmith Plus 시트당 월 $39",
          "있음: 프레임워크, 그리고 $0인 LangSmith Developer(시트 1개, 기본 트레이스 월 최대 5천 개)",
        ],
        [
          "[Crewmark](/pricing)",
          "Free, 월 $5인 Pro와 월 $10인 Team 출시 예정",
          "있음: 프로젝트 1개, AI 직원 최대 3명, 사용자 1명",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Relevance AI는 호스팅 에이전트를 만들어요. Crewmark는 내 코딩 에이전트를 팀으로 운영해요.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트는 이미 결제하고 있는 Claude나 ChatGPT 구독으로 일하고, 토큰 비용이 따로 청구되지 않아요.",
        "Crewmark 가격: Free는 $0이에요(프로젝트 1개, AI 직원 최대 3명, 사용자 1명). 월 $5인 Pro와 월 $10인 Team은 출시 예정이에요. 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 SEO, 그로스, 소셜 미디어, 엔지니어링 같은 직무를 고르고, 목표는 숫자로 정해요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "요금제 보기",
          text: "[Crewmark 요금](/pricing)을 확인하고, 에이전트가 Crewmark로 하는 일은 [Claude Code 활용 사례](/use-cases/claude-code)에서 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "영업 상담 없이 시작하고 싶나요?",
    text: "Crewmark의 Free 요금제는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Relevance AI 가격 FAQ",
    items: [
      {
        q: "Relevance AI에 무료 요금제가 있나요?",
        a: "이제는 없어요. Relevance AI 문서에 따르면 Free 요금제는 신규 가입과 기존 계정 모두에서 종료되었어요.",
      },
      {
        q: "Relevance AI는 얼마인가요?",
        a: "공개 가격 페이지에는 영업팀을 통한 맞춤형 가격의 Enterprise 요금제 하나만 있어요. 셀프서비스 요금제 가격은 공개하지 않아요.",
      },
      {
        q: "Relevance AI 엔터프라이즈 가격에는 무엇이 포함되나요?",
        a: "커스텀 Actions와 공급사 크레딧, 그리고 무제한 에이전트, 도구, 사용자, 프로젝트예요. SSO, RBAC, 감사 로그, 에이전트 평가, 근무 시간 제어, 엔터프라이즈 트리거는 Enterprise 전용이에요.",
      },
      {
        q: "Relevance AI에서 내 LLM 키를 쓸 수 있나요?",
        a: "문서의 요금제 표에 “크레딧으로 어떤 LLM이든 사용”과 함께 “내 LLM 가져오기”(BYOK)가 있어서, 크레딧이나 내 제공자의 키를 쓸 수 있어요.",
      },
      {
        q: "Relevance AI를 셀프 호스팅할 수 있나요?",
        a: "셀프 호스팅 옵션은 명시되어 있지 않아요. Relevance AI는 호스팅 웹 플랫폼이고, 오픈 소스가 아니에요.",
      },
      {
        q: "무료 요금제가 있는 Relevance AI 대안이 있나요?",
        a: "여럿 있어요. Lindy는 7일간 $50 크레딧을 주고, CrewAI와 LangGraph는 무료 오픈 소스 프레임워크이며, Crewmark에는 Free 요금제가 있어요. [Relevance AI 대안](/alternatives/relevance-ai)을 보세요.",
      },
    ],
  },
  cta: {
    title: "이미 가진 에이전트로 무료로 시작하세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 relevanceai.com/pricing, Relevance AI 문서, 비교한 각 제품의 가격 페이지와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, Relevance AI를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
