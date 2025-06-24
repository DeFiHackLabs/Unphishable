
import { useLanguage } from '@/app/contexts/LanguageContext';

const TransactionSimulationSpoofingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.exploitation.title}</h2>
        <p className="mb-4">{t.transactionSimulationSpoofing.exploitation.description}</p>

        <div className="space-y-6 my-6">
          {t.transactionSimulationSpoofing.exploitation.steps.map((step, index) => (
            <div key={index} className="flex">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.realWorldExamples.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: t.transactionSimulationSpoofing.realWorldExamples.description }}></p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.protection.title}</h2>
        <p className="mb-4">{t.transactionSimulationSpoofing.protection.description}</p>

        <ul className="list-disc pl-8 space-y-2">
          {t.transactionSimulationSpoofing.protection.guidelines.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TransactionSimulationSpoofingSuccessContent