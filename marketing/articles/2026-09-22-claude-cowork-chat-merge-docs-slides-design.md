# 「チャットか、Coworkか」を選ばなくていい ― Anthropicが全部を1つのClaudeに統合、"資料作成5分"の裏にクレジット枯渇の壁

*Highliteトレンド記事 #066 | 2026-09-22 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [ITmedia NEWS「Anthropic、Claudeの『チャット』と『Cowork』を統合 資料作成の『Docs』『Slides』も」](https://www.itmedia.co.jp/news/article/2609/17/2000001565/) / [TechCrunch「Anthropic merges Claude chat and Cowork in one interface」](https://techcrunch.com/2026/09/16/anthropic-merges-claude-chat-and-cowork-in-one-interface/) / [Simon Willison「Claude Cowork and chat are now one Claude」](https://simonwillison.net/2026/Sep/16/one-claude/) / [Hacker News「Claude Cowork and chat are now one Claude」](https://news.ycombinator.com/item?id=49729412) / [Claude公式X投稿](https://x.com/claudeai/status/2100258490740539730) / [Zenn「Claude Docsが登場！Slides・Designと合わせて触ってみた」](https://zenn.dev/canly/articles/7ac8cea14c20e8) / [ライフハッカー・ジャパン「Claudeならスライド作りが5分。便利だけど欠点も見つけました」](https://www.lifehacker.jp/article/2605claude-design-built-best-slideshow/) / [ITmedia AI+「Anthropic、デザインツール『Claude Design』を強化」](https://www.itmedia.co.jp/aiplus/article/2606/18/2000000102/) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Anthropicは2026年9月16日、Claudeの「チャット」と「Cowork」を1つの会話体験に統合すると発表。「どっちを開くか」を利用者が判断する手間をなくし、簡単な質問も複数ステップの調査・作業も同じ画面でこなす方向に舵を切った。
2. 同時に文書作成の「Claude Docs」、スライド作成の「Claude Slides」をベータ公開。Lifehacker Japanの検証では実質5分でプレゼン資料の骨子が完成する一方、PowerPointでの手直しや日本語レイアウト崩れといった"最後の詰め"はまだ人の目が必要と報告されている。
3. Simon Willisonは今回の統合を「Claudeが独立した汎用エージェントになる転換点」と評した。ChatGPTがCodexをWork機能として吸収した流れと同じ方向で、AI各社が「ツールを使い分けさせない」設計に収束しつつある。

---

## 1. 「開くのはどっちか」問題に、Anthropicが終止符

これまでClaudeには入力欄に「チャット」と「Cowork」という2つの入り口があり、利用者は作業を始める前に「これは単純な質問か、複数ステップの調査や資料作成が必要な大きな作業か」を自分で判断しなければならなかった。しかも一度チャットで始めた作業をCoworkに引き継ぐことはできず、途中で「こっちで良かったのか」と迷うケースが多かったという。

Anthropicは公式Xで「Claude Coworkとチャットは1つのClaudeに統合される。ちょっとした質問でも、レポートを丸ごと任せる作業でも、Claudeがそこから引き受ける。ノートパソコンを閉じた後も作業は続く。不明な点があればClaudeが聞き返すが、最終判断は常にあなたに残る」と説明している。展開はまずPro・Maxプランを対象にWeb・デスクトップ・モバイルの各アプリで数週間かけて段階的に進み、Team・Freeプランは順次対応、Enterpriseプランには組織への変更適用の30日以上前に通知される。

## 2. Docs・Slides・Designの"資料作成トリオ"が同じ会話に集約

統合と同時にベータ公開されたのが、文書作成の「Claude Docs」とスライド作成の「Claude Slides」だ。両者とも会話の右側にエディタが開き、チャットで指示を出すだけで全ページ一括修正までこなせる。ライフハッカー・ジャパンの検証記事「Claudeならスライド作りが5分。便利だけど欠点も見つけました」によれば、Claudeは生成前に内容確認の質問を挟んでから高精度モデルでスライドを組み立てるため手戻りが少なく、体感で5分程度の速さだったという。一方で、細部の体裁調整は結局PowerPoint側での手直しが必要になる場面があり、日本語フォントの崩れやレイアウト乱れが起きる可能性もあるため、生成後の目視チェックは欠かせないと指摘している。

もう一つの柱がデザインツール「Claude Design」だ。すでに2026年6月の大型アップデートでGitHubリポジトリやデザインファイルからデザインシステムを取り込む機能、スラッシュコマンド「/design-sync」によるClaude Codeとの双方向連携、Adobe・Canvaなど外部ツールへの書き出し機能が強化されていた。今回のチャット統合により、Docs・Slides・Designという資料/デザイン系の3機能が、入り口を選ばず同じ会話の流れの中で行き来できるようになった格好だ。

## 3. Simon Willisonの見立て「Claudeは汎用エージェントになる」

著名開発者のSimon Willisonは自身のブログで、今回の統合を「Claudeが独立した汎用エージェントになりつつあることを意味する」と評した。そのうえで「OpenAIが数週間前にCodexデスクトップアプリを"ChatGPT"に改名した流れと重なる」と指摘し、AI各社が「利用者にツールを使い分けさせない」設計へと収束していると読む。Willison自身、「Coworkと通常のClaudeの境界線をいずれ整理して記事にするつもりだったが、その手間が省けた」としつつも、「これが機能・画面構成の面で実際に何を意味するのかを把握するには、まだそれなりの検証が必要」と慎重な姿勢も示している。

Hacker Newsのスレッドでも反応は割れており、「調査・思考系の質問に対する回答の質は、これまでのチャットとCoworkで体感が違っていた」という声が挙がった。統合後にその品質差がどちらに寄るのか、現場での検証はこれからだ。

## 4. 落とし穴:週間クレジットの枯渇と"最後の詰め"は人の仕事のまま

実務での注意点も見えてきた。国内ブログでは、Claude Designの検証を重ねているうちに週間クレジットを使い切ってしまい、1週間丸ごとロックアウトされたという報告がある。Docs・Slides・Designはいずれも有料プラン(Pro・Max・Team・Enterprise)向けのベータ機能であり、無料枠での検証には限界がある点は把握しておきたい。また前述の通り、生成物の体裁調整や日本語表示の最終チェックは引き続き人の作業として残る。「AIが最初のたたき台を数分で作り、人が仕上げる」という構図は、これまでのAIサイト制作ツールの潮流と地続きだ。

## Highliteへの示唆

1. **提案書・スライド制作の下書き工程にClaude Docs/Slidesを試験導入** - 会話ベースで一括修正できる強みは、クライアント提案資料のドラフト作成を大幅に短縮できる可能性がある。ただしPowerPointでの最終体裁調整や日本語崩れチェックの工程は自社の"仕上げ"として明示的に組み込む必要がある。
2. **「ツールを選ばせない」設計思想を自社のAI活用フローにも反映** - チャットとCoworkの使い分けで利用者が迷っていたのと同様に、社内でも「どのAIツールを何のために使うか」が属人化しやすい。Claudeの統合方針は、自社のAI活用マニュアルを整理する際の参考になる。
3. **クレジット消費の見積もりを事前に顧客と共有** - 週間クレジット枯渇でロックアウトされた事例は他人事ではない。AI活用を前提にした制作提案では、想定作業量に対するクレジット消費の目安をあらかじめ説明しておくことがトラブル回避につながる。
