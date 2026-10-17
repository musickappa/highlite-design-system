# 「人間向け49%、エージェント向け89%」― AIブラウザがサイトを"読む"時代、Web制作に新しい合格基準

*Highliteトレンド記事 #092 | 2026-10-18 | テーマ: Webデザイン最新手法・UI/UXトレンド*
*ソース: [arXiv「Designing Agent-Ready Websites for AI Web Agents」(Elnaffar & Rashidi)](https://arxiv.org/abs/2607.12056) / [MIT AI Agent Index「ChatGPT Atlas」](https://aiagentindex.mit.edu/2025/chatgpt-atlas) / [doubletaponair.com「ChatGPT Atlas Accessibility: Why Blind Users Should Wait」](https://doubletaponair.com/chatgpt-atlas-accessibility-why-blind-users-should-wait/) / [createwith.com「Perplexity Opens Comet AI Browser Access Worldwide」](https://www.createwith.com/tool/perplexity/updates/perplexity-opens-comet-ai-browser-access-worldwide) / [Adobe Business Blog「AI-Driven Traffic Surges Across Industries」](https://business.adobe.com/blog/ai-driven-traffic-surges-across-industries) / [Thurrott「Google Announces Gemini in Chrome Expansion and New AI Features for Small Businesses」](https://www.thurrott.com/cloud/337211/google-announces-gemini-in-chrome-expansion-and-new-ai-features-for-small-businesses) / [taprun.dev「agents.json — Schema.org WebAPI Profile」](https://taprun.dev/agents-json-spec.html) / [beancount.io「AI Shopping Agents, Agentic Commerce: A Small Retailer's Guide」](https://beancount.io/ja/blog/2026/07/16/ai-shopping-agents-agentic-commerce-small-retailer-guide) / [stellagent.ai「PwC: Shopping Agents Rise」](https://stellagent.ai/ja/insights/pwc-shopping-agents-rise) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. 研究者Said ElnaffarとFarzad Rashidiの実証実験で、同じECサイトでもAIエージェントによるショッピングタスクの成功率は人間向けレイアウトで**49.3%**、エージェント向けに再設計した版では**89.3%**まで跳ね上がった。差を生んだのは見た目ではなく、JSON-LDでの商品データ公開や操作要素への安定ラベル付けといった「構造」への投資だ。
2. 一方でOpenAIのChatGPT Atlasは画面読み上げソフトのユーザーには「ほぼ使えない」との指摘が相次ぎ、MIT AI Agent Indexも**WCAG未準拠**と報告している。「AIエージェントに読める」ことと「障害のある人間に使える」ことは別軸の課題だと、AIブラウザ自身が証明してしまった。
3. PerplexityのCometは2025年10月に世界で無料開放、GoogleもGemini in Chromeの対象地域を拡大し中小企業のGoogleビジネスプロフィール連携まで踏み込んだ。AI経由の小売サイト流入は2025年ホリデー商戦で前年比**693%**増(Adobe Analytics)。中小企業サイトの大半はまだ、この新しい"来訪者"に対応できていない。

---

## 1. 「人間向け49%→エージェント向け89%」が示した、見た目とは別の合格基準

ICEME 2026に採択された論文「Designing Agent-Ready Websites for AI Web Agents」は、小規模なオンラインストアを人間向けレイアウトとエージェント向けレイアウトの2版用意し、AIエージェントにショッピングタスクを実行させる対照実験を行った。結果は、人間向け版のタスク成功率**49.3%**に対し、エージェント向け版は**89.3%**。「部分的にしか完了しなかった」件数は43件から3件に減り、平均ステップ数は約**30.4%**短縮された。

エージェント向け版が変えたのは見た目ではない。商品データをJSON-LD(構造化データ)で機械可読な形で公開し、ボタンやリンクなどの操作要素にセマンティックラベルと安定した識別子を付け、価格や在庫のような変動情報にはタイムスタンプを添えた。つまり「デザインを変える」のではなく「裏側のデータ構造を整える」ことが、タスク完了率を2倍近くまで引き上げたということだ。著者自身は小規模な実験であることを認め、実サイトでの追加検証を呼びかけている段階だが、方向性としては無視できない結果だ。

## 2. AIブラウザは静かに普及期に入っている ― Atlas・Comet・Gemini in Chrome

AIエージェントがサイトを"操作"する前提は、もはや研究室だけの話ではない。PerplexityのAIブラウザ「Comet」は2025年10月2日に全世界・無料で開放され、利用者数の推計には幅があるものの(四半期で数百万人規模という推計から、2026年第1四半期に大きく伸びたとする推計まで様々)、無料開放を機に急速に裾野を広げているのは間違いない。GoogleもGemini in Chromeの対象地域を北米以外に拡大し、中小企業向けにはGoogleビジネスプロフィールと連携して検索インプレッションの分析や営業時間の更新、レビュー返信文の下書きまでAIが代行できる機能を打ち出した。

AI経由の来訪が実際に売上へ影響している数字もある。Adobe Analyticsによれば、米国の小売サイトへのAI経由トラフィックは2025年のホリデー商戦で前年比**693%**増(11月は769%増、12月は673%増)、しかもAI経由の訪問者は他の経路より**31%**高い確率で購入に至ったという。母数の小さい領域の急成長である点は注意が必要だが、「AIがユーザーに代わってサイトを訪れ、情報を集め、時には購入まで行う」という前提は、もはや仮説ではなく現在進行中の変化だ。

## 3. ChatGPT Atlasの"読み上げ事故"が突いた、もう一つの死角

ここで見落とされがちなのが、AI向けの機械可読性と、人間の障害のあるユーザー向けのアクセシビリティは同じではないという事実だ。OpenAIのAIブラウザ「ChatGPT Atlas」は、画面読み上げソフトのユーザーにとってボタンにラベルが無く、オンボーディング自体が操作できないなど「ほぼ使えない」状態にあると専門家の解説で指摘され、MIT AI Agent Indexも**WCAG(Web Content Accessibility Guidelines)に未準拠**と評価している。

つまり、エージェント企業自身が作ったブラウザが、人間の障害のあるユーザーへの配慮では既存のWeb標準に追いついていない。これは中小企業にとって重要な示唆を含む。「AIエージェントに読まれるためにJSON-LDを足す」ことと「スクリーンリーダー利用者が迷わず操作できるようにARIAラベルを整える」ことは、重なる部分はあっても別の作業だ。片方だけ対応して終わり、にはならない。

## 4. 中小企業サイトが備えるべき3つの土台 ― GEO・API連携・運用体制

エージェント時代のEC/BtoCサイト対応について、PwCは「①構造化データによる発見性最適化(GEO)」「②API経由のチェックアウト対応」「③AIと協働できる業務体制の整備」の3本柱を挙げている。すでにWeb全体の3割強がSEO目的でSchema.org準拠のJSON-LDを公開しており、その延長で「agents.json」のようにエージェントとの対話方法を宣言する新しい仕様案も登場している。価格・在庫・サイズ展開・返品ポリシーが構造化データで機械可読な形になっていなければ、エージェントは多くの場面で「何もできない」まま離脱するとの指摘も出ている。米国市場限定の推計ではあるが、エージェント経由のコマースは2030年までに最大1兆ドル規模の小売収益を生み得るとの見立てもあり、投資としての優先度は上がり続けている。

## Highliteへの示唆

1. **JSON-LD構造化データを「標準装備」のWeb制作メニューに格上げする** ― 商品・料金・営業時間・レビューなどをJSON-LDで公開するのはSEO目的でも既に一般的な作業だが、エージェント対応という新しい価値軸を乗せて提案できる。前述の実験のように、タスク成功率を2倍近く引き上げる具体的な根拠を提示できるのは強い説得材料になる。
2. **「エージェント対応診断」と「アクセシビリティ診断」を切り分けて両方提案する** ― ChatGPT Atlas自身がWCAG未準拠という事例は、両者が別課題である生きた証拠として使える。片方だけで安心させず、既存のアクセシビリティ対応メニューとセットで提案することで、診断の付加価値を高められる。
3. **Googleビジネスプロフィールの整備支援を"AI時代の基本動作"として再提案する** ― Gemini in Chromeがビジネスプロフィール情報を直接読みに来る以上、情報の正確性・最新性はもはやローカルSEOだけの話ではない。既存クライアントへの定期更新支援を、エージェント対応の第一歩として言語化し直す価値がある。

---

*余談: AIエージェント企業自身が作ったブラウザが、人間のアクセシビリティ基準を満たせていないという指摘は皮肉だ。「機械に読まれるサイト」を追いかける前に、まず自社の製品が人間に使えるかを確かめてほしい、というのが利用者側の率直な感想だろう。中小企業サイトがこの両方を同時に満たせれば、それ自体が競合との明確な差別化になる。*
