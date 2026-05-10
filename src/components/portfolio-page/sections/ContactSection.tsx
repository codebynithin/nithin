import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => (
  <section id="contact" className="contact-section">
    <div className="contact-section__watermark">CONTACT</div>
    <div className="contact-section__glow" />
    <div className="contact-section__content">
      <span className="section-label">Get In Touch</span>
      <h2>
        Let&apos;s build something <strong>great</strong> together
      </h2>
      <p>
        Have a project in mind? Whether it&apos;s a web app, mobile experience, or a team that needs
        strong technical leadership, I&apos;d love to hear from you.
      </p>

      <div className="contact-section__actions">
        <a className="button button--acid" href="mailto:contact@codebynithin.com">
          <Mail size={17} />
          contact@codebynithin.com
        </a>
        <a
          className="button button--outline"
          href="https://codebynithin.com"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={17} />
          codebynithin.com
        </a>
      </div>

      <div className="contact-section__socials">
        <a
          className="icon-button"
          href="https://github.com/codebynithin"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
        </a>
        <a
          className="icon-button"
          href="https://www.linkedin.com/in/codebynithin/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
        </a>
        <a className="icon-button" href="mailto:contact@codebynithin.com" title="Email">
          <Send size={19} />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
