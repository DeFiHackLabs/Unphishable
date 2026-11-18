import { useLanguage } from "@/app/contexts/LanguageContext";

const SolanaDelegatePhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        {t.solanaDelegatePhishing.successContent.correctMessage}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-gray-800">
        <h3 className="text-xl font-bold mb-4">{t.solanaDelegatePhishing.successContent.howToAvoidTitle}</h3>
        <p className="mb-4">
          {t.solanaDelegatePhishing.successContent.description}
        </p>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.solanaDelegatePhishing.successContent.howItWorksTitle}
        </h4>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          {t.solanaDelegatePhishing.successContent.howItWorks.map((step, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
          ))}
        </ol>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.solanaDelegatePhishing.successContent.evmBridgeTitle}
        </h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-violet-50 text-left">
                <th className="border border-violet-200 p-2">{t.solanaDelegatePhishing.successContent.evmBridgeHeaders.evm}</th>
                <th className="border border-violet-200 p-2">{t.solanaDelegatePhishing.successContent.evmBridgeHeaders.solana}</th>
                <th className="border border-violet-200 p-2">{t.solanaDelegatePhishing.successContent.evmBridgeHeaders.note}</th>
              </tr>
            </thead>
            <tbody>
              {t.solanaDelegatePhishing.successContent.evmBridge.map((row, index) => (
                <tr key={index}>
                  <td className="border border-violet-200 p-2" dangerouslySetInnerHTML={{ __html: row.evm }} />
                  <td className="border border-violet-200 p-2" dangerouslySetInnerHTML={{ __html: row.solana }} />
                  <td className="border border-violet-200 p-2" dangerouslySetInnerHTML={{ __html: row.note }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{t.solanaDelegatePhishing.successContent.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.solanaDelegatePhishing.successContent.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.solanaDelegatePhishing.successContent.bestPracticesTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.solanaDelegatePhishing.successContent.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.solanaDelegatePhishing.successContent.compromisedTitle}
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {t.solanaDelegatePhishing.successContent.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default SolanaDelegatePhishingSuccessContent;
