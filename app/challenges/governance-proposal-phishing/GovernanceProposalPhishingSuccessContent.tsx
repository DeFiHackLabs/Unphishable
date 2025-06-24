
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n';
import type { Language } from '@/app/i18n';

const GovernanceProposalPhishingSuccessContent = () => {
  const { language, } = useLanguage();
  const currentT = translations[language as Language].governanceProposalPhishing;
  const MALICIOUS_MESSAGE = "I authorize the transfer of all my assets to 0x1234567890abcdef1234567890abcdef12345678";
  return (
    <div className='p-6 rounded-lg bg-green-50 border border-green-200 my-6'>
      <>
        <div className="text-center py-4 px-3 bg-green-100 rounded-lg mb-6">
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            {currentT.challengeResult.success.title}
          </h3>
          <p className="text-lg">
            {currentT.challengeResult.success.description}
          </p>
        </div>

        <div className="mb-4">
          <p className="font-bold">{currentT.phishingAnalysis.warning}</p>
          <p>{currentT.phishingAnalysis.voteMessage}</p>
          <p className="my-2 p-3 bg-gray-100 font-mono text-sm rounded border border-gray-300 overflow-x-auto">
            {MALICIOUS_MESSAGE}
          </p>
          <p>{currentT.phishingAnalysis.signatureConsequence}</p>
          <p className="font-bold mt-3">{currentT.phishingAnalysis.alwaysRead}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
          <h4 className="text-lg font-bold text-blue-700 mb-2">
            {currentT.phishingAnalysis.title}
          </h4>
          <p>{currentT.phishingAnalysis.description}</p>

          <ol className="list-decimal pl-6 my-3 space-y-1">
            {currentT.phishingAnalysis.techniques.map((technique: string, index: number) => (
              <li key={index}>{technique}</li>
            ))}
          </ol>

          <p className="font-bold mt-3">{currentT.phishingAnalysis.protectionTitle}</p>
          <ul className="list-disc pl-6 space-y-1">
            {currentT.phishingAnalysis.protectionMeasures.map((measure: string, index: number) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </div>
      </>
    </div>
  )
}

export default GovernanceProposalPhishingSuccessContent