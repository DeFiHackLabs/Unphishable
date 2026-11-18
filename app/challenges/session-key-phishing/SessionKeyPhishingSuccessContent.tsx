import { useLanguage } from "@/app/contexts/LanguageContext";

const SessionKeyPhishingSuccessContent = () => {
  const { t } = useLanguage();
  const c = t.sessionKeyPhishing.successContent;

  return (
    <>
      <div className="text-green-500 my-4">{c.correctMessage}</div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">{c.howToAvoidTitle}</h3>
        <p className="mb-4">{c.description}</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{c.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {c.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">{c.compareTitle}</h4>
        <p className="mb-3">{c.compareIntro}</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {c.compareHeaders.map((header, index) => (
                  <th key={index} className="border border-gray-300 p-2 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.compareRows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`border border-gray-300 p-2 ${i === 0 ? "font-semibold bg-gray-50" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">{c.bestPracticesTitle}</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {c.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">{c.compromisedTitle}</h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {c.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="font-bold mb-2">{c.loopTitle}</p>
          <p>{c.loopText}</p>
        </div>
      </div>
    </>
  );
};

export default SessionKeyPhishingSuccessContent;
