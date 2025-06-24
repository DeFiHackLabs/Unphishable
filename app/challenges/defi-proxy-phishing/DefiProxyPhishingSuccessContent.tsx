import { useLanguage } from '@/app/contexts/LanguageContext';

const DefiProxyPhishingSuccessContent = () => {
  const { t } = useLanguage();
  const SET_OWNER_SELECTOR = '0x13af40350000000000000000000000000000000000000000000000000000000000031337';
  return (
    <>
      <div className='p-6 rounded-lg border bg-green-50 border-green-300'>
        <div className="text-green-500 font-bold text-xl mb-4">✅ {t.defiProxyPhishing.challengeSuccess}</div>
        <p className="mb-2">{t.defiProxyPhishing.txData} {SET_OWNER_SELECTOR}</p>
        <p>{t.defiProxyPhishing.protectionNote}</p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4">
          <h3 className="text-blue-600 font-bold mb-2">{t.defiProxyPhishing.techniqueTitle}</h3>
          <p>{t.defiProxyPhishing.techniqueDescription}</p>
          <ol className="list-decimal pl-6 my-2 space-y-1">
            {t.defiProxyPhishing.attackSteps.map((step: string, index: number) => <li key={index}>{step}</li>)}
          </ol>
          <p className="font-bold mt-2">{t.defiProxyPhishing.protectionTitle}</p>
          <ul className="list-disc pl-6 my-2 space-y-1">
            {t.defiProxyPhishing.protectionTips.map((tip: string, index: number) => <li key={index}>{tip}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DefiProxyPhishingSuccessContent;