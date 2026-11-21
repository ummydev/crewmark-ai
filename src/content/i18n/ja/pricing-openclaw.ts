import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /pricing/openclaw; the English master is src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw の料金：無料。実際に支払うのは何か",
    description:
      "OpenClaw は MIT ライセンスで無料、有料プランもホスティングもありません。支払うのはモデルプロバイダーへの料金で、API キーか手持ちのサブスクリプションを使います。",
  },
  breadcrumb: "OpenClaw の料金",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "料金 · OpenClaw",
    title: "OpenClaw の料金：無料のオープンソース。支払うのはモデルプロバイダーへの料金",
    lead: "OpenClaw は無料です。MIT ライセンスで、README には、このプロジェクトには「有料プランも、ホスティングサービスも、トークンもない」（\"has no paid tier, hosted service, or token.\"）と書かれています。支払うのは、その裏で動くモデルの料金です。プロバイダーから請求される API キーか、ChatGPT や Claude Code のログインなど、すでに持っているサブスクリプションを使います。Gateway は自分のマシンで動かします。実際にどうなるのか、そして Hermes Agent、OpenCode、OpenWorker、Claude Code との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "実際にかかる費用",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenClaw のプランと料金",
      text: [
        "OpenClaw の GitHub の README と docs.openclaw.ai をもとに、2026年11月13日に確認しました。エディションは 1 つだけで、無料です。",
      ],
      headers: ["プラン", "料金", "含まれるもの"],
      rows: [
        [
          "OpenClaw（オープンソース）",
          "無料、MIT ライセンス",
          "Gateway、Control UI、CLI、TUI。macOS、iOS、Android、Windows、Linux 向けのネイティブアプリ。WhatsApp、Telegram、Slack、Discord、iMessage などのチャットチャネル。1 つの Gateway に複数のエージェント。Automations スケジューラー",
        ],
        ["有料プラン", "なし", "README によると有料プランはない"],
        ["ホスティングサービス", "なし", "Gateway は自分で動かし、保守する"],
        [
          "モデルの利用料",
          "モデルプロバイダーが請求",
          "API キー、またはすでに持っているサブスクリプション（ChatGPT/Codex の OAuth、または同じホスト上の Claude Code のログイン）",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "OpenClaw を動かすのに実際にかかる費用",
      points: [
        "モデルプロバイダー：モデルはプラグインです。OpenAI、Anthropic、Google Gemini、OpenRouter、xAI などがあります。API キーを使う場合、OpenClaw が使った分をそのプロバイダーが請求します。",
        "すでに払っているサブスクリプションも使える：OpenClaw は OpenAI の ChatGPT/Codex の OAuth でサインインでき、同じホスト上の Claude Code のログインを再利用して Claude を使うこともできます（`claude setup-token` も使えます）。",
        "Claude Code のログインが使えるのは、OpenClaw がそのログインと同じホストで動いている場合だけです。コンテナでのインストール（Podman など）では `~/.claude` がマウントされないため、ドキュメントはその場合に API キーを勧めています。",
        "ローカルのモデルサーバーもプロバイダーの一覧にあります：Ollama、LM Studio、vLLM です。",
        "自分のマシン：Gateway は自分で管理するハードウェア上のデーモンで、macOS、Linux、Windows、WSL2 にインストールするか、Docker や Nix で導入します。OpenClaw 自身はホスティングを提供していません。",
        "OpenClaw 自体への支払いはなし：有料プランがないので、プロジェクトから買うものはありません。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw と類似エージェントの料金比較",
      text: [
        "各製品のサイトに載っている価格で、2026年11月13日に確認しました。どれもモデルが必要で、下のプランに含まれていない限り、その料金はモデルの提供元に支払います。",
        "並べて比較：[OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code)、[OpenClaw vs OpenCode](/compare/openclaw-vs-opencode)、[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)。ほかの選択肢は [OpenClaw の代替ツール](/blog/openclaw-alternatives) で紹介しています。",
      ],
      headers: ["製品", "最低価格", "無料の選択肢"],
      rows: [
        ["OpenClaw", "無料。支払うのはモデルプロバイダーへの料金", "あり：プロジェクト全体（MIT）"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "エージェントは無料。任意の Nous Portal Plus は月 $20",
          "あり：エージェント（MIT）と、$0 の Nous Portal Free",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "エージェントは無料。OpenCode Go 月 $10、Go Plus 月 $40",
          "あり：1 日のリクエスト上限付きの無料モデル。アカウント不要",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "価格の掲載なし。自分のモデルのキーかローカルモデルを使用",
          "あり：アプリ（MIT）",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro 月 $20、年払いなら月 $17",
          "なし：Claude Free には含まれない。従量課金の API クレジットでも利用可",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "OpenClaw はチャットで応える。Crewmark はコーディングエージェントに仕事を与える。",
      text: [
        "Crewmark は、AI 社員のチームのための issue トラッカーです。社員の一人ひとりが、あなたのパソコンで動く Claude Code または Codex の会話で、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を引き受けます。OpenClaw と同じく、モデルの利用料は請求しません。エージェントは、すでにお支払いの Claude や ChatGPT のサブスクリプションで動きます。",
        "Crewmark の料金：Free は $0（1 プロジェクト、AI 社員 3 人まで、利用者 1 人）。月 $5 の Pro と月 $10 の Team は近日公開予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントで Crewmark を無料でお使いいただけます。オープンソース（GPL-3.0）で、セルフホストもできます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees) から選び、目標を数字で決めます。" },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "プランを見る",
          text: "[Crewmark の料金](/pricing) と、エージェントがそれを使って何をするかは [Claude Code の活用例](/use-cases/claude-code) をご覧ください。",
        },
      ],
    },
  ],
  mid: {
    title: "Claude や ChatGPT にすでに払っていますか？",
    text: "Crewmark は、あなたの Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "OpenClaw の料金に関するよくある質問",
    items: [
      {
        q: "OpenClaw は無料ですか？",
        a: "はい。OpenClaw は MIT ライセンスのオープンソースで、README には、このプロジェクトには「有料プランも、ホスティングサービスも、トークンもない」（\"has no paid tier, hosted service, or token.\"）と書かれています。支払うのはモデルプロバイダーへの料金だけです。",
      },
      {
        q: "OpenClaw に料金プランはありますか？",
        a: "ありません。無料のエディションが 1 つあるだけです。費用がかかるのは接続するモデルの分だけで、プロバイダーから請求される API キーか、すでに持っているサブスクリプションを使います。",
      },
      {
        q: "OpenClaw の料金体系は？",
        a: "無料のソフトウェアに、自分で用意するモデルを組み合わせます。モデルはプラグイン（OpenAI、Anthropic、Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM など）なので、費用は選んだプロバイダーとプランしだいです。",
      },
      {
        q: "Claude のサブスクリプションで OpenClaw を使えますか？",
        a: "はい。同じホスト上の Claude Code のログインを再利用します（または `claude setup-token`）。Podman などのコンテナでのインストールでは `~/.claude` がマウントされないため、ドキュメントはその場合に API キーを勧めています。",
      },
      {
        q: "OpenClaw のホスティング版はありますか？",
        a: "プロジェクトからは提供されていません。Gateway は自分のマシン（macOS、Linux、Windows、WSL2、または Docker や Nix）で動かし、自分で保守します。",
      },
      {
        q: "OpenClaw の開発費は誰が出していますか？",
        a: "OpenClaw Foundation です。コアチームを雇用し、リリースに署名する独立した 501(c)(3) 団体です。README には「OpenAI は寄付者であり、所有者ではない」（\"OpenAI is a donor, not an owner.\"）と書かれています。",
      },
    ],
  },
  cta: {
    title: "モデルの契約はそのままに。エージェントに仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、OpenClaw の GitHub の README と docs.openclaw.ai、比較した各製品の料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenClaw Foundation やこのページで名前を挙げたその他の企業とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
