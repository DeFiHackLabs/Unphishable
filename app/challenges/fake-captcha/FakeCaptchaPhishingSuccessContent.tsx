
import { useLanguage } from '@/app/contexts/LanguageContext';
const FakeCaptchaPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
        <div>
          <h3 className="text-xl font-bold text-green-600 mb-4 text-center">
            {t.fakeCaptchaPhishing.results.success.title}
          </h3>
          <p className="mb-4"><strong>{t.fakeCaptchaPhishing.results.success.description}</strong></p>
          <p className="mb-2">{t.fakeCaptchaPhishing.results.success.learned}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {t.fakeCaptchaPhishing.results.success.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p className="mb-4">{t.fakeCaptchaPhishing.results.success.reminder}</p>
        </div>
      </div>
    </>
  );
}

export default FakeCaptchaPhishingSuccessContent;