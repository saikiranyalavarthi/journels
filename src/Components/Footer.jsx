import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Journals</h2>
          <p className="text-sm">
            Open Access Research Journals Publication is an international
            peer-reviewed platform for publishing original research articles
            across multiple disciplines worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/journals" className="hover:text-yellow-200">
                Our Journals
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/about/policies" className="hover:text-yellow-200">
                Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={20} className="hover:text-yellow-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={20} className="hover:text-yellow-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={20} className="hover:text-yellow-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={20} className="hover:text-yellow-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/30 mt-6 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Open Access Research Journals
        Publication. All rights reserved.
      </div>
    </footer>
  );
}
