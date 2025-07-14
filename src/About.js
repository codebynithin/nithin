import React, { useState } from 'react';
import './About.css';

const sections = ['Biography', 'Services', 'Skills', 'Experience', 'Education'];
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
          <div className="about-biography-list flex pl-1">
            <div className="col md:col-60 pr-2 md:pr-0">
              <p>
                I&apos;m a passionate and results-oriented Full Stack Developer with a solid
                foundation in building end-to-end digital solutions across both product-driven and
                corporate environments. With hands-on experience in architecting, developing, and
                deploying full-scale web and mobile applications, I bring a strong blend of
                technical expertise and business awareness to every project I take on.{' '}
              </p>
              <p>
                In product development, I focus on delivering intuitive, high-performance
                applications that solve real user problems and scale with business growth. From
                ideation to release, I actively contribute to UX decisions, code quality,
                performance optimization, and continuous improvement.
              </p>
              <p>
                Within corporate teams, I thrive in structured, goal-oriented environments where
                collaboration, efficiency, and innovation drive success. I’ve led and worked in
                cross-functional teams, delivering under tight deadlines while maintaining high
                standards of quality and security.
              </p>
              <p>
                I&apos;m a fast learner, creative thinker, and problem-solver who embraces
                challenges and adapts quickly to evolving technologies. Whether leading initiatives
                or working independently, I remain committed to delivering impactful results.
              </p>
            </div>

            <div className="col md:col-40 pl-0 md:pl-1">
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
