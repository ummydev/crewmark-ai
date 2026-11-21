import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects: 기능, 가격, Grok Bot 비교",
    description:
      "Cursor Projects 정리: 큰 코딩 작업을 계획해 클라우드 에이전트에 맡기는 코디네이터 에이전트. 요금제, 설정, 로컬 테스트, 검토, Grok Bot 비교.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Cursor",
    title: "Cursor Projects: 코디네이터 에이전트가 큰 작업을 계획하고 맡기는 방식",
    lead: "Cursor Projects는 기능 하나, 마이그레이션, 앱 전체처럼 큰 작업을 위한 Cursor의 기능이에요. 직접 코드를 쓰지 않는 코디네이터 에이전트와 대화하면, 코디네이터가 작업을 계획하고 Cursor의 Cloud Agents에서 병렬로 돌아가는 에이전트들에게 맡긴 뒤, 끝난 작업을 내가 확인하도록 가져와요. 각 Project에는 그 안의 모든 에이전트가 읽는 공유 파일이 있고, 지시하지 않아도 반복 작업을 할 수 있어요. 이 가이드에서는 작동 방식, 포함된 요금제, 설정하는 법, 실행 위치, 그리고 Grok Bot, Claude Code와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cursor Projects란",
      points: [
        "코디네이터와 워커: 코디네이터 에이전트 하나와 대화하면, 코디네이터가 워커 에이전트를 만들고 하는 일에 따라 이름을 붙여 관리해요. 코디네이터는 직접 코드를 쓰지 않아요. 작업을 계획하고 병렬로 돌아가는 워커들에게 맡겨요.",
        "클라우드에서 실행: 각 Project는 Cursor의 Cloud Agents에 자기 클라우드 컴퓨터가 있어서, 노트북을 닫아도 멈추지 않아요.",
        "공유 파일: Project에는 그 안의 모든 에이전트가 읽는 선호 사항, 메모, 워크플로가 있어요. 공유 `notes.md`가 진행 중, 대기 중, 완료된 일을 기록해요.",
        "작업 목록과 보드: Project마다 하나씩 있고, Multiplayer Projects에서는 모든 멤버가 함께 써요.",
        "반복 작업: 코디네이터에게 Slack 채널을 지켜보거나, 일정에 맞춰 실행하거나, 내 풀 리퀘스트를 따라가라고 하면 지시 없이도 그 신호에 따라 움직여요.",
        "채팅 하나보다 오래가는 일을 위해: 풀 리퀘스트가 여러 개인 기능, 마이그레이션, 내가 자리를 비운 동안 처리할 일.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects 가격: 포함된 요금제",
      text: [
        "Projects는 Cloud Agents에서 돌아가므로 Cloud Agents가 있는 모든 Cursor 요금제에 포함돼요. 2026년 11월 13일 Cursor 가격 도움말 페이지 기준 가격이에요. Cursor 유료 요금제에는 Cursor 모델(Grok과 Composer) 사용량 풀이 포함돼요.",
      ],
      headers: ["요금제", "가격", "Cursor Projects"],
      rows: [
        ["Free", "-", "미포함"],
        ["Plus", "월 $8", "미포함"],
        ["Premium", "월 $30, 또는 연 $300", "포함"],
        ["Super", "월 $100", "포함"],
        ["Ultra", "월 $200", "포함"],
        ["Teams", "시트당 월 $30, $100, $200", "포함. Multiplayer Projects는 팀 계정과 Cursor 3.26.13 이상 필요"],
        ["Enterprise", "-", "포함. Cursor 3.21.9 이상 필요"],
        ["레거시 요금제", "-", "레거시 유료 요금제에 포함. 레거시 Hobby는 미포함"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cursor Projects 설정하는 법",
      steps: [
        {
          title: "요금제와 개인정보 설정 확인하기",
          text: "Cloud Agents가 있는 요금제가 필요해요. Premium 이상, Teams, Enterprise(Cursor 3.21.9 이상), 또는 레거시 유료 요금제요. Privacy Mode (Legacy)에서는 Projects를 쓸 수 없어요.",
        },
        { title: "Agents Window 열기", text: "Projects는 Cursor의 Agents Window에 있고 클라우드에서 실행돼요." },
        {
          title: "큰 작업 설명하기",
          text: "기능, 마이그레이션, 앱 전체처럼 내 GitHub 저장소에서 만들 것을 코디네이터에게 말하세요. 코디네이터의 모델은 직접 골라요.",
        },
        {
          title: "공유 파일 추가하기",
          text: "Project의 선호 사항, 메모, 워크플로를 적어 두세요. 그 안의 모든 에이전트가 읽고, `notes.md`가 진행 중, 대기 중, 완료된 일을 기록해요.",
        },
        {
          title: "결과를 확인하고 반복되게 하기",
          text: "코디네이터가 끝난 작업을 내가 확인하도록 가져와요. Slack 채널을 지켜보거나, 일정에 맞춰 실행하거나, 내 풀 리퀘스트를 따라가라고 하면 지시 없이도 계속 일해요.",
        },
      ],
      source: { label: "출처: Cursor 문서, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cursor Projects에서 주도권을 지키는 방법",
      points: [
        "검토: 코디네이터가 끝난 작업을 내가 확인하도록 가져와요.",
        "가시성: 작업 목록과 보드, 공유 `notes.md`에서 진행 중, 대기 중, 완료된 일을 볼 수 있어요.",
        "분리: 각 Project는 자기 클라우드 컴퓨터에서 실행돼요. 내 컴퓨터에서 테스트해야 할 게 있으면 코디네이터가 로컬 에이전트를 시작해요.",
        "팀: Multiplayer Projects(팀 계정, Cursor 3.26.13 이상)에서는 멤버마다 자기 코디네이터가 있고, 코디네이터끼리 직접 메시지를 주고받으며, 모든 멤버가 보드를 함께 써요.",
        "개인정보: Privacy Mode (Legacy)에서는 Projects를 쓸 수 없어요.",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Cursor Projects를 로컬에서 실행할 수 있나요?",
      text: [
        "처음부터 끝까지는 안 돼요. Cursor 문서에 따르면 Project는 클라우드에 있는 자기 컴퓨터에서 실행되므로 노트북을 닫아도 멈추지 않고, 클라우드 덕분에 노트북에서보다 더 많은 에이전트를 병렬로 돌릴 수 있어요. 내 컴퓨터에서 테스트해야 할 게 있으면 코디네이터가 로컬 에이전트를 시작해 거기서 실행해요.",
        "Cursor의 Self-Hosted Machines는 도구 실행을 내가 관리하는 컴퓨터로 옮겨요. 한 사람의 노트북, devbox, VM에는 My Machines를, Enterprise 요금제에서는 Team Pools를 써요. 그러면 파일 편집, 터미널 명령, 그 밖의 도구 호출은 그 컴퓨터에서 실행되지만, 에이전트 루프, 추론, 계획은 Cursor 클라우드에 남고, 워커는 에이전트에 필요한 내용을 Cursor로 보내요. (Cursor 문서, 2026년 11월 13일 확인)",
        "에이전트 팀 전체를 내 컴퓨터에서 돌리고 싶다면, 다음 도구들이 그렇게 작동해요.",
      ],
      points: [
        "[Claude Code agent teams](/blog/claude-code-agent-teams): 기본적으로 꺼져 있는 Claude Code의 실험적 기능으로, 리드 세션이 팀원을 만들고 팀원들은 작업 목록을 공유하며 서로 메시지를 주고받아요. 모두 내 Claude Code 세션 안에서 돌아가요.",
        "[Claude Squad](/compare/claude-squad-vs-conductor): 여러 코딩 에이전트를 동시에, 각자의 tmux 세션과 git worktree에서 실행하는 오픈소스(AGPL-3.0) 터미널 앱이에요.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor): 브라우저에서 로컬로, 또는 데스크톱 앱으로 실행되는 코딩 에이전트용 오픈소스(Apache-2.0) 칸반 보드예요. 만든 회사가 2026년 4월에 문을 닫은 뒤로는 커뮤니티가 유지보수하고 있어요.",
        "[Crewmark](/ai-employees): 오픈소스(GPL-3.0)예요. 각 AI 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로 직무와 목표를 갖고, 하트비트가 직원을 깨워 공유 보드에서 다음 이슈를 가져가게 해요. 코드 작업에만 한정되지 않아서 [SEO 전문가](/ai-employees/seo-specialist) 같은 직무도 같은 방식으로 돌아가고, 웹 앱은 셀프 호스팅할 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot, Claude Code",
      text: [
        "각 업체의 공식 문서와 가격 페이지에서 2026년 11월 13일에 확인한 내용이에요. 더 많은 AI 동료는 [AI 동료 도구 비교](/blog/ai-coworker)에서 비교했어요. [Grok Bot 가이드](/personal-agent/grok-bot)와 [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)도 참고하세요.",
        "나란히 비교: [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). 가이드: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["제조사", "Cursor", "xAI", "Anthropic"],
        ["용도", "큰 코딩 작업: 기능, 마이그레이션, 앱 전체", "내 앱, Slack, Teams에서 일하는 AI 팀원", "코딩: 코드베이스를 읽고, 파일을 편집하고, 명령을 실행"],
        ["여러 에이전트", "코디네이터가 계획하고 워커 에이전트들에게 병렬로 맡김", "Bot끼리 메시지를 주고받고 그룹 채팅에서 조율", "세션 안의 서브에이전트. 실험적 기능인 agent teams"],
        ["실행 위치", "Cursor의 Cloud Agents, Project마다 클라우드 컴퓨터 한 대. 테스트용 로컬 에이전트", "클라우드: Bot마다 자기 컴퓨터", "내 컴퓨터의 터미널, IDE, 데스크톱 앱. 웹에서는 클라우드 세션"],
        ["작업 보드", "작업 목록과 보드, 공유 `notes.md`", "언급 없음. 일은 채팅, Slack 스레드, 회의에서 넘김", "이슈 보드 없음. agent teams는 작업 목록을 공유"],
        ["반복 작업", "Slack 채널 지켜보기, 일정에 따른 실행, 내 풀 리퀘스트 따라가기", "일정에 따라 실행되는 루틴", "클라우드와 데스크톱 예약 작업, `/loop`"],
        ["가격", "Cursor Premium 월 $30부터", "Premium $30, Super $100, Ultra $200(월)", "Claude 유료 요금제, Pro 월 $20부터"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "큰 작업 하나는 Projects로, 고정된 역할은 Crewmark로",
      text: [
        "Cursor Projects는 큰 작업 하나를 두고 에이전트들을 조율해요. Crewmark는 내 Claude Code나 Codex 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 각 직원이 공유 보드에서 이슈를 가져가니, 저장소에서 하는 엔지니어링, SEO, 마케팅 업무가 꾸준히 처리돼요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 [AI 직원 직무](/ai-employees)에서 시작하세요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "할 수 있는 일 보기",
          text: "설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cursor Projects 설정하기" },
  mid: {
    title: "고정된 일을 맡는 에이전트가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Cursor Projects 자주 묻는 질문",
    items: [
      {
        q: "Cursor Projects란 무엇인가요?",
        a: "기능, 마이그레이션, 앱 전체처럼 큰 작업을 위한 Cursor의 기능이에요. 코디네이터 에이전트가 작업을 계획하고, Cursor의 Cloud Agents에서 병렬로 돌아가는 에이전트들에게 맡긴 뒤, 끝난 작업을 내가 확인하도록 가져와요.",
      },
      {
        q: "어떤 Cursor 요금제에 Projects가 포함되나요?",
        a: "Cloud Agents가 있는 모든 요금제예요. Premium(월 $30, 또는 연 $300) 이상, Super($100), Ultra($200), Teams(시트당 월 $30, $100, $200), Enterprise, 레거시 유료 요금제요. Free, Plus(월 $8), 레거시 Hobby에는 포함되지 않아요.",
      },
      {
        q: "Cursor Projects는 로컬에서 실행되나요?",
        a: "아니요. Cursor의 Cloud Agents에서 Project마다 자기 클라우드 컴퓨터로 실행되므로, 노트북을 닫아도 멈추지 않아요. 내 컴퓨터에서 테스트해야 할 게 있으면 코디네이터가 로컬 에이전트를 시작해요. Privacy Mode (Legacy)에서는 Projects를 쓸 수 없어요.",
      },
      {
        q: "Cursor Projects가 한 일은 어떻게 검토하나요?",
        a: "코디네이터가 끝난 작업을 내가 확인하도록 가져와요. Project의 작업 목록과 보드, 공유 `notes.md`에서 진행 중, 대기 중, 완료된 일을 볼 수 있어요.",
      },
      {
        q: "팀이 Cursor Project 하나를 함께 쓸 수 있나요?",
        a: "네, 팀 계정과 Cursor 3.26.13 이상에서 Multiplayer Projects로요. 멤버마다 코디네이터가 있고, 코디네이터끼리 직접 메시지를 주고받으며, 모든 멤버가 작업 목록과 보드를 함께 써요.",
      },
      {
        q: "Cursor Projects vs Grok Bot: 무엇이 다른가요?",
        a: "Cursor Projects는 Cursor 안의 코딩 작업 공간으로, 코디네이터가 큰 작업을 Cloud Agents의 워커 에이전트들에게 맡겨요. Grok Bot은 xAI의 호스팅 AI 팀원으로, Bot마다 자기 클라우드 컴퓨터를 갖고 내 앱에 로그인하며 Slack과 Microsoft Teams에서 일해요. [Grok Bot 가이드](/personal-agent/grok-bot)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "큰 작업은 Projects로 조율하세요. 에이전트에게 고정된 역할도 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 Cursor의 Projects 문서, 도움말 센터, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Cursor, xAI, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
