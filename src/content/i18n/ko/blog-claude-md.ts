import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commands
- Install: pnpm install
- One test file: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Conventions
- 에러는 src/lib/errors.ts의 헬퍼로 던지고, 문자열을 그대로 던지지 않는다.
- src/legacy/는 아직 운영 중이지만 그 패턴은 따라 하지 않는다.

# Gotchas
- 통합 테스트에는 DATABASE_URL이 필요하다(.env.example 참고).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- 모든 핸들러는 src/api/schemas/의 스키마로 입력을 검증한다.`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md 작성법: 위치, 내용, 템플릿 | Crewmark AI",
    description:
      "Claude Code에서 CLAUDE.md가 동작하는 방식: 파일 위치와 로드 순서, 임포트와 규칙 파일, 무엇을 쓸지, 템플릿, AGENTS.md와의 관계를 정리했어요.",
  },
  breadcrumb: "CLAUDE.md 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "CLAUDE.md: 어디에 두고, 무엇을 쓰고, AGENTS.md와 어떻게 쓸까",
    lead: "CLAUDE.md는 Claude Code가 매 세션을 시작할 때 읽는 markdown 지침 파일이에요. 실행할 명령어, 따라야 할 규칙, 피해야 할 함정을 프로젝트에 맞게 적어 둬요. 이 가이드에서는 CLAUDE.md를 둘 수 있는 모든 위치와 로드 순서, 임포트와 규칙 파일, 무엇을 쓰고 무엇을 쓰지 말아야 하는지, 짧은 템플릿, AGENTS.md와의 관계를 다뤄요.",
    cta: "시작하기",
    secondary: "템플릿으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "CLAUDE.md란",
      text: [
        "Claude Code는 매번 지난 세션의 기억 없이 시작해요. CLAUDE.md는 새로 온 팀원에게 필요한 배경 지식을 전해 주는 방법이에요. 시작할 때 읽혀서 시스템 프롬프트 뒤에 메시지로 Claude에게 전달돼요. 그래서 강제되는 설정이 아니라 컨텍스트예요. Claude는 대체로 따르지만, 반드시 해야 하거나 절대 하면 안 되는 일은 hooks나 권한 규칙에 넣어야 해요.",
      ],
      points: [
        "평범한 markdown이고 필수 필드는 없어요. 제목과 짧은 글머리 기호가 가장 잘 맞아요.",
        "파일은 덮어쓰지 않고 합쳐져요. 해당하는 CLAUDE.md가 모두 로드되므로, 서로 모순되는 줄이 있으면 Claude가 하나를 골라요.",
        "로드된 내용은 `/context all`의 Memory files에서 확인할 수 있어요.",
      ],
    },
    {
      kind: "table",
      title: "CLAUDE.md 파일의 위치와 로드 순서",
      text: [
        "Claude Code는 가장 넓은 범위부터 가장 구체적인 범위 순으로 로드하므로, 실행한 위치에 가장 가까운 파일이 마지막에 읽혀요. 작업 디렉터리에서 위로 올라가며 모든 상위 디렉터리의 CLAUDE.md도 로드해요.",
      ],
      headers: ["범위", "위치", "용도"],
      rows: [
        ["관리 정책", "`/Library/Application Support/ClaudeCode/CLAUDE.md`(macOS), `/etc/claude-code/CLAUDE.md`(Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md`(Windows)", "조직이 모든 개발자에게 정하는 규칙"],
        ["사용자", "`~/.claude/CLAUDE.md`", "모든 프로젝트에 적용되는 나만의 선호"],
        ["프로젝트", "`./CLAUDE.md` 또는 `./.claude/CLAUDE.md`", "팀의 지침. git에 커밋해요"],
        ["로컬", "`./CLAUDE.local.md`", "한 프로젝트에서 쓰는 개인 메모. .gitignore에 추가하세요"],
        ["하위 디렉터리", "`some/dir/CLAUDE.md`", "Claude가 그 디렉터리의 파일을 읽거나 편집할 때만 로드돼요"],
        ["규칙", "`.claude/rules/*.md`와 `~/.claude/rules/`", "주제별 파일. `paths` glob을 붙이면 일치하는 파일에서만 로드돼요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "제대로 동작하는 CLAUDE.md 작성법",
      steps: [
        {
          title: "/init으로 시작하기",
          text: "프로젝트에서 `/init`을 실행하세요. Claude Code가 코드베이스를 읽고 기본 CLAUDE.md를 써 줘요. 이미 있으면 덮어쓰지 않고 개선안을 제안해요. `.cursorrules`와 Copilot 지침도 가져와요.",
        },
        {
          title: "Claude가 스스로 찾을 수 없는 것만 남기기",
          text: "정확한 빌드, 테스트, lint 명령어(테스트 하나만 실행하는 방법 포함), 코드가 오해를 부르는 부분, 어디에도 적혀 있지 않은 결정, 두 번 이상 바로잡았던 것을 남겨요. 파일 트리와 저장소에서 읽을 수 있는 아키텍처는 지우세요. Anthropic은 200줄 이내를 권장해요.",
          code: example,
        },
        {
          title: "구체적으로, 하지만 소리치지 않기",
          text: "\"코드를 제대로 포맷하세요\"가 아니라 \"들여쓰기는 스페이스 2칸\"처럼 쓰세요. 최신 문서에서는 IMPORTANT나 전부 대문자로 쓰는 것이 낡은 조언이라고 해요. Claude가 규칙을 과하게 적용하게 되거든요. 어떤 줄이 계속 지켜지지 않으면 파일을 줄이거나 그 규칙을 hook으로 바꾸세요.",
        },
        {
          title: "임포트와 규칙으로 나누기",
          text: "`@path/to/file`은 다른 파일을 임포트해요(임포트하는 파일 기준 상대 경로이고 최대 4단계). 백틱 안의 `@`는 그대로 문자로 남아요. 코드베이스 일부에만 해당하는 규칙은 `paths` glob과 함께 `.claude/rules/`에 두면, Claude가 일치하는 파일을 다룰 때만 로드돼요.",
          code: rule,
        },
        {
          title: "절차는 스킬로 옮기기",
          text: "릴리스를 내는 방법처럼 여러 단계로 된 워크플로는 스킬(`.claude/skills/<name>/SKILL.md`)에 두세요. 스킬은 관련이 있을 때만 로드돼요. CLAUDE.md는 모든 작업에서 읽히므로 한 줄마다 주의력이 들어가요.",
        },
        {
          title: "최신 상태로 유지하기",
          text: "Claude가 같은 실수를 반복하거나 리뷰에서 걸린 것이 있으면 한 줄 추가하세요. 파일은 `/memory`로 편집하거나 Claude에게 업데이트를 부탁하면 돼요. 파일이 너무 길어지면 `/doctor`가 줄일 부분을 제안해요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md와 AGENTS.md 비교",
      text: [
        "AGENTS.md는 코딩 에이전트를 위한 개방형 지침 형식이고, Codex, Cursor, Gemini CLI, GitHub Copilot의 코딩 에이전트, opencode 등 많은 도구가 써요. Claude Code도 이제 읽을 수 있지만, 기본값으로는 프로젝트에 CLAUDE.md가 없을 때만 읽어요.",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["읽는 도구", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode 등. Claude Code는 대체용으로"],
        ["Claude Code가 읽는 때", "항상", "기본값으로는 트리에 CLAUDE.md, `.claude/CLAUDE.md`, CLAUDE.local.md가 없을 때만. `/config`에서 둘 다 읽게 할 수 있어요"],
        ["개인용 파일", "`CLAUDE.local.md`", "Claude Code는 읽지 않아요(`AGENTS.override.md`는 Codex용)"],
        ["임포트", "`@path`, 최대 4단계", "형식에 없어요"],
        ["경로별 규칙", "`.claude/rules/`와 `paths`", "디렉터리마다 중첩된 AGENTS.md 파일"],
      ],
    },
    {
      kind: "text",
      title: "Claude Code와 Codex에서 파일 하나 쓰기",
      text: [
        "팀이 두 에이전트를 모두 쓴다면, 공통 지침은 AGENTS.md에 두고 CLAUDE.md가 그것을 임포트하게 한 다음, 그 아래에 Claude 전용 메모를 쓰세요. 두 번 로드되지는 않아요. 심볼릭 링크(`ln -s AGENTS.md CLAUDE.md`)도 되지만 Windows를 쓰는 팀원에게는 안 되고, \"AGENTS.md를 읽어라\"라고 글로만 적은 CLAUDE.md는 믿을 수 없어요.",
      ],
      points: [
        "이 웹사이트의 저장소가 바로 그렇게 해요. CLAUDE.md는 `@AGENTS.md` 한 줄뿐이에요.",
        "Codex는 저장소 루트부터 작업 디렉터리까지의 AGENTS.md 파일을 읽고, 합친 크기를 기본 32 KiB로 제한해요.",
      ],
    },
    {
      kind: "text",
      title: "제한과 주의할 점",
      points: [
        "시작할 때 로드되는 CLAUDE.md는 4 MiB까지 전부 읽히고, 더 큰 파일은 건너뛰어요.",
        "하위 디렉터리의 CLAUDE.md나 경로별 규칙처럼 필요할 때 로드되는 파일은 파일당 한도를 넘으면 잘려요(200K 컨텍스트 윈도우에서는 40,000자).",
        "임포트는 파일을 정리해 줄 뿐 컨텍스트를 아껴 주지는 않아요. 임포트된 텍스트도 로드돼요.",
        "프로젝트 밖의 임포트는 한 번 승인을 물어봐요. HTML 주석 `<!-- -->`은 제거되어 비용이 들지 않아요.",
        "프로젝트 루트의 CLAUDE.md는 `/compact` 뒤에 다시 읽혀요.",
        "\"이거 기억해\"는 CLAUDE.md가 아니라 자동 메모리(`~/.claude/projects/<project>/memory/`)에 들어가요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "CLAUDE.md는 일하는 방법을, Crewmark는 무슨 일을 언제 할지를 알려 줘요.",
      text: [
        "좋은 CLAUDE.md가 있으면 Claude Code 세션이 모두 충분한 정보를 가지고 시작하지만, 세션은 여전히 다음 메시지를 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 만들기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표를 숫자로 적은 다음, CLAUDE.md가 이미 있는 프로젝트에서 설정 명령어를 실행하세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요. 여러 직원이 한 저장소를 함께 쓸 수도 있어요. [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)를 보세요.",
        },
        {
          title: "이슈를 배정하고 메시지에 답하기",
          text: "보드에 일을 올리면 직원이 가져가서 진행하며 댓글을 달고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code용 CLAUDE.md 파일 작성하기" },
  mid: {
    title: "CLAUDE.md는 준비됐어요. 다음 작업은 누가 시작할까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "CLAUDE.md 자주 묻는 질문",
    items: [
      {
        q: "CLAUDE.md란 무엇인가요?",
        a: "Claude Code가 매 세션을 시작할 때 읽는, 프로젝트 지침을 담은 markdown 파일이에요. 빌드와 테스트 명령어, 규칙, 알려진 함정 등을 적어요. Claude를 위한 컨텍스트이지 강제되는 설정이 아니에요.",
      },
      {
        q: "CLAUDE.md는 어디에 두나요?",
        a: "팀용이라면 프로젝트 루트의 `./CLAUDE.md` 또는 `./.claude/CLAUDE.md`에 두고 git에 커밋하세요. 개인용으로는 `~/.claude/CLAUDE.md`가 모든 프로젝트에, `./CLAUDE.local.md`가 한 프로젝트에 적용돼요. 하위 디렉터리에도 각자 둘 수 있고, Claude가 그 안에서 작업할 때 로드돼요.",
      },
      {
        q: "CLAUDE.md는 얼마나 길어야 하나요?",
        a: "짧게요. 모든 작업에서 매 줄이 읽히므로 Anthropic은 파일당 200줄 이내를 권장해요. 절차는 스킬로, 코드베이스 일부에만 해당하는 규칙은 `.claude/rules/`로 옮기세요.",
      },
      {
        q: "Claude Code는 AGENTS.md를 읽나요?",
        a: "네, 하지만 기본값으로는 프로젝트에 CLAUDE.md가 없을 때만 읽어요. 파일 하나를 함께 쓰려면 CLAUDE.md 맨 위에 `@AGENTS.md`를 넣거나, `/config`의 Project instructions 옵션을 둘 다 읽도록 설정하세요.",
      },
      {
        q: "CLAUDE.md와 AGENTS.md 중 무엇을 써야 하나요?",
        a: "저장소를 읽는 도구가 Claude Code뿐이라면 CLAUDE.md를 쓰세요. 팀원이 Codex, Cursor 등 다른 에이전트도 쓴다면 AGENTS.md를 쓰고, Claude 전용 메모를 더한 CLAUDE.md에서 그것을 임포트하세요.",
      },
      {
        q: "CLAUDE.md 파일은 어떻게 만드나요?",
        a: "Claude Code에서 `/init`을 실행해 코드베이스로 하나 생성한 다음 줄이세요. 나중에는 `/memory`로 편집하거나 Claude에게 한 줄 추가해 달라고 하면 돼요.",
      },
      {
        q: "Claude가 CLAUDE.md를 무시하는 이유는 무엇인가요?",
        a: "`/context all`로 로드되었는지 확인하고, 파일 사이에 모순이 없는지 살펴보고, 파일을 줄여 보세요. 파일이 길면 각 규칙이 희석돼요. 절대 건너뛰면 안 되는 일은 CLAUDE.md가 아니라 hook이나 권한 규칙에 넣어야 해요.",
      },
    ],
  },
  cta: {
    title: "충분히 준비된 Claude Code에게 할 일을 맡겨 보세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 5일에 Claude Code 문서, agents.md, OpenAI의 Codex 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 OpenAI와 제휴하거나 그들의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의, Codex는 OpenAI의 상표입니다.",
};
