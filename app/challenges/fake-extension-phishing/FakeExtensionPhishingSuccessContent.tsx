import { useLanguage } from "@/app/contexts/LanguageContext";

const FakeExtensionPhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-green-500 my-4">
        ✅ Correct! You successfully identified the fake extension or chose the
        official site.
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">How to Avoid Fake Extensions</h3>
        <p className="mb-4">
          Fake browser extensions are a common phishing technique used by
          attackers to steal your data, passwords, and cryptocurrency. Here's
          how to protect yourself:
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-bold mb-2">Key Warning Signs:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Low user count:</strong> Official extensions have
              thousands or millions of users
            </li>
            <li>
              <strong>Suspicious publisher:</strong> Check if the publisher name
              matches the official company
            </li>
            <li>
              <strong>Recent creation date:</strong> Fake extensions are often
              newly created
            </li>
            <li>
              <strong>Reviews:</strong> Look for fake or suspicous reviews
            </li>
            <li>
              <strong>Requesting excessive permissions:</strong> Be wary of
              extensions asking for more access than needed
            </li>
          </ul>
        </div>

        <h4 className="text-lg font-bold mt-6 mb-3">
          Best Practices for Extension Safety
        </h4>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Always download from official websites:</strong> Go directly
            to the official website (e.g., metamask.io) rather than searching in
            extension stores. Fake or malicious extensions can appear in search
            results or even in official extension stores, sometimes mimicking
            the name, icon, or branding of the real extension. By visiting the
            official website, you ensure you are getting the authentic, safe
            version and avoid falling for lookalike or scam listings that could
            compromise your security and assets.
          </li>
          <li>
            <strong>Check user count and reviews:</strong> Official extensions
            have high user counts and generally positive reviews
          </li>
          <li>
            <strong>Read permissions carefully:</strong> Only grant necessary
            permissions
          </li>
          <li>
            <strong>Keep extensions updated:</strong> Regular updates often
            include security patches
          </li>
          <li>
            <strong>Remove unused extensions:</strong> Reduce attack surface by
            removing extensions you no longer use
          </li>
        </ul>

        <h4 className="text-lg font-bold mt-6 mb-3">
          What to Do If You've Installed a Fake Extension
        </h4>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Make a fresh wallet (preferably on a fresh browser) and transfer ALL funds out of the compromised wallet</strong>
            </li>
            <li>
              <strong>Uninstall the extension</strong>
            </li>
            <li>
              <strong>Change all passwords</strong> that may have been
              compromised
            </li>
            <li>
              <strong>Check for unauthorized transactions</strong> in your
              cryptocurrency wallets
            </li>
            <li>
              <strong>Scan your device for malware</strong> using reputable
              antivirus software
            </li>
            <li>
              <strong>Monitor your accounts</strong> for suspicious activity
            </li>
            <li>
              <strong>Consider using a hardware wallet</strong> for additional
              security
            </li>
          </ol>
        </div>

      </div>
    </>
  );
};

export default FakeExtensionPhishingSuccessContent;
