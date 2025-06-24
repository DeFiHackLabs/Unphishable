import { useLanguage } from '@/app/contexts/LanguageContext';

const NftApprovalPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-700 font-bold text-xl">{t.nftApprovalPhishing.successTitle}</p>
            <p className="text-green-700">{t.nftApprovalPhishing.successMessage}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t.nftApprovalPhishing.whatWasAttack}</h3>
            <p className="mb-4">{t.nftApprovalPhishing.attackDescription}</p>
            <p className="mb-4">{t.nftApprovalPhishing.functionDescription}</p>
          </div>
        </>


        <h4 className="font-bold text-lg mt-6 mb-2">{t.nftApprovalPhishing.technicalDetails}</h4>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.nftApprovalPhishing.technicalPointsList.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
          ))}
        </ul>

        <h4 className="font-bold text-lg mb-2">{t.nftApprovalPhishing.protectionTitle}</h4>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.nftApprovalPhishing.protectionList.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NftApprovalPhishingSuccessContent;