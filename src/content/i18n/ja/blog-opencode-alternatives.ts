import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ja translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi（macOS と Linux。Windows には PowerShell のインストーラーがある）
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # または: npm install -g @charmland/crush

# Kilo CLI（OpenCode のフォーク）
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff（無料、テキスト広告で運営）
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder を Ollama で動かしているモデルと使う
nanocoder --provider ollama --model llama3.1

# Crush：crushrc に Ollama を追加する
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode の代替ツール（2026年）：無料・オープンソース・ローカル",
    description:
      "2026年のおすすめ OpenCode 代替ツール：オープンソースのターミナルエージェント（Pi、Crush、Kilo CLI、Goose、Cline、Nanocoder）、API キー不要の無料ツール、Rust 製や Windows 向け、ローカル LLM、GUI、そして Claude Code、Codex、Copilot CLI。",
  },
  breadcrumb: "OpenCode の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "ブログ · コーディングエージェント",
    title: "2026年のおすすめ OpenCode 代替ツール：無料、オープンソース、ローカル",
    lead: "OpenCode は GitHub で最もスターを集めているオープンソースのコーディングエージェントの 1 つで、スターは約 226,000 あります。MIT ライセンスのターミナルエージェントで、どのモデルプロバイダーでも使え、ベータ版のデスクトップアプリもあります。ほかを探す理由はいくつかあります。自分のワークフローに合わせて曲げられる小さなハーネス、Go や Rust の単一バイナリ、ローカルモデルへのより良い対応、ターミナルではなくアプリ、API キー不要の無料ツール、あるいは会社がすでに契約しているエージェント。この記事では、それぞれに合う代替ツールを、各プロジェクトのページに載っているライセンス、インストールコマンド、料金とともに紹介します。",
    cta: "今すぐ始める",
    secondary: "インストールコマンド",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "自分で形を作るミニマルなエージェント：Pi（MIT、スター約 121,000）。",
        "Windows や Android を含め、どこでも動く洗練されたターミナルアプリ：Charm の Crush。",
        "IDE とクラウドエージェントを備えた OpenCode：OpenCode のフォークである Kilo CLI。",
        "API キー不要で無料：テキスト広告で運営される Freebuff。",
        "ローカルモデル優先：非営利のコレクティブが作る Nanocoder。",
        "Rust 製：Codex CLI か Goose。",
        "すでに Claude、ChatGPT、Copilot に課金している：Claude Code、Codex CLI、GitHub Copilot CLI。",
        "入力したときだけでなく、スケジュールに沿って働き続けるエージェント：Claude Code か Codex の上で動く Crewmark。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 代替ツールの比較",
      text: [
        "スター数は 2026年11月10日の GitHub API による概数です。費用は始めるのに必要な額で、ほとんどのオープンソースのエージェントは無料、モデルプロバイダーへの支払いは自分で行います。",
      ],
      headers: ["ツール", "ライセンス", "言語", "動作環境", "費用", "向いている用途"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（スター約 22.6 万）", "TypeScript", "ターミナル、デスクトップアプリ（ベータ）", "1 日の上限付きの無料モデル。Go は月 $10、Go Plus は月 $40", "比較の基準：あらゆるプロバイダー、ローカルモデル、Plan と Build のエージェント"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（スター約 12.1 万）", "TypeScript", "macOS、Linux、Windows。SDK と RPC", "無料。自分のサブスクリプションか API キー", "自分のツールや skills で拡張するミニマルなハーネス"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（スター約 2.9 万）", "Go", "あらゆるターミナル：macOS、Linux、Windows、Android、BSD", "無料。自分のキー、または Charm の Hyper モデル", "LSP と MCP に対応した洗練されたターミナル UI"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT（スター約 2.8 万）", "TypeScript", "CLI、VS Code、JetBrains、クラウド", "無料で始められる。500 以上のモデルをプロバイダーの料金で、上乗せなし", "OpenCode のエンジンに IDE 拡張とコードレビューを加えたもの"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0（スター約 5.6 万）", "Rust", "デスクトップアプリ、CLI、API", "無料。モデルのキーは自前", "コードにもそれ以外の仕事にも使える 1 つのエージェント、MCP 拡張付き"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（スター約 7.1 万）", "TypeScript", "CLI、VS Code、JetBrains、SDK", "無料。モデルのキーは自前", "エディターとターミナルで動くオープンソースのエージェント"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（スター約 2,600）", "TypeScript", "ターミナル", "無料。ローカルモデルか OpenAI 互換 API", "Ollama を使うプライベートでローカル優先のコーディング"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0（スター約 1.4 万）", "TypeScript", "CLI、デスクトップ、Web、クラウド", "テキスト広告付きで無料。API キー不要", "お金をかけず、モデルの登録もせずにコーディングエージェントを試す"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0（スター約 2.9 万）", "TypeScript", "ターミナル", "Qwen Plus か Pro のサブスクリプション、または API キー", "Qwen モデルのユーザー"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（スター約 13.4 万）", "Rust", "ターミナル。IDE とデスクトップも", "Free を含むすべての ChatGPT プラン。Go は月 $8。または API キー", "高速なネイティブバイナリが欲しい ChatGPT の契約者"],
        ["[Claude Code](https://code.claude.com/docs)", "プロプライエタリ", "-", "ターミナル、IDE、デスクトップ、Web", "Claude Pro 月 $20", "Anthropic 純正のエージェントを使いたい Claude ユーザー"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "プロプライエタリ", "-", "macOS、Linux、Windows", "Copilot のプラン。Pro は月 $10", "すでに Copilot に課金しているチーム"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（スター約 5 万）", "Python", "ターミナル", "無料。モデルのキーは自前", "git 中心のペアプログラミング。2026年5月22日以降コミットなし（[Aider の代替ツール](/blog/aider-alternatives)を参照）"],
        ["[Crewmark](/pricing)", "プロプライエタリ", "-", "あなたのコンピューター上、あなた自身の Claude Code か Codex の中", `無料プラン（プロジェクト ${free.projects} 件、AI 社員 ${free.employees} 人）。Pro は月 $${pro.price}（近日公開）`, "職種・勤務時間・ハートビートを持ち、ボードから次の issue を取るエージェント"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今すぐインストールできるオープンソースの OpenCode 代替ツール",
      text: [
        "どれも 1 つのコマンドでインストールできます。スクリプトをシェルにパイプする前に、中身を読んでおきましょう。",
      ],
      steps: [
        {
          title: "Pi",
          text: "ミニマルで拡張可能なエージェントハーネスです。妥当なデフォルトを備えていますが、サブエージェントや plan モードはあえて持ちません。拡張機能、skills、プロンプトテンプレートで加えるか、Pi に作らせます。`/login` でサブスクリプションか API キーを接続します。Pi には組み込みの権限システムがないので、制限が必要ならコンテナかサンドボックスで動かしましょう。ドキュメントには 3 つの方法が書かれています。",
          code: install,
        },
        {
          title: "Crush",
          text: "Charm のターミナルエージェントで、Go で書かれています。言語サーバーからコンテキストを読み、http、stdio、sse 経由で MCP サーバーを使え、セッションの途中でモデルを切り替えられます。Homebrew、npm、winget、scoop、apt、pkg でインストールでき、README には Windows（PowerShell と WSL）、Android、BSD 系が挙がっています。ライセンスは FSL-1.1-MIT で、オープンソースではなくソース公開型のライセンスです。",
        },
        {
          title: "Kilo CLI",
          text: "Kilo の README によると、その CLI は OpenCode のフォークです。その上に、VS Code と JetBrains の拡張、クラウドエージェント、プルリクエストの自動レビュー、タスクの途中で切り替えられる 500 以上のモデルを加えています。MIT ライセンスです。",
        },
        {
          title: "Goose、Cline、Nanocoder",
          text: "Goose はデスクトップアプリと CLI を持つ Rust 製のエージェントで、現在は Linux Foundation の Agentic AI Foundation の傘下にあります。Cline は CLI、エディター拡張、SDK として動きます。Nanocoder は Nano Collective によるローカル優先のターミナルエージェントで、normal、auto-accept、yolo、plan、architect の各モードと、ブランチをレビューしたりプルリクエストを専用の worktree にチェックアウトしたりするコマンドがあります。",
        },
      ],
      source: { label: "出典：各プロジェクトの GitHub の README", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "無料モデルが使える OpenCode 代替ツール",
      text: [
        "OpenCode 自体にも 1 日のリクエスト上限付きの無料モデルがあり、Go の上限を使い切ったときの予備にできます。ほかに無料のものが欲しいなら：",
      ],
      points: [
        "Freebuff：サブスクリプションもクレジットも API キーも不要です。付属のモデルはテキスト広告でまかなわれ、デフォルトは DeepSeek V4.1 Flash。紹介や報奨金で 1 日の無料枠の時間が増えます。",
        "ローカルモデル：Nanocoder、Crush、Goose、OpenCode はどれも Ollama に対応しているので、費用は自分のハードウェアだけです。",
        "Google の無料枠：Gemini CLI にはもうありません。README によると、無料の個人アカウントと Google AI Pro・Ultra は 2026年6月18日に Antigravity CLI（`agy`）へ移行しました。",
        "Codex CLI：オープンソースで、無料の ChatGPT アカウントで使えます。",
        "自分のキーで使うオープンソースのエージェント：Pi、Kilo CLI、Cline、Goose はツール自体は無料で、支払うのはモデルの分だけです。",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "ローカル LLM 向けの OpenCode 代替ツール",
      text: [
        "OpenCode を使う理由が自分のマシンでモデルを動かすことなら、次の 2 つはローカルモデルを第一の使い方にしています。",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Ollama 経由のローカルモデル、または OpenRouter のような OpenAI 互換 API 向けに作られています。プロバイダーとモデルはフラグで渡すか、`nanocoder run` で非対話的に実行します。",
          code: local,
        },
        {
          title: "Crush",
          text: "`crushrc` に Ollama をプロバイダーとして追加し、取得済みのモデルを登録します。`crushrc` は Bash に似た設定ファイルで、Windows を含むどのプラットフォームでも同じように動きます。",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust、Windows、Android、GUI で選ぶ",
      points: [
        "Rust 製：Codex CLI と Goose はどちらも Rust で書かれています。Crush は Go の単一バイナリです。",
        "Windows 向け：Crush（winget、scoop、npm）、Pi（PowerShell のインストーラー）、GitHub Copilot CLI（winget）、OpenCode のデスクトップアプリがネイティブで動きます。",
        "Android 向け：Crush の README は対応ターミナルに Android を挙げています。",
        "GUI 付き：macOS、Windows、Linux 向けの OpenCode 純正デスクトップアプリ（ベータ）、Goose Desktop、インストール済みの Claude Code や Codex も動かせる Freebuff Desktop、そして VS Code や JetBrains の中で動く Kilo や Cline。",
        "OpenCode Go はオープンウェイトのモデル向けで月 $10（Go Plus は $40）です。フロンティアモデルのサブスクリプションを 1 つにまとめたいなら、Codex は月 $8 の ChatGPT Go に含まれ、Copilot Pro は $10、Claude Pro は $20 です。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "入力しなくてもエージェントに働いてほしいとき",
      text: [
        "このリストのどのツールも、あなたの次のプロンプトを待っています。Crewmark はあなた自身の Claude Code や Codex を、職種、数値の目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は起きてボードから次の issue を取り、判断が必要なときはメッセージを送ってきます。あなたのコンピューター上で、すでに契約しているプランのまま動きます。",
      ],
      steps: [
        {
          title: "あなたのエージェントで社員を雇う",
          text: "Claude Code か Codex の会話でセットアップコマンドを実行すると、その会話が社員になります。[AI 社員とは](/ai-employees)をご覧ください。",
        },
        {
          title: "勤務時間とハートビートを与える",
          text: "設定した勤務時間中、夜間も含めて 15〜240 分ごとに起きます。[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)と [Codex の長時間タスク](/blog/codex-long-running-tasks)をご覧ください。",
        },
        {
          title: "聞かれたら答える",
          text: "判断はメッセージで届き、それ以外はすべてボードにあります。ほかのエージェントの比較は [Cursor の代替ツール](/blog/cursor-alternatives)と [Devin の代替ツール](/blog/devin-alternatives)をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "プロンプトの合間も働き続けるコーディングエージェントが欲しいなら",
    text: "Crewmark の社員は勤務時間中にハートビートで起き、ボードから次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "OpenCode のオープンソースの代替で一番良いのは？",
        a: "自分で拡張する小さなハーネスが欲しいなら Pi、どのプラットフォームでも動く洗練されたターミナルアプリなら Crush、OpenCode のエンジンに IDE 拡張が付いたものなら Kilo CLI です。Apache ライセンスの Goose と Cline も堅実な選択肢です。",
      },
      {
        q: "Kilo CLI は OpenCode がベースですか？",
        a: "はい。Kilo の README によると、Kilo CLI は OpenCode のフォークで、VS Code と JetBrains の拡張、クラウドエージェント、コードレビューといった Kilo のプラットフォームと連携するよう拡張されています。",
      },
      {
        q: "OpenCode の無料の代替はありますか？",
        a: "Freebuff はテキスト広告で運営されており、API キーなしで無料で使えます。Nanocoder、Crush、Goose、そして OpenCode 自体も、Ollama 経由のローカルモデルなら無料です。Gemini CLI の無料枠は 2026年6月に Antigravity CLI へ移りました。",
      },
      {
        q: "Rust で書かれた OpenCode の代替はありますか？",
        a: "OpenAI の Codex CLI と Goose はどちらも Rust で書かれ、Apache 2.0 ライセンスです。Crush は Go で書かれ、単一バイナリで配布されています。",
      },
      {
        q: "Crush はオープンソースですか？",
        a: "Crush のコードはソース公開型ライセンスの FSL-1.1-MIT で公開されています。OpenCode、Pi、Kilo CLI、Nanocoder は MIT、Goose、Cline、Codex CLI、Qwen Code、Freebuff は Apache 2.0 です。",
      },
      {
        q: "OpenCode と Claude Code、どちらを使うべきですか？",
        a: "OpenCode はローカルモデルを含むどのプロバイダーでも使え、オープンソースです。Claude Code は Anthropic 純正のクローズドソースのエージェントで、月 $20 の Claude Pro から含まれます。どのみち Claude に課金しているなら新機能が先に来る Claude Code、モデルをよく切り替えるなら OpenCode か Pi が合っています。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、プロンプトだけでなく仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に各プロジェクトの GitHub リポジトリと README、opencode.ai、各社の料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenCode や掲載しているどのプロジェクトとも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
