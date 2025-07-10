import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations10 from '../components/navigations/IndexSectionNavigations10';
import IndexSectionHeaders3 from '../components/headers/IndexSectionHeaders3';
import IndexSection__structures12 from '../components/__structures/IndexSection__structures12';
import IndexSectionHowItWorks6 from '../components/how-it-works/IndexSectionHowItWorks6';
import IndexSectionTestimonials4 from '../components/testimonials/IndexSectionTestimonials4';
import IndexSection__structures26 from '../components/__structures/IndexSection__structures26';
import IndexSection__structures27 from '../components/__structures/IndexSection__structures27';
import IndexSection__structures29 from '../components/__structures/IndexSection__structures29';
import IndexSection__structures30 from '../components/__structures/IndexSection__structures30';
import IndexSection__structures31 from '../components/__structures/IndexSection__structures31';
import IndexSectionNewsletter7 from '../components/newsletter/IndexSectionNewsletter7';
import IndexSectionFooters17 from '../components/footers/IndexSectionFooters17';
import IndexSection__structures22 from '../components/__structures/IndexSection__structures22';

const meta = {
  title: 'medara\u0020cancer\u0020risk\u0020assessment\u0020home',
  meta: [],
  link: [{ rel: 'stylesheet', href: '' }],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations10 />
      <IndexSectionHeaders3 />
      <IndexSection__structures12 />
      <IndexSectionHowItWorks6 />
      <IndexSectionTestimonials4 />
      <IndexSection__structures26 />
      <IndexSection__structures27 />
      <IndexSection__structures29 />
      <IndexSection__structures30 />
      <IndexSection__structures31 />
      <IndexSectionNewsletter7 />
      <IndexSectionFooters17 />
      <IndexSection__structures22 />
    </React.Fragment>
  );
}

