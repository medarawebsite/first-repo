import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactUsSectionNavigations1 from '../components/navigations/ContactUsSectionNavigations1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ContactUs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactUsSectionNavigations1 />
    </React.Fragment>
  );
}

