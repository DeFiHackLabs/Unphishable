
import { useLanguage } from '@/app/contexts/LanguageContext';

const TornadoCashPhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-4">{t.tornadoCashPhishing.explanation.title}</h3>
        <p className="mb-4">{t.tornadoCashPhishing.explanation.description}</p>

        <p className="font-semibold mb-2">{t.tornadoCashPhishing.explanation.indicatorsTitle}:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          {t.tornadoCashPhishing.explanation.indicators.map((indicator, index) => (
            <li key={index} className="pl-2">
              <span className="font-medium">{indicator.title}:</span> {indicator.description}
            </li>
          ))}
        </ol>

        <p className="mb-4">{t.tornadoCashPhishing.explanation.conclusion}</p>
      </div>
    </>
  )
}

export default TornadoCashPhishingSuccessContent;