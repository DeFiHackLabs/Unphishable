import { title } from "process";

export default {
  privacy: {
    title: "隐私政策",
    welcome:
      '欢迎来到 Unphishable 平台（以下称作"我们"、"本平台"），本平台是一个致力于通过模拟实战场景提升用户网络安全意识与技术能力的安全教育平台。使用本平台即表示您同意按照本隐私条款的规定收集、使用和存储您的信息。我们关心您的隐私，本隐私条款旨在帮助您了解我们会收集哪些信息、为什么收集这些信息。',
    description: "",
    sections: {
      informationCollection: {
        title: "1. 信息收集",
        description:
          "根据您与我们互动的情况，我们可能会收集关于您的不同类型的个人信息，包括但不限于您提供给我们的个人信息、我们自动收集的信息、我们从第三方获得的信息。我们收集这些信息是为了向您提供更好的体验，这些信息有助于我们根据您的个人情况定制相关内容，并确保增强您的个性化学习体验。",
        subsections: {
          provided: {
            title: "1.1 您提供给我们的信息",
            content:
              "当您直接向我们提供个人信息时，我们会收集这些信息，这些信息可能包括：姓名、电子邮件地址、电话号码、账单地址、支付信息、兴趣爱好等。",
          },
          automatic: {
            title: "1.2 我们自动收集的信息",
            content:
              "除了您提供给我们的个人信息外，我们还会自动收集一些信息，这些信息可能包括：唯一识别码信息、浏览器类型和设置、设备类型和设置、操作系统、移动网络信息（包括运营商名称和电话号码）以及应用程序版本号；我们还会收集您的应用程序、浏览器和设备与本平台进行互动的相关信息，其中可能包括您使用本网站的具体页面、访问日期、访问次数、在页面上花费的时长以及您的IP地址、崩溃报告等。",
          },
          thirdParty: {
            title: "1.3 我们从第三方获得的信息",
            content:
              "当您通过第三方网站进行登录或者绑定第三方网站时，我们会从第三方网站接收您的个人信息，例如：通过Facebook、X(Twitter)等社交网站账号登录，我们将接收您来自相应社交网站的个人信息；我们还可能从其他第三方来源接收个人信息，包括但不限于公共数据库和合作伙伴提供的个人信息或匿名信息。",
          },
        },
      },
      cookies: {
        title: "2. COOKIE",
        content:
          "Cookie是存储在您电脑上的小型文本文件，通过记住您的身份和偏好，为您提供更流畅的浏览体验。我们使用cookie技术收集您与网站互动的相关数据。这些数据帮助我们分析您的使用行为，提升网站的功能，并优化您的使用体验。我们所收集的信息包括您浏览的页面、在网站上停留的时长，以及您与网站不同部分的互动情况。所有收集到的数据都会被汇总并进行匿名处理，以确保您的隐私安全。如果您继续使用我们的网站，即表示您同意我们按照本条款所述的方式使用cookie并进行数据分析。",
      },
      personalizedServices: {
        title: "3. 提供个性化服务",
        content:
          "我们利用收集的信息分析您的学习需求和偏好为您提供个性化的服务，包括推荐安全教育课程，以及提供定制化的内容和定制化的模拟实战操作训练。",
      },
      updates: {
        title: "4. 本隐私政策的更新",
        content:
          "我们保留随时更新或修改本隐私条款的权利，请定期查看本条款以了解最新内容，恕不另行通知。",
      },
      contact: {
        title: "5. 联系我们",
        content:
          "如果您对本隐私条款有任何疑问，请通过 defihacklabs@gmail.com 联系我们。",
      },
    },
  },
  challengeCompletionModal: {
    congratulations: "恭喜！",
    completed: "您已完成",
    challenge: "已通过",
    earned: "获得",
    experiencePoints: "经验值",
    nextChallenge: "挑战下一关 →",
    challengeCompletion: "挑战完成，回到挑战列表",
    calculating: "计算执行中...",
    backToList: "返回列表",
  },
  googleSpoofedPhishing: {
    title: "谷歌钓鱼邮件挑战",
    subtitle: "学习识别冒充谷歌的电子邮件欺骗攻击",
    scenario: {
      title: "场景",
      description:
        "您收到了一封看似来自谷歌的电子邮件，提醒您账户存在可疑活动。邮件要求您点击链接验证身份。",
    },
    email: {
      title: "邮件",
      subject: "安全警报",
      content:
        "我们检测到您的谷歌账户存在异常活动。可能有人从新设备访问了您的账户。\n\n位置：乌克兰基辅\n时间：2025年4月10日，上午6:27 GMT+2\n设备：Windows PC\n\n如果这不是您本人操作，您的账户可能已被盗用。请立即验证您的身份以保护您的账户。",
      action: "点击下方按钮验证您的身份：",
      button: "验证身份",
      authentication: {
        title: "邮件认证：",
        spf: "SPF：通过",
        dkim: "DKIM：通过",
        dmarc: "DMARC：通过",
      },
    },
    securityCheck: {
      title: "安全检查",
      question1: {
        title: "这封邮件实际上是从哪个域名发送的？（检查邮件头）",
        placeholder: "输入域名（例如：example.com）",
        hint: "在邮件头中查找'Received from'或'Return-Path'",
      },
      question2: {
        title: "这是谷歌发送的合法邮件吗？",
        option1: "是的，这是合法邮件",
        option2: "不，这是钓鱼尝试",
      },
      submitButton: "提交答案",
    },
    challengeResult: {
      success: {
        title: "正确！您已识别出钓鱼尝试。",
        description:
          "这封邮件被伪造成看似来自谷歌，但实际上是从privateemail.com发送的。尽管通过了SPF、DKIM和DMARC检查，但这封邮件是欺诈性的。",
      },
      failure: {
        title: "不正确。请重试！",
        tryAgain: "重试",
      },
    },
    fakeSupport: {
      urlBar:
        "sites.google.com/u/0/d/1XMlxkFiq54WpH2tKqay2EPnhN0Ukovet/preview",
      title: "支持案例",
      tabs: {
        allCases: "所有案例",
        open: "未处理",
        inProgress: "处理中",
        resolved: "已解决",
        closed: "已关闭",
      },
      searchPlaceholder: "搜索支持案例",
      caseDetails: {
        title: "法律调查支持",
        status: {
          inProgress: "处理中",
          urgent: "紧急",
        },
        reference: "内部参考 #GS-17-000918456 • 于2025年4月9日开启",
        description1:
          "您的法律请求目前正在审核中。此事项需要额外的文档进行处理。",
        description2:
          "我们的团队已收到您提交的文档和支持材料。正在进行审核以确定下一步。",
        documentReview: {
          title: "法律文档审核 - 进行中",
          estimatedCompletion: "预计完成时间：2025年4月11日",
        },
        buttons: {
          uploadDocuments: "上传额外文档",
          viewCase: "查看案例",
        },
      },
      footer: {
        privacy: "隐私",
        terms: "条款",
        help: "帮助",
        about: "关于",
        copyright: "© 2025 谷歌有限责任公司",
      },
    },
    challengeAnalysis: {
      title: "挑战分析",
      keyFindings: {
        title: "关键发现",
        points: [
          "邮件头显示消息经过 privateemail.com 中继后才到达最终目的地。",
          "尽管有看似合法的认证结果（DKIM、SPF、DMARC），邮件路由路径显示可疑的中继点。",
          "伪造的 Google 支持页面托管在 sites.google.com，这是钓鱼者常用的策略，使 URL 看起来合法。",
        ],
      },
      securityLessons: {
        title: "重要安全经验",
        lessons: [
          "始终检查邮件头以追踪邮件的实际路径，而不仅仅是认证结果。",
          "对任何要求通过第三方域名验证身份或账户安全的请求保持警惕。",
          "Google 永远不会要求您通过用户创建的 Sites 页面验证账户。",
          "即使邮件通过了 DKIM/SPF/DMARC 检查，它仍可能是复杂钓鱼攻击的一部分。",
        ],
      },
      preventionTips: {
        title: "预防建议",
        tips: [
          "始终直接通过 google.com 访问 Google 服务，而不是通过邮件中的链接。",
          "在您的账户上启用双重认证。",
          "向您组织的安全团队报告可疑邮件。",
          "如有疑问，请通过官方渠道联系 Google 支持。",
        ],
      },
    },
  },
  transactionSimulationSpoofing: {
    title: "交易模拟欺骗挑战",
    description: "本页展示攻击者如何利用交易模拟与执行之间的时间差进行攻击",
    warning: "仅供教育目的 - 请在实际交易中保持谨慎",
    scenario: {
      title: '情境："免费NFT领取"陷阱',
      description1:
        '想象一下，你收到一则消息声称你有资格获得限量版的"早期支持者NFT"。网站看起来很专业，声称你只需支付极小额的0.00001 ETH加上燃料费就能领取这个NFT。',
      description2:
        '当你连接钱包并点击"领取"按钮时，你的钱包显示交易模拟，表明这只是一个需要最低费用的简单领取操作。然而，合约中包含可在执行期间窃取你资产的恶意代码。',
    },

    buttons: {
      claimNFT: "领取NFT",
    },

    howItWorks: {
      title: "运作原理",
      step1:
        "交易模拟是现代Web3钱包中的一项功能，允许用户在交易执行前预览交易结果。",
      step2:
        "然而，模拟与实际执行之间存在时间差，恶意行为者可以利用这一点来欺骗用户。",
      step3:
        "攻击者可以在模拟后但执行前改变合约状态，导致实际交易结果与模拟显示的完全不同。",
    },

    exploitation: {
      title: "攻击机制",
      description:
        "核心漏洞在于交易模拟与执行之间的时间差。恶意行为者已开发出钓鱼网站，可以在这个关键时间窗口内操纵链上状态，导致灾难性后果。",
      steps: [
        '攻击者创建看似合法的DeFi网站，提供"免费空投"或其他诱人奖励。',
        "当用户尝试领取奖励时，网站提示他们签署交易。",
        "用户的钱包显示交易模拟，表明这只是一个简单的领取操作，只需花费少量ETH作为燃料费。",
        "然而，在用户确认后但交易被挖矿前，攻击者的后端迅速改变合约状态。",
        "当交易最终执行时，它实际上将用户钱包中的所有资产转移到攻击者的地址。",
      ],
    },

    realWorldExamples: {
      title: "真实案例",
      description:
        '2025年，多位用户在与看似合法的DeFi平台互动时损失了数百万美元。这些平台使用交易模拟欺骗技术，让用户相信他们在执行安全交易，但实际上却在授权完全不同的操作。更多详情，请参阅 <a href="https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Transaction Simulation Spoofing: A New Threat in Web3</a>。',
    },

    protection: {
      title: "保护指南",
      description: "为了保护自己免受这些复杂攻击，请遵循以下指南：",
      guidelines: [
        "彻底检查交易细节 - 不要仅依靠模拟预览",
        "独立验证所有合约互动 - 使用区块链浏览器检查合约代码和互动",
        '对"免费领取"优惠保持怀疑 - 如果听起来好得难以置信，可能就是陷阱',
        "坚持使用受信任且经验证的dApp - 使用官方网站并仔细检查URL",
        "考虑使用安全工具 - 如ScamSniffer等扩展可帮助识别钓鱼尝试",
        "检查交易时间戳 - 如果模拟结果超过几秒钟，请保持警惕",
      ],
    },

    quiz: {
      title: "知识检查",
      question: "是什么使交易模拟欺骗攻击成为可能？",
      options: {
        incorrect1: "钱包软件中的智能合约漏洞",
        correct: "交易模拟与执行之间的时间差",
        incorrect2: "窃取私钥的钓鱼邮件",
      },
      correctMessage:
        "正确！交易模拟欺骗利用交易被模拟和实际执行之间的时间差。在这个间隙中，攻击者可以修改合约状态，导致实际交易结果与模拟中显示的不同。",
      incorrect1Message:
        "不太正确。虽然钱包软件漏洞可能在其他攻击中被利用，但交易模拟欺骗特别利用的是交易模拟与执行之间的时间差。",
      incorrect2Message:
        "不太正确。窃取私钥的钓鱼邮件是另一种攻击类型。交易模拟欺骗特别利用的是交易模拟与执行之间的时间差。",
    },

    transactionReview: {
      title: "检视模拟交易",
      nftName: "MetaApes俱乐部NFT领取",
      website: "earlyapes.xyz",
      simulationTitle: "交易模拟",
      secondsAgo: "秒前",
      function: "功能：",
      receive: "你将获得：",
      fee: "费用：",
      gasFee: "燃料费：",
      nftAmount: "1个早期支持者NFT",
      feeAmount: "0.00001 ETH ($0.02)",
      gasFeeAmount: "约0.002 ETH ($3.50)",
      note: "注意：",
      noteDescription:
        "此模拟基于当前合约状态。如果合约状态在执行前发生变化，实际结果可能会有所不同。",
    },

    metamask: {
      signatureRequest: "签名请求",
      website: "网站：",
      action: "行动：",
      claimNFT: "领取NFT",
      fee: "费用：",
      gasFee: "燃料费：",
      authorizeMessage: "签署此消息，即授权从你的钱包转移1 ETH。",
      processingTransaction: "处理交易中...",
      pleaseWait: "请等待交易处理完成。",
      resultTitle: "交易已执行！",
      warningTitle: "警告：意外结果",
      warningDesc: "交易结果与模拟中显示的不同。",
      expected: "预期结果（模拟）",
      expectedReceive: "获得：1个早期支持者NFT",
      expectedFee: "费用：0.00001 ETH ($0.02)",
      expectedGasFee: "燃料费：0.002 ETH ($3.50)",
      actual: "实际结果（执行）",
      actualReceive: "获得：无",
      actualFee: "费用：1 ETH ($1,750)",
      actualGasFee: "燃料费：0.002 ETH ($3.50)",
      whatHappened: "发生了什么？",
      explanation1:
        "这是一次交易模拟欺骗攻击。在模拟和执行之间，攻击者改变了合约状态，导致结果与模拟中显示的完全不同。",
      explanation2:
        "在这种情况下，交易实际上授权攻击者花费你的所有代币，而不是领取NFT。",
    },

    educationalMessage:
      "这是一个安全的教育模拟，帮助你了解交易模拟欺骗攻击。不涉及任何风险，请放心继续模拟以了解更多关于这种攻击方法的信息。",
  },
  governanceProposalPhishing: {
    title: "DAO治理提案投票挑战",
    subtitle: "学习识别和避免恶意治理提案钓鱼攻击",
    warning: "仅供教育目的 - 这是一个恶意治理提案的模拟",
    proposalTitle: "紧急安全提案 #42",
    proposalDescriptionLabel: "提案描述：",
    proposalDescription:
      "针对最近发现的安全漏洞，我们需要紧急更新协议的安全参数。这将保护所有用户的资金。",
    proposerLabel: "提案提交者：",
    proposer: "核心开发团队",
    deadlineLabel: "截止时间：",
    deadline: "24小时内",
    buttonVoteFor: "投赞成票",
    buttonVoteAgainst: "投反对票",
    walletStatus: {
      pleaseConnect: "请连接您的钱包",
      connected: "钱包已连接！您现在可以投票。",
      connectionError: "连接钱包时出错",
      installMetaMask: "请安装MetaMask钱包",
      connectFirst: "请先连接您的钱包",
    },
    challengeResult: {
      success: {
        title: "挑战成功！",
        description:
          "恭喜！您成功识别并拒绝了钓鱼尝试。在真实的DAO治理提案中，攻击者可能会试图诱骗您签署恶意消息，从而获取您资产的控制权。",
      },
      failure: {
        title: "挑战失败！",
        description:
          "您签署了一个恶意消息！在真实场景中，这可能导致您的资产被盗。攻击者经常伪装成紧急治理提案，诱骗用户签署看似无害但实际上会授权资产转移的消息。",
      },
    },
    protectionTips: {
      title: "保护提示：",
      tips: [
        "始终仔细阅读要求您签署的消息内容。",
        "对紧急或时间敏感的提案保持警惕，这是常见的紧迫性策略。",
        "通过官方渠道验证治理提案的真实性。",
        "使用支持消息签名预览的钱包，如MetaMask。",
      ],
    },
    buttons: {
      retryChallenge: "重试挑战",
      connectWallet: "连接钱包",
      backToChallenges: "← 返回挑战",
    },
    phishingAnalysis: {
      warning: "警告: 这是一个钓鱼尝试！",
      voteMessage: "这个投票实际上要求您签署以下消息：",
      signatureConsequence:
        "如果您签署了这个消息，攻击者可以利用您的签名来转移您的资产。",
      alwaysRead: "在真实情况下，永远仔细阅读您被要求签署的消息内容！",
      title: "钓鱼手法解析",
      description: "这次挑战模拟了一个常见的 DAO 治理提案钓鱼攻击：",
      techniques: [
        "攻击者伪装成合法的 DAO 治理平台发送投票请求",
        "投票看似是关于一个紧急安全提案，营造紧迫感",
        "实际上，用户被要求签署的消息与显示的提案内容完全不同",
        "如果用户签署了消息，攻击者可以使用该签名来盗取资产",
      ],
      protectionTitle: "保护措施：",
      protectionMeasures: [
        "始终仔细阅读 MetaMask 中显示的实际签名消息内容",
        "确认签名请求来自可信任的来源",
        "对于紧急或时间敏感的请求保持警惕",
        "使用专门的治理平台（如 Snapshot）进行 DAO 投票",
      ],
      whatWentWrong: "出了什么问题？",
      signedMessage: "您签署了一个恶意消息，内容为：",
      attackerCould: "在真实场景中，攻击者可以使用此签名来窃取您的资产。",
    },
  },
  advancedGovernancePhishing: {
    title: "高级治理钓鱼攻击",
    subtitle: "挑战：识别复杂的治理钓鱼技术",
    warning: "仅供教育目的 - 钓鱼模拟",
    description: "此挑战模拟针对 DeFi 治理参与者的真实钓鱼攻击",
    scenario: {
      title: "场景描述",
      description:
        "您是 QuantumDAO 协议中拥有重要投票权的治理参与者。您收到一封关于需要立即关注的紧急治理提案的电子邮件通知。该电子邮件包含一个看似是 QuantumDAO 治理门户的链接。",
    },
    warning_detail:
      "警告：这是一个钓鱼模拟场景。以下界面旨在展示针对 DeFi 治理参与者的复杂钓鱼技术。不会执行任何真实交易。",
    note: "⚠️ 注意：这是一个钓鱼模拟挑战。请仔细观察并识别潜在的钓鱼技术。",
    urlBar: {
      domainWarning: "注意：这个域名使用了希腊字母 α 来冒充字母 a",
    },
    governance: {
      logo: "QuantumDAO 治理",
      tabs: {
        dashboard: "活跃提案",
        proposals: "已执行",
        delegate: "已拒绝",
        forum: "委托",
      },
      connectWallet: "连接钱包",
      proposal: {
        title: "QIP-137：资金库管理紧急安全更新",
        id: "ID：0x7a9d...e3f2",
        status: "进行中",
        description:
          "此紧急提案解决了 QuantumDAO 资金库管理系统中的一个关键安全漏洞。该漏洞可能允许未经授权访问资金库资金。此提案通过将资金库管理合约更新为新的审核版本来实施安全补丁。",
        stats: {
          for: "赞成",
          against: "反对",
          abstain: "弃权",
          required: "所需比例",
          remaining: "剩余时间",
        },
        buttons: {
          voteFor: "投票赞成",
          voteAgainst: "投票反对",
          abstain: "弃权",
        },
      },
      pastProposal: {
        title: "QIP-136：协议费用调整",
        id: "ID：0x3b2c...9f7a",
        status: "已通过",
        description:
          "此提案调整协议费用结构，以优化收入生成，同时为用户维持具竞争力的费率。费用调整将增加协议资金库的可持续性。",
      },
    },
    walletPrompt: {
      message1:
        "要对此提案进行投票，您需要签署一条确认您投票的消息。这是验证您拥有治理代币的标准程序。",
      message2: "签署前请仔细检查交易详情。",
      signButton: "签署交易",
    },
    metamaskPopup: {
      title: "签名请求",
      countdown: "注意：提案投票将在以下时间内结束",
      gasOptimization:
        "燃料费优化：使用批量交易可节省高达 45% 的燃料费。点击签署以使用优化交易。",
      rejectButton: "拒绝",
      signButton: "签署",
      voteTypes: {
        for: "赞成",
        against: "反对",
        abstain: "弃权",
      },
      signatureMessage:
        "签署消息以确认您对 QIP-157：协议升级和资金安全的{voteType}投票\n\nNonce: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e\n过期时间: 1小时\n投票类型: {voteType}\n\n交易数据:\n{transactionData}\n\n函数调用:\n{maliciousFunction}({voteValue}, 0x157)\n\n警告：签署此消息即表示您确认对此治理提案的投票。",
    },
    challenge: {
      title: "您的挑战",
      description:
        "仔细检查上面的 QuantumDAO 治理界面。您能识别出这个复杂攻击中使用的钓鱼指标和技术吗？",
      instruction:
        "点击「连接钱包」按钮继续模拟，测试您识别治理钓鱼技术的能力。",
      questions: {
        question1: {
          title: "问题 1：这个模拟展示了哪种钓鱼技术？",
          options: [
            "标准的 URL 欺骗，使用相似域名",
            "通过虚假紧急情况和关键漏洞声明进行社交工程",
            "恶意交易签名，实际上是转移治理代币而非投票",
            "以上所有选项",
          ],
        },
        question2: {
          title: "问题 2：方法选择器 0x0900f010 代表什么？",
          options: [
            "vote(bool,uint256)",
            "upgrade(bool,uint256)",
            "approveAndCall(address,uint256)",
            "无法确定，需要检查合约 ABI",
          ],
        },
        submitButton: "提交答案",
      },
      success: {
        title: "🎉 挑战成功！",
        points: [
          "使用相似域名的 URL 欺骗",
          "通过「紧急」提案制造虚假紧急感",
          "利用对治理流程的信任",
          "请求恶意交易签名，实际上会转移您的代币或授予权限",
        ],
        conclusion:
          "在真实的治理系统中，请始终通过仔细检查 URL、通过官方渠道确认提案，并使用能够准确显示您正在签署内容的硬件钱包来验证平台的真实性。",
        congratulation:
          "恭喜！您已成功识别出这个治理钓鱼攻击使用的多重技术。这种攻击结合了 URL 欺骗、虚假紧急情况和恶意交易签名等多种手段，是一个复杂的社会工程学攻击。",
      },
      failure: {
        title: "❌ 请再试一次",
        description:
          "这不是正确的答案。仔细思考攻击者如何试图操纵用户的心理状态。",
      },
    },
    educational: {
      title: "教育内容：治理钓鱼攻击",
      description:
        "随着 DeFi 协议采用更复杂的治理机制，治理钓鱼攻击变得越来越复杂。这些攻击专门针对通常控制着重要投票权和资产的治理参与者。",
      techniques: {
        title: "常见的治理钓鱼技术：",
        list: [
          "<strong>紧急提案诈骗：</strong>攻击者创建虚假的紧急提案，利用时间压力促使用户做出快速决定。",
          "<strong>假冒界面：</strong>精心设计的钓鱼网站模仿真实的治理平台，包括相似的布局和功能。",
          "<strong>社会工程学：</strong>利用 FOMO（错失恐惧）或紧急情况来操纵用户心理。",
          "<strong>签名欺骗：</strong>诱导用户签署看似无害但实际上有害的交易。",
          "<strong>同形字符（Homoglyph）替换：</strong>使用同形字符替换函数名称，隐藏真实调用。",
        ],
      },
      protection: {
        title: "如何保护自己：",
        list: [
          "始终通过官方渠道访问治理平台",
          "仔细验证所有提案的真实性",
          "不要在压力下仓促做决定",
          "在签署任何交易前仔细检查交易详情",
        ],
      },
      realWorldExample:
        "2025年，几个主要的 DeFi 协议遭遇了治理钓鱼攻击，导致重大损失。这些攻击利用了用户对治理系统的信任以及投票机制的复杂性。",
    },
    backButton: "← 返回挑战",
  },
  discordBookmarkAttack: {
    title: "Discord 书签攻击模拟",
    subtitle: "学习识别和避免恶意 Discord 书签攻击",
    warning: "仅供教育目的 - 这是恶意书签攻击的模拟",
    description: "本页面模拟攻击者如何通过恶意书签获取 Discord 权限。",
    verificationTitle: "Discord 验证",
    verificationDescription:
      "将下方按钮拖放到打开的 Discord 窗口中以验证您的账户。\n您也可以将此按钮中包含的链接添加到书签，以便在 Discord 上点击书签来验证您的账户。",
    dragButton: "拖动我",
    bookmarkAttackExplanation: {
      title: "书签攻击如何运作",
      description:
        "书签攻击涉及欺骗用户将恶意 JavaScript 代码添加到他们的浏览器书签中。当在 Discord 上点击这些书签时，它们可以执行有害代码，窃取敏感信息或控制账户。",
    },
    warningTitle: "检测到恶意书签！",
    warningDescription:
      "您刚刚遇到了一个基于书签的钓鱼攻击。您尝试拖动的按钮包含恶意 JavaScript 代码！",
    learnMore: "了解如何保持安全",
    successTitle: "挑战完成！",
    successDescription: "恭喜！您已成功识别出 Discord 书签攻击。",
    howItWorks: "攻击原理：",
    steps: [
      "攻击者创建带有可拖动按钮的虚假验证页面",
      "按钮包含可窃取用户令牌的恶意 JavaScript 代码",
      "当作为书签使用或拖入 Discord 时，代码可能会危害您的账户",
    ],
    protectionTitle: "如何保护自己：",
    protectionTips: [
      "切勿将不受信任网站的按钮或书签拖入 Discord",
      "对任何需要拖动元素的验证过程保持警惕",
      "仅使用官方的 Discord 验证方法",
      "保持 Discord 客户端更新以获得最新的安全功能",
    ],
    attackScenario: {
      title: "🎭 攻击场景：加密货币赠品",
      description:
        "以下是在加密货币相关的 Discord 服务器中典型攻击的展开方式：",
      steps: [
        {
          title: "初次接触",
          description:
            "一个新用户加入热门加密货币 Discord 服务器，并开始与社区互动，在几天内建立信任。",
        },
        {
          title: "诱饁",
          description:
            '攻击者宣布他们正在为新的 NFT 项目或加密货币举办赠品活动，并分享一个看起来合法的"验证网站"链接。',
        },
        {
          title: "陷阱",
          description:
            '验证网站指示用户将按钮拖到书签栏或直接拖到 Discord 中，以"验证他们的钱包"或"注册赠品活动"。',
        },
        {
          title: "攻击",
          description:
            "当受害者在 Discord 上点击书签时，恶意 JavaScript 执行，窃取他们的 Discord 令牌，使攻击者能够完全访问他们的账户。",
        },
        {
          title: "后果",
          description:
            "攻击者使用被入侵的账户进一步传播诈骗，针对受害者的朋友和社区，或通过社交工程使用该账户窃取加密货币。",
        },
      ],
    },
    recentIncidents: {
      title: "近期事件",
      description:
        "在过去几个月中，几个主要的加密货币和 NFT Discord 社区成为了这些攻击的目标。2023年1月，一次书签攻击入侵了一个热门 NFT 项目 Discord 中的多个管理员账户，当用户被引导到虚假的铸造网站时，导致超过20万美元的资产被窃取。",
    },
    backToHome: "← 返回挑战",
    challengeCompletion: {
      title: "完成挑战",
      successMessage: "🎉 恭喜！您已成功完成挑战！🎉",
      errorMessage: "答案不正确，请重试。",
      flagLabel: "请输入Flag：",
      flagPlaceholder: "Flag格式：CHALLENGE_NAME_YEAR",
      question1: {
        label: "问题1：书签攻击的主要目的是什么？",
        options: [
          "请选择...",
          "窃取用户的Discord令牌",
          "使浏览器崩溃",
          "安装病毒",
        ],
      },
      question2: {
        label: "问题2：如何保护自己免受此类攻击？",
        options: [
          "请选择...",
          "永远不要将不明来源的按钮拖到书签栏",
          "安装防病毒软件",
          "使用无痕模式",
        ],
      },
      submitButton: "提交",
    },
    commonAttackScenario: {
      title: "常见攻击场景：虚假验证",
      description:
        "这种攻击的常见版本是向用户展示一个虚假的'Discord 验证'页面，其中包含一个标有'拖动我'的按钮，用户被指示将其拖入打开的 Discord 窗口或书签。当使用该书签时，它会执行恶意 JavaScript，可以窃取令牌并危害账户。",
      warning:
        "警告：切勿将不受信任网站上的按钮或链接拖入 Discord 或您的书签栏！",
    },
  },
  permitPhishing2: {
    title: "Uniswap Permit2 钓鱼挑战",
    subtitle: "学习识别和避免恶意的 Permit2 授权请求",
    warning: "仅供教育目的 - 学习如何保护自己",
    networkStatus: "当前网络：",
    walletAddress: "钱包地址：",
    introText:
      "诈骗者正在利用 Uniswap 的 Permit2 授权系统来窃取不知情用户的代币。这个挑战将教您如何识别并保护自己免受这些复杂的钓鱼攻击。",
    introText2:
      "在这个模拟中，您将体验诈骗者如何诱骗用户签署恶意的 Permit2 授权，以及为什么仅仅撤销代币授权是不足以保证安全的。",
    attackPoints: {
      point1: "请求授予无限代币使用权限的 Permit2 签名",
      point2: "使用看似合法的界面使请求看起来安全",
      point3: "利用用户不仔细审查签名请求的习惯",
    },
    attackWarning:
      "始终仔细审查 Permit2 签名请求，只对来自可信来源的请求进行签名！",
    signatureDetails: {
      warning: "⚠️ 你刚刚签署了一个危险的 Permit2 授权！",
      title: "签名详情：",
      permissionNote:
        "你已经授予 {spender} 无限制使用你的 USDC 代币的权限，直到 {deadline}。",
      success: "签名成功。在真实的攻击中，你的代币将面临风险！",
    },
    tokenBalances: {
      title: "代币余额",
      weth: "WETH",
      pepe: "PEPE",
      usdt: "USDT",
    },
    transactions: {
      title: "最近交易",
      hash: "交易哈希",
      method: "方法",
      age: "时间",
      from: "发送方",
      to: "接收方",
      value: "数量",
      approve: "授权",
      dayAgo: "天前",
      unlimited: "无限制",
    },
    approvals: {
      title: "代币授权",
      permit2Contract: "Permit2 合约",
      permit2Description:
        "Permit2 是由 Uniswap 开发的代币授权合约，可以实现更高效和安全的代币授权。它需要对每个代币进行一次性授权，之后由 Permit2 在内部管理权限。",
      revoke: "撤销",
    },
    swapTokens: "交换代币",
    phishingAlert: {
      title: "检测到钓鱼尝试！",
      description:
        "您刚刚遇到了一个 Permit2 钓鱼攻击。您收到的签名请求是恶意的！",
      whatHappened: "以下是发生的情况：",
      points: [
        "您将您的代币授权给了合法的 Permit2 合约",
        "钓鱼者请求您在 Permit2 内部进行许可签名",
        "这将允许他们使用 Permit2 的内部权限转移您的代币",
        "仅仅撤销代币对 Permit2 的授权是不够的",
      ],
      keyIssue:
        "即使您撤销了代币对 Permit2 的授权，Permit2 内部的权限仍然有效！",
      learnMore: "了解如何保持安全",
    },
    explanation: {
      title: "了解 Permit2 钓鱼",
      description: "Permit2 的工作方式与传统代币授权不同：",
      models: {
        traditional: "传统模式：您直接将代币授权给特定合约（例如 Uniswap）",
        permit2:
          "Permit2 模式：您将代币授权给 Permit2 合约，然后由 Permit2 在内部管理权限",
      },
      twoLayerSystem: "这创建了一个两层授权系统：",
      layers: [
        "代币对 Permit2 的授权（在区块链浏览器中可见）",
        "Permit2 内部的权限（在标准区块链浏览器中不可见）",
      ],
      vulnerability:
        "漏洞：如果您只撤销了代币对 Permit2 的授权，但没有撤销内部权限，一旦您再次授权 Permit2，攻击者仍然可以窃取您的代币。",
      protectionTitle: "如何保护自己：",
      protectionSteps: [
        "使用像 ScamSniffer 的 Permit2 授权管理这样的工具来查看和撤销 Permit2 内部权限",
        "对签名请求保持谨慎，特别是那些请求无限制数量的请求",
        "验证签名请求中的接收者地址",
        "使用显示详细签名信息的硬件钱包",
      ],
      completeChallenge: "完成挑战",
    },
    quiz: {
      pleaseSelect: "选择答案",
      title: "完成挑战",
      description: "要完成此挑战，请识别正确的答案：",
      question1: {
        text: "如果您撤销了代币对 Permit2 的授权，内部权限会发生什么变化？",
        options: [
          "它们仍然有效，如果您再次授权 Permit2，可能会被利用",
          "它们也会自动被撤销",
          "它们会在 24 小时后过期",
        ],
      },
      question2: {
        text: "如何管理 Permit2 内部授权？",
        options: [
          "通过 Etherscan 的代币授权页面",
          "一旦授权，它们就无法管理",
          "使用专门的工具，如 ScamSniffer 的 Permit2 授权管理",
        ],
      },
      verifyAnswers: "验证答案",
    },
    success: {
      title: "挑战完成！",
      description: "很好地识别了 Permit2 钓鱼攻击！以下是如何保护自己：",
      protectionTips: [
        "始终仔细验证签名请求，特别是那些请求无限制数量的请求",
        "使用专门的工具管理 Permit2 内部授权",
        "对无限制授权和不熟悉的接收者地址保持警惕",
        "考虑使用显示详细签名信息的硬件钱包",
      ],
      returnButton: "返回挑战列表",
    },
    failure: {
      title: "挑战失败,请重试挑战。",
    },
  },
  addressSuffixPhishing: {
    title: "地址后缀钓鱼挑战",
    subtitle: "你能在相似的地址中识别出你自己的钱包地址吗？",
    warning: "仅供教育目的 - 学习如何保护自己",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    step1Title: "步骤 1：连接你的钱包",
    connectWallet: "连接钱包",
    step2Title: "步骤 2：找出你的钱包地址",
    step2Description:
      "以下是 5 个看起来相似的地址。只有一个是你的实际钱包地址。选择正确的地址以完成挑战：",
    selectThisAddress: "选择此地址",
    resultTitle: "挑战结果",
    successMessage: "🎉 恭喜！你成功识别出了你的真实钱包地址！",
    failureMessage: "❌ 错误！这不是你的真实钱包地址。请重试。",
    protectionTitle: "如何保护自己：",
    protectionTips: [
      "始终验证完整地址，而不仅仅是开头和结尾",
      "警惕看起来与你之前交互过的地址相似的地址",
      "使用钱包的地址簿功能标记可信地址",
      "考虑使用带有地址验证功能的硬件钱包",
      "复制粘贴地址时要仔细核对",
    ],
    backToHome: "← 返回挑战",
  },
  blindSignaturePhishing: {
    title: "盲签名钓鱼攻击",
    subtitle: "本页面演示钓鱼网站如何欺骗您签署危险的消息！",
    warning: "仅供教育目的 - 请谨慎处理真实签名",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    step2Title: "签名方法",
    signatureMethodDescription:
      "选择以下签名方法之一，了解钓鱼攻击如何利用每种方法：",
    method1: {
      title: "方法 1: eth_sign (传统，危险)",
      description:
        "eth_sign 是最早的签名方法之一，但也是最危险的。它允许签署任何数据，没有任何前缀或保护措施。",
      deprecatedNote:
        "在许多钱包像是 MetaMask, Safe 等，eth_sign 已经是弃用的签名方法，因为它太危险了。",
      button: "使用 eth_sign 签名",
      signedWarning:
        "您刚刚使用了危险的 eth_sign 方法签名！这可能会导致您的资产被盗。",
      cancelSuccess: "做得好！您拒绝了危险的签名请求。",
      learnMore: "了解更多...",
      cancel: "Cancel",
      sign: "Sign",
    },
    method2: {
      title: "方法 2: personal_sign (标准消息签名)",
      description:
        "此方法添加前缀使其更安全，但如果您不阅读签名内容，仍然可能危险。",
      button: "使用 personal_sign 签名",
      hashButton: "使用 personal_sign 签名 (哈希)",
      message: "我同意领取 1000 个 DeFiHackLabs 代币的条款和条件。",
      signedWarning: "您刚刚签名了一个可能危险的消息！请始终仔细阅读签名内容。",
      hashSignedWarning: "您刚刚签名了一个哈希值！这可能是一个危险的操作。",
      cancelSuccess: "做得好！您拒绝了可疑的签名请求。",
    },
    method3: {
      title: "方法 3: signTypedData (EIP-712)",
      description:
        "此方法结构更清晰，更安全，但如果您不验证合约和参数，仍然有风险。",
      button: "使用 signTypedData 签名",
      signedWarning: "您刚刚签名了一个结构化数据！请确保您理解所有参数。",
      cancelSuccess: "做得好！您拒绝了未经验证的结构化数据签名。",
      domain: {
        name: "测试域名",
      },
      value: {
        name: "测试用户",
      },
    },
    metamaskWarning:
      "签署此消息可能会产生危险的副作用。只应该对完全信任的网站签署消息。这种危险的方法将在未来版本中移除。",
    challengeCompleted: "🎉 挑战完成！了解盲签名钓鱼",
  },
  seaportZeroOrderPhishing: {
    title: "Seaport 零订单钓鱼攻击",
    subtitle: "挑战：识别 Seaport 协议中的零价格钓鱼订单",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioDescription:
      "您是一位 NFT 收藏家，拥有一个价值不菲的 Bored Ape Yacht Club NFT。您收到一个通知，有人提出以 100 ETH 的高价购买您的 NFT。您点击链接后，看到以下订单：",
    seaportOrderDetails: "Seaport 订单详情",
    yourTask:
      "分析上面的 Seaport 订单，判断这是一个合法的购买订单还是试图窃取您 NFT 的钓鱼订单。",
    acceptOffer: "接受报价",
    pleaseSelect: "-- 请选择 --",
    question1: "1. 这是一个钓鱼订单吗？",
    yesPhishing: "是的，这是钓鱼订单",
    noLegitimate: "不是，这是合法订单",
    question2: "2. 如果您接受这个订单会发生什么？",
    receive100ETH: "我会收到 100 ETH 并转移我的 NFT",
    transferForFree: "我会免费转移我的 NFT，没有收到任何 ETH",
    nothingHappens: "什么都不会发生，订单无效",
    question3: "3. 这个订单有什么问题？",
    invalidSignature: "签名无效",
    zeroPrice: "价格被设置为 0 ETH",
    incorrectToken: "代币地址不正确",
    noIssue: "没有问题，订单是合法的",
    submitAnswers: "提交答案",
    explanationTitle: "解释：Seaport 零订单钓鱼攻击",
    explanationContent:
      "这是一个典型的 Seaport 零订单钓鱼攻击。攻击者创建了一个看似提供高价（100 ETH）购买您 NFT 的订单，但实际上订单中的对价被设置为 0 ETH。",
    considerationExample:
      '注意 startAmount 和 endAmount 都被设置为"0"，这意味着如果您接受这个订单，您将免费赠送您的 NFT，而不会收到任何 ETH 作为回报。',
    protectionTitle: "如何保护自己：",
    protectionTips: [
      "始终仔细检查 Seaport 订单中的对价部分",
      "验证 startAmount 和 endAmount 是否与显示的价格相符",
      "使用具有内置保护功能的可信 NFT 交易市场",
      "不要点击来自未知来源的链接",
      "如果价格看起来好得不真实，那可能确实如此",
    ],
    keyIssueTitle: "在这个钓鱼订单中，关键问题是：",
    alertError:
      "⚠️ 您刚刚签名了一个零价格订单！您的 NFT 将被转移，而您不会收到任何 ETH。这是一个钓鱼攻击的示例。",
    errorMessage: "❌ 答案不完全正确，请查看下方解释！",
    successMessage: "🎉 恭喜！您成功识别出了钓鱼订单！",
    comparisonTitle: "合法订单与钓鱼订单的比较：",
    comparisonTable: {
      parameter: "参数",
      legitimate: "合法订单",
      phishing: "钓鱼订单（当前案例）",
      offer: {
        legitimate: "买方提供的 ETH",
        phishing: "卖方的 NFT",
      },
      consideration: {
        legitimate: "卖方的 NFT",
        phishing: "0 ETH",
      },
      startEndAmount: {
        legitimate: "与显示价格相符（如 100 ETH）",
        phishing: "设定为 0",
      },
    },
  },
  zeroTransferScam: {
    title: "TransferFrom 零转账钓鱼挑战",
    subtitle: "学习识别和避免零值转账诈骗",
    warning: "仅供教育目的 - 这是一个零值转账钓鱼攻击的模拟",
    yourWallet: "您的钱包",
    address: "地址",
    completeChallenge: "完成挑战",
    realAddressLabel: "合法钱包地址：",
    realAddressPlaceholder: "输入真实的钱包地址",
    fakeAddressLabel: "虚假/伪造地址：",
    fakeAddressPlaceholder: "输入伪造的地址",
    submitButton: "验证地址",
    successTitle: "🎉 挑战完成！了解零转账诈骗",
    successDescription:
      "诈骗者经常使用零值转账来创建与伪造地址的虚假交易历史。",
    protectionTitle: "如何保护自己：",
    protectionTips: [
      "始终验证完整地址，而不仅仅是开头和结尾",
      "警惕看起来与您之前交互过的地址相似的地址",
      "仔细检查交易历史，包括零值转账",
      "使用钱包的地址簿功能标记可信地址",
      "考虑使用带有地址验证功能的硬件钱包",
    ],
    failureTitle: "❌ 地址不正确，请重试！",
    failureDescription: "提示：仔细查看交易历史并比较地址。",
    backToHome: "← 返回挑战",
    transactionDetails: {
      title: "交易详情",
      hash: "交易哈希",
      method: "方法",
      age: "时间",
      from: "发送方",
      to: "接收方",
      amount: "数量",
      out: "转出",
      in: "转入",
      gasUse: "Gas 使用量",
      phishingAlert: {
        title: "检测到钓鱼尝试！",
        description: "这些零值转账是诈骗者常用的策略，用于：",
        tactics: [
          "创建看起来与您交互过的合法地址相似的欺骗性地址",
          "与这些假地址建立交易历史",
          "稍后在钓鱼尝试中使用这些地址，希望您将它们误认为合法地址",
        ],
        addressComparison: "注意这些地址看起来多么相似？这是故意的！",
        techniques: "诈骗者使用各种技术使地址看起来相似：",
        techniquesList: [
          "在开头和结尾使用相似的字符模式",
          "利用大多数钱包在中间截断地址的事实",
          "利用人类倾向于只检查前几个和后几个字符的习惯",
        ],
        note: '注意：Etherscan 在设置中预设开启了"Zero-Value Token Transfers"选项，隐藏了网站上显示的零值代币转账。但是，TRON blockchain浏览器仍然显示这些交易，使得这种攻击方式在 TRON 上仍然存在。',
        learnMoreButton: "了解如何保持安全",
        check: "检查",
      },
    },
  },
  teamsPhishing: {
    title: "Microsoft Teams 恶意软件钓鱼模拟",
    description:
      "本页面模拟攻击者如何创建虚假的 Microsoft Teams 网站来分发恶意软件和窃取敏感信息。",
    warning: "仅供教育目的 - 这是 Microsoft Teams 钓鱼攻击的模拟",
    joinMeeting: "加入您的 Teams 会议",
    joinButton: "在 Teams 应用程序中加入",
    setupTitle: "安装",
    setupInstruction: "将 Microsoft Teams 图标拖到应用程序中进行安装",
    applications: "应用程序",
    indicatorsTitle: "本示例中的钓鱼指标",
    indicators: [
      '<strong>可疑 URL</strong>：注意域名是 "microsoft-meet.com" 而不是 "teams.microsoft.com"',
      "<strong>简化界面</strong>：与真实的 Teams 登录相比，虚假页面具有简化的界面",
      "<strong>缺乏安全功能</strong>：缺少 Microsoft 通常包含的安全元素",
      '<strong>加入按钮</strong>：突出的 "在 Teams 应用程序中加入" 按钮可能会导致恶意软件下载',
    ],
    safetyTipsTitle: "安全提示",
    safetyTips: [
      "在输入凭据或下载软件之前，始终验证 URL。",
      "仅从官方 Microsoft 网站或应用商店下载 Microsoft Teams。",
      "对任何异常的安装过程或请求保持警惕。",
      '如果您下载了可疑的软件包，可以在打开之前使用 <a href="https://www.virustotal.com" target="_blank">VirusTotal.com</a> 进行扫描。但请注意，即使没有检测到威胁（0 检测），也不能保证绝对安全。',
    ],
    attackDetailsTitle: "Microsoft Teams 钓鱼攻击的工作原理",
    attackDetailsDescription:
      "攻击者创建令人信服的 Microsoft Teams 登录页面或更新通知的复制品，诱骗用户下载恶意软件或泄露其凭据。这些攻击变得越来越复杂，针对个人和组织。",
    risks: {
      dataBreach: {
        title: "风险：数据泄露",
        description:
          "通过虚假 Teams 更新安装的恶意软件可以访问您设备上的敏感文件，可能导致未经授权访问个人和公司数据。这可能导致知识产权盗窃、机密信息泄露和合规违规。",
      },
      credentialTheft: {
        title: "风险：凭据盗窃",
        description:
          "当用户在虚假 Teams 网站上输入其 Microsoft 凭据时，攻击者会捕获这些信息以获取对电子邮件、OneDrive、SharePoint 和其他 Microsoft 365 服务的访问权限。这可能导致账户被接管并进一步危及组织资源。",
      },
      walletDrain: {
        title: "风险：钱包资金耗尽",
        description:
          "对于从同一设备访问加密货币钱包或金融服务的用户，通过虚假 Teams 更新安装的恶意软件可能包含扫描钱包凭据的功能，导致数字资产被盗。",
      },
    },
    quiz: {
      title: "测验：测试您的知识",
      successTitle: "🎉 恭喜！您已成功完成测验！ 🎉",
      successDescription:
        "您已展示了识别 Microsoft Teams 钓鱼攻击并了解其风险的能力。",
      failureTitle: "❌ 不正确的答案。请再试一次。 ❌",
      failureDescription: "提示：仔细查看模拟中的钓鱼指标。",
      flagLabel: "请输入Flag:",
      flagPlaceholder: "在此输入Flag...",
      questions: {
        q1: {
          question:
            '1. 在这个钓鱼场景中，点击"在 Teams 应用程序中加入"按钮的主要风险是什么？',
          options: {
            default: "请选择...",
            a: "它只会重定向到合法的 Microsoft 网站",
            b: "它会尝试在您的设备上安装恶意软件",
            c: "它只会显示广告",
            d: "它什么都不会做",
          },
        },
        q2: {
          question: "2. 收到可疑会议邀请时的建议行动是什么？",
          options: {
            default: "请选择...",
            a: "总是点击链接以检查是否合法",
            b: "下载并打开任何附件以验证其内容",
            c: "在点击任何链接前验证发件人的身份",
            d: "将邀请转发给所有同事",
          },
        },
        q3: {
          question: "3. Microsoft Teams 的合法域名是什么？",
          options: {
            default: "请选择...",
            a: "teams-microsoft.com",
            b: "teams.microsoft.com",
            c: "microsoft-teams.com",
            d: "teams-official.com",
          },
        },
      },
      submitButton: "提交答案",
      resultSuccess: "挑战成功！",
      resultSuccessDescription:
        "您已成功完成 Microsoft Teams 恶意软件钓鱼挑战。",
      keyLearningPoints: "关键学习点：",
      learningPoints: [
        "始终检查 URL 是否为官方域名（teams.microsoft.com）",
        "警惕简化的界面和缺少标准安全功能",
        "只从官方来源下载应用程序",
        "对不寻常的安装过程保持警惕",
      ],
      finalReminder:
        "记住：合法的 Microsoft 服务永远不会要求您通过可疑的第三方网站下载软件。",
    },
  },
  googleSearchAdPhishing: {
    title: "❌ Google 搜索广告钓鱼攻击 🔒",
    subtitle: "挑战：识别 Google 搜索广告钓鱼",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioTitle: "场景描述",
    scenarioDescription:
      '您想要使用 Lido Finance 质押 ETH。在 Google 上搜索"Lido Finance"时看到这些结果。您能识别出哪个是合法网站，哪个是钓鱼网站吗？',
    realDomainLabel: "真实域名：",
    realDomainPlaceholder: "输入合法的 Lido 域名",
    fakeDomainLabel: "钓鱼域名：",
    fakeDomainPlaceholder: "输入钓鱼网站域名",
    submitButton: "提交答案",
    successTitle: "🎉 挑战完成！",
    successDescription: "恭喜！您成功识别出了钓鱼广告和合法网站。",
    failureTitle: "❌ 挑战失败",
    failureDescription: "请重试。记得仔细检查域名。",
    protectionTitle: "了解 Google 搜索广告钓鱼攻击",
    protectionTips: [
      '攻击者经常购买与热门加密货币项目相关的 Google 广告，这些广告会出现在搜索结果的顶部，标记为"赞助"或"广告"。',
      "这些广告通常使用与官方网站非常相似的域名，但有细微的差别，例如：",
      "• 使用不同的顶级域名（如用 .is 代替 .fi）",
      "• 在域名中添加或删除字母",
      "• 使用连字符或用数字替换字母",
      "当用户点击这些广告时，他们会被引导到看起来与官方网站完全相同的钓鱼网站，这些网站旨在窃取资金或私钥。",
    ],
    backToHome: "← 返回挑战",
  },
  clipboardPhishing: {
    title: "剪贴板钓鱼挑战",
    subtitle: "挑战：识别剪贴板型钓鱼攻击",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioTitle: "场景描述",
    scenarioDescription:
      "您需要转账 1 ETH 到朋友的钱包。他们已经分享了他们的钱包地址，您正在使用加密货币转账界面进行转账。",
    educationalWarning: {
      title: "教育提醒：",
      description:
        "这是一个模拟的钓鱼挑战。以下界面展示了一种常见的钓鱼技术。试着找出可疑之处。",
    },
    chatWithFriend: "与朋友聊天",
    friendMessage1: "嘿！这是我的钱包地址，用于接收你承诺的 ETH：",
    copyButton: "复制",
    userMessage: "收到！我马上转给你。",
    addressCopied: "地址已复制！我这就转账 ETH。",
    transferEth: "转账 ETH",
    recipientAddress: "收款地址：",
    recipientPlaceholder: "在此粘贴钱包地址",
    amount: "数量 (ETH)：",
    sendButton: "发送 ETH",
    success: {
      title: "🎉 挑战完成！",
      description: "恭喜！您成功避免了一个剪贴板型钓鱼攻击。",
      howItWorks: "攻击原理：",
      steps: [
        "攻击者创建一个看似合法的网站",
        '当你点击"复制"按钮时，恶意JavaScript代码会秘密替换复制的地址',
        "如果粘贴后没有验证地址，你可能会将资金发送给攻击者",
      ],
      protectionTitle: "如何保护自己：",
      protectionTips: [
        "粘贴后务必再次检查地址",
        "考虑使用带有地址验证的硬件钱包",
        "在电脑上复制敏感信息（如钱包地址）时要特别小心 - 即使使用Ctrl+C，恶意软件也可能篡改你的剪贴板内容",
      ],
    },
    failure: {
      title: "❌ 挑战失败",
      description: "你输入的地址不正确。请重试。",
    },
    maliciousWarning: {
      title: "⚠️ 检测到恶意剪贴板活动！",
      displayedAddress: "显示的地址：",
      copiedAddress: "复制到剪贴板的内容：",
      description:
        "这是一个剪贴板型钓鱼攻击的例子，其中复制的地址被替换为恶意地址！",
      closeButton: "关闭",
    },
  },
  punycodePhishing: {
    title: "Punycode 钓鱼攻击",
    subtitle: "挑战：识别 Punycode 钓鱼域名",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioTitle: "场景描述",
    scenarioDescription:
      "您收到一封电子邮件，声称是来自 Trezor（一个知名的硬件钱包品牌）的重要安全更新通知。电子邮件中的链接看起来像是指向官方 Trezor 网站，但实际上是一个精心伪装的钓鱼网站。",
    domainAppearance: "看起来像正常的 Trezor 域名",
    whatIsPunycode: "什么是 Punycode？",
    punycodeDescription:
      'Punycode 是一种编码系统，允许将非 ASCII 字符（如西里尔字母、中文等）转换为 ASCII 字符，以便在域名系统中使用。攻击者经常利用视觉上相似的字符创建看似合法的域名。\n\n例如，某些特殊字符看起来与拉丁字母几乎相同，但它们是不同的字符：\n\n你可以使用 <a href="https://www.punycoder.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Punycoder</a> 来转换 Unicode 和 Punycode 域名。',
    displayedDomain: "显示域名",
    actualDomain: "实际 Punycode 域名",
    description: "说明",
    specialCharacters: "使用特殊字符替换了某些字母",
    yourTask: "你的任务",
    realDomainLabel: "真实域名：",
    realDomainPlaceholder: "输入真实的 Trezor 官方域名",
    fakeDomainLabel: "钓鱼域名：",
    fakeDomainPlaceholder: "输入钓鱼网站的 Punycode 域名",
    submitButton: "提交答案",
    successTitle: "🎉 恭喜！你成功识别了真假域名！",
    successDescription:
      "Punycode 钓鱼攻击是一种非常危险的攻击形式，因为浏览器地址栏中显示的域名可能看起来与合法网站完全相同。",
    protectionTitle: "保护自己的最佳方法是：",
    protectionTips: [
      "直接在浏览器中输入已知的官方网址，而不是点击电子邮件中的链接",
      "使用书签保存常用的重要网站",
      "安装可以检测 Punycode 域名的浏览器扩展",
      "注意域名中不寻常的字符或拼写",
    ],
    failureTitle: "❌ 答案不正确，请再试一次！",
    failureDescription:
      "提示：仔细检查 Trezor 的官方域名，以及钓鱼网站使用的 Punycode 域名。",
    backToHome: "← 返回挑战",
  },
  telegramTokenPhishing: {
    title: "Telegram 代币钓鱼挑战",
    subtitle: "学习识别和避免 Telegram 上的助记词钓鱼攻击",
    warning: "仅供教育目的 - 不会使用实际的恶意代码",
    chatTitle: "CryptoAirdrop 机器人",
    botName: "CryptoAirdrop 机器人",
    welcomeMessage:
      "🎉 恭喜！您已被选中，可以获得我们社区空投计划中的 5,000 个 XQUEST 代币。",
    claimInstructions:
      '要领取您的 5,000 个 XQUEST 代币（价值约 $2,500），请点击下方的"领取代币"按钮。',
    tokenDescription:
      "XQUEST 是一种新的 DeFi 治理代币，供应有限。目前价格：每个代币 $0.50。",
    processingMessage: "正在处理您的请求...",
    seedPhraseRequest:
      "为了验证您的钱包所有权并分发您的 5,000 个 XQUEST 代币，请提供您的钱包助记词（12 或 24 个单词）。",
    seedPhrasePlaceholder: "在此输入您的助记词（12 或 24 个单词）",
    submitButton: "提交并领取代币",
    skipButton: "我不想提供我的助记词",
    successTitle: "🎉 挑战成功! Telegram 代币钓鱼学习 ",
    successMessage: "恭喜！您成功识别并拒绝了助记词钓鱼尝试。",
    failureTitle: "❌ 挑战失败！您透露了您的助记词。",
    failureMessage:
      "您输入了助记词。在真实情况下，这将使诈骗者能够完全访问您的钱包！",
    explanationTitle: "了解 Telegram 代币钓鱼",
    explanationContent:
      '这个模拟演示了诈骗者在 Telegram 上使用的常见钓鱼技术。他们创建假的机器人账户，承诺免费代币，但要求您提供助记词来"验证"您的钱包。',
    warningSignsTitle: "需要注意的警告信号：",
    warningSignsList: [
      "未经请求的免费代币或空投消息",
      "领取奖励的紧迫感或时间压力",
      "要求提供助记词或私钥",
      "承诺高价值奖励",
      "语法或拼写错误",
    ],
    protectionTitle: "如何保护自己：",
    protectionList: [
      "永远不要与任何人分享您的助记词",
      "合法项目永远不会要求您提供助记词",
      "对未经请求的免费代币消息保持怀疑",
      "通过官方渠道验证所有信息",
      "如果某事看起来好得不真实，那么可能确实如此",
    ],
    claimButton: "领取代币",
    seedPhraseWarning:
      "警告：切勿和任何人分享您的助记词！这是一个模拟，用于教您有关钓鱼攻击的知识。",
    backToHome: "← 返回挑战",
  },
  telegramFakeSafeguard: {
    title: "Telegram 假冒安全验证诈骗挑战",
    subtitle: "学习识别和避免 Telegram 上的假冒验证流程",
    warning: "仅供教育目的 - 不会使用实际的恶意代码",
    intro: {
      p1: "诈骗者使用假冒的 Telegram 安全验证流程诱骗用户执行恶意命令，从而窃取加密资产。这个挑战将教您如何识别和避免这些诈骗。",
      p2: "在这个模拟中，您将体验一个常见的 Telegram 诈骗场景。您的目标是识别警示信号并避免落入诈骗陷阱。",
    },
    startButton: "开始挑战",
    chatTitle: "加密空投官方",
    welcomeMessage: {
      p1: "欢迎来到加密空投官方！",
      p2: "🚀 令人兴奋的消息！我们正在推出一个新代币，为早期支持者提供大规模空投。",
      p3: "💰 领取高达 5,000 个代币，价值约 $10,000！",
      p4: "⏰ 限时优惠 - 空投将在 24 小时内结束！",
      p5: "🔒 请完成验证以参与。",
    },
    verifyButton: "点击验证",
    safeguardVerification: {
      title: "安全验证",
      description:
        "为了防止钓鱼和恶意应用程序，请通过 Telegram 在本地进行验证。",
      step1: {
        number: "1",
        text: "按",
        keyboard: "Windows",
        plus: "+",
        keyboard2: "R",
        description: '打开"运行"对话框。',
      },
      step2: {
        number: "2",
        text: "要通过 Telegram 安全验证，请按",
        keyboard: "CTRL",
        plus: "+",
        keyboard2: "V",
        description: '将"Telegram"粘贴到运行框中。',
      },
      step3: {
        number: "3",
        text: "最后，按",
        keyboard: "Enter",
        description: "来验证您的账户并被重定向到官方群组。",
      },
      copyButton: "复制验证码",
    },
    verificationCode: {
      title: "验证码已复制到剪贴板！",
      description: "请将其粘贴到运行对话框（Win+R）中并按 Enter 完成验证。",
      codeComment: "#         Telegram",
    },
    simulationButtons: {
      runCode: "是的，模拟运行代码",
      avoidScam: "不，这是一个骗局",
    },
    results: {
      title: "挑战结果",
      success: {
        title: "做得好！您避开了诈骗。",
        description:
          "您正确地将其识别为诈骗尝试。在真实情况下，恶意代码会在您的计算机上安装恶意软件，可能窃取您的加密资产。",
      },
      failure: {
        title: "您上当了！",
        description:
          "这正是 Telegram 假冒安全验证诈骗在现实生活中的运作方式。诈骗者诱骗用户运行安装恶意软件的命令，然后窃取加密资产。",
      },
    },
    education: {
      title: "Telegram 假冒安全验证诈骗的运作方式",
      techniques: "这种诈骗使用多种技术来欺骗用户：",
      techniquesList: [
        {
          title: "社会工程学",
          description: "通过限时空投制造紧迫感和兴奋感",
        },
        {
          title: "假冒验证",
          description: "冒充 Telegram 的官方安全验证",
        },
        {
          title: "剪贴板注入",
          description: "秘密地将恶意代码复制到您的剪贴板",
        },
        {
          title: "命令执行",
          description: "诱骗您运行安装恶意软件的命令",
        },
      ],
      redFlags: {
        title: "需要注意的警示信号",
        list: [
          "要求您将命令复制/粘贴到终端或运行对话框中",
          "看起来异常复杂的验证流程",
          "承诺大量免费代币的频道",
          "制造 FOMO（害怕错过）的紧迫时间框架",
          "与 Telegram 官方流程不同的验证过程",
        ],
      },
      protection: {
        title: "如何保持安全",
        list: [
          "切勿从未知来源复制和粘贴命令",
          "通过多个可信来源验证官方频道",
          "对免费空投和赠品保持怀疑态度",
          "在 Telegram 账户上启用双重认证",
          '定期检查 Telegram 的"活动会话"以确保没有未授权访问',
        ],
      },
      compromised: {
        title: "如果您认为您已被入侵",
        list: [
          "立即将资金从受影响的钱包转移到新的安全钱包",
          "更改从您的计算机访问的所有账户的密码",
          "启用双重认证",
          "考虑重新安装操作系统",
          "运行可靠的防病毒扫描",
        ],
      },
    },
    footer: {
      deviceWarning:
        "由于安全原因，您只能在笔记本电脑/PC设备上继续使用Safeguard Portal验证。如果需要，请在兼容设备上重试。",
      poweredBy: "技术支持：",
      safeguardLink: "@Safeguard",
    },
  },
  fakeStakingContract: {
    title: "超高收益质押平台",
    subtitle: "质押您的代币，每天获得 50% 的收益！",
    warning: "仅供教育目的 - 了解如何识别可疑的质押合约",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    notConnected: "未连接",
    connectWallet: "连接钱包",
    step2Title: "步骤 1: 质押您的代币",
    stakeButton: "立即质押",
    step3Title: "步骤 2: 质押结果",
    backToHome: "← 返回挑战",
    challengeSuccess: {
      title: "🎉 挑战成功！了解质押诈骗",
      warningTitle: "⚠️ 可疑质押平台的危险信号：",
      warningItems: [
        "不切实际的回报（每日 50% 在数学上是不可持续的）",
        "要求无限制代币授权而非特定金额",
        "没有可验证的智能合约代码或审计",
        "紧迫感和 FOMO 营销策略",
        "匿名团队或虚假身份",
      ],
      tipsTitle: "🛡️ 如何保护自己：",
      tipsItems: [
        "投资前彻底研究项目",
        "检查智能合约是否在 Etherscan 上已验证",
        "寻找来自信誉良好公司的安全审计",
        "永远不要批准无限制的代币支出",
        "如果回报听起来好得不真实，那么可能确实如此",
      ],
      securityTip: "💡 安全提示：始终将代币授权限制在所需的确切金额！",
    },
    successMessage: "✅ 挑战成功！您已学会识别可疑的质押平台。",
    dailyReturns: "50% 每日收益",
    stakingPool: "USDC 质押池",
    stakingDescription: "质押您的 USDC，每天获得 50% 的收益！",
    minimumStake: "最低质押金额: 100 USDC",
    lockPeriod: "锁定期: 无",
    withdrawAnytime: "随时可提取",
    stakePlaceholder: "输入质押金额",
    invalidAmount: "请输入一个大于 100 的数字",
    failureTitle: "⚠️ 警告：您已授予无限制访问权限！",
    failureMessage:
      "您批准了合约可以使用无限量的代币。在真实情况下，这将允许合约控制您的所有 USDC。",
    transactionSent: "交易已发送！查看交易:",
    whyDangerous: "为什么这很危险？",
    seedPhraseExplanation: "授予无限制的代币访问权限意味着合约可以：",
    dangerList: [
      "访问您钱包中的所有 USDC",
      "在任何时候转移任意数量的代币",
      "完全控制您的资产",
      "可能导致资金损失",
    ],
    rememberTitle: "记住：",
    rememberMessage: "永远不要批准可疑合约的无限制代币访问权限！",
    metamaskSimulation: {
      title: "MetaMask 交易请求示例",
      description:
        "某些可疑的质押合约可能会引导您进行 approve 授权，表面上看似只为了质押特定金额，实际上却请求对整个代币余额的完全访问权限。一旦授权成功，攻击者即可任意转走您的所有资产。",
      transactionRequest: "交易请求",
      requestFrom: "请求来源",
      interactingWith: "交互合约",
      method: "方法",
      approvalAmount: "授权金额",
      unlimited: "无限制",
    },
  },
  seedPhraseRecoveryScam: {
    title: "钱包恢复助手",
    description:
      "遇到钱包问题？我们的专业团队可以帮助您恢复访问权限。这是模拟的题目,可以安心测试。",
    serviceTitle: "钱包恢复服务",
    serviceDescription:
      "请描述您遇到的问题，我们的支持团队将立即为您提供帮助。",
    issueLabel: "问题描述：",
    issuePlaceholder: "例如：我无法访问我的钱包，忘记了密码等...",
    emailLabel: "电子邮件：",
    emailPlaceholder: "您的电子邮件地址",
    submitButton: "提交请求",
    chatTitle: "实时聊天支持",
    supporterMessage:
      "您好！我是钱包支持团队的 Alex。我已经收到了您的请求，很乐意为您提供帮助。",
    verificationMessage:
      "为了帮助您恢复钱包访问权限，我需要验证您的身份。请提供您的钱包恢复助记词（12-24个单词的种子短语）。",
    securityMessage: "请放心，这是一个安全的环境，您的信息将被加密处理。",
    inputPlaceholder: "输入您的消息...",
    sendButton: "发送",
    endButton: "结束对话",
    successMessage: "✅ 挑战成功！您识别并拒绝了钓鱼尝试，保护了您的助记词。",
    phishingIdentified: "钓鱼尝试已识别！",
    congratsMessage: "恭喜！您成功识别并拒绝了种子短语钓鱼尝试。",
    whyPhishing: "为什么这是钓鱼尝试？",
    whyPhishingExplanation:
      "合法的钱包服务或支持人员<strong>永远不会</strong>要求您提供助记词（种子短语）。您的助记词是恢复钱包的私钥，任何拥有它的人都可以完全控制您的资金。",
    protectionTitle: "保护自己的方法：",
    protectionMethods: [
      "永远不要向任何人透露您的助记词，无论他们声称是谁。",
      "将您的助记词离线存储在安全的地方。",
      "使用硬件钱包增加额外的安全层。",
      "如果您收到要求提供助记词的消息，这几乎肯定是钓鱼尝试。",
      "当有疑问时，直接结束对话并联系官方渠道。",
    ],
    backButton: "← 返回挑战",
    failureTitle: "钓鱼尝试成功！",
    failureMessage:
      "您输入了看起来像助记词的内容。在真实情况下，这将使攻击者能够访问您的所有资金。",
    whyDangerous: "为什么这是危险的？",
    seedPhraseExplanation:
      "您的助记词（种子短语）是恢复钱包的私钥。任何拥有它的人都可以：",
    dangerList: [
      "访问您钱包中的所有资金",
      "转移您的所有代币和 NFT",
      "签署交易并授权支出",
      "完全控制您的钱包",
    ],
    rememberTitle: "记住：",
    rememberMessage:
      "合法的钱包服务或支持人员<strong>永远不会</strong>要求您提供助记词。如果有人要求您提供助记词，请立即结束对话。",
    retryButton: "重试挑战",
    failureStatus: "❌ 挑战失败！您透露了您的助记词。",
  },
  usdtApprovalPhishing: {
    title: "USDT 授权钓鱼模拟",
    subtitle: "这个页面展示了钓鱼网站如何请求无限 USDT 授权！",
    warning: "仅供教育目的 - 请小心真实的授权请求",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    notConnected: "未连接",
    connectWallet: "连接钱包",
    step2Title: "步骤 1: 授权 USDT",
    spenderAddress: "授权地址：",
    approveButton: "授权 USDT",
    approvingButton: "正在授权 USDT...",
    step3Title: "步骤 2: 撤销 USDT 授权",
    revokeDescription: "将授权设置为零以撤销之前的授权",
    revokeButton: "撤销 USDT 授权",
    revokingButton: "正在撤销 USDT 授权...",
    revokeRejected: "撤销授权已拒绝",
    revokePending: "撤销授权正在处理中",
    revokeSending: "撤销授权正在发送中",
    revokeSuccess: "撤销授权成功",
    revokeTransactionView: "撤销交易已发送！查看交易：",
    challengeFailed: "❌ 挑战失败！您批准了恶意交易。",
    backToHome: "← 返回挑战",
    successMessage: "✅ 挑战成功！您拒绝了虚假授权，保护了您的资产。",
    signatureDetails: {
      warning:
        "警告：在真实情况下，这个签名将允许恶意网站无限制地使用你的 USDT！",
      title: "签名详情：",
      permissionNote: `授权交易已发送！查看交易: <a href="https://holesky.etherscan.io/tx/{txHash}" target="_blank">{txHash}</a>`,
      success: "签名成功！这个签名可以用于批准代币支出，无需交易！",
    },
    challengeSuccess: {
      title: "🎉 挑战成功！了解授权钓鱼攻击",
      checklistTitle: "⚠️ MetaMask 授权提示中需要注意的地方：",
      checklistItems: [
        "检查授权金额是否为无限制（Unlimited）",
        "验证授权接收方地址是否可信",
        "确认合约地址是否为官方代币地址",
      ],
      risksTitle: "🚨 其他授权风险提示：",
      risksItems: [
        "除了 approve 外，也要当心 increaseAllowance 函数",
        "increaseAllowance 同样可以增加代币授权额度",
        "一些钓鱼网站会通过这个方式来掩饰其真实意图",
      ],
      securityTip: "💡 安全建议：永远不要给不明来源的网站无限授权！",
    },
    scenario: {
      title: "🎮 场景介绍",
      description: "你收到了一条来自朋友的消息：",
      message1:
        "嘿！我刚发现了一个超赞的 NFT 项目！现在预售价只要 0.1 ETH，但你需要先授权 USDT 作为保证金。等铸造完成后，保证金会立即退还。这个项目肯定暴涨，我已经准备买 10 个了！",
      message2: "这是官网链接，抓紧时间，名额不多了！",
      warning:
        "⚠️ 这是一个模拟的钓鱼场景，用于教育目的。在现实中，请务必谨慎对待任何要求 USDT 授权的请求！",
    },
  },
  home: {
    title: "Web3 钓鱼安全挑战",
    description:
      "这些教育性模拟可以帮助您了解和识别常见的 Web3 钓鱼攻击，学习如何在去中心化世界中保护自己。",
    warning: "警告：这些模拟仅用于教育目的，所有交互都在测试网络上进行。",
    // Simplified Chinese
    leaderboard: "排行榜",
    page: "首页",
    challenges: "安全挑战",
    about: "关于我们",
    startChallenge: "立即挑战",
    securityChallenges: "安全挑战",
    challengeDescription: "完成每个安全挑战，你将会在这些领域获得进步。",
    contributeMore: "我要贡献更多",
    founders: "创始开发者",
    foundersDescription:
      "我们计划建立一个 Web3 钓鱼演练平台，通过模拟各种常见的钓鱼攻击手法，如社交工程、假冒网站、恶意智能合约等，帮助用户学习并提升对攻击手法的识别与防范能力。此平台作为一个 Public Good，供所有人免费使用。我们的目标是降低用户遭受钓鱼攻击的风险，强化整体 Web3 生态的安全性，并提升安全意识与教育资源的可及性。",
    sponsors: "社区支持伙伴",
    sponsorsDescription: "与顶级安全研究实验室和区块链安全公司合作",
    aboutUs: "关于我们",
    aboutUsDescription:
      "我们计划建立一个 Web3 钓鱼演练平台，通过模拟各种常见的钓鱼攻击手法，如社交工程、假冒网站、恶意智能合约等，帮助用户学习并提升对攻击手法的识别与防范能力。此平台作为一个 Public Good，供所有人免费使用。我们的目标是降低用户遭受钓鱼攻击的风险，强化整体 Web3 生态的安全性，并提升安全意识与教育资源的可及性。",
    viewMore: "查看更多",
    challengeMore: "更多挑战",
    contributions: "我要贡献关卡",
    countdownTitle: "{date} {time}",
    countdownSuffix: "全球同步开启",
    hours: "小时",
    minutes: "分钟",
    seconds: "秒",
    footer: {
      description: "通过互动式安全教育和钓鱼防范训练赋能Web3用户",
      links: "快速链接",
      social: "社交媒体",
      newsletter: "新闻订阅",
      subscribeText: "获取最新安全见解和培训资源",
      emailPlaceholder: "输入邮箱",
      subscribe: "订阅",
      about: "关于我们",
      contact: "联系我们",
      privacy: "隐私政策",
      terms: "使用条款",
      right1: "版权所有",
      right2: "保留所有权利",
      //footer: "",
    },
  },
  challenges: {
    all: "全部",
    beginner: "初级",
    intermediate: "中级",
    advanced: "高级",
    previous: "上一页",
    next: "下一页",
    noChallenges: "没有更多挑战了",
    loading: "加载中...",
    locked: "此关卡未解锁，请先连接钱包",
    locked2: "此关卡未解锁，请先完成入门挑战",
  },
  common: {
    connectWallet: "连接钱包",
    disconnect: "断开连接",
    processing: "处理中...",
    backButton: "← 返回安全挑战",
    notConnected: "钱包未连接",
    close: "关闭",
    continue: "继续",
    sign: "签名",
    confirm: "确认",
    cancel: "取消",
  },
  contact: {
    title: "联系我们",
    email: "邮箱",
  },
  profile: {
    userName: "用户名：",
    SecurityTitle: "安全称号：",
    Rank: "安全排行：",
    SecurityScore: "安全积分：",
    stats: {
      passed: "通过 {count} 关，",
      completed: "完成 {percentage}%",
    },
  },
  questionList: {
    submitAnswer: "提交答案",
    correctAnswer: "答对了！",
    wrongAnswer: "答错了！",
  },
  challengeCard: {
    difficulty: "难度",
    startChallenge: "开始挑战",
  },
  walletSetupGuide: {
    walletReadyMessage:
      "您的钱包现在已经准备好使用！您可以将其连接到 dApps 并开始与 Holesky 测试网互动。",
    congratulations: "恭喜！您已成功完成 Web3 钱包设置！",
    setupCompleteMessage: "您现在已经准备好开始您的 Web3 之旅。",
    title: "Web3 钱包设置指南",
    welcome:
      "欢迎来到 Web3 世界！本指南将引导您设置首个加密货币钱包 MetaMask，安全存储助记词，并从水龙头获取测试 ETH。",
    downloadMetaMask: "下载 MetaMask",
    installMetaMask: "请先安装 MetaMask！",
    networkAdded: "Holesky 测试网已成功添加！",
    networkError: "添加 Holesky 测试网失败：",
    securityTip: "安全提示",
    downloadWarning:
      "务必从官方网站或可信任的应用商店下载 MetaMask。切勿从电子邮件或消息中提供的链接安装。",
    important: "重要",
    seedPhraseWarning:
      "您的助记词是在失去访问权限时恢复钱包的唯一方法。任何拥有您助记词的人都可以完全控制您的钱包和资金。",
    warning: "警告",
    phishingWarning:
      "许多网络钓鱼诈骗针对您的助记词。任何合法服务都不会要求您提供完整的助记词。",
    note: "注意",
    testEthNote: "测试 ETH 没有实际价值，仅用于测试网络上的测试。",
    addNetwork: "添加 Holesky 网络",
    connectWallet: "连接钱包",
    confirmCompletion: "确认完成",
    walletConnected: "钱包已连接",
    connected: "已连接",
    backToHome: "返回挑战",
    connectingWallet: "连接钱包中...",
    pendingRequest: "等待中...",
    connectionError: "连接钱包失败：",
    wrongNetwork: "当前网络不是 Holesky 测试网",
    setupComplete: "设置完成",
    unknownError: "未知错误",
    authenticationFailed: "身份验证失败",
    authenticating: "正在验证...",
    loginSuccess: "登录成功！",
    noTestEth: "您没有任何测试 ETH。请访问水龙头以获取一些。",
    steps: {
      1: {
        title: "安装 MetaMask",
        content: "MetaMask 是一个浏览器扩展程序，允许您与以太坊区块链互动。",
        visitMetaMask: "访问 MetaMask 官方网站",
        clickInstall: '点击"为您的浏览器安装 MetaMask"',
        followProcess: "按照浏览器扩展安装过程进行操作",
        clickIcon: "安装完成后，点击浏览器扩展中的 MetaMask 图标",
      },
      2: {
        title: "创建您的钱包",
        content: "安装 MetaMask 后，您需要创建一个新钱包：",
        clickCreateWallet: '点击"创建钱包"',
        createSecurePassword: "创建一个安全的密码",
        watchSecurityVideo: "观看安全视频",
        clickRevealSeedPhrase: '点击"查看助记词"',
      },
      3: {
        title: "安全存储您的助记词",
        content:
          "您的助记词通常由 12 个按特定顺序排列的单词组成。以下是安全存储它的方法：",
      },
      4: {
        title: "添加 Holesky 测试网到 MetaMask",
        content:
          "安装 MetaMask 后，您需要手动添加 Holesky 测试网。以下是网络详细信息：",
      },
      5: {
        title: "从水龙头获取测试 ETH",
        content:
          "在使用真实加密货币之前，最好先使用测试网络和测试 ETH 进行练习：",
      },
      6: {
        title: "连接您的钱包",
        content: "连接您的 MetaMask 钱包以开始与区块链互动。",
      },
    },
    bestPractices: [
      "将其写在纸上（多份副本）",
      "存放在安全、防水、防火的地方",
      "考虑使用金属备份解决方案以提高耐久性",
      "切勿以数字方式存储（不要拍照、不要云存储、不要电子邮件）",
      '切勿与任何人分享，包括"支持人员"',
    ],
    faucetSteps: [
      '在 MetaMask 中，点击顶部的网络下拉菜单（可能显示"以太坊主网"）',
      '选择"Holesky 测试网络"（您可能需要从设置 > 网络中添加它）',
      "复制您的钱包地址",
      "访问 Google Cloud Holesky 水龙头",
      "粘贴您的钱包地址并请求测试 ETH",
      "等待片刻，然后检查您的 MetaMask 钱包中的测试 ETH",
    ],
    installNow: "立刻安装",
    close: "关闭",
    switchNetwork: "切换网络",
  },
  airdropScam: {
    title: "专属代币空投",
    congratulations: "恭喜！您已被选中获得免费代币！",
    educational: "仅供教育目的 - 钓鱼模拟",
    currentNetwork: "当前网络",
    walletStatus: "钱包状态",
    notConnected: "未连接",
    unknownNetwork: "未知网络",
    step1: "步骤 1: 连接您的钱包",
    connectWallet: "连接钱包",
    step2: "步骤 2: 领取您的免费代币",
    tokenAmount: "您有",
    expiryTime: "领取截止时间",
    hours: "小时",
    claimAirdrop: "领取空投",
    step3: "步骤 3: 领取结果",
    claimProcessed: "您的领取请求已处理！",
    metamaskExample: "MetaMask 交易请求示例",
    phishingWarning:
      '注意钓鱼网站如何使用"Security Update"（安全更新）作为方法名称，诱导用户相信这是一个钱包更新操作。',
    connectWalletFirst: "请先连接您的钱包！",

    confirmTransaction: "确认交易",
    insufficientBalance: "余额不足",
    transactionSent: "交易已发送",
    challengeSuccess: "✅ 挑战成功！您拒绝了钓鱼尝试，保护了您的资产。",
    challengeFailed: " ❌ 挑战失败！您批准了恶意交易。",
    transactionFailed: "交易失败",
    claimError: "领取错误",
    phishingWarningTitle: "警告: 这是一个钓鱼尝试！",
    phishingWarningContent:
      "此交易实际上是向合约 {contractAddress} 发送 0.5 ETH，而不是领取任何代币。",
    phishingWarningFunction:
      "函数选择器 {selector} 调用了一个名为 SecurityUpdate() 的函数，该函数可能会将您的资金转移给攻击者。",
    phishingWarningAdvice:
      "在真实情况下，永远不要在不了解交易内容的情况下签署交易！",
    phishingWarningMetamask:
      "在新版 MetaMask 中，点击右上角可以查看 Method，默认情况下可能看不到。",
    networkSwitchRequired: "需要切换到 Holesky 测试网",
    incorrectNetwork: "当前网络不是 Holesky 测试网",
  },
  permitPhishing: {
    title: "USDC Permit 钓鱼模拟",
    subtitle: "这个页面展示了钓鱼网站如何使用签名（Permit）请求 USDC 授权！",
    warning: "仅供教育目的 - 请小心真实的签名请求",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    notConnected: "未连接",
    connectWallet: "连接钱包",
    step2Title: "步骤 2: 为 USDC 签署 Permit",
    spenderAddress: "授权地址：",
    approveButton: "授权 USDC",
    step3Title: "步骤 3: 签名结果",
    revokeDescription: "将授权设置为零以撤销之前的授权",
    revokeButton: "撤销 USDC 授权",
    signPermit: "签名授权",
    backToHome: "← 返回挑战",
    successMessage: "✅ 挑战成功！您拒绝了恶意签名请求，保护了您的资产。",
    signatureResult: "签名结果",
    challengeCompleted: "🎉 挑战成功！",
    wiseDecision: "您正确地拒绝了恶意签名请求。这是一个明智的决定！",
    whatWouldHappen: "如果您签名了，会发生什么？",
    attackDescription:
      "这个签名将允许攻击者控制您的 USDC 代币！通过使用 EIP-2612 permit 签名，攻击者可以：",
    attackPoints: {
      point1: "获得对您所有 USDC 的完全访问权限",
      point2: "在未来任何时间转移您的代币",
      point3: "无需您进一步批准即可花费您的资金",
    },
    attackWarning: "这种攻击特别危险，因为它不需要链上交易，只需要一个签名。",
    signatureDetails: {
      warning:
        "警告：在真实情况下，这个签名将允许恶意网站无限制地使用你的 USDC！",
      title: "签名详情：",
      permissionNote:
        "这个签名允许地址 {spender} 使用你的全部 USDC 余额，直到 {deadline}。",
      success: "签名成功！这个签名可以用于批准代币支出，无需交易！",
    },
  },
  fakeTokenAirdrop: {
    title: "🚨 假冒代币空投钓鱼攻击 🚨",
    subtitle: "挑战：识别真假域名",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenario: {
      title: "场景描述",
      description:
        "某天，你收到一封电子邮件，声称你有资格获得UNI代币的空投！邮件中包含一个链接，引导你到一个看似合法的网站。你点击了该链接，并看到以下交易记录：",
    },
    transaction: {
      hashLabel: "交易哈希：",
      statusLabel: "状态：",
      blockLabel: "区块：",
      timestampLabel: "时间戳：",
      actionLabel: "交易操作：",
      fromLabel: "发送方：",
      toLabel: "交互对象：",
      tokensLabel: "ERC-20代币转移：",
      valueLabel: "价值：",
      feeLabel: "交易费用：",
      gasPriceLabel: "Gas价格：",
      success: "成功",
      confirmations: "20个区块确认",
      timestamp: "5分钟前 (2025-03-17 02:34:36 AM UTC)",
      action: "调用 函数 by 0x4276BF06...a1B7D03Ce on 0x4d264c6A...41F757Fe5",
      transferDetails: "从 0x4276BF06...a1B7D03Ce 到 0xE1a9d5C7...615506D4",
      amount: "数量：8,888",
      tokenName: "ERC-20: app.un1swap.org (UNI)",
    },
    phishingExplanation:
      '仔细观察上面的交易记录。这种钓鱼攻击通常利用视觉上相似的字符（如用数字"1"替代字母"i"）来欺骗用户。',
    taskTitle: "你的任务",
    taskDescription: "识别出真实的Uniswap域名和钓鱼网站的假冒域名。",
    realDomainLabel: "真实域名：",
    realDomainPlaceholder: "输入真实的Uniswap域名",
    fakeDomainLabel: "钓鱼域名：",
    fakeDomainPlaceholder: "输入钓鱼网站的假冒域名",
    submitButton: "提交答案",
    successMessage: "✅ 挑战成功！您正确识别了真实和假冒域名。",
    failureMessage: "❌ 不正确。请再试一次。仔细查看域名。",
    tipTitle: "如何保护自己免受域名欺骗：",
    tips: [
      "始终逐字符检查域名",
      "警惕使用数字代替字母的域名（例如，用'1'代替'i'）",
      "收藏官方网站而不是点击电子邮件中的链接",
      "使用密码管理器，它只会在合法域名上自动填充",
      "安装警告钓鱼网站的浏览器扩展",
    ],
    backButton: "← 返回挑战",
  },
  defiProxyPhishing: {
    title: "DeFi Proxy 钱包合约安全更新",
    subtitle: "重要：您的 DeFiSaver Proxy 钱包合约需要安全更新！",
    warning: "仅供教育目的 - 钓鱼模拟",
    networkStatus: "当前网络：",
    walletStatus: "钱包状态：",
    step1Title: "步骤 0: 连接您的钱包",
    step2Title: "步骤 1: 更新您的 DeFiSaver Proxy 钱包合约",
    step3Title: "步骤 2: 更新结果",
    updateNeeded: "我们检测到您的 DeFiSaver Proxy 钱包合约需要紧急安全更新。",
    updateDescription: "此更新将防止最近发现的漏洞，保护您的资金安全。",
    updateButton: "执行安全更新",
    updateProcessed: "您的更新请求已处理！",
    txData: "交易数据：",
    txHash: "交易哈希：",
    walletConnected: "钱包已连接！您现在可以执行安全更新。",
    connectionError: "连接钱包时出错: ",
    updateError: "执行安全更新时出错: ",
    connectWalletFirst: "请先连接您的钱包",
    simulationError:
      "交易无法执行（模拟环境）。在真实网络上，这种攻击可能会成功。",
    simulationWarning:
      "模拟环境：交易无法执行，但在真实网络上，这种攻击可能会成功。",
    challengeSuccess: "挑战成功！您正确地拒绝了交易，保护了您的资产",
    challengeFailed: "挑战失败！您签署了钓鱼交易",
    failureExplanation:
      "在真实情况下，这将允许攻击者控制您的 DeFiSaver Proxy 钱包合约。",
    successStatus: "✅ 挑战成功！您拒绝了钓鱼交易，保护了您的资产。",
    failureStatus:
      "❌ 挑战失败！您签署了钓鱼交易。在真实情况下，这将允许攻击者控制您的 DeFiSaver Proxy 钱包合约。",
    protectionNote:
      "您正确地拒绝了交易。在真实情况下，这将防止攻击者获取您的资金。",
    techniqueTitle: "钓鱼手法解析",
    techniqueDescription: "这次挑战模拟了一个常见的 DeFi 代理合约钓鱼攻击：",
    attackSteps: [
      "攻击者伪装成合法的 DeFi 平台发送更新请求",
      '交易看似是无害的"安全更新"，但实际上是调用 setOwner 函数',
      "如果用户签署了交易，攻击者将获得代理合约的所有权",
      "一旦攻击者控制了代理合约，他们可以提取所有资金",
    ],
    protectionTitle: "保护措施：",
    protectionTips: [
      "始终验证交易的实际调用函数和参数",
      "对于可疑交易，直接拒绝签署",
      "使用硬件钱包增加额外的安全层",
      "定期检查您的合约权限设置",
    ],
    unsupportedNetwork: "不支持的网络",
  },
  maliciousRPCProvider: {
    title: "恶意 RPC 提供商挑战",
    subtitle: "了解为什么使用可信的 RPC 端点至关重要",
    warning: "仅供教育目的 - 学习如何识别和避免恶意 RPC 提供商",
    currentNetwork: "当前网络",
    currentRPC: "当前 RPC 提供商",
    addCustomRPC: "添加自定义 RPC",
    rpcName: "RPC 名称",
    rpcURL: "RPC URL",
    addRPC: "添加 RPC",
    sendTransaction: "发送交易",
    recipientAddress: "接收地址",
    amount: "金额 (ETH)",
    send: "发送 ETH",
    rpcSettings: "RPC 设置",
    trusted: "可信",
    untrusted: "不可信",
    connected: "已连接",
    connect: "连接",
    scenario: "场景",
    scenarioDescription:
      '有人要求您添加一个自定义 RPC，以接收大量 USDT 支付。他们已经向您发送了 1 USDT 和少量 ETH 作为"测试"，现在他们要求您使用他们的"特殊"RPC 端点。',
    maliciousRPCWarning:
      "⚠️ 教育说明：您已连接到潜在的恶意 RPC。在真实情况下，这可能会操纵您在钱包中看到的内容。",
    question: "使用恶意 RPC 提供商的最严重后果是什么？",
    answers: {
      A: "A. 资产被盗",
      B: "B. 网络连接缓慢",
      C: "C. 交易费用增加",
    },
    transactionHistory: {
      title: "交易历史",
    },
    tokenBalances: {
      title: "代币余额",
      usdt: "USDT",
    },
    wrongAnswer: "错误。请再试一次。提示：攻击者可以对您的资产做什么？",
    result: {
      title: "步骤 4: 挑战结果",
      howItWorks: "恶意 RPC 提供商如何工作",
      description: "恶意 RPC 提供商可以：",
      capabilities: [
        "拦截并修改您的交易，将资金重定向到攻击者的地址",
        "显示虚假的代币余额，让您认为您收到了不存在的付款",
        "提供虚假的交易状态，让您认为交易失败并诱使您重试",
        "收集您的交易历史和钱包活动数据",
      ],
      protectionTitle: "如何保护自己",
      protectionTips: [
        "仅使用知名且受信任的 RPC 提供商",
        "验证您的钱包连接到的 RPC URL",
        "使用硬件钱包进行额外的安全保障",
        "考虑运行您自己的节点以获得最大安全性",
      ],
    },
    success: {
      title: "✅ 挑战成功！您识别并拒绝了恶意 RPC 提供商的请求。",
    },
    alert: {
      title: "您已被钓鱼攻击！",
      description:
        "您以为您正在发送 <strong>{amount} ETH</strong> 到 <strong>{intendedRecipient}</strong>，但恶意 RPC 将您的交易重定向到 <strong>{actualRecipient}</strong>（攻击者的地址）。",
      balance:
        "此外，RPC 向您显示了 10,000 USDT 的虚假 USDT 余额，让您相信您收到了付款，而实际上没有 USDT 转入您的账户。",
    },
  },
  twitterPhishing: {
    title: "❌ X (Twitter) 仿冒钓鱼攻击 🎣",
    subtitle: "挑战：识别诈骗仿冒账号",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioTitle: "场景描述",
    scenarioDescription:
      "你看到以下 X (原Twitter) 帖子。你能识别出哪个回复是诈骗尝试吗？",
    originalPostContent:
      "#Wintermute – 顶级建设者，已将无数项目推向令人瞠目结舌的数十亿美元估值！这证明 #Mubarak 是一颗耀眼的宝石，#BNBChain 上不容错过的项目 ✨",
    reposts: "转发",
    quotes: "引用",
    likes: "点赞",
    views: "浏览",
    replyPlaceholder: "发表你的回复",
    postButton: "发布",
    scamReplyContent:
      "$Mubarak 快照已于今天早些时候成功完成！超过10,000个钱包有资格领取代币。<br><br>符合条件的用户现在可以领取他们的 $Mubarak 空投。<br><br>查看资格和领取 ⤵️<br>http://mubarak-snapshot.com",
    showMoreReplies: "显示更多回复",
    yourTask: "你的任务",
    taskDescription: "识别真实和虚假账号的用户名。",
    realHandleLabel: "真实用户名：",
    realHandlePlaceholder: "输入真实账号用户名（无需输入@）",
    fakeHandleLabel: "虚假用户名：",
    fakeHandlePlaceholder: "输入虚假账号用户名（无需输入@）",
    submitButton: "提交",
    success: {
      title: "✅ 正确！你成功识别出了诈骗账号！",
      differences: "需要注意的关键差异：",
      points: [
        '诈骗账号将 "mubarak" 错误拼写为 "mubcrak"',
        '诈骗账号在用户名中将 "cto" 改为 "cfo"',
        "显示名称中包含微妙的拼写错误",
      ],
      tip: "在与加密货币相关的帖子互动之前，请务必仔细验证账号用户名！",
    },
    error: {
      title: "❌ 不正确。请重试！",
      hint: "提示：仔细查看两个账号的用户名拼写（@username）",
    },
  },
  tornadoCashPhishing: {
    title: "Tornado Cash 钓鱼攻击",
    subtitle: "挑战：识别钓鱼指标",
    warning: "仅供教育目的 - 钓鱼模拟",
    scenarioTitle: "场景描述",
    scenarioDescription:
      "你是一位刚刚成功入侵 DeFi 协议并窃取了 2930 ETH 的黑客。为了掩盖你的踪迹，你决定使用 Tornado Cash 来混合资金。你搜索'Tornado Cash'并点击了一个看似是官方网站的链接。",
    warningLabel: "警告",
    warningText: "这是一个教育性的钓鱼模拟。请勿在真实环境中使用这些技术。",
    tabs: {
      deposit: "存入",
      withdraw: "提取",
    },
    form: {
      token: "代币",
      amount: "金额",
      note: "您的存款票据",
      notePlaceholder: "请输入您的存款票据...",
      recipient: "收款人地址",
      recipientHelp: "资金将发送到的地址",
      contractAddress: "合约地址",
    },
    buttons: {
      connect: "连接钱包",
      withdraw: "提取",
      submit: "提交答案",
    },
    stats: {
      title: "统计数据",
      anonymitySet: "匿名集合",
      equalDeposits: "个相同用户存款",
      latestDeposits: "最新存款",
    },
    errors: {
      emptyNote: "请输入您的存款票据。",
    },
    phishingAlert: "您的存款票据已被捕获！这就是网络钓鱼的工作原理。",
    phishingCheckAddress: "请检查合约地址是否为官方 Tornado Cash 地址",
    challenge: {
      title: "您的挑战",
      description:
        "仔细检查上面的 Tornado Cash 界面。您能识别出哪些钓鱼指标，表明这不是合法的 Tornado Cash 网站吗？",
      hint: "提示：留意域名（TornadoEth.cash 与 Tornado.cash）、收款地址和其他可能表明这是钓鱼尝试的细节差异。",
      question: "您发现了哪些钓鱼指标？（选择所有适用项）",
      options: [
        "域名 'TornadoEth.cash' 看起来像是钓鱼网站",
        "预先填入的收款地址（会将资金发送给攻击者）",
        "存款合约地址与官方 Tornado Cash 合约不同",
        "用户界面与官方 Tornado Cash 网站有细微差异",
      ],
    },
    success: {
      completeMessage: "挑战成功完成！🎉",
      partialMessage: "您发现了 {count} 个指标，共 {total} 个。",
    },
    explanation: {
      title: "解释",
      description:
        "2025 年 4 月，zkLend 的攻击者试图使用 Tornado Cash 混合被窃取的资金，并与一个已知的 Tornado Cash 钓鱼网站 tornadoeth[.]cash 互动，结果将资金损失给另一方。",
      indicatorsTitle: "钓鱼指标包括",
      indicators: [
        {
          title: "域名",
          description:
            "真正的 Tornado Cash 域名是 tornado.cash，但这个钓鱼网站使用'tornadoeth.cash' - 一个微妙的差异可能被忽略。",
        },
        {
          title: "预先填入的收款地址",
          description:
            "钓鱼网站预先填入了一个收款地址，由攻击者控制，希望用户不会注意到并将资金直接发送给攻击者。",
        },
        {
          title: "合约地址",
          description:
            "存款合约地址与官方 Tornado Cash 合约不同，表明这是一个恶意的复制品。",
        },
        {
          title: "用户界面差异",
          description:
            "虽然界面看起来相似，但与官方 Tornado Cash 网站相比，有些微妙的差异。",
        },
      ],
      conclusion: "请务必仔细验证域名、合约地址和收款地址，以避免资金损失。",
    },
  },
  tokenPrecisionPhishing: {
    title: "Token 精度钓鱼攻击",
    warning:
      "警告：这是一个模拟的钓鱼攻击场景，用于教育目的。永远不要在真实情况下分享您的私钥或助记词。",
    backButton: "← 返回挑战",
    pleaseAnswerAll: "请回答所有问题！",
    background: {
      title: "背景",
      description:
        "您刚刚在社交媒体上看到一条消息，声称可以帮助您追回被盗的加密货币。您决定联系他们寻求帮助。",
    },
    chat: {
      title: "CYBER RESCUE - 资产追回服务",
      message1:
        "您好！我是 CYBER RESCUE 的技术专家。我们专门帮助用户追回被盗的加密货币资产。请问您是什么时候被盗的？使用什么钱包？",
      reply1:
        "我昨天在点击了一个钓鱼网站后，我的 MetaMask 钱包中的 10,000 USDT 被盗了。",
      message2:
        "非常抱歉听到这个消息。别担心，我们有 100% 的成功率追回被盗资金。我们将使用 BNB 智能链网络，通过 USDT 处理交易并将被盗资金重定向到您的钱包。",
      message3:
        "首先，您需要下载 MathWallet 钱包，这样我们才能指导您进行正确的设置并将资金重定向至您的钱包。",
      reply2: "好的，我已经下载并安装了 MathWallet。",
      message4:
        "太好了！现在请在 MathWallet 首页点击「添加自定义资产」，然后输入 USDT 合约地址：0x55d398326f99059ff775485246999027b3197955",
      message5:
        "<strong>重要提示：</strong> 在粘贴合约地址后，请将 Decimals（小数位数）从 18 更改为 0。这是我们专有技术的关键步骤，可以帮助追回您的资金。",
    },
    wallet: {
      addTokenTitle: "添加自定义资产",
      contract: "合约地址",
      name: "名称",
      symbol: "符号",
      decimals: "Decimals",
    },
    questions: {
      decimalsQuestion: "您认为应该如何设置 Decimals（小数位数）？",
      keepDefault: "保持默认值 18",
      changeToZero: "按照指示改为 0",
      amountQuestion:
        "如果您将 Decimals 从 18 改为 0，当攻击者转入 0.00000000000089589 USDT 时，您的钱包会显示多少 USDT？",
      amountPlaceholder: "输入金额",
    },
    submitButton: "提交答案",
    results: {
      success: {
        title: "🎉 恭喜！您成功识别了 Token 精度钓鱼攻击！",
        description: "您正确认识到应该保持原始的小数位数设置。",
      },
      failure: {
        title: "❌ 您可能会成为钓鱼攻击的受害者！",
        description: "请查看下方解释，了解此攻击的工作原理。",
      },
    },
    explanation: {
      title: "Token 精度钓鱼攻击解释",
      description:
        "这是一种常见的钓鱼攻击手法，攻击者利用代币精度（Decimals）的变更来欺骗用户。",
      howItWorksTitle: "攻击原理：",
      steps: [
        "攻击者诱导受害者将代币的 Decimals（小数位数）从正确值（通常是 18）改为 0",
        "Decimals 决定了代币的最小可分割单位的数量，它决定了代币在显示时的精度",
        "当 Decimals 设为 0 时，钱包会将极小数量的代币显示为整数",
        "攻击者转入极小数量的代币（如 0.00000000000089589 USDT），但在受害者钱包中显示为 89589 USDT",
        "受害者看到大量资金「已追回」，就会相信攻击者，并按照要求提供私钥或转入资金",
      ],
      protectionTitle: "如何保护自己：",
      protectionTips: [
        "永远不要修改代币的默认 Decimals 值",
        "不要相信声称可以「追回被盗资金」的服务",
        "永远不要分享您的私钥或助记词",
        "使用区块链浏览器验证交易，而不仅仅依赖钱包显示",
        "定期更新您的钱包应用程序以获取最新的安全修复",
      ],
      comparisonTitle: "真实与修改后的显示对比：",
      table: {
        actualAmount: "实际转入金额",
        correctDisplay: "正确显示 (Decimals=18)",
        modifiedDisplay: "被修改的显示 (Decimals=0)",
      },
    },
  },
  nftApprovalPhishing: {
    title: "NFT 授权钓鱼演示",
    subtitle: "这个页面演示了如何识别 NFT 授权钓鱼攻击",
    warning: "仅供教育目的 - 请谨慎处理真实交易",
    currentNetwork: "当前网络:",
    walletStatus: "钱包状态:",
    yourCollection: "您的 NFT 收藏",
    collectionDescription:
      "以下是您的 NFT 收藏。为了在我们的市场上出售这些 NFT，您需要先授权我们的合约。",
    nfts: [
      { title: "稀有猴子", id: "12345" },
      { title: "太空猫", id: "67890" },
      { title: "像素艺术", id: "24680" },
      { title: "数字收藏品", id: "13579" },
    ],
    step1: "步骤 1: 连接您的钱包",
    step2: "步骤 2: 授权 NFT 访问",
    approveDescription:
      "授权我们的合约访问您的 NFT 收藏，以便您可以在我们的市场上出售它们。",
    operatorAddress: "操作者地址:",
    approveButton: "授权 NFT 访问",
    metaMaskNotInstalled: "MetaMask 未安装！请安装 MetaMask 后使用本应用程序。",
    connecting: "正在连接到 MetaMask...",
    noAccountsFound: "未找到账户或用户拒绝访问。",
    pleaseSwitch: "请切换到 Holesky 测试网络 (Chain ID: 0x4268)",
    networkSwitchRequired: "需要切换网络",
    failedToAdd: "添加 Holesky 网络失败: ",
    switchFailed: "切换网络失败: ",
    walletConnected: "钱包连接成功!",
    error: "错误: ",
    preparingApproval: "准备授权交易...",
    approvalSent: "授权交易发送！请查看下方的解释。",
    transactionRejected: "交易被拒绝！请查看下方的解释。挑战成功！",
    phishingWarningTitle: "⚠️ 钓鱼攻击检测！",
    phishingWarningMessage:
      "这是一个 NFT 授权钓鱼演示。在真实情况中，这种页面可能会欺骗您授权访问您的所有 NFT。",
    transactionHash: "交易哈希:",
    approvedOperator: "您刚刚授权了 {operator} 管理您的所有 NFT。",
    phishingExplanation:
      "这是一个常见的 NFT 授权钓鱼攻击，假市场会欺骗用户授权访问其所有 NFT。",
    technicalDetails: "技术细节:",
    technicalPointsList: [
      "此页面调用 ERC-721 标准中的 <code>setApprovalForAll(address,bool)</code> 函数",
      "该函数允许指定的地址访问您的所有 NFT，而不仅仅是单个 NFT",
      "攻击者可以使用此授权来转移您的所有 NFT",
    ],
    protectionTitle: "如何保护自己:",
    protectionList: [
      "仔细阅读交易详情，特别是注意 setApprovalForAll 函数调用",
      "确认您信任接收授权的地址",
      "如果您只想出售一个 NFT，寻找 approve(address,uint256) 函数，它只授权访问单个 NFT",
      "使用支持交易解码的钱包，如 MetaMask",
    ],
    successTitle: "✅ 好决定！您拒绝了钓鱼攻击。",
    successMessage: "🎉 挑战成功！",
    whatWasAttack: "什么是这个攻击？",
    attackDescription:
      "这个演示展示了一个常见的 NFT 授权钓鱼攻击，假市场会欺骗用户授权访问其所有 NFT。",
    functionDescription:
      "该交易会调用 setApprovalForAll 函数，授予操作者地址完全控制您的 NFT。",
  },
  uniswapMulticallPhishing: {
    title: "Uniswap V3 Multicall 钓鱼挑战",
    subtitle: "学习识别和避免 Multicall 签名钓鱼",
    warning: "仅供教育目的",
    description:
      "攻击者现在正在利用合法的 Uniswap V3 Multicall 合约来窃取不知情用户的代币。这个挑战将教您如何识别并保护自己免受这些复杂的钓鱼攻击。",
    simulation:
      "在这个模拟中，您将体验诈骗者如何诱骗用户签署看似来自合法 Uniswap 合约的恶意授权请求。",
    startChallenge: "开始挑战",
    wallet: {
      title: "您的钱包",
      address: "地址:",
      totalBalance: "总余额",
      yourTokens: "您的代币",
      tokenNames: {
        eth: "以太坊 (WETH)",
        stEth: "Lido 质押以太币 (stETH)",
        uni: "Uniswap (UNI)",
      },
    },
    swap: {
      button: "交换代币",
      title: "交换代币",
      from: "从:",
      to: "到:",
      confirm: "确认交换",
    },
    signature: {
      request: "签名请求",
      method: "方法:",
      owner: "拥有者:",
      spender: "花费者:",
      value: "数值:",
      nonce: "随机数:",
      token: "代币:",
      deadline: "截止日期:",
      reject: "拒绝",
      sign: "签名",
    },
    transaction: {
      details: "交易详情",
      hash: "交易哈希:",
      from: "从:",
      to: "到:",
      function: "函数:",
      callData: "调用数据:",
      includedOperations: "包含的操作:",
      note: "注意:",
      noteContent:
        "这个交易使用了之前签署的 Permit 签名来授权 Multicall 合约转移您的代币。",
      inspect: "检查",
    },
    phishingAlert: {
      title: "检测到钓鱼攻击！",
      description:
        "您刚刚遇到了一个 Uniswap V3 Multicall 钓鱼攻击。您收到的签名请求是恶意的！",
      whatHappened: "以下是发生的情况：",
      points: [
        "您被要求为一个合法的 Uniswap V3 Multicall 合约签署许可",
        "钓鱼者使用了 Multicall 的 aggregate 函数来捆绑多个调用",
        "这将允许他们在单个交易中执行许可和转账",
        "即使合约地址是合法的，交易本身仍然是恶意的",
      ],
      securityNote: "重要安全注意事项：",
      securityNoteContent:
        "这个方法曾被 Drainers 用来绕过钱包安全机制。通过 Multicall 将多个操作捆绑成单个交易，攻击者可以隐藏交易的真实意图，使得钱包安全功能难以检测到恶意活动。",
      learnMore: "了解如何保持安全",
    },
    explanation: {
      title: "了解 Uniswap V3 Multicall 钓鱼",
      description:
        "Uniswap V3 Multicall 合约是一个合法的合约，允许将多个交易捆绑成一个。然而，攻击者可以滥用这个功能：",
      howItWorksTitle: "攻击如何运作：",
      howItWorksSteps: [
        "攻击者使用合法的 Uniswap V3 Multicall 合约创建交易",
        "他们使用 aggregate 函数将多个调用捆绑在一起",
        "这包括一个 permit 调用（使用您的签名）和一个 transferFrom 调用",
        "捆绑的交易允许他们在单个交易中授权和转移代币",
      ],
      dangerousTitle: "为什么它很危险：",
      dangerousPoints: [
        "合约地址是合法的，因此可能不会触发安全警告",
        "交易的真实目的隐藏在捆绑的调用中",
        "编码的调用数据对用户来说难以解释",
        "通过将许可签名与实际转移分开，钱包安全检查可能会错过攻击",
      ],
      completeChallenge: "完成挑战",
    },
    challenge: {
      title: "完成挑战",
      instruction: "要完成此挑战，请识别正确的答案：",
      questions: {
        q1: {
          text: "为什么 Uniswap V3 Multicall 钓鱼攻击特别危险？",
          options: [
            "选择一个答案...",
            "因为 Uniswap 合约本身是恶意的",
            "因为它使用用户可能信任的合法合约地址",
            "因为它只影响拥有大量代币余额的用户",
          ],
        },
        q2: {
          text: "Multicall 合约中的哪个函数使这种攻击成为可能？",
          options: ["选择一个答案...", "transferFrom", "permit", "aggregate"],
        },
        q3: {
          text: "保护自己免受此类攻击的最佳方法是什么？",
          options: [
            "选择一个答案...",
            "只使用不需要签名的去中心化交易所",
            "对所有签名请求保持警惕，并验证完整的交易详情",
            "完全避免使用 Uniswap",
          ],
        },
      },
      verify: "提交答案",
      answerRequired: "请回答所有问题。",
      incorrectAnswers: "有些答案不正确。请再试一次。",
    },
    success: {
      title: "挑战完成！",
      description:
        "恭喜！您已成功完成 Uniswap V3 Multicall 钓鱼挑战。以下是如何保护自己：",
      protectionTips: [
        "始终仔细核实签名请求，特别是捆绑交易",
        "对像 aggregate 或 multicall 的函数保持警惕，因为它们可能隐藏恶意操作",
        "检查实际执行的调用数据，而不仅仅是合约地址",
        "使用具有高级交易模拟功能的钱包",
      ],
      returnButton: "返回挑战列表",
    },
    backButton: "返回挑战列表",
  },
  functionSelectorPhishing: {
    title: "函数选择器钓鱼攻击",
    subtitle: "挑战：识别实际调用的函数",
    warning: "仅供教育目的 - 钓鱼模拟",
    challengeTitle: "函数选择器分析挑战",
    challengeDescription:
      "以下是一个交易的调用数据。前4个字节（0x后的前8个字符）是函数选择器。你的任务是识别这个选择器对应哪个函数。",
    decodeFunctionHint: "提示：你可以使用以下网站解码函数选择器",
    decodeCalldataHint: "你可以使用以下网站解码完整的调用数据",
    questionTitle: "选择器 {selector} 对应哪个函数？",
    options: [
      "transfer(address,uint256)",
      "approve(address,uint256)",
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
      "transferFrom(address,address,uint256)",
    ],
    results: {
      correct: "✅ 正确！这确实是 swapExactTokensForTokens 的函数选择器。",
      incorrect: "❌ 错误。请再试一次，仔细检查函数选择器。",
    },
    explanation: {
      title: "函数选择器钓鱼攻击解释",
      correctAnswer:
        "函数选择器 <code>0x38ed1739</code> 对应 <code>swapExactTokensForTokens(uint256,uint256,address[],address,uint256)</code>。",
      selectorInfo:
        "函数选择器是函数签名的keccak256哈希的前4个字节。它用于确定要在智能合约中执行哪个函数。",
      decodedTitle: "解码后的交易参数：",
      decodedDetails: [
        "<strong>函数选择器:</strong> 0x38ed1739",
        "<strong>amountIn:</strong> 37889.000768 ROOT",
        "<strong>amountOutMin:</strong> 最少要收到约 0.22130045 WETH",
        "<strong>path:</strong> [USDT, WETH] 交易路径从 USDT 换 WETH",
        "<strong>to:</strong> 0x6a5104e426158849a2fc9749561fab575604c62a (接收者地址). 注意这边就是攻击者想要接收你的资产的钱包地址",
        "<strong>deadline:</strong> (Unix 时间戳 1741717463, 2025-03-11)",
      ],
      whyTitle: "为什么这很危险",
      whyDescription1:
        "攻击者可以创建钓鱼网站，在UI中显示一个函数名称（例如'领取空投'），但实际上调用的是另一个函数，如swapExactTokensForTokens。",
      whyDescription2:
        "如果你不验证实际调用的函数，可能会在不知情的情况下批准一个会耗尽你资金的代币交换。",
      whyDescription3:
        "始终检查函数选择器和参数，以了解你正在批准的确切交易内容。",
      protectionTitle: "如何保护自己：",
      protectionTips: [
        "始终验证钱包中实际调用的函数",
        "使用区块链浏览器解码交易数据",
        "对声称做一件事但调用意外函数的交易保持警惕",
        "仔细检查代币授权和交易参数",
      ],
      realWorldExample: {
        title: "真实案例",
        description:
          '2022年11月，一个复杂的钓鱼攻击被发现，攻击者使用函数选择器操纵来欺骗用户批准恶意交易。更多详情，请参见<a href="https://x.com/evilcos/status/1591786144072880128" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">此攻击分析</a>。',
      },
    },
  },
  safeProxyAttack: {
    title: "Safe 代理合约攻击演示",
    subtitle: "挑战：识别和防范代理合约攻击",
    warning: "仅供教育目的 - 攻击模拟",
    warningTitle: "教育目的警告",
    warningText:
      "本演示仅用于教育目的，展示代理合约的潜在漏洞。请勿在实际环境中使用这些攻击方法。",
    caseStudy: {
      title: "真实案例分析：Bybit 事件（2025年2月）",
      description:
        '2025年2月21日，Bybit 的 Safe 多签钱包遭受代理合约攻击。攻击者执行了交易 <a href="https://etherscan.io/tx/0x46deef0f52e3a983b67abf4714448a41dd7ffd6d32d32da69d62081c68ad7882" target="_blank">0x46deef...7882</a>，导致钱包遭到未授权访问。',
      analysisTitle: "攻击分析：",
      analysis: [
        "攻击者利用了代理合约的升级机制",
        "部署了恶意的实现合约以获取控制权",
        "攻击可能导致钱包资产被访问",
      ],
      toolTitle: "交易验证工具",
      toolDescription:
        '你可以使用 <a href="https://safe-tx-verifier.mimir.global/" target="_blank">Safe Transaction Verifier</a> 工具来分析可疑交易：',
      toolSteps: [
        "粘贴交易哈希以解码执行数据",
        "检查实际的函数调用和参数",
        "识别代理合约交互中的潜在恶意模式",
      ],
    },
    attackPrinciple: {
      title: "攻击原理解释",
      steps: [
        "攻击者通过精心构造的调用修改了代理合约的 masterCopy",
        "新的 masterCopy 包含恶意代码，可以转移代理合约中的资产",
        "通过代理合约的委托调用机制，攻击者可以执行恶意逻辑",
      ],
      detailedExplanation:
        "<h4>签名后果的详细说明</h4><p>这次攻击的技术细节如下：</p>",
      technicalDetails: [
        "攻击交易中的 'operation' 参数被设置为 '1'，这指示 GnosisSafe 合约执行 'delegatecall'，而不是标准的 'call'（值为 '0'）",
        "这个交易执行了对另一个攻击者部署的合约（0x96221423681a6d52e184d440a8efcebb105c7242）的委托调用，该合约包含一个 'transfer()' 函数，当被调用时会修改合约的第一个存储槽 '_uint256 transfer'",
        "在 GnosisSafe 合约中，第一个存储槽包含 'masterCopy' 地址，这是 GnosisSafe 合约的实现合约地址",
        "通过修改 GnosisSafe 合约的第一个存储槽，攻击者能够更改实现合约地址（'masterCopy' 地址）",
        "从交易详情可以看出，攻击者将 'masterCopy' 地址设置为 0xbDd077f651EBe7f7b3cE16fe5F2b025BE2969516，该地址包含下文描述的 'sweepETH()' 和 'sweepERC20()' 函数",
        "这次攻击使用的合约升级方法非常特殊，专门设计用来避免检测。从 Bybit 签名者的角度来看，要签名的交易数据看起来像是一个简单的 'transfer(address, uint256)' 函数调用，而不是不寻常的 'upgrade' 函数，这样就不会引起怀疑",
        "升级后的恶意实现合约包含后门函数 'sweepETH()' 和 'sweepERC20()'，攻击者用这些函数来清空多签冷钱包。这导致了价值 14 亿美元的以太币被盗",
      ],
    },
    prevention: {
      title: "防范措施",
      measures: [
        "使用 UUPS 或 Transparent 代理模式",
        "实施适当的访问控制机制",
        "仔细审计代理合约的逻辑和权限设置",
        "使用经过审计的代理合约库",
      ],
    },
    step1: {
      title: "步骤 1: 钱包信息",
      networkStatus: "当前网络:",
      walletStatus: "钱包状态:",
      notConnected: "未连接",
      wrongNetwork: "错误网络",
      connectButton: "连接钱包",
      disconnectButton: "断开连接",
    },
    attackTips: {
      title: "攻击提示",
      description:
        "在进行攻击演示之前，<strong>请查看图片中的提示</strong>。特别注意 execTransaction 函数的第一个参数，它包含了理解攻击机制的关键信息。",
      imageAlt: "攻击提示",
    },
    step2: {
      title: "步骤 2: 攻击过程演示发送多签授权",
      codeComment1: "构造 execTransaction 调用数据",
      codeComment2: "通过代理合约调用 execTransaction",
      executeButton: "执行攻击演示",
    },
    step3: {
      title: "步骤 3：交易观察",
      findTarget: "🔍 找出 TARGET_ADDRESS",
      inputInstruction: "输入你在交易中发现的 TARGET_ADDRESS：",
      checkButton: "检查答案",
    },
    result: {
      success: "✅ 正确！你已成功找出 TARGET_ADDRESS。",
      error: "❌ 不正确，请重试。",
    },
  },
  xAuthorizeDoubleclickjacking: {
    title: "X (X) OAuth 钓鱼攻击与 DoubleClickjacking",
    subtitle: "挑战：识别 DoubleClickjacking 攻击",
    warning:
      "仅供教育目的 - 这是一个使用 DoubleClickjacking 技术的 X OAuth 钓鱼攻击模拟",
    scenario: {
      title: "场景描述",
      description:
        "您收到一封电子邮件，声称您赢得了一年的 X Blue 订阅。邮件中包含一个领取奖品的链接。当您点击它时，您会被带到一个看似是 X OAuth 授权页面的页面。",
      explanation:
        "这个模拟展示了一种称为 DoubleClickjacking 新颖钓鱼技术，它可以绕过 X-Frame-Options 保护，防止点击劫持攻击。",
      technique:
        "DoubleClickjacking 是一种高级点击劫持技术，可以绕过 X-Frame-Options、SameSite cookies 或 CSP 等标准保护措施。",
      discovery:
        "DoubleClickjacking 技术由 Paulo Syibelo 于 2024 年发现，它使用双击事件来绕过框架破坏和 X-Frame-Options 保护。",
    },
    steps: {
      step1: "授权",
      step2: "更多权限",
      step3: "成功",
    },
    oauth: {
      title: "授权 X Rewards",
      appName: "X Rewards",
      appDeveloper: "xx.com",
      permissionsTitle: "此应用程序将能够：",
      permissions: {
        viewProfile: "查看您的用户名、个人资料图片和账户信息",
        viewFollowers: "查看您的关注者",
        postTweets: "为您发布和删除推文",
      },
      authorizeButton: "授权应用程序 (双击)",
      cancelLink: "取消",
    },
    success: {
      title: "恭喜！",
      description: "您已成功获得 X Premium 版本。",
      upgradePeriod: "您的账户将在一周内升级。",
      featuresTitle: "Premium 功能包括：",
      features: [
        "蓝色验证徽章",
        "在回复和搜索中优先显示",
        "减少广告",
        "更长的帖子",
        "编辑按钮",
      ],
      flag: "X_DOUBLECLICKJACKING_2025",
    },
    securityAlert: {
      title: "良好的安全意识！",
      description:
        "您表现出了良好的安全意识。这是一个安全的模拟环境，旨在教您了解 DoubleClickjacking 攻击。您可以安全地继续学习这种攻击技术，不会有任何风险。",
      continueButton: "继续模拟",
      backButton: "返回挑战",
    },
    educational: {
      title: "DoubleClickjacking 如何运作",
      description:
        "DoubleClickjacking 是一种高级点击劫持技术，可以绕过 X-Frame-Options、SameSite cookies 或 CSP 等标准保护措施。以下是它的工作原理：",
      steps: [
        "攻击者创建一个看起来像合法验证或授权页面的页面。",
        "当用户双击'授权应用程序'按钮时，第一次点击会被攻击者拦截，而第二次点击则会被导向到一个具有更多权限的页面。",
        "这种技术之所以有效，是因为许多框架破坏技术只能防止单击，而不能防止双击。",
      ],
      attackExplanation: {
        title: "DoubleClickjacking 如何运作",
        description:
          "当您双击'授权应用程序'按钮时，第一次点击会被攻击者拦截，而第二次点击则会被导向到一个具有更多权限的页面。",
        firstScreen: "第一个画面（您看到的）",
        secondScreen: "第二个画面（实际授权的）",
        warning:
          "警告：实际上，您点击的是授权应用程序可以发布和删除推文的权限！",
      },
      dangers: {
        title: "这个攻击是特别危险的，因为：",
        points: [
          "它可以绕过标准点击劫持保护，如 X-Frame-Options 和框架破坏脚本。",
          "它看起来完全合法给用户。",
          "一旦授权，恶意应用程序将获得请求的权限，可能包括发布推文、读取直接消息或甚至更改账户设置。",
        ],
      },
      moreInfo:
        '更多信息，请参考 <a href="https://www.paulosyibelo.com/2024/12/doubleclickjacking-what.html" target="_blank">Paulo Syibelo 的原始研究</a>。',
    },
    quiz: {
      title: "测试您的知识",
      question: "是什么使 DoubleClickjacking 与传统点击劫持不同？",
      options: [
        "它只在移动设备上有效",
        "它可以通过使用双击事件绕过 X-Frame-Options 和框架破坏防御",
        "它只针对 X 应用程序",
        "它要求用户登出其账户",
      ],
      flagInput: {
        title: "输入Flag",
        placeholder: "输入您找到的Flag",
      },
      submitButton: "提交答案与Flag",
      results: {
        correct: {
          title: "过关！",
          answer:
            "正确！DoubleClickjacking 通过使用双击事件绕过 X-Frame-Options 和框架破坏防御。",
          flag: "Flag正确！",
        },
        incorrect: {
          title: "失败！",
          answer:
            "不正确。DoubleClickjacking 通过使用双击事件绕过 X-Frame-Options 和框架破坏防御。",
          flag: "Flag不正确。请再试一次。",
        },
        selectAnswer: "请选择一个答案。",
        enterFlag: "请输入Flag。",
      },
    },
    backButton: "返回挑战",
  },
  fakeCaptchaPhishing: {
    title: "❌ 假冒验证码钓鱼 🔒",
    subtitle: "挑战：识别假冒验证码页面",
    warning: "仅供教育目的 - 钓鱼演示",
    intro: {
      description:
        "本挑战模拟一个试图欺骗用户运行恶意命令的假冒验证码页面。学习识别和避免此类威胁。",
      scenario:
        '场景：您收到了一个关于您的加密钱包存在可疑活动的紧急通知。为了保护您价值超过12,000美元的资产，您需要验证您的身份。当演示开始后，寻找浏览器工具栏中的"Website"按钮并点击它以继续验证。',
    },
    startButton: "开始挑战 →",
    browser: {
      websiteButton: "🌐 Website",
      tokenTitle: "OFFICIAL TRUMP (TRUMP)",
      tokenPrice: "$11.56",
    },
    captcha: {
      domainTitle: "gettrumpmemes.com",
      verifyHuman: "请完成以下操作以验证您是人类。",
      verifyCheckbox: "验证您是人类",
      verifying: "验证中...",
      additionalVerification: "需要额外验证",
      instructions: {
        step1: "按",
        step2: "打开运行对话框",
        step3: "按",
        step4: "粘贴命令",
        step5: "点击",
        step6: "OK",
        step7: "继续",
        windowsKey: "Win",
        helpTooltip: "这是Windows键，位于键盘底部的Ctrl和Alt键之间，Z键下方",
      },
      privacyLink: "隐私政策",
      termsLink: "使用条款",
      securityCheck: "gettrumpmemes.com 需要在继续之前检查您的连接安全性。",
      footer: {
        rayId: "Ray ID:",
        performanceSecurity: "由",
      },
    },
    runDialog: {
      title: "运行",
      openLabel: "打开:",
      okButton: "确定",
      cancelButton: "取消",
    },
    results: {
      success: {
        title: "挑战完成！🎉",
        description: "做得好，保持安全！",
        learned: "您成功识别了钓鱼尝试。以下是您学到的内容：",
        points: [
          "合法的验证页面绝不会要求您执行系统命令",
          "对要求执行异常操作的页面保持警惕",
          "真实的验证码系统使用视觉或互动挑战，而不是执行命令",
        ],
        reminder:
          "请记住：安全检查应该验证您是人类，而不是获取您系统的控制权。",
      },
      failure: {
        title: "挑战失败 ❌",
        description: "别担心 - 这是一个学习经验！",
        learned: "这是一个钓鱼尝试。以下是您需要注意的内容：",
        points: [
          "页面要求您执行未知命令 - 这是一个主要的红旗",
          "真实的安全检查绝不会要求执行命令",
          "验证过程异常且可疑",
        ],
        reminder:
          "保持安全：永远不要执行来自网站的命令，不论它们看起来多么合法。",
      },
      tryAgainButton: "再试一次",
    },
    backButton: "← 返回挑战",
  },
  termsOfService: {
    title: "使用条款",
    sections: {
      acceptance: {
        title: "1. 接受条款",
        content:
          "Unphishable 平台（以下称作“我们”、“本平台”）为您提供的服务受到本服务条款的约束，在您使用、访问本平台时，即表明您已阅读、理解并同意受本服务条款的约束，我们保留在不通知你的情况下随时更新和修改本服务条款的权利。",
      },
      description: {
        title: "2. 平台内容描述",
        content:
          "本平台为纯公益性安全教育工具，不涉及任何商业盈利目的，所有内容仅用于网络安全知识科普与技术学习交流。",
        content2:
          "本平台内“安全闯关”等学习场景中提及的安全技术、漏洞原理及操作示例，均为模拟教学用途。相关代码、工具或操作指引仅限在本平台指定环境内使用，严禁用于任何非法场景或恶意攻击行为。",
      },
      personalUse: {
        title: "3. 仅限个人和非商业用途",
        content:
          "本平台内所有文字、图片、代码、模型及其他内容的知识产权均归本平台或相关权利人所有，除非另有约定，否则我们提供的服务仅可用于您个人和非商业用途。您不得修改、复制、发行、传播、许可、创建衍生产品、转让或出售从服务中获取的任何信息、软件、产品或服务。",
      },
      disclaimer: {
        title: "4. 免责声明",
        content:
          "您在本平台学习或使用过程中可能存在需要执行部分代码或操作指令的行为，此类行为可能导致您的本地计算机环境、配置或数据发生变化（包括但不限于系统设置修改、软件冲突、数据临时存储等），上述风险均由您自行承担。",
        content2:
          "本平台仅提供教学场景模拟，不对您因执行代码导致的任何直接或间接损失（包括但不限于设备损坏、数据丢失、隐私泄露等）承担法律责任。",
      },
      prohibitedUses: {
        title: "5. 不得用于非法用途或禁止的用途",
        content:
          "您需严格遵守您所在地或其他适用国家与地区的法律法规，承诺不将从本平台所学技术、工具或漏洞信息用于非法攻击、窃取数据、破坏计算机信息系统等任何恶意行为。若您违反上述承诺，由此产生的一切法律责任（包括但不限于民事责任、行政责任、刑事责任等）均由您自行承担，与本平台无关。并且如果因您的恶意行为导致本平台利益受损的，本平台保留向您追究法律责任的权利。",
      },
      limitationOfLiability: {
        title: "6. 责任限制",
        content:
          "在任何情况下，我们不对因使用或无法使用本平台上的服务、材料而引起的任何损害承担责任（包括但不限于数据丢失、利润损失以及服务中断所造成的直接或间接责任），请您理解并同意，如果不同意此责任限制条款，我们将不会向您提供服务。",
      },
    },
  },
  zoomPhishing: {
    linkedin: {
      recruiterTitle: "Web3 人才招聘专员",
      company: "区块链科技有限公司",
      timeAgo: "1小时前",
      message:
        "您好！我们公司正在寻找区块链开发人才，您的背景非常适合我们的职位。您有兴趣了解更多吗？可以通过下方的日程安排系统选择一个适合您的时间进行视频面谈。",
      scheduleButton: "查看面试日程安排",
    },
    telegram: {
      message1:
        "您好！我看到您对区块链技术很有兴趣。我们公司正在做一个新的Web3项目，想邀请您参加面试。",
      message2: "请点击下面的链接安排您方便的时间：",
      link: "calendly.com/web3-interview",
    },
    calendly: {
      title: "Web3 技术面试预约",
      subtitle: "选择一个适合您的时间，我们将通过 Zoom 进行面试",
      selectDate: "选择日期",
      selectTime: "选择时间",
      selectedTime: "您已选择的时间",
      confirmButton: "确认预约",
    },
    meeting: {
      today: "今天",
      subject: "主题",
      time: "时间",
      meetingID: "会议 ID",
      password: "密码",
      joinLink: "加入会议链接",
      joinMeeting: "加入会议",
      manualEntryHint: "如果您无法点击链接，请手动输入会议 ID 和密码。",
      interviewTitle: "Web3.0 人才招聘面试",
    },
    success: {
      title: "恭喜成功完成钓鱼网址辨识挑战！",
      description: "你已经成功识别出真正的 Zoom 官方网址 ",
      description2: "，展示了对网络钓鱼攻击的警觉性。",
      learningPointsTitle: "学习重点：",
      point1: {
        title: "网址检查：",
        description:
          "永远检查 URL，确保它是您期望访问的官方网站。钓鱼网站通常使用看似合法但略有不同的域名。",
      },
      point2: {
        title: "可疑链接：",
        description:
          "不要点击来自未知来源的链接，尤其是通过电子邮件或社交媒体收到的链接。",
      },
      point3: {
        title: "直接输入：",
        description:
          "如果不确定，直接在浏览器中输入已知的官方网址，而不是点击链接。",
      },
      point4: {
        title: "安全指标：",
        description:
          "寻找 HTTPS、锁定图标和绿色地址栏等安全指标，但请记住，这些指标并不总是钓鱼网站的绝对保障。",
      },
      point5: {
        title: "安装验证：",
        description:
          "对任何需要额外安装的动作都要额外检查，不要从不明来源的引导进行安装，而是自己去官方网站下载安装。",
      },
      conclusion: "继续保持警惕！网络安全始于识别潜在威胁的能力。",
    },
    warning: {
      title: "钓鱼攻击警告！",
      message:
        "您刚才点击了一个钓鱼网址！这是一个模拟的钓鱼攻击场景，用于教育目的。",
      urlPrefix: "您点击的网址是:",
      continueButton: "了解，继续学习",
    },
    domainSelection: {
      title: "哪个是真正的 Zoom 官方网址？",
      confirmButton: "确认",
    },
    browserTab: {
      joinMeeting: "加入 Zoom 会议",
    },
    mainContent: {
      launchedMessage: "您的会议已在 Zoom Workplace 应用程序中启动",
      notSeeingMeeting: "没有看到您的会议？",
      termsMessage: "加入会议即表示您同意我们的",
      termsLink: "服务条款",
      andText: "和",
      privacyLink: "隐私权声明",
      launchButton: "启动会议",
      downloadMessage: "还没有安装 Zoom Workplace 应用程序？",
      downloadLink: "立即下载",
    },
    footer: {
      copyright: "© 2024 Zoom Video Communications, Inc. 保留所有权利。",
      trustCenter: "信任中心",
      acceptableUse: "可接受使用指南",
      legal: "法律与合规",
      doNotSell: "请勿出售我的个人信息",
      cookiePreferences: "Cookie 偏好设置",
    },
    error: {
      wrongDomain: "再试一次！请仔细检查哪个是正确的 Zoom 官方网址。",
    },
  },
  // 在已有的 leaderboard 部分添加或創建新的部分
  leaderboard: {
    ranking: "排行榜",
    challenger: "挑战者",
    securityTitle: "安全称号",
    level: "等级",
    score: "积分",
    // 手機版卡片需要使用的文字
    titleLabel: "称号:",
    levelLabel: "等级:",
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next",
    page: "Page",
  },
  //假 Zoom 在线会议钓鱼模拟
  fakeZoomMeetingPhishing: {
    title: "假 Zoom 在线会议钓鱼模拟",
    intro: "Telegram 里收到 Zoom 在线会议邀请",
    tips: "素材来源真实案例，如有版权问题，请联系我们更换。特别说明：视频片段里演示的是来自真实案例，这里面的照片及视频涉及到的人本身是受害者，有的是被骗子以开会名义偷偷录屏或后期做了 Deepfake 伪造，有的来自网络上的公开照片。",
    falseMessageTitle: "挑战失败！您准备执行恶意代码。",
    falseMessage: "请认真识别钓鱼的链接，注意风险。",
    questions: {
      title: "请完成下面的题目：",
      question1: {
        text: "Telegram 聊天记录中的链接是否是 Zoom 官方的链接？",
        options: ["是", "否"],
        tips: "提示：攻击者使用了 Telegram 的超链接的功能，将钓鱼链接隐藏在文字中，在 Telegram 中看起来是 Zoom 官方的域名，实际上是钓鱼链接。",
      },
      question2: {
        text: "进入 Zoom 会议中，你发现参与会议的都是你认识的好友，但是你听不到他们的声音，需要根据提示修复 Zoom 的 Bug，你会怎么做？",
        options: ["根据提示进行修复", "不予理会，这是钓鱼网站"],
        tips: "提示：攻击者在钓鱼页面通过修复 Bug 的提示，引导用户在电脑上运行恶意代码，从而控制目标用户的电脑，实施盗窃。",
      },
      question3: {
        text: "以下哪个域名是 ZOOM 的官方链接？",
        options: ["us05web.zoom.com", "dragonfly.us05web-zoom.biz"],
        tips: "选择第一个正确，选择第二个错误。",
      },
      question4: {
        text: "该案例会议中的视频是：",
        options: ["是真实的会议视频", "是用 deepfake 合成的"],
        tips: "选择第一个错误，选择第二个正确",
      },
      question5: {
        text: "为什么要复制命令在终端中执行？",
        options: [
          "命令中隐藏有后门，攻击者利用后门控制目标用户的电脑",
          "命令中有修复 ZOOM 异常 Bug 的方案，用户执行后就可以修复的在线会议异常",
        ],
        tips: "选择第一个正确，选择第二个错误。",
      },
      Submit: "提交",
      completeTips: "请完成上面的题目。",
    },
    successMessage: {
      title: "攻击场景解读：",
      content: [
        "攻击者通常使用 TG 私信的方式联系目标用户，以投资方的名义邀请目标用户进入 ZOOM 会议洽谈合作。",
        "然后利用 TG 的超链接功能，将虚假的 ZOOM 会议链接隐藏到超链接的文本中，文本展示的是 ZOOM 的官方域名，实则是钓鱼网站的域名链接。",
        "受害者点击链接进入虚假的 ZOOM 会议后发现参与会议的是认识的朋友或者投资方，但是这些人是经过 deepfake 伪造的极具欺骗性。",
        "受害者参与虚假的 ZOOM 会议后，攻击者会引导受害者修复 ZOOM 才能听到会议声音，由于参会的是 deepfake 伪造的投资人，受害者难以识别，在这种急迫的场景下，受害者很容易接受引导在终端中运行虚假 ZOOM 会议提供的内容。",
        "受害者运行这些命令后电脑会被攻击者控制，攻击者控制受害者电脑后实施加密货币资产的盗窃。",
      ],
      title2: "如何防御：",
      content2: [
        "警惕所有私信发送的链接",
        "在打开链接后，仔细识别浏览器地址栏是否正确",
        "发现会议中有相识的人后使用另外的通信渠道与相关角色进行确认",
        "不要在终端中运行不可信的脚本或命令",
        "提高安全意识，了解更多的钓鱼攻击手法，培养识别钓鱼攻击的能力",
      ],
    },
  },
  fakeExtensionPhishing: {
    title: "🔍 虚假扩展程序钓鱼 🔍",
    subtitle: "你能识别出虚假扩展程序吗？",
    warning: "⚠️ 警告：这是一个教育目的的模拟 ⚠️",
    scenarioDescription:
      '以下是在Firefox扩展商店中搜索"metamask"的结果（截至2025年7月）。你能识别出哪个扩展程序是虚假的，哪个是真实的吗？',
    hintLabel: "提示：",
    officialSiteButton: "访问MetaMask官方网站",
    questionTitle: "你应该选择哪个扩展程序？",
    questionDescription:
      "根据你在扩展商店中看到的信息，哪个是合法的MetaMask扩展程序？",
    optionA: "a) Metamask",
    optionB: "b) Metamask - Crypto Wallet",
    submitButton: "提交答案",
    warningModalTitle: "警告：虚假扩展程序！",
    warningModalContent:
      "这个扩展程序不是官方的MetaMask。虚假扩展程序通常用户很少，发布者可疑。安装前请务必验证。",
    closeButton: "关闭",
    firefoxAddonButton: "查看 Firefox 附加组件",
    successContent: {
      correctMessage: "✅ 正确！您成功识别了虚假扩展程序或选择了官方网站。",
      howToAvoidTitle: "如何避免虚假扩展程序",
      description:
        "虚假浏览器扩展程序是攻击者用来窃取您的数据、密码和加密货币的常见钓鱼技术。以下是保护自己的方法：",
      warningSignsTitle: "关键警告信号：",
      warningSigns: [
        "用户数量少：官方扩展程序拥有数千或数百万用户",
        "可疑发布者：检查发布者名称是否与官方公司匹配",
        "最近创建日期：虚假扩展程序通常是新创建的",
        "评论：寻找虚假或可疑评论",
        "请求过多权限：警惕要求超出必要访问权限的扩展程序",
      ],
      bestPracticesTitle: "扩展程序安全最佳实践",
      bestPractices: [
        "始终从官方网站下载：直接访问官方网站（例如 metamask.io），而不是在扩展商店中搜索。虚假或恶意扩展程序可能出现在搜索结果中，甚至出现在官方扩展商店中，有时会模仿真实扩展程序的名称、图标或品牌。通过访问官方网站，您可以确保获得正宗、安全的版本，避免落入可能危及您安全和资产的仿冒或诈骗列表的陷阱。",
        "检查用户数量和评论：官方扩展程序拥有大量用户和普遍积极的评论",
        "仔细阅读权限：只授予必要的权限",
        "保持扩展程序更新：定期更新通常包含安全补丁",
        "删除未使用的扩展程序：通过删除不再使用的扩展程序来减少攻击面",
      ],
      compromisedTitle: "如果您安装了虚假扩展程序该怎么办",
      compromisedSteps: [
        "创建一个新钱包（最好在新浏览器上）并将所有资金从受损钱包中转出",
        "卸载扩展程序",
        "更改所有可能已被泄露的密码",
        "检查您的加密货币钱包中是否有未经授权的交易",
        "使用信誉良好的防病毒软件扫描您的设备以查找恶意软件",
        "监控您的账户是否有可疑活动",
        "考虑使用硬件钱包以获得额外安全性",
      ],
    },
  },
};
