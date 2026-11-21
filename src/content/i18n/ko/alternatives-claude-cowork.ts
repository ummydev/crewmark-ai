import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork 대안 2026: 무료·오픈 소스",
    description:
      "Claude Cowork 대안 비교: ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy와 오픈 소스 OpenWorker, OpenBot, Suparagent를 가격과 함께 정리했어요.",
  },
  breadcrumb: "Claude Cowork 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Claude Cowork",
    title: "Claude Cowork 대안: OpenAI, Microsoft, Google, xAI의 AI 동료와 오픈 소스 추천",
    lead: "Claude Cowork는 Claude 앱에서 코딩 외 업무를 맡는 Anthropic의 에이전트예요. 원하는 결과를 설명하면 내 파일, 앱, 브라우저에서 리서치, 문서, 스프레드시트, 슬라이드 작업을 해 나가요. Claude 유료 요금제에만 포함되고 월 $20부터이며, Anthropic은 채팅보다 요금제 한도를 빨리 소모한다고 밝혀요. Claude 모델로 돌아가고, Pro, Max, Ultra에서는 2026년 10월 6일부터 새 작업이 Anthropic 클라우드에서 실행되며, 이전 방식으로 되돌리는 설정은 없어요. 이 페이지에서는 OpenAI, Microsoft, Google, xAI의 대안, 호스팅 비서, 직접 실행하는 오픈 소스 앱, 그리고 Crewmark를 각각의 비용과 함께 비교해요.",
    cta: "시작하기",
    secondary: "비교해 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Cowork 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 업체의 공식 페이지, 문서, GitHub에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. 순위가 아니에요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (참고용)",
          "Claude 앱에서 코딩 외 지식 업무를 맡는 Anthropic의 에이전트",
          "아니요",
          "Claude Pro 월 $20, 연간 결제 시 월 $17. Free에는 없음",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "검토할 결과물이 나오는 작업을 위한 OpenAI의 ChatGPT Work 모드",
          "아니요",
          "Free($0)와 Go(월 $8): 데스크톱 앱에서만 제한적. Plus 월 $20",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 전반에서 여러 단계의 작업을 처리하는 Microsoft의 에이전트",
          "아니요",
          "Microsoft 365 Copilot 라이선스에 더해 Copilot Credits 크레딧당 $0.01",
        ],
        [
          "[Gemini 작업(구 Spark)](/personal-agent/gemini-spark)",
          "Gmail, Docs 등 Google 앱을 쓰는 Gemini 앱 속 Google의 백그라운드 에이전트",
          "아니요",
          "Google AI Pro 월 $19.99(미국). 무료 요금제로는 이용 불가",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "각자 클라우드 컴퓨터를 가진 xAI의 호스팅 AI 팀원",
          "아니요",
          "Premium 월 $30",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "받은편지함, 캘린더, 회의, Slack을 맡는 호스팅 AI 비서, 크레딧으로 청구",
          "아니요",
          "무료: 7일간 $50 크레딧. 이후 활성 사용자당 월 $29.99부터",
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
          "[Suparagent](/personal-agent/suparagent)",
          "Claude Code, Codex, Gemini CLI, Cursor 등의 엔진 위에서 돌아가는 AI 동료 워크스페이스",
          "예, Apache-2.0",
          "데스크톱과 셀프 호스팅: 이용료 언급 없음, 모델 제공자 비용만 냄",
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
      title: "OpenAI, Microsoft, Google, xAI의 호스팅 대안",
      text: [
        "이 네 가지는 Claude Cowork와 비슷하게 작동해요. 업체의 앱에서 작업을 맡기면 업체의 클라우드에서 실행돼요. 나란히 비교: [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): ChatGPT의 Work 모드로, 작업을 계획하고 내 파일, 플러그인, 웹, 브라우저, 코드를 써서 발표 자료, 스프레드시트, 문서, 분석을 돌려줘요. 사용량 한도를 Codex와 함께 써요. Free와 Go는 데스크톱 앱에서 Work를 제한적으로 쓸 수 있고, Plus(월 $20)와 Pro(월 $100부터)는 데스크톱, 웹, 모바일에서 쓸 수 있어요. Claude Cowork의 OpenAI 쪽 대안을 원하거나, AI 동료를 무료로 써 보고 싶다면 고르세요.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): Outlook, Teams, Word, Excel, PowerPoint, OneDrive, SharePoint를 오가며 여러 단계의 작업을 처리하고, 민감한 작업 전에는 승인 창을 띄워요. Microsoft 365 Copilot 라이선스가 필요하고, 사용량은 Copilot Credits로 크레딧당 $0.01씩 종량제로 청구돼요. 내 기기의 로컬 파일에는 접근할 수 없어요. 업무가 Microsoft 365에 있고, 관리자가 사용자나 그룹별로 크레딧 한도를 두고 싶어 한다면 고르세요.",
        "[Gemini 작업](/personal-agent/gemini-spark) (Google, 베타 때는 Spark): Gemini 앱 안의 클라우드 에이전트로, Gmail, Docs, Drive 등 Google 앱을 쓰고, 일정에 따라 또는 무언가 일어났을 때 실행돼요. Google 도움말에는 Google AI Pro(미국 월 $19.99)나 Ultra(월 $99.99부터)가 필요하다고 나와 있어요. 개인 Google 계정에서만 작동하고, EEA, 스위스, 영국, 나이지리아에서는 쓸 수 없어요. 업무가 Gmail과 Google의 다른 앱에 있다면 고르세요.",
        "[Grok Bot](/alternatives/grok-bot) (xAI): 각자 클라우드 컴퓨터를 가진 호스팅 Bot이 내 도구에 로그인하고, Slack과 Microsoft Teams에서 일하며, 루틴을 실행하고 서로 메시지를 주고받아요. Premium(월 $30), Super(월 $100), Ultra(월 $200)에 포함되고, 월 단위로 결제하며 추가 사용량은 토큰 비용으로 청구돼요. 서로 다른 일을 맡은 여러 Bot이 Slack, Teams, 회의 안에서 일하길 원한다면 고르세요.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "크레딧으로 청구하는 호스팅 비서: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): 받은편지함, 캘린더, 회의, 리서치, 보고서, 후속 조치를 처리하는 호스팅 비서 하나로, Slack, 이메일, iMessage, SMS, 전화, Gmail의 Chrome 확장 프로그램에서 써요. Routines는 일정이나 이벤트로 실행되고, 외부에 영향을 주는 일은 모두 내 승인을 기다려요. 7일간 쓸 수 있는 무료 크레딧 $50로 시작하고, 이후에는 활성 사용자마다 월 $29.99(3,000 크레딧)부터 청구돼요. 문자로 부르거나 Slack에서 @멘션할 수 있는 업무 비서를 원한다면 고르세요. 자세한 내용은 [Lindy 가이드](/personal-agent/lindy)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "오픈 소스 Claude Cowork 대안",
      text: [
        "이 세 가지는 내 컴퓨터나 서버에서 실행돼요. 개인 용도로는 어느 것도 이용료를 밝히지 않아요. 모델 제공자 비용을 내거나, 지원되는 경우 로컬 모델을 쓰면 돼요.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): MIT 라이선스의 AI 동료 데스크톱 앱으로, 오픈 베타 중이에요. 에이전트 루프, 대화, 커넥터 토큰, 모델 키가 내 컴퓨터에 남아요. OpenAI, Anthropic, Google Gemini, OpenRouter 키를 쓰거나, Ollama, LM Studio, llama.cpp, vLLM으로 로컬 모델을 돌려요. 기본적으로 동작마다 승인이 필요하고, 예약 실행은 자기 동작을 스스로 승인하지 않아요. 그 요청은 받은편지함에서 기다려요. macOS 12+(Apple silicon)와 Windows 10/11 x64에서 실행되고, Windows 빌드는 아직 코드 서명이 없어요. Windows나 Mac에서 쓸 로컬 오픈 소스 Claude Cowork 대안을 원한다면 고르세요.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): 각 Bot이 자기 브라우저, 파일, 도구를 갖는 셀프 호스팅 가능한 워크스페이스로, 동작 전 승인, 루틴, 활동 기록이 있어요. Mac과 Windows용 데스크톱 앱(Docker 백엔드)으로, 또는 팀용으로 Kubernetes에서 실행돼요. 앱 템플릿은 MIT이고, 별도 라이선스인 CopilotKit Intelligence를 쓰며, Kubernetes에서 프로덕션으로 쓰려면 라이선스가 필요해요. 개인 프로젝트는 무료이고, OpenBot for Business는 활성 사용자당 월 최대 $29예요. AI 동료를 직접 호스팅하고 내 모델이나 에이전트를 가져와 쓰고 싶다면 고르세요. [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)을 참고하세요.",
        "[Suparagent](/personal-agent/suparagent): Apache-2.0 라이선스의 워크스페이스로, 이름 붙은 AI 동료마다 직무, 작업 공간, 메모리, 루틴, 승인 설정이 있고, Claude Code, Codex, Gemini CLI, Cursor처럼 이미 쓰는 엔진 위에서 돌아가요. 작업 보드와 캘린더가 있고, 리드 에이전트가 전문 에이전트에게 일을 넘길 수 있어요. 데스크톱 앱이나 셀프 호스팅 Linux 서버로 실행되고, suparagent.ai의 호스팅 서비스는 별개 제품이에요. 프로젝트는 스스로를 초기 단계이며 계속 바뀌는 중이라고 설명해요. 이미 돈을 내는 에이전트 위에서 직무를 가진 동료를 원한다면 고르세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Claude Cowork 대안 고르는 법",
      steps: [
        {
          title: "업무가 있는 곳에서 출발하세요",
          text: "Microsoft 365라면 Copilot Cowork, Gmail과 Google Docs라면 Gemini 작업, ChatGPT라면 ChatGPT Work, Slack이나 iMessage라면 Lindy나 Grok Bot이에요.",
        },
        {
          title: "얼마를 낼지 정하세요",
          text: "무료 선택지로는 ChatGPT Free의 ChatGPT Work(데스크톱 앱에서만 제한적), Lindy의 7일 크레딧, 내 모델 키로 쓰는 OpenWorker, OpenBot, Suparagent, 그리고 Crewmark의 Free 요금제가 있어요. Copilot Cowork는 라이선스에 더해 Copilot Credit마다 청구하고, Gemini 작업, Grok Bot, ChatGPT 유료 요금제는 월 구독이에요.",
        },
        {
          title: "업체 클라우드와 내 컴퓨터 중에서 고르세요",
          text: "ChatGPT Work, Copilot Cowork, Gemini 작업, Grok Bot, Lindy는 업체의 클라우드에서 실행돼요. OpenWorker는 대화와 키를 내 컴퓨터에 두고, OpenBot과 Suparagent는 내 서버에서도 실행할 수 있어요.",
        },
        {
          title: "플랫폼을 확인하세요",
          text: "Windows에서는 Copilot Cowork와 ChatGPT Work에 Windows 데스크톱 앱이 있고, OpenWorker는 Windows 10/11 빌드를 제공하며, OpenBot의 데스크톱 앱도 Windows에서 실행돼요. Gemini 작업은 웹, Mac 앱, 모바일에서 쓸 수 있고, Grok Bot은 macOS(Apple silicon)와 iOS용 앱을 안내해요.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Claude Cowork 대안에 대해 Hacker News 사용자들이 하는 말",
      text: [
        "2026년 11월 13일에 Claude Cowork를 다룬 Hacker News 스레드 5개(2026년 1월~11월)를 한 페이지씩 읽었어요. Reddit 스레드는 검색 결과로만 찾을 수 있어서 제목만 싣고 요약하지 않았어요. 설문 조사가 아니라 공개된 논의의 표본이에요.",
      ],
      points: [
        "Cowork의 에이전트 모드보다 다른 모드를 선호한다는 이야기가 저희가 읽은 스레드 중 2개에서 나왔어요([2026년 1월](https://news.ycombinator.com/item?id=46593022), [2026년 9월](https://news.ycombinator.com/item?id=49729412)). 1월 스레드에서 사용자들은 터미널이 편한 사람에게는 Claude Code가 같은 일을 더 세밀하게 제어하며 해 준다고 말해요. [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)를 참고하세요. 9월 스레드에서 사용자들은 전략이나 리서치 질문에는 에이전트 모드보다 일반 채팅이 더 나은 답을 준다고 말해요.",
        "Reddit에서는 [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding), [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM)이라는 제목의 스레드가 검색 결과에 나왔어요. 제목만 싣고, 이 스레드들은 읽지 않았어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Crewmark: 이미 쓰는 Claude Code나 Codex 위의 AI 직원 팀",
      text: [
        "Crewmark는 Claude Cowork와는 다른 종류의 도구예요. AI 직원 팀을 위한 이슈 트래커로, 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화이고 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 이슈 상태를 최신으로 유지해요. 오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요.",
        "Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함돼요. Pro(월 $5)와 Team(월 $10)은 출시 예정이고, 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 에이전트 사용료는 에이전트 제공자에게 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 자세한 내용은 [Crewmark 요금](/pricing)에 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "각 직원에게 직무, 목표, 프로젝트를 주세요. 바로 고를 수 있는 직무로 소프트웨어 엔지니어, SEO 전문가, 데이터 분석가가 있어요. [AI 직원 직무](/ai-employees)를 참고하세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "이슈를 배정하고 우선순위를 정하고, 정기적인 이슈는 매일, 매주, 매월 반복되게 하세요. 에이전트가 리뷰, 권한, 정보를 필요로 하면 이슈를 '조치 필요'로 바꾸고 나를 기다려요.",
        },
        {
          title: "근무 시간 정하기",
          text: "하트비트는 근무 시간 동안 15분에서 24시간마다 각 직원을 깨워요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "이미 Claude나 ChatGPT에 돈을 내고 있나요?",
    text: "Crewmark는 내 Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔요. 직원 3명까지 무료예요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Cowork 대안 FAQ",
    items: [
      {
        q: "무료 Claude Cowork 대안이 있나요?",
        a: "네. ChatGPT Free($0)에는 데스크톱 앱에서 제한적으로 쓰는 ChatGPT Work가 포함돼요. Lindy는 7일간 쓸 수 있는 $50 크레딧으로 시작해요. OpenWorker는 가격 표시 없이 내 모델 키나 로컬 모델로 돌아가고, OpenBot은 개인 프로젝트에 무료이며, Suparagent의 데스크톱 버전과 셀프 호스팅 버전은 이용료를 밝히지 않아요. Crewmark의 Free 요금제에는 프로젝트 1개와 AI 직원 최대 3명이 포함돼요. Claude Cowork 자체는 Claude Free 요금제에 없어요.",
      },
      {
        q: "Claude Cowork의 오픈 소스 대안이 있나요?",
        a: "OpenWorker(MIT), OpenBot(별도 라이선스인 CopilotKit Intelligence 위의 MIT 애플리케이션 템플릿), Suparagent(Apache-2.0)가 오픈 소스이고, Crewmark(GPL-3.0)도 마찬가지예요. Claude Cowork 자체는 오픈 소스가 아니지만, Cowork용 플러그인을 모은 Anthropic의 knowledge-work-plugins 저장소는 Apache-2.0 오픈 소스예요.",
      },
      {
        q: "Claude Cowork의 OpenAI 쪽 대안은 무엇인가요?",
        a: "ChatGPT Work예요. 발표 자료, 스프레드시트, 분석처럼 검토할 결과물이 나오는 작업을 위한 ChatGPT의 Work 모드예요. Free와 Go에서는 데스크톱 앱에서 제한적으로, Plus 월 $20부터는 전체 기능을 쓸 수 있고, 사용량 한도를 Codex와 함께 써요. [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)를 참고하세요.",
      },
      {
        q: "Windows에서 쓸 수 있는 Claude Cowork 대안은 무엇인가요?",
        a: "Copilot Cowork(Windows와 macOS용 Microsoft Copilot 데스크톱 앱), ChatGPT Work(macOS, Windows, Linux용 ChatGPT 데스크톱 앱), OpenWorker(Windows 10/11 x64, 아직 코드 서명 없음), OpenBot(Mac과 Windows용 데스크톱 앱)이에요. Claude Cowork 자체도 Claude Desktop으로 Windows에서 실행돼요.",
      },
      {
        q: "내 컴퓨터에서 실행되는 Claude Cowork 대안이 있나요?",
        a: "OpenWorker는 에이전트 루프를 내 컴퓨터에서 실행하고, 대화, 커넥터 토큰, 모델 키도 거기에 둬요. OpenBot과 Suparagent는 데스크톱 앱이나 내 서버에서 실행돼요. Claude Cowork는 Claude Desktop을 통해서만 로컬 파일에 접근하고, Pro, Max, Ultra에서는 2026년 10월 6일부터 새 작업이 클라우드에서 실행돼요. 내 컴퓨터에서만 실행되는 작업이라면 Anthropic은 데스크톱 앱의 Claude Code를 안내해요([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "사람들은 왜 Claude Cowork 대안을 찾나요?",
        a: "Anthropic이 밝힌 제약 때문이에요. Cowork는 Claude 유료 요금제(Pro 월 $20부터)가 필요하고, 채팅보다 요금제 한도를 빨리 소모하며, 세션을 다른 사람과 공유할 수 없고, Pro, Max, Ultra에서는 새 작업이 클라우드에서 실행되며 되돌리는 설정이 없어요. 업무가 Microsoft 365나 Gmail에 있다면 Copilot Cowork와 Gemini 작업은 그 앱들과 바로 연결돼요.",
      },
    ],
  },
  cta: {
    title: "에이전트에게 작업만이 아니라 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 공식 페이지, 문서, 가격, GitHub와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, Microsoft, Google, xAI, Lindy, CopilotKit, 그리고 OpenWorker와 Suparagent의 제작자와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
