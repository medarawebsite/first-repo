import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NewsMedaraAdvisorsSectionHeaders1 from '../components/headers/NewsMedaraAdvisorsSectionHeaders1';
import NewsMedaraAdvisorsSectionBlogContent2 from '../components/blog-content/NewsMedaraAdvisorsSectionBlogContent2';
import NewsMedaraAdvisorsSectionTestimonials3 from '../components/testimonials/NewsMedaraAdvisorsSectionTestimonials3';
import NewsMedaraAdvisorsSection__structures4 from '../components/__structures/NewsMedaraAdvisorsSection__structures4';

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
      <NewsMedaraAdvisorsSectionHeaders1 />
      <NewsMedaraAdvisorsSectionBlogContent2 />
      <NewsMedaraAdvisorsSectionTestimonials3 />
      <NewsMedaraAdvisorsSection__structures4 />
    </React.Fragment>
  );
}

