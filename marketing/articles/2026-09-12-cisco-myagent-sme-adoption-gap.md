# 「全社員に専属AIエージェント」― Cisco9万人ロールアウトの裏側と、日本の中小企業に横たわる"導入率12%の壁"

*Highliteトレンド記事 #056 | 2026-09-12 | テーマ: 企業のAI活用事例*
*ソース: [Cisco Blogs「MyAgent and the Rise of Ambient Intelligence」](https://blogs.cisco.com/news/my-agent-and-the-rise-of-ambient-intelligence-ciscos-next-step-in-enterprise-ai) / [PYMNTS「Cisco Deploys Custom AI Agent to Entire 90,000-Person Workforce」](https://www.pymnts.com/news/artificial-intelligence/2026/cisco-deploys-custom-ai-agent-to-entire-90000-person-workforce) / [YourStory「Cisco gave every employee an AI agent. Is this the future of work?」](https://yourstory.com/ai-story/cisco-myagent-ai-agent-90000-employees-future-of-work) / [X・Rohan Paul氏投稿](https://x.com/rohanpaul_ai/status/2092975470673297918) / [The Autonomous Edge「Issue #5: AI Agent Security Matures Into a Category」](https://buttondown.com/TheAutonomousEdge/archive/the-autonomous-edge-issue-5-ai-agent-security/) / [中小企業基盤整備機構「中小企業のAI等の利活用に係る実態調査」(2026年3月)](https://www.smrj.go.jp/research_case/questionnaire/fbrion0000002pjw-att/202603_AI_point.pdf) / [東京新聞×PR TIMES「中小企業AI導入実態調査2026」](https://prtimes.jp/main/html/rd/p/000000045.000153035.html) / [note・平澤龍一「中小企業AI導入率12%が示す格差の現実」](https://note.com/hirazawaryuichi/n/nc52c9f7fedab) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Ciscoが2026年7月末、独自開発のAIエージェント「MyAgent」を全世界約9万人の全社員に展開完了。個人ごとに紐づく800以上のサブエージェントが、Outlook・Webex・Jira・SharePointなどをまたいで業務を進める「監督付き自律実行(supervised autonomous execution)」フェーズに入った。
2. 導入後、社内のエージェント経由のやり取りは前四半期比で約350%増加。同じ週にCrowdStrike・Proofpoint・Tenableが相次いで「エージェント認証・監査」サービスを発表し、"AIエージェントを安全に運用する設計"がセキュリティ業界の新たな調達チェック項目として一気に定着し始めた。
3. 一方、日本の中小企業のAI導入率はわずか12〜20%台にとどまり、最大の障壁は費用でも技術力でもなく「何から始めればいいか分からない」(62%)。Ciscoのような"全社一斉導入"モデルではなく、業務を1つに絞った小さな一歩を設計・提案できるかどうかが問われている。

---

## 1. Ciscoが賭けた「一人一台の専属AIエージェント」

Cisco Blogsが公開した「MyAgent and the Rise of Ambient Intelligence」によれば、MyAgentは同社の安全性・ガバナンスを備えたマルチモデル基盤「Circuit」上に構築された、社員一人ひとりに専属化されたAIエージェントだ。X(旧Twitter)でAI動向を追うRohan Paul氏の投稿によれば、その裏側は800以上のサブエージェントで構成される。単なるチャットボットではなく、ユーザーが目的を伝えるとメール処理やタスク調整、社内システム間の連携までを自律的にこなす「委任」型の働き方への転換を狙っている。PYMNTSの報道では、外部に影響を及ぼすアクションには必ず人間の明示的な承認が必要とされ、ポリシーサーバーが破壊的な操作やCisco社内データの外部モデル学習への流用を遮断する設計になっている点が強調されている。

## 2. 「350%増」という数字が語る、使われ始めると止まらないダイナミクス

YourStoryやThe Autonomous Edgeが伝えるところによると、MyAgent導入前後で社内のエージェント経由のやり取りは前四半期比で約350%増加した。コスト管理の面でも工夫があり、リクエストの50〜60%はオープンウェイトモデルに、20〜30%はソフトウェア自動化に振り分け、フロンティアモデルに回るのはごく一部にとどめているという。これは「AIエージェントは一部の先進的な社員だけが使う」段階から、「業務プロセスに組み込まれ、使われるほど指数関数的に呼び出しが増える」段階へ移ったことを示す数字だ。9万人規模での確認事例としては現時点で最大級とされ、agentic AI導入の"次のフェーズ"を占う先行指標として注目されている。

## 3. 同じ週に起きた「エージェント統治」の一斉ローンチ

興味深いのは、MyAgentの拡大が話題になったのと同じ週(2026年9月7日の週)に、セキュリティ業界側でも大きな動きがあったことだ。The Autonomous Edgeのまとめによれば、CrowdStrikeは「Verified Agent」認証を含むAIパートナー制度を、Proofpoint はOpenAIの「Daybreak」モデルを基盤にしたSOCアナリスト向けエージェントを、Tenableは人間のリサーチャーによるレビューとGPT系サイバーモデルを組み合わせて外部エージェントを審査する「CyberAgents Exchange AI Inspector」をそれぞれ発表した。同ニュースレターは「エージェントセキュリティは研究テーマから、調達フォームのチェック項目になった」と表現している。AIエージェントを「導入すること」自体の目新しさは終わり、「安全に運用できる設計かどうか」が選定基準の中心に移りつつある。

## 4. 日本の中小企業に横たわる「導入率12%の壁」

一方、日本国内に目を向けると景色は大きく異なる。中小企業基盤整備機構が2026年3月に実施した調査では、中小企業の「全社的に導入」「一部業務で導入」の合計は20.4%、検討中の18.6%を合わせても前向きな企業は39.0%にとどまる。別の調査(東京新聞×PR TIMES、株式会社Leach実施)では、従業員300名以下の中小企業のAI導入率は約12%と推定され、大企業の42〜48%と比べて約5倍のギャップがあるとされる。決定的なのは障壁の中身だ。同調査では62%の経営者・担当者が最大のハードルとして挙げたのは「費用」でも「技術的な難しさ」でもなく「何から始めればいいか分からない」だった。9万人に一斉展開できるCiscoと、まず1つの業務すら選べない多くの中小企業との差は、資金力以上に「最初の一歩の設計」の有無にある。

---

## Highliteへの示唆

1. **「全社一斉」ではなく「1業務特化」の提案が刺さる** ― Ciscoの事例をそのまま中小企業に持ち込んでも実現不可能だが、「何から始めればいいか分からない」62%の悩みに対し、問い合わせ対応・見積書ドラフト・SNS投稿の下書きなど1業務に絞った"小さな専属エージェント"を最初の一歩として具体的に提示できることが、Highliteの提案力そのものになる。
2. **Ciscoのガバナンス設計は中小企業にも転用できる言語化材料** ― 「どこまでAIに任せ、どこで人間が最終承認するか」というMyAgentの設計思想は、規模を問わず"導入したが誰も使わない"という失敗を防ぐための説明資料として使える。提案書に「承認フロー」を明記するだけで信頼感が変わる。
3. **セキュリティ・ガバナンスの説明力自体が差別化の商材になる** ― CrowdStrikeらが同じ週に「エージェント認証」を打ち出したように、意思決定の軸は「機能の多さ」から「安全に運用できる設計」へ移っている。Highliteが中小企業のAI活用を支援する際も、ツールを繋ぐだけでなく利用ルールと承認フローまで含めて設計することが、価格競争から一歩抜け出す武器になる。
