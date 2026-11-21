import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work: 기능, 비용, 다운로드, Codex 비교",
    description:
      "ChatGPT Work 정리: Work 모드와 Chat의 차이, 포함된 요금제와 가격, 데스크톱 앱, Codex·Claude Cowork와의 비교까지.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · OpenAI",
    title: "ChatGPT Work: OpenAI의 Work 모드가 하는 일과 쓰는 법",
    lead: "ChatGPT Work는 결과가 분명한 작업을 맡기기 위한 ChatGPT의 모드예요. Chat에서 Work로 바꾸고 돌려받고 싶은 것을 설명하면, ChatGPT가 작업을 계획하고 내 파일, 플러그인, 웹, 브라우저, 코드를 써서 발표 자료, 스프레드시트, 문서, 분석처럼 검토할 결과물을 돌려줘요. 핵심 기능과 사용 한도는 OpenAI의 코딩 에이전트인 Codex와 함께 써요. 이 가이드에서는 하는 일, 포함된 요금제, 설정하는 법, 실행 전에 묻는 방식, 그리고 Codex, Claude Cowork, Copilot Cowork와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT Work란",
      points: [
        "별도 앱이 아니라 모드: ChatGPT에서 Chat을 Work로 바꾸면 돼요. OpenAI는 답이 필요하면 Chat을, 완성된 작업이 필요하면 Work를 쓰라고 안내해요.",
        "검토할 결과물을 돌려줘요: 내 파일, 플러그인, 웹, 브라우저, 코드로 만든 발표 자료, 스프레드시트, 문서, 분석, 정기 업데이트.",
        "클라우드에서 실행: 웹에서는 작업이 OpenAI 인프라의 관리형 클라우드 환경에서 실행되고, 앱을 닫아도 계속돼요. 데스크톱 앱에서는 기능이 켜져 있으면 내 파일, 앱, 브라우저로 로컬에서 작업하도록 고를 수도 있어요.",
        "Codex와 핵심을 공유: OpenAI는 Work를 같은 핵심 기능에 일상 업무에 맞춘 경험을 더한 것이라고 설명해요. Git과 셸 출력, 풀 리퀘스트 창 같은 기술적인 세부 사항은 빠져 있어요.",
        "일을 나눠요: ChatGPT는 작업에서 서로 독립된 부분을 서브에이전트에게 넘길 수 있고, 나는 그 진행 상황을 지켜볼 수 있어요.",
        "반복 작업: 예약 작업, 그리고 웹과 모바일에서는 Gmail, Slack, GitHub 이벤트로 시작되는 작업.",
        "OpenAI는 2026년 7월 6~10일 주간의 What's new 소식에서 이 기능을 소개했어요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "ChatGPT Work 비용: 포함된 요금제",
      text: [
        "2026년 11월 13일 OpenAI 가격 문서 기준이고, 미국 달러예요. Work는 Codex와 같은 가격, 크레딧, 사용 한도를 쓰며, 길거나 복잡한 작업일수록 크레딧을 더 쓸 수 있어요.",
      ],
      headers: ["요금제", "가격", "ChatGPT Work"],
      rows: [
        ["Free", "월 $0", "데스크톱 앱에서만 제한적 이용. 예약 작업 없음"],
        ["Go", "월 $8", "데스크톱 앱에서만 제한적 이용. 예약 작업 가능"],
        ["Plus", "월 $20", "데스크톱, 웹, 모바일. 추가 크레딧 구매 가능"],
        ["Pro", "월 $100부터($100, $200, $500 요금제)", "데스크톱, 웹, 모바일. 추가 크레딧 구매 가능"],
        ["Business(2명 이상)", "연간 결제 시 사용자당 월 $20, 월간 결제 시 $25", "크레딧 기반 계약에서는 워크스페이스 공유 크레딧"],
        ["Enterprise와 Edu", "영업팀 문의", "워크스페이스 공유 크레딧. 관리자가 Work, 플러그인, 브라우저 사용 접근을 관리"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "ChatGPT Work 설정하는 법",
      steps: [
        {
          title: "쓸 곳 고르기",
          text: "Work는 웹, macOS·Windows·Linux용 ChatGPT 데스크톱 앱, iOS와 Android용 ChatGPT에서 돌아가요. Free와 Go에서는 Work가 데스크톱 앱에만 있으니 데스크톱 앱을 내려받으세요.",
        },
        {
          title: "Chat에서 Work로 바꾸기",
          text: "Work 모드에서 작업을 시작하고 브리프, 발표 자료, 분석, 스프레드시트처럼 돌려받고 싶은 결과를 설명하세요.",
        },
        {
          title: "자료 주기",
          text: "파일을 올리거나 프로젝트를 쓰고, Slack, Google Drive, SharePoint, 이메일, 캘린더, CRM, 프로젝트 관리 도구 같은 플러그인을 연결하세요. 데스크톱 앱에서는 지원 지역에 한해 macOS와 Windows에서 로컬 파일, 브라우저 확장 프로그램, Computer Use도 쓸 수 있어요.",
        },
        {
          title: "모델과 묻는 방식 고르기",
          text: "가이드는 까다로운 작업에는 GPT-6 Astra, 더 낮은 비용으로 복잡한 작업을 할 때는 GPT-6.1 Sol, 간단한 작업에는 Luna를 권해요. 데스크톱 앱에서는 Ask for approval 권한 모드로 시작하세요.",
        },
        {
          title: "반복되게 하기",
          text: "웹이나 데스크톱 앱에서 Chat 또는 Work로 예약 작업을 만들거나, 웹과 모바일에서 Gmail, Slack, GitHub 이벤트로 작업을 시작하게 하세요. 한 작업에 이벤트 트리거와 시간 일정을 함께 쓸 수는 없어요.",
        },
      ],
      source: { label: "출처: OpenAI 문서, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "ChatGPT Work에서 주도권을 지키는 방법",
      points: [
        "ChatGPT는 진행 상황을 보여 주고, 정보가 필요하거나 중요한 작업에 승인이 필요하면 멈춰요. 작업 중간에 질문에 답하거나 방향을 바꿀 수 있어요.",
        "데스크톱 앱의 권한 모드는 Ask for approval(처음에 권장), Approve for me(해당하는 요청은 자동 검토로 넘어감), 그리고 지원되는 경우 전체 액세스예요. 샌드박스가 파일과 네트워크 범위를 제한해요.",
        "클라우드 브라우저는 기본적으로 새 웹사이트를 방문하기 전에 물어보고(Always ask, Auto approve, Always allow), 중대한 작업 전에 다시 물어볼 수도 있어요.",
        "클라우드 작업은 내 컴퓨터의 파일, 앱, 브라우저 세션, 네트워크 접근을 이어받지 않고, 클라우드 브라우저는 내 로컬 탭, 확장 프로그램, 방문 기록, 저장된 비밀번호를 쓸 수 없어요.",
        "워크스페이스 관리자는 Work, 플러그인, 브라우저 사용, 네트워크 접근을 관리해요. Enterprise와 Edu 워크스페이스에서는 플러그인이 기본으로 꺼져 있고, 클라우드 브라우저 접근은 관리자가 켜야 해요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork, Copilot Cowork",
      text: [
        "각 업체의 공식 문서와 가격 페이지에서 2026년 11월 13일에 확인한 내용이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요. 코딩 작업은 [Claude Code vs Codex](/blog/claude-code-vs-codex)와 [Codex 활용 사례](/use-cases/codex)를, Anthropic의 에이전트는 [Claude Cowork 가이드](/personal-agent/claude-cowork)를 참고하세요.",
        "나란히 비교: [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). 가이드: [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["제조사", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["용도", "검토할 결과물이 나오는 작업: 발표 자료, 스프레드시트, 문서, 분석", "코딩: 저장소의 코드를 살펴보고, 편집하고, 실행", "코딩 외 지식 업무", "Microsoft 365 전반의 여러 단계 작업"],
        ["실행 위치", "OpenAI 클라우드. 기능이 켜져 있으면 데스크톱 앱에서 로컬로", "CLI, IDE 확장, ChatGPT 데스크톱 앱. Codex Cloud", "Anthropic 클라우드. 로컬 파일은 Claude Desktop으로", "Microsoft 클라우드, OneDrive와 SharePoint 사용"],
        ["이용 대상", "ChatGPT 요금제. Free와 Go는 제한적", "ChatGPT 요금제, 또는 OpenAI API 키(클라우드 기능 제외)", "Claude 유료 요금제, Pro 월 $20부터", "Microsoft 365 Copilot 라이선스와 Copilot Credits"],
        ["사용량", "가격, 크레딧, 한도를 Codex와 공유", "가격, 크레딧, 한도를 Work와 공유", "채팅보다 요금제 한도를 빨리 소진", "Copilot Credits로 사용한 만큼 청구"],
        ["반복 작업", "예약 작업. Gmail, Slack, GitHub 이벤트", "ChatGPT 앱과 웹의 예약 작업", "매시간부터 매주까지 클라우드에서 실행되는 예약 작업", "예약 프롬프트. 이메일, Teams, 커넥터 이벤트"],
        ["승인", "Ask for approval, Approve for me, 전체 액세스. 샌드박스", "Ask for approval, Approve for me, 전체 액세스. 샌드박스", "Manual, Auto, Skip 모드", "민감한 작업 전 미리 보기가 있는 승인 창"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "문서는 Work에게, 코드베이스는 Crewmark에게",
      text: [
        "ChatGPT Work는 작업을 받아 검토할 결과물을 돌려줘요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 각 직원이 공유 보드에서 이슈를 가져가니, 저장소에서 하는 엔지니어링, SEO, 마케팅 업무가 일정에 맞춰 처리돼요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 [AI 직원 직무](/ai-employees)에서 시작하세요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "할 수 있는 일 보기",
          text: "설정 방법이 담긴 업무 예시는 [Codex 활용 사례](/use-cases/codex)와 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "ChatGPT Work 설정하기" },
  mid: {
    title: "내 코드베이스를 위한 AI 동료가 필요하세요?",
    text: "Crewmark는 내 Codex나 Claude Code에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "ChatGPT Work 자주 묻는 질문",
    items: [
      {
        q: "ChatGPT Work란 무엇인가요?",
        a: "결과가 분명한 작업을 맡기기 위한 ChatGPT의 모드예요. ChatGPT가 작업을 계획하고 내 파일, 플러그인, 웹, 브라우저, 코드를 써서 발표 자료, 스프레드시트, 문서, 분석처럼 검토할 결과물을 돌려줘요.",
      },
      {
        q: "ChatGPT Work vs Chat: 무엇이 다른가요?",
        a: "같은 앱 안의 두 모드예요. OpenAI는 답이 필요하면 Chat, 완성된 작업이 필요하면 Work를 권해요. Work는 여러 단계의 작업을 계획하고, 앱을 닫아도 클라우드에서 계속 일하며, 중요한 작업 앞에서는 승인을 기다려요.",
      },
      {
        q: "ChatGPT Work는 무료인가요, Plus가 필요한가요?",
        a: "Free($0)와 Go(월 $8)는 데스크톱 앱에서만 Work를 제한적으로 쓸 수 있어요. Plus(월 $20)와 Pro(월 $100부터)는 데스크톱, 웹, 모바일에서 Work를 쓸 수 있고 추가 크레딧을 살 수 있어요. Business는 연간 결제 시 사용자당 월 $20이고, Enterprise와 Edu는 영업팀을 통해요.",
      },
      {
        q: "ChatGPT Work vs Codex: 무엇이 다른가요?",
        a: "핵심 기능, 실행, 가격, 크레딧, 사용 한도를 공유해요. Codex는 OpenAI의 코딩 에이전트로, 저장소를 위한 CLI, IDE 확장, 클라우드 작업이 있어요. Work는 일상 업무를 위한 경험으로, Git과 셸 출력이나 풀 리퀘스트 창 같은 세부 사항이 없어요.",
      },
      {
        q: "ChatGPT Work를 쓰려면 앱을 내려받아야 하나요?",
        a: "Plus나 Pro라면 아니에요. Work는 웹과 iOS·Android용 ChatGPT에서도 돌아가요. Free와 Go에서는 macOS, Windows, Linux에서 돌아가는 ChatGPT 데스크톱 앱에만 있어요. 로컬 파일, 브라우저 확장 프로그램, Computer Use로 작업하려면 데스크톱 앱이 필요해요.",
      },
      {
        q: "학생도 ChatGPT Work를 쓸 수 있나요?",
        a: "Free와 Go 요금제에서는 데스크톱 앱에서 Work를 제한적으로 쓸 수 있어요. ChatGPT Edu 워크스페이스는 워크스페이스 공유 크레딧으로 Work를 쓰고, 관리자가 Work, 플러그인, 브라우저 사용 접근을 관리해요. Edu 가격은 OpenAI 영업팀을 통해 안내받아요.",
      },
    ],
  },
  cta: {
    title: "문서는 Work에게 맡기세요. 코딩 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Codex와 Claude Code 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 OpenAI의 ChatGPT Work와 Codex 문서, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI, Anthropic, Microsoft와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
