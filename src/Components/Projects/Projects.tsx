

import { useState } from "react";

function Projects() {

   
    const [selectedFilter, setSelectedFilter] = useState("All");
  
    // Projects Data
    const projects = [
      {
        id: 1,
        name: "Farmer Project",
        source: "Mannat-Themes",
        icon: "https://mannatthemes.com/selfown/default/images/logos/Angular.svg",
        tags: ["ANGULAR", "REACT", "JQUERY"],
        category: "Angular",
        bgColor: "#ffebee"
      },
      {
        id: 2,
        name: "ID Scan Project",
        source: "Mannat-Themes",
        icon: "https://mannatthemes.com/selfown/default/images/logos/bootstrap.svg",
        tags: ["BOOTSTRAP", "CSS", "JAVASCRIPT"],
        category: "Bootstrap",
        bgColor: "#ede7f6"
      },
      {
        id: 3,
        name: "Auto Drive Project",
        source: "Mannat-Themes",
        icon: "https://mannatthemes.com/selfown/default/images/logos/mongodb.svg",
        tags: ["MONGODB", "JAVASCRIPT"],
        category: "MongoDB",
        bgColor: "#e8f5e9"
      },
      {
        id: 4,
        name: "Health Application",
        source: "Mannat-Themes",
        icon: "https://mannatthemes.com/selfown/default/images/logos/vue.svg",
        tags: ["VUE", "JAVASCRIPT"],
        category: "Vue",
        bgColor: "#e8f5e9"
      },
      {
        id: 5,
        name: "Auto Drive Project",
        source: "Mannat-Themes",
        icon: "https://mannatthemes.com/selfown/default/images/logos/react.svg",
        tags: ["REACT", "JAVASCRIPT"],
        category: "React",
        bgColor: "#e0f2f1"
      }
    ];
  
    // Filtered Projects
    const filteredProjects = selectedFilter === "All" 
      ? projects 
      : projects.filter(project => project.category === selectedFilter);
    
  return (
    <div>
      
       {/* About Hero Section */}
      <section className="about-hero">
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
              <h5 className="page-title fw-bold">Projects</h5>
            </div>
          </div>
        </div>
      </section>
      


      
      {/* ========== PROJECTS SECTION ========== */}
      <section className="projects py-5">
        <div className="container">
          {/* Project Filters */}
          <div className="project-filters text-center mb-5">
            <button 
              className={`filter-btn ${selectedFilter === "All" ? "active" : ""}`}
              onClick={() => setSelectedFilter("All")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${selectedFilter === "Angular" ? "active" : ""}`}
              onClick={() => setSelectedFilter("Angular")}
            >
              Angular
            </button>
            <button 
              className={`filter-btn ${selectedFilter === "MongoDB" ? "active" : ""}`}
              onClick={() => setSelectedFilter("MongoDB")}
            >
              MongoDB
            </button>
            <button 
              className={`filter-btn ${selectedFilter === "Bootstrap" ? "active" : ""}`}
              onClick={() => setSelectedFilter("Bootstrap")}
            >
              Bootstrap
            </button>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="project-card">
                  <div className="project-icon" style={{ backgroundColor: project.bgColor }}>
                    <img src={project.icon} alt={project.category} className="project-icon-img" />
                  </div>
                  <h5 className="project-title">{project.name}</h5>
                  <p className="project-source">{project.source} <i className="fas fa-external-link-alt"></i></p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

export default Projects
 