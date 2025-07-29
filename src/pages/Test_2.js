import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test2SectionHeaders1 from '../components/headers/Test2SectionHeaders1';
import Test2SectionCallToAction3 from '../components/call-to-action/Test2SectionCallToAction3';
import Test2SectionHowItWorks2 from '../components/how-it-works/Test2SectionHowItWorks2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test2() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Test2SectionHeaders1 />
      <Test2SectionCallToAction3 />
      <Test2SectionHowItWorks2 />
    </React.Fragment>
  );
}

