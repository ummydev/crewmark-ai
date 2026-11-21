import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Claude Code が動いている間 Mac をスリープさせない（claude が終了すれば再びスリープできる）
caffeinate -i claude --permission-mode auto

# またはタスクをクラウドセッションに任せる。ノート PC を閉じても動き続ける
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# どのマシンからでも、そのクラウドセッションに次の手順をキューに入れる
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code は 24 時間動かせる？夜通し・無人で動かす方法",
    description:
      "Claude Code を夜通し、または 24 時間働かせる方法：権限モード、/goal、マシンをスリープさせない設定、クラウドセッション、スケジュールタスク、利用上限、止まる原因。",
  },
  breadcrumb: "Claude Code を 24 時間動かす",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code は 24 時間動かせる？夜通し・無人で動かす方法",
    lead: "できます。ただし条件付きです。Claude Code には自分を止める時計はありませんが、止まる原因は 4 つあります。セッションが終わるかコンピューターがスリープする、権限の確認で止まる、プランの利用上限に達する、あるいは作業が終わって次にやることがない。どれにも対処法があります。このガイドでは、寝ている間も Claude Code を働かせる方法と、それぞれにできないこと、そして決まった夜勤を与える方法を説明します。",
    cta: "今すぐ始める",
    secondary: "夜通し動かす",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code を動かし続ける方法",
      text: [
        "1 つの会話を続けるので Claude が自分のしたことを覚えている方法もあれば、同じプロンプトで毎回新しいセッションを始める方法もあります。",
      ],
      headers: ["方法", "コンピューターの電源オフ", "同じ会話", "止まるタイミング", "向いている用途"],
      rows: [
        ["クラウドセッション（`claude --cloud`、claude.ai/code）", "可", "はい", "一定時間操作がないと止まり、VM は回収される", "寝る前に任せる 1 つの長いタスク"],
        ["クラウドのスケジュールタスク（`/schedule`）", "可", "いいえ、実行ごとに新しいセッション", "最短 1 時間ごと。Pro、Max、Ultra、Team、Enterprise", "リポジトリだけで済む定期的な仕事"],
        ["デスクトップのスケジュールタスク", "不可：アプリを開き、コンピューターを起こしておく", "いいえ、実行ごとに新しいセッション", "マシンが起きている間だけ", "ローカルのファイルを扱う夜間の仕事"],
        ["`/loop`", "不可：セッションを開いておく", "はい", "セッションとともに終了。繰り返しのループは 7 日で期限切れ", "数時間、CI やデプロイを見張る"],
        ["cron + `claude -p --resume`", "不可", "はい", "cron の間隔で。仕組みは自分で組む", "1 つのエージェントに TODO ファイルを片付けさせる"],
        ["Crewmark のハートビート", "不可", "はい", "設定した勤務時間。深夜をまたいでも可", "ボードから issue を 1 つずつ取る継続的な仕事"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code を夜通し動かす方法",
      steps: [
        {
          title: "確認のたびに止まらない権限モードを選ぶ",
          text: "午前 2 時に権限の確認で待っているセッションは、朝まで何もしません。Auto モードは確認を求める代わりに、バックグラウンドの安全チェック付きで操作を実行します。すべてのチェックを飛ばす `bypassPermissions` は、隔離されたコンテナや VM のためにとっておきましょう。",
          code: overnight,
        },
        {
          title: "ゴールを決める",
          text: "`/goal` には、テストスイートが通るといった条件を渡します。Claude は各ターンのあとに条件を確認し、満たされるまで自分で次のターンを始めます。もっと長い夜には、TODO ファイルや書面の計画をリポジトリに置き、順に片付けるよう伝えましょう。",
        },
        {
          title: "マシンを起こしておくか、作業をクラウドに移す",
          text: "ローカルのセッションには、コンピューターの電源が入っていて claude のプロセスが動いている必要があります。Mac では `caffeinate -i` で Claude Code が動いている間スリープを防げます。サーバーでは、ターミナルを閉じても生き残るよう tmux か screen の中で claude を動かします。クラウドセッションは、ノート PC を閉じても動き続けます。",
        },
        {
          title: "利用上限を見込んでおく",
          text: "Claude のプランには 5 時間ごとに更新される枠と週の上限があり、チャットと共有されます。Max は Pro の 5 倍、Ultra は週あたり Pro の 10 倍使え、認証済みアカウントなら 5 時間の上限もありません。タスクの途中で上限に達した場合、Claude Code は現在の手順を終えることがあります（Pro では週 1 回、Max では毎回）。利用クレジットか API キーがあれば作業を続けられます。[Claude Code のトークン使用量を減らす方法](/blog/reduce-claude-code-token-usage)をご覧ください。",
        },
        {
          title: "スマートフォンから様子を見る",
          text: "Remote Control を使うと、Claude アプリやブラウザーからローカルのセッションを確認でき、クラウドセッションはアプリの Code タブに表示されます。夜の間に Claude が質問していたら、起きてから答えれば作業を続けます。[Claude Code の Remote Control](/remote-claude-code) をご覧ください。",
        },
      ],
      source: { label: "出典：Claude Code のドキュメント「クラウドセッション」", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Claude Code が夜の間に止まる原因",
      points: [
        "ターミナルが閉じる、またはコンピューターがスリープする。Remote Control のセッションはマシンが起きれば再接続しますが、スリープ中は何も進みません。",
        "誰も答えない権限の確認。Auto モードならほとんど避けられます。",
        "利用上限。クレジットか API キーを追加しない限り、セッションは枠がリセットされるまで待ちます。",
        "クラウドでの無操作。クラウドセッションは、MCP ツールの呼び出しの承認を待っている間も含め、操作がないまましばらくたつと止まります。開き直せば会話は戻りますが、実行中だったシェルコマンド、サブエージェント、`/loop` は戻りません。",
        "仕事がなくなること。ゴールを達成するか TODO リストが空になれば止まり、それは望ましい動作です。",
        "非常に長いセッション。Claude Code はコンテキストを自動で圧縮するので、初期の詳細は要約としてしか残りません。計画はチャットだけでなくファイルに残しましょう。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code に夜勤を与える",
      text: [
        "一晩中動かすのを始めるのは簡単ですが、続けるのは大変です。誰かが毎朝次のタスクをキューに入れなければなりません。Crewmark は Claude Code の会話を、勤務時間とハートビートを持つ AI 社員に変えるので、ボードから自分で仕事を取り続けます。",
      ],
      steps: [
        {
          title: "勤務時間を設定する",
          text: "勤務時間は深夜をまたいでも設定できるので、22:00〜07:00 のような夜勤も、平日だけでも毎日でも組めます。勤務時間外の社員は眠っていて、あなたのプランを使いません。",
        },
        {
          title: "ハートビートを選ぶ",
          text: "勤務時間中、crewmark CLI が 15、30、60、120、240 分ごとに同じ会話を起こし、次の issue を取らせます。会話が閉じられていた場合は、Crewmark が auto モードの `claude -p --resume` で再開します。コンピューターの電源は入れたままにしておく必要があります。",
        },
        {
          title: "朝にボードを確認する",
          text: "各 issue にはコメントと活動ログが残り、あなたが必要なことは、社員が返事を待つメッセージとして届きます。[Claude Code を自律的に動かす方法](/proactive-claude-code)と [AI 社員とは](/ai-employees)をご覧ください。Codex なら [Codex の長時間タスク](/blog/codex-long-running-tasks)をお読みください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code を夜通し動かす" },
  mid: {
    title: "毎晩、Claude Code に夜勤をしてほしいなら",
    text: "Crewmark は設定した勤務時間中にハートビートであなたの Claude Code を起こし、ボードから次の issue を渡します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code を 24 時間動かすことに関するよくある質問",
    items: [
      {
        q: "Claude Code は 24 時間動かせますか？",
        a: "はい。何かが動かし続けてくれれば可能です。コンピューターの電源を切ったままならクラウドセッションかクラウドのスケジュールタスク、ローカルならスリープしないマシンで、確認のたびに止まらない権限モードを使います。利用上限はかかるので、24 時間の作業には余裕のあるプランかクレジットが必要です。",
      },
      {
        q: "Claude Code を夜通し動かしたままにできますか？",
        a: "はい。明確なゴールか TODO ファイルを用意して auto モードで始め、マシンを起こしておき（または `claude --cloud` を使い）、朝に結果を確認します。あなたが必要なことは、質問として待っています。",
      },
      {
        q: "ノート PC を閉じても Claude Code は動き続けますか？",
        a: "ローカルのセッションは止まります。コンピューターの電源が入っていて claude のプロセスが動いている必要があり、Remote Control のセッションはターミナルを閉じると終わります。クラウドセッションは動き続け、Claude アプリから様子を確認できます。",
      },
      {
        q: "Claude Code に無人モードはありますか？",
        a: "その名前の機能はありません。無人での実行は、確認を求めない権限モード（auto モード、または隔離されたコンテナでの `bypassPermissions`）と、ヘッドレスモードの `claude -p` やクラウドセッションを組み合わせて行います。",
      },
      {
        q: "Claude Code を一晩中動かすと利用上限に達しますか？",
        a: "達することがあります。Claude のすべてのプランは、チャットと Claude Code で 5 時間の枠と週の上限を共有します。Ultra は認証済みアカウントなら 5 時間の上限がありません。1 回の長い集中作業ではなく、ハートビートやスケジュールで複数の枠に作業を分散させましょう。",
      },
      {
        q: "Claude Code を無人で動かしても安全ですか？",
        a: "自分のマシンでは `bypassPermissions` ではなく auto モードを使い、すべての変更がレビューを通るリポジトリで作業し、本番の認証情報には手の届かないようにしておきましょう。クラウドセッションは、デフォルトでネットワークアクセスが制限された隔離 VM で動きます。",
      },
    ],
  },
  cta: {
    title: "Claude Code に夜勤を。",
    text: "Crewmark は Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月8日に Claude Code のドキュメント（クラウドセッション、スケジュールタスク、Remote Control）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
