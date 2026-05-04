import { FaDollarSign, FaCheck } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import "./Services.css";
import "../About/About.css";

function Services() {
  const services = [
    {
      icon: <FiLayers />,
      title: "Awesome Support",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content platform.",
      color: "icon-orange",
    },
    {
      icon: <FaDollarSign />,
      title: "Dynamic Growth",
      desc: "Credibly brand standards compliant growth strategies that provide value to your business.",
      color: "icon-blue",
    },
    {
      icon: <FaCheck />,
      title: "Branding Identity",
      desc: "Separated they live in a fictitious island that live in a fictitious island.",
      color: "icon-green",
    },
    {
      icon: <FiLayers />,
      title: "App Development",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content platform.",
      color: "icon-yellow",
    },
    {
      icon: <FaDollarSign />,
      title: "Business Strategy",
      desc: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt.",
      color: "icon-pink",
    },
    {
      icon: <FaCheck />,
      title: "Web Design",
      desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, and large.",
      color: "icon-gray",
    },
  ];

  return (
    <div className="services-wrapper">
      
              {/* ===== HERO SECTION (UPDATED) ===== */}
     <section className="resume-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">SERVICES</h1>
  </div>

  {/* 🔥 SVG WAVE */}
  <div className="wave">
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
      <path 
        d="M0,80 C300,140 1100,0 1440,80 L1440,200 L0,200 Z" 
        fill="#f5f5f5"
      ></path>
    </svg>
  </div>
</section>

      {/* SERVICES GRID */}
      <section className="services py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-card">
                  <div className={`service-icon ${item.color}`}>
                    {item.icon}
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* ========== FREELANCER CTA SECTION ========== */}
      <section className="freelancer-cta py-5">
        <div className="container-sm">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="cta-title">I Am Available For Freelancer.</h2>
              <p className="cta-description">Browse hundreds of job offers and find the bestsuitable position.</p>
            </div>
            <div className="col-lg-6">
              <div className="cta-form">
                <input type="email" placeholder="Email Address" className="cta-input" />
                <button className="btn btn-cta">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;