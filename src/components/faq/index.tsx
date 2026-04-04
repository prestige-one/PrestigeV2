
import React from 'react';
import FaqsArea from './FaqsArea';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home/Cta2Area';
import SiteHeader from '@/layouts/SiteHeader';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';

const Faq = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Faq" subtitle="Faq" />
      <FaqsArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default Faq;