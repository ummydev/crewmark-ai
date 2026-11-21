import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: 가격, 설정, Claude Code 비교",
    description:
      "Claude Cowork 정리: Claude 앱에서 코딩 외 업무를 맡는 Anthropic 에이전트. 요금제, 클라우드 실행, 예약 작업, 승인, Claude Code와의 차이.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Anthropic",
    title: "Claude Cowork: Anthropic의 AI 동료가 하는 일과 쓰는 법",
    lead: "Claude Cowork는 Claude 앱에서 지식 업무를 맡는 Anthropic의 에이전트예요. 리서치 보고서, 스프레드시트, 발표 자료, 깔끔하게 정리된 폴더처럼 원하는 결과를 설명하면, Claude가 단계를 계획하고 내 파일, 연결된 앱, 브라우저에서 그 단계를 밟아 나간 뒤 결과물을 돌려줘요. 작업은 Anthropic의 클라우드에서 실행되어 노트북을 닫아도 계속돼요. 이 가이드에서는 하는 일, 포함된 요금제, 설정하는 법, 실행 전에 묻는 방식, Claude Code와의 차이를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Cowork란",
      points: [
        "코딩 외 업무를 위한 에이전트: 리서치, 분석, 문서, 수식이 제대로 작동하는 스프레드시트, 슬라이드 자료, 파일 작업. Anthropic의 FAQ에서도 Cowork는 이런 일에, Claude Code는 소프트웨어 엔지니어링에 맞춰져 있다고 설명해요.",
        "클라우드에서 실행: 세션은 Anthropic 서버의 격리된 환경에서 실행되고 내 Claude 계정에 저장돼요. Pro, Max, Ultra에서는 2026년 10월 6일부터 새 작업이 클라우드에서 실행되고 있어요.",
        "Claude Desktop으로 내 컴퓨터에 접근: 로컬 파일, 로컬 커넥터, 브라우저 사용, 컴퓨터 사용에는 그 컴퓨터에서 데스크톱 앱이 열려 있어야 해요.",
        "반복 작업: 예약 작업은 매시간, 매일, 매주 또는 평일마다 실행되고, 실행마다 클라우드에서 별도 세션으로 돌아가요.",
        "Claude의 일부: 2026년 9월부터 Cowork는 일반 Claude 대화로 통합되고 있어요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude Cowork 가격: 포함된 요금제",
      text: [
        "2026년 11월 13일 claude.com/pricing 기준 가격으로, 미국 달러이며 세금은 제외예요. Anthropic은 요금제별로 Cowork를 얼마나 쓸 수 있는지 공개하지 않아요. Pro 카드에는 Cowork가 채팅보다 한도를 빨리 소진한다고 적혀 있어요.",
      ],
      headers: ["요금제", "가격", "Claude Cowork"],
      rows: [
        ["Free", "$0", "미포함"],
        ["Pro", "월 $20, 연간 결제 시 월 $17(연 $200)", "포함"],
        ["Max", "월 $100", "포함"],
        ["Ultra", "월 $200", "포함"],
        ["Team(2~150명)", "Standard 시트 연간 결제 시 월 $20, 월간 결제 시 $25. Premium 시트 $100 또는 $125", "포함. 웹과 모바일은 베타"],
        ["Enterprise", "연간 결제 시 시트당 월 $20, 최소 20시트, 여기에 API 요금 기준 사용료", "포함. 클라우드 세션, 웹, 모바일은 소유자가 켜기 전까지 꺼져 있음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Cowork 설정하는 법",
      steps: [
        {
          title: "Claude 유료 요금제 준비하기",
          text: "Pro, Max, Ultra, Team, Enterprise 중 하나가 필요해요. Enterprise에서는 소유자가 Cowork를 켜야 할 수도 있어요.",
        },
        {
          title: "로컬 작업을 하려면 Claude Desktop 설치하기",
          text: "Cowork는 웹과 iOS, Android에서도 돌아가지만, 로컬 파일, 브라우저 사용, 컴퓨터 사용에는 macOS나 Windows용 Claude Desktop이 필요해요(Linux는 베타).",
        },
        {
          title: "단계가 아니라 결과를 설명하기",
          text: "무엇을 돌려받고 싶은지, 입력 자료가 어디 있는지 말하세요. 파일, Google Drive, Gmail, Microsoft 365, Slack 같은 연결된 앱, 또는 웹이요.",
        },
        {
          title: "묻는 방식 고르기",
          text: "동작마다 직접 승인하려면 Manual을, 일상적인 동작은 안전 검토가 승인하게 하려면 Auto를 고르세요. 커넥터 도구마다 항상 허용, 승인 필요, 차단으로 설정할 수도 있어요.",
        },
        {
          title: "일정으로 만들기",
          text: "작업에서 `/schedule`을 입력하거나 Scheduled 페이지에서 매시간, 매일, 매주, 평일, 또는 필요할 때 실행을 고르세요.",
        },
      ],
      source: { label: "출처: Anthropic 고객센터, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Claude Cowork에서 주도권을 지키는 방법",
      points: [
        "세 가지 승인 모드: Manual은 동작 전에 물어요. Auto는 동작마다 안전 검토를 거쳐 위험한 동작을 막고, 계속 막히면 다시 묻는 방식으로 돌아가요. Skip은 묻지 않아요. Pro, Max, Ultra, Team의 기본값은 Auto이고, Enterprise는 Manual이에요.",
        "파일을 영구 삭제하기 전에 물어보고, 컴퓨터 사용은 애플리케이션마다 먼저 물어봐요.",
        "Team과 Enterprise 관리자는 Auto를 끄고, 쓰기 권한이 있는 커넥터 도구마다 승인을 필수로 할 수 있어요.",
        "실행 중인 작업은 데스크톱 앱, 웹, 휴대폰에서 방향을 바꾸거나 멈출 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work, Copilot Cowork",
      text: [
        "각 업체의 공식 페이지에서 2026년 11월 13일에 확인한 내용이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요.",
        "나란히 비교: [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). 가이드: [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["제조사", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["용도", "코딩 외 지식 업무", "소프트웨어 엔지니어링", "검토할 결과물이 나오는 작업", "Microsoft 365 전반의 업무"],
        ["실행 위치", "Anthropic 클라우드. 로컬은 Claude Desktop으로", "기본은 내 컴퓨터. 웹에서는 클라우드 세션", "OpenAI 클라우드, 또는 데스크톱 앱으로 내 컴퓨터", "Microsoft 클라우드, OneDrive와 SharePoint 사용"],
        ["이용 대상", "Claude 유료 요금제", "Claude 유료 요금제", "ChatGPT 요금제. Free와 Go는 제한적", "Microsoft 365 Copilot 라이선스와 Copilot Credits"],
        ["예약", "매시간부터 매주까지, 클라우드에서", "클라우드와 데스크톱 예약 작업, `/loop`", "예약 작업과 이벤트 트리거", "예약 프롬프트와 이벤트로 시작되는 작업"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "문서는 Cowork에게, 코드베이스는 Crewmark에게",
      text: [
        "Claude Cowork는 내가 맡기는 지식 업무를 처리해요. Crewmark는 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 그래서 저장소에서 하는 엔지니어링, SEO, 마케팅 업무가 일정에 맞춰 처리되고 보드에서 추적돼요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 골라요. [AI SEO 전문가](/ai-employees/seo-specialist) 같은 직무가 있어요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        { title: "할 수 있는 일 보기", text: "설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Cowork 설정하기" },
  mid: {
    title: "내 코드베이스를 위한 AI 동료가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Cowork 자주 묻는 질문",
    items: [
      {
        q: "Claude Cowork란 무엇인가요?",
        a: "Claude 앱에서 코딩 외 지식 업무를 맡는 Anthropic의 에이전트예요. 원하는 결과를 설명하면 내 파일, 연결된 앱, 브라우저에서 단계를 밟아 나간 뒤 문서, 스프레드시트, 발표 자료 같은 완성된 파일을 돌려줘요.",
      },
      {
        q: "Claude Cowork는 얼마인가요?",
        a: "Claude 유료 요금제에 포함돼요. Pro 월 $20(연간 결제 시 월 $17), Max $100, Ultra $200, 그리고 Team과 Enterprise 시트요. Claude Free에는 포함되지 않아요.",
      },
      {
        q: "Claude Cowork vs Claude Code: 무엇이 다른가요?",
        a: "Cowork는 Claude 앱에서 리서치, 문서, 스프레드시트 같은 지식 업무를 맡아요. Claude Code는 내 저장소에서 소프트웨어 엔지니어링을 하는 Anthropic의 에이전트예요. Anthropic은 Cowork가 Claude Code와 같은 아키텍처를 쓴다고 밝혔어요.",
      },
      {
        q: "Claude Cowork는 Windows와 모바일에서 쓸 수 있나요?",
        a: "네. Claude Desktop으로 macOS와 Windows에서 쓸 수 있고(Linux는 베타), Pro, Max, Ultra, Team에서는 웹과 iOS·Android용 Claude에서도 쓸 수 있어요. 로컬 파일, 브라우저 사용, 컴퓨터 사용에는 데스크톱 앱이 필요해요.",
      },
      {
        q: "Claude Cowork가 예약된 일정에 따라 작업할 수 있나요?",
        a: "네, 모든 유료 요금제에서요. 작업에서 `/schedule`을 쓰거나 Scheduled 페이지를 이용하세요. 실행마다 클라우드에서 별도 세션으로 돌아가니, 작업에 로컬 파일이 필요하지 않다면 컴퓨터를 꺼 둬도 돼요.",
      },
      {
        q: "노트북을 닫아도 Claude Cowork가 일하나요?",
        a: "클라우드 작업은 Anthropic 서버에서 계속 실행돼요. 로컬 파일, 로컬 커넥터, 브라우저가 필요한 작업은 Claude Desktop이 다시 열릴 때까지 거기에 접근하지 못해요.",
      },
    ],
  },
  cta: {
    title: "문서는 Cowork에게 맡기세요. 에이전트에게도 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 claude.com/product/cowork, claude.com/pricing, Anthropic 고객센터와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, Microsoft와 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
