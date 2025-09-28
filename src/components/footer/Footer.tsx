import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer p-3 flex justify-start items-end">
      <div className="based-in">
        <div>Based in</div>
        <div className="underline">Kerala, India</div>
      </div>
      <div className="hire-me flex flex-col items-end ml-auto">
        <div>Want to hire me?</div>
        <a href="mailto:contact@codebynithin.com" className="underline">
          contact@codebynithin.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
