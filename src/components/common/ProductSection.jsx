import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Star, Heart } from 'lucide-react';
import blue_pouch from '../../images/products/blue_pouch.png'
import green_pouch from '../../images/products/green_pouch.png'
import pink_bottel from '../../images/products/pink_bottel.png'
import pink_pouch from '../../images/products/pink_pouch.png'

const ProductCard = ({ name, color, gradient, delay, productUrl, description, rating, reviews, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const handleLearnMore = (e) => {
    e.stopPropagation();
    window.location.href = productUrl;
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className={`flex-shrink-0 w-80 mx-4 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${color} rounded-3xl p-6 shadow-xl transition-all duration-500 transform ${
        isHovered ? '-translate-y-4 shadow-2xl scale-105' : ''
      } cursor-pointer group relative overflow-hidden`}>
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl transition-all duration-700 ${
            isHovered ? 'scale-150 animate-pulse' : 'animate-pulse'
          }`}></div>
          <div className={`absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl transition-all duration-700 ${
            isHovered ? 'scale-150 animate-pulse' : 'animate-pulse'
          }`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl transition-all duration-700 ${
            isHovered ? 'scale-150 animate-pulse' : 'animate-pulse'
          }`} style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Animated gradient ring on hover */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-rotate-gradient"></div>
        </div>

        {/* Shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 transform transition-transform duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>

        {/* Floating sparkles on hover */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Sparkles className="absolute top-6 right-6 text-white/50 animate-float" size={18} />
          <Sparkles className="absolute bottom-12 left-8 text-white/50 animate-float" size={16} style={{ animationDelay: '0.3s' }} />
          <Sparkles className="absolute top-1/3 right-12 text-white/50 animate-float" size={14} style={{ animationDelay: '0.6s' }} />
          <Star className="absolute top-12 left-12 text-yellow-300/60 animate-float" size={16} style={{ animationDelay: '0.2s' }} />
          <Star className="absolute bottom-1/3 right-8 text-yellow-300/60 animate-float" size={14} style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Product Image Container */}
        <div className={`relative mb-4 transition-all duration-700 ${
          isHovered ? 'scale-110 -rotate-3' : ''
        }`}>
          {/* Background glow */}
          <div className={`absolute inset-0 ${gradient} rounded-2xl blur-2xl transition-all duration-500 ${
            isHovered ? 'opacity-80 scale-110' : 'opacity-50'
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
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="relative z-10 space-y-3">
          {/* Product Name */}
          <div className="text-center">
            <h3 className={`text-3xl font-bold text-white drop-shadow-lg transition-all duration-300 mb-2 ${
              isHovered ? 'scale-110' : ''
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
                  } ${isHovered ? 'scale-110' : ''}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">({reviews})</span>
          </div>

          {/* Learn More Button - Show on Hover */}
          <div className={`transition-all duration-500 transform ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
          }`}>
            <button
              onClick={handleLearnMore}
              className="w-full bg-white text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white flex items-center justify-center gap-2 group/btn"
            >
              <span className="transition-all duration-300">Learn More</span>
              <ArrowRight size={20} className="transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
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
      name: 'XYZ', 
      color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700', 
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-500',
      productUrl: '/products/xyz',
      description: 'Natural ingredients for daily freshness and rejuvenation',
      rating: 4.8,
      reviews: 234,
      image: blue_pouch
    },
    { 
      name: 'ABC', 
      color: 'bg-gradient-to-br from-teal-400 via-cyan-500 to-cyan-600', 
      gradient: 'bg-gradient-to-br from-teal-300 to-cyan-400',
      productUrl: '/products/abc',
      description: 'Premium formula for deep hydration and smooth texture',
      rating: 4.9,
      reviews: 189,
      image: green_pouch
    },
    { 
      name: 'Demo', 
      color: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600', 
      gradient: 'bg-gradient-to-br from-pink-300 to-pink-400',
      productUrl: '/products/demo',
      description: 'Gentle care with aromatic botanicals for sensitive skin',
      rating: 4.7,
      reviews: 312,
      image: pink_bottel
    },
    { 
      name: 'Fresh', 
      color: 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600', 
      gradient: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
      productUrl: '/products/fresh',
      description: 'Organic blend for ultimate nourishment and vitality',
      rating: 5.0,
      reviews: 456,
      image: pink_pouch
    },
    { 
      name: 'Pure', 
      color: 'bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700', 
      gradient: 'bg-gradient-to-br from-indigo-400 to-purple-500',
      productUrl: '/products/pure',
      description: 'Luxurious essence for radiant and healthy appearance',
      rating: 4.6,
      reviews: 198,
      image: blue_pouch
    },
    { 
      name: 'Natural', 
      color: 'bg-gradient-to-br from-green-500 via-teal-600 to-teal-700', 
      gradient: 'bg-gradient-to-br from-green-400 to-teal-500',
      productUrl: '/products/natural',
      description: 'Eco-friendly solution for sustainable beauty routine',
      rating: 4.8,
      reviews: 267,
      image: green_pouch
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
      const cardWidth = 336;
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
    <div className="min-h-screen  py-16 px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <Sparkles className="text-green-600 animate-bounce-slow" size={36} />
              <h1 className="text-6xl font-bold text-green-700">
                Our popular products
              </h1>
              <Sparkles className="text-green-600 animate-bounce-slow animation-delay-500" size={36} />
            </div>
          </div>
          <p className="text-gray-600 text-lg animate-fade-in animation-delay-300">Discover our bestselling items loved by thousands</p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          <div
            ref={scrollRef}
            className="overflow-hidden px-4 scroll-smooth"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex py-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Controls Container */}
        <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-600">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 text-gray-700 hover:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={28} className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
          </button>

          <div className="flex gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                className={`transition-all duration-500 rounded-full disabled:cursor-not-allowed ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 w-12 h-4 shadow-lg animate-pulse-slow'
                    : 'bg-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-emerald-400 w-4 h-4 hover:w-8 hover:scale-110'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 text-gray-700 hover:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
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