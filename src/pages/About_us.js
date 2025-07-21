import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSection__structures11 from '../components/__structures/AboutUsSection__structures11';
import AboutUsSectionCallToAction22 from '../components/call-to-action/AboutUsSectionCallToAction22';
import AboutUsSection__structures6 from '../components/__structures/AboutUsSection__structures6';
import AboutUsSection__structures26 from '../components/__structures/AboutUsSection__structures26';
import AboutUsSection__structures21 from '../components/__structures/AboutUsSection__structures21';

const meta = {
  title: 'About\u0020Us',
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
      <AboutUsSection__structures11 />
      <AboutUsSectionCallToAction22 />
      <AboutUsSection__structures6 />
      <AboutUsSection__structures26 />
      <AboutUsSection__structures21 />
    </React.Fragment>
  );
}

