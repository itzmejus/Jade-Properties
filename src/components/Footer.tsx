import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jade Properties
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect property in UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Connect With Us</h4>
            <div className="space-y-2 mb-4">
              <a href="tel:+971123456789" className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2" />
                +971 12 345 6789
              </a>
              <a href="mailto:info@jadeproperties.ae" className="flex items-center text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                info@jadeproperties.ae
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jade Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;