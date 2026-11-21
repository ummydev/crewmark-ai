import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot: CopilotKit 오픈소스 AI 동료와 가격",
    description:
      "OpenBot은 CopilotKit의 오픈소스 AI 동료 워크스페이스예요. 하는 일, OpenBot for Business 가격, 설정, GitHub, Grok Bot 비교.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · 오픈소스",
    title: "OpenBot: CopilotKit의 오픈소스 AI 동료 워크스페이스",
    lead: "OpenBot은 CopilotKit이 만든, 오픈소스이며 셀프 호스팅할 수 있는 AI 동료 워크스페이스예요. 각 Bot은 브라우저, 파일, 도구가 있는 자기 컴퓨터를 받아 승인과 활동 기록 아래에서 일해요. 노트북에서는 데스크톱 앱으로, 팀에서는 Kubernetes에서 돌리고, 모델은 직접 가져오며, 이미 만든 에이전트를 AG-UI로 연결할 수 있어요. 이 가이드에서는 하는 일, OpenBot for Business 비용, 설정하는 법, 주도권을 지키는 방식, 다른 AI 동료와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "OpenBot이란",
      points: [
        "Bot마다 컴퓨터 한 대: 각 Bot에는 자기 브라우저, 파일, 도구가 있고, 대화, 루틴, 기억, 스킬, 앱, 승인, 활동 기록도 함께 있어요.",
        "실행 위치: 노트북에서는 Docker 백엔드로 돌아가는 Mac·Windows용 데스크톱 앱, 팀에서는 Helm으로 배포하는 Kubernetes. CopilotKit이 호스팅하는 버전은 얼리 액세스 중이에요.",
        "내 모델: OpenAI, Claude, Gemini, 또는 OpenAI 호환 엔드포인트를 통한 오픈 모델. 모델 제공자에게 직접 비용을 내요.",
        "내 에이전트: 내장 Bot을 쓰거나, 다른 스택으로 만든 에이전트를 AG-UI로 연결하세요.",
        "루틴: 루틴 워커가 실행하는 반복 작업.",
        "도구와 프런트엔드: MCP 도구, 그리고 Mac, Windows, 웹, iOS, Android, Slack, Teams용 프런트엔드가 있고, 일부는 얼리 액세스예요.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub의 OpenBot과 CopilotKit Intelligence",
      text: [
        `코드는 [github.com/CopilotKit/OpenBot](${repo})에 있어요. 저장소는 2026년 8월 17일에 만들어졌고, 2026년 11월 13일 기준 스타가 약 11,652개였어요.`,
      ],
      points: [
        "애플리케이션 템플릿은 MIT 라이선스라서 셀프 호스팅하고 맞춤 설정할 수 있어요.",
        "자체 라이선스가 있는 CopilotKit Intelligence를 써요. 노트북에서는 무료 로컬 라이선스, Kubernetes에서는 체험판 또는 프로덕션 라이선스예요.",
        "Kubernetes에서 프로덕션으로 운영하려면 평가 단계를 넘어선 CopilotKit Intelligence 라이선스가 필요해요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "OpenBot 가격과 OpenBot for Business",
      text: [
        "2026년 11월 13일 open.bot/pricing 기준이고, 미국 달러예요. 모든 요금제에서 모델 제공자에게는 직접 비용을 내요.",
      ],
      headers: ["요금제 또는 라이선스", "가격"],
      rows: [
        ["개인 프로젝트", "무료"],
        ["OpenBot for Business, 종량제", "활성 사용자당 월 최대 $29, 여기에 월 모델 지출 중 $5,000 초과분의 5%"],
        ["연간", "맞춤"],
        ["CopilotKit Intelligence", "노트북에서는 무료 로컬 라이선스. Kubernetes에서는 체험판 또는 프로덕션 라이선스"],
        ["모델", "모델 제공자에게 직접 지불"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenBot 설정하는 법",
      steps: [
        {
          title: "실행 위치 고르기",
          text: "노트북에서는 Docker 백엔드로 돌아가는 Mac 또는 Windows용 데스크톱 앱을 쓰세요. 팀이라면 Helm으로 Kubernetes에 배포하세요. CopilotKit이 호스팅하는 버전은 얼리 액세스 중이에요.",
        },
        {
          title: "모델 연결하기",
          text: "OpenAI, Claude, Gemini, 또는 OpenAI 호환 엔드포인트를 통한 오픈 모델을 쓰세요. 제공자에게 직접 비용을 내요.",
        },
        {
          title: "Bot을 고르거나 에이전트 가져오기",
          text: "내장 Bot으로 시작하거나, 이미 만든 에이전트를 AG-UI로 연결하세요. 각 Bot은 브라우저, 파일, 도구가 있는 자기 컴퓨터를 받아요.",
        },
        {
          title: "도구와 루틴 추가하기",
          text: "Bot에게 MCP 도구를 주고 반복 작업을 위한 Routines를 설정하세요. 루틴 워커가 실행해요.",
        },
        {
          title: "일하는 곳에서 쓰기",
          text: "프런트엔드는 Mac, Windows, 웹, iOS, Android, Slack, Teams를 지원하고, 일부는 얼리 액세스예요.",
        },
      ],
      source: { label: "출처: GitHub의 OpenBot README", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "OpenBot에서 주도권을 지키는 방법",
      points: [
        "승인: Bot은 작업 전에 물어봐요.",
        "활동: Bot마다 활동 기록을 남겨요.",
        "팀 에디션: 회사 계정 로그인, 역할, 도구 권한, 감사 기록.",
        "셀프 호스팅: 내가 고른 모델 제공자로, 내 노트북이나 내 Kubernetes 클러스터에서 실행돼요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent, Claude Cowork",
      text: [
        "각 프로젝트의 README나 업체 공식 페이지에서 2026년 11월 13일에 확인했고, GitHub 스타 수도 같은 날 기준이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요. Grok Bot과의 비교는 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)을 참고하세요.",
        "가이드: [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["제조사", "CopilotKit", "Andrew Ng(GitHub의 andrewyng)", "GitHub의 Anil-matcha", "Anthropic"],
        ["오픈소스", "MIT 템플릿, CopilotKit Intelligence는 별도 라이선스. 스타 약 11,652개", "MIT. 스타 약 19,050개", "Apache 2.0. 스타 약 7,050개", "아니요"],
        ["실행 위치", "데스크톱 앱(Mac, Windows, Docker 백엔드) 또는 Kubernetes. 호스팅 버전은 얼리 액세스", "내 컴퓨터(macOS, Windows). 커넥터 로그인은 작은 클라우드 서비스가 중개", "데스크톱 앱, 셀프 호스팅 Linux 서버, 또는 호스팅 웹 앱", "Anthropic 클라우드. 로컬 작업은 Claude Desktop으로"],
        ["모델", "OpenAI, Claude, Gemini, 오픈 모델. AG-UI로 내 에이전트 연결", "OpenAI, Anthropic, Gemini, OpenRouter 등의 내 키, 또는 로컬 모델", "Claude Code, Codex, Gemini CLI, Cursor 같은 엔진. 모델은 포함되지 않음", "Claude 모델"],
        ["가격", "개인 프로젝트는 무료. Business는 활성 사용자당 월 최대 $29", "가격 표시 없음. 모델은 직접 준비", "셀프 호스팅 요금은 명시 없음. 호스팅 요금제 월 $0~$99", "Claude 유료 요금제. Pro는 월 $20"],
        ["반복 작업", "루틴 워커가 실행하는 Routines", "예약 브리핑, 보고서 등 반복 가능한 작업", "일정, 웹훅, 또는 필요할 때 실행되는 루틴", "매시간, 매일, 매주, 평일마다, 클라우드에서"],
        ["승인", "작업 전에 확인. 팀 에디션에서는 감사 기록", "기본으로 켜짐. 선택형 검토 모델", "Ask first, Accept edits, Approve for me, Plan only", "Manual, Auto, Skip"],
        ["작업 보드", "언급 없음", "언급 없음", "작업 보드와 캘린더", "이슈 보드 없음. 작업 목록과 Scheduled 페이지"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "워크스페이스에는 Bot을, 내 코딩 에이전트에는 AI 직원을",
      text: [
        "OpenBot은 내가 호스팅하는 워크스페이스에서 각 Bot에게 자기 컴퓨터를 줘요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 주고, 각 직원은 공유 보드에서 이슈를 가져가요.",
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
  howTo: { section: "how-to", name: "OpenBot 설정하기" },
  mid: {
    title: "이미 쓰는 코딩 에이전트로 AI 직원을 두고 싶으세요?",
    text: "Crewmark는 내 Claude Code나 Codex 세션에 직무, 근무 시간, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "OpenBot 자주 묻는 질문",
    items: [
      {
        q: "OpenBot이란 무엇인가요?",
        a: "CopilotKit이 만든, 오픈소스이며 셀프 호스팅할 수 있는 AI 동료 워크스페이스예요. 각 Bot은 브라우저, 파일, 도구가 있는 자기 컴퓨터를 받고, 승인과 활동 기록도 갖춰요. 노트북에서는 데스크톱 앱으로, 팀에서는 Kubernetes에서, 내가 가져온 모델로 돌아가요.",
      },
      {
        q: "OpenBot은 CopilotKit이 만들었나요?",
        a: "네. github.com/CopilotKit/OpenBot에 있어요. OpenBot의 MIT 템플릿과는 별도로 라이선스되는 CopilotKit Intelligence를 쓰고, 기존 에이전트는 AG-UI로 연결해요.",
      },
      {
        q: "OpenBot은 무료 오픈소스인가요?",
        a: "애플리케이션 템플릿은 MIT 라이선스이고, 개인 프로젝트에는 무료예요. OpenBot이 쓰는 CopilotKit Intelligence는 노트북에서는 무료 로컬 라이선스, Kubernetes에서는 체험판 또는 프로덕션 라이선스예요. 모델 제공자에게는 직접 비용을 내요.",
      },
      {
        q: "OpenBot for Business는 얼마인가요?",
        a: "종량제는 활성 사용자당 월 최대 $29에, 월 모델 지출 중 $5,000 초과분의 5%가 더해져요. 연간 가격은 맞춤이에요. Kubernetes에서 프로덕션으로 운영하려면 평가 단계를 넘어선 CopilotKit Intelligence 라이선스도 필요해요.",
      },
      {
        q: "OpenBot vs Grok Bot: 무엇이 다른가요?",
        a: "OpenBot은 오픈소스이고 셀프 호스팅할 수 있어요. 내 노트북이나 Kubernetes에서 돌리고 모델이나 에이전트는 직접 가져와요. Grok Bot과 나란히 비교한 내용은 [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)을 참고하세요.",
      },
      {
        q: "GitHub의 OpenBot은 어디에 있나요?",
        a: "github.com/CopilotKit/OpenBot이에요. 저장소는 2026년 8월 17일에 만들어졌고, 2026년 11월 13일 기준 스타가 약 11,652개였어요.",
      },
    ],
  },
  cta: {
    title: "Bot은 직접 호스팅하세요. 코딩 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 GitHub의 OpenBot README와 open.bot/pricing과 대조해 확인했고, 비교 정보는 같은 날 각 제품의 공식 페이지에서 가져왔습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, CopilotKit과 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
