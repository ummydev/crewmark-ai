import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# Claude Code에서 공식 플러그인 설치 (user scope 선택)
/plugin install telegram@claude-plugins-official

# BotFather가 준 토큰 저장
/telegram:configure <token>

# 채널을 켜고 Claude Code 다시 시작
claude --channels plugin:telegram@claude-plugins-official

# 봇에 메시지를 보낸 뒤, 답장으로 온 코드로 페어링
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Channels: Telegram, Discord, iMessage 설정",
    description:
      "Claude Code channels의 작동 방식과 공식 Telegram, Discord, iMessage 플러그인 설정법: 명령어, 페어링, 발신자 허용 목록, 요구 사항, 채널을 쓸 수 없는 이유, 그리고 Slack.",
  },
  breadcrumb: "Claude Code channels",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code channels: Telegram, Discord, iMessage로 Claude Code에 메시지 보내기",
    lead: "Channels는 내 컴퓨터에서 이미 돌아가고 있는 Claude Code 세션으로 메시지를 밀어 넣어요. 그래서 휴대폰에서 문자를 보내면 실제 파일을 대상으로 작업이 진행되고, 답은 같은 채팅으로 돌아와요. Telegram, Discord, iMessage에는 공식 플러그인이 있어요. 이 가이드에서는 channels의 작동 방식, 각각의 설정법, 낯선 사람을 막는 법, 가끔 채널이 보이지 않는 이유, 그리고 Remote Control·Claude in Slack과의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "Telegram 설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code channels란",
      text: [
        "채널은 실행 중인 Claude Code 세션으로 이벤트를 밀어 넣는 MCP 서버예요. 양방향도 돼요. Claude가 메시지를 읽고 채팅 브리지처럼 같은 채널로 답해요. 이벤트는 세션이 열려 있을 때만 도착해요.",
      ],
      points: [
        "공식 채널 플러그인: Telegram, Discord, iMessage, 그리고 localhost에서 도는 데모 채팅 fakechat.",
        "모두 claude-plugins-official의 플러그인이고 Bun이 설치돼 있어야 해요.",
        "CI 실패나 오류 알림을 받는 웹훅 수신기처럼 채널을 직접 만들 수도 있어요.",
        "Channels는 리서치 프리뷰예요. `--channels` 플래그는 `claude --help`에 나오지 않고, 문법이 바뀔 수 있어요.",
        "터미널에는 들어온 메시지와 “sent” 같은 확인만 보이고, 답장 내용은 채팅 앱에 나타나요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Telegram 채널 설정하는 법",
      steps: [
        {
          title: "봇 만들기",
          text: "Telegram에서 BotFather를 열고 `/newbot`을 보낸 다음, 봇 이름과 “bot”으로 끝나는 사용자 이름을 정하고 토큰을 복사하세요.",
          code: telegram,
        },
        {
          title: "플러그인 설치하고 설정하기",
          text: "Claude Code에서 `/plugin install telegram@claude-plugins-official`을 실행하고 user scope를 고르세요. 마켓플레이스를 찾을 수 없다고 나오면 `/plugin marketplace add anthropics/claude-plugins-official`로 추가하세요. 그다음 `/telegram:configure <token>`으로 토큰을 저장하거나, Claude Code를 시작하기 전에 `TELEGRAM_BOT_TOKEN`을 설정하세요.",
        },
        {
          title: "채널을 켜고 다시 시작하기",
          text: "Claude Code를 종료하고 `--channels plugin:telegram@claude-plugins-official`로 다시 시작하세요. 채널 플러그인은 공백으로 구분해 여러 개 넘길 수 있어요.",
        },
        {
          title: "페어링하고 잠그기",
          text: "봇에 아무 메시지나 보내면 페어링 코드로 답해요. `/telegram:access pair <code>`로 승인한 다음 `/telegram:access policy allowlist`를 실행하면 내 계정만 세션에 닿을 수 있어요.",
        },
      ],
      source: { label: "출처: Anthropic의 Claude Code 문서, channels", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord와 iMessage",
      points: [
        "Discord: Discord Developer Portal에서 애플리케이션을 만들고, 봇 토큰을 복사하고, Message Content Intent를 켠 다음, `bot` scope로 봇을 초대하세요. 그리고 `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`을 실행하고, `--channels plugin:discord@claude-plugins-official`로 다시 시작한 뒤, 봇에 DM을 보내고 `/discord:access pair <code>`로 페어링하세요.",
        "iMessage: macOS 전용이고 봇이나 토큰이 필요 없어요. 메시지 데이터베이스를 읽으니 터미널에 전체 디스크 접근 권한을 주세요. `imessage@claude-plugins-official`을 설치하고 `--channels plugin:imessage@claude-plugins-official`로 다시 시작한 다음 나 자신에게 문자를 보내세요. 다른 사람은 `/imessage:access allow <전화번호 또는 Apple ID 이메일>`로 추가해요.",
        "Slack: 채널이 아니에요. Claude in Slack은 로컬 세션에 메시지를 보내는 대신 @Claude 멘션으로 클라우드 세션을 시작해요.",
        "WhatsApp과 다른 앱: 공식 채널 플러그인이 없어요. channels 레퍼런스를 보고 직접 만들어야 해요.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "채널을 쓸 수 없거나 작동하지 않나요?",
      points: [
        "계정 유형: channels는 claude.ai 로그인이나 Console API 키가 필요해요. Amazon Bedrock, Google Cloud의 Agent Platform, Microsoft Foundry로는 작동하지 않아요.",
        "조직: Claude Team과 Enterprise에서는 Owner가 Organization settings > Claude Code > Channels에서 켤 때까지 막혀 있어요. 시작할 때 경고가 떠요. 조직이 없는 Pro, Max, Ultra 계정은 이 확인을 건너뛰어요.",
        "승인되지 않은 플러그인: 프리뷰 기간에는 `--channels`가 Anthropic(또는 조직)의 허용 목록에 있는 플러그인만 받아요. 그 밖의 플러그인은 채널 없이 시작되고, 시작 안내에 이유가 나와요.",
        "봇이 답하지 않음: Claude Code가 `--channels`로 실행 중이어야 해요. 봇은 채널이 활성화된 동안에만 답할 수 있어요.",
        "작업 도중 멈춤: 권한 확인 창이 뜨면 누군가 답할 때까지 세션이 멈춰요. 일부 채널은 그 확인 요청을 휴대폰으로 전달할 수 있어요.",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "낯선 사람 막기",
      points: [
        "모든 공식 채널은 발신자 허용 목록을 두고, 그 밖의 사람이 보낸 메시지는 조용히 버려요. Telegram과 Discord는 페어링으로 나를 추가하고, iMessage는 내가 보낸 메시지를 통과시켜요.",
        "`--channels`에 이름을 적은 서버만 메시지를 밀어 넣을 수 있어요. `.mcp.json`에 있는 것만으로는 안 돼요.",
        "채널이 권한 확인 요청을 전달한다면, 허용 목록에 있는 누구든 내 세션의 도구 사용을 승인하거나 거부할 수 있어요. 그만큼 믿을 수 있는 사람만 추가하세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels vs Remote Control vs Claude in Slack",
      headers: ["", "하는 일", "실행 위치", "잘 맞는 경우"],
      rows: [
        ["Channels", "채팅 메시지, 알림, 웹훅을 열린 세션으로 밀어 넣음", "내 컴퓨터", "휴대폰에서 세션에 문자 보내기, CI와 알림에 대응하기"],
        ["[Remote Control](/remote-claude-code)", "claude.ai나 Claude 앱에서 로컬 세션을 조작", "내 컴퓨터", "자리를 비운 동안 진행 중인 작업 방향 잡기"],
        ["Claude in Slack", "@Claude 멘션으로 클라우드 세션 시작", "Anthropic 클라우드", "팀 대화에서 작업 시작하기"],
        ["Notification 훅", "Claude가 나를 필요로 할 때 데스크톱 알림 같은 내 명령을 실행", "내 컴퓨터", "턴이 끝나거나 입력이 필요할 때 알기"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Claude Code가 답만 하지 말고 먼저 메시지를 보내게 하기",
      text: [
        "채널은 켜 둔 세션과 대화하는 방법이에요. Crewmark는 그 세션을 AI 직원으로 바꿔 줘요. 근무 시간 동안 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가고, 막히면 내가 먼저 문자를 보내지 않아도 Crewmark에서 메시지를 보내요.",
      ],
      steps: [
        {
          title: "내 Claude Code로 직원 채용하기",
          text: "Claude Code 대화에서 설정 명령을 실행하면 그 대화가 직원이 돼요. [AI 직원이란](/ai-employees)을 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 주기",
          text: "근무 시간과 깨어나는 간격을 15~240분 사이에서 고르세요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "필요할 때 답하기",
          text: "결정할 일은 다이렉트 메시지로 오고, 한 번 답하면 계속 진행해요. 밤샘 작업은 [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code Telegram 채널 설정하기" },
  mid: {
    title: "막혔을 때 Claude Code가 먼저 찾아오길 원하시나요?",
    text: "Crewmark 직원은 하트비트에 맞춰 깨어나 보드의 일을 처리하고, 결정이 필요하면 메시지를 보내요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code channels란 무엇인가요?",
        a: "이미 실행 중인 Claude Code 세션으로 이벤트를 밀어 넣는 MCP 서버예요. Telegram, Discord, iMessage의 채팅 메시지나 CI·모니터링의 웹훅이 여기에 해당해요. Claude는 같은 채널로 답할 수 있어요. 리서치 프리뷰 기능이에요.",
      },
      {
        q: "공식 Claude Code Telegram 플러그인이 있나요?",
        a: "네, `telegram@claude-plugins-official`이에요. `/plugin install`로 설치하고, `/telegram:configure`로 BotFather 토큰을 저장하고, `--channels plugin:telegram@claude-plugins-official`로 Claude Code를 시작한 다음, 봇이 보낸 코드로 계정을 페어링하세요.",
      },
      {
        q: "Claude Code channels를 Slack이나 WhatsApp에서 쓸 수 있나요?",
        a: "둘 다 공식 채널이 없어요. Slack에서는 Claude in Slack이 대신 @Claude 멘션으로 클라우드 세션을 시작해요. 다른 앱은 channels 레퍼런스를 보고 채널을 직접 만들 수 있어요.",
      },
      {
        q: "Claude Code channels를 왜 쓸 수 없나요?",
        a: "보통 Bedrock, Google Cloud, Foundry로 로그인했거나, Team·Enterprise 조직에서 켜지 않았거나, 플러그인이 승인 목록에 없어서예요. 시작 안내에 이유가 나와요.",
      },
      {
        q: "컴퓨터가 꺼져 있어도 channels가 작동하나요?",
        a: "아니요. 이벤트는 내 컴퓨터에서 세션이 열려 있을 때만 도착해요. 항상 켜 두려면 잠들지 않는 컴퓨터에서 Claude Code를 백그라운드 프로세스나 계속 열려 있는 터미널로 돌리세요.",
      },
      {
        q: "Claude Code가 끝나면 알림을 받으려면?",
        a: "macOS의 `osascript` 같은 데스크톱 알림을 실행하는 `Notification`이나 `Stop` 훅을 추가하세요. [Claude Code hooks](/blog/claude-code-hooks)를 참고하세요. 휴대폰으로 받고 싶다면 끝났을 때 채널로 답하라고 Claude에게 요청하세요.",
      },
    ],
  },
  cta: {
    title: "문자에 답하는 데서 자기 업무 목록을 처리하는 데까지.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 Claude Code 문서(channels)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표이고, Telegram, Discord, iMessage는 각 소유자의 상표입니다.",
};
