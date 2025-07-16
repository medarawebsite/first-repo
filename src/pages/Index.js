import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations10 from '../components/navigations/IndexSectionNavigations10';
import IndexSectionHeaders3 from '../components/headers/IndexSectionHeaders3';
import IndexSection__structures12 from '../components/__structures/IndexSection__structures12';
import IndexSectionCallToAction48 from '../components/call-to-action/IndexSectionCallToAction48';
import IndexSectionTestimonials47 from '../components/testimonials/IndexSectionTestimonials47';
import IndexSectionBlog52 from '../components/blog/IndexSectionBlog52';
import IndexSection__structures50 from '../components/__structures/IndexSection__structures50';
import IndexSectionLogoClouds49 from '../components/logo-clouds/IndexSectionLogoClouds49';
import IndexSectionNewsletter7 from '../components/newsletter/IndexSectionNewsletter7';
import IndexSectionFooters17 from '../components/footers/IndexSectionFooters17';
import IndexSection__structures22 from '../components/__structures/IndexSection__structures22';

const meta = {
  title: 'medara\u0020cancer\u0020risk\u0020assessment\u0020home',
  meta: [],
  link: [{ rel: 'stylesheet', href: '' }],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations10 />
      <IndexSectionHeaders3 />
      <IndexSection__structures12 />
      <IndexSectionCallToAction48 />
      <IndexSectionTestimonials47 />
      <IndexSectionBlog52 />
      <IndexSection__structures50 />
      <IndexSectionLogoClouds49 />
      <IndexSectionNewsletter7 />
      <IndexSectionFooters17 />
      <IndexSection__structures22 />
    </React.Fragment>
  );
}

