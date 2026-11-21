import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# 対話型：結果を計画してから、Codex が自分で確認できるゴールを渡す
/plan
/goal all tests in test/auth pass and the lint step is clean

# ヘッドレス、スクリプトや cron から：ワークスペースのファイル編集を許可する
codex exec --sandbox workspace-write "Work through TODO.md in order"

# 翌朝、または次の cron 実行時：同じセッションを続ける
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の長時間タスク：Codex を夜通し動かす",
    description:
      "OpenAI Codex を何時間も、あるいは夜通し働かせる方法：/goal と /plan、クラウドタスク、codex exec resume、Mac をスリープさせない設定、スマートフォンからの確認、利用上限、止まる原因。",
  },
  breadcrumb: "Codex の長時間タスク",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex の長時間タスク：Codex を夜通し、またはバックグラウンドで動かす方法",
    lead: "Codex は 1 つのタスクに何時間も取り組めますし、あなたが寝ている間も作業を続けられます。そのためには 4 つの条件が必要です。自分で確認できるゴール、スリープしないコンピューター（またはクラウドのタスク）、あなたを待たない承認設定、そしてプランに十分な余裕です。このガイドでは、Goal モードからクラウドタスク、`codex exec resume` まで、Codex の長時間タスクを動かす方法と、それぞれにできないこと、そして Codex に決まった夜勤を与える方法を説明します。",
    cta: "今すぐ始める",
    secondary: "夜通し動かす",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Codex を動かし続ける方法",
      text: [
        "1 つのチャットを続けるのでコンテキストが保たれる方法もあれば、毎回新しく始める方法もあります。",
      ],
      headers: ["方法", "コンピューターのスリープ", "同じチャット", "止まるタイミング", "向いている用途"],
      rows: [
        ["Goal モード（`/goal`）", "ローカルの作業では不可", "はい", "ゴールを達成したとき、または判断が必要なとき", "終わりがはっきりした 1 つのタスク"],
        ["Codex Cloud のタスク", "可", "はい", "タスクが終わったとき。あなたがレビューしてプルリクエストを開く", "寝る前にタスクを任せる"],
        ["チャット内のスケジュールタスク", "ローカルのファイルでは不可：コンピューターの電源を入れ、アプリを起動しておく", "はい", "スケジュールどおりに実行：数分ごと、毎日、毎週", "同じ作業を一定間隔で確認する"],
        ["cron からの `codex exec`", "不可", "はい（`codex exec resume` を使用）", "cron の間隔で。仕組みは自分で組む", "スクリプトと CI"],
        ["Crewmark のハートビート", "不可", "はい", "設定した勤務時間。深夜をまたいでも可", "ボードから issue を 1 つずつ取る継続的な仕事"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Codex を夜通し動かす方法",
      steps: [
        {
          title: "確認できるゴールを与える",
          text: "デスクトップアプリ、CLI、IDE 拡張で `/goal` を使うと Goal モードが始まります。ゴールの文章は最初のプロンプトであり、完了の条件でもあります。完了の姿がはっきりしないなら、`/plan` があなたに質問し、結果を測定可能な基準を持つゴールに変えてくれます。テストスイートが通るといった確認を含めましょう。",
          code: commands,
        },
        {
          title: "コンピューターをスリープさせないか、クラウドに送る",
          text: "Mac でのローカルの作業なら、デスクトップアプリで「Prevent sleep while running」をオンにします。Codex Cloud のタスクは専用のワークスペースで動き、コンピューターがスリープしていても作業を続けます。Work in > Cloud と環境を選んで始めます。",
        },
        {
          title: "午前 2 時に止まらないよう承認を設定する",
          text: "ゴールは同じサンドボックスと承認ポリシーを使い続け、判断が必要になると一時停止します。`--sandbox workspace-write` でワークスペースの編集を許可するか、「Approve for me」を使って、定型的なリクエストはレビュアーに任せます。`--full-auto` はもうサポートされておらず、`danger-full-access` は隔離されたランナーかコンテナの中だけで使うものです。",
        },
        {
          title: "利用上限を見込んでおく",
          text: "Codex は ChatGPT プランの利用枠を共有します。5 時間ごとに更新される枠と週ごとの上限があり、クラウドタスクも同じ枠を使います。ChatGPT Pro には現在 5 時間の上限はありませんが、週の上限がかかる場合があります。クレジットか API キーがあれば、ローカルの作業を続けられます。数字は [Claude Code と Codex の比較](/blog/claude-code-vs-codex)をご覧ください。",
        },
        {
          title: "スマートフォンから様子を見る",
          text: "ChatGPT アプリでは、クラウドタスクと、Settings > Connections で接続した Mac や Windows PC について、タスクを追い、コマンドを承認し、差分を確認できます。接続したコンピューターはスリープせずオンラインのままにしておく必要があります。[Codex のリモートコントロール](/blog/codex-remote-control)をご覧ください。",
        },
      ],
      source: { label: "出典：OpenAI の Codex ドキュメント「Long-running work」", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Codex の長時間タスクが止まる原因",
      points: [
        "あなたにしかできない判断。Goal モードは自分のアクセス権を広げる代わりに一時停止するので、出かける前に承認設定を確認しましょう。",
        "ローカルの作業でのスリープや接続切れ。OpenAI は、接続が切れそうなときは事前にゴールを一時停止し、あとで再開することを勧めています。",
        "利用上限。枠がリセットされるか、クレジットを追加するまで止まります。",
        "2 つのチャットが同じファイルを編集すること。並行するチャットにはそれぞれ専用の git worktree を与えましょう。",
        "仕事がなくなること。ゴールを達成すれば止まり、それは望ましい動作です。タスクのリストがあるなら、ファイルにまとめて順に片付けさせましょう。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Codex に夜勤を与える",
      text: [
        "長時間のタスクはいつか終わりますが、仕事は終わりません。Crewmark は Codex の会話を、勤務時間とハートビートを持つ AI 社員に変えるので、あなたがキューに入れなくても、ボードから次の issue を取り続けます。",
      ],
      steps: [
        {
          title: "勤務時間を設定する",
          text: "勤務時間は深夜をまたいでも設定できるので、22:00〜07:00 のような夜勤も、平日だけでも毎日でも組めます。勤務時間外の社員は眠っていて、あなたのプランを使いません。",
        },
        {
          title: "ハートビートを選ぶ",
          text: "勤務時間中、15、30、60、120、240 分ごとに、crewmark CLI が `codex queue --resume` で同じ Codex の会話にメッセージを入れて起動し、社員が次の issue に取りかかります。コンピューターの電源は入れたままにしておく必要があります。",
        },
        {
          title: "朝にボードを確認する",
          text: "各 issue にはコメントと活動ログが残り、あなたが必要なことは、社員が返事を待つメッセージとして届きます。[Codex を自律的に動かす方法](/proactive-codex)と [AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex を夜通し動かす" },
  mid: {
    title: "毎晩、Codex に夜勤をしてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートであなたの Codex を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Codex の長時間タスクに関するよくある質問",
    items: [
      {
        q: "Codex を夜通し動かせますか？",
        a: "はい。`/goal` でゴールを与え、「Prevent sleep while running」で Mac をスリープさせず（またはコンピューターがスリープしても動き続ける Codex Cloud のタスクを使い）、あなたを待たないよう承認を設定して、朝に結果を確認します。",
      },
      {
        q: "Codex をバックグラウンドで動かすには？",
        a: "スクリプト、cron、CI から対話型のインターフェースなしで `codex exec` を実行し、あとで `codex exec resume --last` で同じセッションを続けます。または Web やデスクトップアプリから Codex Cloud のタスクを始めて、ウィンドウを閉じます。",
      },
      {
        q: "Codex の Goal モードとは？",
        a: "`/goal` で始める Goal モードは、あなたが書いたゴールに向けて Codex を働かせ続けます。ゴールの文章は最初のプロンプトであり、完了の条件でもあります。デスクトップアプリの進捗の行から、一時停止、再開、編集、クリアができます。",
      },
      {
        q: "コンピューターがスリープしていても Codex は作業を続けますか？",
        a: "クラウドタスクなら続けます。ローカルの作業にはコンピューターが起きている必要があり、Mac ではデスクトップアプリの「Prevent sleep while running」設定で対応できます。スマートフォンから操作する接続済みのコンピューターも、スリープせずオンラインのままにしておく必要があります。",
      },
      {
        q: "Codex を長時間動かすと利用上限に達しますか？",
        a: "達することがあります。Codex は ChatGPT プランの 5 時間の枠と週の上限を使い、クラウドタスクも同じ枠を使います。1 回の長い集中作業ではなく、スケジュールやハートビートで複数の枠に作業を分散させましょう。",
      },
      {
        q: "Codex を無人で動かしても安全ですか？",
        a: "自分のマシンでは `--sandbox workspace-write` か「Approve for me」のままにし、`danger-full-access` は隔離されたランナーかコンテナの中だけで使い、変更がレビューを通るリポジトリで作業しましょう。",
      },
    ],
  },
  cta: {
    title: "Codex に夜勤を。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月8日に OpenAI の Codex のドキュメント（Long-running work、Codex Cloud、非対話モード、モバイル、スケジュールタスク）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI とは提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。",
};
