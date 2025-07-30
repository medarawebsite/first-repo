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
import AboutUsPage from './pages/About_us.js';
import Test6Page from './pages/Test_6.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/technology" element={<TechnologyPage />} />
         
      <Route path="/newsmedaraadvisors" element={<NewsMedaraAdvisorsPage />} />
         
      <Route path="/forpatients" element={<ForPatientsPage />} />
         
      <Route path="/contactus" element={<ContactUsPage />} />
         
      <Route path="/news" element={<NewsPage />} />
         
      <Route path="/aboutus" element={<AboutUsPage />} />
         
      <Route path="/test6" element={<Test6Page />} />
    </Routes>
  );
}

export default App;
