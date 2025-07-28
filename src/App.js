import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import TechnologyPage from './pages/Technology.js';
import NewsMedaraAdvisorsPage from './pages/News_medara_advisors.js';
import ForPatientsPage from './pages/For_patients.js';
import ContactUsPage from './pages/Contact_us.js';
import NewsPage from './pages/News.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/technology" element={<TechnologyPage />} />
         
      <Route path="/newsmedaraadvisors" element={<NewsMedaraAdvisorsPage />} />
         
      <Route path="/forpatients" element={<ForPatientsPage />} />
         
      <Route path="/contactus" element={<ContactUsPage />} />
         
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
