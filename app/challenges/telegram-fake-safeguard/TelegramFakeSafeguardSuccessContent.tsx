import { useLanguage } from '@/app/contexts/LanguageContext';

const TelegramFakeSafeguardSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="challenge-result mt-8">
        <h3 className="text-xl font-bold mb-4 challenge-title">{t.telegramFakeSafeguard.results.title}</h3>
        <div className="success-message bg-green-100 border-l-4 border-green-500 p-4 mb-6">
          <h4 className="font-bold text-green-700 mb-2">
            {t.telegramFakeSafeguard.results.success.title}
          </h4>
          <p>{t.telegramFakeSafeguard.results.success.description}</p>
        </div>
      </div>
      <div className="educational-content bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">
          {t.telegramFakeSafeguard.education.title}
        </h3>
        <p className="mb-4">{t.telegramFakeSafeguard.education.techniques}</p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          {t.telegramFakeSafeguard.education.techniquesList.map((technique, index) => (
            <li key={index}>
              <strong>{technique.title}</strong>: {technique.description}
            </li>
          ))}
        </ol>

        <h4 className="font-bold text-lg mb-2">
          {t.telegramFakeSafeguard.education.redFlags.title}
        </h4>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          {t.telegramFakeSafeguard.education.redFlags.list.map((flag, index) => (
            <li key={index}>{flag}</li>
          ))}
        </ul>

        <h4 className="font-bold text-lg mb-2">
          {t.telegramFakeSafeguard.education.protection.title}
        </h4>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          {t.telegramFakeSafeguard.education.protection.list.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <h4 className="font-bold text-lg mb-2">
          {t.telegramFakeSafeguard.education.compromised.title}
        </h4>
        <ol className="list-decimal pl-6 space-y-1">
          {t.telegramFakeSafeguard.education.compromised.list.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </>

  );
}

export default TelegramFakeSafeguardSuccessContent;