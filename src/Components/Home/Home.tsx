import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaGithub, FaTwitter, FaGoogle, FaLinkedin, FaAndroid } from "react-icons/fa";

const Home: React.FC = () => {
  const professions = ["Flutter", "React", "Python"];
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">

            {/* LEFT IMAGE */}
            <div className="hero-image">
              <img src="https://mannatthemes.com/selfown/default/images/personal/1.png" className="img-fluid ml-lg-5" alt="David Williamson" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="hero-content">
              <p className="hero-subtitle">Hi, I'm David Williamson</p>

              <h1 className="hero-title">
                I'm a freelance <span className="highlight animate-profession">{professions[currentProfession]}</span> Developer
              </h1>

              {/* <p className="hero-description">
                I design and develop modern web & mobile applications with clean UI and powerful backend systems.
              </p> */}

              <div className="hero-buttons">
                <a  className="btn btn-primary">Download CV</a>

                
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ========== PERSONAL DETAILS SECTION ========== */}
      <section className="personal-details py-5">
        <div className="container">

          <div className="row align-items-center">
      
      {/* LEFT SIDE */}
      <div className="col-lg-6">
        <h2 className="section-title">Personal Details</h2>
        <p className="section-subtitle">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* Social Icons */}
        <div className="social-links mt-4">
          <a href="#" className="social-link"><FaGithub />
<i className="fab fa-github"></i></a>
          <a href="#" className="social-link"> <FaTwitter />
<i className="fab fa-twitter"></i></a>
          <a href="#" className="social-link"><FaGoogle/><i className="fab fa-google"></i></a>
          <a href="#" className="social-link"><FaLinkedin/><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6">
        <div className="details-box">
          
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
      </div>

    </div>
  </div>
</section>

{/* SKILLS CARDS */}
<div className="skills-grid mt-5">

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
    <div className="skill-card" key={index}>
      <div className="skill-left">
        <img
          src={`https://mannatthemes.com/selfown/default/images/logos/${skill.img}`}
          alt={skill.name}
        />
      </div>

      <div className="skill-right">
        <h5>{skill.name}</h5>
        <p>{skill.exp}</p>
      </div>
    </div>
  ))}

