import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";

const AiIdeRepoAutorunSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        {t.aiIdeRepoAutorun.successContent.correctMessage}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-gray-800 break-words [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:text-[0.9em]">
        <h3 className="text-xl font-bold mb-4">{t.aiIdeRepoAutorun.successContent.howToAvoidTitle}</h3>
        <p className="mb-4">
          {t.aiIdeRepoAutorun.successContent.description}
        </p>

        {/* The exhibit: the file that would have run on folder open (defanged). */}
        <div className="relative w-full aspect-[10/7] border rounded-lg overflow-hidden">
          <Image
            src="/images/challenges/ai-ide-repo-autorun/tasks-json.svg"
            alt={t.aiIdeRepoAutorun.successContent.exhibitAlt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p
          className="mt-2 text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: t.aiIdeRepoAutorun.successContent.exhibitCaption }}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{t.aiIdeRepoAutorun.successContent.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.aiIdeRepoAutorun.successContent.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.aiIdeRepoAutorun.successContent.realWorldTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.aiIdeRepoAutorun.successContent.realWorld.map((fact, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: fact }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.aiIdeRepoAutorun.successContent.bestPracticesTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.aiIdeRepoAutorun.successContent.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.aiIdeRepoAutorun.successContent.compromisedTitle}
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {t.aiIdeRepoAutorun.successContent.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default AiIdeRepoAutorunSuccessContent;
