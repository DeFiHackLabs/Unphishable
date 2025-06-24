import { useLanguage } from '@/app/contexts/LanguageContext';

interface FakeTokenAirdropSuccessContentProp {
  result: any;
}

const FakeTokenAirdropSuccessContent = ({
  result
}: FakeTokenAirdropSuccessContentProp) => {
  const { t } = useLanguage();

  return (
    <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {result.message}
      {result.success && (
        <div className="mt-4">
          <h4 className="font-bold mb-2">{t.fakeTokenAirdrop.tipTitle}</h4>
          <ul className="list-disc pl-5 space-y-2">
            {t.fakeTokenAirdrop.tips.map((tip: string, index: number) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}

export default FakeTokenAirdropSuccessContent;