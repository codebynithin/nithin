import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../../data/portfolio-page.data';

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading-row">
        <div>
          <span className="section-label">Projects</span>
          <h2>Selected Work</h2>
        </div>
        <span>50+ projects delivered</span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.title}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ '--project-color': project.color } as React.CSSProperties}
          >
            <div className="project-card__image">
              <img src={`/images/portfolio/${project.image}`} alt={`${project.title} preview`} />
            </div>
            <div className="project-card__body">
              <div className="project-card__topline">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight size={22} color={hoveredProject === index ? project.color : '#555'} />
              </div>
              <p className="project-card__category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
