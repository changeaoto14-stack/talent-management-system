// サンプルデータ（JSONファイル読み込みの代替）
const sampleCompanies = [
  {
    "id": 0,
    "name": "📖 専門用語ガイド",
    "url": "#",
    "snapshot_count": 0,
    "change_count": 0,
    "last_checked": "2025-12-10",
    "current_title": "専門用語の説明",
    "previous_title": "",
    "current_description": "このガイドでは、監視システムで使用する「タイトル」「説明文」「メインコンテンツ」の意味を図解で説明しています。",
    "previous_description": "",
    "current_content": "",
    "previous_content": "",
    "isGuide": true,
    "guideImage": "terminology-guide.svg"
  },
  {
    "id": 0.5,
    "name": "カオナビ",
    "url": "https://www.kaonavi.jp/",
    "snapshot_count": 7,
    "change_count": 4,
    "last_checked": "2025-12-09 16:00:00",
    "current_title": "カオナビ｜人材データプラットフォーム",
    "previous_title": "カオナビ｜タレントマネジメントシステム",
    "current_description": "人材データを一元化し、経営・人事の意思決定を支援。カオナビで人材の見える化を実現します。",
    "previous_description": "シンプルな操作で人材情報を一元管理。顔写真で直感的にタレントマネジメント。",
    "current_content": "3,500社以上が導入する人材データプラットフォーム。顔と名前が一致する人材データベースで、戦略的人事を実現。評価、配置、育成を最適化。",
    "previous_content": "顔写真が並ぶ人材データベースで、社員の情報を見える化。人材配置や評価業務を効率化します。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "「タレントマネジメント」から「人材データプラットフォーム」へのポジショニング変更",
        "date": "2025-12-09",
        "detailedAnalysis": {
          "changeType": "市場ポジショニングの戦略的転換",
          "whatChanged": [
            "サイトタイトルを「タレントマネジメントシステム」から「人材データプラットフォーム」に変更",
            "トップページのキャッチコピーを「見える化」から「データドリブン経営支援」に刷新",
            "製品説明で「顔写真機能」から「データ分析機能」を前面に押し出し",
            "導入事例セクションで「3,500社」の実績を新たに追加し、信頼性を強調"
          ],
          "businessImpact": "単なる「タレントマネジメントツール」から「経営の意思決定を支援するデータプラットフォーム」へと格上げすることで、経営層へのアピールを強化。ツールの枠を超えた戦略的価値を訴求",
          "targetAudience": "大企業の経営層・CHRO（最高人事責任者）・経営企画部門",
          "competitiveContext": "タレントパレットが「AI」、SmartHRが「DX」を訴求する中、カオナビは「データプラットフォーム」という独自ポジションを確立。人材データの一元化・可視化という強みに集中",
          "estimatedBudget": "サイト全面リニューアル規模から推定800-1,200万円程度の投資",
          "metrics": {
            "titleLength": "変更前: 19文字 → 変更後: 18文字",
            "keywordDensity": "「データ」出現回数: 2回 → 12回",
            "visualChange": "メッセージングの根本的変更による戦略転換: 大"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「人材データ」「データドリブン人事」のキーワード最適化",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "検索エンジン最適化 (SEO) - データ軸へのシフト",
          "whatChanged": [
            "<title>タグに「人材データプラットフォーム」を追加",
            "<meta description>に「データドリブン」「経営支援」を織り込み",
            "h1見出しを「人材の見える化」→「人材データで経営を変える」に変更",
            "メインコンテンツに「データ分析」「データ活用」キーワードを戦略的に配置（密度約4%）"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "人材データ（月間検索数: 1,900回、競合性: 中）",
              "データドリブン 人事（月間検索数: 880回、競合性: 低）",
              "人材データベース（月間検索数: 3,200回、競合性: 高）"
            ],
            "keywordPlacement": {
              "titleTag": "「人材データプラットフォーム」を前方配置",
              "metaDescription": "「経営支援」「データドリブン」を自然に組み込み",
              "h1Tag": "主要キーワード「人材データ」を含む",
              "bodyContent": "共起語（可視化、分析、意思決定支援）を適切に配置"
            },
            "expectedImpact": "「人材データ」での検索順位を3-6ヶ月で5位以内に押し上げる狙い。経営層からの流入を月間40%増加を目標と推測"
          },
          "businessImpact": "経営層が検索する「データドリブン経営」関連キーワードでの上位表示を狙い、より決裁権限の高い層へのリーチを強化",
          "competitiveContext": "競合が「AI」「DX」に注力する中、カオナビは「データ」という普遍的で理解しやすいコンセプトで差別化",
          "technicalDetails": {
            "structuredData": "組織・製品のSchema.orgマークアップを強化し、リッチスニペット表示を最適化",
            "pageSpeed": "ページ読み込み速度を0.4秒短縮（コアウェブバイタル改善）",
            "mobileOptimization": "モバイル体験を全面的に刷新し、スマホからのCV率向上を狙う"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "ロングテールキーワード「人材配置 最適化」で上位表示対策",
        "date": "2025-12-07",
        "detailedAnalysis": {
          "changeType": "ロングテールSEO戦略",
          "whatChanged": [
            "「人材配置」専用ランディングページを新規作成",
            "「最適化」「シミュレーション」「異動」などのサブキーワードを網羅",
            "導入事例で「配置最適化で生産性30%向上」の具体的数値を追加",
            "内部リンク構造を最適化し、人材配置関連ページへの導線を強化"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "人材配置 最適化（月間検索数: 720回、競合性: 低）",
              "人材配置 シミュレーション（月間検索数: 390回、競合性: 低）",
              "適材適所 ツール（月間検索数: 480回、競合性: 中）"
            ],
            "keywordPlacement": {
              "titleTag": "「人材配置最適化ソリューション」を専用ページに設定",
              "metaDescription": "「シミュレーション」「可視化」「データ分析」を含む",
              "h1Tag": "「データで実現する人材配置最適化」",
              "bodyContent": "課題→解決策→事例の流れでキーワードを自然に配置"
            },
            "expectedImpact": "ロングテールキーワードで確実に1-3位を獲得し、ニッチだが意欲の高い見込み客を獲得。CVRは通常の2倍以上を期待"
          },
          "businessImpact": "「人材配置」という具体的な課題を持つ企業へのピンポイントなアプローチ。競合が手薄なキーワードで先行者利益を確保",
          "competitiveContext": "大手競合が一般的なキーワードに注力する中、カオナビは具体的な業務課題キーワードで差別化",
          "technicalDetails": {
            "structuredData": "FAQ構造化データで「人材配置でよくある質問」をリッチリザルト化",
            "pageSpeed": "専用ページの読み込みを1秒以内に最適化",
            "mobileOptimization": "配置シミュレーション機能のモバイル操作性を大幅改善"
          }
        }
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "経営層向けLinkedIn広告と検索連動型広告の統合キャンペーン",
        "date": "2025-12-06",
        "detailedAnalysis": {
          "changeType": "マルチチャネル広告戦略・経営層ターゲティング",
          "whatChanged": [
            "LinkedIn広告でCHRO・経営企画部門へのターゲティング広告を新規展開",
            "Google検索広告の広告文を「経営視点」に刷新",
            "YouTube広告で「データで変わる経営判断」をテーマにした動画を展開",
            "リターゲティング広告で導入ROIシミュレーターへの誘導を強化"
          ],
          "adPlatforms": {
            "linkedin": {
              "budget": "推定月額150-200万円",
              "targeting": "役職: CHRO/人事部長/経営企画、企業規模: 従業員500名以上、業種: 製造/IT/金融",
              "adFormat": "スポンサードコンテンツ + InMail",
              "message": "「人材データで経営判断を加速」「3,500社が選ぶ理由」"
            },
            "googleSearch": {
              "budget": "推定月額250-350万円",
              "targetKeywords": ["人材データ プラットフォーム", "タレントマネジメント 大企業", "人事 データ分析"],
              "adCopy": "見出し: 「3,500社導入｜人材データプラットフォーム」 説明文: 「経営の意思決定を人材データで支援。カオナビ」",
              "ctr": "クリック率目標: 6%以上（業界平均3.5%）"
            },
            "youtube": {
              "budget": "推定月額100-150万円",
              "videoLength": "30秒（経営層向け簡潔版）",
              "message": "「データで可視化される人材価値」をストーリー訴求、導入企業の経営者インタビュー"
            },
            "retargeting": {
              "budget": "推定月額80-100万円",
              "strategy": "サイト訪問者に対し「ROIシミュレーター」「導入事例集」への誘導",
              "platform": "Google Display + Facebook/Instagram"
            }
          },
          "businessImpact": "LinkedIn広告により決裁権を持つ経営層へ直接リーチ。従来のマーケ・人事担当者向けだけでなく、トップダウンでの導入決定を促進。大型案件の獲得を加速",
          "competitiveContext": "競合がGoogle広告中心の中、カオナビはLinkedInを活用し、より上位の意思決定者にリーチする戦略で差別化",
          "roi": "広告投資対効果(ROAS)目標: 400%以上（LinkedIn経由は単価高いが大型案件のためROI重視）",
          "testingStrategy": "LinkedIn vs Google Display でCHRO層へのリーチ効果を比較検証。経営視点メッセージ vs 人事視点メッセージのA/Bテスト実施"
        }
      }
    ],
    "screenshots": {
      "highlights": [
        {
          "genre": "HP",
          "type": "text_change",
          "description": "メインキャッチコピーを「顔と名前が一致する」から「人材データで経営を変える」に変更",
          "coords": { "x": 0, "y": 50, "width": 400, "height": 30 }
        },
        {
          "genre": "SEO",
          "type": "content_addition",
          "description": "「3,500社導入」の実績数値を新たに追加し、信頼性を強調",
          "coords": { "x": 20, "y": 150, "width": 360, "height": 40 }
        },
        {
          "genre": "HP",
          "type": "style_update",
          "description": "「データ分析」セクションを新設し、グラフ・チャートのビジュアルを追加",
          "coords": { "x": 20, "y": 220, "width": 360, "height": 80 }
        }
      ]
    }
  },
  {
    "id": 1,
    "name": "タレントパレット",
    "url": "https://www.pa-consul.co.jp/talentpalette/",
    "snapshot_count": 5,
    "change_count": 3,
    "last_checked": "2025-12-09 15:30:00",
    "current_title": "タレントパレット | AI人事プラットフォーム",
    "previous_title": "タレントパレット | 科学的人事を実現",
    "current_description": "AIで人材の可能性を最大化。科学的人事プラットフォーム「タレントパレット」で、データドリブンな人事戦略を実現しましょう。",
    "previous_description": "科学的人事で組織の可能性を最大化します。",
    "current_content": "最新のAI技術を活用した人事プラットフォーム。従業員のスキル分析、パフォーマンス予測、最適な配置提案まで。",
    "previous_content": "人事データの可視化と分析で、組織運営をサポートします。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "メインサイトでAI機能を前面に押し出したリブランディング",
        "date": "2025-12-09",
        "detailedAnalysis": {
          "changeType": "戦略的リポジショニング",
          "whatChanged": [
            "サイトタイトルを「科学的人事を実現」から「AI人事プラットフォーム」に変更",
            "メインビジュアルのキャッチコピーを刷新し、AI技術を前面に押し出す表現に",
            "ブランドカラーをブルー(#3b82f6)からグリーン(#10b981)に変更し、革新性を強調",
            "製品説明セクションで「AI機能」「データドリブン」のワードを3箇所追加"
          ],
          "businessImpact": "競合との差別化を図り、AI領域でのポジショニングを強化。テクノロジー先進性を訴求することで、DX推進企業からの引き合い増加を狙う戦略と推測",
          "targetAudience": "大企業の人事部門・経営層（特にDX推進担当者）",
          "competitiveContext": "SmartHRやHRMOSが「DXプラットフォーム」を訴求する中、タレントパレットは「AI」に特化したポジショニングで差別化を図っている",
          "estimatedBudget": "サイトリニューアル規模から推定500-800万円程度の投資",
          "metrics": {
            "titleLength": "変更前: 18文字 → 変更後: 23文字",
            "keywordDensity": "「AI」出現回数: 0回 → 8回",
            "visualChange": "ブランドカラー変更による視覚的インパクト: 大"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「AI人事」「データドリブン人事」のキーワード強化",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "検索エンジン最適化 (SEO) - キーワード戦略変更",
          "whatChanged": [
            "<title>タグに「AI人事プラットフォーム」を追加（SEO最重要タグ）",
            "<meta description>に「データドリブン」「科学的人事」を織り込み",
            "h1見出しタグを「科学的人事」→「AI人事プラットフォーム」に最適化",
            "メインコンテンツ内に「AI」関連キーワードを戦略的に配置（密度約3%）"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "AI人事（月間検索数: 2,400回、競合性: 中）",
              "データドリブン人事（月間検索数: 880回、競合性: 低）",
              "タレントマネジメント AI（月間検索数: 720回、競合性: 中）"
            ],
            "keywordPlacement": {
              "titleTag": "「AI人事プラットフォーム」を前方配置（最も重要）",
              "metaDescription": "「データドリブン」「科学的人事」を自然な文脈で使用",
              "h1Tag": "主要キーワード「AI人事」を含む",
              "bodyContent": "共起語（機械学習、予測分析、自動化）を適切に配置"
            },
            "expectedImpact": "「AI人事」での検索順位を3-6ヶ月で10位以内に押し上げる狙い。オーガニック流入を月間30%増加を目標と推測"
          },
          "businessImpact": "SEO経由のリード獲得コストを削減しつつ、質の高い見込み顧客（AI導入検討企業）の流入増を狙う",
          "competitiveContext": "競合他社がまだ「AI」を前面に出していない今、先行者利益を得るための先制攻撃",
          "technicalDetails": {
            "structuredData": "組織・製品のSchema.orgマークアップを追加し、リッチスニペット表示を狙う",
            "pageSpeed": "ページ読み込み速度を0.3秒短縮（SEO評価向上）",
            "mobileOptimization": "モバイルファーストインデックス対応を強化"
          }
        }
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "Google広告でAI技術訴求の新クリエイティブ展開",
        "date": "2025-12-07",
        "detailedAnalysis": {
          "changeType": "広告クリエイティブ刷新・ターゲティング変更",
          "whatChanged": [
            "Google検索広告の広告文を「科学的人事」から「AI人事」訴求に変更",
            "ディスプレイ広告のバナーデザインを刷新（AI/機械学習のビジュアル要素追加）",
            "YouTube広告で新たに「AI活用事例」を訴求する15秒動画を展開",
            "リターゲティング広告のメッセージを「AI機能」体験訴求に最適化"
          ],
          "adPlatforms": {
            "googleSearch": {
              "budget": "推定月額200-300万円",
              "targetKeywords": ["AI 人事システム", "タレントマネジメント AI", "人事DX AI"],
              "adCopy": "見出し: 「AI人事プラットフォーム｜タレントパレット」 説明文: 「4,300社導入。AIで最適配置を自動提案」",
              "ctr": "クリック率目標: 5%以上（業界平均3.5%）"
            },
            "googleDisplay": {
              "budget": "推定月額100-150万円",
              "targeting": "人事・経営層、企業規模500名以上、業種: IT/製造/金融",
              "creative": "AIアイコン・未来的デザイン採用"
            },
            "youtube": {
              "budget": "推定月額80-120万円",
              "videoLength": "15秒・30秒の2パターン",
              "message": "AI導入による業務効率化50%のストーリー訴求"
            }
          },
          "businessImpact": "広告経由のコンバージョン率を15-20%向上させ、獲得単価(CPA)を最適化。特にAI導入に関心の高い大企業層へのリーチを強化",
          "competitiveContext": "競合がまだ従来型の訴求（効率化、クラウド化）に留まる中、AI差別化で広告効果の最大化を狙う",
          "roi": "広告投資対効果(ROAS)目標: 300%以上（広告費1円あたり3円の売上）",
          "testingStrategy": "A/Bテストで「AI」vs「データドリブン」訴求を比較検証し、最適クリエイティブを選定"
        }
      }
    ],
    "screenshots": {
      "before": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZmFmYyIvPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNjAiIGZpbGw9IiMzYjgyZjYiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjM1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij7jgr/jg6zjg7Pjg4jjg5Hjg6zjg4Pjg4g8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSI1NSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+56eR5a2m55qE5Lq65LqL44KS5a6f54++PC90ZXh0PgogIDxyZWN0IHg9IjIwIiB5PSI4MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U1ZTdlYiIgcng9IjQiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjEwNSIgZmlsbD0iIzM3NDE1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij7np5HlrabnmoTkurrkuovjgafntYTnuYflga/otrXjgpLmnIDlpKflhJrjgZfjgb7jgZnjgII8L3RleHQ+CiAgPHJlY3QgeD0iMjAiIHk9IjE0MCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiNlNWU3ZWIiLz4KICA8dGV4dCB4PSIzMCIgeT0iMTYwIiBmaWxsPSIjMzc0MTUxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPuS6uuS6i+ODh+ODvOOCv+OBruWPr+imluWMluOBqOWIhuaekOOBpzwvdGV4dD4KICA8dGV4dCB4PSIzMCIgeT0iMTgwIiBmaWxsPSIjMzc0MTUxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPue1hOe5h+mBi+WQhOOCkuOCteODneODvOODiOOBl+OBvuOBmzwvdGV4dD4KICA8cmVjdCB4PSIzMDAiIHk9IjI1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNmI3MjgwIiByeD0iNSIvPgogIDx0ZXh0IHg9IjM0MCIgeT0iMjcwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj7or73ntLDjga/jgZPjgaHjgonjgYs8L3RleHQ+Cjwvc3ZnPg==",
      "after": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZmFmYyIvPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNjAiIGZpbGw9IiMxMGI5ODEiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjM1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij7jgr/jg6zjg7Pjg4jjg5Hjg6zjg4Pjg4g8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSI1NSIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+QUnjgoTkurrkuovjg5fjg6njg4Pjg4jjg5Xjgqnjg7zjg6A8L3RleHQ+CiAgPHJlY3QgeD0iMjAiIHk9IjgwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZGNmY2U3IiByeD0iNCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTA1IiBmaWxsPSIjMTY2NTM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkFJ44Gn5Lq655qE44Gu5Y+v6IO95oCn44KS5pyA5aSn5YyW44CC44OH44O844K/44OJ44Oq44OW44Oz44Gq5Lq65LqL5oiM55Wl44KS5a6f54++PC90ZXh0PgogIDxyZWN0IHg9IjIwIiB5PSIxNDAiIHdpZHRoPSIzNjAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZTVlN2ViIi8+CiAgPHRleHQgeD0iMzAiIHk9IjE2MCIgZmlsbD0iIzM3NDE1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj7mnIDmlrDjga5BSea4gOixk+OCkua0u+eUqOOBl+OBn+S6uuS6i+ODl+ODqeODg+ODiOODleOCqeODvOODoDwvdGV4dD4KICA8dGV4dCB4PSIzMCIgeT0iMTgwIiBmaWxsPSIjMzc0MTUxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPuW+k+aWreiAheOBruOCueOCreODq+WIhuaekOOAgeODh+ODvOOCv+OBruacgOmBqeOBquemjeaDreaPkOahiOOBvuOBpzwvdGV4dD4KICA8cmVjdCB4PSIyMCIgeT0iMjAwIiB3aWR0aD0iNjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmMGY5ZmYiIHJ4PSIxMCIvPgogIDx0ZXh0IHg9IjUwIiB5PSIyMTMiIGZpbGw9IiMzYjgyZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij7jg5Xjgqnjg7zjgqQ8L3RleHQ+CiAgPHJlY3QgeD0iMTAwIiB5PSIyMDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2YwZjlmZiIgcng9IjEwIi8+CiAgPHRleHQgeD0iMTMwIiB5PSIyMTMiIGZpbGw9IiMzYjgyZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5BSea4gOixkzwvdGV4dD4KICA8cmVjdCB4PSIxODAiIHk9IjIwMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjBmOWZmIiByeD0iMTAiLz4KICA8dGV4dCB4PSIyMjAiIHk9IjIxMyIgZmlsbD0iIzNiODJmNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiPuODh+ODvOOCv+WIhuaekjwvdGV4dD4KICA8cmVjdCB4PSIzMDAiIHk9IjI1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMTBiOTgxIiByeD0iNSIvPgogIDx0ZXh0IHg9IjM0MCIgeT0iMjcwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIj7or73ntLDjga/jgZPjgaHjgonjgYs8L3RleHQ+Cjwvc3ZnPg==",
      "highlights": [
        {
          "genre": "HP",
          "type": "color_change",
          "description": "ヘッダー色がブルーから緑に変更（AI強調のブランドカラー変更）",
          "coords": { "x": 0, "y": 0, "width": 400, "height": 60 }
        },
        {
          "genre": "HP",
          "type": "text_change",
          "description": "サブタイトルが「科学的人事を実現」から「AI人事プラットフォーム」に変更",
          "coords": { "x": 0, "y": 40, "width": 400, "height": 20 }
        },
        {
          "genre": "SEO",
          "type": "content_addition",
          "description": "AI機能のタグ（フィーチャー、AI技術、データ分析）を新規追加",
          "coords": { "x": 20, "y": 200, "width": 260, "height": 20 }
        },
        {
          "genre": "AD",
          "type": "style_update",
          "description": "メインコンテンツエリアの背景色を変更（より現代的なデザイン）",
          "coords": { "x": 20, "y": 80, "width": 360, "height": 40 }
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "SmartHR",
    "url": "https://smarthr.jp/",
    "snapshot_count": 8,
    "change_count": 5,
    "last_checked": "2025-12-09 15:25:00",
    "current_title": "SmartHR｜人事・労務DXプラットフォーム",
    "previous_title": "SmartHR｜クラウド人事・労務ソフト",
    "current_description": "人事・労務の全てをデジタル化。SmartHRでペーパーレス化を実現し、従業員体験を向上させましょう。",
    "previous_description": "クラウド人事・労務ソフトで業務効率化を実現。",
    "current_content": "人事・労務業務の完全デジタル化。入社手続き、勤怠管理、給与計算まで一元管理。従業員7万社が導入。",
    "previous_content": "クラウド人事・労務ソフトで面倒な手続きを簡単に。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "DXプラットフォームとしてのポジショニング強化",
        "date": "2025-12-09"
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「人事DX」「ペーパーレス」キーワードの最適化",
        "date": "2025-12-08"
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "従業員体験向上を訴求する動画広告の新展開",
        "date": "2025-12-06"
      }
    ],
  },
  {
    "id": 3,
    "name": "HRブレイン",
    "url": "https://www.hrbrain.jp/",
    "snapshot_count": 4,
    "change_count": 2,
    "last_checked": "2025-12-09 15:20:00",
    "current_title": "HRBrain｜人事評価・タレントマネジメントシステム",
    "previous_title": "HRBrain｜人事評価システム",
    "current_description": "人事評価・タレントマネジメントの新しいスタンダード。組織の成長を加速させるHRプラットフォーム。",
    "previous_description": "シンプルで使いやすい人事評価システム。",
    "current_content": "人事評価、タレントマネジメント、組織サーベイまで。データドリブンな人事戦略をサポート。3,500社導入実績。",
    "previous_content": "人事評価業務を効率化。評価プロセスの透明化を実現。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "タレントマネジメント機能の大幅アップデート告知",
        "date": "2025-12-08"
      },
      {
        "type": "SEO",
        "category": "SEO対策", 
        "description": "「タレントマネジメント」「組織サーベイ」SEO強化",
        "date": "2025-12-07"
      }
    ]
  },
  {
    "id": 4,
    "name": "HRMOS",
    "url": "https://www.hrmos.co/",
    "snapshot_count": 6,
    "change_count": 4,
    "last_checked": "2025-12-09 15:15:00",
    "current_title": "HRMOS｜人事DXプラットフォーム",
    "previous_title": "HRMOS｜総合人事システム",
    "current_description": "採用から人材開発まで。統合型人事DXプラットフォームで組織の成長を支援します。",
    "previous_description": "総合人事システムで人事業務を一元化。",
    "current_content": "採用管理、人材開発、勤怠管理、給与計算を統合。人事DXを実現する包括的ソリューション。",
    "previous_content": "人事業務全般をサポートする総合システムです。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "人事DXプラットフォームとしてのリブランディング",
        "date": "2025-12-09"
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "採用DXソリューション強化の広告展開",
        "date": "2025-12-08"
      }
    ]
  },
  {
    "id": 5,
    "name": "One人事",
    "url": "https://onehr.jp/",
    "snapshot_count": 3,
    "change_count": 1,
    "last_checked": "2025-12-09 15:10:00",
    "current_title": "One人事｜ワンストップ人事労務システム",
    "previous_title": "One人事｜人事労務システム",
    "current_description": "労務管理から人材開発まで、ワンストップで実現。One人事で人事業務の効率化を。",
    "previous_description": "人事労務業務をシンプルに効率化。",
    "current_content": "労務管理、給与計算、人事評価、タレントマネジメントまで一つのシステムで。60万ユーザー導入。",
    "previous_content": "人事労務業務の効率化をサポートします。",
    "changes": [
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「ワンストップ人事」キーワード最適化",
        "date": "2025-12-08"
      }
    ]
  },
  {
    "id": 6,
    "name": "ジンジャー",
    "url": "https://jinjer.co.jp/",
    "snapshot_count": 7,
    "change_count": 3,
    "last_checked": "2025-12-09 15:05:00",
    "current_title": "jinjer｜人事労務プラットフォーム",
    "previous_title": "jinjer｜クラウド人事労務システム",
    "current_description": "人の可能性を最大限に。クラウド人事労務プラットフォームjinjerで働き方改革を推進。",
    "previous_description": "クラウド人事労務システムで業務効率化。",
    "current_content": "勤怠管理、労務管理、給与計算、人事評価。すべてがつながる人事労務プラットフォーム。",
    "previous_content": "人事労務業務をクラウドで効率化します。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新", 
        "description": "プラットフォーム統合メッセージの強化",
        "date": "2025-12-09"
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "働き方改革推進の新TV CM展開",
        "date": "2025-12-07"
      }
    ]
  },
  {
    "id": 7,
    "name": "オフィスステーション",
    "url": "https://www.officestation.jp/talentmanagement/",
    "snapshot_count": 2,
    "change_count": 1,
    "last_checked": "2025-12-09 15:00:00",
    "current_title": "オフィスステーション タレントマネジメント",
    "previous_title": "オフィスステーション 人材管理",
    "current_description": "従業員サーベイと人事評価で組織力向上。労務管理No.1のオフィスステーションが提供。",
    "previous_description": "人材管理・育成をサポートする新機能。",
    "current_content": "従業員の声を可視化し、一人ひとりの成長をサポート。労務管理との連携で包括的な人事戦略を。",
    "previous_content": "人材管理・育成領域への新たな取り組み。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "タレントマネジメント新機能の正式リリース",
        "date": "2025-12-09"
      }
    ]
  },
  {
    "id": 8,
    "name": "COMPANY",
    "url": "https://www.ctm.works-hi.co.jp/",
    "snapshot_count": 5,
    "change_count": 2,
    "last_checked": "2025-12-09 14:55:00",
    "current_title": "COMPANY Talent Management｜統合タレントマネジメント",
    "previous_title": "COMPANY｜タレントマネジメントシステム",
    "current_description": "日本企業の複雑な人事制度に最適化。統合タレントマネジメントシステムで戦略的人事を実現。",
    "previous_description": "タレントマネジメントシステムで人材活用。",
    "current_content": "人材の可視化から分析、育成、配置まで。大手企業に必要な機能を統合した直感的システム。",
    "previous_content": "タレントマネジメントで人材の可能性を最大化。",
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "統合タレントマネジメントへのサービス名変更",
        "date": "2025-12-08"
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "大手企業向けタレマネ市場でのSEO強化",
        "date": "2025-12-06"
      }
    ]
  }
];

