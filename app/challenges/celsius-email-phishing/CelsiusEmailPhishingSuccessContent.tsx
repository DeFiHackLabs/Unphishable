import { useLanguage } from "@/app/contexts/LanguageContext";

// `recovered` is true when the player opened the link and then backed out at the
// portal, rather than spotting the mail outright. The lesson is the same, but the
// write-up credits the save instead of the catch.
const CelsiusEmailPhishingSuccessContent = ({
  recovered = false,
}: {
  recovered?: boolean;
}) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        {recovered
          ? t.celsiusEmail.recoveredBody
          : t.celsiusEmail.successContent.correctMessage}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-gray-800">
        {recovered && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold">{t.celsiusEmail.recoveredTitle}</p>
          </div>
        )}

        <h3 className="text-xl font-bold mb-4">
          {t.celsiusEmail.successContent.howToAvoidTitle}
        </h3>
        <p className="mb-4">{t.celsiusEmail.successContent.description}</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">
            {t.celsiusEmail.successContent.warningSignsTitle}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {t.celsiusEmail.successContent.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.celsiusEmail.successContent.bestPracticesTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.celsiusEmail.successContent.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.celsiusEmail.successContent.compromisedTitle}
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {t.celsiusEmail.successContent.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default CelsiusEmailPhishingSuccessContent;
