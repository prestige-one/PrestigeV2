
import Breacrumb from '@/common/Breacrumb';
import SiteHeader from '@/layouts/SiteHeader';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import LoginArea from './LoginArea';

const Login = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Login" subtitle="Login" />
      <LoginArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default Login;