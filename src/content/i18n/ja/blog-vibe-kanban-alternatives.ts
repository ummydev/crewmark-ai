import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Vibe Kanban 終了後の代替ツール（2026年比較） | Crewmark AI",
    description:
      "Vibe Kanban の運営会社が解散し、クラウドのボードも終了しました。今も使える機能、issue を残す方法、そして Claude Code や Codex をボードから動かす代替ツール（Paradev、Nimbalyst、Claude Squad、Kanban Code、Crewmark）を解説します。",
  },
  breadcrumb: "Vibe Kanban の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · AI コーディングエージェント",
    title: "Vibe Kanban の代替ツール：これからボードでエージェントを動かす場所",
    lead: "Vibe Kanban では、コーディングエージェントの作業をカンバンの issue として計画し、issue ごとにワークスペースを立ち上げ、diff をレビューしてプルリクエストを作れました。Claude Code、Codex をはじめ10種類のエージェントに対応していました。2026年4月10日、開発元の bloop が会社の解散を発表しました。オープンソースのアプリは今もローカルで動きますが、ホスティングされていた issue、コメント、プロジェクト、組織はなくなり、最後のリリースは2026年4月24日です。このガイドでは、今も使える機能、作業を残す方法、代替ツールを紹介します。",
    cta: "今すぐ始める",
    secondary: "代替ツールを比較する",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Vibe Kanban に何が起きたのか",
      text: [
        "bloop によると、ユーザーの大半は無料プランで、続けたいと思えるビジネスモデルが見つからなかったとのことです。発表後30日間はリモートサービスが維持され、その後 Vibe Kanban は完全なローカル構成に移行しました。プロジェクトページは現在データのエクスポートにつながっています。直近30日間に支払われた請求は返金されました。",
      ],
      points: [
        "今も使えるもの：`npx vibe-kanban` でローカルアプリが起動し、ローカルのワークスペースも動き続けます。コードは Apache 2.0 のオープンソースのまま、コミュニティが保守しています。",
        "なくなったもの：チームで共有していたホスティング版のカンバン issue、コメント、プロジェクト、組織。",
        "停滞しつつあるもの：2026年4月24日の v0.1.44 以降リリースがなく、新しいエージェントのバージョンには追従していません。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "作業を残す方法",
      steps: [
        {
          title: "データをエクスポートする",
          text: "最新版のアプリを開き、データのエクスポート機能を使います。プロジェクトページからも直接たどれます。",
        },
        {
          title: "大事なブランチはすべてプッシュする",
          text: "各ワークスペースは、専用のブランチを持つ git worktree でした。残したいものはコミットしてプッシュし、コードをアプリではなく自分のリポジトリに置いておきましょう。",
          code: keep,
        },
        {
          title: "未完了の issue を共有の場所に移す",
          text: "チームでホスティング版のボードを使っていたなら、内容を忘れてしまう前に、GitHub Issues か移行先ツールのボードに未完了の issue を作り直しましょう。",
        },
        {
          title: "移行先で実際のタスクを1つ試す",
          text: "下の選択肢を比較し、すべてを移す前に、1つの issue を最初からプルリクエストまで通してみましょう。",
        },
      ],
      source: { label: "出典：Vibe Kanban の終了告知", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Vibe Kanban の代替ツール比較",
      text: ["2026年11月7日時点の各プロジェクトの公式サイトまたは GitHub リポジトリの情報です。"],
      headers: ["", "概要", "エージェント", "プラットフォーム", "ボード", "ライセンス"],
      rows: [
        ["Vibe Kanban（コミュニティ版）", "ローカルアプリ：カンバン issue、issue ごとのワークスペース、diff レビュー、PR", "Claude Code、Codex、Gemini CLI、Copilot、Amp、Cursor、OpenCode など", "`npx` で実行。リモートは Docker で", "あり（現在はローカルのみ）", "Apache 2.0"],
        ["Paradev（旧 Superset）", "多数のエージェントを並列で動かすデスクトップのワークスペース。エージェントごとに worktree。自動化とクラウドサンドボックスあり", "Claude、Codex、Cursor Agent、OpenCode、任意の CLI エージェント", "macOS。Linux は実験的。Windows は未対応", "ボードの記載なし", "MIT"],
        ["Nimbalyst", "エージェント、タスク、ドキュメント、wiki、図、コードをまとめたビジュアルワークスペース", "Claude Code、Codex", "macOS、Windows、Linux", "タスクをドキュメントやコードと並べて管理", "オープンソース。個人は無料"],
        ["Claude Squad", "ターミナルアプリ：エージェントごとに tmux セッションと git worktree", "Claude Code、Codex、Gemini、Aider", "tmux と gh が必要", "なし（TUI のリスト）", "AGPL-3.0"],
        ["Kanban Code", "Claude Code セッション用のカンバンボード。カードごとに worktree", "Claude Code", "macOS 26 アプリ、Windows（Tauri）", "Backlog、In Progress、Waiting、In Review、Done", "Apache 2.0"],
        ["Crewmark", "AI 社員：職種・目標・勤務時間を持つエージェントのセッションが、ハートビートで次の issue を取る", "Claude Code、Codex、DeepSeek Harness、OpenCode", "Web のボード。デーモンは macOS、Windows、Linux", "あり（ホスティング、チームで共有）", "商用"],
      ],
    },
    {
      kind: "text",
      title: "あなたに合う Vibe Kanban の代替ツール",
      points: [
        "同じアプリをそのまま使いたい：コミュニティ版をローカルで使い続け、保守されるフォークが出てこないかリポジトリを見守りましょう。",
        "主に並列エージェントと diff レビューに使っていた：保守が続いているデスクトップアプリでは Paradev が最も近く、Mac と Linux で動きます。Claude Code 自身の `--worktree` フラグでも分離された並列セッションを実現できます。[Claude Code の worktree ガイド](/blog/claude-code-worktree)をご覧ください。",
        "ターミナル中心で作業している：Claude Squad は各エージェントに tmux セッションと worktree を割り当てます。",
        "ボードそのものが欲しく、Claude Code だけ使う：Kanban Code は、セッションの開始、待機、PR 作成に合わせてカードを列から列へ動かします。",
        "チームでホスティング版のボードを使っていた、またはあなたが指示しなくてもエージェントに issue を取ってほしい：それが Crewmark です（下記参照）。Conductor も選択肢でしたが、[Meta に合流して終了に向かっています](/blog/conductor-alternatives)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Vibe Kanban はカードごとにあなたの開始を待ちました。Crewmark は待ちません。",
      text: [
        "Vibe Kanban では、issue を書いてからエージェントを起動していました。Crewmark はボードをホスティング版としてチームで共有できる形で残し、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを AI 社員に変えます。社員は勤務時間中にハートビートで起き、次の issue を自分で取ります。契約中のプランのままご利用いただけます。",
      ],
      steps: [
        {
          title: "リポジトリとエージェントを持ち込む",
          text: "プロジェクトでセットアップコマンドを実行します。Vibe Kanban のワークスペースと同じように、各社員は専用のセッションとチェックアウトで作業します。",
        },
        {
          title: "ボードを作り直す",
          text: "未完了の issue を追加して社員に割り当てるか、割り当てずに手の空いた社員に任せます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "15分、30分、60分ごとに社員は次の issue を取り、進捗をコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Vibe Kanban の終了後に作業を残す" },
  mid: {
    title: "ホスティング版のボードを失ったなら、ボードはそのままに社員を加えましょう。",
    text: "Crewmark はチームに共有ボードを用意し、Claude Code や Codex の社員がハートビートで次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Vibe Kanban の終了に関するよくある質問",
    items: [
      {
        q: "Vibe Kanban はサービスを終了するのですか？",
        a: "終了するのは運営会社です。bloop は2026年4月10日に会社の解散を発表しました。オープンソースのアプリはローカルで動くコミュニティ保守のプロジェクトとして続いています。ホスティングされていた issue、コメント、プロジェクト、組織は30日後に削除されました。",
      },
      {
        q: "Vibe Kanban は今も使えますか？",
        a: "ローカルなら使えます。`npx vibe-kanban` で今も起動し、ローカルのワークスペースも動きます。最新リリースは2026年4月24日の v0.1.44 なので、新しいエージェントのバージョンには対応していない可能性があります。",
      },
      {
        q: "Vibe Kanban のデータはどうやってエクスポートしますか？",
        a: "最新版のアプリにあるデータのエクスポート機能を使ってください。プロジェクトページからも直接たどれます。あわせて、ワークスペースのブランチも git のリモートにプッシュしておきましょう。",
      },
      {
        q: "Vibe Kanban の代替ツールでおすすめはどれですか？",
        a: "diff レビュー付きの並列エージェントなら Paradev（旧 Superset）、Claude Code セッションのカンバンなら Kanban Code、ターミナル中心なら Claude Squad、エージェントが自分で issue を取る共有ボードなら Crewmark です。",
      },
      {
        q: "オープンソースの Vibe Kanban 代替ツールはありますか？",
        a: "あります。Paradev（MIT）、Claude Squad（AGPL-3.0）、Kanban Code（Apache 2.0）はオープンソースで、Vibe Kanban 自体も Apache 2.0 のオープンソースのままです。",
      },
      {
        q: "Windows で使える Vibe Kanban の代替ツールはありますか？",
        a: "Nimbalyst には Windows 版のダウンロードがあり、Kanban Code にも Windows アプリがあります。Crewmark のボードはブラウザで動き、デーモンは Windows で動きます。Paradev はまだ Windows に対応していません。",
      },
    ],
  },
  cta: {
    title: "エージェントには新しいボードが必要です。ついでに仕事も与えましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に Vibe Kanban の README、リリース、終了告知、および各代替ツールの公式サイトまたはリポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、bloop、Vibe Kanban、Paradev、Nimbalyst、Claude Squad、Kanban Code、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
