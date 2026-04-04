
import React from 'react';
import TeamArea from './TeamArea';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home/Cta2Area';
import SiteHeader from '@/layouts/SiteHeader';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import CategoryArea from '../homes/home-2/CategoryArea';
import TestimonialArea from '../homes/home-2/TestimonialArea';

const Team = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Expert Team" subtitle="Team" />
      <TeamArea />
      <CategoryArea />
      <TestimonialArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default Team;