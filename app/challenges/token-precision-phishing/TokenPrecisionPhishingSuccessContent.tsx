

import { useLanguage } from '@/app/contexts/LanguageContext';
const TokenPrecisionPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className='mt-6 p-4 rounded-lg bg-green-50 border border-green-200'>
        <h3 className="font-bold text-lg">

          {t.tokenPrecisionPhishing.results.success.title}

        </h3>
        <p>
          {t.tokenPrecisionPhishing.results.success.description}
        </p>
      </div>
      <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-xl mb-4">{t.tokenPrecisionPhishing.explanation.title}</h3>
        <p className="mb-4">{t.tokenPrecisionPhishing.explanation.description}</p>

        <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.howItWorksTitle}</h4>
        <ol className="list-decimal pl-8 mb-4 space-y-2">
          {t.tokenPrecisionPhishing.explanation.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.protectionTitle}</h4>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          {t.tokenPrecisionPhishing.explanation.protectionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.comparisonTitle}</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.actualAmount}</th>
                <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.correctDisplay}</th>
                <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.modifiedDisplay}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-2">0.00000000000089589 USDT</td>
                <td className="border border-blue-200 p-2">0.00000000000089589 USDT</td>
                <td className="border border-blue-200 p-2 text-red-600">89589 USDT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default TokenPrecisionPhishingSuccessContent