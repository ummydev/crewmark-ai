import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /use-cases/daily-seo-report; the English master is src/content/use-cases/daily-seo-report.ts.

const brief = `# 役割：SEO レポーター
定期 issue「Daily SEO report」から、毎日 18:30 に実行する。

1. Search Console、直近 7 日：表示回数、クリック数、平均掲載順位。
   クエリとページの表を読む。トップ 10 に入っているクエリ、
   表示回数が伸びているページ、表示はあるのにクリックが
   ないページを書き留める。
2. アナリティクス、直近 7 日：ユニーク訪問者数、検索からの訪問者、
   AI アシスタントからの訪問者、検索からの主なランディングページ。
3. 週の目標と比べる：表示回数 10,000、クリック 500、
   ユニーク訪問者 2,000。
4. うまくいっていることを 1 つ選び、今日それをさらに伸ばす
   （関連ページ、FAQ、内部リンク、翻訳のいずれか）。
5. レポートを issue にコメントとして投稿し、私に必要な判断を
   一覧にしてから、issue を完了にする。

ルール
- Search Console とアナリティクスへのアクセスは読み取り専用。
- 引用符付きのクエリや、長い -site: のリストが付いたクエリは無視する。
  それは人ではなく順位チェックツール。`;

const schedule = `# SEO 社員に割り当てる定期 issue（Crewmark CLI）
crewmark issues create --title "Daily SEO report" --assignee "<employee>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code で毎日の SEO 日報：AI 社員のセットアップ",
    description:
      "Claude Code や Codex に、毎日 SEO レポートを書かせましょう。Search Console とアナリティクスの数字、目標との差、うまくいっていること、それに対して実行した 1 つのこと。コピーして使える役割ブリーフ、必要なアクセス権、スケジュールの設定方法を紹介します。",
  },
  breadcrumb: "毎日の SEO 日報",
  parent: { name: "活用例", href: "/use-cases" },
  hero: {
    kicker: "活用例 · マーケティング",
    title: "Claude Code の AI 社員が書く、毎日の SEO 日報",
    lead: "毎晩、あなたの Claude Code や Codex で動く AI 社員が、Search Console とアナリティクスから直近 7 日分を取得し、目標と比べ、伸び始めたクエリとページを見つけ、それをさらに伸ばすことを 1 つ実行し、チームが働いている場所にレポートを投稿します。これは Crewmark 自身の SEO 社員が毎日回しているルーティンです。以下に、コピーして使えるブリーフ、必要なアクセス権、スケジュールへの載せ方を紹介します。",
    cta: "今すぐ始める",
    secondary: "ブリーフをコピーする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "レポートの内容",
      points: [
        "検索：直近 7 日の表示回数、クリック数、平均掲載順位と、その裏にあるクエリとページ。",
        "うまくいっていること：トップ 10 に入っているクエリ、表示回数が伸びているページ、そして表示はあるのにクリックがないページ。後者はたいてい、タイトルや内容が検索意図と合っていないことを意味します。",
        "訪問者：ユニーク訪問者数、検索エンジンからの訪問者、ChatGPT や Perplexity などの AI アシスタントからの訪問者と、そのランディングページ。",
        "目標との差：今週の数字と週の目標の比較。",
        "今日実行したことと、あなたに必要な判断。",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "例：私たち自身のレポート（2026年11月10日）",
      text: [
        "公開から数週間のサイト crewmark.ai について、Crewmark の SEO 社員が投稿したレポートの冒頭部分です。",
      ],
      headers: ["指標", "直近 7 日", "週の目標"],
      rows: [
        ["Search Console の表示回数", "537（前回のレポートの 309 から増加）", "10,000"],
        ["Search Console のクリック数", "2", "500"],
        ["ユニーク訪問者数", "93。うち検索から 16、AI アシスタントから 0", "2,000"],
        ["うまくいっていること", "「base44 superagent」が 4 位だがクリックなし。概要ページに着地していた", "-"],
        ["それに対して実行したこと", "同じ日に Base44 Superagent 専用のページを書いた", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code や Codex で毎日の SEO 日報を設定する方法",
      steps: [
        {
          title: "数字への読み取り専用のアクセスを与える",
          text: "Search Console には、読み取り専用のサービスアカウントで使う Search Console API、MCP サーバー、またはあなたがサインインした状態でエージェントが操作できるブラウザ。アナリティクスには、ツールの CLI、API、MCP サーバー。私たちの社員は PostHog の CLI を使っています。必要なのは読み取り権限だけです。",
        },
        {
          title: "役割ブリーフをコピーする",
          text: "Claude Code なら CLAUDE.md に、Codex なら AGENTS.md に書き、目標を自分のものに変えます。オープンソースの [Marketing Team Skills](/skills) には、同じ手順の seo-daily-report スキルが入っています。",
          code: brief,
        },
        {
          title: "スケジュールに載せる",
          text: "レポートを定期 issue にすれば、毎日同じ時刻に社員のもとへ戻ってきて、今日の分が終わったかどうかも一目でわかります。",
          code: schedule,
        },
        {
          title: "いつも働いている場所で読む",
          text: "レポートは issue へのコメントとして届きます。あなたに何か必要なときは、issue を「要対応」にして質問してきます。",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "レポートを行動につなげる",
      text: [
        "数字を説明するだけのレポートでは、数字は動きません。役に立つのは次に何をするかのルールで、それはブリーフに書いてあります。",
      ],
      points: [
        "トップ 10 に入っている、または伸びているクエリ：関連するロングテール（同じツールの別の使い方、「vs」、代替、エラー、プラットフォーム）を書く、FAQ を追加する、すでに訪問者のいるページからリンクする、すでにそのキーワードで検索されている言語に翻訳する。",
        "表示はあるのにクリックがない：ページが検索と合っていません。人が使っているクエリに合わせてタイトルを変えるか、そのクエリのためのページを書きましょう。",
        "50 位より下で止まっているビッグキーワード：そこに時間を使うのはやめましょう。新しいサイトはまずロングテールで勝ちます。",
        "判断と結果をログに書いておけば、翌日のレポートでうまくいったかを確かめられます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "このレポートを書く SEO 社員を雇う",
      text: [
        "レポートは SEO スペシャリストの 1 日の一部です。Crewmark は、あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つその社員に変えます。",
      ],
      steps: [
        {
          title: "職種から始める",
          text: "[AI SEO スペシャリスト](/ai-employees/seo-specialist)には、目標、毎日のルーティン、ブリーフが付いています。",
        },
        {
          title: "レポートを定期 issue として追加する",
          text: "ハートビートで起き、レポートの期限が来ていることを確認して投稿します。",
        },
        {
          title: "マーケティングのほかの仕事も見る",
          text: "マーケティングチーム向けのほかの仕事は[マーケティングのための Claude Code](/for/marketing) にあります。次の活用例は[毎週の競合ダイジェスト](/use-cases/weekly-competitor-digest)です。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code や Codex で毎日の SEO 日報を設定する" },
  mid: {
    title: "レポートとその裏の仕事を、毎日こなしてほしいですか？",
    text: "Crewmark の SEO スペシャリストはあなたの Claude Code や Codex で動き、スケジュールどおりにレポートを投稿します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Code は Google Search Console を読めますか？",
        a: "はい。サービスアカウントで使う Search Console API、Search Console 用の MCP サーバー、またはあなたがサインインした状態で操作できるブラウザを通じて読めます。アクセスは読み取り専用にしましょう。",
      },
      {
        q: "Claude Code で毎日の SEO 日報をスケジュールするには？",
        a: "Claude Code は自分では起動しないので、何かが起こしてあげる必要があります。定期タスクかハートビートを使いましょう。[Claude Code を能動的に動かす方法](/proactive-claude-code)をご覧ください。または、定期 issue を持つ Crewmark の社員として動かします。",
      },
      {
        q: "毎日の SEO 日報には何を含めるべきですか？",
        a: "直近 7 日の表示回数、クリック数、掲載順位と、その裏にあるクエリとページ。トップ 10 に入っているものや伸びているもの。検索と AI アシスタントからの訪問者。目標との差。今日実行したこと。そして必要な判断です。",
      },
      {
        q: "Codex でも使えますか？",
        a: "はい。同じブリーフを AGENTS.md に書くだけで、必要なアクセス権も同じです。",
      },
      {
        q: "なぜ 1 日ではなく 7 日分を見るのですか？",
        a: "Search Console のデータは 1〜2 日遅れて反映され、1 日単位ではぶれが大きいからです。7 日分で傾向がわかり、毎日のレポートはそれを毎日読むだけです。",
      },
    ],
  },
  cta: {
    title: "SEO レポートと、それが求める仕事を毎日。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Crewmark 自身の SEO 社員が毎日回しているルーティンをもとに書きました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、Google、PostHog とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
