import './App.css';
import HomePage from './pages/home_page/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhoWeHelp from './pages/who_we_help/WhoWeHelp';
import WhatWeOffer from './pages/what_we_offer/WhatWeOffer';
import WhoWeAre from './pages/who_we_are/WhoWeAre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whowehelp" element={<WhoWeHelp />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <PageFooter />
//     </div>
//   );
// }

export default App;
