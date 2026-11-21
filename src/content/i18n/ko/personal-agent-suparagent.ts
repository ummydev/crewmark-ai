import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent: 오픈소스 AI 동료 워크스페이스, 가격",
    description:
      "Suparagent는 Claude Code, Codex, Gemini CLI, Cursor 위에서 돌아가는 AI 동료를 위한 오픈소스 워크스페이스예요. 소개, 가격, 설정, 비교.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · 오픈소스",
    title: "Suparagent: AI 동료를 위한 오픈소스 워크스페이스",
    lead: "Suparagent는 오픈소스 “AI 동료를 위한 워크스페이스”(“workspace for AI coworkers”)예요. 직무, 작업 공간, 기억, 루틴, 승인 설정을 갖춘 이름 붙은 에이전트를 만들면, Claude Code, Codex, Gemini CLI, Cursor처럼 이미 쓰는 엔진 위에서 돌아가요. 데스크톱 앱이나 내 서버에서 실행되고, suparagent.ai의 호스팅 서비스는 별개 제품이에요. 이 앱은 Open Dots, 그다음 Open Duet이라는 이름을 거쳐 2026년 11월 9일 버전 0.8.5에서 Suparagent라는 이름을 얻었어요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Suparagent란",
      points: [
        "이름 붙은 동료: 각 에이전트에는 이름, 직무, 엔진, 작업 공간, 기억, 승인 설정이 있고, 템플릿과 스킬로 시작할 수 있어요.",
        "이미 쓰는 엔진: Claude Code나 Codex CLI, Gemini CLI, Antigravity를 통한 Google Gemini, Cursor, Agent Client Protocol(ACP)을 통한 다른 CLI 에이전트, OpenRouter, 또는 Ollama나 LM Studio 같은 OpenAI 호환 API. 모델은 포함되지 않아요.",
        "작업과 일정: 작업을 배정하고 일회성 실행을 예약하고 시도 결과를 검토하는 작업 보드와 캘린더, 그리고 백엔드가 돌아가는 동안 일정, 웹훅, 또는 필요할 때 실행되는 루틴.",
        "에이전트 팀: 리드 에이전트(Claude 또는 Codex)가 전문 에이전트에게 일을 맡기고, 에이전트들은 공유 룸에서 조율해요.",
        "승인: Ask first, Accept edits, Approve for me(Claude, Codex, Cursor), Plan only. 루틴은 절대 스스로 작업을 승인하지 않고, Today 보기에 승인, 질문, 루틴 결과가 모여요.",
        `Apache 2.0 오픈소스로 [github.com/Anil-matcha/suparagent](${repo})에 있고, 2023년 5월에 만들어진 저장소로 2026년 11월 13일 기준 스타가 약 7,050개였어요. 아직 초기이고 계속 바뀌고 있어요. 셀프 호스팅 서버, Docker 컴퓨터, 브라우저 도구, macOS 네이티브 데스크톱 프리뷰는 실험적 기능이에요.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Suparagent 가격",
      text: [
        "데스크톱 앱이나 셀프 호스팅 서버에 대한 Suparagent 요금은 명시되어 있지 않아요. 아래 호스팅 요금제는 2026년 11월 13일 README에 나온 것으로, 미국 달러 기준이에요. 모든 요금제에서 AI 제공자 계정은 직접 가져와요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        ["데스크톱 앱 또는 셀프 호스팅 서버", "Suparagent 요금 명시 없음", "내 엔진 사용. 모델 제공자에게 비용 지불"],
        ["호스팅: Free 프리뷰", "$0", "샌드박스 컴퓨팅은 내 Boat 계정으로 청구"],
        ["호스팅: Starter", "월 $15", "컴퓨팅 100시간, 51 GB"],
        ["호스팅: Standard", "월 $49", "컴퓨팅 300시간, 51 GB"],
        ["호스팅: Pro", "월 $99", "컴퓨팅 720시간, 111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Suparagent 설정하는 법",
      steps: [
        {
          title: "실행 위치 고르기",
          text: "소스 체크아웃에서 데스크톱 앱을 실행하거나(GitHub Releases의 설치 파일은 실험적이고 서명되지 않았어요), 셀프 호스팅 Linux 서버를 구축하거나, suparagent.ai의 호스팅 웹 앱을 쓰세요.",
        },
        {
          title: "에이전트 만들기",
          text: "이름, 직무, Claude Code, Codex, Gemini CLI, Cursor 같은 엔진, 작업 공간, 승인 모드를 정하거나, 템플릿에서 시작하세요.",
        },
        {
          title: "일 맡기기",
          text: "보드에서 작업을 배정하거나, 일정, 웹훅, 또는 필요할 때 실행되도록 루틴을 설정하세요. 백엔드는 계속 돌아가고 있어야 해요. 승인, 질문, 결과는 Today 보기에 모여요.",
        },
      ],
      source: { label: "출처: GitHub의 Suparagent README", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot, Claude Cowork",
      text: [
        "각 프로젝트의 README나 업체 공식 페이지에서 2026년 11월 13일에 확인했고, GitHub 스타 수도 같은 날 기준이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요.",
        "가이드: [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["제조사", "GitHub의 Anil-matcha", "Andrew Ng(GitHub의 andrewyng)", "CopilotKit", "Anthropic"],
        ["오픈소스", "Apache 2.0. 스타 약 7,050개", "MIT. 스타 약 19,050개", "MIT 템플릿, CopilotKit Intelligence는 별도 라이선스. 스타 약 11,652개", "아니요"],
        ["실행 위치", "데스크톱 앱, 셀프 호스팅 Linux 서버, 또는 호스팅 웹 앱", "내 컴퓨터(macOS, Windows). 커넥터 로그인은 작은 클라우드 서비스가 중개", "데스크톱 앱(Mac, Windows, Docker 백엔드) 또는 Kubernetes. 호스팅 버전은 얼리 액세스", "Anthropic 클라우드. 로컬 작업은 Claude Desktop으로"],
        ["모델", "Claude Code, Codex, Gemini CLI, Cursor 같은 엔진. 모델은 포함되지 않음", "OpenAI, Anthropic, Gemini, OpenRouter 등의 내 키, 또는 로컬 모델", "OpenAI, Claude, Gemini, 오픈 모델. AG-UI로 내 에이전트 연결", "Claude 모델"],
        ["가격", "셀프 호스팅 요금은 명시 없음. 호스팅 요금제 월 $0~$99", "가격 표시 없음. 모델은 직접 준비", "개인 프로젝트는 무료. Business는 활성 사용자당 월 최대 $29", "Claude 유료 요금제. Pro는 월 $20"],
        ["작업 보드", "작업 보드와 캘린더", "언급 없음", "언급 없음", "이슈 보드 없음. 작업 목록과 Scheduled 페이지"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "목표, 근무 시간, 하트비트를 갖춘 AI 직원",
      text: [
        "Suparagent는 내가 고른 엔진 위에서 이름 붙은 동료를 돌려요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 주고, 각 직원은 공유 보드에서 이슈를 가져가요.",
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
  howTo: { section: "how-to", name: "Suparagent 설정하기" },
  mid: {
    title: "이미 쓰는 코딩 에이전트로 AI 직원을 두고 싶으세요?",
    text: "Crewmark는 내 Claude Code나 Codex 세션에 직무, 근무 시간, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Suparagent 자주 묻는 질문",
    items: [
      {
        q: "Suparagent란 무엇인가요?",
        a: "AI 동료를 위한 오픈소스 워크스페이스예요. 직무, 기억, 루틴, 승인 설정을 갖춘 이름 붙은 에이전트를 만들면, Claude Code, Codex, Gemini CLI, Cursor처럼 이미 쓰는 엔진 위에서 돌아가요. 2026년 11월 9일에 이름을 바꾸기 전까지는 Open Dots, 그다음 Open Duet이라고 불렸어요.",
      },
      {
        q: "Suparagent는 무료인가요?",
        a: "코드는 Apache 2.0이고, 데스크톱 앱이나 셀프 호스팅 서버에 대한 Suparagent 요금은 명시되어 있지 않아요. 모델 제공자에게는 비용을 내요. README에 나온 호스팅 요금제는 Free 프리뷰 $0(샌드박스 컴퓨팅은 내 Boat 계정으로 청구), Starter 월 $15, Standard $49, Pro $99예요.",
      },
      {
        q: "Suparagent는 어떤 AI 에이전트와 함께 쓸 수 있나요?",
        a: "Claude Code나 Codex CLI, Gemini CLI, Antigravity를 통한 Google Gemini, Cursor, Agent Client Protocol(ACP)을 통한 다른 CLI 에이전트, OpenRouter, 그리고 Ollama나 LM Studio 같은 OpenAI 호환 API예요. 팀의 리드 에이전트는 Claude나 Codex여야 하고, 연결된 앱은 Claude와 Codex 에이전트에서만 작동해요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 프롬프트만 말고 직무를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 GitHub의 Suparagent README, 변경 기록, 라이선스, suparagent.ai와 대조해 확인했고, 비교 정보는 같은 날 각 제품의 공식 페이지에서 가져왔습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Suparagent 프로젝트나 Vadoo Internet Services Private Limited와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
