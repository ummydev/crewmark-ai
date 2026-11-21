import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/crewai; the English master is src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI 가격: 무료 프레임워크, AMP Basic, Enterprise",
    description:
      "CrewAI 가격: MIT 프레임워크는 무료, CrewAI AMP Basic은 월 50회 워크플로 실행까지 무료, Enterprise는 맞춤형이에요. 모델 비용도 함께 정리했어요.",
  },
  breadcrumb: "CrewAI 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · 에이전트 프레임워크",
    title: "CrewAI 가격: 무료 프레임워크, AMP 요금제, 모델 비용",
    lead: "CrewAI의 오픈 소스 Python 프레임워크는 MIT 라이선스로 무료예요. 비용은 모델 제공자에게 내고, 기본값은 OpenAI API예요. crews와 flows를 만들고 배포하고 추적하는 회사의 플랫폼 CrewAI AMP에는 요금제가 두 가지 있어요. 월 50회 워크플로 실행까지 무료인 Basic과 맞춤형 가격의 Enterprise예요. CrewAI는 통화, 결제 주기, 초과 사용 가격을 공개하지 않아요. 각 요금제에 포함된 것, 그 밖에 드는 비용, 그리고 LangGraph, AutoGen, Relevance AI, Paperclip과 비교한 CrewAI를 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "CrewAI 요금제와 가격",
      text: [
        "[crewai.com](https://crewai.com)의 가격 페이지와 crewAI README에서 2026년 11월 13일에 확인했어요. CrewAI는 플랫폼 요금제를 통화나 결제 주기 없이 “무료”와 “맞춤형”으로 표시해요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "CrewAI 프레임워크(오픈 소스)",
          "무료, MIT 라이선스",
          "역할 기반 에이전트로 이뤄진 crews와 이벤트 기반 flows를 위한 Python 라이브러리로, 내 코드와 인프라에서 실행",
        ],
        [
          "AMP Basic",
          "무료",
          "비주얼 에디터와 AI 코파일럿, GitHub 연동, 월 50회 워크플로 실행, cron 스케줄링, 휴먼 인 더 루프 입력",
        ],
        [
          "AMP Enterprise",
          "맞춤형(가격 미공개)",
          "CrewAI 클라우드, 내 VPC, 내 인프라에 배포. SSO(MS Entra, Okta), RBAC, 전용 VPC, 엔터프라이즈 커넥터. cron 스케줄링과 휴먼 인 더 루프 입력",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "CrewAI에 실제로 내는 비용",
      points: [
        "모델 제공자. CrewAI 에이전트는 내가 설정한 모델 API를 호출해요. README에 따르면 “기본적으로 에이전트는 OpenAI API를 사용”해요. 다른 제공자와 로컬 모델(Ollama, LM Studio)도 지원돼요.",
        "AMP Basic의 워크플로 실행. 무료 플랫폼 요금제는 월 50회 워크플로 실행으로 제한돼요. CrewAI는 초과 사용 가격을 공개하지 않아요.",
        "Enterprise 기능. SSO, RBAC, 전용 VPC, 엔터프라이즈 커넥터는 Enterprise 전용이고, 가격은 맞춤형이에요.",
        "실행 위치. 프레임워크는 내 코드와 인프라에서 도는 Python 라이브러리(Python `>=3.10, <3.14`)예요. AMP는 app.crewai.com의 웹 앱이고, Enterprise는 CrewAI 클라우드, 내 VPC, 내 인프라에 배포할 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "CrewAI 가격 vs 다른 에이전트 프레임워크와 플랫폼",
      text: [
        "각 제품의 가격 페이지나 README에서 2026년 11월 13일에 확인한 가격이며, 미국 달러 기준이에요. AutoGen의 README에는 “이 프로젝트는 보관 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않습니다”라고 적혀 있고, Microsoft는 Agent Framework를 직접적인 후속 제품으로 지목해요. 2026년 11월 13일 기준 Relevance AI 문서에는 Free 요금제가 신규 가입과 기존 계정 모두에서 종료되었다고 나와 있어요.",
        "나란히 비교: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). 더 많은 선택지는 [CrewAI 대안](/alternatives/crewai)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        [
          "CrewAI",
          "프레임워크 무료, AMP Basic 무료, Enterprise 맞춤형",
          "있음: 프레임워크(MIT)와 월 50회 워크플로 실행이 가능한 AMP Basic",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "프레임워크 무료, LangSmith Plus 시트당 월 $39",
          "있음: 프레임워크(MIT)와 시트 1개에 $0인 LangSmith Developer",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "무료(오픈 소스). README에 유료 서비스 언급 없음",
          "있음: 코드는 MIT. README에는 보관 처리되어 Microsoft가 더 이상 적극적으로 유지보수하지 않는다고 적혀 있음",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, 영업팀을 통한 맞춤형 가격",
          "없음: 문서에 Free 요금제가 종료되었다고 나옴",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "셀프 호스팅 무료, 가격 미공개",
          "있음: 셀프 호스팅(MIT). 클라우드 버전은 대기자 명단",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Python 앱을 만드는 게 아니라면, Claude Code나 Codex에 직무를 주세요.",
      text: [
        "CrewAI는 내 Python 코드로 멀티 에이전트 워크플로를 만드는 도구예요. Crewmark는 AI 직원 팀을 위한 이슈 트래커로, 이미 Claude Code나 Codex를 쓰고 있고 매번 프롬프트를 주지 않아도 에이전트가 맡은 일을 계속하길 바라는 사람을 위한 제품이에요. 각 직원은 직무, KPI, 근무 시간을 가지고, 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트 사용량은 이미 결제하고 있는 Claude나 ChatGPT 구독으로 처리돼요.",
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
    title: "이미 Claude Code나 Codex를 쓰고 있나요?",
    text: "Crewmark는 그 에이전트를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔 줘요. 프로젝트 1개와 AI 직원 최대 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "CrewAI 가격 FAQ",
    items: [
      {
        q: "CrewAI는 무료인가요?",
        a: "프레임워크는 무료예요. MIT 라이선스의 오픈 소스이고, 모델 제공자 비용만 내면 돼요. CrewAI AMP Basic 요금제도 월 50회 워크플로 실행까지 무료예요.",
      },
      {
        q: "CrewAI AMP에는 어떤 요금제가 있나요?",
        a: "두 가지예요. “무료”로 표시된 Basic(비주얼 에디터와 AI 코파일럿, GitHub 연동, 월 50회 워크플로 실행)과, 가격 없이 “맞춤형”으로 표시된 Enterprise예요. CrewAI는 통화, 결제 주기, 초과 사용 가격을 공개하지 않아요.",
      },
      {
        q: "CrewAI Enterprise는 얼마인가요?",
        a: "CrewAI는 가격을 공개하지 않고, Enterprise는 “맞춤형”이에요. CrewAI 클라우드, 내 VPC, 내 인프라에 배포할 수 있고, MS Entra나 Okta를 쓰는 SSO, RBAC, 엔터프라이즈 커넥터가 추가돼요.",
      },
      {
        q: "CrewAI의 가격 모델은 어떻게 되나요?",
        a: "직접 실행하는 무료 오픈 소스 프레임워크에, 요금제별로 가격이 매겨지는 AMP 플랫폼이 더해져요. Basic은 무료이고 월 50회 워크플로 실행으로 제한되며, Enterprise는 맞춤형이에요. 모델 사용량은 모델 제공자가 따로 청구해요.",
      },
      {
        q: "CrewAI 클라우드는 얼마인가요?",
        a: "AMP는 app.crewai.com의 웹 앱이고, Basic은 월 50회 워크플로 실행까지 무료예요. CrewAI 클라우드, 내 VPC, 내 인프라에 배포하는 기능은 Enterprise에 있고, 가격은 맞춤형이에요.",
      },
      {
        q: "CrewAI를 쓰려면 OpenAI 키가 필요한가요?",
        a: "기본적으로 CrewAI 에이전트는 OpenAI API를 써요. Ollama, LM Studio 같은 다른 제공자와 로컬 모델도 지원돼요.",
      },
    ],
  },
  cta: {
    title: "코드로 crew를 만들거나, 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 crewai.com/pricing, CrewAI 플랫폼 문서, crewAI README와 대조해 확인했어요. 다른 제품의 가격은 같은 날 각 제품의 페이지에서 가져왔어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, crewAI, Inc.를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
