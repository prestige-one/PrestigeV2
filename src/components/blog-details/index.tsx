
import React from 'react';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home/Cta2Area';
import BlogDetailsArea from './BlogDetailsArea';
import SiteHeader from '@/layouts/SiteHeader';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';

const BlogDetails = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default BlogDetails;