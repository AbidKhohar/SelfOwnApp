import React from "react";
import "./Home.css";
import { FaGithub, FaTwitter, FaGoogle, FaLinkedin, FaAndroid } from "react-icons/fa";
import { FaAngular, FaBootstrap, FaLaravel, FaNode, FaReact, FaVuejs } from "react-icons/fa6";



const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">

            {/* LEFT IMAGE */}
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="David Williamson" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="hero-content">
              <p className="hero-subtitle">Hi, I'm David Williamson</p>

              <h1 className="hero-title">
                I'm a freelance <span className="highlight">Python</span> Developer
              </h1>

              <p className="hero-description">
                I design and develop modern web & mobile applications with clean UI and powerful backend systems.
              </p>

              <div className="hero-buttons">
                <a  className="btn btn-outline">Download CV</a>

                <button className="btn btn-primary"></button>
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

    {/* SKILLS CARDS */}
    <div className="skills-grid mt-5">
      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-android"><FaAndroid/></i>
        </div>
        <h5>Android</h5>
        <p>2 Year Experience</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-angular"><FaAngular/></i>
        </div>
        <h5>Angular</h5>
        <p>1 Year Experience</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-bootstrap"><FaBootstrap/></i>
        </div>
        <h5>Bootstrap</h5>
        <p>3 Year Experience</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-vuejs"><FaVuejs/></i>
        </div>
        <h5>Vue</h5>
        <p>2 Year Experience</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-react"><FaReact/></i>
        </div>
        <h5>React</h5>
        <p>8 Months Experience</p>
      </div>

      

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-laravel"><FaLaravel/></i>
        </div>
        <h5>Laravel</h5>
        <p>1 Year Experience</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">
          <i className="fab fa-node-js"><FaNode/></i>
        </div>
        <h5>Node.js</h5>
        <p>10 Months Experience</p>
      </div>

    </div>

  </div>
</section>
      {/* ========== SKILLS SECTION ========== */}
      <section className="skills py-5 bg-light">
        <div className="container">
          <div className="skills-grid">
            {/* Android Skill */}
            <div className="skill-card">
              <div className="skill-icon android">
                <i className="fab fa-android"></i>
              </div>
              <h5>Android</h5>
              <p className="skill-duration">2 Year Experience</p>
            </div>

            {/* Angular Skill */}
            <div className="skill-card">
              <div className="skill-icon angular">
                <i className="fab fa-angular"></i>
              </div>
              <h5>Angular</h5>
              <p className="skill-duration">1 Year Experience</p>
            </div>

            {/* Bootstrap Skill */}
            <div className="skill-card">
              <div className="skill-icon bootstrap">
                <i className="fab fa-bootstrap"></i>
              </div>
              <h5>Bootstrap</h5>
              <p className="skill-duration">3 Year Experience</p>
            </div>

            {/* Vue Skill */}
            <div className="skill-card">
              <div className="skill-icon vue">
                <i className="fab fa-vuejs"></i>
              </div>
              <h5>Vue</h5>
              <p className="skill-duration">2 Year Experience</p>
            </div>

            {/* React Skill */}
            <div className="skill-card">
              <div className="skill-icon react">
                <i className="fab fa-react"></i>
              </div>
              <h5>React</h5>
              <p className="skill-duration">8 Months Experience</p>
            </div>
          </div>
        </div>
      </section>

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
                <div className="service-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h5>Awesome Support</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h5>Dynamic Growth</h5>
                <p>Credibly brand standards compliant growth strategies that provide value to your business.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h5>Branding Identity</h5>
                <p>Separated they live in a fictitious island that live in a fictitious island.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION SECTION ========== */}
      <section className="education py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge badge-services mb-3">LIFE TIME</span>
            <h2 className="section-title">Education & Experience</h2>
            <p className="section-subtitle">
              We craft digital, graphic and dimensional thinking, to create category<br/>
              leading brand experiences that have meaning .
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              {/* Education Item */}
              <div className="education-item mb-5">
                <h5 className="education-title">MSc IT Master Degree</h5>
                <p className="education-date">2010 - 2012</p>
                <p className="education-description">
                  Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.
                </p>
                <p className="education-location">Harvard University, Cambridge, MA, United States</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="education-image text-center">
                <img src="https://i.ibb.co/3T8ZQkH/about.jpg" alt="Education" className="img-fluid rounded" />
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
                  <i className="fab fa-angular"></i>
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
                  <i className="fab fa-bootstrap"></i>
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
                  <i className="fas fa-leaf"></i>
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
                  <i className="fab fa-vuejs"></i>
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
                  <i className="fab fa-react"></i>
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
              leading brand experiences that have meaning .
            </p>
          </div>

          <div className="row g-4">
            {/* Blog 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post" className="img-fluid" />
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
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post" className="img-fluid" />
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