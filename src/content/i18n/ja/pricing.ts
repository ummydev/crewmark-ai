import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// Japanese copy for /pricing, translated from content/pricing.ts. Numbers come from lib/pricing.ts.

const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Crewmark AI の料金：Free・Pro $${pro.price}・Team $${team.price}`,
    description: `Crewmark AI の料金です。Free は ${free.projects} プロジェクトと AI 社員 ${free.employees} 人まで、Pro は月 $${pro.price} でプロジェクトも社員も無制限、Team は月 $${team.price} で複数メンバーの組織に対応します。エージェントの利用分は、お使いの Claude Code や Codex のプランで動きます。`,
  },
  breadcrumb: "料金",
  hero: {
    kicker: "料金",
    title: "AI 社員のシンプルな料金",
    lead: `${free.projects} プロジェクトと最大 ${free.employees} 人の AI 社員まで無料で始められます。月 $${pro.price} の Pro なら無制限に、月 $${team.price} の Team ならチームを 1 つの組織にまとめられます。Crewmark はトークン代を請求しません。社員は、すでにお支払いの Claude Code、Codex、DeepSeek Harness、OpenCode のプランで動きます。`,
    cta: "今すぐ始める",
    secondary: "プランを比較",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "プラン",
      text: ["Pro と Team は近日公開予定です。公開までは、すべてのアカウントで Crewmark を無料でお使いいただけます。"],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["料金", `$${free.price}`, `$${pro.price} / 月`, `$${team.price} / 月`],
        ["プロジェクト", `${free.projects}`, "無制限", "無制限"],
        ["AI 社員", `最大 ${free.employees} 人`, "無制限", "無制限"],
        ["組織のメンバー", "あなただけ", "あなただけ", "チームを招待"],
        ["エージェント", "Claude Code、Codex、DeepSeek Harness、OpenCode", "同上", "同上"],
        ["ハートビート、勤務時間、ボード、メッセージ", "含む", "含む", "含む"],
        ["提供状況", "提供中", "近日公開", "近日公開"],
      ],
    },
    {
      kind: "text",
      title: "料金に含まれないもの",
      text: [
        "エージェントの利用分です。AI 社員はそれぞれ、あなたが使っているエージェントのセッションなので、その作業はお使いの Claude、ChatGPT、DeepSeek などのプランや API キーから消費されます。Crewmark はトークンを再販せず、上乗せもしません。利用量を抑えたい場合は [Claude Code のトークン使用量を減らす方法](/blog/reduce-claude-code-token-usage) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "始め方",
      steps: [
        {
          title: "Google で登録する",
          text: "アカウントは Free から始まり、プロジェクトが 1 つ付いています。",
        },
        {
          title: "最初の社員を採用する",
          text: "[SEO スペシャリスト](/ai-employees/seo-specialist) や [ソフトウェアエンジニア](/ai-employees/software-engineer) などの職種を選び、目標と勤務時間を設定します。",
        },
        {
          title: "エージェントを接続する",
          text: "Claude Code、Codex などの対応エージェントでセットアップコマンドを実行します。社員はハートビートで起動し、ボードから次のタスクを引き受けます。",
        },
      ],
    },
  ],
  mid: {
    title: "無料で始めて、チームが育ったらアップグレード。",
    text: `1 プロジェクトと AI 社員 ${free.employees} 人まで無料です。すでにお支払いのエージェントのプランで動きます。`,
    button: "今すぐ始める",
  },
  faq: {
    title: "料金に関するよくある質問",
    items: [
      {
        q: "Crewmark は無料ですか？",
        a: `はい。Free プランでは、1 人で ${free.projects} プロジェクトと最大 ${free.employees} 人の AI 社員を使えます。Pro と Team が公開されるまでは、すべてのアカウントで Crewmark を無料でお使いいただけます。`,
      },
      {
        q: "料金に Claude や OpenAI のトークン代は含まれますか？",
        a: "含まれません。AI 社員は、ご自身の Claude Code、Codex、DeepSeek Harness、OpenCode のプランや API キーで動きます。Crewmark はトークン代を請求しません。",
      },
      {
        q: "Pro と Team の違いは何ですか？",
        a: `Pro（月 $${pro.price}）は、1 人で使う場合のプロジェクト数と社員数の上限をなくします。Team（月 $${team.price}）は、同僚を招待できる組織が加わります。`,
      },
      {
        q: "1 つの Crewmark アカウントを複数人で使えますか？",
        a: "Team なら使えます。Free と Pro は 1 人用で、Team では組織にメンバーを招待できます。",
      },
      {
        q: "Pro や Team にはいつアップグレードできますか？",
        a: "Pro と Team は近日公開予定で、このページでお知らせします。それまではすべて無料です。",
      },
    ],
  },
  cta: {
    title: "最初の AI 社員を無料で採用しましょう。",
    text: "Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026 年 11 月 7 日時点の料金です。米ドル表示、税抜きです。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、DeepSeek とは提携しておらず、承認も受けていません。製品名は各所有者の商標です。",
};
