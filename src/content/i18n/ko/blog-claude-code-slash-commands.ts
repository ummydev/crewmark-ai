import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Fix a GitHub issue by number, with a test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

CLAUDE.md의 컨벤션에 따라 이 이슈를 수정해.
1. 문제를 재현하는 실패하는 테스트를 작성해.
2. 테스트를 통과하는 가장 작은 변경을 해.
3. 테스트 스위트를 실행하고 바뀐 내용을 요약해.`;

const positional = `---
description: Migrate a component between frameworks
argument-hint: [component] [from] [to]
---

$0 컴포넌트를 $1에서 $2로 마이그레이션해.
기존 동작을 모두 유지하고 테스트가 계속 통과하게 해.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 슬래시 명령어 치트 시트 | Crewmark AI",
    description:
      "알아 둘 만한 Claude Code 슬래시 명령어 치트 시트, 인수를 받는 커스텀 슬래시 명령어 만드는 법, 명령어와 스킬의 관계를 정리했어요.",
  },
  breadcrumb: "Claude Code 슬래시 명령어",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 슬래시 명령어: 치트 시트와 직접 만드는 법",
    lead: "슬래시 명령어는 `/init`, `/compact`, `/code-review`처럼 Claude Code 메시지 맨 앞에 입력하는 단축 명령으로, 세션을 제어하거나 저장해 둔 프롬프트를 실행해요. 이 가이드에서는 알아 둘 만한 명령어를 필요한 시점별로 묶은 치트 시트를 보여 주고, 인수를 받는 커스텀 슬래시 명령어를 만드는 법과 스킬과의 관계를 설명해요.",
    cta: "시작하기",
    secondary: "커스텀 명령어로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "슬래시 명령어가 동작하는 방식",
      text: [
        "Claude Code에서 `/`를 입력하면 쓸 수 있는 명령어가 모두 보이고, 계속 입력하면 목록이 좁혀져요. 명령어는 메시지 맨 앞에 있을 때만 인식되고, 이름 뒤에 쓴 내용은 모두 인수가 돼요.",
      ],
      points: [
        "내장 명령어는 CLI에 구현되어 있어요. `/clear`, `/model`, `/compact` 등이 있어요.",
        "번들 스킬은 Claude Code에 함께 들어 있고, Claude에게 건네는 프롬프트처럼 동작해요. `/simplify`, `/loop`, `/batch` 등이 있어요.",
        "커스텀 명령어는 직접 만드는 명령어예요. `.claude/skills/`의 스킬이나 예전 방식인 `.claude/commands/`의 파일로 만들어요. 플러그인과 MCP 서버가 더 추가할 수도 있어요.",
        "Claude가 답하는 중에 명령어를 보내면 현재 턴이 끝난 뒤 실행돼요. `/status`, `/usage` 같은 몇몇은 바로 실행돼요.",
        "모든 명령어가 누구에게나 보이지는 않아요. 플랫폼, 요금제, 조직 정책에 따라 달라지는 것도 있어요.",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Claude Code 슬래시 명령어 치트 시트",
      text: ["많이 쓰는 명령어를 세션에서 필요해지는 순서대로 정리했어요."],
      headers: ["시점", "명령어", "하는 일"],
      rows: [
        ["설정할 때", "`/init`", "프로젝트용 CLAUDE.md 초안을 작성해요"],
        ["설정할 때", "`/memory`", "CLAUDE.md 파일을 편집하고 자동 메모리를 켜고 꺼요"],
        ["설정할 때", "`/mcp`", "MCP 서버 연결을 관리해요"],
        ["설정할 때", "`/permissions`", "도구의 allow, ask, deny 규칙을 관리해요"],
        ["설정할 때", "`/config`", "테마, 모델, 출력 스타일 등의 설정을 열어요"],
        ["작업 중", "`/plan`", "큰 변경 전에 플랜 모드로 전환해요"],
        ["작업 중", "`/model`, `/effort`", "모델과 추론에 쓰는 양을 바꿔요"],
        ["작업 중", "`/context`", "컨텍스트 창을 무엇이 채우고 있는지 보여 줘요"],
        ["작업 중", "`/compact [instructions]`", "지금까지의 대화를 요약해 컨텍스트를 비워요"],
        ["작업 중", "`/btw [question]`", "대화에 추가하지 않고 곁가지 질문을 해요"],
        ["작업 중", "`/goal`", "Claude가 계속 향해 일할 조건을 정해요"],
        ["병렬로", "`/tasks`", "세션의 백그라운드 작업과 서브에이전트를 나열해요"],
        ["병렬로", "`/background`", "세션을 떼어 내 백그라운드 에이전트로 실행해요"],
        ["병렬로", "`/batch <instruction>`", "코드베이스 전체에 걸친 변경을 단위로 나누고, 각각 자기 worktree에서 진행해요"],
        ["병렬로", "`/fork`", "대화를 새 백그라운드 세션으로 복사해요"],
        ["배포 전", "`/diff`", "작업 트리의 변경 사항을 보여 줘요"],
        ["배포 전", "`/code-review`", "현재 diff나 PR의 버그를 리뷰해요. `/review`는 별칭이에요"],
        ["배포 전", "`/security-review`", "브랜치의 변경 사항에 취약점이 있는지 확인해요"],
        ["세션 사이", "`/clear`", "빈 컨텍스트로 새 대화를 시작해요"],
        ["세션 사이", "`/resume`, `/rename`", "이전 대화로 돌아가요. 이 대화에 이름을 붙여요"],
        ["세션 사이", "`/branch`, `/rewind`", "대화를 분기해요. 코드와 대화를 체크포인트로 되돌려요"],
        ["자동화", "`/loop [interval] [prompt]`", "세션이 열려 있는 동안 프롬프트를 반복해요"],
        ["자동화", "`/schedule`", "클라우드 예약 작업을 만들고 관리해요"],
        ["막혔을 때", "`/doctor`, `/debug`", "설정 문제를 진단해요. 세션의 디버그 로그를 읽어요"],
        ["막혔을 때", "`/usage`, `/status`", "비용과 요금제 한도를 보여 줘요(`/cost`와 `/stats`는 별칭). 버전, 모델, 계정을 보여 줘요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "커스텀 슬래시 명령어 만드는 법",
      text: [
        "커스텀 명령어는 스킬로 통합됐어요. `.claude/commands/fix-issue.md` 파일과 `.claude/skills/fix-issue/SKILL.md` 스킬은 둘 다 `/fix-issue`를 만들고 똑같이 동작해요. 보조 파일을 담을 수 있어서 새 명령어에는 스킬 형식이 권장돼요.",
      ],
      steps: [
        {
          title: "폴더와 SKILL.md 만들기",
          text: "팀 전체가 쓸 명령어라면 저장소에 `.claude/skills/<name>/SKILL.md`를 만들고 커밋하세요. 나만 모든 프로젝트에서 쓸 명령어라면 `~/.claude/skills/<name>/SKILL.md`에 두세요. 폴더 이름이 곧 명령어가 돼요. `fix-issue`면 `/fix-issue`예요.",
        },
        {
          title: "frontmatter 작성하기",
          text: "`---` 줄 사이에 `description`(Claude가 스킬을 언제 쓸지 판단할 때 사용해요), 메뉴에 예상 인수를 보여 주는 `argument-hint`, 나만 실행해야 하는 경우(배포처럼 부작용이 있는 작업) `disable-model-invocation: true`, 그 턴에서 도구를 미리 승인하는 `allowed-tools`를 넣으세요.",
        },
        {
          title: "인수를 넣어 프롬프트 작성하기",
          text: "frontmatter 아래에 지시 사항을 Markdown으로 쓰세요. `$ARGUMENTS`는 명령어 뒤에 입력한 내용 전체로 바뀌고, `$0`, `$1` 등(또는 `$ARGUMENTS[0]`)은 인수를 하나씩 골라내요. `` !`command` ``가 있는 줄은 그 셸 명령어를 먼저 실행하고 출력을 프롬프트에 붙여 넣어요.",
          code: skill,
        },
        {
          title: "실행하기",
          text: "`/fix-issue 123`을 입력하세요. 세션 중에 추가하거나 바꾼 스킬은 자동으로 로드돼요. 보이지 않으면 `/reload-skills`를 실행하세요. `disable-model-invocation`이 없으면 요청이 설명과 맞을 때 Claude가 스스로 스킬을 실행할 수도 있어요.",
        },
        {
          title: "여러 부분으로 된 명령어에는 위치 인수 쓰기",
          text: "`/migrate-component SearchBar React Vue`를 실행하면 `$0`, `$1`, `$2`가 순서대로 채워져요.",
          code: positional,
        },
      ],
      source: { label: "출처: Claude Code 문서, Commands와 Skills", href: commands },
    },
    {
      kind: "table",
      title: "커스텀 슬래시 명령어를 두는 위치",
      headers: ["위치", "경로", "명령어 이름"],
      rows: [
        ["개인", "`~/.claude/skills/<name>/SKILL.md`", "모든 프로젝트에서 `/<name>`"],
        ["프로젝트", "`.claude/skills/<name>/SKILL.md`", "저장소의 모든 사람에게 `/<name>`"],
        ["예전 명령어 파일", "`.claude/commands/<name>.md`", "`/<name>`. 하위 폴더는 접두사가 돼요. 예: `commands/frontend/component.md` → `/frontend:component`"],
        ["플러그인", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["MCP 서버", "서버가 노출하는 프롬프트", "`/` 메뉴에 표시"],
      ],
    },
    {
      kind: "table",
      title: "슬래시 명령어 vs 스킬",
      text: [
        "통합된 뒤로는 \"어느 쪽을 쓸까\"보다 \"어떤 파일 형식으로 할까\"의 문제예요. 스킬과 명령어 파일의 이름이 같으면 스킬이 우선해요.",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["`/<name>` 생성", "예", "예"],
        ["frontmatter", "`name`과 `paths`를 뺀 같은 필드", "모든 필드"],
        ["보조 파일(스크립트, 템플릿)", "아니요", "예, 스킬 폴더에"],
        ["Claude가 스스로 로드", "예, `disable-model-invocation: true`가 아니면", "예, `disable-model-invocation: true`가 아니면"],
        ["상태", "계속 동작", "새 작업에 권장"],
      ],
    },
    {
      kind: "text",
      title: "팁과 주의할 점",
      points: [
        "터미널 프롬프트에서는 스킬을 겹쳐 쓸 수 있어요. `/write-tests /fix-issue 123`은 둘 다 로드하고 각각에 `123`을 넘겨요(최대 여섯 개). `claude -p`와 Agent SDK에서는 첫 번째만 로드돼요.",
        "기억하고 있는 내장 명령어가 사라졌을 수 있어요. `/pr-comments`, `/vim`, `/ultraplan`은 삭제됐어요. `/help`나 문서에서 확인하세요.",
        "`allowed-tools`는 스킬을 호출한 턴에만 권한을 주지만, 저장소의 스킬은 스스로에게 도구를 허용할 수 있어요. 낯선 저장소에서 Claude Code를 실행하기 전에 먼저 읽어 보세요.",
        "모든 스킬의 설명은 컨텍스트에 들어가요. `/skill-doctor`로 각각의 비용과 사용 빈도를 확인할 수 있어요. 긴 절차는 [CLAUDE.md](/blog/claude-md)가 아니라 스킬에 두세요.",
        "`/loop`는 세션이 열려 있는 동안에만 프롬프트를 반복해요. 일이 알아서 시작되게 하려면 [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "슬래시 명령어는 나를 빠르게 하고, Crewmark는 Claude Code가 나 없이 일을 시작하게 해요.",
      text: [
        "어떤 슬래시 명령어든 입력하려면 내가 키보드 앞에 있어야 해요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. 내가 설정해 둔 스킬과 명령어를 그대로 써요.",
      ],
      steps: [
        {
          title: "스킬은 저장소에 두기",
          text: "`.claude/skills/`와 CLAUDE.md는 내 세션처럼 직원의 세션에서도 로드되므로, `/fix-issue`와 컨벤션도 함께 따라가요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 다음 이슈를 가져가요. 여러 직원이 한 저장소를 함께 쓰면서 각자 자기 [worktree](/blog/claude-code-worktree)에서 일할 수도 있어요.",
        },
        {
          title: "이슈를 배정하고 메시지에 답하기",
          text: "보드에 일을 올리면 직원은 진행하면서 댓글을 남기고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에서 커스텀 슬래시 명령어 만들기" },
  mid: {
    title: "입력은 자동화했어요. 다음에 뭘 입력할지는 누가 정할까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code 슬래시 명령어 자주 묻는 질문",
    items: [
      {
        q: "Claude Code 슬래시 명령어를 모두 보려면 어떻게 하나요?",
        a: "메시지 맨 앞에 `/`를 입력하면 메뉴가 열리고, 계속 입력하면 좁혀져요. `/help`와 `/skills`로도 볼 수 있고, Claude Code 문서의 Commands 페이지에 전체 레퍼런스가 있어요.",
      },
      {
        q: "Claude Code에서 커스텀 슬래시 명령어는 어떻게 만드나요?",
        a: "짧은 frontmatter와 프롬프트를 담은 `.claude/skills/<name>/SKILL.md`(모든 프로젝트에서 쓰려면 `~/.claude/skills/<name>/SKILL.md`)를 만드세요. 그게 `/<name>`이 돼요. 예전 방식의 `.claude/commands/<name>.md` 파일도 쓸 수 있어요.",
      },
      {
        q: "슬래시 명령어에 인수는 어떻게 넘기나요?",
        a: "명령어 이름 뒤에 입력하세요. 프롬프트에서 `$ARGUMENTS`에는 입력한 내용 전체가, `$0`, `$1` 등에는 인수가 하나씩 들어가요. frontmatter에 `argument-hint`를 추가하면 어떤 인수가 필요한지 보여 줄 수 있어요.",
      },
      {
        q: "슬래시 명령어와 스킬은 무엇이 다른가요?",
        a: "커스텀 슬래시 명령어는 스킬로 통합됐어요. 둘 다 `/name`을 만들고 똑같이 동작해요. 스킬은 보조 파일용 폴더를 둘 수 있는 권장 형식이고, `.claude/commands/`의 명령어 파일도 계속 동작해요.",
      },
      {
        q: "슬래시 명령어는 지원이 중단됐나요?",
        a: "아니요. `/name`을 입력하는 것이 모든 명령어와 스킬을 실행하는 방법이에요. 바뀐 건 커스텀 명령어의 파일 형식이에요. `.claude/commands/`도 동작하지만 스킬이 권장돼요. 개별 내장 명령어 몇 개는 삭제됐어요.",
      },
      {
        q: "Claude가 내 슬래시 명령어를 스스로 실행할 수 있나요?",
        a: "네, 요청이 스킬의 설명과 맞으면요. 내가 입력할 때만 실행되게 하려면 frontmatter에 `disable-model-invocation: true`를 추가하세요.",
      },
      {
        q: "슬래시 명령어는 헤드리스 모드에서도 동작하나요?",
        a: "커스텀 스킬은 동작해요. `-p`는 대화형 세션처럼 스킬과 커스텀 명령어를 로드하므로 `claude -p \"/fix-issue 123\"`으로 실행할 수 있어요. 메시지의 첫 번째 스킬만 로드되고, `--bare`는 스킬 탐색 자체를 건너뛰어요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 스킬을 실행할 직원을 두세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(commands, skills)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
