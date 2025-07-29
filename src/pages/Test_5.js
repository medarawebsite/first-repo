import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test5SectionHeaders1 from '../components/headers/Test5SectionHeaders1';
import Test5SectionCallToAction4 from '../components/call-to-action/Test5SectionCallToAction4';
import Test5SectionCallToAction2 from '../components/call-to-action/Test5SectionCallToAction2';
import Test5SectionCallToAction3 from '../components/call-to-action/Test5SectionCallToAction3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test5() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Test5SectionHeaders1 />
      <Test5SectionCallToAction4 />
      <Test5SectionCallToAction2 />
      <Test5SectionCallToAction3 />
    </React.Fragment>
  );
}

