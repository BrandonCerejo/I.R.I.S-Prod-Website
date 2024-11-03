import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css'; 
import Header from '../components/Header';

function Projects() {
  const ongoingTechnicalProject = {
    id: 1,
    title: "Club Website",
    description: "some info about website",
  };
  
  const ongoingTechnicalProject2 = {
    id: 2,
    title: "Autonomous Vehicle",
    description: "info about autonomous vehicle",
  };

  const ongoingResearch = {
    id: 3,
    title: "Research",
    description: "info about research project",
  };

  const ongoingResearch2 = {
    id: 4,
    title: "Research",
    description: "info about research project",
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className={styles.projects}>
      <main className={`${styles.mainContent} container`}>
        <h1 className={styles.title}>Projects</h1>

        {/* Technical Projects Section */}
        <h2 className={styles.title}>Ongoing Technical Projects</h2>
        <div className="row">
          {[ongoingTechnicalProject, ongoingTechnicalProject2].map((project) => (
            <div className="col-md-6 d-flex justify-content-center" key={project.id}>
              <div className={`${styles.projectCard} card`}>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3> {/* Title above the card body */}
                  <img src="logo2.png" className="card-img-top" alt="Project logo" />
                  <p className="card-text">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="btn btn-primary">
                    Click to Know More!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Section */}
        <h2 className={styles.title}>Ongoing Research</h2>
        <div className="row">
          {[ongoingResearch, ongoingResearch2].map((research) => (
            <div className="col-md-6 d-flex justify-content-center" key={research.id}>
              <div className={`${styles.projectCard} card`}>
                <div className="card-body">
                  <h3 className="card-title">{research.title}</h3> {/* Title above the card body */}
                  <img src="logo2.png" className="card-img-top" alt="Research logo" />
                  <p className="card-text">{research.description}</p>
                  <Link to={`/projects/${research.id}`} className="btn btn-primary">
                    Click to Know More!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
