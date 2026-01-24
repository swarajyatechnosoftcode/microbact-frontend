import React, { useState, useEffect } from 'react';
import all_p from "../images/products/all_p.png";
import CertificateSection from '../components/common/CertificateSection';
import StatSection from '../components/common/StatSection';
import ProductSection from '../components/common/ProductSection';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="max-w-6xl w-full">
        {/* Animated Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-gradient">
              Welcome to Microbact
            </span>
          </h1>
          <p 
            className={`text-lg md:text-2xl text-blue-500 font-semibold tracking-wide transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A DRDO certified company
          </p>
        </div>

        {/* Products Section */}
        <div className="relative px-4 md:px-8 pb-8">
          {/* Curved Background Behind Image */}
          <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 rounded-t-full"></div>
          
          {/* Products Image Container */}
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
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 transform -skew-x-12"></div>
              </div>
            </div>
          </div>
        </div>
        <CertificateSection/>
        <StatSection/>
        <ProductSection/>
      </div>

      <style jsx>{`
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