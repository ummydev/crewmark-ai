import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/claude-code-agent-teams; the English master is src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Agent Teams vs 서브에이전트 | Crewmark AI",
    description:
      "문서로 정리한 Claude Code agent teams: 서브에이전트와의 차이, 켜는 법과 팀 시작하기, tmux·iTerm2 분할 창, 팀 규모, 토큰 비용과 제한, 예시 프롬프트까지.",
  },
  breadcrumb: "Claude Code agent teams",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code agent teams vs 서브에이전트: 언제 무엇을 쓰고, 팀은 어떻게 꾸릴까",
    lead: "Agent teams를 쓰면 Claude Code 세션 하나가 팀 리드가 되어 팀원을 만들어요. 팀원은 각자 컨텍스트 창을 가진 별도의 Claude Code 인스턴스로, 작업 목록을 공유하고 서로 직접 메시지를 주고받아요. 서브에이전트는 더 가벼워요. 한 세션 안에서 정해진 일을 하고 요약을 돌려주는 도우미예요. Agent teams는 실험적 기능이라 기본적으로 꺼져 있어요. 이 가이드에서는 Anthropic 문서를 바탕으로 둘을 비교하고, 팀을 켜고 시작하는 법, tmux나 iTerm2 창에서 팀원을 보는 법, 흔한 문제를 피하는 법을 보여 드려요.",
    cta: "시작하기",
    secondary: "팀 설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams vs 서브에이전트",
      text: [
        "둘 다 별도의 컨텍스트 창에서 병렬로 일해요. 차이는 누가 조율하느냐예요. 서브에이전트는 메인 에이전트가 모든 걸 관리하고, 팀에서는 팀원들이 공유 목록에서 작업을 가져가고 서로 대화해요.",
      ],
      headers: ["", "서브에이전트", "Agent teams"],
      rows: [
        ["무엇인가", "한 세션 안의 도우미. `.claude/agents/`에 정의하거나 기본 제공(Explore, Plan, general-purpose)을 사용", "리드 세션 하나와 팀원 역할을 하는 별도의 Claude Code 인스턴스들"],
        ["컨텍스트", "자기 컨텍스트 창이 있고, 호출한 쪽에는 요약만 돌아감", "자기 컨텍스트 창이 있고, 완전히 독립적"],
        ["소통", "호출한 쪽에 결과를 돌려줌(이름 있는 서브에이전트끼리는 메시지 가능)", "팀원끼리 직접 메시지를 주고받고, 나도 어떤 팀원에게든 메시지 가능"],
        ["조율", "메인 에이전트가 모든 일을 관리", "가져가기, 의존 관계, 메시지를 갖춘 공유 작업 목록"],
        ["잘 맞는 일", "결과만 중요한 집중형 작업", "논의가 필요한 일: 리뷰, 토론, 레이어별로 나눈 기능 개발"],
        ["토큰 비용", "낮음", "높음: 팀원마다 별도의 Claude 인스턴스"],
        ["상태", "정식 제공", "실험적, 기본적으로 꺼짐"],
      ],
    },
    {
      kind: "text",
      title: "Agent teams를 써야 할 때(와 쓰지 말아야 할 때)",
      points: [
        "조사와 리뷰: 팀원들이 서로 다른 각도에서 문제를 보고, 서로의 결론에 반박해요.",
        "새 모듈이나 기능: 프런트엔드, 백엔드, 테스트처럼 팀원마다 별도 부분을 맡아요.",
        "가설이 경쟁하는 디버깅: 여러 팀원이 각자 자기 가설을 증명하고 다른 가설을 반박하려 해요.",
        "순서대로 해야 하는 일, 같은 파일을 고치는 일, 의존 관계가 많은 작업에는 맞지 않아요. 이럴 땐 세션 하나나 서브에이전트를 쓰세요.",
        "일상적인 일에도 맞지 않아요. 활성 팀원이 늘 때마다 토큰 사용량도 늘어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code agent team 설정하는 법",
      steps: [
        {
          title: "Agent teams 켜기",
          text: "환경 변수나 settings.json의 `env` 블록에서 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`를 `1`로 설정하세요. 팀은 대화형 세션에서만 돼요. `-p`(와 Agent SDK)에서는 Claude가 팀원을 만들지 않아요.",
          code: enable,
        },
        {
          title: "평소 말로 팀 설명하기",
          text: "팀원이 몇 명이고 각자 무엇을 하는지 말하세요. Claude가 공유 작업 목록을 만들고, 팀원을 만들고, 끝나면 결과를 종합해요.",
          code: prompt,
        },
        {
          title: "표시 모드 고르기",
          text: "기본값은 in-process 모드로, 어떤 터미널에서든 돼요. 팀원은 프롬프트 아래 패널에 표시되고, 화살표 키와 Enter로 열어 메시지를 보낼 수 있어요. 작업 목록은 `Ctrl+T`로 봐요. 분할 창 모드는 팀원마다 창을 따로 주며, tmux나 `it2` CLI를 설치한 iTerm2가 필요해요. `teammateMode`를 `auto`나 `tmux`로 설정하거나 `claude --teammate-mode auto`로 시작하세요.",
        },
        {
          title: "이미 정의한 역할 재사용하기",
          text: "“using the security-reviewer agent type”으로 팀원을 요청하면 `.claude/agents/`의 서브에이전트 정의를 도구, 모델, 지시 사항까지 그대로 재사용해요.",
        },
        {
          title: "방향을 잡고, 마지막에 종료하기",
          text: "팀원들을 확인하고 방향을 바꿔 주세요. 리드가 팀원의 일을 직접 하기 시작하면 “wait for your teammates”라고 말하세요. 끝낼 때는 리드에게 팀원을 이름으로 지정해 종료하라고 하세요. 팀 디렉터리는 세션이 끝날 때 정리돼요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Agent teams(영어)", href: docs },
    },
    {
      kind: "text",
      title: "모범 사례와 제한",
      points: [
        "팀원 3~5명, 한 명당 작업 5~6개 정도로 시작하세요. 집중한 세 명이 흩어진 다섯 명보다 나은 경우가 많아요.",
        "팀원마다 다른 파일을 맡기세요. 두 팀원이 같은 파일을 고치면 서로 덮어써요.",
        "작업 세부 사항은 팀원을 만드는 프롬프트에 넣으세요. 팀원은 CLAUDE.md, MCP 서버, skills를 불러오지만 리드의 대화는 모르기 때문이에요.",
        "hooks를 품질 게이트로 쓰세요. `TeammateIdle`, `TaskCreated`, `TaskCompleted`는 종료 코드 2로 작업을 되돌려 보낼 수 있어요.",
        "제한: 세션당 팀 하나, 중첩 팀 불가, 리드 교체 불가, `/resume`으로 in-process 팀원이 돌아오지 않음, 작업 상태가 늦게 반영될 수 있음.",
        "분할 창은 VS Code 통합 터미널, Windows Terminal, Ghostty에서 안 돼요. in-process 모드는 어디서든 돼요.",
        "Agent teams를 켜면 Claude가 이름으로 부른 서브에이전트가 팀원으로 실행될 수 있어요. 일반 서브에이전트로 돌아가려면 변수를 `0`으로 설정하세요.",
      ],
    },
    {
      kind: "text",
      title: "Agent teams vs Claude Code를 병렬로 돌리는 다른 방법",
      text: [
        "Agent teams는 내가 지켜보는 작업 하나를 세션 하나 안에서 나눠요. 서로 독립적인 작업이라면 [git worktrees](/blog/claude-code-worktree)에서 별도 세션을 돌리거나 [백그라운드 에이전트](/blog/claude-code-background-agents)로 돌리세요. 전체 비교는 [Claude Code 에이전트 여러 개 실행](/blog/multiple-claude-code-agents)을, 비용을 줄이려면 [Claude Code 토큰 사용량 줄이는 법](/blog/reduce-claude-code-token-usage)을 읽어 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "세션이 끝나도 계속 일하는 팀",
      text: [
        "Agent team은 세션 하나 안에만 있고, 세션을 닫으면 멈춰요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 계속 유지되는 직무, 목표, 근무 시간을 가진 AI 직원으로 바꿔요. 직원은 하트비트로 깨어나 공유 보드에서 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "직원마다 직무 주기",
          text: "[소프트웨어 엔지니어](/ai-employees/software-engineer), 리뷰어, [SEO 전문가](/ai-employees/seo-specialist): 팀원으로 만들던 역할을 영구히 유지해요.",
        },
        {
          title: "보드 하나에서 일하기",
          text: "이슈가 세션의 작업 목록을 대신하고, 재시작해도, 며칠이나 몇 주가 지나도 남아 있어요.",
        },
        {
          title: "하트비트로 일 시작하기",
          text: "근무 시간 동안 15분, 30분, 60분마다요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code agent team 설정하기" },
  mid: {
    title: "세션과 함께 끝나지 않는 팀이 필요하신가요?",
    text: "Crewmark는 이미 쓰고 있는 요금제 그대로, Claude Code 직원이 하트비트에 맞춰 공유 보드에서 계속 일하게 해 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code agent teams FAQ",
    items: [
      {
        q: "Claude Code agent teams란 무엇인가요?",
        a: "Claude Code 세션 하나가 별도의 Claude Code 인스턴스들로 이루어진 팀을 이끄는 실험적 기능이에요. 팀원은 각자 컨텍스트 창을 갖고, 작업 목록을 공유하며, 서로와 리드에게 직접 메시지를 보내요.",
      },
      {
        q: "Agent teams와 서브에이전트는 무엇이 다른가요?",
        a: "서브에이전트는 한 세션 안에서 일하고 모든 걸 조율하는 메인 에이전트에게 요약을 돌려줘요. Agent teams는 별도의 인스턴스로, 공유 작업 목록과 직접 메시지로 스스로 조율하며 토큰 비용이 더 들어요.",
      },
      {
        q: "Claude Code에서 agent teams를 어떻게 켜나요?",
        a: "환경 변수나 settings.json의 env 블록에서 CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS를 1로 설정한 다음, 대화형 세션에서 Claude에게 작업할 팀원을 만들어 달라고 요청하세요.",
      },
      {
        q: "Agent teams에 tmux가 필요한가요?",
        a: "아니요. 기본 in-process 모드는 어떤 터미널에서든 돼요. tmux나 it2 CLI를 설치한 iTerm2는 팀원마다 분할 창을 쓰고 싶을 때만 필요해요.",
      },
      {
        q: "팀원은 몇 명이 좋나요?",
        a: "Anthropic은 팀원 3~5명, 한 명당 작업 5~6개 정도로 시작하라고 권해요. 비용은 팀원 수만큼 늘고, 팀원이 많을수록 조율 부담도 커져요.",
      },
      {
        q: "Agent teams를 VS Code에서 쓸 수 있나요?",
        a: "in-process 모드는 VS Code 통합 터미널을 포함해 어떤 터미널에서든 돼요. 분할 창 모드는 거기서 지원되지 않아요.",
      },
      {
        q: "서브에이전트를 원했는데 왜 Claude가 팀원을 만드나요?",
        a: "Agent teams가 켜져 있으면 Claude가 이름으로 부른 서브에이전트가 팀원으로 실행돼요. CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS를 0으로 설정하면 일반 서브에이전트로 돌아가요.",
      },
    ],
  },
  cta: {
    title: "Agent team을 상시 일하는 팀으로 바꾸세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 Claude Code 문서(Agent teams와 서브에이전트)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
