
import { useLanguage } from '@/app/contexts/LanguageContext';

const ZeroTransferScamSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <div className='success' style={{ marginTop: '20px' }}>
      <h3>{t.zeroTransferScam.successTitle}</h3>
      <p>{t.zeroTransferScam.successDescription}</p>
      <p>{t.zeroTransferScam.protectionTitle}</p>
      <ul>
        {t.zeroTransferScam.protectionTips.map((tip: string, index: number) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <style jsx>{`
      .success {
          background-color: #e8f5e9;
          border-left: 5px solid #4caf50;
          padding: 15px;
          border-radius: 4px;
        }
          `}
      </style>
    </div>
  )
}


export default ZeroTransferScamSuccessContent;