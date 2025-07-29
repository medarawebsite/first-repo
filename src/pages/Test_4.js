import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test4SectionHeaders1 from '../components/headers/Test4SectionHeaders1';
import Test4SectionHowItWorks2 from '../components/how-it-works/Test4SectionHowItWorks2';
import Test4SectionNewsletter3 from '../components/newsletter/Test4SectionNewsletter3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Test4() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Test4SectionHeaders1 />
      <Test4SectionHowItWorks2 />
      <Test4SectionNewsletter3 />
    </React.Fragment>
  );
}

