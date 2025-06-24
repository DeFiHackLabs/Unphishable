'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

interface SeedPhraseSuccessContentProps {
  successMessage?: string;
}

const SeedPhraseSuccessContent = ({ successMessage }: SeedPhraseSuccessContentProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
      <p className="text-green-700 font-bold">
        {successMessage || t.seedPhraseRecoveryScam.successMessage}
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold m-4 text-center">
          {t.seedPhraseRecoveryScam.phishingIdentified}
        </h2>
        <p className="mb-4">
          {t.seedPhraseRecoveryScam.congratsMessage}
        </p>
        <h3 className="text-lg font-semibold mb-5">
          {t.seedPhraseRecoveryScam.whyPhishing}
        </h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.seedPhraseRecoveryScam.whyPhishingExplanation }}></p>
        <h3 className="text-lg font-semibold mb-5">
          {t.seedPhraseRecoveryScam.protectionTitle}
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.seedPhraseRecoveryScam.protectionMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SeedPhraseSuccessContent;