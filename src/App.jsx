import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router
// ✅ Import your Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Journals from "./pages/Journals";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navabr";
import AboutJournals from "./pages/AboutJournals";
import OurPolicies from "./pages/OurPolicies";
import CrossmarkPolicy from "./pages/CrossmarkPolicy";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/about/journals" element={<AboutJournals />} />
          <Route path="/about/policies" element={<OurPolicies />} />
          <Route path="/about/crossmark" element={<CrossmarkPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
