import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# プランモードでセッションを開始する
claude --permission-mode plan

# またはセッション中に、このプロンプトだけプランを立てる
/plan 公開 API にレート制限を追加する`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のプランモード：ショートカット、仕組み、auto モードとの違い | Crewmark",
    description:
      "Claude Code のプランモード（plan mode）の使い方：Shift+Tab のショートカットと /plan、プラン中に Claude ができること、プランの承認、デフォルトにする方法、auto・accept edits・manual モードとの比較。",
  },
  breadcrumb: "Claude Code プランモード",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のプランモード：仕組みと使いどころ",
    lead: "プランモード（plan mode）は、Claude が変更を調べて提案するだけで、実際には手を加えない Claude Code の権限モードです。ファイルを読み、調査のためにコマンドを実行し、プランを書きますが、あなたが承認するまでソースコードは編集しません。`Shift+Tab` でモードを切り替えるか、プロンプトの先頭に `/plan` を付けて入ります。このガイドでは、入り方と抜け方のすべて、プラン中に許可されること、承認時の選択肢、デフォルトにする方法、そして auto・accept edits・manual モードとの違いを説明します。",
    cta: "早期アクセスに登録",
    secondary: "手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "プランモード、auto モード、accept edits、manual の比較",
      text: [
        "プランモードは Claude Code の権限モードの1つです。どのモードも手軽さと監督のバランスが異なります。下の表は、各モードで Claude があなたに確認せずにできることをまとめたものです。",
      ],
      headers: ["モード", "確認なしで実行できること", "向いている用途"],
      rows: [
        ["Manual（`default`）", "読み取りのみ", "すべての操作を確認したいとき、慎重さが要る作業"],
        ["Accept edits（`acceptEdits`）", "読み取り、ファイル編集、`mkdir` や `mv` などのよく使うファイル操作コマンド", "コードを素早く反復し、あとで `git diff` で確認する"],
        ["Plan（`plan`）", "読み取りに加え、auto モードが使える場合は auto モードの分類器が承認した調査用コマンド。承認までは編集しない", "変更する前にコードベースを調べ、方針をすり合わせる"],
        ["Auto（`auto`）", "すべて。バックグラウンドの安全チェック付き", "長いタスク、確認を減らしたいとき"],
        ["Don't ask（`dontAsk`）", "事前に許可したツールのみ。それ以外はすべて拒否", "厳しく制限した CI やスクリプト"],
        ["Bypass（`bypassPermissions`）", "すべて", "隔離されたコンテナや VM のみ"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code でプランモードを使う方法",
      steps: [
        {
          title: "プランモードに入る",
          text: "ターミナルで `Shift+Tab` を押してモードを切り替え、ステータスバーに `⏸ plan mode on` と表示されたら止めます。Manual からだと accept edits、plan の順に切り替わります。1つのプロンプトだけなら先頭に `/plan` を付けます。VS Code ではプロンプト欄の下にあるモード表示をクリックして Plan を選び、デスクトップアプリではモードセレクターを使います。",
          code: enter,
        },
        {
          title: "変更内容を伝えて、Claude に調べさせる",
          text: "作りたいものや直したいことを伝えます。Claude はコードを読み、コマンドを実行して調査してから、プランを書きます。auto モードが使える場合は、あなたに確認する代わりに分類器がこれらのコマンドを審査します。使えない場合は、組み込みの読み取り専用コマンド以外は事前に確認を求めます。",
        },
        {
          title: "プランを確認して手直しする",
          text: "Claude の質問に答える、異論を伝える、または `Ctrl+G` でプランをテキストエディタで開いて自分で書き換えます。プランは `~/.claude/plans/`、または `plansDirectory` 設定で指定したフォルダーにファイルとして保存されます。",
        },
        {
          title: "承認するか、プランを続ける",
          text: "Claude に実装させるなら Yes, and use auto mode（承認して auto モードを使う。auto モードが使えない場合は Yes, auto-accept edits、つまり編集を自動承認）を選びます。編集を1つずつ確認するなら Yes, manually approve edits（編集を手動で承認）、まだ詰めるなら No, keep planning（プランを続ける）です。承認するとプランモードを抜け、セッションにはプランにちなんだ名前が付きます。",
        },
        {
          title: "承認せずに抜ける",
          text: "もう一度 `Shift+Tab` を押すと、プランなしでプランモードを抜けます。次の変更をプランするときは、モードを切り替えて戻るか、プロンプトの先頭に `/plan` を付けます。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "プランモードをデフォルトにする",
      text: [
        "1回のセッションだけなら `claude --permission-mode plan` で起動します。あるプロジェクトのすべてのターミナルセッションで使うなら `.claude/settings.json` で `defaultMode` を `plan` に、手元のすべてのプロジェクトで使うなら `~/.claude/settings.json` に書きます。",
      ],
      steps: [
        {
          title: "設定に追加する",
          text: "VS Code の会話は、開始時のモードをプロジェクト設定から読み込みません。代わりに VS Code のユーザー設定で `claudeCode.initialPermissionMode` を `plan` にしてください。",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "プランモードを使う価値があるとき",
      points: [
        "多くのファイルにまたがる変更や、最初の案が外れがちな変更：マイグレーション、リファクタリング、フロントエンドとバックエンドにまたがる新機能。",
        "まだよく知らないコード：何かを変える前に、Claude に全体像をつかませて方針を説明させます。",
        "ミスの代償が大きいもの：データベーススキーマ、認証、決済、公開 API。",
        "1行で済む修正や、タスクの説明がそのままプランになるようなものには不要です。manual や accept edits モードのほうが速く進みます。",
        "まっさらなコンテキストと組み合わせる：`showClearContextOnPlanAccept` をオンにすると、承認時にプラン中の会話をクリアでき、実装はプランだけを起点に始まります。",
      ],
    },
    {
      kind: "text",
      title: "注意点",
      points: [
        "プランモードが止めるのは編集であって、すべてではありません。auto モードが使える場合、承認されたシェルコマンドはプラン中にも実行されるため、副作用のあるコマンドが動くことはあります。",
        "bypass permissions が使える状態で起動した対話型のターミナルセッションでは、プランモードのブロックは強制されません。Claude は編集しないよう指示されるだけです。",
        "ヘッドレス実行（`claude -p`）、Agent SDK のセッション、VS Code のチャットパネルでは、プランモードのブロックが維持されます。",
        "VS Code で Plan を選んでも、その会話にしか適用されません。新しい会話はいつもの開始モードに戻ります。",
        "deny ルールは、プランモードを含むすべてのモードで有効です。`/plan`、`/permissions` などのコマンドは [Claude Code のスラッシュコマンド](/blog/claude-code-slash-commands)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "プランモードは Claude を慎重にし、Crewmark は Claude を働かせ続けます。",
      text: [
        "プランモードを使えば、大きな変更の主導権をあなたが握れます。それでもセッションは、次の仕事を始めるのをあなたに待っています。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "プランを issue のコメントに",
          text: "社員はリスクのある変更の前に、プランを issue に投稿してあなたの許可を待てます。ターミナルではなく、ボードから承認できます。",
        },
        {
          title: "ハートビートで仕事を始める",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起き、次の issue を取ります。[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "複数の社員で1つのリポジトリ",
          text: "社員ごとに専用の [worktree](/blog/claude-code-worktree) と職種を与えます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code でプランモードを使う" },
  mid: {
    title: "プランは承認しました。次のタスクは誰が拾いますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code のプランモード よくある質問",
    items: [
      {
        q: "Claude Code のプランモードとは？",
        a: "Claude が調査してプランを書くものの、ソースコードは編集しない権限モードです。プランを承認するまで、編集はブロックされたままです。",
      },
      {
        q: "プランモードのショートカットは？",
        a: "ターミナルでは `Shift+Tab` で権限モードを切り替え、ステータスバーに `⏸ plan mode on` と出たら止めます。プロンプトの先頭に `/plan` を付けるか、`claude --permission-mode plan` で起動する方法もあります。",
      },
      {
        q: "プランモードと auto モードの違いは？",
        a: "プランモードは調べて提案するだけで、編集はしません。auto モードは実際に作業し、バックグラウンドの安全チェック付きで編集やコマンド実行を行います。よくある流れは、まずプランを立て、Yes, and use auto mode で承認するやり方です。",
      },
      {
        q: "プランモードと accept edits の違いは？",
        a: "accept edits では Claude が確認なしにファイルを変更し、あなたはあとで確認します。プランモードはプランを承認するまで何も変えません。承認後に、編集を自動で受け入れる設定を選べます。",
      },
      {
        q: "VS Code やデスクトップアプリでプランモードを使うには？",
        a: "VS Code ではプロンプト欄の下にあるモード表示をクリックして Plan を選ぶか、`claudeCode.initialPermissionMode` を `plan` にします。デスクトップアプリではモードセレクターで選びます。",
      },
      {
        q: "Claude Code のプランはどこに保存されますか？",
        a: "`plansDirectory` 設定で別のフォルダーを指定しない限り、`~/.claude/plans/` にファイルとして保存されます。`Ctrl+G` で現在のプランをエディタで編集できます。",
      },
      {
        q: "プランモードを抜けるには？",
        a: "プランを承認すると、選んだモードに切り替わります。承認せずに抜けるなら `Shift+Tab` を押します。",
      },
    ],
  },
  cta: {
    title: "Claude Code にプランを立てさせ、実装させ、次の issue も拾わせましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（permission modes、settings）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
