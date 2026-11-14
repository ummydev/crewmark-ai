import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code에서 DeepSeek V4 쓰는 법 | Crewmark AI",
    description:
      "Claude Code를 DeepSeek 모델로 실행하는 방법. DeepSeek이 안내하는 deepseek-flash와 deepseek-v4-pro용 환경 변수, 모델 매핑, 웹 검색, 가격, Codex 설정까지 정리했어요.",
  },
  breadcrumb: "Claude Code에서 DeepSeek 쓰기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · DeepSeek",
    title: "Claude Code에서 DeepSeek 모델을 쓰는 방법",
    lead: "DeepSeek API는 Anthropic 프로토콜을 지원해요. 그래서 Claude Code가 `https://api.deepseek.com/anthropic`을 바라보게 하고 DeepSeek API 키를 넣으면 DeepSeek 모델로 Claude Code를 돌릴 수 있어요. 정확한 설정은 DeepSeek이 문서로 공개하고 있어요. 대부분의 작업에는 1M 토큰 컨텍스트의 `deepseek-flash`(DeepSeek-V4.1-Flash)를 쓰고, Opus 이름에는 `deepseek-v4-pro`가 연결돼요. 이 가이드에서는 macOS, Linux, Windows에서의 설정 방법, Claude 모델 이름이 어떻게 매핑되는지, 비용은 얼마인지, 그리고 Codex에서 같은 걸 하는 방법을 다뤄요.",
    cta: "시작하기",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code를 DeepSeek으로 설정하는 법",
      steps: [
        {
          title: "DeepSeek API 키 발급받기",
          text: "platform.deepseek.com의 API keys에서 키를 만들고 계정에 잔액을 충전하세요. 사용량은 토큰 단위로 과금돼요.",
        },
        {
          title: "Claude Code가 없다면 설치하기",
          text: "DeepSeek 가이드는 npm으로 설치해요. Node.js 18 이상(Windows에서는 Git for Windows도)을 준비하고 `npm install -g @anthropic-ai/claude-code`를 실행한 뒤 `claude --version`으로 확인하세요.",
        },
        {
          title: "환경 변수 설정하기(macOS, Linux)",
          text: "이 변수들은 Claude Code가 DeepSeek의 Anthropic 호환 엔드포인트를 쓰게 하고, 메인 모델과 서브에이전트에 1M 컨텍스트의 `deepseek-flash`를 쓰며, effort 레벨과 자동 압축 창을 높여요. 계속 쓰려면 셸 프로필에 넣어 두세요.",
          code: env,
        },
        {
          title: "Windows라면(PowerShell)",
          text: "같은 설정을 현재 세션용 PowerShell 환경 변수로 지정해요.",
          code: windows,
        },
        {
          title: "프로젝트에서 Claude Code 실행하기",
          text: "`cd`로 프로젝트에 들어가 `claude`를 실행하세요. CLAUDE.md, skills, hooks, MCP 서버 같은 나머지는 평소처럼 설정하면 돼요.",
        },
      ],
      source: { label: "출처: DeepSeek API 문서, Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Claude 모델 이름이 DeepSeek 모델로 매핑되는 방식",
      text: [
        "Claude Code(또는 Claude 데스크톱 앱)가 Claude 모델 이름을 DeepSeek 엔드포인트로 보내면 DeepSeek은 아래처럼 매핑해요. 위 설정에서 모든 모델 변수를 `deepseek-flash`로 지정하는 이유가 이거예요. 그러지 않으면 Opus를 요청하는 호출은 모두 V4 Pro 가격으로 과금돼요.",
      ],
      headers: ["Claude Code가 보내는 모델 이름", "실제로 쓰이는 DeepSeek 모델", "참고"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "V4 Pro 가격으로 과금"],
        ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash, 이미지 입력 지원"],
        ["`deepseek-flash[1m]`", "1,048,576 토큰 컨텍스트의 `deepseek-flash`", "DeepSeek 권장 환경 변수의 설정"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "비용은 얼마나 들까",
      text: [
        "2026년 11월 6일 기준 DeepSeek API 가격이며, 단위는 100만 토큰당 미국 달러예요. 비피크 시간대(평일 UTC 01:00–04:00과 06:00–10:00 외) 요금은 피크 요금의 절반이에요. Claude Code의 웹 검색도 DeepSeek API에서 작동하지만, 검색할 때마다 결과를 요약하느라 모델 토큰이 추가로 들고 DeepSeek의 Search API로 과금돼요.",
      ],
      headers: ["100만 토큰당", "deepseek-flash, 피크", "deepseek-flash, 비피크", "deepseek-v4-pro, 피크", "deepseek-v4-pro, 비피크"],
      rows: [
        ["입력, 캐시 적중", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["입력, 캐시 미스", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["출력", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Codex에서 DeepSeek 쓰기",
      text: [
        "DeepSeek은 Responses API를 통해 Codex도 지원해요. 가이드에 있는 설정 스크립트는 `~/.codex/config.toml`을 백업하고, `deepseek-flash`와 `deepseek-v4-pro`가 들어 있는 `~/.codex/models.json` 카탈로그를 만든 뒤 DeepSeek 제공자를 추가해요. 그러면 설정 하나로 Codex CLI, ChatGPT 데스크톱 앱, VS Code 확장이 모두 동작해요. 실행하기 전에 스크립트를 읽어 보거나, 같은 가이드의 수동 설정 단계를 따르세요. 내장 웹 검색은 스크립트가 꺼 두며, `deepseek-v4-pro`에서만 쓸 수 있어요. Codex 자체의 지침 파일은 [Codex AGENTS.md 가이드](/blog/codex-agents-md)를 참고하세요.",
      ],
    },
    {
      kind: "text",
      title: "Claude Code + DeepSeek vs DeepSeek Harness",
      points: [
        "Claude Code + DeepSeek: CLAUDE.md, skills, hooks, 플러그인을 포함해 Claude Code의 인터페이스와 익숙한 방식을 그대로 쓰면서, Claude 요금제 대신 DeepSeek의 토큰당 가격을 내요.",
        "DeepSeek Harness: 플러그인을 중심으로 만든 DeepSeek의 오픈소스 에이전트 앱으로, 데스크톱 앱과 웹 UI가 있어요. Claude Code나 Codex를 서브에이전트로 돌릴 수도 있어요. [DeepSeek Harness 가이드](/blog/deepseek-harness)를 참고하세요.",
        "어느 쪽이든 모델은 같은 `deepseek-flash`와 `deepseek-v4-pro`이고, 요금은 DeepSeek이 청구해요.",
        "Anthropic 모델로 돌아가려면 변수를 해제하고(또는 변수가 없는 새 셸을 열고) 평소처럼 Claude Code에 로그인하면 돼요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "저렴한 모델, 하루 종일 일하게",
      text: [
        "Claude Code나 DeepSeek Harness를 DeepSeek 가격으로 돌리면 에이전트를 계속 일하게 해도 부담이 적어요. Crewmark는 그 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 하나씩 깨워 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "지금 쓰는 설정 그대로",
          text: "직원은 내 컴퓨터의 Claude Code, Codex, DeepSeek Harness, OpenCode 세션에서 내 환경과 키로 돌아가요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 다음 이슈를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "청구액 관리하기",
          text: "근무 시간을 정하고 한 번에 이슈 하나만 맡기면 사용량을 예측할 수 있어요. [Claude Code 토큰 사용량 줄이는 방법](/blog/reduce-claude-code-token-usage)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에서 DeepSeek 모델 사용하기" },
  mid: {
    title: "DeepSeek으로 돌리는 Claude Code는 저렴해요. 더 많이 일하게 하세요.",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 Claude Code, Codex, DeepSeek Harness를 하트비트로 깨워요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code + DeepSeek 자주 묻는 질문",
    items: [
      {
        q: "Claude Code에서 DeepSeek 모델을 쓸 수 있나요?",
        a: "네. DeepSeek API는 `https://api.deepseek.com/anthropic`에서 Anthropic 호환 방식으로 제공돼요. DeepSeek 가이드대로 `ANTHROPIC_BASE_URL`을 이 주소로, `ANTHROPIC_AUTH_TOKEN`을 DeepSeek API 키로 설정하세요.",
      },
      {
        q: "Claude Code에서는 어떤 DeepSeek 모델을 써야 하나요?",
        a: "DeepSeek 가이드는 모든 역할에 1M 컨텍스트의 `deepseek-flash`(DeepSeek-V4.1-Flash)를 지정해요. Opus 모델을 요청하면 `deepseek-v4-pro`가 쓰이고, 가격이 더 높아요.",
      },
      {
        q: "Claude Code + DeepSeek 비용은 얼마인가요?",
        a: "DeepSeek API 사용료만 들어요. `deepseek-flash`는 피크 시간대 기준 캐시 미스 입력이 100만 토큰당 $0.30, 출력이 100만 토큰당 $1.20이고, 비피크에는 절반이며, 캐시된 입력은 훨씬 더 저렴해요.",
      },
      {
        q: "DeepSeek으로 돌리는 Claude Code에서도 웹 검색이 되나요?",
        a: "네. DeepSeek은 Claude Code의 웹 검색 도구를 지원해요. 검색할 때마다 결과 요약에 모델 토큰이 추가로 들고, DeepSeek의 Search API로 과금돼요.",
      },
      {
        q: "Claude 구독이 필요한가요?",
        a: "아니요. 이 변수들을 설정하면 Claude Code는 요청을 DeepSeek으로 보내고, Claude 요금제가 아니라 DeepSeek 계정으로 청구돼요.",
      },
      {
        q: "Codex에서도 DeepSeek을 쓸 수 있나요?",
        a: "네. DeepSeek은 Responses API를 통한 Codex 설정 방법을 안내하며, 스크립트를 쓰거나 `~/.codex/config.toml`과 `~/.codex/models.json`을 직접 수정하면 돼요.",
      },
      {
        q: "Claude Code + DeepSeek과 DeepSeek Harness 중 무엇을 쓸까요?",
        a: "Claude Code의 도구와 워크플로가 마음에 든다면 그대로 두고 모델만 바꾸세요. 데스크톱 UI가 있는 DeepSeek의 플러그인 기반 앱을 원한다면 DeepSeek Harness를 써 보세요.",
      },
    ],
  },
  cta: {
    title: "DeepSeek으로 돌아가는 에이전트에게 근무 일정을 주세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 DeepSeek API 문서(Claude Code·Codex 연동, 가격)와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 DeepSeek, Anthropic 또는 OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. Claude와 Claude Code는 Anthropic의 상표이고, Codex는 OpenAI의 상표예요.",
};
