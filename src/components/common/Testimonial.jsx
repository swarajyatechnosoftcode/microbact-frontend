import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Olivia Wilson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "MicroBact products have transformed our waste management process. Highly effective and eco-friendly solutions!",
    company: "Green Solutions Ltd",
  },
  {
    name: "Shawn Garcia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Outstanding biogas enhancement! Our production increased by 40% after using MicroBact Biogas Boom.",
    company: "BioEnergy Corp",
  },
  {
    name: "Pedro Fernandes",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The septic tank culture works wonders. No more odor issues and maintenance costs reduced significantly.",
    company: "Urban Housing Society",
  },
  {
    name: "Alex Brown",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Excellent composting solution! Our organic waste is now converted into rich compost within weeks.",
    company: "Organic Farms",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    text: "Professional service and effective products. MicroBact has been a reliable partner for our facility.",
    company: "Industrial Solutions",
  },
];

const Testimonial = () => {
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenter((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) =>
    (center + offset + testimonials.length) % testimonials.length;

  return (
    <section className="min-h-screen py-16 px-4 overflow-hidden relative bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-green-700 mb-3">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-xl">What our clients say about us</p>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center items-center gap-6 min-h-[420px] flex-col md:flex-row">
          {[-1, 0, 1].map((pos) => {
            const item = testimonials[getIndex(pos)];
            const isCenter = pos === 0;

            return (
              <div
                key={pos}
                className={`transition-all duration-700 ease-in-out ${
                  isCenter
                    ? "scale-105 opacity-100 z-10"
                    : "scale-90 opacity-50"
                }`}
              >
                <div className="relative bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl shadow-2xl p-8 w-[90%] md:w-[320px] text-center">
                  <Quote
                    size={50}
                    className="absolute top-4 right-4 text-white/30"
                  />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
                  />

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/90 mb-3 font-medium">
                    {item.company}
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 my-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < item.rating
                            ? "fill-yellow-300 text-yellow-300"
                            : "fill-white/30 text-white/30"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-white text-sm leading-relaxed mt-3">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCenter(index)}
              className={`transition-all duration-300 rounded-full ${
                index === center
                  ? "bg-green-600 w-10 h-3 shadow-lg"
                  : "bg-gray-300 w-3 h-3 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob { animation: blob 7s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Testimonial;
