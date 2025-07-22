import { useLanguage } from '@/app/contexts/LanguageContext';

interface Props {
  successMessage: string;
}

const FakeZoomMeetingPhishingSuccessContent = ({ successMessage }: Props) => {
  const { t } = useLanguage();
  return (
    <div className='bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6'>
      <h3 className='text-lg font-semibold mb-5'>{t.fakeZoomMeetingPhishing.successMessage.title}</h3>
      <p className='mb-4'>{t.fakeZoomMeetingPhishing.successMessage.content[0]}</p>
      <p className='mb-4'>{t.fakeZoomMeetingPhishing.successMessage.content[1]}</p>
      <p className='mb-4'>{t.fakeZoomMeetingPhishing.successMessage.content[2]}</p>
      <p className='mb-4'>{t.fakeZoomMeetingPhishing.successMessage.content[3]}</p>
      <p className='mb-4'>{t.fakeZoomMeetingPhishing.successMessage.content[4]}</p>
      <h3 className='text-lg font-semibold mb-5'>{t.fakeZoomMeetingPhishing.successMessage.title2}</h3>
      <p className='mb-3'>1. {t.fakeZoomMeetingPhishing.successMessage.content2[0]}</p>
      <p className='mb-3'>2. {t.fakeZoomMeetingPhishing.successMessage.content2[1]}</p>
      <p className='mb-3'>3. {t.fakeZoomMeetingPhishing.successMessage.content2[2]}</p>
      <p className='mb-3'>4. {t.fakeZoomMeetingPhishing.successMessage.content2[3]}</p>
      <p className='mb-3'>5. {t.fakeZoomMeetingPhishing.successMessage.content2[4]}</p>
    </div>
  );
};
export default FakeZoomMeetingPhishingSuccessContent;
