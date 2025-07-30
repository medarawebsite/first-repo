import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsMedaraAdvisorsSectionHeaders8 from '../components/headers/NewsMedaraAdvisorsSectionHeaders8';
import NewsMedaraAdvisorsSection__structures20 from '../components/__structures/NewsMedaraAdvisorsSection__structures20';
import NewsMedaraAdvisorsSection__structures11 from '../components/__structures/NewsMedaraAdvisorsSection__structures11';
import NewsMedaraAdvisorsSectionTestimonials3 from '../components/testimonials/NewsMedaraAdvisorsSectionTestimonials3';
import NewsMedaraAdvisorsSection__structures4 from '../components/__structures/NewsMedaraAdvisorsSection__structures4';
import NewsMedaraAdvisorsSectionFooters9 from '../components/footers/NewsMedaraAdvisorsSectionFooters9';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function NewsMedaraAdvisors() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <NewsMedaraAdvisorsSectionHeaders8 />
      <NewsMedaraAdvisorsSection__structures20 />
      <NewsMedaraAdvisorsSection__structures11 />
      <NewsMedaraAdvisorsSectionTestimonials3 />
      <NewsMedaraAdvisorsSection__structures4 />
      <NewsMedaraAdvisorsSectionFooters9 />
    </React.Fragment>
  );
}

