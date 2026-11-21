import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: 기능, 가격, 크레딧, 설정 정리",
    description:
      "Lindy AI 정리: 받은편지함, 캘린더, 회의, Slack을 맡는 호스팅 비서. 크레딧 가격, 루틴, 승인, 사용하는 곳, Relevance AI와의 비교.",
  },
  breadcrumb: "Lindy",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Lindy",
    title: "Lindy AI: 비서가 하는 일, 비용, 설정하는 법",
    lead: "Lindy는 스스로를 연결된 도구들을 오가며 일을 끝내는 AI 직원이라고 소개해요. 호스팅되는 비서 하나가 사용자마다 개인 비서로, Slack에서는 공유 팀원으로 일해요. 받은편지함, 캘린더, 회의, 리서치, 보고서, 후속 조치를 처리하고, 반복 작업은 루틴으로 실행하며, 외부에 영향을 주는 일은 모두 내 승인을 기다려요. 이 가이드에서는 하는 일, 크레딧 가격 구조, 설정하는 법, 승인 방식, 그리고 Relevance AI, Grok Bot과의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Lindy란",
      points: [
        "에이전트 빌더가 아닌 비서 하나: 문서는 워크스페이스마다 Lindy 하나를 설명해요. 유료 광고, SEO와 콘텐츠, 부기, 채용, 고객 지원 등 여러 직무용으로 홍보돼요.",
        "두 가지 사용 방식: iMessage, 이메일, Slack DM으로 개인 비서처럼 혼자 쓰거나, 팀이 Slack에서 @멘션해 리서치, 보고서 작성, CRM 업데이트를 맡기는 공유 팀원으로 써요.",
        "배워요: 40개 이상의 내장 스킬과 직접 만든 스킬, 편집할 수 있는 기억, 그리고 작업을 한 번 보여 주면 익히는 Watch and Learn.",
        "반복 작업은 루틴으로: 루틴마다 트리거(일정 또는 이벤트), 프롬프트, 결과를 보낼 곳이 있어요. 내장 루틴으로는 매일 브리핑, 이메일 초안 작성과 라벨 지정, 후속 리마인드, 회의 녹화·준비·일정 잡기가 있어요.",
        "작업마다 모델을 고르고, 모델을 직접 고를 수도 있어요.",
        "호스팅형: Lindy는 클라우드에서 실행되고, Lindy라는 이름으로 사업하는 Crivello Corp가 만들어요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Lindy 가격: 크레딧과 시트",
      text: [
        "2026년 11월 13일 lindy.ai/pricing 기준이에요. 연간 결제 가격은 나와 있지 않아요. Slack에서 Lindy를 @멘션만 하는 사람을 포함해 워크스페이스의 모든 활성 사용자에게 요금이 청구되고, 월 크레딧은 이월되지 않아요.",
      ],
      headers: ["옵션", "가격", "제공 내용"],
      rows: [
        ["무료 시작", "$0, 신용카드 필요 없음", "7일 동안 쓸 수 있는 $50 크레딧. 무료 주간은 팀원마다 한 번"],
        ["활성 사용자당", "월 $29.99부터", "활성 사용자마다 3,000 크레딧, 팀 전체가 함께 씀"],
        ["더 큰 크레딧 등급", "월 최대 $9,999.50", "최대 1,750,000 크레딧"],
        ["충전", "1,000 크레딧당 $10", "풀이 바닥나면 크레딧을 쓰는 작업은 다음 주기나 충전 때까지 멈춤"],
        ["Enterprise", "맞춤", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Lindy 설정하는 법",
      steps: [
        {
          title: "무료 크레딧으로 시작하기",
          text: "무료 시작으로 7일 동안 쓸 수 있는 $50 크레딧을 받아요. 신용카드는 필요 없어요.",
        },
        {
          title: "대화할 곳 고르기",
          text: "Slack, 이메일, iMessage와 SMS, 전화 통화, Gmail의 Chrome 확장 프로그램, 또는 Lindy가 한 일을 보여 주는 웹 Home 페이지. Microsoft Teams는 출시 예정으로 나와 있어요.",
        },
        {
          title: "도구 연결하기",
          text: "Gmail, Google Calendar, Google Meet·Zoom·Microsoft Teams 회의 녹화, MCP 서버, 저장된 API 자격 증명.",
        },
        {
          title: "일하는 방식 가르치기",
          text: "내장 스킬을 쓰고, 직접 스킬을 추가하고, 기억을 편집하고, Watch and Learn으로 작업을 한 번 보여 주세요.",
        },
        {
          title: "루틴 설정하기",
          text: "루틴마다 트리거, 프롬프트, 결과를 보낼 곳을 정하거나, 매일 브리핑 같은 내장 루틴에서 시작하세요. 워크스페이스 루틴은 Slack으로 실행되고 관리자만 설정할 수 있어요.",
        },
      ],
      source: { label: "출처: Lindy 문서", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Lindy에서 주도권을 지키는 방법",
      points: [
        "이메일 보내기, 티켓 업데이트, 다른 채널에 게시, 문서 공개처럼 외부에 영향을 주는 일은 모두 내 승인을 기다려요.",
        "승인된 출처에서 읽기만 하는 조회는 승인이 필요 없어요.",
        "관리자는 시트당 크레딧 한도를 정할 수 있고, 워크스페이스 루틴은 관리자만 설정해요.",
        "크레딧 풀이 바닥나면 Lindy는 다음 주기나 충전 때까지 크레딧을 쓰는 작업을 멈춰요.",
        "기억은 편집할 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI, Grok Bot",
      text: [
        "각 업체의 공식 사이트, 가격 페이지, 문서에서 2026년 11월 13일에 확인한 내용이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요. [Grok Bot 가이드](/personal-agent/grok-bot)도 참고하세요.",
        "나란히 비교: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). 가이드: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["제조사", "Crivello Corp(Lindy)", "OnSearch Pty Ltd(Relevance AI)", "xAI"],
        ["무엇인가요", "워크스페이스마다 하나인 호스팅 비서: 개인 비서이자 Slack 팀원", "에이전트와 멀티 에이전트 Workforce를 만드는 로우코드/노코드 플랫폼", "호스팅 AI 팀원: Bot마다 자기 클라우드 컴퓨터"],
        ["여러 에이전트", "언급 없음. 문서는 워크스페이스당 Lindy 하나를 설명", "있음: 시각적 캔버스에서 에이전트를 연결", "있음: Bot끼리 메시지를 주고받고 그룹 채팅에서 조율"],
        ["사용하는 곳", "Slack, 이메일, iMessage와 SMS, 전화, Chrome 확장 프로그램, 웹", "웹 앱", "macOS와 iOS 앱, Slack, Microsoft Teams, 통화"],
        ["반복 작업", "일정이나 이벤트로 실행되는 루틴", "예약 작업과 앱 트리거", "일정에 따라 실행되는 루틴"],
        ["승인", "외부에 영향을 주는 일은 모두 승인 대기", "이메일과 Slack으로 하는 승인 워크플로와 에스컬레이션", "승인이 필요하면 Bot이 확인을 요청. Auto Review"],
        ["가격", "7일간 $50 무료 크레딧. 활성 사용자당 월 $29.99부터", "영업팀을 통한 Enterprise 요금제", "Premium $30, Super $100, Ultra $200(월)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "받은편지함은 Lindy에게, 저장소는 Crewmark에게",
      text: [
        "Lindy는 받은편지함, 캘린더, 회의, Slack을 오가며 일해요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 각 직원이 공유 보드에서 이슈를 가져가니, 저장소에서 하는 엔지니어링, SEO, 마케팅 업무가 일정에 맞춰 처리돼요.",
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
        { title: "할 수 있는 일 보기", text: "설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Lindy 설정하기" },
  mid: {
    title: "내 코드베이스를 위한 AI 직원이 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Lindy AI 자주 묻는 질문",
    items: [
      {
        q: "Lindy AI란 무엇인가요?",
        a: "연결된 도구들을 오가며 일하는 호스팅 AI 비서예요. 사용자마다 개인 비서로, Slack에서는 공유 팀원으로 일하며, 받은편지함, 캘린더, 회의, 리서치, 보고서, 후속 조치를 처리하고 반복 작업은 루틴으로 실행해요.",
      },
      {
        q: "Lindy는 얼마인가요?",
        a: "7일 동안 쓸 수 있는 $50 크레딧으로 신용카드 없이 시작할 수 있어요. 그 뒤에는 워크스페이스의 모든 활성 사용자에게 요금이 청구되며, 1인당 3,000 크레딧에 월 $29.99부터이고 크레딧은 팀 전체가 함께 써요. 충전은 1,000 크레딧당 $10이고, Enterprise 가격은 맞춤이에요.",
      },
      {
        q: "Lindy는 에이전트 하나인가요, 여러 개인가요?",
        a: "하나예요. 문서는 워크스페이스마다 Lindy 하나를 설명하고, 루틴도 별도의 봇이 아니에요. 여러 직무용으로 홍보되고 내장·사용자 지정 스킬, 기억, Watch and Learn으로 배우지만, 별도의 에이전트 페르소나에 대한 언급은 없어요.",
      },
      {
        q: "Lindy 앱이 있나요?",
        a: "Lindy는 웹 Home 페이지, Slack, 이메일, iMessage와 SMS, 전화 통화, Gmail의 Chrome 확장 프로그램으로 써요. 문서에는 데스크톱 앱이나 모바일 앱이 나오지 않고, Microsoft Teams는 출시 예정으로 나와 있어요.",
      },
      {
        q: "Lindy에는 어떻게 가입하나요?",
        a: "무료 $50 크레딧으로 시작하세요. 신용카드가 필요 없고, 7일 동안 쓸 수 있으며, 팀원마다 한 번만 받을 수 있어요. 그 뒤에는 모든 활성 사용자가 유료 시트를 써요. Slack에서 합류한 팀원은 7일 무료 체험을 받고, 직접 가입하면 바로 청구돼요.",
      },
      {
        q: "Lindy가 묻지 않고 행동하나요?",
        a: "외부에 영향을 주는 일은 그렇지 않아요. 이메일 보내기, 티켓 업데이트, 다른 채널에 게시, 문서 공개는 내 승인을 기다려요. 승인된 출처에서 읽기만 하는 조회는 승인이 필요 없어요.",
      },
    ],
  },
  cta: {
    title: "받은편지함은 비서에게 맡기세요. 코딩 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 lindy.ai, Lindy 가격 페이지, Lindy 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Lindy, Relevance AI, xAI와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
