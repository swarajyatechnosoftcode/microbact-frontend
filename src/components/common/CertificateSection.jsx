import React, { useState } from 'react';
import { Award, Calendar, Users, Trophy, Star, Sparkles } from 'lucide-react';

const CertificateCard = ({ title, issuer, date, description, icon: Icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-72 perspective-1000"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
          isHovered ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of Card */}
        <div
          className={`absolute inset-0 ${color} rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl backface-hidden overflow-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping`}></div>
            <div className={`absolute top-20 right-16 w-1 h-1 bg-white/40 rounded-full animate-pulse`}></div>
            <div className={`absolute bottom-16 left-20 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`absolute top-32 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse`} style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Shine effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 transform -translate-x-full transition-transform duration-1000 ${
            isHovered ? 'translate-x-full' : ''
          }`}></div>

          <div className={`relative bg-white/20 p-5 rounded-full mb-4 backdrop-blur-sm border-2 border-white/30 transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-12' : 'scale-100'
          }`}>
            <Icon size={48} className="drop-shadow-lg" />
          </div>
          
          <h3 className="relative text-2xl font-bold text-center mb-2 drop-shadow-lg">{title}</h3>
          <p className="relative text-sm opacity-90 font-medium">{issuer}</p>
          
          <div className="relative mt-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`fill-yellow-300 text-yellow-300 transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/40 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg"></div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-2xl backface-hidden overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse"></div>
          
          {/* Floating sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Sparkles className="absolute top-6 right-6 text-emerald-400/30 animate-pulse" size={20} />
            <Sparkles className="absolute bottom-8 left-8 text-blue-400/30 animate-pulse" size={16} style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute top-1/2 right-12 text-teal-400/30 animate-pulse" size={14} style={{ animationDelay: '0.3s' }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-2 rounded-lg mr-3">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          </div>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center text-emerald-400 text-sm bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
              <Users size={16} className="mr-2" />
              <span className="font-medium">{issuer}</span>
            </div>
            <div className="flex items-center text-blue-400 text-sm bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20">
              <Calendar size={16} className="mr-2" />
              <span className="font-medium">{date}</span>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

export default function CertificateSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificates = [
    {
      title: "Excellence in Innovation",
      issuer: "Tech Leaders Association",
      date: "December 2024",
      description: "Awarded for outstanding contributions to innovative solutions and cutting-edge technology implementation that transformed business processes.",
      icon: Trophy,
      color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
    },
    {
      title: "Best Developer Award",
      issuer: "Global Dev Conference",
      date: "October 2024",
      description: "Recognition for exceptional coding skills, problem-solving abilities, and contribution to open-source community development projects.",
      icon: Award,
      color: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700"
    },
    {
      title: "Leadership Excellence",
      issuer: "Professional Institute",
      date: "August 2024",
      description: "Honored for demonstrating exceptional leadership qualities, mentoring team members, and driving successful project outcomes.",
      icon: Users,
      color: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-700"
    },
    {
      title: "Outstanding Achievement",
      issuer: "Industry Awards Committee",
      date: "June 2024",
      description: "Acknowledged for remarkable achievements in delivering high-quality solutions and exceeding performance expectations consistently.",
      icon: Trophy,
      color: "bg-gradient-to-br from-blue-600 via-teal-600 to-teal-700"
    },
    {
      title: "Community Champion",
      issuer: "Developer Community Hub",
      date: "April 2024",
      description: "Celebrated for active participation in community building, knowledge sharing, and helping fellow developers grow their skills.",
      icon: Award,
      color: "bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600"
    },
    {
      title: "Innovation Pioneer",
      issuer: "Tech Innovation Forum",
      date: "February 2024",
      description: "Recognized for pioneering new approaches to complex challenges and implementing innovative solutions that set industry standards.",
      icon: Sparkles,
      color: "bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-700"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 rounded-full mb-6 shadow-xl animate-bounce-slow">
            <Award className="text-white" size={40} />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 animate-gradient">
            Rewards & Recognition
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Celebrating achievements and milestones. Hover over each certificate to reveal the story behind the recognition.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CertificateCard {...cert} index={index} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-emerald-500 animate-pulse" />
            Hover over certificates to flip and view detailed information
            <Sparkles size={16} className="text-blue-500 animate-pulse" />
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}