import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUsSectionHeaders3 from '../components/headers/AboutUsSectionHeaders3';
import AboutUsSection__structures6 from '../components/__structures/AboutUsSection__structures6';
import AboutUsSection__structures7 from '../components/__structures/AboutUsSection__structures7';
import AboutUsSectionBlogContent4 from '../components/blog-content/AboutUsSectionBlogContent4';
import AboutUsSection__structures9 from '../components/__structures/AboutUsSection__structures9';
import AboutUsSection__structures8 from '../components/__structures/AboutUsSection__structures8';
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
      <AboutUsSectionHeaders3 />
      <AboutUsSection__structures6 />
      <AboutUsSection__structures7 />
      <AboutUsSectionBlogContent4 />
      <AboutUsSection__structures9 />
      <AboutUsSection__structures8 />
      <AboutUsSectionTeam1 />
      <AboutUsSection__structures10 />
      <AboutUsSectionFooters2 />
    </React.Fragment>
  );
}

