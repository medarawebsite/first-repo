import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test6SectionHeaders1 from '../components/headers/Test6SectionHeaders1';
import Test6SectionHowItWorks4 from '../components/how-it-works/Test6SectionHowItWorks4';
import Test6SectionNewsletter3 from '../components/newsletter/Test6SectionNewsletter3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test6() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Test6SectionHeaders1 />
      <Test6SectionHowItWorks4 />
      <Test6SectionNewsletter3 />
    </React.Fragment>
  );
}

