---
doc_id: brandri-weekly-flow
confidentiality: internal
owner: Yuto Furukawa
rev: r2 (2026-09-15) — ①執筆を壁打ち方式に変更。Slack投稿は執筆者本人のOK後に限定
purpose: Brandri 記事パイプラインの運用フローを、実行するコマンドまで含めて1枚にまとめる（実行者向け）
audience: 実行者（古川）。レビュー者向けの操作は docs/review-operations.md
depends_on:
  - docs/runbook-planB.md
  - docs/brandri-article-pipeline.md
  - config/brandri-pipeline.config.yaml
  - .claude/commands/brandri-draft.md
  - .claude/commands/brandri-sync.md
  - .claude/commands/brandri-resolve.md
  - .claude/commands/brandri-publish.md
---

# Brandri 運用フロー（コマンド込み）

**水曜に投稿 → 翌週木曜に公開**。レビュー期間は8日間（`publish_lead_days: 8`）。

---

## 0. 大前提：自動で動くものは一つもない

**GitHub Actions も cron も無い（案B運用）。** Slack でリアクションを押しても、
誰かがターミナルで `sync` を打つまで bot は何も見ていないし、何もしない。

「👍 したのに 🗓️ が付かない」はバグではなく、**`sync` を打っていない**だけ。

### 実行環境（毎回これ）

```bash
cd ~/Documents/vscode/highlite-design-system
.venv/bin/python -m scripts.brandri.<コマンド>
```

- **`python3` では動かない。** システムの Python 3.9 では `frontmatter` が
  `TypeGuard` を要求して `ImportError` になる。**必ず `.venv/bin/python` を使う**
- `.env` の `SLACK_BOT_TOKEN` を読む（git には載っていない）
- ドキュメント類の `python -m ...` という表記は、すべて `.venv/bin/python -m ...` と読み替える

---

## 1. 週次サイクル早見表

| 段階 | 曜日 | 誰が | 打つコマンド |
|---|---|---|---|
| ①-a 構成案の壁打ち | 月〜火 | 古川 ⇄ Claude Code | `/brandri-draft`（テーマ指定）→ 構成案 → レビュー → 修正 |
| ①-b 執筆 → 本文レビュー | 火〜水 | 古川 ⇄ Claude Code | 本文をチャットで提示 → レビュー → 修正 |
| ② 本人OK → 投稿 | 水 | 古川 | 「OK」と明示 → `git push` → `post` |
| ③ レビュー | 随時 | 早川・古川（Slack） | なし（👀 / 👍 / 🗑️ / コメント） |
| ④ 修正 | 随時 | 古川 | md を直す → `resolve` |
| ⑤ 承認の取り込み | 随時 | 古川 | **`sync`**（これで 🗓️ が付く） |
| ⑥ 公開 | 木 | 古川 | `publish` → `to_brandri` → Brandri 側2コマンド |
| ⑦ 完了 | 木 | 古川 | URL をスレッドに返信 → **`sync`**（✅ が付く） |

③④はループする。④のあと再び👍が要るかは、レビュー者の判断（下記 §4）。

---

## 2. `sync` はいつ打つのか

`sync` は「Slack の今の状態を読んで、ファイルの状態に反映する」ためのコマンド。
**リアクションが変わった後は、必ずこれを打たないと何も進まない。**

| Slack で起きたこと | `sync` が何をするか | 打たないとどうなるか |
|---|---|---|
| 👍 が付いた | 🗓️ を付け、「公開予定日：◯月◯日（木）」をスレッドに返信、`scheduled/` へ移動 | **公開予約されない。木曜の `publish` の対象にもならない** |
| 👍 が外れた | 🗓️ を外し、キャンセルを通知、`drafts/` へ戻す | 予約されたままに見える |
| 🗑️ が付いた | `dropped/` へ移動、ログに記録 | ボツが反映されない |
| スレッドにコメントが付いた | 「修正待ち」として**報告するだけ**（本文は直さない） | 修正依頼に気づかない |
| 人が公開URLを返信した | ✅ を付けて `published/` へ移動 | 記事が完了扱いにならない |
| 4日以上リアクション無し | リマインドを1回だけ投稿 | リマインドされない |
| 公開予定日を過ぎた | 🗑️ を付けて自動ボツ、`dropped/` へ | `publish` 側の保険で結局ボツになる |

**打つタイミングの目安：**

1. **レビュー者が反応したと分かったとき**（Slack の通知を見たら打つ）
2. **公開日の朝**（木曜。予約が生きているかの確認を兼ねる）
3. **公開URLをスレッドに返信した直後**（✅ を付けて締める）

