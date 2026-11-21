import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ja translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli、Aider のコミュニティフォーク
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder（Ollama でローカルモデルを使う）
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider は --read で規約ファイルを読み込んでいた
aider --read CONVENTIONS.md

# OpenCode と Codex はリポジトリ直下の AGENTS.md を読む
mv CONVENTIONS.md AGENTS.md

# Claude Code は CLAUDE.md を読む。そこから同じファイルをインポートする
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Aider の代替ツール（2026年）：Aider は終わった？今使うべきもの",
    description:
      "Aider はまだメンテナンスされているのか？最後のリリース、最後のコミット、未解決の issue を確認し、2026年のおすすめ Aider 代替ツール（フォークの cecli、OpenCode、Pi、Crush、Cline、Nanocoder、Codex CLI、Claude Code）をインストールコマンド付きで紹介します。",
  },
  breadcrumb: "Aider の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "ブログ · コーディングエージェント",
    title: "2026年の Aider 代替ツール：Aider は終わったのか、代わりに何を使うか",
    lead: "Aider はターミナルで動く AI ペアプログラマーの元祖でした。オープンソースで、どんなモデルでも使え、リポジトリのマップを作り、変更のたびに git コミットします。今もインストールして動かせ、GitHub のスターは約 50,000 あります。しかし GitHub での最後のタグ付きリリースは 2025年8月、最後のコミットは 2026年5月22日で、新しいモデルについていけるツールを探す人が増えています。この記事では、プロジェクトの現状、Aider に近い使い方ができる代替ツール、設定の移し方を紹介します。",
    cta: "今すぐ始める",
    secondary: "Aider は終わった？",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Aider は終わったのか？",
      text: [
        "公式にはそうではありません。リポジトリはアーカイブされておらず、終了の発表もありません。ただ、公開されているどの指標を見ても、ほとんどメンテナンスされていません。",
      ],
      points: [
        "GitHub での最後のタグ付きリリース：v0.86.0（2025年8月9日）。PyPI の最後のパッケージ aider-chat 0.86.2 は 2026年2月12日にアップロードされました。",
        "main ブランチへの最後のコミット：2026年5月22日。新しい Claude モデル名を追加するマージでした。",
        "未解決の issue とプルリクエストは約 1,960 件。",
        "2026年1月、あるユーザーが Aider の今後について尋ねる issue を立てました。返信の 1 つは、実質的に 1 人のプロジェクトで勢いが落ちていると述べていますが、メンテナーはそこで回答していません。",
        "README には今も、Aider は Claude 3.7 Sonnet、DeepSeek R1、o3-mini、GPT-4o で最もよく動くと書かれています。",
      ],
    },
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "Aider のまま、更新が続くものを：Aider のコミュニティフォーク cecli。",
        "最も人気のあるオープンソースのターミナルエージェント、モデルは自由：OpenCode（MIT、スター約 226,000）。",
        "Aider のミニマルな精神を受け継ぐもの：自分で拡張する小さなハーネス Pi（MIT、スター約 121,000）。",
        "多くの Aider ユーザーのようにローカルモデル中心で：Ollama と組み合わせる Nanocoder。",
        "コードコメントで変更を頼む Aider の watch モードが欲しい：VS Code や JetBrains の中で動く Cline か Kilo Code。",
        "どのみち ChatGPT か Claude に課金している：Codex CLI か Claude Code。",
        "入力したときだけでなく、スケジュールに沿ってバックログを片付けるエージェント：Claude Code か Codex の上で動く Crewmark。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Aider 代替ツールの比較",
      text: [
        "スター数は 2026年11月10日の GitHub API による概数です。「最後のコミット」はその日の main ブランチで最も新しいコミットです。",
      ],
      headers: ["ツール", "ライセンス", "言語", "モデル", "費用", "向いている用途"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0（スター約 5 万）", "Python", "ローカルを含めほぼすべて", "無料。モデルのキーは自前", "比較の基準。最後のコミットは 2026年5月22日"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0（スター約 420）", "Python", "Aider と同様", "無料。モデルのキーは自前", "更新が続くフォークで Aider に近い使い心地を保つ"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT（スター約 22.6 万）", "TypeScript", "あらゆるプロバイダー、ローカルモデル", "1 日の上限付きの無料モデル。Go は月 $10", "Plan と Build のモードとデスクトップアプリを備えた本格的なターミナルエージェント"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT（スター約 12.1 万）", "TypeScript", "自分のサブスクリプションか API キー", "無料", "ツールや skills で拡張するミニマルなハーネス"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT（スター約 2.9 万）", "Go", "ほとんどのプロバイダー、Ollama", "無料。キーは自前", "LSP と MCP に対応した洗練されたターミナル UI、全プラットフォーム対応"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0（スター約 7.1 万）", "TypeScript", "自分のモデルのキー", "無料", "VS Code、JetBrains、ターミナルで動くエージェント"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT（スター約 2.8 万）", "TypeScript", "500 以上、プロバイダーの料金で", "無料で始められる", "IDE 拡張と、OpenCode からフォークした CLI"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT（スター約 2,600）", "TypeScript", "Ollama または OpenAI 互換 API", "無料", "プライベートでローカル優先のコーディング"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0（スター約 13.4 万）", "Rust", "OpenAI", "Free を含むすべての ChatGPT プラン、または API キー", "高速なネイティブエージェントが欲しい ChatGPT ユーザー"],
        ["[Claude Code](https://code.claude.com/docs)", "プロプライエタリ", "-", "Anthropic", "Claude Pro 月 $20", "Claude ユーザー"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT（スター約 1.6 万）", "Go", "複数のプロバイダー", "無料。モデルのキーは自前", "大規模なプロジェクト。最後のコミットは 2025年10月3日"],
        ["[Crewmark](/pricing)", "プロプライエタリ", "-", "あなたの Claude Code または Codex 経由", `無料プラン（プロジェクト ${free.projects} 件、AI 社員 ${free.employees} 人）。Pro は月 $${pro.price}（近日公開）`, "職種・勤務時間・ハートビートを持ち、ボードから次の issue を取るエージェント"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今すぐインストールできるオープンソースの Aider 代替ツール",
      text: [
        "どれも 1 つのコマンドでインストールできます。スクリプトをシェルにパイプする前に、中身を読んでおきましょう。",
      ],
      steps: [
        {
          title: "Aider のフォーク cecli",
          text: "cecli は 2025年8月に Aider のフォークとして始まり、今も更新されています。拡張性とカスタマイズのために作られた CLI エージェントを名乗り、macOS、Linux、Windows で `cecli` コマンドとしてインストールでき、PyPI にも cecli-dev として公開されています。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "守備範囲が最も Aider に近いツールです。オープンソースでターミナルが中心、ローカルを含む 200 以上のモデルプロバイダーに対応します。フルアクセスの Build エージェントに加えて読み取り専用の Plan エージェント、サブエージェント、ベータ版のデスクトップアプリがあります。",
        },
        {
          title: "Pi と Nanocoder",
          text: "Pi はコアを小さく保ち、サブエージェントや plan モードをあえて持ちません。必要なものは拡張機能と skills で加えます。Nanocoder は非営利のコレクティブが Ollama 経由のローカルモデル向けに作っているツールで、plan モードと architect モードを備えています。architect モードは Aider ユーザーにはおなじみでしょう。",
        },
      ],
      source: { label: "出典：各プロジェクトの GitHub の README", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Aider からほかのエージェントへ移行する",
      steps: [
        {
          title: "規約ファイルを持っていく",
          text: "Aider は `--read` で読み込むファイルからコーディング規約を読みます。OpenCode と Codex はリポジトリ直下の `AGENTS.md` を、Claude Code は `CLAUDE.md` を読み、`CLAUDE.md` からは `AGENTS.md` をインポートできます。[Codex の AGENTS.md](/blog/codex-agents-md) と [CLAUDE.md](/blog/claude-md) もご覧ください。",
          code: conventions,
        },
        {
          title: "コミットの扱いを決める",
          text: "Aider は変更のたびに、生成したメッセージでコミットします。Claude Code、Codex、OpenCode はデフォルトではコミットをあなたに任せるので、変更が終わったらコミットを頼むか、コミットのルールを AGENTS.md に書いておきましょう。",
        },
        {
          title: "モデルを持ち込む",
          text: "Aider を DeepSeek やローカルモデルで使っていたなら、OpenCode、Crush、Nanocoder、Pi はどれも自分のキーを使え、最初の 3 つは Ollama にも対応します。逆方向の使い方は [Claude Code で DeepSeek を使う方法](/blog/claude-code-deepseek)をご覧ください。",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider と OpenCode、Claude Code、Pi、Cline の比較",
      points: [
        "Aider と OpenCode：どちらもオープンソースでモデルを選びません。OpenCode は週に 100 以上のコミットがあり、エージェント、サブエージェント、MCP、デスクトップアプリを備えます。Aider はよりシンプルで、コミットを代わりにしてくれます。",
        "Aider と Claude Code：Claude Code はクローズドソースで Anthropic のモデルで動き、月 $20 の Claude Pro から含まれます。Claude の新機能はまずここに来ます。Aider は無料で、どのモデルでも使えます。",
        "Aider と Pi：どちらも意図的に小さく作られています。Pi は活発に開発されており、SDK、RPC モード、拡張機能のパッケージシステムがあります。",
        "Aider と Cline：Cline は主にエディターの中で動き、CLI もあります。Aider はターミナル中心で、エディターのコメントに反応する watch モードがあります。",
        "Aider と Codex：Codex CLI は Rust で書かれたオープンソースで、すべての ChatGPT プランに含まれ、OpenAI のモデルで動きます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "ペアプログラマーから、バックログを持つチームメイトへ",
      text: [
        "Aider もここで挙げたどのツールも、あなたの次のメッセージを待っています。Crewmark はあなた自身の Claude Code や Codex を、職種、数値の目標、勤務時間、ハートビートを持つ AI 社員に変えます。勤務時間中は起きてボードから次の issue を取り、コミットしてプルリクエストを開き、判断が必要なときはメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "あなたのエージェントで社員を雇う",
          text: "Claude Code か Codex の会話でセットアップコマンドを実行すると、その会話が社員になります。[AI ソフトウェアエンジニア](/ai-employees/software-engineer)をご覧ください。",
        },
        {
          title: "勤務時間とハートビートを与える",
          text: "設定した勤務時間中、15〜240 分ごとに起きます。[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)をご覧ください。",
        },
        {
          title: "ほかのツールも比べる",
          text: "ターミナルエージェントをもっと知りたいなら [OpenCode の代替ツール](/blog/opencode-alternatives)を、エディターなら [Cursor の代替ツール](/blog/cursor-alternatives)をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "プロンプトの合間も働き続けるエージェントが欲しいなら",
    text: "Crewmark の社員は勤務時間中にハートビートで起き、ボードから次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Aider は終わったのですか？",
        a: "アーカイブはされておらず、今もインストールして動かせます。ただし GitHub の最後のリリースは 2025年8月の v0.86.0、PyPI の最後のリリースは 2026年2月、最後のコミットは 2026年5月22日で、2026年1月に寄せられた今後についての質問にもメンテナーは答えていません。",
      },
      {
        q: "Aider はまだメンテナンスされていますか？",
        a: "ほとんどされていません。2026年5月22日以降コミットはなく、issue とプルリクエストが約 1,960 件未解決のままで、README は今も 2025年初めのモデルを勧めています。コミュニティフォークの cecli は今も更新されています。",
      },
      {
        q: "Aider のフォークはありますか？",
        a: "あります。2025年8月に始まった GitHub 上の Aider のフォーク cecli で、Apache 2.0、`cecli` コマンドとしてインストールします。スターは約 420 で、Aider よりずっと小規模です。",
      },
      {
        q: "2026年、Aider と OpenCode はどちらが良いですか？",
        a: "ほとんどの人には OpenCode です。Aider と同じくオープンソースでモデルを選びませんが、ほぼ毎日更新され、サブエージェント、MCP、デスクトップアプリも備えています。Aider はよりシンプルで、変更のたびにコミットしてくれます。",
      },
      {
        q: "Aider は無料ですか？",
        a: "はい。Aider は Apache 2.0 で無料です。モデルプロバイダーへの支払いは必要ですが、ローカルモデルを使えば費用はかかりません。",
      },
      {
        q: "無料で使える一番の Aider 代替ツールは？",
        a: "OpenCode には 1 日の上限付きの無料モデルがあります。Nanocoder、Crush、OpenCode は Ollama 経由でローカルモデルを無料で動かせ、Codex CLI は無料の ChatGPT アカウントで使えます。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに、プロンプトだけでなくバックログを。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に各プロジェクトの GitHub リポジトリ、README、リリース、PyPI、各社の料金ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Aider や掲載しているどのプロジェクトとも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
