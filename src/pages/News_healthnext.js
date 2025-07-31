import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsHealthnextSectionHeaders1 from '../components/headers/NewsHealthnextSectionHeaders1';
import NewsHealthnextSection__structures3 from '../components/__structures/NewsHealthnextSection__structures3';
import NewsHealthnextSectionBlogContent2 from '../components/blog-content/NewsHealthnextSectionBlogContent2';
import NewsHealthnextSection__structures7 from '../components/__structures/NewsHealthnextSection__structures7';
import NewsHealthnextSectionFooters6 from '../components/footers/NewsHealthnextSectionFooters6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function NewsHealthnext() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <NewsHealthnextSectionHeaders1 />
      <NewsHealthnextSection__structures3 />
      <NewsHealthnextSectionBlogContent2 />
      <NewsHealthnextSection__structures7 />
      <NewsHealthnextSectionFooters6 />
    </React.Fragment>
  );
}

