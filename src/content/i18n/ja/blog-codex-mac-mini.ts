import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の Mac mini 設定：スマホで 24 時間操作",
    description:
      "Mac mini で Codex を 24 時間動かす：ChatGPT デスクトップアプリと CLI の導入、スリープ防止、リモートコントロール、スマホのペアリング、Computer Use。",
  },
  breadcrumb: "Mac mini で動かす Codex",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex を Mac mini で：スマートフォンから操作する常時稼働のホスト",
    lead: "リモートコントロールを使えばスマートフォンの ChatGPT アプリから Codex を使えますが、それができるのは Codex を動かしているコンピューターがスリープせずオンラインの間だけです。ノートパソコンを閉じれば、スマートフォンからは届かなくなります。長時間の作業には OpenAI は常時稼働の専用の Mac を勧めており、自宅の Mac mini はその条件に合います。電源を入れたままにでき、プロジェクト、ログイン状態、ツールを自分のマシンに置いたまま、Computer Use やブラウザのタスクも動かせます。このガイドでは、Codex のインストール、スリープさせない設定、リモートコントロールの設定、スマートフォンのペアリング、ノートパソコンからそのデスクトップに入る方法を説明します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Codex のホストに Mac mini を選ぶ理由",
      text: [
        "スマートフォンが Codex を動かすわけではありません。スマートフォンはプロンプト、承認、追加の指示を送り、それ以外はすべてホストが用意します。プロジェクト、チャット、ファイル、認証情報、プラグイン、MCP サーバー、スキル、Computer Use、ブラウザ、ローカルのツールです。つまり、スマートフォンから Codex に何ができるか、そもそも届くかどうかはホストで決まります。スリープしない Mac mini は、よいホストになります。",
      ],
      points: [
        "電源が入ったまま。ホストがスリープしたり、ネットワークが切れたり、アプリが閉じたりすると、戻るまでリモートアクセスは途切れます。",
        "Computer Use とブラウザのタスク。ChatGPT デスクトップアプリは macOS と Windows で Computer Use を動かせますが、Linux のプレビュー版にはまだありません。Windows の Computer Use はアクティブなデスクトップを占有し、セッションのロックを解除しておく必要があります。Mac には locked use（ロック中の利用）があるので、スマートフォンから始めた Computer Use のタスクを Mac のロック後も続けられます。",
        "iOS アプリ。Xcode と iOS Simulator は macOS でしか動かないので、Codex に iPhone アプリの作業をさせるなら、ホストは Mac である必要があります。",
        "データが自宅にある。リポジトリ、ブラウザのログイン状態、認証情報は自分のマシンに置いたままです。ホストから届くので、ログインが必要なウェブサイトやデスクトップアプリも使えます。",
        "サーバーの拠点にもなる。同じデスクトップアプリで Linux サーバーを SSH ホストとして追加できるので、チャットをサーバーで動かしながら、Mac mini をスマートフォンの接続先となる常時稼働のコンピューターにできます。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "必要なもの",
      points: [
        "電源を入れたまま、インターネットにつないでおける Mac mini。",
        "Codex を使える ChatGPT アカウント。OpenAI のプラン表では、モバイルからのリモートコントロールは Plus、Pro、Business、Enterprise で使え、API キーでは使えません。ChatGPT のワークスペースでは、先に管理者が Remote Control のアクセスをオンにする必要がある場合があります。",
        "スマートフォンの最新版の ChatGPT アプリ（iOS または Android）。Mac mini と同じアカウントとワークスペースにサインインしておきます。",
        "必要に応じて、Mac mini とノートパソコンに Tailscale。どこからでも Mac mini のデスクトップに入れるようにします。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mac mini に Codex をセットアップする方法",
      steps: [
        {
          title: "ChatGPT デスクトップアプリと Codex CLI をインストールする",
          text: "2026年7月9日から、Codex は ChatGPT デスクトップアプリの中で Chat や Work と並んでいます。macOS 版のアプリをインストールし、スマートフォンで使っているのと同じアカウントとワークスペースでサインインして、Codex を選びます。Codex CLI は必須ではありませんが、SSH で入ったときに便利です。OpenAI のスクリプトか Homebrew でインストールし、`codex` を実行して Sign in with ChatGPT を選びます。`codex app` はデスクトップアプリを開き、入っていなければインストールします。",
          code: install,
        },
        {
          title: "Mac mini をスリープさせない",
          text: "System Settings > Energy で Prevent automatic sleeping when the display is off をオンにすると、ディスプレイがオフでも Mac mini は動き続けます。Wake for network access をオンにすると、共有サービスのためにスリープから復帰できます（[Apple のスリープとスリープ解除の設定](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)を参照）。そのうえでデスクトップアプリの Settings > General > Prevent sleep while running をオンにすると、離れている間もローカルのチャットが続きます。",
        },
        {
          title: "リモートコントロールをオンにする",
          text: "デスクトップアプリで Settings > Connections > Control this Mac or PC を開き、Set up または Add を選びます。リモートアクセスを承認して必要な確認を済ませると、アプリに QR コードが表示されます。Settings > Connections では、コンピューターをスリープさせない設定、Computer Use の有効化、Chrome 拡張のインストール、接続中のデバイスの管理もできます。",
        },
        {
          title: "スマートフォンをペアリングする",
          text: "スマートフォンで QR コードを読み取ると ChatGPT が開きます。アカウントとワークスペースを確認し、MFA、SSO、パスキーの手順があれば済ませます。すると Mac mini が ChatGPT アプリの Codex の下（古いバージョンでは Remote）に表示され、そのプロジェクトでチャットを始めたり、コマンドを承認したり、差分を確認したりできます。1 つの QR コードで 1 台のスマートフォンと 1 台のホストをペアリングするので、使うスマートフォンごとにペアリングします。ノートパソコンからも操作したい場合は、その機能があればノートパソコンで Settings > Connections > Control other devices を使います。",
        },
        {
          title: "Computer Use と Chrome 拡張をオンにする",
          text: "ブラウザやデスクトップのタスクには、ホストに両方が必要です。Codex を選んだ状態で Settings > Computer use を開き、Control の下の Any App で Install を選ぶかスイッチをオンにし、Settings > Connections から Chrome 拡張をインストールします。Computer Use は一部の地域でしか使えません。スマートフォンから始めた Computer Use のタスクを Mac のロック中も動かすには、Settings > Computer Use で locked use をオンにします。Apple の認証プラグインがインストールされ、ロックが解除されるのは Computer Use のターンが動いている間だけで、誰かが Mac mini のキーボードやポインターを使うと再びロックされます。",
        },
        {
          title: "コードがサーバーにあるなら SSH ホストを追加する",
          text: "Settings > Connections では、`~/.ssh/config` にある Linux サーバーを SSH ホストとして追加することもでき、そのあとサーバー上のプロジェクトフォルダーを選びます。そのプロジェクトのチャットはサーバー上で動き、スマートフォンは引き続き Mac mini に接続します。設定方法は [VPS で動かす Codex](/blog/codex-vps) にあります。",
        },
        {
          title: "Tailscale と Screen Sharing で Mac mini のデスクトップに入る",
          text: "Mac mini とノートパソコンに Tailscale をインストールし、両方を同じ tailnet に追加します。tailnet は、暗号化された WireGuard 接続で自分のデバイス同士だけがつながるプライベートなネットワークです（[Tailscale とは](https://tailscale.com/kb/1151/what-is-tailscale)を参照）。Mac mini で System Settings > General > Sharing > Screen Sharing をオンにします。Remote Management とは同時にオンにできません。あとはノートパソコンから tailnet 上の Mac mini の名前に接続すれば、ウェブサイトにログインしたり、Computer Use が承認できないセキュリティやプライバシーの確認に答えたり、Codex の作業を見守ったりできます（[Apple の Screen Sharing ガイド](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)を参照）。",
        },
      ],
      source: { label: "出典：OpenAI のドキュメント「Remote connections」", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "つながり続ける条件と止まる原因",
      points: [
        "Mac mini はスリープせず、オンラインで、同じアカウントとワークスペースにサインインし、デスクトップアプリを開いたままにしておく必要があります。スリープしたり、ネットワークが切れたり、アプリが閉じたりすると、戻るまでスマートフォンからは届きません。自分で Sleep を選んだ場合もアクセスは止まります。",
        "デスクトップアプリからサインアウトすると Remote Control はオフになりますが、ペアリングは残ります。サインインし直したら、Remote Control をもう一度オンにします。",
        "Add を選んだあとにエラーが出たら、Mac mini のデスクトップアプリを再起動してもう一度試します。2026年6月8日以降使っていないペアリングは、両方のアプリを更新してペアリングし直す必要があります。",
        "リモートコントロールが自分から作業を始めることはありません。タスクが終わると、Codex は通知して次のプロンプトを待ちます。スケジュールタスクなど、あなたなしで作業を始める方法については、[自律的に動く Codex](/proactive-codex) と [Codex の長時間タスク](/blog/codex-long-running-tasks) をご覧ください。",
        "ほかの対処法は [Codex のリモートコントロール](/blog/codex-remote-control#troubleshooting) にあります。",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "Codex に届き続けるほかの方法",
      points: [
        "Linux サーバーを SSH ホストにすると Codex はサーバー上で動きますが、スマートフォンが接続するのは引き続きデスクトップアプリを動かしている Mac か Windows PC なので、そのコンピューターも電源を入れたままにする必要があります。その役目は Mac mini に任せられます。[VPS で動かす Codex](/blog/codex-vps) をご覧ください。",
        "Codex cloud はタスクを OpenAI のクラウドで動かし、コンピューターがスリープしている間も作業を続けます。見えるのはクラウド環境だけなので、ローカルのファイル、ブラウザのログイン状態、VPN のアクセスはそこにありません。",
        "Claude Code の場合、同じ常時稼働の Mac mini の構成は [Mac mini で動かす Claude Code](/blog/claude-code-mac-mini) に、Anthropic 版のリモートコントロールは [Claude Code の Remote Control](/remote-claude-code) にあります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "常時オンの Mac mini に決まった仕事を与える",
      text: [
        "常時オンの Mac mini は、スマートフォンからメッセージを送ればいつでも応答しますが、送らなければ待っているだけです。Crewmark は、その上の Codex のチャットを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は `crewmark` CLI が社員を起こし、共有ボードの issue を順に片付けさせます。動かすコンピューターは電源を入れたままにしておく必要があり、Mac mini ならその条件を満たします。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から、ソフトウェアエンジニアや SEO スペシャリストなどの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "Mac mini 上の Codex を接続する",
          text: "Mac mini 上の Codex のチャットにセットアップ用のリンクを貼り付けます。`crewmark` CLI がインストールされ、そのチャットが社員と結び付けられます。Claude Code でも使えます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "勤務時間（平日のみか毎日か）と、社員を起こす間隔（15、30、60、120、240 分ごと）を選びます。勤務時間は深夜をまたいで設定できるので、スリープしないマシンなら夜勤も組めます。起こすたびに同じ Codex のチャットに届くので、前回の続きから作業します。",
        },
        {
          title: "スマートフォンから issue を割り当て、話しかける",
          text: "スマートフォンのブラウザで crewmark.ai を開き、issue を作成して割り当てるか、社員の作業ログ（Work）に書き込みます。社員はそこで返信します。issue を割り当てるとすぐに社員が起き、レビューや判断が必要になると issue を Needs action にして、そこであなたに質問します。任せる仕事の例は [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mac mini を常時稼働のホストにして Codex をセットアップする" },
  mid: {
    title: "メッセージを送っていない間も Mac mini に働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートで Codex を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Codex は Mac mini で 24 時間動かせますか？",
        a: "はい。Mac mini がスリープせず、オンラインで、サインインしたまま ChatGPT デスクトップアプリを開いていれば可能です。System Settings > Energy で Prevent automatic sleeping when the display is off を、アプリの Settings > General で Prevent sleep while running をオンにし、スマートフォンから届くようにリモートコントロールを設定します。ほかに作業を始めるものがなければ、Codex はタスクのたびにあなたの次のプロンプトを待ちます。",
      },
      {
        q: "Mac mini に Codex をインストールするには？",
        a: "macOS 版の ChatGPT デスクトップアプリをインストールし、その中で Codex を選びます。ターミナル用には、`curl -fsSL https://chatgpt.com/codex/install.sh | sh` か `brew install --cask codex` で Codex CLI をインストールし、`codex` を実行して Sign in with ChatGPT を選びます。`codex app` はデスクトップアプリを開き、入っていなければインストールします。",
      },
      {
        q: "iPhone から Mac mini の Codex を使うには？",
        a: "Mac mini のデスクトップアプリで Settings > Connections > Control this Mac or PC を開いて Set up または Add を選び、iPhone で QR コードを読み取ります。すると Mac mini が ChatGPT アプリの Codex の下に表示され、チャットを始めたり、コマンドを承認したり、差分を確認したりできます。Android の ChatGPT アプリでも使えます。",
      },
      {
        q: "Mac で Codex を使うための最小要件は？",
        a: "Codex CLI については、GitHub にある OpenAI のインストールガイドが macOS 12 以降、RAM は最小 4 GB、推奨 8 GB としています。私たちが確認した OpenAI のドキュメントには、ChatGPT デスクトップアプリ単独の要件は載っていません。リモートコントロールには、さらにアカウントで Codex を使えることと、スマートフォンに最新版の ChatGPT アプリが必要です。",
      },
      {
        q: "Codex のリモートコントロールに Tailscale は必要ですか？",
        a: "いいえ。リモートコントロールは OpenAI の安全なリレーを経由するので、Mac mini が公開インターネットにさらされることはありません。Tailscale は Mac mini そのものに入るためのもので、たとえば外出先のノートパソコンから Screen Sharing でデスクトップを開いたり、SSH で接続したりするときに使います。OpenAI のドキュメントも、自分のネットワークの外にあるマシンに届くには VPN かメッシュネットワークを勧めています。",
      },
      {
        q: "Codex には Mac mini と Linux VPS のどちらがいいですか？",
        a: "Codex に必要なのがターミナルだけなら Linux サーバーで足ります。CLI は Linux で動き、デスクトップアプリから SSH でそのプロジェクトを開けます。ただしスマートフォンが接続するのは引き続きデスクトップアプリを動かしている Mac か Windows PC なので、いずれにせよそのコンピューターは電源を入れておく必要があります。Computer Use、Chrome 拡張を使ったブラウザのタスク、iOS 開発が必要な場合や、ファイルを自宅に置いておきたい場合は Mac mini を選びましょう。[VPS で動かす Codex](/blog/codex-vps) をご覧ください。",
      },
    ],
  },
  cta: {
    title: "Mac mini に仕事を。",
    text: "Crewmark は Codex と Claude Code のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に OpenAI のドキュメント（Remote connections、Computer Use、Codex CLI、設定、プラン）、Apple サポート、Tailscale のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI、Apple、Tailscale とは提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。Mac、Mac mini、Xcode は Apple の商標です。",
};
