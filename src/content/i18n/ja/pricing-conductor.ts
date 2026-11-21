import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/conductor; the English master is src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor の料金：無料の Mac アプリ、クラウドプラン、Meta 合流",
    description:
      "Conductor は無料で使え、モデルの利用料は各エージェントの提供元が請求。2026年11月4日から新規登録は停止され、Conductor Cloud は終了に向かっています。",
  },
  breadcrumb: "Conductor の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · Conductor",
    title: "Conductor の料金：無料の Mac アプリ、クラウドプラン、2026年11月4日の変更点",
    lead: "「Conductor は無料で使えます」（\"Conductor is free to use.\"）。モデルの利用料を請求したり再販したりはせず、Claude Code、Codex、OpenCode、Cursor は、あなた自身のサブスクリプションや API キーで動きます。クラウドのワークスペースには Pro、Team、Enterprise のいずれかのプランが必要でしたが、現在は価格が掲載されていません。2026年11月4日、Conductor は Meta への合流を発表し、新規登録とダウンロードを締め切りました。支払うもの、変わったこと、そして Vibe Kanban、Claude Squad、Cursor Projects、Crewmark との価格比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "変更点を見る",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Conductor のプランと料金",
      text: [
        "conductor.build とそのドキュメントをもとに、2026年11月13日に確認しました。/pricing のページは現在ホームページにリダイレクトされ、サイトのどこにもプランの価格は載っていません。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "Conductor（Mac アプリ）",
          "無料で利用可能",
          "Claude Code、Codex、OpenCode（同梱）と Cursor Agent を、それぞれ専用の git worktree で並べて実行。diff のレビュー、チェック、プルリクエスト、マージ",
        ],
        [
          "Pro",
          "価格の掲載なし。2026年11月4日以降、Pro ユーザーは Pro 機能を無料で使い続けられる",
          "クラウドのワークスペースと Routines（スケジュールまたは GitHub をきっかけに動くエージェントの実行）",
        ],
        ["Team（招待制）", "価格の掲載なし", "クラウドのワークスペースと Routines"],
        ["Enterprise", "価格の掲載なし", "クラウドのワークスペース"],
        [
          "モデルの利用料",
          "各エージェントの提供元が請求",
          "既存のサブスクリプション（たとえば Claude Pro や Max、ChatGPT）または API キー",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Conductor を使うのに実際にかかる費用",
      points: [
        "エージェントの提供元：Conductor はモデルの利用料を請求も再販もしません。各エージェントは、その提供元のアカウントか API キーを通じて課金されます。Cursor Agent は Cursor API 経由で動きます。",
        "Mac：Conductor は macOS 専用で、「Windows と Linux にはまだ対応していません」（\"not available for Windows or Linux yet.\"）。エージェントはあなたのマシン上で直接、あなたのユーザーアカウントの権限で、サンドボックスなしで動きます。",
        "アプリ自体は無料：ローカルアプリは無料で使えます。",
        "クラウドのワークスペースには Pro、Team、Enterprise のプランが必要でした：2026年11月4日以降、無料ユーザーはアップグレードできず、Pro ユーザーは Pro 機能を無料で使い続けられ、有効なサブスクリプションには返金があります。",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "2026年11月4日の変更点",
      text: [
        "Conductor は Meta への合流を発表しました。サイトのフッターは現在「Meta の Conductor、© 2026 Meta」（\"Conductor from Meta, © 2026 Meta.\"）となっています。使っている人、使おうとしていた人にとって重要な日付は次のとおりです。",
      ],
      points: [
        "2026年11月4日：新規登録とダウンロードを締め切り。無料ユーザーはアップグレードできなくなり、Pro ユーザーは Pro 機能を無料で使い続けられ、有効なサブスクリプションには返金があります。",
        "2026年11月13日：Conductor Cloud が読み取り専用になります。",
        "2026年11月20日：Conductor Cloud が終了し、クラウドのユーザーデータの削除が始まります。",
        "2027年初めまで：ローカルアプリは新しいモデルへの対応と重大なバグ修正を受け、その後終了に向かいます。アプリの終了時に、すべてのユーザーデータが削除されます。",
        "移行先を探しているなら、[Conductor の代替ツール](/blog/conductor-alternatives) をご覧ください。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Conductor と類似ツールの料金比較",
      text: [
        "各製品のサイトに載っている価格で、2026年11月13日に確認しました。どれを使う場合も、下のプランに含まれていない限り、動かすコーディングエージェントやモデルの料金が別途かかります。",
        "並べて比較：[Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor)、[Claude Squad vs Conductor](/compare/claude-squad-vs-conductor)。ほかの選択肢は [Conductor の代替ツール](/blog/conductor-alternatives) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        [
          "Conductor",
          "無料で利用可能。クラウドプランの価格は掲載なし",
          "あり。ただし2026年11月4日から新規登録とダウンロードは停止",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "ローカルアプリは無料。bloop の2026年4月10日の事業終了の投稿によると、サブスクリプションは終了",
          "あり：オープンソース（Apache-2.0）、コミュニティがメンテナンス",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "無料。有料プランの掲載なし",
          "あり：オープンソース（AGPL-3.0）",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium 月 $30、または年 $300",
          "なし：Free、Plus（月 $8）、旧 Hobby では使えない",
        ],
        [
          "[Crewmark](/pricing)",
          "無料。月 $5 の Pro と月 $10 の Team は近日公開",
          "あり：1 プロジェクト、AI 社員 3 人まで、利用者 1 人",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Conductor はエージェントを並べて動かす。Crewmark はエージェントに仕事とボードを与える。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。`crewmark` CLI は macOS、Linux、Windows で動き、エージェントはすでにお支払いの Claude や ChatGPT のサブスクリプションを使います。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees) から、たとえばソフトウェアエンジニアを選び、目標を数字で決めます。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) と、エージェントがそれを使って何をするかは [Claude Code の活用例](/use-cases/claude-code) と [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "Conductor からの移行をお考えですか？",
    text: "Crewmark は、macOS、Linux、Windows のどれでも、あなたの Claude Code や Codex に職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Conductor の料金に関するよくある質問",
    items: [
      {
        q: "Conductor は無料ですか？",
        a: "はい。「Conductor は無料で使えます」（\"Conductor is free to use\"）とあり、モデルの利用料は各エージェントの提供元が請求します。ただし、2026年11月4日から新規登録とダウンロードは停止されています。",
      },
      {
        q: "Conductor の料金はいくらですか？",
        a: "Mac アプリは無料です。クラウドのワークスペースには Pro、Team（招待制）、Enterprise のいずれかのプランが必要でしたが、現在これらのプランの価格は掲載されておらず、/pricing のページはホームページにリダイレクトされます。",
      },
      {
        q: "Conductor はモデルの利用に手数料を取りますか？",
        a: "いいえ。Conductor はモデルの利用料を請求も再販もしません。Claude Code、Codex、OpenCode、Cursor Agent は、Claude Pro や Max、ChatGPT などあなた自身のサブスクリプションか、API キーを使います。",
      },
      {
        q: "Conductor はオープンソースですか？それとも購入するライセンスがありますか？",
        a: "どちらでもありません。Conductor はオープンソースではなく（ソースリポジトリもライセンスも公開されていません）、アプリは無料で使えるので、ライセンスの価格もありません。",
      },
      {
        q: "Conductor Pro のサブスクリプションはどうなりますか？",
        a: "2026年11月4日以降、Pro ユーザーは Pro 機能を無料で使い続けられ、有効なサブスクリプションには返金があります。Conductor Cloud は11月13日に読み取り専用になり、2026年11月20日に終了します。",
      },
      {
        q: "Conductor のアプリはいつまで使えますか？",
        a: "ローカルアプリは2027年初めまで新しいモデルへの対応と重大なバグ修正を受け、その後終了に向かいます。終了時には、すべてのユーザーデータが削除されます。[Conductor の代替ツール](/blog/conductor-alternatives) をご覧ください。",
      },
    ],
  },
  cta: {
    title: "Conductor のあとも、エージェントを働かせ続けましょう。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、conductor.build、そのドキュメント、変更履歴、発表、比較した各製品の料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Conductor、Meta、このページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
