import React from 'react';
import './About.css';
import { FaGithub, FaTwitter, FaGoogle, FaLinkedin} from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { GoPeople } from "react-icons/go";




const About: React.FC = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
              <h1 className="page-title fw-bold">About Me</h1>
            </div>
          </div>
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
        <h2 className="section-title">Personal Details</h2>

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
       <i className="fab fa-github"></i></a>
                 <a href="#" className="social-link"> <FaTwitter />
       <i className="fab fa-twitter"></i></a>
                 <a href="#" className="social-link"><FaGoogle/><i className="fab fa-google"></i></a>
                 <a href="#" className="social-link"><FaLinkedin/><i className="fab fa-linkedin"></i></a>
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










<section className="education-section py-5">
  <div className="container text-center">

    <span className="badge bg-light text-success mb-2">LIFE TIME</span>
    <h2 className="fw-bold mb-3">Education & Experience</h2>
    <p className="text-muted mb-5">
      We craft digital, graphic and dimensional thinking, to create category<br/>
      leading brand experiences that have meaning.
    </p>

    {/* ITEM 1 */}
    <div className="timeline-item red">
      <div className="row align-items-center">

        <div className="col-md-2 text-center">
          <div className="icon-box">
            <i className="bi bi-trophy"><IoMdTrophy/></i>
          </div>
        </div>

        <div className="col-md-7 text-start">
          <p className="fw-bold">GHI Themes - Web & App IT Company</p>
          <p className="text-muted mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <div className="year-circle">2019-22</div>
        </div>

      </div>
    </div>

    {/* ITEM 2 */}
    <div className="timeline-item yellow">
      <div className="row align-items-center">

        <div className="col-md-3 text-center">
          <div className="year-circle">2014-18</div>
        </div>

        <div className="col-md-7 text-start">
          <p className="fw-bold">ABC Themes - Web Design IT Company</p>
          <p className="text-muted mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.
          </p>
        </div>

        <div className="col-md-2 text-center">
          <div className="icon-box">
            <i className="bi bi-people"><GoPeople/></i>
          </div>
        </div>

      </div>
    </div>

    {/* ITEM 3 */}
    <div className="timeline-item green">
      <div className="row align-items-center">

        <div className="col-md-2 text-center">
          <div className="icon-box">
            <i className="bi bi-mortarboard"><GiGraduateCap/></i>
          </div>
        </div>

        <div className="col-md-7 text-start">
          <p className="fw-bold">MSc IT Master Degree</p>
          <p className="text-muted mb-0">
            Harvard University is an educational institution that offers graduate, professional programs.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <div className="year-circle">2012-13</div>
        </div>





      </div>
      
    </div>



    {/* ITEM 2 */}
    <div className="timeline-item yellow">
      <div className="row align-items-center">

        <div className="col-md-3 text-center">
          <div className="year-circle">2014-18</div>
        </div>

        <div className="col-md-7 text-start">
          <p className="fw-bold">High / Higher Secondry School</p>
          <p className="text-muted mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.
          </p>
        </div>

        <div className="col-md-2 text-center">
          <div className="icon-box">
            <i className="bi bi-people"><GoPeople/></i>
          </div>
        </div>

      </div>
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

    </>
  );
};

export default About;


