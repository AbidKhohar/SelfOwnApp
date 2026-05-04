import React from "react";
import "./Resume.css";
import { GiGraduateCap } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { IoMdTrophy } from "react-icons/io";

function Resume() {
  return (
    <div>

      {/* ===== HERO SECTION (UPDATED) ===== */}
     <section className="resume-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">RESUME</h1>
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

      {/* ===== TIMELINE ===== */}
      <section className="education-section py-5">
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
                  Princeton University is an educational institution.
                </p>
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
                  Princeton University is an educational institution.
                </p>
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
                  Princeton University is an educational institution.
                </p>
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
                  Princeton University is an educational institution.
                </p>
              </div>

              <div className="col-md-2 text-center">
                <div className="icon-box">
                  <GoPeople />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Resume;