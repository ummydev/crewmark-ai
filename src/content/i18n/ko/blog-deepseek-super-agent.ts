import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent란? 설정 방법 총정리 | Crewmark AI",
    description:
      "DeepSeek의 오픈소스 Super-Agent(dsh-superagent)는 GitHub 저장소 하나를 맡는 능동형 코딩 에이전트예요. 기능, 요구 사항, 설정, 안전 한계, 비교까지 정리했어요.",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "블로그 · DeepSeek",
    title: "DeepSeek Super-Agent란 무엇이고 어떻게 설정할까",
    lead: "dsh-superagent는 GitHub 저장소 하나를 맡는 DeepSeek의 오픈소스 능동형 코딩 에이전트로, 2026년 10월 31일 MIT 라이선스로 공개됐어요. DeepSeek Harness 위에서 돌아가며 GitHub(원하면 Feishu도)를 지켜보고, 요청을 풀 리퀘스트로 바꿔요. 요청마다 전용 세션과 디렉터리에서 작업해요. 이 가이드에서는 무엇을 하는지, 무엇이 필요한지, 설정 방법, 실제로 “능동적”이라는 게 무슨 뜻인지, 그리고 다른 서비스와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "DeepSeek Super-Agent란",
      text: [
        "저장소는 dsh-superagent를 “GitHub 저장소 하나를 위한 능동형 코딩 에이전트로, DeepSeek Harness용 번들로 제공된다”라고 설명해요. 허용 목록에 있는 사람이 일을 요청하면 작업 항목(Ticket)을 열고, 전용 에이전트 세션과 디렉터리에서 작업한 뒤, 원래 대화에 풀 리퀘스트 등으로 답해요. 웹 패널에는 사람이 처리해야 하는 것만 나와요.",
        "DeepSeek은 이를 연구용 프로토타입이라고 하며 “DeepSeek 공식 제품이 아니다”라고 밝혀요. 공개된 코드는 DeepSeek 내부 버전과 다르고, DeepSeek 글에 나온 설계 일부는 앞으로의 방향일 뿐 프로토타입에는 구현돼 있지 않아요.",
      ],
      points: [
        "입력 소스: GitHub 알림, 구독 중인 이슈와 풀 리퀘스트, CI 변화, 병합되거나 닫힌 풀 리퀘스트. 추가하면 Feishu 채팅도 받아요.",
        "병렬 작업: Ticket마다 `worker-<ticket id>`라는 이름의 전용 실행 세션과 전용 디렉터리(대개 `git worktree` 체크아웃)를 갖고, 동시 실행 수는 설정한 상한까지예요.",
        "후속 대응: 이슈나 풀 리퀘스트에 나중에 달린 댓글은 그 건을 맡은 Ticket에 전달되므로 에이전트를 다시 멘션할 필요가 없어요.",
        "스스로 정한 규칙: “사람의 주의를 최대한 덜 쓰고, 최대한 많은 가치를 준다.” 요청은 한 번만 확인하고, 작업하는 동안은 조용히 있다가, 결과나 질문이나 실패가 있을 때만 다시 연락해요.",
      ],
    },
    {
      kind: "table",
      title: "정말 능동적일까? 세 가지 accept 모드",
      text: [
        "언론에서는 묻지 않아도 버그를 고치는 에이전트라고 소개해요. 문서는 더 신중해요. 허용된 사람의 직접 요청은 언제나 통하지만, 아무도 요청하지 않은 작업에는 팀이 직접 쓴 규칙이 필요하고, 기본 모드는 에이전트가 했을 일을 기록만 해요.",
      ],
      headers: ["accept 모드", "아무도 요청하지 않은 작업은 어떻게 되나"],
      rows: [
        ["`off`", "무시: 허용된 사람의 직접 요청만 작업을 시작해요"],
        ["`observe`(기본값)", "규칙에 비추어 평가하고 “would accept”로 기록하지만, 아무것도 시작하지 않아요"],
        ["`auto`", "규칙 중 하나라도 맞으면 시작돼요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "dsh-superagent 설정 방법",
      text: [
        "Node.js 22.19+ 또는 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 또는 이후의 0.2 릴리스, 그리고 DeepSeek Harness에 설정한 모델 제공자가 필요해요. 설정 과정이 길어서, 저장소는 내 코딩 에이전트가 단계별로 안내하게 해 둬요.",
      ],
      steps: [
        {
          title: "DeepSeek Harness 설치하기",
          text: "DeepSeek Harness(`dsh`)는 DeepSeek의 오픈소스 에이전트 하네스로, 개발자 프리뷰 단계예요. 한 번 실행해 모델 제공자를 설정하세요. Web UI는 `http://127.0.0.1:3080`에서 열려요.",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "저장소를 클론하고 SETUP.md를 코딩 에이전트에 넘기기",
          text: "체크아웃한 디렉터리에서 코딩 에이전트에게 SETUP.md를 읽게 하세요. 에이전트가 내 컴퓨터를 살펴보고, 메시지마다 질문을 하나씩 하고, 전체 계획을 한 번 보여 준 뒤에야 설치를 시작해요.",
          code: "git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git\ncd dsh-superagent-prototype\n# then ask your coding agent:\n# Read SETUP.md in this repository and set up dsh-superagent with me.",
        },
        {
          title: "설정 질문에 답하기",
          text: "요청이 들어오는 곳(GitHub만 쓸지 Feishu도 쓸지), 어느 저장소인지, 에이전트가 쓸 GitHub 계정(전용 계정을 쓰고 내 계정은 절대 쓰지 않기), 어떤 로그인이 일을 요청할 수 있는지, 각 Ticket이 체크아웃할 클론, 커밋 작성자 이름, 에이전트가 auto-merge를 켜도 되는지(권장 답변은 “아니요”).",
        },
        {
          title: "나만 할 수 있는 단계 하기",
          text: "에이전트용 GitHub 계정을 만들고, 그 계정으로 저장소 초대를 수락하고, CLI에 로그인하세요. 에이전트는 채팅에서 비밀 값을 절대 묻지 않고, 내 터미널에서 실행할 정확한 명령어를 알려 줘요.",
        },
        {
          title: "적용되는 기본값 확인하기",
          text: "`superagent`라는 별도의 DeepSeek Harness 프로필(포트 3082), `agent/`로 시작하는 브랜치, accept 모드 `observe`, 그리고 에이전트가 멈췄으면 다시 시작하는 1시간마다의 점검.",
        },
        {
          title: "첫 요청 보내기",
          text: "허용된 계정으로 이슈에 `@<agent login> <request>`라고 댓글을 다세요. 약 1분 안에 패널에 Ticket이 나타나고, 에이전트가 접수를 알린 뒤 전용 디렉터리에서 작업하고 같은 스레드에 답해요. 보통은 풀 리퀘스트예요.",
        },
      ],
      source: { label: "출처: GitHub의 dsh-superagent 저장소", href: repo },
    },
    {
      kind: "text",
      title: "안전: 실행하기 전에 알아 둘 것",
      points: [
        "워커는 내 OS 사용자로서 `danger-full-access`로 실행돼요. 홈 디렉터리를 읽을 수 있고 경로만 알면 어떤 프로그램이든 실행할 수 있어요. 계정 래퍼는 자격 증명을 고를 뿐 보안 경계가 아니에요.",
        "격리하려면, DeepSeek 문서는 에이전트의 자격 증명만 가진 전용 OS 계정으로 실행하라고 해요.",
        "에이전트가 쓰는 모든 것은 에이전트의 GitHub 계정 이름으로 올라가므로, 설정 과정에서는 전용 계정과 처음에는 짧은 허용 목록을 권장해요.",
        "메시지나 댓글로는 누가 일을 요청할 수 있는지 바꿀 수 없어요. 허용 목록, 규칙, accept 모드는 패널에서만 바꿀 수 있어요.",
        "매 턴이 끝난 뒤 백그라운드 작업이 끝날 때까지 최대 30분을 주고, 그 뒤에는 셸 작업이 중지되고 Ticket이 대기 상태로 표시돼요.",
        "연구용 프로토타입이고, DeepSeek Harness는 개발자 프리뷰라서 호환성이 깨지는 변경이 예상돼요.",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "셋 모두 내가 채팅에 없어도 계속 일하는 에이전트지만, 일을 시작하는 방식이 달라요. Super-Agent는 멘션이나 팀이 쓴 규칙을 기다리고, [ChatGPT dots](/blog/chatgpt-dots)는 OpenAI의 클라우드에서 살아요. Crewmark는 DeepSeek Harness를 포함해 이미 쓰고 있는 코딩 에이전트를 일정에 맞춰 깨워요.",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["실행 위치", "내 컴퓨터, DeepSeek Harness 안", "OpenAI의 클라우드 컴퓨터", "내 컴퓨터, DeepSeek Harness, Claude Code, Codex, OpenCode 안"],
        ["일을 시작하는 방식", "허용된 사람의 @멘션, 또는 `auto` 모드의 규칙", "내 메시지, 예약 일정, 자체 조사", "근무 시간 중 15~60분마다 하트비트"],
        ["업무 대기열", "GitHub와 Feishu 스레드에서 온 Ticket", "대화 스레드와 Scheduled", "칸반 보드의 이슈"],
        ["범위", "설정 하나당 GitHub 저장소 하나", "내가 연결한 앱", "SEO나 엔지니어링처럼 직무마다 직원 한 명"],
        ["비용", "무료, MIT 라이선스. 모델 제공자 비용은 직접 부담", "Pro와 Business Premium 요금제", "누구나 가입 가능. 이미 쓰고 있는 에이전트와 요금제로 실행"],
        ["상태", "연구용 프로토타입", "순차 제공 중", "누구나 가입 가능"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "DeepSeek Harness, Claude Code, Codex 세션을 능동적으로 만들기",
      text: [
        "Super-Agent는 저장소마다 별도의 프로필, 계정, 설정이 필요해요. Crewmark는 DeepSeek Harness를 포함해 이미 쓰고 있는 에이전트와 그대로 함께 작동해요. 그 세션에 직무, 목표, 근무 시간을 주고, 하트비트로 깨워서 보드에서 다음 이슈를 가져가게 해요. 저장소 하나에 한정되지 않고 어떤 종류의 일에도 쓸 수 있어요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 만들기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표를 숫자로 적은 다음, DeepSeek Harness, Claude Code, Codex, OpenCode 중 하나에서 설정 명령어를 실행하세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 중에 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 하던 일을 이어서 해요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "이슈를 맡기고 메시지에 답하기",
          text: "보드에 일을 올리면 직원이 가져가서 진행하며 댓글을 달고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek의 dsh-superagent 설정하기" },
  mid: {
    title: "이미 DeepSeek Harness, Claude Code, Codex를 쓰고 있나요?",
    text: "Crewmark는 그 세션을 능동적으로 만들어 줘요. 하트비트, 근무 시간, 이슈 보드를 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "DeepSeek Super-Agent 자주 묻는 질문",
    items: [
      {
        q: "DeepSeek Super-Agent란 무엇인가요?",
        a: "dsh-superagent는 GitHub 저장소 하나를 맡는 오픈소스 능동형 코딩 에이전트로, DeepSeek이 2026년 10월 31일 연구용 프로토타입으로 MIT 라이선스에 따라 공개했어요. DeepSeek Harness 위에서 돌아가고, GitHub(원하면 Feishu도)에서 요청을 받아 풀 리퀘스트로 답해요.",
      },
      {
        q: "DeepSeek Super-Agent는 무료인가요?",
        a: "코드는 MIT 라이선스로 무료예요. DeepSeek Harness 위에서 내가 설정한 모델 제공자를 쓰므로 모델 사용료는 직접 내요. DeepSeek은 호스팅 버전을 발표하지 않았어요.",
      },
      {
        q: "DeepSeek Super-Agent는 GitHub 어디에 있나요?",
        a: "github.com/deepseek-ai/dsh-superagent-prototype에 있어요. 그 기반이 되는 에이전트 하네스인 DeepSeek Harness는 github.com/deepseek-ai/deepseek-harness에 있어요.",
      },
      {
        q: "DeepSeek Super-Agent는 요청하지 않아도 버그를 고치나요?",
        a: "허용한 경우에만 그래요. 허용된 사람의 직접 요청은 언제나 통하지만, 요청되지 않은 작업에는 팀이 쓴 규칙이 필요하고, 기본 `observe` 모드는 했을 일을 기록만 해요. 그 기록을 검토한 뒤 `auto`로 바꾸세요.",
      },
      {
        q: "dsh-superagent를 Slack이나 Teams에서 쓸 수 있나요?",
        a: "이 프로토타입에서는 안 돼요. GitHub와 Feishu를 입력 소스로 제공하고, 다른 소스를 추가하는 방법은 함께 들어 있는 cookbook에 설명돼 있어요.",
      },
      {
        q: "실행해도 안전한가요?",
        a: "워커가 내 OS 사용자로서 전체 권한으로 실행되고 홈 디렉터리를 읽을 수 있어서, DeepSeek 문서는 에이전트의 자격 증명만 가진 전용 OS 계정, 전용 GitHub 계정, 그리고 짧은 허용 목록을 권장해요.",
      },
      {
        q: "Crewmark를 DeepSeek Harness와 함께 쓸 수 있나요?",
        a: "네. Crewmark는 DeepSeek Harness, Claude Code, Codex, OpenCode와 연결돼요. 세션을 AI 직원으로 바꿔 근무 시간 중에 하트비트로 깨우고 보드에서 이슈를 가져가게 하며, 모델 제공자는 이미 쓰고 있는 것을 그대로 써요.",
      },
    ],
  },
  cta: {
    title: "이미 쓰고 있는 에이전트를 능동적으로 만드세요.",
    text: "Crewmark는 DeepSeek Harness, Claude Code, Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 3일에 GitHub의 dsh-superagent 및 DeepSeek Harness 저장소와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, DeepSeek, OpenAI, Anthropic과 제휴하거나 이들의 보증을 받지 않았습니다. DeepSeek은 DeepSeek의, ChatGPT는 OpenAI의, Claude Code는 Anthropic의 상표입니다.",
};
