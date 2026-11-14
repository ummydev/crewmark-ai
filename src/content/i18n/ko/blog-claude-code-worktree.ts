import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# 서로 격리된 세션 두 개, 각각 별도 터미널에서
claude --worktree feature-auth
claude --worktree fix-flaky-test

# 풀 리퀘스트 1234에서 worktree 만들기(#은 따옴표로 감싸기)
claude --worktree "#1234"

# worktree가 git status에 나오지 않게 하기
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code worktree: 워크플로와 설정 | Crewmark AI",
    description:
      "Claude Code에서 git worktree를 쓰는 방법: claude --worktree, worktree 위치, 기준 브랜치, .env를 옮기는 .worktreeinclude, 정리, 서브에이전트 격리, 설정을 정리했어요.",
  },
  breadcrumb: "Claude Code worktree 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code worktree: 편집 충돌 없이 세션을 병렬로 실행하기",
    lead: "Claude Code worktree는 저장소의 히스토리를 공유하면서 자체 파일과 브랜치를 가진 별도의 git 작업 디렉터리예요. `claude --worktree <name>`으로 세션을 시작하면 Claude가 내 체크아웃이 아니라 그 안에서 편집하므로, 두세 개의 세션이 서로의 파일을 건드리지 않고 동시에 일할 수 있어요. 이 가이드에서는 플래그, worktree가 생기는 위치, 어느 브랜치에서 시작하는지, `.env` 파일을 넣는 방법, 정리, 서브에이전트, 설정을 다뤄요.",
    cta: "시작하기",
    secondary: "워크플로로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code worktree란",
      text: [
        "git은 오래전부터 worktree를 지원해 왔어요. `git worktree add`는 같은 `.git` 데이터를 바탕으로 브랜치를 두 번째 디렉터리에 체크아웃해요. Claude Code는 그 위에 만들어졌어요. `--worktree`(또는 `-w`)를 쓰면 worktree를 만들어 주고, 그 안에서 세션을 시작하고, 메인 체크아웃으로 가는 편집을 막고, 종료할 때 정리를 제안해요.",
        "worktree가 격리하는 건 파일뿐이에요. 한 대화 안에서 작업을 여러 작업자에게 나누려면 서브에이전트를 쓰세요. 방법별 비교는 [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)를 보세요.",
      ],
      points: [
        "기본 위치: 저장소 루트의 `.claude/worktrees/<name>/`.",
        "기본 브랜치 이름: `worktree-<name>`. 이름을 생략하면 Claude Code가 `bright-running-fox` 같은 이름을 정해요.",
        "체크아웃과 공유하는 것: `.git` 디렉터리(그래서 커밋과 브랜치가 어디서나 보여요), 프로젝트 범위 플러그인, \"다시 묻지 않기\" 권한 승인.",
        "공유하지 않는 것: `.env`, `node_modules`, 빌드 결과물처럼 gitignore된 모든 것. worktree는 새로 받은 체크아웃이에요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "worktree 워크플로, 단계별로",
      steps: [
        {
          title: "worktree 폴더 무시하기",
          text: "`.gitignore`에 `.claude/worktrees/`를 추가해서 worktree 파일이 메인 체크아웃에서 추적되지 않는 파일로 보이지 않게 하세요. 이 저장소에서 Claude를 한 번도 실행한 적이 없다면, 먼저 `claude`를 한 번 실행해 워크스페이스 신뢰 확인을 승인하세요. 승인하기 전까지 대화형 `--worktree` 실행은 바로 종료돼요.",
        },
        {
          title: "작업마다 세션 하나씩 시작하기",
          text: "작업마다 터미널 하나에서 `claude --worktree <name>`을 실행하세요. 이미 있는 이름으로 다시 실행하면 새로 만들지 않고 그 worktree를 다시 열어요. 세션 도중에 Claude에게 \"worktree에서 작업해\"라고 요청할 수도 있어요. 그러면 `EnterWorktree` 도구로 스스로 worktree로 옮겨 가요.",
          code: start,
        },
        {
          title: "추적되지 않는 파일도 함께 가져가기",
          text: "`.env`, `.env.local`처럼 프로젝트에 필요한 gitignore된 파일을 저장소 루트의 `.worktreeinclude` 파일에 `.gitignore` 문법으로 적으세요. Claude Code는 서브에이전트와 데스크톱 worktree를 포함해 자신이 만드는 모든 worktree에 일치하는 파일을 복사해요. 그런 다음 worktree 안에서 의존성을 설치하거나 설정으로 준비하세요. 이 예시는 현재 작업에서 분기하고, `node_modules` 하나를 재사용하고, web 패키지만 체크아웃해요.",
          code: settings,
        },
        {
          title: "세션이 일하게 두기",
          text: "세션이 격리된 동안 Claude Code는 메인 체크아웃을 대상으로 한 파일 편집, 메인 체크아웃을 작업 디렉터리로 하는 명령어, 그쪽으로 돌린 git 명령어(`git -C`, `--git-dir`, `GIT_DIR`)를 거부해요. 하지만 `cp` 같은 일반 셸 명령어가 어디에 쓰는지는 추적하지 않으니, 권한과 샌드박스는 여전히 중요해요.",
        },
        {
          title: "다른 브랜치처럼 리뷰하고 머지하기",
          text: "각 worktree는 평범한 브랜치예요. 그 안에서 커밋하고 푸시하고, 풀 리퀘스트를 열고, 팀원의 것처럼 리뷰하세요. 모든 worktree가 `.git`을 공유하므로 메인 체크아웃에서도 브랜치가 바로 보여요.",
        },
        {
          title: "종료하고 정리하기",
          text: "종료하면 Claude Code가 worktree를 확인해요. 이름 없는 세션의 깨끗한 worktree는 브랜치와 함께 자동으로 삭제되고, 이름 있는 세션은 먼저 물어봐요. 변경 사항, 추적되지 않는 파일, 새 커밋이 있으면 worktree를 남길지 지울지 묻고, 나중에 돌아올 수 있도록 `claude --worktree <name> --resume` 명령어를 보여 줘요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Claude Code의 worktree 설정",
      text: [
        "모두 설정 파일(`~/.claude/settings.json`, `.claude/settings.json`, `.claude/settings.local.json`)의 `worktree` 아래에 넣어요.",
      ],
      headers: ["설정", "하는 일", "기본값"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"`는 원격 기본 브랜치(`origin/main`)에서 분기하고, `\"head\"`는 푸시하지 않은 커밋까지 포함해 로컬 HEAD에서 분기해요", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "`node_modules` 같은 디렉터리를 복제하지 않고 메인 체크아웃에서 심볼릭 링크로 연결해요", "없음"],
        ["`worktree.sparsePaths`", "sparse-checkout으로 적어 둔 디렉터리(와 루트 파일)만 체크아웃해요. `.claude`를 포함하세요", "전체 트리"],
        ["`worktree.bgIsolation`", "`\"worktree\"`면 백그라운드 세션이 worktree 안에서만 편집하고, `\"none\"`이면 작업 사본도 편집할 수 있어요", "`\"worktree\"`"],
        ["worktree 위치(데스크톱 앱)", "Settings > Code에서 로컬 세션용 폴더를 지정해요. SSH 연결은 따로 설정해요", "`.claude/worktrees/`"],
        ["`.worktreeinclude`(설정이 아니라 파일)", "일치하는 gitignore된 파일을 새 worktree마다 복사해요", "없음"],
      ],
    },
    {
      kind: "table",
      title: "Claude Code worktree vs 브랜치 vs git worktree",
      headers: ["", "브랜치 전환", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["디스크에 별도 파일", "아니요: 디렉터리 하나에 한 번에 브랜치 하나", "예", "예"],
        ["여러 세션 동시 실행", "아니요: 서로 덮어써요", "예", "예"],
        ["생기는 위치", "내 체크아웃", "원하는 어디든", "`.claude/worktrees/<name>/` 또는 hook이 정한 경로"],
        ["시작 지점", "전환한 브랜치", "기존 또는 새 브랜치 무엇이든", "`origin/<default>`, 내 HEAD, 또는 PR"],
        ["`.env` 복사", "필요 없음", "아니요", "예, `.worktreeinclude`로"],
        ["바깥 편집 차단", "아니요", "아니요", "예"],
        ["정리", "없음", "`git worktree remove`", "종료할 때 제안"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "git worktree로 직접 하기",
      text: [
        "특정 기존 브랜치를 쓰고 싶거나 저장소 밖의 폴더에 두고 싶다면 순수 git을 쓰세요. `worktree.baseRef`로는 브랜치 이름을 지정할 수 없거든요. 이렇게 만든 worktree에서도 Claude Code는 플러그인과 권한 승인을 공유해요.",
      ],
      steps: [
        {
          title: "worktree를 만들고, Claude를 시작하고, 끝나면 지우기",
          text: "`feature-a`를 새 브랜치 이름으로 바꾸거나, `-b`를 빼서 이미 있는 브랜치를 체크아웃하세요.",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "worktree에서의 서브에이전트와 백그라운드 세션",
      points: [
        "Claude에게 \"에이전트에 worktree를 써\"라고 요청하거나, `.claude/agents/`에 있는 커스텀 서브에이전트의 frontmatter에 `isolation: worktree`를 추가하면, 각 서브에이전트가 자기만의 임시 worktree에서 편집해요.",
        "변경 사항이 없는 서브에이전트 worktree는 서브에이전트가 끝날 때 삭제돼요. 변경 사항이 있으면 `cleanupPeriodDays`가 지난 뒤 작업을 잃지 않고 지울 수 있을 때까지 주기적인 정리에서 남겨 둬요.",
        "백그라운드 세션(`claude --bg`)은 기본적으로 worktree 안에서만 편집해요. `claude --bg --worktree`로 시작하거나 `worktree.bgIsolation`을 `\"none\"`으로 설정하세요.",
        "데스크톱 앱에서는 세션을 시작하기 전에 프롬프트 입력창 아래의 Worktree를 켜세요.",
      ],
    },
    {
      kind: "text",
      title: "worktree 정리와 흔한 문제",
      points: [
        "`claude -p --worktree` 실행에는 종료 확인이 없어서 worktree가 남아요. `git worktree remove`로 지우고, git이 잠겨 있다고 하면 먼저 `git worktree unlock`을 실행하세요.",
        "`Can only use --worktree in a git repository`: `git init`을 실행하고 첫 커밋을 만들거나, SVN, Perforce, Mercurial용 `WorktreeCreate` hook을 설정하세요.",
        "LFS를 `--local`로 설치했다면 Git LFS 파일이 포인터 파일로 보여요. worktree 안에서 `git lfs pull`을 실행하세요.",
        "`.claude`나 `.claude/worktrees`가 심볼릭 링크이면 Claude Code는 worktree를 만들지 않아요.",
        "hooks의 `${CLAUDE_PROJECT_DIR}`은 계속 메인 체크아웃을 가리켜요. worktree 경로는 hook 입력의 `cwd` 필드에서 읽으세요.",
        "기준이 `\"fresh\"`이고 자체 커밋이 없거나 PR이 머지된 worktree는 이름으로 다시 열면 기본 브랜치로 초기화돼요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "worktree는 세션을 떼어 놓고, Crewmark는 세션이 계속 일하게 해요.",
      text: [
        "worktree로 충돌 문제는 해결되지만, 각 세션은 여전히 내가 입력할 때까지 가만히 있어요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "worktree 하나에 직원 한 명",
          text: "직원마다 자기 worktree와 직무를 주세요. 예를 들어 같은 저장소에 프로그래머와 리뷰어를 두는 식이에요. [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)를 참고하세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "이슈를 배정하고 브랜치를 리뷰하기",
          text: "보드에 일을 올리면 각 직원이 이슈를 가져가 자기 브랜치에 커밋하고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "git worktree에서 Claude Code 세션을 병렬로 실행하기" },
  mid: {
    title: "worktree 세 개, 세션 세 개. 다음 할 일은 누가 알려 줄까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code 세션을 하나하나 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code worktree 자주 묻는 질문",
    items: [
      {
        q: "Claude Code에서 worktree란 무엇인가요?",
        a: "저장소의 히스토리를 공유하면서 자체 파일과 브랜치를 가진 별도의 git 작업 디렉터리예요. `claude --worktree <name>`이 하나를 만들고 그 안에서 세션을 실행하므로, 병렬 세션이 같은 파일을 편집하지 않아요.",
      },
      {
        q: "Claude Code는 worktree를 어디에 만드나요?",
        a: "저장소 루트의 `.claude/worktrees/<name>/`에 `worktree-<name>`이라는 브랜치로 만들어요. 데스크톱 앱에서는 Settings에서 다른 폴더를 고를 수 있고, `WorktreeCreate` hook을 쓰면 어디에든 둘 수 있어요.",
      },
      {
        q: "Claude Code worktree는 어느 브랜치에서 시작하나요?",
        a: "기본값은 원격 기본 브랜치이고, 보통 `origin/main`이에요. 로컬 HEAD에서 분기하려면 `worktree.baseRef`를 `\"head\"`로 설정하고, 풀 리퀘스트에서 시작하려면 `\"#1234\"`를 넘기세요. 그 밖의 브랜치는 `git worktree add`로 worktree를 만드세요.",
      },
      {
        q: "worktree에 .env 파일이 없는 이유는 무엇인가요?",
        a: "worktree는 새로 받은 체크아웃이라 gitignore된 파일이 없어요. 저장소 루트의 `.worktreeinclude` 파일에 적어 두면 Claude Code가 새 worktree마다 복사해요.",
      },
      {
        q: "Claude Code worktree는 어떻게 정리하나요?",
        a: "세션을 종료하면 worktree 삭제를 제안하고, 이름 없는 깨끗한 worktree는 자동으로 지워요. `-p` 실행에서 만든 worktree는 남으니 `git worktree list`로 확인하고 `git worktree remove`로 지우세요.",
      },
      {
        q: "worktree와 브랜치는 무엇이 다른가요?",
        a: "브랜치는 커밋의 흐름이고, worktree는 브랜치가 체크아웃된 디렉터리예요. 브랜치를 전환하면 하나뿐인 디렉터리의 파일이 바뀌지만, worktree는 브랜치마다 디렉터리를 따로 주므로 여러 세션을 동시에 실행할 수 있어요.",
      },
      {
        q: "서브에이전트도 worktree를 쓸 수 있나요?",
        a: "네. Claude에게 에이전트에 worktree를 쓰라고 요청하거나, 커스텀 서브에이전트의 frontmatter에 `isolation: worktree`를 추가하세요. 각각 임시 worktree를 받고, 변경 사항이 없으면 삭제돼요.",
      },
    ],
  },
  cta: {
    title: "worktree마다 다음 할 일을 아는 직원을 두세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(worktrees, settings, CLI reference, desktop)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
