# プロジェクトについて
reactの汎用的コンポーネント集　
　
## 環境
- node 20.10.0
- react ^18.2.0
- vite 5.0.0

## 初回導入

### I. nodeの環境を準備
dockerなどでnodeを実行できる環境を構築

### II. gitクローン
1. 任意のディレクトリに移動
2. このリポジトリをgit cloneする

### III. ライブラリ解決
ターミナルでyarnしてリポジトリで使われるライブラリを解決する
 

## 開発時コマンド

### 開発コンテナのターミナルで、適宜実行

| 操作            | コマンド         | 備考                     |
| --------------- | ---------------- | ------------------------ |
| 作業Dir         | `cd react-vite`  |                          |
| Webサービス起動 | `yarn dev`       | `http://localhost:5173/` |
| UIカタログ起動  | `yarn storybook` | `http://localhost:6006/` |
| ビルド          | `yarn build`     |                          |


[開発標準](./react_template_docs/index.md)