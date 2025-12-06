
import { ExamDefinition, StudySection } from './types';

export const AWS_EXAMS: ExamDefinition[] = [
  // --- Foundational ---
  {
    id: 'clf-c02',
    code: 'CLF-C02',
    name: {
      en: "AWS Certified Cloud Practitioner",
      zh: "AWS 认证云从业者",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>クラウドプラクティショナー"
    },
    level: 'Foundational',
    description: 'Overall understanding of the AWS Cloud platform.'
  },
  {
    id: 'aif-c01',
    code: 'AIF-C01',
    name: {
      en: "AWS Certified AI Practitioner",
      zh: "AWS 认证 AI 从业者",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby> AI プラクティショナー"
    },
    level: 'Foundational',
    description: 'Understanding of AI/ML concepts and generative AI on AWS.'
  },

  // --- Associate ---
  {
    id: 'saa-c03',
    code: 'SAA-C03',
    name: {
      en: "AWS Certified Solutions Architect - Associate",
      zh: "AWS 认证解决方案架构师 - 助理级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>ソリューションアーキテクト – アソシエイト"
    },
    level: 'Associate',
    description: 'Designing distributed systems on AWS.'
  },
  {
    id: 'dva-c02',
    code: 'DVA-C02',
    name: {
      en: "AWS Certified Developer - Associate",
      zh: "AWS 认证开发者 - 助理级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>デベロッパー – アソシエイト"
    },
    level: 'Associate',
    description: 'Developing and maintaining applications on AWS.'
  },
  {
    id: 'soa-c02',
    code: 'SOA-C02',
    name: {
      en: "AWS Certified SysOps Administrator - Associate",
      zh: "AWS 认证 SysOps 管理员 - 助理级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby> SysOps アドミニストレーター – アソシエイト"
    },
    level: 'Associate',
    description: 'Deployment, management, and operations on AWS.'
  },
  {
    id: 'dea-c01',
    code: 'DEA-C01',
    name: {
      en: "AWS Certified Data Engineer - Associate",
      zh: "AWS 认证数据工程师 - 助理级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>データエンジニア – アソシエイト"
    },
    level: 'Associate',
    description: 'Core data-related AWS services and data pipeline implementation.'
  },

  // --- Professional ---
  {
    id: 'sap-c02',
    code: 'SAP-C02',
    name: {
      en: "AWS Certified Solutions Architect - Professional",
      zh: "AWS 认证解决方案架构师 - 专业级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>ソリューションアーキテクト – プロフェッショナル"
    },
    level: 'Professional',
    description: 'Designing complex and hybrid cloud solutions.'
  },
  {
    id: 'dop-c02',
    code: 'DOP-C02',
    name: {
      en: "AWS Certified DevOps Engineer - Professional",
      zh: "AWS 认证 DevOps 工程师 - 专业级",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby> DevOps エンジニア – プロフェッショナル"
    },
    level: 'Professional',
    description: 'Provisioning, operating, and managing distributed application systems.'
  },

  // --- Specialty ---
  {
    id: 'scs-c02',
    code: 'SCS-C02',
    name: {
      en: "AWS Certified Security - Specialty",
      zh: "AWS 认证安全性 - 专项",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby>セキュリティ – <ruby>専門<rt>せんもん</rt></ruby><ruby>知識<rt>ちしき</rt></ruby>"
    },
    level: 'Specialty',
    description: 'Securing data and workloads in the AWS Cloud.'
  },
  {
    id: 'ans-c01',
    code: 'ANS-C01',
    name: {
      en: "AWS Certified Advanced Networking - Specialty",
      zh: "AWS 认证高级网络 - 专项",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby><ruby>高度<rt>こうど</rt></ruby>なネットワーキング – <ruby>専門<rt>せんもん</rt></ruby><ruby>知識<rt>ちしき</rt></ruby>"
    },
    level: 'Specialty',
    description: 'Designing and maintaining complex network architectures.'
  },
  {
    id: 'mls-c01',
    code: 'MLS-C01',
    name: {
      en: "AWS Certified Machine Learning - Specialty",
      zh: "AWS 认证机器学习 - 专项",
      ja: "AWS <ruby>認定<rt>にんてい</rt></ruby><ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby> – <ruby>専門<rt>せんもん</rt></ruby><ruby>知識<rt>ちしき</rt></ruby>"
    },
    level: 'Specialty',
    description: 'Building, training, tuning, and deploying ML models.'
  }
];

