import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./Components/Navabr";
import AboutJournals from "./pages/AboutJournals";
import OurPolicies from "./pages/OurPolicies";
import CrossmarkPolicy from "./pages/CrossmarkPolicy";
import Footer from "./Components/Footer";
import ManuscriptForm from "./pages/ManuscriptForm";
import ArticlePage from "./pages/ArticlePage";
import BoardPage from "./pages/BoardPage";
import AimScope from "./pages/Aim";
import InstructionsForAuthors from "./pages/InstructionsForAuthors";
import Archives from "./pages/Archives";
import SpecialIssues from "./pages/SpecialIssues";
import { Contact } from "lucide-react";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Responsive margin-top: mt-6 mobile, mt-8 tablet, mt-12 desktop */}
      <div className="p-6 mt-4 sm:mt-4 md:mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aim-scope" element={<AimScope />} />
          <Route path="/Archives" element={<Archives />} />

          <Route path="/instructions" element={<InstructionsForAuthors />} />
          <Route path="/special-issues" element={<SpecialIssues />} />

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
