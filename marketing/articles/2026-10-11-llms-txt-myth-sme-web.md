# 137,000サイト調査で判明「llms.txtの97%は誰にも読まれていない」― "AI時代の新常識"に中小企業は投資すべきか

*Highliteトレンド記事 #085 | 2026-10-11 | テーマ: Webデザイン最新手法・UI/UXトレンド*
*ソース: [Ahrefs「We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read」](https://ahrefs.com/blog/llmstxt-study/) / [Let's Data Science「Ahrefs Finds 97% of llms.txt Files Receive No Requests」](https://letsdatascience.com/news/ahrefs-finds-97-of-llmstxt-files-receive-no-requests-fc471b83) / [Let's Data Science「Google's Mueller Says llms.txt Won't Guide LLM Recommendations」](https://letsdatascience.com/news/googles-mueller-says-llmstxt-wont-guide-llm-recommendations-8afc3fa3) / [wislr「48 Days of Server Logs Expose What GPTBot, ChatGPT, ClaudeBot, and 16 Others Are Doing」](https://www.wislr.com/articles/ai-bot-behavior-log-analysis/) / [ezy.ai「We Put llms.txt on 83 Websites. OpenAI Read It 7 Times.」](https://www.ezy.ai/research/do-ai-bots-read-llms-txt) / [saaslinks「We Serve an llms.txt. AI Crawlers Hit Our Pages 151 Times in 14 Days and Never Once Asked for It」](https://saaslinks.net/blog/llms-txt-server-log-study) / [the-decoder「New llms.txt web standard could fundamentally change how LLMs read and process online content」](https://the-decoder.com/new-llms-txt-web-standard-could-fundamentally-change-how-llms-read-and-process-online-content/) / [Wix App Market「llms.txt」](https://ja.wix.com/app-market/llms-txt) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Ahrefsが2026年6月に公開した大規模調査(137,210ドメイン対象)によると、llms.txtを設置しているサイトは全体の28%にのぼる一方、有効なファイルの**97%は一度もアクセスされていなかった**。
2. 他の独立した調査(wislr・weekerp・ezy.ai・saaslinks)も軒並み同じ結論で、GPTBotやClaudeBotなど主要AIクローラーはllms.txtをほとんど取得しない。Googleの検索アナリストJohn Muellerも「llms.txtはLLMがどのサイトを紹介するかの判断材料にはならない」と明言している。
3. それでも設置コストはほぼゼロなので「百害あって一利なし」ではないが、"AI時代の集客対策"として売り込むのは誇大表現に近い。中小企業が本当に投資すべきは構造化データとコンテンツの具体性であり、llms.txtはその代替にはならない。

---

## 1. llms.txtとは何か ― なぜ"新常識"として広まったのか

llms.txtは、Answer.AI創業者のJeremy Howardが2024年9月3日に提唱した仕組みで、仕様はllmstxt.orgにまとめられている。サイトのルートに置くMarkdownファイルで、サイト名・一文の要約・AIに読んでほしい重要ページへのリンクを並べておくことで、LLM(大規模言語モデル)がHTMLの中からナビゲーションや広告を取り除いて本文を探す手間を省き、コンパクトな"入口"を提供できる、という発想だ。robots.txtが「クローラーの振る舞いを制御するファイル」、sitemap.xmlが「検索エンジンに全ページを伝えるファイル」であるのに対し、llms.txtは「AIに読んでほしい要点を伝えるファイル」という位置づけになる。

発表から2年が経ち、2026年には「AI時代のSEO対策(GEO/AEO)」として多くのWeb制作会方・SEO会社がクライアントに設置を勧めるようになった。Wixのアプリマーケットにはllms.txtを自動生成するアプリが掲載され、Mintlifyなど一部のドキュメントツールは標準対応を始めている。「とりあえず置いておけば損はない」という空気が広がり、ホームページ制作の見積書に"AI対策オプション"として記載される例も出てきた。

## 2. 137,000サイト調査が示した現実 ― 「置いても誰も来ない」

ところが2026年6月15日に公開されたAhrefsの調査は、この"新常識"に冷水を浴びせた。Ahrefs Web Analyticsで2026年5月にトラフィックのあった137,210ドメインを対象に、llms.txtがHTTP 200で返るか、さらにBot Analyticsで/llms.txtへの全リクエストをユーザーエージェント別に解析している。結果、28%のドメインが実際にllms.txtを公開していた一方、有効なファイル(約38,000件)のうち実際にアクセスがあったのはわずか1,100件程度、つまり**97%が一度もリクエストされていなかった**。さらに、数少ないアクセスのうち96%はボット由来で、その中でも「名前のついたAIツール」からの取得は19.5%に過ぎず、残りの大半はSEO監査ツールやllms.txtチェッカーだったという。つまり「AIが読みに来ている」と思っていたアクセスの実態は、人間の運用者がチェックツールで確認した跡であることが多い。

この結果は他の独立調査とも一致する。48日間・12,099件のボットリクエストを分析したwislrは「GPTBot、ClaudeBotを含むどのAIボットも/llms.txtを一度もリクエストしなかった」と報告。68,759件のAIボットリクエストを調べたweekerpも同様の結論を出している。83サイトに12週間llms.txtを設置して追跡したezy.aiは、「OpenAIが7回、Anthropicが9回、Perplexityは0回」というわずかな例外を確認したが、同じ期間にrobots.txtへのアクセスは数千回に達しており、スケールの差は歴然としている。

| 調査 | 規模・期間 | 主な結果 |
|---|---|---|
| Ahrefs | 137,210ドメイン、2026年5月のトラフィック | 設置率28%、有効ファイルの97%が無アクセス |
| wislr | 12,099件のボットリクエスト、48日間 | AIボットの/llms.txt取得は0件 |
| weekerp | 68,759件のAIボットリクエスト | GPTBot・ClaudeBot等、主要ボットは未取得 |
| ezy.ai | 83サイト、12週間 | OpenAI 7回・Anthropic 9回・Perplexity 0回(robots.txtは数千回) |
| saaslinks | 1サイト、14日間・151回のクロール | llms.txtのリクエストは0回 |

決定的だったのはGoogleの反応だ。検索アナリストのJohn MuellerはGoogle公式ポッドキャスト「Search Off the Record」で、llms.txtはLLMがどのサイトを推薦・引用するかを左右する材料には**ならない**と明言したと報じられている。2025年11月にSERankingが30万ドメインを対象に行った調査でも、llms.txt設置によるAI引用の明確な改善は確認されていない。

## 3. なぜ理論と現実がズレるのか

主要AIクローラー(GPTBot、ClaudeBot、PerplexityBotなど)は、すでに数十年かけて最適化されたHTML・robots.txt・構造化データのインフラをベースに情報を収集するよう設計されている。現在のLLMはノイズの多いHTMLから本文を抽出する能力自体が高く、「要約済みの入口」を別途用意してもらう必要性が薄い。さらに決定的なのは、llms.txtは**サイト運営者自身が書く自己申告ファイル**であり、検証も採点もされない。2000年代のSEOで「meta keywordsタグに詰め込めば上位表示される」という手法が形骸化・無効化していった経緯と構造的に似ている。中立的な評価指標(被リンク、構造化データ、実際のコンテンツの具体性)の方が、信頼できる判断材料として使われ続けているということだ。

ただし「完全にゼロ」でもない点には注意したい。わずかながらGPTBotやClaude-Codeが取得した例は確認されており、llms.txt自体はまだ発展途上の提案であって、公式に廃止されたわけでもない。設置コストはほぼゼロ(Markdownファイル1つ)なので、害はない。問題は、ほぼ効果が確認されていない施策を「AI時代の必須対策」として有料サービス化し、過大な期待を煽る売り方の方にある。

## 4. 中小企業・制作会社が今やるべきこと

llms.txtを設置すること自体は止める必要はないが、それを"AI集客の主戦略"と位置づけるのは誤りだ。むしろ投資すべきは、以前の記事でも触れたように、Googleの会話型AI「Ask Maps」が参照するGoogleビジネスプロフィールや口コミ本文のような、**具体的な言葉と構造化された情報**である。AI OverviewやAIエージェント経由の集客で実際に効果を上げている事例(老舗米屋・儀兵衛のGEO施策など)も、共通して「抽象的なキャッチコピー」ではなく「具体的な数字・利用シーン・一次情報」をコンテンツに埋め込むアプローチを取っている。llms.txtはその代替にはならず、あくまで"あって困らない補助ファイル"程度に位置づけるのが実態に合っている。

## Highliteへの示唆

1. **llms.txtは「無料の標準オプション」として扱う** - 設置コストがほぼゼロなので、サイト制作・リニューアルのメニューに標準で含める分には問題ない。ただし「AI時代の集客対策」として単体で高額な提案をするのは、データに反する誇大表現になりかねない。
2. **本当に効くAI時代対策はコンテンツの"具体性"** - 構造化データ(schema.org)、正確なGBP情報、利用シーンや数字を含む本文づくりなど、過去記事で紹介した儀兵衛のGEO事例やAsk Maps対策と同じ方向性の提案に投資対効果がある。llms.txt単体の提案より、こうしたコンテンツ設計とセットで語ることで提案の説得力が増す。
3. **"バズワード便乗"提案を見抜く姿勢自体が差別化になる** - 新しいAI関連の用語が出るたびに「とりあえず対応します」と売り込む制作会社は多い。Highliteがデータに基づいて効果を検証し、過大な期待を煽らない姿勢を見せること自体が、情報に敏感な中小企業経営者への信頼構築につながる。
