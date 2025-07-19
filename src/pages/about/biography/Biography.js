import React from 'react';
import '../About.css';

export default function Biography() {
  return (
    <div className="about-container">
      <main className="about-main">
        <h2 className="about-title">Biography</h2>
        <div className="about-list flex pl-1">
          <div className="col md:col-60 pr-2 md:pr-0">
            <p>
              I&apos;m a passionate and results-oriented Full Stack Developer with a solid
              foundation in building end-to-end digital solutions across both product-driven and
              corporate environments. With hands-on experience in architecting, developing, and
              deploying full-scale web and mobile applications, I bring a strong blend of technical
              expertise and business awareness to every project I take on.{' '}
            </p>
            <p>
              In product development, I focus on delivering intuitive, high-performance applications
              that solve real user problems and scale with business growth. From ideation to
              release, I actively contribute to UX decisions, code quality, performance
              optimization, and continuous improvement.
            </p>
            <p>
              Within corporate teams, I thrive in structured, goal-oriented environments where
              collaboration, efficiency, and innovation drive success. I&apos;ve led and worked in
              cross-functional teams, delivering under tight deadlines while maintaining high
              standards of quality and security.
            </p>
            <p>
              I&apos;m a fast learner, creative thinker, and problem-solver who embraces challenges
              and adapts quickly to evolving technologies. Whether leading initiatives or working
              independently, I remain committed to delivering impactful results.
            </p>
          </div>

          <div className="col md:col-40 pl-0 md:pl-1">
            <ul className="info">
              <li>
                <strong>Age</strong>
                <span>{new Date().getFullYear() - 1986}</span>
              </li>
              <li>
                <strong>Mobile</strong>
                <a href="tel:+919496334758">+91 9496 334 758</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:mails2nithin@gmail.com">mails2nithin@gmail.com</a>
              </li>
              <li>
                <strong>Address</strong>
                Ernakulam, Kerala
              </li>
              <li>
                <strong>Residence</strong>
                Indian
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
