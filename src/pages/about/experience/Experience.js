import React from 'react';
import '../About.css';

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

export default function Experience() {
  return (
    <div className="about-container">
      <main className="about-main">
        <h2 className="about-title">Experience</h2>
        <div className="about-list">
          {experiences.map((exp) => (
            <div className="about-item" key={exp.company}>
              <div className="about-icon">{exp.icon}</div>
              <div className="about-content">
                <span className="about-company">{exp.company}</span>
                <span className="about-role">{exp.role}</span>
                <span className="about-period">{exp.period}</span>
                {exp.subtitle && <span className="about-subtitle">{exp.subtitle}</span>}
                {exp.subperiod && <span className="about-period">{exp.subperiod}</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
