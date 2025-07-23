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

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutUsPage />} />
         
      <Route path="/technology" element={<TechnologyPage />} />
         
      <Route path="/news" element={<NewsPage />} />
         
      <Route path="/newsmedaraadvisors" element={<NewsMedaraAdvisorsPage />} />
    </Routes>
  );
}

export default App;
