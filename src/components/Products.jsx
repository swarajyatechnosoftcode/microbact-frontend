import { useEffect, useRef, useState } from "react";
import "./products.css";

import p1 from "../assets/images/pro1.jfif";
import p2 from "../assets/images/pro2.jfif";
import p3 from "../assets/images/pro3.jfif";
import p4 from "../assets/images/pro4.jfif";

const products = [
  { name: "XYZ", img: p1, bg: "#1f6fa3" },
  { name: "ABC", img: p2, bg: "#4aa6b5" },
  { name: "Demo", img: p3, bg: "#e1a1c4" },
  { name: "Test", img: p4, bg: "#9ac56b" },
];

export default function Products() {
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);

  // Clone slides for infinite loop
  const slides = [
    products[products.length - 1],
    ...products,
    products[0],
  ];

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(1);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(products.length);
      }, 600);
    }
  }, [index, slides.length, products.length]);

  // Restore transition
  useEffect(() => {
    requestAnimationFrame(() => {
      trackRef.current.style.transition = "transform 0.6s ease";
    });
  }, [index]);

  return (
    <section className="products">
      <h2>Our popular products</h2>

      <div className="slider">
        <button
          className="arrow left"
          onClick={() => setIndex((i) => i - 1)}
        >
          ❮
        </button>

        <div className="slider-window">
          <div
            className="slider-track"
            ref={trackRef}
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {slides.map((item, i) => (
              <div className="product-card" key={i}>
                <div
                  className="product-box"
                  style={{ background: item.bg }}
                >
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={() => setIndex((i) => i + 1)}
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {products.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i + 1 ? "active" : ""}`}
            onClick={() => setIndex(i + 1)}
          ></span>
        ))}
      </div>

      <button className="all-products-btn">All Products</button>
    </section>
  );
}
