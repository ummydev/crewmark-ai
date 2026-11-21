import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code の Mac mini 設定：スマホで 24 時間操作",
    description:
      "自宅の Mac mini で Claude Code を 24 時間動かす方法。スリープを防ぎ、Remote Control をオンにしてスマホから操作し、Tailscale 経由でデスクトップに入る。",
  },
  breadcrumb: "Mac mini で動かす Claude Code",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code を Mac mini で：スマホから操作する常時稼働サーバー",
    lead: "Remote Control を使えばスマホの Claude アプリから Claude Code を操作できますが、それができるのは Claude Code を動かしているコンピューターの電源が入っている間だけです。それなら、電源を切らないコンピューターを用意しましょう。私たちの創業者は、自宅の Mac mini を常時稼働のサーバーにしています。Claude Code は Remote Control をオンにしてその上で動き、スマホで操作し、MacBook Air からは Tailscale とリモートデスクトップ経由でそのデスクトップに入ります。データはすべて Mac mini に置いたままです。創業者が今のところいちばんうまくいくと感じている構成で、ここではその作り方を紹介します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Claude Code に電源を切らないコンピューターが必要な理由",
      text: [
        "いちばん手早いのは、今あるコンピューターで始めることです。Claude デスクトップアプリには Remote Control が組み込まれています。操作したいコンピューターで Settings を開いて Connect new sessions to Remote Control をオンにし、スマホの Claude アプリからそのセッションを開きます。Claude はそのコンピューター上で動き続け、スマホはそれをのぞく窓になります。",
        "難点は、そのコンピューターの電源が入っている間しか使えないことです。ノートパソコンを閉じると、再び起動するまでスマホから Claude Code に届きません。自宅で電源を入れたままにした Mac mini なら、この制約がなくなります。このガイドの残りでは、その構成を作ります。",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "構成の全体像",
      points: [
        "自宅の Mac mini。電源を入れ、スリープしない設定にします。これがサーバーで、Claude Code、リポジトリ、ログイン状態、ファイルはすべてここに置きます。",
        "Remote Control をオンにした Claude Code。Claude デスクトップアプリでも CLI でも構いません。",
        "スマホの Claude アプリ（iOS または Android）、または任意のブラウザで開く claude.ai/code。どこからでもそのセッションを開けます。",
        "Tailscale と Screen Sharing。ノートパソコンから、Mac mini の前に座っているかのようにそのデスクトップを開けます。",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Linux サーバーではなく Mac mini を選ぶ理由",
      text: [
        "借りた Linux サーバーも電源は入りっぱなしで、その構成は [VPS で動かす Claude Code](/blog/claude-code-vps) で紹介しています。Mac には、Linux にはできないことがあります。",
      ],
      points: [
        "コンピューター操作（computer use）。Claude がアプリや画面を操作する機能です。CLI では macOS のみ。Claude Desktop では macOS と Windows でリサーチプレビューとして提供され、Pro、Max、Ultra プラン（Team と Enterprise は対象外）が必要なうえ、アプリが起動している必要があります。[Anthropic のコンピューター操作のドキュメント](https://code.claude.com/docs/en/computer-use)をご覧ください。",
        "iOS アプリ。Xcode と iOS Simulator は macOS でしか動かないので、Claude Code に iPhone アプリの作業をさせるなら、サーバーは Mac である必要があります。",
        "フル機能のデスクトップアプリ。Linux 版の Claude Desktop は Ubuntu と Debian 向けのベータ版で、コンピューター操作、Cowork、音声入力がありません。",
        "データが自宅にある。リポジトリ、ブラウザのログイン状態、ファイルは、プロバイダーのサーバーではなく自分のマシンに置いたままです。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mac mini に Claude Code をセットアップする方法",
      steps: [
        {
          title: "Mac mini をスリープさせない",
          text: "System Settings > Energy で Prevent automatic sleeping when the display is off をオンにすると、ディスプレイがオフでも Mac mini は動き続けます。Wake for network access もオンにしておくと、共有サービスのためにスリープから復帰できます。[Apple のスリープとスリープ解除の設定](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)をご覧ください。",
        },
        {
          title: "Claude Code をインストールしてログインする",
          text: "Claude デスクトップアプリ、Claude Code CLI、またはその両方をインストールし、Claude アカウントでログインします。Remote Control には Pro、Max、Ultra、Team、Enterprise のいずれかのプランが必要です。API キーでは使えず、Team と Enterprise では先に Owner が有効にする必要があります。",
        },
        {
          title: "Remote Control をオンにする",
          text: "デスクトップアプリで Settings > Code（または Settings > Claude Code）を開き、Connect new sessions to Remote Control をオンにすると、新しいセッションをすべてスマホから開けるようになります。1 つのセッションだけなら、Code タブで `/remote-control` または `/rc` と入力します。CLI では `~/.claude/settings.json` で `remoteControlAtStartup` を true にするか、複数のセッションを同時にホストするサーバーとして `claude remote-control` を実行します。",
          code: remoteControl,
        },
        {
          title: "スマホから開く",
          text: "iOS または Android の Claude アプリ、またはブラウザで claude.ai/code を開き、セッションを選びます。Claude は Mac mini 上で動き続け、スマホはメッセージを送って結果を表示します。ネットワークが切れても、Mac mini がオンラインに戻れば Claude Code は自動で再接続します。設定の詳細とトラブルの解決方法は [Remote Control ガイド](/remote-claude-code) にあります。",
        },
        {
          title: "Mac mini とノートパソコンを Tailscale につなぐ",
          text: "Mac mini と、作業に使うノートパソコンの両方に Tailscale をインストールし、同じ tailnet に追加します。Tailscale は、暗号化された WireGuard 接続でデバイス間にプライベートなピアツーピアのネットワークを作り、互いに接続できるのは tailnet 内のデバイスだけです。[Tailscale とは](https://tailscale.com/kb/1151/what-is-tailscale)をご覧ください。",
        },
        {
          title: "Screen Sharing をオンにする",
          text: "Mac mini で System Settings > General > Sharing を開き、Screen Sharing をオンにします。Remote Management とは同時にオンにできないので、Remote Management がオンなら先にオフにしてください。[Apple の Screen Sharing ガイド](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)をご覧ください。",
        },
        {
          title: "ノートパソコンから作業する",
          text: "ノートパソコンから、tailnet 上の Mac mini の名前またはアドレスに Screen Sharing で接続します。そのデスクトップが表示されるので、ブラウザでウェブサイトにログインしたり、Xcode と Simulator を開いたり、Claude の作業を見守ったりできます。自宅からでも、ほかのどこからでも構いません。私たちの創業者は MacBook Air からこの方法で作業していて、ファイルが Mac mini の外に出ることはありません。",
        },
      ],
      source: { label: "出典：Anthropic の Remote Control ドキュメント", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "動き続ける条件と止まる原因",
      points: [
        "Claude Code のプロセスが動き続けている必要があります。デスクトップアプリを終了したりターミナルを閉じたりするとセッションはオフラインになるので、Mac mini 上で開いたままにしておきます。",
        "スリープやネットワークの切断からは復帰できます。マシンがオンラインに戻れば、Claude Code は自動で再接続します。サーバーモード（`claude remote-control`）はそれほど粘り強くなく、ネットワークがない状態が約 10 分続くと終了するので、もう一度起動してください。",
        "Remote Control は、すでに動いているセッションを操作する機能です。自分から作業を始めることはなく、タスクが終わると Claude はあなたの次のメッセージを待ちます。",
        "権限の確認や利用上限も長時間の実行を止めます。権限モード、`/goal`、プランの上限については [Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7) で説明しています。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "常時オンの Mac mini に決まった仕事を与える",
      text: [
        "常時オンの Mac mini は、メッセージを送ればいつでも応答しますが、送らなければ待っているだけです。Crewmark は、その上の Claude Code の会話を、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は `crewmark` CLI が社員を起こし、共有ボードの issue を順に片付けさせます。動かすコンピューターは電源を入れたままにしておく必要があり、Mac mini ならその条件を満たします。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から、ソフトウェアエンジニアや SEO スペシャリストなどの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "Mac mini 上の Claude Code を接続する",
          text: "Mac mini 上の Claude Code の会話にセットアップ用のリンクを貼り付けます。`crewmark` CLI がインストールされ、その会話が社員と結び付けられます。Codex でも使えます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "勤務時間（平日のみか毎日か）と、社員を起こす間隔（15、30、60、120、240 分ごと）を選びます。勤務時間は深夜をまたいで設定できるので、スリープしないマシンなら夜勤も組めます。",
        },
        {
          title: "スマホから issue を割り当てる",
          text: "どのブラウザからでも crewmark.ai のボードで issue を作成して割り当てられ、割り当てるとすぐに社員が起動します。社員は各 issue のステータスを最新に保ち、レビューや判断が必要になると issue を「要対応」にして、そこであなたに質問します。任せる仕事の例は [Claude Code の活用例](/use-cases/claude-code) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mac mini を常時稼働サーバーにして Claude Code をセットアップする" },
  mid: {
    title: "メッセージを送っていない間も Mac mini に働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートで Claude Code を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Code は Mac mini で 24 時間動かせますか？",
        a: "はい。Mac mini がスリープせず、Claude Code のプロセスが動き続けていれば可能です。System Settings > Energy で Prevent automatic sleeping when the display is off をオンにし、Claude デスクトップアプリを開いたままにして（または CLI を動かしたままにして）、スマホからつなげるよう Remote Control をオンにします。権限の確認と利用上限は引き続きかかります。",
      },
      {
        q: "Mac mini に Claude Code をセットアップするには？",
        a: "Energy の設定で Mac をスリープさせないようにし、Claude Code か Claude デスクトップアプリをインストールしてログインし、Connect new sessions to Remote Control をオンにして（または `claude remote-control` を実行して）、スマホの Claude アプリでセッションを開きます。Tailscale と Screen Sharing を加えれば、ノートパソコンからそのデスクトップに入れます。",
      },
      {
        q: "iPhone から Mac mini の Claude Code を使うには？",
        a: "Remote Control を使います。Mac mini 上のセッションで Remote Control をオンにし、iPhone の Claude アプリ（または claude.ai/code）を開いてセッションを選びます。Claude は Mac mini 上で動き、スマホはメッセージを送って結果を表示します。Pro、Max、Ultra、Team、Enterprise のいずれかのプランが必要です。",
      },
      {
        q: "Claude Code に Tailscale は必要ですか？",
        a: "Remote Control には不要です。セッションは Claude アプリで開けます。Tailscale は Mac mini そのものに入るため、たとえばノートパソコンから Screen Sharing でそのデスクトップを開くためのものです。デバイスを tailnet というプライベートなネットワークに入れ、互いに接続できるのはそれらのデバイスだけになります。",
      },
      {
        q: "Mac mini の Claude Code で iOS アプリを作れますか？",
        a: "それを可能にするのが Mac です。Xcode と iOS Simulator は macOS でしか動かないため、この構成では Linux サーバーではなく Mac mini を使います。Mac mini 上でアプリのプロジェクトフォルダーを開いて Claude Code を動かし、Simulator を自分で見たいときは Screen Sharing でそのデスクトップを開きます。",
      },
      {
        q: "Claude Code には Mac mini と Linux VPS のどちらがいいですか？",
        a: "Claude Code に必要なのがターミナルとブラウザだけなら、Linux VPS で足ります。CLI はどのディストリビューションでも動き、Claude in Chrome も Linux で使えます。コンピューター操作、Xcode と Simulator を使った iOS 開発が必要な場合や、ファイルを自宅のマシンに置いておきたい場合は Mac mini を選びましょう。[VPS で動かす Claude Code](/blog/claude-code-vps) をご覧ください。",
      },
    ],
  },
  cta: {
    title: "Mac mini に仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に Anthropic の Claude Code のドキュメント（Remote Control、コンピューター操作、Linux 版 Claude Desktop）、Apple サポート、Tailscale のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、Apple、Tailscale とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。Mac、Mac mini、Xcode は Apple の商標です。",
};
