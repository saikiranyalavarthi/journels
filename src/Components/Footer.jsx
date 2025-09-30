import { Link } from "react-router-dom";
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
    <footer className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* About + Contact */}
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <p className="mb-2">
            International Journal of Clinical & Medical Case Reports publishes
            peer-reviewed case reports monthly.
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-yellow-400" />
            123 Medical St, Health City, Country
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-400" />
            +91 9390627367
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-red-400" />
            <a
              href="mailto:info@ijclinmedcasereports.com"
              className="hover:underline"
            >
              info@ijclinmedcasereports.com
            </a>
          </p>

          <div className="flex space-x-2 mt-2">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-sky-500"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-2">USEFUL LINKS</h3>
          <ul className="space-y-1">
            {[
              { name: "Editorial Board", path: "/editorial-board" },
              { name: "Submit Manuscript", path: "/submit-manuscript" },
              { name: "Pay Online", path: "/pay-online" },
              { name: "Author Guidelines", path: "/author-guidelines" },
              { name: "Peer Review Process", path: "/peer-review" },
              { name: "Plagiarism Policy", path: "/plagiarism-policy" },
              { name: "Registration Form", path: "/registration" },
              { name: "Contact", path: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Open Access */}
        <div>
          <h3 className="font-bold mb-2">OPEN ACCESS</h3>
          <p>
            All articles are freely available immediately after publication,
            ensuring global access.
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold mb-2">SUBSCRIBE</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="px-3 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-400 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-600 pt-2 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} International Journal Reports. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
