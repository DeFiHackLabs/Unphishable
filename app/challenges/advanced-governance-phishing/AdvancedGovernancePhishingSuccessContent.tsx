import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n';
import type { Language } from '@/app/i18n';

const AdvancedGovernancePhishingSuccessContent = () => {
  const { language } = useLanguage();
  const currentT = translations[language as Language].advancedGovernancePhishing;
  return (
    <>
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
        <h3 className="font-bold text-xl text-green-700 mb-3">{currentT.challenge.success.title}</h3>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {currentT.challenge.success.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="mb-3">{currentT.challenge.success.conclusion}</p>
        <p className="font-bold text-green-700">{currentT.challenge.success.congratulation}</p>
      </div>
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h3 className="font-bold text-xl text-blue-700 mb-3">{currentT.educational.title}</h3>
        <p className="mb-4">{currentT.educational.description}</p>

        <h4 className="font-bold text-lg mb-2">{currentT.educational.techniques.title}</h4>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {currentT.educational.techniques.list.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
          ))}
        </ul>

        <h4 className="font-bold text-lg mb-2">{currentT.educational.protection.title}</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {currentT.educational.protection.list.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <p className="text-gray-700 italic">{currentT.educational.realWorldExample}</p>
      </div>
    </>
  );
}

export default AdvancedGovernancePhishingSuccessContent;