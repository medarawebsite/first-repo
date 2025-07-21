import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsSection__structures5 from '../components/__structures/NewsSection__structures5';
import NewsSection__structures3 from '../components/__structures/NewsSection__structures3';

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
      <NewsSection__structures5 />
      <NewsSection__structures3 />
    </React.Fragment>
  );
}

