import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /use-cases/sentry-error-triage; the English master is src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code：Sentry のホスト型 MCP サーバーを追加し、OAuth でサインイン
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex：mcp-remote ブリッジ経由で
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# 役割：エラートリアージ
定期 issue「Sentry triage」から、平日の 9:00 と 14:00 に実行する。

1. Sentry で、前回の実行以降に本番環境で初めて発生した、または再発した
   未解決の issue を一覧にする。
2. それぞれについて、ボードに既存の issue があるか確認する（Sentry の
   issue ID で検索）。あれば、新しい発生件数をコメントで追加する。
3. なければ issue を作成する：エラーにもとづくタイトル、影響を受けた
   ユーザー数とイベント数、初回と最後の発生日時、上位のスタックフレーム、
   発生し始めたリリース、そして考えられる原因（推測であると明記）。
4. 優先度：登録、支払い、データを妨げるものは Urgent。セッションの 1% 超に
   影響するものは High。それ以外は Medium。
5. 修正が小さく明らかなら、それを次の issue として取り、テスト付きで
   プルリクエストを作成する。マージはしない。
6. Sentry で自分から resolve、ignore、削除は絶対にしない。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code や Codex で Sentry のエラーを毎日トリアージ",
    description:
      "Claude Code や Codex の AI 社員に、新しい Sentry のエラーを 1 日 2 回読ませ、スタック、影響、考えられる原因付きでボードに起票させ、小さなものは修正のプルリクエストまで作らせましょう。Sentry MCP のセットアップと、コピーして使える役割ブリーフを紹介します。",
  },
  breadcrumb: "Sentry のエラートリアージ",
  parent: { name: "活用例", href: "/use-cases" },
  hero: {
    kicker: "活用例 · エンジニアリング",
    title: "Claude Code や Codex の AI 社員による Sentry のエラートリアージ",
    lead: "Sentry の新しいエラーは、誰かが読むより速くたまっていきます。あなたの Claude Code や Codex で動く AI 社員なら、スケジュールに沿って Sentry を確認し、すでにボードにあるものは飛ばし、新しいエラーをスタックトレース、影響を受けたユーザー、考えられる原因付きで issue として起票し、小さな修正は自分で引き受けてレビュー用のプルリクエストを作成できます。ここでは、Sentry の MCP サーバーのつなぎ方、コピーして使えるブリーフ、安全に運用するためのルールを紹介します。",
    cta: "今すぐ始める",
    secondary: "Sentry をつなぐ",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "社員がすること",
      points: [
        "前回の実行以降に新しく発生した、または再発した未解決の Sentry の issue を読みます。",
        "ボードと照らして重複を除くので、頻発するエラーは新しい issue 10 件ではなく、1 件のコメントになります。",
        "役に立つ issue を起票します：影響、初回と最後の発生日時、発生し始めたリリース、上位のスタックフレーム、そして推測であると明記した考えられる原因。",
        "あなたが書いたルールで優先度を付けます。たとえば、登録や支払いを妨げるものはすべて Urgent、など。",
        "明らかなものは直します：null チェック、翻訳キーの欠落、誤ったリダイレクトなど。テスト付きでプルリクエストを作成し、レビューを待ちます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code や Codex で Sentry のトリアージを設定する方法",
      steps: [
        {
          title: "Sentry の MCP サーバーをつなぐ",
          text: "Sentry は mcp.sentry.dev で OAuth 対応の MCP サーバーをホストしているので、インストールもトークンの貼り付けも不要です。追加してエージェントを起動し、求められたら Sentry にサインインします。これでエージェントは Sentry の issue、エラー、プロジェクト、Seer の分析を使えるようになります。",
          code: connect,
        },
        {
          title: "役割ブリーフをコピーする",
          text: "エラーの発生元のリポジトリで、Claude Code なら CLAUDE.md に、Codex なら AGENTS.md に書きます。そうすれば、各スタックフレームの裏にあるコードを読めます。",
          code: brief,
        },
        {
          title: "スケジュールに載せる",
          text: "トリアージを定期 issue にします。たとえば `--repeat \"weekdays at 9:00\"` とし、エラーの量が多ければ午後にもう 1 つ追加します。",
        },
        {
          title: "修正をレビューする",
          text: "修正のプルリクエストは、通常のレビューを通ります。影響や担当がはっきりしないときは、社員が issue を「要対応」にして質問してきます。",
        },
      ],
      source: { label: "出典：Sentry の MCP サーバーのドキュメント", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "安全に運用するためのルール",
      points: [
        "Sentry は読むだけ、書くのはボードに。Sentry での resolve、ignore、削除は人に残します。",
        "本番環境のみ：ステージングのノイズを起票しないよう、本番環境を対象にします。",
        "推測は推測：各 issue の原因は、誰かが確認するまで仮説と明記しておきます。",
        "マージはしない：修正はテスト付きのプルリクエストにし、直接プッシュは決してしません。",
        "個人データ：Sentry のイベントにはユーザーの情報が含まれることがあります。issue には件数と ID だけを書き、メールアドレスや IP は書かないようにします。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "あなたのエラーから 1 日を始めるエンジニア",
      text: [
        "トリアージは、AI ソフトウェアエンジニアにとって自然な定期 issue です。Crewmark は、あなたの Claude Code や Codex を、勤務時間とハートビートを持つその社員に変えます。",
      ],
      steps: [
        {
          title: "職種から始める",
          text: "[AI ソフトウェアエンジニア](/ai-employees/software-engineer)は、ボードから issue を取り、プルリクエストを作成します。",
        },
        {
          title: "トリアージを定期 issue として追加する",
          text: "期限が来たらトリアージを実行し、そのあと自分が起票した issue を片付けていきます。",
        },
        {
          title: "エンジニアリングのほかの仕事",
          text: "[エンジニアリングのための Claude Code](/for/engineering) と[すべてのプルリクエストに AI コードレビュー](/use-cases/pr-review)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code や Codex で Sentry のエラートリアージを設定する" },
  mid: {
    title: "朝会の前に、新しいエラーの起票と小さな修正を済ませておきたいですか？",
    text: "あなたの Claude Code や Codex で動く Crewmark のエンジニアが、スケジュールに沿って Sentry をトリアージし、修正のプルリクエストを作成します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Sentry を Claude Code につなぐには？",
        a: "`claude mcp add --transport http sentry https://mcp.sentry.dev/mcp` を実行して Claude Code を起動し、求められたら OAuth で Sentry にサインインします。サーバーは Sentry がホストしているので、インストールは不要です。",
      },
      {
        q: "Sentry の MCP サーバーは Codex でも使えますか？",
        a: "はい、mcp-remote ブリッジ経由で使えます：`codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`。",
      },
      {
        q: "エージェントに Sentry の issue を resolve させられますか？",
        a: "許可することはできますが、おすすめしません。起票と修正は任せ、resolve と ignore は人に残しましょう。そうすれば、誤って何かが隠れてしまうことがありません。",
      },
      {
        q: "トリアージはどのくらいの頻度で実行すべきですか？",
        a: "多くのチームには平日 2 回で十分です。ローンチ中は 1 時間ごとの実行を追加しましょう。実行のたびにエージェントのプランの利用量を使うので、数分おきに実行するのは避けてください。",
      },
      {
        q: "issue はどこに作られますか？",
        a: "チームが仕事を管理している場所です。Crewmark なら、社員が働いているのと同じボードに作られます。それ以外では、Linear や GitHub など、課題管理ツールの MCP サーバーか CLI を使います。",
      },
    ],
  },
  cta: {
    title: "コーヒーを飲む前に、エラーの起票と小さな修正が終わっている。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Sentry の MCP サーバーのドキュメントで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Sentry、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
