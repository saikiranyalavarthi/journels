import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-4 border-yellow-600 shadow-lg">
      {/* Main Navbar */}
      <nav
        className={`${
          scrolled
            ? "bg-white/80 backdrop-blur-md"
            : "bg-white/60 backdrop-blur-md"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide text-yellow-600 drop-shadow-sm"
          >
            Journal
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link to="/about" className="hover:text-yellow-600 transition">
              About
            </Link>
            <Link to="/aim-scope" className="hover:text-yellow-600 transition">
              Aim &amp; Scope
            </Link>
            <Link
              to="/editorial-board"
              className="hover:text-yellow-600 transition"
            >
              Editorial Board
            </Link>
            <Link
              to="/instructions"
              className="hover:text-yellow-600 transition"
            >
              Instructions for Authors
            </Link>

            {/* Articles Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-600 transition">
                Articles <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white/90 backdrop-blur-md text-black rounded-lg shadow-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transform transition-all duration-200 z-50">
                <Link
                  to="/articles/in-press"
                  className="block px-4 py-2 hover:bg-gray-100/50 rounded-md"
                >
                  Articles-In-Press
                </Link>
                <Link
                  to="/articles/current"
                  className="block px-4 py-2 hover:bg-gray-100/50 rounded-md"
                >
                  Current Issue
                </Link>
              </div>
            </div>

            <Link to="/archives" className="hover:text-yellow-600 transition">
              Archives
            </Link>
            <Link
              to="/special-issues"
              className="hover:text-yellow-600 transition"
            >
              Special Issues
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-yellow-600 px-6 py-6 space-y-4 text-black font-medium shadow-lg">
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              About
            </Link>
            <Link
              to="/aim-scope"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              Aim &amp; Scope
            </Link>
            <Link
              to="/editorial-board"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              Editorial Board
            </Link>
            <Link
              to="/instructions"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              Instructions for Authors
            </Link>

            {/* Mobile Articles Dropdown */}
            <div>
              <button
                onClick={() => setMobileArticlesOpen(!mobileArticlesOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-600 transition"
              >
                Articles <ChevronDown size={16} />
              </button>
              {mobileArticlesOpen && (
                <div className="mt-2 space-y-2 pl-4 text-sm">
                  <Link
                    to="/articles/in-press"
                    onClick={() => setOpen(false)}
                    className="block hover:text-yellow-600"
                  >
                    Articles-In-Press
                  </Link>
                  <Link
                    to="/articles/current"
                    onClick={() => setOpen(false)}
                    className="block hover:text-yellow-600"
                  >
                    Current Issue
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/archives"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              Archives
            </Link>
            <Link
              to="/special-issues"
              onClick={() => setOpen(false)}
              className="block hover:text-yellow-600"
            >
              Special Issues
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
