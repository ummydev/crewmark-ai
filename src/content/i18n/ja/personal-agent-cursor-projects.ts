import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects とは：機能、料金、Grok Bot との違い",
    description:
      "Cursor Projects を解説。大きなコーディング作業を計画しクラウドエージェントに任せるコーディネーターの、プラン、設定、ローカルテスト、レビュー、Grok Bot との違い。",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Cursor",
    title: "Cursor Projects：コーディネーターエージェントが大きな仕事を計画し、任せる仕組み",
    lead: "Cursor Projects は、機能、移行、アプリ全体といった大きなまとまりの仕事のための Cursor の機能です。あなたが話しかけるのはコーディネーターエージェントで、コーディネーター自身はコードを書きません。仕事を計画し、Cursor の Cloud Agents 上で並列に動くエージェントに任せ、完成した仕事をあなたの確認のために持ち帰ります。各 Project には、その中のすべてのエージェントが読む共有ファイルがあり、指示がなくても定期的な仕事をこなせます。このガイドでは、仕組み、対象プラン、セットアップ方法、動く場所、Grok Bot や Claude Code との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cursor Projects とは",
      points: [
        "コーディネーターとワーカー：あなたは 1 つのコーディネーターエージェントと話し、コーディネーターがワーカーエージェントを作り、仕事ごとに名前を付けて管理します。コーディネーター自身はコードを書かず、仕事を計画してワーカーに任せ、ワーカーは並列に動きます。",
        "クラウドで動く：各 Project は Cursor の Cloud Agents 上に専用のクラウドコンピューターを持つので、ノートパソコンを閉じても止まりません。",
        "共有ファイル：Project には、その中のすべてのエージェントが読む好み、メモ、ワークフローが保存されます。共有の `notes.md` で、進行中、待機中、完了の仕事を追跡します。",
        "タスクリストとボード：各 Project に 1 つずつあり、Multiplayer Projects ではメンバー全員が共有します。",
        "定期的な仕事：Slack チャンネルを見張る、スケジュールで動く、あなたのプルリクエストを追う、とコーディネーターに伝えると、指示がなくてもそうしたシグナルに応じて動きます。",
        "1 回のチャットでは終わらない仕事向け：複数のプルリクエストにまたがる機能、移行、あなたの留守中にこなす仕事などです。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Cursor Projects の料金：対象プラン",
      text: [
        "Projects は Cloud Agents 上で動くので、Cloud Agents がある Cursor のすべてのプランで使えます。価格は 2026年11月13日時点の Cursor の料金ヘルプページによります。Cursor の有料プランには、Cursor のモデル（Grok と Composer）の利用枠が含まれます。",
      ],
      headers: ["プラン", "料金", "Cursor Projects"],
      rows: [
        ["Free", "-", "含まれない"],
        ["Plus", "$8/月", "含まれない"],
        ["Premium", "$30/月、または $300/年", "含まれる"],
        ["Super", "$100/月", "含まれる"],
        ["Ultra", "$200/月", "含まれる"],
        ["Teams", "シートあたり $30、$100、$200/月", "含まれる。Multiplayer Projects にはチームアカウントと Cursor 3.26.13 以降が必要"],
        ["Enterprise", "-", "含まれる。Cursor 3.21.9 以降が必要"],
        ["従来のプラン", "-", "従来の有料プランに含まれる。従来の Hobby には含まれない"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cursor Projects のセットアップ方法",
      steps: [
        {
          title: "プランとプライバシー設定を確認する",
          text: "Cloud Agents があるプランが必要です。Premium 以上、Teams、Enterprise（Cursor 3.21.9 以降）、または従来の有料プランです。Privacy Mode（Legacy）では Projects を使えません。",
        },
        { title: "Agents Window を開く", text: "Projects は Cursor の Agents Window にあり、クラウドで動きます。" },
        {
          title: "大きな仕事を伝える",
          text: "機能、移行、アプリ全体など、あなたの GitHub リポジトリで何を作るかをコーディネーターに伝えます。コーディネーターのモデルは自分で選びます。",
        },
        {
          title: "共有ファイルを追加する",
          text: "Project の好み、メモ、ワークフローを書いておきます。その中のすべてのエージェントがそれを読み、`notes.md` が進行中、待機中、完了の仕事を記録します。",
        },
        {
          title: "仕事を確認し、定期的にする",
          text: "コーディネーターは完成した仕事をあなたの確認のために持ち帰ります。Slack チャンネルを見張る、スケジュールで動く、プルリクエストを追う、と頼めば、指示がなくても動き続けます。",
        },
      ],
      source: { label: "出典：Cursor ドキュメント「Projects」", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cursor Projects で主導権を保つ仕組み",
      points: [
        "レビュー：コーディネーターは完成した仕事をあなたの確認のために持ち帰ります。",
        "可視性：タスクリストとボード、そして共有の `notes.md` で、進行中、待機中、完了の仕事がわかります。",
        "分離：各 Project は専用のクラウドコンピューターで動きます。あなたのマシンでテストが必要なときは、コーディネーターがローカルのエージェントを起動します。",
        "チーム：Multiplayer Projects（チームアカウント、Cursor 3.26.13 以降）では、メンバーごとにコーディネーターがあり、コーディネーター同士が直接メッセージを送り合い、メンバー全員がボードを共有します。",
        "プライバシー：Privacy Mode（Legacy）では Projects を使えません。",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Cursor Projects はローカルで動かせますか？",
      text: [
        "いいえ、全体をローカルで動かすことはできません。Cursor のドキュメントによると、Project はクラウド上の専用コンピューターで動くので、ノートパソコンを閉じても止まらず、クラウドならノートパソコンより多くのエージェントを並列に動かせます。あなたのマシンでテストが必要なときは、コーディネーターがローカルのエージェントを起動してそこで実行します。",
        "Cursor の Self-Hosted Machines を使うと、ツールの実行を自分で管理するマシンに移せます。1 人のノートパソコン、devbox、VM 向けの My Machines と、Enterprise プランの Team Pools があります。その場合、ファイルの編集、ターミナルのコマンド、その他のツール呼び出しはそのマシンで実行されますが、エージェントのループ、推論、計画は Cursor のクラウドに残り、ワーカーはエージェントが必要とする内容を Cursor に送ります。（Cursor のドキュメント、2026年11月13日に確認。）",
        "エージェントのチーム全体を自分のコンピューターで動かしたいなら、次のものがそのように動きます。",
      ],
      points: [
        "[Claude Code agent teams](/blog/claude-code-agent-teams)：Claude Code の実験的な機能で、デフォルトではオフです。リードのセッションがチームメイトを起動し、チームメイトはタスクリストを共有して互いにメッセージを送り合います。すべてあなた自身の Claude Code のセッションの中で動きます。",
        "[Claude Squad](/compare/claude-squad-vs-conductor)：複数のコーディングエージェントを同時に動かす、オープンソース（AGPL-3.0）のターミナルアプリです。各エージェントは専用の tmux セッションと git worktree で動きます。",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)：コーディングエージェントのための、オープンソース（Apache-2.0）のカンバンボードで、ブラウザ上やデスクトップアプリとしてローカルで動きます。運営会社が2026年4月に閉鎖してからは、コミュニティが保守しています。",
        "[Crewmark](/ai-employees)：オープンソース（GPL-3.0）。各 AI 社員は、あなた自身のコンピューター上の Claude Code または Codex の会話で、職種と目標を持ち、ハートビートで起動して共有ボードから次の issue を取ります。仕事はコードに限りません。[SEO スペシャリスト](/ai-employees/seo-specialist)などの職種も同じように動き、Web アプリはセルフホストもできます。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects と Grok Bot、Claude Code の比較",
      text: [
        "2026年11月13日に確認した各ベンダー自身のドキュメントと料金ページの情報です。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。[Grok Bot のガイド](/personal-agent/grok-bot)と [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code) もご覧ください。",
        "並べて比較：[Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot)。ガイド：[Grok Bot](/personal-agent/grok-bot)。",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["提供元", "Cursor", "xAI", "Anthropic"],
        ["用途", "大きなコーディング作業：機能、移行、アプリ全体", "あなたのアプリ、Slack、Teams で働く AI チームメイト", "コーディング：コードベースを読み、ファイルを編集し、コマンドを実行"],
        ["複数のエージェント", "コーディネーターが計画し、並列のワーカーエージェントに任せる", "Bot 同士がメッセージを送り合い、グループチャットで連携", "セッション内のサブエージェント。実験的な agent teams"],
        ["動く場所", "Cursor の Cloud Agents。Project ごとに 1 台のクラウドコンピューター。テスト用のローカルエージェント", "クラウド：Bot ごとに専用のコンピューター", "自分のマシン上のターミナル、IDE、デスクトップアプリ。Web ではクラウドセッション"],
        ["タスクボード", "タスクリストとボード、共有の `notes.md`", "記載なし。仕事はチャット、Slack のスレッド、ミーティングで引き継ぐ", "issue ボードはなし。agent teams はタスクリストを共有"],
        ["定期的な仕事", "Slack チャンネルを見張る、スケジュールで動く、プルリクエストを追う", "スケジュールで動くルーティン", "クラウドとデスクトップのスケジュールタスク、`/loop`"],
        ["料金", "Cursor Premium $30/月から", "Premium $30、Super $100、Ultra $200（月額）", "Claude の有料プラン、Pro は $20/月から"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "1 つの大仕事には Projects を。常設の役割には Crewmark を。",
      text: [
        "Cursor Projects は、大きなまとまりの仕事でエージェントを取りまとめます。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。それぞれが共有ボードから issue を取るので、リポジトリでのエンジニアリング、SEO、マーケティングの仕事が片付き続けます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めましょう。" },
        { title: "仕事をボードに載せる", text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は、[Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cursor Projects をセットアップする" },
  mid: {
    title: "常設の仕事を持つエージェントがほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Cursor Projects のよくある質問",
    items: [
      {
        q: "Cursor Projects とは何ですか？",
        a: "機能、移行、アプリ全体といった大きなまとまりの仕事のための Cursor の機能です。コーディネーターエージェントが仕事を計画し、Cursor の Cloud Agents 上で並列に動くエージェントに任せ、完成した仕事をあなたの確認のために持ち帰ります。",
      },
      {
        q: "Projects を含む Cursor のプランは？",
        a: "Cloud Agents があるすべてのプランです。Premium（月 $30、または年 $300）以上、Super（$100）、Ultra（$200）、Teams（シートあたり月 $30、$100、$200）、Enterprise、従来の有料プランです。Free、Plus（月 $8）、従来の Hobby には含まれません。",
      },
      {
        q: "Cursor Projects はローカルで動きますか？",
        a: "いいえ。Cursor の Cloud Agents 上で、Project ごとに専用のクラウドコンピューターで動くので、ノートパソコンを閉じても止まりません。あなたのマシンでテストが必要なときは、コーディネーターがローカルのエージェントを起動します。Privacy Mode（Legacy）では Projects を使えません。",
      },
      {
        q: "Cursor Projects がしたことはどう確認しますか？",
        a: "コーディネーターが完成した仕事をあなたの確認のために持ち帰ります。Project のタスクリストとボード、そして共有の `notes.md` で、進行中、待機中、完了の仕事がわかります。",
      },
      {
        q: "チームで 1 つの Cursor Project を共有できますか？",
        a: "はい。チームアカウントと Cursor 3.26.13 以降で使える Multiplayer Projects で共有できます。メンバーごとにコーディネーターがあり、コーディネーター同士が直接メッセージを送り合い、メンバー全員がタスクリストとボードを共有します。",
      },
      {
        q: "Cursor Projects と Grok Bot の違いは？",
        a: "Cursor Projects は Cursor の中のコーディング用ワークスペースで、コーディネーターが大きな仕事を Cloud Agents 上のワーカーエージェントに任せます。Grok Bot は xAI のホスティング型 AI チームメイトで、Bot がそれぞれ専用のクラウドコンピューターを持ち、あなたのアプリにサインインし、Slack や Microsoft Teams で働きます。[Grok Bot のガイド](/personal-agent/grok-bot)をご覧ください。",
      },
    ],
  },
  cta: {
    title: "大きな仕事は Projects で取りまとめを。エージェントには常設の役割も。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月13日に、Cursor の Projects ドキュメント、ヘルプセンター、料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Cursor、xAI、Anthropic とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
