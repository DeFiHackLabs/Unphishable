
import { useLanguage } from '@/app/contexts/LanguageContext';

const MaliciousRPCProviderSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <div className="info-box bg-blue-50 border-blue-200 border p-4 rounded mb-4">
      <h4 className="text-lg font-semibold mb-2">{t.maliciousRPCProvider.result.howItWorks}</h4>
      <p>{t.maliciousRPCProvider.result.description}</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        {t.maliciousRPCProvider.result.capabilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold mt-6 mb-2">{t.maliciousRPCProvider.result.protectionTitle}</h4>
      <ul className="list-disc pl-6 space-y-2">
        {t.maliciousRPCProvider.result.protectionTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}

export default MaliciousRPCProviderSuccessContent;