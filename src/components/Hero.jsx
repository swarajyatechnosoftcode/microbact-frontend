import "./Hero.css";
import productsImg from "../assets/images/hero.png"; // product image

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Welcome to <span>Microbact</span>
      </h1>

      <h3>A DRDO certified company</h3>

      <div className="hero-products">
        <img src={productsImg} alt="Microbact Products" />
      </div>
    </section>
  );
}
