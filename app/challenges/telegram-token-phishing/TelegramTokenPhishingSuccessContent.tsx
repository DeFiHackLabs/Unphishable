'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

const TelegramTokenPhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">{t.telegramTokenPhishing.explanationTitle}</h3>
      <p className="mb-4">{t.telegramTokenPhishing.explanationContent}</p>

      <h4 className="font-semibold mb-2">{t.telegramTokenPhishing.warningSignsTitle}</h4>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        {t.telegramTokenPhishing.warningSignsList.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4 className="font-semibold mb-2">{t.telegramTokenPhishing.protectionTitle}</h4>
      <ul className="list-disc pl-6 space-y-2">
        {t.telegramTokenPhishing.protectionList.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TelegramTokenPhishingSuccessContent;