import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsSectionHeaders1 from '../components/headers/NewsSectionHeaders1';
import NewsSectionBlog2 from '../components/blog/NewsSectionBlog2';
import NewsSectionNewsletter3 from '../components/newsletter/NewsSectionNewsletter3';
import NewsSectionFooters4 from '../components/footers/NewsSectionFooters4';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function News() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <NewsSectionHeaders1 />
      <NewsSectionBlog2 />
      <NewsSectionNewsletter3 />
      <NewsSectionFooters4 />
    </React.Fragment>
  );
}

