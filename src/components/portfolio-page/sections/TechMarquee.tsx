import React from 'react';
import { techStack } from '../../../data/portfolio-page.data';

const TechMarquee: React.FC = () => (
  <div className="tech-marquee" aria-label="Technology stack">
    <div>
      {[...techStack, ...techStack].map((tech, index) => (
        <span key={`${tech}-${index}`}>
          {tech}
          <i>◆</i>
        </span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
