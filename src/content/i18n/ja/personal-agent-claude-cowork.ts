import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork とは：料金、設定、Claude Code との違い",
    description:
      "Anthropic のエージェント Claude Cowork を解説。対象プラン、クラウドでの動作、スケジュールタスク、承認の仕組み、Claude Code との違いを紹介します。",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Anthropic",
    title: "Claude Cowork：Anthropic の AI の同僚にできることと使い方",
    lead: "Claude Cowork は、Claude のアプリでナレッジワークをこなす Anthropic のエージェントです。リサーチのまとめ、スプレッドシート、スライド資料、整理されたフォルダなど、ほしい成果を伝えると、Claude が手順を計画し、あなたのファイル、連携したアプリ、ブラウザの中で作業を進め、結果を返します。タスクは Anthropic のクラウドで実行され、ノートパソコンを閉じても続きます。このガイドでは、できること、対象プラン、セットアップ方法、実行前に確認する仕組み、Claude Code との違いを紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Cowork とは",
      points: [
        "コーディング以外の仕事のためのエージェント：リサーチ、分析、ドキュメント、数式が機能するスプレッドシート、スライド資料、ファイル作業を扱います。Anthropic 自身の FAQ でも、Cowork はこうした仕事向け、Claude Code はソフトウェアエンジニアリング向けと位置づけられています。",
        "クラウドで動く：セッションは Anthropic のサーバー上の隔離された環境で実行され、あなたの Claude アカウントに保存されます。Pro、Max、Ultra では、2026年10月6日から新しいタスクがクラウドで実行されています。",
        "Claude Desktop を通じてあなたのコンピューターに届く：ローカルのファイル、ローカルのコネクタ、ブラウザの操作、コンピューターの操作には、そのマシンでデスクトップアプリを開いておく必要があります。",
        "仕事を繰り返す：スケジュールタスクは毎時、毎日、毎週、平日に実行でき、それぞれがクラウド上の独立したセッションとして動きます。",
        "Claude の一部：2026年9月から、Cowork は通常の Claude の会話に統合されつつあります。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Claude Cowork の料金：対象プラン",
      text: [
        "2026年11月13日時点の claude.com/pricing の価格（米ドル、税抜き）です。Anthropic は各プランに含まれる Cowork の利用量を公表していません。Pro のカードには、Cowork はチャットよりも早く利用上限を消費すると書かれています。",
      ],
      headers: ["プラン", "料金", "Claude Cowork"],
      rows: [
        ["Free", "$0", "含まれない"],
        ["Pro", "$20/月、または年払いで $17/月（年 $200）", "含まれる"],
        ["Max", "$100/月", "含まれる"],
        ["Ultra", "$200/月", "含まれる"],
        ["Team（2〜150 人）", "Standard シートは年払いで $20/月、月払いで $25。Premium シートは $100 または $125", "含まれる。Web とモバイルはベータ"],
        ["Enterprise", "年払いでシートあたり $20/月、最低 20 シート。加えて API 料金での利用料", "含まれる。クラウドセッション、Web、モバイルはオーナーがオンにするまでオフ"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Cowork のセットアップ方法",
      steps: [
        { title: "Claude の有料プランに入る", text: "Pro、Max、Ultra、Team、Enterprise のいずれかです。Enterprise では、オーナーが Cowork をオンにする必要がある場合があります。" },
        { title: "ローカルで作業させるなら Claude Desktop をインストールする", text: "Cowork は Web や iOS、Android でも動きますが、ローカルのファイル、ブラウザの操作、コンピューターの操作には macOS または Windows 版の Claude Desktop が必要です（Linux 版はベータ）。" },
        { title: "手順ではなく成果を伝える", text: "何を返してほしいか、そして入力がどこにあるかを伝えます。ファイル、Google ドライブ、Gmail、Microsoft 365、Slack などの連携アプリ、または Web です。" },
        { title: "確認の仕方を選ぶ", text: "操作ごとに承認するなら Manual、日常的な操作の承認を安全性レビューに任せるなら Auto を選びます。コネクタのツールごとに、常に許可、承認が必要、ブロックを設定することもできます。" },
        { title: "スケジュールにする", text: "タスクの中で `/schedule` と入力するか、Scheduled ページを使い、毎時、毎日、毎週、平日、オンデマンドから選びます。" },
      ],
      source: { label: "出典：Anthropic ヘルプセンター「Get started with Claude Cowork」", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Claude Cowork で主導権を保つ仕組み",
      points: [
        "3 つの承認モード：Manual は操作の前に確認します。Auto は各操作に安全性レビューをかけて危険なものをブロックし、ブロックが続くと確認する方式に戻ります。Skip は確認しません。デフォルトは Pro、Max、Ultra、Team では Auto、Enterprise では Manual です。",
        "ファイルを完全に削除する前には確認し、コンピューターの操作ではアプリケーションごとに確認します。",
        "Team と Enterprise の管理者は、Auto をオフにし、書き込みができるコネクタのツールごとに承認を必須にできます。",
        "デスクトップアプリ、Web、スマートフォンから、実行中のタスクの方向を変えたり止めたりできます。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork と Claude Code、ChatGPT Work、Copilot Cowork の比較",
      text: [
        "2026年11月13日に確認した各ベンダー自身のページの情報です。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。",
        "並べて比較：[Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)、[Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work)、[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot)。ガイド：[ChatGPT Work](/personal-agent/chatgpt-work)、[Copilot Cowork](/personal-agent/copilot-cowork)。",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["提供元", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["用途", "コーディング以外のナレッジワーク", "ソフトウェアエンジニアリング", "確認する成果物ができあがるタスク", "Microsoft 365 をまたぐ仕事"],
        ["動く場所", "Anthropic のクラウド。ローカルは Claude Desktop 経由", "デフォルトは自分のマシン。Web ではクラウドセッション", "OpenAI のクラウド、またはデスクトップアプリ経由で自分のコンピューター", "Microsoft のクラウド。OneDrive と SharePoint を使用"],
        ["利用できる人", "Claude の有料プラン", "Claude の有料プラン", "ChatGPT の各プラン。Free と Go は制限付き", "Microsoft 365 Copilot ライセンスと Copilot Credits"],
        ["スケジュール", "毎時〜毎週、クラウドで", "クラウドとデスクトップのスケジュールタスク、`/loop`", "スケジュールタスクとイベントトリガー", "スケジュールされたプロンプトとイベントで動くタスク"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "ドキュメントには Cowork を。コードベースには Crewmark を。",
      text: [
        "Claude Cowork は、あなたが渡したナレッジワークをこなします。Crewmark は、あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。リポジトリでのエンジニアリング、SEO、マーケティングの仕事が、スケジュールどおりに進み、ボードで追跡されます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees)から選びます。たとえば [AI SEO スペシャリスト](/ai-employees/seo-specialist)です。" },
        { title: "仕事をボードに載せる", text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は [Claude Code の活用例](/use-cases/claude-code)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Cowork をセットアップする" },
  mid: {
    title: "コードベースのための AI の同僚がほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Cowork のよくある質問",
    items: [
      {
        q: "Claude Cowork とは何ですか？",
        a: "Claude のアプリでコーディング以外のナレッジワークをこなす Anthropic のエージェントです。ほしい成果を伝えると、あなたのファイル、連携したアプリ、ブラウザの中で手順を実行し、ドキュメント、スプレッドシート、スライド資料などの完成したファイルを返します。",
      },
      {
        q: "Claude Cowork の料金はいくらですか？",
        a: "Claude の有料プランに含まれています。Pro は月 $20（年払いなら月 $17）、Max は $100、Ultra は $200 で、Team と Enterprise はシート単位です。Claude Free には含まれていません。",
      },
      {
        q: "Claude Cowork と Claude Code の違いは？",
        a: "Cowork は、Claude のアプリで行うリサーチ、ドキュメント、スプレッドシートなどのナレッジワーク向けです。Claude Code は、あなたのリポジトリでソフトウェアエンジニアリングを行う Anthropic のエージェントです。Anthropic によると、Cowork は Claude Code と同じアーキテクチャを使っています。",
      },
      {
        q: "Claude Cowork は Windows やモバイルで使えますか？",
        a: "はい。Claude Desktop で macOS と Windows（Linux はベータ）で動き、Pro、Max、Ultra、Team では Web と iOS・Android 版の Claude でも使えます。ローカルのファイル、ブラウザの操作、コンピューターの操作にはデスクトップアプリが必要です。",
      },
      {
        q: "Claude Cowork にスケジュールでタスクを実行させられますか？",
        a: "はい、すべての有料プランでできます。タスクの中で `/schedule` を使うか、Scheduled ページを使います。各実行はクラウド上の独立したセッションなので、ローカルのファイルが必要なタスクでなければ、コンピューターの電源が切れていてもかまいません。",
      },
      {
        q: "ノートパソコンを閉じていても Claude Cowork は動きますか？",
        a: "クラウドのタスクは動きます。Anthropic のサーバー上で実行され続けます。ローカルのファイル、ローカルのコネクタ、ブラウザが必要な作業は、Claude Desktop を再び開くまでそれらに届かなくなります。",
      },
    ],
  },
  cta: {
    title: "ドキュメントは Cowork に。エージェントにも仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、claude.com/product/cowork、claude.com/pricing、Anthropic のヘルプセンターで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、Microsoft とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
