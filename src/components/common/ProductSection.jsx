import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import biogasBoom from '../../images/products/biogas_boom.png';
import biologicalSolution from '../../images/products/boiological_solution.png';
import septicTank from '../../images/products/Septic_tank.png';
import dwtc from '../../images/products/dwtc.png';
import easycompost from '../../images/products/easycompost.png';
import fog_sticker from '../../images/products/fog_sticker.jpg';
import back_side from '../../images/products/back_side.png';


const ProductCard = ({ name, color, gradient, delay, productUrl, description, rating, reviews, image }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const handleLearnMore = (e) => {
    e.stopPropagation();
    // Navigate to services page with product name as state
    navigate('/services', { state: { productName: name } });
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className={`flex-shrink-0 w-[90vw] sm:w-80 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${color} rounded-3xl p-6 shadow-xl transition-all duration-500 transform ${
        isHovered ? 'sm:-translate-y-4 shadow-2xl sm:scale-105' : ''
      } cursor-pointer group relative overflow-hidden`}>


        {/* Product Image Container */}
        <div className={`relative mb-4 transition-all duration-700 ${
          isHovered ? 'sm:scale-110 sm:-rotate-3' : ''
        }`}>
          {/* Background glow */}
          <div className={`absolute inset-0 ${gradient} rounded-2xl blur-2xl transition-all duration-500 ${
            isHovered ? 'opacity-80 sm:scale-110' : 'opacity-50'
          }`}></div>
          
          {/* Product Image */}
          <div className={`relative bg-white rounded-2xl p-6 border-2 flex items-center justify-center h-56 shadow-lg transition-all duration-500 ${
            isHovered ? 'border-white/80 shadow-2xl' : 'border-white/50'
          }`}>
            <div className="text-center w-full h-full flex items-center justify-center">
              {/* Actual Product Image */}
              <img 
                src={image} 
                alt={name}
                className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                  isHovered ? 'sm:scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="relative z-10 space-y-3">
          {/* Product Name */}
          <div className="text-center">
            <h3 className={`text-2xl font-bold text-white drop-shadow-lg transition-all duration-300 mb-2 ${
              isHovered ? 'sm:scale-110' : ''
            }`}>{name}</h3>
            
            {/* Product Description */}
            <p className="text-white/90 text-sm leading-relaxed px-2">
              {description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`transition-all duration-300 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-300 text-yellow-300'
                      : 'fill-white/30 text-white/30'
                  } ${isHovered ? 'sm:scale-110' : ''}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">({reviews})</span>
          </div>

          {/* Learn More Button */}
          <div>
            <button
              onClick={handleLearnMore}
              className="w-full bg-white text-gray-800 font-semibold py-2.5 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white flex items-center justify-center gap-2 group/btn text-sm"
            >
              <span>Learn More</span>
              <ArrowRight size={16} className="transition-all duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Corner decorations */}
        <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg transition-all duration-300 ${
          isHovered ? 'border-white/70 scale-110' : ''
        }`}></div>
        <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg transition-all duration-300 ${
          isHovered ? 'border-white/70 scale-110' : ''
        }`}></div>

        {/* Bottom gradient bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 via-white/60 to-white/30 transition-all duration-500 ${
          isHovered ? 'h-2' : ''
        }`}></div>
      </div>
    </div>
  );
};

export default function ProductSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef(null);

  const products = [
    {
      name: 'MicroBact Biogas Boom',
      color: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
      gradient: 'bg-gradient-to-br from-cyan-400 to-indigo-600',
      productUrl: '/products/microbact-biogas-boom',
      description: 'Biogas enhancer culture for hydrolysis, acidogenesis & acetogenesis',
      rating: 4.8,
      reviews: 120,
      image: biogasBoom
    },
    {
      name: 'MicroBact RE NIT WARANGAL',
      color: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
      gradient: 'bg-gradient-to-br from-cyan-400 to-indigo-600',
      productUrl: '/products/microbact-re-nit-warangal',
      description: 'NIT Warangal tested and approved product for nutrient removal',
      rating: 4.9,
      reviews: 100,
      image: biologicalSolution
    },
    {
      name: 'MicroBact Septic Tank',
      color: 'bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400',
      gradient: 'bg-gradient-to-br from-yellow-600 to-yellow-400',
      productUrl: '/products/microbact-septic-tank',
      description: 'Bio culture for septic tank organic waste degradation',
      rating: 4.7,
      reviews: 150,
      image: septicTank
    },
    {
      name: 'MicroBact DWTC',
      color: 'bg-gradient-to-br from-blue-500 via-navy-600 to-teal-600',
      gradient: 'bg-gradient-to-br from-blue-500 to-teal-600',
      productUrl: '/products/microbact-dwtc',
      description: 'Natural biocatalyst for dissolving fat, oil, and grease',
      rating: 4.9,
      reviews: 180,
      image: dwtc
    },
    {
      name: 'MicroBact Easy Compost',
      color: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-amber-400 to-red-500',
      productUrl: '/products/microbact-easy-compost',
      description: 'Powerful bio-culture for composting organic waste',
      rating: 4.8,
      reviews: 140,
      image: easycompost
    },
    {
      name: 'MicroBact FOG',
      color: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-amber-400 to-red-500',
      productUrl: '/products/microbact-fog',
      description: 'Specialized formula for dissolving fat, oil, and grease',
      rating: 4.6,
      reviews: 160,
      image: fog_sticker
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, currentIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      setIsTransitioning(true);
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? window.innerWidth * 0.9 : 336;
      const scrollLeft = currentIndex * cardWidth;
      
      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <div className="min-h-screen bg-white py-4 overflow-hidden relative">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-700">
                Our popular products
              </h1>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8 sm:mb-12">
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar snap-x snap-mandatory"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={() => setIsAutoPlaying(false)}
          >
            <div className="flex gap-4 py-8 px-4">
              {products.map((product, index) => (
                <div key={index} className="snap-center">
                  <ProductCard {...product} delay={index * 100} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in animation-delay-600">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 text-gray-700 hover:text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
          </button>

          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                className={`transition-all duration-500 rounded-full disabled:cursor-not-allowed ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-4 shadow-lg animate-pulse-slow'
                    : 'bg-gray-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 w-4 h-4 hover:w-8 hover:scale-110'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 text-gray-700 hover:text-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6 animate-fade-in animation-delay-800">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-500 animate-ping' : 'bg-gray-400'
            }`}></div>
            <p className="text-sm text-gray-700 font-medium">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Hover to pause
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes rotate-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blob { animation: blob 7s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-rotate-gradient { animation: rotate-gradient 3s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}