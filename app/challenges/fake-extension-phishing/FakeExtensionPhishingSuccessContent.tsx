import { useLanguage } from "@/app/contexts/LanguageContext";

const FakeExtensionPhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        {t.fakeExtensionPhishing.successContent.correctMessage}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">{t.fakeExtensionPhishing.successContent.howToAvoidTitle}</h3>
        <p className="mb-4">
          {t.fakeExtensionPhishing.successContent.description}
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{t.fakeExtensionPhishing.successContent.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.fakeExtensionPhishing.successContent.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.fakeExtensionPhishing.successContent.bestPracticesTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.fakeExtensionPhishing.successContent.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.fakeExtensionPhishing.successContent.compromisedTitle}
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {t.fakeExtensionPhishing.successContent.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>

      </div>
    </>
  );
};

export default FakeExtensionPhishingSuccessContent;
