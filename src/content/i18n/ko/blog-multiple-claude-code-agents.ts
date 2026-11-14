import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 멀티 에이전트: 서브에이전트·worktree",
    description:
      "Claude Code 에이전트 동시 실행: 서브에이전트, git worktree, --bg 세션, agent teams를 충돌 없이 쓰는 법.",
  },
  breadcrumb: "Claude Code 에이전트 여러 개 실행",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 에이전트 여러 개를 동시에 실행하는 방법",
    lead: "Claude Code는 여러 일을 동시에 할 수 있고, 방법은 네 가지예요. 한 대화 안의 서브에이전트, 각자의 git worktree에서 도는 별도 세션, --bg로 시작하는 백그라운드 세션, 그리고 서로 메시지를 주고받는 실험적 agent teams예요. 이 가이드에서는 각각을 설정하는 방법, 무엇을 고를지, 그리고 병렬 에이전트가 서로의 작업을 덮어쓰지 않게 하는 방법을 보여 드려요.",
    cta: "시작하기",
    secondary: "worktree로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Claude Code 에이전트를 병렬로 실행하는 네 가지 방법",
      headers: ["", "병렬로 실행되는 것", "파일이 분리되나요?", "적합한 용도"],
      rows: [
        ["서브에이전트", "한 대화 안에서 각자 컨텍스트를 가진 작업자", "아니요, `isolation: worktree`로 설정하지 않는 한", "결과를 보고하는 조사, 리뷰, 부수 작업"],
        ["Worktree 세션", "각자의 git worktree에서 도는 완전한 세션", "예, 각각 브랜치 하나", "여러 기능이나 수정을 한 번에"],
        ["백그라운드 세션", "`claude --bg`로 시작해 agent view에서 관리하는 세션", "예, 기본적으로 각각 worktree 하나", "지금 던져 두고 나중에 확인할 작업"],
        ["Agent teams", "리드 세션과 작업 목록을 공유하는 팀원들", "아니요: 팀원끼리 파일을 나눠야 함", "에이전트끼리 대화해야 하는 일"],
      ],
    },
    {
      kind: "steps",
      title: "서브에이전트: 한 세션 안의 병렬 도우미",
      text: [
        "서브에이전트는 자체 컨텍스트 창, 시스템 프롬프트, 도구를 가져요. 내 대화를 보지 못하고 요약만 돌려보내기 때문에 메인 세션의 컨텍스트가 작게 유지돼요. Claude Code에는 Explore(읽기 전용)와 Plan 같은 기본 서브에이전트가 있고, 직접 추가할 수도 있어요.",
      ],
      steps: [
        {
          title: "서브에이전트 정의하기",
          text: "`.claude/agents/`(프로젝트와 공유) 또는 `~/.claude/agents/`(나만 사용)에 Markdown 파일을 만드세요. 필수 항목은 `name`과 `description`뿐이고, `tools`는 쓸 수 있는 도구를 제한하며 `model`은 모델을 골라요.",
          code: subagent,
        },
        {
          title: "Claude가 여러 개를 동시에 돌리게 하기",
          text: "병렬로 해 달라고 요청하세요. 예를 들어 “auth, billing, search 모듈을 병렬로 리뷰해 줘”처럼요. Claude가 만드는 서브에이전트는 기본적으로 백그라운드에서 시작되고, 한 번에 최대 20개까지 돌며, 끝나면 결과를 보고해요. `/tasks`를 입력하면 볼 수 있어요.",
        },
        {
          title: "파일을 수정하는 서브에이전트에게 별도 worktree 주기",
          text: "서브에이전트의 frontmatter에 `isolation: worktree`를 추가하거나, 에이전트에 worktree를 쓰라고 Claude에게 요청하세요. 그러면 각자 저장소의 임시 복사본을 수정하고, 변경이 없으면 복사본은 삭제돼요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "git worktree에서 Claude Code 세션을 병렬로 실행하기",
      text: [
        "모든 옵션, 설정, 문제 해결은 [Claude Code worktree 가이드](/blog/claude-code-worktree)에 정리했습니다.",
      ],
      steps: [
        {
          title: "worktree 폴더를 무시 목록에 넣기",
          text: "Claude Code는 저장소 루트의 `.claude/worktrees/`에 worktree를 만들어요. 저장소에 커밋이 최소 하나 있어야 해요.",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "작업마다 세션을 하나씩 시작하기",
          text: "터미널마다 다른 이름으로 `claude --worktree`(또는 `-w`)를 실행하세요. 각각 자기 폴더와 기본 브랜치를 바탕으로 한 `worktree-<name>` 브랜치를 가져요.",
          code: "# 터미널 1\nclaude --worktree feature-auth\n\n# 터미널 2\nclaude --worktree bugfix-login",
        },
        {
          title: "필요한 미추적 파일 복사하기",
          text: "새 worktree에는 추적 중인 파일만 있어요. `.env` 같은 파일을 `.worktreeinclude` 파일(gitignore 문법)에 적어 두면 Claude Code가 복사해 줘요.",
          code: ".env\n.env.local",
        },
        {
          title: "머지하고 정리하기",
          text: "세션이 끝나면 변경이 없는 worktree는 브랜치와 함께 삭제되고, 변경이 있으면 남길지 물어봐요. 브랜치는 다른 브랜치처럼 머지하세요. 헤드리스 `-p` 실행은 묻지 않으니 `git worktree remove`로 직접 지우세요.",
        },
        {
          title: "또는 데스크톱 앱 쓰기",
          text: "Cmd+N(Windows는 Ctrl+N)으로 새 세션을 열고, 시작하기 전에 Worktree를 켜세요. 기본값은 꺼져 있어요. 세션은 분할 화면으로 나란히 띄울 수 있어요.",
        },
      ],
      source: { label: "출처: Anthropic의 worktree 문서(영어)", href: "https://code.claude.com/docs/en/worktrees" },
    },
    {
      kind: "text",
      title: "--bg와 agent view로 쓰는 백그라운드 세션",
      text: [
        "`claude --bg \"<prompt>\"`는 백그라운드에서 세션을 시작하고 바로 돌아오니, 여러 개를 연달아 시작할 수 있어요. 각 세션은 무언가를 수정하기 전에 자기 worktree로 옮겨가요. `claude agents`로 목록을 보고, `claude logs <id>`, `claude attach <id>`, `claude stop <id>`로 세션 하나를 관리해요.",
        "터미널을 닫아도 계속 실행되지만, 컴퓨터가 꺼지면 멈춰요. Agent view는 리서치 프리뷰예요. 지켜보지 않는 실행에 대해서는 [Claude Code 백그라운드 에이전트 실행하는 법](/blog/claude-code-background-agents)을 보세요.",
      ],
    },
    {
      kind: "text",
      title: "Agent teams: 서로 대화하는 에이전트",
      text: [
        "Agent teams는 실험적 기능이라 기본적으로 꺼져 있어요. 셸이나 settings.json의 `env` 블록에 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`을 설정해 켠 다음, 작업에 대해 Claude에게 “팀원 세 명을 만들어 줘”라고 요청하세요. 팀원들은 작업 목록을 공유하고 서로 메시지를 주고받으며, 터미널이나 tmux·iTerm2의 분할 창에 표시돼요.",
      ],
      points: [
        "대화형 세션에서만 돼요. `-p`와 Agent SDK에서는 팀원을 만들지 않아요.",
        "세션당 팀은 하나이고 중첩 팀은 안 되며, 프로세스 내 팀원은 `/resume`으로 복원되지 않아요.",
        "팀원들은 체크아웃 하나를 공유하니 각자 다른 파일을 맡기세요.",
        "비용이 훨씬 커요. Anthropic 문서에 따르면 팀원이 plan mode로 돌 때 팀은 단일 세션의 약 7배 토큰을 써요.",
      ],
    },
    {
      kind: "text",
      title: "병렬 에이전트가 서로 덮어쓰지 않게 하기",
      points: [
        "두 에이전트가 같은 파일을 건드릴 수 있다면 각자 worktree를 주세요. worktree 안의 세션은 메인 체크아웃을 수정할 수 없고, 그 서브에이전트도 마찬가지예요.",
        "Agent team에서는 파일 단위로 일을 나누세요. 두 팀원이 한 파일을 수정하면 서로 덮어써요.",
        "모든 서브에이전트와 세션은 같은 사용 한도를 쓰므로, 여러 개를 돌리면 사용량이 몇 배로 늘어요. 간단한 서브에이전트에는 `model: haiku`를 쓰세요.",
        "같은 테스트나 개발 서버를 돌리는 에이전트끼리 포트가 충돌할 수 있으니 각자 다른 포트를 주세요.",
      ],
    },
    {
      kind: "steps",
      kicker: "Crewmark로",
      title: "병렬 에이전트를 일자리가 있는 팀으로 바꾸세요",
      text: [
        "worktree와 agent teams는 내가 지켜보는 작업 하나를 나눠요. Crewmark는 여러 Claude Code나 Codex 세션을 각자 직무, 목표, 근무 시간을 가진 직원으로 돌리고, 보드 하나에서 업무를 줘요.",
      ],
      steps: [
        {
          title: "직무마다 직원 한 명",
          text: "SEO 전문가, 소프트웨어 엔지니어, UI 디자이너가 각자 자기 대화에서 자기 지침과 목표를 가지고 일해요.",
        },
        {
          title: "모두를 위한 보드 하나",
          text: "가장 잘 맞는 직원에게 이슈를 배정하세요. 각 직원은 하트비트마다 깨어나 다음 이슈를 가져가고 진행하며 댓글을 남기니, 누가 무엇을 하는지 한눈에 보여요.",
        },
        {
          title: "서로가 아니라 나에게 물어봐요",
          text: "검토나 권한이 필요하면 직원이 나에게 메시지를 보내고 다음 일로 넘어가요. [AI 직원이란 무엇인지](/ai-employees) 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "git worktree에서 Claude Code 세션을 병렬로 실행하기" },
  mid: {
    title: "매일 에이전트 여러 개를 돌리시나요?",
    text: "Crewmark는 각 Claude Code 세션에 직무, 목표, 근무 시간을 주고, 모든 업무를 보드 하나에 모아요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code 멀티 에이전트 FAQ",
    items: [
      {
        q: "Claude Code 에이전트 여러 개를 동시에 실행할 수 있나요?",
        a: "네. Claude는 한 세션 안에서 서브에이전트를 병렬로 돌릴 수 있고, `claude --worktree`로 별도 git worktree에서 세션 여러 개를 돌리거나, `claude --bg`로 백그라운드 세션을 시작하거나, 실험적 agent teams를 써 볼 수 있어요.",
      },
      {
        q: "서브에이전트와 agent teams는 무엇이 다른가요?",
        a: "서브에이전트는 작업을 하고 자신을 시작한 세션에 요약을 보고해요. Agent teams는 작업 목록을 공유하고 서로 직접 메시지를 주고받는 별도의 Claude Code 인스턴스예요. 실험적 기능이고 토큰이 더 들어요.",
      },
      {
        q: "서브에이전트는 한 번에 몇 개까지 돌릴 수 있나요?",
        a: "기본적으로 한 번에 최대 20개예요. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`로 한도를 바꿀 수 있어요. 서브에이전트가 자기 서브에이전트를 시작할 수도 있는데, 기본적으로 세 단계 깊이까지예요.",
      },
      {
        q: "병렬 에이전트가 같은 파일을 수정하지 않게 하려면 어떻게 하나요?",
        a: "각각 자기 git worktree에 두세요. 세션은 `claude --worktree <name>`, 서브에이전트는 `isolation: worktree`를 쓰면 돼요. `--bg`로 시작한 백그라운드 세션은 자동으로 하나씩 받아요. Agent teams는 체크아웃을 공유하니 팀원마다 파일을 배정하세요.",
      },
      {
        q: "에이전트를 여러 개 돌리면 비용이 더 드나요?",
        a: "네. 각 서브에이전트와 세션이 따로 요청을 보내고 모두 같은 사용 한도에 계산되므로, 여러 개를 동시에 돌리면 사용량이 몇 배로 늘어요.",
      },
      {
        q: "Claude Code worktree는 어디에 저장되나요?",
        a: "저장소 루트의 `.claude/worktrees/<name>/`에, `worktree-<name>`이라는 브랜치로 저장돼요. 이 폴더를 `.gitignore`에 추가하세요.",
      },
    ],
  },
  cta: {
    title: "일자리가 있는 Claude Code 에이전트 팀을 운영하세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간을 갖춘 AI 직원으로 바꾸고, 보드 하나에서 관리하게 해 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 2일에 Anthropic의 Claude Code 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
