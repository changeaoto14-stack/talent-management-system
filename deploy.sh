#!/bin/bash
# GitHub自動デプロイスクリプト

echo "GitHub Personal Access Token (PAT) を入力してください:"
read -s GITHUB_TOKEN

# リポジトリ作成
echo "\nリポジトリを作成中..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -X POST https://api.github.com/user/repos \
     -d '{"name":"talent-market-monitor","description":"タレントマネジメント業界 変化追跡システム","private":false}' \
     2>/dev/null

# リモート設定
echo "Gitリモートを設定中..."
git remote remove origin 2>/dev/null || true
git remote add origin https://changeaoto14:$GITHUB_TOKEN@github.com/changeaoto14/talent-market-monitor.git

# プッシュ
echo "コードをプッシュ中..."
git push -u origin main

# GitHub Pages有効化
echo "GitHub Pagesを有効化中..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -X POST https://api.github.com/repos/changeaoto14/talent-market-monitor/pages \
     -d '{"source":{"branch":"main","path":"/"}}' \
     2>/dev/null

echo "\n✅ デプロイ完了！"
echo "🌐 サイトURL: https://changeaoto14.github.io/talent-market-monitor/"
echo "\n数分後にアクセスできるようになります。"
