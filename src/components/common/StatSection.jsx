import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Briefcase, Award, Calendar, Sparkles } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, subtitle, badge, delay, color }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const numericValue = parseInt(value);
    if (isNaN(numericValue)) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? '-translate-y-3 shadow-2xl' : ''} cursor-pointer overflow-hidden group`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-teal-500/10 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/50 to-white/0 transform -translate-x-full transition-transform duration-700 ${
        isHovered ? 'translate-x-full' : ''
      }`}></div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 right-12 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
        </>
      )}

      {/* Badge */}
      {badge && (
        <div className={`absolute top-6 right-6 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
          isHovered ? 'scale-110 shadow-md' : ''
        }`}>
          {badge}
        </div>
      )}

      {/* Icon */}
      <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md transition-all duration-500 relative z-10 ${
        isHovered ? 'scale-110 rotate-6 shadow-lg' : ''
      }`}>
        <Icon className="text-white" size={24} />
      </div>

      {/* Value */}
      <div className="mb-3 relative z-10">
        <span className={`text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        }`}>
          {value.includes('%') || value.includes('+') 
            ? `${count}${value.replace(/[0-9]/g, '')}`
            : count
          }
        </span>
      </div>

      {/* Label */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10 transition-colors duration-300 group-hover:text-blue-700">{label}</h3>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm relative z-10">{subtitle}</p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 transition-all duration-500 ${
        isHovered ? 'h-2' : 'h-1'
      }`}></div>
    </div>
  );
};

const RatingCard = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      let current = 0;
      const target = 4.8;
      const timer = setInterval(() => {
        current += 0.1;
        if (current >= target) {
          setRating(target);
          clearInterval(timer);
        } else {
          setRating(parseFloat(current.toFixed(1)));
        }
      }, 50);
      return () => clearInterval(timer);
    }, delay);
  }, [delay]);

  return (
    <div
      className={`relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-10 shadow-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? '-translate-y-3 shadow-2xl' : ''} overflow-hidden h-full flex flex-col justify-between cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl transition-all duration-700 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl transition-all duration-700 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`} style={{ transitionDelay: '0.2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl transition-all duration-700 ${
          isHovered ? 'scale-150' : 'scale-100'
        }`} style={{ transitionDelay: '0.4s' }}></div>
      </div>

      {/* Floating sparkles on hover */}
      {isHovered && (
        <>
          <Sparkles className="absolute top-8 right-8 text-blue-400/40 animate-pulse" size={20} />
          <Sparkles className="absolute bottom-12 left-12 text-emerald-400/40 animate-pulse" size={16} style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/3 right-16 text-teal-400/40 animate-pulse" size={14} style={{ animationDelay: '0.3s' }} />
        </>
      )}

      {/* Decorative dots */}
      <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-150' : ''
      }`}></div>
      <div className={`absolute top-6 right-12 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-150' : ''
      }`} style={{ transitionDelay: '0.1s' }}></div>

      {/* Rating Circle */}
      <div className="flex justify-center mb-6 relative z-10">
        <div className="relative">
          <div className={`w-40 h-40 rounded-full border-4 border-white/20 flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'border-blue-400/40 scale-110 shadow-lg shadow-blue-500/20' : ''
          }`}>
            {/* Rotating gradient ring on hover */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 transition-opacity duration-500 ${
              isHovered ? 'opacity-20 animate-spin-slow' : 'opacity-0'
            }`} style={{ padding: '2px' }}></div>
            
            <div className="text-center relative z-10">
              <div className={`text-6xl font-bold text-white mb-1 transition-all duration-300 ${
                isHovered ? 'scale-110' : ''
              }`}>
                {rating.toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stars Text */}
      <div className="text-center mb-6 relative z-10">
        <p className="text-white/90 text-lg font-medium mb-2">/5 Stars</p>
        
        {/* Star Icons */}
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              className={`transition-all duration-500 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : i === Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-500 text-gray-500'
              } ${isHovered ? 'scale-125 rotate-12' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Customer Rating */}
      <div className="text-center relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Customer Rating</h3>
        <p className="text-white/70 text-sm">Based on 500+ reviews</p>
      </div>

      {/* View Testimonials Button */}
      <div className="mt-8 relative z-10">
        <button className={`w-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 hover:from-blue-500/30 hover:to-emerald-500/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border-2 flex items-center justify-center gap-2 ${
          isHovered ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' : 'border-white/30'
        }`}>
          View Testimonials
          <span className={`text-lg transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
        </button>
      </div>

      {/* Bottom gradient accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 transition-all duration-500 ${
        isHovered ? 'h-2' : 'h-1'
      }`}></div>
    </div>
  );
};

export default function StatSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '97%',
      label: 'Client Satisfaction',
      subtitle: 'Consistently exceeding expectations',
      badge: '+10%',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      delay: 200
    },
    {
      icon: Award,
      value: '50+',
      label: 'Happy Clients',
      subtitle: 'Building lasting relationships',
      badge: '+24',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      delay: 400
    },
    {
      icon: Briefcase,
      value: '10+',
      label: 'Industries Served',
      subtitle: 'Diverse sector expertise',
      badge: '+3',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      delay: 600
    },
    {
      icon: Calendar,
      value: '2+',
      label: 'Years Experience',
      subtitle: 'Growing stronger every year',
      badge: 'New',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      delay: 800
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Excellence</span>
            <br />
            <span className="text-gray-900">in Numbers</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the impact we've made across industries and relationships
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Left: Rating Card - Takes full height on large screens */}
          <div className="lg:row-span-2">
            <RatingCard delay={0} />
          </div>

          {/* Right: Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <button className="bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 hover:from-blue-600 hover:via-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 mx-auto group">
            Become Our Next Success Story
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}