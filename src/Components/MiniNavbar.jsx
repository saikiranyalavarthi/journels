import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function MiniNavbar() {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap justify-between items-center text-sm">
        {/* Email Section */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Mail className="w-4 h-4 text-blue-500" />
          <a
            href="mailto:example@email.com"
            className="hover:text-blue-500 text-amber-600 font-medium transition-colors"
          >
            example@email.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="#"
            className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-sky-500 text-white hover:scale-110 transition-transform"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white hover:scale-110 transition-transform"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-blue-700 text-white hover:scale-110 transition-transform"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-red-600 text-white hover:scale-110 transition-transform"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
