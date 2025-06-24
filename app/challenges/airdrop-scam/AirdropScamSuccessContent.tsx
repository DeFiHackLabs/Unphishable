import { useLanguage } from '@/app/contexts/LanguageContext';

const AirdropScamSuccessContent = () => {
  const { t } = useLanguage();
  const MALICIOUS_CONTRACT_ADDRESS =
    "0xbe535a82f2c3895bdaceb3ffe6b9b80ac2f832a0";
  const SECURITY_UPDATE_SELECTOR = "0x5fba79f5";

  return (
    <>
      <p>
        <strong>
          {t.airdropScam.phishingWarningTitle}
        </strong>
      </p>
      <p>
        {t.airdropScam.phishingWarningContent.replace(
          "{contractAddress}",
          `${MALICIOUS_CONTRACT_ADDRESS}`
        )}
      </p>
      <p>
        {t.airdropScam.phishingWarningFunction.replace(
          "{selector}",
          `${SECURITY_UPDATE_SELECTOR}`
        )}
      </p>
      <p>
        <strong>
          {t.airdropScam.phishingWarningAdvice}
        </strong>
      </p>
      <p>{t.airdropScam.phishingWarningMetamask}</p>
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-2">
          {t.airdropScam.metamaskExample}
        </h4>
        <p className="mb-4 text-gray-600">
          {t.airdropScam.phishingWarning}
        </p>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#f56e2c] rounded-full flex items-center justify-center text-white font-bold">
                H
              </div>
              <div className="ml-3">
                <div>Account 1</div>
                <div className="text-sm text-gray-500">
                  Holesky Testnet
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-serif">
                i
              </span>
              <span className="w-6 h-6 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#5c6bc0] text-lg">
                ⋮
              </span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 text-center border-b">
            <h3 className="text-xl font-bold">
              Transaction request
            </h3>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Request from</span>
                <span className="ml-2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                  i
                </span>
              </div>
              <div>
                <span className="text-[#f56e2c] mr-1">
                  ⚠️ HTTP
                </span>
                127.0.0.1:8080
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Interacting with</span>
                <span className="ml-2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                  i
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs mr-2">
                  ⚫
                </span>
                0xBe535...832a0
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Method</span>
                <span className="ml-2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                  i
                </span>
              </div>
              <div className="text-[#6a2f0c] font-medium">
                Security Update
              </div>
            </div>
          </div>

          <div className="p-4 border-t flex justify-between items-center font-semibold">
            <span>Amount</span>
            <span>0.5 ETH</span>
          </div>
        </div>
      </div>
    </>
  );
}


export default AirdropScamSuccessContent;