import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork: 비용, 크레딧, 라이선스 정리",
    description:
      "Copilot Cowork 정리: Microsoft 365 에이전트가 하는 일, Copilot Credits 비용, 라이선스, 스킬, 설정, Claude Cowork 비교.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Microsoft",
    title: "Copilot Cowork: Microsoft 365용 Microsoft 에이전트가 하는 일과 과금 방식",
    lead: "Copilot Cowork는 Microsoft 365 Copilot 안의 에이전트로, Microsoft 365 전반에서 여러 단계의 작업을 처리해요. 이메일을 보내고, 회의 일정을 잡고, Word, Excel, PowerPoint, PDF 파일을 만들고 편집하고, Teams에 게시하고, OneDrive와 SharePoint 파일을 관리하고, 조직 내부를 검색하고, 심층 리서치를 실행하며, 민감한 작업 전에는 승인을 요청해요. 2026년 6월 회사 및 학교 계정용으로 정식 출시됐어요. 이 가이드에서는 하는 일, 라이선스와 Copilot Credits 구조, 설정하는 법, 승인 방식, 그리고 Claude Cowork, Claude Code, Codex와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Copilot Cowork란 무엇이고 어디에 쓰나",
      text: [
        "Microsoft는 Cowork를 Microsoft 365 전반에서 나 대신 여러 단계의 작업을 처리하는 에이전트 시스템이라고 설명해요. 의도된 용도로는 한 대화 안에서 주제를 조사하고 문서를 써서 이해관계자에게 이메일로 보내는 일, 정기 브리핑과 보고서, 들어오는 이메일이나 Teams 메시지에 반응하는 작업 등이 있어요.",
      ],
      points: [
        "Microsoft 클라우드의 격리된 환경에서 실행돼요. 파일은 OneDrive와 SharePoint에서 만들고 읽으며, 내 로컬 기기의 파일에는 접근할 수 없어요.",
        "내 브라우저를 쓸 수 있어요: 웹용 Cowork에서는 브라우저 작업이 내 기기의 숨겨진 Microsoft Edge 탭에서 기존 로그인 상태로 실행돼요.",
        "여러 회사의 모델을 써요: 기본값이 Auto인 모델 선택기에서 테넌트 설정에 따라 GPT, Claude, Grok 모델을 고를 수 있어요. EU Data Boundary에 속한 테넌트는 GPT 모델만 쓸 수 있어요.",
        "스킬과 플러그인: OneDrive에 `SKILL.md` 파일로 사용자 지정 스킬을 최대 50개까지 추가할 수 있어요. 직무·업종별 플러그인으로는 Cowork용 Accounting, Finance, Capital Markets가 있고, 그 밖의 플러그인과 커넥터가 Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk, MCP 앱을 지원해요.",
        "반복 작업: 사용자당 최대 25개의 예약 프롬프트를 평소 말로 작성할 수 있고, 조건에 맞는 이메일이 오거나 Teams 메시지가 올라오면 실행되는 이벤트 기반 작업도 있어요.",
        "작업 추적: Tasks 보기에서 In progress, Needs input, Done, Failed로 필터링하고, Automations 페이지에서 예약 작업과 이벤트 기반 작업을 확인하며, Projects(2026년 10월)로 관련 작업, 지침, 파일을 한데 모아요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork 비용, 크레딧, 라이선스",
      text: [
        "Microsoft Learn, Microsoft Support, Microsoft의 Copilot Credits Guide(2026년 11월)를 바탕으로 2026년 11월 13일에 확인했고, 미국 달러 기준이에요. Cowork는 Microsoft 365 Copilot 라이선스에 더해 사용량에 따라 Copilot Credits로 청구돼요. 작업당 정해진 크레딧 비용은 없고, 모델, 실행 시간, 컨텍스트, 사용한 도구에 따라 달라져요.",
      ],
      headers: ["항목", "비용 또는 요건"],
      rows: [
        ["Microsoft 365 Copilot 라이선스", "회사 또는 학교 계정에 필요하며 사용자에게 할당. 가격은 Cowork 문서에 나와 있지 않음"],
        ["Copilot Credits 종량제", "Copilot Credit당 $0.01, 매월 후불 청구"],
        ["Copilot Credit Pre-Purchase Plan(P3)", "1년 치를 선불로 사는 풀로, 5%(300,000 크레딧)부터 20%(300,000,000 크레딧)까지 할인. 쓰지 않은 크레딧은 기간이 끝나면 소멸"],
        ["관리자 설정", "Cowork 활성화, 사용량 기반 청구 켜기, Cowork를 선택한 지출 정책. 관리자는 사용자별 또는 그룹별 크레딧 한도를 정할 수 있음"],
        ["개인 Microsoft 계정", "프리뷰. 대상 Microsoft 365 구독 필요, 가격은 나와 있지 않음"],
        ["교육용", "교직원은 사용 가능, 학생은 대상 아님"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Copilot Cowork 설정하는 법",
      steps: [
        {
          title: "라이선스 받기",
          text: "회사 또는 학교 계정이라면 나에게 할당된 Microsoft 365 Copilot 라이선스가 필요해요. 개인 계정은 프리뷰이고 대상 Microsoft 365 구독이 필요해요.",
        },
        {
          title: "관리자에게 켜 달라고 하기",
          text: "관리자가 Cowork를 활성화하고, 사용량 기반 청구를 켜고, Cowork를 선택한 지출 정책으로 접근 권한을 줘요. 브라우저를 쓰려면 Cowork Browsing도 켜야 해요.",
        },
        {
          title: "일하는 곳에서 Cowork 열기",
          text: "웹(Edge나 Chrome 권장), Windows와 macOS용 Microsoft Copilot 데스크톱 앱, iOS와 Android용 모바일 앱, 또는 Outlook과 Teams 안에서 쓸 수 있어요.",
        },
        {
          title: "작업 설명하기",
          text: "예를 들어 주제를 조사하고 문서를 써서 필요한 사람들에게 이메일로 보내 달라고 하세요. 모델은 Auto로 두거나 직접 고르고, 추론 강도의 기본값은 Medium이에요.",
        },
        {
          title: "스킬과 자동화 추가하기",
          text: "사용자 지정 스킬을 `SKILL.md` 파일로 OneDrive에 넣고, 예약 프롬프트를 평소 말로 작성하거나, 조건에 맞는 이메일이나 Teams 메시지가 오면 작업이 실행되게 설정하세요.",
        },
      ],
      source: { label: "출처: Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Copilot Cowork에서 주도권을 지키는 방법",
      points: [
        "이메일 보내기, Teams에 게시하기, 회의 일정 잡기 같은 민감한 작업 전에는 미리 보기가 있는 승인 창을 띄워요. 중간 및 높은 위험 작업에는 위험 수준이 표시돼요.",
        "한 번만 승인하거나, 이 대화가 끝날 때까지 비슷한 작업의 확인을 건너뛰거나(이메일과 Teams는 수신자, 도메인, 항상 중에서 범위 지정), 취소할 수 있어요.",
        "이벤트 기반 작업은 기본적으로 초안을 만들고 승인을 기다리며, 어떤 작업이든 일시 정지, 재개, 취소할 수 있어요.",
        "OneDrive나 SharePoint의 파일과 폴더는 삭제할 수 없고, CAPTCHA, 비밀번호, MFA 코드, 계정 변경은 브라우저를 나에게 넘겨요.",
        "관리자는 지출 정책으로 접근을 관리하고, 사용자별 또는 그룹별 크레딧 한도를 정하며, Anthropic 모델을 포함한 모델 계열을 끌 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code, Codex",
      text: [
        "각 업체의 공식 문서와 가격 페이지에서 2026년 11월 13일에 확인한 내용이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요. [Claude Cowork 가이드](/personal-agent/claude-cowork)와 [Claude Code vs Codex](/blog/claude-code-vs-codex)도 참고하세요.",
        "나란히 비교: [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). 가이드: [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["제조사", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["용도", "Microsoft 365 전반의 여러 단계 작업", "코딩 외 지식 업무", "코딩: 코드베이스를 읽고, 파일을 편집하고, 명령을 실행", "코딩: 저장소의 코드를 살펴보고, 편집하고, 실행"],
        ["실행 위치", "Microsoft 클라우드, OneDrive와 SharePoint 사용. 로컬 파일 없음", "Anthropic 클라우드. 로컬 파일은 Claude Desktop으로", "내 컴퓨터의 터미널, IDE, 데스크톱 앱. 웹에서는 클라우드 세션", "CLI, IDE 확장, ChatGPT 데스크톱 앱. Codex Cloud"],
        ["모델", "테넌트 설정에 따라 GPT, Claude, Grok 모델", "Claude 모델", "Claude 모델", "OpenAI 모델"],
        ["결제 방식", "Microsoft 365 Copilot 라이선스와 Copilot Credits", "Claude 유료 요금제, Pro 월 $20부터", "Claude 유료 요금제, Pro 월 $20부터. 또는 API 크레딧", "Plus 월 $20 같은 ChatGPT 요금제. 또는 OpenAI API 키"],
        ["반복 작업", "예약 프롬프트. 이메일, Teams, 커넥터 이벤트", "매시간부터 매주까지 클라우드에서 실행되는 예약 작업", "클라우드와 데스크톱 예약 작업, `/loop`", "예약 작업. Gmail, Slack, GitHub 이벤트"],
        ["승인", "민감한 작업 전 미리 보기가 있는 승인 창", "Manual, Auto, Skip 모드", "`default`부터 `bypassPermissions`까지의 권한 모드", "Ask for approval, Approve for me, 또는 전체 액세스"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Microsoft 365는 Cowork에게, 저장소는 Crewmark에게",
      text: [
        "Copilot Cowork는 Outlook, Teams, OneDrive, SharePoint를 오가며 작업을 처리해요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 각 직원이 공유 보드에서 이슈를 가져가니, 저장소에서 하는 엔지니어링, SEO, 마케팅 업무가 일정에 맞춰 계속 진행돼요.",
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
          text: "설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Copilot Cowork 설정하기" },
  mid: {
    title: "내 코드베이스를 위한 AI 동료가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Copilot Cowork 자주 묻는 질문",
    items: [
      {
        q: "Copilot Cowork란 무엇인가요?",
        a: "Microsoft 365 Copilot 안의 에이전트로, Microsoft 365 전반에서 여러 단계의 작업을 처리해요. 이메일을 보내고, 회의 일정을 잡고, Word, Excel, PowerPoint, PDF 파일을 만들고 편집하고, Teams에 게시하고, OneDrive와 SharePoint 파일을 관리하고, 조직 내부를 검색하고, 심층 리서치를 실행해요. 민감한 작업 전에는 승인을 요청해요.",
      },
      {
        q: "Copilot Cowork는 얼마인가요?",
        a: "사용량은 Microsoft 365 Copilot 라이선스에 더해 Copilot Credits로 청구돼요. 종량제는 크레딧당 $0.01이고 매월 후불로 청구되며, 1년 Pre-Purchase Plan은 5%에서 20%까지 할인돼요. 작업당 크레딧은 모델, 실행 시간, 컨텍스트, 사용한 도구에 따라 달라요.",
      },
      {
        q: "Copilot Cowork에는 어떤 라이선스가 필요한가요?",
        a: "회사 또는 학교 계정이라면 나에게 할당된 Microsoft 365 Copilot 라이선스와 활성화된 Cowork, 그리고 관리자가 켠 사용량 기반 청구와 Cowork를 선택한 지출 정책이 필요해요. 개인 Microsoft 계정은 프리뷰이고 대상 Microsoft 365 구독이 필요해요. 교육용에서는 교직원은 쓸 수 있고 학생은 쓸 수 없어요.",
      },
      {
        q: "Copilot Cowork에는 어떻게 로그인하나요?",
        a: "접근 권한이 있는 계정으로 로그인하세요. 회사 또는 학교 계정(정식 출시)이나 개인 Microsoft 계정(프리뷰)이요. Cowork는 웹, Windows와 macOS용 Microsoft Copilot 데스크톱 앱, iOS와 Android용 모바일 앱, 그리고 Outlook과 Teams 안에서 쓸 수 있어요.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot: 무엇이 다른가요?",
        a: "Copilot Cowork는 Microsoft 365 Copilot 안의 에이전트예요. 쓰려면 Microsoft 365 Copilot 라이선스와 사용량 기반 청구가 필요해요. Cowork 사용량은 라이선스에 더해 Copilot Credits로 청구되기 때문이에요.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork: 무엇이 다른가요?",
        a: "Copilot Cowork는 Microsoft 365 전반에서 일하고, 파일을 OneDrive와 SharePoint에 두며, 로컬 파일에는 접근할 수 없고, 라이선스에 더해 Copilot Credits로 청구돼요. Claude Cowork는 Claude 앱 안의 Anthropic 에이전트로, Pro 월 $20부터 Claude 유료 요금제에 포함되고, Claude Desktop으로 로컬 파일에 접근해요. Copilot Cowork의 모델 선택기에도 테넌트 설정에 따라 Claude 모델이 들어갈 수 있어요.",
      },
    ],
  },
  cta: {
    title: "Microsoft 365 작업은 Cowork에게 맡기세요. 코딩 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 Microsoft Learn의 Copilot Cowork 문서, Microsoft의 Copilot Credits Guide, Microsoft Support와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Microsoft, Anthropic, OpenAI와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
