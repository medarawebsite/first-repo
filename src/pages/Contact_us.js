import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactUsSectionHeaders1 from '../components/headers/ContactUsSectionHeaders1';
import ContactUsSectionContacts2 from '../components/contacts/ContactUsSectionContacts2';
import ContactUsSectionFooters3 from '../components/footers/ContactUsSectionFooters3';

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
      <ContactUsSectionHeaders1 />
      <ContactUsSectionContacts2 />
      <ContactUsSectionFooters3 />
    </React.Fragment>
  );
}

