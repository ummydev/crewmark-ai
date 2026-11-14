import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # このチャンネルのデフォルトリポジトリを選ぶ
@GitHub help          # コマンドを一覧表示する`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot の Slack 連携：設定方法と代替 | Crewmark AI",
    description:
      "Slack と Teams の @GitHub が2026年11月6日に一般提供されました。設定方法、チャットのスレッドから Copilot エージェントができること、権限と制限、Claude Code in Slack との比較を解説します。",
  },
  breadcrumb: "Slack で使う GitHub Copilot",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · AI コーディングエージェント",
    title: "Slack で使う GitHub Copilot：チャットのスレッドをプルリクエストに変える",
    lead: "Slack の GitHub Copilot を使えば、スレッドで `@GitHub` をメンションするだけで、Copilot のクラウドエージェントが会話を文脈としてバグを調査し、issue を作成し、変更を書いてプルリクエストを出してくれます。2026年11月6日に Slack と Microsoft Teams で一般提供が始まりました。このガイドでは、設定方法、できることとできないこと、誰が呼び出せるか、そして Claude Code in Slack や常に働く AI 社員との違いを解説します。",
    cta: "今すぐ始める",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Slack と Teams で @GitHub ができること",
      points: [
        "チャットのスレッドから調査、計画、コーディングを行い、issue やプルリクエストを作成します。スレッド全体が文脈として使われます。",
        "クラウドのサンドボックスで非同期に作業し、作成したものへのリンク付きで概要を投稿します。",
        "issue を1つ、複数、または親子関係で作成できます。同じ組織またはアカウントが所有する最大11個のリポジトリにまたがって作業できます。",
        "モデルの選択、リポジトリ管理者が設定した MCP サーバー、Copilot Memory（プレビュー）に対応しています。",
        "11月6日のリリース以降は、メッセージからリポジトリを判断し、各 issue と PR にどの会話・どのユーザーから来たかを記録します。Teams ではチャットの横の Canvas に計画、diff、プレビューを表示します。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Slack で GitHub Copilot を設定する方法",
      steps: [
        {
          title: "利用条件を確認する",
          text: "有料の Copilot プランと、変更したいリポジトリへの書き込み権限が必要です。組織や企業では「Copilot in the cloud」ポリシーがデフォルトで有効ですが、オーナーは無効にできます。企業が所有するリポジトリでは、管理者がアプリをインストールし、アクセスできるリポジトリを選びます。",
        },
        {
          title: "Slack 用の GitHub アプリをインストールする",
          text: "slack.github.com からワークスペースに GitHub 連携を追加します（Teams の場合は teams.github.com）。",
        },
        {
          title: "アカウントを連携する",
          text: "GitHub アプリとのダイレクトメッセージを開くか、スレッドで `@GitHub` と入力し、案内に従って GitHub アカウントを連携します。`@GitHub help` でコマンド一覧が表示されます。",
        },
        {
          title: "チャンネルのデフォルトリポジトリを設定する",
          text: "チャンネルで `@GitHub settings` を実行し、オーナーとリポジトリを選びます。最初に選んだものがプライマリになります。ダイレクトメッセージにはデフォルトがないので、プロンプトでリポジトリとブランチを指定してください。",
        },
        {
          title: "普段の言葉で仕事を頼む",
          text: "タスクを添えて `@GitHub` をメンションするか、GitHub の通知に返信して依頼します。Copilot はスレッドを読み、クラウドで作業して、issue やプルリクエストへのリンクを返信します。",
          code: prompts,
        },
      ],
      source: { label: "出典：GitHub Docs「Integrate Copilot cloud agent with Slack」", href: docs },
    },
    {
      kind: "text",
      title: "権限と制限",
      points: [
        "セッションを開始したり方向を指示したりできるのは、選択したすべてのリポジトリに書き込み権限を持つ人だけです。スレッドの誰でも情報を追加できます。",
        "ゲストと外部コラボレーターは、セッションを開始することも指示することもできません。",
        "ダイレクトメッセージでは Copilot は連携したアカウントの権限で動き、共有チャンネルではアプリの ID で issue や PR を作成します。",
        "スレッド全体が文脈として取り込まれ、作成されたプルリクエストに保存されるので、会話に秘密情報を書かないようにしましょう。",
        "GitHub の発表では Slack セッションの課金は明記されていません。広く展開する前に、プランの Copilot 使用量を確認してください。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Slack の GitHub Copilot vs Claude Code in Slack vs AI 社員",
      headers: ["", "Slack の GitHub Copilot", "Claude Code in Slack", "Crewmark の AI 社員"],
      rows: [
        ["仕事の始まり方", "`@GitHub` をメンションするか、アプリに DM する", "チームのチャンネルで `@Claude` をメンションする", "勤務時間中はハートビートが次の issue を取る。直接アサインも可能"],
        ["実行場所", "GitHub のクラウドサンドボックス", "Anthropic のクラウド（ウェブ版 Claude Code）", "あなたのマシン上の Claude Code、Codex、DeepSeek Harness、OpenCode"],
        ["成果物", "issue とプルリクエスト", "プルリクエストとレビュー", "ボード上のあらゆる issue の作業。コメントやあなたへのメッセージ付き"],
        ["プラン", "有料の Copilot プラン", "Pro、Max、Ultra（ウェブ版 Claude Code を有効化）", "契約中のエージェントのサブスクリプション"],
        ["あなたなしで進み続けるか", "いいえ：メンション1回につきタスク1つ", "いいえ：メンション1回につきタスク1つ", "はい。勤務時間中ずっと"],
      ],
    },
    {
      kind: "text",
      title: "チャットボットで足りるとき、足りないとき",
      text: [
        "Slack の Copilot は、バグ報告がスレッドに届いた瞬間に真価を発揮します。メンション1回でプルリクエストが届きます。ただし受け身であることに変わりはなく、誰かが頼むまで何も起きず、メンション1回につきタスクは1つです。役割と目標を持ち、バックログを自分で片付けていくエージェントが欲しいなら、[AI 社員](/ai-employees)と[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。複数のエージェントを動かすほかの方法は、[Claude Code のオーケストレーションツール](/blog/claude-code-orchestration-tools)で紹介しています。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "「ボットに @」から、次のタスクを自分で取る社員へ",
      text: [
        "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変えます。ハートビートで起き、共有ボードから次の issue を取り、作業しながらコメントし、判断が必要なときはあなたにメッセージを送ります。",
      ],
      steps: [
        {
          title: "チャットと同じ感覚で仕事を割り当てる",
          text: "どのブラウザからでもスマホからでも、issue を作ってアサインするだけ。社員にはすぐに伝わります。",
        },
        {
          title: "そのまま進めさせる",
          text: "あなたがメッセージを送っていない間も、15分、30分、60分ごとのハートビートで自分の issue を進めます。",
        },
        {
          title: "ちょっとした修正は Copilot に任せる",
          text: "両者は競合しません。スレッドでの単発の依頼には `@GitHub` を、継続的なバックログには社員を使いましょう。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Slack で GitHub Copilot を設定する" },
  mid: {
    title: "メンションを待たないエージェントが欲しいですか？",
    text: "Crewmark は、職種・目標・issue のボードを持たせた Claude Code や Codex をハートビートで起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Slack の GitHub Copilot に関するよくある質問",
    items: [
      {
        q: "Slack の GitHub Copilot は一般提供されていますか？",
        a: "はい。GitHub は2026年11月6日に、Slack と Teams の @GitHub の一般提供を発表しました。",
      },
      {
        q: "GitHub Copilot を Slack に追加するには？",
        a: "slack.github.com から Slack 用の GitHub アプリをインストールし、アプリに DM するかスレッドで `@GitHub` をメンションして GitHub アカウントを連携します。チャンネルのデフォルトリポジトリは `@GitHub settings` で設定します。",
      },
      {
        q: "Slack で Copilot を使うにはどのプランが必要ですか？",
        a: "有料の Copilot プランと、変更させたいリポジトリへの書き込み権限が必要です。組織のオーナーは、この機能が依存する「Copilot in the cloud」ポリシーを無効にできます。",
      },
      {
        q: "Slack の GitHub Copilot はプルリクエストを出せますか？",
        a: "はい。調査し、クラウドのサンドボックスで変更を書いてプルリクエストを出し、スレッドにリンク付きの概要を投稿します。",
      },
      {
        q: "Microsoft Teams でも使えますか？",
        a: "はい。@GitHub は Teams でも一般提供されており、会話の横の Canvas に計画、コードの変更、プレビューが表示されます。",
      },
      {
        q: "Slack のチャンネルで Copilot を呼び出せるのは誰ですか？",
        a: "セッションを開始したり指示したりできるのは、選択したすべてのリポジトリに書き込み権限を持つ人だけです。スレッドのほかの人は情報を追加できますが、ゲストと外部コラボレーターは呼び出せません。",
      },
      {
        q: "Slack の GitHub Copilot と Claude Code in Slack の違いは？",
        a: "どちらも Slack でのメンションをクラウドのコーディングタスクに変えます。Copilot は有料の Copilot プランで使え、issue と PR を作成します。Claude Code in Slack には、ウェブ版 Claude Code を有効にした Claude の Pro、Max、Ultra プランが必要です。",
      },
    ],
  },
  cta: {
    title: "頼まれるのを待たない AI のチームメイトを、あなたのチームに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に GitHub の changelog（2026年11月6日）、GitHub Docs、Anthropic の Claude Code ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、GitHub、Microsoft、Slack、Anthropic とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
