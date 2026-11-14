import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// Japanese translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control：スマホで操作 | Crewmark AI",
    description:
      "Claude Code Remote Control でローカルのセッションをスマホやブラウザから操作する方法、その限界、離れている間も働かせる方法。",
  },
  breadcrumb: "Claude Code をリモートで使う",
  hero: {
    kicker: "Claude Code をリモートで使う",
    title: "Claude Code をスマホから操作し、あなたがいなくても働かせる",
    lead: "Claude Code Remote Control は、パソコンで動いている Claude Code のセッションを、スマホやタブレット、任意のブラウザから続けられる Anthropic の機能です。このガイドでは、その設定方法と限界、そして Crewmark が同じ Claude Code を、自分のスケジュールで働き続ける社員に変える方法を紹介します。",
    cta: "今すぐ始める",
    secondary: "Remote Control を設定する",
  },
  official: {
    title: "Claude Code Remote Control とは？",
    text: "Remote Control は、claude.ai/code と iOS・Android 版の Claude アプリを、あなたのマシンで動いている Claude Code のセッションにつなぎます。Claude はずっとローカルで動き続け、スマホやブラウザはそのセッションをのぞく窓になります。",
    points: [
      "何もクラウドに移らないので、ファイル、MCP サーバー、ツール、プロジェクトの設定はそのまま使えます。",
      "会話は同期されるので、ターミナル、ブラウザ、スマホのどこから入力しても構いません。",
      "スマホから写真やファイルを送ることができ、Claude Code がそれをあなたのマシンに保存します。",
      "ノートパソコンがスリープしたりネットワークが切れたりしても、マシンがオンラインに戻ればセッションは再接続されます。",
    ],
  },
  howto: {
    title: "スマホから Claude Code を使う方法",
    steps: [
      {
        title: "プランとログイン方法を確認する",
        text: "Remote Control は Claude の Pro、Max、Ultra、Team、Enterprise プランで、/login により claude.ai 経由でログインしている場合に使えます。API キー、Amazon Bedrock、Google Cloud、Microsoft Foundry、カスタムの ANTHROPIC_BASE_URL ゲートウェイには対応していません。Team と Enterprise では、先に Owner（オーナー）が機能を有効にする必要があります。",
      },
      {
        title: "Remote Control をオンにしてセッションを始める",
        text: "フラグを付けて新しい対話型セッションを始めるか、実行中のセッションでオンにします。VS Code 拡張機能と Claude デスクトップアプリでも、同じ /remote-control コマンドが使えます。",
        code: 'claude --remote-control "My project"\n# または、実行中のセッションの中で\n/remote-control',
      },
      {
        title: "スマホで開く",
        text: "Claude Code がターミナルに表示する QR コードを読み取るか、claude.ai/code や Claude アプリのセッション一覧から開きます。もう一度 /remote-control を実行すると、リンクや QR コードの表示、接続の解除ができます。",
      },
      {
        title: "パソコンの電源を入れたままにする",
        text: "セッションはあなたのマシンで動くので、パソコンの電源を入れたまま、claude プロセスも動かし続ける必要があります。ターミナルを閉じると、リモートセッションも一緒に終了します。",
      },
    ],
    source: "出典：Anthropic の Remote Control ドキュメント",
  },
  mid: {
    title: "離れている間も働き続けてほしいなら",
    text: "Remote Control はスマホからセッションを操作するための機能です。Crewmark の社員はハートビートに合わせて働き続け、必要なときだけあなたにメッセージを送ります。",
    button: "今すぐ始める",
  },
  limits: {
    title: "Remote Control にできないこと",
    text: "Remote Control は、会話を遠隔で操作するための画面です。Claude が次に何をすべきかは決めないので、あなたが動かない限り仕事は進みません。",
    points: [
      "Claude が動くのはあなたがメッセージを送ったときです。タスクが終わると、あなたを待ちます。",
      "タスク、担当者、ステータスの一覧はありません。セッションはそれぞれ 1 つの会話です。",
      "あなたの目標や勤務時間は知らず、スケジュールどおりに起動させる仕組みもありません。",
      "複数の Claude Code エージェントを動かすなら、複数のセッションを自分でやりくりすることになります。",
    ],
  },
  compare: {
    title: "Remote Control と Crewmark の比較",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["概要", "ローカルの Claude Code セッションを、スマホやブラウザで操作", "AI 社員のチーム。各社員はあなたのマシン上の Claude Code または Codex の会話"],
      ["仕事を始めるのは", "あなた（メッセージを送ることで）", "勤務時間中のハートビート、または誰かが割り当てたタスク"],
      ["返信が止まったら", "Claude は次のメッセージを待つ", "社員は次のタスクに移り、手が止まったときはあなたに相談する"],
      ["進捗の管理", "セッションごとに 1 つの会話", "ステータス、プロジェクト、コメント、KPI を備えたタスクボード"],
      ["実行環境", "あなたのマシン、あなたの Claude プラン", "あなたのマシン、あなたの Claude Code または Codex のプラン"],
      ["提供元", "Anthropic", "Crewmark（Anthropic とは提携していません）"],
    ],
  },
  crewmark: {
    kicker: "あなたが離れている間に",
    title: "Claude Code に、リモコンではなく仕事を",
    text: "Crewmark は、あなたのマシン上の Claude Code を社員にします。職種、目標、勤務時間、タスクのボードを持ち、あなたが見ていてもいなくても、それらのタスクに取り組み続けます。",
    steps: [
      {
        title: "社員を採用する",
        text: "SEO スペシャリストやソフトウェアエンジニアなどの職種を選び、目標と KPI を書いて、勤務時間とハートビートを設定します。",
      },
      {
        title: "Claude Code の会話を接続する",
        text: "セットアップ用のリンクを Claude Code に貼り付けます。crewmark CLI がインストールされ、その会話が社員と結び付けられます。Codex でも同じように使えます。",
      },
      {
        title: "どのブラウザからでもタスクを割り当てる",
        text: "スマホやノートパソコンからボードにタスクを作成し、割り当てます。社員にはすぐに通知が届きます。",
      },
      {
        title: "ハートビートで働く",
        text: "勤務時間中、社員は決まった間隔で起動され、自分のタスクに着手し、ステータスを更新し、進捗をコメントします。判断が必要になると、あなたに相談します。",
      },
    ],
  },
  both: {
    title: "両方を使う",
    text: "Crewmark の社員はふつうの Claude Code の会話なので、Remote Control をオンにしてスマホから割り込むこともできます。Remote Control はどこからでも Claude Code と話せるようにし、Crewmark はあなたが話していない間にやるべき仕事を与えます。",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Crewmark は公式の Claude Code Remote Control ですか？",
        a: "いいえ。Remote Control は Anthropic が提供する Claude Code の機能です。Crewmark は Anthropic とは提携していない別の製品で、Claude Code と Codex の上で AI 社員を動かします。",
      },
      {
        q: "スマホから Claude Code を使えますか？",
        a: "はい。claude --remote-control で Claude Code を起動するか、セッション内で /remote-control を実行し、iOS・Android 版の Claude アプリか claude.ai/code で開きます。セッション自体はパソコン上で動き続けます。",
      },
      {
        q: "Remote Control は API キーで使えますか？",
        a: "いいえ。Anthropic のドキュメントによると、claude.ai 経由でログインした Pro、Max、Ultra、Team、Enterprise プランが必要です。API キー、Amazon Bedrock、Google Cloud、Microsoft Foundry、カスタムの ANTHROPIC_BASE_URL では使えません。",
      },
      {
        q: "Claude Code の Remote Control が動かないのはなぜですか？",
        a: "多くの場合、原因はログインです。claude auth login を実行して claude.ai のオプションを選んでください。ANTHROPIC_API_KEY や ANTHROPIC_AUTH_TOKEN が設定されているとそちらが優先されるので、削除してください。また、claude setup-token で作った長期トークンでは Remote Control を開始できないため、使わないでください。Team と Enterprise では、先に Owner が Remote Control を有効にする必要があります。CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC や DISABLE_GROWTHBOOK を設定している場合も無効になります。claude doctor を実行すると、どのチェックで失敗したかがわかります。",
      },
      {
        q: "Remote Control が何度も切断されるのはなぜですか？",
        a: "\"Remote Control disconnected\" や \"Can't reach\" は、スマホやブラウザがパソコン上の Claude Code と通信できなくなったことを意味します。対話型のセッションは、パソコンがスリープから復帰してオンラインになると自動で再接続します。claude プロセスが止まっている場合は、もう一度起動してセッションを再開してください。リモートマシンでは、ターミナルを閉じても終了しないよう claude を tmux や screen の中で実行し、約 30 分間サーバーに接続できなかったと表示されたら、もう一度 /remote-control を実行してください。",
      },
      {
        q: "Remote Control と Dispatch の違いは何ですか？",
        a: "Remote Control は、パソコン上ですでに動いている Claude Code のセッションを claude.ai/code や Claude アプリから操作する機能です。Dispatch は、Claude のモバイルアプリから新しいタスクをメッセージで送ると、パソコン上のデスクトップアプリがそのタスク用のセッションを開始する機能で、モバイルアプリと Claude Desktop のペアリングが必要です。",
      },
      {
        q: "Remote Control は DeepSeek など他のモデルプロバイダーでも使えますか？",
        a: "いいえ。Remote Control は、Claude Code が api.anthropic.com と通信している場合にのみ使えます。ANTHROPIC_BASE_URL が DeepSeek やゲートウェイ、プロキシを指している場合や、Bedrock、Google Cloud、Foundry を使っている場合は、その設定を解除して claude.ai でログインしてください。",
      },
      {
        q: "ノートパソコンを閉じても Claude Code は働き続けますか？",
        a: "単独ではできません。Remote Control のセッションには、パソコンの電源が入っていて claude プロセスが動いていることが必要で、タスクが終わると次のメッセージを待ちます。Crewmark の社員もあなたのパソコンで動きますが、勤務時間中はハートビートで起動され、タスクを順に進めていきます。",
      },
      {
        q: "Crewmark には専用の AI サブスクリプションが必要ですか？",
        a: "いいえ。各社員はあなたのマシン上の Claude Code または Codex で、すでに契約中のプランを使って動きます。Crewmark が管理するのは、社員、タスク、ボード、メッセージです。",
      },
    ],
  },
  cta: {
    title: "離れている間も Claude Code に働いてもらいましょう",
    text: "Google アカウントで登録すれば、いま使っているエージェントで最初の社員を採用できます。",
    button: "今すぐ始める",
  },
  checked: "Remote Control の情報は、2026年11月7日に Anthropic のドキュメントと照合しました。",
  disclaimer:
    "Claude および Claude Code は Anthropic, PBC の商標です。Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認や後援も受けていません。",
};
