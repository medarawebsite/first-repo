import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSectionNavigations1 from '../components/navigations/AboutUsSectionNavigations1';
import AboutUsSectionHeaders2 from '../components/headers/AboutUsSectionHeaders2';
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
      <AboutUsSectionNavigations1 />
      <AboutUsSectionHeaders2 />
      <AboutUsSectionHowItWorks3 />
      <AboutUsSectionFeatures4 />
      <AboutUsSection__structures8 />
      <AboutUsSectionNewsletter6 />
      <AboutUsSectionFooters7 />
    </React.Fragment>
  );
}

