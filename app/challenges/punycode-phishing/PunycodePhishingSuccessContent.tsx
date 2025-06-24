
import { useLanguage } from '@/app/contexts/LanguageContext';

const PunycodePhishingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold mb-4">{t.punycodePhishing.whatIsPunycode}</h4>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.punycodePhishing.punycodeDescription }}></p>

        <table className="w-full border-collapse mb-4">
          <thead>
            <tr className="bg-yellow-100">
              <th className="border p-2 text-left">{t.punycodePhishing.displayedDomain}</th>
              <th className="border p-2 text-left">{t.punycodePhishing.actualDomain}</th>
              <th className="border p-2 text-left">{t.punycodePhishing.description}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">trẹzor.com</td>
              <td className="border p-2">xn--trzor-o51b.com</td>
              <td className="border p-2">{t.punycodePhishing.specialCharacters}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`p-6 rounded-lg bg-green-50 border-green-200 border-red-200'}`}>
        <div>
          <h3 className="text-xl font-semibold mb-4">{t.punycodePhishing.successTitle}</h3>
          <p className="mb-4">{t.punycodePhishing.successDescription}</p>
          <div className="space-y-4">
            <h4 className="font-semibold">{t.punycodePhishing.protectionTitle}</h4>
            <ul className="list-disc pl-6 space-y-2">
              {t.punycodePhishing.protectionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default PunycodePhishingSuccessContent;