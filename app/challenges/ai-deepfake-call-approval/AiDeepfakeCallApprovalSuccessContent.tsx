import { useLanguage } from "@/app/contexts/LanguageContext";

const AiDeepfakeCallApprovalSuccessContent = () => {
  const { t } = useLanguage();
  const s = t.aiDeepfakeCallApproval.successContent;

  return (
    <>
      <div className="text-green-500 my-4">{s.correctMessage}</div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">{s.howToAvoidTitle}</h3>
        <p className="mb-4">{s.description}</p>

        <h4 className="text-lg font-bold mt-6 mb-3">{s.howItWorksTitle}</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {s.howItWorks.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{s.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {s.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-300 p-4 my-6">
          <p className="font-bold mb-2">{s.softTellsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {s.softTells.map((tell, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: tell }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">{s.bestPracticesTitle}</h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {s.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p className="font-bold mb-2">{s.policyTitle}</p>
          <p dangerouslySetInnerHTML={{ __html: s.policyText }} />
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">{s.compromisedTitle}</h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {s.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default AiDeepfakeCallApprovalSuccessContent;
