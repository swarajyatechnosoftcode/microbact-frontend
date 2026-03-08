import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
      icon: Target,
      title: 'Our Goals',
      description: 'Protecting environment is our responsibility to survive better. Providing balanced environment for all living things by offering eco-friendly and naturally occurring bacterial solutions for sustainable environment.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'Our vision is to continuously do research for disposing of waste without disturbing biodiversity and maintaining natural balance.',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: Award,
      title: 'Quality Commitment',
      description: 'DRDO certified and recognized by NIT Warangal, Telangana. Our focus on quality and quantity ensures effectiveness in pollution treatment.',
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  const team = [
    { id: 1, name: 'Bharat Chavan', designation: 'CEO & Founder', linkedin: '#', twitter: '#', email: 'bharat@microbact.com' },
    { id: 2, name: 'Priya Sharma', designation: 'Head of Research', linkedin: '#', twitter: '#', email: 'priya@microbact.com' },
    { id: 3, name: 'Rajesh Kumar', designation: 'Operations Manager', linkedin: '#', twitter: '#', email: 'rajesh@microbact.com' },
    { id: 4, name: 'Anita Desai', designation: 'Quality Control Lead', linkedin: '#', twitter: '#', email: 'anita@microbact.com' }
  ];

  const stats = [
    { id: 1, number: '100%', label: 'Pollution-Free Goal', icon: Target, color: 'blue' },
    { id: 2, number: 'DRDO', label: 'Certified Lab', icon: Award, color: 'green' },
    { id: 3, number: 'NIT', label: 'Warangal Recognized', icon: Shield, color: 'blue' }
  ];

  const features = [
    { icon: Shield, text: 'DRDO Certified' },
    { icon: Award, text: 'NIT Warangal Recognized' },
    { icon: Heart, text: 'Eco-Friendly Solutions' },
    { icon: Zap, text: 'Bio-Culture Technology' }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-24">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 mb-6 animate-gradient bg-300% hover:scale-105 transition-transform duration-700 animate-fadeInDown">
            About Us
          </h1>
          
          <p className="text-lg md:text-xl text-green-700 max-w-4xl mx-auto leading-relaxed animate-fadeInUp break-words px-4">
            Microbact Bio Cultures Private Limited is a leading manufacturer and supplier specializing in microbial cultures and bio cultures. We are proud to be the authorized TOT holder for BIO Digester and Anaerobic bacteria generation plants from DRDO India. Additionally, we are accredited by NIT Warangal and IIT Roorkee, further cementing our commitment to technological excellence.
          </p>
          
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border-2 border-green-200 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Header Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full text-base font-bold shadow-xl">
                <Target className="w-5 h-5" />
                <span>Our Mission</span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                100% Pollution-Free India
              </span>
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Established in 2023, our company serves Pan India, delivering high-quality products designed for a wide range of applications, including septic tanks, composting, odor control, and effluent treatment. We are dedicated to providing sustainable solutions through our flagship products like Microbact Septic Tank Bio Culture, G9 Odo Odor Culture, and ETP Bio Culture.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Led by our visionary CEO, Mr. Bharat Chavan, Microbact Bio Cultures operates with a team of skilled professionals, focusing on innovation and quality. With an annual turnover of approximately Rs. 0.5 to 2.5 Crore, we are committed to environmental sustainability and enhancing the efficiency of industrial operations through cutting-edge microbial solutions.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">Eco-Friendly</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">Bio-Technology</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">DRDO Certified</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Goals & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to environmental protection and sustainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-700 border border-gray-100 cursor-pointer transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden h-full flex flex-col ${
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
                    
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
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
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 rounded-3xl shadow-2xl p-10 md:p-16 text-white mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-green-100">Dedicated professionals committed to environmental excellence</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.id}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <Users className="w-16 h-16 text-green-600 group-hover:text-white transition-colors duration-700 relative z-10" strokeWidth={2} />
                    </div>
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-100 group-hover:text-white transition-colors duration-300 font-medium mb-4">
                    {member.designation}
                  </p>
                  
                  <div className="flex justify-center gap-3">
                    <a href={member.linkedin} className="w-8 h-8 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <span className="text-white hover:text-green-600 text-sm font-bold">in</span>
                    </a>
                    <a href={member.twitter} className="w-8 h-8 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <span className="text-white hover:text-green-600 text-sm font-bold">𝕏</span>
                    </a>
                    <a href={`mailto:${member.email}`} className="w-8 h-8 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Mail className="w-4 h-4 text-white group-hover:text-green-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Map */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9234567890123!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM37CsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-blue-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg mb-3">
                  <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base break-words">
                    Ground Floor, Shop No 1, Gat No 12/1/2, Kasarsai Road, Sumit Mens Parlour, Nere<br />
                    Pune, Maharashtra - 410506<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-green-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-green-200">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg mb-3">
                  <Phone className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base break-words">
                    9518735229 / 9665755442<br />
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-blue-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-blue-200">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg mb-3">
                  <Mail className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base break-words">
                    Info.microbactbiocultures@gmail.com<br />
                    support@microbactbiocultures.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-green-50 transition-all duration-500 group cursor-pointer border border-transparent hover:border-green-200">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg mb-3">
                  <Clock className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base break-words">
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
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 rounded-3xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and create something amazing together. Get in touch with us today and let's start building the future!
            </p>
            
            <button 
              onClick={() => navigate('/contact')}
              className="group relative bg-white text-green-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white"></div>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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