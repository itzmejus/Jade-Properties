import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Jade Properties Logo"
                className="h-14 w-auto object-contain flex-shrink-0"
              />
              <h3 className="text-base font-bold text-white uppercase">
                Jade Properties <span className="text-[#D4AF37]">&</span> Real Estate
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property in UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/properties', label: 'Properties' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Connect With Us</h4>
            <div className="space-y-2.5 mb-5">
              <a href="tel:+971508872028" className="flex items-center text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                +971 50 887 2028
              </a>
              <a href="mailto:info@jadeprops.com" className="flex items-center text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                info@jadeprops.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-900 hover:bg-[#D4AF37] border border-gray-800 hover:border-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-200 group">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Jade Properties & Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;