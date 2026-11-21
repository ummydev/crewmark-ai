import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code の VPS 設定：Linux サーバーで 24 時間動かす",
    description:
      "Linux の VPS や Ubuntu サーバーに Claude Code を入れ、Remote Control をサーバーモードで起動し、tmux で動かし続けてスマホから操作する方法と、その限界。",
  },
  breadcrumb: "VPS で動かす Claude Code",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code を VPS で：Linux サーバーで動かし、スマホから操作する",
    lead: "Remote Control を使えばスマホの Claude アプリから Claude Code を操作できますが、それができるのは Claude Code を動かしているコンピューターの電源が入っている間だけです。借りた Linux サーバー、つまり VPS は電源が切れません。そこに Claude Code をインストールして Remote Control をサーバーモードで動かせば、どこにいてもスマホからそのセッションを開けます。このガイドでは、Ubuntu、Debian、その他のディストリビューションでの設定方法、動かし続ける方法、ウェブサイトにログインするためのデスクトップを追加する方法、そして [自宅の Mac mini](/blog/claude-code-mac-mini) と比べて Linux サーバーにできないことを説明します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "必要なもの",
      points: [
        "SSH で接続できる Linux サーバー。DigitalOcean や OVHcloud などのプロバイダーで用意します。Claude Code CLI はどのディストリビューションでも動きます。Claude Desktop には Ubuntu 22.04 以降または Debian 12 以降が必要です。",
        "Claude の Pro、Max、Ultra、Team、Enterprise のいずれかのプラン。Remote Control は API キーでは使えず、Team と Enterprise では先に Owner が有効にします。",
        "スマホの Claude アプリ（iOS または Android）、またはブラウザで開く claude.ai/code。",
        "必要に応じて、サーバー上のデスクトップ環境とリモートデスクトップ。Claude がログインの必要なウェブサイトを使うときのためです。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux VPS に Claude Code をセットアップする方法",
      steps: [
        {
          title: "サーバーを借りて接続する",
          text: "DigitalOcean や OVHcloud などのプロバイダーで Linux サーバーを作成し、SSH で接続します。Ubuntu 22.04 以降か Debian 12 以降を選んでおけば Claude Desktop も選択肢に残り、それ以外のディストリビューションでは CLI を使います。",
        },
        {
          title: "Claude Code をインストールしてログインする",
          text: "Anthropic のインストールスクリプトで Claude Code CLI をインストールします。CLI はターミナルで動くので（Anthropic は対応システムとして Ubuntu 20.04 以降や Debian 10 以降を挙げています）、SSH でしか接続しないヘッドレスサーバーに向いています。Ubuntu 22.04 以降か Debian 12 以降なら、代わりに apt で Claude Desktop をインストールすることもできます。Linux 版はベータです（[Linux 版 Claude Desktop](https://code.claude.com/docs/en/desktop-linux) を参照）。その後 `claude` を実行し、API キーではなく Claude アカウントでログインします。",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Remote Control をサーバーモードで起動する",
          text: "プロジェクトフォルダーで `claude remote-control` を実行します。複数の Claude Code セッションを同時にホストできるサーバーが起動し、それぞれのセッションをスマホから開けます。`--chrome` を付けると、それらのセッションで Chrome 連携がオンになります。代わりに対話型のセッションをすべて接続させたい場合は、`~/.claude/settings.json` で `remoteControlAtStartup` を true にします。",
          code: server,
        },
        {
          title: "ログアウトしても動かし続ける",
          text: "Remote Control は claude プロセスが動いている間しか使えず、ターミナルを閉じるとそのセッションはオフラインになります。SSH 接続が閉じても生き残るよう tmux や screen の中で、またはサービスとして動かしましょう。サーバーモードはネットワークがない状態が約 10 分続くと終了するので、上のループのように自動で再起動させます。長時間の実行での権限モードと利用上限については、[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7) をご覧ください。",
        },
        {
          title: "スマホから開く",
          text: "iOS または Android の Claude アプリ、または claude.ai/code を開き、セッションを選びます。Claude はサーバー上で動き、スマホは会話を表示してあなたのメッセージを送ります。設定の詳細とトラブルの解決方法は [Remote Control ガイド](/remote-claude-code) にあります。代わりに Telegram から Claude Code にメッセージを送りたい場合は、[Claude Code の channels](/blog/claude-code-channels) をご覧ください。",
        },
      ],
      source: { label: "出典：Anthropic の Remote Control ドキュメント", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "ウェブサイトへのログイン用にデスクトップを追加する",
      text: [
        "SSH で接続するサーバーには画面がありません。Claude がログインの必要なサイトを使うまでは、それで問題ありません。リモートデスクトップを追加すれば、そのログインを自分で済ませてから、Claude にブラウザを使わせることができます。",
      ],
      points: [
        "VPS にデスクトップ環境とリモートデスクトップサーバーをインストールし、どこかにログインする必要があるときにノートパソコンから接続します。",
        "Google Chrome か Microsoft Edge に Claude in Chrome 拡張機能を入れ、Claude に使わせたいサイトにログインしておきます。Claude in Chrome は Linux で動きますが、WSL には対応していません。",
        "`claude remote-control --chrome` でサーバーを起動すると、そのセッションでこのブラウザを使えます。",
        "リモートデスクトップには Tailscale 経由で接続します。Tailscale はデバイスを tailnet というプライベートなネットワークに入れ、互いに接続できるのはそれらのデバイスだけになります。[Tailscale とは](https://tailscale.com/kb/1151/what-is-tailscale)をご覧ください。",
        "Ubuntu や Debian にデスクトップがあれば、CLI に加えて Claude Desktop も選べます。",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Linux サーバーにできないこと",
      text: [
        "次のどれかが重要なら、代わりに [自宅の Mac mini](/blog/claude-code-mac-mini) を使いましょう。私たちの創業者が使っている構成です。",
      ],
      points: [
        "コンピューター操作（computer use）ができない。Linux では Claude がアプリや画面を操作できません。CLI のコンピューター操作は macOS のみで、Claude Desktop では macOS と Windows のリサーチプレビューです。",
        "iOS 開発ができない。Xcode と iOS Simulator は macOS でしか動かないので、Linux サーバーでは iPhone アプリのビルドも実行もできません。",
        "機能の少ないデスクトップアプリ。Linux 版の Claude Desktop は Ubuntu と Debian 向けのベータ版で、コンピューター操作、Cowork、音声入力がありません。",
        "動かし続ける必要があるプロセス。ほかの Remote Control の構成と同じく、セッションにつながるのは claude がサーバー上で動いている間だけです。",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Claude Code 用の Mac mini と Linux VPS の比較",
      headers: ["", "自宅の Mac mini", "Linux VPS"],
      rows: [
        ["動く場所", "自宅にある自分の Mac。ファイルはそこに置いたまま", "DigitalOcean や OVHcloud などのプロバイダーで借りたサーバー"],
        ["スマホからの Remote Control", "可：Claude Desktop または CLI", "可：どのディストリビューションでも CLI、Ubuntu 22.04 以降と Debian 12 以降では Claude Desktop（ベータ）"],
        ["コンピューター操作", "可：macOS の CLI。Desktop は Pro、Max、Ultra でリサーチプレビュー", "不可"],
        ["iOS 開発（Xcode、iOS Simulator）", "可", "不可：Mac が必要"],
        ["Claude in Chrome", "可", "可（Chrome または Edge）"],
        ["リモートデスクトップ", "Screen Sharing（Tailscale 経由で接続）", "自分で追加するデスクトップ環境とリモートデスクトップ"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "サーバーに決まった仕事を与える",
      text: [
        "スリープしないサーバーは、メッセージを送ればいつでも応答しますが、送らなければ待っているだけです。Crewmark は、その上の Claude Code の会話を、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は、macOS や Windows だけでなく Linux でも動く `crewmark` CLI が社員を起こし、共有ボードの issue を順に片付けさせます。動かすコンピューターは電源を入れたままにしておく必要があり、VPS ならその条件を満たします。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から、ソフトウェアエンジニアや SEO スペシャリストなどの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "サーバー上の Claude Code を接続する",
          text: "VPS 上の Claude Code の会話にセットアップ用のリンクを貼り付けます。`crewmark` CLI がインストールされ、その会話が社員と結び付けられます。Codex でも使えます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "平日のみか毎日か、深夜をまたいでもよい勤務時間、そして 15、30、60、120、240 分ごとの起動を設定します。",
        },
        {
          title: "スマホから issue を割り当てる",
          text: "どのブラウザからでも crewmark.ai のボードで issue を作成して割り当てられ、割り当てるとすぐに社員が起動します。レビューや判断が必要になると、社員は issue を「要対応」にして、そこであなたに質問します。任せる仕事の例は [Claude Code の活用例](/use-cases/claude-code) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Remote Control を使って Linux VPS に Claude Code をセットアップする" },
  mid: {
    title: "メッセージを送っていない間もサーバーに働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートで Claude Code を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "VPS で Claude Code を動かせますか？",
        a: "はい。Linux サーバーに Claude Code CLI をインストールし、Pro、Max、Ultra、Team、Enterprise のいずれかのプランでログインして、ログアウトしても動き続けるよう tmux の中で `claude remote-control` を実行します。あとはスマホの Claude アプリか claude.ai/code からそのセッションを開きます。",
      },
      {
        q: "Linux サーバーに Claude Code をインストールするには？",
        a: "Claude Code CLI をインストールし、Claude アカウントでログインします。CLI はどのディストリビューションでも動き、SSH で接続するヘッドレスサーバーでも使えます。Ubuntu 22.04 以降か Debian 12 以降なら、apt で Claude Desktop もインストールできます。Linux 版はベータで、コンピューター操作、Cowork、音声入力は含まれません。",
      },
      {
        q: "Claude Code Remote Control は Linux で使えますか？",
        a: "はい。複数のセッションをホストするサーバーなら `claude remote-control` を実行し、1 つのセッションだけなら `/remote-control` で Remote Control をオンにします。Pro、Max、Ultra、Team、Enterprise プランで claude.ai にログインしている必要があり、API キーには対応していません。",
      },
      {
        q: "SSH を閉じたあともサーバーで Claude Code を動かし続けるには？",
        a: "tmux や screen の中で、またはサービスとして動かします。ターミナルを閉じると claude プロセスが止まり、その Remote Control のセッションはオフラインになります。サーバーモードはネットワークがない状態が約 10 分続くと終了するので、再起動してくれるループやサービスで包んでおきましょう。",
      },
      {
        q: "Linux サーバーの Claude Code でコンピューター操作は使えますか？",
        a: "いいえ。Linux では、CLI でも Claude Desktop でもコンピューター操作（computer use）は使えません。Claude in Chrome は Linux でも動くので、Claude はブラウザでウェブサイトを使うことはできます。コンピューター操作や iOS 開発には、[自宅の Mac mini](/blog/claude-code-mac-mini) のような Mac を使いましょう。",
      },
      {
        q: "VPS で Claude Code を動かすには何が必要ですか？",
        a: "SSH で接続できる Linux サーバー、Remote Control を含む Claude のプラン（Pro、Max、Ultra、Team、Enterprise）、スマホの Claude アプリです。CLI はどのディストリビューションでも動きます。Claude Desktop には Ubuntu 22.04 以降か Debian 12 以降が必要です。",
      },
    ],
  },
  cta: {
    title: "サーバーを働かせましょう。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に Anthropic の Claude Code のドキュメント（Remote Control、Linux 版 Claude Desktop、コンピューター操作、Chrome 連携）および Tailscale のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic およびこのページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
