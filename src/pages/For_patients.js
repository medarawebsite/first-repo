import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ForPatientsSectionHeaders7 from '../components/headers/ForPatientsSectionHeaders7';
import ForPatientsSectionCallToAction2 from '../components/call-to-action/ForPatientsSectionCallToAction2';
import ForPatientsSectionFeatures3 from '../components/features/ForPatientsSectionFeatures3';
import ForPatientsSectionCallToAction4 from '../components/call-to-action/ForPatientsSectionCallToAction4';
import ForPatientsSectionFooters5 from '../components/footers/ForPatientsSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ForPatients() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ForPatientsSectionHeaders7 />
      <ForPatientsSectionCallToAction2 />
      <ForPatientsSectionFeatures3 />
      <ForPatientsSectionCallToAction4 />
      <ForPatientsSectionFooters5 />
    </React.Fragment>
  );
}

