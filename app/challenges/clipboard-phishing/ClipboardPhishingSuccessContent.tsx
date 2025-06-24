import { useLanguage } from '@/app/contexts/LanguageContext';

const ClipboardPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
      <h3 className="text-2xl font-bold text-green-700 mb-4">
        {t.clipboardPhishing.success.title}
      </h3>
      <p className="mb-4">{t.clipboardPhishing.success.description}</p>

      <h4 className="font-bold mb-2">{t.clipboardPhishing.success.howItWorks}</h4>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        {t.clipboardPhishing.success.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <h4 className="font-bold mb-2">{t.clipboardPhishing.success.protectionTitle}</h4>
      <ul className="list-disc pl-6 space-y-2">
        {t.clipboardPhishing.success.protectionTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );

}

export default ClipboardPhishingSuccessContent;