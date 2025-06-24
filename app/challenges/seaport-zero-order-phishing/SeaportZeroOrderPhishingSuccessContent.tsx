import { useLanguage } from '@/app/contexts/LanguageContext';

const SeaportZeroOrderPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="text-green-500 my-4">{t.seaportZeroOrderPhishing.successMessage}</div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">{t.seaportZeroOrderPhishing.explanationTitle}</h3>
        <p className="mb-4">{t.seaportZeroOrderPhishing.explanationContent}</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{t.seaportZeroOrderPhishing.keyIssueTitle}</p>
          <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-2 font-mono text-sm leading-relaxed overflow-x-auto">
            <div dangerouslySetInnerHTML={{
              __html: `"consideration": [
                    {
                      "itemType": 0,
                      "token": "0x0000000000000000000000000000000000000000",
                      "identifierOrCriteria": "0",
                      "<span class=\"bg-yellow-200 px-1\">startAmount": 0</span>",
                      "<span class=\"bg-yellow-200 px-1\">endAmount": 0</span>",
                      "recipient": "0x6278A1E803A76796a3A1F7F6344fE874ebfe94B2"
                    }
                  ]`}} />
          </pre>
          <pre className="bg-gray-100 border border-gray-300 rounded p-4 my-2 font-mono whitespace-pre-wrap overflow-x-auto text-sm leading-relaxed">
            {t.seaportZeroOrderPhishing.considerationExample}
          </pre>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">{t.seaportZeroOrderPhishing.protectionTitle}</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.seaportZeroOrderPhishing.protectionTips.map((tip: string, index: number) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">{t.seaportZeroOrderPhishing.comparisonTitle}</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.parameter}</th>
                <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.legitimate}</th>
                <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.phishing}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">offer</td>
                <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.offer.legitimate}</td>
                <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.offer.phishing}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">consideration</td>
                <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.consideration.legitimate}</td>
                <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.consideration.phishing}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">startAmount/endAmount</td>
                <td className="border border-gray-300 p-2 text-green-600">{t.seaportZeroOrderPhishing.comparisonTable.startEndAmount.legitimate}</td>
                <td className="border border-gray-300 p-2 text-red-600">{t.seaportZeroOrderPhishing.comparisonTable.startEndAmount.phishing}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SeaportZeroOrderPhishingSuccessContent;