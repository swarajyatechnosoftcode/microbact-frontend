import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Products', href: '/products', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-blue-600/95 backdrop-blur-md shadow-2xl shadow-blue-900/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a
            href="/"
            className="relative group flex items-center gap-2 sm:gap-3"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isScrolled 
                ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50' 
                : 'bg-gradient-to-br from-green-300 to-blue-400 shadow-xl shadow-green-400/30'
            }`}>
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-lg transform rotate-45"></div>
            </div>
            <span 
              className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-white' : 'text-white drop-shadow-lg'
              }`}
              style={{ fontFamily: '"Outfit", sans-serif' }}
            >
              Microbact
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    className={`relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-all duration-300 group flex items-center gap-1.5 ${
                      isScrolled
                        ? 'text-white/90 hover:text-white'
                        : 'text-white/95 hover:text-white'
                    }`}
                    style={{ 
                      fontFamily: '"DM Sans", sans-serif',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-green-400' : 'bg-green-300'
                    }`}></span>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-all duration-300 group ${
                      isScrolled
                        ? 'text-white/90 hover:text-white'
                        : 'text-white/95 hover:text-white'
                    }`}
                    style={{ 
                      fontFamily: '"DM Sans", sans-serif',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-green-400' : 'bg-green-300'
                    }`}></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`pt-2 pb-4 space-y-1 rounded-2xl ${
            isScrolled 
              ? 'bg-blue-700/50 backdrop-blur-sm' 
              : 'bg-blue-900/40 backdrop-blur-md'
          }`}>
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 font-medium text-sm sm:text-base"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mx-3 mt-1 mb-2 bg-blue-600 rounded-xl p-2">
                        {link.dropdownItems?.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="text-white font-semibold mb-1">{item.name}</div>
                            <div className="text-blue-200 text-xs">{item.description}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl mx-2 font-medium text-sm sm:text-base"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated Border */}
      <div className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-700 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=DM+Sans:wght@500;600;700&display=swap');
      `}</style>
    </header>
  );
}