const sampleChanges = [
  {
    "id": 1,
    "company_id": 1,
    "change_type": "title_change",
    "old_value": "タレントパレット | 科学的人事を実現",
    "new_value": "タレントパレット | AI人事プラットフォーム",
    "detected_at": "2025-12-09 15:30:00",
    "company_name": "タレントパレット"
  },
  {
    "id": 2,
    "company_id": 1,
    "change_type": "description_change",
    "old_value": "科学的人事で組織の可能性を最大化します。",
    "new_value": "AIで人材の可能性を最大化。科学的人事プラットフォーム「タレントパレット」で、データドリブンな人事戦略を実現しましょう。",
    "detected_at": "2025-12-09 15:25:00",
    "company_name": "タレントパレット"
  },
  {
    "id": 3,
    "company_id": 2,
    "change_type": "title_change",
    "old_value": "SmartHR｜クラウド人事・労務ソフト",
    "new_value": "SmartHR｜人事・労務DXプラットフォーム",
    "detected_at": "2025-12-09 15:20:00",
    "company_name": "SmartHR"
  },
  {
    "id": 4,
    "company_id": 2,
    "change_type": "content_change",
    "old_value": "クラウド人事・労務ソフトで面倒な手続きを簡単に。",
    "new_value": "人事・労務業務の完全デジタル化。入社手続き、勤怠管理、給与計算まで一元管理。従業員7万社が導入。",
    "detected_at": "2025-12-09 15:15:00",
    "company_name": "SmartHR"
  },
  {
    "id": 5,
    "company_id": 3,
    "change_type": "title_change",
    "old_value": "HRBrain｜人事評価システム",
    "new_value": "HRBrain｜人事評価・タレントマネジメントシステム",
    "detected_at": "2025-12-09 15:10:00",
    "company_name": "HRブレイン"
  },
  {
    "id": 6,
    "company_id": 4,
    "change_type": "title_change",
    "old_value": "HRMOS｜総合人事システム",
    "new_value": "HRMOS｜人事DXプラットフォーム",
    "detected_at": "2025-12-09 15:05:00",
    "company_name": "HRMOS"
  },
  {
    "id": 7,
    "company_id": 5,
    "change_type": "description_change",
    "old_value": "人事労務業務をシンプルに効率化。",
    "new_value": "労務管理から人材開発まで、ワンストップで実現。One人事で人事業務の効率化を。",
    "detected_at": "2025-12-09 15:00:00",
    "company_name": "One人事"
  },
  {
    "id": 8,
    "company_id": 6,
    "change_type": "content_change",
    "old_value": "人事労務業務をクラウドで効率化します。",
    "new_value": "勤怠管理、労務管理、給与計算、人事評価。すべてがつながる人事労務プラットフォーム。",
    "detected_at": "2025-12-09 14:55:00",
    "company_name": "ジンジャー"
  }
];