import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Korean copy for /pricing, translated from content/pricing.ts. Numbers come from lib/pricing.ts.

const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Crewmark AI 요금: Free, Pro $${pro.price}, Team $${team.price}`,
    description: `Crewmark AI 요금: Free는 프로젝트 ${free.projects}개와 AI 직원 ${free.employees}명, Pro는 월 $${pro.price}에 프로젝트와 직원 무제한, Team은 월 $${team.price}에 여러 멤버가 함께 쓰는 조직을 제공해요. 에이전트 사용량은 내 Claude Code나 Codex 요금제로 처리돼요.`,
  },
  breadcrumb: "요금",
  hero: {
    kicker: "요금",
    title: "AI 직원을 위한 간단한 요금제",
    lead: `프로젝트 ${free.projects}개와 AI 직원 최대 ${free.employees}명으로 무료로 시작하세요. 월 $${pro.price}인 Pro로 무제한으로 쓰거나, 월 $${team.price}인 Team으로 팀을 하나의 조직에 모을 수 있어요. Crewmark는 토큰 비용을 청구하지 않아요. 직원은 이미 결제하고 있는 Claude Code, Codex, DeepSeek Harness, OpenCode 요금제로 일해요.`,
    cta: "시작하기",
    secondary: "요금제 비교",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "요금제",
      text: ["Pro와 Team은 곧 출시돼요. 출시 전까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요."],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["가격", `$${free.price}`, `$${pro.price} / 월`, `$${team.price} / 월`],
        ["프로젝트", `${free.projects}`, "무제한", "무제한"],
        ["AI 직원", `최대 ${free.employees}명`, "무제한", "무제한"],
        ["조직 인원", "나만", "나만", "팀원 초대"],
        ["에이전트", "Claude Code, Codex, DeepSeek Harness, OpenCode", "동일", "동일"],
        ["하트비트, 근무 시간, 보드, 메시지", "포함", "포함", "포함"],
        ["이용 가능 여부", "지금 이용 가능", "출시 예정", "출시 예정"],
      ],
    },
    {
      kind: "text",
      title: "요금에 포함되지 않는 것",
      text: [
        "에이전트 사용량이에요. AI 직원 한 명 한 명은 이미 쓰고 있는 에이전트의 세션이라서, 그 작업은 내 Claude, ChatGPT, DeepSeek 등의 요금제나 API 키에서 차감돼요. Crewmark는 토큰을 재판매하지 않고 마진도 붙이지 않아요. 사용량을 관리하려면 [Claude Code 토큰 사용량 줄이는 방법](/blog/reduce-claude-code-token-usage)을 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "시작하는 방법",
      steps: [
        {
          title: "Google로 가입하세요",
          text: "계정은 프로젝트 하나가 있는 Free로 시작해요.",
        },
        {
          title: "첫 직원을 채용하세요",
          text: "[SEO 전문가](/ai-employees/seo-specialist)나 [소프트웨어 엔지니어](/ai-employees/software-engineer) 같은 역할을 고르고, 목표와 근무 시간을 정해 주세요.",
        },
        {
          title: "에이전트를 연결하세요",
          text: "Claude Code, Codex 또는 지원되는 다른 에이전트에서 설정 명령을 실행하세요. 직원은 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가요.",
        },
      ],
    },
  ],
  mid: {
    title: "무료로 시작하고, 팀이 커지면 업그레이드하세요.",
    text: `프로젝트 하나와 AI 직원 ${free.employees}명은 무료예요. 이미 결제하고 있는 에이전트 요금제로 일해요.`,
    button: "시작하기",
  },
  faq: {
    title: "요금 FAQ",
    items: [
      {
        q: "Crewmark는 무료인가요?",
        a: `네. Free 요금제는 한 사람에게 프로젝트 ${free.projects}개와 AI 직원 최대 ${free.employees}명을 제공해요. Pro와 Team이 출시되기 전까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요.`,
      },
      {
        q: "요금에 Claude나 OpenAI 토큰 비용이 포함되나요?",
        a: "아니요. AI 직원은 내 Claude Code, Codex, DeepSeek Harness, OpenCode 요금제나 API 키로 일해요. Crewmark는 토큰 비용을 청구하지 않아요.",
      },
      {
        q: "Pro와 Team은 뭐가 다른가요?",
        a: `Pro(월 $${pro.price})는 한 사람이 쓰는 프로젝트와 직원 수 제한을 없애요. Team(월 $${team.price})은 동료를 초대할 수 있는 조직이 추가돼요.`,
      },
      {
        q: "여러 사람이 Crewmark 계정 하나를 같이 쓸 수 있나요?",
        a: "Team에서는 가능해요. Free와 Pro는 한 사람용이고, Team에서는 조직에 멤버를 초대할 수 있어요.",
      },
      {
        q: "Pro나 Team으로는 언제 업그레이드할 수 있나요?",
        a: "Pro와 Team은 곧 출시되고, 이 페이지에서 알려 드릴게요. 그때까지는 모든 기능이 무료예요.",
      },
    ],
  },
  cta: {
    title: "첫 AI 직원을 무료로 채용하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일 기준 요금이며, 미국 달러 기준이고 세금은 별도예요.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, DeepSeek와 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
