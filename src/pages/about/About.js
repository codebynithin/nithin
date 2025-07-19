import React from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import './About.css';
import Biography from './biography/Biography';
import Services from './services/Services';
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Education from './education/Education';

const sections = [
  { name: 'Biography', path: '/about/biography' },
  { name: 'Services', path: '/about/services' },
  { name: 'Experience', path: '/about/experience' },
  { name: 'Skills', path: '/about/skills' },
  { name: 'Education', path: '/about/education' },
];

export default function About() {
  const location = useLocation();

  return (
    <div className="about-container">
      <aside className="about-sidebar">
        <ul>
          {sections.map((section) => (
            <li key={section.name} className={location.pathname === section.path ? 'active' : ''}>
              <Link to={section.path}>{section.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <Routes>
        <Route index element={<Biography />} />
        <Route path="biography" element={<Biography />} />
        <Route path="services" element={<Services />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
}
