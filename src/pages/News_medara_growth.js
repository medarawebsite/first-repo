import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsMedaraGrowthSectionHeaders1 from '../components/headers/NewsMedaraGrowthSectionHeaders1';
import NewsMedaraGrowthSection__structures5 from '../components/__structures/NewsMedaraGrowthSection__structures5';
import NewsMedaraGrowthSection__structures12 from '../components/__structures/NewsMedaraGrowthSection__structures12';
import NewsMedaraGrowthSectionBlogContent4 from '../components/blog-content/NewsMedaraGrowthSectionBlogContent4';
import NewsMedaraGrowthSection__structures8 from '../components/__structures/NewsMedaraGrowthSection__structures8';
import NewsMedaraGrowthSectionFooters2 from '../components/footers/NewsMedaraGrowthSectionFooters2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function NewsMedaraGrowth() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <NewsMedaraGrowthSectionHeaders1 />
      <NewsMedaraGrowthSection__structures5 />
      <NewsMedaraGrowthSection__structures12 />
      <NewsMedaraGrowthSectionBlogContent4 />
      <NewsMedaraGrowthSection__structures8 />
      <NewsMedaraGrowthSectionFooters2 />
    </React.Fragment>
  );
}

