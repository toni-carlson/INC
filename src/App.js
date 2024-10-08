import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import HomePage from './pages/home_page/HomePage';
import WhoWeHelp from './pages/who_we_help/WhoWeHelp';
import WhatWeOffer from './pages/what_we_offer/WhatWeOffer';
import WhoWeAre from './pages/who_we_are/WhoWeAre';
import ContactUs from './pages/contact_us/ContactUs'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/whowehelp' element={<WhoWeHelp />} />
        <Route path='/whatweoffer' element={<WhatWeOffer />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
