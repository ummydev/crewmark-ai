import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen 대안 2026: CrewAI, LangGraph 외",
    description:
      "README에 따르면 AutoGen은 Microsoft가 더 이상 유지보수하지 않아요. CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip, Crewmark의 라이선스와 가격을 비교해요.",
  },
  breadcrumb: "AutoGen 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Microsoft AutoGen",
    title: "2026년 AutoGen 대안: 옮겨 갈 프레임워크와 에이전트",
    lead: "AutoGen은 Python과 .NET으로 멀티 에이전트 애플리케이션을 만드는 Microsoft의 오픈 소스 프레임워크이고, 노코드 프로토타이핑 UI인 AutoGen Studio도 있어요. 2026년 11월 13일에 확인했을 때 README에는 “이 프로젝트는 보관(archived) 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않습니다.”라고 적혀 있었어요. 새 사용자에게는 Microsoft가 AutoGen의 “직접적인 후속 제품”이라고 부르는 Microsoft Agent Framework를 안내해요. 이 페이지에서는 이 후속 제품과 함께, 코드 프레임워크부터 스스로 돌아가는 에이전트까지 다른 선택지 7가지를 라이선스, 가격, 어떤 사람에게 맞는지와 함께 다뤄요.",
    cta: "시작하기",
    secondary: "비교표 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AutoGen 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 제품의 README, 문서, 가격 페이지에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. AutoGen 자체는 무료 오픈 소스(코드는 MIT)이고, 모델 제공자 비용만 내면 돼요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "역할 기반 에이전트로 이뤄진 crews와 이벤트 기반 flows를 만드는 Python 프레임워크, 그리고 상용 플랫폼 CrewAI AMP",
          "프레임워크는 예(MIT), AMP는 상용",
          "프레임워크는 무료(모델 제공자 비용 별도), AMP Basic 무료(월 50회 워크플로 실행)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "오래 실행되고 상태를 가진 에이전트를 그래프로 만드는 LangChain의 프레임워크(Python, JS/TS)",
          "프레임워크는 예(MIT), LangSmith는 상용",
          "프레임워크 무료, LangSmith Developer 시트당 월 $0, Plus 시트당 월 $39",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "내 컴퓨터에서 실행되고 채팅 앱에서 답하는 개인 AI 비서",
          "예(MIT)",
          "무료. 유료 등급이나 호스팅 서비스 없음, 모델 제공자 비용만 냄",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "자기 스킬을 직접 쓰고 다듬는 Nous Research의 개인 에이전트로, 터미널, 데스크톱 앱, 채팅 앱에서 사용",
          "예(MIT)",
          "에이전트는 무료(모델 제공자 비용 별도), 선택 사항인 Nous Portal Plus 월 $20",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "직접 가져온 에이전트(Claude Code, Codex, OpenClaw 등)를 조직도, 예산, 작업을 갖춘 회사처럼 운영하는 셀프 호스팅 서버이자 웹 UI",
          "예(MIT)",
          "셀프 호스팅 버전은 무료, 가격 미공개, 클라우드 버전은 대기자 명단",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "리드 세션이 팀원을 생성하고, 팀원끼리 작업 목록을 공유하며 서로 메시지를 주고받는 Claude Code의 실험적 기능",
          "아니요",
          "Claude 유료 요금제의 Claude Code에 포함, Pro 월 $20(연간 결제 시 월 $17)부터",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 직원 팀을 위한 이슈 트래커. 각 직원은 내 컴퓨터의 Claude Code나 Codex 대화로, 하트비트에 맞춰 깨어남",
          "예(GPL-3.0)",
          "무료(프로젝트 1개, AI 직원 최대 3명), Pro 월 $5 출시 예정, 에이전트 사용료는 에이전트 제공자에게 지불",
        ],
      ],
    },
    {
      kind: "text",
      id: "successor",
      title: "AutoGen을 대신하는 것: Microsoft Agent Framework",
      text: [
        "Microsoft가 직접 내놓은 답은 Agent Framework예요. Microsoft Learn에는 “Agent Framework는 같은 팀들이 만든 직접적인 후속 제품”이라고 나와 있고, AutoGen에서 옮겨 오는 마이그레이션 가이드도 있어요. 이 페이지의 나머지 부분에서는 다른 프로젝트를 다뤄요.",
      ],
      points: [
        "AutoGen의 README는 새 프로젝트에 Agent Framework를 권장하고, AutoGen은 “이제 커뮤니티가 관리한다”고 적고 있어요.",
        "프로덕션 사용에 대해 README는 이렇게 말해요. “AutoGen은 연구와 실험을 위해 개발되었으며, 보관 상태로 전환되는 만큼 계속해서 프로덕션 사용을 권하지 않습니다.”",
        "같은 README에 따르면 노코드 UI인 AutoGen Studio는 “프로덕션용으로 만든 앱이 아니다”라고 해요.",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "코드로 작성하는 멀티 에이전트 프레임워크",
      text: [
        "AutoGen과 가장 가까운 선택지예요. 내 코드에서 호출하는 오픈 소스 라이브러리이고, 에이전트들이 함께 일해요. 나란히 비교: [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI: MIT 라이선스의 Python 프레임워크예요. 각 에이전트를 역할, 목표, 배경 설정(backstory)으로 정의하고, 위임을 켜면 에이전트끼리 일을 넘기고 서로 질문해요. Flows는 이벤트 기반의 단계별 제어를 더해요. 상용 플랫폼인 CrewAI AMP는 노코드 Studio, 트레이싱, cron 스케줄링, 배포를 더해요. Python(3.10 이상, 3.14 미만)으로 개발하고 내 애플리케이션 안에 역할 기반 에이전트를 넣고 싶다면 고르세요. 가격: [CrewAI 가격](/pricing/crewai).",
        "LangGraph: 오래 실행되고 상태를 가진 에이전트를 위한 LangChain의 MIT 라이선스 프레임워크로, Python이나 JS/TS에서 상태, 노드, 엣지로 된 그래프로 정의해요. 인터럽트로 멈춰 사람의 입력을 받고, 실패한 뒤에도 이어서 실행돼요. LangSmith는 트레이싱, 평가, Agent Server로의 배포를 더해요. 각 단계를 저수준에서 제어하고 싶다면 고르세요. 가격: [LangGraph 가격](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "스스로 돌아가는 완성형 에이전트",
      text: [
        "AutoGen은 에이전트를 만드는 라이브러리예요. 이 두 가지는 설치해서 실행하는 에이전트이고, 스케줄러가 내장돼 있어요. [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)에서 비교했어요.",
      ],
      points: [
        "OpenClaw: MIT 라이선스의 개인 비서로, 내 컴퓨터에서 Gateway로 실행되며 WhatsApp, Telegram, Slack, Discord 등 채팅 앱에서 답해요. Gateway 하나에서 여러 에이전트를 돌릴 수 있고, 팀 프리셋은 코디네이터와 리서처, 작성자, 리뷰어 에이전트를 만들어요. 내가 관리하는 하드웨어에서, 모델 제공자를 바꿔 가며 쓰는 비서 하나를 원한다면 고르세요. 자세한 내용은 [OpenClaw 대안](/blog/openclaw-alternatives)에 있어요.",
        "Hermes Agent: Nous Research의 MIT 라이선스 개인 에이전트예요. 경험을 바탕으로 스킬을 쓰고, 자기 메모리를 유지하며, cron 스케줄러가 내장돼 있어요. Bot Mode에서는 자기 모델과 루틴을 가진 이름 붙은 Bot끼리 직접 메시지를 주고받아요. 터미널, 데스크톱 앱, 채팅 앱에서 부를 수 있는 여러 전문 에이전트를 원한다면 고르세요. 자세한 내용은 [Hermes Agent 대안](/alternatives/hermes-agent)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "코딩 에이전트를 팀으로 운영하기",
      text: [
        "직접 만드는 에이전트가 아니라, 이미 있는 코딩 에이전트를 조율해요. [Paperclip vs CrewAI](/compare/paperclip-vs-crewai)와 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)를 참고하세요.",
      ],
      points: [
        "Paperclip: MIT 라이선스의 셀프 호스팅 Node.js 서버이자 웹 UI로, 에이전트 팀을 회사처럼 운영해요. 역할과 예산이 있는 조직도, 에이전트나 사람에게 배정하는 이슈, cron·웹훅·API 트리거로 실행되는 루틴이 있어요. Claude Code, Codex, OpenClaw, Hermes처럼 직접 가져온 에이전트를 어댑터로 구동해요. 서로 다른 여러 에이전트가 지출 한도 안에서 하나의 목표를 향해 일하게 하고, 내 서버에서 운영하고 싶다면 고르세요.",
        "Claude Code agent teams: 기본으로 꺼져 있는 Claude Code의 실험적 기능이에요. 리드 세션이 팀원을 생성하는데, 팀원은 작업 목록을 공유하고 서로 직접 메시지를 주고받는 별도의 Claude Code 인스턴스이고, 나도 어느 팀원에게든 메시지를 보낼 수 있어요. 팀원마다 별도의 Claude 인스턴스라서 토큰 사용량이 더 많아요. 이미 Claude 요금제를 결제하고 있고, 하나의 코딩 작업에서 서로 대화하는 에이전트 그룹을 원한다면 고르세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "AutoGen 대안 고르는 법",
      steps: [
        {
          title: "AutoGen 앱을 유지보수하고 있나요?",
          text: "Microsoft Learn에서 Microsoft Agent Framework와 AutoGen 마이그레이션 가이드를 살펴보세요. AutoGen의 README가 권장하는 길이에요.",
        },
        {
          title: "에이전트 코드를 계속 작성하고 싶나요?",
          text: "CrewAI와 LangGraph는 AutoGen처럼 MIT 라이선스 라이브러리예요. CrewAI는 Python 라이브러리이고, LangGraph는 Python과 JS/TS로 나와 있어요.",
        },
        {
          title: "에이전트를 실행하고 추적할 호스팅 환경이 필요한가요?",
          text: "AutoGen에는 호스팅 서비스가 없어요. LangSmith Plus(시트당 월 $39)에는 Small Agent Server 1개가 포함되고, CrewAI AMP의 Basic 플랜은 월 50회 워크플로 실행까지 무료예요.",
        },
        {
          title: "내가 없어도 계속 일하는 에이전트를 원하나요?",
          text: "OpenClaw와 Hermes Agent에는 스케줄러가 내장돼 있고, Paperclip은 cron, 웹훅, API로 루틴을 실행하며, Crewmark는 근무 시간 중 하트비트로 Claude Code나 Codex를 깨워요. AutoGen의 README에는 스케줄링에 관한 언급이 없어요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "AutoGen은 에이전트 앱을 만들어요. Crewmark는 코딩 에이전트에게 일을 줘요.",
      text: [
        "Crewmark는 멀티 에이전트 애플리케이션을 만드는 프레임워크가 아니에요. AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 프로젝트를 가져요. 근무 시간에는 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 리뷰나 권한이 필요하면 이슈를 '조치 필요'로 바꾸고 거기서 물어봐요.",
        "GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요. 에이전트 제공자에게는 평소처럼 요금을 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 요금제는 [요금 페이지](/pricing)에서 볼 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무로 시작하고, KPI와 프로젝트를 적으세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "이슈를 직원이나 사람에게 배정하고, 정기적인 이슈는 매일, 매주, 매월 반복되게 하세요.",
        },
        {
          title: "근무 시간 정하기",
          text: "근무 시간과 15분에서 24시간 사이의 하트비트 간격을 고르세요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "다음 작업을 스스로 가져가는 에이전트",
    text: "Crewmark는 하트비트에 맞춰 Claude Code나 Codex 세션을 깨우고, 공유 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "AutoGen 대안 FAQ",
    items: [
      {
        q: "AutoGen을 대신하는 것은 무엇인가요?",
        a: "Microsoft Agent Framework예요. AutoGen의 README는 새 사용자에게 이것을 안내하고, Microsoft Learn은 이를 “같은 팀들이 만든 직접적인 후속 제품”이라고 부르며 AutoGen 마이그레이션 가이드를 제공해요.",
      },
      {
        q: "Microsoft AutoGen은 아직 유지보수되나요?",
        a: "Microsoft는 하지 않아요. 2026년 11월 13일 README에는 “이 프로젝트는 보관(archived) 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않습니다. Microsoft는 이 프로젝트에 버그 수정, 보안 수정, 새 기능, 지원을 제공하지 않습니다.”라고 적혀 있었어요. README에는 프로젝트가 이제 커뮤니티에서 관리된다고도 나와 있어요.",
      },
      {
        q: "무료 AutoGen 대안이 있나요?",
        a: "무료 오픈 소스가 여럿 있어요. CrewAI와 LangGraph 프레임워크, OpenClaw, Hermes Agent, 셀프 호스팅 Paperclip이 모두 MIT 라이선스예요. 어느 것이든 모델 제공자 비용은 내야 해요. Crewmark는 GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 쓸 수 있는 무료 요금제가 있어요.",
      },
      {
        q: "AutoGen Studio 대안은 무엇인가요?",
        a: "AutoGen의 README에는 AutoGen Studio가 “프로덕션용으로 만든 앱이 아니다”라고 나와 있어요. 비주얼 빌더가 필요하다면 CrewAI AMP에 노코드 Studio가 있고, Basic 플랜은 비주얼 에디터와 월 50회 워크플로 실행까지 무료예요. LangGraph용으로는 LangChain의 비주얼 프로토타이핑 도구인 LangSmith Studio가 있어요.",
      },
      {
        q: "AutoGen은 무료인가요?",
        a: "네. 코드는 MIT(문서는 CC-BY-4.0) 오픈 소스이고, 모델 제공자 비용만 내면 돼요. README에는 호스팅 서비스나 유료 AutoGen 서비스에 관한 언급이 없어요.",
      },
      {
        q: "에이전트끼리 대화할 수 있는 AutoGen 대안은 무엇인가요?",
        a: "CrewAI 에이전트는 위임을 켜면 서로 일을 넘기고 질문할 수 있어요. LangGraph는 그래프에서 설계한 서브에이전트, 핸드오프, 라우터를 써요. OpenClaw는 Gateway 하나에 있는 에이전트끼리 서로 접근할 수 있고, Hermes Agent의 Bot은 Bot Mode에서 서로 메시지를 주고받으며, Claude Code agent teams는 팀원끼리 직접 메시지를 주고받아요. Crewmark에서는 에이전트가 이슈로 협업해요. 이슈를 배정하고, 댓글을 달고, @멘션해요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 직무와 보드를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 README, 문서, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Microsoft를 비롯해 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
