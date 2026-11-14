import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# このリポジトリ用に Conductor が作った worktree を探す
git worktree list

# 残したいワークスペースごとに、ブランチをコミットしてプッシュする
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor の代替ツール：Meta 合流と終了日程 | Crewmark AI",
    description:
      "Claude Code や Codex のエージェントを並列で動かす Mac アプリ Conductor が Meta に合流します。終了日程、ワークスペースの保存方法、Mac・Windows・Linux で使える Conductor の代替ツールを解説します。",
  },
  breadcrumb: "Conductor の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · AI コーディングエージェント",
    title: "Conductor が Meta に合流：これから起きること、次にエージェントを動かす場所",
    lead: "Claude Code、Codex、Cursor、OpenCode のエージェントを並列のワークスペースで動かす Mac アプリ Conductor が、2026年11月4日に Meta への合流を発表しました。新規登録はすでに締め切られ、Conductor Cloud は11月13日に読み取り専用になり、11月20日に終了します。ローカルアプリのアップデートも2027年初めまでです。このガイドでは、日程、作業を残す方法、同じ役割を果たす代替ツールを紹介します。",
    cta: "今すぐ始める",
    secondary: "ワークスペースを保存する",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Conductor とは何だったのか、何が変わるのか",
      text: [
        "Conductor は、コーディングのタスクごとに専用のワークスペースを用意していました。それぞれが独自のブランチ、ファイル、ターミナル、diff、レビューの流れを持つ git worktree なので、複数のエージェントが1つのリポジトリで同時に作業できました。対応は macOS のみで、Claude Code、Codex、Cursor、OpenCode に対応し、Mac から離れてもワークスペースを動かし続けられる Conductor Cloud も追加されていました。",
        "創業者の Charlie Holtz は、チームが Meta に合流し「次のインターフェース」を作ると発表し、来年初めに新しいものを出すと予告しています。Meta は TechCrunch に買収を認めましたが、条件は明らかにしていません。",
      ],
    },
    {
      kind: "table",
      title: "Conductor 終了までのタイムライン",
      headers: ["日付", "起きること"],
      rows: [
        ["2026年11月4日", "新規登録とダウンロードを停止。無料ユーザーはアップグレードできなくなり、Pro ユーザーは Pro 機能を無料で使い続けられます。有効なサブスクリプションには返金があります。"],
        ["2026年11月13日", "クラウドのワークスペースが読み取り専用に。過去のチャットの閲覧やデータのエクスポートはできますが、メッセージは送れません。"],
        ["2026年11月20日", "Conductor Cloud が終了し、クラウドのユーザーデータの削除が始まります。"],
        ["2027年初めまで", "ローカルの Mac アプリは新しいモデルへの対応と重大なバグ修正を受け続け、その後終了します。終了時にすべてのユーザーデータが削除されます。"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "期限までに作業を残す方法",
      steps: [
        {
          title: "11月13日までにクラウドのワークスペースを Mac に移す",
          text: "Conductor で各クラウドワークスペースを右クリックし、Transfer to local（ローカルへ移動）を選びます。ワークスペースとそのチャットがあなたのコンピュータに移ります。",
        },
        {
          title: "11月20日までにデータをエクスポートする",
          text: "Conductor の Settings → Account → Export data（データのエクスポート）から、メモやプロンプトとして残したいチャットも含め、すべてをダウンロードします。",
        },
        {
          title: "大事なブランチはすべてプッシュする",
          text: "ローカルのワークスペースは普通の git worktree で、通常は `~/conductor/workspaces/<repo>/<workspace>` にあり、リポジトリの履歴を共有しています。ブランチをコミットしてプッシュしておけば、作業はアプリがなくなっても残ります。",
          code: rescue,
        },
        {
          title: "セットアップスクリプトを引き継ぐ",
          text: "Conductor はプロジェクトごとの setup、run、archive スクリプトを `.conductor/settings.toml` または `.conductor/settings.local.toml` に保存しています。コマンドを README や次のツールのセットアップにコピーし、Claude Code の worktree に移る場合は `.env` などのファイルを `.worktreeinclude` に列挙してください。",
        },
        {
          title: "移行先を選び、1つのタスクで試す",
          text: "下の選択肢を比較し、Conductor Pro が使えなくなる前に、新しいツールで実際のタスクを1つ動かしてみましょう。",
        },
      ],
      source: { label: "出典：Conductor の発表", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Conductor の代替ツールを比較",
      headers: ["", "Conductor", "Claude Code 単体", "Codex アプリ", "Crewmark"],
      rows: [
        ["概要", "worktree で並列エージェントを動かす Mac アプリ", "`claude --worktree`、デスクトップアプリの並列セッション、バックグラウンドエージェント", "worktree とクラウドタスクを備えた OpenAI のデスクトップアプリ", "AI 社員：職種・目標・勤務時間・ハートビートを持つエージェントセッション"],
        ["エージェント", "Claude Code、Codex、Cursor、OpenCode", "Claude Code", "Codex", "Claude Code、Codex、DeepSeek Harness、OpenCode"],
        ["プラットフォーム", "macOS", "macOS、Windows、Linux", "デスクトップアプリと Web", "macOS、Windows、Linux"],
        ["分離の仕組み", "ワークスペースごとに git worktree を1つ", "セッションやサブエージェントごとに git worktree を1つ", "worktree", "社員ごとに専用のセッションとチェックアウト"],
        ["次のタスクを始めるのは", "あなた", "あなた（またはスケジュール）", "あなた（またはスケジュール）", "ハートビート：各社員が起きて次の issue を取る"],
        ["タスクボード", "ワークスペースの一覧", "なし", "なし", "あり。issue、コメント、あなたへのメッセージ付き"],
        ["状況", "クラウドは11月20日に終了、ローカルは2027年初めまで", "提供中", "提供中", "提供中"],
      ],
    },
    {
      kind: "text",
      title: "あなたに合う Conductor の代替ツール",
      points: [
        "Conductor を主に Claude Code で使っていた：その中核は今や Claude Code 自身でできます。`claude --worktree <name>` で各セッションに専用の worktree とブランチを与え、`.worktreeinclude` で `.env` をコピーし、デスクトップアプリでは Worktree スイッチで並列セッションを動かせます。[Claude Code の worktree ガイド](/blog/claude-code-worktree)をご覧ください。",
        "主に Codex を使っていた：Codex のデスクトップアプリには worktree とクラウドタスクが組み込まれています。2つのエージェントの比較は[Claude Code と Codex の比較](/blog/claude-code-vs-codex)をご覧ください。",
        "Windows や Linux が必要：Conductor はこれらに一度も対応しませんでした。Claude Code の CLI と Crewmark はどちらも3つすべてで動きます。",
        "複数のエージェントを使い分けていた、またはあなたがいなくても働き続けてほしい：それこそが Crewmark の役割です（下記参照）。複数のエージェントを手動で動かす方法は[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Conductor はエージェントを並べて動かし、Crewmark はエージェントに仕事を与えます。",
      text: [
        "Conductor のおかげで並列エージェントの起動とレビューは簡単になりましたが、どのワークスペースも次のプロンプトを入力するまで待ったままでした。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。契約中のプランのままご利用いただけます。",
      ],
      steps: [
        {
          title: "リポジトリとエージェントを持ち込む",
          text: "各プロジェクトでセットアップコマンドを実行します。Conductor のワークスペースと同じように、複数の社員が1つのリポジトリを共有し、それぞれが専用のチェックアウトで作業できます。",
        },
        {
          title: "それぞれに職種と目標を与える",
          text: "プログラマー、レビュアー、SEO ライターなど、それぞれが数値で書かれた目標と勤務時間を持ちます。[AI 社員とは](/ai-employees)をご覧ください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "15分、30分、60分ごとに社員は同じ会話の中で起き、次の issue を取り、判断が必要なときはメッセージを送ってきます。詳しくは[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conductor の終了前に作業を残す" },
  mid: {
    title: "Conductor から移行するなら、置き換えるだけでなくアップグレードを。",
    text: "Crewmark は Claude Code、Codex、OpenCode を AI 社員として動かします。社員はハートビートで起き、次の issue を自分で取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Conductor 終了に関するよくある質問",
    items: [
      {
        q: "Conductor はサービスを終了するのですか？",
        a: "一部はそうです。Conductor は Meta に合流します。Conductor Cloud は2026年11月13日に読み取り専用になり、11月20日に終了します。ローカルの Mac アプリは2027年初めまで新しいモデルへの対応と重大な修正を受け、その後終了します。",
      },
      {
        q: "Meta は Conductor を買収したのですか？",
        a: "はい。Conductor は2026年11月4日に Meta への合流を発表し、Meta も TechCrunch に買収を認めました。金額や条件は公表されていません。",
      },
      {
        q: "Conductor はまだダウンロードや登録ができますか？",
        a: "いいえ。新規登録とダウンロードは2026年11月4日に停止し、無料ユーザーは Pro にアップグレードできなくなりました。",
      },
      {
        q: "データとサブスクリプションはどうなりますか？",
        a: "クラウドのユーザーデータは11月20日から削除が始まり、アプリの終了時にすべてのユーザーデータが削除されます。Settings → Account → Export data からエクスポートしてください。有効なサブスクリプションには返金があり、Pro ユーザーはそれまで Pro 機能を無料で使えます。",
      },
      {
        q: "Claude Code に最適な Conductor の代替ツールは？",
        a: "分離された並列作業なら、Claude Code 自身の `--worktree` フラグとデスクトップアプリの並列セッションで足ります。セッションに自分で仕事を取らせたいなら、Crewmark の社員として動かしましょう。",
      },
      {
        q: "Windows や Linux で使える Conductor の代替ツールはありますか？",
        a: "Conductor 自体は Mac 専用でした。`--worktree` を使う Claude Code の CLI、素の `git worktree`、Crewmark はいずれも macOS、Windows、Linux で動きます。",
      },
      {
        q: "Conductor のワークスペースは使い続けられますか？",
        a: "ローカルのワークスペースは普通のブランチを持つ素の git worktree なので、アプリがどうなってもコードはリポジトリに残ります。残したいブランチはコミットしてプッシュしてください。",
      },
    ],
  },
  cta: {
    title: "エージェントには新しい居場所が必要です。ついでに仕事も与えましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Conductor の発表、changelog、ドキュメント、TechCrunch の記事と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Conductor、Meta、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。Conductor はその所有者の商標、Claude と Claude Code は Anthropic の商標、Codex は OpenAI の商標です。",
};
