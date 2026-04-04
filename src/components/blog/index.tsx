
import React from 'react';
import BlogArea from './BlogArea';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home/Cta2Area';
import SiteHeader from '@/layouts/SiteHeader';
import SiteFooterBlock from '@/layouts/SiteFooterBlock';

const Blog = () => {
  return (
    <>
      <SiteHeader />
      <Breacrumb title="Blog" subtitle="Blog" />
      <BlogArea />
      <Cta2Area />
      <SiteFooterBlock />
    </>
  );
};

export default Blog;