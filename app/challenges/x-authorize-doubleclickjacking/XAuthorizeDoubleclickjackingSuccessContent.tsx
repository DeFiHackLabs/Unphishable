
import { useLanguage } from '@/app/contexts/LanguageContext';
const XAuthorizeDoubleclickjackingSuccessContent = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <h4 className="font-bold mb-2">{t.xAuthorizeDoubleclickjacking.educational.attackExplanation.title}</h4>
      <p className="mb-4">{t.xAuthorizeDoubleclickjacking.educational.attackExplanation.description}</p>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gray-100 p-2 text-center font-bold border-b">
            {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.firstScreen}
          </div>
          <div className="p-4">
            <div className="text-center mb-4">
              <img
                src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                alt="X Logo"
                className="w-8 h-8 mx-auto mb-1"
              />
              <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
            </div>

            <div className="mb-2 font-bold">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
            <div className="space-y-2 mb-4">
              <div className="flex">
                <span className="mr-2">✓</span>
                <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
              </div>
              <div className="flex">
                <span className="mr-2">✓</span>
                <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewFollowers}</span>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold">
                {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gray-100 p-2 text-center font-bold border-b">
            {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.secondScreen}
          </div>
          <div className="p-4">
            <div className="text-center mb-4">
              <img
                src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                alt="X Logo"
                className="w-8 h-8 mx-auto mb-1"
              />
              <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
            </div>

            <div className="mb-2 font-bold">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
            <div className="space-y-2 mb-4">
              <div className="flex">
                <span className="mr-2">✓</span>
                <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
              </div>
              <div className="flex bg-yellow-100 px-1">
                <span className="mr-2">✓</span>
                <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.postTweets}</span>
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold">
                {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center font-bold">
        {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.warning}
      </p>
    </div>
  );
}

export default XAuthorizeDoubleclickjackingSuccessContent;