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
  const [active, setActive] = useState(sections[0]);
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
        {active === 'Biography' && (
          <div className="about-biography-list">
            <p>
              I am an enthusiastic and professional Full Stack Developer who enjoys being part of,
              as well as leading, a successful and productive team. I am quick to grasp new ideas
              and concepts, and to develop innovative and creative solutions to problems.
            </p>
            <p>
              I am able to work well on my own initiative and can demonstrate the high levels of
              motivation required to meet the tightest of deadlines. Even under significant
              pressure, I possess a strong ability to perform effectively.
            </p>

            <ul className="info">
              <li>
                <strong>Age . . . . . </strong>
                <span>{new Date().getFullYear() - 1986}</span>
              </li>
              <li>
                <strong>Mobile . . . . . </strong>
                <a href="tel:+919496334758">+91 9496 334 758</a>
              </li>
              <li>
                <strong>Email . . . . . </strong>
                <a href="mailto:mails2nithin@gmail.com">mails2nithin@gmail.com</a>
              </li>
              <li>
                <strong>Address . . . . . </strong>
                Ernakulam, Kerala
              </li>
              <li>
                <strong>Residence . . . . . </strong>
                Indian
              </li>
            </ul>
          </div>
        )}
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
