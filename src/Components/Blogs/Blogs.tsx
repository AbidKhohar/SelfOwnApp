import './Blogs.css'
import '../About/About.css';
 import { Link } from 'react-router-dom';


function Blogs() {
  return (
    <div className="blogs-wrapper">

           {/* ===== HERO SECTION (UPDATED) ===== */}
     <section className="resume-hero">
  <div className="container text-center hero-content">
    <h1 className="hero-title">BLOGS</h1>
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

      {/* BLOGS SECTION */}
      <section className="blogs py-5 bg-light">
        <div className="container mt-5">

          {/* <div className="text-center mb-5">
            <span className="badge badge-services mb-3">BLOGS</span>
            <h2 className="section-title">Latest news & insights</h2>
            <p className="section-subtitle">
              We craft digital, graphic and dimensional thinking, to create category
              leading brand experiences that have meaning.
            </p>
          </div> */}

          <div className="row g-4">

            {/* ===== BLOG CARD (REUSABLE) ===== */}
            {[1,2,3,4,5,6].map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="blog-card">

                  <div className="blog-image">
                    <img
                      src={`https://mannatthemes.com/selfown/default/images/personal/${item}.jpg`}
                      alt="Blog"
                      className="img-fluid"
                    />
                  </div>

                  <h5 className="blog-title">
                    {index % 2 === 0
                      ? "How to design engaging social media content"
                      : "The future of web design and development"}
                  </h5>

                  {/* AUTHOR SECTION */}
                  <div className="blog-meta d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={
                          index % 2 === 0
                            ? "https://randomuser.me/api/portraits/women/44.jpg"
                            : "https://randomuser.me/api/portraits/men/32.jpg"
                        }
                        alt="author"
                        className="author-img"
                      />
                      <div>
                        <span className="author-name">
                          {index % 2 === 0 ? "Charles Woodall" : "Jarvis Owen"}
                        </span>
                        <br />
                        <span className="author-date">
                          {index % 2 === 0 ? "14 Feb 2022" : "12 Jan 2022"}
                        </span>
                      </div>
                    </div>


<Link to="/BlogsDetails" className="read-more">
  Read more →
</Link>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="freelancer-cta py-5">
        <div className="container-sm">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="cta-title">I Am Available For Freelancer.</h2>
              <p className="cta-description">
                Browse hundreds of job offers and find the best suitable position.
              </p>
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

export default Blogs