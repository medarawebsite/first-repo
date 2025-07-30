import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSectionHeaders15 from '../components/headers/AboutUsSectionHeaders15';
import AboutUsSectionHowItWorks3 from '../components/how-it-works/AboutUsSectionHowItWorks3';
import AboutUsSectionFeatures4 from '../components/features/AboutUsSectionFeatures4';
import AboutUsSection__structures8 from '../components/__structures/AboutUsSection__structures8';
import AboutUsSectionNewsletter6 from '../components/newsletter/AboutUsSectionNewsletter6';
import AboutUsSectionFooters7 from '../components/footers/AboutUsSectionFooters7';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AboutUs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutUsSectionHeaders15 />
      <AboutUsSectionHowItWorks3 />
      <AboutUsSectionFeatures4 />
      <AboutUsSection__structures8 />
      <AboutUsSectionNewsletter6 />
      <AboutUsSectionFooters7 />
    </React.Fragment>
  );
}

