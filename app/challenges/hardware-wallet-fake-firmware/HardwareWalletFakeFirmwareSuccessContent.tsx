import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";

const HardwareWalletFakeFirmwareSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        {t.hardwareWalletFakeFirmware.successContent.correctMessage}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-gray-800">
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="font-bold mb-2">{t.hardwareWalletFakeFirmware.successContent.ruleTitle}</p>
          <p className="text-lg font-bold">{t.hardwareWalletFakeFirmware.successContent.rule}</p>
        </div>

        <h3 className="text-xl font-bold mb-4">{t.hardwareWalletFakeFirmware.successContent.howItWorksTitle}</h3>
        <p className="mb-4">
          {t.hardwareWalletFakeFirmware.successContent.description}
        </p>
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.hardwareWalletFakeFirmware.successContent.mentalModel }}
        />

        <div className="relative w-full aspect-[12/7] border rounded-lg overflow-hidden mt-6">
          <Image
            src="/images/challenges/hardware-wallet-fake-firmware/device-confirm.svg"
            alt={t.hardwareWalletFakeFirmware.successContent.deviceAlt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-sm mt-2 mb-4">
          {t.hardwareWalletFakeFirmware.successContent.deviceCaption}
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">{t.hardwareWalletFakeFirmware.successContent.warningSignsTitle}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.hardwareWalletFakeFirmware.successContent.warningSigns.map((sign, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: sign }} />
            ))}
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.hardwareWalletFakeFirmware.successContent.bestPracticesTitle}
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {t.hardwareWalletFakeFirmware.successContent.bestPractices.map((practice, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: practice }} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          {t.hardwareWalletFakeFirmware.successContent.compromisedTitle}
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            {t.hardwareWalletFakeFirmware.successContent.compromisedSteps.map((step, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default HardwareWalletFakeFirmwareSuccessContent;
