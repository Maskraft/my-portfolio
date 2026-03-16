# Syu — Portfolio

Web エンジニア **Syu** のポートフォリオサイト。エンジニアリングの力で、美しくインタラクティブなプロダクト体験を創り出すことをテーマにしています。

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| スムーススクロール | Lenis (@studio-freight/lenis) |

## 主な機能

- **カスタムカーソー** — リンク・ボタンホバー時にインタラクティブに変化
- **Hero セクション** — 視差スクロール付きのフルスクリーン表示
- **Philosophy マーキー** — 開発哲学を無限ループするアニメーションで表示
- **Projects ベントーグリッド** — プロジェクト一覧をグリッドレイアウトで表示
- **Skills セクション** — スキル一覧をアニメーション付きで表示
- **メッシュグラジエント背景** + ノイズオーバーレイによるビジュアル演出

## ローカル起動

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

## ビルド

```bash
npm run build
npm start
```

## ディレクトリ構成

```
app/
├── page.tsx        # メインページ（全セクション含む）
├── layout.tsx      # ルートレイアウト・フォント設定
└── globals.css     # グローバルスタイル・アニメーション定義
```
