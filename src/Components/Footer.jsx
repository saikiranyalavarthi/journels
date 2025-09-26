import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
            ABOUT US
          </h3>
          <p className="mb-4 text-sm leading-relaxed">
            International Journal of Clinical & Medical Case Reports publishes
            peer-reviewed case reports monthly. Our goal is to promote open
            access research worldwide.
          </p>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="flex items-start gap-2 mb-2">
            <MapPin className="w-4 h-4 text-yellow-400" />
            123 Medical St, Health City, Country - 123456
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-green-400" />
            +91 9390627367
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-red-400" />
            <a
              href="mailto:info@ijclinmedcasereports.com"
              className="hover:underline hover:decoration-red-500 hover:underline-offset-4 transition"
            >
              info@ijclinmedcasereports.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Editorial Board",
              "Submit Manuscript",
              "Pay Online",
              "Author Guidelines",
              "Peer Review Process",
              "Plagiarism Policy",
              "Registration Form",
              "Contact",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:underline hover:decoration-red-500 hover:underline-offset-4 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Open Access Policy */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
            OPEN ACCESS POLICY
          </h3>
          <p className="text-sm leading-relaxed">
            All articles are freely available immediately after publication,
            ensuring global knowledge sharing without subscription barriers.
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
            SUBSCRIBE
          </h3>
          <p className="mb-4 text-sm">
            Get our latest updates and case reports directly in your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="your.address@email.com"
              className="px-4 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} International Journal Reports. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
