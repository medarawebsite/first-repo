import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsMedaraGrowthSectionHeaders1 from '../components/headers/NewsMedaraGrowthSectionHeaders1';
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
      <NewsMedaraGrowthSectionFooters2 />
    </React.Fragment>
  );
}

