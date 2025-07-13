import React, { useState } from 'react';
import './About.css';

const sections = ['Biography', 'Experience', 'Education', 'Skills', 'Testimonies', 'Extra'];

const experiences = [
  {
    company: 'Codniv Innovations',
    role: 'Full Stack Developer',
    period: '01 July 2023 – 01 April 2024, 9 mos',
    subtitle: 'Intern as NodeJS Backend Developer',
    subperiod: '27 March 2023 – 30 June 2023, 3 mos',
    icon: '<>',
  },
  {
    company: 'Mero Network Pvt. Ltd.',
    role: 'Intern as Mobile Developer',
    period: 'Nov 2022 – Jan 2023, 3 mos',
    icon: 'M',
  },
  {
    company: 'Freelance',
    role: 'Backend Developer',
    period: 'May 2021 – Oct 2022, 1yr 5mos',
    icon: 'F',
  },
];

export default function About() {
  const [active, setActive] = useState('Experience');
  return (
    <div className="about-container">
      <aside className="about-sidebar">
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={active === section ? 'active' : ''}
              onClick={() => setActive(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </aside>
      <main className="about-main">
        <h2 className="about-title">{active}</h2>
        {active === 'Experience' && (
          <div className="about-experience-list">
            {experiences.map((exp) => (
              <div className="about-experience-item" key={exp.company}>
                <div className="about-experience-icon">{exp.icon}</div>
                <div className="about-experience-content">
                  <span className="about-experience-company">{exp.company}</span>
                  <span className="about-experience-role">{exp.role}</span>
                  <span className="about-experience-period">{exp.period}</span>
                  {exp.subtitle && (
                    <span className="about-experience-subtitle">{exp.subtitle}</span>
                  )}
                  {exp.subperiod && (
                    <span className="about-experience-period">{exp.subperiod}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}
