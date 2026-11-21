import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI 대안 2026: 코딩 에이전트 비교",
    description:
      "Factory AI 대안 비교: Devin, Claude Code, Codex, 오픈 소스 OpenCode, Cursor Projects, Conductor의 가격, 제한, 어떤 사람에게 맞는지 정리했어요.",
  },
  breadcrumb: "Factory 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Factory",
    title: "Factory AI 대안: Devin, Claude Code, Codex, OpenCode 등 비교",
    lead: "Factory는 Droids라는 코딩 에이전트를 만들어요. Droids는 데스크톱의 Factory App, Droid CLI, CI의 헤드리스 모드, Factory가 호스팅하는 클라우드 컴퓨터에서 실행돼요. 개인 요금제는 Free(추론을 직접 준비)부터 월 $200까지 있어요. Pro, Plus, Max에는 5시간, 7일, 30일 단위의 롤링 사용 한도가 있고, Teams는 최대 10석이며, Droid CLI와 Factory App에는 오픈 소스 라이선스가 없어요. Devin과 Claude Code부터 오픈 소스 OpenCode까지, 대안 7가지를 각각의 비용과 함께 정리했어요.",
    cta: "시작하기",
    secondary: "비교해 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Factory 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 업체의 공식 페이지, 문서, GitHub에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. 순위가 아니에요. Factory 자체 요금제는 [Factory 가격](/pricing/factory)에 있어요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[Factory](/pricing/factory) (참고용)",
          "Droids: 데스크톱 앱, CLI, CI, Factory가 호스팅하는 클라우드 컴퓨터에서 실행되는 코딩 에이전트",
          "아니요",
          "추론을 직접 준비하면 Free 월 $0, Pro 월 $20",
        ],
        [
          "[Devin](/pricing/devin)",
          "Cognition의 AI 소프트웨어 엔지니어. 세션마다 클라우드 VM, 그리고 Devin Desktop과 Devin CLI",
          "아니요",
          "Free $0(가벼운 할당량), Pro 월 $20",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "터미널, IDE, 데스크톱 앱, 웹, 모바일에서 쓰는 Anthropic의 코딩 에이전트",
          "아니요(공개 저장소, 모든 권리 보유)",
          "Claude 유료 요금제에 포함: Pro 월 $20, 연간 결제 시 월 $17",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "OpenAI의 코딩 에이전트: CLI, IDE 확장, ChatGPT 데스크톱 앱, Codex Cloud",
          "일부: CLI, SDK, App Server는 Apache-2.0",
          "Plus 월 $20부터 ChatGPT 요금제에 포함, 또는 OpenAI API 키",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "로컬 모델을 포함해 200개 이상 모델 제공자를 지원하는 코딩 에이전트",
          "예, MIT",
          "무료 모델로 무료, OpenCode Go 월 $10",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "코딩 작업을 계획하고 Cursor 클라우드 에이전트를 병렬로 실행하는 코디네이터 에이전트",
          "아니요",
          "Cursor Premium 월 $30 또는 연 $300",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Claude Code, Codex, Cursor, OpenCode를 git worktree에서 나란히 실행하는 Mac 앱",
          "아니요",
          "무료로 사용. 2026년 11월 4일부터 신규 가입과 다운로드 중단",
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
      id: "cloud",
      title: "Droids 같은 클라우드 코딩 에이전트",
      text: [
        "Factory의 Droid Computers처럼 업체의 클라우드에서 에이전트를 실행하므로, 노트북을 닫아도 작업이 계속돼요.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition): 코드를 쓰고 실행하고 테스트하며 풀 리퀘스트를 여는 AI 소프트웨어 엔지니어로, 클라우드 세션마다 자체 가상 머신에서 돌고, 로컬에서는 Devin Desktop과 Devin CLI로 일해요. Linear와 Jira 티켓을 받고, 일정이나 이벤트로 Automations를 실행하며, 코디네이터 세션이 하위 Devin을 실행하고 메시지를 보낼 수 있어요. Free $0(가벼운 할당량), Pro 월 $20, Max 월 $200이고, Teams는 “팀 요금제 월 $80 + 풀 개발자 시트당 월 $40”이며 최대 100명까지예요. 에이전트에게 티켓을 넘기고 풀 리퀘스트를 돌려받고 싶고, 10석을 넘는 팀 요금제가 필요하다면 고르세요. 더 보기: [Devin 대안](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects): 코디네이터 에이전트가 기능, 마이그레이션, 앱 전체를 계획하고, Cursor의 Cloud Agents에서 병렬로 돌아가는 에이전트들에게 맡긴 뒤, 끝난 작업을 내가 확인하도록 가져오는 Cursor의 기능이에요. Project에는 작업 보드와 공유 메모가 있고, 일정, Slack 채널, 내 풀 리퀘스트에 따라 움직일 수 있어요. Cursor Premium(월 $30 또는 연 $300) 이상, Teams, Enterprise에서 쓸 수 있고, Free나 Plus에는 없어요. 이미 Cursor에서 일하고 있고, 코디네이터 하나가 여러 클라우드 에이전트를 돌리길 원한다면 고르세요.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Anthropic과 OpenAI의 코딩 에이전트",
      text: [
        "Factory의 Free 요금제는 ChatGPT 로그인이나 내 API 키로 돌릴 수 있어요. 이미 Anthropic이나 OpenAI에 돈을 내고 있다면, 그 요금제에 각 회사의 코딩 에이전트가 포함돼 있어요. 나란히 비교: [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic): 터미널, IDE 확장, 데스크톱 앱, 웹, Claude 모바일 앱에서 Claude 모델로 코드베이스를 읽고 파일을 편집하고 명령을 실행해요. 클라우드 예약 작업, 데스크톱 예약 작업, `/loop`를 실행하고, 서브에이전트와 실험적 기능인 agent teams가 있어요. Free가 아닌 Claude 유료 요금제에 포함돼요. Pro 월 $20(연간 결제 시 월 $17), Max $100, Ultra $200, 그리고 2명에서 150명까지 쓰는 Team 시트가 있어요. 이미 Claude에 돈을 내고 있다면 고르세요.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI): 터미널 CLI, IDE 확장, ChatGPT 데스크톱 앱, Codex Cloud에서 쓰는 코딩 에이전트로, 스크립트와 CI용 `codex exec`가 있어요. CLI, SDK, App Server는 Apache-2.0 오픈 소스예요. ChatGPT 요금제에 포함되며 Plus 월 $20부터, Pro 월 $100부터, Business 사용자당 월 $20(연간 결제)부터이고, OpenAI API 키로도 쓸 수 있어요(CLI, SDK, IDE 확장만). 이미 ChatGPT에 돈을 내고 있거나 오픈 소스 CLI를 원한다면 고르세요. [Devin vs Codex](/compare/devin-vs-codex)를 참고하세요.",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "오픈 소스 Factory 대안: OpenCode",
      points: [
        "[OpenCode](/pricing/opencode): 로컬 모델을 포함해 200개 이상 모델 제공자를 지원하는 MIT 라이선스 코딩 에이전트로, 터미널 UI, 데스크톱 앱, 웹 앱, SDK로 쓸 수 있어요. 계정 없이 쓰는 무료 모델(일일 요청 한도 있음)로 시작하거나, ChatGPT Plus나 Pro, GitHub Copilot으로 로그인하거나, 내 API 키를 쓰거나, OpenCode Go(월 $10)나 Go Plus(월 $40)를 결제할 수 있어요. 커스텀 에이전트와 서브에이전트는 저장소 안의 파일이고, 동작마다 허용, 확인, 거부 규칙을 둘 수 있어요. 예약 실행은 실험적이며 직접 켜야 해요. 거의 모든 모델에 연결할 수 있는 오픈 소스 에이전트를 원한다면 고르세요. 더 보기: [OpenCode 대안](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "여러 에이전트를 나란히 실행하기: Conductor",
      points: [
        "[Conductor](/pricing/conductor): Claude Code, Codex, Cursor, OpenCode 에이전트를 작업마다 각자의 git worktree에서 나란히 실행하고, diff 검토, 풀 리퀘스트 열기, 머지를 도와주는 Mac 앱이에요. 2026년 11월 4일 Meta 합류를 발표했어요. 신규 가입과 다운로드는 닫혔고, Conductor Cloud는 2026년 11월 13일부터 읽기 전용이 되고 2026년 11월 20일에 종료되며, 로컬 앱은 2027년 초까지 새 모델과 중요한 버그 수정을 받아요. 이미 Mac에 설치돼 있을 때만 고르세요. 더 보기: [Conductor 대안](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Factory 대안 고르는 법",
      steps: [
        {
          title: "에이전트를 어디서 실행할지 정하세요",
          text: "Devin과 Cursor Projects는 Droid Computers처럼 업체의 클라우드에서 실행돼요. Claude Code와 Codex는 내 컴퓨터와 각자의 클라우드에서 실행돼요. OpenCode는 내 컴퓨터에서 실행돼요. Conductor는 Mac에서 로컬로 실행돼요.",
        },
        {
          title: "시트 수를 세어 보세요",
          text: "Factory Teams는 최대 10석이에요. Devin Teams는 최대 100명, Claude Code의 Team 요금제는 2명에서 150명까지이고, Codex Business는 2명부터 시작하며, Cursor Teams는 시트당 가격이에요.",
        },
        {
          title: "사용량이 어떻게 제한되는지 확인하세요",
          text: "Factory의 Pro, Plus, Max에는 5시간, 7일, 30일 단위의 롤링 한도와 선불 Extra Usage가 있어요. Devin은 일간 및/또는 주간 할당량과 선불 크레딧을 써요. Claude Code는 5시간 한도와 주간 한도를 Claude 채팅과 함께 써요. OpenCode의 무료 모델에는 일일 요청 한도가 있어요.",
        },
        {
          title: "오픈 소스가 필요한지 정하세요",
          text: "OpenCode는 MIT이고 Codex의 CLI는 Apache-2.0이에요. Factory, Devin, Claude Code, Cursor Projects, Conductor는 제품 자체에 대한 오픈 소스 라이선스를 공개하지 않아요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Crewmark: Claude Code나 Codex에게 직무와 일정을 주세요",
      text: [
        "Crewmark는 코딩 에이전트가 아니에요. AI 직원 팀을 위한 이슈 트래커로, 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화이고 직무, 목표, 근무 시간을 가져요. 이미 결제 중인 에이전트 구독으로, 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고 이슈 상태를 최신으로 유지해요. 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요.",
        "오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요. Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함되고, Pro(월 $5)와 Team(월 $10)은 출시 예정이며, 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 에이전트 사용료는 에이전트 제공자에게 내요. 자세한 내용은 [Crewmark 요금](/pricing)에 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "각 직원에게 직무, 목표, 프로젝트를 주세요. 예를 들어 소프트웨어 엔지니어예요. [AI 직원 직무](/ai-employees)를 참고하세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "상태와 우선순위를 붙여 이슈를 배정하고, 정기적인 이슈는 반복되게 하세요. 에이전트끼리 이슈를 배정하고 서로 @멘션하며, 리뷰나 권한이 필요하면 이슈를 '조치 필요'로 바꾸고 기다려요.",
        },
        {
          title: "근무 시간 정하기",
          text: "하트비트는 근무 시간 동안 15분에서 24시간마다 각 직원을 깨워요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "이미 Claude Code나 Codex에 돈을 내고 있나요?",
    text: "Crewmark는 여기에 직무, 하트비트, 공유 보드를 줘서, 프롬프트 없이도 계속 일하게 해요. 직원 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "Factory 대안 FAQ",
    items: [
      {
        q: "무료 Factory AI 대안이 있나요?",
        a: "OpenCode는 계정 없이 쓰는 무료 모델(일일 요청 한도)로 무료예요. Devin에는 가벼운 할당량의 Free 요금제가 있어요. Crewmark의 Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함돼요. Factory 자체에도 추론을 직접 준비하면 월 $0인 Free 요금제가 있어요. ChatGPT, GitHub Copilot, OpenRouter로 로그인하거나 내 API 키를 연결하면 돼요.",
      },
      {
        q: "Factory Droids의 오픈 소스 대안이 있나요?",
        a: "OpenCode(MIT)는 완전한 오픈 소스 코딩 에이전트이고, Codex의 CLI, SDK, App Server는 Apache-2.0이에요. Crewmark(GPL-3.0)도 오픈 소스이지만, 자체 에이전트가 아니라 Claude Code나 Codex를 실행해요. Factory는 Droid CLI나 Factory App에 대한 오픈 소스 라이선스를 공개하지 않고, github.com/Factory-AI/factory 저장소에는 README와 문서만 있어요.",
      },
      {
        q: "Factory vs Devin: 무엇이 다른가요?",
        a: "둘 다 클라우드와 로컬에서 실행되고, Linear와 Jira 이슈를 받으며, 자동화를 실행해요. Factory의 Droids는 Factory App, Droid CLI, CI, Droid Computers에서 실행되고, Devin은 클라우드 세션마다 자체 VM에서 돌며 Devin Desktop과 Devin CLI도 있어요. 둘 다 Pro를 월 $20로 안내해요. Factory Teams는 팀당 월 $60에 개인당 월 $40이 더해지며 최대 10석이고, Devin Teams는 “팀 요금제 월 $80 + 풀 개발자 시트당 월 $40”이며 최대 100명이에요.",
      },
      {
        q: "Factory vs Claude Code: 무엇이 다른가요?",
        a: "Claude Code는 Claude 모델로 돌아가는 Anthropic의 자체 에이전트로, Claude 유료 요금제에 포함돼요. Factory의 Droids는 GPT-5, Claude Opus와 Sonnet, Gemini, 오픈 웨이트 모델이나 내 키로 작동하고, 호스팅 Droid Computers, Slack·Linear·Jira에서의 위임, 예약 자동화를 더해요. [Factory vs Claude Code](/compare/factory-vs-claude-code)를 참고하세요.",
      },
      {
        q: "Factory 대신 ChatGPT 구독을 쓸 수 있나요?",
        a: "Codex는 Plus 월 $20부터 ChatGPT 요금제에 포함돼요. OpenCode는 ChatGPT Plus나 Pro로 로그인할 수 있고, Devin의 Pro, Max, Teams 요금제는 연결한 ChatGPT 요금제를 GPT 모델 사용에 쓸 수 있어요. Factory 자체의 Free 요금제도 ChatGPT로 로그인할 수 있어요. Crewmark는 내 ChatGPT 구독으로 Codex를 실행해요.",
      },
      {
        q: "여러 에이전트를 병렬로 실행하는 Factory 대안은 무엇인가요?",
        a: "Devin의 코디네이터 세션은 하위 Devin을 실행하고 메시지를 보내요. Cursor Projects는 Cursor 클라우드에서 코디네이터와 워커 에이전트를 실행해요. Claude Code에는 서브에이전트와 실험적 기능인 agent teams가 있고, Codex는 서브에이전트를 병렬로 생성하며, OpenCode는 같은 프로젝트에서 여러 에이전트를 시작할 수 있어요. Crewmark는 공유 보드 하나에서 AI 직원 팀을 운영해요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 프롬프트만이 아니라 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 공식 페이지, 문서, 가격, GitHub와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor, Conductor, Meta와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
