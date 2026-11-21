import type { CompareBundle } from "@/content/compare/types";

// Korean translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "비교",
    hubName: "제품 비교",
    cta: "시작하기",
    secondary: "비교표 보기",
    shortTitle: "{a} vs {b}, 한 줄 요약",
    tableTitle: "한눈에 보는 {a} vs {b} vs Crewmark",
    rows: {
      category: "무엇인가요",
      openSource: "오픈 소스",
      pricing: "가격",
      runs: "실행 위치",
      agents: "에이전트와 모델",
      board: "작업 보드",
      schedule: "예약 작업",
      talk: "에이전트 간 대화",
    },
    differencesTitle: "{a} vs {b}: 주요 차이점",
    pickTitle: "이럴 때는 {x}",
    crewmarkTitle: "Crewmark의 위치",
    crewmarkText:
      "Crewmark는 두 제품과 다른 계층에서 일해요. 코딩 에이전트를 대신하지 않고, 에이전트에게 맡을 일을 줘요. 각 AI 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화이고, 직무, 목표, 근무 시간을 가져요.",
    crewmarkPoints: [
      "근무 시간에는 하트비트가 15분에 한 번부터 하루 한 번까지 정한 간격으로 각 직원을 깨워, 다음 이슈를 가져가게 해요.",
      "상태, 우선순위, 댓글, @멘션이 있는 공유 보드. 배정하거나 댓글을 달거나 멘션하면 해당 에이전트가 깨어나요.",
      "GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요.",
      "에이전트 간 직접 메시지와 보고 라인은 출시 예정이에요.",
    ],
    sourcesTitle: "확인 방법",
    sourcesText:
      "이 페이지의 모든 정보는 각 제품의 공식 사이트, 가격 페이지, 문서, GitHub 저장소에서 가져왔고, 2026년 11월 13일에 확인했어요. 가격과 요금제는 바뀔 수 있으니 구매 전에 각 회사의 페이지를 확인하세요. 공식 사이트:",
    relatedTitle: "다른 비교",
    moreTitle: "대안과 가격",
    alternativesLabel: "{x} 대안",
    pricingLabel: "{x} 가격",
    midTitle: "에이전트가 일정에 맞춰 일하길 원하시나요?",
    midText: "Crewmark는 Claude Code와 Codex에 직무, 하트비트, 공유 보드를 줘서 다음 일을 스스로 가져가게 해요.",
    midButton: "시작하기",
    faqTitle: "자주 묻는 질문",
    crewmarkFaq: {
      q: "Crewmark는 {a}, {b}의 대안인가요?",
      a: "맡는 부분이 달라요. Crewmark는 자체 에이전트를 제공하지 않아요. Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔요. {a}, {b}의 용도에 따라 함께 쓸 수도 있고, 에이전트 작업을 예약하고 추적하는 부분을 Crewmark가 맡을 수도 있어요.",
    },
    ctaTitle: "Claude Code와 Codex 에이전트에게 프롬프트만이 아니라 일을 맡기세요.",
    ctaText: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    ctaButton: "시작하기",
    checked: "2026년 11월 13일에 각 제품의 공식 사이트, 가격 페이지, 문서, GitHub와 대조해 확인했습니다.",
    disclaimer:
      "Crewmark는 독립 제품으로, 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 위 날짜 기준의 공개 사이트와 문서를 바탕으로 합니다.",
    hub: {
      meta: {
        title: "AI 에이전트 도구 비교: 30가지를 나란히",
        description:
          "Paperclip, CrewAI, LangGraph, OpenClaw, Claude Code, Codex, Devin 등 AI 에이전트 도구를 각 회사가 밝힌 가격과 기능으로 비교해요.",
      },
      breadcrumb: "제품 비교",
      title: "AI 에이전트 도구를 나란히 비교",
      lead: "각 비교는 두 도구를 나란히 놓고 Crewmark를 세 번째 열에 두며, 각 회사의 공식 사이트, 가격 페이지, 문서, GitHub에 나온 사실만 써요. 점수도 승자도 없어요. 각각이 무엇이고, 비용이 얼마이며, 무엇을 하는지 보여 드리니 맞는 것을 고르세요.",
      tableTitle: "전체 비교",
      tableHeaders: ["비교", "요약"],
      productsTitle: "다루는 제품",
      moreTitle: "대안과 가격 페이지",
      productsHeaders: ["제품", "무엇인가요", "오픈 소스"],
      midTitle: "에이전트가 일정에 맞춰 일하길 원하시나요?",
      ctaTitle: "Claude Code와 Codex 에이전트에게 프롬프트만이 아니라 일을 맡기세요.",
      faq: [
        {
          q: "비교는 어떻게 만드나요?",
          a: "각 제품의 공식 사이트, 가격 페이지, 문서, GitHub 저장소를 바탕으로 만들고, 각 페이지 하단에 적힌 날짜에 확인했어요. 제품에 점수를 매기거나 순위를 정하지 않아요.",
        },
        {
          q: "왜 모든 페이지에 Crewmark가 있나요?",
          a: "Crewmark는 저희 제품이라 참고용으로 세 번째 열에 보여 드려요. Crewmark는 이 도구들 대부분과 다른 계층에서 일해요. Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔요.",
        },
        {
          q: "가격은 최신인가요?",
          a: "표시된 날짜 기준으로는 정확했어요. 각 회사는 가격과 요금제를 자주 바꾸니 구매 전에 가격 페이지를 확인하세요.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "직접 호스팅하는 서버이자 웹 앱으로, 조직도, 예산, 작업을 갖춘 회사처럼 AI 에이전트 팀을 운영하고 Claude Code, Codex, OpenClaw처럼 직접 가져온 에이전트를 구동해요.",
      category: "멀티 에이전트 오케스트레이션(“AI 회사”)",
      openSource: "예, MIT",
      pricing: "셀프 호스팅은 무료, 가격 미공개, 클라우드 버전은 대기자 명단",
      runs: "Postgres를 쓰는 셀프 호스팅 Node.js 서버, 또는 Docker",
      agents: "어댑터로 가져오는 에이전트: Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode 등",
      board: "있음: 목표와 프로젝트에 연결된 이슈를 에이전트나 사람에게 배정",
      schedule: "있음: 하트비트, 그리고 cron, 웹훅, API 트리거로 실행되는 Routines",
      talk: "작업 스레드와 조직도를 따른 위임으로",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "팀원에게 하듯 AI 코딩 에이전트에게 이슈를 배정하는 워크스페이스로, 내 컴퓨터의 데몬이 이미 가진 에이전트 CLI를 실행해요.",
      category: "사람과 코딩 에이전트를 위한 이슈 보드",
      openSource: "소스 공개(추가 조건이 붙은 Apache 2.0)",
      pricing: "조직 내부 셀프 호스팅은 무료, 클라우드 가격은 미공개",
      runs: "클라우드, 셀프 호스팅(Docker 또는 Helm), 데스크톱 앱. 에이전트는 직접 관리하는 데몬에서 실행",
      agents: "Claude Code, Codex, Cursor Agent, OpenCode, Hermes를 포함한 에이전트 CLI 29개",
      board: "있음: 보드 보기와 목록 보기, 에이전트를 담당자로 지정",
      schedule: "있음: cron, 웹훅, 수동 실행으로 돌아가는 Autopilots",
      talk: "있음: squads에서 리더 에이전트가 멤버를 @멘션해 일을 넘김",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "제품 팀을 위한 호스팅 이슈 트래커로, 이슈를 자체 Linear Agent나 Cursor, Codex, Devin 같은 서드파티 에이전트에게 맡길 수도 있어요.",
      category: "에이전트 플랫폼을 갖춘 이슈 트래커",
      openSource: "아니요",
      pricing: "Free $0, Basic $10, Business $16(사용자당 월, 연간 결제). 코딩 에이전트와 Loops에는 AI 크레딧",
      runs: "클라우드",
      agents: "Linear Agent, Claude Code나 Codex 기반 클라우드 코딩 에이전트, 멤버로 설치하는 서드파티 에이전트",
      board: "있음: 이슈, 프로젝트, 사이클, 이니셔티브",
      schedule: "있음: 일정이나 이벤트로 실행되는 Loops",
      talk: "언급 없음",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "내 컴퓨터에서 실행되고 WhatsApp, Telegram, Slack 같은 채팅 앱에서 답하는 오픈 소스 개인 AI 비서예요.",
      category: "개인 AI 비서(셀프 호스팅)",
      openSource: "예, MIT",
      pricing: "무료. 유료 등급이나 호스팅 서비스 없음, 모델 제공자 비용만 냄",
      runs: "내 컴퓨터의 로컬 Gateway. Docker와 Nix 설치 지원",
      agents: "플러그인 형태의 모델 제공자: Anthropic, OpenAI, Gemini, OpenRouter, Ollama 등",
      board: "없음(Tasks 원장과 TaskFlow는 제거됨)",
      schedule: "있음: 내장 Automations 스케줄러와 웹훅",
      talk: "있음: Gateway 하나에 여러 에이전트를 두고 에이전트 간 접근 가능, 코디네이터가 있는 팀 프리셋도 제공",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "Nous Research의 오픈 소스 개인 AI 에이전트로, 터미널, 데스크톱 앱, 채팅 앱에서 쓰며 경험을 바탕으로 자기 스킬을 직접 쓰고 다듬어요.",
      category: "개인 AI 에이전트(셀프 호스팅)",
      openSource: "예, MIT",
      pricing: "에이전트는 무료. 선택 사항인 Nous Portal: Free, Plus $20, Super $100, Ultra $200(월)",
      runs: "내 컴퓨터나 서버. Portal 유료 등급에는 클라우드 호스팅 에이전트 1개 포함",
      agents: "모든 모델 제공자: Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, 로컬 모델 등",
      board: "없음",
      schedule: "있음: 내장 cron 스케줄러, Bot별 루틴",
      talk: "있음: 서브에이전트, 그리고 Bot Mode에서는 이름 붙은 Bot끼리 메시지를 주고받음",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "AI 에이전트를 만들고 이를 “AI Workforce”라고 부르는 멀티 에이전트 팀으로 연결하는 호스팅 로우코드 플랫폼으로, 영업, 고객 지원, 운영 업무용이에요.",
      category: "AI 에이전트 플랫폼(“AI Workforce”)",
      openSource: "아니요",
      pricing: "공개 가격 페이지에는 영업팀을 통한 Enterprise만 있음",
      runs: "클라우드",
      agents: "노코드 빌더로 만드는 자체 에이전트. 크레딧으로 어떤 LLM이든 사용, 또는 내 키",
      board: "이슈 보드 없음. 작업 기록과 Activity Center",
      schedule: "있음: 예약 작업과 앱 트리거",
      talk: "있음: 캔버스에서 연결된 에이전트끼리 일을 넘김",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "받은편지함, 캘린더, 회의, Slack을 오가며 일하는 호스팅 AI 비서로, 반복 루틴을 실행하고 외부에 영향을 주는 일은 먼저 물어봐요.",
      category: "AI 비서(“AI 직원”)",
      openSource: "아니요",
      pricing: "무료: 7일간 $50 크레딧. 활성 사용자당 월 $29.99(3,000 크레딧)부터",
      runs: "클라우드. Slack, 이메일, iMessage, 전화, Chrome 확장 프로그램에서 사용",
      agents: "자체 비서. 작업마다 모델을 알아서 고르거나, 직접 선택",
      board: "없음. 대화로 작업을 맡김",
      schedule: "있음: 일정이나 이벤트로 실행되는 Routines",
      talk: "언급 없음(워크스페이스당 Lindy 하나)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "역할 기반 에이전트로 이뤄진 crews와 단계별 flows를 만드는 오픈 소스 Python 프레임워크로, 이를 배포하고 실행하는 상용 플랫폼 CrewAI AMP도 있어요.",
      category: "멀티 에이전트 프레임워크(Python)와 플랫폼",
      openSource: "프레임워크는 예, MIT. AMP 플랫폼은 상용",
      pricing: "프레임워크 무료. AMP Basic 무료(월 50회 실행). Enterprise는 별도 협의",
      runs: "내 코드 속 라이브러리. AMP는 CrewAI 클라우드나 자체 인프라",
      agents: "API로 쓰는 LLM(기본은 OpenAI, 다른 제공자와 로컬 모델 지원)",
      board: "없음. 작업은 코드로 정의",
      schedule: "AMP에서는 cron 스케줄링. 프레임워크 단독은 언급 없음",
      talk: "있음: 에이전트끼리 일을 위임하고 서로 질문함. 계층 모드에서는 매니저 에이전트",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "LangChain의 오픈 소스 프레임워크로, 오래 실행되고 상태를 가진 에이전트를 상태, 노드, 엣지로 된 그래프로 코드에서 만들고 LangSmith로 배포해요.",
      category: "에이전트 오케스트레이션 프레임워크(Python, JS)",
      openSource: "프레임워크는 예, MIT. LangSmith는 상용",
      pricing: "프레임워크 무료. LangSmith Developer $0, Plus 시트당 월 $39, Enterprise 별도 협의",
      runs: "내 애플리케이션 안. Agent Server는 LangChain 클라우드, 또는 Enterprise에서 셀프 호스팅",
      agents: "코드가 호출하는 어떤 모델이든",
      board: "없음",
      schedule: "Agent Server에서는 cron 작업. 라이브러리 단독은 언급 없음",
      talk: "있음, 그래프 설계에 따라: 서브에이전트, 핸드오프, 라우터",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "Python과 .NET으로 멀티 에이전트 애플리케이션을 만드는 Microsoft의 오픈 소스 프레임워크예요. 지금 README에는 보관(archived) 처리되어 Microsoft가 더 이상 유지보수하지 않는다고 적혀 있고, Microsoft Agent Framework를 안내해요.",
      category: "멀티 에이전트 프레임워크(Python, .NET)",
      openSource: "예: 코드는 MIT, 문서는 CC-BY-4.0",
      pricing: "무료. 호스팅 서비스 없음",
      runs: "내 코드 속 라이브러리. AutoGen Studio는 로컬에서 실행",
      agents: "OpenAI와 Azure용 모델 클라이언트. Anthropic, Ollama, Gemini는 실험적",
      board: "없음",
      schedule: "언급 없음",
      talk: "있음: 그룹 채팅, selector 팀과 swarm 팀, 메시지 전달",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "Claude Code, Codex, Cursor, OpenCode 에이전트를 각자의 git worktree에서 나란히 실행하는 Mac 앱이에요. 2026년 11월 4일 Meta 합류를 발표하며 신규 가입과 다운로드를 닫았어요.",
      category: "코딩 에이전트 병렬 실행 도구(Mac 앱)",
      openSource: "아니요",
      pricing: "무료로 사용. 현재 게시된 클라우드 요금제 가격 없음",
      runs: "Mac 앱. Conductor Cloud는 11월 13일부터 읽기 전용, 2026년 11월 20일 종료",
      agents: "Claude Code, Codex, OpenCode, Cursor Agent(내 구독이나 키로 사용)",
      board: "이슈 보드 없음. 워크스페이스 목록이 있고, GitHub나 Linear 이슈에서 시작 가능",
      schedule: "클라우드 전용 Routines, 클라우드와 함께 종료",
      talk: "Claude Code agent teams를 켜면 에이전트 간 메시지를 보여 줌",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "여러 코딩 에이전트를 동시에, 각자의 tmux 세션과 git worktree에서 실행해 서로 다른 브랜치에서 일하게 하는 오픈 소스 터미널 앱이에요.",
      category: "코딩 에이전트 병렬 실행 도구(터미널)",
      openSource: "예, AGPL-3.0",
      pricing: "무료",
      runs: "내 터미널. tmux와 GitHub CLI 필요",
      agents: "기본은 Claude Code. Codex, Gemini, Aider, 또는 설정에 넣은 어떤 프로그램이든",
      board: "없음. 미리 보기와 diff가 있는 인스턴스 목록",
      schedule: "언급 없음",
      talk: "언급 없음",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "코딩 에이전트 작업을 위한 칸반 보드로, 이슈마다 git worktree와 내가 고른 에이전트가 있는 워크스페이스가 생겨요. 회사 bloop은 2026년 4월에 문을 닫았고, 프로젝트는 커뮤니티가 유지보수하는 오픈 소스로 이어지고 있어요.",
      category: "칸반 보드 겸 코딩 에이전트 병렬 실행 도구",
      openSource: "예, Apache-2.0",
      pricing: "로컬 앱 무료. 유료 구독은 2026년 4월에 종료",
      runs: "브라우저에서 로컬로, 또는 데스크톱 앱으로 실행. 클라우드 부분은 셀프 호스팅 가능",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode 등",
      board: "있음: 우선순위와 태그가 있는 칸반 이슈(로그인 필요)",
      schedule: "언급 없음",
      talk: "언급 없음",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "Anthropic의 코딩 에이전트로, 터미널, IDE 확장, 데스크톱 앱, 웹에서 코드베이스를 읽고 파일을 편집하고 명령을 실행해요.",
      category: "코딩 에이전트",
      openSource: "아니요(공개 저장소, 모든 권리 보유)",
      pricing: "Claude 유료 요금제에 포함: Pro 월 $20, Max $100, Ultra $200. Team과 Enterprise는 시트당",
      runs: "터미널, IDE 확장, 데스크톱 앱, 웹, 모바일",
      agents: "Claude 모델 기반의 자체 에이전트",
      board: "이슈 보드 없음. agent teams는 작업 목록을 공유",
      schedule: "있음: 클라우드 예약 작업, 데스크톱 예약 작업, `/loop`",
      talk: "실험적 기능인 agent teams에서는 팀원끼리 메시지를 주고받음. 서브에이전트는 결과를 보고",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "기본으로 꺼져 있는 Claude Code의 실험적 기능으로, 리드 세션이 팀원을 생성해요. 팀원은 작업 목록을 공유하고 서로 메시지를 주고받는 별도의 Claude Code 인스턴스예요.",
      category: "코딩 에이전트의 멀티 에이전트 모드",
      openSource: "아니요(Claude Code의 일부)",
      pricing: "Claude 유료 요금제의 Claude Code에 포함",
      runs: "내 Claude Code 세션",
      agents: "Claude 모델 기반의 Claude Code 인스턴스",
      board: "팀원이 가져가는, 의존 관계가 있는 공유 작업 목록",
      schedule: "agent teams 기능에는 없음. Claude Code에는 별도로 예약 작업이 있음",
      talk: "있음: 팀원끼리 메시지를 주고받고, 나도 어느 팀원에게든 메시지를 보낼 수 있음",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "OpenAI의 코딩 에이전트로, 터미널 CLI, IDE 확장, ChatGPT 데스크톱 앱, 클라우드에서 쓸 수 있고, ChatGPT 요금제에 포함되거나 API 키로 사용해요.",
      category: "코딩 에이전트",
      openSource: "일부: CLI, SDK, App Server는 Apache-2.0. IDE 확장과 클라우드는 비공개",
      pricing: "Plus 월 $20부터 ChatGPT 요금제에 포함, 또는 OpenAI API 키로 사용",
      runs: "터미널, IDE 확장, ChatGPT 데스크톱 앱, Codex Cloud",
      agents: "OpenAI 모델 기반의 자체 에이전트",
      board: "이슈 보드 없음. 유료 요금제에서 Linear 이슈를 받음",
      schedule: "있음: ChatGPT 데스크톱 앱과 웹의 예약 작업",
      talk: "서브에이전트: 상위 에이전트가 에이전트를 생성하고 결과를 모음",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "로컬 모델을 포함해 200개 이상 제공자의 모델로 작동하는 오픈 소스 코딩 에이전트로, 터미널 UI, 데스크톱 앱, 웹 앱, SDK로 쓸 수 있어요.",
      category: "코딩 에이전트",
      openSource: "예, MIT",
      pricing: "에이전트 무료(무료 모델 포함). OpenCode Go 월 $10, Go Plus 월 $40",
      runs: "내 컴퓨터의 터미널, 데스크톱 앱, 웹 앱, SDK",
      agents: "자체 에이전트. 로컬 모델을 포함한 200개 이상의 모델 제공자",
      board: "언급 없음",
      schedule: "실험적이고 직접 켜야 하는 일정 기능(2026년 10월부터)",
      talk: "서브에이전트가 상위 에이전트에 보고",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "Cognition의 AI 소프트웨어 엔지니어로, 코드를 쓰고 실행하고 테스트하며 풀 리퀘스트를 열어요. 자체 가상 머신에서 도는 클라우드 세션으로, 그리고 Devin Desktop과 Devin CLI로 로컬에서도 일해요.",
      category: "AI 소프트웨어 엔지니어",
      openSource: "아니요",
      pricing: "Free $0, Pro 월 $20, Max 월 $200, Teams 월 $80 + 개발자 시트당 $40",
      runs: "세션마다 클라우드 VM. 로컬에서는 Devin Desktop과 CLI",
      agents: "자체 에이전트. Cognition의 SWE-2와 여러 연구소의 프런티어 모델",
      board: "자체 보드 없음. Linear, Jira, GitHub의 티켓을 받음",
      schedule: "있음: 일정이나 이벤트로 실행되는 Automations",
      talk: "있음: 코디네이터 세션이 하위 Devin을 실행하고 메시지를 보냄",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "Droids라는 코딩 에이전트로, 데스크톱 앱, CLI, CI의 헤드리스 모드, Factory가 호스팅하는 클라우드 컴퓨터에서 실행돼요.",
      category: "코딩 에이전트 플랫폼(Droids)",
      openSource: "아니요",
      pricing: "추론을 직접 준비하면 무료. Pro 월 $20, Plus 월 $100, 더 높은 등급 있음",
      runs: "로컬에서는 데스크톱 앱과 CLI. 클라우드 Droid Computers. CI에서는 헤드리스",
      agents: "프런티어 모델과 오픈 웨이트 모델 기반의 자체 에이전트, 또는 내 키",
      board: "범용 보드 없음. Linear와 Jira 이슈를 받음. Workstreams(베타)에 작업 목록",
      schedule: "있음: 일정, Slack, GitHub, 웹훅으로 실행되는 Automations",
      talk: "있음, Workstreams(베타)에서: 오케스트레이터 아래 에이전트가 결과를 보고",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "xAI의 호스팅 AI 팀원이에요. 각 Bot은 클라우드에 자기 컴퓨터를 하나씩 받아 내 도구에 로그인하고, Slack과 Microsoft Teams에서 일하며, 루틴을 실행하고 서로 일을 넘겨요.",
      category: "AI 동료(호스팅)",
      openSource: "아니요",
      pricing: "Premium $30, Super $100, Ultra $200(월, 주간 사용량 포함). Teams와 Enterprise는 영업팀을 통해",
      runs: "Bot마다 클라우드 컴퓨터. 데스크톱과 모바일 앱. Slack, Teams, 화상 통화 안에서",
      agents: "Grok으로 만든 자체 Bot",
      board: "언급 없음. 일은 채팅, 스레드, 회의에서 넘김",
      schedule: "있음: 일정에 따라 실행되는 루틴, 그리고 사용자를 지켜보며 배우는 워크플로",
      talk: "있음: Bot끼리 메시지를 주고받고 그룹 채팅에서 조율",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "CopilotKit의 오픈 소스이자 셀프 호스팅 가능한 AI 동료 워크스페이스로, 각 Bot이 자기 브라우저, 파일, 도구를 가지며 모델과 에이전트는 직접 가져와요.",
      category: "AI 동료 워크스페이스(셀프 호스팅 가능)",
      openSource: "예, MIT(별도 라이선스인 CopilotKit Intelligence 사용)",
      pricing: "개인 프로젝트는 무료. Business는 활성 사용자당 월 최대 $29",
      runs: "Mac과 Windows용 데스크톱 앱. 팀용은 Kubernetes",
      agents: "내장 Bot, 또는 AG-UI로 연결하는 내 에이전트. OpenAI, Claude, Gemini, 오픈 모델",
      board: "언급 없음",
      schedule: "있음: Routines",
      talk: "언급 없음",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "Claude 앱에서 코딩 외 업무를 맡는 Anthropic의 에이전트예요. 원하는 결과를 설명하면 내 파일, 앱, 브라우저에서 리서치, 문서, 스프레드시트, 슬라이드 작업을 해 나가요.",
      category: "지식 업무용 AI 동료",
      openSource: "아니요",
      pricing: "Claude 유료 요금제: Pro 월 $20, Max $100, Ultra $200. Team과 Enterprise는 시트당",
      runs: "Anthropic 클라우드. 로컬 파일과 브라우저는 Claude Desktop으로",
      agents: "Claude 모델",
      board: "보드 없음. 작업 목록과 Scheduled 페이지",
      schedule: "있음: 매시간, 매일, 매주, 평일마다, 클라우드에서",
      talk: "작업 안의 서브에이전트",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "Microsoft 365 Copilot 안의 에이전트로, Outlook, Teams, Word, Excel, PowerPoint, OneDrive, SharePoint를 오가며 여러 단계의 작업을 처리하고, 민감한 작업 전에는 승인을 받아요.",
      category: "Microsoft 365용 AI 동료",
      openSource: "아니요",
      pricing: "Microsoft 365 Copilot 라이선스에 더해 Copilot Credits 종량제(크레딧당 $0.01)",
      runs: "Microsoft 클라우드, OneDrive와 SharePoint 파일 사용",
      agents: "테넌트 설정에 따라 GPT, Claude, Grok 모델을 고르는 모델 선택기",
      board: "언급 없음",
      schedule: "있음: 예약 프롬프트(사용자당 최대 25개)와 이메일·Teams 트리거",
      talk: "언급 없음",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "발표 자료, 스프레드시트, 분석처럼 검토할 결과물이 나오는 작업을 위한 ChatGPT의 Work 모드예요. 핵심 기능과 사용량을 Codex와 함께 써요.",
      category: "ChatGPT 안의 AI 동료",
      openSource: "아니요",
      pricing: "ChatGPT 요금제에 포함: Free와 Go는 데스크톱 앱에서 제한적, Plus 월 $20부터 전체 이용",
      runs: "OpenAI 클라우드, 또는 데스크톱 앱으로 내 컴퓨터",
      agents: "OpenAI 모델",
      board: "언급 없음",
      schedule: "있음: 예약 작업. 대상 요금제에서는 Gmail, Slack, GitHub 트리거",
      talk: "작업 안의 서브에이전트",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "코디네이터 에이전트가 큰 코딩 작업을 계획하고 병렬로 돌아가는 여러 클라우드 에이전트에게 맡기는 Cursor의 기능으로, 공유 메모와 작업 보드가 있어요.",
      category: "멀티 에이전트 코딩 작업 공간",
      openSource: "아니요",
      pricing: "Cursor Premium 월 $30 이상, Teams, Enterprise. Free와 Plus에는 없음",
      runs: "Cursor의 클라우드 에이전트. 내 컴퓨터에서 실행해야 할 때는 로컬 에이전트",
      agents: "Cursor의 에이전트. 코디네이터의 모델은 직접 선택",
      board: "있음: 작업 목록과 보드, Multiplayer Projects에서는 공유",
      schedule: "있음: 일정, Slack 채널, 풀 리퀘스트 활동",
      talk: "있음: 코디네이터가 워커 에이전트를 실행. Multiplayer Projects에서는 코디네이터끼리 메시지를 주고받음",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "에이전트, 워크플로, 앱을 만들어 Microsoft Copilot, Teams, 웹사이트, 전화 회선 등 여러 채널에 게시하는 Microsoft의 로우코드 스튜디오예요.",
      category: "로우코드 에이전트·워크플로 빌더",
      openSource: "아니요",
      pricing: "Copilot Credits: 25,000 크레딧 팩 월 $200(연간 결제), 또는 종량제 크레딧당 $0.01",
      runs: "Microsoft 클라우드, Power Platform 환경 안",
      agents: "직접 만드는 에이전트. 에이전트마다 GPT, Claude, Grok 모델 등에서 모델 선택",
      board: "보드 없음. Monitor 탭과 Workflows 페이지",
      schedule: "있음: 예약 트리거와 이벤트 트리거(SharePoint, 이메일, Dataverse 등), 워크플로",
      talk: "있음: 연결된 에이전트, Foundry와 A2A 에이전트. 워크플로가 Copilot Cowork 작업을 시작할 수 있음",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터의 Claude Code나 Codex 대화로 직무와 목표를 가지며, 하트비트에 깨어나 공유 보드에서 이슈를 가져가요.",
      category: "Claude Code와 Codex를 위한 AI 직원(멀티 에이전트 하네스)",
      openSource: "예, GPL-3.0",
      pricing: "무료: 프로젝트 1개, AI 직원 최대 3명. Pro 월 $5, Team 월 $10 출시 예정",
      runs: "웹 앱. 에이전트는 내 컴퓨터의 Claude Code나 Codex에서 실행. 셀프 호스팅 가능",
      agents: "Claude Code와 Codex, 내 구독으로 사용",
      board: "있음: 상태, 우선순위, 담당자, 댓글, @멘션",
      schedule: "있음: 근무 시간 중 하트비트(15분~24시간)와 반복 이슈",
      talk: "현재는 이슈로 소통. 직접 메시지와 보고 라인은 출시 예정",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "셀프 호스팅 AI 회사 컨트롤 플레인 vs Python 멀티 에이전트 프레임워크",
      title: "Paperclip vs CrewAI: AI 회사인가, 프레임워크인가",
      description:
        "Paperclip vs CrewAI: 에이전트를 회사처럼 운영하는 셀프 호스팅 플랫폼일까, crew를 만드는 Python 프레임워크일까. 가격, 오픈 소스, 예약 작업을 비교해요.",
      h1: "Paperclip vs CrewAI: 에이전트를 회사처럼 운영할까, 코드로 만들까",
      lead: "Paperclip과 CrewAI는 둘 다 여러 AI 에이전트를 조직하지만, 계층이 달라요. Paperclip은 조직도, 작업, 예산을 갖춘 셀프 호스팅 앱으로, Claude Code나 Codex처럼 이미 쓰는 에이전트를 구동해요. CrewAI는 API로 LLM을 호출하는 역할 기반 에이전트의 crews를 작성하는 Python 프레임워크이고, 이를 배포하는 상용 플랫폼이 있어요. 사실을 하나씩 비교하고, Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "계층: Paperclip은 웹 UI로 운영하고 관리하는 애플리케이션이고, CrewAI는 코드를 작성해 쓰는 라이브러리예요.",
        "에이전트: Paperclip은 Claude Code, Codex, OpenClaw 같은 기존 에이전트를 어댑터로 구동해요. CrewAI 에이전트는 Python으로 역할(role), 목표(goal), 배경 설정(backstory)을 정의하고 LLM API를 호출해요.",
        "작업: Paperclip에는 목표와 프로젝트에 연결되고 에이전트나 사람에게 배정되는 티켓이 있어요. CrewAI는 코드 속 crews와 flows 안에서 작업을 정의해요.",
        "예약 작업: Paperclip에는 하트비트와 cron 기반 Routines가 있어요. CrewAI는 cron 스케줄링을 AMP 플랫폼 기능으로 소개하고, 프레임워크 단독 기능으로는 소개하지 않아요.",
      ],
      pickA: [
        "Claude Code나 Codex처럼 이미 쓰는 에이전트에 조직도, 예산, 티켓을 붙이고 싶을 때.",
        "코드보다 웹 UI로 팀을 관리하고, 직접 호스팅하고 싶을 때.",
      ],
      pickB: [
        "내 Python 애플리케이션에 에이전트 워크플로를 넣고 있을 때.",
        "각 에이전트의 모델과 도구를 코드로 고르고, CrewAI 플랫폼이나 자체 인프라에 배포하고 싶을 때.",
      ],
      faq: [
        { q: "Paperclip은 오픈 소스인가요?", a: "네. MIT 라이선스이고, 셀프 호스팅 버전은 무료예요. 클라우드 버전은 대기자 명단을 받고 있어요." },
        {
          q: "CrewAI는 무료인가요?",
          a: "CrewAI 프레임워크는 MIT 라이선스의 오픈 소스로 무료이고, 모델 제공자 비용은 따로 내요. CrewAI AMP 플랫폼에는 월 50회 워크플로 실행이 가능한 무료 Basic 플랜과 가격을 별도로 협의하는 Enterprise 플랜이 있어요.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "조직도가 있는 AI 회사 vs 코딩 에이전트를 위한 이슈 보드",
      title: "Paperclip vs Multica: 조직도인가, 이슈 보드인가",
      description:
        "Paperclip vs Multica: 둘 다 Claude Code, Codex 같은 에이전트에게 일을 맡겨요. 하나는 조직도와 예산으로 회사를 본뜨고, 다른 하나는 이슈 보드예요.",
      h1: "Paperclip vs Multica: 에이전트를 위한 AI 회사 또는 이슈 보드",
      lead: "Paperclip과 Multica가 푸는 문제는 비슷해요. Claude Code나 Codex 같은 코딩 에이전트가 이미 있고, 터미널 대신 보드에서 일을 맡기고 싶은 거예요. Paperclip은 이 모든 것을 조직도, 예산, 거버넌스가 있는 회사로 모델링해요. Multica는 이슈 트래커에 더 가까워서, 에이전트가 담당자가 되고 내 컴퓨터의 데몬이 각 에이전트의 CLI를 실행해요. 나란히 비교하고, Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "모델: Paperclip은 에이전트에게 직함, 보고 체계, 직무 설명, 예산을 줘요. Multica는 각 에이전트에게 이름, 제공자, 런타임, 지침을 주고, 리더 에이전트가 있는 squads로 묶어요.",
        "라이선스: Paperclip은 MIT 오픈 소스예요. Multica는 추가 조건이 붙은 Apache 2.0의 소스 공개 소프트웨어이고, 자기 조직 안에서 셀프 호스팅하면 무료예요.",
        "호스팅: Paperclip은 셀프 호스팅이고, 클라우드 버전은 대기자 명단을 받고 있어요. Multica는 클라우드 앱, 셀프 호스팅, 데스크톱 앱을 제공해요.",
        "에이전트: Paperclip은 어댑터로 에이전트를 연결해요. Multica의 데몬은 이미 설치된 에이전트 CLI 29개를 실행해요.",
      ],
      pickA: [
        "에이전트 팀 전체에 보고 체계, 예산, 승인이 필요할 때.",
        "직접 운영하는 MIT 라이선스 소프트웨어를 원할 때.",
      ],
      pickB: [
        "에이전트가 담당자가 되는 이슈 보드를 클라우드나 셀프 호스팅으로 쓰고 싶을 때.",
        "여러 에이전트 CLI를 쓰고 있고, 모두 보드 하나에 모으고 싶을 때.",
      ],
      faq: [
        {
          q: "Paperclip과 Multica는 Claude Code, Codex와 함께 쓸 수 있나요?",
          a: "네. Paperclip은 어댑터로 연결하고, Multica의 데몬은 내가 관리하는 컴퓨터에서 각 CLI를 실행해요. 둘 다 다른 여러 에이전트도 지원해요.",
        },
        {
          q: "Multica는 오픈 소스인가요?",
          a: "소스 공개(source-available)예요. Multica License는 Apache 2.0에 추가 조건을 더한 것이에요. 셀프 호스팅을 포함해 자기 조직 안에서 쓰는 것은 무료지만, 호스팅 서비스로 제공하려면 상용 라이선스가 필요해요.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "에이전트들의 회사 vs 개인 비서 하나(Paperclip은 OpenClaw를 실행할 수 있음)",
      title: "Paperclip vs OpenClaw: AI 회사인가, 개인 에이전트인가",
      description:
        "Paperclip vs OpenClaw: OpenClaw를 포함한 에이전트 팀을 회사처럼 운영하는 플랫폼일까, 내 컴퓨터에서 도는 개인 AI 비서일까. 가격과 예약 작업을 비교해요.",
      h1: "Paperclip vs OpenClaw: 에이전트들의 회사 또는 개인 에이전트 하나",
      lead: "Paperclip의 README는 간단히 이렇게 말해요. OpenClaw가 직원이라면 Paperclip은 회사라고요. OpenClaw는 내 컴퓨터에서 실행되고 채팅 앱으로 대화하는 오픈 소스 개인 비서예요. Paperclip은 조직도, 작업, 예산을 갖춘 셀프 호스팅 컨트롤 플레인으로, OpenClaw, Claude Code, Codex 등 여러 에이전트를 구동할 수 있어요. 둘은 함께 쓰이는 경우가 많아요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "범위: OpenClaw는 채팅 앱에서 대화하는 비서 하나, 또는 Gateway 하나에서 서로 분리된 여러 에이전트예요. Paperclip은 많은 에이전트를 역할, 보고 체계, 예산으로 조직해요.",
        "작업: Paperclip에는 목표와 프로젝트에 연결된 티켓이 있어요. OpenClaw 문서에 따르면 공유 Tasks 원장과 TaskFlow가 제거되어 작업 보드가 없어요.",
        "에이전트: OpenClaw는 모델 제공자를 플러그인으로 연결해요. Paperclip은 OpenClaw를 포함한 기존 에이전트를 어댑터로 구동해요.",
        "둘 다 MIT 라이선스이고 무료로 실행할 수 있어요. 모델 제공자 비용은 따로 내요.",
      ],
      pickA: [
        "여러 에이전트를 운영하고 있고, 역할, 작업, 예산이 있는 팀으로 조직하고 싶을 때.",
        "OpenClaw를 유일한 에이전트가 아니라 여러 직원 중 하나로 두고 싶을 때.",
      ],
      pickB: [
        "WhatsApp, Telegram, Slack, iMessage에서 답해 주는 개인 비서 하나가 필요할 때.",
        "호스팅 서비스 없이 내 컴퓨터에서 자동화와 에이전트를 돌리고 싶을 때.",
      ],
      faq: [
        {
          q: "Paperclip으로 OpenClaw를 실행할 수 있나요?",
          a: "네. OpenClaw는 Claude Code, Codex 등과 함께 Paperclip이 어댑터로 연결하는 에이전트 중 하나예요.",
        },
        {
          q: "OpenClaw는 무료인가요?",
          a: "네. MIT 라이선스이고, README에 따르면 유료 등급, 호스팅 서비스, 토큰이 없어요. 연결한 모델 제공자 비용만 내면 돼요.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "AI 회사 컨트롤 플레인 vs Nous Research의 스스로 발전하는 개인 에이전트",
      title: "Paperclip vs Hermes Agent: AI 회사인가, 자기 개선 에이전트인가",
      description:
        "Paperclip vs Hermes Agent: 에이전트 팀을 회사처럼 운영하는 셀프 호스팅 플랫폼일까, Bot과 루틴을 갖춘 Nous Research의 개인 에이전트일까.",
      h1: "Paperclip vs Hermes Agent: 에이전트 팀 또는 배우는 에이전트 하나",
      lead: "Paperclip과 Hermes Agent는 둘 다 MIT 오픈 소스이고 둘 다 에이전트를 여럿 실행할 수 있지만, 출발점은 정반대예요. Hermes Agent는 Nous Research의 개인 에이전트로, 자기 스킬을 직접 쓰고 다듬으며, 이름 붙은 Bot 여러 개를 위한 Bot Mode가 있어요. Paperclip은 Hermes를 포함한 에이전트를 조직도, 티켓, 예산이 있는 회사로 조직하는 컨트롤 플레인이에요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "출발점: Hermes Agent는 터미널, 데스크톱 앱, 채팅 앱에서 대화하는 에이전트예요. Paperclip은 연결한 에이전트에게 일을 배정하는 웹 앱이에요.",
        "작업: Paperclip에는 목표와 프로젝트에 연결된 티켓이 있어요. Hermes Agent 문서에는 작업 보드나 이슈 트래커가 나오지 않아요.",
        "여러 에이전트: Paperclip은 역할과 보고 체계를 써요. Hermes Agent의 Bot Mode에서는 각 Bot이 자기 역할, 모델, 메모리를 가지고, Bot끼리 직접 메시지를 주고받아요.",
        "호스팅: Paperclip은 셀프 호스팅이에요. Hermes Agent는 내 컴퓨터나 서버에서 실행되고, Nous Portal 유료 등급에는 클라우드 호스팅 에이전트 1개가 포함돼요.",
      ],
      pickA: [
        "여러 종류의 에이전트(Claude Code, Codex, Hermes 등)로 이뤄진 팀에 역할, 티켓, 예산이 필요할 때.",
        "채팅이 아니라 보드에서 작업을 추적하고 싶을 때.",
      ],
      pickB: [
        "시간이 지날수록 스킬과 메모리를 쌓아 가는 에이전트 하나를 원할 때.",
        "서로 대화하고 루틴을 실행하는 이름 붙은 Bot을 터미널, 데스크톱 앱, 채팅 앱에서 쓰고 싶을 때.",
      ],
      faq: [
        { q: "Paperclip으로 Hermes Agent를 실행할 수 있나요?", a: "네. Hermes는 Paperclip이 어댑터 목록에 올린 에이전트 중 하나예요." },
        {
          q: "Hermes Agent는 얼마인가요?",
          a: "에이전트는 MIT 라이선스로 무료이고, 모델 제공자 비용은 따로 내요. 선택 사항인 Nous Portal 구독에는 Free, Plus(월 $20), Super($100), Ultra($200) 등급이 있어요.",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "에이전트 crew를 만드는 프레임워크 vs 바로 쓰는 개인 비서",
      title: "CrewAI vs OpenClaw: 프레임워크인가, 개인 비서인가",
      description:
        "CrewAI vs OpenClaw: 멀티 에이전트 crew를 만드는 Python 프레임워크일까, 내 컴퓨터에서 돌리며 채팅 앱으로 대화하는 개인 AI 비서일까.",
      h1: "CrewAI vs OpenClaw: 코드로 에이전트를 만들까, 개인 비서를 돌릴까",
      lead: "CrewAI와 OpenClaw는 둘 다 여러 에이전트가 함께 일하지만, 쓰는 방식은 크게 달라요. CrewAI는 Python 프레임워크예요. 역할 기반 에이전트로 crews와 flows를 작성하고, AMP 플랫폼이나 자체 서버에 배포해요. OpenClaw는 완성된 개인 비서로, 내 컴퓨터에서 실행되고 WhatsApp, Telegram, Slack 등 채팅 앱에서 답해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: CrewAI에서는 Python을 작성해요. OpenClaw에서는 비서를 설치하고 설정해요.",
        "대화하는 곳: CrewAI는 내 애플리케이션 안에서 실행돼요. OpenClaw는 이미 쓰는 채팅 앱에서 답해요.",
        "여러 에이전트: CrewAI 에이전트는 서로 일을 위임하고 질문하며, 계층 모드에서는 매니저 에이전트가 있어요. OpenClaw는 Gateway 하나에서 서로 분리된 여러 에이전트를 실행하고, 코디네이터가 있는 팀 프리셋을 제공해요.",
        "둘 다 MIT 라이선스예요. CrewAI의 AMP 플랫폼은 상용이고, OpenClaw에는 유료 등급이 없어요.",
      ],
      pickA: [
        "제품에 멀티 에이전트 워크플로를 넣는 개발자일 때.",
        "관리형 플랫폼에서 crew를 배포하고 모니터링하고 싶을 때.",
      ],
      pickB: [
        "코드를 쓰지 않고 지금 바로 개인 비서를 쓰고 싶을 때.",
        "내 컴퓨터에서 돌리고, 휴대폰에서 채팅 앱으로 쓰고 싶을 때.",
      ],
      faq: [
        {
          q: "비개발자에게는 CrewAI와 OpenClaw 중 무엇이 맞나요?",
          a: "OpenClaw는 설치하고 설정한 뒤 채팅 앱으로 대화해요. CrewAI는 Python 라이브러리라서, 자기 소프트웨어에 에이전트를 넣는 개발자를 위해 만들어졌어요.",
        },
        {
          q: "CrewAI와 OpenClaw는 오픈 소스인가요?",
          a: "둘 다 MIT 라이선스예요. CrewAI의 AMP 플랫폼은 별도의 상용 제품이고, OpenClaw에는 유료 등급도 호스팅 서비스도 없어요.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "역할 기반 crews vs 그래프 기반 오케스트레이션, 둘 다 오픈 소스 프레임워크",
      title: "CrewAI vs LangGraph: 프레임워크 비교(2026)",
      description:
        "CrewAI vs LangGraph: 역할 기반 crews와 flows일까, 상태, 노드, 엣지로 된 그래프일까. 라이선스, 호스팅 가격, 예약 작업을 비교해요.",
      h1: "CrewAI vs LangGraph: 멀티 에이전트 시스템을 만드는 두 가지 오픈 소스 방법",
      lead: "CrewAI와 LangGraph는 코드로 멀티 에이전트 시스템을 만들 때 가장 자주 비교되는 두 프레임워크예요. CrewAI는 에이전트를 역할, 목표, 배경 설정이 있는 crews로 조직하고, 이벤트 기반 flows도 제공해요. LangGraph에서는 워크플로를 공유 상태, 노드, 엣지로 된 그래프로 정의하며, 에이전트 아키텍처를 정해 두지 않아요. 둘 다 MIT 라이선스이고, 각 회사가 호스팅 플랫폼을 판매해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "추상화: CrewAI는 역할, 목표, 배경 설정을 가진 에이전트에서 시작해요. LangGraph는 상태와 노드의 그래프에서 시작하고, 프롬프트나 에이전트 아키텍처를 정해 두지 않아요.",
        "언어: CrewAI는 Python이에요. LangGraph에는 Python과 JavaScript/TypeScript 라이브러리가 있어요.",
        "호스팅 플랫폼: CrewAI AMP에는 무료 Basic 플랜(월 50회 워크플로 실행)과 별도 협의 Enterprise 플랜이 있어요. LangSmith에는 무료 Developer 플랜, 시트당 월 $39인 Plus, 별도 협의 Enterprise 플랜이 있어요.",
        "예약 작업: 둘 다 cron 작업을 호스팅 플랫폼 기능으로 소개하고, 오픈 소스 라이브러리 단독 기능으로는 소개하지 않아요.",
      ],
      pickA: [
        "에이전트를 역할과 목표로 설명하고, 서로 일을 위임하게 하고 싶을 때.",
        "Python으로 개발하고, 플랫폼 쪽에서 노코드 Studio를 쓰고 싶을 때.",
      ],
      pickB: [
        "상태와 단계 사이의 경로를 세밀하게 제어하고 싶을 때.",
        "Python뿐 아니라 JavaScript나 TypeScript로도 개발하거나, 이미 LangSmith를 쓰고 있을 때.",
      ],
      faq: [
        {
          q: "LangGraph를 쓰려면 LangChain이 필요한가요?",
          a: "아니요. LangChain, Inc.가 만들었지만, 문서에는 LangGraph가 LangChain을 필요로 하지 않는다고 나와 있어요. LangSmith는 트레이싱, 평가, 배포를 더해요.",
        },
        {
          q: "CrewAI와 LangGraph는 무료인가요?",
          a: "두 프레임워크 모두 MIT 라이선스로 무료예요. 각 호스팅 플랫폼인 CrewAI AMP와 LangSmith에는 무료 플랜과 함께 유료 또는 별도 협의 플랜이 있어요.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "두 멀티 에이전트 프레임워크. AutoGen의 README에는 보관 처리됐다고 나옴",
      title: "CrewAI vs AutoGen: 프레임워크 비교(2026)",
      description:
        "CrewAI vs AutoGen: 역할 기반 crews와 flows일까, Microsoft의 그룹 채팅과 팀일까. AutoGen은 보관 처리됐어요. 라이선스, 모델, 현황을 비교해요.",
      h1: "CrewAI vs AutoGen: crews와 flows vs 그룹 채팅, 그리고 누가 유지보수하나",
      lead: "CrewAI와 AutoGen은 코드로 여러 LLM 에이전트를 함께 일하게 하는 초기의 인기 있는 방법이었어요. CrewAI는 crewAI, Inc.가 개발하고, 상용 플랫폼도 함께 제공해요. AutoGen의 README에는 이제 보관(archived) 처리되어 Microsoft가 더 이상 유지보수하지 않는다고 적혀 있고, 새 사용자에게는 Microsoft가 직접적인 후속 제품이라고 부르는 Microsoft Agent Framework를 안내해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "유지보수: CrewAI는 활발히 개발 중이에요. AutoGen의 README에 따르면 보관 처리되어 Microsoft가 더 이상 적극적으로 유지보수하지 않으며, 버그 수정이나 보안 수정도 없어요.",
        "패턴: CrewAI에는 역할 기반 에이전트로 이뤄진 crews와 flows가 있어요. AutoGen에는 그룹 채팅, selector 팀과 swarm 팀, 이벤트 기반 메시지 전달이 있어요.",
        "언어: CrewAI는 Python이에요. AutoGen은 Python과 .NET을 지원해요.",
        "호스팅: CrewAI AMP는 crew를 배포하고 실행해요. AutoGen에는 호스팅 서비스가 없고, AutoGen Studio는 로컬에서 실행돼요.",
      ],
      pickA: [
        "새 멀티 에이전트 프로젝트를 시작하며, 유지보수되고 호스팅 옵션이 있는 프레임워크가 필요할 때.",
        "서로 일을 위임하는 역할 기반 에이전트를 원할 때.",
      ],
      pickB: [
        "기존 AutoGen 애플리케이션을 유지보수하고 있고, 마이그레이션 전에 지금 무엇을 돌리고 있는지 알아야 할 때.",
        "Microsoft Agent Framework를 검토하며 그 전신과 비교하고 싶을 때.",
      ],
      faq: [
        {
          q: "AutoGen은 아직 유지보수되나요?",
          a: "README에는 프로젝트가 보관 처리되어 Microsoft가 더 이상 적극적으로 유지보수하지 않는다고 나와 있고, Microsoft Agent Framework를 권장해요. Microsoft Learn은 이를 AutoGen의 직접적인 후속 제품이라고 불러요.",
        },
        {
          q: "CrewAI는 무료인가요?",
          a: "프레임워크는 MIT 라이선스로 무료예요. CrewAI AMP 플랫폼에는 무료 Basic 플랜과 가격을 별도로 협의하는 Enterprise 플랜이 있어요.",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "에이전트 CLI를 위한 이슈 보드 vs Bot과 루틴을 갖춘 개인 에이전트",
      title: "Multica vs Hermes Agent: 보드인가, 개인 에이전트인가",
      description:
        "Multica vs Hermes Agent: 에이전트 CLI(Hermes 포함)에 일을 배정하는 이슈 보드일까, Nous Research의 스스로 발전하는 개인 에이전트일까.",
      h1: "Multica vs Hermes Agent: 에이전트를 위한 보드 또는 에이전트 그 자체",
      lead: "Multica와 Hermes Agent는 서로 다른 계층에 있어요. Hermes Agent는 에이전트예요. 경험에서 스킬을 배우고 이름 붙은 Bot을 실행할 수 있는 Nous Research의 오픈 소스 개인 비서죠. Multica는 에이전트를 둘러싼 보드예요. 이슈를 배정하면 내 컴퓨터의 데몬이 Hermes를 포함해 내가 고른 에이전트 CLI를 실행해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "계층: Multica는 일을 배정하고 추적하고, Hermes Agent는 일을 해요.",
        "작업 추적: Multica에는 에이전트를 담당자로 두는 보드 보기와 목록 보기가 있어요. Hermes Agent 문서에는 작업 보드가 나오지 않아요.",
        "일정: Multica의 Autopilots는 cron이나 웹훅으로 실행되어 이슈를 만들어요. Hermes Agent에는 내장 cron 스케줄러와 Bot별 루틴이 있어요.",
        "라이선스: Hermes Agent는 MIT예요. Multica는 소스 공개이고, 자기 조직 안에서 셀프 호스팅하면 무료예요.",
      ],
      pickA: [
        "Hermes도 그중 하나일 수 있는 여러 에이전트를 위해 이슈, 프로젝트, 리뷰가 필요할 때.",
        "사람과 에이전트로 이뤄진 팀이 보드 하나에서 일할 때.",
      ],
      pickB: [
        "메모리를 유지하며 자기 스킬을 개선하는 에이전트 하나를 원할 때.",
        "보드를 관리하기보다 터미널, 데스크톱 앱, 채팅 앱에서 에이전트와 대화하고 싶을 때.",
      ],
      faq: [
        { q: "Multica는 Hermes Agent를 지원하나요?", a: "네. Hermes는 Multica의 데몬이 실행할 수 있는 에이전트 CLI 29개 중 하나예요." },
        { q: "Hermes Agent를 일정에 맞춰 실행할 수 있나요?", a: "네. 내장 cron 스케줄러가 있고, Bot Mode에서는 Bot마다 루틴을 둘 수 있어요." },
      ],
    },
    "multica-vs-linear": {
      summary: "에이전트를 담당자로 두는 두 이슈 트래커: 하나는 에이전트 CLI용, 하나는 제품 팀용",
      title: "Multica vs Linear: AI 에이전트용 이슈 트래킹 비교",
      description:
        "Multica vs Linear: 둘 다 AI 에이전트에게 이슈를 배정해요. Multica는 내 컴퓨터에서 에이전트 CLI를 실행하고, Linear는 클라우드에서 에이전트를 돌려요.",
      h1: "Multica vs Linear: 에이전트는 어디서 이슈를 받을까",
      lead: "Linear는 많은 제품 팀이 이미 쓰는 이슈 트래커로, 이제 이슈를 Linear Agent, Claude Code나 Codex 기반 클라우드 코딩 에이전트, 서드파티 에이전트에게 맡길 수 있어요. Multica는 처음부터 에이전트를 중심으로 만든 이슈 보드로, 내 컴퓨터의 데몬이 설치된 에이전트 CLI를 실행해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "에이전트가 실행되는 곳: Multica의 데몬은 내가 관리하는 노트북이나 서버에서 에이전트 CLI를 실행해요. Linear의 코딩 에이전트는 Linear 클라우드에서 실행돼요.",
        "배정: Multica에서는 에이전트가 담당자예요. Linear에서는 위임해도 사람이 주 담당자로 남고, 에이전트는 기여자로 추가돼요.",
        "반복 작업: Multica의 Autopilots는 cron이나 웹훅으로 실행돼요. Linear의 Loops는 일정이나 이벤트로 실행되고, AI 크레딧에서 차감돼요.",
        "호스팅과 가격: Multica는 셀프 호스팅할 수 있어요(소스 공개). Linear는 호스팅으로만 제공되며, Free, Basic($10), Business($16)가 사용자당 월 요금이고 연간 결제예요.",
      ],
      pickA: [
        "이미 가진 CLI와 로그인으로 내 하드웨어에서 에이전트를 돌리고 싶을 때.",
        "보드를 직접 호스팅하고 싶을 때.",
      ],
      pickB: [
        "팀이 이미 Linear에서 계획을 세우고 있고, 같은 트래커 안에서 에이전트를 쓰고 싶을 때.",
        "코딩 에이전트를 공급사의 클라우드에서 돌리고 싶을 때.",
      ],
      faq: [
        {
          q: "Linear에서 AI 에이전트에게 이슈를 배정할 수 있나요?",
          a: "네. 이슈를 Linear Agent, Claude Code나 Codex를 쓰는 클라우드 코딩 에이전트, 그리고 워크스페이스에 설치한 Cursor, Codex, Devin 같은 서드파티 에이전트에게 맡길 수 있어요.",
        },
        {
          q: "Linear는 얼마인가요?",
          a: "Free는 $0이고 팀 2개, 이슈 250개까지예요. Basic은 사용자당 월 $10, Business는 $16이며 연간 결제예요. 클라우드 코딩 에이전트와 Loops는 선불 AI 크레딧도 사용해요.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "채팅 앱 속 개인 비서 vs Anthropic의 코딩 에이전트",
      title: "OpenClaw vs Claude Code: 개인 비서인가, 코딩 에이전트인가",
      description:
        "OpenClaw vs Claude Code: 채팅 앱에서 답하는 오픈 소스 개인 비서일까, 저장소에서 일하는 Anthropic의 코딩 에이전트일까. 가격과 모델을 비교해요.",
      h1: "OpenClaw vs Claude Code: 채팅 속 비서 또는 코드 속 에이전트",
      lead: "OpenClaw와 Claude Code는 둘 다 내 컴퓨터에서 실행되는 에이전트이고, OpenClaw는 Claude Code 로그인을 재사용해 Claude 모델을 쓸 수도 있어요. 하지만 하는 일이 달라요. OpenClaw는 WhatsApp, Telegram, Slack, iMessage로 부르는 개인 비서예요. Claude Code는 Anthropic의 코딩 에이전트로, 코드베이스를 읽고 파일을 편집하고 명령을 실행해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: OpenClaw는 채팅 앱을 통해 개인 작업과 자동화를 처리해요. Claude Code는 터미널, IDE, 데스크톱 앱, 웹에서 코드 저장소를 다뤄요.",
        "모델: OpenClaw는 Claude를 포함한 많은 제공자를 플러그인으로 연결해요. Claude Code는 Claude 모델에서 실행돼요.",
        "가격과 라이선스: OpenClaw는 MIT 라이선스로 무료예요(모델 제공자 비용은 따로 내요). Claude Code는 월 $20부터인 Claude 유료 요금제에 포함되고, 오픈 소스가 아니에요.",
        "예약 작업: OpenClaw에는 내장 Automations 스케줄러가 있어요. Claude Code에는 클라우드와 데스크톱 예약 작업, 그리고 `/loop`가 있어요.",
      ],
      pickA: [
        "개인 작업과 자동화를 위해 휴대폰에서 메시지를 보낼 수 있는 비서를 원할 때.",
        "로컬 모델을 포함해 여러 모델 제공자를 섞어 쓰고 싶을 때.",
      ],
      pickB: [
        "주로 코드베이스에서 일할 때: 기능 개발, 수정, 리뷰, 리팩터링.",
        "이미 Claude 요금제를 결제하고 있을 때.",
      ],
      faq: [
        { q: "OpenClaw에서 Claude를 쓸 수 있나요?", a: "네. Anthropic API 키를 쓰거나, 같은 컴퓨터에 있는 Claude Code 로그인을 재사용할 수 있어요." },
        { q: "Claude Code는 무료인가요?", a: "아니요. Claude 유료 요금제(Pro, Max, Ultra, Team, Enterprise)에 포함되고, Free에는 포함되지 않아요." },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "Nous Research의 스스로 발전하는 개인 에이전트 vs Anthropic의 코딩 에이전트",
      title: "Hermes Agent vs Claude Code: 개인 에이전트인가, 코딩 에이전트인가",
      description:
        "Hermes Agent vs Claude Code: 스킬을 배우고 Bot을 실행하는 오픈 소스 에이전트일까, Anthropic의 코딩 에이전트일까. 모델과 가격을 비교해요.",
      h1: "Hermes Agent vs Claude Code: 배우는 개인 에이전트 또는 코딩 에이전트",
      lead: "Hermes Agent와 Claude Code는 둘 다 내 컴퓨터에서 실행되고, 둘 다 서브에이전트와 일정 기능이 있으며, 둘 다 Claude 모델로 쓸 수 있어요. 차이는 초점이에요. Nous Research의 Hermes Agent는 학습 루프가 있는 개인 에이전트로, 경험에서 스킬을 쓰고 자체 메모리를 유지하며 어떤 모델 제공자로든 동작해요. Claude Code는 코드베이스에서 일하기 위한 Anthropic의 코딩 에이전트예요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "초점: Hermes Agent는 범용 개인 에이전트예요. Claude Code는 코드를 위해 만들어졌어요.",
        "모델: Hermes Agent는 많은 제공자와 작동하며, 문서에 따르면 Claude 구독은 추가 사용량을 구매한 Max에서만 작동해요. Claude Code는 Claude 모델에서 실행돼요.",
        "여러 에이전트: Hermes Agent의 Bot끼리는 직접 메시지를 주고받아요. Claude Code의 실험적 기능인 agent teams에서는 팀원끼리 메시지를 주고받아요.",
        "가격과 라이선스: Hermes Agent는 MIT이고 무료이며, 선택 사항으로 Nous Portal 구독이 있어요. Claude Code는 Claude 유료 요금제에 포함되고, 오픈 소스가 아니에요.",
      ],
      pickA: [
        "여러 종류의 작업을 맡고, 시간이 지날수록 스킬을 키우는 에이전트 하나를 원할 때.",
        "모델 제공자를 자유롭게 고르고 바꾸고 싶을 때.",
      ],
      pickB: [
        "주된 일이 코드베이스에 있을 때.",
        "IDE 확장, 데스크톱 앱, 코드 리뷰, 예약 작업 같은 Anthropic의 도구도 함께 쓰고 싶을 때.",
      ],
      faq: [
        {
          q: "Hermes Agent에서 내 Claude 구독을 쓸 수 있나요?",
          a: "문서에 따르면 Claude 구독 경로는 추가 사용량을 구매한 Claude Max에서만 작동하고, Claude Pro에서는 작동하지 않아요. API 키로 Claude를 쓸 수도 있어요.",
        },
        {
          q: "Claude Code도 Hermes Agent처럼 새 스킬을 배우나요?",
          a: "Claude Code는 나나 팀이 SKILL.md 파일로 작성한 스킬을 쓰고, 자동 메모리를 유지해요. Hermes Agent가 내세우는 초점은 자기 경험에서 스킬을 쓰고 다듬는 거예요.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "개인 비서 vs 오픈 소스 코딩 에이전트, 둘 다 MIT이고 모델을 가리지 않음",
      title: "OpenClaw vs OpenCode: 개인 비서인가, 코딩 에이전트인가",
      description:
        "OpenClaw vs OpenCode: MIT 라이선스에 모델을 가리지 않는 두 에이전트. 채팅 앱 속 개인 비서와, 터미널과 데스크톱에서 쓰는 코딩 에이전트예요.",
      h1: "OpenClaw vs OpenCode: 이름은 비슷해도 하는 일은 달라요",
      lead: "OpenClaw와 OpenCode는 둘 다 MIT 오픈 소스이고, 둘 다 내 컴퓨터에서 실행되며, 둘 다 많은 모델 제공자와 작동해서 자주 비교돼요. 하지만 하는 일이 달라요. OpenClaw는 WhatsApp, Telegram, Slack 등 채팅 앱에서 대화하는 개인 비서예요. OpenCode는 터미널 UI, 데스크톱 앱, 웹 앱, SDK가 있는 코딩 에이전트예요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: OpenClaw는 채팅으로 개인 작업과 자동화를 실행해요. OpenCode는 코드를 쓰고 바꿔요.",
        "인터페이스: OpenClaw는 채팅 앱에서 답하고 Control UI도 있어요. OpenCode는 터미널 UI, 데스크톱 앱, 웹 앱, SDK로 실행돼요.",
        "유료 옵션: OpenClaw에는 유료 등급이 없어요. OpenCode는 무료 모델과 함께 무료로 쓸 수 있고, 월 $10인 OpenCode Go와 월 $40인 Go Plus를 제공해요.",
        "예약 작업: OpenClaw에는 내장 스케줄러가 있어요. OpenCode의 일정 기능은 실험적이고 직접 켜야 해요.",
      ],
      pickA: [
        "어디서든 메시지를 보낼 수 있는 비서를 원할 때.",
        "일정, 웹훅, 이메일로 시작되는 자동화를 원할 때.",
      ],
      pickB: [
        "로컬 모델을 포함해 200개 이상의 모델 제공자와 작동하는 오픈 소스 코딩 에이전트를 원할 때.",
        "계정 없이 무료 모델로 코딩을 시작하고 싶을 때.",
      ],
      faq: [
        {
          q: "OpenClaw와 OpenCode는 같은 프로젝트인가요?",
          a: "아니요. OpenClaw는 OpenClaw Foundation의 개인 비서이고, OpenCode는 Anomaly의 코딩 에이전트예요. 둘 다 MIT 라이선스예요.",
        },
        {
          q: "OpenCode를 쓰려면 API 키가 필요한가요?",
          a: "시작할 때는 필요 없어요. 일일 한도가 있는 무료 모델이 포함되어 있고, 이 모델들에는 계정도 필요 없어요. 내 제공자를 연결하거나 OpenCode Go를 구독할 수도 있어요.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Claude Code의 실험적 agent teams vs OpenClaw의 멀티 에이전트 Gateway",
      title: "Claude Code Agent Teams vs OpenClaw: 멀티 에이전트 구성",
      description:
        "Claude Code agent teams vs OpenClaw: Claude Code 안의 실험적인 리드·팀원 모드일까, Gateway 하나에 올린 여러 개인 에이전트일까.",
      h1: "Claude Code agent teams vs OpenClaw: 여러 에이전트를 돌리는 두 가지 방법",
      lead: "둘 다 여러 에이전트가 함께 일하게 해 줘요. Claude Code agent teams는 기본으로 꺼져 있는 실험적 기능으로, 리드 세션이 팀원을 생성해요. 팀원은 작업 목록을 공유하고 서로 메시지를 주고받는 별도의 Claude Code 인스턴스예요. OpenClaw는 내 컴퓨터의 Gateway 하나에서 서로 분리된 여러 에이전트를 실행하고, 코디네이터가 리서처, 작성자, 리뷰어 에이전트에게 일을 위임하는 팀 프리셋이 있어요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "목적: agent teams는 하나의 코딩 작업을 여러 Claude Code 인스턴스에 나눠요. OpenClaw의 에이전트는 채팅 앱으로 부르는 개인 비서예요.",
        "협업: agent teams는 의존 관계가 있는 작업 목록을 공유하고, 팀원끼리 메시지를 주고받아요. OpenClaw 에이전트는 서로의 세션에 접근할 수 있고, 문서는 팀 프리셋을 스케줄러가 아닌 프롬프트 지침이라고 설명해요.",
        "수명: agent team은 리드 세션 아래에서 한 작업 동안 실행돼요. OpenClaw 에이전트는 Gateway에 상주하며 예약된 자동화를 실행해요.",
        "비용: agent teams는 Claude 유료 요금제의 Claude Code에 포함돼요. OpenClaw는 무료이고 MIT 라이선스예요.",
      ],
      pickA: [
        "여러 Claude Code 인스턴스가 큰 코딩 작업을 나눠 맡고 서로 대화하길 원할 때.",
        "이미 Claude Code를 쓰고 있고, 실험적 기능을 켜는 데 문제가 없을 때.",
      ],
      pickB: [
        "내 컴퓨터에서 각자 페르소나를 가진, 오래 실행되는 개인 에이전트를 원할 때.",
        "채팅 앱으로 부르고, 일정에 맞춰 실행하고 싶을 때.",
      ],
      faq: [
        {
          q: "Claude Code agent teams는 어떻게 켜나요?",
          a: "실험적 기능이라 기본으로 꺼져 있어요. `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`을 설정하면 리드 세션이 팀원을 생성할 수 있어요. [Claude Code agent teams](/blog/claude-code-agent-teams) 글도 참고하세요.",
        },
        {
          q: "OpenClaw 에이전트는 팀으로 일할 수 있나요?",
          a: "네. Gateway 하나에서 서로 분리된 여러 에이전트를 실행할 수 있고, 팀 프리셋은 코디네이터와 리서처, 작성자, 리뷰어 에이전트를 만들어요.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "2026년에 회사가 호스팅 서비스를 정리한 두 병렬 코딩 에이전트 도구",
      title: "Vibe Kanban vs Conductor: 2026년의 병렬 코딩 에이전트",
      description:
        "Vibe Kanban vs Conductor: 오픈 소스 칸반 보드일까, 신규 가입을 닫고 Meta에 합류하는 Mac 앱일까. 아직 쓸 수 있는 것과 차이를 비교해요.",
      h1: "Vibe Kanban vs Conductor: 각각 무엇이 남았고, 어떻게 다를까",
      lead: "Vibe Kanban과 Conductor는 둘 다 여러 코딩 에이전트를 각자의 git worktree에서 병렬로 실행해, 결과를 리뷰하고 머지할 수 있게 해 줘요. 둘 다 2026년에 바뀌었어요. Vibe Kanban을 만든 회사 bloop은 4월에 문을 닫았고, 프로젝트는 커뮤니티가 유지보수하는 오픈 소스로 이어지고 있어요. Conductor는 11월 4일 Meta 합류를 발표했어요. 신규 가입과 다운로드는 닫혔고, 클라우드는 11월 13일부터 읽기 전용이 된 뒤 11월 20일에 종료되며, Mac 앱은 2027년 초까지 새 모델 지원과 치명적인 버그 수정을 받아요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "이용 가능 여부: Vibe Kanban의 로컬 앱은 누구나 무료로 실행할 수 있어요. Conductor는 더 이상 신규 가입이나 다운로드를 받지 않아요.",
        "보드: Vibe Kanban은 일을 칸반 이슈로 계획해요. Conductor는 워크스페이스 목록을 보여 주고, GitHub나 Linear 이슈에서 워크스페이스를 시작할 수 있어요.",
        "라이선스: Vibe Kanban은 Apache-2.0 오픈 소스예요. Conductor는 비공개 소스예요.",
        "플랫폼과 에이전트: Vibe Kanban은 브라우저나 데스크톱 앱에서 실행되고, Conductor는 Mac 앱이에요. 둘 다 Claude Code, Codex, Cursor, OpenCode를 실행하며, Vibe Kanban은 Gemini CLI, GitHub Copilot, Amp 등도 지원 목록에 올려요.",
      ],
      pickA: [
        "계속 실행하고 수정할 수 있는 오픈 소스 도구를 원할 때.",
        "에이전트 앞에 칸반 보드를 두고 싶을 때.",
      ],
      pickB: [
        "이미 Mac에서 Conductor를 쓰고 있고, 로컬 앱만 있으면 될 때.",
        "2026년 11월 20일에 클라우드 기능이 끝나도 괜찮을 때.",
      ],
      faq: [
        {
          q: "Conductor는 서비스를 종료하나요?",
          a: "Conductor는 2026년 11월 4일 Meta 합류를 발표했어요. 신규 가입과 다운로드는 닫혔고, 클라우드는 11월 13일부터 읽기 전용이 된 뒤 11월 20일에 종료되며, Mac 앱은 2027년 초까지 새 모델 지원과 치명적인 버그 수정을 받아요. [Conductor 대안](/blog/conductor-alternatives)도 참고하세요.",
        },
        {
          q: "Vibe Kanban은 아직 유지보수되나요?",
          a: "bloop은 2026년 4월 10일에 사업 종료를 발표했어요. 프로젝트는 커뮤니티가 유지보수하는 Apache-2.0 오픈 소스로 이어지고 있고, 로컬 앱은 무료로 실행할 수 있어요.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "병렬 코딩 에이전트: 오픈 소스 터미널 앱 vs Meta에 합류하는 Mac 앱",
      title: "Claude Squad vs Conductor: 병렬 Claude Code 에이전트",
      description:
        "Claude Squad vs Conductor: tmux와 worktree로 도는 오픈 소스 터미널 앱일까, Meta에 합류하며 2026년 11월 20일에 클라우드를 끝내는 Mac 앱일까.",
      h1: "Claude Squad vs Conductor: 병렬 에이전트를 위한 터미널 또는 Mac 앱",
      lead: "Claude Squad와 Conductor의 핵심 역할은 같아요. 여러 코딩 에이전트를 동시에, 각자 git worktree의 자기 브랜치에서 실행하고, 결과를 리뷰하고 머지하도록 도와요. Claude Squad는 tmux 위에 만든 오픈 소스 터미널 앱이에요. Conductor는 비공개 소스 Mac 앱으로, 2026년 11월 4일 Meta 합류를 발표했고 더 이상 신규 사용자를 받지 않아요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "인터페이스: Claude Squad는 tmux와 GitHub CLI가 필요한 터미널 UI예요. Conductor는 Mac 데스크톱 앱이에요.",
        "라이선스: Claude Squad는 AGPL-3.0 오픈 소스예요. Conductor는 비공개 소스예요.",
        "에이전트: Claude Squad는 기본으로 Claude Code를 쓰고, Codex, Gemini, Aider 또는 설정한 어떤 프로그램이든 실행할 수 있어요. Conductor는 Claude Code, Codex, OpenCode, Cursor Agent를 실행해요.",
        "현황: Claude Squad의 최신 릴리스는 v1.0.20(2026년 8월)이에요. Conductor는 2026년 11월 4일에 신규 가입과 다운로드를 닫았고, 11월 20일에 클라우드를 종료하며, 2027년 초까지 Mac 앱을 업데이트해요.",
      ],
      pickA: [
        "터미널에서 주로 일하고, 누구나 설치할 수 있는 오픈 소스 도구를 원할 때.",
        "설정할 수 있는 CLI 에이전트라면 무엇이든 실행하고 싶을 때.",
      ],
      pickB: [
        "이미 Conductor를 쓰고 있고, diff와 풀 리퀘스트가 내장된 데스크톱 앱이 더 편할 때.",
        "Mac을 쓰고, 2027년 초까지 로컬 앱만 있으면 될 때.",
      ],
      faq: [
        { q: "Claude Squad는 무료인가요?", a: "네. AGPL-3.0 오픈 소스예요. 그 안에서 실행하는 에이전트나 모델 API 비용은 따로 내요." },
        {
          q: "Conductor를 아직 다운로드할 수 있나요?",
          a: "신규 사용자는 안 돼요. Conductor는 2026년 11월 4일 Meta 합류를 발표하면서 가입과 다운로드를 닫았어요. 기존 사용자는 Mac 앱을 계속 쓸 수 있고, 2027년 초까지 업데이트를 받아요.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "Cognition의 클라우드 AI 소프트웨어 엔지니어 vs Anthropic의 코딩 에이전트",
      title: "Devin vs Claude Code: AI 엔지니어인가, 코딩 에이전트인가",
      description:
        "Devin vs Claude Code: 클라우드 VM과 Automations를 갖춘 Cognition의 AI 소프트웨어 엔지니어일까, Anthropic의 코딩 에이전트일까.",
      h1: "Devin vs Claude Code: 클라우드의 엔지니어 또는 곁에서 일하는 에이전트",
      lead: "Devin과 Claude Code는 둘 다 코드를 쓰고 실행하고 테스트하며 풀 리퀘스트를 여는 코딩 에이전트예요. Cognition의 Devin은 클라우드 세션이 중심이에요. 세션마다 자체 가상 머신이 있고, Automations와 하위 Devin을 실행하는 코디네이터를 갖췄으며, 데스크톱 앱과 CLI도 있어요. Anthropic의 Claude Code는 터미널, IDE, 데스크톱 앱, 웹에서 Claude 모델로 일해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "실행 위치: Devin 클라우드 세션은 각각 자체 VM을 받아요. Claude Code는 기본적으로 로컬에서 실행되고, 웹에서는 클라우드 세션도 쓸 수 있어요.",
        "모델: Devin은 라우터가 고르는 Cognition의 SWE-2와 여러 연구소의 프런티어 모델을 써요. Claude Code는 Claude 모델에서 실행돼요.",
        "가격: Devin에는 Free, 월 $20인 Pro, 월 $200인 Max, 그리고 월 $80에 개발자 시트당 $40가 붙는 Teams가 있어요. Claude Code는 Claude Pro($20), Max($100), Ultra($200), Team, Enterprise에 포함돼요.",
        "자동화: Devin의 Automations는 일정과 Slack, GitHub, Linear 등의 이벤트로 실행돼요. Claude Code의 클라우드 예약 작업은 일정, API 호출, GitHub 이벤트로 실행돼요.",
      ],
      pickA: [
        "Slack, Linear, Jira에서 시작한 작업을 각각 자체 클라우드 VM에서 돌리고 싶을 때.",
        "하위 세션을 실행하고 메시지를 보내는 코디네이터 세션이 필요할 때.",
      ],
      pickB: [
        "에이전트가 내 체크아웃과 터미널에서 일하길 원할 때.",
        "이미 Claude 요금제를 결제하고 있고, IDE 확장, 데스크톱 앱, 웹을 쓰고 싶을 때.",
      ],
      faq: [
        {
          q: "Devin은 얼마인가요?",
          a: "Free는 $0, Pro는 월 $20, Max는 월 $200이고, Teams는 월 $80에 정식 개발자 시트당 월 $40가 추가되며 최대 100명까지예요. Enterprise는 견적으로 정해져요.",
        },
        {
          q: "Claude Code는 Claude Pro에 포함되나요?",
          a: "네. Claude Code는 모든 Claude 유료 요금제(Pro, Max, Ultra, Team, Enterprise)에 포함돼요.",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "Cognition의 AI 소프트웨어 엔지니어 vs OpenAI의 코딩 에이전트",
      title: "Devin vs Codex: AI 소프트웨어 엔지니어 비교(2026)",
      description:
        "Devin vs OpenAI Codex: 클라우드 VM과 Automations일까, CLI, IDE, ChatGPT 앱, 클라우드에서 쓰는 코딩 에이전트일까. 가격과 모델을 비교해요.",
      h1: "Devin vs Codex: 클라우드에서도 일하는 두 코딩 에이전트",
      lead: "Devin과 Codex는 둘 다 로컬과 클라우드에서 코딩 작업을 실행하고 풀 리퀘스트를 열어요. Cognition의 Devin은 클라우드 세션마다 자체 가상 머신을 주고, Automations와 코디네이터 세션을 더해요. OpenAI의 Codex는 ChatGPT 요금제에 포함되며, 터미널 CLI, IDE 확장, ChatGPT 데스크톱 앱, Codex Cloud에서 실행돼요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "가격: Devin은 자체 요금제(Free, Pro $20, Max $200, Teams)로 판매돼요. Codex는 월 $20인 Plus부터 ChatGPT 요금제에 포함되거나, API 키로 써요.",
        "오픈 소스: Codex의 CLI, SDK, App Server는 Apache-2.0이에요. Devin은 오픈 소스가 아니에요.",
        "모델: Devin은 Cognition의 SWE-2와 프런티어 모델 사이를 라우팅해요. Codex는 OpenAI 모델에서 실행돼요.",
        "예약 작업: Devin의 Automations는 일정과 여러 이벤트 소스로 실행돼요. Codex에는 ChatGPT 데스크톱 앱과 웹의 예약 작업이 있어요.",
      ],
      pickA: [
        "여러 이벤트 소스(Slack, Teams, Jira, PagerDuty, 웹훅)에서 작업을 시작하고 싶을 때.",
        "병렬 VM에서 하위 세션을 실행하는 코디네이터가 필요할 때.",
      ],
      pickB: [
        "이미 ChatGPT를 결제하고 있고, 터미널과 IDE에서 에이전트를 쓰고 싶을 때.",
        "직접 살펴볼 수 있는 오픈 소스 CLI를 원할 때.",
      ],
      faq: [
        {
          q: "Codex는 무료인가요?",
          a: "Codex는 Plus(월 $20)부터 ChatGPT 유료 요금제에 포함되고, OpenAI API 키로도 실행할 수 있어요. CLI 자체는 Apache-2.0 오픈 소스예요.",
        },
        {
          q: "Devin과 Codex는 Linear 이슈를 받을 수 있나요?",
          a: "네. Linear 이슈를 Devin에게 배정할 수 있고, ChatGPT 유료 요금제에서는 Linear 이슈를 Codex에 배정하거나 댓글에서 Codex를 멘션할 수 있어요.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "Factory의 Droids 플랫폼 vs Anthropic의 코딩 에이전트",
      title: "Factory vs Claude Code: Droids인가, Claude Code인가",
      description:
        "Factory(Droids) vs Claude Code: Automations와 Workstreams를 갖춘 코딩 에이전트 플랫폼일까, Anthropic의 코딩 에이전트일까.",
      h1: "Factory vs Claude Code: Droids 플랫폼 또는 Anthropic의 에이전트",
      lead: "Factory와 Claude Code는 둘 다 데스크톱 앱, CLI, CI용 헤드리스 모드를 갖춘 코딩 에이전트예요. Factory의 Droids는 내 키를 포함해 많은 모델과 작동하고, Automations, 오케스트레이터가 있는 Workstreams, Factory가 호스팅하는 클라우드 컴퓨터를 더해요. Claude Code는 Claude 모델 기반의 Anthropic 에이전트로, Claude 유료 요금제에 포함돼요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "모델: Factory는 프런티어 모델, 오픈 웨이트 모델, 내 키와 작동해요. Claude Code는 Claude 모델에서 실행돼요.",
        "가격: Factory에는 Free(추론은 직접 준비), 월 $20인 Pro, 월 $100인 Plus, 그리고 더 높은 등급이 있어요. Claude Code는 Claude Pro($20), Max($100), Ultra($200), Team, Enterprise에 포함돼요.",
        "여러 에이전트: Factory의 Workstreams(베타)에서는 오케스트레이터 아래 에이전트가 오케스트레이터에게 보고해요. Claude Code의 실험적 기능인 agent teams에서는 팀원끼리 메시지를 주고받아요.",
        "자동화: Factory의 Automations는 일정, Slack, GitHub, 웹훅으로 실행돼요. Claude Code에는 클라우드 예약 작업과 GitHub Actions가 있어요.",
      ],
      pickA: [
        "여러 연구소의 모델을 바꿔 가며 쓰거나, 내 모델을 가져오고 싶을 때.",
        "호스팅 클라우드 컴퓨터와, 일정에 맞춰 티켓을 PR로 만드는 것 같은 자동화가 필요할 때.",
      ],
      pickB: [
        "Claude 모델로 충분하고, 이미 Claude 요금제를 결제하고 있을 때.",
        "코드 리뷰, 보안 리뷰, 플러그인 같은 Anthropic의 도구도 함께 쓰고 싶을 때.",
      ],
      faq: [
        {
          q: "Factory Droids는 무엇인가요?",
          a: "Droids는 Factory의 코딩 에이전트예요. Factory 데스크톱 앱, Droid CLI, `droid exec`를 쓰는 CI의 헤드리스 모드, Factory가 호스팅하는 클라우드 컴퓨터에서 실행돼요.",
        },
        {
          q: "Factory는 Claude 모델과 작동하나요?",
          a: "Factory는 Claude Opus와 Sonnet을 포함한 주요 프런티어 모델에 더해, 오픈 웨이트 모델과 내 API 키도 지원한다고 밝혀요.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "어떤 모델이든 쓰는 오픈 소스 코딩 에이전트 vs Anthropic의 코딩 에이전트",
      title: "OpenCode vs Claude Code: 오픈 소스 코딩 에이전트 비교",
      description:
        "OpenCode vs Claude Code: 200개 이상의 모델 제공자와 무료 모델로 쓰는 MIT 코딩 에이전트일까, Claude 유료 요금제에 포함된 Anthropic의 에이전트일까.",
      h1: "OpenCode vs Claude Code: 오픈 소스와 모든 모델 또는 Anthropic의 에이전트",
      lead: "OpenCode와 Claude Code는 둘 다 터미널 UI, 데스크톱 앱, 서브에이전트, MCP를 갖춘 코딩 에이전트예요. OpenCode는 MIT 오픈 소스이고, 로컬 모델과 무료 모델 묶음을 포함해 200개 이상 제공자의 모델과 작동해요. Claude Code는 Claude 모델 기반의 Anthropic 에이전트로, Claude 유료 요금제에 포함돼요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "라이선스: OpenCode는 MIT예요. Claude Code의 저장소는 공개되어 있지만 모든 권리가 보유되어 있어요(all rights reserved).",
        "모델: OpenCode는 Models.dev를 통해 200개 이상의 제공자와 작동해요. Claude Code는 Claude 모델에서 실행돼요.",
        "가격: OpenCode는 무료 모델과 함께 무료이고, OpenCode Go는 월 $10 요금제예요. Claude Code는 월 $20인 Pro부터 Claude 요금제에 포함돼요.",
        "예약 작업: Claude Code에는 클라우드와 데스크톱 예약 작업, 그리고 `/loop`가 있어요. OpenCode의 일정 기능은 실험적이고 직접 켜야 해요.",
      ],
      pickA: [
        "오픈 소스 에이전트를 원하고, 로컬 모델을 포함해 어떤 모델이든 자유롭게 고르고 싶을 때.",
        "무료로 시작하고 싶을 때.",
      ],
      pickB: [
        "예약 작업, 코드 리뷰, IDE 확장 같은 Anthropic의 도구와 함께 Claude 모델을 쓰고 싶을 때.",
        "이미 Claude 요금제를 결제하고 있을 때.",
      ],
      faq: [
        {
          q: "OpenCode는 무료인가요?",
          a: "네. 에이전트는 MIT 라이선스로 무료이고, 일일 한도가 있는 무료 모델이 함께 제공돼요. OpenCode Go는 월 $10, Go Plus는 월 $40 요금제예요.",
        },
        {
          q: "OpenCode에서 Claude 모델을 쓸 수 있나요?",
          a: "OpenCode는 Anthropic을 포함한 200개 이상의 모델 제공자와 작동하므로, API 키로 Claude 모델을 쓸 수 있어요.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "로우코드 AI Workforce 빌더 vs 바로 쓰는 AI 비서",
      title: "Relevance AI vs Lindy: AI Workforce인가, AI 비서인가",
      description:
        "Relevance AI vs Lindy: AI 에이전트 팀을 만드는 로우코드 플랫폼일까, 받은편지함, 캘린더, Slack을 오가는 AI 비서 하나일까. 가격과 예약 작업을 비교해요.",
      h1: "Relevance AI vs Lindy: AI Workforce를 만들까, 비서 하나를 채용할까",
      lead: "Relevance AI와 Lindy는 둘 다 AI 직원이라는 아이디어를 서로 다른 형태로 판매해요. Relevance AI는 전문 에이전트를 만들고 이를 멀티 에이전트 “AI Workforce”로 연결하는 로우코드 플랫폼으로, 영업팀을 통해 기업에 판매돼요. Lindy는 받은편지함, 캘린더, 회의, Slack을 오가며 일하는 호스팅 비서 하나로, 루틴과 승인 기능을 갖췄어요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "형태: Relevance AI는 여러 전문 에이전트를 만드는 빌더예요. Lindy는 워크스페이스마다 하나인 비서로, 작업을 맡겨서 써요.",
        "가격: Relevance AI의 가격 페이지에는 영업팀을 통한 Enterprise만 있어요. Lindy에는 $50 크레딧이 들어 있는 무료 체험이 있고, 요금제는 활성 사용자당 월 $29.99부터예요.",
        "여러 에이전트: Relevance AI 에이전트는 캔버스에서 서로 일을 넘겨요. Lindy 문서는 워크스페이스당 Lindy 하나를 설명해요.",
        "승인: Lindy는 외부에 영향을 주는 일 전에 먼저 물어봐요. Relevance AI에는 에스컬레이션이 있고, Enterprise에서는 근무 시간 제어도 있어요.",
      ],
      pickA: [
        "여러 전문 에이전트를 설계하고 연결하며, 공급사 팀의 배포 지원을 받고 싶을 때.",
        "회사 차원에서 구매하며 영업팀을 거칠 것으로 예상할 때.",
      ],
      pickB: [
        "이메일, 캘린더, 회의, 후속 조치를 맡을 비서 하나를 오늘부터 쓰고 싶을 때.",
        "결제 전에 무료로 써 보고 싶을 때.",
      ],
      faq: [
        {
          q: "Lindy는 얼마인가요?",
          a: "무료 체험에서 7일간 $50 크레딧을 줘요. 유료 요금제는 활성 사용자당 월 $29.99(3,000 크레딧)부터 시작해요.",
        },
        {
          q: "Relevance AI에 무료 플랜이 있나요?",
          a: "문서에 따르면 Free 플랜은 종료되었고, 공개 가격 페이지에는 영업팀을 통한 Enterprise만 있어요.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "xAI의 호스팅 AI 팀원 vs Anthropic의 코딩 에이전트",
      title: "Grok Bot vs Claude Code: AI 팀원인가, 코딩 에이전트인가",
      description:
        "Grok Bot vs Claude Code: 자기 컴퓨터로 Slack과 내 앱에서 일하는 xAI의 호스팅 Bot일까, 내 저장소에서 일하는 Anthropic의 코딩 에이전트일까.",
      h1: "Grok Bot vs Claude Code: 앱에서 일하는 팀원 또는 코드를 위한 에이전트",
      lead: "Grok Bot과 Claude Code는 둘 다 실제 업무를 맡지만, 일하는 곳이 달라요. Grok Bot은 xAI의 호스팅 AI 팀원이에요. 각 Bot은 클라우드에 자기 컴퓨터를 하나씩 받아 내 도구에 로그인하고, Slack과 Microsoft Teams에서 일하며, 루틴을 실행해요. Claude Code는 Anthropic의 코딩 에이전트로, 터미널, IDE, 데스크톱 앱, 웹에서 내 저장소를 대상으로 일해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: Grok Bot은 CRM, 고객 지원, 경비, 채용 같은 업무용 앱에서 일을 처리해요. Claude Code는 코드를 쓰고 고쳐요.",
        "실행 위치: 각 Grok Bot은 자체 클라우드 컴퓨터가 있어 노트북을 닫아도 계속 일해요. Claude Code는 기본적으로 내 컴퓨터에서 실행되고, 웹에서는 클라우드 세션도 쓸 수 있어요.",
        "쓰는 방식: Grok Bot에는 전용 앱, Slack, Teams, 화상 통화에서 메시지를 보내요. Claude Code는 터미널, IDE, 데스크톱 앱, 웹에서 써요.",
        "가격: Grok Bot에는 월 $30인 Premium, 월 $100인 Super, 월 $200인 Ultra가 있어요. Claude Code는 Claude Pro($20), Max($100), Ultra($200), Team, Enterprise에 포함돼요.",
      ],
      pickA: [
        "팀이 이미 쓰는 앱 안에서 영업, 운영, 고객 지원 업무를 맡을 AI 팀원이 필요할 때.",
        "Slack과 회의에 함께하고, 노트북을 닫아 둔 동안에도 일하길 원할 때.",
      ],
      pickB: [
        "주로 코드베이스에서 일할 때: 기능 개발, 수정, 리뷰, 리팩터링.",
        "에이전트가 내 체크아웃에서 내 도구와 테스트로 일하길 원할 때.",
      ],
      faq: [
        {
          q: "Grok Bot은 얼마인가요?",
          a: "Premium은 월 $30, Super는 $100, Ultra는 $200이고, 모두 월 단위로 결제하며 주간 Grok Bot 사용량이 포함돼요. 추가 사용량은 토큰 비용 기준으로 청구돼요. Teams와 Enterprise는 영업팀을 통해 진행해요.",
        },
        {
          q: "Grok Bot이 코드를 쓸 수 있나요?",
          a: "xAI는 제품 UI에서 버그를 재현하고 티켓을 등록하는 것 같은 엔지니어링 용도와, Linear에서 코딩 에이전트를 조율하는 가이드를 소개해요. Claude Code는 내 저장소에서 바로 일하도록 만들어졌어요.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "xAI의 호스팅 AI 팀원 vs Nous Research의 오픈 소스 개인 에이전트",
      title: "Grok Bot vs Hermes Agent: 호스팅 Bot인가, 오픈 소스 에이전트인가",
      description:
        "Grok Bot vs Hermes Agent: 자기 컴퓨터를 가진 xAI의 호스팅 Bot일까, Bot과 루틴을 갖추고 어떤 모델 제공자로든 쓰는 오픈 소스 에이전트일까.",
      h1: "Grok Bot vs Hermes Agent: 호스팅 팀원 또는 직접 실행하는 에이전트",
      lead: "Grok Bot과 Hermes Agent는 둘 다 서로 대화하고 루틴을 실행하는 이름 붙은 Bot을 제공해서 자주 비교돼요. Grok Bot은 xAI의 호스팅 제품으로, 각 Bot이 자체 클라우드 컴퓨터를 가지고 Slack, Teams, 내 앱에서 일해요. Hermes Agent는 Nous Research의 오픈 소스 에이전트로, 어떤 모델 제공자로든 직접 실행하며, 이름 붙은 Bot 여러 개를 위한 Bot Mode가 있어요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "호스팅: Grok Bot은 xAI 클라우드에서 실행돼요. Hermes Agent는 내 컴퓨터나 서버에서 실행되고, Nous Portal 유료 등급에는 클라우드 호스팅 에이전트 1개가 포함돼요.",
        "라이선스와 가격: Grok Bot은 비공개 소스이고 월 $30부터예요. Hermes Agent는 MIT이고 무료이며, 선택 사항인 Nous Portal 구독은 월 $20부터예요.",
        "모델: Grok Bot은 Grok으로 만들어졌어요. Hermes Agent는 로컬 모델을 포함해 많은 제공자와 작동해요.",
        "대화하는 곳: Grok Bot은 전용 앱, Slack, Teams, 화상 통화에서 일해요. Hermes Agent는 터미널, 데스크톱 앱, 채팅 앱에서 써요.",
      ],
      pickA: [
        "자기 컴퓨터를 가지고 Slack, Teams, 회의에서 일하는 호스팅 팀원을 원할 때.",
        "직접 아무것도 운영하고 싶지 않을 때.",
      ],
      pickB: [
        "직접 실행하는 오픈 소스 에이전트를 원하는 모델 제공자로 쓰고 싶을 때.",
        "시간이 지날수록 자기 스킬을 직접 쓰고 다듬는 에이전트를 원할 때.",
      ],
      faq: [
        {
          q: "Hermes Agent는 무료인가요?",
          a: "네. MIT 라이선스로 무료이고, 모델 제공자 비용은 따로 내요. 선택 사항인 Nous Portal 구독에는 Free, Plus(월 $20), Super($100), Ultra($200) 등급이 있어요.",
        },
        {
          q: "Grok Bot과 Hermes Agent 둘 다 서로 대화하는 Bot이 있나요?",
          a: "네. Grok Bot은 Bot끼리 메시지를 주고받고 그룹 채팅에서 조율해요. Hermes Agent의 Bot Mode에서는 이름 붙은 Bot끼리 직접 메시지를 주고받아요.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "오픈 소스이자 셀프 호스팅 가능한 AI 동료 워크스페이스 vs xAI의 호스팅 Bot",
      title: "OpenBot vs Grok Bot: 오픈 소스 AI 동료인가, 호스팅 AI 동료인가",
      description:
        "OpenBot vs Grok Bot: MIT 라이선스로 셀프 호스팅할 수 있는 CopilotKit의 AI 동료 워크스페이스일까, xAI의 호스팅 Bot일까. 모델과 가격을 비교해요.",
      h1: "OpenBot vs Grok Bot: 직접 호스팅하는 AI 동료 또는 빌려 쓰는 AI 동료",
      lead: "OpenBot과 Grok Bot은 둘 다 각 AI 동료에게 브라우저와 도구가 있는 자기 컴퓨터를 주고, 둘 다 루틴과 승인 기능을 갖췄어요. CopilotKit의 OpenBot은 오픈 소스이고 셀프 호스팅할 수 있어요. 내 노트북이나 내 Kubernetes 클러스터에서, 내가 고른 모델과 에이전트로 실행돼요. Grok Bot은 Grok으로 만든 xAI의 호스팅 제품으로, Slack, Teams, 내 앱에서 일해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "호스팅: OpenBot은 내 노트북이나 Kubernetes 클러스터에서 실행되고, 얼리 액세스에서는 CopilotKit이 호스팅하기도 해요. Grok Bot은 xAI 클라우드에서 실행돼요.",
        "라이선스: OpenBot의 애플리케이션 템플릿은 MIT이고, CopilotKit Intelligence는 별도 라이선스예요. Grok Bot은 비공개 소스예요.",
        "모델: OpenBot은 OpenAI, Claude, Gemini, 오픈 모델과 작동하고, AG-UI로 내 에이전트를 연결해요. Grok Bot은 Grok으로 만들어졌어요.",
        "가격: OpenBot은 개인 프로젝트에 무료이고, Business는 활성 사용자당 월 최대 $29까지예요. Grok Bot 요금제는 월 $30, $100, $200 세 가지예요.",
      ],
      pickA: [
        "AI 동료를 셀프 호스팅하고 데이터와 모델을 직접 관리하고 싶을 때.",
        "워크스페이스를 맞춤 설정하거나 화이트 라벨로 제공하고 싶을 때.",
      ],
      pickB: [
        "Slack, Teams, 회의에서 바로 쓸 수 있는 호스팅 Bot을 원할 때.",
        "인프라를 직접 운영하고 싶지 않을 때.",
      ],
      faq: [
        {
          q: "OpenBot은 무료인가요?",
          a: "내 노트북에서 개인 프로젝트로 쓰면 무료예요. OpenBot for Business는 활성 사용자당 월 최대 $29까지이고, 월 모델 지출 중 $5,000 초과분의 5%가 추가돼요. 모델 제공자 비용은 직접 내요.",
        },
        {
          q: "OpenBot은 오픈 소스인가요?",
          a: "OpenBot 애플리케이션 템플릿은 MIT 라이선스예요. 별도 라이선스인 CopilotKit Intelligence를 쓰는데, 노트북에서는 무료이고 Kubernetes용으로는 체험판과 프로덕션 라이선스가 있어요.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "Anthropic의 지식 업무용 에이전트 vs 코드용 에이전트",
      title: "Claude Cowork vs Claude Code: 어떤 걸 쓸까",
      description:
        "Claude Cowork vs Claude Code: Claude 앱에서 문서, 리서치, 스프레드시트를 맡는 Anthropic의 에이전트일까, 내 저장소에서 일하는 코딩 에이전트일까.",
      h1: "Claude Cowork vs Claude Code: 서로 다른 일을 맡는 Anthropic의 두 에이전트",
      lead: "Claude Cowork와 Claude Code는 같은 회사에서 나왔고 Claude 모델로 돌아가며, Anthropic은 Cowork가 Claude Code와 같은 아키텍처를 쓴다고 밝혔어요. 하지만 맡는 일이 달라요. Cowork는 Claude 앱에서 리서치, 문서, 스프레드시트, 슬라이드 같은 지식 업무를 주로 Anthropic의 클라우드에서 처리해요. Claude Code는 터미널, IDE, 데스크톱 앱, 웹에서 내 코드 저장소를 대상으로 일해요. 둘 다 Claude 유료 요금제에 포함돼요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: Cowork는 원하는 결과를 문서, 수식이 들어간 스프레드시트, 발표 자료, 정리된 폴더로 만들어요. Claude Code는 코드베이스를 읽고, 파일을 편집하고, 명령을 실행해요.",
        "실행 위치: Cowork 작업은 Anthropic 클라우드에서 실행되고 Claude Desktop으로 로컬 파일에 접근해요. Claude Code는 기본적으로 내 컴퓨터에서 실행되고, 웹에서는 클라우드 세션도 쓸 수 있어요.",
        "쓰는 곳: Cowork는 데스크톱, 웹, 모바일의 Claude 앱에 있어요. Claude Code는 터미널, IDE 확장, 데스크톱 앱, 웹에 있어요.",
        "예약: Cowork는 클라우드에서 매시간부터 매주까지 작업을 예약해요. Claude Code에는 클라우드와 데스크톱 예약 작업, `/loop`가 있어요.",
      ],
      pickA: [
        "주로 리서치, 문서, 스프레드시트, 슬라이드 작업을 할 때.",
        "휴대폰이나 브라우저에서 작업을 맡기고 파일로 돌려받고 싶을 때.",
      ],
      pickB: ["주로 코드 저장소에서 일할 때.", "내 터미널, 테스트, git을 쓰는 에이전트를 원할 때."],
      faq: [
        {
          q: "Claude Cowork와 Claude Code는 같은 요금제에 포함되나요?",
          a: "네. 둘 다 Claude 유료 요금제인 Pro, Max, Ultra, Team, Enterprise에 포함돼요. Claude Free에는 둘 다 없어요.",
        },
        {
          q: "Claude Cowork로 코드를 쓸 수 있나요?",
          a: "Anthropic은 Cowork를 코딩 외 지식 업무용으로, Claude Code를 소프트웨어 엔지니어링용으로 안내해요. 내 컴퓨터에서만 실행되는 작업이라면 Anthropic은 데스크톱 앱의 Claude Code를 권해요.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "채팅 앱 안에 있는 Anthropic과 OpenAI의 AI 동료",
      title: "Claude Cowork vs ChatGPT Work: AI 동료 비교",
      description:
        "Claude Cowork vs ChatGPT Work: 문서, 리서치, 반복 작업을 맡는 Anthropic과 OpenAI의 에이전트. 요금제, 실행 위치, 예약, 승인을 비교해요.",
      h1: "Claude Cowork vs ChatGPT Work: 채팅 앱 안의 두 AI 동료",
      lead: "Claude Cowork와 ChatGPT Work는 같은 종류의 일을 해요. 채팅 앱에서 원하는 결과를 설명하면, 에이전트가 단계를 계획하고 파일, 연결된 앱, 브라우저를 오가며 일한 뒤 검토할 결과물을 돌려줘요. Cowork는 Anthropic의 에이전트로 Claude 유료 요금제에 포함돼요. ChatGPT Work는 OpenAI의 것으로 ChatGPT 요금제에 들어 있고, 기능과 사용량을 Codex와 함께 써요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "요금제: Cowork는 Pro 월 $20부터 Claude 유료 요금제에 포함되고 Free에는 없어요. ChatGPT Work는 Free와 Go에서 데스크톱 앱으로 제한적으로 쓸 수 있고, Plus 월 $20부터 전체 이용이 가능해요.",
        "실행 위치: Cowork는 Anthropic 클라우드에서 실행되고 Claude Desktop으로 로컬 파일에 접근해요. ChatGPT Work는 OpenAI 클라우드에서, 또는 ChatGPT 데스크톱 앱으로 로컬에서 실행돼요.",
        "예약: Cowork는 매시간부터 매주까지 예약 작업을 실행해요. ChatGPT Work에는 예약 작업이 있고, 대상 요금제에서는 Gmail, Slack, GitHub 이벤트 트리거도 있어요.",
        "승인: Cowork에는 Manual, Auto(안전 검토 포함), Skip 모드가 있어요. ChatGPT Work는 중요한 작업 앞에서 승인을 기다리고, 데스크톱 앱에는 권한 모드가 있어요.",
      ],
      pickA: [
        "이미 Claude에 돈을 내고 있거나, 문서와 리서치에 Anthropic 모델을 쓰고 싶을 때.",
        "컴퓨터가 꺼져 있어도 클라우드에서 돌아가는 예약 작업을 원할 때.",
      ],
      pickB: [
        "이미 ChatGPT에 돈을 내고 있거나, 데스크톱 앱에서 Free 요금제로 써 보고 싶을 때.",
        "Gmail, Slack, GitHub 이벤트로 시작되는 작업을 원할 때.",
      ],
      faq: [
        {
          q: "ChatGPT Work는 무료인가요?",
          a: "ChatGPT Free와 Go는 데스크톱 앱에서 ChatGPT Work를 제한적으로 쓸 수 있어요. Plus(월 $20)와 Pro는 데스크톱, 웹, 모바일에서 쓸 수 있어요.",
        },
        { q: "Claude Cowork는 무료인가요?", a: "아니요. Pro 월 $20부터 Claude 유료 요금제에서만 쓸 수 있어요." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Microsoft 365의 AI 동료 vs Anthropic의 AI 동료",
      title: "Copilot Cowork vs Claude Cowork 차이점",
      description:
        "Copilot Cowork vs Claude Cowork: Microsoft 365에서 일하는 에이전트와 Claude 앱의 에이전트를 라이선스, 비용, 기능으로 비교해요.",
      h1: "Copilot Cowork vs Claude Cowork: Microsoft 365 에이전트 또는 Claude 에이전트",
      lead: "Copilot Cowork와 Claude Cowork는 이름과 아이디어가 같아요. 여러 단계의 작업을 에이전트에게 맡기고 그 행동을 승인하는 거예요. Copilot Cowork는 Microsoft 365 전반에서 일하며, 이메일을 보내고, 회의 일정을 잡고, OneDrive와 SharePoint의 Office 파일을 편집하고, GPT, Claude, Grok 모델을 쓸 수 있어요. Claude Cowork는 Claude 앱 안의 Anthropic 에이전트로, Claude 모델로 돌아가요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "일하는 곳: Copilot Cowork는 Outlook, Teams, OneDrive, SharePoint에서 일하고 로컬 기기의 파일에는 접근할 수 없어요. Claude Cowork는 Google Drive, Gmail, Microsoft 365, Slack 같은 커넥터와, Claude Desktop을 통한 로컬 파일로 일해요.",
        "비용: Copilot Cowork에는 Microsoft 365 Copilot 라이선스와 크레딧당 $0.01인 Copilot Credits가 필요해요. Claude Cowork는 Pro 월 $20부터 Claude 유료 요금제에 포함돼요.",
        "모델: Copilot Cowork에는 테넌트 설정에 따라 GPT, Claude, Grok 모델을 고르는 모델 선택기가 있어요. Claude Cowork는 Claude 모델로 돌아가요.",
        "계정: Copilot Cowork는 회사 또는 학교 계정용이고 개인 계정은 프리뷰예요. Claude Cowork는 개인용과 팀용 Claude 요금제에 포함돼요.",
      ],
      pickA: [
        "조직이 Microsoft 365를 쓰고 이미 Microsoft 365 Copilot 라이선스가 있을 때.",
        "에이전트가 승인을 받아 이메일을 보내고, 회의를 잡고, Teams에 게시해 주길 원할 때.",
      ],
      pickB: [
        "Microsoft 365 밖에서 일하거나, 내 컴퓨터의 로컬 파일과 브라우저를 쓰고 싶을 때.",
        "크레딧 단위 청구보다 고정된 월 요금제를 원할 때.",
      ],
      faq: [
        {
          q: "Copilot Cowork는 얼마인가요?",
          a: "Microsoft 365 Copilot 라이선스가 필요하고, 사용량은 Copilot Credits로 청구돼요. 종량제는 크레딧당 $0.01이고, 5%에서 20%까지 할인되는 1년 선불 플랜도 있어요.",
        },
        {
          q: "Copilot Cowork는 Claude를 쓰나요?",
          a: "테넌트 설정에 따라 모델 선택기에 GPT, Grok 모델과 함께 Claude Opus, Sonnet, Fable이 들어 있어요. EU Data Boundary 테넌트는 GPT 모델만 쓸 수 있어요.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "ChatGPT의 Work 모드 vs OpenAI의 코딩 에이전트",
      title: "ChatGPT Work vs Codex: 어떤 걸 써야 할까",
      description:
        "ChatGPT Work vs Codex: 문서와 분석을 위한 OpenAI의 Work 모드일까, 저장소를 위한 코딩 에이전트일까. 기능과 사용량을 공유하는 두 제품의 차이를 정리했어요.",
      h1: "ChatGPT Work vs Codex: 같은 엔진, 다른 일",
      lead: "ChatGPT Work와 Codex는 둘 다 OpenAI의 에이전트이고, OpenAI는 Work가 핵심 기능, 실행, 사용 한도를 Codex와 공유한다고 밝혀요. 차이는 용도예요. ChatGPT Work는 발표 자료, 스프레드시트, 분석처럼 검토할 결과물이 나오는 작업을 위한 ChatGPT의 모드예요. Codex는 터미널 CLI, IDE 확장, ChatGPT 데스크톱 앱, 클라우드에서 쓰는 코딩 에이전트예요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: ChatGPT Work는 문서, 발표 자료, 스프레드시트, 분석을 돌려줘요. Codex는 저장소의 코드를 읽고, 편집하고, 실행해요.",
        "쓰는 곳: ChatGPT Work는 웹, 데스크톱, 모바일의 ChatGPT에 있어요. Codex는 터미널 CLI, IDE 확장, ChatGPT 데스크톱 앱, Codex Cloud에 있어요.",
        "사용량: 둘은 Codex의 사용 한도와 크레딧을 함께 써요.",
        "오픈 소스: Codex의 CLI, SDK, App Server는 Apache-2.0이에요. ChatGPT Work는 오픈 소스가 아니에요.",
      ],
      pickA: ["작업의 결과물이 문서, 발표 자료, 분석일 때.", "휴대폰이나 웹의 ChatGPT에서 작업을 시작하고 싶을 때."],
      pickB: [
        "작업이 코드일 때: 기능 개발, 수정, 리뷰.",
        "터미널이나 IDE, 또는 `codex exec`로 CI에서 쓰는 에이전트를 원할 때.",
      ],
      faq: [
        {
          q: "ChatGPT Work와 Codex는 사용량을 공유하나요?",
          a: "네. OpenAI는 ChatGPT Work가 크레딧을 포함해 핵심 기능, 실행, 사용 한도를 Codex와 공유한다고 밝혀요.",
        },
        {
          q: "어떤 ChatGPT 요금제에 Work가 포함되나요?",
          a: "Free와 Go는 데스크톱 앱에서 제한적으로 쓸 수 있고, Plus(월 $20), Pro, Business는 데스크톱, 웹, 모바일에서 쓸 수 있어요.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Claude 앱 안의 Anthropic AI 동료 vs 자기 컴퓨터를 가진 xAI의 Bot",
      title: "Claude Cowork vs Grok Bot: AI 동료 비교",
      description:
        "Claude Cowork vs Grok Bot: 문서와 리서치를 맡는 Anthropic의 에이전트일까, 자기 컴퓨터로 Slack과 내 앱에서 일하는 xAI의 Bot일까.",
      h1: "Claude Cowork vs Grok Bot: Claude 안의 작업 에이전트 또는 Bot 팀",
      lead: "Claude Cowork와 Grok Bot은 둘 다 내가 자리를 비운 동안 클라우드에서 계속 일하는 AI 동료예요. Claude Cowork는 Claude 앱 안의 Anthropic 에이전트로, 작업을 맡기면 파일로 돌려받아요. Grok Bot은 xAI의 것으로, 자기 클라우드 컴퓨터를 가진 Bot이 내 도구에 로그인하고, Slack, Microsoft Teams, 화상 통화에서 일하며, 서로 일을 넘겨요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "형태: Claude Cowork는 나에게서 작업을 받고, 작업 안에서 서브에이전트를 써요. Grok Bot은 Bot마다 자기 일을 맡고, Bot끼리 메시지를 주고받으며 그룹 채팅에서 조율해요.",
        "함께 일하는 곳: Claude Cowork는 데스크톱, 웹, 모바일의 Claude 앱에 있어요. Grok Bot은 전용 앱, Slack, Teams, 화상 통화에 있어요.",
        "요금제: Claude Cowork는 Pro 월 $20부터 Claude 유료 요금제에 포함돼요. Grok Bot은 Premium(월 $30), Super, Ultra 요금제에 포함돼요.",
        "모델: Claude Cowork는 Claude 모델로 돌아가요. Grok Bot은 Grok으로 만들어졌어요.",
      ],
      pickA: ["문서, 리서치, 스프레드시트를 맡기고 파일로 돌려받고 싶을 때.", "이미 Claude를 쓰고 있을 때."],
      pickB: [
        "각자 일을 맡은 여러 Bot이 Slack과 팀의 앱에서 일하길 원할 때.",
        "Bot을 회의에 참여시키고 싶을 때.",
      ],
      faq: [
        {
          q: "Grok Bot이 회의에 참여할 수 있나요?",
          a: "네. xAI에 따르면 Bot을 Google Meet, Zoom, Teams 통화에 추가할 수 있고, Bot은 대화를 듣다가 도움이 될 때 채팅에 참여하고 회의가 끝난 뒤 후속 작업까지 처리해요.",
        },
        {
          q: "컴퓨터가 꺼져 있어도 Claude Cowork가 실행되나요?",
          a: "클라우드 작업은 Anthropic 서버에서 계속 실행돼요. 로컬 파일이나 내 브라우저가 필요한 작업만 Claude Desktop을 기다려요.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "코드를 위한 Cursor의 코디네이터 에이전트 vs 여러 앱에서 일하는 xAI의 Bot",
      title: "Cursor Projects vs Grok Bot: 무엇이 다를까",
      description:
        "Cursor Projects vs Grok Bot: 여러 클라우드 에이전트로 코드를 다루는 코디네이터일까, Slack과 내 앱에서 일하는 xAI의 Bot일까.",
      h1: "Cursor Projects vs Grok Bot: 코드를 위한 에이전트 팀 또는 그 밖의 모든 일을 위한 팀",
      lead: "Cursor Projects와 Grok Bot은 둘 다 에이전트 하나가 다른 에이전트들을 이끌어요. Cursor Project에서는 코디네이터 에이전트가 기능, 마이그레이션, 앱을 계획하고 코딩을 여러 클라우드 에이전트에게 병렬로 맡겨요. Grok Bot은 xAI의 AI 팀원들로, 각자 자기 클라우드 컴퓨터를 갖고 Slack, Teams, 내 앱에서 일하며, Bot 하나가 다른 Bot들을 관리할 수 있어요. 둘 다 월 $30 요금제부터 시작해요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: Cursor Projects는 GitHub 저장소에서 하는 소프트웨어 작업용이에요. Grok Bot은 CRM, 고객 지원, 경비, 채용 같은 업무용 앱에서 일을 처리해요.",
        "조율: Cursor Project의 코디네이터는 워커 에이전트를 만들고 관리하며, Multiplayer Projects에서는 코디네이터끼리 메시지를 주고받아요. Grok Bot은 Bot끼리 메시지를 주고받고 그룹 채팅에서 조율해요.",
        "공유 상태: Cursor Project에는 공유 파일(선호 사항, 메모, 워크플로)과 작업 보드가 있어요. Grok Bot은 팀이 일하는 방식을 기억해요.",
        "트리거: Cursor Projects는 일정, Slack 채널, 풀 리퀘스트에 따라 움직여요. Grok Bot은 일정에 따라 루틴을 실행하고 Slack과 Teams에서 일해요.",
      ],
      pickA: ["긴 코딩 작업을 계획해 여러 에이전트에게 나눠 맡기고 싶을 때.", "팀이 이미 Cursor와 GitHub를 쓰고 있을 때."],
      pickB: [
        "기존 앱에서 운영, 영업, 고객 지원을 맡을 AI 팀원이 필요할 때.",
        "Slack, Teams, 회의에서 함께 일하길 원할 때.",
      ],
      faq: [
        {
          q: "어떤 Cursor 요금제에 Projects가 포함되나요?",
          a: "Cloud Agents가 있는 모든 요금제예요. Premium(월 $30) 이상, Teams, Enterprise, 레거시 유료 요금제요. Free, Plus, 레거시 Hobby에는 없어요.",
        },
        {
          q: "노트북을 닫아도 Cursor Project가 계속 일하나요?",
          a: "네. Project는 클라우드에 있는 자기 컴퓨터에서 실행돼요. 코디네이터는 내 컴퓨터에서 테스트해야 할 게 있을 때만 로컬 에이전트를 시작해요.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Microsoft의 AI 동료 vs Microsoft의 에이전트 빌더",
      title: "Copilot Cowork vs Copilot Studio 차이",
      description:
        "Copilot Cowork vs Copilot Studio: 나 대신 일하는 Microsoft 365 에이전트일까, 에이전트와 워크플로를 만드는 로우코드 스튜디오일까. 비용과 기능.",
      h1: "Copilot Cowork vs Copilot Studio: 에이전트를 쓸까, 만들까",
      lead: "Copilot Cowork와 Copilot Studio는 둘 다 Microsoft 제품이고, 둘 다 Copilot Credits로 청구되며, 테넌트의 선불 크레딧 풀을 함께 써요. 차이는 누가 일을 하느냐예요. Copilot Cowork는 Microsoft 365 Copilot 안의 에이전트로, 작업을 맡기면 내 승인을 받아 이메일을 보내고, 회의를 잡고, Office 파일을 편집해요. Copilot Studio는 메이커가 자기 에이전트, 워크플로, 앱을 만들어 Teams, Microsoft Copilot, 웹사이트, 전화 회선에 게시하는 곳이에요. Copilot Studio 워크플로는 한 단계로 Cowork 작업을 시작할 수도 있어요. 비교와 함께 Crewmark의 위치도 알려 드릴게요.",
      differences: [
        "하는 일: Copilot Cowork는 Outlook, Teams, Word, Excel, PowerPoint, OneDrive, SharePoint를 오가며 나 대신 작업을 처리해요. Copilot Studio는 다른 사람들이 쓰는 에이전트, 워크플로, 앱을 만드는 로우코드 스튜디오예요.",
        "쓰는 사람: Copilot Cowork는 Microsoft 365 Copilot 라이선스가 있고 Cowork가 켜져 있는 사람이면 누구나 써요. Copilot Studio는 메이커용이고, 게시된 에이전트는 웹사이트나 전화 회선에서 직원이나 고객을 응대할 수 있어요.",
        "비용: Copilot Cowork에는 Microsoft 365 Copilot 라이선스와 크레딧당 $0.01인 Copilot Credits가 필요해요. Copilot Studio는 25,000 크레딧 팩을 월 $200(연간 결제)에, 또는 종량제로 크레딧당 $0.01에 팔고, 메이커 라이선스는 $0이에요.",
        "자동화: Copilot Cowork는 예약 프롬프트와 이메일·Teams 트리거를 실행해요. Copilot Studio에는 에이전트 트리거, Human review 커넥터를 쓰는 다단계 승인, 그리고 Cowork를 한 단계로 호출할 수 있는 워크플로가 더 있어요.",
      ],
      pickA: [
        "아무것도 만들지 않고 오늘부터 에이전트에게 Microsoft 365 업무를 맡기고 싶을 때.",
        "이메일, 회의, Teams 게시물이 나가기 전에 하나하나 승인하고 싶을 때.",
      ],
      pickB: [
        "다른 사람이나 고객이 쓰는 에이전트나 워크플로를 만들고 싶을 때.",
        "커넥터, 다단계 승인, 게시 채널, 또는 개발·테스트·프로덕션 환경 분리가 필요할 때.",
      ],
      faq: [
        {
          q: "Copilot Cowork는 Copilot Studio의 일부인가요?",
          a: "아니요, 별개 제품이에요. 테넌트의 선불 Copilot Credit 풀을 함께 쓰고, Copilot Studio 워크플로는 Copilot 노드로 Copilot Cowork 작업을 시작하거나 재개할 수 있어요.",
        },
        {
          q: "Copilot Studio는 얼마인가요?",
          a: "Microsoft의 Licensing Guide에는 테넌트당 25,000 Copilot Credits 팩이 월 $200(연간 결제), 또는 종량제로 크레딧당 $0.01이라고 나와 있어요. 쓰지 않은 팩 크레딧은 이월되지 않아요. 메이커 라이선스는 $0이고, 무료 체험판으로는 에이전트를 게시할 수 없어요.",
        },
      ],
    },
  },
};
