import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about-page w-full px-5 md:px-8">
      <div className="grid gap-4">
        <h1 className="col-12 p-0 text-2xl font-bold mb-4">About Me</h1>
        <div className="flex flex-column md:flex-row gap-8">
          <div className="col p-0">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
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

            <hr className="my-4 border-50" />

            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

            <ul className="info list-none p-0 m-0">
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Age</strong>
                <span>{new Date().getFullYear() - 1986}</span>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Mobile</strong>
                <a href="tel:+919496334758">+91 9496 334 758</a>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Email</strong>
                <a href="mailto:maili2nithin@gmail.com">mails2nithin@gmail.com</a>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Address</strong>
                <span>Ernakulam, Kerala</span>
              </li>
              <li className="flex align-items-center py-2">
                <strong className="w-7rem md:w-12rem font-medium">Residence</strong>
                <span>Indian</span>
              </li>
            </ul>
          </div>
          <div className="col p-0 relative">
            <hr className="my-4 border-50 md:absolute md:top-0 md:left-0 md:h-full md:my-0 spacer" />
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="info list-none p-0 m-0 flex flex-column md:flex-row align-items-start flex-wrap">
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-globe text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">Web Development</h4>
                <p>
                  Modern and mobile-ready website that will help you reach all of your marketing.
                </p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-smartphone text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">Mobile App Development</h4>
                <p>Mobile app development that will help you reach all of your marketing.</p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-pen-tool text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">UX Design</h4>
                <p>UX design that will help you reach all of your marketing.</p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-search text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">SEO</h4>
                <p>SEO services that will help you reach all of your marketing.</p>
              </li>
            </ul>

            <hr className="my-4 border-50" />

            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            {/* <ul className="info list-none p-0 m-0 flex flex-column md:flex-row align-items-start flex-wrap">
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-globe text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">Web Development</h4>
                <p>
                  Modern and mobile-ready website that will help you reach all of your marketing.
                </p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-smartphone text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">Mobile App Development</h4>
                <p>Mobile app development that will help you reach all of your marketing.</p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-pen-tool text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">UX Design</h4>
                <p>UX design that will help you reach all of your marketing.</p>
              </li>
              <li className="col-12 md:col-6 py-3 flex flex-column align-items-center">
                <i className="cbn-search text-4xl md:text-6xl bg-black-alpha-90 p-3 md:p-4 border-circle"></i>
                <h4 className="font-bold text-xl my-4">SEO</h4>
                <p>SEO services that will help you reach all of your marketing.</p>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
