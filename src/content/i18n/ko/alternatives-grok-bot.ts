import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 대안 2026: 오픈 소스, 무료, 호스팅형",
    description:
      "Grok Bot 대안 비교: Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent, Crewmark를 라이선스와 가격으로 정리했어요.",
  },
  breadcrumb: "Grok Bot 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · xAI Grok Bot",
    title: "Grok Bot 대안: 오픈 소스, 무료, 호스팅형 AI 팀원",
    lead: "Grok Bot은 xAI의 호스팅 “AI 팀원”이에요. 각 Bot이 클라우드에 자기 컴퓨터를 하나씩 받아 내 도구와 앱에 로그인하고, Slack과 Microsoft Teams에서 일하며, 루틴을 실행하고 서로 일을 넘겨요. 2026년 8월 11일에 베타로 출시됐고, 지금은 베타를 벗어났어요. 오픈 소스가 아니고, 요금제는 Premium 월 $30부터이며, Teams와 Enterprise는 영업팀을 통해 구매해요. Claude, ChatGPT, Microsoft 365의 AI 동료부터 GitHub의 오픈 소스 프로젝트까지, 대안 8가지를 라이선스, 가격, 어떤 사람에게 맞는지와 함께 정리했어요.",
    cta: "시작하기",
    secondary: "비교표 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 제품의 사이트, 문서, 가격 페이지에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. Grok Bot은 Premium 월 $30, Super 월 $100, Ultra 월 $200이고 월 단위로 결제하며, 주간 사용량이 포함되고 추가 사용량은 토큰 비용으로 청구돼요. 자세한 내용은 [Grok Bot 가이드](/personal-agent/grok-bot)에 있어요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "Claude 앱에서 리서치, 문서, 스프레드시트, 슬라이드 등 코딩 외 업무를 맡는 Anthropic의 에이전트",
          "아니요",
          "Claude 유료 요금제, Pro 월 $20(연간 결제 시 월 $17)부터. Free에는 없음",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Outlook, Teams, Word, Excel, PowerPoint, OneDrive, SharePoint를 오가며 여러 단계의 작업을 처리하는 Microsoft 365 Copilot 안의 에이전트",
          "아니요",
          "Microsoft 365 Copilot 라이선스에 더해 Copilot Credits 크레딧당 $0.01, 종량제, 월 단위 청구",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "발표 자료, 스프레드시트, 분석처럼 검토할 결과물이 나오는 작업을 위한 ChatGPT의 Work 모드",
          "아니요",
          "Free($0)와 Go(월 $8)는 데스크톱 앱에서 제한적, Plus 월 $20부터 전체 이용",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "받은편지함, 캘린더, 회의, 후속 조치를 맡고 Slack에서 팀과 함께 쓰는 호스팅 비서",
          "아니요",
          "무료: 7일간 $50 크레딧. 활성 사용자당 월 $29.99(3,000 크레딧)",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스로, 각 Bot이 자기 브라우저, 파일, 도구를 가짐",
          "예(MIT 앱 템플릿, 별도 라이선스인 CopilotKit Intelligence 사용)",
          "개인 프로젝트는 무료, Business는 활성 사용자당 월 최대 $29",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "“일상 업무를 위한 AI 동료”(“An AI coworker for your everyday work”)라는 데스크톱 앱으로, 승인과 감사 기록을 갖추고 내 컴퓨터에서 실행",
          "예(MIT)",
          "가격 표시 없음, 내 모델 키나 로컬 모델 사용",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "자기 모델과 루틴을 가진 Bot들이 서로 메시지를 주고받는 Nous Research의 개인 에이전트",
          "예(MIT)",
          "에이전트는 무료(모델 제공자 비용 별도), 선택 사항인 Nous Portal Plus 월 $20",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 직원 팀을 위한 이슈 트래커. 각 직원은 내 컴퓨터의 Claude Code나 Codex 대화로, 하트비트에 맞춰 깨어남",
          "예(GPL-3.0)",
          "무료(프로젝트 1개, AI 직원 최대 3명), Pro 월 $5 출시 예정, 에이전트 사용료는 에이전트 제공자에게 지불",
        ],
      ],
    },
    {
      kind: "text",
      id: "big-vendors",
      title: "Anthropic, Microsoft, OpenAI의 AI 동료",
      text: [
        "Grok Bot처럼 호스팅되고, 많은 팀이 이미 가진 요금제에 포함돼 있어요. 세 가지 모두 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요.",
      ],
      points: [
        "Claude Cowork: 지식 업무를 위한 Anthropic의 에이전트예요. 원하는 결과를 설명하면 내 파일, 연결된 앱, 브라우저에서 리서치, 문서, 스프레드시트, 슬라이드 작업을 해 나가요. 작업은 Anthropic 클라우드에서 실행되어 노트북을 닫아도 계속되고, 예약 작업은 매시간, 매일, 매주 또는 평일마다 실행돼요. 이미 Claude에 돈을 내고 있고, 여러 단계의 작업을 파일로 돌려받고 싶다면 고르세요. [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)과 [Claude Cowork 대안](/alternatives/claude-cowork)을 참고하세요.",
        "Copilot Cowork: Microsoft 365 Copilot 안의 에이전트로, 이메일을 보내고, 회의 일정을 잡고, Word, Excel, PowerPoint 파일을 편집하고, Teams에 게시하며, 민감한 작업 전에는 승인 창을 띄워요. 모델 선택기에는 테넌트 설정에 따라 GPT, Claude, Grok 모델이 있어요. 업무가 Outlook, Teams, OneDrive, SharePoint에 있다면 고르세요. 가이드: [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work: ChatGPT의 Work 모드로, 작업을 계획하고 내 파일, 플러그인, 웹, 브라우저, 코드를 써서 검토할 결과물을 돌려줘요. 사용량 한도를 Codex와 함께 쓰고, Plus(월 $20)와 Pro(월 $100부터)에서는 데스크톱, 웹, 모바일에서 쓸 수 있어요. 결과가 분명하고 출처나 단계가 여러 개인 작업이라면 고르세요. 가이드: [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "사무 업무를 위한 호스팅 비서",
      points: [
        "Lindy: 여러 Bot이 아니라 함께 쓰는 비서 하나예요. 받은편지함, 캘린더, 회의, 리서치, 후속 조치를 처리하고, Slack, 이메일, iMessage, 전화, Gmail의 Chrome 확장 프로그램에서 써요. 이메일 보내기처럼 외부에 영향을 주는 일은 모두 내 승인을 기다리고, Routines는 일정이나 이벤트로 실행돼요. Slack에서 @멘션만 하는 사람을 포함해 모든 활성 사용자가 유료 시트를 차지해요. 보고서, 리서치, CRM 업데이트를 위해 Slack에서 @멘션할 수 있는 비서를 팀이 원한다면 고르세요. 가이드: [Lindy](/personal-agent/lindy). 자세한 내용은 [Lindy 대안](/alternatives/lindy)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "GitHub의 오픈 소스 Grok Bot 대안",
      text: ["직접 실행하고 내 모델 키를 가져와 써요. 스타 수는 2026년 11월 13일 GitHub 기준이에요."],
      points: [
        "OpenBot(`github.com/CopilotKit/OpenBot`, 스타 11,652개): Grok Bot처럼 각 Bot이 브라우저, 파일, 도구가 있는 자기 컴퓨터를 받고, 루틴, 승인, 활동 기록도 있어요. Mac과 Windows용 데스크톱 앱으로, 또는 팀용으로 Kubernetes에서 실행되고, AG-UI로 내 에이전트를 연결해요. MIT로 직접 호스팅하고 수정할 수 있는 AI 동료를 원한다면 고르세요. [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)을 참고하세요.",
        "OpenWorker(`github.com/andrewyng/openworker`, 스타 19,050개): macOS와 Windows용으로 오픈 베타 중인 데스크톱 앱이에요. 기본적으로 동작마다 승인을 거치고, 모든 도구 호출이 기록되며, 예약 작업으로 아침 브리핑이나 주간 보고서 같은 일을 하고, Slack에서 멘션하면 스레드로 답을 받을 수 있어요. 로컬 모델을 포함해 내 컴퓨터에서 돌아가는 에이전트를 원한다면 고르세요. 가이드: [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent(`github.com/NousResearch/hermes-agent`, 스타 262,923개): Nous Research의 개인 에이전트예요. Bot Mode는 프로필을 이름 붙은 Bot으로 바꾸는데, 각 Bot은 자기 채팅, 역할, 모델, 메모리, 스킬, 아바타를 갖고 서로 직접 메시지를 주고받아요. Telegram, Discord, Slack, WhatsApp, Signal, 이메일에서 답해요. 내 컴퓨터나 서버에서 여러 전문 Bot을 돌리고 싶다면 고르세요. [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Grok Bot 대안 고르는 법",
      steps: [
        {
          title: "이미 결제 중인 것에서 출발하세요",
          text: "Claude 유료 요금제에는 Claude Cowork가, ChatGPT 요금제에는 Work가 포함돼요(Free와 Go는 제한적). Copilot Cowork에는 Microsoft 365 Copilot 라이선스와 Copilot Credits가 필요해요.",
        },
        {
          title: "어디서 실행할지 정하세요",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy는 각 회사의 클라우드에서 실행돼요. OpenWorker는 내 컴퓨터에서, OpenBot은 내 노트북이나 Kubernetes에서, Hermes Agent는 내 컴퓨터나 서버에서 실행돼요.",
        },
        {
          title: "팀이 대화하는 곳을 확인하세요",
          text: "Grok Bot은 Slack, Microsoft Teams, 통화에서 일해요. Slack에서는 Lindy, OpenWorker, Hermes Agent도 쓸 수 있고, Claude Cowork와 ChatGPT Work는 커넥터나 플러그인으로 쓸 수 있어요. Copilot Cowork는 Outlook과 Teams에서 일해요.",
        },
        {
          title: "실행 전에 어떻게 묻는지 보세요",
          text: "Grok Bot은 승인이 필요할 때 확인을 요청하고, 민감한 작업은 Auto Review로 보낼 수 있어요. Lindy는 외부에 영향을 주는 일은 모두 승인을 기다리고, OpenWorker는 기본적으로 동작마다 승인을 거치며, Claude Cowork에는 Manual과 Auto 모드가 있고, Copilot Cowork는 승인 창을 띄워요.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Grok Bot 대안에 대해 Hacker News 사용자들이 하는 말",
      text: [
        "2026년 11월 13일에 Grok Bot을 다룬 Hacker News 스레드 7개(2026년 8월~11월)를 한 페이지씩 읽었어요. Reddit 스레드는 검색 결과로만 찾을 수 있어서 제목만 싣고 요약하지 않았어요. 설문 조사가 아니라 공개된 논의의 표본이에요.",
      ],
      points: [
        "사용량 한도에 대한 불만이 저희가 읽은 스레드 중 3개에서 나왔어요([2026년 8월](https://news.ycombinator.com/item?id=49261514), [2026년 11월](https://news.ycombinator.com/item?id=50345698), [2026년 11월](https://news.ycombinator.com/item?id=50366117)). 사용자들은 항상 돌아가는 Bot이 주간 사용량을 빠르게 써 버린다고 말하고, 11월 스레드들은 Grok Bot의 낮아진 한도를 다뤄요.",
        "직접 실행하는 오픈 소스 에이전트가 저희가 읽은 스레드 중 2개에서 나왔어요([2026년 8월](https://news.ycombinator.com/item?id=49261514), [2026년 11월](https://news.ycombinator.com/item?id=50366117)). 사용자들은 두 스레드 모두에서 [Hermes Agent](/alternatives/hermes-agent)를, 8월 스레드에서는 OpenClaw도 언급했어요. 그 스레드에서는 둘 다 호스팅 Bot보다 설정할 수 있는 게 많다고 설명하고, OpenClaw는 자주 손봐야 한다는 사람도 있어요. [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)와 [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)를 참고하세요.",
        "직접 환경을 꾸리는 방법이 저희가 읽은 스레드 중 2개에서 나왔어요([2026년 8월](https://news.ycombinator.com/item?id=49261514), [2026년 11월](https://news.ycombinator.com/item?id=50366117)). Claude Code나 Codex 같은 코딩 에이전트에 스크립트 몇 개를 더하거나, OpenRouter로 모델을 쓰는 방법이에요. 그 스레드의 사용자들은 이런 환경이 훨씬 적은 돈으로 일의 대부분을 해낸다고 말해요. [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)를 참고하세요.",
        "Grok Bot이 더해 주는 게 무엇인지에 대한 의문이 저희가 읽은 스레드 중 2개에서 나왔어요([2026년 8월](https://news.ycombinator.com/item?id=49261514), [2026년 11월](https://news.ycombinator.com/item?id=50366117)). 맡길 일을 떠올리지 못하겠다는 사용자도 있고, OpenClaw 같은 오픈 소스 에이전트에 브라우저를 더한 호스팅 버전으로 보는 사용자도 있어요.",
        "Reddit에서는 [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot), [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor)라는 제목의 스레드가 검색 결과에 나왔어요. 제목만 싣고, 이 스레드들은 읽지 않았어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "앱에는 Bot을, 코드베이스에는 AI 직원을.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 프로젝트를 가져요. 근무 시간에는 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 리뷰나 권한이 필요하면 이슈를 '조치 필요'로 바꾸고 거기서 물어봐요. Slack, GitHub, Linear 연동은 내장돼 있지 않아요. 에이전트는 자기 컴퓨터에 있는 도구와 로그인을 써요.",
        "GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요. 에이전트 제공자에게는 평소처럼 요금을 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 요금제는 [요금 페이지](/pricing)에서 볼 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무로 시작하고, KPI와 프로젝트를 적으세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "이슈를 직원이나 사람에게 배정하고, 정기적인 이슈는 매일, 매주, 매월 반복되게 하세요.",
        },
        {
          title: "근무 시간 정하기",
          text: "근무 시간과 15분에서 24시간 사이의 하트비트 간격을 고르세요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "코드베이스를 위한 AI 팀원이 필요하세요?",
    text: "Crewmark는 Claude Code나 Codex에게 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Grok Bot 대안 FAQ",
    items: [
      {
        q: "오픈 소스 Grok Bot 대안이 있나요?",
        a: "네. OpenBot의 앱 템플릿은 MIT이고(별도 라이선스인 CopilotKit Intelligence 사용), OpenWorker와 Hermes Agent는 MIT예요. Crewmark는 GPL-3.0 오픈 소스예요. Grok Bot 자체는 오픈 소스가 아니에요.",
      },
      {
        q: "무료 Grok Bot 대안이 있나요?",
        a: "OpenBot은 개인 프로젝트에 무료이고, OpenWorker는 가격 표시 없이 내 모델 키나 로컬 모델로 돌아가며, Hermes Agent는 무료예요(모델 제공자 비용 별도). ChatGPT Work는 Free 요금제에서도 데스크톱 앱으로 제한적으로 쓸 수 있고, Lindy의 Free 요금제는 7일간 $50 크레딧을 주며, Crewmark는 프로젝트 1개와 AI 직원 3명까지 무료예요. Claude Cowork는 Claude Free 요금제에서 쓸 수 없어요.",
      },
      {
        q: "GitHub에 있는 Grok Bot 대안은 무엇인가요?",
        a: "OpenBot(`github.com/CopilotKit/OpenBot`, 스타 11,652개), OpenWorker(`github.com/andrewyng/openworker`, 스타 19,050개), Hermes Agent(`github.com/NousResearch/hermes-agent`, 스타 262,923개), Crewmark(`github.com/ummydev/crewmark-ai`)예요. 스타 수는 2026년 11월 13일 기준이에요.",
      },
      {
        q: "Claude는 Grok Bot의 대안인가요?",
        a: "Claude 앱의 Claude Cowork는 지식 업무를 위한 Anthropic의 에이전트예요. Anthropic 클라우드에서, 그리고 일정에 따라 작업을 실행하고, Claude 유료 요금제에 Pro 월 $20부터 포함돼요. 코드라면 Anthropic의 코딩 에이전트인 Claude Code가 있어요. [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)과 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)를 참고하세요.",
      },
      {
        q: "Grok Bot은 얼마인가요?",
        a: "Premium 월 $30, Super 월 $100(Premium 사용량의 3.5배), Ultra 월 $200(Premium 사용량의 12배)이고, 월 단위로 결제해요. 주간 Grok Bot 사용량이 포함되고, 추가 사용량은 토큰 비용으로 청구돼요. Teams와 Enterprise는 영업팀을 통해 구매해요.",
      },
      {
        q: "Slack에서 쓸 수 있는 Grok Bot 대안은 무엇인가요?",
        a: "Lindy는 Slack에서 팀원으로 일하고, OpenWorker는 Slack 스레드에서 멘션하면 답해요. Hermes Agent는 게이트웨이로 Slack에 연결되고, Claude Cowork와 ChatGPT Work는 커넥터나 플러그인으로 Slack에 연결돼요. OpenBot은 프런트엔드 목록에 Slack을 올려 두었고, 일부 프런트엔드는 얼리 액세스예요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 대화만이 아니라 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 사이트, 문서, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, xAI를 비롯해 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
