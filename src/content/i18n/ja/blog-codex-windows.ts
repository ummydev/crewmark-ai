import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の Windows 版：アプリ、CLI、サンドボックス、WSL2",
    description:
      "Windows で Codex を ChatGPT アプリか CLI で導入し、PowerShell と Windows サンドボックス、または WSL2 で動かす方法と、サンドボックス設定の失敗の直し方。",
  },
  breadcrumb: "Windows で使う Codex",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex を Windows で：アプリか CLI を入れて、サンドボックスか WSL2 を選ぶ",
    lead: "Codex は Windows でネイティブに動きます。2026年7月9日から Codex アプリは ChatGPT デスクトップアプリの一部になったので、ChatGPT をインストールしてその中で Codex に切り替えます。ターミナル用の Codex CLI は、PowerShell のコマンド 1 つでインストールできます。デフォルトでは、エージェントは Windows サンドボックスの下で PowerShell で動き、代わりに WSL2 で動かすこともできます。このガイドでは、ダウンロードとインストール、3 種類のサンドボックスとそれぞれに必要な Windows のバージョン、サンドボックスのセットアップに失敗したときのドキュメントに載っている対処法、Computer Use、そしてスマートフォンから Windows PC を操作する方法を説明します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Windows にどの Codex を入れるか",
      points: [
        "ウィンドウで使いたいなら ChatGPT デスクトップアプリ。Codex には Chat や Work と並ぶ専用のコーディング画面があり、worktree、スケジュールタスク、Git、組み込みのブラウザ、ファイルのプレビュー、プラグイン、スキルを備えています。アプリは Free を含むすべての ChatGPT プランで使えます。",
        "ターミナルで作業するなら Codex CLI。PowerShell のスクリプトか npm で、ネイティブにインストールできます。",
        "エディターで作業するなら IDE 拡張。OpenAI は、アプリや CLI と並んで、Windows でネイティブに Codex を使う方法として挙げています。",
        "Windows 11 を推奨します。最新の更新をすべて適用した Windows 10 も保証なしでサポートされ、ConPTY のためにバージョン 1809 以降が必要です。それより古い Windows 10 は推奨されません。`winget` を使える状態にしておきましょう。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Windows で Codex をダウンロードしてインストールする方法",
      steps: [
        {
          title: "ChatGPT デスクトップアプリをダウンロードする",
          text: "[OpenAI の Windows アプリのページ](https://learn.chatgpt.com/docs/windows/windows-app)にある Microsoft Store のリンクから入手するか、PowerShell から winget でインストールします。ChatGPT を開き、サインインして Codex を選びます。",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "または Codex CLI をインストールする",
          text: "新しい PowerShell のウィンドウを開き、OpenAI のインストーラーを実行します。もう一度実行すれば Codex が更新されます。Node.js が入っていれば、代わりに npm も使えます。CLI からは、`codex app` でデスクトップアプリを開き（必要ならインストールされます）、`/app` で現在のセッションをアプリに移せます。",
          code: cliInstall,
        },
        {
          title: "サインインする",
          text: "初回の起動時に Sign in with ChatGPT を選ぶとプランを使えます。API キーでサインインすることもでき、その場合は通常の API 料金で課金されます。Codex cloud には ChatGPT でのサインインが必要です。サインインが済むと、`codex login status` は 0 で終了します。",
        },
        {
          title: "Codex が呼び出すツールをインストールする",
          text: "Codex は PC にインストールされているものを使います。OpenAI は Git、Node.js、Python、.NET SDK、GitHub CLI をすべて winget でインストールし、そのあと GitHub にサインインすることを勧めています。",
          code: tools,
        },
        {
          title: "エージェントを動かす場所を選ぶ",
          text: "デフォルトでは、エージェントは Windows サンドボックスの下で PowerShell でネイティブに動きます。代わりに WSL2 で動かすには、Settings を開いてエージェントを Windows native から WSL に切り替え、アプリを再起動します。どちらのモードでも、入力欄の下で Ask for approval を選ぶとサンドボックスの保護が効きます。管理者権限が必要なコマンドには、Run as administrator でアプリを起動します。エージェントはその権限を引き継ぎます。統合ターミナルには PowerShell、Command Prompt、Git Bash、WSL を使えます。",
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Windows アプリ）", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "ネイティブの PowerShell か WSL2 か",
      text: [
        "OpenAI は、デフォルトではネイティブのサンドボックスを使い、Linux ネイティブのツールが必要な場合、すでに WSL2 で作業している場合、ネイティブの選択肢が環境に合わない場合に WSL2 を選ぶよう勧めています。WSL1 はもうサポートされていません。Codex 0.114 までは動きましたが、0.115 から Linux のサンドボックスが `bubblewrap` を使うようになり、WSL1 のサポートは終了しました。",
      ],
      headers: ["", "ネイティブ（PowerShell）", "WSL2"],
      rows: [
        ["サンドボックス", "Windows サンドボックス：MXC、elevated、unelevated", "Linux のサンドボックス。`bubblewrap` が必要"],
        ["CLI のインストール", "PowerShell のインストーラーか npm", "管理者の PowerShell で `wsl --install` を実行し、WSL の中で Linux のインストールスクリプトを実行"],
        ["デスクトップアプリでは", "デフォルト", "Settings でエージェントを WSL に切り替え、アプリを再起動"],
        ["プロジェクトの置き場所", "Windows のドライブ上。WSL からは `/mnt/<drive>/...` で届く", "速度のため、`/mnt/c` ではなく `~/code` のような Linux のホーム以下"],
        ["Codex のホーム", "`%USERPROFILE%\\.codex`", "Linux のホーム。`CODEX_HOME` を Windows のフォルダーに向けた場合を除く"],
        ["選ぶ場面", "デフォルトで", "Linux ネイティブのツール、またはすでに WSL2 にあるワークフロー"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "Codex を WSL2 で動かす方法",
      steps: [
        {
          title: "WSL2 と、その中に Codex をインストールする",
          text: "管理者の PowerShell で `wsl --install` を実行し、`wsl` で Linux のシェルを開きます。その中でサンドボックス用に `bubblewrap` をインストールし（`sudo apt install bubblewrap` または `sudo dnf install bubblewrap`）、Linux のインストールスクリプトを実行して `codex` を起動します。",
          code: wslInstall,
        },
        {
          title: "リポジトリは Linux のホームに置く",
          text: "`/mnt/c` の下は遅いので、`~/code` のようなフォルダーにクローンします。WSL の VS Code が Codex を見つけられない場合は、`which codex` で場所を確認します。",
        },
        {
          title: "Windows アプリと設定を共有する",
          text: "Windows アプリは Codex のホームを `%USERPROFILE%\\.codex` に置き、WSL の中の CLI は Linux のホームを使います。1 つを共有するには、WSL で `CODEX_HOME` を Windows のフォルダーに設定します。",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "WSL のプロジェクトをデスクトップアプリで開く",
          text: "Add new project を選び（または Ctrl+O を押し）、`\\\\wsl$\\` と入力します。エージェントをネイティブのままにする場合は、プロジェクトを Windows のドライブに置き、WSL からは `/mnt/<drive>/...` で届くようにするほうが確実です。",
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Windows と WSL）", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Codex の Windows サンドボックス：MXC、elevated、unelevated",
      text: [
        "Windows サンドボックスを使うと、Codex は WSL や仮想マシンなしで PowerShell でネイティブに動き、そのコマンドと子プロセスがディスクやネットワークで触れられる範囲を制限できます。実装は 3 種類あります。デスクトップアプリは、対応するデバイスの個人向けアカウントでは自動的に MXC を選びます。",
      ],
      headers: ["サンドボックス", "仕組み", "セットアップ", "Windows のバージョン"],
      rows: [
        [
          "`mxc`（推奨）",
          "Microsoft Execution Containers",
          "管理者の承認によるセットアップ、追加の Windows アカウント、ファイアウォールのルールはどれも不要",
          "Windows 11 24H2（ビルド 26100.9278）または 25H2（ビルド 26200.9278）。Microsoft は Windows 11 への展開を進めている途中",
        ],
        [
          "`elevated`（レガシー、優先されるフォールバック）",
          "権限の低い専用のサンドボックスユーザーとファイアウォールのルール。サンドボックス内のコマンドは管理者権限なしで動く",
          "セットアップに管理者の承認が必要",
          "ドキュメントに個別の要件はなく、一般的な指針が当てはまる（Windows 11 を推奨、Windows 10 1809 以降は保証なし）",
        ],
        [
          "`unelevated`（レガシーのフォールバック）",
          "ネットワークの分離が弱く、読み取りを禁止するパスがない",
          "ドキュメントは、レガシーのサンドボックスのセットアップに失敗したときの一時しのぎとして勧めている",
          "ドキュメントに個別の要件はなく、同じ一般的な指針",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Codex の Windows サンドボックスのセットアップ",
      steps: [
        {
          title: "PC で MXC が動くか確認する",
          text: "Codex CLI 0.162.0 以降で、このテストを実行します。`MXC_OK` と表示され、終了コード 0 で終われば成功です。",
          code: mxcTest,
        },
        {
          title: "CLI で MXC を優先する",
          text: "デスクトップアプリは、個人向けアカウントではすでに MXC を優先します。CLI やエンタープライズの環境では、Codex のホームにある `config.toml` でオンにします。",
          code: preferMxc,
        },
        {
          title: "またはレガシーのサンドボックスを選ぶ",
          text: "MXC が使えない場合は `elevated` を、最後のフォールバックとして `unelevated` を設定します。elevated のサンドボックスは、セットアップに管理者の承認が必要です。CLI では `/setup-default-sandbox` コマンドでそのセットアップを実行できます。このコマンドが表示されるのは Windows だけで、Codex が機能の落ちた restricted-token のサンドボックスで動いているときです。",
          code: legacy,
        },
        {
          title: "または IT 部門に事前にセットアップしてもらう",
          text: "管理者は、ほかのユーザーのために elevated のサンドボックスをプロビジョニングできます。後でレガシーのサンドボックスを削除するには、管理者として `codex sandbox uninstall` を実行します。",
          code: provision,
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Windows サンドボックス）", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex の Windows サンドボックスのセットアップに失敗したら：ドキュメントに載っている対処法",
      text: [
        `OpenAI の [Windows サンドボックスのページ](${sandboxDocs}) にはトラブルシューティングの一覧があります。ここでは、ドキュメント自身の見出しに沿って、その内容を紹介します。`,
      ],
      points: [
        "「My legacy sandbox setup failed」：よくある原因は、UAC や管理者の確認を拒否した、ローカルのユーザーやグループの作成、ファイアウォールの変更、サンドボックスユーザーへのログオン権限の付与をポリシーがブロックしている、またはその他のポリシーです。もう一度試して確認を承認するか、IT 部門に相談するか、当面は `unelevated` のサンドボックスを使います。",
        "「I see Windows error 1385」：Windows が、サンドボックスユーザーに必要なログオンの種類を拒否しています。サンドボックスユーザーのログオン権限はポリシーでブロックされうるものの 1 つなので、管理された PC では IT 部門に相談しましょう。MXC は追加の Windows アカウントを作らないので、Windows 11 24H2 や 25H2 ではサンドボックスユーザーに依存しません。",
        "「Codex switched me to the unelevated sandbox」「Codex warns that some folders are writable by Everyone」「Sandboxed commands cannot reach the network」「Sandboxing worked before and then stopped」には、それぞれそのページに専用の項目があります。",
        "診断には `CODEX_HOME/.sandbox/sandbox.log` を読みます。`CODEX_HOME/.sandbox-secrets/` フォルダーは決して誰にも送らないでください。",
        "「setup didn't finish」で検索してきましたか？ OpenAI のドキュメントには、その文言の項目はありません。ドキュメントで最も近いのは「My legacy sandbox setup failed」です。",
        "PowerShell で npm が動かず `npm.ps1 cannot be loaded because running scripts is disabled on this system.` と表示される場合、よくある対処法は `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` です。",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Windows の Computer Use は画面を占有する",
      text: [
        "Computer Use を使うと、Codex はポインターを動かしたり入力したりしてデスクトップアプリを操作できます。デスクトップアプリでは、対応地域の macOS と Windows で、ChatGPT Work と Codex から使えます。オンにするには、Settings > Computer use を開き、Control の下の Any App で Install を選ぶかスイッチをオンにします。",
      ],
      points: [
        "アクティブなデスクトップ上で動き、バックグラウンドでは動けません。タスクの実行中はポインターを動かし、入力し、ウィンドウを前面に出すので、同時に PC を使うことはできません。",
        "離れている間に作業させるには、PC のロックを解除したままオンラインにしておき、スマートフォンから [リモートコントロール](/blog/codex-remote-control) で様子を確認するか、デスクトップアプリを Windows の仮想マシンの中で動かして、Computer Use があなたの画面ではなく仮想マシンを占有するようにします。",
        "コンピューターのロック後もタスクを続けられる locked use（ロック中の利用）は、macOS のみです。",
        'アプリの承認を保存するには、`$CODEX_HOME/config.toml` の `[computer_use.windows]` にアプリを列挙します。たとえば `always_allowed_app_ids = ["mspaint.exe"]` です。',
        "どのシステムでも、Computer Use はターミナルのアプリや ChatGPT 自体を自動操作すること、管理者としてサインインすること、セキュリティやプライバシーの確認を承認することはできません。",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "Windows PC の Codex をスマートフォンから操作する",
      text: [
        "Windows PC は、Mac と同じようにリモートコントロールのホストになれます。スマートフォンの ChatGPT アプリはプロンプトと承認を送り、PC は自分のプロジェクト、ファイル、認証情報、ツールでコマンドを実行します。設定の全体と対処法は [Codex のリモートコントロール](/blog/codex-remote-control) にあります。",
      ],
      points: [
        "PC で ChatGPT デスクトップアプリを開き、Settings > Connections > Control this Mac or PC に進んで Set up または Add を選びます。スマートフォン（iOS または Android）で QR コードを読み取ります。",
        "すると PC が ChatGPT アプリの Codex の下に表示されます。古いバージョンのアプリでは Remote という名前です。",
        "PC はスリープさせず、オンラインで、サインインしたまま、デスクトップアプリを動かしておきます。スリープしたりネットワークが切れたりすると、戻るまでリモートアクセスは止まります。Computer Use を使うタスクでは、Windows のセッションをロックしないでおきます。",
        "OpenAI のプラン表では、モバイルからのリモートコントロールは Plus、Pro、Business、Enterprise で使え、API キーでのサインインでは使えません。ChatGPT のワークスペースでは、先に管理者が Remote Control のアクセスをオンにする必要がある場合があります。",
        "PC は Linux サーバー上のプロジェクトを SSH ホストとして開くこともできるので、スマートフォンから PC を経由してサーバー上の Codex を動かせます。[VPS で動かす Codex](/blog/codex-vps) と [Linux で使う Codex](/blog/codex-linux) をご覧ください。代わりに常時稼働の Mac を使うなら、[Mac mini で動かす Codex](/blog/codex-mac-mini) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "PC の Codex に決まった仕事を与える",
      text: [
        "リモートコントロールも Computer Use も、タスクのたびにあなたが始めるのを待ちます。Crewmark は、Windows PC 上の Codex のチャットを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は、macOS や Linux だけでなく Windows でも動く `crewmark` CLI が社員を起こし、共有ボードから次の issue を取らせます。そのためには PC の電源を入れたままにしておく必要があります。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から [ソフトウェアエンジニア](/ai-employees/software-engineer) などの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "PC 上の Codex のチャットを接続する",
          text: "`crewmark` CLI を使って、PC 上の Codex のチャットを社員と結び付けます。その会話がそのまま社員になります。Claude Code でも使えます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "平日のみか毎日か、あなたのタイムゾーンで、深夜をまたいでもよい勤務時間を設定します。勤務時間中は、CLI が 15、30、60、120、240 分ごとに社員を起こします。[Codex の長時間タスク](/blog/codex-long-running-tasks) をご覧ください。",
        },
        {
          title: "どこからでも issue を割り当てる",
          text: "どのブラウザからでも crewmark.ai のボードで issue を作成して割り当てられ、割り当てると社員が起きます。レビューや判断が必要になると、社員は issue を Needs action にして、そこであなたに質問します。任せる仕事の例は [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Windows で Codex をダウンロードしてインストールする" },
  mid: {
    title: "プロンプトを送っていない間も PC の Codex に働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートであなたの Codex を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Windows で Codex アプリをダウンロードするには？",
        a: "Codex は ChatGPT デスクトップアプリの一部です。OpenAI の Windows アプリのページにある Microsoft Store のリンクからインストールするか、PowerShell で `winget install --id 9PLM9XGG6VKS -s msstore` を実行してから、ChatGPT を開いて Codex を選びます。アプリは Free を含むすべての ChatGPT プランで使えます。",
      },
      {
        q: "Windows に Codex CLI をインストールするには？",
        a: '新しい PowerShell のウィンドウを開いて `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"` を実行するか、Node.js があれば `npm install -g @openai/codex` を実行します。そのあと `codex` を実行し、ChatGPT か API キーでサインインします。インストーラーをもう一度実行すると Codex が更新されます。',
      },
      {
        q: "Windows の Codex に WSL は必要ですか？",
        a: "いいえ。Codex は、デスクトップアプリでも CLI でも IDE 拡張でも、Windows サンドボックスの下で PowerShell でネイティブに動きます。WSL2 は任意で、Linux ネイティブのツールが必要な場合や、すでに WSL2 にワークフローがある場合に使います。WSL1 は Codex 0.115 からサポートされていません。",
      },
      {
        q: "Codex の Windows サンドボックスとは何ですか？",
        a: "Codex のコマンドが Windows でネイティブに動く間、ディスクやネットワークで触れられる範囲を制限する仕組みです。推奨される実装は MXC で、Windows 11 24H2 か 25H2 が必要です。`elevated` と `unelevated` はレガシーのフォールバックです。デスクトップアプリは、対応するデバイスの個人向けアカウントでは自動的に MXC を選びます。",
      },
      {
        q: "Codex の Windows サンドボックスのセットアップが失敗したのはなぜですか？",
        a: "OpenAI のドキュメントには「setup didn't finish」というメッセージは載っていません。レガシーのサンドボックスのセットアップが失敗する原因として挙げられているのは、UAC や管理者の確認の拒否、またはローカルのユーザーやグループ、ファイアウォールの変更、サンドボックスユーザーのログオン権限をブロックするポリシーです。もう一度試して確認を承認するか、IT 部門に相談するか、その間は `unelevated` を使います。Windows error 1385 は、サンドボックスユーザーが必要なログオンの種類を拒否されたことを意味します。",
      },
      {
        q: "Windows PC の Codex をスマートフォンから操作できますか？",
        a: "はい。PC の ChatGPT デスクトップアプリで Settings > Connections > Control this Mac or PC に進み、iOS か Android の ChatGPT アプリで QR コードを読み取って、PC をスリープさせず、オンラインで、サインインしたままにしておきます。Computer Use を使うタスクでは、ロックしないでおきます。",
      },
    ],
  },
  cta: {
    title: "PC の Codex を働かせましょう。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に OpenAI の Codex のドキュメント（Windows アプリ、Windows サンドボックス、WSL、CLI、サインイン、Computer Use、Remote connections）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI、Microsoft およびこのページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。Windows は Microsoft の商標です。",
};
