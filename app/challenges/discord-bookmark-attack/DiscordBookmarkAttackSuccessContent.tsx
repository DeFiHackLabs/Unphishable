
import { useLanguage } from '@/app/contexts/LanguageContext';

const DiscordBookmarkAttackSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-green-800 mb-4">{t.discordBookmarkAttack.successTitle}</h3>
        <p className="text-green-700 mb-4">{t.discordBookmarkAttack.successDescription}</p>
        <div className="mb-6">
          <h4 className="font-bold mb-2">{t.discordBookmarkAttack.howItWorks}</h4>
          <ul className="list-disc pl-6 space-y-2">
            {t.discordBookmarkAttack.steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-2">{t.discordBookmarkAttack.protectionTitle}</h4>
          <ul className="list-disc pl-6 space-y-2">
            {t.discordBookmarkAttack.protectionTips.map((tip, index) => (
              <li key={index} className="text-gray-700">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-black-800 mb-4">{t.discordBookmarkAttack.bookmarkAttackExplanation.title}</h3>
        <p className="text-black-700 mb-4">{t.discordBookmarkAttack.bookmarkAttackExplanation.description}</p>

        {/* 添加新的常见攻击场景说明 */}
        <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-amber-800 mb-4">{t.discordBookmarkAttack.commonAttackScenario.title}</h3>
          <p className="text-amber-700 mb-4">{t.discordBookmarkAttack.commonAttackScenario.description}</p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <strong className="font-bold">{t.discordBookmarkAttack.commonAttackScenario.warning}</strong>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-2">{t.discordBookmarkAttack.attackScenario.title}</h4>
          <p className="mb-4">{t.discordBookmarkAttack.attackScenario.description}</p>
          {t.discordBookmarkAttack.attackScenario.steps.map((step, index) => (
            <div key={index} className={`p-4 mb-4 rounded-lg ${index === 2 || index === 3 ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50 border-l-4 border-gray-500'}`}>
              <h5 className="font-bold mb-2">{step.title}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-2">{t.discordBookmarkAttack.recentIncidents.title}</h4>
          <p className="text-gray-700">{t.discordBookmarkAttack.recentIncidents.description}</p>
        </div>
      </div>
    </>
  )
}

export default DiscordBookmarkAttackSuccessContent