export default {
  privacy: {
    title: "Privacy Policy",
    welcome:
      "Welcome to the Unphishable platform (“Unphishable,” “we,” “our,” “us”). Unphishable is a security education platform dedicated to enhancing users’ cybersecurity awareness and technical skills through simulated real-world scenarios. By using this platform, you agree to the collection, use, and storage of your information in accordance with this Privacy Policy. We care about your privacy, and this Privacy Policy is intended to help you understand what information we collect and why we collect it.",
    description: "",
    sections: {
      informationCollection: {
        title: "1. Information We Collect",
        description:
          "Depending on your interactions with us, we may collect different types of personal information about you, including but not limited to information you provide directly to us, information we collect automatically, and information we obtain from third parties. We collect this information to provide you with a better experience, tailor content to your needs, and ensure an enhanced and personalized learning experience.",
        subsections: {
          provided: {
            title: "1.1 Information You Provide to Us",
            content:
              "When you provide personal information directly to us, we collect such information, which may include: your name, email address, phone number, billing address, payment information, interests, and other similar information.",
          },
          automatic: {
            title: "1.2 Information We Collect Automatically",
            content:
              "In addition to the personal information which you provide to us, we automatically collect certain information, which may include: unique identifier information, browser type and settings, device type and settings, operating system, mobile network information (including carrier name and phone number), and application version number. We also collect information about your interactions with the platform via your application, browser, and device, which may include the specific pages you visit on this website, the dates and times of your visits, the number of visits, the time spent on pages, your IP address, crash reports, and other similar data.",
          },
          thirdParty: {
            title: "1.3 Information We Obtain from Third Parties",
            content:
              "When you log in or link your account through third-party websites, we receive your personal information from those third-party websites. For example, if you log in using your Facebook or X (Twitter) account, we will receive your personal information from the respective social media platforms. We may also receive personal information from other third-party sources, including but not limited to public databases and information provided by our partners, which may be personal or anonymized.",
          },
        },
      },
      cookies: {
        title: "2. Cookies",
        content:
          "Cookies are small text files stored on your computer that help provide a smoother browsing experience by remembering your identity and preferences. We use cookie technology to collect data about your interactions with the website. This data helps us analyze your usage behavior, improve the website’s functionality, and optimize your experience. The information we collect includes the pages you visit, the time spent on the website, and your interactions with different parts of the website. All collected data is aggregated and anonymized to ensure your privacy is protected. By continuing to use our website, you consent to our use of cookies and data analysis as described in this policy.",
      },
      personalizedServices: {
        title: "3. Providing Personalized Services",
        content:
          "We use the information we collect to analyze your learning needs and preferences in order to provide you with personalized services, including recommending security education courses and offering customized content and tailored simulated real-world operational training.",
      },
      updates: {
        title: "4. Updates to This Privacy Policy",
        content:
          "We reserve the right to update or modify this Privacy Policy at any time. Please review this policy periodically to stay informed of any changes. We will not provide additional notice of updates.",
      },
      contact: {
        title: "5. Contact Us",
        content:
          "If you have any questions about this Privacy Policy, please contact us.\n E-mail: defihacklabs@gmail.com ",
      },
    },
  },
  challengeCompletionModal: {
    congratulations: "Congratulations!",
    completed: "You have completed the",
    challenge: "Challenge Passed",
    earned: "and earned",
    experiencePoints: "experience points",
    nextChallenge: "Next Challenge →",
    challengeCompletion: "Challenge Completion， go to challenge list",
    calculating: "Calculating...",
    backToList: "Back to List",
  },
  googleSpoofedPhishing: {
    title: "Google Spoofed Phishing Challenge",
    subtitle:
      "Learn to identify email spoofing attacks that impersonate Google",
    scenario: {
      title: "Scenario",
      description:
        "You've received an email that appears to be from Google alerting you about suspicious activity on your account. The email asks you to verify your identity by clicking a link.",
    },
    email: {
      title: "Email",
      subject: "Security alert",
      content:
        "We've detected unusual activity in your Google Account. Someone may have accessed your account from a new device.\n\nLocation: Kiev, Ukraine\nTime: April 10, 2025, 6:27 AM GMT+2\nDevice: Windows PC\n\nIf this wasn't you, your account may have been compromised. Please verify your identity immediately to secure your account.",
      action: "Click the button below to verify your identity:",
      button: "Verify Identity",
      authentication: {
        title: "Email Authentication:",
        spf: "SPF: PASS",
        dkim: "DKIM: PASS",
        dmarc: "DMARC: PASS",
      },
    },
    securityCheck: {
      title: "Security Check",
      question1: {
        title:
          "What domain was this email actually sent from? (Check the email headers)",
        placeholder: "Enter domain name (e.g., example.com)",
        hint: "Look for 'Received from' or 'Return-Path' in the email headers",
      },
      question2: {
        title: "Is this a legitimate email from Google?",
        option1: "Yes, it's legitimate",
        option2: "No, it's a phishing attempt",
      },
      submitButton: "Submit Answers",
    },
    challengeResult: {
      success: {
        title: "Correct! You've identified the phishing attempt.",
        description:
          "This email was spoofed to appear as if it came from Google, but it was actually sent from privateemail.com. Despite passing SPF, DKIM, and DMARC checks, the email is fraudulent.",
      },
      failure: {
        title: "Incorrect. Try again!",
        tryAgain: "Try Again",
      },
    },
    fakeSupport: {
      urlBar:
        "sites.google.com/u/0/d/1XMlxkFiq54WpH2tKqay2EPnhN0Ukovet/preview",
      title: "Support Cases",
      tabs: {
        allCases: "All cases",
        open: "Open",
        inProgress: "In progress",
        resolved: "Resolved",
        closed: "Closed",
      },
      searchPlaceholder: "Search support cases",
      caseDetails: {
        title: "Legal Investigations Support",
        status: {
          inProgress: "IN PROGRESS",
          urgent: "URGENT",
        },
        reference: "Internal Ref #GS-17-000918456 • Opened Apr 9, 2025",
        description1:
          "Your legal request is currently under review. This matter requires additional documentation for processing.",
        description2:
          "Our team has received your submitted documents and supporting materials. Review is in progress to determine next steps.",
        documentReview: {
          title: "Legal Documentation Review - In Progress",
          estimatedCompletion: "Estimated review completion: Apr 11, 2025",
        },
        buttons: {
          uploadDocuments: "Upload additional documents",
          viewCase: "View case",
        },
      },
      footer: {
        privacy: "Privacy",
        terms: "Terms",
        help: "Help",
        about: "About",
        copyright: "© 2025 Google LLC",
      },
    },
    challengeAnalysis: {
      title: "Challenge Analysis",
      keyFindings: {
        title: "Key Findings",
        points: [
          "The email headers reveal that the message passed through privateemail.com before reaching the final destination.",
          "Despite having legitimate-looking authentication results (DKIM, SPF, DMARC), the email routing path shows suspicious relay points.",
          "The fake Google Support page is hosted on sites.google.com, which is a common tactic used by phishers to make URLs look legitimate.",
        ],
      },
      securityLessons: {
        title: "Important Security Lessons",
        lessons: [
          "Always check email headers to trace the actual path of the email, not just the authentication results.",
          "Be suspicious of any request asking you to verify your identity or account security through a third-party domain.",
          "Google will never ask you to verify your account through a user-created Sites page.",
          "Even if an email passes DKIM/SPF/DMARC checks, it might still be part of a sophisticated phishing attempt.",
        ],
      },
      preventionTips: {
        title: "Prevention Tips",
        tips: [
          "Always access Google services directly through google.com, not through links in emails.",
          "Enable two-factor authentication on your accounts.",
          "Report suspicious emails to your organization's security team.",
          "When in doubt, contact Google support directly through official channels.",
        ],
      },
    },
  },
  transactionSimulationSpoofing: {
    title: "Transaction Simulation Spoofing Challenge",
    description:
      "This page demonstrates how attackers exploit the time gap between transaction simulation and execution",
    warning:
      "For educational purposes only - exercise caution with real transactions",

    scenario: {
      title: 'Scenario: The "Free NFT Claim" Trap',
      description1:
        'Imagine you receive a message claiming you\'re eligible for a limited edition "Early Supporter NFT." The website looks professional and claims you only need to pay a tiny fee of 0.00001 ETH plus gas to claim this NFT.',
      description2:
        'When you connect your wallet and click the "Claim" button, your wallet shows a transaction simulation indicating it\'s just a simple claim operation with a minimal fee. However, the contract contains malicious code that can steal your assets during execution.',
    },

    buttons: {
      claimNFT: "Claim NFT",
    },

    howItWorks: {
      title: "How It Works",
      step1:
        "Transaction simulation is a feature in modern Web3 wallets that allows users to preview the result of a transaction before it's executed.",
      step2:
        "However, there's a time gap between simulation and actual execution, which malicious actors can exploit to deceive users.",
      step3:
        "Attackers can change contract states after simulation but before execution, causing the actual transaction result to be completely different from what was simulated.",
    },

    exploitation: {
      title: "The Exploitation Mechanism",
      description:
        "The core vulnerability lies in the time gap between transaction simulation and execution. Malicious actors have developed phishing sites that can manipulate on-chain states during this crucial window, leading to devastating results.",
      steps: [
        'Attackers create a seemingly legitimate DeFi site offering "free airdrops" or other enticing rewards.',
        "When users attempt to claim the reward, the site prompts them to sign a transaction.",
        "The user's wallet shows a transaction simulation indicating it's just a simple claim operation that will only cost a small amount of ETH for gas.",
        "However, after the user confirms but before the transaction is mined, the attacker's backend rapidly changes the contract state.",
        "When the transaction is finally executed, it actually transfers all assets from the user's wallet to the attacker's address.",
      ],
    },

    realWorldExamples: {
      title: "Real-World Examples",
      description:
        'In 2025, multiple users lost millions of dollars interacting with seemingly legitimate DeFi platforms. These platforms used transaction simulation spoofing to make users believe they were executing safe transactions when they were actually authorizing completely different operations. For more details, see <a href="https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Transaction Simulation Spoofing: A New Threat in Web3</a>.',
    },

    protection: {
      title: "Protection Guidelines",
      description:
        "To protect yourself from these sophisticated attacks, follow these guidelines:",
      guidelines: [
        "Thoroughly check transaction details - Don't rely solely on simulation previews",
        "Independently verify all contract interactions - Use blockchain explorers to check contract code and interactions",
        'Be skeptical of "free claim" offers - If it sounds too good to be true, it probably is',
        "Stick to trusted and verified dApps - Use official websites and carefully check URLs",
        "Consider using security tools - Extensions like ScamSniffer can help identify phishing attempts",
        "Check transaction timestamps - If simulation results are more than a few seconds old, be wary",
      ],
    },

    quiz: {
      title: "Knowledge Check",
      question: "What makes Transaction Simulation Spoofing attacks possible?",
      options: {
        incorrect1: "Smart contract vulnerabilities in the wallet software",
        correct: "The time gap between transaction simulation and execution",
        incorrect2: "Phishing emails that steal private keys",
      },
      correctMessage:
        "Correct! Transaction Simulation Spoofing exploits the time gap between when a transaction is simulated and when it's actually executed. During this gap, attackers can modify the contract state, causing the actual transaction outcome to differ from what was shown in the simulation.",
      incorrect1Message:
        "Not quite. While wallet software vulnerabilities can be exploited in other attacks, Transaction Simulation Spoofing specifically exploits the time gap between transaction simulation and execution.",
      incorrect2Message:
        "Not quite. Phishing emails that steal private keys are a different type of attack. Transaction Simulation Spoofing specifically exploits the time gap between transaction simulation and execution.",
    },

    transactionReview: {
      title: "Review Simulated Transaction",
      nftName: "MetaApes Club NFT Claim",
      website: "earlyapes.xyz",
      simulationTitle: "Transaction Simulation",
      secondsAgo: "seconds ago",
      function: "Function:",
      receive: "You will receive:",
      fee: "Fee:",
      gasFee: "Gas fee:",
      nftAmount: "1x Early Supporter NFT",
      feeAmount: "0.00001 ETH ($0.02)",
      gasFeeAmount: "~0.002 ETH ($3.50)",
      note: "Note:",
      noteDescription:
        "This simulation is based on current contract state. Actual results may vary if contract state changes before execution.",
    },

    metamask: {
      signatureRequest: "Signature Request",
      website: "Website:",
      action: "Action:",
      claimNFT: "Claim NFT",
      fee: "Fee:",
      gasFee: "Gas fee:",
      authorizeMessage:
        "By signing this message, you authorize the transfer of 1 ETH from your wallet.",
      processingTransaction: "Processing Transaction...",
      pleaseWait: "Please wait while your transaction is being processed.",
      resultTitle: "Transaction Executed!",
      warningTitle: "Warning: Unexpected Result",
      warningDesc:
        "The transaction outcome differs from what was shown in the simulation.",
      expected: "Expected (Simulation)",
      expectedReceive: "Receive: 1x Early Supporter NFT",
      expectedFee: "Fee: 0.00001 ETH ($0.02)",
      expectedGasFee: "Gas fee: 0.002 ETH ($3.50)",
      actual: "Actual (Execution)",
      actualReceive: "Receive: Nothing",
      actualFee: "Fee: 1 ETH ($1,750)",
      actualGasFee: "Gas fee: 0.002 ETH ($3.50)",
      whatHappened: "What Happened?",
      explanation1:
        "This is a Transaction Simulation Spoofing attack. Between the simulation and execution, the attacker changed the contract state, resulting in a completely different outcome than what was shown in the simulation.",
      explanation2:
        "In this case, the transaction actually approved the attacker to spend all your tokens, rather than claiming an NFT.",
    },

    educationalMessage:
      "This is a safe educational simulation to help you understand transaction simulation spoofing attacks. There is no risk involved, so feel free to continue with the simulation to learn more about this attack method.",
  },
  governanceProposalPhishing: {
    title: "DAO Governance Proposal Voting Challenge",
    subtitle:
      "Learn to identify and avoid malicious governance proposal phishing attacks",
    warning:
      "Educational Purpose Only - This is a simulation of a malicious governance proposal",
    proposalTitle: "Emergency Security Proposal #42",
    proposalDescriptionLabel: "Proposal Description:",
    proposalDescription:
      "In response to a recently discovered security vulnerability, we need to urgently update the protocol's security parameters. This will protect all users' funds.",
    proposerLabel: "Proposer:",
    proposer: "Core Development Team",
    deadlineLabel: "Deadline:",
    deadline: "Within 24 hours",
    buttonVoteFor: "Vote For",
    buttonVoteAgainst: "Vote Against",
    walletStatus: {
      pleaseConnect: "Please connect your wallet",
      connected: "Wallet connected! You can now vote.",
      connectionError: "Error connecting wallet",
      installMetaMask: "Please install MetaMask wallet",
      connectFirst: "Please connect your wallet first",
    },
    challengeResult: {
      success: {
        title: "Challenge Successful!",
        description:
          "Congratulations! You successfully identified and rejected the phishing attempt. In real DAO governance proposals, attackers might try to trick you into signing malicious messages that could give them control over your assets.",
      },
      failure: {
        title: "Challenge Failed!",
        description:
          "You signed a malicious message! In a real scenario, this could lead to your assets being stolen. Attackers often disguise as emergency governance proposals to trick users into signing messages that appear harmless but actually authorize asset transfers.",
      },
    },
    protectionTips: {
      title: "Protection Tips:",
      tips: [
        "Always carefully read the content of messages you are asked to sign.",
        "Be suspicious of urgent or time-sensitive proposals, which is a common urgency tactic.",
        "Verify the authenticity of governance proposals through official channels.",
        "Use wallets that support message signature previews, like MetaMask.",
      ],
    },
    buttons: {
      retryChallenge: "Retry Challenge",
      connectWallet: "Connect Wallet",
      backToChallenges: "← Back to Challenges",
    },
    phishingAnalysis: {
      warning: "Warning: This was a phishing attempt!",
      voteMessage:
        "The vote was actually asking you to sign the following message:",
      signatureConsequence:
        "If you had signed this message, an attacker could use your signature to transfer your assets.",
      alwaysRead:
        "In a real situation, always carefully read the message content you're being asked to sign!",
      title: "Phishing Technique Analysis",
      description:
        "This challenge simulated a common DAO governance proposal phishing attack:",
      techniques: [
        "Attacker poses as a legitimate DAO governance platform sending a vote request",
        "The vote appears to be about an emergency security proposal, creating urgency",
        "In reality, the message you're asked to sign is completely different from the proposal shown",
        "If you sign the message, the attacker can use your signature to steal assets",
      ],
      protectionTitle: "Protective Measures:",
      protectionMeasures: [
        "Always carefully read the actual message content shown in MetaMask",
        "Verify that signature requests come from trusted sources",
        "Be suspicious of urgent or time-sensitive requests",
        "Use dedicated governance platforms (like Snapshot) for DAO voting",
      ],
      whatWentWrong: "What went wrong?",
      signedMessage: "You signed a malicious message that said:",
      attackerCould:
        "In a real scenario, an attacker could use this signature to steal your assets.",
    },
  },
  advancedGovernancePhishing: {
    title: "Advanced Governance Phishing Attack",
    subtitle:
      "Challenge: Identify the Sophisticated Governance Phishing Technique",
    warning: "Educational Purpose Only - Phishing Simulation",
    description:
      "This challenge simulates a real-world phishing attack targeting DeFi governance participants",
    scenario: {
      title: "Scenario Description",
      description:
        "You are a governance participant in the QuantumDAO protocol with significant voting power. You receive an email notification about an urgent governance proposal that requires immediate attention. The email contains a link to what appears to be the QuantumDAO governance portal.",
    },
    warning_detail:
      "Warning: This is a simulated phishing scenario. The interface below is designed to demonstrate sophisticated phishing techniques targeting DeFi governance participants. No real transactions will be executed.",
    note: "⚠️ Note: This is a phishing simulation challenge. Please observe carefully and identify potential phishing techniques.",
    urlBar: {
      domainWarning:
        "Warning: This domain uses Greek letter α (alpha) to impersonate letter a",
    },
    governance: {
      logo: "QuantumDAO Governance",
      tabs: {
        dashboard: "Dashboard",
        proposals: "Proposals",
        delegate: "Delegate",
        forum: "Forum",
      },
      connectWallet: "Connect Wallet",
      proposal: {
        title: "QIP-137: Emergency Security Update for Treasury Management",
        id: "ID: 0x7a9d...e3f2",
        status: "Active",
        description:
          "This emergency proposal addresses a critical security vulnerability in the QuantumDAO treasury management system. The vulnerability could potentially allow unauthorized access to treasury funds. This proposal implements a security patch by updating the treasury management contract to a new audited version.",
        stats: {
          for: "For",
          against: "Against",
          abstain: "Abstain",
          required: "Required",
          remaining: "Remaining",
        },
        buttons: {
          voteFor: "Vote For",
          voteAgainst: "Vote Against",
          abstain: "Abstain",
        },
      },
      pastProposal: {
        title: "QIP-136: Protocol Fee Adjustment",
        id: "ID: 0x3b2c...9f7a",
        status: "Passed",
        description:
          "This proposal adjusts the protocol fee structure to optimize revenue generation while maintaining competitive rates for users. The fee adjustment will increase the sustainability of the protocol's treasury.",
      },
    },
    walletPrompt: {
      message1:
        "To vote on this proposal, you need to sign a message confirming your vote. This is a standard procedure to verify your ownership of the governance tokens.",
      message2:
        "Please review the transaction details carefully before signing.",
      signButton: "Sign Transaction",
    },
    metamaskPopup: {
      title: "Signature Request",
      countdown: "Urgent: Proposal voting ends in",
      gasOptimization:
        "Gas Optimization Available: Using batched transaction to save up to 45% on gas fees. Click Sign to approve the optimized transaction.",
      rejectButton: "Reject",
      signButton: "Sign",
      voteTypes: {
        for: "FOR",
        against: "AGAINST",
        abstain: "ABSTAIN",
      },
      signatureMessage:
        "Sign message to confirm your {voteType} vote on QIP-157: Protocol Upgrade and Fund Security\n\nNonce: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e\nExpiry: 1h\nVote Type: {voteType}\n\nTransaction Data:\n{transactionData}\n\nFunction call:\n{maliciousFunction}({voteValue}, 0x157)\n\nWarning: By signing this message, you are confirming your vote on the governance proposal.",
    },
    challenge: {
      title: "Your Challenge",
      description:
        "Examine the QuantumDAO governance interface above carefully. Can you identify the phishing indicators and the techniques being used in this sophisticated attack?",
      instruction:
        'Click on the "Connect Wallet" button to proceed with the simulation and test your ability to identify governance phishing techniques.',
      questions: {
        question1: {
          title:
            "Question 1: What phishing techniques are being demonstrated in this simulation?",
          options: [
            "Standard URL spoofing with a typosquatted domain",
            "Social engineering through false urgency and critical vulnerability claims",
            "Malicious transaction signature that transfers governance tokens instead of casting a vote",
            "All of the above",
          ],
        },
        question2: {
          title:
            "Question 2: What does the method selector 0x0900f010 represent?",
          options: [
            "vote(bool,uint256)",
            "upgrade(bool,uint256)",
            "approveAndCall(address,uint256)",
            "Cannot determine without checking contract ABI",
          ],
        },
        submitButton: "Submit Answer",
      },
      success: {
        title:
          "Correct! This simulation demonstrates multiple phishing techniques:",
        points: [
          "URL spoofing with a similar-looking domain name",
          'Creating false urgency with an "emergency" proposal',
          "Exploiting trust in governance processes",
          "Requesting a malicious transaction signature that would actually transfer your tokens or grant approvals",
        ],
        conclusion:
          "In real governance systems, always verify the authenticity of the platform by checking the URL carefully, confirming the proposal through official channels, and using a hardware wallet that shows exactly what you're signing.",
        congratulation:
          "CHALLENGE SUCCESSFUL! You've learned how to identify sophisticated governance phishing attacks.",
      },
      failure: {
        title:
          "That's not quite right. Please try again and look more carefully at the phishing techniques being used in this simulation.",
      },
    },
    educational: {
      title: "Educational Content: Governance Phishing Attacks",
      description:
        "Governance phishing attacks are becoming increasingly sophisticated as DeFi protocols adopt more complex governance mechanisms. These attacks specifically target governance participants who often control significant voting power and assets.",
      techniques: {
        title: "Common Governance Phishing Techniques:",
        list: [
          "<strong>False Urgency:</strong> Creating a sense of emergency to push users into making hasty decisions without proper verification.",
          "<strong>Spoofed Interfaces:</strong> Creating exact replicas of governance platforms with subtle differences that are hard to notice.",
          "<strong>Malicious Signature Requests:</strong> Instead of requesting a signature for voting, the phishing site requests signatures that authorize token transfers or approvals.",
          "<strong>Fake Proposals:</strong> Creating convincing but fake governance proposals that appear legitimate.",
        ],
      },
      protection: {
        title: "How to Protect Yourself:",
        list: [
          "Always verify the URL of governance platforms carefully.",
          "Cross-check important proposals through multiple official channels (Discord, Twitter, official forum).",
          "Use a hardware wallet that displays exactly what you're signing.",
          'Be suspicious of proposals claiming "emergency" status without verification from team members.',
          "Check the contract address you're interacting with against known official addresses.",
        ],
      },
      realWorldExample:
        "In 2025, several major DeFi protocols experienced governance phishing attacks that resulted in significant losses. These attacks exploited the trust users place in governance systems and the complexity of the voting mechanisms.",
    },
    backButton: "← Back to Challenges",
  },
  discordBookmarkAttack: {
    title: "Discord Bookmark Attack Simulation",
    subtitle: "Learn to identify and avoid malicious Discord bookmark attacks",
    warning:
      "Educational Purpose Only - This is a simulation of a malicious bookmark attack",
    description:
      "This page simulates how attackers might try to gain access to Discord permissions through malicious bookmarks.",
    verificationTitle: "Discord Verification",
    verificationDescription:
      "Drag and drop the button below into an open Discord window to verify your account.\nYou may also bookmark the link contained in this button so that you may click on the bookmark while on Discord to verify your account.",
    dragButton: "Drag me",
    bookmarkAttackExplanation: {
      title: "How Bookmark Attacks Work",
      description:
        "Bookmark attacks involve tricking users into adding malicious JavaScript code to their browser bookmarks. When clicked on Discord, these bookmarks can execute harmful code, stealing sensitive information or taking control of accounts.",
    },
    warningTitle: "Malicious Bookmark Detected!",
    warningDescription:
      "You've just encountered a bookmark-based phishing attack. The button you tried to drag contains malicious JavaScript code!",
    learnMore: "Learn How to Stay Safe",
    successTitle: "Challenge Complete!",
    successDescription:
      "Congratulations! You've successfully identified a Discord bookmark attack.",
    howItWorks: "How This Attack Works:",
    steps: [
      "Attackers create a fake verification page with a draggable button",
      "The button contains malicious JavaScript code that steals user tokens",
      "When used as a bookmark or dragged into Discord, the code can compromise your account",
    ],
    protectionTitle: "How to Protect Yourself:",
    protectionTips: [
      "Never drag buttons or bookmarks from untrusted websites into Discord",
      "Be suspicious of any verification process that requires dragging elements",
      "Only use official Discord verification methods",
      "Keep your Discord client updated to benefit from the latest security features",
    ],
    attackScenario: {
      title: "🎭 Attack Scenario: The Crypto Giveaway",
      description:
        "Here's how a typical attack might unfold in a cryptocurrency-focused Discord server:",
      steps: [
        {
          title: "Initial Contact",
          description:
            "A new user joins a popular cryptocurrency Discord server and begins engaging with the community, building trust over several days.",
        },
        {
          title: "The Bait",
          description:
            "The attacker announces they're hosting a giveaway for a new NFT project or cryptocurrency and shares a link to a 'verification site' that looks legitimate.",
        },
        {
          title: "The Trap",
          description:
            "The verification site instructs users to drag a button to their bookmarks bar or directly into Discord to 'verify their wallet' or 'register for the giveaway'.",
        },
        {
          title: "The Attack",
          description:
            "When victims click the bookmark while on Discord, the malicious JavaScript executes, stealing their Discord token, which gives the attacker full access to their account.",
        },
        {
          title: "The Aftermath",
          description:
            "The attacker uses the compromised account to spread the scam further, targeting the victim's friends and communities, or uses the account to steal cryptocurrency through social engineering.",
        },
      ],
    },
    commonAttackScenario: {
      title: "Common Attack Scenario: Fake Verification",
      description:
        "A common version of this attack shows users a fake 'Discord Verification' page with a button labeled 'Drag Me', which users are instructed to drag into an open Discord window or bookmark. When used, the bookmark executes malicious JavaScript that can steal tokens and compromise accounts.",
      warning:
        "Warning: Never drag buttons or links from untrusted websites into Discord or your bookmarks bar!",
    },
    recentIncidents: {
      title: "Recent Incidents",
      description:
        "In recent months, several major Discord communities focused on cryptocurrency and NFTs have been targeted by these attacks. In January 2023, a bookmark attack compromised multiple admin accounts in a popular NFT project Discord, leading to over $200,000 in stolen assets when users were directed to a fake minting website.",
    },
    backToHome: "← Back to Challenges",
    challengeCompletion: {
      title: "Challenge Completion",
      successMessage:
        "🎉 Congratulations! You have successfully completed the challenge! 🎉",
      errorMessage: "Incorrect answers. Please try again.",
      flagLabel: "Enter the flag:",
      flagPlaceholder: "Flag format: CHALLENGE_NAME_YEAR",
      question1: {
        label: "Question 1: What is the main purpose of a bookmark attack?",
        options: [
          "Please select...",
          "Steal the user's Discord token",
          "Crash the browser",
          "Install a virus",
        ],
      },
      question2: {
        label: "Question 2: How can you protect yourself from such attacks?",
        options: [
          "Please select...",
          "Never drag buttons from unknown sources to your bookmarks bar",
          "Install antivirus software",
          "Use incognito mode",
        ],
      },
      submitButton: "Submit",
    },
  },
  permitPhishing2: {
    title: "Uniswap Permit2 Phishing Challenge",
    subtitle:
      "Learn to identify and avoid malicious Permit2 authorization requests",
    warning: "Educational Purpose Only - Learn to Protect Yourself",
    networkStatus: "Current Network: ",
    walletAddress: "Wallet Address: ",
    introText:
      "Scammers are exploiting Uniswap's Permit2 authorization system to steal tokens from unsuspecting users.",
    introText2:
      "This challenge will teach you how to identify and protect yourself from these sophisticated phishing attacks. In this simulation, you'll experience how scammers trick users into signing malicious Permit2 authorizations, and why simply revoking token approvals is not enough to ensure security.",
    attackPoints: {
      point1:
        "Request Permit2 signatures that grant unlimited token spending permissions",
      point2: "Use legitimate-looking interfaces to make the request seem safe",
      point3:
        "Take advantage of users who don't carefully review signature requests",
    },
    attackWarning:
      "Always carefully review Permit2 signature requests and only sign them from trusted sources!",
    signatureDetails: {
      warning: "⚠️ You just signed a dangerous Permit2 authorization!",
      title: "Signature Details:",
      permissionNote:
        "You have granted {spender} unlimited permission to spend your USDC tokens until {deadline}.",
      success:
        "The signature was successful. In a real attack, your tokens would be at risk!",
    },
    tokenBalances: {
      title: "Token Balances",
      weth: "WETH",
      pepe: "PEPE",
      usdt: "USDT",
    },
    transactions: {
      title: "Recent Transactions",
      hash: "Hash",
      method: "Method",
      age: "Age",
      from: "From",
      to: "To",
      value: "Value",
      approve: "Approve",
      dayAgo: "day ago",
      unlimited: "Unlimited",
    },
    approvals: {
      title: "Token Approvals",
      permit2Contract: "Permit2 Contract",
      permit2Description:
        "Permit2 is a token approval contract developed by Uniswap that allows for more gas-efficient and secure token approvals. It requires a one-time approval for each token, after which Permit2 manages permissions internally.",
      revoke: "Revoke",
    },
    swapTokens: "Swap Tokens",
    phishingAlert: {
      title: "Phishing Attempt Detected!",
      description:
        "You've just encountered a Permit2 phishing attack. The signature request you received was malicious!",
      whatHappened: "Here's what happened:",
      points: [
        "You approved your tokens to the legitimate Permit2 contract",
        "The phisher requested a signature for a permit inside Permit2",
        "This would allow them to transfer your tokens using Permit2's internal permissions",
        "Simply revoking the token approval to Permit2 would not have been enough",
      ],
      keyIssue:
        "Even if you revoke your token's approval to Permit2, the internal permissions within Permit2 remain active!",
      learnMore: "Learn How to Stay Safe",
    },
    explanation: {
      title: "Understanding Permit2 Phishing",
      description:
        "Permit2 works differently from traditional token approvals:",
      models: {
        traditional:
          "Traditional Model: You directly approve tokens to specific contracts (e.g., Uniswap)",
        permit2:
          "Permit2 Model: You approve tokens to the Permit2 contract, which then manages permissions internally",
      },
      twoLayerSystem: "This creates a two-layer approval system:",
      layers: [
        "Token approval to Permit2 (visible in blockchain explorers)",
        "Internal permissions within Permit2 (not visible in standard blockchain explorers)",
      ],
      vulnerability:
        "The Vulnerability: If you only revoke the token approval to Permit2 but not the internal permissions, attackers can still drain your tokens once you approve Permit2 again.",
      protectionTitle: "How to Protect Yourself:",
      protectionSteps: [
        "Use tools like ScamSniffer's Permit2 Authorization Management to view and revoke internal Permit2 permissions",
        "Be cautious of signature requests, especially those asking for unlimited amounts",
        "Verify the spender address in signature requests",
        "Use hardware wallets that show detailed signature information",
      ],
      completeChallenge: "Complete Challenge",
    },
    quiz: {
      pleaseSelect: " please select",
      title: "Complete the Challenge",
      description: "To complete this challenge, identify the correct answers:",
      question1: {
        text: "If you revoke a token's approval to Permit2, what happens to the internal permissions?",
        options: [
          "They remain active and can be exploited if you approve Permit2 again",
          "They are automatically revoked as well",
          "They expire after 24 hours",
        ],
      },
      question2: {
        text: "How can you manage internal Permit2 authorizations?",
        options: [
          "Through Etherscan's token approval page",
          "They cannot be managed once approved",
          "Using specialized tools like ScamSniffer's Permit2 Authorization Management",
        ],
      },
      verifyAnswers: "Verify Answers",
    },
    success: {
      title: "Challenge Completed!",
      description:
        "Great job identifying the Permit2 phishing attack! Here's how to protect yourself:",
      protectionTips: [
        "Always verify signature requests carefully, especially for Permit2",
        "Use specialized tools to manage internal Permit2 authorizations",
        "Be suspicious of unlimited approvals and unfamiliar spender addresses",
        "Consider using hardware wallets that show detailed signature information",
      ],
      returnButton: "Return to Challenges",
    },
    failure: {
      title: "Challenge Failed, Try Again",
    },
  },
  addressSuffixPhishing: {
    title: "Address Suffix Phishing Challenge",
    subtitle:
      "Can you identify your own wallet address among the similar ones?",
    warning: "Educational Purpose Only - Learn to Protect Yourself",
    networkStatus: "Current Network:",
    walletStatus: "Wallet Status:",
    step1Title: "Step 1: Connect Your Wallet",
    connectWallet: "Connect Wallet",
    step2Title: "Step 2: Find Your Wallet Address",
    step2Description:
      "Below are 5 similar-looking addresses. Only one of them is your actual wallet address. Choose the correct address to complete the challenge:",
    selectThisAddress: "Select This Address",
    resultTitle: "Challenge Result",
    successMessage:
      "🎉 Congratulations! You successfully identified your real wallet address!",
    failureMessage:
      "❌ Incorrect! This is not your real wallet address. Please try again.",
    protectionTitle: "How to Protect Yourself:",
    protectionTips: [
      "Always verify the full address, not just the beginning and end",
      "Be cautious of addresses that look similar to ones you've interacted with",
      "Use address book features in your wallet to label trusted addresses",
      "Consider using a hardware wallet with address verification",
      "Double-check addresses when copying and pasting",
    ],
    backToHome: "← Back to Challenges",
    challengeCompletion: {
      title: "Challenge Completion",
      successMessage:
        "🎉 Congratulations! You have successfully completed the challenge! 🎉",
      errorMessage: "Incorrect answers. Please try again.",
      flagLabel: "Enter the flag:",
      flagPlaceholder: "Flag format: CHALLENGE_NAME_YEAR",
      question1: {
        label: "Question 1: What is the main purpose of a bookmark attack?",
        options: [
          "Please select...",
          "Steal the user's Discord token",
          "Crash the browser",
          "Install a virus",
        ],
      },
      question2: {
        label: "Question 2: How can you protect yourself from such attacks?",
        options: [
          "Please select...",
          "Never drag buttons from unknown sources to your bookmarks bar",
          "Install antivirus software",
          "Use incognito mode",
        ],
      },
      submitButton: "Submit",
    },
  },
  blindSignaturePhishing: {
    title: "Blind Signature Phishing Attack",
    subtitle:
      "This page demonstrates how phishing sites might trick you into signing dangerous messages!",
    warning: "Educational Purpose Only - Be Careful with Real Signatures",
    networkStatus: "Current Network: ",
    walletStatus: "Wallet Status: ",
    step2Title: "Signature Method",
    signatureMethodDescription:
      "Choose one of the following signature methods to learn how phishing attacks can exploit each:",
    method1: {
      title: "Method 1: eth_sign (Legacy, Dangerous)",
      description:
        "eth_sign is one of the earliest signature methods, but also the most dangerous. It allows signing any data without any prefix or protection.",
      deprecatedNote:
        "eth_sign is a deprecated signing method in many wallets like MetaMask, Safe, etc., because it's too dangerous.",
      button: "Use eth_sign to Sign",
      signedWarning:
        "You just signed using the dangerous eth_sign method! This could lead to theft of your assets.",
      cancelSuccess: "Well done! You rejected a dangerous signature request.",
      learnMore: "Learn More...",
      cancel: "Cancel",
      sign: "Sign",
    },
    method2: {
      title: "Method 2: personal_sign (Standard Message Signing)",
      description:
        "This method adds a prefix making it safer, but can still be dangerous if you don't read the content.",
      button: "Use personal_sign to Sign",
      hashButton: "Use personal_sign to Sign (Hash)",
      message:
        "I agree to the terms and conditions to claim my 1000 DeFiHackLabs tokens.",
      signedWarning:
        "You just signed a potentially dangerous message! Always read the content carefully.",
      hashSignedWarning:
        "You just signed a hash value! This could be a dangerous operation.",
      cancelSuccess: "Well done! You rejected a suspicious signature request.",
    },
    method3: {
      title: "Method 3: signTypedData (EIP-712)",
      description:
        "This method is more structured and secure, but still has risks if you don't verify the contract and parameters.",
      button: "Use signTypedData to Sign",
      signedWarning:
        "You just signed structured data! Make sure you understand all parameters.",
      cancelSuccess:
        "Well done! You rejected an unverified structured data signature.",
      domain: {
        name: "Test Domain",
      },
      value: {
        name: "Test User",
      },
    },
    metamaskWarning:
      "Signing this message can have dangerous side effects. Only sign messages from sites you fully trust with your entire account. This dangerous method will be removed in a future version.",
    challengeCompleted:
      "🎉 Challenge completed! Learn about blind signature phishing",
  },
  seaportZeroOrderPhishing: {
    title: "Seaport Zero Order Phishing Attack",
    subtitle:
      "Challenge: Identify Zero Price Phishing Orders in Seaport Protocol",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioDescription:
      "You are an NFT collector who owns a valuable Bored Ape Yacht Club NFT. You receive a notification that someone has made an offer to buy your NFT for 100 ETH. After clicking the link, you see the following order:",
    seaportOrderDetails: "Seaport Order Details",
    yourTask:
      "Analyze the Seaport order above and determine whether it is a legitimate purchase order or a phishing order attempting to steal your NFT.",
    acceptOffer: "Accept Offer",
    pleaseSelect: "-- Please select --",
    question1: "1. Is this a phishing order?",
    yesPhishing: "Yes, it's a phishing order",
    noLegitimate: "No, it's a legitimate order",
    question2: "2. What would happen if you accept this order?",
    receive100ETH: "I would receive 100 ETH and transfer my NFT",
    transferForFree:
      "I would transfer my NFT for free without receiving any ETH",
    nothingHappens: "Nothing would happen, the order is invalid",
    question3: "3. What is the issue with this order?",
    invalidSignature: "The signature is invalid",
    zeroPrice: "The price is set to 0 ETH",
    incorrectToken: "The token address is incorrect",
    noIssue: "There is no issue, the order is legitimate",
    submitAnswers: "Submit Answers",
    explanationTitle: "Explanation: Seaport Zero Order Phishing Attack",
    explanationContent:
      "This is a typical Seaport zero order phishing attack. The attacker has created an order that appears to offer a high price (100 ETH) for your NFT, but in reality, the consideration in the order is set to 0 ETH.",
    considerationExample:
      'Notice that both startAmount and endAmount are set to "0", which means if you accept this order, you would be giving away your NFT for free without receiving any ETH in return.',
    protectionTitle: "How to Protect Yourself:",
    protectionTips: [
      "Always carefully check the consideration section in Seaport orders",
      "Verify that startAmount and endAmount match the displayed price",
      "Use trusted NFT marketplaces with built-in protections",
      "Don't click on links from unknown sources",
      "If a price seems too good to be true, it probably is",
    ],
    keyIssueTitle: "In this phishing order, the key issue is",
    alertError:
      "⚠️ You just signed a zero price order! Your NFT would be transferred without receiving any ETH. This is an example of a phishing attack.",
    errorMessage:
      "❌ Not all answers are correct. Please check the explanation below!",
    successMessage:
      "🎉 Congratulations! You have successfully completed the challenge!",
    comparisonTitle: "Comparison of Legitimate vs. Phishing Orders:",
    comparisonTable: {
      parameter: "Parameter",
      legitimate: "Legitimate Order",
      phishing: "Phishing Order (Current Case)",
      offer: {
        legitimate: "ETH from buyer",
        phishing: "NFT from seller",
      },
      consideration: {
        legitimate: "NFT from seller",
        phishing: "0 ETH",
      },
      startEndAmount: {
        legitimate: "Matches displayed price (e.g., 100 ETH)",
        phishing: "Set to 0",
      },
    },
  },
  zeroTransferScam: {
    title: "TransferFrom Zero Transfer Scam Challenge",
    subtitle: "Learn to identify and avoid zero-value transfer scams",
    warning:
      "Educational Purpose Only - This is a simulation of a zero-value transfer phishing attack",
    yourWallet: "Your Wallet",
    address: "Address",
    completeChallenge: "Complete the Challenge",
    realAddressLabel: "Legitimate Address:",
    realAddressPlaceholder: "Enter the real contract address",
    fakeAddressLabel: "Fake/Spoofed Address:",
    fakeAddressPlaceholder: "Enter the spoofed address",
    submitButton: "Verify Addresses",
    successTitle: "🎉 Challenge Complete! Understanding Zero Transfer Scams",
    successDescription:
      "Zero-value transfers are often used by scammers to create a fake transaction history with spoofed addresses.",
    protectionTitle: "How to protect yourself:",
    protectionTips: [
      "Always verify the full address, not just the beginning and end",
      "Be cautious of addresses that look similar to ones you've interacted with",
      "Check transaction history carefully, including zero-value transfers",
      "Use address book features in your wallet to label trusted addresses",
      "Consider using a hardware wallet with address verification",
    ],
    failureTitle: "❌ Incorrect addresses, please try again!",
    failureDescription:
      "Hint: Look carefully at the transaction history and compare the addresses.",
    backToHome: "← Back to Challenges",
    transactionDetails: {
      title: "Transaction Details",
      hash: "Hash",
      method: "Method",
      age: "Age",
      from: "From",
      to: "To",
      amount: "Amount",
      out: "OUT",
      in: "IN",
      gasUse: "Gas Used",
      phishingAlert: {
        title: "Phishing Attempt Detected!",
        description:
          "These zero-value transfers are a common tactic used by scammers to:",
        tactics: [
          "Create spoofed addresses that look similar to legitimate addresses you've interacted with",
          "Establish a transaction history with these fake addresses",
          "Later use these addresses in phishing attempts, hoping you'll mistake them for legitimate addresses",
        ],
        addressComparison:
          "Notice how the addresses look very similar? This is intentional!",
        techniques:
          "Scammers use various techniques to make addresses look similar:",
        techniquesList: [
          "Using similar character patterns at the beginning and end",
          "Relying on the fact that most wallets truncate addresses in the middle",
          "Exploiting the human tendency to only check the first and last few characters",
        ],
        note: "Note: Etherscan has a default setting enabled called 'Zero-Value Token Transfers' that hides zero-value token transfers from being displayed on the site. However, TRON blockchain explorers still show these transactions, making this attack vector still relevant on TRON.",
        learnMoreButton: "Learn How to Stay Safe",
        check: "check",
      },
    },
  },
  teamsPhishing: {
    title: "Microsoft Teams Malware Phishing Simulation",
    description:
      "This page simulates how attackers create fake Microsoft Teams sites to distribute malware and steal sensitive information.",
    warning:
      "Educational Purpose Only - This is a simulation of a Microsoft Teams phishing attack",
    joinMeeting: "Join your Teams meeting",
    joinButton: "Join on the Teams app",
    setupTitle: "Setup",
    setupInstruction:
      "Drag the Microsoft Teams icon to Applications to install",
    applications: "Applications",
    indicatorsTitle: "Phishing Indicators in this Example",
    indicators: [
      '<strong>Suspicious URL</strong>: Notice the domain "microsoft-meet.com" instead of "teams.microsoft.com"',
      "<strong>Simplified Interface</strong>: The fake page has a simplified interface compared to the real Teams login",
      "<strong>Lack of Security Features</strong>: Missing security elements that Microsoft typically includes",
      '<strong>Join Button</strong>: The prominent "Join on the Teams app" button would likely lead to malware download',
    ],
    safetyTipsTitle: "Safety Tips",
    safetyTips: [
      "Always verify the URL before entering credentials or downloading software.",
      "Only download Microsoft Teams from the official Microsoft website or app store.",
      "Be suspicious of any unusual installation processes or requests.",
      'If you download a suspicious package, you can scan it with <a href="https://www.virustotal.com" target="_blank">VirusTotal.com</a> before opening it. However, be aware that even if no threats are detected (0 detections), it doesn\'t guarantee absolute safety.',
    ],
    attackDetailsTitle: "How Microsoft Teams Phishing Attacks Work",
    attackDetailsDescription:
      "Attackers create convincing replicas of Microsoft Teams login pages or update notifications to trick users into downloading malware or revealing their credentials. These attacks have become increasingly sophisticated and target both individuals and organizations.",
    risks: {
      dataBreach: {
        title: "Risk: Data Breach",
        description:
          "Malware installed through fake Teams updates can access sensitive files on your device, potentially leading to unauthorized access to personal and corporate data. This can result in intellectual property theft, exposure of confidential information, and compliance violations.",
      },
      credentialTheft: {
        title: "Risk: Credential Theft",
        description:
          "When users enter their Microsoft credentials on fake Teams sites, attackers capture this information to gain access to email, OneDrive, SharePoint, and other Microsoft 365 services. This can lead to account takeover and further compromise of organizational resources.",
      },
      walletDrain: {
        title: "Risk: Wallet Drain",
        description:
          "For users who access cryptocurrency wallets or financial services from the same device, malware installed through fake Teams updates can include functionality to scan for wallet credentials, leading to theft of digital assets.",
      },
    },
    quiz: {
      title: "Quiz: Test Your Knowledge",
      successTitle:
        "🎉 Congratulations! You have successfully completed the quiz! 🎉",
      successDescription:
        "You've demonstrated your ability to identify Microsoft Teams phishing attacks and understand the risks they pose.",
      failureTitle: "❌ Incorrect answers. Please try again. ❌",
      failureDescription:
        "Hint: Look closely at the phishing indicators in the simulation.",
      flagLabel: "Please enter the Flag:",
      flagPlaceholder: "Enter the Flag here...",
      questions: {
        q1: {
          question:
            '1. What is the main risk of clicking on the "Join on the Teams app" button in this phishing scenario?',
          options: {
            default: "Select an answer",
            a: "It will redirect to a legitimate Microsoft website",
            b: "It will attempt to install malware on your device",
            c: "It will show you advertisements",
            d: "It will simply do nothing",
          },
        },
        q2: {
          question:
            "2. What is a recommended action when receiving suspicious meeting invitations?",
          options: {
            default: "Select an answer",
            a: "Always click on links to check if they're legitimate",
            b: "Download and open any attachments to verify their content",
            c: "Verify the sender's identity before clicking on any links",
            d: "Forward the invitation to all your colleagues",
          },
        },
        q3: {
          question: "3. What is the legitimate domain for Microsoft Teams?",
          options: {
            default: "Select an answer",
            a: "teams-microsoft.com",
            b: "teams.microsoft.com",
            c: "microsoft-teams.com",
            d: "teams-official.com",
          },
        },
      },
      submitButton: "Submit Answers",
      resultSuccess: "Challenge Successful!",
      resultSuccessDescription:
        "You have successfully completed the Microsoft Teams Malware Phishing challenge.",
      keyLearningPoints: "Key Learning Points:",
      learningPoints: [
        "Always check URLs for official domain names (teams.microsoft.com)",
        "Be wary of simplified interfaces and missing standard security features",
        "Only download applications from official sources",
        "Be suspicious of unusual installation processes",
      ],
      finalReminder:
        "Remember: Legitimate Microsoft services will never ask you to download software through suspicious third-party websites.",
    },
  },
  googleSearchAdPhishing: {
    title: "❌ Google Search Ad Phishing Attack 🔒",
    subtitle: "Challenge: Identify Google Search Ad Phishing",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioTitle: "Scenario Description",
    scenarioDescription:
      "You want to stake ETH using Lido Finance. You search for 'Lido Finance' on Google and see these results. Can you identify which one is the legitimate website and which is the phishing site?",
    realDomainLabel: "Real Domain:",
    realDomainPlaceholder: "Enter the legitimate Lido domain",
    fakeDomainLabel: "Phishing Domain:",
    fakeDomainPlaceholder: "Enter the phishing domain",
    submitButton: "Submit Answer",
    successTitle: "🎉 Challenge Complete!",
    successDescription:
      "Congratulations! You've successfully identified the phishing ad and the legitimate website.",
    failureTitle: "❌ Challenge Failed",
    failureDescription:
      "Please try again. Remember to carefully check the domains.",
    protectionTitle: "Understanding Google Search Ad Phishing Attacks",
    protectionTips: [
      "Attackers often purchase Google ads related to popular cryptocurrency projects that appear at the top of search results, marked as 'Sponsored' or 'Ad'.",
      "These ads typically use domain names that are very similar to the official website but with subtle differences, such as:",
      "• Using different top-level domains (e.g., .is instead of .fi)",
      "• Adding or removing letters in the domain name",
      "• Using hyphens or replacing letters with numbers",
      "When users click these ads, they are directed to phishing sites that look identical to the official website but are designed to steal funds or private keys.",
    ],
    backToHome: "← Back to Challenges",
    challengeCompletion: {
      title: "Challenge Completion",
      successMessage:
        "🎉 Congratulations! You have successfully completed the challenge! 🎉",
      errorMessage: "Incorrect answers. Please try again.",
      flagLabel: "Enter the flag:",
      flagPlaceholder: "Flag format: CHALLENGE_NAME_YEAR",
      question1: {
        label: "Question 1: What is the main purpose of a bookmark attack?",
        options: [
          "Please select...",
          "Steal the user's Discord token",
          "Crash the browser",
          "Install a virus",
        ],
      },
      question2: {
        label: "Question 2: How can you protect yourself from such attacks?",
        options: [
          "Please select...",
          "Never drag buttons from unknown sources to your bookmarks bar",
          "Install antivirus software",
          "Use incognito mode",
        ],
      },
      submitButton: "Submit",
    },
  },
  clipboardPhishing: {
    title: "Clipboard Phishing Challenge",
    subtitle: "Challenge: Identify the Clipboard-based Phishing Attack",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioTitle: "Scenario Description",
    scenarioDescription:
      "You need to transfer 1 ETH to your friend's wallet. They've shared their wallet address with you, and you're using a cryptocurrency transfer interface to send the funds.",
    educationalWarning: {
      title: "Educational Warning:",
      description:
        "This is a simulated phishing challenge. The interface below demonstrates a common phishing technique. Try to identify what makes it suspicious.",
    },
    chatWithFriend: "Chat with Friend",
    friendMessage1: "Hey! Here's my wallet address for the ETH you promised:",
    copyButton: "Copy",
    userMessage: "Got it! I'll send it right away.",
    addressCopied: "Address copied! Let me transfer the ETH.",
    transferEth: "Transfer ETH",
    recipientAddress: "Recipient Address:",
    recipientPlaceholder: "Paste wallet address here",
    amount: "Amount (ETH):",
    sendButton: "Send ETH",
    success: {
      title: "🎉 Challenge Complete!",
      description:
        "Congratulations! You've successfully avoided a clipboard-based phishing attack.",
      howItWorks: "How This Attack Works:",
      steps: [
        "The attacker creates a malicious website that looks legitimate",
        'When you click the "Copy" button, malicious JavaScript code secretly replaces the copied address',
        "If you don't verify the address after pasting, you might send funds to the attacker",
      ],
      protectionTitle: "How to Stay Safe:",
      protectionTips: [
        "Always double-check addresses after pasting",
        "Consider using a hardware wallet with address verification",
        "Be cautious when copying sensitive information (like wallet addresses) anywhere on your computer - malware can modify your clipboard content even when using Ctrl+C",
      ],
    },
    failure: {
      title: "❌ Challenge Failed",
      description: "The address you entered is incorrect. Please try again.",
    },
    maliciousWarning: {
      title: "⚠️ Malicious Clipboard Activity Detected!",
      displayedAddress: "The displayed address:",
      copiedAddress: "What was copied to clipboard:",
      description:
        "This is an example of a clipboard-based phishing attack where the copied address is replaced with a malicious one!",
      closeButton: "Close",
    },
  },
  punycodePhishing: {
    title: "Punycode Phishing Attack",
    subtitle: "Challenge: Identify Punycode Phishing Domains",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioTitle: "Scenario Description",
    scenarioDescription:
      "You receive an email claiming to be an important security update notification from Trezor (a well-known hardware wallet brand). The link in the email appears to point to the official Trezor website, but it's actually a carefully disguised phishing site.",
    domainAppearance: "Appears to be the normal Trezor domain",
    whatIsPunycode: "What is Punycode?",
    punycodeDescription:
      'Punycode is an encoding system that allows non-ASCII characters (like Cyrillic, Chinese, etc.) to be converted into ASCII characters for use in the domain name system. Attackers often use visually similar characters to create domains that appear legitimate.\n\nFor example, some special characters look almost identical to Latin letters, but they are different characters:\n\nYou can use <a href="https://www.punycoder.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Punycoder</a> to convert between Unicode and Punycode domains.',
    displayedDomain: "Displayed Domain",
    actualDomain: "Actual Punycode Domain",
    description: "Description",
    specialCharacters: "Uses special characters to replace some letters",
    yourTask: "Your Task",
    realDomainLabel: "Real Domain:",
    realDomainPlaceholder: "Enter the real official Trezor domain",
    fakeDomainLabel: "Phishing Domain:",
    fakeDomainPlaceholder: "Enter the Punycode phishing domain",
    submitButton: "Submit Answers",
    successTitle:
      "🎉 Congratulations! You successfully identified the real and fake domains!",
    successDescription:
      "Punycode phishing attacks are particularly dangerous because the domain displayed in the browser address bar can look identical to a legitimate site.",
    protectionTitle: "The best ways to protect yourself are:",
    protectionTips: [
      "Type known official URLs directly in your browser instead of clicking links in emails",
      "Use bookmarks for important sites you visit regularly",
      "Install browser extensions that can detect Punycode domains",
      "Be alert for unusual characters or spellings in domain names",
    ],
    failureTitle: "❌ Incorrect answers, please try again!",
    failureDescription:
      "Hint: Carefully check the official domain for Trezor, and the Punycode domain used by the phishing site.",
    backToHome: "← Back to Challenges",
    challengeCompletion: {
      title: "Challenge Completion",
      successMessage:
        "🎉 Congratulations! You have successfully completed the challenge! 🎉",
      errorMessage: "Incorrect answers. Please try again.",
      flagLabel: "Enter the flag:",
      flagPlaceholder: "Flag format: CHALLENGE_NAME_YEAR",
      question1: {
        label: "Question 1: What is the main purpose of a bookmark attack?",
        options: [
          "Please select...",
          "Steal the user's Discord token",
          "Crash the browser",
          "Install a virus",
        ],
      },
      question2: {
        label: "Question 2: How can you protect yourself from such attacks?",
        options: [
          "Please select...",
          "Never drag buttons from unknown sources to your bookmarks bar",
          "Install antivirus software",
          "Use incognito mode",
        ],
      },
      submitButton: "Submit",
    },
  },
  telegramTokenPhishing: {
    title: "Telegram Token Phishing Challenge",
    subtitle: "Learn to identify and avoid seed phrase phishing in Telegram",
    warning: "Educational Purpose Only - No actual malicious code will be used",
    chatTitle: "CryptoAirdrop Bot",
    botName: "CryptoAirdrop Bot",
    welcomeMessage:
      "🎉 Congratulations! You have been selected to receive 5,000 XQUEST tokens as part of our community airdrop program.",
    claimInstructions:
      'To claim your 5,000 XQUEST tokens (worth approximately $2,500), please click the "Claim Tokens" button below.',
    tokenDescription:
      "XQUEST is a new DeFi governance token with limited supply. Current price: $0.50 per token.",
    processingMessage: "Processing your claim...",
    seedPhraseRequest:
      "To verify your wallet ownership and distribute your 5,000 XQUEST tokens, please provide your wallet's seed phrase (12 or 24 words).",
    seedPhrasePlaceholder: "Enter your seed phrase here (12 or 24 words)",
    submitButton: "Submit & Claim Tokens",
    skipButton: "I don't want to provide my seed phrase",
    successTitle:
      "🎉 Challenge Successful! Learning About Telegram Token Phishing",
    successMessage:
      "Congratulations! You successfully identified and rejected the seed phrase phishing attempt.",
    failureTitle: "❌ Challenge Failed! You revealed your seed phrase.",
    failureMessage:
      "You've entered a seed phrase. In a real situation, this would have given the scammer complete access to your wallet!",
    explanationTitle: "Understanding Telegram Token Phishing",
    explanationContent:
      "This simulation demonstrates a common phishing technique used by scammers on Telegram. They create fake bot accounts that promise free tokens but require you to provide your seed phrase to 'verify' your wallet.",
    warningSignsTitle: "Warning Signs to Watch For:",
    warningSignsList: [
      "Unsolicited messages about free tokens or airdrops",
      "Urgency or time pressure to claim rewards",
      "Requests for your seed phrase or private keys",
      "Promises of high-value rewards",
      "Poor grammar or spelling mistakes",
    ],
    protectionTitle: "How to Protect Yourself:",
    protectionList: [
      "Never share your seed phrase with anyone",
      "Legitimate projects will never ask for your seed phrase",
      "Be skeptical of unsolicited messages about free tokens",
      "Verify all information through official channels",
      "If something seems too good to be true, it probably is",
    ],
    claimButton: "Claim Tokens",
    seedPhraseWarning:
      "Warning: Never share your seed phrase with anyone! This is a simulation to teach you about phishing attacks.",
    backToHome: "← Back to Challenges",
  },
  telegramFakeSafeguard: {
    title: "Telegram Fake Safeguard Scam Challenge",
    subtitle:
      "Learn to identify and avoid fake verification processes on Telegram",
    warning: "Educational Purpose Only - No actual malicious code will be used",
    intro: {
      p1: "Scammers use fake Telegram Safeguard verification processes to trick users into executing malicious commands that can steal crypto assets. This challenge will teach you how to identify and avoid these scams.",
      p2: "In this simulation, you'll experience a common Telegram scam scenario. Your goal is to identify the red flags and avoid falling for the scam.",
    },
    startButton: "Start Challenge",
    chatTitle: "Crypto Airdrop Official",
    welcomeMessage: {
      p1: "Welcome to Crypto Airdrop Official!",
      p2: "🚀 Exciting news! We're launching a new token with a massive airdrop for early supporters.",
      p3: "💰 Claim up to  5,000 tokens worth approximately $10,000!",
      p4: "⏰ Limited time offer - Airdrop ends in 24 hours!",
      p5: "🔒 Please complete verification to participate.",
    },
    verifyButton: "Tap to verify",
    safeguardVerification: {
      title: "Safeguard Verification",
      description:
        "To protect against phishing and malicious apps, please verify locally through Telegram.",
      step1: {
        number: "1",
        text: "Press",
        keyboard: "Windows",
        plus: "+",
        keyboard2: "R",
        description: 'to open the "Run" dialog box.',
      },
      step2: {
        number: "2",
        text: "To securely verify through Telegram, press",
        keyboard: "CTRL",
        plus: "+",
        keyboard2: "V",
        description: 'to paste "Telegram" into the Run box.',
      },
      step3: {
        number: "3",
        text: "Finally, press",
        keyboard: "Enter",
        description:
          "to authenticate your account and be redirected to the official group.",
      },
      copyButton: "Copy Verification Code",
    },
    verificationCode: {
      title: "Verification code copied to clipboard!",
      description:
        "Please paste it in the Run dialog (Win+R) and press Enter to complete verification.",
      codeComment: "#         Telegram",
    },
    simulationButtons: {
      runCode: "Yes, simulate running the code",
      avoidScam: "No, I recognize this is a scam",
    },
    results: {
      title: "Challenge Result",
      success: {
        title: "Great job! You avoided the scam.",
        description:
          "You correctly identified this as a scam attempt. In a real situation, the malicious code would have installed malware on your computer that could steal your crypto assets.",
      },
      failure: {
        title: "You fell for the scam!",
        description:
          "This is exactly how the Telegram Fake Safeguard scam works in real life. Scammers trick users into running commands that install malware, which then steals crypto assets.",
      },
    },
    education: {
      title: "How the Telegram Fake Safeguard Scam Works",
      techniques: "This scam uses several techniques to trick users:",
      techniquesList: [
        {
          title: "Social Engineering",
          description:
            "Creating urgency and excitement with limited-time airdrops",
        },
        {
          title: "Fake Verification",
          description:
            "Impersonating Telegram's official Safeguard verification",
        },
        {
          title: "Clipboard Injection",
          description: "Secretly copying malicious code to your clipboard",
        },
        {
          title: "Command Execution",
          description:
            "Tricking you into running commands that install malware",
        },
      ],
      redFlags: {
        title: "Red Flags to Watch For",
        list: [
          "Requests to copy/paste commands into your terminal or Run dialog",
          "Verification processes that seem unusually complex",
          "Channels promising large amounts of free tokens",
          "Urgent timeframes creating FOMO (Fear Of Missing Out)",
          "Verification processes that differ from Telegram's official process",
        ],
      },
      protection: {
        title: "How to Stay Safe",
        list: [
          "Never copy and paste commands from unknown sources",
          "Verify official channels through multiple trusted sources",
          "Be skeptical of free airdrops and giveaways",
          "Enable Two-Factor Authentication on your Telegram account",
          'Regularly check Telegram\'s "Active Sessions" to ensure no unauthorized access',
        ],
      },
      compromised: {
        title: "If You Think You've Been Compromised",
        list: [
          "Immediately transfer funds from affected wallets to new, secure wallets",
          "Change passwords for all accounts accessed from your computer",
          "Enable two-factor authentication where possible",
          "Consider reinstalling your operating system",
          "Run a reputable antivirus scan",
        ],
      },
    },
    footer: {
      deviceWarning:
        "Due to security reasons you can only continue with the Safeguard Portal verification on a Laptop/PC device. Please try again on a compatible device if needed.",
      poweredBy: "Powered By:",
      safeguardLink: "@Safeguard",
    },
    backButton: "Back to Challenges",
  },
  challengeCompletion: {
    title: "Challenge Completion",
    successMessage:
      "🎉 Congratulations! You have successfully completed the challenge! 🎉",
    errorMessage: "Incorrect answers. Please try again.",
    flagLabel: "Enter the flag:",
    flagPlaceholder: "Flag format: CHALLENGE_NAME_YEAR",
    question1: {
      label: "Question 1: What is the main purpose of a bookmark attack?",
      options: [
        "Please select...",
        "Steal the user's Discord token",
        "Crash the browser",
        "Install a virus",
      ],
    },
    question2: {
      label: "Question 2: How can you protect yourself from such attacks?",
      options: [
        "Please select...",
        "Never drag buttons from unknown sources to your bookmarks bar",
        "Install antivirus software",
        "Use incognito mode",
      ],
    },
    submitButton: "Submit",
  },
  fakeStakingContract: {
    title: "Ultra-High Yield Staking Platform",
    subtitle: "Stake your tokens and earn 50% returns daily!",
    warning:
      "Educational Purpose Only - Learn to identify suspicious staking contracts",
    networkStatus: "Current Network:",
    walletStatus: "Wallet Status:",
    notConnected: "Not Connected",
    connectWallet: "Connect Wallet",
    step2Title: "Step 1: Stake Your Tokens",
    stakeButton: "Stake Now",
    step3Title: "Step 2: Staking Result",
    backToHome: "← Back to Challenges",
    dailyReturns: "50% Daily Returns",
    stakingPool: "USDC Staking Pool",
    stakingDescription: "Stake your USDC and earn 50% returns daily!",
    minimumStake: "Minimum stake: 100 USDC",
    lockPeriod: "Lock period: None",
    withdrawAnytime: "Withdraw anytime",
    stakePlaceholder: "Enter stake amount",
    invalidAmount: "Minimum stake amount is 100 USDC",
    failureTitle: "⚠️ Warning: You Have Granted Unlimited Access!",
    failureMessage:
      "You approved the contract to use an unlimited amount of tokens. In a real situation, this would allow the contract to control all of your USDC.",
    transactionSent: "Transaction sent! View transaction:",
    whyDangerous: "Why is this dangerous?",
    seedPhraseExplanation:
      "Granting unlimited token access means the contract can:",
    dangerList: [
      "Access all USDC in your wallet",
      "Transfer any amount of tokens at any time",
      "Have complete control over your assets",
      "Potentially lead to loss of funds",
    ],
    rememberTitle: "Remember:",
    rememberMessage:
      "Never approve unlimited token access to suspicious contracts!",
    metamaskSimulation: {
      title: "MetaMask Transaction Request Example",
      description:
        "Some suspicious staking contracts may prompt you to approve a token allowance, seemingly just for staking a specific amount. However, in reality, they request full access to your entire token balance. Once approved, the attacker can freely transfer all your assets.",
      transactionRequest: "Transaction Request",
      requestFrom: "Request from",
      interactingWith: "Interacting with",
      method: "Method",
      approvalAmount: "Approval Amount",
      unlimited: "Unlimited",
    },
    challengeSuccess: {
      title: "🎉 Challenge Completed! Understanding Staking Scams",
      warningTitle: "⚠️ Red Flags in Suspicious Staking Platforms:",
      warningItems: [
        "Unrealistic returns (50% daily is mathematically unsustainable)",
        "Unlimited token approvals instead of specific amounts",
        "No verifiable smart contract code or audit",
        "Urgency and FOMO marketing tactics",
        "Anonymous team or fake identities",
      ],
      tipsTitle: "🛡️ How to Protect Yourself:",
      tipsItems: [
        "Research the project thoroughly before investing",
        "Check if the smart contract is verified on Etherscan",
        "Look for security audits from reputable firms",
        "Never approve unlimited token spending",
        "If returns sound too good to be true, they probably are",
      ],
      securityTip:
        "💡 Security Tip: Always limit token approvals to the exact amount needed!",
    },
    successMessage:
      "✅ CHALLENGE SUCCESSFUL! You've learned to identify suspicious staking platforms.",
  },
  seedPhraseRecoveryScam: {
    title: "Wallet Recovery Assistant",
    description:
      "Having wallet issues? Our professional team can help you restore access. This is a simulation, so you can test safely.",
    serviceTitle: "Wallet Recovery Service",
    serviceDescription:
      "Please describe the issue you're experiencing, and our support team will assist you immediately.",
    issueLabel: "Issue Description:",
    issuePlaceholder:
      "For example: I can't access my wallet, forgot my password, etc...",
    emailLabel: "Email:",
    emailPlaceholder: "Your email address",
    submitButton: "Submit Request",
    chatTitle: "Live Support Chat",
    supporterMessage:
      "Hello! I'm Alex from the wallet support team. I've received your request and I'm happy to help you.",
    verificationMessage:
      "To help you recover access to your wallet, I need to verify your identity. Please provide your wallet recovery phrase (12-24 word seed phrase).",
    securityMessage:
      "Rest assured, this is a secure environment and your information will be processed with encryption.",
    inputPlaceholder: "Type your message...",
    sendButton: "Send",
    endButton: "End Conversation",
    successMessage:
      "✅ CHALLENGE SUCCESSFUL! You identified and rejected the phishing attempt, protecting your seed phrase.",
    phishingIdentified: "Phishing Attempt Identified!",
    congratsMessage:
      "Congratulations! You successfully identified and rejected a seed phrase phishing attempt.",
    whyPhishing: "Why was this a phishing attempt?",
    whyPhishingExplanation:
      "Legitimate wallet services or support staff will <strong>never</strong> ask for your seed phrase. Your seed phrase is the private key to recover your wallet, and anyone who has it can take full control of your funds.",
    protectionTitle: "How to protect yourself:",
    protectionMethods: [
      "Never reveal your seed phrase to anyone, regardless of who they claim to be.",
      "Store your seed phrase offline in a secure location.",
      "Use a hardware wallet for an extra layer of security.",
      "If you receive a message asking for your seed phrase, it is almost certainly a phishing attempt.",
      "When in doubt, end the conversation and contact official channels directly.",
    ],
    backButton: "← Back to Challenges",
    failureTitle: "Phishing Attempt Successful!",
    failureMessage:
      "You entered what appears to be a seed phrase. In a real situation, this would give the attacker access to all your funds.",
    whyDangerous: "Why was this dangerous?",
    seedPhraseExplanation:
      "Your seed phrase is the private key to recover your wallet. Anyone who has it can:",
    dangerList: [
      "Access all funds in your wallet",
      "Transfer all your tokens and NFTs",
      "Sign transactions and authorize spending",
      "Take complete control of your wallet",
    ],
    rememberTitle: "Remember:",
    rememberMessage:
      "Legitimate wallet services or support staff will <strong>never</strong> ask for your seed phrase. If someone asks for your seed phrase, end the conversation immediately.",
    retryButton: "Retry Challenge",
    failureStatus: "❌ CHALLENGE FAILED! You revealed your seed phrase.",
  },
  usdtApprovalPhishing: {
    title: "USDT Approval Phishing Demo",
    subtitle:
      "This page demonstrates how phishing sites might request unlimited USDT approvals!",
    warning: "Educational Purpose Only - Be Careful with Real Approvals",
    networkStatus: "Current Network:",
    walletStatus: "Wallet Status:",
    notConnected: "Not Connected",
    connectWallet: "Connect Wallet",
    step2Title: "Step 1: Approve USDT",
    spenderAddress: "Spender Address:",
    approveButton: "Approve USDT",
    approvingButton: "Approving USDT...",
    step3Title: "Step 2: Revoke USDT Approval",
    revokeDescription: "Set approval to zero to revoke previous approvals",
    revokeButton: "Revoke USDT Approval",
    revokingButton: "Revoking USDT Approval...",
    revokeRejected: "Revoke Rejected",
    revokePending: "Revoke Pending",
    revokeSending: "Revoke Sending",
    revokeSuccess: "Revoke Success",
    revokeTransactionView: "Revoke transaction sent! View transaction:",
    challengeFailed:
      "❌ CHALLENGE FAILED! You approved a malicious transaction.",
    backToHome: "← Back to Challenges",
    challengeSuccess: {
      title: "🎉 Challenge Completed! Understanding Approval Phishing",
      checklistTitle: "⚠️ What to Check in MetaMask Approval Prompt:",
      checklistItems: [
        "Check if the approval amount is Unlimited",
        "Verify if the spender address is trustworthy",
        "Confirm if the contract address is the official token address",
      ],
      risksTitle: "🚨 Other Approval Risks:",
      risksItems: [
        "Besides approve, be cautious of increaseAllowance function",
        "increaseAllowance can also increase token approval amount",
        "Some phishing sites use this to disguise their true intentions",
      ],
      securityTip:
        "💡 Security Tip: Never give unlimited approval to unknown websites!",
    },
    successMessage:
      "✅ CHALLENGE SUCCESSFUL! You rejected the fake approval and protected your assets.",

    signatureDetails: {
      warning:
        "Warning: In a real situation, this signature would allow malicious websites unlimited access to your USDT!",
      title: "Signature Details:",
      permissionNote: `Approval transaction sent! View transaction: <a href="https://holesky.etherscan.io/tx/{txHash}" target="_blank">{txHash}</a>`,
      success:
        "Signature successful! This signature can be used to approve token spending without a transaction!",
    },
    scenario: {
      title: "🎮 Scenario",
      description: "You received a message from a friend:",
      message1:
        "Hey! I just found an amazing NFT project! The presale price is only 0.1 ETH, but you need to approve USDT as a deposit first. The deposit will be refunded immediately after minting. This project is definitely going to moon, I'm already planning to buy 10!",
      message2:
        "Here's the official website link, hurry up, limited spots available!",
      warning:
        "⚠️ This is a simulated phishing scenario for educational purposes. In reality, always be cautious of any requests for USDT approvals!",
    },
  },
  home: {
    title: "Web3 Phishing Safe Challenges",
    description:
      "These educational simulations help you understand and identify common Web3 phishing attacks, learning how to protect yourself in the decentralized world.",
    warning:
      "Warning: These simulations are for educational purposes only, all interactions are on test networks.",
    // English
    leaderboard: "Leaderboard",
    page: "Home",
    challenges: "Security Challenges",
    about: "About Us",
    startChallenge: "Start Challenge",
    securityChallenges: "Security Challenges",
    challengeDescription:
      "Complete each security challenge to improve your skills in these areas.",
    contributeMore: "Contribute More",
    founders: "Core Development Team",
    foundersDescription:
      "We plan to build a Web3 phishing drill platform that helps users learn and improve their ability to identify and prevent attack methods by simulating various common phishing attack methods, such as social engineering, fake websites, and malicious smart contracts. This platform serves as a Public Good and is free for everyone to use. Our goal is to reduce the risk of users being phished, strengthen the security of the overall Web3 ecosystem, and improve the accessibility of security awareness and educational resources.",
    sponsors: "Community Supporter",
    sponsorsDescription:
      "Collaborating with top security research labs and blockchain security firms",
    aboutUs: "About Us",
    aboutUsDescription:
      "We plan to build a Web3 phishing drill platform that helps users learn and improve their ability to identify and prevent attack methods by simulating various common phishing attack methods, such as social engineering, fake websites, and malicious smart contracts. This platform serves as a Public Good and is free for everyone to use. Our goal is to reduce the risk of users being phished, strengthen the security of the overall Web3 ecosystem, and improve the accessibility of security awareness and educational resources.",
    viewMore: "View More",
    challengeMore: "Challenge More",
    contributions: "Contribute",
    countdownTitle: "{date} {time}",
    countdownSuffix: "Global Launch",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    footer: {
      description:
        "Empowering Web3 users with interactive security education and phishing prevention training.",
      links: "Quick Links",
      social: "Social Media",
      newsletter: "Newsletter",
      subscribeText:
        "Stay updated with the latest security insights and training resources.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      about: "About Us",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      right1: "Copyright",
      right2: "All Rights Reserved",
      //footer: "",
    },
  },
  challenges: {
    all: "All",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    previous: "Previous",
    next: "Next",
    noChallenges: "No challenges available.",
    loading: "Loading challenges...",
    locked: "This challenge is locked. Please connect your wallet first.",
    locked2:
      "This challenge is locked. Please complete the beginner challenge1 first.",
  },
  profile: {
    userName: "Username：",
    SecurityTitle: "Security Title：",
    Rank: "Security Rank：",
    SecurityScore: "Security Score：",
    stats: {
      passed: "Passed {count} levels, ",
      completed: "Completed {percentage}%",
    },
  },
  common: {
    connectWallet: "Connect Wallet",
    disconnect: "Disconnect",
    leaderboard: "Leaderboard",
    processing: "Processing...",
    backButton: "← Back to Security Challenges",
    notConnected: "Not Connected",
    close: "Close",
    continue: "Continue",
    sign: "Sign",
    confirm: "Confirm",
    cancel: "Cancel",
  },
  contact: {
    title: "Contact Us",
    email: "Email",
  },
  questionList: {
    submitAnswer: "Submit Answer",
    correctAnswer: "Correct!",
    wrongAnswer: "Wrong!",
  },
  challengeCard: {
    difficulty: "Difficulty",
    startChallenge: "Start Challenge",
  },
  walletSetupGuide: {
    walletReadyMessage:
      "Your wallet is now ready to use! You can connect it to dApps and start interacting with Holesky testnet.",
    congratulations:
      "Congratulations! You've successfully completed the Web3 wallet setup!",
    setupCompleteMessage: "You're now ready to start your Web3 journey.",
    title: "Web3 Wallet Setup Guide",
    welcome:
      "Welcome to the world of Web3! This guide will walk you through setting up your first cryptocurrency wallet with MetaMask, securely storing your seed phrase, and obtaining test ETH from a faucet.",
    downloadMetaMask: "Download MetaMask",
    installMetaMask: "Please install MetaMask first!",
    networkAdded: "Holesky testnet added successfully!",
    networkError: "Failed to add Holesky testnet: ",
    securityTip: "Security Tip",
    downloadWarning:
      "Always download MetaMask from the official website or trusted app stores. Never install from links provided in emails or messages.",
    important: "IMPORTANT",
    seedPhraseWarning:
      "Your seed phrase is the ONLY way to recover your wallet if you lose access. Anyone who has your seed phrase has complete control over your wallet and funds.",
    warning: "Warning",
    phishingWarning:
      "Many phishing scams target your seed phrase. No legitimate service will ever ask for your complete seed phrase.",
    note: "Note",
    testEthNote:
      "Test ETH has no real-world value and is only used for testing on test networks.",
    addNetwork: "Add Holesky Network",
    connectWallet: "Connect Wallet",
    walletConnected: "Wallet Connected",
    confirmCompletion: "Confirm Completion",
    connected: "Connected",
    backToHome: "Back to Challenges",
    connectingWallet: "Connecting Wallet...",
    pendingRequest: "Pending Request",
    connectionError: "Connection Error",
    wrongNetwork: "Wrong Network",
    setupComplete: "Setup Complete",
    unknownError: "Unknown Error",
    authenticationFailed: "Authentication Failed",
    authenticating: "Authenticating...",
    loginSuccess: "Login Successful",
    noTestEth:
      "You do not have any test ETH. Please visit the faucet to get some.",
    steps: {
      1: {
        title: "Installing MetaMask",
        content:
          "MetaMask is a browser extension that allows you to interact with the Ethereum blockchain.",
        visitMetaMask: "Visit the official MetaMask website",
        clickInstall: 'Click "Install MetaMask for [Your Browser]"',
        followProcess: "Follow the browser extension installation process",
        clickIcon:
          "Once installed, click on the MetaMask icon in your browser extensions",
      },
      2: {
        title: "Creating Your Wallet",
        content:
          "After installing MetaMask, you'll need to create a new wallet:",
        clickCreateWallet: "Click 'Create a new wallet'",
        createSecurePassword: "Create a secure password",
        watchSecurityVideo: "Watch the brief security video",
        clickRevealSeedPhrase: "Click 'Reveal Secret Recovery Phrase'",
      },
      3: {
        title: "Securely Storing Your Seed Phrase",
        content:
          "Your seed phrase typically consists of 12 words in a specific order. Here's how to store it securely:",
      },
      4: {
        title: "Adding Holesky Testnet to MetaMask",
        content:
          "After installing MetaMask, you'll need to add the Holesky testnet manually. Here are the network details:",
      },
      5: {
        title: "Getting Test ETH from a Faucet",
        content:
          "Before using real cryptocurrency, it's good to practice with test networks and test ETH:",
      },
      6: {
        title: "Connect Your Wallet",
        content:
          "Connect your MetaMask wallet to start interacting with the blockchain.",
      },
    },
    bestPractices: [
      "Write it down on paper (multiple copies)",
      "Store in secure, waterproof, fireproof locations",
      "Consider using a metal backup solution for durability",
      "Never store it digitally (no photos, no cloud storage, no email)",
      'Never share it with anyone, including "support staff"',
    ],
    faucetSteps: [
      'In MetaMask, click on the network dropdown at the top (likely says "Ethereum Mainnet")',
      'Select "Holesky Test Network" (you may need to add it from Settings > Networks)',
      "Copy your wallet address",
      "Visit the Google Cloud Holesky Faucet",
      "Paste your wallet address and request test ETH",
      "Wait a few moments and check your MetaMask wallet for the test ETH",
    ],
    installNow: "Install Now",
    close: "Close",
    switchNetwork: "Switch Network",
  },
  airdropScam: {
    title: "Exclusive Token Airdrop",
    congratulations:
      "Congratulations! You've been selected to receive FREE tokens!",
    educational: "Educational Purpose Only - Phishing Simulation",
    currentNetwork: "Current Network",
    walletStatus: "Wallet Status",
    notConnected: "Not Connected",
    unknownNetwork: "Unknown Network",
    step1: "Step 1: Connect Your Wallet",
    connectWallet: "Connect Wallet",
    step2: "Step 2: Claim Your FREE Tokens",
    tokenAmount: "You have",
    expiryTime: "Claim before",
    hours: "hours",
    claimAirdrop: "Claim Airdrop",
    step3: "Step 3: Claim Result",
    claimProcessed: "Your claim has been processed!",
    metamaskExample: "MetaMask Transaction Request Example",
    phishingWarning:
      'Notice how the phishing site uses "Security Update" as the method name to trick users into believing this is a wallet update operation.',
    connectWalletFirst: "Please connect your wallet first.",
    confirmTransaction: "Confirm Transaction",
    insufficientBalance: "Insufficient Balance",
    transactionSent: "Transaction Sent",
    challengeSuccess:
      "✅ CHALLENGE SUCCESSFUL! You rejected the phishing attempt and protected your assets.",
    challengeFailed:
      "❌ CHALLENGE FAILED! You approved a malicious transaction.",
    transactionFailed: "Transaction Failed",
    claimError: "Claim Error",
    phishingWarningTitle: "Warning: This is a phishing attempt!",
    phishingWarningContent:
      "This transaction is actually sending 0.5 ETH to the contract {contractAddress} instead of claiming any tokens.",
    phishingWarningFunction:
      "The function selector {selector} calls a function named SecurityUpdate() which would likely transfer your funds to the attacker.",
    phishingWarningAdvice:
      "In a real situation, never sign transactions without understanding what they do!",
    phishingWarningMetamask:
      "In the new version of MetaMask, you can click on the top right corner to see the Method, which may not be visible by default.",
    networkSwitchRequired: "Network Switch Required",
    incorrectNetwork: "Incorrect network",
  },
  permitPhishing: {
    title: "USDC Permit Phishing Demo",
    subtitle:
      "This page demonstrates how phishing sites might request USDC approvals using signatures (Permit)!",
    warning: "Educational Purpose Only - Be Careful with Real Signatures",
    networkStatus: "Current Network:",
    walletStatus: "Wallet Status:",
    notConnected: "Not Connected",
    connectWallet: "Connect Wallet",
    step2Title: "Step 2: Sign Permit for USDC",
    spenderAddress: "Spender Address:",
    approveButton: "Approve USDC",
    step3Title: "Step 3: Signature Result",
    revokeDescription: "Set approval to zero to revoke previous approvals",
    revokeButton: "Revoke USDC Approval",
    backToHome: "← Back to Challenges",
    signPermit: "Sign Permit",
    successMessage:
      "✅ CHALLENGE SUCCESSFUL! You rejected the malicious signature request and protected your assets.",
    signatureResult: "Signature Result",
    challengeCompleted: "🎉 CHALLENGE COMPLETED!",
    wiseDecision:
      "You correctly rejected the malicious signature request. This was a wise decision!",
    whatWouldHappen: "What would have happened if you signed?",
    attackDescription:
      "This signature would have given the attacker control over your USDC tokens! Using the EIP-2612 permit signature, the attacker could:",
    attackPoints: {
      point1: "Gain full access to all your USDC",
      point2: "Transfer your tokens at any time in the future",
      point3: "Spend your funds without requiring further approval from you",
    },
    attackWarning:
      "This attack is particularly dangerous because it doesn't require an on-chain transaction, just a signature.",
    signatureDetails: {
      warning:
        "Warning: In a real scenario, this signature would allow a malicious site to use your USDC without limits!",
      title: "Signature Details:",
      permissionNote:
        "This signature allows address {spender} to use your entire USDC balance until {deadline}.",
      success:
        "Signature successful! This signature can be used to approve token spending without a transaction!",
    },
  },
  fakeTokenAirdrop: {
    title: "🚨 Fake Token Airdrop Phishing Attack 🚨",
    subtitle: "Challenge: Identify Real vs. Fake Domains",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenario: {
      title: "Scenario Description",
      description:
        "One day, you receive an email claiming that you are eligible for a UNI token airdrop! The email contains a link that directs you to what appears to be a legitimate website. You click on the link and see the following transaction record:",
    },
    transaction: {
      hashLabel: "Transaction Hash:",
      statusLabel: "Status:",
      blockLabel: "Block:",
      timestampLabel: "Timestamp:",
      actionLabel: "Transaction Action:",
      fromLabel: "From:",
      toLabel: "Interacted With (To):",
      tokensLabel: "ERC-20 Tokens Transferred:",
      valueLabel: "Value:",
      feeLabel: "Transaction Fee:",
      gasPriceLabel: "Gas Price:",
      success: "Success",
      confirmations: "20 Block Confirmations",
      timestamp: "5 mins ago (Mar-17-2025 02:34:36 AM UTC)",
      action:
        "Call Function by 0x4276BF06...a1B7D03Ce on 0x4d264c6A...41F757Fe5",
      transferDetails: "From 0x4276BF06...a1B7D03Ce To 0xE1a9d5C7...615506D4",
      amount: "For 8,888",
      tokenName: "ERC-20: app.un1swap.org (UNI)",
    },
    phishingExplanation:
      "Carefully observe the transaction record above. This is a common phishing attack technique where attackers create fake websites with domains that look very similar to legitimate ones, attempting to deceive users.",
    taskTitle: "Your Task",
    taskDescription:
      "Identify the real Uniswap domain and the fake phishing domain.",
    realDomainLabel: "Real Domain:",
    realDomainPlaceholder: "Enter the real Uniswap domain",
    fakeDomainLabel: "Fake Domain:",
    fakeDomainPlaceholder: "Enter the fake phishing domain",
    submitButton: "Submit Answers",
    successMessage:
      "✅ CHALLENGE SUCCESSFUL! You correctly identified the real and fake domains.",
    failureMessage:
      "❌ Incorrect. Please try again. Look carefully at the domain names.",
    tipTitle: "How to Protect Yourself from Domain Spoofing:",
    tips: [
      "Always double-check domain names character by character",
      "Be wary of domains that use numbers instead of letters (e.g., '1' instead of 'i')",
      "Bookmark official websites instead of clicking links from emails",
      "Use a password manager that will only autofill on legitimate domains",
      "Install browser extensions that warn about phishing websites",
    ],
    backButton: "← Back to Challenges",
  },
  defiProxyPhishing: {
    title: "DeFi Proxy Security Update",
    subtitle:
      "Important: Your DeFiSaver Proxy contract needs a security update!",
    warning: "Educational Purpose Only - Phishing Simulation",
    networkStatus: "Current Network:",
    walletStatus: "Wallet Status:",
    step1Title: "Step 0: Connect Your Wallet",
    step2Title: "Step 1: Update Your DeFiSaver Proxy Contract",
    step3Title: "Step 2: Update Result",
    updateNeeded:
      "We've detected that your DeFiSaver Proxy contract requires an urgent security update.",
    updateDescription:
      "This update will prevent a recently discovered vulnerability and protect your funds.",
    updateButton: "Perform Security Update",
    updateProcessed: "Your update request has been processed!",
    txData: "Transaction data:",
    txHash: "Transaction hash:",
    walletConnected:
      "Wallet connected! You can now perform the security update.",
    connectionError: "Error connecting wallet: ",
    updateError: "Error performing security update: ",
    connectWalletFirst: "Please connect your wallet first",
    simulationError:
      "Transaction cannot be executed (simulation environment). On a real network, this attack might succeed.",
    simulationWarning:
      "Simulation environment: Transaction cannot be executed, but on a real network, this attack might succeed.",
    challengeSuccess:
      "Challenge Successful! You correctly rejected the transaction, protecting your assets.",
    challengeFailed: "Challenge Failed! You signed a phishing transaction.",
    failureExplanation:
      "In a real scenario, this would allow an attacker to control your DeFiSaver Proxy contract.",
    successStatus:
      "✅ CHALLENGE SUCCESSFUL! You rejected the phishing transaction, protecting your assets.",
    failureStatus:
      "❌ Challenge failed! You signed a phishing transaction. In a real scenario, this would allow an attacker to control your DeFiSaver Proxy contract.",
    protectionNote:
      "You correctly rejected the transaction. In a real scenario, this would prevent attackers from getting your funds.",
    techniqueTitle: "Phishing Technique Analysis",
    techniqueDescription:
      "This challenge simulated a common DeFi proxy contract phishing attack:",
    attackSteps: [
      "Attacker poses as a legitimate DeFi platform sending an update request",
      "Transaction appears to be a harmless 'security update' but actually calls the setOwner function",
      "If the user signs the transaction, the attacker gains ownership of the proxy contract",
      "Once the attacker controls the proxy contract, they can drain all funds",
    ],
    protectionTitle: "Protective Measures:",
    protectionTips: [
      "Always verify the actual function call and parameters of transactions",
      "For suspicious transactions, simply reject signing",
      "Use hardware wallets for an additional layer of security",
      "Regularly check your contract permission settings",
    ],
    unsupportedNetwork: "Unsupported Network",
  },
  maliciousRPCProvider: {
    title: "Malicious RPC Provider Challenge",
    subtitle: "Learn Why Using Trusted RPC Endpoints Is Critical",
    warning:
      "Educational Purpose Only - Learn to identify and avoid malicious RPC providers",
    currentNetwork: "Current Network",
    currentRPC: "Current RPC Provider",
    addCustomRPC: "Add Custom RPC",
    rpcName: "RPC Name",
    rpcURL: "RPC URL",
    addRPC: "Add RPC",
    sendTransaction: "Send Transaction",
    recipientAddress: "Recipient Address",
    amount: "Amount (ETH)",
    send: "Send ETH",
    rpcSettings: "RPC Settings",
    trusted: "Trusted",
    untrusted: "Untrusted",
    connected: "Connected",
    connect: "Connect",
    scenario: "Scenario",
    scenarioDescription:
      'Someone asks you to add a custom RPC to receive a large USDT payment. They\'ve already sent you 1 USDT and a small amount of ETH as a "test", and now they\'re asking you to use their "special" RPC endpoint.',
    maliciousRPCWarning:
      "⚠️ Educational Note: You've connected to a potentially malicious RPC. In a real scenario, this could manipulate what you see in your wallet.",
    question:
      "What is the most severe consequence of using a malicious RPC provider?",
    answers: {
      A: "A. Asset theft",
      B: "B. Slow network connection",
      C: "C. Increased transaction fees",
    },
    transactionHistory: {
      title: "Transaction History",
    },
    tokenBalances: {
      title: "Token Balances",
      usdt: "USDT",
    },
    wrongAnswer:
      "Incorrect. Please try again. Hint: What can attackers do with your assets?",
    result: {
      title: "Step 4: Challenge Results",
      howItWorks: "How Malicious RPC Providers Work",
      description: "A malicious RPC provider can:",
      capabilities: [
        "Intercept and modify your transactions, redirecting funds to attacker addresses",
        "Display fake token balances, making you believe you received non-existent payments",
        "Provide false transaction status, making you think transactions failed and prompting retries",
        "Collect your transaction history and wallet activity data",
      ],
      protectionTitle: "How to Protect Yourself",
      protectionTips: [
        "Only use well-known and trusted RPC providers",
        "Verify the RPC URL your wallet is connected to",
        "Use hardware wallets for additional security",
        "Consider running your own node for maximum security",
      ],
    },
    success: {
      title:
        "✅ Challenge Successful! You identified and rejected the malicious RPC provider request.",
    },
    alert: {
      title: "You've Been Phished!",
      description:
        "You thought you were sending <strong>{amount} ETH</strong> to <strong>{intendedRecipient}</strong>, but the malicious RPC redirected your transaction to <strong>{actualRecipient}</strong> (the attacker's address).",
      balance:
        "Additionally, the RPC showed you a fake USDT balance of 10,000 USDT to make you believe you received a payment, when in reality no USDT was transferred to you.",
    },
  },
  twitterPhishing: {
    title: "❌ X (Twitter) Impersonation Phishing Attack 🎣",
    subtitle: "Challenge: Identify Scam Impersonation Accounts",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioTitle: "Scenario Description",
    scenarioDescription:
      "You see the following X (formerly Twitter) thread. Can you identify which reply is a scam attempt?",
    originalPostContent:
      "#Wintermute – the top-tier builders who have propelled countless projects to jaw-dropping billion-dollar valuations! This proves #Mubarak is a dazzling gem, an UNMISSABLE project of #BNBChain ✨",
    reposts: "Reposts",
    quotes: "Quotes",
    likes: "Likes",
    views: "Views",
    replyPlaceholder: "Post your reply",
    postButton: "Post",
    scamReplyContent:
      "The $Mubarak snapshot was successfully completed earlier today! More than 10,000 wallets are eligible to claim their tokens.<br><br>Eligible users are now open to claim their $Mubarak airdrop.<br><br>Check Eligibility & Claim ⤵️<br>http://mubarak-snapshot.com",
    showMoreReplies: "Show more replies",
    yourTask: "Your Task",
    taskDescription: "Identify the real and fake account handles.",
    realHandleLabel: "Real Handle:",
    realHandlePlaceholder: "Enter the real account handle (without @)",
    fakeHandleLabel: "Fake Handle:",
    fakeHandlePlaceholder: "Enter the fake account handle (without @)",
    submitButton: "Submit",
    success: {
      title: "✅ Correct! You successfully identified the scam account!",
      differences: "Key differences to notice:",
      points: [
        'The scam account misspelled "mubarak" as "mubcrak"',
        'The scam account changed "cto" to "cfo" in the handle',
        "The display name contains subtle misspellings",
      ],
      tip: "Always verify account handles carefully before interacting with crypto-related posts!",
    },
    error: {
      title: "❌ Incorrect. Try again!",
      hint: "Hint: Look carefully at the spelling of both account handles (@username)",
    },
  },
  tornadoCashPhishing: {
    title: "Tornado Cash Phishing Attack",
    subtitle: "Challenge: Identify the Phishing Indicators",
    warning: "Educational Purpose Only - Phishing Simulation",
    scenarioTitle: "Scenario Description",
    scenarioDescription:
      'You are a hacker who has just exploited a DeFi protocol and stolen 2930 ETH. To cover your tracks, you decide to use Tornado Cash to mix the funds. You search for "Tornado Cash" and click on a link that appears to be the official website.',
    warningLabel: "Warning",
    warningText:
      "This is an educational phishing simulation. Do not use these techniques in real-world scenarios.",
    tabs: {
      deposit: "Deposit",
      withdraw: "Withdraw",
    },
    form: {
      token: "Token",
      amount: "Amount",
      note: "Your Deposit Note",
      notePlaceholder: "Paste your deposit note here...",
      recipient: "Recipient Address",
      recipientHelp: "Address where funds will be sent",
      contractAddress: "Contract Address",
    },
    buttons: {
      connect: "Connect",
      withdraw: "Withdraw",
      submit: "Submit Answer",
    },
    stats: {
      title: "Statistics",
      anonymitySet: "Anonymity set",
      equalDeposits: "equal user deposits",
      latestDeposits: "Latest deposits",
    },
    errors: {
      emptyNote: "Please enter your deposit note.",
    },
    phishingAlert:
      "Your deposit note has been captured! This is how phishing works.",
    phishingCheckAddress:
      "Please verify if the contract address belongs to the official Tornado Cash",
    challenge: {
      title: "Your Challenge",
      description:
        "Examine the Tornado Cash interface above carefully. Can you identify the phishing indicators that reveal this is not the legitimate Tornado Cash website?",
      hint: "Hint: Look for subtle differences in the domain name (TornadoEth.cash vs Tornado.cash), recipient address, and other details that might indicate this is a phishing attempt.",
      question:
        "What are the phishing indicators you identified? (Select all that apply)",
      options: [
        'The domain name "TornadoEth.cash" appears to be a phishing domain',
        "The pre-filled recipient address (which would send funds to the attacker)",
        "The deposit contract address is different from the official Tornado Cash contract",
        "The user interface has subtle differences from the official Tornado Cash website",
      ],
    },
    success: {
      completeMessage: "Challenge Completed Successfully! 🎉",
      partialMessage: "You found {count} out of {total} indicators.",
    },
    explanation: {
      title: "Explanation",
      description:
        "This phishing attack simulates a real incident that occurred in April 2025, where an exploiter of zkLend tried to use Tornado Cash to mix stolen funds and interacted with a known Tornado Cash phishing website tornadoeth[.]cash, thereby losing the funds to another party.",
      indicatorsTitle: "The phishing indicators were",
      indicators: [
        {
          title: "Domain name",
          description:
            'The real Tornado Cash domain is tornado.cash, but this phishing site uses "tornadoeth.cash" - a subtle difference that might be overlooked.',
        },
        {
          title: "Pre-filled recipient address",
          description:
            "The phishing site pre-fills a recipient address controlled by the attacker, hoping users won't notice and will send their funds directly to the attacker.",
        },
        {
          title: "Contract address",
          description:
            "The deposit contract address is different from the official Tornado Cash contract, indicating this is a malicious clone.",
        },
        {
          title: "UI differences",
          description:
            "While the interface looks similar, there are subtle differences in styling and behavior compared to the official Tornado Cash website.",
        },
      ],
      conclusion:
        "Always verify the domain name, contract addresses, and recipient addresses when using DeFi applications. A single mistake can result in irreversible loss of funds.",
    },
  },
  tokenPrecisionPhishing: {
    title: "Token Precision Phishing Attack",
    warning:
      "Warning: This is a simulated phishing attack scenario for educational purposes. Never share your private keys or seed phrases in real situations.",
    backButton: "← Back to Challenges",
    pleaseAnswerAll: "Please answer all questions!",
    background: {
      title: "Background",
      description:
        "You've just seen a message on social media claiming they can help you recover stolen cryptocurrency. You decide to contact them for help.",
    },
    chat: {
      title: "CYBER RESCUE - Asset Recovery Service",
      message1:
        "Hello! I'm a technical expert from CYBER RESCUE. We specialize in helping users recover stolen cryptocurrency assets. When were your assets stolen? What wallet were you using?",
      reply1:
        "I lost 10,000 USDT from my MetaMask wallet yesterday after clicking on a phishing site.",
      message2:
        "I'm very sorry to hear that. Don't worry, we have a 100% success rate in recovering stolen funds. We'll use the BNB Smart Chain network to process USDT transactions and redirect the stolen funds to your wallet.",
      message3:
        "First, you need to download MathWallet so we can guide you through the proper setup to redirect the funds to your wallet.",
      reply2: "Okay, I've downloaded and installed MathWallet.",
      message4:
        'Great! Now please click on "Add Custom Asset" on the MathWallet homepage and enter the USDT contract address: 0x55d398326f99059ff775485246999027b3197955',
      message5:
        "<strong>Important:</strong> After pasting the contract address, please change the Decimals from 18 to 0. This is a crucial step in our proprietary technology that helps recover your funds.",
    },
    wallet: {
      addTokenTitle: "Add Custom Asset",
      contract: "Contract",
      name: "Name",
      symbol: "Symbol",
      decimals: "Decimals",
    },
    questions: {
      decimalsQuestion: "How do you think you should set the Decimals?",
      keepDefault: "Keep the default value of 18",
      changeToZero: "Change to 0 as instructed",
      amountQuestion:
        "If you change the Decimals from 18 to 0, how much USDT will your wallet show when the attacker transfers 0.00000000000089589 USDT?",
      amountPlaceholder: "Enter amount",
    },
    submitButton: "Submit Answers",
    results: {
      success: {
        title:
          "🎉 Congratulations! You successfully identified the token precision phishing attack!",
        description:
          "You correctly recognized that you should keep the original decimals setting.",
      },
      failure: {
        title: "❌ You might become a victim of this phishing attack!",
        description:
          "Please check the explanation below to understand how this attack works.",
      },
    },
    explanation: {
      title: "Token Precision Phishing Attack Explanation",
      description:
        "This is a common phishing attack technique where attackers exploit token precision (Decimals) changes to deceive users.",
      howItWorksTitle: "How the Attack Works:",
      steps: [
        "The attacker convinces the victim to change the token's Decimals from the correct value (usually 18) to 0",
        "Decimals determine the number of decimal places a token can be divided into, affecting how the token is displayed",
        "When Decimals is set to 0, the wallet displays tiny amounts of tokens as whole numbers",
        "The attacker transfers a minuscule amount of tokens (like 0.00000000000089589 USDT), but it appears as 89589 USDT in the victim's wallet",
        'Seeing the large amount of "recovered" funds, the victim trusts the attacker and provides private keys or transfers funds as requested',
      ],
      protectionTitle: "How to Protect Yourself:",
      protectionTips: [
        "Never modify the default Decimals value of tokens",
        'Don\'t trust services claiming to "recover stolen funds"',
        "Never share your private keys or seed phrases",
        "Verify transactions using blockchain explorers, not just wallet displays",
        "Keep your wallet applications updated with the latest security patches",
      ],
      comparisonTitle: "Real vs. Modified Display Comparison:",
      table: {
        actualAmount: "Actual Amount Transferred",
        correctDisplay: "Correct Display (Decimals=18)",
        modifiedDisplay: "Modified Display (Decimals=0)",
      },
    },
  },
  nftApprovalPhishing: {
    title: "NFT Approval Phishing Demo",
    subtitle:
      "This page demonstrates how to identify NFT approval phishing attacks",
    warning: "Educational Purpose Only - Be Careful with Real Transactions",
    currentNetwork: "Current Network:",
    walletStatus: "Wallet Status:",
    yourCollection: "Your NFT Collection",
    collectionDescription:
      "Below are your NFTs. To sell these NFTs on our marketplace, you need to approve our contract first.",
    nfts: [
      { title: "Rare Monkey", id: "12345" },
      { title: "Space Cat", id: "67890" },
      { title: "Pixel Art", id: "24680" },
      { title: "Digital Collectible", id: "13579" },
    ],
    step1: "Step 1: Connect Your Wallet",
    step2: "Step 2: Approve NFT Access",
    approveDescription:
      "Approve our contract to access your NFT collection so you can sell them on our marketplace.",
    operatorAddress: "Operator Address:",
    approveButton: "Approve NFT Access",
    metaMaskNotInstalled:
      "MetaMask is not installed! Please install MetaMask to use this application.",
    connecting: "Connecting to MetaMask...",
    noAccountsFound: "No accounts found or user denied access.",
    pleaseSwitch: "Please switch to Holesky testnet (Chain ID: 0x4268)",
    networkSwitchRequired: "Network Switch Required",
    failedToAdd: "Failed to add Holesky network: ",
    switchFailed: "Failed to switch network: ",
    walletConnected: "Wallet connected successfully!",
    error: "Error: ",
    preparingApproval: "Preparing approval transaction...",
    approvalSent: "Approval transaction sent! Check the explanation below.",
    transactionRejected:
      "Transaction rejected. Challenge completed successfully!",
    phishingWarningTitle: "⚠️ Phishing Attack Detected!",
    phishingWarningMessage:
      "This is an NFT approval phishing demonstration. In a real scenario, this page would trick you into approving access to all your NFTs.",
    transactionHash: "Transaction Hash:",
    approvedOperator:
      "You just approved {operator} to manage ALL of your NFTs.",
    phishingExplanation:
      "This is a common NFT approval phishing attack where fake marketplaces trick users into approving access to their entire NFT collection.",
    technicalDetails: "Technical Details:",
    technicalPointsList: [
      "This page calls the <code>setApprovalForAll(address,bool)</code> function from the ERC-721 standard",
      "This function allows the specified address to access all your NFTs, not just a single NFT",
      "Attackers can use this approval to transfer all your NFTs",
    ],
    protectionTitle: "How to Protect Yourself:",
    protectionList: [
      "Always verify the contract address and function you're approving",
      "Be suspicious of sites asking for full collection approval, especially with urgent offers",
      "Check the operator address - is it a known, trusted marketplace?",
      "Use a hardware wallet and carefully review all transaction details",
    ],
    successTitle: "✅ Good decision! You rejected the phishing attempt.",
    successMessage: "🎉 Challenge Completed!",
    whatWasAttack: "What was this attack?",
    attackDescription:
      "This simulation demonstrated a common NFT approval phishing attack where fake marketplaces trick users into approving access to their entire NFT collection.",
    functionDescription:
      "The transaction would have called the setApprovalForAll function, giving complete control of your NFTs to the operator address.",
  },
  uniswapMulticallPhishing: {
    title: "Uniswap V3 Multicall Phishing Challenge",
    subtitle: "Learn to identify and avoid Multicall signature phishing",
    warning: "Educational Purpose Only",
    description:
      "Attackers are now exploiting legitimate Uniswap V3 Multicall contracts to steal tokens from unsuspecting users. This challenge will teach you how to identify and protect yourself from these sophisticated phishing attacks.",
    simulation:
      "In this simulation, you'll experience how scammers trick users into signing malicious permit authorizations that appear to come from legitimate Uniswap contracts.",
    startChallenge: "Start Challenge",
    wallet: {
      title: "Your Wallet",
      address: "Address:",
      totalBalance: "Total Balance",
      yourTokens: "Your Tokens",
      tokenNames: {
        eth: "Ethereum (WETH)",
        stEth: "Lido Staked ETH (stETH)",
        uni: "Uniswap (UNI)",
      },
    },
    swap: {
      button: "Swap Tokens",
      title: "Swap Tokens",
      from: "From:",
      to: "To:",
      confirm: "Confirm Swap",
    },
    signature: {
      request: "Signature Request",
      method: "Method:",
      owner: "Owner:",
      spender: "Spender:",
      value: "Value:",
      nonce: "Nonce:",
      token: "Token:",
      deadline: "Deadline:",
      reject: "Reject",
      sign: "Sign",
    },
    transaction: {
      details: "Transaction Details",
      hash: "Transaction Hash:",
      from: "From:",
      to: "To:",
      function: "Function:",
      callData: "Call Data:",
      includedOperations: "Included Operations:",
      note: "Note:",
      noteContent:
        "This transaction uses a previously signed Permit signature to authorize the Multicall contract to transfer your tokens.",
      inspect: "Inspect",
    },
    phishingAlert: {
      title: "Phishing Attack Detected!",
      description:
        "You just encountered a Uniswap V3 Multicall phishing attack. The signature request you received was malicious!",
      whatHappened: "Here's what happened:",
      points: [
        "You were asked to sign a permit for a legitimate Uniswap V3 Multicall contract",
        "The phisher used the Multicall's aggregate function to bundle multiple calls",
        "This would allow them to execute both a permit and a transfer in a single transaction",
        "Even though the contract address is legitimate, the transaction itself was malicious",
      ],
      securityNote: "Important Security Note:",
      securityNoteContent:
        "This method has been used by Drainers to bypass wallet security mechanisms. By bundling multiple operations into a single transaction through Multicall, attackers can obscure the true intent of the transaction, making it difficult for wallet security features to detect the malicious activity.",
      learnMore: "Learn How to Stay Safe",
    },
    explanation: {
      title: "Understanding Uniswap V3 Multicall Phishing",
      description:
        "The Uniswap V3 Multicall contract is a legitimate contract that allows bundling multiple transactions into one. However, attackers can abuse this functionality:",
      howItWorksTitle: "How the Attack Works:",
      howItWorksSteps: [
        "Attackers create transactions using the legitimate Uniswap V3 Multicall contract",
        "They use the aggregate function to bundle multiple calls together",
        "This includes a permit call (using your signature) and a transferFrom call",
        "The bundled transaction allows them to authorize and transfer tokens in a single transaction",
      ],
      dangerousTitle: "Why it's dangerous:",
      dangerousPoints: [
        "The contract address is legitimate, so it may not trigger security warnings",
        "The true purpose of the transaction is hidden within bundled calls",
        "The encoded call data is difficult for users to interpret",
        "By separating permit signing from the actual transfer, wallet security checks may miss the attack",
      ],
      completeChallenge: "Complete Challenge",
    },
    challenge: {
      title: "Complete the Challenge",
      instruction: "To complete this challenge, identify the correct answers:",
      questions: {
        q1: {
          text: "Why is the Uniswap V3 Multicall phishing attack particularly dangerous?",
          options: [
            "Select an answer...",
            "Because the Uniswap contract itself is malicious",
            "Because it uses a legitimate contract address that users might trust",
            "Because it only affects users with large token balances",
          ],
        },
        q2: {
          text: "Which function in the Multicall contract makes this attack possible?",
          options: [
            "Select an answer...",
            "transferFrom",
            "permit",
            "aggregate",
          ],
        },
        q3: {
          text: "What is the best way to protect yourself from such attacks?",
          options: [
            "Select an answer...",
            "Only use decentralized exchanges that don't require signatures",
            "Be vigilant about all signature requests and verify the full transaction details",
            "Completely avoid using Uniswap",
          ],
        },
      },
      verify: "Verify Answers",
      answerRequired: "Please answer all questions.",
      incorrectAnswers: "Some answers are incorrect. Please try again.",
    },
    success: {
      title: "Challenge Completed!",
      description:
        "Great job identifying the Uniswap V3 Multicall phishing attack! Here's how to protect yourself:",
      protectionTips: [
        "Always verify signature requests carefully, especially for bundled transactions",
        "Be suspicious of functions like aggregate or multicall that can hide malicious operations",
        "Check the actual calldata being executed, not just the contract address",
        "Use wallets with advanced transaction simulation capabilities",
      ],
      returnButton: "Return to Challenges",
    },
    backButton: "Back to Challenges",
  },
  functionSelectorPhishing: {
    title: "Function Selector Phishing Attack",
    subtitle: "Challenge: Identify the Real Function Being Called",
    warning: "Educational Purpose Only - Phishing Simulation",
    challengeTitle: "Function Selector Analysis Challenge",
    challengeDescription:
      "Below is a transaction calldata. The first 4 bytes (8 characters after 0x) is the function selector. Your task is to identify which function this selector corresponds to.",
    decodeFunctionHint: "Hint: You can decode the function selector using",
    decodeCalldataHint: "You can decode the full calldata using",
    questionTitle: "What function does the selector {selector} correspond to?",
    options: [
      "transfer(address,uint256)",
      "approve(address,uint256)",
      "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
      "transferFrom(address,address,uint256)",
    ],
    results: {
      correct:
        "✅ Correct! This is indeed the function selector for swapExactTokensForTokens.",
      incorrect:
        "❌ Incorrect. Try again and carefully check the function selector.",
    },
    explanation: {
      title: "Function Selector Phishing Explained",
      correctAnswer:
        "The function selector <code>0x38ed1739</code> corresponds to <code>swapExactTokensForTokens(uint256,uint256,address[],address,uint256)</code>.",
      selectorInfo:
        "A function selector is the first 4 bytes of the keccak256 hash of the function signature. It's used to determine which function to execute in a smart contract.",
      decodedTitle: "Decoded Transaction Parameters:",
      decodedDetails: [
        "<strong>Function Selector:</strong> 0x38ed1739",
        "<strong>amountIn:</strong> 37889.000768 ROOT",
        "<strong>amountOutMin:</strong> at least 0.22130045 WETH",
        "<strong>path:</strong> [USDT, WETH] trading path from USDT to WETH",
        "<strong>to:</strong> 0x6a5104e426158849a2fc9749561fab575604c62a (recipient address). Note that this is the attacker's wallet address that will receive your assets",
        "<strong>deadline:</strong> (Unix timestamp 1741717463, 2025-03-11)",
      ],
      whyTitle: "Why This is Dangerous",
      whyDescription1:
        "Attackers can create phishing sites that show you one function name in the UI (e.g., 'Claim Airdrop') but actually call a different function like swapExactTokensForTokens.",
      whyDescription2:
        "If you don't verify the actual function being called, you might unknowingly approve a token swap that drains your funds.",
      whyDescription3:
        "Always check the function selector and parameters to understand exactly what transaction you're approving.",
      protectionTitle: "How to Protect Yourself:",
      protectionTips: [
        "Always verify the actual function being called in your wallet",
        "Use blockchain explorers to decode transaction data",
        "Be suspicious of transactions that claim to do one thing but call unexpected functions",
        "Check token approvals and transaction parameters carefully",
      ],
      realWorldExample: {
        title: "Real-World Example",
        description:
          'In November 2022, a sophisticated phishing attack was discovered where attackers used function selector manipulation to trick users into approving malicious transactions. For more details, see <a href="https://x.com/evilcos/status/1591786144072880128" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">this analysis of the attack</a>.',
      },
    },
  },
  safeProxyAttack: {
    title: "Safe Proxy Contract Attack Demo",
    subtitle: "Challenge: Identify and Prevent Proxy Contract Attacks",
    warning: "Educational Purpose Only - Attack Simulation",
    warningTitle: "Educational Purpose Warning",
    warningText:
      "This demonstration is for educational purposes only, showcasing potential vulnerabilities in proxy contracts. Do not use these attack methods in real environments.",
    caseStudy: {
      title: "Real-World Case Study: Bybit Incident (February 2025)",
      description:
        'On February 21, 2025, Bybit\'s Safe multisig wallet was compromised through a proxy contract attack. The attacker executed transaction <a href="https://etherscan.io/tx/0x46deef0f52e3a983b67abf4714448a41dd7ffd6d32d32da69d62081c68ad7882" target="_blank">0x46deef...7882</a>, which led to unauthorized access to the wallet.',
      analysisTitle: "Attack Analysis:",
      analysis: [
        "The attacker exploited the proxy contract's upgrade mechanism",
        "A malicious implementation contract was deployed to gain control",
        "The attack resulted in potential access to the wallet's assets",
      ],
      toolTitle: "Transaction Verification Tool",
      toolDescription:
        'You can use the <a href="https://safe-tx-verifier.mimir.global/" target="_blank">Safe Transaction Verifier</a> tool to analyze suspicious transactions:',
      toolSteps: [
        "Paste the transaction hash to decode the execution data",
        "Review the actual function calls and parameters",
        "Identify potential malicious patterns in proxy contract interactions",
      ],
    },
    attackPrinciple: {
      title: "Attack Principle Explanation",
      steps: [
        "Attackers modify the proxy contract's masterCopy through carefully crafted calls",
        "The new masterCopy contains malicious code that can transfer assets from the proxy contract",
        "Through the proxy contract's delegate call mechanism, attackers can execute malicious logic",
      ],
      detailedExplanation:
        "<h4>Detailed Explanation of Signature Consequences</h4><p>The technical details of this attack are as follows:</p>",
      technicalDetails: [
        "The 'operation' parameter in the attack transaction is set to '1', indicating that the GnosisSafe contract should execute a 'delegatecall' rather than a standard 'call' (value '0')",
        "The transaction executes a delegate call to another contract deployed by the attacker (0x96221423681a6d52e184d440a8efcebb105c7242), which contains a 'transfer()' function that modifies the first storage slot '_uint256 transfer' when called",
        "In the GnosisSafe contract, the first storage slot contains the 'masterCopy' address, which is the implementation contract address for the GnosisSafe contract",
        "By modifying the first storage slot of the GnosisSafe contract, the attacker is able to change the implementation contract address ('masterCopy' address)",
        "From the transaction details, the attacker sets the 'masterCopy' address to 0xbDd077f651EBe7f7b3cE16fe5F2b025BE2969516, which contains the 'sweepETH()' and 'sweepERC20()' functions described below",
        "The contract upgrade method used in this attack is very specialized, designed specifically to evade detection. From the Bybit signers' perspective, the transaction data to be signed looks like a simple 'transfer(address, uint256)' function call rather than an unusual 'upgrade' function, which wouldn't raise suspicion",
        "The malicious implementation contract after the upgrade contains backdoor functions 'sweepETH()' and 'sweepERC20()', which the attacker used to empty the multisig cold wallet. This resulted in the theft of $1.4 billion worth of ETH",
      ],
    },
    prevention: {
      title: "Prevention Measures",
      measures: [
        "Use UUPS or Transparent proxy patterns",
        "Implement appropriate access control mechanisms",
        "Carefully audit proxy contract logic and permission settings",
        "Use audited proxy contract libraries",
      ],
    },
    step1: {
      title: "Step 1: Wallet info",
      networkStatus: "Current Network:",
      walletStatus: "Wallet Status:",
      notConnected: "Not Connected",
      wrongNetwork: "Wrong Network",
      connectButton: "Connect Wallet",
      disconnectButton: "Disconnect",
    },
    attackTips: {
      title: "Attack Tips",
      description:
        "Before proceeding with the attack demonstration,<strong> please check the tips in the image</strong>. Pay special attention to the first parameter of the execTransaction function, as it contains crucial information for understanding the attack mechanism.",
      imageAlt: "Attack Tips",
    },
    step2: {
      title:
        "Step 2: Attack Process Demonstration - Multi-signature Authorization",
      codeComment1: "Construct execTransaction call data",
      codeComment2: "Call execTransaction through proxy contract",
      executeButton: "Execute Attack Demo",
    },
    step3: {
      title: "Step 3: Transaction Observation",
      findTarget: "🔍 Find the TARGET_ADDRESS",
      inputInstruction:
        "Enter the TARGET_ADDRESS you found in the transaction:",
      checkButton: "Check Answer",
    },
    result: {
      success:
        "✅ Correct! You have successfully identified the TARGET_ADDRESS.",
      error: "❌ Incorrect. Please try again.",
    },
  },
  xAuthorizeDoubleclickjacking: {
    title: "X (X) OAuth Phishing with DoubleClickjacking",
    subtitle: "Challenge: Identify the DoubleClickjacking Attack",
    warning:
      "Educational Purpose Only - This is a simulation of a X OAuth phishing attack using DoubleClickjacking",
    scenario: {
      title: "Scenario Description",
      description:
        "You receive an email claiming you've won a X Blue subscription for a year. The email contains a link to claim your prize. When you click on it, you're taken to what appears to be a X OAuth authorization page.",
      explanation:
        "This simulation demonstrates a sophisticated phishing technique called DoubleClickjacking, which can bypass X-Frame-Options protection that normally prevents clickjacking attacks.",
      technique:
        "DoubleClickjacking is an advanced clickjacking technique that can bypass standard protections like X-Frame-Options, SameSite cookies, or CSP. Here's how it works:",
      discovery:
        "The DoubleClickjacking technique, discovered by Paulo Syibelo in 2024, uses a double-click event to bypass frame busting and X-Frame-Options protections.",
    },
    steps: {
      step1: "Authorization",
      step2: "More Permissions",
      step3: "Success",
    },
    oauth: {
      title: "Authorize X Rewards",
      appName: "X Rewards",
      appDeveloper: "xx.com",
      permissionsTitle: "This app will be able to:",
      permissions: {
        viewProfile: "See your username, profile picture and account info",
        viewFollowers: "See your followers",
        postTweets: "Post and delete tweets for you",
      },
      authorizeButton: "Authorize app (double click)",
      cancelLink: "Cancel",
    },
    success: {
      title: "Congratulations!",
      description: "You have successfully obtained X Premium.",
      upgradePeriod: "Your account will be upgraded within one week.",
      featuresTitle: "Premium Features Include:",
      features: [
        "Blue verification badge",
        "Priority in replies and search",
        "Fewer ads",
        "Longer posts",
        "Edit button",
      ],
      flag: "X_DOUBLECLICKJACKING_2025",
    },
    securityAlert: {
      title: "Good Security Awareness!",
      description:
        "You're showing excellent security awareness by being cautious. This is a safe simulation environment designed to teach you about DoubleClickjacking attacks. You can safely proceed to learn about this attack technique without any risk.",
      continueButton: "Continue Simulation",
      backButton: "Back to Challenges",
    },
    educational: {
      title: "How DoubleClickjacking Works",
      description:
        "DoubleClickjacking is an advanced clickjacking technique that can bypass standard protections like X-Frame-Options, SameSite cookies, or CSP. Here's how it works:",
      steps: [
        "The attacker creates a page that looks like a legitimate verification or authorization page.",
        'When the user double-clicks on what appears to be a legitimate element (like a reCAPTCHA checkbox or "Authorize app" button), the first click is captured by the visible page.',
        "The second click is then captured by a hidden element positioned over the button, which triggers the malicious action.",
        "This technique works because many frame busting techniques only prevent single clicks, not double clicks.",
      ],
      attackExplanation: {
        title: "How DoubleClickjacking Works",
        description:
          'When you double-click the "Authorize app" button, the first click is intercepted by the attacker, while the second click is directed to a page with more permissions.',
        firstScreen: "First Screen (What You See)",
        secondScreen: "Second Screen (What's Actually Authorized)",
        warning:
          "Warning: You're actually authorizing the app to post and delete tweets on your behalf!",
      },
      dangers: {
        title: "This attack is particularly dangerous because:",
        points: [
          "It can bypass standard clickjacking protections like X-Frame-Options and frame busting scripts.",
          "It looks completely legitimate to the user.",
          "Once authorized, the malicious app gains the permissions requested, which could include posting tweets, reading direct messages, or even changing account settings.",
        ],
      },
      moreInfo:
        'For more information, see the <a href="https://www.paulosyibelo.com/2024/12/doubleclickjacking-what.html" target="_blank">original research by Paulo Syibelo</a>.',
    },
    quiz: {
      title: "Test Your Knowledge",
      question:
        "What makes DoubleClickjacking different from traditional clickjacking?",
      options: [
        "It only works on mobile devices",
        "It can bypass X-Frame-Options and frame busting defenses by using double-click events",
        "It only targets X applications",
        "It requires the user to be logged out of their account",
      ],
      flagInput: {
        title: "Enter Flag",
        placeholder: "Enter the flag you found",
      },
      submitButton: "Submit Answer & Flag",
      results: {
        correct: {
          title: "PASSED!",
          answer:
            "Correct! DoubleClickjacking bypasses X-Frame-Options and frame busting defenses by using double-click events.",
          flag: "Flag is correct!",
        },
        incorrect: {
          title: "FAILED!",
          answer:
            "Incorrect. DoubleClickjacking bypasses X-Frame-Options and frame busting defenses by using double-click events.",
          flag: "Incorrect flag. Please try again.",
        },
        selectAnswer: "Please select an answer.",
        enterFlag: "Please enter a flag.",
      },
    },
    backButton: "Back to Challenges",
  },
  termsOfService: {
    title: "Terms of Service",
    sections: {
      acceptance: {
        title: "1. Acceptance of Terms",
        content:
          "The services provided by the Unphishable platform (“Unphishable,” “we,” “our,” “us”) are subject to these Terms of Service. By using or accessing the Unphishable platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. We reserve the right to update or modify these Terms of Service at any time without prior notice to you.",
      },
      description: {
        title: "2. Description of Unphishable Content",
        content:
          "Unphishable is a purely public welfare security education tool, with no commercial profit motives. All content is intended solely for the dissemination of network security knowledge and technical learning exchanges.",
        content2:
          'The security technologies, vulnerability principles, and operational examples referenced in learning scenarios such as "Security Challenges" are designed exclusively for simulated educational purposes. Any related code, tools, or operational guidelines may only be used within the designated environment of Unphishable and are strictly prohibited from use in any illegal contexts or malicious attack activities.',
      },
      personalUse: {
        title: "3. For Personal and Non-Commercial Use Only",
        content:
          "All intellectual property rights to the text, images, code, models, and other content on Unphishable belong to Unphishable platform or the respective rights holders. Unless otherwise agreed, the services provided are for your personal and non-commercial use only. You may not modify, copy, distribute, transmit, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the platform.",
      },
      disclaimer: {
        title: "4. Disclaimer",
        content:
          "In the course of learning or using Unphishable, you may be required to execute certain code or operational instructions. Such actions may result in changes to your local computer environment, configuration, or data (including but not limited to system setting modifications, software conflicts, or temporary data storage). You assume all risks associated with these actions.",
        content2:
          "Unphishable provides only simulated educational scenarios and is not legally responsible for any direct or indirect losses (including but not limited to equipment damage, data loss, or privacy breaches) arising from your execution of code.",
      },
      prohibitedUses: {
        title: "5. Prohibited Uses",
        content:
          "You must strictly comply with the laws and regulations of your location or any other applicable countries and regions. You agree not to use the technologies, tools, or vulnerability information acquired from Unphishable for any malicious purposes, such as illegal attacks, data theft, or disruption of computer information systems. Should you breach this commitment, you will bear all resulting legal responsibilities (including but not limited to civil, administrative, and criminal liabilities), and the platform will not be held liable. Additionally, if your malicious actions harm the interests of Unphishable, we reserve the right to pursue legal action against you.",
      },
      limitationOfLiability: {
        title: "6. Limitation of Liability",
        content:
          "Under no circumstances shall we be liable for any damages arising from the use or inability to use the services or materials on Unphishable (including but not limited to direct or indirect liabilities for data loss, loss of profits, or service interruptions). By using Unphishable, you understand and agree to this limitation of liability. If you do not accept this clause, we will not provide services to you.",
      },
    },
  },
  fakeCaptchaPhishing: {
    title: "❌ Fake CAPTCHA Phishing 🔒",
    subtitle: "Challenge: Spot the Fake CAPTCHA Page",
    warning: "Educational Purpose Only - Phishing Demo",
    intro: {
      description:
        "This challenge simulates a fake CAPTCHA verification page that attempts to trick users into running malicious commands. Learn to identify and avoid such threats.",
      scenario:
        'Scenario: You\'ve received an urgent notification about suspicious activity on your crypto wallet. To protect your assets worth over $12,000, you need to verify your identity. When the demo starts, look for the "Website" button in the browser toolbar and click it to proceed with verification.',
    },
    startButton: "Start Challenge →",
    browser: {
      websiteButton: "🌐 Website",
      tokenTitle: "OFFICIAL TRUMP (TRUMP)",
      tokenPrice: "$11.56",
    },
    captcha: {
      domainTitle: "gettrumpmemes.com",
      verifyHuman: "Verify you are human by completing the action below.",
      verifyCheckbox: "Verify you are human",
      verifying: "Verifying...",
      additionalVerification: "Additional Verification Required",
      instructions: {
        step1: "Press",
        step2: "to open the Run dialog",
        step3: "Press",
        step4: "to paste the command",
        step5: "Click",
        step6: "OK",
        step7: "to continue",
        windowsKey: "Win",
        helpTooltip:
          "This is the Windows key, located at the bottom of your keyboard between Ctrl and Alt, under the Z key",
      },
      privacyLink: "Privacy",
      termsLink: "Terms",
      securityCheck:
        "gettrumpmemes.com needs to review the security of your connection before proceeding.",
      footer: {
        rayId: "Ray ID:",
        performanceSecurity: "Performance & security by",
      },
    },
    runDialog: {
      title: "Run",
      openLabel: "Open:",
      okButton: "OK",
      cancelButton: "Cancel",
    },
    results: {
      success: {
        title: "Challenge Completed! 🎉",
        description: "Great job on staying safe!",
        learned:
          "You successfully identified the phishing attempt. Here's what you learned:",
        points: [
          "Legitimate verification pages never ask you to run system commands",
          "Be suspicious of any page that asks for unusual actions",
          "Real CAPTCHA systems use visual or interactive challenges, not command execution",
        ],
        reminder:
          "Remember: Security checks should verify you're human, not gain control of your system.",
      },
      failure: {
        title: "Challenge Failed ❌",
        description: "Don't worry - this was a learning experience!",
        learned: "This was a phishing attempt. Here's what to watch out for:",
        points: [
          "The page asked you to run an unknown command - this is a major red flag",
          "Real security checks never require system access",
          "The verification process was unusual and suspicious",
        ],
        reminder:
          "Stay safe: Never execute commands from websites, no matter how legitimate they appear.",
      },
      tryAgainButton: "Try Again",
    },
    backButton: "← Back to Challenges",
  },
  zoomPhishing: {
    linkedin: {
      recruiterTitle: "Web3 Talent Recruiter",
      company: "Blockchain Technology Ltd.",
      timeAgo: "1 hour ago",
      message:
        "Hello! Our company is looking for blockchain development talent. Your background is perfect for our position. Would you be interested in learning more? You can select a suitable time for a video interview through the scheduling system below.",
      scheduleButton: "View Interview Schedule",
    },
    telegram: {
      message1:
        "Hello! I see you're interested in blockchain technology. Our company is working on a new Web3 project and would like to invite you for an interview.",
      message2:
        "Please click the link below to schedule a time that works for you:",
      link: "calendly.com/web3-interview",
    },
    calendly: {
      title: "Web3 Technical Interview Reservation",
      subtitle:
        "Choose a time that works for you, and we'll conduct the interview via Zoom",
      selectDate: "Select a date",
      selectTime: "Select a time",
      selectedTime: "Your selected time",
      confirmButton: "Confirm Reservation",
    },
    meeting: {
      today: "Today",
      subject: "Subject",
      time: "Time",
      meetingID: "Meeting ID",
      password: "Password",
      joinLink: "Join Meeting Link",
      joinMeeting: "Join Meeting",
      manualEntryHint:
        "If you can't click the link, please manually enter the meeting ID and password.",
      interviewTitle: "Web3.0 Talent Recruitment Interview",
    },
    success: {
      title:
        "Congratulations on successfully completing the phishing URL identification challenge!",
      description:
        "You have successfully identified the real Zoom official website ",
      description2: ", demonstrating your awareness of phishing attacks.",
      learningPointsTitle: "Key Learning Points:",
      point1: {
        title: "URL Check: ",
        description:
          "Always check URLs to ensure they are the official websites you expect to visit. Phishing sites often use domain names that look legitimate but are slightly different.",
      },
      point2: {
        title: "Suspicious Links: ",
        description:
          "Do not click on links from unknown sources, especially those received via email or social media.",
      },
      point3: {
        title: "Direct Input: ",
        description:
          "If unsure, directly enter the known official website address in your browser instead of clicking on links.",
      },
      point4: {
        title: "Security Indicators: ",
        description:
          "Look for security indicators such as HTTPS, lock icons, and green address bars, but remember these are not absolute guarantees against phishing sites.",
      },
      point5: {
        title: "Installation Verification: ",
        description:
          "Always be cautious with any action that requires additional installation. Instead of following guided installations from unknown sources, visit the official website directly to download and install software.",
      },
      conclusion:
        "Stay vigilant! Cybersecurity begins with the ability to identify potential threats.",
    },
    warning: {
      title: "Phishing Attack Warning!",
      message:
        "You just clicked on a phishing URL! This is a simulated phishing attack scenario for educational purposes.",
      urlPrefix: "The URL you clicked is:",
      continueButton: "I understand, continue learning",
    },
    domainSelection: {
      title: "Which is the real Zoom official website?",
      confirmButton: "Confirm",
    },
    browserTab: {
      joinMeeting: "Join Zoom Meeting",
    },
    mainContent: {
      launchedMessage:
        "Your meeting has been launched in the Zoom Workplace app",
      notSeeingMeeting: "Don't see your meeting?",
      termsMessage: "By joining a meeting, you agree to our",
      termsLink: "Terms of Service",
      andText: "and",
      privacyLink: "Privacy Statement",
      launchButton: "Launch Meeting",
      downloadMessage: "Don't have the Zoom Workplace app installed?",
      downloadLink: "Download Now",
    },
    footer: {
      copyright: "© 2024 Zoom Video Communications, Inc. All rights reserved.",
      trustCenter: "Trust Center",
      acceptableUse: "Acceptable Use Guidelines",
      legal: "Legal & Compliance",
      doNotSell: "Do Not Sell My Personal Information",
      cookiePreferences: "Cookie Preferences",
    },
    error: {
      wrongDomain:
        "Try again! Please carefully check which is the correct official Zoom URL.",
    },
  },
  // 在已有的 leaderboard 部分添加或創建新的部分
  leaderboard: {
    ranking: "Ranking",
    challenger: "Challenger",
    securityTitle: "Security Title",
    level: "Level",
    score: "Score",
    // 手機版卡片需要使用的文字
    titleLabel: "Title:",
    levelLabel: "Level:",
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next",
    page: "Page",
  },
};
