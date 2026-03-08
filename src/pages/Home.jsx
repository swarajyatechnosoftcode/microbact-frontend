import React, { useState, useEffect } from "react";
import all_p from "../images/products/all_p.png";
import leftImg from "../assets/logos/microbactlogo.jpg";
import rightImg from "../assets/logos/drdologo.png";
import CertificateSection from "../components/common/CertificateSection";
import StatSection from "../components/common/StatSection";
import AboutUsSection from "../components/common/AboutUsSection";
import ProductSection from "../components/common/ProductSection";
import Testimonial from "../components/common/Testimonial";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
        style={{
          background:
            "linear-gradient(to bottom, #020c1b 0%, #0a1f3d 20%, #0c3268 40%, #0e5ca8 65%, #2a8fd4 85%, #56b8f0 100%)",
        }}
      >
        {" "}
        {/* Top Images */}
        <img
          src={leftImg}
          alt="Product"
          className="absolute left-4 md:left-8 top-24 w-20 md:w-28 lg:w-36 opacity-90"
        />
        <img
          src={rightImg}
          alt="Product"
          className="absolute right-4 md:right-8 top-24 w-20 md:w-28 lg:w-36 opacity-90"
        />
        <div className="max-w-7xl w-full">
          <div className="text-center mb-6">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <span className="text-white">Welcome to Microbact</span>
            </h1>
            <p
              className={`text-lg md:text-2xl text-white font-semibold tracking-wide transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              A DRDO certified company
            </p>
          </div>

          <div className="relative px-4 md:px-8 pb-4">
            <div
              className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative group">
                <img
                  src={all_p}
                  alt="Microbact Products"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <AboutUsSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <StatSection />
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <ProductSection />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <CertificateSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <Testimonial />
        </div>
      </section>
    </div>
  );
}
