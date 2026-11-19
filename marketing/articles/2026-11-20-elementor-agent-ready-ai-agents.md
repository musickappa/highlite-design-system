# Webの"新しい来訪者"はAIエージェント ― Elementor「Agent Ready」機能と、Oraが示す「世界の99%は未対応」という現実

*Highliteトレンド記事 #124 | 2026-11-20 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [Elementor公式ブログ「Every AI agent visit your site isn't ready for is a lead you lose」](https://elementor.com/blog/introducing-agent-ready/) / [Elementor「Agent Ready Scanner」](https://elementor.com/checker/) / [WordPress.org「Elementor Website Builder」changelog](https://wordpress.org/plugins/elementor/) / [Tutkit「Elementor 4.4 Beta: Agent Ready menu generates llms.txt for AI agents」](https://www.tutkit.com/en/news/987-elementor-44-beta-agent-ready-menu-generates-llmstxt-for-ai-agents) / [creatorstoolbox「Elementor's agent readiness score is powered by the Ora ranker」](https://creatorstoolbox.com/@scout/post/n_2ufinoicco0rs) / [Ora.ai「Introducing AgentReady.org: the first open standard for AX」](https://ora.ai/blog/agentready-open-standard) / [Ora.ai「State of Agent Readiness 2026」](https://ora.ai/blog/state-of-agent-readiness-2026) / [LightNOW「Will Your Website's Next Redesign Be For AI Agents?」](https://www.lightnowblog.com/2026/11/will-your-websites-next-redesign-be-for-ai-agents) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. WordPress向けページビルダーElementorは2026年11月、バージョン4.4(WordPress.org公開は2026-11-09)で「Agent Ready」機能を実装。サイトがAIエージェントに「見つけられる(Find)・読める(Read)・使われる(Act)」かを採点し、無料スキャナー(elementor.com/checker)で誰でも公開URLを診断できるようにした。
2. この動きの背景には業界標準化の圧力がある。AIエージェント向け評価サービスOraは2026年、オープン標準「AgentReady.org」を公開し、自社レポートのタイトルを「エージェントは新しい顧客だ。世界の99%はまだ対応できていない」とした。Elementorの採点ロジックもOraの基準の一部を使っている。
3. 一方でElementor自身、プロンプトインジェクション対策は「未解決」と公言しており、bot向け設定は"意思表示"にすぎず全エージェントが従う保証はないと明記している。Highliteにとっては「導入すれば解決」ではなく、"診断→段階導入→継続監視"を商品として提案できる好機だ。

---

## 1. Elementor「Agent Ready」とは何か

WordPress管理画面の「Elementor > Agent Ready」メニューに入ると、サイトの「Readiness score(準備度スコア)」が表示される。評価軸は3つ、Find(エージェントがサイトと機能を発見できるか)、Read(Markdownなどエージェントが処理しやすい形式でコンテンツを読めるか)、Act(エージェントが呼び出せる"ツール"を提供しているか)に分かれる。不合格のチェック項目にはその場で直せる修正案が付き、多くは管理画面からワンステップで適用できる。サインアップなしで使える無料スキャナーも公開され、WordPress以外のサイトでも診断可能だ。

## 2. なぜ今なのか ― Oraの「99%は未対応」という衝立

Elementorの機能はOraという別会社が主導する業界標準「AgentReady.org」の一部を取り込んだものだ。Oraの診断ツール「Deep Scan」は5層・110項目をチェックし、0〜100点とA+〜Fの等級を出す。Ora自身の「State of Agent Readiness 2026」レポートは、調査対象サイトのうちAI向け要約を書いたllms.txtを備えるのは48%、robots.txtでAI向け方針を明示しているのは50%、サイトマップがあるのは69%だったと報告している。見出しの「99%が未対応」はOra側の強い打ち出しだが、裏付けとなる実測値はこの程度の普及率にとどまる点は踏まえておきたい。

併せてLightNOWの記事は、Cloudflareが2026年9月に報告した「AIエージェントからのアクセス数は過去1年で1,700%超増加した」という数値を紹介している。トラフィックの絶対量はまだ小さいとみられるが、伸び率としては急だ。

## 3. できることと、できないこと

Elementorが導入したのは採点だけではない。ページ内容をMarkdownに変換してエージェントに渡す仕組み(人間向けの見た目は変えない)、サイトの検索や問い合わせ内容の取得などを"呼び出し可能な機能"として公開する新標準WebMCPへの対応、llms.txtの自動生成などが4.4に含まれる。

ただしElementorのHead of WordPress、Miriam Schwabは公開ブログの中で、プロンプトインジェクション(エージェントを騙す悪意ある指示の混入)への対策はまだ未解決であることを明言している。スキャナーのページ自体にも「bot向けのアクセス設定は意思表示であり、すべてのボットが従うことを保証しない」との注記がある。実際、AgentReady系の別サービスであるStartupHubのインデックスでは、2026年5月時点(機能公開前)のElementor自身が「F評価」と判定されていた記録もあり、この分野は評価者によって採点がぶれやすいことも分かる。

## 4. 今はまだ「過渡期の標準」

名前が似た「AgentReady」系サービスは複数存在し(Ora、Vercelのagent-readability仕様、Zeoなど)、スコアの出し方も基準も異なる。どのツールで測ったスコアかを明示しないまま「エージェント対応済み」と名乗ることは、現段階では誤解を招きやすい。業界としてはまだ、複数の標準が並走している過渡期にある。

## Highliteへの示唆

1. **「診断」を無料の入口商材にできる** ― elementor.com/checkerのような無料スキャナーの存在自体が、顧客に「自社サイトはAIエージェントにどう見えているか」を体感させる良い営業フックになる。診断結果を持ってHighliteの改善提案につなげる流れを作れる。
2. **"導入すれば終わり"ではなく継続監視として売る** ― Elementor自身が認めるとおり、bot設定は保証ではなく意思表示にすぎない。llms.txtやWebMCP対応を一度実装するだけでなく、プロンプトインジェクションや新しいエージェントの挙動を継続的に確認する運用保守メニューとして提案する価値がある。
3. **標準の乱立を"整理してあげる"ことが差別化になる** ― Ora、Vercel、Elementorでスコアが変わりうる現状は、顧客を混乱させやすい。Highliteが「どの基準で何を測っているか」を翻訳して説明できる立場に立てば、技術に詳しくない中小企業経営者にとって信頼できる相談先になれる。
