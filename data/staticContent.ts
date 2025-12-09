
import { TrilingualText } from '../types';

// Key format: "ExamCode:TopicEnglishTitle"
// This library provides instant, high-quality study materials without waiting for AI generation.
export const STATIC_CONTENT: Record<string, TrilingualText[]> = {
  // ==========================================
  // CLF-C02: Domain 1 - Cloud Concepts
  // ==========================================
  "CLF-C02:AWS Value Proposition": [
    {
      en: "<h3>Introduction to AWS Value Proposition</h3>",
      zh: "<h3>AWS 价值主张简介</h3>",
      ja: "<h3>AWS の<ruby>価値<rt>かち</rt></ruby><ruby>提案<rt>ていあん</rt></ruby>の<ruby>導入<rt>どうにゅう</rt></ruby></h3>"
    },
    {
      en: "<p>The AWS Value Proposition describes the main benefits of using the AWS Cloud. Understanding these helps in making the business case for cloud migration.</p>",
      zh: "<p>AWS 价值主张描述了使用 AWS 云的主要好处。理解这些有助于为云迁移制定商业案例。</p>",
      ja: "<p>AWS の<ruby>価値<rt>かち</rt></ruby><ruby>提案<rt>ていあん</rt></ruby>は、AWS <ruby>クラウド<rt>くらうど</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>する<ruby>主<rt>おも</rt></ruby>な<ruby>利点<rt>りてん</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しています。これらを<ruby>理解<rt>りかい</rt></ruby>することは、<ruby>クラウド<rt>くらうど</rt></ruby><ruby>移行<rt>いこう</rt></ruby>のビジネスケースを<ruby>作成<rt>さくせい</rt></ruby>するのに<ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>ちます。</p>"
    },
    {
      en: "<h3>Core Benefits</h3><ul><li><b>Agility:</b> Rapidly spin up resources.</li><li><b>Elasticity:</b> Scale based on demand.</li><li><b>Cost Savings:</b> Trade CapEx for variable OpEx.</li><li><b>Global Reach:</b> Deploy globally in minutes.</li></ul>",
      zh: "<h3>核心优势</h3><ul><li><b>敏捷性：</b> 快速启动资源。</li><li><b>弹性：</b> 根据需求进行扩展。</li><li><b>成本节约：</b> 将资本支出转换为可变运营支出。</li><li><b>全球覆盖：</b> 在几分钟内实现全球部署。</li></ul>",
      ja: "<h3><ruby>主要<rt>しゅよう</rt></ruby>なメリット</h3><ul><li><b><ruby>俊敏<rt>しゅんびん</rt></ruby><ruby>性<rt>せい</rt></ruby> (Agility):</b> リソースを<ruby>迅速<rt>じんそく</rt></ruby>に<ruby>起動<rt>きどう</rt></ruby>します。</li><li><b><ruby>弾力<rt>だんりょく</rt></ruby><ruby>性<rt>せい</rt></ruby> (Elasticity):</b> <ruby>需要<rt>じゅよう</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づいてスケーリングします。</li><li><b>コスト<ruby>削減<rt>さくげん</rt></ruby>:</b> <ruby>資本<rt>しほん</rt></ruby><ruby>支出<rt>ししゅつ</rt></ruby> (CapEx) を<ruby>可変<rt>かへん</rt></ruby><ruby>運用<rt>うんよう</rt></ruby><ruby>費<rt>ひ</rt></ruby> (OpEx) に<ruby>転換<rt>てんかん</rt></ruby>します。</li><li><b><ruby>世界的<rt>せかいてき</rt></ruby>な<ruby>展開<rt>てんかい</rt></ruby>:</b> <ruby>数分<rt>すうふん</rt></ruby>で<ruby>世界中<rt>せかいじゅう</rt></ruby>にデプロイできます。</li></ul>"
    }
  ],
  "CLF-C02:Cloud Economics & Billing": [
    {
      en: "<h3>Fundamentals of Cloud Economics</h3>",
      zh: "<h3>云经济学基础</h3>",
      ja: "<h3><ruby>クラウド<rt>くらうど</rt></ruby><ruby>経済<rt>けいざい</rt></ruby><ruby>学<rt>がく</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby></h3>"
    },
    {
      en: "<p>Cloud economics centers on the shift from hardware-centric to service-centric views. Key principles:</p><ul><li><b>Pay-as-you-go:</b> No upfront costs required.</li><li><b>Volume discounts:</b> The more you use, the less you pay per unit (e.g., S3 tiered pricing).</li></ul>",
      zh: "<p>云经济学的核心是从以硬件为中心的观点转变为以服务为中心的观点。关键原则：</p><ul><li><b>按需付费：</b> 无需预付费用。</li><li><b>用量折扣：</b> 使用得越多，单位成本越低（例如 S3 分层定价）。</li></ul>",
      ja: "<p><ruby>クラウド<rt>くらうど</rt></ruby><ruby>経済<rt>けいざい</rt></ruby><ruby>学<rt>がく</rt></ruby>は、ハードウェア<ruby>中心<rt>ちゅうしん</rt></ruby>からサービス<ruby>中心<rt>ちゅうしん</rt></ruby>への<ruby>視点<rt>してん</rt></ruby>の<ruby>転換<rt>てんかん</rt></ruby>に<ruby>焦点<rt>しょうてん</rt></ruby>を<ruby>当<rt>あ</rt></ruby>てています。<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>原則<rt>げんそく</rt></ruby>：</p><ul><li><b><ruby>従量<rt>じゅうりょう</rt></ruby><ruby>課金<rt>かきん</rt></ruby><ruby>制<rt>せい</rt></ruby>:</b> <ruby>初期<rt>しょき</rt></ruby><ruby>費用<rt>ひよう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>です。</li><li><b>ボリュームディスカウント:</b> <ruby>使用<rt>しよう</rt></ruby><ruby>量<rt>りょう</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えるほど、<ruby>単価<rt>たんか</rt></ruby>が<ruby>安<rt>やす</rt></ruby>くなります（<ruby>例<rt>れい</rt></ruby>：S3 <ruby>階層<rt>かいそう</rt></ruby><ruby>別<rt>べつ</rt></ruby><ruby>料金<rt>りょうきん</rt></ruby>）。</li></ul>"
    }
  ],
  "CLF-C02:Cloud Architecture Principles": [
    {
      en: "<h3>Well-Architected Framework</h3>",
      zh: "<h3>架构完善的框架 (Well-Architected Framework)</h3>",
      ja: "<h3>Well-Architected フレームワーク</h3>"
    },
    {
      en: "<p>This framework describes best practices for designing and operating reliable, secure, efficient, and cost-effective systems.</p>",
      zh: "<p>该框架描述了用于设计和运行可靠、安全、高效且具有成本效益的系统的最佳实践。</p>",
      ja: "<p>このフレームワークは、<ruby>信頼性<rt>しんらいせい</rt></ruby>、<ruby>安全性<rt>あんぜんせい</rt></ruby>、<ruby>効率性<rt>こうりつせい</rt></ruby>、コスト<ruby>効率<rt>こうりつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>いシステムを<ruby>設計<rt>せっけい</rt></ruby>および<ruby>運用<rt>うんよう</rt></ruby>するためのベストプラクティスを<ruby>記述<rt>きじゅつ</rt></ruby>しています。</p>"
    },
    {
       en: "<h3>The 6 Pillars</h3><ul><li><b>Operational Excellence:</b> Running and monitoring systems to deliver business value.</li><li><b>Security:</b> Protecting information and systems.</li><li><b>Reliability:</b> Recovering from failures (Self-healing).</li><li><b>Performance Efficiency:</b> Using IT and computing resources efficiently.</li><li><b>Cost Optimization:</b> Avoiding unnecessary costs.</li><li><b>Sustainability:</b> Minimizing environmental impact.</li></ul>",
       zh: "<h3>六大支柱</h3><ul><li><b>卓越运营：</b> 运行和监控系统以交付业务价值。</li><li><b>安全性：</b> 保护信息和系统。</li><li><b>可靠性：</b> 从故障中恢复（自愈）。</li><li><b>性能效率：</b> 高效使用 IT 和计算资源。</li><li><b>成本优化：</b> 避免不必要的成本。</li><li><b>可持续性：</b>以此最大限度地减少环境影响。</li></ul>",
       ja: "<h3>6つの<ruby>柱<rt>はしら</rt></ruby></h3><ul><li><b><ruby>運用<rt>うんよう</rt></ruby>の<ruby>卓越性<rt>たくえつせい</rt></ruby>:</b> ビジネス<ruby>価値<rt>かち</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>するためのシステムの<ruby>実行<rt>じっこう</rt></ruby>と<ruby>監視<rt>かんし</rt></ruby>。</li><li><b><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>:</b> <ruby>情報<rt>じょうほう</rt></ruby>とシステムの<ruby>保護<rt>ほご</rt></ruby>。</li><li><b><ruby>信頼性<rt>しんらいせい</rt></ruby>:</b> <ruby>障害<rt>しょうがい</rt></ruby>からの<ruby>回復<rt>かいふく</rt></ruby>（<ruby>自己<rt>じこ</rt></ruby><ruby>修復<rt>しゅうふく</rt></ruby>）。</li><li><b>パフォーマンス<ruby>効率<rt>こうりつ</rt></ruby>:</b> IT および<ruby>計算<rt>けいさん</rt></ruby>リソースの<ruby>効率<rt>こうりつ</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>使用<rt>しよう</rt></ruby>。</li><li><b>コスト<ruby>最適化<rt>さいてきか</rt></ruby>:</b> <ruby>不要<rt>ふよう</rt></ruby>なコストの<ruby>回避<rt>かいひ</rt></ruby>。</li><li><b><ruby>持続<rt>じぞく</rt></ruby><ruby>可能性<rt>かのうせい</rt></ruby>:</b> <ruby>環境<rt>かんきょう</rt></ruby>への<ruby>影響<rt>えいきょう</rt></ruby>の<ruby>最小化<rt>さいしょうか</rt></ruby>。</li></ul>"
    }
  ],
  "CLF-C02:Migration & Adoption Strategies": [
    {
      en: "<h3>Cloud Adoption Framework (CAF)</h3>",
      zh: "<h3>云采用框架 (CAF)</h3>",
      ja: "<h3><ruby>クラウド<rt>くらうど</rt></ruby><ruby>導入<rt>どうにゅう</rt></ruby>フレームワーク (CAF)</h3>"
    },
    {
      en: "<p>AWS CAF guides organizations in their cloud transformation journey through six perspectives:</p><ul><li><b>Business:</b> Strategy & Value.</li><li><b>People:</b> Roles & Skills.</li><li><b>Governance:</b> Prioritize & Control.</li><li><b>Platform:</b> Compute, Storage, Network.</li><li><b>Security:</b> IAM, Detection, Infrastructure.</li><li><b>Operations:</b> Health, Availability.</li></ul>",
      zh: "<p>AWS CAF 通过六个视角指导组织的云转型之旅：</p><ul><li><b>业务：</b> 战略与价值。</li><li><b>人员：</b> 角色与技能。</li><li><b>治理：</b> 优先级与控制。</li><li><b>平台：</b> 计算、存储、网络。</li><li><b>安全性：</b> IAM、检测、基础设施。</li><li><b>运营：</b> 运行状况、可用性。</li></ul>",
      ja: "<p>AWS CAF は、6 つの<ruby>視点<rt>してん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>じて<ruby>組織<rt>そしき</rt></ruby>の<ruby>クラウド<rt>くらうど</rt></ruby><ruby>変革<rt>へんかく</rt></ruby>の<ruby>旅<rt>たび</rt></ruby>を<ruby>導<rt>みちび</rt></ruby>きます。</p><ul><li><b>ビジネス:</b> <ruby>戦略<rt>せんりゃく</rt></ruby>と<ruby>価値<rt>かち</rt></ruby>。</li><li><b>ピープル:</b> <ruby>役割<rt>やくわり</rt></ruby>とスキル。</li><li><b>ガバナンス:</b> <ruby>優先<rt>ゆうせん</rt></ruby><ruby>順位<rt>じゅんい</rt></ruby>と<ruby>統制<rt>とうせい</rt></ruby>。</li><li><b>プラットフォーム:</b> <ruby>計算<rt>けいさん</rt></ruby>、ストレージ、<ruby>通信<rt>つうしん</rt></ruby>。</li><li><b><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>:</b> IAM、<ruby>検知<rt>けんち</rt></ruby>、インフラ。</li><li><b>オペレーション:</b> <ruby>健全性<rt>けんぜんせい</rt></ruby>、<ruby>可用性<rt>かようせい</rt></ruby>。</li></ul>"
    }
  ],
  "CLF-C02:Shared Responsibility Model": [
    {
      en: "<h3>Concept Overview</h3>",
      zh: "<h3>概念概述</h3>",
      ja: "<h3><ruby>概念<rt>がいねん</rt></ruby>の<ruby>概要<rt>がいよう</rt></ruby></h3>"
    },
    {
      en: "<p>Security is a shared responsibility between AWS and the customer. AWS manages the security <b>OF</b> the cloud, while the customer manages security <b>IN</b> the cloud.</p>",
      zh: "<p>安全是 AWS 和客户的共同责任。AWS 负责云<b>本身</b>的安全，而客户负责云<b>内部</b>的安全。</p>",
      ja: "<p><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>は、AWS とお<ruby>客様<rt>きゃくさま</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>で<ruby>共有<rt>きょうゆう</rt></ruby>される<ruby>責任<rt>せきにん</rt></ruby>です。AWS は「クラウド<b><ruby>自体<rt>じたい</rt></ruby></b>の<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>」を<ruby>管理<rt>かんり</rt></ruby>し、お<ruby>客様<rt>きゃくさま</rt></ruby>は「クラウド<b><ruby>内部<rt>ないぶ</rt></ruby></b>の<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>」を<ruby>管理<rt>かんり</rt></ruby>します。</p>"
    },
    {
      en: "<h3>AWS Responsibilities (Security OF the Cloud)</h3><ul><li>Physical security of data centers (Regions, Availability Zones).</li><li>Hardware and global infrastructure.</li><li>Network infrastructure (cabling, routers).</li><li>Virtualization layer (Hypervisor).</li></ul>",
      zh: "<h3>AWS 的责任 (云本身的安全)</h3><ul><li>数据中心的物理安全（区域、可用区）。</li><li>硬件和全球基础设施。</li><li>网络基础设施（布线、路由器）。</li><li>虚拟化层（Hypervisor）。</li></ul>",
      ja: "<h3>AWS の<ruby>責任<rt>せきにん</rt></ruby> (クラウド<b><ruby>自体<rt>じたい</rt></ruby></b>)</h3><ul><li>データセンターの<ruby>物理<rt>ぶつり</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>（リージョン、AZ）。</li><li>ハードウェアとグローバルインフラ。</li><li><ruby>ネットワーク<rt>ねっとわーく</rt></ruby>インフラ（ケーブル、ルーター）。</li><li><ruby>仮想化<rt>かそうか</rt></ruby><ruby>層<rt>そう</rt></ruby> (ハイパーバイザー)。</li></ul>"
    },
    {
      en: "<h3>Customer Responsibilities (Security IN the Cloud)</h3><ul><li>Customer data & content.</li><li>Operating system patching (for EC2).</li><li>IAM (Users, Roles, Policies).</li><li>Firewall configuration (Security Groups).</li><li>Client-side & Server-side encryption.</li></ul>",
      zh: "<h3>客户的责任 (云内部的安全)</h3><ul><li>客户数据和内容。</li><li>操作系统补丁（针对 EC2）。</li><li>IAM（用户、角色、策略）。</li><li>防火墙配置（安全组）。</li><li>客户端和服务器端加密。</li></ul>",
      ja: "<h3>お<ruby>客様<rt>きゃくさま</rt></ruby>の<ruby>責任<rt>せきにん</rt></ruby> (クラウド<b><ruby>内部<rt>ないぶ</rt></ruby></b>)</h3><ul><li>お<ruby>客様<rt>きゃくさま</rt></ruby>のデータとコンテンツ。</li><li>OS のパッチ<ruby>適用<rt>てきよう</rt></ruby> (EC2 の<ruby>場合<rt>ばあい</rt></ruby>)。</li><li>IAM (ユーザー、ロール、ポリシー)。</li><li>ファイアウォール<ruby>構成<rt>こうせい</rt></ruby> (<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>グループ)。</li><li>クライアント<ruby>側<rt>がわ</rt></ruby>およびサーバー<ruby>側<rt>がわ</rt></ruby>の<ruby>暗号化<rt>あんごうか</rt></ruby>。</li></ul>"
    }
  ],
  "CLF-C02:IAM Fundamentals": [
    {
      en: "<h3>Key Components</h3>",
      zh: "<h3>关键组件</h3>",
      ja: "<h3><ruby>主要<rt>しゅよう</rt></ruby>コンポーネント</h3>"
    },
    {
      en: "<ul><li><b>IAM User:</b> Represents a person or service.</li><li><b>IAM Group:</b> A collection of users.</li><li><b>IAM Role:</b> An identity assumed by a user or service for temporary access.</li><li><b>IAM Policy:</b> A JSON document defining permissions (Allow/Deny).</li></ul>",
      zh: "<ul><li><b>IAM 用户：</b> 代表个人或服务。</li><li><b>IAM 组：</b> 用户的集合。</li><li><b>IAM 角色：</b> 用户或服务为获得临时访问权限而代入的身份。</li><li><b>IAM 策略：</b> 定义权限（允许/拒绝）的 JSON 文档。</li></ul>",
      ja: "<ul><li><b>IAM ユーザー:</b> <ruby>人<rt>ひと</rt></ruby>またはサービスを<ruby>表<rt>あらわ</rt></ruby>します。</li><li><b>IAM グループ:</b> ユーザーの<ruby>集合<rt>しゅうごう</rt></ruby>。</li><li><b>IAM ロール:</b> 一時<ruby>的<rt>てき</rt></ruby>な<ruby>アクセス<rt>あくせす</rt></ruby>のためにユーザーやサービスが<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>ける ID。</li><li><b>IAM ポリシー:</b> <ruby>権限<rt>けんげん</rt></ruby>（<ruby>許可<rt>きょか</rt></ruby>/<ruby>拒否<rt>きょひ</rt></ruby>）を<ruby>定義<rt>ていぎ</rt></ruby>する JSON ドキュメント。</li></ul>"
    },
    {
      en: "<h3>Security Best Practices</h3><ul><li><b>MFA (Multi-Factor Authentication):</b> Always enable for Root User and privileged users.</li><li><b>Least Privilege:</b> Grant only necessary permissions.</li><li><b>Root User:</b> Never use for daily tasks; lock away access keys.</li></ul>",
      zh: "<h3>安全最佳实践</h3><ul><li><b>MFA (多因素认证)：</b> 始终为根用户和特权用户启用。</li><li><b>最小权限：</b> 仅授予必要的权限。</li><li><b>根用户：</b> 切勿用于日常任务；锁定访问密钥。</li></ul>",
      ja: "<h3><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>のベストプラクティス</h3><ul><li><b>MFA (<ruby>多要素認証<rt>たようそにんしょう</rt></ruby>):</b> ルートユーザーと<ruby>特権<rt>とっけん</rt></ruby>ユーザーには<ruby>常<rt>つね</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>にします。</li><li><b><ruby>最小<rt>さいしょう</rt></ruby><ruby>権限<rt>けんげん</rt></ruby>:</b> <ruby>必要<rt>ひつよう</rt></ruby>な<ruby>権限<rt>けんげん</rt></ruby>のみを<ruby>付与<rt>ふよ</rt></ruby>します。</li><li><b>ルートユーザー:</b> <ruby>日常<rt>にちじょう</rt></ruby><ruby>業務<rt>ぎょうむ</rt></ruby>には<ruby>使用<rt>しよう</rt></ruby>せず、<ruby>アクセス<rt>あくせす</rt></ruby>キーをロックします。</li></ul>"
    }
  ],
  "CLF-C02:Security Services (WAF, Shield, Inspector)": [
    {
      en: "<h3>Network & App Protection</h3>",
      zh: "<h3>网络与应用保护</h3>",
      ja: "<h3><ruby>ネットワーク<rt>ねっとわーく</rt></ruby>とアプリの<ruby>保護<rt>ほご</rt></ruby></h3>"
    },
    {
      en: "<ul><li><b>AWS WAF (Web Application Firewall):</b> Protects against common web exploits like SQL injection and XSS.</li><li><b>AWS Shield:</b> Managed DDoS protection. Standard (free) and Advanced (paid).</li></ul>",
      zh: "<ul><li><b>AWS WAF (Web 应用程序防火墙)：</b> 防止 SQL 注入和 XSS 等常见 Web 漏洞攻击。</li><li><b>AWS Shield：</b> 托管的 DDoS 保护。分标准版（免费）和高级版（付费）。</li></ul>",
      ja: "<ul><li><b>AWS WAF:</b> SQL インジェクションや XSS などの<ruby>一般的<rt>いっぱんてき</rt></ruby>な Web <ruby>攻撃<rt>こうげき</rt></ruby>から<ruby>保護<rt>ほご</rt></ruby>します。</li><li><b>AWS Shield:</b> マネージド DDoS <ruby>保護<rt>ほご</rt></ruby>。Standard (<ruby>無料<rt>むりょう</rt></ruby>) と Advanced (<ruby>有料<rt>ゆうりょう</rt></ruby>) があります。</li></ul>"
    },
    {
      en: "<h3>Detection & Compliance</h3><ul><li><b>Amazon Inspector:</b> Automated security assessment service that scans EC2 instances for vulnerabilities.</li><li><b>Amazon GuardDuty:</b> Intelligent threat detection service using machine learning to monitor logs (CloudTrail, VPC Flow Logs, DNS Logs).</li></ul>",
      zh: "<h3>检测与合规</h3><ul><li><b>Amazon Inspector：</b> 自动安全评估服务，扫描 EC2 实例的漏洞。</li><li><b>Amazon GuardDuty：</b> 智能威胁检测服务，使用机器学习监控日志（CloudTrail、VPC 流日志、DNS 日志）。</li></ul>",
      ja: "<h3><ruby>検知<rt>けんち</rt></ruby>とコンプライアンス</h3><ul><li><b>Amazon Inspector:</b> EC2 インスタンスの<ruby>脆弱<rt>ぜいじゃく</rt></ruby><ruby>性<rt>せい</rt></ruby>をスキャンする<ruby>自動<rt>じどう</rt></ruby><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby><ruby>評価<rt>ひょうか</rt></ruby>サービス。</li><li><b>Amazon GuardDuty:</b> <ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>してログを<ruby>監視<rt>かんし</rt></ruby>する<ruby>インテリジェント<rt>いんてりじぇんと</rt></ruby>な<ruby>脅威<rt>きょうい</rt></ruby><ruby>検知<rt>けんち</rt></ruby>サービス。</li></ul>"
    }
  ],
  "CLF-C02:Compliance & Governance": [
    {
      en: "<h3>AWS Artifact</h3><p>A self-service portal for on-demand access to AWS compliance reports (e.g., ISO, SOC, PCI DSS).</p>",
      zh: "<h3>AWS Artifact</h3><p>一个自助服务门户，用于按需访问 AWS 合规性报告（例如 ISO、SOC、PCI DSS）。</p>",
      ja: "<h3>AWS Artifact</h3><p>AWS コンプライアンスレポート（ISO、SOC、PCI DSS など）にオンデマンドで<ruby>アクセス<rt>あくせす</rt></ruby>できるセルフサービスポータル。</p>"
    }
  ],
  "CLF-C02:Compute (EC2, Lambda, ECS)": [
    {
      en: "<h3>Amazon EC2 (Elastic Compute Cloud)</h3><p>Provides resizable computing capacity in the cloud (IaaS).</p><ul><li><b>On-Demand:</b> Pay by hour/second.</li><li><b>Spot Instances:</b> Up to 90% off, can be interrupted.</li><li><b>Reserved Instances:</b> 1 or 3 year commitment for discount.</li></ul>",
      zh: "<h3>Amazon EC2</h3><p>在云中提供可调整大小的计算容量 (IaaS)。</p><ul><li><b>按需实例：</b> 按小时/秒付费。</li><li><b>Spot 实例：</b> 最高 90% 折扣，可能会被中断。</li><li><b>预留实例：</b> 1 年或 3 年承诺以获得折扣。</li></ul>",
      ja: "<h3>Amazon EC2</h3><p><ruby>クラウド<rt>くらうど</rt></ruby><ruby>内<rt>ない</rt></ruby>でサイズ<ruby>変更<rt>へんこう</rt></ruby><ruby>可能<rt>かのう</rt></ruby>な<ruby>計算<rt>けいさん</rt></ruby><ruby>能力<rt>のうりょく</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>します (IaaS)。</p><ul><li><b>オンデマンド:</b> <ruby>時間<rt>じかん</rt></ruby>/<ruby>秒<rt>びょう</rt></ruby>で<ruby>支払<rt>しはら</rt></ruby>います。</li><li><b>スポットインスタンス:</b> <ruby>最大<rt>さいだい</rt></ruby> 90% オフ、<ruby>中断<rt>ちゅうだん</rt></ruby>される<ruby>可能性<rt>かのうせい</rt></ruby>あり。</li><li><b>リザーブドインスタンス:</b> <ruby>割引<rt>わりびき</rt></ruby>のための 1 <ruby>年<rt>ねん</rt></ruby>または 3 <ruby>年<rt>ねん</rt></ruby>のコミットメント。</li></ul>"
    },
    {
      en: "<h3>AWS Lambda (Serverless)</h3><p>Run code without provisioning or managing servers. You pay only for the compute time you consume. Ideal for event-driven architectures.</p>",
      zh: "<h3>AWS Lambda (无服务器)</h3><p>无需预置或管理服务器即可运行代码。您只需为您消耗的计算时间付费。非常适合事件驱动的架构。</p>",
      ja: "<h3>AWS Lambda (サーバーレス)</h3><p>サーバーの<ruby>プロビジョニング<rt>ぷろびじょにんぐ</rt></ruby>や<ruby>管理<rt>かんり</rt></ruby>なしでコードを<ruby>実行<rt>じっこう</rt></ruby>します。<ruby>消費<rt>しょうひ</rt></ruby>した<ruby>計算<rt>けいさん</rt></ruby><ruby>時間<rt>じかん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>してのみ<ruby>支払<rt>しはら</rt></ruby>います。イベント<ruby>駆動<rt>くどう</rt></ruby><ruby>型<rt>がた</rt></ruby>アーキテクチャに<ruby>最適<rt>さいてき</rt></ruby>です。</p>"
    },
    {
      en: "<h3>Containers (ECS, EKS, Fargate)</h3><ul><li><b>Amazon ECS:</b> Elastic Container Service (Docker).</li><li><b>Amazon EKS:</b> Elastic Kubernetes Service.</li><li><b>AWS Fargate:</b> Serverless compute engine for containers.</li></ul>",
      zh: "<h3>容器服务</h3><ul><li><b>Amazon ECS：</b> 弹性容器服务 (Docker)。</li><li><b>Amazon EKS：</b> 弹性 Kubernetes 服务。</li><li><b>AWS Fargate：</b> 适用于容器的无服务器计算引擎。</li></ul>",
      ja: "<h3>コンテナ</h3><ul><li><b>Amazon ECS:</b> Docker コンテナ<ruby>管理<rt>かんり</rt></ruby>サービス。</li><li><b>Amazon EKS:</b> Kubernetes マネージドサービス。</li><li><b>AWS Fargate:</b> コンテナ<ruby>向<rt>む</rt></ruby>けのサーバーレス<ruby>計算<rt>けいさん</rt></ruby>エンジン。</li></ul>"
    }
  ],
  "CLF-C02:Storage (S3, EBS, EFS)": [
    {
      en: "<h3>Amazon S3 (Simple Storage Service)</h3><p>Object storage built to store and retrieve any amount of data. <b>Regional</b> service.</p><ul><li><b>S3 Standard:</b> Frequent access.</li><li><b>S3 Intelligent-Tiering:</b> Auto moves data to save costs.</li><li><b>S3 Glacier:</b> Archival storage (low cost, retrieval times vary).</li></ul>",
      zh: "<h3>Amazon S3 (简单存储服务)</h3><p>对象存储，旨在存储和检索任意数量的数据。<b>区域性</b>服务。</p><ul><li><b>S3 Standard：</b> 频繁访问。</li><li><b>S3 Intelligent-Tiering：</b> 自动移动数据以节省成本。</li><li><b>S3 Glacier：</b> 归档存储（低成本，检索时间各异）。</li></ul>",
      ja: "<h3>Amazon S3</h3><p>あらゆる<ruby>量<rt>りょう</rt></ruby>のデータを<ruby>保存<rt>ほぞん</rt></ruby>および<ruby>取得<rt>しゅとく</rt></ruby>するために<ruby>構築<rt>こうちく</rt></ruby>されたオブジェクトストレージ。<b>リージョン</b>サービス。</p><ul><li><b>S3 Standard:</b> <ruby>頻繁<rt>ひんぱん</rt></ruby>な<ruby>アクセス<rt>あくせす</rt></ruby>。</li><li><b>S3 Intelligent-Tiering:</b> コスト<ruby>節約<rt>せつやく</rt></ruby>のためにデータを<ruby>自動<rt>じどう</rt></ruby><ruby>移動<rt>いどう</rt></ruby>。</li><li><b>S3 Glacier:</b> アーカイブストレージ (<ruby>低<rt>てい</rt></ruby>コスト、<ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>し<ruby>時間<rt>じかん</rt></ruby>はさまざま)。</li></ul>"
    },
    {
      en: "<h3>Amazon EBS (Elastic Block Store)</h3><p>Block storage volumes for use with EC2 instances. <b>Zone-specific</b>. Like a virtual hard drive.</p>",
      zh: "<h3>Amazon EBS</h3><p>供 EC2 实例使用的块存储卷。<b>特定于可用区</b>。类似于虚拟硬盘。</p>",
      ja: "<h3>Amazon EBS</h3><p>EC2 インスタンスで<ruby>使用<rt>しよう</rt></ruby>するブロックストレージボリューム。<b>アベイラビリティーゾーン<ruby>固有<rt>こゆう</rt></ruby></b>。<ruby>仮想<rt>かそう</rt></ruby>ハードドライブのようなもの。</p>"
    },
    {
      en: "<h3>Amazon EFS (Elastic File System)</h3><p>Scalable, shared file storage (NFS) for use with EC2. Can be mounted by multiple instances at once.</p>",
      zh: "<h3>Amazon EFS</h3><p>供 EC2 使用的可扩展共享文件存储 (NFS)。可以同时被多个实例挂载。</p>",
      ja: "<h3>Amazon EFS</h3><p>EC2 で<ruby>使用<rt>しよう</rt></ruby>する<ruby>拡張<rt>かくちょう</rt></ruby><ruby>可能<rt>かのう</rt></ruby>な<ruby>共有<rt>きょうゆう</rt></ruby>ファイルストレージ (NFS)。<ruby>複数<rt>ふくすう</rt></ruby>のインスタンスから<ruby>同時<rt>どうじ</rt></ruby>にマウントできます。</p>"
    }
  ],
  "CLF-C02:Databases (RDS, DynamoDB)": [
    {
      en: "<h3>Amazon RDS (Relational Database Service)</h3><p>Managed relational databases (SQL). Supports MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, and <b>Amazon Aurora</b> (AWS optimized).</p>",
      zh: "<h3>Amazon RDS</h3><p>托管关系数据库 (SQL)。支持 MySQL、PostgreSQL、Oracle、SQL Server、MariaDB 和 <b>Amazon Aurora</b> (AWS 优化版)。</p>",
      ja: "<h3>Amazon RDS</h3><p>マネージド<ruby>型<rt>がた</rt></ruby><ruby>関係<rt>かんけい</rt></ruby><ruby>データベース<rt>でーたべーす</rt></ruby> (SQL)。MySQL、PostgreSQL、Oracle、SQL Server、MariaDB、および <b>Amazon Aurora</b> をサポートします。</p>"
    },
    {
      en: "<h3>Amazon DynamoDB</h3><p>Key-value and document database (NoSQL). Fully managed, serverless, and provides single-digit millisecond performance at any scale.</p>",
      zh: "<h3>Amazon DynamoDB</h3><p>键值和文档数据库 (NoSQL)。完全托管，无服务器，并在任何规模下提供个位数毫秒级的性能。</p>",
      ja: "<h3>Amazon DynamoDB</h3><p>キーバリューおよびドキュメント<ruby>データベース<rt>でーたべーす</rt></ruby> (NoSQL)。フルマネージド、サーバーレスで、あらゆる<ruby>規模<rt>きぼ</rt></ruby>で 1 <ruby>桁<rt>けた</rt></ruby>ミリ<ruby>秒<rt>びょう</rt></ruby>のパフォーマンスを<ruby>提供<rt>ていきょう</rt></ruby>します。</p>"
    }
  ],
  "CLF-C02:Networking (VPC, Route 53)": [
    {
      en: "<h3>Amazon VPC (Virtual Private Cloud)</h3><p>Logically isolated section of the AWS Cloud. Key components:</p><ul><li><b>Subnet:</b> Segment of IP address range (Public vs Private).</li><li><b>Internet Gateway (IGW):</b> Allows access to the internet.</li><li><b>Security Group:</b> Stateful firewall for instances.</li><li><b>NACL:</b> Stateless firewall for subnets.</li></ul>",
      zh: "<h3>Amazon VPC</h3><p>AWS 云的逻辑隔离部分。关键组件：</p><ul><li><b>子网：</b> IP 地址范围的片段（公有与私有）。</li><li><b>互联网网关 (IGW)：</b> 允许访问互联网。</li><li><b>安全组：</b> 实例的有状态防火墙。</li><li><b>NACL：</b> 子网的无状态防火墙。</li></ul>",
      ja: "<h3>Amazon VPC</h3><p>AWS <ruby>クラウド<rt>くらうど</rt></ruby>の<ruby>論理<rt>ろんり</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>分離<rt>ぶんり</rt></ruby>されたセクション。<ruby>主要<rt>しゅよう</rt></ruby>コンポーネント：</p><ul><li><b>サブネット:</b> IP アドレス<ruby>範囲<rt>はんい</rt></ruby>のセグメント（パブリックとプライベート）。</li><li><b>インターネットゲートウェイ (IGW):</b> インターネットへの<ruby>アクセス<rt>あくせす</rt></ruby>を<ruby>許可<rt>きょか</rt></ruby>します。</li><li><b><ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>グループ:</b> インスタンス<ruby>用<rt>よう</rt></ruby>のステートフルファイアウォール。</li><li><b>NACL:</b> サブネット<ruby>用<rt>よう</rt></ruby>のステートレスファイアウォール。</li></ul>"
    },
    {
      en: "<h3>Amazon Route 53</h3><p>Highly available and scalable cloud DNS (Domain Name System) web service. It translates names (www.example.com) to IP addresses.</p>",
      zh: "<h3>Amazon Route 53</h3><p>高可用且可扩展的云 DNS（域名系统）Web 服务。它将名称 (www.example.com) 转换为 IP 地址。</p>",
      ja: "<h3>Amazon Route 53</h3><p><ruby>高可用性<rt>こうかようせい</rt></ruby>と<ruby>拡張性<rt>かくちょうせい</rt></ruby>を<ruby>備<rt>そな</rt></ruby>えた<ruby>クラウド<rt>くらうど</rt></ruby> DNS (ドメインネームシステム) Web サービス。<ruby>名前<rt>なまえ</rt></ruby>を IP アドレスに<ruby>変換<rt>へんかん</rt></ruby>します。</p>"
    }
  ],
  "CLF-C02:AI/ML & Analytics": [
    {
      en: "<h3>Amazon SageMaker</h3><p>Fully managed service to build, train, and deploy machine learning models.</p>",
      zh: "<h3>Amazon SageMaker</h3><p>用于构建、训练和部署机器学习模型的完全托管服务。</p>",
      ja: "<h3>Amazon SageMaker</h3><p><ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>モデルを<ruby>構築<rt>こうちく</rt></ruby>、トレーニング、デプロイするためのフルマネージドサービス。</p>"
    },
    {
      en: "<h3>AI Services</h3><ul><li><b>Amazon Rekognition:</b> Image and video analysis.</li><li><b>Amazon Polly:</b> Text-to-speech.</li><li><b>Amazon Transcribe:</b> Speech-to-text.</li><li><b>Amazon Comprehend:</b> Natural language processing (NLP).</li></ul>",
      zh: "<h3>AI 服务</h3><ul><li><b>Amazon Rekognition：</b> 图像和视频分析。</li><li><b>Amazon Polly：</b> 文本转语音。</li><li><b>Amazon Transcribe：</b> 语音转文本。</li><li><b>Amazon Comprehend：</b> 自然语言处理 (NLP)。</li></ul>",
      ja: "<h3>AI サービス</h3><ul><li><b>Amazon Rekognition:</b> <ruby>画像<rt>がぞう</rt></ruby>およびビデオ<ruby>分析<rt>ぶんせき</rt></ruby>。</li><li><b>Amazon Polly:</b> テキストから<ruby>音声<rt>おんせい</rt></ruby>へ。</li><li><b>Amazon Transcribe:</b> <ruby>音声<rt>おんせい</rt></ruby>からテキストへ。</li><li><b>Amazon Comprehend:</b> <ruby>自然<rt>しぜん</rt></ruby><ruby>言語<rt>げんご</rt></ruby><ruby>処理<rt>しょり</rt></ruby> (NLP)。</li></ul>"
    }
  ],
  "CLF-C02:Pricing Models (On-Demand, Reserved, Spot)": [
    {
      en: "<h3>EC2 Pricing Strategies</h3><ul><li><b>On-Demand:</b> Flexible, no commitment, highest hourly rate.</li><li><b>Savings Plans:</b> Commit to a specific usage (e.g., $10/hour) for 1 or 3 years. flexible than RIs.</li><li><b>Reserved Instances (RI):</b> Commit to a specific instance configuration for 1 or 3 years.</li><li><b>Spot Instances:</b> Bid on unused capacity. Cheapest, but volatile.</li></ul>",
      zh: "<h3>EC2 定价策略</h3><ul><li><b>按需：</b> 灵活，无承诺，费率最高。</li><li><b>Savings Plans：</b> 承诺特定的使用量（例如 $10/小时）为期 1 或 3 年。比 RI 更灵活。</li><li><b>预留实例 (RI)：</b> 承诺特定的实例配置为期 1 或 3 年。</li><li><b>Spot 实例：</b> 竞标未使用的容量。最便宜，但易变。</li></ul>",
      ja: "<h3>EC2 <ruby>料金<rt>りょうきん</rt></ruby><ruby>戦略<rt>せんりゃく</rt></ruby></h3><ul><li><b>オンデマンド:</b> <ruby>柔軟<rt>じゅうなん</rt></ruby>、コミットメントなし、<ruby>最高<rt>さいこう</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby><ruby>単価<rt>たんか</rt></ruby>。</li><li><b>Savings Plans:</b> 1 <ruby>年<rt>ねん</rt></ruby>または 3 <ruby>年<rt>ねん</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>の<ruby>使用<rt>しよう</rt></ruby><ruby>量<rt>りょう</rt></ruby>（例：$10/<ruby>時間<rt>じかん</rt></ruby>）にコミットします。</li><li><b>リザーブドインスタンス (RI):</b> 1 <ruby>年<rt>ねん</rt></ruby>または 3 <ruby>年<rt>ねん</rt></ruby>の<ruby>特定<rt>とくてい</rt></ruby>のインスタンス<ruby>構成<rt>こうせい</rt></ruby>にコミットします。</li><li><b>スポットインスタンス:</b> <ruby>未使用<rt>みしよう</rt></ruby><ruby>容量<rt>ようりょう</rt></ruby>を<ruby>入札<rt>にゅうさつ</rt></ruby>します。<ruby>最安<rt>さいやす</rt></ruby>ですが、<ruby>変動<rt>へんどう</rt></ruby>します。</li></ul>"
    }
  ],
  "CLF-C02:Cost Management Tools": [
    {
      en: "<h3>Tools Overview</h3><ul><li><b>AWS Cost Explorer:</b> Visualize and analyze your costs and usage over time.</li><li><b>AWS Budgets:</b> Set custom budgets and receive alerts when you exceed them.</li><li><b>Cost & Usage Report (CUR):</b> The most granular data about your AWS costs.</li></ul>",
      zh: "<h3>工具概览</h3><ul><li><b>AWS Cost Explorer：</b> 可视化并分析您随时间推移的成本和使用情况。</li><li><b>AWS Budgets：</b> 设置自定义预算，并在超支时收到警报。</li><li><b>成本和使用情况报告 (CUR)：</b> 关于 AWS 成本的最精细数据。</li></ul>",
      ja: "<h3>ツール<ruby>概要<rt>がいよう</rt></ruby></h3><ul><li><b>AWS Cost Explorer:</b> <ruby>時間<rt>じかん</rt></ruby>の<ruby>経過<rt>けいか</rt></ruby>とともにコストと<ruby>使用<rt>しよう</rt></ruby><ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>可視化<rt>かしか</rt></ruby>および<ruby>分析<rt>ぶんせき</rt></ruby>します。</li><li><b>AWS Budgets:</b> カスタム<ruby>予算<rt>よさん</rt></ruby>を<ruby>設定<rt>せってい</rt></ruby>し、<ruby>超過<rt>ちょうか</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>にアラートを<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ります。</li><li><b>コストと<ruby>使用<rt>しよう</rt></ruby><ruby>状況<rt>じょうきょう</rt></ruby>レポート (CUR):</b> AWS コストに<ruby>関<ruby>かん</ruby>する<ruby>最<rt>もっと</rt></ruby>も<ruby>詳細<rt>しょうさい</rt></ruby>なデータ。</li></ul>"
    }
  ],
  "CLF-C02:Support Plans & Trusted Advisor": [
    {
      en: "<h3>Support Tiers</h3><ul><li><b>Basic:</b> Free. Customer service & documentation only.</li><li><b>Developer:</b> Business hours email access to Cloud Support Associates.</li><li><b>Business:</b> 24/7 phone/email/chat access to Cloud Support Engineers.</li><li><b>Enterprise:</b> Includes a Technical Account Manager (TAM).</li></ul>",
      zh: "<h3>支持层级</h3><ul><li><b>基础版：</b> 免费。仅限客户服务和文档。</li><li><b>开发人员版：</b> 营业时间内通过电子邮件联系云支持专员。</li><li><b>商业版：</b> 24/7 电话/邮件/聊天联系云支持工程师。</li><li><b>企业版：</b> 包含技术客户经理 (TAM)。</li></ul>",
      ja: "<h3>サポート<ruby>階層<rt>かいそう</rt></ruby></h3><ul><li><b>ベーシック:</b> <ruby>無料<rt>むりょう</rt></ruby>。カスタマーサービスとドキュメントのみ。</li><li><b>Developer:</b> <ruby>営業時間<rt>えいぎょうじかん</rt></ruby><ruby>内<rt>ない</rt></ruby>にメールでクラウドサポートアソシエイトに<ruby>連絡<rt>れんらく</rt></ruby><ruby>可能<rt>かのう</rt></ruby>。</li><li><b>Business:</b> 24 <ruby>時間<rt>じかん</rt></ruby> 365 <ruby>日<rt>にち</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>/メール/チャットでクラウドサポートエンジニアに<ruby>連絡<rt>れんらく</rt></ruby><ruby>可能<rt>かのう</rt></ruby>。</li><li><b>Enterprise:</b> テクニカルアカウントマネージャー (TAM) が<ruby>含<rt>ふく</rt></ruby>まれます。</li></ul>"
    },
    {
      en: "<h3>AWS Trusted Advisor</h3><p>An online tool that provides real-time guidance to help you provision your resources following AWS best practices.</p><p><b>5 Categories:</b> Cost Optimization, Performance, Security, Fault Tolerance, Service Limits.</p>",
      zh: "<h3>AWS Trusted Advisor</h3><p>一个在线工具，提供实时指导，帮助您按照 AWS 最佳实践配置资源。</p><p><b>5 个类别：</b> 成本优化、性能、安全性、容错能力、服务配额。</p>",
      ja: "<h3>AWS Trusted Advisor</h3><p>AWS のベストプラクティスに<ruby>従<rt>したが</rt></ruby>ってリソースを<ruby>プロビジョニング<rt>ぷろびじょにんぐ</rt></ruby>するのに<ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>つリアルタイムガイダンスを<ruby>提供<rt>ていきょう</rt></ruby>するオンラインツール。</p><p><b>5 つのカテゴリ:</b> コスト<ruby>最適化<rt>さいてきか</rt></ruby>、パフォーマンス、<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>、<ruby>耐障害性<rt>たいしょうがいせい</rt></ruby>、サービス<ruby>制限<rt>せいげん</rt></ruby>。</p>"
    }
  ],
  "SAA-C03:IAM & Access Controls": [
    {
      en: "<h3>Identity and Access Management (IAM) Overview</h3>",
      zh: "<h3>身份和访问管理 (IAM) 概述</h3>",
      ja: "<h3>Identity and Access Management (IAM) の<ruby>概要<rt>がいよう</rt></ruby></h3>"
    },
    {
      en: "<p>IAM is a global service that allows you to manage access to AWS services and resources securely. You can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.</p>",
      zh: "<p>IAM 是一项全球服务，允许您安全地管理对 AWS 服务和资源的访问。您可以创建和管理 AWS 用户和组，并使用权限来允许和拒绝他们访问 AWS 资源。</p>",
      ja: "<p>IAM は、AWS サービスやリソースへの<ruby>アクセス<rt>あくせす</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>管理<rt>かんり</rt></ruby>できるグローバルサービスです。AWS ユーザーとグループを<ruby>作成<rt>さくせい</rt></ruby>および<ruby>管理<rt>かんり</rt></ruby>し、<ruby>権限<rt>けんげん</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>して AWS リソースへの<ruby>アクセス<rt>あくせす</rt></ruby>を<ruby>許可<rt>きょか</rt></ruby>または<ruby>拒否<rt>きょひ</rt></ruby>できます。</p>"
    },
    {
      en: "<h3>Core Components of IAM</h3>",
      zh: "<h3>IAM 的核心组件</h3>",
      ja: "<h3>IAM の<ruby>主要<rt>しゅよう</rt></ruby>コンポーネント</h3>"
    },
    {
      en: "<ul><li><b>Users:</b> An entity that represents a person or application.</li><li><b>Groups:</b> A collection of users. Permissions applied to a group apply to all users in it.</li><li><b>Roles:</b> An identity with permission policies that can be assumed by anyone who needs it.</li><li><b>Policies:</b> Documents (JSON) that define permissions.</li></ul>",
      zh: "<ul><li><b>用户 (Users):</b> 代表个人或应用程序的实体。</li><li><b>组 (Groups):</b> 用户的集合。应用于组的权限适用于其中的所有用户。</li><li><b>角色 (Roles):</b> 具有权限策略的身份，任何需要它的人都可以代入该角色。</li><li><b>策略 (Policies):</b> 定义权限的文档 (JSON)。</li></ul>",
      ja: "<ul><li><b>ユーザー:</b> <ruby>人<rt>ひと</rt></ruby>またはアプリケーションを<ruby>表<rt>あらわ</rt></ruby>すエンティティ。</li><li><b>グループ:</b> ユーザーの<ruby>集<rt>あつ</rt></ruby>まり。グループに<ruby>適用<rt>てきよう</rt></ruby>された<ruby>権限<rt>けんげん</rt></ruby>は、その<ruby>中<rt>なか</rt></ruby>のすべてのユーザーに<ruby>適用<rt>てきよう</rt></ruby>されます。</li><li><b>ロール:</b> <ruby>必要<rt>ひつよう</rt></ruby>な<ruby>者<rt>もの</rt></ruby>が<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けることができる、<ruby>権限<rt>けんげん</rt></ruby>ポリシーを<ruby>持<rt>も</rt></ruby>つ ID。</li><li><b>ポリシー:</b> <ruby>権限<rt>けんげん</rt></ruby>を<ruby>定義<rt>ていぎ</rt></ruby>するドキュメント (JSON)。</li></ul>"
    },
    {
      en: "<h3>Principle of Least Privilege</h3>",
      zh: "<h3>最小权限原则</h3>",
      ja: "<h3><ruby>最小<rt>さいしょう</rt></ruby><ruby>権限<rt>けんげん</rt></ruby>の<ruby>原則<rt>げんそく</rt></ruby></h3>"
    },
    {
      en: "<p>This is a security best practice where you grant users only the permissions they need to perform a task, and no more. Start with zero permissions and add them as necessary.</p>",
      zh: "<p>这是一种安全最佳实践，即您仅授予用户执行任务所需的权限，而不授予更多权限。从零权限开始，并根据需要添加权限。</p>",
      ja: "<p>これは、タスクを<ruby>実行<rt>じっこう</rt></ruby>するために<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>権限<rt>けんげん</rt></ruby>のみをユーザーに<ruby>付与<rt>ふよ</rt></ruby>し、それ<ruby>以上<rt>いじょう</rt></ruby>は<ruby>付与<rt>ふよ</rt></ruby>しないという<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>のベストプラクティスです。<ruby>権限<rt>けんげん</rt></ruby>ゼロから<ruby>始<rt>はじ</rt></ruby>め、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>追加<rt>ついか</rt></ruby>します。</p>"
    }
  ],

  // ==========================================
  // AIF-C01: Domain 1 - Fundamentals of AI and ML
  // ==========================================
  "AIF-C01:AI/ML Concepts": [
    {
      en: "<h3>Artificial Intelligence (AI) vs Machine Learning (ML) vs Deep Learning (DL)</h3>",
      zh: "<h3>人工智能 (AI) vs 机器学习 (ML) vs 深度学习 (DL)</h3>",
      ja: "<h3><ruby>人工<rt>じんこう</rt></ruby><ruby>知能<rt>ちのう</rt></ruby> (AI) vs <ruby>機械<rt>きかい</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby> (ML) vs <ruby>深層<rt>しんそう</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby> (DL)</h3>"
    },
    {
      en: "<p><b>AI:</b> Any technique that enables computers to mimic human intelligence.<br/><b>ML:</b> A subset of AI that uses data to train models.<br/><b>DL:</b> A subset of ML based on artificial neural networks.</p>",
      zh: "<p><b>AI：</b> 使计算机能够模仿人类智能的任何技术。<br/><b>ML：</b> AI 的一个子集，利用数据来训练模型。<br/><b>DL：</b> ML 的一个子集，基于人工神经网络。</p>",
      ja: "<p><b>AI:</b> コンピュータが<ruby>人間<rt>にんげん</rt></ruby>の<ruby>知能<rt>ちのう</rt></ruby>を<ruby>模倣<rt>もほう</rt></ruby>することを<ruby>可能<rt>かのう</rt></ruby>にする<ruby>技術<rt>ぎじゅつ</rt></ruby>。<br/><b>ML:</b> データを<ruby>使用<rt>しよう</rt></ruby>してモデルをトレーニングする AI の<ruby>一部分<rt>いちぶぶん</rt></ruby>。<br/><b>DL:</b> <ruby>人工<rt>じんこう</rt></ruby>ニューラル<ruby>ネットワーク<rt>ねっとわーく</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づく ML の<ruby>一部分<rt>いちぶぶん</rt></ruby>。</p>"
    },
    {
      en: "<h3>Phases of ML Pipeline</h3><ul><li><b>Data Ingestion:</b> Collecting data.</li><li><b>Data Cleaning:</b> Handling missing values, duplicates.</li><li><b>Feature Engineering:</b> Transforming data for the model.</li><li><b>Training:</b> Teaching the model.</li><li><b>Inference:</b> Using the model to make predictions.</li></ul>",
      zh: "<h3>ML 管道的阶段</h3><ul><li><b>数据摄取：</b> 收集数据。</li><li><b>数据清洗：</b> 处理缺失值、重复项。</li><li><b>特征工程：</b> 为模型转换数据。</li><li><b>训练：</b> 教导模型。</li><li><b>推理：</b> 使用模型进行预测。</li></ul>",
      ja: "<h3>ML パイプラインの<ruby>段階<rt>だんかい</rt></ruby></h3><ul><li><b><ruby>データ<rt>でーた</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>込<rt>こ</rt></ruby>み:</b> データの<ruby>収集<rt>しゅうしゅう</rt></ruby>。</li><li><b><ruby>データ<rt>でーた</rt></ruby>クリーニング:</b> <ruby>欠損<rt>けっそん</rt></ruby><ruby>値<rt>ち</rt></ruby>や<ruby>重複<rt>ちょうふく</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>。</li><li><b><ruby>特徴<rt>とくちょう</rt></ruby><ruby>量<rt>りょう</rt></ruby>エンジニアリング:</b> モデル<ruby>用<rt>よう</rt></ruby>にデータを<ruby>変換<rt>へんかん</rt></ruby>。</li><li><b>トレーニング:</b> モデルの<ruby>学習<rt>がくしゅう</rt></ruby>。</li><li><b><ruby>推論<rt>すいろん</rt></ruby>:</b> モデルを<ruby>使用<rt>しよう</rt></ruby>した<ruby>予測<rt>よそく</rt></ruby>。</li></ul>"
    }
  ],
  "AIF-C01:Machine Learning Types": [
    {
      en: "<h3>Supervised Learning</h3><p>Training with labeled data (Input + Output known). Used for Classification (Spam vs Not Spam) and Regression (Predicting House Prices).</p>",
      zh: "<h3>监督学习</h3><p>使用标记数据进行训练（输入+输出已知）。用于分类（垃圾邮件与非垃圾邮件）和回归（预测房价）。</p>",
      ja: "<h3><ruby>教師<rt>きょうし</rt></ruby>あり<ruby>学習<rt>がくしゅう</rt></ruby></h3><p>ラベル<ruby>付<rt>つ</rt></ruby>きデータ（<ruby>入力<rt>にゅうりょく</rt></ruby>と<ruby>出力<rt>しゅつりょく</rt></ruby>が<ruby>既知<rt>きち</rt></ruby>）によるトレーニング。<ruby>分類<rt>ぶんるい</rt></ruby>（スパムか<ruby>否<rt>いな</rt></ruby>か）や<ruby>回帰<rt>かいき</rt></ruby>（<ruby>住宅<rt>じゅうたく</rt></ruby><ruby>価格<rt>かかく</rt></ruby><ruby>予測<rt>よそく</rt></ruby>）に<ruby>使用<rt>しよう</rt></ruby>されます。</p>"
    },
    {
      en: "<h3>Unsupervised Learning</h3><p>Training with unlabeled data (finding hidden patterns). Used for Clustering (Customer Segmentation) and Anomaly Detection.</p>",
      zh: "<h3>无监督学习</h3><p>使用未标记数据进行训练（寻找隐藏模式）。用于聚类（客户细分）和异常检测。</p>",
      ja: "<h3><ruby>教師<rt>きょうし</rt></ruby>なし<ruby>学習<rt>がくしゅう</rt></ruby></h3><p>ラベルなしデータ（<ruby>隠<rt>かく</rt></ruby>れたパターンの<ruby>発見<rt>はっけん</rt></ruby>）によるトレーニング。クラスタリング（<ruby>顧客<rt>こきゃく</rt></ruby>セグメンテーション）や<ruby>異常<rt>いじょう</rt></ruby><ruby>検知<rt>けんち</rt></ruby>に<ruby>使用<rt>しよう</rt></ruby>されます。</p>"
    },
    {
      en: "<h3>Reinforcement Learning</h3><p>Learning through trial and error (Reward vs Penalty). Used in Robotics, Gaming.</p>",
      zh: "<h3>强化学习</h3><p>通过试错学习（奖励与惩罚）。用于机器人技术、游戏。</p>",
      ja: "<h3><ruby>強化学習<rt>きょうかがくしゅう</rt></ruby></h3><p><ruby>試行錯誤<rt>しこうさくご</rt></ruby>（<ruby>報酬<rt>ほうしゅう</rt></ruby>とペナルティ）による<ruby>学習<rt>がくしゅう</rt></ruby>。ロボット<ruby>工学<rt>こうがく</rt></ruby>やゲームで<ruby>使用<rt>しよう</rt></ruby>されます。</p>"
    }
  ],

  // ==========================================
  // AIF-C01: Domain 2 - Fundamentals of Generative AI
  // ==========================================
  "AIF-C01:GenAI Concepts (LLMs, FM)": [
    {
      en: "<h3>Foundation Models (FMs)</h3><p>Large models trained on massive datasets that can be adapted for various downstream tasks (e.g., GPT, Claude, Stable Diffusion).</p>",
      zh: "<h3>基础模型 (FM)</h3><p>在海量数据集上训练的大型模型，可适应各种下游任务（例如 GPT、Claude、Stable Diffusion）。</p>",
      ja: "<h3><ruby>基盤<rt>きばん</rt></ruby>モデル (FM)</h3><p><ruby>膨大<rt>ぼうだい</rt></ruby>なデータセットでトレーニングされた<ruby>大規模<rt>だいきぼ</rt></ruby>モデルで、さまざまな下流タスク（GPT、Claude、Stable Diffusion など）に<ruby>適応<rt>てきおう</rt></ruby>できます。</p>"
    },
    {
      en: "<h3>Tokens & Context Window</h3><ul><li><b>Token:</b> Basic unit of text (word part).</li><li><b>Context Window:</b> Maximum amount of text the model can consider at once.</li></ul>",
      zh: "<h3>Token与上下文窗口</h3><ul><li><b>Token：</b> 文本的基本单位（单词的一部分）。</li><li><b>上下文窗口：</b> 模型一次可以考虑的最大文本量。</li></ul>",
      ja: "<h3>トークンとコンテキストウィンドウ</h3><ul><li><b>トークン:</b> テキストの<ruby>基本<rt>きほん</rt></ruby><ruby>単位<rt>たんい</rt></ruby>（<ruby>単語<rt>たんご</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>）。</li><li><b>コンテキストウィンドウ:</b> モデルが<ruby>一度<rt>いちど</rt></ruby>に<ruby>考慮<rt>こうりょ</rt></ruby>できるテキストの<ruby>最大<rt>さいだい</rt></ruby><ruby>量<rt>りょう</rt></ruby>。</li></ul>"
    },
    {
      en: "<h3>Inference Parameters</h3><ul><li><b>Temperature:</b> Controls randomness (Low = Deterministic, High = Creative).</li><li><b>Top-P:</b> Limits choices to top probability cumulative sum.</li></ul>",
      zh: "<h3>推理参数</h3><ul><li><b>Temperature：</b> 控制随机性（低 = 确定性，高 = 创造性）。</li><li><b>Top-P：</b> 将选择限制在最高概率累积和范围内。</li></ul>",
      ja: "<h3><ruby>推論<rt>すいろん</rt></ruby>パラメータ</h3><ul><li><b>Temperature (<ruby>温度<rt>おんど</rt></ruby>):</b> <ruby>ランダム性<rt>らんだむせい</rt></ruby>を<ruby>制御<rt>せいぎょ</rt></ruby>（<ruby>低<rt>ひく</rt></ruby>い = <ruby>決定的<rt>けっていてき</rt></ruby>、<ruby>高<rt>たか</rt></ruby>い = <ruby>創造的<rt>そうぞうてき</rt></ruby>）。</li><li><b>Top-P:</b> <ruby>累積<rt>るいせき</rt></ruby><ruby>確率<rt>かくりつ</rt></ruby>の<ruby>上位<rt>じょうい</rt></ruby>に<ruby>選択<rt>せんたく</rt></ruby>を<ruby>制限<rt>せいげん</rt></ruby>。</li></ul>"
    }
  ],
  "AIF-C01:Prompt Engineering": [
    {
      en: "<h3>Key Techniques</h3>",
      zh: "<h3>关键技术</h3>",
      ja: "<h3><ruby>主要<rt>しゅよう</rt></ruby>なテクニック</h3>"
    },
    {
      en: "<ul><li><b>Zero-shot:</b> Asking without examples.</li><li><b>Few-shot:</b> Providing a few examples of input/output.</li><li><b>Chain-of-Thought (CoT):</b> Asking the model to explain its reasoning step-by-step.</li></ul>",
      zh: "<ul><li><b>零样本 (Zero-shot)：</b> 没有提供示例直接提问。</li><li><b>少样本 (Few-shot)：</b> 提供少量输入/输出示例。</li><li><b>思维链 (CoT)：</b> 要求模型逐步解释其推理过程。</li></ul>",
      ja: "<ul><li><b>ゼロショット:</b> <ruby>例<rt>れい</rt></ruby>なしで<ruby>質問<rt>しつもん</rt></ruby>する。</li><li><b>フューショット:</b> <ruby>入力<rt>にゅうりょく</rt></ruby>/<ruby>出力<rt>しゅつりょく</rt></ruby>の<ruby>例<rt>れい</rt></ruby>をいくつか<ruby>提供<rt>ていきょう</rt></ruby>する。</li><li><b><ruby>思考<rt>しこう</rt></ruby>の<ruby>連鎖<rt>れんさ</rt></ruby> (CoT):</b> モデルに<ruby>推論<rt>すいろん</rt></ruby>をステップごとに<ruby>説明<rt>せつめい</rt></ruby>させる。</li></ul>"
    },
    {
      en: "<h3>Preventing Hallucinations</h3><p>Instruct the model to only answer based on provided context or to admit if it doesn't know the answer.</p>",
      zh: "<h3>防止幻觉</h3><p>指示模型仅根据提供的上下文回答，或者如果不知道答案则承认。</p>",
      ja: "<h3>ハルシネーション（<ruby>幻覚<rt>げんかく</rt></ruby>）の<ruby>防止<rt>ぼうし</rt></ruby></h3><p><ruby>提供<rt>ていきょう</rt></ruby>されたコンテキストのみに<ruby>基<rt>もと</rt></ruby>づいて<ruby>回答<rt>かいとう</rt></ruby>するか、<ruby>答<rt>こた</rt></ruby>えがわからない<ruby>場合<rt>ばあい</rt></ruby>はそう<ruby>認<rt>みと</rt></ruby>めるようモデルに<ruby>指示<rt>しじ</rt></ruby>します。</p>"
    }
  ],

  // ==========================================
  // AIF-C01: Domain 3 - Applications of Foundation Models
  // ==========================================
  "AIF-C01:Amazon Bedrock": [
    {
      en: "<h3>Overview</h3><p>A fully managed service that offers a choice of high-performing foundation models (FMs) via a single API. Serverless.</p>",
      zh: "<h3>概述</h3><p>一项完全托管的服务，通过单个 API 提供多种高性能基础模型 (FM) 的选择。无服务器。</p>",
      ja: "<h3><ruby>概要<rt>がいよう</rt></ruby></h3><p><ruby>単一<rt>たんいつ</rt></ruby>の API を<ruby>介<rt>かい</rt></ruby>して<ruby>高性能<rt>こうせいのう</rt></ruby>な<ruby>基盤<rt>きばん</rt></ruby>モデル (FM) の<ruby>選択肢<rt>せんたくし</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>するフルマネージドサービス。サーバーレス。</p>"
    },
    {
      en: "<h3>Key Features</h3><ul><li><b>Model Choice:</b> Amazon Titan, Claude (Anthropic), Llama 2 (Meta), Jurassic (AI21).</li><li><b>Knowledge Bases:</b> Connect FMs to your data sources for RAG (Retrieval-Augmented Generation).</li><li><b>Agents:</b> Execute multi-step tasks.</li><li><b>Guardrails:</b> Filter content based on safety policies.</li></ul>",
      zh: "<h3>主要功能</h3><ul><li><b>模型选择：</b> Amazon Titan, Claude (Anthropic), Llama 2 (Meta), Jurassic (AI21)。</li><li><b>知识库：</b> 将 FM 连接到数据源以实现 RAG（检索增强生成）。</li><li><b>代理 (Agents)：</b> 执行多步骤任务。</li><li><b>护栏 (Guardrails)：</b> 根据安全策略过滤内容。</li></ul>",
      ja: "<h3><ruby>主<rt>おも</rt></ruby>な<ruby>機能<rt>きのう</rt></ruby></h3><ul><li><b>モデルの<ruby>選択<rt>せんたく</rt></ruby>:</b> Amazon Titan, Claude (Anthropic), Llama 2 (Meta), Jurassic (AI21)。</li><li><b>ナレッジベース:</b> RAG (<ruby>検索<rt>けんさく</rt></ruby><ruby>拡張<rt>かくちょう</rt></ruby><ruby>生成<rt>せいせい</rt></ruby>) のために FM をデータソースに<ruby>接続<rt>せつぞく</rt></ruby>。</li><li><b>エージェント:</b> マルチステップタスクの<ruby>実行<rt>じっこう</rt></ruby>。</li><li><b>ガードレール:</b> <ruby>安全<rt>あんぜん</rt></ruby>ポリシーに<ruby>基<rt>もと</rt></ruby>づくコンテンツのフィルタリング。</li></ul>"
    }
  ],
  "AIF-C01:SageMaker JumpStart": [
    {
      en: "<h3>Overview</h3><p>A hub within Amazon SageMaker that provides access to pre-trained models and solutions. It allows for fine-tuning and deployment to your own infrastructure (endpoints).</p>",
      zh: "<h3>概述</h3><p>Amazon SageMaker 内的一个中心，提供对预训练模型和解决方案的访问。它允许微调并部署到您自己的基础设施（端点）。</p>",
      ja: "<h3><ruby>概要<rt>がいよう</rt></ruby></h3><p><ruby>事前<rt>じぜん</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby><ruby>済<rt>ず</rt></ruby>みモデルとソリューションへの<ruby>アクセス<rt>あくせす</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>する Amazon SageMaker <ruby>内<rt>ない</rt></ruby>のハブ。<ruby>微調整<rt>びちょうせい</rt></ruby> (ファインチューニング) して<ruby>独自<rt>どくじ</rt></ruby>のインフラ (エンドポイント) にデプロイできます。</p>"
    },
    {
      en: "<h3>Difference from Bedrock</h3><p>Bedrock is serverless (API access). SageMaker JumpStart gives you control over the underlying infrastructure (EC2 instances).</p>",
      zh: "<h3>与 Bedrock 的区别</h3><p>Bedrock 是无服务器的（API 访问）。SageMaker JumpStart 让您可以控制底层基础设施（EC2 实例）。</p>",
      ja: "<h3>Bedrock との<ruby>違<rt>ちが</rt></ruby>い</h3><p>Bedrock はサーバーレス (API <ruby>アクセス<rt>あくせす</rt></ruby>) です。SageMaker JumpStart では、<ruby>基盤<rt>きばん</rt></ruby>となるインフラ (EC2 インスタンス) を<ruby>制御<rt>せいぎょ</rt></ruby>できます。</p>"
    }
  ],

  // ==========================================
  // AIF-C01: Domain 4 - Guidelines for Responsible AI
  // ==========================================
  "AIF-C01:Ethics and Bias": [
    {
      en: "<h3>Bias in AI</h3><p>Models can inherit biases present in training data. <b>SageMaker Clarify</b> helps detect potential bias in data and models.</p>",
      zh: "<h3>AI 中的偏见</h3><p>模型可能会继承训练数据中存在的偏见。<b>SageMaker Clarify</b> 帮助检测数据和模型中的潜在偏见。</p>",
      ja: "<h3>AI におけるバイアス</h3><p>モデルはトレーニングデータに<ruby>存在<rt>そんざい</rt></ruby>するバイアスを<ruby>継承<rt>けいしょう</rt></ruby>する<ruby>可能性<rt>かのうせい</rt></ruby>があります。<b>SageMaker Clarify</b> は、データとモデルの<ruby>潜在<rt>せんざい</rt></ruby><ruby>的<rt>てき</rt></ruby>なバイアスを<ruby>検出<rt>けんしゅつ</rt></ruby>するのに<ruby>役<rt>やく</rt></ruby><ruby>立<rt>た</rt></ruby>ちます。</p>"
    },
    {
      en: "<h3>Responsible AI Principles</h3><ul><li>Fairness.</li><li>Explainability.</li><li>Privacy and Security.</li><li>Robustness.</li></ul>",
      zh: "<h3>负责任的 AI 原则</h3><ul><li>公平性。</li><li>可解释性。</li><li>隐私和安全。</li><li>鲁棒性。</li></ul>",
      ja: "<h3><ruby>責任<rt>せきにん</rt></ruby>ある AI の<ruby>原則<rt>げんそく</rt></ruby></h3><ul><li><ruby>公平性<rt>こうへいせい</rt></ruby>。</li><li><ruby>説明<rt>せつめい</rt></ruby><ruby>可能性<rt>かのうせい</rt></ruby>。</li><li>プライバシーと<ruby>セキュリティ<rt>せきゅりてぃ</rt></ruby>。</li><li><ruby>堅牢<rt>けんろう</rt></ruby><ruby>性<rt>せい</rt></ruby> (ロバストネス)。</li></ul>"
    }
  ],
  "AIF-C01:Transparency": [
    {
      en: "<h3>Explainability</h3><p>Understanding how a model arrived at a decision. Important for regulated industries (finance, healthcare).</p>",
      zh: "<h3>可解释性</h3><p>理解模型如何得出决定。对于受监管行业（金融、医疗保健）非常重要。</p>",
      ja: "<h3><ruby>説明<rt>せつめい</rt></ruby><ruby>可能性<rt>かのうせい</rt></ruby></h3><p>モデルがどのように<ruby>決定<rt>けってい</rt></ruby>に<ruby>至<rt>いた</rt></ruby>ったかを<ruby>理解<rt>りかい</rt></ruby>すること。<ruby>規制<rt>きせい</rt></ruby>のある<ruby>業界<rt>ぎょうかい</rt></ruby>（<ruby>金融<rt>きんゆう</rt></ruby>、ヘルスケア）で<ruby>重要<rt>じゅうよう</rt></ruby>です。</p>"
    },
    {
      en: "<h3>AI Service Cards</h3><p>AWS publishes AI Service Cards to provide transparent information about the intended use cases and limitations of their AI services.</p>",
      zh: "<h3>AI 服务卡</h3><p>AWS 发布 AI 服务卡，以提供有关其 AI 服务的预期用例和限制的透明信息。</p>",
      ja: "<h3>AI サービスカード</h3><p>AWS は、AI サービスの<ruby>意図<rt>いと</rt></ruby>されたユースケースと<ruby>制限<rt>せいげん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>透明性<rt>とうめいせい</rt></ruby>のある<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>するために AI サービスカードを<ruby>公開<rt>こうかい</rt></ruby>しています。</p>"
    }
  ],

  // ==========================================
  // AIF-C01: Domain 5 - Security, Compliance, and Governance
  // ==========================================
  "AIF-C01:AI Security": [
    {
      en: "<h3>Common Threats</h3><ul><li><b>Prompt Injection:</b> Manipulating input to bypass safety filters.</li><li><b>Data Poisoning:</b> Corrupting training data to compromise the model.</li><li><b>Model Inversion:</b> Reconstructing training data from model outputs.</li></ul>",
      zh: "<h3>常见威胁</h3><ul><li><b>提示注入 (Prompt Injection)：</b> 操纵输入以绕过安全过滤器。</li><li><b>数据投毒：</b> 破坏训练数据以危害模型。</li><li><b>模型反演：</b> 从模型输出重建训练数据。</li></ul>",
      ja: "<h3><ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>脅威<rt>きょうい</rt></ruby></h3><ul><li><b>プロンプトインジェクション:</b> <ruby>入力<rt>にゅうりょく</rt></ruby>を<ruby>操作<rt>そうさ</rt></ruby>して<ruby>安全<rt>あんぜん</rt></ruby>フィルターを<ruby>回避<rt>かいひ</rt></ruby>する。</li><li><b><ruby>データ<rt>でーた</rt></ruby>ポイズニング:</b> トレーニングデータを<ruby>破損<rt>はそん</rt></ruby>させてモデルを<ruby>侵害<rt>しんがい</rt></ruby>する。</li><li><b>モデル<ruby>反転<rt>はんてん</rt></ruby>:</b> モデルの<ruby>出力<rt>しゅつりょく</rt></ruby>からトレーニングデータを<ruby>再構築<rt>さいこうちく</rt></ruby>する。</li></ul>"
    },
    {
      en: "<h3>Bedrock Guardrails</h3><p>Apply content filters to both inputs (user prompts) and outputs (model responses). Detects PII, toxicity, and blocked topics.</p>",
      zh: "<h3>Bedrock 护栏</h3><p>对输入（用户提示）和输出（模型响应）应用内容过滤器。检测 PII、有害内容和屏蔽的主题。</p>",
      ja: "<h3>Bedrock ガードレール</h3><p><ruby>入力<rt>にゅうりょく</rt></ruby>（ユーザープロンプト）と<ruby>出力<rt>しゅつりょく</rt></ruby>（モデル<ruby>応答<rt>おうとう</rt></ruby>）の<ruby>両方<rt>りょうほう</rt></ruby>にコンテンツフィルターを<ruby>適用<rt>てきよう</rt></ruby>します。PII、<ruby>有害<rt>ゆうがい</rt></ruby><ruby>性<rt>せい</rt></ruby>、ブロックされたトピックを<ruby>検出<rt>けんしゅつ</rt></ruby>します。</p>"
    }
  ],
  "AIF-C01:Compliance Standards": [
    {
      en: "<h3>Human-in-the-loop (HITL)</h3><p>Incorporating human review for low-confidence predictions or sensitive workflows (e.g., Amazon A2I).</p>",
      zh: "<h3>人机协同 (Human-in-the-loop)</h3><p>对低置信度预测或敏感工作流纳入人工审查（例如 Amazon A2I）。</p>",
      ja: "<h3>ヒューマンインザループ (HITL)</h3><p><ruby>信頼度<rt>しんらいど</rt></ruby>の<ruby>低<rt>ひく</rt></ruby>い<ruby>予測<rt>よそく</rt></ruby>や<ruby>機密<rt>きみつ</rt></ruby><ruby>性<rt>せい</rt></ruby>の<ruby>高<rt>たか</rt></ruby>いワークフローに<ruby>人間<rt>にんげん</rt></ruby>のレビューを<ruby>組<rt>く</rt></ruby>み<ruby>込<rt>こ</rt></ruby>みます（例：Amazon A2I）。</p>"
    }
  ]
};
