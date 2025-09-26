import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Journals from "./pages/Journals";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navabr";
import AboutJournals from "./pages/AboutJournals";
import OurPolicies from "./pages/OurPolicies";
import CrossmarkPolicy from "./pages/CrossmarkPolicy";
import Footer from "./Components/Footer";
import ManuscriptForm from "./pages/ManuscriptForm";
import ArticlePage from "./pages/ArticlePage";
import BoardPage from "./pages/BoardPage";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Apply mt-12 for margin-top */}
      <div className="p-6 mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-manuscript" element={<ManuscriptForm />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/editorial-board" element={<BoardPage />} />

          {/* Nested Routes for About Section */}
          <Route path="/about/journals" element={<AboutJournals />} />
          <Route path="/about/policies" element={<OurPolicies />} />
          <Route path="/about/crossmark" element={<CrossmarkPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
