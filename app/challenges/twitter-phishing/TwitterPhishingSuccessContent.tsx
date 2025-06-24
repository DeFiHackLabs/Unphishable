
import { useLanguage } from '@/app/contexts/LanguageContext';

const TwitterPhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <div className='mt-6 p-4 rounded-lg bg-green-50 border-green-200 border-2'>
      <div>
        <h3 className="text-xl font-bold text-green-700 mb-4">{t.twitterPhishing.success.title}</h3>
        <p className="mb-2">{t.twitterPhishing.success.differences}</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {t.twitterPhishing.success.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="font-medium">{t.twitterPhishing.success.tip}</p>
      </div>
    </div>
  )
}

export default TwitterPhishingSuccessContent