import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { LoadingPage, ContactUs } from "./LoadingContactPages";
import OurWorks from "./OurWorks";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import OurTeamPage from './OurTeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/our-team" element={<OurTeamPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;