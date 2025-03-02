import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { LoadingPage, ContactUs } from "./LoadingContactPages";
import OurWorks from "./OurWorks";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
