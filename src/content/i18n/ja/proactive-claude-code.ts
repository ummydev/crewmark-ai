import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code を自律的に動かす方法：/loop・定期実行・ハートビート | Crewmark",
    description:
      "指示を待たずに Claude Code を動かす：Proactive output style、auto mode、/goal、/loop、スケジュールタスク、ハートビート。",
  },
  breadcrumb: "Claude Code を自律的に動かす",
  hero: {
    kicker: "自律的に動く Claude Code",
    title: "Claude Code を自律的に動かす方法",
    lead: "自律的に動く Claude Code のエージェントは、あなたの次のメッセージを待ちません。定型的な判断は自分で下し、仕事が終わるまで続け、スケジュールどおりに起動し、何かが起きれば反応します。Claude Code には、それぞれに対応する組み込み機能があります。このガイドでは、それらの有効化の方法、それぞれの限界、そして単発のプロンプトではなく継続的な仕事を Claude Code に与える方法を紹介します。組み込み機能に欠けているのはハートビート、つまり同じセッションを一定のリズムで起こして次のタスクを取らせる仕組みです。手作業での組み方と、Crewmark がそれを代わりに用意する方法も紹介します。",
    cta: "早期アクセスに登録",
    secondary: "手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code にとって「自律的」とは",
      text: [
        "デフォルトの Claude Code は受け身です。あなたが入力し、Claude が作業し、止まって待ちます。自律的に動かすには 3 つの別々の要素が必要ですが、ほとんどのガイドはそのうち 1 つしか扱っていません。",
      ],
      points: [
        "いちいち確認せずに動く：定型的な判断を任せられる出力スタイルと権限モード。",
        "自分で仕事を始める：あなたが入力しなくてもターンを始めるループ、スケジュール、イベント。",
        "次に何をすべきかわかっている：目標や仕事のキュー。これがあるから、起動するたびに有益な仕事ができます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "手順：Claude Code を自律的に動かす",
      steps: [
        {
          title: "Proactive output style をオンにする",
          text: "「Claude Code の proactive mode」と呼ばれているのは、たいていこれのことです。実際にはモードではなく、組み込みの出力スタイル（output style）です。タスクを渡すとすぐに実装を始め、定型的な判断では質問せずに妥当な前提を置き、プランを求められない限り計画の段階を飛ばします。それでもデータの削除や共有環境・本番環境に触れる前には確認を取り、権限の確認プロンプトも変わりません。`/config` の Output style からも選べます。",
          code: "/output-style Proactive",
        },
        {
          title: "無人で動かすための権限モードを選ぶ",
          text: "権限の確認のたびに止まるエージェントは、自律的とは言えません。auto mode（自動モード）は、確認を求める代わりにバックグラウンドで安全チェックを行いながら操作を実行します。`acceptEdits` はファイルの編集を通し、それ以外のコマンドは確認します。すべてのチェックを飛ばす `bypassPermissions` は、隔離されたコンテナや VM 用にとっておきましょう。",
          code: "claude --permission-mode auto",
        },
        {
          title: "/goal で仕事が終わるまで続けさせる",
          text: "`/goal` には条件を渡します。ターンが終わるたびに小さなモデルが条件を満たしたかを判定し、満たしていなければ Claude が自分で次のターンを始めます。条件を満たすと goal は解除されます。テストスイートが通る、のように自分でも確認できる条件を書きましょう。",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "セッションを開いている間は /loop で繰り返す",
          text: "`/loop` はプロンプトを一定間隔で実行します。間隔を省略すると、実行のたびに Claude が次までの待ち時間を決めます。ループは現在のセッションの中にあるので、セッションを開いたままにする必要があり、繰り返しのループは 7 日で期限切れになり、ビジーの間に逃した実行は後から取り戻されません。",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "キーボードの前にいないときのためにスケジュールを組む",
          text: "デスクトップのスケジュールタスクは、Claude デスクトップアプリが開いていてパソコンがスリープしていない限り、スケジュールどおりにパソコン上で新しいセッションを実行します。`/schedule` で作るクラウドのスケジュールタスクは Anthropic のクラウドで動くので、パソコンの電源が切れていても構いません。実行間隔は最短で 1 時間ごとで、Pro、Max、Ultra、Team、Enterprise プランが必要です。リポジトリなら、公式の GitHub Action で Claude Code を cron スケジュールで実行することもできます。",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "イベントで起動させる",
          text: "Channels は、Telegram・Discord・iMessage のメッセージ、CI の失敗、Webhook などのイベントを実行中のセッションに送り込みます。あなたがターミナルを開かなくても Claude が反応します。Hooks は、ツール呼び出しの前やターンの終了時など、Claude のライフサイクルの決まった時点で自分のコマンドを実行します。どちらもセッションが動いている必要があります。",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "出典：Anthropic の Claude Code ドキュメント（スケジュールタスク）",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "足りないピース",
      title: "ハートビートを追加する：同じセッションを起こして次のタスクへ",
      text: [
        "ハートビート（heartbeat）とは、勤務時間中の 30 分ごとなど、同じ Claude Code の会話に定期的に送る短い合図です。「作業を確認して、次のタスクに取りかかって」と伝えます。毎回同じプロンプトで新しいセッションを始めるスケジュールタスクと違い、ハートビートは 1 つの会話を続けるので、エージェントは前回やったことを覚えていて、キューから次の項目を取ります。これが、同じ仕事を繰り返すジョブと、働き続ける社員の違いです。",
        "Claude Code にハートビートの設定はありませんが、ヘッドレスモードでセッションを再開できるので、手作業で組むことができます。",
      ],
      steps: [
        {
          title: "手作業で：cron と claude -p --resume",
          text: "セッションを 1 つ始めてその ID を保存し、短いハートビートのプロンプトで cron に一定のリズムで再開させます。仕事のキューは TODO.md のようなリポジトリ内のファイルに置きます。これはドキュメントに記載されたフラグで組んだ私たち独自の例で、Anthropic のドキュメントにはハートビートの設定方法は書かれていません。",
          code: "# 最初に一度だけ：セッションを始めて ID を保存する\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e：平日の 9:00〜17:30、30 分ごと\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "自作版ではカバーできないこと",
          text: "キューのファイルと cron の時刻は自分で管理することになります。勤務時間を cron に書き込まない限り時間外も止まりません。あなたがセッションを使っている最中にハートビートが届くと衝突します。そして複数のエージェントがそれぞれ何をしているのかを横断して見ることはできません。",
        },
        {
          title: "Crewmark なら：ハートビートが組み込み済み",
          text: "Crewmark のデーモンは、勤務時間中に 15 分・30 分・60 分ごとに社員自身の会話へハートビートを送り、エージェントがビジーなら待ちます。ボードがそのままキューになり、ハートビートのたびに社員は次のタスクを取って報告します。詳しくは[後述](#crewmark)します。",
        },
      ],
    },
    {
      kind: "table",
      title: "どの方法が合うか",
      headers: ["方法", "自分で仕事を始めるか", "パソコンの電源が必要か", "向いている用途"],
      rows: [
        ["Proactive output style", "いいえ。頼んだ後の動きが速くなる", "はい", "タスク中の質問を減らす"],
        ["/goal", "はい。条件を満たすまで次のターンを始める", "はい", "1 つのタスクを催促なしで終わらせる"],
        ["/loop", "はい。一定間隔で、最長 7 日間", "はい（セッションを開いたまま）", "デプロイ、CI、PR の監視"],
        ["デスクトップのスケジュールタスク", "はい。スケジュールどおり", "はい（スリープせず、アプリを開いたまま）", "ローカルのファイルを使う毎日の仕事"],
        ["クラウドのスケジュールタスク", "はい。最短で 1 時間ごと", "いいえ", "リポジトリだけで完結する仕事"],
        ["GitHub Actions", "はい。cron または GitHub のイベントで", "いいえ", "リポジトリのメンテナンス"],
        ["Channels", "はい。イベントが届いたとき", "はい（セッションを開いたまま）", "チャット、CI、Webhook への反応"],
        ["手作業のハートビート（cron + `claude -p --resume`）", "はい。cron のリズムで、同じセッションの中で", "はい", "TODO ファイルを順に進める 1 体のエージェント"],
        ["Crewmark のハートビート", "はい。勤務時間中に 15〜60 分ごと、同じセッションの中で", "はい", "バックログ、目標、勤務時間を持つエージェント"],
      ],
    },
    {
      kind: "text",
      title: "それでも、あなたの手に残ること",
      text: [
        "どの機能もターンを始めるだけです。今週エージェントが何をすべきかを決めてくれるものはありません。実際には、次のような穴が残ります。",
      ],
      points: [
        "スケジュールは同じプロンプトを繰り返すだけです。バックログから次のタスクを取ることも、昨日の実行で何が終わったかを覚えていることもありません。",
        "Claude に新しい仕事を渡し、何をしているのか、何が終わったのか、どこで行き詰まっているのかを見られるボードがありません。",
        "勤務時間も目標もありません。ループは数字が動くまでではなく、期限が切れるまで動きます。",
        "エージェントが複数いても、それらを調整する仕組みがないので、それぞれにプロンプトとスケジュールを用意する必要があります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code に継続的な仕事を与える",
      text: [
        "Crewmark は、Claude Code の会話を、職種・目標・勤務時間・ハートビートを持つ AI 社員に変え、ボードを通じて仕事を渡します。本物の Claude Code の中で、すでに契約しているプランを使って動きます。",
      ],
      steps: [
        {
          title: "社員を採用し、その会話を接続する",
          text: "SEO スペシャリストやソフトウェアエンジニアなどの職種を選び、Crewmark が表示するセットアップ用のコマンドを Claude Code で実行します。その会話がそのまま社員になるので、起動と起動の間も仕事の記憶を保ちます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "パソコン上で動く小さなバックグラウンドプログラムである Crewmark のデーモンが、勤務時間中は 15 分・30 分・60 分ごとに社員のハートビートのプロンプトを同じ会話に送り、時間外はそっとしておきます。エージェントがビジーなときに届いたハートビートは、手が空くまで待ちます。",
        },
        {
          title: "ボードでタスクを割り当てる",
          text: "タスクを割り当てたりコメントしたりすると、その知らせがメッセージとしてエージェントの会話に届きます。会話が閉じている場合は、Crewmark が auto mode の `claude -p --resume` で再開するので、仕事は確実に拾われます。",
        },
        {
          title: "数字で評価する",
          text: "各社員に、Search Console の月間クリック数のような KPI を与えます。社員はその数字に向けてタスクを計画し、ボード上で動かし、進捗をコメントし、判断が必要なときはあなたにメッセージを送ります。",
        },
      ],
    },
    {
      kind: "text",
      title: "組み合わせて使う",
      text: [
        "組み込み機能と Crewmark は重ねて使えます。社員の会話で Proactive output style と auto mode をオンにすれば、ハートビートのたびにしっかり仕事が進みます。ゴールがはっきりしたタスクでは `/goal` を使い、スマホからは [Claude Code Remote Control](/remote-claude-code) で様子を確認しましょう。あなたがいなくても動く単発の仕事については、[Claude Code のバックグラウンドエージェントとヘッドレスモードの使い方](/blog/claude-code-background-agents)をご覧ください。Codex をお使いなら、[Codex を自律的に動かす方法](/proactive-codex)をどうぞ。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code を自律的に動かす" },
  mid: {
    title: "cron ジョブも、開きっぱなしのセッションも不要に",
    text: "Crewmark は、勤務時間中にハートビートで Claude Code のセッションを起こし、ボードから次のタスクを渡します。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Code のハートビートとは何ですか？",
        a: "勤務時間中の 30 分ごとなど、同じ Claude Code の会話に定期的に送る合図で、エージェントに作業を確認して次のタスクに取りかかるよう伝えます。新しいセッションを始めるのではなく 1 つのセッションを再開するので、エージェントは以前の仕事を覚えています。cron と `claude -p --resume` で自作できます。Crewmark には勤務時間とキューとしてのボードを含めて組み込まれています。",
      },
      {
        q: "Claude Code に proactive mode はありますか？",
        a: "モードとしてはありません。Claude Code には組み込みの Proactive output style があり、`/output-style Proactive` でオンにすると、定型的な判断を質問せずに自分で進めるようになります。権限の確認プロンプトは変わらないので、そちらは auto mode と組み合わせましょう。",
      },
      {
        q: "Claude Code をスケジュール実行するには？",
        a: "セッションを開いている間は `/loop`、パソコン上の仕事にはデスクトップのスケジュールタスク、パソコンの電源が切れていても動くクラウドのスケジュールタスクには `/schedule`、または cron トリガー付きの Claude Code GitHub Action を使います。",
      },
      {
        q: "Claude Code を閉じても /loop は動き続けますか？",
        a: "いいえ。ループはセッションに属しているので、セッションが終わると止まり、繰り返しのループは 7 日で期限切れになります。セッションより長く続けたいなら、スケジュールタスクか Crewmark のハートビートを使いましょう。",
      },
      {
        q: "パソコンの電源が切れていても Claude Code は動きますか？",
        a: "クラウドのスケジュールタスクと GitHub Actions は、他社のマシンで動くので可能です。デスクトップのスケジュールタスク、Channels、Crewmark など、ローカルのファイルを使うものはパソコンの電源が必要です。",
      },
      {
        q: "Claude Code を無人で動かしても安全ですか？",
        a: "`bypassPermissions` ではなく auto mode を使い、すべての変更がレビューを通るリポジトリで作業させ、本番環境の認証情報には手が届かないようにしましょう。Crewmark は勤務時間とボードを加えるので、どんな変更をなぜ行ったのかを 1 つずつ確認できます。",
      },
      {
        q: "Crewmark を使うと追加のトークン代がかかりますか？",
        a: "いいえ。社員はお手持ちの Claude Code の中で、すでに契約しているサブスクリプションを使って動くので、トークン代を二重に払うことはありません。",
      },
    ],
  },
  cta: {
    title: "Claude Code を最初の AI 社員に",
    text: "職種、目標、勤務時間、ハートビートを与えて、最初のタスクを割り当てましょう。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月2日に Anthropic の Claude Code ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
