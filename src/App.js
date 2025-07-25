import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutUsPage from './pages/About_us.js';
import TechnologyPage from './pages/Technology.js';
import NewsPage from './pages/News.js';
import NewsMedaraAdvisorsPage from './pages/News_medara_advisors.js';
import ForPatientsPage from './pages/For_patients.js';
import ContactUsPage from './pages/Contact_us.js';
import AboutUs2Page from './pages/About_us_2.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutUsPage />} />
         
      <Route path="/technology" element={<TechnologyPage />} />
         
      <Route path="/news" element={<NewsPage />} />
         
      <Route path="/newsmedaraadvisors" element={<NewsMedaraAdvisorsPage />} />
         
      <Route path="/forpatients" element={<ForPatientsPage />} />
         
      <Route path="/contactus" element={<ContactUsPage />} />
         
      <Route path="/aboutus2" element={<AboutUs2Page />} />
    </Routes>
  );
}

export default App;
