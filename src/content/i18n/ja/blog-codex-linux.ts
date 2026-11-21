import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の Linux 版：デスクトップアプリ、CLI、サンドボックス",
    description:
      "Linux に Codex を入れる：Ubuntu・Debian・Fedora・Arch 用 ChatGPT デスクトップアプリ（プレビュー）か bubblewrap を使う CLI。ヘッドレスのサインインと SSH ホストも。",
  },
  breadcrumb: "Linux で使う Codex",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex を Linux で：デスクトップアプリのプレビュー、CLI、Linux でまだできないこと",
    lead: "Linux マシンで Codex を動かす方法は 2 つあります。Codex を含む ChatGPT デスクトップアプリは、2026年8月から Linux でプレビューとして提供されており、x64 と ARM64 の Ubuntu、Debian、Fedora、Arch に対応しています。Codex CLI はコマンド 1 つでインストールでき、サンドボックスに `bubblewrap` を使います。このガイドでは、両方のインストール、ヘッドレスサーバーでのサインイン、Linux にまだないもの（Computer Use と、スマートフォンからの Linux ホストの操作）、それでも Linux マシンを Mac や PC のデスクトップアプリの SSH ホストとして使う方法、そして Codex cloud を説明します。",
    cta: "今すぐ始める",
    secondary: "手順を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Linux でどの Codex を使うか",
      points: [
        "ChatGPT デスクトップアプリ（プレビュー）：Chat や Work と並んで Codex があるウィンドウのアプリです。これが Linux での Codex の GUI です。OpenAI のガイドが扱っているのはデスクトップの Linux で、デスクトップのないサーバーでは CLI を使います。",
        "Codex CLI：ターミナルで動きます。デスクトップでも、SSH で接続するヘッドレスサーバーでも使えます。",
        "IDE 拡張：エディターから離れたくないなら、VS Code、Cursor、Windsurf 向けがあります。",
        "Codex cloud：タスクは OpenAI のサーバーで動くので、自分のマシンの電源を入れておく必要はありません。下の [Codex cloud](#cloud) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux に Codex デスクトップアプリをインストールする方法",
      steps: [
        {
          title: "ディストリビューションとアーキテクチャを確認する",
          text: "プレビューが対応しているのは Ubuntu 24.04 LTS と 26.04 LTS、Debian 13、Fedora 43 と 44、そして最新の状態に更新した Arch Linux です。ほかのディストリビューションでも動く場合がありますが、正式にはサポートされていません。パッケージは x64 と ARM64 向けがあります。`uname -m` を実行し、`x86_64` なら x64、`aarch64` か `arm64` なら ARM64 です。",
          code: "uname -m",
        },
        {
          title: "パッケージをダウンロードしてインストールする",
          text: `ディストリビューションとアーキテクチャに合ったパッケージを入手し（[OpenAI の Linux アプリのガイド](${linuxAppDocs})を参照）、保存したフォルダーからインストールします。Arch では、OpenAI のインストールスクリプトがシステム全体のアップグレードも実行します。`,
          code: appInstall,
        },
        {
          title: "開いて Codex を選ぶ",
          text: "アプリケーションメニューから ChatGPT を開くか、ターミナルで `chatgpt` を実行し、サインインして Codex を選びます。Wayland では、使える場合は XWayland で動きます。ネイティブの Wayland は実験的で、`chatgpt --ozone-platform=wayland` で強制できます。",
        },
        {
          title: "最新の状態に保つ",
          text: "更新はパッケージマネージャーから届きます。",
          code: appUpdate,
        },
        {
          title: "長いチャットを動かし続ける",
          text: "macOS と Linux にある Settings > General > Prevent sleep while running をオンにすると、コンピューターから離れている間もローカルのチャットが続きます。",
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Linux 版 ChatGPT アプリ）", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "Linux に Codex CLI をインストールする方法",
      steps: [
        {
          title: "インストールスクリプトを実行する",
          text: "同じコマンドで Codex のインストールも更新もできます。インストール済みのリリースが対応していれば、`codex update` でも更新を適用できます。Node.js が入っていれば `npm install -g @openai/codex` も使えます。OpenAI は x86_64 と aarch64 向けの Linux ビルドを公開しています。",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "サンドボックス用に bubblewrap をインストールする",
          text: `Codex の Linux のサンドボックスには \`bubblewrap\` が必要です。PATH に \`bwrap\` がないと、Codex は非特権ユーザー名前空間を必要とする同梱のヘルパーに切り替え、起動時に警告を出します。Ubuntu 25.04 ではパッケージの bubblewrap がそのまま動きます。Ubuntu 24.04 では、AppArmor の \`bwrap-userns-restrict\` プロファイルを読み込むまで警告が出る場合があります（[OpenAI のサンドボックスのドキュメント](${sandboxingDocs})を参照）。`,
          code: bubblewrap,
        },
        {
          title: "サインインする",
          text: "`codex` を実行して Sign in with ChatGPT を選ぶとプランを使えます。API キーでサインインすることもでき、その場合は通常の API 料金で課金されます。Codex cloud には ChatGPT でのサインインが必要です。サインインが済むと、`codex login status` は 0 で終了します。",
        },
        {
          title: "ヘッドレスサーバーではデバイスコードでサインインする",
          text: "マシンにブラウザがない場合は、Sign in with Device Code を選ぶか、ベータの `codex login --device-auth` を実行します。デバイスコードでのログインは、先に ChatGPT のセキュリティ設定か、ワークスペースの管理者がオンにしておく必要があります。ほかにも方法が 2 つあります。ブラウザでのサインインがうまくいったコンピューターから `~/.codex/auth.json` をコピーし、そのファイルをパスワードと同じように扱う方法と、SSH でサインインのコールバックを転送してサーバーで `codex login` を実行する方法です。",
          code: headless,
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Codex CLI）", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Linux ではまだ Computer Use を使えない",
      text: [
        "Computer Use を使うと、Codex はポインターを動かしたり入力したりしてデスクトップアプリを操作できます。Linux のプレビュー版のデスクトップアプリにはこの機能がなく、OpenAI の Linux のガイドは今後のリリースで追加するとしています。今のところ、使えるのは macOS と Windows のデスクトップアプリです。",
      ],
      points: [
        "ターミナルで済む作業は Linux でも動きます。Codex は `bubblewrap` のサンドボックスの中で、そこでコマンドを実行し、ファイルを編集します。",
        "デスクトップアプリが必要なタスクには、Mac か Windows PC を使いましょう。Windows の Computer Use は作業中に画面を占有します。[Windows で使う Codex](/blog/codex-windows) をご覧ください。常時稼働の Mac については [Mac mini で動かす Codex](/blog/codex-mac-mini) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Mac や PC のデスクトップアプリから Linux マシンを使う",
      text: [
        "OpenAI のリモート接続のドキュメントが、スマートフォンの ChatGPT アプリから操作できるホストとして挙げているのは Mac と Windows のコンピューターだけなので、Linux のデスクトップアプリをスマートフォンから操作する方法はドキュメントに載っていません。それでも Linux マシンは SSH ホストになれます。Mac か Windows PC のデスクトップアプリがそのマシン上のプロジェクトを開き、Codex はそこでコマンドを実行し、ファイルを読み、変更を書き込みます。あとはその Mac か PC を通して、スマートフォンから操作します。",
      ],
      steps: [
        {
          title: "Linux マシンを SSH の設定に追加する",
          text: "デスクトップアプリを動かしている Mac か PC で、`~/.ssh/config` にホストを追加します。Codex はこのファイルから具体的なホストのエイリアスを読み取り、パターンだけのエントリは無視します。そのコンピューターから `ssh devbox` が動くことを確認します。ほかの SSH アクセスと同じように、信頼できる鍵と最小権限のアカウントを使い、認証のないものを公開ネットワークで待ち受けさせないようにします。自分のネットワークの外にあるマシンに届くには、VPN かメッシュネットワークのツールを使います。",
          code: sshConfig,
        },
        {
          title: "Linux マシンに Codex をインストールしてサインインする",
          text: "アプリはリモートマシン上の Codex を SSH で、リモートユーザーのログインシェルで起動するので、そこで `codex` が PATH に入っている必要があります。上のスクリプトでインストールしてサインインします。ヘッドレスサーバーでは `codex login --device-auth` を使います。",
        },
        {
          title: "デスクトップアプリでホストを追加する",
          text: "Settings > Connections に進み、SSH ホストを追加するか有効にして、その上のプロジェクトフォルダーを選びます。同じ Git リポジトリが両側でプロジェクトとして保存されていれば、チャットのフッターから、コンピューターと Linux ホストの間でチャットを引き継げます。",
        },
        {
          title: "スマートフォンから操作する",
          text: "[Codex のリモートコントロール](/blog/codex-remote-control) の説明どおりに、スマートフォンを Mac か PC とペアリングします。スマートフォンがやり取りするのはそのコンピューターで、電源を入れたままにしておく必要があり、Codex は Linux マシン上で作業します。借りたサーバーについては [VPS で動かす Codex](/blog/codex-vps) をご覧ください。",
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント（Remote connections）", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "または Codex cloud にタスクを任せる",
      text: [
        `マシンの電源をまったく入れておきたくないなら、[Codex cloud](${cloudDocs}) が OpenAI のサーバーでタスクを動かします。タスクごとに専用のワークスペースがあり、コンピューターがスリープしている間も進みます。`,
      ],
      points: [
        "Web かデスクトップアプリから Work in > Cloud でタスクを始めるか、ChatGPT のモバイルアプリの Codex から始めます。Linux のターミナルからは、`codex cloud` でクラウドのチャットの一覧から選び、`codex cloud exec` でタスクを送信し、`codex cloud list` で最近のタスクを一覧表示できます。",
        "ChatGPT でのサインインが必要で、API キーでは使えません。OpenAI のプラン表では Plus、Pro、Business、Enterprise で使えます。",
        "クラウドタスクに見えるのはクラウド環境だけです。マシンのローカルのファイル、実行中のプロセス、ブラウザのログイン状態、VPN のアクセスは引き継がれず、コンピューターのチャットをそこに引き継ぐこともできません。",
        "再利用できる構成には、Work in > Cloud > Select environment > Create environment で環境を作ります。公開インターネットへのフルアクセスか、許可リストを選べます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Linux マシンの Codex に決まった仕事を与える",
      text: [
        "デスクトップアプリも CLI も SSH も、次のタスクをあなたが始めるのを待ちます。Crewmark は、Linux マシン上の Codex のチャットを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は、macOS や Windows だけでなく Linux でも動く `crewmark` CLI が社員を起こし、共有ボードから次の issue を取らせます。マシンは電源を入れたままにしておく必要がありますが、Linux サーバーならもともとそうなっています。",
      ],
      steps: [
        {
          title: "社員を採用する",
          text: "[AI 社員の職種](/ai-employees)から [ソフトウェアエンジニア](/ai-employees/software-engineer) などの職種を選び、目標と KPI を書きます。",
        },
        {
          title: "マシン上の Codex のチャットを接続する",
          text: "`crewmark` CLI を使って、Linux のデスクトップかサーバー上の Codex のチャットを社員と結び付けます。その会話がそのまま社員になります。Claude Code でも使えます。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "平日のみか毎日か、あなたのタイムゾーンで、深夜をまたいでもよい勤務時間を設定します。勤務時間中は、CLI が 15、30、60、120、240 分ごとに社員を起こします。[Codex を自律的に動かす方法](/proactive-codex) をご覧ください。",
        },
        {
          title: "どのブラウザからでも issue を割り当てる",
          text: "crewmark.ai のボードで issue を作成して割り当てると、社員が起きます。レビューや判断が必要になると、社員は issue を Needs action にして、そこであなたに質問します。任せる仕事の例は [Codex の活用例](/use-cases/codex) をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Linux に ChatGPT デスクトップアプリをインストールして Codex を使う" },
  mid: {
    title: "プロンプトを送っていない間も Linux の Codex に働いてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートであなたの Codex を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Linux 版の Codex の GUI はありますか？",
        a: "はい。Codex を含む ChatGPT デスクトップアプリが Linux でプレビューとして提供されており、x64 と ARM64 の Ubuntu 24.04 と 26.04、Debian 13、Fedora 43 と 44、Arch Linux に対応しています。エディターから離れたくないなら、Codex の IDE 拡張が VS Code、Cursor、Windsurf で使えます。",
      },
      {
        q: "Linux 版の Codex デスクトップアプリをダウンロードするには？",
        a: "OpenAI の Linux アプリのガイドに沿って、アーキテクチャに合った .deb（Ubuntu、Debian）か .rpm（Fedora）のパッケージをダウンロードし、`sudo apt install ./chatgpt_amd64.deb` か `sudo dnf install ./chatgpt.x86_64.rpm` でインストールします。Arch では OpenAI の `install-arch.sh` スクリプトを実行します。そのあと ChatGPT を開くか `chatgpt` を実行し、Codex を選びます。",
      },
      {
        q: "Linux に Codex CLI をインストールするには？",
        a: "`curl -fsSL https://chatgpt.com/codex/install.sh | sh` か `npm install -g @openai/codex` を実行します。サンドボックス用に `bubblewrap` をインストールし（`sudo apt install bubblewrap` または `sudo dnf install bubblewrap`）、`codex` を実行してサインインします。",
      },
      {
        q: "Codex の Computer Use は Linux で使えますか？",
        a: "まだ使えません。Linux のプレビュー版のデスクトップアプリには Computer Use がなく、OpenAI は今後のリリースで追加するとしています。現在は macOS と Windows のデスクトップアプリで使えます。",
      },
      {
        q: "ヘッドレスの Linux サーバーで Codex にサインインするには？",
        a: "ChatGPT のセキュリティ設定でデバイスコードでのログインをオンにし（またはワークスペースの管理者にオンにしてもらい）、ベータの `codex login --device-auth` を実行します。サインイン済みのコンピューターから `~/.codex/auth.json` をコピーするか、`ssh -L 1455:localhost:1455 user@remote` で接続してサーバーで `codex login` を実行する方法もあります。",
      },
      {
        q: "Linux の Codex をスマートフォンから操作できますか？",
        a: "直接はできません。OpenAI のドキュメントがリモートコントロールのホストとして挙げているのは Mac と Windows のコンピューターだけです。Mac か Windows PC の ChatGPT デスクトップアプリで Linux マシンを SSH ホストとして追加し、スマートフォンの ChatGPT アプリからそのコンピューターを操作します。Codex は Linux マシン上で動きます。",
      },
    ],
  },
  cta: {
    title: "Linux マシンの Codex を働かせましょう。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月14日に OpenAI の Codex のドキュメント（Linux 版 ChatGPT アプリ、CLI、サインイン、サンドボックス、Computer Use、Remote connections、Codex cloud）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI およびこのページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。",
};
