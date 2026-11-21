import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI 대안 2026: 무료·오픈 소스 옵션",
    description:
      "Lindy AI 대안 비교: Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI, 오픈 소스 OpenWorker와 OpenBot, 그리고 무료 선택지까지.",
  },
  breadcrumb: "Lindy 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Lindy",
    title: "Lindy AI 대안: 호스팅 AI 동료, 에이전트 플랫폼, 오픈 소스 비서",
    lead: "Lindy는 받은편지함, 캘린더, 회의, Slack을 오가며 일하고, 반복 루틴을 실행하며, 외부에 영향을 주는 일은 먼저 물어보는 호스팅 AI 비서예요. 요금은 크레딧으로 청구돼요. 7일간 쓸 수 있는 무료 크레딧 $50로 시작하고, 이후에는 활성 사용자당 월 $29.99(3,000 크레딧)부터 내요. 월 크레딧은 이월되지 않고, Slack에서 Lindy를 @멘션만 하는 사람을 포함해 모든 활성 사용자에게 요금이 청구돼요. 호스팅형과 오픈 소스를 아우르는 대안 8가지를 각각의 비용과 함께 정리했어요.",
    cta: "시작하기",
    secondary: "비교해 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Lindy 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 업체의 공식 페이지, 문서, GitHub에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. 순위가 아니에요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (참고용)",
          "받은편지함, 캘린더, 회의, Slack을 맡는 호스팅 AI 비서",
          "아니요",
          "7일간 무료 크레딧 $50. 이후 활성 사용자당 월 $29.99(3,000 크레딧)부터",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "각자 클라우드 컴퓨터를 가진 xAI의 호스팅 AI 팀원",
          "아니요",
          "Premium 월 $30",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "Claude 앱에서 코딩 외 지식 업무를 맡는 Anthropic의 에이전트",
          "아니요",
          "Claude Pro 월 $20, 연간 결제 시 월 $17",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 전반에서 여러 단계의 작업을 처리하는 Microsoft의 에이전트",
          "아니요",
          "Microsoft 365 Copilot 라이선스에 더해 Copilot Credits 크레딧당 $0.01",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "검토할 결과물이 나오는 작업을 위한 OpenAI의 ChatGPT Work 모드",
          "아니요",
          "Free($0)와 Go(월 $8): 데스크톱 앱에서만 제한적. Plus 월 $20",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "AI 에이전트와 멀티 에이전트 팀을 위한 호스팅 로우코드 플랫폼",
          "아니요",
          "영업팀을 통한 Enterprise만, Free 요금제 종료",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "내 컴퓨터에서 실행되는 AI 동료 데스크톱 앱",
          "예, MIT",
          "가격 표시 없음, 내 모델 키나 로컬 모델 사용",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스",
          "예, MIT(별도 라이선스인 CopilotKit Intelligence 사용)",
          "개인 프로젝트는 무료, Business는 활성 사용자당 월 최대 $29",
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
      id: "hosted",
      title: "xAI, Anthropic, Microsoft, OpenAI의 호스팅 AI 동료",
      text: [
        "Lindy처럼 업체의 클라우드에서 실행되고, 대화로 일을 받아요. 더 많은 도구를 [AI 동료 도구 비교](/blog/ai-coworker)에서 나란히 볼 수 있어요.",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI): 각자 클라우드 컴퓨터를 가진 Bot이 내 도구에 로그인하고, Slack과 Microsoft Teams에서 일하며, 일정에 따라 루틴을 실행하고 서로 메시지를 주고받아요. 바로 쓸 수 있는 Bot으로 Sales Outbound, Talent Scout, Chief of Staff 등이 있어요. Premium(월 $30), Super(월 $100), Ultra(월 $200)에 포함되고, 월 단위로 결제하며 추가 사용량은 토큰 비용으로 청구돼요. Microsoft Teams를 포함해 서로 다른 일을 맡은 여러 Bot을 원한다면 고르세요. [Grok Bot 가이드](/personal-agent/grok-bot)를 참고하세요.",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic): 원하는 결과를 설명하면 Claude가 내 파일, Gmail이나 Slack 같은 연결된 앱, 브라우저에서 리서치, 문서, 수식이 작동하는 스프레드시트, 슬라이드 작업을 해 나가요. 예약 작업은 클라우드에서 매시간, 매일, 매주 또는 평일마다 실행돼요. Claude 유료 요금제에 포함되며, Pro 월 $20(연간 결제 시 월 $17), Max $100, Ultra $200, 그리고 Team과 Enterprise 시트가 있어요. 받은편지함 관리보다 완성된 파일을 돌려받고 싶다면 고르세요.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): 이메일을 보내고, 회의 일정을 잡고, Word, Excel, PowerPoint 파일을 편집하고, Teams에 게시하며, 민감한 작업 전에는 승인 창을 띄워요. Microsoft 365 Copilot 라이선스가 필요하고, 사용량은 Copilot Credits로 크레딧당 $0.01씩 청구돼요. 회사가 Outlook과 Teams로 돌아간다면 고르세요.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): 검토할 결과물이 나오는 작업을 위한 ChatGPT의 Work 모드로, Slack, Google Drive, SharePoint, 이메일, 캘린더, CRM용 플러그인과 예약 작업이 있고, 대상 요금제에서는 Gmail, Slack, GitHub 트리거도 쓸 수 있어요. Free와 Go는 데스크톱 앱에서 제한적으로 쓸 수 있고, 전체 기능은 Plus 월 $20부터예요. 이미 ChatGPT를 쓰고 있다면 고르세요.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "팀을 위한 에이전트 플랫폼: Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai): 각자 지침, 도구, 지식을 가진 전문 에이전트를 만들고, 이를 AI Workforce라고 부르는 멀티 에이전트 팀으로 연결하는 호스팅 로우코드 플랫폼으로, 영업, 고객 지원, 운영 업무용이에요. 2026년 11월 13일 기준 가격 페이지에는 영업팀을 통한 Enterprise만 있고, 문서에는 Free 요금제가 종료됐다고 나와 있어요. 회사가 노코드 에이전트 여러 개와, 회사 안에 함께 투입되는 배포 지원 팀을 원한다면 고르세요. [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)와 [Relevance AI 가격](/pricing/relevance-ai)을 참고하세요.",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "오픈 소스 Lindy 대안",
      text: [
        "둘 다 내 컴퓨터나 서버에서 내가 고른 모델로 실행되고, 크레딧으로 청구하지 않아요. 모델 제공자에게 직접 비용을 내요.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): macOS와 Windows용 MIT 라이선스 AI 동료 데스크톱 앱으로, 오픈 베타 중이에요. GitHub, Slack, 이메일, 캘린더를 오가며 일하고, Slack에서 @멘션하면 작업이 내 데스크톱에서 실행되고 답이 스레드로 돌아와요. 아침 브리핑과 주간 보고서를 예약할 수 있고, 예약 실행은 자기 동작을 스스로 승인하지 않으며 그 요청은 받은편지함에서 기다려요. OpenAI, Anthropic, Google Gemini, OpenRouter 키나 로컬 모델을 쓰면 돼요. 키를 내 컴퓨터에 둔 채 Lindy 같은 사무 업무 도움을 받고 싶다면 고르세요.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): 각 Bot이 자기 브라우저, 파일, 도구, 루틴, 메모리, 승인을 갖는 셀프 호스팅 가능한 워크스페이스예요. Mac과 Windows용 데스크톱 앱으로, 또는 팀용으로 Kubernetes에서 실행되고, Slack과 Teams 등을 위한 프런트엔드가 있어요(일부는 얼리 액세스). 개인 프로젝트는 무료이고, OpenBot for Business는 활성 사용자당 월 최대 $29에, 월 모델 지출 중 $5,000를 넘는 부분의 5%가 더해져요. 팀을 위한 AI 동료를 내 인프라에서 호스팅하고 싶다면 고르세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Lindy 대안 고르는 법",
      steps: [
        {
          title: "누가 쓸지 세어 보세요",
          text: "Lindy는 Slack에서 @멘션만 하는 사람을 포함해 모든 활성 사용자에게 청구해요. Grok Bot은 개인 요금제를 월 $30부터 안내하고, Copilot Cowork는 Microsoft 365 Copilot 라이선스가 필요하며 Copilot Credit마다 청구해요. OpenWorker는 가격 표시가 없고, OpenBot은 개인 프로젝트에 무료예요.",
        },
        {
          title: "사용량을 어떻게 낼지 정하세요",
          text: "Lindy의 월 크레딧은 이월되지 않고, 충전은 1,000 크레딧당 $10예요. Grok Bot과 Claude, ChatGPT 요금제는 사용량 한도가 있는 구독이에요. OpenWorker와 OpenBot은 모델 제공자에게 직접 비용을 내요.",
        },
        {
          title: "일하는 곳에 맞추세요",
          text: "Slack과 Microsoft Teams라면 Grok Bot, Microsoft 365라면 Copilot Cowork, 돌려받을 문서와 스프레드시트가 있다면 Claude Cowork나 ChatGPT Work, 영업이나 고객 지원을 위한 여러 에이전트라면 Relevance AI예요.",
        },
        {
          title: "호스팅형과 셀프 호스팅 중에서 고르세요",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI는 호스팅형이에요. OpenWorker는 내 데스크톱에서, OpenBot은 내 노트북이나 내 Kubernetes 클러스터에서 실행돼요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Crewmark: 이미 결제 중인 Claude Code나 Codex 위의 AI 직원",
      text: [
        "Crewmark는 Lindy 같은 받은편지함 비서가 아니에요. AI 직원 팀을 위한 이슈 트래커로, 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화이고 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 이슈 상태를 최신으로 유지해요. Crewmark는 사용량을 청구하지 않아요. 에이전트는 이미 결제 중인 Claude나 ChatGPT 구독으로 돌아가고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요.",
        "Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함돼요. Pro(월 $5)와 Team(월 $10)은 출시 예정이고, 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 오픈 소스(GPL-3.0)예요. 자세한 내용은 [Crewmark 요금](/pricing)에 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "각 직원에게 직무, 목표, 프로젝트를 주세요. 예를 들어 SEO 전문가나 데이터 분석가예요. [AI 직원 직무](/ai-employees)를 참고하세요.",
        },
        {
          title: "반복 업무를 보드에 올리기",
          text: "이슈를 매일, 매주, 매월 반복되게 하세요. 때가 되면 이슈가 다시 열리고 담당 직원에게 알림이 가요. 리뷰나 권한이 필요한 에이전트는 이슈를 '조치 필요'로 바꾸고 기다려요.",
        },
        {
          title: "근무 시간 정하기",
          text: "하트비트는 근무 시간 동안 15분에서 24시간마다 각 직원을 깨워요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "크레딧마다 돈을 내고 싶지 않나요?",
    text: "Crewmark는 이미 가진 Claude Code나 Codex 구독으로 AI 직원을 돌려요. 직원 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "Lindy 대안 FAQ",
    items: [
      {
        q: "무료 Lindy 대안이 있나요?",
        a: "네. ChatGPT Free($0)에는 데스크톱 앱에서 제한적으로 쓰는 ChatGPT Work가 포함돼요. OpenWorker는 가격 표시 없이 내 모델 키나 로컬 모델로 돌아가고, OpenBot은 개인 프로젝트에 무료예요. Crewmark의 Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함돼요. Lindy 자체는 7일간 쓸 수 있는 $50 크레딧으로 시작하며, 팀원마다 한 번씩 받아요.",
      },
      {
        q: "오픈 소스 Lindy 대안이 있나요?",
        a: "OpenWorker(MIT)와 OpenBot(별도 라이선스인 CopilotKit Intelligence 위의 MIT 애플리케이션 템플릿)이 오픈 소스이고, Crewmark(GPL-3.0)도 마찬가지예요. Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI는 오픈 소스가 아니에요.",
      },
      {
        q: "Lindy vs Relevance AI: 무엇이 다른가요?",
        a: "Lindy는 받은편지함, 캘린더, 회의, Slack을 맡는 호스팅 비서 하나로, 활성 사용자당 크레딧으로 청구해요. Relevance AI는 여러 전문 에이전트를 만들어 Workforce로 연결하는 로우코드 플랫폼이고, 가격 페이지에는 영업팀을 통한 Enterprise만 있어요. [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy)를 참고하세요.",
      },
      {
        q: "Slack에서 쓸 수 있는 Lindy 대안은 무엇인가요?",
        a: "Grok Bot은 Slack과 Microsoft Teams에서 동료처럼 일해요. OpenWorker는 Slack에서 @멘션하면 스레드에 답해요. OpenBot에는 Slack 프런트엔드가 있고(일부 프런트엔드는 얼리 액세스), ChatGPT Work에는 대상 요금제에서 Slack 플러그인과 Slack 트리거가 있으며, Claude Cowork에는 Slack 커넥터가 있어요.",
      },
      {
        q: "내 컴퓨터에서 실행되는 Lindy 대안이 있나요?",
        a: "OpenWorker는 에이전트 루프를 내 컴퓨터에서 실행하고, 대화와 모델 키도 거기에 둬요. OpenBot은 Mac과 Windows용 데스크톱 앱으로, 또는 내 Kubernetes 클러스터에서 실행돼요. Crewmark의 에이전트는 내 컴퓨터의 Claude Code나 Codex 안에서 실행돼요.",
      },
      {
        q: "사람들은 왜 Lindy 대안을 찾나요?",
        a: "Lindy가 밝힌 제약 때문이에요. 월 크레딧은 이월되지 않고, 다 쓰면 다음 주기나 충전(1,000 크레딧당 $10) 때까지 크레딧을 쓰는 동작이 멈춰요. Slack에서 @멘션만 하는 사람을 포함해 모든 활성 사용자에게 청구되고, 무료 크레딧은 7일간만 유효하며, Lindy를 쓸 수 있는 곳으로서 Microsoft Teams는 아직 출시 예정이에요.",
      },
    ],
  },
  cta: {
    title: "에이전트에게 크레딧 잔액이 아니라 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 공식 페이지, 문서, 가격, GitHub와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI, CopilotKit, 그리고 OpenWorker의 제작자와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
