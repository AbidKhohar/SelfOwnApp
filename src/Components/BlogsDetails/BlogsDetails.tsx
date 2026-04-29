import React from "react";

function BlogsDetails() {
  return (
    <div>

      {/* ===== HERO SECTION ===== */}
      <section className="py-5 text-center bg-white">

 {/* About Hero Section */}
      <section className="about-hero">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
              <h5 className="page-title fw-bold">Blogs DETAIL</h5>
            </div>
          </div>
        </div>
      </section>



        <div className="container mt-5">
          <p className="text-muted">26 March 2022</p>




          <p className=" display-5">

            Best NFT wallets for storing and trading NFTs
          </p>

          <p className="text-muted mt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>

          {/* TAGS */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <span className="badge bg-light text-dark">Minting</span>
            <span className="badge bg-light text-dark">NFTs</span>
            <span className="badge bg-light text-dark">Art</span>
            <span className="badge bg-light text-dark">Music</span>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-5">
            <img
              src="https://mannatthemes.com/selfown/default/images/personal/1.jpg"
              alt="hero"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="py-5 bg-light Col-lg-12">
        <div className="container">

          <p className="text-muted">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
          </p>

          {/* QUOTE */}
          <blockquote className="blockquote my-4">
            <p className="fst-italic fs-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <footer className="blockquote-footer">
              Someone famous
            </footer>
          </blockquote>

          <p className="text-muted">
            It uses a dictionary of over 200 Latin words, combined with a handful of model
            sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>

        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="py-5 bg-white mb-5">
        <div className="container">

          <h2 className=" mb-4">Latest Blog Posts</h2>

          <p className="text-muted">26 March 2022</p>

          <div className="row g-4 mt-3">

            {[1, 2, 3, 4].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm h-100">

                  <img
                    src={`https://picsum.photos/300/200?random=${item}`}
                    className="card-img-top"
                    alt="blog"
                  />

                  <div className="card-body">
                    <h6 className="fw-semibold">
                      {index % 2 === 0
                        ? "It is a long established..."
                        : "There are many variations..."}
                    </h6>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* AUTHOR */}
          <div className="d-flex align-items-center mt-5">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="author"
              className="rounded-circle me-3"
              width="50"
            />
            <div>
              <h6 className="mb-0">Donald Gardner</h6>
              <small className="text-muted">Cryptocurrency Analyst</small>
            </div>

            <div className="ms-auto">
              <button className="btn btn-outline-primary">Blogs</button>
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
  );
}

export default BlogsDetails;