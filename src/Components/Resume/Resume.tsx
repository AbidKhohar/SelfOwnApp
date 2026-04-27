import { IoMdTrophy } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { GoPeople } from "react-icons/go";

function Resume() {
  return (
    <div>
      
       {/* About Hero Section */}
      <section className="about-hero">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
              <h5 className="page-title fw-bold">Resume</h5>
            </div>
          </div>
        </div>
      </section>



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
                <div className="year-circle">2007-08</div>
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

    </div>
  )
}

export default Resume
