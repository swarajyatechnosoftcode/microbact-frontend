import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Handshake, 
  Award, 
  Target, 
  Users, 
  Briefcase, 
  Palette, 
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Zap,
  Heart,
  Shield,
  Rocket,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and continuously seek new ways to solve problems and improve our solutions.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Handshake,
      title: 'Integrity',
      description: 'Trust and transparency guide our relationships with customers, partners, and each other.',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: Award,
      title: 'Excellence',
      description: 'We set high standards and consistently deliver quality in everything we create and do.',
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  const teamMembers = [
    { id: 1, name: 'John Smith', position: 'CEO & Founder', icon: Briefcase },
    { id: 2, name: 'Sarah Johnson', position: 'CTO', icon: Zap },
    { id: 3, name: 'Mike Davis', position: 'Head of Design', icon: Palette },
    { id: 4, name: 'Emily Chen', position: 'Marketing Director', icon: TrendingUp }
  ];

  const stats = [
    { id: 1, number: '500+', label: 'Happy Clients', icon: Users, color: 'blue' },
    { id: 2, number: '1000+', label: 'Projects Completed', icon: Rocket, color: 'green' },
    { id: 3, number: '10+', label: 'Years Experience', icon: Award, color: 'blue' }
  ];

  const features = [
    { icon: CheckCircle2, text: 'Customer First Approach' },
    { icon: Shield, text: 'Secure & Reliable' },
    { icon: Heart, text: 'Passionate Team' },
    { icon: Zap, text: 'Fast Delivery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Animated Background Gradient Orbs 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden relative"*/}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-6 animate-fadeInDown">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <Target className="w-8 h-8 text-blue-600 animate-spin-slow" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 mb-6 animate-gradient bg-300% hover:scale-105 transition-transform duration-700 animate-fadeInDown">
            About Us
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
            We're passionate about creating innovative solutions that make a difference in people's lives through technology and dedication.
          </p>
          
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border border-gray-100 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-700 group relative overflow-hidden">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10 blur-xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              
              <h2 className="text-5xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">
                Empowering Through Innovation
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We strive to deliver exceptional products and services that empower our customers 
                  to achieve their goals. Through innovation, dedication, and a customer-first approach, 
                  we're building a better future.
                </p>
                <p>
                  Our commitment to excellence drives everything we do, from product development 
                  to customer support, ensuring we exceed expectations at every turn.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group/item">
                  <div className="p-2 bg-blue-500 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700">Customer First</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 group/item">
                  <div className="p-2 bg-green-500 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-700">Innovation Driven</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 rounded-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Target className="w-40 h-40 text-blue-500 animate-pulse-slow" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-20 rounded-full animate-ping-slow"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-700 border border-gray-100 cursor-pointer transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden ${
                    hoveredCard === value.id ? 'ring-4 ring-opacity-50' : ''
                  } ${
                    value.color === 'blue' ? 'hover:ring-blue-300' : 'hover:ring-green-300'
                  }`}>
                    {/* Animated Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                    
                    {/* Icon Container */}
                    <div className={`relative w-20 h-20 mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                      hoveredCard === value.id 
                        ? value.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                        : 'text-gray-800'
                    }`}>
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} transform origin-left transition-transform duration-700 ${
                        hoveredCard === value.id ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </div>
                    
                    {/* Learn More Link */}
                    <div className={`flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-500 ${
                      value.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    } opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2`}>
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-blue-600 via-green-600 to-blue-600 rounded-3xl shadow-2xl p-10 md:p-16 text-white mb-16 relative overflow-hidden">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-blue-100">The talented people behind our success</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div
                    key={member.id}
                    className="text-center group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mx-auto mb-6">
                      <div className="w-32 h-32 bg-white rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <IconComponent className="w-16 h-16 text-blue-600 group-hover:text-white transition-colors duration-700 relative z-10" strokeWidth={2} />
                      </div>
                      
                      {/* Orbital Ring Animation */}
                      <div className="absolute inset-0 -m-2">
                        <div className="w-full h-full border-2 border-white/30 rounded-2xl animate-spin-slow"></div>
                      </div>
                      <div className="absolute inset-0 -m-4">
                        <div className="w-full h-full border-2 border-white/20 rounded-2xl animate-spin-reverse"></div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-100 group-hover:text-white transition-colors duration-300 font-medium">
                      {member.position}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 text-center border border-gray-100 transform hover:-translate-y-4 hover:shadow-3xl transition-all duration-700 cursor-pointer relative overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    stat.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-green-500 to-emerald-500'
                  } opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mx-auto w-20 h-20 mb-6 bg-gradient-to-br ${
                    stat.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-green-500 to-emerald-500'
                  } rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      stat.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-green-500 to-emerald-500'
                    } rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>
                  </div>
                  
                  {/* Number */}
                  <div className={`text-6xl font-bold bg-gradient-to-r ${
                    stat.color === 'blue' ? 'from-blue-600 to-cyan-600' : 'from-green-600 to-emerald-600'
                  } bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <p className="text-gray-600 font-semibold text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  stat.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-green-500 to-emerald-500'
                } rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Location Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border border-gray-100 hover:shadow-3xl transition-all duration-700">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Visit us or get in touch!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Map */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9234567890123!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM37CsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Innovation Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-green-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-green-200">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Phone className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Mail className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    info@yourcompany.com<br />
                    support@yourcompany.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-green-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-green-200">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <Clock className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 via-green-600 to-blue-600 rounded-3xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and create something amazing together. Get in touch with us today and let's start building the future!
            </p>
            
            <button className="group relative bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white"></div>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                Contact Us Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 60px) scale(1.05); }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-300\% {
          background-size: 300%;
        }

        .shadow-3xl {
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default About;