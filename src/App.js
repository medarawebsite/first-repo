import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutUsPage from './pages/About_us.js';
import TechnologyPage from './pages/Technology.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutUsPage />} />
         
      <Route path="/technology" element={<TechnologyPage />} />
    </Routes>
  );
}

export default App;
