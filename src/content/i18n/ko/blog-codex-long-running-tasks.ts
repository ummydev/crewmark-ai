import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# 대화형: 원하는 결과를 계획한 뒤, Codex가 스스로 확인할 수 있는 목표를 맡기기
/plan
/goal all tests in test/auth pass and the lint step is clean

# 헤드리스, 스크립트나 cron에서: 워크스페이스의 파일을 수정하도록 허용
codex exec --sandbox workspace-write "Work through TODO.md in order"

# 다음 날 아침이나 다음 cron 실행 때: 같은 세션 이어 가기
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 장시간 작업: 밤새 Codex 돌리기",
    description:
      "OpenAI Codex를 몇 시간, 혹은 밤새 일하게 하는 법: /goal과 /plan, 클라우드 작업, codex exec resume, Mac 잠자기 막기, 휴대폰으로 확인하기, 사용량 한도, 작업을 멈추게 하는 것들.",
  },
  breadcrumb: "Codex 장시간 작업",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Codex 장시간 작업: 밤새 또는 백그라운드에서 Codex 돌리는 법",
    lead: "Codex는 작업 하나를 몇 시간씩 붙잡고, 내가 자는 동안에도 계속할 수 있어요. 단, 네 가지가 갖춰져야 해요. 스스로 확인할 수 있는 목표, 잠들지 않는 컴퓨터(또는 클라우드 작업), 나를 기다리지 않는 승인 설정, 요금제의 넉넉한 사용량. 이 가이드에서는 Goal 모드부터 클라우드 작업, `codex exec resume`까지 긴 Codex 작업을 돌리는 방법과 각각의 한계, 그리고 Codex에 고정된 야간 근무를 맡기는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "밤새 돌리기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Codex를 계속 돌리는 방법",
      text: [
        "어떤 방법은 채팅 하나를 이어 가서 Codex가 컨텍스트를 유지하고, 어떤 방법은 매번 새로 시작해요.",
      ],
      headers: ["방법", "컴퓨터 잠자기 가능", "같은 채팅", "멈추는 시점", "잘 맞는 경우"],
      rows: [
        ["Goal 모드 (`/goal`)", "로컬 작업이면 불가", "예", "목표를 달성했거나 결정이 필요할 때", "끝이 분명한 작업 하나"],
        ["Codex Cloud 작업", "가능", "예", "작업이 끝났을 때. 내가 검토하고 풀 리퀘스트를 엶", "자기 전에 작업 넘기기"],
        ["채팅의 예약 작업", "로컬 파일이면 불가: 컴퓨터를 켜고 앱 실행", "예", "일정대로 실행: 몇 분마다, 매일, 매주", "같은 작업을 주기적으로 확인하기"],
        ["cron에서 `codex exec`", "불가", "예, `codex exec resume`으로", "내 cron 주기. 연결은 직접 해야 함", "스크립트와 CI"],
        ["Crewmark 하트비트", "불가", "예", "내가 정한 근무 시간, 자정을 넘겨도 됨", "보드에서 이슈를 하나씩 가져가는 상시 업무"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "밤새 Codex 돌리는 법",
      steps: [
        {
          title: "확인할 수 있는 목표 주기",
          text: "데스크톱 앱, CLI, IDE 확장에서 `/goal`을 쓰면 Goal 모드가 시작돼요. 목표 문장이 첫 프롬프트이자 완료 기준이 돼요. 완료가 어떤 모습인지 확실하지 않다면 `/plan`이 질문을 던지며 결과를 측정 가능한 기준을 갖춘 목표로 바꿔 줘요. 테스트 스위트 통과 같은 확인 항목을 넣으세요.",
          code: commands,
        },
        {
          title: "컴퓨터를 깨워 두거나 클라우드로 보내기",
          text: "Mac에서 로컬 작업을 한다면 데스크톱 앱에서 “Prevent sleep while running”을 켜세요. Codex Cloud 작업은 자체 워크스페이스에서 돌아가서 컴퓨터가 잠들어도 계속 일해요. Work in > Cloud와 환경을 골라 시작하세요.",
        },
        {
          title: "새벽 2시에 멈추지 않게 승인 설정하기",
          text: "목표는 같은 샌드박스와 승인 정책을 유지하고, 결정이 필요하면 멈춰요. `--sandbox workspace-write`로 워크스페이스 수정을 허용하거나, “Approve for me”를 써서 일상적인 요청은 리뷰어가 처리하게 하세요. `--full-auto`는 더 이상 지원되지 않고, `danger-full-access`는 격리된 러너나 컨테이너에서만 쓰세요.",
        },
        {
          title: "사용량 한도 계획하기",
          text: "Codex는 ChatGPT 요금제의 사용량을 함께 써요. 5시간 롤링 창과 주간 한도가 있고, 클라우드 작업도 같은 풀에서 빠져나가요. ChatGPT Pro는 현재 5시간 한도가 없지만 주간 한도는 적용될 수 있어요. 크레딧이나 API 키가 있으면 로컬 작업을 이어 갈 수 있어요. 수치는 [Claude Code vs Codex](/blog/claude-code-vs-codex)를 보세요.",
        },
        {
          title: "휴대폰으로 확인하기",
          text: "ChatGPT 앱에서 클라우드 작업이나 Settings > Connections에 연결한 Mac·Windows PC의 작업을 따라가고, 명령을 승인하고, diff를 검토할 수 있어요. 연결된 컴퓨터는 깨어 있고 온라인이어야 해요. [Codex 원격 제어](/blog/codex-remote-control)를 참고하세요.",
        },
      ],
      source: { label: "출처: OpenAI Codex 문서, long-running work", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "긴 Codex 작업을 멈추게 하는 것",
      points: [
        "나만 내릴 수 있는 결정. Goal 모드는 스스로 권한을 넓히지 않고 멈추니, 자리를 뜨기 전에 승인 설정을 확인하세요.",
        "로컬 작업에서 잠자기나 연결 끊김. OpenAI는 연결이 끊길 것 같으면 미리 목표를 일시 중지했다가 나중에 재개하라고 권해요.",
        "사용량 한도. 창이 초기화되거나 크레딧을 추가할 때까지 멈춰요.",
        "같은 파일을 수정하는 두 채팅. 병렬 채팅에는 각자 git 워크트리를 주세요.",
        "할 일이 바닥남. 목표를 달성하면 멈추는데, 원하던 바로 그거예요. 작업이 여러 개라면 파일에 목록으로 적어 두고 차례로 처리하게 하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Codex에 야간 근무 맡기기",
      text: [
        "긴 작업은 끝나지만 직무는 끝나지 않아요. Crewmark는 Codex 대화를 근무 시간과 하트비트를 갖춘 AI 직원으로 바꿔 줘서, 내가 하나하나 넣어 주지 않아도 보드에서 다음 이슈를 계속 가져가요.",
      ],
      steps: [
        {
          title: "근무 시간 정하기",
          text: "근무 시간은 자정을 넘길 수 있어서 22:00~07:00 같은 야간 근무도 돼요. 평일만 또는 매일로 정할 수 있어요. 근무 시간이 아니면 직원은 잠들어 있고 요금제 사용량을 쓰지 않아요.",
        },
        {
          title: "하트비트 고르기",
          text: "근무 시간 동안 15, 30, 60, 120, 240분마다 crewmark CLI가 `codex queue --resume`으로 같은 Codex 대화에 메시지를 넣고 실행해서, 직원이 다음 이슈를 가져가게 해요. 컴퓨터는 켜 둬야 해요.",
        },
        {
          title: "아침에 보드 읽기",
          text: "이슈마다 댓글과 활동 기록이 남고, 내가 필요한 일은 직원이 답을 기다리는 메시지로 와요. [Codex를 능동적으로 만드는 법](/proactive-codex)과 [AI 직원이란](/ai-employees)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "밤새 Codex 돌리기" },
  mid: {
    title: "Codex가 매일 밤 야간 근무를 서게 하고 싶으신가요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Codex를 밤새 돌릴 수 있나요?",
        a: "네. `/goal`로 목표를 주고, “Prevent sleep while running”으로 Mac을 깨워 두고(또는 컴퓨터가 잠들어도 계속되는 Codex Cloud 작업을 쓰고), 나를 기다리지 않도록 승인을 설정한 다음, 아침에 결과를 검토하세요.",
      },
      {
        q: "Codex를 백그라운드에서 돌리려면?",
        a: "스크립트, cron, CI에서 대화형 인터페이스 없이 `codex exec`를 실행하고, 나중에 `codex exec resume --last`로 같은 세션을 이어 가세요. 아니면 웹이나 데스크톱 앱에서 Codex Cloud 작업을 시작하고 창을 닫으세요.",
      },
      {
        q: "Codex의 Goal 모드란?",
        a: "`/goal`로 시작하는 Goal 모드는 내가 적은 목표를 향해 Codex가 계속 일하게 해요. 목표 문장이 첫 프롬프트이자 완료 기준이에요. 데스크톱 앱의 진행 상황 행에서 일시 중지, 재개, 수정, 삭제할 수 있어요.",
      },
      {
        q: "컴퓨터가 잠들어도 Codex가 계속 일하나요?",
        a: "클라우드 작업은 그래요. 로컬 작업은 컴퓨터가 깨어 있어야 하는데, Mac에서는 데스크톱 앱의 “Prevent sleep while running” 설정이 처리해 줘요. 휴대폰으로 제어하는 연결된 컴퓨터도 깨어 있고 온라인이어야 해요.",
      },
      {
        q: "긴 Codex 실행이 사용량 한도에 걸릴까요?",
        a: "걸릴 수 있어요. Codex는 ChatGPT 요금제의 5시간 창과 주간 한도를 쓰고, 클라우드 작업도 같은 사용량에서 빠져나가요. 한 번에 몰아서 하기보다 일정이나 하트비트로 여러 창에 나눠 하세요.",
      },
      {
        q: "Codex를 지켜보지 않고 돌려도 안전한가요?",
        a: "내 컴퓨터에서는 `--sandbox workspace-write`나 “Approve for me”를 유지하고, `danger-full-access`는 격리된 러너나 컨테이너에서만 쓰고, 변경이 리뷰를 거치는 저장소에서 작업하세요.",
      },
    ],
  },
  cta: {
    title: "Codex에 야간 근무를 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 OpenAI의 Codex 문서(long-running work, Codex Cloud, 비대화형 모드, 모바일, 예약 작업)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI와 제휴하거나 OpenAI의 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표입니다.",
};
