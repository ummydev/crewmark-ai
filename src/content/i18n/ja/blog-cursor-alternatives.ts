import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor の代替ツールおすすめ10選（2026） | Crewmark AI",
    description:
      "SpaceX 傘下になった Cursor は Grok 中心のプランに移行しました。Claude Code、Codex、GitHub Copilot、Devin Desktop（Windsurf）、Zed、Cline、Kilo Code、OpenCode、Antigravity、Junie の10の代替ツールを、料金と無料プランつきで比較します。",
  },
  breadcrumb: "Cursor の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · AI コーディングツール",
    title: "2026年版 Cursor の代替ツールおすすめ",
    lead: "Cursor は2026年8月に SpaceX の一員となり、プランは Grok を中心に組み直されました。$8 の Plus プランは Grok モデルのみで、Claude、GPT、Gemini は $30 のプラン以上で API の定価で別途課金されます。契約したときの想定と違うなら、よい代替ツールがあります。すでに払っている購読プランに含まれるエージェント、独自の AI を備えたエディタ、自分の API キーで使えるオープンソースのツールです。ここでは2026年11月6日時点で、10のツールをどんなツールか、無料プラン、料金、モデルの観点で比較します。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Cursor の代替ツール比較",
      text: [
        "最低価格は、各ベンダーのページに掲載されている最も安い個人向け有料プランの月額（米ドル）です。「Claude モデル」は、プランに含まれるか自分のキーで使うかを問わず、Anthropic のモデルを使えるかどうかを示します。",
      ],
      headers: ["ツール", "種類", "無料の選択肢", "有料プラン", "Claude モデル", "オープンソース"],
      rows: [
        ["Claude Code", "エージェント：ターミナル、IDE、デスクトップ、ウェブ", "なし", "$20（Claude Pro）", "含まれる", "いいえ"],
        ["OpenAI Codex", "エージェント：CLI、IDE、デスクトップ、クラウド", "あり（ChatGPT Free）", "$8（ChatGPT Go）", "なし", "CLI は Apache-2.0"],
        ["GitHub Copilot", "主要 IDE 向け拡張、CLI", "あり（月2,000回の補完）", "$10（Pro）", "あり。Opus は Pro+（$39）以上", "いいえ"],
        ["Devin Desktop（旧 Windsurf）", "IDE", "あり", "$20（Pro）", "あり", "いいえ"],
        ["Zed", "ネイティブエディタ", "あり（自分のキーで）", "$10（Pro）", "自分のキーか外部エージェントで", "はい"],
        ["Cline", "VS Code 拡張と CLI", "無料。モデルの利用料のみ", "個人向けプランなし", "自分のキーで", "Apache-2.0"],
        ["Kilo Code", "VS Code・JetBrains 拡張、CLI", "あり", "$19（Kilo Pass Starter）", "ゲートウェイ経由か自分のキーで", "MIT"],
        ["OpenCode", "ターミナルエージェント、デスクトップ、IDE", "あり", "記載なし", "自分のキーで。Copilot や ChatGPT でサインイン可", "MIT"],
        ["Google Antigravity", "エージェント型 IDE、CLI", "あり", "Business は1席 $30 から", "有料プランで", "いいえ"],
        ["JetBrains Junie", "JetBrains IDE 内のエージェント、CLI", "あり（Junie Lite）", "AI Pro、表示価格 $8.33", "あり、自分のキーも可", "いいえ"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cursor の代替ツールの選び方",
      steps: [
        {
          title: "すでに払っている購読プランから考える",
          text: "Claude Pro や Max には Claude Code が、ChatGPT のどのプランにも Codex が含まれ、多くの会社はすでに GitHub Copilot を契約しています。払っているものを使うほうが、新しいツールと API の請求を足すよりたいてい安く済みます。",
        },
        {
          title: "エディタかエージェントかを決める",
          text: "Cursor のような使い心地（インライン編集と Tab 補完のあるエディタ）がほしいなら、Devin Desktop、Zed、VS Code の Copilot、Antigravity を見てみましょう。主にエージェントにタスクを任せるなら、Claude Code、Codex、OpenCode はどのターミナルやエディタからでも使えます。",
        },
        {
          title: "無料やオープンソースがよいなら",
          text: "Cline、Kilo Code、OpenCode、Zed はオープンソースで、自分の API キーがあれば無料で使えます。モデルのプロバイダーに使った分だけ払えば済みます。",
        },
        {
          title: "モデルがどこから来るかを確認する",
          text: "Claude を毎日使いたいなら、プランに含まれるツール（Claude Code、Copilot、Devin Desktop、Junie）を選べば、トークン課金で思わぬ請求が来るのを避けられます。自分のキーを使うツールなら、どのモデルでも定価で使えます。",
        },
        {
          title: "ルールを持っていく",
          text: "これらの多くは AGENTS.md を読むので、`.cursor/rules` から移るのはほぼルールを1つのファイルにコピーするだけです。1つのファイルを複数のエージェントで使う方法は [CLAUDE.md ガイド](/blog/claude-md)をご覧ください。",
        },
      ],
      source: { label: "出典：GitHub Copilot のプランと各ベンダーのサイト", href: copilot },
    },
    {
      kind: "text",
      title: "各代替ツールのメモ",
      points: [
        "Claude Code：Anthropic のエージェント。Claude Pro（$20、年払いは $17）、Max（$100）、Ultra（$200）に含まれ、API キーでも動きます。Cursor との比較は [Claude Code と Cursor の比較](/blog/claude-code-vs-cursor)をご覧ください。",
        "OpenAI Codex：ChatGPT のすべてのプランに含まれます。Free（GPT-6 Luna）、Go（$8）から Plus（$20）、Pro（$100 から）まで。[Claude Code と Codex の比較](/blog/claude-code-vs-codex)をご覧ください。",
        "GitHub Copilot：Free、Pro（$10）、Pro+（$39）、Max（$100）。VS Code、Visual Studio、JetBrains、Xcode、Neovim、Eclipse、Zed で動き、Claude、GPT、Gemini などのモデルを使えます。",
        "Devin Desktop：Cognition による Windsurf の新しい名前で、windsurf.com は現在こちらにリダイレクトされます。Free、Pro（$20）、Max（$200）。",
        "Zed：macOS、Windows、Linux 向けの高速なネイティブエディタ。自分のキーや Claude Code、Codex などの外部エージェントなら無料で、ホスト型モデルは $10 の Pro。",
        "Cline：オープンソースの VS Code 拡張と CLI。無料で、自分のキーで推論の費用だけを払います。",
        "Kilo Code：オープンソース（MIT）で、現在は Anaconda 傘下。自分のキーや無料モデルなら無料、Kilo Pass は $19 から。",
        "OpenCode：75以上のモデルプロバイダーに対応するオープンソースのターミナルエージェント。無料で、既存の Copilot や ChatGPT の購読でサインインできます。",
        "Google Antigravity：Google のエージェント型 IDE と CLI。個人は無料で、有料プランでは Gemini 4 Argon と Claude モデルが加わります。",
        "JetBrains Junie：JetBrains の IDE 内と CLI で動く JetBrains のコーディングエージェント。無料の Lite と、AI Pro、Ultimate のプランがあります。",
        "対象外：Roo Code（GitHub リポジトリがアーカイブ済み）、Gemini CLI（個人利用は2026年6月に Antigravity CLI へ移行）、Aider（2025年8月以降リリースなし）。",
      ],
    },
    {
      kind: "text",
      title: "Cursor で何が変わったか",
      text: [
        "Cursor は2026年8月14日、SpaceX による買収が完了したと発表しました。料金ページには現在、Free、Plus（$8、Grok モデルのみ）、Premium（$30、クラウドエージェント、オートメーション、コードレビュー付きで、他社モデルは API の定価で従量課金）、Super（$100）、Ultra（$200）が並び、タイムライン広告の削減などの X の機能も付いています。利用枠は Grok と共通で、毎週リセットされます。Cursor を使い続ける場合も、その中で Claude Code 拡張や CLI を Claude のプランのまま動かせます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "ツールを乗り換えるなら、新しいツールに仕事を与えよう。",
      text: [
        "どのエージェントに移っても、あなたの次のプロンプトを待っています。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。いま払っている購読プランのままです。",
      ],
      steps: [
        {
          title: "職種と目標を選ぶ",
          text: "ソフトウェアエンジニア、レビュアー、SEO ライター。どの社員にも数字で書いた目標があります。[AI 社員とは](/ai-employees)をお読みください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに起き、次の issue を取ります。[Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "複数を同時に動かす",
          text: "それぞれに専用の worktree と職種を与えましょう。[Claude Code のオーケストレーションツール](/blog/claude-code-orchestration-tools)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cursor の代替ツールを選ぶ" },
  mid: {
    title: "Cursor から Claude Code、Codex、OpenCode に乗り換えますか？",
    text: "Crewmark はそれらを AI 社員として動かします。社員はハートビートで起き、次の issue を自分で取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Cursor の代替ツールのよくある質問",
    items: [
      {
        q: "Cursor の代替ツールでいちばんおすすめは？",
        a: "Claude のプランがあれば Claude Code、ChatGPT なら Codex。Cursor のような使い心地のエディタなら Devin Desktop（旧 Windsurf）か VS Code の Copilot。無料でオープンソースなら、自分のキーで Cline、Kilo Code、OpenCode、Zed です。",
      },
      {
        q: "無料の Cursor 代替ツールはある？",
        a: "あります。Cline、Kilo Code、OpenCode、Zed は自分の API キーがあれば無料で、Copilot には月2,000回の補完が付く無料プランがあり、Codex は ChatGPT Free で使え、Antigravity と Devin Desktop にも無料プランがあります。",
      },
      {
        q: "オープンソースの Cursor 代替ツールは？",
        a: "Cline（Apache-2.0）、Kilo Code（MIT）、OpenCode（MIT）、Zed はオープンソースです。Codex CLI もオープンソース（Apache-2.0）です。",
      },
      {
        q: "Cursor の料金はなぜ変わった？",
        a: "SpaceX が Cursor を買収（2026年8月14日発表）した後、プランは Grok モデルと X をセットにした構成に移りました。$8 の Plus は Grok のみで、Claude などの他社モデルは Premium（$30）以上で API の定価で別途課金されます。",
      },
      {
        q: "Windsurf はどうなった？",
        a: "Windsurf は現在 Devin Desktop という名前で、Cognition が開発しています。windsurf.com は devin.ai/desktop にリダイレクトされます。",
      },
      {
        q: "いちばん安い Cursor の代替ツールは？",
        a: "自分のキーを使うツール（Cline、OpenCode、Kilo Code、Zed）はモデルの利用料以外かかりません。プランでは、Codex は ChatGPT Go で $8 から、Copilot Pro は $10。Claude が含まれるものなら Claude Pro の $20 です。",
      },
      {
        q: "Cursor のルールは引き継げる？",
        a: "ほぼ引き継げます。AGENTS.md に書けば Codex、Copilot、OpenCode などが読みます。Claude Code は CLAUDE.md 内の `@AGENTS.md` インポートで読み込みます。",
      },
    ],
  },
  cta: {
    title: "新しいコーディングエージェントに、同じ購読プランのまま仕事を。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に cursor.com と、各代替ツールの公式サイト、料金ページ、GitHub リポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Cursor、SpaceX、ここに掲載したいずれのベンダーとも提携しておらず、その承認も受けていません。製品名はそれぞれの所有者の商標です。",
};
