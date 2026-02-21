import React, { useState, useEffect } from 'react';
import all_p from "../images/products/all_p.png";
import CertificateSection from '../components/common/CertificateSection';
import StatSection from '../components/common/StatSection';
import AboutUsSection from '../components/common/AboutUsSection';
import ProductSection from '../components/common/ProductSection';
import Testimonial from '../components/common/Testimonial';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-6">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Welcome to Microbact
              </span>
            </h1>
            <p
              className={`text-lg md:text-2xl text-cyan-400 font-semibold tracking-wide transition-all duration-1000 delay-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              A DRDO certified company
            </p>
          </div>

          <div className="relative px-4 md:px-8 pb-4">
            <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 rounded-t-full"></div>
            <div className="relative z-10">
              <div
                className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative group">
                  <img
                    src={all_p}
                    alt="Microbact Products"
                    className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform -skew-x-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <AboutUsSection/>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <StatSection/>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductSection/>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <CertificateSection/>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <Testimonial/>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}