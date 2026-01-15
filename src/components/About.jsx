import aboutImg from "../assets/images/about.jpg";

export default function About() {
  return (
    <section style={s.section}>
      <div style={s.container}>
        {/* Image */}
        <div style={s.imageBox}>
          <img src={aboutImg} alt="About Microbact" style={s.image} />
        </div>

        {/* Content */}
        <div style={s.content}>
          <h2 style={s.title}>About Microbact Bio Cultures</h2>

          <p style={s.text}>
            Microbact Bio Cultures Pvt. Ltd. is a research-driven organization
            specializing in the development of high-quality microbial solutions
            for agriculture, environmental management, and sustainable practices.
          </p>

          <p style={s.text}>
            Backed by microbiological science and continuous innovation, our
            solutions enhance soil health, improve crop productivity, and
            support eco-friendly farming systems.
          </p>

          <p style={s.text}>
            Our focus on quality, consistency, and field performance enables us
            to deliver reliable results across diverse applications.
          </p>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: "40px 20px",
    background: "linear-gradient(90deg, #acfccd, #d3f5e1)",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  imageBox: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "6px",
  },
  content: {},
  title: {
    fontSize: "32px",
    color: "#2E7D32",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "15px",
  },
};
