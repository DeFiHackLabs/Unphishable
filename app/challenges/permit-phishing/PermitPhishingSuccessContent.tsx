import { useLanguage } from '@/app/contexts/LanguageContext';

const PermitPhishingSuccessContent = () => {
  const { t, language } = useLanguage();
  const USDC_CONTRACT_ADDRESS = '0x74a4a85c611679b73f402b36c0f84a7d2ccdfda3';
  const PHISHING_SPENDER_ADDRESS = '0x1234567890123456780012345678901234567890';
  const WalletSimulation = () => {
    const getAnalysisTitle = () => {
      switch (language) {
        case 'en':
          return '🔍 Wallet Interface Security Analysis';
        case 'zh-hans':
          return '🔍 钱包界面安全分析';
        default:
          return '🔍 錢包界面安全分析';
      }
    };

    const getText = (key: string) => {
      const texts = {
        spendingCapRequest: {
          en: 'Spending Cap Request',
          'zh-hans': '支出上限请求',
          'zh-hant': '支出上限請求'
        },
        sitePermission: {
          en: 'This site is requesting permission to use your tokens.',
          'zh-hans': '此网站要求许可权使用您的代币。',
          'zh-hant': '此網站要求許可權使用您的代幣。'
        },
        permitType: {
          en: 'Permit Type',
          'zh-hans': 'Permit 类型',
          'zh-hant': 'Permit 類型'
        },
        permitDescription: {
          en: 'EIP-2612 Token Authorization Signature',
          'zh-hans': 'EIP-2612 代币授权签名',
          'zh-hant': 'EIP-2612 代幣授權簽名'
        },
        permitRisk: {
          en: 'Risk: This signature can grant full token usage permissions',
          'zh-hans': '风险提示：此类签名可以授予完全的代币使用权限',
          'zh-hant': '風險提示：此類簽名可以授予完全的代幣使用權限'
        },
        spenderAddress: {
          en: 'Spender (Authorization Address)',
          'zh-hans': '授权地址 (Spender)',
          'zh-hant': '授權地址 (Spender)'
        },
        spenderRisk: {
          en: 'Risk: Unknown authorization address, potentially malicious',
          'zh-hans': '风险提示：未知的授权地址，可能是恶意地址',
          'zh-hant': '風險提示：未知的授權地址，可能是惡意地址'
        },
        value: {
          en: 'Value (Authorization Amount)',
          'zh-hans': '授权金额 (Value)',
          'zh-hant': '授權金額 (Value)'
        },
        unlimited: {
          en: 'Unlimited',
          'zh-hans': '无限制',
          'zh-hant': '無限制'
        },
        valueRisk: {
          en: 'Risk: Requesting unlimited token usage permissions',
          'zh-hans': '风险提示：请求无限制的代币使用权限',
          'zh-hant': '風險提示：請求無限制的代幣使用權限'
        },
        contractAddress: {
          en: 'Contract',
          'zh-hans': '合约',
          'zh-hant': '合約'
        },
        expiryTime: {
          en: 'Expiry Time',
          'zh-hans': '过期时间',
          'zh-hant': '過期時間'
        },
        securityChecks: {
          en: '🛡️ Security Checkpoints',
          'zh-hans': '🛡️ 安全检查要点',
          'zh-hant': '🛡️ 安全檢查要點'
        },
        checkPermit: {
          en: 'Check Permit type and understand authorization scope',
          'zh-hans': '检查 Permit 类型，了解授权范围',
          'zh-hant': '檢查 Permit 類型，了解授權範圍'
        },
        checkSpender: {
          en: 'Verify if the Spender address is from a trusted source',
          'zh-hans': '验证 Spender 地址是否为可信来源',
          'zh-hant': '驗證 Spender 地址是否為可信來源'
        },
        checkValue: {
          en: 'Pay attention to authorization amount, beware of unlimited authorizations',
          'zh-hans': '注意授权金额，警惕无限制授权',
          'zh-hant': '注意授權金額，警惕無限制授權'
        },
        checkWebsite: {
          en: 'Confirm the credibility of the website source',
          'zh-hans': '确认网站来源的可信度',
          'zh-hant': '確認網站來源的可信度'
        },
        cancel: {
          en: 'Cancel',
          'zh-hans': '取消',
          'zh-hant': '取消'
        },
        confirm: {
          en: 'Confirm',
          'zh-hans': '确认',
          'zh-hant': '確認'
        }
      };

      return texts[key as keyof typeof texts][language as keyof (typeof texts)[keyof typeof texts]] || texts[key as keyof typeof texts]['en'];
    };

    return (
      <div className="mt-4 border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-black text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-white">{getAnalysisTitle()}</h3>

          {/* 模拟钱包界面 */}
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2 text-white">{getText('spendingCapRequest')}</h4>
              <p className="text-gray-400 mb-4">{getText('sitePermission')}</p>

              <div className="space-y-4">
                {/* Permit 类型警告 */}
                <div className="p-3 bg-yellow-900 bg-opacity-40 rounded-lg border border-yellow-500">
                  <div className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <div>
                      <p className="text-yellow-400 font-bold">{getText('permitType')}</p>
                      <p className="text-sm text-gray-300">{getText('permitDescription')}</p>
                      <p className="text-xs text-yellow-500 mt-1">{getText('permitRisk')}</p>
                    </div>
                  </div>
                </div>

                {/* Spender 地址警告 */}
                <div className="p-3 bg-red-900 bg-opacity-40 rounded-lg border border-red-500">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">🚨</span>
                    <div>
                      <p className="text-red-400 font-bold">{getText('spenderAddress')}</p>
                      <p className="font-mono text-sm text-gray-300 break-all">{PHISHING_SPENDER_ADDRESS}</p>
                      <p className="text-xs text-red-500 mt-1">{getText('spenderRisk')}</p>
                    </div>
                  </div>
                </div>

                {/* Value 警告 */}
                <div className="p-3 bg-red-900 bg-opacity-40 rounded-lg border border-red-500">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">🚨</span>
                    <div>
                      <p className="text-red-400 font-bold">{getText('value')}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-300">{getText('unlimited')}</span>
                        <span className="px-2 py-1 bg-red-500 bg-opacity-50 rounded text-xs">
                          MAX_UINT256 (115,792,089,237...)
                        </span>
                      </div>
                      <p className="text-xs text-red-500 mt-1">{getText('valueRisk')}</p>
                    </div>
                  </div>
                </div>

                {/* 其他信息 */}
                <div className="p-3 bg-gray-800 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">{getText('contractAddress')}</span>
                      <span className="font-mono text-sm text-white break-all bg-gray-800 px-2 py-1 rounded">{USDC_CONTRACT_ADDRESS}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{getText('expiryTime')}</span>
                      <span className="text-sm text-white">15 May 2025, 06:31</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 按钮区域 */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                {getText('cancel')}
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                {getText('confirm')}
              </button>
            </div>
          </div>

          {/* 安全提示 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-400 mb-2">{getText('securityChecks')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-500 mr-2">•</span>
                {getText('checkPermit')}
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-500 mr-2">•</span>
                {getText('checkSpender')}
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-500 mr-2">•</span>
                {getText('checkValue')}
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-yellow-500 mr-2">•</span>
                {getText('checkWebsite')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="space-y-6">
      <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          {t.permitPhishing.challengeCompleted}
        </h3>
        <p className="mb-4">{t.permitPhishing.wiseDecision}</p>
        <p className="font-bold mb-2">{t.permitPhishing.whatWouldHappen}</p>
        <p className="mb-4">{t.permitPhishing.attackDescription}</p>
        <ul className="list-disc pl-6 mb-4">
          <li>{t.permitPhishing.attackPoints.point1}</li>
          <li>{t.permitPhishing.attackPoints.point2}</li>
          <li>{t.permitPhishing.attackPoints.point3}</li>
        </ul>
        <p className="text-red-600">{t.permitPhishing.attackWarning}</p>
      </div>
      <WalletSimulation />
    </div>
  )
}

export default PermitPhishingSuccessContent;