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
import TestPage from './pages/Test.js';
import Test2Page from './pages/Test_2.js';
import Test3Page from './pages/Test_3.js';
import Test4Page from './pages/Test_4.js';
import Test5Page from './pages/Test_5.js';
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
         
      <Route path="/test" element={<TestPage />} />
         
      <Route path="/test2" element={<Test2Page />} />
         
      <Route path="/test3" element={<Test3Page />} />
         
      <Route path="/test4" element={<Test4Page />} />
         
      <Route path="/test5" element={<Test5Page />} />
         
      <Route path="/test6" element={<Test6Page />} />
    </Routes>
  );
}

export default App;
