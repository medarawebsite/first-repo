import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TestSectionHeaders1 from '../components/headers/TestSectionHeaders1';
import TestSectionCallToAction4 from '../components/call-to-action/TestSectionCallToAction4';
import TestSectionHowItWorks3 from '../components/how-it-works/TestSectionHowItWorks3';
import TestSectionNewsletter2 from '../components/newsletter/TestSectionNewsletter2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <TestSectionHeaders1 />
      <TestSectionCallToAction4 />
      <TestSectionHowItWorks3 />
      <TestSectionNewsletter2 />
    </React.Fragment>
  );
}

