import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            ABOUT US
          </h3>
          <p className="mb-4 leading-relaxed text-sm">
            Journal of Case Reports is an international, peer-reviewed online
            journal published monthly (12 issues/year).
          </p>
          <h4 className="font-semibold mb-2">Address</h4>
          <p className="mb-2 flex items-start gap-2">
            <span role="img" aria-label="location pin">
              📍
            </span>
            hyderabad, Telangana, India - 500034
          </p>
          <p className="mb-2 flex items-center gap-2">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            (+91) 9390627367
          </p>
          <p className="flex items-center gap-2">
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            editor.journal@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button aria-label="RSS" className="hover:text-white transition">
              <i className="fas fa-rss"></i>
            </button>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Copyright Form",
              "Access Links to Free Article",
              "Orthopaedic Statistics",
              "Orthopaedic Research Protocols",
              "IORG Case Snippets",
              "Ortho Conferences – India",
              "Ortho Conferences International",
              "Contact Us",
            ].map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-white transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Open Access Policy */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            OPEN ACCESS POLICY
          </h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cc-by-nc-icon.svg/1200px-Cc-by-nc-icon.svg.png"
            alt="Creative Commons"
            className="w-20 mb-3"
          />
          <p className="text-sm">
            Journal of Case Reports is an open access journal, and all articles
            are available free immediately after publication.
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
            SUBSCRIBE TO JOCR
          </h3>
          <p className="mb-4 text-sm">
            Subscribe to get new TOC alerts directly in your inbox
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-xs mt-1 text-gray-400">Online users: 0</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Journal . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
