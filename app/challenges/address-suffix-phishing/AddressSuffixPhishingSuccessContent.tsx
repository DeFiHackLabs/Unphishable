
import { useLanguage } from '@/app/contexts/LanguageContext';

const AddressSuffixPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="mt-8 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-bold mb-4 challenge-title">{t.addressSuffixPhishing.resultTitle}</h3>
        <div className="text-green-600">
          <p className="mb-4">{t.addressSuffixPhishing.successMessage}</p>
          <p className="font-bold">{t.addressSuffixPhishing.protectionTitle}</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            {t.addressSuffixPhishing.protectionTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default AddressSuffixPhishingSuccessContent;