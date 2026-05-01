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
      projects: [
        {
          title: '4medica Portal',
          description:
            'Leading the UI development of 4medica Portal, the new platform that helps 4medica clients to manage and monitor their business, products and services.',
          url: 'https://portal.4medica.io/',
        },
        {
          title: '4Health',
          description:
            'Leading the UI development of 4Health, which help to get reports from lab partners and deliver to the end customers',
          url: 'https://4health.me/',
        },
      ],
    },
    {
      date: '2016 - 2020',
      title: 'Senior Software Engineer',
      company: 'Skyonn Technologies Pvt. Ltd.',
      description:
        'Working for Wipro as a contract employee with experience in HTML5, CSS3, JavaScript, Grunt, Ajax, Jenkins, Git, Azure, requireJs, etc.',
      projects: [
        {
          title: 'Philips Store for Business',
          description:
            'A portal for Philips Professional Lighting (Smart Lighting, Professional Lighting, Lumileds, Signify) that helps dealers, distributors and end customers across the world to select and buy the right products for their needs.',
          url: 'https://www.b2bshop.philips.com/',
        },
        {
          title: 'Dubai Trade',
          description:
            'Dubai Trade is the premier trade facilitation platform in the region, integrating port, logistics, and customs services into a seamless digital ecosystem. It streamlines international trade operations by connecting buyers, sellers, banks, and government agencies through a unified interface.',
          url: 'https://www.dubaitrade.ae/en/',
        },
      ],
    },
    {
      date: '2012 - 2016',
      title: 'Senior Software Engineer',
      company: 'LSG Technologies India Pvt. Ltd.',
      description:
        '4 years experience Website design & development, responsive website creation, html5, css3, JavaScript, jQuery, brochure creation, Flash animation, PowerPoint Presentations, etc.',
      projects: [
        {
          title: 'Legal Bill Review',
          description:
            'Legal bill review is a transformative financial approach to bring a paradigm shift in efficiency, transparency and modernity in corporate cost management.',
          url: '#',
        },
        {
          title: 'Beach Plum Villa',
          description:
            'Beach Plum Villa is a Luxury Villa located in the picturesque coastal town of Wellfleet, Massachusetts. I was responsible for the complete UI development of the website.',
          url: 'https://beachplumvilla.com/',
        },
      ],
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
    <div className="experience-page w-full px-5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((item, index) => (
            <div key={index} className="p-3">
              <div className="h-full py-3 px-6 border border-solid rounded-lg border-50">
                <p className="text-base text-800 mx-0 my-2">{item.date}</p>
                <p className="text-2xl text-900 font-bold mx-0 my-2">{item.title}</p>
                <p className="text-xl text-800 font-semibold mx-0 my-2">{item.company}</p>
                <p className="text-base text-800 mx-0 my-2">{item.description}</p>
                {item.projects?.length && (
                  <p className="text-lg text-900 font-bold mx-0 my-2">Projects:</p>
                )}
                {item.projects?.map((project, projectIndex) => (
                  <div key={projectIndex} className="mt-3">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <p className="text-lg text-900 font-bold mx-0 my-2">{project.title}</p>
                    </a>
                    <p className="text-base text-800 mx-0 my-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
