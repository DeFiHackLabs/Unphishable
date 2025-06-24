'use client';

import DynamicMetadata from '@/app/components/DynamicMetadata';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import AboutUs from '@/app/components/index/AboutUs';
import Founders from '@/app/components/index/Founders';
import Sponsors from '@/app/components/index/Sponsors';
import Footer from '@/app/components/index/Footer';


export default function AboutUsPage() {
  return (
    <div>
      <TopBar />
      <Banner />
      <DynamicMetadata pageKey="AboutUs" />
      <AboutUs title='page' />
      <Founders />
      <Sponsors title='page' />
      <Footer />
    </div>
  );
}