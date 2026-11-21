import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker: Andrew Ng의 오픈소스 AI 동료 정리",
    description:
      "OpenWorker는 GitHub에 공개된 Andrew Ng의 오픈소스 AI 동료예요. 내 모델로 돌아가는 데스크톱 앱, 승인과 예약 실행, Harness SDK까지 정리했어요.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · 오픈소스",
    title: "OpenWorker: Andrew Ng의 오픈소스 AI 동료와 설정하는 법",
    lead: "OpenWorker는 README에서 “일상 업무를 위한 AI 동료”(“an AI coworker for your everyday work”)라고 소개하는 오픈소스 데스크톱 앱이고, 나만의 에이전트 앱을 만드는 TypeScript와 Rust용 Harness SDK도 함께 있어요. 저장소는 Andrew Ng의 GitHub 계정 아래에 있고, MIT 라이선스를 쓰며, 2026년 11월 13일 기준 스타가 약 19,050개였어요. 앱은 내 모델 키나 로컬 모델로 내 컴퓨터에서 돌아가고, 행동하기 전에 묻고, 모든 도구 호출을 기록해요. 이 가이드에서는 하는 일, 비용, 설정하는 법, 승인 방식, 그리고 OpenBot, Suparagent, Claude Cowork와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenWorker란",
      points: [
        "일상 업무를 위한 데스크톱 앱: 리서치, 글쓰기, 코드 리뷰, 여러 도구에 걸친 작업 처리. 오픈 베타 중이에요.",
        "내 컴퓨터에서 실행: 에이전트 루프, 대화, 커넥터 토큰, 모델 키가 내 컴퓨터에 남아요. 클라우드에 있는 건 커넥터의 OAuth 로그인을 중개하는 작은 서비스 하나뿐이에요.",
        "모델은 내가 골라요: 내 키로 OpenAI, Anthropic, Google Gemini, OpenRouter 등 여러 제공자를 쓰거나, Ollama, LM Studio, llama.cpp, vLLM으로 로컬 모델을 써요. 에이전트 엔진은 Andrew Ng의 라이브러리인 aisuite 위에 Python으로 작성됐어요.",
        "전문 동료는 한 가지 일을 위한 도구와 지침을 갖추고 나와요. 보안 동료부터 먼저 나와요.",
        "커넥터: GitHub, Slack, 이메일, 캘린더 등 25개 이상과 MCP. Slack에서 @OpenWorker를 멘션하면 작업이 내 데스크톱에서 실행되고 답은 스레드에 달려요.",
        "일정: 아침 브리핑, 주간 보고서 등 반복 가능한 작업이 일정에 맞춰 실행되고, 검토할 수 있는 기록이 남아요.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub의 OpenWorker와 Harness SDK",
      text: [
        `코드는 [github.com/andrewyng/openworker](${repo})에 있어요. 저장소는 2026년 7월 20일에 만들어졌고, MIT LICENSE에는 저작권자로 Andrew Ng이 적혀 있으며, 2026년 11월 13일 기준 스타가 약 19,050개였어요.`,
      ],
      points: [
        "Harness SDK: 같은 저장소에 있는 TypeScript와 Rust용 SDK로, 나만의 에이전트형 데스크톱 앱이나 웹 앱을 만들 수 있어요.",
        "서브에이전트와 팀: SDK는 둘 다 지원해요. 데스크톱 앱도 지원하는지는 나와 있지 않아요.",
        "배포: SDK로 만든 앱은 AWS, Azure, Google Cloud의 Kubernetes에서 실행할 수 있어요.",
        "기여: 메인테이너들은 이미 개발 중이거나 계획에 없는 기능의 풀 리퀘스트는 받지 않을 수 있다고 밝혀요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenWorker 가격과 라이선스",
      text: [
        "2026년 11월 13일에 확인한 결과 README와 openworker.com 어디에도 가격이 나와 있지 않아요. 내 모델 키를 가져와 제공자에게 비용을 내거나, 로컬 모델을 돌려요.",
      ],
      headers: ["구성 요소", "내는 비용"],
      rows: [
        ["데스크톱 앱(오픈 베타)", "가격 표시 없음. MIT 라이선스"],
        ["Harness SDK(TypeScript, Rust)", "가격 표시 없음. MIT 라이선스, 같은 저장소"],
        ["클라우드 모델: OpenAI, Anthropic, Google Gemini, OpenRouter 등 제공자", "해당 제공자가 내 키로 청구"],
        ["로컬 모델: Ollama, LM Studio, llama.cpp, vLLM", "내 컴퓨터에서 실행"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenWorker 설정하는 법",
      steps: [
        {
          title: "데스크톱 앱 내려받기",
          text: "Apple silicon의 macOS 12 이상(서명 및 공증 완료)과 x64의 Windows 10, 11에서 돌아가요. Windows 빌드는 아직 코드 서명이 되지 않아 SmartScreen 경고가 떠요. Linux 다운로드는 나와 있지 않아요.",
        },
        {
          title: "모델 추가하기",
          text: "OpenAI, Anthropic, Google Gemini, OpenRouter 등 제공자의 내 키를 입력하거나, Ollama, LM Studio, llama.cpp, vLLM으로 로컬 모델을 쓰세요. 키는 내 컴퓨터에 남아요.",
        },
        {
          title: "도구 연결하기",
          text: "GitHub, Slack, 이메일, 캘린더 같은 커넥터나 MCP 서버를 추가하세요. 로그인은 OAuth를 중개하는 작은 클라우드 서비스를 거치고, 토큰은 내 컴퓨터에 남아요.",
        },
        {
          title: "내 확인이 필요한 일 정하기",
          text: "작업은 기본적으로 승인을 기다려요. 한 번 한 승인을 상시 규칙과 허용 목록으로 바꾸거나, 자동 승인을 켜면 검토 모델이 결정하고 확신이 없을 때 나에게 넘겨요.",
        },
        {
          title: "반복 작업 예약하기",
          text: "아침 브리핑, 주간 보고서 등 반복 가능한 작업을 설정하세요. 무인 실행은 절대 스스로 승인하지 않아요. 질문은 받은편지함에서 기다리고, 실행마다 검토할 기록이 남아요.",
        },
      ],
      source: { label: "출처: GitHub의 OpenWorker README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenWorker에서 주도권을 지키는 방법: 승인, 검토, 감사",
      points: [
        "기본은 승인: 작업은 내 확인을 기다리고, 일부 위험한 작업은 항상 사람이 결정해요.",
        "쌓아 가는 규칙: 한 번 한 승인을 상시 규칙이나 허용 목록 항목으로 만들 수 있어요.",
        "선택형 자동 승인: 검토 모델이 승인을 처리하고, 확신이 없으면 나에게 넘기며, 회로 차단기가 있어요.",
        "감사 기록: 모든 도구 호출이 어떻게 승인됐는지와 함께 기록되고, 데이터가 이 Mac을 벗어나는 작업에는 “Leaves this Mac” 표시가 붙어요.",
        "샌드박스: 명령은 NVIDIA OpenShell 샌드박스나 macOS, Windows 내장 샌드박스에서 실행할 수 있어요.",
        "예약 실행은 절대 스스로 승인하지 않아요. 나에게 필요한 것은 모두 받은편지함에서 기다려요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent, Claude Cowork",
      text: [
        "각 프로젝트의 README나 업체 공식 페이지에서 2026년 11월 13일에 확인했고, GitHub 스타 수도 같은 날 기준이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요.",
        "가이드: [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["제조사", "Andrew Ng(GitHub의 andrewyng)", "CopilotKit", "GitHub의 Anil-matcha", "Anthropic"],
        ["오픈소스", "MIT. 스타 약 19,050개", "MIT 템플릿, CopilotKit Intelligence는 별도 라이선스. 스타 약 11,652개", "Apache 2.0. 스타 약 7,050개", "아니요"],
        ["실행 위치", "내 컴퓨터(macOS, Windows). 커넥터 로그인은 작은 클라우드 서비스가 중개", "데스크톱 앱(Mac, Windows, Docker 백엔드) 또는 Kubernetes. 호스팅 버전은 얼리 액세스", "데스크톱 앱, 셀프 호스팅 Linux 서버, 또는 호스팅 웹 앱", "Anthropic 클라우드. 로컬 작업은 Claude Desktop으로"],
        ["모델", "OpenAI, Anthropic, Gemini, OpenRouter 등의 내 키, 또는 로컬 모델", "OpenAI, Claude, Gemini, 오픈 모델. AG-UI로 내 에이전트 연결", "Claude Code, Codex, Gemini CLI, Cursor 같은 엔진. 모델은 포함되지 않음", "Claude 모델"],
        ["가격", "가격 표시 없음. 모델은 직접 준비", "개인 프로젝트는 무료. Business는 활성 사용자당 월 최대 $29", "셀프 호스팅 요금은 명시 없음. 호스팅 요금제 월 $0~$99", "Claude 유료 요금제. Pro는 월 $20"],
        ["반복 작업", "예약 브리핑, 보고서 등 반복 가능한 작업", "루틴 워커가 실행하는 Routines", "일정, 웹훅, 또는 필요할 때 실행되는 루틴", "매시간, 매일, 매주, 평일마다, 클라우드에서"],
        ["승인", "기본으로 켜짐. 선택형 검토 모델", "작업 전에 확인. 팀 에디션에서는 감사 기록", "Ask first, Accept edits, Approve for me, Plan only", "Manual, Auto, Skip"],
        ["작업 보드", "언급 없음", "언급 없음", "작업 보드와 캘린더", "이슈 보드 없음. 작업 목록과 Scheduled 페이지"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "데스크톱에는 AI 동료를, 보드에는 AI 직원을",
      text: [
        "OpenWorker는 내 컴퓨터에서 직접 돌리는 AI 동료예요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 각 직원이 공유 보드에서 이슈를 가져가니, 반복되는 엔지니어링, SEO, 마케팅 업무가 처리되고 추적돼요.",
      ],
      steps: [
        { title: "직무 고르기", text: "[AI 직원 직무](/ai-employees)에서 시작하고 숫자로 된 목표를 정하세요." },
        {
          title: "일을 보드에 올리기",
          text: "공유 보드에서 이슈를 배정하세요. 근무 시간 동안 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        { title: "할 수 있는 일 보기", text: "설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenWorker 설정하기" },
  mid: {
    title: "보드에서 이슈를 가져가는 AI 직원이 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex 세션에 직무, 근무 시간, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "OpenWorker 자주 묻는 질문",
    items: [
      {
        q: "OpenWorker란 무엇인가요?",
        a: "README에서 “일상 업무를 위한 AI 동료”(“an AI coworker for your everyday work”)라고 소개하는 오픈소스 데스크톱 앱이고, 나만의 에이전트 앱을 만드는 Harness SDK도 함께 있어요. 내 모델 키나 로컬 모델로 내 컴퓨터에서 돌아가고, 작업 전에 승인을 요청하며, 작업을 일정에 맞춰 실행할 수 있어요. 데스크톱 앱은 오픈 베타 중이에요.",
      },
      {
        q: "OpenWorker는 Andrew Ng이 만들었나요?",
        a: "저장소는 Andrew Ng의 GitHub 계정 아래에 있는 github.com/andrewyng/openworker이고, LICENSE에는 저작권자로 Andrew Ng이 적혀 있어요. 앱의 엔진은 그의 라이브러리인 aisuite 위에 만들어졌어요. openworker.com 하단에는 “© 2026 OpenWorker”라고 적혀 있어요.",
      },
      {
        q: "OpenWorker는 무료 오픈소스인가요?",
        a: "MIT 라이선스의 오픈소스이고, README와 openworker.com 어디에도 가격이 나와 있지 않아요. 내 모델 키를 가져와 제공자에게 비용을 내거나, Ollama, LM Studio, llama.cpp, vLLM으로 로컬 모델을 돌려요.",
      },
      {
        q: "OpenWorker Harness SDK란 무엇인가요?",
        a: "같은 저장소에 있는 TypeScript와 Rust용 SDK로, 나만의 에이전트형 데스크톱 앱이나 웹 앱을 만들 수 있어요. 서브에이전트와 팀을 지원하고, SDK로 만든 앱은 AWS, Azure, Google Cloud의 Kubernetes에서 실행할 수 있어요.",
      },
      {
        q: "OpenWorker는 Mac, Windows, Linux에서 돌아가나요?",
        a: "Apple silicon의 macOS 12 이상과 x64의 Windows 10, 11에서 돌아가요. Windows 빌드는 아직 코드 서명이 되지 않아 SmartScreen 경고가 떠요. Linux 다운로드는 나와 있지 않아요.",
      },
      {
        q: "OpenWorker의 한계는 무엇인가요?",
        a: "데스크톱 앱은 오픈 베타이고, Windows 빌드는 아직 코드 서명이 되지 않았으며, 메인테이너들은 이미 개발 중이거나 계획에 없는 기능의 풀 리퀘스트는 받지 않을 수 있다고 밝혀요.",
      },
    ],
  },
  cta: {
    title: "AI 동료는 데스크톱에 두세요. 코딩 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 GitHub의 OpenWorker README와 openworker.com과 대조해 확인했고, 비교 정보는 같은 날 각 제품의 공식 페이지에서 가져왔습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Andrew Ng이나 OpenWorker와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
