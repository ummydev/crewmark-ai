import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// 요청 허용
{ "action": "allow" }

// 거부: deny_reason은 사용자에게 표시되고(최대 500자),
// reference_id는 컴플라이언스 활동 피드에만 기록됨
{
  "action": "deny",
  "deny_reason": "이 프롬프트에 고객 카드 정보가 포함된 것으로 보입니다.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude inference hooks: 작동 방식과 설정 | Crewmark AI",
    description:
      "2026년 11월 5일 정식 출시된 Claude inference hooks(추론 훅)는 모든 프롬프트와 도구 호출을 보안 서버로 보내 허용 또는 거부 판정을 받아요. 작동 방식, 설정 단계, 제한 사항, Claude Code hooks와의 차이를 정리했어요.",
  },
  breadcrumb: "Claude inference hooks",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude",
    title: "Claude inference hooks: 모든 프롬프트 앞에 허용 또는 거부 검사를",
    lead: "inference hooks(추론 훅)를 쓰면 Claude Enterprise 조직은 모든 프롬프트(원하면 모든 도구 호출까지)를 자체 보안 서버로 보내고, 허용(allow) 또는 거부(deny) 판정을 받은 뒤에 Claude를 실행할 수 있어요. 2026년 11월 5일에 정식 출시되었고, 베타 버전의 보안 센터(security center)도 함께 발표됐어요. 검사가 Anthropic 서버에서 이뤄지기 때문에 한 번만 설정하면 claude.ai, Claude Code, Cowork 등 다른 Claude 제품까지 모두 적용되고, 직원 노트북에는 아무것도 설치할 필요가 없어요. 이 글에서는 작동 방식, 설정 방법, 제한 사항, 그리고 Claude Code에서 직접 작성하는 hooks와 무엇이 다른지 설명해요.",
    cta: "시작하기",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "inference hooks의 작동 방식",
      text: [
        "조직(또는 조직의 보안 벤더)이 AI 보안 서버, 즉 HTTPS 엔드포인트를 운영해요. 누군가 프롬프트를 보내면 Anthropic은 대화 기록을 Standard Webhooks 방식으로 서명해 그 엔드포인트에 POST하고 판정을 기다려요. allow면 추론이 그대로 진행되고, deny면 요청이 모델에 닿지 않으며 사용자에게는 여러분이 보낸 사유와 관리자가 미리 정해 둔 안내 문구가 표시돼요.",
      ],
      points: [
        "이벤트는 두 가지예요. `prompt`는 관리 대상인 추론 요청 전마다, `tool_call`은 Validate tool calls(도구 호출 검증)가 켜져 있을 때 Claude 응답 속 도구 호출이 실행되기 전에 전송돼요.",
        "조직 전체에 한 번만 설정하면 돼요. claude.ai, Claude Desktop과 모바일, Claude Code(CLI 포함), Cowork, Claude for Microsoft 365, Claude Tag, Claude in Chrome에 적용돼요.",
        "서버가 보는 내용은 대화 기록 텍스트, 도구 호출과 그 결과, 첨부 파일에서 추출한 텍스트예요. 원본 파일이나 이미지 바이트, 시스템 프롬프트, 도구 정의는 절대 전송되지 않아요.",
        "판정은 allow 아니면 deny뿐이에요. 프롬프트를 고쳐 쓰거나 마스킹하는 기능은 지원하지 않아요.",
        "모든 거부는 조직의 Activity Feed(활동 피드)에 기록돼요.",
      ],
    },
    {
      kind: "table",
      title: "inference hooks vs Claude Code hooks vs Compliance API",
      text: [
        "이름은 비슷하지만 세 가지는 서로 다른 도구예요. Claude Code hooks는 프로젝트별 또는 사용자별로 설정하고 개발자 컴퓨터에서 실행돼요. inference hooks는 조직이 한 번 설정하고 Anthropic 쪽에서 실행돼요.",
      ],
      headers: ["", "Inference hooks", "Claude Code hooks", "Compliance API"],
      rows: [
        ["설정하는 사람", "조직의 Owner 또는 Primary owner", "각 개발자 또는 프로젝트, `settings.json`에서", "보안 또는 컴플라이언스 팀"],
        ["실행 위치", "Anthropic 서버가 여러분의 HTTPS 엔드포인트를 호출", "개발자 컴퓨터의 셸 명령", "여러분이 Anthropic API를 호출"],
        ["시점", "추론 전, 그리고 도구 호출 실행 전", "PreToolUse, PostToolUse, Stop 같은 이벤트 발생 시", "사후"],
        ["적용 범위", "Enterprise 조직의 모든 Claude 제품", "해당 설정이 있는 Claude Code 세션", "활동, 채팅, 파일, 대화 기록"],
        ["차단 가능 여부", "가능: 허용 또는 거부", "가능, 지원하는 이벤트에 한해", "불가: 감사와 내보내기"],
        ["요금제", "Claude Enterprise", "모든 Claude Code 사용자", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "inference hooks 설정 방법",
      text: [
        "Owner 또는 Primary owner 역할(Admin으로는 부족해요)과 443 포트를 쓰는 공개 HTTPS 엔드포인트가 필요해요. ngrok 같은 터널은 차단되니 테스트 서버도 직접 관리하는 도메인에 올려 두세요.",
      ],
      steps: [
        {
          title: "기능 허용하기",
          text: "claude.ai에서 Organization settings → Data and privacy(조직 설정 → 데이터 및 개인정보)를 열고 Inference hooks 아래의 Allow for your organization(조직에 허용)을 켜세요. 이것만으로는 검사가 시작되지 않아요. Enforce verdicts(판정 적용)는 꺼진 상태로 남아요.",
        },
        {
          title: "엔드포인트를 추가하고 서명 시크릿 보관하기",
          text: "Configure(구성)를 누르고 `https://` URL을 입력해 저장하세요. 처음 저장할 때 webhook 서명 시크릿이 한 번만 표시돼요. 서버가 모든 요청을 검증하는 데 쓰니 꼭 보관해 두세요.",
        },
        {
          title: "헤더를 추가하고 테스트하기",
          text: "서버가 Anthropic의 요청인지 인증할 수 있도록 정적 헤더를 최대 16개까지 추가한 뒤 Test connection(연결 테스트)을 누르세요. 합성 프롬프트를 보내고 판정 결과와 왕복 시간을 알려 줘요.",
        },
        {
          title: "판정을 HTTP 200 JSON으로 반환하기",
          text: "모든 요청에 HTTP 200과 `action`으로 응답하세요. 200이 아닌 상태 코드는 거부가 아니라 장애로 처리돼요.",
          code: verdict,
        },
        {
          title: "장애 처리 방식과 타임아웃 정하기",
          text: "Block the request(요청 차단)는 fail closed, Allow the request(요청 허용)는 fail open이에요. 판정 타임아웃은 1~10,000ms이고 기본값은 5,000이에요. 판정이 늦으면 연결 불가로 간주돼요. 실패가 반복되면 서킷 브레이커가 작동해 서버가 복구될 때까지 장애 처리 설정을 적용해요.",
        },
        {
          title: "단계적으로 도입한 뒤 적용하기",
          text: "판정만 보내고 아무것도 차단하지 않는 Shadow mode(섀도 모드)로 시작해, 일부 비율의 요청만 검사하고 필요하면 사용자 지정 역할을 제외한 다음 Enforce verdicts를 켜세요. 변경 사항은 약 1분 안에 모든 서버에 반영돼요.",
        },
      ],
      source: { label: "출처: Claude Platform 문서, Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "제한 사항과 주의할 점",
      points: [
        "Enterprise 전용이에요. Team, Pro, Max에서는 쓸 수 없고, Claude Platform(API) 조직이나 Amazon Bedrock, Google Cloud에서도 쓸 수 없어요.",
        "문서 스크린숏처럼 이미지로만 된 콘텐츠는 검사되지 않아요. 원본 바이트는 전송되지 않기 때문이에요.",
        "거부된 메시지는 대화 기록에 남아 이후 메시지를 보낼 때마다 다시 전송돼요. Claude Code에서는 `/rewind`로 그 메시지를 가져온 프롬프트까지 되돌리거나 `/clear`로 새로 시작하세요.",
        "Anthropic 자체의 일부 백그라운드 모델 호출은 관리 대상이 아니에요. 호스팅되는 Claude Security 스캔, GitHub 풀 리퀘스트의 Code Review, 스마트 리포트 등이 그래요. Claude Code에서 로컬로 `/code-review`를 실행하는 경우는 관리 대상이에요.",
        "음성 모드에서는 도구 호출 일부가 전송되지 않으니, 거기서는 hooks를 유일한 통제 수단으로 삼지 마세요.",
        "같은 발표에서 Claude, Cowork, Claude Code 설정을 Anthropic 권장 구성과 비교해 주는 보안 센터(베타)와, 베타 버전의 중앙 관리 및 접근 제어도 추가됐어요.",
      ],
    },
    {
      kind: "text",
      title: "스스로 일하는 에이전트에게 이게 중요한 이유",
      text: [
        "Claude Code가 사람 없이, 일정에 따라 또는 백그라운드에서 일할 때는 프롬프트가 전송되기 전에 하나하나 읽는 사람이 없어요. inference hooks가 있으면 에이전트가 어디서 실행되든 회사가 모든 요청과 도구 호출에 인라인 검사를 하나 걸 수 있고, 섀도 모드로 보안 팀이 실제로 차단하기 전에 정책을 다듬을 수 있어요. 한 컴퓨터에서 프로젝트 단위로 거는 가드레일에는 여전히 Claude Code 자체의 hooks와 권한 규칙이 적용돼요. 권한 모드는 [Claude Code 플랜 모드](/blog/claude-code-plan-mode)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "내가 없는 동안에도 일하는 AI 직원에게 가드레일을",
      text: [
        "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. Claude Enterprise 요금제라면 inference hooks가 다른 사람과 똑같이 이 직원의 프롬프트도 검사해요.",
      ],
      steps: [
        {
          title: "내 승인이 필요한 일 정하기",
          text: "게시, 병합, 결제처럼 위험한 작업 전에는 직원이 먼저 물어보고, 나는 하나의 받은편지함에서 승인해요.",
        },
        {
          title: "기록은 보드에 남기기",
          text: "이슈마다 직원의 댓글과 상태 변경이 남아서, 직원이 한 일을 보안 팀의 로그와 나란히 놓고 검토할 수 있어요.",
        },
        {
          title: "하트비트가 일을 시작하게 하기",
          text: "근무 시간에는 직원이 같은 대화 안에서 15분, 30분 또는 60분마다 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)과 [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude inference hooks 설정하기" },
  mid: {
    title: "보안은 설정했어요. 이제 Claude Code에게 일을 맡기세요.",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude inference hooks FAQ",
    items: [
      {
        q: "Claude inference hooks란 무엇인가요?",
        a: "각 프롬프트(원하면 각 도구 호출까지)를 조직의 보안 서버로 보내, Claude가 실행되기 전에 허용 또는 거부 답을 받는 Claude Enterprise 기능이에요. 2026년 11월 5일에 정식 출시됐어요.",
      },
      {
        q: "inference hooks는 Claude Code에서도 작동하나요?",
        a: "네. 한 번의 설정으로 CLI와 데스크톱 앱의 Claude Code를 포함해 Enterprise 조직의 모든 Claude 제품에 적용되고, 개발자 컴퓨터에는 아무것도 설치할 필요가 없어요.",
      },
      {
        q: "inference hooks와 Claude Code hooks는 어떻게 다른가요?",
        a: "Claude Code hooks는 각 개발자나 프로젝트가 `settings.json`에서 설정하는 셸 명령으로, PreToolUse 같은 이벤트가 일어날 때 로컬에서 실행돼요. inference hooks는 조직이 한 번 설정하고, 모든 Claude 제품에 대해 추론 전에 Anthropic 서버에서 실행돼요.",
      },
      {
        q: "어떤 요금제에서 inference hooks를 쓸 수 있나요?",
        a: "Claude Enterprise에서만 쓸 수 있고, Owner 또는 Primary owner가 설정해요. Claude Platform API 조직이나 Amazon Bedrock, Google Cloud에서는 쓸 수 없어요.",
      },
      {
        q: "inference hook으로 민감한 데이터를 마스킹할 수 있나요?",
        a: "아니요. 판정은 허용 또는 거부뿐이고, 프롬프트를 고쳐 쓰거나 마스킹하는 기능은 지원하지 않아요.",
      },
      {
        q: "보안 서버가 다운되면 어떻게 되나요?",
        a: "장애 처리 설정에 따라 달라요. 요청을 차단(fail closed)하거나 검사 없이 통과(fail open)시켜요. 서킷 브레이커는 장애가 난 서버 호출을 멈추고, 서버가 복구되면 초기화돼요.",
      },
      {
        q: "Claude 보안 센터란 무엇인가요?",
        a: "inference hooks와 함께 발표된 Organization settings 안의 베타 페이지로, Claude, Cowork, Claude Code 설정을 Anthropic 권장 구성과 비교하고 감사 담당자용 보고서를 만들어 줘요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 기반 AI 직원을, 우리 회사의 가드레일 안에서.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 Anthropic의 발표, Claude 고객센터, Claude Platform 문서와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
