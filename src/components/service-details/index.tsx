
import Breacrumb from '@/common/Breacrumb';
import SiteHeader from '@/layouts/SiteHeader';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import ServiceDetailsArea from './ServiceDetailsArea';

const ServiceDetails = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default ServiceDetails;