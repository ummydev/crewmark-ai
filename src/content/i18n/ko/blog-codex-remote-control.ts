import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ChatGPT 데스크톱 앱을 실행하는 컴퓨터의 ~/.ssh/config
Host devbox
  HostName devbox.example.com
  User me

# 연결을 확인한 뒤 원격 호스트에서 Codex에 로그인
ssh devbox
codex   # 원격 사용자 로그인 셸의 PATH에 있어야 함`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex 원격 제어(ChatGPT): 휴대폰에서 쓰기",
    description:
      "ChatGPT 앱으로 Mac이나 Windows PC의 Codex 제어하기: QR 코드 설정, SSH 호스트, 24시간 연결 유지, 원격 제어가 작동하지 않을 때 해결법.",
  },
  breadcrumb: "Codex 원격 제어",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Codex 원격 제어: 휴대폰에서 내 컴퓨터의 Codex 쓰기",
    lead: "원격 연결(remote connections)을 쓰면 휴대폰의 ChatGPT 앱에서 Mac이나 Windows PC에서 돌아가는 Codex 채팅으로 일할 수 있어요. 저장소, 파일, 자격 증명, 도구는 컴퓨터에 그대로 있고, 휴대폰은 프롬프트와 승인을 보내고 결과를 보여 줘요. 이 가이드에서는 설정법, 휴대폰에서 할 수 있는 일, 컴퓨터에 필요한 것, 작동하지 않을 때 해결법, 그리고 클라우드 작업이나 스스로 일하는 AI 직원과의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Codex 원격 제어란",
      text: [
        "OpenAI는 이 기능을 remote connections라고 불러요. ChatGPT 데스크톱 앱을 실행하는 컴퓨터가 호스트가 되고, 휴대폰이나 다른 데스크톱이 그 컴퓨터를 제어해요. 세션은 호스트의 프로젝트, 채팅, 파일, 자격 증명, 권한, 플러그인, 로컬 도구를 쓰기 때문에, Codex는 내가 그 앞에 앉아 있을 때와 똑같이 일해요.",
      ],
      points: [
        "호스트: macOS와 Windows의 ChatGPT 데스크톱 앱. OpenAI 문서에는 Linux가 호스트로 나와 있지 않아요.",
        "휴대폰: 최신 버전의 iOS·Android ChatGPT 앱. 앱에서 Codex를 여세요(이전 버전에서는 Remote라고 불러요).",
        "연결은 보안 릴레이를 거치므로 컴퓨터를 인터넷에 노출할 필요가 없어요.",
        "설정은 데스크톱 앱에서 해요. OpenAI에 따르면 Codex CLI나 IDE 확장에서는 휴대폰 접근을 설정할 수 없어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Codex 원격 제어 설정하는 법",
      steps: [
        {
          title: "데스크톱 앱에서 켜기",
          text: "컴퓨터에서 ChatGPT 데스크톱 앱을 열고 Settings > Connections > Control this Mac or PC로 가세요. Set up이나 Add를 선택하고, 원격 접근을 승인하고, 필요한 인증을 마치세요. 앱에 QR 코드가 나타나요. 같은 곳에서 컴퓨터를 잠자기 상태로 두지 않게 설정할 수도 있어요.",
        },
        {
          title: "휴대폰 페어링하기",
          text: "휴대폰으로 QR 코드를 스캔하면 ChatGPT가 열려요. 같은 계정과 워크스페이스인지 확인하고, MFA, SSO, 패스키 단계를 마치세요. 그러면 Codex 아래에 컴퓨터가 나타나요. QR 코드 하나는 휴대폰 하나와 컴퓨터 하나를 페어링하니, 원하는 조합마다 페어링하세요.",
        },
        {
          title: "휴대폰에서 일하기",
          text: "컴퓨터의 프로젝트에서 새 채팅을 시작하거나 기존 채팅을 여세요. 후속 메시지를 보내고, Codex의 질문에 답하고, 명령을 승인하고, diff, 테스트 결과, 터미널 출력, 스크린샷을 검토할 수 있어요. 작업이 끝나거나 내가 필요할 때 알림이 와요.",
        },
        {
          title: "선택: SSH로 원격 머신 제어하기",
          text: "데스크톱 앱은 SSH 호스트의 프로젝트도 열 수 있어요. ~/.ssh/config에 Host 항목을 추가하고, `ssh <alias>`가 되는지 확인하고, 그 호스트에 Codex를 설치해 로그인한 다음, Settings > Connections에서 호스트를 추가하고 프로젝트 폴더를 고르세요.",
          code: ssh,
        },
      ],
      source: { label: "출처: OpenAI 문서, remote connections", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "컴퓨터에 필요한 것",
      points: [
        "깨어 있고, 온라인이고, 같은 계정과 워크스페이스에 로그인돼 있고, ChatGPT 데스크톱 앱이 실행 중이어야 해요. 잠자기에 들어가면 접근이 끊겨요.",
        "Mac 노트북은 덮개를 열고 전원을 연결하면 계속 연결돼요. 덮개를 닫으려면 외부 디스플레이가 필요해요.",
        "Windows에서 Codex가 Computer Use를 쓴다면 포그라운드에서 돌아가니 세션을 잠그지 마세요.",
        "내 네트워크 밖에서는 컴퓨터를 인터넷에 노출하지 말고 VPN이나 메시 네트워킹 도구를 쓰세요.",
        "워크스페이스 관리자가 Remote Control 접근을 켜야 할 수도 있어요.",
        "채팅을 Codex 클라우드 환경으로 넘길 수는 없어요. 그럴 때는 클라우드 작업을 새로 시작하세요.",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Windows와 Linux에서 원격 제어하기",
      text: [
        "위 단계는 Mac과 Windows PC에서 똑같아요. 둘 다 호스트가 될 수 있거든요. 달라지는 건 Linux예요.",
      ],
      points: [
        "Windows: ChatGPT 데스크톱 앱을 설치하고 위와 같이 Settings > Connections > Control this Mac or PC를 켜세요. Codex가 Computer Use를 쓴다면 활성 데스크톱에서 작동해요. 포인터를 움직이고, 입력하고, 포그라운드를 차지하며, 백그라운드에서는 돌아가지 못해요. 작업하는 동안 Windows 세션을 잠그지 말고 온라인으로 두고, PC 화면을 Codex에 맡긴 동안에는 휴대폰으로 작업을 시작하고 확인하세요. OpenAI 문서는 데스크톱 앱을 Windows 가상 머신에서 실행해 Computer Use가 내 데스크톱 대신 VM을 차지하게 하는 방법도 제안해요. 자세한 내용은 [Windows에서 Codex 쓰기](/blog/codex-windows)에 있어요.",
        "잠금 상태 사용(locked use)은 휴대폰에서 시작한 Computer Use 작업이 컴퓨터가 잠긴 뒤에도 계속되게 하는 기능으로, macOS 전용이에요.",
        "Linux: OpenAI는 호스트로 macOS와 Windows만 꼽기 때문에, 휴대폰으로 Linux 컴퓨터를 제어하는 방법은 문서에 나와 있지 않아요. Linux용 ChatGPT 데스크톱 앱이 이제 프리뷰로 나와 있는데도요. 되는 방법은 Linux 머신을 SSH 호스트로 쓰는 거예요. Mac이나 Windows PC의 데스크톱 앱이 그 머신의 프로젝트를 열고, 휴대폰은 그 Mac이나 PC를 제어해요. 자세한 내용은 [Linux에서 Codex 쓰기](/blog/codex-linux)와 [VPS에서 Codex 돌리기](/blog/codex-vps)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex 원격 제어가 작동하지 않나요?",
      points: [
        "휴대폰에 컴퓨터가 안 보임: 데스크톱 앱이 실행 중인지, “Allow other devices to connect”가 켜져 있는지, 두 앱이 같은 계정과 워크스페이스인지, 둘 다 최신 버전인지 확인하세요. 2026년 6월 8일 이후 쓰지 않은 페어링은 다시 해야 해요.",
        "다시 로그인했더니 Remote Control이 꺼짐: 로그아웃하면 페어링은 남지만 Remote Control은 꺼져요. 다시 켜세요.",
        "Add를 누른 뒤 오류: 컴퓨터에서 데스크톱 앱을 다시 시작하고 다시 시도하세요.",
        "승인 요청이 오지 않음: 앱에서 Codex를 열고 계정과 워크스페이스를 확인한 뒤 QR 코드를 다시 스캔하고, 관리자에게 Remote Control 접근을 확인해 달라고 하세요.",
        "계속 연결이 끊김: 컴퓨터가 잠자기에 들어갔거나, 네트워크가 끊겼거나, 앱이 닫혔어요. 깨어 있고 연결된 상태로 두세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "원격 제어, 클라우드 작업, AI 직원 중 무엇을 쓸까?",
      text: [
        "원격 제어는 내 컴퓨터의 Codex를 들여다보는 창이에요. 다음에 할 일을 내가 말해 주길 기다려요. 나머지 둘은 내가 없어도 계속 일해요.",
      ],
      headers: ["", "누가 일을 시작하나", "실행 위치", "컴퓨터 켜 둬야 하나?", "잘 맞는 경우"],
      rows: [
        ["원격 제어", "내가, 휴대폰에서", "내 Mac이나 Windows PC", "예, 깨어 있고 온라인", "자리를 비운 동안 로컬 작업 방향 잡기"],
        ["Codex Cloud 작업", "내가, 한 번", "OpenAI 클라우드", "아니요", "저장소만 있으면 되는 작업 넘기기"],
        ["Crewmark AI 직원", "근무 시간 동안 하트비트가", "내 컴퓨터, 내 Codex 안에서", "예", "상시 업무: 근무 때마다 보드에서 다음 이슈"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "휴대폰으로는 확인만, 일은 스스로",
      text: [
        "원격 제어를 쓰면 다음 단계는 여전히 매번 내가 정해요. Crewmark는 내 Codex를 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 일정에 맞춰 깨어나 보드에서 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요. 그러면 원격 제어는 휴대폰으로 상황을 들여다보는 수단이 돼요.",
      ],
      steps: [
        {
          title: "내 Codex로 직원 채용하기",
          text: "Codex 채팅에서 설정 명령을 실행하면 그 채팅이 직원이 되고, 깨어날 때마다 기억을 이어 가요. [AI 직원이란](/ai-employees)을 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 주기",
          text: "근무 시간 동안 crewmark CLI가 15~240분마다 같은 Codex 채팅에 메시지를 넣어 다음 이슈를 가져가게 해요. [Codex 장시간 작업](/blog/codex-long-running-tasks)을 참고하세요.",
        },
        {
          title: "원할 때 휴대폰으로 들여다보기",
          text: "ChatGPT 앱의 Codex에서 직원의 채팅을 열어 지켜보거나 방향을 잡고, 아니면 메시지에 답하기만 하세요. Claude Code 버전은 [Claude Code Remote Control](/remote-claude-code)을 참고하세요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "Crewmark와 함께",
      title: "Crewmark가 더해 주는 것",
      text: [
        "원격 제어를 쓰면 어디서든 Codex에 닿을 수 있지만, Codex는 여전히 내가 부탁할 때만 일해요. Crewmark는 내 컴퓨터의 Codex를 자기 업무가 있는 AI 직원으로 만들고, 휴대폰으로 그 직원을 지켜볼 수 있는 보드를 crewmark.ai에 마련해 줘요.",
      ],
      steps: [
        {
          title: "직무와 숫자 목표",
          text: "각 직원은 내 컴퓨터의 Codex 채팅이고, 소프트웨어 엔지니어나 SEO 전문가 같은 직무와 KPI, 프로젝트를 가져요. 직원은 `crewmark me`로 이를 다시 읽기 때문에, 깨어날 때마다 빈 프롬프트가 아니라 자기 업무에서 시작해요. [AI 직원 직무](/ai-employees)를 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트",
          text: "근무 시간을 평일만 또는 매일로, 내 시간대에 맞춰 정하세요. 자정을 넘겨도 돼요. 근무 시간 동안 `crewmark` CLI가 15분~24시간마다 같은 Codex 채팅을 깨우기 때문에, 하던 일을 이어서 해요.",
        },
        {
          title: "이슈를 계속 처리해요",
          text: "깨어날 때마다 보드에서 자기에게 배정된 이슈를 가져와 작업하고 상태를 최신으로 유지해요. 리뷰, 권한, 정보가 필요하면 이슈를 Needs action으로 바꾸고 거기서 물어봐요.",
        },
        {
          title: "휴대폰에서 대화하기",
          text: "휴대폰 브라우저로 crewmark.ai를 열고 직원의 Work 로그에 메시지를 쓰세요. 메시지는 내 컴퓨터에 있는 그 직원의 Codex 채팅으로 전달되고, 직원은 거기서 답해요.",
        },
        {
          title: "보드 하나로 일하는 팀",
          text: "직무가 다른 직원을 더 채용하세요. 직원들은 보드 하나를 함께 쓰며 서로 이슈를 배정하고, 댓글을 달고, @멘션하며, 그때마다 해당 직원이 깨어나요. Codex에 내장된 예약 기능과 하트비트가 어떻게 다른지는 [Codex를 능동적으로 만드는 방법](/proactive-codex)을 참고하세요.",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "ChatGPT 앱의 원격 제어 vs Crewmark",
      text: [
        "ChatGPT 앱만으로도 휴대폰에서 많은 걸 할 수 있어요. 컴퓨터의 프로젝트에서 새 채팅을 시작하고, 기존 채팅을 이어 가고, 질문에 답하고, 명령을 승인하고, diff와 테스트 결과를 검토하고, 작업이 끝나거나 내가 필요할 때 알림을 받을 수 있어요. Crewmark는 내가 시작하지 않아도 계속돼야 하는 일을 위한 거예요.",
      ],
      headers: ["", "ChatGPT 앱 원격 제어", "Crewmark"],
      rows: [
        ["무엇인가요", "휴대폰의 ChatGPT 앱으로 Mac이나 Windows PC의 Codex 채팅을 제어", "AI 직원 팀. 각 직원은 내 컴퓨터의 Codex 또는 Claude Code 채팅이고, crewmark.ai에 보드가 있음"],
        ["누가 일을 시작하나요", "내가: 휴대폰에서 채팅을 시작하거나 후속 메시지를 보내서", "근무 시간 중의 하트비트, 또는 누군가 배정한 이슈"],
        ["휴대폰에서", "채팅 시작·이어 가기, 작업 승인, diff·테스트 결과·스크린샷 검토, 알림 받기", "직원의 Work 로그에 메시지 쓰기, 이슈 만들고 배정하기, 조치가 필요한 이슈에 답하기"],
        ["답장을 멈추면", "Codex가 작업을 끝내고 알림을 보낸 뒤 다음 프롬프트를 기다림", "직원이 다음 이슈로 넘어가고, 막히면 그 이슈에서 물어봄"],
        ["진행 관리", "호스트 프로젝트 안의 채팅", "상태, 우선순위, 댓글, KPI가 있는 이슈 보드"],
        ["에이전트 팀", "호스트와 채팅을 직접 오가며 관리", "직무가 다른 여러 직원이 한 보드에서 서로 이슈를 배정하고 @멘션"],
        ["목표와 근무 시간", "채팅 밖에는 없음", "직원마다 숫자 목표와 근무 시간"],
        ["실행 환경", "내 Mac이나 Windows PC, 내 ChatGPT 요금제", "내 컴퓨터, 내 Codex 또는 Claude Code 안에서, 이미 내고 있는 요금제로"],
        ["만든 곳", "OpenAI", "Crewmark (OpenAI와 무관)"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "어디서든 24시간 Codex에 연결하기",
      text: [
        "원격 제어는 깨어 있고, 온라인이고, 로그인돼 있고, ChatGPT 데스크톱 앱이 실행 중인 호스트에만 닿아요. 잠자기에 들어가거나, 네트워크가 끊기거나, 앱이 닫히면 다시 돌아올 때까지 휴대폰에서 연결할 수 없고, 직접 Sleep을 선택해도 접근이 끊겨요. 오래 걸리는 작업에는 프로젝트, 자격 증명, 도구를 설치해 둔 전용 상시 가동 Mac이나 Windows PC를 쓰라고 OpenAI는 제안해요. 그런 컴퓨터를 마련하는 구성이 두 가지 있고, 세 번째 선택지로 Codex cloud가 있어요.",
      ],
      points: [
        "집에 둔 Mac mini를 호스트로. 잠들지 않게 하고, 원격 제어를 켠 ChatGPT 데스크톱 앱을 실행하고, 휴대폰과 페어링하세요. Mac이라서 Computer Use와 Chrome 확장을 통한 브라우저 작업도 돌릴 수 있고, 잠금 상태 사용(locked use)을 켜면 Computer Use 작업이 잠긴 뒤에도 계속돼요. [Mac mini에 Codex 설정하는 법](/blog/codex-mac-mini)을 참고하세요.",
        "Linux 서버를 SSH 호스트로. 서버에 Codex CLI를 설치해 로그인한 다음, 데스크톱 앱의 Settings > Connections에서 추가하세요. 그 서버 프로젝트의 채팅은 서버에서 명령을 실행하고 파일을 바꿔요. 휴대폰은 여전히 서버가 아니라 데스크톱 앱을 실행하는 Mac이나 Windows PC에 연결되므로, 그 컴퓨터도 켜져 있어야 해요. 집에 둔 Mac mini가 그 호스트가 될 수 있어요. [VPS에서 Codex 돌리는 법](/blog/codex-vps)을 참고하세요.",
        "Codex cloud. ChatGPT 앱에서 Codex를 열고 Cloud와 환경을 고르세요. 작업은 OpenAI 클라우드에서 실행되어 컴퓨터가 잠들어도 계속되지만, 클라우드 환경에 있는 것만 볼 수 있어요. 로컬 파일, 실행 중인 프로세스, 브라우저 로그인, VPN 접근은 거기에 없어요. 내 컴퓨터의 채팅을 넘길 수도 없어요.",
        "Crewmark 직원도 내 컴퓨터에서 실행되니 같은 규칙이 적용돼요. 늘 켜져 있는 Mac mini나 서버라면 근무 시간을 매일, 자정을 넘겨서까지 잡을 수 있어요.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex 원격 제어 설정하기" },
  mid: {
    title: "내가 조종하지 않을 때도 Codex가 계속 일하길 원하시나요?",
    text: "Crewmark는 근무 시간 동안 하트비트에 맞춰 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "ChatGPT 원격 제어란 무엇인가요?",
        a: "많은 사람이 OpenAI의 원격 연결을 이렇게 불러요. 휴대폰의 ChatGPT 앱이나 다른 Mac 또는 Windows 컴퓨터에서, 호스트 컴퓨터의 ChatGPT 데스크톱 앱에서 돌아가는 Codex 채팅을 제어해요. 일은 호스트가 하고, 휴대폰은 프롬프트와 승인을 보내요.",
      },
      {
        q: "ChatGPT에서 원격 제어를 어떻게 켜나요?",
        a: "호스트 컴퓨터에서 ChatGPT 데스크톱 앱을 열고 Settings > Connections > Control this Mac or PC로 가서 Set up이나 Add를 선택한 다음, 휴대폰의 ChatGPT 앱으로 QR 코드를 스캔하세요. 호스트는 계속 깨어 있는 Mac이나 Windows PC여야 해요.",
      },
      {
        q: "휴대폰에서 Codex를 제어할 수 있나요?",
        a: "네. ChatGPT 데스크톱 앱에서 Settings > Connections > Control this Mac or PC를 켜고 휴대폰으로 QR 코드를 스캔하면, iOS나 Android ChatGPT 앱의 Codex 아래에 컴퓨터가 나타나요.",
      },
      {
        q: "Codex CLI를 원격 제어할 수 있나요?",
        a: "휴대폰 접근은 ChatGPT 데스크톱 앱에서만 설정해요. OpenAI에 따르면 CLI나 IDE 확장에서는 설정할 수 없어요. CLI에는 실험적인 `codex remote-control` 명령(start, stop, pair)이 있고, OpenAI는 이를 관리형 원격 제어 클라이언트와 SSH 워크플로용이라고 설명하지만, CLI만 있는 머신과 휴대폰을 페어링하는 방법은 문서에 나와 있지 않아요. 터미널로 작업하는 머신에 접근하려면 그 머신에 Codex를 설치해 로그인한 뒤 데스크톱 앱에서 SSH 호스트로 추가하세요.",
      },
      {
        q: "Codex 원격 제어가 Linux에서 되나요?",
        a: "문서에는 macOS와 Windows의 데스크톱 앱만 호스트로 나오고 Linux는 언급이 없어요. 그래도 Linux 머신은 Mac이나 Windows 데스크톱 앱에서 SSH 호스트로 접근할 수 있어요.",
      },
      {
        q: "컴퓨터를 계속 켜 둬야 하나요?",
        a: "네. 컴퓨터가 깨어 있고, 온라인이고, 로그인돼 있고, 데스크톱 앱이 실행 중이어야 해요. 잠자기에 들어가면 접근이 끊겨요. 컴퓨터를 꺼도 계속되는 작업은 Codex Cloud 작업을 쓰세요.",
      },
      {
        q: "Codex 원격 제어는 안전한가요?",
        a: "보안 릴레이를 거치므로 컴퓨터가 공용 인터넷에 노출되지 않고, Codex의 샌드박스, 보안 통제, 승인도 그대로 적용돼요. 내 소유이고 믿을 수 있는 기기만 페어링하세요.",
      },
      {
        q: "Codex 원격 제어가 왜 작동하지 않나요?",
        a: "보통 데스크톱 앱이 실행 중이 아니거나, “Allow other devices to connect”가 꺼져 있거나, 휴대폰이 다른 계정·워크스페이스이거나, 앱이 오래됐거나, 컴퓨터가 잠자기에 들어가서예요. 2026년 6월 8일 이후 쓰지 않은 연결은 QR 코드로 다시 페어링하세요.",
      },
      {
        q: "ChatGPT 원격 제어가 Windows에서 되나요?",
        a: "네. Windows의 ChatGPT 데스크톱 앱도 호스트가 될 수 있고, 같은 방법으로 Settings > Connections > Control this Mac or PC에서 설정해요. Codex가 Computer Use를 쓰면 활성 데스크톱을 차지하므로, 작업하는 동안 Windows 세션을 잠그지 말고 온라인으로 두세요. [Windows에서 Codex 쓰기](/blog/codex-windows)를 참고하세요.",
      },
      {
        q: "Codex cloud에서도 원격 제어를 쓸 수 있나요?",
        a: "둘은 별개예요. 원격 제어는 내 Mac이나 Windows PC의 채팅을 조종해요. ChatGPT 앱의 Codex에서 Cloud와 환경을 골라 클라우드 작업을 시작할 수도 있는데, 이 작업은 OpenAI 클라우드에서 실행되어 컴퓨터가 잠들어도 계속되지만 로컬 파일이나 브라우저 로그인은 볼 수 없어요. 내 컴퓨터의 채팅을 Codex cloud 환경으로 넘길 수는 없어요.",
      },
      {
        q: "ChatGPT 원격 제어가 SSH로도 되나요?",
        a: "네, 데스크톱 앱을 통해서요. 서버를 `~/.ssh/config`에 추가하고, 서버에 Codex를 설치해 로그인한 다음, Settings > Connections에서 추가하고 원격 프로젝트를 고르세요. 휴대폰은 앱을 실행하는 Mac이나 Windows PC에 연결되고, 그 컴퓨터가 서버에서 채팅을 실행하므로 그 컴퓨터는 켜져 있어야 해요. [VPS에서 Codex 돌리기](/blog/codex-vps)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "들여다볼 때만 답하는 Codex 말고, 자리를 비운 동안 일하는 Codex로.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 14일에 OpenAI의 Codex 문서(remote connections, 모바일, Codex Cloud, CLI)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI와 제휴하거나 OpenAI의 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표입니다.",
};
