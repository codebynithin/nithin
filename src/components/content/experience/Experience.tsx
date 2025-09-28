import React from 'react';
import './Experience.scss';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: '2020 - Present',
      title: 'UI Team lead',
      company: 'Sorice Solutions Pvt. Ltd.',
      description:
        'Working in health domain as a MEAN developer with experience in Angular, NativeScript, NestJs, Node js, HTML5, CSS3, JavaScript, Git, Kubernetes, etc.',
    },
    {
      date: '2016 - 2020',
      title: 'Senior Software Engineer',
      company: 'Skyonn Technologies Pvt. Ltd.',
      description:
        'Working for Wipro as a contract employee with experience in HTML5, CSS3, JavaScript, Grunt, Ajax, Jenkins, Git, Azure, requireJs, etc.',
    },
    {
      date: '2012 - 2016',
      title: 'Senior Software Engineer',
      company: 'LSG Technologies India Pvt. Ltd.',
      description:
        '4 years experience Website design & development, responsive website creation, html5, css3, JavaScript, jQuery, brochure creation, Flash animation, PowerPoint Presentations, etc.',
    },
    {
      date: '2011 - 2012',
      title: 'Web / Graphic Designer',
      company: 'Geojit Technologies Pvt. Ltd.',
      description:
        '1.3 years experience in Website design, Flash animation, Flex & brochure printing, PowerPoint Presentations, back office works, etc.',
    },
    {
      date: '2007 - 2010',
      title: 'Junior Executive',
      company: 'Geojit BNP Paribas Financial Services Ltd.',
      description: '3.7 years experience in Back office works, MS office, etc.',
    },
  ];

  return (
    <div className="experience-page w-full px-5 md:px-8">
      <div className="grid gap-4">
        <h1 className="col-12 p-0 text-4xl text-900 font-bold m-0">Experience</h1>
        <hr className="col-12 p-0 m-0 border-50" />
        <div className="col-12 p-0">
          <p className="text-lg text-800 mx-0 my-2">
            I am a UI Team Lead with over {new Date().getFullYear() - 2012} years of experience in
            software development, specializing in MEAN stack (Angular, NativeScript, NestJS,
            Node.js) and front-end leadership within the healthcare domain. My expertise spans UI
            architecture, team mentoring, responsive web development, and scalable application
            design, complemented by strong skills in HTML5, CSS3, JavaScript, Git, Kubernetes,
            Azure, and CI/CD tools. Previously, I contributed to enterprise projects at Wipro (via
            Skynonn Technologies) and LSG Technologies, focusing on modern UI development,
            automation, and cloud integration, and also hold early career experience in web/graphic
            design and operations management, giving me a well-rounded perspective in both
            technology and creative problem-solving.
          </p>
        </div>
        <div className="grid grid-nogutter">
          {experiences.map((item, index) => (
            <div key={index} className="col-12 md:col-6 lg:col-4 p-3">
              <div className="h-full p-3 border-1 border-solid border-round border-50">
                <p className="text-sm text-800 mx-0 my-2">{item.date}</p>
                <p className="text-xl text-900 font-bold mx-0 my-2">{item.title}</p>
                <p className="text-sm text-800 mx-0 my-2">{item.company}</p>
                <p className="mx-0 my-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
