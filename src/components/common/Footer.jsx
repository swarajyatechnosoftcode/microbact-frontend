import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="group">
            <h3 className="text-2xl text-white font-bold mb-4 hover:scale-110 inline-block">
              Microbact Bioculters
            </h3>
            <p className="text-white mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
              Building amazing digital experiences with passion and creativity.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-400 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 transform group">
                <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="relative w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-pink-500 hover:to-purple-500 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 transform group">
                <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="relative w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-500 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 transform group">
                <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="relative w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white hover:from-red-500 hover:to-red-400 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300 transform group">
                <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-lg text-white font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="relative text-white hover:text-white inline-flex items-center group/link overflow-hidden">
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 group-hover/link:w-full transition-all duration-500"></span>
                  <span className="relative px-3 py-2 group-hover/link:translate-x-2 transition-transform duration-300">Home</span>
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="relative text-white hover:text-white inline-flex items-center group/link overflow-hidden">
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 group-hover/link:w-full transition-all duration-500"></span>
                  <span className="relative px-3 py-2 group-hover/link:translate-x-2 transition-transform duration-300">About Us</span>
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="relative text-white hover:text-white inline-flex items-center group/link overflow-hidden">
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 group-hover/link:w-full transition-all duration-500"></span>
                  <span className="relative px-3 py-2 group-hover/link:translate-x-2 transition-transform duration-300">Services</span>
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="relative text-white hover:text-white inline-flex items-center group/link overflow-hidden">
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 group-hover/link:w-full transition-all duration-500"></span>
                  <span className="relative px-3 py-2 group-hover/link:translate-x-2 transition-transform duration-300">Portfolio</span>
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="relative text-white hover:text-white inline-flex items-center group/link overflow-hidden">
                  <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 group-hover/link:w-full transition-all duration-500"></span>
                  <span className="relative px-3 py-2 group-hover/link:translate-x-2 transition-transform duration-300">Contact</span>
                  <svg className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group">
            <h4 className="text-lg text-white font-bold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start group/item">
                <div className="relative w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:from-yellow-400 group-hover/item:to-pink-500 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 flex-shrink-0 shadow-lg group-hover/item:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                  <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white pt-1 group-hover/item:text-white transition-colors duration-300">123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center group/item">
                <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:from-pink-400 group-hover/item:to-purple-500 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 flex-shrink-0 shadow-lg group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-white hover:text-white hover:underline decoration-pink-500 decoration-2 underline-offset-4 transition-all duration-300">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center group/item">
                <div className="relative w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:from-yellow-400 group-hover/item:to-green-500 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 flex-shrink-0 shadow-lg group-hover/item:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+1234567890" className="text-white hover:text-white hover:underline decoration-green-500 decoration-2 underline-offset-4 transition-all duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-8 pt-8 border-t border-gradient-to-r from-transparent via-purple-500 to-transparent flex flex-col md:flex-row justify-between items-center" style={{borderImage: 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.5), transparent) 1'}}>
          <p className="text-gray-400 text-sm mb-4 md:mb-0 hover:text-white transition-colors duration-300">
            © {currentYear} Your Brand. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="relative px-4 py-2 text-gray-300 text-sm transition-all duration-300 group/policy overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/policy:opacity-20 transition-opacity duration-300 rounded-md"></span>
              <span className="relative group-hover/policy:text-white transition-colors duration-300">Privacy Policy</span>
            </a>
            <a href="#" className="relative px-4 py-2 text-gray-300 text-sm transition-all duration-300 group/policy overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover/policy:opacity-20 transition-opacity duration-300 rounded-md"></span>
              <span className="relative group-hover/policy:text-white transition-colors duration-300">Terms of Service</span>
            </a>
            <a href="#" className="relative px-4 py-2 text-gray-300 text-sm transition-all duration-300 group/policy overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/policy:opacity-20 transition-opacity duration-300 rounded-md"></span>
              <span className="relative group-hover/policy:text-white transition-colors duration-300">Cookie Policy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}