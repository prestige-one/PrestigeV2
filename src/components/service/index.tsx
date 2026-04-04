
import React from 'react';
import ServiceArea from './ServiceArea';
import ServiceAbout from './ServiceAbout';
import Breacrumb from '@/common/Breacrumb';
import SiteHeader from '@/layouts/SiteHeader';
import PriceArea from '../homes/home-2/PriceArea';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import Cta2Area from '../homes/home/Cta2Area';

const Service = () => {
  return (
    <>
    <SiteHeader />
    <Breacrumb title="Services" subtitle="Services" />
    <ServiceArea />
    <ServiceAbout />
    <PriceArea style_2={true} />
    <Cta2Area />
    <SiteFooterBlock />      
    </>
  );
};

export default Service;