```bash
.venv/bin/python -m scripts.brandri.sync
```

出力は「状態変化なし」か、変化した記事の表。**変化があったらコミットする**
（`drafts/` → `scheduled/` のファイル移動が working tree に出る）。

---

## 3. 各段階の手順

### ① 執筆（月〜水）— 壁打ち方式

**いきなり書かない。いきなり Slack に出さない。**

```
/brandri-draft            ← テーマを添える（例：「インナーブランディング 事例で」）
```

テーマ指定がなければ、Claude Code が `keyword-progress.md` の次の未着手キーワードを提案する。

```
①-a 構成案の壁打ち
    Claude Code が1メッセージで提示：
      1. 痛みの仮説（そのキーワードで検索する経営者は何に困っているか）
      2. 最近のトレンド（日次サマリ＋web検索。出典URL付き）
      3. 参考記事（実在確認済み。URL付き）
      4. 記事の構成（title案2〜3・leadの一文・01〜04の見出しと要旨・pullquote・takeaways）
      5. Highliteの見解（brand-voice を踏まえ、この記事でどこに立つか）
      6. 既存記事との重複チェック
    → 古川がレビュー → 指摘箇所だけ修正 → OKまで繰り返す
    → OKが出た時点で keyword-progress.md を `執筆中` に

①-b 執筆 → 本文レビュー
    Claude Code が drafts/ に md を保存し、本文全文をチャットに貼る
    → 古川がレビュー → 指摘箇所だけ修正 → OKまで繰り返す
```

規範：`.claude/agents/brandri-writer-executive.md`／句読点：`marketing/kutouten-rules.md`

### ② 本人OK → 投稿（水）

**古川が「OK」「Slackに出して」と明示するまで、Claude Code は post を実行しない。**

チャットレビューで見ておく最重要チェック：

- **タイトルだけで何の記事か分かるか**（痛み語＋題材。キーワードを入れてよい）
- **lead・01章・02章に「ブランディング」が出ていないか**（本文の初出は03章。タイトルは例外）
- **記事になっているか**（台詞→反応の語り、情景描写、独白の書き出しは小説。不可）
- **句読点**（一文約50字・読点1〜2個。読点3つ以上の文がないか）
- 禁止語（世界観／トンマナ／クリエイティブ／パーパス／ナラティブ 等）が混じっていないか
- 実在確認できない固有名詞・数値・引用が入っていないか

問題なければ、**push してから post する。**

```bash
git add marketing/articles/brandri && git commit -m "brandri: draft" && git push
.venv/bin/python -m scripts.brandri.post marketing/articles/brandri/drafts/<file>.md
```

**順番を逆にすると、Slack の「本文を読む」リンクが 404 になる。**
post は front matter に `slack.ts` を書き込み、二重投稿を拒否する。
post 後、`keyword-progress.md` の status を `レビュー中` にしてもう一度 commit / push する。

### ③ レビュー（随時・Slack）

レビュー者の操作ルールは `docs/review-operations.md`。実行者側の仕事は
**「反応があったら `sync` を打つ」**ことだけ。

### ④ 修正（随時）

1. 該当 md を Claude Code で開き、スレッドのコメントを反映して本文を直す
2. Slack 側を閉じる：

```bash
.venv/bin/python -m scripts.brandri.resolve marketing/articles/brandri/drafts/<file>.md --note "②の切り口を差し替え"
```

- `version` を +1、スレッドに「修正を反映しました（v{n}）」を返信
- **未処理コメント全部に ☑️ が付く**
- 👍 が付いた状態なら「承認を取り消す場合は👍を外してください」を添える

**resolve を忘れると、次の `sync` が同じコメントを何度でも「修正待ち」として拾う。**
このコマンドは本文を書き換えない。先に md を直しておくこと。

### ⑤ 承認 → 公開予約（随時）

👍 が付いたら `sync`。🗓️ が付き、スレッドに公開予定日が返信され、`scheduled/` へ移動する。

```bash
.venv/bin/python -m scripts.brandri.sync
git add marketing/articles/brandri && git commit -m "brandri: schedule" && git push
```

### ⑥ 公開（木）

```bash
# 1. 公開対象の最終確認（実行時の👍を取り直して確認する）
.venv/bin/python -m scripts.brandri.publish

# 2. Brandri形式のJSONに変換 → <file>.brandri.json が同じ場所に出る
.venv/bin/python -m scripts.brandri.to_brandri marketing/articles/brandri/scheduled/<file>.md

# 3. Brandri（別リポジトリ）に投入
cd ~/Documents/vscode/Brandri
node scripts/write-knowledge.mjs <出力された .brandri.json> --next-num

# 4. ビルドして公開
node scripts/build-data.mjs
git add -A && git commit -m "brandri: add article" && git push
```

