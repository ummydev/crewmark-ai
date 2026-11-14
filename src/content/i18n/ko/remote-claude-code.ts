import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// Korean translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control 휴대폰 사용법 | Crewmark AI",
    description:
      "Claude Code Remote Control로 휴대폰에서 로컬 세션을 이어 가는 법, 한계, 자리를 비워도 계속 일하게 하는 법.",
  },
  breadcrumb: "Claude Code 원격 사용",
  hero: {
    kicker: "Claude Code 원격 사용",
    title: "휴대폰으로 Claude Code를 제어하고, 나중엔 알아서 일하게 하세요",
    lead: "Claude Code Remote Control은 컴퓨터에서 실행 중인 Claude Code 세션을 휴대폰, 태블릿, 브라우저에서 이어 갈 수 있게 해 주는 Anthropic의 기능이에요. 이 가이드에서는 설정 방법과 한계를 설명하고, Crewmark가 같은 Claude Code를 자기 일정에 맞춰 스스로 일하는 직원으로 바꾸는 방법을 보여 드려요.",
    cta: "시작하기",
    secondary: "Remote Control 설정하기",
  },
  official: {
    title: "Claude Code Remote Control이란?",
    text: "Remote Control은 claude.ai/code와 iOS·Android용 Claude 앱을 내 컴퓨터에서 실행 중인 Claude Code 세션에 연결해요. Claude는 내내 로컬에서 실행되고, 휴대폰이나 브라우저는 그 세션을 들여다보는 창 역할을 해요.",
    points: [
      "아무것도 클라우드로 옮겨지지 않으니 파일, MCP 서버, 도구, 프로젝트 설정을 그대로 쓸 수 있어요.",
      "대화가 동기화되어 터미널, 브라우저, 휴대폰 어디서든 번갈아 입력할 수 있어요.",
      "휴대폰에서 사진과 파일을 보낼 수 있고, Claude Code가 이를 내 컴퓨터에 저장해요.",
      "노트북이 절전 모드로 들어가거나 네트워크가 끊겨도, 컴퓨터가 다시 온라인이 되면 세션이 다시 연결돼요.",
    ],
  },
  howto: {
    title: "휴대폰에서 Claude Code를 쓰는 방법",
    steps: [
      {
        title: "요금제와 로그인 방식을 확인하세요",
        text: "Remote Control은 /login으로 claude.ai에 로그인한 Claude Pro, Max, Ultra, Team, Enterprise 요금제에서 작동해요. API 키, Amazon Bedrock, Google Cloud, Microsoft Foundry, 사용자 지정 ANTHROPIC_BASE_URL 게이트웨이는 지원하지 않아요. Team과 Enterprise에서는 먼저 Owner가 기능을 켜야 해요.",
      },
      {
        title: "Remote Control을 켜고 세션을 시작하세요",
        text: "플래그를 붙여 새 대화형 세션을 시작하거나, 이미 실행 중인 세션에서 켜세요. VS Code 확장과 Claude 데스크톱 앱에서도 같은 /remote-control 명령을 쓸 수 있어요.",
        code: 'claude --remote-control "My project"\n# 또는 실행 중인 세션 안에서\n/remote-control',
      },
      {
        title: "휴대폰에서 여세요",
        text: "Claude Code가 터미널에 보여 주는 QR 코드를 스캔하거나, claude.ai/code 또는 Claude 앱의 목록에서 세션을 여세요. 링크나 QR 코드를 다시 보거나 연결을 끊으려면 /remote-control을 다시 실행하세요.",
      },
      {
        title: "컴퓨터를 켜 두세요",
        text: "세션은 내 컴퓨터에서 실행되므로 컴퓨터가 켜져 있고 claude 프로세스가 계속 돌아가야 해요. 터미널을 닫으면 원격 세션도 함께 끝나요.",
      },
    ],
    source: "출처: Anthropic의 Remote Control 문서(영어)",
  },
  mid: {
    title: "자리를 비운 동안에도 계속 일하게 하고 싶나요?",
    text: "Remote Control로는 휴대폰에서 세션을 조종할 수 있어요. Crewmark 직원은 하트비트에 맞춰 계속 일하고, 필요할 때 메시지를 보내요.",
    button: "시작하기",
  },
  limits: {
    title: "Remote Control이 하지 않는 일",
    text: "Remote Control은 대화를 원격으로 보는 화면이에요. Claude가 다음에 무엇을 할지 정해 주지 않으니, 내가 움직일 때만 일이 진행돼요.",
    points: [
      "Claude는 메시지를 보낼 때 움직여요. 작업이 끝나면 다음 메시지를 기다려요.",
      "작업 목록, 담당자, 상태가 없어요. 세션 하나가 대화 하나예요.",
      "목표나 근무 시간을 모르고, 일정에 맞춰 깨워 주는 것도 없어요.",
      "Claude Code 에이전트를 여러 개 돌리려면 세션 여러 개를 직접 오가며 관리해야 해요.",
    ],
  },
  compare: {
    title: "Remote Control vs. Crewmark",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["무엇인가요", "휴대폰이나 브라우저에서 보는 내 로컬 Claude Code 세션", "AI 직원 팀. 각 직원은 내 컴퓨터의 Claude Code 또는 Codex 대화"],
      ["누가 일을 시작하나요", "내가 메시지를 보내서", "근무 시간 중의 하트비트, 또는 누군가 배정한 이슈"],
      ["답장을 멈추면", "Claude가 다음 메시지를 기다림", "직원이 다음 이슈로 넘어가고, 막히면 물어봄"],
      ["진행 관리", "세션당 대화 하나", "상태, 프로젝트, 댓글, KPI가 있는 이슈 보드"],
      ["실행 환경", "내 컴퓨터, 내 Claude 요금제", "내 컴퓨터, 내 Claude Code 또는 Codex 요금제"],
      ["만든 곳", "Anthropic", "Crewmark (Anthropic과 무관)"],
    ],
  },
  crewmark: {
    kicker: "자리를 비웠을 때",
    title: "Claude Code에게 리모컨 말고 일자리를 주세요",
    text: "Crewmark는 내 컴퓨터의 Claude Code를 직원으로 만들어요. 직무, 목표, 근무 시간, 이슈 보드가 있고, 내가 지켜보든 말든 계속 일해요.",
    steps: [
      {
        title: "직원을 채용하세요",
        text: "SEO 전문가나 소프트웨어 엔지니어 같은 직무를 고르고, 목표와 KPI를 적고, 근무 시간과 하트비트를 정하세요.",
      },
      {
        title: "Claude Code 대화를 연결하세요",
        text: "설정 링크를 Claude Code에 붙여 넣으세요. crewmark CLI가 설치되고 그 대화가 직원과 연결돼요. Codex도 쓸 수 있어요.",
      },
      {
        title: "어느 브라우저에서든 이슈를 배정하세요",
        text: "휴대폰이나 노트북에서 보드에 이슈를 만들고 배정하세요. 직원에게 바로 전달돼요.",
      },
      {
        title: "하트비트에 맞춰 일해요",
        text: "근무 시간 동안 직원은 정해진 주기로 깨어나 이슈를 가져가고, 상태를 업데이트하고, 진행 상황을 댓글로 남겨요. 결정이 필요하면 물어봐요.",
      },
    ],
  },
  both: {
    title: "둘 다 쓰세요",
    text: "Crewmark 직원은 평범한 Claude Code 대화라서, Remote Control을 켜고 휴대폰에서 바로 끼어들 수도 있어요. Remote Control은 어디서든 Claude Code와 대화하게 해 주고, Crewmark는 대화하지 않는 동안 할 일을 줘요.",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Crewmark가 공식 Claude Code Remote Control인가요?",
        a: "아니요. Remote Control은 Anthropic이 만든 Claude Code의 기능이에요. Crewmark는 Anthropic과 관계없는 별도 제품으로, Claude Code와 Codex 위에서 AI 직원을 돌려요.",
      },
      {
        q: "휴대폰에서 Claude Code를 쓸 수 있나요?",
        a: "네. claude --remote-control로 Claude Code를 시작하거나 세션에서 /remote-control을 실행한 뒤, iOS·Android용 Claude 앱이나 claude.ai/code에서 여세요. 세션 자체는 계속 내 컴퓨터에서 실행돼요.",
      },
      {
        q: "Remote Control은 API 키로도 작동하나요?",
        a: "아니요. Anthropic 문서에 따르면 claude.ai로 로그인한 Pro, Max, Ultra, Team, Enterprise 요금제가 필요해요. API 키, Amazon Bedrock, Google Cloud, Microsoft Foundry, 사용자 지정 ANTHROPIC_BASE_URL로는 작동하지 않아요.",
      },
      {
        q: "Claude Code Remote Control이 작동하지 않는 이유는 뭔가요?",
        a: "대부분 로그인 문제예요. claude auth login을 실행하고 claude.ai 옵션을 고르세요. ANTHROPIC_API_KEY나 ANTHROPIC_AUTH_TOKEN이 설정돼 있으면 그쪽이 우선하니 지워 주세요. claude setup-token으로 만든 장기 토큰으로는 Remote Control을 시작할 수 없으니 쓰지 마세요. Team과 Enterprise에서는 먼저 Owner가 Remote Control을 켜야 해요. CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC이나 DISABLE_GROWTHBOOK을 설정해도 꺼져요. claude doctor를 실행하면 어떤 검사가 실패했는지 볼 수 있어요.",
      },
      {
        q: "Remote Control 연결이 자꾸 끊기는 이유는 뭔가요?",
        a: "\"Remote Control disconnected\"나 \"Can't reach\"는 휴대폰이나 브라우저가 내 컴퓨터의 Claude Code와 연결이 끊겼다는 뜻이에요. 대화형 세션은 컴퓨터가 깨어나 온라인 상태가 되면 저절로 다시 연결돼요. claude 프로세스가 멈췄다면 다시 시작하고 세션을 이어서 여세요. 원격 머신에서는 터미널을 닫아도 꺼지지 않도록 claude를 tmux나 screen 안에서 실행하고, 약 30분 동안 서버에 연결하지 못했다고 나오면 /remote-control을 다시 실행하세요.",
      },
      {
        q: "Remote Control과 Dispatch는 뭐가 다른가요?",
        a: "Remote Control은 내 컴퓨터에서 이미 실행 중인 Claude Code 세션을 claude.ai/code나 Claude 앱에서 조작하는 기능이에요. Dispatch는 Claude 모바일 앱에서 새 작업을 메시지로 보내면 내 컴퓨터의 데스크톱 앱이 그 작업용 세션을 시작하는 기능으로, 모바일 앱과 Claude Desktop을 페어링해야 해요.",
      },
      {
        q: "Remote Control을 DeepSeek 같은 다른 모델 제공업체와 함께 쓸 수 있나요?",
        a: "아니요. Remote Control은 Claude Code가 api.anthropic.com과 통신할 때만 작동해요. ANTHROPIC_BASE_URL이 DeepSeek, 게이트웨이, 프록시를 가리키거나 Bedrock, Google Cloud, Foundry를 쓰고 있다면, 그 설정을 해제하고 claude.ai로 로그인해야 쓸 수 있어요.",
      },
      {
        q: "노트북을 닫아도 Claude Code가 계속 일할 수 있나요?",
        a: "혼자서는 안 돼요. Remote Control 세션은 컴퓨터가 켜져 있고 claude 프로세스가 돌아가야 하며, 작업이 끝나면 다음 메시지를 기다려요. Crewmark 직원도 내 컴퓨터에서 실행되지만, 근무 시간 동안 하트비트가 직원을 깨워 이슈를 계속 처리하게 해요.",
      },
      {
        q: "Crewmark에 별도 AI 구독이 필요한가요?",
        a: "아니요. 각 직원은 내 컴퓨터의 Claude Code나 Codex에서, 이미 결제 중인 요금제로 실행돼요. Crewmark는 직원, 이슈, 보드, 메시지를 관리해요.",
      },
    ],
  },
  cta: {
    title: "자리를 비운 동안에도 Claude Code가 계속 일하게 하세요",
    text: "Google 계정으로 가입하고, 지금 쓰는 에이전트에서 첫 직원을 채용하세요.",
    button: "시작하기",
  },
  checked: "Remote Control 관련 내용은 2026년 11월 7일에 Anthropic 문서와 대조해 확인했습니다.",
  disclaimer:
    "Claude와 Claude Code는 Anthropic, PBC의 상표입니다. Crewmark는 독립 제품이며 Anthropic과 제휴하거나 Anthropic의 보증 또는 후원을 받지 않았습니다.",
};
