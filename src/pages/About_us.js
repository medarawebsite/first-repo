import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSection__structures11 from '../components/__structures/AboutUsSection__structures11';
import AboutUsSection__structures6 from '../components/__structures/AboutUsSection__structures6';
import AboutUsSectionTeam1 from '../components/team/AboutUsSectionTeam1';
import AboutUsSection__structures10 from '../components/__structures/AboutUsSection__structures10';
import AboutUsSectionFooters2 from '../components/footers/AboutUsSectionFooters2';

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
      <AboutUsSectionTeam1 />
      <AboutUsSection__structures10 />
      <AboutUsSectionFooters2 />
    </React.Fragment>
  );
}

