import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Create the helper. This call sends no request.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# Turn 1 creates the thread and sends the full conversation
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# Turn 2 sends only the new message
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turn 1: the full conversation, plus
"thread": {"type": "create"}

# Every later turn: only the new messages, no system or tools, plus
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# On every request of the thread
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude 메시지 스레드란? 긴 에이전트 세션을 빠르게 | Crewmark",
    description:
      "Anthropic의 메시지 스레드는 Claude와의 대화를 한 번만 보내고 이후에는 새 내용만 보내는 기능이에요. Claude Code에 달라지는 점, 베타 API 사용법, 5분 만료와 제한을 정리했어요.",
  },
  breadcrumb: "Claude 메시지 스레드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "블로그 · Claude",
    title: "Claude 메시지 스레드란 무엇이고 어떻게 쓸까",
    lead: "메시지 스레드는 2026년 11월 2일부터 퍼블릭 베타로 제공되는 Claude API 기능이에요. 매 턴마다 대화 전체를 업로드하는 대신, 에이전트가 대화를 한 번만 보내고 그 뒤로는 새 메시지만 보내요. Anthropic은 Claude Code 사용자 대부분에게 이미 켜 두었고, 50만~100만 토큰짜리 요청에서 첫 토큰까지 걸리는 시간의 중앙값이 약 35% 줄어든다고 해요. 이 가이드에서는 무엇이 달라지고 무엇이 그대로인지, 내 에이전트에서 쓰는 방법, 그리고 제한 사항을 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "메시지 스레드란",
      text: [
        "스레드가 없으면 에이전트 루프의 매 턴마다 대화 전체를 다시 업로드하고, API도 그 전부를 다시 검증하고 토큰화해요. 코딩 에이전트는 한 세션에서 수백 번 요청을 보내기 때문에, 대화가 수십만 토큰에 이르면 이렇게 다시 보내는 일이 Claude의 답변 시작을 늦춰요. 스레드를 쓰면 API가 턴 사이에 대화를 보관하므로, 대부분의 처리가 새 턴 분량에만 적용돼요.",
      ],
      points: [
        "첫 토큰이 빨라져요: Anthropic이 측정한 결과, 50만~100만 토큰짜리 Claude Code 요청에서 중앙값이 약 35% 줄었어요. 대화가 길수록 효과가 커요.",
        "요청이 작아져요: 매 턴마다 새 메시지, 도구 결과, 스크린샷만 보내요.",
        "토큰과 가격은 같아요: Claude는 매 턴 대화 전체를 읽으므로 가격과 사용량 제한은 달라지지 않아요.",
        "수명이 짧아요: 스레드는 마지막 요청 후 5분이 지나면 만료되고, 암호화된 채 메모리에만 보관되며 디스크에는 기록되지 않아요.",
        "지원 범위: Claude API, Claude Platform on AWS, Claude Models on Google Cloud(Anthropic 관리), Microsoft Foundry의 모든 모델.",
      ],
    },
    {
      kind: "table",
      title: "스레드가 있을 때와 없을 때",
      headers: ["", "스레드 없음", "스레드 있음"],
      rows: [
        ["요청마다 보내는 것", "대화 전체, `system`, `tools`", "새 메시지와 이전 응답의 `id`만"],
        ["첫 토큰까지의 시간", "대화가 길어질수록 늘어남", "긴 대화에서도 짧고 안정적"],
        ["과금되는 토큰", "매 턴 대화 전체", "동일"],
        ["가격과 사용량 제한", "표준", "변화 없음"],
        ["대화를 보관하는 곳", "내 앱", "내 앱, 그리고 각 요청 후 5분간 API도 보관"],
        ["Zero Data Retention", "해당됨", "해당되지 않음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "내 에이전트에서 메시지 스레드 사용하는 방법",
      text: [
        "Claude Code는 이미 알아서 이렇게 동작해요. Messages API로 만든 에이전트에서 스레드를 쓰려면 SDK의 스레드 헬퍼가 가장 빠른 방법이에요.",
      ],
      steps: [
        {
          title: "스레드 헬퍼 만들기",
          text: "Messages 요청과 같은 필드를 넘기세요. 헬퍼가 `message-threads-2026-08-12` 베타 헤더를 붙이고, 첫 턴에 스레드를 만들고, 그 뒤로는 새 메시지만 보내며, 전체 대화는 메모리에 보관해요.",
          code: sdk,
        },
        {
          title: "또는 thread 필드를 직접 보내기",
          text: "cURL이나 일반 `create` 호출에서는 모든 요청에 `thread`를 추가하고, 매번 베타 헤더도 보내세요. 이어 가는 기준은 항상 가장 최근 응답의 `id`예요. 각 `id`에서는 한 번만 이어 갈 수 있어요.",
          code: raw,
        },
        {
          title: "모델과 설정은 고정하기",
          text: "`system`과 `tools`는 첫 요청에만 넣어요. `model`, `thinking`, `tool_choice`, 최상위 `cache_control`, 베타 헤더는 매 턴 같아야 해요. 바꾸면 `thread_fingerprint_mismatch`와 함께 400 오류가 반환돼요. 바꾸고 싶으면 새 스레드를 시작하세요.",
        },
        {
          title: "내 쪽에도 사본을 두고 404면 다시 보내기",
          text: "스레드는 최선형(best-effort)이에요. 이어 가는 요청이 `thread_not_found`와 함께 404를 반환하면(스레드가 만료됐거나, 마지막 턴이 저장되지 않았거나, 대체 모델이 작성한 경우) 대화 전체를 새 create 요청으로 다시 보내세요. SDK 헬퍼는 이 과정을 한 번 알아서 해 줘요.",
        },
        {
          title: "프롬프트 캐싱 켜기",
          text: "스레드가 프롬프트를 대신 캐시해 주지는 않아요. 모든 요청에 최상위 `cache_control`을 보내야 매 턴 이전 대화를 캐시에서 읽을 수 있어요. `thread`가 있는 요청에는 중단점(breakpoint)을 최대 4개까지 둘 수 있어요.",
        },
      ],
      source: { label: "출처: Anthropic의 메시지 스레드 문서", href: docs },
    },
    {
      kind: "text",
      title: "제한 사항과 스레드가 지원하지 않는 것",
      points: [
        "Message Batches, 토큰 카운팅, 온디맨드 compaction, 컨텍스트 편집과는 함께 쓸 수 없어요(`keep: \"all\"`을 지정한 `clear_thinking_20251015`는 예외).",
        "HIPAA readiness가 적용된 조직이나 Inference hooks를 쓰는 조직에서는 쓸 수 없어요. 해당 요청은 `thread_unsupported_request`와 함께 400 오류가 반환돼요.",
        "Zero Data Retention 대상이 아니에요. API는 스레드를 메모리에 보관하다가 마지막 사용 후 1시간 이내에 삭제해요.",
        "스레드를 나열하거나 읽거나 삭제하는 API는 없고, 스레드는 추가만 가능해요. 압축하려면 내가 만든 요약으로 새 스레드를 시작하세요.",
        "거부(refusal) 응답이 나오면 그 스레드를 이어 가지 말고, 거부로 이어진 턴을 뺀 새 스레드를 시작하세요.",
        "한 스레드의 모든 요청에는 같은 API 키와 워크스페이스를 쓰세요. 그렇지 않으면 이어 갈 수 없어요.",
      ],
    },
    {
      kind: "text",
      title: "Claude Code 사용자에게 의미하는 것",
      text: [
        "아무것도 바꿀 필요가 없어요. Anthropic에 따르면 스레드는 Claude Code 사용자 대부분에게 기본으로 켜져 있어요. 효과는 긴 세션에서 나타나서, 큰 대화 깊숙한 턴에서도 답변이 더 빨리 시작돼요. Claude는 매 턴 대화 전체를 읽으므로 사용량이 줄지는 않아요.",
        "API 문서에 따르면 스레드는 마지막 요청 후 5분이 지나면 만료돼요. 그보다 오래 쉬었다가 세션으로 돌아오면 첫 요청에서 대화 전체를 다시 보내고, 그다음 턴부터는 빨라져요. 일정에 맞춰 깨어나는 [능동형 Claude Code 세션](/proactive-claude-code)에서도 마찬가지예요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "긴 Claude Code 세션이 스스로 일하게 만들기",
      text: [
        "메시지 스레드는 긴 세션을 빠르게 하고, Crewmark는 그 세션을 능동적으로 만들어요. Claude Code, Codex, DeepSeek Harness, OpenCode 세션에 직무, 목표, 근무 시간을 주고 하트비트로 같은 대화에서 깨우므로, 컨텍스트를 유지한 채 보드에서 다음 이슈를 가져가요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 만들기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표를 숫자로 적은 다음, Claude Code에서 설정 명령어를 실행하세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 중에 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요. [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)처럼 여럿을 나란히 돌릴 수도 있어요.",
        },
        {
          title: "이슈를 맡기고 메시지에 답하기",
          text: "보드에 일을 올리면 직원이 가져가서 진행하며 댓글을 달고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "내 에이전트에서 Claude 메시지 스레드 사용하기" },
  mid: {
    title: "긴 Claude Code 세션을 돌리고 있나요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 세션을 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude 메시지 스레드 자주 묻는 질문",
    items: [
      {
        q: "Claude 메시지 스레드란 무엇인가요?",
        a: "2026년 11월 2일부터 퍼블릭 베타로 제공되는 Claude API 기능으로, 턴 사이에 대화를 Anthropic 쪽에 보관해요. 첫 요청에서 대화 전체를 보내 스레드를 만들고, 이후 요청에서는 새 메시지와 이전 응답의 `id`만 보내요.",
      },
      {
        q: "메시지 스레드를 쓰면 Claude Code가 빨라지나요?",
        a: "긴 세션에서는 그래요. Anthropic에 따르면 스레드는 Claude Code 사용자 대부분에게 기본으로 켜져 있고, 50만~100만 토큰짜리 요청에서 첫 토큰까지의 시간 중앙값이 약 35% 줄어요. 짧은 대화에서는 효과가 거의 없어요.",
      },
      {
        q: "메시지 스레드로 토큰이나 비용을 아낄 수 있나요?",
        a: "아니요. Claude는 매 턴 대화 전체를 읽으므로 토큰 사용량, 가격, 사용량 제한은 그대로예요. 얻는 것은 더 작은 요청과 더 빠른 첫 토큰이에요. 비용을 줄이려면 프롬프트 캐싱을 쓰세요.",
      },
      {
        q: "스레드는 얼마나 유지되나요?",
        a: "마지막 요청 후 5분이 지나면 만료되고, 응답이 저장될 때마다 5분이 새로 시작돼요. API는 마지막 사용 후 1시간 이내에 삭제해요. 그 뒤에는 대화 전체를 다시 보내 새 스레드를 시작하세요.",
      },
      {
        q: "메시지 스레드 베타 헤더는 무엇인가요?",
        a: "`anthropic-beta: message-threads-2026-08-12`이고, 스레드의 모든 요청에 보내요. SDK 스레드 헬퍼가 자동으로 붙여 줘요.",
      },
      {
        q: "메시지 스레드는 Zero Data Retention 대상인가요?",
        a: "아니요. 스레드 내용은 서버가 관리하는 키로 암호화돼 메모리에 보관되고, 영구 저장소에는 기록되지 않으며, 마지막 사용 후 1시간 이내에 삭제돼요. HIPAA readiness가 적용된 조직은 스레드를 쓸 수 없어요.",
      },
      {
        q: "메시지 스레드는 Managed Agents의 세션 스레드와 같은 건가요?",
        a: "아니요. 메시지 스레드는 Messages API 기능이고, 세션 스레드는 Claude Managed Agents의 것이에요.",
      },
    ],
  },
  cta: {
    title: "긴 Claude Code 세션을 능동적으로 만드세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 4일에 Anthropic의 발표 및 Claude Platform 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
