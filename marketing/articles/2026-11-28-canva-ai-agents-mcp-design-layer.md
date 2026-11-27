# 「デザインの入口」をAIに譲る ― Canva、MCPでAIエージェントに設計ツール開放、Figmaも同日に動いた11月の攻防

*Highliteトレンド記事 #132 | 2026-11-28 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [Dataconomy「Canva Opens Design Tools To AI Agents And Developers」](https://dataconomy.com/2026/11/25/canva-opens-design-tools-to-ai-agents-and-developers/) / [TheNextWeb「Canva opens its design tools to AI agents and outside developers」](https://thenextweb.com/news/canva-mcp-ai-agents-developers) / [TheNextWeb「Canva becomes the design layer inside Claude with new Anthropic partnership」](https://thenextweb.com/news/canva-anthropic-claude-design-ai-powered-visual-suite) / [Canva Newsroom「Introducing Canva in Claude Design by Anthropic Labs」](https://www.canva.com/newsroom/news/canva-claude-design/) / [Mediaweek「Canva's new AI suite sparks agency jitters」](https://www.mediaweek.com.au/?p=252664) / [TechRadar Pro「Figma is making its AI agents smarter and more connected」](https://www.techradar.com/pro/figma-is-making-its-ai-agents-smarter-and-more-connected-to-help-boost-your-designs) / [octet.design「Is Canva Selling Out to AI?」](https://octet.design/journal/is-canva-selling-out-to-ai)*

---

## 結論サマリー(3行)

1. Canvaは11月25日、Model Context Protocol(MCP)を通じて自社の設計ツールをAIエージェント・外部開発者に開放したと発表。10月以降、MCP経由の登録者は約50万人に達し、利用量は月次で93%増という急成長を見せている。
2. 同時にAnthropicとの提携も拡大し、新設の「Claude Design by Anthropic Labs」の内部で、Canvaのデザインエンジン・ビジュアルスイートが"デザインレイヤー"として機能する体制になった。Canva自身は、AIアシスタント経由でCanvaに触れたユーザーは、通常の導線に比べて2.5倍の確率でAI機能を使う、と説明している。
3. ほぼ同じタイミングの11月23日、FigmaもFigJam・Figma Slidesの有料プランにAIエージェントを投入(コアのデザインエディタはまだ対象外)。"誰のキャンバスの中にAIエージェントを住まわせるか"という主導権争いが、デザインツール業界の最前線で同時進行している。

---

## 1. Canvaが開けた"裏口" ― MCPで何が変わるのか

MCP(Model Context Protocol)は、AIエージェントが外部サービスの機能を直接呼び出すための共通規格だ。Canvaは今回、このMCP経由でAIエージェント・外部開発者に自社の設計機能を本格開放した。Dataconomyの報道によれば、エージェントは編集可能なデザイン・画像・動画の生成、背景除去、フラット画像のレイヤー分解、リサイズ・書き出しまでを、ChatGPTやClaudeなど外部のAIアシスタントの中から直接実行できるようになる。あわせて、Canva自社の画像生成モデル「Craft」もAPI・MCP経由で外部に開放された。

同社の発表では、2026年10月以降にMCP経由での登録者数が約50万人に達し、利用量は1カ月で93%増という伸びを記録している。これは単なる機能追加ではなく、「ユーザーがCanvaのアプリやWebサイトを開かずに、使っているAIアシスタントの中でCanvaの機能を使う」という導線そのものの転換を意味する。

## 2. Anthropicとの提携拡大 ― Canvaが"Claudeの中のデザインレイヤー"になる

TheNextWebの報道によると、Canvaは新設のAnthropic発のツール「Claude Design by Anthropic Labs」の内部に、自社のデザインエンジンとビジュアルスイートを組み込んだ。これにより、Claude上でのデザイン作業がCanvaの技術で裏打ちされる形になる。Canvaはこれを「デザインレイヤーになる」戦略と位置づけており、過去にはChatGPTやMicrosoft Copilot向けにも同様の接続を進め、累計で1,200万件超のデザインがこれらのAIアシスタント経由で作られたとされる。

