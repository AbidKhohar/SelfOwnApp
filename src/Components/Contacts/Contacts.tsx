import React from 'react'
import "../About/About.css";
import {  FaPhone, FaEnvelope  } from "react-icons/fa";



function Contacts() {

  return (

    <div>

     {/* ===== HERO SECTION (UPDATED) ===== */}
     <section className="resume-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">CONTACTS</h1>
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

              <button className="btn btn-primary mt-3">Send Message</button>



            </div>

            <div className="col-lg-6">

              <div className="contact-info">

                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <FaPhone/>

                  </div>

                  <div>

                    <h6>+1234 567 89</h6>

                    <p>9:00am to 7:00pm</p>

                  </div>

                </div>



                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <FaEnvelope/>

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









    </div>

  )

}



export default Contacts

