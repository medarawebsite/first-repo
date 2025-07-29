import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test3SectionHeaders1 from '../components/headers/Test3SectionHeaders1';
import Test3SectionBlog2 from '../components/blog/Test3SectionBlog2';
import Test3SectionCallToAction3 from '../components/call-to-action/Test3SectionCallToAction3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test3() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Test3SectionHeaders1 />
      <Test3SectionBlog2 />
      <Test3SectionCallToAction3 />
    </React.Fragment>
  );
}