export const EXAM_STRUCTURES: Record<string, StudySection[]> = {
  // === Foundational ===
  'CLF-C02': [
    {
      title: { en: "Domain 1: Cloud Concepts", zh: "领域 1：云概念", ja: "分野 1: <ruby>クラウド<rt>くらうど</rt></ruby>の<ruby>概念<rt>がいねん</rt></ruby>" },
      weight: "24%",
      topics: [
        { title: { en: "AWS Value Proposition", zh: "AWS 价值主张", ja: "AWS の<ruby>価値<rt>かち</rt></ruby><ruby>提案<rt>ていあん</rt></ruby>" } },
        { title: { en: "Cloud Economics & Billing", zh: "云经济学与计费", ja: "<ruby>クラウド<rt>くらうど</rt></ruby><ruby>経済<rt>けいざい</rt></ruby><ruby>学<rt>がく</rt></ruby>と<ruby>請求<rt>せいきゅう</rt></ruby>" } },
        { title: { en: "Cloud Architecture Principles", zh: "云架构设计原则", ja: "<ruby>クラウド<rt>くらうど</rt></ruby>アーキテクチャの<ruby>原則<rt>げんそく</rt></ruby>" } },
        { title: { en: "Migration & Adoption Strategies", zh: "迁移与采用策略", ja: "<ruby>移行<rt>いこう</rt></ruby>および<ruby>導入<rt>どうにゅう</rt></ruby><ruby>戦略<rt>せんりゃく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Security and Compliance", zh: "领域 2：安全性和合规性", ja: "分野 2: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>とコンプライアンス" },
      weight: "30%",
      topics: [
        { title: { en: "Shared Responsibility Model", zh: "责任共担模型", ja: "<ruby>責任<rt>せきにん</rt></ruby><ruby>共有<rt>きょうゆう</rt></ruby>モデル" } },
        { title: { en: "IAM Fundamentals", zh: "IAM 基础", ja: "IAM の<ruby>基礎<rt>きそ</rt></ruby>" } },
        { title: { en: "Security Services (WAF, Shield, Inspector)", zh: "安全服务 (WAF, Shield, Inspector)", ja: "<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>サービス" } },
        { title: { en: "Compliance & Governance", zh: "合规性与治理", ja: "コンプライアンスとガバナンス" } }
      ]
    },
    {
      title: { en: "Domain 3: Cloud Technology and Services", zh: "领域 3：云技术和服务", ja: "分野 3: <ruby>クラウド<rt>くらうど</rt></ruby><ruby>技術<rt>ぎじゅつ</rt></ruby>とサービス" },
      weight: "34%",
      topics: [
        { title: { en: "Compute (EC2, Lambda, ECS)", zh: "计算服务 (EC2, Lambda, ECS)", ja: "<ruby>コンピューティング<rt>こんぴゅーてぃんぐ</rt></ruby>" } },
        { title: { en: "Storage (S3, EBS, EFS)", zh: "存储服务 (S3, EBS, EFS)", ja: "ストレージ" } },
        { title: { en: "Databases (RDS, DynamoDB)", zh: "数据库 (RDS, DynamoDB)", ja: "<ruby>データベース<rt>でーたべーす</rt></ruby>" } },
        { title: { en: "Networking (VPC, Route 53)", zh: "网络 (VPC, Route 53)", ja: "ネットワーキング" } },
        { title: { en: "AI/ML & Analytics", zh: "人工智能与分析", ja: "AI/ML および<ruby>分析<rt>ぶんせき</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Billing, Pricing, and Support", zh: "领域 4：计费、定价和支持", ja: "分野 4: <ruby>請求<rt>せいきゅう</rt></ruby>、<ruby>料金<rt>りょうきん</rt></ruby>、およびサポート" },
      weight: "12%",
      topics: [
        { title: { en: "Pricing Models (On-Demand, Reserved, Spot)", zh: "定价模型 (按需, 预留, Spot)", ja: "<ruby>料金<rt>りょうきん</rt></ruby>モデル" } },
        { title: { en: "Cost Management Tools", zh: "成本管理工具", ja: "コスト<ruby>管理<rt>かんり</rt></ruby>ツール" } },
        { title: { en: "Support Plans & Trusted Advisor", zh: "支持计划与可信顾问", ja: "サポートプランと Trusted Advisor" } }
      ]
    }
  ],
  'AIF-C01': [
    {
      title: { en: "Domain 1: Fundamentals of AI and ML", zh: "领域 1：AI 和 ML 基础", ja: "分野 1: AI と ML の<ruby>基礎<rt>きそ</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "AI/ML Concepts", zh: "AI/ML 基本概念", ja: "AI/ML の<ruby>概念<rt>がいねん</rt></ruby>" } },
        { title: { en: "Machine Learning Types", zh: "机器学习类型", ja: "<ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Fundamentals of Generative AI", zh: "领域 2：生成式 AI 基础", ja: "分野 2: <ruby>生成<rt>せいせい</rt></ruby> AI の<ruby>基礎<rt>きそ</rt></ruby>" },
      weight: "24%",
      topics: [
        { title: { en: "GenAI Concepts (LLMs, FM)", zh: "生成式 AI 概念", ja: "<ruby>生成<rt>せいせい</rt></ruby> AI の<ruby>概念<rt>がいねん</rt></ruby>" } },
        { title: { en: "Prompt Engineering", zh: "提示工程", ja: "プロンプトエンジニアリング" } }
      ]
    },
    {
      title: { en: "Domain 3: Applications of Foundation Models", zh: "领域 3：基础模型的应用", ja: "分野 3: <ruby>基盤<rt>きばん</rt></ruby>モデルの<ruby>応用<rt>おうよう</rt></ruby>" },
      weight: "28%",
      topics: [
        { title: { en: "Amazon Bedrock", zh: "Amazon Bedrock", ja: "Amazon Bedrock" } },
        { title: { en: "SageMaker JumpStart", zh: "SageMaker JumpStart", ja: "SageMaker JumpStart" } }
      ]
    },
    {
      title: { en: "Domain 4: Guidelines for Responsible AI", zh: "领域 4：负责任的 AI 指南", ja: "分野 4: <ruby>責任<rt>せきにん</rt></ruby>ある AI のガイドライン" },
      weight: "14%",
      topics: [
        { title: { en: "Ethics and Bias", zh: "伦理与偏见", ja: "<ruby>倫理<rt>りんり</rt></ruby>とバイアス" } },
        { title: { en: "Transparency", zh: "透明度", ja: "<ruby>透明性<rt>とうめいせい</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 5: Security, Compliance, and Governance", zh: "领域 5：安全性、合规性与治理", ja: "分野 5: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>、コンプライアンス、ガバナンス" },
      weight: "14%",
      topics: [
        { title: { en: "AI Security", zh: "AI 安全", ja: "AI <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" } },
        { title: { en: "Compliance Standards", zh: "合规标准", ja: "コンプライアンス<ruby>基準<rt>きじゅん</rt></ruby>" } }
      ]
    }
  ],

  // === Associate ===
  'SAA-C03': [
    {
      title: { en: "Domain 1: Design Secure Architectures", zh: "领域 1：设计安全架构", ja: "分野 1: セキュアなアーキテクチャの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "30%",
      topics: [
        { title: { en: "IAM & Access Controls", zh: "IAM 与访问控制", ja: "IAM と<ruby>アクセス<rt>あくせす</rt></ruby><ruby>制御<rt>せいぎょ</rt></ruby>" } },
        { title: { en: "Security Groups & NACLs", zh: "安全组与网络ACL", ja: "<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>グループと NACL" } },
        { title: { en: "Data Protection (KMS, Encryption)", zh: "数据保护 (KMS, 加密)", ja: "<ruby>データ<rt>でーた</rt></ruby><ruby>保護<rt>ほご</rt></ruby> (KMS, <ruby>暗号化<rt>あんごうか</rt></ruby>)" } },
        { title: { en: "Multi-Account Strategy", zh: "多账户策略", ja: "<ruby>マルチアカウント<rt>まるちあかうんと</rt></ruby><ruby>戦略<rt>せんりゃく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Design Resilient Architectures", zh: "领域 2：设计弹性架构", ja: "分野 2: <ruby>弾力性<rt>だんりょくせい</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れたアーキテクチャの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "26%",
      topics: [
        { title: { en: "Decoupling Architectures (SQS, SNS)", zh: "解耦架构 (SQS, SNS)", ja: "<ruby>疎結合<rt>そけつごう</rt></ruby>アーキテクチャ" } },
        { title: { en: "High Availability & Fault Tolerance", zh: "高可用性与容错", ja: "<ruby>高可用性<rt>こうかようせい</rt></ruby>と<ruby>耐障害性<rt>たいしょうがいせい</rt></ruby>" } },
        { title: { en: "Disaster Recovery", zh: "灾难恢复", ja: "<ruby>災害<rt>さいがい</rt></ruby><ruby>復旧<rt>ふっきゅう</rt></ruby>" } },
        { title: { en: "Global Infrastructure", zh: "全球基础设施", ja: "<ruby>グローバル<rt>ぐろーばる</rt></ruby>インフラストラクチャ" } }
      ]
    },
    {
      title: { en: "Domain 3: Design High-Performing Architectures", zh: "领域 3：设计高性能架构", ja: "分野 3: <ruby>高性能<rt>こうせいのう</rt></ruby>アーキテクチャの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "24%",
      topics: [
        { title: { en: "Storage Performance", zh: "存储性能", ja: "ストレージパフォーマンス" } },
        { title: { en: "Compute Performance", zh: "计算性能", ja: "<ruby>コンピューティング<rt>こんぴゅーてぃんぐ</rt></ruby>パフォーマンス" } },
        { title: { en: "Database Caching", zh: "数据库缓存", ja: "<ruby>データベース<rt>でーたべーす</rt></ruby>キャッシング" } },
        { title: { en: "Network Performance", zh: "网络性能", ja: "<ruby>ネットワーク<rt>ねっとわーく</rt></ruby>パフォーマンス" } }
      ]
    },
    {
      title: { en: "Domain 4: Design Cost-Optimized Architectures", zh: "领域 4：设计成本优化架构", ja: "分野 4: コスト<ruby>最適化<rt>さいてきか</rt></ruby>アーキテクチャの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "Cost-Effective Storage", zh: "具有成本效益的存储", ja: "コスト<ruby>効率<rt>こうりつ</rt></ruby>の<ruby>良<rt>よ</rt></ruby>いストレージ" } },
        { title: { en: "Compute Optimization", zh: "计算优化", ja: "<ruby>コンピューティング<rt>こんぴゅーてぃんぐ</rt></ruby>の<ruby>最適化<rt>さいてきか</rt></ruby>" } },
        { title: { en: "Network Cost Management", zh: "网络成本管理", ja: "<ruby>ネットワーク<rt>ねっとわーく</rt></ruby>コスト<ruby>管理<rt>かんり</rt></ruby>" } }
      ]
    }
  ],
  'DVA-C02': [
    {
      title: { en: "Domain 1: Development with AWS Services", zh: "领域 1：使用 AWS 服务进行开发", ja: "分野 1: AWS サービスを<ruby>使用<rt>しよう</rt></ruby>した<ruby>開発<rt>かいはつ</rt></ruby>" },
      weight: "32%",
      topics: [
        { title: { en: "Lambda & API Gateway", zh: "Lambda 与 API Gateway", ja: "Lambda と API Gateway" } },
        { title: { en: "Container Development", zh: "容器开发", ja: "コンテナ<ruby>開発<rt>かいはつ</rt></ruby>" } },
        { title: { en: "NoSQL Development", zh: "NoSQL 开发", ja: "NoSQL <ruby>開発<rt>かいはつ</rt></ruby>" } },
        { title: { en: "Event-Driven Architecture", zh: "事件驱动架构", ja: "イベント<ruby>駆動<rt>くどう</rt></ruby>アーキテクチャ" } }
      ]
    },
    {
      title: { en: "Domain 2: Security", zh: "领域 2：安全", ja: "分野 2: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" },
      weight: "26%",
      topics: [
        { title: { en: "IAM Roles & Policies", zh: "IAM 角色与策略", ja: "IAM ロールとポリシー" } },
        { title: { en: "App Security", zh: "应用安全", ja: "アプリケーション<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" } },
        { title: { en: "Encryption", zh: "加密技术", ja: "<ruby>暗号化<rt>あんごうか</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 3: Deployment", zh: "领域 3：部署", ja: "分野 3: デプロイメント" },
      weight: "24%",
      topics: [
        { title: { en: "CI/CD Pipelines", zh: "CI/CD 流水线", ja: "CI/CD パイプライン" } },
        { title: { en: "Infrastructure as Code", zh: "基础设施即代码", ja: "インフラストラクチャ・アズ・コード" } },
        { title: { en: "Deployment Strategies", zh: "部署策略", ja: "デプロイ<ruby>戦略<rt>せんりゃく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Troubleshooting and Optimization", zh: "领域 4：故障排除和优化", ja: "分野 4: トラブルシューティングと<ruby>最適化<rt>さいてきか</rt></ruby>" },
      weight: "18%",
      topics: [
        { title: { en: "Monitoring & Logging", zh: "监控与日志", ja: "<ruby>監視<rt>かんし</rt></ruby>とロギング" } },
        { title: { en: "Performance Optimization", zh: "性能优化", ja: "パフォーマンス<ruby>最適化<rt>さいてきか</rt></ruby>" } }
      ]
    }
  ],
  'SOA-C02': [
    {
      title: { en: "Domain 1: Monitoring, Logging, and Remediation", zh: "领域 1：监控、日志记录和修复", ja: "分野 1: <ruby>監視<rt>かんし</rt></ruby>、ロギング、および<ruby>修復<rt>しゅうふく</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "CloudWatch Metrics & Alarms", zh: "CloudWatch 指标与警报", ja: "CloudWatch メトリクスとアラーム" } },
        { title: { en: "Automated Remediation", zh: "自动修复", ja: "<ruby>自動<rt>じどう</rt></ruby><ruby>修復<rt>しゅうふく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Reliability and Business Continuity", zh: "领域 2：可靠性和业务连续性", ja: "分野 2: <ruby>信頼性<rt>しんらいせい</rt></ruby>と<ruby>事業<rt>じぎょう</rt></ruby><ruby>継続性<rt>けいぞくせい</rt></ruby>" },
      weight: "16%",
      topics: [
        { title: { en: "Scalability & Elasticity", zh: "可扩展性与弹性", ja: "<ruby>拡張性<rt>かくちょうせい</rt></ruby>と<ruby>弾力性<rt>だんりょくせい</rt></ruby>" } },
        { title: { en: "Backup & Restore", zh: "备份与恢复", ja: "バックアップと<ruby>復元<rt>ふくげん</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 3: Deployment, Provisioning, and Automation", zh: "领域 3：部署、预置和自动化", ja: "分野 3: デプロイ、プロビジョニング、および<ruby>自動化<rt>じどうか</rt></ruby>" },
      weight: "18%",
      topics: [
        { title: { en: "CloudFormation & Systems Manager", zh: "CloudFormation 与 Systems Manager", ja: "CloudFormation と Systems Manager" } },
        { title: { en: "Resource Management", zh: "资源管理", ja: "リソース<ruby>管理<rt>かんり</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Security and Compliance", zh: "领域 4：安全性和合规性", ja: "分野 4: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>とコンプライアンス" },
      weight: "16%",
      topics: [
        { title: { en: "IAM & Security Controls", zh: "IAM 与安全控制", ja: "IAM と<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby><ruby>制御<rt>せいぎょ</rt></ruby>" } },
        { title: { en: "Data Protection", zh: "数据保护", ja: "<ruby>データ<rt>でーた</rt></ruby><ruby>保護<rt>ほご</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 5: Networking and Content Delivery", zh: "领域 5：网络和内容分发", ja: "分野 5: ネットワーキングとコンテンツ<ruby>配信<rt>はいしん</rt></ruby>" },
      weight: "18%",
      topics: [
        { title: { en: "VPC Networking", zh: "VPC 网络", ja: "VPC ネットワーキング" } },
        { title: { en: "Route 53 & CloudFront", zh: "Route 53 与 CloudFront", ja: "Route 53 と CloudFront" } }
      ]
    },
    {
      title: { en: "Domain 6: Cost and Performance Optimization", zh: "领域 6：成本和性能优化", ja: "分野 6: コストとパフォーマンスの<ruby>最適化<rt>さいてきか</rt></ruby>" },
      weight: "12%",
      topics: [
        { title: { en: "Cost Optimization Strategies", zh: "成本优化策略", ja: "コスト<ruby>最適化<rt>さいてきか</rt></ruby><ruby>戦略<rt>せんりゃく</rt></ruby>" } },
        { title: { en: "Performance Monitoring", zh: "性能监控", ja: "パフォーマンス<ruby>監視<rt>かんし</rt></ruby>" } }
      ]
    }
  ],
  'DEA-C01': [
    {
      title: { en: "Domain 1: Data Ingestion and Transformation", zh: "领域 1：数据摄取和转换", ja: "分野 1: <ruby>データ<rt>でーた</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>みと<ruby>変換<rt>へんかん</rt></ruby>" },
      weight: "34%",
      topics: [
        { title: { en: "Data Pipelines (Glue, Kinesis)", zh: "数据流水线", ja: "<ruby>データ<rt>でーた</rt></ruby>パイプライン" } },
        { title: { en: "ETL Processes", zh: "ETL 流程", ja: "ETL プロセス" } }
      ]
    },
    {
      title: { en: "Domain 2: Data Store Management", zh: "领域 2：数据存储管理", ja: "分野 2: <ruby>データ<rt>でーた</rt></ruby>ストア<ruby>管理<rt>かんり</rt></ruby>" },
      weight: "26%",
      topics: [
        { title: { en: "Data Lake vs Data Warehouse", zh: "数据湖与数据仓库", ja: "<ruby>データ<rt>でーた</rt></ruby>レイクと<ruby>データ<rt>でーた</rt></ruby>ウェアハウス" } },
        { title: { en: "Database Design (Redshift, DynamoDB)", zh: "数据库设计", ja: "<ruby>データベース<rt>でーたべーす</rt></ruby><ruby>設計<rt>せっけい</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 3: Data Operations and Support", zh: "领域 3：数据运维和支持", ja: "分野 3: <ruby>データ<rt>でーた</rt></ruby><ruby>運用<rt>うんよう</rt></ruby>とサポート" },
      weight: "22%",
      topics: [
        { title: { en: "Data Quality & Automation", zh: "数据质量与自动化", ja: "<ruby>データ<rt>でーた</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>と<ruby>自動化<rt>じどうか</rt></ruby>" } },
        { title: { en: "Troubleshooting", zh: "故障排除", ja: "トラブルシューティング" } }
      ]
    },
    {
      title: { en: "Domain 4: Data Security and Governance", zh: "领域 4：数据安全和治理", ja: "分野 4: <ruby>データ<rt>でーた</rt></ruby><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>とガバナンス" },
      weight: "18%",
      topics: [
        { title: { en: "Access Control (Lake Formation)", zh: "访问控制", ja: "<ruby>アクセス<rt>あくせす</rt></ruby><ruby>制御<rt>せいぎょ</rt></ruby>" } },
        { title: { en: "Data Governance", zh: "数据治理", ja: "<ruby>データ<rt>でーた</rt></ruby>ガバナンス" } }
      ]
    }
  ],

  // === Professional ===
  'SAP-C02': [
    {
      title: { en: "Domain 1: Design Solutions for Organizational Complexity", zh: "领域 1：针对组织复杂性设计解决方案", ja: "分野 1: <ruby>組織<rt>そしき</rt></ruby>の<ruby>複雑さ<rt>ふくざつさ</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>するソリューションの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "26%",
      topics: [
        { title: { en: "Multi-Account Architecture", zh: "多账户架构", ja: "<ruby>マルチアカウント<rt>まるちあかうんと</rt></ruby>アーキテクチャ" } },
        { title: { en: "Hybrid Connectivity", zh: "混合连接", ja: "ハイブリッド<ruby>接続<rt>せつぞく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Design for New Solutions", zh: "领域 2：设计新解决方案", ja: "分野 2: <ruby>新<rt>あたら</rt></ruby>しいソリューションの<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "29%",
      topics: [
        { title: { en: "Security & Scalability", zh: "安全性与可扩展性", ja: "<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>と<ruby>拡張性<rt>かくちょうせい</rt></ruby>" } },
        { title: { en: "Deployment Strategy", zh: "部署策略", ja: "デプロイ<ruby>戦略<rt>せんりゃく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 3: Continuous Improvement for Existing Solutions", zh: "领域 3：现有解决方案的持续改进", ja: "分野 3: <ruby>既存<rt>きそん</rt></ruby>のソリューションの<ruby>継続<rt>けいぞく</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>改善<rt>かいぜん</rt></ruby>" },
      weight: "25%",
      topics: [
        { title: { en: "Operational Excellence", zh: "卓越运营", ja: "<ruby>運用<rt>うんよう</rt></ruby>の<ruby>卓越性<rt>たくえつせい</rt></ruby>" } },
        { title: { en: "Cost Optimization", zh: "成本优化", ja: "コスト<ruby>最適化<rt>さいてきか</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Accelerate Workload Migration and Modernization", zh: "领域 4：加速工作负载迁移和现代化", ja: "分野 4: ワークロードの<ruby>移行<rt>いこう</rt></ruby>とモダナイゼーションの<ruby>加速<rt>かそく</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "Migration Planning", zh: "迁移规划", ja: "<ruby>移行<rt>いこう</rt></ruby><ruby>計画<rt>けいかく</rt></ruby>" } },
        { title: { en: "Cloud Native Modernization", zh: "云原生现代化", ja: "クラウドネイティブモダナイゼーション" } }
      ]
    }
  ],
  'DOP-C02': [
    {
      title: { en: "Domain 1: SDLC Automation", zh: "领域 1：SDLC 自动化", ja: "分野 1: SDLC の<ruby>自動化<rt>じどうか</rt></ruby>" },
      weight: "22%",
      topics: [
        { title: { en: "CI/CD Patterns", zh: "CI/CD 模式", ja: "CI/CD パターン" } },
        { title: { en: "Pipeline Security", zh: "流水线安全", ja: "パイプライン<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Configuration Management and IaC", zh: "领域 2：配置管理和 IaC", ja: "分野 2: <ruby>構成<rt>こうせい</rt></ruby><ruby>管理<rt>かんり</rt></ruby>と IaC" },
      weight: "17%",
      topics: [
        { title: { en: "CloudFormation & CDK", zh: "CloudFormation 与 CDK", ja: "CloudFormation と CDK" } },
        { title: { en: "Config Rules", zh: "配置规则", ja: "<ruby>構成<rt>こうせい</rt></ruby>ルール" } }
      ]
    },
    {
      title: { en: "Domain 3: Resilient Cloud Solutions", zh: "领域 3：弹性云解决方案", ja: "分野 3: <ruby>弾力性<rt>だんりょくせい</rt></ruby>のある<ruby>クラウド<rt>くらうど</rt></ruby>ソリューション" },
      weight: "15%",
      topics: [
        { title: { en: "High Availability", zh: "高可用性", ja: "<ruby>高可用性<rt>こうかようせい</rt></ruby>" } },
        { title: { en: "Disaster Recovery", zh: "灾难恢复", ja: "<ruby>災害<rt>さいがい</rt></ruby><ruby>復旧<rt>ふっきゅう</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Monitoring and Logging", zh: "领域 4：监控和日志记录", ja: "分野 4: <ruby>監視<rt>かんし</rt></ruby>とロギング" },
      weight: "15%",
      topics: [
        { title: { en: "Log Aggregation", zh: "日志聚合", ja: "ログ<ruby>集約<rt>しゅうやく</rt></ruby>" } },
        { title: { en: "Observability", zh: "可观测性", ja: "オブザーバビリティ" } }
      ]
    },
    {
      title: { en: "Domain 5: Incident and Event Response", zh: "领域 5：事件响应", ja: "分野 5: インシデントおよびイベント<ruby>対応<rt>たいおう</rt></ruby>" },
      weight: "14%",
      topics: [
        { title: { en: "Automated Healing", zh: "自动愈合", ja: "<ruby>自動<rt>じどう</rt></ruby><ruby>修復<rt>しゅうふく</rt></ruby>" } },
        { title: { en: "EventBridge Rules", zh: "EventBridge 规则", ja: "EventBridge ルール" } }
      ]
    },
    {
      title: { en: "Domain 6: Security and Compliance", zh: "领域 6：安全性和合规性", ja: "分野 6: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>とコンプライアンス" },
      weight: "17%",
      topics: [
        { title: { en: "IAM Governance", zh: "IAM 治理", ja: "IAM ガバナンス" } },
        { title: { en: "Compliance Automation", zh: "合规自动化", ja: "コンプライアンス<ruby>自動化<rt>じどうか</rt></ruby>" } }
      ]
    }
  ],

  // === Specialty ===
  'SCS-C02': [
    {
      title: { en: "Domain 1: Threat Detection and Incident Response", zh: "领域 1：威胁检测和事件响应", ja: "分野 1: <ruby>脅威<rt>きょうい</rt></ruby><ruby>検知<rt>けんち</rt></ruby>とインシデント<ruby>対応<rt>たいおう</rt></ruby>" },
      weight: "14%",
      topics: [
        { title: { en: "GuardDuty & Security Hub", zh: "GuardDuty 与 Security Hub", ja: "GuardDuty と Security Hub" } },
        { title: { en: "Incident Response Plan", zh: "事件响应计划", ja: "インシデント<ruby>対応<rt>たいおう</rt></ruby><ruby>計画<rt>けいかく</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 2: Security Logging and Monitoring", zh: "领域 2：安全日志记录和监控", ja: "分野 2: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>ロギングと<ruby>監視<rt>かんし</rt></ruby>" },
      weight: "18%",
      topics: [
        { title: { en: "CloudTrail & CloudWatch", zh: "CloudTrail 与 CloudWatch", ja: "CloudTrail と CloudWatch" } },
        { title: { en: "Log Analysis", zh: "日志分析", ja: "ログ<ruby>分析<rt>ぶんせき</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 3: Infrastructure Security", zh: "领域 3：基础设施安全", ja: "分野 3: インフラストラクチャ<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "WAF, Shield, Firewall Manager", zh: "WAF, Shield, 防火墙管理器", ja: "WAF, Shield, Firewall Manager" } },
        { title: { en: "VPC Security", zh: "VPC 安全", ja: "VPC <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Identity and Access Management", zh: "领域 4：身份和访问管理", ja: "分野 4: IAM (<ruby>アイデンティティ<rt>あいでんてぃてぃ</rt></ruby>と<ruby>アクセス<rt>あくせす</rt></ruby><ruby>管理<rt>かんり</rt></ruby>)" },
      weight: "16%",
      topics: [
        { title: { en: "IAM Policies & Roles", zh: "IAM 策略与角色", ja: "IAM ポリシーとロール" } },
        { title: { en: "Cognito & SSO", zh: "Cognito 与 SSO", ja: "Cognito と SSO" } }
      ]
    },
    {
      title: { en: "Domain 5: Data Protection", zh: "领域 5：数据保护", ja: "分野 5: <ruby>データ<rt>でーた</rt></ruby><ruby>保護<rt>ほご</rt></ruby>" },
      weight: "18%",
      topics: [
        { title: { en: "KMS & Encryption", zh: "KMS 与加密", ja: "KMS と<ruby>暗号化<rt>あんごうか</rt></ruby>" } },
        { title: { en: "Macie & Data Privacy", zh: "Macie 与数据隐私", ja: "Macie と<ruby>データ<rt>でーた</rt></ruby>プライバシー" } }
      ]
    },
    {
      title: { en: "Domain 6: Management and Governance", zh: "领域 6：管理和治理", ja: "分野 6: <ruby>管理<rt>かんり</rt></ruby>とガバナンス" },
      weight: "14%",
      topics: [
        { title: { en: "Organizations & SCPs", zh: "Organizations 与 SCPs", ja: "Organizations と SCP" } },
        { title: { en: "Control Tower", zh: "Control Tower", ja: "Control Tower" } }
      ]
    }
  ],
  'ANS-C01': [
    {
      title: { en: "Domain 1: Network Design", zh: "领域 1：网络设计", ja: "分野 1: <ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "30%",
      topics: [
        { title: { en: "Hybrid Networking (DX, VPN)", zh: "混合网络", ja: "ハイブリッドネットワーキング" } },
        { title: { en: "Multi-Account Networking (Transit Gateway)", zh: "多账户网络", ja: "<ruby>マルチアカウント<rt>まるちあかうんと</rt></ruby>ネットワーキング" } }
      ]
    },
    {
      title: { en: "Domain 2: Network Implementation", zh: "领域 2：网络实施", ja: "分野 2: <ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>実装<rt>じっそう</rt></ruby>" },
      weight: "26%",
      topics: [
        { title: { en: "Routing & Connectivity", zh: "路由与连接", ja: "ルーティングと<ruby>接続<rt>せつぞく</rt></ruby>" } },
        { title: { en: "Protocol Support", zh: "协议支持", ja: "プロトコルサポート" } }
      ]
    },
    {
      title: { en: "Domain 3: Network Management and Operations", zh: "领域 3：网络管理和运维", ja: "分野 3: <ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>管理<rt>かんり</rt></ruby>と<ruby>運用<rt>うんよう</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "Monitoring & Troubleshooting", zh: "监控与故障排除", ja: "<ruby>監視<rt>かんし</rt></ruby>とトラブルシューティング" } },
        { title: { en: "Network Automation", zh: "网络自动化", ja: "<ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>自動化<rt>じどうか</rt></ruby>" } }
      ]
    },
    {
      title: { en: "Domain 4: Network Security, Compliance, and Governance", zh: "领域 4：网络安全、合规性和治理", ja: "分野 4: <ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>、コンプライアンス、ガバナンス" },
      weight: "24%",
      topics: [
        { title: { en: "Traffic Inspection", zh: "流量检查", ja: "トラフィック<ruby>検査<rt>けんさ</rt></ruby>" } },
        { title: { en: "Network Access Control", zh: "网络访问控制", ja: "<ruby>ネットワーク<rt>ねっとわーく</rt></ruby><ruby>アクセス<rt>あくせす</rt></ruby><ruby>制御<rt>せいぎょ</rt></ruby>" } }
      ]
    }
  ],
  'MLS-C01': [
    {
      title: { en: "Domain 1: Data Engineering", zh: "领域 1：数据工程", ja: "分野 1: <ruby>データ<rt>でーた</rt></ruby>エンジニアリング" },
      weight: "20%",
      topics: [
        { title: { en: "Data Ingestion & Formatting", zh: "数据摄取与格式化", ja: "<ruby>データ<rt>でーた</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>みとフォーマット" } },
        { title: { en: "ETL Pipelines", zh: "ETL 流水线", ja: "ETL パイプライン" } }
      ]
    },
    {
      title: { en: "Domain 2: Exploratory Data Analysis", zh: "领域 2：探索性数据分析", ja: "分野 2: <ruby>探索<rt>たんさく</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>データ<rt>でーた</rt></ruby><ruby>分析<rt>ぶんせき</rt></ruby>" },
      weight: "24%",
      topics: [
        { title: { en: "Data Visualization", zh: "数据可视化", ja: "<ruby>データ<rt>でーた</rt></ruby><ruby>可視化<rt>かしか</rt></ruby>" } },
        { title: { en: "Feature Engineering", zh: "特征工程", ja: "<ruby>特徴<rt>とくちょう</rt></ruby><ruby>量<rt>りょう</rt></ruby>エンジニアリング" } }
      ]
    },
    {
      title: { en: "Domain 3: Modeling", zh: "领域 3：建模", ja: "分野 3: モデリング" },
      weight: "36%",
      topics: [
        { title: { en: "Algorithm Selection", zh: "算法选择", ja: "アルゴリズム<ruby>選択<rt>せんたく</rt></ruby>" } },
        { title: { en: "Model Training & Tuning", zh: "模型训练与调优", ja: "モデルのトレーニングとチューニング" } }
      ]
    },
    {
      title: { en: "Domain 4: Machine Learning Implementation and Operations", zh: "领域 4：机器学习实施和运维", ja: "分野 4: <ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>の<ruby>実装<rt>じっそう</rt></ruby>と<ruby>運用<rt>うんよう</rt></ruby>" },
      weight: "20%",
      topics: [
        { title: { en: "Model Deployment", zh: "模型部署", ja: "モデルデプロイ" } },
        { title: { en: "MLOps & Security", zh: "MLOps 与安全", ja: "MLOps と<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>" } }
      ]
    }
  ],

  // Fallback for others
  'DEFAULT': [
     {
      title: { en: "Domain 1: Concepts & Fundamentals", zh: "领域 1：概念与基础", ja: "分野 1: <ruby>概念<rt>がいねん</rt></ruby>と<ruby>基礎<rt>きそ</rt></ruby>" },
      weight: "25%",
      topics: [{ title: { en: "Key Concepts", zh: "关键概念", ja: "<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>概念<rt>がいねん</rt></ruby>" } }]
     },
     {
      title: { en: "Domain 2: Architecture & Design", zh: "领域 2：架构与设计", ja: "分野 2: アーキテクチャと<ruby>設計<rt>せっけい</rt></ruby>" },
      weight: "25%",
      topics: [{ title: { en: "Design Principles", zh: "设计原则", ja: "<ruby>設計<rt>せっけい</rt></ruby><ruby>原則<rt>げんそく</rt></ruby>" } }]
     },
     {
      title: { en: "Domain 3: Implementation & Operations", zh: "领域 3：实施与运维", ja: "分野 3: <ruby>実装<rt>じっそう</rt></ruby>と<ruby>運用<rt>うんよう</rt></ruby>" },
      weight: "25%",
      topics: [{ title: { en: "Operational Excellence", zh: "卓越运营", ja: "<ruby>運用<rt>うんよう</rt></ruby>の<ruby>卓越性<rt>たくえつせい</rt></ruby>" } }]
     },
     {
      title: { en: "Domain 4: Security & Compliance", zh: "领域 4：安全与合规", ja: "分野 4: <ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>とコンプライアンス" },
      weight: "25%",
      topics: [{ title: { en: "Risk Management", zh: "风险管理", ja: "<ruby>リスク<rt>りすく</rt></ruby><ruby>管理<rt>かんり</rt></ruby>" } }]
     }
  ]
};