- `publish` は**木曜以外は何もしない**（別の日に回すなら `--force`）
- `publish.mode: manual` なので、bot は最終原稿をスレッドに投稿するだけ。✅ はまだ付かない
- 👍 が消えていれば、ここでキャンセルされて `drafts/` に戻る
- `to_brandri` の警告：`sections が3節未満` → 投入時に落ちるので章立てを直す。
  `related が未設定` → 警告のみ（3本入れるのが望ましい）
- `write-knowledge.mjs` は検証に落ちると `articles.json` を**一切変更しない**ので、直して再実行すれば安全
- `--next-num` は第3トラック（401〜）の自動採番
- `build-data.mjs` は他の静的ページも再生成するため、**コミット時は生成物を全部 add**

### ⑦ 完了（木）

公開URL（`https://brandri.jp/articles/<slug>.html`）を該当記事の**Slackスレッドに返信**し、
最後にもう一度 `sync` を打つ。

```bash
cd ~/Documents/vscode/highlite-design-system
.venv/bin/python -m scripts.brandri.sync
git add marketing/articles/brandri && git commit -m "brandri: published" && git push
```

URL を検出して ✅ が付き、`published/` へ移動して完了。

---

## 4. 状態の判定ルール（`scripts/brandri/state.py`・決定論・LLM不使用）

上から順に見て、最初に当てはまった1つで状態が決まる。

```
🗑️ ＞ ✅ ＞ 鮮度切れ(28日) ＞ 公開予定日超過 ＞ 未処理コメント ＞ 👍 ＞ 👀 ＞ 未着手
```

**未処理コメントが 👍 より上にある。** ここが実運用でいちばん引っかかる。

- 「未処理コメント」＝ スレッド返信のうち、**bot 以外**が書き、**☑️ が付いていない**もの
- 判定は機械的なので、**「すげー」「なるほどw」のような雑談の返信も修正依頼として数えられる**。
  1件でも残っていると `revision_requested` になり、👍 があっても公開予約に進まない
- 対処：本文の修正が要るなら `resolve`。**雑談で閉じ忘れているだけなら、その返信に手で ☑️ を付ける**
- 返信にURLが含まれ、☑️ が無いと「公開URLの報告」とみなされる。参考リンクを貼るときは ☑️ で閉じる

**👍 は修正しても自動では外れない**（`revoke_approval_on_revision: false`）。
bot は 👀 / 👍 / 🗑️ に一切触らない。再承認が要るかはレビュー者が決める。

---

## 5. 締切

| 期間 | 何が起きるか |
|---|---|
| 投稿から4日 | 未着手だと bot がリマインドを1回だけ投稿（`sync` 実行時） |
| 投稿から8日 | 公開予定日（翌週木曜）。この日までに 👍 → `sync` → 🗓️ が要る |
| 公開予定日の翌日 | **自動ボツ（missed）。** 🗑️ が付き `dropped/` へ、`_dropped-log.md` に記録 |
| 投稿から28日 | 鮮度切れで自動ボツ |

公開予定日**当日**は生きている。その日の `publish` で公開できる。
翌日以降は `sync` でも `publish` でも自動ボツになる。

---

## 6. つまずき集

| 症状 | 原因 | 対処 |
|---|---|---|
| `ImportError: cannot import name 'TypeGuard'` | `python3`（3.9）で実行した | `.venv/bin/python` で実行する |
| 承認したのに 🗓️ が付かない | `sync` を打っていない | `sync` を実行 |
| `sync` を打っても「状態変化なし」 | 未処理コメントが残って `revision_requested` になっている | 雑談返信に ☑️ を付ける／本文修正なら `resolve` |
| Slack の「本文を読む」が 404 | `post` を `push` より先に実行した | push してから post |
| 同じコメントが何度も検知される | `resolve` 忘れ | 修正後に必ず `resolve` |
| `write-knowledge.mjs` が落ちる | sections が3節未満 | 本文の章立てを直す |
| 記事を取り下げた後にサムネが残る | 再ビルドでは消えない | `project/assets/thumbs/j-<slug>.svg` を手動削除 |
| 状態ファイルと Slack がずれている | ファイル移動をコミットしていない | `sync` のたびにコミットする |

---

## 7. 判断に迷ったら

**公開しない側に倒す。** 1週飛ばしても損失はほぼないが、基準を下回る記事が出ると
ブランド資産としての意味が薄れる。
