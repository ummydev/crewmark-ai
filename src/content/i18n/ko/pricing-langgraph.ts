import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/langgraph; the English master is src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 가격: 무료, LangSmith Plus $39, Agent Server",
    description:
      "LangGraph 가격: MIT 프레임워크는 무료예요. LangSmith Developer는 $0, Plus는 시트당 월 $39에 Agent Server 1개 포함, 추가 서버는 LSU당 $1.00이에요.",
  },
  breadcrumb: "LangGraph 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · 에이전트 프레임워크",
    title: "LangGraph 가격: 무료 프레임워크, LangSmith 요금제, Agent Server 비용",
    lead: "LangGraph는 무료예요. 프레임워크는 MIT 라이선스의 오픈 소스이고, 내 애플리케이션 안에서 실행돼요. 돈이 드는 건 트레이싱, 평가, 배포를 위한 LangChain의 상용 제품 LangSmith예요. Developer는 시트 1개에 $0, Plus는 시트당 월 $39에 Small Agent Server 1개가 포함되고, Enterprise는 맞춤형이에요. 추가 Agent Server는 LSU당 $1.00으로 사용량에 따라 과금되고, 모델 호출은 모델 제공자가 청구해요. 각 요금제, Agent Server 비용, 그리고 CrewAI, AutoGen, Relevance AI, Paperclip과 비교한 LangGraph를 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "LangGraph·LangSmith 요금제와 가격",
      text: [
        "[langchain.com](https://www.langchain.com/langgraph)의 가격 페이지와 LangChain 문서에서 2026년 11월 13일에 확인했어요. 가격은 미국 달러 기준이고, Developer와 Plus는 매월 청구돼요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "LangGraph 프레임워크(오픈 소스)",
          "무료, MIT 라이선스",
          "상태를 가진 에이전트를 위한 Python, JavaScript/TypeScript 라이브러리로, 내 애플리케이션 안에서 실행",
        ],
        [
          "LangSmith Developer",
          "시트당 월 $0",
          "시트 1개. 기본 트레이스 월 최대 5천 개, 이후 종량제. Agent Server 없음",
        ],
        [
          "LangSmith Plus",
          "시트당 월 $39",
          "기본 트레이스 월 최대 1만 개, 이후 종량제. “서버리스 호스팅의 Small Agent Server 1개를 무료로 포함”",
        ],
        [
          "LangSmith Enterprise",
          "맞춤형, 연 단위 선불 청구",
          "셀프 호스팅과 하이브리드 배포 옵션 추가",
        ],
        [
          "추가 Agent Server",
          "LSU당 $1.00, 사용량 기준 과금",
          "런타임 컴퓨팅 0.0675 LSU/vCPU-hr, 런타임 메모리 0.0090 LSU/GiB-hr, 데이터베이스 컴퓨팅 0.177 LSU/vCPU-hr, 데이터베이스 메모리 0.025 LSU/GiB-hr",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "LangGraph에 실제로 내는 비용",
      points: [
        "모델 제공자. LangGraph는 내 코드가 쓰는 어떤 모델이든 호출하고, “LangGraph에는 LangChain이 필요하지 않아요.” 그 모델 호출 비용은 제공자가 청구해요.",
        "포함량을 넘는 트레이스. Developer는 기본 트레이스를 월 최대 5천 개, Plus는 최대 1만 개까지 포함하고, 그 이상은 종량제예요.",
        "시트. Developer는 시트 1개로 제한돼요. Plus는 시트당 월 $39예요.",
        "두 번째부터의 Agent Server. Plus에는 서버리스 호스팅의 Small Agent Server 1개가 포함돼요. 그 이상은 LSU당 $1.00으로 과금되므로, 런타임 컴퓨팅은 vCPU 시간당 $0.0675, 런타임 메모리는 GiB 시간당 $0.009가 돼요. 데이터베이스 컴퓨팅은 vCPU 시간당 0.177 LSU, 데이터베이스 메모리는 GiB 시간당 0.025 LSU예요.",
        "cron 작업은 계속 돌아가요. Agent Server는 내가 정한 일정에 따라 cron 작업을 실행해요. LangChain 문서는 반복 실행에 LLM API 요금이 발생할 수 있으니 쓰지 않는 작업은 삭제하라고 안내해요.",
        "호스팅 위치. 클라우드 Agent Server는 “AWS, Azure, GCP에서 LangChain이 완전 관리”해요. 셀프 호스팅과 하이브리드 배포는 Enterprise 옵션이에요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 가격 vs 다른 에이전트 프레임워크와 플랫폼",
      text: [
        "각 제품의 가격 페이지나 README에서 2026년 11월 13일에 확인한 가격이며, 미국 달러 기준이에요. AutoGen의 README에는 “이 프로젝트는 보관 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않습니다”라고 적혀 있고, Microsoft는 Agent Framework를 직접적인 후속 제품으로 지목해요. 2026년 11월 13일 기준 Relevance AI 문서에는 Free 요금제가 신규 가입과 기존 계정 모두에서 종료되었다고 나와 있어요.",
        "나란히 비교: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). 더 많은 선택지는 [LangGraph 대안](/alternatives/langgraph)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        [
          "LangGraph",
          "프레임워크 무료, LangSmith Plus 시트당 월 $39",
          "있음: 프레임워크(MIT)와 시트 1개에 $0인 LangSmith Developer",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "프레임워크 무료, AMP Basic 무료, Enterprise 맞춤형",
          "있음: 프레임워크(MIT)와 월 50회 워크플로 실행이 가능한 AMP Basic",
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
          "[Paperclip](/alternatives/paperclip)",
          "셀프 호스팅 무료, 가격 미공개",
          "있음: 셀프 호스팅(MIT). 클라우드 버전은 대기자 명단",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "에이전트 앱을 만드는 게 아니라면, Claude Code나 Codex에 직무를 주세요.",
      text: [
        "LangGraph는 내 코드로 상태를 가진 에이전트를 만드는 도구예요. Crewmark는 AI 직원 팀을 위한 이슈 트래커로, 이미 Claude Code나 Codex를 쓰고 있고 매번 프롬프트를 주지 않아도 에이전트가 맡은 일을 계속하길 바라는 사람을 위한 제품이에요. 각 직원은 직무, KPI, 근무 시간을 가지고, 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트 사용량은 이미 결제하고 있는 Claude나 ChatGPT 구독으로 처리돼요.",
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
    title: "LangGraph 가격 FAQ",
    items: [
      {
        q: "LangGraph는 무료인가요?",
        a: "네. LangGraph 프레임워크는 Python과 JavaScript/TypeScript용 MIT 라이선스 오픈 소스예요. LangChain의 상용 제품인 LangSmith에도 시트 1개용 $0 Developer 요금제가 있어요.",
      },
      {
        q: "LangGraph를 클라우드에 배포하면 얼마인가요?",
        a: "배포는 AWS, Azure, GCP에서 LangChain이 완전 관리하는 LangSmith Agent Server에서 실행돼요. LangSmith Plus(시트당 월 $39)에는 서버리스 호스팅의 Small Agent Server 1개가 무료로 포함되고, 추가 서버는 LSU당 $1.00으로 과금돼요. Developer 요금제에는 Agent Server가 없어요.",
      },
      {
        q: "LangGraph 서버 가격: Agent Server는 얼마인가요?",
        a: "Agent Server(이전 이름 LangSmith Deployment)는 LSU 단위로 과금되며 LSU당 $1.00이에요. 런타임 컴퓨팅은 vCPU 시간당 0.0675 LSU, 런타임 메모리는 GiB 시간당 0.0090, 데이터베이스 컴퓨팅은 vCPU 시간당 0.177, 데이터베이스 메모리는 GiB 시간당 0.025예요. Plus에는 Small Agent Server 1개가 무료로 포함돼요.",
      },
      {
        q: "LangSmith Plus에는 무엇이 포함되나요?",
        a: "시트당 월 $39이고 매월 청구돼요. 기본 트레이스 월 최대 1만 개(이후 종량제)와 서버리스 호스팅의 Small Agent Server 1개가 무료로 포함돼요.",
      },
      {
        q: "LangGraph 엔터프라이즈 가격이 있나요?",
        a: "LangSmith Enterprise는 맞춤형이고 연 단위로 선불 청구돼요. 셀프 호스팅과 하이브리드 Agent Server 배포는 Enterprise 옵션이에요.",
      },
      {
        q: "LangGraph를 쓰려면 LangSmith가 필요한가요?",
        a: "프레임워크는 내 애플리케이션 안에서 실행되는 무료 MIT 라이브러리예요. LangSmith는 트레이싱, 평가, Agent Server로의 에이전트 배포를 위한 LangChain의 별도 상용 제품이에요.",
      },
    ],
  },
  cta: {
    title: "그래프를 만들거나, 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 langchain.com/pricing과 LangChain의 LangGraph, LangSmith 문서와 대조해 확인했어요. 다른 제품의 가격은 같은 날 각 제품의 페이지에서 가져왔어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, LangChain을 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
