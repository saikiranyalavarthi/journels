import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 px-6 py-4">
      {/* Main Navbar */}
      <nav
        className={`${
          scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
        } text-black backdrop-blur-md transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">Journals</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-yellow-600 transition">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-600 transition">
                About Us <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/about/journals"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  About Journals
                </Link>
                <Link
                  to="/about/policies"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Our Policies
                </Link>
                <Link
                  to="/about/crossmark"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Crossmark Policy
                </Link>
              </div>
            </div>

            {/* For Authors Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-600 transition">
                For Authors <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/editorial-board"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Editorial Board
                </Link>
                <Link
                  to="/articles"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Articles
                </Link>
                <Link
                  to="/submit-manuscript"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Submit Manuscript
                </Link>
                <Link
                  to="/reprints"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Reprints
                </Link>
              </div>
            </div>

            <Link to="/journals" className="hover:text-yellow-600 transition">
              Our Journals
            </Link>
            <Link to="/contact" className="hover:text-yellow-600 transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/80 backdrop-blur-md px-6 py-4 space-y-3 text-black">
            <Link
              to="/"
              className="block hover:text-yellow-600 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-600 transition"
              >
                About Us <ChevronDown size={16} />
              </button>
              {mobileAboutOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  <Link
                    to="/about/journals"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    About Journals
                  </Link>
                  <Link
                    to="/about/policies"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Our Policies
                  </Link>
                  <Link
                    to="/about/crossmark"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Crossmark Policy
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Authors Dropdown */}
            <div>
              <button
                onClick={() => setMobileAuthorsOpen(!mobileAuthorsOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-600 transition"
              >
                For Authors <ChevronDown size={16} />
              </button>
              {mobileAuthorsOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  <Link
                    to="/editorial-board"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Editorial Board
                  </Link>
                  <Link
                    to="/articles"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Articles
                  </Link>
                  <Link
                    to="/submit-manuscript"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Submit Manuscript
                  </Link>
                  <Link
                    to="/reprints"
                    className="block hover:text-yellow-600"
                    onClick={() => setOpen(false)}
                  >
                    Reprints
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/journals"
              className="block hover:text-yellow-600 transition"
              onClick={() => setOpen(false)}
            >
              Our Journals
            </Link>
            <Link
              to="/contact"
              className="block hover:text-yellow-600 transition"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
