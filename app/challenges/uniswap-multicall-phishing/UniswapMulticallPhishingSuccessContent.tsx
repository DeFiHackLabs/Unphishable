import { useLanguage } from '@/app/contexts/LanguageContext';
const UniswapMulticallPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="border-2 border-yellow-500 rounded-lg p-5 bg-yellow-50 mb-4">
        <h3 className="font-bold text-lg mb-4 text-yellow-800">
          {t.uniswapMulticallPhishing.explanation.title}
        </h3>
        <p className="mb-2">{t.uniswapMulticallPhishing.explanation.description}</p>

        <h4 className="font-semibold mt-4 mb-2">{t.uniswapMulticallPhishing.explanation.howItWorksTitle}</h4>
        <ol className="list-decimal pl-8 mb-4 space-y-1">
          {t.uniswapMulticallPhishing.explanation.howItWorksSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <h4 className="font-semibold mt-4 mb-2">{t.uniswapMulticallPhishing.explanation.dangerousTitle}</h4>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          {t.uniswapMulticallPhishing.explanation.dangerousPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="border-2 border-green-500 rounded-lg p-5 bg-green-50 mb-4">
        <h3 className="font-bold text-lg mb-4 text-green-700">
          {t.uniswapMulticallPhishing.success.title}
        </h3>
        <p className="mb-4">{t.uniswapMulticallPhishing.success.description}</p>
        <ul className="list-disc pl-8 mb-6 space-y-1">
          {t.uniswapMulticallPhishing.success.protectionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default UniswapMulticallPhishingSuccessContent