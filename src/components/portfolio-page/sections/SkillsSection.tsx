import React from 'react';
import { Code2, Database, Layers, Smartphone } from 'lucide-react';
import { SkillCategory, skillCategories } from '../../../data/portfolio-page.data';

const icons: Record<SkillCategory['icon'], React.ElementType> = {
  code: Code2,
  database: Database,
  mobile: Smartphone,
  layers: Layers,
};

const SkillsSection: React.FC = () => (
  <section id="skills" className="section">
    <span className="section-label">Technical Skills</span>
    <h2>Full-Stack Expertise</h2>

    <div className="skills-grid">
      {skillCategories.map((category) => {
        const Icon = icons[category.icon];

        return (
          <article className="glass-card skill-card" key={category.label}>
            <div className="skill-card__heading">
              <span style={{ color: category.color, backgroundColor: `${category.color}14` }}>
                <Icon size={22} />
              </span>
              <h3>{category.label}</h3>
            </div>
            <div className="pill-list">
              {category.items.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;