Canva側の説明では、AIアシスタントを経由してCanvaに触れたユーザーは、通常の導線に比べて2.5倍の確率で同社のAI機能を使うという。自社サイトへの直接流入を増やすより、すでに多くの人が使っているAIアシスタントの"中"に機能を差し込むほうが、結果的にユーザー獲得・利用拡大の近道になっているという判断がうかがえる。

## 3. Figmaも同日に動く ― キャンバスの主導権争い

Canvaの発表とほぼ同じ週、Figmaも動いた。TechRadar Proの報道では、Figmaは11月23日、FigJamとFigma Slidesの有料プラン向けにソフトウェアエージェントを投入している(コアのデザインエディタ自体はまだ対象外)。あわせてFigmaはGitHub・Atlassian・Slackなど外部ツールとの連携も強化し、エージェントが扱えるコンテキストを広げている。

Adobe・Figma・Canvaという主要デザインプラットフォームがそろって、単体ツールから「AIエージェントが作業の一部を担うワークスペース」への転換を急いでいる構図だ。各社の争点は、もはや「どちらの機能が優れているか」ではなく、「ユーザーが日常的に使うAIアシスタントの中で、どちらが"デフォルトのデザインエンジン"として呼び出されるか」に移っている。

## 4. "効率化は進むが、仕事は無くならない"? ― 現場の不安とCanvaの回答

一方で、業界側の受け止めは一様ではない。Mediaweekの報道では、Canvaの大型AI刷新(Canva AI 2.0)に対し「代理店に不安が広がった(agency jitters)」との見出しで現場の動揺を伝えている。これに対しCanvaのKristine Segrist氏(Head of Consumer Marketing)は「それでも創造性の中心にいるのは人である("it's still people at the heart that makes everything creative")」と答え、「多くの優れたデザイナーが画像のトリミングのような細かい作業に時間を使いすぎている。その才能は、より戦略的で革新的な仕事に振り向けられるべきだ」と説明している。

デザインコミュニティ側からも、octet.designが「Canvaは AIに魂を売ったのか?("Is Canva Selling Out to AI?")」という記事でこの流れを批評的に取り上げており、ツールが"誰のために速くなっているのか"という問いが、現場では依然くすぶっていることがわかる。効率化そのものを否定する声は少ないが、「誰の仕事が減り、誰の仕事が増えるのか」という配分の問題が、議論の核心になっている。

## Highliteへの示唆

1. **"AIアシスタント経由の導線"を自社サービスにも設計する** ― CanvaがWebサイトへの直接流入より、ChatGPT・Claudeなど既存のAIアシスタント内への機能の差し込みを優先した判断は象徴的だ。Highliteが提供するWebサイトや制作フローも、将来的に「クライアントが普段使うAIアシスタントから直接呼び出される」導線を想定した設計(MCP対応含む)を検討する価値がある。
2. **"地味な作業の圧縮"を提案の軸にする** ― Segrist氏の発言通り、AIが縮めるのは「画像のトリミング」のような地味な繰り返し作業であり、戦略設計やブランド表現の核心は人が担う領域として残る。Highliteの提案でも、「AIで圧縮する工程」と「人が最終判断する工程」を明確に切り分けて説明することが、クライアントの納得感と信頼につながる。
3. **"主導権争い"の行方をツール選定に反映する** ― Canva・Figma・Adobeが同時にAIエージェント対応を競う今、どのツールが"デフォルトの設計エンジン"として定着するかはまだ見えない。Highliteの制作基盤やクライアントへのツール推奨は、特定ベンダーへの一方的な依存を避け、複数のAI連携(MCP対応含む)に対応できる柔軟性を持たせておくことが、中長期的なリスク低減になる。

---
