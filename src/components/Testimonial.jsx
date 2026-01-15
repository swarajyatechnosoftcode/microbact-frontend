import React, { useEffect, useState } from "react";
import "../components/Testimonial.css";

const testimonials = [
  {
    name: "Olivia Wilson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Shawn Garcia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Pedro Fernandes",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Alex Brown",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Testimonial = () => {
  const [center, setCenter] = useState(0);

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCenter((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset) =>
    (center + offset + testimonials.length) % testimonials.length;

  return (
    <section className="testimonial-section">
      <h1>Client Testimonials</h1>
      <p className="subtitle">What our clients say</p>

      <div className="carousel">
        {[ -1, 0, 1 ].map((pos) => {
          const item = testimonials[getIndex(pos)];
          return (
            <div
              key={pos}
              className={`testimonial-card ${
                pos === 0 ? "active" : "inactive"
              }`}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>

              <div className="stars">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
