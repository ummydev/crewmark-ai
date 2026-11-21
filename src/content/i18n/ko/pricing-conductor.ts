import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/conductor; the English master is src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor 가격: 무료 Mac 앱, 클라우드 요금제, Meta 합류",
    description:
      "Conductor는 무료로 쓸 수 있고 모델 사용량은 각 에이전트 제공자가 청구해요. 2026년 11월 4일부터 가입이 닫혔고 Conductor Cloud는 종료되고 있어요.",
  },
  breadcrumb: "Conductor 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · Conductor",
    title: "Conductor 가격: 무료 Mac 앱, 클라우드 요금제, 그리고 2026년 11월 4일에 바뀐 것",
    lead: "“Conductor는 무료로 사용할 수 있어요.” 모델 사용량을 청구하거나 재판매하지 않아요. Claude Code, Codex, OpenCode, Cursor는 내 구독이나 API 키로 실행돼요. 클라우드 워크스페이스에는 Pro, Team, Enterprise 요금제가 필요했지만, 지금은 가격이 표시되어 있지 않아요. 2026년 11월 4일 Conductor는 Meta 합류를 발표하고 신규 가입과 다운로드를 닫았어요. 내는 비용, 바뀐 것, 그리고 Vibe Kanban, Claude Squad, Cursor Projects, Crewmark와 비교한 가격을 정리했어요.",
    cta: "시작하기",
    secondary: "바뀐 것",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Conductor 요금제와 가격",
      text: [
        "conductor.build와 문서에서 2026년 11월 13일에 확인했어요. /pricing 페이지는 이제 홈페이지로 리디렉션되고, 사이트 어디에도 요금제 가격이 없어요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "Conductor(Mac 앱)",
          "무료로 사용",
          "Claude Code, Codex, OpenCode(번들 포함), Cursor Agent를 각자의 git worktree에서 나란히 실행. diff 리뷰, 체크, 풀 리퀘스트, 머지",
        ],
        [
          "Pro",
          "가격 표시 없음. 2026년 11월 4일부터 Pro 사용자는 Pro 기능을 무료로 계속 사용",
          "클라우드 워크스페이스와 Routines(일정이나 GitHub 이벤트로 실행되는 에이전트)",
        ],
        ["Team(초대 전용)", "가격 표시 없음", "클라우드 워크스페이스와 Routines"],
        ["Enterprise", "가격 표시 없음", "클라우드 워크스페이스"],
        [
          "모델 사용량",
          "각 에이전트 제공자가 청구",
          "기존 구독(예: Claude Pro나 Max, ChatGPT)이나 API 키",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Conductor를 쓸 때 실제로 내는 비용",
      points: [
        "에이전트 제공자. Conductor는 모델 사용량을 청구하거나 재판매하지 않아요. 각 에이전트는 해당 제공자 계정이나 API 키로 청구되고, Cursor Agent는 Cursor API로 실행돼요.",
        "Mac. Conductor는 macOS 전용이고 “아직 Windows나 Linux에서는 쓸 수 없어요.” 에이전트는 샌드박스 없이 내 사용자 계정 권한으로 내 컴퓨터에서 직접 실행돼요.",
        "앱 자체는 무료. 로컬 앱은 무료로 쓸 수 있어요.",
        "클라우드 워크스페이스에는 Pro, Team, Enterprise 요금제가 필요했어요. 2026년 11월 4일부터 무료 사용자는 업그레이드할 수 없고, Pro 사용자는 Pro 기능을 무료로 계속 쓰며, 활성 구독자는 환불을 받아요.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "2026년 11월 4일에 바뀐 것",
      text: [
        "Conductor는 Meta 합류를 발표했어요. 사이트 하단에는 이제 “Conductor from Meta, © 2026 Meta.”라고 적혀 있어요. 쓰고 있거나 쓰려던 사람에게 중요한 날짜는 다음과 같아요.",
      ],
      points: [
        "2026년 11월 4일: 신규 가입과 다운로드가 닫혔어요. 무료 사용자는 업그레이드할 수 없고, Pro 사용자는 Pro 기능을 무료로 계속 쓰며, 활성 구독자는 환불을 받아요.",
        "2026년 11월 13일: Conductor Cloud가 읽기 전용으로 바뀌어요.",
        "2026년 11월 20일: Conductor Cloud가 종료되고, 클라우드 사용자 데이터 삭제가 시작돼요.",
        "2027년 초까지: 로컬 앱은 새 모델과 치명적인 버그 수정을 받다가 단계적으로 종료돼요. 앱이 종료되면 모든 사용자 데이터가 삭제돼요.",
        "옮겨 갈 곳을 찾는다면 [Conductor 대안](/blog/conductor-alternatives)을 보세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor 가격 vs 비슷한 도구",
      text: [
        "각 제품의 사이트에서 2026년 11월 13일에 확인한 가격이에요. 어느 제품이든, 아래 요금제에 포함되지 않는 한 실행하는 코딩 에이전트나 모델 비용을 따로 내요.",
        "나란히 비교: [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). 더 많은 선택지는 [Conductor 대안](/blog/conductor-alternatives)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        [
          "Conductor",
          "무료로 사용, 클라우드 요금제 가격은 미표시",
          "있음. 단, 2026년 11월 4일부터 신규 가입과 다운로드 종료",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "로컬 앱 무료. bloop의 2026년 4월 10일 종료 공지에 따르면 구독은 해지됨",
          "있음: 오픈 소스(Apache-2.0), 커뮤니티 유지보수",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "무료. 표시된 유료 요금제 없음",
          "있음: 오픈 소스(AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 월 $30 또는 연 $300",
          "없음: Free, Plus(월 $8), 기존 Hobby 요금제에는 없음",
        ],
        [
          "[Crewmark](/pricing)",
          "Free, 월 $5인 Pro와 월 $10인 Team 출시 예정",
          "있음: 프로젝트 1개, AI 직원 최대 3명, 사용자 1명",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Conductor는 에이전트를 나란히 실행해요. Crewmark는 에이전트에게 일자리와 보드를 줘요.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. `crewmark` CLI는 macOS, Linux, Windows에서 실행되고, 에이전트는 이미 결제하고 있는 Claude나 ChatGPT 구독을 써요.",
        "Crewmark 가격: Free는 $0이에요(프로젝트 1개, AI 직원 최대 3명, 사용자 1명). 월 $5인 Pro와 월 $10인 Team은 출시 예정이에요. 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어 같은 직무를 고르고, 목표는 숫자로 정해요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "요금제 보기",
          text: "[Crewmark 요금](/pricing)을 확인하고, 에이전트가 Crewmark로 하는 일은 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에서 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "Conductor에서 옮겨 가시나요?",
    text: "Crewmark는 macOS, Linux, Windows에서 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Conductor 가격 FAQ",
    items: [
      {
        q: "Conductor는 무료인가요?",
        a: "네. “Conductor는 무료로 사용할 수 있어요.” 모델 사용량은 각 에이전트 제공자가 청구해요. 다만 2026년 11월 4일부터 신규 가입과 다운로드가 닫혔어요.",
      },
      {
        q: "Conductor는 얼마인가요?",
        a: "Mac 앱은 무료예요. 클라우드 워크스페이스에는 Pro, Team(초대 전용), Enterprise 요금제가 필요했지만, 지금은 이 요금제들의 가격이 표시되어 있지 않고 /pricing 페이지는 홈페이지로 리디렉션돼요.",
      },
      {
        q: "Conductor는 모델 사용량에 수수료를 붙이나요?",
        a: "아니요. Conductor는 모델 사용량을 청구하거나 재판매하지 않아요. Claude Code, Codex, OpenCode, Cursor Agent는 Claude Pro나 Max, ChatGPT 같은 내 구독이나 API 키를 써요.",
      },
      {
        q: "Conductor는 오픈 소스인가요, 아니면 라이선스를 사야 하나요?",
        a: "둘 다 아니에요. Conductor는 오픈 소스가 아니고(소스 저장소나 라이선스가 공개되지 않음), 앱은 무료로 쓸 수 있어서 라이선스 가격도 없어요.",
      },
      {
        q: "내 Conductor Pro 구독은 어떻게 되나요?",
        a: "2026년 11월 4일부터 Pro 사용자는 Pro 기능을 무료로 계속 쓰고, 활성 구독자는 환불을 받아요. Conductor Cloud는 11월 13일에 읽기 전용이 되고 2026년 11월 20일에 종료돼요.",
      },
      {
        q: "Conductor 앱은 언제까지 작동하나요?",
        a: "로컬 앱은 2027년 초까지 새 모델과 치명적인 버그 수정을 받은 뒤 단계적으로 종료되고, 종료되면 모든 사용자 데이터가 삭제돼요. [Conductor 대안](/blog/conductor-alternatives)을 보세요.",
      },
    ],
  },
  cta: {
    title: "Conductor 이후에도 에이전트가 계속 일하게 하세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 conductor.build, 문서, 변경 로그, 발표, 그리고 비교한 각 제품의 가격 페이지와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, Conductor, Meta를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
