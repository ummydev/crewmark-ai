import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex 예약 작업·cron·하트비트 가이드 | Crewmark AI",
    description:
      "먼저 일하는 Codex와 ChatGPT: 예약 작업(구 Automations), codex exec와 cron, GitHub Action, 하트비트.",
  },
  breadcrumb: "능동적인 Codex",
  hero: {
    kicker: "능동적인 Codex",
    title: "Codex를 능동적으로 일하게 만드는 방법",
    lead: "능동적인 Codex 에이전트는 채팅창에서 가만히 기다리지 않아요. 일상적인 승인은 스스로 처리하고, 일정에 맞춰 실행되고, 풀 리퀘스트나 Slack 메시지에 반응하고, 결과를 보고해요. OpenAI는 이 각각을 위한 기능을 제공하고, 그중 일부는 ChatGPT와 공유돼요. 이 가이드에서는 설정 방법과 각 기능의 한계, 그리고 일회성 프롬프트 대신 Codex에게 고정 업무를 주는 방법을 보여 드려요. 어떤 기능도 주지 않는 것이 하트비트예요. 같은 대화를 일정한 리듬으로 깨워 다음 작업을 가져가게 하는 것이죠. 가장 가까운 기본 기능과, Crewmark가 하트비트를 더하는 방법을 소개할게요.",
    cta: "시작하기",
    secondary: "단계로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Codex에서 '능동적'이란",
      text: [
        "기본 상태의 Codex는 물어보면 답해요. 능동적으로 설정하려면 세 가지가 필요한데, 각각 제품의 다른 곳에 있어요.",
      ],
      points: [
        "승인마다 멈추지 않아요: 일상적인 작업은 통과시키는 권한 모드가 필요해요.",
        "스스로 시작해요: 나 없이 일을 시작하는 예약 작업, 이벤트 트리거, cron 작업이 필요해요.",
        "다음에 할 일을 알아요: 실행할 때마다 쓸모 있는 일을 하도록 백로그와 목표가 필요해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "단계별로 Codex를 능동적으로 만들기",
      steps: [
        {
          title: "매번 멈추지 않는 권한 모드를 고르세요",
          text: "CLI에서 `/permissions`를 입력하세요. “Approve for me”는 잠재적으로 위험하다고 감지된 작업만 물어봐서, 지켜보지 않는 작업에 잘 맞아요. “Full access”는 파일과 인터넷 제한을 모두 없애니 격리된 머신에서만 쓰세요. 오래된 가이드에서 `--full-auto`를 쓰라고 한다면, 그 플래그는 더 이상 지원되지 않아요. 대신 `--sandbox workspace-write`를 쓰세요.",
          code: "/permissions",
        },
        {
          title: "예약 작업(구 Automations)을 만드세요",
          text: "예전에 Codex Automations라고 부르던 기능이 이제 Scheduled tasks(예약 작업)예요. Codex 채팅에서 요청하세요. 어떤 일인지, 언제 실행할지, 결과를 같은 채팅으로 받을지 말하면 돼요. 몇 분마다, 매일, 매주 실행할 수 있고, 사이드바의 Scheduled 화면에서 관리해요. 로컬 파일로 작업하는 예약 작업은 컴퓨터가 켜져 있고 앱이 실행 중이어야 하며, Git 저장소에서는 별도의 백그라운드 worktree에서 작업할 수 있어요. Codex CLI에서는 예약 작업을 관리하지 않아요.",
          code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
        },
        {
          title: "이벤트로 작업을 시작하세요",
          text: "시간 대신 어떤 일이 생겼을 때 작업을 시작할 수도 있어요. 새 Gmail 메시지, 지정한 채널의 Slack 메시지, GitHub 풀 리퀘스트 활동 같은 것이죠. 이벤트 트리거는 대상 요금제에서 웹이나 모바일 ChatGPT로 설정하고, 한 작업에는 이벤트와 일정 중 하나만 쓸 수 있어요.",
        },
        {
          title: "codex exec로 cron에서 Codex를 실행하세요",
          text: "`codex exec`는 대화형 화면 없이 Codex를 실행해요. 진행 상황은 stderr로, 최종 메시지만 stdout으로 나가서 스크립트나 예약 작업에 잘 맞아요. `--sandbox workspace-write`를 주지 않으면 읽기 전용이에요. OpenAI 문서는 예약 작업을 활용 사례로 들지만 cron 예시는 없어요. 아래 예시는 저희가 만든 거예요.",
          code: '# crontab -e: 평일 매일 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "GitHub 워크플로에 Codex를 넣으세요",
          text: "`openai/codex-action` GitHub Action은 워크플로 안에서 Codex를 실행하고, 트리거는 직접 정해요. 풀 리퀘스트에 `@codex review`라고 댓글을 달면 리뷰를 받고, `@codex`에게 CI 실패를 고쳐 달라고 할 수도 있어요. Linear에서는 이슈를 Codex에게 배정할 수 있어요.",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "hooks로 세션 안에서 반응하세요",
          text: "Codex hooks는 세션 시작, 도구 호출 전후, 턴이 멈출 때 같은 시점에 내 명령을 실행해요. Codex가 일하는 동안 반응할 뿐, 일을 시작하지는 않아요. 일을 시작하려면 예약 작업이나 이벤트 트리거를 쓰세요.",
        },
      ],
      source: {
        label: "출처: OpenAI의 Codex 예약 작업 문서(영어)",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "빠진 퍼즐 조각",
      title: "하트비트 추가하기: 같은 대화를 깨워 다음 작업을 맡기기",
      text: [
        "하트비트는 같은 Codex 대화에 짧고 규칙적으로 보내는 신호예요. 예를 들어 근무 시간 동안 30분마다 '작업을 확인하고 다음 일을 가져가'라고 알려 주는 거죠. 예약 작업은 프롬프트 하나를 반복하지만, 하트비트는 대화 하나를 계속 이어 가요. 그래서 Codex는 지난번에 한 일을 기억하고 대기열에서 다음 항목을 가져가요. 반복되는 작업과 계속 일하는 직원의 차이가 바로 여기에 있어요.",
      ],
      steps: [
        {
          title: "가장 가까운 기본 기능",
          text: "Codex 예약 작업은 결과를 같은 채팅으로 보낼 수 있으니, 프롬프트를 하트비트처럼 쓸 수 있어요. “30분마다 TODO.md를 확인하고, 체크되지 않은 다음 작업을 처리한 뒤 체크해” 같은 식이죠. 그래도 대기열 파일은 직접 관리해야 하고, 일정은 근무 시간이나 다른 에이전트를 알지 못해요.",
        },
        {
          title: "Crewmark: 하트비트 기본 내장",
          text: "Crewmark 데몬은 근무 시간 동안 15, 30, 60분마다 `codex queue --resume`으로 직원 자신의 Codex 대화에 하트비트를 넣고, 보드가 곧 대기열이에요. 하트비트마다 직원이 다음 이슈를 가져가 보고해요. 자세한 내용은 [아래](#crewmark)를 보세요.",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "ChatGPT는요?",
      text: [
        "ChatGPT도 먼저 연락할 수 있어요. ChatGPT의 예약 작업은 알림, 정기 브리핑, 모니터링 결과를 보내 주고, 사이드바의 Scheduled 페이지에서 찾을 수 있어요. 몇 개까지 만들 수 있고 얼마나 자주 실행되는지는 요금제에 따라 달라요. 매일 능동적으로 업데이트를 보내 주던 ChatGPT Pulse는 2026년 6월에 종료되었고, OpenAI는 대신 일일 브리핑용 예약 작업을 권해요.",
        "Codex와의 차이: ChatGPT 작업은 ChatGPT가 접근할 수 있는 것으로 일하지, 내 코드베이스로 일하지 않아요. 저장소에서 할 일이라면 Codex 예약 작업이나 `codex exec`를 쓰세요.",
      ],
    },
    {
      kind: "table",
      title: "어떤 방법이 맞을까요",
      headers: ["방법", "스스로 일을 시작하나요", "컴퓨터가 켜져 있어야 하나요", "적합한 용도"],
      rows: [
        ["Approve for me", "아니요, 요청하면 덜 멈춰요", "예", "작업 중 끊김 줄이기"],
        ["로컬 파일 예약 작업", "예, 일정에 맞춰", "예, 앱이 실행 중인 상태로", "저장소에서 하는 매일 작업"],
        ["웹 예약 작업", "예, 일정에 맞춰", "아니요", "내 파일이 필요 없는 작업"],
        ["이벤트 트리거 작업", "예, Gmail, Slack, GitHub 활동에 맞춰", "아니요", "메시지와 PR에 반응하기"],
        ["codex exec + cron", "예, 내 cron 일정에 맞춰", "예", "처음부터 끝까지 직접 제어하는 스크립트"],
        ["Codex GitHub Action", "예, 워크플로 트리거로", "아니요", "리뷰와 CI 수정"],
        ["ChatGPT 예약 작업", "예, 일정에 맞춰", "아니요", "알림과 브리핑"],
        ["하트비트로 쓰는 예약 작업", "예, 일정에 맞춰 같은 채팅으로 결과 전달", "예, 로컬 파일이라면", "TODO 파일을 처리하는 에이전트 하나"],
        ["Crewmark 하트비트", "예, 근무 시간 중 15~60분마다 같은 대화에서", "예", "백로그, 목표, 근무 시간이 있는 에이전트"],
      ],
    },
    {
      kind: "text",
      title: "이 기능들로도 여전히 직접 해야 하는 일",
      text: ["위의 모든 방법은 실행을 시작할 뿐이에요. Codex가 이번 주에 무엇을 해야 할지는 어떤 방법도 정해 주지 않아요."],
      points: [
        "예약 작업은 프롬프트 하나를 반복해요. 백로그에서 다음 항목을 가져오거나 지난 실행이 무엇을 끝내지 못했는지 알지 못해요.",
        "Codex에게 일을 넘기고 진행 중, 완료, 막힘 상태를 볼 수 있는 공유 보드가 없어요.",
        "근무 시간이나 목표치가 없어서, 월말까지 숫자를 움직여 달라고 할 수 없어요.",
        "Codex를 Claude Code와 함께 쓰면 프롬프트, 일정, 확인할 곳이 두 벌로 나뉘어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Codex에게 고정 업무를 주세요",
      text: [
        "Crewmark는 Codex 대화를 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꾸고, Claude Code 직원들과 같은 보드로 업무를 줘요. 이미 결제 중인 ChatGPT 요금제로 실제 Codex 안에서 실행돼요.",
      ],
      steps: [
        {
          title: "직원을 채용하고 Codex 대화를 연결하세요",
          text: "직무를 고르고 Crewmark가 주는 설정 명령을 Codex에서 실행하세요. 그 대화가 직원이 되므로 깨어날 때마다 작업을 기억해요.",
        },
        {
          title: "근무 시간과 하트비트를 정하세요",
          text: "내 컴퓨터에서 도는 작은 백그라운드 프로그램인 Crewmark 데몬이 근무 시간 동안 15, 30, 60분마다 `codex queue --resume`으로 그 대화에 직원의 하트비트 프롬프트를 넣고, 근무 시간 밖에는 건드리지 않아요.",
        },
        {
          title: "보드에서 이슈를 배정하세요",
          text: "이슈를 배정하거나 댓글을 달면 그 소식이 같은 대화로 전달돼요. 그래서 내가 붙여 넣기를 기다리지 않고 Codex가 새 일을 스스로 가져가요.",
        },
        {
          title: "숫자로 평가하세요",
          text: "직원마다 KPI를 주세요. 직원은 그 숫자를 향해 이슈를 계획하고, 보드에서 이슈를 옮기고, 진행 상황을 댓글로 남기고, 결정이 필요하면 메시지를 보내요.",
        },
      ],
    },
    {
      kind: "text",
      title: "함께 쓰세요",
      text: [
        "작은 반복 잡무는 Codex 자체 예약 작업에 맡기고, 계속 이어지는 일은 Crewmark에 맡기세요. 직원의 대화를 “Approve for me”로 설정해 두면 하트비트마다 실제로 일이 진행되고, 풀 리퀘스트 리뷰는 `@codex review`로 계속 돌리면 돼요. Claude Code를 쓰신다면 [Claude Code를 능동적으로 쓰는 법](/proactive-claude-code)을 보세요.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex를 능동적으로 만들기" },
  mid: {
    title: "예약된 프롬프트가 아니라 고정 업무를 주세요",
    text: "Crewmark는 근무 시간 동안 하트비트에 맞춰 Codex 대화를 깨우고, 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Codex에서 하트비트란 무엇인가요?",
        a: "같은 Codex 대화에 규칙적으로 보내는 신호예요. 예를 들어 근무 시간 동안 30분마다 작업을 확인하고 다음 일을 가져가라고 알려요. 대화 하나를 이어 가기 때문에 Codex가 이전 작업을 기억해요. 같은 채팅으로 결과를 보내는 예약 작업이 가장 가깝고, Crewmark에는 근무 시간과 대기열 역할을 하는 보드와 함께 하트비트가 기본으로 들어 있어요.",
      },
      {
        q: "Codex Automations는 어떻게 됐나요?",
        a: "이제 Scheduled tasks(예약 작업)라고 불러요. Codex 채팅에서 요청해 만들고, 앱의 Scheduled 화면에서 관리해요. 문서 페이지 URL은 여전히 /automations로 끝나요.",
      },
      {
        q: "codex --full-auto가 아직 작동하나요?",
        a: "아니요, `--full-auto`는 더 이상 지원되지 않아요. Codex가 파일을 수정하게 하려면 `--sandbox workspace-write`를 쓰거나, 위험해 보이는 작업만 묻는 “Approve for me” 권한 모드를 쓰세요.",
      },
      {
        q: "Codex를 일정에 맞춰, 또는 cron으로 실행하려면 어떻게 하나요?",
        a: "Codex 앱에서는 예약 작업을 요청하세요. 직접 쓰는 스케줄러에서는 cron 작업으로 `codex exec`를 호출하고, 파일을 바꿔야 한다면 `--sandbox workspace-write`를 넘기세요. 저장소에서는 워크플로로 Codex GitHub Action을 실행할 수도 있어요.",
      },
      {
        q: "ChatGPT가 먼저 메시지를 보낼 수 있나요?",
        a: "네, 예약 작업과 이벤트 트리거 작업으로 가능해요. 능동적인 일일 업데이트였던 ChatGPT Pulse는 2026년 6월에 종료되었고, OpenAI는 대신 일일 브리핑용 예약 작업을 권해요.",
      },
      {
        q: "컴퓨터가 꺼져 있어도 Codex가 계속 일하나요?",
        a: "웹 예약 작업, 이벤트 트리거, Codex 클라우드 작업, GitHub Action은 가능해요. 로컬 예약 작업, cron 작업, Crewmark처럼 로컬 파일로 일하는 방식은 컴퓨터가 켜져 있어야 해요.",
      },
      {
        q: "Crewmark를 쓰면 토큰 비용이 더 드나요?",
        a: "아니요. 직원은 이미 가진 ChatGPT 요금제로 내 Codex 안에서 실행되므로 토큰 비용이 따로 청구되지 않아요.",
      },
    ],
  },
  cta: {
    title: "Codex를 첫 AI 직원으로 만드세요",
    text: "직무, 목표, 근무 시간, 하트비트를 정하고 첫 이슈를 배정하세요.",
    button: "시작하기",
  },
  checked: "2026년 11월 2일에 OpenAI의 Codex 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI와 제휴하거나 OpenAI의 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표입니다.",
};
