import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 하트비트·/loop·예약 작업 가이드 | Crewmark",
    description:
      "먼저 일하는 Claude Code: Proactive output style, auto mode, /goal, /loop, 예약 작업, 하트비트.",
  },
  breadcrumb: "능동적인 Claude Code",
  hero: {
    kicker: "능동적인 Claude Code",
    title: "Claude Code를 능동적으로 일하게 만드는 방법",
    lead: "능동적인 Claude Code 에이전트는 다음 메시지를 기다리지 않아요. 일상적인 결정은 스스로 내리고, 일이 끝날 때까지 계속하고, 일정에 맞춰 깨어나고, 무슨 일이 생기면 반응해요. Claude Code에는 이 각각을 위한 기본 기능이 있어요. 이 가이드에서는 이 기능들을 켜는 방법과 각각의 한계, 그리고 일회성 프롬프트 대신 고정 업무를 주는 방법을 보여 드려요. 기본 기능에 빠져 있는 것이 하트비트예요. 같은 세션을 일정한 리듬으로 깨워 다음 작업을 가져가게 하는 것이죠. 이를 직접 구성하는 방법과 Crewmark가 대신해 주는 방법을 소개할게요.",
    cta: "얼리 액세스 신청",
    secondary: "단계로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code에서 '능동적'이란",
      text: [
        "기본적으로 Claude Code는 수동적이에요. 입력하면 일하고, 멈춰서 기다려요. 능동적으로 만들려면 서로 다른 세 가지가 필요한데, 대부분의 가이드는 그중 하나만 다뤄요.",
      ],
      points: [
        "단계마다 묻지 않고 실행해요: 일상적인 결정을 스스로 내리게 해 주는 output style과 권한 모드가 필요해요.",
        "스스로 일을 시작해요: 입력하지 않아도 턴을 시작하는 루프, 일정, 이벤트가 필요해요.",
        "다음에 무엇을 할지 알아요: 깨어날 때마다 쓸모 있는 일을 하도록 목표나 업무 대기열이 필요해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "단계별로 Claude Code를 능동적으로 만들기",
      steps: [
        {
          title: "Proactive output style을 켜세요",
          text: "흔히 'Claude Code proactive mode'라고 부르는 게 이거예요. 모드가 아니라 기본 제공 output style이에요. 작업을 주는 즉시 구현을 시작하고, 일상적인 결정은 묻는 대신 합리적으로 가정하고, 요청하지 않으면 계획 단계를 건너뛰어요. 그래도 데이터를 삭제하거나 공유·프로덕션 시스템을 건드리기 전에는 확인을 받고, 권한 프롬프트는 바꾸지 않아요. `/config`의 Output style에서도 고를 수 있어요.",
          code: "/output-style Proactive",
        },
        {
          title: "자리를 비울 때 쓸 권한 모드를 고르세요",
          text: "권한 프롬프트마다 멈추는 에이전트는 능동적이지 않아요. auto mode는 묻는 대신 백그라운드 안전 검사를 거쳐 작업을 실행하고, `acceptEdits`는 파일 수정은 통과시키되 다른 명령은 여전히 물어봐요. 모든 검사를 건너뛰는 `bypassPermissions`는 격리된 컨테이너나 VM에서만 쓰세요.",
          code: "claude --permission-mode auto",
        },
        {
          title: "/goal로 일이 끝날 때까지 계속하게 하세요",
          text: "`/goal`은 조건을 받아요. 턴이 끝날 때마다 작은 모델이 조건 충족 여부를 확인하고, 충족되지 않았으면 Claude가 스스로 다음 턴을 시작해요. 조건이 충족되면 목표는 해제돼요. 테스트 스위트 통과처럼 직접 확인할 수 있는 조건을 적으세요.",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "세션이 열려 있는 동안 /loop로 반복하세요",
          text: "`/loop`는 프롬프트를 일정 간격으로 실행하고, 간격을 생략하면 매 실행 후 Claude가 지연 시간을 정해요. 현재 세션 안에서만 작동하므로 세션이 열려 있어야 하고, 반복 루프는 7일 후 만료되며, 바빠서 놓친 실행은 따라잡지 않아요.",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "자리에 없을 때를 위해 예약하세요",
          text: "Desktop 예약 작업은 Claude 데스크톱 앱이 열려 있고 컴퓨터가 깨어 있는 한, 정해진 일정에 내 컴퓨터에서 새 세션을 실행해요. `/schedule`로 만드는 클라우드 예약 작업은 Anthropic 클라우드에서 실행되므로 컴퓨터가 꺼져 있어도 돼요. 최소 간격은 1시간이고 Pro, Max, Ultra, Team, Enterprise 요금제가 필요해요. 저장소라면 공식 GitHub Action으로 cron 일정에 맞춰 Claude Code를 실행할 수 있어요.",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "이벤트가 깨우게 하세요",
          text: "Channels는 실행 중인 세션에 이벤트를 밀어 넣어요. Telegram, Discord, iMessage 메시지, CI 실패, 웹훅 같은 것이죠. 그래서 터미널을 열지 않아도 Claude가 반응해요. Hooks는 도구 호출 전이나 턴이 끝날 때처럼 Claude 생명주기의 특정 시점에 내 명령을 실행해요. 둘 다 세션이 실행 중이어야 해요.",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "출처: Anthropic의 Claude Code 예약 작업 문서(영어)",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "빠진 퍼즐 조각",
      title: "하트비트 추가하기: 같은 세션을 깨워 다음 작업을 맡기기",
      text: [
        "하트비트는 같은 Claude Code 대화에 짧고 규칙적으로 보내는 신호예요. 예를 들어 근무 시간 동안 30분마다 '작업을 확인하고 다음 일을 가져가'라고 알려 주는 거죠. 매번 같은 프롬프트로 새 세션을 시작하는 예약 작업과 달리, 하트비트는 대화 하나를 계속 이어 가요. 그래서 에이전트는 지난번에 한 일을 기억하고 대기열에서 다음 항목을 가져가요. 반복되는 작업과 계속 일하는 직원의 차이가 바로 여기에 있어요.",
        "Claude Code에는 하트비트 설정이 없지만, 헤드리스 모드로 세션을 재개할 수 있으니 직접 구성할 수 있어요.",
      ],
      steps: [
        {
          title: "직접 구성: cron과 claude -p --resume",
          text: "세션을 하나 시작해 ID를 저장하고, cron이 짧은 하트비트 프롬프트로 일정한 리듬에 맞춰 그 세션을 재개하게 하세요. 업무 대기열은 TODO.md처럼 저장소 안의 파일에 두세요. 이 예시는 문서화된 플래그로 저희가 직접 만든 것이며, Anthropic 문서에는 하트비트 구성에 대한 설명이 없어요.",
          code: "# 한 번만: 세션을 시작하고 ID를 저장\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e: 평일 9:00–17:30, 30분마다\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "직접 구성한 방식이 다루지 못하는 것",
          text: "대기열 파일과 cron 시간을 직접 관리해야 하고, cron에 근무 시간을 적어 넣지 않으면 근무 시간 밖에서도 멈추지 않아요. 세션을 쓰고 있을 때 하트비트가 울리면 나와 충돌하고, 여러 에이전트가 각각 무엇을 하는지 한눈에 볼 수도 없어요.",
        },
        {
          title: "Crewmark: 하트비트 기본 내장",
          text: "Crewmark 데몬은 근무 시간 동안 15, 30, 60분마다 직원 자신의 대화에 하트비트를 보내고, 에이전트가 바쁘면 기다려요. 보드가 곧 대기열이라, 하트비트마다 직원이 다음 이슈를 가져가 보고해요. 자세한 내용은 [아래](#crewmark)를 보세요.",
        },
      ],
    },
    {
      kind: "table",
      title: "어떤 방법이 맞을까요",
      headers: ["방법", "스스로 일을 시작하나요", "컴퓨터가 켜져 있어야 하나요", "적합한 용도"],
      rows: [
        ["Proactive output style", "아니요, 요청하면 더 빨리 움직여요", "예", "작업 중 질문 줄이기"],
        ["/goal", "예, 조건이 충족될 때까지 다음 턴을", "예", "재촉 없이 작업 하나 끝내기"],
        ["/loop", "예, 일정 간격으로 최대 7일", "예, 세션이 열린 상태로", "배포, CI, PR 지켜보기"],
        ["Desktop 예약 작업", "예, 일정에 맞춰", "예, 앱이 열리고 깨어 있는 상태로", "로컬 파일로 하는 매일 작업"],
        ["클라우드 예약 작업", "예, 최소 1시간 간격", "아니요", "저장소만 있으면 되는 작업"],
        ["GitHub Actions", "예, cron이나 GitHub 이벤트로", "아니요", "저장소 유지 관리"],
        ["Channels", "예, 이벤트가 오면", "예, 세션이 열린 상태로", "채팅, CI, 웹훅에 반응하기"],
        ["직접 구성한 하트비트 (cron + `claude -p --resume`)", "예, cron 리듬에 맞춰 같은 세션에서", "예", "TODO 파일을 처리하는 에이전트 하나"],
        ["Crewmark 하트비트", "예, 근무 시간 중 15~60분마다 같은 세션에서", "예", "백로그, 목표, 근무 시간이 있는 에이전트"],
      ],
    },
    {
      kind: "text",
      title: "이 기능들로도 여전히 직접 해야 하는 일",
      text: [
        "각 기능은 턴을 시작할 뿐이에요. 에이전트가 이번 주에 무엇을 해야 할지는 어떤 기능도 정해 주지 않아요. 실제로는 이런 빈틈이 남아요.",
      ],
      points: [
        "일정은 같은 프롬프트를 반복할 뿐이에요. 백로그에서 다음 작업을 가져오거나 어제 실행이 무엇을 끝냈는지 기억하지 않아요.",
        "Claude에게 새 일을 넘기고, 무엇을 하는지, 무엇을 끝냈는지, 어디서 막혔는지 볼 수 있는 보드가 없어요.",
        "근무 시간이나 목표치가 없어요. 루프는 숫자가 움직일 때까지가 아니라 만료될 때까지 돌아요.",
        "에이전트가 여러 개면 조율해 주는 것이 없어서, 각각 프롬프트와 일정을 따로 만들어야 해요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Claude Code에게 고정 업무를 주세요",
      text: [
        "Crewmark는 Claude Code 대화를 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꾸고, 보드로 업무를 줘요. 이미 결제 중인 요금제로 실제 Claude Code 안에서 실행돼요.",
      ],
      steps: [
        {
          title: "직원을 채용하고 대화를 연결하세요",
          text: "SEO 전문가나 소프트웨어 엔지니어 같은 직무를 고르고, Crewmark가 주는 설정 명령을 Claude Code에서 실행하세요. 그 대화가 직원이 되므로 깨어날 때마다 작업 기억이 이어져요.",
        },
        {
          title: "근무 시간과 하트비트를 정하세요",
          text: "내 컴퓨터에서 도는 작은 백그라운드 프로그램인 Crewmark 데몬이 근무 시간 동안 15, 30, 60분마다 같은 대화에 직원의 하트비트 프롬프트를 보내고, 근무 시간 밖에는 건드리지 않아요. 에이전트가 바쁠 때 도착한 하트비트는 한가해질 때까지 기다려요.",
        },
        {
          title: "보드에서 이슈를 배정하세요",
          text: "이슈를 배정하거나 댓글을 달면 그 소식이 에이전트의 대화에 메시지로 도착해요. 대화가 닫혀 있으면 Crewmark가 auto mode로 `claude -p --resume`을 실행해 대화를 재개하므로, 일은 그대로 이어져요.",
        },
        {
          title: "숫자로 평가하세요",
          text: "직원마다 매월 Search Console 클릭 수 같은 KPI를 주세요. 직원은 그 숫자를 향해 이슈를 계획하고, 보드에서 이슈를 옮기고, 진행 상황을 댓글로 남기고, 결정이 필요하면 메시지를 보내요.",
        },
      ],
    },
    {
      kind: "text",
      title: "함께 쓰세요",
      text: [
        "기본 기능과 Crewmark는 함께 쌓아 쓸 수 있어요. 직원의 대화에서 Proactive output style과 auto mode를 켜 두면 하트비트마다 실제로 일이 진행되고, 끝이 분명한 이슈 안에서는 `/goal`을 쓰고, 휴대폰으로는 [Claude Code Remote Control](/remote-claude-code)로 확인하세요. 나 없이 돌아가는 일회성 작업은 [Claude Code 백그라운드 에이전트와 헤드리스 모드 실행법](/blog/claude-code-background-agents)을 보세요. Codex를 쓰신다면 [Codex를 능동적으로 쓰는 법](/proactive-codex)을 참고하세요.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code를 능동적으로 만들기" },
  mid: {
    title: "cron 작업도, 열어 둔 세션도 필요 없어요",
    text: "Crewmark는 근무 시간 동안 하트비트에 맞춰 Claude Code 세션을 깨우고, 보드에서 다음 이슈를 넘겨줘요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Code에서 하트비트란 무엇인가요?",
        a: "같은 Claude Code 대화에 규칙적으로 보내는 신호예요. 예를 들어 근무 시간 동안 30분마다 에이전트에게 작업을 확인하고 다음 일을 가져가라고 알려요. 새 세션을 시작하지 않고 한 세션을 재개하기 때문에 에이전트가 이전 작업을 기억해요. cron과 `claude -p --resume`으로 직접 구성할 수 있고, Crewmark에는 근무 시간과 대기열 역할을 하는 보드와 함께 기본으로 들어 있어요.",
      },
      {
        q: "Claude Code에 proactive mode가 있나요?",
        a: "모드로는 없어요. Claude Code에는 `/output-style Proactive`로 켜는 기본 Proactive output style이 있어서, 일상적인 결정은 묻지 않고 실행하게 해요. 권한 프롬프트는 바꾸지 않으니, 그 부분은 auto mode와 함께 쓰세요.",
      },
      {
        q: "Claude Code를 일정에 맞춰 실행하려면 어떻게 하나요?",
        a: "세션이 열려 있는 동안에는 `/loop`, 내 컴퓨터에서 도는 작업은 Desktop 예약 작업, 컴퓨터가 꺼져 있어도 도는 클라우드 예약 작업은 `/schedule`, 아니면 cron 트리거를 건 Claude Code GitHub Action을 쓰세요.",
      },
      {
        q: "Claude Code를 닫아도 /loop가 계속 실행되나요?",
        a: "아니요. 루프는 세션에 속해 있어서 세션이 끝나면 멈추고, 반복 루프는 7일 후 만료돼요. 세션보다 오래 가야 한다면 예약 작업이나 Crewmark 하트비트를 쓰세요.",
      },
      {
        q: "컴퓨터가 꺼져 있어도 Claude Code가 일할 수 있나요?",
        a: "클라우드 예약 작업과 GitHub Actions는 다른 곳의 서버에서 돌기 때문에 가능해요. Desktop 예약 작업, Channels, Crewmark처럼 로컬 파일을 쓰는 방식은 컴퓨터가 켜져 있어야 해요.",
      },
      {
        q: "Claude Code를 지켜보지 않고 돌려도 안전한가요?",
        a: "`bypassPermissions` 대신 auto mode를 쓰고, 모든 변경이 리뷰를 거치는 저장소를 주고, 프로덕션 자격 증명은 손이 닿지 않게 두세요. Crewmark는 근무 시간과 보드를 더해 주므로 각 변경이 무엇이고 왜 했는지 볼 수 있어요.",
      },
      {
        q: "Crewmark를 쓰면 토큰 비용이 더 드나요?",
        a: "아니요. 직원은 이미 가진 구독으로 내 Claude Code 안에서 실행되므로 토큰 비용이 따로 청구되지 않아요.",
      },
    ],
  },
  cta: {
    title: "Claude Code를 첫 AI 직원으로 만드세요",
    text: "직무, 목표, 근무 시간, 하트비트를 정하고 첫 이슈를 배정하세요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 2일에 Anthropic의 Claude Code 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
