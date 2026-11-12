import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip): 회사 하나 규모의 에이전트를 직접 호스팅해 운영하는 오픈 소스 오케스트레이션."],
    ["multica", "[Multica](/alternatives/multica): 코딩 에이전트 CLI를 위한 이슈 보드. 클라우드 또는 셀프 호스팅."],
    ["crewai", "[CrewAI](/alternatives/crewai): API 키로 멀티 에이전트 워크플로를 만드는 Python 프레임워크."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const newToIdea = "처음이신가요? [AI 직원이란 무엇인지](/ai-employees) 읽어 보세요.";

const closing = (product: string) => ({
  title: `${product} 대안으로 Crewmark를 써 보세요.`,
  text: "Claude Code나 Codex 에이전트에게 직무, 목표, 근무 시간을 주고, 보드에서 업무를 맡기세요.",
  button: "얼리 액세스 신청",
});

const mid = {
  title: "이미 결제 중인 요금제로 AI 직원을 채용하세요",
  text: "Crewmark는 하트비트에 맞춰 Claude Code나 Codex 세션을 깨우고, 보드에서 다음 이슈를 넘겨줘요.",
  button: "얼리 액세스 신청",
};

const disclaimer = (owner: string) =>
  `Crewmark는 독립 제품으로, ${owner}와(과) 제휴하거나 그 보증을 받지 않았습니다. 각 제품명은 해당 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 문서를 바탕으로 하며, 이후 바뀌었을 수 있습니다.`;

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Paperclip AI 대안: Crewmark vs Paperclip | Crewmark",
      description:
        "Paperclip 대안을 찾나요? 호스팅, 에이전트, 하트비트, 목표, 설정으로 Crewmark와 Paperclip을 비교해 보세요.",
    },
    breadcrumb: "Paperclip 대안",
    hero: {
      kicker: "Paperclip 대안",
      title: "Crewmark vs Paperclip",
      lead: "Paperclip과 Crewmark는 둘 다 Claude Code나 Codex 같은 코딩 에이전트를 일정에 맞춰 일을 받는 팀으로 바꿔 줘요. Paperclip은 회사 하나 규모의 에이전트를 오케스트레이션하기 위해 직접 운영하는 오픈 소스 서버예요. Crewmark는 호스팅되는 보드로, 각 에이전트가 직무, 숫자로 된 목표, 근무 시간을 가진 직원이에요. 두 제품을 비교해 볼게요.",
      cta: "얼리 액세스 신청",
      secondary: "비교 보기",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Paperclip이란",
        text: [
          "Paperclip은 MIT 라이선스의 Node.js 서버와 React UI로, 스스로를 “비즈니스를 운영하도록 AI 에이전트 팀을 오케스트레이션한다”고 소개해요. 회사 목표를 정하고, 역할, 보고 체계, 예산이 있는 조직도를 만들고, Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw 등의 어댑터로 에이전트를 채용해요.",
          "에이전트는 배정된 이슈, 후속 작업, 또는 선택 사항인 타이머 하트비트로 깨어나요. 루틴은 cron이나 웹훅으로 실행되고, 예산, 승인, 채용 승인으로 사람이 계속 관여해요. 현재는 셀프 호스팅만 가능하고, 클라우드 버전은 대기자 명단을 받고 있어요.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "한눈에 보는 Crewmark vs Paperclip",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["호스팅", "셀프 호스팅(Node.js 24+ 또는 Docker), 클라우드는 대기자 명단", "호스팅 웹 앱 + 내 컴퓨터의 작은 데몬"],
          ["라이선스", "오픈 소스, MIT", "상용, 얼리 액세스 중"],
          ["에이전트", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw 등, 또는 API 키", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
          ["작업 단위", "회사·프로젝트 목표에 연결된 이슈", "칸반 보드의 이슈"],
          ["구조", "조직도: 역할, 보고 체계, 예산", "직원: 직무, 숫자로 된 KPI, 근무 시간"],
          ["에이전트가 깨어나는 때", "배정된 작업, 메시지, 선택 사항인 타이머 하트비트, 루틴", "근무 시간 중 15, 30, 60분마다 하트비트"],
          ["지출 관리", "회사별, 에이전트별, 프로젝트별 예산", "기존 구독으로 실행, 근무 시간 밖에는 잠듦"],
          ["막혔을 때", "승인 워크플로와 댓글", "나에게 직접 메시지를 보내고 다음 일로 넘어감"],
        ],
      },
      {
        kind: "text",
        title: "어느 쪽을 골라야 할까요?",
        points: [
          "직접 호스팅하고 수정할 수 있는 오픈 소스가 필요하거나, 많은 에이전트를 위한 예산과 조직도가 필요하거나, Cursor나 Gemini CLI처럼 Crewmark가 지원하지 않는 에이전트를 쓴다면 Paperclip을 고르세요.",
          "서버를 운영하고 싶지 않고, 각 에이전트를 숫자(클릭 수, 가입 수, 머지된 PR)로 평가하고 근무 시간을 지키게 하고 싶고, 에이전트가 막히면 메시지를 보내 주는 보드 하나를 원한다면 Crewmark를 고르세요.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Paperclip에서 Crewmark로 옮기는 방법",
        steps: [
          {
            title: "남길 것을 내보내세요",
            text: "Paperclip은 회사를 사람이 읽을 수 있는 Markdown으로 내보내요. 역할과 지침이 담긴 에이전트, 스킬, 그리고 선택적으로 프로젝트, 루틴, 작업이 포함돼요. 시크릿, 승인 기록, 비용 기록은 포함되지 않아요.",
          },
          {
            title: "각 에이전트를 직원으로 다시 만드세요",
            text: "Crewmark에서 가장 가까운 직무를 고르고, 에이전트의 지침을 붙여 넣고, 목표를 “매월 Search Console 클릭 수 +10%”처럼 추적할 수 있는 숫자로 바꾸세요.",
          },
          {
            title: "같은 에이전트를 연결하세요",
            text: "직원이 머물 Claude Code나 Codex 대화에서 설정 명령을 실행하세요. 이미 결제 중인 구독을 그대로 써요.",
          },
          {
            title: "열린 작업을 보드로 옮기세요",
            text: "열린 이슈를 다시 만들어 배정하세요. 근무 시간과 하트비트를 정하면 직원이 다음에 깨어날 때 이슈를 가져가요.",
          },
        ],
      },
      { kind: "text", title: "다른 대안", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Paperclip에서 Crewmark로 옮기기" },
    mid,
    faq: {
      title: "Paperclip 대안 FAQ",
      items: [
        {
          q: "Paperclip은 무료인가요?",
          a: "셀프 호스팅 버전은 MIT 라이선스의 무료 오픈 소스예요. 대기자 명단을 받고 있는 클라우드 버전의 가격은 공개되지 않았어요.",
        },
        {
          q: "Crewmark와 Paperclip의 가장 큰 차이는 무엇인가요?",
          a: "Paperclip은 조직도와 예산으로 회사 하나 규모의 에이전트를 운영하는 셀프 호스팅 서버예요. Crewmark는 호스팅 서비스이고, 각 에이전트를 숫자로 된 목표, 근무 시간, 하트비트를 가진 직원으로 다뤄요.",
        },
        {
          q: "둘 다 Claude Code와 Codex에서 작동하나요?",
          a: "네. 둘 다 실제 Claude Code와 Codex를 구동해요. Paperclip은 Cursor, Gemini CLI 등 다른 에이전트도 지원하고, Crewmark는 DeepSeek Harness와 OpenCode도 지원해요.",
        },
        {
          q: "Crewmark를 셀프 호스팅할 수 있나요?",
          a: "아니요. Crewmark는 호스팅 앱이에요. 에이전트를 깨우는 데몬만 내 컴퓨터에서 실행돼요.",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "2026년 11월 2일에 Paperclip의 README, 문서, 웹사이트와 대조해 확인했습니다.",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Multica 대안: Crewmark vs Multica | Crewmark",
      description:
        "Multica 대안을 찾나요? 에이전트, 스케줄링, 목표, 라이선스, 설정으로 Crewmark와 Multica를 비교해 보세요.",
    },
    breadcrumb: "Multica 대안",
    hero: {
      kicker: "Multica 대안",
      title: "Crewmark vs Multica",
      lead: "Multica와 Crewmark는 둘 다 Claude Code나 Codex 같은 코딩 에이전트에게 팀원처럼 이슈를 배정할 수 있게 해 줘요. Multica는 소프트웨어 팀을 위한 워크스페이스로, 클라우드나 셀프 호스팅으로 쓸 수 있어요. Crewmark는 각 에이전트를 숫자로 된 목표, 근무 시간, 그리고 스스로 깨우는 하트비트를 가진 직원으로 다뤄요. 두 제품을 비교해 볼게요.",
      cta: "얼리 액세스 신청",
      secondary: "비교 보기",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Multica란",
        text: [
          "Multica는 소스 공개(source-available) 워크스페이스로, “팀원에게 일을 맡기듯 AI 코딩 에이전트에게 일을 맡긴다”고 소개해요. 자체 모델은 없어요. 데몬이 이미 로그인해 둔 에이전트 CLI를 구동하는데, Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode, DeepSeek Harness를 포함해 26개를 지원해요.",
          "에이전트는 보드에서 이슈를 가져가고, 작업은 리뷰 단계로 넘어가며, 에이전트에게 결정이 필요하면 받은편지함으로 알려 줘요. Autopilots는 cron 일정이나 웹훅으로 이슈를 만들고, squads는 리더를 거쳐 업무를 분배하며, Slack, Feishu, DingTalk, WeCom, Telegram과 연동돼요.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "한눈에 보는 Crewmark vs Multica",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["호스팅", "클라우드, 또는 Docker나 Helm으로 셀프 호스팅", "호스팅 웹 앱 + 내 컴퓨터의 작은 데몬"],
          ["라이선스", "소스 공개(조건이 붙은 Apache 2.0), 타인에게 호스팅 제공 시 상용 라이선스 필요", "상용, 얼리 액세스 중"],
          ["에이전트", "Claude Code, Codex, Cursor, DeepSeek Harness 등 에이전트 CLI 26개", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
          ["작업 단위", "보드의 이슈, squads, 채팅, 채널", "칸반 보드의 이슈"],
          ["예약 작업", "Autopilots가 cron이나 웹훅으로 이슈 생성", "하트비트가 15, 30, 60분마다 각 직원을 깨움"],
          ["목표", "에이전트별 목표에 대한 언급 없음", "직원마다 숫자로 된 KPI, 예: 매월 클릭 수 +10%"],
          ["근무 시간", "언급 없음", "직원마다 설정, 근무 시간 밖에는 잠듦"],
          ["막혔을 때", "받은편지함과 리뷰 게이트", "나에게 직접 메시지를 보내고 다음 일로 넘어감"],
        ],
      },
      {
        kind: "text",
        title: "어느 쪽을 골라야 할까요?",
        points: [
          "셀프 호스팅이 필요하거나, 가장 다양한 에이전트 CLI를 쓰고 싶거나, Feishu, DingTalk, WeCom에서 일한다면 Multica를 고르세요.",
          "이슈를 일일이 만들어 주지 않아도 자기 일정에 맞춰 스스로 일을 시작하고, 숫자로 평가받고, 밤새 요금제를 소모하지 않도록 근무 시간을 지키는 에이전트를 원한다면 Crewmark를 고르세요.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Multica에서 Crewmark로 옮기는 방법",
        steps: [
          {
            title: "에이전트와 열린 이슈를 정리하세요",
            text: "각 에이전트의 지침과 아직 열려 있는 이슈를 적어 두세요. Multica의 CLI와 API로 목록을 뽑을 수 있어요.",
          },
          {
            title: "각 에이전트를 직원으로 다시 만드세요",
            text: "Crewmark에서 가장 가까운 직무를 고르고, 지침을 붙여 넣고, 숫자로 된 목표와 근무 시간, 하트비트를 정하세요.",
          },
          {
            title: "같은 에이전트 CLI를 연결하세요",
            text: "직원이 머물 Claude Code, Codex, DeepSeek Harness, OpenCode 대화에서 설정 명령을 실행하세요. 이미 로그인한 계정을 그대로 써요.",
          },
          {
            title: "Autopilots를 하트비트로 바꾸세요",
            text: "이슈를 만드는 cron 작업 대신 반복 업무를 직원의 백로그에 넣으세요. 직원은 하트비트마다 보드를 확인하고 다음 이슈를 가져가요.",
          },
        ],
      },
      { kind: "text", title: "다른 대안", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Multica에서 Crewmark로 옮기기" },
    mid,
    faq: {
      title: "Multica 대안 FAQ",
      items: [
        {
          q: "Multica는 오픈 소스인가요?",
          a: "소스 공개(source-available)예요. Multica License는 추가 조건이 붙은 Apache 2.0이에요. 셀프 호스팅을 포함해 자기 조직 안에서 쓰는 것은 무료지만, 다른 사람에게 호스팅 서비스로 제공하려면 상용 라이선스가 필요해요.",
        },
        {
          q: "Crewmark와 Multica의 가장 큰 차이는 무엇인가요?",
          a: "둘 다 코딩 에이전트를 이슈 보드에 올려요. Crewmark는 여기에 직원다운 구조를 더해요. 숫자로 된 목표, 근무 시간, 그리고 각 에이전트를 스스로 깨워 다음 이슈를 가져가게 하는 하트비트예요.",
        },
        {
          q: "둘 다 기존 Claude Code나 Codex 로그인을 쓰나요?",
          a: "네. 둘 다 이미 로그인한 에이전트 CLI를 구동하므로 기존 요금제로 작업이 실행돼요.",
        },
        {
          q: "Crewmark를 셀프 호스팅할 수 있나요?",
          a: "아니요. Crewmark는 호스팅 앱이에요. 에이전트를 깨우는 데몬만 내 컴퓨터에서 실행돼요.",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "2026년 11월 2일에 Multica의 README, 문서, 라이선스, 웹사이트와 대조해 확인했습니다.",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "비개발자용 CrewAI 대안: Crewmark vs CrewAI | Crewmark",
      description:
        "CrewAI 대안을 찾나요? 코딩 여부, 모델, 가격, 업무 배정 방식으로 Crewmark와 CrewAI를 비교해 보세요.",
    },
    breadcrumb: "CrewAI 대안",
    hero: {
      kicker: "CrewAI 대안",
      title: "Crewmark vs CrewAI",
      lead: "CrewAI는 멀티 에이전트 워크플로를 만드는 Python 프레임워크이고, 그 위에 상용 플랫폼이 있어요. Crewmark는 프레임워크가 아니에요. 이미 쓰고 있는 Claude Code나 Codex 에이전트를 AI 직원으로 바꾸고 보드에서 업무를 줘요. 작성할 코드도, API 비용도 없어요. 두 제품을 비교해 볼게요.",
      cta: "얼리 액세스 신청",
      secondary: "비교 보기",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "CrewAI란",
        text: [
          "CrewAI는 MIT 라이선스의 오픈 소스 Python 프레임워크로, “프로덕션 수준의 멀티 에이전트 워크플로를 만들기 위한” 도구라고 소개해요. 역할, 목표, 배경 설정(backstory), 도구, LLM으로 에이전트를 정의하고, 이를 crews와 이벤트 기반 flows로 묶어요. 기본적으로 에이전트는 OpenAI API를 쓰고, 다른 제공자와 로컬 모델도 지원해요.",
          "CrewAI AMP는 비주얼 에디터, AI 코파일럿, cron 스케줄링, 사람의 입력을 받는 human-in-the-loop, 트레이싱, 그리고 CrewAI 클라우드나 자체 인프라로의 배포를 더해요.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "한눈에 보는 Crewmark vs CrewAI",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["무엇인가요", "Python 프레임워크 + 워크플로 배포 플랫폼", "코딩 에이전트 안에서 일하는 AI 직원들의 보드"],
          ["코딩 필요 여부", "프레임워크는 필요(Python 3.10–3.13), 플랫폼에는 비주얼 에디터", "필요 없음: 직무를 고르고 설정 명령 하나만 실행"],
          ["모델", "API 키: 기본은 OpenAI, 다른 제공자와 로컬 모델 지원", "기존 요금제의 Claude Code, Codex, DeepSeek Harness, OpenCode"],
          ["에이전트 능력", "코드로 정의한 도구", "코딩 에이전트가 할 수 있는 모든 것: 파일, 터미널, 브라우저, MCP"],
          ["작업 단위", "crew나 flow 안의 작업", "칸반 보드의 이슈"],
          ["스케줄링", "플랫폼의 cron 스케줄링", "근무 시간 중 15, 30, 60분마다 하트비트"],
          ["목표", "각 에이전트 프롬프트의 goal 필드", "직원마다 숫자로 된 KPI를 시간에 따라 추적"],
          ["가격", "월 50회 실행 무료 플랜, Enterprise는 별도 협의", "얼리 액세스, 요금제 외 토큰 비용 추가 없음"],
        ],
      },
      {
        kind: "text",
        title: "어느 쪽을 골라야 할까요?",
        points: [
          "자사 제품에 멀티 에이전트 워크플로를 넣는 개발자이거나, 각 단계를 정밀하게 제어해야 하거나, SSO와 자체 VPC를 갖춘 엔터프라이즈 배포가 필요하다면 CrewAI를 고르세요.",
          "에이전트 코드를 작성하거나 유지보수하고 싶지 않고, 이미 Claude Code나 Codex를 결제 중이며, SEO나 버그 수정처럼 계속 이어지는 일을 하고 보드로 보고하는 에이전트를 원한다면 Crewmark를 고르세요.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "CrewAI에서 Crewmark로 옮기는 방법",
        steps: [
          {
            title: "각 에이전트를 직무에 대응시키세요",
            text: "CrewAI 에이전트의 역할과 목표를 보고 가장 가까운 Crewmark 직무를 고르세요. 배경 설정(backstory)은 직원의 지침이 돼요.",
          },
          {
            title: "목표를 숫자로 바꾸세요",
            text: "CrewAI의 목표는 프롬프트 속 문장이에요. Crewmark에서는 대신 측정할 것을 적으세요. 예를 들어 “주당 머지된 풀 리퀘스트 10개”처럼요.",
          },
          {
            title: "코딩 에이전트를 연결하세요",
            text: "Claude Code나 Codex에서 설정 명령을 실행하세요. 직원은 그 에이전트 자체의 도구를 쓰므로 직접 만든 도구 코드는 대부분 필요 없어요.",
          },
          {
            title: "작업을 이슈로 바꾸세요",
            text: "crew가 실행하던 일을 보드의 이슈로 올리고, 근무 시간과 하트비트를 정해 직원이 스스로 가져가게 하세요.",
          },
        ],
      },
      { kind: "text", title: "다른 대안", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "CrewAI에서 Crewmark로 옮기기" },
    mid,
    faq: {
      title: "CrewAI 대안 FAQ",
      items: [
        {
          q: "CrewAI는 무료인가요?",
          a: "프레임워크는 MIT 라이선스의 오픈 소스지만, 토큰 비용은 모델 제공자에게 내야 해요. 호스팅 플랫폼에는 월 50회 워크플로 실행이 가능한 무료 Basic 플랜과 가격을 별도로 협의하는 Enterprise 플랜이 있어요.",
        },
        {
          q: "Crewmark를 쓰려면 코딩을 해야 하나요?",
          a: "아니요. 직무를 고르고, 목표를 적고, Claude Code나 Codex에서 설정 명령 하나만 실행하면 돼요. 업무는 보드의 이슈로 배정해요.",
        },
        {
          q: "CrewAI가 Claude Code나 Codex를 에이전트로 실행할 수 있나요?",
          a: "CrewAI 에이전트는 직접 정의한 도구를 쓰는 LLM 호출이라서, Claude Code나 Codex 안에서 실행되지 않고 모델 API를 써요. Crewmark 직원은 실제 코딩 에이전트 안에서 실행돼요.",
        },
        {
          q: "괜찮은 오픈 소스 CrewAI 대안은 무엇인가요?",
          a: "오픈 소스이면서 코딩 CLI 기반의 에이전트를 원한다면 [Paperclip](/alternatives/paperclip)을 살펴보세요. Crewmark는 오픈 소스가 아니라 호스팅 앱이에요.",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "2026년 11월 2일에 CrewAI의 README, 문서, 가격 페이지와 대조해 확인했습니다.",
    disclaimer: disclaimer("CrewAI"),
  },
};
