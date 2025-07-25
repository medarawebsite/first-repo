import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TechnologySection__structures1 from '../components/__structures/TechnologySection__structures1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Technology() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <TechnologySection__structures1 />
    </React.Fragment>
  );
}

