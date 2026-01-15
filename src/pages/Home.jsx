import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Rewards from "../components/Rewards";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import "../components/Main.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Rewards />
      <Testimonial />
      <Footer />
    </>
  );
}
