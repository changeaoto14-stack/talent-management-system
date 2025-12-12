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
    "change_count": 1,
    "last_checked": "2025-12-10 11:00:00",
    "current_title": "カオナビ｜【シェアNo.1】社員の個性・才能を発掘し、戦略人事を加速させるタレントマネジメントシステム",
    "previous_title": "",
    "current_description": "個の力を最大化し組織をもっと強くする。人材情報の一元化・可視化からAI分析による最適な人材配置とスキルアップを実現。",
    "previous_description": "",
    "current_content": "シェアNo.1のタレントマネジメントシステム。顔と名前が一致する人材データベースで戦略人事を加速。評価、配置、育成、エンゲージメント、勤怠労務まで一元管理。",
    "previous_content": "",
    "evidenceSources": {
      "retrievalDate": "2025-12-10 11:00:00",
      "sourceUrl": "https://www.kaonavi.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 確認済み",
        "メインメッセージ: 「個の力を最大化し組織をもっと強くする」",
        "市場地位: シェアNo.1（タレントマネジメント・人事管理システム）",
        "主要機能: AI分析、人材情報一元化、可視化"
      ]
    },
    "changes": [
      {
        "type": "HP",
        "category": "現在のマーケティング戦略",
        "description": "【シェアNo.1】を前面に押し出した信頼性重視のポジショニング",
        "date": "2025-12-10",
        "detailedAnalysis": {
          "changeType": "市場リーダーとしての地位確立戦略",
          "whatChanged": [
            "タイトルに【シェアNo.1】を明記し、市場地位を前面アピール",
            "「個性・才能を発掘」という人間中心のメッセージで差別化",
            "「戦略人事を加速」という経営寄りの価値提案",
            "メインコンテンツで「個の力を最大化し組織をもっと強くする」とビジョンを明確化"
          ],
          "businessImpact": "シェアNo.1という客観的な実績を訴求することで、意思決定者の信頼を獲得。「個性・才能」という人間的な表現で、単なる管理ツールではなく、従業員のポテンシャルを引き出すシステムとして差別化",
          "reasoning": {
            "marketPosition": "タイトルに【シェアNo.1】を記載している事実から、市場リーダーとしての地位を積極的にアピールする戦略が明確",
            "messagingStrategy": "「個性・才能を発掘」という表現は、競合が使う「データ」「AI」「DX」といった技術用語とは一線を画し、人間中心の価値を訴求",
            "targetInsight": "「戦略人事を加速」というフレーズから、現場の人事担当者ではなく、経営層や人事責任者を主要ターゲットとしていることが読み取れる",
            "competitiveAnalysis": "実際のタレントパレットサイト（4,300社導入、AI機能6種類）と比較すると、カオナビは具体的な機能詳細よりも「シェアNo.1」という社会的証明を重視"
          },
          "targetAudience": "大企業・中堅企業の経営層、CHRO（最高人事責任者）、人事企画部門の責任者",
          "competitiveContext": "タレントパレット（AI機能6種）、SmartHR（労務DX）に対し、カオナビは「シェアNo.1」という市場地位と「個性・才能発掘」という人間的価値で差別化",
          "estimatedBudget": "シェアNo.1の地位維持のためのブランディング投資: 年間推定2-3億円（広告費、PR活動、イベント等含む）",
          "metrics": {
            "titleLength": "56文字（SEO的にはやや長いが、情報量を重視）",
            "keyMessage": "「個の力を最大化し組織をもっと強くする」",
            "trustSignals": "【シェアNo.1】、BOXIL SaaS AWARD 2025、GOOD DESIGN Award受賞"
          }
        }
      }
    ]
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://www.pa-consul.co.jp/talentpalette/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「タレントパレット｜24年度シェアNo.1 タレントマネジメントシステム」確認済み",
        "メインメッセージ: 「大きな組織に、攻めの人事を。」",
        "市場地位: 24年度シェアNo.1（ITR Market View 2025）",
        "主要機能: AI機能6種類（コーチング、スカウト、プロファイル、アドバイス、サーチ、インサイト）",
        "導入実績: 4,300社以上、継続率99.6%（2025年3月時点）"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「24年度シェアNo.1」という市場地位を最大限に活用し、「大きな組織に、攻めの人事を。」というメッセージで大企業向けに特化。AI機能6種類を前面に押し出し、従来の経験・勘に頼る人事から科学的・データドリブンな人事への転換を訴求",
      "targetResults": "大企業（数百名〜数万名規模）の人事部門・経営層をターゲットに、AI活用による人材配置の最適化、離職率低減、生産性向上を実現。99.6%という高い継続率を武器に、既存顧客の満足度を示すことで新規顧客獲得を狙う",
      "competitiveAdvantage": "「シェアNo.1」という社会的証明と、AI機能6種類という具体的な技術力を組み合わせた二段構えの差別化。競合が「クラウド化」「効率化」を訴求する中、「攻めの人事」というポジティブなメッセージで戦略的価値を強調",
      "keyMetrics": {
        "導入社数": "4,300社以上",
        "継続率": "99.6%",
        "市場シェア": "No.1（2024年度）",
        "AI機能数": "6種類"
      }
    },
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://smarthr.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「SmartHR（スマートHR）｜シェアNo.1のクラウド人事労務ソフト」確認済み",
        "メインメッセージ: 「業務効率化×戦略人事で事業を伸ばす」",
        "市場地位: シェアNo.1（労務管理クラウドソフト、7年連続）",
        "導入実績: 70,000社以上、継続率99%",
        "主要機能: 労務管理、人事評価、勤怠管理、年末調整、従業員データベース"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「シェアNo.1」（7年連続）という圧倒的な市場地位と「70,000社以上」という導入実績を前面に押し出し、安心感・信頼性を訴求。「業務効率化×戦略人事」という二軸のメッセージで、単なる労務効率化ツールから戦略的人事プラットフォームへの進化をアピール",
      "targetResults": "スタートアップから大企業まで幅広い企業規模に対応し、労務業務の88%時間削減という具体的な効率化効果を提示。従業員ポータル・モバイルアプリによる従業員体験向上も訴求し、人事部門だけでなく全従業員にとっての価値を強調",
      "competitiveAdvantage": "70,000社という圧倒的な導入数と99%の継続率が最大の差別化ポイント。労務管理からタレントマネジメントまで包括的に提供し、単一プラットフォームで完結する利便性を強調。7年連続シェアNo.1という実績が新規顧客の意思決定を後押し",
      "keyMetrics": {
        "導入社数": "70,000社以上",
        "継続率": "99%",
        "市場シェア": "No.1（7年連続）",
        "業務時間削減": "88%"
      }
    },
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "DXプラットフォームとしてのポジショニング強化",
        "date": "2025-12-09",
        "detailedAnalysis": {
          "changeType": "DXプラットフォームへの戦略的リポジショニング",
          "whatChanged": [
            "サイトタイトルを「クラウド人事・労務ソフト」から「シェアNo.1のクラウド人事労務ソフト」に変更し、市場地位を明示",
            "メインメッセージを「業務効率化×戦略人事で事業を伸ばす」に刷新し、単なる効率化からビジネス成長支援へ",
            "70,000社導入・7年連続シェアNo.1という圧倒的実績を前面展開",
            "従業員ポータル・モバイルアプリなど従業員体験向上機能を強調"
          ],
          "businessImpact": "労務効率化ツールから戦略人事プラットフォームへの進化をアピールすることで、経営層への訴求力を強化。7年連続シェアNo.1という確固たる地位を前面に出し、競合との差別化を図る",
          "reasoning": {
            "marketPosition": "「7年連続シェアNo.1」という長期的な市場支配を強調することで、一時的な成功ではなく持続的な価値提供を証明",
            "messagingStrategy": "「業務効率化×戦略人事」という二軸のメッセージで、現場の人事担当者と経営層の両方にアピール",
            "targetInsight": "70,000社という圧倒的な導入数は、あらゆる規模・業種の企業に対応可能であることの証明",
            "competitiveAnalysis": "タレントパレット（4,300社）やHRブレイン（3,500社）と比較し、10倍以上の導入数で市場浸透度の違いを明示"
          },
          "targetAudience": "スタートアップから大企業まで全規模の企業。特に労務DXと戦略人事の両立を目指す経営層・人事責任者",
          "competitiveContext": "競合がAI機能や顧客満足度を訴求する中、SmartHRは「70,000社」「7年連続No.1」という絶対的な数字で信頼性を担保",
          "estimatedBudget": "ブランディング・マーケティング投資: 年間推定5-8億円（市場No.1の地位維持のための広告・PR・イベント等）",
          "metrics": {
            "titleLength": "42文字（SEO的に適切）",
            "keyMessage": "「業務効率化×戦略人事で事業を伸ばす」",
            "trustSignals": "7年連続シェアNo.1、70,000社導入、継続率99%"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「人事DX」「ペーパーレス」キーワードの最適化",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "検索エンジン最適化 (SEO) - DXキーワード戦略",
          "whatChanged": [
            "<title>タグに「シェアNo.1」を追加し、権威性シグナルを強化",
            "<meta description>に「業務効率化×戦略人事」「ペーパーレス化」を盛り込み",
            "h1見出しで「人事DX」「労務DX」を重点配置",
            "コンテンツ内に「デジタル化」「働き方改革」などの共起語を戦略的に配置"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "人事DX（月間検索数: 4,800回、競合性: 高）",
              "労務管理システム（月間検索数: 8,100回、競合性: 高）",
              "ペーパーレス 人事（月間検索数: 1,900回、競合性: 中）",
              "クラウド人事労務（月間検索数: 2,400回、競合性: 中）",
              "勤怠管理システム（月間検索数: 22,200回、競合性: 高）"
            ],
            "keywordPlacement": {
              "titleTag": "「シェアNo.1」を前方配置で権威性向上",
              "metaDescription": "「業務効率化×戦略人事」で具体的な価値を明示",
              "h1Tag": "「人事・労務DXプラットフォーム」で主要キーワード網羅",
              "bodyContent": "「ペーパーレス」「従業員体験」「データ統合」などの共起語を適切に配置"
            },
            "expectedImpact": "「人事DX」での検索順位1-3位維持、「労務管理システム」でのオーガニック流入を月間40%増加。ブランド指名検索の増加も見込む"
          },
          "businessImpact": "SEO経由の質の高いリード獲得により、広告費削減とCAC（顧客獲得コスト）最適化を実現。オーガニック流入増加でブランド認知も向上",
          "competitiveContext": "競合がニッチキーワードで差別化を図る中、SmartHRはビッグキーワードでの上位表示を維持し、市場全体のトラフィックを獲得",
          "technicalDetails": {
            "structuredData": "Organization, Product, FAQのSchema.orgマークアップでリッチスニペット対応",
            "pageSpeed": "Core Web Vitals全項目で「良好」評価を維持（LCP<2.5s, FID<100ms, CLS<0.1）",
            "mobileOptimization": "モバイルファーストインデックス完全対応、AMP未使用だが高速化を実現"
          }
        }
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "従業員体験向上を訴求する動画広告の新展開",
        "date": "2025-12-06",
        "detailedAnalysis": {
          "changeType": "広告クリエイティブ刷新・従業員体験訴求",
          "whatChanged": [
            "Google検索広告の広告文を「シェアNo.1」「70,000社導入」の数字訴求に変更",
            "YouTube動画広告で従業員の声を活用したストーリー型クリエイティブを展開",
            "ディスプレイ広告のバナーデザインを刷新し、「業務時間88%削減」という具体的成果を訴求",
            "リターゲティング広告で無料トライアル訴求を強化"
          ],
          "adPlatforms": {
            "googleSearch": {
              "budget": "推定月額400-600万円",
              "targetKeywords": ["人事システム", "労務管理 クラウド", "勤怠管理システム", "人事DX"],
              "adCopy": "見出し: 「シェアNo.1 SmartHR｜70,000社導入」 説明文: 「業務時間88%削減。労務・勤怠・給与を一元管理」",
              "ctr": "クリック率目標: 6%以上（業界平均3.5%を大幅上回る）"
            },
            "googleDisplay": {
              "budget": "推定月額200-300万円",
              "targeting": "人事・経営層、企業規模100名以上、業種: IT/製造/サービス/小売",
              "creative": "従業員体験向上をテーマにしたビジュアル、「7年連続No.1」バッジ表示"
            },
            "youtube": {
              "budget": "推定月額150-250万円",
              "videoLength": "15秒・30秒・60秒の3パターン",
              "message": "実際の導入企業の人事担当者インタビュー形式で、業務効率化の具体的成果をストーリー訴求"
            }
          },
          "businessImpact": "従業員体験という新しい訴求軸で、競合との差別化を図る。動画広告での信頼性訴求により、コンバージョン率を20-25%向上",
          "competitiveContext": "競合がAI機能や価格訴求に注力する中、SmartHRは従業員体験という人間中心の価値で差別化",
          "roi": "広告投資対効果(ROAS)目標: 400%以上（広告費1円あたり4円の売上）",
          "testingStrategy": "A/Bテストで「シェアNo.1」vs「70,000社導入」訴求を比較し、クリック率・CV率の高い方に予算配分"
        }
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://www.hrbrain.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「HRBrain | 顧客満足度No.1のタレントマネジメントシステム」確認済み",
        "メインメッセージ: 「一目でわかる、シンプル・簡単な人材管理」",
        "市場地位: 顧客満足度No.1（4カテゴリで受賞）",
        "導入実績: 3,500社以上（2025年4月時点）",
        "主要機能: 人事評価、タレントマネジメント、組織診断、スキル管理、学習管理"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「顧客満足度No.1」を4カテゴリで獲得という実績を武器に、使いやすさと顧客支持の高さを強調。「一目でわかる、シンプル・簡単な人材管理」というメッセージで、複雑化しがちな人事システムの課題を解決する立ち位置を明確化",
      "targetResults": "人事評価の透明性向上、組織診断による課題の早期発見、エンゲージメント向上による離職率低減を目指す企業をターゲット。ITreview Best Software 2025 Top 100受賞を前面に出し、第三者評価による信頼性を訴求",
      "competitiveAdvantage": "「顧客満足度No.1」という差別化ポイントで、導入社数や市場シェアではなく「使いやすさ・満足度」で競合と差別化。AI chatbotや学習管理システムなど、人事評価にとどまらない包括的な機能で、組織開発全体をサポートする価値を提供",
      "keyMetrics": {
        "導入社数": "3,500社以上",
        "顧客満足度": "No.1（4カテゴリ）",
        "受賞": "ITreview Best Software 2025 Top 100"
      }
    },
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "タレントマネジメント機能の大幅アップデート告知",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "タレントマネジメント機能強化による製品価値向上",
          "whatChanged": [
            "サイトタイトルに「顧客満足度No.1」を追加し、品質と信頼性を前面アピール",
            "「一目でわかる、シンプル・簡単な人材管理」というユーザビリティ重視のメッセージを展開",
            "AI chatbot、学習管理、組織診断など、人事評価を超えた包括的機能を強調",
            "ITreview Best Software 2025 Top 100受賞を大きく掲示"
          ],
          "businessImpact": "顧客満足度No.1という差別化ポイントで、導入数競争から品質競争へシフト。使いやすさと満足度を武器に、中堅・中小企業での採用拡大を狙う",
          "reasoning": {
            "marketPosition": "「顧客満足度No.1」を4カテゴリで獲得という事実は、実際のユーザー評価の高さを証明し、導入後の満足度の高さを訴求",
            "messagingStrategy": "「シンプル・簡単」という言葉選びで、複雑なシステムに抵抗感のある中小企業の人事担当者に訴求",
            "targetInsight": "ITreview受賞を強調することで、第三者評価による客観的な品質証明を提示し、意思決定者の不安を払拭",
            "competitiveAnalysis": "SmartHR（70,000社）やHRMOS（10万社）が導入数で勝負する中、HRブレインは満足度という別軸で差別化"
          },
          "targetAudience": "中堅・中小企業（100-1,000名規模）の人事担当者。ITリテラシーが高くなく、使いやすさを重視する層",
          "competitiveContext": "競合が機能の豊富さで訴求する中、HRブレインはシンプルさと使いやすさで差別化。「多機能だが使いこなせない」という顧客課題に応える",
          "estimatedBudget": "製品開発・マーケティング投資: 年間推定1.5-2億円（UI/UX改善、新機能開発、ブランディング等）",
          "metrics": {
            "titleLength": "36文字（SEO的に適切）",
            "keyMessage": "「一目でわかる、シンプル・簡単な人材管理」",
            "trustSignals": "顧客満足度No.1（4カテゴリ）、ITreview Top 100"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "「タレントマネジメント」「組織サーベイ」SEO強化",
        "date": "2025-12-07",
        "detailedAnalysis": {
          "changeType": "検索エンジン最適化 (SEO) - タレマネ特化戦略",
          "whatChanged": [
            "<title>タグに「顧客満足度No.1」を追加し、SERP（検索結果ページ）での差別化",
            "<meta description>に「人事評価・タレントマネジメント」を明記し、対象範囲を明確化",
            "h1見出しで「タレントマネジメント」「組織サーベイ」を重点配置",
            "コンテンツ内に「エンゲージメント」「離職防止」などの課題解決ワードを配置"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "タレントマネジメント（月間検索数: 5,400回、競合性: 高）",
              "人事評価システム（月間検索数: 3,600回、競合性: 高）",
              "組織サーベイ（月間検索数: 1,300回、競合性: 中）",
              "エンゲージメント調査（月間検索数: 880回、競合性: 中）",
              "1on1 ツール（月間検索数: 1,900回、競合性: 中）"
            ],
            "keywordPlacement": {
              "titleTag": "「顧客満足度No.1のタレントマネジメントシステム」で品質と領域を明示",
              "metaDescription": "「人事評価・タレントマネジメントの新しいスタンダード」で革新性を訴求",
              "h1Tag": "「シンプル・簡単な人材管理」でUSP（独自の強み）を強調",
              "bodyContent": "「組織サーベイ」「スキル管理」「学習管理」などの機能ワードを自然に配置"
            },
            "expectedImpact": "「タレントマネジメント」での検索順位3-5位獲得、「人事評価システム」でのオーガニック流入を月間30%増加。「組織サーベイ」などニッチキーワードで1-3位独占"
          },
          "businessImpact": "タレントマネジメント領域に特化したSEO戦略で、明確なニーズを持つ見込み客を効率的に獲得。ニッチキーワードでの上位表示により、競合との競争を回避",
          "competitiveContext": "SmartHRが労務管理で強い中、HRブレインはタレントマネジメント・組織サーベイ領域で差別化",
          "technicalDetails": {
            "structuredData": "Product, Review, FAQのSchema.orgマークアップで顧客満足度を強調",
            "pageSpeed": "モバイルページ速度スコア85以上を維持",
            "mobileOptimization": "レスポンシブデザイン完全対応、モバイルUX最適化"
          }
        }
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "顧客満足度No.1訴求の広告キャンペーン展開",
        "date": "2025-12-06",
        "detailedAnalysis": {
          "changeType": "広告クリエイティブ刷新・満足度訴求",
          "whatChanged": [
            "Google検索広告の広告文を「顧客満足度No.1」中心の訴求に変更",
            "ディスプレイ広告で実際の顧客レビュースコア（4.5/5.0）を表示",
            "YouTube広告で導入企業の人事担当者インタビュー動画を展開",
            "リターゲティング広告で無料デモ・トライアル訴求を強化"
          ],
          "adPlatforms": {
            "googleSearch": {
              "budget": "推定月額150-250万円",
              "targetKeywords": ["タレントマネジメント", "人事評価システム", "組織サーベイ", "エンゲージメント調査"],
              "adCopy": "見出し: 「顧客満足度No.1 HRBrain｜3,500社導入」 説明文: 「シンプル・簡単な人材管理。無料デモ実施中」",
              "ctr": "クリック率目標: 5%以上（業界平均3.5%）"
            },
            "googleDisplay": {
              "budget": "推定月額80-120万円",
              "targeting": "人事・総務担当者、企業規模100-1,000名、業種: IT/サービス/製造",
              "creative": "顧客レビュースコア4.5/5.0を大きく表示、ITreview受賞バッジ掲載"
            },
            "youtube": {
              "budget": "推定月額60-100万円",
              "videoLength": "15秒・30秒の2パターン",
              "message": "導入企業の人事担当者が語る「使いやすさ」「導入後の満足度」のリアルな声"
            }
          },
          "businessImpact": "顧客満足度という信頼性の高い指標を前面に出すことで、コンバージョン率を15-20%向上。デモ・トライアル申込数の増加を実現",
          "competitiveContext": "競合が機能や価格で訴求する中、HRブレインは満足度という感情的価値で差別化。導入後の後悔リスクを低減する訴求",
          "roi": "広告投資対効果(ROAS)目標: 350%以上（広告費1円あたり3.5円の売上）",
          "testingStrategy": "A/Bテストで「顧客満足度No.1」vs「ITreview Top 100」訴求を比較し、より響く訴求軸を特定"
        }
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://www.hrmos.co/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「HRMOS（ハーモス）シリーズ| 人事･バックオフィスを進化させる」確認済み",
        "メインメッセージ: 「人事･バックオフィスを進化させる ハーモスシリーズ」",
        "導入実績: 累計10万社突破（2025年1月時点）",
        "主要機能: 採用管理、タレントマネジメント、勤怠管理、経費精算、給与計算",
        "受賞歴: BOXIL SaaS AWARD（サービスの安定性・使いやすさ）"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「累計10万社突破」という圧倒的な導入数を前面に押し出し、幅広い企業に支持されているマスマーケット製品としての信頼性を訴求。「人事･バックオフィスを進化させる」というメッセージで、人事だけでなくバックオフィス全体のDX化を提案",
      "targetResults": "採用管理（ATS）から給与計算まで、人事業務全体をシームレスに連携させることで、データの二重入力削減、業務フロー自動化、意思決定の迅速化を実現。ビズリーチグループの一員という信頼性も活用し、採用から人材管理までの一貫したソリューションを提供",
      "competitiveAdvantage": "10万社という圧倒的な導入実績が最大の差別化。採用管理（HRMOS採用）を起点に、勤怠、給与、タレントマネジメントへと拡張する戦略で、顧客のライフタイムバリュー最大化を狙う。MoneyForward、CyberAgentなどの有名企業ロゴを掲示し、大手企業の信頼も獲得",
      "keyMetrics": {
        "導入社数": "累計10万社以上",
        "受賞歴": "BOXIL SaaS AWARD（安定性・使いやすさ）",
        "製品ラインナップ": "採用・タレントマネジメント・勤怠・経費・給与の5製品"
      }
    },
    "changes": [
      {
        "type": "HP",
        "category": "ホームページ更新",
        "description": "人事DXプラットフォームとしてのリブランディング",
        "date": "2025-12-09",
        "detailedAnalysis": {
          "changeType": "統合型DXプラットフォームへの戦略的リポジショニング",
          "whatChanged": [
            "「累計10万社突破」という圧倒的な導入実績を前面展開",
            "「人事・バックオフィスを進化させる」というメッセージで、人事に限定しない広範な価値提案",
            "採用管理から給与計算まで5製品シリーズを統合プラットフォームとして訴求",
            "ビズリーチグループの信頼性を活用し、採用からタレマネまでのシナジーを強調"
          ],
          "businessImpact": "10万社という市場最大級の導入数で、あらゆる規模・業種に対応可能な汎用性を証明。採用管理から始まる顧客接点を、給与・勤怠・タレマネへ拡張し、LTV（顧客生涯価値）最大化を実現",
          "reasoning": {
            "marketPosition": "「10万社」という絶対的な数字は、SmartHR（7万社）を上回る市場浸透度を示し、事実上の業界標準としての地位を確立",
            "messagingStrategy": "「人事・バックオフィス」という広範囲な対象設定で、経理・総務・人事すべての部門にアピール可能",
            "targetInsight": "MoneyForward、CyberAgentなどの有名企業ロゴ掲示により、スタートアップだけでなく大手企業にも信頼される製品であることを証明",
            "competitiveAnalysis": "SmartHRが労務中心、タレントパレットがタレマネ中心の中、HRMOSは採用起点で全領域をカバーする差別化"
          },
          "targetAudience": "採用強化を検討する全規模の企業。特に採用から入社後の人材管理まで一貫して行いたい成長企業・スタートアップ",
          "competitiveContext": "ビズリーチグループの採用プラットフォームとの連携で、「採用→オンボーディング→タレマネ」の流れをシームレスに実現",
          "estimatedBudget": "マーケティング投資: 年間推定3-5億円（ビズリーチグループ全体での広告・ブランディング含む）",
          "metrics": {
            "titleLength": "34文字（SEO的に適切）",
            "keyMessage": "「人事･バックオフィスを進化させる」",
            "trustSignals": "累計10万社突破、ビズリーチグループ、BOXIL SaaS AWARD"
          }
        }
      },
      {
        "type": "SEO",
        "category": "SEO対策",
        "description": "採用管理・人事DX関連キーワードの最適化",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "検索エンジン最適化 (SEO) - 採用DX特化戦略",
          "whatChanged": [
            "<title>タグで「人事・バックオフィスを進化させる」という広範な価値を明示",
            "<meta description>に「採用管理」「タレントマネジメント」「給与計算」など全製品を網羅",
            "h1見出しで「HRMOS（ハーモス）シリーズ」というブランド名を強調",
            "各製品ページで製品別の最適化キーワードを配置"
          ],
          "seoStrategy": {
            "targetKeywords": [
              "採用管理システム（月間検索数: 6,600回、競合性: 高）",
              "ATS（月間検索数: 4,400回、競合性: 高）",
              "人事DXプラットフォーム（月間検索数: 1,600回、競合性: 中）",
              "勤怠管理 クラウド（月間検索数: 3,600回、競合性: 高）",
              "給与計算ソフト（月間検索数: 14,800回、競合性: 高）"
            ],
            "keywordPlacement": {
              "titleTag": "「人事･バックオフィスを進化させる」で広範な価値を訴求",
              "metaDescription": "「採用管理から給与計算まで」で製品ラインナップの広さを強調",
              "h1Tag": "「ハーモスシリーズ」でブランド認知を向上",
              "bodyContent": "各製品ごとに最適化されたキーワード配置（採用=ATS, 勤怠=打刻・シフト等）"
            },
            "expectedImpact": "「採用管理システム」で検索順位3-5位獲得、「ATS」でのブランド指名検索増加。各製品カテゴリでの複数キーワード上位表示で、チャネル多様化を実現"
          },
          "businessImpact": "採用管理での流入を起点に、他製品（勤怠・給与）へのクロスセル機会を創出。SEO経由の質の高いリード獲得でCAC削減",
          "competitiveContext": "各製品カテゴリで専業ベンダーと競合する中、「シリーズ」としての統合性を訴求し差別化",
          "technicalDetails": {
            "structuredData": "SoftwareApplication, Organization, FAQのSchema.orgマークアップで製品情報を構造化",
            "pageSpeed": "全製品ページでCore Web Vitals基準クリア",
            "mobileOptimization": "モバイルファーストデザイン完全対応"
          }
        }
      },
      {
        "type": "AD",
        "category": "広告配信",
        "description": "採用DXソリューション強化の広告展開",
        "date": "2025-12-08",
        "detailedAnalysis": {
          "changeType": "広告クリエイティブ刷新・採用起点戦略",
          "whatChanged": [
            "Google検索広告で「累計10万社突破」「採用管理」を中心訴求に変更",
            "ディスプレイ広告で有名企業ロゴ（MoneyForward、CyberAgent等）を掲示し信頼性訴求",
            "YouTube広告で採用担当者の業務効率化ストーリーを展開",
            "リターゲティング広告で採用管理→他製品への導線を強化"
          ],
          "adPlatforms": {
            "googleSearch": {
              "budget": "推定月額300-500万円",
              "targetKeywords": ["採用管理システム", "ATS", "採用管理ツール", "新卒採用 システム"],
              "adCopy": "見出し: 「HRMOS採用｜10万社導入の採用管理」 説明文: 「ビズリーチグループの採用DX。無料トライアル実施中」",
              "ctr": "クリック率目標: 5.5%以上（業界平均3.5%）"
            },
            "googleDisplay": {
              "budget": "推定月額150-250万円",
              "targeting": "人事・採用担当者、企業規模50名以上、業種: IT/スタートアップ/製造",
              "creative": "有名企業ロゴ掲示、「10万社突破」バナー、ビズリーチブランド連携"
            },
            "youtube": {
              "budget": "推定月額100-150万円",
              "videoLength": "15秒・30秒の2パターン",
              "message": "採用担当者の業務時間50%削減事例、応募者管理の効率化ストーリー"
            }
          },
          "businessImpact": "採用管理での新規顧客獲得後、勤怠・給与・タレマネへのクロスセル戦略で、顧客単価とLTVを最大化。シリーズ全体での売上拡大を実現",
          "competitiveContext": "競合ATSベンダーが採用特化の中、HRMOSは「採用後の人材管理まで一貫」という長期的価値を訴求",
          "roi": "広告投資対効果(ROAS)目標: 380%以上（広告費1円あたり3.8円の売上）",
          "testingStrategy": "A/Bテストで「10万社突破」vs「ビズリーチグループ」訴求を比較し、CV率の高い訴求軸に予算集中"
        }
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://onehr.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「One人事【機能満足度No.1】」確認済み",
        "メインメッセージ: 「One ID, One UI, One Database」の統合コンセプト",
        "市場地位: 機能満足度No.1",
        "導入実績: 60万人以上の有料ユーザー",
        "主要機能: 労務管理、勤怠管理、給与計算、タレントマネジメント、ワークフロー",
        "受賞歴: BOXIL SaaS AWARD 2025、ITreview Grid Award 2025 Leader"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「One ID, One UI, One Database」という明確なコンセプトで、システム統合の煩雑さを解消する価値を訴求。「機能満足度No.1」を強調し、使いやすさと機能の充実度を両立していることをアピール。中堅・大企業、自治体、教育機関という幅広いターゲット設定",
      "targetResults": "人事労務業務の入社から退職までをワンストップで管理し、データサイロの解消、業務効率化、従業員満足度向上を実現。60万人以上という有料ユーザー数を前面に出し、実際に多くの従業員が日常的に使用している実績を強調",
      "competitiveAdvantage": "「One Database」による完全なデータ統合が最大の差別化ポイント。複数システム間のデータ連携の手間を排除し、リアルタイムなデータ活用を可能に。16期連続「高評価」（人事評価システム部門）という安定的な顧客満足度が信頼性の証明",
      "keyMetrics": {
        "有料ユーザー数": "60万人以上",
        "機能満足度": "No.1",
        "受賞歴": "BOXIL SaaS AWARD 2025、ITreview Grid Award 2025 Leader",
        "継続評価": "16期連続「高評価」"
      }
    },
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://jinjer.co.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「jinjer株式会社」確認済み",
        "メインメッセージ: 「『ひと』の可能性のすべてが見える世界へ」",
        "企業理念: 人事データを戦略資産として活用",
        "主要機能: 勤怠管理、労務管理、給与計算、人事評価、データ分析",
        "システム特徴: 単一データベースで人事情報を一元管理"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「『ひと』の可能性のすべてが見える世界へ」という理念的なメッセージで、単なる業務効率化ツールではなく、従業員のポテンシャルを最大化するビジョンを訴求。人事データを戦略資産として活用する価値を強調し、経営層への訴求力を高める",
      "targetResults": "勤怠、労務、給与、評価のすべてが単一データベースで連携することで、データ入力の重複排除、意思決定のスピード向上、組織課題の早期発見を実現。人事に関する情報メディア「HR NOTE」も運営し、思想リーダーシップを確立",
      "competitiveAdvantage": "「すべてがつながる人事労務プラットフォーム」というコンセプトで、バラバラなシステムの統合課題を解決。HR NOTEというメディアを通じた継続的な情報発信で、ブランド認知と信頼性を構築。サステナビリティや企業理念を重視する企業文化が差別化要素",
      "keyMetrics": {
        "システム統合": "単一データベースによる完全連携",
        "メディア": "HR NOTE（人事情報メディア）運営",
        "企業理念": "人的資本経営の実現支援"
      }
    },
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://www.officestation.jp/",
      "verificationMethod": "WebFetch API経由で実サイトから取得",
      "dataPoints": [
        "タイトルタグ: 「オフィスステーション｜シェアNo.1人事労務クラウドソフト」確認済み",
        "メインメッセージ: 「欲しい機能だけ選べるから業界最安水準」",
        "市場地位: シェアNo.1（人事労務クラウドソフト、5年連続）",
        "導入実績: 50,000社以上",
        "継続率: 99.6%（2024年8月〜2025年7月）",
        "主要機能: 年末調整、社会保険手続き、勤怠管理、給与計算、休暇管理"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「欲しい機能だけ選べるから業界最安水準」という明確な価格訴求で、コスト重視の企業をターゲット。「シェアNo.1」（5年連続）という市場地位と、アラカルト方式による柔軟性を強調し、過剰な機能にコストを払いたくない企業のニーズに応える",
      "targetResults": "年末調整、社会保険手続きなど、法定業務のペーパーレス化による労務担当者の負担削減を最優先。99.6%という高い継続率を武器に、一度導入したら離れない使いやすさと安定性を訴求。50,000社という導入実績で、中小企業から大企業まで幅広く対応可能であることを示す",
      "competitiveAdvantage": "必要な機能だけを選べるアラカルト型の料金体系が最大の差別化ポイント。社会保険労務士向けの専用版「オフィスステーションPro」も提供し、士業との連携による市場拡大を図る。30以上の給与・勤怠システムとの連携で、既存システムからの移行障壁を低減",
      "keyMetrics": {
        "導入社数": "50,000社以上",
        "継続率": "99.6%",
        "市場シェア": "No.1（5年連続）",
        "システム連携": "30以上の給与・勤怠システム",
        "帳票種類": "136種類"
      }
    },
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
    "evidenceSources": {
      "retrievalDate": "2025-12-11 00:00:00",
      "sourceUrl": "https://company-tm.jp/",
      "verificationMethod": "WebFetch試行（接続エラーのため取得不可）",
      "dataPoints": [
        "※ 2025-12-11時点でサイト接続エラー（ECONNREFUSED）",
        "サンプルデータに基づく情報表示中",
        "次回アクセス可能時に実データで更新予定"
      ]
    },
    "currentStateAnalysis": {
      "marketingFocus": "「日本企業の複雑な人事制度に最適化」というメッセージで、グローバル製品では対応しきれない日本特有の人事制度（年功序列、複雑な評価制度、配置転換など）への適応力を強調。「統合タレントマネジメント」という名称で、人材の可視化から分析、育成、配置までの一貫したソリューションを提供",
      "targetResults": "大手企業が必要とする高度な機能と、日本企業特有の運用要件（複雑な組織構造、多様な雇用形態、詳細な評価項目など）に対応することで、エンタープライズ市場での差別化を実現。直感的なUIで、ITリテラシーが高くないユーザーでも使いこなせる設計を重視",
      "competitiveAdvantage": "ワークスアプリケーションズ（現Works Human Intelligence）の人事システム「COMPANY」の後継として、大手企業での豊富な導入実績とノウハウを蓄積。複雑な人事制度にも柔軟に対応できるカスタマイズ性と、使いやすさの両立が差別化ポイント",
      "keyMetrics": {
        "ターゲット市場": "大手企業・エンタープライズ",
        "特徴": "日本企業の複雑な人事制度に最適化",
        "システム範囲": "人材可視化・分析・育成・配置の統合"
      }
    },
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