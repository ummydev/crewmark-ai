import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent とは？ 導入手順 | Crewmark AI",
    description:
      "DeepSeek のオープンソース Super-Agent（dsh-superagent）は、1つの GitHub リポジトリ向けの自律型コーディングエージェント。できること、必要環境、導入、安全面、比較を解説します。",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "ブログ · DeepSeek",
    title: "DeepSeek Super-Agent とは？ 概要と導入方法",
    lead: "dsh-superagent は、1つの GitHub リポジトリ向けに DeepSeek が公開したオープンソースの自律型コーディングエージェントで、2026年10月31日に MIT ライセンスで公開されました。DeepSeek Harness 上で動き、GitHub（任意で Feishu も）を監視し、依頼をプルリクエストに変えます。依頼ごとに専用のセッションとディレクトリで作業します。このガイドでは、できること、必要なもの、導入方法、「自律的」とは実際にどういうことか、そして他サービスとの比較を説明します。",
    cta: "今すぐ始める",
    secondary: "導入手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "DeepSeek Super-Agent とは",
      text: [
        "リポジトリでは、dsh-superagent を「1つの GitHub リポジトリ向けの自律型コーディングエージェントで、DeepSeek Harness 用のバンドルとして提供される」と説明しています。許可リストにいる人が仕事を頼むと、作業項目（Ticket）を作り、専用のエージェントセッションとディレクトリで作業して、元の会話にプルリクエストなどで返信します。Web パネルには、人の対応が必要なものだけが並びます。",
        "DeepSeek はこれを研究用プロトタイプとし、「DeepSeek の公式プロダクトではない」としています。公開コードは DeepSeek 社内版とは異なり、DeepSeek の解説記事にある設計の一部は今後の方向性で、プロトタイプには実装されていません。",
      ],
      points: [
        "入力元：GitHub の通知、購読中の issue とプルリクエスト、CI の変化、マージまたはクローズされたプルリクエスト。追加すれば Feishu のチャットも。",
        "並列作業：Ticket ごとに `worker-<ticket id>` という名前の専用の実行セッションと専用のディレクトリ（多くは `git worktree` のチェックアウト）を持ち、同時実行数は設定した上限までです。",
        "フォローアップ：issue やプルリクエストへの後続のコメントは、それを担当している Ticket に届くので、もう一度エージェントにメンションする必要はありません。",
        "自分に課しているルール：「人の注意をできるだけ使わず、できるだけ多くの価値を出す」。依頼は一度だけ確認し、作業中は静かにして、結果・質問・失敗があるときだけ再び連絡します。",
      ],
    },
    {
      kind: "table",
      title: "本当に自律的？ 3つの accept モード",
      text: [
        "報道では、頼まなくてもバグを直すエージェントとして紹介されています。ドキュメントはもっと慎重です。許可された人からの直接の依頼は常に有効ですが、誰も頼んでいない作業にはチームが書いたルールが必要で、デフォルトのモードではエージェントがやったはずのことを記録するだけです。",
      ],
      headers: ["accept モード", "誰も頼んでいない作業の扱い"],
      rows: [
        ["`off`", "無視：許可された人からの直接の依頼だけが作業を始める"],
        ["`observe`（デフォルト）", "ルールに照らして評価し「would accept」として記録するが、何も始まらない"],
        ["`auto`", "ルールのうち1つ以上に一致すると開始される"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "dsh-superagent の導入方法",
      text: [
        "必要なのは、Node.js 22.19 以上または 24 以上、pnpm、git 2.32 以上、tmux、Python 3.8 以上、GitHub CLI 2.48 以上、DeepSeek Harness 0.2.1-alpha.2 またはそれ以降の 0.2 系、そして DeepSeek Harness に設定したモデルプロバイダです。導入手順は長いため、リポジトリではお使いのコーディングエージェントに案内させる方式をとっています。",
      ],
      steps: [
        {
          title: "DeepSeek Harness をインストールする",
          text: "DeepSeek Harness（`dsh`）は DeepSeek のオープンソースのエージェントハーネスで、開発者向けプレビュー版です。一度起動してモデルプロバイダを設定します。Web UI は `http://127.0.0.1:3080` で開きます。",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "リポジトリをクローンし、SETUP.md をコーディングエージェントに渡す",
          text: "チェックアウトしたディレクトリで、コーディングエージェントに SETUP.md を読ませます。エージェントはマシンを調べ、1メッセージにつき質問を1つずつ行い、計画の全体を一度示してから、初めてインストールを始めます。",
          code: "git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git\ncd dsh-superagent-prototype\n# then ask your coding agent:\n# Read SETUP.md in this repository and set up dsh-superagent with me.",
        },
        {
          title: "導入時の質問に答える",
          text: "依頼の入力元（GitHub のみか、Feishu も使うか）、対象リポジトリ、エージェントが使う GitHub アカウント（専用のものを使い、自分のアカウントは絶対に使わない）、仕事を頼んでよいログイン名、各 Ticket がチェックアウトするクローン、コミットの作者名、auto-merge を許可するか（推奨は「しない」）。",
        },
        {
          title: "あなたにしかできない作業をする",
          text: "エージェント用の GitHub アカウントを作り、そのアカウントでリポジトリへの招待を承諾し、CLI にサインインします。エージェントがチャットでシークレットを尋ねることはなく、あなた自身のターミナルで実行する正確なコマンドを示します。",
        },
        {
          title: "適用されるデフォルトを確認する",
          text: "`superagent` という名前の別の DeepSeek Harness プロファイル（ポート 3082）、`agent/` で始まるブランチ名、accept モード `observe`、そしてエージェントが止まっていたら再起動する1時間ごとのチェック。",
        },
        {
          title: "最初の依頼を送る",
          text: "許可されたアカウントから、issue に `@<agent login> <request>` とコメントします。約1分でパネルに Ticket が現れ、エージェントが受領を伝え、専用のディレクトリで作業し、同じスレッドに返信します。多くの場合はプルリクエストです。",
        },
      ],
      source: { label: "出典：GitHub の dsh-superagent リポジトリ", href: repo },
    },
    {
      kind: "text",
      title: "安全面：実行する前に知っておくこと",
      points: [
        "ワーカーは `danger-full-access` で、あなたの OS ユーザーとして動きます。ホームディレクトリを読め、パスを指定すればどんなプログラムでも実行できます。アカウント用のラッパーは認証情報を選ぶだけで、セキュリティ上の境界ではありません。",
        "分離するには、DeepSeek のドキュメントによると、エージェントの認証情報だけを持つ専用の OS アカウントで実行します。",
        "エージェントが書くものはすべてエージェントの GitHub アカウント名義で表示されるため、導入では専用アカウントと、最初は短い許可リストを推奨しています。",
        "メッセージやコメントでは、誰が仕事を頼めるかを変えられません。許可リスト、ルール、accept モードはパネルでしか変更できません。",
        "各ターンのあと、バックグラウンド作業が終わるまでの猶予は最大30分で、それを過ぎるとシェルジョブが停止され、Ticket は待機中になります。",
        "研究用プロトタイプであり、DeepSeek Harness は開発者向けプレビューで、破壊的変更が見込まれます。",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "3つとも、あなたがチャットにいなくても働き続けるエージェントですが、仕事の始め方が違います。Super-Agent はメンションかチームが書いたルールを待ちます。[ChatGPT dots](/blog/chatgpt-dots) は OpenAI のクラウド上にあります。Crewmark は、DeepSeek Harness を含め、すでに使っているコーディングエージェントをスケジュールで起こします。",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["動作場所", "あなたのマシン、DeepSeek Harness 上", "OpenAI のクラウドコンピュータ", "あなたのコンピュータ、DeepSeek Harness、Claude Code、Codex、OpenCode の中"],
        ["仕事の始まり方", "許可された人の @メンション、または `auto` モードのルール", "あなたのメッセージ、スケジュール、自身の調査", "勤務時間中、15〜60分ごとのハートビート"],
        ["作業キュー", "GitHub と Feishu のスレッド由来の Ticket", "会話スレッドと Scheduled", "カンバンボード上の issue"],
        ["対象範囲", "導入1つにつき GitHub リポジトリ1つ", "接続したアプリ", "SEO やエンジニアリングなど、職種ごとに1人の社員"],
        ["料金", "無料、MIT ライセンス。モデルプロバイダの利用料はご自身で負担", "Pro と Business Premium プラン", "登録受付中。すでにお使いのエージェントとプランで動作"],
        ["状況", "研究用プロトタイプ", "順次提供中", "登録受付中"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "DeepSeek Harness、Claude Code、Codex のセッションを自律的に動かそう",
      text: [
        "Super-Agent は、リポジトリごとに専用のプロファイル、アカウント、導入作業が必要です。Crewmark は、DeepSeek Harness を含め、すでに動かしているエージェントとそのまま連携します。そのセッションに職種・目標・勤務時間を与え、ハートビートで起こしてボードから次の issue を取らせます。1つのリポジトリに限らず、あらゆる種類の仕事に使えます。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "ソフトウェアエンジニアや SEO 担当などの職種を選び、目標を数字で書いて、DeepSeek Harness、Claude Code、Codex、OpenCode のいずれかでセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに同じ会話の中で起き、前回の続きから再開します。詳しくは[Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "issue を割り当て、メッセージに返信する",
          text: "ボードに仕事を置くと、社員がそれを拾い、進めながらコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek の dsh-superagent を導入する" },
  mid: {
    title: "すでに DeepSeek Harness、Claude Code、Codex を使っていますか？",
    text: "Crewmark は、そのセッションを自律的に動かします。ハートビート、勤務時間、issue のボードで、契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "DeepSeek Super-Agent のよくある質問",
    items: [
      {
        q: "DeepSeek Super-Agent とは？",
        a: "dsh-superagent は、1つの GitHub リポジトリ向けのオープンソースの自律型コーディングエージェントで、DeepSeek が2026年10月31日に研究用プロトタイプとして MIT ライセンスで公開しました。DeepSeek Harness 上で動き、GitHub（任意で Feishu も）から依頼を受け取り、プルリクエストで返します。",
      },
      {
        q: "DeepSeek Super-Agent は無料？",
        a: "コードは MIT ライセンスで無料です。DeepSeek Harness 上で、あなたが設定したモデルプロバイダを使って動くため、モデルの利用料はご自身で支払います。DeepSeek はホスト版を発表していません。",
      },
      {
        q: "DeepSeek Super-Agent は GitHub のどこにある？",
        a: "github.com/deepseek-ai/dsh-superagent-prototype です。動作基盤のエージェントハーネスである DeepSeek Harness は github.com/deepseek-ai/deepseek-harness にあります。",
      },
      {
        q: "DeepSeek Super-Agent は頼まなくてもバグを直す？",
        a: "許可した場合だけです。許可された人からの直接の依頼は常に有効ですが、頼まれていない作業にはチームが書いたルールが必要で、デフォルトの `observe` モードはやったはずのことを記録するだけです。その記録を確認してから `auto` に切り替えてください。",
      },
      {
        q: "dsh-superagent は Slack や Teams で使える？",
        a: "このプロトタイプでは使えません。入力元として GitHub と Feishu を備えており、ほかの入力元の追加方法は付属の cookbook で説明されています。",
      },
      {
        q: "実行しても安全？",
        a: "ワーカーはあなたの OS ユーザーとしてフルアクセスで動き、ホームディレクトリを読めるため、DeepSeek のドキュメントは、エージェントの認証情報だけを持つ専用の OS アカウント、専用の GitHub アカウント、短い許可リストを推奨しています。",
      },
      {
        q: "Crewmark を DeepSeek Harness と一緒に使えますか？",
        a: "はい。Crewmark は DeepSeek Harness、Claude Code、Codex、OpenCode に接続できます。セッションを AI 社員に変え、勤務時間中はハートビートで起こしてボードから issue を取らせます。使うモデルプロバイダは、すでにお使いのものです。",
      },
    ],
  },
  cta: {
    title: "いま使っているエージェントを、自律的に動かそう。",
    text: "Crewmark は、DeepSeek Harness、Claude Code、Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月3日に GitHub 上の dsh-superagent と DeepSeek Harness のリポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、DeepSeek、OpenAI、Anthropic とは提携しておらず、その承認も受けていません。DeepSeek は DeepSeek の、ChatGPT は OpenAI の、Claude Code は Anthropic の商標です。",
};
