import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code と Codex で使う AI 社員の活用例",
    description:
      "Claude Code や Codex の AI 社員に任せられる仕事を、チーム別に紹介。それぞれにコピーして使える役割ブリーフと実行スケジュール付きで、毎日の SEO 日報、毎週の競合ダイジェストなどをまとめました。",
  },
  breadcrumb: "活用例",
  hero: {
    kicker: "活用例",
    title: "AI 社員の活用例：Claude Code と Codex に任せる仕事",
    lead: "それぞれの活用例は、AI 社員がスケジュールに沿ってこなす 1 つの仕事です。何をするか、CLAUDE.md や AGENTS.md にコピーする役割ブリーフ、必要なアクセス権、実行方法を紹介します。仕事は、ふだんその仕事を担当するチームごとにまとめています。どれも Claude Code や Codex で 1 回限りのプロンプトとしても使えます。",
    cta: "今すぐ始める",
    secondary: "活用例を見る",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "チーム別",
      headers: ["チーム", "任せられること"],
      rows: [
        ["[マーケティング](/for/marketing)", "SEO のページとレポート、競合の追跡、SNS の下書き、ファネルの見直し"],
        ["[エンジニアリング](/for/engineering)", "エラーのトリアージ、プルリクエストのレビュー、issue からプルリクエストまで、リリースノート"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "活用例",
      headers: ["活用例", "チーム", "頻度"],
      rows: [
        ["[毎日の SEO 日報](/use-cases/daily-seo-report)", "マーケティング", "毎日"],
        ["[毎週の競合ダイジェスト](/use-cases/weekly-competitor-digest)", "マーケティング", "毎週"],
        ["[Sentry のエラートリアージ](/use-cases/sentry-error-triage)", "エンジニアリング", "1 日 2 回"],
        ["[すべての PR に AI コードレビュー](/use-cases/pr-review)", "エンジニアリング", "PR ごと"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "最初の仕事に向いているもの",
      points: [
        "繰り返す：毎日や毎週の仕事ほど、セットアップの手間を早く取り戻せます。",
        "終わりがはっきりしている：レポートの投稿、ページの公開、ダイジェストの送信。",
        "確認しやすい：正しくできたかを 1 分で確かめられます。",
        "最終判断はあなたに残る：公開、支出、外に出るものはすべて人を通します。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "どの仕事も AI 社員として動かせる",
      text: [
        "Crewmark は、あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。繰り返しの仕事は、ボード上の定期 issue になります。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees)から選びます。",
        },
        {
          title: "仕事を issue として追加する",
          text: "毎日や毎週の仕事は自動で繰り返され、社員は期限が来たものから取りかかります。",
        },
        {
          title: "聞かれたら答える",
          text: "判断が必要なときは issue を「要対応」にして質問してきます。それ以外はすべてボードで見られます。",
        },
      ],
    },
  ],
  mid: {
    title: "これらの仕事をスケジュールで回したいですか？",
    text: "Crewmark の社員はあなたの Claude Code や Codex で動き、ボードから次の仕事に取りかかります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "AI 社員には何ができますか？",
        a: "ファイル、Web、あなたのツールを通じてできる繰り返しの仕事です。アナリティクスからのレポート、サイトのページ作成、競合の追跡、レビュー用の下書き、トリアージなど。目標に向かって働き、スケジュールに沿って報告します。",
      },
      {
        q: "コーディング以外で Claude Code を活用するなら？",
        a: "一番始めやすいのはマーケティングです。SEO のページとレポート、競合ダイジェスト、コンテンツの下書き。[マーケティングのための Claude Code](/for/marketing) をご覧ください。コードを書く以外のエンジニアリングの仕事は、[エンジニアリングのための Claude Code](/for/engineering) をご覧ください。",
      },
      {
        q: "Codex でも使えますか？",
        a: "はい。どの役割ブリーフも、Claude Code の CLAUDE.md と同じように、Codex の AGENTS.md でも使えます。",
      },
    ],
  },
  cta: {
    title: "仕事を選んで、AI 社員に任せましょう。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に更新しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude、Claude Code、Codex は各所有者の商標です。",
};
