import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の VPS 設定：インストール、ログイン、SSH 接続",
    description:
      "Linux の VPS に Codex CLI を入れ、デバイス認証でログインし、ChatGPT デスクトップアプリで SSH ホストとして追加してスマホから操作する方法。",
  },
  breadcrumb: "VPS で動かす Codex",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex を VPS で：Linux サーバーにインストールして SSH で接続する",
    lead: "借りた Linux サーバー、つまり VPS はスリープせず、Codex CLI は Linux で動きます。押さえておきたいのは、スマートフォンからどう届くかです。ChatGPT アプリはサーバーに直接は接続しません。接続先は Mac か Windows PC の ChatGPT デスクトップアプリで、そのアプリが SSH でサーバー上のチャットを動かします。このガイドでは、サーバーへの Codex のインストールとサインイン、SSH ホストとしての追加、スマートフォンからの操作、tmux を使ったターミナルだけの構成、サーバーの安全対策、そしてサーバーを動かしたくない場合の Codex cloud を説明します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "VPS で動かす Codex の全体像",
      text: ["関わるマシンは 3 台で、それぞれの役割は 1 つです。"],
      points: [
        "Linux サーバーが Codex を動かします。そのプロジェクトのチャットは、サーバーの依存関係、セキュリティポリシー、計算資源を使って、そこでコマンドを実行し、ファイルを読み、変更を書き込みます。デスクトップアプリは SSH でサーバー上の Codex を、リモートユーザーのログインシェルで起動します。",
        "Mac か Windows PC が ChatGPT デスクトップアプリを動かし、SSH 接続を保ちます。スマートフォンがやり取りするホストはこのコンピューターなので、こちらもスリープせずオンラインにしておく必要があります。",
        "スマートフォンは ChatGPT アプリを動かし、リモートコントロールでそのホストを操作します。プロンプトと承認を送り、差分、ターミナルの出力、通知を表示します。",
        "OpenAI がリモートコントロールのホストとして挙げているのは macOS と Windows だけなので、スマートフォンを Linux サーバーと直接ペアリングする方法はドキュメントに載っていません。代わりに Mac か PC とペアリングしましょう。理想は [常時稼働の Mac mini](/blog/codex-mac-mini) です。",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "必要なもの",
      points: [
        "SSH で接続できる Linux サーバー。GitHub にある Codex CLI のインストールガイドは Ubuntu 20.04 以降または Debian 10 以降、RAM は最小 4 GB、推奨 8 GB としています。リリースビルドは x86_64 と ARM64 向けがあります。",
        "ChatGPT デスクトップアプリを入れた Mac か Windows PC。サーバーを SSH ホストとして追加するために使います。スマートフォンからサーバーに届くようにするなら、このコンピューターは電源を入れたままにしておく必要があります。",
        "Codex を使う ChatGPT アカウント。OpenAI のプラン表では、SSH のリモート接続は Plus、Pro、Business、Enterprise と API キーで使え、モバイルからのリモートコントロールは Plus、Pro、Business、Enterprise で使えますが、API キーでは使えません。",
        "スマートフォンの ChatGPT アプリ（iOS または Android）。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux VPS に Codex をセットアップする方法",
      steps: [
        {
          title: "サーバーを借りて SSH を確認する",
          text: "Linux サーバーを作成し、デスクトップアプリを動かす Mac か PC から SSH でログインできることを確認します。鍵認証を使い、root ではなく、Codex に必要な権限だけを持つアカウントを使いましょう。",
        },
        {
          title: "サーバーに Codex CLI をインストールする",
          text: "サーバーで OpenAI のインストールスクリプトを実行します。後で同じコマンドを実行すれば更新でき、npm でもインストールできます。Codex のサンドボックス用に bubblewrap をインストールします。PATH に `bwrap` がないと、Codex は非特権ユーザー名前空間を必要とする同梱のヘルパーに切り替え、起動時に警告を出します。Ubuntu 24.04 では、AppArmor の `bwrap-userns-restrict` プロファイルを読み込むまで警告が続く場合があります。",
          code: install,
        },
        {
          title: "ヘッドレスサーバーでログインする",
          text: "サーバーにはブラウザがないので、デバイスコードでのログインを使います。`codex login --device-auth` を実行するか Sign in with Device Code を選び、表示される指示に従います。この機能はベータで、デバイスコードでのログインは先に ChatGPT のセキュリティ設定か、ワークスペースの管理者がオンにしておく必要があります。使えない場合は、`ssh -L 1455:localhost:1455` でログインのコールバックを転送してサーバーで `codex login` を実行するか、サインイン済みのコンピューターから `~/.codex/auth.json` をコピーし、そのファイルをパスワードと同じように扱います。",
          code: login,
        },
        {
          title: "SSH の設定にサーバーを追加する",
          text: "Mac か PC で `~/.ssh/config` に Host エントリを追加し、`ssh devbox` が動くことを確認します。Codex はこのファイルから具体的なホストのエイリアスを読み取り、パターンだけのエントリは無視します。デスクトップアプリはリモートユーザーのログインシェルで Codex を起動するので、そこで `codex` が PATH に入っている必要があります。",
          code: ssh,
        },
        {
          title: "デスクトップアプリで SSH ホストとして追加する",
          text: "ChatGPT デスクトップアプリで Settings > Connections を開き、SSH ホストを追加するか有効にしてから、サーバー上のプロジェクトフォルダーを選びます。そのプロジェクトのチャットは、サーバー上でコマンドを実行し、ファイルを読み、変更を書き込みます。",
        },
        {
          title: "スマートフォンから操作する",
          text: "同じ Mac か PC で Settings > Connections > Control this Mac or PC を開き、Set up または Add を選んで、ChatGPT アプリで QR コードを読み取ります。スマートフォンで Codex を開き、そのコンピューターとサーバーのプロジェクトを選んで、チャットを始めます。チャットは Mac か PC を経由してサーバー上で動くので、そのコンピューターはスリープさせずオンラインにしておきます。その役目は [自宅の Mac mini](/blog/codex-mac-mini) に任せられます。設定の詳細と対処法は [Codex のリモートコントロール](/blog/codex-remote-control) にあります。",
        },
      ],
      source: { label: "出典：OpenAI のリモート接続と SSH ホストに関するドキュメント", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "ターミナルだけで使う：tmux の中で SSH 経由の Codex CLI を動かす",
      text: [
        "ターミナルさえあればいいなら、デスクトップアプリは省けます。SSH でサーバーに入り、tmux の中で Codex CLI を動かして、デタッチします。接続を切っても Codex は動き続け、SSH で入れるどのコンピューターからでも再びアタッチできます。",
      ],
      steps: [
        {
          title: "tmux の中で Codex を起動する",
          text: "tmux が入っていなければディストリビューションのパッケージからインストールし、セッションを始めて、プロジェクトフォルダーで `codex` を実行します。",
          code: tmux,
        },
        {
          title: "できないことを知っておく",
          text: "この構成はスマートフォンにはつながりません。OpenAI によると、モバイルの設定はデスクトップアプリから始めるもので、CLI からは設定できません。CLI には実験的な `codex remote-control` コマンドがあり、ドキュメントでは管理されたリモートコントロールのクライアントや SSH のワークフローと結び付けられていますが、CLI だけを動かすサーバーとスマートフォンをペアリングする方法は説明されていません。",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "サーバーを安全に保つ",
      points: [
        "ほかの SSH サーバーと同じように扱います。信頼できる鍵と最小権限のアカウントを使い、認証のないサービスを公開インターネットで待ち受けさせないようにします。",
        "Codex のアプリサーバーを公開しないでください。`codex app-server --listen` と `codex --remote` は主に開発とデバッグ用で、OpenAI は共有ネットワークや公開ネットワークでアプリサーバーのトランスポートを開かないよう警告しています。",
        "サーバーのネットワークの外から届くには、VPN か Tailscale のようなメッシュネットワークを使います。Tailscale は、暗号化された WireGuard の接続で自分のデバイスだけをつなぎます。",
        "`~/.codex/auth.json` は人に見せないでください。OpenAI はパスワードと同じように扱うよう求めています。",
        "サンドボックスの設定、セキュリティ制御、承認は、ローカルと同じようにサーバー上のチャットにも適用されます。Linux のサンドボックスには bubblewrap が必要です。",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "コンピューターとサーバーの間でチャットを移す",
      text: [
        "デスクトップアプリでは、チャットをその Git の状態ごと、コンピューターと接続した SSH ホストの間で引き継げます。両方に、同じ Git リポジトリのプロジェクトが保存されている必要があります。チャットのフッターで現在の実行場所を選び、引き継ぎ先のホストを選んで（This computer を選べば戻せます）、内容を確認してから Hand off を選びます。Codex は引き継ぎ先で worktree を作成するか、既存のものを再利用します。実行中の応答は中断され、チャットを Codex cloud に引き継ぐことはできません。",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "サーバーを使わない方法：Codex cloud",
      points: [
        "Codex cloud は、コーディングのタスクを OpenAI のクラウドで動かします。タスクごとに専用のワークスペースがあり、コンピューターがスリープしている間も作業を続けます。",
        "Web、デスクトップアプリ（Work in > Cloud）、スマートフォンの ChatGPT アプリ（Codex を開き、Cloud と環境を選ぶ）から始められます。デフォルトの環境ならリポジトリを選ばずに始められ、Codex は接続した GitHub や GitLab のアカウントからリポジトリをチェックアウトできます。",
        "クラウドタスクに見えるのはクラウド環境だけです。ローカルのファイル、実行中のプロセス、ブラウザのログイン状態、VPN のアクセスは引き継がれません。再利用できる構成は Work in > Cloud > Select environment > Create environment で作ります。",
        "API キーではなく、ChatGPT でのサインインが必要です。ターミナルからは、`codex cloud` でクラウドのチャットの一覧から選び、`codex cloud exec` でタスクを送信します。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mac mini のホスト、Linux の SSH ホスト、Codex cloud の比較",
      headers: ["", "Mac mini のホスト", "Linux の SSH ホスト", "Codex cloud"],
      rows: [
        ["Codex が動く場所", "Mac mini 上、ChatGPT デスクトップアプリの中", "サーバー上。Mac か PC のデスクトップアプリが SSH で起動する", "OpenAI のクラウド上、タスクごとのワークスペースで"],
        ["スマートフォンの接続先", "Mac mini", "デスクトップアプリを動かしている Mac か Windows PC", "OpenAI のクラウド：Codex を開いて Cloud を選ぶ"],
        ["電源を入れておくもの", "Mac mini", "サーバーと、Mac か PC", "自分のものは何もない"],
        ["ファイル、ログイン状態、VPN", "Mac mini 上のすべて", "サーバー上にあるもの", "クラウド環境だけ。ローカルのファイル、ブラウザのログイン状態、VPN のアクセスは引き継がれない"],
        ["向いている用途", "Computer Use と Chrome 拡張を使ったブラウザのタスク、iOS 開発、ファイルを自宅に置いておくこと", "サーバーの計算資源と依存関係を使ったターミナルでの作業", "リポジトリだけで済むコーディングのタスク"],
        ["プラン（OpenAI の表）", "モバイルからのリモートコントロール：Plus、Pro、Business、Enterprise", "SSH 接続：それらのプランと API キー。ホストをスマートフォンで操作するには、やはりそれらのプランのいずれかが必要", "Plus、Pro、Business、Enterprise。API キーでは使えない"],
        ["設定", "デスクトップアプリ、スリープ防止の設定、リモートコントロール", "サーバーの CLI、SSH の設定、デスクトップアプリの SSH ホスト", "クラウド環境を選ぶか作成する"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "サーバーに決まった仕事を与える",
      text: [
        "スリープしないサーバーでも、あなたの次のプロンプトを待つことに変わりはありません。Crewmark は、その上の Codex のチャットを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は、macOS や Windows だけでなく Linux でも動く `crewmark` CLI が社員を起こし、共有ボードの issue を順に片付けさせます。動かすコンピューターは電源を入れたままにしておく必要があり、VPS ならその条件を満たします。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から、ソフトウェアエンジニアや SEO スペシャリストなどの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "サーバー上の Codex を接続する",
          text: "サーバー上の Codex のチャットにセットアップ用のリンクを貼り付けます。`crewmark` CLI がインストールされ、そのチャットが社員と結び付けられます。Claude Code でも使えます。[VPS で動かす Claude Code](/blog/claude-code-vps) をご覧ください。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "平日のみか毎日か、深夜をまたいでもよい勤務時間、そして 15、30、60、120、240 分ごとの起動を設定します。起こすたびに同じ Codex のチャットに届くので、前回の続きから作業します。Codex 自身のスケジュール機能との比較は [自律的に動く Codex](/proactive-codex) にあります。",
        },
        {
          title: "スマートフォンから issue を割り当て、話しかける",
          text: "スマートフォンのブラウザで crewmark.ai を開き、issue を作成して割り当てるか、社員の作業ログ（Work）に書き込みます。メッセージはサーバー上の Codex のチャットに届き、社員はそこで返信します。issue を割り当てるとすぐに社員が起き、レビューや判断が必要になると issue を Needs action にして、そこであなたに質問します。任せる仕事の例は [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Linux VPS を SSH ホストにして Codex をセットアップする" },
  mid: {
    title: "プロンプトを送っていない間もサーバーに働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートで Codex を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "VPS で Codex を動かせますか？",
        a: "はい。Codex CLI は Linux で動きます。`curl -fsSL https://chatgpt.com/codex/install.sh | sh` でインストールし、`codex login --device-auth` でサインインしたら、tmux の中で SSH 経由で使うか、Mac か Windows PC の ChatGPT デスクトップアプリでサーバーを SSH ホストとして追加します。そのコンピューターはスマートフォンから操作できます。",
      },
      {
        q: "ブラウザなしで VPS の Codex にログインするには？",
        a: "`codex login --device-auth` を実行するか Sign in with Device Code を選び、表示される指示に従います。この機能はベータで、ChatGPT のセキュリティ設定かワークスペースの管理者がオンにしておく必要があります。それ以外の方法としては、`ssh -L 1455:localhost:1455 user@server` でコールバックを転送してサーバーで `codex login` を実行するか、サインイン済みのコンピューターから `~/.codex/auth.json` をコピーします。",
      },
      {
        q: "Codex を VPS に接続するには？",
        a: "ChatGPT デスクトップアプリを動かしている Mac か PC の `~/.ssh/config` にサーバーを追加し、`ssh <alias>` が動くことを確認します。`codex` がインストールされ、サインイン済みで、リモートユーザーのログインシェルの PATH に入っていることを確かめてから、Settings > Connections でホストを追加し、リモートのプロジェクトフォルダーを選びます。",
      },
      {
        q: "VPS の Codex をスマートフォンから操作できますか？",
        a: "はい、Mac か Windows PC を経由すれば可能です。スマートフォンはそのコンピューターの ChatGPT デスクトップアプリを操作し、アプリが SSH でサーバー上のチャットを動かすので、そのコンピューターはスリープせずオンラインにしておく必要があります。スマートフォンを Linux サーバーや CLI だけと直接ペアリングする方法は、OpenAI のドキュメントに載っていません。",
      },
      {
        q: "ChatGPT デスクトップアプリは Linux サーバーで動きますか？",
        a: "Linux 向けの ChatGPT デスクトップアプリはプレビューとして提供されており、Ubuntu、Debian、Fedora、Arch Linux のデスクトップ版に対応していますが、まだ Computer Use はありません。デスクトップ環境のないサーバーについては OpenAI のドキュメントに記載がなく、Linux はリモートコントロールのホストとして挙げられていません。VPS では Codex CLI を使いましょう。",
      },
      {
        q: "VPS で Codex を動かしても安全ですか？",
        a: "ほかの SSH サーバーと同じように扱いましょう。鍵認証、最小権限のアカウント、認証のない公開の待ち受けを置かないことが基本です。Codex のアプリサーバーを公開ネットワークにさらさず、外からサーバーに届くには VPN かメッシュネットワークを使い、`~/.codex/auth.json` を人に見せず、サンドボックスが動くよう bubblewrap をインストールします。",
      },
    ],
  },
  cta: {
    title: "サーバーを働かせましょう。",
    text: "Crewmark は Codex と Claude Code のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に OpenAI のドキュメント（Remote connections、Codex CLI、認証、サンドボックス、Linux 版アプリ、Codex cloud、プラン）、GitHub の Codex README とインストールガイド、Tailscale のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI およびこのページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。",
};
