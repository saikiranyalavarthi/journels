import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // Mobile toggle

  return (
    <header>
      {/* Mini Navbar */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <span className="font-semibold">My Journals</span>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={18} className="hover:text-yellow-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={18} className="hover:text-yellow-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={18} className="hover:text-yellow-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={18} className="hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">Journals</h1>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-yellow-200 transition">
              Home
            </Link>

            {/* About Us Dropdown on Hover */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-200 transition">
                About Us <ChevronDown size={16} />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 dark:bg-gray-800 dark:text-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/about/journals"
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white"
                >
                  About Journals
                </Link>
                <Link
                  to="/about/policies"
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white"
                >
                  Our Policies
                </Link>
                <Link
                  to="/about/crossmark"
                  className="block px-4 py-2 hover:bg-purple-500 hover:text-white"
                >
                  Crossmark Policy
                </Link>
              </div>
            </div>

            <Link to="/journals" className="hover:text-yellow-200 transition">
              Our Journals
            </Link>
            <Link to="/contact" className="hover:text-yellow-200 transition">
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

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-purple-700 px-6 py-4 space-y-3">
            <Link
              to="/"
              className="block hover:text-yellow-200 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-200 transition"
              >
                About Us <ChevronDown size={16} />
              </button>
              {mobileAboutOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  <Link
                    to="/about/journals"
                    className="block hover:text-yellow-200"
                    onClick={() => setOpen(false)}
                  >
                    About Journals
                  </Link>
                  <Link
                    to="/about/policies"
                    className="block hover:text-yellow-200"
                    onClick={() => setOpen(false)}
                  >
                    Our Policies
                  </Link>
                  <Link
                    to="/about/crossmark"
                    className="block hover:text-yellow-200"
                    onClick={() => setOpen(false)}
                  >
                    Crossmark Policy
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/journals"
              className="block hover:text-yellow-200 transition"
              onClick={() => setOpen(false)}
            >
              Our Journals
            </Link>
            <Link
              to="/contact"
              className="block hover:text-yellow-200 transition"
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
