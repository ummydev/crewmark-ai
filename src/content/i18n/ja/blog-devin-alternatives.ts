import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ja translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas（Node 24 以上と uv が必要）
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent（SWE-agent の後継）
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Devin の代替ツール（2026年）：オープンソース、無料、より安く",
    description:
      "2026年のおすすめ Devin AI 代替ツールを各社の最新料金とともに紹介：今すぐインストールできるオープンソースのエージェント（OpenHands、OpenCode、mini-swe-agent、Cline、Goose）、OpenAI・Anthropic・Google・GitHub のクラウドエージェント、チーム向けプラットフォーム。",
  },
  breadcrumb: "Devin の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "ブログ · AI ソフトウェアエンジニア",
    title: "2026年のおすすめ Devin 代替ツール：オープンソース、無料、より安く",
    lead: "Cognition の Devin は自律型の AI ソフトウェアエンジニアです。Slack や Teams でタグ付けしたり、Linear や Jira のチケットを割り当てたり、失敗している CI を指したりすると、専用の仮想マシンで作業してプルリクエストを開きます。2026年には無料枠と月 $20 からのプランがあります。代替ツールは 3 つのグループに分かれます。自分で動かすオープンソースのエージェント、モデル開発元のクラウドエージェント、そしてチーム向けのプラットフォームです。それぞれ向いている人が違うので、各社のサイトに載っている料金とともに紹介します。",
    cta: "今すぐ始める",
    secondary: "オープンソースの代替ツール",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "オープンソースで自社サーバーに置きたい：OpenDevin として始まり、今はコーディングエージェントのセルフホスト型コントロールセンターになった OpenHands。",
        "ターミナル中心で、モデルは自由に選びたい：MIT ライセンスで GitHub スター約 226,000 の OpenCode。",
        "すでに ChatGPT か Claude に課金している：月 $20 からのプランに含まれる OpenAI Codex のクラウドタスクか Claude Code のクラウドセッション。",
        "チームが GitHub で仕事をしている：issue から割り当てられ、月 $10 の Copilot Pro から含まれるクラウド上の Copilot。",
        "会社全体でチケット駆動のエージェントを使いたい：Factory の Droids。",
        "あなた自身の Claude Code や Codex で、継続的な仕事を持つ AI エンジニアが欲しい：Crewmark。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Devin 代替ツールの比較",
      text: [
        "料金は、エージェントを含む最も安いプランを 2026年11月10日に各社の料金ページで確認したものです。スター数は同日の GitHub API による概数です。",
      ],
      headers: ["ツール", "オープンソース", "動作場所", "最低料金", "向いている用途"],
      rows: [
        ["[Devin](https://devin.ai)", "いいえ", "セッションごとの専用クラウド VM。ローカルでは Devin Desktop と CLI", "無料枠あり。Pro は月 $20", "Slack、Teams、Jira からエージェントにチケットを渡したいチーム"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "はい、MIT（スター約 9.3 万）", "ノート PC、Docker、VM。ホスト型クラウドも", "セルフホストは無料。Teams は月 $500", "自社のインフラとモデルのキーで動く Devin 風のエージェント"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "はい、MIT（スター約 22.6 万）", "ターミナル、デスクトップアプリ、SDK", "無料モデル付き。Go は月 $10", "200 以上のモデルプロバイダーから選びたいターミナルユーザー"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "はい、MIT（スター約 9,500）", "ローカルの CLI", "無料（モデル代は自分で支払う）", "研究、ベンチマーク、再現可能な issue の修正"],
        ["[Cline](https://github.com/cline/cline)", "はい、Apache 2.0（スター約 7.1 万）", "CLI、VS Code、JetBrains、デスクトップ", "無料（モデル代は自分で支払う）", "エディターの中で動くオープンソースのエージェント"],
        ["[Goose](https://github.com/aaif-goose/goose)", "はい、Apache 2.0（スター約 5.6 万）", "デスクトップアプリ、CLI、API", "無料（モデル代は自分で支払う）", "コードにもそれ以外の仕事にも使える 1 つのエージェント、MCP 拡張付き"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "CLI のみ（Apache 2.0）", "OpenAI のクラウド。CLI、IDE、デスクトップ", "ChatGPT Plus 月 $20", "ChatGPT の契約者"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "いいえ", "クラウドセッションごとに Anthropic 管理の VM。ローカルでも", "Claude Pro 月 $20", "ノート PC を閉じても作業を続けてほしい Claude Code ユーザー"],
        ["[Google Jules](https://jules.google)", "いいえ", "Google のクラウド VM", "基本プランで 1 日 15 タスク。Google AI Pro は月 $19.99", "Gemini を使う個人開発者"],
        ["[GitHub Copilot in the cloud](https://github.com/features/copilot/plans)", "いいえ", "GitHub のクラウドサンドボックス", "Copilot Pro 月 $10", "すでに GitHub を使っているチーム"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "いいえ", "Cursor のクラウド VM", "Premium 月 $30", "すでに Cursor で仕事をしているチーム"],
        ["[Factory](https://factory.com)", "いいえ", "デスクトップ、CLI、Web。クラウドとローカルのエージェント", "Pro 月 $20", "チケットやチャットからエージェントを動かすエンジニアリング組織"],
        ["[Crewmark](/pricing)", "はい、GPL-3.0", "あなたのコンピューター上、あなた自身の Claude Code か Codex の中", `無料プラン（プロジェクト ${free.projects} 件、AI 社員 ${free.employees} 人）。Pro は月 $${pro.price}（近日公開）`, "すでに契約しているプランで、スケジュールに沿って働く AI エンジニアが欲しい小さなチーム"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "今すぐ動かせるオープンソースの Devin 代替ツール",
      text: [
        "Devin 自体はオープンソースではありません。ここで紹介するものはオープンソースで、どれも 1 つのコマンドでインストールできます。モデルのキーは自分で用意するので、ソフトウェアは無料で、支払うのはモデルプロバイダーへの分です。スクリプトをシェルにパイプする前に、中身を読んでおきましょう。",
      ],
      steps: [
        {
          title: "OpenHands（旧 OpenDevin）",
          text: "現在の名前は Agent Canvas です。OpenHands のエージェントに加えて Claude Code、Codex、Gemini、OpenCode も、ノート PC、Docker、VM 上で動かせるセルフホスト型のコントロールセンターで、Slack、GitHub、Linear 向けの自動化も備えています。セルフホストは無料で、ホスト型の Teams プランは最大 10 ユーザーで月 $500 です。",
          code: install,
        },
        {
          title: "OpenCode",
          text: "ローカルモデルを含む 200 以上のモデルプロバイダーで使える MIT ライセンスのターミナルエージェントで、ベータ版のデスクトップアプリもあります。アカウントなしで無料モデルが使え、OpenCode Go は月 $10、ChatGPT や GitHub Copilot のサブスクリプションでサインインすることもできます。似たエージェントは [OpenCode の代替ツール](/blog/opencode-alternatives)をご覧ください。",
        },
        {
          title: "SWE-agent と mini-swe-agent",
          text: "Princeton と Stanford の研究用エージェントで、GitHub の issue を受け取って修正を試みます。README には mini-swe-agent が後継になったとあるので、そちらから始めましょう。無料で、支払うのはモデルの分だけです。",
        },
        {
          title: "Cline、Goose、Aider、Kilo Code",
          text: "Cline は Apache ライセンスのエージェントで、ターミナル、VS Code、JetBrains で Plan と Act のモードを使えます。Goose は現在 Linux Foundation の Agentic AI Foundation の傘下にあり、MCP 拡張でコードやそれ以外のタスクをこなします。Aider と Kilo Code も人気のオープンソースのコーディングエージェントです。初期のオープンソースの Devin クローンだった Devika は、2025年9月以降更新されていません。",
        },
      ],
      source: { label: "出典：GitHub の OpenHands", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "モデル開発元のクラウドエージェント",
      text: [
        "別のベンダーを増やさずに Devin の「割り当てたら任せておく」使い方をしたいなら、モデル開発元が、すでに契約しているかもしれないプランの中で提供しています。",
      ],
      points: [
        "OpenAI Codex：chatgpt.com/codex のクラウドタスクで、月 $20 の ChatGPT Plus から含まれます。クラウドタスクは利用枠を多めに消費し、API キーは CLI と IDE には使えますがクラウド機能には使えません。",
        "Claude Code：claude.ai/code、Claude アプリ、または `claude --cloud` から始めるクラウドセッションで、それぞれ Anthropic が管理する隔離された VM で動きます。Pro（月 $20）、Max、Ultra、Team プランで使え、VM の追加料金はありません。",
        "Google Jules：リポジトリをクラウド VM にクローンしてプルリクエストを開きます。基本プランで 1 日 15 タスク、月 $19.99 の Google AI Pro で 100 タスクです。",
        "クラウド上の GitHub Copilot：issue を割り当てると Copilot がプルリクエストを開きます。月 $10 の Copilot Pro から含まれ、使用量は GitHub AI Credits で課金されます。",
        "Cursor Cloud Agents：隔離された VM で動き、Cursor、Web、Slack、Linear から起動できます。月 $30 の Premium プランから使えます。",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "2026年の Devin の料金",
      text: [
        "多くのリストは今も $500 のチームプランと 1 ACU あたり $2.25 を挙げています。現在の devin.ai では、セルフサービスのプランは ACU を使いません。課金は含まれる利用枠とオンデマンドのクレジットの組み合わせで、ACU で課金されるのは Enterprise だけです。",
      ],
      points: [
        "Free：$0、少なめの利用枠。",
        "Pro：月 $20、Devin Cloud を含む。超過分は API 料金。",
        "Max：月 $200。",
        "Teams：月 $80 と、フル開発者シート 1 席あたり月 $40。最大 100 ユーザー。",
        "Enterprise：個別見積もり。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "あなた自身のエージェントで、継続的な仕事を持つ AI エンジニアを",
      text: [
        "Devin もクラウドエージェントも、タスクを 1 つずつ割り当てられるのを待っています。Crewmark はあなた自身の Claude Code や Codex を、職種、数値の目標、勤務時間、ハートビートを持つ AI ソフトウェアエンジニアに変えます。勤務時間中は起きてボードから次の issue を取り、プルリクエストを開き、判断が必要なときはメッセージを送ってきます。あなたのコンピューター上で、すでに契約しているサブスクリプションのまま動きます。",
      ],
      steps: [
        {
          title: "ソフトウェアエンジニアの職種で雇う",
          text: "業務の説明、目標、ルーティンは最初から設定されています。[AI ソフトウェアエンジニア](/ai-employees/software-engineer)をご覧ください。",
        },
        {
          title: "仕事をボードに載せる",
          text: "チームメイトに頼むように issue を割り当てると、社員がステータスとコメントを最新に保ちます。[Claude Code のカンバン](/blog/claude-code-kanban)をご覧ください。",
        },
        {
          title: "そのまま続けさせる",
          text: "夜間も含めて勤務時間を設定します。[Claude Code を 24 時間動かす方法](/blog/run-claude-code-24-7)と [Codex の長時間タスク](/blog/codex-long-running-tasks)をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "すでに契約している Claude Code や Codex のプランで、Devin のようなエンジニアが欲しいなら",
    text: "Crewmark の社員はハートビートで起き、ボードの仕事を進め、プルリクエストを開きます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Devin のオープンソースの代替で一番良いのは？",
        a: "OpenDevin として始まった OpenHands が最も近く、自分のモデルのキーで動かすセルフホスト型のエージェントプラットフォームです。ターミナルのエージェントなら OpenCode、研究やベンチマークなら mini-swe-agent です。",
      },
      {
        q: "OpenDevin と OpenHands は同じものですか？",
        a: "はい。OpenDevin は All Hands AI によって OpenHands に改名されました。MIT ライセンスで、現在は Claude Code、Codex などのエージェントも動かせる Agent Canvas として提供されています。",
      },
      {
        q: "Devin は無料ですか？",
        a: "少なめの利用枠が付いた無料枠があります。2026年11月10日時点の devin.ai によると、有料プランは月 $20 の Pro、$200 の Max、月 $80 と開発者シート 1 席あたり $40 の Teams です。",
      },
      {
        q: "Devin は今も ACU 単位で課金していますか？",
        a: "Enterprise だけです。セルフサービスのプランは、含まれる利用枠とオンデマンドのクレジットの組み合わせになったため、以前の 1 ACU あたり $2.25 という数字は当てはまりません。",
      },
      {
        q: "Devin と Claude Code や Codex、どれを使うべきですか？",
        a: "すでに Claude か ChatGPT に課金しているなら、そのクラウドセッションやクラウドタスクで、追加費用なしに Devin の「割り当てて任せる」使い方ができます。Devin はさらに、チーム向けの Slack、Teams、Jira、Linear のワークフローを備えています。",
      },
      {
        q: "最も安い Devin の代替は？",
        a: "オープンソースのエージェントは、モデルの使用料以外かかりません。ホスト型では、月 $10 の GitHub Copilot Pro にクラウドエージェントが含まれ、Google Jules は基本プランで 1 日 15 タスクまで使えます。",
      },
    ],
  },
  cta: {
    title: "Claude Code や Codex に、タスクだけでなく仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に各製品の Web サイト、料金ページ、ドキュメント、GitHub リポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Cognition や掲載しているどの企業とも提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
