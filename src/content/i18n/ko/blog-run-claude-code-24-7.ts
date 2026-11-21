import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Claude Code가 일하는 동안 Mac을 깨워 두기 (claude가 종료되면 다시 잠들 수 있음)
caffeinate -i claude --permission-mode auto

# 또는 작업을 클라우드 세션에 넘기기. 노트북을 닫아도 계속 실행됨
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# 어느 컴퓨터에서든 그 클라우드 세션에 다음 단계 넣기
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code를 24시간 돌릴 수 있을까? 밤새, 무인으로 돌리기",
    description:
      "Claude Code를 밤새 또는 하루 종일 일하게 하는 법: 권한 모드, /goal, 컴퓨터 깨워 두기, 클라우드 세션, 예약 작업, 사용량 한도, 작업을 멈추게 하는 것들.",
  },
  breadcrumb: "Claude Code 24시간 돌리기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code를 24시간 돌릴 수 있을까? 밤새, 지켜보지 않고 돌리는 법",
    lead: "돼요, 한계는 있지만요. Claude Code에는 스스로 멈추는 시계가 없지만, 네 가지가 멈추게 해요. 세션이 끝나거나 컴퓨터가 잠들 때, 권한 확인 창에서 멈출 때, 요금제 사용량 한도에 걸릴 때, 일을 끝내고 다음에 할 게 없을 때. 각각 해결책이 있어요. 이 가이드에서는 내가 자는 동안 Claude Code를 계속 일하게 하는 방법과 각각의 한계, 그리고 고정된 야간 근무를 맡기는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "밤새 돌리기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code를 계속 돌리는 방법",
      text: [
        "어떤 방법은 대화 하나를 이어 가서 Claude가 한 일을 기억하고, 어떤 방법은 같은 프롬프트로 매번 새 세션을 시작해요.",
      ],
      headers: ["방법", "컴퓨터 꺼도 됨", "같은 대화", "멈추는 시점", "잘 맞는 경우"],
      rows: [
        ["클라우드 세션 (`claude --cloud`, claude.ai/code)", "예", "예", "일정 시간 활동이 없으면 멈추고 VM이 회수됨", "자기 전에 넘기는 긴 작업 하나"],
        ["클라우드 예약 작업 (`/schedule`)", "예", "아니요, 실행마다 새 세션", "최대 1시간마다. Pro, Max, Ultra, Team, Enterprise", "저장소만 있으면 되는 반복 작업"],
        ["데스크톱 예약 작업", "아니요: 앱 실행, 컴퓨터 깨어 있어야 함", "아니요, 실행마다 새 세션", "컴퓨터가 깨어 있을 때만", "로컬 파일을 다루는 야간 작업"],
        ["`/loop`", "아니요: 세션이 열려 있어야 함", "예", "세션과 함께 끝남. 반복 루프는 7일 뒤 만료", "몇 시간 동안 CI나 배포 지켜보기"],
        ["cron + `claude -p --resume`", "아니요", "예", "내 cron 주기. 연결은 직접 해야 함", "TODO 파일을 처리하는 에이전트 하나"],
        ["Crewmark 하트비트", "아니요", "예", "내가 정한 근무 시간, 자정을 넘겨도 됨", "보드에서 이슈를 하나씩 가져가는 상시 업무"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "밤새 Claude Code 돌리는 법",
      steps: [
        {
          title: "매번 확인을 묻지 않는 권한 모드 고르기",
          text: "새벽 2시에 권한 확인 창에서 기다리는 세션은 아침까지 아무것도 안 해요. Auto 모드는 묻는 대신 백그라운드 안전 검사를 거쳐 작업을 실행해요. 모든 검사를 건너뛰는 `bypassPermissions`는 격리된 컨테이너와 VM에서만 쓰세요.",
          code: overnight,
        },
        {
          title: "끝나는 지점 정해 주기",
          text: "`/goal`은 테스트 스위트 통과 같은 조건을 받아요. 턴이 끝날 때마다 Claude가 조건을 확인하고, 충족될 때까지 스스로 다음 턴을 시작해요. 더 긴 밤이라면 저장소에 TODO 파일이나 계획서를 남기고 순서대로 처리하라고 하세요.",
        },
        {
          title: "컴퓨터를 깨워 두거나 클라우드로 옮기기",
          text: "로컬 세션은 컴퓨터가 켜져 있고 claude 프로세스가 돌아가야 해요. Mac에서는 `caffeinate -i`가 Claude Code가 도는 동안 잠들지 않게 해 주고, 서버에서는 터미널을 닫아도 살아남도록 tmux나 screen 안에서 claude를 실행하세요. 클라우드 세션은 노트북을 닫아도 계속 돌아가요.",
        },
        {
          title: "사용량 한도 계획하기",
          text: "Claude 요금제는 채팅과 함께 쓰는 5시간 롤링 창과 주간 한도가 있어요. Max는 Pro의 5배, Ultra는 주간 Pro의 10배이고 인증된 계정은 5시간 한도가 없어요. 작업 도중 한도에 걸리면 Claude Code가 현재 단계는 마무리할 수 있어요(Pro는 주 1회, Max는 매번). 사용량 크레딧이나 API 키가 있으면 계속 갈 수 있어요. [Claude Code 토큰 사용량 줄이는 법](/blog/reduce-claude-code-token-usage)을 참고하세요.",
        },
        {
          title: "휴대폰으로 확인하기",
          text: "Remote Control로 Claude 앱이나 브라우저에서 로컬 세션을 볼 수 있고, 클라우드 세션은 앱의 Code 탭에 나타나요. 밤사이 Claude가 질문했다면 일어나서 답하면 이어서 진행해요. [Claude Code Remote Control](/remote-claude-code)을 참고하세요.",
        },
      ],
      source: { label: "출처: Anthropic의 Claude Code 문서, 클라우드 세션", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "밤사이 Claude Code를 멈추게 하는 것",
      points: [
        "터미널이 닫히거나 컴퓨터가 잠듦. Remote Control 세션은 컴퓨터가 깨어나면 다시 연결되지만, 잠든 동안에는 아무 일도 하지 않아요.",
        "아무도 답하지 않는 권한 확인 창. Auto 모드로 대부분 피할 수 있어요.",
        "사용량 한도. 크레딧이나 API 키를 추가하지 않으면 창이 초기화될 때까지 세션이 기다려요.",
        "클라우드에서의 비활성. 클라우드 세션은 MCP 도구 호출 승인을 기다리는 동안을 포함해 한동안 활동이 없으면 멈춰요. 다시 열면 대화는 복원되지만, 실행 중이던 셸 명령, 서브에이전트, `/loop`는 복원되지 않아요.",
        "할 일이 바닥남. 목표를 달성하거나 TODO 목록이 비면 멈추는데, 원하던 바로 그거예요.",
        "아주 긴 세션. Claude Code는 컨텍스트를 자동으로 압축하니 초반 내용은 요약으로만 남아요. 계획은 채팅에만 두지 말고 파일에 적어 두세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Claude Code에 야간 근무 맡기기",
      text: [
        "밤새 돌리기는 시작하기는 쉬워도 이어 가기는 어려워요. 누군가 매일 아침 다음 작업을 넣어 줘야 하니까요. Crewmark는 Claude Code 대화를 근무 시간과 하트비트를 갖춘 AI 직원으로 바꿔 줘서, 보드에서 스스로 계속 일을 가져가게 해요.",
      ],
      steps: [
        {
          title: "근무 시간 정하기",
          text: "근무 시간은 자정을 넘길 수 있어서 22:00~07:00 같은 야간 근무도 돼요. 평일만 또는 매일로 정할 수 있어요. 근무 시간이 아니면 직원은 잠들어 있고 요금제 사용량을 쓰지 않아요.",
        },
        {
          title: "하트비트 고르기",
          text: "근무 시간 동안 crewmark CLI가 15, 30, 60, 120, 240분마다 같은 대화를 깨워 다음 이슈를 가져가게 해요. 대화가 닫혀 있었다면 Crewmark가 auto 모드에서 `claude -p --resume`으로 이어 가요. 컴퓨터는 켜 둬야 해요.",
        },
        {
          title: "아침에 보드 읽기",
          text: "이슈마다 댓글과 활동 기록이 남고, 내가 필요한 일은 직원이 답을 기다리는 메시지로 와요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)과 [AI 직원이란](/ai-employees)을 참고하세요. Codex라면 [Codex 장시간 작업](/blog/codex-long-running-tasks)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "밤새 Claude Code 돌리기" },
  mid: {
    title: "Claude Code가 매일 밤 야간 근무를 서게 하고 싶으신가요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Claude Code를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code를 24시간 돌릴 수 있나요?",
        a: "네, 무언가가 계속 굴려 주기만 하면요. 컴퓨터를 끈 채로 클라우드 세션이나 클라우드 예약 작업을 쓰거나, 깨어 있는 컴퓨터에서 확인 창에 멈추지 않는 권한 모드로 로컬 세션을 돌리면 돼요. 사용량 한도는 그대로 적용되니, 24시간 작업에는 여유 있는 요금제나 크레딧이 필요해요.",
      },
      {
        q: "Claude Code를 밤새 켜 둬도 되나요?",
        a: "네. 분명한 목표나 TODO 파일과 함께 auto 모드로 시작하고, 컴퓨터를 깨워 두고(또는 `claude --cloud`를 쓰고), 아침에 결과를 확인하세요. 내가 필요한 일은 질문으로 남아 있을 거예요.",
      },
      {
        q: "노트북을 닫아도 Claude Code가 계속 도나요?",
        a: "로컬 세션은 아니에요. 컴퓨터가 켜져 있고 claude 프로세스가 돌아가야 하고, Remote Control 세션은 터미널이 닫히면 끝나요. 클라우드 세션은 계속 돌아가고, Claude 앱에서 확인할 수 있어요.",
      },
      {
        q: "Claude Code에 무인 모드가 있나요?",
        a: "그런 이름의 모드는 없어요. 무인 실행은 묻지 않는 권한 모드(auto 모드, 또는 격리된 컨테이너에서 `bypassPermissions`)에 헤드리스 모드 `claude -p`나 클라우드 세션을 조합해서 해요.",
      },
      {
        q: "Claude Code를 밤새 돌리면 사용량 한도에 걸릴까요?",
        a: "걸릴 수 있어요. 모든 Claude 요금제는 채팅과 Claude Code가 5시간 창과 주간 한도를 함께 써요. Ultra는 인증된 계정에 한해 5시간 한도가 없어요. 한 번에 몰아서 하기보다 하트비트나 일정으로 여러 창에 나눠 하세요.",
      },
      {
        q: "Claude Code를 지켜보지 않고 돌려도 안전한가요?",
        a: "내 컴퓨터에서는 `bypassPermissions` 대신 auto 모드를 쓰고, 모든 변경이 리뷰를 거치는 저장소에서 작업하고, 프로덕션 자격 증명은 닿지 않는 곳에 두세요. 클라우드 세션은 기본적으로 네트워크 접근이 제한된 격리 VM에서 돌아가요.",
      },
    ],
  },
  cta: {
    title: "Claude Code에 야간 근무를 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 Claude Code 문서(클라우드 세션, 예약 작업, Remote Control)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
