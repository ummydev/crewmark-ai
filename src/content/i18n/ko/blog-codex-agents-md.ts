import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex AGENTS.md: 위치, 로드 순서, 예시 | Crewmark AI",
    description:
      "Codex가 AGENTS.md를 읽는 방식: 전역 ~/.codex 파일, 프로젝트와 중첩 파일, AGENTS.override.md, 로드 순서와 32 KiB 한도, 대체 파일 이름, 코드 리뷰 규칙, 예시까지 정리했어요.",
  },
  breadcrumb: "Codex AGENTS.md 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Codex AGENTS.md: 어디에 두고, 어떤 순서로 로드되고, 무엇을 쓸까",
    lead: "AGENTS.md는 OpenAI의 Codex가 작업을 시작하기 전에 읽는 지침 파일이에요. 빌드와 테스트 명령어, 규칙과 컨벤션을 평범한 Markdown으로 적어요. Codex는 `~/.codex`의 전역 파일과 저장소 루트부터 지금 작업 중인 폴더까지의 파일을 합쳐서 읽어요. 이 가이드에서는 모든 위치, 정확한 로드 순서와 크기 한도, 오버라이드, 대체 파일 이름, 코드 리뷰 규칙, 바로 복사해 쓸 수 있는 예시를 다뤄요.",
    cta: "시작하기",
    secondary: "설정 단계로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Codex가 AGENTS.md를 찾는 위치(로드 순서)",
      text: [
        "Codex는 시작할 때 지침 체인을 한 번 만들어요(터미널 UI에서는 세션마다 한 번). 파일은 이 표의 위에서 아래 순서로 이어 붙여지므로, 작업 디렉터리에 가까운 지침일수록 뒤에 오고 우선해요.",
      ],
      headers: ["순서", "위치", "Codex가 읽는 것"],
      rows: [
        ["1. 전역", "`~/.codex/`(또는 `$CODEX_HOME`)", "`AGENTS.override.md`가 있으면 그것, 없으면 `AGENTS.md`. 비어 있지 않은 첫 번째 파일 하나만"],
        ["2. 프로젝트 루트", "보통 Git 루트", "`AGENTS.override.md`, 없으면 `AGENTS.md`, 그것도 없으면 대체 파일 이름. 최대 한 파일"],
        ["3. 아래로 내려가는 각 폴더", "루트부터 Codex를 시작한 위치까지의 모든 디렉터리", "디렉터리마다 같은 확인을 하고 한 파일씩"],
        ["중단", "현재 디렉터리", "그 아래 폴더는 읽지 않아요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Codex용 AGENTS.md 설정하는 법",
      steps: [
        {
          title: "전역 기본값 만들기",
          text: "`mkdir -p ~/.codex`를 실행하고, 모든 저장소에서 쓰고 싶은 선호를 `~/.codex/AGENTS.md`에 적으세요. Codex에게 지침을 요약해 달라고 해서 로드되었는지 확인하세요.",
          code: global,
        },
        {
          title: "프로젝트 파일을 추가하고, 팀마다 다른 곳은 오버라이드하기",
          text: "공통 설정은 저장소 루트의 `AGENTS.md`에 두세요. 규칙이 다른 폴더에는 `AGENTS.override.md`를 추가하세요. 이 파일이 그 폴더의 `AGENTS.md`를 대체하고, Codex는 원래 파일을 무시해요.",
          code: project,
        },
        {
          title: "무엇이 로드됐는지 확인하기",
          text: "원하는 폴더에서 Codex를 시작하고(예: `codex --cd services/payments`), 로드한 지침 출처를 나열해 달라고 하세요. 전역 파일, 루트 파일, 그 폴더의 파일 순으로 나와야 해요.",
        },
        {
          title: "기존 파일 이름을 재사용하거나 한도 올리기",
          text: "저장소가 이미 다른 파일에 지침을 두고 있다면 `~/.codex/config.toml`의 `project_doc_fallback_filenames`에 추가하세요. 합친 크기가 `project_doc_max_bytes`(기본값 32 KiB)에 도달하면 Codex는 더 이상 파일을 추가하지 않아요.",
          code: config,
        },
        {
          title: "Codex 코드 리뷰 규칙 추가하기",
          text: "GitHub의 `@codex review`에 적용하려면, 해당 코드에 가장 가까운 AGENTS.md에 `## Code Review Rules` 섹션을 추가하세요. 무엇을 지적할지와 안전한 대안을 적고, 포맷과 lint는 CI에 맡기세요.",
          code: review,
        },
      ],
      source: { label: "출처: Codex 문서, Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "AGENTS.md 모범 사례",
      points: [
        "Codex가 스스로 알아낼 수 없는 것만 적으세요. 정확한 빌드, 테스트, lint 명령어(테스트 하나만 실행하는 방법 포함), 코드베이스의 함정, 어디에도 적혀 있지 않은 결정이요.",
        "가장 구체적인 규칙은 코드 가까이에 두세요. `services/payments/`에 중첩된 AGENTS.md가 루트의 긴 파일 속 결제 섹션보다 나아요.",
        "32 KiB 예산을 신경 쓰세요. 파일은 루트부터 차례로 추가되고 나머지는 잘리므로, 긴 파일은 중첩 파일로 나누거나 `project_doc_max_bytes`를 올리세요.",
        "임시 변경에는 전역이든 폴더 하나든 `AGENTS.override.md`를 쓰고, 지우면 원래대로 돌아가요.",
        "빈 AGENTS.md는 건너뛰고, 그 디렉터리에서는 다음 파일 이름을 확인해요.",
        "자동화용 사용자에게는 별도의 `CODEX_HOME`을 써서 그 전역 지침이 내 것과 섞이지 않게 하세요.",
      ],
    },
    {
      kind: "table",
      title: "Codex와 Claude Code 등에서의 AGENTS.md 비교",
      text: [
        "AGENTS.md는 많은 에이전트가 읽는 개방형 형식이라, 함께 쓰고 싶은 지침을 두기에 가장 좋은 곳이에요. Claude Code에는 자체 파일인 CLAUDE.md가 있어요. 자세한 내용은 [CLAUDE.md 가이드](/blog/claude-md)를 보세요.",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["기본 파일", "`AGENTS.md`", "`CLAUDE.md`. CLAUDE.md가 없을 때만 `AGENTS.md`를 읽음"],
        ["개인용 또는 임시 파일", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["전역 파일", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["중첩 폴더", "루트부터 현재 디렉터리까지", "시작 시 상위 디렉터리, 하위 폴더는 Claude가 그 안에서 작업할 때"],
        ["크기 한도", "기본값 합계 32 KiB", "파일별 한도. 200줄 이내 권장"],
        ["파일 하나 공유", "기본 지원", "CLAUDE.md 맨 위에 `@AGENTS.md` 넣기"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "AGENTS.md는 Codex에게 방법을, Crewmark는 다음 할 일을 알려 줘요.",
      text: [
        "좋은 AGENTS.md가 있으면 모든 Codex 세션이 상황을 알고 시작하지만, 세션은 여전히 여러분의 프롬프트를 기다려요. Crewmark는 Codex, Claude Code, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 갖춘 AI 직원으로 바꾸고, 하트비트로 깨워 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "AGENTS.md는 저장소에 그대로 두기",
          text: "직원의 Codex 세션도 여러분의 세션처럼 이 파일을 읽으니, 규칙과 테스트 명령어도 그대로 따라가요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Codex를 능동적으로 만드는 방법](/proactive-codex)을 참고하세요.",
        },
        {
          title: "한 보드에서 여러 에이전트 함께 쓰기",
          text: "AGENTS.md 하나로 Codex 직원과 Claude Code 직원을 나란히 운영할 수 있어요. [Claude Code vs Codex](/blog/claude-code-vs-codex)에서 비교해 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex용 AGENTS.md 설정하기" },
  mid: {
    title: "Codex는 규칙을 알아요. 다음 작업은 누가 줄까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Codex를 깨워요. 이미 결제한 ChatGPT 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Codex AGENTS.md 자주 묻는 질문",
    items: [
      {
        q: "Codex의 AGENTS.md란 무엇인가요?",
        a: "Codex가 작업 전에 읽는 지침을 담은 Markdown 파일이에요. 프로젝트의 명령어, 컨벤션, 규칙을 적어요. Codex는 전역 파일과 저장소의 파일을 합쳐서 읽어요.",
      },
      {
        q: "Codex는 AGENTS.md를 어디에서 찾나요?",
        a: "먼저 `~/.codex`(또는 `$CODEX_HOME`)에서, 그다음 프로젝트 루트부터 Codex를 시작한 폴더까지의 모든 디렉터리에서 찾고, 디렉터리마다 최대 한 파일을 읽어요.",
      },
      {
        q: "AGENTS.md 파일은 어떤 순서로 로드되나요?",
        a: "전역, 프로젝트 루트, 그리고 현재 디렉터리까지의 각 중첩 폴더 순이에요. 이 순서로 이어 붙여지므로 가장 가까운 파일이 마지막에 오고 우선해요.",
      },
      {
        q: "AGENTS.override.md란 무엇인가요?",
        a: "같은 디렉터리에서 Codex가 AGENTS.md 대신 읽는 파일로, 전역이나 폴더에 둘 수 있어요. 공유 파일을 고치지 않고 임시 규칙이나 팀별 규칙을 적을 때 써요.",
      },
      {
        q: "AGENTS.md에 크기 제한이 있나요?",
        a: "네. 합친 크기가 `project_doc_max_bytes`(기본값 32 KiB)에 도달하면 Codex는 더 이상 파일을 추가하지 않아요. `~/.codex/config.toml`에서 올리거나 지침을 중첩 파일로 나누세요.",
      },
      {
        q: "Codex와 Claude Code가 파일 하나를 함께 쓸 수 있나요?",
        a: "네. 공통 지침은 AGENTS.md에 두고, CLAUDE.md 맨 위에 `@AGENTS.md`를 넣은 뒤 그 아래에 Claude 전용 메모를 적으세요.",
      },
      {
        q: "Codex 코드 리뷰는 AGENTS.md를 읽나요?",
        a: "네. 코드에 가장 가까운 AGENTS.md에 `## Code Review Rules` 섹션을 추가하면 GitHub의 `@codex review`가 이를 적용해요.",
      },
    ],
  },
  cta: {
    title: "충분히 준비된 Codex에게 할 일을 맡겨 보세요.",
    text: "Crewmark는 Codex, Claude Code, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 OpenAI의 Codex 문서(Custom instructions with AGENTS.md)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI나 Anthropic과 제휴하거나 그들의 보증을 받지 않았습니다. Codex는 OpenAI의, Claude와 Claude Code는 Anthropic의 상표입니다.",
};
