import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph 대안 2026: CrewAI, AutoGen 외",
    description:
      "LangGraph 대안 비교: CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, Claude Code agent teams, Crewmark를 라이선스, 가격, 맞는 용도로 정리했어요.",
  },
  breadcrumb: "LangGraph 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · LangChain LangGraph",
    title: "2026년 LangGraph 대안: 프레임워크, 완성형 에이전트, 에이전트 팀",
    lead: "LangGraph는 오래 실행되고 상태를 가진 에이전트를 위한 LangChain의 오픈 소스(MIT) 프레임워크예요. Python이나 JS/TS에서 워크플로를 상태, 노드, 엣지로 된 그래프로 정의해요. 의도적으로 저수준으로 설계됐고, “프롬프트나 에이전트 아키텍처를 규정하지 않는다”고 밝혀요. LangChain의 LangSmith 플랫폼에서 무료 Developer 플랜은 시트 1개에 Agent Server가 없고, 셀프 호스팅 배포는 Enterprise 전용이에요. 역할로 정의하는 에이전트, 라이브러리 대신 완성형 에이전트, 또는 코딩 에이전트 팀을 원한다면, 여기 소개하는 7가지 선택지를 라이선스, 가격, 어떤 사람에게 맞는지와 함께 살펴보세요.",
    cta: "시작하기",
    secondary: "비교표 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "LangGraph 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 제품의 README, 문서, 가격 페이지에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. LangGraph 자체는 MIT로 무료이고, LangSmith Plus는 시트당 월 $39예요. 자세한 내용은 [LangGraph 가격](/pricing/langgraph)에 있어요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "역할 기반 에이전트로 이뤄진 crews와 이벤트 기반 flows를 만드는 Python 프레임워크, 그리고 상용 플랫폼 CrewAI AMP",
          "프레임워크는 예(MIT), AMP는 상용",
          "프레임워크는 무료(모델 제공자 비용 별도), AMP Basic 무료(월 50회 워크플로 실행)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Python과 .NET용 Microsoft의 멀티 에이전트 프레임워크. README에는 보관 처리되어 Microsoft가 더 이상 유지보수하지 않는다고 나옴",
          "예(코드는 MIT, 문서는 CC-BY-4.0)",
          "무료(모델 제공자 비용 별도), 호스팅 서비스 없음",
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
      id: "frameworks",
      title: "다른 에이전트 프레임워크",
      text: [
        "LangGraph처럼 내 코드에서 호출하는 라이브러리예요. 나란히 비교: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI: MIT 라이선스의 Python 프레임워크예요. LangGraph에는 역할 개념이 내장돼 있지 않지만, CrewAI에서는 각 에이전트를 역할, 목표, 배경 설정(backstory)으로 정의해요. 위임을 켜면 에이전트끼리 일을 넘기고 서로 질문하며, Flows는 상태와 분기를 갖춘 이벤트 기반의 단계별 제어를 더해요. CrewAI AMP는 노코드 Studio, 트레이싱, cron 스케줄링, 배포를 더해요. Python(3.10 이상, 3.14 미만)으로 개발하고 역할별로 조직된 에이전트를 원한다면 고르세요. 가격: [CrewAI 가격](/pricing/crewai).",
        "AutoGen: 그룹 채팅, selector 팀과 swarm 팀을 갖춘 Python·.NET용 Microsoft의 MIT 라이선스 멀티 에이전트 프레임워크예요. 2026년 11월 13일 README에는 프로젝트가 “보관 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않는다”고 적혀 있었고, 프로덕션 사용을 권하지 않으며, 새 사용자에게는 후속 제품인 Microsoft Agent Framework를 안내했어요. 기존 AutoGen 앱을 유지보수하거나 멀티 에이전트 패턴을 공부하고 싶다면 고르세요. 자세한 내용은 [AutoGen 대안](/alternatives/autogen)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "라이브러리 대신 완성형 에이전트",
      text: [
        "LangGraph에서는 에이전트를 직접 만들어요. 이 두 가지는 설치해서 실행하는 에이전트이고, 각각 스케줄러가 내장돼 있어요. [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)에서 비교했어요.",
      ],
      points: [
        "OpenClaw: MIT 라이선스의 개인 비서로, 내 컴퓨터에서 Gateway로 실행되며 WhatsApp, Telegram, Slack, Discord 등 채팅 앱에서 답해요. Gateway 하나에서 여러 에이전트를 돌리고, Automations 스케줄러가 내장돼 있으며, 프로젝트에 유료 등급이나 호스팅 서비스는 없어요. 내가 관리하는 하드웨어에서, 모델 제공자를 바꿔 가며 쓰는 비서 하나를 원한다면 고르세요. 자세한 내용은 [OpenClaw 대안](/blog/openclaw-alternatives)에 있어요.",
        "Hermes Agent: Nous Research의 MIT 라이선스 개인 에이전트예요. 경험을 바탕으로 스킬을 쓰고, 자기 메모리를 유지하며, 내장 cron 스케줄러로 루틴을 실행해요. Bot Mode에서는 자기 모델을 가진 이름 붙은 Bot끼리 직접 메시지를 주고받아요. 시간이 지날수록 자기 스킬을 개선하고, 터미널, 데스크톱 앱, 채팅 앱에서 부를 수 있는 에이전트를 원한다면 고르세요. 자세한 내용은 [Hermes Agent 대안](/alternatives/hermes-agent)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "이미 쓰는 코딩 에이전트를 조율하기",
      text: [
        "조율하고 싶은 에이전트가 Claude Code나 Codex 같은 코딩 에이전트라면, 이 도구들이 팀으로 운영해 줘요. [Paperclip vs CrewAI](/compare/paperclip-vs-crewai)와 [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw)를 참고하세요.",
      ],
      points: [
        "Paperclip: MIT 라이선스의 셀프 호스팅 Node.js 서버이자 웹 UI로, 에이전트를 회사처럼 운영해요. 역할과 예산이 있는 조직도, 에이전트나 사람에게 배정하는 이슈, 승인, cron·웹훅·API 트리거로 실행되는 루틴이 있어요. 스스로를 “에이전트 프레임워크가 아니다”라고 설명하며, Claude Code, Codex, OpenClaw처럼 직접 가져온 에이전트를 어댑터로 구동해요. 많은 에이전트가 지출 한도 안에서 하나의 목표를 향해 일하게 하고, 내 서버에서 운영하고 싶다면 고르세요.",
        "Claude Code agent teams: 기본으로 꺼져 있는 Claude Code의 실험적 기능이에요. 리드 세션이 팀원을 생성하는데, 팀원은 의존 관계가 있는 작업 목록을 공유하고 서로 직접 메시지를 주고받는 별도의 Claude Code 인스턴스예요. 이미 Claude 요금제를 결제하고 있고, 하나의 코딩 작업에 여러 Claude Code 인스턴스를 투입하고 싶다면 고르세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "LangGraph 대안 고르는 법",
      steps: [
        {
          title: "각 단계를 저수준에서 제어해야 하나요?",
          text: "LangGraph가 바로 그 용도로 만들어졌어요. 더 높은 수준에서 시작하고 싶다면, README는 LangGraph 위에 만들어지고 서브에이전트를 더한 Deep Agents를 안내해요.",
        },
        {
          title: "역할로 정의하는 에이전트를 원하나요?",
          text: "CrewAI 에이전트에는 역할, 목표, 배경 설정이 있고, Paperclip에는 직함과 직무 설명이 있는 조직도가 있으며, Crewmark는 각 AI 직원에게 직무, KPI, 프로젝트를 줘요.",
        },
        {
          title: "예약 실행이 필요한가요?",
          text: "LangGraph는 LangSmith Agent Server에서 cron 작업을 실행하고, 라이브러리 단독으로는 언급이 없어요. CrewAI는 AMP에서 cron 스케줄링을 제공해요. OpenClaw와 Hermes Agent에는 스케줄러가 내장돼 있고, Paperclip은 루틴을 실행하며, Crewmark에는 하트비트와 반복 이슈가 있어요.",
        },
        {
          title: "비용이 신경 쓰이나요?",
          text: "오픈 소스 프레임워크는 무료이고, 모델 호출 비용을 내요. LangGraph cron 작업은 실행할 때마다 같은 입력을 보내며, LangChain 문서는 반복 실행에 LLM API 요금이 발생할 수 있으니 쓰지 않는 작업은 삭제하라고 안내해요. Paperclip에는 한도에 이르면 바로 멈추는 예산이 있고, Crewmark는 내 Claude Code나 Codex 구독을 써요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "LangGraph는 앱 안에 에이전트를 만들어요. Crewmark는 코딩 에이전트를 팀으로 운영해요.",
      text: [
        "Crewmark는 프레임워크가 아니고, 그래프를 작성할 필요도 없어요. AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 프로젝트를 가져요. 근무 시간에는 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 리뷰나 권한이 필요하면 이슈를 '조치 필요'로 바꾸고 거기서 물어봐요.",
        "GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요. 에이전트 제공자에게는 평소처럼 요금을 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 요금제는 [요금 페이지](/pricing)에서 볼 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 데이터 분석가 같은 직무로 시작하고, KPI와 프로젝트를 적으세요.",
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
    title: "그래프를 짜지 않아도 되는 에이전트 팀",
    text: "Crewmark는 하트비트에 맞춰 Claude Code나 Codex 세션을 깨우고, 공유 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "LangGraph 대안 FAQ",
    items: [
      {
        q: "LangGraph의 오픈 소스 대안은 무엇인가요?",
        a: "CrewAI 프레임워크, AutoGen(README에 보관 처리되어 Microsoft가 더 이상 유지보수하지 않는다고 나옴), OpenClaw, Hermes Agent, Paperclip은 모두 MIT 라이선스예요. Crewmark는 GPL-3.0 오픈 소스예요. agent teams를 실행하는 Claude Code는 오픈 소스가 아니에요.",
      },
      {
        q: "LangGraph는 무료인가요?",
        a: "프레임워크는 MIT로 무료예요. LangChain의 LangSmith 플랫폼에는 시트당 월 $0인 Developer 플랜(시트 1개, 기본 트레이스 월 5k건까지, 이후 종량제, Agent Server 없음), Small Agent Server 1개가 포함된 시트당 월 $39인 Plus, 그리고 가격을 별도로 협의하는 Enterprise가 있어요. 자세한 내용은 [LangGraph 가격](/pricing/langgraph)에 있어요.",
      },
      {
        q: "LangGraph vs CrewAI: 무엇이 다른가요?",
        a: "LangGraph는 저수준이에요. 상태, 노드, 엣지로 된 그래프를 직접 만들고, 역할 개념이 내장돼 있지 않아요. CrewAI는 각 에이전트를 역할, 목표, 배경 설정으로 정의해 crews로 묶고, Flows로 단계별 제어를 해요. 두 프레임워크 모두 MIT 라이선스예요. CrewAI는 Python 프레임워크이고, LangGraph는 Python과 JS/TS로 나와 있어요. [CrewAI vs LangGraph](/compare/crewai-vs-langgraph)를 참고하세요.",
      },
      {
        q: "LangGraph를 쓰려면 LangChain이 필요한가요?",
        a: "아니요. LangChain 문서에는 “LangGraph는 LangChain을 필요로 하지 않는다”고 나와 있어요. 예제에서는 LangChain 모델 연동을 자주 쓰지만, LangGraph는 코드가 호출하는 어떤 모델과도 작동해요.",
      },
      {
        q: "2026년에도 AutoGen이 LangGraph의 대안인가요?",
        a: "README에는 프로젝트가 “보관 처리되었으며 Microsoft가 더 이상 적극적으로 유지보수하지 않는다”고 나와 있고, 프로덕션 사용을 권하지 않아요. Microsoft는 새 사용자에게 AutoGen의 직접적인 후속 제품이라고 부르는 Microsoft Agent Framework를 안내해요. [AutoGen 대안](/alternatives/autogen)을 참고하세요.",
      },
      {
        q: "일정에 따라 에이전트를 실행하는 LangGraph 대안은 무엇인가요?",
        a: "OpenClaw(Automations), Hermes Agent(내장 cron 스케줄러), Paperclip(cron, 웹훅, API로 실행되는 루틴), Crewmark(근무 시간 중 하트비트와 반복 이슈)예요. CrewAI는 AMP 플랫폼에서 예약 실행을 하고, Claude Code에는 agent teams와 별개로 예약 작업이 있어요. LangGraph 자체는 LangSmith Agent Server에서 cron 작업을 실행해요.",
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
    "Crewmark는 독립 제품으로, LangChain을 비롯해 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
