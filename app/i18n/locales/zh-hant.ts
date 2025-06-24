export default {
  privacy: {
    title: "隱私政策",
    welcome:
      "歡迎來到 Unphishable 平台（以下稱作「我們」、「本平台」），本平台是一個致力於透過模擬實戰場景提升使用者網路安全意識與技術能力的安全教育平台。使用本平台即表示您同意按照本隱私條款的規定收集、使用和儲存您的資訊。我們關心您的隱私，本隱私條款旨在協助您了解我們會收集哪些資訊、為什麼收集這些資訊。",
    description: "",
    sections: {
      informationCollection: {
        title: "1. 資訊收集",
        description:
          "根據您與我們互動的情況，我們可能會收集關於您的不同類型的個人資訊，包括但不限於您提供給我們的個人資訊、我們自動收集的資訊、我們從第三方獲得的資訊。我們收集這些資訊是為了向您提供更好的體驗，這些資訊有助於我們根據您的個人情況客製化相關內容，並確保增強您的個人化學習體驗。",
        subsections: {
          provided: {
            title: "1.1 您提供給我們的資訊",
            content:
              "當您直接向我們提供個人資訊時，我們會收集這些資訊，這些資訊可能包括：姓名、電子郵件地址、電話號碼、帳單地址、付款資訊、興趣愛好等。",
          },
          automatic: {
            title: "1.2 我們自動收集的資訊",
            content:
              "除了您提供给我們的個人資訊外，我們還會自動收集一些資訊，這些資訊可能包括：唯一識別碼資訊、瀏覽器類型和設定、裝置類型和設定、作業系統、行動網路資訊（包括營運商名稱和電話號碼）以及應用程式版本號；我們還會收集您的應用程式、瀏覽器和裝置與本平台進行互動的相關資訊，其中可能包括您使用本網站的具體頁面、存取日期、存取次數、在頁面上花費的時長以及您的IP位址、崩潰報告等。",
          },
          thirdParty: {
            title: "1.3 我們從第三方獲得的資訊",
            content:
              "當您透過第三方網站進行登入或者綁定第三方網站時，我們會從第三方網站接收您的個人資訊，例如：透過Facebook、X(Twitter)等社群網站帳號登入，我們將接收您來自相應社群網站的個人資訊；我們還可能從其他第三方來源接收個人資訊，包括但不限於公共資料庫和合作夥伴提供的個人資訊或匿名資訊。",
          },
        },
      },
      cookies: {
        title: "2. COOKIE",
        content:
          "Cookie是儲存在您電腦上的小型文字檔案，透過記住您的身分和偏好，為您提供更流暢的瀏覽體驗。我們使用cookie技術收集您與網站互動的相關數據。這些數據協助我們分析您的使用行為，提升網站的功能，並最佳化您的使用感受。我們所收集的資訊包括您瀏覽的頁面、在網站上停留的時長，以及您與網站不同部分的互動情況。所有收集到的數據都會被彙總並進行匿名處理，以確保您的隱私安全。如果您繼續使用我們的網站，即表示您同意我們按照本條款所述的方式使用cookie並進行數據分析。",
      },
      personalizedServices: {
        title: "3. 提供個人化服務",
        content:
          "我們利用收集的資訊分析您的學習需求和偏好為您提供個人化的服務，包括推薦安全教育課程，以及提供客製化的內容和客製化的模擬實戰操作訓練。",
      },
      updates: {
        title: "4. 本隱私政策的更新",
        content:
          "我們保留隨時更新或修改本隱私條款的權利，請定期查看本條款以了解最新內容，恕不另行通知。",
      },
      contact: {
        title: "5. 聯絡我們",
        content:
          "如果您對本隱私條款有任何疑問，請透過 defihacklabs@gmail.com 聯絡我們。",
      },
    },
  },
  challengeCompletionModal: {
    congratulations: "恭喜！",
    completed: "您已完成",
    challenge: "已通過",
    earned: "獲得",
    experiencePoints: "經驗值",
    nextChallenge: "挑戰下一關 →",
    challengeCompletion: "挑戰完成，回到挑戰列表",
    calculating: "計算執行中...",
    backToList: "返回列表",
  },
  googleSpoofedPhishing: {
    title: "谷歌釣魚郵件挑戰",
    subtitle: "學習識別冒充谷歌的電子郵件欺騙攻擊",
    scenario: {
      title: "場景",
      description:
        "您收到了一封看似來自谷歌的電子郵件，提醒您帳戶存在可疑活動。郵件要求您點擊鏈接驗證身份。",
    },
    email: {
      title: "郵件",
      subject: "安全警報",
      content:
        "我們檢測到您的谷歌帳戶存在異常活動。可能有人從新設備訪問了您的帳戶。\n\n位置：烏克蘭基輔\n時間：2025年4月10日，上午6:27 GMT+2\n設備：Windows PC\n\n如果這不是您本人操作，您的帳戶可能已被盜用。請立即驗證您的身份以保護您的帳戶。",
      action: "點擊下方按鈕驗證您的身份：",
      button: "驗證身份",
      authentication: {
        title: "郵件認證：",
        spf: "SPF：通過",
        dkim: "DKIM：通過",
        dmarc: "DMARC：通過",
      },
    },
    securityCheck: {
      title: "安全檢查",
      question1: {
        title: "這封郵件實際上是從哪個域名發送的？（檢查郵件頭）",
        placeholder: "輸入域名（例如：example.com）",
        hint: "在郵件頭中查找'Received from'或'Return-Path'",
      },
      question2: {
        title: "這是谷歌發送的合法郵件嗎？",
        option1: "是的，這是合法郵件",
        option2: "不，這是釣魚嘗試",
      },
      submitButton: "提交答案",
    },
    challengeResult: {
      success: {
        title: "正確！您已識別出釣魚嘗試。",
        description:
          "這封郵件被偽造成看似來自谷歌，但實際上是從privateemail.com發送的。儘管通過了SPF、DKIM和DMARC檢查，但這封郵件是欺詐性的。",
      },
      failure: {
        title: "不正確。請重試！",
        tryAgain: "重試",
      },
    },
    fakeSupport: {
      urlBar:
        "sites.google.com/u/0/d/1XMlxkFiq54WpH2tKqay2EPnhN0Ukovet/preview",
      title: "支援案例",
      tabs: {
        allCases: "所有案例",
        open: "未處理",
        inProgress: "處理中",
        resolved: "已解決",
        closed: "已關閉",
      },
      searchPlaceholder: "搜索支援案例",
      caseDetails: {
        title: "法律調查支援",
        status: {
          inProgress: "處理中",
          urgent: "緊急",
        },
        reference: "內部參考 #GS-17-000918456 • 於2025年4月9日開啟",
        description1:
          "您的法律請求目前正在審核中。此事項需要額外的文檔進行處理。",
        description2:
          "我們的團隊已收到您提交的文檔和支持材料。正在進行審核以確定下一步。",
        documentReview: {
          title: "法律文檔審核 - 進行中",
          estimatedCompletion: "預計完成時間：2025年4月11日",
        },
        buttons: {
          uploadDocuments: "上傳額外文檔",
          viewCase: "查看案例",
        },
      },
      footer: {
        privacy: "隱私",
        terms: "條款",
        help: "幫助",
        about: "關於",
        copyright: "© 2025 谷歌有限責任公司",
      },
    },
    challengeAnalysis: {
      title: "挑戰分析",
      keyFindings: {
        title: "關鍵發現",
        points: [
          "郵件標頭顯示訊息經過 privateemail.com 中繼後才到達最終目的地。",
          "儘管有看似合法的認證結果（DKIM、SPF、DMARC），郵件路由路徑顯示可疑的中繼點。",
          "偽造的 Google 支援頁面託管在 sites.google.com，這是釣魚者常用的策略，使 URL 看起來合法。",
        ],
      },
      securityLessons: {
        title: "重要安全經驗",
        lessons: [
          "始終檢查郵件標頭以追蹤郵件的實際路徑，而不僅僅是認證結果。",
          "對任何要求通過第三方域名驗證身份或帳戶安全的請求保持警惕。",
          "Google 永遠不會要求您通過使用者建立的 Sites 頁面驗證帳戶。",
          "即使郵件通過了 DKIM/SPF/DMARC 檢查，它仍可能是複雜釣魚攻擊的一部分。",
        ],
      },
      preventionTips: {
        title: "預防建議",
        tips: [
          "始終直接通過 google.com 存取 Google 服務，而不是通過郵件中的連結。",
          "在您的帳戶上啟用雙重認證。",
          "向您組織的安全團隊報告可疑郵件。",
          "如有疑問，請通過官方管道聯絡 Google 支援。",
        ],
      },
    },
  },
  transactionSimulationSpoofing: {
    title: "交易模擬欺騙挑戰",
    description: "本頁展示攻擊者如何利用交易模擬與執行之間的時間差進行攻擊",
    warning: "僅供教育目的 - 請在實際交易中保持謹慎",

    scenario: {
      title: '情境："免費NFT領取"陷阱',
      description1:
        '想像一下，你收到一則訊息聲稱你有資格獲得限量版的"早期支持者NFT"。網站看起來很專業，聲稱你只需支付極小額的0.00001 ETH加上燃料費就能領取這個NFT。',
      description2:
        '當你連接錢包並點擊"領取"按鈕時，你的錢包顯示交易模擬，表明這只是一個需要最低費用的簡單領取操作。然而，合約中包含可在執行期間竊取你資產的惡意代碼。',
    },

    buttons: {
      claimNFT: "領取NFT",
    },

    howItWorks: {
      title: "運作原理",
      step1:
        "交易模擬是現代Web3錢包中的一項功能，允許用戶在交易執行前預覽交易結果。",
      step2:
        "然而，模擬與實際執行之間存在時間差，惡意行為者可以利用這一點來欺騙用戶。",
      step3:
        "攻擊者可以在模擬後但執行前改變合約狀態，導致實際交易結果與模擬顯示的完全不同。",
    },

    exploitation: {
      title: "攻擊機制",
      description:
        "核心漏洞在於交易模擬與執行之間的時間差。惡意行為者已開發出釣魚網站，可以在這個關鍵時間窗口內操縱鏈上狀態，導致災難性後果。",
      steps: [
        '攻擊者創建看似合法的DeFi網站，提供"免費空投"或其他誘人獎勵。',
        "當用戶嘗試領取獎勵時，網站提示他們簽署交易。",
        "用戶的錢包顯示交易模擬，表明這只是一個簡單的領取操作，只需花費少量ETH作為燃料費。",
        "然而，在用戶確認後但交易被挖礦前，攻擊者的後端迅速改變合約狀態。",
        "當交易最終執行時，它實際上將用戶錢包中的所有資產轉移到攻擊者的地址。",
      ],
    },

    realWorldExamples: {
      title: "真實案例",
      description:
        '2025年，多位用戶在與看似合法的DeFi平台互動時損失了數百萬美元。這些平台使用交易模擬欺騙技術，讓用戶相信他們在執行安全交易，但實際上卻在授權完全不同的操作。更多詳情，請參閱 <a href="https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Transaction Simulation Spoofing: A New Threat in Web3</a>。',
    },

    protection: {
      title: "保護指南",
      description: "為了保護自己免受這些複雜攻擊，請遵循以下指南：",
      guidelines: [
        "徹底檢查交易細節 - 不要僅依靠模擬預覽",
        "獨立驗證所有合約互動 - 使用區塊鏈瀏覽器檢查合約代碼和互動",
        '對"免費領取"優惠保持懷疑 - 如果聽起來好得難以置信，可能就是陷阱',
        "堅持使用受信任且經驗證的dApp - 使用官方網站並仔細檢查URL",
        "考慮使用安全工具 - 如ScamSniffer等擴展可幫助識別釣魚嘗試",
        "檢查交易時間戳 - 如果模擬結果超過幾秒鐘，請保持警惕",
      ],
    },

    quiz: {
      title: "知識檢查",
      question: "是什麼使交易模擬欺騙攻擊成為可能？",
      options: {
        incorrect1: "錢包軟體中的智能合約漏洞",
        correct: "交易模擬與執行之間的時間差",
        incorrect2: "竊取私鑰的釣魚郵件",
      },
      correctMessage:
        "正確！交易模擬欺騙利用交易被模擬和實際執行之間的時間差。在這個間隙中，攻擊者可以修改合約狀態，導致實際交易結果與模擬中顯示的不同。",
      incorrect1Message:
        "不太正確。雖然錢包軟體漏洞可能在其他攻擊中被利用，但交易模擬欺騙特別利用的是交易模擬與執行之間的時間差。",
      incorrect2Message:
        "不太正確。竊取私鑰的釣魚郵件是另一種攻擊類型。交易模擬欺騙特別利用的是交易模擬與執行之間的時間差。",
    },

    transactionReview: {
      title: "檢視模擬交易",
      nftName: "MetaApes俱樂部NFT領取",
      website: "earlyapes.xyz",
      simulationTitle: "交易模擬",
      secondsAgo: "秒前",
      function: "功能：",
      receive: "你將獲得：",
      fee: "費用：",
      gasFee: "燃料費：",
      nftAmount: "1個早期支持者NFT",
      feeAmount: "0.00001 ETH ($0.02)",
      gasFeeAmount: "約0.002 ETH ($3.50)",
      note: "注意：",
      noteDescription:
        "此模擬基於當前合約狀態。如果合約狀態在執行前發生變化，實際結果可能會有所不同。",
    },

    metamask: {
      signatureRequest: "簽名請求",
      website: "網站：",
      action: "行動：",
      claimNFT: "領取NFT",
      fee: "費用：",
      gasFee: "燃料費：",
      authorizeMessage: "簽署此訊息，即授權從你的錢包轉移1 ETH。",
      processingTransaction: "處理交易中...",
      pleaseWait: "請等待交易處理完成。",
      resultTitle: "交易已執行！",
      warningTitle: "警告：意外結果",
      warningDesc: "交易結果與模擬中顯示的不同。",
      expected: "預期結果（模擬）",
      expectedReceive: "獲得：1個早期支持者NFT",
      expectedFee: "費用：0.00001 ETH ($0.02)",
      expectedGasFee: "燃料費：0.002 ETH ($3.50)",
      actual: "實際結果（執行）",
      actualReceive: "獲得：無",
      actualFee: "費用：1 ETH ($1,750)",
      actualGasFee: "燃料費：0.002 ETH ($3.50)",
      whatHappened: "發生了什麼？",
      explanation1:
        "這是一次交易模擬欺騙攻擊。在模擬和執行之間，攻擊者改變了合約狀態，導致結果與模擬中顯示的完全不同。",
      explanation2:
        "在這種情況下，交易實際上授權攻擊者花費你的所有代幣，而不是領取NFT。",
    },

    educationalMessage:
      "這是一個安全的教育模擬，幫助你了解交易模擬欺騙攻擊。不涉及任何風險，請放心繼續模擬以了解更多關於這種攻擊方法的信息。",
  },
  governanceProposalPhishing: {
    title: "DAO 治理提案投票挑戰",
    subtitle: "學習識別和避免惡意治理提案釣魚攻擊",
    warning: "僅供教育目的 - 這是惄意治理提案的模擬",
    proposalTitle: "緊急安全提案 #42",
    proposalDescriptionLabel: "提案描述",
    proposalDescription:
      "為了應對最近發現的安全漏洞，我們需要緊急更新協議的安全參數。這將保護所有用戶的資金安全。",
    proposerLabel: "提案者",
    proposer: "核心開發團隊",
    deadlineLabel: "截止時間",
    deadline: "24小時內",
    buttonVoteFor: "投票支持",
    buttonVoteAgainst: "投票反對",
    walletStatus: {
      pleaseConnect: "請連接您的錢包",
      connected: "錢包已連接！現在您可以投票。",
      connectionError: "連接錢包時出錯",
      installMetaMask: "請安裝 MetaMask 錢包",
      connectFirst: "請先連接您的錢包",
    },
    challengeResult: {
      success: {
        title: "挑戰成功！",
        description:
          "恭喜！您成功識別並拒絕了釣魚嘗試。在真實的 DAO 治理提案中，攻擊者可能會嘗試誘導您簽署惡意消息，從而獲取您的資產控制權。",
      },
      failure: {
        title: "挑戰失敗！",
        description:
          "您簽署了惡意消息！在真實情況下，這可能會導致您的資產被盜。攻擊者通常會偽裝成緊急治理提案，誘導用戶簽署看似無害但實際上是授權轉移資產的消息。",
      },
    },
    protectionTips: {
      title: "保護提示：",
      tips: [
        "始終仔細閱讀您被要求簽署的消息內容。",
        "對緊急或時間敏感的提案保持警惕，這是常見的緊迫感策略。",
        "通過官方渠道驗證治理提案的真實性。",
        "使用支持消息簽名預覽的錢包，如 MetaMask。",
      ],
    },
    buttons: {
      retryChallenge: "重試挑戰",
      connectWallet: "連接錢包",
      backToChallenges: "← 返回挑戰",
    },
    phishingAnalysis: {
      warning: "警告: 這是一個釣魚嘗試！",
      voteMessage: "這個投票實際上要求您簽署以下訊息：",
      signatureConsequence:
        "如果您簽署了這個訊息，攻擊者可以利用您的簽名來轉移您的資產。",
      alwaysRead: "在真實情況下，永遠仔細閱讀您被要求簽署的訊息內容！",
      title: "釣魚手法解析",
      description: "這次挑戰模擬了一個常見的 DAO 治理提案釣魚攻擊：",
      techniques: [
        "攻擊者偽裝成合法的 DAO 治理平台發送投票請求",
        "投票看似是關於一個緊急安全提案，營造緊迫感",
        "實際上，用戶被要求簽署的訊息與顯示的提案內容完全不同",
        "如果用戶簽署了訊息，攻擊者可以使用該簽名來盜取資產",
      ],
      protectionTitle: "保護措施：",
      protectionMeasures: [
        "始終仔細閱讀 MetaMask 中顯示的實際簽名訊息內容",
        "確認簽名請求來自可信任的來源",
        "對於緊急或時間敏感的請求保持警惕",
        "使用專門的治理平台（如 Snapshot）進行 DAO 投票",
      ],
      whatWentWrong: "出了什麼問題？",
      signedMessage: "您簽署了一個惡意訊息，內容為：",
      attackerCould: "在真實場景中，攻擊者可以使用此簽名來竊取您的資產。",
    },
  },
  // 新增高級治理釣魚攻擊的內容
  advancedGovernancePhishing: {
    title: "高級治理釣魚攻擊",
    subtitle: "挑戰：識別複雜的治理釣魚技術",
    warning: "僅供教育目的 - 釣魚模擬",
    description: "此挑戰模擬針對 DeFi 治理参與者的真實釣魚攻擊",
    scenario: {
      title: "場景描述",
      description:
        "您是 QuantumDAO 協議中擁有重要投票權的治理参與者。您收到一封關於需要立即關注的緊急治理提案的電子郵件通知。該電子郵件包含一個看似是 QuantumDAO 治理門戶的連結。",
    },
    warning_detail:
      "警告：這是一個釣魚模擬場景。以下界面旨在展示針對 DeFi 治理参與者的複雜釣魚技術。不會執行任何真實交易。",
    note: "⚠️ 注意：這是一個釣魚模擬挑戰。請仔細觀察並識別潜在的釣魚技術。",
    urlBar: {
      domainWarning: "注意：這個域名使用了希臘字母 α 來冒充字母 a",
    },
    governance: {
      logo: "QuantumDAO 治理",
      tabs: {
        dashboard: "儀表板",
        proposals: "提案",
        delegate: "委託",
        forum: "論壇",
      },
      connectWallet: "連接錢包",
      proposal: {
        title: "QIP-137：資金庫管理緊急安全更新",
        id: "ID：0x7a9d...e3f2",
        status: "進行中",
        description:
          "此緊急提案解決了 QuantumDAO 資金庫管理系統中的一個關鍵安全漏洞。該漏洞可能允許未經授權訪問資金庫資金。此提案通過將資金庫管理合約更新為新的審核版本來實施安全補丁。",
        stats: {
          for: "贊成",
          against: "反對",
          abstain: "棄權",
          required: "所需比例",
          remaining: "剩餘時間",
        },
        buttons: {
          voteFor: "投票贊成",
          voteAgainst: "投票反對",
          abstain: "棄權",
        },
      },
      pastProposal: {
        title: "QIP-136：協議費用調整",
        id: "ID：0x3b2c...9f7a",
        status: "已通過",
        description:
          "此提案調整協議費用結構，以優化收入生成，同時為用戶維持具競爭力的費率。費用調整將增加協議資金庫的可持續性。",
      },
    },
    walletPrompt: {
      message1:
        "要對此提案進行投票，您需要簽署一條確認您投票的訊息。這是驗證您擁有治理代幣的標準程序。",
      message2: "簽署前請仔細檢查交易詳情。",
      signButton: "簽署交易",
    },
    metamaskPopup: {
      title: "簽名請求",
      countdown: "細意：提案投票將在以下時間內結束",
      gasOptimization:
        "燃料費優化：使用批量交易可節省高達 45% 的燃料費。點擊簽署以使用優化交易。",
      rejectButton: "拒絕",
      signButton: "簽署",
      voteTypes: {
        for: "赞成",
        against: "反對",
        abstain: "棄权",
      },
      signatureMessage:
        "簽署消息以確認您對 QIP-157：協議升級和資金安全的{voteType}投票\n\nNonce: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e\n過期時間: 1小時\n投票類型: {voteType}\n\n交易數據:\n{transactionData}\n\n函數調用:\n{maliciousFunction}({voteValue}, 0x157)\n\n警告：簽署此消息即表示您確認對此治理提案的投票。",
    },
    challenge: {
      title: "您的挑戰",
      description:
        "仔細檢查上面的 QuantumDAO 治理界面。您能識別出這個複雜攻擊中使用的釣魚指標和技術嗎？",
      instruction:
        "點擊「連接錢包」按鈕繼續模擬，測試您識別治理釣魚技術的能力。",
      questions: {
        question1: {
          title: "問題 1：這個模擬展示了哪種釣魚技術？",
          options: [
            "標準的 URL 欺騙，使用相似域名",
            "通過虛假緊急情況和關鍵漏洞聲明進行社交工程",
            "惡意交易簽名，實際上是轉移治理代幣而非投票",
            "以上所有選項",
          ],
        },
        question2: {
          title: "問題 2：方法選擇器 0x0900f010 代表什麼？",
          options: [
            "vote(bool,uint256)",
            "upgrade(bool,uint256)",
            "approveAndCall(address,uint256)",
            "無法確定，需要檢查合約 ABI",
          ],
        },
        submitButton: "提交答案",
      },
      success: {
        title: "正確！此模擬展示了多種釣魚技術：",
        points: [
          "使用相似域名的 URL 欺騙",
          "通過「緊急」提案製造虛假緊急感",
          "利用對治理流程的信任",
          "請求惡意交易簽名，實際上會轉移您的代幣或授予權限",
        ],
        conclusion:
          "在真實的治理系統中，請始終通過仔細檢查 URL、通過官方渠道確認提案，並使用能夠準確顯示您正在簽署內容的硬件錢包來驗證平台的真實性。",
        congratulation: "挑戰成功！您已學會如何識別複雜的治理釣魚攻擊。",
      },
      failure: {
        title: "答案不太對。請再試一次，仔細查看此模擬中使用的釣魚技術。",
      },
    },
    educational: {
      title: "教育內容：治理釣魚攻擊",
      description:
        "隨著 DeFi 協議採用更複雜的治理機制，治理釣魚攻擊變得越來越複雜。這些攻擊專門針對通常控制著重要投票權和資產的治理參與者。",
      techniques: {
        title: "常見的治理釣魚技術：",
        list: [
          "<strong>虛假緊急感：</strong>製造緊急感，促使用戶在未適當驗證的情況下倉促做出決定。",
          "<strong>仿冒界面：</strong>創建治理平台的精確複製品，但有難以察覺的細微差別。",
          "<strong>惡意簽名請求：</strong>釣魚網站不是請求投票簽名，而是請求授權代幣轉移或批准的簽名。",
          "<strong>虛假提案：</strong>創建看似合法的令人信服但虛假的治理提案。",
        ],
      },
      protection: {
        title: "如何保護自己：",
        list: [
          "始終仔細驗證治理平台的 URL。",
          "通過多個官方渠道（Discord、Twitter、官方論壇）交叉檢查重要提案。",
          "使用能夠準確顯示您正在簽署內容的硬件錢包。",
          "對聲稱「緊急」狀態但未經團隊成員驗證的提案保持警惕。",
          "檢查您正在交互的合約地址，與已知的官方地址進行比對。",
        ],
      },
      realWorldExample:
        "2025年，幾個主要的 DeFi 協議遭遇了治理釣魚攻擊，導致重大損失。這些攻擊利用了用戶對治理系統的信任以及投票機制的複雜性。",
    },
    backButton: "← 返回挑戰",
  },
  discordBookmarkAttack: {
    title: "Discord 書籤攻擊模擬",
    subtitle: "學習識別和避免惡意 Discord 書籤攻擊",
    warning: "僅供教育目的 - 這是惡意書籤攻擊的模擬",
    description: "本頁面模擬攻擊者如何通過惡意書籤獲取 Discord 權限。",
    verificationTitle: "Discord 驗證",
    verificationDescription:
      "將下方按鈕拖放到打開的 Discord 窗口中以驗證您的賬戶。\n您也可以將此按鈕中包含的鏈接添加到書籤，以便在 Discord 上點擊書籤來驗證您的賬戶。",
    dragButton: "拖動我",
    bookmarkAttackExplanation: {
      title: "書籤攻擊如何運作",
      description:
        "書籤攻擊涉及欺騙用戶將惡意 JavaScript 代碼添加到他們的瀏覽器書籤中。當在 Discord 上點擊這些書籤時，它們可以執行有害代碼，竊取敏感信息或控制帳戶。",
    },
    warningTitle: "檢測到惡意書籤！",
    warningDescription:
      "您剛剛遇到了一個基於書籤的釣魚攻擊。您嘗試拖動的按鈕包含惡意 JavaScript 代碼！",
    learnMore: "了解如何保持安全",
    successTitle: "挑戰完成！",
    successDescription: "恭喜！您已成功識別出 Discord 書籤攻擊。",
    howItWorks: "攻擊原理：",
    steps: [
      "攻擊者創建帶有可拖動按鈕的虛假驗證頁面",
      "按鈕包含可竊取用戶令牌的惡意 JavaScript 代碼",
      "當作為書籤使用或拖入 Discord 時，代碼可能會危害您的賬戶",
    ],
    protectionTitle: "如何保護自己：",
    protectionTips: [
      "切勿將不受信任網站的按鈕或書籤拖入 Discord",
      "對任何需要拖動元素的驗證過程保持警惕",
      "僅使用官方的 Discord 驗證方法",
      "保持 Discord 客戶端更新以獲得最新的安全功能",
    ],
    attackScenario: {
      title: "🎭 攻擊場景：加密貨幣贈品",
      description:
        "以下是在加密貨幣相關的 Discord 伺服器中典型攻擊的展開方式：",
      steps: [
        {
          title: "初次接觸",
          description:
            "一個新用戶加入熱門加密貨幣 Discord 伺服器，並開始與社區互動，在幾天內建立信任。",
        },
        {
          title: "誘餌",
          description:
            "攻擊者宣布他們正在為新的 NFT 項目或加密貨幣舉辦贈品活動，並分享一個看起來合法的「驗證網站」鏈接。",
        },
        {
          title: "陷阱",
          description:
            "驗證網站指示用戶將按鈕拖到書籤欄或直接拖到 Discord 中，以「驗證他們的錢包」或「註冊贈品活動」。",
        },
        {
          title: "攻擊",
          description:
            "當受害者在 Discord 上點擊書籤時，惡意 JavaScript 執行，竊取他們的 Discord 令牌，使攻擊者能夠完全訪問他們的帳戶。",
        },
        {
          title: "後果",
          description:
            "攻擊者使用被入侵的帳戶進一步傳播詐騙，針對受害者的朋友和社區，或通過社交工程使用該帳戶竊取加密貨幣。",
        },
      ],
    },
    commonAttackScenario: {
      title: "常見攻擊場景：虛假驗證",
      description:
        "這種攻擊的常見版本是向用戶展示一個虛假的「Discord 驗證」頁面，其中包含一個標有「拖動我」的按鈕，用戶被指示將其拖入打開的 Discord 窗口或書籤。當使用該書籤時，它會執行惡意 JavaScript，可以竊取令牌並危害賬戶。",
      warning:
        "警告：切勿將不受信任網站上的按鈕或鏈接拖入 Discord 或您的書籤欄！",
    },
    recentIncidents: {
      title: "近期事件",
      description:
        "在過去幾個月中，幾個主要的加密貨幣和 NFT Discord 社區成為了這些攻擊的目標。2023年1月，一次書籤攻擊入侵了一個熱門 NFT 項目 Discord 中的多個管理員帳戶，當用戶被引導到虛假的鑄造網站時，導致超過20萬美元的資產被竊取。",
    },
    backToHome: "← 返回挑戰",
    challengeCompletion: {
      title: "完成挑戰",
      successMessage: "🎉 恭喜！您已成功完成挑戰！🎉",
      errorMessage: "答案不正確，請重試。",
      flagLabel: "請輸入Flag：",
      flagPlaceholder: "Flag格式：CHALLENGE_NAME_YEAR",
      question1: {
        label: "問題1：書籤攻擊的主要目的是什麼？",
        options: [
          "請選擇...",
          "竊取用戶的Discord令牌",
          "使瀏覽器崩潰",
          "安裝病毒",
        ],
      },
      question2: {
        label: "問題2：如何保護自己免受此類攻擊？",
        options: [
          "請選擇...",
          "永遠不要將不明來源的按鈕拖到書籤欄",
          "安裝防毒軟件",
          "使用無痕模式",
        ],
      },
      submitButton: "提交",
    },
  },
  permitPhishing2: {
    title: "Uniswap Permit2 釣魚挑戰",
    subtitle: "學習識別和避免惡意的 Permit2 授權請求",
    warning: "僅供教育目的 - 學習如何保護自己",
    networkStatus: "當前網絡：",
    walletAddress: "錢包地址：",
    introText:
      "詐騙者正在利用 Uniswap 的 Permit2 授權系統來竊取不知情用戶的代幣。這個挑戰將教您如何識別並保護自己免受這些複雜的釣魚攻擊。",
    introText2:
      "在這個模擬中，您將體驗詐騙者如何誘騙用戶簽署惡意的 Permit2 授權，以及為什麼僅僅撤銷代幣授權是不足以保證安全的。",
    attackPoints: {
      point1: "請求授予無限代幣使用權限的 Permit2 簽名",
      point2: "使用看似合法的界面使請求看起來安全",
      point3: "利用用戶不仔細審查簽名請求的習慣",
    },
    attackWarning:
      "始終仔細審查 Permit2 簽名請求，只對來自可信來源的請求進行簽名！",
    signatureDetails: {
      warning: "⚠️ 你剛剛簽署了一個危險的 Permit2 授權！",
      title: "簽名詳情：",
      permissionNote:
        "你已經授予 {spender} 無限制使用你的 USDC 代幣的權限，直到 {deadline}。",
      success: "簽名成功。在真實的攻擊中，你的代幣將面臨風險！",
    },
    tokenBalances: {
      title: "代幣餘額",
      weth: "WETH",
      pepe: "PEPE",
      usdt: "USDT",
    },
    transactions: {
      title: "最近交易",
      hash: "交易哈希",
      method: "方法",
      age: "時間",
      from: "發送方",
      to: "接收方",
      value: "數量",
      approve: "授權",
      dayAgo: "天前",
      unlimited: "無限制",
    },
    approvals: {
      title: "代幣授權",
      permit2Contract: "Permit2 合約",
      permit2Description:
        "Permit2 是由 Uniswap 開發的代幣授權合約，可以實現更高效和安全的代幣授權。它需要對每個代幣進行一次性授權，之後由 Permit2 在內部管理權限。",
      revoke: "撤銷",
    },
    swapTokens: "交換代幣",
    phishingAlert: {
      title: "檢測到釣魚嘗試！",
      description:
        "您剛剛遇到了一個 Permit2 釣魚攻擊。您收到的簽名請求是惡意的！",
      whatHappened: "以下是發生的情況：",
      points: [
        "您將您的代幣授權給了合法的 Permit2 合約",
        "釣魚者請求您在 Permit2 內部進行許可簽名",
        "這將允許他們使用 Permit2 的內部權限轉移您的代幣",
        "僅僅撤銷代幣對 Permit2 的授權是不夠的",
      ],
      keyIssue:
        "即使您撤銷了代幣對 Permit2 的授權，Permit2 內部的權限仍然有效！",
      learnMore: "了解如何保持安全",
    },
    explanation: {
      title: "了解 Permit2 釣魚",
      description: "Permit2 的工作方式與傳統代幣授權不同：",
      models: {
        traditional: "傳統模式：您直接將代幣授權給特定合約（例如 Uniswap）",
        permit2:
          "Permit2 模式：您將代幣授權給 Permit2 合約，然後由 Permit2 在內部管理權限",
      },
      twoLayerSystem: "這創建了一個兩層授權系統：",
      layers: [
        "代幣對 Permit2 的授權（在區塊鏈瀏覽器中可見）",
        "Permit2 內部的權限（在標準區塊鏈瀏覽器中不可見）",
      ],
      vulnerability:
        "漏洞：如果您只撤銷了代幣對 Permit2 的授權，但沒有撤銷內部權限，一旦您再次授權 Permit2，攻擊者仍然可以竊取您的代幣。",
      protectionTitle: "如何保護自己：",
      protectionSteps: [
        "使用像 ScamSniffer 的 Permit2 授權管理這樣的工具來查看和撤銷 Permit2 內部權限",
        "對簽名請求保持謹慎，特別是那些請求無限制數量的請求",
        "驗證簽名請求中的接收者地址",
        "使用顯示詳細簽名信息的硬件錢包",
      ],
      completeChallenge: "完成挑戰",
    },
    quiz: {
      pleaseSelect: "選擇答案",
      title: "完成挑戰",
      description: "要完成此挑戰，請識別正確的答案：",
      question1: {
        text: "如果您撤銷了代幣對 Permit2 的授權，內部權限會發生什麼變化？",
        options: [
          "它們仍然有效，如果您再次授權 Permit2，可能會被利用",
          "它們也會自動被撤銷",
          "它們會在 24 小時後過期",
        ],
      },
      question2: {
        text: "如何管理 Permit2 內部授權？",
        options: [
          "通過 Etherscan 的代幣授權頁面",
          "一旦授權，它們就無法管理",
          "使用專門的工具，如 ScamSniffer 的 Permit2 授權管理",
        ],
      },
      verifyAnswers: "驗證答案",
    },
    success: {
      title: "挑戰完成！",
      description: "很好地識別了 Permit2 釣魚攻擊！以下是如何保護自己：",
      protectionTips: [
        "始終仔細驗證簽名請求，特別是那些請求無限制數量的請求",
        "使用專門的工具管理 Permit2 內部授權",
        "對無限制授權和不熟悉的接收者地址保持警惕",
        "考慮使用顯示詳細簽名信息的硬件錢包",
      ],
      returnButton: "返回挑戰列表",
    },
    failure: {
      title: "挑戰失敗, 請再試一次",
    },
  },
  addressSuffixPhishing: {
    title: "地址後綴釣魚挑戰",
    subtitle: "你能在相似的地址中識別出你自己的錢包地址嗎？",
    warning: "僅供教育目的 - 學習如何保護自己",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    step1Title: "步驟 1：連接你的錢包",
    connectWallet: "連接錢包",
    step2Title: "步驟 2：找出你的錢包地址",
    step2Description:
      "以下是 5 個看起來相似的地址。只有一個是你的實際錢包地址。選擇正確的地址以完成挑戰：",
    selectThisAddress: "選擇此地址",
    resultTitle: "挑戰結果",
    successMessage: "🎉 恭喜！你成功識別出了你的真實錢包地址！",
    failureMessage: "❌ 錯誤！這不是你的真實錢包地址。請重試。",
    protectionTitle: "如何保護自己：",
    protectionTips: [
      "始終驗證完整地址，而不僅僅是開頭和結尾",
      "警惕看起來與你之前交互過的地址相似的地址",
      "使用錢包的地址簿功能標記可信地址",
      "考慮使用帶有地址驗證功能的硬件錢包",
      "複製粘貼地址時要仔細核對",
    ],
    backToHome: "← 返回挑戰",
  },
  blindSignaturePhishing: {
    title: "盲簽名釣魚攻擊",
    subtitle: "本頁面演示釣魚網站如何欺騙您簽署危險的消息！",
    warning: "僅供教育目的 - 請謹慎處理真實簽名",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    step2Title: "簽名方法",
    signatureMethodDescription:
      "選擇以下簽名方法之一，了解釣魚攻擊如何利用每種方法：",
    method1: {
      title: "方法 1: eth_sign (傳統，危險)",
      description:
        "eth_sign 是最早的簽名方法之一，但也是最危險的。它允許簽署任何數據，沒有任何前綴或保護措施。",
      deprecatedNote:
        "在許多錢包像是 MetaMask, Safe 等，eth_sign 已經是棄用的簽名方法，因為它太危險了。",
      button: "使用 eth_sign 簽名",
      signedWarning:
        "您剛剛使用了危險的 eth_sign 方法簽名！這可能會導致您的資產被盜。",
      cancelSuccess: "做得好！您拒絕了危險的簽名請求。",
      learnMore: "了解更多...",
      cancel: "Cancel",
      sign: "Sign",
    },
    method2: {
      title: "方法 2: personal_sign (標準消息簽名)",
      description:
        "此方法添加前綴使其更安全，但如果您不閱讀簽名內容，仍然可能危險。",
      button: "使用 personal_sign 簽名",
      hashButton: "使用 personal_sign 簽名 (哈希)",
      message: "我同意領取 1000 個 DeFiHackLabs 代幣的條款和條件。",
      signedWarning: "您剛剛簽名了一個可能危險的消息！請始終仔細閱讀簽名內容。",
      hashSignedWarning: "您剛剛簽名了一個哈希值！這可能是一個危險的操作。",
      cancelSuccess: "做得好！您拒絕了可疑的簽名請求。",
    },
    method3: {
      title: "方法 3: signTypedData (EIP-712)",
      description:
        "此方法結構更清晰，更安全，但如果您不驗證合約和參數，仍然有風險。",
      button: "使用 signTypedData 簽名",
      signedWarning: "您剛剛簽名了一個結構化數據！請確保您理解所有參數。",
      cancelSuccess: "做得好！您拒絕了未經驗證的結構化數據簽名。",
      domain: {
        name: "測試域名",
      },
      value: {
        name: "測試用戶",
      },
    },
    metamaskWarning:
      "簽署此消息可能會產生危險的副作用。只應該對完全信任的網站簽署消息。這種危險的方法將在未來版本中移除。",
    challengeCompleted: "🎉 挑戰完成！了解盲簽名釣魚",
  },
  seaportZeroOrderPhishing: {
    title: "Seaport 零訂單釣魚攻擊",
    subtitle: "挑戰：識別 Seaport 協議中的零價格釣魚訂單",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioDescription:
      "您是一位 NFT 收藏家，擁有一個價值不菲的 Bored Ape Yacht Club NFT。您收到一個通知，有人提出以 100 ETH 的高價購買您的 NFT。您點擊鏈接後，看到以下訂單：",
    seaportOrderDetails: "Seaport 訂單詳情",
    yourTask:
      "分析上面的 Seaport 訂單，判斷這是一個合法的購買訂單還是試圖竊取您 NFT 的釣魚訂單。",
    acceptOffer: "接受報價",
    pleaseSelect: "-- 請選擇 --",
    question1: "1. 這是一個釣魚訂單嗎？",
    yesPhishing: "是的，這是釣魚訂單",
    noLegitimate: "不是，這是合法訂單",
    question2: "2. 如果您接受這個訂單會發生什麼？",
    receive100ETH: "我會收到 100 ETH 並轉移我的 NFT",
    transferForFree: "我會免費轉移我的 NFT，沒有收到任何 ETH",
    nothingHappens: "什麼都不會發生，訂單無效",
    question3: "3. 這個訂單有什麼問題？",
    invalidSignature: "簽名無效",
    zeroPrice: "價格被設置為 0 ETH",
    incorrectToken: "代幣地址不正確",
    noIssue: "沒有問題，訂單是合法的",
    submitAnswers: "提交答案",
    explanationTitle: "解釋：Seaport 零訂單釣魚攻擊",
    explanationContent:
      "這是一個典型的 Seaport 零訂單釣魚攻擊。攻擊者創建了一個看似提供高價（100 ETH）購買您 NFT 的訂單，但實際上訂單中的對價被設置為 0 ETH。",
    considerationExample:
      '注意 startAmount 和 endAmount 都被設置為"0"，這意味著如果您接受這個訂單，您將免費贈送您的 NFT，而不會收到任何 ETH 作為回報。',
    protectionTitle: "如何保護自己：",
    protectionTips: [
      "始終仔細檢查 Seaport 訂單中的對價部分",
      "驗證 startAmount 和 endAmount 是否與顯示的價格相符",
      "使用具有內置保護功能的可信 NFT 交易市場",
      "不要點擊來自未知來源的鏈接",
      "如果價格看起來好得不真實，那可能確實如此",
    ],
    keyIssueTitle: "在這個釣魚訂單中，關鍵問題是：",
    alertError:
      "⚠️ 您剛剛簽名了一個零價格訂單！您的 NFT 將被轉移，而您不會收到任何 ETH。這是一個釣魚攻擊的示例。",
    errorMessage: "❌ 答案不完全正確，請查看下方解釋！",
    successMessage: "🎉 做得好！您成功識別出了釣魚訂單。",
    comparisonTitle: "合法訂單與釣魚訂單的比較：",
    comparisonTable: {
      parameter: "參數",
      legitimate: "合法訂單",
      phishing: "釣魚訂單（當前案例）",
      offer: {
        legitimate: "買方提供的 ETH",
        phishing: "賣方的 NFT",
      },
      consideration: {
        legitimate: "賣方的 NFT",
        phishing: "0 ETH",
      },
      startEndAmount: {
        legitimate: "與顯示價格相符（如 100 ETH）",
        phishing: "設置為 0",
      },
    },
  },
  zeroTransferScam: {
    title: "TransferFrom 零轉賬釣魚挑戰",
    subtitle: "學習識別和避免零值轉賬詐騙",
    warning: "僅供教育目的 - 這是一個零值轉賬釣魚攻擊的模擬",
    yourWallet: "您的錢包",
    address: "地址",
    completeChallenge: "完成挑戰",
    realAddressLabel: "合法錢包地址：",
    realAddressPlaceholder: "輸入真實的錢包地址",
    fakeAddressLabel: "虛假/偽造地址：",
    fakeAddressPlaceholder: "輸入偽造的地址",
    submitButton: "驗證地址",
    successTitle: "🎉 挑戰完成！了解零轉賬詐騙",
    successDescription:
      "詐騙者經常使用零值轉賬來創建與偽造地址的虛假交易歷史。",
    protectionTitle: "如何保護自己：",
    protectionTips: [
      "始終驗證完整地址，而不僅僅是開頭和結尾",
      "警惕看起來與您之前交互過的地址相似的地址",
      "仔細檢查交易歷史，包括零值轉賬",
      "使用錢包的地址簿功能標記可信地址",
      "考慮使用帶有地址驗證功能的硬件錢包",
    ],
    failureTitle: "❌ 地址不正確，請重試！",
    failureDescription: "提示：仔細查看交易歷史並比較地址。",
    backToHome: "← 返回挑戰",
    transactionDetails: {
      title: "交易詳情",
      hash: "交易哈希",
      method: "方法",
      age: "時間",
      from: "發送方",
      to: "接收方",
      amount: "數量",
      out: "轉出",
      in: "轉入",
      gasUse: "Gas 使用量",
      phishingAlert: {
        title: "檢測到釣魚嘗試！",
        description: "這些零值轉賬是詐騙者常用的策略，用於：",
        tactics: [
          "創建看起來與您交互過的合法地址相似的欺騙性地址",
          "與這些假地址建立交易歷史",
          "稍後在釣魚嘗試中使用這些地址，希望您將它們誤認為合法地址",
        ],
        addressComparison: "注意這些地址看起來多麼相似？這是故意的！",
        techniques: "詐騙者使用各種技術使地址看起來相似：",
        techniquesList: [
          "在開頭和結尾使用相似的字符模式",
          "利用大多數錢包在中間截斷地址的事實",
          "利用人類傾向於只檢查前幾個和後幾個字符的習慣",
        ],
        note: "注意：Etherscan 在設置中預設開啟了「Zero-Value Token Transfers」選項，隱藏了網站上顯示的零值代幣轉賬。但是，TRON blockchain瀏覽器仍然顯示這些交易，使得這種攻擊方式在 TRON 上仍然存在。",
        learnMoreButton: "了解如何保持安全",
        check: "檢查",
      },
    },
  },
  teamsPhishing: {
    title: "Microsoft Teams 惡意軟件釣魚模擬",
    description:
      "本頁面模擬攻擊者如何創建虛假的 Microsoft Teams 網站來分發惡意軟件和竊取敏感信息。",
    warning: "僅供教育目的 - 這是 Microsoft Teams 釣魚攻擊的模擬",
    joinMeeting: "加入您的 Teams 會議",
    joinButton: "在 Teams 應用程式中加入",
    setupTitle: "安裝",
    setupInstruction: "將 Microsoft Teams 圖標拖到應用程序中進行安裝",
    applications: "應用程序",
    indicatorsTitle: "本示例中的釣魚指標",
    indicators: [
      '<strong>可疑 URL</strong>：注意域名是 "microsoft-meet.com" 而不是 "teams.microsoft.com"',
      "<strong>簡化界面</strong>：與真實的 Teams 登錄相比，虛假頁面具有簡化的界面",
      "<strong>缺乏安全功能</strong>：缺少 Microsoft 通常包含的安全元素",
      '<strong>加入按鈕</strong>：突出的 "在 Teams 應用程式中加入" 按鈕可能會導致惡意軟件下載',
    ],
    safetyTipsTitle: "安全提示",
    safetyTips: [
      "在輸入憑據或下載軟件之前，始終驗證 URL。",
      "僅從官方 Microsoft 網站或應用商店下載 Microsoft Teams。",
      "對任何異常的安裝過程或請求保持警惕。",
      '如果您下載了可疑的軟件包，可以在打開之前使用 <a href="https://www.virustotal.com" target="_blank">VirusTotal.com</a> 進行掃描。但請注意，即使沒有檢測到威脅（0 檢測），也不能保證絕對安全。',
    ],
    attackDetailsTitle: "Microsoft Teams 釣魚攻擊的工作原理",
    attackDetailsDescription:
      "攻擊者創建令人信服的 Microsoft Teams 登錄頁面或更新通知的複製品，誘騙用戶下載惡意軟件或洩露其憑據。這些攻擊變得越來越複雜，針對個人和組織。",
    risks: {
      dataBreach: {
        title: "風險：數據洩露",
        description:
          "通過虛假 Teams 更新安裝的惡意軟件可以訪問您設備上的敏感文件，可能導致未經授權訪問個人和公司數據。這可能導致知識產權盜竊、機密信息洩露和合規違規。",
      },
      credentialTheft: {
        title: "風險：憑據盜竊",
        description:
          "當用戶在虛假 Teams 網站上輸入其 Microsoft 憑據時，攻擊者會捕獲這些信息以獲取對電子郵件、OneDrive、SharePoint 和其他 Microsoft 365 服務的訪問權限。這可能導致賬戶被接管並進一步危及組織資源。",
      },
      walletDrain: {
        title: "風險：錢包資金耗盡",
        description:
          "對於從同一設備訪問加密貨幣錢包或金融服務的用戶，通過虛假 Teams 更新安裝的惡意軟件可能包含掃描錢包憑據的功能，導致數字資產被盜。",
      },
    },
    quiz: {
      title: "測驗：測試您的知識",
      successTitle: "🎉 恭喜！您已成功完成測驗！ 🎉",
      successDescription:
        "您已展示了識別 Microsoft Teams 釣魚攻擊並了解其風險的能力。",
      failureTitle: "❌ 不正確的答案。請再試一次。 ❌",
      failureDescription: "提示：仔細查看模擬中的釣魚指標。",
      flagLabel: "請輸入Flag:",
      flagPlaceholder: "在此輸入Flag...",
      questions: {
        q1: {
          question:
            "1. 在這個釣魚場景中，點擊「在 Teams 應用程式中加入」按鈕的主要風險是什麼？",
          options: {
            default: "請選擇...",
            a: "它只會重定向到合法的 Microsoft 網站",
            b: "它會嘗試在您的設備上安裝惡意軟件",
            c: "它只會顯示廣告",
            d: "它什麼都不會做",
          },
        },
        q2: {
          question: "2. 收到可疑會議邀請時的建議行動是什麼？",
          options: {
            default: "請選擇...",
            a: "總是點擊連結以檢查是否合法",
            b: "下載並打開任何附件以驗證其內容",
            c: "在點擊任何連結前驗證發件人的身份",
            d: "將邀請轉發給所有同事",
          },
        },
        q3: {
          question: "3. Microsoft Teams 的合法域名是什麼？",
          options: {
            default: "請選擇...",
            a: "teams-microsoft.com",
            b: "teams.microsoft.com",
            c: "microsoft-teams.com",
            d: "teams-official.com",
          },
        },
      },
      submitButton: "提交答案",
      resultSuccess: "挑戰成功！",
      resultSuccessDescription:
        "您已成功完成 Microsoft Teams 惡意軟件釣魚挑戰。",
      keyLearningPoints: "關鍵學習點：",
      learningPoints: [
        "始終檢查 URL 是否為官方域名（teams.microsoft.com）",
        "警惕簡化的界面和缺少標準安全功能",
        "只從官方來源下載應用程序",
        "對不尋常的安裝過程保持警惕",
      ],
      finalReminder:
        "記住：合法的 Microsoft 服務永遠不會要求您通過可疑的第三方網站下載軟件。",
    },
  },
  googleSearchAdPhishing: {
    title: "❌ Google 搜尋廣告釣魚攻擊 🔒",
    subtitle: "挑戰：識別 Google 搜尋廣告釣魚",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioTitle: "場景描述",
    scenarioDescription:
      "您想要使用 Lido Finance 質押 ETH。在 Google 上搜尋「Lido Finance」時看到這些結果。您能識別出哪個是合法網站，哪個是釣魚網站嗎？",
    realDomainLabel: "真實域名：",
    realDomainPlaceholder: "輸入合法的 Lido 域名",
    fakeDomainLabel: "釣魚域名：",
    fakeDomainPlaceholder: "輸入釣魚網站域名",
    submitButton: "提交答案",
    successTitle: "🎉 挑戰完成！",
    successDescription: "恭喜！您成功識別出了釣魚廣告和合法網站。",
    failureTitle: "❌ 挑戰失敗",
    failureDescription: "請重試。記得仔細檢查域名。",
    protectionTitle: "了解 Google 搜尋廣告釣魚攻擊",
    protectionTips: [
      "攻擊者經常購買與熱門加密貨幣項目相關的 Google 廣告，這些廣告會出現在搜尋結果的頂部，標記為「贊助」或「廣告」。",
      "這些廣告通常使用與官方網站非常相似的域名，但有細微的差別，例如：",
      "• 使用不同的頂級域名（如用 .is 代替 .fi）",
      "• 在域名中添加或刪除字母",
      "• 使用連字符或用數字替換字母",
      "當用戶點擊這些廣告時，他們會被引導到看起來與官方網站完全相同的釣魚網站，這些網站旨在竊取資金或私鑰。",
    ],
    backToHome: "← 返回挑戰",
  },
  clipboardPhishing: {
    title: "剪貼簿釣魚挑戰",
    subtitle: "挑戰：識別剪貼簿型釣魚攻擊",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioTitle: "場景描述",
    scenarioDescription:
      "您需要轉帳 1 ETH 到朋友的錢包。他們已經分享了他們的錢包地址，您正在使用加密貨幣轉帳介面進行轉帳。",
    educationalWarning: {
      title: "教育提醒：",
      description:
        "這是一個模擬的釣魚挑戰。以下介面展示了一種常見的釣魚技術。試著找出可疑之處。",
    },
    chatWithFriend: "與朋友聊天",
    friendMessage1: "嘿！這是我的錢包地址，用於接收你承諾的 ETH：",
    copyButton: "複製",
    userMessage: "收到！我馬上轉給你。",
    addressCopied: "地址已複製！我這就轉帳 ETH。",
    transferEth: "轉帳 ETH",
    recipientAddress: "收款地址：",
    recipientPlaceholder: "在此貼上錢包地址",
    amount: "數量 (ETH)：",
    sendButton: "發送 ETH",
    success: {
      title: "🎉 挑戰完成！",
      description: "恭喜！您成功避免了一個剪貼簿型釣魚攻擊。",
      howItWorks: "攻擊原理：",
      steps: [
        "攻擊者創建一個看似合法的網站",
        "當你點擊「複製」按鈕時，惡意JavaScript代碼會秘密替換複製的地址",
        "如果貼上後沒有驗證地址，你可能會將資金發送給攻擊者",
      ],
      protectionTitle: "如何保護自己：",
      protectionTips: [
        "貼上後務必再次檢查地址",
        "考慮使用帶有地址驗證的硬體錢包",
        "在電腦上複製敏感信息（如錢包地址）時要特別小心 - 即使使用Ctrl+C，惡意軟件也可能篡改你的剪貼簿內容",
      ],
    },
    failure: {
      title: "❌ 挑戰失敗",
      description: "你輸入的地址不正確。請重試。",
    },
    maliciousWarning: {
      title: "⚠️ 檢測到惡意剪貼簿活動！",
      displayedAddress: "顯示的地址：",
      copiedAddress: "複製到剪貼簿的內容：",
      description:
        "這是一個剪貼簿型釣魚攻擊的例子，其中複製的地址被替換為惡意地址！",
      closeButton: "關閉",
    },
  },
  punycodePhishing: {
    title: "Punycode 釣魚攻擊",
    subtitle: "挑戰：識別 Punycode 釣魚域名",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioTitle: "場景描述",
    scenarioDescription:
      "您收到一封電子郵件，聲稱是來自 Trezor（一個知名的硬件錢包品牌）的重要安全更新通知。電子郵件中的鏈接看起來像是指向官方 Trezor 網站，但實際上是一個精心偽裝的釣魚網站。",
    domainAppearance: "看起來像正常的 Trezor 域名",
    whatIsPunycode: "什麼是 Punycode？",
    punycodeDescription:
      'Punycode 是一種編碼系統，允許將非 ASCII 字符（如西里爾字母、中文等）轉換為 ASCII 字符，以便在域名系統中使用。攻擊者經常利用視覺上相似的字符創建看似合法的域名。例如，某些特殊字符看起來與拉丁字母幾乎相同，但它們是不同的字符。你可以使用 <a href="https://www.punycoder.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Punycoder</a> 來轉換 Unicode 和 Punycode 域名。',
    displayedDomain: "顯示域名",
    actualDomain: "實際 Punycode 域名",
    description: "說明",
    specialCharacters: "使用特殊字符替換了某些字母",
    yourTask: "你的任務",
    realDomainLabel: "真實域名：",
    realDomainPlaceholder: "輸入真實的 Trezor 官方域名",
    fakeDomainLabel: "釣魚域名：",
    fakeDomainPlaceholder: "輸入釣魚網站的 Punycode 域名",
    submitButton: "提交答案",
    successTitle: "🎉 恭喜！你成功識別了真假域名！",
    successDescription:
      "Punycode 釣魚攻擊是一種非常危險的攻擊形式，因為瀏覽器地址欄中顯示的域名可能看起來與合法網站完全相同。",
    protectionTitle: "保護自己的最佳方法是：",
    protectionTips: [
      "直接在瀏覽器中輸入已知的官方網址，而不是點擊電子郵件中的鏈接",
      "使用書籤保存常用的重要網站",
      "安裝可以檢測 Punycode 域名的瀏覽器擴展",
      "注意域名中不尋常的字符或拼寫",
    ],
    failureTitle: "❌ 答案不正確，請再試一次！",
    failureDescription:
      "提示：仔細檢查 Trezor 的官方域名，以及釣魚網站使用的 Punycode 域名。",
    backToHome: "← 返回挑戰",
  },
  telegramTokenPhishing: {
    title: "Telegram 代幣釣魚挑戰",
    subtitle: "學習識別和避免 Telegram 上的助記詞釣魚攻擊",
    warning: "僅供教育目的 - 不會使用實際的惡意代碼",
    chatTitle: "CryptoAirdrop 機器人",
    botName: "CryptoAirdrop 機器人",
    welcomeMessage:
      "🎉 恭喜！您已被選中，可以獲得我們社區空投計劃中的 5,000 個 XQUEST 代幣。",
    claimInstructions:
      "要領取您的 5,000 個 XQUEST 代幣（價值約 $2,500），請點擊下方的「領取代幣」按鈕。",
    tokenDescription:
      "XQUEST 是一種新的 DeFi 治理代幣，供應有限。目前價格：每個代幣 $0.50。",
    processingMessage: "正在處理您的請求...",
    seedPhraseRequest:
      "為了驗證您的錢包所有權並分發您的 5,000 個 XQUEST 代幣，請提供您的錢包助記詞（12 或 24 個單詞）。",
    seedPhrasePlaceholder: "在此輸入您的助記詞（12 或 24 個單詞）",
    submitButton: "提交並領取代幣",
    skipButton: "我不想提供我的助記詞",
    successTitle: "🎉 挑戰成功! Telegram 代幣釣魚學習 ",
    successMessage: "恭喜！您成功識別並拒絕了助記詞釣魚嘗試。",
    failureTitle: "❌ 挑戰失敗！您透露了您的助記詞。",
    failureMessage:
      "您輸入了助記詞。在真實情況下，這將使詐騙者能夠完全訪問您的錢包！",
    explanationTitle: "了解 Telegram 代幣釣魚",
    explanationContent:
      "這個模擬演示了詐騙者在 Telegram 上使用的常見釣魚技術。他們創建假的機器人帳戶，承諾免費代幣，但要求您提供助記詞來「驗證」您的錢包。",
    warningSignsTitle: "需要注意的警告信號：",
    warningSignsList: [
      "未經請求的免費代幣或空投消息",
      "領取獎勵的緊迫感或時間壓力",
      "要求提供助記詞或私鑰",
      "承諾高價值獎勵",
      "語法或拼寫錯誤",
    ],
    protectionTitle: "如何保護自己：",
    protectionList: [
      "永遠不要與任何人分享您的助記詞",
      "合法項目永遠不會要求您提供助記詞",
      "對未經請求的免費代幣消息保持懷疑",
      "通過官方渠道驗證所有信息",
      "如果某事看起來好得不真實，那麼可能確實如此",
    ],
    claimButton: "領取您的代幣",
    seedPhraseWarning:
      "警告：切勿與任何人分享您的助記詞！這是一個模擬，用於教您有關釣魚攻擊的知識。",
    backToHome: "← 返回挑戰",
  },
  telegramFakeSafeguard: {
    title: "Telegram 假冒安全驗證詐騙挑戰",
    subtitle: "學習識別和避免 Telegram 上的假冒驗證流程",
    warning: "僅供教育目的 - 不會使用實際的惡意代碼",
    intro: {
      p1: "詐騙者使用假冒的 Telegram 安全驗證流程誘騙用戶執行惡意命令，從而竊取加密資產。這個挑戰將教您如何識別和避免這些詐騙。",
      p2: "在這個模擬中，您將體驗一個常見的 Telegram 詐騙場景。您的目標是識別警示信號並避免落入詐騙陷阱。",
    },
    startButton: "開始挑戰",
    chatTitle: "加密空投官方",
    welcomeMessage: {
      p1: "歡迎來到加密空投官方！",
      p2: "🚀 令人興奮的消息！我們正在推出一個新代幣，為早期支持者提供大規模空投。",
      p3: "💰 領取高達 5,000 個代幣，價值約 $10,000！",
      p4: "⏰ 限時優惠 - 空投將在 24 小時內結束！",
      p5: "🔒 請完成驗證以參與。",
    },
    verifyButton: "點擊驗證",
    safeguardVerification: {
      title: "安全驗證",
      description:
        "為了防止釣魚和惡意應用程序，請通過 Telegram 在本地進行驗證。",
      step1: {
        number: "1",
        text: "按",
        keyboard: "Windows",
        plus: "+",
        keyboard2: "R",
        description: "打開「運行」對話框。",
      },
      step2: {
        number: "2",
        text: "要通過 Telegram 安全驗證，請按",
        keyboard: "CTRL",
        plus: "+",
        keyboard2: "V",
        description: "將「Telegram」粘貼到運行框中。",
      },
      step3: {
        number: "3",
        text: "最後，按",
        keyboard: "Enter",
        description: "來驗證您的賬戶並被重定向到官方群組。",
      },
      copyButton: "複製驗證碼",
    },
    verificationCode: {
      title: "驗證碼已複製到剪貼板！",
      description: "請將其粘貼到運行對話框（Win+R）中並按 Enter 完成驗證。",
      codeComment: "#         Telegram",
    },
    simulationButtons: {
      runCode: "是的，模擬運行代碼",
      avoidScam: "不，這是一個騙局",
    },
    results: {
      title: "挑戰結果",
      success: {
        title: "做得好！您避開了詐騙。",
        description:
          "您正確地將其識別為詐騙嘗試。在真實情況下，惡意代碼會在您的計算機上安裝惡意軟件，可能竊取您的加密資產。",
      },
      failure: {
        title: "您上當了！",
        description:
          "這正是 Telegram 假冒安全驗證詐騙在現實生活中的運作方式。詐騙者誘騙用戶運行安裝惡意軟件的命令，然後竊取加密資產。",
      },
    },
    education: {
      title: "Telegram 假冒安全驗證詐騙的運作方式",
      techniques: "這種詐騙使用多種技術來欺騙用戶：",
      techniquesList: [
        {
          title: "社會工程學",
          description: "通過限時空投製造緊迫感和興奮感",
        },
        {
          title: "假冒驗證",
          description: "冒充 Telegram 的官方安全驗證",
        },
        {
          title: "剪貼板注入",
          description: "秘密地將惡意代碼複製到您的剪貼板",
        },
        {
          title: "命令執行",
          description: "誘騙您運行安裝惡意軟件的命令",
        },
      ],
      redFlags: {
        title: "需要注意的警示信號",
        list: [
          "要求您將命令複製/粘貼到終端或運行對話框中",
          "看起來異常複雜的驗證流程",
          "承諾大量免費代幣的頻道",
          "製造 FOMO（害怕錯過）的緊迫時間框架",
          "與 Telegram 官方流程不同的驗證過程",
        ],
      },
      protection: {
        title: "如何保持安全",
        list: [
          "切勿從未知來源複製和粘貼命令",
          "通過多個可信來源驗證官方頻道",
          "對免費空投和贈品保持懷疑態度",
          "在 Telegram 帳戶上啟用雙重認證",
          "定期檢查 Telegram 的「活動會話」以確保沒有未授權訪問",
        ],
      },
      compromised: {
        title: "如果您認為您已被入侵",
        list: [
          "立即將資金從受影響的錢包轉移到新的安全錢包",
          "更改從您的計算機訪問的所有帳戶的密碼",
          "啟用雙重認證",
          "考慮重新安裝操作系統",
          "運行可靠的防病毒掃描",
        ],
      },
    },
    footer: {
      deviceWarning:
        "由於安全原因，您只能在筆記本電腦/PC設備上繼續使用Safeguard Portal驗證。如果需要，請在兼容設備上重試。",
      poweredBy: "技術支持：",
      safeguardLink: "@Safeguard",
    },
    backButton: "返回挑戰",
  },
  fakeStakingContract: {
    title: "超高收益質押平台",
    subtitle: "質押您的代幣，每天獲得 50% 的收益！",
    warning: "僅供教育目的 - 了解如何識別可疑的質押合約",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    notConnected: "未連接",
    connectWallet: "連接錢包",
    step2Title: "步驟 1: 質押您的代幣",
    stakeButton: "立即質押",
    step3Title: "步驟 2: 質押結果",
    backToHome: "← 返回挑戰",
    challengeSuccess: {
      title: "🎉 挑戰成功！了解質押詐騙",
      warningTitle: "⚠️ 可疑質押平台的危險信號：",
      warningItems: [
        "不切實際的回報（每日 50% 在數學上是不可持續的）",
        "要求無限制代幣授權而非特定金額",
        "沒有可驗證的智能合約代碼或審計",
        "緊迫感和 FOMO 營銷策略",
        "匿名團隊或虛假身份",
      ],
      tipsTitle: "🛡️ 如何保護自己：",
      tipsItems: [
        "投資前徹底研究項目",
        "檢查智能合約是否在 Etherscan 上已驗證",
        "尋找來自信譽良好公司的安全審計",
        "永遠不要批准無限制的代幣支出",
        "如果回報聽起來好得不真實，那麼可能確實如此",
      ],
      securityTip: "💡 安全提示：始終將代幣授權限制在所需的確切金額！",
    },
    successMessage: "✅ 挑戰成功！您已學會識別可疑的質押平台。",
    dailyReturns: "50% 每日收益",
    stakingPool: "USDC 質押池",
    stakingDescription: "質押您的 USDC，每天獲得 50% 的收益！",
    minimumStake: "最低質押金額: 100 USDC",
    lockPeriod: "鎖定期: 無",
    withdrawAnytime: "隨時可提取",
    stakePlaceholder: "輸入質押金額",
    invalidAmount: "最少質押金為 100 USDC",
    failureTitle: "⚠️ 警告：您已授予無限制訪問權限！",
    failureMessage:
      "您批准了合約可以使用無限量的代幣。在真實情況下，這將允許合約控制您的所有 USDC。",
    transactionSent: "交易已發送！查看交易:",
    whyDangerous: "為什麼這很危險？",
    seedPhraseExplanation: "授予無限制的代幣訪問權限意味著合約可以：",
    dangerList: [
      "訪問您錢包中的所有 USDC",
      "在任何時候轉移任意數量的代幣",
      "完全控制您的資產",
      "可能導致資金損失",
    ],
    rememberTitle: "記住：",
    rememberMessage: "永遠不要批准可疑合約的無限制代幣訪問權限！",
    metamaskSimulation: {
      title: "MetaMask 交易請求示例",
      description:
        "某些可疑的質押合約可能會引導您進行 approve 授權，表面上看似只為了質押特定金額，實際上卻請求對整個代幣餘額的完全訪問權限。一旦授權成功，攻擊者即可任意轉走您的所有資產。",
      transactionRequest: "交易請求",
      requestFrom: "請求來源",
      interactingWith: "交互合約",
      method: "方法",
      approvalAmount: "授權金額",
      unlimited: "無限制",
    },
  },
  defiProxyPhishing: {
    title: "DeFi Proxy 錢包合約安全更新",
    subtitle: "重要：您的 DeFiSaver Proxy 錢包合約需要安全更新！",
    warning: "僅供教育目的 - 釣魚模擬",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    step1Title: "步驟 0: 連接您的錢包",
    step2Title: "步驟 1: 更新您的 DeFiSaver Proxy 錢包合約",
    step3Title: "步驟 2: 更新結果",
    updateNeeded: "我們檢測到您的 DeFiSaver Proxy 錢包合約需要緊急安全更新。",
    updateDescription: "此更新將防止最近發現的漏洞，保護您的資金安全。",
    updateButton: "執行安全更新",
    updateProcessed: "您的更新請求已處理！",
    txData: "交易數據：",
    txHash: "交易哈希：",
    walletConnected: "錢包已連接！您現在可以執行安全更新。",
    connectionError: "連接錢包時出錯: ",
    updateError: "執行安全更新時出錯: ",
    connectWalletFirst: "請先連接您的錢包",
    simulationError:
      "交易無法執行（模擬環境）。在真實網絡上，這種攻擊可能會成功。",
    simulationWarning:
      "模擬環境：交易無法執行，但在真實網絡上，這種攻擊可能會成功。",
    challengeSuccess: "挑戰成功！您正確地拒絕了交易，保護了您的資產",
    challengeFailed: "挑戰失敗！您簽署了釣魚交易",
    failureExplanation:
      "在真實情況下，這將允許攻擊者控制您的 DeFiSaver Proxy 錢包合約。",
    successStatus: "✅ 挑戰成功！您拒絕了釣魚交易，保護了您的資產。",
    failureStatus:
      "❌ 挑戰失敗！您簽署了釣魚交易。在真實情況下，這將允許攻擊者控制您的 DeFiSaver Proxy 錢包合約。",
    protectionNote:
      "您正確地拒絕了交易。在真實情況下，這將防止攻擊者獲取您的資金。",
    techniqueTitle: "釣魚手法解析",
    techniqueDescription: "這次挑戰模擬了一個常見的 DeFi 代理合約釣魚攻擊：",
    attackSteps: [
      "攻擊者偽裝成合法的 DeFi 平台發送更新請求",
      '交易看似是無害的"安全更新"，但實際上是調用 setOwner 函數',
      "如果用戶簽署了交易，攻擊者將獲得代理合約的所有權",
      "一旦攻擊者控制了代理合約，他們可以提取所有資金",
    ],
    protectionTitle: "保護措施：",
    protectionTips: [
      "始終驗證交易的實際調用函數和參數",
      "對於可疑交易，直接拒絕簽署",
      "使用硬件錢包增加額外的安全層",
      "定期檢查您的合約權限設置",
    ],
    unsupportedNetwork: "不支持的網絡",
  },
  twitterPhishing: {
    title: "❌ X (Twitter) 仿冒釣魚攻擊 🎣",
    subtitle: "挑戰：識別詐騙仿冒帳號",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioTitle: "場景描述",
    scenarioDescription:
      "你看到以下 X (原Twitter) 貼文。你能識別出哪個回覆是詐騙嘗試嗎？",
    originalPostContent:
      "#Wintermute – 頂級建設者，已將無數項目推向令人瞠目結舌的數十億美元估值！這證明 #Mubarak 是一顆耀眼的寶石，#BNBChain 上不容錯過的項目 ✨",
    reposts: "轉發",
    quotes: "引用",
    likes: "點讚",
    views: "瀏覽",
    replyPlaceholder: "發表你的回覆",
    postButton: "發布",
    scamReplyContent:
      "$Mubarak 快照已於今天早些時候成功完成！超過10,000個錢包有資格領取代幣。<br><br>符合條件的用戶現在可以領取他們的 $Mubarak 空投。<br><br>查看資格和領取 ⤵️<br>http://mubarak-snapshot.com",
    showMoreReplies: "顯示更多回覆",
    yourTask: "你的任務",
    taskDescription: "識別真實和虛假帳號的用戶名。",
    realHandleLabel: "真實用戶名：",
    realHandlePlaceholder: "輸入真實帳號用戶名（無需輸入@）",
    fakeHandleLabel: "虛假用戶名：",
    fakeHandlePlaceholder: "輸入虛假帳號用戶名（無需輸入@）",
    submitButton: "提交",
    success: {
      title: "✅ 正確！你成功識別出了詐騙帳號！",
      differences: "需要注意的關鍵差異：",
      points: [
        '詐騙帳號將 "mubarak" 錯誤拼寫為 "mubcrak"',
        '詐騙帳號在用戶名中將 "cto" 改為 "cfo"',
        "顯示名稱中包含微妙的拼寫錯誤",
      ],
      tip: "在與加密貨幣相關的貼文互動之前，請務必仔細驗證帳號用戶名！",
    },
    error: {
      title: "❌ 不正確。請重試！",
      hint: "提示：仔細查看兩個帳號的用戶名拼寫（@username）",
    },
  },
  xAuthorizeDoubleclickjacking: {
    title: "X (X) OAuth 釣魚攻擊與 DoubleClickjacking",
    subtitle: "挑戰：識別 DoubleClickjacking 攻擊",
    warning:
      "僅供教育目的 - 這是一個使用 DoubleClickjacking 技術的 X OAuth 釣魚攻擊模擬",
    scenario: {
      title: "情境描述",
      description:
        "您收到一封電子郵件，聲稱您贏得了一年的 X Blue 訂閱。郵件中包含一個領取獎品的連結。當您點擊它時，您會被帶到一個看似是 X OAuth 授權頁面的頁面。",
      explanation:
        "這個模擬展示了一種稱為 DoubleClickjacking 新穎釣魚技術，它可以繞過 X-Frame-Options 保護，防止點擊劫持攻擊。",
      technique:
        "DoubleClickjacking 是一種高級點擊劫持技術，可以繞過 X-Frame-Options、SameSite cookies 或 CSP 等標準保護措施。",
      discovery:
        "DoubleClickjacking 技術由 Paulo Syibelo 於 2024 年發現，它使用雙擊事件來繞過框架破壞和 X-Frame-Options 保護。",
    },
    steps: {
      step1: "授權",
      step2: "更多權限",
      step3: "成功",
    },
    oauth: {
      title: "授權 X Rewards",
      appName: "X Rewards",
      appDeveloper: "xx.com",
      permissionsTitle: "此應用程式將能夠：",
      permissions: {
        viewProfile: "查看您的用戶名、個人資料圖片和帳戶信息",
        viewFollowers: "查看您的關注者",
        postTweets: "發布和刪除推文",
      },
      authorizeButton: "授權應用程式 (雙擊)",
      cancelLink: "取消",
    },
    success: {
      title: "恭喜！",
      description: "您已成功獲得 X Premium。",
      upgradePeriod: "您的帳戶將在一週內升級。",
      featuresTitle: "Premium 功能包括：",
      features: [
        "藍色驗證徽章",
        "在回覆和搜索中優先顯示",
        "減少廣告",
        "更長的帖子",
        "編輯按鈕",
      ],
      flag: "X_DOUBLECLICKJACKING_2025",
    },
    securityAlert: {
      title: "良好的安全意識！",
      description:
        "您表現出了良好的安全意識。這是一個安全的模擬環境，旨在教您了解 DoubleClickjacking 攻擊。您可以安全地繼續學習這種攻擊技術，不會有任何風險。",
      continueButton: "繼續模擬",
      backButton: "返回挑戰",
    },
    educational: {
      title: "DoubleClickjacking 如何運作",
      description:
        "DoubleClickjacking 是一種高級點擊劫持技術，可以繞過 X-Frame-Options、SameSite cookies 或 CSP 等標準保護措施。以下是它的工作原理：",
      steps: [
        "攻擊者創建一個看起來像合法驗證或授權頁面的頁面。",
        "當用戶雙擊「授權應用程式」按鈕時，第一次點擊會被攻擊者攔截，而第二次點擊則會被導向到一個具有更多權限的頁面。",
        "這種技術之所以有效，是因為許多框架破壞技術只能防止單擊，而不能防止雙擊。",
      ],
      attackExplanation: {
        title: "DoubleClickjacking 如何運作",
        description:
          "當您雙擊「授權應用程式」按鈕時，第一次點擊會被攻擊者攔截，而第二次點擊則會被導向到一個具有更多權限的頁面。",
        firstScreen: "第一個畫面（您看到的）",
        secondScreen: "第二個畫面（實際授權的）",
        warning:
          "警告：實際上，您點擊的是授權應用程式可以發布和刪除推文的權限！",
      },
      dangers: {
        title: "這個攻擊是特別危險的，因為：",
        points: [
          "它可以繞過標準點擊劫持保護，如 X-Frame-Options 和框架破壞腳本。",
          "它看起來完全合法給用戶。",
          "一旦授權，惡意應用程式將獲得請求的權限，可能包括發布推文、讀取直接消息或甚至更改帳戶設定。",
        ],
      },
      moreInfo:
        '更多資訊，請參考 <a href="https://www.paulosyibelo.com/2024/12/doubleclickjacking-what.html" target="_blank">Paulo Syibelo 的原始研究</a>。',
    },
    quiz: {
      title: "測試您的知識",
      question: "是什麼使 DoubleClickjacking 與傳統點擊劫持不同？",
      options: [
        "它只在移動設備上有效",
        "它可以通過使用雙擊事件繞過 X-Frame-Options 和框架破壞防禦",
        "它只針對 X 應用程式",
        "它要求用戶登出其帳戶",
      ],
      flagInput: {
        title: "輸入Flag",
        placeholder: "輸入您找到的Flag",
      },
      submitButton: "提交答案與Flag",
      results: {
        correct: {
          title: "過關！",
          answer:
            "正確！DoubleClickjacking 通過使用雙擊事件繞過 X-Frame-Options 和框架破壞防禦。",
          flag: "Flag正確！",
        },
        incorrect: {
          title: "失敗！",
          answer:
            "不正確。DoubleClickjacking 通過使用雙擊事件繞過 X-Frame-Options 和框架破壞防禦。",
          flag: "Flag不正確。請再試一次。",
        },
        selectAnswer: "請選擇一個答案。",
        enterFlag: "請輸入Flag。",
      },
    },
    backButton: "返回挑戰",
  },
  home: {
    title: "Web3 釣魚安全挑戰",
    description:
      "這些教育性模擬可以幫助您了解和識別常見的 Web3 釣魚攻擊，學習如何在去中心化世界中保護自己。",
    warning: "警告：這些模擬僅用於教育目的，所有交互都在測試網絡上進行。",
    leaderboard: "排行榜",
    page: "首頁",
    challenges: "安全挑戰",
    about: "關於我們",
    startChallenge: "開始挑戰",
    securityChallenges: "安全挑戰",
    challengeDescription: "完成每個安全挑戰，你將會在這些領域獲得進步。",
    contributeMore: "我要貢獻更多",
    founders: "核心開發團隊",
    foundersDescription:
      "我們計劃建立一個 Web3 釣魚演練平台，通過模擬各種常見的釣魚攻擊手法，如社交工程、假冒網站、惡意智能合約等，幫助用戶學習並提升對攻擊手法的識別與防範能力。此平台作為一個 Public Good，供所有人免費使用。我們的目標是降低用戶遭受釣魚攻擊的風險，強化整體 Web3 生態的安全性，並提升安全意識與教育資源的可及性。",
    sponsors: "社區支持夥伴",
    sponsorsDescription: "與頂級安全研究實驗室和區塊鏈安全公司合作",
    aboutUs: "關於我們",
    aboutUsDescription:
      "我們計劃建立一個 Web3 釣魚演練平台，通過模擬各種常見的釣魚攻擊手法，如社交工程、假冒網站、惡意智能合約等，幫助用戶學習並提升對攻擊手法的識別與防範能力。此平台作為一個 Public Good，供所有人免費使用。我們的目標是降低用戶遭受釣魚攻擊的風險，強化整體 Web3 生態的安全性，並提升安全意識與教育資源的可及性。",
    viewMore: "查看更多",
    challengeMore: "挑戰更多",
    contributions: "我要貢獻關卡",
    footer: {
      description: "通過互動式安全教育和釣魚防範訓練賦能Web3用戶",
      links: "快速連結",
      social: "社交媒體",
      newsletter: "新聞訂閱",
      subscribeText: "獲取最新安全見解和培訓資源",
      emailPlaceholder: "輸入郵箱",
      subscribe: "訂閱",
      about: "關於我們",
      contact: "聯絡我們",
      privacy: "隱私政策",
      terms: "使用條款",
      right1: "版權所有",
      right2: "保留所有權利",
      //footer: "",
    },
  },
  challenges: {
    all: "全部",
    beginner: "初級",
    intermediate: "中級",
    advanced: "高級",
    previous: "上一頁",
    next: "下一頁",
    noChallenges: "暫無挑戰",
    loading: "加載中...",
    locked: "此關卡未解鎖，請先連結錢包",
    locked2: "此關卡未解鎖，請先完成入門挑戰",
  },
  common: {
    connectWallet: "連接錢包",
    disconnect: "斷開連接",
    leaderboard: "排行榜",
    processing: "處理中...",
    backButton: "← 返回安全挑戰",
    notConnected: "未連接",
    close: "關閉",
    continue: "繼續",
    sign: "簽署",
    confirm: "確認",
    cancel: "取消",
  },
  contact: {
    title: "聯絡我們",
    email: "信箱",
  },
  profile: {
    userName: "用戶名：",
    SecurityTitle: "安全稱號：",
    Rank: "安全排行：",
    SecurityScore: "安全積分：",
    stats: {
      passed: "通過 {count} 關，",
      completed: "完成 {percentage}%",
    },
  },
  questionList: {
    submitAnswer: "提交答案",
    correctAnswer: "答對了！",
    wrongAnswer: "答錯了！",
  },
  challengeCard: {
    difficulty: "難度",
    startChallenge: "開始挑戰",
  },
  walletSetupGuide: {
    walletReadyMessage:
      "您的錢包現在已經準備好使用！您可以將其連接到 dApps 並開始與 Holesky 測試網互動。",
    congratulations: "恭喜！您已成功完成 Web3 錢包設置！",
    setupCompleteMessage: "您現在已經準備好開始您的 Web3 之旅。",
    title: "Web3 錢包設置指南",
    welcome:
      "歡迎來到 Web3 世界！本指南將引導您設置首個加密貨幣錢包 MetaMask，安全存儲助記詞，並從水龍頭獲取測試 ETH。",
    downloadMetaMask: "下載 MetaMask",
    installMetaMask: "請先安裝 MetaMask！",
    networkAdded: "Holesky 測試網已成功添加！",
    networkError: "添加 Holesky 測試網失敗：",
    securityTip: "安全提示",
    downloadWarning:
      "務必從官方網站或可信任的應用商店下載 MetaMask。切勿從電子郵件或消息中提供的鏈接安裝。",
    important: "重要",
    seedPhraseWarning:
      "您的助記詞是在失去訪問權限時恢復錢包的唯一方法。任何擁有您助記詞的人都可以完全控制您的錢包和資金。",
    warning: "警告",
    phishingWarning:
      "許多網絡釣魚詐騙針對您的助記詞。任何合法服務都不會要求您提供完整的助記詞。",
    note: "注意",
    testEthNote: "測試 ETH 沒有實際價值，僅用於測試網絡上的測試。",
    addNetwork: "添加 Holesky 網絡",
    connectWallet: "連接錢包",
    confirmCompletion: "確認設置完成",
    walletConnected: "錢包已連接",
    connected: "已連接",
    backToHome: "返回挑戰",
    connectingWallet: "連接錢包中...",
    pendingRequest: "等待中...",
    connectionError: "連接錢包失敗",
    wrongNetwork: "錯誤的網絡",
    setupComplete: "設置完成",
    unknownError: "未知錯誤",
    noTestEth: "您沒有任何測試 ETH。請訪問水龍頭以獲取一些。",
    authenticationFailed: "身份驗證失敗",
    authenticating: "正在驗證...",
    loginSuccess: "登錄成功！",
    steps: {
      1: {
        title: "安裝 MetaMask",
        content: "MetaMask 是一個瀏覽器擴展程序，允許您與以太坊區塊鏈互動。",
        visitMetaMask: "訪問 MetaMask 官方網站",
        clickInstall: "點擊「為您的瀏覽器安裝 MetaMask」",
        followProcess: "按照瀏覽器擴展安裝過程進行操作",
        clickIcon: "安裝完成後，點擊瀏覽器擴展中的 MetaMask 圖標",
      },
      2: {
        title: "創建您的錢包",
        content: "安裝 MetaMask 後，您需要創建一個新錢包：",
        clickCreateWallet: "點擊「創建新錢包」",
        createSecurePassword: "創建一個安全的密碼",
        watchSecurityVideo: "觀看簡短的安全視頻",
        clickRevealSeedPhrase: "點擊「查看助記詞」",
      },
      3: {
        title: "安全存儲您的助記詞",
        content:
          "您的助記詞通常由 12 個按特定順序排列的單詞組成。以下是安全存儲它的方法：",
      },
      4: {
        title: "添加 Holesky 測試網到 MetaMask",
        content:
          "安裝 MetaMask 後，您需要手動添加 Holesky 測試網。以下是網絡詳細信息：",
      },
      5: {
        title: "從水龍頭獲取測試 ETH",
        content:
          "在使用真實加密貨幣之前，最好先使用測試網絡和測試 ETH 進行練習：",
      },
      6: {
        title: "連接您的錢包",
        content: "連接您的 MetaMask 錢包以開始與區塊鏈互動。",
      },
    },
    bestPractices: [
      "將其寫在紙上（多份副本）",
      "存放在安全、防水、防火的地方",
      "考慮使用金屬備份解決方案以提高耐久性",
      "切勿以數字方式存儲（不要拍照、不要雲存儲、不要電子郵件）",
      "切勿與任何人分享，包括「支持人員」",
    ],
    faucetSteps: [
      "在 MetaMask 中，點擊頂部的網絡下拉菜單（可能顯示「以太坊主網」）",
      "選擇「Holesky 測試網絡」（您可能需要從設置 > 網絡中添加它）",
      "複製您的錢包地址",
      "訪問 Google Cloud Holesky 水龍頭",
      "粘貼您的錢包地址並請求測試 ETH",
      "等待片刻，然後檢查您的 MetaMask 錢包中的測試 ETH",
    ],
    installNow: "立刻安装",
    close: "關閉",
    switchNetwork: "切換網絡",
  },
  seedPhraseRecoveryScam: {
    title: "錢包恢復助手",
    description:
      "遇到錢包問題？我們的專業團隊可以幫助您恢復訪問權限。這是模擬的題目,可以安心測試",
    serviceTitle: "錢包恢復服務",
    serviceDescription:
      "請描述您遇到的問題，我們的支持團隊將立即為您提供幫助。",
    issueLabel: "問題描述：",
    issuePlaceholder: "例如：我無法訪問我的錢包，忘記了密碼等...",
    emailLabel: "電子郵件：",
    emailPlaceholder: "您的電子郵件地址",
    submitButton: "提交請求",
    chatTitle: "即時客服聊天",
    supporterMessage:
      "您好！我是錢包支持團隊的 Alex。我已經收到了您的請求，很樂意為您提供幫助。",
    verificationMessage:
      "為了幫助您恢復錢包訪問權限，我需要驗證您的身份。請提供您的錢包恢復助記詞（12-24個單詞的種子短語）。",
    securityMessage: "請放心，這是一個安全的環境，您的信息將被加密處理。",
    inputPlaceholder: "輸入您的消息...",
    sendButton: "發送",
    endButton: "結束對話",
    successMessage: "✅ 挑戰成功！您識別並拒絕了釣魚嘗試，保護了您的助記詞。",
    phishingIdentified: "釣魚嘗試已識別！",
    congratsMessage: "恭喜！您成功識別並拒絕了種子短語釣魚嘗試。",
    whyPhishing: "為什麼這是釣魚嘗試？",
    whyPhishingExplanation:
      "合法的錢包服務或支持人員<strong>永遠不會</strong>要求您提供助記詞（種子短語）。您的助記詞是恢復錢包的私鑰，任何擁有它的人都可以完全控制您的資金。",
    protectionTitle: "保護自己的方法：",
    protectionMethods: [
      "永遠不要向任何人透露您的助記詞，無論他們聲稱是誰。",
      "將您的助記詞離線存儲在安全的地方。",
      "使用硬件錢包增加額外的安全層。",
      "如果您收到要求提供助記詞的消息，這幾乎肯定是釣魚嘗試。",
      "當有疑問時，直接結束對話並聯繫官方渠道。",
    ],
    backButton: "← 返回挑戰",
    failureTitle: "釣魚嘗試成功！",
    failureMessage:
      "您輸入了看起來像助記詞的內容。在真實情況下，這將使攻擊者能夠訪問您的所有資金。",
    whyDangerous: "為什麼這是危險的？",
    seedPhraseExplanation:
      "您的助記詞（種子短語）是恢復錢包的私鑰。任何擁有它的人都可以：",
    dangerList: [
      "訪問您錢包中的所有資金",
      "轉移您的所有代幣和 NFT",
      "簽署交易並授權支出",
      "完全控制您的錢包",
    ],
    rememberTitle: "記住：",
    rememberMessage:
      "合法的錢包服務或支持人員<strong>永遠不會</strong>要求您提供助記詞。如果有人要求您提供助記詞，請立即結束對話。",
    retryButton: "重試挑戰",
    failureStatus: "❌ 挑戰失敗！您透露了您的助記詞。",
  },
  permitPhishing: {
    title: "USDC Permit 釣魚演示",
    subtitle: "此頁面演示釣魚網站如何使用簽名（Permit）請求 USDC 授權！",
    warning: "僅供教育目的 - 請謹慎處理真實簽名",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    notConnected: "未連接",
    connectWallet: "連接錢包",
    step2Title: "步驟 2: 為 USDC 簽署 Permit",
    spenderAddress: "授權地址：",
    approveButton: "授權 USDC",
    step3Title: "步驟 3: 簽名結果",
    revokeDescription: "將授權設置為零以撤銷之前的授權",
    revokeButton: "撤銷 USDC 授權",
    backToHome: "← 返回挑戰",
    successMessage: "✅ 挑戰成功！您拒絕了惡意簽名請求，保護了您的資產。",
    signPermit: "簽署 Permit",
    signatureResult: "簽名結果",
    challengeCompleted: "🎉 挑戰成功！",
    wiseDecision: "您正確地拒絕了惡意簽名請求。這是一個明智的決定！",
    whatWouldHappen: "如果您簽名了，會發生什麼？",
    attackDescription:
      "這個簽名將允許攻擊者控制您的 USDC 代幣！通過使用 EIP-2612 permit 簽名，攻擊者可以：",
    attackPoints: {
      point1: "獲得對您所有 USDC 的完全訪問權限",
      point2: "在未來任何時間轉移您的代幣",
      point3: "無需您進一步批准即可花費您的資金",
    },
    attackWarning: "這種攻擊特別危險，因為它不需要鏈上交易，只需要一個簽名。",
    signatureDetails: {
      warning:
        "警告：在真實情況下，這個簽名將允許惡意網站無限制地使用你的 USDC！",
      title: "簽名詳情：",
      permissionNote:
        "這個簽名允許地址 {spender} 使用你的全部 USDC 餘額，直到 {deadline}。",
      success: "簽名成功！這個簽名可以用於批准代幣支出，無需交易！",
    },
  },
  usdtApprovalPhishing: {
    title: "USDT 授權釣魚模擬",
    subtitle: "這個頁面展示了釣魚網站如何請求無限 USDT 授權！",
    warning: "僅供教育目的 - 請小心真實的授權請求",
    networkStatus: "當前網絡：",
    walletStatus: "錢包狀態：",
    notConnected: "未連接",
    connectWallet: "連接錢包",
    step2Title: "步驟 1: 授權 USDT",
    spenderAddress: "授權地址：",
    approveButton: "授權 USDT",
    approvingButton: "正在授權 USDT...",
    step3Title: "步驟 2: 撤銷 USDT 授權",
    revokeDescription: "將授權設置為零以撤銷之前的授權",
    revokeButton: "撤銷 USDT 授權",
    revokingButton: "正在撤銷 USDT 授權...",
    revokeRejected: "您已拒絕撤銷授權交易",
    revokePending: "準備撤銷交易...",
    revokeSending: "發送撤銷交易...",
    revokeSuccess: "撤銷交易已發送！",
    backToHome: "← 返回挑戰",
    revokeTransactionView: "撤銷交易已發送！查看交易：",
    challengeFailed: "❌ 挑戰失敗！您批准了惡意交易。",
    successMessage: "✅ 挑戰成功！您拒絕了虛假授權，保護了您的資產。",
    signatureDetails: {
      warning:
        "警告：在真實情況下，這個簽名將允許惡意網站無限制地使用你的 USDT！",
      title: "簽名詳情：",
      permissionNote: `授權交易已發送！查看交易: <a href="https://holesky.etherscan.io/tx/{txHash}" target="_blank">{txHash}</a>`,
      success: "簽名成功！這個簽名可以用於批准代幣支出，無需交易！",
    },
    challengeSuccess: {
      title: "🎉 挑戰成功！了解授權釣魚攻擊",
      checklistTitle: "⚠️ MetaMask 授權提示中需要注意的地方：",
      checklistItems: [
        "檢查授權金額是否為無限制（Unlimited）",
        "驗證授權接收方地址是否可信",
        "確認合約地址是否為官方代幣地址",
      ],
      risksTitle: "🚨 其他授權風險提示：",
      risksItems: [
        "除了 approve 外，也要當心 increaseAllowance 函數",
        "increaseAllowance 同樣可以增加代幣授權額度",
        "一些釣魚網站會通過這個方式來掩飾其真實意圖",
      ],
      securityTip: "💡 安全建議：永遠不要給不明來源的網站無限授權！",
    },
    scenario: {
      title: "🎮 場景介紹",
      description: "你收到了一封來自朋友的郵件：",
      message1:
        "嘿！我剛發現了一個超讚的 NFT 項目！現在預售價只要 0.1 ETH，但你需要先授權 USDT 作為保證金。等鑄造完成後，保證金會立即退還。這個項目肯定暴漲，我已經準備買 10 個了！",
      message2: "這是官網連結，抓緊時間，名額不多了！",
      warning:
        "⚠️ 這是一個模擬的釣魚場景，用於教育目的。在現實中，請務必謹慎對待任何要求 USDT 授權的請求！",
    },
  },
  airdropScam: {
    title: "專屬代幣空投",
    congratulations: "恭喜！您已被選中獲得免費代幣！",
    educational: "僅供教育目的 - 釣魚模擬",
    currentNetwork: "當前網絡",
    walletStatus: "錢包狀態",
    notConnected: "未連接",
    unknownNetwork: "未知網絡",
    step1: "步驟 1: 連接您的錢包",
    connectWallet: "連接錢包",
    step2: "步驟 2: 領取您的免費代幣",
    tokenAmount: "您有",
    expiryTime: "領取截止時間",
    hours: "小時",
    claimAirdrop: "領取空投",
    step3: "步驟 3: 領取結果",
    claimProcessed: "您的領取請求已處理！",
    metamaskExample: "MetaMask 交易請求示例",
    phishingWarning:
      "注意釣魚網站如何使用「Security Update」（安全更新）作為方法名稱，誘導用戶相信這是一個錢包更新操作。",
    connectWalletFirst: "請先連接錢包！",
    confirmTransaction: "確認交易",
    insufficientBalance: "餘額不足",
    transactionSent: "交易已發送",
    challengeSuccess: "✅ 挑戰成功！您拒絕了釣魚嘗試，保護了您的資產。",
    challengeFailed: "❌ 挑戰失敗！您簽署了惡意交易，這可能會導致資金損失。",
    transactionFailed: "交易失敗",
    claimError: "領取錯誤",
    phishingWarningTitle: "警告: 這是一個釣魚嘗試！",
    phishingWarningContent:
      "此交易實際上是向合約 {contractAddress} 發送 0.5 ETH，而不是領取任何代幣。",
    phishingWarningFunction:
      "函數選擇器 {selector} 調用了一個名為 SecurityUpdate() 的函數，該函數可能會將您的資金轉移給攻擊者。",
    phishingWarningAdvice:
      "在真實情況下，永遠不要在不了解交易內容的情況下簽署交易！",
    phishingWarningMetamask:
      "在新版 MetaMask 中，點擊右上角可以查看 Method，默認情況下可能看不到。",
    networkSwitchRequired: "需要切換到 Holesky 測試網絡",
    incorrectNetwork: "錯誤的網絡",
  },
  fakeTokenAirdrop: {
    title: "🚨 假冒代幣空投釣魚攻擊 🚨",
    subtitle: "挑戰：識別真假域名",
    warning: "僅供教育目的 - 釣魚模擬",
    scenario: {
      title: "場景描述",
      description:
        "某天，你收到一封電子郵件，聲稱你有資格獲得UNI代幣的空投！郵件中包含一個鏈接，引導你到一個看似合法的網站。你點擊了該鏈接，並看到以下交易記錄：",
    },
    transaction: {
      hashLabel: "交易哈希：",
      statusLabel: "狀態：",
      blockLabel: "區塊：",
      timestampLabel: "時間戳：",
      actionLabel: "交易操作：",
      fromLabel: "發送方：",
      toLabel: "交互對象：",
      tokensLabel: "ERC-20代幣轉移：",
      valueLabel: "價值：",
      feeLabel: "交易費用：",
      gasPriceLabel: "Gas價格：",
      success: "成功",
      confirmations: "20個區塊確認",
      timestamp: "5分鐘前 (2025-03-17 02:34:36 AM UTC)",
      action: "調用 函數 by 0x4276BF06...a1B7D03Ce on 0x4d264c6A...41F757Fe5",
      transferDetails: "從 0x4276BF06...a1B7D03Ce 到 0xE1a9d5C7...615506D4",
      amount: "數量：8,888",
      tokenName: "ERC-20: app.un1swap.org (UNI)",
    },
    phishingExplanation:
      "仔細觀察上面的交易記錄。這是一個常見的釣魚攻擊手法，攻擊者會創建與真實域名極為相似的假冒網站，試圖欺騙用戶。",
    taskTitle: "你的任務",
    taskDescription: "識別出真實的Uniswap域名和釣魚網站的假冒域名。",
    realDomainLabel: "真實域名：",
    realDomainPlaceholder: "輸入真實的Uniswap域名",
    fakeDomainLabel: "釣魚域名：",
    fakeDomainPlaceholder: "輸入釣魚網站的假冒域名",
    submitButton: "提交答案",
    successMessage: "✅ 挑戰成功！您正確識別了真實和假冒域名。",
    failureMessage: "❌ 不正確。請再試一次。仔細查看域名。",
    tipTitle: "如何保護自己免受域名欺騙：",
    tips: [
      "始終逐字符檢查域名",
      "警惕使用數字代替字母的域名（例如，用'1'代替'i'）",
      "收藏官方網站而不是點擊電子郵件中的鏈接",
      "使用密碼管理器，它只會在合法域名上自動填充",
      "安裝警告釣魚網站的瀏覽器擴展",
    ],
    backButton: "← 返回挑戰",
  },
  maliciousRPCProvider: {
    title: "惡意 RPC 提供商挑戰",
    subtitle: "了解為什麼使用可信的 RPC 端點至關重要",
    warning: "僅供教育目的 - 學習如何識別和避免惡意 RPC 提供商",
    currentNetwork: "當前網絡",
    currentRPC: "當前 RPC 提供商",
    addCustomRPC: "添加自定義 RPC",
    rpcName: "RPC 名稱",
    rpcURL: "RPC URL",
    addRPC: "添加 RPC",
    sendTransaction: "發送交易",
    recipientAddress: "接收地址",
    amount: "金額 (ETH)",
    send: "發送 ETH",
    rpcSettings: "RPC 设置",
    trusted: "可信",
    untrusted: "不可信",
    connected: "已連接",
    connect: "連接",
    scenario: "場景",
    scenarioDescription:
      '有人要求您添加一個自定義 RPC，以接收大量 USDT 支付。他們已經向您發送了 1 USDT 和少量 ETH 作為"測試"，現在他們要求您使用他們的"特殊"RPC 端點。',
    maliciousRPCWarning:
      "⚠️ 教育說明：您已連接到潛在的惡意 RPC。在真實情況下，這可能會操縱您在錢包中看到的內容。",
    question: "使用惡意 RPC 提供商的最嚴重後果是什麼？",
    answers: {
      A: "A. 資產被盜",
      B: "B. 網絡連接緩慢",
      C: "C. 交易費用增加",
    },
    transactionHistory: {
      title: "交易歷史",
    },
    tokenBalances: {
      title: "代幣餘額",
      usdt: "USDT",
    },
    wrongAnswer: "錯誤。請再試一次。提示：攻擊者可以對您的資產做什麼？",
    result: {
      title: "步驟 4: 挑戰結果",
      howItWorks: "惡意 RPC 提供商如何運作",
      description: "惡意 RPC 提供商可以：",
      capabilities: [
        "攔截並修改您的交易，將資金重定向到攻擊者的地址",
        "顯示虛假的代幣餘額，讓您認為您收到了不存在的付款",
        "提供虛假的交易狀態，讓您認為交易失敗並誘使您重試",
        "收集您的交易歷史和錢包活動數據",
      ],
      protectionTitle: "如何保護自己",
      protectionTips: [
        "僅使用知名且受信任的 RPC 提供商",
        "驗證您的錢包連接到的 RPC URL",
        "使用硬體錢包進行額外的安全保障",
        "考慮運行您自己的節點以獲得最大安全性",
      ],
    },
    success: {
      title: "✅ 挑戰成功！您識別並拒絕了惡意 RPC 提供商的請求。",
    },
    alert: {
      title: "您已被釣魚攻擊！",
      description:
        "您以為您正在發送 <strong>{amount} ETH</strong> 到 <strong>{intendedRecipient}</strong>，但惡意 RPC 將您的交易重定向到 <strong>{actualRecipient}</strong>（攻擊者的地址）。",
      balance:
        "此外，RPC 向您顯示了 10,000 USDT 的虛假 USDT 餘額，讓您相信您收到了付款，而實際上沒有 USDT 轉入您的賬戶。",
    },
  },
  tornadoCashPhishing: {
    title: "Tornado Cash 釣魚攻擊",
    subtitle: "挑戰：識別釣魚指標",
    warning: "僅供教育目的 - 釣魚模擬",
    scenarioTitle: "場景描述",
    scenarioDescription:
      "你是一位剛剛成功入侵 DeFi 協議並竊取了 2930 ETH 的駭客。為了掩蓋你的蹤跡，你決定使用 Tornado Cash 來混合資金。你搜尋「Tornado Cash」並點擊了一個看似是官方網站的連結。",
    warningLabel: "警告",
    warningText: "這是一個教育性的釣魚模擬。請勿在真實環境中使用這些技術。",
    tabs: {
      deposit: "存入",
      withdraw: "提取",
    },
    form: {
      token: "代幣",
      amount: "金額",
      note: "您的存款票據",
      notePlaceholder: "請輸入您的存款票據...",
      recipient: "收款人地址",
      recipientHelp: "資金將發送到的地址",
      contractAddress: "合約地址",
    },
    buttons: {
      connect: "連接錢包",
      withdraw: "提取",
      submit: "提交答案",
    },
    stats: {
      title: "統計數據",
      anonymitySet: "匿名集合",
      equalDeposits: "個相同用戶存款",
      latestDeposits: "最新存款",
    },
    errors: {
      emptyNote: "請輸入您的存款票據。",
    },
    phishingAlert: "您的存款票據已被捕獲！這就是網絡釣魚的工作原理。",
    phishingCheckAddress: "請檢查合約地址是否為官方 Tornado Cash 地址",
    challenge: {
      title: "您的挑戰",
      description:
        "仔細檢查上面的 Tornado Cash 界面。您能識別出哪些釣魚指標，表明這不是合法的 Tornado Cash 網站嗎？",
      hint: "提示：留意域名（TornadoEth.cash 與 Tornado.cash）、收款地址和其他可能表明這是釣魚嘗試的細節差異。",
      question: "您發現了哪些釣魚指標？（選擇所有適用項）",
      options: [
        "網域名稱 'TornadoEth.cash' 看起來像是釣魚網站",
        "預先填入的收款地址（會將資金發送給攻擊者）",
        "存款合約地址與官方 Tornado Cash 合約不同",
        "用戶界面與官方 Tornado Cash 網站有細微差異",
      ],
    },
    success: {
      completeMessage: "挑戰成功完成！🎉",
      partialMessage: "您發現了 {count} 個指標，共 {total} 個。",
    },
    explanation: {
      title: "解釋",
      description:
        "2025 年 4 月，zkLend 的攻擊者試圖使用 Tornado Cash 混合被竊取的資金，並與一個已知的 Tornado Cash 釣魚網站 tornadoeth[.]cash 互動，結果將資金損失給另一方。",
      indicatorsTitle: "釣魚指標包括",
      indicators: [
        {
          title: "域名",
          description:
            "真正的 Tornado Cash 網域是 tornado.cash，但這個釣魚網站使用「tornadoeth.cash」 - 一個微妙的差異可能被忽略。",
        },
        {
          title: "預先填入的收款地址",
          description:
            "釣魚網站預先填入了一個收款地址，由攻擊者控制，希望用戶不會注意到並將資金直接發送給攻擊者。",
        },
        {
          title: "合約地址",
          description:
            "存款合約地址與官方 Tornado Cash 合約不同，表明這是一個惡意的複製品。",
        },
        {
          title: "用戶界面差異",
          description:
            "雖然界面看起來相似，但與官方 Tornado Cash 網站相比，有些微妙的差異。",
        },
      ],
      conclusion: "請務必仔細驗證 URL、合約地址和收款地址，以避免資金損失。",
    },
  },
  tokenPrecisionPhishing: {
    title: "Token 精度釣魚攻擊",
    warning:
      "警告：這是一個模擬的釣魚攻擊場景，用於教育目的。永遠不要在真實情況下分享您的私鑰或助記詞。",
    backButton: "← 返回挑戰",
    pleaseAnswerAll: "請回答所有問題！",
    background: {
      title: "背景",
      description:
        "您剛剛在社交媒體上看到一條消息，聲稱可以幫助您追回被盜的加密貨幣。您決定聯繫他們尋求幫助。",
    },
    chat: {
      title: "CYBER RESCUE - 資產追回服務",
      message1:
        "您好！我是 CYBER RESCUE 的技術專家。我們專門幫助用戶追回被盜的加密貨幣資產。請問您是什麼時候被盜的？使用什麼錢包？",
      reply1:
        "我昨天在點擊了一個釣魚網站後，我的 MetaMask 錢包中的 10,000 USDT 被盜了。",
      message2:
        "非常抱歉聽到這個消息。別擔心，我們有 100% 的成功率追回被盜資金。我們將使用 BNB 智能鏈網絡，通過 USDT 處理交易並將被盜資金重定向到您的錢包。",
      message3:
        "首先，您需要下載 MathWallet 錢包，這樣我們才能指導您進行正確的設置並將資金重定向至您的錢包。",
      reply2: "好的，我已經下載並安裝了 MathWallet。",
      message4:
        "太好了！現在請在 MathWallet 首頁點擊「添加自定義資產」，然後輸入 USDT 合約地址：0x55d398326f99059ff775485246999027b3197955",
      message5:
        "<strong>重要提示：</strong> 在粘貼合約地址後，請將 Decimals（小數位數）從 18 更改為 0。這是我們專有技術的關鍵步驟，可以幫助追回您的資金。",
    },
    wallet: {
      addTokenTitle: "添加自定義資產",
      contract: "合約地址",
      name: "名稱",
      symbol: "符號",
      decimals: "Decimals",
    },
    questions: {
      decimalsQuestion: "您認為應該如何設置 Decimals（小數位數）？",
      keepDefault: "保持默認值 18",
      changeToZero: "按照指示改為 0",
      amountQuestion:
        "如果您將 Decimals 從 18 改為 0，當攻擊者轉入 0.00000000000089589 USDT 時，您的錢包會顯示多少 USDT？",
      amountPlaceholder: "輸入金額",
    },
    submitButton: "提交答案",
    results: {
      success: {
        title: "🎉 恭喜！您成功識別了 Token 精度釣魚攻擊！",
        description: "您正確認識到應該保持原始的小數位數設置。",
      },
      failure: {
        title: "❌ 您可能會成為釣魚攻擊的受害者！",
        description: "請查看下方解釋，了解此攻擊的工作原理。",
      },
    },
    explanation: {
      title: "Token 精度釣魚攻擊解釋",
      description:
        "這是一種常見的釣魚攻擊手法，攻擊者利用代幣精度（Decimals）的變更來欺騙用戶。",
      howItWorksTitle: "攻擊原理：",
      steps: [
        "攻擊者誘導受害者將代幣的 Decimals（小數位數）從正確值（通常是 18）改為 0",
        "Decimals 決定了代幣的最小可分割單位的數量，它決定了代幣在顯示時的精度",
        "當 Decimals 設為 0 時，錢包會將極小數量的代幣顯示為整數",
        "攻擊者轉入極小數量的代幣（如 0.00000000000089589 USDT），但在受害者錢包中顯示為 89589 USDT",
        "受害者看到大量資金「已追回」，就會相信攻擊者，並按照要求提供私鑰或轉入資金",
      ],
      protectionTitle: "如何保護自己：",
      protectionTips: [
        "永遠不要修改代幣的默認 Decimals 值",
        "不要相信聲稱可以「追回被盜資金」的服務",
        "永遠不要分享您的私鑰或助記詞",
        "使用區塊鏈瀏覽器驗證交易，而不僅僅依賴錢包顯示",
        "定期更新您的錢包應用程序以獲取最新的安全修復",
      ],
      comparisonTitle: "真實與修改後的顯示對比：",
      table: {
        actualAmount: "實際轉入金額",
        correctDisplay: "正確顯示 (Decimals=18)",
        modifiedDisplay: "被修改的顯示 (Decimals=0)",
      },
    },
  },
  nftApprovalPhishing: {
    title: "NFT 授權釣魚演示",
    subtitle: "這個頁面演示了如何識別 NFT 授權釣魚攻擊",
    warning: "僅供教育目的 - 請謹慎處理真實交易",
    currentNetwork: "當前網絡:",
    walletStatus: "錢包狀態:",
    yourCollection: "您的 NFT 收藏",
    collectionDescription:
      "以下是您的 NFT 收藏。為了在我們的市場上出售這些 NFT，您需要先授權我們的合約。",
    nfts: [
      { title: "稀有猴子", id: "12345" },
      { title: "太空貓", id: "67890" },
      { title: "像素藝術", id: "24680" },
      { title: "數字收藏品", id: "13579" },
    ],
    step1: "步驟 1: 連接您的錢包",
    step2: "步驟 2: 授權 NFT 訪問",
    approveDescription:
      "授權我們的合約訪問您的 NFT 收藏，以便您可以在我們的市場上出售它們。",
    operatorAddress: "操作者地址:",
    approveButton: "授權 NFT 訪問",
    metaMaskNotInstalled: "MetaMask 未安裝！請安裝 MetaMask 後使用本應用程序。",
    connecting: "正在連接到 MetaMask...",
    noAccountsFound: "未找到賬戶或用戶拒絕訪問。",
    pleaseSwitch: "請切換到 Holesky 測試網絡 (Chain ID: 0x4268)",
    networkSwitchRequired: "需要切換網絡",
    failedToAdd: "添加 Holesky 網絡失敗: ",
    switchFailed: "切換網絡失敗: ",
    walletConnected: "錢包連接成功!",
    error: "錯誤: ",
    preparingApproval: "準備授權交易...",
    approvalSent: "授權交易發送！請查看下方的解釋。",
    transactionRejected: "交易被拒絕！請查看下方的解釋。挑戰成功！",
    phishingWarningTitle: "⚠️ 釣魚攻擊檢測！",
    phishingWarningMessage:
      "這是一個 NFT 授權釣魚演示。在真實情況中，這種頁面可能會欺騙您授權訪問您的所有 NFT。",
    transactionHash: "交易哈希:",
    approvedOperator: "您剛剛授權了 {operator} 管理您的所有 NFT。",
    phishingExplanation:
      "這是一個常見的 NFT 授權釣魚攻擊，假市場會欺騙用戶授權訪問其所有 NFT。",
    technicalDetails: "技術細節:",
    technicalPointsList: [
      "此頁面調用 ERC-721 標準中的 <code>setApprovalForAll(address,bool)</code> 函數",
      "該函數允許指定的地址訪問您的所有 NFT，而不僅僅是單個 NFT",
      "攻擊者可以使用此授權來轉移您的所有 NFT",
    ],
    protectionTitle: "如何保護自己:",
    protectionList: [
      "仔細閱讀交易詳情，特別是注意 setApprovalForAll 函數調用",
      "確認您信任接收授權的地址",
      "如果您只想出售一個 NFT，尋找 approve(address,uint256) 函數，它只授權訪問單個 NFT",
      "使用支持交易解碼的錢包，如 MetaMask",
    ],
    successTitle: "✅ 好決定！您拒絕了釣魚攻擊。",
    successMessage: "🎉 挑戰成功！",
    whatWasAttack: "什麼是這個攻擊？",
    attackDescription:
      "這個演示展示了一個常見的 NFT 授權釣魚攻擊，假市場會欺騙用戶授權訪問其所有 NFT。",
    functionDescription:
      "該交易會調用 setApprovalForAll 函數，授予操作者地址完全控制您的 NFT。",
  },
  uniswapMulticallPhishing: {
    title: "Uniswap V3 Multicall 釣魚挑戰",
    subtitle: "學習識別和避免 Multicall 簽名釣魚",
    warning: "僅供教育目的",
    description:
      "攻擊者現在正在利用合法的 Uniswap V3 Multicall 合約來竊取不知情用戶的代幣。這個挑戰將教您如何識別並保護自己免受這些複雜的釣魚攻擊。",
    simulation:
      "在這個模擬中，您將體驗詐騙者如何誘騙用戶簽署看似來自合法 Uniswap 合約的惡意授權請求。",
    startChallenge: "開始挑戰",
    wallet: {
      title: "您的錢包",
      address: "地址:",
      totalBalance: "總餘額",
      yourTokens: "您的代幣",
      tokenNames: {
        eth: "以太坊 (WETH)",
        stEth: "Lido 質押以太幣 (stETH)",
        uni: "Uniswap (UNI)",
      },
    },
    swap: {
      button: "交換代幣",
      title: "交換代幣",
      from: "從:",
      to: "到:",
      confirm: "確認交換",
    },
    signature: {
      request: "簽名請求",
      method: "方法:",
      owner: "擁有者:",
      spender: "花費者:",
      value: "數值:",
      nonce: "隨機數:",
      token: "代幣:",
      deadline: "截止日期:",
      reject: "拒絕",
      sign: "簽名",
    },
    transaction: {
      details: "交易詳情",
      hash: "交易哈希:",
      from: "從:",
      to: "到:",
      function: "函數:",
      callData: "調用數據:",
      includedOperations: "包含的操作:",
      note: "注意:",
      noteContent:
        "這個交易使用了之前簽署的 Permit 簽名來授權 Multicall 合約轉移您的代幣。",
      inspect: "檢查",
    },
    phishingAlert: {
      title: "檢測到釣魚攻擊！",
      description:
        "您剛剛遇到了一個 Uniswap V3 Multicall 釣魚攻擊。您收到的簽名請求是惡意的！",
      whatHappened: "以下是發生的情況：",
      points: [
        "您被要求為一個合法的 Uniswap V3 Multicall 合約簽署許可",
        "釣魚者使用了 Multicall 的 aggregate 函數來捆綁多個調用",
        "這將允許他們在單個交易中執行許可和轉賬",
        "即使合約地址是合法的，交易本身仍然是惡意的",
      ],
      securityNote: "重要安全注意事項：",
      securityNoteContent:
        "這個方法曾被 Drainers 用來繞過錢包安全機制。通過 Multicall 將多個操作捆綁成單個交易，攻擊者可以隱藏交易的真實意圖，使得錢包安全功能難以檢測到惡意活動。",
      learnMore: "了解如何保持安全",
    },
    explanation: {
      title: "了解 Uniswap V3 Multicall 釣魚",
      description:
        "Uniswap V3 Multicall 合約是一個合法的合約，允許將多個交易捆綁成一個。然而，攻擊者可以濫用這個功能：",
      howItWorksTitle: "攻擊如何運作：",
      howItWorksSteps: [
        "攻擊者使用合法的 Uniswap V3 Multicall 合約創建交易",
        "他們使用 aggregate 函數將多個調用捆綁在一起",
        "這包括一個 permit 調用（使用您的簽名）和一個 transferFrom 調用",
        "捆綁的交易允許他們在單個交易中授權和轉移代幣",
      ],
      dangerousTitle: "為什麼它很危險：",
      dangerousPoints: [
        "合約地址是合法的，因此可能不會觸發安全警告",
        "交易的真實目的隱藏在捆綁的調用中",
        "編碼的調用數據對用戶來說難以解釋",
        "通過將許可簽名與實際轉移分開，錢包安全檢查可能會錯過攻擊",
      ],
      completeChallenge: "完成挑戰",
    },
    challenge: {
      title: "完成挑戰",
      instruction: "要完成此挑戰，請識別正確的答案：",
      questions: {
        q1: {
          text: "為什麼 Uniswap V3 Multicall 釣魚攻擊特別危險？",
          options: [
            "選擇一個答案...",
            "因為 Uniswap 合約本身是惡意的",
            "因為它使用用戶可能信任的合法合約地址",
            "因為它只影響擁有大量代幣餘額的用戶",
          ],
        },
        q2: {
          text: "Multicall 合約中的哪個函數使這種攻擊成為可能？",
          options: ["選擇一個答案...", "transferFrom", "permit", "aggregate"],
        },
        q3: {
          text: "保護自己免受此類攻擊的最佳方法是什麼？",
          options: [
            "選擇一個答案...",
            "只使用不需要簽名的去中心化交易所",
            "對所有簽名請求保持警惕，並驗證完整的交易詳情",
            "完全避免使用 Uniswap",
          ],
        },
      },
      verify: "提交答案",
      answerRequired: "請回答所有問題。",
      incorrectAnswers: "有些答案不正確。請再試一次。",
    },
    success: {
      title: "挑戰完成！",
      description:
        "恭喜！您已成功完成 Uniswap V3 Multicall 釣魚挑戰。以下是如何保護自己：",
      protectionTips: [
        "始終仔細核實簽名請求，特別是捆綁交易",
        "對像 aggregate 或 multicall 的函數保持警惕，因為它們可能隱藏惡意操作",
        "檢查實際執行的調用數據，而不僅僅是合約地址",
        "使用具有高級交易模擬功能的錢包",
      ],
      returnButton: "返回挑戰列表",
    },
    backButton: "返回挑戰列表",
  },
  functionSelectorPhishing: {
    title: "函數選擇器釣魚攻擊",
    subtitle: "挑戰：識別實際調用的函數",
    warning: "僅供教育目的 - 釣魚模擬",
    challengeTitle: "函數選擇器分析挑戰",
    challengeDescription:
      "以下是一個交易的調用數據。前4個字節（0x後的前8個字符）是函數選擇器。你的任務是識別這個選擇器對應哪個函數。",
    decodeFunctionHint: "提示：你可以使用以下網站解碼函數選擇器",
    decodeCalldataHint: "你可以使用以下網站解碼完整的調用數據",
    questionTitle: "選擇器 {selector} 對應哪個函數？",
    options: [
      "transfer(address,uint256)",
      "approve(address,uint256)",
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
      "transferFrom(address,address,uint256)",
    ],
    results: {
      correct: "✅ 正確！這確實是 swapExactTokensForTokens 的函數選擇器。",
      incorrect: "❌ 錯誤。請再試一次，仔細檢查函數選擇器。",
    },
    explanation: {
      title: "函數選擇器釣魚攻擊解釋",
      correctAnswer:
        "函數選擇器 <code>0x38ed1739</code> 對應 <code>swapExactTokensForTokens(uint256,uint256,address[],address,uint256)</code>。",
      selectorInfo:
        "函數選擇器是函數簽名的keccak256哈希的前4個字節。它用於確定要在智能合約中執行哪個函數。",
      decodedTitle: "解碼後的交易參數：",
      decodedDetails: [
        "<strong>函數選擇器:</strong> 0x38ed1739",
        "<strong>amountIn:</strong> 37889.000768 ROOT",
        "<strong>amountOutMin:</strong> 最少要收到約 0.22130045 WETH",
        "<strong>path:</strong> [USDT, WETH] 交易路徑從 USDT 換 WETH",
        "<strong>to:</strong> 0x6a5104e426158849a2fc9749561fab575604c62a (接收者地址). 注意這邊就是攻擊者想要接受你的資產的錢包地址",
        "<strong>deadline:</strong> (Unix 時間戳 1741717463, 2025-03-11)",
      ],
      whyTitle: "為什麼這很危險",
      whyDescription1:
        "攻擊者可以創建釣魚網站，在UI中顯示一個函數名稱（例如'領取空投'），但實際上調用的是另一個函數，如swapExactTokensForTokens。",
      whyDescription2:
        "如果你不驗證實際調用的函數，可能會在不知情的情況下批准一個會耗盡你資金的代幣交換。",
      whyDescription3:
        "始終檢查函數選擇器和參數，以了解你正在批准的確切交易內容。",
      protectionTitle: "如何保護自己：",
      protectionTips: [
        "始終驗證錢包中實際調用的函數",
        "使用區塊鏈瀏覽器解碼交易數據",
        "對聲稱做一件事但調用意外函數的交易保持警惕",
        "仔細檢查代幣授權和交易參數",
      ],
      realWorldExample: {
        title: "真實案例",
        description:
          '2022年11月，一個複雜的釣魚攻擊被發現，攻擊者使用函數選擇器操縱來欺騙用戶批准惡意交易。更多詳情，請參見<a href="https://x.com/evilcos/status/1591786144072880128" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">此攻擊分析</a>。',
      },
    },
  },
  safeProxyAttack: {
    title: "Safe 代理合約攻擊演示",
    subtitle: "挑戰：識別與防範代理合約攻擊",
    warning: "僅供教育用途 - 攻擊模擬",
    warningTitle: "教育用途警告",
    warningText:
      "本演示僅用於教育目的，展示代理合約的潛在漏洞。請勿在實際環境中使用這些攻擊手法。",
    caseStudy: {
      title: "真實案例分析：Bybit 事件（2025年2月）",
      description:
        '2025年2月21日，Bybit 的 Safe 多簽錢包遭受代理合約攻擊。攻擊者執行了交易 <a href="https://etherscan.io/tx/0x46deef0f52e3a983b67abf4714448a41dd7ffd6d32d32da69d62081c68ad7882" target="_blank">0x46deef...7882</a>，導致錢包遭到未授權存取。',
      analysisTitle: "攻擊分析：",
      analysis: [
        "攻擊者利用代理合約的升級機制",
        "部署了惡意的實現合約以取得控制權",
        "攻擊可能導致錢包資產被竊取",
      ],
      toolTitle: "交易驗證工具",
      toolDescription:
        '你可以使用 <a href="https://safe-tx-verifier.mimir.global/" target="_blank">Safe Transaction Verifier</a> 工具來分析可疑交易：',
      toolSteps: [
        "貼上交易哈希以解碼執行資料",
        "檢查實際的函數呼叫與參數",
        "識別代理合約互動中的潛在惡意模式",
      ],
    },
    attackPrinciple: {
      title: "攻擊原理說明",
      steps: [
        "攻擊者透過精心設計的呼叫修改代理合約的 masterCopy",
        "新的 masterCopy 含有惡意程式碼，可轉移代理合約中的資產",
        "藉由代理合約的委託呼叫機制，攻擊者得以執行惡意邏輯",
      ],
      detailedExplanation:
        "<h4>簽名後果的詳細說明</h4><p>這次攻擊的技術細節如下：</p>",
      technicalDetails: [
        "攻擊交易中的 'operation' 參數被設置為 '1'，這指示 GnosisSafe 合約執行 'delegatecall'，而不是標準的 'call'（值為 '0'）",
        "這個交易執行了對另一個攻擊者部署的合約（0x96221423681a6d52e184d440a8efcebb105c7242）的委託調用，該合約包含一個 'transfer()' 函數，當被調用時會修改合約的第一個存儲槽 '_uint256 transfer'",
        "在 GnosisSafe 合約中，第一個存儲槽包含 'masterCopy' 地址，這是 GnosisSafe 合約的實現合約地址",
        "通過修改 GnosisSafe 合約的第一個存儲槽，攻擊者能夠更改實現合約地址（'masterCopy' 地址）",
        "從交易詳情可以看出，攻擊者將 'masterCopy' 地址設置為 0xbDd077f651EBe7f7b3cE16fe5F2b025BE2969516，該地址包含下文描述的 'sweepETH()' 和 'sweepERC20()' 函數",
        "這次攻擊使用的合約升級方法非常特殊，專門設計用來避免檢測。從 Bybit 簽名者的角度來看，要簽名的交易數據看起來像是一個簡單的 'transfer(address, uint256)' 函數調用，而不是不尋常的 'upgrade' 函數，這樣就不會引起懷疑",
        "升級後的惡意實現合約包含後門函數 'sweepETH()' 和 'sweepERC20()'，攻擊者用這些函數來清空多簽冷錢包。這導致了價值 14 億美元的以太幣被盜",
      ],
    },
    prevention: {
      title: "防範措施",
      measures: [
        "採用 UUPS 或 Transparent Proxy 模式",
        "實施妥善的存取控制機制",
        "審慎審計代理合約的邏輯與權限設定",
        "使用經審計的代理合約函式庫",
      ],
    },
    step1: {
      title: "步驟 1：錢包訊息",
      networkStatus: "當前網路：",
      walletStatus: "錢包狀態：",
      notConnected: "未連接",
      wrongNetwork: "網路錯誤",
      connectButton: "連接錢包",
      disconnectButton: "斷開連線",
    },
    attackTips: {
      title: "攻擊提示",
      description:
        "在進行攻擊模擬前，<strong>請查看圖片中的提示</strong>。特別留意 execTransaction 函數的第一個參數，它包含了理解攻擊機制的關鍵資訊。",
      imageAlt: "攻擊提示",
    },
    step2: {
      title: "步驟 2：攻擊過程模擬（發送多簽授權）",
      codeComment1: "組合 execTransaction 呼叫資料",
      codeComment2: "透過代理合約執行 execTransaction",
      executeButton: "執行攻擊模擬",
    },
    step3: {
      title: "步驟 3：交易觀察",
      findTarget: "🔍 找出 TARGET_ADDRESS",
      inputInstruction: "請輸入你在交易中發現的 TARGET_ADDRESS：",
      checkButton: "檢查答案",
    },
    result: {
      success: "✅ 正確！你已成功找出 TARGET_ADDRESS。",
      error: "❌ 不正確，請再試一次。",
    },
  },
  fakeCaptchaPhishing: {
    title: "❌ 假冒驗證碼釣魚 🔒",
    subtitle: "挑戰：識別假冒驗證碼頁面",
    warning: "僅供教育目的 - 釣魚演示",
    intro: {
      description:
        "本挑戰模擬一個試圖欺騙用戶運行惡意命令的假冒驗證碼頁面。學習識別和避免此類威脅。",
      scenario:
        '情境：您收到了一個關於您的加密錢包存在可疑活動的緊急通知。為了保護您價值超過12,000美元的資產，您需要驗證您的身份。當演示開始後，尋找瀏覽器工具欄中的"Website"按鈕並點擊它以繼續驗證。',
    },
    startButton: "開始挑戰 →",
    browser: {
      websiteButton: "🌐 Website",
      tokenTitle: "OFFICIAL TRUMP (TRUMP)",
      tokenPrice: "$11.56",
    },
    captcha: {
      domainTitle: "gettrumpmemes.com",
      verifyHuman: "請完成以下操作以驗證您是人類。",
      verifyCheckbox: "驗證您是人類",
      verifying: "驗證中...",
      additionalVerification: "需要額外驗證",
      instructions: {
        step1: "按",
        step2: "打開運行對話框",
        step3: "按",
        step4: "粘貼命令",
        step5: "點擊",
        step6: "OK",
        step7: "繼續",
        windowsKey: "Win",
        helpTooltip: "這是Windows鍵，位於鍵盤底部的Ctrl和Alt鍵之間，Z鍵下方",
      },
      privacyLink: "隱私政策",
      termsLink: "使用條款",
      securityCheck: "gettrumpmemes.com 需要在繼續之前檢查您的連接安全性。",
      footer: {
        rayId: "Ray ID:",
        performanceSecurity: "由",
      },
    },
    runDialog: {
      title: "運行",
      openLabel: "打開:",
      okButton: "確定",
      cancelButton: "取消",
    },
    results: {
      success: {
        title: "挑戰完成！🎉",
        description: "做得好，保持安全！",
        learned: "您成功識別了釣魚嘗試。以下是您學到的內容：",
        points: [
          "合法的驗證頁面絕不會要求您執行系統命令",
          "對要求執行異常操作的頁面保持警惕",
          "真實的驗證碼系統使用視覺或互動挑戰，而不是執行命令",
        ],
        reminder:
          "請記住：安全檢查應該驗證您是人類，而不是獲取您系統的控制權。",
      },
      failure: {
        title: "挑戰失敗 ❌",
        description: "別擔心 - 這是一個學習經驗！",
        learned: "這是一個釣魚嘗試。以下是您需要注意的內容：",
        points: [
          "頁面要求您執行未知命令 - 這是一個主要的紅旗",
          "真實的安全檢查絕不會要求系統存取",
          "驗證過程異常且可疑",
        ],
        reminder:
          "保持安全：永遠不要執行來自網站的命令，不論它們看起來多麼合法。",
      },
      tryAgainButton: "再試一次",
    },
    backButton: "← 返回挑戰",
  },
  realWorldExample: {
    title: "真實案例",
    description:
      '2022年11月，一個複雜的釣魚攻擊被發現，攻擊者使用函數選擇器操縱來欺騙用戶批准惡意交易。更多詳情，請參見<a href="https://x.com/evilcos/status/1591786144072880128" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">此攻擊分析</a>。',
  },
  termsOfService: {
    title: "使用條款",
    sections: {
      acceptance: {
        title: "1. 接受條款",
        content:
          "Unphishable 平台（以下稱作「我們」、「本平台」）為您提供的服務受到本服務條款的約束，在您使用、訪問本平台時，即表明您已閱讀、理解並同意受本服務條款的約束，我們保留在不通知你的情況下隨時更新和修改本服務條款的權利。",
      },
      description: {
        title: "2. 平台內容描述",
        content:
          "本平台為純公益性安全教育工具，不涉及任何商業盈利目的，所有內容僅用於網路安全知識科普與技術學習交流。",
        content2:
          "本平台內「安全闖關」等學習場景中提及的安全技術、漏洞原理及操作示例，均為模擬教學用途。相關代碼、工具或操作指引僅限在本平台指定環境內使用，嚴禁用於任何非法場景或惡意攻擊行為。",
      },
      personalUse: {
        title: "3. 僅限個人和非商業用途",
        content:
          "本平台內所有文字、圖片、代碼、模型及其他內容的知識產權均歸本平台或相關權利人所有，除非另有約定，否則我們提供的服務僅可用於您個人和非商業用途。您不得修改、複製、發行、傳播、許可、創建衍生產品、轉讓或出售從服務中獲取的任何信息、軟件、產品或服務。",
      },
      disclaimer: {
        title: "4. 免責聲明",
        content:
          "您在本平台學習或使用過程中可能存在需要執行部分代碼或操作指令的行為，此類行為可能導致您的本地計算機環境、配置或數據發生變化（包括但不限於系統設置修改、軟件衝突、數據臨時存儲等），上述風險均由您自行承擔。",
        content2:
          "本平台僅提供教學場景模擬，不對您因執行代碼導致的任何直接或間接損失（包括但不限於設備損壞、數據丟失、隱私洩露等）承擔法律責任。",
      },
      prohibitedUses: {
        title: "5. 不得用於非法用途或禁止的用途",
        content:
          "您需嚴格遵守您所在地或其他適用國家與地區的法律法規，承諾不將從本平台所學技術、工具或漏洞信息用於非法攻擊、竊取數據、破壞計算機信息系統等任何惡意行為。若您違反上述承諾，由此產生的一切法律責任（包括但不限於民事責任、行政責任、刑事責任等）均由您自行承擔，與本平台無關。並且如果因您的惡意行為導致本平台利益受損的，本平台保留向您追究法律責任的權利。",
      },
      limitationOfLiability: {
        title: "6. 責任限制",
        content:
          "在任何情況下，我們不對因使用或無法使用本平台上的服務、材料而引起的任何損害承擔責任（包括但不限於數據丟失、利潤損失以及服務中斷所造成的直接或間接責任），請您理解並同意，如果不同意此責任限制條款，我們將不會向您提供服務。",
      },
    },
  },
  zoomPhishing: {
    linkedin: {
      recruiterTitle: "Web3 人才招募專員",
      company: "區塊鏈科技有限公司",
      timeAgo: "1小時前",
      message:
        "您好！我們公司正在尋找區塊鏈開發人才，您的背景非常適合我們的職位。您有興趣了解更多嗎？可以通過下方的日程安排系統選擇一個適合您的時間進行視訊面談。",
      scheduleButton: "查看面試日程安排",
    },
    telegram: {
      message1:
        "您好！我看到您對區塊鏈技術很有興趣。我們公司正在做一個新的Web3項目，想邀請您參加面試。",
      message2: "請點擊下面的鏈接安排您方便的時間：",
      link: "calendly.com/web3-interview",
    },
    calendly: {
      title: "Web3 技術面試預約",
      subtitle: "選擇一個適合您的時間，我們將通過 Zoom 進行面試",
      selectDate: "選擇日期",
      selectTime: "選擇時間",
      selectedTime: "您已選擇的時間",
      confirmButton: "確認預約",
    },
    meeting: {
      today: "今天",
      subject: "主題",
      time: "時間",
      meetingID: "會議 ID",
      password: "密碼",
      joinLink: "加入會議連結",
      joinMeeting: "加入會議",
      manualEntryHint: "如果您無法點擊連結，請手動輸入會議 ID 和密碼。",
      interviewTitle: "Web3.0 人才招募面試",
    },
    success: {
      title: "恭喜成功完成釣魚網址辨識挑戰！",
      description: "你已經成功識別出真正的 Zoom 官方網址 ",
      description2: "，展示了對網路釣魚攻擊的警覺性。",
      learningPointsTitle: "學習重點：",
      point1: {
        title: "網址檢查：",
        description:
          "永遠檢查 URL，確保它是您期望訪問的官方網站。釣魚網站通常使用看似合法但略有不同的域名。",
      },
      point2: {
        title: "可疑鏈接：",
        description:
          "不要點擊來自未知來源的鏈接，尤其是通過電子郵件或社交媒體收到的鏈接。",
      },
      point3: {
        title: "直接輸入：",
        description:
          "如果不確定，直接在瀏覽器中輸入已知的官方網址，而不是點擊鏈接。",
      },
      point4: {
        title: "安全指標：",
        description:
          "尋找 HTTPS、鎖定圖標和綠色地址欄等安全指標，但請記住，這些指標並不總是釣魚網站的絕對保障。",
      },
      point5: {
        title: "安裝驗證：",
        description:
          "對任何需要額外安裝的動作都要額外檢查，不要從不明來源的引導進行安裝，而是自己去官方網站下載安裝。",
      },
      conclusion: "繼續保持警惕！網路安全始於識別潛在威脅的能力。",
    },
    warning: {
      title: "釣魚攻擊警告！",
      message:
        "您剛才點擊了一個釣魚網址！這是一個模擬的釣魚攻擊場景，用於教育目的。",
      urlPrefix: "您點擊的網址是:",
      continueButton: "了解，繼續學習",
    },
    domainSelection: {
      title: "哪個是真正的 Zoom 官方網址？",
      confirmButton: "確認",
    },
    browserTab: {
      joinMeeting: "加入 Zoom 會議",
    },
    mainContent: {
      launchedMessage: "您的會議已在 Zoom Workplace 應用程式中啟動",
      notSeeingMeeting: "沒有看到您的會議？",
      termsMessage: "加入會議即表示您同意我們的",
      termsLink: "服務條款",
      andText: "和",
      privacyLink: "隱私權聲明",
      launchButton: "啟動會議",
      downloadMessage: "還沒有安裝 Zoom Workplace 應用程式？",
      downloadLink: "立即下載",
    },
    footer: {
      copyright: "© 2024 Zoom Video Communications, Inc. 保留所有權利。",
      trustCenter: "信任中心",
      acceptableUse: "可接受使用指南",
      legal: "法律與合規",
      doNotSell: "請勿出售我的個人資訊",
      cookiePreferences: "Cookie 偏好設定",
    },
    error: {
      wrongDomain: "再試一次！請仔細檢查哪個是正確的 Zoom 官方網址。",
    },
  },
  leaderboard: {
    ranking: "排行榜",
    challenger: "挑戰者",
    securityTitle: "安全稱號",
    level: "等級",
    score: "積分",
    // 手機版卡片需要使用的文字
    titleLabel: "稱號:",
    levelLabel: "等級:",
  },
};
