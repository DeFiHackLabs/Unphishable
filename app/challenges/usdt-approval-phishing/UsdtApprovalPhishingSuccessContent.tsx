import { useLanguage } from '@/app/contexts/LanguageContext';

const UsdtApprovalPhishingSuccessContent = () => {
  const { t } = useLanguage();
  const PHISHING_SPENDER_ADDRESS = "0x0000000066663456789012345678901234560000";

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">
        {
          t.usdtApprovalPhishing.challengeSuccess
            .title
        }
      </h3>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">
            {
              t.usdtApprovalPhishing
                .challengeSuccess
                .checklistTitle
            }
          </h4>
          {/* MetaMask 模拟界面 */}
          <div className="w-full max-w-md mx-auto my-4 bg-white rounded-xl shadow-lg overflow-hidden">
            {/* MetaMask Header */}
            <div className="bg-white border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#f6851b] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      M
                    </span>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">
                      MetaMask
                    </div>
                    <div className="text-sm text-gray-500">
                      Sepolia Testnet
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">
                      ?
                    </span>
                  </button>
                  <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600">
                      ⋯
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Approval Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-center mb-4">
                Approve USDT spending
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Spending cap
                    </span>
                    <span className="font-medium">
                      Unlimited USDT
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      To
                    </span>
                    <span className="font-mono text-sm">
                      {PHISHING_SPENDER_ADDRESS.slice(
                        0,
                        6
                      )}
                      ...
                      {PHISHING_SPENDER_ADDRESS.slice(
                        -4
                      )}
                    </span>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-2">
                      ⚠️
                    </span>
                    <span className="text-sm text-yellow-700">
                      This permission
                      will give the
                      spender access
                      to all of your
                      USDT
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                  Reject
                </button>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">
            {
              t.usdtApprovalPhishing
                .challengeSuccess.risksTitle
            }
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            {t.usdtApprovalPhishing.challengeSuccess.risksItems.map(
              (item, index) => (
                <li
                  key={index}
                  className="text-gray-700"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-800">
            {
              t.usdtApprovalPhishing
                .challengeSuccess
                .securityTip
            }
          </p>
        </div>
      </div>
    </div>
  );

}

export default UsdtApprovalPhishingSuccessContent;
