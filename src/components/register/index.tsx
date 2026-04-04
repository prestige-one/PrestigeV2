
import Breacrumb from '@/common/Breacrumb';
import SiteHeader from '@/layouts/SiteHeader';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import RegisterArea from './RegisterArea';

const Register = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Register" subtitle="Register" />
      <RegisterArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default Register;