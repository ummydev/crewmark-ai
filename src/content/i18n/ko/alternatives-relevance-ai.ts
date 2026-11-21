import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI 대안 2026: 오픈 소스와 호스팅형",
    description:
      "Relevance AI는 Free 요금제를 종료하고 Enterprise만 안내해요. CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy, Crewmark를 가격과 함께 비교해요.",
  },
  breadcrumb: "Relevance AI 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Relevance AI",
    title: "Relevance AI 대안: 오픈 소스 에이전트 프레임워크, 셀프 호스팅 에이전트 팀, 호스팅 비서",
    lead: "Relevance AI는 AI 에이전트를 만들고 이를 AI Workforce라고 부르는 멀티 에이전트 팀으로 연결하는 호스팅 로우코드 플랫폼으로, 영업, 고객 지원, 운영 업무용이에요. 2026년 11월 13일 기준 문서에는 신규 가입과 기존 계정 모두 Free 요금제가 종료됐다고 나와 있고, 가격 페이지에는 영업팀을 통한 Enterprise 요금제 하나만 있어요. 오픈 소스가 아니고, 셀프 호스팅 옵션도 밝히지 않아요. 이 페이지에서는 오픈 소스 프레임워크, 셀프 호스팅 에이전트 팀, 호스팅 비서, 그리고 Crewmark까지 대안 7가지를 각각의 비용과 함께 다뤄요.",
    cta: "시작하기",
    secondary: "비교해 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Relevance AI 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 업체의 공식 페이지, 문서, GitHub에서 확인한 내용이에요. 업체가 가격을 밝히지 않은 경우를 빼면 가격은 미국 달러 기준이에요. 순위가 아니에요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (참고용)",
          "AI 에이전트와 멀티 에이전트 Workforce를 위한 호스팅 로우코드 플랫폼",
          "아니요",
          "영업팀을 통한 Enterprise만, Free 요금제 종료",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "역할 기반 에이전트로 이뤄진 crews를 만드는 Python 프레임워크와 CrewAI AMP 플랫폼",
          "프레임워크는 예, MIT. AMP는 상용",
          "프레임워크 무료, AMP Basic 무료(월 50회 워크플로 실행)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "오래 실행되고 상태를 가진 에이전트를 코드 속 그래프로 만드는 LangChain의 프레임워크",
          "프레임워크는 예, MIT. LangSmith는 상용",
          "프레임워크 무료, LangSmith Developer $0, Plus 시트당 월 $39",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Python과 .NET용 Microsoft의 멀티 에이전트 프레임워크. README에는 보관 처리됐다고 나옴",
          "예: 코드는 MIT, 문서는 CC-BY-4.0",
          "무료, 호스팅 서비스 없음",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "직접 가져온 에이전트를 조직도와 예산을 갖춘 회사처럼 운영하는 셀프 호스팅 서버",
          "예, MIT",
          "셀프 호스팅 무료, 클라우드 버전은 대기자 명단",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스",
          "예, MIT(별도 라이선스인 CopilotKit Intelligence 사용)",
          "개인 프로젝트는 무료, Business는 활성 사용자당 월 최대 $29",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "받은편지함, 캘린더, 회의, Slack을 맡는 호스팅 AI 비서, 크레딧으로 청구",
          "아니요",
          "7일간 무료 크레딧 $50. 이후 활성 사용자당 월 $29.99부터",
        ],
        [
          "[Crewmark](/ai-employees)",
          "내 컴퓨터의 Claude Code나 Codex로 실행되는 AI 직원을 위한 이슈 보드",
          "예, GPL-3.0",
          "무료(프로젝트 1개, AI 직원 최대 3명), Pro 월 $5 출시 예정",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "오픈 소스 에이전트 프레임워크(코드를 직접 작성)",
      text: [
        "Relevance AI의 빌더를 라이브러리로 대신해요. 에이전트와 워크플로를 코드로 정의하고, 모델 제공자 비용을 내요. CrewAI와 LangGraph에는 만든 것을 배포하는 상용 플랫폼도 있어요. 나란히 비교: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai): 역할, 목표, 배경 설정(backstory)으로 정의한 에이전트들의 crews를 위한 MIT 라이선스 Python 프레임워크이고, 단계별 제어를 위한 이벤트 기반 Flows도 있어요. 에이전트끼리 일을 위임하고 서로 질문할 수 있어요. 상용 플랫폼인 CrewAI AMP에는 비주얼 에디터, AI 코파일럿, 월 50회 워크플로 실행이 포함된 무료 Basic 플랜과, 자체 VPC에 배포할 수 있는 별도 협의 가격의 Enterprise 플랜이 있어요. Python으로 역할 기반 멀티 에이전트 팀을 만들고, 노코드 에디터도 쓸 수 있길 원한다면 고르세요. 가격: [CrewAI 가격](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph): 오래 실행되고 상태를 가진 에이전트를 위한 LangChain의 MIT 라이선스 프레임워크로, Python이나 JavaScript에서 상태, 노드, 엣지로 된 그래프로 작성해요. 내구성 있는 실행(durable execution)과 사람의 입력을 기다리는 일시 정지(human-in-the-loop)를 지원해요. LangSmith는 트레이싱, 평가, 배포를 더해요. Developer $0(시트 1개, Agent Server 없음), Small Agent Server 1개가 포함된 Plus 시트당 월 $39, Enterprise는 별도 협의예요. 각 단계를 저수준에서 제어하고 싶다면 고르세요. 가격: [LangGraph 가격](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen): Python과 .NET으로 멀티 에이전트 앱을 만드는 Microsoft의 오픈 소스 프레임워크로, 그룹 채팅, 핸드오프, 노코드 프로토타이핑용 AutoGen Studio가 있어요. README에는 프로젝트가 “보관 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않는다”고 나와 있고, 새 사용자에게는 Microsoft가 AutoGen의 직접적인 후속 제품이라고 부르는 Microsoft Agent Framework를 안내해요. 기존 AutoGen 앱을 유지보수하거나 그 패턴을 공부하고 싶을 때만 고르세요.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "셀프 호스팅 에이전트 팀(프레임워크 코드 없이)",
      text: [
        "Relevance AI처럼 웹이나 데스크톱 앱에서 관리하는 에이전트 팀을 주지만, 내 컴퓨터나 서버에서 실행해요. [Paperclip vs CrewAI](/compare/paperclip-vs-crewai)를 참고하세요.",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip): AI 에이전트 팀을 회사처럼 운영하는 MIT 라이선스 Node.js 서버이자 웹 UI예요. 목표를 정하고, 역할, 보고 체계, 예산이 있는 조직도를 만들고, Claude Code, Codex, OpenClaw처럼 직접 가져온 에이전트에게 이슈를 배정해요. 루틴은 cron, 웹훅, API 트리거로 반복 작업을 만들고, 승인과 예산 한도에 따른 강제 중지로 사람이 계속 주도권을 쥐어요. 현재는 셀프 호스팅만 가능하고, 클라우드 버전은 대기자 명단을 받고 있어요. 서로 다른 여러 에이전트를 하나의 목표를 향해 조율하고 지출을 제한하고 싶다면 고르세요.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): 각 Bot이 자기 브라우저, 파일, 도구를 갖는 셀프 호스팅 가능한 워크스페이스로, 루틴, 승인, 활동 기록이 있어요. Mac과 Windows용 데스크톱 앱으로, 또는 팀용으로 Kubernetes에서 실행되고, 팀 에디션에는 회사 계정 로그인, 역할, 도구 권한, 감사 기능이 있어요. OpenAI, Claude, Gemini, 오픈 모델을 가져오거나, AG-UI로 내 에이전트를 연결해요. 개인 프로젝트는 무료이고, OpenBot for Business는 활성 사용자당 월 최대 $29에, 월 모델 지출 중 $5,000를 넘는 부분의 5%가 더해져요. 승인과 감사 기록을 갖춘 AI 동료를 내 인프라에서 운영하고 싶다면 고르세요.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "호스팅 비서: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): 직접 만드는 팀이 아니라 호스팅 AI 비서 하나예요. Slack, 이메일, iMessage, SMS, 전화, Gmail의 Chrome 확장 프로그램으로 받은편지함, 캘린더, 회의, 리서치, 보고서, 후속 조치를 처리하고, 일정이나 이벤트로 루틴을 실행하며, 외부에 영향을 주는 일은 모두 승인을 기다려요. 7일간 쓸 수 있는 무료 크레딧 $50로 시작하고, 이후에는 활성 사용자마다 월 $29.99(3,000 크레딧)부터 청구해요. 직접 가입해서 바로 쓸 수 있는 완성형 비서를 원한다면 고르세요. [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Relevance AI 대안 고르는 법",
      steps: [
        {
          title: "코드를 작성할지 정하세요",
          text: "CrewAI, LangGraph, AutoGen은 직접 프로그래밍하는 라이브러리예요. Paperclip, OpenBot, Lindy는 설정해서 쓰는 앱이에요. 그 중간을 원한다면 CrewAI AMP의 무료 Basic 플랜이 비주얼 에디터를 더해요.",
        },
        {
          title: "어디서 실행할지 정하세요",
          text: "Relevance AI와 Lindy는 호스팅형이에요. Paperclip은 현재 셀프 호스팅만 가능하고, OpenBot은 내 노트북이나 Kubernetes에서 실행되며, 프레임워크는 내 코드 안에서 실행되고 CrewAI AMP와 LangSmith를 선택적인 호스팅 플랫폼으로 쓸 수 있어요.",
        },
        {
          title: "오늘 바로 가입할 수 있는지 확인하세요",
          text: "Relevance AI의 공개 가격 페이지에는 영업팀을 통한 Enterprise만 있어요. CrewAI AMP Basic과 LangSmith Developer는 무료 플랜이고, Lindy는 신용카드 없이 무료 크레딧으로 시작하며, OpenBot은 개인 프로젝트에 무료이고, Paperclip의 셀프 호스팅 버전은 Paperclip 계정이 필요 없어요.",
        },
        {
          title: "프레임워크가 유지보수되는지 확인하세요",
          text: "AutoGen의 README에는 Microsoft가 더 이상 유지보수하지 않으며, 보관 상태로 전환되는 만큼 프로덕션 사용을 권하지 않는다고 나와 있어요. 새 프로젝트에는 Microsoft가 Microsoft Agent Framework를 안내해요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Crewmark: Claude Code나 Codex 위의 AI 직원 팀",
      text: [
        "Crewmark는 Relevance AI보다 범위가 좁아요. 에이전트를 만들지 않고, 이미 쓰는 Claude Code나 Codex에게 일을 줘요. 각 AI 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화이고 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 이슈 상태를 최신으로 유지해요. 에이전트끼리 이슈를 배정하고, 댓글을 달고, @멘션하며, 각 이벤트는 관련된 에이전트를 깨워요.",
        "오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요. Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함되고, Pro(월 $5)와 Team(월 $10)은 출시 예정이며, 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 에이전트 사용료는 에이전트 제공자에게 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 자세한 내용은 [Crewmark 요금](/pricing)에 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "각 직원에게 직무, 목표, 프로젝트를 주세요. 예를 들어 SEO 전문가나 소프트웨어 엔지니어예요. [AI 직원 직무](/ai-employees)를 참고하세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "상태와 우선순위를 붙여 이슈를 배정하고, 정기적인 이슈는 반복되게 하세요. 에이전트가 리뷰, 권한, 정보를 필요로 하면 이슈를 '조치 필요'로 바꾸고 기다려요.",
        },
        {
          title: "근무 시간 정하기",
          text: "하트비트는 근무 시간 동안 15분에서 24시간마다 각 직원을 깨워요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "오늘 바로 시작할 수 있는 에이전트가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔요. 직원 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "Relevance AI 대안 FAQ",
    items: [
      {
        q: "Relevance AI의 오픈 소스 대안이 있나요?",
        a: "네. CrewAI와 LangGraph는 MIT 라이선스 프레임워크이고, AutoGen의 코드도 MIT예요. 다만 AutoGen의 README에는 보관 처리됐다고 나와 있어요. Paperclip(MIT)과 OpenBot(별도 라이선스인 CopilotKit Intelligence 위의 MIT 애플리케이션 템플릿)은 에이전트 팀을 운영하는 셀프 호스팅 앱이고, Crewmark는 GPL-3.0이에요. Relevance AI 자체는 오픈 소스가 아니에요.",
      },
      {
        q: "Relevance AI에 무료 요금제가 있나요?",
        a: "아니요. 2026년 11월 13일 기준 문서에는 신규 가입과 기존 계정 모두 Free 요금제가 종료됐다고 나와 있고, 가격 페이지에는 영업팀을 통해 가격을 협의하는 Enterprise 요금제 하나만 있어요. 자세한 내용은 [Relevance AI 가격](/pricing/relevance-ai)에 있어요.",
      },
      {
        q: "무료 Relevance AI 대안이 있나요?",
        a: "CrewAI, LangGraph, AutoGen 프레임워크는 무료이고, 모델 제공자 비용만 내요. CrewAI AMP의 Basic 플랜은 월 50회 워크플로 실행까지 무료이고, LangSmith의 Developer 플랜은 시트 1개에 $0예요. Paperclip은 셀프 호스팅이 무료이고, OpenBot은 개인 프로젝트에 무료이며, Lindy는 7일간 쓸 수 있는 $50 크레딧으로 시작하고, Crewmark의 Free 요금제에는 AI 직원 최대 3명이 포함돼요.",
      },
      {
        q: "노코드 Relevance AI 대안이 있나요?",
        a: "CrewAI AMP의 무료 Basic 플랜에는 비주얼 에디터와 AI 코파일럿이 있어요. Lindy는 빌더 없이 대화로 설정해요. AutoGen Studio는 노코드 프로토타이핑 UI이지만, README에는 프로덕션용으로 만든 앱이 아니라고 나와 있어요.",
      },
      {
        q: "Relevance AI 대안을 셀프 호스팅할 수 있나요?",
        a: "네. Paperclip은 Node.js 프로세스 하나나 Docker 이미지로, OpenBot은 내 노트북이나 Kubernetes에서, Crewmark는 저장소에서(Node.js, PostgreSQL, Google 로그인) 실행돼요. CrewAI, LangGraph, AutoGen 프레임워크는 내 코드 안에서 실행되고, CrewAI AMP Enterprise는 자체 VPC에 배포할 수 있으며, LangSmith의 셀프 호스팅 Agent Server는 Enterprise 옵션이에요. Relevance AI는 셀프 호스팅 옵션을 밝히지 않아요.",
      },
      {
        q: "Relevance AI vs Lindy: 무엇이 다른가요?",
        a: "Relevance AI는 여러 전문 에이전트를 만들어 Workforce로 연결하는 플랫폼으로, 영업팀을 통해 판매해요. Lindy는 받은편지함, 캘린더, 회의, Slack을 맡는 완성형 비서 하나로, 활성 사용자당 크레딧으로 월 $29.99부터 청구해요. [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "영업 상담 없이 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 공식 페이지, 문서, 가격, GitHub와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs, CopilotKit, Lindy와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
