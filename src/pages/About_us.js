import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSection__structures11 from '../components/__structures/AboutUsSection__structures11';
import AboutUsSection__structures6 from '../components/__structures/AboutUsSection__structures6';
import AboutUsSectionFeatures31 from '../components/features/AboutUsSectionFeatures31';
import AboutUsSection__structures33 from '../components/__structures/AboutUsSection__structures33';
import AboutUsSectionTeam1 from '../components/team/AboutUsSectionTeam1';
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
      <AboutUsSection__structures6 />
      <AboutUsSectionFeatures31 />
      <AboutUsSection__structures33 />
      <AboutUsSectionTeam1 />
      <AboutUsSection__structures21 />
    </React.Fragment>
  );
}

