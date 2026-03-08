import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import theme from "../../theme/colors";
import logo from "../../assets/logos/logo_Navigation.jpg";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 40);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
      style={{
        top: isVisible ? 0 : '-100px',
        ...(isScrolled ? { background: theme.gradient } : {})
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Microbact Logo" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-semibold transition-all"
                  style={{
                    color: isActive 
                      ? (isScrolled ? 'white' : theme.primary)
                      : (isScrolled ? 'rgba(255,255,255,0.9)' : theme.text)
                  }}
                  onMouseEnter={(e) => e.target.style.color = isScrolled ? 'white' : theme.secondary}
                  onMouseLeave={(e) => e.target.style.color = isActive 
                    ? (isScrolled ? 'white' : theme.primary)
                    : (isScrolled ? 'rgba(255,255,255,0.9)' : theme.text)
                  }
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: theme.primaryLight }}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden rounded-2xl p-4 mb-4 shadow-xl"
            style={{ background: theme.gradient }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                    isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
