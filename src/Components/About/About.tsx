import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Know more about my journey and what I do</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="section-title mb-4">Who Am I?</h2>
              <p className="about-text">
                Hi! I'm David Williamson, a passionate freelance React Developer based in the USA. With expertise in modern web technologies and a keen eye for detail, I create beautiful and functional web applications that solve real-world problems.
              </p>
              <p className="about-text">
                I believe in clean code, responsive design, and user-centric development. My journey in web development has equipped me with skills in React, Bootstrap, and various backend technologies. I'm always eager to learn new technologies and take on challenging projects.
              </p>
              
              <div className="about-features mt-4">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Clean & Modern Code</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Fully Responsive Design</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>SEO Optimized</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Cross-Browser Compatible</span>
                </div>
              </div>

              <button className="btn btn-primary mt-4">Download CV</button>
            </div>

            <div className="col-lg-6">
              <img 
                src="https://i.ibb.co/8xgQZpK/profile.png" 
                alt="About me" 
                className="about-image img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details from Home (Reused) */}
      <section className="personal-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title mb-4">Personal Details</h2>
              <p className="section-subtitle mb-5">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>

              <div className="social-links mb-5">
                <a href="#" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" title="Google">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="details-grid">
                <div className="detail-item">
                  <strong>Date of birth</strong>
                  <p>: 06 june 1989</p>
                </div>
                <div className="detail-item">
                  <strong>Spoken Languages</strong>
                  <p>: English - French - German</p>
                </div>
                <div className="detail-item">
                  <strong>Nationality</strong>
                  <p>: USA</p>
                </div>
                <div className="detail-item">
                  <strong>Interest</strong>
                  <p>: Music, Reading, journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon android">
                <i className="fab fa-android"></i>
              </div>
              <h5>Android</h5>
              <p className="skill-duration">2 Year Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon angular">
                <i className="fab fa-angular"></i>
              </div>
              <h5>Angular</h5>
              <p className="skill-duration">1 Year Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon bootstrap">
                <i className="fab fa-bootstrap"></i>
              </div>
              <h5>Bootstrap</h5>
              <p className="skill-duration">3 Year Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon vue">
                <i className="fab fa-vuejs"></i>
              </div>
              <h5>Vue</h5>
              <p className="skill-duration">2 Year Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon react">
                <i className="fab fa-react"></i>
              </div>
              <h5>React</h5>
              <p className="skill-duration">8 Months Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon mongodb">
                <i className="fas fa-database"></i>
              </div>
              <h5>MongoDB</h5>
              <p className="skill-duration">3 Months Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon laravel">
                <i className="fab fa-php"></i>
              </div>
              <h5>Laravel</h5>
              <p className="skill-duration">1 Year Experience</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon nodejs">
                <i className="fab fa-node-js"></i>
              </div>
              <h5>Node.js</h5>
              <p className="skill-duration">10 Months Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
