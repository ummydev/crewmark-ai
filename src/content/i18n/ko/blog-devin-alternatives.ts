import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ko translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (Node 24 이상과 uv 필요)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (SWE-agent의 후속)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Devin 대안 (2026): 오픈 소스, 무료, 더 저렴한 선택지",
    description:
      "2026년 최고의 Devin AI 대안을 각 공급사의 현재 가격과 함께 정리했어요. 지금 설치할 수 있는 오픈 소스 에이전트(OpenHands, OpenCode, mini-swe-agent, Cline, Goose), OpenAI·Anthropic·Google·GitHub의 클라우드 에이전트, 팀용 플랫폼.",
  },
  breadcrumb: "Devin 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "블로그 · AI 소프트웨어 엔지니어",
    title: "2026년 최고의 Devin 대안: 오픈 소스, 무료, 더 저렴한 선택지",
    lead: "Cognition의 Devin은 자율 AI 소프트웨어 엔지니어예요. Slack이나 Teams에서 태그하거나, Linear나 Jira 티켓을 배정하거나, 실패한 CI를 가리키면 자기 가상 머신에서 일하고 풀 리퀘스트를 열어요. 2026년에는 무료 티어와 월 $20부터 시작하는 요금제가 있어요. 대안은 세 부류로 나뉘어요. 직접 돌리는 오픈 소스 에이전트, 모델 회사의 클라우드 에이전트, 팀용 플랫폼. 각각 맞는 사람이 다르니, 공급사 사이트에 나온 가격과 함께 누구에게 맞는지 정리했어요.",
    cta: "시작하기",
    secondary: "오픈 소스 대안",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "빠르게 고르기",
      points: [
        "오픈 소스로 내 서버에서 돌리고 싶다면: OpenDevin으로 시작해 지금은 코딩 에이전트용 셀프 호스팅 컨트롤 센터가 된 OpenHands.",
        "터미널에서 살고 모델을 자유롭게 고르고 싶다면: GitHub 스타 약 22만 6천 개의 MIT 라이선스 OpenCode.",
        "이미 ChatGPT나 Claude에 돈을 내고 있다면: 월 $20부터 요금제에 포함된 OpenAI Codex 클라우드 작업이나 Claude Code 클라우드 세션.",
        "팀이 GitHub에서 일한다면: 이슈에서 배정하고 월 $10인 Copilot Pro부터 포함된 클라우드의 Copilot.",
        "회사 전체에서 티켓 기반 에이전트를 원한다면: Factory의 Droids.",
        "내 Claude Code나 Codex 위에서 상시 업무를 맡은 AI 엔지니어를 원한다면: Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 대안 비교",
      text: [
        "가격은 2026년 11월 10일 각 공급사 가격 페이지 기준, 에이전트가 포함된 가장 낮은 요금제예요. 스타 수는 같은 날 GitHub API 기준 반올림 값이에요.",
      ],
      headers: ["도구", "오픈 소스", "실행 위치", "시작 가격", "잘 맞는 경우"],
      rows: [
        ["[Devin](https://devin.ai)", "아니요", "세션마다 자체 클라우드 VM, 로컬에서는 Devin Desktop과 CLI", "무료 티어, Pro 월 $20", "Slack, Teams, Jira에서 에이전트에게 티켓을 넘기고 싶은 팀"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "예, MIT (스타 ~9.3만)", "내 노트북, Docker, VM, 호스팅 클라우드도 있음", "셀프 호스팅 무료, Teams 월 $500", "내 인프라와 모델 키로 돌리는 Devin식 에이전트"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "예, MIT (스타 ~22.6만)", "터미널, 데스크톱 앱, SDK", "무료 모델 포함, Go 월 $10", "200개 이상의 모델 제공자 중에서 고르고 싶은 터미널 사용자"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "예, MIT (스타 ~9.5천)", "로컬 CLI", "무료(모델 비용만)", "연구, 벤치마크, 재현 가능한 이슈 수정"],
        ["[Cline](https://github.com/cline/cline)", "예, Apache 2.0 (스타 ~7.1만)", "CLI, VS Code, JetBrains, 데스크톱", "무료(모델 비용만)", "에디터 안의 오픈 소스 에이전트"],
        ["[Goose](https://github.com/aaif-goose/goose)", "예, Apache 2.0 (스타 ~5.6만)", "데스크톱 앱, CLI, API", "무료(모델 비용만)", "MCP 확장으로 코드와 다른 업무를 함께 하는 에이전트"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "CLI만 (Apache 2.0)", "OpenAI 클라우드, CLI, IDE, 데스크톱", "ChatGPT Plus 월 $20", "ChatGPT 구독자"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "아니요", "클라우드 세션마다 Anthropic이 관리하는 VM, 로컬도 가능", "Claude Pro 월 $20", "노트북을 닫아도 일이 계속되길 원하는 Claude Code 사용자"],
        ["[Google Jules](https://jules.google)", "아니요", "Google 클라우드 VM", "기본 요금제 하루 15개 작업, Google AI Pro 월 $19.99", "Gemini를 쓰는 개인 개발자"],
        ["[GitHub Copilot in the cloud](https://github.com/features/copilot/plans)", "아니요", "GitHub 클라우드 샌드박스", "Copilot Pro 월 $10", "이미 GitHub를 쓰는 팀"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "아니요", "Cursor 클라우드 VM", "Premium 월 $30", "이미 Cursor에서 일하는 팀"],
        ["[Factory](https://factory.com)", "아니요", "데스크톱, CLI, 웹, 클라우드·로컬 에이전트", "Pro 월 $20", "티켓과 채팅으로 에이전트를 움직이는 엔지니어링 조직"],
        ["[Crewmark](/pricing)", "예, GPL-3.0", "내 컴퓨터, 내 Claude Code나 Codex 안에서", `무료 요금제(프로젝트 ${free.projects}개, AI 직원 ${free.employees}명), Pro 월 $${pro.price} 출시 예정`, "이미 내는 요금제로 일정에 맞춰 일하는 AI 엔지니어를 원하는 작은 팀"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "지금 돌릴 수 있는 오픈 소스 Devin 대안",
      text: [
        "Devin 자체는 오픈 소스가 아니에요. 아래 도구들은 오픈 소스이고, 모두 명령 하나로 설치돼요. 모델 키는 직접 가져오니 소프트웨어는 무료이고 모델 제공자 비용만 내면 돼요. 스크립트를 셸로 파이프하기 전에 내용을 먼저 읽어 보세요.",
      ],
      steps: [
        {
          title: "OpenHands (전 OpenDevin)",
          text: "지금은 Agent Canvas라는 이름이에요. OpenHands 에이전트는 물론 Claude Code, Codex, Gemini, OpenCode까지 내 노트북, Docker, VM에서 돌리는 셀프 호스팅 컨트롤 센터이고, Slack, GitHub, Linear용 자동화도 있어요. 셀프 호스팅은 무료이고, 호스팅 Teams 요금제는 사용자 10명까지 월 $500이에요.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "로컬 모델을 포함해 200개 이상의 모델 제공자와 쓰는 MIT 라이선스 터미널 에이전트이고, 베타 데스크톱 앱도 있어요. 계정 없이 무료 모델이 포함돼 있고, OpenCode Go는 월 $10이며, ChatGPT나 GitHub Copilot 구독으로 로그인할 수도 있어요. 비슷한 에이전트는 [OpenCode 대안](/blog/opencode-alternatives)을 보세요.",
        },
        {
          title: "SWE-agent와 mini-swe-agent",
          text: "GitHub 이슈를 받아 고쳐 보는 Princeton·Stanford의 연구용 에이전트예요. README에는 이제 mini-swe-agent가 이를 대체했다고 나와 있으니 거기서 시작하세요. 무료이고 모델 비용만 내면 돼요.",
        },
        {
          title: "Cline, Goose, Aider, Kilo Code",
          text: "Cline은 Plan·Act 모드를 갖춘 Apache 라이선스 에이전트로 터미널, VS Code, JetBrains에서 써요. 지금은 Linux Foundation 산하 Agentic AI Foundation에 속한 Goose는 MCP 확장으로 코드와 다른 작업을 처리해요. Aider와 Kilo Code도 인기 있는 오픈 소스 코딩 에이전트예요. 초기 오픈 소스 Devin 클론인 Devika는 2025년 9월 이후 업데이트가 없어요.",
        },
      ],
      source: { label: "출처: GitHub의 OpenHands", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "모델 회사의 클라우드 에이전트",
      text: [
        "다른 공급사를 늘리지 않고 Devin처럼 “맡기고 자리를 뜨는” 방식을 원한다면, 이제 모델 회사들이 이미 쓰고 있을 요금제 안에서 그 기능을 제공해요.",
      ],
      points: [
        "OpenAI Codex: chatgpt.com/codex의 클라우드 작업으로, 월 $20인 ChatGPT Plus부터 포함돼요. 클라우드 작업은 사용량을 더 많이 쓰고, API 키로는 CLI와 IDE는 되지만 클라우드 기능은 안 돼요.",
        "Claude Code: claude.ai/code, Claude 앱, `claude --cloud`에서 여는 클라우드 세션으로, 세션마다 Anthropic이 관리하는 격리된 VM에서 돌아가요. Pro(월 $20), Max, Ultra, Team 요금제에서 쓸 수 있고 VM 비용은 따로 없어요.",
        "Google Jules: 저장소를 클라우드 VM에 클론하고 풀 리퀘스트를 열어요. 기본 요금제는 하루 15개 작업, 월 $19.99인 Google AI Pro는 100개예요.",
        "클라우드의 GitHub Copilot: 이슈를 배정하면 Copilot이 풀 리퀘스트를 열어요. 월 $10인 Copilot Pro부터 포함되고, 사용량은 GitHub AI Credits로 청구돼요.",
        "Cursor Cloud Agents: 격리된 VM에서 돌아가고 Cursor, 웹, Slack, Linear에서 시작해요. 월 $30인 Premium 요금제부터예요.",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "2026년 Devin 가격",
      text: [
        "많은 목록에 아직도 $500 팀 요금제와 ACU당 $2.25가 적혀 있어요. 지금 devin.ai를 보면 셀프 서브 요금제는 ACU를 쓰지 않고, 포함된 할당량과 온디맨드 크레딧을 섞어 청구해요. ACU로 청구하는 건 Enterprise뿐이에요.",
      ],
      points: [
        "Free: $0, 가벼운 할당량.",
        "Pro: 월 $20, Devin Cloud 포함, 추가 사용량은 API 가격.",
        "Max: 월 $200.",
        "Teams: 월 $80에 정규 개발자 시트당 월 $40, 사용자 100명까지.",
        "Enterprise: 별도 협의.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "내 에이전트 위에서 상시 업무를 맡은 AI 엔지니어",
      text: [
        "Devin도 클라우드 에이전트도 내가 작업을 하나씩 배정하기를 기다려요. Crewmark는 내 Claude Code나 Codex를 직무, 수치로 된 목표, 근무 시간, 하트비트를 갖춘 AI 소프트웨어 엔지니어로 바꿔 줘요. 근무 시간에는 스스로 깨어나 보드에서 다음 이슈를 가져가고, 풀 리퀘스트를 열고, 결정이 필요하면 메시지를 보내요. 이미 내고 있는 구독으로 내 컴퓨터에서 돌아가요.",
      ],
      steps: [
        {
          title: "소프트웨어 엔지니어 직무로 채용하기",
          text: "업무 설명, 목표, 루틴이 미리 갖춰져 있어요. [AI 소프트웨어 엔지니어](/ai-employees/software-engineer)를 참고하세요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "팀원에게 하듯 이슈를 배정하면 직원이 상태와 댓글을 최신으로 유지해요. [Claude Code 칸반](/blog/claude-code-kanban)을 참고하세요.",
        },
        {
          title: "계속 일하게 두기",
          text: "근무 시간을 정하세요. 밤에도 돼요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)과 [Codex 장시간 작업](/blog/codex-long-running-tasks)을 참고하세요.",
        },
      ],
    },
  ],
  mid: {
    title: "이미 쓰는 Claude Code나 Codex 요금제로 Devin 같은 엔지니어를 두고 싶으신가요?",
    text: "Crewmark 직원은 하트비트에 맞춰 깨어나 보드의 일을 처리하고 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Devin의 가장 좋은 오픈 소스 대안은?",
        a: "OpenDevin으로 시작한 OpenHands가 가장 가까워요. 내 모델 키로 돌리는 셀프 호스팅 에이전트 플랫폼이에요. 터미널 에이전트라면 OpenCode, 연구와 벤치마크라면 mini-swe-agent예요.",
      },
      {
        q: "OpenDevin과 OpenHands는 같은 건가요?",
        a: "네. OpenDevin이 All Hands AI의 OpenHands로 이름을 바꿨어요. MIT 라이선스이고, 지금은 Claude Code, Codex 같은 다른 에이전트도 돌리는 Agent Canvas로 배포돼요.",
      },
      {
        q: "Devin은 무료인가요?",
        a: "가벼운 할당량의 무료 티어가 있어요. 2026년 11월 10일 devin.ai 기준 유료 요금제는 Pro 월 $20, Max $200, Teams 월 $80에 개발자 시트당 $40이에요.",
      },
      {
        q: "Devin은 아직 ACU 단위로 청구하나요?",
        a: "Enterprise만 그래요. 셀프 서브 요금제는 이제 포함 할당량과 온디맨드 크레딧을 함께 쓰므로, 예전의 ACU당 $2.25는 적용되지 않아요.",
      },
      {
        q: "Devin vs Claude Code나 Codex, 무엇을 써야 할까요?",
        a: "이미 Claude나 ChatGPT에 돈을 내고 있다면, 클라우드 세션과 클라우드 작업으로 추가 비용 없이 Devin처럼 맡기고 자리를 뜰 수 있어요. Devin은 팀을 위한 Slack, Teams, Jira, Linear 워크플로를 더해 줘요.",
      },
      {
        q: "가장 저렴한 Devin 대안은?",
        a: "오픈 소스 에이전트는 모델 사용료 말고는 비용이 없어요. 호스팅 옵션 중에서는 월 $10인 GitHub Copilot Pro에 클라우드 에이전트가 포함되고, Google Jules는 기본 요금제로 하루 15개 작업을 할 수 있어요.",
      },
    ],
  },
  cta: {
    title: "Claude Code나 Codex에 작업 하나가 아니라 직무를 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 각 제품의 웹사이트, 가격 페이지, 문서, GitHub 저장소와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Cognition이나 여기 소개한 어떤 회사와도 제휴하거나 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
