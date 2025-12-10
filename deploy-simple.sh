#!/bin/bash
# GitHub自動デプロイスクリプト（トークン引数版）

if [ -z "$1" ]; then
  echo "使い方: ./deploy-simple.sh <GitHub_Personal_Access_Token>"
  echo ""
  echo "例: ./deploy-simple.sh ghp_xxxxxxxxxxxx"
  exit 1
fi

GITHUB_TOKEN=$1

# リポジトリ作成
echo "リポジトリを作成中..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -X POST https://api.github.com/user/repos \
     -d '{"name":"talent-market-monitor","description":"タレントマネジメント業界 変化追跡システム","private":false}' \
     2>/dev/null

sleep 2

# リモート設定
echo "Gitリモートを設定中..."
git remote remove origin 2>/dev/null || true
git remote add origin https://changeaoto14:$GITHUB_TOKEN@github.com/changeaoto14/talent-market-monitor.git

# プッシュ
echo "コードをプッシュ中..."
git push -u origin main

sleep 2

# GitHub Pages有効化
echo "GitHub Pagesを有効化中..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -X POST https://api.github.com/repos/changeaoto14/talent-market-monitor/pages \
     -d '{"source":{"branch":"main","path":"/"}}' \
     2>/dev/null

echo ""
echo "✅ デプロイ完了！"
echo "🌐 サイトURL: https://changeaoto14.github.io/talent-market-monitor/"
echo ""
echo "数分後にアクセスできるようになります。"
