import { useLanguage } from '@/app/contexts/LanguageContext';

const Permit2PhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="success-box bg-green-50 border-2 border-green-200 p-6 rounded-lg">
        <h4 className="text-xl font-bold text-green-700 mb-4">{t.permitPhishing2.success.title}</h4>
        <p className="mb-4">{t.permitPhishing2.success.description}</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.permitPhishing2.success.protectionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div className="explanation-box bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mt-8">
        <h4 className="text-xl font-bold mb-4">{t.permitPhishing2.explanation.title}</h4>
        <p className="mb-4">{t.permitPhishing2.explanation.description}</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>{t.permitPhishing2.explanation.models.traditional}</strong></li>
          <li><strong>{t.permitPhishing2.explanation.models.permit2}</strong></li>
        </ul>
        <p className="font-bold mb-2">{t.permitPhishing2.explanation.twoLayerSystem}</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          {t.permitPhishing2.explanation.layers.map((layer, index) => (
            <li key={index}>{layer}</li>
          ))}
        </ol>
        <p className="text-red-600 mb-4">{t.permitPhishing2.explanation.vulnerability}</p>
        <h4 className="font-bold mb-2">{t.permitPhishing2.explanation.protectionTitle}</h4>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          {t.permitPhishing2.explanation.protectionSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

    </>
  );
}
export default Permit2PhishingSuccessContent;