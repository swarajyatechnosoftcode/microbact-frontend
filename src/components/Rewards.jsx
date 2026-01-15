import "./Rewards.css";
import cert1 from "../assets/images/certificat.png";
import cert2 from "../assets/images/certificat.png";
import cert3 from "../assets/images/certificat.png";
import cert4 from "../assets/images/certificat.png";
import cert5 from "../assets/images/certificat.png";
import cert6 from "../assets/images/certificat.png";

export default function Rewards() {
  const certificates = [
    { img: cert1, color: "green" },
    { img: cert2, color: "blue" },
    { img: cert3, color: "green" },
    { img: cert4, color: "blue" },
    { img: cert5, color: "green" },
    { img: cert6, color: "blue" },
  ];

  return (
    <section className="rewards">
      <h2>Rewards and Recognition</h2>

      <div className="rewards-grid">
        {certificates.map((item, index) => (
          <div
            key={index}
            className={`reward-card ${item.color}`}
          >
            <img src={item.img} alt="Certificate" />
          </div>
        ))}
      </div>
    </section>
  );
}
