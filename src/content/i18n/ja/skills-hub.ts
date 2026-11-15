import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "マーケティングとデザインの Claude スキル | Crewmark AI",
    description:
      "AI マーケティングチームが毎日使っている、無料・オープンソースの Claude Code スキル。トレンドキーワード、SEO ページ、比較ページ、インデックス登録、AI 検索、日報に加えて、おすすめのデザインスキルも比較しています。",
  },
  breadcrumb: "Claude スキル",
  hero: {
    kicker: "Claude スキル",
    title: "AI マーケティングチームが作った Claude スキル",
    lead: "Marketing Team Skills は、Claude Code、Codex、Cursor で使える無料・オープンソースの Agent Skills です。中身は、Crewmark 自身の AI SEO スペシャリストが毎日こなしている手順そのもの。キーワードを見つけ、ページを書いて翻訳し、インデックスさせ、何が動いたかを報告します。各スキルは SKILL.md で、そのまま動くコマンドと、私たちがつまずいた点をまとめています。以下では、中身、インストール方法、そして仕事別のおすすめスキルガイドを紹介します。",
    cta: "今すぐ始める",
    secondary: "スキルをインストール",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Marketing Team Skills の中身",
      text: ["バージョン 0.1 はサイト内 SEO をカバーしています。サイト外 SEO、UGC 動画、SNS でのアウトリーチは今後追加します。"],
      headers: ["スキル", "できること"],
      rows: [
        ["trend-keywords", "ローンチ、サービス終了、買収の直後に検索され始めた語句を見つけ、その日のうちにページを公開"],
        ["keyword-research", "新しいサイトでも上位を狙えるキーワードを選び、キーワードマップを管理"],
        ["seo-page", "1 キーワードにつき 1 ページ：定義を先に、続いて手順、表、FAQ、出典"],
        ["competitor-pages", "各製品の公式ドキュメントをもとに、代替ページと比較（vs）ページを作成"],
        ["programmatic-pages", "テンプレートで大量のページを作りつつ、中身の薄いページにしない"],
        ["multilingual-seo", "各ページを複数の言語で、hreflang 付きで公開"],
        ["index-push", "ページをクロールさせる：IndexNow、Search Console、Bing"],
        ["ai-search", "ChatGPT、Claude、Perplexity に引用されやすいサイトにする"],
        ["seo-daily-report", "目標に対する一日の終わりの日報を書く"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "スキルのインストール方法",
      steps: [
        {
          title: "エージェントに追加する",
          text: "skills CLI で Claude Code、Codex、Cursor などのエージェントにインストールできます。Claude Code のプラグインとして入れることもできます。",
          code: install,
        },
        {
          title: "役割ブリーフをコピーする",
          text: "`roles/seo-specialist/CLAUDE.md`（Codex なら `AGENTS.md`）をサイトのリポジトリに置いて目標を書き込めば、毎回のセッションが日々のルーティンを把握できます。[AI SEO スペシャリスト](/ai-employees/seo-specialist)もご覧ください。",
        },
        {
          title: "毎日実行する",
          text: "`/loop` やスケジュールタスクを使うか、ハートビートで動く AI 社員として実行します。[Claude Code を能動的にする方法](/proactive-claude-code)もご覧ください。",
        },
      ],
      source: { label: "出典：GitHub の Marketing Team Skills", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "仕事別のおすすめ Claude スキル",
      text: ["仕事の種類ごとに、インストールする価値のあるスキルを各プロジェクトのリポジトリをもとに比較しています。"],
      points: [
        "[Web サイト・UI デザインにおすすめの Claude スキル](/skills/website-design)：Anthropic の frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop など。",
        "SEO エージェントを一から作るなら [AI SEO エージェント：Claude Code での作り方](/blog/ai-seo-agent)、スキル全般については [Claude Code のスキル](/blog/claude-code-skills) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スキルはセッションのために、社員は仕事のために",
      text: [
        "スキルはセッションを特定の作業に強くします。Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode を、職種・目標・勤務時間を持つ AI 社員に変えます。社員はハートビートで起き、ボードから次の issue を取り、あなたがインストールしたスキルを使います。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[SEO スペシャリスト](/ai-employees/seo-specialist)、[グロースマーケター](/ai-employees/marketing-agent)、[UI デザイナー](/ai-employees/ui-designer)などがあります。",
        },
        {
          title: "プロジェクトをつなぐ",
          text: "社員はそれぞれ専用のセッションとチェックアウトで、すでに契約中のサブスクリプションのまま働きます。[料金](/pricing)もご覧ください。",
        },
        {
          title: "見張らずに、レビューするだけ",
          text: "作業しながらコメントを残し、あなたの承認リストにあることは実行前に確認してきます。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Marketing Team Skills をインストールする" },
  mid: {
    title: "これらのスキルを、毎日代わりに回してほしいですか？",
    text: "Crewmark の AI 社員は、契約中の Claude Code や Codex のプランのまま、ハートビートでこれらのスキルを使います。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude スキルのよくある質問",
    items: [
      {
        q: "Claude スキルとは何ですか？",
        a: "SKILL.md ファイルを含むフォルダで、Claude Code、Claude.ai などのエージェントに特定の作業のやり方を教えます。作業でスキル全体が必要になるまでは、短い説明文だけが読み込まれます。",
      },
      {
        q: "Marketing Team Skills は無料ですか？",
        a: "はい。MIT ライセンスのオープンソースとして、GitHub の ummydev/marketing-team-skills で公開しています。",
      },
      {
        q: "Codex や Cursor でも使えますか？",
        a: "はい。skills CLI で Codex、Cursor など Agent Skills に対応したエージェントにインストールでき、Codex 用のプラグインマニフェストも用意しています。",
      },
      {
        q: "ほかのマーケティングスキルと何が違いますか？",
        a: "網羅的な百科事典ではなく、実務の手順書です。各スキルは、AI SEO 社員が本番のサイトで実行している手順を一歩ずつまとめたもので、スクリプトと私たちがつまずいた点も含んでいます。coreyhaines31/marketingskills のような幅広いライブラリと組み合わせるのがおすすめです。",
      },
    ],
  },
  cta: {
    title: "スキルを書いたチームを、そのまま雇いましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "スキル一覧は 2026年11月8日時点の Marketing Team Skills v0.1 のものです。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude、Claude Code、Codex は各所有者の商標です。",
};
