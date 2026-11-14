import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Superagent란? 슈퍼 에이전트 총비교 | Crewmark AI",
    description:
      "“Superagent”는 여러 AI 제품의 이름이에요. 슈퍼 에이전트가 무엇인지, DeepSeek의 Super-agent가 왜 화제인지, Base44 Superagents, ClickUp Super Agents, Genspark, 오픈소스 superagent-ai 프로젝트와 어떻게 다른지 정리했어요.",
  },
  breadcrumb: "Superagent란",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · AI 에이전트",
    title: "Superagent란? 2026년의 모든 “Superagent” 비교",
    lead: "슈퍼 에이전트(superagent)는 스스로 계속 일하는 AI 에이전트예요. 할 일을 살피고, 단계마다 지시하지 않아도 작업을 맡아 백그라운드에서 처리하며, 결정이 필요할 때만 나를 찾아와요. 이번 달 이 단어가 어디서나 보이는 건 DeepSeek이 2026년 10월 31일 Super-agent 프로토타입을 오픈소스로 공개했기 때문이지만, Base44와 ClickUp부터 오픈소스 보안 도구까지 이미 여러 제품이 이 이름을 쓰고 있어요. 이 가이드에서는 개념, 각 제품의 실제 정체, 고르는 방법을 설명해요.",
    cta: "시작하기",
    secondary: "비교로 바로 가기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent의 정의",
      text: [
        "정해진 표준은 없지만, 슈퍼 에이전트를 내세우는 제품은 모두 같은 생각을 공유해요. 물어볼 때만 답하는 어시스턴트에서, 계속되는 일을 책임지는 에이전트로 넘어가는 거예요.",
      ],
      points: [
        "스스로 일을 시작해요. 채팅 프롬프트뿐 아니라 일정, 트리거, 메시지, 배정된 작업이 출발점이 돼요.",
        "백그라운드에서 실행되고, 여러 작업을 동시에 각자의 세션에서 처리하는 경우가 많아요.",
        "작업 사이에 맥락을 기억하고, GitHub, Slack, Gmail, 프로젝트 보드처럼 일이 일어나는 도구와 연결돼요.",
        "결정이나 승인이 필요할 때만 사람의 주의를 요청해요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "모든 “Superagent” 비교",
      text: [
        "2026년 11월 6일 기준 각 제작사의 웹사이트나 GitHub 저장소에서 확인한 내용이에요.",
      ],
      headers: ["제품", "만든 곳", "무엇인가", "일이 시작되는 방식", "가격"],
      rows: [
        ["DeepSeek Super-agent(dsh-superagent)", "DeepSeek의 Harness 팀", "GitHub 저장소 하나를 맡는 능동형 코딩 에이전트. 연구용 프로토타입이며 공식 제품이 아님", "허용된 사람이 GitHub(원하면 Feishu도)에서 한 요청, 또는 팀이 쓴 규칙", "무료, MIT. DeepSeek Harness 위에서 실행"],
        ["Base44 Superagents", "Base44(Wix 소속)", "평범한 말로 설명하면 만들어지는 노코드 에이전트. 개인 또는 업무용", "일정, 트리거, 웹훅, WhatsApp·Telegram·Slack 같은 채팅 앱", "Base44 요금제 크레딧 사용. 무료 요금제가 있고, 유료는 연간 결제 시 월 $16부터"],
        ["ClickUp Super Agents", "ClickUp", "ClickUp 워크스페이스 안의 AI 팀원. 분류, 일정 관리, 보고, 항목 생성을 맡음", "@멘션, 배정된 작업, DM, 일정, 트리거", "모든 사용자에게 개방. 사용량은 AI 크레딧으로 과금"],
        ["Genspark Super Agent", "Genspark", "리서치, 슬라이드, 문서 등에 쓰는 범용 에이전트", "내 프롬프트", "genspark.ai 참고"],
        ["superagent-ai/superagent", "Superagent(오픈소스)", "2023년 에이전트 프레임워크로 시작. 지금은 AI 앱을 프롬프트 인젝션과 데이터 유출로부터 보호", "앱의 처리 파이프라인 안에서 실행", "오픈소스, MIT"],
        ["superagent-ai/grok-cli", "커뮤니티 프로젝트, xAI와 무관", "Grok API용 오픈소스 터미널 코딩 에이전트", "내 프롬프트. 서브 에이전트와 Telegram 원격 제어 지원", "무료, MIT. Grok API 키는 직접 준비"],
        ["Crewmark", "Crewmark", "Claude Code, Codex, DeepSeek Harness, OpenCode 위에 만드는 AI 직원", "근무 시간 동안 하트비트가 보드에서 다음 이슈를 가져가게 함", "누구나 가입 가능. 지금 쓰는 구독으로 실행"],
      ],
    },
    {
      kind: "text",
      title: "지금 모두가 “superagent”를 검색하는 이유: DeepSeek",
      text: [
        "2026년 10월 31일 DeepSeek은 dsh-superagent라는 연구용 프로토타입과 슈퍼 에이전트 설계에 관한 글을 공개했고, 저장소는 일주일 만에 GitHub 스타 약 20,000개를 넘겼어요. DeepSeek Harness를 GitHub를 지켜보는 에이전트로 바꿔 주는데, 스스로 작업 항목을 만들고 각각을 별도 세션에서 실행한 뒤 풀 리퀘스트 같은 결과로 답해요. 사람이 처리해야 할 것은 웹 패널에 보여 줘요. 목표는 사람의 주의를 최대한 적게 쓰는 것이라고 밝히고 있어요. 자세한 내용은 [DeepSeek Super-Agent란](/blog/deepseek-super-agent)에서 확인하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "슈퍼 에이전트 고르는 법",
      steps: [
        {
          title: "일이 있는 곳에서 출발하세요",
          text: "코드가 GitHub에 있다면 DeepSeek의 프로토타입이나 Claude Code, Codex 기반 에이전트, ClickUp 워크스페이스라면 ClickUp Super Agents, 개인 용무와 메시지라면 Base44가 맞아요.",
        },
        {
          title: "일이 어떻게 시작되는지 확인하세요",
          text: "진짜 슈퍼 에이전트는 매번 프롬프트를 기다리지 않아요. 일정, 트리거, 작업 배정, 하트비트가 있는지, 그리고 무엇을 하고 있는지 볼 수 있는 곳이 분명한지 확인하세요.",
        },
        {
          title: "혼자 무엇을 해도 되는지 확인하세요",
          text: "병합, 발송, 결제처럼 위험한 작업 전에는 먼저 묻고, 검토할 수 있는 기록을 남기는 에이전트를 고르세요. DeepSeek의 프로토타입은 요청이나 팀이 쓴 규칙이 있을 때만 움직여요.",
        },
        {
          title: "누구의 모델을 쓰고 누가 비용을 내는지 확인하세요",
          text: "워크스페이스형 제품은 요금제에 더해 크레딧을 청구하고, 오픈소스 도구는 내 API 키나 구독으로 돌아가요. [최고의 AI 직원 플랫폼](/blog/best-ai-employee-platforms)과도 비교해 보세요.",
        },
        {
          title: "프로토타입인가, 제품인가?",
          text: "DeepSeek은 Super-agent가 참고용일 뿐이라고 해요. 매일 하는 일에는 유지 관리되는 제품을 고르거나, 이미 믿고 쓰는 에이전트 위에 만드세요.",
        },
      ],
      source: { label: "출처: DeepSeek의 dsh-superagent 저장소", href: deepseek },
    },
    {
      kind: "text",
      title: "슈퍼 에이전트 vs AI 에이전트 vs AI 직원",
      text: [
        "AI 에이전트는 맡긴 작업을 끝내요. 슈퍼 에이전트는 여기에 자율성을 더해, 일을 알아차리거나 받아서 백그라운드에서 계속 진행해요. AI 직원은 한 걸음 더 나아가 그 에이전트에게 일자리를 줘요. 직무, 숫자로 측정하는 목표, 근무 시간, 일감 보드를 사람을 온보딩하듯 주는 거예요. [AI 직원이란](/ai-employees)과 [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "직무 기술서가 있는 슈퍼 에이전트",
      text: [
        "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 AI 직원으로 바꿔요. 근무 시간 동안 하트비트로 깨어나 공유 보드에서 다음 이슈를 가져가고, 일하면서 댓글을 달고, 결정이 필요하면 메시지를 보내요. 이미 내고 있는 구독 그대로요.",
      ],
      steps: [
        {
          title: "믿을 수 있는 에이전트 고르기",
          text: "DeepSeek의 Super-agent가 기반으로 하는 런타임인 DeepSeek Harness도 고를 수 있어요.",
        },
        {
          title: "직무와 목표 주기",
          text: "소프트웨어 엔지니어, SEO 전문가, 그로스 마케터. 각자 움직여야 할 숫자가 있어요.",
        },
        {
          title: "나머지는 하트비트에 맡기기",
          text: "근무 시간 동안 15분, 30분, 60분마다 다음 이슈를 가져가요. 나는 내가 필요한 것에만 답하면 돼요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "슈퍼 에이전트 고르기" },
  mid: {
    title: "내 저장소에서, 내 요금제로 일하는 슈퍼 에이전트가 필요한가요?",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness를 하트비트로 깨어나 다음 이슈를 스스로 가져가는 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Superagent 자주 묻는 질문",
    items: [
      {
        q: "슈퍼 에이전트(superagent)란 무엇인가요?",
        a: "시간을 두고 스스로 일하는 AI 에이전트예요. 트리거, 일정, 요청에서 작업을 시작해 백그라운드에서 실행하고, 결정이 필요할 때만 사람에게 물어요.",
      },
      {
        q: "DeepSeek Super-agent란 무엇인가요?",
        a: "DeepSeek이 2026년 10월 31일 오픈소스로 공개한 연구용 프로토타입(dsh-superagent, MIT)이에요. DeepSeek Harness가 GitHub 저장소 하나에서 능동적으로 일하게 해 줘요. DeepSeek은 참고용일 뿐 공식 제품이 아니라고 밝혀요.",
      },
      {
        q: "DeepSeek Super-agent는 무료인가요?",
        a: "네. 프로토타입과 DeepSeek Harness 모두 MIT 라이선스의 오픈소스예요. 그 뒤에서 쓰는 모델 사용료만 내면 돼요.",
      },
      {
        q: "Base44 Superagents란 무엇인가요?",
        a: "Base44(Wix 소속)에서 평범한 말로 설명하면 만들어지는 노코드 AI 에이전트예요. 일정과 트리거로 실행되고, Gmail, Drive, Notion, GitHub, Slack, MCP 서버와 연결되며, Base44 요금제의 크레딧을 써요.",
      },
      {
        q: "ClickUp Super Agents란 무엇인가요?",
        a: "2025년 12월 출시된 ClickUp 워크스페이스 안의 AI 팀원이에요. @멘션하거나, 작업을 배정하거나, 일정에 맞춰 돌릴 수 있어요. 모든 사용자에게 열려 있고 AI 크레딧을 써요.",
      },
      {
        q: "GitHub의 Superagent는 DeepSeek의 것과 같은가요?",
        a: "아니요. superagent-ai 조직은 DeepSeek과 무관해요. 그 superagent 저장소는 지금은 AI 보안 도구이고, grok-cli는 Grok API용 커뮤니티 코딩 에이전트예요.",
      },
      {
        q: "슈퍼 에이전트와 AI 직원은 어떻게 다른가요?",
        a: "슈퍼 에이전트는 자율적으로 작업을 처리해요. AI 직원은 직무, 목표, 근무 시간, 보드를 받은 자율 에이전트라서, 그 일이 팀원처럼 정리되고 측정돼요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트를 일자리가 있는 슈퍼 에이전트로 만드세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 각 제품의 웹사이트나 GitHub 저장소와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, DeepSeek, Base44, Wix, ClickUp, Genspark, superagent-ai 프로젝트와 제휴하거나 이들의 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
