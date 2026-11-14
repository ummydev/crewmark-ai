import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code | Crewmark AI",
    description:
      "Hermes Agent와 OpenClaw의 차이, 그리고 둘을 Claude Code와 비교했어요. 용도, 모델과 구독, 메모리와 skill, 보안, OpenClaw에서 Hermes로 옮기는 방법까지 각 프로젝트 문서를 바탕으로 정리했어요.",
  },
  breadcrumb: "Hermes Agent vs OpenClaw",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 에이전트",
    title: "Hermes Agent vs OpenClaw vs Claude Code: 나에게 필요한 건 무엇일까?",
    lead: "OpenClaw와 Hermes Agent는 가장 큰 오픈소스 개인 AI 에이전트 두 가지예요. 둘 다 내 컴퓨터에서 돌아가고 Telegram, Slack, WhatsApp 같은 채팅 앱에서 답해 줘요. 커뮤니티는 OpenClaw가 더 크고(GitHub 스타 약 394,000개), Nous Research의 Hermes Agent(약 261,000개)는 경험을 skill로 바꾸는 학습 루프를 중심으로 만들어졌어요. Claude Code는 종류가 다른 도구로, 저장소 안에서 일하는 코딩 에이전트예요. 이 가이드는 세 가지를 각자의 문서를 바탕으로 비교해서, 알맞은 도구나 알맞은 조합을 고를 수 있게 도와줘요.",
    cta: "시작하기",
    secondary: "비교표 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "짧은 답",
      points: [
        "가장 많은 채널과 연동, 가장 큰 커뮤니티를 원하면 OpenClaw를 고르세요. Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal 외 20개가 넘는 채널을 지원해요.",
        "배우는 비서를 원하면 Hermes Agent를 고르세요. 경험에서 skill을 만들고, 쓰면서 개선하고, 메모리를 스스로 정리해요. cron 스케줄러도 내장돼 있어요.",
        "저장소에서 소프트웨어 작업을 한다면 Claude Code를 고르세요. 코드를 읽고 고치고, 테스트를 돌리고, pull request를 열어요.",
        "Claude Code나 Codex가 지시 없이도 팀 보드에서 계속 일하길 원한다면, 그건 AI 직원이에요. 이 페이지 끝을 보세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent vs OpenClaw vs Claude Code",
      text: ["2026년 11월 7일 기준 각 프로젝트의 README와 문서, GitHub API에 나온 정보예요."],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["만든 곳", "Peter Steinberger와 커뮤니티, OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["무엇인가", "채팅 앱에서 쓰는 개인 AI 비서", "학습 루프로 스스로 나아지는 개인 에이전트", "저장소에서 일하는 코딩 에이전트"],
        ["어디서 대화하나", "20개가 넘는 채팅 채널, Control UI, CLI, 앱", "Telegram, Discord, Slack, WhatsApp, Signal, 이메일, CLI, 데스크톱 앱", "터미널, IDE, 데스크톱 앱, 휴대폰에서 Remote Control"],
        ["모델", "교체 가능: Claude, OpenAI와 Codex, 로컬 모델", "모든 제공업체: Nous Portal, OpenRouter, OpenAI, 사용자 지정 엔드포인트", "Claude 모델"],
        ["Claude 구독", "API 키, 또는 같은 컴퓨터의 Claude Code 로그인 재사용", "추가 사용량을 구매한 Claude Max만 가능, Pro는 불가", "Claude 요금제에 포함"],
        ["메모리와 skill", "로컬 메모리, skill과 플러그인은 ClawHub에서 공유", "에이전트가 직접 정리하는 메모리, skill을 만들고 개선(agentskills.io 표준)", "CLAUDE.md, skill, hook, 서브에이전트"],
        ["예약 실행", "Gateway가 데몬으로 실행", "내장 cron 스케줄러", "`/loop`와 예약 작업"],
        ["격리", "샌드박스를 설정하지 않으면 도구가 호스트에서 실행", "위험한 명령은 승인 필요, Docker나 Modal 선택 가능", "권한 모드와 규칙, 샌드박스"],
        ["라이선스, 스타", "MIT, 약 394k", "MIT, 약 261k", "상용"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent vs OpenClaw: 진짜 차이",
      points: [
        "학습: Hermes의 대표 기능은 학습 루프예요. 복잡한 작업을 마치면 skill을 작성하고 계속 다듬어요. OpenClaw의 강점은 폭이에요. 채널이 더 많고, ClawHub에 플러그인이 더 많고, 데스크톱과 모바일 네이티브 앱이 있어요.",
        "보안 기본값: OpenClaw는 들어오는 메시지를 신뢰하지 않는 것으로 취급하고 모르는 발신자는 페어링을 거치게 하지만, 샌드박스를 설정하지 않으면 메인 세션의 도구는 호스트에서 실행돼요. Hermes는 기본적으로 위험한 명령 전에 물어보고, 도구를 Docker나 Modal에 격리할 수 있어요. OpenClaw는 보안 수정 내역을 공개해요. 2026년 1월 이후 보안 권고가 722건이고, 치명적 등급은 모두 수정됐어요.",
        "구독: OpenClaw는 로컬 Claude Code 로그인을 재사용할 수 있어요. Hermes는 추가 사용량을 구매한 Max에서만 Claude 구독을 받아요. 둘 다 ChatGPT/Codex 로그인을 지원해요.",
        "운영 주체: OpenClaw는 독립 기관인 OpenClaw Foundation이 운영하고 OpenAI는 후원자예요. Hermes Agent는 Nous Research가 개발해요.",
        "전환: Hermes에는 OpenClaw 설정(페르소나, 메모리, skill, 메시징 설정)을 명령 하나로 가져오는 임포터가 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "둘 다 써 보는 법, OpenClaw에서 Hermes로 옮기는 법",
      steps: [
        {
          title: "나란히 설치하기",
          text: "둘 다 명령 하나로 설치되고 각자 gateway를 띄우니, 같은 컴퓨터에서 서로 다른 채팅 계정으로 테스트할 수 있어요.",
          code: install,
        },
        {
          title: "채널 하나만 먼저 연결하기",
          text: "채팅 앱 하나로 시작하고 내 계정만 허용하세요. 둘 다 모르는 발신자는 페어링이나 허용 목록을 거치게 해요.",
        },
        {
          title: "마이그레이션 미리 보기",
          text: "`hermes import-agent openclaw --dry-run`으로 무엇이 옮겨질지 확인하세요. API 키까지 복사하고 싶을 때만 `--migrate-secrets`를 붙이세요.",
        },
        {
          title: "실제 계정을 주기 전에 격리 방식 정하기",
          text: "에이전트가 다른 사람의 메시지를 읽기 전에 OpenClaw의 샌드박스나 Hermes의 Docker 백엔드를 켜세요. 컨테이너를 기본으로 쓰는 선택지는 [OpenClaw 대안](/blog/openclaw-alternatives)을 보세요.",
        },
      ],
      source: { label: "출처: Hermes Agent README", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw vs Claude Code, Hermes vs Claude Code",
      text: [
        "둘은 푸는 문제가 달라요. OpenClaw와 Hermes는 메시지로 부리는 비서예요. 받은편지함, 캘린더, 리서치, 알림, 여러 앱에 걸친 작업을 맡아요. Claude Code는 소프트웨어를 만드는 곳이에요. 코드베이스를 읽고, 파일을 고치고, 명령과 테스트를 실행하고, pull request를 열어요. 둘 다 쓰는 사람도 많아요. 일상은 채팅 비서에게, 저장소 작업은 Claude Code(또는 Codex)에게 맡기는 식이죠. OpenClaw는 같은 컴퓨터의 Claude Code 로그인을 재사용할 수도 있어요. Claude Code를 자기 일정에 맞춰 일하게 하려면 [Claude Code를 주도적으로 만드는 법](/proactive-claude-code)을, 여러 개를 동시에 돌리려면 [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)를 읽어 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "비서가 아니라 일을 맡은 에이전트가 필요할 때",
      text: [
        "OpenClaw와 Hermes는 메시지를 보내야 답해요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode를 AI 직원으로 바꿔요. 직원마다 역할, 목표, 근무 시간이 있고, 하트비트에 맞춰 깨어나 공유 보드에서 다음 이슈를 가져가고, 결정이 필요할 때 메시지를 보내요. 이미 결제한 구독 그대로요.",
      ],
      steps: [
        {
          title: "역할 고르기",
          text: "[SEO 전문가](/ai-employees/seo-specialist), [소프트웨어 엔지니어](/ai-employees/software-engineer), [마케팅 에이전트](/ai-employees/marketing-agent) 등이 있어요.",
        },
        {
          title: "이미 쓰는 에이전트 연결하기",
          text: "직원마다 자기 세션과 체크아웃에서 일해요.",
        },
        {
          title: "보드 채우기",
          text: "이슈를 맡기고, 나에게 필요한 것만 답하세요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Hermes Agent와 OpenClaw를 나란히 써 보기" },
  mid: {
    title: "백로그를 처리해 줄 에이전트가 필요한가요?",
    text: "Crewmark는 Claude Code와 Codex를 AI 직원으로 돌려, 하트비트마다 보드에서 다음 이슈를 가져가게 해요.",
    button: "시작하기",
  },
  faq: {
    title: "Hermes Agent vs OpenClaw FAQ",
    items: [
      {
        q: "Hermes Agent가 OpenClaw보다 나은가요?",
        a: "무엇을 중요하게 보느냐에 달려 있어요. Hermes Agent는 학습(스스로 skill을 만들고 개선)에 집중하고, 기본적으로 위험한 명령 전에 물어봐요. OpenClaw는 채널, 앱, 커뮤니티 플러그인이 더 많아요.",
      },
      {
        q: "OpenClaw에서 Hermes Agent로 옮길 수 있나요?",
        a: "네. Hermes에는 `hermes import-agent openclaw`가 있어서 페르소나, 메모리, skill, 메시징 설정을 가져와요. 먼저 `--dry-run`으로 실행해 보세요.",
      },
      {
        q: "내 Claude 구독으로 쓸 수 있는 건 어느 쪽인가요?",
        a: "OpenClaw는 같은 컴퓨터의 Claude Code 로그인을 재사용하거나 API 키를 쓸 수 있어요. Hermes Agent는 추가 사용량을 구매한 Claude Max에서만 Claude 구독을 받고, Pro 사용자는 API 키가 필요해요.",
      },
      {
        q: "OpenClaw와 Hermes Agent는 무료인가요?",
        a: "둘 다 MIT 라이선스의 오픈소스예요. 쓰는 모델 비용은 내야 하고, Nous Research는 Hermes용으로 선택형 Nous Portal 구독도 제공해요.",
      },
      {
        q: "OpenClaw vs Claude Code: 무엇을 써야 하나요?",
        a: "OpenClaw는 채팅 앱에서 쓰는 개인 비서이고, Claude Code는 저장소에서 일하는 코딩 에이전트예요. 서로 보완하는 관계이고, OpenClaw는 같은 컴퓨터의 Claude Code 로그인을 재사용할 수 있어요.",
      },
      {
        q: "Hermes Agent vs Codex는요?",
        a: "Codex는 저장소에서 일하는 OpenAI의 코딩 에이전트예요. Hermes는 범용 개인 에이전트로, ChatGPT/Codex로 로그인해 OpenAI 모델을 쓸 수 있어요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 대화 말고 일을 맡기세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 OpenClaw와 Hermes Agent의 README와 문서, 그리고 GitHub API와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 OpenClaw Foundation, Nous Research, Anthropic, OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
