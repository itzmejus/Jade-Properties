import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from '../assets/Logo.png';
import { useLanguage, type Language } from '../context/LanguageContext';

const LANGUAGES: { code: Language; label: string; flag: string; nativeName: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ar', label: 'Arabic', flag: '🇦🇪', nativeName: 'العربية' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  { code: 'zh', label: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const currentLang = LANGUAGES.find(l => l.code === language)!;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    setIsScrolled(window.scrollY > 50);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const darkHeroPages = ['/'];
  const isLight = !darkHeroPages.includes(location.pathname) || isScrolled;

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/properties', label: t.nav.properties },
    { to: '/services', label: t.nav.services },
  ];

  const handleLangSelect = (code: Language) => { setLanguage(code); setLangOpen(false); };

  return (
    <div className="w-full fixed top-0 z-50">
      <nav className={`px-6 md:px-8 py-3 transition-all duration-300 ${isLight ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'}`}>

        {/* ── DESKTOP ── */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={Logo} alt="Jade Properties Logo" className="h-16 w-auto object-contain" />
            <span className={`text-xl font-bold uppercase transition-colors duration-300 ${isLight ? 'text-black' : 'text-white drop-shadow-lg'}`}>
              Jade Properties <span className="text-[#D4AF37]">&</span> Real Estate
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={`font-medium transition-colors duration-200 relative group text-sm whitespace-nowrap ${isLight ? 'text-black/70 hover:text-black' : 'text-white/90 hover:text-white drop-shadow'}`}>
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${isLight
                  ? 'border-gray-200 text-black/70 hover:border-[#D4AF37] hover:text-black bg-white hover:bg-[#FDFAF0]'
                  : 'border-white/20 text-white/90 hover:border-[#D4AF37] bg-white/10 hover:bg-white/20'}`}
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.nativeName}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 ${language === lang.code
                        ? 'bg-[#FDF8E7] text-[#B8960C] font-bold'
                        : 'text-black/70 hover:bg-gray-50 hover:text-black font-medium'}`}
                    >
                      <span className="text-lg leading-none">{lang.flag}</span>
                      <div className="text-left">
                        <p className="leading-tight">{lang.nativeName}</p>
                        <p className="text-xs text-gray-400 font-normal">{lang.label}</p>
                      </div>
                      {language === lang.code && <span className="ml-auto text-[#D4AF37] font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-[#D4AF37] hover:bg-[#B8960C] text-black px-5 py-2.5 font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AF37]/30 whitespace-nowrap">
              {t.nav.contact}
            </Link>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 transition-colors duration-200 ${isLight ? 'text-black hover:text-[#B8960C]' : 'text-white hover:text-[#D4AF37]'}`} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={Logo} alt="Jade Properties Logo" className="h-14 w-auto object-contain" />
          </Link>
          <div className="w-10" />
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-3 border-t border-gray-200 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="text-black/70 hover:text-[#B8960C] font-medium py-3 px-5 hover:bg-gray-50 transition-all duration-200 text-sm" onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              ))}

              {/* Mobile language picker */}
              <div className="px-5 pt-4 pb-2 border-t border-gray-100 mt-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Language / اللغة</p>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { handleLangSelect(lang.code); setIsMenuOpen(false); }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 border ${language === lang.code
                        ? 'bg-[#FDF8E7] border-[#D4AF37]/50 text-[#B8960C] font-bold'
                        : 'border-gray-200 text-black/60 hover:bg-gray-50 hover:border-gray-300'}`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                      {language === lang.code && <span className="ml-auto text-[#D4AF37] text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-5 pt-3 pb-1">
                <Link to="/contact" className="block bg-[#D4AF37] hover:bg-[#B8960C] text-black px-6 py-3 font-semibold text-sm rounded-lg text-center transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;