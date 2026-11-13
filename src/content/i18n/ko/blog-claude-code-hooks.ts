import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, Bash의 PreToolUse 훅으로 실행
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # Claude에게 전달되는 피드백
  exit 2                                               # 2 = 작업 차단
fi

exit 0  # 결정 없음: 일반 권한 흐름이 적용됨`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 훅(hooks): 이벤트, 예시, 작동 방식 | Crewmark",
    description:
      "Claude Code 훅(hooks) 총정리: 라이프사이클 이벤트, 훅 설정 위치, 종료 코드와 JSON 출력, 그리고 알림, 자동 포맷팅, 명령 차단, Stop 훅을 바로 복사해 쓸 수 있는 예시까지.",
  },
  breadcrumb: "Claude Code 훅 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 훅(hooks): 이벤트, 예시, 작동 방식",
    lead: "Claude Code 훅(hooks)은 세션의 정해진 시점에 자동으로 실행되는 명령이에요. 도구가 실행되기 전, 파일을 편집한 뒤, Claude가 응답을 마쳤을 때, 내 입력이 필요할 때 실행돼요. CLAUDE.md의 지시는 Claude가 대체로 따르는 정도지만, 훅은 항상 실행돼요. 그래서 규칙을 강제하고 귀찮은 일을 자동화하는 데 딱 맞아요. 이 가이드에서는 이벤트 종류, 훅을 설정하는 위치, 종료 코드와 JSON으로 동작을 제어하는 법, 바로 쓸 수 있는 예시 4가지, 그리고 새로 나온 prompt, agent, HTTP 유형의 훅을 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "예시로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Claude Code 훅 이벤트",
      text: [
        "레퍼런스에는 30개가 넘는 이벤트가 있어요. 아래는 대부분의 훅이 쓰는 이벤트예요. `matcher`로 훅을 특정 도구, 파일, 소스로 좁힐 수 있어요.",
      ],
      headers: ["이벤트", "실행 시점", "주요 용도"],
      rows: [
        ["`SessionStart`", "세션이 시작되거나 재개될 때", "컨텍스트 로드, 환경 점검"],
        ["`UserPromptSubmit`", "프롬프트를 제출한 뒤, Claude가 보기 전", "컨텍스트 추가, 민감한 프롬프트 차단"],
        ["`PreToolUse`", "도구 호출이 실행되기 전(차단 가능)", "위험한 명령 차단, 파일 보호"],
        ["`PermissionRequest`", "도구 호출에 권한 결정이 필요할 때", "특정 요청 자동 승인 또는 거부"],
        ["`PostToolUse`", "도구 호출이 성공한 뒤", "편집한 파일 포맷팅, 린트, 테스트"],
        ["`Notification`", "Claude Code가 알림을 보낼 때", "Claude가 나를 필요로 할 때 데스크톱 알림"],
        ["`SubagentStart`, `SubagentStop`", "서브에이전트가 시작되거나 끝날 때", "위임한 작업 기록 또는 점검"],
        ["`Stop`", "Claude가 응답을 마쳤을 때", "작업이 정말 끝났는지 확인"],
        ["`PreCompact`, `PostCompact`", "컨텍스트 압축 전후", "핵심 컨텍스트 저장 또는 다시 주입"],
        ["`FileChanged`, `CwdChanged`", "감시 중인 파일이나 작업 디렉터리가 바뀔 때", "환경 다시 로드, 파일 다시 포맷팅"],
        ["`SessionEnd`", "세션이 끝날 때", "정리, 로그 기록"],
      ],
    },
    {
      kind: "table",
      title: "훅을 두는 위치",
      headers: ["위치", "적용 범위", "공유 여부"],
      rows: [
        ["`~/.claude/settings.json`", "내 모든 프로젝트", "아니요"],
        ["`.claude/settings.json`", "프로젝트 하나", "예, 커밋해서 공유"],
        ["`.claude/settings.local.json`", "프로젝트 하나", "아니요, gitignore됨"],
        ["관리형 정책 설정(managed policy settings)", "조직 전체", "관리자가 관리"],
        ["플러그인의 `hooks/hooks.json`", "플러그인이 활성화된 동안", "예, 플러그인과 함께"],
        ["스킬 또는 서브에이전트의 frontmatter", "스킬이 호출된 뒤, 또는 서브에이전트가 실행되는 동안", "예, 파일 안에"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 훅 예시, 단계별로",
      text: [
        "각 블록을 설정 파일의 `hooks` 키 아래에 추가하세요. 파일에 이미 `hooks` 객체가 있다면 통째로 바꾸지 말고 이벤트를 같은 레벨의 키로 추가하세요. `/hooks`를 실행하면 Claude Code가 훅을 불러왔는지 확인할 수 있어요. Claude에게 훅을 대신 써 달라고 해도 돼요.",
      ],
      steps: [
        {
          title: "Claude가 나를 필요로 할 때 데스크톱 알림 받기",
          text: "`~/.claude/settings.json`에 `Notification` 훅을 추가해요. 이 예시는 macOS의 `osascript`를 써요. Linux에서는 `notify-send`, Windows에서는 PowerShell을 쓰세요.",
          code: notify,
        },
        {
          title: "Claude가 편집하는 모든 파일 자동 포맷팅하기",
          text: "`Edit|Write`에 매칭되는 `PostToolUse` 훅이 stdin의 JSON에서 편집된 파일 경로를 `jq`로 읽고 Prettier를 실행해요. `.claude/settings.json`에 두면 팀 전체가 함께 써요.",
          code: format,
        },
        {
          title: "위험한 명령 차단하기",
          text: "`Bash`에 대한 `PreToolUse` 훅이 이 스크립트를 실행해요. 종료 코드 2는 호출을 차단하고, stderr에 쓴 내용은 Claude에게 피드백으로 전달돼서 Claude가 방향을 바꿀 수 있어요. 종료 코드 0은 결정하지 않는다는 뜻이라 일반 권한 확인이 그대로 적용돼요.",
          code: block,
        },
        {
          title: "작업이 끝날 때까지 Claude가 계속 일하게 하기",
          text: "`prompt` 유형의 `Stop` 훅이 모든 작업이 끝났는지 모델에게 물어봐요. 답이 `ok: false`면 Claude는 `reason`을 다음 지시로 삼아 계속 일해요. 이게 대표적인 Stop 훅 예시예요.",
          code: stop,
        },
      ],
      source: { label: "출처: Claude Code 문서, Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "훅이 동작을 결정하는 방식",
      points: [
        "입력: 각 훅은 도구 이름과 `tool_input`, 세션 ID, `cwd` 같은 이벤트 정보를 stdin으로 JSON 형태로 받아요.",
        "종료 코드 0: 이의 없음. `SessionStart`, `UserPromptSubmit` 같은 일부 이벤트에서는 일반 stdout이 Claude의 컨텍스트에 추가돼요.",
        "종료 코드 2: 이벤트가 허용하면 차단. stderr는 이벤트에 따라 Claude나 나에게 전달돼요.",
        "stdout으로 JSON 출력: 더 세밀한 제어. 권한 결정을 담은 `hookSpecificOutput`, 도구 입력을 고쳐 쓰는 `updatedInput`, `additionalContext` 등이 있어요.",
        "그 밖의 종료 코드: 훅에 `onFailure: \"block\"`을 설정하지 않았다면 보통 차단하지 않는 오류로 처리돼요.",
        "한 이벤트에 매칭된 여러 훅은 병렬로 실행돼요.",
      ],
    },
    {
      kind: "table",
      title: "command, prompt, agent, HTTP 훅",
      headers: ["유형", "실행되는 것", "기본 타임아웃"],
      rows: [
        ["`command`", "셸 명령", "10분"],
        ["`http`", "이벤트 JSON을 URL로 POST하고, 응답 본문은 명령 출력처럼 처리", "10분"],
        ["`mcp_tool`", "설정된 MCP 서버의 도구", "10분"],
        ["`prompt`", "`ok` 여부를 답하는 한 번의 모델 호출", "30초"],
        ["`agent`", "결정하기 전에 파일을 읽고 도구를 실행할 수 있는 서브에이전트(실험 기능)", "60초"],
      ],
    },
    {
      kind: "text",
      title: "훅 vs 스킬 vs CLAUDE.md, 그리고 주의할 점",
      points: [
        "CLAUDE.md와 [스킬](/blog/claude-code-skills)은 Claude가 대체로 따르는 지시이고, 훅은 항상 실행돼요. 절대 건너뛰면 안 되는 일은 훅에 넣으세요.",
        "`PostToolUse`는 이미 실행된 작업을 되돌릴 수 없어요. 막으려면 `PreToolUse`를 쓰세요.",
        "`Stop`은 작업이 끝날 때만이 아니라 Claude가 응답을 마칠 때마다 실행되고, 사용자가 중단했을 때는 실행되지 않아요.",
        "훅은 스스로 슬래시 명령을 실행하거나 도구를 호출할 수 없어요. 종료 코드, stdout, stderr, JSON으로만 응답해요.",
        "`\"disableAllHooks\": true`로 훅을 끌 수 있어요. 단, 관리형 훅은 관리형 설정에서도 끄지 않는 한 계속 실행돼요.",
        "훅은 내 Claude Code 환경 안에서만 동작해요. 모든 Claude 제품에 걸친 조직 차원의 검사는 별개 기능인 [Claude inference hooks](/blog/claude-inference-hooks)예요.",
        "테스트 출력을 걸러내는 PreToolUse 훅은 [토큰 사용량을 줄이는](/blog/reduce-claude-code-token-usage) 가장 좋은 방법 중 하나이기도 해요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "훅은 Claude Code가 규칙을 지키게 하고, Crewmark는 계속 일하게 해요.",
      text: [
        "사람 없이 돌아가는 에이전트를 안전하게 만드는 게 훅이에요. 포맷팅, 테스트, 가드레일이 매번 실행되니까요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. 프로젝트의 훅도 적용된 상태로요.",
      ],
      steps: [
        {
          title: "훅을 커밋하기",
          text: "`.claude/settings.json`의 훅은 내 세션처럼 직원의 세션에서도 로드되므로, 직원이 편집한 파일은 포맷팅되고 위험한 명령은 차단돼요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "내가 필요한 일에만 답하기",
          text: "직원은 자기 이슈에 댓글을 남기고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에 훅 추가하기" },
  mid: {
    title: "훅은 매번 실행돼요. 에이전트는 어떤가요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code 훅 자주 묻는 질문",
    items: [
      {
        q: "Claude Code 훅이란 무엇인가요?",
        a: "도구가 실행되기 전이나 Claude가 응답을 마쳤을 때 같은 라이프사이클 이벤트에서 Claude Code가 자동으로 실행하는, 사용자가 정의한 명령, HTTP 호출, 모델 검사예요. Claude가 지시를 기억하기를 기대하는 대신 확실하게 제어할 수 있어요.",
      },
      {
        q: "Claude Code 훅은 어디에서 설정하나요?",
        a: "`~/.claude/settings.json`(모든 프로젝트), `.claude/settings.json`(팀과 공유), `.claude/settings.local.json`(나만)의 `hooks` 아래에 적어요. 플러그인, 스킬, 서브에이전트도 훅을 가질 수 있어요. `/hooks`를 실행하면 로드된 훅을 볼 수 있어요.",
      },
      {
        q: "훅으로 명령을 차단하려면 어떻게 하나요?",
        a: "`Bash`에 매칭되는 `PreToolUse` 훅을 쓰세요. stdin의 JSON에서 명령을 읽고, 차단하려면 stderr에 이유를 쓰고 종료 코드 2로 끝내면 돼요. Claude는 그 이유를 보고 방향을 바꿔요.",
      },
      {
        q: "Stop 훅이란 무엇인가요?",
        a: "Claude가 응답을 마칠 때 실행되는 `Stop` 이벤트에 건 훅이에요. prompt 유형의 Stop 훅은 작업이 끝났는지 확인하고, 끝나지 않았다면 이유와 함께 Claude를 다시 일하게 할 수 있어요.",
      },
      {
        q: "훅과 스킬은 무엇이 다른가요?",
        a: "스킬은 관련이 있을 때 Claude가 로드하고 대체로 따르는 지시와 파일이에요. 훅은 Claude가 어떻게 판단하든 이벤트가 일어날 때마다 Claude Code가 실행하는 코드예요.",
      },
      {
        q: "훅이 실행되지 않는 이유는 뭔가요?",
        a: "`/hooks`에 보이는지, 이벤트 이름과 matcher의 철자가 정확한지, 스크립트에 실행 권한이 있는지, 셸 프로필 출력이 JSON을 망가뜨리지 않는지 확인하세요. 디버그 로그를 켜고 Claude Code를 시작하면 각 훅이 무엇을 했는지 볼 수 있어요.",
      },
      {
        q: "Claude Code 훅과 inference hooks는 같은 건가요?",
        a: "아니요. Claude Code 훅은 내 컴퓨터에서 내 세션을 위해 실행돼요. inference hooks는 Claude Enterprise 기능으로, Claude가 실행되기 전에 조직의 모든 프롬프트를 보안 서버로 보내요.",
      },
    ],
  },
  cta: {
    title: "가드레일은 훅에, 일은 보드에서.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(훅 가이드, 훅 레퍼런스)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
