import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('✨ Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>
      {/* Header Section with Gradient */}
      <div className="relative pt-16 pb-24 overflow-hidden ">
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block animate-bounce-slow mb-4">
            <Sparkles className="text-yellow-300 mx-auto" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 animate-fade-in-down">
            Let's <span className="text-green-600">Connect</span>
          </h1>
          <p className="text-xl text-blue-500 animate-fade-in-up max-w-2xl mx-auto">
            Have a question or want to work together? We're here to help bring your ideas to life!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 pb-16">
        {/* Contact Info Cards with Hover Effects */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567', subinfo: 'Mon-Fri 9am-6pm', gradient: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', delay: '0s' },
            { icon: Mail, title: 'Email Us', info: 'hello@company.com', subinfo: 'We reply within 24hrs', gradient: 'from-green-500 to-green-600', bgColor: 'bg-green-50', delay: '0.1s' },
            { icon: MapPin, title: 'Visit Us', info: '123 Business Street', subinfo: 'New York, NY 10001', gradient: 'from-blue-500 to-green-500', bgColor: 'bg-gradient-to-br from-blue-50 to-green-50', delay: '0.2s' }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`group relative ${item.bgColor} rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up`}
              style={{ animationDelay: item.delay }}
            >
              <div className={`bg-gradient-to-br ${item.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base mb-1">{item.info}</p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Clock size={12} />
                {item.subinfo}
              </p>
            </div>
          ))}
        </div>

        {/* Compact Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500" />
            
            <div className="relative p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                  Send Us a <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you ASAP</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                        {field === 'name' ? 'Your Name' : 'Your Email'}
                      </label>
                      <div className="relative">
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field)}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300"
                          placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                        />
                        {focusedField === field && (
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-green-500/20 -z-10 blur-xl" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                    {focusedField === 'subject' && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 -z-10 blur-xl" />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-green-500/20 -z-10 blur-xl" />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-3.5 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                        <CheckCircle size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span className="font-medium">Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span className="font-medium">Quick Response</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Contact;