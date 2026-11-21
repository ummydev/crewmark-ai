import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# Claude Code で公式プラグインをインストール（user スコープを選ぶ）
/plugin install telegram@claude-plugins-official

# BotFather から受け取ったトークンを保存
/telegram:configure <token>

# チャンネルをオンにして Claude Code を再起動
claude --channels plugin:telegram@claude-plugins-official

# ボットにメッセージを送り、返ってきたコードでペアリング
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Channels：Telegram・Discord・iMessage の設定",
    description:
      "Claude Code の channels の仕組みと、公式の Telegram・Discord・iMessage プラグインの設定方法：コマンド、ペアリング、送信者の許可リスト、必要条件、channels が使えない理由、Slack について。",
  },
  breadcrumb: "Claude Code の channels",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code の channels：Telegram、Discord、iMessage から Claude Code にメッセージを送る",
    lead: "Channels は、あなたのコンピューターですでに動いている Claude Code のセッションにメッセージを届けます。スマートフォンからテキストを送ると、作業は実際のファイルに対して進み、答えは同じチャットに返ってきます。Telegram、Discord、iMessage には公式プラグインがあります。このガイドでは、channels の仕組み、それぞれの設定方法、知らない人を締め出す方法、表示されないときの原因、Remote Control や Claude in Slack との違いを説明します。",
    cta: "今すぐ始める",
    secondary: "Telegram を設定する",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code の channels とは",
      text: [
        "Channel は、実行中の Claude Code セッションにイベントを届ける MCP サーバーです。双方向にもでき、Claude はメッセージを読んで同じ channel で返信します。チャットのブリッジのようなものです。イベントが届くのはセッションが開いている間だけです。",
      ],
      points: [
        "公式の channel プラグイン：Telegram、Discord、iMessage と、localhost で動くデモ用チャットの fakechat。",
        "どれも claude-plugins-official のプラグインで、Bun のインストールが必要です。",
        "CI の失敗やエラーのアラートを受け取る webhook レシーバーなど、自分で channel を作ることもできます。",
        "Channels はリサーチプレビューです。`--channels` フラグは `claude --help` に載っておらず、構文が変わる可能性があります。",
        "ターミナルには届いたメッセージと「sent」のような確認が表示されます。返信の本文はチャットアプリ側に表示されます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Telegram の channel を設定する方法",
      steps: [
        {
          title: "ボットを作る",
          text: "Telegram で BotFather を開いて `/newbot` を送り、ボットに名前と「bot」で終わるユーザー名を付けて、トークンをコピーします。",
          code: telegram,
        },
        {
          title: "プラグインをインストールして設定する",
          text: "Claude Code で `/plugin install telegram@claude-plugins-official` を実行し、user スコープを選びます。マーケットプレイスが見つからない場合は `/plugin marketplace add anthropics/claude-plugins-official` で追加します。続いて `/telegram:configure <token>` でトークンを保存するか、Claude Code を起動する前に `TELEGRAM_BOT_TOKEN` を設定します。",
        },
        {
          title: "Channel をオンにして再起動する",
          text: "Claude Code を終了し、`--channels plugin:telegram@claude-plugins-official` を付けて起動し直します。複数の channel プラグインをスペース区切りで渡すこともできます。",
        },
        {
          title: "ペアリングして制限をかける",
          text: "ボットに何かメッセージを送ると、ペアリングコードが返ってきます。`/telegram:access pair <code>` で承認し、`/telegram:access policy allowlist` を実行して、あなたのアカウントだけがセッションに届くようにします。",
        },
      ],
      source: { label: "出典：Claude Code のドキュメント「Channels」", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord と iMessage",
      points: [
        "Discord：Discord Developer Portal でアプリケーションを作り、ボットのトークンをコピーし、Message Content Intent をオンにして、`bot` スコープでボットを招待します。続いて `/plugin install discord@claude-plugins-official`、`/discord:configure <token>` を実行し、`--channels plugin:discord@claude-plugins-official` で再起動して、ボットに DM を送り、`/discord:access pair <code>` でペアリングします。",
        "iMessage：macOS 専用で、ボットもトークンも不要です。メッセージのデータベースを読むので、ターミナルにフルディスクアクセスを許可します。`imessage@claude-plugins-official` をインストールし、`--channels plugin:imessage@claude-plugins-official` で再起動して、自分宛てにテキストを送ります。ほかの人は `/imessage:access allow <電話番号または Apple ID のメール>` で追加します。",
        "Slack：channel ではありません。Claude in Slack は、ローカルのセッションにメッセージを送るのではなく、@Claude のメンションからクラウドセッションを始めます。",
        "WhatsApp などのアプリ：公式の channel プラグインはありません。channels のリファレンスを見て自分で作ることになります。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels が使えない、動かないときは",
      points: [
        "アカウントの種類：channels には claude.ai でのサインインか Console の API キーが必要です。Amazon Bedrock、Google Cloud の Agent Platform、Microsoft Foundry 経由では使えません。",
        "組織の設定：Claude Team と Enterprise では、オーナーが Organization settings > Claude Code > Channels でオンにするまでブロックされます。起動時に警告が表示されます。組織に属さない Pro、Max、Ultra のアカウントはこのチェックがありません。",
        "プラグインが承認されていない：プレビュー期間中、`--channels` が受け付けるのは Anthropic（または組織）の許可リストにあるプラグインだけです。それ以外は channel なしで起動し、起動時の通知に理由が表示されます。",
        "ボットが返事をしない：Claude Code が `--channels` 付きで動いている必要があります。ボットが返信できるのは channel が有効な間だけです。",
        "タスクの途中で止まる：権限の確認が出ると、誰かが答えるまでセッションは止まります。確認をスマートフォンに中継できる channel もあります。",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "知らない人を締め出す",
      points: [
        "公式の channel はどれも送信者の許可リストを持ち、それ以外の人からのメッセージは黙って破棄されます。Telegram と Discord はペアリングであなたを追加し、iMessage はあなた自身のメッセージを通します。",
        "メッセージを届けられるのは `--channels` で指定したサーバーだけです。`.mcp.json` に書かれているだけでは足りません。",
        "Channel が権限の確認を中継する場合、その許可リストにいる誰もが、あなたのセッションでのツールの使用を承認・拒否できます。それを任せられる人だけを追加しましょう。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels、Remote Control、Claude in Slack の比較",
      headers: ["", "何をするか", "動作場所", "向いている用途"],
      rows: [
        ["Channels", "チャットのメッセージ、アラート、webhook を開いているセッションに届ける", "あなたのコンピューター", "スマートフォンからセッションにテキストを送る、CI やアラートに反応する"],
        ["[Remote Control](/remote-claude-code)", "claude.ai や Claude アプリからローカルのセッションを操作する", "あなたのコンピューター", "席を離れている間に進行中の作業の舵を取る"],
        ["Claude in Slack", "@Claude のメンションでクラウドセッションを始める", "Anthropic のクラウド", "チームの会話からタスクを始める"],
        ["Notification hook", "Claude があなたを必要とするときに、デスクトップ通知などのコマンドを実行する", "あなたのコンピューター", "ターンの終了や入力待ちに気づく"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code が答えるだけでなく、自分から連絡してくる",
      text: [
        "Channel は、動かしたままにしたセッションと話すための手段です。Crewmark はそのセッションを AI 社員に変えます。勤務時間中はハートビートで起き、ボードから次の issue を取り、行き詰まったときは、あなたが先にテキストを送らなくても Crewmark でメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "あなたの Claude Code で社員を雇う",
          text: "Claude Code の会話でセットアップコマンドを実行すると、その会話が社員になります。[AI 社員とは](/ai-employees)をご覧ください。",
        },
        {
          title: "勤務時間とハートビートを与える",
          text: "勤務時間と起きる間隔（15〜240 分ごと）を選びます。[Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "必要なときに答える",
          text: "判断はダイレクトメッセージで届き、1 回返信すれば作業を続けます。夜間の作業については [Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code の Telegram channel を設定する" },
  mid: {
    title: "行き詰まったら Claude Code のほうから声をかけてほしいなら",
    text: "Crewmark の社員はハートビートで起き、ボードの仕事を進め、判断が必要なときにメッセージを送ってきます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code の channels に関するよくある質問",
    items: [
      {
        q: "Claude Code の channels とは何ですか？",
        a: "すでに動いている Claude Code のセッションにイベントを届ける MCP サーバーです。Telegram、Discord、iMessage からのチャットのメッセージや、CI や監視からの webhook を届け、Claude は同じ channel で返信できます。リサーチプレビューの機能です。",
      },
      {
        q: "Claude Code の公式 Telegram プラグインはありますか？",
        a: "あります。`telegram@claude-plugins-official` です。`/plugin install` でインストールし、`/telegram:configure` で BotFather のトークンを保存し、`--channels plugin:telegram@claude-plugins-official` で Claude Code を起動して、ボットが送ってくるコードでアカウントをペアリングします。",
      },
      {
        q: "Claude Code の channels は Slack や WhatsApp で使えますか？",
        a: "どちらにも公式の channel はありません。Slack では、Claude in Slack が @Claude のメンションからクラウドセッションを始めます。ほかのアプリには、channels のリファレンスを見て自分で channel を作れます。",
      },
      {
        q: "Claude Code の channels が使えないのはなぜですか？",
        a: "多くの場合、Bedrock、Google Cloud、Foundry 経由でサインインしている、Team や Enterprise の組織が有効にしていない、プラグインが承認済みリストにない、のいずれかです。起動時の通知に理由が表示されます。",
      },
      {
        q: "コンピューターの電源が切れていても channels は動きますか？",
        a: "いいえ。イベントが届くのはコンピューターでセッションが開いている間だけです。常時動かしたいなら、スリープしないマシンで Claude Code をバックグラウンドプロセスか永続的なターミナルで動かしましょう。",
      },
      {
        q: "Claude Code の作業が終わったら通知を受け取るには？",
        a: "macOS の `osascript` などでデスクトップ通知を出す `Notification` または `Stop` の hook を追加します。[Claude Code の hooks](/blog/claude-code-hooks) をご覧ください。スマートフォンで知りたいなら、終わったら channel で返信するよう Claude に頼みましょう。",
      },
    ],
  },
  cta: {
    title: "テキストに答えるだけから、自分のキューを片付ける存在へ。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月8日に Claude Code のドキュメント（Channels）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。Telegram、Discord、iMessage は各所有者の商標です。",
};
