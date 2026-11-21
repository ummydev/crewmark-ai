import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AI 동료 도구 비교: Claude Cowork, Copilot 외",
    description:
      "AI 동료 비교: Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot, Andrew Ng의 OpenWorker 등.",
  },
  breadcrumb: "AI 동료 도구",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "블로그 · AI 동료",
    title: "AI 동료 도구 비교: 각각 할 수 있는 일, 비용, 실행 전에 묻는 것",
    lead: "AI 동료는 작업 하나를 통째로 맡기는 에이전트예요. 내 파일, 앱, 브라우저에서 일하고, 백그라운드에서 계속 작업하며, 위험한 일을 하기 전에는 먼저 확인해요. 2026년에는 Anthropic, Microsoft, OpenAI, Google, Meta, xAI가 각자 AI 동료를 내놓았고, GitHub에는 Andrew Ng의 OpenWorker를 비롯한 오픈소스 AI 동료도 있어요. 각각 무엇을 하는지, 누가 쓸 수 있는지, 비용은 얼마인지, 어디서 돌아가는지를 각 업체의 공식 페이지를 바탕으로 정리했어요.",
    cta: "시작하기",
    secondary: "비교표로 이동",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "AI 동료란?",
      text: [
        "챗봇은 대답을 해요. AI 동료는 보고서, 발표 자료, 다 채운 스프레드시트, 정리된 받은편지함처럼 결과가 분명한 작업을 받아 그 단계를 스스로 밟아 나가요. 제품마다 차이는 크지만 공통점이 네 가지 있어요.",
      ],
      points: [
        "일이 있는 곳에서 일해요: 파일, 이메일, 캘린더, 연결된 앱, 브라우저에서요.",
        "내가 없어도 계속 일해요: 클라우드 컴퓨터에서, 또는 앱이 열려 있는 동안 내 컴퓨터에서요.",
        "반복할 수 있어요: 대부분 일정에 따라, 또는 새 이메일이 오는 것처럼 무언가 일어났을 때 작업을 실행해요.",
        "먼저 물어봐요: 보내기, 게시, 구매, 삭제는 내 승인을 기다려요.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "AI 동료 도구 한눈에 보기",
      text: [
        "각 업체의 사이트, 가격 페이지, 문서, GitHub에서 2026년 11월 13일에 확인한 내용이에요. 가격은 미국 달러 기준이에요. 순위가 아니에요.",
      ],
      headers: ["AI 동료", "만든 곳", "이용 대상", "시작 가격", "실행 위치"],
      rows: [
        ["Claude Cowork", "Anthropic", "Claude 유료 플랜 (Free 제외)", "Claude Pro, $20/월", "Anthropic 클라우드. 로컬 파일과 브라우저는 데스크톱 앱으로"],
        ["Copilot Cowork", "Microsoft", "Microsoft 365 Copilot 라이선스가 있는 회사 또는 학교 계정. 개인 계정은 프리뷰", "라이선스에 더해 Copilot Credits (크레딧당 $0.01)", "Microsoft 클라우드, 내 OneDrive와 SharePoint 파일 사용"],
        ["ChatGPT Work", "OpenAI", "ChatGPT 플랜. Free와 Go는 데스크톱 앱에서 제한적으로", "ChatGPT Plus($20/월)부터 전체 이용", "OpenAI 클라우드, 또는 데스크톱 앱으로 내 컴퓨터"],
        ["Gemini 작업 (구 Spark)", "Google", "Google AI Pro 또는 Ultra, 개인 계정이 있는 성인. EEA, 스위스, 영국, 나이지리아 제외", "Google AI Pro, $19.99/월 (미국)", "Google 클라우드"],
        ["Meta Muse", "Meta", "미국과 캐나다, 18세 이상. 싱가포르는 10월 27일부터", "대부분의 용도는 무료, 구독 옵션 있음", "사용자마다 클라우드 컴퓨터 한 대"],
        ["Grok Bot", "xAI", "Premium, Super, Ultra, Teams, Enterprise 플랜", "Premium, $30/월", "Bot마다 클라우드 컴퓨터 한 대. Slack, Teams, 통화"],
        ["Lindy", "Lindy", "누구나, 무료 체험 있음", "활성 사용자당 $29.99/월", "Lindy 클라우드. Slack, 이메일, iMessage, 전화"],
        ["OpenWorker (오픈소스)", "Andrew Ng", "누구나, 데스크톱 앱은 오픈 베타", "무료. 내 모델 키 또는 로컬 모델 사용", "내 컴퓨터 (macOS, Windows)"],
        ["OpenBot (오픈소스)", "CopilotKit", "누구나", "개인 프로젝트는 무료. Business는 사용자당 최대 $29/월", "내 노트북 또는 내 Kubernetes 클러스터"],
        ["Suparagent (오픈소스)", "GitHub의 Anil-matcha", "누구나", "셀프 호스팅은 무료. 호스팅 버전은 $15/월부터", "데스크톱 앱, 내 서버 또는 호스팅 버전"],
        ["Crewmark", "Crewmark", "누구나", "무료: 프로젝트 1개, AI 직원 3명까지", "내 컴퓨터, 내 Claude Code 또는 Codex 안에서"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "AI 동료별 가이드",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork): 플랜, 설정, 승인 모드, Cowork vs Claude Code.",
        "[Copilot Cowork](/personal-agent/copilot-cowork): 라이선스, Copilot Credits, Microsoft 365에서 설정하기.",
        "[ChatGPT Work](/personal-agent/chatgpt-work): Work 모드가 하는 일, 포함된 플랜, Codex와의 관계.",
        "[Cursor Projects](/personal-agent/cursor-projects): 큰 코딩 작업을 위한 Cursor의 코디네이터 에이전트.",
        "[Lindy](/personal-agent/lindy): 크레딧 기반 가격과 설정하는 법.",
        "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent): 오픈소스 AI 동료와 GitHub에서 설정하는 법.",
        "나란히 비교: [전체 비교](/compare)에서 [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio) 등을 볼 수 있어요.",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "대형 AI 랩이 내놓은 AI 동료",
      points: [
        "Claude Cowork (Anthropic): Claude 앱에서 하는 코딩 외 업무용이에요. 리서치, 문서, 스프레드시트, 슬라이드, 파일 작업 같은 일이죠. 작업은 클라우드에서 실행되어 노트북을 닫아도 계속되고, `/schedule`로 매시간, 매일, 매주 일정을 잡을 수 있어요. Manual 모드에서는 실행 전에 묻고, Auto 모드에서는 동작마다 안전 검토를 거쳐요. 유료 플랜 전용이며 Pro 월 $20부터예요.",
        "Copilot Cowork (Microsoft): Microsoft 365 전반에 걸친 여러 단계의 작업을 처리해요. 이메일 보내기, 회의 일정 잡기, Word, Excel, PowerPoint 파일 편집, Teams에 게시하기 같은 일이에요. 민감한 작업 전에는 승인 창을 띄우고, 예약 작업과 이벤트로 시작되는 작업을 실행하며, 테넌트 설정에 따라 GPT, Claude, Grok 모델을 고를 수 있어요. Microsoft 365 Copilot 라이선스와 함께 Copilot Credits로 내는 사용료가 필요해요.",
        "ChatGPT Work (OpenAI): ChatGPT의 Work 모드로, 발표 자료, 스프레드시트, 분석처럼 검토할 결과물이 나오는 작업을 위한 기능이에요. 핵심 기능과 사용량을 Codex와 함께 써요. Free와 Go는 데스크톱 앱에서 제한적으로 쓸 수 있고, Plus(월 $20) 이상은 데스크톱, 웹, 모바일에서 예약 작업과 이벤트 트리거까지 쓸 수 있어요.",
        "Gemini 작업 (Google, 구 Spark): Gemini 앱 안의 클라우드 에이전트로, Gmail, Docs 등 Google 앱을 쓰고, 일정에 따라 또는 무언가 일어났을 때 실행되며, 보내기, 삭제, 구매, 양식 제출 전에는 항상 물어봐요. Google 도움말 페이지에는 Google AI Pro 또는 Ultra가 나와 있어요.",
        "Meta Muse: Meta의 Muse Spark 모델로 돌아가는 개인 에이전트로, 사용자마다 자기 클라우드 컴퓨터가 있어요. 일정에 따라, 그리고 이벤트에 반응해 일하며, 내 승인 없이는 아무것도 게시하거나 보내거나 돈을 쓰지 않아요. Meta는 사람들이 필요로 하는 대부분은 무료이고, 더 필요하면 구독할 수 있다고 설명해요.",
        "Grok Bot (xAI): 자기 클라우드 컴퓨터를 가진 Bot이 내 도구에 로그인하고, Slack, Microsoft Teams, 화상 통화에서 일하며, 루틴을 실행하고 서로 일을 넘겨줘요. xAI의 Premium(월 $30), Super, Ultra 플랜에 포함돼요. [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)도 참고하세요.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "GitHub의 오픈소스 AI 동료",
      text: [
        "내 모델 키나 로컬 모델로 AI 동료를 직접 돌리고 싶다면 다음 오픈소스 프로젝트가 있어요.",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, 스타 약 19,000개): Andrew Ng의 '일상 업무를 위한 AI 동료'(\"AI coworker for your everyday work\")로, 오픈 베타 중인 macOS와 Windows용 데스크톱 앱이에요. OpenAI, Anthropic, Gemini 또는 로컬 모델로 내 컴퓨터에서 돌아가고, 동작 전에 승인을 거치게 하며, 브리핑과 보고서를 예약할 수 있어요.",
        "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, 스타 약 11,600개): CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스로, AI 동료마다 자기 브라우저, 파일, 도구가 있어요. 별도 라이선스인 CopilotKit Intelligence를 사용해요. [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot)도 참고하세요.",
        "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, 스타 약 7,000개): 'AI 동료를 위한 워크스페이스'(\"a workspace for AI coworkers\")로, 이름 붙은 에이전트를 루틴과 승인 기능과 함께 Claude Code, Codex, Gemini CLI처럼 이미 쓰는 엔진 위에서 돌려요.",
        "[ai-employees](https://github.com/markfulton/ai-employees) (MIT): 8개 비즈니스 직무를 예약된 루틴 폴더로 만든 프로젝트로, 이미 쓰는 에이전트 위에서 돌아가요.",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "코드를 위한 AI 동료: Cursor Projects",
      text: ["위의 AI 동료는 대부분 문서, 이메일, 리서치를 다뤄요. 소프트웨어 작업을 위해서는 Cursor가 Projects를 추가했어요."],
      points: [
        "코디네이터 에이전트가 기능, 마이그레이션, 앱 전체 같은 큰 작업을 계획하고, Cursor의 Cloud Agents에서 병렬로 돌아가는 에이전트들에게 맡긴 뒤, 끝난 작업을 내가 확인하도록 가져와요.",
        "각 Project는 자기 클라우드 컴퓨터에서 실행되어 노트북을 닫아도 멈추지 않고, 모든 에이전트가 읽는 공유 메모, 선호 사항, 작업 보드가 있어요.",
        "Slack 채널을 지켜보거나, 일정에 맞춰 실행하거나, 내 풀 리퀘스트를 따라갈 수 있어요. Multiplayer Projects에서는 팀원마다 코디네이터가 있고, 코디네이터끼리 메시지를 주고받아요.",
        "Cloud Agents가 있는 Cursor 플랜, 즉 Premium 월 $30부터 쓸 수 있고 Free나 Plus에는 없어요. [Cursor Projects 가이드](/personal-agent/cursor-projects)와 [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)을 참고하세요.",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "무료 AI 동료가 있나요?",
      points: [
        "Meta Muse: Meta에 따르면 사람들이 필요로 하는 대부분은 무료예요.",
        "ChatGPT Work: ChatGPT Free에서도 데스크톱 앱으로 제한적으로 쓸 수 있어요.",
        "오픈소스: OpenWorker, OpenBot(개인 프로젝트), Suparagent는 돌리는 데 비용이 들지 않아요. 모델 제공업체에 비용을 내거나 로컬 모델을 쓰면 돼요.",
        "Lindy: 7일간 $50 크레딧을 주는 무료 체험이 있어요.",
        "Crewmark: 프로젝트 1개, AI 직원 3명까지 무료이고, 이미 쓰고 있는 Claude Code나 Codex 구독으로 돌아가요.",
        "Claude Cowork, Gemini 작업, Copilot Cowork, Grok Bot은 유료 플랜이나 라이선스가 필요해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "AI 동료 고르는 법",
      steps: [
        { title: "내 일이 있는 곳에서 출발하세요", text: "회사에서 Microsoft 365를 쓴다면 Copilot Cowork, Gmail과 Google Docs를 쓴다면 Gemini부터 살펴보세요. 이미 Claude나 ChatGPT에 돈을 내고 있다면 Cowork나 Work가 플랜에 포함돼 있어요." },
        { title: "어디서 돌릴지 정하세요", text: "클라우드 AI 동료는 노트북을 닫아도 계속 일해요. 오픈소스 AI 동료는 데이터, 키, 파일을 내 컴퓨터에 그대로 둬요." },
        { title: "어떻게 묻는지 확인하세요", text: "보내기, 게시, 결제 전에 승인을 받는지, 그리고 무엇을 했는지 로그가 남는지 보세요." },
        { title: "반복 작업 하나를 2주 동안 맡겨 보세요", text: "주간 보고서나 매일 받은편지함 정리를 맡겨 보면 시간이 절약되는지 금방 알 수 있어요." },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "AI 동료 vs AI 직원",
      text: [
        "두 이름은 겹치는 부분이 있어요. 실제로 AI 동료는 일이 생길 때마다 작업을 맡기는 대상이고, AI 직원은 고정된 역할을 가져요. 직무 설명, 목표, 근무 시간, 그리고 스스로 가져가는 작업 대기열이요. 두 번째 개념을 중심으로 만든 플랫폼은 [AI 직원 플랫폼 비교](/blog/best-ai-employee-platforms)에서 비교했어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "코딩 에이전트에게 고정된 일자리를 주세요",
      text: [
        "Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔요. 각 직원은 공유 보드에서 다음 이슈를 가져가고, 결정이 필요하면 그 이슈에서 물어봐요.",
      ],
      steps: [
        { title: "직무 고르기", text: "[AI 직원 직무](/ai-employees)에서 골라요. [AI SEO 전문가](/ai-employees/seo-specialist) 같은 직무가 있어요." },
        { title: "일을 보드에 올리기", text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요." },
        { title: "할 수 있는 일 보기", text: "에이전트별 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요." },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "AI 동료 고르기" },
  mid: {
    title: "고정된 일자리를 가진 AI 동료가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex 에이전트에게 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "AI 동료란 무엇인가요?",
        a: "작업 하나를 통째로 맡기는 에이전트예요. 내 파일, 앱, 브라우저에서 일하고, 백그라운드에서 계속 작업하며, 일정에 따라 작업을 반복할 수 있고, 보내기, 게시, 구매, 삭제 전에는 먼저 물어봐요.",
      },
      {
        q: "Andrew Ng의 AI 동료는 무엇인가요?",
        a: "OpenWorker예요. MIT 라이선스의 macOS·Windows용 오픈소스 데스크톱 앱으로, github.com/andrewyng/openworker에 공개돼 있어요. README에서는 '일상 업무를 위한 AI 동료'(\"an AI coworker for your everyday work\")라고 소개해요. 내 모델 키나 로컬 모델로 내 컴퓨터에서 돌아가요.",
      },
      {
        q: "Claude Cowork는 무료인가요?",
        a: "아니요. Claude Cowork는 Claude 유료 플랜에서만 쓸 수 있고, Pro 월 $20(연간 결제 시 월 $17)부터예요. Claude Free에는 포함되지 않아요.",
      },
      {
        q: "Copilot Cowork 비용은 얼마인가요?",
        a: "Microsoft 365 Copilot 라이선스가 필요하고, 사용량은 Copilot Credits로 청구돼요. 종량제는 크레딧당 $0.01이고, 5%에서 20%까지 할인되는 1년 선불 플랜도 있어요.",
      },
      {
        q: "Claude Cowork vs Claude Code: 무엇이 다른가요?",
        a: "Claude Cowork는 Claude 앱에서 하는 코딩 외 업무용으로, 리서치, 문서, 스프레드시트, 슬라이드, 파일을 다뤄요. Claude Code는 내 저장소에서 쓰는 Anthropic의 코딩 에이전트예요. Anthropic은 Cowork가 Claude Code와 같은 아키텍처를 쓴다고 밝혔어요.",
      },
      {
        q: "GitHub에 오픈소스 AI 동료가 있나요?",
        a: "네. OpenWorker(Andrew Ng, MIT), OpenBot(CopilotKit, MIT), Suparagent(Apache-2.0), ai-employees(MIT) 등이 있어요.",
      },
    ],
  },
  cta: {
    title: "AI에게 작업만이 아니라 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 업체의 공식 사이트, 가격 페이지, 문서, GitHub와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
