import { useLanguage } from '@/app/contexts/LanguageContext';

const FakeStakingContractSuccessContent = () => {
  const { t } = useLanguage();
  const FAKE_STAKING_CONTRACT = '0x0000000066663456789012345678901234560000';

  return (
    <div>
      {/* <h3 className="text-xl font-semibold mb-4">{t.fakeStakingContract.step3Title}</h3> */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {t.fakeStakingContract.successMessage}
        </div>

        <div className="metamask-simulation">
          <h4 className="text-lg font-semibold mb-2">{t.fakeStakingContract.metamaskSimulation.title}</h4>
          <p className="mb-4">{t.fakeStakingContract.metamaskSimulation.description}</p>
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white mr-3">
                  H
                </div>
                <div>
                  <div>Account 1</div>
                  <div className="text-sm text-gray-600">Holesky Testnet</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300">i</span>
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300">⋮</span>
              </div>
            </div>
            <div className="text-lg font-medium mb-4">{t.fakeStakingContract.metamaskSimulation.transactionRequest}</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {t.fakeStakingContract.metamaskSimulation.requestFrom} <span className="ml-1 text-gray-500">i</span>
                </div>
                <div><span className="text-yellow-600">⚠️ HTTP</span> 127.0.0.1:8080</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {t.fakeStakingContract.metamaskSimulation.interactingWith} <span className="ml-1 text-gray-500">i</span>
                </div>
                <div><span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span> {FAKE_STAKING_CONTRACT.slice(0, 6)}...{FAKE_STAKING_CONTRACT.slice(-4)}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {t.fakeStakingContract.metamaskSimulation.method} <span className="ml-1 text-gray-500">i</span>
                </div>
                <div className="text-orange-600">approve</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {t.fakeStakingContract.metamaskSimulation.approvalAmount} <span className="ml-1 text-gray-500">i</span>
                </div>
                <div className="text-red-500 font-bold">{t.fakeStakingContract.metamaskSimulation.unlimited}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">{t.fakeStakingContract.challengeSuccess.title}</h4>
          <h5 className="font-semibold mt-4">{t.fakeStakingContract.challengeSuccess.warningTitle}</h5>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            {t.fakeStakingContract.challengeSuccess.warningItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h5 className="font-semibold mt-4">{t.fakeStakingContract.challengeSuccess.tipsTitle}</h5>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            {t.fakeStakingContract.challengeSuccess.tipsItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mt-4 text-blue-600">
            {t.fakeStakingContract.challengeSuccess.securityTip}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FakeStakingContractSuccessContent;