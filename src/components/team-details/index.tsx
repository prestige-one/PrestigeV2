
import Breacrumb from '@/common/Breacrumb';
import SiteHeader from '@/layouts/SiteHeader';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';
import TeamDetailsArea from './TeamDetailsArea';

const TeamDetails = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Expert Team" subtitle="Team" />
      <TeamDetailsArea /> 
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default TeamDetails;