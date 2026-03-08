import React from 'react';
import { Award, Target, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutUsSection() {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Mission */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl shadow-lg">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We recognize the growing environmental crisis. Through dedicated efforts and with the nation's support, we are making significant strides towards a pollution-free India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl shadow-lg">
                <Leaf className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Microbact bio-culture technology serves a wide range of purposes, providing comprehensive solutions for liquid and solid waste pollution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - About */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-green-600" size={36} />
              <h3 className="text-2xl font-bold text-gray-800">Who We Are</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We specialize in developing bacterial consortiums, a biological solution for treating various types of pollution and contaminated areas. Our lab is well-recognized, holding certifications from DRDO and receiving recognition from NIT Warangal, Telangana.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our unwavering commitment is to achieve a 100% pollution-free India without disrupting ecological balance. Our focus on quality and quantity ensures effectiveness, while also empowering you to contribute to a cleaner environment.
            </p>
            
            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">DRDO Certified Laboratory</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Recognized by NIT Warangal</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">100% Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Comprehensive Waste Management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-2xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Product Catalogue</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            We offer comprehensive solutions for liquid and solid waste pollution. Our focus on quality and quantity ensures effectiveness, while also empowering you to contribute to a cleaner environment through our wide range of bio-culture products.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group"
          >
            <span>Read More</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