</div>

      {/* ========== SKILLS SECTION ========== */}
      

      {/* ========== SERVICES SECTION ========== */}
      <section className="services py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge badge-services mb-3">SERVICES</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We craft digital, graphic and dimensional thinking, to create category<br/>
              leading brand experiences that have meaning .
            </p>
          </div>

          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="service-card">
                
                <h6>Awesome Support</h6>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h6>Dynamic Growth</h6>
                <p>Credibly brand standards compliant growth strategies that provide value to your business.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h6>Branding Identity</h6>
                <p>Separated they live in a fictitious island that live in a fictitious island.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION SECTION ========== */}
      <section className="education py-5 bg-light">
        <div className="container">
          <div className="row align-items-start">
            {/* LEFT SIDE - ILLUSTRATION & TITLE */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="education-left">
                <div className="education-illustration">
                  <img src="https://mannatthemes.com/selfown/default/images/personal/school.png" alt="Education" className="img-fluid" />
                </div>
                <h3 className="education-left-title">Education</h3>
              </div>
            </div>

            {/* RIGHT SIDE - EDUCATION ITEMS */}
            <div className="col-lg-8">
              {/* Education Item 1 */}
              <div className="education-item-new mb-4">
                <div className="education-item-header">
                  <span className="education-item-icon">—</span>
                  <h5 className="education-item-title">MSc IT Master Degree</h5>
                  <span className="education-item-date">2010 - 2012</span>
                </div>
                <p className="education-item-description">
                  Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.
                </p>
                <p className="education-item-location">Harvard University, Cambridge, MA, United States</p>
              </div>

              {/* Education Item 2 */}
              <div className="education-item-new mb-4">
                <div className="education-item-header">
                  <span className="education-item-icon">+</span>
                  <h5 className="education-item-title">BCA college complete course</h5>
                  <span className="education-item-date">2007 - 2010</span>
                </div>
                <p className="education-item-description">
                  Specialized in computer applications and information technology fundamentals with focus on software development and database management.
                </p>
                <p className="education-item-location">ABC College, New Delhi, India</p>
              </div>

              {/* Education Item 3 */}
              <div className="education-item-new">
                <div className="education-item-header">
                  <span className="education-item-icon">+</span>
                  <h5 className="education-item-title">High / Higher secondary school</h5>
                  <span className="education-item-date">1999 - 2007</span>
                </div>
                <p className="education-item-description">
                  Completed higher secondary education with focus on science stream including mathematics, physics, and chemistry.
                </p>
                <p className="education-item-location">XYZ School, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="testimonials py-5">
        <div className="container">
          <div className="testimonial-item text-center">
            <h3 className="testimonial-title mb-4">manter.</h3>
            <p className="testimonial-text">
              I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.
            </p>
            
            <div className="testimonial-author mt-5">
              <img src="https://i.ibb.co/8xgQZpK/profile.png" alt="Larry J. Akins" className="testimonial-avatar" />
              <p className="testimonial-name">- LARRY J. AKINS</p>
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="testimonial-nav">
              <button className="testimonial-btn prev"><i className="fas fa-chevron-left"></i></button>
              <button className="testimonial-btn next"><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FREELANCER CTA SECTION ========== */}
      <section className="freelancer-cta py-5">
        <div className="container">
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

      {/* ========== PROJECTS SECTION ========== */}
      <section className="projects py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              We craft digital, graphic and dimensional thinking, to create category<br/>
              leading brand experiences that have meaning .
            </p>
          </div>

          {/* Project Filters */}
          <div className="project-filters text-center mb-5">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Angular</button>
            <button className="filter-btn">MongoDB</button>
            <button className="filter-btn">Bootstrap</button>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-icon angular">
                  <img src="https://mannatthemes.com/selfown/default/images/logos/Angular.svg" alt="React" className="project-icon" />
                </div>
                <h5>Auto Drive Project</h5>
                <p className="project-source">Mannat-Themes <i className="fas fa-external-link-alt"></i></p>
                <div className="project-tags">
                  <span className="project-tag">ANGULAR</span>
                  <span className="project-tag">REACT</span>
                  <span className="project-tag">JQUERY</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-icon bootstrap">
                  <img src="https://mannatthemes.com/selfown/default/images/logos/bootstrap.svg" alt="Vue.js" className="project-icon" />
                </div>
                <h5>Auto Drive Project</h5>
                <p className="project-source">Mannat-Themes <i className="fas fa-external-link-alt"></i></p>
                <div className="project-tags">
                  <span className="project-tag">BOOTSTRAP</span>
                  <span className="project-tag">CSS</span>
                  <span className="project-tag">JAVASCRIPT</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-icon mongodb">
                  <img src="https://mannatthemes.com/selfown/default/images/logos/mongodb.svg" alt="MongoDB" className="project-icon" />
                </div>
                <h5>Auto Drive Project</h5>
                <p className="project-source">Mannat-Themes <i className="fas fa-external-link-alt"></i></p>
                <div className="project-tags">
                  <span className="project-tag">MONGODB</span>
                  <span className="project-tag">JAVASCRIPT</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-icon vue">
                  <img src="https://mannatthemes.com/selfown/default/images/logos/vue.svg" alt="Vue.js" className="project-icon" />
                </div>
                <h5>Auto Drive Project</h5>
                <p className="project-source">Mannat-Themes <i className="fas fa-external-link-alt"></i></p>
                <div className="project-tags">
                  <span className="project-tag">VUE</span>
                  <span className="project-tag">JAVASCRIPT</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-icon react">
                  <img src="https://mannatthemes.com/selfown/default/images/logos/react.svg" alt="React" className="project-icon" />
                </div>
                <h5>Auto Drive Project</h5>
                <p className="project-source">Mannat-Themes <i className="fas fa-external-link-alt"></i></p>
                <div className="project-tags">
                  <span className="project-tag">REACT</span>
                  <span className="project-tag">JAVASCRIPT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOGS SECTION ========== */}
      <section className="blogs py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge badge-services mb-3">BLOGS</span>
            <h2 className="section-title">Latest news & insights</h2>
            <p className="section-subtitle">
              We craft digital, graphic and dimensional thinking, to create category<br/>
              leading brand experiences that have meaning.
            </p>
          </div>

          <div className="row g-4">
            {/* Blog 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://mannatthemes.com/selfown/default/images/personal/1.jpg" alt="Blog Post" className="img-fluid" />
                </div>
                <h5 className="blog-title">How to design engaging social media content</h5>
              </div>
            </div>





            {/* Blog 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post" className="img-fluid" />
                </div>
                <h5 className="blog-title">The future of web design and development</h5>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://mannatthemes.com/selfown/default/images/personal/2.jpg" alt="Blog Post" className="img-fluid" />
                </div>
                <h5 className="blog-title">Best practices for modern web applications</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="contact-title">Get in touch !</h2>
              <p className="contact-description">
                Always available for freelancing if the right project comes along, Feel free to contact me.
              </p>

              <form className="contact-form mt-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="Your name" className="form-control contact-input" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" placeholder="Your email" className="form-control contact-input" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="your subject" className="form-control contact-input" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="+00 1234 5678 90" className="form-control contact-input" />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea placeholder="Enter your message..." className="form-control contact-input" rows={5}></textarea>
                </div>
              </form>
            </div>

            <div className="col-lg-6">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6>+1234 567 89</h6>
                    <p>9:00am to 7:00pm</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6>example@example.com</h6>
                    <p>Monday to Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home