import React, { useEffect, useRef, useState } from 'react';
import { skillBars } from '../../../data/portfolio-page.data';

const stats = [
  { value: 13, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Technologies Mastered' },
];

const AboutSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ years: 0, projects: 0, tech: 0 });
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    let counted = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || counted) return;
        counted = true;

        const targets = { years: 13, projects: 50, tech: 15 };
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / 1500, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCounts({
            years: Math.round(eased * targets.years),
            projects: Math.round(eased * targets.projects),
            tech: Math.round(eased * targets.tech),
          });

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBarsVisible(true);
      },
      { threshold: 0.25 },
    );

    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section section--wide about-section">
      <div className="stat-grid" ref={statsRef}>
        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.label}>
            <strong>
              {[counts.years, counts.projects, counts.tech][index]}
              {stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="about-section__content">
        <div>
          <span className="section-label">About Me</span>
          <h2>
            Building digital products <em>people love</em>
          </h2>
          <p>
            I&apos;m <strong>Nithin V</strong>, a UI Team Lead and Full-Stack Developer with over 13
            years of hands-on experience. I currently lead UI engineering at Sorice Solutions in
            Ernakulam, Kerala.
          </p>
          <p>
            My work spans web interfaces, smooth mobile apps, scalable backend systems, and design
            thinking. I care about the full shape of software: experience, performance,
            maintainability, and business impact.
          </p>
          <div className="about-section__facts">
            <div>
              <span>Current Role</span>
              <strong>UI Team Lead</strong>
            </div>
            <div>
              <span>Company</span>
              <strong>Sorice Solutions</strong>
            </div>
          </div>
        </div>

        <div className="skill-bars" ref={barsRef}>
          {skillBars.map((bar, index) => (
            <div className="skill-bar" key={bar.label}>
              <div className="skill-bar__label">
                <span>{bar.label}</span>
                <span>{bar.percentage}%</span>
              </div>
              <div className="skill-bar__track">
                <span
                  style={{
                    width: barsVisible ? `${bar.percentage}%` : 0,
                    transitionDelay: `${index * 110}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
