<details><summary>初回導入</summary>

### I. Docker環境を準備

環境を構築

### II. 開発コンテナを開く

```
Dev Containers: Open Folder in Container...
```

### III. gitクローン

1. Dir移動

```
cd /usr/src/app/
```

2. リポジトリをgit cloneする

### IV. ライブラリ解決

```
yarn
```

</details>

## 開発時コマンド

### 開発コンテナのターミナルで、適宜実行

| 操作            | コマンド         | 備考                     |
| --------------- | ---------------- | ------------------------ |
| 作業Dir         | `cd react-vite`  |                          |
| Webサービス起動 | `yarn dev`       | `http://localhost:5173/` |
| UIカタログ起動  | `yarn storybook` | `http://localhost:6006/` |
| ビルド          | `yarn build`     |                          |
