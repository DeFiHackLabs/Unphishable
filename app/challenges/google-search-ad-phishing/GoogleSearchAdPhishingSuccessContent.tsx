import { useLanguage } from '@/app/contexts/LanguageContext';

const GoogleSearchAdPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>

      <div className={`mt-8 p-6 rounded-lg bg-green-50 border-2 border-green-500`}>
        <h3 className="font-bold text-xl mb-4 text-center">
          {t.googleSearchAdPhishing.successTitle}
        </h3>
        <p className="mb-6 text-center">
          {t.googleSearchAdPhishing.successDescription}
        </p>
        <div className="mt-6">
          <h4 className="font-bold text-lg mb-4 text-center">{t.googleSearchAdPhishing.protectionTitle}</h4>
          <ul className="list-disc pl-6 space-y-3">
            {t.googleSearchAdPhishing.protectionTips.map((tip, index) => (
              <li key={index} className="text-gray-700">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default GoogleSearchAdPhishingSuccessContent