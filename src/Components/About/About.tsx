import React from 'react';
import './About.css';
import { FaGithub, FaTwitter, FaGoogle, FaLinkedin} from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { BiSolidSchool } from "react-icons/bi";





const About: React.FC = () => {
  return (
    <>
              {/* ===== HERO SECTION (UPDATED) ===== */}
     <section className="resume-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">ABOUT ME</h1>
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

      <section className="personal-details py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT SIDE IMAGE */}
      <div className="col-lg-6 text-center">
        <img 
          src="https://mannatthemes.com/selfown/default/images/personal/2.png" 
          alt="profile" 
          className="img-fluid profile-img"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="col-lg-6">
        <h5 className="">Personal Details</h5>

        <p className="section-subtitle">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* DETAILS */}
        <div className="details-box mt-4">
          <div className="detail-row">
            <span className="label">Date of birth</span>
            <span className="value">06 June 1989</span>
          </div>

          <div className="detail-row">
            <span className="label">Spoken Languages</span>
            <span className="value">English - French - German</span>
          </div>

          <div className="detail-row">
            <span className="label">Nationality</span>
            <span className="value">USA</span>
          </div>

          <div className="detail-row">
            <span className="label">Interest</span>
            <span className="value">Music, Reading, Journey</span>
          </div>
        </div>



        {/* SOCIAL ICONS */}
         <div className="social-links mt-4">
                 <a href="#" className="social-link"><FaGithub />
       </a>
                 <a href="#" className="social-link"> <FaTwitter />
       </a>
                 <a href="#" className="social-link"><FaGoogle/></a>
                 <a href="#" className="social-link"><FaLinkedin/></a>
               </div>
             </div>

      </div>
    </div>
  
</section>


<div className="container py-5">
  <div className="row g-2">

    {[
      { name: "Android", exp: "2 Year Experience", img: "android.svg" },
      { name: "Angular", exp: "1 Year Experience", img: "Angular.svg" },
      { name: "Bootstrap", exp: "3 Year Experience", img: "bootstrap.svg" },
      { name: "Vue", exp: "2 Year Experience", img: "vue.svg" },
      { name: "React", exp: "8 Months Experience", img: "react.svg" },
      { name: "MongoDB", exp: "3 Months Experience", img: "mongodb.svg" },
      { name: "Laravel", exp: "1 Year Experience", img: "laravel.svg" },
      { name: "Node.js", exp: "10 Months Experience", img: "nodejs-icon.svg" },
    ].map((skill, index) => (
      
      <div className="col-12 col-sm-6 col-lg-2" key={index}>
        <div className="card skill-card h-100 border-0 shadow-sm">
          
          <div className="card-body d-flex align-items-center">

            {/* LEFT ICON */}
            <img
              src={`https://mannatthemes.com/selfown/default/images/logos/${skill.img}`}
              alt={skill.name}
              className="skill-img"
            />


            {/* RIGHT TEXT */}
            <div>
              <h6 className="mb-1 fw-semibold">{skill.name}</h6>
              <p className="mb-0 text-muted small">{skill.exp}</p>
            </div>

          </div>

        </div>
      </div>

    ))}

  </div>
</div>







<div className="container">

 {/* HERO */}
 {/* TIMELINE */}
<section className="education-section py-5">

  {/* 🔥 CENTERED HEADER */}
  <div className="container text-center mb-5">
    <span className="badge bg-light text-success mb-2">LIFE TIME</span>

    <h2 className="fw-bold mb-3">Education & Experience</h2>

    <p className="text-muted mx-auto section-text">
      We craft digital, graphic and dimensional thinking, to create category
      leading brand experiences that have meaning.
    </p>
  </div>

  {/* TIMELINE ITEMS */}
  <div className="container">
    ...
  </div>

</section>
      

      {/* TIMELINE */}
      <section className="education-section">
       
        <div className="container">

          {/* ITEM 1 */}
          <div className="timeline-item red">
            
            <div className="row align-items-center">

              <div className="col-md-2 text-center">
                <div className="icon-box">
                  <IoMdTrophy />
                </div>
              </div>

              <div className="col-md-7 text-center">
                <h5 className="fw-bold mb-2">GHI Themes - Web & App IT Company</h5>
                <p className="text-muted small mb-0">
Princeton University is an educational institution. Princeton University is an educational institution. Princeton University is an educational institution.                </p>
              </div>

              <div className="col-md-3 text-center">
                <div className="year-circle peel red">2019-22</div>
              </div>

            </div>
          </div>

          {/* ITEM 2 */}
          <div className="timeline-item yellow">
            <div className="row align-items-center">

              <div className="col-md-3 text-center">
                <div className="year-circle peel yellow">2014-18</div>
              </div>

              <div className="col-md-7 text-center">
                <h5 className="fw-bold mb-2">ABC Themes - Web Design IT Company</h5>
                <p className="text-muted small mb-0">
Princeton University is an educational institution. Princeton University is an educational institution. Princeton University is an educational institution.                </p>
              </div>

              <div className="col-md-2 text-center">
                <div className="icon-box">
                  <GoPeople />
                </div>
              </div>

            </div>
          </div>

          {/* ITEM 3 */}
          <div className="timeline-item green">
            <div className="row align-items-center">

              <div className="col-md-2 text-center">
                <div className="icon-box">
                  <GiGraduateCap />
                </div>
              </div>

              <div className="col-md-7 text-center">
                <h5 className="fw-bold mb-2">MSc IT Master Degree</h5>
                <p className="text-muted small mb-0">
Princeton University is an educational institution. Princeton University is an educational institution. Princeton University is an educational institution.                </p>
              </div>

              <div className="col-md-3 text-center">
                <div className="year-circle peel green">2012-13</div>
              </div>

            </div>
          </div>

          {/* ITEM 4 */}
          <div className="timeline-item blue">
            <div className="row align-items-center">

              <div className="col-md-3 text-center">
                <div className="year-circle peel blue">2007-08</div>
              </div>

              <div className="col-md-7 text-center">
                <h5 className="fw-bold mb-2">High / Higher Secondary School</h5>
                <p className="text-muted small mb-0">
Princeton University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.


                </p>
              </div>

              <div className="col-md-2 text-center">
                <div className="icon-box">
                  <BiSolidSchool />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

</div>


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

    </>
  );
};

export default About;


