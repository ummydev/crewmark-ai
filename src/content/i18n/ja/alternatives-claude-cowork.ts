import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork の代替（2026）：無料・オープンソースも",
    description:
      "Claude Cowork の代替を比較：ChatGPT Work、Copilot Cowork、Gemini、Grok Bot、Lindy、オープンソースの OpenWorker、OpenBot、Suparagent。料金付き。",
  },
  breadcrumb: "Claude Cowork の代替",
  parent: { name: "製品比較", href: "/compare" },
  hero: {
    kicker: "代替 · Claude Cowork",
    title: "Claude Cowork の代替：OpenAI、Microsoft、Google、xAI の AI の同僚と、オープンソースの選択肢",
    lead: "Claude Cowork は、Claude のアプリでコーディング以外の仕事をこなす Anthropic のエージェントです。ほしい成果を伝えると、あなたのファイル、アプリ、ブラウザの中で、リサーチ、ドキュメント、スプレッドシート、スライドの作業を進めます。Claude の有料プラン限定で月 $20 からで、Anthropic によるとチャットよりも早くプランの利用枠を消費します。Claude モデルで動き、Pro、Max、Ultra では 2026年10月6日から新しいタスクが Anthropic のクラウドで実行されており、元に戻す設定はありません。このページでは、OpenAI、Microsoft、Google、xAI の代替、ホスティング型のアシスタント、自分で動かすオープンソースのアプリ、そして Crewmark を、それぞれの費用とあわせて比較します。",
    cta: "今すぐ始める",
    secondary: "比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Cowork の代替を一覧で比較",
      text: [
        "各ベンダー自身のページ、ドキュメント、GitHub の情報で、2026年11月13日に確認しました。価格は米ドルです。順位付けではありません。",
      ],
      headers: ["代替製品", "どんな製品か", "オープンソース", "最低価格"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork)（参考）",
          "Claude のアプリでコーディング以外のナレッジワークをこなす Anthropic のエージェント",
          "いいえ",
          "Claude Pro 月 $20、年払いなら月 $17。Free は対象外",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "ChatGPT の中の OpenAI の Work モード。最後に確認する成果物ができあがるタスク向け",
          "いいえ",
          "Free（$0）と Go（月 $8）：制限付き、デスクトップアプリのみ。Plus 月 $20",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Microsoft 365 をまたいで複数ステップのタスクをこなす Microsoft のエージェント",
          "いいえ",
          "Microsoft 365 Copilot ライセンスに加えて Copilot Credits（1 クレジット $0.01）",
        ],
        [
          "[Gemini のタスク（旧 Spark）](/personal-agent/gemini-spark)",
          "Gmail、Google ドキュメントなどの Google アプリを使う、Gemini アプリの中のバックグラウンドエージェント",
          "いいえ",
          "Google AI Pro 月 $19.99（米国）。無料プランでは利用不可",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "それぞれがクラウドに専用のコンピューターを持つ、xAI のホスティング型 AI チームメイト",
          "いいえ",
          "Premium 月 $30",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "受信トレイ、カレンダー、ミーティング、Slack のためのホスティング型 AI アシスタント。クレジットで課金",
          "いいえ",
          "無料：7 日間 $50 分のクレジット。その後はアクティブユーザーあたり月 $29.99 から",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "あなたのマシンで動く、AI の同僚のデスクトップアプリ",
          "はい、MIT",
          "料金の記載なし。自分のモデルのキーまたはローカルモデルを使用",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit のセルフホスト可能な、AI の同僚のためのワークスペース",
          "はい、MIT（別ライセンスの CopilotKit Intelligence を使用）",
          "個人プロジェクトは無料。Business はアクティブユーザーあたり月最大 $29",
        ],
        [
          "[Suparagent](/personal-agent/suparagent)",
          "Claude Code、Codex、Gemini CLI、Cursor などのエンジンの上で動く、AI の同僚のためのワークスペース",
          "はい、Apache-2.0",
          "デスクトップ版とセルフホスト版：料金の記載なし。モデルプロバイダーに支払い",
        ],
        [
          "[Crewmark](/ai-employees)",
          "あなたのパソコン上の Claude Code や Codex として動く AI 社員のための issue ボード",
          "はい、GPL-3.0",
          "無料（1 プロジェクト、AI 社員 3 人まで）。Pro 月 $5 は近日提供",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "OpenAI、Microsoft、Google、xAI のホスティング型の代替",
      text: [
        "この 4 つは Claude Cowork とよく似た使い方です。ベンダーのアプリでタスクを任せると、ベンダーのクラウドで実行されます。並べて比較：[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work)（OpenAI）：ChatGPT の Work モードで、タスクを計画し、あなたのファイル、プラグイン、Web、ブラウザ、コードを使って、スライド資料、スプレッドシート、ドキュメント、分析を返します。利用枠は Codex と共有です。Free と Go ではデスクトップアプリで Work を制限付きで使え、Plus（月 $20）と Pro（月 $100 から）ではデスクトップ、Web、モバイルで使えます。OpenAI による Claude Cowork の代替がほしい場合や、AI の同僚を無料で試したい場合に向いています。",
        "[Copilot Cowork](/personal-agent/copilot-cowork)（Microsoft）：Outlook、Teams、Word、Excel、PowerPoint、OneDrive、SharePoint をまたいで複数ステップのタスクをこなし、重要な操作の前には承認ダイアログを表示します。Microsoft 365 Copilot ライセンスが必要で、利用分は従量課金で 1 クレジット $0.01 の Copilot Credits で請求されます。ローカルのデバイス上のファイルにはアクセスできません。仕事が Microsoft 365 にあり、管理者がユーザーやグループごとにクレジットの上限を設けたい場合に向いています。",
        "[Gemini のタスク](/personal-agent/gemini-spark)（Google、ベータ期間中の名前は Spark）：Gemini アプリの中で動くクラウドエージェントで、Gmail、Google ドキュメント、Google ドライブなどの Google アプリを使い、スケジュールに沿って、または何かが起きたときに動きます。Google のヘルプ記事には、Google AI Pro（米国で月 $19.99）または Ultra（月 $99.99 から）が必要と記載されています。個人の Google アカウントでのみ使え、EEA、スイス、英国、ナイジェリアでは利用できません。仕事が Gmail やほかの Google アプリにあるなら、これが向いています。",
        "[Grok Bot](/alternatives/grok-bot)（xAI）：ホスティング型の Bot で、各 Bot が専用のクラウドコンピューターを持ち、あなたのツールにサインインし、Slack や Microsoft Teams の中で働き、ルーティンを実行し、互いにメッセージを送り合います。Premium（月 $30）、Super（月 $100）、Ultra（月 $200）に含まれ、月払いで、超過分はトークン費用で課金されます。別々の仕事を持つ複数の Bot を、Slack、Teams、ミーティングの中で働かせたいなら、これが向いています。",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "クレジットで課金されるホスティング型アシスタント：Lindy",
      points: [
        "[Lindy](/alternatives/lindy)：受信トレイ、カレンダー、ミーティング、リサーチ、レポート、フォローアップを扱う 1 つのホスティング型アシスタントで、Slack、メール、iMessage、SMS、電話、Gmail で使う Chrome 拡張機能から使います。Routines はスケジュールやイベントで動き、外部に影響することはすべてあなたの承認を待ちます。最初は 7 日間有効な $50 分の無料クレジットで始まり、その後はアクティブユーザー全員が課金対象で、3,000 クレジットで月 $29.99 からです。メッセージを送ったり Slack で @メンションしたりして頼めるエグゼクティブアシスタントがほしいなら、これが向いています。詳しくは [Lindy のガイド](/personal-agent/lindy)で。",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "オープンソースの Claude Cowork の代替",
      text: [
        "この 3 つは、あなたのパソコンやサーバーで動きます。個人利用ではどれも料金の記載がなく、モデルプロバイダーに支払うか、対応していればローカルモデルを動かします。",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker)：MIT ライセンスの AI の同僚のデスクトップアプリで、オープンベータ中です。エージェントのループ、会話、コネクタのトークン、モデルのキーはあなたのマシンに置かれます。OpenAI、Anthropic、Google Gemini、OpenRouter のキーを持ち込むか、Ollama、LM Studio、llama.cpp、vLLM でローカルモデルを動かします。アクションはデフォルトで承認が必要です。スケジュール実行が自分のアクションを承認することはなく、そのリクエストは受信箱で待ちます。macOS 12 以降（Apple シリコン）と Windows 10/11 x64 で動き、Windows 版はまだコード署名されていません。Windows や Mac で使える、ローカルで動くオープンソースの Claude Cowork の代替がほしいなら、これが向いています。",
        "[OpenBot](/personal-agent/openbot)（CopilotKit）：セルフホスト可能なワークスペースで、各 Bot が専用のブラウザ、ファイル、ツールを持ち、アクション前の承認、ルーティン、アクティビティログを備えます。Mac と Windows 向けのデスクトップアプリ（Docker バックエンド）として、またはチーム向けに Kubernetes 上で動きます。アプリケーションテンプレートは MIT で、別ライセンスの CopilotKit Intelligence を使い、Kubernetes での本番利用にはライセンスが必要です。個人プロジェクトは無料で、OpenBot for Business はアクティブユーザーあたり月最大 $29 です。AI の同僚をセルフホストし、モデルやエージェントを自分で持ち込みたいなら、これが向いています。[OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot) をご覧ください。",
        "[Suparagent](/personal-agent/suparagent)：名前付きの AI の同僚のための Apache-2.0 のワークスペースです。それぞれが職種、ワークスペース、記憶、ルーティン、承認の設定を持ち、Claude Code、Codex、Gemini CLI、Cursor など、すでに使っているエンジンの上で動きます。タスクボードとカレンダーがあり、リーダーのエージェントが専門のエージェントに仕事を渡せます。デスクトップアプリ、またはセルフホストの Linux サーバーとして動き、suparagent.ai のホスティングサービスは別の製品です。プロジェクト自身は、まだ初期段階で変化の途中だと説明しています。すでに支払っているエージェントの上で、職種を持つ同僚を動かしたいなら、これが向いています。",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Claude Cowork の代替の選び方",
      steps: [
        {
          title: "仕事がある場所から考える",
          text: "Microsoft 365 なら Copilot Cowork、Gmail と Google ドキュメントなら Gemini のタスク、ChatGPT なら ChatGPT Work、Slack や iMessage なら Lindy か Grok Bot が候補になります。",
        },
        {
          title: "いくら払うかを決める",
          text: "無料の選択肢：ChatGPT Free の ChatGPT Work（制限付き、デスクトップアプリのみ）、Lindy の 7 日間のクレジット、自分のモデルのキーで使う OpenWorker、OpenBot、Suparagent、そして Crewmark の Free プランです。Copilot Cowork はライセンスに加えて Copilot Credit ごとに課金され、Gemini のタスク、Grok Bot、ChatGPT の有料プランは月額のサブスクリプションです。",
        },
        {
          title: "ベンダーのクラウドか、自分のパソコンかを選ぶ",
          text: "ChatGPT Work、Copilot Cowork、Gemini のタスク、Grok Bot、Lindy はベンダーのクラウドで動きます。OpenWorker は会話とキーをあなたのマシンに置き、OpenBot と Suparagent は自分のサーバーでも動かせます。",
        },
        {
          title: "プラットフォームを確認する",
          text: "Windows では、Copilot Cowork と ChatGPT Work に Windows 向けのデスクトップアプリがあり、OpenWorker は Windows 10/11 向けのビルドを提供し、OpenBot のデスクトップアプリは Windows で動きます。Gemini のタスクは Web、Mac アプリ、モバイルで使え、Grok Bot は macOS（Apple シリコン）と iOS 向けのアプリを挙げています。",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Claude Cowork の代替について Hacker News で語られていること",
      text: [
        "2026年11月13日に、Claude Cowork を取り上げた2026年1月から11月までの Hacker News のスレッドを 5 件、1 ページずつ読みました。Reddit のスレッドは検索結果でしか見つけられなかったため、タイトルだけを載せ、要約はしていません。これは公開の場での議論から抜き出したもので、アンケート調査ではありません。",
      ],
      points: [
        "Cowork のエージェントモードより別のモードを好むという声は、読んだスレッドのうち 2 件で挙がりました（[2026年1月](https://news.ycombinator.com/item?id=46593022)、[2026年9月](https://news.ycombinator.com/item?id=49729412)）。1月のスレッドでは、ターミナルに慣れた人なら Claude Code で同じ仕事をより細かく制御しながらこなせる、とユーザーは言います。[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) をご覧ください。9月のスレッドでは、戦略やリサーチの質問には、エージェントモードより普通のチャットのほうが良い答えが返ってくる、とユーザーは言います。",
        "Reddit では、[Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/)（r/claude）、[Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/)（r/MistralAI）、[Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/)（r/ChatGPTCoding）、[Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/)（r/LocalLLM）というタイトルのスレッドが検索結果に出てきました。載せているのはタイトルだけで、これらのスレッドは読んでいません。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Crewmark：すでに使っている Claude Code や Codex で動く AI 社員のチーム",
      text: [
        "Crewmark は、Claude Cowork とは種類の違うツールです。AI 社員のチームのための issue トラッカーで、各社員はあなたのパソコン上の Claude Code または Codex の会話として、職種、目標、勤務時間を持ちます。ハートビートで起動し、共有ボードから issue を取り、そのステータスを最新に保ちます。オープンソース（GPL-3.0）で、セルフホストもできます。",
        "Free プランは 1 プロジェクト、AI 社員 3 人までです。Pro（月 $5）と Team（月 $10）は近日提供予定です。課金の仕組みはまだできていないため、それまではすべてのアカウントが Crewmark を無料で使えます。エージェントの利用料はエージェントのプロバイダーに支払い、ハートビートのためにパソコンは起動したままにしておく必要があります。詳しくは [Crewmark の料金](/pricing)で。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "各社員に職種、目標、プロジェクトを与えます。すぐ選べる職種には、ソフトウェアエンジニア、SEO スペシャリスト、データアナリストがあります。[AI 社員の職種](/ai-employees)をご覧ください。",
        },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、優先度を設定し、定期的なものは毎日、毎週、毎月繰り返すよう設定します。レビュー、許可、情報が必要になると、エージェントは issue を「要対応」にしてあなたを待ちます。",
        },
        {
          title: "勤務時間を設定する",
          text: "勤務時間中、ハートビートが 15 分から 24 時間ごとに各社員を起こします。セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "すでに Claude や ChatGPT に支払っていますか？",
    text: "Crewmark は、あなたの Claude Code や Codex を、職種、ハートビート、共有ボードを持つ AI 社員に変えます。社員 3 人までは無料です。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Cowork の代替に関するよくある質問",
    items: [
      {
        q: "無料の Claude Cowork の代替はありますか？",
        a: "あります。ChatGPT Free（$0）には、デスクトップアプリでの制限付きの ChatGPT Work が含まれます。Lindy は 7 日間有効な $50 分のクレジットで始められます。OpenWorker は料金の記載がなく、自分のモデルのキーかローカルモデルで動きます。OpenBot は個人プロジェクトなら無料で、Suparagent のデスクトップ版とセルフホスト版には料金の記載がありません。Crewmark の Free プランは 1 プロジェクト、AI 社員 3 人までです。Claude Cowork 自体は Claude の Free プランでは使えません。",
      },
      {
        q: "オープンソースの Claude Cowork の代替はありますか？",
        a: "OpenWorker（MIT）、OpenBot（別ライセンスの CopilotKit Intelligence の上で動く MIT のアプリケーションテンプレート）、Suparagent（Apache-2.0）はオープンソースで、Crewmark（GPL-3.0）もそうです。Claude Cowork 自体はオープンソースではありませんが、Cowork 向けのプラグインを集めた Anthropic の knowledge-work-plugins リポジトリは Apache-2.0 のオープンソースです。",
      },
      {
        q: "OpenAI による Claude Cowork の代替は？",
        a: "ChatGPT Work です。スライド資料、スプレッドシート、分析など、最後に確認する成果物ができあがるタスクのための ChatGPT の Work モードです。Free と Go ではデスクトップアプリで制限付き、Plus の月 $20 からフルに使え、利用枠は Codex と共有です。[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work) をご覧ください。",
      },
      {
        q: "Windows で動く Claude Cowork の代替は？",
        a: "Copilot Cowork（Windows と macOS 向けの Microsoft Copilot デスクトップアプリ）、ChatGPT Work（macOS、Windows、Linux 向けの ChatGPT デスクトップアプリ）、OpenWorker（Windows 10/11 x64、まだコード署名なし）、OpenBot（Mac と Windows 向けのデスクトップアプリ）です。Claude Cowork 自体も、Claude Desktop を通じて Windows で動きます。",
      },
      {
        q: "自分のパソコンで動く Claude Cowork の代替はありますか？",
        a: "OpenWorker はエージェントのループをあなたのマシンで動かし、会話、コネクタのトークン、モデルのキーをそこに置きます。OpenBot と Suparagent は、デスクトップアプリとして、または自分のサーバーで動きます。Claude Cowork がローカルのファイルにアクセスするのは Claude Desktop を通じてだけで、Pro、Max、Ultra では 2026年10月6日から新しいタスクがクラウドで実行されています。あなたのパソコンだけで動くタスクには、Anthropic はデスクトップアプリの Claude Code を案内しています（[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)）。",
      },
      {
        q: "Claude Cowork の代替が探されるのはなぜですか？",
        a: "Anthropic 自身が示している制限のためです。Cowork には Claude の有料プラン（Pro は月 $20 から）が必要で、チャットよりも早くプランの利用枠を消費し、セッションをほかの人と共有できず、Pro、Max、Ultra では新しいタスクがクラウドで動き、元に戻す設定がありません。仕事が Microsoft 365 や Gmail にあるなら、Copilot Cowork や Gemini のタスクがそれらのアプリに直接つながります。",
      },
    ],
  },
  cta: {
    title: "エージェントに、タスクだけでなく仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、各製品自身のページ、ドキュメント、料金、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、Microsoft、Google、xAI、Lindy、CopilotKit、および OpenWorker と Suparagent の開発者とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ページに基づくもので、その後変更されている可能性があります。",
};
