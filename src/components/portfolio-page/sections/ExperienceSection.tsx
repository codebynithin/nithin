import React from 'react';
import { experience } from '../../../data/portfolio-page.data';

const ExperienceSection: React.FC = () => (
  <section id="experience" className="section section--narrow experience-section">
    <span className="section-label">Experience</span>
    <h2>Career Journey</h2>

    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline__item" key={`${item.role}-${item.company}`}>
          <div>
            <h3>{item.role}</h3>
            <span>{item.company}</span>
          </div>
          <time>{item.period}</time>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
