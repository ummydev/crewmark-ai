import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

compact를 할 때는 테스트 출력과 코드 변경 사항을 중심으로 남겨 주세요.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 토큰 사용량 줄이는 법: 효과 있는 팁 12가지 | Crewmark",
    description:
      "Claude Code가 토큰을 많이 쓰는 이유와 줄이는 법: /usage와 /context로 사용량 확인, clear와 compact, 모델과 effort 선택, CLAUDE.md와 MCP 정리, 훅·스킬·서브에이전트 활용까지.",
  },
  breadcrumb: "Claude Code 토큰 사용량 줄이기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 토큰 사용량 줄이는 법 (한도에 그만 걸리기)",
    lead: "Claude Code는 요청할 때마다 대화 전체를 보내기 때문에, 토큰 사용량은 컨텍스트와 함께 늘어나요. 긴 세션 막바지에 던진 한 줄짜리 질문은 새 세션에서 같은 질문을 할 때보다 훨씬 비싸요. 이 가이드에서는 먼저 토큰이 어디에 쓰이는지 확인하는 법을 보여 주고, 이어서 Anthropic 공식 문서에 나온 사용량 절감법 12가지를 소개해요. `/clear`와 `/compact`부터 모델과 effort 고르기, CLAUDE.md와 MCP 서버 정리, 출력이 시끄러운 작업을 훅, 스킬, 서브에이전트로 옮기는 법까지 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "팁으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "먼저 토큰이 어디에 쓰이는지 확인하기",
      headers: ["도구", "보여 주는 것"],
      rows: [
        ["`/usage`", "세션 토큰과 예상 비용. Pro, Max, Ultra, Team, Enterprise에서는 요금제 사용량 막대, 스킬·서브에이전트·플러그인·MCP 서버별 내역, 추천 사항, 가장 많이 쓰는 `/loop` 작업도 표시"],
        ["`/context`", "지금 컨텍스트 창을 무엇이 채우고 있는지"],
        ["상태 표시줄", "설정하면 컨텍스트 사용량을 계속 표시"],
        ["스피너 카운트", "현재 턴의 출력 토큰(예: `↓ 5.5k tokens`). 컨텍스트는 포함하지 않음"],
        ["`/insights`", "최근 세션들에서 어떻게 일했는지 정리한 HTML 보고서. 막힌 지점과 제안 포함"],
      ],
    },
    {
      kind: "text",
      title: "긴 세션에서 사용량이 치솟는 이유",
      points: [
        "긴 컨텍스트: 요청마다 전체 대화가 함께 가고, 도구 호출이 한 번 돌 때마다 요청이 또 나가요. 캐싱 덕분에 다시 읽는 비용이 싸지지만 공짜는 아니에요.",
        "캐시 미스: 캐시 유지 시간보다 오래 자리를 비운 뒤 보내는 첫 메시지는 컨텍스트 전체를 다시 처리해요.",
        "자리를 비운 동안 돌아가는 것들: 세션 범위의 예약 작업과 `/loop`, 다른 세션에서 온 메시지, 목표 점검, 세션 요약, 유휴 시 자동 compact.",
        "병렬 작업자: 서브에이전트, 워크플로 에이전트, agent team 팀원은 각자 요청을 보내요. 팀원이 플랜 모드로 돌면 agent teams는 일반 세션의 약 7x 토큰을 써요.",
        "compact 자체: `/compact`는 요약할 대화를 읽어야 해요. `/clear`는 비용이 들지 않아요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 토큰 사용량을 줄이는 12가지 방법",
      steps: [
        {
          title: "관련 없는 작업 사이에는 대화 비우기",
          text: "`/clear`로 새 대화를 시작하면 오래된 컨텍스트가 더 이상 따라붙지 않아요. 나중에 `/resume`으로 돌아오고 싶다면 먼저 `/rename`을 실행하세요.",
        },
        {
          title: "지시를 붙여서 compact하기",
          text: "`/compact Focus on code samples and API usage`처럼 무엇을 남길지 Claude에게 알려 주세요. 늘 쓰는 compact 지시는 CLAUDE.md에 넣어 둘 수도 있어요.",
          code: compact,
        },
        {
          title: "알맞은 모델 쓰기",
          text: "Sonnet은 대부분의 코딩을 처리하고 Opus보다 저렴해요. Opus는 아키텍처와 어려운 추론에 아껴 두세요. `/model`로 바꾸고, 단순한 서브에이전트에는 `model: haiku`를 지정하세요.",
        },
        {
          title: "간단한 작업은 effort 낮추기",
          text: "사고 토큰은 출력으로 과금되고, 요청 한 번에 수만 개까지 늘어날 수 있어요. 일상적인 작업에서는 `/effort`로 단계를 낮추세요.",
        },
        {
          title: "CLAUDE.md는 짧게",
          text: "CLAUDE.md는 세션마다 통째로 로드돼요. 200줄 정도 이내로 유지하고, 특정 워크플로용 지시는 쓸 때만 로드되는 스킬로 옮기세요. [CLAUDE.md 가이드](/blog/claude-md)와 [Claude Code 스킬](/blog/claude-code-skills)을 참고하세요.",
        },
        {
          title: "MCP 서버 정리하기",
          text: "도구 정의는 기본적으로 지연 로드되지만, 서버마다 이름과 설명은 여전히 추가돼요. 안 쓰는 서버는 `/mcp`에서 끄고, 도구별 목록을 추가하지 않는 `gh`, `aws`, `gcloud` 같은 CLI를 우선 쓰세요.",
        },
        {
          title: "훅으로 시끄러운 출력 걸러내기",
          text: "PreToolUse 훅으로 테스트 명령을 고쳐 실패만 남기면, 수만 토큰짜리 로그가 수백 토큰으로 줄어요. Anthropic 문서에 바로 쓸 수 있는 필터 스크립트가 있어요.",
          code: hook,
        },
        {
          title: "장황한 작업은 서브에이전트에 맡기기",
          text: "테스트 실행, 문서 읽기, 로그 처리를 서브에이전트에서 하면 출력은 그 컨텍스트에 남고 요약만 돌아와요. 이런 서브에이전트에는 더 작은 모델을 주세요.",
        },
        {
          title: "코드 인텔리전스 플러그인 설치하기",
          text: "타입이 있는 언어라면 언어 서버 플러그인이 \"정의로 이동\"을 한 번의 호출로 처리해요. grep을 하고 파일을 여러 개 읽을 필요가 없어요.",
        },
        {
          title: "구체적인 프롬프트 쓰기",
          text: "\"auth.ts의 login 함수에 입력 검증을 추가해 줘\"는 파일 몇 개만 읽지만, \"이 코드베이스를 개선해 줘\"는 전부 훑어요.",
        },
        {
          title: "먼저 계획하고, 일찍 멈추기",
          text: "큰 변경에는 [플랜 모드](/blog/claude-code-plan-mode)를 써서 코드를 쓰기 전에 잘못된 방향을 잡아내세요. Claude가 엇나가는 순간 Escape를 누르고, `/rewind`로 체크포인트로 되돌리세요.",
        },
        {
          title: "자리를 비운 동안 돌아가는 것 살피기",
          text: "예약 작업, `/loop` 실행, 유휴 메시지는 모두 전체 컨텍스트를 보내요. 필요 없는 루프는 멈추고, `crossSessionInbound`를 `hold`로 설정해 다른 세션에서 온 메시지를 대기열에 쌓아 두고, `/usage`의 Loops 행을 확인하세요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "사용량 한도와 팀 비용",
      text: [
        "Pro, Max, Ultra에서는 사용량이 청구서가 아니라 요금제 한도에서 차감돼요. 5시간 한도와 주간 한도가 어떻게 작동하는지는 [Claude Code vs Codex](/blog/claude-code-vs-codex)를 참고하세요. API의 경우 Anthropic은 기업 평균이 개발자 1명당 활동일 하루 약 $13, 한 달 $150~$250이고, 사용자의 90%가 하루 $30 미만이라고 밝혔어요.",
        "관리자는 팀에 지출 한도를 설정할 수 있고, 관리형 설정에 `modelPricing` 테이블을 넣으면 `/usage`에 정가 대신 계약 요율이 표시돼요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "일정에 맞춰 일하고, 밤새 토큰을 태우지 않는 에이전트",
      text: [
        "세션을 깨우는 건 무엇이든 전체 컨텍스트를 보내기 때문에, 늘 켜져 있는 에이전트에는 한계선이 필요해요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 AI 직원으로 바꾸고, 내가 정한 근무 시간에만 하트비트로 깨워요.",
      ],
      steps: [
        {
          title: "근무 시간과 리듬 정하기",
          text: "15분, 30분, 60분 간격 중 하나와 근무하는 시간대를 고르세요. 그 밖의 시간에는 잠들어 있어요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "한 번에 이슈 하나씩",
          text: "하트비트마다 보드에서 다음 이슈를 가져오기 때문에, 세션은 끝없는 탐색 대신 초점이 분명한 작업을 해요.",
        },
        {
          title: "이미 결제한 요금제 그대로",
          text: "직원은 기존 구독으로 돌아가고, 사용량은 요금제 한도에서 차감돼요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code 토큰 사용량 줄이기" },
  mid: {
    title: "토큰은 기다리는 데가 아니라 일하는 데 쓰세요.",
    text: "Crewmark는 직무, 목표, 보드의 다음 이슈를 주고 근무 시간에 Claude Code를 깨워요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code 토큰 사용량 FAQ",
    items: [
      {
        q: "Claude Code는 왜 토큰을 이렇게 많이 쓰나요?",
        a: "요청할 때마다 전체 대화를 보내고, 도구 호출이 한 번 돌 때마다 또 하나의 요청이 나가기 때문이에요. 긴 세션, 쉬고 난 뒤의 캐시 미스, 서브에이전트, 자리를 비운 동안 돌아가는 모든 것이 쌓여요.",
      },
      {
        q: "Claude Code 토큰 사용량은 어떻게 확인하나요?",
        a: "`/usage`로 세션 토큰, 요금제 사용량, 추천이 포함된 내역을 보고, `/context`로 컨텍스트 창을 무엇이 채우고 있는지 확인하세요. 상태 표시줄로 컨텍스트 사용량을 항상 띄워 둘 수도 있어요.",
      },
      {
        q: "토큰을 가장 빨리 아끼는 방법은 뭔가요?",
        a: "관련 없는 작업 사이에 `/clear`를 실행하고, Opus가 꼭 필요하지 않으면 Sonnet을 쓰고, CLAUDE.md를 짧게 유지하세요. 이 세 가지로 낭비 대부분을 잡을 수 있어요.",
      },
      {
        q: "/compact를 쓰면 토큰이 절약되나요?",
        a: "이후 메시지의 컨텍스트는 줄어들지만, compact 자체가 대화 전체를 읽기 때문에 큰 요청이 돼요. 이어서 작업할 필요가 없다면 `/clear`는 비용이 들지 않아요.",
      },
      {
        q: "MCP 서버도 토큰을 쓰나요?",
        a: "도구 정의는 쓸 때까지 지연 로드되지만, 서버마다 도구 이름과 설명은 여전히 추가돼요. 안 쓰는 서버는 끄고, CLI 도구가 있으면 그쪽을 우선 쓰세요.",
      },
      {
        q: "왜 이렇게 빨리 사용량 한도에 걸렸나요?",
        a: "대개 긴 세션, 몇 번의 캐시 미스, 또는 `/loop`, 예약 작업, 서브에이전트, agent teams 같은 백그라운드 작업 때문이에요. 유료 요금제라면 `/usage`에서 최근 사용량의 원인이 무엇인지 볼 수 있어요.",
      },
      {
        q: "서브에이전트를 쓰면 토큰이 절약되나요?",
        a: "장황한 출력을 메인 대화 밖에 두니 이후 요청이 작게 유지되지만, 서브에이전트 자체의 요청도 사용량에 포함돼요. 더 작은 모델을 주면 덜 쓸 수 있어요.",
      },
    ],
  },
  cta: {
    title: "내가 정한 일정대로 Claude Code가 일하게 하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(Manage costs effectively)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
