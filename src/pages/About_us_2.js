import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUs2SectionNavigations1 from '../components/navigations/AboutUs2SectionNavigations1';
import AboutUs2SectionHeaders2 from '../components/headers/AboutUs2SectionHeaders2';
import AboutUs2Section__structures3 from '../components/__structures/AboutUs2Section__structures3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AboutUs2() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutUs2SectionNavigations1 />
      <AboutUs2SectionHeaders2 />
      <AboutUs2Section__structures3 />
    </React.Fragment>
  );
}

